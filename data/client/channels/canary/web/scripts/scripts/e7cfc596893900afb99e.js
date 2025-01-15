"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29396"],
  {
    513239: function (t, a, e) {
      e.r(a),
        e.d(a, {
          default: function () {
            return b;
          },
        });
      var o = e(200651);
      e(192379);
      var n = e(780384),
        s = e(481060),
        i = e(410030),
        l = e(313201),
        r = e(388032),
        c = e(474648),
        d = e(167969),
        u = e(557256);
      function b(t) {
        let { onClose: a, transitionState: e } = t,
          b = (0, l.Dt)(),
          h = (0, n.wj)((0, i.ZP)());
        return (0, o.jsxs)(s.ModalRoot, {
          transitionState: e,
          "aria-labelledby": b,
          size: s.ModalSize.SMALL,
          children: [
            (0, o.jsxs)(s.ModalContent, {
              className: c.content,
              children: [
                (0, o.jsx)(s.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: a,
                }),
                (0, o.jsx)("img", {
                  className: c.image,
                  src: h ? d : u,
                  alt: "",
                }),
                (0, o.jsx)(s.Text, {
                  variant: "text-lg/semibold",
                  color: "header-primary",
                  className: c.title,
                  children: r.intl.string(r.t.wLrh09),
                }),
                (0, o.jsx)(s.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: c.body,
                  children: r.intl.string(r.t.DW9yJi),
                }),
              ],
            }),
            (0, o.jsx)(s.ModalFooter, {
              children: (0, o.jsx)(s.Button, {
                className: c.button,
                color: s.Button.Colors.BRAND,
                onClick: a,
                size: s.Button.Sizes.LARGE,
                children: r.intl.string(r.t.BddRzc),
              }),
            }),
          ],
        });
      }
    },
    474648: function (t, a, e) {
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
//# sourceMappingURL=e7cfc596893900afb99e.js.map
