(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40041"],
  {
    498419(t) {
      !(function () {
        var e = function (t) {
          "use strict";
          t = t || {};
          var e,
            n,
            i,
            r,
            o,
            a,
            s,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            m,
            y = {
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
          ((f = {}).ff = "u" > typeof InstallTrigger),
            (f.chrome = !!window.chrome),
            (f.opera =
              !!window.opera || navigator.userAgent.indexOf("Opera") >= 0),
            (f.ie = !1),
            (f.safari =
              Object.prototype.toString
                .call(window.HTMLElement)
                .indexOf("Constructor") > 0),
            (f.supported = f.chrome || f.ff || f.opera);
          var v = [];
          (h = function () {}), (l = d = !1);
          var b = {};
          (b.ready = function () {
            (l = !0), b.reset(), h();
          }),
            (b.reset = function () {
              l &&
                ((v = []),
                (u = !1),
                (c = !1),
                a.clearRect(0, 0, r, i),
                a.drawImage(s, 0, 0, r, i),
                S.setIcon(o),
                window.clearTimeout(p),
                window.clearTimeout(g));
            }),
            (b.start = function () {
              if (l && !c) {
                var t = function () {
                  (u = v[0]), (c = !1), v.length > 0 && (v.shift(), b.start());
                };
                if (v.length > 0) {
                  c = !0;
                  var n = function () {
                    [
                      "type",
                      "animation",
                      "bgColor",
                      "textColor",
                      "fontFamily",
                      "fontStyle",
                    ].forEach(function (t) {
                      t in v[0].options && (e[t] = v[0].options[t]);
                    }),
                      C.run(
                        v[0].options,
                        function () {
                          t();
                        },
                        !1,
                      );
                  };
                  u
                    ? C.run(
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
          var w = {},
            x = function (t) {
              return (
                (t.n = "number" == typeof t.n ? Math.abs(0 | t.n) : t.n),
                (t.x = r * t.x),
                (t.y = i * t.y),
                (t.w = r * t.w),
                (t.h = i * t.h),
                (t.len = ("" + t.n).length),
                t
              );
            };
          function _(t) {
            if (t.paused || t.ended || d) return !1;
            try {
              a.clearRect(0, 0, r, i), a.drawImage(t, 0, 0, r, i);
            } catch (t) {}
            (g = setTimeout(function () {
              _(t);
            }, C.duration)),
              S.setIcon(o);
          }
          (w.circle = function (t) {
            t = x(t);
            var n = !1;
            2 === t.len
              ? ((t.x = t.x - 0.4 * t.w), (t.w = 1.4 * t.w), (n = !0))
              : t.len >= 3 &&
                ((t.x = t.x - 0.65 * t.w), (t.w = 1.65 * t.w), (n = !0)),
              a.clearRect(0, 0, r, i),
              a.drawImage(s, 0, 0, r, i),
              a.beginPath(),
              (a.font =
                e.fontStyle +
                " " +
                Math.floor(t.h * (t.n > 99 ? 0.85 : 1)) +
                "px " +
                e.fontFamily),
              (a.textAlign = "center"),
              n
                ? (a.moveTo(t.x + t.w / 2, t.y),
                  a.lineTo(t.x + t.w - t.h / 2, t.y),
                  a.quadraticCurveTo(t.x + t.w, t.y, t.x + t.w, t.y + t.h / 2),
                  a.lineTo(t.x + t.w, t.y + t.h - t.h / 2),
                  a.quadraticCurveTo(
                    t.x + t.w,
                    t.y + t.h,
                    t.x + t.w - t.h / 2,
                    t.y + t.h,
                  ),
                  a.lineTo(t.x + t.h / 2, t.y + t.h),
                  a.quadraticCurveTo(t.x, t.y + t.h, t.x, t.y + t.h - t.h / 2),
                  a.lineTo(t.x, t.y + t.h / 2),
                  a.quadraticCurveTo(t.x, t.y, t.x + t.h / 2, t.y))
                : a.arc(t.x + t.w / 2, t.y + t.h / 2, t.h / 2, 0, 2 * Math.PI),
              (a.fillStyle =
                "rgba(" +
                e.bgColor.r +
                "," +
                e.bgColor.g +
                "," +
                e.bgColor.b +
                "," +
                t.o +
                ")"),
              a.fill(),
              a.closePath(),
              a.beginPath(),
              a.stroke(),
              (a.fillStyle =
                "rgba(" +
                e.textColor.r +
                "," +
                e.textColor.g +
                "," +
                e.textColor.b +
                "," +
                t.o +
                ")"),
              "number" == typeof t.n && t.n > 999
                ? a.fillText(
                    (t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+",
                    Math.floor(t.x + t.w / 2),
                    Math.floor(t.y + t.h - 0.2 * t.h),
                  )
                : a.fillText(
                    t.n,
                    Math.floor(t.x + t.w / 2),
                    Math.floor(t.y + t.h - 0.15 * t.h),
                  ),
              a.closePath();
          }),
            (w.rectangle = function (t) {
              t = x(t);
              2 === t.len
                ? ((t.x = t.x - 0.4 * t.w), (t.w = 1.4 * t.w))
                : t.len >= 3 && ((t.x = t.x - 0.65 * t.w), (t.w = 1.65 * t.w)),
                a.clearRect(0, 0, r, i),
                a.drawImage(s, 0, 0, r, i),
                a.beginPath(),
                (a.font =
                  e.fontStyle +
                  " " +
                  Math.floor(t.h * (t.n > 99 ? 0.9 : 1)) +
                  "px " +
                  e.fontFamily),
                (a.textAlign = "center"),
                (a.fillStyle =
                  "rgba(" +
                  e.bgColor.r +
                  "," +
                  e.bgColor.g +
                  "," +
                  e.bgColor.b +
                  "," +
                  t.o +
                  ")"),
                a.fillRect(t.x, t.y, t.w, t.h),
                (a.fillStyle =
                  "rgba(" +
                  e.textColor.r +
                  "," +
                  e.textColor.g +
                  "," +
                  e.textColor.b +
                  "," +
                  t.o +
                  ")"),
                "number" == typeof t.n && t.n > 999
                  ? a.fillText(
                      (t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+",
                      Math.floor(t.x + t.w / 2),
                      Math.floor(t.y + t.h - 0.2 * t.h),
                    )
                  : a.fillText(
                      t.n,
                      Math.floor(t.x + t.w / 2),
                      Math.floor(t.y + t.h - 0.15 * t.h),
                    ),
                a.closePath();
            });
          var S = {};
          function E(t) {
            t = t.replace(
              /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              function (t, e, n, i) {
                return e + e + n + n + i + i;
              },
            );
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return (
              !!e && {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16),
              }
            );
          }
          function T(t, e) {
            var n,
              i = {};
            for (n in t) i[n] = t[n];
            for (n in e) i[n] = e[n];
            return i;
          }
          (S.getIcon = function () {
            var t = !1;
            return (
              e.element
                ? (t = e.element)
                : e.elementId
                  ? (t = m.getElementById(e.elementId)).setAttribute(
                      "href",
                      t.getAttribute("src"),
                    )
                  : !1 ===
                      (t = (function () {
                        for (
                          var t = m
                              .getElementsByTagName("head")[0]
                              .getElementsByTagName("link"),
                            e = t.length,
                            n = e - 1;
                          n >= 0;
                          n--
                        )
                          if (
                            /(^|\s)icon(\s|$)/i.test(t[n].getAttribute("rel"))
                          )
                            return t[n];
                        return !1;
                      })()) &&
                    ((t = m.createElement("link")).setAttribute("rel", "icon"),
                    m.getElementsByTagName("head")[0].appendChild(t)),
              t.setAttribute("type", "image/png"),
              t
            );
          }),
            (S.setIcon = function (t) {
              var i = t.toDataURL("image/png");
              if ((e.dataUrl && e.dataUrl(i), e.element))
                e.element.setAttribute("href", i),
                  e.element.setAttribute("src", i);
              else if (e.elementId) {
                var r = m.getElementById(e.elementId);
                r.setAttribute("href", i), r.setAttribute("src", i);
              } else if (f.ff || f.opera) {
                var o = n;
                (n = m.createElement("link")),
                  f.opera && n.setAttribute("rel", "icon"),
                  n.setAttribute("rel", "icon"),
                  n.setAttribute("type", "image/png"),
                  m.getElementsByTagName("head")[0].appendChild(n),
                  n.setAttribute("href", i),
                  o.parentNode && o.parentNode.removeChild(o);
              } else n.setAttribute("href", i);
            });
          var C = {};
          (C.duration = 40),
            (C.types = {}),
            (C.types.fade = [
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
            (C.types.none = [{ x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 }]),
            (C.types.pop = [
              { x: 1, y: 1, w: 0, h: 0, o: 1 },
              { x: 0.9, y: 0.9, w: 0.1, h: 0.1, o: 1 },
              { x: 0.8, y: 0.8, w: 0.2, h: 0.2, o: 1 },
              { x: 0.7, y: 0.7, w: 0.3, h: 0.3, o: 1 },
              { x: 0.6, y: 0.6, w: 0.4, h: 0.4, o: 1 },
              { x: 0.5, y: 0.5, w: 0.5, h: 0.5, o: 1 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (C.types.popFade = [
              { x: 0.75, y: 0.75, w: 0, h: 0, o: 0 },
              { x: 0.65, y: 0.65, w: 0.1, h: 0.1, o: 0.2 },
              { x: 0.6, y: 0.6, w: 0.2, h: 0.2, o: 0.4 },
              { x: 0.55, y: 0.55, w: 0.3, h: 0.3, o: 0.6 },
              { x: 0.5, y: 0.5, w: 0.4, h: 0.4, o: 0.8 },
              { x: 0.45, y: 0.45, w: 0.5, h: 0.5, o: 0.9 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (C.types.slide = [
              { x: 0.4, y: 1, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.8, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.7, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.6, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.5, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (C.run = function (t, n, i, r) {
              var a =
                C.types[
                  m.hidden || m.msHidden || m.webkitHidden || m.mozHidden
                    ? "none"
                    : e.animation
                ];
              ((r =
                !0 === i
                  ? void 0 !== r
                    ? r
                    : a.length - 1
                  : void 0 !== r
                    ? r
                    : 0),
              (n = n || function () {}),
              r < a.length && r >= 0)
                ? (w[e.type](T(t, a[r])),
                  (p = setTimeout(function () {
                    i ? (r -= 1) : (r += 1), C.run(t, n, i, r);
                  }, C.duration)),
                  S.setIcon(o))
                : n();
            }),
            ((e = T(y, t)).bgColor = E(e.bgColor)),
            (e.textColor = E(e.textColor)),
            (e.position = e.position.toLowerCase()),
            (e.animation = C.types["" + e.animation]
              ? e.animation
              : y.animation),
            (m = e.win.document);
          var A = e.position.indexOf("up") > -1,
            R = e.position.indexOf("left") > -1;
          if (A || R)
            for (var D = 0; D < C.types["" + e.animation].length; D++) {
              var M = C.types["" + e.animation][D];
              A &&
                (M.y < 0.6
                  ? (M.y = M.y - 0.4)
                  : (M.y = M.y - 2 * M.y + (1 - M.w))),
                R &&
                  (M.x < 0.6
                    ? (M.x = M.x - 0.4)
                    : (M.x = M.x - 2 * M.x + (1 - M.h))),
                (C.types["" + e.animation][D] = M);
            }
          return (
            (e.type = w["" + e.type] ? e.type : y.type),
            (n = S.getIcon()),
            (o = document.createElement("canvas")),
            (s = document.createElement("img")),
            n.hasAttribute("href")
              ? (s.setAttribute("crossOrigin", "anonymous"),
                (s.onload = function () {
                  (i = s.height > 0 ? s.height : 32),
                    (r = s.width > 0 ? s.width : 32),
                    (o.height = i),
                    (o.width = r),
                    (a = o.getContext("2d")),
                    b.ready();
                }),
                s.setAttribute("src", n.getAttribute("href")))
              : ((s.onload = function () {
                  (i = 32),
                    (r = 32),
                    (s.height = i),
                    (s.width = r),
                    (o.height = i),
                    (o.width = r),
                    (a = o.getContext("2d")),
                    b.ready();
                }),
                s.setAttribute("src", "")),
            {
              badge: function (t, e) {
                (e = ("string" == typeof e ? { animation: e } : e) || {}),
                  (h = function () {
                    try {
                      if ("number" == typeof t ? t > 0 : "" !== t) {
                        var n = { type: "badge", options: { n: t } };
                        if (
                          ("animation" in e &&
                            C.types["" + e.animation] &&
                            (n.options.animation = "" + e.animation),
                          "type" in e &&
                            w["" + e.type] &&
                            (n.options.type = "" + e.type),
                          ["bgColor", "textColor"].forEach(function (t) {
                            t in e && (n.options[t] = E(e[t]));
                          }),
                          ["fontStyle", "fontFamily"].forEach(function (t) {
                            t in e && (n.options[t] = e[t]);
                          }),
                          v.push(n),
                          v.length > 100)
                        )
                          throw Error("Too many badges requests in queue.");
                        b.start();
                      } else b.reset();
                    } catch (t) {
                      throw Error("Error setting badge. Message: " + t.message);
                    }
                  }),
                  l && h();
              },
              video: function (t) {
                (h = function () {
                  try {
                    if ("stop" === t) {
                      (d = !0), b.reset(), (d = !1);
                      return;
                    }
                    t.addEventListener(
                      "play",
                      function () {
                        _(this);
                      },
                      !1,
                    );
                  } catch (t) {
                    throw Error("Error setting video. Message: " + t.message);
                  }
                }),
                  l && h();
              },
              image: function (t) {
                (h = function () {
                  try {
                    var e = t.width,
                      n = t.height,
                      s = document.createElement("img"),
                      l = e / r < n / i ? e / r : n / i;
                    s.setAttribute("crossOrigin", "anonymous"),
                      (s.onload = function () {
                        a.clearRect(0, 0, r, i),
                          a.drawImage(s, 0, 0, r, i),
                          S.setIcon(o);
                      }),
                      s.setAttribute("src", t.getAttribute("src")),
                      (s.height = n / l),
                      (s.width = e / l);
                  } catch (t) {
                    throw Error("Error setting image. Message: " + t.message);
                  }
                }),
                  l && h();
              },
              webcam: function (t) {
                if (
                  ((window.URL && window.URL.createObjectURL) ||
                    ((window.URL = window.URL || {}),
                    (window.URL.createObjectURL = function (t) {
                      return t;
                    })),
                  f.supported)
                ) {
                  var e = !1;
                  (navigator.getUserMedia =
                    navigator.getUserMedia ||
                    navigator.oGetUserMedia ||
                    navigator.msGetUserMedia ||
                    navigator.mozGetUserMedia ||
                    navigator.webkitGetUserMedia),
                    (h = function () {
                      try {
                        if ("stop" === t) {
                          (d = !0), b.reset(), (d = !1);
                          return;
                        }
                        ((e = document.createElement("video")).width = r),
                          (e.height = i),
                          navigator.getUserMedia(
                            { video: !0, audio: !1 },
                            function (t) {
                              (e.src = URL.createObjectURL(t)), e.play(), _(e);
                            },
                            function () {},
                          );
                      } catch (t) {
                        throw Error(
                          "Error setting webcam. Message: " + t.message,
                        );
                      }
                    }),
                    l && h();
                }
              },
              reset: b.reset,
              browser: { supported: f.supported },
            }
          );
        };
        "u" > typeof define && define.amd
          ? define([], function () {
              return e;
            })
          : t.exports
            ? (t.exports = e)
            : (this.Favico = e);
      })();
    },
    353719(t, e, n) {
      var i = n(271434);
      (t.exports = function t(e, n, r) {
        if (
          (i(n) || ((r = n || r), (n = [])), (r = r || {}), e instanceof RegExp)
        ) {
          var a,
            s,
            l = n,
            h = e.source.match(/\((?!\?)/g);
          if (h)
            for (var d = 0; d < h.length; d++)
              l.push({
                name: d,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null,
              });
          return (e.keys = l), e;
        }
        if (i(e)) {
          for (var f, p = n, g = r, m = [], y = 0; y < e.length; y++)
            m.push(t(e[y], p, g).source);
          return ((f = RegExp("(?:" + m.join("|") + ")", u(g))).keys = p), f;
        }
        return (a = n), c(o(e, (s = r)), a, s);
      }),
        (t.exports.parse = o),
        (t.exports.compile = function (t, e) {
          return s(o(t, e));
        }),
        (t.exports.tokensToFunction = s),
        (t.exports.tokensToRegExp = c);
      var r = RegExp(
        "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        "g",
      );
      function o(t, e) {
        for (
          var n, i = [], o = 0, a = 0, s = "", u = (e && e.delimiter) || "/";
          null != (n = r.exec(t));

        ) {
          var c = n[0],
            h = n[1],
            d = n.index;
          if (((s += t.slice(a, d)), (a = d + c.length), h)) {
            s += h[1];
            continue;
          }
          var f = t[a],
            p = n[2],
            g = n[3],
            m = n[4],
            y = n[5],
            v = n[6],
            b = n[7];
          s && (i.push(s), (s = ""));
          var w = null != p && null != f && f !== p,
            x = "+" === v || "*" === v,
            _ = "?" === v || "*" === v,
            S = n[2] || u,
            E = m || y;
          i.push({
            name: g || o++,
            prefix: p || "",
            delimiter: S,
            optional: _,
            repeat: x,
            partial: w,
            asterisk: !!b,
            pattern: E
              ? E.replace(/([=!:$\/()])/g, "\\$1")
              : b
                ? ".*"
                : "[^" + l(S) + "]+?",
          });
        }
        return a < t.length && (s += t.substr(a)), s && i.push(s), i;
      }
      function a(t) {
        return encodeURI(t).replace(/[\/?#]/g, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function s(t) {
        for (var e = Array(t.length), n = 0; n < t.length; n++)
          "object" == typeof t[n] &&
            (e[n] = RegExp("^(?:" + t[n].pattern + ")$"));
        return function (n, r) {
          for (
            var o = "",
              s = n || {},
              l = (r || {}).pretty ? a : encodeURIComponent,
              u = 0;
            u < t.length;
            u++
          ) {
            var c,
              h = t[u];
            if ("string" == typeof h) {
              o += h;
              continue;
            }
            var d = s[h.name];
            if (null == d)
              if (h.optional) {
                h.partial && (o += h.prefix);
                continue;
              } else throw TypeError('Expected "' + h.name + '" to be defined');
            if (i(d)) {
              if (!h.repeat)
                throw TypeError(
                  'Expected "' +
                    h.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(d) +
                    "`",
                );
              if (0 === d.length)
                if (h.optional) continue;
                else
                  throw TypeError('Expected "' + h.name + '" to not be empty');
              for (var f = 0; f < d.length; f++) {
                if (((c = l(d[f])), !e[u].test(c)))
                  throw TypeError(
                    'Expected all "' +
                      h.name +
                      '" to match "' +
                      h.pattern +
                      '", but received `' +
                      JSON.stringify(c) +
                      "`",
                  );
                o += (0 === f ? h.prefix : h.delimiter) + c;
              }
              continue;
            }
            if (
              ((c = h.asterisk
                ? encodeURI(d).replace(/[?#]/g, function (t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                  })
                : l(d)),
              !e[u].test(c))
            )
              throw TypeError(
                'Expected "' +
                  h.name +
                  '" to match "' +
                  h.pattern +
                  '", but received "' +
                  c +
                  '"',
              );
            o += h.prefix + c;
          }
          return o;
        };
      }
      function l(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function u(t) {
        return t.sensitive ? "" : "i";
      }
      function c(t, e, n) {
        i(e) || ((n = e || n), (e = []));
        for (
          var r, o = (n = n || {}).strict, a = !1 !== n.end, s = "", c = 0;
          c < t.length;
          c++
        ) {
          var h = t[c];
          if ("string" == typeof h) s += l(h);
          else {
            var d = l(h.prefix),
              f = "(?:" + h.pattern + ")";
            e.push(h),
              h.repeat && (f += "(?:" + d + f + ")*"),
              (s += f =
                h.optional
                  ? h.partial
                    ? d + "(" + f + ")?"
                    : "(?:" + d + "(" + f + "))?"
                  : d + "(" + f + ")");
          }
        }
        var p = l(n.delimiter || "/"),
          g = s.slice(-p.length) === p;
        return (
          o || (s = (g ? s.slice(0, -p.length) : s) + "(?:" + p + "(?=$))?"),
          a ? (s += "$") : (s += o && g ? "" : "(?=" + p + "|$)"),
          ((r = RegExp("^" + s, u(n))).keys = e),
          r
        );
      }
    },
    492462(t, e, n) {
      "use strict";
      var i = n(948055),
        r = n(724039),
        o = n(389293);
      function a(t, e) {
        return e.encode ? (e.strict ? i(t) : encodeURIComponent(t)) : t;
      }
      (e.extract = function (t) {
        return t.split("?")[1] || "";
      }),
        (e.parse = function (t, e) {
          var n = (function (t) {
              var e;
              switch (t.arrayFormat) {
                case "index":
                  return function (t, n, i) {
                    if (
                      ((e = /\[(\d*)\]$/.exec(t)),
                      (t = t.replace(/\[\d*\]$/, "")),
                      !e)
                    ) {
                      i[t] = n;
                      return;
                    }
                    void 0 === i[t] && (i[t] = {}), (i[t][e[1]] = n);
                  };
                case "bracket":
                  return function (t, n, i) {
                    if (
                      ((e = /(\[\])$/.exec(t)), (t = t.replace(/\[\]$/, "")), e)
                    ) {
                      if (void 0 === i[t]) {
                        i[t] = [n];
                        return;
                      }
                    } else {
                      i[t] = n;
                      return;
                    }
                    i[t] = [].concat(i[t], n);
                  };
                default:
                  return function (t, e, n) {
                    if (void 0 === n[t]) {
                      n[t] = e;
                      return;
                    }
                    n[t] = [].concat(n[t], e);
                  };
              }
            })((e = r({ arrayFormat: "none" }, e))),
            i = Object.create(null);
          return "string" == typeof t && (t = t.trim().replace(/^(\?|#|&)/, ""))
            ? (t.split("&").forEach(function (t) {
                var e = t.replace(/\+/g, " ").split("="),
                  r = e.shift(),
                  a = e.length > 0 ? e.join("=") : void 0;
                (a = void 0 === a ? null : o(a)), n(o(r), a, i);
              }),
              Object.keys(i)
                .sort()
                .reduce(function (t, e) {
                  var n = i[e];
                  return (
                    n && "object" == typeof n && !Array.isArray(n)
                      ? (t[e] = (function t(e) {
                          return Array.isArray(e)
                            ? e.sort()
                            : "object" == typeof e
                              ? t(Object.keys(e))
                                  .sort(function (t, e) {
                                    return Number(t) - Number(e);
                                  })
                                  .map(function (t) {
                                    return e[t];
                                  })
                              : e;
                        })(n))
                      : (t[e] = n),
                    t
                  );
                }, Object.create(null)))
            : i;
        }),
        (e.stringify = function (t, e) {
          var n = (function (t) {
            switch (t.arrayFormat) {
              case "index":
                return function (e, n, i) {
                  return null === n
                    ? [a(e, t), "[", i, "]"].join("")
                    : [a(e, t), "[", a(i, t), "]=", a(n, t)].join("");
                };
              case "bracket":
                return function (e, n) {
                  return null === n
                    ? a(e, t)
                    : [a(e, t), "[]=", a(n, t)].join("");
                };
              default:
                return function (e, n) {
                  return null === n
                    ? a(e, t)
                    : [a(e, t), "=", a(n, t)].join("");
                };
            }
          })((e = r({ encode: !0, strict: !0, arrayFormat: "none" }, e)));
          return t
            ? Object.keys(t)
                .sort()
                .map(function (i) {
                  var r = t[i];
                  if (void 0 === r) return "";
                  if (null === r) return a(i, e);
                  if (Array.isArray(r)) {
                    var o = [];
                    return (
                      r.slice().forEach(function (t) {
                        void 0 !== t && o.push(n(i, t, o.length));
                      }),
                      o.join("&")
                    );
                  }
                  return a(i, e) + "=" + a(r, e);
                })
                .filter(function (t) {
                  return t.length > 0;
                })
                .join("&")
            : "";
        });
    },
    488428(t, e, n) {
      "use strict";
      (e.decode = e.parse = n(973784)), (e.encode = e.stringify = n(998736));
    },
    873263(t, e, n) {
      "use strict";
      n.d(e, {
        B6: () => T,
        Ix: () => y,
        W5: () => P,
        W6: () => D,
        XZ: () => m,
        dO: () => A,
        g: () => k,
        qh: () => C,
        rd: () => _,
        zy: () => M,
      });
      var i = n(750573),
        r = n(64700),
        o = n(655972),
        a = n.n(o),
        s = n(830845),
        l = n(258635),
        u = n(542113),
        c = n(353719),
        h = n.n(c);
      n(53635), n(725664), n(833871);
      var d =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
              ? window
              : void 0 !== n.g
                ? n.g
                : {},
        f =
          r.createContext ||
          function (t, e) {
            var n,
              o,
              s =
                "__create-react-context-" +
                (d.__global_unique_id__ = (d.__global_unique_id__ || 0) + 1) +
                "__",
              l = (function (t) {
                function n() {
                  for (
                    var e, n, i, r = arguments.length, o = Array(r), a = 0;
                    a < r;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (n = (e = t.call.apply(t, [this].concat(o)) || this).props
                      .value),
                    (i = []),
                    (e.emitter = {
                      on: function (t) {
                        i.push(t);
                      },
                      off: function (t) {
                        i = i.filter(function (e) {
                          return e !== t;
                        });
                      },
                      get: function () {
                        return n;
                      },
                      set: function (t, e) {
                        (n = t),
                          i.forEach(function (t) {
                            return t(n, e);
                          });
                      },
                    }),
                    e
                  );
                }
                (0, i.A)(n, t);
                var r = n.prototype;
                return (
                  (r.getChildContext = function () {
                    var t;
                    return ((t = {})[s] = this.emitter), t;
                  }),
                  (r.componentWillReceiveProps = function (t) {
                    if (this.props.value !== t.value) {
                      var n,
                        i = this.props.value,
                        r = t.value;
                      (i === r ? 0 !== i || 1 / i == 1 / r : i != i && r != r)
                        ? (n = 0)
                        : 0 !=
                            (n =
                              ("function" == typeof e ? e(i, r) : 0x3fffffff) |
                              0) && this.emitter.set(t.value, n);
                    }
                  }),
                  (r.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(r.Component);
            ((n = {})[s] = a().object.isRequired), (l.childContextTypes = n);
            var u = (function (e) {
              function n() {
                for (
                  var t, n = arguments.length, i = Array(n), r = 0;
                  r < n;
                  r++
                )
                  i[r] = arguments[r];
                return (
                  ((t =
                    e.call.apply(e, [this].concat(i)) || this).observedBits =
                    void 0),
                  (t.state = { value: t.getValue() }),
                  (t.onUpdate = function (e, n) {
                    (t.observedBits & n) != 0 &&
                      t.setState({ value: t.getValue() });
                  }),
                  t
                );
              }
              (0, i.A)(n, e);
              var r = n.prototype;
              return (
                (r.componentWillReceiveProps = function (t) {
                  var e = t.observedBits;
                  this.observedBits = null == e ? 0x3fffffff : e;
                }),
                (r.componentDidMount = function () {
                  this.context[s] && this.context[s].on(this.onUpdate);
                  var t = this.props.observedBits;
                  this.observedBits = null == t ? 0x3fffffff : t;
                }),
                (r.componentWillUnmount = function () {
                  this.context[s] && this.context[s].off(this.onUpdate);
                }),
                (r.getValue = function () {
                  return this.context[s] ? this.context[s].get() : t;
                }),
                (r.render = function () {
                  var t;
                  return (Array.isArray((t = this.props.children)) ? t[0] : t)(
                    this.state.value,
                  );
                }),
                n
              );
            })(r.Component);
            return (
              ((o = {})[s] = a().object),
              (u.contextTypes = o),
              { Provider: l, Consumer: u }
            );
          },
        p = function (t) {
          var e = f();
          return (e.displayName = t), e;
        },
        g = p("Router-History"),
        m = p("Router"),
        y = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this, e) || this).state = {
                location: e.history.location,
              }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              e.staticContext ||
                (n.unlisten = e.history.listen(function (t) {
                  n._pendingLocation = t;
                })),
              n
            );
          }
          (0, i.A)(e, t),
            (e.computeRootMatch = function (t) {
              return { path: "/", url: "/", params: {}, isExact: "/" === t };
            });
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              var t = this;
              (this._isMounted = !0),
                this.unlisten && this.unlisten(),
                this.props.staticContext ||
                  (this.unlisten = this.props.history.listen(function (e) {
                    t._isMounted && t.setState({ location: e });
                  })),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten &&
                (this.unlisten(),
                (this._isMounted = !1),
                (this._pendingLocation = null));
            }),
            (n.render = function () {
              return r.createElement(
                m.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: e.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                r.createElement(g.Provider, {
                  children: this.props.children || null,
                  value: this.props.history,
                }),
              );
            }),
            e
          );
        })(r.Component);
      r.Component;
      var v = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          (0, i.A)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              this.props.onMount && this.props.onMount.call(this, this);
            }),
            (n.componentDidUpdate = function (t) {
              this.props.onUpdate && this.props.onUpdate.call(this, this, t);
            }),
            (n.componentWillUnmount = function () {
              this.props.onUnmount && this.props.onUnmount.call(this, this);
            }),
            (n.render = function () {
              return null;
            }),
            e
          );
        })(r.Component),
        b = {},
        w = 0;
      function x(t, e) {
        return (
          void 0 === t && (t = "/"),
          void 0 === e && (e = {}),
          "/" === t
            ? t
            : (function (t) {
                if (b[t]) return b[t];
                var e = h().compile(t);
                return w < 1e4 && ((b[t] = e), w++), e;
              })(t)(e, { pretty: !0 })
        );
      }
      function _(t) {
        var e = t.computedMatch,
          n = t.to,
          i = t.push,
          o = void 0 !== i && i;
        return r.createElement(m.Consumer, null, function (t) {
          t || (0, l.A)(!1);
          var i = t.history,
            a = t.staticContext,
            c = o ? i.push : i.replace,
            h = (0, s.yJ)(
              e
                ? "string" == typeof n
                  ? x(n, e.params)
                  : (0, u.A)({}, n, { pathname: x(n.pathname, e.params) })
                : n,
            );
          return a
            ? (c(h), null)
            : r.createElement(v, {
                onMount: function () {
                  c(h);
                },
                onUpdate: function (t, e) {
                  var n = (0, s.yJ)(e.to);
                  (0, s.Fu)(n, (0, u.A)({}, h, { key: n.key })) || c(h);
                },
                to: n,
              });
        });
      }
      var S = {},
        E = 0;
      function T(t, e) {
        void 0 === e && (e = {}),
          ("string" == typeof e || Array.isArray(e)) && (e = { path: e });
        var n = e,
          i = n.path,
          r = n.exact,
          o = void 0 !== r && r,
          a = n.strict,
          s = void 0 !== a && a,
          l = n.sensitive,
          u = void 0 !== l && l;
        return [].concat(i).reduce(function (e, n) {
          if (!n && "" !== n) return null;
          if (e) return e;
          var i = (function (t, e) {
              var n = "" + e.end + e.strict + e.sensitive,
                i = S[n] || (S[n] = {});
              if (i[t]) return i[t];
              var r = [],
                o = { regexp: h()(t, r, e), keys: r };
              return E < 1e4 && ((i[t] = o), E++), o;
            })(n, { end: o, strict: s, sensitive: u }),
            r = i.regexp,
            a = i.keys,
            l = r.exec(t);
          if (!l) return null;
          var c = l[0],
            d = l.slice(1),
            f = t === c;
          return o && !f
            ? null
            : {
                path: n,
                url: "/" === n && "" === c ? "/" : c,
                isExact: f,
                params: a.reduce(function (t, e, n) {
                  return (t[e.name] = d[n]), t;
                }, {}),
              };
        }, null);
      }
      var C = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        return (
          (0, i.A)(e, t),
          (e.prototype.render = function () {
            var t = this;
            return r.createElement(m.Consumer, null, function (e) {
              e || (0, l.A)(!1);
              var n,
                i = t.props.location || e.location,
                o = t.props.computedMatch
                  ? t.props.computedMatch
                  : t.props.path
                    ? T(i.pathname, t.props)
                    : e.match,
                a = (0, u.A)({}, e, { location: i, match: o }),
                s = t.props,
                c = s.children,
                h = s.component,
                d = s.render;
              return (
                Array.isArray(c) &&
                  ((n = c), 0 === r.Children.count(n)) &&
                  (c = null),
                r.createElement(
                  m.Provider,
                  { value: a },
                  a.match
                    ? c
                      ? "function" == typeof c
                        ? c(a)
                        : c
                      : h
                        ? r.createElement(h, a)
                        : d
                          ? d(a)
                          : null
                    : "function" == typeof c
                      ? c(a)
                      : null,
                )
              );
            });
          }),
          e
        );
      })(r.Component);
      r.Component;
      var A = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            (0, i.A)(e, t),
            (e.prototype.render = function () {
              var t = this;
              return r.createElement(m.Consumer, null, function (e) {
                e || (0, l.A)(!1);
                var n,
                  i,
                  o = t.props.location || e.location;
                return (
                  r.Children.forEach(t.props.children, function (t) {
                    if (null == i && r.isValidElement(t)) {
                      n = t;
                      var a = t.props.path || t.props.from;
                      i = a
                        ? T(o.pathname, (0, u.A)({}, t.props, { path: a }))
                        : e.match;
                    }
                  }),
                  i
                    ? r.cloneElement(n, { location: o, computedMatch: i })
                    : null
                );
              });
            }),
            e
          );
        })(r.Component),
        R = r.useContext;
      function D() {
        return R(g);
      }
      function M() {
        return R(m).location;
      }
      function k() {
        var t = R(m).match;
        return t ? t.params : {};
      }
      function P(t) {
        var e = M(),
          n = R(m).match;
        return t ? T(e.pathname, t) : n;
      }
    },
    3745(t, e, n) {
      "use strict";
      n.d(e, { A: () => l });
      var i = n(64700);
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var o = function (t) {
          var e = document.createElement("script");
          (e.async = !0),
            (e.defer = !0),
            (e.src = t),
            document.head && document.head.appendChild(e);
        },
        a = /(http|https):\/\/(www)?.+\/recaptcha/,
        s = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
        l = (function (t) {
          function e() {
            for (var e, n = arguments.length, r = Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(r)) || this).container =
                void 0),
              (e.timer = void 0),
              (e.state = {
                instanceKey: Date.now(),
                ready: !1,
                rendered: !1,
                invisible: "invisible" === e.props.size,
              }),
              (e._isAvailable = function () {
                var t;
                return !!(null == (t = window.grecaptcha) ? void 0 : t.ready);
              }),
              (e._inject = function () {
                e.props.inject &&
                  !Array.from(document.scripts).reduce(function (t, e) {
                    return t || a.test(e.src);
                  }, !1) &&
                  o(
                    "https://recaptcha.net/recaptcha/api.js?render=explicit" +
                      (e.props.hl ? "&hl=" + e.props.hl : ""),
                  );
              }),
              (e._prepare = function () {
                var t = e.props,
                  n = t.explicit,
                  i = t.onLoad;
                window.grecaptcha.ready(function () {
                  e.setState({ ready: !0 }, function () {
                    n || e.renderExplicitly(), i && i();
                  });
                });
              }),
              (e._renderRecaptcha = function (t, e) {
                return window.grecaptcha.render(t, e);
              }),
              (e._resetRecaptcha = function () {
                return window.grecaptcha.reset(e.state.instanceId);
              }),
              (e._executeRecaptcha = function () {
                return window.grecaptcha.execute(e.state.instanceId);
              }),
              (e._getResponseRecaptcha = function () {
                return window.grecaptcha.getResponse(e.state.instanceId);
              }),
              (e._onVerify = function (t) {
                return e.props.onVerify(t);
              }),
              (e._onExpire = function () {
                return e.props.onExpire && e.props.onExpire();
              }),
              (e._onError = function () {
                return e.props.onError && e.props.onError();
              }),
              (e._stopTimer = function () {
                e.timer && clearInterval(e.timer);
              }),
              (e.componentDidMount = function () {
                e._inject(),
                  e._isAvailable()
                    ? e._prepare()
                    : (e.timer = window.setInterval(function () {
                        e._isAvailable() && (e._prepare(), e._stopTimer());
                      }, 500));
              }),
              (e.componentWillUnmount = function () {
                e._stopTimer();
              }),
              (e.renderExplicitly = function () {
                return new Promise(function (t, n) {
                  if (e.state.rendered)
                    return n(
                      Error(
                        "This recaptcha instance has been already rendered.",
                      ),
                    );
                  if (!e.state.ready || !e.container)
                    return n(
                      Error("Recaptcha is not ready for rendering yet."),
                    );
                  var i = e._renderRecaptcha(e.container, {
                    sitekey: e.props.sitekey,
                    theme: e.props.theme,
                    size: e.props.size,
                    badge: e.state.invisible ? e.props.badge : void 0,
                    tabindex: e.props.tabindex,
                    callback: e._onVerify,
                    "expired-callback": e._onExpire,
                    "error-callback": e._onError,
                    isolated: e.state.invisible ? e.props.isolated : void 0,
                    hl: e.state.invisible ? void 0 : e.props.hl,
                  });
                  e.setState({ instanceId: i, rendered: !0 }, function () {
                    e.props.onRender && e.props.onRender(), t();
                  });
                });
              }),
              (e.reset = function () {
                return new Promise(function (t, n) {
                  if (e.state.rendered) return e._resetRecaptcha(), t();
                  n(Error("This recaptcha instance did not render yet."));
                });
              }),
              (e.execute = function () {
                return new Promise(function (t, n) {
                  return e.state.invisible
                    ? (e.state.rendered && (e._executeRecaptcha(), t()),
                      n(Error("This recaptcha instance did not render yet.")))
                    : n(
                        Error(
                          "Manual execution is only available for invisible size.",
                        ),
                      );
                });
              }),
              (e.getResponse = function () {
                return new Promise(function (t, n) {
                  if (e.state.rendered) return t(e._getResponseRecaptcha());
                  n(Error("This recaptcha instance did not render yet."));
                });
              }),
              (e.render = function () {
                var t = i.createElement("div", {
                  key: e.state.instanceKey,
                  id: e.props.id,
                  className: e.props.className,
                  ref: function (t) {
                    return (e.container = t);
                  },
                });
                return e.props.children
                  ? e.props.children({
                      renderExplicitly: e.renderExplicitly,
                      reset: e.reset,
                      execute: e.execute,
                      getResponse: e.getResponse,
                      recaptchaComponent: t,
                    })
                  : t;
              }),
              e
            );
          }
          return (
            (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            r(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              var n = "invisible" === t.size;
              return n !== e.invisible ? { invisible: n } : null;
            }),
            (e.prototype.componentDidUpdate = function (t) {
              var e = this;
              s.reduce(function (n, i) {
                return e.props[i] !== t[i] ? [].concat(n, [i]) : n;
              }, []).length > 0 &&
                this.setState(
                  { instanceKey: Date.now(), rendered: !1 },
                  function () {
                    e.props.explicit || e.renderExplicitly();
                  },
                );
            }),
            e
          );
        })(i.Component);
      l.defaultProps = {
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
    546738(t, e, n) {
      t.exports = {
        TimelineDataSeries: n(939796),
        TimelineGraphView: n(235002),
      };
    },
    939796(t) {
      t.exports = (function () {
        "use strict";
        function t() {
          (this.dataPoints_ = []),
            (this.color_ = "red"),
            (this.isVisible_ = !0),
            (this.cacheStartTime_ = null),
            (this.cacheStepSize_ = 0),
            (this.cacheValues_ = []);
        }
        function e(t, e) {
          (this.time = t), (this.value = e);
        }
        return (
          (t.prototype = {
            toJSON: function () {
              if (this.dataPoints_.length < 1) return {};
              for (var t = [], e = 0; e < this.dataPoints_.length; ++e)
                t.push(this.dataPoints_[e].value);
              return {
                startTime: this.dataPoints_[0].time,
                endTime: this.dataPoints_[this.dataPoints_.length - 1].time,
                values: JSON.stringify(t),
              };
            },
            addPoint: function (t, n) {
              var i = new Date(t);
              this.dataPoints_.push(new e(i, n)),
                this.dataPoints_.length > 1e3 && this.dataPoints_.shift();
            },
            setPoints: function (t) {
              let e = Math.max(0, t.length - 1e3);
              this.dataPoints_ = t.slice(e);
            },
            isVisible: function () {
              return this.isVisible_;
            },
            show: function (t) {
              this.isVisible_ = t;
            },
            getColor: function () {
              return this.color_;
            },
            setColor: function (t) {
              this.color_ = t;
            },
            getCount: function () {
              return this.dataPoints_.length;
            },
            getValues: function (t, e, n) {
              return (
                (this.cacheStartTime_ == t &&
                  this.cacheStepSize_ == e &&
                  this.cacheValues_.length == n) ||
                  ((this.cacheValues_ = this.getValuesInternal_(t, e, n)),
                  (this.cacheStartTime_ = t),
                  (this.cacheStepSize_ = e)),
                this.cacheValues_
              );
            },
            getValuesInternal_: function (t, e, n) {
              for (var i = [], r = 0, o = 0, a = t, s = 0; s < n; ++s) {
                for (
                  ;
                  r < this.dataPoints_.length && this.dataPoints_[r].time < a;

                )
                  (o = this.dataPoints_[r].value), ++r;
                (i[s] = o), (a += e);
              }
              return i;
            },
          }),
          t
        );
      })();
    },
    235002(t) {
      t.exports = (function () {
        "use strict";
        function t(t, e) {
          (this.scrollbar_ = { position_: 0, range_: 0 }),
            (this.devicePixelRatio = e || 1),
            (this.canvas_ = t),
            (t.width = parseInt(t.width, 10) * this.devicePixelRatio),
            (t.height = parseInt(t.height, 10) * this.devicePixelRatio),
            (this.gridColor = "#CCC"),
            (this.textColor = "#000"),
            (this.backgroundColor = "#FFF"),
            (this.fontWeight = "normal"),
            (this.fontSize = 10),
            (this.fontFamily = "sans-serif"),
            (this.timeLocales = []),
            (this.timeOptions = {}),
            (this.startTime_ = 0),
            (this.endTime_ = 1),
            (this.graph_ = null),
            (this.scale_ = 1e3 / this.devicePixelRatio),
            this.updateScrollbarRange_(!0);
        }
        t.prototype = {
          setScale: function (t) {
            this.scale_ = t;
          },
          getLength_: function () {
            return Math.floor((this.endTime_ - this.startTime_) / this.scale_);
          },
          graphScrolledToRightEdge_: function () {
            return this.scrollbar_.position_ == this.scrollbar_.range_;
          },
          updateScrollbarRange_: function (t) {
            var e = this.getLength_() - this.canvas_.width;
            e < 0 && (e = 0),
              this.scrollbar_.position_ > e && (t = !0),
              (this.scrollbar_.range_ = e),
              t && ((this.scrollbar_.position_ = e), this.repaint());
          },
          setDateRange: function (t, e) {
            (this.startTime_ = t.getTime()),
              (this.endTime_ = e.getTime()),
              this.endTime_ <= this.startTime_ &&
                (this.startTime_ = this.endTime_ - 1),
              this.updateScrollbarRange_(!0);
          },
          updateEndDate: function (t) {
            (this.endTime_ = t || new Date().getTime()),
              this.updateScrollbarRange_(this.graphScrolledToRightEdge_());
          },
          getStartDate: function () {
            return new Date(this.startTime_);
          },
          setDataSeries: function (t) {
            this.graph_ = new e(this.devicePixelRatio);
            for (var n = 0; n < t.length; ++n) this.graph_.addDataSeries(t[n]);
            this.repaint();
          },
          addDataSeries: function (t) {
            this.graph_ || (this.graph_ = new e(this.devicePixelRatio)),
              this.graph_.addDataSeries(t),
              this.repaint();
          },
          repaint: function () {
            if (null !== this.canvas_.offsetParent) {
              this.repaintTimerRunning_ = !1;
              var t = this.canvas_.width,
                e = this.canvas_.height,
                n = this.canvas_.getContext("2d");
              if (
                ((n.fillStyle = this.backgroundColor),
                n.fillRect(0, 0, t, e),
                !(4 * this.fontSize > e) && !(t < 50))
              ) {
                n.save();
                var i = this.scrollbar_.position_;
                0 == this.scrollbar_.range_ && (i = this.getLength_() - t);
                var r = this.startTime_ + i * this.scale_,
                  o = e;
                (e -= Math.ceil(this.fontSize * this.devicePixelRatio) + 4),
                  this.drawTimeLabels(n, t, e, o, r),
                  (n.strokeStyle = this.gridColor),
                  (n.lineWidth = this.devicePixelRatio),
                  n.strokeRect(1, 1, t - 1, e - 1),
                  this.graph_ &&
                    (this.graph_.layout(
                      t,
                      e,
                      this.fontSize * this.devicePixelRatio,
                      r,
                      this.scale_,
                    ),
                    this.graph_.drawTicks(n),
                    this.graph_.drawLines(n),
                    this.graph_.drawLabels(n)),
                  n.restore();
              }
            }
          },
          drawTimeLabels: function (t, e, n, i, r) {
            var o = 6e4 * Math.ceil(r / 6e4);
            for (
              t.textBaseline = "bottom",
                t.textAlign = "center",
                t.fillStyle = this.textColor,
                t.strokeStyle = this.gridColor,
                t.lineWidth = this.devicePixelRatio,
                t.font = `${this.fontWeight} ${this.fontSize * this.devicePixelRatio}px ${this.fontFamily}`;
              ;

            ) {
              var a = Math.round((o - r) / this.scale_);
              if (a >= e) break;
              var s = new Date(o).toLocaleTimeString(
                this.timeLocales,
                this.timeOptions,
              );
              t.fillText(s, a, i),
                t.beginPath(),
                t.lineTo(a, 1),
                t.lineTo(a, n),
                t.stroke(),
                (o += 6e4);
            }
          },
          getDataSeriesCount: function () {
            return this.graph_ ? this.graph_.dataSeries_.length : 0;
          },
          hasDataSeries: function (t) {
            return !!this.graph_ && this.graph_.hasDataSeries(t);
          },
        };
        var e = (function () {
          function t(t) {
            (this.devicePixelRatio = t || 1),
              (this.dataSeries_ = []),
              (this.width_ = 0),
              (this.height_ = 0),
              (this.fontHeight_ = 0),
              (this.startTime_ = 0),
              (this.scale_ = 0),
              (this.min_ = 0),
              (this.max_ = 0),
              (this.labels_ = []);
          }
          return (
            (t.prototype = {
              addDataSeries: function (t) {
                this.dataSeries_.push(t);
              },
              hasDataSeries: function (t) {
                for (var e = 0; e < this.dataSeries_.length; ++e)
                  if (this.dataSeries_[e] == t) return !0;
                return !1;
              },
              getValues: function (t) {
                return t.isVisible()
                  ? t.getValues(this.startTime_, this.scale_, this.width_)
                  : null;
              },
              layout: function (t, e, n, i, r) {
                (this.width_ = t),
                  (this.height_ = e),
                  (this.fontHeight_ = n),
                  (this.startTime_ = i),
                  (this.scale_ = r);
                for (
                  var o = 0, a = 0, s = 0;
                  s < this.dataSeries_.length;
                  ++s
                ) {
                  var l = this.getValues(this.dataSeries_[s]);
                  if (l)
                    for (var u = 0; u < l.length; ++u)
                      l[u] > o ? (o = l[u]) : l[u] < a && (a = l[u]);
                }
                this.layoutLabels_(a, o);
              },
              layoutLabels_: function (t, e) {
                if (e - t < 1024) return void this.layoutLabelsBasic_(t, e, 2);
                var n = ["", "k", "M", "G", "T", "P"],
                  i = 1;
                for (t /= 1024, e /= 1024; n[i + 1] && e - t >= 1024; )
                  (t /= 1024), (e /= 1024), ++i;
                this.layoutLabelsBasic_(t, e, 2);
                for (var r = 0; r < this.labels_.length; ++r)
                  this.labels_[r] += " " + n[i];
                (this.min_ *= Math.pow(1024, i)),
                  (this.max_ *= Math.pow(1024, i));
              },
              layoutLabelsBasic_: function (t, e, n) {
                this.labels_ = [];
                var i = e - t;
                if (0 == i) {
                  this.min_ = this.max_ = e;
                  return;
                }
                var r = 2 * this.fontHeight_ + 4,
                  o = 1 + this.height_ / r;
                o < 2 ? (o = 2) : o > 6 && (o = 6);
                for (
                  var a = Math.pow(10, -n), s = n;
                  !(Math.ceil(i / a) + 1 <= o);

                ) {
                  if (Math.ceil(i / (2 * a)) + 1 <= o) {
                    a *= 2;
                    break;
                  }
                  if (Math.ceil(i / (5 * a)) + 1 <= o) {
                    a *= 5;
                    break;
                  }
                  (a *= 10), s > 0 && --s;
                }
                (this.max_ = Math.ceil(e / a) * a),
                  (this.min_ = Math.floor(t / a) * a);
                for (var l = this.max_; l >= this.min_; l -= a)
                  this.labels_.push(l.toFixed(s));
              },
              drawTicks: function (t) {
                (e = this.width_ - 1),
                  (n = this.width_ - 1 - 10),
                  (t.fillStyle = this.gridColor),
                  (t.lineWidth = this.devicePixelRatio),
                  t.beginPath();
                for (var e, n, i = 1; i < this.labels_.length - 1; ++i) {
                  var r = Math.round(
                    (this.height_ * i) / (this.labels_.length - 1),
                  );
                  t.moveTo(e, r), t.lineTo(n, r);
                }
                t.stroke();
              },
              drawLines: function (t) {
                var e = 0,
                  n = this.height_ - 1;
                this.max_ && (e = n / (this.max_ - this.min_));
                for (var i = this.dataSeries_.length - 1; i >= 0; --i) {
                  var r = this.getValues(this.dataSeries_[i]);
                  if (r) {
                    (t.strokeStyle = this.dataSeries_[i].getColor()),
                      (t.lineWidth = this.devicePixelRatio),
                      t.beginPath();
                    for (var o = 0; o < r.length; ++o)
                      t.lineTo(o, n - Math.round((r[o] - this.min_) * e));
                    t.stroke();
                  }
                }
              },
              drawLabels: function (t) {
                if (0 != this.labels_.length) {
                  var e = this.width_ - 3;
                  (t.fillStyle = this.textColor),
                    (t.textAlign = "right"),
                    (t.textBaseline = "top"),
                    t.fillText(this.labels_[0], e, 0),
                    (t.textBaseline = "bottom");
                  for (
                    var n = (this.height_ - 1) / (this.labels_.length - 1),
                      i = 1;
                    i < this.labels_.length;
                    ++i
                  )
                    t.fillText(this.labels_[i], e, n * i);
                }
              },
            }),
            t
          );
        })();
        return t;
      })();
    },
    682465(t, e, n) {
      "use strict";
      n.d(e, { A: () => r });
      var i = n(491301);
      function r(t) {
        var e = (function (t, e) {
          if ("object" != (0, i.A)(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != (0, i.A)(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == (0, i.A)(e) ? e : e + "";
      }
    },
    491301(t, e, n) {
      "use strict";
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      n.d(e, { A: () => i });
    },
    430111(t, e, n) {
      "use strict";
      n.d(e, { Y: () => i.Y });
      var i = n(411211);
    },
    411211(t, e, n) {
      "use strict";
      n.d(e, { Y: () => v });
      var i = n(842830),
        r = n(120330),
        o = n(518375),
        a = n(97626),
        s = n(243399),
        l = n(29685),
        u = n(641277),
        c = n(439489),
        h = n(369364),
        d = n(727504),
        f = n(501974),
        p = n(225441),
        g = n(762437);
      n(632459);
      let m = [
          "locale",
          "style",
          "years",
          "yearsDisplay",
          "months",
          "monthsDisplay",
          "weeks",
          "weeksDisplay",
          "days",
          "daysDisplay",
          "hours",
          "hoursDisplay",
          "minutes",
          "minutesDisplay",
          "seconds",
          "secondsDisplay",
          "milliseconds",
          "millisecondsDisplay",
          "microseconds",
          "microsecondsDisplay",
          "nanoseconds",
          "nanosecondsDisplay",
          "numberingSystem",
          "fractionalDigits",
        ],
        y = [
          {
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "days",
            displaySlot: "daysDisplay",
            unit: "days",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
        ];
      class v {
        constructor(t, e) {
          if (!(this && this instanceof v ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
          const n = (0, i.N)(t),
            s = Object.create(null),
            l = void 0 === e ? Object.create(null) : (0, r.BT)(e),
            h = (0, o.W)(
              l,
              "localeMatcher",
              "string",
              ["best fit", "lookup"],
              "best fit",
            ),
            d = (0, o.W)(l, "numberingSystem", "string", void 0, void 0);
          if (void 0 !== d && 0 > p.P.indexOf(d))
            throw RangeError(`Invalid numberingSystems: ${d}`);
          (s.nu = d), (s.localeMatcher = h);
          const { localeData: g, availableLocales: m } = v,
            b = (0, u.B)(m, n, s, ["nu"], g, v.getDefaultLocale),
            w = b.locale,
            x = (0, f.n)(this);
          (x.initializedDurationFormat = !0),
            (x.locale = w),
            (x.numberingSystem = b.nu);
          const _ = (0, o.W)(
            l,
            "style",
            "string",
            ["long", "short", "narrow", "digital"],
            "short",
          );
          (x.style = _), (x.dataLocale = b.dataLocale);
          let S = "";
          y.forEach((t) => {
            let {
                styleSlot: e,
                displaySlot: n,
                unit: i,
                values: r,
                digitalDefault: o,
              } = t,
              a = (0, c.$)(i, l, _, r, o, S);
            (x[e] = a.style),
              (x[n] = a.display),
              ("hours" === i ||
                "minutes" === i ||
                "seconds" === i ||
                "milliseconds" === i ||
                "microseconds" === i) &&
                (S = a.style);
          }),
            (x.fractionalDigits = (0, a.z)(
              l,
              "fractionalDigits",
              0,
              9,
              void 0,
            ));
        }
        resolvedOptions() {
          if ("object" != typeof this || !(0, r.Wt)(v, this))
            throw TypeError(
              "Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver",
            );
          let t = (0, f.n)(this),
            e = {};
          for (let n of m) {
            let i = t[n];
            "fractionalDigits" === n
              ? void 0 !== i && (i = Number(i))
              : (0, s.V1)(void 0 !== i, `Missing internal slot ${n}`),
              (e[n] = i);
          }
          return e;
        }
        formatToParts(t) {
          if (void 0 === (0, f.n)(this).initializedDurationFormat)
            throw TypeError("Error uninitialized locale");
          let e = (0, d.H)(t),
            n = (0, h.m)(this, e),
            i = [];
          for (let { type: t, unit: e, value: r } of n) {
            let n = { type: t, value: r };
            e && (n.unit = e), i.push(n);
          }
          return i;
        }
        format(t) {
          if (void 0 === (0, f.n)(this).initializedDurationFormat)
            throw TypeError("Error uninitialized locale");
          let e = (0, d.H)(t),
            n = (0, h.m)(this, e),
            i = "";
          for (let { value: t } of n) i += t;
          return i;
        }
        static supportedLocalesOf(t, e) {
          return (0, l.U)(v.availableLocales, (0, i.N)(t), e);
        }
        static __defaultLocale = "en";
        static availableLocales = new Set();
        static localeData = Object.keys(g.N.localeData).reduce((t, e) => {
          v.availableLocales.add(e);
          let n = g.N.localeData[e].nu;
          return (
            (t[e] = {
              nu: n,
              digitalFormat:
                g.N.localeData[e].separator ||
                n.reduce((t, e) => ((t[e] = g.N.default), t), {}),
            }),
            t
          );
        }, {});
        static getDefaultLocale = () => v.__defaultLocale;
        static polyfilled = !0;
      }
    },
    630449(t, e, n) {
      "use strict";
      n.d(e, { KU: () => a, rm: () => o });
      var i = n(657829),
        r = n(75109);
      function o() {
        let t = (0, r.E)();
        return (0, i.h)(t).getIsolationScope();
      }
      function a() {
        let t;
        return ((t = (0, r.E)()), (0, i.h)(t).getCurrentScope()).getClient();
      }
    },
    680753(t, e, n) {
      "use strict";
      n.d(e, { qO: () => o });
      var i = n(83220),
        r = n(231577);
      function o(t, e = {}) {
        if (
          (e.user &&
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            t.did ||
              e.did ||
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || (0, i.zf)()),
          e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, r.eJ)()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = `${e.did}`),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          let e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status);
      }
    },
    875565(t, e, n) {
      "use strict";
      n.d(e, { Qd: () => r, Qg: () => o });
      let i = Object.prototype.toString;
      function r(t) {
        return "[object Object]" === i.call(t);
      }
      function o(t) {
        return !!(t && t.then && "function" == typeof t.then);
      }
    },
    272469(t, e, n) {
      "use strict";
      n.d(e, { pq: () => s, vF: () => l });
      var i = n(780755),
        r = n(978862);
      let o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        a = {};
      function s(t) {
        if (!("console" in r.O)) return t();
        let e = r.O.console,
          n = {},
          i = Object.keys(a);
        i.forEach((t) => {
          let i = a[t];
          (n[t] = e[t]), (e[t] = i);
        });
        try {
          return t();
        } finally {
          i.forEach((t) => {
            e[t] = n[t];
          });
        }
      }
      let l = (0, r.B)("logger", function () {
        let t = !1,
          e = {
            enable: () => {
              t = !0;
            },
            disable: () => {
              t = !1;
            },
            isEnabled: () => t,
          };
        return (
          i.T
            ? o.forEach((n) => {
                e[n] = (...e) => {
                  t &&
                    s(() => {
                      r.O.console[n](`Sentry Logger [${n}]:`, ...e);
                    });
                };
              })
            : o.forEach((t) => {
                e[t] = () => void 0;
              }),
          e
        );
      });
    },
    231577(t, e, n) {
      "use strict";
      n.d(e, { eJ: () => r });
      var i = n(978862);
      function r() {
        let t = i.O,
          e = t.crypto || t.msCrypto,
          n = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e &&
            e.getRandomValues &&
            (n = () => {
              let t = new Uint8Array(1);
              return e.getRandomValues(t), t[0];
            });
        } catch (t) {}
        return "10000000100040008000100000000000".replace(/[018]/g, (t) =>
          (t ^ ((15 & n()) >> (t / 4))).toString(16),
        );
      }
    },
    690094(t, e, n) {
      "use strict";
      n.d(e, { my: () => o });
      var i = n(780755),
        r = n(272469);
      function o(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          i.T &&
            r.vF.log(
              `Failed to add non-enumerable property "${e}" to object`,
              t,
            );
        }
      }
    },
    83220(t, e, n) {
      "use strict";
      n.d(e, { lu: () => r, zf: () => o });
      var i = n(978862);
      function r() {
        return Date.now() / 1e3;
      }
      let o = (function () {
        let { performance: t } = i.O;
        if (!t || !t.now) return r;
        let e = Date.now() - t.now(),
          n = void 0 == t.timeOrigin ? e : t.timeOrigin;
        return () => (n + t.now()) / 1e3;
      })();
      (() => {
        let { performance: t } = i.O;
        if (!t || !t.now) return;
        let e = t.now(),
          n = Date.now(),
          r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
          o = t.timing && t.timing.navigationStart,
          a = "number" == typeof o ? Math.abs(o + e - n) : 36e5;
        if ((r < 36e5 || a < 36e5) && r <= a) return t.timeOrigin;
      })();
    },
    187322(t, e, n) {
      "use strict";
      let i;
      n.d(e, { oP: () => R, vN: () => P, xp: () => D });
      var r,
        o = n(64700),
        a = n(627968),
        s = Object.defineProperty,
        l = (t, e, n) => {
          let i;
          return (
            (i = "symbol" != typeof e ? e + "" : e) in t
              ? s(t, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (t[i] = n),
            n
          );
        },
        u = { exports: {} },
        c = {}.hasOwnProperty;
      function h() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          var n = arguments[e];
          if (n) {
            var i = typeof n;
            if ("string" === i || "number" === i) t.push(n);
            else if (Array.isArray(n)) {
              if (n.length) {
                var r = h.apply(null, n);
                r && t.push(r);
              }
            } else if ("object" === i) {
              if (
                n.toString !== Object.prototype.toString &&
                !n.toString.toString().includes("[native code]")
              ) {
                t.push(n.toString());
                continue;
              }
              for (var o in n) c.call(n, o) && n[o] && t.push(o);
            }
          }
        }
        return t.join(" ");
      }
      u.exports ? ((h.default = h), (u.exports = h)) : (window.classNames = h);
      let d = u.exports;
      var f = function (t, e, n, i, r, o, a, s) {
        if (!t) {
          var l;
          if (void 0 === e)
            l = Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var u = [n, i, r, o, a, s],
              c = 0;
            (l = Error(
              e.replace(/%s/g, function () {
                return u[c++];
              }),
            )).name = "Invariant Violation";
          }
          throw ((l.framesToPop = 1), l);
        }
      };
      let p = /^#[0-9a-f]{3,8}$/i,
        g = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
      class m {
        constructor(t, e, n, i) {
          (this.red = t), (this.green = e), (this.blue = n), (this.alpha = i);
        }
        toHexString() {
          let t = Math.round(this.red).toString(16),
            e = Math.round(this.green).toString(16),
            n = Math.round(this.blue).toString(16);
          return (
            "#" +
            (this.red > 15.5 ? t : "0" + t) +
            (this.green > 15.5 ? e : "0" + e) +
            (this.blue > 15.5 ? n : "0" + n)
          );
        }
        static parseString(t) {
          return t.match(g)
            ? this.parseColorFnString(t)
            : t.match(p)
              ? this.parseHexString(t)
              : void 0;
        }
        static parseRgbString(t) {
          return "transparent" === t
            ? new m(0, 0, 0, 0)
            : this.parseColorFnString(t);
        }
        static parseHexString(t) {
          if (!t.match(p) || [6, 8].includes(t.length)) return;
          if ((t = t.replace("#", "")).length < 6) {
            let [e, n, i, r] = t.split("");
            (t = e + e + n + n + i + i), r && (t += r + r);
          }
          let e = t.match(/.{1,2}/g);
          if (null != e)
            return new m(
              parseInt(e[0], 16),
              parseInt(e[1], 16),
              parseInt(e[2], 16),
              null != e[3] ? parseInt(e[3], 16) / 255 : 1,
            );
        }
        static parseColorFnString(t) {
          var e;
          let [, n, i] = null != (e = t.match(g)) ? e : [];
          if (!n || !i) return;
          let r = i
            .split(/\s*[,/\s]\s*/)
            .map((t) => t.replace(",", "").trim())
            .filter((t) => "" !== t)
            .map((t, e) =>
              (function (t, e, n) {
                if (/%$/.test(e))
                  return 3 === n
                    ? parseFloat(e) / 100
                    : (255 * parseFloat(e)) / 100;
                if ("h" === t[n]) {
                  if (/turn$/.test(e)) return 360 * parseFloat(e);
                  if (/rad$/.test(e)) return 57.3 * parseFloat(e);
                }
                return parseFloat(e);
              })(n, t, e),
            );
          if ("hsl" === n.substr(0, 3)) {
            let t = (function ({
              hue: t,
              saturation: e,
              lightness: n,
              alpha: i,
            }) {
              let r = (1 - Math.abs(2 * (n /= 255) - 1)) * (e /= 255),
                o = r * (1 - Math.abs(((t / 60) % 2) - 1)),
                a = n - r / 2,
                s = (
                  t < 60
                    ? [r, o, 0]
                    : t < 120
                      ? [o, r, 0]
                      : t < 180
                        ? [0, r, o]
                        : t < 240
                          ? [0, o, r]
                          : t < 300
                            ? [o, 0, r]
                            : [r, 0, o]
                ).map((t) => Math.round((t + a) * 255));
              return { red: s[0], green: s[1], blue: s[2], alpha: i };
            })({ hue: r[0], saturation: r[1], lightness: r[2], alpha: r[3] });
            return new m(t.red, t.green, t.blue, t.alpha);
          }
          return new m(r[0], r[1], r[2], "number" == typeof r[3] ? r[3] : 1);
        }
        toHSL() {
          return (function ({ red: t, green: e, blue: n, alpha: i }) {
            let r = t / 255,
              o = e / 255,
              a = n / 255,
              s = Math.max(r, o, a),
              l = Math.min(r, o, a),
              u = s - l,
              c = (s + l) / 2,
              h = u > 0 ? u / (1 - Math.abs(2 * c - 1)) : 0;
            if (0 === u)
              return { hue: 0, saturation: h, lightness: c, alpha: i };
            let d = 0;
            switch (s) {
              case r:
                d = ((o - a) / u) % 6;
                break;
              case o:
                d = (a - r) / u + 2;
                break;
              case a:
                d = (o - a) / u + 4;
            }
            return { hue: 60 * d, saturation: h, lightness: c, alpha: i };
          })({
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha,
          });
        }
        getRelativeLuminance() {
          let t = this.red / 255,
            e = this.green / 255,
            n = this.blue / 255;
          return (
            0.2126 *
              (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
            0.7152 *
              (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) +
            0.0722 *
              (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
          );
        }
      }
      function y(t, e) {
        let n = t.alpha;
        return new m(
          (1 - n) * e.red + n * t.red,
          (1 - n) * e.green + n * t.green,
          (1 - n) * e.blue + n * t.blue,
          t.alpha + e.alpha * (1 - t.alpha),
        );
      }
      function v(t) {
        if (t) return parseInt(t) > 0 ? t : void 0;
      }
      class b {
        constructor() {
          l(this, "targetElement"),
            l(this, "targetAncestry"),
            l(this, "boundingBox"),
            l(this, "className"),
            l(this, "offset", 0),
            l(this, "zIndex"),
            l(this, "container", null),
            l(this, "themeOptions"),
            l(this, "invalidate", () => null);
        }
        setContainer(t) {
          this.container = t;
        }
        setThemeOptions(t) {
          this.themeOptions = t;
        }
        showElement(t, e = {}) {
          var n;
          (this.targetElement = t),
            (this.targetAncestry = this.getElementAncestors(
              this.targetElement,
            )),
            (this.boundingBox = void 0),
            (this.className = e.className),
            (this.offset = null != (n = e.offset) ? n : 0),
            (this.zIndex = e.zIndex),
            this !== i && (null == i || i.hide(), (i = this)),
            this.invalidate();
        }
        hide() {
          (this.targetElement = void 0),
            (this.targetAncestry = void 0),
            (this.boundingBox = void 0),
            (this.className = void 0),
            (this.offset = 0),
            (this.zIndex = void 0),
            this.invalidate();
        }
        get visible() {
          return null != this.targetElement || null != this.boundingBox;
        }
        getElementAncestors(t) {
          if (null == t) return { elements: [], styles: [] };
          let e = [],
            n = [],
            i = t;
          for (; null != i; )
            e.push(i),
              "u" > typeof window && n.push(window.getComputedStyle(i)),
              (i = i.parentElement);
          return { elements: e, styles: n };
        }
        getNextZIndexForAncestry(t) {
          for (let e = 0; e < t.elements.length; e++) {
            let n = t.elements[e],
              i = parseInt(t.styles[e].getPropertyValue("z-index"));
            if (!isNaN(i)) return i + 1;
            if (n === this.container) break;
          }
        }
        getBorderRadius(t) {
          var e, n, i, r, o, a, s, l;
          let u =
              null !=
              (n = v(
                null == (e = t.styles[0]) ? void 0 : e.borderTopLeftRadius,
              ))
                ? n
                : "0",
            c =
              null !=
              (r = v(
                null == (i = t.styles[0]) ? void 0 : i.borderTopRightRadius,
              ))
                ? r
                : "0",
            h =
              null !=
              (a = v(
                null == (o = t.styles[0]) ? void 0 : o.borderBottomRightRadius,
              ))
                ? a
                : "0",
            d =
              null !=
              (l = v(
                null == (s = t.styles[0]) ? void 0 : s.borderBottomLeftRadius,
              ))
                ? l
                : "0";
          if ("0" !== u || "0" !== c || "0" !== h || "0" !== d)
            return `${u} ${c} ${h} ${d}`;
        }
        makePositionFromDOMRect(t) {
          var e, n, i, r;
          if (null == this.container) return {};
          let o = this.container.getBoundingClientRect(),
            { scrollTop: a, scrollLeft: s } = this.container,
            l = 0,
            u = 0,
            c = 0,
            h = 0;
          return (
            "number" == typeof this.offset
              ? ((l = this.offset),
                (u = this.offset),
                (c = this.offset),
                (h = this.offset))
              : ((l = null != (e = this.offset.top) ? e : 0),
                (u = null != (n = this.offset.right) ? n : 0),
                (c = null != (i = this.offset.bottom) ? i : 0),
                (h = null != (r = this.offset.left) ? r : 0)),
            {
              top: a + t.top - o.top + l,
              width: t.width - (u + h),
              height: t.height - (c + l),
              left: s + t.left - o.left + h,
            }
          );
        }
        getStyle() {
          var t;
          let e = {};
          if (
            (null != this.boundingBox &&
              (e = {
                ...this.makePositionFromDOMRect(this.boundingBox),
                zIndex: this.zIndex,
              }),
            null != this.targetElement && null != this.targetAncestry)
          ) {
            let n = (function (t) {
              let e = [];
              for (let n of t.styles.slice(1)) {
                let t = m.parseString(n.backgroundColor);
                if (null != t) {
                  if (t.alpha > 0.95) return t;
                  e.push(t);
                }
              }
              return e.push(new m(255, 255, 255, 1)), e.reduce(y);
            })(this.targetAncestry);
            e = {
              ...this.makePositionFromDOMRect(
                this.targetElement.getBoundingClientRect(),
              ),
              zIndex:
                null != (t = this.zIndex)
                  ? t
                  : this.getNextZIndexForAncestry(this.targetAncestry),
              "--__adaptive-focus-ring-color": (function (t, e) {
                if (null == t) return "var(--focus-primary)";
                let { saturation: n } = t.toHSL(),
                  i = t.getRelativeLuminance();
                return n <= 0.4
                  ? "var(--focus-primary)"
                  : "u" > typeof e
                    ? i < (e.brightnessTreshold || 0.2)
                      ? "var(--focus-light, rgba(255,255,255,0.7))"
                      : "var(--focus-dark, rgba(0, 0, 0, 0.85))"
                    : "rgba(255,255,255,0.7)";
              })(n, this.themeOptions),
              "--__adaptive-focus-ring-radius": this.getBorderRadius(
                this.targetAncestry,
              ),
            };
          }
          return e;
        }
      }
      let w = new b();
      "u" > typeof window && w.setContainer(document.body);
      let x = o.createContext(w);
      var _ = function (t, e, n, i) {
        var r = n ? n.call(i, t, e) : void 0;
        if (void 0 !== r) return !!r;
        if (t === e) return !0;
        if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
        var o = Object.keys(t),
          a = Object.keys(e);
        if (o.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(e), l = 0;
          l < o.length;
          l++
        ) {
          var u = o[l];
          if (!s(u)) return !1;
          var c = t[u],
            h = e[u];
          if (
            !1 === (r = n ? n.call(i, c, h, u) : void 0) ||
            (void 0 === r && c !== h)
          )
            return !1;
        }
        return !0;
      };
      let S = !1,
        E,
        T = {};
      function C() {
        if (!S) return;
        let t = null == i ? void 0 : i.getStyle();
        null == t || _(t, T)
          ? null != E && cancelAnimationFrame(E)
          : ((T = t), null == i || i.invalidate()),
          (E = requestAnimationFrame(C));
      }
      let A = !1,
        R = {
          get ringsEnabled() {
            return A;
          },
          setRingsEnabled(t) {
            (A = t), null == i || i.invalidate();
          },
          enableAnimationTracking() {
            (S = !0), (E = requestAnimationFrame(C));
          },
          disableAnimationTracking() {
            (S = !1), null != E && cancelAnimationFrame(E);
          },
        };
      function D(t) {
        let { containerRef: e, children: n, themeOptions: i } = t,
          r = o.useRef(new b());
        return (
          o.useEffect(() => {
            r.current.setContainer(e.current), r.current.setThemeOptions(i);
          }, [e.current]),
          (0, a.jsxs)(x.Provider, {
            value: r.current,
            children: [n, (0, a.jsx)(M, {})],
          })
        );
      }
      function M() {
        let t = o.useContext(x),
          [, e] = o.useState({});
        return (
          o.useEffect(
            () => (
              (t.invalidate = () => e({})),
              () => {
                t.invalidate = () => null;
              }
            ),
            [t],
          ),
          R.ringsEnabled && t.visible
            ? (0, a.jsx)("div", {
                className: d("focus-rings-ring", t.className),
                style: t.getStyle(),
              })
            : null
        );
      }
      let k =
        "u" > typeof window &&
        (null == (r = window.document) ? void 0 : r.createElement) != null
          ? o.useLayoutEffect
          : o.useEffect;
      function P(t) {
        let {
          within: e = !1,
          enabled: n = !0,
          focused: i,
          offset: r = 0,
          focusTarget: a,
          ringTarget: s,
          ringClassName: l,
          focusClassName: u,
          focusWithinClassName: c,
          children: h,
        } = t;
        null != a &&
          f(
            null != s,
            "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.",
          ),
          null != i &&
            f(
              null != s,
              "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.",
            );
        let p = o.useRef(!1),
          [g, m] = o.useState(!1),
          y = o.useContext(x),
          v = o.Children.only(h),
          { onBlur: b, onFocus: w, ..._ } = v.props,
          S = o.useMemo(() => ({ className: l, offset: r }), [l, r]);
        k(() => {
          n && y.invalidate();
        }),
          o.useEffect(() => {
            n || y.hide();
          }, [n, y]),
          o.useEffect(
            () => () => {
              p.current && y.hide();
            },
            [y],
          ),
          o.useEffect(() => {
            let t = null == s ? void 0 : s.current;
            null == i ||
              null == t ||
              ((p.current = i), i ? y.showElement(t, S) : !1 === i && y.hide());
          }, [i, S, y, s]),
          k(() => {
            if (null != i) return;
            let t = null == a ? void 0 : a.current,
              n = null == s ? void 0 : s.current;
            if (null != t && null != n)
              return (
                t.addEventListener("focusin", r, !0),
                t.addEventListener("focusout", o, !0),
                () => {
                  t.removeEventListener("focusin", r, !0),
                    t.removeEventListener("focusout", o, !0);
                }
              );
            function r(t) {
              if (null != n) {
                if (t.currentTarget === t.target) {
                  (p.current = !0), y.showElement(n, S);
                  return;
                }
                m(!0), e && y.showElement(n, S);
              }
            }
            function o() {
              y.hide(), (p.current = !1), m(!1);
            }
          }, [e, S, i, y, a, s]);
        let E = o.useCallback(
            (t) => {
              y.hide(), (p.current = !1), m(!1), null == b || b(t);
            },
            [b, y],
          ),
          T = o.useCallback(
            (t) => {
              let n = null == s ? void 0 : s.current;
              t.currentTarget === t.target
                ? ((p.current = !0),
                  y.showElement(null != n ? n : t.currentTarget, S))
                : (m(!0),
                  e && y.showElement(null != n ? n : t.currentTarget, S)),
                null == w || w(t);
            },
            [s, e, w, y, S],
          );
        return n && null == a && null == i
          ? o.cloneElement(v, {
              ..._,
              className: d(_.className, p.current ? u : void 0, g ? c : void 0),
              onBlur: E,
              onFocus: T,
            })
          : v;
      }
    },
  },
]);
//# sourceMappingURL=40041.5a3e48a93289fd56.js.map
