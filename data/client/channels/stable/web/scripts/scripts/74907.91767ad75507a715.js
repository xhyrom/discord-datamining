"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74907"],
  {
    800342(S, t, r) {
      r.d(t, { JI: () => p, QB: () => T });
      var i = r(228366);
      r(587895);
      var s = r(977445),
        _ = r(67480);
      r(328968);
      var h = r(371794),
        e = r(652215);
      function p(S) {
        return (0, h.aP)({
          url: e.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
          query: { application_id: S },
          oldFormErrors: !0,
          rejectWithError: !1,
        }).then(
          (S) => (
            i.h.dispatch({
              type: "STORE_LISTINGS_FETCH_SUCCESS",
              storeListings: S.body.map((S) => ({ ...S, published: !0 })),
            }),
            S.body
          ),
        );
      }
      function T(S) {
        let t = _.A.get(S),
          r = null != t && (0, s.F)(t.applicationId);
        return (
          i.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: S }),
          (0, h.aP)({
            url: r
              ? e.Rsh.STORE_LISTINGS_SKU(S)
              : e.Rsh.STORE_PUBLISHED_LISTINGS_SKU(S),
            rejectWithError: !1,
          })
            .then((S) => {
              r
                ? i.h.dispatch({
                    type: "STORE_LISTINGS_FETCH_SUCCESS",
                    storeListings: S.body,
                  })
                : i.h.dispatch({
                    type: "STORE_LISTING_FETCH_SUCCESS",
                    storeListing: S.body,
                  });
            })
            .catch(() => {
              i.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: S });
            })
        );
      }
    },
  },
]);
//# sourceMappingURL=74907.91767ad75507a715.js.map
