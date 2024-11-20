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
          return x;
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
        i,
        a = n(278074),
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
      ((i = r || (r = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.TOOLTIP = 1)] = "TOOLTIP"),
        (i[(i.COACHTIP = 2)] = "COACHTIP"),
        (i[(i.COACHTIP_HEADLINE_ONLY = 3)] = "COACHTIP_HEADLINE_ONLY"),
        (i[(i.BADGE = 4)] = "BADGE");
      let h = (t) =>
          (0, a.EQ)(t)
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
          (0, a.EQ)(t)
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
          (0, a.EQ)(t)
            .with("1262491137386614805", () => b.ROBERT)
            .otherwise(() => null),
        x = {
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
          return i;
        },
      });
      var r,
        i,
        a = n(818083);
      ((r = i || (i = {}))[(r.DEFAULT = 0)] = "DEFAULT"),
        (r[(r.WINTER_2023_DROP = 1)] = "WINTER_2023_DROP"),
        (r[(r.MONSTER_DROP = 2)] = "MONSTER_DROP"),
        (r[(r.SPRINGTOONS = 4)] = "SPRINGTOONS"),
        (r[(r.SHY = 5)] = "SHY"),
        (r[(r.GALAXY = 6)] = "GALAXY"),
        (r[(r.TIDE = 7)] = "TIDE"),
        (r[(r.ROBERT = 8)] = "ROBERT"),
        (r[(r.STORM = 9)] = "STORM"),
        (r[(r.EQUINOX_FALL = 10)] = "EQUINOX_FALL");
      let s = (0, a.B)({
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
          return c;
        },
        B2: function () {
          return u;
        },
        ff: function () {
          return g;
        },
        i6: function () {
          return d;
        },
        o0: function () {
          return l;
        },
        tg: function () {
          return f;
        },
      }),
        n(47120);
      var r = n(976649),
        i = n(454e3),
        a = n(979554);
      let s = (0, i.F)(() => ({ selectionStates: new Map() }), r.X),
        o = () => ({
          selectedVariantIndex: 0,
          previewingVariantIndex: null,
          isHoveringOnSwitch: !1,
        }),
        l = (t) => {
          var e, n;
          let r = s();
          return t.type !== a.Z.VARIANTS_GROUP
            ? 0
            : (null == r.selectionStates.get(t.storeListingId) &&
                s.setState((e) => ({
                  selectionStates: new Map(e.selectionStates).set(
                    t.storeListingId,
                    o(),
                  ),
                })),
              null !==
                (n =
                  null === (e = r.selectionStates.get(t.storeListingId)) ||
                  void 0 === e
                    ? void 0
                    : e.selectedVariantIndex) && void 0 !== n
                ? n
                : 0);
        },
        c = (t, e) => {
          s.setState((n) => {
            var r;
            let i =
              null !== (r = n.selectionStates.get(t.storeListingId)) &&
              void 0 !== r
                ? r
                : o();
            return {
              selectionStates: new Map(n.selectionStates).set(
                t.storeListingId,
                { ...i, selectedVariantIndex: e },
              ),
            };
          });
        },
        d = (t) => {
          var e, n;
          let r = s();
          return (
            t.type === a.Z.VARIANTS_GROUP &&
            (null == r.selectionStates.get(t.storeListingId) &&
              s.setState((e) => ({
                selectionStates: new Map(e.selectionStates).set(
                  t.storeListingId,
                  o(),
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
        u = (t, e) => {
          s.setState((n) => {
            var r;
            let i =
              null !== (r = n.selectionStates.get(t.storeListingId)) &&
              void 0 !== r
                ? r
                : o();
            return {
              selectionStates: new Map(n.selectionStates).set(
                t.storeListingId,
                {
                  ...i,
                  isHoveringOnSwitch: e,
                  previewingVariantIndex: e ? i.selectedVariantIndex : null,
                },
              ),
            };
          });
        },
        f = (t, e) => {
          s.setState((n) => {
            var r;
            let i =
              null !== (r = n.selectionStates.get(t.storeListingId)) &&
              void 0 !== r
                ? r
                : o();
            return {
              selectionStates: new Map(n.selectionStates).set(
                t.storeListingId,
                { ...i, previewingVariantIndex: e },
              ),
            };
          });
        },
        g = (t) => {
          var e, n;
          let r = s();
          return (null == t ? void 0 : t.type) !== a.Z.VARIANTS_GROUP
            ? null
            : null !==
                  (n =
                    null === (e = r.selectionStates.get(t.storeListingId)) ||
                    void 0 === e
                      ? void 0
                      : e.previewingVariantIndex) && void 0 !== n
              ? n
              : null;
        };
    },
    764707: function (t, e, n) {
      n(47120);
      var r = n(979590),
        i = n.n(r),
        a = n(399606),
        s = n(607070),
        o = n(168631);
      let l = (t, e) => {
          let n = t.toRgb(),
            r = e.toRgb(),
            [a, s, l] = (0, o.J2)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
          return i()({ r: a, g: s, b: l });
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
          let { h: n, s: r, l: a } = t.toHsl();
          return i()({ h: n, s: r * e, l: a });
        };
      e.Z = (t) => (e) => {
        let n = (0, a.e7)([s.Z], () => s.Z.saturation);
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
          return i;
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
        i = (t) => r.useExperiment({ location: t }).realtimeUseNowEnabled;
    },
    318028: function (t, e, n) {
      n.d(e, {
        l: function () {
          return s;
        },
      }),
        n(47120);
      var r = n(399606),
        i = n(597688),
        a = n(267097);
      function s(t) {
        (0, a.Z)();
        let [e, n] = (0, r.Wu)([i.Z], () => [
          i.Z.isFetchingCategories,
          i.Z.getCategoryForProduct(t),
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
        i = n(979554),
        a = n(809206),
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
            : e.type === i.Z.AVATAR_DECORATION
              ? c.intl.string(c.t.zOA4a2)
              : c.intl.string(c.t.SWm2am);
        return {
          handleUseNow: r.useCallback(async () => {
            g(!0);
            try {
              if (
                (null != p && (await (0, a.Mn)({ avatarDecoration: p })),
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
                  popToast: i,
                  showToast: a,
                } = await Promise.resolve().then(n.bind(n, 481060));
                i(), a(r(h, e.MESSAGE, { duration: 6e3, position: t.TOP }));
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
          return a;
        },
      }),
        n(724458),
        n(653041),
        n(47120);
      var r = n(192379),
        i = n(979554);
      class a {
        get firstAvatarDecoration() {
          return this.getFirstItemByType(i.Z.AVATAR_DECORATION);
        }
        get firstProfileEffect() {
          return this.getFirstItemByType(i.Z.PROFILE_EFFECT);
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
          () => new a(t.items),
          [t],
        );
        return { firstProfileEffect: e, firstAvatarDecoration: n };
      };
    },
    624377: function (t, e, n) {
      var r = n(979590),
        i = n.n(r),
        a = n(692547),
        s = n(764707);
      let o = i()(
          a.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex(),
        ),
        l = i()(
          a.Z.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex(),
        ),
        c = (0, s.Z)({ dark: l, light: o });
      e.Z = c;
    },
    141011: function (t, e, n) {
      var r = n(200651),
        i = n(192379),
        a = n(120356),
        s = n.n(a),
        o = n(399606),
        l = n(376345),
        c = n(607070),
        d = n(302221),
        u = n(884697),
        f = n(372654),
        g = n(689380);
      e.Z = (t) => {
        let {
            asset: e,
            size: n = f.yV,
            className: a,
            style: p,
            children: v,
            categoryBannerOverride: h,
          } = t,
          b = (0, o.e7)([c.Z], () => c.Z.saturation),
          m = i.useMemo(() => {
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
            let i = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - b);
            return {
              ...p,
              backgroundImage: "linear-gradient("
                .concat(i, ", ")
                .concat(i, "), url(")
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
          className: s()(g.banner, a),
          style: m,
          children: v,
        });
      };
    },
    331042: function (t, e, n) {
      n.r(e),
        n.d(e, {
          CollectiblesCollectedModalInner: function () {
            return Y;
          },
        }),
        n(47120),
        n(627341);
      var r = n(200651),
        i = n(192379),
        a = n(703533),
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
        x = n(876917),
        C = n(642619),
        T = n(594174),
        y = n(429368),
        E = n(884697),
        I = n(890249),
        A = n(228624),
        O = n(318028),
        R = n(635552),
        w = n(905357),
        N = n(328456),
        Z = n(624377),
        L = n(530618),
        M = n(141011),
        _ = n(372654),
        k = n(216541),
        j = n(58201),
        P = n(302800),
        D = n(215023),
        B = n(388032),
        H = n(783600),
        F = n(660097);
      let V = (t) => {
          let { product: e, item: n } = t,
            i = (0, u.e7)([T.default], () => {
              let t = T.default.getCurrentUser();
              return o()(null != t, "User cannot be undefined"), t;
            }),
            { avatarDecorationSrc: a } = (0, m.Z)({
              user: i,
              avatarDecorationOverride:
                (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION
                  ? n
                  : null,
              size: (0, b.y9)(f.AvatarSizes.SIZE_120),
            }),
            s = (0, w.k)(e);
          return (0, c.EQ)(e.type)
            .with(d.Z.PROFILE_EFFECT, () =>
              (0, r.jsx)("div", {
                className: H.profileEffectShopPreview,
                children: (0, r.jsx)(x.Z, {
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
                  src: F,
                  avatarDecoration: a,
                  className: H.avatarDecoration,
                  "aria-label": s,
                })
              ),
            )
            .with(d.Z.BUNDLE, () =>
              (0, r.jsx)("div", {
                className: H.bundlePreview,
                children: (0, r.jsx)(k.d, {
                  product: e,
                  user: i,
                  isPurchased: !1,
                  isHighlighted: !0,
                  profileEffectClassName: H.bundleProfileEffectCard,
                }),
              }),
            )
            .otherwise(() => null);
        },
        U = (t) => {
          let { product: e, item: n, reducedMotion: a, displayOptions: s } = t,
            [o, c] = i.useState(!1),
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
                className: H.easterEggContainer,
                style: d,
                children: (0, r.jsx)(V, { product: e, item: n }),
              }),
              (0, r.jsx)(l.animated.div, {
                className: H.easterEggContainer,
                style: a ? g : u,
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
          let { product: e, item: n, reducedMotion: i = !1 } = t,
            a = (0, P.v)(e.categorySkuId);
          return null != a
            ? (0, r.jsx)(U, {
                product: e,
                item: n,
                reducedMotion: i,
                displayOptions: a,
              })
            : (0, r.jsx)(V, { product: e, item: n });
        },
        Y = (t) => {
          var e;
          let {
              product: n,
              onClose: a,
              confettiTarget: s,
              confettiCanvas: l,
              hideConfetti: m = !1,
              analyticsLocations: x,
              title: T,
              description: k,
            } = t,
            P = (0, y.o0)(n),
            F = (0, j.W)(n, P),
            { confettiColors: V } = (0, Z.Z)(F.styles),
            U = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            Y = (0, I.m)("CollectiblesCollectedModal"),
            G = (0, A.ed)("CollectiblesCollectedModal"),
            X = (0, w.k)(F),
            [W] = F.items,
            Q = i.useRef(null),
            { analyticsLocations: K } = (0, h.ZP)([
              ...x,
              v.Z.COLLECTIBLES_COLLECTED_MODAL,
            ]),
            q = (0, S.Z)({ analyticsLocations: K }),
            J = i.useCallback(() => {
              if ((a(), (0, g.xf)(), q(), F.type === d.Z.AVATAR_DECORATION)) {
                o()(
                  W.type === d.Z.AVATAR_DECORATION,
                  "product type and item type are the same",
                ),
                  (0, b.ps)({
                    initialSelectedDecoration: W,
                    analyticsLocations: K,
                  });
                return;
              }
              F.type === d.Z.PROFILE_EFFECT &&
                (0, C.H)({
                  initialSelectedEffectId: W.id,
                  analyticsLocations: K,
                });
            }, [a, q, F.type, W, K]),
            { handleUseNow: $, isApplying: tt } = (0, R.W)({
              product: F,
              onSuccess: a,
              onError: a,
            }),
            { firstAvatarDecoration: te, firstProfileEffect: tn } = (0, N.R)(F),
            tr = (0, E.x6)(F)
              ? null != te && null != tn
              : null != te || null != tn,
            ti = (0, E.x6)(F) || Y,
            { category: ta, isFetching: ts } = (0, O.l)(F.skuId),
            to =
              null !== (e = null == ta ? void 0 : ta.successModalBg) &&
              void 0 !== e
                ? e
                : F.banner;
          return (0, r.jsxs)(h.Gt, {
            value: K,
            children: [
              (0, r.jsxs)("div", {
                className: H.modalInner,
                ref: Q,
                children: [
                  (0, r.jsxs)("div", {
                    className: H.bannerContainer,
                    children: [
                      (0, r.jsx)(M.Z, {
                        asset: ts ? void 0 : to,
                        size: (0, _.ML)(880),
                        className: H.decorationBanner,
                        categoryBannerOverride: (0, D.ZS)(F.categorySkuId),
                      }),
                      (0, r.jsx)(z, { product: F, item: W, reducedMotion: U }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: H.collectedInfoContainer,
                    children: [
                      (0, r.jsxs)("div", {
                        className: H.collectedTextContainer,
                        children: [
                          (0, r.jsx)(f.Heading, {
                            variant: "heading-lg/bold",
                            children:
                              null != T
                                ? T
                                : G
                                  ? B.intl.string(B.t["1xr2SU"])
                                  : B.intl.format(B.t.YNaxMj, { itemName: X }),
                          }),
                          (0, r.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            children:
                              null != k
                                ? k
                                : (0, c.EQ)(null == F ? void 0 : F.type)
                                    .with(d.Z.BUNDLE, () =>
                                      B.intl.string(B.t.zJPoLy),
                                    )
                                    .with(d.Z.PROFILE_EFFECT, () =>
                                      B.intl.string(B.t.f9M1YG),
                                    )
                                    .otherwise(() =>
                                      B.intl.string(B.t["44b50t"]),
                                    ),
                          }),
                        ],
                      }),
                      ti
                        ? (0, r.jsxs)("div", {
                            className: H.buttons,
                            children: [
                              (0, r.jsx)(f.Button, {
                                color: tr
                                  ? f.ButtonColors.PRIMARY
                                  : f.ButtonColors.BRAND,
                                onClick: J,
                                children: B.intl.string(B.t["2p2aY2"]),
                              }),
                              tr
                                ? (0, r.jsx)(f.Button, {
                                    onClick: $,
                                    submitting: tt,
                                    children: B.intl.string(B.t.MAS7uL),
                                  })
                                : null,
                            ],
                          })
                        : (0, r.jsx)(f.Button, {
                            onClick: J,
                            children: B.intl.string(B.t.MAS7uL),
                          }),
                    ],
                  }),
                  (0, r.jsx)(f.ModalCloseButton, {
                    onClick: a,
                    className: H.modalCloseButton,
                    withCircleBackground: !0,
                  }),
                ],
              }),
              !m &&
                !U &&
                (0, r.jsx)(L.Z, {
                  confettiTarget: null != s ? s : Q.current,
                  confettiCanvas: l,
                  sprites: (0, _.vK)(F.categorySkuId),
                  colors: null == V ? void 0 : V.map((t) => t.toHexString()),
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
          d = (0, y.o0)(n),
          u = (0, j.W)(n, d),
          g = i.useRef(new a.qA()),
          [p, v] = i.useState(null),
          h = (0, P.UY)(u.skuId);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(a.O_, {
              ref: v,
              className: H.confettiCanvas,
              environment: g.current,
            }),
            (0, r.jsxs)(f.ModalRoot, {
              hideShadow: !0,
              transitionState: e,
              size: f.ModalSize.DYNAMIC,
              className: H.modalRoot,
              children: [
                null != h &&
                  (0, r.jsx)("img", {
                    src: h.imageSrc,
                    className: H.customConfetti,
                    style: h.style,
                    alt: "",
                    "aria-hidden": "true",
                  }),
                (0, r.jsx)(f.ModalContent, {
                  className: H.modalContent,
                  children: (0, r.jsx)(Y, {
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
          return a;
        },
      });
      var r = n(180650),
        i = n(921948);
      let a = 1060,
        s = (t) => t * (0, i.Z)(),
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
      var i = n(120356),
        a = n.n(i),
        s = n(979554),
        o = n(481060),
        l = n(1585),
        c = n(125988),
        d = n(998502),
        u = n(388032),
        f = n(446563);
      let g = d.ZP.getEnableHardwareAcceleration()
          ? o.AnimatedAvatar
          : o.Avatar,
        p = (t) => {
          let {
              item: e,
              user: n,
              isHighlighted: i = !1,
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
              onlyAnimateOnHover: !i,
            });
          return (0, r.jsx)(g, {
            ...m,
            avatarDecoration: b,
            src: i
              ? null == n
                ? void 0
                : n.getAvatarURL(void 0, 152, !0)
              : null != v
                ? v
                : S,
            imageClassName: i ? f.fadeInAvatarImg : void 0,
            className: a()(f.avatar, { [f.avatarPurchased]: d }),
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
      var i = n(120356),
        a = n.n(i),
        s = n(780384),
        o = n(481060),
        l = n(410030),
        c = n(876917),
        d = n(328456),
        u = n(616066),
        f = n(746443),
        g = n(63243),
        p = n(244488);
      let v = (t) => {
        let {
            product: e,
            isPurchased: n,
            isHighlighted: i,
            user: v,
            forCollectedModal: h,
            profileEffectClassName: b,
          } = t,
          { firstProfileEffect: m, firstAvatarDecoration: S } = (0, d.R)(e),
          x = (0, l.ZP)(),
          C = (0, s.ap)(x);
        return (0, r.jsxs)("div", {
          className: f.container,
          children: [
            null != m
              ? (0, r.jsx)("div", {
                  className: a()(f.profileEffectShopPreview, b),
                  children: (0, r.jsx)(c.Z, {
                    isHovering: i,
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
                    isHighlighted: i,
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
          return i;
        },
      });
      var r = n(979554);
      let i = (t, e) => {
        var n, i;
        return t.type === r.Z.VARIANTS_GROUP &&
          null != e &&
          null !==
            (i = null === (n = t.variants) || void 0 === n ? void 0 : n[e]) &&
          void 0 !== i
          ? i
          : t;
      };
    },
    876917: function (t, e, n) {
      n(47120);
      var r = n(200651),
        i = n(192379),
        a = n(120356),
        s = n.n(a),
        o = n(802433),
        l = n(680295),
        c = n(296140),
        d = n(241822);
      e.Z = (t) => {
        let {
            profileEffectId: e,
            isHovering: n,
            forCollectedModal: a = !1,
            isPurchased: u,
            removeSetHeight: f = !1,
          } = t,
          g = a ? 250 : 0.1,
          [p, v] = i.useState(!0);
        return (i.useEffect(() => {
          if (!0 !== a) v(!1);
          else {
            let t = setTimeout(() => {
              v(!1);
            }, g);
            return () => {
              clearTimeout(t);
            };
          }
        }, [g, a]),
        null != e)
          ? (0, r.jsxs)("div", {
              className: s()(c.previewContainer, {
                [c.previewContainerAnimation]: a,
                [c.previewContainerSetHeight]: !f,
              }),
              children: [
                (0, r.jsx)("img", {
                  src: d,
                  alt: " ",
                  className: a ? c.previewForCollected : c.preview,
                  "aria-hidden": !0,
                }),
                !p &&
                  (0, r.jsx)("div", {
                    className: u ? c.purchasedEffect : void 0,
                    children: (0, r.jsx)(l.Z, {
                      profileEffectId: e,
                      useThumbnail: !0,
                      autoPlay: a,
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
          return a;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060);
      let a = (t) => {
        let { analyticsLocations: e, initialSelectedEffectId: a, guild: s } = t;
        (0, i.openModalLazy)(async () => {
          let { default: t } = await n.e("55183").then(n.bind(n, 191564));
          return (n) =>
            (0, r.jsx)(t, {
              ...n,
              guild: s,
              initialSelectedEffectId: a,
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
//# sourceMappingURL=b5c13862ec4b933da940.js.map
