"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53195"],
  {
    918306: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return r;
          },
        });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        u = t(239091),
        c = t(294299),
        d = t(689938);
      function r(n) {
        let { libraryApplication: e, onPlay: t, onSelect: r } = n,
          l = (0, c.Z)(e, t);
        return (0, i.jsx)(a.Menu, {
          navId: "launch-context",
          onClose: u.Zy,
          "aria-label": d.Z.Messages.APPLICATION_ACTIONS_MENU_LABEL,
          onSelect: r,
          children: l,
        });
      }
    },
    294299: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        u = t(481060),
        c = t(978085),
        d = t(283595),
        r = t(417363);
      function l(n, e) {
        let t = (0, a.e7)([r.Z], () => r.Z.getLaunchOptions(n.id, n.branchId)),
          l = (0, a.e7)([d.Z], () =>
            d.Z.getActiveLaunchOptionId(n.id, n.branchId),
          );
        return t.length < 2
          ? null
          : t.map((t) =>
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: t.id,
                  label: t.name,
                  action: (i) => {
                    t.id !== l && c.ul(n.id, n.branchId, t.id),
                      null == e || e(i);
                  },
                },
                t.id,
              ),
            );
      }
    },
  },
]);
//# sourceMappingURL=eec1aff521ad242996fd.js.map
