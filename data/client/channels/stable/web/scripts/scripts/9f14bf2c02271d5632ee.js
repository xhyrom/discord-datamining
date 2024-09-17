(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11438"],
  {
    707019: function (e, t, r) {
      var n = r(801282),
        o = r(900013),
        i = r(730179),
        a = Math.ceil,
        s = Math.max;
      e.exports = function (e, t, r) {
        t = (r ? o(e, t, r) : void 0 === t) ? 1 : s(i(t), 0);
        var c = null == e ? 0 : e.length;
        if (!c || t < 1) return [];
        for (var u = 0, d = 0, p = Array(a(c / t)); u < c; )
          p[d++] = n(e, u, (u += t));
        return p;
      };
    },
    895162: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return d;
        },
      });
      var n = r(573654),
        o = r(324409),
        i = r(446555),
        a = r(22555),
        s = r(139883),
        c = r(952600),
        u = r(982777);
      function d(e, t, r) {
        var d =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (0, s.U9)("DragSource", "type, spec, collect[, options]", e, t, r, d);
        var p = e;
        "function" != typeof e &&
          ((0, n.k)(
            (0, s.m5)(e),
            'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            e,
          ),
          (p = function () {
            return e;
          })),
          (0, n.k)(
            (0, s.PO)(t),
            'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            t,
          );
        var f = (0, u.a)(t);
        return (
          (0, n.k)(
            "function" == typeof r,
            'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            r,
          ),
          (0, n.k)(
            (0, s.PO)(d),
            'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            r,
          ),
          function (e) {
            return (0, c.K)({
              containerDisplayName: "DragSource",
              createHandler: f,
              registerHandler: o.w,
              createConnector: function (e) {
                return new i.x(e);
              },
              createMonitor: function (e) {
                return new a.p(e);
              },
              DecoratedComponent: e,
              getType: p,
              collect: r,
              options: d,
            });
          }
        );
      }
    },
    582966: function (e, t, r) {
      "use strict";
      r.d(t, {
        G: function () {
          return d;
        },
      });
      var n = r(573654),
        o = r(324409),
        i = r(496907),
        a = r(210422),
        s = r(139883),
        c = r(952600),
        u = r(149304);
      function d(e, t, r) {
        var d =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (0, s.U9)("DropTarget", "type, spec, collect[, options]", e, t, r, d);
        var p = e;
        "function" != typeof e &&
          ((0, n.k)(
            (0, s.m5)(e, !0),
            'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            e,
          ),
          (p = function () {
            return e;
          })),
          (0, n.k)(
            (0, s.PO)(t),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            t,
          );
        var f = (0, u.S)(t);
        return (
          (0, n.k)(
            "function" == typeof r,
            'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            r,
          ),
          (0, n.k)(
            (0, s.PO)(d),
            'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            r,
          ),
          function (e) {
            return (0, c.K)({
              containerDisplayName: "DropTarget",
              createHandler: f,
              registerHandler: o.n,
              createMonitor: function (e) {
                return new i.H(e);
              },
              createConnector: function (e) {
                return new a.Y(e);
              },
              DecoratedComponent: e,
              getType: p,
              collect: r,
              options: d,
            });
          }
        );
      }
    },
    982777: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return d;
        },
      });
      var n = r(573654),
        o = r(139883);
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
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
      var s = ["canDrag", "beginDrag", "isDragging", "endDrag"],
        c = ["beginDrag"],
        u = (function () {
          var e, t, r;
          function n(e, t, r) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
              a(this, "props", null),
              a(this, "spec", void 0),
              a(this, "monitor", void 0),
              a(this, "ref", void 0),
              a(this, "beginDrag", function () {
                if (!!o.props) {
                  var e = o.spec.beginDrag(o.props, o.monitor, o.ref.current);
                  return e;
                }
              }),
              (this.spec = e),
              (this.monitor = t),
              (this.ref = r);
          }
          return (
            (e = n),
            (t = [
              {
                key: "receiveProps",
                value: function (e) {
                  this.props = e;
                },
              },
              {
                key: "canDrag",
                value: function () {
                  return (
                    !!this.props &&
                    (!this.spec.canDrag ||
                      this.spec.canDrag(this.props, this.monitor))
                  );
                },
              },
              {
                key: "isDragging",
                value: function (e, t) {
                  return (
                    !!this.props &&
                    (this.spec.isDragging
                      ? this.spec.isDragging(this.props, this.monitor)
                      : t === e.getSourceId())
                  );
                },
              },
              {
                key: "endDrag",
                value: function () {
                  if (!!this.props && !!this.spec.endDrag)
                    this.spec.endDrag(
                      this.props,
                      this.monitor,
                      (0, o.Al)(this.ref),
                    );
                },
              },
            ]),
            i(e.prototype, t),
            n
          );
        })();
      function d(e) {
        return (
          Object.keys(e).forEach(function (t) {
            (0, n.k)(
              s.indexOf(t) > -1,
              'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              s.join(", "),
              t,
            ),
              (0, n.k)(
                "function" == typeof e[t],
                "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",
                t,
                t,
                e[t],
              );
          }),
          c.forEach(function (t) {
            (0, n.k)(
              "function" == typeof e[t],
              "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",
              t,
              t,
              e[t],
            );
          }),
          function (t, r) {
            return new u(e, t, r);
          }
        );
      }
    },
    149304: function (e, t, r) {
      "use strict";
      r.d(t, {
        S: function () {
          return u;
        },
      });
      var n = r(573654),
        o = r(139883);
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
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
      var s = ["canDrop", "hover", "drop"],
        c = (function () {
          var e, t, r;
          function n(e, t, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
              a(this, "props", null),
              a(this, "spec", void 0),
              a(this, "monitor", void 0),
              a(this, "ref", void 0),
              (this.spec = e),
              (this.monitor = t),
              (this.ref = r);
          }
          return (
            (e = n),
            (t = [
              {
                key: "receiveProps",
                value: function (e) {
                  this.props = e;
                },
              },
              {
                key: "receiveMonitor",
                value: function (e) {
                  this.monitor = e;
                },
              },
              {
                key: "canDrop",
                value: function () {
                  return (
                    !this.spec.canDrop ||
                    this.spec.canDrop(this.props, this.monitor)
                  );
                },
              },
              {
                key: "hover",
                value: function () {
                  if (!!this.spec.hover && !!this.props)
                    this.spec.hover(
                      this.props,
                      this.monitor,
                      (0, o.Al)(this.ref),
                    );
                },
              },
              {
                key: "drop",
                value: function () {
                  if (!!this.spec.drop) {
                    var e = this.spec.drop(
                      this.props,
                      this.monitor,
                      this.ref.current,
                    );
                    return e;
                  }
                },
              },
            ]),
            i(e.prototype, t),
            n
          );
        })();
      function u(e) {
        return (
          Object.keys(e).forEach(function (t) {
            (0, n.k)(
              s.indexOf(t) > -1,
              'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              s.join(", "),
              t,
            ),
              (0, n.k)(
                "function" == typeof e[t],
                "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",
                t,
                t,
                e[t],
              );
          }),
          function (t, r) {
            return new c(e, t, r);
          }
        );
      }
    },
    952600: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return m;
        },
      });
      var n = r(735250),
        o = r(470079),
        i = r(521548),
        a = r(573654),
        s = r(84562),
        c = r(74555),
        u = r(139883),
        d = r(26095),
        p = r.n(d);
      function f(e) {
        return (f =
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
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function h(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function b(e, t, r) {
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
      function m(e) {
        var t = e.DecoratedComponent,
          r = e.createHandler,
          d = e.createMonitor,
          m = e.createConnector,
          D = e.registerHandler,
          k = e.containerDisplayName,
          w = e.getType,
          O = e.collect,
          j = e.options.arePropsEqual,
          C = void 0 === j ? i.w : j,
          S = t.displayName || t.name || "Component",
          P = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && v(e, t);
            })(T, e);
            var p,
              k,
              j,
              P,
              R,
              x =
                ((p = T),
                (k = (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = g(p);
                  return (
                    (e = k
                      ? Reflect.construct(t, arguments, g(this).constructor)
                      : t.apply(this, arguments)),
                    (function (e, t) {
                      if (t && ("object" === f(t) || "function" == typeof t))
                        return t;
                      if (void 0 !== t)
                        throw TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return y(e);
                    })(this, e)
                  );
                });
            function T(e) {
              var t;
              return (
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw TypeError("Cannot call a class as a function");
                })(this, T),
                b(y((t = x.call(this, e))), "decoratedRef", (0, o.createRef)()),
                b(y(t), "handlerId", void 0),
                b(y(t), "manager", void 0),
                b(y(t), "handlerMonitor", void 0),
                b(y(t), "handlerConnector", void 0),
                b(y(t), "handler", void 0),
                b(y(t), "disposable", void 0),
                b(y(t), "currentType", void 0),
                b(y(t), "handleChange", function () {
                  var e = t.getCurrentState();
                  !(0, i.w)(e, t.state) && t.setState(e);
                }),
                (t.disposable = new c.M$()),
                t.receiveProps(e),
                t.dispose(),
                t
              );
            }
            return (
              (j = T),
              (P = [
                {
                  key: "getHandlerId",
                  value: function () {
                    return this.handlerId;
                  },
                },
                {
                  key: "getDecoratedComponentInstance",
                  value: function () {
                    return (
                      (0, a.k)(
                        this.decoratedRef.current,
                        "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()",
                      ),
                      this.decoratedRef.current
                    );
                  },
                },
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    return !C(e, this.props) || !(0, i.w)(t, this.state);
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    (this.disposable = new c.M$()),
                      (this.currentType = void 0),
                      this.receiveProps(this.props),
                      this.handleChange();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    !C(this.props, e) &&
                      (this.receiveProps(this.props), this.handleChange());
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.dispose();
                  },
                },
                {
                  key: "receiveProps",
                  value: function (e) {
                    if (!!this.handler)
                      this.handler.receiveProps(e), this.receiveType(w(e));
                  },
                },
                {
                  key: "receiveType",
                  value: function (e) {
                    if (
                      !!this.handlerMonitor &&
                      !!this.manager &&
                      !!this.handlerConnector &&
                      e !== this.currentType
                    ) {
                      this.currentType = e;
                      var t,
                        r,
                        n =
                          ((r = 2),
                          (function (e) {
                            if (Array.isArray(e)) return e;
                          })((t = D(e, this.handler, this.manager))) ||
                            (function (e, t) {
                              var r,
                                n,
                                o =
                                  null == e
                                    ? null
                                    : ("undefined" != typeof Symbol &&
                                        e[Symbol.iterator]) ||
                                      e["@@iterator"];
                              if (null != o) {
                                var i = [],
                                  a = !0,
                                  s = !1;
                                try {
                                  for (
                                    o = o.call(e);
                                    !(a = (r = o.next()).done) &&
                                    (i.push(r.value), !t || i.length !== t);
                                    a = !0
                                  );
                                } catch (e) {
                                  (s = !0), (n = e);
                                } finally {
                                  try {
                                    !a && null != o.return && o.return();
                                  } finally {
                                    if (s) throw n;
                                  }
                                }
                                return i;
                              }
                            })(t, 2) ||
                            (function (e, t) {
                              if (e) {
                                if ("string" == typeof e) return l(e, t);
                                var r = Object.prototype.toString
                                  .call(e)
                                  .slice(8, -1);
                                if (
                                  ("Object" === r &&
                                    e.constructor &&
                                    (r = e.constructor.name),
                                  "Map" === r || "Set" === r)
                                )
                                  return Array.from(e);
                                if (
                                  "Arguments" === r ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    r,
                                  )
                                )
                                  return l(e, t);
                              }
                            })(t, r) ||
                            (function () {
                              throw TypeError(
                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                              );
                            })()),
                        o = n[0],
                        i = n[1];
                      (this.handlerId = o),
                        this.handlerMonitor.receiveHandlerId(o),
                        this.handlerConnector.receiveHandlerId(o);
                      var a = this.manager
                        .getMonitor()
                        .subscribeToStateChange(this.handleChange, {
                          handlerIds: [o],
                        });
                      this.disposable.setDisposable(
                        new c.Xz(new c.JT(a), new c.JT(i)),
                      );
                    }
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this.disposable.dispose(),
                      this.handlerConnector &&
                        this.handlerConnector.receiveHandlerId(null);
                  },
                },
                {
                  key: "getCurrentState",
                  value: function () {
                    if (!this.handlerConnector) return {};
                    var e = O(
                      this.handlerConnector.hooks,
                      this.handlerMonitor,
                      this.props,
                    );
                    return e;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return (0, n.jsx)(
                      s.L.Consumer,
                      {
                        children: function (r) {
                          var o = r.dragDropManager;
                          return (
                            e.receiveDragDropManager(o),
                            "undefined" != typeof requestAnimationFrame &&
                              requestAnimationFrame(function () {
                                var t;
                                return null === (t = e.handlerConnector) ||
                                  void 0 === t
                                  ? void 0
                                  : t.reconnect();
                              }),
                            (0, n.jsx)(
                              t,
                              Object.assign({}, e.props, e.getCurrentState(), {
                                ref: (0, u.J7)(t) ? e.decoratedRef : null,
                              }),
                              void 0,
                            )
                          );
                        },
                      },
                      void 0,
                    );
                  },
                },
                {
                  key: "receiveDragDropManager",
                  value: function (e) {
                    if (void 0 !== this.manager) return;
                    if (
                      ((0, a.k)(
                        void 0 !== e,
                        "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                        S,
                        S,
                      ),
                      void 0 !== e)
                    )
                      (this.manager = e),
                        (this.handlerMonitor = d(e)),
                        (this.handlerConnector = m(e.getBackend())),
                        (this.handler = r(
                          this.handlerMonitor,
                          this.decoratedRef,
                        ));
                  },
                },
              ]),
              h(j.prototype, P),
              T
            );
          })(o.Component);
        return (
          b(P, "DecoratedComponent", t),
          b(P, "displayName", "".concat(k, "(").concat(S, ")")),
          p()(P, t)
        );
      }
    },
    74555: function (e, t, r) {
      "use strict";
      r.d(t, {
        JT: function () {
          return c;
        },
        M$: function () {
          return d;
        },
        Xz: function () {
          return u;
        },
      });
      var n = r(139883);
      function o(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function a(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), e;
      }
      function s(e, t, r) {
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
        function e(t) {
          o(this, e),
            s(this, "isDisposed", !1),
            s(this, "action", void 0),
            (this.action = (0, n.mf)(t) ? t : n.ZT);
        }
        return (
          a(
            e,
            [
              {
                key: "dispose",
                value: function () {
                  !this.isDisposed && (this.action(), (this.isDisposed = !0));
                },
              },
            ],
            [
              {
                key: "isDisposable",
                value: function (e) {
                  return !!(e && (0, n.mf)(e.dispose));
                },
              },
              {
                key: "_fixup",
                value: function (t) {
                  return e.isDisposable(t) ? t : e.empty;
                },
              },
              {
                key: "create",
                value: function (t) {
                  return new e(t);
                },
              },
            ],
          ),
          e
        );
      })();
      s(c, "empty", { dispose: n.ZT });
      var u = (function () {
          function e() {
            o(this, e),
              s(this, "isDisposed", !1),
              s(this, "disposables", void 0);
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            this.disposables = r;
          }
          return (
            a(e, [
              {
                key: "add",
                value: function (e) {
                  this.isDisposed ? e.dispose() : this.disposables.push(e);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = !1;
                  if (!this.isDisposed) {
                    var r = this.disposables.indexOf(e);
                    -1 !== r &&
                      ((t = !0), this.disposables.splice(r, 1), e.dispose());
                  }
                  return t;
                },
              },
              {
                key: "clear",
                value: function () {
                  if (!this.isDisposed) {
                    for (
                      var e = this.disposables.length, t = Array(e), r = 0;
                      r < e;
                      r++
                    )
                      t[r] = this.disposables[r];
                    this.disposables = [];
                    for (var n = 0; n < e; n++) t[n].dispose();
                  }
                },
              },
              {
                key: "dispose",
                value: function () {
                  if (!this.isDisposed) {
                    this.isDisposed = !0;
                    for (
                      var e = this.disposables.length, t = Array(e), r = 0;
                      r < e;
                      r++
                    )
                      t[r] = this.disposables[r];
                    this.disposables = [];
                    for (var n = 0; n < e; n++) t[n].dispose();
                  }
                },
              },
            ]),
            e
          );
        })(),
        d = (function () {
          function e() {
            o(this, e), s(this, "isDisposed", !1), s(this, "current", void 0);
          }
          return (
            a(e, [
              {
                key: "getDisposable",
                value: function () {
                  return this.current;
                },
              },
              {
                key: "setDisposable",
                value: function (e) {
                  var t = this.isDisposed;
                  if (!t) {
                    var r = this.current;
                    (this.current = e), r && r.dispose();
                  }
                  t && e && e.dispose();
                },
              },
              {
                key: "dispose",
                value: function () {
                  if (!this.isDisposed) {
                    this.isDisposed = !0;
                    var e = this.current;
                    (this.current = void 0), e && e.dispose();
                  }
                },
              },
            ]),
            e
          );
        })();
    },
    139883: function (e, t, r) {
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
      function o(e) {
        var t = e.current;
        return null == t ? null : t.decoratedRef ? t.decoratedRef.current : t;
      }
      r.d(t, {
        Al: function () {
          return o;
        },
        J7: function () {
          return i;
        },
        PO: function () {
          return u;
        },
        U9: function () {
          return a;
        },
        ZT: function () {
          return c;
        },
        m5: function () {
          return function e(t, r) {
            return (
              "string" == typeof t ||
              "symbol" === n(t) ||
              (!!r &&
                Array.isArray(t) &&
                t.every(function (t) {
                  return e(t, !1);
                }))
            );
          };
        },
        mf: function () {
          return s;
        },
      });
      function i(e) {
        var t, r, n;
        return (
          ((t = e) && t.prototype && "function" == typeof t.prototype.render) ||
          (null == (r = e)
            ? void 0
            : null === (n = r.$$typeof) || void 0 === n
              ? void 0
              : n.toString()) === "Symbol(react.forward_ref)"
        );
      }
      function a(e, t) {}
      function s(e) {
        return "function" == typeof e;
      }
      function c() {}
      function u(e) {
        if (!("object" === n((t = e)) && null !== t)) return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        for (var t, r = e; null !== Object.getPrototypeOf(r); )
          r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(e) === r;
      }
    },
  },
]);
//# sourceMappingURL=9f14bf2c02271d5632ee.js.map
