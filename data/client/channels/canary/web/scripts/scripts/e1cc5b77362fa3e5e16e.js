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
      var n = i(735250),
        a = i(470079),
        r = i(481060),
        s = i(44315),
        o = i(745510),
        d = i(981631),
        u = i(689938),
        c = i(787724);
      function h(e) {
        let { onClose: t, initialPercent: i, numActions: h } = e,
          [l, p] = a.useState(i),
          { createMultipleConfetti: m } = a.useContext(o.h);
        return (
          a.useEffect(() => {
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
              (0, n.jsx)(r.Heading, {
                className: c.heading,
                variant: "heading-xl/semibold",
                color: "header-primary",
                children:
                  u.Z.Messages.MEMBER_ACTION_COMPLETE_MODAL_TEXT_WITH_COUNT.format(
                    { count: h },
                  ),
              }),
              (0, n.jsx)(r.Progress, {
                foregroundGradientColor: [
                  (0, s.Lq)(d.Ilk.GREEN_300),
                  (0, s.Lq)(d.Ilk.GREEN_230),
                ],
                percent: 100 * l,
                animate: !0,
              }),
            ],
          })
        );
      }
    },
    787724: function (e, t, i) {
      e.exports = { heading: "heading_b6f065" };
    },
  },
]);
//# sourceMappingURL=e1cc5b77362fa3e5e16e.js.map
