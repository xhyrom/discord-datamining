"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87624"],
  {
    63243: function (e) {
      e.exports = "/assets/b2fad2364372ac883853.png";
    },
    244488: function (e) {
      e.exports = "/assets/f0b741b24bffce0dd3cf.png";
    },
    15888: function (e) {
      e.exports = "/assets/b2e8f732590705176d23.png";
    },
    16724: function (e) {
      e.exports = "/assets/42805d6e8621df404add.png";
    },
    774694: function (e) {
      e.exports = "/assets/499681d7cba7c4250d56.png";
    },
    402344: function (e) {
      e.exports = "/assets/63eba15c08ff69f7aec3.png";
    },
    289901: function (e) {
      e.exports = "/assets/4439a1724f27ea200e40.png";
    },
    709393: function (e) {
      e.exports = "/assets/dd701c1d70c1d51d00ac.png";
    },
    432170: function (e) {
      e.exports = "/assets/aaf60661aaad266e505c.png";
    },
    448509: function (e) {
      e.exports = "/assets/a9d51096f8a0d4296a87.png";
    },
    241371: function (e) {
      e.exports = "/assets/c2da3e35e8af9401dbea.png";
    },
    441506: function (e) {
      e.exports = "/assets/3d3f2551422bdf6b1413.png";
    },
    304088: function (e) {
      e.exports = "/assets/38f2e2d5427ed8728d9e.png";
    },
    647387: function (e) {
      e.exports = "/assets/9295fa8b7ed6875453cf.png";
    },
    646584: function (e) {
      e.exports = "/assets/3db2f9c4e006e063dc22.png";
    },
    866074: function (e) {
      e.exports = "/assets/681a7c2bf4edfe32730b.png";
    },
    148718: function (e) {
      e.exports = "/assets/ce4b5e98807049967059.png";
    },
    619359: function (e) {
      e.exports = "/assets/96ac456cd22472f99444.png";
    },
    638431: function (e) {
      e.exports = "/assets/a123d62e744c38a19a8a.png";
    },
    94899: function (e) {
      e.exports = "/assets/6df545a57754885c573e.png";
    },
    987583: function (e) {
      e.exports = "/assets/e36af94a31219ad1f84d.jpg";
    },
    302800: function (e, t, n) {
      n.d(t, {
        GX: function () {
          return m;
        },
        M7: function () {
          return T;
        },
        UY: function () {
          return h;
        },
        k2: function () {
          return a;
        },
        v: function () {
          return b;
        },
      }),
        n(627341),
        n(470079);
      var a,
        r,
        s = n(278074),
        o = n(691324),
        i = n(180650),
        l = n(44315),
        c = n(410154),
        d = n(689938),
        u = n(452823),
        f = n(744709),
        g = n(39934),
        p = n(681532),
        E = n(12981);
      ((r = a || (a = {}))[(r.NONE = 0)] = "NONE"),
        (r[(r.TOOLTIP = 1)] = "TOOLTIP"),
        (r[(r.COACHTIP = 2)] = "COACHTIP"),
        (r[(r.COACHTIP_HEADLINE_ONLY = 3)] = "COACHTIP_HEADLINE_ONLY"),
        (r[(r.BADGE = 4)] = "BADGE");
      let T = (e) =>
          (0, s.EQ)(e)
            .with(i.T.TIDE, () => ({
              label: () => d.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
              iconSrc: E.Z,
              style: {
                background:
                  "linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)",
                boxShadow: "0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)",
                color: (0, l.Lq)(o.I.WHITE_100),
              },
            }))
            .otherwise(() => null),
        C = {
          TIDE: {
            imageSrc: p.Z,
            style: { position: "absolute", width: "600px", zIndex: 10 },
          },
          ROBERT: {
            imageSrc: u.Z,
            style: {
              position: "absolute",
              width: "400px",
              right: "-200px",
              zIndex: 10,
            },
          },
          SHY: {
            imageSrc: f.Z,
            style: { position: "absolute", width: "600px" },
          },
          STORM: {
            imageSrc: g.Z,
            style: { position: "absolute", width: "850px" },
          },
        },
        h = (e) =>
          (0, s.EQ)(e)
            .with("1252405010608951358", () => C.TIDE)
            .with("1252405017688936508", () => C.TIDE)
            .with("1267521289330102344", () => C.STORM)
            .with("1267521289355268154", () => C.STORM)
            .with("1266160780928352268", () => C.STORM)
            .with("1266160780978556969", () => C.STORM)
            .with("1266161342801383434", () => C.STORM)
            .with("1220513995308400680", () => C.STORM)
            .with("1220513984273186816", () => C.STORM)
            .with("1220513989729976411", () => C.STORM)
            .with("1220514048068812901", () => C.STORM)
            .with("1266493591207940133", () => C.STORM)
            .with("1266493591275044903", () => C.STORM)
            .with("1220432740638523543", () => C.STORM)
            .with("1220513977683935373", () => C.SHY)
            .with("1220432647453409384", () => C.SHY)
            .with("1220432697718083614", () => C.SHY)
            .otherwise(() => null),
        b = (e) =>
          (0, s.EQ)(e)
            .with("1262491137386614805", () => C.ROBERT)
            .otherwise(() => null),
        m = {
          [c.C5.TIDE]: {
            artSrc: n(94899),
            backgroundSrc: n(987583),
            title: () => d.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
            description: () =>
              d.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION,
          },
          [c.C5.ROBERT]: {
            artSrc: n(638431),
            backgroundSrc: n(619359),
            title: () => d.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_TITLE,
            description: () =>
              d.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_DESCRIPTION,
          },
          [c.C5.EQUINOX_FALL]: { artSrc: n(148718), backgroundSrc: n(866074) },
        };
    },
    410154: function (e, t, n) {
      n.d(t, {
        C5: function () {
          return r;
        },
      });
      var a,
        r,
        s = n(818083);
      ((a = r || (r = {}))[(a.DEFAULT = 0)] = "DEFAULT"),
        (a[(a.WINTER_2023_DROP = 1)] = "WINTER_2023_DROP"),
        (a[(a.MONSTER_DROP = 2)] = "MONSTER_DROP"),
        (a[(a.SPRINGTOONS = 4)] = "SPRINGTOONS"),
        (a[(a.SHY = 5)] = "SHY"),
        (a[(a.GALAXY = 6)] = "GALAXY"),
        (a[(a.TIDE = 7)] = "TIDE"),
        (a[(a.ROBERT = 8)] = "ROBERT"),
        (a[(a.STORM = 9)] = "STORM"),
        (a[(a.EQUINOX_FALL = 10)] = "EQUINOX_FALL");
      let o = (0, s.B)({
        kind: "user",
        id: "2023-12_collectibles_shop_marketing",
        label: "Collectibles Shop Marketing Variations",
        defaultConfig: { variant: 0 },
        treatments: [
          { id: 7, label: "Tide 2024", config: { variant: 7 } },
          { id: 8, label: "Robert 2024", config: { variant: 8 } },
          { id: 9, label: "Storm 2024", config: { variant: 9 } },
          { id: 10, label: "Equinox/fall 2024", config: { variant: 10 } },
        ],
      });
      t.ZP = (e) => o.useExperiment({ location: e }).variant;
    },
    764707: function (e, t, n) {
      n(47120);
      var a = n(979590),
        r = n.n(a),
        s = n(399606),
        o = n(607070),
        i = n(168631);
      let l = (e, t) => {
          let n = e.toRgb(),
            a = t.toRgb(),
            [s, o, l] = (0, i.J2)([n.r, n.g, n.b], [a.r, a.g, a.b], 50);
          return r()({ r: s, g: o, b: l });
        },
        c = (e, t) =>
          0 === t.length
            ? void 0
            : 1 === t.length
              ? {
                  primary: t[0],
                  secondary: t[0],
                  border: t[0].setAlpha(0.4),
                  label: t[0].isLight() ? e.dark : e.light,
                }
              : {
                  primary: t[0],
                  secondary: t[1],
                  border: l(t[0], t[1]).setAlpha(0.4),
                  label: l(t[0], t[1]).isLight() ? e.dark : e.light,
                },
        d = (e, t) =>
          0 === t.length
            ? void 0
            : 1 === t.length
              ? {
                  primary: t[0],
                  secondary: t[0],
                  text: t[0].isLight() ? e.dark : e.light,
                }
              : {
                  primary: t[0],
                  secondary: t[1],
                  text: l(t[0], t[1]).isLight() ? e.dark : e.light,
                },
        u = (e, t) => {
          let { h: n, s: a, l: s } = e.toHsl();
          return r()({ h: n, s: a * t, l: s });
        };
      t.Z = (e) => (t) => {
        let n = (0, s.e7)([o.Z], () => o.Z.saturation);
        if (null == t) return {};
        let a = {
          backgroundColors: c(e, t.backgroundColors),
          buttonColors: d(e, t.buttonColors),
          confettiColors: t.confettiColors,
        };
        return 1 === n
          ? { ...a }
          : {
              backgroundColors:
                null != a.backgroundColors
                  ? {
                      primary: u(a.backgroundColors.primary, n),
                      secondary: u(a.backgroundColors.secondary, n),
                      border: u(a.backgroundColors.border, n),
                      label: u(a.backgroundColors.label, n),
                    }
                  : void 0,
              buttonColors:
                null != a.buttonColors
                  ? {
                      primary: u(a.buttonColors.primary, n),
                      secondary: u(a.buttonColors.secondary, n),
                      text: u(a.buttonColors.text, n),
                    }
                  : void 0,
              confettiColors: a.confettiColors.map((e) => u(e, n)),
            };
      };
    },
    890249: function (e, t, n) {
      n.d(t, {
        m: function () {
          return r;
        },
      });
      let a = (0, n(818083).B)({
          kind: "user",
          id: "2024-06_collectibles_shop_use_now",
          label: "Collectibles Shop Use Now",
          defaultConfig: { realtimeUseNowEnabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Use now button immediately applies collectible",
              config: { realtimeUseNowEnabled: !0 },
            },
          ],
        }),
        r = (e) => a.useExperiment({ location: e }).realtimeUseNowEnabled;
    },
    318028: function (e, t, n) {
      n.d(t, {
        l: function () {
          return o;
        },
      }),
        n(47120);
      var a = n(399606),
        r = n(597688),
        s = n(267097);
      function o(e) {
        (0, s.Z)();
        let [t, n] = (0, a.Wu)([r.Z], () => [
          r.Z.isFetchingCategories,
          r.Z.getCategoryForProduct(e),
        ]);
        return { isFetching: t, category: n };
      }
    },
    635552: function (e, t, n) {
      n.d(t, {
        W: function () {
          return d;
        },
      }),
        n(47120);
      var a = n(470079),
        r = n(979554),
        s = n(809206),
        o = n(350327),
        i = n(884697),
        l = n(328456),
        c = n(689938);
      let d = (e) => {
        let { product: t, onSuccess: d, onError: u } = e,
          [f, g] = a.useState(!1),
          { firstAvatarDecoration: p, firstProfileEffect: E } = (0, l.R)(t),
          T = (0, i.x6)(t)
            ? c.Z.Messages.COLLECTIBLES_PROFILE_UPDATE_NOTIFICATION
            : t.type === r.Z.AVATAR_DECORATION
              ? c.Z.Messages.COLLECTIBLES_AVATAR_DECO_UPDATED_NOTIFICATION
              : c.Z.Messages.COLLECTIBLES_PFX_UPDATED_NOTIFICATION;
        return {
          handleUseNow: a.useCallback(async () => {
            g(!0);
            try {
              if (
                (null != p && (await (0, s.Mn)({ avatarDecoration: p })),
                null != E)
              ) {
                let e = { profile_effect_id: E.id };
                await (0, o.Z)(e);
              }
              {
                let {
                  ToastPosition: e,
                  ToastType: t,
                  createToast: a,
                  popToast: r,
                  showToast: s,
                } = await Promise.resolve().then(n.bind(n, 481060));
                r(), s(a(T, t.MESSAGE, { duration: 6e3, position: e.TOP }));
              }
              null == d || d();
            } catch (e) {
              null == u || u(e);
            } finally {
              g(!1);
            }
          }, [p, E, d, T, u]),
          isApplying: f,
        };
      };
    },
    328456: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
        },
        b: function () {
          return s;
        },
      }),
        n(724458),
        n(653041),
        n(47120);
      var a = n(470079),
        r = n(979554);
      class s {
        get firstAvatarDecoration() {
          return this.getFirstItemByType(r.Z.AVATAR_DECORATION);
        }
        get firstProfileEffect() {
          return this.getFirstItemByType(r.Z.PROFILE_EFFECT);
        }
        getFirstItemByType(e) {
          var t;
          let n = (
            null !== (t = this.itemsByTypes.get(e)) && void 0 !== t ? t : []
          )[0];
          if (null != n) return n;
        }
        sortByTypes(e) {
          return e.reduce((e, t) => {
            let n = e.get(t.type);
            return null != n ? n.push(t) : e.set(t.type, [t]), e;
          }, new Map());
        }
        constructor(e) {
          var t, n, a;
          (t = this),
            (a = void 0),
            (n = "itemsByTypes") in t
              ? Object.defineProperty(t, n, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = a),
            (this.itemsByTypes = this.sortByTypes(e));
        }
      }
      let o = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: n } = a.useMemo(
          () => new s(e.items),
          [e],
        );
        return { firstProfileEffect: t, firstAvatarDecoration: n };
      };
    },
    624377: function (e, t, n) {
      var a = n(979590),
        r = n.n(a),
        s = n(692547),
        o = n(764707);
      let i = r()(
          s.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex(),
        ),
        l = r()(
          s.Z.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex(),
        ),
        c = (0, o.Z)({ dark: l, light: i });
      t.Z = c;
    },
    141011: function (e, t, n) {
      var a = n(735250),
        r = n(470079),
        s = n(120356),
        o = n.n(s),
        i = n(399606),
        l = n(376345),
        c = n(607070),
        d = n(302221),
        u = n(884697),
        f = n(372654),
        g = n(689380);
      t.Z = (e) => {
        let {
            asset: t,
            size: n = f.yV,
            className: s,
            style: p,
            children: E,
            categoryBannerOverride: T,
          } = e,
          C = (0, i.e7)([c.Z], () => c.Z.saturation),
          h = r.useMemo(() => {
            if (null == t) return p;
            let e = (0, u.uV)(t, { size: n, format: "jpg" }),
              a = (null == T ? void 0 : T.blur)
                ? { filter: "blur(2px)", transform: "scale(1.02)" }
                : {};
            if (1 === C)
              return {
                ...p,
                backgroundImage: (null == T ? void 0 : T.addGradient)
                  ? "url(".concat(
                      e,
                      "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)",
                    )
                  : "url(".concat(e, ")"),
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
                ...a,
              };
            let r = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - C);
            return {
              ...p,
              backgroundImage: "linear-gradient("
                .concat(r, ", ")
                .concat(r, "), url(")
                .concat(e, ")"),
              backgroundBlendMode: "saturation",
              backgroundSize: "cover",
              backgroundPosition: "center",
              ...a,
            };
          }, [
            t,
            n,
            C,
            p,
            null == T ? void 0 : T.blur,
            null == T ? void 0 : T.addGradient,
          ]);
        return (0, a.jsx)("div", {
          className: o()(g.banner, s),
          style: h,
          children: E,
        });
      };
    },
    331042: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CollectiblesCollectedModalInner: function () {
            return H;
          },
        }),
        n(47120),
        n(627341);
      var a = n(735250),
        r = n(470079),
        s = n(887024),
        o = n(512722),
        i = n.n(o),
        l = n(212433),
        c = n(278074),
        d = n(979554),
        u = n(399606),
        f = n(481060),
        g = n(37234),
        p = n(607070),
        E = n(100527),
        T = n(906732),
        C = n(1585),
        h = n(125988),
        b = n(300284),
        m = n(876917),
        v = n(642619),
        S = n(594174),
        O = n(884697),
        I = n(890249),
        _ = n(318028),
        L = n(635552),
        N = n(328456),
        A = n(624377),
        R = n(530618),
        x = n(141011),
        y = n(372654),
        Z = n(216541),
        w = n(302800),
        M = n(215023),
        B = n(689938),
        D = n(783600),
        P = n(660097);
      let j = (e) => {
          let { product: t, item: n } = e,
            r = (0, u.e7)([S.default], () => {
              let e = S.default.getCurrentUser();
              return i()(null != e, "User cannot be undefined"), e;
            }),
            { avatarDecorationSrc: s } = (0, h.Z)({
              user: r,
              avatarDecorationOverride:
                (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION
                  ? n
                  : null,
              size: (0, C.y9)(f.AvatarSizes.SIZE_120),
            });
          return (0, c.EQ)(t.type)
            .with(d.Z.PROFILE_EFFECT, () =>
              (0, a.jsx)("div", {
                className: D.profileEffectShopPreview,
                children: (0, a.jsx)(m.Z, {
                  forCollectedModal: !0,
                  profileEffectId: n.id,
                }),
              }),
            )
            .with(
              d.Z.AVATAR_DECORATION,
              () => (
                i()(
                  n.type === d.Z.AVATAR_DECORATION,
                  "ts-match already checked the type",
                ),
                (0, a.jsx)(f.Avatar, {
                  size: f.AvatarSizes.SIZE_120,
                  src: P,
                  avatarDecoration: s,
                  className: D.avatarDecoration,
                  "aria-label": t.name,
                })
              ),
            )
            .with(d.Z.BUNDLE, () =>
              (0, a.jsx)("div", {
                className: D.bundlePreview,
                children: (0, a.jsx)(Z.d, {
                  product: t,
                  user: r,
                  isPurchased: !1,
                  isHighlighted: !0,
                  profileEffectClassName: D.bundleProfileEffectCard,
                }),
              }),
            )
            .otherwise(() => null);
        },
        k = (e) => {
          let { product: t, item: n, reducedMotion: s, displayOptions: o } = e,
            [i, c] = r.useState(!1),
            d = (0, f.useSpring)({
              from: { transform: "translateX(100%)", right: "-100%" },
              to: { transform: "translateX(50%)", right: "50%" },
              config: { duration: 1550 },
              onRest: () => setTimeout(() => c(!0), 100),
            }),
            u = (0, f.useSpring)({
              from: { transform: "translateX(100%)", right: "-100%" },
              to: { transform: "translateX(50%)", right: "50%" },
              config: { duration: 1550 },
              reverse: i,
            }),
            g = (0, f.useSpring)(
              {
                from: {
                  transform: "translateX(50%)",
                  right: "50%",
                  opacity: 1,
                },
                to: { transform: "translateX(50%)", right: "50%", opacity: 0 },
                config: { duration: 300 },
                delay: 600,
              },
              "animate-always",
            );
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(l.animated.div, {
                className: D.easterEggContainer,
                style: d,
                children: (0, a.jsx)(j, { product: t, item: n }),
              }),
              (0, a.jsx)(l.animated.div, {
                className: D.easterEggContainer,
                style: s ? g : u,
                children: (0, a.jsx)("img", {
                  src: o.imageSrc,
                  style: o.style,
                  alt: "",
                  "aria-hidden": "true",
                }),
              }),
            ],
          });
        },
        F = (e) => {
          let { product: t, item: n, reducedMotion: r = !1 } = e,
            s = (0, w.v)(t.categorySkuId);
          return null != s
            ? (0, a.jsx)(k, {
                product: t,
                item: n,
                reducedMotion: r,
                displayOptions: s,
              })
            : (0, a.jsx)(j, { product: t, item: n });
        },
        H = (e) => {
          var t;
          let {
              product: n,
              onClose: s,
              confettiTarget: o,
              confettiCanvas: l,
              hideConfetti: h = !1,
              analyticsLocations: m,
            } = e,
            { confettiColors: S } = (0, A.Z)(n.styles),
            Z = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            w = (0, I.m)("CollectiblesCollectedModal"),
            [P] = n.items,
            j = r.useRef(null),
            { analyticsLocations: k } = (0, T.ZP)([
              ...m,
              E.Z.COLLECTIBLES_COLLECTED_MODAL,
            ]),
            H = (0, b.Z)({ analyticsLocations: k }),
            U = r.useCallback(() => {
              if ((s(), (0, g.xf)(), H(), n.type === d.Z.AVATAR_DECORATION)) {
                i()(
                  P.type === d.Z.AVATAR_DECORATION,
                  "product type and item type are the same",
                ),
                  (0, C.ps)({
                    initialSelectedDecoration: P,
                    analyticsLocations: k,
                  });
                return;
              }
              n.type === d.Z.PROFILE_EFFECT &&
                (0, v.H)({
                  initialSelectedEffectId: P.id,
                  analyticsLocations: k,
                });
            }, [s, H, n.type, P, k]),
            { handleUseNow: z, isApplying: G } = (0, L.W)({
              product: n,
              onSuccess: s,
              onError: s,
            }),
            { firstAvatarDecoration: Y, firstProfileEffect: V } = (0, N.R)(n),
            X = (0, O.x6)(n) ? null != Y && null != V : null != Y || null != V,
            W = (0, O.x6)(n) || w,
            { category: Q, isFetching: K } = (0, _.l)(n.skuId),
            q =
              null !== (t = null == Q ? void 0 : Q.successModalBg) &&
              void 0 !== t
                ? t
                : n.banner;
          return (0, a.jsxs)(T.Gt, {
            value: k,
            children: [
              (0, a.jsxs)("div", {
                className: D.modalInner,
                ref: j,
                children: [
                  (0, a.jsxs)("div", {
                    className: D.bannerContainer,
                    children: [
                      (0, a.jsx)(x.Z, {
                        asset: K ? void 0 : q,
                        size: (0, y.ML)(880),
                        className: D.decorationBanner,
                        categoryBannerOverride: (0, M.ZS)(n.categorySkuId),
                      }),
                      (0, a.jsx)(F, { product: n, item: P, reducedMotion: Z }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: D.collectedInfoContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: D.collectedTextContainer,
                        children: [
                          (0, a.jsx)(f.Heading, {
                            variant: "heading-lg/bold",
                            children:
                              B.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                itemName: n.name,
                              }),
                          }),
                          (0, a.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            children: (0, c.EQ)(null == n ? void 0 : n.type)
                              .with(
                                d.Z.BUNDLE,
                                () =>
                                  B.Z.Messages
                                    .COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE,
                              )
                              .with(
                                d.Z.PROFILE_EFFECT,
                                () =>
                                  B.Z.Messages
                                    .COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION,
                              )
                              .otherwise(
                                () =>
                                  B.Z.Messages
                                    .COLLECTIBLES_PERMANENT_COLLECTION,
                              ),
                          }),
                        ],
                      }),
                      W
                        ? (0, a.jsxs)("div", {
                            className: D.buttons,
                            children: [
                              (0, a.jsx)(f.Button, {
                                color: X
                                  ? f.ButtonColors.PRIMARY
                                  : f.ButtonColors.BRAND,
                                onClick: U,
                                children:
                                  B.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                              }),
                              X
                                ? (0, a.jsx)(f.Button, {
                                    onClick: z,
                                    submitting: G,
                                    children: B.Z.Messages.COLLECTIBLES_USE_NOW,
                                  })
                                : null,
                            ],
                          })
                        : (0, a.jsx)(f.Button, {
                            onClick: U,
                            children: B.Z.Messages.COLLECTIBLES_USE_NOW,
                          }),
                    ],
                  }),
                  (0, a.jsx)(f.ModalCloseButton, {
                    onClick: s,
                    className: D.modalCloseButton,
                    withCircleBackground: !0,
                  }),
                ],
              }),
              !h &&
                !Z &&
                (0, a.jsx)(R.Z, {
                  confettiTarget: null != o ? o : j.current,
                  confettiCanvas: l,
                  sprites: (0, y.vK)(n.categorySkuId),
                  colors: null == S ? void 0 : S.map((e) => e.toHexString()),
                }),
            ],
          });
        };
      t.default = (e) => {
        let {
            transitionState: t,
            product: n,
            onClose: o,
            analyticsLocations: i,
          } = e,
          l = r.useRef(new s.qA()),
          [c, d] = r.useState(null),
          u = (0, w.UY)(n.skuId);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.O_, {
              ref: d,
              className: D.confettiCanvas,
              environment: l.current,
            }),
            (0, a.jsxs)(f.ModalRoot, {
              hideShadow: !0,
              transitionState: t,
              size: f.ModalSize.DYNAMIC,
              className: D.modalRoot,
              children: [
                null != u &&
                  (0, a.jsx)("img", {
                    src: u.imageSrc,
                    className: D.customConfetti,
                    style: u.style,
                    alt: "",
                    "aria-hidden": "true",
                  }),
                (0, a.jsx)(f.ModalContent, {
                  className: D.modalContent,
                  children: (0, a.jsx)(H, {
                    product: n,
                    onClose: o,
                    confettiCanvas: c,
                    hideConfetti: null != u,
                    analyticsLocations: i,
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    372654: function (e, t, n) {
      n.d(t, {
        ML: function () {
          return o;
        },
        nH: function () {
          return i;
        },
        vK: function () {
          return d;
        },
        yV: function () {
          return s;
        },
      });
      var a = n(180650),
        r = n(921948);
      let s = 1060,
        o = (e) => e * (0, r.Z)(),
        i = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 180,
            { primary: n, secondary: a } = e;
          return "linear-gradient("
            .concat(t, "deg, ")
            .concat(n.toHslString(), ", ")
            .concat(a.toHslString(), ")");
        },
        l = [n(241371), n(448509)],
        c = {
          ["".concat(a.T.FANTASY)]: [n(709393), n(646584)],
          ["".concat(a.T.ANIME)]: [n(647387), n(448509)],
          ["".concat(a.T.BREAKFAST)]: [n(289901), n(402344)],
          ["".concat(a.T.FALL)]: [n(432170), n(15888)],
          ["".concat(a.T.WINTER)]: [n(304088), n(774694)],
          ["".concat(a.T.MONSTERS)]: [n(16724), n(441506)],
        },
        d = (e) => {
          var t;
          return null == e ? l : null !== (t = c[e]) && void 0 !== t ? t : l;
        };
    },
    616066: function (e, t, n) {
      n.d(t, {
        R: function () {
          return p;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(120356),
        s = n.n(r),
        o = n(979554),
        i = n(481060),
        l = n(1585),
        c = n(125988),
        d = n(998502),
        u = n(689938),
        f = n(446563);
      let g = d.ZP.getEnableHardwareAcceleration()
          ? i.AnimatedAvatar
          : i.Avatar,
        p = (e) => {
          let {
              item: t,
              user: n,
              isHighlighted: r = !1,
              isPurchased: d = !1,
              avatarSize: p = i.AvatarSizes.SIZE_152,
              avatarPlaceholderSrc: E,
            } = e,
            T = (0, l.y9)(p),
            {
              avatarDecorationSrc: C,
              eventHandlers: h,
              avatarPlaceholderSrc: b,
            } = (0, c.Z)({
              user: n,
              avatarDecorationOverride:
                (null == t ? void 0 : t.type) === o.Z.AVATAR_DECORATION
                  ? t
                  : void 0,
              size: T,
              onlyAnimateOnHover: !r,
            });
          return (0, a.jsx)(g, {
            ...h,
            avatarDecoration: C,
            src: r
              ? null == n
                ? void 0
                : n.getAvatarURL(void 0, 152, !0)
              : null != E
                ? E
                : b,
            imageClassName: r ? f.fadeInAvatarImg : void 0,
            className: s()(f.avatar, { [f.avatarPurchased]: d }),
            size: p,
            "aria-label": u.Z.Messages.USER_SETTINGS_AVATAR,
          });
        };
    },
    216541: function (e, t, n) {
      n.d(t, {
        d: function () {
          return E;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(120356),
        s = n.n(r),
        o = n(780384),
        i = n(481060),
        l = n(410030),
        c = n(876917),
        d = n(328456),
        u = n(616066),
        f = n(746443),
        g = n(63243),
        p = n(244488);
      let E = (e) => {
        let {
            product: t,
            isPurchased: n,
            isHighlighted: r,
            user: E,
            forCollectedModal: T,
            profileEffectClassName: C,
          } = e,
          { firstProfileEffect: h, firstAvatarDecoration: b } = (0, d.R)(t),
          m = (0, l.ZP)(),
          v = (0, o.ap)(m);
        return (0, a.jsxs)("div", {
          className: f.container,
          children: [
            null != h
              ? (0, a.jsx)("div", {
                  className: s()(f.profileEffectShopPreview, C),
                  children: (0, a.jsx)(c.Z, {
                    isHovering: r,
                    profileEffectId: h.id,
                    isPurchased: n,
                    forCollectedModal: T,
                    removeSetHeight: !0,
                  }),
                })
              : null,
            null != b
              ? (0, a.jsx)("div", {
                  className: f.avatarDecorationPreview,
                  children: (0, a.jsx)(u.R, {
                    item: b,
                    user: E,
                    avatarSize: i.AvatarSizes.SIZE_120,
                    isPurchased: n,
                    isHighlighted: r,
                    avatarPlaceholderSrc: v ? p : g,
                  }),
                })
              : null,
          ],
        });
      };
    },
    876917: function (e, t, n) {
      n(47120);
      var a = n(735250),
        r = n(470079),
        s = n(120356),
        o = n.n(s),
        i = n(802433),
        l = n(680295),
        c = n(296140),
        d = n(241822);
      t.Z = (e) => {
        let {
            profileEffectId: t,
            isHovering: n,
            forCollectedModal: s = !1,
            isPurchased: u,
            removeSetHeight: f = !1,
          } = e,
          g = s ? 250 : 0.1,
          [p, E] = r.useState(!0);
        return (r.useEffect(() => {
          if (!0 !== s) E(!1);
          else {
            let e = setTimeout(() => {
              E(!1);
            }, g);
            return () => {
              clearTimeout(e);
            };
          }
        }, [g, s]),
        null != t)
          ? (0, a.jsxs)("div", {
              className: o()(c.previewContainer, {
                [c.previewContainerAnimation]: s,
                [c.previewContainerSetHeight]: !f,
              }),
              children: [
                (0, a.jsx)("img", {
                  src: d,
                  alt: " ",
                  className: s ? c.previewForCollected : c.preview,
                  "aria-hidden": !0,
                }),
                !p &&
                  (0, a.jsx)("div", {
                    className: u ? c.purchasedEffect : void 0,
                    children: (0, a.jsx)(l.Z, {
                      profileEffectId: t,
                      useThumbnail: !0,
                      autoPlay: s,
                      restartMethod: i.j.FromStart,
                      resetOnHover: !0,
                      isHovering: n,
                      introDelay: g,
                      useOpacityOnHover: !1,
                      shopPreview: !0,
                    }),
                  }),
              ],
            })
          : null;
      };
    },
    642619: function (e, t, n) {
      n.d(t, {
        H: function () {
          return s;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(481060);
      let s = (e) => {
        let { analyticsLocations: t, initialSelectedEffectId: s, guild: o } = e;
        (0, r.openModalLazy)(async () => {
          let { default: e } = await n.e("55183").then(n.bind(n, 191564));
          return (n) =>
            (0, a.jsx)(e, {
              ...n,
              guild: o,
              initialSelectedEffectId: s,
              analyticsLocations: t,
            });
        }, {});
      };
    },
    452823: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/060c53a66797d6553200b73930246646e051a218278baaab488c6f68131e48a6.png";
    },
    744709: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/2703bc2130d4f7dac25f48d500e205e57e974fa4128116d805dc94a7d9455dce.png";
    },
    39934: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/69a3e8179a8eb5068d6b88b77259a8617ba14ee86a066d3e62e0e4a6e6de0622.png";
    },
    681532: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/4a12163e4b9957791bc381b3f688405064e69148eebd94ba8b94452b6c932172.png";
    },
    12981: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/8100f5eb716cf12721dbc6b58297f60ad0e89a253e0056d3ff2195ddffd1ab7b.png";
    },
  },
]);
//# sourceMappingURL=72e7611686f658198938.js.map
