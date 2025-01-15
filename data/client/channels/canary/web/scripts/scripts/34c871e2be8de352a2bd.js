"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37483"],
  {
    241046: function (t, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return x;
          },
        });
      var e = o(200651),
        s = o(192379),
        i = o(481060),
        r = o(367907),
        d = o(313889),
        a = o(177862),
        l = o(36459),
        c = o(981631),
        u = o(388032),
        h = o(752051);
      function x(t) {
        let { automodDecision: n, transitionState: o, onClose: x } = t,
          k = s.useCallback(() => {
            (0, r.yw)(c.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: a.x2.BUG,
              decision_id: n.decisionId,
              message_id: n.messageId,
              content: n.messageContent,
            }),
              (0, l.Xx)(n.messageId, n.channel, d.d.SUBMIT_FEEDBACK),
              x();
          }, [n, x]);
        return (0, e.jsxs)(i.ModalRoot, {
          transitionState: o,
          size: i.ModalSize.SMALL,
          children: [
            (0, e.jsx)(i.ModalHeader, {
              separator: !1,
              children: (0, e.jsx)(i.Heading, {
                color: "header-primary",
                variant: "heading-md/semibold",
                children: u.intl.string(u.t["7bdzNj"]),
              }),
            }),
            (0, e.jsx)(i.ModalContent, {
              children: (0, e.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: u.intl.string(u.t.Lbpk6u),
              }),
            }),
            (0, e.jsxs)(i.ModalFooter, {
              children: [
                (0, e.jsx)("div", {
                  className: h.button,
                  children: (0, e.jsx)(i.Button, {
                    onClick: k,
                    color: i.Button.Colors.BRAND,
                    look: i.Button.Looks.FILLED,
                    children: u.intl.string(u.t.p89ACg),
                  }),
                }),
                (0, e.jsx)(i.Button, {
                  onClick: x,
                  color: i.Button.Colors.PRIMARY,
                  look: i.Button.Looks.LINK,
                  children: u.intl.string(u.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    752051: function (t, n, o) {
      t.exports = { button: "button_a55839" };
    },
  },
]);
//# sourceMappingURL=34c871e2be8de352a2bd.js.map
