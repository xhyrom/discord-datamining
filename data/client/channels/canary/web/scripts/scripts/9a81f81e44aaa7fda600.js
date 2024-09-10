"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98137"],
  {
    397013: function (e, t, a) {
      a.r(t);
      var o = a(735250);
      a(470079);
      var n = a(481060),
        s = a(313201),
        c = a(689938),
        l = a(454499);
      t.default = (e) => {
        let { onClose: t } = e,
          a = (0, s.Dt)();
        return (0, o.jsxs)(n.ModalRoot, {
          ...e,
          "aria-labelledby": a,
          children: [
            (0, o.jsxs)(n.ModalHeader, {
              separator: !1,
              className: l.modalHeader,
              children: [
                (0, o.jsx)(n.Heading, {
                  id: a,
                  variant: "heading-xl/extrabold",
                  children: c.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING,
                }),
                (0, o.jsx)(n.ModalCloseButton, {
                  className: l.closeButton,
                  onClick: t,
                }),
              ],
            }),
            (0, o.jsx)(n.ModalContent, {
              className: l.modalContent,
              children: (0, o.jsx)(n.Text, {
                variant: "text-md/normal",
                className: l.contentText,
                children: c.Z.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_V2,
              }),
            }),
            (0, o.jsx)(n.ModalFooter, {
              children: (0, o.jsx)(n.Button, {
                className: l.button,
                size: n.Button.Sizes.MIN,
                onClick: t,
                children: c.Z.Messages.OKAY,
              }),
            }),
          ],
        });
      };
    },
    454499: function (e, t, a) {
      e.exports = {
        modalHeader: "modalHeader_c6abcc",
        closeButton: "closeButton_c6abcc",
        modalContent: "modalContent_c6abcc",
        contentText: "contentText_c6abcc",
        button: "button_c6abcc",
      };
    },
  },
]);
//# sourceMappingURL=9a81f81e44aaa7fda600.js.map
