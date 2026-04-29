"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64316"],
  {
    212407(e, r, n) {
      n.d(r, {
        Kk: () => _,
        MV: () => N,
        U1: () => B,
        bv: () => b,
        qY: () => A,
        s4: () => i,
        w$: () => m,
      });
      var a = n(64700),
        t = n(488430),
        l = n(719986),
        R = n(940622),
        o = n(559474);
      let _ = (e) => {
          let r = (0, R.mb)(o.RN.HERO_LOGO),
            n = (0, R.mb)(o.RN.HERO_BANNER_STATIC),
            t = (0, R.mb)(o.RN.HERO_BANNER_ANIMATED),
            _ = (0, R.mb)(o.RN.HERO_BANNER_RIVE),
            i = (0, R.JE)((e) => e.heroLogoMaxHeight),
            N = (0, R.JE)((e) => e.heroResponsive);
          return a.useMemo(() => {
            let a,
              R = null != n || null != t || null != _ || null != r,
              o = null != n && null == t;
            return (
              (a = R
                ? null != r && null != i
                  ? l.M.fromServer({ desktop_max_height: i })
                  : void 0
                : e.logoDisplayConfig),
              {
                bannerDisplayConfig: R
                  ? N
                    ? l.M.fromServer({ responsive: !0 })
                    : void 0
                  : e.bannerDisplayConfig,
                logoDisplayConfig: a,
                heroLogo: r ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: o ? void 0 : (t ?? e.heroBannerAnimatedUrl),
                heroBannerRive: _ ?? e.heroRiveUrl,
              }
            );
          }, [r, n, t, _, e, i, N]);
        },
        i = (e, r, n) => {
          let a = (0, R.mb)(o.RN.FEATURED_BLOCK);
          return (n ? a : null) ?? r?.assetUrl ?? e?.featuredBlockUrl;
        },
        N = (e) => {
          let r = (0, R.mb)(o.RN.CATALOG_BANNER_STATIC),
            n = (0, R.mb)(o.RN.CATALOG_BANNER_ANIMATED),
            a = (0, R.mb)(o.RN.CATALOG_BANNER_RIVE);
          return {
            catalogBannerStatic: r ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: a ?? e.catalogBannerRiveUrl,
          };
        },
        B = (e) => (0, R.mb)(o.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
        b = (e) => {
          let r = (0, R.mb)(o.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, R.mb)(o.RN.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, R.mb)(o.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            _ = (0, R.mb)(o.RN.SHOP_BUTTON_BG_RESTING),
            i = (0, R.mb)(o.RN.SHOP_BUTTON_BG_RESTING_DARK),
            N = (0, R.mb)(o.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
          return a.useMemo(() => {
            if (e?.type === t.G.COACHMARK) return {};
            let a = e?.refTargetBackground?.asset,
              R = a?.resting,
              o = a?.hovered;
            return {
              buttonBGHoverDark: n ?? r ?? o?.dark,
              buttonBGHoverLight: l ?? r ?? o?.light,
              buttonBGRestingDark: i ?? _ ?? R?.dark,
              buttonBGRestingLight: N ?? _ ?? R?.light,
            };
          }, [r, n, l, _, i, N, e]);
        },
        A = (e) => ({
          bannerUrl: e.bannerUrl,
          bannerAnimatedUrl: e.bannerAnimatedUrl,
        }),
        m = (e) => ({
          bannerURL: e.bannerURL,
          bannerAnimatedURL: e.bannerAnimatedURL,
        });
    },
  },
]);
//# sourceMappingURL=64316.f635f7038d8b609e.js.map
