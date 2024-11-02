"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16133"],
  {
    641472: function (e) {
      e.exports = "/assets/01c9a2f439b865af3c18.png";
    },
    743648: function (e, a, s) {
      s.r(a);
      var t = s(200651);
      s(192379);
      var d = s(120356),
        c = s.n(d),
        n = s(793030),
        i = s(481060),
        r = s(313201),
        l = s(976465),
        o = s(474936),
        m = s(388032),
        b = s(707707);
      a.default = (e) => {
        let { transitionState: a, onClose: s } = e,
          d = (0, r.Dt)(),
          x = Object.values(o.VU).map((e) => {
            let a = (0, l.f9)(e),
              s = (0, l.g_)(e),
              d = (0, l.sf)(e);
            return (0, t.jsxs)(
              "div",
              {
                className: b.badge,
                children: [
                  (0, t.jsx)("img", {
                    src: s,
                    alt: a,
                    className: b.badgeImage,
                  }),
                  (0, t.jsxs)("div", {
                    className: b.badgeText,
                    children: [
                      (0, t.jsx)(n.xv, {
                        variant: "text-md/semibold",
                        className: b.badgeName,
                        children: a,
                      }),
                      (0, t.jsx)(n.xv, {
                        variant: "text-xs/normal",
                        children: d,
                      }),
                    ],
                  }),
                ],
              },
              e,
            );
          });
        return (0, t.jsxs)(i.ModalRoot, {
          transitionState: a,
          "aria-labelledby": d,
          className: c()(b.container, "theme-dark"),
          children: [
            (0, t.jsx)(i.ModalCloseButton, {
              onClick: s,
              className: b.closeButton,
            }),
            (0, t.jsxs)(i.ModalContent, {
              className: b.content,
              children: [
                (0, t.jsx)(n.xv, {
                  variant: "display-md",
                  className: b.header,
                  children: m.intl.string(m.t["rmUN7+"]),
                }),
                (0, t.jsx)(n.xv, {
                  variant: "text-md/medium",
                  className: b.subHeader,
                  children: m.intl.string(m.t.OI50am),
                }),
                (0, t.jsx)("div", { className: b.badgeList, children: x }),
              ],
            }),
          ],
        });
      };
    },
    707707: function (e, a, s) {
      e.exports = {
        container: "container_d0ec10",
        closeButton: "closeButton_d0ec10",
        content: "content_d0ec10",
        header: "header_d0ec10",
        subHeader: "subHeader_d0ec10",
        badge: "badge_d0ec10",
        badgeImage: "badgeImage_d0ec10",
        badgeText: "badgeText_d0ec10",
        badgeName: "badgeName_d0ec10",
        badgeList: "badgeList_d0ec10",
      };
    },
  },
]);
//# sourceMappingURL=f690f5a87aaa1e1464b7.js.map
