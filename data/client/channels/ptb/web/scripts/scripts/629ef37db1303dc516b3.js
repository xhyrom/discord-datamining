"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12858"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    511010: function (e, t, n) {
      var s = n(735250),
        a = n(470079),
        o = n(120356),
        r = n.n(o),
        i = n(661824),
        l = n(916315);
      let d = a.forwardRef(function (e, t) {
        let { className: n, isBeforeGroup: a = !1, ...o } = e,
          { children: d } = o;
        return (0, s.jsx)(i.Z, {
          ...o,
          ref: t,
          role: "separator",
          "aria-label": "string" == typeof d ? d : void 0,
          className: r()(n, {
            [l.divider]: !0,
            [l.hasContent]: null != d,
            [l.beforeGroup]: a,
          }),
        });
      });
      t.Z = a.memo(d);
    },
    404339: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n(735250);
      n(470079);
      var a = n(481060),
        o = n(287734),
        r = n(594174),
        i = n(33194),
        l = n(807031),
        d = n(343544),
        c = n(689938);
      function u(e) {
        let {
          channelId: t,
          blockedUserId: n,
          transitionState: u,
          onClose: _,
        } = e;
        if (!(0, l.F)({ location: "warning_modal" })) return null;
        let N = r.default.getUser(n),
          x = [
            {
              icon: (0, s.jsx)(a.UserIcon, {}),
              text: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_PRESENCE.format(
                { userName: null == N ? void 0 : N.username },
              ),
            },
            {
              icon: (0, s.jsx)(a.MicrophoneIcon, {}),
              text: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_AUDIBLE,
            },
          ];
        return (0, s.jsx)(d.Z, {
          headerText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_ALERT,
          descriptionText:
            c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
          infoRows: x,
          onDismissAndStay: () => {
            _(), (0, i.g6)(t);
          },
          onDismissAndLeave: () => {
            _(), o.default.disconnect();
          },
          leaveButtonText:
            c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_LEAVE,
          stayButtonText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_STAY,
          transitionState: u,
          onClose: _,
        });
      }
    },
    343544: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = n(735250),
        a = n(470079),
        o = n(481060),
        r = n(511010),
        i = n(126743),
        l = n(444812);
      function d(e) {
        let {
          headerText: t,
          secondaryHeaderText: n,
          descriptionText: d,
          infoRows: c,
          onDismissAndStay: u,
          onDismissAndLeave: _,
          leaveButtonText: N,
          stayButtonText: x,
          transitionState: E,
        } = e;
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: E,
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
                null != d &&
                  (0, s.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: d,
                  }),
              ],
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: i.content,
              children: [
                (0, s.jsx)("div", {
                  className: i.infoGroup,
                  children: c.map((e, t) =>
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
                          t < c.length - 1 && (0, s.jsx)(r.Z, {}),
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
                      children: N,
                    }),
                    (0, s.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
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
//# sourceMappingURL=629ef37db1303dc516b3.js.map
