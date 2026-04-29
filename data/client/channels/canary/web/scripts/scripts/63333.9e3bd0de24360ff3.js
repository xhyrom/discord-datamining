"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63333"],
  {
    114212(a, s, e) {
      e.d(s, {
        Ay: () => N,
        B5: () => p,
        BP: () => j,
        FQ: () => h,
        Uj: () => y,
        VF: () => v,
        _G: () => x,
      });
      var n = e(627968);
      e(64700);
      var i = e(503698),
        l = e.n(i),
        t = e(735438),
        r = e.n(t),
        c = e(707554),
        d = e(814635);
      function m(a) {
        return `${a / 16}rem`;
      }
      function o() {
        return (0, n.jsx)("div", { className: d.my, style: { opacity: 0.08 } });
      }
      function h(a) {
        let { width: s, height: e, opacity: i, className: t } = a,
          c = { width: m(s), opacity: null != i ? i : r().random(0.02, 0.08) };
        return (
          null != e && (c.height = m(e)),
          (0, n.jsx)("div", { className: l()(t, { [d.av]: !0 }), style: c })
        );
      }
      function u(a) {
        let s,
          {
            groupStart: e = !1,
            compact: i = !1,
            attachmentSpecs: t,
            usernameWidth: m,
            usernameOpacity: u,
            className: p,
            style: x,
          } = a,
          j = i ? 50 : r().random(40, 50);
        return (
          !i && e
            ? (s = (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(o, {}),
                  (0, n.jsx)(c.H, {
                    className: d.wx,
                    children: (0, n.jsx)(h, {
                      width: m,
                      opacity: u,
                      className: d.__invalid_username,
                    }),
                  }),
                ],
              }))
            : i &&
              (s = (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(h, {
                    width: j,
                    className: l()({ [d.ce]: !0, [d.R]: !e }),
                  }),
                  (0, n.jsx)(c.H, {
                    className: d.wx,
                    children: (0, n.jsx)(h, { width: m, opacity: u }),
                  }),
                ],
              })),
          (0, n.jsxs)("div", {
            "aria-hidden": !0,
            className: l()(p, { [d.iE]: !0, [d.oE]: i, [d.E]: !i }),
            style: x,
            children: [
              (0, n.jsxs)("div", {
                className: d.PG,
                children: [
                  s,
                  (0, n.jsx)("div", {
                    className: d.Qs,
                    children: Array(r().random(3, 8))
                      .fill(null)
                      .map(() => r().random(30, 80))
                      .map((a, s) =>
                        (0, n.jsx)(h, { width: a, opacity: 0.06 }, s),
                      ),
                  }),
                ],
              }),
              null != t &&
                (0, n.jsx)("div", {
                  className: d.Dq,
                  children: (0, n.jsx)("div", {
                    className: d.oh,
                    style: { opacity: 0.03, ...t },
                  }),
                }),
            ],
          })
        );
      }
      let p = 44,
        x = 22,
        j = 26,
        y = 26,
        v = 6;
      function N(a) {
        let {
            messages: s,
            groupSpacing: e = 0,
            compact: i = !1,
            attachmentSpecs: l,
            className: t,
          } = a,
          c = null != l ? (l.last ? s - 1 : r().random(0, s - 1)) : -1,
          d = r().random(80, 120),
          o = r().random(0.1, 0.2);
        return (0, n.jsx)(n.Fragment, {
          children: Array(s)
            .fill(null)
            .map((a, s) =>
              (0, n.jsx)(
                u,
                {
                  compact: i,
                  className: t,
                  usernameWidth: d,
                  usernameOpacity: o,
                  groupStart: 0 === s,
                  attachmentSpecs: s === c ? l : void 0,
                  style: 0 === s ? { marginTop: m(e) } : void 0,
                },
                s,
              ),
            ),
        });
      }
    },
  },
]);
//# sourceMappingURL=63333.9e3bd0de24360ff3.js.map
