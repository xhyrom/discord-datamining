"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82731"],
  {
    415666(e, t, n) {
      n.d(t, { wE: () => S, Xq: () => M, q6: () => F });
      var l = n(627968),
        i = n(64700),
        r = n(17928),
        a = n(775602),
        u = n(7584),
        s = n(267102),
        o = n(232835),
        c = n(417146),
        d = n(552122),
        f = n(401266),
        m = n(106778),
        h = n(21161),
        g = n(531301),
        p = n(652215);
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
        y = [n(426560), ...(0, g.A)(["snowflake"])];
      function I(e) {
        let { children: t } = e,
          [n, r] = i.useState(!1),
          a = (0, s.Us)(),
          [u, o] = i.useState(null),
          { confettiCanvas: c } = i.useContext(h.x),
          d = (0, m.f9)(c, u),
          f = i.useMemo(
            () => ({
              triggerAnimation: () => r(!0),
              untriggerAnimation: () => r(!1),
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
          let e = n ? setInterval(g, A) : null;
          return () => clearInterval(e);
        }, [n, g]),
        a === p.BRT.OVERLAY)
          ? t
          : (0, l.jsxs)(S.Provider, {
              value: f,
              children: [
                t,
                (0, l.jsx)(m.K_, {
                  ref: o,
                  colors: v,
                  sprites: y,
                  spriteWidth: 24,
                  spriteHeight: 24,
                }),
              ],
            });
      }
      var C = n(544048),
        w = n(513609),
        E = n(851110),
        j = n(490114);
      let V = [],
        R = new Set(["jack_o_lantern", "nose"]),
        N = {
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
        return n
          .e("98150")
          .then(n.t.bind(n, 633343, 19))
          .then((e) => {
            let { default: t } = e;
            return t;
          });
      }
      let B = i.forwardRef(function (e, t) {
        let { sprites: n } = e,
          [r, a] = i.useState(null),
          { confettiCanvas: u } = i.useContext(h.x),
          s = (0, m.f9)(u, r);
        return (
          i.useImperativeHandle(
            t,
            () => ({
              fireConfetti: (e, t) => {
                s.createMultipleConfetti(
                  {
                    ...E.Mw,
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
          (0, l.jsx)(m.K_, {
            ref: a,
            colors: V,
            sprites: n,
            spriteWidth: 48,
            spriteHeight: 48,
          })
        );
      });
      function b(e) {
        let { children: t } = e,
          n = i.useRef({}),
          [r, a] = i.useState(null),
          u = (function (e) {
            if (null == e) return "enter";
            switch (e) {
              case "enter":
                return "confetti";
              case "confetti":
                return "exit";
              case "exit":
                return "enter";
            }
          })(r),
          o = i.useRef(null),
          [c, d] = i.useState(!1),
          f = i.useRef("jack_o_lantern"),
          m = (0, s.Us)(),
          h = i.useCallback(
            (e) => {
              if (!c) {
                let t = (function (e) {
                  if (null == e) return null;
                  for (let t of R)
                    if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                  return null;
                })(e);
                null != t && ((f.current = t), d(!0), a(null));
              }
            },
            [c],
          ),
          g = i.useMemo(
            () => ({ triggerAnimation: h, untriggerAnimation: () => {} }),
            [h],
          ),
          A = i.useCallback((e) => {
            a(e);
          }, []),
          x = i.useCallback((e) => {
            "exit" === e && d(!1);
          }, []),
          v = i.useCallback((e) => {
            o.current = e;
          }, []);
        return (i.useEffect(() => {
          if ("confetti" === r) {
            if (null == o.current) return;
            let e = o.current.getBoundingClientRect(),
              t = e.left - 11,
              l = e.top + 125,
              i = n.current[f.current];
            i?.fireConfetti(t, l);
          }
        }, [r]),
        m !== p.BRT.APP)
          ? t
          : (0, l.jsxs)(S.Provider, {
              value: g,
              children: [
                t,
                Object.keys(N).map((e) => {
                  let t = N[e];
                  return (0, l.jsx)(
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
                  ? (0, l.jsx)(w.Ay, {
                      children: (0, l.jsx)("div", {
                        className: j.k,
                        children: (0, l.jsx)(C.t, {
                          animationRef: v,
                          className: j.I,
                          nextScene: u,
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
      function k(e) {
        if (null == e || null == c.A.emojiAnimationTriggers) return !1;
        for (let t of c.A.emojiAnimationTriggers) {
          let n = u.Ay.getByName(t);
          if (null != n) {
            if (`:${n.uniqueName}:` === e) return !0;
            for (let t in n.diversityChildren) {
              let l = n.diversityChildren[t];
              if (`:${l.uniqueName}:` === e) return !0;
            }
          }
        }
        return !1;
      }
      let S = i.createContext({
        triggerAnimation: () => {},
        untriggerAnimation: () => {},
      });
      function L(e) {
        let { children: t } = e,
          { triggerAnimation: n, untriggerAnimation: r } = i.useContext(S),
          a = (0, s.Us)(),
          u = i.useMemo(
            () => ({
              triggerAnimation: (e) => {
                a !== p.BRT.OVERLAY && k(e) && n(e);
              },
              untriggerAnimation: (e) => {
                a !== p.BRT.OVERLAY && k(e) && r(e);
              },
            }),
            [a, n, r],
          );
        return (0, l.jsx)(S.Provider, { value: u, children: t });
      }
      function M(e) {
        let { children: t } = e,
          n = d.A.useIsEligible(),
          r = i.useCallback((e, t) => {
            switch (t) {
              case c.n.THROW_EMOJI:
                return (0, l.jsx)(b, { children: e });
              case c.n.SNOW:
                return (0, l.jsx)(I, { children: e });
            }
          }, []);
        return n && null != c.A.emojiAnimationType
          ? r((0, l.jsx)(L, { children: t }), c.A.emojiAnimationType)
          : t;
      }
      function O(e) {
        let { emojiRef: t, channelId: n, messageId: l, emojiName: a } = e,
          u = (0, r.bG)([o.A], () => o.A.getMessage(n, l)),
          { triggerAnimation: s } = i.useContext(S);
        return (
          i.useEffect(() => {
            if (
              !c.A.triggerEmojiAnimationFromSentMessage ||
              u?.state !== p.cmJ.SENT ||
              (0, f.AI)(l)
            )
              return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (s(a), (0, f.IL)(l));
          }, [a, t, u?.state, l, s]),
          null
        );
      }
      function F(e) {
        let {
            channelId: t,
            messageId: n,
            emojiName: i,
            disable: u,
            emojiRef: o,
          } = e,
          c = (0, r.bG)([a.A], () => a.A.useReducedMotion),
          f = d.A.useIsEligible(),
          m = (0, s.Us)();
        return u ||
          m === p.BRT.OVERLAY ||
          !f ||
          null == n ||
          null == t ||
          c ||
          null == o ||
          !k(i)
          ? null
          : (0, l.jsx)(O, {
              emojiRef: o,
              channelId: t,
              messageId: n,
              emojiName: i,
            });
      }
    },
    513609(e, t, n) {
      n.d(t, { Ay: () => s, di: () => u, lr: () => a });
      let {
          Layer: l,
          LayerContainer: i,
          LayerProvider: r,
        } = (0, n(83379).Ay)("Chat"),
        a = i,
        u = r,
        s = l;
    },
    366811(e, t, n) {
      n.d(t, { A: () => o });
      var l = n(265690),
        i = n(121894),
        r = n(463347),
        a = n(334465),
        u = n(652215);
      function s(e) {
        let t = (0, a.B)(e ?? "", {
          path: u.BVt.CHANNEL(
            r.pv.guildId(),
            r.pv.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return { guildId: e === u.ME ? null : e, channelId: n ?? null };
        }
        let n = (0, a.B)(e ?? "", {
          path: u.BVt.GUILD_BOOSTING_MARKETING(r.pv.guildId()),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      let o = (0, l.h)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: l } = s(t);
          (0, i.r)(() => e({ path: t, guildId: n, channelId: l }));
        },
        resetPath(t) {
          let { guildId: n, channelId: l } = s(t);
          (0, i.r)(() =>
            e({ path: null, guildId: n, channelId: l, basePath: t }),
          );
        },
      }));
    },
    218394(e, t, n) {
      n.d(t, { j: () => u });
      var l = n(64700),
        i = n(17928),
        r = n(267102),
        a = n(531685);
      function u() {
        let { windowId: e } = l.useContext(r.Ay);
        return (0, i.bG)([a.A], () => a.A.isFocused(e), [e]);
      }
    },
    768622(e, t, n) {
      n.d(t, { g: () => u });
      var l = n(627968);
      n(64700);
      var i = n(661531),
        r = n(996682),
        a = n(27989);
      let u = (e) => {
        let {
            size: t = "md",
            width: n,
            height: u,
            color: s = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, a.J)(t),
          f = d?.width ?? n,
          m = d?.height ?? u;
        return (0, l.jsx)("svg", {
          ...(0, r.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: f,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
            className: o,
          }),
        });
      };
    },
    332837(e, t, n) {
      n.d(t, { f: () => u });
      var l = n(627968);
      n(64700);
      var i = n(661531),
        r = n(996682),
        a = n(27989);
      let u = (e) => {
        let {
            size: t = "md",
            width: n,
            height: u,
            color: s = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, a.J)(t),
          f = d?.width ?? n,
          m = d?.height ?? u;
        return (0, l.jsx)("svg", {
          ...(0, r.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: f,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "m2.4 8.4 8.38-6.46a2 2 0 0 1 2.44 0l8.39 6.45a2 2 0 0 1-.79 3.54l-.32.07-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 1 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.32-.07a2 2 0 0 1-.79-3.54Z",
            className: o,
          }),
        });
      };
    },
    577473(e, t, n) {
      n.d(t, { r: () => u });
      var l = n(627968);
      n(64700);
      var i = n(661531),
        r = n(996682),
        a = n(27989);
      let u = (e) => {
        let {
            size: t = "md",
            width: n,
            height: u,
            color: s = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, a.J)(t),
          f = d?.width ?? n,
          m = d?.height ?? u;
        return (0, l.jsx)("svg", {
          ...(0, r.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: f,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M7.5 21.7a8.95 8.95 0 0 1 9 0 1 1 0 0 0 1-1.73c-.6-.35-1.24-.64-1.9-.87.54-.3 1.05-.65 1.52-1.07a3.98 3.98 0 0 0 5.49-1.8.77.77 0 0 0-.24-.95 3.98 3.98 0 0 0-2.02-.76A4 4 0 0 0 23 10.47a.76.76 0 0 0-.71-.71 4.06 4.06 0 0 0-1.6.22 3.99 3.99 0 0 0 .54-5.35.77.77 0 0 0-.95-.24c-.75.36-1.37.95-1.77 1.67V6a4 4 0 0 0-4.9-3.9.77.77 0 0 0-.6.72 4 4 0 0 0 3.7 4.17c.89 1.3 1.3 2.95 1.3 4.51 0 3.66-2.75 6.5-6 6.5s-6-2.84-6-6.5c0-1.56.41-3.21 1.3-4.51A4 4 0 0 0 11 2.82a.77.77 0 0 0-.6-.72 4.01 4.01 0 0 0-4.9 3.96A4.02 4.02 0 0 0 3.73 4.4a.77.77 0 0 0-.95.24 3.98 3.98 0 0 0 .55 5.35 4 4 0 0 0-1.6-.22.76.76 0 0 0-.72.71l-.01.28a4 4 0 0 0 2.65 3.77c-.75.06-1.45.33-2.02.76-.3.22-.4.62-.24.95a4 4 0 0 0 5.49 1.8c.47.42.98.78 1.53 1.07-.67.23-1.3.52-1.91.87a1 1 0 1 0 1 1.73Z",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=82731.2fb328647161516d.js.map
