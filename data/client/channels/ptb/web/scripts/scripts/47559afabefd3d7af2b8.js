"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1906"],
  {
    582019: function (e, n, t) {
      t.d(n, {
        Xd: function () {
          return f;
        },
        mv: function () {
          return j;
        },
      });
      var r = t(200651);
      t(192379);
      var c = t(442837),
        s = t(692547),
        o = t(481060),
        i = t(239091),
        l = t(584511),
        a = t(112831),
        d = t(51144),
        u = t(88751),
        x = t(930180),
        m = t(388032),
        h = t(578814);
      let j = (e) => {
          let { channelId: n } = e,
            t = (0, x._d)(n);
          return 0 === t
            ? null
            : (0, r.jsxs)("div", {
                className: h.blockedNotice,
                children: [
                  (0, r.jsx)(o.DenyIcon, {
                    size: "lg",
                    className: h.__invalid_blockedIcon,
                    color: s.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: m.intl.format(m.t["6Tcdt7"], { number: t }),
                  }),
                  (0, r.jsx)(o.Clickable, {
                    className: h.blockedButton,
                    onClick: (e) => {
                      (0, i.vq)(
                        e,
                        (e) => (0, r.jsx)(_, { ...e, channelId: n }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: m.intl.string(m.t.rUEjBQ),
                  }),
                ],
              });
        },
        f = (e) => {
          let { user: n, showStatus: t, speaker: s, channelId: i } = e,
            x = (0, c.e7)([u.ZP], () => u.ZP.isModerator(n.id, i)),
            j = null;
          return (
            t &&
              (j = s
                ? m.intl.string(m.t.LqMmGx)
                : x
                  ? m.intl.string(m.t.GMZqSk)
                  : m.intl.string(m.t.suRAp6)),
            (0, r.jsxs)("div", {
              className: h.user,
              children: [
                (0, r.jsx)(
                  l.Z,
                  {
                    src: n.getAvatarURL(null, 32),
                    size: o.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: s
                      ? () =>
                          (0, r.jsx)(o.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: h.icon,
                          })
                      : null,
                  },
                  n.id,
                ),
                (0, r.jsxs)("div", {
                  className: h.userInfo,
                  children: [
                    (0, r.jsxs)("div", {
                      className: h.username,
                      children: [
                        (0, r.jsx)(a.Z, {
                          size: t ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                          children: d.ZP.getName(n),
                        }),
                        (0, r.jsx)(a.Z, {
                          size: t ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                          color: a.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(n.discriminator),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: h.username,
                      children: [
                        (0, r.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: m.intl.string(m.t["4bDptL"]),
                        }),
                        (0, r.jsxs)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", j],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        _ = (e) => {
          let { channelId: n } = e,
            t = (0, x.z)(n);
          return (0, r.jsx)(o.Scroller, {
            className: h.container,
            children: t.map((e) => {
              let { user: t } = e;
              return (0, r.jsx)(f, { user: t, channelId: n }, t.id);
            }),
          });
        };
    },
    854510: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var r = t(200651);
      t(192379);
      var c = t(481060),
        s = t(313201),
        o = t(930180),
        i = t(582019),
        l = t(388032),
        a = t(511387);
      function d(e) {
        let {
            channel: n,
            onAccept: t,
            transitionState: d,
            onClose: u,
            ...x
          } = e,
          m = (0, s.Dt)(),
          h = (0, o.z)(n.id);
        return (0, r.jsxs)(c.ModalRoot, {
          transitionState: d,
          "aria-labelledby": m,
          ...x,
          size: c.ModalSize.SMALL,
          children: [
            (0, r.jsxs)(c.ModalHeader, {
              className: a.header,
              children: [
                (0, r.jsx)(c.Heading, {
                  variant: "heading-xl/semibold",
                  children: l.intl.format(l.t.HviVAw, { number: h.length }),
                }),
                (0, r.jsx)(c.Text, {
                  color: "header-secondary",
                  className: a.description,
                  variant: "text-sm/normal",
                  children: l.intl.format(l.t["28qZMT"], { number: h.length }),
                }),
              ],
            }),
            (0, r.jsx)(c.ModalContent, {
              className: a.content,
              children: h.map((e) => {
                let { user: t, id: c, speaker: s } = e;
                return (0, r.jsx)(
                  i.Xd,
                  { user: t, speaker: s, showStatus: !0, channelId: n.id },
                  c,
                );
              }),
            }),
            (0, r.jsxs)(c.ModalFooter, {
              className: a.footer,
              children: [
                (0, r.jsx)(c.Button, {
                  onClick: () => {
                    t(n), u();
                  },
                  color: c.Button.Colors.BRAND,
                  children: l.intl.string(l.t.mbD50N),
                }),
                (0, r.jsx)(c.Button, {
                  onClick: () => {
                    u();
                  },
                  color: c.Button.Colors.PRIMARY,
                  look: c.Button.Looks.LINK,
                  children: l.intl.string(l.t.CZGqeX),
                }),
              ],
            }),
          ],
        });
      }
    },
    578814: function (e, n, t) {
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
    511387: function (e, n, t) {
      e.exports = {
        content: "content_c9f72d",
        header: "header_c9f72d",
        footer: "footer_c9f72d",
        description: "description_c9f72d",
      };
    },
  },
]);
//# sourceMappingURL=47559afabefd3d7af2b8.js.map
