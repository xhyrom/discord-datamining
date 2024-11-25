"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88358"],
  {
    134519: function (t) {
      t.exports = "/assets/de5d9075802c7b2e6699.svg";
    },
    598402: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return l;
          },
        });
      var s = e(200651);
      e(192379);
      var a = e(481060),
        o = e(388032),
        c = e(380731),
        i = e(134519);
      function l(t) {
        let { transitionState: n, onClose: e } = t;
        return (0, s.jsxs)(a.ModalRoot, {
          transitionState: n,
          className: c.root,
          children: [
            (0, s.jsxs)(a.ModalHeader, {
              separator: !1,
              className: c.noScroll,
              children: [
                (0, s.jsx)(a.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: e,
                }),
                (0, s.jsx)("div", {
                  className: c.imageContainer,
                  children: (0, s.jsx)("img", {
                    src: i,
                    className: c.image,
                    alt: "",
                  }),
                }),
              ],
            }),
            (0, s.jsx)(a.ModalContent, {
              children: (0, s.jsxs)("div", {
                className: c.content,
                children: [
                  (0, s.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    className: c.title,
                    children: o.intl.string(o.t.xSV3nZ),
                  }),
                  (0, s.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: c.text,
                    children: o.intl.string(o.t.jPMGbG),
                  }),
                  (0, s.jsx)(a.Button, {
                    className: c.button,
                    onClick: e,
                    children: o.intl.string(o.t["NX+WJC"]),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    380731: function (t, n, e) {
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
//# sourceMappingURL=28bab5c1d4896b65b3db.js.map
