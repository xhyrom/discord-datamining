"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12858"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    511010: function (e, t, a) {
      var s = a(735250),
        n = a(470079),
        o = a(120356),
        d = a.n(o),
        r = a(661824),
        i = a(916315);
      let l = n.forwardRef(function (e, t) {
        let { className: a, isBeforeGroup: n = !1, ...o } = e,
          { children: l } = o;
        return (0, s.jsx)(r.Z, {
          ...o,
          ref: t,
          role: "separator",
          "aria-label": "string" == typeof l ? l : void 0,
          className: d()(a, {
            [i.divider]: !0,
            [i.hasContent]: null != l,
            [i.beforeGroup]: n,
          }),
        });
      });
      t.Z = n.memo(l);
    },
    404339: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var s = a(735250);
      a(470079);
      var n = a(481060),
        o = a(287734),
        d = a(594174),
        r = a(33194),
        i = a(807031),
        l = a(343544),
        c = a(689938);
      function u(e) {
        let {
          channelId: t,
          blockedUserId: a,
          transitionState: u,
          onClose: _,
        } = e;
        if (!(0, i.w)({ location: "warning_modal" })) return null;
        let m = d.default.getUser(a),
          g = [
            {
              icon: (0, s.jsx)(n.UserIcon, {}),
              text: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_PRESENCE.format(
                { userName: null == m ? void 0 : m.username },
              ),
            },
            {
              icon: (0, s.jsx)(n.MicrophoneIcon, {}),
              text: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_AUDIBLE,
            },
          ];
        return (0, s.jsx)(l.Z, {
          headerText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_ALERT,
          descriptionText:
            c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
          infoRows: g,
          onDismissAndStay: () => {
            _(), (0, r.g6)(t);
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
    343544: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = a(735250),
        n = a(470079),
        o = a(481060),
        d = a(511010),
        r = a(126743),
        i = a(444812);
      function l(e) {
        let {
          headerText: t,
          secondaryHeaderText: a,
          descriptionText: l,
          infoRows: c,
          onDismissAndStay: u,
          onDismissAndLeave: _,
          leaveButtonText: m,
          stayButtonText: g,
          transitionState: h,
        } = e;
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: h,
          children: [
            (0, s.jsx)("img", { alt: "", className: r.headerImage, src: i }),
            (0, s.jsxs)(o.ModalHeader, {
              separator: !1,
              className: r.header,
              children: [
                (0, s.jsxs)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: r.title,
                  children: [
                    t,
                    null != a &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("br", {}), a],
                      }),
                  ],
                }),
                null != l &&
                  (0, s.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: l,
                  }),
              ],
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: r.content,
              children: [
                (0, s.jsx)("div", {
                  className: r.infoGroup,
                  children: c.map((e, t) =>
                    (0, s.jsxs)(
                      n.Fragment,
                      {
                        children: [
                          (0, s.jsxs)("div", {
                            className: r.infoRow,
                            children: [
                              e.icon,
                              (0, s.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          t < c.length - 1 && (0, s.jsx)(d.Z, {}),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, s.jsxs)("div", {
                  className: r.buttonGroup,
                  children: [
                    (0, s.jsx)(o.Button, {
                      type: "submit",
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: _,
                      children: m,
                    }),
                    (0, s.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: u,
                      children: g,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    916315: function (e, t, a) {
      e.exports = {
        ephemeral: "ephemeral_d5deea",
        nitroMessage: "nitroMessage_d5deea",
        automodMessage: "automodMessage_d5deea",
        mentioned: "mentioned_d5deea",
        replying: "replying_d5deea",
        messageListItem: "messageListItem_d5deea",
        message: "message_d5deea",
        selected: "selected_d5deea",
        quotedChatMessage: "quotedChatMessage_d5deea",
        jump: "jump_d5deea",
        buttons: "buttons_d5deea",
        buttonsInner: "buttonsInner_d5deea",
        hideIfMessageNotFocused: "hideIfMessageNotFocused_d5deea",
        cozyMessage: "cozyMessage_d5deea",
        groupStart: "groupStart_d5deea",
        systemMessage: "systemMessage_d5deea",
        backgroundFlash: "backgroundFlash_d5deea",
        channelTextArea: "channelTextArea_d5deea",
        divider: "divider_d5deea",
        disableInteraction: "disableInteraction_d5deea",
        beforeGroup: "beforeGroup_d5deea",
        hasContent: "hasContent_d5deea",
        interactionSending: "interactionSending_d5deea",
      };
    },
    126743: function (e, t, a) {
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
//# sourceMappingURL=a495a85de0444c541c74.js.map
