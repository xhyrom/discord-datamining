"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87446"],
  {
    561623: function (e, _, n) {
      n.r(_), n(47120), n(411104);
      var o = n(735250),
        a = n(470079),
        s = n(442837),
        r = n(780384),
        t = n(481060),
        I = n(366939),
        i = n(911969),
        l = n(410030),
        N = n(100527),
        u = n(906732),
        T = n(583046),
        c = n(963249),
        E = n(853872),
        C = n(509545),
        d = n(626135),
        M = n(74538),
        R = n(937615),
        O = n(212895),
        f = n(296848),
        L = n(374649),
        m = n(973159),
        A = n(798769),
        P = n(317269),
        S = n(474936),
        U = n(981631),
        p = n(689938),
        h = n(103112);
      _.default = (e) => {
        var _, n, g, Z;
        let {
            daysLeft: b,
            premiumType: F,
            premiumSubscription: B,
            analyticsSource: G,
            ...H
          } = e,
          D = (0, l.ZP)(),
          [x, Y] = a.useState(!1),
          { analyticsLocations: W } = (0, u.ZP)(N.Z.PREMIUM_UNCANCEL_MODAL),
          y = (0, s.e7)(
            [E.Z],
            () =>
              (null == B ? void 0 : B.paymentSourceId) != null
                ? E.Z.getPaymentSource(B.paymentSourceId)
                : null,
            [B],
          ),
          v = B.items[0].planId,
          k = (0, M.Wz)(S.GP[v].skuId),
          { priceOptions: j } = (0, T.Z)({
            activeSubscription: null,
            skuIDs: [k],
            paymentSourceId: null == B ? void 0 : B.paymentSourceId,
            isGift: !1,
          }),
          [w] = (0, L.ED)({
            subscriptionId: B.id,
            items: [{ planId: v, quantity: 1 }],
            renewal: !0,
            paymentSourceId: null == B ? void 0 : B.paymentSourceId,
            currency: j.currency,
            analyticsLocations: (0, u.ZP)(N.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: N.Z.PREMIUM_UNCANCEL_MODAL,
          }),
          K = (0, s.e7)([C.Z], () => (0, f.oE)(v), [v]),
          X = (0, s.e7)([C.Z], () => C.Z.isFetchingForSKU(k)),
          Q =
            null == w
              ? void 0
              : null === (Z = w.invoiceItems) || void 0 === Z
                ? void 0
                : null === (g = Z.find((e) => e.subscriptionPlanId === v)) ||
                    void 0 === g
                  ? void 0
                  : null === (n = g.discounts) || void 0 === n
                    ? void 0
                    : null ===
                          (_ = n.find(
                            (e) => e.type === i.eW.SUBSCRIPTION_PLAN,
                          )) || void 0 === _
                      ? void 0
                      : _.amount,
          z = null != K ? (0, M.aS)(K.id, !1, !1, j) : null,
          V =
            null != z && null != Q
              ? (0, R.T4)(z.amount - (null != Q ? Q : 0), z.currency)
              : null,
          { intervalType: J, intervalCount: q } = M.ZP.getInterval(v),
          $ = F === S.p9.TIER_1,
          ee = null != z ? (0, R.T4)(z.amount, z.currency) : null;
        return (
          a.useEffect(() => {
            d.default.track(U.rMx.OPEN_MODAL, {
              type: "Premium Uncancel Winback",
              source: G,
            });
          }, [G]),
          (0, o.jsx)(t.ModalRoot, {
            ...H,
            className: h.modal,
            children: x
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(A.Z, { premiumType: F, onClose: H.onClose }),
                    (0, o.jsx)(P.ZP, {
                      planId: v,
                      onClose: H.onClose,
                      paymentSourceType: null == y ? void 0 : y.type,
                    }),
                  ],
                })
              : (0, o.jsx)(m.Z, {
                  premiumType: F,
                  titleText: $
                    ? p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format(
                        { daysLeft: b },
                      )
                    : p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format(
                        { daysLeft: b },
                      ),
                  subtitleText: $
                    ? p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format()
                    : p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
                  footer: (0, o.jsxs)("div", {
                    children: [
                      null !== ee
                        ? (0, o.jsx)(t.Text, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                              switch (J) {
                                case S.rV.YEAR:
                                  return $
                                    ? p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format(
                                        { price: e },
                                      )
                                    : p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format(
                                        { price: e },
                                      );
                                case S.rV.MONTH:
                                  if (null != V)
                                    return p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format(
                                      { discountPrice: V, defaultPrice: e },
                                    );
                                  if ($)
                                    return p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format(
                                      { price: e },
                                    );
                                  if (1 === q)
                                    return p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format(
                                      { price: e },
                                    );
                                  else
                                    return p.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format(
                                      { price: e, intervalCount: q },
                                    );
                                default:
                                  throw Error(
                                    "Unknown interval type ".concat(J),
                                  );
                              }
                            })(ee),
                          })
                        : (0, o.jsx)(t.Spinner, {
                            type: t.SpinnerTypes.SPINNING_CIRCLE,
                          }),
                      (0, o.jsxs)("div", {
                        className: h.footer,
                        children: [
                          (0, o.jsx)(t.Button, {
                            disabled: X,
                            onClick: () => {
                              if (null != B) {
                                let e = (0, O.tD)(
                                  v,
                                  B.currency,
                                  null == y ? void 0 : y.id,
                                );
                                null != y && y.id === B.paymentSourceId && e
                                  ? (I.O5(B, W, U.Sbl.UNCANCEL_WINBACK_MODAL),
                                    Y(!0))
                                  : (H.onClose(),
                                    (0, c.Z)({
                                      initialPlanId: v,
                                      analyticsLocations: W,
                                      analyticsLocation:
                                        U.Sbl.UNCANCEL_WINBACK_MODAL,
                                    }));
                              }
                            },
                            children:
                              p.Z.Messages
                                .PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO,
                          }),
                          (0, o.jsx)(t.Button, {
                            look: t.Button.Looks.LINK,
                            color: (0, r.wj)(D)
                              ? t.Button.Colors.WHITE
                              : t.Button.Colors.PRIMARY,
                            onClick: H.onClose,
                            children:
                              p.Z.Messages
                                .PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL,
                          }),
                        ],
                      }),
                    ],
                  }),
                  onClose: H.onClose,
                }),
          })
        );
      };
    },
    317269: function (e, _, n) {
      n.d(_, {
        TB: function () {
          return m;
        },
        VY: function () {
          return A;
        },
        ZP: function () {
          return L;
        },
      }),
        n(47120),
        n(411104);
      var o = n(735250),
        a = n(470079),
        s = n(512722),
        r = n.n(s),
        t = n(442837),
        I = n(481060),
        i = n(16084),
        l = n(987209),
        N = n(179118),
        u = n(912788),
        T = n(509545),
        c = n(55563),
        E = n(74538),
        C = n(741245),
        d = n(474936),
        M = n(981631),
        R = n(689938),
        O = n(977885);
      function f(e) {
        var _, n;
        let a,
          {
            planId: s,
            startingPremiumSubscriptionPlanId: I,
            paymentSourceType: i,
          } = e,
          [l, N] = (0, t.Wu)([T.Z], () => [T.Z.get(I), T.Z.get(s)]);
        if (
          (r()(null != l && null != N, "Missing startingPlan or newPlan"),
          (_ = I),
          (n = s),
          d.Y1.indexOf(_) < d.Y1.indexOf(n))
        )
          switch (s) {
            case d.Xh.PREMIUM_MONTH_TIER_1:
              (a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1),
                M.X7u.has(null != i ? i : M.HeQ.UNKNOWN) &&
                  (a =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
              break;
            case d.Xh.PREMIUM_MONTH_TIER_2:
              (a =
                R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH),
                M.X7u.has(null != i ? i : M.HeQ.UNKNOWN) &&
                  (a =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
              break;
            case d.Xh.PREMIUM_YEAR_TIER_1:
              (a =
                R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR),
                M.X7u.has(null != i ? i : M.HeQ.UNKNOWN) &&
                  (a =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
              break;
            case d.Xh.PREMIUM_YEAR_TIER_2:
              (a =
                R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format(
                  { numFreeGuildSubscriptions: d.cb },
                )),
                M.X7u.has(null != i ? i : M.HeQ.UNKNOWN) &&
                  (a =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format(
                      { numFreeGuildSubscriptions: d.cb },
                    ));
              break;
            case d.Xh.PREMIUM_3_MONTH_TIER_2:
            case d.Xh.PREMIUM_6_MONTH_TIER_2:
              a =
                R.Z.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
              break;
            case d.Xh.PREMIUM_MONTH_TIER_0:
            case d.Xh.PREMIUM_YEAR_TIER_0:
              a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            default:
              throw Error("Unexpected planId: ".concat(s));
          }
        else if (l.skuId === d.Si.TIER_2 && N.skuId === d.Si.TIER_1)
          a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
        else
          switch (N.skuId) {
            case d.Si.TIER_0:
              a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            case d.Si.TIER_1:
              a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
              break;
            case d.Si.TIER_2:
              a =
                1 !== l.intervalCount
                  ? R.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH
                  : R.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
              break;
            default:
              throw Error("Unexpected skuId: ".concat(N.skuId));
          }
        return (0, o.jsx)("div", { className: O.text, children: a });
      }
      function L(e) {
        let _,
          n,
          {
            planId: s,
            enableNoPaymentTrial: l,
            startingPremiumSubscriptionPlanId: N,
            onClose: u,
            followupSKUInfo: L,
            isDowngrade: m,
            hideClose: A,
            postSuccessGuild: P,
            paymentSourceType: S,
          } = e,
          { theme: U } = (0, I.useThemeContext)(),
          p = (0, t.e7)([c.Z], () => (null != L ? c.Z.get(L.id) : null));
        a.useEffect(() => {
          if (null == L || null != p) return;
          let { applicationId: e, id: _ } = L;
          (0, i.$N)(e, _).catch(M.VqG);
        }, [L, p]);
        let h = (e) => {
          if (e.skuId === d.Si.TIER_0)
            return M.X7u.has(null != S ? S : M.HeQ.UNKNOWN)
              ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
          if (e.skuId === d.Si.TIER_1)
            return M.X7u.has(null != S ? S : M.HeQ.UNKNOWN)
              ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
          return M.X7u.has(null != S ? S : M.HeQ.UNKNOWN)
            ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format()
            : l
              ? R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL
              : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
        };
        if (null != p)
          _ = (0, o.jsx)("div", {
            className: O.text,
            children:
              R.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                skuName: p.name,
              }),
          });
        else if (null != N)
          _ = (0, o.jsx)(f, {
            planId: s,
            startingPremiumSubscriptionPlanId: N,
          });
        else if (null != P) {
          let e = T.Z.get(s);
          r()(null != e, "Missing plan"),
            (_ = (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)("div", { className: O.text, children: h(e) }),
                (0, o.jsx)("div", {
                  className: O.text,
                  children:
                    R.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format(
                      { guildName: P.name },
                    ),
                }),
              ],
            }));
        } else {
          let e = T.Z.get(s);
          r()(null != e, "Missing plan"),
            (_ = (0, o.jsx)("div", { className: O.text, children: h(e) }));
        }
        let g = E.ZP.getPremiumType(s);
        return (
          r()(
            null != g,
            "premium type should not be null in purchase confirmation",
          ),
          (n =
            null != p
              ? R.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                  skuName: p.name,
                })
              : m
                ? R.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON
                : null != P
                  ? R.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA
                  : R.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
          (0, o.jsxs)("div", {
            className: O.confirmation,
            children: [
              (0, o.jsx)(C.C, {
                className: O.banner,
                theme: U,
                premiumType: g,
                type: M.X7u.has(null != S ? S : M.HeQ.UNKNOWN)
                  ? C.C.Types.PREMIUM_PAYMENT_STARTED
                  : null != N
                    ? C.C.Types.PREMIUM_UPDATED
                    : C.C.Types.PREMIUM_ACTIVATED,
              }),
              _,
              A ? null : (0, o.jsx)(I.Button, { onClick: u, children: n }),
            ],
          })
        );
      }
      function m(e) {
        let { planId: _, onClose: n, halloweenDecoPurchase: a } = e,
          {
            giftRecipient: s,
            selectedGiftStyle: I,
            hasSentMessage: i,
            giftMessageError: c,
            isSendingMessage: E,
          } = (0, l.wD)(),
          C = (0, t.e7)([T.Z], () => T.Z.get(_));
        r()(null != C, "Missing plan");
        let d = (0, t.e7)([u.Z], () => u.Z.getGiftCode(C.skuId));
        return (0, o.jsx)(N.Z, {
          giftCode: d,
          subscriptionPlan: C,
          onClose: n,
          selectedGiftStyle: I,
          hasSentMessage: i,
          giftRecipient: s,
          giftMessageError: c,
          isSendingMessage: E,
          halloweenDecoPurchase: a,
        });
      }
      function A() {
        return (0, o.jsxs)("div", {
          className: O.redirectConfirmation,
          children: [
            (0, o.jsx)(I.Heading, {
              variant: "heading-xl/bold",
              children:
                R.Z.Messages
                  .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER,
            }),
            (0, o.jsxs)("div", {
              className: O.redirectBody,
              children: [
                (0, o.jsx)(I.Text, {
                  variant: "text-md/normal",
                  children:
                    R.Z.Messages
                      .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY,
                }),
                (0, o.jsx)("br", {}),
                (0, o.jsx)(I.Text, {
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
    92783: function (e, _, n) {
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
    896243: function (e, _, n) {
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
    103581: function (e, _, n) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    103112: function (e, _, n) {
      e.exports = { modal: "modal_fb5d87", footer: "footer_fb5d87" };
    },
    977885: function (e, _, n) {
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
//# sourceMappingURL=1d64b0e9bdaa7ba181ec.js.map
