"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20861"],
  {
    426560(e) {
      e.exports = "/assets/5a7e7e66e1c9d74e.svg";
    },
    565645(e, t, n) {
      n.d(t, { A: () => y });
      var i = n(627968),
        s = n(64700),
        a = n(503698),
        r = n.n(a),
        o = n(17928),
        l = n(724442),
        u = n(692051),
        d = n(415666),
        h = n(776231),
        m = n(830178),
        c = n(253932),
        p = n(256415),
        g = n(486020),
        f = n(690521),
        b = n(218394),
        C = n(732139);
      let v = __OVERLAY__
        ? () => (0, o.bG)([p.default], () => p.default.isInstanceFocused())
        : b.j;
      function S(e) {
        let {
            src: t,
            alt: n,
            className: a,
            emojiId: o,
            emojiName: u,
            channelId: m,
            messageId: p,
            animated: b,
            size: S = "default",
            isInteracting: N = !1,
            shouldAnimate: y,
            onMouseEnter: A,
            onMouseLeave: E,
            canSelect: j = !0,
            autoplay: w,
            registerInnerRef: x,
            registerAnimatedElementRef: R,
            surrogate: F,
            ...k
          } = e,
          [U, L] = s.useState(!1),
          [z, I] = s.useState(void 0),
          M = s.useRef(void 0),
          { triggerAnimation: P, untriggerAnimation: D } = s.useContext(d.wE),
          W = c.Sf.useSetting(),
          B = v(),
          _ = null == w ? W : w,
          G = C.Ec[S],
          V = s.useRef(null),
          T = s.useMemo(() => {
            if (null != t) return t;
            if (null != o) {
              let e = !0 === y && _;
              return g.Ay.getEmojiURL({
                id: o,
                animated: B && !0 === b && (e || U || !0 === N),
                size: G,
              });
            }
            if (null != u) return f.Ay.getURL(u);
            throw Error("Unknown Src for Emoji");
          }, [b, _, o, u, G, B, U, N, y, t]),
          Y = s.useCallback(() => {
            null != T &&
              (M.current = (0, h.yt)(T, (e) => {
                e || I(Date.now());
              }));
          }, [T]),
          O = s.useCallback(
            (e) => {
              b && L(!0), null == o && P(u), A?.(e);
            },
            [b, u, A, P, o],
          ),
          q = s.useCallback(
            (e) => {
              b && L(!1), null == o && D(u), E?.(e);
            },
            [b, o, u, E, D],
          ),
          $ = s.useMemo(() => {
            let e =
              null != o && "" !== o ? { "data-id": o } : { "data-name": u };
            return {
              ...k,
              className: r()("emoji", a, { jumboable: "jumbo" === S }),
              onError: Y,
              onMouseEnter: O,
              onMouseLeave: q,
              "data-type": "emoji",
              ...e,
            };
          }, [a, o, u, O, q, Y, k, S]);
        s.useEffect(() => () => M.current?.(), []);
        let H = s.useCallback(
            (e) => {
              (V.current = e), x?.(e), R?.(e);
            },
            [x, R],
          ),
          J = (0, l.A)(V);
        return null == T || "" === T
          ? (0, i.jsx)("span", {
              ...$,
              ref: H,
              className: r()("emoji", "emoji-text"),
              children: F ?? u,
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(d.q6, {
                  channelId: m,
                  messageId: p,
                  emojiName: u,
                  disable: !1 === _ || !1 === W,
                  emojiRef: J,
                }),
                j
                  ? (0, i.jsx)(
                      "img",
                      {
                        ...$,
                        ref: H,
                        src: T,
                        alt: n ?? u ?? void 0,
                        draggable: !1,
                      },
                      z,
                    )
                  : (0, i.jsx)(
                      "div",
                      {
                        ...$,
                        ref: H,
                        role: "img",
                        "aria-label": n ?? u ?? void 0,
                        style: {
                          backgroundImage: `url(${T})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                        },
                      },
                      z,
                    ),
              ],
            });
      }
      function N(e) {
        let { useThoughtfullyAnimated: t } = s.useContext(m.W),
          { animate: n, registerRef: a } = t(),
          { disableAnimations: r } = s.useContext(u.Y);
        return (0, i.jsx)(S, {
          ...e,
          registerAnimatedElementRef: a,
          shouldAnimate: n && !r,
        });
      }
      function y(e) {
        return null == e.emojiId && null == e.emojiName && null == e.src
          ? null
          : e.animated && void 0 === e.shouldAnimate
            ? (0, i.jsx)(N, { ...e })
            : (0, i.jsx)(S, { ...e });
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
      n.d(t, { AI: () => a, IL: () => s });
      let i = (0, n(353640).v)(() => ({ hasFiredFromMessage: new Set() }));
      function s(e) {
        let { hasFiredFromMessage: t } = i.getState();
        t.add(e), i.setState({ hasFiredFromMessage: t });
      }
      function a(e) {
        let { hasFiredFromMessage: t } = i.getState();
        return t.has(e);
      }
    },
    830178(e, t, n) {
      n.d(t, { W: () => o, t: () => l });
      var i = n(627968),
        s = n(64700),
        a = n(121894);
      class r {
        registeredNodes = new Map();
        visibleComponents = new Set();
        animatingComponents = new Set();
        observer;
        constructor(e = !1) {
          if (e) return;
          this.observer = new window.IntersectionObserver(
            (e) => {
              (0, a.r)(() => {
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
      let o = s.createContext({
        manager: new r(!0),
        useThoughtfullyAnimated: () => ({ animate: !0, registerRef: () => {} }),
      });
      function l(e) {
        let { children: t } = e,
          [n] = s.useState(() => {
            let e = new r();
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
          (0, i.jsx)(o.Provider, { value: n, children: t })
        );
      }
    },
    544048(e, t, n) {
      n.d(t, { t: () => m });
      var i = n(627968),
        s = n(64700),
        a = n(503698),
        r = n.n(a),
        o = n(941861),
        l = n(844222),
        u = n(460890),
        d = n(409341);
      class h extends s.PureComponent {
        static defaultProps = { pauseWhileUnfocused: !0, pause: !1 };
        animationRef = null;
        animation;
        currentScene = this.props.nextScene;
        isUnmounted = !1;
        async componentDidMount() {
          let {
              importData: e,
              nextScene: t,
              pauseWhileUnfocused: i,
              pause: s,
              isWindowFocused: a,
              useReducedMotion: r,
              rendererSettings: o,
            } = this.props,
            [l, { default: u }] = await Promise.all([
              e(),
              n.e("96382").then(n.t.bind(n, 883885, 23)),
            ]);
          null != this.animationRef &&
            ((this.animation = u.loadAnimation({
              container: this.animationRef,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: l,
              rendererSettings: o,
            })),
            this.animation.addEventListener(
              "loopComplete",
              this.handleLoopComplete,
            ),
            this.animation.addEventListener("complete", this.handleComplete),
            this.animation.addEventListener(
              "enterFrame",
              this.handleEnterFrame,
            ),
            this.playScene(t),
            ((i && !a) || s || r) && this.animation.pause());
        }
        componentWillUnmount() {
          (this.isUnmounted = !0),
            null != this.animation &&
              (this.animation.destroy(), (this.animation = void 0));
        }
        componentDidUpdate(e) {
          let {
            nextScene: t,
            pauseWhileUnfocused: n,
            pause: i,
            isWindowFocused: s,
            useReducedMotion: a,
          } = this.props;
          t !== this.currentScene &&
            this.shouldForcePlayAfter() &&
            !i &&
            this.playScene(t),
            null != this.animation &&
              (n && !e.isWindowFocused && s && !a && !0 !== i
                ? this.animation.play()
                : (a || (n && e.isWindowFocused && !s)) &&
                  this.animation.pause()),
            !e.pause && i
              ? this.animation?.pause()
              : !e.pause || i || a || this.animation?.play(),
            e.nextScene !== t &&
              i &&
              (this.playScene(t), this.animation?.pause());
        }
        shouldForcePlayAfter() {
          let { sceneSegments: e } = this.props;
          return !0 === e[this.currentScene].shouldForcePlayAfter;
        }
        playScene(e) {
          if (this.isUnmounted) return;
          let {
              onScenePlay: t,
              sceneSegments: n,
              useReducedMotion: i,
            } = this.props,
            s = n[e],
            a = n[this.currentScene];
          null != this.animation &&
            (e === this.currentScene || s.BEG !== a.BEG || s.END !== a.END) &&
            this.animation.playSegments([s.BEG, s.END], !0),
            (this.currentScene = e),
            null != t && t(this.currentScene),
            i && this.animation?.pause();
        }
        handleLoopComplete = () => {
          let { onSceneComplete: e, nextScene: t } = this.props;
          null != e && e(this.currentScene), this.playScene(t);
        };
        handleComplete = () => {
          let { onSceneComplete: e } = this.props;
          null != e && e(this.currentScene);
        };
        handleEnterFrame = (e) => {
          let { onEnterFrame: t } = this.props;
          t?.(this.currentScene, e);
        };
        handleSetRef = (e) => {
          this.animationRef = e;
          let { animationRef: t } = this.props;
          null != t && t(e);
        };
        render() {
          return (0, i.jsx)("div", {
            ref: this.handleSetRef,
            className: r()(this.props.className, d.i),
          });
        }
      }
      let m = (e) => {
        let { componentRef: t, ignoreReducedMotion: n = !1, ...a } = e,
          { isWindowFocused: r } = (0, u.G9)(),
          d = (0, o.R)(),
          { reducedMotion: m } = s.useContext(l.C),
          c = m.enabled && !n,
          p = { ...a, isWindowFocused: r?.() ?? d, useReducedMotion: c };
        return (0, i.jsx)(h, { ...p, ref: t });
      };
    },
  },
]);
//# sourceMappingURL=20861.a2b13ef27ea0a488.js.map
