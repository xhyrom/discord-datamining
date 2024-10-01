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
    764707: function (e, t, r) {
      r(47120);
      var n = r(979590),
        a = r.n(n),
        s = r(399606),
        o = r(607070),
        i = r(168631);
      let l = (e, t) => {
          let r = e.toRgb(),
            n = t.toRgb(),
            [s, o, l] = (0, i.J2)([r.r, r.g, r.b], [n.r, n.g, n.b], 50);
          return a()({ r: s, g: o, b: l });
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
          let { h: r, s: n, l: s } = e.toHsl();
          return a()({ h: r, s: n * t, l: s });
        };
      t.Z = (e) => (t) => {
        let r = (0, s.e7)([o.Z], () => o.Z.saturation);
        if (null == t) return {};
        let n = {
          backgroundColors: c(e, t.backgroundColors),
          buttonColors: d(e, t.buttonColors),
          confettiColors: t.confettiColors,
        };
        return 1 === r
          ? { ...n }
          : {
              backgroundColors:
                null != n.backgroundColors
                  ? {
                      primary: u(n.backgroundColors.primary, r),
                      secondary: u(n.backgroundColors.secondary, r),
                      border: u(n.backgroundColors.border, r),
                      label: u(n.backgroundColors.label, r),
                    }
                  : void 0,
              buttonColors:
                null != n.buttonColors
                  ? {
                      primary: u(n.buttonColors.primary, r),
                      secondary: u(n.buttonColors.secondary, r),
                      text: u(n.buttonColors.text, r),
                    }
                  : void 0,
              confettiColors: n.confettiColors.map((e) => u(e, r)),
            };
      };
    },
    890249: function (e, t, r) {
      r.d(t, {
        m: function () {
          return a;
        },
      });
      let n = (0, r(818083).B)({
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
        a = (e) => n.useExperiment({ location: e }).realtimeUseNowEnabled;
    },
    318028: function (e, t, r) {
      r.d(t, {
        l: function () {
          return o;
        },
      }),
        r(47120);
      var n = r(399606),
        a = r(597688),
        s = r(267097);
      function o(e) {
        (0, s.Z)();
        let [t, r] = (0, n.Wu)([a.Z], () => [
          a.Z.isFetchingCategories,
          a.Z.getCategoryForProduct(e),
        ]);
        return { isFetching: t, category: r };
      }
    },
    635552: function (e, t, r) {
      r.d(t, {
        W: function () {
          return d;
        },
      }),
        r(47120);
      var n = r(470079),
        a = r(979554),
        s = r(809206),
        o = r(350327),
        i = r(884697),
        l = r(328456),
        c = r(689938);
      let d = (e) => {
        let { product: t, onSuccess: d, onError: u } = e,
          [f, g] = n.useState(!1),
          { firstAvatarDecoration: p, firstProfileEffect: v } = (0, l.R)(t),
          C = (0, i.x6)(t)
            ? c.Z.Messages.COLLECTIBLES_PROFILE_UPDATE_NOTIFICATION
            : t.type === a.Z.AVATAR_DECORATION
              ? c.Z.Messages.COLLECTIBLES_AVATAR_DECO_UPDATED_NOTIFICATION
              : c.Z.Messages.COLLECTIBLES_PFX_UPDATED_NOTIFICATION;
        return {
          handleUseNow: n.useCallback(async () => {
            g(!0);
            try {
              if (
                (null != p && (await (0, s.Mn)({ avatarDecoration: p })),
                null != v)
              ) {
                let e = { profile_effect_id: v.id };
                await (0, o.Z)(e);
              }
              {
                let {
                  ToastPosition: e,
                  ToastType: t,
                  createToast: n,
                  popToast: a,
                  showToast: s,
                } = await Promise.resolve().then(r.bind(r, 481060));
                a(), s(n(C, t.MESSAGE, { duration: 6e3, position: e.TOP }));
              }
              null == d || d();
            } catch (e) {
              null == u || u(e);
            } finally {
              g(!1);
            }
          }, [p, v, d, C, u]),
          isApplying: f,
        };
      };
    },
    328456: function (e, t, r) {
      r.d(t, {
        R: function () {
          return o;
        },
        b: function () {
          return s;
        },
      }),
        r(724458),
        r(653041),
        r(47120);
      var n = r(470079),
        a = r(979554);
      class s {
        get firstAvatarDecoration() {
          return this.getFirstItemByType(a.Z.AVATAR_DECORATION);
        }
        get firstProfileEffect() {
          return this.getFirstItemByType(a.Z.PROFILE_EFFECT);
        }
        getFirstItemByType(e) {
          var t;
          let r = (
            null !== (t = this.itemsByTypes.get(e)) && void 0 !== t ? t : []
          )[0];
          if (null != r) return r;
        }
        sortByTypes(e) {
          return e.reduce((e, t) => {
            let r = e.get(t.type);
            return null != r ? r.push(t) : e.set(t.type, [t]), e;
          }, new Map());
        }
        constructor(e) {
          var t, r, n;
          (t = this),
            (n = void 0),
            (r = "itemsByTypes") in t
              ? Object.defineProperty(t, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[r] = n),
            (this.itemsByTypes = this.sortByTypes(e));
        }
      }
      let o = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: r } = n.useMemo(
          () => new s(e.items),
          [e],
        );
        return { firstProfileEffect: t, firstAvatarDecoration: r };
      };
    },
    624377: function (e, t, r) {
      var n = r(979590),
        a = r.n(n),
        s = r(692547),
        o = r(764707);
      let i = a()(
          s.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex(),
        ),
        l = a()(
          s.Z.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex(),
        ),
        c = (0, o.Z)({ dark: l, light: i });
      t.Z = c;
    },
    141011: function (e, t, r) {
      var n = r(735250),
        a = r(470079),
        s = r(120356),
        o = r.n(s),
        i = r(399606),
        l = r(376345),
        c = r(607070),
        d = r(302221),
        u = r(884697),
        f = r(372654),
        g = r(689380);
      t.Z = (e) => {
        let {
            asset: t,
            size: r = f.yV,
            className: s,
            style: p,
            children: v,
            categoryBannerOverride: C,
          } = e,
          m = (0, i.e7)([c.Z], () => c.Z.saturation),
          E = a.useMemo(() => {
            if (null == t) return p;
            let e = (0, u.uV)(t, { size: r, format: "jpg" }),
              n = (null == C ? void 0 : C.blur)
                ? { filter: "blur(2px)", transform: "scale(1.02)" }
                : {};
            if (1 === m)
              return {
                ...p,
                backgroundImage: (null == C ? void 0 : C.addGradient)
                  ? "url(".concat(
                      e,
                      "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)",
                    )
                  : "url(".concat(e, ")"),
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
                ...n,
              };
            let a = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - m);
            return {
              ...p,
              backgroundImage: "linear-gradient("
                .concat(a, ", ")
                .concat(a, "), url(")
                .concat(e, ")"),
              backgroundBlendMode: "saturation",
              backgroundSize: "cover",
              backgroundPosition: "center",
              ...n,
            };
          }, [
            t,
            r,
            m,
            p,
            null == C ? void 0 : C.blur,
            null == C ? void 0 : C.addGradient,
          ]);
        return (0, n.jsx)("div", {
          className: o()(g.banner, s),
          style: E,
          children: v,
        });
      };
    },
    331042: function (e, t, r) {
      r.r(t),
        r.d(t, {
          CollectiblesCollectedModalInner: function () {
            return U;
          },
        }),
        r(47120),
        r(627341);
      var n = r(735250),
        a = r(470079),
        s = r(887024),
        o = r(512722),
        i = r.n(o),
        l = r(212433),
        c = r(278074),
        d = r(979554),
        u = r(399606),
        f = r(481060),
        g = r(37234),
        p = r(607070),
        v = r(100527),
        C = r(906732),
        m = r(1585),
        E = r(125988),
        h = r(300284),
        b = r(876917),
        y = r(642619),
        T = r(594174),
        A = r(884697),
        x = r(890249),
        I = r(318028),
        N = r(635552),
        S = r(328456),
        L = r(624377),
        O = r(530618),
        _ = r(141011),
        Z = r(372654),
        R = r(216541),
        j = r(302800),
        M = r(215023),
        w = r(689938),
        k = r(783600),
        B = r(660097);
      let P = (e) => {
          let { product: t, item: r } = e,
            a = (0, u.e7)([T.default], () => {
              let e = T.default.getCurrentUser();
              return i()(null != e, "User cannot be undefined"), e;
            }),
            { avatarDecorationSrc: s } = (0, E.Z)({
              user: a,
              avatarDecorationOverride:
                (null == r ? void 0 : r.type) === d.Z.AVATAR_DECORATION
                  ? r
                  : null,
              size: (0, m.y9)(f.AvatarSizes.SIZE_120),
            });
          return (0, c.EQ)(t.type)
            .with(d.Z.PROFILE_EFFECT, () =>
              (0, n.jsx)("div", {
                className: k.profileEffectShopPreview,
                children: (0, n.jsx)(b.Z, {
                  forCollectedModal: !0,
                  profileEffectId: r.id,
                }),
              }),
            )
            .with(
              d.Z.AVATAR_DECORATION,
              () => (
                i()(
                  r.type === d.Z.AVATAR_DECORATION,
                  "ts-match already checked the type",
                ),
                (0, n.jsx)(f.Avatar, {
                  size: f.AvatarSizes.SIZE_120,
                  src: B,
                  avatarDecoration: s,
                  className: k.avatarDecoration,
                  "aria-label": t.name,
                })
              ),
            )
            .with(d.Z.BUNDLE, () =>
              (0, n.jsx)("div", {
                className: k.bundlePreview,
                children: (0, n.jsx)(R.d, {
                  product: t,
                  user: a,
                  isPurchased: !1,
                  isHighlighted: !0,
                  profileEffectClassName: k.bundleProfileEffectCard,
                }),
              }),
            )
            .otherwise(() => null);
        },
        D = (e) => {
          let { product: t, item: r, reducedMotion: s, displayOptions: o } = e,
            [i, c] = a.useState(!1),
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
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(l.animated.div, {
                className: k.easterEggContainer,
                style: d,
                children: (0, n.jsx)(P, { product: t, item: r }),
              }),
              (0, n.jsx)(l.animated.div, {
                className: k.easterEggContainer,
                style: s ? g : u,
                children: (0, n.jsx)("img", {
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
          let { product: t, item: r, reducedMotion: a = !1 } = e,
            s = (0, j.v)(t.categorySkuId);
          return null != s
            ? (0, n.jsx)(D, {
                product: t,
                item: r,
                reducedMotion: a,
                displayOptions: s,
              })
            : (0, n.jsx)(P, { product: t, item: r });
        },
        U = (e) => {
          var t;
          let {
              product: r,
              onClose: s,
              confettiTarget: o,
              confettiCanvas: l,
              hideConfetti: E = !1,
              analyticsLocations: b,
            } = e,
            { confettiColors: T } = (0, L.Z)(r.styles),
            R = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            j = (0, x.m)("CollectiblesCollectedModal"),
            [B] = r.items,
            P = a.useRef(null),
            { analyticsLocations: D } = (0, C.ZP)([
              ...b,
              v.Z.COLLECTIBLES_COLLECTED_MODAL,
            ]),
            U = (0, h.Z)({ analyticsLocations: D }),
            H = a.useCallback(() => {
              if ((s(), (0, g.xf)(), U(), r.type === d.Z.AVATAR_DECORATION)) {
                i()(
                  B.type === d.Z.AVATAR_DECORATION,
                  "product type and item type are the same",
                ),
                  (0, m.ps)({
                    initialSelectedDecoration: B,
                    analyticsLocations: D,
                  });
                return;
              }
              r.type === d.Z.PROFILE_EFFECT &&
                (0, y.H)({
                  initialSelectedEffectId: B.id,
                  analyticsLocations: D,
                });
            }, [s, U, r.type, B, D]),
            { handleUseNow: z, isApplying: V } = (0, N.W)({
              product: r,
              onSuccess: s,
              onError: s,
            }),
            { firstAvatarDecoration: W, firstProfileEffect: X } = (0, S.R)(r),
            G = (0, A.x6)(r) ? null != W && null != X : null != W || null != X,
            K = (0, A.x6)(r) || j,
            { category: Y, isFetching: Q } = (0, I.l)(r.skuId),
            q =
              null !== (t = null == Y ? void 0 : Y.successModalBg) &&
              void 0 !== t
                ? t
                : r.banner;
          return (0, n.jsxs)(C.Gt, {
            value: D,
            children: [
              (0, n.jsxs)("div", {
                className: k.modalInner,
                ref: P,
                children: [
                  (0, n.jsxs)("div", {
                    className: k.bannerContainer,
                    children: [
                      (0, n.jsx)(_.Z, {
                        asset: Q ? void 0 : q,
                        size: (0, Z.ML)(880),
                        className: k.decorationBanner,
                        categoryBannerOverride: (0, M.ZS)(r.categorySkuId),
                      }),
                      (0, n.jsx)(F, { product: r, item: B, reducedMotion: R }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: k.collectedInfoContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: k.collectedTextContainer,
                        children: [
                          (0, n.jsx)(f.Heading, {
                            variant: "heading-lg/bold",
                            children:
                              w.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                itemName: r.name,
                              }),
                          }),
                          (0, n.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            children: (0, c.EQ)(null == r ? void 0 : r.type)
                              .with(
                                d.Z.BUNDLE,
                                () =>
                                  w.Z.Messages
                                    .COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE,
                              )
                              .with(
                                d.Z.PROFILE_EFFECT,
                                () =>
                                  w.Z.Messages
                                    .COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION,
                              )
                              .otherwise(
                                () =>
                                  w.Z.Messages
                                    .COLLECTIBLES_PERMANENT_COLLECTION,
                              ),
                          }),
                        ],
                      }),
                      K
                        ? (0, n.jsxs)("div", {
                            className: k.buttons,
                            children: [
                              (0, n.jsx)(f.Button, {
                                color: G
                                  ? f.ButtonColors.PRIMARY
                                  : f.ButtonColors.BRAND,
                                onClick: H,
                                children:
                                  w.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                              }),
                              G
                                ? (0, n.jsx)(f.Button, {
                                    onClick: z,
                                    submitting: V,
                                    children: w.Z.Messages.COLLECTIBLES_USE_NOW,
                                  })
                                : null,
                            ],
                          })
                        : (0, n.jsx)(f.Button, {
                            onClick: H,
                            children: w.Z.Messages.COLLECTIBLES_USE_NOW,
                          }),
                    ],
                  }),
                  (0, n.jsx)(f.ModalCloseButton, {
                    onClick: s,
                    className: k.modalCloseButton,
                    withCircleBackground: !0,
                  }),
                ],
              }),
              !E &&
                !R &&
                (0, n.jsx)(O.Z, {
                  confettiTarget: null != o ? o : P.current,
                  confettiCanvas: l,
                  sprites: (0, Z.vK)(r.categorySkuId),
                  colors: null == T ? void 0 : T.map((e) => e.toHexString()),
                }),
            ],
          });
        };
      t.default = (e) => {
        let {
            transitionState: t,
            product: r,
            onClose: o,
            analyticsLocations: i,
          } = e,
          l = a.useRef(new s.qA()),
          [c, d] = a.useState(null),
          u = (0, j.UY)(r.skuId);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(s.O_, {
              ref: d,
              className: k.confettiCanvas,
              environment: l.current,
            }),
            (0, n.jsxs)(f.ModalRoot, {
              hideShadow: !0,
              transitionState: t,
              size: f.ModalSize.DYNAMIC,
              className: k.modalRoot,
              children: [
                null != u &&
                  (0, n.jsx)("img", {
                    src: u.imageSrc,
                    className: k.customConfetti,
                    style: u.style,
                    alt: "",
                    "aria-hidden": "true",
                  }),
                (0, n.jsx)(f.ModalContent, {
                  className: k.modalContent,
                  children: (0, n.jsx)(U, {
                    product: r,
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
    372654: function (e, t, r) {
      r.d(t, {
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
      var n = r(180650),
        a = r(921948);
      let s = 1060,
        o = (e) => e * (0, a.Z)(),
        i = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 180,
            { primary: r, secondary: n } = e;
          return "linear-gradient("
            .concat(t, "deg, ")
            .concat(r.toHslString(), ", ")
            .concat(n.toHslString(), ")");
        },
        l = [r(241371), r(448509)],
        c = {
          ["".concat(n.T.FANTASY)]: [r(709393), r(646584)],
          ["".concat(n.T.ANIME)]: [r(647387), r(448509)],
          ["".concat(n.T.BREAKFAST)]: [r(289901), r(402344)],
          ["".concat(n.T.FALL)]: [r(432170), r(15888)],
          ["".concat(n.T.WINTER)]: [r(304088), r(774694)],
          ["".concat(n.T.MONSTERS)]: [r(16724), r(441506)],
        },
        d = (e) => {
          var t;
          return null == e ? l : null !== (t = c[e]) && void 0 !== t ? t : l;
        };
    },
    616066: function (e, t, r) {
      r.d(t, {
        R: function () {
          return p;
        },
      });
      var n = r(735250);
      r(470079);
      var a = r(120356),
        s = r.n(a),
        o = r(979554),
        i = r(481060),
        l = r(1585),
        c = r(125988),
        d = r(998502),
        u = r(689938),
        f = r(446563);
      let g = d.ZP.getEnableHardwareAcceleration()
          ? i.AnimatedAvatar
          : i.Avatar,
        p = (e) => {
          let {
              item: t,
              user: r,
              isHighlighted: a = !1,
              isPurchased: d = !1,
              avatarSize: p = i.AvatarSizes.SIZE_152,
              avatarPlaceholderSrc: v,
            } = e,
            C = (0, l.y9)(p),
            {
              avatarDecorationSrc: m,
              eventHandlers: E,
              avatarPlaceholderSrc: h,
            } = (0, c.Z)({
              user: r,
              avatarDecorationOverride:
                (null == t ? void 0 : t.type) === o.Z.AVATAR_DECORATION
                  ? t
                  : void 0,
              size: C,
              onlyAnimateOnHover: !a,
            });
          return (0, n.jsx)(g, {
            ...E,
            avatarDecoration: m,
            src: a
              ? null == r
                ? void 0
                : r.getAvatarURL(void 0, 152, !0)
              : null != v
                ? v
                : h,
            imageClassName: a ? f.fadeInAvatarImg : void 0,
            className: s()(f.avatar, { [f.avatarPurchased]: d }),
            size: p,
            "aria-label": u.Z.Messages.USER_SETTINGS_AVATAR,
          });
        };
    },
    216541: function (e, t, r) {
      r.d(t, {
        d: function () {
          return v;
        },
      });
      var n = r(735250);
      r(470079);
      var a = r(120356),
        s = r.n(a),
        o = r(780384),
        i = r(481060),
        l = r(410030),
        c = r(876917),
        d = r(328456),
        u = r(616066),
        f = r(746443),
        g = r(63243),
        p = r(244488);
      let v = (e) => {
        let {
            product: t,
            isPurchased: r,
            isHighlighted: a,
            user: v,
            forCollectedModal: C,
            profileEffectClassName: m,
          } = e,
          { firstProfileEffect: E, firstAvatarDecoration: h } = (0, d.R)(t),
          b = (0, l.ZP)(),
          y = (0, o.ap)(b);
        return (0, n.jsxs)("div", {
          className: f.container,
          children: [
            null != E
              ? (0, n.jsx)("div", {
                  className: s()(f.profileEffectShopPreview, m),
                  children: (0, n.jsx)(c.Z, {
                    isHovering: a,
                    profileEffectId: E.id,
                    isPurchased: r,
                    forCollectedModal: C,
                    removeSetHeight: !0,
                  }),
                })
              : null,
            null != h
              ? (0, n.jsx)("div", {
                  className: f.avatarDecorationPreview,
                  children: (0, n.jsx)(u.R, {
                    item: h,
                    user: v,
                    avatarSize: i.AvatarSizes.SIZE_120,
                    isPurchased: r,
                    isHighlighted: a,
                    avatarPlaceholderSrc: y ? p : g,
                  }),
                })
              : null,
          ],
        });
      };
    },
    876917: function (e, t, r) {
      r(47120);
      var n = r(735250),
        a = r(470079),
        s = r(120356),
        o = r.n(s),
        i = r(802433),
        l = r(680295),
        c = r(296140),
        d = r(241822);
      t.Z = (e) => {
        let {
            profileEffectId: t,
            isHovering: r,
            forCollectedModal: s = !1,
            isPurchased: u,
            removeSetHeight: f = !1,
          } = e,
          g = s ? 250 : 0.1,
          [p, v] = a.useState(!0);
        return (a.useEffect(() => {
          if (!0 !== s) v(!1);
          else {
            let e = setTimeout(() => {
              v(!1);
            }, g);
            return () => {
              clearTimeout(e);
            };
          }
        }, [g, s]),
        null != t)
          ? (0, n.jsxs)("div", {
              className: o()(c.previewContainer, {
                [c.previewContainerAnimation]: s,
                [c.previewContainerSetHeight]: !f,
              }),
              children: [
                (0, n.jsx)("img", {
                  src: d,
                  alt: " ",
                  className: s ? c.previewForCollected : c.preview,
                  "aria-hidden": !0,
                }),
                !p &&
                  (0, n.jsx)("div", {
                    className: u ? c.purchasedEffect : void 0,
                    children: (0, n.jsx)(l.Z, {
                      profileEffectId: t,
                      useThumbnail: !0,
                      autoPlay: s,
                      restartMethod: i.j.FromStart,
                      resetOnHover: !0,
                      isHovering: r,
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
    642619: function (e, t, r) {
      r.d(t, {
        H: function () {
          return s;
        },
      });
      var n = r(735250);
      r(470079);
      var a = r(481060);
      let s = (e) => {
        let { analyticsLocations: t, initialSelectedEffectId: s, guild: o } = e;
        (0, a.openModalLazy)(async () => {
          let { default: e } = await r.e("55183").then(r.bind(r, 191564));
          return (r) =>
            (0, n.jsx)(e, {
              ...r,
              guild: o,
              initialSelectedEffectId: s,
              analyticsLocations: t,
            });
        }, {});
      };
    },
  },
]);
//# sourceMappingURL=861ede851abe666e6fba.js.map
