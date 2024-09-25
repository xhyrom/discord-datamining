"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84686"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    582019: function (e, s, n) {
      n.d(s, {
        Xd: function () {
          return h;
        },
        mv: function () {
          return x;
        },
      });
      var c = n(735250);
      n(470079);
      var t = n(442837),
        o = n(692547),
        a = n(481060),
        r = n(239091),
        i = n(584511),
        l = n(112831),
        d = n(51144),
        u = n(88751),
        _ = n(930180),
        I = n(689938),
        m = n(578814);
      let x = (e) => {
          let { channelId: s } = e,
            n = (0, _._d)(s);
          return 0 === n
            ? null
            : (0, c.jsxs)("div", {
                className: m.blockedNotice,
                children: [
                  (0, c.jsx)(a.DenyIcon, {
                    size: "lg",
                    className: m.__invalid_blockedIcon,
                    color: o.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, c.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children:
                      I.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format(
                        { number: n },
                      ),
                  }),
                  (0, c.jsx)(a.Clickable, {
                    className: m.blockedButton,
                    onClick: (e) => {
                      (0, r.vq)(
                        e,
                        (e) => (0, c.jsx)(E, { ...e, channelId: s }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: I.Z.Messages.VIEW_ALL,
                  }),
                ],
              });
        },
        h = (e) => {
          let { user: s, showStatus: n, speaker: o, channelId: r } = e,
            _ = (0, t.e7)([u.ZP], () => u.ZP.isModerator(s.id, r)),
            x = null;
          return (
            n &&
              (x = o
                ? I.Z.Messages.STAGE_SPEAKER
                : _
                  ? I.Z.Messages.STAGE_MODERATOR_TOOLTIP
                  : I.Z.Messages.STAGE_AUDIENCE),
            (0, c.jsxs)("div", {
              className: m.user,
              children: [
                (0, c.jsx)(
                  i.Z,
                  {
                    src: s.getAvatarURL(null, 32),
                    size: a.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: o
                      ? () =>
                          (0, c.jsx)(a.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: m.icon,
                          })
                      : null,
                  },
                  s.id,
                ),
                (0, c.jsxs)("div", {
                  className: m.userInfo,
                  children: [
                    (0, c.jsxs)("div", {
                      className: m.username,
                      children: [
                        (0, c.jsx)(l.Z, {
                          size: n ? l.Z.Sizes.SIZE_16 : l.Z.Sizes.SIZE_14,
                          children: d.ZP.getName(s),
                        }),
                        (0, c.jsx)(l.Z, {
                          size: n ? l.Z.Sizes.SIZE_16 : l.Z.Sizes.SIZE_14,
                          color: l.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(s.discriminator),
                        }),
                      ],
                    }),
                    (0, c.jsxs)("div", {
                      className: m.username,
                      children: [
                        (0, c.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: I.Z.Messages.BLOCKED,
                        }),
                        (0, c.jsxs)(a.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", x],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        E = (e) => {
          let { channelId: s } = e,
            n = (0, _.z)(s);
          return (0, c.jsx)(a.Scroller, {
            className: m.container,
            children: n.map((e) => {
              let { user: n } = e;
              return (0, c.jsx)(h, { user: n, channelId: s }, n.id);
            }),
          });
        };
    },
    939863: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return d;
        },
      });
      var c = n(735250);
      n(470079);
      var t = n(120356),
        o = n.n(t),
        a = n(689938),
        r = n(843117),
        i = n(296507),
        l = n(866402);
      function d(e) {
        let { className: s, children: n } = e;
        return (0, c.jsxs)("div", {
          className: o()(r.container, s),
          children: [
            (0, c.jsx)("img", {
              alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: l,
              className: o()(r.sparkleIcon, r.sparkleBottom),
            }),
            n,
            (0, c.jsx)("img", {
              alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: i,
              className: o()(r.sparkleIcon, r.sparkleTop),
            }),
          ],
        });
      }
    },
    665111: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return _;
          },
        });
      var c = n(735250);
      n(470079);
      var t = n(481060),
        o = n(313201),
        a = n(471253),
        r = n(930180),
        i = n(582019),
        l = n(939863),
        d = n(689938),
        u = n(851836);
      function _(e) {
        let { channel: s, transitionState: n, onClose: _, ...I } = e,
          m = (0, o.Dt)(),
          x = (0, r._d)(s.id),
          h = async () => {
            await (0, a.yi)(s), _();
          },
          E = async () => {
            await (0, a.RK)(s, !1), _();
          };
        return (0, c.jsx)(t.ModalRoot, {
          transitionState: n,
          "aria-labelledby": m,
          ...I,
          size: t.ModalSize.SMALL,
          children: (0, c.jsxs)(t.ModalContent, {
            className: u.content,
            children: [
              (0, c.jsx)(l.Z, {
                children: (0, c.jsx)("div", {
                  className: u.stageIconBackground,
                  children: (0, c.jsx)(t.StageIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 40,
                    height: 40,
                    className: u.stageIcon,
                  }),
                }),
              }),
              (0, c.jsx)(t.Heading, {
                id: m,
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: u.headerTitle,
                children: d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE,
              }),
              (0, c.jsx)(t.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                className: u.headerSubtitle,
                children: d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE,
              }),
              x > 0 && (0, c.jsx)(i.mv, { channelId: s.id }),
              (0, c.jsxs)("div", {
                className: u.buttonsContainer,
                children: [
                  (0, c.jsxs)(t.Button, {
                    color: t.Button.Colors.PRIMARY,
                    className: u.button,
                    innerClassName: u.innerButton,
                    onClick: E,
                    children: [
                      (0, c.jsx)("div", {
                        className: u.icon,
                        children: (0, c.jsx)(t.MicrophoneIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER,
                    ],
                  }),
                  (0, c.jsxs)(t.Button, {
                    color: t.Button.Colors.PRIMARY,
                    className: u.button,
                    innerClassName: u.innerButton,
                    onClick: h,
                    children: [
                      (0, c.jsx)("div", {
                        className: u.icon,
                        children: (0, c.jsx)(t.GroupIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE,
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    578814: function (e, s, n) {
      e.exports = {
        container: "container_cc6cdc",
        user: "user_cc6cdc",
        username: "username_cc6cdc",
        blockedNotice: "blockedNotice_cc6cdc",
        blockedButton: "blockedButton_cc6cdc",
        icon: "icon_cc6cdc",
        userInfo: "userInfo_cc6cdc",
      };
    },
    843117: function (e, s, n) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
    851836: function (e, s, n) {
      e.exports = {
        content: "content_d26d60",
        stageIconBackground: "stageIconBackground_d26d60",
        stageIcon: "stageIcon_d26d60",
        headerTitle: "headerTitle_d26d60",
        headerSubtitle: "headerSubtitle_d26d60",
        buttonsContainer: "buttonsContainer_d26d60",
        button: "button_d26d60",
        innerButton: "innerButton_d26d60",
        icon: "icon_d26d60",
      };
    },
  },
]);
//# sourceMappingURL=841eb372f1cd4e2e0e59.js.map
