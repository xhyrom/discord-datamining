"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74194"],
  {
    902623: function (t) {
      t.exports = "/assets/90dfb13ab0e22d819b53.svg";
    },
    269817: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          },
        });
      var o = e(200651);
      e(192379);
      var i = e(481060),
        s = e(782568),
        l = e(313201),
        a = e(388032),
        r = e(301817);
      function c(t) {
        let { url: n, onClose: c, transitionState: d } = t,
          u = (0, l.Dt)();
        return (0, o.jsxs)(i.ModalRoot, {
          transitionState: d,
          "aria-labelledby": u,
          children: [
            (0, o.jsx)("img", { className: r.art, src: e(902623), alt: "" }),
            (0, o.jsx)(i.ModalContent, {
              children: (0, o.jsxs)("div", {
                className: r.modalContent,
                children: [
                  (0, o.jsx)(i.Heading, {
                    id: u,
                    variant: "heading-lg/semibold",
                    className: r.title,
                    children: a.intl.string(a.t.biy1X1),
                  }),
                  (0, o.jsx)(i.Text, {
                    variant: "text-md/normal",
                    className: r.body,
                    children: a.intl.format(a.t.J86cyc, { url: n }),
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(i.ModalFooter, {
              children: [
                (0, o.jsx)(i.Button, {
                  type: "button",
                  size: i.Button.Sizes.MEDIUM,
                  color: i.Button.Colors.BRAND,
                  onClick: c,
                  children: a.intl.string(a.t["xl8R+/"]),
                }),
                (0, o.jsx)(i.Button, {
                  type: "button",
                  size: i.Button.Sizes.MEDIUM,
                  color: i.Button.Colors.TRANSPARENT,
                  look: i.Button.Looks.LINK,
                  onClick: () => {
                    (0, s.Z)(n, !0);
                  },
                  children: a.intl.string(a.t.gQrLtr),
                }),
              ],
            }),
          ],
        });
      }
    },
    301817: function (t, n, e) {
      t.exports = {
        title: "title_bece97",
        body: "body_bece97",
        art: "art_bece97",
        modalContent: "modalContent_bece97",
      };
    },
  },
]);
//# sourceMappingURL=dd519d0b5b00b909cf4d.js.map
