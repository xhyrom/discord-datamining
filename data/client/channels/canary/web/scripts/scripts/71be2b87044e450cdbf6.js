"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92339"],
  {
    184100: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return h;
          },
        }),
        i(47120);
      var n = i(200651),
        r = i(192379),
        a = i(481060),
        o = i(44315),
        s = i(745510),
        d = i(981631),
        u = i(388032),
        c = i(982592);
      function h(e) {
        let { onClose: t, initialPercent: i, numActions: h } = e,
          [l, p] = r.useState(i),
          { createMultipleConfetti: m } = r.useContext(s.h);
        return (
          r.useEffect(() => {
            setTimeout(() => p(1), 200),
              setTimeout(() => {
                let e = window.innerWidth / 2,
                  t = window.innerHeight / 2;
                m(
                  {
                    position: {
                      type: "static-random",
                      minValue: { x: e - 5, y: t - 5 },
                      maxValue: { x: e + 5, y: t + 5 },
                    },
                  },
                  25,
                );
              }, 700),
              setTimeout(t, 2e3);
          }, [m, t]),
          (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(a.Heading, {
                className: c.heading,
                variant: "heading-xl/semibold",
                color: "header-primary",
                children: u.intl.format(u.t.pGj5u7, { count: h }),
              }),
              (0, n.jsx)(a.Progress, {
                foregroundGradientColor: [
                  (0, o.Lq)(d.Ilk.GREEN_300),
                  (0, o.Lq)(d.Ilk.GREEN_230),
                ],
                percent: 100 * l,
                animate: !0,
              }),
            ],
          })
        );
      }
    },
    982592: function (e, t, i) {
      e.exports = { heading: "heading_b6f065" };
    },
  },
]);
//# sourceMappingURL=71be2b87044e450cdbf6.js.map
