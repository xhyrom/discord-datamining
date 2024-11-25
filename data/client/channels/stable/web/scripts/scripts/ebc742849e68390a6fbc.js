"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86465"],
  {
    308524: function (t) {
      t.exports = "/assets/79c37e7e9e731159016a.svg";
    },
    997308: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        });
      var s = n(200651);
      n(192379);
      var i = n(481060),
        a = n(600164),
        r = n(388032),
        l = n(184764);
      function d(t) {
        let { transitionState: e, onClose: n } = t;
        return (0, s.jsxs)(i.ModalRoot, {
          size: i.ModalSize.DYNAMIC,
          transitionState: e,
          "aria-label": r.intl.string(r.t.elyVbm),
          children: [
            (0, s.jsxs)(i.ModalHeader, {
              justify: a.Z.Justify.BETWEEN,
              separator: !1,
              children: [
                (0, s.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  className: l.header,
                  children: r.intl.string(r.t.elyVbm),
                }),
                (0, s.jsx)(i.ModalCloseButton, { onClick: n }),
              ],
            }),
            (0, s.jsxs)(i.ModalContent, {
              children: [
                (0, s.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: r.intl.string(r.t.nIeRen),
                }),
                (0, s.jsx)("div", { className: l.fullArt }),
              ],
            }),
            (0, s.jsx)(i.ModalFooter, {
              children: (0, s.jsx)(i.Button, {
                onClick: n,
                children: r.intl.string(r.t.BddRzc),
              }),
            }),
          ],
        });
      }
    },
    184764: function (t, e, n) {
      t.exports = { fullArt: "fullArt_adc7d0", header: "header_adc7d0" };
    },
  },
]);
//# sourceMappingURL=ebc742849e68390a6fbc.js.map
