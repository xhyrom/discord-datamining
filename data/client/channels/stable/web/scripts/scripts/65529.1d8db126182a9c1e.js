"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65529"],
  {
    31956(e, t, i) {
      i.d(t, { A: () => a });
      var n = i(64700),
        s = i(702841),
        r = i(47675),
        l = i(590180);
      function a(e) {
        let { skuId: t, openedAt: i, context: a, analyticsLocations: c } = e,
          o = (0, s.bG)([l.A], () => l.A.getProductFetch(t)),
          d = (0, n.useRef)(void 0);
        (0, n.useEffect)(() => {
          if (null == t) return;
          let e = Date.now();
          null == d.current && null != i && (d.current = e - i),
            o?.state === "success" &&
              (0, r.wd)({
                profileUi: "PROFILE_FRAME",
                timeToInteractiveMs: d.current,
                timeToLoadMs: null != i ? e - i : void 0,
                timeToFetchMs:
                  o?.startedAt != null && o?.endedAt != null
                    ? o.endedAt - o.startedAt
                    : void 0,
                viewStartedAt: i,
                fetchStartedAt: o?.startedAt,
                analyticsLocations: c,
                ...a,
              });
        }, [t, o]);
      }
    },
    645507(e, t, i) {
      i.d(t, { A: () => r });
      var n = i(403918),
        s = i(985018);
      function r(e) {
        let t =
          null != e && e.size > 0 ? n.P2.filter((t) => !e.has(t.value)) : n.P2;
        if (0 === t.length)
          return {
            value: n.W_.ADD_STATUS,
            label: () => s.intl.string(s.t.Vq4UmS),
          };
        let i = Math.floor(Math.random() * t.length);
        return t[i];
      }
    },
    744753(e, t, i) {
      i.d(t, { A: () => q });
      var n = i(627968),
        s = i(64700),
        r = i(503698),
        l = i.n(r),
        a = i(17928),
        c = i(554146),
        o = i(862482),
        d = i(939249),
        u = i(789645),
        I = i(403581),
        _ = i(34188),
        E = i(534514),
        N = i(688810),
        P = i(693477),
        S = i(915089),
        A = i(771781),
        R = i(826673),
        x = i(367727),
        h = i(725807),
        m = i(976860),
        L = i(967198),
        M = i(183555),
        v = i(873298),
        O = i(834730),
        f = i(349288),
        j = i(932001),
        D = i(840387),
        T = i(253932),
        U = i(780964),
        F = i(858897),
        k = i(21973),
        p = i(49999),
        C = i(985018),
        g = i(737923);
      function b() {
        let e = (0, k.lX)("UserProfilePrivacyNotice"),
          t = (0, D.Z)(),
          i = T.KP.useSetting();
        return s.useMemo(
          () =>
            e && t && i !== v.KP.FRIENDS_AND_ALL_GUILDS
              ? [c.M.PRIVATE_PROFILE_INLINE_NOTICE]
              : [],
          [e, t, i],
        );
      }
      function y(e) {
        let { className: t } = e,
          i = b(),
          [s, r] = (0, j.kn)(i),
          a = T.KP.useSetting();
        if (s !== c.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
        let o = (function (e) {
          switch (e) {
            case v.KP.FRIENDS_ONLY:
              return C.t["0UBDvq"];
            case v.KP.FRIENDS_AND_SMALL_GUILDS:
              return C.t["9AvQO/"];
            case v.KP.FRIENDS_AND_ALL_GUILDS:
            default:
              return C.t.dqQ7AN;
          }
        })(a);
        return (0, n.jsxs)("div", {
          className: l()(g.kL, t),
          children: [
            (0, n.jsx)(O.E, {
              variant: "text-sm/normal",
              className: g.Qq,
              children: C.intl.format(o, {
                privacySettingsLink: (e, t) =>
                  (0, n.jsx)(
                    f.Anchor,
                    {
                      onClick: () =>
                        (0, F.openUserSettings)(U.X.PROFILE_PRIVACY_CATEGORY),
                      children: e,
                    },
                    t,
                  ),
              }),
            }),
            (0, n.jsx)(d.D, {
              "aria-label": C.intl.string(C.t.WAI6xu),
              onClick: () => r(p.i.USER_DISMISS),
              className: g.b,
              children: (0, n.jsx)(u.P, { size: "sm", color: "currentColor" }),
            }),
          ],
        });
      }
      var V = i(939496),
        Y = i(993401),
        z = i(518477),
        G = i(652215),
        w = i(788868),
        K = i(996988),
        W = i(738585);
      function H(e) {
        let { onClose: t } = e;
        return (0, n.jsx)(d.D, {
          "aria-label": C.intl.string(C.t.WAI6xu),
          onClick: t,
          className: W.Sc,
          children: (0, n.jsx)(u.P, {
            size: "xs",
            className: W.Nk,
            color: "currentColor",
          }),
        });
      }
      function J(e) {
        let { tiny: t, isPremiumUser: i, onInteraction: s } = e,
          { analyticsLocations: r, newestAnalyticsLocation: l } = (0, N.Ay)(),
          { trackUserProfileAction: a } = (0, M.NJ)();
        return (0, n.jsxs)("div", {
          className: W.JO,
          children: [
            (0, n.jsx)("div", {
              className: W.xB,
              children: i
                ? (0, n.jsx)(Y.FD, {
                    action: z.pt.VIEW_PREMIUM_PERKS,
                    fullWidth: !0,
                    size: "sm",
                    variant: "secondary",
                    icon: I.t,
                    text: C.intl.string(C.t["0Q61kF"]),
                    onClick: () => {
                      (0, m.pX)(G.BVt.APPLICATION_STORE), s?.();
                    },
                  })
                : (0, n.jsx)(h.A, {
                    onClick: () => {
                      a({ action: z.pt.GET_PREMIUM }), s?.();
                    },
                    textOptions: { textOverride: C.intl.string(C.t.x6rkDp) },
                    subscriptionTier: w.pe.TIER_2,
                    premiumModalAnalyticsLocation: {
                      section: G.JJy.USER_PROFILE,
                    },
                    className: W.Js,
                    size: t ? o.$n.Sizes.TINY : o.$n.Sizes.SMALL,
                    look: o.$n.Looks.FILLED,
                    color: o.$n.Colors.PRIMARY,
                    onlyShineOnHover: !0,
                    fullWidth: !0,
                  }),
            }),
            (0, n.jsx)("div", {
              className: W.xB,
              children: (0, n.jsx)(Y.FD, {
                action: z.pt.VISIT_SHOP,
                fullWidth: !0,
                icon: _.U,
                text: C.intl.string(C.t.b2d0N0),
                size: "sm",
                variant: "secondary",
                onClick: () => {
                  (0, P.Cz)({ analyticsLocations: r, analyticsSource: l }),
                    s?.();
                },
              }),
            }),
          ],
        });
      }
      function q(e) {
        let { isPremiumUser: t, onInteraction: i, className: r } = e,
          o = (function () {
            let e = b(),
              [t] = (0, j.kn)(e);
            return t === c.M.PRIVATE_PROFILE_INLINE_NOTICE;
          })(),
          d = (0, S.GV)(),
          { themeType: u } = (0, V.E)(),
          I = u === K.d.MODAL,
          _ = (0, R.JZ)(c.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
          N = (0, a.bG)([L.A], () => L.A.getGuildId());
        if (
          (s.useEffect(() => {
            if (!_ && !o)
              return (
                (0, x.Vh)(c.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                () => {
                  (0, A.pd)(
                    { content: c.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS },
                    !1,
                  );
                }
              );
          }, [_, o]),
          o)
        )
          return (0, n.jsx)(y, { className: r });
        if (_) return null;
        let P = (0, n.jsx)(E.D, {
            variant: "text-sm/normal",
            id: d,
            children: C.intl.string(C.t.EIYbj6),
          }),
          h = (0, n.jsx)(H, {
            onClose: () => {
              (0, R.Dr)(c.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                dismissAction: p.i.USER_DISMISS,
                guildId: N,
                forceTrack: !0,
              });
            },
          }),
          m = (0, n.jsx)(J, { isPremiumUser: t, onInteraction: i, tiny: I });
        return I
          ? (0, n.jsx)("aside", {
              className: l()(W.Zj, r),
              "aria-labelledby": d,
              children: (0, n.jsxs)("div", {
                className: l()(W.xw, W.xq),
                children: [
                  P,
                  (0, n.jsxs)("div", {
                    className: W.A_,
                    children: [
                      (0, n.jsx)("div", { children: m }),
                      (0, n.jsx)("div", { children: h }),
                    ],
                  }),
                ],
              }),
            })
          : (0, n.jsx)("aside", {
              className: l()(W.Zj, r),
              "aria-labelledby": d,
              children: (0, n.jsxs)("div", {
                className: l()(W.xw, W.K1),
                children: [
                  (0, n.jsxs)("div", {
                    className: W.$P,
                    children: [P, (0, n.jsx)("div", { children: h })],
                  }),
                  m,
                ],
              }),
            });
      }
    },
  },
]);
//# sourceMappingURL=65529.1d8db126182a9c1e.js.map
