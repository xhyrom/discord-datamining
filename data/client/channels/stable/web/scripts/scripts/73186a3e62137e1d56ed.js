"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42358"],
  {
    210995: function (t, i, e) {
      e.r(i);
      var n = e(200651);
      e(192379);
      var a = e(468026),
        r = e(434404),
        l = e(388032);
      i.default = (t) =>
        (0, n.jsx)(a.default, {
          title: l.intl.string(l.t.aCAiGh),
          body: l.intl.format(l.t["4cJV9f"], { serverName: t.name }),
          cancelText: l.intl.string(l.t.J2TBi4),
          onCancel: () => {
            r.Z.leaveGuild(t.guildId);
          },
          confirmText: l.intl.string(l.t.TyCVIi),
          ...t,
        });
    },
  },
]);
//# sourceMappingURL=73186a3e62137e1d56ed.js.map
