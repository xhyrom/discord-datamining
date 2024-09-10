"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88358"],
  {
    134519: function (t) {
      t.exports = "/assets/de5d9075802c7b2e6699.svg";
    },
    598402: function (t, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return l;
          },
        });
      var n = s(735250);
      s(470079);
      var a = s(481060),
        o = s(689938),
        c = s(505203),
        i = s(134519);
      function l(t) {
        let { transitionState: e, onClose: s } = t;
        return (0, n.jsxs)(a.ModalRoot, {
          transitionState: e,
          className: c.root,
          children: [
            (0, n.jsxs)(a.ModalHeader, {
              separator: !1,
              className: c.noScroll,
              children: [
                (0, n.jsx)(a.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: s,
                }),
                (0, n.jsx)("div", {
                  className: c.imageContainer,
                  children: (0, n.jsx)("img", {
                    src: i,
                    className: c.image,
                    alt: "",
                  }),
                }),
              ],
            }),
            (0, n.jsx)(a.ModalContent, {
              children: (0, n.jsxs)("div", {
                className: c.content,
                children: [
                  (0, n.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    className: c.title,
                    children: o.Z.Messages.INVITE_PERMISSION_MODAL_TITLE,
                  }),
                  (0, n.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: c.text,
                    children: o.Z.Messages.INVITE_PERMISSION_MODAL_TEXT,
                  }),
                  (0, n.jsx)(a.Button, {
                    className: c.button,
                    onClick: s,
                    children: o.Z.Messages.GOT_IT,
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    505203: function (t, e, s) {
      t.exports = {
        root: "root_c25b34",
        noScroll: "noScroll_c25b34",
        content: "content_c25b34",
        closeButton: "closeButton_c25b34",
        imageContainer: "imageContainer_c25b34",
        image: "image_c25b34",
        title: "title_c25b34",
        text: "text_c25b34",
        button: "button_c25b34",
      };
    },
  },
]);
//# sourceMappingURL=4e2c6fb0046878083add.js.map
