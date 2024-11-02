"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12858"],
  {
    444812: function (t) {
      t.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    404339: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return x;
          },
        }),
        e(47120);
      var r = e(200651);
      e(192379);
      var i = e(990547),
        s = e(481060),
        a = e(594174),
        o = e(626135),
        l = e(33194),
        c = e(807031),
        d = e(343544),
        u = e(110223),
        _ = e(981631),
        m = e(388032);
      function x(t) {
        let {
          channelId: n,
          blockedUserIds: e,
          transitionState: x,
          onClose: f,
          onJoin: h,
        } = t;
        if (!(0, c.KR)({ location: "warning_modal" })) return null;
        let N = e.size > 1,
          g = [
            {
              icon: N
                ? (0, r.jsx)(s.GroupIcon, {})
                : (0, r.jsx)(s.UserIcon, {}),
              text: N
                ? m.intl.formatToPlainString(m.t.Zqlt5e, {
                    blockedUserCount: e.size,
                  })
                : m.intl.formatToPlainString(m.t.V0aCFx, {
                    userName: a.default.getUser([...e][0]),
                  }),
            },
            {
              icon: (0, r.jsx)(s.MicrophoneIcon, {}),
              text: m.intl.string(m.t["7jN3FB"]),
            },
          ];
        return (0, r.jsx)(d.Z, {
          headerText: N ? m.intl.string(m.t.aJRlSU) : m.intl.string(m.t.rlBMub),
          secondaryHeaderText: m.intl.string(m.t.zPUmzc),
          descriptionText: m.intl.string(m.t.K8YIgY),
          infoRows: g,
          onDismissAndStay: () => {
            h(),
              f(),
              (0, l.g6)(n),
              o.default.track(
                _.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: u.q.CLICK_TO_JOIN,
                  channel_id: n,
                  blocked_user_ids: Array.from(e),
                  warning_surface: u.fz.PRE_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            f(),
              o.default.track(
                _.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: u.q.CLICK_TO_LEAVE,
                  channel_id: n,
                  blocked_user_ids: Array.from(e),
                  warning_surface: u.fz.PRE_JOIN_MODAL,
                },
              );
          },
          leaveButtonText: m.intl.string(m.t.Trz9Ji),
          stayButtonText: m.intl.string(m.t.kiODyM),
          transitionState: x,
          onClose: f,
          impression: {
            impressionName:
              i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: n,
              blocked_user_ids: Array.from(e),
              warning_surface: u.fz.PRE_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = e(200651),
        i = e(192379),
        s = e(481060),
        a = e(511010),
        o = e(126743),
        l = e(444812);
      function c(t) {
        let {
          headerText: n,
          secondaryHeaderText: e,
          descriptionText: c,
          infoRows: d,
          onDismissAndStay: u,
          onDismissAndLeave: _,
          leaveButtonText: m,
          stayButtonText: x,
          transitionState: f,
          impression: h,
        } = t;
        return (0, r.jsxs)(s.ModalRoot, {
          transitionState: f,
          impression: h,
          children: [
            (0, r.jsx)("img", { alt: "", className: o.headerImage, src: l }),
            (0, r.jsxs)(s.ModalHeader, {
              separator: !1,
              className: o.header,
              children: [
                (0, r.jsxs)(s.Heading, {
                  variant: "heading-lg/bold",
                  className: o.title,
                  children: [
                    n,
                    null != e &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("br", {}), e],
                      }),
                  ],
                }),
                null != c &&
                  (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: c,
                  }),
              ],
            }),
            (0, r.jsxs)(s.ModalContent, {
              className: o.content,
              children: [
                (0, r.jsx)("div", {
                  className: o.infoGroup,
                  children: d.map((t, n) =>
                    (0, r.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          (0, r.jsxs)("div", {
                            className: o.infoRow,
                            children: [
                              t.icon,
                              (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: t.text,
                              }),
                            ],
                          }),
                          n < d.length - 1 && (0, r.jsx)(a.Z, {}),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
                (0, r.jsxs)("div", {
                  className: o.buttonGroup,
                  children: [
                    (0, r.jsx)(s.Button, {
                      type: "submit",
                      color: s.Button.Colors.BRAND,
                      size: s.Button.Sizes.MEDIUM,
                      onClick: _,
                      children: m,
                    }),
                    (0, r.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      onClick: u,
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
    126743: function (t, n, e) {
      t.exports = {
        header: "header_a70452",
        headerImage: "headerImage_a70452",
        title: "title_a70452",
        content: "content_a70452",
        buttonGroup: "buttonGroup_a70452",
        infoGroup: "infoGroup_a70452",
        infoRow: "infoRow_a70452",
      };
    },
  },
]);
//# sourceMappingURL=08dbad2a5e686a9f8ad2.js.map
