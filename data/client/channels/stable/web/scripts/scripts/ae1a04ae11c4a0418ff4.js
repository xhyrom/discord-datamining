"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16133"],
  {
    641472: function (e) {
      e.exports = "/assets/01c9a2f439b865af3c18.png";
    },
    743648: function (e, a, t) {
      t.r(a);
      var d = t(200651);
      t(192379);
      var s = t(120356),
        c = t.n(s),
        n = t(793030),
        i = t(481060),
        r = t(313201),
        l = t(471309),
        o = t(976465),
        b = t(474936),
        g = t(388032),
        m = t(353806);
      a.default = (e) => {
        let { transitionState: a, onClose: t } = e,
          s = (0, r.Dt)(),
          { version: x } = (0, l.Z)(),
          u = Object.values(b.VU).map((e) => {
            let a = (0, o.f9)(e, x),
              t = (0, o.g_)(e, x),
              s = (0, o.sf)(e);
            return (0, d.jsxs)(
              "div",
              {
                className: c()(m.badge, { [m.badgeV2]: 2 === x }),
                children: [
                  (0, d.jsx)("img", {
                    src: t,
                    alt: a,
                    className: m.badgeImage,
                  }),
                  (0, d.jsxs)("div", {
                    className: c()(m.badgeText, { [m.badgeTextV2]: 2 === x }),
                    children: [
                      (0, d.jsx)(n.xv, {
                        variant: "text-md/semibold",
                        className: m.badgeName,
                        children: a,
                      }),
                      (0, d.jsx)(n.xv, {
                        variant: "text-xs/normal",
                        children: s,
                      }),
                    ],
                  }),
                ],
              },
              e,
            );
          });
        return (0, d.jsxs)(i.ModalRoot, {
          transitionState: a,
          "aria-labelledby": s,
          className: c()(m.container, "theme-dark"),
          children: [
            (0, d.jsx)(i.ModalCloseButton, {
              onClick: t,
              className: m.closeButton,
            }),
            (0, d.jsxs)(i.ModalContent, {
              className: m.content,
              children: [
                (0, d.jsx)(n.xv, {
                  variant: "display-md",
                  className: m.header,
                  children: g.intl.string(g.t["rmUN7+"]),
                }),
                (0, d.jsx)(n.xv, {
                  variant: "text-md/medium",
                  className: m.subHeader,
                  children: g.intl.string(g.t.OI50am),
                }),
                (0, d.jsx)("div", { className: m.badgeList, children: u }),
              ],
            }),
          ],
        });
      };
    },
    353806: function (e, a, t) {
      e.exports = {
        container: "container_d0ec10",
        closeButton: "closeButton_d0ec10",
        content: "content_d0ec10",
        header: "header_d0ec10",
        subHeader: "subHeader_d0ec10",
        badge: "badge_d0ec10",
        badgeV2: "badgeV2_d0ec10",
        badgeImage: "badgeImage_d0ec10",
        badgeText: "badgeText_d0ec10",
        badgeTextV2: "badgeTextV2_d0ec10",
        badgeName: "badgeName_d0ec10",
        badgeList: "badgeList_d0ec10",
      };
    },
  },
]);
//# sourceMappingURL=ae1a04ae11c4a0418ff4.js.map
