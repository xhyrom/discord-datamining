"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98137"],
  {
    397013: function (t, e, a) {
      a.r(e);
      var n = a(200651);
      a(192379);
      var o = a(481060),
        c = a(313201),
        l = a(388032),
        s = a(234834);
      e.default = (t) => {
        let { onClose: e } = t,
          a = (0, c.Dt)();
        return (0, n.jsxs)(o.ModalRoot, {
          ...t,
          "aria-labelledby": a,
          children: [
            (0, n.jsxs)(o.ModalHeader, {
              separator: !1,
              className: s.modalHeader,
              children: [
                (0, n.jsx)(o.Heading, {
                  id: a,
                  variant: "heading-xl/extrabold",
                  children: l.intl.string(l.t.EouHws),
                }),
                (0, n.jsx)(o.ModalCloseButton, {
                  className: s.closeButton,
                  onClick: e,
                }),
              ],
            }),
            (0, n.jsx)(o.ModalContent, {
              className: s.modalContent,
              children: (0, n.jsx)(o.Text, {
                variant: "text-md/normal",
                className: s.contentText,
                children: l.intl.string(l.t.zNPBMD),
              }),
            }),
            (0, n.jsx)(o.ModalFooter, {
              children: (0, n.jsx)(o.Button, {
                className: s.button,
                size: o.Button.Sizes.MIN,
                onClick: e,
                children: l.intl.string(l.t.BddRzc),
              }),
            }),
          ],
        });
      };
    },
    234834: function (t, e, a) {
      t.exports = {
        modalHeader: "modalHeader_c6abcc",
        closeButton: "closeButton_c6abcc",
        modalContent: "modalContent_c6abcc",
        contentText: "contentText_c6abcc",
        button: "button_c6abcc",
      };
    },
  },
]);
//# sourceMappingURL=b2315aadb08d134cf882.js.map
