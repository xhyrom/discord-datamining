"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22646"],
  {
    588797: function (n, e, t) {
      let i = (0, t(818083).B)({
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
      e.Z = i;
    },
    4434: function (n, e, t) {
      t.d(e, {
        CP: function () {
          return $;
        },
        Gq: function () {
          return ne;
        },
        R7: function () {
          return nt;
        },
      }),
        t(653041),
        t(47120),
        t(724458);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(512722),
        o = t.n(s),
        c = t(742280),
        u = t(442837),
        d = t(692547),
        m = t(481060),
        p = t(224550),
        x = t(490504),
        v = t(275850),
        S = t(672971),
        I = t(100527),
        f = t(906732),
        P = t(436774),
        g = t(374649),
        h = t(591548),
        T = t(847903),
        j = t(639119),
        y = t(53900),
        N = t(653798),
        Z = t(110818),
        b = t(553797),
        _ = t(741245),
        E = t(314182),
        C = t(42818),
        R = t(900683),
        D = t(706454),
        U = t(430824),
        L = t(246946),
        O = t(594174),
        w = t(351402),
        A = t(853872),
        M = t(509545),
        G = t(78839),
        B = t(709586),
        k = t(267642),
        W = t(63063),
        F = t(930153),
        V = t(74538),
        Y = t(937615),
        K = t(588797),
        q = t(981631),
        H = t(474936),
        X = t(231338),
        J = t(388032),
        Q = t(833887);
      function z(n) {
        let { endDate: e, className: t } = n;
        return (0, i.jsxs)("div", {
          className: t,
          children: [
            (0, i.jsx)("div", { className: Q.reverseTrialContextInfoDivider }),
            (0, i.jsx)(m.Text, {
              variant: "text-sm/normal",
              className: Q.reverseTrialContextText,
              children: J.intl.format(J.t.IeaYqq, { endDate: e }),
            }),
            (0, i.jsx)("div", { className: Q.reverseTrialContextInfoDivider }),
          ],
        });
      }
      function $(n) {
        var e, t;
        let {
            guildId: l,
            premiumSubscriptionPlan: r,
            numGuildBoosts: s,
            setNumGuildBoosts: c,
            setForceDisableSubmitButton: p,
            premiumSubscription: v,
            onClickPremiumSubscriptionLink: S,
            existingAvailableSlots: h = [],
            priceOptions: N,
          } = n,
          Z = (0, y.Z)(),
          _ = r.interval,
          E = r.intervalCount,
          C = (0, u.e7)([M.Z], () =>
            M.Z.getForSkuAndInterval((0, V.Wz)(H.Si.GUILD), _, E),
          ),
          L = (0, u.e7)([O.default], () => O.default.getCurrentUser()),
          w = (0, u.e7)([U.Z], () => U.Z.getGuild(l), [l]);
        o()(null != C, "Missing guildBoostingSubscriptionPlan"),
          o()(null != w, "Unknown guild: ".concat(l));
        let A = [{ planId: C.id, quantity: 1 }],
          $ =
            null == v
              ? void 0
              : v.items.find(
                  (n) =>
                    n.planId === H.Xh.PREMIUM_MONTH_TIER_2 ||
                    n.planId === H.Xh.PREMIUM_YEAR_TIER_2,
                );
        null != $ && A.push($);
        let nn =
            null == v
              ? void 0
              : v.items.find(
                  (n) =>
                    n.planId === H.Xh.PREMIUM_MONTH_GUILD ||
                    n.planId === H.Xh.PREMIUM_YEAR_GUILD,
                ),
          { enabled: ne } = K.Z.useExperiment({ location: "32b64a_1" }),
          nt = !ne || null == Z || !H.Tp.has(Z) || null == nn,
          { analyticsLocations: ni } = (0, f.ZP)(),
          [nl, nr] = (0, g.ED)({
            subscriptionId: null == v ? void 0 : v.id,
            items: A,
            renewal: !0,
            paymentSourceId: null == v ? void 0 : v.paymentSourceId,
            currency: N.currency,
            preventFetch: nt,
            analyticsLocations: ni,
            analyticsLocation: I.Z.GUILD_BOOSTING_PLAN_SELECT,
          }),
          na = !nt && null == nl && null == nr,
          ns =
            (null === (t = (0, j.N)()) || void 0 === t
              ? void 0
              : null === (e = t.subscription_trial) || void 0 === e
                ? void 0
                : e.sku_id) === H.Si.TIER_2,
          no = V.ZP.hasBoostDiscount(L) && null != C.premiumUserPrice,
          nc =
            null == nl
              ? void 0
              : nl.invoiceItems.find((n) => n.subscriptionPlanId === C.id),
          nu =
            null != nc
              ? {
                  amount: nc.amount,
                  tax: 0,
                  taxInclusive: !0,
                  currency: N.currency,
                }
              : V.ZP.getPrice(C.id, no, !1, N),
          nd = s * nu.amount,
          nm = (0, u.e7)(
            [G.ZP],
            () =>
              G.ZP.inReverseTrial() && V.ZP.hasBoostDiscount(L) && null != v,
          ),
          np =
            V.ZP.hasBoostDiscount(L) && null != v
              ? J.intl.format(J.t.hf6YOT, {
                  planName: V.ZP.getDisplayPremiumType(v.planId),
                })
              : J.intl.format(ns ? J.t["ba1L7+"] : J.t.fkffDQ, {
                  onPremiumSubscriptionClick: S,
                  discountPercentage: (0, F.T3)(D.default.locale, H.Rr / 100),
                  freeSubscriptionCount: H.cb,
                }),
          nx = h.filter((n) => (0, k.tl)(n)).length,
          nv = (0, V.Ap)(N.paymentSourceId),
          { ipCountryCode: nS } = (0, T.Z)(),
          nI = "HR" === nS && nu.currency === X.pK.EUR;
        return (
          p(na),
          (0, i.jsxs)("div", {
            children: [
              nm && null != v
                ? (0, i.jsx)(z, { endDate: v.currentPeriodEnd })
                : (0, i.jsx)("div", {
                    className: a()(Q.planSelectText, Q.bodyText),
                    children: J.intl.string(J.t.jNY1FB),
                  }),
              h.length > 0
                ? (0, i.jsxs)("div", {
                    className: Q.existingSlotNotice,
                    children: [
                      (0, i.jsx)(B.Z, {
                        className: Q.existingSlotIcon,
                        color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          J.intl.format(J.t.F8xlho, { slotCount: h.length }),
                          nx > 0 && null != v
                            ? (0, i.jsx)(m.Tooltip, {
                                text: J.intl.formatToPlainString(J.t.SFpsCA, {
                                  canceledCount: nx,
                                  date: v.currentPeriodEnd,
                                }),
                                children: (n) =>
                                  (0, i.jsx)(m.CircleWarningIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    ...n,
                                    className: Q.existingSlotTooltipWarningIcon,
                                    color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              })
                            : null,
                        ],
                      }),
                    ],
                  })
                : null,
              (0, i.jsxs)("div", {
                className: Q.planSelectRow,
                children: [
                  (0, i.jsxs)("div", {
                    className: Q.planSelectorWrapper,
                    children: [
                      (0, i.jsx)(m.NumberInputStepper, {
                        value: s,
                        onChange: (n) => c(n),
                        className: Q.__invalid_planSelector,
                        minValue: 1,
                        maxValue: 30,
                      }),
                      (0, i.jsx)("div", {
                        className: Q.planSelectorLabel,
                        children: nv
                          ? (function (n) {
                              let { intervalType: e, intervalCount: t = 1 } = n;
                              return e === H.rV.YEAR
                                ? J.intl.string(J.t.YDpAzc)
                                : e === H.rV.MONTH && 1 === t
                                  ? J.intl.string(J.t["6ZR3Bw"])
                                  : null;
                            })({ intervalType: _, intervalCount: E })
                          : J.intl.string(J.t.K9Bmzc),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: a()(Q.planSelectorPreviewPrice, {
                      [Q.loadingSpinner]: na,
                    }),
                    children: na
                      ? (0, i.jsx)(m.Spinner, {})
                      : nv
                        ? (0, Y.T4)(nu.amount, nu.currency)
                        : (function (n) {
                            let {
                                amount: e,
                                currency: t,
                                intervalType: i,
                                intervalCount: l = 1,
                              } = n,
                              r = (0, Y.T4)(e, t);
                            if (i === H.rV.YEAR)
                              return J.intl.formatToPlainString(J.t["8M04YG"], {
                                price: r,
                              });
                            if (i === H.rV.MONTH && 1 === l)
                              return J.intl.formatToPlainString(J.t.VStWCQ, {
                                price: r,
                              });
                            if (i === H.rV.MONTH && l > 1)
                              return J.intl.formatToPlainString(J.t.xJvAFR, {
                                price: r,
                              });
                            return null;
                          })({
                            intervalType: _,
                            intervalCount: E,
                            amount: nu.amount,
                            currency: nu.currency,
                          }),
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: Q.planSelectDivider }),
              (0, i.jsxs)("div", {
                className: Q.planSelectRow,
                children: [
                  (0, i.jsx)("div", {
                    className: Q.planSelectorSubtotal,
                    children: J.intl.string(J.t.RtA7nZ),
                  }),
                  (0, i.jsx)("div", {
                    className: a()(Q.__invalid_planSelectorSubtotalPrice, {
                      [Q.loadingSpinner]: na,
                    }),
                    children: na
                      ? (0, i.jsx)(m.Spinner, {})
                      : (0, i.jsx)(b.Z, {
                          price: nd,
                          currency: nu.currency,
                          intervalType: _,
                          intervalCount: E,
                          isPrepaidPaymentSource: nv,
                        }),
                  }),
                ],
              }),
              nI &&
                (0, i.jsx)(x.Z, {
                  message: J.intl.formatToPlainString(J.t["9hnZoK"], {
                    kunaPriceWithCurrency: (0, Y.T4)(7.5345 * nd, X.pK.HRK),
                  }),
                }),
              (0, i.jsx)(x.Z, {
                message: J.intl.format(J.t.Om31w8, {
                  documentationLink: W.Z.getArticleURL(q.BhN.LOCALIZED_PRICING),
                }),
              }),
              nm
                ? (0, i.jsx)(R.e, {})
                : (0, i.jsx)(R.Z, { text: np, color: P.JX.PREMIUM_TIER_2 }),
            ],
          })
        );
      }
      function nn(n) {
        let {
            premiumSubscription: e,
            premiumSubscriptionPlan: t,
            proratedInvoicePreview: l,
            renewalInvoicePreview: r,
            priceOptions: a,
          } = n,
          s = t.interval,
          c = t.intervalCount,
          d = (0, u.e7)([M.Z], () =>
            M.Z.getForSkuAndInterval((0, V.Wz)(H.Si.GUILD), s, c),
          );
        o()(null != d, "Missing guildBoostingSubscriptionPlan");
        let m = (n) =>
            (0, h.j)(l.invoiceItems).find(
              (e) => H.Z1.has(e.subscriptionPlanId) && n(e),
            ),
          p = m((n) => n.amount >= 0);
        o()(null != p, "Missing guild boosting invoice item");
        let x = m((n) => n.amount < 0),
          v = null != x ? p.quantity - x.quantity : p.quantity,
          S = l.invoiceItems.filter((n) => (0, V.uZ)(n.subscriptionPlanId)),
          I = S.reduce((n, e) => n + e.amount, 0),
          f = (0, g.pV)(p) * v,
          P = (0, Y.T4)(f, l.currency),
          T = (0, Y.og)(P, s, c),
          j =
            (0, Y.T4)(l.total, l.currency) +
            (l.currency !== X.pK.USD ? "*" : ""),
          y = l.total - f - I,
          Z = p.discounts.map((n) => {
            let e = n.amount / p.quantity;
            return { ...n, amount: e * v };
          }),
          b = (0, V.Ap)(a.paymentSourceId),
          _ = (0, u.e7)([G.ZP], () => G.ZP.inReverseTrial());
        return (0, i.jsxs)(i.Fragment, {
          children: [
            b
              ? null
              : _ && null != e
                ? (0, i.jsx)(z, {
                    endDate: e.currentPeriodEnd,
                    className: Q.reverseTrialContextMarginBottom,
                  })
                : (0, i.jsx)(C.hG, { proratedInvoice: l, renewalInvoice: r }),
            (0, i.jsxs)(N.PO, {
              children: [
                (0, i.jsx)(N.q9, { children: J.intl.string(J.t.CWIwmp) }),
                (0, i.jsx)(N.i$, {
                  label: J.intl.formatToPlainString(J.t.a3cAOj, {
                    numGuildSubscriptions: v,
                    planName: (0, V.Gf)(d.id, !1, b),
                  }),
                  value: b ? P : T,
                  discounts: Z,
                  originalAmount: p.subscriptionPlanPrice * v,
                  currency: l.currency,
                  interval: d.interval,
                  intervalCount: d.intervalCount,
                }),
                0 !== I
                  ? (0, i.jsx)(N.R$, {
                      label: (0, i.jsx)(C.As, {
                        label: J.intl.formatToPlainString(J.t.ZSVgeX, {
                          planName: (0, V.aq)(S[0].subscriptionPlanId),
                        }),
                        tooltipText: J.intl.string(J.t.JmwQJC),
                      }),
                      value: (0, Y.T4)(I, l.currency),
                    })
                  : null,
                0 !== y
                  ? (0, i.jsx)(N.R$, {
                      label: (0, i.jsx)(C.As, {
                        label: J.intl.string(J.t["+as5ZW"]),
                        tooltipText: J.intl.string(J.t.JmwQJC),
                      }),
                      value: (0, Y.T4)(y, l.currency),
                    })
                  : null,
                (0, i.jsx)(N.KU, {}),
                (0, i.jsx)(N.Ji, {
                  label: J.intl.format(
                    l.taxInclusive ? (b ? J.t.BqdxQk : J.t.XH4raG) : J.t.RUI48P,
                    {},
                  ),
                  value: j,
                }),
                null != e
                  ? (0, i.jsx)(C.nd, {
                      premiumSubscription: e,
                      proratedInvoice: l,
                      renewalInvoice: r,
                      isUpdate: !0,
                      isPrepaidPaymentSource: b,
                      isTrial: _,
                    })
                  : (0, i.jsx)(C.nd, {
                      renewalInvoice: r,
                      priceOptions: a,
                      isPrepaidPaymentSource: b,
                    }),
              ],
            }),
          ],
        });
      }
      function ne(n) {
        var e, t;
        let l,
          r,
          {
            paymentSources: a,
            priceOptions: s,
            currentPremiumSubscription: o,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: x,
            newAdditionalPlans: P,
            onPaymentSourceChange: h,
            onPaymentSourceAdd: T,
            onPurchaseTermsChange: j,
            legalTermsNodeRef: y,
            hasLegalTermsFlash: N,
          } = n,
          Z = s.paymentSourceId,
          b = (0, u.e7)([A.Z], () =>
            null != d ? A.Z.getPaymentSource(d) : null,
          ),
          _ = (0, u.e7)([L.Z], () => L.Z.hidePersonalInformation);
        l = null != o ? (0, V.Zx)(o, P[0].quantity, P[0].planId) : P;
        let { analyticsLocations: C } = (0, f.ZP)(),
          [R] = (0, g.ED)({
            subscriptionId: null == o ? void 0 : o.id,
            items: l,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: Z,
            currency: s.currency,
            analyticsLocations: C,
            analyticsLocation: I.Z.GUILD_BOOSTING_REVIEW_PRORATED,
          }),
          [D] = (0, g.ED)({
            subscriptionId: null == o ? void 0 : o.id,
            items: l,
            renewal: !0,
            paymentSourceId: Z,
            currency: s.currency,
            analyticsLocations: C,
            analyticsLocation: I.Z.GUILD_BOOSTING_REVIEW_RENEWAL,
          });
        null != D &&
          (r = {
            amount: D.total,
            currency: D.currency,
            tax: D.tax,
            taxInclusive: D.taxInclusive,
          });
        let U = c.M.EEA_COUNTRIES.has(w.Z.ipCountryCodeWithFallback);
        return (0, i.jsxs)("div", {
          children: [
            null != R && null != D
              ? (0, i.jsx)(nn, {
                  premiumSubscription: o,
                  premiumSubscriptionPlan: x,
                  proratedInvoicePreview: R,
                  renewalInvoicePreview: D,
                  priceOptions: s,
                })
              : null,
            (0, i.jsxs)("div", {
              className: Q.paymentSourceWrapper,
              children: [
                (0, i.jsx)(m.FormTitle, {
                  tag: m.FormTitleTags.H5,
                  children: J.intl.string(J.t.mmDvV1),
                }),
                null != d
                  ? null != b
                    ? (0, i.jsx)(m.TooltipContainer, {
                        text: J.intl.string(J.t.XiuuV1),
                        children: (0, i.jsx)(v.Z, {
                          paymentSources: [b],
                          selectedPaymentSourceId: b.id,
                          hidePersonalInformation: _,
                          disabled: !0,
                        }),
                      })
                    : (0, i.jsx)("div", { children: (0, i.jsx)(m.Spinner, {}) })
                  : (0, i.jsx)(v.Z, {
                      paymentSources: Object.values(a),
                      selectedPaymentSourceId: Z,
                      onChange: h,
                      onPaymentSourceAdd: T,
                      hidePersonalInformation: _,
                    }),
              ],
            }),
            (0, i.jsx)(E.Z, {
              isActive: N,
              ref: y,
              children:
                null != r &&
                (0, i.jsx)(S.Z, {
                  onChange: j,
                  forceShow: !0,
                  finePrint: (0, i.jsx)(p.Z, {
                    subscriptionPlan: x,
                    paymentSourceType:
                      null === (e = a[null != Z ? Z : ""]) || void 0 === e
                        ? void 0
                        : e.type,
                    basePrice: r,
                    productLine: q.POd.BOOST,
                  }),
                  showPricingLink:
                    (null !== (t = null == R ? void 0 : R.currency) &&
                    void 0 !== t
                      ? t
                      : X.pK.USD) !== X.pK.USD,
                  showWithdrawalWaiver: U,
                  subscriptionPlan: x,
                }),
            }),
          ],
        });
      }
      function nt(n) {
        let e,
          {
            onClose: t,
            guild: r,
            guildBoostQuantity: a,
            isTransfer: s = !1,
            withAnimation: o = !0,
            paymentSourceType: c,
          } = n,
          { theme: u } = (0, m.useThemeContext)(),
          [d, p] = l.useState(Z.fe.Scenes.ENTRY),
          [x, v] = l.useState(!1);
        return (
          (e = s
            ? null == r
              ? J.intl.format(J.t.P52e1t, {})
              : J.intl.format(J.t["4UnIk5"], { guildName: r.name })
            : null == r
              ? J.intl.format(J.t.SZ5ohY, { guildSubscriptionQuantity: a })
              : J.intl.format(J.t.GxK3Mj, {
                  guildName: r.name,
                  guildSubscriptionQuantity: a,
                })),
          (0, i.jsxs)("div", {
            className: Q.confirmationContainer,
            children: [
              o
                ? (0, i.jsx)(Z.fe, {
                    className: Q.confirmationAnimation,
                    nextScene: d,
                    onScenePlay: (n) => {
                      if (!x)
                        switch (n) {
                          case Z.fe.Scenes.ENTRY:
                            return p(Z.fe.Scenes.IDLE);
                          case Z.fe.Scenes.IDLE:
                            return p(Z.fe.Scenes.SUCCESS);
                          case Z.fe.Scenes.SUCCESS:
                            return v(!0), p(Z.fe.Scenes.IDLE);
                        }
                    },
                    pauseWhileUnfocused: !1,
                  })
                : null,
              (0, i.jsx)(_.C, {
                className: Q.confirmationUpgradedBanner,
                theme: u,
                premiumType: H.p9.TIER_2,
                type: X.X7.has(null != c ? c : X.He.UNKNOWN)
                  ? _.C.Types.PREMIUM_PAYMENT_STARTED
                  : _.C.Types.GUILD_BOOST_APPLIED,
              }),
              (0, i.jsx)("div", { className: Q.confirmationText, children: e }),
              (0, i.jsx)(m.Button, {
                onClick: t,
                children: J.intl.string(J.t["/iTxg4"]),
              }),
            ],
          })
        );
      }
    },
    900683: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
        e: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(481060),
        s = t(388032),
        o = t(66294),
        c = t(531599);
      function u() {
        return (0, i.jsxs)("div", {
          className: r()(o.upsellFooter, o.reverseTrialUpsellContainer),
          children: [
            (0, i.jsx)("img", {
              src: c.Z,
              alt: "reverse trial unlock",
              className: o.unlockIcon,
            }),
            (0, i.jsx)(a.Text, {
              variant: "text-sm/medium",
              className: o.upsellText,
              children: s.intl.format(s.t.f5VHKi, {}),
            }),
          ],
        });
      }
      function d(n) {
        let { text: e, color: t } = n;
        return (0, i.jsxs)("div", {
          className: o.upsellFooter,
          children: [
            (0, i.jsx)(a.NitroWheelIcon, {
              size: "md",
              className: o.upsellFooterIcon,
              color: t,
            }),
            (0, i.jsx)("div", { children: e }),
          ],
        });
      }
    },
    531599: function (n, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg";
    },
  },
]);
//# sourceMappingURL=311e560e85f59712d5ec.js.map
