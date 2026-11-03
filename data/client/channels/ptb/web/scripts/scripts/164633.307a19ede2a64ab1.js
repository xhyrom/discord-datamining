(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["164633"],
  {
    498419(e) {
      !(function () {
        var t = function (e) {
          "use strict";
          e = e || {};
          var t,
            r,
            n,
            o,
            a,
            i,
            s,
            c,
            l,
            u,
            h,
            f,
            d,
            p,
            g,
            m,
            b = {
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
          ((d = {}).ff = "u" > typeof InstallTrigger),
            (d.chrome = !!window.chrome),
            (d.opera =
              !!window.opera || navigator.userAgent.indexOf("Opera") >= 0),
            (d.ie = !1),
            (d.safari =
              Object.prototype.toString
                .call(window.HTMLElement)
                .indexOf("Constructor") > 0),
            (d.supported = d.chrome || d.ff || d.opera);
          var _ = [];
          (h = function () {}), (c = f = !1);
          var y = {};
          (y.ready = function () {
            (c = !0), y.reset(), h();
          }),
            (y.reset = function () {
              c &&
                ((_ = []),
                (l = !1),
                (u = !1),
                i.clearRect(0, 0, o, n),
                i.drawImage(s, 0, 0, o, n),
                x.setIcon(a),
                window.clearTimeout(p),
                window.clearTimeout(g));
            }),
            (y.start = function () {
              if (c && !u) {
                var e = function () {
                  (l = _[0]), (u = !1), _.length > 0 && (_.shift(), y.start());
                };
                if (_.length > 0) {
                  u = !0;
                  var r = function () {
                    [
                      "type",
                      "animation",
                      "bgColor",
                      "textColor",
                      "fontFamily",
                      "fontStyle",
                    ].forEach(function (e) {
                      e in _[0].options && (t[e] = _[0].options[e]);
                    }),
                      S.run(
                        _[0].options,
                        function () {
                          e();
                        },
                        !1,
                      );
                  };
                  l
                    ? S.run(
                        l.options,
                        function () {
                          r();
                        },
                        !0,
                      )
                    : r();
                }
              }
            });
          var w = {},
            v = function (e) {
              return (
                (e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n),
                (e.x = o * e.x),
                (e.y = n * e.y),
                (e.w = o * e.w),
                (e.h = n * e.h),
                (e.len = ("" + e.n).length),
                e
              );
            };
          function M(e) {
            if (e.paused || e.ended || f) return !1;
            try {
              i.clearRect(0, 0, o, n), i.drawImage(e, 0, 0, o, n);
            } catch (e) {}
            (g = setTimeout(function () {
              M(e);
            }, S.duration)),
              x.setIcon(a);
          }
          (w.circle = function (e) {
            e = v(e);
            var r = !1;
            2 === e.len
              ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w), (r = !0))
              : e.len >= 3 &&
                ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w), (r = !0)),
              i.clearRect(0, 0, o, n),
              i.drawImage(s, 0, 0, o, n),
              i.beginPath(),
              (i.font =
                t.fontStyle +
                " " +
                Math.floor(e.h * (e.n > 99 ? 0.85 : 1)) +
                "px " +
                t.fontFamily),
              (i.textAlign = "center"),
              r
                ? (i.moveTo(e.x + e.w / 2, e.y),
                  i.lineTo(e.x + e.w - e.h / 2, e.y),
                  i.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2),
                  i.lineTo(e.x + e.w, e.y + e.h - e.h / 2),
                  i.quadraticCurveTo(
                    e.x + e.w,
                    e.y + e.h,
                    e.x + e.w - e.h / 2,
                    e.y + e.h,
                  ),
                  i.lineTo(e.x + e.h / 2, e.y + e.h),
                  i.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2),
                  i.lineTo(e.x, e.y + e.h / 2),
                  i.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y))
                : i.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI),
              (i.fillStyle =
                "rgba(" +
                t.bgColor.r +
                "," +
                t.bgColor.g +
                "," +
                t.bgColor.b +
                "," +
                e.o +
                ")"),
              i.fill(),
              i.closePath(),
              i.beginPath(),
              i.stroke(),
              (i.fillStyle =
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
                ? i.fillText(
                    (e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+",
                    Math.floor(e.x + e.w / 2),
                    Math.floor(e.y + e.h - 0.2 * e.h),
                  )
                : i.fillText(
                    e.n,
                    Math.floor(e.x + e.w / 2),
                    Math.floor(e.y + e.h - 0.15 * e.h),
                  ),
              i.closePath();
          }),
            (w.rectangle = function (e) {
              e = v(e);
              2 === e.len
                ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w))
                : e.len >= 3 && ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w)),
                i.clearRect(0, 0, o, n),
                i.drawImage(s, 0, 0, o, n),
                i.beginPath(),
                (i.font =
                  t.fontStyle +
                  " " +
                  Math.floor(e.h * (e.n > 99 ? 0.9 : 1)) +
                  "px " +
                  t.fontFamily),
                (i.textAlign = "center"),
                (i.fillStyle =
                  "rgba(" +
                  t.bgColor.r +
                  "," +
                  t.bgColor.g +
                  "," +
                  t.bgColor.b +
                  "," +
                  e.o +
                  ")"),
                i.fillRect(e.x, e.y, e.w, e.h),
                (i.fillStyle =
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
                  ? i.fillText(
                      (e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+",
                      Math.floor(e.x + e.w / 2),
                      Math.floor(e.y + e.h - 0.2 * e.h),
                    )
                  : i.fillText(
                      e.n,
                      Math.floor(e.x + e.w / 2),
                      Math.floor(e.y + e.h - 0.15 * e.h),
                    ),
                i.closePath();
            });
          var x = {};
          function C(e) {
            e = e.replace(
              /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              function (e, t, r, n) {
                return t + t + r + r + n + n;
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
          function R(e, t) {
            var r,
              n = {};
            for (r in e) n[r] = e[r];
            for (r in t) n[r] = t[r];
            return n;
          }
          (x.getIcon = function () {
            var e = !1;
            return (
              t.element
                ? (e = t.element)
                : t.elementId
                  ? (e = m.getElementById(t.elementId)).setAttribute(
                      "href",
                      e.getAttribute("src"),
                    )
                  : !1 ===
                      (e = (function () {
                        for (
                          var e = m
                              .getElementsByTagName("head")[0]
                              .getElementsByTagName("link"),
                            t = e.length,
                            r = t - 1;
                          r >= 0;
                          r--
                        )
                          if (
                            /(^|\s)icon(\s|$)/i.test(e[r].getAttribute("rel"))
                          )
                            return e[r];
                        return !1;
                      })()) &&
                    ((e = m.createElement("link")).setAttribute("rel", "icon"),
                    m.getElementsByTagName("head")[0].appendChild(e)),
              e.setAttribute("type", "image/png"),
              e
            );
          }),
            (x.setIcon = function (e) {
              var n = e.toDataURL("image/png");
              if ((t.dataUrl && t.dataUrl(n), t.element))
                t.element.setAttribute("href", n),
                  t.element.setAttribute("src", n);
              else if (t.elementId) {
                var o = m.getElementById(t.elementId);
                o.setAttribute("href", n), o.setAttribute("src", n);
              } else if (d.ff || d.opera) {
                var a = r;
                (r = m.createElement("link")),
                  d.opera && r.setAttribute("rel", "icon"),
                  r.setAttribute("rel", "icon"),
                  r.setAttribute("type", "image/png"),
                  m.getElementsByTagName("head")[0].appendChild(r),
                  r.setAttribute("href", n),
                  a.parentNode && a.parentNode.removeChild(a);
              } else r.setAttribute("href", n);
            });
          var S = {};
          (S.duration = 40),
            (S.types = {}),
            (S.types.fade = [
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
            (S.types.none = [{ x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 }]),
            (S.types.pop = [
              { x: 1, y: 1, w: 0, h: 0, o: 1 },
              { x: 0.9, y: 0.9, w: 0.1, h: 0.1, o: 1 },
              { x: 0.8, y: 0.8, w: 0.2, h: 0.2, o: 1 },
              { x: 0.7, y: 0.7, w: 0.3, h: 0.3, o: 1 },
              { x: 0.6, y: 0.6, w: 0.4, h: 0.4, o: 1 },
              { x: 0.5, y: 0.5, w: 0.5, h: 0.5, o: 1 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (S.types.popFade = [
              { x: 0.75, y: 0.75, w: 0, h: 0, o: 0 },
              { x: 0.65, y: 0.65, w: 0.1, h: 0.1, o: 0.2 },
              { x: 0.6, y: 0.6, w: 0.2, h: 0.2, o: 0.4 },
              { x: 0.55, y: 0.55, w: 0.3, h: 0.3, o: 0.6 },
              { x: 0.5, y: 0.5, w: 0.4, h: 0.4, o: 0.8 },
              { x: 0.45, y: 0.45, w: 0.5, h: 0.5, o: 0.9 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (S.types.slide = [
              { x: 0.4, y: 1, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.8, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.7, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.6, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.5, w: 0.6, h: 0.6, o: 1 },
              { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
            ]),
            (S.run = function (e, r, n, o) {
              var i =
                S.types[
                  m.hidden || m.msHidden || m.webkitHidden || m.mozHidden
                    ? "none"
                    : t.animation
                ];
              ((o =
                !0 === n
                  ? void 0 !== o
                    ? o
                    : i.length - 1
                  : void 0 !== o
                    ? o
                    : 0),
              (r = r || function () {}),
              o < i.length && o >= 0)
                ? (w[t.type](R(e, i[o])),
                  (p = setTimeout(function () {
                    n ? (o -= 1) : (o += 1), S.run(e, r, n, o);
                  }, S.duration)),
                  x.setIcon(a))
                : r();
            }),
            ((t = R(b, e)).bgColor = C(t.bgColor)),
            (t.textColor = C(t.textColor)),
            (t.position = t.position.toLowerCase()),
            (t.animation = S.types["" + t.animation]
              ? t.animation
              : b.animation),
            (m = t.win.document);
          var E = t.position.indexOf("up") > -1,
            A = t.position.indexOf("left") > -1;
          if (E || A)
            for (var I = 0; I < S.types["" + t.animation].length; I++) {
              var T = S.types["" + t.animation][I];
              E &&
                (T.y < 0.6
                  ? (T.y = T.y - 0.4)
                  : (T.y = T.y - 2 * T.y + (1 - T.w))),
                A &&
                  (T.x < 0.6
                    ? (T.x = T.x - 0.4)
                    : (T.x = T.x - 2 * T.x + (1 - T.h))),
                (S.types["" + t.animation][I] = T);
            }
          return (
            (t.type = w["" + t.type] ? t.type : b.type),
            (r = x.getIcon()),
            (a = document.createElement("canvas")),
            (s = document.createElement("img")),
            r.hasAttribute("href")
              ? (s.setAttribute("crossOrigin", "anonymous"),
                (s.onload = function () {
                  (n = s.height > 0 ? s.height : 32),
                    (o = s.width > 0 ? s.width : 32),
                    (a.height = n),
                    (a.width = o),
                    (i = a.getContext("2d")),
                    y.ready();
                }),
                s.setAttribute("src", r.getAttribute("href")))
              : ((s.onload = function () {
                  (n = 32),
                    (o = 32),
                    (s.height = n),
                    (s.width = o),
                    (a.height = n),
                    (a.width = o),
                    (i = a.getContext("2d")),
                    y.ready();
                }),
                s.setAttribute("src", "")),
            {
              badge: function (e, t) {
                (t = ("string" == typeof t ? { animation: t } : t) || {}),
                  (h = function () {
                    try {
                      if ("number" == typeof e ? e > 0 : "" !== e) {
                        var r = { type: "badge", options: { n: e } };
                        if (
                          ("animation" in t &&
                            S.types["" + t.animation] &&
                            (r.options.animation = "" + t.animation),
                          "type" in t &&
                            w["" + t.type] &&
                            (r.options.type = "" + t.type),
                          ["bgColor", "textColor"].forEach(function (e) {
                            e in t && (r.options[e] = C(t[e]));
                          }),
                          ["fontStyle", "fontFamily"].forEach(function (e) {
                            e in t && (r.options[e] = t[e]);
                          }),
                          _.push(r),
                          _.length > 100)
                        )
                          throw Error("Too many badges requests in queue.");
                        y.start();
                      } else y.reset();
                    } catch (e) {
                      throw Error("Error setting badge. Message: " + e.message);
                    }
                  }),
                  c && h();
              },
              video: function (e) {
                (h = function () {
                  try {
                    if ("stop" === e) {
                      (f = !0), y.reset(), (f = !1);
                      return;
                    }
                    e.addEventListener(
                      "play",
                      function () {
                        M(this);
                      },
                      !1,
                    );
                  } catch (e) {
                    throw Error("Error setting video. Message: " + e.message);
                  }
                }),
                  c && h();
              },
              image: function (e) {
                (h = function () {
                  try {
                    var t = e.width,
                      r = e.height,
                      s = document.createElement("img"),
                      c = t / o < r / n ? t / o : r / n;
                    s.setAttribute("crossOrigin", "anonymous"),
                      (s.onload = function () {
                        i.clearRect(0, 0, o, n),
                          i.drawImage(s, 0, 0, o, n),
                          x.setIcon(a);
                      }),
                      s.setAttribute("src", e.getAttribute("src")),
                      (s.height = r / c),
                      (s.width = t / c);
                  } catch (e) {
                    throw Error("Error setting image. Message: " + e.message);
                  }
                }),
                  c && h();
              },
              webcam: function (e) {
                if (
                  ((window.URL && window.URL.createObjectURL) ||
                    ((window.URL = window.URL || {}),
                    (window.URL.createObjectURL = function (e) {
                      return e;
                    })),
                  d.supported)
                ) {
                  var t = !1;
                  (navigator.getUserMedia =
                    navigator.getUserMedia ||
                    navigator.oGetUserMedia ||
                    navigator.msGetUserMedia ||
                    navigator.mozGetUserMedia ||
                    navigator.webkitGetUserMedia),
                    (h = function () {
                      try {
                        if ("stop" === e) {
                          (f = !0), y.reset(), (f = !1);
                          return;
                        }
                        ((t = document.createElement("video")).width = o),
                          (t.height = n),
                          navigator.getUserMedia(
                            { video: !0, audio: !1 },
                            function (e) {
                              (t.src = URL.createObjectURL(e)), t.play(), M(t);
                            },
                            function () {},
                          );
                      } catch (e) {
                        throw Error(
                          "Error setting webcam. Message: " + e.message,
                        );
                      }
                    }),
                    c && h();
                }
              },
              reset: y.reset,
              browser: { supported: d.supported },
            }
          );
        };
        "u" > typeof define && define.amd
          ? define([], function () {
              return t;
            })
          : e.exports
            ? (e.exports = t)
            : (this.Favico = t);
      })();
    },
    353719(e, t, r) {
      var n = r(271434);
      (e.exports = function e(t, r, o) {
        if (
          (n(r) || ((o = r || o), (r = [])), (o = o || {}), t instanceof RegExp)
        ) {
          var i,
            s,
            c = r,
            h = t.source.match(/\((?!\?)/g);
          if (h)
            for (var f = 0; f < h.length; f++)
              c.push({
                name: f,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null,
              });
          return (t.keys = c), t;
        }
        if (n(t)) {
          for (var d, p = r, g = o, m = [], b = 0; b < t.length; b++)
            m.push(e(t[b], p, g).source);
          return ((d = RegExp("(?:" + m.join("|") + ")", l(g))).keys = p), d;
        }
        return (i = r), u(a(t, (s = o)), i, s);
      }),
        (e.exports.parse = a),
        (e.exports.compile = function (e, t) {
          return s(a(e, t));
        }),
        (e.exports.tokensToFunction = s),
        (e.exports.tokensToRegExp = u);
      var o = RegExp(
        "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        "g",
      );
      function a(e, t) {
        for (
          var r, n = [], a = 0, i = 0, s = "", l = (t && t.delimiter) || "/";
          null != (r = o.exec(e));

        ) {
          var u = r[0],
            h = r[1],
            f = r.index;
          if (((s += e.slice(i, f)), (i = f + u.length), h)) {
            s += h[1];
            continue;
          }
          var d = e[i],
            p = r[2],
            g = r[3],
            m = r[4],
            b = r[5],
            _ = r[6],
            y = r[7];
          s && (n.push(s), (s = ""));
          var w = null != p && null != d && d !== p,
            v = "+" === _ || "*" === _,
            M = "?" === _ || "*" === _,
            x = r[2] || l,
            C = m || b;
          n.push({
            name: g || a++,
            prefix: p || "",
            delimiter: x,
            optional: M,
            repeat: v,
            partial: w,
            asterisk: !!y,
            pattern: C
              ? C.replace(/([=!:$\/()])/g, "\\$1")
              : y
                ? ".*"
                : "[^" + c(x) + "]+?",
          });
        }
        return i < e.length && (s += e.substr(i)), s && n.push(s), n;
      }
      function i(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function s(e) {
        for (var t = Array(e.length), r = 0; r < e.length; r++)
          "object" == typeof e[r] &&
            (t[r] = RegExp("^(?:" + e[r].pattern + ")$"));
        return function (r, o) {
          for (
            var a = "",
              s = r || {},
              c = (o || {}).pretty ? i : encodeURIComponent,
              l = 0;
            l < e.length;
            l++
          ) {
            var u,
              h = e[l];
            if ("string" == typeof h) {
              a += h;
              continue;
            }
            var f = s[h.name];
            if (null == f)
              if (h.optional) {
                h.partial && (a += h.prefix);
                continue;
              } else throw TypeError('Expected "' + h.name + '" to be defined');
            if (n(f)) {
              if (!h.repeat)
                throw TypeError(
                  'Expected "' +
                    h.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(f) +
                    "`",
                );
              if (0 === f.length)
                if (h.optional) continue;
                else
                  throw TypeError('Expected "' + h.name + '" to not be empty');
              for (var d = 0; d < f.length; d++) {
                if (((u = c(f[d])), !t[l].test(u)))
                  throw TypeError(
                    'Expected all "' +
                      h.name +
                      '" to match "' +
                      h.pattern +
                      '", but received `' +
                      JSON.stringify(u) +
                      "`",
                  );
                a += (0 === d ? h.prefix : h.delimiter) + u;
              }
              continue;
            }
            if (
              ((u = h.asterisk
                ? encodeURI(f).replace(/[?#]/g, function (e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                  })
                : c(f)),
              !t[l].test(u))
            )
              throw TypeError(
                'Expected "' +
                  h.name +
                  '" to match "' +
                  h.pattern +
                  '", but received "' +
                  u +
                  '"',
              );
            a += h.prefix + u;
          }
          return a;
        };
      }
      function c(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function l(e) {
        return e.sensitive ? "" : "i";
      }
      function u(e, t, r) {
        n(t) || ((r = t || r), (t = []));
        for (
          var o, a = (r = r || {}).strict, i = !1 !== r.end, s = "", u = 0;
          u < e.length;
          u++
        ) {
          var h = e[u];
          if ("string" == typeof h) s += c(h);
          else {
            var f = c(h.prefix),
              d = "(?:" + h.pattern + ")";
            t.push(h),
              h.repeat && (d += "(?:" + f + d + ")*"),
              (s += d =
                h.optional
                  ? h.partial
                    ? f + "(" + d + ")?"
                    : "(?:" + f + "(" + d + "))?"
                  : f + "(" + d + ")");
          }
        }
        var p = c(r.delimiter || "/"),
          g = s.slice(-p.length) === p;
        return (
          a || (s = (g ? s.slice(0, -p.length) : s) + "(?:" + p + "(?=$))?"),
          i ? (s += "$") : (s += a && g ? "" : "(?=" + p + "|$)"),
          ((o = RegExp("^" + s, l(r))).keys = t),
          o
        );
      }
    },
    492462(e, t, r) {
      "use strict";
      var n = r(948055),
        o = r(724039),
        a = r(389293);
      function i(e, t) {
        return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      (t.extract = function (e) {
        return e.split("?")[1] || "";
      }),
        (t.parse = function (e, t) {
          var r = (function (e) {
              var t;
              switch (e.arrayFormat) {
                case "index":
                  return function (e, r, n) {
                    if (
                      ((t = /\[(\d*)\]$/.exec(e)),
                      (e = e.replace(/\[\d*\]$/, "")),
                      !t)
                    ) {
                      n[e] = r;
                      return;
                    }
                    void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r);
                  };
                case "bracket":
                  return function (e, r, n) {
                    if (
                      ((t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, "")), t)
                    ) {
                      if (void 0 === n[e]) {
                        n[e] = [r];
                        return;
                      }
                    } else {
                      n[e] = r;
                      return;
                    }
                    n[e] = [].concat(n[e], r);
                  };
                default:
                  return function (e, t, r) {
                    if (void 0 === r[e]) {
                      r[e] = t;
                      return;
                    }
                    r[e] = [].concat(r[e], t);
                  };
              }
            })((t = o({ arrayFormat: "none" }, t))),
            n = Object.create(null);
          return "string" == typeof e && (e = e.trim().replace(/^(\?|#|&)/, ""))
            ? (e.split("&").forEach(function (e) {
                var t = e.replace(/\+/g, " ").split("="),
                  o = t.shift(),
                  i = t.length > 0 ? t.join("=") : void 0;
                (i = void 0 === i ? null : a(i)), r(a(o), i, n);
              }),
              Object.keys(n)
                .sort()
                .reduce(function (e, t) {
                  var r = n[t];
                  return (
                    r && "object" == typeof r && !Array.isArray(r)
                      ? (e[t] = (function e(t) {
                          return Array.isArray(t)
                            ? t.sort()
                            : "object" == typeof t
                              ? e(Object.keys(t))
                                  .sort(function (e, t) {
                                    return Number(e) - Number(t);
                                  })
                                  .map(function (e) {
                                    return t[e];
                                  })
                              : t;
                        })(r))
                      : (e[t] = r),
                    e
                  );
                }, Object.create(null)))
            : n;
        }),
        (t.stringify = function (e, t) {
          var r = (function (e) {
            switch (e.arrayFormat) {
              case "index":
                return function (t, r, n) {
                  return null === r
                    ? [i(t, e), "[", n, "]"].join("")
                    : [i(t, e), "[", i(n, e), "]=", i(r, e)].join("");
                };
              case "bracket":
                return function (t, r) {
                  return null === r
                    ? i(t, e)
                    : [i(t, e), "[]=", i(r, e)].join("");
                };
              default:
                return function (t, r) {
                  return null === r
                    ? i(t, e)
                    : [i(t, e), "=", i(r, e)].join("");
                };
            }
          })((t = o({ encode: !0, strict: !0, arrayFormat: "none" }, t)));
          return e
            ? Object.keys(e)
                .sort()
                .map(function (n) {
                  var o = e[n];
                  if (void 0 === o) return "";
                  if (null === o) return i(n, t);
                  if (Array.isArray(o)) {
                    var a = [];
                    return (
                      o.slice().forEach(function (e) {
                        void 0 !== e && a.push(r(n, e, a.length));
                      }),
                      a.join("&")
                    );
                  }
                  return i(n, t) + "=" + i(o, t);
                })
                .filter(function (e) {
                  return e.length > 0;
                })
                .join("&")
            : "";
        });
    },
    488428(e, t, r) {
      "use strict";
      (t.decode = t.parse = r(973784)), (t.encode = t.stringify = r(998736));
    },
    806163(e, t, r) {
      "use strict";
      r.d(t, {
        B6: () => R,
        Ix: () => b,
        W5: () => P,
        W6: () => I,
        XZ: () => m,
        dO: () => E,
        g: () => k,
        qh: () => S,
        rd: () => M,
        zy: () => T,
      });
      var n = r(750573),
        o = r(582128),
        a = r(655972),
        i = r.n(a),
        s = r(830845),
        c = r(258635),
        l = r(542113),
        u = r(353719),
        h = r.n(u);
      r(53635), r(725664), r(833871);
      var f =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
              ? window
              : void 0 !== r.g
                ? r.g
                : {},
        d =
          o.createContext ||
          function (e, t) {
            var r,
              a,
              s =
                "__create-react-context-" +
                (f.__global_unique_id__ = (f.__global_unique_id__ || 0) + 1) +
                "__",
              c = (function (e) {
                function r() {
                  for (
                    var t, r, n, o = arguments.length, a = Array(o), i = 0;
                    i < o;
                    i++
                  )
                    a[i] = arguments[i];
                  return (
                    (r = (t = e.call.apply(e, [this].concat(a)) || this).props
                      .value),
                    (n = []),
                    (t.emitter = {
                      on: function (e) {
                        n.push(e);
                      },
                      off: function (e) {
                        n = n.filter(function (t) {
                          return t !== e;
                        });
                      },
                      get: function () {
                        return r;
                      },
                      set: function (e, t) {
                        (r = e),
                          n.forEach(function (e) {
                            return e(r, t);
                          });
                      },
                    }),
                    t
                  );
                }
                (0, n.A)(r, e);
                var o = r.prototype;
                return (
                  (o.getChildContext = function () {
                    var e;
                    return ((e = {})[s] = this.emitter), e;
                  }),
                  (o.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var r,
                        n = this.props.value,
                        o = e.value;
                      (n === o ? 0 !== n || 1 / n == 1 / o : n != n && o != o)
                        ? (r = 0)
                        : 0 !=
                            (r =
                              ("function" == typeof t ? t(n, o) : 0x3fffffff) |
                              0) && this.emitter.set(e.value, r);
                    }
                  }),
                  (o.render = function () {
                    return this.props.children;
                  }),
                  r
                );
              })(o.Component);
            ((r = {})[s] = i().object.isRequired), (c.childContextTypes = r);
            var l = (function (t) {
              function r() {
                for (
                  var e, r = arguments.length, n = Array(r), o = 0;
                  o < r;
                  o++
                )
                  n[o] = arguments[o];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(n)) || this).observedBits =
                    void 0),
                  (e.state = { value: e.getValue() }),
                  (e.onUpdate = function (t, r) {
                    (e.observedBits & r) != 0 &&
                      e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              (0, n.A)(r, t);
              var o = r.prototype;
              return (
                (o.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = null == t ? 0x3fffffff : t;
                }),
                (o.componentDidMount = function () {
                  this.context[s] && this.context[s].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = null == e ? 0x3fffffff : e;
                }),
                (o.componentWillUnmount = function () {
                  this.context[s] && this.context[s].off(this.onUpdate);
                }),
                (o.getValue = function () {
                  return this.context[s] ? this.context[s].get() : e;
                }),
                (o.render = function () {
                  var e;
                  return (Array.isArray((e = this.props.children)) ? e[0] : e)(
                    this.state.value,
                  );
                }),
                r
              );
            })(o.Component);
            return (
              ((a = {})[s] = i().object),
              (l.contextTypes = a),
              { Provider: c, Consumer: l }
            );
          },
        p = function (e) {
          var t = d();
          return (t.displayName = e), t;
        },
        g = p("Router-History"),
        m = p("Router"),
        b = (function (e) {
          function t(t) {
            var r;
            return (
              ((r = e.call(this, t) || this).state = {
                location: t.history.location,
              }),
              (r._isMounted = !1),
              (r._pendingLocation = null),
              t.staticContext ||
                (r.unlisten = t.history.listen(function (e) {
                  r._pendingLocation = e;
                })),
              r
            );
          }
          (0, n.A)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: "/", url: "/", params: {}, isExact: "/" === e };
            });
          var r = t.prototype;
          return (
            (r.componentDidMount = function () {
              var e = this;
              (this._isMounted = !0),
                this.unlisten && this.unlisten(),
                this.props.staticContext ||
                  (this.unlisten = this.props.history.listen(function (t) {
                    e._isMounted && e.setState({ location: t });
                  })),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (r.componentWillUnmount = function () {
              this.unlisten &&
                (this.unlisten(),
                (this._isMounted = !1),
                (this._pendingLocation = null));
            }),
            (r.render = function () {
              return o.createElement(
                m.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                o.createElement(g.Provider, {
                  children: this.props.children || null,
                  value: this.props.history,
                }),
              );
            }),
            t
          );
        })(o.Component);
      o.Component;
      var _ = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          (0, n.A)(t, e);
          var r = t.prototype;
          return (
            (r.componentDidMount = function () {
              this.props.onMount && this.props.onMount.call(this, this);
            }),
            (r.componentDidUpdate = function (e) {
              this.props.onUpdate && this.props.onUpdate.call(this, this, e);
            }),
            (r.componentWillUnmount = function () {
              this.props.onUnmount && this.props.onUnmount.call(this, this);
            }),
            (r.render = function () {
              return null;
            }),
            t
          );
        })(o.Component),
        y = {},
        w = 0;
      function v(e, t) {
        return (
          void 0 === e && (e = "/"),
          void 0 === t && (t = {}),
          "/" === e
            ? e
            : (function (e) {
                if (y[e]) return y[e];
                var t = h().compile(e);
                return w < 1e4 && ((y[e] = t), w++), t;
              })(e)(t, { pretty: !0 })
        );
      }
      function M(e) {
        var t = e.computedMatch,
          r = e.to,
          n = e.push,
          a = void 0 !== n && n;
        return o.createElement(m.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var n = e.history,
            i = e.staticContext,
            u = a ? n.push : n.replace,
            h = (0, s.yJ)(
              t
                ? "string" == typeof r
                  ? v(r, t.params)
                  : (0, l.A)({}, r, { pathname: v(r.pathname, t.params) })
                : r,
            );
          return i
            ? (u(h), null)
            : o.createElement(_, {
                onMount: function () {
                  u(h);
                },
                onUpdate: function (e, t) {
                  var r = (0, s.yJ)(t.to);
                  (0, s.Fu)(r, (0, l.A)({}, h, { key: r.key })) || u(h);
                },
                to: r,
              });
        });
      }
      var x = {},
        C = 0;
      function R(e, t) {
        void 0 === t && (t = {}),
          ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
        var r = t,
          n = r.path,
          o = r.exact,
          a = void 0 !== o && o,
          i = r.strict,
          s = void 0 !== i && i,
          c = r.sensitive,
          l = void 0 !== c && c;
        return [].concat(n).reduce(function (t, r) {
          if (!r && "" !== r) return null;
          if (t) return t;
          var n = (function (e, t) {
              var r = "" + t.end + t.strict + t.sensitive,
                n = x[r] || (x[r] = {});
              if (n[e]) return n[e];
              var o = [],
                a = { regexp: h()(e, o, t), keys: o };
              return C < 1e4 && ((n[e] = a), C++), a;
            })(r, { end: a, strict: s, sensitive: l }),
            o = n.regexp,
            i = n.keys,
            c = o.exec(e);
          if (!c) return null;
          var u = c[0],
            f = c.slice(1),
            d = e === u;
          return a && !d
            ? null
            : {
                path: r,
                url: "/" === r && "" === u ? "/" : u,
                isExact: d,
                params: i.reduce(function (e, t, r) {
                  return (e[t.name] = f[r]), e;
                }, {}),
              };
        }, null);
      }
      var S = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, n.A)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return o.createElement(m.Consumer, null, function (t) {
              t || (0, c.A)(!1);
              var r,
                n = e.props.location || t.location,
                a = e.props.computedMatch
                  ? e.props.computedMatch
                  : e.props.path
                    ? R(n.pathname, e.props)
                    : t.match,
                i = (0, l.A)({}, t, { location: n, match: a }),
                s = e.props,
                u = s.children,
                h = s.component,
                f = s.render;
              return (
                Array.isArray(u) &&
                  ((r = u), 0 === o.Children.count(r)) &&
                  (u = null),
                o.createElement(
                  m.Provider,
                  { value: i },
                  i.match
                    ? u
                      ? "function" == typeof u
                        ? u(i)
                        : u
                      : h
                        ? o.createElement(h, i)
                        : f
                          ? f(i)
                          : null
                    : "function" == typeof u
                      ? u(i)
                      : null,
                )
              );
            });
          }),
          t
        );
      })(o.Component);
      o.Component;
      var E = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, n.A)(t, e),
            (t.prototype.render = function () {
              var e = this;
              return o.createElement(m.Consumer, null, function (t) {
                t || (0, c.A)(!1);
                var r,
                  n,
                  a = e.props.location || t.location;
                return (
                  o.Children.forEach(e.props.children, function (e) {
                    if (null == n && o.isValidElement(e)) {
                      r = e;
                      var i = e.props.path || e.props.from;
                      n = i
                        ? R(a.pathname, (0, l.A)({}, e.props, { path: i }))
                        : t.match;
                    }
                  }),
                  n
                    ? o.cloneElement(r, { location: a, computedMatch: n })
                    : null
                );
              });
            }),
            t
          );
        })(o.Component),
        A = o.useContext;
      function I() {
        return A(g);
      }
      function T() {
        return A(m).location;
      }
      function k() {
        var e = A(m).match;
        return e ? e.params : {};
      }
      function P(e) {
        var t = T(),
          r = A(m).match;
        return e ? R(t.pathname, e) : r;
      }
    },
    955205(e, t, r) {
      "use strict";
      r.d(t, { A: () => c });
      var n = r(582128);
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var a = function (e) {
          var t = document.createElement("script");
          (t.async = !0),
            (t.defer = !0),
            (t.src = e),
            document.head && document.head.appendChild(t);
        },
        i = /(http|https):\/\/(www)?.+\/recaptcha/,
        s = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
        c = (function (e) {
          function t() {
            for (var t, r = arguments.length, o = Array(r), s = 0; s < r; s++)
              o[s] = arguments[s];
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
                t.props.inject &&
                  !Array.from(document.scripts).reduce(function (e, t) {
                    return e || i.test(t.src);
                  }, !1) &&
                  a(
                    "https://recaptcha.net/recaptcha/api.js?render=explicit" +
                      (t.props.hl ? "&hl=" + t.props.hl : ""),
                  );
              }),
              (t._prepare = function () {
                var e = t.props,
                  r = e.explicit,
                  n = e.onLoad;
                window.grecaptcha.ready(function () {
                  t.setState({ ready: !0 }, function () {
                    r || t.renderExplicitly(), n && n();
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
                return new Promise(function (e, r) {
                  if (t.state.rendered)
                    return r(
                      Error(
                        "This recaptcha instance has been already rendered.",
                      ),
                    );
                  if (!t.state.ready || !t.container)
                    return r(
                      Error("Recaptcha is not ready for rendering yet."),
                    );
                  var n = t._renderRecaptcha(t.container, {
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
                  t.setState({ instanceId: n, rendered: !0 }, function () {
                    t.props.onRender && t.props.onRender(), e();
                  });
                });
              }),
              (t.reset = function () {
                return new Promise(function (e, r) {
                  if (t.state.rendered) return t._resetRecaptcha(), e();
                  r(Error("This recaptcha instance did not render yet."));
                });
              }),
              (t.execute = function () {
                return new Promise(function (e, r) {
                  return t.state.invisible
                    ? (t.state.rendered && (t._executeRecaptcha(), e()),
                      r(Error("This recaptcha instance did not render yet.")))
                    : r(
                        Error(
                          "Manual execution is only available for invisible size.",
                        ),
                      );
                });
              }),
              (t.getResponse = function () {
                return new Promise(function (e, r) {
                  if (t.state.rendered) return e(t._getResponseRecaptcha());
                  r(Error("This recaptcha instance did not render yet."));
                });
              }),
              (t.render = function () {
                var e = n.createElement("div", {
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
              var r = "invisible" === e.size;
              return r !== t.invisible ? { invisible: r } : null;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this;
              s.reduce(function (r, n) {
                return t.props[n] !== e[n] ? [].concat(r, [n]) : r;
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
        })(n.Component);
      c.defaultProps = {
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
    299855(e, t, r) {
      let n = r(64672),
        o = r(376780),
        a = r(864886),
        i = r(931717),
        s = r(532618),
        c = r(298415),
        l = r(368208),
        u = r(367249),
        h = r(481014),
        f = r(69528),
        d = r(961348),
        p = r(354219),
        g = r(273771),
        m = r(481558),
        b = r(158832),
        _ = r(392973),
        y = r(745271),
        w = r(237769),
        v = r(521159),
        M = r(800670),
        x = r(596641),
        C = r(177335),
        R = r(601861),
        S = r(569671),
        E = r(738018),
        A = r(88701),
        I = r(607008),
        T = r(46666),
        k = r(74509),
        P = r(4144),
        N = r(420621),
        B = r(32018),
        j = r(425800),
        O = r(189715),
        L = r(964580),
        z = r(861345),
        D = r(181817),
        $ = r(139328),
        U = r(711002);
      e.exports = {
        parse: s,
        valid: c,
        clean: l,
        inc: u,
        diff: h,
        major: f,
        minor: d,
        patch: p,
        prerelease: g,
        compare: m,
        rcompare: b,
        compareLoose: _,
        compareBuild: y,
        sort: w,
        rsort: v,
        gt: M,
        lt: x,
        eq: C,
        neq: R,
        gte: S,
        lte: E,
        cmp: A,
        coerce: I,
        Comparator: T,
        Range: k,
        satisfies: P,
        toComparators: N,
        maxSatisfying: B,
        minSatisfying: j,
        minVersion: O,
        validRange: L,
        outside: z,
        gtr: D,
        ltr: $,
        intersects: U,
        simplifyRange: r(532879),
        subset: r(549566),
        SemVer: a,
        re: n.re,
        src: n.src,
        tokens: n.t,
        SEMVER_SPEC_VERSION: o.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: o.RELEASE_TYPES,
        compareIdentifiers: i.compareIdentifiers,
        rcompareIdentifiers: i.rcompareIdentifiers,
      };
    },
    546738(e, t, r) {
      e.exports = {
        TimelineDataSeries: r(939796),
        TimelineGraphView: r(235002),
      };
    },
    939796(e) {
      e.exports = (function () {
        "use strict";
        function e() {
          (this.dataPoints_ = []),
            (this.color_ = "red"),
            (this.isVisible_ = !0),
            (this.cacheStartTime_ = null),
            (this.cacheStepSize_ = 0),
            (this.cacheValues_ = []);
        }
        function t(e, t) {
          (this.time = e), (this.value = t);
        }
        return (
          (e.prototype = {
            toJSON: function () {
              if (this.dataPoints_.length < 1) return {};
              for (var e = [], t = 0; t < this.dataPoints_.length; ++t)
                e.push(this.dataPoints_[t].value);
              return {
                startTime: this.dataPoints_[0].time,
                endTime: this.dataPoints_[this.dataPoints_.length - 1].time,
                values: JSON.stringify(e),
              };
            },
            addPoint: function (e, r) {
              var n = new Date(e);
              this.dataPoints_.push(new t(n, r)),
                this.dataPoints_.length > 1e3 && this.dataPoints_.shift();
            },
            setPoints: function (e) {
              let t = Math.max(0, e.length - 1e3);
              this.dataPoints_ = e.slice(t);
            },
            isVisible: function () {
              return this.isVisible_;
            },
            show: function (e) {
              this.isVisible_ = e;
            },
            getColor: function () {
              return this.color_;
            },
            setColor: function (e) {
              this.color_ = e;
            },
            getCount: function () {
              return this.dataPoints_.length;
            },
            getValues: function (e, t, r) {
              return (
                (this.cacheStartTime_ == e &&
                  this.cacheStepSize_ == t &&
                  this.cacheValues_.length == r) ||
                  ((this.cacheValues_ = this.getValuesInternal_(e, t, r)),
                  (this.cacheStartTime_ = e),
                  (this.cacheStepSize_ = t)),
                this.cacheValues_
              );
            },
            getValuesInternal_: function (e, t, r) {
              for (var n = [], o = 0, a = 0, i = e, s = 0; s < r; ++s) {
                for (
                  ;
                  o < this.dataPoints_.length && this.dataPoints_[o].time < i;

                )
                  (a = this.dataPoints_[o].value), ++o;
                (n[s] = a), (i += t);
              }
              return n;
            },
          }),
          e
        );
      })();
    },
    235002(e) {
      e.exports = (function () {
        "use strict";
        function e(e, t) {
          (this.scrollbar_ = { position_: 0, range_: 0 }),
            (this.devicePixelRatio = t || 1),
            (this.canvas_ = e),
            (e.width = parseInt(e.width, 10) * this.devicePixelRatio),
            (e.height = parseInt(e.height, 10) * this.devicePixelRatio),
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
        e.prototype = {
          setScale: function (e) {
            this.scale_ = e;
          },
          getLength_: function () {
            return Math.floor((this.endTime_ - this.startTime_) / this.scale_);
          },
          graphScrolledToRightEdge_: function () {
            return this.scrollbar_.position_ == this.scrollbar_.range_;
          },
          updateScrollbarRange_: function (e) {
            var t = this.getLength_() - this.canvas_.width;
            t < 0 && (t = 0),
              this.scrollbar_.position_ > t && (e = !0),
              (this.scrollbar_.range_ = t),
              e && ((this.scrollbar_.position_ = t), this.repaint());
          },
          setDateRange: function (e, t) {
            (this.startTime_ = e.getTime()),
              (this.endTime_ = t.getTime()),
              this.endTime_ <= this.startTime_ &&
                (this.startTime_ = this.endTime_ - 1),
              this.updateScrollbarRange_(!0);
          },
          updateEndDate: function (e) {
            (this.endTime_ = e || new Date().getTime()),
              this.updateScrollbarRange_(this.graphScrolledToRightEdge_());
          },
          getStartDate: function () {
            return new Date(this.startTime_);
          },
          setDataSeries: function (e) {
            this.graph_ = new t(this.devicePixelRatio);
            for (var r = 0; r < e.length; ++r) this.graph_.addDataSeries(e[r]);
            this.repaint();
          },
          addDataSeries: function (e) {
            this.graph_ || (this.graph_ = new t(this.devicePixelRatio)),
              this.graph_.addDataSeries(e),
              this.repaint();
          },
          repaint: function () {
            if (null !== this.canvas_.offsetParent) {
              this.repaintTimerRunning_ = !1;
              var e = this.canvas_.width,
                t = this.canvas_.height,
                r = this.canvas_.getContext("2d");
              if (
                ((r.fillStyle = this.backgroundColor),
                r.fillRect(0, 0, e, t),
                !(4 * this.fontSize > t) && !(e < 50))
              ) {
                r.save();
                var n = this.scrollbar_.position_;
                0 == this.scrollbar_.range_ && (n = this.getLength_() - e);
                var o = this.startTime_ + n * this.scale_,
                  a = t;
                (t -= Math.ceil(this.fontSize * this.devicePixelRatio) + 4),
                  this.drawTimeLabels(r, e, t, a, o),
                  (r.strokeStyle = this.gridColor),
                  (r.lineWidth = this.devicePixelRatio),
                  r.strokeRect(1, 1, e - 1, t - 1),
                  this.graph_ &&
                    (this.graph_.layout(
                      e,
                      t,
                      this.fontSize * this.devicePixelRatio,
                      o,
                      this.scale_,
                    ),
                    this.graph_.drawTicks(r),
                    this.graph_.drawLines(r),
                    this.graph_.drawLabels(r)),
                  r.restore();
              }
            }
          },
          drawTimeLabels: function (e, t, r, n, o) {
            var a = 6e4 * Math.ceil(o / 6e4);
            for (
              e.textBaseline = "bottom",
                e.textAlign = "center",
                e.fillStyle = this.textColor,
                e.strokeStyle = this.gridColor,
                e.lineWidth = this.devicePixelRatio,
                e.font = `${this.fontWeight} ${this.fontSize * this.devicePixelRatio}px ${this.fontFamily}`;
              ;

            ) {
              var i = Math.round((a - o) / this.scale_);
              if (i >= t) break;
              var s = new Date(a).toLocaleTimeString(
                this.timeLocales,
                this.timeOptions,
              );
              e.fillText(s, i, n),
                e.beginPath(),
                e.lineTo(i, 1),
                e.lineTo(i, r),
                e.stroke(),
                (a += 6e4);
            }
          },
          getDataSeriesCount: function () {
            return this.graph_ ? this.graph_.dataSeries_.length : 0;
          },
          hasDataSeries: function (e) {
            return !!this.graph_ && this.graph_.hasDataSeries(e);
          },
        };
        var t = (function () {
          function e(e) {
            (this.devicePixelRatio = e || 1),
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
            (e.prototype = {
              addDataSeries: function (e) {
                this.dataSeries_.push(e);
              },
              hasDataSeries: function (e) {
                for (var t = 0; t < this.dataSeries_.length; ++t)
                  if (this.dataSeries_[t] == e) return !0;
                return !1;
              },
              getValues: function (e) {
                return e.isVisible()
                  ? e.getValues(this.startTime_, this.scale_, this.width_)
                  : null;
              },
              layout: function (e, t, r, n, o) {
                (this.width_ = e),
                  (this.height_ = t),
                  (this.fontHeight_ = r),
                  (this.startTime_ = n),
                  (this.scale_ = o);
                for (
                  var a = 0, i = 0, s = 0;
                  s < this.dataSeries_.length;
                  ++s
                ) {
                  var c = this.getValues(this.dataSeries_[s]);
                  if (c)
                    for (var l = 0; l < c.length; ++l)
                      c[l] > a ? (a = c[l]) : c[l] < i && (i = c[l]);
                }
                this.layoutLabels_(i, a);
              },
              layoutLabels_: function (e, t) {
                if (t - e < 1024) return void this.layoutLabelsBasic_(e, t, 2);
                var r = ["", "k", "M", "G", "T", "P"],
                  n = 1;
                for (e /= 1024, t /= 1024; r[n + 1] && t - e >= 1024; )
                  (e /= 1024), (t /= 1024), ++n;
                this.layoutLabelsBasic_(e, t, 2);
                for (var o = 0; o < this.labels_.length; ++o)
                  this.labels_[o] += " " + r[n];
                (this.min_ *= Math.pow(1024, n)),
                  (this.max_ *= Math.pow(1024, n));
              },
              layoutLabelsBasic_: function (e, t, r) {
                this.labels_ = [];
                var n = t - e;
                if (0 == n) {
                  this.min_ = this.max_ = t;
                  return;
                }
                var o = 2 * this.fontHeight_ + 4,
                  a = 1 + this.height_ / o;
                a < 2 ? (a = 2) : a > 6 && (a = 6);
                for (
                  var i = Math.pow(10, -r), s = r;
                  !(Math.ceil(n / i) + 1 <= a);

                ) {
                  if (Math.ceil(n / (2 * i)) + 1 <= a) {
                    i *= 2;
                    break;
                  }
                  if (Math.ceil(n / (5 * i)) + 1 <= a) {
                    i *= 5;
                    break;
                  }
                  (i *= 10), s > 0 && --s;
                }
                (this.max_ = Math.ceil(t / i) * i),
                  (this.min_ = Math.floor(e / i) * i);
                for (var c = this.max_; c >= this.min_; c -= i)
                  this.labels_.push(c.toFixed(s));
              },
              drawTicks: function (e) {
                (t = this.width_ - 1),
                  (r = this.width_ - 1 - 10),
                  (e.fillStyle = this.gridColor),
                  (e.lineWidth = this.devicePixelRatio),
                  e.beginPath();
                for (var t, r, n = 1; n < this.labels_.length - 1; ++n) {
                  var o = Math.round(
                    (this.height_ * n) / (this.labels_.length - 1),
                  );
                  e.moveTo(t, o), e.lineTo(r, o);
                }
                e.stroke();
              },
              drawLines: function (e) {
                var t = 0,
                  r = this.height_ - 1;
                this.max_ && (t = r / (this.max_ - this.min_));
                for (var n = this.dataSeries_.length - 1; n >= 0; --n) {
                  var o = this.getValues(this.dataSeries_[n]);
                  if (o) {
                    (e.strokeStyle = this.dataSeries_[n].getColor()),
                      (e.lineWidth = this.devicePixelRatio),
                      e.beginPath();
                    for (var a = 0; a < o.length; ++a)
                      e.lineTo(a, r - Math.round((o[a] - this.min_) * t));
                    e.stroke();
                  }
                }
              },
              drawLabels: function (e) {
                if (0 != this.labels_.length) {
                  var t = this.width_ - 3;
                  (e.fillStyle = this.textColor),
                    (e.textAlign = "right"),
                    (e.textBaseline = "top"),
                    e.fillText(this.labels_[0], t, 0),
                    (e.textBaseline = "bottom");
                  for (
                    var r = (this.height_ - 1) / (this.labels_.length - 1),
                      n = 1;
                    n < this.labels_.length;
                    ++n
                  )
                    e.fillText(this.labels_[n], t, r * n);
                }
              },
            }),
            e
          );
        })();
        return e;
      })();
    },
    682465(e, t, r) {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(491301);
      function o(e) {
        var t = (function (e, t) {
          if ("object" != (0, n.A)(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t || "default");
            if ("object" != (0, n.A)(o)) return o;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == (0, n.A)(t) ? t : t + "";
      }
    },
    491301(e, t, r) {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      r.d(t, { A: () => n });
    },
    451076(e, t, r) {
      "use strict";
      function n() {
        return null;
      }
      r.d(t, { J: () => n });
    },
    882498(e, t, r) {
      "use strict";
      r.d(t, { i: () => o });
      let n = new URL(r(136089), r.b);
      function o() {
        return WebAssembly.compileStreaming(fetch(n));
      }
    },
    971673(e, t, r) {
      "use strict";
      let n;
      function o(e, t, r) {
        try {
          let i = n.__wbindgen_add_to_stack_pointer(-16),
            s = m(e, n.__wbindgen_export, n.__wbindgen_export2),
            c = M;
          n.parse(
            i,
            s,
            c,
            g(t) ? Number.MAX_SAFE_INTEGER : t >>> 0,
            g(r) ? Number.MAX_SAFE_INTEGER : r >>> 0,
          );
          var o = l().getInt32(i + 0, !0),
            a = l().getInt32(i + 4, !0);
          if (l().getInt32(i + 8, !0)) throw b(a);
          return b(o);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      function a(e, t, r) {
        try {
          let i = n.__wbindgen_add_to_stack_pointer(-16),
            s = m(e, n.__wbindgen_export, n.__wbindgen_export2),
            c = M;
          n.parseLossless(
            i,
            s,
            c,
            g(t) ? Number.MAX_SAFE_INTEGER : t >>> 0,
            g(r) ? Number.MAX_SAFE_INTEGER : r >>> 0,
          );
          var o = l().getInt32(i + 0, !0),
            a = l().getInt32(i + 4, !0);
          if (l().getInt32(i + 8, !0)) throw b(a);
          return b(o);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      function i() {
        return {
          __proto__: null,
          "./discord_markdown_wasm_bg.js": {
            __proto__: null,
            __wbg_Error_30c8987f7c2ed4e2: function (e, t) {
              return s(Error(w(e >>> 0, t)));
            },
            __wbg_Number_14af1003b8dd5ead: function (e) {
              return Number(d[e]);
            },
            __wbg_String_8564e559799eccda: function (e, t) {
              let r = m(
                  String(d[t]),
                  n.__wbindgen_export,
                  n.__wbindgen_export2,
                ),
                o = M;
              l().setInt32(e + 4, o, !0), l().setInt32(e + 0, r, !0);
            },
            __wbg___wbindgen_bigint_get_as_i64_a2383202b9353e4c: function (
              e,
              t,
            ) {
              let r = d[t],
                n = "bigint" == typeof r ? r : void 0;
              l().setBigInt64(e + 8, g(n) ? BigInt(0) : n, !0),
                l().setInt32(e + 0, !g(n), !0);
            },
            __wbg___wbindgen_boolean_get_5b446f51afd21013: function (e) {
              let t = d[e],
                r = "boolean" == typeof t ? t : void 0;
              return g(r) ? 0xffffff : +!!r;
            },
            __wbg___wbindgen_debug_string_4687d8d8c2017d52: function (e, t) {
              let r = m(
                  (function e(t) {
                    let r,
                      n = typeof t;
                    if ("number" == n || "boolean" == n || null == t)
                      return `${t}`;
                    if ("string" == n) return `"${t}"`;
                    if ("symbol" == n) {
                      let e = t.description;
                      return null == e ? "Symbol" : `Symbol(${e})`;
                    }
                    if ("function" == n) {
                      let e = t.name;
                      return "string" == typeof e && e.length > 0
                        ? `Function(${e})`
                        : "Function";
                    }
                    if (Array.isArray(t)) {
                      let r = t.length,
                        n = "[";
                      r > 0 && (n += e(t[0]));
                      for (let o = 1; o < r; o++) n += ", " + e(t[o]);
                      return n + "]";
                    }
                    let o = /\[object ([^\]]+)\]/.exec(toString.call(t));
                    if (!o || !(o.length > 1)) return toString.call(t);
                    if ("Object" == (r = o[1]))
                      try {
                        return "Object(" + JSON.stringify(t) + ")";
                      } catch (e) {
                        return "Object";
                      }
                    return t instanceof Error
                      ? `${t.name}: ${t.message}
${t.stack}`
                      : r;
                  })(d[t]),
                  n.__wbindgen_export,
                  n.__wbindgen_export2,
                ),
                o = M;
              l().setInt32(e + 4, o, !0), l().setInt32(e + 0, r, !0);
            },
            __wbg___wbindgen_in_92f62ee1427d9e49: function (e, t) {
              return d[e] in d[t];
            },
            __wbg___wbindgen_is_bigint_b123553bed3bb382: function (e) {
              return "bigint" == typeof d[e];
            },
            __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function (e) {
              return "function" == typeof d[e];
            },
            __wbg___wbindgen_is_object_3c45d4f2dde4e749: function (e) {
              let t = d[e];
              return "object" == typeof t && null !== t;
            },
            __wbg___wbindgen_is_string_90b56bc79aad6f6c: function (e) {
              return "string" == typeof d[e];
            },
            __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function (e) {
              return void 0 === d[e];
            },
            __wbg___wbindgen_jsval_eq_02babf21faa37971: function (e, t) {
              return d[e] === d[t];
            },
            __wbg___wbindgen_jsval_loose_eq_677f21e468d6b461: function (e, t) {
              return d[e] == d[t];
            },
            __wbg___wbindgen_number_get_2e0e7dee9f701a71: function (e, t) {
              let r = d[t],
                n = "number" == typeof r ? r : void 0;
              l().setFloat64(e + 8, g(n) ? 0 : n, !0),
                l().setInt32(e + 0, !g(n), !0);
            },
            __wbg___wbindgen_string_get_0380ccaa2f57f0d9: function (e, t) {
              let r = d[t],
                o = "string" == typeof r ? r : void 0;
              var a = g(o)
                  ? 0
                  : m(o, n.__wbindgen_export, n.__wbindgen_export2),
                i = M;
              l().setInt32(e + 4, i, !0), l().setInt32(e + 0, a, !0);
            },
            __wbg___wbindgen_throw_41e9ee4f547fc59a: function (e, t) {
              throw Error(w(e >>> 0, t));
            },
            __wbg_call_6137034ef55c9d0f: function () {
              return f(function (e, t) {
                return s(d[e].call(d[t]));
              }, arguments);
            },
            __wbg_done_b41a1d26cdb37fb6: function (e) {
              return d[e].done;
            },
            __wbg_entries_fb6397112b1de25f: function (e) {
              return s(Object.entries(d[e]));
            },
            __wbg_get_658f6698067d9515: function () {
              return f(function (e, t) {
                return s(Reflect.get(d[e], d[t]));
              }, arguments);
            },
            __wbg_get_6c896e0571ddae51: function (e, t) {
              return s(d[e][t >>> 0]);
            },
            __wbg_get_unchecked_288889d017702237: function (e, t) {
              return s(d[e][t >>> 0]);
            },
            __wbg_get_with_ref_key_6412cf3094599694: function (e, t) {
              return s(d[e][d[t]]);
            },
            __wbg_instanceof_ArrayBuffer_a99f175873e5d9b8: function (e) {
              let t;
              try {
                t = d[e] instanceof ArrayBuffer;
              } catch (e) {
                t = !1;
              }
              return t;
            },
            __wbg_instanceof_Map_b2611749102d7ba3: function (e) {
              let t;
              try {
                t = d[e] instanceof Map;
              } catch (e) {
                t = !1;
              }
              return t;
            },
            __wbg_instanceof_Uint8Array_828cef2aaacafc31: function (e) {
              let t;
              try {
                t = d[e] instanceof Uint8Array;
              } catch (e) {
                t = !1;
              }
              return t;
            },
            __wbg_isArray_e15a2ff68ffdbef2: function (e) {
              return Array.isArray(d[e]);
            },
            __wbg_isSafeInteger_717808ad6a54bd9e: function (e) {
              return Number.isSafeInteger(d[e]);
            },
            __wbg_iterator_e3c31c892080e444: function () {
              return s(Symbol.iterator);
            },
            __wbg_length_7f3c00c40364105e: function (e) {
              return d[e].length;
            },
            __wbg_length_d4bdea10311bd9cf: function (e) {
              return d[e].length;
            },
            __wbg_new_1dbf7428bba60a42: function (e) {
              return s(new Uint8Array(d[e]));
            },
            __wbg_new_28744009d011f847: function () {
              return s(new Map());
            },
            __wbg_new_617a8cdb8bb1130e: function () {
              return s({});
            },
            __wbg_new_ee2291f50781bf1d: function () {
              return s([]);
            },
            __wbg_next_33784799010f1bbe: function (e) {
              return s(d[e].next);
            },
            __wbg_next_f4aac29c42af995c: function () {
              return f(function (e) {
                return s(d[e].next());
              }, arguments);
            },
            __wbg_prototypesetcall_bc27214492979395: function (e, t, r) {
              var n, o;
              Uint8Array.prototype.set.call(
                ((n = e), (o = t), (n >>>= 0), h().subarray(n / 1, n / 1 + o)),
                d[r],
              );
            },
            __wbg_set_6ae97e73113c4f0b: function (e, t, r) {
              return s(d[e].set(d[t], d[r]));
            },
            __wbg_set_6be42768c690e380: function (e, t, r) {
              d[e][b(t)] = b(r);
            },
            __wbg_set_bea140a88be9b277: function (e, t, r) {
              d[e][t >>> 0] = b(r);
            },
            __wbg_value_f3c585ee8f5ba40c: function (e) {
              return s(d[e].value);
            },
            __wbindgen_generic_0000000000000001: function (e) {
              return s(e);
            },
            __wbindgen_generic_0000000000000002: function (e) {
              return s(e);
            },
            __wbindgen_generic_0000000000000003: function (e, t) {
              return s(w(e >>> 0, t));
            },
            __wbindgen_generic_0000000000000004: function (e) {
              return s(BigInt.asUintN(64, e));
            },
            __wbindgen_object_clone_ref: function (e) {
              return s(d[e]);
            },
            __wbindgen_object_drop_ref: function (e) {
              b(e);
            },
          },
        };
      }
      function s(e) {
        p === d.length && d.push(d.length + 1);
        let t = p;
        return (p = d[t]), (d[t] = e), t;
      }
      r.d(t, { Ay: () => S, IS: () => a, QR: () => R, qg: () => o });
      let c = null;
      function l() {
        return (
          (null === c ||
            !0 === c.buffer.detached ||
            (void 0 === c.buffer.detached && c.buffer !== n.memory.buffer)) &&
            (c = new DataView(n.memory.buffer)),
          c
        );
      }
      let u = null;
      function h() {
        return (
          (null === u || 0 === u.byteLength) &&
            (u = new Uint8Array(n.memory.buffer)),
          u
        );
      }
      function f(e, t) {
        try {
          return e.apply(this, t);
        } catch (e) {
          n.__wbindgen_export3(s(e));
        }
      }
      let d = Array(1024).fill(void 0);
      d.push(void 0, null, !0, !1);
      let p = d.length;
      function g(e) {
        return null == e;
      }
      function m(e, t, r) {
        if (void 0 === r) {
          let r = v.encode(e),
            n = t(r.length, 1) >>> 0;
          return (
            h()
              .subarray(n, n + r.length)
              .set(r),
            (M = r.length),
            n
          );
        }
        let n = e.length,
          o = t(n, 1) >>> 0,
          a = h(),
          i = 0;
        for (; i < n; i++) {
          let t = e.charCodeAt(i);
          if (t > 127) break;
          a[o + i] = t;
        }
        if (i !== n) {
          0 !== i && (e = e.slice(i)),
            (o = r(o, n, (n = i + 3 * e.length), 1) >>> 0);
          let t = h().subarray(o + i, o + n);
          (i += v.encodeInto(e, t).written), (o = r(o, n, i, 1) >>> 0);
        }
        return (M = i), o;
      }
      function b(e) {
        let t = d[e];
        return e < 1028 || ((d[e] = p), (p = e)), t;
      }
      let _ = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
      _.decode();
      let y = 0;
      function w(e, t) {
        return (
          (y += t) >= 0x7ff00000 &&
            ((_ = new TextDecoder("utf-8", {
              ignoreBOM: !0,
              fatal: !0,
            })).decode(),
            (y = t)),
          _.decode(h().subarray(e, e + t))
        );
      }
      let v = new TextEncoder();
      "encodeInto" in v ||
        (v.encodeInto = function (e, t) {
          let r = v.encode(e);
          return t.set(r), { read: e.length, written: r.length };
        });
      let M = 0;
      function x(e, t) {
        return (n = e.exports), (c = null), (u = null), n;
      }
      async function C(e, t) {
        if ("function" == typeof Response && e instanceof Response) {
          if (!e.ok)
            throw Error(
              `failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`,
            );
          if ("function" == typeof WebAssembly.instantiateStreaming)
            try {
              return await WebAssembly.instantiateStreaming(e, t);
            } catch (t) {
              if (
                (function (e) {
                  switch (e) {
                    case "basic":
                    case "cors":
                    case "default":
                      return !0;
                  }
                  return !1;
                })(e.type) &&
                "application/wasm" !== e.headers.get("Content-Type")
              )
                console.warn(
                  "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                  t,
                );
              else throw t;
            }
          let r = await e.arrayBuffer();
          return await WebAssembly.instantiate(r, t);
        }
        {
          let r = await WebAssembly.instantiate(e, t);
          return r instanceof WebAssembly.Instance
            ? { instance: r, module: e }
            : r;
        }
      }
      function R(e) {
        if (void 0 !== n) return n;
        void 0 !== e &&
          (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module: e } = e)
            : console.warn(
                "using deprecated parameters for `initSync()`; pass a single object instead",
              ));
        let t = i();
        return (
          e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)),
          x(new WebAssembly.Instance(e, t), e)
        );
      }
      async function S(e) {
        if (void 0 !== n) return n;
        void 0 !== e &&
          (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                "using deprecated parameters for the initialization function; pass a single object instead",
              )),
          void 0 === e && (e = new URL(r(136089), r.b));
        let t = i();
        ("string" == typeof e ||
          ("function" == typeof Request && e instanceof Request) ||
          ("function" == typeof URL && e instanceof URL)) &&
          (e = fetch(e));
        let { instance: o, module: a } = await C(await e, t);
        return x(o, a);
      }
    },
    630449(e, t, r) {
      "use strict";
      r.d(t, { KU: () => i, rm: () => a });
      var n = r(657829),
        o = r(75109);
      function a() {
        let e = (0, o.E)();
        return (0, n.h)(e).getIsolationScope();
      }
      function i() {
        let e;
        return ((e = (0, o.E)()), (0, n.h)(e).getCurrentScope()).getClient();
      }
    },
    680753(e, t, r) {
      "use strict";
      r.d(t, { qO: () => a });
      var n = r(83220),
        o = r(231577);
      function a(e, t = {}) {
        if (
          (t.user &&
            (!e.ipAddress &&
              t.user.ip_address &&
              (e.ipAddress = t.user.ip_address),
            e.did ||
              t.did ||
              (e.did = t.user.id || t.user.email || t.user.username)),
          (e.timestamp = t.timestamp || (0, n.zf)()),
          t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
          t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
          t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, o.eJ)()),
          void 0 !== t.init && (e.init = t.init),
          !e.did && t.did && (e.did = `${t.did}`),
          "number" == typeof t.started && (e.started = t.started),
          e.ignoreDuration)
        )
          e.duration = void 0;
        else if ("number" == typeof t.duration) e.duration = t.duration;
        else {
          let t = e.timestamp - e.started;
          e.duration = t >= 0 ? t : 0;
        }
        t.release && (e.release = t.release),
          t.environment && (e.environment = t.environment),
          !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
          !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
          "number" == typeof t.errors && (e.errors = t.errors),
          t.status && (e.status = t.status);
      }
    },
    875565(e, t, r) {
      "use strict";
      r.d(t, { Qd: () => o, Qg: () => a });
      let n = Object.prototype.toString;
      function o(e) {
        return "[object Object]" === n.call(e);
      }
      function a(e) {
        return !!(e && e.then && "function" == typeof e.then);
      }
    },
    272469(e, t, r) {
      "use strict";
      r.d(t, { pq: () => s, vF: () => c });
      var n = r(780755),
        o = r(978862);
      let a = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        i = {};
      function s(e) {
        if (!("console" in o.O)) return e();
        let t = o.O.console,
          r = {},
          n = Object.keys(i);
        n.forEach((e) => {
          let n = i[e];
          (r[e] = t[e]), (t[e] = n);
        });
        try {
          return e();
        } finally {
          n.forEach((e) => {
            t[e] = r[e];
          });
        }
      }
      let c = (0, o.B)("logger", function () {
        let e = !1,
          t = {
            enable: () => {
              e = !0;
            },
            disable: () => {
              e = !1;
            },
            isEnabled: () => e,
          };
        return (
          n.T
            ? a.forEach((r) => {
                t[r] = (...t) => {
                  e &&
                    s(() => {
                      o.O.console[r](`Sentry Logger [${r}]:`, ...t);
                    });
                };
              })
            : a.forEach((e) => {
                t[e] = () => void 0;
              }),
          t
        );
      });
    },
    231577(e, t, r) {
      "use strict";
      r.d(t, { eJ: () => o });
      var n = r(978862);
      function o() {
        let e = n.O,
          t = e.crypto || e.msCrypto,
          r = () => 16 * Math.random();
        try {
          if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
          t &&
            t.getRandomValues &&
            (r = () => {
              let e = new Uint8Array(1);
              return t.getRandomValues(e), e[0];
            });
        } catch (e) {}
        return "10000000100040008000100000000000".replace(/[018]/g, (e) =>
          (e ^ ((15 & r()) >> (e / 4))).toString(16),
        );
      }
    },
    690094(e, t, r) {
      "use strict";
      r.d(t, { my: () => a });
      var n = r(780755),
        o = r(272469);
      function a(e, t, r) {
        try {
          Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0,
          });
        } catch (r) {
          n.T &&
            o.vF.log(
              `Failed to add non-enumerable property "${t}" to object`,
              e,
            );
        }
      }
    },
    83220(e, t, r) {
      "use strict";
      r.d(t, { lu: () => o, zf: () => a });
      var n = r(978862);
      function o() {
        return Date.now() / 1e3;
      }
      let a = (function () {
        let { performance: e } = n.O;
        if (!e || !e.now) return o;
        let t = Date.now() - e.now(),
          r = void 0 == e.timeOrigin ? t : e.timeOrigin;
        return () => (r + e.now()) / 1e3;
      })();
      (() => {
        let { performance: e } = n.O;
        if (!e || !e.now) return;
        let t = e.now(),
          r = Date.now(),
          o = e.timeOrigin ? Math.abs(e.timeOrigin + t - r) : 36e5,
          a = e.timing && e.timing.navigationStart,
          i = "number" == typeof a ? Math.abs(a + t - r) : 36e5;
        if ((o < 36e5 || i < 36e5) && o <= i) return e.timeOrigin;
      })();
    },
    306327(e, t, r) {
      "use strict";
      let n;
      function o(e, t) {
        let r = e.length;
        Array.isArray(e[0]) || (e = [e]),
          Array.isArray(t[0]) || (t = t.map((e) => [e]));
        let n = t[0].length,
          o = t[0].map((e, r) => t.map((e) => e[r])),
          a = e.map((e) =>
            o.map((t) => {
              let r = 0;
              if (!Array.isArray(e)) {
                for (let n of t) r += e * n;
                return r;
              }
              for (let n = 0; n < e.length; n++) r += e[n] * (t[n] || 0);
              return r;
            }),
          );
        return (1 === r && (a = a[0]), 1 === n) ? a.map((e) => e[0]) : a;
      }
      function a(e) {
        return "string" === i(e);
      }
      function i(e) {
        return (
          Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1] ||
          ""
        ).toLowerCase();
      }
      function s(e, { precision: t, unit: r }) {
        return c(e) ? "none" : u(e, t) + (r ?? "");
      }
      function c(e) {
        return Number.isNaN(e) || (e instanceof Number && e?.none);
      }
      function l(e) {
        return c(e) ? 0 : e;
      }
      function u(e, t) {
        if (0 === e) return 0;
        let r = ~~e,
          n = 0;
        r && t && (n = ~~Math.log10(Math.abs(r)) + 1);
        let o = 10 ** (t - n);
        return Math.floor(e * o + 0.5) / o;
      }
      r.d(t, { A: () => rf });
      let h = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };
      function f(e) {
        if (!e) return;
        e = e.trim();
        let t = /^-?[\d.]+$/,
          r = /%|deg|g?rad|turn$/,
          n = e.match(/^([a-z]+)\((.+?)\)$/i);
        if (n) {
          let e = [];
          return (
            n[2].replace(
              /\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g,
              (n, o) => {
                let a = o.match(r),
                  i = o;
                if (a) {
                  let e = a[0],
                    t = i.slice(0, -e.length);
                  "%" === e
                    ? ((i = new Number(t / 100)).type = "<percentage>")
                    : (((i = new Number(t * h[e])).type = "<angle>"),
                      (i.unit = e));
                } else
                  t.test(i)
                    ? ((i = new Number(i)).type = "<number>")
                    : "none" === i && ((i = new Number(NaN)).none = !0);
                n.startsWith("/") &&
                  ((i = i instanceof Number ? i : new Number(i)).alpha = !0),
                  "object" == typeof i && i instanceof Number && (i.raw = o),
                  e.push(i);
              },
            ),
            { name: n[1].toLowerCase(), rawName: n[1], rawArgs: n[2], args: e }
          );
        }
      }
      function d(e) {
        return e[e.length - 1];
      }
      function p(e, t, r) {
        return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
      }
      function g(e, t, r) {
        return (r - e) / (t - e);
      }
      function m(e, t, r) {
        return p(t[0], t[1], g(e[0], e[1], r));
      }
      function b(e) {
        return e.map((e) =>
          e.split("|").map((e) => {
            let t = (e = e.trim()).match(
              /^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/,
            );
            if (t) {
              let e = new String(t[1]);
              return (e.range = [+t[2], +t[3]]), e;
            }
            return e;
          }),
        );
      }
      function _(e, t, r) {
        return Math.max(Math.min(r, t), e);
      }
      function y(e, t) {
        return Math.sign(e) === Math.sign(t) ? e : -e;
      }
      function w(e, t) {
        return y(Math.abs(e) ** t, e);
      }
      function v(e, t) {
        return 0 === t ? 0 : e / t;
      }
      function M(e, t, r = 0, n = e.length) {
        for (; r < n; ) {
          let o = (r + n) >> 1;
          e[o] < t ? (r = o + 1) : (n = o);
        }
        return r;
      }
      var x = Object.freeze({
        __proto__: null,
        bisectLeft: M,
        clamp: _,
        copySign: y,
        interpolate: p,
        interpolateInv: g,
        isNone: c,
        isString: a,
        last: d,
        mapRange: m,
        multiplyMatrices: o,
        parseCoordGrammar: b,
        parseFunction: f,
        serializeNumber: s,
        skipNone: l,
        spow: w,
        toPrecision: u,
        type: i,
        zdiv: v,
      });
      let C = new (class {
        add(e, t, r) {
          if ("string" != typeof arguments[0]) {
            for (var e in arguments[0])
              this.add(e, arguments[0][e], arguments[1]);
            return;
          }
          (Array.isArray(e) ? e : [e]).forEach(function (e) {
            (this[e] = this[e] || []), t && this[e][r ? "unshift" : "push"](t);
          }, this);
        }
        run(e, t) {
          (this[e] = this[e] || []),
            this[e].forEach(function (e) {
              e.call(t && t.context ? t.context : t, t);
            });
        }
      })();
      var R = {
        gamut_mapping: "css",
        precision: 5,
        deltaE: "76",
        verbose: globalThis?.process?.env?.NODE_ENV?.toLowerCase() !== "test",
        warn: function (e) {
          this.verbose && globalThis?.console?.warn?.(e);
        },
      };
      let S = {
        D50: [0.3457 / 0.3585, 1, 0.8251046025104602],
        D65: [0.3127 / 0.329, 1, 1.0890577507598784],
      };
      function E(e) {
        return Array.isArray(e) ? e : S[e];
      }
      function A(e, t, r, n = {}) {
        if (((e = E(e)), (t = E(t)), !e || !t))
          throw TypeError(
            `Missing white point to convert ${!e ? "from" : ""}${!e && !t ? "/" : ""}${!t ? "to" : ""}`,
          );
        if (e === t) return r;
        let a = { W1: e, W2: t, XYZ: r, options: n };
        if (
          (C.run("chromatic-adaptation-start", a),
          a.M ||
            (a.W1 === S.D65 && a.W2 === S.D50
              ? (a.M = [
                  [
                    1.0479297925449969, 0.022946870601609652,
                    -0.05019226628920524,
                  ],
                  [
                    0.02962780877005599, 0.9904344267538799,
                    -0.017073799063418826,
                  ],
                  [
                    -0.009243040646204504, 0.015055191490298152,
                    0.7518742814281371,
                  ],
                ])
              : a.W1 === S.D50 &&
                a.W2 === S.D65 &&
                (a.M = [
                  [
                    0.955473421488075, -0.02309845494876471,
                    0.06325924320057072,
                  ],
                  [
                    -0.0283697093338637, 1.0099953980813041,
                    0.021041441191917323,
                  ],
                  [
                    0.012314014864481998, -0.020507649298898964,
                    1.330365926242124,
                  ],
                ])),
          C.run("chromatic-adaptation-end", a),
          a.M)
        )
          return o(a.M, a.XYZ);
        throw TypeError(
          "Only Bradford CAT with white points D50 and D65 supported for now.",
        );
      }
      let I = new Set(["<number>", "<percentage>", "<angle>"]);
      function T(e, t, r, n) {
        return Object.entries(e.coords).map(([e, o], a) => {
          let i,
            s = t.coordGrammar[a],
            c = n[a],
            l = c?.type;
          if (!(i = c.none ? s.find((e) => I.has(e)) : s.find((e) => e == l))) {
            let t = o.name || e;
            throw TypeError(`${l ?? c.raw} not allowed for ${t} in ${r}()`);
          }
          let u = i.range;
          "<percentage>" === l && (u ||= [0, 1]);
          let h = o.range || o.refRange;
          return u && h && (n[a] = m(u, h, n[a])), i;
        });
      }
      function k(e, { meta: t } = {}) {
        let r = { str: String(e)?.trim() };
        if ((C.run("parse-start", r), r.color)) return r.color;
        if (((r.parsed = f(r.str)), r.parsed)) {
          let e = r.parsed.name;
          if ("color" === e) {
            let e = r.parsed.args.shift(),
              n = e.startsWith("--") ? e.substring(2) : `--${e}`,
              o = [e, n],
              a = r.parsed.rawArgs.indexOf("/") > 0 ? r.parsed.args.pop() : 1;
            for (let n of N.all) {
              let i = n.getFormat("color");
              if (
                i &&
                (o.includes(i.id) || i.ids?.filter((e) => o.includes(e)).length)
              ) {
                let o,
                  s = Object.keys(n.coords).map(
                    (e, t) => r.parsed.args[t] || 0,
                  );
                return (
                  i.coordGrammar && (o = T(n, i, "color", s)),
                  t && Object.assign(t, { formatId: "color", types: o }),
                  i.id.startsWith("--") &&
                    !e.startsWith("--") &&
                    R.warn(
                      `${n.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${i.id}) instead of color(${e}).`,
                    ),
                  e.startsWith("--") &&
                    !i.id.startsWith("--") &&
                    R.warn(
                      `${n.name} is a standard space and supported in the CSS spec. Use color(${i.id}) instead of prefixed color(${e}).`,
                    ),
                  { spaceId: n.id, coords: s, alpha: a }
                );
              }
            }
            let i = "",
              s = e in N.registry ? e : n;
            if (s in N.registry) {
              let e = N.registry[s].formats?.color?.id;
              e && (i = `Did you mean color(${e})?`);
            }
            throw TypeError(
              `Cannot parse color(${e}). ` + (i || "Missing a plugin?"),
            );
          }
          for (let n of N.all) {
            let o = n.getFormat(e);
            if (o && "function" === o.type) {
              let a,
                i = 1;
              (o.lastAlpha || d(r.parsed.args).alpha) &&
                (i = r.parsed.args.pop());
              let s = r.parsed.args;
              return (
                o.coordGrammar && (a = T(n, o, e, s)),
                t && Object.assign(t, { formatId: o.name, types: a }),
                { spaceId: n.id, coords: s, alpha: i }
              );
            }
          }
        } else
          for (let e of N.all)
            for (let n in e.formats) {
              let o = e.formats[n];
              if ("custom" !== o.type || (o.test && !o.test(r.str))) continue;
              let a = o.parse(r.str);
              if (a) return (a.alpha ??= 1), t && (t.formatId = n), a;
            }
        throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
      }
      function P(e) {
        if (Array.isArray(e)) return e.map(P);
        if (!e) throw TypeError("Empty color reference");
        a(e) && (e = k(e));
        let t = e.space || e.spaceId;
        return (
          t instanceof N || (e.space = N.get(t)),
          void 0 === e.alpha && (e.alpha = 1),
          e
        );
      }
      class N {
        constructor(e) {
          (this.id = e.id),
            (this.name = e.name),
            (this.base = e.base ? N.get(e.base) : null),
            (this.aliases = e.aliases),
            this.base &&
              ((this.fromBase = e.fromBase), (this.toBase = e.toBase));
          let t = e.coords ?? this.base.coords;
          for (let e in t) "name" in t[e] || (t[e].name = e);
          this.coords = t;
          let r = e.white ?? this.base.white ?? "D65";
          for (let t in ((this.white = E(r)),
          (this.formats = e.formats ?? {}),
          this.formats)) {
            let e = this.formats[t];
            (e.type ||= "function"), (e.name ||= t);
          }
          this.formats.color?.id ||
            (this.formats.color = {
              ...(this.formats.color ?? {}),
              id: e.cssId || this.id,
            }),
            e.gamutSpace
              ? (this.gamutSpace =
                  "self" === e.gamutSpace ? this : N.get(e.gamutSpace))
              : this.isPolar
                ? (this.gamutSpace = this.base)
                : (this.gamutSpace = this),
            this.gamutSpace.isUnbounded && (this.inGamut = (e, t) => !0),
            (this.referred = e.referred),
            Object.defineProperty(this, "path", {
              value: (function (e) {
                let t = [e];
                for (let r = e; (r = r.base); ) t.push(r);
                return t;
              })(this).reverse(),
              writable: !1,
              enumerable: !0,
              configurable: !0,
            }),
            C.run("colorspace-init-end", this);
        }
        inGamut(e, { epsilon: t = 75e-6 } = {}) {
          if (!this.equals(this.gamutSpace))
            return (
              (e = this.to(this.gamutSpace, e)),
              this.gamutSpace.inGamut(e, { epsilon: t })
            );
          let r = Object.values(this.coords);
          return e.every((e, n) => {
            let o = r[n];
            if ("angle" !== o.type && o.range) {
              if (Number.isNaN(e)) return !0;
              let [r, n] = o.range;
              return (
                (void 0 === r || e >= r - t) && (void 0 === n || e <= n + t)
              );
            }
            return !0;
          });
        }
        get isUnbounded() {
          return Object.values(this.coords).every((e) => !("range" in e));
        }
        get cssId() {
          return this.formats?.color?.id || this.id;
        }
        get isPolar() {
          for (let e in this.coords)
            if ("angle" === this.coords[e].type) return !0;
          return !1;
        }
        getFormat(e) {
          let t;
          return "object" == typeof e
            ? (e = B(e, this))
            : (t =
                  "default" === e
                    ? Object.values(this.formats)[0]
                    : this.formats[e])
              ? (t = B(t, this))
              : null;
        }
        equals(e) {
          return !!e && (this === e || this.id === e || this.id === e.id);
        }
        to(e, t) {
          let r, n;
          if (1 == arguments.length) {
            let r = P(e);
            [e, t] = [r.space, r.coords];
          }
          if (((e = N.get(e)), this.equals(e))) return t;
          t = t.map((e) => (Number.isNaN(e) ? 0 : e));
          let o = this.path,
            a = e.path;
          for (let e = 0; e < o.length; e++)
            if (o[e].equals(a[e])) (r = o[e]), (n = e);
            else break;
          if (!r)
            throw Error(
              `Cannot convert between color spaces ${this} and ${e}: no connection space was found`,
            );
          for (let e = o.length - 1; e > n; e--) t = o[e].toBase(t);
          for (let e = n + 1; e < a.length; e++) t = a[e].fromBase(t);
          return t;
        }
        from(e, t) {
          if (1 == arguments.length) {
            let r = P(e);
            [e, t] = [r.space, r.coords];
          }
          return (e = N.get(e)).to(this, t);
        }
        toString() {
          return `${this.name} (${this.id})`;
        }
        getMinCoords() {
          let e = [];
          for (let t in this.coords) {
            let r = this.coords[t],
              n = r.range || r.refRange;
            e.push(n?.min ?? 0);
          }
          return e;
        }
        static registry = {};
        static get all() {
          return [...new Set(Object.values(N.registry))];
        }
        static register(e, t) {
          if (
            (1 == arguments.length && ((t = arguments[0]), (e = t.id)),
            (t = this.get(t)),
            this.registry[e] && this.registry[e] !== t)
          )
            throw Error(`Duplicate color space registration: '${e}'`);
          if (((this.registry[e] = t), 1 == arguments.length && t.aliases))
            for (let e of t.aliases) this.register(e, t);
          return t;
        }
        static get(e, ...t) {
          if (!e || e instanceof N) return e;
          if ("string" === i(e)) {
            let t = N.registry[e.toLowerCase()];
            if (!t) throw TypeError(`No color space found with id = "${e}"`);
            return t;
          }
          if (t.length) return N.get(...t);
          throw TypeError(`${e} is not a valid color space`);
        }
        static resolveCoord(e, t) {
          let r,
            n,
            o = i(e);
          if (
            ("string" === o
              ? e.includes(".")
                ? ([r, n] = e.split("."))
                : ([r, n] = [, e])
              : Array.isArray(e)
                ? ([r, n] = e)
                : ((r = e.space), (n = e.coordId)),
            (r = N.get(r)) || (r = t),
            !r)
          )
            throw TypeError(
              `Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`,
            );
          if ("number" === (o = i(n)) || ("string" === o && n >= 0)) {
            let e = Object.entries(r.coords)[n];
            if (e) return { space: r, id: e[0], index: n, ...e[1] };
          }
          r = N.get(r);
          let a = n.toLowerCase(),
            s = 0;
          for (let e in r.coords) {
            let t = r.coords[e];
            if (e.toLowerCase() === a || t.name?.toLowerCase() === a)
              return { space: r, id: e, index: s, ...t };
            s++;
          }
          throw TypeError(
            `No "${n}" coordinate found in ${r.name}. Its coordinates are: ${Object.keys(r.coords).join(", ")}`,
          );
        }
        static DEFAULT_FORMAT = { type: "functions", name: "color" };
      }
      function B(e, { coords: t } = {}) {
        if (e.coords && !e.coordGrammar) {
          (e.type ||= "function"),
            (e.name ||= "color"),
            (e.coordGrammar = b(e.coords));
          let r = Object.entries(t).map(([t, r], n) => {
            let o = e.coordGrammar[n][0],
              a = r.range || r.refRange,
              i = o.range,
              s = "";
            return (
              "<percentage>" == o
                ? ((i = [0, 100]), (s = "%"))
                : "<angle>" == o && (s = "deg"),
              { fromRange: a, toRange: i, suffix: s }
            );
          });
          e.serializeCoords = (e, t) =>
            e.map((e, n) => {
              let { fromRange: o, toRange: a, suffix: i } = r[n];
              return (
                o && a && (e = m(o, a, e)),
                (e = s(e, { precision: t, unit: i }))
              );
            });
        }
        return e;
      }
      var j = new N({
        id: "xyz-d65",
        name: "XYZ D65",
        coords: { x: { name: "X" }, y: { name: "Y" }, z: { name: "Z" } },
        white: "D65",
        formats: { color: { ids: ["xyz-d65", "xyz"] } },
        aliases: ["xyz"],
      });
      class O extends N {
        constructor(e) {
          e.coords ||
            (e.coords = {
              r: { range: [0, 1], name: "Red" },
              g: { range: [0, 1], name: "Green" },
              b: { range: [0, 1], name: "Blue" },
            }),
            e.base || (e.base = j),
            e.toXYZ_M &&
              e.fromXYZ_M &&
              ((e.toBase ??= (t) => {
                let r = o(e.toXYZ_M, t);
                return (
                  this.white !== this.base.white &&
                    (r = A(this.white, this.base.white, r)),
                  r
                );
              }),
              (e.fromBase ??= (t) => (
                (t = A(this.base.white, this.white, t)), o(e.fromXYZ_M, t)
              ))),
            (e.referred ??= "display"),
            super(e);
        }
      }
      function L(e, t) {
        return ((e = P(e)), !t || e.space.equals(t))
          ? e.coords.slice()
          : (t = N.get(t)).from(e);
      }
      function z(e, t) {
        e = P(e);
        let { space: r, index: n } = N.resolveCoord(t, e.space);
        return L(e, r)[n];
      }
      function D(e, t, r) {
        return (e = P(e)), (t = N.get(t)), (e.coords = t.to(e.space, r)), e;
      }
      function $(e, t, r) {
        if (
          ((e = P(e)), 2 == arguments.length && "object" === i(arguments[1]))
        ) {
          let t = arguments[1];
          for (let r in t) $(e, r, t[r]);
        } else {
          "function" == typeof r && (r = r(z(e, t)));
          let { space: n, index: o } = N.resolveCoord(t, e.space),
            a = L(e, n);
          (a[o] = r), D(e, n, a);
        }
        return e;
      }
      (D.returns = "color"), ($.returns = "color");
      var U = new N({
        id: "xyz-d50",
        name: "XYZ D50",
        white: "D50",
        base: j,
        fromBase: (e) => A(j.white, "D50", e),
        toBase: (e) => A("D50", j.white, e),
      });
      let q = 216 / 24389,
        W = 24 / 116,
        F = 24389 / 27,
        H = S.D50;
      var G = new N({
        id: "lab",
        name: "Lab",
        coords: {
          l: { refRange: [0, 100], name: "Lightness" },
          a: { refRange: [-125, 125] },
          b: { refRange: [-125, 125] },
        },
        white: H,
        base: U,
        fromBase(e) {
          let t = e
            .map((e, t) => e / H[t])
            .map((e) => (e > q ? Math.cbrt(e) : (F * e + 16) / 116));
          return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
        },
        toBase(e) {
          let t = [];
          return (
            (t[1] = (e[0] + 16) / 116),
            (t[0] = e[1] / 500 + t[1]),
            (t[2] = t[1] - e[2] / 200),
            [
              t[0] > W ? Math.pow(t[0], 3) : (116 * t[0] - 16) / F,
              e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / F,
              t[2] > W ? Math.pow(t[2], 3) : (116 * t[2] - 16) / F,
            ].map((e, t) => e * H[t])
          );
        },
        formats: {
          lab: {
            coords: [
              "<number> | <percentage>",
              "<number> | <percentage>[-1,1]",
              "<number> | <percentage>[-1,1]",
            ],
          },
        },
      });
      function V(e) {
        return ((e % 360) + 360) % 360;
      }
      var J = new N({
        id: "lch",
        name: "LCH",
        coords: {
          l: { refRange: [0, 100], name: "Lightness" },
          c: { refRange: [0, 150], name: "Chroma" },
          h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: G,
        fromBase(e) {
          let t,
            [r, n, o] = e;
          return (
            (t =
              0.02 > Math.abs(n) && 0.02 > Math.abs(o)
                ? NaN
                : (180 * Math.atan2(o, n)) / Math.PI),
            [r, Math.sqrt(n ** 2 + o ** 2), V(t)]
          );
        },
        toBase(e) {
          let [t, r, n] = e;
          return (
            r < 0 && (r = 0),
            isNaN(n) && (n = 0),
            [
              t,
              r * Math.cos((n * Math.PI) / 180),
              r * Math.sin((n * Math.PI) / 180),
            ]
          );
        },
        formats: {
          lch: {
            coords: [
              "<number> | <percentage>",
              "<number> | <percentage>",
              "<number> | <angle>",
            ],
          },
        },
      });
      let X = Math.PI,
        Y = 180 / X,
        Z = X / 180;
      function Q(e) {
        let t = e * e;
        return t * t * t * e;
      }
      function K(e, t, { kL: r = 1, kC: n = 1, kH: o = 1 } = {}) {
        let a, i;
        [e, t] = P([e, t]);
        let [s, c, l] = G.from(e),
          u = J.from(G, [s, c, l])[1],
          [h, f, d] = G.from(t),
          p = J.from(G, [h, f, d])[1];
        u < 0 && (u = 0), p < 0 && (p = 0);
        let g = Q((u + p) / 2),
          m = 0.5 * (1 - Math.sqrt(g / (g + 0x16bcc41e9))),
          b = (1 + m) * c,
          _ = (1 + m) * f,
          y = Math.sqrt(b ** 2 + l ** 2),
          w = Math.sqrt(_ ** 2 + d ** 2),
          v = 0 === b && 0 === l ? 0 : Math.atan2(l, b),
          M = 0 === _ && 0 === d ? 0 : Math.atan2(d, _);
        v < 0 && (v += 2 * X), M < 0 && (M += 2 * X), (v *= Y);
        let x = h - s,
          C = w - y,
          S = (M *= Y) - v,
          E = v + M,
          A = Math.abs(S);
        y * w == 0
          ? (a = 0)
          : A <= 180
            ? (a = S)
            : S > 180
              ? (a = S - 360)
              : S < -180
                ? (a = S + 360)
                : R.warn("the unthinkable has happened");
        let I = 2 * Math.sqrt(w * y) * Math.sin((a * Z) / 2),
          T = (s + h) / 2,
          k = (y + w) / 2,
          N = Q(k),
          B = (T - 50) ** 2,
          j = 1 + (0.015 * B) / Math.sqrt(20 + B),
          O = 1 + 0.045 * k,
          L =
            1 +
            0.015 *
              k *
              (1 -
                0.17 *
                  Math.cos(
                    ((i =
                      y * w == 0
                        ? E
                        : A <= 180
                          ? E / 2
                          : E < 360
                            ? (E + 360) / 2
                            : (E - 360) / 2) -
                      30) *
                      Z,
                  ) +
                0.24 * Math.cos(2 * i * Z) +
                0.32 * Math.cos((3 * i + 6) * Z) -
                0.2 * Math.cos((4 * i - 63) * Z)),
          z = (x / (r * j)) ** 2;
        return Math.sqrt(
          (z +=
            (C / (n * O)) ** 2 +
            (I / (o * L)) ** 2 +
            (C / (n * O)) *
              (-1 *
                Math.sin(2 * (30 * Math.exp(-1 * ((i - 275) / 25) ** 2)) * Z) *
                (2 * Math.sqrt(N / (N + 0x16bcc41e9)))) *
              (I / (o * L))),
        );
      }
      let ee = [
          [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
          [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
          [0.0481771893596242, 0.2642395317527308, 0.6335478284694309],
        ],
        et = [
          [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
          [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
          [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816],
        ],
        er = [
          [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
          [1.9779985324311684, -2.42859224204858, 0.450593709617411],
          [0.0259040424655478, 0.7827717124575296, -0.8086757549230774],
        ],
        en = [
          [1, 0.3963377773761749, 0.2158037573099136],
          [1, -0.1055613458156586, -0.0638541728258133],
          [1, -0.0894841775298119, -1.2914855480194092],
        ];
      var eo = new N({
        id: "oklab",
        name: "Oklab",
        coords: {
          l: { refRange: [0, 1], name: "Lightness" },
          a: { refRange: [-0.4, 0.4] },
          b: { refRange: [-0.4, 0.4] },
        },
        white: "D65",
        base: j,
        fromBase(e) {
          let t = o(ee, e).map((e) => Math.cbrt(e));
          return o(er, t);
        },
        toBase(e) {
          let t = o(en, e).map((e) => e ** 3);
          return o(et, t);
        },
        formats: {
          oklab: {
            coords: [
              "<percentage> | <number>",
              "<number> | <percentage>[-1,1]",
              "<number> | <percentage>[-1,1]",
            ],
          },
        },
      });
      function ea(e, t) {
        [e, t] = P([e, t]);
        let [r, n, o] = eo.from(e),
          [a, i, s] = eo.from(t);
        return Math.sqrt((r - a) ** 2 + (n - i) ** 2 + (o - s) ** 2);
      }
      function ei(e, t, { epsilon: r = 75e-6 } = {}) {
        (e = P(e)), t || (t = e.space), (t = N.get(t));
        let n = e.coords;
        return t !== e.space && (n = t.from(e)), t.inGamut(n, { epsilon: r });
      }
      function es(e) {
        return { space: e.space, coords: e.coords.slice(), alpha: e.alpha };
      }
      function ec(e, t, r = "lab") {
        let n = (r = N.get(r)).from(e),
          o = r.from(t);
        return Math.sqrt(
          n.reduce((e, t, r) => {
            let n = o[r];
            return isNaN(t) || isNaN(n) ? e : e + (n - t) ** 2;
          }, 0),
        );
      }
      let el = Math.PI / 180;
      var eu = new N({
        id: "xyz-abs-d65",
        cssId: "--xyz-abs-d65",
        name: "Absolute XYZ D65",
        coords: {
          x: { refRange: [0, 9504.7], name: "Xa" },
          y: { refRange: [0, 1e4], name: "Ya" },
          z: { refRange: [0, 10888.3], name: "Za" },
        },
        base: j,
        fromBase: (e) => e.map((e) => Math.max(203 * e, 0)),
        toBase: (e) => e.map((e) => Math.max(e / 203, 0)),
      });
      let eh = 2610 / 16384,
        ef = 16384 / 2610,
        ed = (1.7 * 2523) / 32,
        ep = 32 / (1.7 * 2523),
        eg = [
          [0.41478972, 0.579999, 0.014648],
          [-0.20151, 1.120649, 0.0531008],
          [-0.0166008, 0.2648, 0.6684799],
        ],
        em = [
          [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
          [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
          [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603],
        ],
        eb = [
          [0.5, 0.5, 0],
          [3.524, -4.066708, 0.542708],
          [0.199076, 1.096799, -1.295875],
        ],
        e_ = [
          [1, 0.1386050432715393, 0.05804731615611886],
          [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
          [0.9999999999999998, -0.09601924202631895, -0.8118918960560388],
        ];
      var ey = new N({
          id: "jzazbz",
          name: "Jzazbz",
          coords: {
            jz: { refRange: [0, 1], name: "Jz" },
            az: { refRange: [-0.5, 0.5] },
            bz: { refRange: [-0.5, 0.5] },
          },
          base: eu,
          fromBase(e) {
            let [t, r, n] = e,
              a = o(eg, [
                1.15 * t - (1.15 - 1) * n,
                0.66 * r - (0.66 - 1) * t,
                n,
              ]).map(function (e) {
                return (
                  ((0.8359375 + 18.8515625 * (e / 1e4) ** eh) /
                    (1 + 18.6875 * (e / 1e4) ** eh)) **
                  ed
                );
              }),
              [i, s, c] = o(eb, a);
            return [
              (0.43999999999999995 * i) / (1 + -0.56 * i) -
                16295499532821565e-27,
              s,
              c,
            ];
          },
          toBase(e) {
            let [t, r, n] = e,
              a = o(e_, [
                (t + 16295499532821565e-27) /
                  (0.43999999999999995 - -0.56 * (t + 16295499532821565e-27)),
                r,
                n,
              ]).map(function (e) {
                return (
                  1e4 *
                  ((0.8359375 - e ** ep) / (18.6875 * e ** ep - 18.8515625)) **
                    ef
                );
              }),
              [i, s, c] = o(em, a),
              l = (i + (1.15 - 1) * c) / 1.15;
            return [l, (s + (0.66 - 1) * l) / 0.66, c];
          },
          formats: {
            color: {
              coords: [
                "<number> | <percentage>",
                "<number> | <percentage>[-1,1]",
                "<number> | <percentage>[-1,1]",
              ],
            },
          },
        }),
        ew = new N({
          id: "jzczhz",
          name: "JzCzHz",
          coords: {
            jz: { refRange: [0, 1], name: "Jz" },
            cz: { refRange: [0, 1], name: "Chroma" },
            hz: { refRange: [0, 360], type: "angle", name: "Hue" },
          },
          base: ey,
          fromBase(e) {
            let t,
              [r, n, o] = e;
            return (
              (t =
                2e-4 > Math.abs(n) && 2e-4 > Math.abs(o)
                  ? NaN
                  : (180 * Math.atan2(o, n)) / Math.PI),
              [r, Math.sqrt(n ** 2 + o ** 2), V(t)]
            );
          },
          toBase: (e) => [
            e[0],
            e[1] * Math.cos((e[2] * Math.PI) / 180),
            e[1] * Math.sin((e[2] * Math.PI) / 180),
          ],
        });
      let ev = 2413 / 128,
        eM = 2610 / 16384,
        ex = 2523 / 32,
        eC = 16384 / 2610,
        eR = 32 / 2523,
        eS = [
          [0.3592832590121217, 0.6976051147779502, -0.035891593232029],
          [-0.1920808463704993, 1.100476797037432, 0.0753748658519118],
          [0.0070797844607479, 0.0748396662186362, 0.8433265453898765],
        ],
        eE = [
          [0.5, 0.5, 0],
          [6610 / 4096, -13613 / 4096, 7003 / 4096],
          [17933 / 4096, -17390 / 4096, -543 / 4096],
        ],
        eA = [
          [0.9999999999999998, 0.0086090370379328, 0.111029625003026],
          [0.9999999999999998, -0.0086090370379328, -0.1110296250030259],
          [0.9999999999999998, 0.5600313357106791, -0.3206271749873188],
        ],
        eI = [
          [2.0701522183894223, -1.3263473389671563, 0.2066510476294053],
          [0.3647385209748072, 0.6805660249472273, -0.0453045459220347],
          [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042],
        ];
      var eT = new N({
        id: "ictcp",
        name: "ICTCP",
        coords: {
          i: { refRange: [0, 1], name: "I" },
          ct: { refRange: [-0.5, 0.5], name: "CT" },
          cp: { refRange: [-0.5, 0.5], name: "CP" },
        },
        base: eu,
        fromBase: (e) => {
          var t;
          return (
            (t = o(eS, e)),
            o(
              eE,
              t.map(function (e) {
                return (
                  ((0.8359375 + ev * (e / 1e4) ** eM) /
                    (1 + 18.6875 * (e / 1e4) ** eM)) **
                  ex
                );
              }),
            )
          );
        },
        toBase: (e) =>
          o(
            eI,
            o(eA, e).map(function (e) {
              let t = Math.max(e ** eR - 0.8359375, 0);
              return 1e4 * (t / (ev - 18.6875 * e ** eR)) ** eC;
            }),
          ),
      });
      let ek = S.D65,
        eP = 2 * Math.PI,
        eN = [
          [0.401288, 0.650173, -0.051461],
          [-0.250268, 1.204414, 0.045854],
          [-0.002079, 0.048952, 0.953127],
        ],
        eB = [
          [1.8620678550872327, -1.0112546305316843, 0.14918677544445175],
          [0.38752654323613717, 0.6214474419314753, -0.008973985167612518],
          [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496],
        ],
        ej = [
          [460, 451, 288],
          [460, -891, -261],
          [460, -220, -6300],
        ],
        eO = {
          dark: [0.8, 0.525, 0.8],
          dim: [0.9, 0.59, 0.9],
          average: [1, 0.69, 1],
        },
        eL = [20.14, 90, 164.25, 237.53, 380.14],
        ez = [0.8, 0.7, 1, 1.2, 0.8],
        eD = [0, 100, 200, 300, 400],
        e$ = 180 / Math.PI,
        eU = Math.PI / 180;
      function eq(e, t) {
        return e.map((e) => {
          let r = w(t * Math.abs(e) * 0.01, 0.42);
          return (400 * y(r, e)) / (r + 27.13);
        });
      }
      function eW(e, t, r, n, a) {
        let i = {};
        (i.discounting = a), (i.refWhite = e), (i.surround = n);
        let s = e.map((e) => 100 * e);
        (i.la = t), (i.yb = r);
        let c = s[1],
          l = o(eN, s),
          u = (n = eO[i.surround])[0];
        (i.c = n[1]), (i.nc = n[2]);
        let h = (1 / (5 * i.la + 1)) ** 4;
        (i.fl = h * i.la + 0.1 * (1 - h) * (1 - h) * Math.cbrt(5 * i.la)),
          (i.flRoot = i.fl ** 0.25),
          (i.n = i.yb / c),
          (i.z = 1.48 + Math.sqrt(i.n)),
          (i.nbb = 0.725 * i.n ** -0.2),
          (i.ncb = i.nbb);
        let f = a
          ? 1
          : Math.max(
              Math.min(u * (1 - (1 / 3.6) * Math.exp((-i.la - 42) / 92)), 1),
              0,
            );
        (i.dRgb = l.map((e) => p(1, c / e, f))),
          (i.dRgbInv = i.dRgb.map((e) => 1 / e));
        let d = eq(
          l.map((e, t) => e * i.dRgb[t]),
          i.fl,
        );
        return (i.aW = i.nbb * (2 * d[0] + d[1] + 0.05 * d[2])), i;
      }
      let eF = eW(ek, (64 / Math.PI) * 0.2, 20, "average", !1);
      function eH(e, t) {
        var r;
        let n;
        if (!((void 0 !== e.J) ^ (void 0 !== e.Q)))
          throw Error("Conversion requires one and only one: 'J' or 'Q'");
        if (!((void 0 !== e.C) ^ (void 0 !== e.M) ^ (void 0 !== e.s)))
          throw Error("Conversion requires one and only one: 'C', 'M' or 's'");
        if (!((void 0 !== e.h) ^ (void 0 !== e.H)))
          throw Error("Conversion requires one and only one: 'h' or 'H'");
        if (0 === e.J || 0 === e.Q) return [0, 0, 0];
        let a = 0,
          i = Math.cos(
            (a =
              void 0 !== e.h
                ? V(e.h) * eU
                : (function (e) {
                    let t = ((e % 400) + 400) % 400,
                      r = Math.floor(0.01 * t);
                    t %= 100;
                    let [n, o] = eL.slice(r, r + 2),
                      [a, i] = ez.slice(r, r + 2);
                    return V(
                      (t * (i * n - a * o) - 100 * n * i) /
                        (t * (i - a) - 100 * i),
                    );
                  })(e.H) * eU),
          ),
          s = Math.sin(a),
          c = 0;
        void 0 !== e.J
          ? (c = 0.1 * w(e.J, 0.5))
          : void 0 !== e.Q &&
            (c = (0.25 * t.c * e.Q) / ((t.aW + 4) * t.flRoot));
        let l = 0;
        void 0 !== e.C
          ? (l = e.C / c)
          : void 0 !== e.M
            ? (l = e.M / t.flRoot / c)
            : void 0 !== e.s && (l = (4e-4 * e.s ** 2 * (t.aW + 4)) / t.c);
        let u = w(l * Math.pow(1.64 - Math.pow(0.29, t.n), -0.73), 10 / 9),
          h = 0.25 * (Math.cos(a + 2) + 3.8),
          f = t.aW * w(c, 2 / t.c / t.z),
          d = (5e4 / 13) * t.nc * t.ncb * h,
          p = f / t.nbb,
          g = 23 * (p + 0.305) * v(u, 23 * d + u * (11 * i + 108 * s)),
          m =
            ((r = o(ej, [p, g * i, g * s]).map((e) => e / 1403)),
            (n = (100 / t.fl) * 2588.068098016295),
            r.map((e) => {
              let t = Math.abs(e);
              return y(n * w(t / (400 - t), 2.380952380952381), e);
            }));
        return o(
          eB,
          m.map((e, r) => e * t.dRgbInv[r]),
        ).map((e) => e / 100);
      }
      function eG(e, t) {
        let r = eq(
            o(
              eN,
              e.map((e) => 100 * e),
            ).map((e, r) => e * t.dRgb[r]),
            t.fl,
          ),
          n = r[0] + (-12 * r[1] + r[2]) / 11,
          a = (r[0] + r[1] - 2 * r[2]) / 9,
          i = ((Math.atan2(a, n) % eP) + eP) % eP,
          s = 0.25 * (Math.cos(i + 2) + 3.8),
          c =
            w(
              (5e4 / 13) *
                t.nc *
                t.ncb *
                v(
                  s * Math.sqrt(n ** 2 + a ** 2),
                  r[0] + r[1] + 1.05 * r[2] + 0.305,
                ),
              0.9,
            ) * Math.pow(1.64 - Math.pow(0.29, t.n), 0.73),
          l = w(
            (t.nbb * (2 * r[0] + r[1] + 0.05 * r[2])) / t.aW,
            0.5 * t.c * t.z,
          ),
          u = 100 * w(l, 2),
          h = (4 / t.c) * l * (t.aW + 4) * t.flRoot,
          f = c * l,
          d = f * t.flRoot,
          p = V(i * e$),
          g = (function (e) {
            let t = V(e);
            t <= eL[0] && (t += 360);
            let r = M(eL, t) - 1,
              [n, o] = eL.slice(r, r + 2),
              [a, i] = ez.slice(r, r + 2),
              s = eD[r],
              c = (t - n) / a;
            return s + (100 * c) / (c + (o - t) / i);
          })(p);
        return {
          J: u,
          C: f,
          h: p,
          s: 50 * w((t.c * c) / (t.aW + 4), 0.5),
          Q: h,
          M: d,
          H: g,
        };
      }
      var eV = new N({
        id: "cam16-jmh",
        cssId: "--cam16-jmh",
        name: "CAM16-JMh",
        coords: {
          j: { refRange: [0, 100], name: "J" },
          m: { refRange: [0, 105], name: "Colorfulness" },
          h: { refRange: [0, 360], type: "angle", name: "Hue" },
        },
        base: j,
        fromBase(e) {
          let t = eG(e, eF);
          return [t.J, t.M, t.h];
        },
        toBase: (e) => eH({ J: e[0], M: e[1], h: e[2] }, eF),
      });
      let eJ = S.D65,
        eX = 216 / 24389,
        eY = 24389 / 27;
      function eZ(e) {
        return e > 8 ? Math.pow((e + 16) / 116, 3) : e / eY;
      }
      let eQ = eW(eJ, (200 / Math.PI) * eZ(50), 100 * eZ(50), "average", !1);
      var eK = new N({
        id: "hct",
        name: "HCT",
        coords: {
          h: { refRange: [0, 360], type: "angle", name: "Hue" },
          c: { refRange: [0, 145], name: "Colorfulness" },
          t: { refRange: [0, 100], name: "Tone" },
        },
        base: j,
        fromBase: (e) =>
          (function (e) {
            var t;
            let r =
              116 * ((t = e[1]) > eX ? Math.cbrt(t) : (eY * t + 16) / 116) - 16;
            if (0 === r) return [0, 0, 0];
            let n = eG(e, eQ);
            return [V(n.h), n.C, r];
          })(e),
        toBase: (e) =>
          (function (e, t) {
            let [r, n, o] = e,
              a = [],
              i = 0;
            if (0 === o) return [0, 0, 0];
            let s = eZ(o);
            i =
              o > 0
                ? 0.00379058511492914 * o ** 2 +
                  0.608983189401032 * o +
                  0.9155088574762233
                : 9514440756550361e-21 * o ** 2 +
                  0.08693057439788597 * o -
                  21.928975842194614;
            let c = 0,
              l = 1 / 0;
            for (; c <= 15; ) {
              let e = Math.abs((a = eH({ J: i, C: n, h: r }, t))[1] - s);
              if (e < l) {
                if (e <= 2e-12) return a;
                l = e;
              }
              (i -= ((a[1] - s) * i) / (2 * a[1])), (c += 1);
            }
            return eH({ J: i, C: n, h: r }, t);
          })(e, eQ),
        formats: {
          color: {
            id: "--hct",
            coords: [
              "<number> | <angle>",
              "<percentage> | <number>",
              "<percentage> | <number>",
            ],
          },
        },
      });
      let e0 = Math.PI / 180;
      function e1(e) {
        e[1] < 0 && (e = eK.fromBase(eK.toBase(e)));
        let t = Math.log(Math.max(1 + 0.0228 * e[1] * eQ.flRoot, 1)) / 0.0228,
          r = e[0] * e0,
          n = t * Math.cos(r),
          o = t * Math.sin(r);
        return [e[2], n, o];
      }
      var e2 = {
        deltaE76: function (e, t) {
          return ec(e, t, "lab");
        },
        deltaECMC: function (e, t, { l: r = 2, c: n = 1 } = {}) {
          [e, t] = P([e, t]);
          let [o, a, i] = G.from(e),
            [, s, c] = J.from(G, [o, a, i]),
            [l, u, h] = G.from(t),
            f = J.from(G, [l, u, h])[1];
          s < 0 && (s = 0), f < 0 && (f = 0);
          let d = o - l,
            p = s - f,
            g = a - u,
            m = i - h,
            b = 0.511;
          o >= 16 && (b = (0.040975 * o) / (1 + 0.01765 * o));
          let _ = (0.0638 * s) / (1 + 0.0131 * s) + 0.638;
          Number.isNaN(c) && (c = 0);
          let y = Math.pow(s, 4),
            w = Math.sqrt(y / (y + 1900)),
            v =
              _ *
              (w *
                (c >= 164 && c <= 345
                  ? 0.56 + Math.abs(0.2 * Math.cos((c + 168) * el))
                  : 0.36 + Math.abs(0.4 * Math.cos((c + 35) * el))) +
                1 -
                w),
            M = (d / (r * b)) ** 2;
          return Math.sqrt(
            (M += (p / (n * _)) ** 2 + (g ** 2 + m ** 2 - p ** 2) / v ** 2),
          );
        },
        deltaE2000: K,
        deltaEJz: function (e, t) {
          [e, t] = P([e, t]);
          let [r, n, o] = ew.from(e),
            [a, i, s] = ew.from(t);
          Number.isNaN(o) && Number.isNaN(s)
            ? ((o = 0), (s = 0))
            : Number.isNaN(o)
              ? (o = s)
              : Number.isNaN(s) && (s = o);
          let c =
            2 * Math.sqrt(n * i) * Math.sin(((o - s) / 2) * (Math.PI / 180));
          return Math.sqrt((r - a) ** 2 + (n - i) ** 2 + c ** 2);
        },
        deltaEITP: function (e, t) {
          [e, t] = P([e, t]);
          let [r, n, o] = eT.from(e),
            [a, i, s] = eT.from(t);
          return (
            720 * Math.sqrt((r - a) ** 2 + 0.25 * (n - i) ** 2 + (o - s) ** 2)
          );
        },
        deltaEOK: ea,
        deltaEHCT: function (e, t) {
          [e, t] = P([e, t]);
          let [r, n, o] = e1(eK.from(e)),
            [a, i, s] = e1(eK.from(t));
          return Math.sqrt((r - a) ** 2 + (n - i) ** 2 + (o - s) ** 2);
        },
      };
      let e5 = {
        hct: {
          method: "hct.c",
          jnd: 2,
          deltaEMethod: "hct",
          blackWhiteClamp: {},
        },
        "hct-tonal": {
          method: "hct.c",
          jnd: 0,
          deltaEMethod: "hct",
          blackWhiteClamp: { channel: "hct.t", min: 0, max: 100 },
        },
      };
      function e6(
        e,
        {
          method: t = R.gamut_mapping,
          space: r,
          deltaEMethod: n = "",
          jnd: o = 2,
          blackWhiteClamp: i = {},
        } = {},
      ) {
        let s;
        if (
          ((e = P(e)),
          a(arguments[1]) ? (r = arguments[1]) : r || (r = e.space),
          ei(e, (r = N.get(r)), { epsilon: 0 }))
        )
          return e;
        if ("css" === t)
          s = (function (e, { space: t } = {}) {
            (e = P(e)), t || (t = e.space), (t = N.get(t));
            let r = N.get("oklch");
            if (t.isUnbounded) return e3(e, t);
            let n = e3(e, r),
              o = n.coords[0];
            if (o >= 1) {
              let r = e3(e9, t);
              return (r.alpha = e.alpha), e3(r, t);
            }
            if (o <= 0) {
              let r = e3(e4, t);
              return (r.alpha = e.alpha), e3(r, t);
            }
            if (ei(n, t, { epsilon: 0 })) return e3(n, t);
            function a(e) {
              let r = e3(e, t),
                n = Object.values(t.coords);
              return (
                (r.coords = r.coords.map((e, t) => {
                  if ("range" in n[t]) {
                    let [r, o] = n[t].range;
                    return _(r, e, o);
                  }
                  return e;
                })),
                r
              );
            }
            let i = 0,
              s = n.coords[1],
              c = !0,
              l = es(n),
              u = a(l),
              h = ea(u, l);
            if (h < 0.02) return u;
            for (; s - i > 1e-4; ) {
              let e = (i + s) / 2;
              if (((l.coords[1] = e), c && ei(l, t, { epsilon: 0 }))) i = e;
              else if ((h = ea((u = a(l)), l)) < 0.02)
                if (0.02 - h < 1e-4) break;
                else (c = !1), (i = e);
              else s = e;
            }
            return u;
          })(e, { space: r });
        else {
          if ("clip" === t || ei(e, r)) s = e3(e, r);
          else {
            Object.prototype.hasOwnProperty.call(e5, t) &&
              ({
                method: t,
                jnd: o,
                deltaEMethod: n,
                blackWhiteClamp: i,
              } = e5[t]);
            let a = K;
            if ("" !== n) {
              for (let e in e2)
                if ("deltae" + n.toLowerCase() === e.toLowerCase()) {
                  a = e2[e];
                  break;
                }
            }
            let u = e6(e3(e, r), { method: "clip", space: r });
            if (a(e, u) > o) {
              var l;
              let n;
              if (3 === Object.keys(i).length) {
                let t = N.resolveCoord(i.channel),
                  r = z(e3(e, t.space), t.id);
                if ((c(r) && (r = 0), r >= i.max))
                  return e3({ space: "xyz-d65", coords: S.D65 }, e.space);
                if (r <= i.min)
                  return e3({ space: "xyz-d65", coords: [0, 0, 0] }, e.space);
              }
              let u = N.resolveCoord(t),
                h = u.space,
                f = u.id,
                d = e3(e, h);
              d.coords.forEach((e, t) => {
                c(e) && (d.coords[t] = 0);
              });
              let p = (u.range || u.refRange)[0],
                g =
                  ((n = (l = o) ? Math.floor(Math.log10(Math.abs(l))) : 0),
                  Math.max(parseFloat(`1e${n - 2}`), 1e-6)),
                m = p,
                b = z(d, f);
              for (; b - m > g; ) {
                let e = es(d);
                a(d, (e = e6(e, { space: r, method: "clip" }))) - o < g
                  ? (m = z(d, f))
                  : (b = z(d, f)),
                  $(d, f, (m + b) / 2);
              }
              s = e3(d, r);
            } else s = u;
          }
          if ("clip" === t || !ei(s, r, { epsilon: 0 })) {
            let e = Object.values(r.coords).map((e) => e.range || []);
            s.coords = s.coords.map((t, r) => {
              let [n, o] = e[r];
              return (
                void 0 !== n && (t = Math.max(n, t)),
                void 0 !== o && (t = Math.min(t, o)),
                t
              );
            });
          }
        }
        return r !== e.space && (s = e3(s, e.space)), (e.coords = s.coords), e;
      }
      e6.returns = "color";
      let e9 = { space: eo, coords: [1, 0, 0] },
        e4 = { space: eo, coords: [0, 0, 0] };
      function e3(e, t, { inGamut: r } = {}) {
        e = P(e);
        let n = (t = N.get(t)).from(e),
          o = { space: t, coords: n, alpha: e.alpha };
        return r && (o = e6(o, !0 === r ? void 0 : r)), o;
      }
      function e8(
        e,
        {
          precision: t = R.precision,
          format: r = "default",
          inGamut: n = !0,
          ...o
        } = {},
      ) {
        let a;
        e = P(e);
        let i = r;
        r =
          e.space.getFormat(r) ??
          e.space.getFormat("default") ??
          N.DEFAULT_FORMAT;
        let c = e.coords.slice();
        if (
          ((n ||= r.toGamut) &&
            !ei(e) &&
            (c = e6(es(e), !0 === n ? void 0 : n).coords),
          "custom" === r.type)
        )
          if (((o.precision = t), r.serialize)) a = r.serialize(c, e.alpha, o);
          else
            throw TypeError(
              `format ${i} can only be used to parse colors, not for serialization`,
            );
        else {
          let n = r.name || "color";
          r.serializeCoords
            ? (c = r.serializeCoords(c, t))
            : null !== t && (c = c.map((e) => s(e, { precision: t })));
          let o = [...c];
          if ("color" === n) {
            let t = r.id || r.ids?.[0] || e.space.id;
            o.unshift(t);
          }
          let i = e.alpha;
          null !== t && (i = s(i, { precision: t }));
          let l =
            e.alpha >= 1 || r.noAlpha ? "" : `${r.commas ? "," : " /"} ${i}`;
          a = `${n}(${o.join(r.commas ? ", " : " ")}${l})`;
        }
        return a;
      }
      e3.returns = "color";
      var e7 = new O({
          id: "rec2020-linear",
          cssId: "--rec2020-linear",
          name: "Linear REC.2020",
          white: "D65",
          toXYZ_M: [
            [0.6369580483012914, 0.14461690358620832, 0.1688809751641721],
            [0.2627002120112671, 0.6779980715188708, 0.05930171646986196],
            [0, 0.028072693049087428, 1.060985057710791],
          ],
          fromXYZ_M: [
            [1.716651187971268, -0.355670783776392, -0.25336628137366],
            [-0.666684351832489, 1.616481236634939, 0.0157685458139111],
            [0.017639857445311, -0.042770613257809, 0.942103121235474],
          ],
        }),
        te = new O({
          id: "rec2020",
          name: "REC.2020",
          base: e7,
          toBase: (e) =>
            e.map(function (e) {
              return e < 0.08124285829863151
                ? e / 4.5
                : Math.pow(
                    (e + 1.09929682680944 - 1) / 1.09929682680944,
                    1 / 0.45,
                  );
            }),
          fromBase: (e) =>
            e.map(function (e) {
              return e >= 0.018053968510807
                ? 1.09929682680944 * Math.pow(e, 0.45) - (1.09929682680944 - 1)
                : 4.5 * e;
            }),
        }),
        tt = new O({
          id: "p3-linear",
          cssId: "--display-p3-linear",
          name: "Linear P3",
          white: "D65",
          toXYZ_M: [
            [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
            [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
            [0, 0.04511338185890264, 1.043944368900976],
          ],
          fromXYZ_M: [
            [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
            [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
            [0.03584583024378447, -0.07617238926804182, 0.9568845240076872],
          ],
        });
      let tr = [
        [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
        [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
        [0.05563007969699366, -0.20397695888897652, 1.0569715142428786],
      ];
      var tn = new O({
          id: "srgb-linear",
          name: "Linear sRGB",
          white: "D65",
          toXYZ_M: [
            [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
            [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
            [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
          ],
          fromXYZ_M: tr,
        }),
        to = {
          aliceblue: [240 / 255, 248 / 255, 1],
          antiquewhite: [250 / 255, 235 / 255, 215 / 255],
          aqua: [0, 1, 1],
          aquamarine: [127 / 255, 1, 212 / 255],
          azure: [240 / 255, 1, 1],
          beige: [245 / 255, 245 / 255, 220 / 255],
          bisque: [1, 228 / 255, 196 / 255],
          black: [0, 0, 0],
          blanchedalmond: [1, 235 / 255, 205 / 255],
          blue: [0, 0, 1],
          blueviolet: [138 / 255, 43 / 255, 226 / 255],
          brown: [165 / 255, 42 / 255, 42 / 255],
          burlywood: [222 / 255, 184 / 255, 135 / 255],
          cadetblue: [95 / 255, 158 / 255, 160 / 255],
          chartreuse: [127 / 255, 1, 0],
          chocolate: [210 / 255, 105 / 255, 30 / 255],
          coral: [1, 127 / 255, 80 / 255],
          cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
          cornsilk: [1, 248 / 255, 220 / 255],
          crimson: [220 / 255, 20 / 255, 60 / 255],
          cyan: [0, 1, 1],
          darkblue: [0, 0, 139 / 255],
          darkcyan: [0, 139 / 255, 139 / 255],
          darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
          darkgray: [169 / 255, 169 / 255, 169 / 255],
          darkgreen: [0, 100 / 255, 0],
          darkgrey: [169 / 255, 169 / 255, 169 / 255],
          darkkhaki: [189 / 255, 183 / 255, 107 / 255],
          darkmagenta: [139 / 255, 0, 139 / 255],
          darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
          darkorange: [1, 140 / 255, 0],
          darkorchid: [0.6, 50 / 255, 0.8],
          darkred: [139 / 255, 0, 0],
          darksalmon: [233 / 255, 150 / 255, 122 / 255],
          darkseagreen: [143 / 255, 188 / 255, 143 / 255],
          darkslateblue: [72 / 255, 61 / 255, 139 / 255],
          darkslategray: [47 / 255, 79 / 255, 79 / 255],
          darkslategrey: [47 / 255, 79 / 255, 79 / 255],
          darkturquoise: [0, 206 / 255, 209 / 255],
          darkviolet: [148 / 255, 0, 211 / 255],
          deeppink: [1, 20 / 255, 147 / 255],
          deepskyblue: [0, 191 / 255, 1],
          dimgray: [105 / 255, 105 / 255, 105 / 255],
          dimgrey: [105 / 255, 105 / 255, 105 / 255],
          dodgerblue: [30 / 255, 144 / 255, 1],
          firebrick: [178 / 255, 34 / 255, 34 / 255],
          floralwhite: [1, 250 / 255, 240 / 255],
          forestgreen: [34 / 255, 139 / 255, 34 / 255],
          fuchsia: [1, 0, 1],
          gainsboro: [220 / 255, 220 / 255, 220 / 255],
          ghostwhite: [248 / 255, 248 / 255, 1],
          gold: [1, 215 / 255, 0],
          goldenrod: [218 / 255, 165 / 255, 32 / 255],
          gray: [128 / 255, 128 / 255, 128 / 255],
          green: [0, 128 / 255, 0],
          greenyellow: [173 / 255, 1, 47 / 255],
          grey: [128 / 255, 128 / 255, 128 / 255],
          honeydew: [240 / 255, 1, 240 / 255],
          hotpink: [1, 105 / 255, 180 / 255],
          indianred: [205 / 255, 92 / 255, 92 / 255],
          indigo: [75 / 255, 0, 130 / 255],
          ivory: [1, 1, 240 / 255],
          khaki: [240 / 255, 230 / 255, 140 / 255],
          lavender: [230 / 255, 230 / 255, 250 / 255],
          lavenderblush: [1, 240 / 255, 245 / 255],
          lawngreen: [124 / 255, 252 / 255, 0],
          lemonchiffon: [1, 250 / 255, 205 / 255],
          lightblue: [173 / 255, 216 / 255, 230 / 255],
          lightcoral: [240 / 255, 128 / 255, 128 / 255],
          lightcyan: [224 / 255, 1, 1],
          lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
          lightgray: [211 / 255, 211 / 255, 211 / 255],
          lightgreen: [144 / 255, 238 / 255, 144 / 255],
          lightgrey: [211 / 255, 211 / 255, 211 / 255],
          lightpink: [1, 182 / 255, 193 / 255],
          lightsalmon: [1, 160 / 255, 122 / 255],
          lightseagreen: [32 / 255, 178 / 255, 170 / 255],
          lightskyblue: [135 / 255, 206 / 255, 250 / 255],
          lightslategray: [119 / 255, 136 / 255, 0.6],
          lightslategrey: [119 / 255, 136 / 255, 0.6],
          lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
          lightyellow: [1, 1, 224 / 255],
          lime: [0, 1, 0],
          limegreen: [50 / 255, 205 / 255, 50 / 255],
          linen: [250 / 255, 240 / 255, 230 / 255],
          magenta: [1, 0, 1],
          maroon: [128 / 255, 0, 0],
          mediumaquamarine: [0.4, 205 / 255, 170 / 255],
          mediumblue: [0, 0, 205 / 255],
          mediumorchid: [186 / 255, 85 / 255, 211 / 255],
          mediumpurple: [147 / 255, 112 / 255, 219 / 255],
          mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
          mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
          mediumspringgreen: [0, 250 / 255, 154 / 255],
          mediumturquoise: [72 / 255, 209 / 255, 0.8],
          mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
          midnightblue: [25 / 255, 25 / 255, 112 / 255],
          mintcream: [245 / 255, 1, 250 / 255],
          mistyrose: [1, 228 / 255, 225 / 255],
          moccasin: [1, 228 / 255, 181 / 255],
          navajowhite: [1, 222 / 255, 173 / 255],
          navy: [0, 0, 128 / 255],
          oldlace: [253 / 255, 245 / 255, 230 / 255],
          olive: [128 / 255, 128 / 255, 0],
          olivedrab: [107 / 255, 142 / 255, 35 / 255],
          orange: [1, 165 / 255, 0],
          orangered: [1, 69 / 255, 0],
          orchid: [218 / 255, 112 / 255, 214 / 255],
          palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
          palegreen: [152 / 255, 251 / 255, 152 / 255],
          paleturquoise: [175 / 255, 238 / 255, 238 / 255],
          palevioletred: [219 / 255, 112 / 255, 147 / 255],
          papayawhip: [1, 239 / 255, 213 / 255],
          peachpuff: [1, 218 / 255, 185 / 255],
          peru: [205 / 255, 133 / 255, 63 / 255],
          pink: [1, 192 / 255, 203 / 255],
          plum: [221 / 255, 160 / 255, 221 / 255],
          powderblue: [176 / 255, 224 / 255, 230 / 255],
          purple: [128 / 255, 0, 128 / 255],
          rebeccapurple: [0.4, 0.2, 0.6],
          red: [1, 0, 0],
          rosybrown: [188 / 255, 143 / 255, 143 / 255],
          royalblue: [65 / 255, 105 / 255, 225 / 255],
          saddlebrown: [139 / 255, 69 / 255, 19 / 255],
          salmon: [250 / 255, 128 / 255, 114 / 255],
          sandybrown: [244 / 255, 164 / 255, 96 / 255],
          seagreen: [46 / 255, 139 / 255, 87 / 255],
          seashell: [1, 245 / 255, 238 / 255],
          sienna: [160 / 255, 82 / 255, 45 / 255],
          silver: [192 / 255, 192 / 255, 192 / 255],
          skyblue: [135 / 255, 206 / 255, 235 / 255],
          slateblue: [106 / 255, 90 / 255, 205 / 255],
          slategray: [112 / 255, 128 / 255, 144 / 255],
          slategrey: [112 / 255, 128 / 255, 144 / 255],
          snow: [1, 250 / 255, 250 / 255],
          springgreen: [0, 1, 127 / 255],
          steelblue: [70 / 255, 130 / 255, 180 / 255],
          tan: [210 / 255, 180 / 255, 140 / 255],
          teal: [0, 128 / 255, 128 / 255],
          thistle: [216 / 255, 191 / 255, 216 / 255],
          tomato: [1, 99 / 255, 71 / 255],
          turquoise: [64 / 255, 224 / 255, 208 / 255],
          violet: [238 / 255, 130 / 255, 238 / 255],
          wheat: [245 / 255, 222 / 255, 179 / 255],
          white: [1, 1, 1],
          whitesmoke: [245 / 255, 245 / 255, 245 / 255],
          yellow: [1, 1, 0],
          yellowgreen: [154 / 255, 205 / 255, 50 / 255],
        };
      let ta = [, , ,].fill("<percentage> | <number>[0, 255]"),
        ti = [, , ,].fill("<number>[0, 255]");
      var ts = new O({
          id: "srgb",
          name: "sRGB",
          base: tn,
          fromBase: (e) =>
            e.map((e) => {
              let t = e < 0 ? -1 : 1,
                r = e * t;
              return r > 0.0031308
                ? t * (1.055 * r ** (1 / 2.4) - 0.055)
                : 12.92 * e;
            }),
          toBase: (e) =>
            e.map((e) => {
              let t = e < 0 ? -1 : 1,
                r = e * t;
              return r <= 0.04045
                ? e / 12.92
                : t * ((r + 0.055) / 1.055) ** 2.4;
            }),
          formats: {
            rgb: { coords: ta },
            rgb_number: { name: "rgb", commas: !0, coords: ti, noAlpha: !0 },
            color: {},
            rgba: { coords: ta, commas: !0, lastAlpha: !0 },
            rgba_number: { name: "rgba", commas: !0, coords: ti },
            hex: {
              type: "custom",
              toGamut: !0,
              test: (e) => /^#([a-f0-9]{3,4}){1,2}$/i.test(e),
              parse(e) {
                e.length <= 5 && (e = e.replace(/[a-f0-9]/gi, "$&$&"));
                let t = [];
                return (
                  e.replace(/[a-f0-9]{2}/gi, (e) => {
                    t.push(parseInt(e, 16) / 255);
                  }),
                  {
                    spaceId: "srgb",
                    coords: t.slice(0, 3),
                    alpha: t.slice(3)[0],
                  }
                );
              },
              serialize: (e, t, { collapse: r = !0 } = {}) => {
                t < 1 && e.push(t), (e = e.map((e) => Math.round(255 * e)));
                let n = r && e.every((e) => e % 17 == 0);
                return (
                  "#" +
                  e
                    .map((e) =>
                      n
                        ? (e / 17).toString(16)
                        : e.toString(16).padStart(2, "0"),
                    )
                    .join("")
                );
              },
            },
            keyword: {
              type: "custom",
              test: (e) => /^[a-z]+$/i.test(e),
              parse(e) {
                e = e.toLowerCase();
                let t = { spaceId: "srgb", coords: null, alpha: 1 };
                if (
                  ("transparent" === e
                    ? ((t.coords = to.black), (t.alpha = 0))
                    : (t.coords = to[e]),
                  t.coords)
                )
                  return t;
              },
            },
          },
        }),
        tc = new O({
          id: "p3",
          cssId: "display-p3",
          name: "P3",
          base: tt,
          fromBase: ts.fromBase,
          toBase: ts.toBase,
        });
      if (((R.display_space = ts), "u" > typeof CSS && CSS.supports))
        for (let e of [G, te, tc]) {
          let t = e.getMinCoords(),
            r = e8({ space: e, coords: t, alpha: 1 });
          if (CSS.supports("color", r)) {
            R.display_space = e;
            break;
          }
        }
      function tl(e) {
        return z(e, [j, "y"]);
      }
      function tu(e, t) {
        $(e, [j, "y"], t);
      }
      var th = Object.freeze({
        __proto__: null,
        getLuminance: tl,
        register: function (e) {
          Object.defineProperty(e.prototype, "luminance", {
            get() {
              return tl(this);
            },
            set(e) {
              tu(this, e);
            },
          });
        },
        setLuminance: tu,
      });
      function tf(e) {
        return e >= 0.022 ? e : e + (0.022 - e) ** 1.414;
      }
      function td(e) {
        let t = Math.abs(e);
        return (e < 0 ? -1 : 1) * Math.pow(t, 2.4);
      }
      let tp = 216 / 24389,
        tg = 24 / 116,
        tm = 24389 / 27,
        tb = S.D65;
      var t_ = new N({
          id: "lab-d65",
          name: "Lab D65",
          coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            a: { refRange: [-125, 125] },
            b: { refRange: [-125, 125] },
          },
          white: tb,
          base: j,
          fromBase(e) {
            let t = e
              .map((e, t) => e / tb[t])
              .map((e) => (e > tp ? Math.cbrt(e) : (tm * e + 16) / 116));
            return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
          },
          toBase(e) {
            let t = [];
            return (
              (t[1] = (e[0] + 16) / 116),
              (t[0] = e[1] / 500 + t[1]),
              (t[2] = t[1] - e[2] / 200),
              [
                t[0] > tg ? Math.pow(t[0], 3) : (116 * t[0] - 16) / tm,
                e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / tm,
                t[2] > tg ? Math.pow(t[2], 3) : (116 * t[2] - 16) / tm,
              ].map((e, t) => e * tb[t])
            );
          },
          formats: {
            "lab-d65": {
              coords: [
                "<number> | <percentage>",
                "<number> | <percentage>[-1,1]",
                "<number> | <percentage>[-1,1]",
              ],
            },
          },
        }),
        ty = Object.freeze({
          __proto__: null,
          contrastAPCA: function (e, t) {
            let r, n, o, a;
            (t = P(t)), (e = P(e)), (t = e3(t, "srgb")), ([n, o, a] = t.coords);
            let i = 0.2126729 * td(n) + 0.7151522 * td(o) + 0.072175 * td(a);
            (e = e3(e, "srgb")), ([n, o, a] = e.coords);
            let s = 0.2126729 * td(n) + 0.7151522 * td(o) + 0.072175 * td(a),
              c = tf(i),
              l = tf(s);
            return (
              100 *
              (0.1 >
              Math.abs(
                (r =
                  5e-4 > Math.abs(l - c)
                    ? 0
                    : l > c
                      ? 1.14 * (l ** 0.56 - c ** 0.57)
                      : 1.14 * (l ** 0.65 - c ** 0.62)),
              )
                ? 0
                : r > 0
                  ? r - 0.027
                  : r + 0.027)
            );
          },
          contrastDeltaPhi: function (e, t) {
            (e = P(e)), (t = P(t));
            let r =
              Math.pow(
                Math.abs(
                  Math.pow(z(e, [t_, "l"]), 1.618033988749895) -
                    Math.pow(z(t, [t_, "l"]), 1.618033988749895),
                ),
                0.6180339887498948,
              ) *
                Math.SQRT2 -
              40;
            return r < 7.5 ? 0 : r;
          },
          contrastLstar: function (e, t) {
            return (
              (e = P(e)), (t = P(t)), Math.abs(z(e, [G, "l"]) - z(t, [G, "l"]))
            );
          },
          contrastMichelson: function (e, t) {
            (e = P(e)), (t = P(t));
            let r = Math.max(tl(e), 0),
              n = Math.max(tl(t), 0);
            n > r && ([r, n] = [n, r]);
            let o = r + n;
            return 0 === o ? 0 : (r - n) / o;
          },
          contrastWCAG21: function (e, t) {
            (e = P(e)), (t = P(t));
            let r = Math.max(tl(e), 0),
              n = Math.max(tl(t), 0);
            return n > r && ([r, n] = [n, r]), (r + 0.05) / (n + 0.05);
          },
          contrastWeber: function (e, t) {
            (e = P(e)), (t = P(t));
            let r = Math.max(tl(e), 0),
              n = Math.max(tl(t), 0);
            return n > r && ([r, n] = [n, r]), 0 === n ? 5e4 : (r - n) / n;
          },
        });
      function tw(e) {
        let [t, r, n] = L(e, j),
          o = t + 15 * r + 3 * n;
        return [(4 * t) / o, (9 * r) / o];
      }
      function tv(e) {
        let [t, r, n] = L(e, j),
          o = t + r + n;
        return [t / o, r / o];
      }
      var tM = Object.freeze({
        __proto__: null,
        register: function (e) {
          Object.defineProperty(e.prototype, "uv", {
            get() {
              return tw(this);
            },
          }),
            Object.defineProperty(e.prototype, "xy", {
              get() {
                return tv(this);
              },
            });
        },
        uv: tw,
        xy: tv,
      });
      function tx(e, t, r = {}) {
        a(r) && (r = { method: r });
        let { method: n = R.deltaE, ...o } = r;
        for (let r in e2)
          if ("deltae" + n.toLowerCase() === r.toLowerCase())
            return e2[r](e, t, o);
        throw TypeError(`Unknown deltaE method: ${n}`);
      }
      var tC = Object.freeze({
        __proto__: null,
        darken: function (e, t = 0.25) {
          return $(e, [N.get("oklch", "lch"), "l"], (e) => e * (1 - t));
        },
        lighten: function (e, t = 0.25) {
          return $(e, [N.get("oklch", "lch"), "l"], (e) => e * (1 + t));
        },
      });
      function tR(e, t, r = 0.5, n = {}) {
        return (
          ([e, t] = [P(e), P(t)]),
          "object" === i(r) && ([r, n] = [0.5, r]),
          tE(e, t, n)(r)
        );
      }
      function tS(e, t, r = {}) {
        let n;
        tA(e) && (([n, r] = [e, t]), ([e, t] = n.rangeArgs.colors));
        let {
          maxDeltaE: o,
          deltaEMethod: a,
          steps: i = 2,
          maxSteps: s = 1e3,
          ...c
        } = r;
        n || (([e, t] = [P(e), P(t)]), (n = tE(e, t, c)));
        let l = tx(e, t),
          u = o > 0 ? Math.max(i, Math.ceil(l / o) + 1) : i,
          h = [];
        if ((void 0 !== s && (u = Math.min(u, s)), 1 === u))
          h = [{ p: 0.5, color: n(0.5) }];
        else {
          let e = 1 / (u - 1);
          h = Array.from({ length: u }, (t, r) => {
            let o = r * e;
            return { p: o, color: n(o) };
          });
        }
        if (o > 0) {
          let e = h.reduce(
            (e, t, r) =>
              0 === r ? 0 : Math.max(e, tx(t.color, h[r - 1].color, a)),
            0,
          );
          for (; e > o; ) {
            e = 0;
            for (let t = 1; t < h.length && h.length < s; t++) {
              let r = h[t - 1],
                o = h[t],
                a = (o.p + r.p) / 2,
                i = n(a);
              (e = Math.max(e, tx(i, r.color), tx(i, o.color))),
                h.splice(t, 0, { p: a, color: n(a) }),
                t++;
            }
          }
        }
        return (h = h.map((e) => e.color));
      }
      function tE(e, t, r = {}) {
        if (tA(e)) {
          let [r, n] = [e, t];
          return tE(...r.rangeArgs.colors, { ...r.rangeArgs.options, ...n });
        }
        let { space: n, outputSpace: o, progression: a, premultiplied: i } = r;
        (e = P(e)), (t = P(t)), (e = es(e)), (t = es(t));
        let s = { colors: [e, t], options: r };
        if (
          ((n = n ? N.get(n) : N.registry[R.interpolationSpace] || e.space),
          (o = o ? N.get(o) : n),
          (e = e3(e, n)),
          (t = e3(t, n)),
          (e = e6(e)),
          (t = e6(t)),
          n.coords.h && "angle" === n.coords.h.type)
        ) {
          let o = (r.hue = r.hue || "shorter"),
            a = [n, "h"],
            [i, s] = [z(e, a), z(t, a)];
          isNaN(i) && !isNaN(s) ? (i = s) : isNaN(s) && !isNaN(i) && (s = i),
            ([i, s] = (function (e, t) {
              if ("raw" === e) return t;
              let [r, n] = t.map(V),
                o = n - r;
              return (
                "increasing" === e
                  ? o < 0 && (n += 360)
                  : "decreasing" === e
                    ? o > 0 && (r += 360)
                    : "longer" === e
                      ? -180 < o && o < 180 && (o > 0 ? (r += 360) : (n += 360))
                      : "shorter" === e &&
                        (o > 180 ? (r += 360) : o < -180 && (n += 360)),
                [r, n]
              );
            })(o, [i, s])),
            $(e, a, i),
            $(t, a, s);
        }
        return (
          i &&
            ((e.coords = e.coords.map((t) => t * e.alpha)),
            (t.coords = t.coords.map((e) => e * t.alpha))),
          Object.assign(
            (r) => {
              r = a ? a(r) : r;
              let s = e.coords.map((e, n) => p(e, t.coords[n], r)),
                c = p(e.alpha, t.alpha, r),
                l = { space: n, coords: s, alpha: c };
              return (
                i && (l.coords = l.coords.map((e) => e / c)),
                o !== n && (l = e3(l, o)),
                l
              );
            },
            { rangeArgs: s },
          )
        );
      }
      function tA(e) {
        return "function" === i(e) && !!e.rangeArgs;
      }
      R.interpolationSpace = "lab";
      var tI = Object.freeze({
          __proto__: null,
          isRange: tA,
          mix: tR,
          range: tE,
          register: function (e) {
            e.defineFunction("mix", tR, { returns: "color" }),
              e.defineFunction("range", tE, { returns: "function<color>" }),
              e.defineFunction("steps", tS, { returns: "array<color>" });
          },
          steps: tS,
        }),
        tT = new N({
          id: "hsl",
          name: "HSL",
          coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            l: { range: [0, 100], name: "Lightness" },
          },
          base: ts,
          fromBase: (e) => {
            let t = Math.max(...e),
              r = Math.min(...e),
              [n, o, a] = e,
              [i, s, c] = [NaN, 0, (r + t) / 2],
              l = t - r;
            if (0 !== l) {
              switch (
                ((s = 0 === c || 1 === c ? 0 : (t - c) / Math.min(c, 1 - c)), t)
              ) {
                case n:
                  i = (o - a) / l + 6 * (o < a);
                  break;
                case o:
                  i = (a - n) / l + 2;
                  break;
                case a:
                  i = (n - o) / l + 4;
              }
              i *= 60;
            }
            return (
              s < 0 && ((i += 180), (s = Math.abs(s))),
              i >= 360 && (i -= 360),
              [i, 100 * s, 100 * c]
            );
          },
          toBase: (e) => {
            let [t, r, n] = e;
            function o(e) {
              let o = (e + t / 30) % 12,
                a = r * Math.min(n, 1 - n);
              return n - a * Math.max(-1, Math.min(o - 3, 9 - o, 1));
            }
            return (
              (t %= 360) < 0 && (t += 360),
              (r /= 100),
              (n /= 100),
              [o(0), o(8), o(4)]
            );
          },
          formats: {
            hsl: {
              coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
            },
            hsla: {
              coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
              commas: !0,
              lastAlpha: !0,
            },
          },
        }),
        tk = new N({
          id: "hsv",
          name: "HSV",
          coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            s: { range: [0, 100], name: "Saturation" },
            v: { range: [0, 100], name: "Value" },
          },
          base: tT,
          fromBase(e) {
            let [t, r, n] = e,
              o = (n /= 100) + (r /= 100) * Math.min(n, 1 - n);
            return [t, 0 === o ? 0 : 200 * (1 - n / o), 100 * o];
          },
          toBase(e) {
            let [t, r, n] = e,
              o = (n /= 100) * (1 - (r /= 100) / 2);
            return [
              t,
              0 === o || 1 === o ? 0 : ((n - o) / Math.min(o, 1 - o)) * 100,
              100 * o,
            ];
          },
          formats: {
            color: {
              id: "--hsv",
              coords: [
                "<number> | <angle>",
                "<percentage> | <number>",
                "<percentage> | <number>",
              ],
            },
          },
        }),
        tP = new N({
          id: "hwb",
          name: "HWB",
          coords: {
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
            w: { range: [0, 100], name: "Whiteness" },
            b: { range: [0, 100], name: "Blackness" },
          },
          base: tk,
          fromBase(e) {
            let [t, r, n] = e;
            return [t, (n * (100 - r)) / 100, 100 - n];
          },
          toBase(e) {
            let [t, r, n] = e,
              o = (r /= 100) + (n /= 100);
            if (o >= 1) return [t, 0, (r / o) * 100];
            let a = 1 - n;
            return [t, 100 * (0 === a ? 0 : 1 - r / a), 100 * a];
          },
          formats: {
            hwb: {
              coords: [
                "<number> | <angle>",
                "<percentage> | <number>",
                "<percentage> | <number>",
              ],
            },
          },
        }),
        tN = new O({
          id: "a98rgb-linear",
          cssId: "--a98-rgb-linear",
          name: "Linear Adobe\xae 98 RGB compatible",
          white: "D65",
          toXYZ_M: [
            [0.5766690429101305, 0.1855582379065463, 0.1882286462349947],
            [0.29734497525053605, 0.6273635662554661, 0.07529145849399788],
            [0.02703136138641234, 0.07068885253582723, 0.9913375368376388],
          ],
          fromXYZ_M: [
            [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
            [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
            [0.013444280632031142, -0.11836239223101838, 1.0151749943912054],
          ],
        }),
        tB = new O({
          id: "a98rgb",
          cssId: "a98-rgb",
          name: "Adobe\xae 98 RGB compatible",
          base: tN,
          toBase: (e) =>
            e.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
          fromBase: (e) =>
            e.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
        }),
        tj = new O({
          id: "prophoto-linear",
          cssId: "--prophoto-rgb-linear",
          name: "Linear ProPhoto",
          white: "D50",
          base: U,
          toXYZ_M: [
            [0.7977666449006423, 0.13518129740053308, 0.0313477341283922],
            [0.2880748288194013, 0.711835234241873, 8993693872564e-17],
            [0, 0, 0.8251046025104602],
          ],
          fromXYZ_M: [
            [1.3457868816471583, -0.25557208737979464, -0.05110186497554526],
            [-0.5446307051249019, 1.5082477428451468, 0.02052744743642139],
            [0, 0, 1.2119675456389452],
          ],
        });
      let tO = 1 / 512,
        tL = 16 / 512;
      var tz = new O({
          id: "prophoto",
          cssId: "prophoto-rgb",
          name: "ProPhoto",
          base: tj,
          toBase: (e) => e.map((e) => (e < tL ? e / 16 : e ** 1.8)),
          fromBase: (e) => e.map((e) => (e >= tO ? e ** (1 / 1.8) : 16 * e)),
        }),
        tD = new N({
          id: "oklch",
          name: "Oklch",
          coords: {
            l: { refRange: [0, 1], name: "Lightness" },
            c: { refRange: [0, 0.4], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
          },
          white: "D65",
          base: eo,
          fromBase(e) {
            let t,
              [r, n, o] = e;
            return (
              (t =
                2e-4 > Math.abs(n) && 2e-4 > Math.abs(o)
                  ? NaN
                  : (180 * Math.atan2(o, n)) / Math.PI),
              [r, Math.sqrt(n ** 2 + o ** 2), V(t)]
            );
          },
          toBase(e) {
            let t,
              r,
              [n, o, a] = e;
            return (
              isNaN(a)
                ? ((t = 0), (r = 0))
                : ((t = o * Math.cos((a * Math.PI) / 180)),
                  (r = o * Math.sin((a * Math.PI) / 180))),
              [n, t, r]
            );
          },
          formats: {
            oklch: {
              coords: [
                "<percentage> | <number>",
                "<number> | <percentage>[0,1]",
                "<number> | <angle>",
              ],
            },
          },
        });
      let t$ = S.D65,
        tU = 216 / 24389,
        tq = 24389 / 27,
        [tW, tF] = tw({ space: j, coords: t$ });
      var tH = new N({
          id: "luv",
          name: "Luv",
          coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            u: { refRange: [-215, 215] },
            v: { refRange: [-215, 215] },
          },
          white: t$,
          base: j,
          fromBase(e) {
            let t = [l(e[0]), l(e[1]), l(e[2])],
              r = t[1],
              [n, o] = tw({ space: j, coords: t });
            if (!Number.isFinite(n) || !Number.isFinite(o)) return [0, 0, 0];
            let a = r <= tU ? tq * r : 116 * Math.cbrt(r) - 16;
            return [a, 13 * a * (n - tW), 13 * a * (o - tF)];
          },
          toBase(e) {
            let [t, r, n] = e;
            if (0 === t || c(t)) return [0, 0, 0];
            (r = l(r)), (n = l(n));
            let o = r / (13 * t) + tW,
              a = n / (13 * t) + tF,
              i = t <= 8 ? t / tq : Math.pow((t + 16) / 116, 3);
            return [
              ((9 * o) / (4 * a)) * i,
              i,
              ((12 - 3 * o - 20 * a) / (4 * a)) * i,
            ];
          },
          formats: {
            color: {
              id: "--luv",
              coords: [
                "<number> | <percentage>",
                "<number> | <percentage>[-1,1]",
                "<number> | <percentage>[-1,1]",
              ],
            },
          },
        }),
        tG = new N({
          id: "lchuv",
          name: "LChuv",
          coords: {
            l: { refRange: [0, 100], name: "Lightness" },
            c: { refRange: [0, 220], name: "Chroma" },
            h: { refRange: [0, 360], type: "angle", name: "Hue" },
          },
          base: tH,
          fromBase(e) {
            let t,
              [r, n, o] = e;
            return (
              (t =
                0.02 > Math.abs(n) && 0.02 > Math.abs(o)
                  ? NaN
                  : (180 * Math.atan2(o, n)) / Math.PI),
              [r, Math.sqrt(n ** 2 + o ** 2), V(t)]
            );
          },
          toBase(e) {
            let [t, r, n] = e;
            return (
              r < 0 && (r = 0),
              isNaN(n) && (n = 0),
              [
                t,
                r * Math.cos((n * Math.PI) / 180),
                r * Math.sin((n * Math.PI) / 180),
              ]
            );
          },
          formats: {
            color: {
              id: "--lchuv",
              coords: [
                "<number> | <percentage>",
                "<number> | <percentage>",
                "<number> | <angle>",
              ],
            },
          },
        });
      let tV = 216 / 24389,
        tJ = 24389 / 27,
        tX = tr[0][0],
        tY = tr[0][1],
        tZ = tr[0][2],
        tQ = tr[1][0],
        tK = tr[1][1],
        t0 = tr[1][2],
        t1 = tr[2][0],
        t2 = tr[2][1],
        t5 = tr[2][2];
      function t6(e, t, r) {
        let n = t / (Math.sin(r) - e * Math.cos(r));
        return n < 0 ? 1 / 0 : n;
      }
      function t9(e) {
        let t = Math.pow(e + 16, 3) / 1560896,
          r = t > tV ? t : e / tJ,
          n = r * (284517 * tX - 94839 * tZ),
          o = r * (838422 * tZ + 769860 * tY + 731718 * tX),
          a = r * (632260 * tZ - 126452 * tY),
          i = r * (284517 * tQ - 94839 * t0),
          s = r * (838422 * t0 + 769860 * tK + 731718 * tQ),
          c = r * (632260 * t0 - 126452 * tK),
          l = r * (284517 * t1 - 94839 * t5),
          u = r * (838422 * t5 + 769860 * t2 + 731718 * t1),
          h = r * (632260 * t5 - 126452 * t2);
        return {
          r0s: n / a,
          r0i: (o * e) / a,
          r1s: n / (a + 126452),
          r1i: ((o - 769860) * e) / (a + 126452),
          g0s: i / c,
          g0i: (s * e) / c,
          g1s: i / (c + 126452),
          g1i: ((s - 769860) * e) / (c + 126452),
          b0s: l / h,
          b0i: (u * e) / h,
          b1s: l / (h + 126452),
          b1i: ((u - 769860) * e) / (h + 126452),
        };
      }
      function t4(e, t) {
        let r = (t / 360) * Math.PI * 2;
        return Math.min(
          t6(e.r0s, e.r0i, r),
          t6(e.r1s, e.r1i, r),
          t6(e.g0s, e.g0i, r),
          t6(e.g1s, e.g1i, r),
          t6(e.b0s, e.b0i, r),
          t6(e.b1s, e.b1i, r),
        );
      }
      var t3 = new N({
        id: "hsluv",
        name: "HSLuv",
        coords: {
          h: { refRange: [0, 360], type: "angle", name: "Hue" },
          s: { range: [0, 100], name: "Saturation" },
          l: { range: [0, 100], name: "Lightness" },
        },
        base: tG,
        gamutSpace: ts,
        fromBase(e) {
          let t,
            [r, n, o] = [l(e[0]), l(e[1]), l(e[2])];
          return (
            r > 99.9999999
              ? ((t = 0), (r = 100))
              : r < 1e-8
                ? ((t = 0), (r = 0))
                : (t = (n / t4(t9(r), o)) * 100),
            [o, t, r]
          );
        },
        toBase(e) {
          let t,
            [r, n, o] = [l(e[0]), l(e[1]), l(e[2])];
          return (
            o > 99.9999999
              ? ((o = 100), (t = 0))
              : o < 1e-8
                ? ((o = 0), (t = 0))
                : (t = (t4(t9(o), r) / 100) * n),
            [o, t, r]
          );
        },
        formats: {
          color: {
            id: "--hsluv",
            coords: [
              "<number> | <angle>",
              "<percentage> | <number>",
              "<percentage> | <number>",
            ],
          },
        },
      });
      function t8(e, t) {
        return Math.abs(t) / Math.sqrt(Math.pow(e, 2) + 1);
      }
      function t7(e) {
        return Math.min(
          t8(e.r0s, e.r0i),
          t8(e.r1s, e.r1i),
          t8(e.g0s, e.g0i),
          t8(e.g1s, e.g1i),
          t8(e.b0s, e.b0i),
          t8(e.b1s, e.b1i),
        );
      }
      tr[0][0],
        tr[0][1],
        tr[0][2],
        tr[1][0],
        tr[1][1],
        tr[1][2],
        tr[2][0],
        tr[2][1],
        tr[2][2];
      var re = new N({
        id: "hpluv",
        name: "HPLuv",
        coords: {
          h: { refRange: [0, 360], type: "angle", name: "Hue" },
          s: { range: [0, 100], name: "Saturation" },
          l: { range: [0, 100], name: "Lightness" },
        },
        base: tG,
        gamutSpace: "self",
        fromBase(e) {
          let t,
            [r, n, o] = [l(e[0]), l(e[1]), l(e[2])];
          return (
            r > 99.9999999
              ? ((t = 0), (r = 100))
              : r < 1e-8
                ? ((t = 0), (r = 0))
                : (t = (n / t7(t9(r))) * 100),
            [o, t, r]
          );
        },
        toBase(e) {
          let t,
            [r, n, o] = [l(e[0]), l(e[1]), l(e[2])];
          return (
            o > 99.9999999
              ? ((o = 100), (t = 0))
              : o < 1e-8
                ? ((o = 0), (t = 0))
                : (t = (t7(t9(o)) / 100) * n),
            [o, t, r]
          );
        },
        formats: {
          color: {
            id: "--hpluv",
            coords: [
              "<number> | <angle>",
              "<percentage> | <number>",
              "<percentage> | <number>",
            ],
          },
        },
      });
      let rt = 2610 / 16384,
        rr = 16384 / 2610,
        rn = 32 / 2523;
      var ro = new O({
          id: "rec2100pq",
          cssId: "rec2100-pq",
          name: "REC.2100-PQ",
          base: e7,
          toBase: (e) =>
            e.map(function (e) {
              return (
                (1e4 *
                  (Math.max(e ** rn - 0.8359375, 0) /
                    (18.8515625 - 18.6875 * e ** rn)) **
                    rr) /
                203
              );
            }),
          fromBase: (e) =>
            e.map(function (e) {
              let t = Math.max((203 * e) / 1e4, 0);
              return (
                ((0.8359375 + 18.8515625 * t ** rt) /
                  (1 + 18.6875 * t ** rt)) **
                78.84375
              );
            }),
        }),
        ra = new O({
          id: "rec2100hlg",
          cssId: "rec2100-hlg",
          name: "REC.2100-HLG",
          referred: "scene",
          base: e7,
          toBase: (e) =>
            e.map(function (e) {
              return e <= 0.5
                ? (e ** 2 / 3) * 3.7743
                : ((Math.exp((e - 0.55991073) / 0.17883277) + 0.28466892) /
                    12) *
                    3.7743;
            }),
          fromBase: (e) =>
            e.map(function (e) {
              return (e /= 3.7743) <= 1 / 12
                ? Math.sqrt(3 * e)
                : 0.17883277 * Math.log(12 * e - 0.28466892) + 0.55991073;
            }),
        });
      let ri = {};
      function rs({ id: e, toCone_M: t, fromCone_M: r }) {
        ri[e] = arguments[0];
      }
      function rc(e, t, r = "Bradford") {
        let n = ri[r],
          [a, i, s] = o(n.toCone_M, e),
          [c, l, u] = o(n.toCone_M, t),
          h = o(
            [
              [c / a, 0, 0],
              [0, l / i, 0],
              [0, 0, u / s],
            ],
            n.toCone_M,
          );
        return o(n.fromCone_M, h);
      }
      C.add("chromatic-adaptation-start", (e) => {
        e.options.method && (e.M = rc(e.W1, e.W2, e.options.method));
      }),
        C.add("chromatic-adaptation-end", (e) => {
          e.M || (e.M = rc(e.W1, e.W2, e.options.method));
        }),
        rs({
          id: "von Kries",
          toCone_M: [
            [0.40024, 0.7076, -0.08081],
            [-0.2263, 1.16532, 0.0457],
            [0, 0, 0.91822],
          ],
          fromCone_M: [
            [1.8599363874558397, -1.1293816185800916, 0.21989740959619328],
            [0.3611914362417676, 0.6388124632850422, -6370596838649899e-21],
            [0, 0, 1.0890636230968613],
          ],
        }),
        rs({
          id: "Bradford",
          toCone_M: [
            [0.8951, 0.2664, -0.1614],
            [-0.7502, 1.7135, 0.0367],
            [0.0389, -0.0685, 1.0296],
          ],
          fromCone_M: [
            [0.9869929054667121, -0.14705425642099013, 0.15996265166373122],
            [0.4323052697233945, 0.5183602715367774, 0.049291228212855594],
            [-0.00852866457517732, 0.04004282165408486, 0.96848669578755],
          ],
        }),
        rs({
          id: "CAT02",
          toCone_M: [
            [0.7328, 0.4296, -0.1624],
            [-0.7036, 1.6975, 0.0061],
            [0.003, 0.0136, 0.9834],
          ],
          fromCone_M: [
            [1.0961238208355142, -0.27886900021828726, 0.18274517938277307],
            [0.4543690419753592, 0.4735331543074117, 0.07209780371722911],
            [-0.009627608738429355, -0.00569803121611342, 1.0153256399545427],
          ],
        }),
        rs({
          id: "CAT16",
          toCone_M: [
            [0.401288, 0.650173, -0.051461],
            [-0.250268, 1.204414, 0.045854],
            [-0.002079, 0.048952, 0.953127],
          ],
          fromCone_M: [
            [1.862067855087233, -1.0112546305316845, 0.14918677544445172],
            [0.3875265432361372, 0.6214474419314753, -0.008973985167612521],
            [-0.01584149884933386, -0.03412293802851557, 1.0499644368778496],
          ],
        }),
        Object.assign(S, {
          A: [1.0985, 1, 0.35585],
          C: [0.98074, 1, 1.18232],
          D55: [0.95682, 1, 0.92149],
          D75: [0.94972, 1, 1.22638],
          E: [1, 1, 1],
          F2: [0.99186, 1, 0.67393],
          F7: [0.95041, 1, 1.08747],
          F11: [1.00962, 1, 0.6435],
        }),
        (S.ACES = [0.32168 / 0.33767, 1, 1.0088251843515859]);
      var rl = new O({
        id: "acescg",
        cssId: "--acescg",
        name: "ACEScg",
        coords: {
          r: { range: [0, 65504], name: "Red" },
          g: { range: [0, 65504], name: "Green" },
          b: { range: [0, 65504], name: "Blue" },
        },
        referred: "scene",
        white: S.ACES,
        toXYZ_M: [
          [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
          [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
          [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971],
        ],
        fromXYZ_M: [
          [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
          [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
          [0.011721894328375376, -0.008284441996237409, 0.9883948585390215],
        ],
      });
      let ru = (Math.log2(65504) + 9.72) / 17.52;
      var rh = Object.freeze({
        __proto__: null,
        A98RGB: tB,
        A98RGB_Linear: tN,
        ACEScc: new O({
          id: "acescc",
          cssId: "--acescc",
          name: "ACEScc",
          coords: {
            r: { range: [-0.35828683, ru], name: "Red" },
            g: { range: [-0.35828683, ru], name: "Green" },
            b: { range: [-0.35828683, ru], name: "Blue" },
          },
          referred: "scene",
          base: rl,
          toBase(e) {
            let t = (9.72 - 15) / 17.52;
            return e.map(function (e) {
              return e <= t
                ? (2 ** (17.52 * e - 9.72) - 152587890625e-16) * 2
                : e < ru
                  ? 2 ** (17.52 * e - 9.72)
                  : 65504;
            });
          },
          fromBase: (e) =>
            e.map(function (e) {
              return e <= 0
                ? (Math.log2(152587890625e-16) + 9.72) / 17.52
                : e < 152587890625e-16
                  ? (Math.log2(152587890625e-16 + 0.5 * e) + 9.72) / 17.52
                  : (Math.log2(e) + 9.72) / 17.52;
            }),
        }),
        ACEScg: rl,
        CAM16_JMh: eV,
        HCT: eK,
        HPLuv: re,
        HSL: tT,
        HSLuv: t3,
        HSV: tk,
        HWB: tP,
        ICTCP: eT,
        JzCzHz: ew,
        Jzazbz: ey,
        LCH: J,
        LCHuv: tG,
        Lab: G,
        Lab_D65: t_,
        Luv: tH,
        OKLCH: tD,
        OKLab: eo,
        P3: tc,
        P3_Linear: tt,
        ProPhoto: tz,
        ProPhoto_Linear: tj,
        REC_2020: te,
        REC_2020_Linear: e7,
        REC_2100_HLG: ra,
        REC_2100_PQ: ro,
        XYZ_ABS_D65: eu,
        XYZ_D50: U,
        XYZ_D65: j,
        sRGB: ts,
        sRGB_Linear: tn,
      });
      class rf {
        constructor(...e) {
          let t, r, n, o;
          1 === e.length && (t = P(e[0])),
            t
              ? ((r = t.space || t.spaceId), (n = t.coords), (o = t.alpha))
              : ([r, n, o] = e),
            Object.defineProperty(this, "space", {
              value: N.get(r),
              writable: !1,
              enumerable: !0,
              configurable: !0,
            }),
            (this.coords = n ? n.slice() : [0, 0, 0]),
            (this.alpha = o > 1 || void 0 === o ? 1 : o < 0 ? 0 : o);
          for (let e = 0; e < this.coords.length; e++)
            "NaN" === this.coords[e] && (this.coords[e] = NaN);
          for (let e in this.space.coords)
            Object.defineProperty(this, e, {
              get: () => this.get(e),
              set: (t) => this.set(e, t),
            });
        }
        get spaceId() {
          return this.space.id;
        }
        clone() {
          return new rf(this.space, this.coords, this.alpha);
        }
        toJSON() {
          return {
            spaceId: this.spaceId,
            coords: this.coords,
            alpha: this.alpha,
          };
        }
        display(...e) {
          let t = (function (e, { space: t = R.display_space, ...r } = {}) {
            let o = e8(e, r);
            if (
              "u" < typeof CSS ||
              CSS.supports("color", o) ||
              !R.display_space
            )
              (o = new String(o)).color = e;
            else {
              let a = e;
              if (
                (e.coords.some(c) || c(e.alpha)) &&
                !(n ??= CSS.supports("color", "hsl(none 50% 50%)")) &&
                (((a = es(e)).coords = a.coords.map(l)),
                (a.alpha = l(a.alpha)),
                (o = e8(a, r)),
                CSS.supports("color", o))
              )
                return ((o = new String(o)).color = a), o;
              (o = new String(e8((a = e3(a, t)), r))).color = a;
            }
            return o;
          })(this, ...e);
          return (t.color = new rf(t.color)), t;
        }
        static get(e, ...t) {
          return e instanceof rf ? e : new rf(e, ...t);
        }
        static defineFunction(e, t, r = t) {
          let { instance: n = !0, returns: o } = r,
            a = function (...e) {
              let r = t(...e);
              if ("color" === o) r = rf.get(r);
              else if ("function<color>" === o) {
                let e = r;
                Object.assign(
                  (r = function (...t) {
                    let r = e(...t);
                    return rf.get(r);
                  }),
                  e,
                );
              } else "array<color>" === o && (r = r.map((e) => rf.get(e)));
              return r;
            };
          e in rf || (rf[e] = a),
            n &&
              (rf.prototype[e] = function (...e) {
                return a(this, ...e);
              });
        }
        static defineFunctions(e) {
          for (let t in e) rf.defineFunction(t, e[t], e[t]);
        }
        static extend(e) {
          if (e.register) e.register(rf);
          else for (let t in e) rf.defineFunction(t, e[t]);
        }
      }
      for (let e of (rf.defineFunctions({
        get: z,
        getAll: L,
        set: $,
        setAll: D,
        to: e3,
        equals: function (e, t) {
          return (
            (e = P(e)),
            (t = P(t)),
            e.space === t.space &&
              e.alpha === t.alpha &&
              e.coords.every((e, r) => e === t.coords[r])
          );
        },
        inGamut: ei,
        toGamut: e6,
        distance: ec,
        toString: e8,
      }),
      Object.assign(rf, {
        util: x,
        hooks: C,
        WHITES: S,
        Space: N,
        spaces: N.registry,
        parse: k,
        defaults: R,
      }),
      Object.keys(rh)))
        N.register(rh[e]);
      for (let e in N.registry) rd(e, N.registry[e]);
      function rd(e, t) {
        let r = e.replace(/-/g, "_");
        Object.defineProperty(rf.prototype, r, {
          get() {
            let r = this.getAll(e);
            return "u" < typeof Proxy
              ? r
              : new Proxy(r, {
                  has: (e, r) => {
                    try {
                      return N.resolveCoord([t, r]), !0;
                    } catch (e) {}
                    return Reflect.has(e, r);
                  },
                  get: (e, r, n) => {
                    if (r && "symbol" != typeof r && !(r in e)) {
                      let { index: n } = N.resolveCoord([t, r]);
                      if (n >= 0) return e[n];
                    }
                    return Reflect.get(e, r, n);
                  },
                  set: (r, n, o, a) => {
                    if ((n && "symbol" != typeof n && !(n in r)) || n >= 0) {
                      let { index: a } = N.resolveCoord([t, n]);
                      if (a >= 0) return (r[a] = o), this.setAll(e, r), !0;
                    }
                    return Reflect.set(r, n, o, a);
                  },
                });
          },
          set(t) {
            this.setAll(e, t);
          },
          configurable: !0,
          enumerable: !0,
        });
      }
      C.add("colorspace-init-end", (e) => {
        rd(e.id, e),
          e.aliases?.forEach((t) => {
            rd(t, e);
          });
      }),
        rf.extend(e2),
        rf.extend({ deltaE: tx }),
        Object.assign(rf, { deltaEMethods: e2 }),
        rf.extend(tC),
        rf.extend({
          contrast: function (e, t, r = {}) {
            a(r) && (r = { algorithm: r });
            let { algorithm: n, ...o } = r;
            if (!n) {
              let e = Object.keys(ty)
                .map((e) => e.replace(/^contrast/, ""))
                .join(", ");
              throw TypeError(
                `contrast() function needs a contrast algorithm. Please specify one of: ${e}`,
              );
            }
            for (let r in ((e = P(e)), (t = P(t)), ty))
              if ("contrast" + n.toLowerCase() === r.toLowerCase())
                return ty[r](e, t, o);
            throw TypeError(`Unknown contrast algorithm: ${n}`);
          },
        }),
        rf.extend(tM),
        rf.extend(th),
        rf.extend(tI),
        rf.extend(ty);
    },
  },
]);
//# sourceMappingURL=164633.307a19ede2a64ab1.js.map
