"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78836"],
  {
    631818: function (e, n, a) {
      var t = a(818083);
      n.Z = (0, t.B)({
        kind: "user",
        id: "2022-12_localized_pricing_poland_notice",
        label: "Localized Pricing Poland Notice",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable Poland Notice", config: { enabled: !0 } },
        ],
      });
    },
    987033: function (e, n, a) {
      var t = a(818083);
      n.Z = (0, t.B)({
        kind: "user",
        id: "2023-05_localized_pricing_turkey_notice",
        label: "Localized Pricing Turkey Notice",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable Turkey Notice", config: { enabled: !0 } },
        ],
      });
    },
    53900: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return i;
        },
      });
      var t = a(442837),
        o = a(853872),
        r = a(78839);
      function i() {
        let e = (0, t.e7)([r.ZP], () => r.ZP.getPremiumTypeSubscription());
        return (0, t.e7)([o.Z], () => {
          var n;
          return (null == e ? void 0 : e.paymentSourceId) != null
            ? null === (n = o.Z.getPaymentSource(e.paymentSourceId)) ||
              void 0 === n
              ? void 0
              : n.country
            : null;
        });
      }
    },
    55610: function (e, n, a) {
      a.d(n, {
        U: function () {
          return T;
        },
      });
      var t = a(735250);
      a(470079);
      var o = a(120356),
        r = a.n(o),
        i = a(512722),
        _ = a.n(i),
        s = a(481060),
        I = a(63063),
        l = a(631818),
        c = a(987033),
        u = a(53900),
        d = a(981631),
        f = a(689938),
        N = a(3936);
      function T() {
        let e = (0, u.Z)(),
          { enabled: n } = l.Z.useExperiment(
            { location: "5ebfcf_1" },
            { autoTrackExposure: !1 },
          ),
          { enabled: a } = c.Z.useExperiment(
            { location: "5ebfcf_2" },
            { autoTrackExposure: !1 },
          );
        return null != e && ("PL" === e ? n : "TR" === e && a);
      }
      n.Z = (e) => {
        var n, a;
        let { fromBoostCancelModal: o, className: i } = e,
          l = (0, u.Z)();
        if (!T()) return null;
        return (
          _()(null != l, "Subscription billing country should not be null"),
          (0, t.jsxs)("div", {
            className: r()(N.noticeRoot, i),
            children: [
              (0, t.jsx)("div", {
                className: N.iconContainer,
                children: (0, t.jsx)(s.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "currentColor",
                  className: N.infoIcon,
                }),
              }),
              (0, t.jsx)("div", {
                className: N.text,
                children: ((n = l),
                (a = o),
                "PL" === n
                  ? a
                    ? f.Z.Messages
                        .LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING
                    : f.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING
                  : "TR" === n
                    ? a
                      ? f.Z.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING
                      : f.Z.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING
                    : a
                      ? f.Z.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING
                      : f.Z.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                  helpCenterLink: I.Z.getArticleURL(d.BhN.LOCALIZED_PRICING),
                }),
              }),
            ],
          })
        );
      };
    },
    561623: function (e, n, a) {
      a.r(n), a(47120), a(411104);
      var t = a(735250),
        o = a(470079),
        r = a(442837),
        i = a(780384),
        _ = a(481060),
        s = a(366939),
        I = a(911969),
        l = a(410030),
        c = a(100527),
        u = a(906732),
        d = a(583046),
        f = a(963249),
        N = a(853872),
        T = a(509545),
        C = a(626135),
        E = a(74538),
        R = a(937615),
        M = a(212895),
        O = a(296848),
        L = a(374649),
        m = a(973159),
        p = a(798769),
        g = a(317269),
        A = a(474936),
        b = a(981631),
        P = a(689938),
        S = a(103112);
      n.default = (e) => {
        var n, a, h, U;
        let {
            daysLeft: Z,
            premiumType: B,
            premiumSubscription: G,
            analyticsSource: x,
            ...F
          } = e,
          H = (0, l.ZP)(),
          [W, D] = o.useState(!1),
          { analyticsLocations: Y } = (0, u.ZP)(c.Z.PREMIUM_UNCANCEL_MODAL),
          y = (0, r.e7)(
            [N.Z],
            () =>
              (null == G ? void 0 : G.paymentSourceId) != null
                ? N.Z.getPaymentSource(G.paymentSourceId)
                : null,
            [G],
          ),
          v = G.items[0].planId,
          k = (0, E.Wz)(A.GP[v].skuId),
          { priceOptions: j } = (0, d.Z)({
            activeSubscription: null,
            skuIDs: [k],
            paymentSourceId: null == G ? void 0 : G.paymentSourceId,
            isGift: !1,
          }),
          [w] = (0, L.ED)({
            subscriptionId: G.id,
            items: [{ planId: v, quantity: 1 }],
            renewal: !0,
            paymentSourceId: null == G ? void 0 : G.paymentSourceId,
            currency: j.currency,
            analyticsLocations: (0, u.ZP)(c.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: c.Z.PREMIUM_UNCANCEL_MODAL,
          }),
          K = (0, r.e7)([T.Z], () => (0, O.oE)(v), [v]),
          X = (0, r.e7)([T.Z], () => T.Z.isFetchingForSKU(k)),
          z =
            null == w
              ? void 0
              : null === (U = w.invoiceItems) || void 0 === U
                ? void 0
                : null === (h = U.find((e) => e.subscriptionPlanId === v)) ||
                    void 0 === h
                  ? void 0
                  : null === (a = h.discounts) || void 0 === a
                    ? void 0
                    : null ===
                          (n = a.find(
                            (e) => e.type === I.eW.SUBSCRIPTION_PLAN,
                          )) || void 0 === n
                      ? void 0
                      : n.amount,
          Q = null != K ? (0, E.aS)(K.id, !1, !1, j) : null,
          V =
            null != Q && null != z
              ? (0, R.T4)(Q.amount - (null != z ? z : 0), Q.currency)
              : null,
          { intervalType: q, intervalCount: J } = E.ZP.getInterval(v),
          $ = B === A.p9.TIER_1,
          ee = null != Q ? (0, R.T4)(Q.amount, Q.currency) : null;
        return (
          o.useEffect(() => {
            C.default.track(b.rMx.OPEN_MODAL, {
              type: "Premium Uncancel Winback",
              source: x,
            });
          }, [x]),
          (0, t.jsx)(_.ModalRoot, {
            ...F,
            className: S.modal,
            children: W
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(p.Z, { premiumType: B, onClose: F.onClose }),
                    (0, t.jsx)(g.ZP, {
                      planId: v,
                      onClose: F.onClose,
                      paymentSourceType: null == y ? void 0 : y.type,
                    }),
                  ],
                })
              : (0, t.jsx)(m.Z, {
                  premiumType: B,
                  titleText: $
                    ? P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format(
                        { daysLeft: Z },
                      )
                    : P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format(
                        { daysLeft: Z },
                      ),
                  subtitleText: $
                    ? P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format()
                    : P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
                  footer: (0, t.jsxs)("div", {
                    children: [
                      null !== ee
                        ? (0, t.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                              switch (q) {
                                case A.rV.YEAR:
                                  return $
                                    ? P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format(
                                        { price: e },
                                      )
                                    : P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format(
                                        { price: e },
                                      );
                                case A.rV.MONTH:
                                  if (null != V)
                                    return P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format(
                                      { discountPrice: V, defaultPrice: e },
                                    );
                                  if ($)
                                    return P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format(
                                      { price: e },
                                    );
                                  if (1 === J)
                                    return P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format(
                                      { price: e },
                                    );
                                  else
                                    return P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format(
                                      { price: e, intervalCount: J },
                                    );
                                default:
                                  throw Error(
                                    "Unknown interval type ".concat(q),
                                  );
                              }
                            })(ee),
                          })
                        : (0, t.jsx)(_.Spinner, {
                            type: _.SpinnerTypes.SPINNING_CIRCLE,
                          }),
                      (0, t.jsxs)("div", {
                        className: S.footer,
                        children: [
                          (0, t.jsx)(_.Button, {
                            disabled: X,
                            onClick: () => {
                              if (null != G) {
                                let e = (0, M.tD)(
                                  v,
                                  G.currency,
                                  null == y ? void 0 : y.id,
                                );
                                null != y && y.id === G.paymentSourceId && e
                                  ? (s.O5(G, Y, b.Sbl.UNCANCEL_WINBACK_MODAL),
                                    D(!0))
                                  : (F.onClose(),
                                    (0, f.Z)({
                                      initialPlanId: v,
                                      analyticsLocations: Y,
                                      analyticsLocation:
                                        b.Sbl.UNCANCEL_WINBACK_MODAL,
                                    }));
                              }
                            },
                            children:
                              P.Z.Messages
                                .PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO,
                          }),
                          (0, t.jsx)(_.Button, {
                            look: _.Button.Looks.LINK,
                            color: (0, i.wj)(H)
                              ? _.Button.Colors.WHITE
                              : _.Button.Colors.PRIMARY,
                            onClick: F.onClose,
                            children:
                              P.Z.Messages
                                .PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL,
                          }),
                        ],
                      }),
                    ],
                  }),
                  onClose: F.onClose,
                }),
          })
        );
      };
    },
    317269: function (e, n, a) {
      a.d(n, {
        TB: function () {
          return m;
        },
        VY: function () {
          return p;
        },
        ZP: function () {
          return L;
        },
      }),
        a(47120),
        a(411104);
      var t = a(735250),
        o = a(470079),
        r = a(512722),
        i = a.n(r),
        _ = a(442837),
        s = a(481060),
        I = a(16084),
        l = a(987209),
        c = a(179118),
        u = a(912788),
        d = a(509545),
        f = a(55563),
        N = a(74538),
        T = a(741245),
        C = a(474936),
        E = a(981631),
        R = a(689938),
        M = a(977885);
      function O(e) {
        var n, a;
        let o,
          {
            planId: r,
            startingPremiumSubscriptionPlanId: s,
            paymentSourceType: I,
          } = e,
          [l, c] = (0, _.Wu)([d.Z], () => [d.Z.get(s), d.Z.get(r)]);
        if (
          (i()(null != l && null != c, "Missing startingPlan or newPlan"),
          (n = s),
          (a = r),
          C.Y1.indexOf(n) < C.Y1.indexOf(a))
        )
          switch (r) {
            case C.Xh.PREMIUM_MONTH_TIER_1:
              (o = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1),
                E.X7u.has(null != I ? I : E.HeQ.UNKNOWN) &&
                  (o =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
              break;
            case C.Xh.PREMIUM_MONTH_TIER_2:
              (o =
                R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH),
                E.X7u.has(null != I ? I : E.HeQ.UNKNOWN) &&
                  (o =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
              break;
            case C.Xh.PREMIUM_YEAR_TIER_1:
              (o =
                R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR),
                E.X7u.has(null != I ? I : E.HeQ.UNKNOWN) &&
                  (o =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
              break;
            case C.Xh.PREMIUM_YEAR_TIER_2:
              (o =
                R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format(
                  { numFreeGuildSubscriptions: C.cb },
                )),
                E.X7u.has(null != I ? I : E.HeQ.UNKNOWN) &&
                  (o =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format(
                      { numFreeGuildSubscriptions: C.cb },
                    ));
              break;
            case C.Xh.PREMIUM_3_MONTH_TIER_2:
            case C.Xh.PREMIUM_6_MONTH_TIER_2:
              o =
                R.Z.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
              break;
            case C.Xh.PREMIUM_MONTH_TIER_0:
            case C.Xh.PREMIUM_YEAR_TIER_0:
              o = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            default:
              throw Error("Unexpected planId: ".concat(r));
          }
        else if (l.skuId === C.Si.TIER_2 && c.skuId === C.Si.TIER_1)
          o = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
        else
          switch (c.skuId) {
            case C.Si.TIER_0:
              o = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            case C.Si.TIER_1:
              o = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
              break;
            case C.Si.TIER_2:
              o =
                1 !== l.intervalCount
                  ? R.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH
                  : R.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
              break;
            default:
              throw Error("Unexpected skuId: ".concat(c.skuId));
          }
        return (0, t.jsx)("div", { className: M.text, children: o });
      }
      function L(e) {
        let n,
          a,
          {
            planId: r,
            enableNoPaymentTrial: l,
            startingPremiumSubscriptionPlanId: c,
            onClose: u,
            followupSKUInfo: L,
            isDowngrade: m,
            hideClose: p,
            postSuccessGuild: g,
            paymentSourceType: A,
          } = e,
          { theme: b } = (0, s.useThemeContext)(),
          P = (0, _.e7)([f.Z], () => (null != L ? f.Z.get(L.id) : null));
        o.useEffect(() => {
          if (null == L || null != P) return;
          let { applicationId: e, id: n } = L;
          (0, I.$N)(e, n).catch(E.VqG);
        }, [L, P]);
        let S = (e) => {
          if (e.skuId === C.Si.TIER_0)
            return E.X7u.has(null != A ? A : E.HeQ.UNKNOWN)
              ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
          if (e.skuId === C.Si.TIER_1)
            return E.X7u.has(null != A ? A : E.HeQ.UNKNOWN)
              ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
          return E.X7u.has(null != A ? A : E.HeQ.UNKNOWN)
            ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format()
            : l
              ? R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL
              : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
        };
        if (null != P)
          n = (0, t.jsx)("div", {
            className: M.text,
            children:
              R.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                skuName: P.name,
              }),
          });
        else if (null != c)
          n = (0, t.jsx)(O, {
            planId: r,
            startingPremiumSubscriptionPlanId: c,
          });
        else if (null != g) {
          let e = d.Z.get(r);
          i()(null != e, "Missing plan"),
            (n = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", { className: M.text, children: S(e) }),
                (0, t.jsx)("div", {
                  className: M.text,
                  children:
                    R.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format(
                      { guildName: g.name },
                    ),
                }),
              ],
            }));
        } else {
          let e = d.Z.get(r);
          i()(null != e, "Missing plan"),
            (n = (0, t.jsx)("div", { className: M.text, children: S(e) }));
        }
        let h = N.ZP.getPremiumType(r);
        return (
          i()(
            null != h,
            "premium type should not be null in purchase confirmation",
          ),
          (a =
            null != P
              ? R.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                  skuName: P.name,
                })
              : m
                ? R.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON
                : null != g
                  ? R.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA
                  : R.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
          (0, t.jsxs)("div", {
            className: M.confirmation,
            children: [
              (0, t.jsx)(T.C, {
                className: M.banner,
                theme: b,
                premiumType: h,
                type: E.X7u.has(null != A ? A : E.HeQ.UNKNOWN)
                  ? T.C.Types.PREMIUM_PAYMENT_STARTED
                  : null != c
                    ? T.C.Types.PREMIUM_UPDATED
                    : T.C.Types.PREMIUM_ACTIVATED,
              }),
              n,
              p ? null : (0, t.jsx)(s.Button, { onClick: u, children: a }),
            ],
          })
        );
      }
      function m(e) {
        let { planId: n, onClose: a, halloweenDecoPurchase: o } = e,
          {
            giftRecipient: r,
            selectedGiftStyle: s,
            hasSentMessage: I,
            giftMessageError: f,
            isSendingMessage: N,
          } = (0, l.wD)(),
          T = (0, _.e7)([d.Z], () => d.Z.get(n));
        i()(null != T, "Missing plan");
        let C = (0, _.e7)([u.Z], () => u.Z.getGiftCode(T.skuId));
        return (0, t.jsx)(c.Z, {
          giftCode: C,
          subscriptionPlan: T,
          onClose: a,
          selectedGiftStyle: s,
          hasSentMessage: I,
          giftRecipient: r,
          giftMessageError: f,
          isSendingMessage: N,
          halloweenDecoPurchase: o,
        });
      }
      function p() {
        return (0, t.jsxs)("div", {
          className: M.redirectConfirmation,
          children: [
            (0, t.jsx)(s.Heading, {
              variant: "heading-xl/bold",
              children:
                R.Z.Messages
                  .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER,
            }),
            (0, t.jsxs)("div", {
              className: M.redirectBody,
              children: [
                (0, t.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children:
                    R.Z.Messages
                      .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY,
                }),
                (0, t.jsx)("br", {}),
                (0, t.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children:
                    R.Z.Messages
                      .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS,
                }),
              ],
            }),
          ],
        });
      }
    },
    524254: function (e, n, a) {
      e.exports = {
        blurb: "blurb_c9a9bf",
        giftSentMessage: "giftSentMessage_c9a9bf",
        giftRecipient: "giftRecipient_c9a9bf",
        giftRecipientName: "giftRecipientName_c9a9bf",
        giftRecipientTag: "giftRecipientTag_c9a9bf",
        divider: "divider_c9a9bf",
        subtext: "subtext_c9a9bf",
        subtextError: "subtextError_c9a9bf subtext_c9a9bf",
        header: "header_c9a9bf",
        headerCustomGifting: "headerCustomGifting_c9a9bf",
        giftRecipientSection: "giftRecipientSection_c9a9bf",
        giftRecipientInputWrapper: "giftRecipientInputWrapper_c9a9bf",
        giftRecipientInputError: "giftRecipientInputError_c9a9bf",
        sendToRecipientButton: "sendToRecipientButton_c9a9bf",
        confirmation: "confirmation_c9a9bf",
        giftCodeSection: "giftCodeSection_c9a9bf",
      };
    },
    92783: function (e, n, a) {
      e.exports = {
        churnFooterContainer: "churnFooterContainer_a5ba39",
        churnFooterGlow: "churnFooterGlow_a5ba39",
        churnFooterTopBorder: "churnFooterTopBorder_a5ba39",
        churnFooterContent: "churnFooterContent_a5ba39",
        churnFooterContentBody: "churnFooterContentBody_a5ba39",
        churnFooterIcon: "churnFooterIcon_a5ba39",
        churnFooterContentBodyInner: "churnFooterContentBodyInner_a5ba39",
        churnFooterCopy: "churnFooterCopy_a5ba39",
        churnFooterCTAs: "churnFooterCTAs_a5ba39",
        churnFooterClaimCTA: "churnFooterClaimCTA_a5ba39",
        churnFooterClaimCTAInner: "churnFooterClaimCTAInner_a5ba39",
        churnFooterClaimIcon: "churnFooterClaimIcon_a5ba39",
        churnFooterClaimCopy: "churnFooterClaimCopy_a5ba39",
      };
    },
    3936: function (e, n, a) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    83615: function (e, n, a) {
      e.exports = {
        tier2Animation: "tier2Animation_bfbba7",
        panningAnimation: "panningAnimation_bfbba7",
        tier2Background: "tier2Background_bfbba7 panningAnimationInner_bfbba7",
        tier2Foreground: "tier2Foreground_bfbba7 panningAnimationInner_bfbba7",
        guildWrapper: "guildWrapper_bfbba7",
        guildBackground: "guildBackground_bfbba7",
        guildStar: "guildStar_bfbba7",
        sequencedAnimation: "sequencedAnimation_bfbba7",
      };
    },
    324415: function (e, n, a) {
      e.exports = {
        headerBackground: "headerBackground_af10a6",
        tier2HeaderBackground:
          "tier2HeaderBackground_af10a6 headerBackground_af10a6",
        tier2HeaderBackgroundWinterTheme:
          "tier2HeaderBackgroundWinterTheme_af10a6 headerBackground_af10a6",
        snow: "snow_af10a6",
        headerTop: "headerTop_af10a6",
        headerIcon: "headerIcon_af10a6",
        nonTier2: "nonTier2_af10a6",
        price: "price_af10a6",
        closeButton: "closeButton_af10a6",
        trialBadgeContainer: "trialBadgeContainer_af10a6",
        trialOfferText: "trialOfferText_af10a6",
        tier0TrialOffer: "tier0TrialOffer_af10a6",
        trialBadgeSparkles: "trialBadgeSparkles_af10a6",
      };
    },
    896243: function (e, n, a) {
      e.exports = {
        body: "body_f4a859",
        title: "title_f4a859",
        subtitle: "subtitle_f4a859",
        whatYouLoseItemContainer: "whatYouLoseItemContainer_f4a859",
        whatYouLoseItem: "whatYouLoseItem_f4a859",
        whatYouLoseItemLeftColumn: "whatYouLoseItemLeftColumn_f4a859",
        whatYouLoseItemLearnMore: "whatYouLoseItemLearnMore_f4a859",
        whatYouLoseItemRightColumn: "whatYouLoseItemRightColumn_f4a859",
        textSingleLineEllipsis: "textSingleLineEllipsis_f4a859",
        profileCard: "profileCard_f4a859",
        profileCardTier1: "profileCardTier1_f4a859 profileCard_f4a859",
        profileAvatar: "profileAvatar_f4a859",
        profileAvatarTier1: "profileAvatarTier1_f4a859",
        profileInner: "profileInner_f4a859",
        profileUserInfo: "profileUserInfo_f4a859",
        profileUserInfoTier1: "profileUserInfoTier1_f4a859",
        profileNameTag: "profileNameTag_f4a859",
        profileNameTagUsername: "profileNameTagUsername_f4a859",
        profilePremiumIcon: "profilePremiumIcon_f4a859",
        emojiStickersPersonalizedContainer:
          "emojiStickersPersonalizedContainer_f4a859",
        personalizedEmoji: "personalizedEmoji_f4a859",
        boostCardContainer: "boostCardContainer_f4a859",
        boostCard: "boostCard_f4a859",
        boostCardIcon: "boostCardIcon_f4a859",
        boostCardInfo: "boostCardInfo_f4a859",
        boostCardTitle: "boostCardTitle_f4a859",
        boostCardSubtitle: "boostCardSubtitle_f4a859",
        boostCardGem: "boostCardGem_f4a859",
        boostCardCount: "boostCardCount_f4a859",
        nonPersonalizedGraphic: "nonPersonalizedGraphic_f4a859",
        spinner: "spinner_f4a859",
      };
    },
    103581: function (e, n, a) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    103112: function (e, n, a) {
      e.exports = { modal: "modal_fb5d87", footer: "footer_fb5d87" };
    },
    251300: function (e, n, a) {
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
    977885: function (e, n, a) {
      e.exports = {
        confirmation: "confirmation_be28dd",
        banner: "banner_be28dd",
        text: "text_be28dd",
        redirectConfirmation: "redirectConfirmation_be28dd",
        redirectBody: "redirectBody_be28dd",
      };
    },
  },
]);
//# sourceMappingURL=8d975a39ca81bf1cc5d1.js.map
