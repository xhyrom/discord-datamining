"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44265"],
  {
    376304(i, t, o) {
      o.d(t, { XD: () => _, fm: () => N, sE: () => d, ux: () => $ });
      var s = o(7584),
        e = o(776231),
        r = o(486020),
        l = o(723702),
        n = o(652215);
      let u = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
        a = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
        c = (0, l.isAndroid)(),
        d = (i, t) => {
          if (null == i) return null;
          let o =
            null != i.unicodeEmoji
              ? s.Ay.getByName(s.Ay.convertSurrogateToName(i.unicodeEmoji, !1))
              : void 0;
          return { customIconSrc: p(i, t), unicodeEmoji: o ?? void 0 };
        },
        $ = (i, t) =>
          i.replace(/size=[0-9]+/g, `size=${(0, e.kr)(t * (0, e.mZ)())}`),
        p = (i, t) => {
          let { id: o, icon: s } = i;
          if (null == s) return;
          if (s.startsWith("data:")) return s;
          let l = r.QB ? "webp" : "png",
            d = "",
            $ = "quality=lossless";
          return (null != t &&
            ((d = "size=" + (0, e.kr)(t * (0, e.mZ)())),
            ($ = c ? "" : "&" + $)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? `${u}/${o}/${s}.${l}?${d}${$}`
            : `${a}${n.Rsh.ROLE_ICON(o, s)}?${d}`;
        },
        _ = (i) =>
          i.startsWith(u) ||
          (i.startsWith(`${a}/roles`) && i.includes("/icons/")),
        N = (i, t) =>
          t?.tags?.subscription_listing_id != null ||
          i.features.has(n.GuildFeatures.ROLE_ICONS);
    },
  },
]);
//# sourceMappingURL=44265.650baa105387a0f3.js.map
