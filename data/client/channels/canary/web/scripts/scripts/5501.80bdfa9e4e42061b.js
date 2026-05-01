"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5501"],
  {
    502572(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(627968),
        r = n(64700),
        s = n(781696);
      function u(e) {
        let { mouseLeaveDelay: t = 100, ...n } = e,
          { children: u, className: c, ...o } = n,
          a = r.useRef(0),
          [d, p] = r.useState(!1);
        return (0, i.jsx)("div", {
          className: c,
          onMouseEnter:
            0 !== t
              ? function () {
                  clearTimeout(a.current), p(!0);
                }
              : () => {},
          onMouseLeave:
            0 !== t
              ? function () {
                  clearTimeout(a.current),
                    (a.current = setTimeout(() => p(!1), t));
                }
              : () => {},
          children: (0, i.jsx)(s.ST, {
            "data-migration-pending": !0,
            forceOpen: d,
            disableTooltipPointerEvents: !1,
            ...o,
            children: u,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=5501.80bdfa9e4e42061b.js.map
