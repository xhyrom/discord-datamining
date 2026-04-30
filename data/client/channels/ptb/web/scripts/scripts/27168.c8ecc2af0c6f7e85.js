"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27168"],
  {
    772427(t, e, s) {
      s.d(e, { QW: () => i, rV: () => n });
      let r = (0, s(945810).mj)({
          name: "2026-04-profile-frame-gifting",
          kind: "user",
          defaultConfig: { enabled: !1 },
          variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
        }),
        i = (t) => r.getConfig({ location: t }).enabled,
        n = (t) => r.useConfig({ location: t }).enabled;
    },
    466459(t, e, s) {
      s.d(e, { h: () => u, o: () => o });
      var r = s(791282),
        i = s.n(r),
        n = s(575593),
        l = s(17928),
        a = s(4227);
      let o = (t, e) => {
          let s = null != t.getPurchase(e.skuId),
            r = e.items ?? [],
            l = i()(r.map((e) => t.getPurchase(e.skuId)));
          switch (e?.type) {
            case n.R.BUNDLE:
              return {
                isPurchased: s || (r.length > 0 && l.length === r.length),
                isPartiallyOwnedBundle: l.length > 0 && l.length < r.length,
                isPartiallyOwnedVariantsGroup: !1,
              };
            case n.R.VARIANTS_GROUP:
              let a = e.variants?.every((e) => null != t.getPurchase(e.skuId)),
                o =
                  e.variants?.some((e) => null != t.getPurchase(e.skuId)) && !a;
              return {
                isPurchased: a ?? !1,
                isPartiallyOwnedBundle: !1,
                isPartiallyOwnedVariantsGroup: o ?? !1,
              };
            default:
              return {
                isPurchased: s,
                isPartiallyOwnedBundle: !1,
                isPartiallyOwnedVariantsGroup: !1,
              };
          }
        },
        u = (t) => (0, l.cf)([a.A], () => o(a.A, t));
    },
    895360(t, e, s) {
      s.d(e, { D: () => A });
      var r = s(627968),
        i = s(503698),
        n = s.n(i),
        l = s(933832),
        a = s(661531),
        o = s(834730),
        u = s(691540),
        d = s(857250),
        c = s(97483),
        S = s(765178),
        p = s(985018),
        _ = s(199267),
        h = s(861173);
      function I() {
        return (0, r.jsxs)("div", {
          className: n()(h.oR, _.o),
          children: [
            (0, r.jsx)(l.A, {
              size: "custom",
              className: _.K,
              color: a.A.colors.STATUS_POSITIVE.css,
            }),
            (0, r.jsx)(o.E, {
              color: "text-strong",
              variant: "text-sm/semibold",
              children: p.intl.string(p.t["3T2jbf"]),
            }),
          ],
        });
      }
      function A() {
        let t = p.intl.string(p.t["3T2jbf"]);
        (0, u.P0)((0, d.o)("", c.Ck.CUSTOM, { component: (0, r.jsx)(I, {}) })),
          S.O.announce(t);
      }
    },
    113265(t, e, s) {
      s.d(e, { z: () => o });
      var r = s(64700),
        i = s(575593),
        n = s(466459),
        l = s(116833),
        a = s(152472);
      function o(t) {
        let {
            userId: e,
            product: s,
            selectedVariantIndex: o,
            location: u,
            onError: d,
          } = t,
          c = r.useMemo(
            () =>
              s.type === i.R.VARIANTS_GROUP &&
              null != o &&
              s.variants?.[o] != null
                ? s.variants[o]
                : s,
            [s, o],
          ),
          S = c.skuId,
          p = (0, a.c)({
            userId: e,
            skuId: S,
            nuxGraphic: (function (t) {
              let { product: e } = t,
                s = "6/4";
              switch (e.type) {
                case i.R.NAMEPLATE:
                case i.R.AVATAR_DECORATION:
                  s = "16/9";
                  break;
                case i.R.BUNDLE:
                case i.R.PROFILE_EFFECT:
                default:
                  s = "6/4";
              }
              return {
                type: "dynamic",
                component: l.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                aspectRatio: s,
                props: { product: e, forCollectedModal: !0 },
              };
            })({ product: c }),
            location: u,
            onError: d,
          }),
          { isPurchased: _ } = (0, n.h)(c);
        return { ...p, specificProductOrVariant: c, isPurchased: _ };
      }
    },
    152472(t, e, s) {
      s.d(e, { c: () => T });
      var r = s(627968),
        i = s(64700),
        n = s(554146),
        l = s(192308),
        a = s(691540),
        o = s(857250),
        u = s(97483),
        d = s(765178),
        c = s(932001),
        S = s(17928),
        p = s(688810),
        _ = s(841595),
        h = s(808247),
        I = s(594832),
        A = s(240248),
        E = s(49999),
        f = s(985018);
      function T(t) {
        let {
            userId: e,
            skuId: a,
            nuxGraphic: o,
            onNuxShow: u,
            location: d,
            onAddSuccess: f,
            onError: T,
          } = t,
          [R, y] = (0, c.kn)([n.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
          L = R === n.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
        return {
          ...(function (t) {
            let {
                userId: e,
                skuId: s,
                location: r,
                onAddSuccess: n,
                onRemoveSuccess: l,
                onError: a,
              } = t,
              { analyticsLocations: o } = (0, p.Ay)((0, A.uJ)(r) ? [] : [r]),
              u = (0, S.bG)([_.A], () => _.A.getFirstWishlistId(e)),
              d = (0, I.rJ)(u, s),
              [c, E] = i.useState(null),
              [f, T] = i.useState(!1),
              m = null !== c ? c : d;
            i.useEffect(() => {
              E(null), T(!1);
            }, [s]);
            let R = i.useCallback(async () => {
              if (!f)
                if ((T(!0), m && null != u)) {
                  E(!1);
                  try {
                    await h.A.removeSkuFromWishlist(u, s, o), l?.();
                  } catch (t) {
                    a?.(t);
                  } finally {
                    E(null), T(!1);
                  }
                } else {
                  E(!0);
                  try {
                    await h.A.addSkuToWishlist(s, o), n?.();
                  } catch (t) {
                    a?.(t);
                  } finally {
                    E(null), T(!1);
                  }
                }
            }, [f, m, u, s, o, n, l, a]);
            return { isWishlisted: m, isBusy: f, handleToggle: R };
          })({
            userId: e,
            skuId: a,
            location: d,
            onAddSuccess: i.useCallback(() => {
              L &&
                null != o &&
                (u?.(),
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await s
                    .e("64581")
                    .then(s.bind(s, 38884));
                  return (e) => (0, r.jsx)(t, { ...e, graphic: o });
                }),
                y(E.i.USER_DISMISS)),
                f?.();
            }, [y, o, u, L, f]),
            onError: T ?? m,
          }),
          isFirstTimeWishlister: L,
        };
      }
      function m() {
        (0, a.P0)((0, o.o)(f.intl.string(f.t.F8FvUy), u.Ck.FAILURE)),
          d.O.announce(f.intl.string(f.t.F8FvUy));
      }
    },
    400669(t, e, s) {
      s.d(e, { g: () => A, l: () => E });
      var r = s(627968),
        i = s(64700),
        n = s(17928),
        l = s(554146),
        a = s(139146),
        o = s(895360),
        u = s(152472),
        d = s(771781),
        c = s(909536),
        S = s(594832),
        p = s(495544),
        _ = s(274681),
        h = s(788868),
        I = s(985018);
      let A = { type: "image", src: s(201682).A },
        E = i.forwardRef(function (t, e) {
          let {
              className: s,
              disabled: i,
              size: E,
              variant: f,
              location: T,
              forceDarkTheme: m,
            } = t,
            R = h.pe.TIER_2,
            y = I.intl.string(I.t.lG6a5x),
            L = (0, c.Gh)("premium-wishlist-button-nux"),
            k = (0, n.bG)([p.default], () => p.default.getId());
          (0, S.pE)();
          let {
              isWishlisted: w,
              isBusy: C,
              isFirstTimeWishlister: g,
              handleToggle: v,
            } = (0, u.c)({
              userId: k,
              location: T,
              skuId: R,
              nuxGraphic: L ? A : void 0,
              onNuxShow: L ? o.D : void 0,
              onAddSuccess: _.w,
            }),
            U = (0, d.mB)(l.M.PREMIUM_WISHLIST_COACHMARK);
          return (0, r.jsx)("div", {
            ref: e,
            className: m ? "theme-dark" : void 0,
            children: (0, r.jsx)(a._, {
              skuId: R,
              productName: y,
              className: s,
              disabled: i,
              size: E,
              variant: f,
              isWishlisted: w,
              isBusy: C,
              isFirstTimeWishlister: g,
              onClick: v,
              shouldShowTooltip: !U,
              tooltipConfig: { add: I.intl.string(I.t.cjmnm6) },
            }),
          });
        });
    },
    96203(t, e, s) {
      s.d(e, { A: () => c });
      var r = s(64700),
        i = s(735438),
        n = s(17928),
        l = s(633075),
        a = s(289173),
        o = s(999291),
        u = s(832163),
        d = s(501838);
      function c(t) {
        let { userId: e } = t,
          s = (0, o.Ay)(e),
          c = r.useMemo(() => (s?.userId != null ? [s.userId] : []), [s]),
          S = (0, d.w)({ userIds: c }),
          p = (0, d.mn)({ userIds: c }),
          _ = (0, d.tR)(c),
          h = (0, n.yK)(
            [u.A],
            () => {
              if (s?.widgets == null) return [];
              let t = new Set();
              for (let e of s?.widgets ?? [])
                if (e instanceof a.Yy)
                  e.games.forEach((e) => {
                    let s = u.A.getApplicationIdFromDetectableId(
                      e.applicationId,
                    );
                    null != s && t.add(s);
                  });
                else if (e instanceof l.R) {
                  let s = u.A.getApplicationIdFromDetectableId(e.applicationId);
                  null != s && t.add(s);
                }
              return Array.from(t).sort();
            },
            [s],
          );
        return r.useMemo(
          () =>
            s?.application != null ? [] : (0, i.uniq)([...S, ...p, ..._, ...h]),
          [s?.application, S, p, _, h],
        );
      }
    },
    760716(t, e, s) {
      s.d(e, { i: () => r });
      let r = (0, s(353640).v)()((t) => ({
        overrideApplicationId: null,
        setOverrideApplicationId: (e) => t({ overrideApplicationId: e }),
        showSelfActivity: !1,
        setShowSelfActivity: (e) => t({ showSelfActivity: e }),
        recommendationApplicationIds: null,
        setRecommendationApplicationIds: (e) =>
          t({ recommendationApplicationIds: null != e ? e.split(",") : null }),
      }));
    },
    918467(t, e, s) {
      s(321073);
      var r = s(17928),
        i = s(228366);
      let n = {};
      class l extends r.Ay.Store {
        static displayName = "StorefrontPromotionStore";
        getFetchState(t) {
          return n[t]?.state;
        }
        getFetchedAt(t) {
          let e = n[t];
          if (e?.state === "success" || e?.state === "error")
            return e.fetchedAt;
        }
        getPromotionsForApplication(t) {
          let e = n[t];
          return e?.state === "success" || e?.state === "loading"
            ? (e.promotions ?? null)
            : null;
        }
      }
      new l(i.h, {
        LOGOUT: function () {
          n = {};
        },
        STOREFRONT_PROMOTIONS_FETCH_START: function (t) {
          let { applicationIds: e } = t;
          for (let t of e) {
            let e = n[t];
            n[t] = {
              state: "loading",
              promotions: e?.state === "success" ? [...e.promotions] : void 0,
            };
          }
        },
        STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function (t) {
          let { applicationIds: e, promotions: s } = t,
            r = Date.now(),
            i = { ...n };
          for (let t of e)
            i[t] = { state: "success", promotions: [], fetchedAt: r };
          for (let t of s) {
            let e = t.applicationId;
            i[e]?.state === "success" && i[e].promotions.push(t);
          }
          n = i;
        },
        STOREFRONT_PROMOTIONS_FETCH_FAIL: function (t) {
          let { applicationIds: e } = t,
            s = Date.now();
          for (let t of e) n[t] = { state: "error", fetchedAt: s };
        },
      });
    },
    970207(t, e, s) {
      s.d(e, { g6: () => a, yS: () => l });
      var r = s(945810),
        i = s(927813);
      let n = (0, r.mj)({
        name: "2026-04-storefront-pricing",
        kind: "user",
        defaultConfig: { enabled: !1, thresholdMs: 5 * i.A.Millis.MINUTE },
        variations: {
          0: { enabled: !1, thresholdMs: 5 * i.A.Millis.MINUTE },
          1: { enabled: !0, thresholdMs: +i.A.Millis.MINUTE },
          2: { enabled: !0, thresholdMs: 2 * i.A.Millis.MINUTE },
          3: { enabled: !0, thresholdMs: 5 * i.A.Millis.MINUTE },
          4: { enabled: !0, thresholdMs: 10 * i.A.Millis.MINUTE },
        },
      });
      function l(t) {
        let { location: e } = t;
        return n.getConfig({ location: e }).enabled;
      }
      function a(t) {
        let { location: e } = t;
        return n.getConfig({ location: e }).thresholdMs;
      }
    },
    65238(t, e, s) {
      var r = s(315069);
      class i extends r.A {
        id;
        applicationId;
        displayName;
        rewardType;
        rewardConfig;
        skuIds;
        appliesToAllSkus;
        startsAt;
        endsAt;
        static createFromServer(t) {
          var e;
          return new i({
            id: t.id,
            applicationId: t.application_id,
            displayName: t.display_name ?? null,
            rewardType: t.reward_type,
            rewardConfig:
              null != t.reward_config
                ? null == (e = t.reward_config)
                  ? null
                  : {
                      discount:
                        null != e.discount
                          ? {
                              id: e.discount.id,
                              type: e.discount.type,
                              amount: e.discount.amount,
                            }
                          : null,
                    }
                : null,
            skuIds: (function (t) {
              if (null == t) return null;
              let e = {};
              for (let [s, r] of Object.entries(t))
                e[s] = { priceTiers: r.price_tiers };
              return e;
            })(t.sku_ids),
            appliesToAllSkus: t.applies_to_all_skus,
            startsAt: null != t.starts_at ? new Date(t.starts_at) : null,
            endsAt: null != t.ends_at ? new Date(t.ends_at) : null,
          });
        }
        constructor(t) {
          super(),
            (this.id = t.id),
            (this.applicationId = t.applicationId),
            (this.displayName = t.displayName),
            (this.rewardType = t.rewardType),
            (this.rewardConfig = t.rewardConfig),
            (this.skuIds = t.skuIds),
            (this.appliesToAllSkus = t.appliesToAllSkus),
            (this.startsAt = t.startsAt),
            (this.endsAt = t.endsAt);
        }
      }
    },
    661492(t, e, s) {
      s.d(e, { TC: () => a, qq: () => o });
      var r = s(575593),
        i = s(993408),
        n = s(772427);
      s(872472);
      var l = s(985018);
      function a(t) {
        var e = t.name;
        switch (t.tenantMetadata?.collectibles?.type) {
          case r.R.AVATAR_DECORATION:
            return l.intl.formatToPlainString(l.t.lvBzLi, { product: e });
          case r.R.PROFILE_EFFECT:
            return l.intl.formatToPlainString(l.t.eR7moP, { product: e });
          case r.R.NAMEPLATE:
            return l.intl.formatToPlainString(l.t.YFOwHj, { product: e });
          default:
            return e;
        }
      }
      function o(t) {
        return (
          !(0, i.G0)(t) &&
          t.type !== r.R.EXTERNAL_SKU &&
          (t.type !== r.R.PROFILE_FRAME ||
            !!(0, n.QW)("isWishlistableCollectiblesProduct"))
        );
      }
    },
    808247(t, e, s) {
      s.d(e, { A: () => k });
      var r = s(574381),
        i = s(636537),
        n = s(228366),
        l = s(803306),
        a = s(845584),
        o = s(419709),
        u = s(723090),
        d = s(841595),
        c = s(287809),
        S = s(615405),
        p = s(954571),
        _ = s(403362),
        h = s(38405),
        I = s(594832),
        A = s(310209),
        E = s(855052),
        f = s(652215);
      function T() {
        let t = {};
        return (
          null != S.A.ipCountryCode && (t.country_code = S.A.ipCountryCode),
          (0, r.m0)()
            ? (t.payment_gateway = f.kM_.GOOGLE)
            : (0, r.un)() && (t.payment_gateway = f.kM_.APPLE),
          t
        );
      }
      function m(t) {
        let e = t.wishlist_items.map((t) => t.sku).filter(_.Vq);
        R(t), y(e), L(t.storefront_pricing, e);
      }
      function R(t) {
        if (null == t.user_discounts) return;
        let e = t.user_discounts.map((t) => o.T.fromServer(t));
        n.h.dispatch({
          type: "WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS",
          userDiscounts: e,
        });
      }
      function y(t) {
        n.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t });
      }
      function L(t, e) {
        null != t &&
          n.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: e.map((t) => t.id) },
            data: (0, u.Oj)(t),
          });
      }
      let k = {
        async fetchWishlist(t, e, s) {
          n.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: t });
          try {
            let r = await i.Bo.get({
              url: f.Rsh.USER_WISHLIST(t),
              query: { source: s ?? I.B5.USER_PROFILE, ...T() },
              rejectWithError: !0,
            });
            r.body?.wishlist_items == null &&
              h.A.captureMessage("Wishlist items not found in response");
            let l = r.body;
            m(l);
            let a = E.Ay.fromServer(l);
            n.h.dispatch({
              type: "WISHLIST_FETCH_SUCCESS",
              wishlistId: t,
              wishlistData: a,
              updatedAt: e,
            });
          } catch (e) {
            n.h.dispatch({
              type: "WISHLIST_FETCH_FAILURE",
              wishlistId: t,
              error: new a.LG(e),
            }),
              h.A.captureException(e);
          }
        },
        async addSkuToWishlist(t, e) {
          let s = null;
          try {
            let r = (s = await i.Bo.post({
              url: f.Rsh.USER_WISHLIST_ITEMS,
              body: { sku_id: t, ...T() },
              rejectWithError: !0,
            })).body;
            m(r);
            let l = E.Ay.fromServer(r);
            if (
              (n.h.dispatch({
                type: "WISHLIST_ADD_SKU_SUCCESS",
                wishlistId: l.id,
                skuId: t,
                wishlistData: l,
              }),
              null != e)
            )
              try {
                let s = (0, E.Lh)(l);
                p.default.track(f.HAw.WISHLIST_UPDATED, {
                  wishlist_id: l.id,
                  action_type: "ADD",
                  sku_id: t,
                  sku_ids: s,
                  location_stack: e,
                });
              } catch (t) {}
          } catch (e) {
            throw (
              (n.h.dispatch({
                type: "WISHLIST_ADD_SKU_FAILURE",
                skuId: t,
                error: new a.LG(e),
              }),
              e)
            );
          }
          if (null == s) return;
          let r = c.default.getCurrentUser();
          if (null != r && null == d.A.getFirstWishlistId(r.id))
            try {
              await (0, l.eO)(r.id);
            } catch {}
        },
        async removeSkuFromWishlist(t, e, s) {
          n.h.dispatch({
            type: "WISHLIST_REMOVE_SKU_START",
            wishlistId: t,
            skuId: e,
          });
          try {
            let r = (
              await i.Bo.del({
                url: f.Rsh.USER_WISHLIST_ITEM(t, e),
                query: { ...T() },
                rejectWithError: !0,
              })
            ).body;
            m(r);
            let l = E.Ay.fromServer(r);
            if (
              (n.h.dispatch({
                type: "WISHLIST_REMOVE_SKU_SUCCESS",
                wishlistId: t,
                skuId: e,
                wishlistData: l,
              }),
              null != s)
            )
              try {
                let t = (0, E.Lh)(l);
                p.default.track(f.HAw.WISHLIST_UPDATED, {
                  wishlist_id: l.id,
                  action_type: "REMOVE",
                  sku_id: e,
                  sku_ids: t,
                  location_stack: s,
                });
              } catch (t) {}
          } catch (s) {
            throw (
              (n.h.dispatch({
                type: "WISHLIST_REMOVE_SKU_FAILURE",
                wishlistId: t,
                skuId: e,
                error: new a.LG(s),
              }),
              s)
            );
          }
        },
        async updateWishlistVisibility(t, e) {
          let s = c.default.getCurrentUser();
          if (null != s)
            try {
              let r = (
                await i.Bo.patch({
                  url: f.Rsh.USER_WISHLIST_PATCH(t),
                  body: { visibility: e, ...T() },
                  rejectWithError: !0,
                })
              ).body;
              m(r),
                n.h.dispatch({
                  type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS",
                  wishlistId: t,
                  visibility: e,
                });
              try {
                await (0, l.eO)(s.id);
              } catch {}
            } catch (e) {
              throw (
                (n.h.dispatch({
                  type: "WISHLIST_UPDATE_VISIBILITY_FAILURE",
                  wishlistId: t,
                  error: new a.LG(e),
                }),
                e)
              );
            }
        },
        async reorderWishlistItem(t, e, s) {
          let {
            previousSkuId: r,
            nextSkuId: l,
            newWishlistData: o,
            analyticsLocations: u,
          } = s;
          n.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: t,
            skuId: e,
            previousSkuId: r,
            nextSkuId: l,
            newWishlistData: o,
          });
          try {
            let s = (
              await i.Bo.patch({
                url: f.Rsh.USER_WISHLIST_ITEM(t, e),
                body: { previous_sku_id: r, next_sku_id: l, ...T() },
                rejectWithError: !0,
              })
            ).body;
            m(s);
            let a = E.Ay.fromServer(s);
            if (
              (n.h.dispatch({
                type: "WISHLIST_REORDER_SUCCESS",
                wishlistId: t,
                wishlistData: a,
              }),
              null != u)
            )
              try {
                let s = (0, E.Lh)(a);
                p.default.track(f.HAw.WISHLIST_UPDATED, {
                  wishlist_id: t,
                  action_type: "REORDER",
                  sku_id: e,
                  sku_ids: s,
                  location_stack: u,
                });
              } catch (t) {}
          } catch (s) {
            n.h.dispatch({
              type: "WISHLIST_REORDER_FAILURE",
              wishlistId: t,
              skuId: e,
              error: new a.LG(s),
            }),
              h.A.captureException(s);
          }
        },
        async fetchWishlistRecommendations(t, e) {
          let s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 20,
            r =
              !(arguments.length > 3) ||
              void 0 === arguments[3] ||
              arguments[3];
          n.h.dispatch({
            type: "WISHLIST_RECOMMENDATIONS_FETCH_START",
            userIds: e,
            applicationIds: t,
          });
          try {
            let l = (
              await i.Bo.get({
                url: f.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                query: {
                  application_ids: t,
                  user_ids: e,
                  max_recommendations: s,
                  localize: r,
                  ...T(),
                },
                rejectWithError: !0,
              })
            ).body;
            R(l), y(l.skus), L(l.storefront_pricing, l.skus);
            let a = A.A.fromServer(l);
            n.h.dispatch({
              type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS",
              userIds: e,
              applicationIds: t,
              data: a,
            });
          } catch (s) {
            h.A.captureException(s),
              n.h.dispatch({
                type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE",
                userIds: e,
                applicationIds: t,
              });
          }
        },
      };
    },
    107563(t, e, s) {
      s.d(e, { A: () => c });
      var r = s(17928),
        i = s(228366),
        n = s(38405),
        l = s(855052);
      let a = {},
        o = () => ({ data: null, status: "not_loaded" });
      function u(t) {
        return (a[t] ??= o());
      }
      class d extends r.Ay.Store {
        get(t) {
          return a[t] ?? o();
        }
        getWishlist(t) {
          return this.get(t).data;
        }
        getWishlistItems(t) {
          let e = this.get(t).data;
          return null != e ? (0, l.Lh)(e) : [];
        }
        hasSkuId(t, e) {
          let s = this.get(t).data;
          return null != s && (0, l.C3)(s, e);
        }
        getStatus(t) {
          return this.get(t).status;
        }
        isFetching(t) {
          return "fetching" === this.getStatus(t);
        }
        hasError(t) {
          return "error" === this.getStatus(t);
        }
        getError(t) {
          return this.get(t).error;
        }
        getUpdatedAt(t) {
          return this.get(t).updatedAt;
        }
        getLastFetchedAt(t) {
          return this.get(t).lastFetchedAt;
        }
      }
      let c = new d(i.h, {
        WISHLIST_FETCH_START: function (t) {
          let { wishlistId: e } = t,
            s = u(e);
          (s.status = "fetching"), (s.error = void 0);
        },
        WISHLIST_FETCH_SUCCESS: function (t) {
          let { wishlistId: e, wishlistData: s, updatedAt: r } = t,
            i = u(e);
          (i.data = s),
            (i.status = "success"),
            (i.error = void 0),
            (i.updatedAt = r),
            (i.lastFetchedAt = Date.now());
        },
        WISHLIST_FETCH_FAILURE: function (t) {
          let { wishlistId: e, error: s } = t,
            r = u(e);
          (r.status = "error"), (r.error = s);
        },
        WISHLIST_ADD_SKU_SUCCESS: function (t) {
          let { wishlistId: e, wishlistData: s } = t,
            r = u(e);
          (r.data = s),
            (r.status = "success"),
            (r.error = void 0),
            (r.lastFetchedAt = Date.now());
        },
        WISHLIST_ADD_SKU_FAILURE: function (t) {
          let { error: e } = t;
          n.A.captureException(e);
        },
        WISHLIST_REMOVE_SKU_START: function (t) {
          let { wishlistId: e, skuId: s } = t,
            r = u(e);
          null != r.data &&
            (r.data = new l.Ay({
              id: r.data.id,
              userId: r.data.userId,
              items: r.data.items.filter((t) => t.skuId !== s),
              applications: r.data.applications,
            }));
        },
        WISHLIST_REMOVE_SKU_SUCCESS: function (t) {
          let { wishlistId: e, wishlistData: s } = t,
            r = u(e);
          (r.data = s),
            (r.status = "success"),
            (r.error = void 0),
            (r.lastFetchedAt = Date.now());
        },
        WISHLIST_REMOVE_SKU_FAILURE: function (t) {
          let { wishlistId: e, error: s } = t;
          (u(e).updatedAt = void 0), n.A.captureException(s);
        },
        WISHLIST_UPDATE_VISIBILITY_SUCCESS: function (t) {
          let { wishlistId: e } = t,
            s = u(e);
          (s.status = "success"),
            (s.error = void 0),
            (s.lastFetchedAt = Date.now());
        },
        WISHLIST_UPDATE_VISIBILITY_FAILURE: function (t) {
          let { error: e } = t;
          n.A.captureException(e);
        },
        WISHLIST_REORDER_START: function (t) {
          let { wishlistId: e, newWishlistData: s } = t;
          u(e).data = s;
        },
        WISHLIST_REORDER_SUCCESS: function (t) {
          let { wishlistId: e, wishlistData: s } = t,
            r = u(e);
          (r.data = s),
            (r.status = "success"),
            (r.error = void 0),
            (r.lastFetchedAt = Date.now());
        },
        WISHLIST_REORDER_FAILURE: function (t) {
          let { wishlistId: e, error: s } = t;
          (u(e).updatedAt = void 0), n.A.captureException(s);
        },
        WISHLIST_ITEM_PURCHASED: function (t) {
          let { recipientId: e, skuId: r } = t,
            i = s(841595).A.getFirstWishlistId(e);
          null != i &&
            null != a[i] &&
            null != a[i].data &&
            (0, l.C3)(a[i].data, r) &&
            (a[i].updatedAt = void 0);
        },
      });
    },
    520606(t, e, s) {
      s.d(e, { A: () => n });
      var r = s(315069),
        i = s(32731);
      class n extends r.A {
        skuId;
        skuProductLine;
        skuName;
        isOwned;
        gifterUserId;
        sku;
        constructor(t) {
          super(),
            (this.skuId = t.sku_id),
            (this.skuProductLine = t.sku_product_line),
            (this.skuName = t.sku_name),
            (this.isOwned = t.is_owned),
            (this.gifterUserId = t.gifter_user_id),
            (this.sku = t.sku);
        }
        static fromServer(t) {
          let {
            sku_id: e,
            sku_product_line: s,
            sku_name: r,
            is_owned: l,
            gifter_user_id: a,
            sku: o,
            ...u
          } = t;
          return new n({
            ...u,
            sku_id: e,
            sku_product_line: s,
            sku_name: r,
            is_owned: l,
            gifter_user_id: a,
            sku: null != o ? i.A.createFromServer(o) : void 0,
          });
        }
      }
    },
    872472(t, e, s) {
      s.d(e, { A: () => p }), s(321073);
      var r = s(575593),
        i = s(898461),
        n = s(474012),
        l = s(837015),
        a = s(203632),
        o = s(892118),
        u = s(32731),
        d = s(520606),
        c = s(652215);
      let S = (t) => {
        switch (t.type) {
          case r.R.AVATAR_DECORATION:
            return i.A.fromServer(t);
          case r.R.PROFILE_EFFECT:
            return a.Ay.fromServer(t);
          case r.R.NAMEPLATE:
            return l.A.fromServer(t);
          case r.R.PROFILE_FRAME:
            return o.A.fromServer(t);
          default:
            return null;
        }
      };
      class p extends d.A {
        collectiblesItem;
        bundleItems;
        constructor(t) {
          if (
            (super(t),
            (this.skuProductLine = c.EZt.COLLECTIBLES),
            null != t.bundle_items)
          ) {
            const e = [];
            for (const s of t.bundle_items) {
              const t = S(s);
              null != t && e.push(t);
            }
            if (0 === e.length) throw Error("Bundle has no valid items");
            this.bundleItems = e;
          } else if (null != t.collectibles_item) {
            const e = S(t.collectibles_item);
            if (null == e) throw Error("Collectibles item not found");
            this.collectiblesItem = e;
          } else if (!t.skipValidation)
            throw Error(
              "Collectibles wishlist item missing both collectibles_item and bundle_items",
            );
        }
        static fromServer(t) {
          return new p({
            ...t,
            sku: null != t.sku ? u.A.createFromServer(t.sku) : void 0,
          });
        }
        static fromSKU(t) {
          let e = (0, n.T)(t);
          if (null == e) return null;
          let s = new p({
            sku_id: t.id,
            sku_product_line: c.EZt.COLLECTIBLES,
            sku_name: t.name,
            sku: t,
            skipValidation: !0,
          });
          return (
            (s.collectiblesItem = "single" === e.type ? e.item : void 0),
            (s.bundleItems = "bundle" === e.type ? e.items : void 0),
            s
          );
        }
      }
    },
    394300(t, e, s) {
      s.d(e, { A: () => a, P: () => l });
      var r = s(32731),
        i = s(520606),
        n = s(652215);
      let l = (t) => t instanceof a;
      class a extends i.A {
        sku;
        constructor(t) {
          super(t), (this.skuProductLine = n.EZt.PREMIUM), (this.sku = t.sku);
        }
        static fromServer(t) {
          let e = r.A.createFromServer(t.sku);
          if (null == e) throw Error("SKU not found");
          return new a({ ...t, sku: e });
        }
        static fromSKU(t) {
          return null == t
            ? null
            : new a({
                sku_id: t.id,
                sku_product_line: n.EZt.PREMIUM,
                sku_name: t.name,
                sku: t,
              });
        }
      }
    },
    721932(t, e, s) {
      s.d(e, { $: () => n, A: () => l });
      var r = s(32731),
        i = s(520606);
      let n = (t) => t instanceof l;
      class l extends i.A {
        sku;
        constructor(t) {
          super(t),
            (this.skuProductLine = t.sku.productLine),
            (this.sku = t.sku);
        }
        static fromServer(t) {
          let e = r.A.createFromServer(t.sku);
          if (null == e) throw Error("SKU not found");
          return new l({ ...t, sku: e });
        }
        static fromSKU(t) {
          return null == t
            ? null
            : new l({
                sku_id: t.id,
                sku_product_line: t.productLine,
                sku_name: t.name,
                sku: t,
              });
        }
      }
    },
    855052(t, e, s) {
      s.d(e, { Ay: () => d, C3: () => S, Lh: () => c, y9: () => p });
      var r = s(315069),
        i = s(395671),
        n = s(520606),
        l = s(872472),
        a = s(394300),
        o = s(721932),
        u = s(652215);
      class d extends r.A {
        id;
        userId;
        items;
        applications;
        constructor(t) {
          super(),
            (this.id = t.id),
            (this.userId = t.userId),
            (this.items = t.items),
            (this.applications = t.applications ?? void 0);
        }
        static fromServer(t) {
          let { user_id: e, wishlist_items: s, ...r } = t,
            c = s.map((t) => {
              switch (t.sku_product_line) {
                case u.EZt.COLLECTIBLES:
                  return l.A.fromServer(t);
                case u.EZt.SOCIAL_LAYER_GAME_ITEM:
                  return o.A.fromServer(t);
                case u.EZt.PREMIUM:
                  return a.A.fromServer(t);
                default:
                  return n.A.fromServer(t);
              }
            });
          return new d({
            ...r,
            userId: e,
            items: c,
            applications:
              r.applications?.map((t) => i.Ay.createFromServer(t)) ?? void 0,
          });
        }
      }
      function c(t) {
        return t.items.map((t) => t.skuId);
      }
      function S(t, e) {
        return t.items.some((t) => t.skuId === e);
      }
      function p(t) {
        return new Set(t.items.map((t) => t.skuProductLine));
      }
    },
    201682(t, e, s) {
      s.d(e, { A: () => r });
      let r =
        "https://cdn.discordapp.com/assets/content/efa46450fd281230370593482b45aba3e85d6ccf82241cae71e2cea4062e0205.svg";
    },
    559758(t, e, s) {
      s.d(e, { y: () => a });
      var r = s(627968);
      s(64700);
      var i = s(661531),
        n = s(996682),
        l = s(27989);
      let a = (t) => {
        let {
            size: e = "md",
            width: s,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
          } = t,
          c = (0, l.J)(e),
          S = c?.width ?? s,
          p = c?.height ?? a;
        return (0, r.jsx)("svg", {
          ...(0, n.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: S,
          height: p,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M12 8.07 10.6 6.7A5 5 0 0 0 6.75 5 3.75 3.75 0 0 0 3 8.75c0 2.32 1.59 4.76 3.87 6.96A31.87 31.87 0 0 0 12 19.67c1.2-.74 3.26-2.14 5.13-3.96 2.28-2.2 3.87-4.64 3.87-6.96A3.75 3.75 0 0 0 17.25 5a5 5 0 0 0-3.85 1.69L12 8.07Zm0-2.8A6.98 6.98 0 0 0 6.75 3 5.75 5.75 0 0 0 1 8.75c0 6.34 8.42 11.73 10.53 12.98.29.17.65.17.94 0C14.57 20.48 23 15.09 23 8.75A5.75 5.75 0 0 0 17.25 3c-2.34 0-3.88.9-5.25 2.26Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=27168.c8ecc2af0c6f7e85.js.map
