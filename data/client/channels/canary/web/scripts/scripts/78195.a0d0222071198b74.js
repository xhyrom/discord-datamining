"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78195"],
  {
    396478(e, s, l) {
      l.d(s, { G8: () => C, SG: () => x, pp: () => g });
      var i = l(627968),
        n = l(64700),
        r = l(503698),
        t = l.n(r),
        c = l(462887),
        a = l(707554),
        d = l(235986),
        u = l(652215),
        o = l(352709),
        h = l(818050);
      let { Provider: p, Consumer: A } = n.createContext(u.NJ8.DARK);
      class C extends n.PureComponent {
        render() {
          let {
            lightSrc: e,
            darkSrc: s,
            width: l,
            height: n,
            offsetX: r,
            offsetY: a,
            style: u,
          } = this.props;
          return (0, i.jsx)(A, {
            children: (p) =>
              (0, i.jsx)(d.A.Child, {
                grow: 0,
                className: t()(o.Sl, h.C2),
                style: {
                  ...u,
                  width: l,
                  height: n,
                  marginLeft: r,
                  marginTop: a,
                  backgroundImage: `url(${(0, c.M)(p) ? s : e})`,
                },
              }),
          });
        }
      }
      let x = (e) => {
        let {
          children: s,
          className: l,
          noteClassName: n,
          note: r,
          style: c,
        } = e;
        return (0, i.jsxs)(d.A.Child, {
          grow: 0,
          direction: d.A.Direction.VERTICAL,
          style: c,
          children: [
            null != s &&
              (0, i.jsx)(a.H, { className: t()(l, o.DD), children: s }),
            null != r
              ? (0, i.jsx)("div", {
                  className: t()(n, o.Qq, h.Ot),
                  children: r,
                })
              : null,
          ],
        });
      };
      function g(e) {
        let { children: s, theme: l, className: n, style: r } = e;
        return (0, i.jsx)(p, {
          value: l,
          children: (0, i.jsx)(d.A, {
            direction: d.A.Direction.VERTICAL,
            align: d.A.Align.CENTER,
            justify: d.A.Justify.CENTER,
            className: t()(o.iE, n),
            style: r,
            children: s,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=78195.a0d0222071198b74.js.map
