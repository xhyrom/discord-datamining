"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86256"],
  {
    847641(s, e, t) {
      t.d(e, { A: () => u });
      var a = t(627968);
      t(64700);
      var r = t(503698),
        n = t.n(r),
        i = t(462887),
        l = t(834730),
        c = t(736653),
        d = t(985018),
        o = t(754912);
      let u = function (s) {
        let {
            className: e,
            color: t = "text-strong",
            textOpacity: r = 0.9,
          } = s,
          u = (0, c.DP)(),
          x = (0, i.M)(u);
        return (0, a.jsxs)(l.E, {
          variant: "text-xxs/medium",
          color: t,
          className: n()(o.P, e),
          children: [
            (0, a.jsx)("span", {
              className: o.r,
              style: { backgroundColor: `rgba(0, 0, 0, ${x ? 0.2 : 0.08})` },
            }),
            (0, a.jsx)("span", {
              style: { opacity: r },
              children: d.intl.string(d.t.o6FLcF),
            }),
          ],
        });
      };
    },
    311243(s, e, t) {
      t.d(e, { A: () => p });
      var a = t(627968);
      t(64700);
      var r = t(503698),
        n = t.n(r),
        i = t(834730),
        l = t(838077),
        c = t(890687),
        d = t(895253),
        o = t(442734),
        u = t(646764),
        x = t(417386);
      let p = function (s) {
        let {
            className: e,
            autoplay: t,
            quest: r,
            questContent: p,
            taskDetails: h,
            location: m,
            sourceQuestContent: j,
            gameProfileSource: v,
          } = s,
          b = (0, l.mU)({
            quest: r,
            taskDetails: h,
            location: m,
            questContent: p,
            sourceQuestContent: j,
            gameProfileSource: v,
          }),
          C = (0, c.SD)(r),
          N = (0, c.Oq)(),
          k = C && N;
        return (0, a.jsxs)("div", {
          className: n()(x.iE, e),
          children: [
            (0, a.jsx)(d.A, { visible: k }),
            (0, a.jsx)(u.A, {
              autoplay: t,
              className: x.Qq,
              quest: r,
              questContent: p,
              sourceQuestContent: j,
            }),
            (0, a.jsx)("div", {
              className: x.C,
              children: (0, a.jsxs)("div", {
                className: x.P2,
                children: [
                  (0, a.jsx)(i.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: b,
                  }),
                  C &&
                    (0, a.jsx)(o.e, {
                      questId: r.id,
                      canUseQuestOrbMultiplier: N,
                    }),
                ],
              }),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=86256.f252111d559798d7.js.map
