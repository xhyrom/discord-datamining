"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37564"],
  {
    762528: function (t) {
      t.exports = "/assets/c5bd48c525b332338562.svg";
    },
    969214: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return r;
          },
        });
      var o = n(200651);
      n(192379);
      var a = n(481060),
        s = n(388032),
        i = n(7517);
      function r(t) {
        let { transitionState: e, onClose: r } = t;
        return (0, o.jsxs)(a.ModalRoot, {
          className: i.modal,
          transitionState: e,
          size: a.ModalSize.SMALL,
          children: [
            (0, o.jsx)("img", {
              "aria-hidden": !0,
              alt: "",
              src: n(762528),
              className: i.image,
            }),
            (0, o.jsxs)(a.ModalContent, {
              className: i.content,
              children: [
                (0, o.jsx)(a.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: i.text,
                  children: s.intl.string(s.t.pAzfrq),
                }),
                (0, o.jsx)(a.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: i.text,
                  children: s.intl.string(s.t.oxowND),
                }),
                (0, o.jsx)(a.Button, {
                  onClick: r,
                  color: a.Button.Colors.BRAND,
                  look: a.Button.Looks.FILLED,
                  children: s.intl.string(s.t.o3ZlOD),
                }),
              ],
            }),
          ],
        });
      }
    },
    7517: function (t, e, n) {
      t.exports = {
        modal: "modal_ed8366",
        content: "content_ed8366",
        image: "image_ed8366",
        text: "text_ed8366",
      };
    },
  },
]);
//# sourceMappingURL=136fa2f57506b0a5de5e.js.map
