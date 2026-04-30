"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61576"],
  {
    158032(e, t, r) {
      r.d(t, {
        B1: () => l,
        ET: () => _,
        Ir: () => d,
        U: () => h,
        r6: () => p,
        uK: () => y,
      });
      var i = r(284009),
        n = r.n(i),
        s = r(228366),
        a = r(323082),
        o = r(501957),
        c = r(927578),
        u = r(652215);
      async function l(e) {
        let {
          planId: t,
          currency: r,
          paymentSource: i,
          trialId: n,
          code: o,
          metadata: c,
          referralCode: u,
          loadId: l,
          expectedInvoicePrice: d,
          expectedRenewalPrice: h,
        } = e;
        s.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_START" });
        try {
          let e = await a.Ky({
            items: [{ planId: t, quantity: 1 }],
            paymentSource: i,
            trialId: n,
            code: o,
            currency: r,
            metadata: c,
            referralCode: u,
            loadId: l,
            expectedInvoicePrice: d,
            expectedRenewalPrice: h,
          });
          return (
            null != e.subscription &&
              s.h.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
                subscription: e.subscription,
              }),
            e
          );
        } catch (e) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", error: e }),
            e)
          );
        }
      }
      async function d(e, t, r, i, l, d) {
        try {
          let h = (0, c.EL)(e);
          n()(h, "Expected existing premium plan");
          let p = (0, c.GX)(e, h.planId),
            y = void 0 !== r ? r.toLowerCase() : e.currency;
          (0, o.U)(e, t, d),
            await a.nV(
              e,
              { status: u.Dmq.ACTIVE, paymentSource: i, items: p, currency: r },
              { amount: 0, currency: y },
              (0, c.UC)(p, y, i?.id),
              t,
              l,
              d,
            ),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (e) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e)
          );
        }
      }
      async function h(e, t, r) {
        try {
          await a.nV(
            e,
            { status: u.Dmq.ACTIVE },
            { amount: 0, currency: e.currency },
            (0, c.UC)(e.items, e.currency, e.paymentSourceId),
            t,
            r,
          );
        } catch (e) {
          throw e;
        }
      }
      async function p(e, t, r, i, n) {
        try {
          await a.r6(e, t, r, i, n),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (e) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e)
          );
        }
      }
      async function y(e, t, r, i, n, o) {
        try {
          await a.uK(e, t, r, i, n, o),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (e) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e)
          );
        }
      }
      function _() {
        s.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
      }
    },
    686757(e, t, r) {
      r.d(t, {
        SD: () => d,
        Vm: () => c,
        eE: () => l,
        g$: () => h,
        u5: () => u,
        uJ: () => p,
      });
      var i = r(265690),
        n = r(110259),
        s = r(121894);
      let a = Object.freeze({ debugTrackedData: null, impressions: [] }),
        o = (0, i.h)((e) => a),
        c = (e) => {
          (0, s.r)(() => {
            o.setState((t) => ({ impressions: [...t.impressions, e] }));
          });
        },
        u = (e) => {
          (0, s.r)(() => {
            o.setState((t) => ({
              impressions: t.impressions.filter(
                (t) => t.sequenceId !== e.sequenceId,
              ),
            }));
          });
        },
        l = (e, t) => {
          (0, s.r)(() => {
            o.setState(() => ({ debugTrackedData: { name: e, ...t } }));
          });
        },
        d = o;
      function h() {
        let e = {};
        return (
          o.getState().impressions.forEach((t) => {
            t.type === n.ImpressionTypes.PAGE
              ? (e.page = t.name)
              : (e.section = t.name);
          }),
          e
        );
      }
      function p() {
        return o.getState().impressions;
      }
    },
    874059(e, t, r) {
      r.d(t, { A: () => o });
      var i = r(228366),
        n = r(272355),
        s = r(287809);
      class a extends n.A {
        _initialize() {
          i.h.subscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            i.h.subscribe(
              "BILLING_STANDALONE_INITIALIZED",
              this._maybeStartDevSession,
            ),
            i.h.subscribe("LOGOUT", this._maybeStopDevSession);
        }
        _terminate() {
          i.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            i.h.unsubscribe(
              "BILLING_STANDALONE_INITIALIZED",
              this._maybeStartDevSession,
            ),
            i.h.unsubscribe("LOGOUT", this._maybeStopDevSession);
        }
        _maybeStartDevSession() {
          if (
            null == window.DiscordDevSession ||
            !0 !== window.__METICULOUS_ENABLED
          )
            return;
          let e = "production" === window.GLOBAL_ENV.PROJECT_ENV,
            t = s.default.getCurrentUser();
          t?.email == null ||
            (e && t.isStaff()) ||
            (t.username.startsWith("mtcls") || !e
              ? window.DiscordDevSession.start()
              : window.DiscordDevSession.stop());
        }
        _maybeStopDevSession() {
          null != window.DiscordDevSession &&
            window.DiscordDevSession.started &&
            window.DiscordDevSession.stop();
        }
      }
      let o = new a();
    },
    871162(e, t, r) {
      r.d(t, { l: () => i });
      let i = (0, r(64700).createContext)({ overrideSettings: !1 });
    },
    826469(e, t, r) {
      r.d(t, { A: () => n }), r(938796);
      var i = r(202613);
      class n {
        source;
        enabled;
        allowedCurrencies;
        relocationCountry;
        relocationCurrencyCode;
        willForfeitGiftCardBalance;
        constructor(e, t, r, i) {
          (this.source = e),
            (this.enabled = t),
            (this.allowedCurrencies = r),
            (this.relocationCountry = i?.country ?? null),
            (this.relocationCurrencyCode = i?.currencyCode ?? null),
            (this.willForfeitGiftCardBalance =
              i?.willForfeitGiftCardBalance ?? !1);
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
        static createFromCheckoutContext(e) {
          let t = {
            id: e.id,
            type: e.type,
            invalid: e.invalid,
            flags: e.flags,
            default: e.default,
            country: e.country,
            payment_gateway: e.payment_gateway,
            billing_address: e.billing_address ?? {},
            brand: e.brand,
            last_4: e.last_4,
            expires_month: e.expires_month,
            expires_year: e.expires_year,
            email: e.email,
            username: e.username,
            bank: e.bank,
          };
          return new n(
            i.Ay.createFromServer(t),
            e.enabled,
            e.allowed_currencies ?? [],
            {
              country: e.relocation_info?.country ?? null,
              currencyCode: e.relocation_info?.currency ?? null,
              willForfeitGiftCardBalance:
                e.relocation_info?.will_forfeit_gift_card_balance ?? !1,
            },
          );
        }
      }
    },
    570221(e, t, r) {
      r.d(t, { A: () => s });
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
        static createInvoiceFromServer(e) {
          return new s({
            id: e.id,
            invoiceItems: e.invoice_items?.map(n.c),
            total: e.total,
            subtotal: e.subtotal,
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            subscriptionPeriodStart: new Date(e.subscription_period_start),
            subscriptionPeriodEnd: new Date(e.subscription_period_end),
            status: e.status,
            orbsReward: e.orbs_reward,
            checkoutContext: e.checkout_context,
          });
        }
        static createFromOTPPreview(e) {
          return new s({
            id: "",
            invoiceItems: e.invoice_items?.map(n.c),
            total: e.amount,
            subtotal: e.subtotal,
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            subscriptionPeriodStart: new Date(0),
            subscriptionPeriodEnd: new Date(0),
            orbsReward: e.orbs_reward,
            checkoutContext: e.checkout_context,
          });
        }
        constructor(e) {
          super(),
            (this.id = e.id),
            (this.invoiceItems = e.invoiceItems ?? []),
            (this.total = e.total),
            (this.subtotal = e.subtotal),
            (this.currency = e.currency),
            (this.tax = e.tax),
            (this.taxInclusive = e.taxInclusive),
            (this.subscriptionPeriodStart = e.subscriptionPeriodStart),
            (this.subscriptionPeriodEnd = e.subscriptionPeriodEnd),
            (this.status = e.status),
            (this.orbsReward = e.orbsReward),
            (this.checkoutContext = e.checkoutContext);
        }
        findInvoiceItemByPlanId(e) {
          return (
            this.invoiceItems.find((t) => t.subscriptionPlanId === e) ?? null
          );
        }
        getDiscountIdIfExists() {
          let e = this.invoiceItems.find((e) => e.discounts.length > 0);
          if (null == e || 0 === e.discounts.length) return;
          let t = e.discounts[0];
          if (null != t) return t.discount_id;
        }
      }
    },
    757811(e, t, r) {
      r.r(t);
    },
    209489(e, t, r) {
      let i;
      r.d(t, { A: () => a }), r(321073), (i = r(4472).A);
      let n = [],
        s = !1,
        a = {
          ...i,
          awaitOnline: () =>
            new Promise((e) => {
              if (i.isOnline()) return e();
              {
                if ((n.push(e), s)) return;
                s = !0;
                let t = () => {
                  n.forEach((e) => e()),
                    (n.length = 0),
                    (s = !1),
                    i.removeOnlineCallback(t);
                };
                i.addOnlineCallback(t);
              }
            }),
        };
    },
    83617(e, t, r) {
      r.d(t, { Yk: () => S, _w: () => y, c_: () => p, jJ: () => _ });
      var i = r(64700),
        n = r(284009),
        s = r.n(n),
        a = r(228366),
        o = r(73825),
        c = r(160946),
        u = r(97352),
        l = r(927578),
        d = r(652215),
        h = r(788868);
      function p(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [...h.oz];
        return null == e || u.A.hasPaymentSourceForSKUIds(e, t)
          ? Promise.resolve()
          : new Promise((e, r) => {
              a.h.wait(async () => {
                try {
                  await (0, o.jv)(t), e();
                } catch (e) {
                  r(e);
                }
              });
            });
      }
      function y(e, t, r) {
        let i,
          n = [],
          a = { purchaseType: r ? d.lid.GIFT : d.lid.DEFAULT };
        return (
          (i = "string" == typeof e ? u.A.get(e) : e),
          s()(i, "subscription plan not loaded"),
          null != t &&
            u.A.hasPaymentSourceForSKUId(t, i.skuId) &&
            (a.paymentSourceId = t),
          (n = (0, l.pb)(i.id, a).map((e) => e.currency)).length < 1 &&
            (n = [d.Yri.USD]),
          n
        );
      }
      function _(e, t, r) {
        let i = u.A.get(e);
        return s()(null != i, "plan is undefined"), y(i, r, !1).includes(t);
      }
      function S(e) {
        let {
            initialCurrency: t,
            subscriptionPlanId: r,
            paymentSourceId: n,
            isGift: s,
            skuIDs: a,
            excludeSubscriptionPlansBySKU: o,
          } = e,
          [u, l] = i.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != n
              ? { paymentSourceId: n, currency: t, loaded: !1 }
              : { currency: t, loaded: !1 },
          ),
          d = (0, c.Y)(a),
          h = JSON.stringify(a),
          y = i.useRef(a);
        i.useEffect(() => {
          y.current = a;
        }),
          i.useEffect(() => {
            (async () => {
              let { current: e } = y;
              try {
                e.length > 0 && !o && (await p(n, e));
              } catch (e) {
                if (10027 !== e.code) throw e;
              }
              l({ paymentSourceId: n, currency: void 0, loaded: !0 });
            })();
          }, [n, h, r, s, d, o]);
        let _ = u.paymentSourceId !== n || null == r || !d || !0 !== u.loaded;
        return {
          hasFetchedSubscriptionPlans: d,
          priceOptions: u,
          setCurrency: (e) => {
            l({ currency: e });
          },
          currencyLoading: _,
        };
      }
    },
  },
]);
//# sourceMappingURL=61576.eccce657512deb3b.js.map
