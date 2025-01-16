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
        n = t.n(s),
        c = t(793030),
        i = t(481060),
        r = t(313201),
        l = t(553896),
        o = t(848572),
        b = t(787528),
        g = t(388032),
        m = t(526827);
      a.default = (e) => {
        let { transitionState: a, onClose: t } = e,
          s = (0, r.Dt)(),
          x = (0, o.j_)().map((e) => {
            let {
                id: a,
                badgeVersion: t,
                nameUnformatted: s,
                tenureReqNumMonths: i,
              } = e,
              r = g.intl.string(s),
              o = (0, b.J)(a),
              x = (0, l.q)(a, i);
            return (0, d.jsxs)(
              "div",
              {
                className: n()(m.badge, { [m.badgeV2]: 2 === t }),
                children: [
                  (0, d.jsx)("img", {
                    src: o,
                    alt: r,
                    className: m.badgeImage,
                  }),
                  (0, d.jsxs)("div", {
                    className: n()(m.badgeText, { [m.badgeTextV2]: 2 === t }),
                    children: [
                      (0, d.jsx)(c.xv, {
                        variant: "text-md/semibold",
                        className: m.badgeName,
                        children: r,
                      }),
                      (0, d.jsx)(c.xv, {
                        variant: "text-xs/normal",
                        children: x,
                      }),
                    ],
                  }),
                ],
              },
              a,
            );
          });
        return (0, d.jsxs)(i.ModalRoot, {
          transitionState: a,
          "aria-labelledby": s,
          className: n()(m.container, "theme-dark"),
          children: [
            (0, d.jsx)(i.ModalCloseButton, {
              onClick: t,
              className: m.closeButton,
            }),
            (0, d.jsxs)(i.ModalContent, {
              className: m.content,
              children: [
                (0, d.jsx)(c.xv, {
                  variant: "display-md",
                  className: m.header,
                  children: g.intl.string(g.t["rmUN7+"]),
                }),
                (0, d.jsx)(c.xv, {
                  variant: "text-md/medium",
                  className: m.subHeader,
                  children: g.intl.string(g.t.OI50am),
                }),
                (0, d.jsx)("div", { className: m.badgeList, children: x }),
              ],
            }),
          ],
        });
      };
    },
    526827: function (e, a, t) {
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
//# sourceMappingURL=711763d9d0d647af7176.js.map
