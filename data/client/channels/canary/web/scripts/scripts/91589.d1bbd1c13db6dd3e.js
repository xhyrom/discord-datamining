"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91589"],
  {
    998759(e, l, s) {
      s.d(l, { z: () => a });
      var r = s(64700),
        n = s(827762),
        t = s(149597);
      function a(e) {
        let { fingerprintBase64: l, chunkSize: s, desiredLength: a } = e,
          c = r.useMemo(() => {
            if (null == l || "" === l) return null;
            let e = n.toByteArray(l),
              r = (0, t.DB)(e, a, s);
            if (null == r) return null;
            let c = RegExp(`.{1,${s}}`, "g"),
              u = r.match(c);
            return null == u ? null : Array.from(u);
          }, [s, l, a]);
        if (null != l && "" !== l && null == c)
          throw Error(
            "[useReadableSecureFramesCode] Failed to parse base 64 code.",
          );
        return c;
      }
    },
    75811(e, l, s) {
      s.d(l, { j: () => o });
      var r = s(627968),
        n = s(64700),
        t = s(503698),
        a = s.n(t),
        c = s(289873),
        u = s(834730),
        i = s(686052);
      function o(e) {
        let { chunks: l, columns: s, className: t } = e,
          o = n.useMemo(() => ({ "--secure-frames-columns": s }), [s]);
        return null == l
          ? (0, r.jsx)("div", {
              className: i.Lq,
              children: (0, r.jsx)(c.y, {}),
            })
          : (0, r.jsx)("div", {
              style: o,
              className: a()(i.aY, t),
              children: l.map((e, l) =>
                (0, r.jsxs)(
                  n.Fragment,
                  {
                    children: [
                      l > 0 &&
                        l % s == 0 &&
                        (0, r.jsx)("hr", { className: i.yF }),
                      (0, r.jsx)("div", {
                        className: i.iv,
                        children: (0, r.jsx)(u.E, {
                          className: i.ph,
                          variant: "code",
                          color: "text-default",
                          children: e,
                        }),
                      }),
                    ],
                  },
                  `${e}-${l}`,
                ),
              ),
            });
      }
    },
    930840(e, l, s) {
      s.d(l, { c: () => j });
      var r = s(627968),
        n = s(64700),
        t = s(503698),
        a = s.n(t),
        c = s(990078),
        u = s(628284),
        i = s(624479),
        o = s(939249),
        d = s(661531),
        m = s(957565),
        h = s(985018),
        x = s(408345);
      function j(e) {
        let { chunks: l, className: s, onCopy: t, ...j } = e,
          p = n.useMemo(() => l?.join(" "), [l]),
          [E, f] = n.useState(!1),
          T = n.useCallback(() => {
            (0, m.C)(p, () => {
              f(!0), t?.();
            });
          }, [t, p]),
          v = E ? u.y : i.T;
        return (0, r.jsx)(o.D, {
          className: a()(x.k, s),
          onClick: T,
          children: (0, r.jsx)(c.m, {
            text: E ? h.intl.string(h.t.t5VZ88) : h.intl.string(h.t.OpuAlK),
            children: (0, r.jsx)(v, {
              ...j,
              size: "xxs",
              color: E
                ? d.A.colors.TEXT_FEEDBACK_POSITIVE
                : d.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=91589.d1bbd1c13db6dd3e.js.map
