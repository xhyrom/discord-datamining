(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18438"],
  {
    166516: function (e) {
      !(function () {
        var t = function (e) {
          "use strict";
          e = e || {};
          var t,
            n,
            r,
            o,
            i,
            a,
            c,
            s,
            u,
            h,
            d,
            f,
            l,
            p,
            y,
            w,
            m = {
              bgColor: "#d00",
              textColor: "#fff",
              fontFamily: "sans-serif",
              fontStyle: "bold",
              type: "circle",
              position: "down",
              animation: "slide",
              elementId: !1,
              dataUrl: !1,
              win: window,
            };
          ((l = {}).ff = "undefined" != typeof InstallTrigger),
            (l.chrome = !!window.chrome),
            (l.opera =
              !!window.opera || navigator.userAgent.indexOf("Opera") >= 0),
            (l.ie = !1),
            (l.safari =
              Object.prototype.toString
                .call(window.HTMLElement)
                .indexOf("Constructor") > 0),
            (l.supported = l.chrome || l.ff || l.opera);
          var g = [];
          (d = function () {}), (s = f = !1);
          var v = {};
          (v.ready = function () {
            (s = !0), v.reset(), d();
          }),
            (v.reset = function () {
              if (!!s)
                (g = []),
                  (u = !1),
                  (h = !1),
                  a.clearRect(0, 0, o, r),
                  a.drawImage(c, 0, 0, o, r),
                  A.setIcon(i),
                  window.clearTimeout(p),
                  window.clearTimeout(y);
            }),
            (v.start = function () {
              if (!!s && !h) {
                var e = function () {
                  (u = g[0]), (h = !1), g.length > 0 && (g.shift(), v.start());
                };
                if (g.length > 0) {
                  h = !0;
                  var n = function () {
                    [
                      "type",
                      "animation",
                      "bgColor",
                      "textColor",
                      "fontFamily",
                      "fontStyle",
                    ].forEach(function (e) {
                      e in g[0].options && (t[e] = g[0].options[e]);
                    }),
                      O.run(
                        g[0].options,
                        function () {
                          e();
                        },
                        !1,
                      );
                  };
                  u
                    ? O.run(
                        u.options,
                        function () {
                          n();
                        },
                        !0,
                      )
                    : n();
                }
              }
            });
          var x = {},
            b = function (e) {
              return (
                (e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n),
                (e.x = o * e.x),
                (e.y = r * e.y),
                (e.w = o * e.w),
                (e.h = r * e.h),
                (e.len = ("" + e.n).length),
                e
              );
            };
          (x.circle = function (e) {
            e = b(e);
            var n = !1;
            2 === e.len
              ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w), (n = !0))
              : e.len >= 3 &&
                ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w), (n = !0)),
              a.clearRect(0, 0, o, r),
              a.drawImage(c, 0, 0, o, r),
              a.beginPath(),
              (a.font =
                t.fontStyle +
                " " +
                Math.floor(e.h * (e.n > 99 ? 0.85 : 1)) +
                "px " +
                t.fontFamily),
              (a.textAlign = "center"),
              n
                ? (a.moveTo(e.x + e.w / 2, e.y),
                  a.lineTo(e.x + e.w - e.h / 2, e.y),
                  a.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2),
                  a.lineTo(e.x + e.w, e.y + e.h - e.h / 2),
                  a.quadraticCurveTo(
                    e.x + e.w,
                    e.y + e.h,
                    e.x + e.w - e.h / 2,
                    e.y + e.h,
                  ),
                  a.lineTo(e.x + e.h / 2, e.y + e.h),
                  a.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2),
                  a.lineTo(e.x, e.y + e.h / 2),
                  a.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y))
                : a.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI),
              (a.fillStyle =
                "rgba(" +
                t.bgColor.r +
                "," +
                t.bgColor.g +
                "," +
                t.bgColor.b +
                "," +
                e.o +
                ")"),
              a.fill(),
              a.closePath(),
              a.beginPath(),
              a.stroke(),
              (a.fillStyle =
                "rgba(" +
                t.textColor.r +
                "," +
                t.textColor.g +
                "," +
                t.textColor.b +
                "," +
                e.o +
                ")"),
              "number" == typeof e.n && e.n > 999
                ? a.fillText(
                    (e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+",
                    Math.floor(e.x + e.w / 2),
                    Math.floor(e.y + e.h - 0.2 * e.h),
                  )
                : a.fillText(
                    e.n,
                    Math.floor(e.x + e.w / 2),
                    Math.floor(e.y + e.h - 0.15 * e.h),
                  ),
              a.closePath();
          }),
            (x.rectangle = function (e) {
              e = b(e);
              var n = !1;
              2 === e.len
                ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w))
                : e.len >= 3 && ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w)),
                a.clearRect(0, 0, o, r),
                a.drawImage(c, 0, 0, o, r),
                a.beginPath(),
                (a.font =
                  t.fontStyle +
                  " " +
                  Math.floor(e.h * (e.n > 99 ? 0.9 : 1)) +
                  "px " +
                  t.fontFamily),
                (a.textAlign = "center"),
                (a.fillStyle =
                  "rgba(" +
                  t.bgColor.r +
                  "," +
                  t.bgColor.g +
                  "," +
                  t.bgColor.b +
                  "," +
                  e.o +
                  ")"),
                a.fillRect(e.x, e.y, e.w, e.h),
                (a.fillStyle =
                  "rgba(" +
                  t.textColor.r +
                  "," +
                  t.textColor.g +
                  "," +
                  t.textColor.b +
                  "," +
                  e.o +
                  ")"),
                "number" == typeof e.n && e.n > 999
                  ? a.fillText(
                      (e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+",
                      Math.floor(e.x + e.w / 2),
                      Math.floor(e.y + e.h - 0.2 * e.h),
                    )
                  : a.fillText(
                      e.n,
                      Math.floor(e.x + e.w / 2),
                      Math.floor(e.y + e.h - 0.15 * e.h),
                    ),
                a.closePath();
            });
          function E(e) {
            if (e.paused || e.ended || f) return !1;
            try {
              a.clearRect(0, 0, o, r), a.drawImage(e, 0, 0, o, r);
            } catch (e) {}
            (y = setTimeout(function () {
              E(e);
            }, O.duration)),
              A.setIcon(i);
          }
          var A = {};
          function C(e) {
            e = e.replace(
              /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              function (e, t, n, r) {
                return t + t + n + n + r + r;
              },
            );
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return (
              !!t && {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16),
              }
            );
          }
          function T(e, t) {
            var n,
              r = {};
            for (n in e) r[n] = e[n];
            for (n in t) r[n] = t[n];
            return r;
          }
          (A.getIcon = function () {
            var e = !1;
            return (
              t.element
                ? (e = t.element)
                : t.elementId
                  ? (e = w.getElementById(t.elementId)).setAttribute(
                      "href",
                      e.getAttribute("src"),
                    )
                  : !1 ===
                      (e = (function () {
                        for (
                          var e = w
                              .getElementsByTagName("head")[0]
                              .getElementsByTagName("link"),
                            t = e.length,
                            n = t - 1;
                          n >= 0;
                          n--
                        )
                          if (
                            /(^|\s)icon(\s|$)/i.test(e[n].getAttribute("rel"))
                          )
                            return e[n];
                        return !1;
                      })()) &&
                    ((e = w.createElement("link")).setAttribute("rel", "icon"),
                    w.getElementsByTagName("head")[0].appendChild(e)),
              e.setAttribute("type", "image/png"),
              e
            );
          }),
            (A.setIcon = function (e) {
              var r = e.toDataURL("image/png");
              if ((t.dataUrl && t.dataUrl(r), t.element))
                t.element.setAttribute("href", r),
                  t.element.setAttribute("src", r);
              else if (t.elementId) {
                var o = w.getElementById(t.elementId);
                o.setAttribute("href", r), o.setAttribute("src", r);
              } else if (l.ff || l.opera) {
                var i = n;
                (n = w.createElement("link")),
                  l.opera && n.setAttribute("rel", "icon"),
                  n.setAttribute("rel", "icon"),
                  n.setAttribute("type", "image/png"),
                  w.getElementsByTagName("head")[0].appendChild(n),
                  n.setAttribute("href", r),
                  i.parentNode && i.parentNode.removeChild(i);
              } else n.setAttribute("href", r);
            });
          var O = {};
          return (
            (O.duration = 40),
            (O.types = {}),
            (O.types.fade = [
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.1 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.2 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.3 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.4 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.5 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.6 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.7 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.8 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.9 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (O.types.none = [{ x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 }]),
            (O.types.pop = [
              { x: 1, y: 1, w: 0, h: 0, o: 1 },
              { x: 0.9, y: 0.9, w: 0.1, h: 0.1, o: 1 },
              { x: 0.8, y: 0.8, w: 0.2, h: 0.2, o: 1 },
              { x: 0.7, y: 0.7, w: 0.3, h: 0.3, o: 1 },
              { x: 0.6, y: 0.6, w: 0.4, h: 0.4, o: 1 },
              { x: 0.5, y: 0.5, w: 0.5, h: 0.5, o: 1 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (O.types.popFade = [
              { x: 0.75, y: 0.75, w: 0, h: 0, o: 0 },
              { x: 0.65, y: 0.65, w: 0.1, h: 0.1, o: 0.2 },
              { x: 0.6, y: 0.6, w: 0.2, h: 0.2, o: 0.4 },
              { x: 0.55, y: 0.55, w: 0.3, h: 0.3, o: 0.6 },
              { x: 0.5, y: 0.5, w: 0.4, h: 0.4, o: 0.8 },
              { x: 0.45, y: 0.45, w: 0.5, h: 0.5, o: 0.9 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (O.types.slide = [
              { x: 0.4, y: 1, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.8, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.7, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.6, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.5, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (O.run = function (e, n, r, o) {
              var a =
                O.types[
                  w.hidden || w.msHidden || w.webkitHidden || w.mozHidden
                    ? "none"
                    : t.animation
                ];
              if (
                ((o =
                  !0 === r
                    ? void 0 !== o
                      ? o
                      : a.length - 1
                    : void 0 !== o
                      ? o
                      : 0),
                (n = n || function () {}),
                o < a.length && o >= 0)
              )
                x[t.type](T(e, a[o])),
                  (p = setTimeout(function () {
                    r ? (o -= 1) : (o += 1), O.run(e, n, r, o);
                  }, O.duration)),
                  A.setIcon(i);
              else {
                n();
                return;
              }
            }),
            !(function () {
              ((t = T(m, e)).bgColor = C(t.bgColor)),
                (t.textColor = C(t.textColor)),
                (t.position = t.position.toLowerCase()),
                (t.animation = O.types["" + t.animation]
                  ? t.animation
                  : m.animation),
                (w = t.win.document);
              var s = t.position.indexOf("up") > -1,
                u = t.position.indexOf("left") > -1;
              if (s || u)
                for (var h = 0; h < O.types["" + t.animation].length; h++) {
                  var d = O.types["" + t.animation][h];
                  s &&
                    (d.y < 0.6
                      ? (d.y = d.y - 0.4)
                      : (d.y = d.y - 2 * d.y + (1 - d.w))),
                    u &&
                      (d.x < 0.6
                        ? (d.x = d.x - 0.4)
                        : (d.x = d.x - 2 * d.x + (1 - d.h))),
                    (O.types["" + t.animation][h] = d);
                }
              (t.type = x["" + t.type] ? t.type : m.type),
                (n = A.getIcon()),
                (i = document.createElement("canvas")),
                (c = document.createElement("img")),
                n.hasAttribute("href")
                  ? (c.setAttribute("crossOrigin", "anonymous"),
                    (c.onload = function () {
                      (r = c.height > 0 ? c.height : 32),
                        (o = c.width > 0 ? c.width : 32),
                        (i.height = r),
                        (i.width = o),
                        (a = i.getContext("2d")),
                        v.ready();
                    }),
                    c.setAttribute("src", n.getAttribute("href")))
                  : ((c.onload = function () {
                      (r = 32),
                        (o = 32),
                        (c.height = r),
                        (c.width = o),
                        (i.height = r),
                        (i.width = o),
                        (a = i.getContext("2d")),
                        v.ready();
                    }),
                    c.setAttribute("src", ""));
            })(),
            {
              badge: function (e, t) {
                (t = ("string" == typeof t ? { animation: t } : t) || {}),
                  (d = function () {
                    try {
                      if ("number" == typeof e ? e > 0 : "" !== e) {
                        var n = { type: "badge", options: { n: e } };
                        if (
                          ("animation" in t &&
                            O.types["" + t.animation] &&
                            (n.options.animation = "" + t.animation),
                          "type" in t &&
                            x["" + t.type] &&
                            (n.options.type = "" + t.type),
                          ["bgColor", "textColor"].forEach(function (e) {
                            e in t && (n.options[e] = C(t[e]));
                          }),
                          ["fontStyle", "fontFamily"].forEach(function (e) {
                            e in t && (n.options[e] = t[e]);
                          }),
                          g.push(n),
                          g.length > 100)
                        )
                          throw Error("Too many badges requests in queue.");
                        v.start();
                      } else v.reset();
                    } catch (e) {
                      throw Error("Error setting badge. Message: " + e.message);
                    }
                  }),
                  s && d();
              },
              video: function (e) {
                (d = function () {
                  try {
                    if ("stop" === e) {
                      (f = !0), v.reset(), (f = !1);
                      return;
                    }
                    e.addEventListener(
                      "play",
                      function () {
                        E(this);
                      },
                      !1,
                    );
                  } catch (e) {
                    throw Error("Error setting video. Message: " + e.message);
                  }
                }),
                  s && d();
              },
              image: function (e) {
                (d = function () {
                  try {
                    var t = e.width,
                      n = e.height,
                      c = document.createElement("img"),
                      s = t / o < n / r ? t / o : n / r;
                    c.setAttribute("crossOrigin", "anonymous"),
                      (c.onload = function () {
                        a.clearRect(0, 0, o, r),
                          a.drawImage(c, 0, 0, o, r),
                          A.setIcon(i);
                      }),
                      c.setAttribute("src", e.getAttribute("src")),
                      (c.height = n / s),
                      (c.width = t / s);
                  } catch (e) {
                    throw Error("Error setting image. Message: " + e.message);
                  }
                }),
                  s && d();
              },
              webcam: function (e) {
                if (
                  ((!window.URL || !window.URL.createObjectURL) &&
                    ((window.URL = window.URL || {}),
                    (window.URL.createObjectURL = function (e) {
                      return e;
                    })),
                  l.supported)
                ) {
                  var t = !1;
                  (navigator.getUserMedia =
                    navigator.getUserMedia ||
                    navigator.oGetUserMedia ||
                    navigator.msGetUserMedia ||
                    navigator.mozGetUserMedia ||
                    navigator.webkitGetUserMedia),
                    (d = function () {
                      try {
                        if ("stop" === e) {
                          (f = !0), v.reset(), (f = !1);
                          return;
                        }
                        ((t = document.createElement("video")).width = o),
                          (t.height = r),
                          navigator.getUserMedia(
                            { video: !0, audio: !1 },
                            function (e) {
                              (t.src = URL.createObjectURL(e)), t.play(), E(t);
                            },
                            function () {},
                          );
                      } catch (e) {
                        throw Error(
                          "Error setting webcam. Message: " + e.message,
                        );
                      }
                    }),
                    s && d();
                }
              },
              reset: v.reset,
              browser: { supported: l.supported },
            }
          );
        };
        "undefined" != typeof define && define.amd
          ? define([], function () {
              return t;
            })
          : e.exports
            ? (e.exports = t)
            : (this.Favico = t);
      })();
    },
    785946: function (e, t, n) {
      "use strict";
      function r(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e;
      }
      var o,
        i = r(n(634450)),
        a = r(n(115953));
      n(368040);
      var c = r(n(765490));
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function h(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e;
      }
      function d(e, t) {
        var n, r;
        return ((n = e),
        (r = t),
        0 === n.toLowerCase().indexOf(r.toLowerCase()) &&
          -1 !== "/?#".indexOf(n.charAt(r.length)))
          ? e.substr(t.length)
          : e;
      }
      function f(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function l(e) {
        var t = e || "/",
          n = "",
          r = "",
          o = t.indexOf("#");
        -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
        var i = t.indexOf("?");
        return (
          -1 !== i && ((n = t.substr(i)), (t = t.substr(0, i))),
          { pathname: t, search: "?" === n ? "" : n, hash: "#" === r ? "" : r }
        );
      }
      function p(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          o = t || "/";
        return (
          n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r),
          o
        );
      }
      function y(e, t, n, r) {
        var o;
        "string" == typeof e
          ? ((o = l(e)).state = t)
          : (void 0 === (o = s({}, e)).pathname && (o.pathname = ""),
            o.search
              ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search)
              : (o.search = ""),
            o.hash
              ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash)
              : (o.hash = ""),
            void 0 !== t && void 0 === o.state && (o.state = t));
        try {
          o.pathname = decodeURI(o.pathname);
        } catch (e) {
          throw e instanceof URIError
            ? URIError(
                'Pathname "' +
                  o.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.',
              )
            : e;
        }
        return (
          n && (o.key = n),
          r
            ? o.pathname
              ? "/" !== o.pathname.charAt(0) &&
                (o.pathname = i(o.pathname, r.pathname))
              : (o.pathname = r.pathname)
            : o.pathname || (o.pathname = "/"),
          o
        );
      }
      function w() {
        var e = null,
          t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, o) {
            if (null != e) {
              var i = "function" == typeof e ? e(t, n) : e;
              "string" == typeof i
                ? "function" == typeof r
                  ? r(i, o)
                  : o(!0)
                : o(!1 !== i);
            } else o(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var m = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function g(e, t) {
        t(window.confirm(e));
      }
      var v = "popstate",
        x = "hashchange";
      function b() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      var E = "hashchange",
        A = {
          hashbang: {
            encodePath: function (e) {
              return "!" === e.charAt(0) ? e : "!/" + h(e);
            },
            decodePath: function (e) {
              return "!" === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: h, decodePath: u },
          slash: { encodePath: u, decodePath: u },
        };
      function C(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t);
      }
      function T() {
        var e = window.location.href,
          t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1);
      }
      function O(e) {
        window.location.replace(C(window.location.href) + "#" + e);
      }
      function R(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      t.createBrowserHistory = function (e) {
        void 0 === e && (e = {}), m || c(!1);
        var t,
          n = window.history,
          r =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
          o = -1 !== window.navigator.userAgent.indexOf("Trident"),
          i = e,
          a = i.forceRefresh,
          h = void 0 !== a && a,
          l = i.getUserConfirmation,
          E = void 0 === l ? g : l,
          A = i.keyLength,
          C = void 0 === A ? 6 : A,
          T = e.basename ? f(u(e.basename)) : "";
        function O(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            o = window.location,
            i = o.pathname + o.search + o.hash;
          return T && (i = d(i, T)), y(i, r, n);
        }
        function R() {
          return Math.random().toString(36).substr(2, C);
        }
        var k = w();
        function P(e) {
          s(N, e),
            (N.length = n.length),
            k.notifyListeners(N.location, N.action);
        }
        function I(e) {
          (void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")) ||
            U(O(e.state));
        }
        function M() {
          U(O(b()));
        }
        var _ = !1;
        function U(e) {
          _
            ? ((_ = !1), P())
            : k.confirmTransitionTo(e, "POP", E, function (t) {
                var n, r, o, i, a;
                t
                  ? P({ action: "POP", location: e })
                  : ((n = e),
                    (r = N.location),
                    -1 === (o = S.indexOf(r.key)) && (o = 0),
                    -1 === (i = S.indexOf(n.key)) && (i = 0),
                    (a = o - i) && ((_ = !0), B(a)));
              });
        }
        var L = O(b()),
          S = [L.key];
        function j(e) {
          return T + p(e);
        }
        function B(e) {
          n.go(e);
        }
        var H = 0;
        function z(e) {
          1 === (H += e) && 1 === e
            ? (window.addEventListener(v, I),
              o && window.addEventListener(x, M))
            : 0 === H &&
              (window.removeEventListener(v, I),
              o && window.removeEventListener(x, M));
        }
        var F = !1,
          N = {
            length: n.length,
            action: "POP",
            location: L,
            createHref: j,
            push: function (e, t) {
              var o = y(e, t, R(), N.location);
              k.confirmTransitionTo(o, "PUSH", E, function (e) {
                if (e) {
                  var t = j(o),
                    i = o.key,
                    a = o.state;
                  if (r) {
                    if ((n.pushState({ key: i, state: a }, null, t), h))
                      window.location.href = t;
                    else {
                      var c = S.indexOf(N.location.key),
                        s = S.slice(0, c + 1);
                      s.push(o.key),
                        (S = s),
                        P({ action: "PUSH", location: o });
                    }
                  } else window.location.href = t;
                }
              });
            },
            replace: function (e, t) {
              var o = "REPLACE",
                i = y(e, t, R(), N.location);
              k.confirmTransitionTo(i, o, E, function (e) {
                if (e) {
                  var t = j(i),
                    a = i.key,
                    c = i.state;
                  if (r) {
                    if ((n.replaceState({ key: a, state: c }, null, t), h))
                      window.location.replace(t);
                    else {
                      var s = S.indexOf(N.location.key);
                      -1 !== s && (S[s] = i.key), P({ action: o, location: i });
                    }
                  } else window.location.replace(t);
                }
              });
            },
            go: B,
            goBack: function () {
              B(-1);
            },
            goForward: function () {
              B(1);
            },
            block: function (e) {
              void 0 === e && (e = !1);
              var t = k.setPrompt(e);
              return (
                F || (z(1), (F = !0)),
                function () {
                  return F && ((F = !1), z(-1)), t();
                }
              );
            },
            listen: function (e) {
              var t = k.appendListener(e);
              return (
                z(1),
                function () {
                  z(-1), t();
                }
              );
            },
          };
        return N;
      };
    },
    438361: function (e, t, n) {
      "use strict";
      n(77623)("createBrowserHistory"),
        (e.exports = n(792661).createBrowserHistory);
    },
    792661: function (e, t, n) {
      "use strict";
      e.exports = n(785946);
    },
    77623: function (e) {
      "use strict";
      var t = function () {};
      e.exports = function (e) {
        t(
          'Please use `require("history").%s` instead of `require("history/%s")`. Support for the latter will be removed in the next major release.',
          [e, e],
        );
      };
    },
    14199: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(470079);
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var i = function (e) {
          var t = document.createElement("script");
          (t.async = !0),
            (t.defer = !0),
            (t.src = e),
            document.head && document.head.appendChild(t);
        },
        a = /(http|https):\/\/(www)?.+\/recaptcha/,
        c = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
        s = (function (e) {
          function t() {
            for (var t, n = arguments.length, o = Array(n), c = 0; c < n; c++)
              o[c] = arguments[c];
            return (
              ((t = e.call.apply(e, [this].concat(o)) || this).container =
                void 0),
              (t.timer = void 0),
              (t.state = {
                instanceKey: Date.now(),
                ready: !1,
                rendered: !1,
                invisible: "invisible" === t.props.size,
              }),
              (t._isAvailable = function () {
                var e;
                return !!(null == (e = window.grecaptcha) ? void 0 : e.ready);
              }),
              (t._inject = function () {
                var e;
                t.props.inject &&
                  ((e = a),
                  !Array.from(document.scripts).reduce(function (t, n) {
                    return t || e.test(n.src);
                  }, !1)) &&
                  i(
                    "https://recaptcha.net/recaptcha/api.js?render=explicit" +
                      (t.props.hl ? "&hl=" + t.props.hl : ""),
                  );
              }),
              (t._prepare = function () {
                var e = t.props,
                  n = e.explicit,
                  r = e.onLoad;
                window.grecaptcha.ready(function () {
                  t.setState({ ready: !0 }, function () {
                    n || t.renderExplicitly(), r && r();
                  });
                });
              }),
              (t._renderRecaptcha = function (e, t) {
                return window.grecaptcha.render(e, t);
              }),
              (t._resetRecaptcha = function () {
                return window.grecaptcha.reset(t.state.instanceId);
              }),
              (t._executeRecaptcha = function () {
                return window.grecaptcha.execute(t.state.instanceId);
              }),
              (t._getResponseRecaptcha = function () {
                return window.grecaptcha.getResponse(t.state.instanceId);
              }),
              (t._onVerify = function (e) {
                return t.props.onVerify(e);
              }),
              (t._onExpire = function () {
                return t.props.onExpire && t.props.onExpire();
              }),
              (t._onError = function () {
                return t.props.onError && t.props.onError();
              }),
              (t._stopTimer = function () {
                t.timer && clearInterval(t.timer);
              }),
              (t.componentDidMount = function () {
                t._inject(),
                  t._isAvailable()
                    ? t._prepare()
                    : (t.timer = window.setInterval(function () {
                        t._isAvailable() && (t._prepare(), t._stopTimer());
                      }, 500));
              }),
              (t.componentWillUnmount = function () {
                t._stopTimer();
              }),
              (t.renderExplicitly = function () {
                return new Promise(function (e, n) {
                  if (t.state.rendered)
                    return n(
                      Error(
                        "This recaptcha instance has been already rendered.",
                      ),
                    );
                  if (!t.state.ready || !t.container)
                    return n(
                      Error("Recaptcha is not ready for rendering yet."),
                    );
                  var r = t._renderRecaptcha(t.container, {
                    sitekey: t.props.sitekey,
                    theme: t.props.theme,
                    size: t.props.size,
                    badge: t.state.invisible ? t.props.badge : void 0,
                    tabindex: t.props.tabindex,
                    callback: t._onVerify,
                    "expired-callback": t._onExpire,
                    "error-callback": t._onError,
                    isolated: t.state.invisible ? t.props.isolated : void 0,
                    hl: t.state.invisible ? void 0 : t.props.hl,
                  });
                  t.setState({ instanceId: r, rendered: !0 }, function () {
                    t.props.onRender && t.props.onRender(), e();
                  });
                });
              }),
              (t.reset = function () {
                return new Promise(function (e, n) {
                  if (t.state.rendered) return t._resetRecaptcha(), e();
                  n(Error("This recaptcha instance did not render yet."));
                });
              }),
              (t.execute = function () {
                return new Promise(function (e, n) {
                  return t.state.invisible
                    ? (t.state.rendered && (t._executeRecaptcha(), e()),
                      n(Error("This recaptcha instance did not render yet.")))
                    : n(
                        Error(
                          "Manual execution is only available for invisible size.",
                        ),
                      );
                });
              }),
              (t.getResponse = function () {
                return new Promise(function (e, n) {
                  if (t.state.rendered) return e(t._getResponseRecaptcha());
                  n(Error("This recaptcha instance did not render yet."));
                });
              }),
              (t.render = function () {
                var e = r.createElement("div", {
                  key: t.state.instanceKey,
                  id: t.props.id,
                  className: t.props.className,
                  ref: function (e) {
                    return (t.container = e);
                  },
                });
                return t.props.children
                  ? t.props.children({
                      renderExplicitly: t.renderExplicitly,
                      reset: t.reset,
                      execute: t.execute,
                      getResponse: t.getResponse,
                      recaptchaComponent: e,
                    })
                  : e;
              }),
              t
            );
          }
          return (
            (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            o(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = "invisible" === e.size;
              return n !== t.invisible ? { invisible: n } : null;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this;
              c.reduce(function (n, r) {
                return t.props[r] !== e[r] ? [].concat(n, [r]) : n;
              }, []).length > 0 &&
                this.setState(
                  { instanceKey: Date.now(), rendered: !1 },
                  function () {
                    t.props.explicit || t.renderExplicitly();
                  },
                );
            }),
            t
          );
        })(r.Component);
      s.defaultProps = {
        id: "",
        className: "g-recaptcha",
        theme: "light",
        size: "normal",
        badge: "bottomright",
        tabindex: 0,
        explicit: !1,
        inject: !0,
        isolated: !1,
        hl: "",
      };
    },
    765490: function (e) {
      "use strict";
      var t = "Invariant failed";
      e.exports = function (e, n) {
        var r;
        if (!e) throw Error(t);
      };
    },
    368040: function (e, t, n) {
      "use strict";
      n.r(t);
      t.default = function (e, t) {
        var n, r;
      };
    },
  },
]);
//# sourceMappingURL=3c86ce69676002a771a0.js.map
