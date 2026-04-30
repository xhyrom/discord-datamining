"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44385"],
  {
    598104(a, i, e) {
      e.d(i, { A: () => c });
      var s = e(627968),
        r = e(64700),
        n = e(97808),
        l = e(571694),
        t = e(954376);
      let c = r.memo(function (a) {
        let {
          channel: i,
          size: e,
          facepileSizeOverride: r,
          isTyping: c,
          status: d,
          className: p,
          animated: h = !1,
          ...u
        } = a;
        return i.recipients.length >= 2 && null == i.icon
          ? (0, s.jsx)(t.A, {
              "aria-label": u["aria-label"],
              "aria-hidden": u["aria-hidden"],
              className: p,
              recipients: i.recipients,
              size: r ?? e,
              isTyping: c,
              status: d,
            })
          : (0, s.jsx)(n.eu, {
              "aria-hidden": u["aria-hidden"],
              "aria-label": u["aria-label"],
              className: p,
              size: e,
              src: (0, l.Y)(i, 80, h),
            });
      });
    },
  },
]);
//# sourceMappingURL=44385.c3dd7d3b1b7bf41c.js.map
