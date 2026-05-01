"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34786"],
  {
    816885(e, t, r) {
      r.d(t, { b: () => n });
      function n(e, t, r, n) {
        var i = r ? r.call(n, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var o = Object.keys(e),
          a = Object.keys(t);
        if (o.length !== a.length) return !1;
        for (
          var u = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < o.length;
          c++
        ) {
          var s = o[c];
          if (!u(s)) return !1;
          var l = e[s],
            d = t[s];
          if (
            !1 === (i = r ? r.call(n, l, d, s) : void 0) ||
            (void 0 === i && l !== d)
          )
            return !1;
        }
        return !0;
      }
    },
    806424(e, t, r) {
      r.d(t, { j: () => a });
      var n = r(218436),
        i = r(87515);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function a(e, t, r) {
        var a, u, c, s, l, d;
        return (
          (a =
            e ||
            function () {
              return {};
            }),
          (u = function () {
            return r.reconnect();
          }),
          (l = (s =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((c = (0, i.F)(t, a, u))) ||
            (function (e) {
              var t,
                r,
                n =
                  null == e
                    ? null
                    : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != n) {
                var i = [],
                  o = !0,
                  a = !1;
                try {
                  for (
                    n = n.call(e);
                    !(o = (t = n.next()).done) &&
                    (i.push(t.value), 2 !== i.length);
                    o = !0
                  );
                } catch (e) {
                  (a = !0), (r = e);
                } finally {
                  try {
                    o || null == n.return || n.return();
                  } finally {
                    if (a) throw r;
                  }
                }
                return i;
              }
            })(c) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return o(e, 2);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t)
                )
                  return Array.from(e);
                if (
                  "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                )
                  return o(e, 2);
              }
            })(c) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })())[0]),
          (d = s[1]),
          (0, n.E)(
            function () {
              var e = t.getHandlerId();
              if (null != e)
                return t.subscribeToStateChange(d, { handlerIds: [e] });
            },
            [t, d],
          ),
          l
        );
      }
    },
    312742(e, t, r) {
      r.d(t, { i: () => p });
      var n = r(212246),
        i = r(218436),
        o = r(64700);
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
      function u(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var c = (function () {
          var e;
          function t(e, r, n) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            u(this, "spec", void 0),
              u(this, "monitor", void 0),
              u(this, "connector", void 0),
              (this.spec = e),
              (this.monitor = r),
              (this.connector = n);
          }
          return (
            (e = [
              {
                key: "beginDrag",
                value: function () {
                  var e,
                    t = this.spec,
                    r = this.monitor;
                  return null !=
                    (e =
                      "object" === a(t.item)
                        ? t.item
                        : "function" == typeof t.item
                          ? t.item(r)
                          : {})
                    ? e
                    : null;
                },
              },
              {
                key: "canDrag",
                value: function () {
                  var e = this.spec,
                    t = this.monitor;
                  return "boolean" == typeof e.canDrag
                    ? e.canDrag
                    : "function" != typeof e.canDrag || e.canDrag(t);
                },
              },
              {
                key: "isDragging",
                value: function (e, t) {
                  var r = this.spec,
                    n = this.monitor,
                    i = r.isDragging;
                  return i ? i(n) : t === e.getSourceId();
                },
              },
              {
                key: "endDrag",
                value: function () {
                  var e = this.spec,
                    t = this.monitor,
                    r = this.connector,
                    n = e.end;
                  n && n(t.getItem(), t), r.reconnect();
                },
              },
            ]),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            })(t.prototype, e),
            t
          );
        })(),
        s = r(190334),
        l = r(321733);
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var f = r(55166),
        g = r(394886),
        h = r(541163),
        v = r(806424);
      function p(e, t) {
        var r,
          a,
          u,
          p,
          y,
          b,
          m,
          D,
          I,
          S = (0, f.I)(e, t);
        (0, l.V)(
          !S.begin,
          "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
        );
        var k =
            ((r = (0, s.u)()),
            (0, o.useMemo)(
              function () {
                return new g.G(r);
              },
              [r],
            )),
          O =
            ((a = S.options),
            (u = S.previewOptions),
            (p = (0, s.u)()),
            (y = (0, o.useMemo)(
              function () {
                return new h.b(p.getBackend());
              },
              [p],
            )),
            (0, i.E)(
              function () {
                return (
                  (y.dragSourceOptions = a || null),
                  y.reconnect(),
                  function () {
                    return y.disconnectDragSource();
                  }
                );
              },
              [y, a],
            ),
            (0, i.E)(
              function () {
                return (
                  (y.dragPreviewOptions = u || null),
                  y.reconnect(),
                  function () {
                    return y.disconnectDragPreview();
                  }
                );
              },
              [y, u],
            ),
            y);
        return (
          (b = (0, s.u)()),
          (m = (0, o.useMemo)(
            function () {
              return new c(S, k, O);
            },
            [k, O],
          )),
          (0, o.useEffect)(
            function () {
              m.spec = S;
            },
            [S],
          ),
          (D = m),
          (I = (0, o.useMemo)(
            function () {
              var e = S.type;
              return (0, l.V)(null != e, "spec.type must be defined"), e;
            },
            [S],
          )),
          (0, i.E)(
            function () {
              if (null != I) {
                var e,
                  t =
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })((e = (0, n.V)(I, D, b))) ||
                    (function (e) {
                      var t,
                        r,
                        n =
                          null == e
                            ? null
                            : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                              e["@@iterator"];
                      if (null != n) {
                        var i = [],
                          o = !0,
                          a = !1;
                        try {
                          for (
                            n = n.call(e);
                            !(o = (t = n.next()).done) &&
                            (i.push(t.value), 2 !== i.length);
                            o = !0
                          );
                        } catch (e) {
                          (a = !0), (r = e);
                        } finally {
                          try {
                            o || null == n.return || n.return();
                          } finally {
                            if (a) throw r;
                          }
                        }
                        return i;
                      }
                    })(e) ||
                    (function (e) {
                      if (e) {
                        if ("string" == typeof e) return d(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (
                          ("Object" === t &&
                            e.constructor &&
                            (t = e.constructor.name),
                          "Map" === t || "Set" === t)
                        )
                          return Array.from(e);
                        if (
                          "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        )
                          return d(e, 2);
                      }
                    })(e) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })(),
                  r = t[0],
                  i = t[1];
                return k.receiveHandlerId(r), O.receiveHandlerId(r), i;
              }
            },
            [b, k, O, D, I],
          ),
          [
            (0, v.j)(S.collect, k, O),
            (0, o.useMemo)(
              function () {
                return O.hooks.dragSource();
              },
              [O],
            ),
            (0, o.useMemo)(
              function () {
                return O.hooks.dragPreview();
              },
              [O],
            ),
          ]
        );
      }
    },
    295868(e, t, r) {
      r.d(t, { H: () => v });
      var n = r(212246),
        i = r(190334),
        o = r(218436),
        a = r(321733),
        u = r(64700);
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var s = (function () {
        var e;
        function t(e, r) {
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          c(this, "spec", void 0),
            c(this, "monitor", void 0),
            (this.spec = e),
            (this.monitor = r);
        }
        return (
          (e = [
            {
              key: "canDrop",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                return !e.canDrop || e.canDrop(t.getItem(), t);
              },
            },
            {
              key: "hover",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                e.hover && e.hover(t.getItem(), t);
              },
            },
            {
              key: "drop",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                if (e.drop) return e.drop(t.getItem(), t);
              },
            },
          ]),
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          })(t.prototype, e),
          t
        );
      })();
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var d = r(55166),
        f = r(162551),
        g = r(848575),
        h = r(806424);
      function v(e, t) {
        var r,
          c,
          v,
          p,
          y,
          b,
          m,
          D,
          I,
          S = (0, d.I)(e, t),
          k =
            ((r = (0, i.u)()),
            (0, u.useMemo)(
              function () {
                return new f.b(r);
              },
              [r],
            )),
          O =
            ((c = S.options),
            (v = (0, i.u)()),
            (p = (0, u.useMemo)(
              function () {
                return new g.P(v.getBackend());
              },
              [v],
            )),
            (0, o.E)(
              function () {
                return (
                  (p.dropTargetOptions = c || null),
                  p.reconnect(),
                  function () {
                    return p.disconnectDropTarget();
                  }
                );
              },
              [c],
            ),
            p);
        return (
          (y = (0, i.u)()),
          (b = (0, u.useMemo)(
            function () {
              return new s(S, k);
            },
            [k],
          )),
          (0, u.useEffect)(
            function () {
              b.spec = S;
            },
            [S],
          ),
          (m = b),
          (D = S.accept),
          (I = (0, u.useMemo)(
            function () {
              return (
                (0, a.V)(null != S.accept, "accept must be defined"),
                Array.isArray(D) ? D : [D]
              );
            },
            [D],
          )),
          (0, o.E)(
            function () {
              var e,
                t =
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })((e = (0, n.l)(I, m, y))) ||
                  (function (e) {
                    var t,
                      r,
                      n =
                        null == e
                          ? null
                          : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                            e["@@iterator"];
                    if (null != n) {
                      var i = [],
                        o = !0,
                        a = !1;
                      try {
                        for (
                          n = n.call(e);
                          !(o = (t = n.next()).done) &&
                          (i.push(t.value), 2 !== i.length);
                          o = !0
                        );
                      } catch (e) {
                        (a = !0), (r = e);
                      } finally {
                        try {
                          o || null == n.return || n.return();
                        } finally {
                          if (a) throw r;
                        }
                      }
                      return i;
                    }
                  })(e) ||
                  (function (e) {
                    if (e) {
                      if ("string" == typeof e) return l(e, 2);
                      var t = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === t &&
                          e.constructor &&
                          (t = e.constructor.name),
                        "Map" === t || "Set" === t)
                      )
                        return Array.from(e);
                      if (
                        "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      )
                        return l(e, 2);
                    }
                  })(e) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })(),
                r = t[0],
                i = t[1];
              return k.receiveHandlerId(r), O.receiveHandlerId(r), i;
            },
            [
              y,
              k,
              m,
              O,
              I.map(function (e) {
                return e.toString();
              }).join("|"),
            ],
          ),
          [
            (0, h.j)(S.collect, k, O),
            (0, u.useMemo)(
              function () {
                return O.hooks.dropTarget();
              },
              [O],
            ),
          ]
        );
      }
    },
    55166(e, t, r) {
      r.d(t, { I: () => o });
      var n = r(64700);
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        var r,
          o =
            (function (e) {
              if (Array.isArray(e)) return i(e);
            })((r = t || [])) ||
            (function (e) {
              if (
                ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(r) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return i(e, void 0);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t)
                )
                  return Array.from(e);
                if (
                  "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                )
                  return i(e, void 0);
              }
            })(r) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })();
        return (
          null == t && "function" != typeof e && o.push(e),
          (0, n.useMemo)(function () {
            return "function" == typeof e ? e() : e;
          }, o)
        );
      }
    },
    394886(e, t, r) {
      r.d(t, { G: () => u });
      var n = r(321733);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var o = !1,
        a = !1,
        u = (function () {
          var e;
          function t(e) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            i(this, "internalMonitor", void 0),
              i(this, "sourceId", null),
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
                  (0, n.V)(
                    !o,
                    "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                  );
                  try {
                    return (
                      (o = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    o = !1;
                  }
                },
              },
              {
                key: "isDragging",
                value: function () {
                  if (!this.sourceId) return !1;
                  (0, n.V)(
                    !a,
                    "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
                  );
                  try {
                    return (
                      (a = !0),
                      this.internalMonitor.isDraggingSource(this.sourceId)
                    );
                  } finally {
                    a = !1;
                  }
                },
              },
              {
                key: "subscribeToStateChange",
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
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
                value: function (e, t) {
                  return this.internalMonitor.isOverTarget(e, t);
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
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            })(t.prototype, e),
            t
          );
        })();
    },
    162551(e, t, r) {
      r.d(t, { b: () => a });
      var n = r(321733);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var o = !1,
        a = (function () {
          var e;
          function t(e) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            i(this, "internalMonitor", void 0),
              i(this, "targetId", null),
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
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: "canDrop",
                value: function () {
                  if (!this.targetId) return !1;
                  (0, n.V)(
                    !o,
                    "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
                  );
                  try {
                    return (
                      (o = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    o = !1;
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
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            })(t.prototype, e),
            t
          );
        })();
    },
    541163(e, t, r) {
      r.d(t, { b: () => u });
      var n = r(611886),
        i = r(251874),
        o = r(816885);
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var u = (function () {
        var e;
        function t(e) {
          var r = this;
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          a(
            this,
            "hooks",
            (0, n.i)({
              dragSource: function (e, t) {
                r.clearDragSource(),
                  (r.dragSourceOptions = t || null),
                  (0, i.i)(e) ? (r.dragSourceRef = e) : (r.dragSourceNode = e),
                  r.reconnectDragSource();
              },
              dragPreview: function (e, t) {
                r.clearDragPreview(),
                  (r.dragPreviewOptions = t || null),
                  (0, i.i)(e)
                    ? (r.dragPreviewRef = e)
                    : (r.dragPreviewNode = e),
                  r.reconnectDragPreview();
              },
            }),
          ),
            a(this, "handlerId", null),
            a(this, "dragSourceRef", null),
            a(this, "dragSourceNode", void 0),
            a(this, "dragSourceOptionsInternal", null),
            a(this, "dragSourceUnsubscribe", void 0),
            a(this, "dragPreviewRef", null),
            a(this, "dragPreviewNode", void 0),
            a(this, "dragPreviewOptionsInternal", null),
            a(this, "dragPreviewUnsubscribe", void 0),
            a(this, "lastConnectedHandlerId", null),
            a(this, "lastConnectedDragSource", null),
            a(this, "lastConnectedDragSourceOptions", null),
            a(this, "lastConnectedDragPreview", null),
            a(this, "lastConnectedDragPreviewOptions", null),
            a(this, "backend", void 0),
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
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragSourceChange() ||
                    this.didDragSourceOptionsChange();
                if ((t && this.disconnectDragSource(), this.handlerId)) {
                  if (!e) {
                    this.lastConnectedDragSource = e;
                    return;
                  }
                  t &&
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
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragPreviewChange() ||
                    this.didDragPreviewOptionsChange();
                if ((t && this.disconnectDragPreview(), this.handlerId)) {
                  if (!e) {
                    this.lastConnectedDragPreview = e;
                    return;
                  }
                  t &&
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
                return !(0, o.b)(
                  this.lastConnectedDragSourceOptions,
                  this.dragSourceOptions,
                );
              },
            },
            {
              key: "didDragPreviewOptionsChange",
              value: function () {
                return !(0, o.b)(
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
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          })(t.prototype, e),
          t
        );
      })();
    },
    848575(e, t, r) {
      r.d(t, { P: () => u });
      var n = r(816885),
        i = r(611886),
        o = r(251874);
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var u = (function () {
        var e;
        function t(e) {
          var r = this;
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          a(
            this,
            "hooks",
            (0, i.i)({
              dropTarget: function (e, t) {
                r.clearDropTarget(),
                  (r.dropTargetOptions = t),
                  (0, o.i)(e) ? (r.dropTargetRef = e) : (r.dropTargetNode = e),
                  r.reconnect();
              },
            }),
          ),
            a(this, "handlerId", null),
            a(this, "dropTargetRef", null),
            a(this, "dropTargetNode", void 0),
            a(this, "dropTargetOptionsInternal", null),
            a(this, "unsubscribeDropTarget", void 0),
            a(this, "lastConnectedHandlerId", null),
            a(this, "lastConnectedDropTarget", null),
            a(this, "lastConnectedDropTargetOptions", null),
            a(this, "backend", void 0),
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
                var t = this.dropTarget;
                if (this.handlerId) {
                  if (!t) {
                    this.lastConnectedDropTarget = t;
                    return;
                  }
                  e &&
                    ((this.lastConnectedHandlerId = this.handlerId),
                    (this.lastConnectedDropTarget = t),
                    (this.lastConnectedDropTargetOptions =
                      this.dropTargetOptions),
                    (this.unsubscribeDropTarget =
                      this.backend.connectDropTarget(
                        this.handlerId,
                        t,
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
                return !(0, n.b)(
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
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          })(t.prototype, e),
          t
        );
      })();
    },
    251874(e, t, r) {
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
      function i(e) {
        return (
          null !== e &&
          "object" === n(e) &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      r.d(t, { i: () => i });
    },
    212246(e, t, r) {
      function n(e, t, r) {
        var n = r.getRegistry(),
          i = n.addTarget(e, t);
        return [
          i,
          function () {
            return n.removeTarget(i);
          },
        ];
      }
      function i(e, t, r) {
        var n = r.getRegistry(),
          i = n.addSource(e, t);
        return [
          i,
          function () {
            return n.removeSource(i);
          },
        ];
      }
      r.d(t, { V: () => i, l: () => n });
    },
    611886(e, t, r) {
      r.d(t, { i: () => o });
      var n = r(321733),
        i = r(64700);
      function o(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (r) {
            var o = e[r];
            if (r.endsWith("Ref")) t[r] = e[r];
            else {
              var u = function () {
                var e,
                  t,
                  r,
                  u =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  c =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                if (!(0, i.isValidElement)(u)) return o(u, c), u;
                if ("string" != typeof u.type) {
                  var s = u.type.displayName || u.type.name || "the component";
                  throw Error(
                    "Only native element nodes can now be passed to React DnD connectors." +
                      "You can either wrap ".concat(
                        s,
                        " into a <div>, or turn it into a ",
                      ) +
                      "drag source or a drop target itself.",
                  );
                }
                return (
                  (e = u),
                  (t = c
                    ? function (e) {
                        return o(e, c);
                      }
                    : o),
                  (r = e.ref),
                  ((0, n.V)(
                    "string" != typeof r,
                    "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs",
                  ),
                  r)
                    ? (0, i.cloneElement)(e, {
                        ref: function (e) {
                          a(r, e), a(t, e);
                        },
                      })
                    : (0, i.cloneElement)(e, { ref: t })
                );
              };
              t[r] = function () {
                return u;
              };
            }
          }),
          t
        );
      }
      function a(e, t) {
        "function" == typeof e ? e(t) : (e.current = t);
      }
    },
  },
]);
//# sourceMappingURL=34786.0ceebf6ff3b0ebc9.js.map
