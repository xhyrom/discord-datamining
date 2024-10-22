"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12858"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    404339: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return u;
          },
        }),
        n(47120);
      var t = n(200651);
      n(192379);
      var a = n(990547),
        r = n(481060),
        o = n(594174),
        i = n(626135),
        _ = n(33194),
        c = n(807031),
        N = n(343544),
        d = n(110223),
        E = n(981631),
        l = n(689938);
      function u(e) {
        let {
          channelId: s,
          blockedUserIds: n,
          transitionState: u,
          onClose: C,
          onJoin: I,
        } = e;
        if (!(0, c.KR)({ location: "warning_modal" })) return null;
        let m = n.size > 1,
          x = [
            {
              icon: m
                ? (0, t.jsx)(r.GroupIcon, {})
                : (0, t.jsx)(r.UserIcon, {}),
              text: m
                ? l.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format(
                    { blockedUserCount: n.size },
                  )
                : l.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({
                    userName: o.default.getUser([...n][0]),
                  }),
            },
            {
              icon: (0, t.jsx)(r.MicrophoneIcon, {}),
              text: l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WILL_BEAUDIBLE,
            },
          ];
        return (0, t.jsx)(N.Z, {
          headerText: l.Z.Messages.VOICE_PANEL_BLOCKED_PEOPLE_WARNING.format({
            n: n.size,
          }),
          secondaryHeaderText:
            l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_MODAL,
          descriptionText:
            l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
          infoRows: x,
          onDismissAndStay: () => {
            I(),
              C(),
              (0, _.g6)(s),
              i.default.track(
                E.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: d.q.CLICK_TO_JOIN,
                  channel_id: s,
                  blocked_user_ids: Array.from(n),
                  warning_surface: d.fz.PRE_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            C(),
              i.default.track(
                E.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: d.q.CLICK_TO_LEAVE,
                  channel_id: s,
                  blocked_user_ids: Array.from(n),
                  warning_surface: d.fz.PRE_JOIN_MODAL,
                },
              );
          },
          leaveButtonText:
            l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DONT_JOIN,
          stayButtonText:
            l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_ANYWAY,
          transitionState: u,
          onClose: C,
          impression: {
            impressionName:
              a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: s,
              blocked_user_ids: Array.from(n),
              warning_surface: d.fz.PRE_JOIN_MODAL,
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
        r = n(481060),
        o = n(511010),
        i = n(126743),
        _ = n(444812);
      function c(e) {
        let {
          headerText: s,
          secondaryHeaderText: n,
          descriptionText: c,
          infoRows: N,
          onDismissAndStay: d,
          onDismissAndLeave: E,
          leaveButtonText: l,
          stayButtonText: u,
          transitionState: C,
          impression: I,
        } = e;
        return (0, t.jsxs)(r.ModalRoot, {
          transitionState: C,
          impression: I,
          children: [
            (0, t.jsx)("img", { alt: "", className: i.headerImage, src: _ }),
            (0, t.jsxs)(r.ModalHeader, {
              separator: !1,
              className: i.header,
              children: [
                (0, t.jsxs)(r.Heading, {
                  variant: "heading-lg/bold",
                  className: i.title,
                  children: [
                    s,
                    null != n &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != c &&
                  (0, t.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: c,
                  }),
              ],
            }),
            (0, t.jsxs)(r.ModalContent, {
              className: i.content,
              children: [
                (0, t.jsx)("div", {
                  className: i.infoGroup,
                  children: N.map((e, s) =>
                    (0, t.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, t.jsxs)("div", {
                            className: i.infoRow,
                            children: [
                              e.icon,
                              (0, t.jsx)(r.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          s < N.length - 1 && (0, t.jsx)(o.Z, {}),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: i.buttonGroup,
                  children: [
                    (0, t.jsx)(r.Button, {
                      type: "submit",
                      color: r.Button.Colors.BRAND,
                      size: r.Button.Sizes.MEDIUM,
                      onClick: E,
                      children: l,
                    }),
                    (0, t.jsx)(r.Button, {
                      color: r.Button.Colors.PRIMARY,
                      onClick: d,
                      children: u,
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
//# sourceMappingURL=7c020101c96ae2f83bc8.js.map
