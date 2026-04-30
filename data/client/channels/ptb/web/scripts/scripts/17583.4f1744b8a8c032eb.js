"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17583"],
  {
    559506(r, e, n) {
      n.d(e, { A: () => a });
      var t = n(627968);
      n(64700);
      var i = n(17928),
        s = n(683071),
        l = n(922590),
        c = n(841595),
        h = n(985018);
      function a(r) {
        let { userId: e, className: n } = r,
          a = (0, l.f1)(e),
          d = (0, l.fi)(e),
          p = (0, i.bG)([c.A], () => c.A.getUserProfile(e)?.fetchError);
        return a.length > 0 || d.length > 0 || null == p
          ? null
          : (0, t.jsx)("div", {
              className: n,
              children: (0, t.jsx)(s.w, {
                type: "warning",
                children: h.intl.string(h.t.L9wE7H),
              }),
            });
      }
    },
  },
]);
//# sourceMappingURL=17583.4f1744b8a8c032eb.js.map
