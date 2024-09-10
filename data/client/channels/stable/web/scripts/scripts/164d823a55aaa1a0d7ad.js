"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46317"],
  {
    948514: function (s) {
      s.exports = "/assets/d6fe8121b46dca8cf0f8.svg";
    },
    850582: function (s) {
      s.exports = "/assets/3d32fdd26dd784b55cba.svg";
    },
    841178: function (s, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return l;
          },
        });
      var a = t(735250);
      t(470079);
      var n = t(481060),
        i = t(600164),
        o = t(313201),
        d = t(952164),
        r = t(689938),
        c = t(326249);
      function l(s) {
        let { transitionState: e, onClose: t } = s,
          l = (0, o.Dt)();
        return (0, a.jsxs)(n.ModalRoot, {
          "aria-labelledby": l,
          transitionState: e,
          size: n.ModalSize.SMALL,
          children: [
            (0, a.jsx)(n.ModalHeader, {
              separator: !1,
              children: (0, a.jsx)(n.Heading, {
                id: l,
                variant: "heading-lg/semibold",
                children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER,
              }),
            }),
            (0, a.jsxs)(n.ModalContent, {
              children: [
                (0, a.jsx)(i.Z, {
                  justify: i.Z.Justify.CENTER,
                  children: (0, a.jsx)("div", { className: c.image }),
                }),
                (0, a.jsx)(n.Text, {
                  className: c.text,
                  variant: "text-sm/normal",
                  children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY,
                }),
              ],
            }),
            (0, a.jsxs)(n.ModalFooter, {
              children: [
                (0, a.jsx)(n.Button, {
                  onClick: function () {
                    (0, d.KK)(), t();
                  },
                  children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON,
                }),
                (0, a.jsx)(n.Button, {
                  look: n.Button.Looks.LINK,
                  color: n.Button.Colors.PRIMARY,
                  onClick: t,
                  children: r.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    326249: function (s, e, t) {
      s.exports = { image: "image_a6ea01", text: "text_a6ea01" };
    },
  },
]);
//# sourceMappingURL=164d823a55aaa1a0d7ad.js.map
