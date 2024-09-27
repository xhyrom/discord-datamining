"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32157"],
  {
    151090: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return I;
          },
        });
      var o = s(735250);
      s(470079);
      var a = s(442837),
        l = s(481060),
        t = s(239091),
        i = s(357156),
        c = s(430824),
        d = s(496675),
        r = s(771845),
        u = s(594174),
        p = s(689938);
      function I(e) {
        let { onExportToFile: n, onExportToSoundboard: s, onDelete: I } = e,
          Z = (0, a.e7)([r.ZP, d.Z, u.default, c.Z], () =>
            r.ZP.getFlattenedGuildIds().some((e) => {
              let n = c.Z.getGuild(e);
              return (
                null != n && (0, i.Gw)(n, d.Z, u.default).canCreateExpressions
              );
            }),
          );
        return (0, o.jsxs)(l.Menu, {
          navId: "clips-more-options",
          "aria-label": p.Z.Messages.MORE_OPTIONS,
          onClose: t.Zy,
          onSelect: t.Zy,
          children: [
            Z
              ? (0, o.jsx)(l.MenuItem, {
                  icon: l.SoundboardIcon,
                  id: "clips-export-soundboard",
                  label: p.Z.Messages.CLIPS_EXPORT_TO_SOUNDBOARD,
                  action: s,
                })
              : null,
            (0, o.jsx)(l.MenuItem, {
              icon: l.DownloadIcon,
              id: "clips-export-file",
              label: p.Z.Messages.CLIPS_EXPORT_TO_FILE,
              action: n,
            }),
            (0, o.jsx)(l.MenuItem, {
              icon: l.TrashIcon,
              id: "clips-delete",
              label: p.Z.Messages.DELETE,
              color: "danger",
              action: I,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=6f7814eccf1b9ef545ce.js.map
