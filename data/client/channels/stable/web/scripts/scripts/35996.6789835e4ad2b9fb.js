"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35996"],
  {
    262295(s, e, a) {
      a.d(e, { A: () => n });
      var l = a(627968),
        d = a(64700),
        i = a(503698),
        c = a.n(i),
        r = a(195462);
      let h = d.forwardRef((s, e) => {
        let {
          muted: a = !1,
          highlighted: d = !1,
          avatar: i,
          decorators: h,
          name: n,
          subText: t,
          avatarClassName: m,
          innerClassName: p,
          withDisplayNameStyles: v = !1,
        } = s;
        return (0, l.jsxs)("div", {
          ref: e,
          className: c()(r.Zp, p, { [r.SU]: a, [r.mr]: d }),
          children: [
            (0, l.jsx)("div", { className: c()(r.my, m), children: i }),
            (0, l.jsxs)("div", {
              className: c()(r.Qs, { [r.e8]: v }),
              children: [
                (0, l.jsxs)("div", {
                  className: r.BG,
                  children: [
                    (0, l.jsx)("div", { className: r.UU, children: n }),
                    h,
                  ],
                }),
                null != t
                  ? (0, l.jsx)("div", { className: r.Sv, children: t })
                  : null,
              ],
            }),
          ],
        });
      });
      h.displayName = "AvatarWithText";
      let n = h;
    },
  },
]);
//# sourceMappingURL=35996.6789835e4ad2b9fb.js.map
