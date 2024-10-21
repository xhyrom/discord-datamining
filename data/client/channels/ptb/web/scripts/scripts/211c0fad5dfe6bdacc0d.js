"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85505"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    232837: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n(200651);
      n(192379);
      var a = n(481060),
        o = n(287734),
        r = n(594174),
        i = n(33194),
        l = n(807031),
        c = n(343544),
        d = n(689938);
      function u(e) {
        let {
          channelId: t,
          blockedUserId: n,
          transitionState: u,
          onClose: _,
        } = e;
        if (!(0, l.w)({ location: "warning_modal" })) return null;
        let E = r.default.getUser(n),
          N = [
            {
              icon: (0, s.jsx)(a.UserIcon, {}),
              text: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_PRESENCE.format(
                { userName: null == E ? void 0 : E.username },
              ),
            },
            {
              icon: (0, s.jsx)(a.MicrophoneIcon, {}),
              text: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_AUDIBLE,
            },
          ];
        return (0, s.jsx)(c.Z, {
          headerText: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_ALERT,
          descriptionText:
            d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
          infoRows: N,
          onDismissAndStay: () => {
            _(), (0, i.g6)(t);
          },
          onDismissAndLeave: () => {
            _(), o.default.disconnect();
          },
          leaveButtonText:
            d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_LEAVE,
          stayButtonText: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_STAY,
          transitionState: u,
          onClose: _,
        });
      }
    },
    343544: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = n(200651),
        a = n(192379),
        o = n(481060),
        r = n(511010),
        i = n(126743),
        l = n(444812);
      function c(e) {
        let {
          headerText: t,
          secondaryHeaderText: n,
          descriptionText: c,
          infoRows: d,
          onDismissAndStay: u,
          onDismissAndLeave: _,
          leaveButtonText: E,
          stayButtonText: N,
          transitionState: x,
        } = e;
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: x,
          children: [
            (0, s.jsx)("img", { alt: "", className: i.headerImage, src: l }),
            (0, s.jsxs)(o.ModalHeader, {
              separator: !1,
              className: i.header,
              children: [
                (0, s.jsxs)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: i.title,
                  children: [
                    t,
                    null != n &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != c &&
                  (0, s.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: c,
                  }),
              ],
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: i.content,
              children: [
                (0, s.jsx)("div", {
                  className: i.infoGroup,
                  children: d.map((e, t) =>
                    (0, s.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, s.jsxs)("div", {
                            className: i.infoRow,
                            children: [
                              e.icon,
                              (0, s.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          t < d.length - 1 && (0, s.jsx)(r.Z, {}),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, s.jsxs)("div", {
                  className: i.buttonGroup,
                  children: [
                    (0, s.jsx)(o.Button, {
                      type: "submit",
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: _,
                      children: E,
                    }),
                    (0, s.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: u,
                      children: N,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    126743: function (e, t, n) {
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
//# sourceMappingURL=211c0fad5dfe6bdacc0d.js.map
