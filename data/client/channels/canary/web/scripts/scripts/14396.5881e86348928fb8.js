"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14396"],
  {
    75255(t, e, r) {
      r.d(e, { A: () => _ });
      var E = r(636537),
        c = r(228366),
        a = r(845584),
        o = r(739508),
        h = r(652215);
      let i = Object.freeze({}),
        _ = {
          redeemGiftCode: async function (t) {
            let { code: e, options: r = i, onRedeemed: _, onError: d } = t,
              { channelId: p = null, paymentSource: s = null } = r;
            c.h.dispatch({ type: "GIFT_CODE_REDEEM", code: e });
            try {
              let t = await E.Bo.post({
                url: h.Rsh.GIFT_CODE_REDEEM(e),
                body: {
                  channel_id: p,
                  payment_source_id: s?.id,
                  gateway_checkout_context: await (0, o.ob)(s),
                },
                oldFormErrors: !0,
                rejectWithError: !1,
              });
              return (
                c.h.dispatch({
                  type: "GIFT_CODE_REDEEM_SUCCESS",
                  code: e,
                  entitlement: t.body,
                }),
                _?.(),
                { code: e, entitlement: t }
              );
            } catch (r) {
              let t = new a.Ey(r);
              throw (
                (c.h.dispatch({
                  type: "GIFT_CODE_REDEEM_FAILURE",
                  code: e,
                  error: t,
                }),
                d?.(t),
                t)
              );
            }
          },
        };
    },
  },
]);
//# sourceMappingURL=14396.5881e86348928fb8.js.map
