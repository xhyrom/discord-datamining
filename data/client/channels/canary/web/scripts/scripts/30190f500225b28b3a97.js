"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85505"],
  {
    444812: function (n) {
      n.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    232837: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return h;
          },
        });
      var i = t(200651);
      t(192379);
      var s = t(990547),
        r = t(481060),
        a = t(287734),
        o = t(594174),
        l = t(626135),
        c = t(33194),
        d = t(807031),
        u = t(343544),
        _ = t(110223),
        m = t(981631),
        x = t(388032);
      function h(n) {
        let {
          channelId: e,
          blockedUserId: t,
          transitionState: h,
          onClose: f,
        } = n;
        if (!(0, d.KR)({ location: "warning_modal" })) return null;
        let N = o.default.getUser(t),
          p = [
            {
              icon: (0, i.jsx)(r.UserIcon, {}),
              text: x.intl.formatToPlainString(x.t.w0YvUl, {
                userName: null == N ? void 0 : N.username,
              }),
            },
            {
              icon: (0, i.jsx)(r.MicrophoneIcon, {}),
              text: x.intl.string(x.t["+4O9nZ"]),
            },
          ];
        return (0, i.jsx)(u.Z, {
          headerText: x.intl.string(x.t.LGnmpa),
          secondaryHeaderText: x.intl.string(x.t["1/gpFh"]),
          descriptionText: x.intl.string(x.t.K8YIgY),
          infoRows: p,
          onDismissAndStay: () => {
            f(),
              (0, c.g6)(e),
              l.default.track(
                m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: _.q.CLICK_TO_STAY,
                  channel_id: e,
                  blocked_user_ids: [t],
                  warning_surface: _.fz.POST_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            f(),
              a.default.disconnect(),
              l.default.track(
                m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: _.q.CLICK_TO_LEAVE,
                  channel_id: e,
                  blocked_user_ids: [t],
                  warning_surface: _.fz.POST_JOIN_MODAL,
                },
              );
          },
          leaveButtonText: x.intl.string(x.t["Y56/oK"]),
          stayButtonText: x.intl.string(x.t["Z+/hfX"]),
          transitionState: h,
          onClose: f,
          impression: {
            impressionName:
              s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: e,
              blocked_user_ids: [t],
              warning_surface: _.fz.POST_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651),
        s = t(192379),
        r = t(481060),
        a = t(511010),
        o = t(126743),
        l = t(444812);
      function c(n) {
        let {
          headerText: e,
          secondaryHeaderText: t,
          descriptionText: c,
          infoRows: d,
          onDismissAndStay: u,
          onDismissAndLeave: _,
          leaveButtonText: m,
          stayButtonText: x,
          transitionState: h,
          impression: f,
        } = n;
        return (0, i.jsxs)(r.ModalRoot, {
          transitionState: h,
          impression: f,
          children: [
            (0, i.jsx)("img", { alt: "", className: o.headerImage, src: l }),
            (0, i.jsxs)(r.ModalHeader, {
              separator: !1,
              className: o.header,
              children: [
                (0, i.jsxs)(r.Heading, {
                  variant: "heading-lg/bold",
                  className: o.title,
                  children: [
                    e,
                    null != t &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("br", {}), t],
                      }),
                  ],
                }),
                null != c &&
                  (0, i.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: c,
                  }),
              ],
            }),
            (0, i.jsxs)(r.ModalContent, {
              className: o.content,
              children: [
                (0, i.jsx)("div", {
                  className: o.infoGroup,
                  children: d.map((n, e) =>
                    (0, i.jsxs)(
                      s.Fragment,
                      {
                        children: [
                          (0, i.jsxs)("div", {
                            className: o.infoRow,
                            children: [
                              n.icon,
                              (0, i.jsx)(r.Text, {
                                variant: "text-md/medium",
                                children: n.text,
                              }),
                            ],
                          }),
                          e < d.length - 1 && (0, i.jsx)(a.Z, {}),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, i.jsxs)("div", {
                  className: o.buttonGroup,
                  children: [
                    (0, i.jsx)(r.Button, {
                      type: "submit",
                      color: r.Button.Colors.BRAND,
                      size: r.Button.Sizes.MEDIUM,
                      onClick: _,
                      children: m,
                    }),
                    (0, i.jsx)(r.Button, {
                      color: r.Button.Colors.PRIMARY,
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
    126743: function (n, e, t) {
      n.exports = {
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
//# sourceMappingURL=30190f500225b28b3a97.js.map
