"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85505"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    232837: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        });
      var s = t(200651);
      t(192379);
      var a = t(990547),
        i = t(481060),
        r = t(287734),
        o = t(594174),
        l = t(626135),
        c = t(33194),
        d = t(807031),
        u = t(343544),
        _ = t(110223),
        m = t(981631),
        x = t(388032);
      function h(e) {
        let {
          channelId: n,
          blockedUserId: t,
          transitionState: h,
          onClose: N,
        } = e;
        if (!(0, d.KR)({ location: "warning_modal" })) return null;
        let f = o.default.getUser(t),
          p = [
            {
              icon: (0, s.jsx)(i.UserIcon, {}),
              text: x.intl.formatToPlainString(x.t.w0YvUl, {
                userName: null == f ? void 0 : f.username,
              }),
            },
            {
              icon: (0, s.jsx)(i.MicrophoneIcon, {}),
              text: x.intl.string(x.t["+4O9nZ"]),
            },
          ];
        return (0, s.jsx)(u.Z, {
          headerText: x.intl.string(x.t.LGnmpa),
          secondaryHeaderText: x.intl.string(x.t["1/gpFh"]),
          descriptionText: x.intl.string(x.t.K8YIgY),
          infoRows: p,
          onDismissAndStay: () => {
            N(),
              (0, c.g6)(n),
              l.default.track(
                m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: _.q.CLICK_TO_STAY,
                  channel_id: n,
                  blocked_user_ids: [t],
                  warning_surface: _.fz.POST_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            N(),
              r.default.disconnect(),
              l.default.track(
                m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: _.q.CLICK_TO_LEAVE,
                  channel_id: n,
                  blocked_user_ids: [t],
                  warning_surface: _.fz.POST_JOIN_MODAL,
                },
              );
          },
          leaveButtonText: x.intl.string(x.t["Y56/oK"]),
          stayButtonText: x.intl.string(x.t["Z+/hfX"]),
          transitionState: h,
          onClose: N,
          impression: {
            impressionName:
              a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: n,
              blocked_user_ids: [t],
              warning_surface: _.fz.POST_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var s = t(200651),
        a = t(192379),
        i = t(481060),
        r = t(511010),
        o = t(633930),
        l = t(444812);
      function c(e) {
        let {
          headerText: n,
          secondaryHeaderText: t,
          descriptionText: c,
          infoRows: d,
          onDismissAndStay: u,
          onDismissAndLeave: _,
          leaveButtonText: m,
          stayButtonText: x,
          transitionState: h,
          impression: N,
        } = e;
        return (0, s.jsxs)(i.ModalRoot, {
          transitionState: h,
          impression: N,
          children: [
            (0, s.jsx)("img", { alt: "", className: o.headerImage, src: l }),
            (0, s.jsxs)(i.ModalHeader, {
              separator: !1,
              className: o.header,
              children: [
                (0, s.jsxs)(i.Heading, {
                  variant: "heading-lg/bold",
                  className: o.title,
                  children: [
                    n,
                    null != t &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("br", {}), t],
                      }),
                  ],
                }),
                null != c &&
                  (0, s.jsx)(i.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: c,
                  }),
              ],
            }),
            (0, s.jsxs)(i.ModalContent, {
              className: o.content,
              children: [
                (0, s.jsx)("div", {
                  className: o.infoGroup,
                  children: d.map((e, n) =>
                    (0, s.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, s.jsxs)("div", {
                            className: o.infoRow,
                            children: [
                              e.icon,
                              (0, s.jsx)(i.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          n < d.length - 1 && (0, s.jsx)(r.Z, {}),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
                (0, s.jsxs)("div", {
                  className: o.buttonGroup,
                  children: [
                    (0, s.jsx)(i.Button, {
                      color: i.Button.Colors.PRIMARY,
                      onClick: u,
                      children: x,
                    }),
                    (0, s.jsx)(i.Button, {
                      color: i.Button.Colors.BRAND,
                      size: i.Button.Sizes.MEDIUM,
                      onClick: _,
                      className: o.leave,
                      children: m,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    633930: function (e, n, t) {
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
//# sourceMappingURL=fbe8328f065528be6457.js.map
