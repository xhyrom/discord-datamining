"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22220"],
  {
    639719(t, s, i) {
      i.d(s, { default: () => f });
      var e = i(627968),
        n = i(64700),
        r = i(110259),
        l = i(509434),
        a = i(702841),
        c = i(772707),
        o = i(331322),
        u = i(834730),
        x = i(404778),
        m = i(803306),
        d = i(139286),
        E = i(870570),
        p = i(652215),
        j = i(985018),
        h = i(893192),
        S = i(546);
      function A(t) {
        let { text: s } = t;
        return (0, e.jsxs)("li", {
          className: h.nf,
          children: [
            s,
            " ",
            (0, e.jsx)(l.I, { size: "sm", color: "currentColor" }),
          ],
        });
      }
      function f(t) {
        let { transitionState: s } = t,
          i = (0, a.bG)([E.A], () => E.A.getAction()),
          [l, f] = n.useState(!1);
        async function g() {
          return f(!0), i === p.a3B.AGREEMENTS && f(await (0, m.Q9)()), null;
        }
        return (
          (0, d.A)(
            {
              type: r.ImpressionTypes.VIEW,
              name: r.ImpressionNames.USER_AGREEMENTS,
              properties: { required_action: i },
            },
            {},
            [],
          ),
          (0, e.jsx)(c.k, {
            graphic: { src: S.A, type: "image" },
            gradientColor: "blue",
            dismissable: !1,
            title: j.intl.string(j.t["7glvXu"]),
            subtitle: j.intl.string(j.t["+USXQE"]),
            actions: [
              {
                variant: "primary",
                text: j.intl.string(j.t["+TBKL1"]),
                onClick: g,
                loading: l,
              },
            ],
            transitionState: s,
            onClose: p.js$,
            children: (0, e.jsxs)(o.B, {
              gap: 20,
              children: [
                i === p.a3B.AGREEMENTS
                  ? (0, e.jsx)(u.E, {
                      variant: "text-md/normal",
                      className: h.h_,
                      children: j.intl.format(j.t.CN0Hvb, {
                        url: p.X7G.TERMS_SUMMARY,
                      }),
                    })
                  : null,
                (0, e.jsx)("div", {
                  className: h.kL,
                  children: (0, e.jsxs)("ul", {
                    className: h.yJ,
                    children: [
                      (0, e.jsx)(A, {
                        text: j.intl.format(j.t.iw0hFi, { url: p.X7G.TERMS }),
                      }),
                      (0, e.jsx)(x.c, {}),
                      (0, e.jsx)(A, {
                        text: j.intl.format(j.t["36klnD"], {
                          url: p.X7G.PAID_TERMS,
                        }),
                      }),
                      (0, e.jsx)(x.c, {}),
                      (0, e.jsx)(A, {
                        text: j.intl.format(j.t.TquFBF, { url: p.X7G.PRIVACY }),
                      }),
                      (0, e.jsx)(x.c, {}),
                      (0, e.jsx)(A, {
                        text: j.intl.format(j.t.ia96Tb, {
                          url: p.X7G.GUIDELINES,
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=22220.80dc2fde2cb25b33.js.map
