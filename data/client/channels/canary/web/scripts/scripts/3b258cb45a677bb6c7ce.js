"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87624"],
  {
    63243: function (t) {
      t.exports = "/assets/b2fad2364372ac883853.png";
    },
    244488: function (t) {
      t.exports = "/assets/f0b741b24bffce0dd3cf.png";
    },
    15888: function (t) {
      t.exports = "/assets/b2e8f732590705176d23.png";
    },
    857578: function (t) {
      t.exports = "/assets/42805d6e8621df404add.png";
    },
    774694: function (t) {
      t.exports = "/assets/499681d7cba7c4250d56.png";
    },
    402344: function (t) {
      t.exports = "/assets/63eba15c08ff69f7aec3.png";
    },
    289901: function (t) {
      t.exports = "/assets/4439a1724f27ea200e40.png";
    },
    709393: function (t) {
      t.exports = "/assets/dd701c1d70c1d51d00ac.png";
    },
    432170: function (t) {
      t.exports = "/assets/aaf60661aaad266e505c.png";
    },
    448509: function (t) {
      t.exports = "/assets/a9d51096f8a0d4296a87.png";
    },
    241371: function (t) {
      t.exports = "/assets/c2da3e35e8af9401dbea.png";
    },
    441506: function (t) {
      t.exports = "/assets/3d3f2551422bdf6b1413.png";
    },
    304088: function (t) {
      t.exports = "/assets/38f2e2d5427ed8728d9e.png";
    },
    647387: function (t) {
      t.exports = "/assets/9295fa8b7ed6875453cf.png";
    },
    646584: function (t) {
      t.exports = "/assets/3db2f9c4e006e063dc22.png";
    },
    866074: function (t) {
      t.exports = "/assets/681a7c2bf4edfe32730b.png";
    },
    148718: function (t) {
      t.exports = "/assets/ce4b5e98807049967059.png";
    },
    619359: function (t) {
      t.exports = "/assets/96ac456cd22472f99444.png";
    },
    638431: function (t) {
      t.exports = "/assets/a123d62e744c38a19a8a.png";
    },
    94899: function (t) {
      t.exports = "/assets/6df545a57754885c573e.png";
    },
    987583: function (t) {
      t.exports = "/assets/e36af94a31219ad1f84d.jpg";
    },
    302800: function (t, e, n) {
      n.d(e, {
        GX: function () {
          return C;
        },
        M7: function () {
          return h;
        },
        UY: function () {
          return m;
        },
        k2: function () {
          return r;
        },
        v: function () {
          return x;
        },
      }),
        n(627341),
        n(192379);
      var r,
        a,
        i = n(278074),
        o = n(691324),
        s = n(180650),
        l = n(44315),
        c = n(410154),
        d = n(388032),
        u = n(452823),
        f = n(744709),
        p = n(39934),
        g = n(681532);
      if (12633 == n.j) var v = n(12981);
      ((a = r || (r = {}))[(a.NONE = 0)] = "NONE"),
        (a[(a.TOOLTIP = 1)] = "TOOLTIP"),
        (a[(a.COACHTIP = 2)] = "COACHTIP"),
        (a[(a.COACHTIP_HEADLINE_ONLY = 3)] = "COACHTIP_HEADLINE_ONLY"),
        (a[(a.BADGE = 4)] = "BADGE");
      let h = (t) =>
          (0, i.EQ)(t)
            .with(s.T.TIDE, () => ({
              label: () => d.intl.string(d.t.kDb9hY),
              iconSrc: v.Z,
              style: {
                background:
                  "linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)",
                boxShadow: "0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)",
                color: (0, l.Lq)(o.I.WHITE_100),
              },
            }))
            .otherwise(() => null),
        b = {
          TIDE: {
            imageSrc: g.Z,
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
            imageSrc: p.Z,
            style: { position: "absolute", width: "850px" },
          },
        },
        m = (t) =>
          (0, i.EQ)(t)
            .with("1252405010608951358", () => b.TIDE)
            .with("1252405017688936508", () => b.TIDE)
            .with("1267521289330102344", () => b.STORM)
            .with("1267521289355268154", () => b.STORM)
            .with("1266160780928352268", () => b.STORM)
            .with("1266160780978556969", () => b.STORM)
            .with("1266161342801383434", () => b.STORM)
            .with("1220513995308400680", () => b.STORM)
            .with("1220513984273186816", () => b.STORM)
            .with("1220513989729976411", () => b.STORM)
            .with("1220514048068812901", () => b.STORM)
            .with("1266493591207940133", () => b.STORM)
            .with("1266493591275044903", () => b.STORM)
            .with("1220432740638523543", () => b.STORM)
            .with("1220513977683935373", () => b.SHY)
            .with("1220432647453409384", () => b.SHY)
            .with("1220432697718083614", () => b.SHY)
            .otherwise(() => null),
        x = (t) =>
          (0, i.EQ)(t)
            .with("1262491137386614805", () => b.ROBERT)
            .otherwise(() => null),
        C = {
          [c.C5.TIDE]: {
            artSrc: n(94899),
            backgroundSrc: n(987583),
            title: () => d.intl.string(d.t.qFKNgI),
            description: () => d.intl.string(d.t.PgDVTk),
          },
          [c.C5.ROBERT]: {
            artSrc: n(638431),
            backgroundSrc: n(619359),
            title: () => d.intl.string(d.t.pAJTKi),
            description: () => d.intl.string(d.t.EDi1u7),
          },
          [c.C5.EQUINOX_FALL]: { artSrc: n(148718), backgroundSrc: n(866074) },
        };
    },
    410154: function (t, e, n) {
      n.d(e, {
        C5: function () {
          return a;
        },
      });
      var r,
        a,
        i = n(818083);
      ((r = a || (a = {}))[(r.DEFAULT = 0)] = "DEFAULT"),
        (r[(r.WINTER_2023_DROP = 1)] = "WINTER_2023_DROP"),
        (r[(r.MONSTER_DROP = 2)] = "MONSTER_DROP"),
        (r[(r.SPRINGTOONS = 4)] = "SPRINGTOONS"),
        (r[(r.SHY = 5)] = "SHY"),
        (r[(r.GALAXY = 6)] = "GALAXY"),
        (r[(r.TIDE = 7)] = "TIDE"),
        (r[(r.ROBERT = 8)] = "ROBERT"),
        (r[(r.STORM = 9)] = "STORM"),
        (r[(r.EQUINOX_FALL = 10)] = "EQUINOX_FALL");
      let o = (0, i.B)({
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
      e.ZP = (t) => o.useExperiment({ location: t }).variant;
    },
    429368: function (t, e, n) {
      n.d(e, {
        $: function () {
          return c;
        },
        o: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(232713),
        a = n(65400),
        i = n(979554);
      let o = (0, a.F)(() => ({ selectionStates: new Map() }), r.X),
        s = () => ({ selectedVariantIndex: 0 }),
        l = (t, e) => {
          var n, r, a, s;
          let l = o();
          return (null == t ? void 0 : t.type) !== i.Z.VARIANTS_GROUP
            ? 0
            : Math.max(
                0,
                null !==
                  (s =
                    null !==
                      (a =
                        null ===
                          (n = l.selectionStates.get(t.storeListingId)) ||
                        void 0 === n
                          ? void 0
                          : n.selectedVariantIndex) && void 0 !== a
                      ? a
                      : null === (r = t.variants) || void 0 === r
                        ? void 0
                        : r.findIndex((t) => !e.has(t.skuId))) && void 0 !== s
                  ? s
                  : 0,
              );
        },
        c = (t, e) => {
          o.setState((n) => {
            var r;
            let a =
              null !== (r = n.selectionStates.get(t.storeListingId)) &&
              void 0 !== r
                ? r
                : s();
            return {
              selectionStates: new Map(n.selectionStates).set(
                t.storeListingId,
                { ...a, selectedVariantIndex: e },
              ),
            };
          });
        };
    },
    764707: function (t, e, n) {
      n(47120);
      var r = n(979590),
        a = n.n(r),
        i = n(399606),
        o = n(607070),
        s = n(168631);
      let l = (t, e) => {
          let n = t.toRgb(),
            r = e.toRgb(),
            [i, o, l] = (0, s.J2)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
          return a()({ r: i, g: o, b: l });
        },
        c = (t, e) =>
          0 === e.length
            ? void 0
            : 1 === e.length
              ? {
                  primary: e[0],
                  secondary: e[0],
                  border: e[0].setAlpha(0.4),
                  label: e[0].isLight() ? t.dark : t.light,
                }
              : {
                  primary: e[0],
                  secondary: e[1],
                  border: l(e[0], e[1]).setAlpha(0.4),
                  label: l(e[0], e[1]).isLight() ? t.dark : t.light,
                },
        d = (t, e) =>
          0 === e.length
            ? void 0
            : 1 === e.length
              ? {
                  primary: e[0],
                  secondary: e[0],
                  text: e[0].isLight() ? t.dark : t.light,
                }
              : {
                  primary: e[0],
                  secondary: e[1],
                  text: l(e[0], e[1]).isLight() ? t.dark : t.light,
                },
        u = (t, e) => {
          let { h: n, s: r, l: i } = t.toHsl();
          return a()({ h: n, s: r * e, l: i });
        };
      e.Z = (t) => (e) => {
        let n = (0, i.e7)([o.Z], () => o.Z.saturation);
        if (null == e) return {};
        let r = {
          backgroundColors: c(t, e.backgroundColors),
          buttonColors: d(t, e.buttonColors),
          confettiColors: e.confettiColors,
        };
        return 1 === n
          ? { ...r }
          : {
              backgroundColors:
                null != r.backgroundColors
                  ? {
                      primary: u(r.backgroundColors.primary, n),
                      secondary: u(r.backgroundColors.secondary, n),
                      border: u(r.backgroundColors.border, n),
                      label: u(r.backgroundColors.label, n),
                    }
                  : void 0,
              buttonColors:
                null != r.buttonColors
                  ? {
                      primary: u(r.buttonColors.primary, n),
                      secondary: u(r.buttonColors.secondary, n),
                      text: u(r.buttonColors.text, n),
                    }
                  : void 0,
              confettiColors: r.confettiColors.map((t) => u(t, n)),
            };
      };
    },
    890249: function (t, e, n) {
      n.d(e, {
        m: function () {
          return a;
        },
      });
      let r = (0, n(818083).B)({
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
        a = (t) => r.useExperiment({ location: t }).realtimeUseNowEnabled;
    },
    318028: function (t, e, n) {
      n.d(e, {
        l: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(399606),
        a = n(597688),
        i = n(267097);
      function o(t) {
        (0, i.Z)();
        let [e, n] = (0, r.Wu)([a.Z], () => [
          a.Z.isFetchingCategories,
          a.Z.getCategoryForProduct(t),
        ]);
        return { isFetching: e, category: n };
      }
    },
    635552: function (t, e, n) {
      n.d(e, {
        W: function () {
          return d;
        },
      }),
        n(47120);
      var r = n(192379),
        a = n(979554),
        i = n(809206),
        o = n(350327),
        s = n(884697),
        l = n(328456),
        c = n(388032);
      let d = (t) => {
        let { product: e, onSuccess: d, onError: u } = t,
          [f, p] = r.useState(!1),
          { firstAvatarDecoration: g, firstProfileEffect: v } = (0, l.R)(e),
          h = (0, s.x6)(e)
            ? c.intl.string(c.t.tf1ZZ2)
            : e.type === a.Z.AVATAR_DECORATION
              ? c.intl.string(c.t.zOA4a2)
              : c.intl.string(c.t.SWm2am);
        return {
          handleUseNow: r.useCallback(async () => {
            p(!0);
            try {
              if (
                (null != g && (await (0, i.Mn)({ avatarDecoration: g })),
                null != v)
              ) {
                let t = { profile_effect_id: v.id };
                await (0, o.Z)(t);
              }
              {
                let {
                  ToastPosition: t,
                  ToastType: e,
                  createToast: r,
                  popToast: a,
                  showToast: i,
                } = await Promise.resolve().then(n.bind(n, 481060));
                a(), i(r(h, e.MESSAGE, { duration: 6e3, position: t.TOP }));
              }
              null == d || d();
            } catch (t) {
              null == u || u(t);
            } finally {
              p(!1);
            }
          }, [g, v, d, h, u]),
          isApplying: f,
        };
      };
    },
    328456: function (t, e, n) {
      n.d(e, {
        R: function () {
          return o;
        },
        b: function () {
          return i;
        },
      }),
        n(724458),
        n(653041),
        n(47120);
      var r = n(192379),
        a = n(979554);
      class i {
        get firstAvatarDecoration() {
          return this.getFirstItemByType(a.Z.AVATAR_DECORATION);
        }
        get firstProfileEffect() {
          return this.getFirstItemByType(a.Z.PROFILE_EFFECT);
        }
        getFirstItemByType(t) {
          var e;
          let n = (
            null !== (e = this.itemsByTypes.get(t)) && void 0 !== e ? e : []
          )[0];
          if (null != n) return n;
        }
        sortByTypes(t) {
          return t.reduce((t, e) => {
            let n = t.get(e.type);
            return null != n ? n.push(e) : t.set(e.type, [e]), t;
          }, new Map());
        }
        constructor(t) {
          var e, n, r;
          (e = this),
            (r = void 0),
            (n = "itemsByTypes") in e
              ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = r),
            (this.itemsByTypes = this.sortByTypes(t));
        }
      }
      let o = (t) => {
        let { firstProfileEffect: e, firstAvatarDecoration: n } = r.useMemo(
          () => new i(t.items),
          [t],
        );
        return { firstProfileEffect: e, firstAvatarDecoration: n };
      };
    },
    624377: function (t, e, n) {
      var r = n(979590),
        a = n.n(r),
        i = n(692547),
        o = n(764707);
      let s = a()(
          i.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex(),
        ),
        l = a()(
          i.Z.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex(),
        ),
        c = (0, o.Z)({ dark: l, light: s });
      e.Z = c;
    },
    141011: function (t, e, n) {
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        o = n.n(i),
        s = n(399606),
        l = n(376345),
        c = n(607070),
        d = n(302221),
        u = n(884697),
        f = n(372654),
        p = n(695935);
      let g = (t) => null != t && /^http/i.test(t);
      e.Z = (t) => {
        let {
            asset: e,
            size: n = f.yV,
            className: i,
            style: v,
            children: h,
            categoryBannerOverride: b,
          } = t,
          m = (0, s.e7)([c.Z], () => c.Z.saturation),
          x = a.useMemo(() => {
            if (null == e) return v;
            let t = g(e) ? e : (0, u.uV)(e, { size: n, format: "jpg" }),
              r = (null == b ? void 0 : b.blur)
                ? { filter: "blur(2px)", transform: "scale(1.02)" }
                : {};
            if (1 === m)
              return {
                ...v,
                backgroundImage: (null == b ? void 0 : b.addGradient)
                  ? "url(".concat(
                      t,
                      "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)",
                    )
                  : "url(".concat(t, ")"),
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
                ...r,
              };
            let a = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - m);
            return {
              ...v,
              backgroundImage: "linear-gradient("
                .concat(a, ", ")
                .concat(a, "), url(")
                .concat(t, ")"),
              backgroundBlendMode: "saturation",
              backgroundSize: "cover",
              backgroundPosition: "center",
              ...r,
            };
          }, [
            e,
            n,
            m,
            v,
            null == b ? void 0 : b.blur,
            null == b ? void 0 : b.addGradient,
          ]);
        return (0, r.jsx)("div", {
          className: o()(p.banner, i),
          style: x,
          children: h,
        });
      };
    },
    331042: function (t, e, n) {
      n.r(e),
        n.d(e, {
          CollectiblesCollectedModalInner: function () {
            return Q;
          },
        }),
        n(47120),
        n(627341);
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        o = n.n(i),
        s = n(119617),
        l = n(512722),
        c = n.n(l),
        d = n(208404),
        u = n(278074),
        f = n(979554),
        p = n(399606),
        g = n(481060),
        v = n(37234),
        h = n(607070),
        b = n(100527),
        m = n(906732),
        x = n(1585),
        C = n(125988),
        S = n(286961),
        T = n(300284),
        E = n(876917),
        y = n(642619),
        A = n(594174),
        O = n(1870),
        I = n(429368),
        R = n(884697),
        N = n(890249),
        w = n(228624),
        Z = n(318028),
        M = n(635552),
        k = n(905357),
        j = n(328456),
        _ = n(624377),
        L = n(530618),
        P = n(141011),
        D = n(372654),
        B = n(216541),
        F = n(58201),
        H = n(302800),
        U = n(215023),
        z = n(388032),
        V = n(493200),
        Y = n(660097);
      let G = (t) => {
          let { product: e, item: n } = t,
            a = (0, p.e7)([A.default], () => {
              let t = A.default.getCurrentUser();
              return c()(null != t, "User cannot be undefined"), t;
            }),
            { avatarDecorationSrc: i } = (0, C.Z)({
              user: a,
              avatarDecorationOverride:
                (null == n ? void 0 : n.type) === f.Z.AVATAR_DECORATION
                  ? n
                  : null,
              size: (0, x.y9)(g.AvatarSizes.SIZE_120),
            }),
            o = (0, k.k)(e);
          return (0, u.EQ)(e.type)
            .with(f.Z.PROFILE_EFFECT, () =>
              (0, r.jsx)("div", {
                className: V.profileEffectShopPreview,
                children: (0, r.jsx)(E.Z, {
                  forCollectedModal: !0,
                  profileEffectId: n.id,
                }),
              }),
            )
            .with(
              f.Z.AVATAR_DECORATION,
              () => (
                c()(
                  n.type === f.Z.AVATAR_DECORATION,
                  "ts-match already checked the type",
                ),
                (0, r.jsx)(g.Avatar, {
                  size: g.AvatarSizes.SIZE_120,
                  src: Y,
                  avatarDecoration: i,
                  className: V.avatarDecoration,
                  "aria-label": o,
                })
              ),
            )
            .with(f.Z.BUNDLE, () =>
              (0, r.jsx)("div", {
                className: V.bundlePreview,
                children: (0, r.jsx)(B.d, {
                  product: e,
                  user: a,
                  isPurchased: !1,
                  isHighlighted: !0,
                  profileEffectClassName: V.bundleProfileEffectCard,
                }),
              }),
            )
            .otherwise(() => null);
        },
        X = (t) => {
          let { product: e, item: n, reducedMotion: i, displayOptions: o } = t,
            [s, l] = a.useState(!1),
            c = (0, g.useSpring)({
              from: { transform: "translateX(100%)", right: "-100%" },
              to: { transform: "translateX(50%)", right: "50%" },
              config: { duration: 1550 },
              onRest: () => setTimeout(() => l(!0), 100),
            }),
            u = (0, g.useSpring)({
              from: { transform: "translateX(100%)", right: "-100%" },
              to: { transform: "translateX(50%)", right: "50%" },
              config: { duration: 1550 },
              reverse: s,
            }),
            f = (0, g.useSpring)(
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
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(d.animated.div, {
                className: V.easterEggContainer,
                style: c,
                children: (0, r.jsx)(G, { product: e, item: n }),
              }),
              (0, r.jsx)(d.animated.div, {
                className: V.easterEggContainer,
                style: i ? f : u,
                children: (0, r.jsx)("img", {
                  src: o.imageSrc,
                  style: o.style,
                  alt: "",
                  "aria-hidden": "true",
                }),
              }),
            ],
          });
        },
        W = (t) => {
          let { product: e, item: n, reducedMotion: a = !1 } = t,
            i = (0, H.v)(e.categorySkuId);
          return null != i
            ? (0, r.jsx)(X, {
                product: e,
                item: n,
                reducedMotion: a,
                displayOptions: i,
              })
            : (0, r.jsx)(G, { product: e, item: n });
        },
        Q = (t) => {
          var e, n;
          let {
              product: i,
              onClose: s,
              confettiTarget: l,
              confettiCanvas: d,
              hideConfetti: C = !1,
              analyticsLocations: E,
              title: A,
              description: O,
              selectedVariantIndex: I,
              shouldShowPromotionalExperience: B,
            } = t,
            H = (0, F.W)(i, I),
            { confettiColors: Y } = (0, _.Z)(H.styles),
            G = (0, p.e7)([h.Z], () => h.Z.useReducedMotion),
            X = (0, N.m)("CollectiblesCollectedModal"),
            Q = (0, w.ed)("CollectiblesCollectedModal"),
            K = (0, k.k)(H),
            q = (0, S.Z)(),
            J =
              null == q
                ? void 0
                : null === (e = q.giftPurchaseConfirmation) || void 0 === e
                  ? void 0
                  : e.rewardCollectedText(),
            [$] = H.items,
            tt = a.useRef(null),
            { analyticsLocations: te } = (0, m.ZP)([
              ...E,
              b.Z.COLLECTIBLES_COLLECTED_MODAL,
            ]),
            tn = (0, T.Z)({ analyticsLocations: te }),
            tr = a.useCallback(() => {
              if ((s(), (0, v.xf)(), tn(), H.type === f.Z.AVATAR_DECORATION)) {
                c()(
                  $.type === f.Z.AVATAR_DECORATION,
                  "product type and item type are the same",
                ),
                  (0, x.ps)({
                    initialSelectedDecoration: $,
                    analyticsLocations: te,
                  });
                return;
              }
              H.type === f.Z.PROFILE_EFFECT &&
                (0, y.H)({
                  initialSelectedEffectId: $.id,
                  analyticsLocations: te,
                });
            }, [s, tn, H.type, $, te]),
            { handleUseNow: ta, isApplying: ti } = (0, M.W)({
              product: H,
              onSuccess: s,
              onError: s,
            }),
            { firstAvatarDecoration: to, firstProfileEffect: ts } = (0, j.R)(H),
            tl = (0, R.x6)(H)
              ? null != to && null != ts
              : null != to || null != ts,
            tc = (0, R.x6)(H) || X,
            { category: td, isFetching: tu } = (0, Z.l)(H.skuId),
            tf =
              null !== (n = null == td ? void 0 : td.successModalBg) &&
              void 0 !== n
                ? n
                : H.banner;
          return (0, r.jsxs)(m.Gt, {
            value: te,
            children: [
              (0, r.jsxs)("div", {
                className: V.modalInner,
                ref: tt,
                children: [
                  (0, r.jsxs)("div", {
                    className: V.bannerContainer,
                    children: [
                      B
                        ? (0, r.jsx)("div", { className: V.seasonalBanner })
                        : (0, r.jsx)(P.Z, {
                            asset: tu ? void 0 : tf,
                            size: (0, D.ML)(880),
                            className: V.decorationBanner,
                            categoryBannerOverride: (0, U.ZS)(H.categorySkuId),
                          }),
                      (0, r.jsx)(W, { product: H, item: $, reducedMotion: G }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: V.collectedInfoContainer,
                    children: [
                      (0, r.jsxs)("div", {
                        className: V.collectedTextContainer,
                        children: [
                          (0, r.jsx)(g.Heading, {
                            variant: "heading-lg/bold",
                            children:
                              null != A
                                ? A
                                : Q
                                  ? z.intl.string(z.t["1xr2SU"])
                                  : z.intl.format(z.t.YNaxMj, { itemName: K }),
                          }),
                          (0, r.jsx)(g.Text, {
                            variant: "text-sm/normal",
                            children:
                              null != O
                                ? O
                                : (0, u.EQ)(null == H ? void 0 : H.type)
                                    .with(f.Z.BUNDLE, () =>
                                      z.intl.string(z.t.zJPoLy),
                                    )
                                    .with(f.Z.PROFILE_EFFECT, () =>
                                      z.intl.string(z.t.f9M1YG),
                                    )
                                    .otherwise(() =>
                                      B && null != J
                                        ? J
                                        : z.intl.string(z.t["44b50t"]),
                                    ),
                          }),
                        ],
                      }),
                      tc
                        ? (0, r.jsxs)("div", {
                            className: V.buttons,
                            children: [
                              (0, r.jsx)(g.Button, {
                                color: tl
                                  ? g.ButtonColors.PRIMARY
                                  : g.ButtonColors.BRAND,
                                onClick: tr,
                                children: z.intl.string(z.t["2p2aY2"]),
                              }),
                              tl
                                ? (0, r.jsx)(g.Button, {
                                    onClick: ta,
                                    submitting: ti,
                                    children: z.intl.string(z.t.MAS7uL),
                                  })
                                : null,
                            ],
                          })
                        : (0, r.jsx)(g.Button, {
                            className: o()({ [V.seaonalButtonGradient]: B }),
                            onClick: tr,
                            children: z.intl.string(z.t.MAS7uL),
                          }),
                    ],
                  }),
                  (0, r.jsx)(g.ModalCloseButton, {
                    onClick: s,
                    className: V.modalCloseButton,
                    withCircleBackground: !0,
                  }),
                ],
              }),
              !C &&
                !G &&
                (0, r.jsx)(L.Z, {
                  confettiTarget: null != l ? l : tt.current,
                  confettiCanvas: d,
                  sprites: (0, D.vK)(H.categorySkuId),
                  colors: null == Y ? void 0 : Y.map((t) => t.toHexString()),
                }),
            ],
          });
        };
      e.default = (t) => {
        let {
            transitionState: e,
            product: n,
            onClose: i,
            analyticsLocations: o,
            title: l,
            description: c,
            shouldShowPromotionalExperience: d,
          } = t,
          u = (0, p.e7)([O.Z], () => O.Z.purchases),
          f = (0, I.o)(n, u),
          v = (0, F.W)(n, f),
          h = a.useRef(new s.qA()),
          [b, m] = a.useState(null),
          x = (0, H.UY)(v.skuId);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.O_, {
              ref: m,
              className: V.confettiCanvas,
              environment: h.current,
            }),
            (0, r.jsxs)(g.ModalRoot, {
              hideShadow: !0,
              transitionState: e,
              size: g.ModalSize.DYNAMIC,
              className: V.modalRoot,
              children: [
                null != x &&
                  (0, r.jsx)("img", {
                    src: x.imageSrc,
                    className: V.customConfetti,
                    style: x.style,
                    alt: "",
                    "aria-hidden": "true",
                  }),
                (0, r.jsx)(g.ModalContent, {
                  className: V.modalContent,
                  children: (0, r.jsx)(Q, {
                    product: v,
                    onClose: i,
                    confettiCanvas: b,
                    hideConfetti: null != x,
                    analyticsLocations: o,
                    title: l,
                    description: c,
                    selectedVariantIndex: f,
                    shouldShowPromotionalExperience: d,
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    372654: function (t, e, n) {
      n.d(e, {
        ML: function () {
          return o;
        },
        nH: function () {
          return s;
        },
        vK: function () {
          return d;
        },
        yV: function () {
          return i;
        },
      });
      var r = n(180650),
        a = n(921948);
      let i = 1060,
        o = (t) => t * (0, a.Z)(),
        s = function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 180,
            { primary: n, secondary: r } = t;
          return "linear-gradient("
            .concat(e, "deg, ")
            .concat(n.toHslString(), ", ")
            .concat(r.toHslString(), ")");
        },
        l = [n(241371), n(448509)],
        c = {
          ["".concat(r.T.FANTASY)]: [n(709393), n(646584)],
          ["".concat(r.T.ANIME)]: [n(647387), n(448509)],
          ["".concat(r.T.BREAKFAST)]: [n(289901), n(402344)],
          ["".concat(r.T.FALL)]: [n(432170), n(15888)],
          ["".concat(r.T.WINTER)]: [n(304088), n(774694)],
          ["".concat(r.T.MONSTERS)]: [n(857578), n(441506)],
        },
        d = (t) => {
          var e;
          return null == t ? l : null !== (e = c[t]) && void 0 !== e ? e : l;
        };
    },
    616066: function (t, e, n) {
      n.d(e, {
        R: function () {
          return g;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        o = n(979554),
        s = n(481060),
        l = n(1585),
        c = n(125988),
        d = n(998502),
        u = n(388032),
        f = n(638079);
      let p = d.ZP.getEnableHardwareAcceleration()
          ? s.AnimatedAvatar
          : s.Avatar,
        g = (t) => {
          let {
              item: e,
              user: n,
              isHighlighted: a = !1,
              isPurchased: d = !1,
              avatarSize: g = s.AvatarSizes.SIZE_152,
              avatarPlaceholderSrc: v,
            } = t,
            h = (0, l.y9)(g),
            {
              avatarDecorationSrc: b,
              eventHandlers: m,
              avatarPlaceholderSrc: x,
            } = (0, c.Z)({
              user: n,
              avatarDecorationOverride:
                (null == e ? void 0 : e.type) === o.Z.AVATAR_DECORATION
                  ? e
                  : void 0,
              size: h,
              onlyAnimateOnHover: !a,
            });
          return (0, r.jsx)(p, {
            ...m,
            avatarDecoration: b,
            src: a
              ? null == n
                ? void 0
                : n.getAvatarURL(void 0, 152, !0)
              : null != v
                ? v
                : x,
            imageClassName: a ? f.fadeInAvatarImg : void 0,
            className: i()(f.avatar, { [f.avatarPurchased]: d && !a }),
            size: g,
            "aria-label": u.intl.string(u.t.lqaIxM),
          });
        };
    },
    216541: function (t, e, n) {
      n.d(e, {
        d: function () {
          return v;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        o = n(780384),
        s = n(481060),
        l = n(410030),
        c = n(876917),
        d = n(328456),
        u = n(616066),
        f = n(379252),
        p = n(63243),
        g = n(244488);
      let v = (t) => {
        let {
            product: e,
            isPurchased: n,
            isHighlighted: a,
            user: v,
            forCollectedModal: h,
            profileEffectClassName: b,
          } = t,
          { firstProfileEffect: m, firstAvatarDecoration: x } = (0, d.R)(e),
          C = (0, l.ZP)(),
          S = (0, o.ap)(C);
        return (0, r.jsxs)("div", {
          className: f.container,
          children: [
            null != m
              ? (0, r.jsx)("div", {
                  className: i()(f.profileEffectShopPreview, b),
                  children: (0, r.jsx)(c.Z, {
                    isHovering: a,
                    profileEffectId: m.id,
                    isPurchased: n,
                    forCollectedModal: h,
                    removeSetHeight: !0,
                  }),
                })
              : null,
            null != x
              ? (0, r.jsx)("div", {
                  className: f.avatarDecorationPreview,
                  children: (0, r.jsx)(u.R, {
                    item: x,
                    user: v,
                    avatarSize: s.AvatarSizes.SIZE_120,
                    isPurchased: n,
                    isHighlighted: a,
                    avatarPlaceholderSrc: S ? g : p,
                  }),
                })
              : null,
          ],
        });
      };
    },
    58201: function (t, e, n) {
      n.d(e, {
        W: function () {
          return i;
        },
      });
      var r = n(979554),
        a = n(597688);
      let i = (t, e) => {
        var n, i, o;
        return t.type === r.Z.VARIANTS_GROUP &&
          null != e &&
          null !==
            (o = a.Z.getProduct(
              null === (i = t.variants) || void 0 === i
                ? void 0
                : null === (n = i[e]) || void 0 === n
                  ? void 0
                  : n.skuId,
            )) &&
          void 0 !== o
          ? o
          : t;
      };
    },
    876917: function (t, e, n) {
      n(47120);
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        o = n.n(i),
        s = n(802433),
        l = n(680295),
        c = n(537616),
        d = n(241822);
      e.Z = (t) => {
        let {
            profileEffectId: e,
            isHovering: n,
            forCollectedModal: i = !1,
            isPurchased: u,
            removeSetHeight: f = !1,
          } = t,
          p = i ? 250 : 0.1,
          [g, v] = a.useState(!0);
        return (a.useEffect(() => {
          if (!0 !== i) v(!1);
          else {
            let t = setTimeout(() => {
              v(!1);
            }, p);
            return () => {
              clearTimeout(t);
            };
          }
        }, [p, i]),
        null != e)
          ? (0, r.jsxs)("div", {
              className: o()(c.previewContainer, {
                [c.previewContainerAnimation]: i,
                [c.previewContainerSetHeight]: !f,
              }),
              children: [
                (0, r.jsx)("img", {
                  src: d,
                  alt: " ",
                  className: i ? c.previewForCollected : c.preview,
                  "aria-hidden": !0,
                }),
                !g &&
                  (0, r.jsx)("div", {
                    className: u ? c.purchasedEffect : void 0,
                    children: (0, r.jsx)(l.Z, {
                      profileEffectId: e,
                      useThumbnail: !0,
                      autoPlay: i,
                      restartMethod: s.j.FromStart,
                      resetOnHover: !0,
                      isHovering: n,
                      introDelay: p,
                      useOpacityOnHover: !1,
                      shopPreview: !0,
                    }),
                  }),
              ],
            })
          : null;
      };
    },
    642619: function (t, e, n) {
      n.d(e, {
        H: function () {
          return i;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(481060);
      let i = (t) => {
        let { analyticsLocations: e, initialSelectedEffectId: i, guild: o } = t;
        (0, a.openModalLazy)(async () => {
          let { default: t } = await n.e("55183").then(n.bind(n, 191564));
          return (n) =>
            (0, r.jsx)(t, {
              ...n,
              guild: o,
              initialSelectedEffectId: i,
              analyticsLocations: e,
            });
        }, {});
      };
    },
    452823: function (t, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/060c53a66797d6553200b73930246646e051a218278baaab488c6f68131e48a6.png";
    },
    744709: function (t, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/2703bc2130d4f7dac25f48d500e205e57e974fa4128116d805dc94a7d9455dce.png";
    },
    39934: function (t, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/69a3e8179a8eb5068d6b88b77259a8617ba14ee86a066d3e62e0e4a6e6de0622.png";
    },
    681532: function (t, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/4a12163e4b9957791bc381b3f688405064e69148eebd94ba8b94452b6c932172.png";
    },
    12981: function (t, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/8100f5eb716cf12721dbc6b58297f60ad0e89a253e0056d3ff2195ddffd1ab7b.png";
    },
  },
]);
//# sourceMappingURL=3b258cb45a677bb6c7ce.js.map
