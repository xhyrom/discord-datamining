"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37483"],
  {
    241046: function (e, o, s) {
      s.r(o),
        s.d(o, {
          default: function () {
            return h;
          },
        });
      var n = s(735250),
        t = s(470079),
        a = s(481060),
        r = s(367907),
        d = s(313889),
        i = s(177862),
        c = s(36459),
        l = s(981631),
        u = s(689938),
        _ = s(661470);
      function h(e) {
        let { automodDecision: o, transitionState: s, onClose: h } = e,
          M = t.useCallback(() => {
            (0, r.yw)(l.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: i.x2.BUG,
              decision_id: o.decisionId,
              message_id: o.messageId,
              content: o.messageContent,
            }),
              (0, c.Xx)(o.messageId, o.channel, d.d.SUBMIT_FEEDBACK),
              h();
          }, [o, h]);
        return (0, n.jsxs)(a.ModalRoot, {
          transitionState: s,
          size: a.ModalSize.SMALL,
          children: [
            (0, n.jsx)(a.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(a.Heading, {
                color: "header-primary",
                variant: "heading-md/semibold",
                children:
                  u.Z.Messages.GUILD_AUTOMOD_REPORT_FEEDBACK_MODAL_TITLE,
              }),
            }),
            (0, n.jsx)(a.ModalContent, {
              children: (0, n.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children:
                  u.Z.Messages.GUILD_AUTOMOD_REPORT_FEEDBACK_MODAL_SUBTITLE,
              }),
            }),
            (0, n.jsxs)(a.ModalFooter, {
              children: [
                (0, n.jsx)("div", {
                  className: _.button,
                  children: (0, n.jsx)(a.Button, {
                    onClick: M,
                    color: a.Button.Colors.BRAND,
                    look: a.Button.Looks.FILLED,
                    children: u.Z.Messages.YES_TEXT,
                  }),
                }),
                (0, n.jsx)(a.Button, {
                  onClick: h,
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  children: u.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    661470: function (e, o, s) {
      e.exports = { button: "button_a55839" };
    },
  },
]);
//# sourceMappingURL=f78ade852e7498043d5c.js.map
