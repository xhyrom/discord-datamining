"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7285"],
  {
    462991: function (t) {
      t.exports = "/assets/1a8b06e1c2b7a9bb1946.svg";
    },
    951269: function (t, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return u;
          },
        });
      var n = s(200651);
      s(192379);
      var o = s(481060),
        i = s(118012),
        l = s(313201),
        a = s(388032),
        c = s(235661),
        r = s(462991);
      function u(t) {
        let { onClose: e, transitionState: s, kind: u } = t,
          d = (0, l.Dt)();
        return (0, n.jsxs)(o.ModalRoot, {
          transitionState: s,
          "aria-labelledby": d,
          size: o.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(o.ModalContent, {
              className: c.content,
              children: [
                (0, n.jsx)(o.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: e,
                }),
                (0, n.jsx)("img", { className: c.image, src: r, alt: "" }),
                (0, n.jsx)(i.Z, {
                  className: c.title,
                  id: d,
                  size: i.Z.Sizes.SIZE_24,
                  color: i.Z.Colors.HEADER_PRIMARY,
                  children: a.intl.string(a.t.r0DLNj),
                }),
                (0, n.jsx)(o.Text, {
                  className: c.subtitle,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children:
                    "user" === u
                      ? a.intl.string(a.t.Fqqbho)
                      : a.intl.string(a.t["6Y0JlJ"]),
                }),
              ],
            }),
            (0, n.jsx)(o.ModalFooter, {
              children: (0, n.jsx)(o.Button, {
                className: c.button,
                color: o.Button.Colors.BRAND,
                onClick: e,
                size: o.Button.Sizes.LARGE,
                children: a.intl.string(a.t.BddRzc),
              }),
            }),
          ],
        });
      }
    },
    235661: function (t, e, s) {
      t.exports = {
        closeButton: "closeButton_f502be",
        content: "content_f502be",
        image: "image_f502be",
        title: "title_f502be",
        subtitle: "subtitle_f502be",
        button: "button_f502be",
      };
    },
  },
]);
//# sourceMappingURL=d9c6374f24f85c24f66a.js.map
