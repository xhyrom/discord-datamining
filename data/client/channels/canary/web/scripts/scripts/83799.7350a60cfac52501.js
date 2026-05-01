"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83799"],
  {
    417098(e, r, n) {
      n.d(r, {
        $T: () => I,
        Hv: () => C,
        PM: () => d,
        Z_: () => P,
        eC: () => T,
        zr: () => f,
      });
      var t = n(627968);
      n(64700);
      var l = n(503698),
        c = n.n(l),
        i = n(607399),
        s = n(187322);
      if (21552 == n.j) var a = n(349288);
      if (21552 == n.j) var o = n(939249);
      if (21552 == n.j) var u = n(789645);
      var _ = n(954571),
        A = n(652215),
        E = n(985018),
        N = n(580537);
      let C = Object.freeze({
        DEFAULT: N.Lx,
        NEUTRAL: N.NT,
        BRAND: N.x8,
        WARNING: N.SO,
        DANGER: N.HW,
        INFO: N.io,
        STREAMER_MODE: N.kL,
        CUSTOM: N.P4,
        SPOTIFY: N.AU,
        PLAYSTATION: N._9,
        PREMIUM_TIER_0: N.zw,
        PREMIUM_TIER_1: N.G_,
        PREMIUM_TIER_2: N.NS,
      });
      function f(e) {
        let { children: r, className: n, minor: l = !1, ...i } = e;
        return (0, t.jsx)(s.vN, {
          children: (0, t.jsx)("button", {
            className: c()(N.x6, n, { [N.oy]: l }),
            ...i,
            children: r,
          }),
        });
      }
      function P(e) {
        let { children: r, noticeType: n, ...l } = e;
        return (0, t.jsx)(f, {
          ...l,
          onClick: (e) => {
            null != l.onClick && l.onClick(e),
              null != n &&
                _.default.track(A.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                  notice_type: n,
                });
          },
          children: r,
        });
      }
      function T(e) {
        let { children: r, href: n, noticeType: l, ...c } = e;
        return (0, t.jsx)(a.Anchor, {
          ...c,
          className: N.x6,
          href: n,
          onClick: (e) => {
            c.onClick?.(e),
              _.default.track(A.HAw.APP_NOTICE_ANCHOR_CLICKED, {
                notice_type: l,
                href: n,
              });
          },
          children: r,
        });
      }
      function d(e) {
        let { onClick: r, noticeType: n, className: l } = e;
        return (0, t.jsx)(o.D, {
          focusProps: { offset: 6 },
          className: c()(N.b, l),
          onClick: () => {
            r(),
              null != n &&
                _.default.track(A.HAw.APP_NOTICE_CLOSED, { notice_type: n });
          },
          "aria-label": E.intl.string(E.t.WAI6xu),
          children: (0, t.jsx)(u.P, {
            size: "sm",
            color: "currentColor",
            className: N.ut,
          }),
        });
      }
      function I(e) {
        let {
          color: r = C.DEFAULT,
          className: n,
          style: l,
          ref: s,
          children: a,
        } = e;
        return (0, t.jsx)("div", {
          ref: s,
          className: c()(N.lm, { [N.Fr]: i.Fr }, n, r),
          style: null != l ? l : void 0,
          children: a,
        });
      }
    },
  },
]);
//# sourceMappingURL=83799.7350a60cfac52501.js.map
