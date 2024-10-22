"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85505"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    232837: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return C;
          },
        });
      var t = n(200651);
      n(192379);
      var a = n(990547),
        o = n(481060),
        i = n(287734),
        r = n(594174),
        _ = n(626135),
        c = n(33194),
        d = n(807031),
        l = n(343544),
        N = n(110223),
        u = n(981631),
        E = n(689938);
      function C(e) {
        let {
          channelId: s,
          blockedUserId: n,
          transitionState: C,
          onClose: m,
        } = e;
        if (!(0, d.w)({ location: "warning_modal" })) return null;
        let x = r.default.getUser(n),
          I = [
            {
              icon: (0, t.jsx)(o.UserIcon, {}),
              text: E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_PRESENCE.format(
                { userName: null == x ? void 0 : x.username },
              ),
            },
            {
              icon: (0, t.jsx)(o.MicrophoneIcon, {}),
              text: E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_AUDIBLE,
            },
          ];
        return (0, t.jsx)(l.Z, {
          headerText: E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_ALERT,
          descriptionText:
            E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
          infoRows: I,
          onDismissAndStay: () => {
            m(),
              (0, c.g6)(s),
              _.default.track(
                u.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: N.q.CLICK_TO_STAY,
                  channel_id: s,
                  blocked_user_ids: [n],
                  warning_surface: N.fz.POST_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            m(),
              i.default.disconnect(),
              _.default.track(
                u.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: N.q.CLICK_TO_LEAVE,
                  channel_id: s,
                  blocked_user_ids: [n],
                  warning_surface: N.fz.POST_JOIN_MODAL,
                },
              );
          },
          leaveButtonText:
            E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_LEAVE,
          stayButtonText: E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_STAY,
          transitionState: C,
          onClose: m,
          impression: {
            impressionName:
              a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: s,
              blocked_user_ids: [n],
              warning_surface: N.fz.POST_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return c;
        },
      });
      var t = n(200651),
        a = n(192379),
        o = n(481060),
        i = n(511010),
        r = n(126743),
        _ = n(444812);
      function c(e) {
        let {
          headerText: s,
          secondaryHeaderText: n,
          descriptionText: c,
          infoRows: d,
          onDismissAndStay: l,
          onDismissAndLeave: N,
          leaveButtonText: u,
          stayButtonText: E,
          transitionState: C,
          impression: m,
        } = e;
        return (0, t.jsxs)(o.ModalRoot, {
          transitionState: C,
          impression: m,
          children: [
            (0, t.jsx)("img", { alt: "", className: r.headerImage, src: _ }),
            (0, t.jsxs)(o.ModalHeader, {
              separator: !1,
              className: r.header,
              children: [
                (0, t.jsxs)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: r.title,
                  children: [
                    s,
                    null != n &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != c &&
                  (0, t.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: c,
                  }),
              ],
            }),
            (0, t.jsxs)(o.ModalContent, {
              className: r.content,
              children: [
                (0, t.jsx)("div", {
                  className: r.infoGroup,
                  children: d.map((e, s) =>
                    (0, t.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, t.jsxs)("div", {
                            className: r.infoRow,
                            children: [
                              e.icon,
                              (0, t.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          s < d.length - 1 && (0, t.jsx)(i.Z, {}),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: r.buttonGroup,
                  children: [
                    (0, t.jsx)(o.Button, {
                      type: "submit",
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: N,
                      children: u,
                    }),
                    (0, t.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: l,
                      children: E,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    126743: function (e, s, n) {
      e.exports = {
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
//# sourceMappingURL=19462f8d4f8755ad8710.js.map
