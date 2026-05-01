"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28154"],
  {
    73473(e, t, r) {
      r.d(t, { R: () => o });
      var s = r(64700),
        a = r(172218),
        i = r(323889),
        d = r(17928),
        n = r(475743),
        p = r(531685),
        u = r(954243),
        c = r(971649);
      r(23766);
      let o = s.memo(function (e) {
        let t,
          r,
          o,
          { focused: C, focusedChanged: k } =
            ((t = (0, d.bG)([p.A], () => p.A.isFocused())),
            (r = (0, n.A)(t)),
            (o = t !== r),
            { focused: t, focusedChanged: o }),
          {
            visible: l,
            visibleChanged: y,
            reference: h,
          } = ((e) => {
            let [t, r] = s.useState(!1),
              i = e ?? t,
              d = i !== (0, n.A)(i);
            return {
              visible: i,
              visibleChanged: d,
              reference: (0, a.K)((e) => r(e), 0.5),
            };
          })(e.overrideVisibility),
          { key: v, adContentIds: b } = (0, c.RC)(e),
          m = {
            ...e,
            focused: C,
            focusedChanged: k,
            visible: l,
            visibleChanged: y,
            reference: h,
          };
        return "questOrQuests" in e
          ? (0, s.createElement)(u.xs, {
              ...m,
              key: v,
              adContentIds: b,
              adCreativeType: i.p.QUEST,
            })
          : (0, s.createElement)(u.xs, {
              ...m,
              key: v,
              adContentIds: b,
              adCreativeType: e.adCreativeType,
            });
      });
    },
  },
]);
//# sourceMappingURL=28154.bc024ada5069c7cb.js.map
