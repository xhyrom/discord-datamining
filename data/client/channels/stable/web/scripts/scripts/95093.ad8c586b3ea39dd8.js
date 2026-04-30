"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95093"],
  {
    101928(e, r, n) {
      n.d(r, { A: () => c });
      var l = n(317097),
        t = n(17928),
        i = n(374994),
        d = n(462887),
        s = n(736653),
        u = n(775602),
        o = n(654107),
        a = n(543699),
        h = n(837529),
        m = n(652215);
      function c(e) {
        let {
            user: r,
            displayProfile: n,
            pendingThemeColors: c,
            pendingAvatarSrc: v,
            isPreview: A,
            forceUserTheme: f,
          } = e,
          R = (0, s.Ay)(),
          p = (0, h.Wd)(),
          y = (0, t.bG)([u.A], () => u.A.syncProfileThemeWithUserTheme),
          C = v ?? r?.getAvatarURL(n?.guildId, 80),
          N = (0, i.nt)("PRIMARY_530", { saturation: 1 }),
          [w, T] = (0, o.rh)(C, N, !1);
        if (null != p) return p;
        if (!n?.canEditThemes && !A)
          return { theme: R, primaryColor: null, secondaryColor: null };
        let b = n?.getPreviewThemeColors(c),
          O = b?.[0] ?? (0, l.LX)(w),
          j = b?.[1] ?? (0, l.LX)(T),
          x = y || f ? R : ((0, a.tM)(O) ?? R);
        return (
          x === m.NJ8.DARK && (0, d.M)(R)
            ? (x = R)
            : x === m.NJ8.DARK && (0, d.q)(R) && (x = m.NJ8.DARKER),
          { theme: x, primaryColor: O, secondaryColor: j }
        );
      }
    },
    837529(e, r, n) {
      n.d(r, { Nx: () => a, Qq: () => h, Wd: () => o, Zt: () => u });
      var l = n(353640),
        t = n(462887),
        i = n(736653),
        d = n(543699),
        s = n(652215);
      let u = (0, l.v)()((e) => ({
        themeOverride: null,
        savedClientTheme: null,
        setThemeOverride: (r) => e({ themeOverride: r }),
        setSavedClientTheme: (r) => e({ savedClientTheme: r }),
      }));
      function o() {
        let e,
          r = u((e) => e.themeOverride),
          n = (0, i.Ay)();
        if (null == r) return null;
        let l = null,
          o = null;
        return (
          "nitro" === r.mode
            ? ((l = r.themeColors?.[0] ?? null),
              (o = r.themeColors?.[1] ?? null),
              (e = null != l && null != o ? ((0, d.tM)(l) ?? n) : n))
            : (e = r.themeType ?? n),
          e === s.NJ8.DARK && (0, t.M)(n)
            ? (e = n)
            : e === s.NJ8.DARK && (0, t.q)(n) && (e = s.NJ8.DARKER),
          { theme: e, primaryColor: l, secondaryColor: o }
        );
      }
      function a() {
        let e = u((e) => e.themeOverride);
        return null != e && ("non-nitro" === e.mode || !0 === e.disableBanner);
      }
      function h() {
        let e = u((e) => e.themeOverride);
        return null != e && "non-nitro" === e.mode;
      }
    },
    946356(e, r, n) {
      n.d(r, { A: () => c });
      var l = n(627968),
        t = n(64700),
        i = n(503698),
        d = n.n(i),
        s = n(86182),
        u = n(486020),
        o = n(101928),
        a = n(920601),
        h = n(939496),
        m = n(41551);
      let c = Object.assign(
        t.forwardRef(function (e, r) {
          let {
              user: n,
              displayProfile: t,
              themeType: i,
              className: c,
              pendingThemeColors: v,
              themeOverride: A,
              children: f,
              isPrivate: R = !1,
              forceShowPremium: p = !1,
              forceUserTheme: y = !1,
            } = e,
            {
              theme: C,
              primaryColor: N,
              secondaryColor: w,
            } = (0, o.A)({
              user: n,
              displayProfile: t,
              pendingThemeColors: v,
              isPreview: p,
              forceUserTheme: y,
            }),
            { profileThemeStyle: T, profileThemeClassName: b } = (0, a.A)({
              theme: A ?? C,
              themeType: i,
              primaryColor: N,
              secondaryColor: w,
              forceUserTheme: y,
            }),
            O = (0, u.VI)(t?.banner);
          return (0, l.jsx)("div", {
            className: d()(m.A7, b, c, R && m.Gw, O && "has-animated-banner"),
            style: T,
            ref: r,
            children: (0, l.jsx)("div", {
              className: m.vW,
              children: (0, l.jsx)(s.w, {
                theme: A ?? C,
                children: (0, l.jsx)(h.U, {
                  themeType: i,
                  theme: A ?? C,
                  primaryColor: N,
                  secondaryColor: w,
                  userId: n.id,
                  children: f,
                }),
              }),
            }),
          });
        }),
        {
          Overlay: t.forwardRef(function (e, r) {
            let { children: n, className: t } = e;
            return (0, l.jsx)("div", {
              ref: r,
              className: d()(m.Lw, t),
              children: n,
            });
          }),
        },
      );
    },
  },
]);
//# sourceMappingURL=95093.ad8c586b3ea39dd8.js.map
