"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6223"],
  {
    415666(e, t, n) {
      n.d(t, { wE: () => T, Xq: () => O, q6: () => z });
      var i = n(627968),
        r = n(64700),
        l = n(17928),
        u = n(775602),
        a = n(7584),
        s = n(267102),
        o = n(232835),
        c = n(417146),
        f = n(552122),
        m = n(401266),
        d = n(106778),
        x = n(21161),
        p = n(531301),
        g = n(652215);
      let A = 1e3 / 60,
        y = {
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
        h = ["#FFFFFF"],
        C = [n(426560), ...(0, p.A)(["snowflake"])];
      function j(e) {
        let { children: t } = e,
          [n, l] = r.useState(!1),
          u = (0, s.Us)(),
          [a, o] = r.useState(null),
          { confettiCanvas: c } = r.useContext(x.x),
          f = (0, d.f9)(c, a),
          m = r.useMemo(
            () => ({
              triggerAnimation: () => l(!0),
              untriggerAnimation: () => l(!1),
            }),
            [],
          ),
          p = r.useCallback(() => {
            let e = c?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            f.createConfetti({
              ...y,
              position: {
                type: "static-random",
                minValue: { x: -t.width / 2, y: -24 },
                maxValue: { x: t.width, y: -24 },
              },
            });
          }, [f, c]);
        return (r.useEffect(() => {
          let e = n ? setInterval(p, A) : null;
          return () => clearInterval(e);
        }, [n, p]),
        u === g.BRT.OVERLAY)
          ? t
          : (0, i.jsxs)(T.Provider, {
              value: m,
              children: [
                t,
                (0, i.jsx)(d.K_, {
                  ref: o,
                  colors: h,
                  sprites: C,
                  spriteWidth: 24,
                  spriteHeight: 24,
                }),
              ],
            });
      }
      var V = n(544048),
        R = n(513609),
        v = n(851110),
        E = n(490114);
      let k = [],
        b = new Set(["jack_o_lantern", "nose"]),
        w = {
          jack_o_lantern: {
            sprites: (0, p.A)(["chocolate_bar", "lollipop", "candy"]),
          },
          nose: { sprites: (0, p.A)(["foot"]) },
        },
        S = {
          enter: { BEG: 0, END: 22 },
          confetti: { BEG: 23, END: 119 },
          exit: { BEG: 164, END: 200 },
        };
      function _() {
        return n
          .e("98150")
          .then(n.t.bind(n, 633343, 19))
          .then((e) => {
            let { default: t } = e;
            return t;
          });
      }
      let B = r.forwardRef(function (e, t) {
        let { sprites: n } = e,
          [l, u] = r.useState(null),
          { confettiCanvas: a } = r.useContext(x.x),
          s = (0, d.f9)(a, l);
        return (
          r.useImperativeHandle(
            t,
            () => ({
              fireConfetti: (e, t) => {
                s.createMultipleConfetti(
                  {
                    ...v.Mw,
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
            [s],
          ),
          (0, i.jsx)(d.K_, {
            ref: u,
            colors: k,
            sprites: n,
            spriteWidth: 48,
            spriteHeight: 48,
          })
        );
      });
      function I(e) {
        let { children: t } = e,
          n = r.useRef({}),
          [l, u] = r.useState(null),
          a = (function (e) {
            if (null == e) return "enter";
            switch (e) {
              case "enter":
                return "confetti";
              case "confetti":
                return "exit";
              case "exit":
                return "enter";
            }
          })(l),
          o = r.useRef(null),
          [c, f] = r.useState(!1),
          m = r.useRef("jack_o_lantern"),
          d = (0, s.Us)(),
          x = r.useCallback(
            (e) => {
              if (!c) {
                let t = (function (e) {
                  if (null == e) return null;
                  for (let t of b)
                    if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                  return null;
                })(e);
                null != t && ((m.current = t), f(!0), u(null));
              }
            },
            [c],
          ),
          p = r.useMemo(
            () => ({ triggerAnimation: x, untriggerAnimation: () => {} }),
            [x],
          ),
          A = r.useCallback((e) => {
            u(e);
          }, []),
          y = r.useCallback((e) => {
            "exit" === e && f(!1);
          }, []),
          h = r.useCallback((e) => {
            o.current = e;
          }, []);
        return (r.useEffect(() => {
          if ("confetti" === l) {
            if (null == o.current) return;
            let e = o.current.getBoundingClientRect(),
              t = e.left - 11,
              i = e.top + 125,
              r = n.current[m.current];
            r?.fireConfetti(t, i);
          }
        }, [l]),
        d !== g.BRT.APP)
          ? t
          : (0, i.jsxs)(T.Provider, {
              value: p,
              children: [
                t,
                Object.keys(w).map((e) => {
                  let t = w[e];
                  return (0, i.jsx)(
                    B,
                    {
                      ref: (t) => {
                        null != t ? (n.current[e] = t) : delete n.current[e];
                      },
                      sprites: t.sprites,
                    },
                    e,
                  );
                }),
                c
                  ? (0, i.jsx)(R.Ay, {
                      children: (0, i.jsx)("div", {
                        className: E.k,
                        children: (0, i.jsx)(V.t, {
                          animationRef: h,
                          className: E.I,
                          nextScene: a,
                          sceneSegments: S,
                          onScenePlay: A,
                          onSceneComplete: y,
                          importData: _,
                          pauseWhileUnfocused: !1,
                        }),
                      }),
                    })
                  : null,
              ],
            });
      }
      function N(e) {
        if (null == e || null == c.A.emojiAnimationTriggers) return !1;
        for (let t of c.A.emojiAnimationTriggers) {
          let n = a.Ay.getByName(t);
          if (null != n) {
            if (`:${n.uniqueName}:` === e) return !0;
            for (let t in n.diversityChildren) {
              let i = n.diversityChildren[t];
              if (`:${i.uniqueName}:` === e) return !0;
            }
          }
        }
        return !1;
      }
      let T = r.createContext({
        triggerAnimation: () => {},
        untriggerAnimation: () => {},
      });
      function M(e) {
        let { children: t } = e,
          { triggerAnimation: n, untriggerAnimation: l } = r.useContext(T),
          u = (0, s.Us)(),
          a = r.useMemo(
            () => ({
              triggerAnimation: (e) => {
                u !== g.BRT.OVERLAY && N(e) && n(e);
              },
              untriggerAnimation: (e) => {
                u !== g.BRT.OVERLAY && N(e) && l(e);
              },
            }),
            [u, n, l],
          );
        return (0, i.jsx)(T.Provider, { value: a, children: t });
      }
      function O(e) {
        let { children: t } = e,
          n = f.A.useIsEligible(),
          l = r.useCallback((e, t) => {
            switch (t) {
              case c.n.THROW_EMOJI:
                return (0, i.jsx)(I, { children: e });
              case c.n.SNOW:
                return (0, i.jsx)(j, { children: e });
            }
          }, []);
        return n && null != c.A.emojiAnimationType
          ? l((0, i.jsx)(M, { children: t }), c.A.emojiAnimationType)
          : t;
      }
      function F(e) {
        let { emojiRef: t, channelId: n, messageId: i, emojiName: u } = e,
          a = (0, l.bG)([o.A], () => o.A.getMessage(n, i)),
          { triggerAnimation: s } = r.useContext(T);
        return (
          r.useEffect(() => {
            if (
              !c.A.triggerEmojiAnimationFromSentMessage ||
              a?.state !== g.cmJ.SENT ||
              (0, m.AI)(i)
            )
              return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (s(u), (0, m.IL)(i));
          }, [u, t, a?.state, i, s]),
          null
        );
      }
      function z(e) {
        let {
            channelId: t,
            messageId: n,
            emojiName: r,
            disable: a,
            emojiRef: o,
          } = e,
          c = (0, l.bG)([u.A], () => u.A.useReducedMotion),
          m = f.A.useIsEligible(),
          d = (0, s.Us)();
        return a ||
          d === g.BRT.OVERLAY ||
          !m ||
          null == n ||
          null == t ||
          c ||
          null == o ||
          !N(r)
          ? null
          : (0, i.jsx)(F, {
              emojiRef: o,
              channelId: t,
              messageId: n,
              emojiName: r,
            });
      }
    },
    513609(e, t, n) {
      n.d(t, { Ay: () => s, di: () => a, lr: () => u });
      let {
          Layer: i,
          LayerContainer: r,
          LayerProvider: l,
        } = (0, n(83379).Ay)("Chat"),
        u = r,
        a = l,
        s = i;
    },
  },
]);
//# sourceMappingURL=6223.2896adab46746f89.js.map
