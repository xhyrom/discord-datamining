"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6288"],
  {
    158032(t, e, r) {
      r.d(e, {
        B1: () => l,
        ET: () => _,
        Ir: () => d,
        U: () => p,
        r6: () => h,
        uK: () => y,
      });
      var n = r(284009),
        i = r.n(n),
        s = r(228366),
        a = r(323082),
        c = r(501957),
        o = r(927578),
        u = r(652215);
      async function l(t) {
        let {
          planId: e,
          currency: r,
          paymentSource: n,
          trialId: i,
          code: c,
          metadata: o,
          referralCode: u,
          loadId: l,
          expectedInvoicePrice: d,
          expectedRenewalPrice: p,
        } = t;
        s.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_START" });
        try {
          let t = await a.Ky({
            items: [{ planId: e, quantity: 1 }],
            paymentSource: n,
            trialId: i,
            code: c,
            currency: r,
            metadata: o,
            referralCode: u,
            loadId: l,
            expectedInvoicePrice: d,
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
      async function d(t, e, r, n, l, d) {
        try {
          let p = (0, o.EL)(t);
          i()(p, "Expected existing premium plan");
          let h = (0, o.GX)(t, p.planId),
            y = void 0 !== r ? r.toLowerCase() : t.currency;
          (0, c.U)(t, e, d),
            await a.nV(
              t,
              { status: u.Dmq.ACTIVE, paymentSource: n, items: h, currency: r },
              { amount: 0, currency: y },
              (0, o.UC)(h, y, n?.id),
              e,
              l,
              d,
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
          await a.nV(
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
      async function h(t, e, r, n, i) {
        try {
          await a.r6(t, e, r, n, i),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (t) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: t }), t)
          );
        }
      }
      async function y(t, e, r, n, i, c) {
        try {
          await a.uK(t, e, r, n, i, c),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (t) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: t }), t)
          );
        }
      }
      function _() {
        s.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
      }
    },
    686757(t, e, r) {
      r.d(e, {
        SD: () => d,
        Vm: () => o,
        eE: () => l,
        g$: () => p,
        u5: () => u,
        uJ: () => h,
      });
      var n = r(265690),
        i = r(110259),
        s = r(121894);
      let a = Object.freeze({ debugTrackedData: null, impressions: [] }),
        c = (0, n.h)((t) => a),
        o = (t) => {
          (0, s.r)(() => {
            c.setState((e) => ({ impressions: [...e.impressions, t] }));
          });
        },
        u = (t) => {
          (0, s.r)(() => {
            c.setState((e) => ({
              impressions: e.impressions.filter(
                (e) => e.sequenceId !== t.sequenceId,
              ),
            }));
          });
        },
        l = (t, e) => {
          (0, s.r)(() => {
            c.setState(() => ({ debugTrackedData: { name: t, ...e } }));
          });
        },
        d = c;
      function p() {
        let t = {};
        return (
          c.getState().impressions.forEach((e) => {
            e.type === i.ImpressionTypes.PAGE
              ? (t.page = e.name)
              : (t.section = e.name);
          }),
          t
        );
      }
      function h() {
        return c.getState().impressions;
      }
    },
    871162(t, e, r) {
      r.d(e, { l: () => n });
      let n = (0, r(64700).createContext)({ overrideSettings: !1 });
    },
    826469(t, e, r) {
      r.d(e, { A: () => i }), r(938796);
      var n = r(202613);
      class i {
        source;
        enabled;
        allowedCurrencies;
        relocationCountry;
        relocationCurrencyCode;
        willForfeitGiftCardBalance;
        constructor(t, e, r, n) {
          (this.source = t),
            (this.enabled = e),
            (this.allowedCurrencies = r),
            (this.relocationCountry = n?.country ?? null),
            (this.relocationCurrencyCode = n?.currencyCode ?? null),
            (this.willForfeitGiftCardBalance =
              n?.willForfeitGiftCardBalance ?? !1);
        }
        get id() {
          return this.source.id;
        }
        get type() {
          return this.source.type;
        }
        get paymentGateway() {
          return this.source.paymentGateway;
        }
        get isDefault() {
          return this.source.isDefault;
        }
        static createFromCheckoutContext(t) {
          let e = {
            id: t.id,
            type: t.type,
            invalid: t.invalid,
            flags: t.flags,
            default: t.default,
            country: t.country,
            payment_gateway: t.payment_gateway,
            billing_address: t.billing_address ?? {},
            brand: t.brand,
            last_4: t.last_4,
            expires_month: t.expires_month,
            expires_year: t.expires_year,
            email: t.email,
            username: t.username,
            bank: t.bank,
          };
          return new i(
            n.Ay.createFromServer(e),
            t.enabled,
            t.allowed_currencies ?? [],
            {
              country: t.relocation_info?.country ?? null,
              currencyCode: t.relocation_info?.currency ?? null,
              willForfeitGiftCardBalance:
                t.relocation_info?.will_forfeit_gift_card_balance ?? !1,
            },
          );
        }
      }
    },
    570221(t, e, r) {
      r.d(e, { A: () => s });
      var n = r(315069),
        i = r(874638);
      class s extends n.A {
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
            invoiceItems: t.invoice_items?.map(i.c),
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
            invoiceItems: t.invoice_items?.map(i.c),
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
      let n;
      r.d(e, { A: () => a }), r(321073), (n = r(4472).A);
      let i = [],
        s = !1,
        a = {
          ...n,
          awaitOnline: () =>
            new Promise((t) => {
              if (n.isOnline()) return t();
              {
                if ((i.push(t), s)) return;
                s = !0;
                let e = () => {
                  i.forEach((t) => t()),
                    (i.length = 0),
                    (s = !1),
                    n.removeOnlineCallback(e);
                };
                n.addOnlineCallback(e);
              }
            }),
        };
    },
    83617(t, e, r) {
      r.d(e, { Yk: () => m, _w: () => y, c_: () => h, jJ: () => _ });
      var n = r(64700),
        i = r(284009),
        s = r.n(i),
        a = r(228366),
        c = r(73825),
        o = r(160946),
        u = r(97352),
        l = r(927578),
        d = r(652215),
        p = r(788868);
      function h(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [...p.oz];
        return null == t || u.A.hasPaymentSourceForSKUIds(t, e)
          ? Promise.resolve()
          : new Promise((t, r) => {
              a.h.wait(async () => {
                try {
                  await (0, c.jv)(e), t();
                } catch (t) {
                  r(t);
                }
              });
            });
      }
      function y(t, e, r) {
        let n,
          i = [],
          a = { purchaseType: r ? d.lid.GIFT : d.lid.DEFAULT };
        return (
          (n = "string" == typeof t ? u.A.get(t) : t),
          s()(n, "subscription plan not loaded"),
          null != e &&
            u.A.hasPaymentSourceForSKUId(e, n.skuId) &&
            (a.paymentSourceId = e),
          (i = (0, l.pb)(n.id, a).map((t) => t.currency)).length < 1 &&
            (i = [d.Yri.USD]),
          i
        );
      }
      function _(t, e, r) {
        let n = u.A.get(t);
        return s()(null != n, "plan is undefined"), y(n, r, !1).includes(e);
      }
      function m(t) {
        let {
            initialCurrency: e,
            subscriptionPlanId: r,
            paymentSourceId: i,
            isGift: s,
            skuIDs: a,
            excludeSubscriptionPlansBySKU: c,
          } = t,
          [u, l] = n.useReducer(
            (t, e) => ({ ...t, ...e }),
            null != i
              ? { paymentSourceId: i, currency: e, loaded: !1 }
              : { currency: e, loaded: !1 },
          ),
          d = (0, o.Y)(a),
          p = JSON.stringify(a),
          y = n.useRef(a);
        n.useEffect(() => {
          y.current = a;
        }),
          n.useEffect(() => {
            (async () => {
              let { current: t } = y;
              try {
                t.length > 0 && !c && (await h(i, t));
              } catch (t) {
                if (10027 !== t.code) throw t;
              }
              l({ paymentSourceId: i, currency: void 0, loaded: !0 });
            })();
          }, [i, p, r, s, d, c]);
        let _ = u.paymentSourceId !== i || null == r || !d || !0 !== u.loaded;
        return {
          hasFetchedSubscriptionPlans: d,
          priceOptions: u,
          setCurrency: (t) => {
            l({ currency: t });
          },
          currencyLoading: _,
        };
      }
    },
  },
]);
//# sourceMappingURL=6288.c1b1ab380ee2beb3.js.map
