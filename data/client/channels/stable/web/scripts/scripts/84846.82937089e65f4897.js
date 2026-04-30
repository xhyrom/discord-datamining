"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84846"],
  {
    206845(t, e, n) {
      n.d(e, { A: () => f });
      var i = n(627968),
        s = n(64700),
        r = n(735438),
        l = n(451988),
        a = n(781696),
        u = n(568602),
        g = n(954571),
        o = n(957565),
        c = n(927813),
        p = n(652215),
        E = n(985018);
      let d = c.A.Millis.SECOND,
        h = 2 * d,
        S = c.A.Millis.HALF_SECOND,
        M = [
          () => E.intl.string(E.t.MSaeTe),
          () => E.intl.string(E.t.UmrCw7),
          () => E.intl.string(E.t.gKE0Jq),
          () => E.intl.string(E.t["4DSKbi"]),
          () => E.intl.string(E.t["+8ENdT"]),
          () => E.intl.string(E.t.GlWHv8),
          () => E.intl.string(E.t.hIzxU9),
          () => E.intl.string(E.t["26uMPL"]),
          () => E.intl.string(E.t.uFs7R2),
          () => E.intl.string(E.t.bLXdcY),
          () => E.intl.string(E.t.gPg9fS),
        ];
      function f(t) {
        let {
            text: e,
            copyValue: n,
            children: c,
            onCopy: E,
            "aria-label": f,
            delay: A = S,
            dataMeticulousIgnore: C,
          } = t,
          [b, k] = s.useState(0),
          [w, x] = s.useState(!1),
          [L, R] = s.useState(!1),
          [T] = s.useState(() => new l.Ep()),
          [m] = s.useState(() => new l.Ep());
        if (
          (s.useEffect(
            () => () => {
              T.stop(), m.stop();
            },
            [T, m],
          ),
          !o.p5)
        )
          return (0, i.jsx)(i.Fragment, { children: c({}) });
        let D = b >= M.length - 1,
          I = w ? a.oM.GREEN : a.oM.PRIMARY;
        return (0, i.jsx)(a.ST, {
          text: (() => {
            if (!w) return e;
            let t = (0, r.clamp)(b - 1, 0, M.length - 1),
              n = M[t] ?? M[0];
            return (0, i.jsx)(u.b, { isShaking: D, children: n() });
          })(),
          delay: A,
          "aria-label": f,
          dataMeticulousIgnore: C,
          color: I,
          forceOpen: L,
          onAnimationRest: (t, e) => {
            !L && w && e.phase === p.lLE.LEAVE && x(!1);
          },
          children: (t) => {
            let { onClick: e, onMouseEnter: i, ...s } = t;
            return c({
              ...s,
              onClick: () => {
                e?.(),
                  E?.(),
                  (0, o.C)(n),
                  g.default.track(p.HAw.TEXT_COPIED),
                  L || k(b + 1),
                  R(!0),
                  x(!0),
                  T.start(d, () => R(!1)),
                  m.start(h, () => k(0));
              },
              onMouseEnter: () => {
                w ? (T.stop(), R(!1)) : i?.();
              },
            });
          },
        });
      }
    },
  },
]);
//# sourceMappingURL=84846.82937089e65f4897.js.map
