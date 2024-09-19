"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52249"],
  {
    787829: function (e) {
      e.exports = "/assets/6b7aad9e376bb3e56b3f.svg";
    },
    479878: function (e) {
      e.exports = "/assets/5e7fa3831f3f09dc4054.svg";
    },
    110818: function (e, t, n) {
      n.d(t, {
        Db: function () {
          return P;
        },
        HC: function () {
          return R;
        },
        NQ: function () {
          return g;
        },
        fe: function () {
          return V;
        },
      }),
        n(47120);
      var a,
        r,
        s,
        i,
        o,
        l,
        u,
        c,
        d,
        E,
        S,
        m,
        p = n(735250),
        D = n(470079),
        I = n(120356),
        _ = n.n(I),
        h = n(526629),
        N = n(748780),
        A = n(481060),
        T = n(83615);
      function O(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((d = a || (a = {})).NORMAL = "normal"),
        (d.SPEED_START = "speed_start"),
        (d.SPEED_LOOP = "speed_loop"),
        (d.FINISH = "finish"),
        (d.IDLE = "idle");
      let L = {
        normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
        speed_start: { BEG: 601, END: 636 },
        speed_loop: { BEG: 637, END: 668 },
        finish: { BEG: 669, END: 870 },
        idle: { BEG: 871, END: 878 },
      };
      class g extends (r = D.PureComponent) {
        static getNextScene(e) {
          switch (e) {
            case g.Scenes.SPEED_START:
              return g.Scenes.SPEED_LOOP;
            case g.Scenes.FINISH:
              return g.Scenes.IDLE;
            default:
              return e;
          }
        }
        importDefault() {
          return n
            .e("12817")
            .then(n.t.bind(n, 92668, 19))
            .then((e) => {
              let { default: t } = e;
              return t;
            });
        }
        render() {
          let {
            className: e,
            nextScene: t,
            onScenePlay: n,
            onSceneComplete: a,
            pause: r,
            pauseWhileUnfocused: s,
          } = this.props;
          return (0, p.jsx)(A.SequencedLottieAnimation, {
            className: _()(T.sequencedAnimation, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: L,
            onScenePlay: n,
            onSceneComplete: a,
            pauseWhileUnfocused: s,
            pause: r,
          });
        }
      }
      O(g, "Scenes", a),
        ((E = s || (s = {})).NORMAL = "normal"),
        (E.SPEED_START = "speed_start"),
        (E.SPEED_LOOP = "speed_loop"),
        (E.FINISH = "finish"),
        (E.IDLE = "idle");
      let f = {
        normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
        speed_start: { BEG: 601, END: 636 },
        speed_loop: { BEG: 637, END: 668 },
        finish: { BEG: 669, END: 870 },
        idle: { BEG: 871, END: 878 },
      };
      class R extends (i = D.PureComponent) {
        static getNextScene(e) {
          switch (e) {
            case R.Scenes.SPEED_START:
              return R.Scenes.SPEED_LOOP;
            case R.Scenes.FINISH:
              return R.Scenes.IDLE;
            default:
              return e;
          }
        }
        importDefault() {
          return n
            .e("46896")
            .then(n.t.bind(n, 35065, 19))
            .then((e) => {
              let { default: t } = e;
              return t;
            });
        }
        render() {
          let {
            className: e,
            nextScene: t,
            onScenePlay: n,
            onSceneComplete: a,
            pause: r,
            pauseWhileUnfocused: s,
          } = this.props;
          return (0, p.jsx)(A.SequencedLottieAnimation, {
            className: _()(T.sequencedAnimation, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: f,
            onScenePlay: n,
            onSceneComplete: a,
            pauseWhileUnfocused: s,
            pause: r,
          });
        }
      }
      O(R, "Scenes", s),
        ((S = o || (o = {})).IDLE_ENTRY = "idle_entry"),
        (S.IDLE_LOOP = "idle_loop"),
        (S.BOOST_START = "boost_start"),
        (S.BOOST_LOOP = "boost_loop"),
        (S.BOOST_END = "boost_end"),
        (S.VICTORY = "victory"),
        (S.ERROR = "error");
      let y = {
        idle_entry: { BEG: 0, END: 50 },
        idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
        boost_start: { BEG: 230, END: 275 },
        boost_loop: { BEG: 275, END: 290 },
        boost_end: { BEG: 386, END: 455 },
        victory: { BEG: 470, END: 525 },
        error: { BEG: 290, END: 375 },
      };
      class x extends D.PureComponent {
        getStyle(e) {
          let { animation: t } = this.props;
          return {
            transform: [
              {
                translateX: t.x.interpolate({
                  inputRange: [0, 1],
                  outputRange: e ? ["100%", "0%"] : ["0%", "-100%"],
                }),
              },
              {
                translateY: t.y.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["100%", "0%"],
                }),
              },
            ],
          };
        }
        render() {
          let { className: e } = this.props;
          return (0, p.jsxs)("div", {
            className: T.panningAnimation,
            children: [
              (0, p.jsx)(N.Z.div, { className: e, style: this.getStyle(!1) }),
              (0, p.jsx)(N.Z.div, { className: e, style: this.getStyle(!0) }),
            ],
          });
        }
      }
      let B = Object.freeze({
        IDLE_ENTRY: { toValue: 1, duration: 1500 },
        IDLE_LOOP: { toValue: 1, duration: 6e3, easing: N.Z.Easing.linear },
        BOOST_START: { toValue: 0, duration: 2e3, delay: 500 },
        ERROR: { toValue: 1, duration: 1500, delay: 1e3 },
      });
      class P extends (l = D.PureComponent) {
        static getNextScene(e) {
          switch (e) {
            case P.Scenes.IDLE_ENTRY:
              return P.Scenes.IDLE_LOOP;
            case P.Scenes.BOOST_START:
              return P.Scenes.BOOST_LOOP;
            case P.Scenes.BOOST_END:
              return P.Scenes.VICTORY;
            case P.Scenes.VICTORY:
              return P.Scenes.IDLE_ENTRY;
            case P.Scenes.ERROR:
              return P.Scenes.IDLE_LOOP;
            default:
              return e;
          }
        }
        componentWillUnmount() {
          this.didUnmount = !0;
        }
        importData() {
          return n
            .e("70253")
            .then(n.t.bind(n, 88032, 19))
            .then((e) => {
              let { default: t } = e;
              return t;
            });
        }
        animateEntry(e) {
          N.Z.parallel([
            N.Z.timing(this.foregroundAnimation.y, {
              toValue: e.toValue,
              duration: e.duration,
              delay: e.delay || 0,
            }),
            N.Z.timing(this.backgroundAnimation.y, {
              toValue: e.toValue,
              duration: 1.2 * e.duration,
              delay: e.delay || 0,
            }),
          ]).start();
        }
        animateIdleEntry() {
          this.animateEntry(B.IDLE_ENTRY);
        }
        animateError() {
          this.animateEntry(B.ERROR);
        }
        animateIdleLoop() {
          this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
        }
        animateBoostStart() {
          N.Z.parallel([
            N.Z.timing(this.foregroundAnimation.y, {
              toValue: B.BOOST_START.toValue,
              duration: B.BOOST_START.duration,
              delay: B.BOOST_START.delay,
            }),
            N.Z.timing(this.backgroundAnimation.y, {
              toValue: B.BOOST_START.toValue,
              duration: 1.2 * B.BOOST_START.duration,
              delay: B.BOOST_START.delay,
            }),
          ]).start();
        }
        render() {
          let {
            className: e,
            nextScene: t,
            pause: n,
            onSceneComplete: a,
          } = this.props;
          return (0, p.jsxs)("div", {
            className: _()(T.tier2Animation, e),
            children: [
              n
                ? (0, p.jsx)(p.Fragment, {
                    children: (0, p.jsxs)("div", {
                      className: T.panningAnimation,
                      children: [
                        (0, p.jsx)("div", { className: T.tier2Background }),
                        (0, p.jsx)("div", { className: T.tier2Foreground }),
                      ],
                    }),
                  })
                : (0, p.jsxs)(p.Fragment, {
                    children: [
                      (0, p.jsx)(x, {
                        className: T.tier2Background,
                        animation: this.backgroundAnimation,
                      }),
                      (0, p.jsx)(x, {
                        className: T.tier2Foreground,
                        animation: this.foregroundAnimation,
                      }),
                    ],
                  }),
              (0, p.jsx)(A.SequencedLottieAnimation, {
                className: T.sequencedAnimation,
                importData: this.importData,
                nextScene: n ? "idle_loop" : t,
                sceneSegments: y,
                onScenePlay: this.handleScenePlay,
                onSceneComplete: a,
                pauseWhileUnfocused: !1,
                pause: n,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            O(this, "backgroundAnimation", new N.Z.ValueXY({ x: 0, y: 0 })),
            O(this, "foregroundAnimation", new N.Z.ValueXY({ x: 0, y: 0 })),
            O(this, "didUnmount", !1),
            O(this, "animateIdleLoopBackground", () => {
              if (!this.didUnmount)
                this.backgroundAnimation.x.setValue(0),
                  N.Z.timing(this.backgroundAnimation.x, {
                    toValue: B.IDLE_LOOP.toValue,
                    duration: 1.2 * B.IDLE_LOOP.duration,
                    easing: N.Z.Easing.linear,
                  }).start(this.animateIdleLoopBackground);
            }),
            O(this, "animateIdleLoopForeground", () => {
              if (!this.didUnmount)
                this.foregroundAnimation.x.setValue(0),
                  N.Z.timing(this.foregroundAnimation.x, {
                    toValue: B.IDLE_LOOP.toValue,
                    duration: B.IDLE_LOOP.duration,
                    easing: B.IDLE_LOOP.easing,
                  }).start(this.animateIdleLoopForeground);
            }),
            O(this, "handleScenePlay", (e) => {
              switch (e) {
                case "idle_entry":
                  this.animateIdleEntry(), this.animateIdleLoop();
                  break;
                case "error":
                  this.animateError();
                  break;
                case "boost_start":
                  this.animateBoostStart();
              }
              let { onScenePlay: t } = this.props;
              null != t && t(e);
            });
        }
      }
      O(P, "Scenes", o),
        ((m = u || (u = {})).ENTRY = "entry"),
        (m.IDLE = "idle"),
        (m.STARS = "stars"),
        (m.ERROR = "error"),
        (m.SUCCESS = "success");
      let b = {
          entry: { BEG: 0, END: 180 },
          idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
          stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
          error: { BEG: 360, END: 540 },
          success: { BEG: 540, END: 778 },
        },
        G = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
        C = [
          { left: 29, top: 100, color: G.WHITE },
          { left: 245, top: 11, color: G.PINK },
          { left: 393, top: 22, color: G.WHITE },
          { left: 74, top: 30, color: G.PINK },
          { left: 188, top: 9, color: G.WHITE },
          { left: 379, top: 97, color: G.PINK },
        ],
        j = Object.freeze({
          SCALE_INITIAL: 0,
          SCALE_MIDDLE: 1,
          SCALE_END: 0,
          ROTATE_INITIAL: 0,
          ROTATE_MIDDLE: 180,
          ROTATE_END: 360,
          DELAY_MIN: 200,
          DELAY_MAX: 500,
          DELAY_STAGGER: 200,
          DURATION_MIDDLE: 400,
          DURATION_END: 250,
          SIZE_MIN: 7,
          SIZE_MAX: 15,
          EASING_MIDDLE: N.Z.Easing.bezier(0.3, 0.01, 0, 0.99),
          EASING_END: N.Z.Easing.bezier(0, -0.01, 0.99, 0),
        });
      function M(e) {
        let { animate: t } = e,
          [n, a] = D.useState(0),
          r = (0, A.useSprings)(
            C.length,
            C.map((e, r) => {
              let s =
                  r > 0
                    ? j.DELAY_STAGGER * r +
                      Math.random() * (j.DELAY_MAX - j.DELAY_MIN) +
                      j.DELAY_MIN
                    : 0,
                i = Math.random() * (j.SIZE_MAX - j.SIZE_MIN) + j.SIZE_MIN;
              return {
                from: {
                  scale: j.SCALE_INITIAL,
                  rotate: j.ROTATE_INITIAL,
                  top: e.top,
                  left: e.left,
                  width: i,
                  height: i,
                },
                to: async (e) => {
                  t
                    ? (await e({
                        scale: j.SCALE_MIDDLE,
                        rotate: j.ROTATE_MIDDLE,
                        delay: s,
                        config: {
                          duration: j.DURATION_MIDDLE,
                          easing: j.EASING_MIDDLE,
                        },
                      }),
                      await e({
                        scale: j.SCALE_END,
                        rotate: j.ROTATE_END,
                        config: {
                          duration: j.DURATION_END,
                          easing: j.EASING_END,
                        },
                      }),
                      await e({
                        scale: j.SCALE_INITIAL,
                        rotate: j.ROTATE_INITIAL,
                        immediate: !0,
                      }),
                      r === C.length - 1 && a(n + 1))
                    : await e({
                        scale: j.SCALE_INITIAL,
                        rotate: j.ROTATE_INITIAL,
                      });
                },
              };
            }),
          );
        return (0, p.jsx)(p.Fragment, {
          children: r.map((e, t) => {
            let n = C[t];
            return (0, p.jsx)(
              h.animated.svg,
              {
                style: e,
                className: T.guildStar,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12.14 12.24",
                children: (0, p.jsx)("path", {
                  d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                  fill: n.color,
                }),
              },
              t,
            );
          }),
        });
      }
      class V extends (c = D.PureComponent) {
        static getNextScene(e) {
          switch (e) {
            case "entry":
            case "error":
            case "success":
              return "idle";
            default:
              return e;
          }
        }
        importData() {
          return n
            .e("37586")
            .then(n.t.bind(n, 134072, 19))
            .then((e) => {
              let { default: t } = e;
              return t;
            });
        }
        render() {
          let {
            className: e,
            nextScene: t,
            pause: n,
            onScenePlay: a,
            onSceneComplete: r,
            pauseWhileUnfocused: s,
          } = this.props;
          return (0, p.jsxs)("div", {
            className: _()(T.guildWrapper, e),
            children: [
              (0, p.jsx)(A.SequencedLottieAnimation, {
                className: T.guildBackground,
                importData: this.importData,
                nextScene: n ? "idle" : t,
                sceneSegments: b,
                onScenePlay: a,
                onSceneComplete: r,
                pauseWhileUnfocused: s,
                pause: n,
              }),
              (0, p.jsx)(M, { animate: !n && "stars" === t }),
            ],
          });
        }
      }
      O(V, "Scenes", u);
    },
  },
]);
//# sourceMappingURL=6f29c3cbd43739b24c73.js.map
