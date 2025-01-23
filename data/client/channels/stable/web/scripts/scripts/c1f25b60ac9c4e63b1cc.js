"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77875"],
  {
    657300: function (t, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return C;
          },
        });
      var e = o(200651),
        i = o(192379),
        s = o(704215),
        a = o(481060),
        d = o(607070),
        l = o(605236),
        r = o(661824),
        c = o(626135),
        m = o(132871),
        x = o(147890),
        u = o(981631),
        I = o(921944),
        _ = o(388032),
        h = o(716218);
      function C(t) {
        let {
          guildId: n,
          transitionState: C,
          onClose: j,
          analyticsType: N = s.z.APP_DIRECTORY_UPSELL_MODAL,
        } = t;
        return (
          i.useEffect(() => {
            c.default.track(u.rMx.DISMISSIBLE_CONTENT_SHOWN, {
              type: s.z[N],
              guild_id: n,
            });
          }, [n, N]),
          (0, e.jsxs)(a.ModalRoot, {
            transitionState: C,
            className: h.__invalid_modal,
            size: a.ModalSize.SMALL,
            children: [
              (0, e.jsxs)(a.ModalContent, {
                className: h.modalContent,
                children: [
                  (0, e.jsx)(a.LottieAnimation, {
                    autoplay: !0,
                    shouldAnimate: !d.Z.useReducedMotion,
                    importData: () =>
                      o.e("76241").then(o.t.bind(o, 554690, 19)),
                    className: h.animation,
                  }),
                  (0, e.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    children: _.intl.string(_.t["2tv5YG"]),
                  }),
                  (0, e.jsx)(a.Text, {
                    variant: "text-md/medium",
                    className: h.subheader,
                    color: "text-muted",
                    children: _.intl.string(_.t.pgwlDw),
                  }),
                  (0, e.jsxs)("ul", {
                    className: h.listContainer,
                    children: [
                      (0, e.jsxs)("li", {
                        className: h.listItem,
                        children: [
                          (0, e.jsx)(a.MagicWandIcon, {
                            color: "currentColor",
                            className: h.wandIcon,
                          }),
                          (0, e.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: _.intl.string(_.t["0vKo5O"]),
                          }),
                        ],
                      }),
                      (0, e.jsx)(r.Z, { className: h.divider }),
                      (0, e.jsxs)("li", {
                        className: h.listItem,
                        children: [
                          (0, e.jsx)(a.RobotIcon, {
                            color: "currentColor",
                            className: h.robotIcon,
                          }),
                          (0, e.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: _.intl.string(_.t.CprEDA),
                          }),
                        ],
                      }),
                      (0, e.jsx)(r.Z, { className: h.divider }),
                      (0, e.jsxs)("li", {
                        className: h.listItem,
                        children: [
                          (0, e.jsx)(a.ReactionIcon, {
                            color: "currentColor",
                            className: h.smileIcon,
                          }),
                          (0, e.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: _.intl.string(_.t.wQJMPD),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)(a.ModalFooter, {
                className: h.modalFooter,
                children: [
                  (0, e.jsx)(a.Button, {
                    onClick: () => {
                      j(),
                        (0, l.EW)(N, {
                          forceTrack: !0,
                          dismissAction: I.L.PRIMARY,
                          guildId: n,
                        }),
                        (0, x.dx)({
                          guildId: n,
                          entrypoint: {
                            name: m.n3.APPLICATION_DIRECTORY_UPSELL_MODAL,
                          },
                        });
                    },
                    children: _.intl.string(_.t["5e8Mrq"]),
                  }),
                  (0, e.jsx)(a.Button, {
                    look: a.Button.Looks.LINK,
                    onClick: () => {
                      j(),
                        (0, l.EW)(N, {
                          forceTrack: !0,
                          dismissAction: I.L.SECONDARY,
                          guildId: n,
                        });
                    },
                    color: a.Button.Colors.PRIMARY,
                    children: _.intl.string(_.t.L5eIZ2),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    716218: function (t, n, o) {
      t.exports = {
        animation: "animation_d6730d",
        modalContent: "modalContent_d6730d",
        subheader: "subheader_d6730d",
        wandIcon: "wandIcon_d6730d icon_d6730d",
        robotIcon: "robotIcon_d6730d icon_d6730d",
        smileIcon: "smileIcon_d6730d icon_d6730d",
        listContainer: "listContainer_d6730d",
        listItem: "listItem_d6730d",
        modalFooter: "modalFooter_d6730d",
        divider: "divider_d6730d",
      };
    },
  },
]);
//# sourceMappingURL=c1f25b60ac9c4e63b1cc.js.map
