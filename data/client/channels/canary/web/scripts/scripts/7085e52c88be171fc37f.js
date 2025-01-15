"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63757"],
  {
    308524: function (t) {
      t.exports = "/assets/79c37e7e9e731159016a.svg";
    },
    309690: function (t, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return i;
          },
        });
      var a = s(200651);
      s(192379);
      var n = s(481060),
        l = s(600164),
        o = s(388032),
        d = s(711569);
      function i(t) {
        let { onClose: e, transitionState: s } = t;
        return (0, a.jsxs)(n.ModalRoot, {
          size: n.ModalSize.SMALL,
          transitionState: s,
          children: [
            (0, a.jsxs)(n.ModalHeader, {
              justify: l.Z.Justify.BETWEEN,
              children: [
                (0, a.jsx)(n.FormTitle, {
                  tag: "h2",
                  className: d.header,
                  children: o.intl.string(o.t.GzjdOz),
                }),
                (0, a.jsx)(n.ModalCloseButton, {
                  onClick: e,
                  className: d.modalCloseButton,
                }),
              ],
            }),
            (0, a.jsxs)(n.ModalContent, {
              children: [
                (0, a.jsx)(n.Text, {
                  variant: "text-md/medium",
                  children: o.intl.string(o.t.VVZDBA),
                }),
                (0, a.jsx)("div", { className: d.fullArt }),
              ],
            }),
            (0, a.jsx)(n.ModalFooter, {
              children: (0, a.jsx)(n.Button, {
                onClick: e,
                children: o.intl.string(o.t.BddRzc),
              }),
            }),
          ],
        });
      }
    },
    711569: function (t, e, s) {
      t.exports = {
        fullArt: "fullArt_ae7ad3",
        header: "header_ae7ad3",
        modalCloseButton: "modalCloseButton_ae7ad3",
      };
    },
  },
]);
//# sourceMappingURL=7085e52c88be171fc37f.js.map
