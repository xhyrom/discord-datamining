"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18401"],
  {
    459192(e, t, l) {
      l.d(t, { u: () => f });
      var n = l(627968),
        i = l(64700),
        s = l(503698),
        a = l.n(s),
        r = l(140735),
        c = l(353795),
        o = l(834730),
        u = l(750506),
        d = l(237140),
        h = l(112317),
        m = l(348275),
        p = l(505679),
        x = l(521754),
        j = l(600525);
      function f(e) {
        let {
            children: t,
            title: l,
            body: s,
            asset: f,
            assetSize: g = 48,
            padding: E = "default",
            asContainer: v = !1,
            element: y = "span",
            position: R = "top",
            align: b = "center",
            spacing: k,
            caretConfig: C,
            layerContext: w,
            targetElementRef: S,
            anchorRef: N,
            positionKey: T,
            ariaHidden: V = !1,
            ..._
          } = e,
          [K, P] = i.useState(null);
        i.useLayoutEffect(() => {
          null != N && P(N.current);
        }, [N]);
        let X = i.useCallback(
            (e) => {
              null == N && P(e), (0, m.cZ)(S, e);
            },
            [S, N],
          ),
          {
            tooltipId: $,
            isVisible: A,
            targetElementRef: B,
            trigger: D,
          } = (0, x.D)({
            children: t,
            targetElementRef: X,
            asContainer: v,
            containerTag: y,
            ariaHidden: V,
            ..._,
          }),
          F = null != l && ("string" != typeof l || "" !== l),
          L = null != f && !i.isValidElement(f),
          M = i.useMemo(
            () =>
              (0, n.jsxs)("div", {
                className: a()(j.jk, { [j.eb]: null == f, [j.Sx]: "lg" === E }),
                children: [
                  null != f &&
                    (0, n.jsx)("div", {
                      className: j.s,
                      style: { width: g },
                      children: L ? (0, n.jsx)(c.v, { ...f }) : f,
                    }),
                  (0, n.jsxs)("div", {
                    className: j.P_,
                    children: [
                      F &&
                        (0, n.jsx)(o.E, {
                          variant: "text-sm/medium",
                          children: l,
                        }),
                      (0, n.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: F ? "text-subtle" : "text-default",
                        children: s,
                      }),
                    ],
                  }),
                ],
              }),
            [f, g, E, l, s, F, L],
          ),
          Y = T ?? `${(0, m.Xj)(l ?? "")}|${(0, m.Xj)(s)}`,
          Z = (0, p.j)({ shouldShow: A });
        if (!v && !i.isValidElement(t)) return null;
        let q = Z((e, t) =>
          t
            ? (0, n.jsx)(h.Bc, {
                isRichTooltip: !0,
                richTooltipPadding: E,
                children: (0, n.jsx)(d.R, {
                  isVisible: A,
                  isRendered: !0,
                  targetElementRef: B,
                  targetElement: K,
                  anchorRef: N,
                  id: $,
                  content: M,
                  position: R,
                  align: b,
                  spacing: k,
                  caretConfig: C,
                  layerContext: w ?? u.uY,
                  animationStyle: e,
                  positionKey: Y,
                  "data-mana-component": "rich-tooltip",
                }),
              })
            : null,
        );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            D,
            V || null == M ? null : (0, n.jsx)(r.A, { id: $, children: M }),
            q,
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=18401.217ce61c12f2f53c.js.map
