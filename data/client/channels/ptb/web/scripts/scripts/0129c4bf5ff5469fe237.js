"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3865"],
  {
    745763: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return s;
          },
        });
      var l = t(200651);
      t(192379);
      var o = t(481060),
        r = t(239091),
        u = t(358085),
        c = t(998502),
        i = t(89013),
        a = t(388032);
      function s(n) {
        let { text: e, onSelect: t } = n,
          s = (0, i.Z)(e);
        return u.isPlatformEmbedded
          ? (0, l.jsxs)(o.Menu, {
              navId: "text-context",
              onClose: r.Zy,
              "aria-label": a.intl.string(a.t.s285pq),
              onSelect: t,
              children: [
                (0, l.jsx)(o.MenuGroup, { children: s }),
                (0, l.jsx)(o.MenuGroup, {
                  children: (0, l.jsx)(o.MenuItem, {
                    id: "copy",
                    label: a.intl.string(a.t.OpuAlJ),
                    action: () => c.ZP.copy(e),
                  }),
                }),
              ],
            })
          : null;
      }
    },
    89013: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return p;
        },
      });
      var l = t(200651),
        o = t(192379),
        r = t(512722),
        u = t.n(r),
        c = t(481060),
        i = t(626135),
        a = t(358085),
        s = t(981631),
        d = t(388032);
      function p(n) {
        let e = o.useCallback(() => {
          u()(null != n, "text cannot be null"),
            i.default.track(s.rMx.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open(
              "https://www.google.com/search?q=".concat(encodeURIComponent(n)),
              "_blank",
            );
        }, [n]);
        return a.isPlatformEmbedded &&
          null != n &&
          (null == n ? void 0 : n.length) !== 0
          ? [
              (0, l.jsx)(
                c.MenuItem,
                {
                  id: "search-google",
                  label: d.intl.string(d.t["Rd/Mkp"]),
                  action: e,
                },
                "search-google",
              ),
            ]
          : null;
      }
    },
  },
]);
//# sourceMappingURL=0129c4bf5ff5469fe237.js.map
