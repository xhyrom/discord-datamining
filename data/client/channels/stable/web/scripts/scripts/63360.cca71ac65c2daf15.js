"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63360"],
  {
    260451(e, t, n) {
      n.d(t, { SH: () => s, qE: () => d, zQ: () => r });
      var l = n(64700),
        a = n(945810),
        i = n(449054),
        u = n(652215);
      let r = (0, a.mj)({
          name: "2026-02-silp-in-app-redesign",
          kind: "user",
          defaultConfig: { enabled: !1, treatment: void 0 },
          variations: {
            1: { enabled: !0, treatment: "v1" },
            2: { enabled: !0, treatment: "v2" },
          },
        }),
        s = (0, a.mj)({
          name: "2026-03-silp-in-app-redesign-profile",
          kind: "user",
          defaultConfig: { enabled: !1, treatment: void 0 },
          variations: {
            1: { enabled: !0, treatment: "v1" },
            2: { enabled: !0, treatment: "v2" },
          },
        });
      function d(e, t) {
        let { enabled: n, treatment: a } = r.useConfig({ location: t }),
          [s, d] = l.useState(null),
          [p, f] = l.useState(!1),
          o = n && null != e && e.features.has(u.GuildFeatures.DISCOVERABLE);
        l.useEffect(() => {
          if (!o || null == e) {
            d(null), f(!1);
            return;
          }
          f(!0);
          let t = !1;
          return (
            (0, i.jm)(e.id).then((e) => {
              t || (f(!1), null != e ? d(e.guild) : d(null));
            }),
            () => {
              t = !0;
            }
          );
        }, [o, e]);
        let m =
          n &&
          null != e &&
          e.features.has(u.GuildFeatures.DISCOVERABLE) &&
          s?.is_published === !0;
        return {
          enabled: m,
          discoveryGuild: m ? s : null,
          treatment: a,
          isLoading: p,
        };
      }
    },
  },
]);
//# sourceMappingURL=63360.cca71ac65c2daf15.js.map
