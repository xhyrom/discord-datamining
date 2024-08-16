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
    799718: function (e) {
      e.exports = "/assets/eaba1e8b5a274a8e7b6d.png";
    },
    241371: function (e) {
      e.exports = "/assets/c2da3e35e8af9401dbea.png";
    },
    292006: function (e) {
      e.exports = "/assets/6cfa9a628fa2ff658fc0.png";
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
    764707: function (e, t, n) {
      n(47120);
      var a = n(979590),
        r = n.n(a),
        s = n(399606),
        o = n(607070),
        l = n(168631);
      let i = (e, t) => {
          let n = e.toRgb(),
            a = t.toRgb(),
            [s, o, i] = (0, l.J2)([n.r, n.g, n.b], [a.r, a.g, a.b], 50);
          return r()({ r: s, g: o, b: i });
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
                  border: i(t[0], t[1]).setAlpha(0.4),
                  label: i(t[0], t[1]).isLight() ? e.dark : e.light,
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
                  text: i(t[0], t[1]).isLight() ? e.dark : e.light,
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
    266386: function (e, t, n) {
      n.d(t, {
        c: function () {
          return r;
        },
      });
      let a = (0, n(818083).B)({
          kind: "user",
          id: "2024-05_collectibles_hover_preview",
          label: "Collectibles Hover Preview Experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Collectibles card with avatar deco hover preview",
              config: { enabled: !0 },
            },
          ],
        }),
        r = (e) => a.useExperiment({ location: e }).enabled;
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
        l = n(884697),
        i = n(328456),
        c = n(689938);
      let d = (e) => {
        let { product: t, onSuccess: d, onError: u } = e,
          [f, g] = a.useState(!1),
          { firstAvatarDecoration: p, firstProfileEffect: C } = (0, i.R)(t),
          v = (0, l.x6)(t)
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
                null != C)
              ) {
                let e = { profile_effect_id: C.id };
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
                r(), s(a(v, t.MESSAGE, { duration: 6e3, position: e.TOP }));
              }
              null == d || d();
            } catch (e) {
              null == u || u(e);
            } finally {
              g(!1);
            }
          }, [p, C, d, v, u]),
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
      let l = r()(
          s.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex(),
        ),
        i = r()(
          s.Z.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex(),
        ),
        c = (0, o.Z)({ dark: i, light: l });
      t.Z = c;
    },
    141011: function (e, t, n) {
      var a = n(735250),
        r = n(470079),
        s = n(120356),
        o = n.n(s),
        l = n(399606),
        i = n(376345),
        c = n(607070),
        d = n(302221),
        u = n(884697),
        f = n(372654),
        g = n(924579);
      t.Z = (e) => {
        let {
            asset: t,
            size: n = f.yV,
            className: s,
            style: p,
            children: C,
            categoryBannerOverride: v,
          } = e,
          m = (0, l.e7)([c.Z], () => c.Z.saturation),
          E = r.useMemo(() => {
            if (null == t) return p;
            let e = (0, u.uV)(t, { size: n, format: "jpg" }),
              a = (null == v ? void 0 : v.blur)
                ? { filter: "blur(2px)", transform: "scale(1.02)" }
                : {};
            if (1 === m)
              return {
                ...p,
                backgroundImage: (null == v ? void 0 : v.addGradient)
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
            let r = (0, d.aD)(i.ZP.unsafe_rawColors.BLACK_500, 1 - m);
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
            m,
            p,
            null == v ? void 0 : v.blur,
            null == v ? void 0 : v.addGradient,
          ]);
        return (0, a.jsx)("div", {
          className: o()(g.banner, s),
          style: E,
          children: C,
        });
      };
    },
    331042: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CollectiblesCollectedModalInner: function () {
            return U;
          },
        }),
        n(47120),
        n(627341);
      var a = n(735250),
        r = n(470079),
        s = n(887024),
        o = n(512722),
        l = n.n(o),
        i = n(338545),
        c = n(278074),
        d = n(979554),
        u = n(399606),
        f = n(481060),
        g = n(37234),
        p = n(607070),
        C = n(100527),
        v = n(906732),
        m = n(1585),
        E = n(125988),
        h = n(300284),
        b = n(876917),
        y = n(642619),
        T = n(594174),
        A = n(884697),
        x = n(890249),
        I = n(318028),
        L = n(635552),
        _ = n(328456),
        N = n(624377),
        S = n(530618),
        O = n(141011),
        Z = n(372654),
        R = n(216541),
        j = n(302800),
        M = n(215023),
        k = n(689938),
        w = n(621e3),
        B = n(660097);
      let P = (e) => {
          let { product: t, item: n } = e,
            r = (0, u.e7)([T.default], () => {
              let e = T.default.getCurrentUser();
              return l()(null != e, "User cannot be undefined"), e;
            }),
            { avatarDecorationSrc: s } = (0, E.Z)({
              user: r,
              avatarDecorationOverride:
                (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION
                  ? n
                  : null,
              size: (0, m.y9)(f.AvatarSizes.SIZE_120),
            });
          return (0, c.EQ)(t.type)
            .with(d.Z.PROFILE_EFFECT, () =>
              (0, a.jsx)("div", {
                className: w.profileEffectShopPreview,
                children: (0, a.jsx)(b.Z, {
                  forCollectedModal: !0,
                  profileEffectId: n.id,
                }),
              }),
            )
            .with(
              d.Z.AVATAR_DECORATION,
              () => (
                l()(
                  n.type === d.Z.AVATAR_DECORATION,
                  "ts-match already checked the type",
                ),
                (0, a.jsx)(f.Avatar, {
                  size: f.AvatarSizes.SIZE_120,
                  src: B,
                  avatarDecoration: s,
                  className: w.avatarDecoration,
                  "aria-label": t.name,
                })
              ),
            )
            .with(d.Z.BUNDLE, () =>
              (0, a.jsx)("div", {
                className: w.bundlePreview,
                children: (0, a.jsx)(R.d, {
                  product: t,
                  user: r,
                  isPurchased: !1,
                  isHighlighted: !0,
                  profileEffectClassName: w.bundleProfileEffectCard,
                }),
              }),
            )
            .otherwise(() => null);
        },
        D = (e) => {
          let { product: t, item: n, reducedMotion: s, displayOptions: o } = e,
            [l, c] = r.useState(!1),
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
              reverse: l,
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
              (0, a.jsx)(i.animated.div, {
                className: w.easterEggContainer,
                style: d,
                children: (0, a.jsx)(P, { product: t, item: n }),
              }),
              (0, a.jsx)(i.animated.div, {
                className: w.easterEggContainer,
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
            s = (0, j.v)(t.categorySkuId);
          return null != s
            ? (0, a.jsx)(D, {
                product: t,
                item: n,
                reducedMotion: r,
                displayOptions: s,
              })
            : (0, a.jsx)(P, { product: t, item: n });
        },
        U = (e) => {
          var t;
          let {
              product: n,
              onClose: s,
              confettiTarget: o,
              confettiCanvas: i,
              hideConfetti: E = !1,
              analyticsLocations: b,
            } = e,
            { confettiColors: T } = (0, N.Z)(n.styles),
            R = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            j = (0, x.m)("CollectiblesCollectedModal"),
            [B] = n.items,
            P = r.useRef(null),
            { analyticsLocations: D } = (0, v.ZP)([
              ...b,
              C.Z.COLLECTIBLES_COLLECTED_MODAL,
            ]),
            U = (0, h.Z)({ analyticsLocations: D }),
            H = r.useCallback(() => {
              if ((s(), (0, g.xf)(), U(), n.type === d.Z.AVATAR_DECORATION)) {
                l()(
                  B.type === d.Z.AVATAR_DECORATION,
                  "product type and item type are the same",
                ),
                  (0, m.ps)({
                    initialSelectedDecoration: B,
                    analyticsLocations: D,
                  });
                return;
              }
              n.type === d.Z.PROFILE_EFFECT &&
                (0, y.H)({
                  initialSelectedEffectId: B.id,
                  analyticsLocations: D,
                });
            }, [s, U, n.type, B, D]),
            { handleUseNow: z, isApplying: V } = (0, L.W)({
              product: n,
              onSuccess: s,
              onError: s,
            }),
            { firstAvatarDecoration: W, firstProfileEffect: X } = (0, _.R)(n),
            G = (0, A.x6)(n) ? null != W && null != X : null != W || null != X,
            K = (0, A.x6)(n) || j,
            { category: Y, isFetching: Q } = (0, I.l)(n.skuId),
            q =
              null !== (t = null == Y ? void 0 : Y.successModalBg) &&
              void 0 !== t
                ? t
                : n.banner;
          return (0, a.jsxs)(v.Gt, {
            value: D,
            children: [
              (0, a.jsxs)("div", {
                className: w.modalInner,
                ref: P,
                children: [
                  (0, a.jsxs)("div", {
                    className: w.bannerContainer,
                    children: [
                      (0, a.jsx)(O.Z, {
                        asset: Q ? void 0 : q,
                        size: (0, Z.ML)(880),
                        className: w.decorationBanner,
                        categoryBannerOverride: (0, M.ZS)(n.categorySkuId),
                      }),
                      (0, a.jsx)(F, { product: n, item: B, reducedMotion: R }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: w.collectedInfoContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: w.collectedTextContainer,
                        children: [
                          (0, a.jsx)(f.Heading, {
                            variant: "heading-lg/bold",
                            children:
                              k.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                itemName: n.name,
                              }),
                          }),
                          (0, a.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            children: (0, c.EQ)(null == n ? void 0 : n.type)
                              .with(
                                d.Z.BUNDLE,
                                () =>
                                  k.Z.Messages
                                    .COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE,
                              )
                              .with(
                                d.Z.PROFILE_EFFECT,
                                () =>
                                  k.Z.Messages
                                    .COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION,
                              )
                              .otherwise(
                                () =>
                                  k.Z.Messages
                                    .COLLECTIBLES_PERMANENT_COLLECTION,
                              ),
                          }),
                        ],
                      }),
                      K
                        ? (0, a.jsxs)("div", {
                            className: w.buttons,
                            children: [
                              (0, a.jsx)(f.Button, {
                                color: G
                                  ? f.ButtonColors.PRIMARY
                                  : f.ButtonColors.BRAND,
                                onClick: H,
                                children:
                                  k.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                              }),
                              G
                                ? (0, a.jsx)(f.Button, {
                                    onClick: z,
                                    submitting: V,
                                    children: k.Z.Messages.COLLECTIBLES_USE_NOW,
                                  })
                                : null,
                            ],
                          })
                        : (0, a.jsx)(f.Button, {
                            onClick: H,
                            children: k.Z.Messages.COLLECTIBLES_USE_NOW,
                          }),
                    ],
                  }),
                  (0, a.jsx)(f.ModalCloseButton, {
                    onClick: s,
                    className: w.modalCloseButton,
                    withCircleBackground: !0,
                  }),
                ],
              }),
              !E &&
                !R &&
                (0, a.jsx)(S.Z, {
                  confettiTarget: null != o ? o : P.current,
                  confettiCanvas: i,
                  sprites: (0, Z.vK)(n.categorySkuId),
                  colors: null == T ? void 0 : T.map((e) => e.toHexString()),
                }),
            ],
          });
        };
      t.default = (e) => {
        let {
            transitionState: t,
            product: n,
            onClose: o,
            analyticsLocations: l,
          } = e,
          i = r.useRef(new s.qA()),
          [c, d] = r.useState(null),
          u = (0, j.UY)(n.skuId);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.O_, {
              ref: d,
              className: w.confettiCanvas,
              environment: i.current,
            }),
            (0, a.jsxs)(f.ModalRoot, {
              hideShadow: !0,
              transitionState: t,
              size: f.ModalSize.DYNAMIC,
              className: w.modalRoot,
              children: [
                null != u &&
                  (0, a.jsx)("img", {
                    src: u.imageSrc,
                    className: w.customConfetti,
                    style: u.style,
                    alt: "",
                    "aria-hidden": "true",
                  }),
                (0, a.jsx)(f.ModalContent, {
                  className: w.modalContent,
                  children: (0, a.jsx)(U, {
                    product: n,
                    onClose: o,
                    confettiCanvas: c,
                    hideConfetti: null != u,
                    analyticsLocations: l,
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
          return l;
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
        l = function (e) {
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
        i = [n(241371), n(448509)],
        c = {
          ["".concat(a.T.FANTASY)]: [n(709393), n(646584)],
          ["".concat(a.T.ANIME)]: [n(647387), n(448509)],
          ["".concat(a.T.BREAKFAST)]: [n(289901), n(402344)],
          ["".concat(a.T.HALLOWEEN)]: [n(292006), n(799718)],
          ["".concat(a.T.FALL)]: [n(432170), n(15888)],
          ["".concat(a.T.WINTER)]: [n(304088), n(774694)],
          ["".concat(a.T.MONSTERS)]: [n(16724), n(441506)],
        },
        d = (e) => {
          var t;
          return null == e ? i : null !== (t = c[e]) && void 0 !== t ? t : i;
        };
    },
    616066: function (e, t, n) {
      n.d(t, {
        R: function () {
          return C;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(120356),
        s = n.n(r),
        o = n(979554),
        l = n(481060),
        i = n(1585),
        c = n(125988),
        d = n(998502),
        u = n(266386),
        f = n(689938),
        g = n(777381);
      let p = d.ZP.getEnableHardwareAcceleration()
          ? l.AnimatedAvatar
          : l.Avatar,
        C = (e) => {
          let {
              item: t,
              user: n,
              isHighlighted: r = !1,
              isPurchased: d = !1,
              avatarSize: C = l.AvatarSizes.SIZE_152,
              avatarPlaceholderSrc: v,
            } = e,
            m = (0, i.y9)(C),
            E = (0, u.c)("AvatarDecorationPreview"),
            {
              avatarDecorationSrc: h,
              eventHandlers: b,
              avatarPlaceholderSrc: y,
            } = (0, c.Z)({
              user: n,
              avatarDecorationOverride:
                (null == t ? void 0 : t.type) === o.Z.AVATAR_DECORATION
                  ? t
                  : void 0,
              size: m,
              onlyAnimateOnHover: !r,
            });
          return (0, a.jsx)(p, {
            ...b,
            avatarDecoration: h,
            src:
              E && r
                ? null == n
                  ? void 0
                  : n.getAvatarURL(void 0, 152, !0)
                : null != v
                  ? v
                  : y,
            imageClassName: E && r ? g.fadeInAvatarImg : void 0,
            className: s()(g.avatar, { [g.avatarPurchased]: d }),
            size: C,
            "aria-label": f.Z.Messages.USER_SETTINGS_AVATAR,
          });
        };
    },
    216541: function (e, t, n) {
      n.d(t, {
        d: function () {
          return C;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(120356),
        s = n.n(r),
        o = n(780384),
        l = n(481060),
        i = n(410030),
        c = n(876917),
        d = n(328456),
        u = n(616066),
        f = n(801242),
        g = n(63243),
        p = n(244488);
      let C = (e) => {
        let {
            product: t,
            isPurchased: n,
            isHighlighted: r,
            user: C,
            forCollectedModal: v,
            profileEffectClassName: m,
          } = e,
          { firstProfileEffect: E, firstAvatarDecoration: h } = (0, d.R)(t),
          b = (0, i.ZP)(),
          y = (0, o.ap)(b);
        return (0, a.jsxs)("div", {
          className: f.container,
          children: [
            null != E
              ? (0, a.jsx)("div", {
                  className: s()(f.profileEffectShopPreview, m),
                  children: (0, a.jsx)(c.Z, {
                    isHovering: r,
                    profileEffectId: E.id,
                    isPurchased: n,
                    forCollectedModal: v,
                    removeSetHeight: !0,
                  }),
                })
              : null,
            null != h
              ? (0, a.jsx)("div", {
                  className: f.avatarDecorationPreview,
                  children: (0, a.jsx)(u.R, {
                    item: h,
                    user: C,
                    avatarSize: l.AvatarSizes.SIZE_120,
                    isPurchased: n,
                    isHighlighted: r,
                    avatarPlaceholderSrc: y ? p : g,
                  }),
                })
              : null,
          ],
        });
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
  },
]);
//# sourceMappingURL=c50ba70a7ab756e01fc2.js.map
