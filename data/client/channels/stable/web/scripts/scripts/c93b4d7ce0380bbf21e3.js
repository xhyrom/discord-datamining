"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1906"],
  {
    582019: function (e, s, n) {
      n.d(s, {
        Xd: function () {
          return E;
        },
        mv: function () {
          return m;
        },
      });
      var c = n(735250);
      n(470079);
      var r = n(442837),
        o = n(692547),
        t = n(481060),
        a = n(239091),
        l = n(584511),
        i = n(112831),
        d = n(51144),
        u = n(88751),
        _ = n(930180),
        x = n(689938),
        h = n(578814);
      let m = (e) => {
          let { channelId: s } = e,
            n = (0, _._d)(s);
          return 0 === n
            ? null
            : (0, c.jsxs)("div", {
                className: h.blockedNotice,
                children: [
                  (0, c.jsx)(t.DenyIcon, {
                    size: "lg",
                    className: h.__invalid_blockedIcon,
                    color: o.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, c.jsx)(t.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children:
                      x.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format(
                        { number: n },
                      ),
                  }),
                  (0, c.jsx)(t.Clickable, {
                    className: h.blockedButton,
                    onClick: (e) => {
                      (0, a.vq)(
                        e,
                        (e) => (0, c.jsx)(S, { ...e, channelId: s }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: x.Z.Messages.VIEW_ALL,
                  }),
                ],
              });
        },
        E = (e) => {
          let { user: s, showStatus: n, speaker: o, channelId: a } = e,
            _ = (0, r.e7)([u.ZP], () => u.ZP.isModerator(s.id, a)),
            m = null;
          return (
            n &&
              (m = o
                ? x.Z.Messages.STAGE_SPEAKER
                : _
                  ? x.Z.Messages.STAGE_MODERATOR_TOOLTIP
                  : x.Z.Messages.STAGE_AUDIENCE),
            (0, c.jsxs)("div", {
              className: h.user,
              children: [
                (0, c.jsx)(
                  l.Z,
                  {
                    src: s.getAvatarURL(null, 32),
                    size: t.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: o
                      ? () =>
                          (0, c.jsx)(t.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: h.icon,
                          })
                      : null,
                  },
                  s.id,
                ),
                (0, c.jsxs)("div", {
                  className: h.userInfo,
                  children: [
                    (0, c.jsxs)("div", {
                      className: h.username,
                      children: [
                        (0, c.jsx)(i.Z, {
                          size: n ? i.Z.Sizes.SIZE_16 : i.Z.Sizes.SIZE_14,
                          children: d.ZP.getName(s),
                        }),
                        (0, c.jsx)(i.Z, {
                          size: n ? i.Z.Sizes.SIZE_16 : i.Z.Sizes.SIZE_14,
                          color: i.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(s.discriminator),
                        }),
                      ],
                    }),
                    (0, c.jsxs)("div", {
                      className: h.username,
                      children: [
                        (0, c.jsx)(t.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: x.Z.Messages.BLOCKED,
                        }),
                        (0, c.jsxs)(t.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", m],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        S = (e) => {
          let { channelId: s } = e,
            n = (0, _.z)(s);
          return (0, c.jsx)(t.Scroller, {
            className: h.container,
            children: n.map((e) => {
              let { user: n } = e;
              return (0, c.jsx)(E, { user: n, channelId: s }, n.id);
            }),
          });
        };
    },
    854510: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return d;
          },
        });
      var c = n(735250);
      n(470079);
      var r = n(481060),
        o = n(313201),
        t = n(930180),
        a = n(582019),
        l = n(689938),
        i = n(511387);
      function d(e) {
        let {
            channel: s,
            onAccept: n,
            transitionState: d,
            onClose: u,
            ..._
          } = e,
          x = (0, o.Dt)(),
          h = (0, t.z)(s.id);
        return (0, c.jsxs)(r.ModalRoot, {
          transitionState: d,
          "aria-labelledby": x,
          ..._,
          size: r.ModalSize.SMALL,
          children: [
            (0, c.jsxs)(r.ModalHeader, {
              className: i.header,
              children: [
                (0, c.jsx)(r.Heading, {
                  variant: "heading-xl/semibold",
                  children:
                    l.Z.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
                      number: h.length,
                    }),
                }),
                (0, c.jsx)(r.Text, {
                  color: "header-secondary",
                  className: i.description,
                  variant: "text-sm/normal",
                  children: l.Z.Messages.STAGE_BLOCKED_USERS_BODY.format({
                    number: h.length,
                  }),
                }),
              ],
            }),
            (0, c.jsx)(r.ModalContent, {
              className: i.content,
              children: h.map((e) => {
                let { user: n, id: r, speaker: o } = e;
                return (0, c.jsx)(
                  a.Xd,
                  { user: n, speaker: o, showStatus: !0, channelId: s.id },
                  r,
                );
              }),
            }),
            (0, c.jsxs)(r.ModalFooter, {
              className: i.footer,
              children: [
                (0, c.jsx)(r.Button, {
                  onClick: () => {
                    n(s), u();
                  },
                  color: r.Button.Colors.BRAND,
                  children: l.Z.Messages.STAGE_BLOCKED_USERS_ACCEPT,
                }),
                (0, c.jsx)(r.Button, {
                  onClick: () => {
                    u();
                  },
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  children: l.Z.Messages.STAGE_BLOCKED_USERS_CANCEL,
                }),
              ],
            }),
          ],
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
    511387: function (e, s, n) {
      e.exports = {
        content: "content_c9f72d",
        header: "header_c9f72d",
        footer: "footer_c9f72d",
        description: "description_c9f72d",
      };
    },
  },
]);
//# sourceMappingURL=c93b4d7ce0380bbf21e3.js.map
