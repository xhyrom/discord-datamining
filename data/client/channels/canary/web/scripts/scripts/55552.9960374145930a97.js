"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55552"],
  {
    718019(i, s, a) {
      a.d(s, { A: () => V, V: () => P });
      var e = a(627968),
        t = a(64700),
        l = a(503698),
        r = a.n(l),
        n = a(17928),
        o = a(97808),
        u = a(133171),
        c = a(890856),
        d = a(960076),
        A = a(793574),
        p = a(688810),
        m = a(178418),
        v = a(290863),
        N = a(927578),
        R = a(19575),
        b = a(183555),
        g = a(146655),
        h = a(854627),
        I = a(939496),
        T = a(518477),
        k = a(652215),
        y = a(788868),
        C = a(985253),
        E = a(985018),
        S = a(106106);
      let O = R.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
      function P(i) {
        let {
            user: s,
            displayProfile: a,
            guildId: e,
            channelId: l,
            themeType: r,
            animateOnHover: o,
            previewStatus: c,
            specOverrides: A,
            avatarDecorationOverride: p,
            avatarOverride: R,
          } = i,
          { theme: b } = (0, I.E)(),
          E = N.Ay.isPremiumAtLeast(a?.premiumType, y.PremiumTypes.TIER_2),
          S = t.useMemo(() => s.isNonUserBot() || (0, m.c)(s, l), [s, l]),
          { live: O } = (0, g.A)(s.id),
          [P] = O,
          {
            status: V,
            isMobileOnline: M,
            isVROnline: _,
          } = (0, n.cf)([v.A], () => ({
            status: (0, d.A)(P) ? k.clD.STREAMING : v.A.getStatus(s.id),
            isMobileOnline: v.A.isMobileOnline(s.id),
            isVROnline: v.A.isVROnline(s.id),
          })),
          f = A?.avatarSize ?? C.T[r].avatarSize,
          {
            avatarDecorationSrc: j,
            avatarSrc: w,
            eventHandlers: x,
          } = (0, h.A)({
            userId: s.id,
            guildId: null != a ? a.guildId : e,
            size: f,
            animateOnHover: o,
            avatarDecorationOverride: p,
            avatarOverride: R,
          });
        return {
          avatarProps: {
            src: w,
            avatarDecoration: j,
            size: f,
            "aria-label": s.username,
            status: S ? k.clD.UNKNOWN : void 0 !== c ? c : V,
            statusBackdropColor: E && !S ? (0, u.C$)(b) : void 0,
            isMobile: M,
            isVR: _,
            statusTooltip: !0,
            statusTooltipDelay: T.In,
          },
          eventHandlers: x,
        };
      }
      function V(i) {
        let { onOpenProfile: s, className: a, ...t } = i,
          { analyticsLocations: l } = (0, p.Ay)(A.A.AVATAR),
          { trackUserProfileAction: n } = (0, b.NJ)(),
          { avatarProps: o, eventHandlers: u } = P(t),
          d = r()(S.my, a);
        return null == s
          ? (0, e.jsx)("div", {
              ...u,
              className: d,
              children: (0, e.jsx)(O, { ...o }),
            })
          : (0, e.jsx)(c.s, {
              "aria-label": E.intl.string(E.t["+Xp3hq"]),
              ...u,
              className: r()(d, S.vk),
              focusProps: { ringClassName: S.Rg },
              onClick: () => {
                n({ action: "PRESS_VIEW_PROFILE", analyticsLocations: l }),
                  s?.();
              },
              children: (0, e.jsx)(O, { ...o, imageClassName: S.Lw }),
            });
      }
    },
  },
]);
//# sourceMappingURL=55552.9960374145930a97.js.map
