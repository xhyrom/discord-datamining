"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5396"],
  {
    731646: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return c;
          },
        });
      var l = t(200651),
        i = t(192379),
        a = t(481060),
        d = t(239091),
        r = t(299206),
        u = t(388032);
      function c(e) {
        var n;
        let t = (0, r.Z)({ id: e.id, label: e.label, shiftId: e.shiftId });
        return (
          i.useEffect(() => {
            null == t && (0, d.Zy)();
          }, [t]),
          (0, l.jsx)(a.Menu, {
            onSelect: e.onSelect,
            navId: "dev-context",
            "aria-label":
              null !== (n = e["aria-label"]) && void 0 !== n
                ? n
                : u.intl.string(u.t.ogxXGh),
            onClose: d.Zy,
            children: t,
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=33c58690bcf6fd9c8580.js.map
