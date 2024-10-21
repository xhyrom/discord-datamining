"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12858"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    404339: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return l;
          },
        }),
        t(47120);
      var n = t(200651);
      t(192379);
      var a = t(481060),
        o = t(594174),
        r = t(33194),
        i = t(807031),
        c = t(343544),
        d = t(689938);
      function l(e) {
        let {
          channelId: s,
          blockedUserIds: t,
          transitionState: l,
          onClose: _,
          onJoin: u,
        } = e;
        if (!(0, i.w)({ location: "warning_modal" })) return null;
        let N = t.size > 1,
          E = [
            {
              icon: N
                ? (0, n.jsx)(a.GroupIcon, {})
                : (0, n.jsx)(a.UserIcon, {}),
              text: N
                ? d.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format(
                    { blockedUserCount: t.size },
                  )
                : d.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({
                    userName: o.default.getUser([...t][0]),
                  }),
            },
            {
              icon: (0, n.jsx)(a.MicrophoneIcon, {}),
              text: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WILL_BEAUDIBLE,
            },
          ];
        return (0, n.jsx)(c.Z, {
          headerText: d.Z.Messages.VOICE_PANEL_BLOCKED_PEOPLE_WARNING.format({
            n: t.size,
          }),
          secondaryHeaderText:
            d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_MODAL,
          descriptionText:
            d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
          infoRows: E,
          onDismissAndStay: () => {
            u(), _(), (0, r.g6)(s);
          },
          onDismissAndLeave: () => {
            _();
          },
          leaveButtonText:
            d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DONT_JOIN,
          stayButtonText:
            d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_ANYWAY,
          transitionState: l,
          onClose: _,
        });
      }
    },
    343544: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return d;
        },
      });
      var n = t(200651),
        a = t(192379),
        o = t(481060),
        r = t(511010),
        i = t(126743),
        c = t(444812);
      function d(e) {
        let {
          headerText: s,
          secondaryHeaderText: t,
          descriptionText: d,
          infoRows: l,
          onDismissAndStay: _,
          onDismissAndLeave: u,
          leaveButtonText: N,
          stayButtonText: E,
          transitionState: x,
        } = e;
        return (0, n.jsxs)(o.ModalRoot, {
          transitionState: x,
          children: [
            (0, n.jsx)("img", { alt: "", className: i.headerImage, src: c }),
            (0, n.jsxs)(o.ModalHeader, {
              separator: !1,
              className: i.header,
              children: [
                (0, n.jsxs)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: i.title,
                  children: [
                    s,
                    null != t &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("br", {}), t],
                      }),
                  ],
                }),
                null != d &&
                  (0, n.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: d,
                  }),
              ],
            }),
            (0, n.jsxs)(o.ModalContent, {
              className: i.content,
              children: [
                (0, n.jsx)("div", {
                  className: i.infoGroup,
                  children: l.map((e, s) =>
                    (0, n.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, n.jsxs)("div", {
                            className: i.infoRow,
                            children: [
                              e.icon,
                              (0, n.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          s < l.length - 1 && (0, n.jsx)(r.Z, {}),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
                (0, n.jsxs)("div", {
                  className: i.buttonGroup,
                  children: [
                    (0, n.jsx)(o.Button, {
                      type: "submit",
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: u,
                      children: N,
                    }),
                    (0, n.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: _,
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
    126743: function (e, s, t) {
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
//# sourceMappingURL=cc23956c6ba6fb495605.js.map
