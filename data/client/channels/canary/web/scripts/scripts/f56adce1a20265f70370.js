"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18367"],
  {
    221886: function (t) {
      t.exports = "/assets/3268d2ce678433b061d0.png";
    },
    557751: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          },
        });
      var a = e(200651);
      e(192379);
      var i = e(481060),
        r = e(701488),
        o = e(388032),
        s = e(752753),
        l = e(221886);
      function c(t) {
        let { application: n, onCancel: e, onClose: c, onConfirm: d, ...u } = t;
        return (0, a.jsxs)(i.ModalRoot, {
          role: "alertdialog",
          transitionState: u.transitionState,
          className: s.modalRoot,
          children: [
            (0, a.jsx)("div", {
              className: s.birbContainer,
              children: (0, a.jsx)("img", {
                src: l,
                className: s.announcementBirb,
                alt: o.intl.string(o.t.ElsOBA),
              }),
            }),
            (0, a.jsxs)(i.ModalContent, {
              className: s.modalContent,
              children: [
                (0, a.jsx)(i.Text, {
                  variant: "eyebrow",
                  className: s.eyebrow,
                  children: o.intl.string(o.t["06YebG"]),
                }),
                (0, a.jsx)(i.Heading, {
                  variant: "heading-lg/bold",
                  className: s.header,
                  children: o.intl.format(o.t["Z/eMDQ"], {
                    activityName: n.name,
                  }),
                }),
                (0, a.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  className: s.subHeader,
                  children: o.intl.string(o.t.z81WwM),
                }),
                (0, a.jsxs)("div", {
                  className: s.buttonContainer,
                  children: [
                    (0, a.jsx)(i.Button, {
                      size: i.Button.Sizes.LARGE,
                      onClick: () => {
                        d(), c();
                      },
                      children: o.intl.string(o.t["3PatS0"]),
                    }),
                    (0, a.jsx)(i.Button, {
                      size: i.Button.Sizes.LARGE,
                      onClick: () => {
                        e(), c();
                      },
                      color: i.Button.Colors.PRIMARY,
                      children: o.intl.string(o.t["ETE/oK"]),
                    }),
                    (0, a.jsx)(i.Text, {
                      variant: "text-xs/normal",
                      children: (0, a.jsx)(i.Anchor, {
                        href: r.OF,
                        children: o.intl.string(o.t.E0gf5u),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    752753: function (t, n, e) {
      t.exports = {
        modalRoot: "modalRoot_c34046",
        birbContainer: "birbContainer_c34046",
        announcementBirb: "announcementBirb_c34046",
        modalContent: "modalContent_c34046",
        eyebrow: "eyebrow_c34046",
        header: "header_c34046",
        subHeader: "subHeader_c34046",
        buttonContainer: "buttonContainer_c34046",
      };
    },
  },
]);
//# sourceMappingURL=f56adce1a20265f70370.js.map
