"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81363"],
  {
    654108(e, t, l) {
      l.d(t, { A: () => n });
      function n(e) {
        let t = e?.activeElement;
        return (
          ["INPUT", "TEXTAREA"].includes(t?.tagName) || t?.isContentEditable
        );
      }
    },
    415666(e, t, l) {
      l.d(t, { wE: () => k, Xq: () => O, q6: () => H });
      var n = l(627968),
        i = l(64700),
        a = l(17928),
        r = l(775602),
        s = l(7584),
        u = l(267102),
        o = l(232835),
        c = l(417146),
        d = l(552122),
        h = l(401266),
        f = l(106778),
        m = l(21161),
        g = l(531301),
        p = l(652215);
      let A = 1e3 / 60,
        x = {
          velocity: {
            type: "static-random",
            minValue: { x: 8, y: 0 },
            maxValue: { x: 50, y: 0 },
          },
          rotation: {
            type: "linear-random",
            minValue: { x: 0, y: 0, z: 0 },
            maxValue: { x: 0, y: 0, z: 360 },
            minAddValue: { x: 0, y: 0, z: -5 },
            maxAddValue: { x: 0, y: 0, z: 5 },
          },
          size: {
            type: "static-random",
            minValue: 2,
            maxValue: 24,
            uniformVectorValues: !0,
          },
          dragCoefficient: { type: "static", value: 0.8 },
          opacity: { type: "static-random", minValue: 0.7, maxValue: 0.5 },
        },
        v = ["#FFFFFF"],
        w = [l(426560), ...(0, g.A)(["snowflake"])];
      function y(e) {
        let { children: t } = e,
          [l, a] = i.useState(!1),
          r = (0, u.Us)(),
          [s, o] = i.useState(null),
          { confettiCanvas: c } = i.useContext(m.x),
          d = (0, f.f9)(c, s),
          h = i.useMemo(
            () => ({
              triggerAnimation: () => a(!0),
              untriggerAnimation: () => a(!1),
            }),
            [],
          ),
          g = i.useCallback(() => {
            let e = c?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            d.createConfetti({
              ...x,
              position: {
                type: "static-random",
                minValue: { x: -t.width / 2, y: -24 },
                maxValue: { x: t.width, y: -24 },
              },
            });
          }, [d, c]);
        return (i.useEffect(() => {
          let e = l ? setInterval(g, A) : null;
          return () => clearInterval(e);
        }, [l, g]),
        r === p.BRT.OVERLAY)
          ? t
          : (0, n.jsxs)(k.Provider, {
              value: h,
              children: [
                t,
                (0, n.jsx)(f.K_, {
                  ref: o,
                  colors: v,
                  sprites: w,
                  spriteWidth: 24,
                  spriteHeight: 24,
                }),
              ],
            });
      }
      var I = l(544048),
        E = l(513609),
        C = l(851110),
        j = l(490114);
      let N = [],
        V = new Set(["jack_o_lantern", "nose"]),
        R = {
          jack_o_lantern: {
            sprites: (0, g.A)(["chocolate_bar", "lollipop", "candy"]),
          },
          nose: { sprites: (0, g.A)(["foot"]) },
        },
        T = {
          enter: { BEG: 0, END: 22 },
          confetti: { BEG: 23, END: 119 },
          exit: { BEG: 164, END: 200 },
        };
      function _() {
        return l
          .e("98150")
          .then(l.t.bind(l, 633343, 19))
          .then((e) => {
            let { default: t } = e;
            return t;
          });
      }
      let B = i.forwardRef(function (e, t) {
        let { sprites: l } = e,
          [a, r] = i.useState(null),
          { confettiCanvas: s } = i.useContext(m.x),
          u = (0, f.f9)(s, a);
        return (
          i.useImperativeHandle(
            t,
            () => ({
              fireConfetti: (e, t) => {
                u.createMultipleConfetti(
                  {
                    ...C.Mw,
                    position: { type: "static", value: { x: e, y: t } },
                    velocity: {
                      type: "static-random",
                      minValue: { x: -5, y: -40 },
                      maxValue: { x: -40, y: -100 },
                    },
                    size: { type: "static-random", minValue: 12, maxValue: 48 },
                    dragCoefficient: { type: "static", value: 0.01 },
                  },
                  20,
                );
              },
            }),
            [u],
          ),
          (0, n.jsx)(f.K_, {
            ref: r,
            colors: N,
            sprites: l,
            spriteWidth: 48,
            spriteHeight: 48,
          })
        );
      });
      function M(e) {
        let { children: t } = e,
          l = i.useRef({}),
          [a, r] = i.useState(null),
          s = (function (e) {
            if (null == e) return "enter";
            switch (e) {
              case "enter":
                return "confetti";
              case "confetti":
                return "exit";
              case "exit":
                return "enter";
            }
          })(a),
          o = i.useRef(null),
          [c, d] = i.useState(!1),
          h = i.useRef("jack_o_lantern"),
          f = (0, u.Us)(),
          m = i.useCallback(
            (e) => {
              if (!c) {
                let t = (function (e) {
                  if (null == e) return null;
                  for (let t of V)
                    if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                  return null;
                })(e);
                null != t && ((h.current = t), d(!0), r(null));
              }
            },
            [c],
          ),
          g = i.useMemo(
            () => ({ triggerAnimation: m, untriggerAnimation: () => {} }),
            [m],
          ),
          A = i.useCallback((e) => {
            r(e);
          }, []),
          x = i.useCallback((e) => {
            "exit" === e && d(!1);
          }, []),
          v = i.useCallback((e) => {
            o.current = e;
          }, []);
        return (i.useEffect(() => {
          if ("confetti" === a) {
            if (null == o.current) return;
            let e = o.current.getBoundingClientRect(),
              t = e.left - 11,
              n = e.top + 125,
              i = l.current[h.current];
            i?.fireConfetti(t, n);
          }
        }, [a]),
        f !== p.BRT.APP)
          ? t
          : (0, n.jsxs)(k.Provider, {
              value: g,
              children: [
                t,
                Object.keys(R).map((e) => {
                  let t = R[e];
                  return (0, n.jsx)(
                    B,
                    {
                      ref: (t) => {
                        null != t ? (l.current[e] = t) : delete l.current[e];
                      },
                      sprites: t.sprites,
                    },
                    e,
                  );
                }),
                c
                  ? (0, n.jsx)(E.Ay, {
                      children: (0, n.jsx)("div", {
                        className: j.k,
                        children: (0, n.jsx)(I.t, {
                          animationRef: v,
                          className: j.I,
                          nextScene: s,
                          sceneSegments: T,
                          onScenePlay: A,
                          onSceneComplete: x,
                          importData: _,
                          pauseWhileUnfocused: !1,
                        }),
                      }),
                    })
                  : null,
              ],
            });
      }
      function b(e) {
        if (null == e || null == c.A.emojiAnimationTriggers) return !1;
        for (let t of c.A.emojiAnimationTriggers) {
          let l = s.Ay.getByName(t);
          if (null != l) {
            if (`:${l.uniqueName}:` === e) return !0;
            for (let t in l.diversityChildren) {
              let n = l.diversityChildren[t];
              if (`:${n.uniqueName}:` === e) return !0;
            }
          }
        }
        return !1;
      }
      let k = i.createContext({
        triggerAnimation: () => {},
        untriggerAnimation: () => {},
      });
      function L(e) {
        let { children: t } = e,
          { triggerAnimation: l, untriggerAnimation: a } = i.useContext(k),
          r = (0, u.Us)(),
          s = i.useMemo(
            () => ({
              triggerAnimation: (e) => {
                r !== p.BRT.OVERLAY && b(e) && l(e);
              },
              untriggerAnimation: (e) => {
                r !== p.BRT.OVERLAY && b(e) && a(e);
              },
            }),
            [r, l, a],
          );
        return (0, n.jsx)(k.Provider, { value: s, children: t });
      }
      function O(e) {
        let { children: t } = e,
          l = d.A.useIsEligible(),
          a = i.useCallback((e, t) => {
            switch (t) {
              case c.n.THROW_EMOJI:
                return (0, n.jsx)(M, { children: e });
              case c.n.SNOW:
                return (0, n.jsx)(y, { children: e });
            }
          }, []);
        return l && null != c.A.emojiAnimationType
          ? a((0, n.jsx)(L, { children: t }), c.A.emojiAnimationType)
          : t;
      }
      function S(e) {
        let { emojiRef: t, channelId: l, messageId: n, emojiName: r } = e,
          s = (0, a.bG)([o.A], () => o.A.getMessage(l, n)),
          { triggerAnimation: u } = i.useContext(k);
        return (
          i.useEffect(() => {
            if (
              !c.A.triggerEmojiAnimationFromSentMessage ||
              s?.state !== p.cmJ.SENT ||
              (0, h.AI)(n)
            )
              return;
            let { top: e, bottom: l } = t.getBoundingClientRect();
            e >= 0 && l <= window.innerHeight && (u(r), (0, h.IL)(n));
          }, [r, t, s?.state, n, u]),
          null
        );
      }
      function H(e) {
        let {
            channelId: t,
            messageId: l,
            emojiName: i,
            disable: s,
            emojiRef: o,
          } = e,
          c = (0, a.bG)([r.A], () => r.A.useReducedMotion),
          h = d.A.useIsEligible(),
          f = (0, u.Us)();
        return s ||
          f === p.BRT.OVERLAY ||
          !h ||
          null == l ||
          null == t ||
          c ||
          null == o ||
          !b(i)
          ? null
          : (0, n.jsx)(S, {
              emojiRef: o,
              channelId: t,
              messageId: l,
              emojiName: i,
            });
      }
    },
    513609(e, t, l) {
      l.d(t, { Ay: () => u, di: () => s, lr: () => r });
      let {
          Layer: n,
          LayerContainer: i,
          LayerProvider: a,
        } = (0, l(83379).Ay)("Chat"),
        r = i,
        s = a,
        u = n;
    },
    366811(e, t, l) {
      l.d(t, { A: () => o });
      var n = l(265690),
        i = l(121894),
        a = l(463347),
        r = l(334465),
        s = l(652215);
      function u(e) {
        let t = (0, r.B)(e ?? "", {
          path: s.BVt.CHANNEL(
            a.pv.guildId(),
            a.pv.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: l } = t.params;
          return { guildId: e === s.ME ? null : e, channelId: l ?? null };
        }
        let l = (0, r.B)(e ?? "", {
          path: s.BVt.GUILD_BOOSTING_MARKETING(a.pv.guildId()),
        });
        return null != l
          ? { guildId: l.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      let o = (0, n.h)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: l, channelId: n } = u(t);
          (0, i.r)(() => e({ path: t, guildId: l, channelId: n }));
        },
        resetPath(t) {
          let { guildId: l, channelId: n } = u(t);
          (0, i.r)(() =>
            e({ path: null, guildId: l, channelId: n, basePath: t }),
          );
        },
      }));
    },
    104510(e, t, l) {
      l.d(t, { _: () => s });
      var n = l(627968);
      l(64700);
      var i = l(661531),
        a = l(996682),
        r = l(27989);
      let s = (e) => {
        let {
            size: t = "md",
            width: l,
            height: s,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, r.J)(t),
          h = d?.width ?? l,
          f = d?.height ?? s;
        return (0, n.jsxs)("svg", {
          ...(0, a.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: f,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M11.47 6.55a.75.75 0 0 1 1.06 0l2.2 2.14c.14.14.23.34.23.55v5.52c0 .21-.09.4-.23.55l-2.2 2.14a.75.75 0 0 1-1.06 0l-2.2-2.14a.77.77 0 0 1-.23-.55V9.24c0-.21.09-.41.23-.55l2.2-2.14Z",
              className: o,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M10.95 1.43a1.5 1.5 0 0 1 2.1 0l5.49 5.33c.3.29.46.68.46 1.1v8.44c-.04.35-.2.69-.46.94l-5.49 5.33-.11.1a1.5 1.5 0 0 1-2-.1l-5.48-5.33c-.3-.29-.46-.68-.46-1.1V7.86c0-.42.17-.81.46-1.1l5.49-5.33ZM7.29 7.76c-.2.2-.3.46-.3.73v7.02c0 .27.1.54.3.73l4 3.9a1 1 0 0 0 1.41 0l4-3.9c.2-.2.31-.46.31-.73V8.49c0-.27-.1-.54-.3-.73l-4-3.9a1 1 0 0 0-1.41 0l-4 3.9Z",
              clipRule: "evenodd",
              className: o,
            }),
          ],
        });
      };
    },
    740426(e, t, l) {
      l.d(t, { k: () => s });
      var n = l(627968);
      l(64700);
      var i = l(661531),
        a = l(996682),
        r = l(27989);
      let s = (e) => {
        let {
            size: t = "md",
            width: l,
            height: s,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, r.J)(t),
          h = d?.width ?? l,
          f = d?.height ?? s;
        return (0, n.jsxs)("svg", {
          ...(0, a.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: f,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
              clipRule: "evenodd",
              fill: "string" == typeof u ? u : u.css,
              className: o,
            }),
            (0, n.jsx)("path", {
              d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z",
              fill: "string" == typeof u ? u : u.css,
              className: o,
            }),
          ],
        });
      };
    },
    768622(e, t, l) {
      l.d(t, { g: () => s });
      var n = l(627968);
      l(64700);
      var i = l(661531),
        a = l(996682),
        r = l(27989);
      let s = (e) => {
        let {
            size: t = "md",
            width: l,
            height: s,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, r.J)(t),
          h = d?.width ?? l,
          f = d?.height ?? s;
        return (0, n.jsx)("svg", {
          ...(0, a.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: f,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
            className: o,
          }),
        });
      };
    },
    332837(e, t, l) {
      l.d(t, { f: () => s });
      var n = l(627968);
      l(64700);
      var i = l(661531),
        a = l(996682),
        r = l(27989);
      let s = (e) => {
        let {
            size: t = "md",
            width: l,
            height: s,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, r.J)(t),
          h = d?.width ?? l,
          f = d?.height ?? s;
        return (0, n.jsx)("svg", {
          ...(0, a.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: f,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "m2.4 8.4 8.38-6.46a2 2 0 0 1 2.44 0l8.39 6.45a2 2 0 0 1-.79 3.54l-.32.07-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 1 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.32-.07a2 2 0 0 1-.79-3.54Z",
            className: o,
          }),
        });
      };
    },
    577473(e, t, l) {
      l.d(t, { r: () => s });
      var n = l(627968);
      l(64700);
      var i = l(661531),
        a = l(996682),
        r = l(27989);
      let s = (e) => {
        let {
            size: t = "md",
            width: l,
            height: s,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, r.J)(t),
          h = d?.width ?? l,
          f = d?.height ?? s;
        return (0, n.jsx)("svg", {
          ...(0, a.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: f,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M7.5 21.7a8.95 8.95 0 0 1 9 0 1 1 0 0 0 1-1.73c-.6-.35-1.24-.64-1.9-.87.54-.3 1.05-.65 1.52-1.07a3.98 3.98 0 0 0 5.49-1.8.77.77 0 0 0-.24-.95 3.98 3.98 0 0 0-2.02-.76A4 4 0 0 0 23 10.47a.76.76 0 0 0-.71-.71 4.06 4.06 0 0 0-1.6.22 3.99 3.99 0 0 0 .54-5.35.77.77 0 0 0-.95-.24c-.75.36-1.37.95-1.77 1.67V6a4 4 0 0 0-4.9-3.9.77.77 0 0 0-.6.72 4 4 0 0 0 3.7 4.17c.89 1.3 1.3 2.95 1.3 4.51 0 3.66-2.75 6.5-6 6.5s-6-2.84-6-6.5c0-1.56.41-3.21 1.3-4.51A4 4 0 0 0 11 2.82a.77.77 0 0 0-.6-.72 4.01 4.01 0 0 0-4.9 3.96A4.02 4.02 0 0 0 3.73 4.4a.77.77 0 0 0-.95.24 3.98 3.98 0 0 0 .55 5.35 4 4 0 0 0-1.6-.22.76.76 0 0 0-.72.71l-.01.28a4 4 0 0 0 2.65 3.77c-.75.06-1.45.33-2.02.76-.3.22-.4.62-.24.95a4 4 0 0 0 5.49 1.8c.47.42.98.78 1.53 1.07-.67.23-1.3.52-1.91.87a1 1 0 1 0 1 1.73Z",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=81363.b03cadb1898de3a4.js.map
