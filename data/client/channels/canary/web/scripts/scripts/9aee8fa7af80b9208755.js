"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21960"],
  {
    621781: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = e(192379),
        l = e(442837),
        a = e(706454),
        r = e(356659),
        u = e(388032);
      function o() {
        let t = (0, l.e7)([a.default], () => a.default.locale);
        return i.useMemo(
          () => [
            {
              value: r.OT.SECONDS_30,
              label: u.intl.formatToPlainString(u.t["bTFv//"], { count: 30 }),
            },
            {
              value: r.OT.MINUTES_1,
              label: u.intl.formatToPlainString(u.t.ICo9Nj, { count: 1 }),
            },
            {
              value: r.OT.MINUTES_2,
              label: u.intl.formatToPlainString(u.t.ICo9Nj, { count: 2 }),
            },
          ],
          [t],
        );
      }
    },
    999466: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return f;
          },
        });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(239091),
        u = e(547972),
        o = e(435064),
        c = e(621781),
        s = e(39604),
        d = e(332325),
        p = e(388032);
      function f(t) {
        let { onSelect: n } = t,
          { clipsLength: e } = (0, l.cj)([o.Z], () => o.Z.getSettings()),
          f = (0, c.Z)();
        return (0, i.jsxs)(a.Menu, {
          navId: "clips-context",
          "aria-label": p.intl.string(p.t.J1hsY2),
          onClose: r.Zy,
          onSelect: n,
          children: [
            (0, i.jsx)(a.MenuGroup, {
              children: (0, i.jsx)(a.MenuItem, {
                id: "clips-duration",
                label: p.intl.string(p.t.OgfUio),
                children: f.map((t) => {
                  let { value: n, label: l } = t;
                  return (0, i.jsx)(
                    a.MenuRadioItem,
                    {
                      id: "clips-duration-".concat(n),
                      group: "clips-duration",
                      label: l,
                      action: () => (0, s.eU)(n),
                      checked: n === e,
                    },
                    n,
                  );
                }),
              }),
            }),
            (0, i.jsx)(a.MenuGroup, {
              children: (0, i.jsx)(a.MenuItem, {
                id: "clips-settings",
                label: p.intl.string(p.t.J1hsY2),
                action: () => (0, u.Z)(d.Z.CLIPS),
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=9aee8fa7af80b9208755.js.map
