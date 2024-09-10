"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27751"],
  {
    902623: function (t) {
      t.exports = "/assets/90dfb13ab0e22d819b53.svg";
    },
    783576: function (t, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return d;
          },
        });
      var o = s(735250);
      s(470079);
      var n = s(481060),
        a = s(782568),
        i = s(313201),
        l = s(689938),
        r = s(181758);
      function d(t) {
        let { href: e, onClose: d, transitionState: c } = t,
          N = (0, i.Dt)();
        return (0, o.jsxs)(n.ModalRoot, {
          transitionState: c,
          "aria-labelledby": N,
          children: [
            (0, o.jsx)("img", { className: r.art, src: s(902623), alt: "" }),
            (0, o.jsx)(n.ModalContent, {
              children: (0, o.jsxs)("div", {
                className: r.modalContent,
                children: [
                  (0, o.jsx)(n.Heading, {
                    id: N,
                    variant: "heading-lg/semibold",
                    className: r.title,
                    children: l.Z.Messages.SUSPICIOUS_DOWNLOAD_WARNING_TITLE,
                  }),
                  (0, o.jsx)(n.Text, {
                    variant: "text-md/normal",
                    className: r.body,
                    children: l.Z.Messages.SUSPICIOUS_DOWNLOAD_WARNING_BODY,
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(n.ModalFooter, {
              children: [
                (0, o.jsx)(n.Button, {
                  type: "button",
                  size: n.Button.Sizes.MEDIUM,
                  color: n.Button.Colors.BRAND,
                  onClick: d,
                  children: l.Z.Messages.SUSPICIOUS_DOWNLOAD_WARNING_CANCEL,
                }),
                (0, o.jsx)(n.Button, {
                  type: "button",
                  size: n.Button.Sizes.MEDIUM,
                  color: n.Button.Colors.TRANSPARENT,
                  look: n.Button.Looks.LINK,
                  onClick: () => {
                    d(), (0, a.Z)(e, !0);
                  },
                  children: l.Z.Messages.SUSPICIOUS_DOWNLOAD_WARNING_DOWNLOAD,
                }),
              ],
            }),
          ],
        });
      }
    },
    181758: function (t, e, s) {
      t.exports = {
        title: "title_f6a9eb",
        body: "body_f6a9eb",
        art: "art_f6a9eb",
        modalContent: "modalContent_f6a9eb",
      };
    },
  },
]);
//# sourceMappingURL=ed89e357e518ad711156.js.map
