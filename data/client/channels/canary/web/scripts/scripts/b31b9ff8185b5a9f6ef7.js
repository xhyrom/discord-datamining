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
        _ = n(626135),
        i = n(33194),
        E = n(807031),
        c = n(343544),
        N = n(110223),
        d = n(981631),
        l = n(689938);
      function u(e) {
        let {
          channelId: s,
          blockedUserIds: n,
          transitionState: u,
          onClose: I,
          onJoin: C,
        } = e;
        if (!(0, E.KR)({ location: "warning_modal" })) return null;
        let A = n.size > 1,
          R = [
            {
              icon: A
                ? (0, t.jsx)(r.GroupIcon, {})
                : (0, t.jsx)(r.UserIcon, {}),
              text: A
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
        return (0, t.jsx)(c.Z, {
          headerText: A
            ? l.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL
            : l.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
          secondaryHeaderText:
            l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_MODAL,
          descriptionText:
            l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
          infoRows: R,
          onDismissAndStay: () => {
            C(),
              I(),
              (0, i.g6)(s),
              _.default.track(
                d.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: N.q.CLICK_TO_JOIN,
                  channel_id: s,
                  blocked_user_ids: Array.from(n),
                  warning_surface: N.fz.PRE_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            I(),
              _.default.track(
                d.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: N.q.CLICK_TO_LEAVE,
                  channel_id: s,
                  blocked_user_ids: Array.from(n),
                  warning_surface: N.fz.PRE_JOIN_MODAL,
                },
              );
          },
          leaveButtonText:
            l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DONT_JOIN,
          stayButtonText:
            l.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_ANYWAY,
          transitionState: u,
          onClose: I,
          impression: {
            impressionName:
              a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: s,
              blocked_user_ids: Array.from(n),
              warning_surface: N.fz.PRE_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return E;
        },
      });
      var t = n(200651),
        a = n(192379),
        r = n(481060),
        o = n(511010),
        _ = n(126743),
        i = n(444812);
      function E(e) {
        let {
          headerText: s,
          secondaryHeaderText: n,
          descriptionText: E,
          infoRows: c,
          onDismissAndStay: N,
          onDismissAndLeave: d,
          leaveButtonText: l,
          stayButtonText: u,
          transitionState: I,
          impression: C,
        } = e;
        return (0, t.jsxs)(r.ModalRoot, {
          transitionState: I,
          impression: C,
          children: [
            (0, t.jsx)("img", { alt: "", className: _.headerImage, src: i }),
            (0, t.jsxs)(r.ModalHeader, {
              separator: !1,
              className: _.header,
              children: [
                (0, t.jsxs)(r.Heading, {
                  variant: "heading-lg/bold",
                  className: _.title,
                  children: [
                    s,
                    null != n &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != E &&
                  (0, t.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: E,
                  }),
              ],
            }),
            (0, t.jsxs)(r.ModalContent, {
              className: _.content,
              children: [
                (0, t.jsx)("div", {
                  className: _.infoGroup,
                  children: c.map((e, s) =>
                    (0, t.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, t.jsxs)("div", {
                            className: _.infoRow,
                            children: [
                              e.icon,
                              (0, t.jsx)(r.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          s < c.length - 1 && (0, t.jsx)(o.Z, {}),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: _.buttonGroup,
                  children: [
                    (0, t.jsx)(r.Button, {
                      type: "submit",
                      color: r.Button.Colors.BRAND,
                      size: r.Button.Sizes.MEDIUM,
                      onClick: d,
                      children: l,
                    }),
                    (0, t.jsx)(r.Button, {
                      color: r.Button.Colors.PRIMARY,
                      onClick: N,
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
//# sourceMappingURL=b31b9ff8185b5a9f6ef7.js.map
