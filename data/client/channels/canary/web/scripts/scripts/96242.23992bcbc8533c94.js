"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96242"],
  {
    85526(e, n) {
      (n.byteLength = function (e) {
        var n = o(e),
          t = n[0],
          a = n[1];
        return ((t + a) * 3) / 4 - a;
      }),
        (n.toByteArray = function (e) {
          var n,
            t,
            i = o(e),
            u = i[0],
            s = i[1],
            l = new r(((u + s) * 3) / 4 - s),
            d = 0,
            c = s > 0 ? u - 4 : u;
          for (t = 0; t < c; t += 4)
            (n =
              (a[e.charCodeAt(t)] << 18) |
              (a[e.charCodeAt(t + 1)] << 12) |
              (a[e.charCodeAt(t + 2)] << 6) |
              a[e.charCodeAt(t + 3)]),
              (l[d++] = (n >> 16) & 255),
              (l[d++] = (n >> 8) & 255),
              (l[d++] = 255 & n);
          return (
            2 === s &&
              ((n = (a[e.charCodeAt(t)] << 2) | (a[e.charCodeAt(t + 1)] >> 4)),
              (l[d++] = 255 & n)),
            1 === s &&
              ((n =
                (a[e.charCodeAt(t)] << 10) |
                (a[e.charCodeAt(t + 1)] << 4) |
                (a[e.charCodeAt(t + 2)] >> 2)),
              (l[d++] = (n >> 8) & 255),
              (l[d++] = 255 & n)),
            l
          );
        }),
        (n.fromByteArray = function (e) {
          for (
            var n, a = e.length, r = a % 3, i = [], u = 0, s = a - r;
            u < s;
            u += 16383
          )
            i.push(
              (function (e, n, a) {
                for (var r, i = [], u = n; u < a; u += 3)
                  (r =
                    ((e[u] << 16) & 0xff0000) +
                    ((e[u + 1] << 8) & 65280) +
                    (255 & e[u + 2])),
                    i.push(
                      t[(r >> 18) & 63] +
                        t[(r >> 12) & 63] +
                        t[(r >> 6) & 63] +
                        t[63 & r],
                    );
                return i.join("");
              })(e, u, u + 16383 > s ? s : u + 16383),
            );
          return (
            1 === r
              ? i.push(t[(n = e[a - 1]) >> 2] + t[(n << 4) & 63] + "==")
              : 2 === r &&
                i.push(
                  t[(n = (e[a - 2] << 8) + e[a - 1]) >> 10] +
                    t[(n >> 4) & 63] +
                    t[(n << 2) & 63] +
                    "=",
                ),
            i.join("")
          );
        });
      for (
        var t = [],
          a = [],
          r = "u" > typeof Uint8Array ? Uint8Array : Array,
          i =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          u = 0,
          s = i.length;
        u < s;
        ++u
      )
        (t[u] = i[u]), (a[i.charCodeAt(u)] = u);
      function o(e) {
        var n = e.length;
        if (n % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var t = e.indexOf("=");
        -1 === t && (t = n);
        var a = t === n ? 0 : 4 - (t % 4);
        return [t, a];
      }
      (a[45] = 62), (a[95] = 63);
    },
    816885(e, n, t) {
      t.d(n, { b: () => a });
      function a(e, n, t, a) {
        var r = t ? t.call(a, e, n) : void 0;
        if (void 0 !== r) return !!r;
        if (e === n) return !0;
        if ("object" != typeof e || !e || "object" != typeof n || !n) return !1;
        var i = Object.keys(e),
          u = Object.keys(n);
        if (i.length !== u.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(n), o = 0;
          o < i.length;
          o++
        ) {
          var l = i[o];
          if (!s(l)) return !1;
          var d = e[l],
            c = n[l];
          if (
            !1 === (r = t ? t.call(a, d, c, l) : void 0) ||
            (void 0 === r && d !== c)
          )
            return !1;
        }
        return !0;
      }
    },
    806424(e, n, t) {
      t.d(n, { j: () => u });
      var a = t(218436),
        r = t(87515);
      function i(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
        return a;
      }
      function u(e, n, t) {
        var u, s, o, l, d, c;
        return (
          (u =
            e ||
            function () {
              return {};
            }),
          (s = function () {
            return t.reconnect();
          }),
          (d = (l =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((o = (0, r.F)(n, u, s))) ||
            (function (e) {
              var n,
                t,
                a =
                  null == e
                    ? null
                    : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != a) {
                var r = [],
                  i = !0,
                  u = !1;
                try {
                  for (
                    a = a.call(e);
                    !(i = (n = a.next()).done) &&
                    (r.push(n.value), 2 !== r.length);
                    i = !0
                  );
                } catch (e) {
                  (u = !0), (t = e);
                } finally {
                  try {
                    i || null == a.return || a.return();
                  } finally {
                    if (u) throw t;
                  }
                }
                return r;
              }
            })(o) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return i(e, 2);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return i(e, 2);
              }
            })(o) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })())[0]),
          (c = l[1]),
          (0, a.E)(
            function () {
              var e = n.getHandlerId();
              if (null != e)
                return n.subscribeToStateChange(c, { handlerIds: [e] });
            },
            [n, c],
          ),
          d
        );
      }
    },
    312742(e, n, t) {
      t.d(n, { i: () => g });
      var a = t(212246),
        r = t(218436),
        i = t(64700);
      function u(e) {
        return (u =
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
      function s(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var o = (function () {
          var e;
          function n(e, t, a) {
            if (!(this instanceof n))
              throw TypeError("Cannot call a class as a function");
            s(this, "spec", void 0),
              s(this, "monitor", void 0),
              s(this, "connector", void 0),
              (this.spec = e),
              (this.monitor = t),
              (this.connector = a);
          }
          return (
            (e = [
              {
                key: "beginDrag",
                value: function () {
                  var e,
                    n = this.spec,
                    t = this.monitor;
                  return null !=
                    (e =
                      "object" === u(n.item)
                        ? n.item
                        : "function" == typeof n.item
                          ? n.item(t)
                          : {})
                    ? e
                    : null;
                },
              },
              {
                key: "canDrag",
                value: function () {
                  var e = this.spec,
                    n = this.monitor;
                  return "boolean" == typeof e.canDrag
                    ? e.canDrag
                    : "function" != typeof e.canDrag || e.canDrag(n);
                },
              },
              {
                key: "isDragging",
                value: function (e, n) {
                  var t = this.spec,
                    a = this.monitor,
                    r = t.isDragging;
                  return r ? r(a) : n === e.getSourceId();
                },
              },
              {
                key: "endDrag",
                value: function () {
                  var e = this.spec,
                    n = this.monitor,
                    t = this.connector,
                    a = e.end;
                  a && a(n.getItem(), n), t.reconnect();
                },
              },
            ]),
            (function (e, n) {
              for (var t = 0; t < n.length; t++) {
                var a = n[t];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  "value" in a && (a.writable = !0),
                  Object.defineProperty(e, a.key, a);
              }
            })(n.prototype, e),
            n
          );
        })(),
        l = t(190334),
        d = t(321733);
      function c(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
        return a;
      }
      var _ = t(55166),
        f = t(394886),
        y = t(541163),
        h = t(806424);
      function g(e, n) {
        var t,
          u,
          s,
          g,
          m,
          w,
          p,
          b,
          v,
          S = (0, _.I)(e, n);
        (0, d.V)(
          !S.begin,
          "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
        );
        var C =
            ((t = (0, l.u)()),
            (0, i.useMemo)(
              function () {
                return new f.G(t);
              },
              [t],
            )),
          M =
            ((u = S.options),
            (s = S.previewOptions),
            (g = (0, l.u)()),
            (m = (0, i.useMemo)(
              function () {
                return new y.b(g.getBackend());
              },
              [g],
            )),
            (0, r.E)(
              function () {
                return (
                  (m.dragSourceOptions = u || null),
                  m.reconnect(),
                  function () {
                    return m.disconnectDragSource();
                  }
                );
              },
              [m, u],
            ),
            (0, r.E)(
              function () {
                return (
                  (m.dragPreviewOptions = s || null),
                  m.reconnect(),
                  function () {
                    return m.disconnectDragPreview();
                  }
                );
              },
              [m, s],
            ),
            m);
        return (
          (w = (0, l.u)()),
          (p = (0, i.useMemo)(
            function () {
              return new o(S, C, M);
            },
            [C, M],
          )),
          (0, i.useEffect)(
            function () {
              p.spec = S;
            },
            [S],
          ),
          (b = p),
          (v = (0, i.useMemo)(
            function () {
              var e = S.type;
              return (0, d.V)(null != e, "spec.type must be defined"), e;
            },
            [S],
          )),
          (0, r.E)(
            function () {
              if (null != v) {
                var e,
                  n =
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })((e = (0, a.V)(v, b, w))) ||
                    (function (e) {
                      var n,
                        t,
                        a =
                          null == e
                            ? null
                            : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                              e["@@iterator"];
                      if (null != a) {
                        var r = [],
                          i = !0,
                          u = !1;
                        try {
                          for (
                            a = a.call(e);
                            !(i = (n = a.next()).done) &&
                            (r.push(n.value), 2 !== r.length);
                            i = !0
                          );
                        } catch (e) {
                          (u = !0), (t = e);
                        } finally {
                          try {
                            i || null == a.return || a.return();
                          } finally {
                            if (u) throw t;
                          }
                        }
                        return r;
                      }
                    })(e) ||
                    (function (e) {
                      if (e) {
                        if ("string" == typeof e) return c(e, 2);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if (
                          ("Object" === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                          "Map" === n || "Set" === n)
                        )
                          return Array.from(e);
                        if (
                          "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return c(e, 2);
                      }
                    })(e) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })(),
                  t = n[0],
                  r = n[1];
                return C.receiveHandlerId(t), M.receiveHandlerId(t), r;
              }
            },
            [w, C, M, b, v],
          ),
          [
            (0, h.j)(S.collect, C, M),
            (0, i.useMemo)(
              function () {
                return M.hooks.dragSource();
              },
              [M],
            ),
            (0, i.useMemo)(
              function () {
                return M.hooks.dragPreview();
              },
              [M],
            ),
          ]
        );
      }
    },
    295868(e, n, t) {
      t.d(n, { H: () => h });
      var a = t(212246),
        r = t(190334),
        i = t(218436),
        u = t(321733),
        s = t(64700);
      function o(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var l = (function () {
        var e;
        function n(e, t) {
          if (!(this instanceof n))
            throw TypeError("Cannot call a class as a function");
          o(this, "spec", void 0),
            o(this, "monitor", void 0),
            (this.spec = e),
            (this.monitor = t);
        }
        return (
          (e = [
            {
              key: "canDrop",
              value: function () {
                var e = this.spec,
                  n = this.monitor;
                return !e.canDrop || e.canDrop(n.getItem(), n);
              },
            },
            {
              key: "hover",
              value: function () {
                var e = this.spec,
                  n = this.monitor;
                e.hover && e.hover(n.getItem(), n);
              },
            },
            {
              key: "drop",
              value: function () {
                var e = this.spec,
                  n = this.monitor;
                if (e.drop) return e.drop(n.getItem(), n);
              },
            },
          ]),
          (function (e, n) {
            for (var t = 0; t < n.length; t++) {
              var a = n[t];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          })(n.prototype, e),
          n
        );
      })();
      function d(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
        return a;
      }
      var c = t(55166),
        _ = t(162551),
        f = t(848575),
        y = t(806424);
      function h(e, n) {
        var t,
          o,
          h,
          g,
          m,
          w,
          p,
          b,
          v,
          S = (0, c.I)(e, n),
          C =
            ((t = (0, r.u)()),
            (0, s.useMemo)(
              function () {
                return new _.b(t);
              },
              [t],
            )),
          M =
            ((o = S.options),
            (h = (0, r.u)()),
            (g = (0, s.useMemo)(
              function () {
                return new f.P(h.getBackend());
              },
              [h],
            )),
            (0, i.E)(
              function () {
                return (
                  (g.dropTargetOptions = o || null),
                  g.reconnect(),
                  function () {
                    return g.disconnectDropTarget();
                  }
                );
              },
              [o],
            ),
            g);
        return (
          (m = (0, r.u)()),
          (w = (0, s.useMemo)(
            function () {
              return new l(S, C);
            },
            [C],
          )),
          (0, s.useEffect)(
            function () {
              w.spec = S;
            },
            [S],
          ),
          (p = w),
          (b = S.accept),
          (v = (0, s.useMemo)(
            function () {
              return (
                (0, u.V)(null != S.accept, "accept must be defined"),
                Array.isArray(b) ? b : [b]
              );
            },
            [b],
          )),
          (0, i.E)(
            function () {
              var e,
                n =
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })((e = (0, a.l)(v, p, m))) ||
                  (function (e) {
                    var n,
                      t,
                      a =
                        null == e
                          ? null
                          : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                            e["@@iterator"];
                    if (null != a) {
                      var r = [],
                        i = !0,
                        u = !1;
                      try {
                        for (
                          a = a.call(e);
                          !(i = (n = a.next()).done) &&
                          (r.push(n.value), 2 !== r.length);
                          i = !0
                        );
                      } catch (e) {
                        (u = !0), (t = e);
                      } finally {
                        try {
                          i || null == a.return || a.return();
                        } finally {
                          if (u) throw t;
                        }
                      }
                      return r;
                    }
                  })(e) ||
                  (function (e) {
                    if (e) {
                      if ("string" == typeof e) return d(e, 2);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(e);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return d(e, 2);
                    }
                  })(e) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })(),
                t = n[0],
                r = n[1];
              return C.receiveHandlerId(t), M.receiveHandlerId(t), r;
            },
            [
              m,
              C,
              p,
              M,
              v
                .map(function (e) {
                  return e.toString();
                })
                .join("|"),
            ],
          ),
          [
            (0, y.j)(S.collect, C, M),
            (0, s.useMemo)(
              function () {
                return M.hooks.dropTarget();
              },
              [M],
            ),
          ]
        );
      }
    },
    55166(e, n, t) {
      t.d(n, { I: () => i });
      var a = t(64700);
      function r(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
        return a;
      }
      function i(e, n) {
        var t,
          i =
            (function (e) {
              if (Array.isArray(e)) return r(e);
            })((t = n || [])) ||
            (function (e) {
              if (
                ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(t) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return r(e, void 0);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return r(e, void 0);
              }
            })(t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })();
        return (
          null == n && "function" != typeof e && i.push(e),
          (0, a.useMemo)(function () {
            return "function" == typeof e ? e() : e;
          }, i)
        );
      }
    },
    394886(e, n, t) {
      t.d(n, { G: () => s });
      var a = t(321733);
      function r(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var i = !1,
        u = !1,
        s = (function () {
          var e;
          function n(e) {
            if (!(this instanceof n))
              throw TypeError("Cannot call a class as a function");
            r(this, "internalMonitor", void 0),
              r(this, "sourceId", null),
              (this.internalMonitor = e.getMonitor());
          }
          return (
            (e = [
              {
                key: "receiveHandlerId",
                value: function (e) {
                  this.sourceId = e;
                },
              },
              {
                key: "getHandlerId",
                value: function () {
                  return this.sourceId;
                },
              },
              {
                key: "canDrag",
                value: function () {
                  (0, a.V)(
                    !i,
                    "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                  );
                  try {
                    return (
                      (i = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    i = !1;
                  }
                },
              },
              {
                key: "isDragging",
                value: function () {
                  if (!this.sourceId) return !1;
                  (0, a.V)(
                    !u,
                    "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                  );
                  try {
                    return (
                      (u = !0),
                      this.internalMonitor.isDraggingSource(this.sourceId)
                    );
                  } finally {
                    u = !1;
                  }
                },
              },
              {
                key: "subscribeToStateChange",
                value: function (e, n) {
                  return this.internalMonitor.subscribeToStateChange(e, n);
                },
              },
              {
                key: "isDraggingSource",
                value: function (e) {
                  return this.internalMonitor.isDraggingSource(e);
                },
              },
              {
                key: "isOverTarget",
                value: function (e, n) {
                  return this.internalMonitor.isOverTarget(e, n);
                },
              },
              {
                key: "getTargetIds",
                value: function () {
                  return this.internalMonitor.getTargetIds();
                },
              },
              {
                key: "isSourcePublic",
                value: function () {
                  return this.internalMonitor.isSourcePublic();
                },
              },
              {
                key: "getSourceId",
                value: function () {
                  return this.internalMonitor.getSourceId();
                },
              },
              {
                key: "subscribeToOffsetChange",
                value: function (e) {
                  return this.internalMonitor.subscribeToOffsetChange(e);
                },
              },
              {
                key: "canDragSource",
                value: function (e) {
                  return this.internalMonitor.canDragSource(e);
                },
              },
              {
                key: "canDropOnTarget",
                value: function (e) {
                  return this.internalMonitor.canDropOnTarget(e);
                },
              },
              {
                key: "getItemType",
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: "getItem",
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: "didDrop",
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]),
            (function (e, n) {
              for (var t = 0; t < n.length; t++) {
                var a = n[t];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  "value" in a && (a.writable = !0),
                  Object.defineProperty(e, a.key, a);
              }
            })(n.prototype, e),
            n
          );
        })();
    },
    162551(e, n, t) {
      t.d(n, { b: () => u });
      var a = t(321733);
      function r(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var i = !1,
        u = (function () {
          var e;
          function n(e) {
            if (!(this instanceof n))
              throw TypeError("Cannot call a class as a function");
            r(this, "internalMonitor", void 0),
              r(this, "targetId", null),
              (this.internalMonitor = e.getMonitor());
          }
          return (
            (e = [
              {
                key: "receiveHandlerId",
                value: function (e) {
                  this.targetId = e;
                },
              },
              {
                key: "getHandlerId",
                value: function () {
                  return this.targetId;
                },
              },
              {
                key: "subscribeToStateChange",
                value: function (e, n) {
                  return this.internalMonitor.subscribeToStateChange(e, n);
                },
              },
              {
                key: "canDrop",
                value: function () {
                  if (!this.targetId) return !1;
                  (0, a.V)(
                    !i,
                    "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
                  );
                  try {
                    return (
                      (i = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    i = !1;
                  }
                },
              },
              {
                key: "isOver",
                value: function (e) {
                  return (
                    !!this.targetId &&
                    this.internalMonitor.isOverTarget(this.targetId, e)
                  );
                },
              },
              {
                key: "getItemType",
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: "getItem",
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: "didDrop",
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]),
            (function (e, n) {
              for (var t = 0; t < n.length; t++) {
                var a = n[t];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  "value" in a && (a.writable = !0),
                  Object.defineProperty(e, a.key, a);
              }
            })(n.prototype, e),
            n
          );
        })();
    },
    541163(e, n, t) {
      t.d(n, { b: () => s });
      var a = t(611886),
        r = t(251874),
        i = t(816885);
      function u(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var s = (function () {
        var e;
        function n(e) {
          var t = this;
          if (!(this instanceof n))
            throw TypeError("Cannot call a class as a function");
          u(
            this,
            "hooks",
            (0, a.i)({
              dragSource: function (e, n) {
                t.clearDragSource(),
                  (t.dragSourceOptions = n || null),
                  (0, r.i)(e) ? (t.dragSourceRef = e) : (t.dragSourceNode = e),
                  t.reconnectDragSource();
              },
              dragPreview: function (e, n) {
                t.clearDragPreview(),
                  (t.dragPreviewOptions = n || null),
                  (0, r.i)(e)
                    ? (t.dragPreviewRef = e)
                    : (t.dragPreviewNode = e),
                  t.reconnectDragPreview();
              },
            }),
          ),
            u(this, "handlerId", null),
            u(this, "dragSourceRef", null),
            u(this, "dragSourceNode", void 0),
            u(this, "dragSourceOptionsInternal", null),
            u(this, "dragSourceUnsubscribe", void 0),
            u(this, "dragPreviewRef", null),
            u(this, "dragPreviewNode", void 0),
            u(this, "dragPreviewOptionsInternal", null),
            u(this, "dragPreviewUnsubscribe", void 0),
            u(this, "lastConnectedHandlerId", null),
            u(this, "lastConnectedDragSource", null),
            u(this, "lastConnectedDragSourceOptions", null),
            u(this, "lastConnectedDragPreview", null),
            u(this, "lastConnectedDragPreviewOptions", null),
            u(this, "backend", void 0),
            (this.backend = e);
        }
        return (
          (e = [
            {
              key: "receiveHandlerId",
              value: function (e) {
                this.handlerId !== e &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: "connectTarget",
              get: function () {
                return this.dragSource;
              },
            },
            {
              key: "dragSourceOptions",
              get: function () {
                return this.dragSourceOptionsInternal;
              },
              set: function (e) {
                this.dragSourceOptionsInternal = e;
              },
            },
            {
              key: "dragPreviewOptions",
              get: function () {
                return this.dragPreviewOptionsInternal;
              },
              set: function (e) {
                this.dragPreviewOptionsInternal = e;
              },
            },
            {
              key: "reconnect",
              value: function () {
                this.reconnectDragSource(), this.reconnectDragPreview();
              },
            },
            {
              key: "reconnectDragSource",
              value: function () {
                var e = this.dragSource,
                  n =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragSourceChange() ||
                    this.didDragSourceOptionsChange();
                if ((n && this.disconnectDragSource(), this.handlerId)) {
                  if (!e) {
                    this.lastConnectedDragSource = e;
                    return;
                  }
                  n &&
                    ((this.lastConnectedHandlerId = this.handlerId),
                    (this.lastConnectedDragSource = e),
                    (this.lastConnectedDragSourceOptions =
                      this.dragSourceOptions),
                    (this.dragSourceUnsubscribe =
                      this.backend.connectDragSource(
                        this.handlerId,
                        e,
                        this.dragSourceOptions,
                      )));
                }
              },
            },
            {
              key: "reconnectDragPreview",
              value: function () {
                var e = this.dragPreview,
                  n =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragPreviewChange() ||
                    this.didDragPreviewOptionsChange();
                if ((n && this.disconnectDragPreview(), this.handlerId)) {
                  if (!e) {
                    this.lastConnectedDragPreview = e;
                    return;
                  }
                  n &&
                    ((this.lastConnectedHandlerId = this.handlerId),
                    (this.lastConnectedDragPreview = e),
                    (this.lastConnectedDragPreviewOptions =
                      this.dragPreviewOptions),
                    (this.dragPreviewUnsubscribe =
                      this.backend.connectDragPreview(
                        this.handlerId,
                        e,
                        this.dragPreviewOptions,
                      )));
                }
              },
            },
            {
              key: "didHandlerIdChange",
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: "didConnectedDragSourceChange",
              value: function () {
                return this.lastConnectedDragSource !== this.dragSource;
              },
            },
            {
              key: "didConnectedDragPreviewChange",
              value: function () {
                return this.lastConnectedDragPreview !== this.dragPreview;
              },
            },
            {
              key: "didDragSourceOptionsChange",
              value: function () {
                return !(0, i.b)(
                  this.lastConnectedDragSourceOptions,
                  this.dragSourceOptions,
                );
              },
            },
            {
              key: "didDragPreviewOptionsChange",
              value: function () {
                return !(0, i.b)(
                  this.lastConnectedDragPreviewOptions,
                  this.dragPreviewOptions,
                );
              },
            },
            {
              key: "disconnectDragSource",
              value: function () {
                this.dragSourceUnsubscribe &&
                  (this.dragSourceUnsubscribe(),
                  (this.dragSourceUnsubscribe = void 0));
              },
            },
            {
              key: "disconnectDragPreview",
              value: function () {
                this.dragPreviewUnsubscribe &&
                  (this.dragPreviewUnsubscribe(),
                  (this.dragPreviewUnsubscribe = void 0),
                  (this.dragPreviewNode = null),
                  (this.dragPreviewRef = null));
              },
            },
            {
              key: "dragSource",
              get: function () {
                return (
                  this.dragSourceNode ||
                  (this.dragSourceRef && this.dragSourceRef.current)
                );
              },
            },
            {
              key: "dragPreview",
              get: function () {
                return (
                  this.dragPreviewNode ||
                  (this.dragPreviewRef && this.dragPreviewRef.current)
                );
              },
            },
            {
              key: "clearDragSource",
              value: function () {
                (this.dragSourceNode = null), (this.dragSourceRef = null);
              },
            },
            {
              key: "clearDragPreview",
              value: function () {
                (this.dragPreviewNode = null), (this.dragPreviewRef = null);
              },
            },
          ]),
          (function (e, n) {
            for (var t = 0; t < n.length; t++) {
              var a = n[t];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          })(n.prototype, e),
          n
        );
      })();
    },
    848575(e, n, t) {
      t.d(n, { P: () => s });
      var a = t(816885),
        r = t(611886),
        i = t(251874);
      function u(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var s = (function () {
        var e;
        function n(e) {
          var t = this;
          if (!(this instanceof n))
            throw TypeError("Cannot call a class as a function");
          u(
            this,
            "hooks",
            (0, r.i)({
              dropTarget: function (e, n) {
                t.clearDropTarget(),
                  (t.dropTargetOptions = n),
                  (0, i.i)(e) ? (t.dropTargetRef = e) : (t.dropTargetNode = e),
                  t.reconnect();
              },
            }),
          ),
            u(this, "handlerId", null),
            u(this, "dropTargetRef", null),
            u(this, "dropTargetNode", void 0),
            u(this, "dropTargetOptionsInternal", null),
            u(this, "unsubscribeDropTarget", void 0),
            u(this, "lastConnectedHandlerId", null),
            u(this, "lastConnectedDropTarget", null),
            u(this, "lastConnectedDropTargetOptions", null),
            u(this, "backend", void 0),
            (this.backend = e);
        }
        return (
          (e = [
            {
              key: "connectTarget",
              get: function () {
                return this.dropTarget;
              },
            },
            {
              key: "reconnect",
              value: function () {
                var e =
                  this.didHandlerIdChange() ||
                  this.didDropTargetChange() ||
                  this.didOptionsChange();
                e && this.disconnectDropTarget();
                var n = this.dropTarget;
                if (this.handlerId) {
                  if (!n) {
                    this.lastConnectedDropTarget = n;
                    return;
                  }
                  e &&
                    ((this.lastConnectedHandlerId = this.handlerId),
                    (this.lastConnectedDropTarget = n),
                    (this.lastConnectedDropTargetOptions =
                      this.dropTargetOptions),
                    (this.unsubscribeDropTarget =
                      this.backend.connectDropTarget(
                        this.handlerId,
                        n,
                        this.dropTargetOptions,
                      )));
                }
              },
            },
            {
              key: "receiveHandlerId",
              value: function (e) {
                e !== this.handlerId &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: "dropTargetOptions",
              get: function () {
                return this.dropTargetOptionsInternal;
              },
              set: function (e) {
                this.dropTargetOptionsInternal = e;
              },
            },
            {
              key: "didHandlerIdChange",
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: "didDropTargetChange",
              value: function () {
                return this.lastConnectedDropTarget !== this.dropTarget;
              },
            },
            {
              key: "didOptionsChange",
              value: function () {
                return !(0, a.b)(
                  this.lastConnectedDropTargetOptions,
                  this.dropTargetOptions,
                );
              },
            },
            {
              key: "disconnectDropTarget",
              value: function () {
                this.unsubscribeDropTarget &&
                  (this.unsubscribeDropTarget(),
                  (this.unsubscribeDropTarget = void 0));
              },
            },
            {
              key: "dropTarget",
              get: function () {
                return (
                  this.dropTargetNode ||
                  (this.dropTargetRef && this.dropTargetRef.current)
                );
              },
            },
            {
              key: "clearDropTarget",
              value: function () {
                (this.dropTargetRef = null), (this.dropTargetNode = null);
              },
            },
          ]),
          (function (e, n) {
            for (var t = 0; t < n.length; t++) {
              var a = n[t];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          })(n.prototype, e),
          n
        );
      })();
    },
    251874(e, n, t) {
      function a(e) {
        return (a =
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
      function r(e) {
        return (
          null !== e &&
          "object" === a(e) &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      t.d(n, { i: () => r });
    },
    212246(e, n, t) {
      function a(e, n, t) {
        var a = t.getRegistry(),
          r = a.addTarget(e, n);
        return [
          r,
          function () {
            return a.removeTarget(r);
          },
        ];
      }
      function r(e, n, t) {
        var a = t.getRegistry(),
          r = a.addSource(e, n);
        return [
          r,
          function () {
            return a.removeSource(r);
          },
        ];
      }
      t.d(n, { V: () => r, l: () => a });
    },
    611886(e, n, t) {
      t.d(n, { i: () => i });
      var a = t(321733),
        r = t(64700);
      function i(e) {
        var n = {};
        return (
          Object.keys(e).forEach(function (t) {
            var i = e[t];
            if (t.endsWith("Ref")) n[t] = e[t];
            else {
              var s = function () {
                var e,
                  n,
                  t,
                  s =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  o =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                if (!(0, r.isValidElement)(s)) return i(s, o), s;
                if ("string" != typeof s.type) {
                  var l = s.type.displayName || s.type.name || "the component";
                  throw Error(
                    "Only native element nodes can now be passed to React DnD connectors." +
                      "You can either wrap ".concat(
                        l,
                        " into a <div>, or turn it into a ",
                      ) +
                      "drag source or a drop target itself.",
                  );
                }
                return (
                  (e = s),
                  (n = o
                    ? function (e) {
                        return i(e, o);
                      }
                    : i),
                  (t = e.ref),
                  ((0, a.V)(
                    "string" != typeof t,
                    "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs",
                  ),
                  t)
                    ? (0, r.cloneElement)(e, {
                        ref: function (e) {
                          u(t, e), u(n, e);
                        },
                      })
                    : (0, r.cloneElement)(e, { ref: n })
                );
              };
              n[t] = function () {
                return s;
              };
            }
          }),
          n
        );
      }
      function u(e, n) {
        "function" == typeof e ? e(n) : (e.current = n);
      }
    },
    495142(e, n, t) {
      var a;
      let r, i;
      function u(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`positive integer expected, not ${e}`);
      }
      function s(e, ...n) {
        if (
          !(
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (n.length > 0 && !n.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${n}, not of length=${e.length}`,
          );
      }
      function o(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        u(e.outputLen), u(e.blockLen);
      }
      function l(e, n = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (n && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      t.d(n, { Q: () => P });
      let d = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        c = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        _ = (e, n) => (e << (32 - n)) | (e >>> n),
        f = (e, n) => (e << n) | ((e >>> (32 - n)) >>> 0),
        y = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
        h = (e) =>
          ((e << 24) & 0xff000000) |
          ((e << 8) & 0xff0000) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255);
      function g(e) {
        for (let n = 0; n < e.length; n++) e[n] = h(e[n]);
      }
      let m = async () => {};
      async function w(e, n, t) {
        let a = Date.now();
        for (let r = 0; r < e; r++) {
          t(r);
          let e = Date.now() - a;
          (e >= 0 && e < n) || (await m(), (a += e));
        }
      }
      function p(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          s(e),
          e
        );
      }
      class b {
        clone() {
          return this._cloneInto();
        }
      }
      let v = {}.toString;
      function S(e, n) {
        if (void 0 !== n && "[object Object]" !== v.call(n))
          throw Error("Options should be object or undefined");
        return Object.assign(e, n);
      }
      let C = (e, n, t) => (e & n) ^ (~e & t),
        M = (e, n, t) => (e & n) ^ (e & t) ^ (n & t);
      class k extends b {
        constructor(e, n, t, a) {
          super(),
            (this.blockLen = e),
            (this.outputLen = n),
            (this.padOffset = t),
            (this.isLE = a),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = c(this.buffer));
        }
        update(e) {
          l(this);
          let { view: n, buffer: t, blockLen: a } = this,
            r = (e = p(e)).length;
          for (let i = 0; i < r; ) {
            let u = Math.min(a - this.pos, r - i);
            if (u === a) {
              let n = c(e);
              for (; a <= r - i; i += a) this.process(n, i);
              continue;
            }
            t.set(e.subarray(i, i + u), this.pos),
              (this.pos += u),
              (i += u),
              this.pos === a && (this.process(n, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          l(this);
          s(e);
          let n = this.outputLen;
          if (e.length < n)
            throw Error(
              `digestInto() expects output buffer of length at least ${n}`,
            );
          this.finished = !0;
          let { buffer: t, view: a, blockLen: r, isLE: i } = this,
            { pos: u } = this;
          (t[u++] = 128),
            this.buffer.subarray(u).fill(0),
            this.padOffset > r - u && (this.process(a, 0), (u = 0));
          for (let e = u; e < r; e++) t[e] = 0;
          !(function (e, n, t, a) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(n, t, a);
            let r = BigInt(32),
              i = BigInt(0xffffffff),
              u = Number((t >> r) & i),
              s = Number(t & i),
              o = 4 * !!a,
              l = 4 * !a;
            e.setUint32(n + o, u, a), e.setUint32(n + l, s, a);
          })(a, r - 8, BigInt(8 * this.length), i),
            this.process(a, 0);
          let o = c(e),
            d = this.outputLen;
          if (d % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let _ = d / 4,
            f = this.get();
          if (_ > f.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < _; e++) o.setUint32(4 * e, f[e], i);
        }
        digest() {
          let { buffer: e, outputLen: n } = this;
          this.digestInto(e);
          let t = e.slice(0, n);
          return this.destroy(), t;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: n,
            buffer: t,
            length: a,
            finished: r,
            destroyed: i,
            pos: u,
          } = this;
          return (
            (e.length = a),
            (e.pos = u),
            (e.finished = r),
            (e.destroyed = i),
            a % n && e.buffer.set(t),
            e
          );
        }
      }
      let I = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        T = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        A = new Uint32Array(64);
      class L extends k {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | T[0]),
            (this.B = 0 | T[1]),
            (this.C = 0 | T[2]),
            (this.D = 0 | T[3]),
            (this.E = 0 | T[4]),
            (this.F = 0 | T[5]),
            (this.G = 0 | T[6]),
            (this.H = 0 | T[7]);
        }
        get() {
          let { A: e, B: n, C: t, D: a, E: r, F: i, G: u, H: s } = this;
          return [e, n, t, a, r, i, u, s];
        }
        set(e, n, t, a, r, i, u, s) {
          (this.A = 0 | e),
            (this.B = 0 | n),
            (this.C = 0 | t),
            (this.D = 0 | a),
            (this.E = 0 | r),
            (this.F = 0 | i),
            (this.G = 0 | u),
            (this.H = 0 | s);
        }
        process(e, n) {
          for (let t = 0; t < 16; t++, n += 4) A[t] = e.getUint32(n, !1);
          for (let e = 16; e < 64; e++) {
            let n = A[e - 15],
              t = A[e - 2],
              a = _(n, 7) ^ _(n, 18) ^ (n >>> 3),
              r = _(t, 17) ^ _(t, 19) ^ (t >>> 10);
            A[e] = (r + A[e - 7] + a + A[e - 16]) | 0;
          }
          let { A: t, B: a, C: r, D: i, E: u, F: s, G: o, H: l } = this;
          for (let e = 0; e < 64; e++) {
            let n =
                (l +
                  (_(u, 6) ^ _(u, 11) ^ _(u, 25)) +
                  C(u, s, o) +
                  I[e] +
                  A[e]) |
                0,
              d = ((_(t, 2) ^ _(t, 13) ^ _(t, 22)) + M(t, a, r)) | 0;
            (l = o),
              (o = s),
              (s = u),
              (u = (i + n) | 0),
              (i = r),
              (r = a),
              (a = t),
              (t = (n + d) | 0);
          }
          (t = (t + this.A) | 0),
            (a = (a + this.B) | 0),
            (r = (r + this.C) | 0),
            (i = (i + this.D) | 0),
            (u = (u + this.E) | 0),
            (s = (s + this.F) | 0),
            (o = (o + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(t, a, r, i, u, s, o, l);
        }
        roundClean() {
          A.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let D =
        ((a = () => new L()),
        ((r = (e) => a().update(p(e)).digest()).outputLen = (i =
          a()).outputLen),
        (r.blockLen = i.blockLen),
        (r.create = () => a()),
        r);
      class E extends b {
        constructor(e, n) {
          super(), (this.finished = !1), (this.destroyed = !1), o(e);
          const t = p(n);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          const a = this.blockLen,
            r = new Uint8Array(a);
          r.set(t.length > a ? e.create().update(t).digest() : t);
          for (let e = 0; e < r.length; e++) r[e] ^= 54;
          this.iHash.update(r), (this.oHash = e.create());
          for (let e = 0; e < r.length; e++) r[e] ^= 106;
          this.oHash.update(r), r.fill(0);
        }
        update(e) {
          return l(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          l(this),
            s(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: n,
            iHash: t,
            finished: a,
            destroyed: r,
            blockLen: i,
            outputLen: u,
          } = this;
          return (
            (e.finished = a),
            (e.destroyed = r),
            (e.blockLen = i),
            (e.outputLen = u),
            (e.oHash = n._cloneInto(e.oHash)),
            (e.iHash = t._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let O = (e, n, t) => new E(e, n).update(t).digest();
      function G(e, n, t, a) {
        var r;
        let i,
          {
            c: s,
            dkLen: l,
            DK: d,
            PRF: _,
            PRFSalt: f,
          } = (function (e, n, t, a) {
            o(e);
            let {
              c: r,
              dkLen: i,
              asyncTick: s,
            } = S({ dkLen: 32, asyncTick: 10 }, a);
            if ((u(r), u(i), u(s), r < 1))
              throw Error("PBKDF2: iterations (c) should be >= 1");
            let l = p(n),
              d = p(t),
              c = new Uint8Array(i),
              _ = O.create(e, l),
              f = _._cloneInto().update(d);
            return { c: r, dkLen: i, asyncTick: s, DK: c, PRF: _, PRFSalt: f };
          })(e, n, t, a),
          y = new Uint8Array(4),
          h = c(y),
          g = new Uint8Array(_.outputLen);
        for (let e = 1, n = 0; n < l; e++, n += _.outputLen) {
          let t = d.subarray(n, n + _.outputLen);
          h.setInt32(0, e, !1),
            (i = f._cloneInto(i)).update(y).digestInto(g),
            t.set(g.subarray(0, t.length));
          for (let e = 1; e < s; e++) {
            _._cloneInto(i).update(g).digestInto(g);
            for (let e = 0; e < t.length; e++) t[e] ^= g[e];
          }
        }
        return (
          (r = i), _.destroy(), f.destroy(), r && r.destroy(), g.fill(0), d
        );
      }
      function x(e, n, t, a, r, i) {
        let u = e[n++] ^ t[a++],
          s = e[n++] ^ t[a++],
          o = e[n++] ^ t[a++],
          l = e[n++] ^ t[a++],
          d = e[n++] ^ t[a++],
          c = e[n++] ^ t[a++],
          _ = e[n++] ^ t[a++],
          y = e[n++] ^ t[a++],
          h = e[n++] ^ t[a++],
          g = e[n++] ^ t[a++],
          m = e[n++] ^ t[a++],
          w = e[n++] ^ t[a++],
          p = e[n++] ^ t[a++],
          b = e[n++] ^ t[a++],
          v = e[n++] ^ t[a++],
          S = e[n++] ^ t[a++],
          C = u,
          M = s,
          k = o,
          I = l,
          T = d,
          A = c,
          L = _,
          D = y,
          E = h,
          O = g,
          G = m,
          x = w,
          B = p,
          P = b,
          N = v,
          H = S;
        for (let e = 0; e < 8; e += 2)
          (T ^= f((C + B) | 0, 7)),
            (E ^= f((T + C) | 0, 9)),
            (B ^= f((E + T) | 0, 13)),
            (C ^= f((B + E) | 0, 18)),
            (O ^= f((A + M) | 0, 7)),
            (P ^= f((O + A) | 0, 9)),
            (M ^= f((P + O) | 0, 13)),
            (A ^= f((M + P) | 0, 18)),
            (N ^= f((G + L) | 0, 7)),
            (k ^= f((N + G) | 0, 9)),
            (L ^= f((k + N) | 0, 13)),
            (G ^= f((L + k) | 0, 18)),
            (I ^= f((H + x) | 0, 7)),
            (D ^= f((I + H) | 0, 9)),
            (x ^= f((D + I) | 0, 13)),
            (H ^= f((x + D) | 0, 18)),
            (M ^= f((C + I) | 0, 7)),
            (k ^= f((M + C) | 0, 9)),
            (I ^= f((k + M) | 0, 13)),
            (C ^= f((I + k) | 0, 18)),
            (L ^= f((A + T) | 0, 7)),
            (D ^= f((L + A) | 0, 9)),
            (T ^= f((D + L) | 0, 13)),
            (A ^= f((T + D) | 0, 18)),
            (x ^= f((G + O) | 0, 7)),
            (E ^= f((x + G) | 0, 9)),
            (O ^= f((E + x) | 0, 13)),
            (G ^= f((O + E) | 0, 18)),
            (B ^= f((H + N) | 0, 7)),
            (P ^= f((B + H) | 0, 9)),
            (N ^= f((P + B) | 0, 13)),
            (H ^= f((N + P) | 0, 18));
        (r[i++] = (u + C) | 0),
          (r[i++] = (s + M) | 0),
          (r[i++] = (o + k) | 0),
          (r[i++] = (l + I) | 0),
          (r[i++] = (d + T) | 0),
          (r[i++] = (c + A) | 0),
          (r[i++] = (_ + L) | 0),
          (r[i++] = (y + D) | 0),
          (r[i++] = (h + E) | 0),
          (r[i++] = (g + O) | 0),
          (r[i++] = (m + G) | 0),
          (r[i++] = (w + x) | 0),
          (r[i++] = (p + B) | 0),
          (r[i++] = (b + P) | 0),
          (r[i++] = (v + N) | 0),
          (r[i++] = (S + H) | 0);
      }
      function B(e, n, t, a, r) {
        let i = a + 0,
          u = a + 16 * r;
        for (let a = 0; a < 16; a++) t[u + a] = e[n + (2 * r - 1) * 16 + a];
        for (let a = 0; a < r; a++, i += 16, n += 16)
          x(t, u, e, n, t, i), a > 0 && (u += 16), x(t, i, e, (n += 16), t, u);
      }
      async function P(e, n, t) {
        let a,
          {
            N: r,
            r: i,
            p: s,
            dkLen: o,
            blockSize32: l,
            V: c,
            B32: _,
            B: f,
            tmp: h,
            blockMixCb: m,
            asyncTick: p,
          } = (function (e, n, t) {
            let {
              N: a,
              r,
              p: i,
              dkLen: s,
              asyncTick: o,
              maxmem: l,
              onProgress: c,
            } = S({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, t);
            if (
              (u(a),
              u(r),
              u(i),
              u(s),
              u(o),
              u(l),
              void 0 !== c && "function" != typeof c)
            )
              throw Error("progressCb should be function");
            let _ = 128 * r,
              f = _ / 4;
            if (a <= 1 || (a & (a - 1)) != 0 || a > 0x100000000)
              throw Error(
                "Scrypt: N must be larger than 1, a power of 2, and less than 2^32",
              );
            if (i < 0 || i > ((0x100000000 - 1) * 32) / _)
              throw Error(
                "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)",
              );
            if (s < 0 || s > (0x100000000 - 1) * 32)
              throw Error(
                "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32",
              );
            let y = _ * (a + i);
            if (y > l)
              throw Error(
                `Scrypt: parameters too large, ${y} (128 * r * (N + p)) > ${l} (maxmem)`,
              );
            let h = G(D, e, n, { c: 1, dkLen: _ * i }),
              g = d(h),
              m = d(new Uint8Array(_ * a)),
              w = d(new Uint8Array(_)),
              p = () => {};
            if (c) {
              let e = 2 * a * i,
                n = Math.max(Math.floor(e / 1e4), 1),
                t = 0;
              p = () => {
                t++, c && (!(t % n) || t === e) && c(t / e);
              };
            }
            return {
              N: a,
              r,
              p: i,
              dkLen: s,
              blockSize32: f,
              V: m,
              B32: g,
              B: h,
              tmp: w,
              blockMixCb: p,
              asyncTick: o,
            };
          })(e, n, t);
        y || g(_);
        for (let e = 0; e < s; e++) {
          let n = l * e;
          for (let e = 0; e < l; e++) c[e] = _[n + e];
          let t = 0;
          await w(r - 1, p, () => {
            B(c, t, c, (t += l), i), m();
          }),
            B(c, (r - 1) * l, _, n, i),
            m(),
            await w(r, p, () => {
              let e = _[n + l - 16] % r;
              for (let t = 0; t < l; t++) h[t] = _[n + t] ^ c[e * l + t];
              B(h, 0, _, n, i), m();
            });
        }
        return (
          y || g(_),
          (a = G(D, e, f, { c: 1, dkLen: o })),
          f.fill(0),
          c.fill(0),
          h.fill(0),
          a
        );
      }
      O.create = (e, n) => new E(e, n);
    },
    120330(e, n, t) {
      t.d(n, {
        BT: () => s,
        Wt: () => l,
        bf: () => u,
        xC: () =>
          function e(n) {
            if ("number" == typeof n) return new a.W(n);
            if ("bigint" == typeof n) return new a.W(n.toString());
            if (
              ((0, i.V1)(
                "symbol" != typeof n,
                "Symbol is not supported",
                TypeError,
              ),
              void 0 === n)
            )
              return new a.W(NaN);
            if (null === n || 0 === n) return r;
            if (!0 === n) return new a.W(1);
            if ("string" == typeof n)
              try {
                return new a.W(n);
              } catch {
                return new a.W(NaN);
              }
            (0, i.V1)("object" == typeof n, "object expected", TypeError);
            let t = (function (e, n) {
              if ("object" == typeof e && null != e) {
                let t,
                  a = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                if (void 0 !== a) {
                  void 0 === n
                    ? (t = "default")
                    : "string" === n
                      ? (t = "string")
                      : ((0, i.V1)(
                          "number" === n,
                          'preferredType must be "string" or "number"',
                        ),
                        (t = "number"));
                  let r = a.call(e, t);
                  if ("object" != typeof r) return r;
                  throw TypeError("Cannot convert exotic object to primitive.");
                }
                for (let t of (void 0 === n && (n = "number"),
                "string" === n
                  ? ["toString", "valueOf"]
                  : ["valueOf", "toString"])) {
                  let n = e[t];
                  if (o(n)) {
                    let t = n.call(e);
                    if ("object" != typeof t) return t;
                  }
                }
                throw TypeError("Cannot convert object to primitive value");
              }
              return e;
            })(n, "number");
            return (
              (0, i.V1)("object" != typeof t, "object expected", TypeError),
              e(t)
            );
          },
      });
      var a = t(162929);
      new a.W(10);
      let r = new a.W(0);
      new a.W(-0);
      var i = t(243399);
      function u(e) {
        if ("symbol" == typeof e)
          throw TypeError("Cannot convert a Symbol value to a string");
        return String(e);
      }
      function s(e) {
        if (null == e)
          throw TypeError("undefined/null cannot be converted to object");
        return Object(e);
      }
      function o(e) {
        return "function" == typeof e;
      }
      function l(e, n, t) {
        if (!o(e)) return !1;
        if (t?.boundTargetFunction) return n instanceof t?.boundTargetFunction;
        if ("object" != typeof n) return !1;
        let a = e.prototype;
        if ("object" != typeof a)
          throw TypeError(
            "OrdinaryHasInstance called on an object with an invalid prototype property.",
          );
        return Object.prototype.isPrototypeOf.call(a, n);
      }
    },
    842830(e, n, t) {
      t.d(n, { N: () => a });
      function a(e) {
        return Intl.getCanonicalLocales(e);
      }
    },
    97626(e, n, t) {
      t.d(n, { z: () => a });
      function a(e, n, t, a, r) {
        var i = e[n];
        if (void 0 === i) return r;
        let u = Number(i);
        if (isNaN(u) || u < t || u > a)
          throw RangeError(`${u} is outside of range [${t}, ${a}]`);
        return Math.floor(u);
      }
    },
    518375(e, n, t) {
      t.d(n, { W: () => r });
      var a = t(120330);
      function r(e, n, t, r, i) {
        if ("object" != typeof e) throw TypeError("Options must be an object");
        let u = e[n];
        if (void 0 !== u) {
          if ("boolean" !== t && "string" !== t)
            throw TypeError("invalid type");
          if (
            ("boolean" === t && (u = !!u),
            "string" === t && (u = (0, a.bf)(u)),
            void 0 !== r && !r.filter((e) => e == u).length)
          )
            throw RangeError(`${u} is not within ${r.join(", ")}`);
          return u;
        }
        return i;
      }
    },
    29685(e, n, t) {
      t.d(n, { U: () => s });
      var a = t(183580),
        r = t(26232),
        i = t(120330),
        u = t(518375);
      function s(e, n, t) {
        return (
          void 0 !== t &&
            ((t = (0, i.BT)(t)),
            (0, u.W)(
              t,
              "localeMatcher",
              "string",
              ["lookup", "best fit"],
              "best fit",
            )),
          (function (e, n) {
            let t = [];
            for (let i of n) {
              let n = i.replace(r.KB, ""),
                u = (0, a.q)(e, n);
              u && t.push(u);
            }
            return t;
          })(Array.from(e), n)
        );
      }
    },
    243399(e, n, t) {
      t.d(n, { A4: () => u, Nt: () => i, V1: () => r });
      var a = t(315847);
      function r(e, n, t = Error) {
        if (!e) throw new t(n);
      }
      let i = (0, a.B)((...e) => new Intl.NumberFormat(...e), {
        strategy: a.W.variadic,
      });
      (0, a.B)((...e) => new Intl.PluralRules(...e), {
        strategy: a.W.variadic,
      }),
        (0, a.B)((...e) => new Intl.Locale(...e), { strategy: a.W.variadic });
      let u = (0, a.B)((...e) => new Intl.ListFormat(...e), {
        strategy: a.W.variadic,
      });
    },
    315847(e, n, t) {
      function a(e, n) {
        let t = n && n.cache ? n.cache : o,
          a = n && n.serializer ? n.serializer : u;
        return (
          n && n.strategy
            ? n.strategy
            : function (e, n) {
                var t, a;
                let u = 1 === e.length ? r : i;
                return (
                  (t = n.cache.create()),
                  (a = n.serializer),
                  u.bind(this, e, t, a)
                );
              }
        )(e, { cache: t, serializer: a });
      }
      function r(e, n, t, a) {
        let r =
            null == a || "number" == typeof a || "boolean" == typeof a
              ? a
              : t(a),
          i = n.get(r);
        return void 0 === i && ((i = e.call(this, a)), n.set(r, i)), i;
      }
      function i(e, n, t) {
        let a = Array.prototype.slice.call(arguments, 3),
          r = t(a),
          i = n.get(r);
        return void 0 === i && ((i = e.apply(this, a)), n.set(r, i)), i;
      }
      t.d(n, { B: () => a, W: () => l });
      let u = function () {
        return JSON.stringify(arguments);
      };
      class s {
        cache;
        constructor() {
          this.cache = Object.create(null);
        }
        get(e) {
          return this.cache[e];
        }
        set(e, n) {
          this.cache[e] = n;
        }
      }
      let o = {
          create: function () {
            return new s();
          },
        },
        l = {
          variadic: function (e, n) {
            var t, a;
            return (
              (t = n.cache.create()), (a = n.serializer), i.bind(this, e, t, a)
            );
          },
          monadic: function (e, n) {
            var t, a;
            return (
              (t = n.cache.create()), (a = n.serializer), r.bind(this, e, t, a)
            );
          },
        };
    },
    439489(e, n, t) {
      t.d(n, { $: () => r });
      var a = t(518375);
      function r(e, n, t, r, i, u) {
        let s = (0, a.W)(n, e, "string", r, void 0),
          o = "always";
        void 0 === s &&
          ("digital" === t
            ? ("hours" !== e &&
                "minutes" !== e &&
                "seconds" !== e &&
                (o = "auto"),
              (s = i))
            : ((o = "auto"),
              (s = "numeric" === u || "2-digit" === u ? "numeric" : t)));
        let l = `${e}Display`,
          d = (0, a.W)(n, l, "string", ["always", "auto"], o);
        if ("numeric" === u || "2-digit" === u) {
          if ("numeric" !== s && "2-digit" !== s)
            throw RangeError("Can't mix numeric and non-numeric styles");
          if (
            (("minutes" === e || "seconds" === e) && (s = "2-digit"),
            "numeric" === s &&
              "always" === d &&
              ("milliseconds" === e ||
                "microseconds" === e ||
                "nanoseconds" === e))
          )
            throw RangeError(
              "Can't display milliseconds, microseconds, or nanoseconds in numeric format",
            );
        }
        return { style: s, display: d };
      }
    },
    369364(e, n, t) {
      t.d(n, { m: () => s });
      var a = t(243399),
        r = t(206311),
        i = t(411211),
        u = t(501974);
      function s(e, n) {
        let t = [],
          s = !1,
          o = !1,
          l = (0, u.n)(e),
          d = l.dataLocale,
          c = i.Y.localeData[d];
        if (!c) throw TypeError("Invalid locale");
        let _ = l.numberingSystem,
          f = c.digitalFormat[_];
        for (let e = 0; e < r.u.length && !s; e++) {
          let i = r.u[e],
            u = n[i.valueField],
            d = l[i.styleSlot],
            c = l[i.displaySlot],
            { unit: _, numberFormatUnit: y } = i,
            h = Object.create(null);
          ("seconds" === _ || "milliseconds" === _ || "microseconds" === _) &&
            "numeric" ===
              ("seconds" === _
                ? l.milliseconds
                : "milliseconds" === _
                  ? l.microseconds
                  : l.nanoseconds) &&
            ("seconds" === _
              ? (u +=
                  n.milliseconds / 1e3 +
                  n.microseconds / 1e6 +
                  n.nanoseconds / 1e9)
              : "milliseconds" === _
                ? (u += n.microseconds / 1e3 + n.nanoseconds / 1e6)
                : (u += n.nanoseconds / 1e3),
            void 0 === l.fractionalDigits
              ? ((h.maximumFractionDigits = 9), (h.minimumFractionDigits = 0))
              : ((h.maximumFractionDigits = l.fractionalDigits),
                (h.minimumFractionDigits = l.fractionalDigits)),
            (h.roundingMode = "trunc"),
            (s = !0));
          if (0 !== u || "auto" !== c) {
            let e;
            (h.numberingSystem = l.numberingSystem),
              "2-digit" === d && (h.minimumIntegerDigits = 2),
              "2-digit" !== d &&
                "numeric" !== d &&
                ((h.style = "unit"), (h.unit = y), (h.unitDisplay = d));
            let n = (0, a.Nt)(l.locale, h);
            o
              ? (e = t[t.length - 1]).push({ type: "literal", value: f })
              : (e = []),
              n.formatToParts(u).forEach(({ type: n, value: t }) => {
                e.push({ type: n, value: t, unit: y });
              }),
              o ||
                (("2-digit" === d || "numeric" === d) && (o = !0), t.push(e));
          } else o = !1;
        }
        let y = Object.create(null);
        y.type = "unit";
        let h = l.style;
        "digital" === h && (h = "short"), (y.style = h);
        let g = (0, a.A4)(l.locale, y),
          m = [];
        for (let e of t) {
          let n = "";
          for (let { value: t } of e) n += t;
          m.push(n);
        }
        let w = g.formatToParts(m),
          p = 0,
          b = t.length,
          v = [];
        for (let { type: e, value: n } of w)
          if ("element" === e) {
            for (let e of ((0, a.V1)(p < b, "Index out of bounds"), t[p]))
              v.push(e);
            p++;
          } else
            (0, a.V1)("literal" === e, "Type must be literal"),
              v.push({ type: "literal", value: n });
        return v;
      }
      t(632459);
    },
    727504(e, n, t) {
      t.d(n, { H: () => s }), t(632459);
      var a = t(243399),
        r = t(206311),
        i = t(120330);
      function u(e) {
        let n = (0, i.xC)(e);
        return (0, a.V1)(n.isInteger(), `${e} is not an integer`), n.toNumber();
      }
      function s(e) {
        if ("object" != typeof e) {
          if ("string" == typeof e) throw RangeError("Invalid duration format");
          throw TypeError("Invalid duration");
        }
        let n = {
          years: 0,
          months: 0,
          weeks: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
          microseconds: 0,
          nanoseconds: 0,
        };
        if (
          (void 0 !== e.days && (n.days = u(e.days)),
          void 0 !== e.hours && (n.hours = u(e.hours)),
          void 0 !== e.microseconds && (n.microseconds = u(e.microseconds)),
          void 0 !== e.milliseconds && (n.milliseconds = u(e.milliseconds)),
          void 0 !== e.minutes && (n.minutes = u(e.minutes)),
          void 0 !== e.months && (n.months = u(e.months)),
          void 0 !== e.nanoseconds && (n.nanoseconds = u(e.nanoseconds)),
          void 0 !== e.seconds && (n.seconds = u(e.seconds)),
          void 0 !== e.weeks && (n.weeks = u(e.weeks)),
          void 0 !== e.years && (n.years = u(e.years)),
          void 0 === e.years &&
            void 0 === e.months &&
            void 0 === e.weeks &&
            void 0 === e.days &&
            void 0 === e.hours &&
            void 0 === e.minutes &&
            void 0 === e.seconds &&
            void 0 === e.milliseconds &&
            void 0 === e.microseconds &&
            void 0 === e.nanoseconds)
        )
          throw TypeError("Invalid duration format");
        if (
          !(function (e) {
            let n = (function (e) {
              for (let n of r.B) {
                if (e[n] < 0) return -1;
                if (e[n] > 0) return 1;
              }
              return 0;
            })(e);
            for (let t of r.B) {
              let r = e[t];
              if (
                ((0, a.V1)(isFinite(Number(r)), `${t} is not finite`),
                (r < 0 && n > 0) || (r > 0 && n < 0))
              )
                return !1;
            }
            return !0;
          })(n)
        )
          throw RangeError("Invalid duration format");
        return n;
      }
    },
    206311(e, n, t) {
      t.d(n, { B: () => a, u: () => r }), t(632459);
      let a = [
          "years",
          "months",
          "weeks",
          "days",
          "hours",
          "minutes",
          "seconds",
          "milliseconds",
          "microseconds",
          "nanoseconds",
        ],
        r = [
          {
            valueField: "years",
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            numberFormatUnit: "year",
          },
          {
            valueField: "months",
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            numberFormatUnit: "month",
          },
          {
            valueField: "weeks",
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            numberFormatUnit: "week",
          },
          {
            valueField: "days",
            styleSlot: "days",
            displaySlot: "daysDisplay",
            unit: "days",
            numberFormatUnit: "day",
          },
          {
            valueField: "hours",
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            numberFormatUnit: "hour",
          },
          {
            valueField: "minutes",
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            numberFormatUnit: "minute",
          },
          {
            valueField: "seconds",
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            numberFormatUnit: "second",
          },
          {
            valueField: "milliseconds",
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            numberFormatUnit: "millisecond",
          },
          {
            valueField: "microseconds",
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            numberFormatUnit: "microsecond",
          },
          {
            valueField: "nanoseconds",
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            numberFormatUnit: "nanosecond",
          },
        ];
    },
    501974(e, n, t) {
      t.d(n, { n: () => r });
      let a = new WeakMap();
      function r(e) {
        let n = a.get(e);
        return n || ((n = Object.create(null)), a.set(e, n)), n;
      }
    },
    225441(e, n, t) {
      t.d(n, { P: () => a });
      let a = [
        "adlm",
        "ahom",
        "arab",
        "arabext",
        "armn",
        "armnlow",
        "bali",
        "beng",
        "bhks",
        "brah",
        "cakm",
        "cham",
        "cyrl",
        "deva",
        "diak",
        "ethi",
        "fullwide",
        "gara",
        "geor",
        "gong",
        "gonm",
        "grek",
        "greklow",
        "gujr",
        "gukh",
        "guru",
        "hanidays",
        "hanidec",
        "hans",
        "hansfin",
        "hant",
        "hantfin",
        "hebr",
        "hmng",
        "hmnp",
        "java",
        "jpan",
        "jpanfin",
        "jpanyear",
        "kali",
        "kawi",
        "khmr",
        "knda",
        "krai",
        "lana",
        "lanatham",
        "laoo",
        "latn",
        "lepc",
        "limb",
        "mathbold",
        "mathdbl",
        "mathmono",
        "mathsanb",
        "mathsans",
        "mlym",
        "modi",
        "mong",
        "mroo",
        "mtei",
        "mymr",
        "mymrepka",
        "mymrpao",
        "mymrshan",
        "mymrtlng",
        "nagm",
        "newa",
        "nkoo",
        "olck",
        "onao",
        "orya",
        "osma",
        "outlined",
        "rohg",
        "roman",
        "romanlow",
        "saur",
        "segment",
        "shrd",
        "sind",
        "sinh",
        "sora",
        "sund",
        "sunu",
        "takr",
        "talu",
        "taml",
        "tamldec",
        "telu",
        "thai",
        "tibt",
        "tirh",
        "tnsa",
        "tols",
        "vaii",
        "wara",
        "wcho",
      ];
    },
    762437(e, n, t) {
      t.d(n, { N: () => a });
      let a = {
        default: ":",
        localeData: {
          aa: { nu: ["latn"] },
          "aa-DJ": { nu: ["latn"] },
          "aa-ER": { nu: ["latn"] },
          ab: { nu: ["latn"] },
          af: { nu: ["latn"] },
          "af-NA": { nu: ["latn"] },
          agq: { nu: ["latn"] },
          ak: { nu: ["latn"] },
          am: { nu: ["latn"] },
          an: { nu: ["latn"] },
          ann: { nu: ["latn"] },
          apc: { nu: ["latn"] },
          ar: { nu: ["latn", "latn"] },
          "ar-AE": { nu: ["latn", "latn"] },
          "ar-BH": { nu: ["arab", "latn"] },
          "ar-DJ": { nu: ["arab", "latn"] },
          "ar-DZ": { nu: ["latn", "latn"] },
          "ar-EG": { nu: ["arab", "latn"] },
          "ar-EH": { nu: ["latn", "latn"] },
          "ar-ER": { nu: ["arab", "latn"] },
          "ar-IL": { nu: ["arab", "latn"] },
          "ar-IQ": { nu: ["arab", "latn"] },
          "ar-JO": { nu: ["arab", "latn"] },
          "ar-KM": { nu: ["arab", "latn"] },
          "ar-KW": { nu: ["arab", "latn"] },
          "ar-LB": { nu: ["arab", "latn"] },
          "ar-LY": { nu: ["latn", "latn"] },
          "ar-MA": { nu: ["latn", "latn"] },
          "ar-MR": { nu: ["arab", "latn"] },
          "ar-OM": { nu: ["arab", "latn"] },
          "ar-PS": { nu: ["arab", "latn"] },
          "ar-QA": { nu: ["arab", "latn"] },
          "ar-SA": { nu: ["arab", "latn"] },
          "ar-SD": { nu: ["arab", "latn"] },
          "ar-SO": { nu: ["arab", "latn"] },
          "ar-SS": { nu: ["arab", "latn"] },
          "ar-SY": { nu: ["arab", "latn"] },
          "ar-TD": { nu: ["arab", "latn"] },
          "ar-TN": { nu: ["latn", "latn"] },
          "ar-YE": { nu: ["arab", "latn"] },
          arn: { nu: ["latn"] },
          as: { nu: ["beng"] },
          asa: { nu: ["latn"] },
          ast: { nu: ["latn"] },
          az: { nu: ["latn"] },
          "az-Arab": { nu: ["arabext"] },
          "az-Arab-IQ": { nu: ["arabext"] },
          "az-Arab-TR": { nu: ["arabext"] },
          "az-Cyrl": { nu: ["latn"] },
          "az-Latn": { nu: ["latn"] },
          ba: { nu: ["latn"] },
          bal: { nu: ["latn"] },
          "bal-Arab": { nu: ["latn"] },
          "bal-Latn": { nu: ["latn"] },
          bas: { nu: ["latn"] },
          be: { nu: ["latn"] },
          "be-tarask": { nu: ["latn"] },
          bem: { nu: ["latn"] },
          bew: { nu: ["latn"] },
          bez: { nu: ["latn"] },
          bg: { nu: ["latn"] },
          bgc: { nu: ["deva"] },
          bgn: { nu: ["arabext"] },
          "bgn-AE": { nu: ["arabext"] },
          "bgn-AF": { nu: ["arabext"] },
          "bgn-IR": { nu: ["arabext"] },
          "bgn-OM": { nu: ["arabext"] },
          bho: { nu: ["deva"] },
          blo: { nu: ["latn"] },
          blt: { nu: ["latn"] },
          bm: { nu: ["latn"] },
          "bm-Nkoo": { nu: ["latn"] },
          bn: { nu: ["beng"] },
          "bn-IN": { nu: ["beng"] },
          bo: { nu: ["latn"] },
          "bo-IN": { nu: ["latn"] },
          bqi: { nu: ["latn"] },
          br: { nu: ["latn"] },
          brx: { nu: ["latn"] },
          bs: { nu: ["latn"] },
          "bs-Cyrl": { nu: ["latn"] },
          "bs-Latn": { nu: ["latn"] },
          bss: { nu: ["latn"] },
          bua: { nu: ["latn"] },
          byn: { nu: ["latn"] },
          ca: { nu: ["latn"] },
          "ca-AD": { nu: ["latn"] },
          "ca-ES-valencia": { nu: ["latn"] },
          "ca-FR": { nu: ["latn"] },
          "ca-IT": { nu: ["latn"] },
          cad: { nu: ["latn"] },
          cch: { nu: ["latn"] },
          ccp: { nu: ["cakm"] },
          "ccp-IN": { nu: ["cakm"] },
          ce: { nu: ["latn"] },
          ceb: { nu: ["latn"] },
          cgg: { nu: ["latn"] },
          cho: { nu: ["latn"] },
          chr: { nu: ["latn"] },
          cic: { nu: ["latn"] },
          ckb: { nu: ["arab"] },
          "ckb-IR": { nu: ["arab"] },
          co: { nu: ["latn"] },
          cop: { nu: ["latn"] },
          cs: { nu: ["latn"] },
          csw: { nu: ["latn"] },
          cu: { nu: ["latn"] },
          cv: { nu: ["latn"] },
          cy: { nu: ["latn"] },
          da: { nu: ["latn"], separator: { latn: "." } },
          "da-GL": { nu: ["latn"], separator: { latn: "." } },
          dav: { nu: ["latn"] },
          de: { nu: ["latn"] },
          "de-AT": { nu: ["latn"] },
          "de-BE": { nu: ["latn"] },
          "de-CH": { nu: ["latn"] },
          "de-IT": { nu: ["latn"] },
          "de-LI": { nu: ["latn"] },
          "de-LU": { nu: ["latn"] },
          dje: { nu: ["latn"] },
          doi: { nu: ["latn"] },
          dsb: { nu: ["latn"] },
          dua: { nu: ["latn"] },
          dv: { nu: ["latn"] },
          dyo: { nu: ["latn"] },
          dz: { nu: ["tibt"] },
          ebu: { nu: ["latn"] },
          ee: { nu: ["latn"] },
          "ee-TG": { nu: ["latn"] },
          el: { nu: ["latn"] },
          "el-CY": { nu: ["latn"] },
          "el-polyton": { nu: ["latn"] },
          en: { nu: ["latn"] },
          "en-001": { nu: ["latn"] },
          "en-150": { nu: ["latn"] },
          "en-AE": { nu: ["latn"] },
          "en-AG": { nu: ["latn"] },
          "en-AI": { nu: ["latn"] },
          "en-AS": { nu: ["latn"] },
          "en-AT": { nu: ["latn"] },
          "en-AU": { nu: ["latn"] },
          "en-BB": { nu: ["latn"] },
          "en-BE": { nu: ["latn"] },
          "en-BI": { nu: ["latn"] },
          "en-BM": { nu: ["latn"] },
          "en-BS": { nu: ["latn"] },
          "en-BW": { nu: ["latn"] },
          "en-BZ": { nu: ["latn"] },
          "en-CA": { nu: ["latn"] },
          "en-CC": { nu: ["latn"] },
          "en-CH": { nu: ["latn"] },
          "en-CK": { nu: ["latn"] },
          "en-CM": { nu: ["latn"] },
          "en-CX": { nu: ["latn"] },
          "en-CY": { nu: ["latn"] },
          "en-CZ": { nu: ["latn"] },
          "en-DE": { nu: ["latn"] },
          "en-DG": { nu: ["latn"] },
          "en-DK": { nu: ["latn"], separator: { latn: "." } },
          "en-DM": { nu: ["latn"] },
          "en-Dsrt": { nu: ["latn"] },
          "en-EE": { nu: ["latn"] },
          "en-ER": { nu: ["latn"] },
          "en-ES": { nu: ["latn"] },
          "en-FI": { nu: ["latn"], separator: { latn: "." } },
          "en-FJ": { nu: ["latn"] },
          "en-FK": { nu: ["latn"] },
          "en-FM": { nu: ["latn"] },
          "en-FR": { nu: ["latn"] },
          "en-GB": { nu: ["latn"] },
          "en-GD": { nu: ["latn"] },
          "en-GE": { nu: ["latn"] },
          "en-GG": { nu: ["latn"] },
          "en-GH": { nu: ["latn"] },
          "en-GI": { nu: ["latn"] },
          "en-GM": { nu: ["latn"] },
          "en-GS": { nu: ["latn"] },
          "en-GU": { nu: ["latn"] },
          "en-GY": { nu: ["latn"] },
          "en-HK": { nu: ["latn"] },
          "en-HU": { nu: ["latn"] },
          "en-ID": { nu: ["latn"] },
          "en-IE": { nu: ["latn"] },
          "en-IL": { nu: ["latn"] },
          "en-IM": { nu: ["latn"] },
          "en-IN": { nu: ["latn"] },
          "en-IO": { nu: ["latn"] },
          "en-IT": { nu: ["latn"] },
          "en-JE": { nu: ["latn"] },
          "en-JM": { nu: ["latn"] },
          "en-JP": { nu: ["latn"] },
          "en-KE": { nu: ["latn"] },
          "en-KI": { nu: ["latn"] },
          "en-KN": { nu: ["latn"] },
          "en-KY": { nu: ["latn"] },
          "en-LC": { nu: ["latn"] },
          "en-LR": { nu: ["latn"] },
          "en-LS": { nu: ["latn"] },
          "en-LT": { nu: ["latn"] },
          "en-LV": { nu: ["latn"] },
          "en-MG": { nu: ["latn"] },
          "en-MH": { nu: ["latn"] },
          "en-MO": { nu: ["latn"] },
          "en-MP": { nu: ["latn"] },
          "en-MS": { nu: ["latn"] },
          "en-MT": { nu: ["latn"] },
          "en-MU": { nu: ["latn"] },
          "en-MV": { nu: ["latn"] },
          "en-MW": { nu: ["latn"] },
          "en-MY": { nu: ["latn"] },
          "en-NA": { nu: ["latn"] },
          "en-NF": { nu: ["latn"] },
          "en-NG": { nu: ["latn"] },
          "en-NL": { nu: ["latn"] },
          "en-NO": { nu: ["latn"] },
          "en-NR": { nu: ["latn"] },
          "en-NU": { nu: ["latn"] },
          "en-NZ": { nu: ["latn"] },
          "en-PG": { nu: ["latn"] },
          "en-PH": { nu: ["latn"] },
          "en-PK": { nu: ["latn"] },
          "en-PL": { nu: ["latn"] },
          "en-PN": { nu: ["latn"] },
          "en-PR": { nu: ["latn"] },
          "en-PT": { nu: ["latn"] },
          "en-PW": { nu: ["latn"] },
          "en-RO": { nu: ["latn"] },
          "en-RW": { nu: ["latn"] },
          "en-SB": { nu: ["latn"] },
          "en-SC": { nu: ["latn"] },
          "en-SD": { nu: ["latn"] },
          "en-SE": { nu: ["latn"] },
          "en-SG": { nu: ["latn"] },
          "en-SH": { nu: ["latn"] },
          "en-SI": { nu: ["latn"] },
          "en-SK": { nu: ["latn"] },
          "en-SL": { nu: ["latn"] },
          "en-SS": { nu: ["latn"] },
          "en-SX": { nu: ["latn"] },
          "en-SZ": { nu: ["latn"] },
          "en-Shaw": { nu: ["latn"] },
          "en-TC": { nu: ["latn"] },
          "en-TK": { nu: ["latn"] },
          "en-TO": { nu: ["latn"] },
          "en-TT": { nu: ["latn"] },
          "en-TV": { nu: ["latn"] },
          "en-TZ": { nu: ["latn"] },
          "en-UA": { nu: ["latn"] },
          "en-UG": { nu: ["latn"] },
          "en-UM": { nu: ["latn"] },
          "en-VC": { nu: ["latn"] },
          "en-VG": { nu: ["latn"] },
          "en-VI": { nu: ["latn"] },
          "en-VU": { nu: ["latn"] },
          "en-WS": { nu: ["latn"] },
          "en-ZA": { nu: ["latn"] },
          "en-ZM": { nu: ["latn"] },
          "en-ZW": { nu: ["latn"] },
          eo: { nu: ["latn"] },
          es: { nu: ["latn"] },
          "es-419": { nu: ["latn"] },
          "es-AR": { nu: ["latn"] },
          "es-BO": { nu: ["latn"] },
          "es-BR": { nu: ["latn"] },
          "es-BZ": { nu: ["latn"] },
          "es-CL": { nu: ["latn"] },
          "es-CO": { nu: ["latn"] },
          "es-CR": { nu: ["latn"] },
          "es-CU": { nu: ["latn"] },
          "es-DO": { nu: ["latn"] },
          "es-EA": { nu: ["latn"] },
          "es-EC": { nu: ["latn"] },
          "es-GQ": { nu: ["latn"] },
          "es-GT": { nu: ["latn"] },
          "es-HN": { nu: ["latn"] },
          "es-IC": { nu: ["latn"] },
          "es-MX": { nu: ["latn"] },
          "es-NI": { nu: ["latn"] },
          "es-PA": { nu: ["latn"] },
          "es-PE": { nu: ["latn"] },
          "es-PH": { nu: ["latn"] },
          "es-PR": { nu: ["latn"] },
          "es-PY": { nu: ["latn"] },
          "es-SV": { nu: ["latn"] },
          "es-US": { nu: ["latn"] },
          "es-UY": { nu: ["latn"] },
          "es-VE": { nu: ["latn"] },
          et: { nu: ["latn"] },
          eu: { nu: ["latn"] },
          ewo: { nu: ["latn"] },
          fa: { nu: ["arabext"] },
          "fa-AF": { nu: ["arabext"] },
          ff: { nu: ["latn"] },
          "ff-Adlm": { nu: ["adlm"] },
          "ff-Adlm-BF": { nu: ["adlm"] },
          "ff-Adlm-CM": { nu: ["adlm"] },
          "ff-Adlm-GH": { nu: ["adlm"] },
          "ff-Adlm-GM": { nu: ["adlm"] },
          "ff-Adlm-GW": { nu: ["adlm"] },
          "ff-Adlm-LR": { nu: ["adlm"] },
          "ff-Adlm-MR": { nu: ["adlm"] },
          "ff-Adlm-NE": { nu: ["adlm"] },
          "ff-Adlm-NG": { nu: ["adlm"] },
          "ff-Adlm-SL": { nu: ["adlm"] },
          "ff-Adlm-SN": { nu: ["adlm"] },
          "ff-Latn": { nu: ["latn"] },
          "ff-Latn-BF": { nu: ["latn"] },
          "ff-Latn-CM": { nu: ["latn"] },
          "ff-Latn-GH": { nu: ["latn"] },
          "ff-Latn-GM": { nu: ["latn"] },
          "ff-Latn-GN": { nu: ["latn"] },
          "ff-Latn-GW": { nu: ["latn"] },
          "ff-Latn-LR": { nu: ["latn"] },
          "ff-Latn-MR": { nu: ["latn"] },
          "ff-Latn-NE": { nu: ["latn"] },
          "ff-Latn-NG": { nu: ["latn"] },
          "ff-Latn-SL": { nu: ["latn"] },
          fi: { nu: ["latn"], separator: { latn: "." } },
          fil: { nu: ["latn"] },
          fo: { nu: ["latn"] },
          "fo-DK": { nu: ["latn"] },
          fr: { nu: ["latn"] },
          "fr-BE": { nu: ["latn"] },
          "fr-BF": { nu: ["latn"] },
          "fr-BI": { nu: ["latn"] },
          "fr-BJ": { nu: ["latn"] },
          "fr-BL": { nu: ["latn"] },
          "fr-CA": { nu: ["latn"] },
          "fr-CD": { nu: ["latn"] },
          "fr-CF": { nu: ["latn"] },
          "fr-CG": { nu: ["latn"] },
          "fr-CH": { nu: ["latn"] },
          "fr-CI": { nu: ["latn"] },
          "fr-CM": { nu: ["latn"] },
          "fr-DJ": { nu: ["latn"] },
          "fr-DZ": { nu: ["latn"] },
          "fr-GA": { nu: ["latn"] },
          "fr-GF": { nu: ["latn"] },
          "fr-GN": { nu: ["latn"] },
          "fr-GP": { nu: ["latn"] },
          "fr-GQ": { nu: ["latn"] },
          "fr-HT": { nu: ["latn"] },
          "fr-KM": { nu: ["latn"] },
          "fr-LU": { nu: ["latn"] },
          "fr-MA": { nu: ["latn"] },
          "fr-MC": { nu: ["latn"] },
          "fr-MF": { nu: ["latn"] },
          "fr-MG": { nu: ["latn"] },
          "fr-ML": { nu: ["latn"] },
          "fr-MQ": { nu: ["latn"] },
          "fr-MR": { nu: ["latn"] },
          "fr-MU": { nu: ["latn"] },
          "fr-NC": { nu: ["latn"] },
          "fr-NE": { nu: ["latn"] },
          "fr-PF": { nu: ["latn"] },
          "fr-PM": { nu: ["latn"] },
          "fr-RE": { nu: ["latn"] },
          "fr-RW": { nu: ["latn"] },
          "fr-SC": { nu: ["latn"] },
          "fr-SN": { nu: ["latn"] },
          "fr-SY": { nu: ["latn"] },
          "fr-TD": { nu: ["latn"] },
          "fr-TG": { nu: ["latn"] },
          "fr-TN": { nu: ["latn"] },
          "fr-VU": { nu: ["latn"] },
          "fr-WF": { nu: ["latn"] },
          "fr-YT": { nu: ["latn"] },
          frr: { nu: ["latn"] },
          fur: { nu: ["latn"] },
          fy: { nu: ["latn"] },
          ga: { nu: ["latn"] },
          "ga-GB": { nu: ["latn"] },
          gaa: { nu: ["latn"] },
          gd: { nu: ["latn"] },
          gez: { nu: ["latn"] },
          "gez-ER": { nu: ["latn"] },
          gl: { nu: ["latn"] },
          gn: { nu: ["latn"] },
          gsw: { nu: ["latn"] },
          "gsw-FR": { nu: ["latn"] },
          "gsw-LI": { nu: ["latn"] },
          gu: { nu: ["latn"] },
          guz: { nu: ["latn"] },
          gv: { nu: ["latn"] },
          ha: { nu: ["latn"] },
          "ha-Arab": { nu: ["latn"] },
          "ha-Arab-SD": { nu: ["latn"] },
          "ha-GH": { nu: ["latn"] },
          "ha-NE": { nu: ["latn"] },
          haw: { nu: ["latn"] },
          he: { nu: ["latn"] },
          hi: { nu: ["latn"] },
          "hi-Latn": { nu: ["latn"] },
          hnj: { nu: ["hmnp", "latn"] },
          "hnj-Hmnp": { nu: ["hmnp", "latn"] },
          hr: { nu: ["latn"] },
          "hr-BA": { nu: ["latn"] },
          hsb: { nu: ["latn"] },
          ht: { nu: ["latn"] },
          hu: { nu: ["latn"] },
          hy: { nu: ["latn"] },
          ia: { nu: ["latn"] },
          id: { nu: ["latn"], separator: { latn: "." } },
          ie: { nu: ["latn"] },
          ig: { nu: ["latn"] },
          ii: { nu: ["latn"] },
          io: { nu: ["latn"] },
          is: { nu: ["latn"] },
          it: { nu: ["latn"] },
          "it-CH": { nu: ["latn"] },
          "it-SM": { nu: ["latn"] },
          "it-VA": { nu: ["latn"] },
          iu: { nu: ["latn"] },
          "iu-Latn": { nu: ["latn"] },
          ja: { nu: ["latn"] },
          jbo: { nu: ["latn"] },
          jgo: { nu: ["latn"] },
          jmc: { nu: ["latn"] },
          jv: { nu: ["latn"] },
          ka: { nu: ["latn"] },
          kaa: { nu: ["latn"] },
          "kaa-Cyrl": { nu: ["latn"] },
          "kaa-Latn": { nu: ["latn"] },
          kab: { nu: ["latn"] },
          kaj: { nu: ["latn"] },
          kam: { nu: ["latn"] },
          kcg: { nu: ["latn"] },
          kde: { nu: ["latn"] },
          kea: { nu: ["latn"] },
          kek: { nu: ["latn"] },
          ken: { nu: ["latn"] },
          kgp: { nu: ["latn"] },
          khq: { nu: ["latn"] },
          ki: { nu: ["latn"] },
          kk: { nu: ["latn"] },
          "kk-Arab": { nu: ["latn"] },
          "kk-Cyrl": { nu: ["latn"] },
          "kk-KZ": { nu: ["latn"] },
          kkj: { nu: ["latn"] },
          kl: { nu: ["latn"] },
          kln: { nu: ["latn"] },
          km: { nu: ["latn"] },
          kn: { nu: ["latn"] },
          ko: { nu: ["latn"] },
          "ko-CN": { nu: ["latn"] },
          "ko-KP": { nu: ["latn"] },
          kok: { nu: ["latn"] },
          "kok-Deva": { nu: ["latn"] },
          "kok-Latn": { nu: ["latn"] },
          kpe: { nu: ["latn"] },
          "kpe-GN": { nu: ["latn"] },
          ks: { nu: ["arabext"] },
          "ks-Arab": { nu: ["arabext"] },
          "ks-Deva": { nu: ["latn"] },
          ksb: { nu: ["latn"] },
          ksf: { nu: ["latn"] },
          ksh: { nu: ["latn"] },
          ku: { nu: ["latn"] },
          "ku-Arab": { nu: ["latn"] },
          "ku-Arab-IR": { nu: ["latn"] },
          "ku-Latn": { nu: ["latn"] },
          "ku-Latn-IQ": { nu: ["latn"] },
          "ku-Latn-SY": { nu: ["latn"] },
          "ku-TR": { nu: ["latn"] },
          kw: { nu: ["latn"] },
          kxv: { nu: ["latn"] },
          "kxv-Deva": { nu: ["latn"] },
          "kxv-Latn": { nu: ["latn"] },
          "kxv-Orya": { nu: ["latn"] },
          "kxv-Telu": { nu: ["latn"] },
          ky: { nu: ["latn"] },
          la: { nu: ["latn"] },
          lag: { nu: ["latn"] },
          lb: { nu: ["latn"] },
          lg: { nu: ["latn"] },
          lij: { nu: ["latn"] },
          lkt: { nu: ["latn"] },
          lld: { nu: ["latn"] },
          lmo: { nu: ["latn"] },
          ln: { nu: ["latn"] },
          "ln-AO": { nu: ["latn"] },
          "ln-CF": { nu: ["latn"] },
          "ln-CG": { nu: ["latn"] },
          lo: { nu: ["latn"] },
          lrc: { nu: ["arabext"] },
          "lrc-IQ": { nu: ["arabext"] },
          lt: { nu: ["latn"] },
          ltg: { nu: ["latn"] },
          lu: { nu: ["latn"] },
          luo: { nu: ["latn"] },
          luy: { nu: ["latn"] },
          lv: { nu: ["latn"] },
          lzz: { nu: ["latn"] },
          mai: { nu: ["latn"] },
          mas: { nu: ["latn"] },
          "mas-TZ": { nu: ["latn"] },
          mdf: { nu: ["latn"] },
          mer: { nu: ["latn"] },
          mfe: { nu: ["latn"] },
          mg: { nu: ["latn"] },
          mgh: { nu: ["latn"] },
          mgo: { nu: ["latn"] },
          mhn: { nu: ["latn"] },
          mi: { nu: ["latn"] },
          mic: { nu: ["latn"] },
          mk: { nu: ["latn"] },
          ml: { nu: ["latn"] },
          mn: { nu: ["latn"] },
          "mn-Mong": { nu: ["latn"] },
          "mn-Mong-MN": { nu: ["latn"] },
          mni: { nu: ["beng"] },
          "mni-Beng": { nu: ["beng"] },
          "mni-Mtei": { nu: ["mtei"] },
          moh: { nu: ["latn"] },
          mr: { nu: ["deva"] },
          ms: { nu: ["latn"] },
          "ms-Arab": { nu: ["latn"] },
          "ms-Arab-BN": { nu: ["latn"] },
          "ms-BN": { nu: ["latn"] },
          "ms-ID": { nu: ["latn"], separator: { latn: "." } },
          "ms-SG": { nu: ["latn"] },
          mt: { nu: ["latn"] },
          mua: { nu: ["latn"] },
          mus: { nu: ["latn"] },
          mww: { nu: ["hmnp", "latn"] },
          "mww-Hmnp": { nu: ["hmnp", "latn"] },
          my: { nu: ["mymr"] },
          myv: { nu: ["latn"] },
          mzn: { nu: ["arabext"] },
          naq: { nu: ["latn"] },
          nb: { nu: ["latn"] },
          "nb-SJ": { nu: ["latn"] },
          nd: { nu: ["latn"] },
          nds: { nu: ["latn"] },
          "nds-NL": { nu: ["latn"] },
          ne: { nu: ["deva"] },
          "ne-IN": { nu: ["deva"] },
          nl: { nu: ["latn"] },
          "nl-AW": { nu: ["latn"] },
          "nl-BE": { nu: ["latn"] },
          "nl-BQ": { nu: ["latn"] },
          "nl-CW": { nu: ["latn"] },
          "nl-SR": { nu: ["latn"] },
          "nl-SX": { nu: ["latn"] },
          nmg: { nu: ["latn"] },
          nn: { nu: ["latn"] },
          nnh: { nu: ["latn"] },
          no: { nu: ["latn"] },
          nqo: { nu: ["nkoo"] },
          nr: { nu: ["latn"] },
          nso: { nu: ["latn"] },
          nus: { nu: ["latn"] },
          nv: { nu: ["latn"] },
          ny: { nu: ["latn"] },
          nyn: { nu: ["latn"] },
          oc: { nu: ["latn"] },
          "oc-ES": { nu: ["latn"] },
          oka: { nu: ["latn"] },
          "oka-US": { nu: ["latn"] },
          om: { nu: ["latn"] },
          "om-KE": { nu: ["latn"] },
          or: { nu: ["latn"] },
          os: { nu: ["latn"] },
          "os-RU": { nu: ["latn"] },
          osa: { nu: ["latn"] },
          pa: { nu: ["latn"] },
          "pa-Arab": { nu: ["arabext"] },
          "pa-Guru": { nu: ["latn"] },
          pap: { nu: ["latn"] },
          "pap-AW": { nu: ["latn"] },
          pcm: { nu: ["latn"] },
          pi: { nu: ["latn"] },
          "pi-Latn": { nu: ["latn"] },
          pis: { nu: ["latn"] },
          pl: { nu: ["latn"] },
          pms: { nu: ["latn"] },
          prg: { nu: ["latn"] },
          ps: { nu: ["arabext"] },
          "ps-PK": { nu: ["arabext"] },
          pt: { nu: ["latn"] },
          "pt-AO": { nu: ["latn"] },
          "pt-CH": { nu: ["latn"] },
          "pt-CV": { nu: ["latn"] },
          "pt-GQ": { nu: ["latn"] },
          "pt-GW": { nu: ["latn"] },
          "pt-LU": { nu: ["latn"] },
          "pt-MO": { nu: ["latn"] },
          "pt-MZ": { nu: ["latn"] },
          "pt-PT": { nu: ["latn"] },
          "pt-ST": { nu: ["latn"] },
          "pt-TL": { nu: ["latn"] },
          qu: { nu: ["latn"] },
          "qu-BO": { nu: ["latn"] },
          "qu-EC": { nu: ["latn"] },
          quc: { nu: ["latn"] },
          raj: { nu: ["deva"] },
          rhg: { nu: ["latn"] },
          "rhg-Rohg": { nu: ["latn"] },
          "rhg-Rohg-BD": { nu: ["latn"] },
          rif: { nu: ["latn"] },
          rm: { nu: ["latn"] },
          rn: { nu: ["latn"] },
          ro: { nu: ["latn"] },
          "ro-MD": { nu: ["latn"] },
          rof: { nu: ["latn"] },
          ru: { nu: ["latn"] },
          "ru-BY": { nu: ["latn"] },
          "ru-KG": { nu: ["latn"] },
          "ru-KZ": { nu: ["latn"] },
          "ru-MD": { nu: ["latn"] },
          "ru-UA": { nu: ["latn"] },
          rw: { nu: ["latn"] },
          rwk: { nu: ["latn"] },
          sa: { nu: ["deva"] },
          sah: { nu: ["latn"] },
          saq: { nu: ["latn"] },
          sat: { nu: ["olck"] },
          "sat-Deva": { nu: ["deva"] },
          "sat-Olck": { nu: ["olck"] },
          sbp: { nu: ["latn"] },
          sc: { nu: ["latn"] },
          scn: { nu: ["latn"] },
          sd: { nu: ["arab"] },
          "sd-Arab": { nu: ["arab"] },
          "sd-Deva": { nu: ["latn"] },
          sdh: { nu: ["arab"] },
          "sdh-IQ": { nu: ["arab"] },
          se: { nu: ["latn"] },
          "se-FI": { nu: ["latn"] },
          "se-SE": { nu: ["latn"] },
          seh: { nu: ["latn"] },
          ses: { nu: ["latn"] },
          sg: { nu: ["latn"] },
          sgs: { nu: ["latn"] },
          shi: { nu: ["latn"] },
          "shi-Latn": { nu: ["latn"] },
          "shi-Tfng": { nu: ["latn"] },
          shn: { nu: ["latn"] },
          "shn-TH": { nu: ["latn"] },
          si: { nu: ["latn"], separator: { latn: "." } },
          sid: { nu: ["latn"] },
          sk: { nu: ["latn"] },
          skr: { nu: ["latn"] },
          sl: { nu: ["latn"] },
          sma: { nu: ["latn"] },
          "sma-NO": { nu: ["latn"] },
          smj: { nu: ["latn"] },
          "smj-NO": { nu: ["latn"] },
          smn: { nu: ["latn"], separator: { latn: "." } },
          sms: { nu: ["latn"] },
          sn: { nu: ["latn"] },
          so: { nu: ["latn"] },
          "so-DJ": { nu: ["latn"] },
          "so-ET": { nu: ["latn"] },
          "so-KE": { nu: ["latn"] },
          sq: { nu: ["latn"] },
          "sq-MK": { nu: ["latn"] },
          "sq-XK": { nu: ["latn"] },
          sr: { nu: ["latn"] },
          "sr-Cyrl": { nu: ["latn"] },
          "sr-Cyrl-BA": { nu: ["latn"] },
          "sr-Cyrl-ME": { nu: ["latn"] },
          "sr-Cyrl-XK": { nu: ["latn"] },
          "sr-Latn": { nu: ["latn"] },
          "sr-Latn-BA": { nu: ["latn"] },
          "sr-Latn-ME": { nu: ["latn"] },
          "sr-Latn-XK": { nu: ["latn"] },
          ss: { nu: ["latn"] },
          "ss-SZ": { nu: ["latn"] },
          ssy: { nu: ["latn"] },
          st: { nu: ["latn"] },
          "st-LS": { nu: ["latn"] },
          su: { nu: ["latn"], separator: { latn: "." } },
          "su-Latn": { nu: ["latn"], separator: { latn: "." } },
          suz: { nu: ["latn"] },
          "suz-Deva": { nu: ["latn"] },
          "suz-Sunu": { nu: ["latn"] },
          sv: { nu: ["latn"] },
          "sv-AX": { nu: ["latn"] },
          "sv-FI": { nu: ["latn"], separator: { latn: "." } },
          sw: { nu: ["latn"] },
          "sw-CD": { nu: ["latn"] },
          "sw-KE": { nu: ["latn"] },
          "sw-UG": { nu: ["latn"] },
          syr: { nu: ["latn"] },
          "syr-SY": { nu: ["latn"] },
          szl: { nu: ["latn"] },
          ta: { nu: ["latn"] },
          "ta-LK": { nu: ["latn"] },
          "ta-MY": { nu: ["latn"] },
          "ta-SG": { nu: ["latn"] },
          te: { nu: ["latn"] },
          teo: { nu: ["latn"] },
          "teo-KE": { nu: ["latn"] },
          tg: { nu: ["latn"] },
          th: { nu: ["latn"] },
          ti: { nu: ["latn"] },
          "ti-ER": { nu: ["latn"] },
          tig: { nu: ["latn"] },
          tk: { nu: ["latn"] },
          tn: { nu: ["latn"] },
          "tn-BW": { nu: ["latn"] },
          to: { nu: ["latn"] },
          tok: { nu: ["latn"] },
          tpi: { nu: ["latn"] },
          tr: { nu: ["latn"] },
          "tr-CY": { nu: ["latn"] },
          trv: { nu: ["latn"] },
          trw: { nu: ["latn"] },
          ts: { nu: ["latn"] },
          tt: { nu: ["latn"] },
          twq: { nu: ["latn"] },
          tyv: { nu: ["latn"] },
          tzm: { nu: ["latn"] },
          ug: { nu: ["latn"] },
          uk: { nu: ["latn"] },
          und: { nu: ["latn"] },
          ur: { nu: ["latn"] },
          "ur-IN": { nu: ["arabext"], separator: { arabext: "\u066B" } },
          uz: { nu: ["latn"] },
          "uz-Arab": { nu: ["arabext"] },
          "uz-Cyrl": { nu: ["latn"] },
          "uz-Latn": { nu: ["latn"] },
          vai: { nu: ["latn"] },
          "vai-Latn": { nu: ["latn"] },
          "vai-Vaii": { nu: ["latn"] },
          ve: { nu: ["latn"] },
          vec: { nu: ["latn"] },
          vi: { nu: ["latn"] },
          vmw: { nu: ["latn"] },
          vo: { nu: ["latn"] },
          vun: { nu: ["latn"] },
          wa: { nu: ["latn"] },
          wae: { nu: ["latn"] },
          wal: { nu: ["latn"] },
          wbp: { nu: ["latn"] },
          wo: { nu: ["latn"] },
          xh: { nu: ["latn"] },
          xnr: { nu: ["latn"] },
          xog: { nu: ["latn"] },
          yav: { nu: ["latn"] },
          yi: { nu: ["latn"] },
          yo: { nu: ["latn"] },
          "yo-BJ": { nu: ["latn"] },
          yrl: { nu: ["latn"] },
          "yrl-CO": { nu: ["latn"] },
          "yrl-VE": { nu: ["latn"] },
          yue: { nu: ["latn"] },
          "yue-Hans": { nu: ["latn"] },
          "yue-Hant": { nu: ["latn"] },
          "yue-Hant-CN": { nu: ["latn"] },
          "yue-Hant-MO": { nu: ["latn"] },
          za: { nu: ["latn"] },
          zgh: { nu: ["latn"] },
          zh: { nu: ["latn"] },
          "zh-Hans": { nu: ["latn"] },
          "zh-Hans-HK": { nu: ["latn"] },
          "zh-Hans-MO": { nu: ["latn"] },
          "zh-Hans-MY": { nu: ["latn"] },
          "zh-Hans-SG": { nu: ["latn"] },
          "zh-Hant": { nu: ["latn"] },
          "zh-Hant-HK": { nu: ["latn"] },
          "zh-Hant-MO": { nu: ["latn"] },
          "zh-Hant-MY": { nu: ["latn"] },
          "zh-Latn": { nu: ["latn"] },
          zu: { nu: ["latn"] },
        },
      };
    },
    632459() {},
    183580(e, n, t) {
      t.d(n, { q: () => r });
      let a = new WeakMap();
      function r(e, n) {
        let t = a.get(e);
        t || ((t = new Set(e)), a.set(e, t));
        let r = n;
        for (;;) {
          if (t.has(r)) return r;
          let e = r.lastIndexOf("-");
          if (!~e) return;
          e >= 2 && "-" === r[e - 2] && (e -= 2), (r = r.slice(0, e));
        }
      }
    },
    641277(e, n, t) {
      t.d(n, { B: () => u });
      var a = t(26232);
      function r(e) {
        return Intl.getCanonicalLocales(e)[0];
      }
      var i = t(183580);
      function u(e, n, t, u, s, o) {
        let l, d;
        if ("lookup" === t.localeMatcher)
          l = (function (e, n, t) {
            let r = { locale: "" };
            for (let t of n) {
              let n = t.replace(a.KB, ""),
                u = (0, i.q)(e, n);
              if (u)
                return (
                  (r.locale = u),
                  t !== n && (r.extension = t.slice(n.length, t.length)),
                  r
                );
            }
            return (r.locale = t()), r;
          })(Array.from(e), n, o);
        else {
          var c;
          let t, r, i, u, s;
          (c = Array.from(e)),
            (i = []),
            (u = n.reduce((e, n) => {
              let t = n.replace(a.KB, "");
              return i.push(t), (e[t] = n), e;
            }, {})),
            (s = (0, a.B4)(i, c)).matchedSupportedLocale &&
              s.matchedDesiredLocale &&
              ((t = s.matchedSupportedLocale),
              (r =
                u[s.matchedDesiredLocale].slice(
                  s.matchedDesiredLocale.length,
                ) || void 0)),
            (l = t ? { locale: t, extension: r } : { locale: o() });
        }
        null == l && (l = { locale: o(), extension: "" });
        let _ = l.locale,
          f = s[_],
          y = { locale: "en", dataLocale: _ };
        d = l.extension
          ? (function (e) {
              let n;
              (0, a.V1)(
                e === e.toLowerCase(),
                "Expected extension to be lowercase",
              ),
                (0, a.V1)(
                  "-u-" === e.slice(0, 3),
                  "Expected extension to be a Unicode locale extension",
                );
              let t = [],
                r = [],
                i = e.length,
                u = 3;
              for (; u < i; ) {
                let s,
                  o = e.indexOf("-", u);
                s = -1 === o ? i - u : o - u;
                let l = e.slice(u, u + s);
                (0, a.V1)(
                  s >= 2,
                  "Expected a subtag to have at least 2 characters",
                ),
                  void 0 === n && 2 != s
                    ? -1 === t.indexOf(l) && t.push(l)
                    : 2 === s
                      ? ((n = { key: l, value: "" }),
                        void 0 === r.find((e) => e.key === n?.key) && r.push(n))
                      : n?.value === ""
                        ? (n.value = l)
                        : ((0, a.V1)(
                            void 0 !== n,
                            "Expected keyword to be defined",
                          ),
                          (n.value += "-" + l)),
                  (u += s + 1);
              }
              return { attributes: t, keywords: r };
            })(l.extension).keywords
          : [];
        let h = [];
        for (let e of u) {
          let n,
            r = f?.[e] ?? [];
          (0, a.V1)(
            Array.isArray(r),
            `keyLocaleData for ${e} must be an array`,
          );
          let i = r[0];
          (0, a.V1)(
            void 0 === i || "string" == typeof i,
            "value must be a string or undefined",
          );
          let u = d.find((n) => n.key === e);
          if (u) {
            let t = u.value;
            "" !== t
              ? r.indexOf(t) > -1 && (n = { key: e, value: (i = t) })
              : r.indexOf("true") > -1 && (n = { key: e, value: (i = "true") });
          }
          let s = t[e];
          (0, a.V1)(
            null == s || "string" == typeof s,
            "optionsValue must be a string or undefined",
          ),
            "string" == typeof s &&
              "" ===
                (s = (function (e, n) {
                  let t = n.toLowerCase();
                  return (0, a.V1)(void 0 !== e, "ukey must be defined"), t;
                })(e.toLowerCase(), s)) &&
              (s = "true"),
            s !== i && r.indexOf(s) > -1 && ((i = s), (n = void 0)),
            n && h.push(n),
            (y[e] = i);
        }
        return (
          h.length > 0 &&
            (_ = (function (e, n, t) {
              (0, a.V1)(
                -1 === e.indexOf("-u-"),
                "Expected locale to not have a Unicode locale extension",
              );
              let i = "-u";
              for (let e of n) i += `-${e}`;
              for (let e of t) {
                let { key: n, value: t } = e;
                (i += `-${n}`), "" !== t && (i += `-${t}`);
              }
              if ("-u" === i) return r(e);
              let u = e.indexOf("-x-");
              return r(-1 === u ? e + i : e.slice(0, u) + i + e.slice(u));
            })(_, [], h)),
          (y.locale = _),
          y
        );
      }
    },
    26232(e, n, t) {
      let a;
      t.d(n, { KB: () => s, B4: () => y, V1: () => o });
      var r = t(315847);
      let i = {
          "written-new": [
            { paradigmLocales: { _locales: "en en_GB es es_419 pt_BR pt_PT" } },
            { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } },
            { $cnsar: { _value: "HK+MO" } },
            { $americas: { _value: "019" } },
            { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } },
            { no: { _desired: "nb", _distance: "1" } },
            { bs: { _desired: "hr", _distance: "4" } },
            { bs: { _desired: "sh", _distance: "4" } },
            { hr: { _desired: "sh", _distance: "4" } },
            { sr: { _desired: "sh", _distance: "4" } },
            { aa: { _desired: "ssy", _distance: "4" } },
            { de: { _desired: "gsw", _distance: "4", _oneway: "true" } },
            { de: { _desired: "lb", _distance: "4", _oneway: "true" } },
            { no: { _desired: "da", _distance: "8" } },
            { nb: { _desired: "da", _distance: "8" } },
            { ru: { _desired: "ab", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ach", _distance: "30", _oneway: "true" } },
            { nl: { _desired: "af", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ak", _distance: "30", _oneway: "true" } },
            { en: { _desired: "am", _distance: "30", _oneway: "true" } },
            { es: { _desired: "ay", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "az", _distance: "30", _oneway: "true" } },
            { ur: { _desired: "bal", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "be", _distance: "20", _oneway: "true" } },
            { en: { _desired: "bem", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "bh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "bn", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "bo", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "br", _distance: "20", _oneway: "true" } },
            { es: { _desired: "ca", _distance: "20", _oneway: "true" } },
            { fil: { _desired: "ceb", _distance: "30", _oneway: "true" } },
            { en: { _desired: "chr", _distance: "20", _oneway: "true" } },
            { ar: { _desired: "ckb", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "co", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "crs", _distance: "20", _oneway: "true" } },
            { sk: { _desired: "cs", _distance: "20" } },
            { en: { _desired: "cy", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ee", _distance: "30", _oneway: "true" } },
            { en: { _desired: "eo", _distance: "30", _oneway: "true" } },
            { es: { _desired: "eu", _distance: "20", _oneway: "true" } },
            { da: { _desired: "fo", _distance: "20", _oneway: "true" } },
            { nl: { _desired: "fy", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ga", _distance: "20", _oneway: "true" } },
            { en: { _desired: "gaa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "gd", _distance: "20", _oneway: "true" } },
            { es: { _desired: "gl", _distance: "20", _oneway: "true" } },
            { es: { _desired: "gn", _distance: "20", _oneway: "true" } },
            { hi: { _desired: "gu", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ha", _distance: "30", _oneway: "true" } },
            { en: { _desired: "haw", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "ht", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "hy", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ia", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ig", _distance: "30", _oneway: "true" } },
            { en: { _desired: "is", _distance: "20", _oneway: "true" } },
            { id: { _desired: "jv", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ka", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "kg", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "kk", _distance: "30", _oneway: "true" } },
            { en: { _desired: "km", _distance: "30", _oneway: "true" } },
            { en: { _desired: "kn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "kri", _distance: "30", _oneway: "true" } },
            { tr: { _desired: "ku", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "ky", _distance: "30", _oneway: "true" } },
            { it: { _desired: "la", _distance: "20", _oneway: "true" } },
            { en: { _desired: "lg", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "ln", _distance: "30", _oneway: "true" } },
            { en: { _desired: "lo", _distance: "30", _oneway: "true" } },
            { en: { _desired: "loz", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "lua", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "mai", _distance: "20", _oneway: "true" } },
            { en: { _desired: "mfe", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "mg", _distance: "30", _oneway: "true" } },
            { en: { _desired: "mi", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ml", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "mn", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "mr", _distance: "30", _oneway: "true" } },
            { id: { _desired: "ms", _distance: "30", _oneway: "true" } },
            { en: { _desired: "mt", _distance: "30", _oneway: "true" } },
            { en: { _desired: "my", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ne", _distance: "30", _oneway: "true" } },
            { nb: { _desired: "nn", _distance: "20" } },
            { no: { _desired: "nn", _distance: "20" } },
            { en: { _desired: "nso", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ny", _distance: "30", _oneway: "true" } },
            { en: { _desired: "nyn", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "oc", _distance: "20", _oneway: "true" } },
            { en: { _desired: "om", _distance: "30", _oneway: "true" } },
            { en: { _desired: "or", _distance: "30", _oneway: "true" } },
            { en: { _desired: "pa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "pcm", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ps", _distance: "30", _oneway: "true" } },
            { es: { _desired: "qu", _distance: "30", _oneway: "true" } },
            { de: { _desired: "rm", _distance: "20", _oneway: "true" } },
            { en: { _desired: "rn", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "rw", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "sa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sd", _distance: "30", _oneway: "true" } },
            { en: { _desired: "si", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "so", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sq", _distance: "30", _oneway: "true" } },
            { en: { _desired: "st", _distance: "30", _oneway: "true" } },
            { id: { _desired: "su", _distance: "20", _oneway: "true" } },
            { en: { _desired: "sw", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ta", _distance: "30", _oneway: "true" } },
            { en: { _desired: "te", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tg", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ti", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tk", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tlh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "to", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tt", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tum", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "ug", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "uk", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ur", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "uz", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "wo", _distance: "30", _oneway: "true" } },
            { en: { _desired: "xh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "yi", _distance: "30", _oneway: "true" } },
            { en: { _desired: "yo", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "za", _distance: "20", _oneway: "true" } },
            { en: { _desired: "zu", _distance: "30", _oneway: "true" } },
            { ar: { _desired: "aao", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "abh", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "abv", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acm", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acq", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acw", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acx", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acy", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "adf", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "aeb", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "aec", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "afb", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ajp", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "apc", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "apd", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "arq", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ars", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ary", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "arz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "auz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "avl", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayh", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayl", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayn", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayp", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "bbz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "pga", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "shu", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ssh", _distance: "10", _oneway: "true" } },
            { az: { _desired: "azb", _distance: "10", _oneway: "true" } },
            { et: { _desired: "vro", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "ffm", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fub", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fue", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuf", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuh", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fui", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuq", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuv", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gnw", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gui", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gun", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "nhd", _distance: "10", _oneway: "true" } },
            { iu: { _desired: "ikt", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "enb", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "eyo", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "niq", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "oki", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "pko", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "sgc", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "tec", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "tuy", _distance: "10", _oneway: "true" } },
            { kok: { _desired: "gom", _distance: "10", _oneway: "true" } },
            { kpe: { _desired: "gkp", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "ida", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lkb", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lko", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lks", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lri", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lrm", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lsm", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lto", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lts", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lwg", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "nle", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "nyd", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "rag", _distance: "10", _oneway: "true" } },
            { lv: { _desired: "ltg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bhr", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bjq", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bmm", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bzc", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "msh", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "skg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "tdx", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "tkg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "txy", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "xmv", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "xmw", _distance: "10", _oneway: "true" } },
            { mn: { _desired: "mvf", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bjn", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "btj", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bve", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bvu", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "coa", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "dup", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "hji", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "id", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "jak", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "jax", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kvb", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kvr", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kxd", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "lce", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "lcf", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "liw", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "max", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "meo", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mfa", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mfb", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "min", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mqg", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "msi", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mui", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "orn", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "ors", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "pel", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "pse", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "tmw", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "urk", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "vkk", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "vkt", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "xmm", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "zlm", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "zmi", _distance: "10", _oneway: "true" } },
            { ne: { _desired: "dty", _distance: "10", _oneway: "true" } },
            { om: { _desired: "gax", _distance: "10", _oneway: "true" } },
            { om: { _desired: "hae", _distance: "10", _oneway: "true" } },
            { om: { _desired: "orc", _distance: "10", _oneway: "true" } },
            { or: { _desired: "spv", _distance: "10", _oneway: "true" } },
            { ps: { _desired: "pbt", _distance: "10", _oneway: "true" } },
            { ps: { _desired: "pst", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qub", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qud", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quf", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qug", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quk", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qul", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qup", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qur", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qus", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quw", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qux", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quy", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qva", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qve", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvi", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvj", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvl", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvm", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvn", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvo", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvp", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvs", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvw", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvz", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwa", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qws", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxa", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxl", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxn", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxo", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxp", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxr", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxt", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxu", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxw", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sdc", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sdn", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sro", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aae", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aat", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aln", _distance: "10", _oneway: "true" } },
            { syr: { _desired: "aii", _distance: "10", _oneway: "true" } },
            { uz: { _desired: "uzs", _distance: "10", _oneway: "true" } },
            { yi: { _desired: "yih", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cdo", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cjy", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cpx", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "czh", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "czo", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "gan", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "hak", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "hsn", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "lzh", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "mnp", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "nan", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "wuu", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "yue", _distance: "10", _oneway: "true" } },
            { "*": { _desired: "*", _distance: "80" } },
            {
              "en-Latn": {
                _desired: "am-Ethi",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "az-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "bn-Beng",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "bo-Tibt",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "hy-Armn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ka-Geor",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "km-Khmr",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "kn-Knda",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "lo-Laoo",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ml-Mlym",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "my-Mymr",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ne-Deva",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "or-Orya",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "pa-Guru",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ps-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "sd-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "si-Sinh",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ta-Taml",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "te-Telu",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ti-Ethi",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "tk-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ur-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "uz-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "yi-Hebr",
                _distance: "10",
                _oneway: "true",
              },
            },
            { "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } },
            {
              "zh-Hans": {
                _desired: "za-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "zh-Hani",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "zh-Hant": {
                _desired: "zh-Hani",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ar-Arab": {
                _desired: "ar-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "bn-Beng": {
                _desired: "bn-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "gu-Gujr": {
                _desired: "gu-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "hi-Deva": {
                _desired: "hi-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "kn-Knda": {
                _desired: "kn-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ml-Mlym": {
                _desired: "ml-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "mr-Deva": {
                _desired: "mr-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ta-Taml": {
                _desired: "ta-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "te-Telu": {
                _desired: "te-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "zh-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Latn",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hani",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hira",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Kana",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hrkt",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Hrkt": {
                _desired: "ja-Hira",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Hrkt": {
                _desired: "ja-Kana",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Hani",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Hang",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Jamo",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Hang": {
                _desired: "ko-Jamo",
                _distance: "5",
                _oneway: "true",
              },
            },
            { "*-*": { _desired: "*-*", _distance: "50" } },
            { "ar-*-$maghreb": { _desired: "ar-*-$maghreb", _distance: "4" } },
            {
              "ar-*-$!maghreb": { _desired: "ar-*-$!maghreb", _distance: "4" },
            },
            { "ar-*-*": { _desired: "ar-*-*", _distance: "5" } },
            { "en-*-$enUS": { _desired: "en-*-$enUS", _distance: "4" } },
            { "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" } },
            { "en-*-$!enUS": { _desired: "en-*-$!enUS", _distance: "4" } },
            { "en-*-*": { _desired: "en-*-*", _distance: "5" } },
            {
              "es-*-$americas": { _desired: "es-*-$americas", _distance: "4" },
            },
            {
              "es-*-$!americas": {
                _desired: "es-*-$!americas",
                _distance: "4",
              },
            },
            { "es-*-*": { _desired: "es-*-*", _distance: "5" } },
            {
              "pt-*-$americas": { _desired: "pt-*-$americas", _distance: "4" },
            },
            {
              "pt-*-$!americas": {
                _desired: "pt-*-$!americas",
                _distance: "4",
              },
            },
            { "pt-*-*": { _desired: "pt-*-*", _distance: "5" } },
            {
              "zh-Hant-$cnsar": { _desired: "zh-Hant-$cnsar", _distance: "4" },
            },
            {
              "zh-Hant-$!cnsar": {
                _desired: "zh-Hant-$!cnsar",
                _distance: "4",
              },
            },
            { "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" } },
            { "*-*-*": { _desired: "*-*-*", _distance: "4" } },
          ],
        },
        u = {
          "001": [
            "001",
            "001-status-grouping",
            "002",
            "005",
            "009",
            "011",
            "013",
            "014",
            "015",
            "017",
            "018",
            "019",
            "021",
            "029",
            "030",
            "034",
            "035",
            "039",
            "053",
            "054",
            "057",
            "061",
            "142",
            "143",
            "145",
            "150",
            "151",
            "154",
            "155",
            "AC",
            "AD",
            "AE",
            "AF",
            "AG",
            "AI",
            "AL",
            "AM",
            "AO",
            "AQ",
            "AR",
            "AS",
            "AT",
            "AU",
            "AW",
            "AX",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BL",
            "BM",
            "BN",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BT",
            "BV",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CC",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CK",
            "CL",
            "CM",
            "CN",
            "CO",
            "CP",
            "CQ",
            "CR",
            "CU",
            "CV",
            "CW",
            "CX",
            "CY",
            "CZ",
            "DE",
            "DG",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EA",
            "EC",
            "EE",
            "EG",
            "EH",
            "ER",
            "ES",
            "ET",
            "EU",
            "EZ",
            "FI",
            "FJ",
            "FK",
            "FM",
            "FO",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GF",
            "GG",
            "GH",
            "GI",
            "GL",
            "GM",
            "GN",
            "GP",
            "GQ",
            "GR",
            "GS",
            "GT",
            "GU",
            "GW",
            "GY",
            "HK",
            "HM",
            "HN",
            "HR",
            "HT",
            "HU",
            "IC",
            "ID",
            "IE",
            "IL",
            "IM",
            "IN",
            "IO",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JE",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KY",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MF",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MO",
            "MP",
            "MQ",
            "MR",
            "MS",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NC",
            "NE",
            "NF",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NU",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PF",
            "PG",
            "PH",
            "PK",
            "PL",
            "PM",
            "PN",
            "PR",
            "PS",
            "PT",
            "PW",
            "PY",
            "QA",
            "QO",
            "RE",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SH",
            "SI",
            "SJ",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SX",
            "SY",
            "SZ",
            "TA",
            "TC",
            "TD",
            "TF",
            "TG",
            "TH",
            "TJ",
            "TK",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TW",
            "TZ",
            "UA",
            "UG",
            "UM",
            "UN",
            "US",
            "UY",
            "UZ",
            "VA",
            "VC",
            "VE",
            "VG",
            "VI",
            "VN",
            "VU",
            "WF",
            "WS",
            "XK",
            "YE",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          "002": [
            "002",
            "002-status-grouping",
            "011",
            "014",
            "015",
            "017",
            "018",
            "202",
            "AO",
            "BF",
            "BI",
            "BJ",
            "BW",
            "CD",
            "CF",
            "CG",
            "CI",
            "CM",
            "CV",
            "DJ",
            "DZ",
            "EA",
            "EG",
            "EH",
            "ER",
            "ET",
            "GA",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GW",
            "IC",
            "IO",
            "KE",
            "KM",
            "LR",
            "LS",
            "LY",
            "MA",
            "MG",
            "ML",
            "MR",
            "MU",
            "MW",
            "MZ",
            "NA",
            "NE",
            "NG",
            "RE",
            "RW",
            "SC",
            "SD",
            "SH",
            "SL",
            "SN",
            "SO",
            "SS",
            "ST",
            "SZ",
            "TD",
            "TF",
            "TG",
            "TN",
            "TZ",
            "UG",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          "003": [
            "003",
            "013",
            "021",
            "029",
            "AG",
            "AI",
            "AW",
            "BB",
            "BL",
            "BM",
            "BQ",
            "BS",
            "BZ",
            "CA",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "GD",
            "GL",
            "GP",
            "GT",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PM",
            "PR",
            "SV",
            "SX",
            "TC",
            "TT",
            "US",
            "VC",
            "VG",
            "VI",
          ],
          "005": [
            "005",
            "AR",
            "BO",
            "BR",
            "BV",
            "CL",
            "CO",
            "EC",
            "FK",
            "GF",
            "GS",
            "GY",
            "PE",
            "PY",
            "SR",
            "UY",
            "VE",
          ],
          "009": [
            "009",
            "053",
            "054",
            "057",
            "061",
            "AC",
            "AQ",
            "AS",
            "AU",
            "CC",
            "CK",
            "CP",
            "CX",
            "DG",
            "FJ",
            "FM",
            "GU",
            "HM",
            "KI",
            "MH",
            "MP",
            "NC",
            "NF",
            "NR",
            "NU",
            "NZ",
            "PF",
            "PG",
            "PN",
            "PW",
            "QO",
            "SB",
            "TA",
            "TK",
            "TO",
            "TV",
            "UM",
            "VU",
            "WF",
            "WS",
          ],
          "011": [
            "011",
            "BF",
            "BJ",
            "CI",
            "CV",
            "GH",
            "GM",
            "GN",
            "GW",
            "LR",
            "ML",
            "MR",
            "NE",
            "NG",
            "SH",
            "SL",
            "SN",
            "TG",
          ],
          "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
          "014": [
            "014",
            "BI",
            "DJ",
            "ER",
            "ET",
            "IO",
            "KE",
            "KM",
            "MG",
            "MU",
            "MW",
            "MZ",
            "RE",
            "RW",
            "SC",
            "SO",
            "SS",
            "TF",
            "TZ",
            "UG",
            "YT",
            "ZM",
            "ZW",
          ],
          "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"],
          "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"],
          "018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
          "019": [
            "003",
            "005",
            "013",
            "019",
            "019-status-grouping",
            "021",
            "029",
            "419",
            "AG",
            "AI",
            "AR",
            "AW",
            "BB",
            "BL",
            "BM",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BV",
            "BZ",
            "CA",
            "CL",
            "CO",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "EC",
            "FK",
            "GD",
            "GF",
            "GL",
            "GP",
            "GS",
            "GT",
            "GY",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PE",
            "PM",
            "PR",
            "PY",
            "SR",
            "SV",
            "SX",
            "TC",
            "TT",
            "US",
            "UY",
            "VC",
            "VE",
            "VG",
            "VI",
          ],
          "021": ["021", "BM", "CA", "GL", "PM", "US"],
          "029": [
            "029",
            "AG",
            "AI",
            "AW",
            "BB",
            "BL",
            "BQ",
            "BS",
            "CU",
            "CW",
            "DM",
            "DO",
            "GD",
            "GP",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "PR",
            "SX",
            "TC",
            "TT",
            "VC",
            "VG",
            "VI",
          ],
          "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
          "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"],
          "035": [
            "035",
            "BN",
            "ID",
            "KH",
            "LA",
            "MM",
            "MY",
            "PH",
            "SG",
            "TH",
            "TL",
            "VN",
          ],
          "039": [
            "039",
            "AD",
            "AL",
            "BA",
            "ES",
            "GI",
            "GR",
            "HR",
            "IT",
            "ME",
            "MK",
            "MT",
            "PT",
            "RS",
            "SI",
            "SM",
            "VA",
            "XK",
          ],
          "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
          "054": ["054", "FJ", "NC", "PG", "SB", "VU"],
          "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
          "061": [
            "061",
            "AS",
            "CK",
            "NU",
            "PF",
            "PN",
            "TK",
            "TO",
            "TV",
            "WF",
            "WS",
          ],
          142: [
            "030",
            "034",
            "035",
            "142",
            "143",
            "145",
            "AE",
            "AF",
            "AM",
            "AZ",
            "BD",
            "BH",
            "BN",
            "BT",
            "CN",
            "CY",
            "GE",
            "HK",
            "ID",
            "IL",
            "IN",
            "IQ",
            "IR",
            "JO",
            "JP",
            "KG",
            "KH",
            "KP",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LK",
            "MM",
            "MN",
            "MO",
            "MV",
            "MY",
            "NP",
            "OM",
            "PH",
            "PK",
            "PS",
            "QA",
            "SA",
            "SG",
            "SY",
            "TH",
            "TJ",
            "TL",
            "TM",
            "TR",
            "TW",
            "UZ",
            "VN",
            "YE",
          ],
          143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
          145: [
            "145",
            "AE",
            "AM",
            "AZ",
            "BH",
            "CY",
            "GE",
            "IL",
            "IQ",
            "JO",
            "KW",
            "LB",
            "OM",
            "PS",
            "QA",
            "SA",
            "SY",
            "TR",
            "YE",
          ],
          150: [
            "039",
            "150",
            "151",
            "154",
            "155",
            "AD",
            "AL",
            "AT",
            "AX",
            "BA",
            "BE",
            "BG",
            "BY",
            "CH",
            "CQ",
            "CZ",
            "DE",
            "DK",
            "EE",
            "ES",
            "FI",
            "FO",
            "FR",
            "GB",
            "GG",
            "GI",
            "GR",
            "HR",
            "HU",
            "IE",
            "IM",
            "IS",
            "IT",
            "JE",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MD",
            "ME",
            "MK",
            "MT",
            "NL",
            "NO",
            "PL",
            "PT",
            "RO",
            "RS",
            "RU",
            "SE",
            "SI",
            "SJ",
            "SK",
            "SM",
            "UA",
            "VA",
            "XK",
          ],
          151: [
            "151",
            "BG",
            "BY",
            "CZ",
            "HU",
            "MD",
            "PL",
            "RO",
            "RU",
            "SK",
            "UA",
          ],
          154: [
            "154",
            "AX",
            "CQ",
            "DK",
            "EE",
            "FI",
            "FO",
            "GB",
            "GG",
            "IE",
            "IM",
            "IS",
            "JE",
            "LT",
            "LV",
            "NO",
            "SE",
            "SJ",
          ],
          155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"],
          202: [
            "011",
            "014",
            "017",
            "018",
            "202",
            "AO",
            "BF",
            "BI",
            "BJ",
            "BW",
            "CD",
            "CF",
            "CG",
            "CI",
            "CM",
            "CV",
            "DJ",
            "ER",
            "ET",
            "GA",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GW",
            "IO",
            "KE",
            "KM",
            "LR",
            "LS",
            "MG",
            "ML",
            "MR",
            "MU",
            "MW",
            "MZ",
            "NA",
            "NE",
            "NG",
            "RE",
            "RW",
            "SC",
            "SH",
            "SL",
            "SN",
            "SO",
            "SS",
            "ST",
            "SZ",
            "TD",
            "TF",
            "TG",
            "TZ",
            "UG",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          419: [
            "005",
            "013",
            "029",
            "419",
            "AG",
            "AI",
            "AR",
            "AW",
            "BB",
            "BL",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BV",
            "BZ",
            "CL",
            "CO",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "EC",
            "FK",
            "GD",
            "GF",
            "GP",
            "GS",
            "GT",
            "GY",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PE",
            "PR",
            "PY",
            "SR",
            "SV",
            "SX",
            "TC",
            "TT",
            "UY",
            "VC",
            "VE",
            "VG",
            "VI",
          ],
          EU: [
            "AT",
            "BE",
            "BG",
            "CY",
            "CZ",
            "DE",
            "DK",
            "EE",
            "ES",
            "EU",
            "FI",
            "FR",
            "GR",
            "HR",
            "HU",
            "IE",
            "IT",
            "LT",
            "LU",
            "LV",
            "MT",
            "NL",
            "PL",
            "PT",
            "RO",
            "SE",
            "SI",
            "SK",
          ],
          EZ: [
            "AT",
            "BE",
            "CY",
            "DE",
            "EE",
            "ES",
            "EZ",
            "FI",
            "FR",
            "GR",
            "IE",
            "IT",
            "LT",
            "LU",
            "LV",
            "MT",
            "NL",
            "PT",
            "SI",
            "SK",
          ],
          QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
          UN: [
            "AD",
            "AE",
            "AF",
            "AG",
            "AL",
            "AM",
            "AO",
            "AR",
            "AT",
            "AU",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BN",
            "BO",
            "BR",
            "BS",
            "BT",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CL",
            "CM",
            "CN",
            "CO",
            "CR",
            "CU",
            "CV",
            "CY",
            "CZ",
            "DE",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ER",
            "ES",
            "ET",
            "FI",
            "FJ",
            "FM",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GR",
            "GT",
            "GW",
            "GY",
            "HN",
            "HR",
            "HT",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MR",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NE",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PG",
            "PH",
            "PK",
            "PL",
            "PT",
            "PW",
            "PY",
            "QA",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SI",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SY",
            "SZ",
            "TD",
            "TG",
            "TH",
            "TJ",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TZ",
            "UA",
            "UG",
            "UN",
            "US",
            "UY",
            "UZ",
            "VC",
            "VE",
            "VN",
            "VU",
            "WS",
            "YE",
            "ZA",
            "ZM",
            "ZW",
          ],
        },
        s = /-u(?:-[0-9a-z]{2,8})+/gi;
      function o(e, n, t = Error) {
        if (!e) throw new t(n);
      }
      function l(e, n, t) {
        let [a, r, i] = n.split("-"),
          s = !0;
        if (i && "$" === i[0]) {
          let n = "!" !== i[1],
            a = (n ? t[i.slice(1)] : t[i.slice(2)])
              .map((e) => u[e] || [e])
              .reduce((e, n) => [...e, ...n], []);
          s &&= a.indexOf(e.region || "") > -1 == n;
        } else s &&= !e.region || "*" === i || i === e.region;
        return (
          (s &&= !e.script || "*" === r || r === e.script),
          (s &&= !e.language || "*" === a || a === e.language)
        );
      }
      function d(e) {
        return [e.language, e.script, e.region].filter(Boolean).join("-");
      }
      function c(e, n, t) {
        for (let a of t.matches) {
          let r =
            l(e, a.desired, t.matchVariables) &&
            l(n, a.supported, t.matchVariables);
          if (
            (a.oneway ||
              r ||
              (r =
                l(e, a.supported, t.matchVariables) &&
                l(n, a.desired, t.matchVariables)),
            r)
          ) {
            let r = 10 * a.distance;
            if (
              t.paradigmLocales.indexOf(d(e)) > -1 !=
              t.paradigmLocales.indexOf(d(n)) > -1
            )
              return r - 1;
            return r;
          }
        }
        throw Error("No matching distance found");
      }
      let _ = (0, r.B)(
          function (e, n) {
            let t = new Intl.Locale(e).maximize(),
              r = new Intl.Locale(n).maximize(),
              u = {
                language: t.language,
                script: t.script || "",
                region: t.region || "",
              },
              s = {
                language: r.language,
                script: r.script || "",
                region: r.region || "",
              },
              o = 0,
              l = (function () {
                if (!a) {
                  let e =
                      i["written-new"]["0"]?.paradigmLocales?._locales.split(
                        " ",
                      ),
                    n = i["written-new"].slice(1, 5);
                  a = {
                    matches: i["written-new"].slice(5).map((e) => {
                      let n = Object.keys(e)[0],
                        t = e[n];
                      return {
                        supported: n,
                        desired: t._desired,
                        distance: +t._distance,
                        oneway: "true" === t.oneway,
                      };
                    }, {}),
                    matchVariables: n.reduce((e, n) => {
                      let t = Object.keys(n)[0],
                        a = n[t];
                      return (e[t.slice(1)] = a._value.split("+")), e;
                    }, {}),
                    paradigmLocales: [
                      ...e,
                      ...e.map((e) =>
                        new Intl.Locale(e.replace(/_/g, "-"))
                          .maximize()
                          .toString(),
                      ),
                    ],
                  };
                }
                return a;
              })();
            return (
              u.language !== s.language &&
                (o += c(
                  { language: t.language, script: "", region: "" },
                  { language: r.language, script: "", region: "" },
                  l,
                )),
              u.script !== s.script &&
                (o += c(
                  { language: t.language, script: u.script, region: "" },
                  { language: r.language, script: s.script, region: "" },
                  l,
                )),
              u.region !== s.region && (o += c(u, s, l)),
              o
            );
          },
          { serializer: (e) => `${e[0]}|${e[1]}` },
        ),
        f = new WeakMap();
      function y(e, n, t = 838) {
        let a = 1 / 0,
          r = { matchedDesiredLocale: "", distances: {} },
          i = f.get(n);
        i ||
          ((i = n.map((e) => {
            try {
              return Intl.getCanonicalLocales([e])[0] || e;
            } catch {
              return e;
            }
          })),
          f.set(n, i));
        let u = new Set(i);
        for (let n = 0; n < e.length; n++) {
          let t = e[n];
          if (u.has(t)) {
            let e = 0 + 40 * n;
            if (
              ((r.distances[t] = { [t]: e }),
              e < a &&
                ((a = e),
                (r.matchedDesiredLocale = t),
                (r.matchedSupportedLocale = t)),
              0 === n)
            )
              return r;
          }
        }
        for (let n = 0; n < e.length; n++) {
          let t = e[n];
          try {
            let e = new Intl.Locale(t).maximize().toString();
            if (e !== t) {
              let i = (function (e) {
                let n = [],
                  t = e;
                for (; t; ) {
                  n.push(t);
                  let e = t.lastIndexOf("-");
                  if (-1 === e) break;
                  t = t.substring(0, e);
                }
                return n;
              })(e);
              for (let s = 0; s < i.length; s++) {
                let o = i[s];
                if (o !== t && u.has(o)) {
                  let i;
                  try {
                    i =
                      new Intl.Locale(o).maximize().toString() === e
                        ? 0 + 40 * n
                        : 10 * s + 40 * n;
                  } catch {
                    i = 10 * s + 40 * n;
                  }
                  r.distances[t] || (r.distances[t] = {}),
                    (r.distances[t][o] = i),
                    i < a &&
                      ((a = i),
                      (r.matchedDesiredLocale = t),
                      (r.matchedSupportedLocale = o));
                  break;
                }
              }
            }
          } catch {}
        }
        return (
          (r.matchedSupportedLocale && 0 === a) ||
            (e.forEach((e, t) => {
              r.distances[e] || (r.distances[e] = {}),
                i.forEach((i, u) => {
                  let s = n[u],
                    o = _(e, i) + 0 + 40 * t;
                  (r.distances[e][s] = o),
                    o < a &&
                      ((a = o),
                      (r.matchedDesiredLocale = e),
                      (r.matchedSupportedLocale = s));
                });
            }),
            a >= t &&
              ((r.matchedDesiredLocale = void 0),
              (r.matchedSupportedLocale = void 0))),
          r
        );
      }
    },
  },
]);
//# sourceMappingURL=96242.23992bcbc8533c94.js.map
