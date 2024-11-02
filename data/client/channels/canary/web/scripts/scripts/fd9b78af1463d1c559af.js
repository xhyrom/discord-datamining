"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9606"],
  {
    987578: function (t, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return r;
          },
        });
      var e = i(200651);
      i(192379);
      var l = i(481060),
        a = i(239091),
        o = i(560067),
        u = i(675999),
        d = i(388032);
      function r(t) {
        let { onSelect: n } = t;
        return (0, e.jsxs)(l.Menu, {
          navId: "guild-context",
          "aria-label": d.intl.string(d.t.HpQykZ),
          onClose: a.Zy,
          onSelect: n,
          children: [
            (0, e.jsx)(l.MenuItem, {
              id: "join",
              label: d.intl.string(d.t.yRjK4u),
              action: () =>
                o.Z.openCreateGuildModal({
                  initialSlide: u._m.JOIN_GUILD,
                  location: "Guild List - ContextMenu",
                }),
            }),
            (0, e.jsx)(l.MenuItem, {
              id: "create",
              label: d.intl.string(d.t.B44MTk),
              action: () =>
                o.Z.openCreateGuildModal({
                  location: "Guild List - ContextMenu",
                }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=fd9b78af1463d1c559af.js.map
