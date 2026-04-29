"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12755"],
  {
    754302(s, e, r) {
      r.d(e, { B: () => m, q: () => o });
      var a = r(627968);
      r(64700);
      var l = r(503698),
        c = r.n(l),
        i = r(947641),
        n = r(534514),
        t = r(834730),
        d = r(430345);
      function o(s) {
        let { children: e } = s;
        return (0, a.jsx)("div", {
          className: d.MD,
          children: (0, a.jsx)("div", { className: d.Qs, children: e }),
        });
      }
      function m(s) {
        let {
          icon: e,
          title: r,
          description: l,
          iconClassName: o,
          color: m,
          listType: u = "icon",
          completed: x = !1,
          index: h,
        } = s;
        return (0, a.jsxs)("div", {
          className: d.Hn,
          children: [
            (() => {
              if ("numbered" === u && null != h)
                if (x)
                  return (0, a.jsx)("div", {
                    className: d.ai,
                    children: (0, a.jsx)(i.r, {
                      color: "green",
                      className: c()(d.Kk, o),
                    }),
                  });
                else
                  return (0, a.jsx)(n.D, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    className: d.ai,
                    children: h + 1,
                  });
              if (null != e)
                return (0, a.jsx)("div", {
                  className: d.zc,
                  children: (0, a.jsx)(e, {
                    color: m ?? "currentColor",
                    className: c()(d.Kk, o),
                  }),
                });
            })(),
            (0, a.jsxs)("div", {
              className: d.FS,
              children: [
                (0, a.jsx)(t.E, {
                  variant: "text-md/semibold",
                  color: "text-strong",
                  className: c()({ [d.VA]: x }),
                  children: r,
                }),
                null != l &&
                  (0, a.jsx)(t.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: c()({ [d.VA]: x }),
                    children: l,
                  }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=12755.68dd916d42ca578d.js.map
