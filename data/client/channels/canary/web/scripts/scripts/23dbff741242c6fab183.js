"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87337"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    511010: function (e, a, t) {
      var s = t(735250),
        n = t(470079),
        o = t(120356),
        d = t.n(o),
        r = t(661824),
        i = t(916315);
      let _ = n.forwardRef(function (e, a) {
        let { className: t, isBeforeGroup: n = !1, ...o } = e,
          { children: _ } = o;
        return (0, s.jsx)(r.Z, {
          ...o,
          ref: a,
          role: "separator",
          "aria-label": "string" == typeof _ ? _ : void 0,
          className: d()(t, {
            [i.divider]: !0,
            [i.hasContent]: null != _,
            [i.beforeGroup]: n,
          }),
        });
      });
      a.Z = n.memo(_);
    },
    799352: function (e, a, t) {
      t.d(a, {
        O: function () {
          return o;
        },
      });
      var s = t(544891),
        n = t(981631);
      function o(e) {
        return s.tn.post({ url: n.ANM.CHANNEL_BLOCKED_USER_WARNING_ACK(e) });
      }
    },
    164375: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return m;
          },
        });
      var s = t(735250),
        n = t(470079),
        o = t(481060),
        d = t(493683),
        r = t(594174),
        i = t(626135),
        _ = t(799352),
        l = t(343544),
        c = t(110223),
        u = t(981631),
        E = t(689938);
      function m(e) {
        var a;
        let {
            channelId: t,
            blockedUserIds: m,
            transitionState: M,
            onClose: N,
          } = e,
          g = m.map((e) => r.default.getUser(e));
        n.useEffect(() => {
          i.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: c.X.MODAL,
            blocked_user_ids: m,
          });
        }, [t, m]);
        let h = g.length > 1,
          x = [
            {
              icon: h
                ? (0, s.jsx)(o.GroupIcon, {})
                : (0, s.jsx)(o.UserIcon, {}),
              text: h
                ? E.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format(
                    { blockedUserCount: g.length },
                  )
                : E.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({
                    userName:
                      null === (a = g[0]) || void 0 === a ? void 0 : a.username,
                  }),
            },
            {
              icon: (0, s.jsx)(o.BellSlashIcon, {}),
              text: E.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY,
            },
            {
              icon: (0, s.jsx)(o.EnvelopeIcon, {}),
              text: E.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED,
            },
          ];
        return (0, s.jsx)(l.Z, {
          headerText: h
            ? E.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL
            : E.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
          secondaryHeaderText:
            E.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL,
          infoRows: x,
          onDismissAndStay: () => {
            N(),
              (0, _.O)(t),
              i.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: c.q.CLICK_TO_STAY,
                channel_id: t,
                warning_medium: c.X.MODAL,
                blocked_user_ids: m,
              });
          },
          onDismissAndLeave: () => {
            N(),
              (0, _.O)(t),
              d.Z.closePrivateChannel(t, !0, !0),
              i.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: c.q.CLICK_TO_LEAVE,
                channel_id: t,
                warning_medium: c.X.MODAL,
                blocked_user_ids: m,
              });
          },
          leaveButtonText: E.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
          stayButtonText: E.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
          transitionState: M,
          onClose: N,
        });
      }
    },
    343544: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return _;
        },
      });
      var s = t(735250),
        n = t(470079),
        o = t(481060),
        d = t(511010),
        r = t(126743),
        i = t(444812);
      function _(e) {
        let {
          headerText: a,
          secondaryHeaderText: t,
          descriptionText: _,
          infoRows: l,
          onDismissAndStay: c,
          onDismissAndLeave: u,
          leaveButtonText: E,
          stayButtonText: m,
          transitionState: M,
        } = e;
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: M,
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
                    a,
                    null != t &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("br", {}), t],
                      }),
                  ],
                }),
                null != _ &&
                  (0, s.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: _,
                  }),
              ],
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: r.content,
              children: [
                (0, s.jsx)("div", {
                  className: r.infoGroup,
                  children: l.map((e, a) =>
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
                          a < l.length - 1 && (0, s.jsx)(d.Z, {}),
                        ],
                      },
                      a,
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
                      onClick: u,
                      children: E,
                    }),
                    (0, s.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: c,
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
    916315: function (e, a, t) {
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
    126743: function (e, a, t) {
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
//# sourceMappingURL=23dbff741242c6fab183.js.map
