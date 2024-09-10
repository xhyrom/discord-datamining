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
          return _;
        },
        Vp: function () {
          return u;
        },
        hW: function () {
          return c;
        },
        zu: function () {
          return s;
        },
      });
      var o = e(544891),
        i = e(570140),
        r = e(981631);
      function a() {
        i.Z.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
      }
      function s() {
        i.Z.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
      }
      function c() {
        i.Z.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
      }
      function u(t) {
        return o.tn.del({ url: r.ANM.DELETE_SAFETY_WARNINGS(t) });
      }
      function _(t, n) {
        return o.tn.post({
          url: r.ANM.ADD_SAFETY_WARNING(t),
          body: { safety_warning_type: n },
        });
      }
    },
    407383: function (t, n, e) {
      var o, i, r, a;
      e.d(n, {
        G: function () {
          return o;
        },
        I: function () {
          return i;
        },
      }),
        ((r = o || (o = {})).PLAY = "play"),
        (r.PAUSE = "pause"),
        (r.BACK_TO_CONVERSATION = "back_to_conversation"),
        ((a = i || (i = {})).INAPPROPRIATE_CONVERSATION =
          "inappropriate_conversation"),
        (a.KEYBIND = "keybind");
    },
    336977: function (t, n, e) {
      e.r(n),
        e.d(n, {
          VibingWumpus: function () {
            return p;
          },
        }),
        e(47120);
      var o = e(735250),
        i = e(470079),
        r = e(120356),
        a = e.n(r),
        s = e(399606),
        c = e(481060),
        u = e(607070),
        _ = e(626135),
        l = e(832239),
        I = e(407383),
        d = e(981631),
        N = e(689938),
        A = e(248807),
        C = e(248296),
        P = e(617921);
      function p(t) {
        let { onClose: n, source: r = I.I.INAPPROPRIATE_CONVERSATION } = t,
          p = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
          [b, f] = i.useState(!1);
        i.useEffect(() => {
          let t = new Date();
          return (
            _.default.track(d.rMx.VIBING_WUMPUS_VIEWED, { source: r }),
            (0, l.JO)(),
            () => {
              _.default.track(d.rMx.VIBING_WUMPUS_CLOSED, {
                duration_open_ms: new Date().getTime() - t.getTime(),
                source: r,
              }),
                (0, l.zu)();
            }
          );
        }, [r]);
        let x = () => {
          b
            ? ((0, l.JO)(),
              _.default.track(d.rMx.VIBING_WUMPUS_ACTION, { action: I.G.PLAY }))
            : ((0, l.hW)(),
              _.default.track(d.rMx.VIBING_WUMPUS_ACTION, {
                action: I.G.PAUSE,
              })),
            f(!b);
        };
        async function S() {
          let { default: t } = await e.e("29641").then(e.t.bind(e, 937359, 19));
          return t;
        }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("div", {
              className: A.ringContainer,
              children: (0, o.jsx)("img", {
                src: P,
                alt: "",
                className: A.__invalid_ringArt,
              }),
            }),
            (0, o.jsx)(c.LottieAnimation, {
              importData: S,
              shouldAnimate: !b && !p,
              className: A.wumpus,
              pauseAtFrame: p ? 200 : void 0,
            }),
            (0, o.jsx)(c.Tooltip, {
              text: b ? N.Z.Messages.PLAY : N.Z.Messages.PAUSE,
              position: "top",
              "aria-label": b ? N.Z.Messages.PLAY : N.Z.Messages.PAUSE,
              children: (t) =>
                (0, o.jsx)(c.Clickable, {
                  ...t,
                  onClick: x,
                  className: A.iconButton,
                  children: b
                    ? (0, o.jsx)(c.PlayIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: A.icon,
                      })
                    : (0, o.jsx)(c.PauseIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: A.icon,
                      }),
                }),
            }),
            (0, o.jsxs)(c.ModalContent, {
              className: a()(C.body, A.body),
              children: [
                (0, o.jsxs)("div", {
                  className: a()(C.textContainer, A.textContainer),
                  children: [
                    (0, o.jsx)(c.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children:
                        N.Z.Messages
                          .INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER,
                    }),
                    (0, o.jsx)(c.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children:
                        N.Z.Messages
                          .INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION,
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: A.buttonContainer,
                  children: (0, o.jsx)(c.Button, {
                    fullWidth: !0,
                    color: c.Button.Colors.BRAND,
                    size: c.Button.Sizes.MEDIUM,
                    onClick: () => {
                      n(),
                        _.default.track(d.rMx.VIBING_WUMPUS_ACTION, {
                          action: I.G.BACK_TO_CONVERSATION,
                        });
                    },
                    children:
                      N.Z.Messages
                        .INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN,
                  }),
                }),
              ],
            }),
          ],
        });
      }
      n.default = (t) => {
        let { onClose: n, transitionState: e } = t;
        return (0, o.jsx)(c.ModalRoot, {
          transitionState: e,
          children: (0, o.jsx)(p, { onClose: n }),
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
//# sourceMappingURL=aaefaead7bdb6a5f7bf8.js.map
