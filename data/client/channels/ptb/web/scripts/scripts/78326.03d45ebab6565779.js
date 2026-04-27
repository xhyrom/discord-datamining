"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78326"],
  {
    158032(t, e, r) {
      r.d(e, {
        B1: () => C,
        ET: () => y,
        Ir: () => d,
        U: () => l,
        r6: () => h,
        uK: () => p,
      });
      var i = r(284009),
        n = r.n(i),
        s = r(228366),
        c = r(323082),
        a = r(501957),
        o = r(927578),
        u = r(652215);
      async function C(t) {
        let {
          planId: e,
          currency: r,
          paymentSource: i,
          trialId: n,
          code: a,
          metadata: o,
          referralCode: u,
          loadId: C,
          expectedInvoicePrice: d,
          expectedRenewalPrice: l,
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
            loadId: C,
            expectedInvoicePrice: d,
            expectedRenewalPrice: l,
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
      async function d(t, e, r, i, C, d) {
        try {
          let l = (0, o.EL)(t);
          n()(l, "Expected existing premium plan");
          let h = (0, o.GX)(t, l.planId),
            p = void 0 !== r ? r.toLowerCase() : t.currency;
          (0, a.U)(t, e, d),
            await c.nV(
              t,
              { status: u.Dmq.ACTIVE, paymentSource: i, items: h, currency: r },
              { amount: 0, currency: p },
              (0, o.UC)(h, p, i?.id),
              e,
              C,
              d,
            ),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (t) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: t }), t)
          );
        }
      }
      async function l(t, e, r) {
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
      async function p(t, e, r, i, n, a) {
        try {
          await c.uK(t, e, r, i, n, a),
            s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (t) {
          throw (
            (s.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: t }), t)
          );
        }
      }
      function y() {
        s.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
      }
    },
    686757(t, e, r) {
      r.d(e, {
        SD: () => d,
        Vm: () => o,
        eE: () => C,
        g$: () => l,
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
        C = (t, e) => {
          (0, s.r)(() => {
            a.setState(() => ({ debugTrackedData: { name: t, ...e } }));
          });
        },
        d = a;
      function l() {
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
    85563(t, e, r) {
      r.d(e, { A: () => s });
      var i = r(627968);
      r(64700);
      var n = r(953727);
      function s(t) {
        let {
          width: e = 55,
          height: r = 16,
          color: s = "currentColor",
          foreground: c,
          ...a
        } = t;
        return (0, i.jsx)("svg", {
          ...(0, n.A)(a),
          width: e,
          height: r,
          viewBox: "0 0 55 16",
          children: (0, i.jsxs)("g", {
            fill: s,
            className: c,
            children: [
              (0, i.jsx)("path", {
                d: "M3 4.78717H6.89554C7.83025 4.78717 8.62749 4.93379 9.27812 5.22703C9.92875 5.52027 10.4144 5.92348 10.7352 6.44582C11.0559 6.96815 11.2208 7.5638 11.2208 8.24192C11.2208 8.90171 11.0559 9.49736 10.7168 10.038C10.3778 10.5695 9.8646 11.0002 9.17732 11.3118C8.49003 11.6234 7.6378 11.7791 6.6197 11.7791H3V4.78717ZM6.57388 10.0014C7.2071 10.0014 7.69278 9.84559 8.03184 9.52485C8.3709 9.21328 8.54501 8.77343 8.54501 8.23276C8.54501 7.72875 8.38923 7.32555 8.08682 7.02314C7.78442 6.72073 7.32623 6.56495 6.71225 6.56495H5.49255V10.0014H6.57388Z",
              }),
              (0, i.jsx)("path", {
                d: "M17.2882 11.7709C16.7475 11.6335 16.2618 11.4319 15.8311 11.1569V9.4983C16.161 9.75489 16.5917 9.95649 17.1416 10.1214C17.6914 10.2864 18.2229 10.3689 18.7361 10.3689C18.9743 10.3689 19.1576 10.3414 19.2767 10.2772C19.3959 10.2131 19.46 10.1398 19.46 10.0481C19.46 9.94733 19.4233 9.86485 19.3592 9.80071C19.2951 9.73656 19.1668 9.68158 18.9743 9.62659L17.7739 9.36084C17.0866 9.20506 16.6009 8.97596 16.3077 8.70105C16.0144 8.42613 15.877 8.05042 15.877 7.59223C15.877 7.20735 16.0053 6.86829 16.2527 6.58421C16.5093 6.30013 16.8667 6.0802 17.334 5.92442C17.8014 5.76863 18.342 5.68616 18.9743 5.68616C19.5333 5.68616 20.0465 5.74114 20.5138 5.86944C20.9812 5.98857 21.3661 6.14435 21.6685 6.32763V7.89464C21.3569 7.71136 20.9904 7.56474 20.5871 7.45477C20.1748 7.34481 19.7533 7.28982 19.3226 7.28982C18.6994 7.28982 18.3878 7.39979 18.3878 7.61056C18.3878 7.71136 18.4337 7.78467 18.5345 7.83966C18.6353 7.89464 18.8094 7.94046 19.066 7.99544L20.0648 8.17871C20.7155 8.28868 21.2011 8.49028 21.5219 8.77436C21.8426 9.05844 21.9984 9.47081 21.9984 10.0298C21.9984 10.6346 21.7326 11.1203 21.2011 11.4685C20.6696 11.8259 19.9182 12 18.9468 12C18.3787 11.9817 17.8289 11.9084 17.2882 11.7709Z",
              }),
              (0, i.jsx)("path", {
                d: "M24.4735 11.5602C23.9054 11.2761 23.4655 10.9004 23.1814 10.4239C22.8882 9.94733 22.7507 9.40666 22.7507 8.80185C22.7507 8.20621 22.8974 7.66554 23.1998 7.19819C23.5022 6.72167 23.942 6.35512 24.5194 6.0802C25.0967 5.81445 25.7931 5.677 26.5995 5.677C27.5984 5.677 28.4231 5.88776 29.0829 6.3093V8.1329C28.8538 7.97712 28.5789 7.83965 28.2673 7.74802C27.9558 7.64721 27.6259 7.6014 27.2777 7.6014C26.6545 7.6014 26.178 7.71137 25.8206 7.94046C25.4724 8.16956 25.2983 8.46279 25.2983 8.82934C25.2983 9.18673 25.4632 9.47998 25.8115 9.70907C26.1505 9.93817 26.6453 10.0573 27.2868 10.0573C27.6167 10.0573 27.9466 10.0115 28.2673 9.91067C28.5881 9.80987 28.8722 9.69991 29.1013 9.55329V11.3219C28.3681 11.7618 27.5159 11.9817 26.5537 11.9817C25.7381 11.9817 25.0509 11.8351 24.4735 11.5602Z",
              }),
              (0, i.jsx)("path", {
                d: "M31.6955 11.5602C31.1182 11.2761 30.6783 10.9004 30.3759 10.4147C30.0735 9.929 29.9177 9.38834 29.9177 8.78353C29.9177 8.18788 30.0735 7.64722 30.3759 7.17986C30.6783 6.71251 31.1182 6.34595 31.6863 6.0802C32.2545 5.81445 32.9418 5.677 33.7299 5.677C34.518 5.677 35.2053 5.80529 35.7743 6.0802C36.3425 6.34595 36.7824 6.71251 37.0848 7.17986C37.3872 7.64722 37.5338 8.17872 37.5338 8.78353C37.5338 9.37918 37.3872 9.929 37.0848 10.4147C36.7824 10.9004 36.3517 11.2852 35.7743 11.5602C35.1961 11.8351 34.518 11.9817 33.7299 11.9817C32.951 11.9817 32.2728 11.8351 31.6955 11.5602ZM34.7287 9.79155C34.967 9.55329 35.0953 9.22339 35.0953 8.82934C35.0953 8.42614 34.9762 8.11457 34.7287 7.87632C34.4813 7.63806 34.1514 7.51892 33.7391 7.51892C33.3084 7.51892 32.9785 7.63806 32.731 7.87632C32.4928 8.11457 32.3645 8.42614 32.3645 8.82934C32.3645 9.23255 32.4836 9.55329 32.731 9.79155C32.9785 10.039 33.3084 10.1581 33.7391 10.1581C34.1514 10.1489 34.4905 10.0298 34.7287 9.79155Z",
              }),
              (0, i.jsx)("path", {
                d: "M43.6644 6.0435V8.19699C43.4078 8.03204 43.0779 7.94956 42.6747 7.94956C42.1432 7.94956 41.7308 8.11451 41.4467 8.43524C41.1626 8.75598 41.016 9.25999 41.016 9.93811V11.7709H38.5693V5.9427H40.9702V7.80295C41.0985 7.12482 41.3184 6.62082 41.6117 6.30008C41.9049 5.97935 42.2898 5.80524 42.7572 5.80524C43.1054 5.80524 43.4078 5.88771 43.6644 6.0435Z",
              }),
              (0, i.jsx)("path", {
                d: "M51.9136 4.58649V11.7801H49.4659V10.4696C49.2552 10.9645 48.9436 11.3402 48.5221 11.5968C48.1005 11.8534 47.5782 11.9817 46.9551 11.9817C46.4052 11.9817 45.9195 11.8442 45.5072 11.5785C45.0948 11.3127 44.7741 10.937 44.5542 10.4696C44.3342 9.99313 44.2242 9.46163 44.2242 8.87514C44.2151 8.26117 44.3342 7.71134 44.5816 7.22566C44.8199 6.73998 45.1681 6.36426 45.608 6.08935C46.0479 5.81444 46.5519 5.67698 47.12 5.67698C48.2838 5.67698 49.0627 6.18099 49.4659 7.19817V4.58649H51.9136ZM49.0994 9.7457C49.3468 9.50744 49.4751 9.18671 49.4751 8.80183C49.4751 8.42612 49.356 8.12371 49.1086 7.89462C48.8611 7.66552 48.5312 7.5464 48.1189 7.5464C47.7065 7.5464 47.3766 7.66553 47.1292 7.90378C46.8818 8.14204 46.7626 8.44444 46.7626 8.82932C46.7626 9.2142 46.8818 9.51661 47.1292 9.75487C47.3766 9.99313 47.6973 10.1123 48.1097 10.1123C48.5221 10.1123 48.852 9.99313 49.0994 9.7457Z",
              }),
              (0, i.jsx)("path", {
                d: "M13.4751 6.29095C14.1789 6.29095 14.7489 5.77778 14.7489 5.14547C14.7489 4.51317 14.1789 4 13.4751 4C12.7723 4 12.2014 4.51317 12.2014 5.14547C12.2014 5.77778 12.7723 6.29095 13.4751 6.29095Z",
              }),
              (0, i.jsx)("path", {
                d: "M14.7489 7.07812C13.97 7.41719 12.9986 7.42635 12.2014 7.07812V11.7792H14.7489V7.07812Z",
              }),
            ],
          }),
        });
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
      r.d(e, { Yk: () => E, _w: () => p, c_: () => h, jJ: () => y });
      var i = r(64700),
        n = r(284009),
        s = r.n(n),
        c = r(228366),
        a = r(73825),
        o = r(160946),
        u = r(97352),
        C = r(927578),
        d = r(652215),
        l = r(788868);
      function h(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [...l.oz];
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
      function p(t, e, r) {
        let i,
          n = [],
          c = { purchaseType: r ? d.lid.GIFT : d.lid.DEFAULT };
        return (
          (i = "string" == typeof t ? u.A.get(t) : t),
          s()(i, "subscription plan not loaded"),
          null != e &&
            u.A.hasPaymentSourceForSKUId(e, i.skuId) &&
            (c.paymentSourceId = e),
          (n = (0, C.pb)(i.id, c).map((t) => t.currency)).length < 1 &&
            (n = [d.Yri.USD]),
          n
        );
      }
      function y(t, e, r) {
        let i = u.A.get(t);
        return s()(null != i, "plan is undefined"), p(i, r, !1).includes(e);
      }
      function E(t) {
        let {
            initialCurrency: e,
            subscriptionPlanId: r,
            paymentSourceId: n,
            isGift: s,
            skuIDs: c,
            excludeSubscriptionPlansBySKU: a,
          } = t,
          [u, C] = i.useReducer(
            (t, e) => ({ ...t, ...e }),
            null != n
              ? { paymentSourceId: n, currency: e, loaded: !1 }
              : { currency: e, loaded: !1 },
          ),
          d = (0, o.Y)(c),
          l = JSON.stringify(c),
          p = i.useRef(c);
        i.useEffect(() => {
          p.current = c;
        }),
          i.useEffect(() => {
            (async () => {
              let { current: t } = p;
              try {
                t.length > 0 && !a && (await h(n, t));
              } catch (t) {
                if (10027 !== t.code) throw t;
              }
              C({ paymentSourceId: n, currency: void 0, loaded: !0 });
            })();
          }, [n, l, r, s, d, a]);
        let y = u.paymentSourceId !== n || null == r || !d || !0 !== u.loaded;
        return {
          hasFetchedSubscriptionPlans: d,
          priceOptions: u,
          setCurrency: (t) => {
            C({ currency: t });
          },
          currencyLoading: y,
        };
      }
    },
  },
]);
//# sourceMappingURL=78326.03d45ebab6565779.js.map
