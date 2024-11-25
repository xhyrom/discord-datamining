"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18879"],
  {
    535278: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        r = n(313201),
        o = n(388032),
        l = n(38719),
        s = n(365627);
      function d(t) {
        let {
            transitionState: e,
            onClose: n,
            storeListing: d,
            subscription: c,
          } = t,
          u = (0, r.Dt)();
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: e,
          "aria-labelledby": u,
          children: [
            (0, i.jsxs)(a.ModalContent, {
              className: l.contentContainer,
              children: [
                (0, i.jsx)("img", { src: s, alt: "" }),
                (0, i.jsx)(a.Heading, {
                  className: l.title,
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  id: u,
                  children: o.intl.format(o.t["wLFT6+"], { tier: d.summary }),
                }),
                (0, i.jsx)(a.Text, {
                  className: l.subtitle,
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: o.intl.format(o.t.OsAK9v, {
                    timestamp: null == c ? void 0 : c.currentPeriodEnd,
                  }),
                }),
              ],
            }),
            (0, i.jsx)(a.ModalFooter, {
              children: (0, i.jsx)(a.Button, {
                size: a.Button.Sizes.MEDIUM,
                grow: !1,
                onClick: n,
                children: o.intl.string(o.t["JtWl+f"]),
              }),
            }),
          ],
        });
      }
    },
    38719: function (t, e, n) {
      t.exports = {
        contentContainer: "contentContainer_babb36",
        title: "title_babb36",
        subtitle: "subtitle_babb36",
      };
    },
  },
]);
//# sourceMappingURL=b8583218b7b565eec896.js.map
