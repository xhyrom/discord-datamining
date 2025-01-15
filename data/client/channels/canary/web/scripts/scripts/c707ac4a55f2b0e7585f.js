"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27751"],
  {
    902623: function (t) {
      t.exports = "/assets/90dfb13ab0e22d819b53.svg";
    },
    783576: function (t, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return d;
          },
        });
      var e = o(200651);
      o(192379);
      var i = o(481060),
        s = o(782568),
        a = o(313201),
        l = o(388032),
        r = o(700715);
      function d(t) {
        let { href: n, onClose: d, transitionState: c } = t,
          u = (0, a.Dt)();
        return (0, e.jsxs)(i.ModalRoot, {
          transitionState: c,
          "aria-labelledby": u,
          children: [
            (0, e.jsx)("img", { className: r.art, src: o(902623), alt: "" }),
            (0, e.jsx)(i.ModalContent, {
              children: (0, e.jsxs)("div", {
                className: r.modalContent,
                children: [
                  (0, e.jsx)(i.Heading, {
                    id: u,
                    variant: "heading-lg/semibold",
                    className: r.title,
                    children: l.intl.string(l.t.XtDo9f),
                  }),
                  (0, e.jsx)(i.Text, {
                    variant: "text-md/normal",
                    className: r.body,
                    children: l.intl.string(l.t.L9yFkp),
                  }),
                ],
              }),
            }),
            (0, e.jsxs)(i.ModalFooter, {
              children: [
                (0, e.jsx)(i.Button, {
                  type: "button",
                  size: i.Button.Sizes.MEDIUM,
                  color: i.Button.Colors.BRAND,
                  onClick: d,
                  children: l.intl.string(l.t.j7Vi2t),
                }),
                (0, e.jsx)(i.Button, {
                  type: "button",
                  size: i.Button.Sizes.MEDIUM,
                  color: i.Button.Colors.TRANSPARENT,
                  look: i.Button.Looks.LINK,
                  onClick: () => {
                    d(), (0, s.Z)(n, !0);
                  },
                  children: l.intl.string(l.t["/bHu8/"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    700715: function (t, n, o) {
      t.exports = {
        title: "title_f6a9eb",
        body: "body_f6a9eb",
        art: "art_f6a9eb",
        modalContent: "modalContent_f6a9eb",
      };
    },
  },
]);
//# sourceMappingURL=c707ac4a55f2b0e7585f.js.map
