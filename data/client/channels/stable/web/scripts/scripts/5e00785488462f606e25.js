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
      var r = n(979590),
        a = n.n(r),
        s = n(399606),
        o = n(607070),
        i = n(168631);
      let l = (e, t) => {
          let n = e.toRgb(),
            r = t.toRgb(),
            [s, o, l] = (0, i.J2)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
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
          let { h: n, s: r, l: s } = e.toHsl();
          return a()({ h: n, s: r * t, l: s });
        };
      t.Z = (e) => (t) => {
        let n = (0, s.e7)([o.Z], () => o.Z.saturation);
        if (null == t) return {};
        let r = {
          backgroundColors: c(e, t.backgroundColors),
          buttonColors: d(e, t.buttonColors),
          confettiColors: t.confettiColors,
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
              confettiColors: r.confettiColors.map((e) => u(e, n)),
            };
      };
    },
    890249: function (e, t, n) {
      n.d(t, {
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
        a = (e) => r.useExperiment({ location: e }).realtimeUseNowEnabled;
    },
    318028: function (e, t, n) {
      n.d(t, {
        l: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(399606),
        a = n(597688),
        s = n(267097);
      function o(e) {
        (0, s.Z)();
        let [t, n] = (0, r.Wu)([a.Z], () => [
          a.Z.isFetchingCategories,
          a.Z.getCategoryForProduct(e),
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
      var r = n(470079),
        a = n(979554),
        s = n(809206),
        o = n(350327),
        i = n(884697),
        l = n(328456),
        c = n(689938);
      let d = (e) => {
        let { product: t, onSuccess: d, onError: u } = e,
          [f, g] = r.useState(!1),
          { firstAvatarDecoration: p, firstProfileEffect: v } = (0, l.R)(t),
          C = (0, i.x6)(t)
            ? c.Z.Messages.COLLECTIBLES_PROFILE_UPDATE_NOTIFICATION
            : t.type === a.Z.AVATAR_DECORATION
              ? c.Z.Messages.COLLECTIBLES_AVATAR_DECO_UPDATED_NOTIFICATION
              : c.Z.Messages.COLLECTIBLES_PFX_UPDATED_NOTIFICATION;
        return {
          handleUseNow: r.useCallback(async () => {
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
                  createToast: r,
                  popToast: a,
                  showToast: s,
                } = await Promise.resolve().then(n.bind(n, 481060));
                a(), s(r(C, t.MESSAGE, { duration: 6e3, position: e.TOP }));
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
      var r = n(470079),
        a = n(979554);
      class s {
        get firstAvatarDecoration() {
          return this.getFirstItemByType(a.Z.AVATAR_DECORATION);
        }
        get firstProfileEffect() {
          return this.getFirstItemByType(a.Z.PROFILE_EFFECT);
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
          var t, n, r;
          (t = this),
            (r = void 0),
            (n = "itemsByTypes") in t
              ? Object.defineProperty(t, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = r),
            (this.itemsByTypes = this.sortByTypes(e));
        }
      }
      let o = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: n } = r.useMemo(
          () => new s(e.items),
          [e],
        );
        return { firstProfileEffect: t, firstAvatarDecoration: n };
      };
    },
    624377: function (e, t, n) {
      var r = n(979590),
        a = n.n(r),
        s = n(692547),
        o = n(764707);
      let i = a()(
          s.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex(),
        ),
        l = a()(
          s.Z.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex(),
        ),
        c = (0, o.Z)({ dark: l, light: i });
      t.Z = c;
    },
    141011: function (e, t, n) {
      var r = n(735250),
        a = n(470079),
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
            children: v,
            categoryBannerOverride: C,
          } = e,
          m = (0, i.e7)([c.Z], () => c.Z.saturation),
          E = a.useMemo(() => {
            if (null == t) return p;
            let e = (0, u.uV)(t, { size: n, format: "jpg" }),
              r = (null == C ? void 0 : C.blur)
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
                ...r,
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
              ...r,
            };
          }, [
            t,
            n,
            m,
            p,
            null == C ? void 0 : C.blur,
            null == C ? void 0 : C.addGradient,
          ]);
        return (0, r.jsx)("div", {
          className: o()(g.banner, s),
          style: E,
          children: v,
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
      var r = n(735250),
        a = n(470079),
        s = n(887024),
        o = n(512722),
        i = n.n(o),
        l = n(526629),
        c = n(278074),
        d = n(979554),
        u = n(399606),
        f = n(481060),
        g = n(37234),
        p = n(607070),
        v = n(100527),
        C = n(906732),
        m = n(1585),
        E = n(125988),
        h = n(300284),
        b = n(876917),
        y = n(642619),
        T = n(594174),
        x = n(884697),
        A = n(890249),
        I = n(318028),
        N = n(635552),
        L = n(328456),
        S = n(624377),
        O = n(530618),
        _ = n(141011),
        Z = n(372654),
        R = n(216541),
        j = n(302800),
        M = n(215023),
        w = n(689938),
        k = n(783600),
        B = n(660097);
      let P = (e) => {
          let { product: t, item: n } = e,
            a = (0, u.e7)([T.default], () => {
              let e = T.default.getCurrentUser();
              return i()(null != e, "User cannot be undefined"), e;
            }),
            { avatarDecorationSrc: s } = (0, E.Z)({
              user: a,
              avatarDecorationOverride:
                (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION
                  ? n
                  : null,
              size: (0, m.y9)(f.AvatarSizes.SIZE_120),
            });
          return (0, c.EQ)(t.type)
            .with(d.Z.PROFILE_EFFECT, () =>
              (0, r.jsx)("div", {
                className: k.profileEffectShopPreview,
                children: (0, r.jsx)(b.Z, {
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
                (0, r.jsx)(f.Avatar, {
                  size: f.AvatarSizes.SIZE_120,
                  src: B,
                  avatarDecoration: s,
                  className: k.avatarDecoration,
                  "aria-label": t.name,
                })
              ),
            )
            .with(d.Z.BUNDLE, () =>
              (0, r.jsx)("div", {
                className: k.bundlePreview,
                children: (0, r.jsx)(R.d, {
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
          let { product: t, item: n, reducedMotion: s, displayOptions: o } = e,
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
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(l.animated.div, {
                className: k.easterEggContainer,
                style: d,
                children: (0, r.jsx)(P, { product: t, item: n }),
              }),
              (0, r.jsx)(l.animated.div, {
                className: k.easterEggContainer,
                style: s ? g : u,
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
        F = (e) => {
          let { product: t, item: n, reducedMotion: a = !1 } = e,
            s = (0, j.v)(t.categorySkuId);
          return null != s
            ? (0, r.jsx)(D, {
                product: t,
                item: n,
                reducedMotion: a,
                displayOptions: s,
              })
            : (0, r.jsx)(P, { product: t, item: n });
        },
        U = (e) => {
          var t;
          let {
              product: n,
              onClose: s,
              confettiTarget: o,
              confettiCanvas: l,
              hideConfetti: E = !1,
              analyticsLocations: b,
            } = e,
            { confettiColors: T } = (0, S.Z)(n.styles),
            R = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            j = (0, A.m)("CollectiblesCollectedModal"),
            [B] = n.items,
            P = a.useRef(null),
            { analyticsLocations: D } = (0, C.ZP)([
              ...b,
              v.Z.COLLECTIBLES_COLLECTED_MODAL,
            ]),
            U = (0, h.Z)({ analyticsLocations: D }),
            H = a.useCallback(() => {
              if ((s(), (0, g.xf)(), U(), n.type === d.Z.AVATAR_DECORATION)) {
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
              n.type === d.Z.PROFILE_EFFECT &&
                (0, y.H)({
                  initialSelectedEffectId: B.id,
                  analyticsLocations: D,
                });
            }, [s, U, n.type, B, D]),
            { handleUseNow: z, isApplying: V } = (0, N.W)({
              product: n,
              onSuccess: s,
              onError: s,
            }),
            { firstAvatarDecoration: W, firstProfileEffect: X } = (0, L.R)(n),
            G = (0, x.x6)(n) ? null != W && null != X : null != W || null != X,
            K = (0, x.x6)(n) || j,
            { category: Y, isFetching: Q } = (0, I.l)(n.skuId),
            q =
              null !== (t = null == Y ? void 0 : Y.successModalBg) &&
              void 0 !== t
                ? t
                : n.banner;
          return (0, r.jsxs)(C.Gt, {
            value: D,
            children: [
              (0, r.jsxs)("div", {
                className: k.modalInner,
                ref: P,
                children: [
                  (0, r.jsxs)("div", {
                    className: k.bannerContainer,
                    children: [
                      (0, r.jsx)(_.Z, {
                        asset: Q ? void 0 : q,
                        size: (0, Z.ML)(880),
                        className: k.decorationBanner,
                        categoryBannerOverride: (0, M.ZS)(n.categorySkuId),
                      }),
                      (0, r.jsx)(F, { product: n, item: B, reducedMotion: R }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: k.collectedInfoContainer,
                    children: [
                      (0, r.jsxs)("div", {
                        className: k.collectedTextContainer,
                        children: [
                          (0, r.jsx)(f.Heading, {
                            variant: "heading-lg/bold",
                            children:
                              w.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                itemName: n.name,
                              }),
                          }),
                          (0, r.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            children: (0, c.EQ)(null == n ? void 0 : n.type)
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
                        ? (0, r.jsxs)("div", {
                            className: k.buttons,
                            children: [
                              (0, r.jsx)(f.Button, {
                                color: G
                                  ? f.ButtonColors.PRIMARY
                                  : f.ButtonColors.BRAND,
                                onClick: H,
                                children:
                                  w.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                              }),
                              G
                                ? (0, r.jsx)(f.Button, {
                                    onClick: z,
                                    submitting: V,
                                    children: w.Z.Messages.COLLECTIBLES_USE_NOW,
                                  })
                                : null,
                            ],
                          })
                        : (0, r.jsx)(f.Button, {
                            onClick: H,
                            children: w.Z.Messages.COLLECTIBLES_USE_NOW,
                          }),
                    ],
                  }),
                  (0, r.jsx)(f.ModalCloseButton, {
                    onClick: s,
                    className: k.modalCloseButton,
                    withCircleBackground: !0,
                  }),
                ],
              }),
              !E &&
                !R &&
                (0, r.jsx)(O.Z, {
                  confettiTarget: null != o ? o : P.current,
                  confettiCanvas: l,
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
            analyticsLocations: i,
          } = e,
          l = a.useRef(new s.qA()),
          [c, d] = a.useState(null),
          u = (0, j.UY)(n.skuId);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.O_, {
              ref: d,
              className: k.confettiCanvas,
              environment: l.current,
            }),
            (0, r.jsxs)(f.ModalRoot, {
              hideShadow: !0,
              transitionState: t,
              size: f.ModalSize.DYNAMIC,
              className: k.modalRoot,
              children: [
                null != u &&
                  (0, r.jsx)("img", {
                    src: u.imageSrc,
                    className: k.customConfetti,
                    style: u.style,
                    alt: "",
                    "aria-hidden": "true",
                  }),
                (0, r.jsx)(f.ModalContent, {
                  className: k.modalContent,
                  children: (0, r.jsx)(U, {
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
      var r = n(180650),
        a = n(921948);
      let s = 1060,
        o = (e) => e * (0, a.Z)(),
        i = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 180,
            { primary: n, secondary: r } = e;
          return "linear-gradient("
            .concat(t, "deg, ")
            .concat(n.toHslString(), ", ")
            .concat(r.toHslString(), ")");
        },
        l = [n(241371), n(448509)],
        c = {
          ["".concat(r.T.FANTASY)]: [n(709393), n(646584)],
          ["".concat(r.T.ANIME)]: [n(647387), n(448509)],
          ["".concat(r.T.BREAKFAST)]: [n(289901), n(402344)],
          ["".concat(r.T.HALLOWEEN)]: [n(292006), n(799718)],
          ["".concat(r.T.FALL)]: [n(432170), n(15888)],
          ["".concat(r.T.WINTER)]: [n(304088), n(774694)],
          ["".concat(r.T.MONSTERS)]: [n(16724), n(441506)],
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
      var r = n(735250);
      n(470079);
      var a = n(120356),
        s = n.n(a),
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
              user: n,
              avatarDecorationOverride:
                (null == t ? void 0 : t.type) === o.Z.AVATAR_DECORATION
                  ? t
                  : void 0,
              size: C,
              onlyAnimateOnHover: !a,
            });
          return (0, r.jsx)(g, {
            ...E,
            avatarDecoration: m,
            src: a
              ? null == n
                ? void 0
                : n.getAvatarURL(void 0, 152, !0)
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
    216541: function (e, t, n) {
      n.d(t, {
        d: function () {
          return v;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(120356),
        s = n.n(a),
        o = n(780384),
        i = n(481060),
        l = n(410030),
        c = n(876917),
        d = n(328456),
        u = n(616066),
        f = n(746443),
        g = n(63243),
        p = n(244488);
      let v = (e) => {
        let {
            product: t,
            isPurchased: n,
            isHighlighted: a,
            user: v,
            forCollectedModal: C,
            profileEffectClassName: m,
          } = e,
          { firstProfileEffect: E, firstAvatarDecoration: h } = (0, d.R)(t),
          b = (0, l.ZP)(),
          y = (0, o.ap)(b);
        return (0, r.jsxs)("div", {
          className: f.container,
          children: [
            null != E
              ? (0, r.jsx)("div", {
                  className: s()(f.profileEffectShopPreview, m),
                  children: (0, r.jsx)(c.Z, {
                    isHovering: a,
                    profileEffectId: E.id,
                    isPurchased: n,
                    forCollectedModal: C,
                    removeSetHeight: !0,
                  }),
                })
              : null,
            null != h
              ? (0, r.jsx)("div", {
                  className: f.avatarDecorationPreview,
                  children: (0, r.jsx)(u.R, {
                    item: h,
                    user: v,
                    avatarSize: i.AvatarSizes.SIZE_120,
                    isPurchased: n,
                    isHighlighted: a,
                    avatarPlaceholderSrc: y ? p : g,
                  }),
                })
              : null,
          ],
        });
      };
    },
    876917: function (e, t, n) {
      n(47120);
      var r = n(735250),
        a = n(470079),
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
          ? (0, r.jsxs)("div", {
              className: o()(c.previewContainer, {
                [c.previewContainerAnimation]: s,
                [c.previewContainerSetHeight]: !f,
              }),
              children: [
                (0, r.jsx)("img", {
                  src: d,
                  alt: " ",
                  className: s ? c.previewForCollected : c.preview,
                  "aria-hidden": !0,
                }),
                !p &&
                  (0, r.jsx)("div", {
                    className: u ? c.purchasedEffect : void 0,
                    children: (0, r.jsx)(l.Z, {
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
      var r = n(735250);
      n(470079);
      var a = n(481060);
      let s = (e) => {
        let { analyticsLocations: t, initialSelectedEffectId: s, guild: o } = e;
        (0, a.openModalLazy)(async () => {
          let { default: e } = await n.e("55183").then(n.bind(n, 191564));
          return (n) =>
            (0, r.jsx)(e, {
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
//# sourceMappingURL=5e00785488462f606e25.js.map
