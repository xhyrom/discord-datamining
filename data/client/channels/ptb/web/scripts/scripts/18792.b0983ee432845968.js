"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18792"],
  {
    95035(e, t, a) {
      a.d(t, { A: () => u });
      var r = a(627968),
        l = a(64700),
        n = a(187322),
        s = a(976860),
        p = a(650583);
      let u = l.forwardRef(function (e, t) {
        let {
            href: a,
            children: u,
            onClick: c,
            onKeyPress: h,
            focusProps: i,
            transitionExtras: d,
            ...o
          } = e,
          k = l.useCallback(
            (e) => {
              e.repeat ||
                ((e.key === p.dh.SPACE || e.key === p.dh.ENTER) &&
                  (e.preventDefault(), null != a && (0, s.pX)(a, d), c?.()),
                h?.(e));
            },
            [a, h, c, d],
          ),
          f = l.useCallback(
            (e) => {
              e.metaKey ||
                e.shiftKey ||
                0 !== e.button ||
                (e.preventDefault(),
                e.stopPropagation(),
                null != a && (0, s.pX)(a, d),
                c?.());
            },
            [a, c, d],
          ),
          C = (0, r.jsx)("a", {
            ref: t,
            href: a,
            onClick: f,
            onKeyPress: k,
            ...o,
            children: u,
          });
        return (0, r.jsx)(n.vN, { ...i, children: C });
      });
    },
  },
]);
//# sourceMappingURL=18792.b0983ee432845968.js.map
