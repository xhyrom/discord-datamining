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
          return T;
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
          return S;
        },
      }),
        n(627341),
        n(192379);
      var r,
        a,
        i = n(278074),
        s = n(691324),
        o = n(180650),
        l = n(44315),
        c = n(410154),
        d = n(388032),
        u = n(452823),
        f = n(744709),
        g = n(39934),
        p = n(681532),
        v = n(12981);
      ((a = r || (r = {}))[(a.NONE = 0)] = "NONE"),
        (a[(a.TOOLTIP = 1)] = "TOOLTIP"),
        (a[(a.COACHTIP = 2)] = "COACHTIP"),
        (a[(a.COACHTIP_HEADLINE_ONLY = 3)] = "COACHTIP_HEADLINE_ONLY"),
        (a[(a.BADGE = 4)] = "BADGE");
      let h = (t) =>
          (0, i.EQ)(t)
            .with(o.T.TIDE, () => ({
              label: () => d.intl.string(d.t.kDb9hY),
              iconSrc: v.Z,
              style: {
                background:
                  "linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)",
                boxShadow: "0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)",
                color: (0, l.Lq)(s.I.WHITE_100),
              },
            }))
            .otherwise(() => null),
        b = {
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
        S = (t) =>
          (0, i.EQ)(t)
            .with("1262491137386614805", () => b.ROBERT)
            .otherwise(() => null),
        T = {
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
      let s = (0, i.B)({
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
      e.ZP = (t) => s.useExperiment({ location: t }).variant;
    },
    429368: function (t, e, n) {
      n.d(e, {
        $O: function () {
          return l;
        },
        B2: function () {
          return d;
        },
        i6: function () {
          return c;
        },
        o0: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(905837),
        a = n(979554);
      let i = (0, r.Ue)(() => ({ selectionStates: new Map() })),
        s = () => ({ selectedVariant: 0, isHoveringOnSwitch: !1 }),
        o = (t) => {
          var e, n;
          let r = i();
          return t.type !== a.Z.VARIANTS_GROUP
            ? 0
            : (null == r.selectionStates.get(t.storeListingId) &&
                i.setState((e) => ({
                  selectionStates: new Map(e.selectionStates).set(
                    t.storeListingId,
                    s(),
                  ),
                })),
              null !==
                (n =
                  null === (e = r.selectionStates.get(t.storeListingId)) ||
                  void 0 === e
                    ? void 0
                    : e.selectedVariant) && void 0 !== n
                ? n
                : 0);
        },
        l = (t, e) => {
          i.setState((n) => {
            var r;
            let a =
              null !== (r = n.selectionStates.get(t.storeListingId)) &&
              void 0 !== r
                ? r
                : s();
            return {
              selectionStates: new Map(n.selectionStates).set(
                t.storeListingId,
                { ...a, selectedVariant: e },
              ),
            };
          });
        },
        c = (t) => {
          var e, n;
          let r = i();
          return (
            t.type === a.Z.VARIANTS_GROUP &&
            (null == r.selectionStates.get(t.storeListingId) &&
              i.setState((e) => ({
                selectionStates: new Map(e.selectionStates).set(
                  t.storeListingId,
                  s(),
                ),
              })),
            null !==
              (n =
                null === (e = r.selectionStates.get(t.storeListingId)) ||
                void 0 === e
                  ? void 0
                  : e.isHoveringOnSwitch) &&
              void 0 !== n &&
              n)
          );
        },
        d = (t, e) => {
          i.setState((n) => {
            var r;
            let a =
              null !== (r = n.selectionStates.get(t.storeListingId)) &&
              void 0 !== r
                ? r
                : s();
            return {
              selectionStates: new Map(n.selectionStates).set(
                t.storeListingId,
                { ...a, isHoveringOnSwitch: e },
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
        s = n(607070),
        o = n(168631);
      let l = (t, e) => {
          let n = t.toRgb(),
            r = e.toRgb(),
            [i, s, l] = (0, o.J2)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
          return a()({ r: i, g: s, b: l });
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
        let n = (0, i.e7)([s.Z], () => s.Z.saturation);
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
          return s;
        },
      }),
        n(47120);
      var r = n(399606),
        a = n(597688),
        i = n(267097);
      function s(t) {
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
        s = n(350327),
        o = n(884697),
        l = n(328456),
        c = n(388032);
      let d = (t) => {
        let { product: e, onSuccess: d, onError: u } = t,
          [f, g] = r.useState(!1),
          { firstAvatarDecoration: p, firstProfileEffect: v } = (0, l.R)(e),
          h = (0, o.x6)(e)
            ? c.intl.string(c.t.tf1ZZ2)
            : e.type === a.Z.AVATAR_DECORATION
              ? c.intl.string(c.t.zOA4a2)
              : c.intl.string(c.t.SWm2am);
        return {
          handleUseNow: r.useCallback(async () => {
            g(!0);
            try {
              if (
                (null != p && (await (0, i.Mn)({ avatarDecoration: p })),
                null != v)
              ) {
                let t = { profile_effect_id: v.id };
                await (0, s.Z)(t);
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
              g(!1);
            }
          }, [p, v, d, h, u]),
          isApplying: f,
        };
      };
    },
    328456: function (t, e, n) {
      n.d(e, {
        R: function () {
          return s;
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
      let s = (t) => {
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
        s = n(764707);
      let o = a()(
          i.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex(),
        ),
        l = a()(
          i.Z.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex(),
        ),
        c = (0, s.Z)({ dark: l, light: o });
      e.Z = c;
    },
    141011: function (t, e, n) {
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        s = n.n(i),
        o = n(399606),
        l = n(376345),
        c = n(607070),
        d = n(302221),
        u = n(884697),
        f = n(372654),
        g = n(450957);
      e.Z = (t) => {
        let {
            asset: e,
            size: n = f.yV,
            className: i,
            style: p,
            children: v,
            categoryBannerOverride: h,
          } = t,
          b = (0, o.e7)([c.Z], () => c.Z.saturation),
          m = a.useMemo(() => {
            if (null == e) return p;
            let t = (0, u.uV)(e, { size: n, format: "jpg" }),
              r = (null == h ? void 0 : h.blur)
                ? { filter: "blur(2px)", transform: "scale(1.02)" }
                : {};
            if (1 === b)
              return {
                ...p,
                backgroundImage: (null == h ? void 0 : h.addGradient)
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
            let a = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - b);
            return {
              ...p,
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
            b,
            p,
            null == h ? void 0 : h.blur,
            null == h ? void 0 : h.addGradient,
          ]);
        return (0, r.jsx)("div", {
          className: s()(g.banner, i),
          style: m,
          children: v,
        });
      };
    },
    331042: function (t, e, n) {
      n.r(e),
        n.d(e, {
          CollectiblesCollectedModalInner: function () {
            return V;
          },
        }),
        n(47120),
        n(627341);
      var r = n(200651),
        a = n(192379),
        i = n(703533),
        s = n(512722),
        o = n.n(s),
        l = n(100621),
        c = n(278074),
        d = n(979554),
        u = n(399606),
        f = n(481060),
        g = n(37234),
        p = n(607070),
        v = n(100527),
        h = n(906732),
        b = n(1585),
        m = n(125988),
        S = n(300284),
        T = n(876917),
        C = n(642619),
        x = n(594174),
        E = n(429368),
        y = n(884697),
        A = n(890249),
        O = n(318028),
        I = n(635552),
        R = n(905357),
        w = n(328456),
        N = n(624377),
        Z = n(530618),
        L = n(141011),
        M = n(372654),
        _ = n(216541),
        k = n(58201),
        j = n(302800),
        P = n(215023),
        D = n(388032),
        B = n(322776),
        H = n(660097);
      let F = (t) => {
          let { product: e, item: n } = t,
            a = (0, u.e7)([x.default], () => {
              let t = x.default.getCurrentUser();
              return o()(null != t, "User cannot be undefined"), t;
            }),
            { avatarDecorationSrc: i } = (0, m.Z)({
              user: a,
              avatarDecorationOverride:
                (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION
                  ? n
                  : null,
              size: (0, b.y9)(f.AvatarSizes.SIZE_120),
            }),
            s = (0, R.k)(e);
          return (0, c.EQ)(e.type)
            .with(d.Z.PROFILE_EFFECT, () =>
              (0, r.jsx)("div", {
                className: B.profileEffectShopPreview,
                children: (0, r.jsx)(T.Z, {
                  forCollectedModal: !0,
                  profileEffectId: n.id,
                }),
              }),
            )
            .with(
              d.Z.AVATAR_DECORATION,
              () => (
                o()(
                  n.type === d.Z.AVATAR_DECORATION,
                  "ts-match already checked the type",
                ),
                (0, r.jsx)(f.Avatar, {
                  size: f.AvatarSizes.SIZE_120,
                  src: H,
                  avatarDecoration: i,
                  className: B.avatarDecoration,
                  "aria-label": s,
                })
              ),
            )
            .with(d.Z.BUNDLE, () =>
              (0, r.jsx)("div", {
                className: B.bundlePreview,
                children: (0, r.jsx)(_.d, {
                  product: e,
                  user: a,
                  isPurchased: !1,
                  isHighlighted: !0,
                  profileEffectClassName: B.bundleProfileEffectCard,
                }),
              }),
            )
            .otherwise(() => null);
        },
        U = (t) => {
          let { product: e, item: n, reducedMotion: i, displayOptions: s } = t,
            [o, c] = a.useState(!1),
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
              reverse: o,
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
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(l.animated.div, {
                className: B.easterEggContainer,
                style: d,
                children: (0, r.jsx)(F, { product: e, item: n }),
              }),
              (0, r.jsx)(l.animated.div, {
                className: B.easterEggContainer,
                style: i ? g : u,
                children: (0, r.jsx)("img", {
                  src: s.imageSrc,
                  style: s.style,
                  alt: "",
                  "aria-hidden": "true",
                }),
              }),
            ],
          });
        },
        z = (t) => {
          let { product: e, item: n, reducedMotion: a = !1 } = t,
            i = (0, j.v)(e.categorySkuId);
          return null != i
            ? (0, r.jsx)(U, {
                product: e,
                item: n,
                reducedMotion: a,
                displayOptions: i,
              })
            : (0, r.jsx)(F, { product: e, item: n });
        },
        V = (t) => {
          var e;
          let {
              product: n,
              onClose: i,
              confettiTarget: s,
              confettiCanvas: l,
              hideConfetti: m = !1,
              analyticsLocations: T,
              title: x,
              description: _,
            } = t,
            j = (0, E.o0)(n),
            H = (0, k.W)(n, j),
            { confettiColors: F } = (0, N.Z)(H.styles),
            U = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            V = (0, A.m)("CollectiblesCollectedModal"),
            Y = (0, R.k)(H),
            [G] = H.items,
            W = a.useRef(null),
            { analyticsLocations: X } = (0, h.ZP)([
              ...T,
              v.Z.COLLECTIBLES_COLLECTED_MODAL,
            ]),
            Q = (0, S.Z)({ analyticsLocations: X }),
            K = a.useCallback(() => {
              if ((i(), (0, g.xf)(), Q(), H.type === d.Z.AVATAR_DECORATION)) {
                o()(
                  G.type === d.Z.AVATAR_DECORATION,
                  "product type and item type are the same",
                ),
                  (0, b.ps)({
                    initialSelectedDecoration: G,
                    analyticsLocations: X,
                  });
                return;
              }
              H.type === d.Z.PROFILE_EFFECT &&
                (0, C.H)({
                  initialSelectedEffectId: G.id,
                  analyticsLocations: X,
                });
            }, [i, Q, H.type, G, X]),
            { handleUseNow: q, isApplying: J } = (0, I.W)({
              product: H,
              onSuccess: i,
              onError: i,
            }),
            { firstAvatarDecoration: $, firstProfileEffect: tt } = (0, w.R)(H),
            te = (0, y.x6)(H)
              ? null != $ && null != tt
              : null != $ || null != tt,
            tn = (0, y.x6)(H) || V,
            { category: tr, isFetching: ta } = (0, O.l)(H.skuId),
            ti =
              null !== (e = null == tr ? void 0 : tr.successModalBg) &&
              void 0 !== e
                ? e
                : H.banner;
          return (0, r.jsxs)(h.Gt, {
            value: X,
            children: [
              (0, r.jsxs)("div", {
                className: B.modalInner,
                ref: W,
                children: [
                  (0, r.jsxs)("div", {
                    className: B.bannerContainer,
                    children: [
                      (0, r.jsx)(L.Z, {
                        asset: ta ? void 0 : ti,
                        size: (0, M.ML)(880),
                        className: B.decorationBanner,
                        categoryBannerOverride: (0, P.ZS)(H.categorySkuId),
                      }),
                      (0, r.jsx)(z, { product: H, item: G, reducedMotion: U }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: B.collectedInfoContainer,
                    children: [
                      (0, r.jsxs)("div", {
                        className: B.collectedTextContainer,
                        children: [
                          (0, r.jsx)(f.Heading, {
                            variant: "heading-lg/bold",
                            children:
                              null != x
                                ? x
                                : D.intl.format(D.t.YNaxMj, { itemName: Y }),
                          }),
                          (0, r.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            children:
                              null != _
                                ? _
                                : (0, c.EQ)(null == H ? void 0 : H.type)
                                    .with(d.Z.BUNDLE, () =>
                                      D.intl.string(D.t.zJPoLy),
                                    )
                                    .with(d.Z.PROFILE_EFFECT, () =>
                                      D.intl.string(D.t.f9M1YG),
                                    )
                                    .otherwise(() =>
                                      D.intl.string(D.t["44b50t"]),
                                    ),
                          }),
                        ],
                      }),
                      tn
                        ? (0, r.jsxs)("div", {
                            className: B.buttons,
                            children: [
                              (0, r.jsx)(f.Button, {
                                color: te
                                  ? f.ButtonColors.PRIMARY
                                  : f.ButtonColors.BRAND,
                                onClick: K,
                                children: D.intl.string(D.t["2p2aY2"]),
                              }),
                              te
                                ? (0, r.jsx)(f.Button, {
                                    onClick: q,
                                    submitting: J,
                                    children: D.intl.string(D.t.MAS7uL),
                                  })
                                : null,
                            ],
                          })
                        : (0, r.jsx)(f.Button, {
                            onClick: K,
                            children: D.intl.string(D.t.MAS7uL),
                          }),
                    ],
                  }),
                  (0, r.jsx)(f.ModalCloseButton, {
                    onClick: i,
                    className: B.modalCloseButton,
                    withCircleBackground: !0,
                  }),
                ],
              }),
              !m &&
                !U &&
                (0, r.jsx)(Z.Z, {
                  confettiTarget: null != s ? s : W.current,
                  confettiCanvas: l,
                  sprites: (0, M.vK)(H.categorySkuId),
                  colors: null == F ? void 0 : F.map((t) => t.toHexString()),
                }),
            ],
          });
        };
      e.default = (t) => {
        let {
            transitionState: e,
            product: n,
            onClose: s,
            analyticsLocations: o,
            title: l,
            description: c,
          } = t,
          d = (0, E.o0)(n),
          u = (0, k.W)(n, d),
          g = a.useRef(new i.qA()),
          [p, v] = a.useState(null),
          h = (0, j.UY)(u.skuId);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.O_, {
              ref: v,
              className: B.confettiCanvas,
              environment: g.current,
            }),
            (0, r.jsxs)(f.ModalRoot, {
              hideShadow: !0,
              transitionState: e,
              size: f.ModalSize.DYNAMIC,
              className: B.modalRoot,
              children: [
                null != h &&
                  (0, r.jsx)("img", {
                    src: h.imageSrc,
                    className: B.customConfetti,
                    style: h.style,
                    alt: "",
                    "aria-hidden": "true",
                  }),
                (0, r.jsx)(f.ModalContent, {
                  className: B.modalContent,
                  children: (0, r.jsx)(V, {
                    product: u,
                    onClose: s,
                    confettiCanvas: p,
                    hideConfetti: null != h,
                    analyticsLocations: o,
                    title: l,
                    description: c,
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
          return s;
        },
        nH: function () {
          return o;
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
        s = (t) => t * (0, a.Z)(),
        o = function (t) {
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
          return p;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        s = n(979554),
        o = n(481060),
        l = n(1585),
        c = n(125988),
        d = n(998502),
        u = n(388032),
        f = n(835106);
      let g = d.ZP.getEnableHardwareAcceleration()
          ? o.AnimatedAvatar
          : o.Avatar,
        p = (t) => {
          let {
              item: e,
              user: n,
              isHighlighted: a = !1,
              isPurchased: d = !1,
              avatarSize: p = o.AvatarSizes.SIZE_152,
              avatarPlaceholderSrc: v,
            } = t,
            h = (0, l.y9)(p),
            {
              avatarDecorationSrc: b,
              eventHandlers: m,
              avatarPlaceholderSrc: S,
            } = (0, c.Z)({
              user: n,
              avatarDecorationOverride:
                (null == e ? void 0 : e.type) === s.Z.AVATAR_DECORATION
                  ? e
                  : void 0,
              size: h,
              onlyAnimateOnHover: !a,
            });
          return (0, r.jsx)(g, {
            ...m,
            avatarDecoration: b,
            src: a
              ? null == n
                ? void 0
                : n.getAvatarURL(void 0, 152, !0)
              : null != v
                ? v
                : S,
            imageClassName: a ? f.fadeInAvatarImg : void 0,
            className: i()(f.avatar, { [f.avatarPurchased]: d }),
            size: p,
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
        s = n(780384),
        o = n(481060),
        l = n(410030),
        c = n(876917),
        d = n(328456),
        u = n(616066),
        f = n(890311),
        g = n(63243),
        p = n(244488);
      let v = (t) => {
        let {
            product: e,
            isPurchased: n,
            isHighlighted: a,
            user: v,
            forCollectedModal: h,
            profileEffectClassName: b,
          } = t,
          { firstProfileEffect: m, firstAvatarDecoration: S } = (0, d.R)(e),
          T = (0, l.ZP)(),
          C = (0, s.ap)(T);
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
            null != S
              ? (0, r.jsx)("div", {
                  className: f.avatarDecorationPreview,
                  children: (0, r.jsx)(u.R, {
                    item: S,
                    user: v,
                    avatarSize: o.AvatarSizes.SIZE_120,
                    isPurchased: n,
                    isHighlighted: a,
                    avatarPlaceholderSrc: C ? p : g,
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
          return s;
        },
      });
      var r = n(512722),
        a = n.n(r),
        i = n(979554);
      let s = (t, e) => {
        var n;
        let r =
          t.type === i.Z.VARIANTS_GROUP && null != e
            ? null === (n = t.variants) || void 0 === n
              ? void 0
              : n[e]
            : t;
        return a()(null != r, "Selected product should not be null"), r;
      };
    },
    876917: function (t, e, n) {
      n(47120);
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        s = n.n(i),
        o = n(802433),
        l = n(680295),
        c = n(957776),
        d = n(241822);
      e.Z = (t) => {
        let {
            profileEffectId: e,
            isHovering: n,
            forCollectedModal: i = !1,
            isPurchased: u,
            removeSetHeight: f = !1,
          } = t,
          g = i ? 250 : 0.1,
          [p, v] = a.useState(!0);
        return (a.useEffect(() => {
          if (!0 !== i) v(!1);
          else {
            let t = setTimeout(() => {
              v(!1);
            }, g);
            return () => {
              clearTimeout(t);
            };
          }
        }, [g, i]),
        null != e)
          ? (0, r.jsxs)("div", {
              className: s()(c.previewContainer, {
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
                !p &&
                  (0, r.jsx)("div", {
                    className: u ? c.purchasedEffect : void 0,
                    children: (0, r.jsx)(l.Z, {
                      profileEffectId: e,
                      useThumbnail: !0,
                      autoPlay: i,
                      restartMethod: o.j.FromStart,
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
        let { analyticsLocations: e, initialSelectedEffectId: i, guild: s } = t;
        (0, a.openModalLazy)(async () => {
          let { default: t } = await n.e("55183").then(n.bind(n, 191564));
          return (n) =>
            (0, r.jsx)(t, {
              ...n,
              guild: s,
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
//# sourceMappingURL=3a25711968878373ccd5.js.map
