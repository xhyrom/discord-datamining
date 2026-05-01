"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77473"],
  {
    162232(a, e, i) {
      i.d(e, { A: () => u });
      var s = i(627968);
      i(64700);
      var r = i(97808),
        t = i(778712),
        d = i(854627),
        n = i(19575),
        l = i(985018);
      let c = n.Ay.getEnableHardwareAcceleration() ? r.Js : r.eu,
        u = (a) => {
          let {
              user: e,
              guildId: i,
              avatarDecorationOverride: r,
              status: n,
              avatarSize: u = t._3.SIZE_120,
              "aria-hidden": h = !1,
              className: o,
              animateOnHover: p = !1,
              questPreviewRewardAssetUrl: b = null,
            } = a,
            {
              avatarDecorationSrc: k,
              avatarSrc: v,
              eventHandlers: w,
            } = (0, d.A)({
              userId: e.id,
              guildId: i,
              size: u,
              showPending: !0,
              avatarDecorationOverride: r,
              animateOnHover: p,
            });
          return (0, s.jsx)(c, {
            avatarDecoration: k ?? b,
            src: v,
            size: u,
            status: n,
            "aria-label": h ? void 0 : l.intl.string(l.t.lqaIxI),
            "aria-hidden": h,
            className: o,
            ...w,
          });
        };
    },
  },
]);
//# sourceMappingURL=77473.868c7d342972cfdc.js.map
