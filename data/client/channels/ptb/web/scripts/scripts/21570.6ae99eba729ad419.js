"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21570"],
  {
    993401(e, a, n) {
      n.d(a, { FD: () => C, br: () => m, q3: () => b, rE: () => x });
      var i = n(627968);
      n(64700);
      var r = n(503698),
        s = n.n(r),
        t = n(990078),
        o = n(939249),
        l = n(821609),
        c = n(408278),
        u = n(289873),
        d = n(183555),
        p = n(318590);
      function x(e) {
        let { action: a, onClick: n } = e,
          { trackUserProfileAction: i } = (0, d.NJ)();
        return (e) => {
          null != a && i({ action: a }), n?.(e);
        };
      }
      function C(e) {
        let {
            action: a,
            onClick: n,
            variant: r = "secondary",
            size: s = "sm",
            ...t
          } = e,
          o = x({ action: a, onClick: n });
        return (0, i.jsx)(l.$, { onClick: o, variant: r, size: s, ...t });
      }
      function b(e) {
        let {
            action: a,
            onClick: n,
            variant: r = "secondary",
            size: s = "sm",
            "aria-label": o,
            tooltipText: l,
            __unsupportedReactNodeAsText: u,
            tooltipPosition: d,
            tooltipAlign: p,
            buttonRef: C,
            ...b
          } = e,
          m = x({ action: a, onClick: n }),
          N = o ?? l;
        return (0, i.jsx)(t.m, {
          asContainer: !0,
          targetElementRef: C,
          text: l,
          __unsupportedReactNodeAsText: u,
          position: d,
          align: p,
          ariaHidden: N === l,
          children: (0, i.jsx)(c.K, {
            onClick: m,
            variant: r,
            size: s,
            "aria-label": N,
            ...b,
          }),
        });
      }
      function m(e) {
        let {
            icon: a,
            tooltipText: n,
            __unsupportedReactNodeAsText: r,
            tooltipPosition: l,
            tooltipAlign: c,
            "aria-label": d,
            action: C,
            onClick: b,
            buttonRef: m,
            disabled: N = !1,
            onMouseEnter: h,
            onMouseLeave: j,
            loading: k = !1,
            ..._
          } = e,
          f = x({ action: C, onClick: b }),
          v = d ?? n;
        return (0, i.jsx)(t.m, {
          asContainer: !0,
          text: n,
          __unsupportedReactNodeAsText: r,
          position: l,
          align: c,
          ariaHidden: v === n,
          children: (0, i.jsx)(o.D, {
            innerRef: m,
            className: s()(p.Xc, { [p.r9]: N }),
            onClick: f,
            "aria-label": v,
            "aria-disabled": N,
            "aria-busy": k,
            onMouseEnter: h,
            onMouseLeave: j,
            ..._,
            children: k
              ? (0, i.jsx)(u.y, {
                  className: p.u1,
                  itemClassName: p.KL,
                  type: u.t.SPINNING_CIRCLE,
                })
              : (0, i.jsx)(a, { size: "xs", color: "currentColor" }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=21570.6ae99eba729ad419.js.map
