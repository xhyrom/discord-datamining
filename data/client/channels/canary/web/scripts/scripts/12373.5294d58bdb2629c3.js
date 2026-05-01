"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12373"],
  {
    454938(o, r, s) {
      s.d(r, { A: () => n });
      var e = s(426983),
        a = s(176128);
      let l = new Set([
        e._.PARTNERED,
        e._.VERIFIED,
        e._.VERIFIED_AND_PARTNERED,
        e._.COMMUNITY,
        e._.DISCOVERABLE,
      ]);
      function n(o) {
        if (null == o) return !1;
        let r = (0, a.Jp)(o),
          s = (0, e.K)(r);
        return l.has(s);
      }
    },
    57991(o, r, s) {
      s.d(r, { A: () => W });
      var e = s(627968),
        a = s(64700),
        l = s(503698),
        n = s.n(l),
        t = s(17928),
        u = s(661531),
        i = s(462887),
        c = s(306471),
        C = s(478016),
        d = s(565787),
        _ = s(332837),
        E = s(998445),
        A = s(834730),
        f = s(781696),
        m = s(939249),
        g = s(404374),
        I = s(509536),
        h = s(496885),
        R = s(363195),
        w = s(696451),
        D = s(287809),
        k = s(816166),
        N = s(813098),
        x = s(473145),
        p = s(426983),
        b = s(176128),
        T = s(981883),
        j = s(652215),
        L = s(985018),
        M = s(40544);
      let H = {
        [p._.STAFF]: {
          IconComponent: c.V,
          foregroundDarkColor: u.A.unsafe_rawColors.WHITE.css,
          foregroundLightColor: u.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: u.A.unsafe_rawColors.GREEN_360.css,
          backgroundLightColor: u.A.unsafe_rawColors.GREEN_360.css,
        },
        [p._.VERIFIED_AND_PARTNERED]: {
          IconComponent: C.U,
          foregroundDarkColor: u.A.unsafe_rawColors.WHITE.css,
          foregroundLightColor: u.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: u.A.unsafe_rawColors.GREEN_360.css,
          backgroundLightColor: u.A.unsafe_rawColors.GREEN_360.css,
        },
        [p._.VERIFIED]: {
          IconComponent: C.U,
          foregroundDarkColor: u.A.unsafe_rawColors.WHITE.css,
          foregroundLightColor: u.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: u.A.unsafe_rawColors.GREEN_360.css,
          backgroundLightColor: u.A.unsafe_rawColors.GREEN_360.css,
        },
        [p._.PARTNERED]: {
          IconComponent: (0, d.k)(k.A),
          foregroundDarkColor: u.A.unsafe_rawColors.WHITE.css,
          foregroundLightColor: u.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: u.A.unsafe_rawColors.BRAND_500.css,
          backgroundLightColor: u.A.unsafe_rawColors.BRAND_500.css,
        },
        [p._.COMMUNITY]: {
          IconComponent: _.f,
          foregroundDarkColor: u.A.unsafe_rawColors.PRIMARY_500.css,
          foregroundLightColor: u.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: u.A.unsafe_rawColors.WHITE.css,
          backgroundLightColor: u.A.unsafe_rawColors.PRIMARY_500.css,
          premiumBackgroundColor: g.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
          premiumForegroundColor: u.A.unsafe_rawColors.WHITE.css,
          sizeAdjustment: 2,
        },
        [p._.DISCOVERABLE]: {
          IconComponent: E.L,
          foregroundDarkColor: u.A.unsafe_rawColors.PRIMARY_500.css,
          foregroundLightColor: u.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: u.A.unsafe_rawColors.WHITE.css,
          backgroundLightColor: u.A.unsafe_rawColors.PRIMARY_500.css,
          premiumBackgroundColor: g.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
          premiumForegroundColor: u.A.unsafe_rawColors.WHITE.css,
          sizeAdjustment: 2,
        },
        [p._.NONE]: {},
      };
      function G(o) {
        let { guildTraits: r } = o;
        return (0, e.jsxs)("div", {
          className: M.V8,
          children: [
            (0, e.jsxs)("div", {
              className: n()(M.f, M.N5),
              children: [
                (0, e.jsx)(N.A, { width: 18, height: 18, className: M.F8 }),
                (0, e.jsx)(A.E, {
                  variant: "text-xs/semibold",
                  color: "always-white",
                  children: x.gb(r.premiumTier),
                }),
              ],
            }),
            (0, e.jsx)("div", {
              className: M.f,
              children: (0, e.jsx)(A.E, {
                variant: "text-xs/semibold",
                color: "always-white",
                children: L.intl.format(L.t["dR/SVH"], {
                  count: r.premiumSubscriberCount,
                }),
              }),
            }),
          ],
        });
      }
      function v(o) {
        let { badgeType: r, guildTraits: s } = o,
          {
            tooltipTitle: a,
            tooltipSubtitle: l,
            tooltipDescription: n,
          } = (0, T.V)(r, s.visibility);
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsxs)("div", {
              className: M.Rf,
              children: [
                (0, e.jsx)(A.E, {
                  color: "interactive-text-active",
                  variant: "text-xs/bold",
                  children: a,
                }),
                null != l
                  ? (0, e.jsx)(A.E, {
                      color: "text-muted",
                      variant: "text-xs/medium",
                      children: l,
                    })
                  : null,
                null != n
                  ? (0, e.jsx)(A.E, {
                      color: "text-muted",
                      variant: "text-xs/medium",
                      children: n,
                    })
                  : null,
              ],
            }),
            s.premium ? (0, e.jsx)(G, { guildTraits: s }) : null,
          ],
        });
      }
      function W(o) {
        let r,
          s,
          {
            guild: l,
            tooltipColor: n = f.ST.Colors.BRAND,
            tooltipPosition: u,
            className: c,
            flowerStarClassName: C,
            iconClassName: d,
            badgeStrokeColor: _,
            badgeColor: E,
            disableBoostClick: A,
            "aria-label": g = !1,
            ...k
          } = o,
          N = k.size ?? 18,
          x = (0, t.bG)([D.default, w.Ay], () => {
            let o = D.default.getCurrentUser();
            return w.Ay.isMember(l?.id, o?.id);
          }),
          T = (0, t.bG)([R.A], () => R.A.theme),
          L = (0, b.Jp)(l),
          G = (0, p.K)(L),
          W = a.useMemo(() => L.premium && x && !A, [A, L.premium, x]),
          U = a.useCallback(
            (o) => {
              W &&
                (o.stopPropagation(),
                o.preventDefault(),
                (0, I.K4)({
                  guildId: l.id,
                  location: {
                    section: j.JJy.GUILD_HEADER,
                    object: j.ZSU.BOOST_GEM_ICON,
                  },
                }));
            },
            [W, l.id],
          );
        if (G === p._.NONE) return null;
        let {
          IconComponent: B,
          backgroundDarkColor: S,
          backgroundLightColor: V,
          foregroundDarkColor: F,
          foregroundLightColor: O,
          premiumBackgroundColor: P,
          premiumForegroundColor: y,
          sizeAdjustment: z,
        } = H[G];
        if (null == B) return null;
        L.premium && ((r = y), (s = P));
        let Y = (0, i.M)(T) ? F : O,
          K = (0, i.M)(T) ? S : V;
        (r = r ?? Y), (s = s ?? K);
        let J = Math.floor(0.75 * N) - (z ?? 0);
        return (0, e.jsx)(f.ST, {
          color: n,
          position: u,
          "aria-label": g,
          text: (0, e.jsx)(v, { badgeType: G, guildTraits: L }),
          tooltipContentClassName: M.Hj,
          children: (o) =>
            (0, e.jsx)(m.D, {
              onClick: U,
              tabIndex: W ? 0 : -1,
              children: (0, e.jsx)(h.A, {
                ...o,
                className: c,
                flowerStarClassName: C,
                allowFullSizedIcon: !0,
                color: s ?? E,
                stroke: _,
                size: N,
                children: (0, e.jsx)(B, {
                  size: "custom",
                  width: J,
                  height: J,
                  className: d,
                  color: r ?? "currentColor",
                }),
              }),
            }),
        });
      }
    },
  },
]);
//# sourceMappingURL=12373.5294d58bdb2629c3.js.map
