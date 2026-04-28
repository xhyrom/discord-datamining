"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48396"],
  {
    158032(t, e, r) {
      r.d(e, {
        B1: () => d,
        ET: () => E,
        Ir: () => l,
        U: () => p,
        r6: () => h,
        uK: () => y,
      });
      var i = r(284009),
        n = r.n(i),
        s = r(228366),
        c = r(323082),
        a = r(501957),
        o = r(927578),
        u = r(652215);
      async function d(t) {
        let {
          planId: e,
          currency: r,
          paymentSource: i,
          trialId: n,
          code: a,
          metadata: o,
          referralCode: u,
          loadId: d,
          expectedInvoicePrice: l,
          expectedRenewalPrice: p,
        } = t;
        s.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_START" });
        try {
          let t = await c.Ky({
            items: [{ planId: e, quantity: 1 }],
            paymentSource: i,
            trialId: n,
            code: a,
            currency: r,
            metadata: o,
            referralCode: u,
            loadId: d,
            expectedInvoicePrice: l,
            expectedRenewalPrice: p,
          });
          return (
            null != t.subscription &&
              s.h.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
                subscription: t.subscription,
              }),
            t
          );
        } catch (t) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", error: t }),
            t)
          );
        }
      }
      async function l(t, e, r, i, d, l) {
        try {
          let p = (0, o.EL)(t);
          n()(p, "Expected existing premium plan");
          let h = (0, o.GX)(t, p.planId),
            y = void 0 !== r ? r.toLowerCase() : t.currency;
          (0, a.U)(t, e, l),
            await c.nV(
              t,
              { status: u.Dmq.ACTIVE, paymentSource: i, items: h, currency: r },
              { amount: 0, currency: y },
              (0, o.UC)(h, y, i?.id),
              e,
              d,
              l,
            ),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (t) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: t }), t)
          );
        }
      }
      async function p(t, e, r) {
        try {
          await c.nV(
            t,
            { status: u.Dmq.ACTIVE },
            { amount: 0, currency: t.currency },
            (0, o.UC)(t.items, t.currency, t.paymentSourceId),
            e,
            r,
          );
        } catch (t) {
          throw t;
        }
      }
      async function h(t, e, r, i, n) {
        try {
          await c.r6(t, e, r, i, n),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (t) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: t }), t)
          );
        }
      }
      async function y(t, e, r, i, n, a) {
        try {
          await c.uK(t, e, r, i, n, a),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (t) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: t }), t)
          );
        }
      }
      function E() {
        s.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
      }
    },
    686757(t, e, r) {
      r.d(e, {
        SD: () => l,
        Vm: () => o,
        eE: () => d,
        g$: () => p,
        u5: () => u,
        uJ: () => h,
      });
      var i = r(265690),
        n = r(110259),
        s = r(121894);
      let c = Object.freeze({ debugTrackedData: null, impressions: [] }),
        a = (0, i.h)((t) => c),
        o = (t) => {
          (0, s.r)(() => {
            a.setState((e) => ({ impressions: [...e.impressions, t] }));
          });
        },
        u = (t) => {
          (0, s.r)(() => {
            a.setState((e) => ({
              impressions: e.impressions.filter(
                (e) => e.sequenceId !== t.sequenceId,
              ),
            }));
          });
        },
        d = (t, e) => {
          (0, s.r)(() => {
            a.setState(() => ({ debugTrackedData: { name: t, ...e } }));
          });
        },
        l = a;
      function p() {
        let t = {};
        return (
          a.getState().impressions.forEach((e) => {
            e.type === n.ImpressionTypes.PAGE
              ? (t.page = e.name)
              : (t.section = e.name);
          }),
          t
        );
      }
      function h() {
        return a.getState().impressions;
      }
    },
    871162(t, e, r) {
      r.d(e, { l: () => i });
      let i = (0, r(64700).createContext)({ overrideSettings: !1 });
    },
    570221(t, e, r) {
      r.d(e, { A: () => s });
      var i = r(315069),
        n = r(874638);
      class s extends i.A {
        id;
        invoiceItems;
        total;
        subtotal;
        currency;
        tax;
        taxInclusive;
        subscriptionPeriodStart;
        subscriptionPeriodEnd;
        status;
        orbsReward;
        checkoutContext;
        static createInvoiceFromServer(t) {
          return new s({
            id: t.id,
            invoiceItems: t.invoice_items?.map(n.c),
            total: t.total,
            subtotal: t.subtotal,
            currency: t.currency,
            tax: t.tax,
            taxInclusive: t.tax_inclusive,
            subscriptionPeriodStart: new Date(t.subscription_period_start),
            subscriptionPeriodEnd: new Date(t.subscription_period_end),
            status: t.status,
            orbsReward: t.orbs_reward,
            checkoutContext: t.checkout_context,
          });
        }
        static createFromOTPPreview(t) {
          return new s({
            id: "",
            invoiceItems: t.invoice_items?.map(n.c),
            total: t.amount,
            subtotal: t.subtotal,
            currency: t.currency,
            tax: t.tax,
            taxInclusive: t.tax_inclusive,
            subscriptionPeriodStart: new Date(0),
            subscriptionPeriodEnd: new Date(0),
            orbsReward: t.orbs_reward,
            checkoutContext: t.checkout_context,
          });
        }
        constructor(t) {
          super(),
            (this.id = t.id),
            (this.invoiceItems = t.invoiceItems ?? []),
            (this.total = t.total),
            (this.subtotal = t.subtotal),
            (this.currency = t.currency),
            (this.tax = t.tax),
            (this.taxInclusive = t.taxInclusive),
            (this.subscriptionPeriodStart = t.subscriptionPeriodStart),
            (this.subscriptionPeriodEnd = t.subscriptionPeriodEnd),
            (this.status = t.status),
            (this.orbsReward = t.orbsReward),
            (this.checkoutContext = t.checkoutContext);
        }
        findInvoiceItemByPlanId(t) {
          return (
            this.invoiceItems.find((e) => e.subscriptionPlanId === t) ?? null
          );
        }
        getDiscountIdIfExists() {
          let t = this.invoiceItems.find((t) => t.discounts.length > 0);
          if (null == t || 0 === t.discounts.length) return;
          let e = t.discounts[0];
          if (null != e) return e.discount_id;
        }
      }
    },
    757811(t, e, r) {
      r.r(e);
    },
    209489(t, e, r) {
      let i;
      r.d(e, { A: () => c }), r(321073), (i = r(4472).A);
      let n = [],
        s = !1,
        c = {
          ...i,
          awaitOnline: () =>
            new Promise((t) => {
              if (i.isOnline()) return t();
              {
                if ((n.push(t), s)) return;
                s = !0;
                let e = () => {
                  n.forEach((t) => t()),
                    (n.length = 0),
                    (s = !1),
                    i.removeOnlineCallback(e);
                };
                i.addOnlineCallback(e);
              }
            }),
        };
    },
    83617(t, e, r) {
      r.d(e, { Yk: () => I, _w: () => y, c_: () => h, jJ: () => E });
      var i = r(64700),
        n = r(284009),
        s = r.n(n),
        c = r(228366),
        a = r(73825),
        o = r(160946),
        u = r(97352),
        d = r(927578),
        l = r(652215),
        p = r(788868);
      function h(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [...p.oz];
        return null == t || u.A.hasPaymentSourceForSKUIds(t, e)
          ? Promise.resolve()
          : new Promise((t, r) => {
              c.h.wait(async () => {
                try {
                  await (0, a.jv)(e), t();
                } catch (t) {
                  r(t);
                }
              });
            });
      }
      function y(t, e, r) {
        let i,
          n = [],
          c = { purchaseType: r ? l.lid.GIFT : l.lid.DEFAULT };
        return (
          (i = "string" == typeof t ? u.A.get(t) : t),
          s()(i, "subscription plan not loaded"),
          null != e &&
            u.A.hasPaymentSourceForSKUId(e, i.skuId) &&
            (c.paymentSourceId = e),
          (n = (0, d.pb)(i.id, c).map((t) => t.currency)).length < 1 &&
            (n = [l.Yri.USD]),
          n
        );
      }
      function E(t, e, r) {
        let i = u.A.get(t);
        return s()(null != i, "plan is undefined"), y(i, r, !1).includes(e);
      }
      function I(t) {
        let {
            initialCurrency: e,
            subscriptionPlanId: r,
            paymentSourceId: n,
            isGift: s,
            skuIDs: c,
            excludeSubscriptionPlansBySKU: a,
          } = t,
          [u, d] = i.useReducer(
            (t, e) => ({ ...t, ...e }),
            null != n
              ? { paymentSourceId: n, currency: e, loaded: !1 }
              : { currency: e, loaded: !1 },
          ),
          l = (0, o.Y)(c),
          p = JSON.stringify(c),
          y = i.useRef(c);
        i.useEffect(() => {
          y.current = c;
        }),
          i.useEffect(() => {
            (async () => {
              let { current: t } = y;
              try {
                t.length > 0 && !a && (await h(n, t));
              } catch (t) {
                if (10027 !== t.code) throw t;
              }
              d({ paymentSourceId: n, currency: void 0, loaded: !0 });
            })();
          }, [n, p, r, s, l, a]);
        let E = u.paymentSourceId !== n || null == r || !l || !0 !== u.loaded;
        return {
          hasFetchedSubscriptionPlans: l,
          priceOptions: u,
          setCurrency: (t) => {
            d({ currency: t });
          },
          currencyLoading: E,
        };
      }
    },
  },
]);
//# sourceMappingURL=48396.1820055dffbd093b.js.map
