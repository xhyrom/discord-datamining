"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3865"],
  {
    745763: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var l = t(735250);
      t(470079);
      var o = t(481060),
        a = t(239091),
        c = t(358085),
        s = t(998502),
        u = t(89013),
        r = t(689938);
      function d(e) {
        let { text: n, onSelect: t } = e,
          d = (0, u.Z)(n);
        return c.isPlatformEmbedded
          ? (0, l.jsxs)(o.Menu, {
              navId: "text-context",
              onClose: a.Zy,
              "aria-label": r.Z.Messages.TEXT_ACTIONS_MENU_LABEL,
              onSelect: t,
              children: [
                (0, l.jsx)(o.MenuGroup, { children: d }),
                (0, l.jsx)(o.MenuGroup, {
                  children: (0, l.jsx)(o.MenuItem, {
                    id: "copy",
                    label: r.Z.Messages.COPY,
                    action: () => s.ZP.copy(n),
                  }),
                }),
              ],
            })
          : null;
      }
    },
    89013: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var l = t(735250),
        o = t(470079),
        a = t(512722),
        c = t.n(a),
        s = t(481060),
        u = t(626135),
        r = t(358085),
        d = t(981631),
        i = t(689938);
      function p(e) {
        let n = o.useCallback(() => {
          c()(null != e, "text cannot be null"),
            u.default.track(d.rMx.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open(
              "https://www.google.com/search?q=".concat(encodeURIComponent(e)),
              "_blank",
            );
        }, [e]);
        return r.isPlatformEmbedded &&
          null != e &&
          (null == e ? void 0 : e.length) !== 0
          ? [
              (0, l.jsx)(
                s.MenuItem,
                {
                  id: "search-google",
                  label: i.Z.Messages.SEARCH_WITH_GOOGLE,
                  action: n,
                },
                "search-google",
              ),
            ]
          : null;
      }
    },
  },
]);
//# sourceMappingURL=9ed9751d972974eaf0d2.js.map
