"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76815"],
  {
    617921: function (t) {
      t.exports = "/assets/e2ff09e3c924cb3e6fce.svg";
    },
    832239: function (t, n, e) {
      e.d(n, {
        JO: function () {
          return a;
        },
        KK: function () {
          return l;
        },
        Vp: function () {
          return u;
        },
        hW: function () {
          return s;
        },
        zu: function () {
          return c;
        },
      });
      var i = e(544891),
        o = e(570140),
        r = e(981631);
      function a() {
        o.Z.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
      }
      function c() {
        o.Z.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
      }
      function s() {
        o.Z.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
      }
      function u(t) {
        return i.tn.del({ url: r.ANM.DELETE_SAFETY_WARNINGS(t) });
      }
      function l(t, n) {
        return i.tn.post({
          url: r.ANM.ADD_SAFETY_WARNING(t),
          body: { safety_warning_type: n },
        });
      }
    },
    407383: function (t, n, e) {
      var i, o, r, a;
      e.d(n, {
        G: function () {
          return i;
        },
        I: function () {
          return o;
        },
      }),
        ((r = i || (i = {})).PLAY = "play"),
        (r.PAUSE = "pause"),
        (r.BACK_TO_CONVERSATION = "back_to_conversation"),
        ((a = o || (o = {})).INAPPROPRIATE_CONVERSATION =
          "inappropriate_conversation"),
        (a.KEYBIND = "keybind");
    },
    336977: function (t, n, e) {
      e.r(n),
        e.d(n, {
          VibingWumpus: function () {
            return b;
          },
        }),
        e(47120);
      var i = e(200651),
        o = e(192379),
        r = e(120356),
        a = e.n(r),
        c = e(399606),
        s = e(481060),
        u = e(607070),
        l = e(626135),
        d = e(832239),
        _ = e(407383),
        I = e(981631),
        p = e(388032),
        f = e(248807),
        C = e(248296),
        N = e(617921);
      function b(t) {
        let { onClose: n, source: r = _.I.INAPPROPRIATE_CONVERSATION } = t,
          b = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
          [x, A] = o.useState(!1);
        o.useEffect(() => {
          let t = new Date();
          return (
            l.default.track(I.rMx.VIBING_WUMPUS_VIEWED, { source: r }),
            (0, d.JO)(),
            () => {
              l.default.track(I.rMx.VIBING_WUMPUS_CLOSED, {
                duration_open_ms: new Date().getTime() - t.getTime(),
                source: r,
              }),
                (0, d.zu)();
            }
          );
        }, [r]);
        let h = () => {
          x
            ? ((0, d.JO)(),
              l.default.track(I.rMx.VIBING_WUMPUS_ACTION, { action: _.G.PLAY }))
            : ((0, d.hW)(),
              l.default.track(I.rMx.VIBING_WUMPUS_ACTION, {
                action: _.G.PAUSE,
              })),
            A(!x);
        };
        async function m() {
          let { default: t } = await e.e("29641").then(e.t.bind(e, 937359, 19));
          return t;
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: f.ringContainer,
              children: (0, i.jsx)("img", {
                src: N,
                alt: "",
                className: f.__invalid_ringArt,
              }),
            }),
            (0, i.jsx)(s.LottieAnimation, {
              importData: m,
              shouldAnimate: !x && !b,
              className: f.wumpus,
              pauseAtFrame: b ? 200 : void 0,
            }),
            (0, i.jsx)(s.Tooltip, {
              text: x ? p.intl.string(p.t.RscU7O) : p.intl.string(p.t.ZcgDJS),
              position: "top",
              "aria-label": x
                ? p.intl.string(p.t.RscU7O)
                : p.intl.string(p.t.ZcgDJS),
              children: (t) =>
                (0, i.jsx)(s.Clickable, {
                  ...t,
                  onClick: h,
                  className: f.iconButton,
                  children: x
                    ? (0, i.jsx)(s.PlayIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: f.icon,
                      })
                    : (0, i.jsx)(s.PauseIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: f.icon,
                      }),
                }),
            }),
            (0, i.jsxs)(s.ModalContent, {
              className: a()(C.body, f.body),
              children: [
                (0, i.jsxs)("div", {
                  className: a()(C.textContainer, f.textContainer),
                  children: [
                    (0, i.jsx)(s.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: p.intl.string(p.t.L4ifkZ),
                    }),
                    (0, i.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: p.intl.string(p.t.R8LCMT),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: f.buttonContainer,
                  children: (0, i.jsx)(s.Button, {
                    fullWidth: !0,
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.MEDIUM,
                    onClick: () => {
                      n(),
                        l.default.track(I.rMx.VIBING_WUMPUS_ACTION, {
                          action: _.G.BACK_TO_CONVERSATION,
                        });
                    },
                    children: p.intl.string(p.t["8eKkaW"]),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      n.default = (t) => {
        let { onClose: n, transitionState: e } = t;
        return (0, i.jsx)(s.ModalRoot, {
          transitionState: e,
          children: (0, i.jsx)(b, { onClose: n }),
        });
      };
    },
    248807: function (t, n, e) {
      t.exports = {
        body: "body_c96919",
        wumpus: "wumpus_c96919",
        textContainer: "textContainer_c96919",
        buttonContainer: "buttonContainer_c96919",
        ringContainer: "ringContainer_c96919",
        iconButton: "iconButton_c96919",
        icon: "icon_c96919",
      };
    },
    248296: function (t, n, e) {
      t.exports = {
        buttonContainer: "buttonContainer_b00055",
        button: "button_b00055",
        buttonInner: "buttonInner_b00055",
        buttonIcon: "buttonIcon_b00055",
        body: "body_b00055",
        textContainer: "textContainer_b00055",
        description: "description_b00055",
        heroImage: "heroImage_b00055",
        safetyTips: "safetyTips_b00055",
      };
    },
  },
]);
//# sourceMappingURL=68fdbde6326e209e6bcd.js.map
