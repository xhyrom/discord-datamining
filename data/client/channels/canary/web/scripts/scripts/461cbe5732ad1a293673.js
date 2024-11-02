"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32157"],
  {
    151090: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return b;
          },
        });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        o = t(481060),
        s = t(239091),
        r = t(357156),
        a = t(430824),
        c = t(496675),
        d = t(771845),
        u = t(594174),
        p = t(388032);
      function b(n) {
        let { onExportToFile: e, onExportToSoundboard: t, onDelete: b } = n,
          I = (0, l.e7)([d.ZP, c.Z, u.default, a.Z], () =>
            d.ZP.getFlattenedGuildIds().some((n) => {
              let e = a.Z.getGuild(n);
              return (
                null != e && (0, r.Gw)(e, c.Z, u.default).canCreateExpressions
              );
            }),
          );
        return (0, i.jsxs)(o.Menu, {
          navId: "clips-more-options",
          "aria-label": p.intl.string(p.t.PdRCRk),
          onClose: s.Zy,
          onSelect: s.Zy,
          children: [
            I
              ? (0, i.jsx)(o.MenuItem, {
                  icon: o.SoundboardIcon,
                  id: "clips-export-soundboard",
                  label: p.intl.string(p.t.HH4Tjo),
                  action: t,
                })
              : null,
            (0, i.jsx)(o.MenuItem, {
              icon: o.DownloadIcon,
              id: "clips-export-file",
              label: p.intl.string(p.t.l9qpzs),
              action: e,
            }),
            (0, i.jsx)(o.MenuItem, {
              icon: o.TrashIcon,
              id: "clips-delete",
              label: p.intl.string(p.t.oyYWHB),
              color: "danger",
              action: b,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=461cbe5732ad1a293673.js.map
