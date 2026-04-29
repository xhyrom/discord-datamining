"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["993"],
  {
    426560(e) {
      e.exports = "/assets/5a7e7e66e1c9d74e.svg";
    },
    565645(e, t, n) {
      n.d(t, { A: () => j });
      var i = n(627968),
        s = n(64700),
        r = n(503698),
        o = n.n(r),
        a = n(17928),
        l = n(724442),
        u = n(692051),
        d = n(415666),
        m = n(776231),
        h = n(830178),
        g = n(253932),
        c = n(256415),
        p = n(486020),
        b = n(690521),
        f = n(218394),
        C = n(732139);
      let v = __OVERLAY__
        ? () => (0, a.bG)([c.default], () => c.default.isInstanceFocused())
        : f.j;
      function N(e) {
        let {
            src: t,
            alt: n,
            className: r,
            emojiId: a,
            emojiName: u,
            channelId: h,
            messageId: c,
            animated: f,
            size: N = "default",
            isInteracting: A = !1,
            shouldAnimate: j,
            onMouseEnter: w,
            onMouseLeave: y,
            canSelect: S = !0,
            autoplay: x,
            registerInnerRef: R,
            registerAnimatedElementRef: k,
            surrogate: E,
            ...z
          } = e,
          [I, M] = s.useState(!1),
          [F, U] = s.useState(void 0),
          _ = s.useRef(void 0),
          { triggerAnimation: L, untriggerAnimation: V } = s.useContext(d.wE),
          B = g.Sf.useSetting(),
          T = v(),
          Y = null == x ? B : x,
          D = C.Ec[N],
          O = s.useRef(null),
          P = s.useMemo(() => {
            if (null != t) return t;
            if (null != a) {
              let e = !0 === j && Y;
              return p.Ay.getEmojiURL({
                id: a,
                animated: T && !0 === f && (e || I || !0 === A),
                size: D,
              });
            }
            if (null != u) return b.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
          }, [f, Y, a, u, D, T, I, A, j, t]),
          W = s.useCallback(() => {
            null != P &&
              (_.current = (0, m.yt)(P, (e) => {
                e || U(Date.now());
              }));
          }, [P]),
          q = s.useCallback(
            (e) => {
              f && M(!0), null == a && L(u), w?.(e);
            },
            [f, u, w, L, a],
          ),
          G = s.useCallback(
            (e) => {
              f && M(!1), null == a && V(u), y?.(e);
            },
            [f, a, u, y, V],
          ),
          $ = s.useMemo(() => {
            let e =
              null != a && "" !== a ? { "data-id": a } : { "data-name": u };
            return {
              ...z,
              className: o()("emoji", r, { jumboable: "jumbo" === N }),
              onError: W,
              onMouseEnter: q,
              onMouseLeave: G,
              "data-type": "emoji",
              ...e,
            };
          }, [r, a, u, q, G, W, z, N]);
        s.useEffect(() => () => _.current?.(), []);
        let H = s.useCallback(
            (e) => {
              (O.current = e), R?.(e), k?.(e);
            },
            [R, k],
          ),
          J = (0, l.A)(O);
        return null == P || "" === P
          ? (0, i.jsx)("span", {
              ...$,
              ref: H,
              className: o()("emoji", "emoji-text"),
              children: E ?? u,
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(d.q6, {
                  channelId: h,
                  messageId: c,
                  emojiName: u,
                  disable: !1 === Y || !1 === B,
                  emojiRef: J,
                }),
                S
                  ? (0, i.jsx)(
                      "img",
                      {
                        ...$,
                        ref: H,
                        src: P,
                        alt: n ?? u ?? void 0,
                        draggable: !1,
                      },
                      F,
                    )
                  : (0, i.jsx)(
                      "div",
                      {
                        ...$,
                        ref: H,
                        role: "img",
                        "aria-label": n ?? u ?? void 0,
                        style: {
                          backgroundImage: `url(${P})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                        },
                      },
                      F,
                    ),
              ],
            });
      }
      function A(e) {
        let { useThoughtfullyAnimated: t } = s.useContext(h.W),
          { animate: n, registerRef: r } = t(),
          { disableAnimations: o } = s.useContext(u.Y);
        return (0, i.jsx)(N, {
          ...e,
          registerAnimatedElementRef: r,
          shouldAnimate: n && !o,
        });
      }
      function j(e) {
        return null == e.emojiId && null == e.emojiName && null == e.src
          ? null
          : e.animated && void 0 === e.shouldAnimate
            ? (0, i.jsx)(A, { ...e })
            : (0, i.jsx)(N, { ...e });
      }
    },
    724442(e, t, n) {
      n.d(t, { A: () => i });
      function i(e) {
        return e.current;
      }
    },
    692051(e, t, n) {
      n.d(t, { Y: () => i });
      let i = n(64700).createContext({
        disableInteractions: !1,
        disableAnimations: !1,
      });
    },
    531301(e, t, n) {
      n.d(t, { A: () => s }), n(321073);
      var i = n(7584);
      function s(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let n = i.Ay.getByName(e);
            if (
              null != n &&
              (t.push({ src: n.url, colorize: !1 }), n.hasDiversity)
            )
              for (let e in n.diversityChildren) {
                let i = n.diversityChildren[e];
                t.push({ src: i.url, colorize: !1 });
              }
          }),
          t
        );
      }
    },
    401266(e, t, n) {
      n.d(t, { AI: () => r, IL: () => s });
      let i = (0, n(353640).v)(() => ({ hasFiredFromMessage: new Set() }));
      function s(e) {
        let { hasFiredFromMessage: t } = i.getState();
        t.add(e), i.setState({ hasFiredFromMessage: t });
      }
      function r(e) {
        let { hasFiredFromMessage: t } = i.getState();
        return t.has(e);
      }
    },
    830178(e, t, n) {
      n.d(t, { W: () => a, t: () => l });
      var i = n(627968),
        s = n(64700),
        r = n(121894);
      class o {
        registeredNodes = new Map();
        visibleComponents = new Set();
        animatingComponents = new Set();
        observer;
        constructor(e = !1) {
          if (e) return;
          this.observer = new window.IntersectionObserver(
            (e) => {
              (0, r.r)(() => {
                e.forEach((e) => {
                  let t = this.registeredNodes.get(e.target);
                  null == t ||
                    (e.intersectionRatio >= 0.7
                      ? this.handleVisible(e, t)
                      : this.handleNotVisible(e, t));
                });
              });
            },
            { threshold: 0.7 },
          );
        }
        handleVisible(e, t) {
          if (this.visibleComponents.has(e.target)) return;
          let n =
            Math.abs(e.intersectionRect.bottom - Number(e.rootBounds?.bottom)) <
            Math.abs(e.intersectionRect.top - Number(e.rootBounds?.top));
          n
            ? (this.visibleComponents = new Set([
                e.target,
                ...this.visibleComponents,
              ]))
            : this.visibleComponents.add(e.target);
          let i = n || this.animatingComponents.size < 100;
          i
            ? this.animatingComponents.add(e.target)
            : this.animatingComponents.delete(e.target),
            t.updateState(i),
            i &&
              this.visibleComponents.size > 100 &&
              this.stopNodeFromAnimating();
        }
        handleNotVisible(e, t) {
          this.visibleComponents.has(e.target) &&
            (t.updateState(!1),
            this.visibleComponents.delete(e.target),
            this.animatingComponents.delete(e.target),
            this.potentiallyAnimateNewNode());
        }
        stopNodeFromAnimating() {
          let e = Array.from(this.visibleComponents);
          for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            if (this.animatingComponents.has(n)) {
              let e = this.registeredNodes.get(n);
              e?.updateState(!1), this.animatingComponents.delete(n);
              return;
            }
          }
        }
        potentiallyAnimateNewNode() {
          if (
            this.animatingComponents.size < 100 &&
            this.visibleComponents.size > this.animatingComponents.size
          ) {
            for (let e of this.visibleComponents)
              if (!this.animatingComponents.has(e)) {
                let t = this.registeredNodes.get(e);
                t?.updateState(!0), this.animatingComponents.add(e);
                return;
              }
          }
        }
        registerNode(e, t) {
          if (this.registeredNodes.has(e))
            throw Error(
              "ThoughtfullyAnimated.registeredNode: Unable to register an already registered node...",
            );
          return (
            this.registeredNodes.set(e, { updateState: t }),
            this.observer?.observe(e),
            () => {
              this.unregisterNode(e);
            }
          );
        }
        unregisterNode(e) {
          this.registeredNodes.delete(e),
            this.animatingComponents.delete(e),
            this.visibleComponents.delete(e),
            this.observer?.unobserve(e),
            this.potentiallyAnimateNewNode();
        }
        cleanUp() {
          this.observer?.disconnect(),
            this.registeredNodes.clear(),
            this.visibleComponents.clear();
        }
      }
      let a = s.createContext({
        manager: new o(!0),
        useThoughtfullyAnimated: () => ({ animate: !0, registerRef: () => {} }),
      });
      function l(e) {
        let { children: t } = e,
          [n] = s.useState(() => {
            let e = new o();
            return {
              manager: e,
              useThoughtfullyAnimated() {
                let t = s.useRef(null),
                  [n, i] = s.useState(!1);
                return {
                  animate: n,
                  registerRef: s.useCallback((n) => {
                    null != t.current && e.unregisterNode(t.current),
                      (t.current = n),
                      null != t.current && e.registerNode(t.current, i);
                  }, []),
                };
              },
            };
          });
        return (
          s.useEffect(() => () => n.manager.cleanUp(), [n.manager]),
          (0, i.jsx)(a.Provider, { value: n, children: t })
        );
      }
    },
  },
]);
//# sourceMappingURL=993.ada4db7d8a79251e.js.map
