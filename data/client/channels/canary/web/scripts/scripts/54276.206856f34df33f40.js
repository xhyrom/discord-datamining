"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54276"],
  {
    983060(e, n, s) {
      s.d(n, { MM: () => i, Wi: () => a, X8: () => l });
      var t = s(913290),
        r = s(777376);
      let l = "1476683556242718862";
      function a() {
        return "#";
      }
      function i(e) {
        if (e.sku_id !== l || e.deleted) return null;
        if (null == e.ends_at || new Date(e.ends_at) > new Date())
          return r.gR.ACTIVATED;
        let n = e.fulfillment_status;
        return n === t.w.FULFILLED ||
          n === t.w.UNFULFILLMENT_NEEDED ||
          n === t.w.UNFULFILLMENT_NEEDED_MANUAL
          ? r.gR.CANCELLATION_PENDING
          : null;
      }
    },
    674567(e, n, s) {
      s.d(n, { V: () => u, s: () => N });
      var t,
        r = s(531260),
        l = s(757036),
        a = s(31502),
        i = s(788868),
        N =
          (((t = {})[(t.NONE = 0)] = "NONE"),
          (t[(t.NON_NITRO = 1)] = "NON_NITRO"),
          (t[(t.NITRO = 2)] = "NITRO"),
          t);
      function u() {
        let e = (0, a.l)("userSettings.connections"),
          n = (0, l.L)(i.PremiumTypes.TIER_2),
          { fractionalState: s } = (0, r.A)();
        return e ? (n ? 2 * (s !== i.xc.FP_ONLY) : 1) : 0;
      }
    },
    935956(e, n, s) {
      s.d(n, { A: () => L, u: () => p });
      var t = s(627968);
      s(64700);
      var r = s(503698),
        l = s.n(r),
        a = s(534514),
        i = s(31502),
        N = s(256599),
        u = s(385337),
        c = s(744064),
        d = s(254748),
        o = s(256358),
        _ = s(985018),
        f = s(367791),
        E = s(102338),
        m = s(672193);
      let p = "xgpp";
      function L(e) {
        let { glowingSectionId: n } = e,
          s = (0, i.l)("premium_subscriber_home_rewards"),
          { logitechCard: r, steelseriesCard: L } = (0, o.A)();
        if (!s) return null;
        let A = null != r || null != L;
        return (0, t.jsx)(d.A, {
          id: p,
          sectionClassName: l()(E.uW, E.Uv, E.qr),
          heading: (0, t.jsx)(a.D, {
            variant: "display-sm",
            className: l()(m.R_, f.U6),
            children: _.intl.string(_.t.NG1e6l),
          }),
          beforeGrid: (0, t.jsx)("div", {
            className: f.JE,
            children: (0, t.jsx)(N.A, { glowing: n === p }),
          }),
          grid: A
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(u.A, { containerClassName: m.Nr }),
                  null != r &&
                    (0, t.jsx)(c.S, { ...r, containerClassName: m.Nr }),
                  null != L &&
                    (0, t.jsx)(c.S, { ...L, containerClassName: m.Nr }),
                ],
              })
            : null,
        });
      }
    },
    78701(e, n, s) {
      s.d(n, { A: () => t });
      let t =
        "https://cdn.discordapp.com/assets/content/1ffd8203232095caf2e602b4a9f85669cc625f56a09decde670c0e9cd72b754f.svg";
    },
  },
]);
//# sourceMappingURL=54276.206856f34df33f40.js.map
