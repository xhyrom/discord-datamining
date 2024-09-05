"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30671"],
  {
    987032: function (e, n, a) {
      a.d(n, {
        Ul: function () {
          return _;
        },
        YE: function () {
          return l;
        },
      }),
        a(47120);
      var t = a(818083),
        r = a(981631),
        o = a(689938);
      n.ZP = (0, t.B)({
        kind: "user",
        id: "2021-08_regional_payment_methods",
        label: "Regional Payment Methods",
        defaultConfig: {
          enabledPaymentTypes: [],
          forceCountryCode: null,
          validCountryCodes: [],
        },
        treatments: [
          {
            id: 1,
            label: "Regional Payment Method for Germany",
            config: {
              enabledPaymentTypes: [r.HeQ.SOFORT],
              forceCountryCode: "DE",
              validCountryCodes: ["DE"],
            },
          },
          {
            id: 2,
            label: "Regional Payment Method for US",
            config: {
              enabledPaymentTypes: [r.HeQ.VENMO, r.HeQ.CASH_APP],
              forceCountryCode: "US",
              validCountryCodes: ["US"],
            },
          },
          {
            id: 3,
            label: "Regional Payment Method for Brazil",
            config: {
              enabledPaymentTypes: [],
              forceCountryCode: "BR",
              validCountryCodes: ["BR"],
            },
          },
          {
            id: 4,
            label: "Regional Payment Method for Turkey",
            config: {
              enabledPaymentTypes: [],
              forceCountryCode: "TR",
              validCountryCodes: ["TR"],
            },
          },
          {
            id: 5,
            label: "Regional Payment Method for Poland",
            config: {
              enabledPaymentTypes: [r.HeQ.PRZELEWY24],
              forceCountryCode: "PL",
              validCountryCodes: ["PL"],
            },
          },
          {
            id: 6,
            label: "Enable paysafecard",
            config: {
              enabledPaymentTypes: [r.HeQ.PAYSAFE_CARD],
              forceCountryCode: "DE",
              validCountryCodes: ["BG", "CZ", "DK", "HU", "RO", "SE", "DE"],
            },
          },
          {
            id: 7,
            label: "Regional Payment Method for Philippines",
            config: {
              enabledPaymentTypes: [r.HeQ.GCASH],
              forceCountryCode: "PH",
              validCountryCodes: ["PH"],
            },
          },
          {
            id: 8,
            label: "Regional Payment Method for Malaysia",
            config: {
              enabledPaymentTypes: [r.HeQ.GRABPAY_MY],
              forceCountryCode: "MY",
              validCountryCodes: ["MY"],
            },
          },
          {
            id: 9,
            label: "Regional Payment Method for Vietnam",
            config: {
              enabledPaymentTypes: [r.HeQ.MOMO_WALLET],
              forceCountryCode: "VN",
              validCountryCodes: ["VN"],
            },
          },
          {
            id: 10,
            label: "Regional Payment Method for Indonesia",
            config: {
              enabledPaymentTypes: [r.HeQ.GOPAY_WALLET],
              forceCountryCode: "ID",
              validCountryCodes: ["ID"],
            },
          },
          {
            id: 11,
            label: "Regional Payment Method for South Korea",
            config: {
              enabledPaymentTypes: [r.HeQ.KAKAOPAY],
              forceCountryCode: "KR",
              validCountryCodes: ["KR"],
            },
          },
          {
            id: 12,
            label: "Regional Payment Method for Belgium",
            config: {
              enabledPaymentTypes: [
                r.HeQ.PAYSAFE_CARD,
                r.HeQ.SOFORT,
                r.HeQ.BANCONTACT,
              ],
              forceCountryCode: "BE",
              validCountryCodes: ["BE"],
            },
          },
          {
            id: 13,
            label: "Regional Payment Method for Austria",
            config: {
              enabledPaymentTypes: [
                r.HeQ.PAYSAFE_CARD,
                r.HeQ.EPS,
                r.HeQ.SOFORT,
              ],
              forceCountryCode: "AT",
              validCountryCodes: ["AT"],
            },
          },
          {
            id: 14,
            label: "Regional Payment Method for Netherlands",
            config: {
              enabledPaymentTypes: [
                r.HeQ.PAYSAFE_CARD,
                r.HeQ.IDEAL,
                r.HeQ.SOFORT,
              ],
              forceCountryCode: "NL",
              validCountryCodes: ["NL"],
            },
          },
          {
            id: 15,
            label: "Launch Paysafecard and Sofort",
            config: {
              enabledPaymentTypes: [r.HeQ.PAYSAFE_CARD, r.HeQ.SOFORT],
              forceCountryCode: "ES",
              validCountryCodes: ["ES", "IT"],
            },
          },
          {
            id: 16,
            label: "Launch Cash App",
            config: {
              enabledPaymentTypes: [r.HeQ.CASH_APP],
              forceCountryCode: "US",
              validCountryCodes: ["US"],
            },
          },
        ],
      });
      let s = new Map([
        ["abn_amro", "ABN AMRO"],
        ["asn_bank", "ASN Bank"],
        ["bunq", "Bunq"],
        ["handelsbanken", "Handelsbanken"],
        ["ing ", "ING"],
        ["knab", "Knab"],
        ["rabobank", "Rabobank"],
        ["revolut", "Revolut"],
        ["regiobank", "RegioBank"],
        ["sns_bank", "SNS Bank (De Volksbank)"],
        ["triodos_bank", "Triodos Bank"],
        ["van_lanschot", "Van Lanschot"],
      ]);
      function l(e) {
        return void 0 !== e && s.has(e)
          ? s.get(e)
          : o.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
      }
      let i = new Map([
        ["arzte_und_apotheker_bank", "\xc4rzte- und Apothekerbank"],
        ["austrian_anadi_bank_ag", "Austrian Anadi Bank AG"],
        ["bank_austria", "Bank Austria"],
        ["bankhaus_carl_spangler", "Bankhaus Carl Sp\xe4ngler & Co.AG"],
        [
          "bankhaus_schelhammer_und_schattera_ag",
          "Bankhaus Schelhammer & Schattera AG",
        ],
        ["bawag_psk_ag", "BAWAG P.S.K. AG"],
        ["bks_bank_ag", "BKS Bank AG"],
        ["brull_kallmus_bank_ag", "Br\xfcll Kallmus Bank AG"],
        ["btv_vier_lander_bank", "BTV VIER L\xc4NDER BANK"],
        ["capital_bank_grawe_gruppe_ag", "Capital Bank Grawe Gruppe AG"],
        ["dolomitenbank", "Dolomitenbank"],
        ["easybank_ag", "Easybank AG"],
        ["erste_bank_und_sparkassen", "Erste Bank und Sparkassen"],
        [
          "hypo_alpeadriabank_international_ag",
          "Hypo Alpe-Adria-Bank International AG",
        ],
        [
          "hypo_noe_lb_fur_niederosterreich_u_wien",
          "HYPO NOE LB f\xfcr Nieder\xf6sterreich u. Wien",
        ],
        [
          "hypo_oberosterreich_salzburg_steiermark",
          "HYPO Ober\xf6sterreich, Salzburg, Steiermark",
        ],
        ["hypo_tirol_bank_ag", "Hypo Tirol Bank AG"],
        ["hypo_vorarlberg_bank_ag", "Hypo Vorarlberg Bank AG"],
        [
          "hypo_bank_burgenland_aktiengesellschaft",
          "HYPO-BANK BURGENLAND Aktiengesellschaft",
        ],
        ["marchfelder_bank", "Marchfelder Bank"],
        ["oberbank_ag", "Oberbank AG"],
        [
          "raiffeisen_bankengruppe_osterreich",
          "Raiffeisen Bankengruppe \xd6sterreich",
        ],
        ["schoellerbank_ag", "Schoellerbank AG"],
        ["sparda_bank_wien", "Sparda-Bank Wien"],
        ["volksbank_gruppe", "Volksbank Gruppe"],
        ["volkskreditbank_ag", "Volkskreditbank AG"],
        ["vr_bank_braunau", "VR-Bank Braunau"],
      ]);
      function _(e) {
        return void 0 !== e && i.has(e)
          ? i.get(e)
          : o.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
      }
    },
    985754: function (e, n, a) {
      a.d(n, {
        Gv: function () {
          return d;
        },
        Wo: function () {
          return u;
        },
        vB: function () {
          return c;
        },
      }),
        a(47120),
        a(653041);
      var t = a(217986),
        r = a(133080),
        o = a(63063),
        s = a(937615),
        l = a(981631),
        i = a(231338),
        _ = a(689938);
      let C = new Set([i.pK.ARS, i.pK.CLP, i.pK.COP]),
        A = new Set([i.pK.USD, i.pK.JPY]),
        u = {
          [l.HeQ.CARD]: () => _.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
          [l.HeQ.PAYPAL]: () => _.Z.Messages.PAYMENT_SOURCE_PAYPAL,
          [l.HeQ.SOFORT]: () => _.Z.Messages.PAYMENT_SOURCE_SOFORT,
          [l.HeQ.GIROPAY]: () => _.Z.Messages.PAYMENT_SOURCE_GIROPAY,
          [l.HeQ.PRZELEWY24]: () => _.Z.Messages.PAYMENT_SOURCE_PRZELEWY24,
          [l.HeQ.PAYSAFE_CARD]: () => _.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
          [l.HeQ.GCASH]: () => _.Z.Messages.PAYMENT_SOURCE_GCASH,
          [l.HeQ.GRABPAY_MY]: () => _.Z.Messages.PAYMENT_SOURCE_GRABPAY,
          [l.HeQ.MOMO_WALLET]: () => _.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET,
          [l.HeQ.VENMO]: () => _.Z.Messages.PAYMENT_SOURCE_VENMO,
          [l.HeQ.KAKAOPAY]: () => _.Z.Messages.PAYMENT_SOURCE_KAKAOPAY,
          [l.HeQ.GOPAY_WALLET]: () => _.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
          [l.HeQ.BANCONTACT]: () => _.Z.Messages.PAYMENT_SOURCE_BANCONTACT,
          [l.HeQ.EPS]: () => _.Z.Messages.PAYMENT_SOURCE_EPS,
          [l.HeQ.IDEAL]: () => _.Z.Messages.PAYMENT_SOURCE_IDEAL,
          [l.HeQ.CASH_APP]: () => _.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
          [l.HeQ.APPLE]: () => _.Z.Messages.PAYMENT_SOURCE_APPLE,
        },
        E = [
          l.HeQ.EPS,
          l.HeQ.BANCONTACT,
          l.HeQ.IDEAL,
          l.HeQ.SOFORT,
          l.HeQ.GIROPAY,
          l.HeQ.SEPA_DEBIT,
          l.HeQ.PAYSAFE_CARD,
        ],
        d = (e, n, a, t) => {
          if (null == e) return "";
          let o = (0, r.q9)(e);
          if (n === i.pK.EUR)
            return a
              ? _.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format(
                  { country: o },
                )
              : _.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                  currencyISOCode: n.toUpperCase(),
                });
          return t
            ? _.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({ countryName: o })
            : _.Z.Messages.LOCALIZED_PRICING_NOTICE.format({ country: o });
        },
        c = (e) => {
          let {
              localizedPricingPromo: n,
              subscription: a,
              forceSingleLine: t = !1,
              userLocale: d,
            } = e,
            {
              countryCode: c,
              amount: N,
              currency: R,
              paymentSourceTypes: p,
            } = n,
            y = 0 !== p.length,
            O = P(c),
            f = (0, s.T4)(N, R, {
              style: "currency",
              currency: R,
              currencyDisplay: "symbol",
              localeOverride: O,
            }),
            g = _.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
              helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
              currencyISOCode: R.toUpperCase(),
              localizedPriceWithCurrencySymbol: f,
            });
          if (
            (A.has(R) &&
              (g =
                _.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format(
                  {
                    helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
                    localizedPriceWithCurrencySymbol: f,
                  },
                )),
            C.has(R) &&
              (g =
                _.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format(
                  {
                    helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
                    currencyISOCode: R.toUpperCase(),
                    localizedPriceWithCurrencySymbol: f,
                  },
                )),
            null != a &&
              !a.hasPremiumNitroMonthly &&
              (g =
                _.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format(
                  {
                    helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
                    currencyISOCode: R.toUpperCase(),
                  },
                )),
            R === i.pK.EUR &&
              (g = t
                ? _.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format(
                    {
                      country: (0, r.q9)(c),
                      currencyISOCode: R.toUpperCase(),
                      helpCenterLink: o.Z.getArticleURL(
                        l.BhN.LOCALIZED_PRICING,
                      ),
                    },
                  )
                : _.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format(
                    {
                      currencyISOCode: R.toUpperCase(),
                      helpCenterLink: o.Z.getArticleURL(
                        l.BhN.LOCALIZED_PRICING,
                      ),
                    },
                  )),
            y)
          ) {
            let e = E.filter((e) => p.includes(e)),
              n = [...e, ...p.filter((e) => !E.includes(e))]
                .slice(0, 2)
                .map((e) => {
                  var n, a;
                  return null !==
                    (a =
                      null === (n = u[e]) || void 0 === n
                        ? void 0
                        : n.call(u)) && void 0 !== a
                    ? a
                    : _.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
                });
            p.length >= 3 &&
              n.push(_.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
            let a = new Intl.ListFormat(d, {
              style: "short",
              type: "conjunction",
            });
            g = _.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
              helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
              paymentMethods: a.format(n),
            });
          }
          return {
            localizedPricingBannerHeader:
              _.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                country: (0, r.q9)(c),
              }),
            localizedPricingBannerBody: g,
            localizedPricingBannerLinkOnly:
              _.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
              }),
            localizedPricingBannerSubNotif: y
              ? void 0
              : _.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF,
          };
        },
        P = (e) => {
          let n = t.Z.find((n) => n.alpha2 === e);
          return null == n ? void 0 : n.localeForICU;
        };
    },
    559725: function (e, n, a) {
      a.d(n, {
        cp: function () {
          return c;
        },
        eI: function () {
          return d;
        },
      }),
        a(411104);
      var t = a(175145),
        r = a(544891),
        o = a(570140),
        s = a(355467),
        l = a(987032),
        i = a(559407),
        _ = a(122289),
        C = a(439041),
        A = a(981631),
        u = a(689938);
      async function E() {
        return await r.tn.get({
          url: A.ANM.BILLING_ADYEN_PAYMENT_METHODS,
          oldFormErrors: !0,
        });
      }
      async function d() {
        try {
          let { enabledPaymentTypes: e } = l.ZP.getCurrentConfig(
            { location: "40c266_2" },
            { autoTrackExposure: !1 },
          );
          if (!e.includes(A.HeQ.CASH_APP)) return;
          let n = await E(),
            a = await (0, t.Z)({
              environment: A.Ai1.ADYEN.KEY.startsWith("live_")
                ? "live"
                : "test",
              clientKey: A.Ai1.ADYEN.KEY,
              analytics: { enabled: !1 },
              paymentMethodsResponse: n.body,
            });
          o.Z.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: a }),
            (function (e) {
              if (null != C.Z.cashAppPayComponent) {
                (function () {
                  var e;
                  null === (e = C.Z.cashAppPayComponent) ||
                    void 0 === e ||
                    e.unmount();
                })(),
                  (function () {
                    var e;
                    if (null == C.Z.cashAppPayComponent)
                      throw Error(
                        "Adyen CashAppPay component must be created before mounting.",
                      );
                    null === (e = C.Z.cashAppPayComponent) ||
                      void 0 === e ||
                      e.mount("#".concat(i.F));
                  })();
                return;
              }
              let n = e
                .create("cashapp", {
                  showPayButton: !1,
                  enableStoreDetails: !1,
                  storePaymentMethod: !0,
                  setStatusAutomatically: !1,
                  onSubmit: (e) => {
                    let { data: n, isValid: a } = e;
                    if (a)
                      o.Z.dispatch({
                        type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS",
                        data: n,
                      });
                    else
                      throw (0, s.SQ)(
                        "Cash App Pay setup attempt is not valid.",
                      );
                  },
                  onError: (e) => {
                    let n;
                    let a = !0;
                    if ("CANCEL" !== e.name) {
                      switch (e.message) {
                        case "Payment declined by CashAppPay":
                          a = !1;
                          break;
                        case "Something went wrong during customerRequest creation":
                          (a = !1),
                            (n =
                              u.Z.Messages
                                .PAYMENT_SOURCE_CASH_APP_PAY_LOADING_ERROR_TRY_AGAIN);
                      }
                      (0, s.SQ)(e.message, a, n);
                    }
                  },
                })
                .mount("#".concat(i.F));
              o.Z.dispatch({
                type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS",
                component: n,
              });
            })(a);
        } catch (e) {
          (0, _.q2)(e), o.Z.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
        }
      }
      function c() {
        let e = C.Z.cashAppPayComponent;
        if (null == e)
          throw Error(
            "Adyen CashAppPay component must be created before submitting.",
          );
        e.submit();
      }
    },
    439041: function (e, n, a) {
      var t,
        r,
        o,
        s,
        l = a(442837),
        i = a(570140);
      let _ = null,
        C = null;
      class A extends (s = l.ZP.Store) {
        get client() {
          return _;
        }
        get cashAppPayComponent() {
          return C;
        }
      }
      (o = "AdyenStore"),
        (r = "displayName") in (t = A)
          ? Object.defineProperty(t, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[r] = o);
      let u = new A(i.Z, {
        ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
          let { client: n } = e;
          _ = n;
        },
        ADYEN_TEARDOWN_CLIENT: function () {
          _ = null;
        },
        ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
          let { component: n } = e;
          C = n;
        },
      });
      n.Z = u;
    },
    296848: function (e, n, a) {
      a.d(n, {
        AT: function () {
          return N;
        },
        GY: function () {
          return c;
        },
        R4: function () {
          return d;
        },
        oE: function () {
          return P;
        },
        yb: function () {
          return E;
        },
      }),
        a(47120),
        a(653041),
        a(470079);
      var t = a(512722),
        r = a.n(t),
        o = a(913527),
        s = a.n(o),
        l = a(99945);
      a(442837);
      var i = a(821849),
        _ = a(509545),
        C = a(74538),
        A = a(981631),
        u = a(474936);
      function E(e) {
        return e.items
          .map((e) => {
            let n = _.Z.get(e.planId);
            return r()(null != n, "Unable to fetch plan"), n;
          })
          .map((e) => e.skuId);
      }
      function d(e, n, a) {
        let t = e.getCurrentSubscriptionPlanIdForGroup(a);
        return (
          (e.type === A.NYc.PREMIUM && null == t) ||
          (r()(null != t, "Current subscription has no plan in group"),
          r()(
            !(
              t === u.Xh.PREMIUM_YEAR_TIER_1 && n === u.Xh.PREMIUM_MONTH_TIER_2
            ),
            "Unexpected plan switch",
          ),
          a.indexOf(t) < a.indexOf(n))
        );
      }
      function c(e, n, a) {
        return !d(e, n, a);
      }
      function P(e, n) {
        let a = _.Z.get(e);
        if (null == a) {
          let a = u.GP[e];
          r()(null != a, "Missing hardcoded subscriptionPlan: ".concat(e));
          let t = (0, C.Wz)(a.skuId);
          !_.Z.isFetchingForSKU(t) && (0, i.GZ)(t, n);
        }
        return a;
      }
      function N(e) {
        let n = Object.keys(l.T).filter((e) => isNaN(Number(e)));
        if (e.status !== A.O0b.PAUSED)
          return { durations: n, currentDaysPaused: 0 };
        if (null == e.pauseEndsAt)
          return { durations: [], currentDaysPaused: 0 };
        {
          let a = s()(e.currentPeriodStart),
            t = Math.round(s()(e.pauseEndsAt).diff(a, "days", !0)),
            r = [];
          for (let e of n) l.T[e] > t && r.push(e);
          return { durations: r, currentDaysPaused: t };
        }
      }
    },
    99945: function (e, n, a) {
      var t, r;
      a.d(n, {
        T: function () {
          return t;
        },
      }),
        ((r = t || (t = {}))[(r.ONE_MONTH = 30)] = "ONE_MONTH"),
        (r[(r.TWO_MONTHS = 60)] = "TWO_MONTHS"),
        (r[(r.THREE_MONTHS = 90)] = "THREE_MONTHS");
    },
  },
]);
//# sourceMappingURL=99a6cea9c3ccae15e385.js.map
