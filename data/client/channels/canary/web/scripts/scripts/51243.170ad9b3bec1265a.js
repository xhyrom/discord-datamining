"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51243"],
  {
    841702(e, t, r) {
      r.d(t, {
        Ay: () => f,
        Bf: () => d,
        Mv: () => a,
        Wg: () => o,
        b5: () => l,
      });
      var s = r(64700),
        c = r(702841),
        n = r(736056),
        u = r(693477),
        i = r(4227),
        h = r(315949);
      function o() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = (0, c.bG)([n.A], () => n.A.hasLoadedExperiments),
          [r, h, o, l, a, f] = (0, c.yK)([i.A], () => [
            i.A.isFetching,
            i.A.isClaiming,
            i.A.fetchError,
            i.A.claimError,
            i.A.purchases,
            i.A.hasPreviouslyFetched,
          ]),
          d = (0, s.useRef)(i.A.hasPreviouslyFetched);
        (0, s.useEffect)(() => {
          d.current = f;
        }, [f]);
        let A = (0, s.useRef)(i.A.fetchError);
        (0, s.useEffect)(() => {
          A.current = o;
        }, [o]);
        let g = (0, s.useRef)(i.A.isFetching);
        return (
          (0, s.useEffect)(() => {
            g.current = r;
          }, [r]),
          (0, s.useEffect)(() => {
            !t ||
              g.current ||
              (!0 === e && d.current && null == A.current) ||
              (0, u.gB)();
          }, [e, t]),
          {
            isClaiming: h,
            fetchPurchasesError: o,
            claimError: l,
            isFetching: r,
            purchases: a,
            hasPreviouslyFetched: f,
          }
        );
      }
      let l = () => o(!0),
        a = function (e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            { purchases: r } = o(t);
          return null != e ? r.get(e) : void 0;
        };
      function f(e, t) {
        let r = e?.paymentGateway,
          {
            isFetching: s,
            categories: c,
            fetchCategoriesError: n,
            refreshCategories: u,
          } = (0, h.A)(
            {
              paymentGateway: r,
              noOp: e?.noOp,
              logPerf: e?.logPerf,
              countryCode: e?.countryCode,
            },
            t,
          ),
          {
            isClaiming: i,
            fetchPurchasesError: l,
            claimError: a,
            isFetching: f,
            purchases: d,
            hasPreviouslyFetched: A,
          } = o(e?.stalePurchasesOK);
        return {
          isFetching: s || f,
          isFetchingCategories: s,
          isFetchingPurchases: f,
          isClaiming: i,
          categories: c,
          purchases: d,
          fetchCategoriesError: n,
          fetchPurchasesError: l,
          claimError: a,
          refreshCategories: u,
          hasPreviouslyFetched: A,
        };
      }
      let d = (e) => f({ ...(e ?? {}), stalePurchasesOK: !0 });
    },
  },
]);
//# sourceMappingURL=51243.170ad9b3bec1265a.js.map
