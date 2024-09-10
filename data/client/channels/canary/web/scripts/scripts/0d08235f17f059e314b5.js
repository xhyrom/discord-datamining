"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29396"],
  {
    513239: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return b;
          },
        });
      var o = a(735250);
      a(470079);
      var s = a(780384),
        n = a(481060),
        l = a(410030),
        i = a(313201),
        c = a(689938),
        r = a(698422),
        d = a(167969),
        u = a(557256);
      function b(t) {
        let { onClose: e, transitionState: a } = t,
          b = (0, i.Dt)(),
          _ = (0, s.wj)((0, l.ZP)());
        return (0, o.jsxs)(n.ModalRoot, {
          transitionState: a,
          "aria-labelledby": b,
          size: n.ModalSize.SMALL,
          children: [
            (0, o.jsxs)(n.ModalContent, {
              className: r.content,
              children: [
                (0, o.jsx)(n.ModalCloseButton, {
                  className: r.closeButton,
                  onClick: e,
                }),
                (0, o.jsx)("img", {
                  className: r.image,
                  src: _ ? d : u,
                  alt: "",
                }),
                (0, o.jsx)(n.Text, {
                  variant: "text-lg/semibold",
                  color: "header-primary",
                  className: r.title,
                  children: c.Z.Messages.GUILD_PRODUCT_NOT_AVAILABLE_TITLE,
                }),
                (0, o.jsx)(n.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: r.body,
                  children: c.Z.Messages.GUILD_PRODUCT_NOT_AVAILABLE_BODY,
                }),
              ],
            }),
            (0, o.jsx)(n.ModalFooter, {
              children: (0, o.jsx)(n.Button, {
                className: r.button,
                color: n.Button.Colors.BRAND,
                onClick: e,
                size: n.Button.Sizes.LARGE,
                children: c.Z.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
    698422: function (t, e, a) {
      t.exports = {
        closeButton: "closeButton_da51ab",
        content: "content_da51ab",
        image: "image_da51ab",
        title: "title_da51ab",
        body: "body_da51ab",
        button: "button_da51ab",
      };
    },
  },
]);
//# sourceMappingURL=0d08235f17f059e314b5.js.map
