"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12858"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    404339: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return x;
          },
        }),
        t(47120);
      var r = t(200651);
      t(192379);
      var i = t(990547),
        s = t(481060),
        a = t(594174),
        o = t(626135),
        l = t(33194),
        c = t(807031),
        d = t(343544),
        u = t(110223),
        _ = t(981631),
        m = t(388032);
      function x(e) {
        let {
          channelId: n,
          blockedUserIds: t,
          transitionState: x,
          onClose: N,
          onJoin: f,
        } = e;
        if (!(0, c.KR)({ location: "warning_modal" })) return null;
        let h = t.size > 1,
          g = [
            {
              icon: h
                ? (0, r.jsx)(s.GroupIcon, {})
                : (0, r.jsx)(s.UserIcon, {}),
              text: h
                ? m.intl.formatToPlainString(m.t.Zqlt5e, {
                    blockedUserCount: t.size,
                  })
                : m.intl.formatToPlainString(m.t.V0aCFx, {
                    userName: a.default.getUser([...t][0]),
                  }),
            },
            {
              icon: (0, r.jsx)(s.MicrophoneIcon, {}),
              text: m.intl.string(m.t["7jN3FB"]),
            },
          ];
        return (0, r.jsx)(d.Z, {
          headerText: h ? m.intl.string(m.t.aJRlSU) : m.intl.string(m.t.rlBMub),
          secondaryHeaderText: m.intl.string(m.t.zPUmzc),
          descriptionText: m.intl.string(m.t.K8YIgY),
          infoRows: g,
          onDismissAndStay: () => {
            f(),
              N(),
              (0, l.g6)(n),
              o.default.track(
                _.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: u.q.CLICK_TO_JOIN,
                  channel_id: n,
                  blocked_user_ids: Array.from(t),
                  warning_surface: u.fz.PRE_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            N(),
              o.default.track(
                _.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: u.q.CLICK_TO_LEAVE,
                  channel_id: n,
                  blocked_user_ids: Array.from(t),
                  warning_surface: u.fz.PRE_JOIN_MODAL,
                },
              );
          },
          leaveButtonText: m.intl.string(m.t.Trz9Ji),
          stayButtonText: m.intl.string(m.t.kiODyM),
          transitionState: x,
          onClose: N,
          impression: {
            impressionName:
              i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: n,
              blocked_user_ids: Array.from(t),
              warning_surface: u.fz.PRE_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(200651),
        i = t(192379),
        s = t(120356),
        a = t.n(s),
        o = t(481060),
        l = t(511010),
        c = t(126743),
        d = t(444812);
      function u(e) {
        let {
          headerText: n,
          secondaryHeaderText: t,
          descriptionText: s,
          infoRows: u,
          onDismissAndStay: _,
          onDismissAndLeave: m,
          leaveButtonText: x,
          stayButtonText: N,
          transitionState: f,
          impression: h,
        } = e;
        return (0, r.jsxs)(o.ModalRoot, {
          transitionState: f,
          impression: h,
          children: [
            (0, r.jsx)("img", { alt: "", className: c.headerImage, src: d }),
            (0, r.jsxs)(o.ModalHeader, {
              separator: !1,
              className: c.header,
              children: [
                (0, r.jsxs)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: c.title,
                  children: [
                    n,
                    null != t &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("br", {}), t],
                      }),
                  ],
                }),
                null != s &&
                  (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: s,
                  }),
              ],
            }),
            (0, r.jsxs)(o.ModalContent, {
              className: c.content,
              children: [
                (0, r.jsx)("div", {
                  className: c.infoGroup,
                  children: u.map((e, n) =>
                    (0, r.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          (0, r.jsxs)("div", {
                            className: a()(c.infoRow, e.className),
                            children: [
                              e.icon,
                              (0, r.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          n < u.length - 1 && (0, r.jsx)(l.Z, {}),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
                (0, r.jsxs)("div", {
                  className: c.buttonGroup,
                  children: [
                    (0, r.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: _,
                      children: N,
                    }),
                    (0, r.jsx)(o.Button, {
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: m,
                      className: c.leave,
                      children: x,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    126743: function (e, n, t) {
      e.exports = {
        header: "header_a70452",
        headerImage: "headerImage_a70452",
        title: "title_a70452",
        content: "content_a70452",
        buttonGroup: "buttonGroup_a70452",
        leave: "leave_a70452",
        infoGroup: "infoGroup_a70452",
        infoRow: "infoRow_a70452",
      };
    },
  },
]);
//# sourceMappingURL=917e41f3d6b6c04155bd.js.map
