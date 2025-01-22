"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92922"],
  {
    178821: function (e, t, r) {
      r.d(t, {
        MC: function () {
          return p;
        },
        Y5: function () {
          return b;
        },
        ZF: function () {
          return j;
        },
        ZP: function () {
          return S;
        },
        d6: function () {
          return T;
        },
        m8: function () {
          return k;
        },
        nU: function () {
          return R;
        },
        tO: function () {
          return h;
        },
      }),
        r(47120);
      var n = r(200651),
        a = r(192379),
        c = r(120356),
        s = r.n(c),
        l = r(442837),
        o = r(481060),
        i = r(493773),
        u = r(38618),
        d = r(719967),
        x = r(941469);
      let h = 1e3 / 60,
        m = 1e3 / 30,
        p = 5e3,
        f = (1e3 / 60) * 3,
        g = Math.ceil(3e3 / h);
      function b(e, t) {
        let r = a.useRef(null),
          n = a.useRef(null),
          c = a.useRef(null),
          s = a.useCallback(() => {
            null != r.current && clearInterval(r.current),
              null != n.current && cancelIdleCallback(n.current),
              null != c.current && cancelAnimationFrame(c.current);
          }, []),
          l = a.useCallback(() => {
            r.current = setTimeout(() => {
              (n.current = requestIdleCallback(e)),
                (c.current = requestAnimationFrame(() => {
                  t(), l();
                }));
            }, 12);
          }, [e, t]);
        return [
          a.useCallback(() => {
            s(), l();
          }, [s, l]),
          s,
        ];
      }
      function j(e) {
        let t = a.useRef(Array(g).fill(0)),
          r = a.useRef(performance.now()),
          n = a.useRef(0),
          c = a.useRef(0),
          s = a.useRef(0),
          l = e.dispatcher.getIsSchedulerBackgrounded(),
          o = a.useRef(l);
        o.current = l;
        let i = a.useRef(l ? performance.now() : 0);
        a.useEffect(() => {
          e.dispatcher.getIsSchedulerBackgrounded() &&
            (i.current = performance.now());
        });
        let u = a.useCallback(function () {
          let e = performance.now(),
            a = e - r.current;
          if (((r.current = e), !o.current))
            (n.current -= t.current[s.current]),
              (t.current[s.current] = a),
              (n.current += a),
              c.current < g && (c.current += 1),
              (s.current = (s.current + 1) % g);
        }, []);
        return [
          u,
          (e, t) => {
            var r;
            let a = null !== (r = c.current) && void 0 !== r ? r : 1,
              s = n.current / a;
            return Math.abs(e * t - s * a) / t;
          },
          () => {
            (n.current = 0),
              (c.current = 0),
              t.current.fill(0),
              (r.current = performance.now()),
              (s.current = 0);
          },
        ];
      }
      function T(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = a.useRef(Array(g).fill(0)),
          c = a.useRef(performance.now()),
          s = a.useRef(0),
          l = a.useRef(0),
          o = a.useRef(0),
          i = a.useRef(0),
          u = a.useRef(0),
          d = a.useRef(0),
          x = a.useCallback(() => {
            n.current.fill(0),
              (s.current = 0),
              (l.current = 0),
              (i.current = 0),
              (u.current = 0),
              (c.current = performance.now()),
              (o.current = 0);
          }, []),
          m = a.useCallback(
            function () {
              let a = performance.now(),
                x = a - c.current;
              if (((c.current = a), t.current && !r)) return;
              if (
                ((l.current -= n.current[u.current]),
                (n.current[u.current] = x),
                (l.current += x),
                i.current < g && (i.current += 1),
                (u.current = (u.current + 1) % g),
                x > f)
              ) {
                let t = 0 === i.current ? h : l.current / i.current,
                  r = Math.min(2 * h, t),
                  n = Math.floor(x / (e ? r : h));
                n > 0 && (d.current = performance.now()), (s.current += n);
              }
              let m = 0 === i.current ? h : l.current / i.current;
              o.current += x / m;
            },
            [e, t, r],
          ),
          p = 0 === i.current ? 0 : l.current / i.current;
        return {
          currentFPS: 0 === p ? 0 : (h / p) * 60,
          averageFrameTime: p,
          timeSinceLastDrop: (performance.now() - d.current) / 1e3,
          droppedFramesRef: s,
          bufferFramecountRef: i,
          renderedFrameCount: o,
          frameCheckerEffect: m,
          onResetFrameData: x,
        };
      }
      function k(e) {
        let t = e.dispatcher.getIsSchedulerBackgrounded(),
          r = a.useRef(t);
        r.current = t;
        let n = a.useRef(t ? performance.now() : 0);
        return (
          a.useEffect(() => {
            e.dispatcher.getIsSchedulerBackgrounded() &&
              (n.current = performance.now());
          }),
          [r, n]
        );
      }
      function v(e) {
        let { socket: t, isAverageFrameTime: r } = e,
          [c, s] = k(t),
          {
            currentFPS: l,
            averageFrameTime: u,
            timeSinceLastDrop: x,
            onResetFrameData: m,
            droppedFramesRef: f,
            renderedFrameCount: g,
            bufferFramecountRef: v,
            frameCheckerEffect: C,
          } = T(r, c),
          [y, w, R] = j(t),
          [S, I] = b(y, C),
          F = performance.now() - s.current < p,
          E = w(u, v.current);
        (0, i.Z)(
          () => (
            S(),
            () => {
              I();
            }
          ),
        );
        let N = a.useCallback(() => {
          m(), R(), S();
        }, [m, R, S]);
        return (0, n.jsxs)("div", {
          className: d.panelGroup,
          children: [
            (0, n.jsxs)(o.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: [
                "FPS (~3sec):",
                " ",
                (0, n.jsx)(o.Text, {
                  tag: "span",
                  variant: "text-md/bold",
                  color:
                    l < 30
                      ? "text-danger"
                      : l < 45
                        ? "text-warning"
                        : "text-primary",
                  children: l.toFixed(2),
                }),
              ],
            }),
            (0, n.jsxs)(o.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: [
                "Dropped Frames:",
                " ",
                (0, n.jsx)(o.Text, {
                  tag: "span",
                  variant: "text-md/bold",
                  color:
                    x < 2
                      ? "text-danger"
                      : x < 5
                        ? "text-warning"
                        : "text-primary",
                  children: f.current,
                }),
                (0, n.jsxs)(o.Text, {
                  tag: "span",
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: d.secondaryInfoText,
                  children: [
                    "(Dropped: ",
                    ((f.current / g.current) * 100).toFixed(4),
                    "%)",
                  ],
                }),
                F &&
                  (0, n.jsx)(o.Tooltip, {
                    position: "left",
                    text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                    children: (e) =>
                      (0, n.jsx)("span", {
                        ...e,
                        children: (0, n.jsx)(o.Text, {
                          tag: "span",
                          variant: "text-xs/bold",
                          color: "text-danger",
                          className: d.secondaryInfoText,
                          children: "(Backgrounded)",
                        }),
                      }),
                  }),
              ],
            }),
            (0, n.jsxs)(o.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: [
                "Rendered Frames:",
                " ",
                (0, n.jsx)(o.Text, {
                  tag: "span",
                  variant: "text-md/semibold",
                  color: "text-secondary",
                  children: g.current.toFixed(0),
                }),
              ],
            }),
            (0, n.jsxs)(o.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: [
                "Frame Times (~3sec):",
                " ",
                (0, n.jsxs)(o.Text, {
                  tag: "span",
                  variant: "text-md/semibold",
                  color: u > 1.1 * h ? "text-warning" : "text-secondary",
                  children: [u.toFixed(2), "ms"],
                }),
              ],
            }),
            (0, n.jsx)(o.Tooltip, {
              position: "left",
              text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
              children: (e) =>
                (0, n.jsx)("div", {
                  ...e,
                  children: (0, n.jsxs)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: [
                      "Idle Frame Delta (~3sec):",
                      " ",
                      (0, n.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: E > 1 ? "text-danger" : "text-secondary",
                        children: [E.toFixed(2), "ms"],
                      }),
                      F &&
                        (0, n.jsx)(o.Tooltip, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (e) =>
                            (0, n.jsx)("span", {
                              ...e,
                              children: (0, n.jsx)(o.Text, {
                                tag: "span",
                                variant: "text-xs/bold",
                                color: "text-danger",
                                className: d.secondaryInfoText,
                                children: "(Backgrounded)",
                              }),
                            }),
                        }),
                    ],
                  }),
                }),
            }),
            (0, n.jsx)("div", {
              className: d.bottomPanelButton,
              children: (0, n.jsx)(o.Button, {
                size: o.Button.Sizes.SMALL,
                onClick: N,
                children: "Reset Frame Data",
              }),
            }),
          ],
        });
      }
      function C(e) {
        let {
            socket: t,
            isAverageFrameTime: r,
            onToggleAverageFrameTime: c,
          } = e,
          [s, l] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
          i = a.useRef(null);
        a.useEffect(() => {
          let e = setInterval(() => {
            l(t.dispatcher.getIsRequestIdleCallbackEnabled());
          }, m);
          return (
            (i.current = e),
            () => {
              null != i.current && clearInterval(i.current);
            }
          );
        }, [t.dispatcher]);
        let u = (e) => {
          t.dispatcher.toggleRequestIdleCallback(e), l(e);
        };
        return (0, n.jsxs)("div", {
          className: d.panelGroup,
          children: [
            (0, n.jsx)(o.Tooltip, {
              position: "left",
              text: "Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.",
              children: (e) =>
                (0, n.jsx)("div", {
                  ...e,
                  children: (0, n.jsx)(o.Checkbox, {
                    value: r,
                    onChange: () => c(!r),
                    size: 18,
                    type: o.Checkbox.Types.INVERTED,
                    shape: o.Checkbox.Shapes.BOX,
                    children: (0, n.jsx)(o.Text, {
                      tag: "span",
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: "Use Average Frame Time",
                    }),
                  }),
                }),
            }),
            (0, n.jsx)(o.Checkbox, {
              value: s,
              onChange: () => u(!s),
              size: 18,
              type: o.Checkbox.Types.INVERTED,
              shape: o.Checkbox.Shapes.BOX,
              children: (0, n.jsx)(o.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: "Enable New Dispatch Scheduler (requestIdleCallback)",
              }),
            }),
          ],
        });
      }
      function y(e) {
        let { socket: t } = e,
          r = t.dispatcher.getDispatchTimings(),
          [c, l] = a.useState(!1);
        return (0, n.jsxs)("div", {
          className: d.panelGroup,
          children: [
            (0, n.jsx)("div", {
              className: s()(c && d.topPanelToggle),
              children: (0, n.jsx)(o.Checkbox, {
                value: c,
                onChange: () => l((e) => !e),
                size: 18,
                type: o.Checkbox.Types.INVERTED,
                shape: o.Checkbox.Shapes.BOX,
                children: (0, n.jsx)(o.Text, {
                  tag: "span",
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: "Show Dispatch Timings",
                }),
              }),
            }),
            c
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      children: "Gateway Dispatch Timings:",
                    }),
                    (0, n.jsx)("table", {
                      cellPadding: 4,
                      children: Object.entries(r).map((e) => {
                        let [t, [r, a]] = e;
                        return (0, n.jsxs)(
                          "tr",
                          {
                            children: [
                              (0, n.jsx)("td", {
                                children: (0, n.jsx)(o.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children: t,
                                }),
                              }),
                              (0, n.jsx)("td", {
                                children: (0, n.jsxs)(o.Text, {
                                  tag: "span",
                                  variant: "text-xs/bold",
                                  color: "text-normal",
                                  children: [r.toFixed(2), "ms"],
                                }),
                              }),
                              (0, n.jsx)("td", {
                                children: (0, n.jsxs)(o.Text, {
                                  tag: "span",
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ["(count: ", a, ")"],
                                }),
                              }),
                            ],
                          },
                          t,
                        );
                      }),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function w(e) {
        let { socket: t } = e,
          r = t.dispatcher.getSchedulerTelemetry(),
          [c, l] = a.useState(r.isTelemetryEnabled),
          [i, u] = a.useState(r.isTelemetryEnabled),
          x = (e) => {
            u(e), r.toggleTelemetry(e);
          };
        return (0, n.jsxs)("div", {
          className: d.panelGroup,
          children: [
            (0, n.jsx)(o.Checkbox, {
              value: i,
              onChange: () => x(!i),
              size: 18,
              type: o.Checkbox.Types.INVERTED,
              shape: o.Checkbox.Shapes.BOX,
              children: (0, n.jsx)(o.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: "Enable Dispatch Telemetry",
              }),
            }),
            (0, n.jsx)("div", {
              className: s()(c && d.topPanelToggle),
              children: (0, n.jsx)(o.Checkbox, {
                value: c,
                onChange: () => {
                  l((e) => {
                    let t = !e;
                    return t && x(!0), t;
                  });
                },
                size: 18,
                type: o.Checkbox.Types.INVERTED,
                shape: o.Checkbox.Shapes.BOX,
                children: (0, n.jsx)(o.Text, {
                  tag: "span",
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: "Show Dispatch Scheduler Telemetry",
                }),
              }),
            }),
            c
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      children: "Dispatch Scheduler Telemetry:",
                    }),
                    (0, n.jsx)("table", {
                      cellPadding: 4,
                      children: Object.entries(r.generateTelemetry()).map(
                        (e) => {
                          let [t, r] = e;
                          return (0, n.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, n.jsx)("td", {
                                  children: (0, n.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: t,
                                  }),
                                }),
                                (0, n.jsx)("td", {
                                  children: (0, n.jsx)(o.Text, {
                                    tag: "span",
                                    variant: "text-xs/bold",
                                    color: "text-normal",
                                    children: r,
                                  }),
                                }),
                              ],
                            },
                            t,
                          );
                        },
                      ),
                    }),
                    (0, n.jsx)("div", {
                      className: d.bottomPanelButton,
                      children: (0, n.jsx)(o.Button, {
                        size: o.Button.Sizes.SMALL,
                        onClick: () => {
                          r.reset();
                        },
                        children: "Reset Scheduler Telemetry",
                      }),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function R() {
        let [, e] = a.useState({});
        a.useEffect(() => {
          let t = setInterval(() => {
            e({});
          }, m);
          return () => {
            clearInterval(t);
          };
        }, []);
      }
      function S() {
        let e = (0, l.e7)([u.Z], () => u.Z.getSocket()),
          [t, r] = a.useState(!1);
        return (
          R(),
          (0, n.jsx)("div", {
            className: s()(x.panel, d.panel),
            children: (0, n.jsxs)(o.ScrollerThin, {
              className: d.panel,
              children: [
                (0, n.jsx)(v, { socket: e, isAverageFrameTime: t }),
                (0, n.jsx)(C, {
                  socket: e,
                  isAverageFrameTime: t,
                  onToggleAverageFrameTime: r,
                }),
                (0, n.jsx)(y, { socket: e }),
                (0, n.jsx)(w, { socket: e }),
              ],
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=06af24144f9bb88c5ccd.js.map
