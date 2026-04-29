"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93461"],
  {
    862772(e, t, s) {
      let n;
      s.d(t, { Ul: () => L, XQ: () => C, rg: () => b });
      var i = s(64700),
        l = s(735438),
        o = s(17928),
        u = s(171491),
        r = s(841595),
        d = s(576622),
        a = s(495544),
        c = s(927813),
        f = s(403362),
        m = s(808247),
        h = s(228366),
        I = s(773669);
      function A(e, t) {
        if (0 === e.length) throw Error("No user IDs provided");
        return [...e, ...t].join(",");
      }
      let p = {};
      function g() {
        if (n === I.default.locale) return !1;
        (p = {}), (n = I.default.locale);
      }
      class R extends o.Ay.Store {
        initialize() {
          this.waitFor(I.default),
            this.syncWith([I.default], g),
            (n = I.default.locale);
        }
        getRecommendations(e, t) {
          if (0 !== e.length && 0 !== t.length) return p[A(e, t)];
        }
      }
      let k = new R(h.h, {
        LOGOUT: function () {
          p = {};
        },
        WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
          let { userIds: t, applicationIds: s } = e;
          if (0 === t.length || 0 === s.length) return !1;
          let n = A(t, s);
          p = { ...p, [n]: { state: "loading" } };
        },
        WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
          let { userIds: t, applicationIds: s, data: n } = e;
          if (0 === t.length || 0 === s.length) return !1;
          let i = A(t, s);
          p = {
            ...p,
            [i]: { state: "success", data: n, fetchedAt: Date.now() },
          };
        },
        WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
          let { userIds: t, applicationIds: s } = e;
          if (0 === t.length || 0 === s.length) return !1;
          let n = A(t, s);
          if (p[n]?.state === "success") return !1;
          p = { ...p, [n]: { state: "error", fetchedAt: Date.now() } };
        },
      });
      var E = s(310209),
        M = s(96203),
        S = s(760716),
        T = s(652215);
      function O(e) {
        let t = (0, M.A)({ userId: e }),
          s = (0, S.i)((e) => e.recommendationApplicationIds);
        return i.useMemo(
          () => (0, l.uniq)([T.FYj, ...t, ...(s ?? [])]).sort(),
          [t, s],
        );
      }
      var _ = s(594832);
      let W = 30 * c.A.Millis.MINUTE,
        w = {
          state: "success",
          data: new E.A({
            skus: [],
            skus_to_user_and_reason: {},
            applications: [],
          }),
          fetchedAt: 0,
        };
      function U(e) {
        let {
            userIdsAndWishlistIds: t,
            numItems: s,
            applicationIds: n,
            source: r = _.B5.USER_PROFILE,
            filterByApplicationIds: d = !1,
          } = e,
          c = (function (e) {
            let { userIds: t, numItems: s, applicationIds: n } = e,
              l = (0, o.bG)([k], () => k.getRecommendations(t, n));
            return (i.useEffect(() => {
              if (0 === t.length || 0 === n.length) return;
              let e = k.getRecommendations(t, n);
              if (null != e) {
                if ("loading" === e.state) return;
                let t = e.fetchedAt < Date.now() - W,
                  n = "success" === e.state && e.data.skus.length >= s;
                if (!t && n) return;
              }
              m.A.fetchWishlistRecommendations(n, t, s);
            }, [t, n, s]),
            0 === t.length || 0 === n.length)
              ? w
              : l;
          })({
            userIds: i.useMemo(
              () =>
                t.map((e) => {
                  let { userId: t } = e;
                  return t;
                }),
              [t],
            ),
            numItems: s,
            applicationIds: n,
          }),
          {
            sortedWishlistSkus: h,
            wishlistSkuIdToSku: I,
            wishlistSkusToUserAndReasonMap: A,
            wishlistsAreFetching: p,
            wishlistErrors: g,
          } = (function (e) {
            let {
                userIdsAndWishlistIds: t,
                source: s,
                applicationIdsFilter: n,
              } = e,
              l = (0, o.bG)([a.default], () => a.default.getId()),
              {
                wishlists: u,
                isFetching: r,
                errors: d,
              } = (0, _.sv)({ wishlistIdsAndUsers: t, source: s }),
              c = i.useMemo(() => {
                let e = u.filter(f.Vq),
                  t = {};
                for (let s of e)
                  for (let e of s.items)
                    null != e.sku &&
                      !e.isOwned &&
                      (null == n || n.includes(e.sku.applicationId)) &&
                      (t[e.skuId] = {
                        ...(null != t[e.skuId] ? t[e.skuId] : {}),
                        [s.userId]: E.j.WISHLIST,
                      });
                return t;
              }, [u, n]),
              m = i.useMemo(
                () =>
                  Object.fromEntries(
                    u
                      .filter(f.Vq)
                      .flatMap((e) => e.items)
                      .filter(
                        (e) =>
                          null != e &&
                          null != e.sku &&
                          !e.isOwned &&
                          (null == n || n.includes(e.sku.applicationId)),
                      )
                      .map((e) => [e.skuId, e.sku]),
                  ),
                [u, n],
              );
            return {
              sortedWishlistSkus: i.useMemo(
                () =>
                  Object.keys(m)
                    .sort((e, t) => {
                      let s = c[t] ?? {},
                        n = c[e] ?? {},
                        i = Object.keys(s).length - Object.keys(n).length;
                      if (0 !== i) return i;
                      let o = !!s[l];
                      return Number(!!n[l]) - Number(o);
                    })
                    .map((e) => m[e]),
                [l, m, c],
              ),
              wishlistSkuIdToSku: m,
              wishlistSkusToUserAndReasonMap: c,
              wishlistsAreFetching: r,
              wishlistErrors: d,
            };
          })({
            userIdsAndWishlistIds: t,
            source: r,
            applicationIdsFilter: d ? n : void 0,
          }),
          {
            filteredRecommendations: R,
            skusToUserAndReasonRecommendations: M,
          } = i.useMemo(
            () =>
              null == c || "success" !== c.state
                ? {
                    filteredRecommendations: [],
                    skusToUserAndReasonRecommendations: {},
                  }
                : {
                    filteredRecommendations: c.data.skus.filter(
                      (e) => !(e.id in I),
                    ),
                    skusToUserAndReasonRecommendations:
                      c.data.skusToUserAndReason,
                  },
            [c, I],
          ),
          { combinedSkus: S, combinedSkusToUserAndReason: T } =
            i.useMemo(() => {
              let e = { ...M };
              for (let [t, s] of Object.entries(A)) e[t] = { ...e[t], ...s };
              return {
                combinedSkus: [...h, ...R],
                combinedSkusToUserAndReason: e,
              };
            }, [h, R, A, M]),
          O = i.useMemo(
            () =>
              p || null == c || (null != c && "loading" === c.state)
                ? "loading"
                : g.filter(f.Vq).length > 0 || "error" === c.state
                  ? "error"
                  : "success",
            [p, c, g],
          ),
          U = i.useMemo(
            () => (0, l.uniq)([...R.map((e) => e.id), ...S.map((e) => e.id)]),
            [R, S],
          );
        return (
          (0, u.j)({
            skuIds: U,
            location: "useWishlistRecommendationsWithWishlists",
          }),
          {
            recommendations: R,
            wishlistAndRecommendations: S,
            skusToUserAndReason: T,
            status: O,
          }
        );
      }
      function F(e) {
        i.useEffect(() => {
          (0, d.A)(e);
        }, [e]);
        let { defaultWishlistId: t } = (0, o.cf)([r.A], () => ({
          defaultWishlistId: r.A.getFirstWishlistId(e),
        }));
        return {
          userIdsAndWishlistIds: i.useMemo(
            () => [{ userId: e, wishlistId: t }],
            [e, t],
          ),
          defaultWishlistId: t,
        };
      }
      function b(e) {
        let { userId: t, numItems: s, source: n = _.B5.USER_PROFILE } = e,
          { userIdsAndWishlistIds: l, defaultWishlistId: o } = F(t),
          {
            wishlistAndRecommendations: u,
            skusToUserAndReason: r,
            status: d,
          } = U({
            userIdsAndWishlistIds: l,
            applicationIds: O(t),
            numItems: s,
            source: n,
          }),
          {
            totalUnownedWishlistItemCount: a,
            slicedWishlistAndRecommendations: c,
          } = (function (e) {
            let {
              wishlistAndRecommendations: t,
              skusToUserAndReason: s,
              userId: n,
              numItems: l,
            } = e;
            return {
              totalUnownedWishlistItemCount: i.useMemo(
                () =>
                  t.filter(
                    (e) => null != s[e.id] && s[e.id][n] === E.j.WISHLIST,
                  ).length,
                [t, n, s],
              ),
              slicedWishlistAndRecommendations: i.useMemo(
                () => t.slice(0, l),
                [t, l],
              ),
            };
          })({
            wishlistAndRecommendations: u,
            skusToUserAndReason: r,
            userId: t,
            numItems: s,
          });
        return {
          wishlistAndRecommendations: c,
          skusToUserAndReason: r,
          status: d,
          defaultWishlistId: o,
          totalUnownedWishlistItemCount: a,
        };
      }
      function C(e) {
        var t;
        let s,
          {
            applicationIds: n,
            userIds: l,
            numItems: u,
            source: a = _.B5.USER_PROFILE,
          } = e,
          {
            wishlistAndRecommendations: c,
            skusToUserAndReason: f,
            status: m,
          } = U({
            userIdsAndWishlistIds:
              ((t = i.useMemo(() => l?.slice(0, 5), [l])),
              i.useEffect(() => {
                t.forEach((e) => {
                  (0, d.A)(e);
                });
              }, [t]),
              (s = (0, o.yK)([r.A], () =>
                t.map((e) => r.A.getFirstWishlistId(e) ?? null),
              )),
              i.useMemo(
                () => t.map((e, t) => ({ userId: e, wishlistId: s[t] })),
                [t, s],
              )),
            applicationIds: n,
            numItems: u,
            source: a,
            filterByApplicationIds: !0,
          });
        return {
          recommendations: i.useMemo(() => c.slice(0, u), [c, u]),
          skusToUserAndReason: f,
          status: m,
        };
      }
      function L(e) {
        let { userId: t, numItems: s, source: n = _.B5.USER_PROFILE } = e,
          { userIdsAndWishlistIds: l } = F(t),
          {
            recommendations: o,
            skusToUserAndReason: u,
            status: r,
          } = U({
            userIdsAndWishlistIds: l,
            applicationIds: O(t),
            numItems: s,
            source: n,
          });
        return {
          recommendations: i.useMemo(() => o.slice(0, s), [o, s]),
          skusToUserAndReason: u,
          status: r,
        };
      }
    },
  },
]);
//# sourceMappingURL=93461.bf9b212e4bc61754.js.map
