"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5396"],
  {
    731646: function (e, n, l) {
      l.r(n),
        l.d(n, {
          default: function () {
            return c;
          },
        });
      var t = l(200651),
        a = l(192379),
        i = l(481060),
        s = l(239091),
        d = l(299206),
        u = l(689938);
      function c(e) {
        var n;
        let l = (0, d.Z)({ id: e.id, label: e.label, shiftId: e.shiftId });
        return (
          a.useEffect(() => {
            null == l && (0, s.Zy)();
          }, [l]),
          (0, t.jsx)(i.Menu, {
            onSelect: e.onSelect,
            navId: "dev-context",
            "aria-label":
              null !== (n = e["aria-label"]) && void 0 !== n
                ? n
                : u.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
            onClose: s.Zy,
            children: l,
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=f93c09feab405bba9046.js.map
