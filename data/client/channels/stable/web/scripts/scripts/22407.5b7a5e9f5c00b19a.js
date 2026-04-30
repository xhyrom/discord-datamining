"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22407"],
  {
    171491(t, e, i) {
      i.d(e, { x: () => k, j: () => y });
      var l = i(64700),
        n = i(636537),
        a = i(228366),
        d = i(615405),
        u = i(927813),
        o = i(561573);
      i(918467);
      var s = i(723090),
        c = i(970207);
      i(65238);
      var r = i(652215);
      u.A.Millis.HOUR;
      let p = 10 * u.A.Millis.MINUTE;
      function h(t, e) {
        return t?.type === "error" ? p : (0, c.g6)({ location: e });
      }
      async function I(t) {
        let { applicationId: e, location: i } = t;
        await S({ type: "application", applicationId: e }, i);
      }
      async function f(t) {
        let { skuIds: e, location: i } = t;
        await S({ type: "skus", skuIds: e }, i);
      }
      async function S(t, e) {
        let {
          shouldFetch: i,
          filteredSkuIds: l,
          applicationId: u,
        } = (function (t, e) {
          if (!(0, c.yS)({ location: e }))
            return { shouldFetch: !1, filteredSkuIds: [], applicationId: null };
          if ("application" === t.type) {
            let i = o.A.getFetchStateForApplicationId(t.applicationId),
              l = h(i, e);
            return null != i &&
              ("loading" === i.type || i.fetchedAt > Date.now() - l)
              ? {
                  shouldFetch: !1,
                  filteredSkuIds: [],
                  applicationId: t.applicationId,
                }
              : {
                  shouldFetch: !0,
                  filteredSkuIds: [],
                  applicationId: t.applicationId,
                };
          }
          {
            let i = t.skuIds
              .filter((t) => {
                let i = o.A.getFetchStateForSkuId(t);
                if (null == i) return !0;
                let l = h(i, e);
                return "loading" !== i.type && i.fetchedAt < Date.now() - l;
              })
              .sort((t, e) => {
                let i = o.A.getFetchStateForSkuId(t),
                  l = o.A.getFetchStateForSkuId(e);
                return null == i && null != l ? -1 : +(null != i && null == l);
              });
            return 0 === i.length
              ? { shouldFetch: !1, filteredSkuIds: [], applicationId: null }
              : {
                  shouldFetch: !0,
                  filteredSkuIds: i.slice(0, 50),
                  applicationId: null,
                };
          }
        })(t, e);
        if (!i) return;
        let p =
          null != u
            ? { type: "application", applicationId: u }
            : { type: "skus", skuIds: l };
        try {
          a.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: p });
          let t = (
            await n.Bo.get({
              url: r.Rsh.STOREFRONT_PRICES,
              query: {
                ...(null != u ? { application_id: u } : { sku_ids: l }),
                country_code: d.A.ipCountryCode ?? void 0,
              },
              rejectWithError: !0,
            })
          ).body;
          a.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: p,
            data: (0, s.Oj)(t),
          });
        } catch {
          a.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: p });
        }
      }
      function k(t) {
        let { applicationId: e, location: i } = t;
        l.useEffect(() => {
          null != e && I({ applicationId: e, location: i });
        }, [e, i]);
      }
      function y(t) {
        let { skuIds: e, location: i } = t;
        l.useEffect(() => {
          0 !== e.length && f({ skuIds: e, location: i });
        }, [e, i]);
      }
    },
    909536(t, e, i) {
      i.d(e, { Gh: () => n, St: () => a });
      let l = (0, i(945810).mj)({
        name: "2026-03-wishlisting-nitro",
        kind: "user",
        defaultConfig: { isEnabled: !1, isRoadblocksEnabled: !1 },
        variations: {
          0: { isEnabled: !1, isRoadblocksEnabled: !1 },
          1: { isEnabled: !0, isRoadblocksEnabled: !1 },
          2: { isEnabled: !0, isRoadblocksEnabled: !0 },
        },
      });
      function n(t) {
        return l.useConfig({ location: t }).isEnabled;
      }
      function a(t) {
        return l.useConfig({ location: t }).isRoadblocksEnabled;
      }
    },
  },
]);
//# sourceMappingURL=22407.5b7a5e9f5c00b19a.js.map
