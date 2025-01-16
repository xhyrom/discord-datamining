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
        r = e(570140),
        o = e(981631);
      function a() {
        r.Z.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
      }
      function c() {
        r.Z.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
      }
      function s() {
        r.Z.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
      }
      function u(t) {
        return i.tn.del({
          url: o.ANM.DELETE_SAFETY_WARNINGS(t),
          rejectWithError: !1,
        });
      }
      function l(t, n) {
        return i.tn.post({
          url: o.ANM.ADD_SAFETY_WARNING(t),
          body: { safety_warning_type: n },
          rejectWithError: !1,
        });
      }
    },
    407383: function (t, n, e) {
      var i, r, o, a;
      e.d(n, {
        G: function () {
          return i;
        },
        I: function () {
          return r;
        },
      }),
        ((o = i || (i = {})).PLAY = "play"),
        (o.PAUSE = "pause"),
        (o.BACK_TO_CONVERSATION = "back_to_conversation"),
        ((a = r || (r = {})).INAPPROPRIATE_CONVERSATION =
          "inappropriate_conversation"),
        (a.KEYBIND = "keybind");
    },
    336977: function (t, n, e) {
      e.r(n),
        e.d(n, {
          VibingWumpus: function () {
            return x;
          },
        }),
        e(47120);
      var i = e(200651),
        r = e(192379),
        o = e(120356),
        a = e.n(o),
        c = e(399606),
        s = e(481060),
        u = e(607070),
        l = e(626135),
        d = e(832239),
        _ = e(407383),
        I = e(981631),
        N = e(388032),
        f = e(724263),
        p = e(617921);
      function x(t) {
        let { onClose: n, source: o = _.I.INAPPROPRIATE_CONVERSATION } = t,
          x = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
          [C, A] = r.useState(!1);
        r.useEffect(() => {
          let t = new Date();
          return (
            l.default.track(I.rMx.VIBING_WUMPUS_VIEWED, { source: o }),
            (0, d.JO)(),
            () => {
              l.default.track(I.rMx.VIBING_WUMPUS_CLOSED, {
                duration_open_ms: new Date().getTime() - t.getTime(),
                source: o,
              }),
                (0, d.zu)();
            }
          );
        }, [o]);
        let h = () => {
          C
            ? ((0, d.JO)(),
              l.default.track(I.rMx.VIBING_WUMPUS_ACTION, { action: _.G.PLAY }))
            : ((0, d.hW)(),
              l.default.track(I.rMx.VIBING_WUMPUS_ACTION, {
                action: _.G.PAUSE,
              })),
            A(!C);
        };
        async function S() {
          let { default: t } = await e.e("29641").then(e.t.bind(e, 937359, 19));
          return t;
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: f.ringContainer,
              children: (0, i.jsx)("img", {
                src: p,
                alt: "",
                className: f.__invalid_ringArt,
              }),
            }),
            (0, i.jsx)(s.LottieAnimation, {
              importData: S,
              shouldAnimate: !C && !x,
              className: f.wumpus,
              pauseAtFrame: x ? 200 : void 0,
            }),
            (0, i.jsx)(s.Tooltip, {
              text: C ? N.intl.string(N.t.RscU7O) : N.intl.string(N.t.ZcgDJS),
              position: "top",
              "aria-label": C
                ? N.intl.string(N.t.RscU7O)
                : N.intl.string(N.t.ZcgDJS),
              children: (t) =>
                (0, i.jsx)(s.Clickable, {
                  ...t,
                  onClick: h,
                  className: f.iconButton,
                  children: C
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
            (0, i.jsx)(s.ModalContent, {
              className: a()(f.body),
              children: (0, i.jsxs)("div", {
                className: a()(f.textContainer),
                children: [
                  (0, i.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    children: N.intl.string(N.t.L4ifkZ),
                  }),
                  (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: N.intl.string(N.t.R8LCMT),
                  }),
                ],
              }),
            }),
            (0, i.jsx)(s.ModalFooter, {
              children: (0, i.jsx)("div", {
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
                  children: N.intl.string(N.t["8eKkaW"]),
                }),
              }),
            }),
          ],
        });
      }
      n.default = (t) => {
        let { onClose: n, transitionState: e } = t;
        return (0, i.jsx)(s.ModalRoot, {
          transitionState: e,
          children: (0, i.jsx)(x, { onClose: n }),
        });
      };
    },
    724263: function (t, n, e) {
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
  },
]);
//# sourceMappingURL=18ed5153044ea32c383e.js.map
