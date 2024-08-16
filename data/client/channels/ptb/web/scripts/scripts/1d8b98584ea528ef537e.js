(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50990"],
  {
    707019: function (e, t, r) {
      var n = r(801282),
        o = r(900013),
        i = r(730179),
        s = Math.ceil,
        a = Math.max;
      e.exports = function (e, t, r) {
        t = (r ? o(e, t, r) : void 0 === t) ? 1 : a(i(t), 0);
        var c = null == e ? 0 : e.length;
        if (!c || t < 1) return [];
        for (var u = 0, d = 0, l = Array(s(c / t)); u < c; )
          l[d++] = n(e, u, (u += t));
        return l;
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
        s = r(22555),
        a = r(139883),
        c = r(952600),
        u = r(982777);
      function d(e, t, r) {
        var d =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (0, a.U9)("DragSource", "type, spec, collect[, options]", e, t, r, d);
        var l = e;
        "function" != typeof e &&
          ((0, n.k)(
            (0, a.m5)(e),
            'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            e,
          ),
          (l = function () {
            return e;
          })),
          (0, n.k)(
            (0, a.PO)(t),
            'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            t,
          );
        var p = (0, u.a)(t);
        return (
          (0, n.k)(
            "function" == typeof r,
            'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            r,
          ),
          (0, n.k)(
            (0, a.PO)(d),
            'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            r,
          ),
          function (e) {
            return (0, c.K)({
              containerDisplayName: "DragSource",
              createHandler: p,
              registerHandler: o.w,
              createConnector: function (e) {
                return new i.x(e);
              },
              createMonitor: function (e) {
                return new s.p(e);
              },
              DecoratedComponent: e,
              getType: l,
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
        s = r(210422),
        a = r(139883),
        c = r(952600),
        u = r(149304);
      function d(e, t, r) {
        var d =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (0, a.U9)("DropTarget", "type, spec, collect[, options]", e, t, r, d);
        var l = e;
        "function" != typeof e &&
          ((0, n.k)(
            (0, a.m5)(e, !0),
            'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            e,
          ),
          (l = function () {
            return e;
          })),
          (0, n.k)(
            (0, a.PO)(t),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            t,
          );
        var p = (0, u.S)(t);
        return (
          (0, n.k)(
            "function" == typeof r,
            'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            r,
          ),
          (0, n.k)(
            (0, a.PO)(d),
            'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            r,
          ),
          function (e) {
            return (0, c.K)({
              containerDisplayName: "DropTarget",
              createHandler: p,
              registerHandler: o.n,
              createMonitor: function (e) {
                return new i.H(e);
              },
              createConnector: function (e) {
                return new s.Y(e);
              },
              DecoratedComponent: e,
              getType: l,
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
      var a = ["canDrag", "beginDrag", "isDragging", "endDrag"],
        c = ["beginDrag"],
        u = (function () {
          var e, t, r;
          function n(e, t, r) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
              s(this, "props", null),
              s(this, "spec", void 0),
              s(this, "monitor", void 0),
              s(this, "ref", void 0),
              s(this, "beginDrag", function () {
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
              a.indexOf(t) > -1,
              'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              a.join(", "),
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
      var a = ["canDrop", "hover", "drop"],
        c = (function () {
          var e, t, r;
          function n(e, t, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
              s(this, "props", null),
              s(this, "spec", void 0),
              s(this, "monitor", void 0),
              s(this, "ref", void 0),
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
              a.indexOf(t) > -1,
              'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              a.join(", "),
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
        s = r(573654),
        a = r(84562),
        c = r(74555),
        u = r(139883),
        d = r(26095),
        l = r.n(d);
      function p(e) {
        return (p =
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
      function f(e, t) {
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
          x = e.collect,
          C = e.options.arePropsEqual,
          E = void 0 === C ? i.w : C,
          S = t.displayName || t.name || "Component",
          O = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && v(e, t);
            })(P, e);
            var l,
              k,
              C,
              O,
              j,
              R =
                ((l = P),
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
                    t = g(l);
                  return (
                    (e = k
                      ? Reflect.construct(t, arguments, g(this).constructor)
                      : t.apply(this, arguments)),
                    (function (e, t) {
                      if (t && ("object" === p(t) || "function" == typeof t))
                        return t;
                      if (void 0 !== t)
                        throw TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return y(e);
                    })(this, e)
                  );
                });
            function P(e) {
              var t;
              return (
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw TypeError("Cannot call a class as a function");
                })(this, P),
                b(y((t = R.call(this, e))), "decoratedRef", (0, o.createRef)()),
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
              (C = P),
              (O = [
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
                      (0, s.k)(
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
                    return !E(e, this.props) || !(0, i.w)(t, this.state);
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
                    !E(this.props, e) &&
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
                                  s = !0,
                                  a = !1;
                                try {
                                  for (
                                    o = o.call(e);
                                    !(s = (r = o.next()).done) &&
                                    (i.push(r.value), !t || i.length !== t);
                                    s = !0
                                  );
                                } catch (e) {
                                  (a = !0), (n = e);
                                } finally {
                                  try {
                                    !s && null != o.return && o.return();
                                  } finally {
                                    if (a) throw n;
                                  }
                                }
                                return i;
                              }
                            })(t, 2) ||
                            (function (e, t) {
                              if (e) {
                                if ("string" == typeof e) return f(e, t);
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
                                  return f(e, t);
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
                      var s = this.manager
                        .getMonitor()
                        .subscribeToStateChange(this.handleChange, {
                          handlerIds: [o],
                        });
                      this.disposable.setDisposable(
                        new c.Xz(new c.JT(s), new c.JT(i)),
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
                    var e = x(
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
                      a.L.Consumer,
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
                      ((0, s.k)(
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
              h(C.prototype, O),
              P
            );
          })(o.Component);
        return (
          b(O, "DecoratedComponent", t),
          b(O, "displayName", "".concat(k, "(").concat(S, ")")),
          l()(O, t)
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
      function s(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), e;
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
      var c = (function () {
        function e(t) {
          o(this, e),
            a(this, "isDisposed", !1),
            a(this, "action", void 0),
            (this.action = (0, n.mf)(t) ? t : n.ZT);
        }
        return (
          s(
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
      a(c, "empty", { dispose: n.ZT });
      var u = (function () {
          function e() {
            o(this, e),
              a(this, "isDisposed", !1),
              a(this, "disposables", void 0);
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            this.disposables = r;
          }
          return (
            s(e, [
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
            o(this, e), a(this, "isDisposed", !1), a(this, "current", void 0);
          }
          return (
            s(e, [
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
          return s;
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
          return a;
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
      function s(e, t) {}
      function a(e) {
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
    349445: function (e, t, r) {
      "use strict";
      r.d(t, {
        SV: function () {
          return s;
        },
      });
      var n = r(470079);
      let o = (0, n.createContext)(null),
        i = { didCatch: !1, error: null };
      class s extends n.Component {
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = i);
        }
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, r, n = arguments.length, o = Array(n), s = 0;
              s < n;
              s++
            )
              o[s] = arguments[s];
            null === (t = (r = this.props).onReset) ||
              void 0 === t ||
              t.call(r, { args: o, reason: "imperative-api" }),
              this.setState(i);
          }
        }
        componentDidCatch(e, t) {
          var r, n;
          null === (r = (n = this.props).onError) ||
            void 0 === r ||
            r.call(n, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: r } = this.state,
            { resetKeys: n } = this.props;
          if (
            r &&
            null !== t.error &&
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
              );
            })(e.resetKeys, n)
          ) {
            var o, s;
            null === (o = (s = this.props).onReset) ||
              void 0 === o ||
              o.call(s, { next: n, prev: e.resetKeys, reason: "keys" }),
              this.setState(i);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: r,
              fallback: i,
            } = this.props,
            { didCatch: s, error: a } = this.state,
            c = e;
          if (s) {
            let e = { error: a, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, n.isValidElement)(i)) c = i;
            else if ("function" == typeof t) c = t(e);
            else if (r) c = (0, n.createElement)(r, e);
            else throw a;
          }
          return (0, n.createElement)(
            o.Provider,
            {
              value: {
                didCatch: s,
                error: a,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            c,
          );
        }
      }
    },
    781402: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(470079);
      function o() {
        let e = (0, n.createContext)(void 0);
        return {
          Provider: ({ initialStore: t, createStore: r, children: o }) => {
            let i = (0, n.useRef)();
            return (
              !i.current &&
                (t &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version.",
                  ),
                  !r && (r = () => t)),
                (i.current = r())),
              (0, n.createElement)(e.Provider, { value: i.current }, o)
            );
          },
          useStore: (t, r = Object.is) => {
            let o = (0, n.useContext)(e);
            if (!o)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return o(t, r);
          },
          useStoreApi: () => {
            let t = (0, n.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, n.useMemo)(
              () => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy,
              }),
              [t],
            );
          },
        };
      }
    },
    697741: function (e, t, r) {
      "use strict";
      r.d(t, {
        $: function () {
          return S;
        },
      });
      let n = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        o = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        i = "[aeiouy]",
        s = "([^aeiou][^aeiouy]*)",
        a = "(" + i + "[aeiou]*)",
        c = RegExp("^" + s + "?" + a + s),
        u = RegExp("^" + s + "?" + a + s + a + "?$"),
        d = RegExp("^" + s + "?(" + a + s + "){2,}"),
        l = RegExp("^" + s + "?" + i),
        p = RegExp("^" + s + i + "[^aeiouwxy]$"),
        f = /ll$/,
        h = /^(.+?)e$/,
        v = /^(.+?)y$/,
        y = /^(.+?(s|t))(ion)$/,
        g = /^(.+?)(ed|ing)$/,
        b = /(at|bl|iz)$/,
        m = /^(.+?)eed$/,
        D = /^.+?[^s]s$/,
        k = /^.+?(ss|i)es$/,
        w = /([^aeiouylsz])\1$/,
        x =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        E =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function S(e) {
        let t,
          r = String(e).toLowerCase();
        if (r.length < 3) return r;
        let i = !1;
        return (
          121 === r.codePointAt(0) && ((i = !0), (r = "Y" + r.slice(1))),
          k.test(r) ? (r = r.slice(0, -2)) : D.test(r) && (r = r.slice(0, -1)),
          (t = m.exec(r))
            ? c.test(t[1]) && (r = r.slice(0, -1))
            : (t = g.exec(r)) &&
              l.test(t[1]) &&
              ((r = t[1]),
              b.test(r)
                ? (r += "e")
                : w.test(r)
                  ? (r = r.slice(0, -1))
                  : p.test(r) && (r += "e")),
          (t = v.exec(r)) && l.test(t[1]) && (r = t[1] + "i"),
          (t = x.exec(r)) && c.test(t[1]) && (r = t[1] + n[t[2]]),
          (t = C.exec(r)) && c.test(t[1]) && (r = t[1] + o[t[2]]),
          (t = E.exec(r))
            ? d.test(t[1]) && (r = t[1])
            : (t = y.exec(r)) && d.test(t[1]) && (r = t[1]),
          (t = h.exec(r)) &&
            (d.test(t[1]) || (u.test(t[1]) && !p.test(t[1]))) &&
            (r = t[1]),
          f.test(r) && d.test(r) && (r = r.slice(0, -1)),
          i && (r = "y" + r.slice(1)),
          r
        );
      }
    },
  },
]);
//# sourceMappingURL=1d8b98584ea528ef537e.js.map
