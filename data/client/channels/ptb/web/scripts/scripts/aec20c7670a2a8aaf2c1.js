"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1906"],
  {
    46920: function (e, n, t) {
      t.d(n, {
        Ie: function () {
          return g;
        },
        mv: function () {
          return k;
        },
      }),
        t(47120);
      var r = t(200651);
      t(192379);
      var s = t(442837),
        o = t(692547),
        c = t(481060),
        l = t(239091),
        i = t(584511),
        a = t(118012),
        d = t(922611),
        u = t(699516),
        x = t(51144),
        m = t(88751),
        h = t(930180),
        j = t(388032),
        b = t(834110);
      let k = (e) => {
          let { channelId: n } = e,
            t = (0, h._d)(n);
          return (0, d.Do)({ location: "blocked-users-notice" })
            ? (0, r.jsx)(f, { channelId: n })
            : 0 === t
              ? null
              : (0, r.jsxs)("div", {
                  className: b.blockedNotice,
                  children: [
                    (0, r.jsx)(c.DenyIcon, {
                      size: "lg",
                      className: b.__invalid_blockedIcon,
                      color: o.Z.unsafe_rawColors.RED_400.css,
                    }),
                    (0, r.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: j.intl.format(j.t["6Tcdt7"], { number: t }),
                    }),
                    (0, r.jsx)(c.Clickable, {
                      className: b.blockedButton,
                      onClick: (e) => {
                        (0, l.vq)(
                          e,
                          (e) => (0, r.jsx)(N, { ...e, channelId: n }),
                          { position: "left", align: "bottom" },
                        );
                      },
                      children: j.intl.string(j.t.rUEjBQ),
                    }),
                  ],
                });
        },
        f = (e) => {
          let { channelId: n } = e,
            t = (0, h._d)(n),
            s = (0, h.K3)(n);
          if (0 === t && 0 === s) return null;
          let i = (e) => {
            (0, l.vq)(e, (e) => (0, r.jsx)(N, { ...e, channelId: n }), {
              position: "left",
              align: "bottom",
            });
          };
          return t > 0 && s > 0
            ? (0, r.jsxs)("div", {
                className: b.blockedNotice,
                children: [
                  (0, r.jsx)(c.DenyIcon, {
                    size: "lg",
                    color: o.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, r.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: j.intl.string(j.t["P/KFX1"]),
                  }),
                  (0, r.jsx)(c.Clickable, {
                    className: b.blockedButton,
                    onClick: i,
                    children: j.intl.string(j.t.rUEjBQ),
                  }),
                ],
              })
            : s > 0
              ? (0, r.jsxs)("div", {
                  className: b.blockedNotice,
                  children: [
                    (0, r.jsx)(c.EyeSlashIcon, { size: "lg" }),
                    (0, r.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: j.intl.format(j.t.Ri3o39, { number: s }),
                    }),
                    (0, r.jsx)(c.Clickable, {
                      className: b.blockedButton,
                      onClick: i,
                      children: j.intl.string(j.t.rUEjBQ),
                    }),
                  ],
                })
              : (0, r.jsxs)("div", {
                  className: b.blockedNotice,
                  children: [
                    (0, r.jsx)(c.DenyIcon, {
                      size: "lg",
                      color: o.Z.unsafe_rawColors.RED_400.css,
                    }),
                    (0, r.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: j.intl.format(j.t["6Tcdt7"], { number: t }),
                    }),
                    (0, r.jsx)(c.Clickable, {
                      className: b.blockedButton,
                      onClick: i,
                      children: j.intl.string(j.t.rUEjBQ),
                    }),
                  ],
                });
        },
        g = (e) => {
          let { user: n, showStatus: t, speaker: o, channelId: l } = e,
            d = (0, s.e7)([m.ZP], () => m.ZP.isModerator(n.id, l)),
            h = (0, s.e7)([u.Z], () => u.Z.isBlocked(n.id)),
            k = null;
          return (
            t &&
              (k = o
                ? j.intl.string(j.t.LqMmGx)
                : d
                  ? j.intl.string(j.t.GMZqSk)
                  : j.intl.string(j.t.suRAp6)),
            (0, r.jsxs)("div", {
              className: b.user,
              children: [
                (0, r.jsx)(
                  i.Z,
                  {
                    src: n.getAvatarURL(null, 32),
                    size: c.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: o
                      ? () =>
                          (0, r.jsx)(c.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: b.icon,
                          })
                      : null,
                  },
                  n.id,
                ),
                (0, r.jsxs)("div", {
                  className: b.userInfo,
                  children: [
                    (0, r.jsxs)("div", {
                      className: b.username,
                      children: [
                        (0, r.jsx)(a.Z, {
                          size: t ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                          children: x.ZP.getName(n),
                        }),
                        (0, r.jsx)(a.Z, {
                          size: t ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                          color: a.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(n.discriminator),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: b.username,
                      children: [
                        (0, r.jsx)(c.Text, {
                          variant: "text-xs/normal",
                          color: h ? "text-danger" : "text-normal",
                          children: h
                            ? j.intl.string(j.t["4bDptL"])
                            : j.intl.string(j.t.tFY5ZW),
                        }),
                        (0, r.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: ["| ", k],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        N = (e) => {
          let { channelId: n } = e,
            t = (0, h.z)(n),
            s = (0, h.bA)(n);
          return (0, r.jsx)(c.Scroller, {
            className: b.container,
            children: [...t, ...s].map((e) => {
              let { user: t } = e;
              return (0, r.jsx)(g, { user: t, channelId: n }, t.id);
            }),
          });
        };
    },
    854510: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return x;
          },
        }),
        t(47120);
      var r = t(200651);
      t(192379);
      var s = t(481060),
        o = t(313201),
        c = t(930180),
        l = t(46920),
        i = t(388032),
        a = t(48);
      function d(e) {
        let { blockedUsersCount: n, ignoredUsersCount: t } = e;
        return n > 0 && t > 0
          ? i.intl.format(i.t.Uzdyho, { number: n + t })
          : t > 0
            ? i.intl.format(i.t.wvygk5, { number: t })
            : i.intl.format(i.t.HviVAw, { number: n });
      }
      function u(e) {
        let { blockedUsersCount: n, ignoredUsersCount: t } = e;
        return n > 0 && t > 0
          ? i.intl.string(i.t["P/KFX1"])
          : t > 0
            ? i.intl.format(i.t.Ri3o39, { number: t })
            : i.intl.format(i.t["28qZMT"], { number: n });
      }
      function x(e) {
        let {
            channel: n,
            onAccept: t,
            transitionState: x,
            onClose: m,
            ...h
          } = e,
          j = (0, o.Dt)(),
          b = (0, c.z)(n.id),
          k = (0, c.bA)(n.id);
        return (0, r.jsxs)(s.ModalRoot, {
          transitionState: x,
          "aria-labelledby": j,
          ...h,
          size: s.ModalSize.SMALL,
          children: [
            (0, r.jsxs)(s.ModalHeader, {
              className: a.header,
              children: [
                (0, r.jsx)(s.Heading, {
                  variant: "heading-xl/semibold",
                  children: (0, r.jsx)(d, {
                    blockedUsersCount: b.length,
                    ignoredUsersCount: k.length,
                  }),
                }),
                (0, r.jsx)(s.Text, {
                  color: "header-secondary",
                  className: a.description,
                  variant: "text-sm/normal",
                  children: (0, r.jsx)(u, {
                    blockedUsersCount: b.length,
                    ignoredUsersCount: k.length,
                  }),
                }),
              ],
            }),
            (0, r.jsx)(s.ModalContent, {
              className: a.content,
              children: [...b, ...k].map((e) => {
                let { user: t, id: s, speaker: o } = e;
                return (0, r.jsx)(
                  l.Ie,
                  { user: t, speaker: o, showStatus: !0, channelId: n.id },
                  s,
                );
              }),
            }),
            (0, r.jsxs)(s.ModalFooter, {
              className: a.footer,
              children: [
                (0, r.jsx)(s.Button, {
                  onClick: () => {
                    t(n), m();
                  },
                  color: s.Button.Colors.BRAND,
                  children: i.intl.string(i.t.mbD50N),
                }),
                (0, r.jsx)(s.Button, {
                  onClick: () => {
                    m();
                  },
                  color: s.Button.Colors.PRIMARY,
                  look: s.Button.Looks.LINK,
                  children: i.intl.string(i.t.CZGqeX),
                }),
              ],
            }),
          ],
        });
      }
    },
    834110: function (e, n, t) {
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
    48: function (e, n, t) {
      e.exports = {
        content: "content_c9f72d",
        header: "header_c9f72d",
        footer: "footer_c9f72d",
        description: "description_c9f72d",
      };
    },
  },
]);
//# sourceMappingURL=aec20c7670a2a8aaf2c1.js.map
