"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96075"],
  {
    514086: function (t) {
      t.exports = "/assets/21d964f84e1b33d76b5e.svg";
    },
    692333: function (t) {
      t.exports = "/assets/ffaa93e17ac5edfee02b.svg";
    },
    338690: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = e(287734),
        s = e(592125),
        i = e(894257);
      function a() {
        let t = s.Z.getDMFromUserId(i.I);
        null != t && r.default.selectPrivateChannel(t);
      }
    },
    520615: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return d;
          },
        });
      var r = e(200651);
      e(192379);
      var s = e(481060),
        i = e(338690),
        a = e(388032),
        o = e(998360);
      function d(t) {
        let { transitionState: n, onClose: e } = t;
        return (0, r.jsxs)(s.ModalRoot, {
          transitionState: n,
          children: [
            (0, r.jsx)(s.ModalHeader, {
              separator: !1,
              children: (0, r.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: a.intl.string(a.t.bAhz9v),
              }),
            }),
            (0, r.jsxs)(s.ModalContent, {
              children: [
                (0, r.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children: a.intl.string(a.t["7KjxW1"]),
                }),
                (0, r.jsx)("div", { className: o.art }),
              ],
            }),
            (0, r.jsx)(s.ModalFooter, {
              children: (0, r.jsx)(s.Button, {
                type: "submit",
                color: s.Button.Colors.BRAND,
                onClick: () => {
                  (0, i.Z)(), e();
                },
                children: a.intl.string(a.t.BddRzc),
              }),
            }),
          ],
        });
      }
    },
    998360: function (t, n, e) {
      t.exports = { art: "art_ebefe4" };
    },
  },
]);
//# sourceMappingURL=09245e1b94eeea5c318b.js.map
