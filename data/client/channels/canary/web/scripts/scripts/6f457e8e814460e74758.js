"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77875"],
  {
    657300: function (t, o, n) {
      n.r(o),
        n.d(o, {
          default: function () {
            return C;
          },
        });
      var i = n(200651),
        e = n(192379),
        s = n(704215),
        a = n(481060),
        d = n(607070),
        l = n(605236),
        r = n(661824),
        c = n(626135),
        m = n(132871),
        x = n(147890),
        u = n(981631),
        I = n(921944),
        _ = n(388032),
        h = n(197689);
      function C(t) {
        let {
          guildId: o,
          transitionState: C,
          onClose: N,
          analyticsType: j = s.z.APP_DIRECTORY_UPSELL_MODAL,
        } = t;
        return (
          e.useEffect(() => {
            c.default.track(u.rMx.DISMISSIBLE_CONTENT_SHOWN, {
              type: s.z[j],
              guild_id: o,
            });
          }, [o, j]),
          (0, i.jsxs)(a.ModalRoot, {
            transitionState: C,
            className: h.__invalid_modal,
            size: a.ModalSize.SMALL,
            children: [
              (0, i.jsxs)(a.ModalContent, {
                className: h.modalContent,
                children: [
                  (0, i.jsx)(a.LottieAnimation, {
                    autoplay: !0,
                    shouldAnimate: !d.Z.useReducedMotion,
                    importData: () =>
                      n.e("76241").then(n.t.bind(n, 554690, 19)),
                    className: h.animation,
                  }),
                  (0, i.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    children: _.intl.string(_.t["2tv5YG"]),
                  }),
                  (0, i.jsx)(a.Text, {
                    variant: "text-md/medium",
                    className: h.subheader,
                    color: "text-muted",
                    children: _.intl.string(_.t.pgwlDw),
                  }),
                  (0, i.jsxs)("ul", {
                    className: h.listContainer,
                    children: [
                      (0, i.jsxs)("li", {
                        className: h.listItem,
                        children: [
                          (0, i.jsx)(a.MagicWandIcon, {
                            color: "currentColor",
                            className: h.wandIcon,
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: _.intl.string(_.t["0vKo5O"]),
                          }),
                        ],
                      }),
                      (0, i.jsx)(r.Z, { className: h.divider }),
                      (0, i.jsxs)("li", {
                        className: h.listItem,
                        children: [
                          (0, i.jsx)(a.RobotIcon, {
                            color: "currentColor",
                            className: h.robotIcon,
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: _.intl.string(_.t.CprEDA),
                          }),
                        ],
                      }),
                      (0, i.jsx)(r.Z, { className: h.divider }),
                      (0, i.jsxs)("li", {
                        className: h.listItem,
                        children: [
                          (0, i.jsx)(a.ReactionIcon, {
                            color: "currentColor",
                            className: h.smileIcon,
                          }),
                          (0, i.jsx)(a.Text, {
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
              (0, i.jsxs)(a.ModalFooter, {
                className: h.modalFooter,
                children: [
                  (0, i.jsx)(a.Button, {
                    onClick: () => {
                      N(),
                        (0, l.EW)(j, {
                          forceTrack: !0,
                          dismissAction: I.L.PRIMARY,
                          guildId: o,
                        }),
                        (0, x.goToAppDirectory)({
                          guildId: o,
                          entrypoint: {
                            name: m.ApplicationDirectoryEntrypointNames
                              .APPLICATION_DIRECTORY_UPSELL_MODAL,
                          },
                        });
                    },
                    children: _.intl.string(_.t["5e8Mrq"]),
                  }),
                  (0, i.jsx)(a.Button, {
                    look: a.Button.Looks.LINK,
                    onClick: () => {
                      N(),
                        (0, l.EW)(j, {
                          forceTrack: !0,
                          dismissAction: I.L.SECONDARY,
                          guildId: o,
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
    197689: function (t, o, n) {
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
//# sourceMappingURL=6f457e8e814460e74758.js.map
