"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22646"],
  {
    588797: function (e, n, s) {
      let i = (0, s(818083).B)({
        kind: "user",
        id: "2023-06_guild_boosting_legacy_pricing_fix_experiment",
        label: "Guild Boosting Legacy Pricing Fix Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Use Invoice Preview for Boost Pricing",
            config: { enabled: !0 },
          },
        ],
      });
      n.Z = i;
    },
    4434: function (e, n, s) {
      s.d(n, {
        CP: function () {
          return z;
        },
        Gq: function () {
          return $;
        },
        R7: function () {
          return ee;
        },
      }),
        s(653041),
        s(47120),
        s(724458);
      var i = s(735250),
        l = s(470079),
        t = s(120356),
        a = s.n(t),
        r = s(512722),
        c = s.n(r),
        o = s(742280),
        u = s(442837),
        I = s(692547),
        _ = s(481060),
        S = s(224550),
        d = s(490504),
        E = s(275850),
        T = s(672971),
        P = s(100527),
        p = s(906732),
        N = s(436774),
        m = s(374649),
        R = s(591548),
        U = s(847903),
        C = s(639119),
        L = s(53900),
        O = s(653798),
        A = s(110818),
        M = s(553797),
        g = s(741245),
        v = s(314182),
        D = s(42818),
        x = s(900683),
        Z = s(706454),
        f = s(430824),
        y = s(246946),
        h = s(594174),
        j = s(351402),
        G = s(853872),
        b = s(509545),
        B = s(709586),
        H = s(267642),
        w = s(63063),
        V = s(930153),
        W = s(74538),
        F = s(937615),
        Y = s(588797),
        k = s(981631),
        K = s(474936),
        q = s(231338),
        X = s(689938),
        J = s(230721);
      function z(e) {
        var n, s;
        let {
            guildId: l,
            premiumSubscriptionPlan: t,
            numGuildBoosts: r,
            setNumGuildBoosts: o,
            setForceDisableSubmitButton: S,
            premiumSubscription: E,
            onClickPremiumSubscriptionLink: T,
            existingAvailableSlots: R = [],
            priceOptions: O,
          } = e,
          A = (0, L.Z)(),
          g = t.interval,
          v = t.intervalCount,
          D = (0, u.e7)([b.Z], () =>
            b.Z.getForSkuAndInterval((0, W.Wz)(K.Si.GUILD), g, v),
          ),
          y = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
          j = (0, u.e7)([f.Z], () => f.Z.getGuild(l), [l]);
        c()(null != D, "Missing guildBoostingSubscriptionPlan"),
          c()(null != j, "Unknown guild: ".concat(l));
        let G = [{ planId: D.id, quantity: 1 }],
          z =
            null == E
              ? void 0
              : E.items.find(
                  (e) =>
                    e.planId === K.Xh.PREMIUM_MONTH_TIER_2 ||
                    e.planId === K.Xh.PREMIUM_YEAR_TIER_2,
                );
        null != z && G.push(z);
        let Q =
            null == E
              ? void 0
              : E.items.find(
                  (e) =>
                    e.planId === K.Xh.PREMIUM_MONTH_GUILD ||
                    e.planId === K.Xh.PREMIUM_YEAR_GUILD,
                ),
          { enabled: $ } = Y.Z.useExperiment({ location: "32b64a_1" }),
          ee = !$ || null == A || !K.Tp.has(A) || null == Q,
          { analyticsLocations: en } = (0, p.ZP)(),
          [es, ei] = (0, m.ED)({
            subscriptionId: null == E ? void 0 : E.id,
            items: G,
            renewal: !0,
            paymentSourceId: null == E ? void 0 : E.paymentSourceId,
            currency: O.currency,
            preventFetch: ee,
            analyticsLocations: en,
            analyticsLocation: P.Z.GUILD_BOOSTING_PLAN_SELECT,
          }),
          el = !ee && null == es && null == ei,
          et =
            (null === (s = (0, C.N)()) || void 0 === s
              ? void 0
              : null === (n = s.subscription_trial) || void 0 === n
                ? void 0
                : n.sku_id) === K.Si.TIER_2,
          ea = W.ZP.hasBoostDiscount(y) && null != D.premiumUserPrice,
          er =
            null == es
              ? void 0
              : es.invoiceItems.find((e) => e.subscriptionPlanId === D.id),
          ec =
            null != er
              ? {
                  amount: er.amount,
                  tax: 0,
                  taxInclusive: !0,
                  currency: O.currency,
                }
              : W.ZP.getPrice(D.id, ea, !1, O),
          eo = r * ec.amount,
          eu =
            W.ZP.hasBoostDiscount(y) && null != E
              ? X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_DISCOUNT.format(
                  { planName: W.ZP.getDisplayPremiumType(E.planId) },
                )
              : (et
                  ? X.Z.Messages
                      .GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL_TRIAL_VARIANT
                  : X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL
                ).format({
                  onPremiumSubscriptionClick: T,
                  discountPercentage: (0, V.T3)(Z.default.locale, K.Rr / 100),
                  freeSubscriptionCount: K.cb,
                }),
          eI = R.filter((e) => (0, H.tl)(e)).length,
          e_ = (0, W.Ap)(O.paymentSourceId),
          { ipCountryCode: eS } = (0, U.Z)(),
          ed = "HR" === eS && ec.currency === q.pK.EUR;
        return (
          S(el),
          (0, i.jsxs)("div", {
            className: J.planSelectStep,
            children: [
              (0, i.jsx)("div", {
                className: a()(J.planSelectText, J.bodyText),
                children:
                  X.Z.Messages
                    .GUILD_SUBSCRIPTION_PURCHASE_MODAL_STEP_SELECT_DESCRIPTION,
              }),
              R.length > 0
                ? (0, i.jsxs)("div", {
                    className: J.existingSlotNotice,
                    children: [
                      (0, i.jsx)(B.Z, {
                        className: J.existingSlotIcon,
                        color: I.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_UNUSED_SLOT_NOTICE.format(
                            { slotCount: R.length },
                          ),
                          eI > 0 && null != E
                            ? (0, i.jsx)(_.Tooltip, {
                                text: X.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format(
                                  {
                                    canceledCount: eI,
                                    date: E.currentPeriodEnd,
                                  },
                                ),
                                children: (e) =>
                                  (0, i.jsx)(_.CircleWarningIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    className: J.existingSlotTooltipWarningIcon,
                                    color: I.Z.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              })
                            : null,
                        ],
                      }),
                    ],
                  })
                : null,
              (0, i.jsxs)("div", {
                className: J.planSelectRow,
                children: [
                  (0, i.jsxs)("div", {
                    className: J.planSelectorWrapper,
                    children: [
                      (0, i.jsx)(_.NumberInputStepper, {
                        value: r,
                        onChange: (e) => o(e),
                        className: J.__invalid_planSelector,
                        minValue: 1,
                        maxValue: 30,
                      }),
                      (0, i.jsx)("div", {
                        className: J.planSelectorLabel,
                        children: e_
                          ? (function (e) {
                              let { intervalType: n, intervalCount: s = 1 } = e;
                              return n === K.rV.YEAR
                                ? X.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR
                                : n === K.rV.MONTH && 1 === s
                                  ? X.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH
                                  : null;
                            })({ intervalType: g, intervalCount: v })
                          : X.Z.Messages
                              .GUILD_SUBSCRIPTION_PURCHASE_MODAL_COUNTER,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: a()(J.planSelectorPreviewPrice, {
                      [J.loadingSpinner]: el,
                    }),
                    children: el
                      ? (0, i.jsx)(_.Spinner, {})
                      : e_
                        ? (0, F.T4)(ec.amount, ec.currency)
                        : (function (e) {
                            let {
                                amount: n,
                                currency: s,
                                intervalType: i,
                                intervalCount: l = 1,
                              } = e,
                              t = (0, F.T4)(n, s);
                            if (i === K.rV.YEAR)
                              return X.Z.Messages.BILLING_PRICE_PER_YEAR_EACH.format(
                                { price: t },
                              );
                            if (i === K.rV.MONTH && 1 === l)
                              return X.Z.Messages.BILLING_PRICE_PER_MONTH_EACH.format(
                                { price: t },
                              );
                            if (i === K.rV.MONTH && l > 1)
                              return X.Z.Messages.BILLING_PRICE_PER_MULTI_MONTH_EACH.format(
                                { price: t },
                              );
                            return null;
                          })({
                            intervalType: g,
                            intervalCount: v,
                            amount: ec.amount,
                            currency: ec.currency,
                          }),
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: J.planSelectDivider }),
              (0, i.jsxs)("div", {
                className: J.planSelectRow,
                children: [
                  (0, i.jsx)("div", {
                    className: J.planSelectorSubtotal,
                    children:
                      X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBTOTAL,
                  }),
                  (0, i.jsx)("div", {
                    className: a()(J.__invalid_planSelectorSubtotalPrice, {
                      [J.loadingSpinner]: el,
                    }),
                    children: el
                      ? (0, i.jsx)(_.Spinner, {})
                      : (0, i.jsx)(M.Z, {
                          price: eo,
                          currency: ec.currency,
                          intervalType: g,
                          intervalCount: v,
                          isPrepaidPaymentSource: e_,
                        }),
                  }),
                ],
              }),
              ed &&
                (0, i.jsx)(d.Z, {
                  message:
                    X.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                      kunaPriceWithCurrency: (0, F.T4)(7.5345 * eo, q.pK.HRK),
                    }),
                }),
              (0, i.jsx)(d.Z, {
                message: X.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                  documentationLink: w.Z.getArticleURL(k.BhN.LOCALIZED_PRICING),
                }),
              }),
              (0, i.jsx)(x.Z, { text: eu, color: N.JX.PREMIUM_TIER_2 }),
            ],
          })
        );
      }
      function Q(e) {
        let {
            premiumSubscription: n,
            premiumSubscriptionPlan: s,
            proratedInvoicePreview: l,
            renewalInvoicePreview: t,
            priceOptions: a,
          } = e,
          r = s.interval,
          o = s.intervalCount,
          I = (0, u.e7)([b.Z], () =>
            b.Z.getForSkuAndInterval((0, W.Wz)(K.Si.GUILD), r, o),
          );
        c()(null != I, "Missing guildBoostingSubscriptionPlan");
        let _ = (e) =>
            (0, R.j)(l.invoiceItems).find(
              (n) => K.Z1.has(n.subscriptionPlanId) && e(n),
            ),
          S = _((e) => e.amount >= 0);
        c()(null != S, "Missing guild boosting invoice item");
        let d = _((e) => e.amount < 0),
          E = null != d ? S.quantity - d.quantity : S.quantity,
          T = l.invoiceItems.filter((e) => (0, W.uZ)(e.subscriptionPlanId)),
          P = T.reduce((e, n) => e + n.amount, 0),
          p = (0, m.pV)(S) * E,
          N = (0, F.T4)(p, l.currency),
          U = (0, F.og)(N, r, o),
          C =
            (0, F.T4)(l.total, l.currency) +
            (l.currency !== q.pK.USD ? "*" : ""),
          L = l.total - p - P,
          A = S.discounts.map((e) => {
            let n = e.amount / S.quantity;
            return { ...e, amount: n * E };
          }),
          M = (0, W.Ap)(a.paymentSourceId);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            M
              ? null
              : (0, i.jsx)(D.hG, { proratedInvoice: l, renewalInvoice: t }),
            (0, i.jsxs)(O.PO, {
              children: [
                (0, i.jsx)(O.q9, {
                  children:
                    X.Z.Messages
                      .GUILD_SUBSCRIPTION_PURCHASE_MODAL_PURCHASE_DETAILS_HEADER,
                }),
                (0, i.jsx)(O.i$, {
                  label:
                    X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format(
                      {
                        numGuildSubscriptions: E,
                        planName: (0, W.Gf)(I.id, !1, M),
                      },
                    ),
                  value: M ? N : U,
                  discounts: A,
                  originalAmount: S.subscriptionPlanPrice * E,
                  currency: l.currency,
                  interval: I.interval,
                  intervalCount: I.intervalCount,
                }),
                0 !== P
                  ? (0, i.jsx)(O.R$, {
                      label: (0, i.jsx)(D.As, {
                        label:
                          X.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format(
                            { planName: (0, W.aq)(T[0].subscriptionPlanId) },
                          ),
                        tooltipText:
                          X.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP,
                      }),
                      value: (0, F.T4)(P, l.currency),
                    })
                  : null,
                0 !== L
                  ? (0, i.jsx)(O.R$, {
                      label: (0, i.jsx)(D.As, {
                        label:
                          X.Z.Messages
                            .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                        tooltipText:
                          X.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP,
                      }),
                      value: (0, F.T4)(L, l.currency),
                    })
                  : null,
                (0, i.jsx)(O.KU, {}),
                (0, i.jsx)(O.Ji, {
                  label: (l.taxInclusive
                    ? M
                      ? X.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE
                      : X.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE
                    : X.Z.Messages.BILLING_INVOICE_TODAY_TOTAL
                  ).format(),
                  value: C,
                }),
                null != n
                  ? (0, i.jsx)(D.nd, {
                      premiumSubscription: n,
                      proratedInvoice: l,
                      renewalInvoice: t,
                      isUpdate: !0,
                      isPrepaidPaymentSource: M,
                    })
                  : (0, i.jsx)(D.nd, {
                      renewalInvoice: t,
                      priceOptions: a,
                      isPrepaidPaymentSource: M,
                    }),
              ],
            }),
          ],
        });
      }
      function $(e) {
        var n, s;
        let l,
          t,
          {
            paymentSources: a,
            priceOptions: r,
            currentPremiumSubscription: c,
            premiumSubscriptionPaymentSourceId: I,
            premiumSubscriptionPlan: d,
            newAdditionalPlans: N,
            onPaymentSourceChange: R,
            onPaymentSourceAdd: U,
            onPurchaseTermsChange: C,
            legalTermsNodeRef: L,
            hasLegalTermsFlash: O,
          } = e,
          A = r.paymentSourceId,
          M = (0, u.e7)([G.Z], () =>
            null != I ? G.Z.getPaymentSource(I) : null,
          ),
          g = (0, u.e7)([y.Z], () => y.Z.hidePersonalInformation);
        l = null != c ? (0, W.Zx)(c, N[0].quantity, N[0].planId) : N;
        let { analyticsLocations: D } = (0, p.ZP)(),
          [x] = (0, m.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: l,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: A,
            currency: r.currency,
            analyticsLocations: D,
            analyticsLocation: P.Z.GUILD_BOOSTING_REVIEW_PRORATED,
          }),
          [Z] = (0, m.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: l,
            renewal: !0,
            paymentSourceId: A,
            currency: r.currency,
            analyticsLocations: D,
            analyticsLocation: P.Z.GUILD_BOOSTING_REVIEW_RENEWAL,
          });
        null != Z &&
          (t = {
            amount: Z.total,
            currency: Z.currency,
            tax: Z.tax,
            taxInclusive: Z.taxInclusive,
          });
        let f = o.M.EEA_COUNTRIES.has(j.Z.ipCountryCodeWithFallback);
        return (0, i.jsxs)("div", {
          className: J.reviewStep,
          children: [
            null != x && null != Z
              ? (0, i.jsx)(Q, {
                  premiumSubscription: c,
                  premiumSubscriptionPlan: d,
                  proratedInvoicePreview: x,
                  renewalInvoicePreview: Z,
                  priceOptions: r,
                })
              : null,
            (0, i.jsxs)("div", {
              className: J.paymentSourceWrapper,
              children: [
                (0, i.jsx)(_.FormTitle, {
                  tag: _.FormTitleTags.H5,
                  children:
                    X.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                }),
                null != I
                  ? null != M
                    ? (0, i.jsx)(_.TooltipContainer, {
                        text: X.Z.Messages
                          .GUILD_SUBSCRIPTION_PURCHASE_MODAL_PAYMENT_SOURCE_TOOLTIP,
                        children: (0, i.jsx)(E.Z, {
                          paymentSources: [M],
                          selectedPaymentSourceId: M.id,
                          hidePersonalInformation: g,
                          disabled: !0,
                        }),
                      })
                    : (0, i.jsx)("div", { children: (0, i.jsx)(_.Spinner, {}) })
                  : (0, i.jsx)(E.Z, {
                      paymentSources: Object.values(a),
                      selectedPaymentSourceId: A,
                      onChange: R,
                      onPaymentSourceAdd: U,
                      hidePersonalInformation: g,
                    }),
              ],
            }),
            (0, i.jsx)(v.Z, {
              isActive: O,
              ref: L,
              children:
                null != t &&
                (0, i.jsx)(T.Z, {
                  onChange: C,
                  forceShow: !0,
                  finePrint: (0, i.jsx)(S.Z, {
                    subscriptionPlan: d,
                    paymentSourceType:
                      null === (n = a[null != A ? A : ""]) || void 0 === n
                        ? void 0
                        : n.type,
                    basePrice: t,
                  }),
                  showPricingLink:
                    (null !== (s = null == x ? void 0 : x.currency) &&
                    void 0 !== s
                      ? s
                      : q.pK.USD) !== q.pK.USD,
                  showWithdrawalWaiver: f,
                  subscriptionPlan: d,
                }),
            }),
          ],
        });
      }
      function ee(e) {
        let n,
          {
            onClose: s,
            guild: t,
            guildBoostQuantity: a,
            isTransfer: r = !1,
            withAnimation: c = !0,
            paymentSourceType: o,
          } = e,
          { theme: u } = (0, _.useThemeContext)(),
          [I, S] = l.useState(A.fe.Scenes.ENTRY),
          [d, E] = l.useState(!1);
        return (
          (n = r
            ? null == t
              ? X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION_GENERIC_GUILD.format()
              : X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION.format(
                  { guildName: t.name },
                )
            : null == t
              ? X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION_GENERIC_GUILD.format(
                  { guildSubscriptionQuantity: a },
                )
              : X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION.format(
                  { guildName: t.name, guildSubscriptionQuantity: a },
                )),
          (0, i.jsxs)("div", {
            className: J.confirmationContainer,
            children: [
              c
                ? (0, i.jsx)(A.fe, {
                    className: J.confirmationAnimation,
                    nextScene: I,
                    onScenePlay: (e) => {
                      if (!d)
                        switch (e) {
                          case A.fe.Scenes.ENTRY:
                            return S(A.fe.Scenes.IDLE);
                          case A.fe.Scenes.IDLE:
                            return S(A.fe.Scenes.SUCCESS);
                          case A.fe.Scenes.SUCCESS:
                            return E(!0), S(A.fe.Scenes.IDLE);
                        }
                    },
                    pauseWhileUnfocused: !1,
                  })
                : null,
              (0, i.jsx)(g.C, {
                className: J.confirmationUpgradedBanner,
                theme: u,
                premiumType: K.p9.TIER_2,
                type: q.X7.has(null != o ? o : q.He.UNKNOWN)
                  ? g.C.Types.PREMIUM_PAYMENT_STARTED
                  : g.C.Types.GUILD_BOOST_APPLIED,
              }),
              (0, i.jsx)("div", { className: J.confirmationText, children: n }),
              (0, i.jsx)(_.Button, {
                onClick: s,
                children:
                  X.Z.Messages
                    .GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_CLOSE_BUTTON,
              }),
            ],
          })
        );
      }
    },
    900683: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = s(735250);
      s(470079);
      var l = s(481060),
        t = s(341896);
      function a(e) {
        let { text: n, color: s } = e;
        return (0, i.jsxs)("div", {
          className: t.upsellFooter,
          children: [
            (0, i.jsx)(l.NitroWheelIcon, {
              size: "md",
              className: t.upsellFooterIcon,
              color: s,
            }),
            (0, i.jsx)("div", { children: n }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=5023fa6a24cdff7412ac.js.map
