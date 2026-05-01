"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71482"],
  {
    43105(e, t, a) {
      a.d(t, { A: () => p, h: () => x });
      var l = a(627968),
        n = a(64700),
        i = a(503698),
        s = a.n(i),
        r = a(353795),
        o = a(312640),
        c = a(208756),
        d = a(798618),
        g = a(916845),
        h = a(627330),
        u = a(824078);
      function p(e) {
        let {
            title: t,
            body: a,
            badge: i,
            graphic: p,
            size: x = "md",
            actions: m,
            textLink: j,
            gradientColor: k,
            onRequestClose: C,
            popoverRef: v,
            position: b,
            caretConfig: f,
            scrollBehavior: R,
            ...S
          } = e,
          w = n.useCallback(
            (e, t) => {
              C?.(t);
            },
            [C],
          ),
          y = n.useCallback(() => {
            C?.("user:explicit");
          }, [C]),
          q = {
            targetElementRef: S.targetElementRef,
            shouldShow: S.shouldShow,
            hasVideo: S.hasVideo,
            position: b,
            caretConfig: f,
            onRequestClose: w,
            gradientColor: k,
            scrollBehavior: R,
            ...("edge" === S.alignmentStrategy
              ? { alignmentStrategy: "edge", align: S.align }
              : { alignmentStrategy: "trigger-center" }),
          };
        return (0, l.jsx)(o.x, {
          ...q,
          children: (0, l.jsxs)("div", {
            ref: v,
            "data-mana-component": "popover",
            children: [
              (0, l.jsx)(g.q, {
                onClick: y,
                variant: null != k ? "color-mix" : void 0,
              }),
              null != p &&
                (0, l.jsx)("div", {
                  className: s()(u.graphic, {
                    [u[`graphic--${x}`]]: null != x,
                  }),
                  children: (0, l.jsx)(r.v, {
                    ...p,
                    aspectRatio: p.aspectRatio ?? ("sm" === x ? "2/1" : "16/9"),
                  }),
                }),
              (0, l.jsx)(h.D, { title: t, body: a, badge: i, textLink: j }),
              null != m && m.length > 0
                ? (0, l.jsx)(c.Z, { actions: m })
                : null,
              (0, l.jsx)(d.F, {}),
            ],
          }),
        });
      }
      let x = 21552 == a.j ? p : null;
    },
  },
]);
//# sourceMappingURL=71482.25a518668e545afc.js.map
