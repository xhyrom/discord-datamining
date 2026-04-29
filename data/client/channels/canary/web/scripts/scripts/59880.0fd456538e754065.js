"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59880"],
  {
    366523(a, e, s) {
      s.d(e, { A: () => d, e: () => m });
      var r = s(627968),
        t = s(64700),
        n = s(310784),
        l = s.n(n),
        u = s(503698),
        i = s.n(u),
        c = s(654107),
        g = s(871123),
        o = s(705452);
      function d(a) {
        let {
            cardImage: e,
            cardBackgroundImage: s,
            altText: n,
            containerClassName: u,
            backgroundImageClassName: g,
            foregroundImageClassName: d,
            shape: m,
            cssPosition: h = "relative",
          } = a,
          [p, b] = (0, c.rh)(e.toString(), "#000000"),
          k = t.useMemo(() => {
            let a = l()(p).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
              e = b ?? l()(p).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${a}, ${e})`;
          }, [p, b]);
        return (0, r.jsxs)("div", {
          className: i()(
            o.Ui,
            "absolute" === h ? o.tz : o.oG,
            { [o.Ew]: "square" === m },
            u,
          ),
          children: [
            (0, r.jsx)("div", {
              className: i()(o.GC, g),
              style:
                null != s
                  ? { backgroundImage: `url(${s.toString()})` }
                  : { backgroundImage: k },
            }),
            (0, r.jsx)("img", {
              src: e.toString(),
              alt: n,
              draggable: !1,
              className: i()(o.LC, { [o.Ew]: "square" === m }, d),
            }),
          ],
        });
      }
      function m(a) {
        let {
            sku: e,
            containerClassName: s,
            backgroundImageClassName: t,
            foregroundImageClassName: n,
            shape: l,
            cssPosition: u,
          } = a,
          i = (0, g.fq)(e),
          c = (0, g.xf)(e);
        return null == i
          ? null
          : (0, r.jsx)(d, {
              cardImage: i,
              cardBackgroundImage: c,
              altText: e.name,
              containerClassName: s,
              backgroundImageClassName: t,
              foregroundImageClassName: n,
              shape: l,
              cssPosition: u,
            });
      }
    },
  },
]);
//# sourceMappingURL=59880.0fd456538e754065.js.map
