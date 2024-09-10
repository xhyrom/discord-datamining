"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96075"],
  {
    514086: function (e) {
      e.exports = "/assets/21d964f84e1b33d76b5e.svg";
    },
    692333: function (e) {
      e.exports = "/assets/ffaa93e17ac5edfee02b.svg";
    },
    338690: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = s(287734),
        a = s(592125),
        r = s(894257);
      function o() {
        let e = a.Z.getDMFromUserId(r.I);
        null != e && n.default.selectPrivateChannel(e);
      }
    },
    520615: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var n = s(735250);
      s(470079);
      var a = s(481060),
        r = s(338690),
        o = s(689938),
        i = s(241036);
      function d(e) {
        let { transitionState: t, onClose: s } = e;
        return (0, n.jsxs)(a.ModalRoot, {
          transitionState: t,
          children: [
            (0, n.jsx)(a.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                children: o.Z.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_HEADER,
              }),
            }),
            (0, n.jsxs)(a.ModalContent, {
              children: [
                (0, n.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: o.Z.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_BODY,
                }),
                (0, n.jsx)("div", { className: i.art }),
              ],
            }),
            (0, n.jsx)(a.ModalFooter, {
              children: (0, n.jsx)(a.Button, {
                type: "submit",
                color: a.Button.Colors.BRAND,
                onClick: () => {
                  (0, r.Z)(), s();
                },
                children: o.Z.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
    241036: function (e, t, s) {
      e.exports = { art: "art_ebefe4" };
    },
  },
]);
//# sourceMappingURL=859af975652dd7c238ec.js.map
