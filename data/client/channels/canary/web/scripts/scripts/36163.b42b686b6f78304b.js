"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36163"],
  {
    869038(t, i, e) {
      e.d(i, { A: () => s, G: () => l });
      var _ = e(636537),
        E = e(228366),
        a = e(627363),
        p = e(587895),
        o = e(197111),
        r = e(693477),
        d = e(45938),
        h = e(652215),
        c = e(788868);
      async function l(t) {
        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        E.h.dispatch({ type: "GIFT_CODE_RESOLVE", code: t });
        try {
          let _ = await (0, d.GM)(t, i, e);
          if (null != _.application_id && _.application_id !== c.tv) {
            let t = p.A.getApplication(_.application_id);
            if (null == t)
              try {
                await a.Ay.fetchApplication(_.application_id);
              } catch (t) {}
          }
          return (
            _.application_id === h.FYj && (await (0, r.Jp)(_.sku_id)),
            E.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: _ }),
            { giftCode: _ }
          );
        } catch (i) {
          throw (
            (E.h.dispatch({
              type: "GIFT_CODE_RESOLVE_FAILURE",
              code: t,
              error: i,
            }),
            i)
          );
        }
      }
      let s = {
        resolveGiftCode: l,
        async fetchUserGiftCodesForSKU(t) {
          let i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          E.h.dispatch({
            type: "GIFT_CODES_FETCH",
            skuId: t,
            subscriptionPlanId: i,
          });
          try {
            let e = await _.Bo.get({
              url: h.Rsh.USER_GIFT_CODES,
              query: { sku_id: t, subscription_plan_id: i },
              oldFormErrors: !0,
              rejectWithError: !0,
            });
            E.h.dispatch({
              type: "GIFT_CODES_FETCH_SUCCESS",
              giftCodes: e.body,
              skuId: t,
              subscriptionPlanId: i,
            });
          } catch (e) {
            E.h.dispatch({
              type: "GIFT_CODES_FETCH_FAILURE",
              skuId: t,
              subscriptionPlanId: i,
            });
          }
        },
        async createGiftCode(t) {
          let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          E.h.dispatch({
            type: "GIFT_CODE_CREATE_START",
            skuId: t,
            subscriptionPlanId: i,
          });
          try {
            let a = await _.Bo.post({
              url: h.Rsh.USER_GIFT_CODE_CREATE,
              body: { sku_id: t, subscription_plan_id: i, gift_style: e },
              oldFormErrors: !0,
              rejectWithError: !0,
            });
            return (
              E.h.dispatch({
                type: "GIFT_CODE_CREATE_SUCCESS",
                giftCode: a.body,
              }),
              a.body
            );
          } catch (e) {
            E.h.dispatch({
              type: "GIFT_CODE_CREATE_FAILURE",
              skuId: t,
              subscriptionPlanId: i,
            });
          }
        },
        async revokeGiftCode(t) {
          E.h.dispatch({ type: "GIFT_CODE_REVOKE", code: t });
          try {
            await _.Bo.del({
              url: h.Rsh.USER_GIFT_CODE_REVOKE(t),
              oldFormErrors: !0,
              rejectWithError: !0,
            }),
              E.h.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: t });
          } catch (i) {
            E.h.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: t });
          }
        },
        openNativeGiftCodeModal(t) {
          o.A.openNativeAppModal(t, h.e$_.GIFT_CODE_BROWSER);
        },
        ...e(75255).A,
      };
    },
  },
]);
//# sourceMappingURL=36163.b42b686b6f78304b.js.map
