"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77875"],
  {
    657300: function (e, o, s) {
      s.r(o),
        s.d(o, {
          default: function () {
            return A;
          },
        });
      var t = s(735250),
        n = s(470079),
        a = s(704215),
        i = s(481060),
        d = s(607070),
        l = s(605236),
        r = s(661824),
        c = s(626135),
        m = s(132871),
        _ = s(147890),
        I = s(981631),
        x = s(921944),
        u = s(689938),
        P = s(716012);
      function A(e) {
        let {
          guildId: o,
          transitionState: A,
          onClose: C,
          analyticsType: N = a.z.APP_DIRECTORY_UPSELL_MODAL,
        } = e;
        return (
          n.useEffect(() => {
            c.default.track(I.rMx.DISMISSIBLE_CONTENT_SHOWN, {
              type: a.z[N],
              guild_id: o,
            });
          }, [o, N]),
          (0, t.jsxs)(i.ModalRoot, {
            transitionState: A,
            className: P.__invalid_modal,
            size: i.ModalSize.SMALL,
            children: [
              (0, t.jsxs)(i.ModalContent, {
                className: P.modalContent,
                children: [
                  (0, t.jsx)(i.LottieAnimation, {
                    autoplay: !0,
                    shouldAnimate: !d.Z.useReducedMotion,
                    importData: () =>
                      s.e("76241").then(s.t.bind(s, 554690, 19)),
                    className: P.animation,
                  }),
                  (0, t.jsx)(i.Heading, {
                    variant: "heading-xl/semibold",
                    children: u.Z.Messages.APP_DIRECTORY_IPP_HEADER,
                  }),
                  (0, t.jsx)(i.Text, {
                    variant: "text-md/medium",
                    className: P.subheader,
                    color: "text-muted",
                    children: u.Z.Messages.APP_DIRECTORY_IPP_SECONDARY_HEADER,
                  }),
                  (0, t.jsxs)("ul", {
                    className: P.listContainer,
                    children: [
                      (0, t.jsxs)("li", {
                        className: P.listItem,
                        children: [
                          (0, t.jsx)(i.MagicWandIcon, {
                            color: "currentColor",
                            className: P.wandIcon,
                          }),
                          (0, t.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children:
                              u.Z.Messages.APP_DIRECTORY_IPP_CUSTOMIZATION,
                          }),
                        ],
                      }),
                      (0, t.jsx)(r.Z, { className: P.divider }),
                      (0, t.jsxs)("li", {
                        className: P.listItem,
                        children: [
                          (0, t.jsx)(i.RobotIcon, {
                            color: "currentColor",
                            className: P.robotIcon,
                          }),
                          (0, t.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: u.Z.Messages.APP_DIRECTORY_IPP_AUTOMATION,
                          }),
                        ],
                      }),
                      (0, t.jsx)(r.Z, { className: P.divider }),
                      (0, t.jsxs)("li", {
                        className: P.listItem,
                        children: [
                          (0, t.jsx)(i.ReactionIcon, {
                            color: "currentColor",
                            className: P.smileIcon,
                          }),
                          (0, t.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: u.Z.Messages.APP_DIRECTORY_IPP_FUN,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)(i.ModalFooter, {
                className: P.modalFooter,
                children: [
                  (0, t.jsx)(i.Button, {
                    onClick: () => {
                      C(),
                        (0, l.EW)(N, {
                          forceTrack: !0,
                          dismissAction: x.L.PRIMARY,
                          guildId: o,
                        }),
                        (0, _.goToAppDirectory)({
                          guildId: o,
                          entrypoint: {
                            name: m.ApplicationDirectoryEntrypointNames
                              .APPLICATION_DIRECTORY_UPSELL_MODAL,
                          },
                        });
                    },
                    children: u.Z.Messages.GUILD_EVENT_UPSELL_PRIMARY_CTA,
                  }),
                  (0, t.jsx)(i.Button, {
                    look: i.Button.Looks.LINK,
                    onClick: () => {
                      C(),
                        (0, l.EW)(N, {
                          forceTrack: !0,
                          dismissAction: x.L.SECONDARY,
                          guildId: o,
                        });
                    },
                    color: i.Button.Colors.PRIMARY,
                    children: u.Z.Messages.NOT_NOW,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    716012: function (e, o, s) {
      e.exports = {
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
//# sourceMappingURL=6b70798112611b2dc7d7.js.map
