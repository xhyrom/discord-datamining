"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53195"],
  {
    918306: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return d;
          },
        });
      var i = e(200651);
      e(192379);
      var a = e(481060),
        c = e(239091),
        u = e(294299),
        r = e(388032);
      function d(n) {
        let { libraryApplication: t, onPlay: e, onSelect: d } = n,
          l = (0, u.Z)(t, e);
        return (0, i.jsx)(a.Menu, {
          navId: "launch-context",
          onClose: c.Zy,
          "aria-label": r.intl.string(r.t.tKobzc),
          onSelect: d,
          children: l,
        });
      }
    },
    294299: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = e(200651);
      e(192379);
      var a = e(442837),
        c = e(481060),
        u = e(978085),
        r = e(283595),
        d = e(417363);
      function l(n, t) {
        let e = (0, a.e7)([d.Z], () => d.Z.getLaunchOptions(n.id, n.branchId)),
          l = (0, a.e7)([r.Z], () =>
            r.Z.getActiveLaunchOptionId(n.id, n.branchId),
          );
        return e.length < 2
          ? null
          : e.map((e) =>
              (0, i.jsx)(
                c.MenuItem,
                {
                  id: e.id,
                  label: e.name,
                  action: (i) => {
                    e.id !== l && u.ul(n.id, n.branchId, e.id),
                      null == t || t(i);
                  },
                },
                e.id,
              ),
            );
      }
    },
  },
]);
//# sourceMappingURL=4d4519b721be10063587.js.map
