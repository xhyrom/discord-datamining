"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4551"],
  {
    817577(e) {
      e.exports = "/assets/05ec8947238231e4.svg";
    },
    31502(e, t, s) {
      s.d(t, { Q: () => l, l: () => r });
      let a = (0, s(945810).mj)({
        name: "2026-03-croissant",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
      });
      function r(e) {
        let { enabled: t } = a.useConfig({ location: e });
        return t;
      }
      function l(e) {
        let { enabled: t } = a.getConfig({ location: e });
        return t;
      }
    },
    872725(e, t, s) {
      s.d(t, { A: () => C });
      var a = s(627968),
        r = s(64700),
        l = s(503698),
        i = s.n(l),
        n = s(524007),
        d = s(844222),
        o = s(502377),
        c = s(799226),
        u = s(359778),
        m = s(544888);
      let h = {
          HoverLightmode: { posy: "number", posx: "number" },
          BaseGlow: {},
          ButtonFillLightmode: {},
          HoverDarkmode: { posy: "number", posx: "number" },
          BaseGlowRemapped: {},
          ButtonFillDarkmode: {},
        },
        x = {},
        C = (e) => {
          let {
              children: t,
              id: s,
              tabIndex: l,
              className: C,
              cardClassName: _,
              cardStyle: p = x,
              cardType: g,
              artboard: f = "BaseGlowRemapped",
              fit: R = "layout",
              glowing: j = !1,
              glowAmount: v = 8,
              blurAmount: E = 30,
              hueRotate: N = 0,
              isReducedMotion: A,
              onMouseEnter: b,
            } = e,
            y = r.useRef(null),
            P = r.useRef(null),
            { status: D, buffer: w } = (0, c.CE)(j ? n.A : null),
            I = r.useContext(d.C),
            O = A ?? I.reducedMotion.enabled,
            T = {
              "--custom-glow-amount": `${v}px`,
              "--custom-blur-amount": `${E}px`,
              "--custom-hue-rotate": `${N}deg`,
              "--custom-glow-opacity": +(0 !== v),
            };
          return (0, a.jsxs)("div", {
            id: s,
            ref: y,
            tabIndex: l,
            className: i()(m.k, C),
            style: T,
            onMouseEnter: b,
            children: [
              j &&
                D !== c.BW.Loading &&
                (0, a.jsx)(o.w, {
                  buffer: w,
                  artboard: f,
                  artboardProperties: h,
                  eventTargetRef: y,
                  className: m.Q,
                  ref: P,
                  fit: R,
                  withReducedMotion: O ? "halt" : "play",
                }),
              (0, a.jsx)(u.Z, {
                type: g ?? u.s.CUSTOM,
                className: _,
                style: p,
                children: t,
              }),
            ],
          });
        };
    },
    398523(e, t, s) {
      s.d(t, { Ay: () => i, F0: () => l, H7: () => r });
      var a = s(945810);
      let r = 15,
        l = 20,
        i = (0, a.mj)({
          name: "2026-03-steelseries-3p-recurring",
          kind: "user",
          defaultConfig: { enabled: !1 },
          variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
        });
    },
    920050(e, t, s) {
      s.r(t),
        s.d(t, {
          BADGE_CARD_ID: () => a,
          CLIENT_THEMES_CARD_ID: () => r,
          CUSTOM_APP_ICONS_CARD_ID: () => l,
          CUSTOM_SOUNDS_CARD_ID: () => i,
          DISPLAY_NAME_STYLES_CARD_ID: () => n,
          EARLY_ACCESS_CARD_ID: () => d,
          ENTRANCE_SOUNDS_CARD_ID: () => o,
          HD_VIDEO_CARD_ID: () => c,
          LARGE_UPLOADS_CARD_ID: () => u,
          LOGITECH_3PP_CARD_ID: () => E,
          MORE_EMOJIS_CARD_ID: () => m,
          NITRO_ORBS_REWARDS_CARD_ID: () => A,
          PERMADECOS_CARD_ID: () => h,
          PREMIUM_GROUP_CARD_ID: () => x,
          PROFILES_CARD_ID: () => C,
          QUEST_ORB_MULTIPLIER_CARD_ID: () => N,
          RECURRING_3P_PROMOTIONS_CARD_ID: () => _,
          SERVER_BOOSTS_CARD_ID: () => p,
          SPECIAL_MEMBER_PRICING_CARD_ID: () => g,
          SPECIAL_STICKERS_CARD_ID: () => f,
          SUPER_REACTIONS_CARD_ID: () => R,
          TENURE_BADGE_CARD_ID: () => j,
          VIDEO_BACKGROUNDS_CARD_ID: () => v,
          XBOX_PREMIUM_PERK_CARD_ID: () => y,
          XBOX_PREMIUM_PERK_HERO_ID: () => b,
        });
      let a = "badge",
        r = "clientThemes",
        l = "customAppIcons",
        i = "customSounds",
        n = "displayNameStyles",
        d = "earlyAccess",
        o = "entranceSounds",
        c = "hdVideo",
        u = "largeUploads",
        m = "moreEmojis",
        h = "permadecos",
        x = "premiumGroup",
        C = "profiles",
        _ = "3p",
        p = "serverBoosts",
        g = "memberPricing",
        f = "specialStickers",
        R = "superReactions",
        j = "tenureBadge",
        v = "videoBackgrounds",
        E = "logitech3PP",
        N = "orbMultiplier",
        A = "nitroOrbsRewards",
        b = "xgppHero",
        y = "xgppPerk";
    },
    94264(e, t, s) {
      s.d(t, { A: () => C });
      var a = s(627968);
      s(64700);
      var r = s(503698),
        l = s.n(r),
        i = s(892227),
        n = s(661531),
        d = s(403581),
        o = s(318254),
        c = s(914410),
        u = s(636592),
        m = s(366505),
        h = s(992501);
      let x = {
          churning: {
            start: n.A.unsafe_rawColors.OPACITY_RED_80.css,
            end: n.A.unsafe_rawColors.RED_NEW_30.css,
          },
          active: {
            start: n.A.unsafe_rawColors.OPACITY_GREEN_80.css,
            end: n.A.unsafe_rawColors.GREEN_NEW_30.css,
          },
        },
        C = (e) => {
          let { className: t } = e,
            {
              passesProgressBarInvariant: s,
              programReward: r,
              totalDays: n,
            } = (0, m.F)();
          if (!s || null == r || null == n) return null;
          let C = (0, i.default)(new Date(r.next_reward_date), new Date()),
            _ = r.program_current_state === u.L.PREMIUM_CHURNING,
            p = _ ? x.churning.start : x.active.start,
            g = _ ? x.churning.end : x.active.end;
          return (0, a.jsxs)("div", {
            className: l()(h.k, t),
            children: [
              (0, a.jsx)(c.Ay, {
                variant: c.qP.UNSET,
                progress: n - C,
                maximum: n,
                override: { default: { gradientStart: p, gradientEnd: g } },
              }),
              _
                ? (0, a.jsx)(d.t, {
                    size: "sm",
                    color: "currentColor",
                    className: h.K,
                  })
                : (0, a.jsx)(o.C, {
                    size: "sm",
                    color: "currentColor",
                    className: h.K,
                  }),
            ],
          });
        };
    },
    549384(e, t, s) {
      s.d(t, { L: () => V, A: () => Z });
      var a = s(627968),
        r = s(64700),
        l = s(503698),
        i = s.n(l),
        n = s(230109),
        d = s(534514),
        o = s(834730),
        c = s(688810),
        u = s(366505),
        m = s(954571),
        h = s(892227),
        x = s(821609),
        C = s(43990),
        _ = s(403581),
        p = s(508770),
        g = s(318254),
        f = s(825484),
        R = s(462887),
        j = s(359778),
        v = s(241524),
        E = s(736653),
        N = s(303136),
        A = s(636592),
        b = s(976860),
        y = s(780964),
        P = s(858897),
        D = s(975571),
        w = s(872725),
        I = s(566119),
        O = s(94264),
        T = s(652215),
        S = s(758836),
        M = s(901123),
        B = s(490285),
        L = s(985018),
        k = s(787413),
        U = s(909340),
        F = s(455482);
      let G = D.A.getArticleURL(T.MVz.ORBS_REWARDS_FAQ);
      function H(e) {
        (0, I.o8)(e), window.open(G, "_blank");
      }
      let W = (e) => {
        let { className: t } = e,
          { passesGeneralUIInvariant: s, programReward: l } = (0, u.F)({
            location: "PremiumTenureRewardsOrbsCard",
          }),
          n = (0, v.A)("(min-width: 720px)"),
          c = (0, E.DP)(),
          m = r.useMemo(
            () => ({
              hueRotate: 25,
              glowAmount: (0, R.M)(c) ? 2 : 8,
              blurAmount: 10,
            }),
            [c],
          );
        if (!s || null == l) return null;
        let D = (function (e, t) {
          let s = e.program_current_state,
            r =
              null != e.next_reward_date && "" !== e.next_reward_date
                ? (0, h.default)(new Date(e.next_reward_date), new Date())
                : null,
            l = e?.total_rewarded_from_program;
          switch (s) {
            case A.L.ACTIVE:
              if (null == r || r < 0) return null;
              return {
                displayTotalLifetimeRewards: null != l,
                displayProgressBar: !0,
                actionButton: (0, a.jsx)(x.$, {
                  text: L.intl.string(B.default.BxjHiu),
                  variant: t ? "overlay-primary" : "secondary",
                  onClick: () => {
                    (0, I.WD)(s),
                      (0, b.pX)(M.BV.COLLECTIBLES_SHOP_WITH_TAB(S.G2.ORBS));
                  },
                }),
                headerText: L.intl.format(B.default.BxLJQL, {
                  days: Math.max(1, r),
                  orbsCount: e.reward_amount,
                }),
                subheaderText: L.intl.format(B.default.tUV1vV, {
                  helpdeskArticle: () => H(s),
                }),
              };
            case A.L.PAYMENT_PROCESSING:
              return {
                displayTotalLifetimeRewards: !1,
                displayProgressBar: !1,
                actionButton: (0, a.jsx)(x.$, {
                  text: L.intl.string(B.default.KVCfnE),
                  variant: t ? "overlay-primary" : "secondary",
                  onClick: () => {
                    (0, I.CC)(s), (0, P.openUserSettings)(y.X.BILLING_PANEL);
                  },
                }),
                headerText: L.intl.string(B.default.uuZJXR),
                subheaderText: L.intl.format(B.default.dkeEV7, {
                  helpdeskArticle: () => H(s),
                }),
              };
            case A.L.PAYMENT_ERROR:
              return {
                displayTotalLifetimeRewards: null != l,
                displayProgressBar: !1,
                actionButton: (0, a.jsx)(C.N, {
                  theme: t ? T.NJ8.DARKER : void 0,
                  children: (e) =>
                    (0, a.jsx)("span", {
                      className: e,
                      children: (0, a.jsx)(x.$, {
                        text: L.intl.string(B.default.KVCfnE),
                        variant: "critical-secondary",
                        onClick: () => {
                          (0, I.ue)(s),
                            (0, P.openUserSettings)(y.X.BILLING_PANEL);
                        },
                      }),
                    }),
                }),
                headerText: L.intl.string(B.default["+O9Asn"]),
                subheaderText: L.intl.format(B.default.nWKEBZ, {
                  helpdeskArticle: () => H(s),
                }),
              };
            case A.L.PROGRAM_ROLLBACK:
              return {
                displayTotalLifetimeRewards: null != l,
                displayProgressBar: null != r,
                actionButton: (0, a.jsx)(x.$, {
                  text: L.intl.string(B.default["wLAd/+"]),
                  variant: t ? "overlay-primary" : "secondary",
                  onClick: () => {
                    (0, I.WD)(s),
                      (0, b.pX)(M.BV.COLLECTIBLES_SHOP_WITH_TAB(S.G2.ORBS));
                  },
                }),
                headerText: L.intl.string(B.default.zF0HnJ),
                subheaderText: L.intl.format(B.default["5tzNTa"], {
                  helpdeskArticle: () => H(s),
                }),
              };
            case A.L.PREMIUM_CHURNING:
              return {
                displayTotalLifetimeRewards: null != l,
                displayProgressBar: null != r,
                actionButton: (0, a.jsx)(x.$, {
                  text: L.intl.string(B.default.FToh6D),
                  variant: t ? "overlay-primary" : "secondary",
                  icon: _.t,
                  onClick: () => {
                    (0, I.Jv)(s),
                      (0, P.openUserSettings)(y.X.SUBSCRIPTIONS_PANEL);
                  },
                }),
                headerText: L.intl.string(B.default.ISnOet),
                subheaderText: L.intl.format(B.default["vjaRZ/"], {
                  helpdeskArticle: () => H(s),
                }),
              };
            default:
              return null;
          }
        })(l, n);
        if (null == D) return null;
        let {
          displayTotalLifetimeRewards: G,
          displayProgressBar: W,
          actionButton: K,
          headerText: V,
          subheaderText: Z,
        } = D;
        return (0, a.jsx)("div", {
          className: i()(k.Hc, t),
          children: (0, a.jsxs)(w.A, {
            cardType: j.s.CUSTOM,
            cardClassName: k.Nr,
            glowing: !0,
            ...m,
            children: [
              (0, a.jsx)(N.A, { className: k.Ki, src: U.A }),
              (0, a.jsxs)("div", {
                className: k.zK,
                children: [
                  (0, a.jsx)("img", {
                    src: F.A,
                    className: k._e,
                    alt: "",
                    "aria-hidden": !0,
                  }),
                  (0, a.jsx)("div", { className: k.mR }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: k.FS,
                children: [
                  (0, a.jsx)(C.N, {
                    theme: n ? T.NJ8.DARKER : void 0,
                    children: (e) =>
                      (0, a.jsx)("div", {
                        className: i()(e, k.aZ),
                        children: (0, a.jsx)(p.E, {
                          type: "beta",
                          variant: "expressive",
                        }),
                      }),
                  }),
                  (0, a.jsx)(d.D, {
                    variant: "heading-xl/bold",
                    className: k.R_,
                    children: V,
                  }),
                  (0, a.jsx)(o.E, {
                    variant: "text-md/medium",
                    className: k.G3,
                    children: Z,
                  }),
                  W && (0, a.jsx)(O.A, { className: k.L$ }),
                  G &&
                    l.total_rewarded_from_program > 0 &&
                    (0, a.jsxs)("div", {
                      className: k.fB,
                      children: [
                        (0, a.jsx)(o.E, {
                          variant: "text-md/medium",
                          className: k.G3,
                          children: L.intl.string(B.default["/1mWUn"]),
                        }),
                        (0, a.jsx)(g.C, { size: "sm", color: "currentColor" }),
                        (0, a.jsx)(o.E, {
                          variant: "text-md/medium",
                          className: k.G3,
                          children: l.total_rewarded_from_program,
                        }),
                      ],
                    }),
                  (0, a.jsx)("div", {
                    className: k.WT,
                    children: (0, a.jsx)(f.e, { children: K }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var K = s(102338);
      let V = "orbs",
        Z = (e) => {
          let { className: t, location: s } = e,
            { analyticsLocations: l } = (0, c.Ay)(s),
            h = r.useRef(null),
            x = r.useRef(!1),
            { passesGeneralUIInvariant: C, programReward: _ } = (0, u.F)({
              location: "PremiumTenureRewardsOrbsSection",
            });
          return C
            ? (0, a.jsx)(c.f5, {
                value: l,
                children: (0, a.jsx)(n.L, {
                  innerRef: h,
                  onChange: (e) => {
                    e &&
                      !x.current &&
                      ((x.current = !0),
                      m.default.track(
                        T.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION,
                        { program_state: _?.program_current_state },
                      ));
                  },
                  threshold: 0.5,
                  children: (0, a.jsxs)("div", {
                    ref: h,
                    id: V,
                    className: i()(K.uW, K.Uv, K.qr, t),
                    children: [
                      (0, a.jsx)(d.D, {
                        variant: "display-sm",
                        className: K.R_,
                        style: { textAlign: "start" },
                        children: L.intl.string(B.default.EdGvBM),
                      }),
                      (0, a.jsx)(o.E, {
                        variant: "text-md/medium",
                        className: i()(K.VA, K.dO),
                        children: L.intl.string(B.default["2KoHRF"]),
                      }),
                      (0, a.jsx)(W, {}),
                    ],
                  }),
                }),
              })
            : null;
        };
    },
    881373(e, t, s) {
      s.d(t, { K2: () => i, YS: () => d, aW: () => r, y$: () => l });
      var a = s(250105);
      let r = 30,
        l = 5,
        i = 5,
        n = (0, a.Ay)({
          kind: "user",
          name: "2026-03-l-3pp",
          defaultConfig: { enabled: !1 },
          variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
        });
      function d(e) {
        let { location: t } = e,
          { enabled: s } = n.useConfig({ location: t });
        return { functionalityEnabled: s };
      }
    },
    744064(e, t, s) {
      s.d(t, { S: () => D });
      var a = s(627968),
        r = s(64700),
        l = s(503698),
        i = s.n(l),
        n = s(735438),
        d = s(110259),
        o = s(43990),
        c = s(821609),
        u = s(462887),
        m = s(602853),
        h = s(661531),
        x = s(359778),
        C = s(834730),
        _ = s(403581),
        p = s(534514),
        g = s(736653),
        f = s(139286),
        R = s(531260),
        j = s(914410),
        v = s(954571),
        E = s(872725),
        N = s(465794),
        A = s(788868),
        b = s(652215),
        y = s(985018),
        P = s(555599);
      let D = (e) => {
        let {
            id: t,
            title: s,
            description: l,
            caption: D,
            pillText: I,
            primaryAsset: O,
            primaryAssetClassName: T,
            backgroundAssetUrl: S,
            progress: M,
            ctaIcon: B,
            ctaIconPosition: L,
            ctaText: k,
            ctaVariant: U,
            ctaDisabled: F,
            ctaLoading: G,
            onCtaClick: H,
            subscriptionRequired: W,
            glowing: K = !1,
            progressGlowing: V = !1,
            featured: Z,
            className: Y,
            containerClassName: $,
            tabIndex: z = 0,
            blurTint: X,
            footerContent: q,
            analyticsOptions: J,
          } = e,
          Q = (0, g.DP)(),
          { fractionalState: ee } = (0, R.A)(),
          et = { name: t };
        J?.thirdPartyPartner != null &&
          (et.third_party_partner = J.thirdPartyPartner),
          (0, f.A)({
            type: d.ImpressionTypes.VIEW,
            name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: et,
          });
        let es = r.useMemo(
            () =>
              (0, n.debounce)(() => {
                v.default.track(
                  b.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED,
                  { card_type: (0, n.snakeCase)(s) },
                );
              }, 800),
            [s],
          ),
          ea = r.useCallback(() => {
            null != H &&
              (H(),
              v.default.track(b.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                card_type: (0, n.snakeCase)(s),
                function_name: (0, n.snakeCase)(H.name),
              }));
          }, [H, s]),
          er = W && ee === A.xc.FP_ONLY,
          el = !(0, n.isEmpty)(S),
          ei = el && (0, u.q)(Q),
          en = (0, m.r)(h.A.colors.BACKGROUND_BASE_LOW).hex(),
          ed = er || !(0, n.isEmpty)(k);
        return (0, a.jsx)(o.N, {
          theme: ei ? b.NJ8.DARKER : void 0,
          children: (e) =>
            (0, a.jsxs)(E.A, {
              id: t,
              tabIndex: z,
              onMouseEnter: es,
              cardType: x.s.PRIMARY,
              glowing: K,
              hueRotate: 25,
              glowAmount: (0, u.M)(Q) ? 2 : 8,
              blurAmount: 10,
              className: i()(P.Ui, $, { [P.Tn]: el }),
              cardClassName: i()(P.Nr, e, Y, { [P.j8]: Z }),
              cardStyle: {
                backgroundImage: null != S ? `url(${S})` : void 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOrigin: "padding-box",
                backgroundClip: "padding-box",
              },
              children: [
                !(0, n.isEmpty)(I) &&
                  (0, a.jsx)(C.E, {
                    variant: "text-xs/bold",
                    color: "badge-expressive-text-default",
                    className: P.Io,
                    children: I,
                  }),
                (0, a.jsxs)("div", {
                  className: P.qh,
                  children: [
                    Z &&
                      (0, a.jsx)("div", {
                        className: P.gW,
                        "aria-hidden": "true",
                        children: (0, a.jsx)(w, { asset: O, className: T }),
                      }),
                    (0, a.jsx)(w, { asset: O, className: T }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: P.hQ,
                  children: [
                    (0, a.jsx)("div", {
                      className: P.u_,
                      style: { "--custom-tint-color": X ?? en },
                      "aria-hidden": !0,
                    }),
                    (0, a.jsxs)("div", {
                      className: P.P_,
                      children: [
                        er &&
                          (0, a.jsxs)("div", {
                            className: P.d_,
                            children: [
                              (0, a.jsx)(_.t, {
                                size: "sm",
                                color: h.A.colors.ICON_MUTED,
                              }),
                              (0, a.jsx)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: y.intl.string(y.t.lHYDUu),
                              }),
                            ],
                          }),
                        !(0, n.isEmpty)(D) &&
                          (0, a.jsx)("div", {
                            className: P.OU,
                            children:
                              "string" == typeof D
                                ? (0, a.jsx)(C.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: D,
                                  })
                                : D,
                          }),
                        (0, a.jsx)(p.D, {
                          variant: "heading-lg/semibold",
                          children: s,
                        }),
                        !(0, n.isEmpty)(l) &&
                          (0, a.jsxs)("div", {
                            className: P.Wi,
                            children: [
                              (0, a.jsx)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                className: P.h_,
                                children: l,
                              }),
                              (0, a.jsx)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                className: P.XV,
                                inert: !0,
                                children: l,
                              }),
                            ],
                          }),
                        null != M &&
                          (0, a.jsx)("div", {
                            className: P.oU,
                            children: (0, a.jsx)(j.Ay, {
                              variant: j.qP.BLUE,
                              progress: (0, n.clamp)(M, 0, 1),
                              maximum: 1,
                              glowing: V,
                            }),
                          }),
                        null != q &&
                          (0, a.jsx)("div", { className: P.Gv, children: q }),
                        ed && (0, a.jsx)("div", { className: P.Cj }),
                      ],
                    }),
                    ed &&
                      (0, a.jsxs)("div", {
                        className: P.yk,
                        children: [
                          er &&
                            (0, a.jsx)(N.A, {
                              fullWidth: !0,
                              defaultTextOverride: y.intl.string(y.t.sEAnVH),
                            }),
                          !er &&
                            (0, a.jsx)(c.$, {
                              icon: B,
                              iconPosition: L,
                              text: k,
                              variant:
                                U ??
                                (!el && (0, u.q)(Q)
                                  ? "primary"
                                  : "overlay-primary"),
                              onClick: ea,
                              disabled: F,
                              loading: G,
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
        });
      };
      function w(e) {
        let { asset: t, className: s } = e;
        return null == t || "" === t
          ? null
          : "string" == typeof t
            ? (0, a.jsx)("img", {
                src: t,
                alt: "",
                className: i()(P.eq, s),
                draggable: "false",
              })
            : t;
      }
    },
    593687(e, t, s) {
      s.d(t, { _: () => c });
      var a = s(627968);
      s(64700);
      var r = s(194261),
        l = s(534514),
        i = s(144165),
        n = s(56225),
        d = s(985018),
        o = s(75662);
      function c(e) {
        let { partnerIds: t } = e;
        return (
          null != t
            ? Object.entries((0, n.Cf)()).filter((e) => {
                let [s] = e;
                return t.includes(s);
              })
            : Object.entries((0, n.Cf)())
        ).map((e) => {
          let [t, s] = e;
          return (0, a.jsx)(
            "div",
            {
              className: o.lA,
              children: (0, a.jsxs)("div", {
                className: o.LV,
                children: [
                  (0, a.jsxs)("div", {
                    className: o.JN,
                    children: [
                      (0, a.jsx)("div", {
                        className: o.MC,
                        children: (0, a.jsx)(r.X, { size: "refresh_sm" }),
                      }),
                      (0, a.jsxs)("div", {
                        className: o.yO,
                        children: [
                          (0, a.jsx)(l.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: d.intl.formatToPlainString(
                              s.title,
                              s.titleParams ?? {},
                            ),
                          }),
                          (0, a.jsx)(l.D, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: d.intl.formatToPlainString(
                              s.body,
                              s.bodyParams ?? {},
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: o.R4,
                    children: (0, a.jsx)(i._, {
                      src: s.asset,
                      className: o.Ys,
                      width: 100,
                      height: 100,
                      zoomable: !1,
                      imageClassName: o.EM,
                    }),
                  }),
                ],
              }),
            },
            t,
          );
        });
      }
    },
    382259(e, t, s) {
      s.d(t, { w: () => T, u: () => S }), s(321073);
      var a = s(627968),
        r = s(64700),
        l = s(939249),
        i = s(834730),
        n = s(289873),
        d = s(189213),
        o = s(17928),
        c = s(192308),
        u = s(793574),
        m = s(287809),
        h = s(954571),
        x = s(58703),
        C = s(975571),
        _ = s(927578),
        p = s(792656),
        g = s(264779),
        f = s(597758),
        R = s(35587),
        j = s(374200),
        v = s(593687);
      let E = () =>
        (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 6 6",
          fill: "none",
          overflow: "visible",
          children: (0, a.jsx)("ellipse", {
            cx: "3.4924",
            cy: "3",
            rx: "2.86154",
            ry: "3",
            fill: "#808BFF",
          }),
        });
      var N = s(75662);
      let A = (e) => {
        let { percentage: t } = e;
        return (0, a.jsxs)("div", {
          className: N.hr,
          children: [
            t > 0 &&
              t < 100 &&
              (0, a.jsx)(
                () =>
                  (0, a.jsx)("div", {
                    className: N.ML,
                    style: { left: `calc(${t}% - 5px)` },
                    children: (0, a.jsx)(E, {}),
                  }),
                {},
              ),
            (0, a.jsx)("div", { className: N.SX, style: { width: `${t}%` } }),
          ],
        });
      };
      var b = s(56225),
        y = s(294219),
        P = s(788868),
        D = s(652215),
        w = s(985018);
      let I = (e) => {
          let { promotionRecurrences: t } = e,
            [s, n] = r.useState(t.length > 1),
            [d, o] = r.useState([]);
          return (
            r.useEffect(() => {
              o([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, a.jsxs)("div", {
              children: [
                d.map((e) =>
                  (0, a.jsx)(
                    b.wx,
                    {
                      recurrence: e,
                      showPartnerLogo: !0,
                      showPartnerImage: !0,
                      analyticsLocations: [u.A.RECURRING_3PP_MODAL],
                    },
                    e.id,
                  ),
                ),
                s &&
                  (0, a.jsx)(l.D, {
                    className: N.K8,
                    onClick: () => {
                      n(!1), o([...d, ...t.slice(1)]);
                    },
                    children: (0, a.jsx)(i.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: w.intl.string(w.t.rjjZxV),
                    }),
                  }),
              ],
            })
          );
        },
        O = (e) => e.partnerId?.toLowerCase() ?? null,
        T = (e) => {
          let t,
            s,
            { transitionState: r, onClose: l, partnerIds: c } = e,
            u = (0, y.G)(c),
            { promotionsLoaded: h, claimedOutboundPromotionCodeMap: E } = (0,
            R.y7)(),
            T = (0, o.yK)([j.A], () => j.A.outboundRecurringPromotions),
            S = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
            M = !1 === _.Ay.isPremiumExactly(S, P.PremiumTypes.TIER_2),
            B = S?.isFractionalPremiumWithNoStandardSub(),
            L = null == S || M || B;
          if (!1 === h) return (0, a.jsx)(n.y, {});
          let k = ((e) => {
            let { promotions: t, codesByPromotion: s, partnerIds: a } = e,
              r = {};
            return (
              t
                .filter(
                  (e) => !0 === (0, g.HB)({ promotionType: e.promotionType }),
                )
                .forEach((e) => {
                  let t = O(e),
                    l = ((e) => {
                      let { promotion: t } = e,
                        s = O(t);
                      return null == s ? null : ((0, b.Cf)()[s] ?? null);
                    })({ promotion: e });
                  if (null == t || null == l || (null != a && !a.includes(t)))
                    return;
                  t in r || (r[t] = []);
                  let i = {
                    id: e.id,
                    partnerId: t,
                    startDate: e.startDate,
                    endDate: e.endDate,
                    code: s[e.id] ?? null,
                    ...l,
                    title: w.intl.formatToPlainString(
                      l.title,
                      l.titleParams ?? {},
                    ),
                    body: w.intl.formatToPlainString(
                      l.body,
                      l.bodyParams ?? {},
                    ),
                  };
                  r[t].push(i);
                }),
              r
            );
          })({ promotions: T, codesByPromotion: E, partnerIds: u });
          return (0, a.jsx)(d.Modal, {
            title: w.intl.string(w.t["7ioAjs"]),
            subtitle: w.intl.format(w.t.LOYRxB, {
              helpCenterLink: C.A.getArticleURL(D.MVz.RECURRING_PROMOTION),
            }),
            actions: [],
            preview: (() => {
              if (!0 === L)
                return (0, a.jsx)(p.A, {
                  subscriptionTier: P.pe.TIER_2,
                  fullWidth: !0,
                  onClick: () => {
                    l();
                  },
                  onSubscribeModalClose: (e) => {
                    if (e) return f.Ay.fetchActivePromotions();
                  },
                });
            })(),
            transitionState: r,
            onClose: l,
            children:
              ((t = (0, x.N5)()),
              (s = (0, x.P6)()),
              L
                ? (0, a.jsx)(v._, { partnerIds: u })
                : (0, a.jsxs)("div", {
                    className: N.kL,
                    children: [
                      (0, a.jsx)("div", {
                        className: N.Ps,
                        children: (0, a.jsx)(i.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: w.intl.format(w.t["43kZKL"], { days: s }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: N.G9,
                        children: (0, a.jsx)(A, { percentage: t }),
                      }),
                      (0, a.jsx)("div", {
                        className: N.kR,
                        children: Object.entries(k)
                          .sort((e, t) => {
                            let [s] = e,
                              [a] = t;
                            return a.localeCompare(s);
                          })
                          .map((e) => {
                            let [t, s] = e;
                            return (0, a.jsx)(
                              I,
                              { promotionRecurrences: s },
                              t,
                            );
                          }),
                      }),
                    ],
                  })),
          });
        },
        S = (e) => {
          let { analyticsLocations: t, partnerIds: r } = e;
          h.default.track(D.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
            location_stack: t,
          }),
            f.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
              let { Premium3PRewardsModalEntry: e } = await Promise.all([
                s.e("967"),
                s.e("91900"),
              ]).then(s.bind(s, 92375));
              return (t) => (0, a.jsx)(e, { ...t, partnerIds: r });
            });
        };
    },
    56225(e, t, s) {
      s.d(t, { Cf: () => L, wx: () => H });
      var a = s(627968),
        r = s(64700),
        l = s(834730),
        i = s(366010),
        n = s(947641),
        d = s(408278),
        o = s(624479),
        c = s(821609),
        u = s(695366),
        m = s(194261),
        h = s(534514),
        x = s(17928),
        C = s(661531),
        _ = s(144165),
        p = s(31502),
        g = s(914410),
        f = s(363195),
        R = s(954571),
        j = s(58703),
        v = s(975571),
        E = s(38405),
        N = s(398523),
        A = s(881373),
        b = s(264779),
        y = s(852218);
      let P = () =>
          (0, a.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_5398_22750)",
                children: [
                  (0, a.jsx)("mask", {
                    id: "mask0_5398_22750",
                    style: { maskType: "luminance" },
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "20",
                    height: "20",
                    children: (0, a.jsx)("path", {
                      d: "M0 0H20V20H0V0Z",
                      fill: "white",
                    }),
                  }),
                  (0, a.jsxs)("g", {
                    mask: "url(#mask0_5398_22750)",
                    children: [
                      (0, a.jsx)("path", {
                        d: "M11.7346 16.986C8.84262 16.986 6.49024 14.6399 6.49024 11.756C6.49024 8.87208 8.84262 6.52593 11.7346 6.52593C14.6257 6.52593 16.9781 8.87208 16.9781 11.756C16.9781 14.6399 14.6257 16.986 11.7346 16.986ZM13.2458 3.65049V1.50705C13.2458 0.674633 12.5688 -0.00012207 11.7346 -0.00012207C10.9 -0.00012207 10.2235 0.674633 10.2235 1.50705V3.65002C6.87415 4.26987 4.22771 6.90882 3.60668 10.2497H1.51117C0.676547 10.2497 0 10.924 0 11.756C0 12.5884 0.676547 13.2631 1.51117 13.2631H3.60668C4.31898 17.0925 7.69231 19.9999 11.7346 19.9999C16.2926 19.9999 20 16.3019 20 11.756C20 7.72482 17.084 4.36044 13.2458 3.65049Z",
                        fill: "#FBFBFB",
                      }),
                      (0, a.jsx)("path", {
                        d: "M10.7447 11.765C10.7447 11.2291 11.1817 10.7932 11.7181 10.7932C12.2558 10.7932 12.6929 11.2291 12.6929 11.765C12.6929 12.3003 12.2558 12.7363 11.7181 12.7363C11.1817 12.7363 10.7447 12.3003 10.7447 11.765ZM8.47461 11.765C8.47461 13.549 9.9298 15.0008 11.7181 15.0008C13.5073 15.0008 14.9625 13.549 14.9625 11.765C14.9625 9.98094 13.5073 8.52914 11.7181 8.52914C9.9298 8.52914 8.47461 9.98094 8.47461 11.765Z",
                        fill: "#FBFBFB",
                      }),
                      (0, a.jsx)("path", {
                        d: "M5.42451 4.15601C5.42451 4.9889 4.74703 5.66553 3.91146 5.66553C3.07542 5.66553 2.39746 4.9889 2.39746 4.15601C2.39746 3.32266 3.07542 2.6465 3.91146 2.6465C4.74703 2.6465 5.42451 3.32266 5.42451 4.15601Z",
                        fill: "#FBFBFB",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_5398_22750",
                  children: (0, a.jsx)("rect", {
                    width: "20",
                    height: "20",
                    fill: "white",
                  }),
                }),
              }),
            ],
          }),
        D = () =>
          (0, a.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_5398_22756)",
                children: [
                  (0, a.jsx)("mask", {
                    id: "mask0_5398_22756",
                    style: { maskType: "luminance" },
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "20",
                    height: "20",
                    children: (0, a.jsx)("path", {
                      d: "M0 0H20V20H0V0Z",
                      fill: "white",
                    }),
                  }),
                  (0, a.jsxs)("g", {
                    mask: "url(#mask0_5398_22756)",
                    children: [
                      (0, a.jsx)("path", {
                        d: "M11.7346 16.986C8.84262 16.986 6.49024 14.6399 6.49024 11.756C6.49024 8.87208 8.84262 6.52593 11.7346 6.52593C14.6257 6.52593 16.9781 8.87208 16.9781 11.756C16.9781 14.6399 14.6257 16.986 11.7346 16.986ZM13.2458 3.65049V1.50705C13.2458 0.674633 12.5688 -0.00012207 11.7346 -0.00012207C10.9 -0.00012207 10.2235 0.674633 10.2235 1.50705V3.65002C6.87415 4.26987 4.22771 6.90882 3.60668 10.2497H1.51117C0.676547 10.2497 0 10.924 0 11.756C0 12.5884 0.676547 13.2631 1.51117 13.2631H3.60668C4.31898 17.0925 7.69231 19.9999 11.7346 19.9999C16.2926 19.9999 20 16.3019 20 11.756C20 7.72482 17.084 4.36044 13.2458 3.65049Z",
                        fill: "#2F3035",
                      }),
                      (0, a.jsx)("path", {
                        d: "M10.7447 11.765C10.7447 11.2291 11.1817 10.7932 11.7181 10.7932C12.2558 10.7932 12.6929 11.2291 12.6929 11.765C12.6929 12.3003 12.2558 12.7363 11.7181 12.7363C11.1817 12.7363 10.7447 12.3003 10.7447 11.765ZM8.47461 11.765C8.47461 13.549 9.9298 15.0008 11.7181 15.0008C13.5073 15.0008 14.9625 13.549 14.9625 11.765C14.9625 9.98094 13.5073 8.52914 11.7181 8.52914C9.9298 8.52914 8.47461 9.98094 8.47461 11.765Z",
                        fill: "#2F3035",
                      }),
                      (0, a.jsx)("path", {
                        d: "M5.42451 4.15601C5.42451 4.9889 4.74703 5.66553 3.91146 5.66553C3.07542 5.66553 2.39746 4.9889 2.39746 4.15601C2.39746 3.32266 3.07542 2.6465 3.91146 2.6465C4.74703 2.6465 5.42451 3.32266 5.42451 4.15601Z",
                        fill: "#2F3035",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_5398_22756",
                  children: (0, a.jsx)("rect", {
                    width: "20",
                    height: "20",
                    fill: "white",
                  }),
                }),
              }),
            ],
          }),
        w = () =>
          (0, a.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_5402_26507)",
                children: [
                  (0, a.jsx)("path", {
                    d: "M10 19.1252C5.31783 19.1252 1.52212 15.3294 1.52212 10.6474C1.52212 5.96514 5.31783 2.16943 10 2.16943C14.6821 2.16943 18.4778 5.96514 18.4778 10.6474C18.4778 15.3294 14.6821 19.1252 10 19.1252ZM10 -2.28882e-05C4.47718 -2.28882e-05 0 4.47716 0 10C0 15.5228 4.47718 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47716 15.5228 -2.28882e-05 10 -2.28882e-05Z",
                    fill: "#FBFBFB",
                  }),
                  (0, a.jsx)("path", {
                    d: "M16.518 10.0407C16.146 8.811 15.3522 7.95319 13.9908 8.03448C13.3579 8.07227 12.8226 8.29801 12.2416 8.52348C11.5189 8.80392 10.7774 8.95798 10 8.95798C9.22266 8.95798 8.48125 8.80392 7.75856 8.52348C7.17751 8.29801 6.64229 8.07227 6.00932 8.03448C4.64799 7.95319 3.85404 8.811 3.4821 10.0407C3.15876 11.1098 3.00341 12.4285 3.51689 13.4654C4.05593 14.5539 5.43159 14.9536 6.45678 14.2962C7.64683 13.5333 8.40792 11.8853 10 11.9133C11.5922 11.8853 12.3533 13.5333 13.5434 14.2962C14.5685 14.9536 15.9441 14.5539 16.4832 13.4654C16.9967 12.4285 16.8414 11.1098 16.518 10.0407Z",
                    fill: "#FBFBFB",
                  }),
                  (0, a.jsx)("path", {
                    d: "M12.0012 17.0763H7.90866C7.51404 17.0763 7.19336 16.7555 7.19336 16.3609C7.19336 15.9663 7.51404 15.6456 7.90866 15.6456H12.0012C12.3958 15.6456 12.7165 15.9663 12.7165 16.3609C12.7165 16.7555 12.3958 17.0763 12.0012 17.0763Z",
                    fill: "#FBFBFB",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_5402_26507",
                  children: (0, a.jsx)("rect", {
                    width: "20",
                    height: "20",
                    fill: "white",
                  }),
                }),
              }),
            ],
          }),
        I = () =>
          (0, a.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_5402_26509)",
                children: [
                  (0, a.jsx)("path", {
                    d: "M10 19.1252C5.31783 19.1252 1.52212 15.3294 1.52212 10.6474C1.52212 5.96514 5.31783 2.16943 10 2.16943C14.6821 2.16943 18.4778 5.96514 18.4778 10.6474C18.4778 15.3294 14.6821 19.1252 10 19.1252ZM10 -2.28882e-05C4.47718 -2.28882e-05 0 4.47716 0 10C0 15.5228 4.47718 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47716 15.5228 -2.28882e-05 10 -2.28882e-05Z",
                    fill: "#2F3035",
                  }),
                  (0, a.jsx)("path", {
                    d: "M16.518 10.0407C16.146 8.811 15.3522 7.95319 13.9908 8.03448C13.3579 8.07227 12.8226 8.29801 12.2416 8.52348C11.5189 8.80392 10.7774 8.95798 10 8.95798C9.22266 8.95798 8.48125 8.80392 7.75856 8.52348C7.17751 8.29801 6.64229 8.07227 6.00932 8.03448C4.64799 7.95319 3.85404 8.811 3.4821 10.0407C3.15876 11.1098 3.00341 12.4285 3.51689 13.4654C4.05593 14.5539 5.43159 14.9536 6.45678 14.2962C7.64683 13.5333 8.40792 11.8853 10 11.9133C11.5922 11.8853 12.3533 13.5333 13.5434 14.2962C14.5685 14.9536 15.9441 14.5539 16.4832 13.4654C16.9967 12.4285 16.8414 11.1098 16.518 10.0407Z",
                    fill: "#2F3035",
                  }),
                  (0, a.jsx)("path", {
                    d: "M12.0012 17.0763H7.90866C7.51404 17.0763 7.19336 16.7555 7.19336 16.3609C7.19336 15.9663 7.51404 15.6456 7.90866 15.6456H12.0012C12.3958 15.6456 12.7165 15.9663 12.7165 16.3609C12.7165 16.7555 12.3958 17.0763 12.0012 17.0763Z",
                    fill: "#2F3035",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_5402_26509",
                  children: (0, a.jsx)("rect", {
                    width: "20",
                    height: "20",
                    fill: "white",
                  }),
                }),
              }),
            ],
          });
      var O = s(652215),
        T = s(962995),
        S = s(985018),
        M = s(75662),
        B = s(208556);
      function L() {
        let e = (0, p.Q)("getRecurringPromotionPartnerAttributes");
        return {
          [y.XY]: {
            title: e ? T.default.PF1aT5 : T.default.LsJ9hj,
            titleParams: e
              ? { discountPercentage: A.aW }
              : { discountPercent: A.aW },
            body: e ? T.default.KoKwMn : T.default.Yl5ww1,
            bodyWithExpiration: T.default["6KjkUa"],
            redemptionURL: "https://www.logitech.com/",
            logos: {
              dark: (0, a.jsx)(r.Fragment, {}, "logitech-logo-dark"),
              light: (0, a.jsx)(r.Fragment, {}, "logitech-logo-light"),
            },
            asset: B.A,
          },
          [y.KS]: {
            title: e ? S.t.p7BkHh : S.t.sfGgOG,
            titleParams: e ? { discountPercentage: N.H7 } : void 0,
            body: e ? S.t.nmvvaN : S.t.igiSKe,
            bodyWithExpiration: S.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, a.jsx)(P, {}), light: (0, a.jsx)(D, {}) },
            asset:
              "https://cdn.discordapp.com/assets/content/c23a186569a2e8606d206cd4b5cc7f4ee8f880c844bc0debd5fd3400400ff7bc.png",
          },
          [y.Cs]: {
            title: e ? S.t.QEJnti : S.t["9N8obd"],
            titleParams: e ? { discountPercentage: N.F0 } : void 0,
            body: e ? S.t.eT5vm0 : S.t["34g+Z3"],
            bodyWithExpiration: S.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: { dark: (0, a.jsx)(w, {}), light: (0, a.jsx)(I, {}) },
            asset:
              "https://cdn.discordapp.com/assets/content/6706fc54c35e86999d3537dcc3ef8bfe91f25db6a141b4b6e5b451ebc5cae86b.png",
          },
        };
      }
      let k = () => {
          let e = (0, j.N5)(),
            t = (0, j.P6)();
          return (0, a.jsxs)("div", {
            className: `${M.G9} ${M.sQ}`,
            children: [
              (0, a.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: M.kT,
                children: S.intl.format(T.default["65EEvD"], { days: t }),
              }),
              (0, a.jsx)(g.Ay, {
                progress: e,
                variant: g.qP.UNSET,
                override: {
                  default: {
                    gradientStart: "var(--illo-blue-70)",
                    gradientEnd: "var(--illo-blue-10)",
                  },
                },
              }),
            ],
          });
        },
        U = (e) => {
          let { children: t } = e;
          return (0, a.jsx)("div", {
            className: M.oP,
            children: (0, a.jsx)("div", { className: M.t0, children: t }),
          });
        },
        F = (e) => {
          let { recurrence: t } = e,
            s = (0, a.jsx)(n.r, {
              color: C.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT,
            }),
            i = (0, a.jsx)("span", {
              className: M.nP,
              children: (0, a.jsx)(d.K, {
                icon: o.T,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                  navigator.clipboard.writeText(t.code), m(s);
                },
              }),
            }),
            [u, m] = r.useState(() => i);
          if (null != t.code)
            return (0, a.jsx)("div", {
              className: M.oP,
              children: (0, a.jsxs)("div", {
                className: M.t0,
                children: [
                  (0, a.jsx)("div", {
                    className: M.cD,
                    children: (0, a.jsx)(l.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: t.code,
                    }),
                  }),
                  u,
                  (0, a.jsx)(c.$, {
                    variant: "secondary",
                    size: "sm",
                    text: S.intl.formatToPlainString(S.t.DF68t7, {
                      redemptionURL: t.redemptionURL,
                    }),
                    onClick: () => {
                      window.open(t.redemptionURL, "_blank"),
                        R.default.track(O.HAw.RECURRING_PROMOTION_CLAIMED);
                    },
                  }),
                ],
              }),
            });
        },
        G = (e) => {
          let {
            recurrence: t,
            canBeClaimed: s,
            hasClaimError: r,
            setCode: l,
            setHasClaimError: i,
            className: n,
            analyticsLocations: d = [],
          } = e;
          return s
            ? r
              ? (0, a.jsx)("div", {
                  className: n,
                  children: (0, a.jsx)(c.$, {
                    icon: u.E,
                    variant: "critical-secondary",
                    size: "sm",
                    disabled: !0,
                    text: S.intl.string(S.t["8LKchl"]),
                  }),
                })
              : (0, a.jsx)("div", {
                  className: n,
                  children: (0, a.jsx)(c.$, {
                    icon: m.X,
                    variant: "secondary",
                    size: "sm",
                    text: S.intl.string(S.t.vwASIl),
                    onClick: () => {
                      (0, b.kd)({ promotionId: t.id, analyticsLocations: d })
                        .then((e) => {
                          l(e.code);
                        })
                        .catch((e) => {
                          i(!0), E.A.captureException(e);
                        });
                    },
                  }),
                })
            : null;
        },
        H = (e) => {
          var t;
          let s,
            l,
            {
              recurrence: n,
              titleClassName: d,
              showPartnerLogo: o = !1,
              showPartnerImage: c = !1,
              titleVariant: u = "primary",
              displayCTAInDedicatedFooter: m = !1,
              analyticsLocations: C = [],
            } = e,
            [p, g] = r.useState(n.code),
            [R, j] = r.useState(!1),
            E =
              ((t = n.partnerId),
              (s = (0, x.bG)([f.A], () => (0, i.M)(f.A.theme))),
              null == (l = L()[t]) ? null : s ? l.logos.dark : l.logos.light),
            N = null == p;
          return (0, a.jsxs)("div", {
            className: M.lA,
            children: [
              (0, a.jsxs)("div", {
                className: M.LV,
                children: [
                  (0, a.jsxs)("div", {
                    className: M.JN,
                    children: [
                      o && E,
                      (0, a.jsxs)("div", {
                        className: null != d ? `${M.yO} ${d}` : M.yO,
                        children: [
                          (0, a.jsx)(h.D, {
                            variant:
                              "secondary" === u
                                ? "heading-md/semibold"
                                : "heading-lg/semibold",
                            color: "text-strong",
                            children: n.title,
                          }),
                          (0, a.jsx)(h.D, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: R
                              ? S.intl.format(S.t.i2EuFO, {
                                  helpdeskArticle: v.A.getArticleURL(
                                    O.MVz.RECURRING_PROMOTION,
                                  ),
                                })
                              : N
                                ? n.body
                                : null != n.bodyWithExpiration
                                  ? S.intl.format(n.bodyWithExpiration, {
                                      date: n.endDate,
                                    })
                                  : n.body,
                          }),
                        ],
                      }),
                      !m &&
                        (0, a.jsx)(G, {
                          recurrence: n,
                          canBeClaimed: N,
                          hasClaimError: R,
                          setCode: g,
                          setHasClaimError: j,
                          analyticsLocations: C,
                        }),
                    ],
                  }),
                  c &&
                    (0, a.jsx)("div", {
                      className: M.R4,
                      children: (0, a.jsx)(_._, {
                        src: n.asset ?? "",
                        className: M.Ys,
                        imageClassName: n.partnerId === y.XY ? M.Cy : void 0,
                        width: 100,
                        height: 100,
                        zoomable: !1,
                      }),
                    }),
                ],
              }),
              m && (0, a.jsx)(k, {}),
              null != p && (0, a.jsx)(F, { recurrence: { ...n, code: p } }),
              m &&
                null == p &&
                (0, a.jsx)(U, {
                  children: (0, a.jsx)(G, {
                    recurrence: n,
                    canBeClaimed: N,
                    hasClaimError: R,
                    setCode: g,
                    setHasClaimError: j,
                    className: M.qx,
                    analyticsLocations: C,
                  }),
                }),
            ],
          });
        };
    },
    294219(e, t, s) {
      s.d(t, { G: () => n }), s(321073);
      var a = s(64700),
        r = s(398523),
        l = s(881373),
        i = s(852218);
      function n(e) {
        let { enabled: t } = r.Ay.useConfig({
            location: "useRecurring3PModalEligiblePartnerIds",
          }),
          s = (0, l.YS)({
            location: "useRecurring3PModalEligiblePartnerIds",
          }).functionalityEnabled;
        return a.useMemo(() => {
          let a = [];
          return (
            t && a.push(i.KS, i.Cs),
            s && a.push(i.XY),
            null != e ? e.filter((e) => a.includes(e)) : a
          );
        }, [t, s, e]);
      }
    },
    194509(e, t, s) {
      s.d(t, { A: () => C, U: () => x });
      var a = s(627968);
      s(64700);
      var r = s(503698),
        l = s.n(r),
        i = s(462887),
        n = s(862482),
        d = s(597770),
        o = s(736653),
        c = s(783420),
        u = s(788868),
        m = s(985018),
        h = s(806956);
      let x = (e) =>
          e === u.pe.TIER_0
            ? m.intl.string(m.t.rk4Uu8)
            : m.intl.string(m.t.Ve9Ge6),
        C = (e) => {
          let {
              className: t,
              textOptions: s,
              color: r,
              look: u,
              hideIcon: m,
              subscriptionTier: C,
              premiumModalAnalyticsLocation: _,
              giftMessage: p,
              onClick: g,
            } = e,
            f = (0, o.Ay)(),
            R = x(C);
          return (0, a.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: C,
            premiumModalAnalyticsLocation: _,
            giftMessage: p,
            onClick: g,
            children: (e) => {
              let { onClick: o } = e;
              return (0, a.jsxs)(n.$n, {
                "data-migration-pending": !0,
                innerClassName: h.Nq,
                color: r ?? ((0, i.M)(f) ? n.XD.WHITE : n.XD.BRAND),
                look: u ?? n.pR.OUTLINED,
                className: l()(t, h.xP),
                onClick: o,
                children: [
                  !m &&
                    (0, a.jsx)(d.o, {
                      size: "md",
                      color: "currentColor",
                      className: h.ez,
                    }),
                  (0, a.jsx)("span", {
                    className: l()(h._d, s?.textClassName),
                    children: s?.textOverride ?? R,
                  }),
                ],
              });
            },
          });
        };
    },
    566119(e, t, s) {
      s.d(t, {
        CC: () => n,
        Jv: () => o,
        RQ: () => m,
        WD: () => i,
        b: () => h,
        gP: () => u,
        o8: () => c,
        ue: () => d,
      });
      var a = s(954571),
        r = s(652215);
      function l(e, t) {
        a.default.track(r.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
          cta_type: e,
          program_state: t,
        });
      }
      let i = (e) => {
          l("shop_orbs", e);
        },
        n = (e) => {
          l("view_billing", e);
        },
        d = (e) => {
          l("update_billing", e);
        },
        o = (e) => {
          l("resubscribe", e);
        },
        c = (e) => {
          l("orbs_card_helpdesk", e);
        },
        u = () => {
          l("balance_popover_upsell");
        },
        m = () => {
          l("balance_popover_next_drop");
        },
        h = () => {
          l("balance_popover_helpdesk");
        };
    },
    482589(e, t, s) {
      s.d(t, { j: () => o });
      var a = s(64700),
        r = s(554146),
        l = s(771781),
        i = s(367727),
        n = s(366505),
        d = s(49999);
      function o() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          { programReward: t } = (0, n.F)(),
          s = t?.last_granted_reward ?? null;
        a.useEffect(() => {
          e ||
            (0, l.dD)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) ||
            (null != s &&
              (0, i.qr)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, s, {
                dismissAction: d.i.INDIRECT_ACTION,
              }));
        }, [e, s]);
      }
    },
    914410(e, t, s) {
      s.d(t, { Ay: () => h, fh: () => m, qP: () => u });
      var a,
        r,
        l = s(627968),
        i = s(64700),
        n = s(503698),
        d = s.n(n);
      s(284009);
      var o = s(736653),
        c = s(63947),
        u =
          (((a = {}).UNSET = "unset"),
          (a.BLUE = "blue"),
          (a.ORANGE = "orange"),
          a),
        m = (((r = {}).LIGHT = "light"), (r.MEDIUM = "medium"), r);
      let h = (e) => {
        let {
            progress: t,
            minimum: s = 0,
            maximum: a = 100,
            weight: r = "light",
            variant: n,
            override: u,
            glowing: m = !0,
            labelledBy: h,
          } = e,
          x = null != u && "unset" === n,
          C = (0, o.Ay)(),
          _ = u?.[C] ?? u?.default,
          p = i.useMemo(() => ((t - s) / (a - s)) * 100, [t, s, a]),
          g = t === s,
          f = {
            ...(x
              ? {
                  "--custom-background": _?.background,
                  "--custom-gradient-start": _?.gradientStart,
                  "--custom-gradient-end": _?.gradientEnd,
                  "--custom-gradient-glow": _?.gradientEnd,
                }
              : {}),
            ...(!m && { "--custom-gradient-glow": "transparent" }),
          };
        return (0, l.jsx)("div", {
          className: d()(c.progressContainer, c[r], c[n]),
          style: f,
          children: (0, l.jsxs)("div", {
            className: d()(c.progress, { [c.empty]: g }),
            style: { width: `${p}%` },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": s,
            "aria-valuemax": a,
            "aria-labelledby": h,
            children: [
              (0, l.jsx)("div", { className: d()(c.glow, { [c.empty]: g }) }),
              (0, l.jsx)("div", {
                className: d()(c.bar, c[n], { [c.empty]: g }),
              }),
            ],
          }),
        });
      };
    },
    366505(e, t, s) {
      s.d(t, { F: () => c });
      var a = s(17928),
        r = s(166403),
        l = s(532309),
        i = s(636592),
        n = s(26508),
        d = s(150092),
        o = s(892227);
      function c(e) {
        let t = e?.location ?? "useNitroProgramReward",
          s = (0, n.DK)(i.W.NITRO, t),
          {
            isReady: c,
            programReward: u,
            totalDays: m,
          } = (0, a.cf)([l.A], () => ({
            isReady: l.A.isReady(),
            programReward: l.A.getRewardForProgram(i.W.NITRO),
            totalDays: l.A.getTotalDaysInDuration(i.W.NITRO),
          })),
          h = (0, a.bG)(
            [r.A],
            () => r.A.getPremiumTypeSubscription()?.isPurchasedExternally ?? !1,
          ),
          x = (0, d.q)(),
          C = (function (e, t) {
            if (!t || null == e) return !1;
            let s = e.next_reward_date,
              a = e.program_current_state;
            if (null == a) return !1;
            if (null == s || "" === s) {
              if (![i.L.PAYMENT_PROCESSING, i.L.PAYMENT_ERROR].includes(a))
                return !1;
            } else {
              let e = new Date(s).getTime();
              if (Number.isNaN(e) || e < Date.now()) return !1;
            }
            return !0;
          })(u, s),
          _ = (function (e, t, s) {
            if (!s || null == e || null == t) return !1;
            let a = e.next_reward_date;
            if (null == a || "" === a) return !1;
            let r = new Date(a).getTime();
            return !(
              Number.isNaN(r) ||
              r <= Date.now() ||
              (0, o.default)(new Date(a), new Date()) > t
            );
          })(u, m, s);
        return {
          isEligible: s,
          isReady: c,
          passesGeneralUIInvariant: C,
          passesProgressBarInvariant: _,
          programReward: u,
          shouldFetch: x,
          totalDays: m,
          wouldBeEligibleForNitroOrbsButIsExternalSub: s && h,
        };
      }
    },
    462463(e, t, s) {
      s.d(t, { A: () => i });
      var a = s(64700),
        r = s(287809),
        l = s(975732);
      function i() {
        let { analyticsLocations: e } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.useCallback)(() => {
          let t = r.default.getCurrentUser();
          null != t &&
            (0, l.openUserProfileModal)({
              userId: t.id,
              sourceAnalyticsLocations: e,
            });
        }, [e]);
      }
    },
    208556(e, t, s) {
      s.d(t, { A: () => a });
      let a =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg";
    },
    909340(e, t, s) {
      s.d(t, { A: () => a });
      let a =
        "https://cdn.discordapp.com/assets/content/62447672d679c7ceb5756dc07350a3145081a671a026fe96876d8742b73f3a82.mp4";
    },
    455482(e, t, s) {
      s.d(t, { A: () => a });
      let a =
        "https://cdn.discordapp.com/assets/content/5f989f363deccd305bb4508bfde0e162c1869ef7418ec6c6f6e6ade57bc6ca17.png";
    },
  },
]);
//# sourceMappingURL=4551.98f05c598c69202a.js.map
