"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31445"],
  {
    44724(l, e, t) {
      t.d(e, { X: () => c, default: () => o });
      var i = t(376728),
        n = t(976860),
        u = t(71393),
        a = t(449054),
        d = t(733391),
        s = t(652215);
      function c(l) {
        let { guildId: e, invite: t, forceFetch: i } = l;
        null != t && (e = t.guild?.id),
          null != e && (0, d.Rw)(e, { eager: !0, forceFetch: i });
      }
      async function o(l) {
        let { guildId: e, invite: t, pageIndex: d, skuId: c, slug: o } = l,
          p = null;
        if (
          (null != t && ((e = t.guild?.id), (p = new Set(t.guild?.features))),
          null == e)
        )
          return;
        let r = u.A.getGuild(e);
        r?.joinedAt == null &&
          (null == p || p.has(s.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, a.Z2)(e, {}, { shouldNavigate: !1 })
            : null != t &&
              (await i.Ay.acceptInvite({
                inviteKey: t.code,
                context: { location: "game_shop" },
                skipOnboarding: !0,
              }))),
          (0, n.pX)(s.BVt.CHANNELS_GAME_SHOP(e, d, c, o));
      }
    },
  },
]);
//# sourceMappingURL=31445.31289c9e1eba7245.js.map
