"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46317"],
  {
    841178: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return c;
          },
        });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        n = t(600164),
        o = t(313201),
        r = t(952164),
        l = t(689938),
        d = t(326249);
      function c(e) {
        let { transitionState: s, onClose: t } = e,
          c = (0, o.Dt)();
        return (0, a.jsxs)(i.ModalRoot, {
          "aria-labelledby": c,
          transitionState: s,
          size: i.ModalSize.SMALL,
          children: [
            (0, a.jsx)(i.ModalHeader, {
              separator: !1,
              children: (0, a.jsx)(i.Heading, {
                id: c,
                variant: "heading-lg/semibold",
                children: l.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER,
              }),
            }),
            (0, a.jsxs)(i.ModalContent, {
              children: [
                (0, a.jsx)(n.Z, {
                  justify: n.Z.Justify.CENTER,
                  children: (0, a.jsx)("div", { className: d.image }),
                }),
                (0, a.jsx)(i.Text, {
                  className: d.text,
                  variant: "text-sm/normal",
                  children: l.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY,
                }),
              ],
            }),
            (0, a.jsxs)(i.ModalFooter, {
              children: [
                (0, a.jsx)(i.Button, {
                  onClick: function () {
                    (0, r.KK)(), t();
                  },
                  children: l.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON,
                }),
                (0, a.jsx)(i.Button, {
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.PRIMARY,
                  onClick: t,
                  children: l.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    326249: function (e, s, t) {
      e.exports = { image: "image_a6ea01", text: "text_a6ea01" };
    },
  },
]);
//# sourceMappingURL=bdde4fcf54094597ebf8.js.map
