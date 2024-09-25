"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27129"],
  {
    631818: function (e, n, t) {
      var r = t(818083);
      n.Z = (0, r.B)({
        kind: "user",
        id: "2022-12_localized_pricing_poland_notice",
        label: "Localized Pricing Poland Notice",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable Poland Notice", config: { enabled: !0 } },
        ],
      });
    },
    987033: function (e, n, t) {
      var r = t(818083);
      n.Z = (0, r.B)({
        kind: "user",
        id: "2023-05_localized_pricing_turkey_notice",
        label: "Localized Pricing Turkey Notice",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable Turkey Notice", config: { enabled: !0 } },
        ],
      });
    },
    53900: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(442837),
        a = t(853872),
        i = t(78839);
      function o() {
        let e = (0, r.e7)([i.ZP], () => i.ZP.getPremiumTypeSubscription());
        return (0, r.e7)([a.Z], () => {
          var n;
          return (null == e ? void 0 : e.paymentSourceId) != null
            ? null === (n = a.Z.getPaymentSource(e.paymentSourceId)) ||
              void 0 === n
              ? void 0
              : n.country
            : null;
        });
      }
    },
    55610: function (e, n, t) {
      t.d(n, {
        U: function () {
          return T;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(120356),
        i = t.n(a),
        o = t(512722),
        _ = t.n(o),
        s = t(481060),
        l = t(63063),
        I = t(631818),
        u = t(987033),
        c = t(53900),
        d = t(981631),
        f = t(689938),
        N = t(3936);
      function T() {
        let e = (0, c.Z)(),
          { enabled: n } = I.Z.useExperiment(
            { location: "5ebfcf_1" },
            { autoTrackExposure: !1 },
          ),
          { enabled: t } = u.Z.useExperiment(
            { location: "5ebfcf_2" },
            { autoTrackExposure: !1 },
          );
        return null != e && ("PL" === e ? n : "TR" === e && t);
      }
      n.Z = (e) => {
        var n, t;
        let { fromBoostCancelModal: a, className: o } = e,
          I = (0, c.Z)();
        if (!T()) return null;
        return (
          _()(null != I, "Subscription billing country should not be null"),
          (0, r.jsxs)("div", {
            className: i()(N.noticeRoot, o),
            children: [
              (0, r.jsx)("div", {
                className: N.iconContainer,
                children: (0, r.jsx)(s.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "currentColor",
                  className: N.infoIcon,
                }),
              }),
              (0, r.jsx)("div", {
                className: N.text,
                children: ((n = I),
                (t = a),
                "PL" === n
                  ? t
                    ? f.Z.Messages
                        .LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING
                    : f.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING
                  : "TR" === n
                    ? t
                      ? f.Z.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING
                      : f.Z.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING
                    : t
                      ? f.Z.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING
                      : f.Z.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                  helpCenterLink: l.Z.getArticleURL(d.BhN.LOCALIZED_PRICING),
                }),
              }),
            ],
          })
        );
      };
    },
    561623: function (e, n, t) {
      t.r(n), t(47120), t(411104);
      var r = t(735250),
        a = t(470079),
        i = t(442837),
        o = t(780384),
        _ = t(481060),
        s = t(366939),
        l = t(911969),
        I = t(410030),
        u = t(100527),
        c = t(906732),
        d = t(583046),
        f = t(963249),
        N = t(853872),
        T = t(509545),
        E = t(626135),
        C = t(74538),
        R = t(937615),
        m = t(212895),
        O = t(296848),
        M = t(374649),
        A = t(973159),
        L = t(798769),
        p = t(317269),
        g = t(474936),
        b = t(981631),
        S = t(689938),
        h = t(103112);
      n.default = (e) => {
        var n, t, P, U;
        let {
            daysLeft: Z,
            premiumType: F,
            premiumSubscription: B,
            analyticsSource: G,
            ...v
          } = e,
          y = (0, I.ZP)(),
          [x, D] = a.useState(!1),
          { analyticsLocations: H } = (0, c.ZP)(u.Z.PREMIUM_UNCANCEL_MODAL),
          W = (0, i.e7)(
            [N.Z],
            () =>
              (null == B ? void 0 : B.paymentSourceId) != null
                ? N.Z.getPaymentSource(B.paymentSourceId)
                : null,
            [B],
          ),
          k = B.items[0].planId,
          Y = (0, C.Wz)(g.GP[k].skuId),
          { priceOptions: j } = (0, d.Z)({
            activeSubscription: null,
            skuIDs: [Y],
            paymentSourceId: null == B ? void 0 : B.paymentSourceId,
            isGift: !1,
          }),
          [w] = (0, M.ED)({
            subscriptionId: B.id,
            items: [{ planId: k, quantity: 1 }],
            renewal: !0,
            paymentSourceId: null == B ? void 0 : B.paymentSourceId,
            currency: j.currency,
            analyticsLocations: (0, c.ZP)(u.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: u.Z.PREMIUM_UNCANCEL_MODAL,
          }),
          K = (0, i.e7)([T.Z], () => (0, O.oE)(k), [k]),
          X = (0, i.e7)([T.Z], () => T.Z.isFetchingForSKU(Y)),
          z =
            null == w
              ? void 0
              : null === (U = w.invoiceItems) || void 0 === U
                ? void 0
                : null === (P = U.find((e) => e.subscriptionPlanId === k)) ||
                    void 0 === P
                  ? void 0
                  : null === (t = P.discounts) || void 0 === t
                    ? void 0
                    : null ===
                          (n = t.find(
                            (e) => e.type === l.eW.SUBSCRIPTION_PLAN,
                          )) || void 0 === n
                      ? void 0
                      : n.amount,
          V = null != K ? (0, C.aS)(K.id, !1, !1, j) : null,
          Q =
            null != V && null != z
              ? (0, R.T4)(V.amount - (null != z ? z : 0), V.currency)
              : null,
          { intervalType: q, intervalCount: J } = C.ZP.getInterval(k),
          $ = F === g.p9.TIER_1,
          ee = null != V ? (0, R.T4)(V.amount, V.currency) : null;
        return (
          a.useEffect(() => {
            E.default.track(b.rMx.OPEN_MODAL, {
              type: "Premium Uncancel Winback",
              source: G,
            });
          }, [G]),
          (0, r.jsx)(_.ModalRoot, {
            ...v,
            className: h.modal,
            children: x
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(L.Z, { premiumType: F, onClose: v.onClose }),
                    (0, r.jsx)(p.ZP, {
                      planId: k,
                      onClose: v.onClose,
                      paymentSourceType: null == W ? void 0 : W.type,
                    }),
                  ],
                })
              : (0, r.jsx)(A.Z, {
                  premiumType: F,
                  titleText: $
                    ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format(
                        { daysLeft: Z },
                      )
                    : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format(
                        { daysLeft: Z },
                      ),
                  subtitleText: $
                    ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format()
                    : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
                  footer: (0, r.jsxs)("div", {
                    children: [
                      null !== ee
                        ? (0, r.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                              switch (q) {
                                case g.rV.YEAR:
                                  return $
                                    ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format(
                                        { price: e },
                                      )
                                    : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format(
                                        { price: e },
                                      );
                                case g.rV.MONTH:
                                  if (null != Q)
                                    return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format(
                                      { discountPrice: Q, defaultPrice: e },
                                    );
                                  if ($)
                                    return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format(
                                      { price: e },
                                    );
                                  if (1 === J)
                                    return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format(
                                      { price: e },
                                    );
                                  else
                                    return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format(
                                      { price: e, intervalCount: J },
                                    );
                                default:
                                  throw Error(
                                    "Unknown interval type ".concat(q),
                                  );
                              }
                            })(ee),
                          })
                        : (0, r.jsx)(_.Spinner, {
                            type: _.SpinnerTypes.SPINNING_CIRCLE,
                          }),
                      (0, r.jsxs)("div", {
                        className: h.footer,
                        children: [
                          (0, r.jsx)(_.Button, {
                            disabled: X,
                            onClick: () => {
                              if (null != B) {
                                let e = (0, m.tD)(
                                  k,
                                  B.currency,
                                  null == W ? void 0 : W.id,
                                );
                                null != W && W.id === B.paymentSourceId && e
                                  ? (s.O5(B, H, b.Sbl.UNCANCEL_WINBACK_MODAL),
                                    D(!0))
                                  : (v.onClose(),
                                    (0, f.Z)({
                                      initialPlanId: k,
                                      analyticsLocations: H,
                                      analyticsLocation:
                                        b.Sbl.UNCANCEL_WINBACK_MODAL,
                                    }));
                              }
                            },
                            children:
                              S.Z.Messages
                                .PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO,
                          }),
                          (0, r.jsx)(_.Button, {
                            look: _.Button.Looks.LINK,
                            color: (0, o.wj)(y)
                              ? _.Button.Colors.WHITE
                              : _.Button.Colors.PRIMARY,
                            onClick: v.onClose,
                            children:
                              S.Z.Messages
                                .PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL,
                          }),
                        ],
                      }),
                    ],
                  }),
                  onClose: v.onClose,
                }),
          })
        );
      };
    },
    317269: function (e, n, t) {
      t.d(n, {
        TB: function () {
          return A;
        },
        VY: function () {
          return L;
        },
        ZP: function () {
          return M;
        },
      }),
        t(47120),
        t(411104);
      var r = t(735250),
        a = t(470079),
        i = t(512722),
        o = t.n(i),
        _ = t(442837),
        s = t(481060),
        l = t(16084),
        I = t(987209),
        u = t(179118),
        c = t(912788),
        d = t(509545),
        f = t(55563),
        N = t(74538),
        T = t(741245),
        E = t(474936),
        C = t(981631),
        R = t(689938),
        m = t(977885);
      function O(e) {
        var n, t;
        let a,
          {
            planId: i,
            startingPremiumSubscriptionPlanId: s,
            paymentSourceType: l,
          } = e,
          [I, u] = (0, _.Wu)([d.Z], () => [d.Z.get(s), d.Z.get(i)]);
        if (
          (o()(null != I && null != u, "Missing startingPlan or newPlan"),
          (n = s),
          (t = i),
          E.Y1.indexOf(n) < E.Y1.indexOf(t))
        )
          switch (i) {
            case E.Xh.PREMIUM_MONTH_TIER_1:
              (a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1),
                C.X7u.has(null != l ? l : C.HeQ.UNKNOWN) &&
                  (a =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
              break;
            case E.Xh.PREMIUM_MONTH_TIER_2:
              (a =
                R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH),
                C.X7u.has(null != l ? l : C.HeQ.UNKNOWN) &&
                  (a =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
              break;
            case E.Xh.PREMIUM_YEAR_TIER_1:
              (a =
                R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR),
                C.X7u.has(null != l ? l : C.HeQ.UNKNOWN) &&
                  (a =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
              break;
            case E.Xh.PREMIUM_YEAR_TIER_2:
              (a =
                R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format(
                  { numFreeGuildSubscriptions: E.cb },
                )),
                C.X7u.has(null != l ? l : C.HeQ.UNKNOWN) &&
                  (a =
                    R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format(
                      { numFreeGuildSubscriptions: E.cb },
                    ));
              break;
            case E.Xh.PREMIUM_3_MONTH_TIER_2:
            case E.Xh.PREMIUM_6_MONTH_TIER_2:
              a =
                R.Z.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
              break;
            case E.Xh.PREMIUM_MONTH_TIER_0:
            case E.Xh.PREMIUM_YEAR_TIER_0:
              a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            default:
              throw Error("Unexpected planId: ".concat(i));
          }
        else if (I.skuId === E.Si.TIER_2 && u.skuId === E.Si.TIER_1)
          a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
        else
          switch (u.skuId) {
            case E.Si.TIER_0:
              a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            case E.Si.TIER_1:
              a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
              break;
            case E.Si.TIER_2:
              a =
                1 !== I.intervalCount
                  ? R.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH
                  : R.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
              break;
            default:
              throw Error("Unexpected skuId: ".concat(u.skuId));
          }
        return (0, r.jsx)("div", { className: m.text, children: a });
      }
      function M(e) {
        let n,
          t,
          {
            planId: i,
            enableNoPaymentTrial: I,
            startingPremiumSubscriptionPlanId: u,
            onClose: c,
            followupSKUInfo: M,
            isDowngrade: A,
            hideClose: L,
            postSuccessGuild: p,
            paymentSourceType: g,
          } = e,
          { theme: b } = (0, s.useThemeContext)(),
          S = (0, _.e7)([f.Z], () => (null != M ? f.Z.get(M.id) : null));
        a.useEffect(() => {
          if (null == M || null != S) return;
          let { applicationId: e, id: n } = M;
          (0, l.$N)(e, n).catch(C.VqG);
        }, [M, S]);
        let h = (e) => {
          if (e.skuId === E.Si.TIER_0)
            return C.X7u.has(null != g ? g : C.HeQ.UNKNOWN)
              ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
          if (e.skuId === E.Si.TIER_1)
            return C.X7u.has(null != g ? g : C.HeQ.UNKNOWN)
              ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
          return C.X7u.has(null != g ? g : C.HeQ.UNKNOWN)
            ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format()
            : I
              ? R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL
              : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
        };
        if (null != S)
          n = (0, r.jsx)("div", {
            className: m.text,
            children:
              R.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                skuName: S.name,
              }),
          });
        else if (null != u)
          n = (0, r.jsx)(O, {
            planId: i,
            startingPremiumSubscriptionPlanId: u,
          });
        else if (null != p) {
          let e = d.Z.get(i);
          o()(null != e, "Missing plan"),
            (n = (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", { className: m.text, children: h(e) }),
                (0, r.jsx)("div", {
                  className: m.text,
                  children:
                    R.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format(
                      { guildName: p.name },
                    ),
                }),
              ],
            }));
        } else {
          let e = d.Z.get(i);
          o()(null != e, "Missing plan"),
            (n = (0, r.jsx)("div", { className: m.text, children: h(e) }));
        }
        let P = N.ZP.getPremiumType(i);
        return (
          o()(
            null != P,
            "premium type should not be null in purchase confirmation",
          ),
          (t =
            null != S
              ? R.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                  skuName: S.name,
                })
              : A
                ? R.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON
                : null != p
                  ? R.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA
                  : R.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
          (0, r.jsxs)("div", {
            className: m.confirmation,
            children: [
              (0, r.jsx)(T.C, {
                className: m.banner,
                theme: b,
                premiumType: P,
                type: C.X7u.has(null != g ? g : C.HeQ.UNKNOWN)
                  ? T.C.Types.PREMIUM_PAYMENT_STARTED
                  : null != u
                    ? T.C.Types.PREMIUM_UPDATED
                    : T.C.Types.PREMIUM_ACTIVATED,
              }),
              n,
              L ? null : (0, r.jsx)(s.Button, { onClick: c, children: t }),
            ],
          })
        );
      }
      function A(e) {
        let { planId: n, onClose: t, halloweenDecoPurchase: a } = e,
          {
            giftRecipient: i,
            selectedGiftStyle: s,
            hasSentMessage: l,
            giftMessageError: f,
            isSendingMessage: N,
          } = (0, I.wD)(),
          T = (0, _.e7)([d.Z], () => d.Z.get(n));
        o()(null != T, "Missing plan");
        let E = (0, _.e7)([c.Z], () => c.Z.getGiftCode(T.skuId));
        return (0, r.jsx)(u.Z, {
          giftCode: E,
          subscriptionPlan: T,
          onClose: t,
          selectedGiftStyle: s,
          hasSentMessage: l,
          giftRecipient: i,
          giftMessageError: f,
          isSendingMessage: N,
          halloweenDecoPurchase: a,
        });
      }
      function L() {
        return (0, r.jsxs)("div", {
          className: m.redirectConfirmation,
          children: [
            (0, r.jsx)(s.Heading, {
              variant: "heading-xl/bold",
              children:
                R.Z.Messages
                  .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER,
            }),
            (0, r.jsxs)("div", {
              className: m.redirectBody,
              children: [
                (0, r.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children:
                    R.Z.Messages
                      .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY,
                }),
                (0, r.jsx)("br", {}),
                (0, r.jsx)(s.Text, {
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
    93127: function (e, n, t) {
      t.d(n, {
        W: function () {
          return l;
        },
        _: function () {
          return I;
        },
      });
      var r = t(544891),
        a = t(570140),
        i = t(480294),
        o = t(814443),
        _ = t(428598),
        s = t(981631);
      function l() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return o.Z.needsRefresh()
          ? (a.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            r.tn
              .get({
                url: s.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: n } = e;
                  a.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: n,
                  });
                },
                () => {
                  a.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function I() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return _.Z.shouldFetch() && i.Z.hasConsented(s.pjP.PERSONALIZATION)
          ? (a.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            r.tn
              .get({
                url: s.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: n } = e;
                  a.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: n.user_affinities.map((e) => {
                      var n, t, r, a, i, o, _, s;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (n = e.dm_probability) && void 0 !== n
                            ? n
                            : 0,
                        dmRank:
                          null !== (t = e.dm_rank) && void 0 !== t ? t : 0,
                        vcProbability:
                          null !== (r = e.vc_probability) && void 0 !== r
                            ? r
                            : 0,
                        vcRank:
                          null !== (a = e.vc_rank) && void 0 !== a ? a : 0,
                        serverMessageProbability:
                          null !== (i = e.server_message_probability) &&
                          void 0 !== i
                            ? i
                            : 0,
                        serverMessageRank:
                          null !== (o = e.server_message_rank) && void 0 !== o
                            ? o
                            : 0,
                        communicationProbability:
                          null !== (_ = e.communication_probability) &&
                          void 0 !== _
                            ? _
                            : 0,
                        communicationRank:
                          null !== (s = e.communication_rank) && void 0 !== s
                            ? s
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  a.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, n, t) {
      t.d(n, {
        K: function () {
          return r;
        },
      });
      let r = t(70956).Z.Millis.DAY;
    },
    428598: function (e, n, t) {
      let r;
      t(47120);
      var a,
        i = t(442837),
        o = t(570140),
        _ = t(699516),
        s = t(496232);
      function l(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let I = !1,
        u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        c = { ...u };
      function d() {
        r = new Map(
          c.userAffinities
            .filter((e) => !_.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class f extends (a = i.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(_.Z),
            null != e &&
              ((c.userAffinities = e.userAffinities),
              (c.lastFetched = e.lastFetched),
              d()),
            this.syncWith([_.Z], d);
        }
        shouldFetch() {
          if (!I) return Date.now() - c.lastFetched > s.K;
        }
        isFetching() {
          return I;
        }
        getUserAffinities() {
          return c.userAffinities;
        }
        getUserAffinity(e) {
          return r.get(e);
        }
        getState() {
          return c;
        }
      }
      l(f, "displayName", "UserAffinitiesStoreV2"),
        l(f, "persistKey", "UserAffinitiesStoreV2"),
        (n.Z = new f(o.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            I = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: n } = e;
            (c.lastFetched = Date.now()), (I = !1), (c.userAffinities = n), d();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            I = !1;
          },
          LOGOUT: function () {
            (c = { ...u }), (r = new Map()), (I = !1);
          },
        }));
    },
    524254: function (e, n, t) {
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
    92783: function (e, n, t) {
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
    3936: function (e, n, t) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    83615: function (e, n, t) {
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
    324415: function (e, n, t) {
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
    896243: function (e, n, t) {
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
    103581: function (e, n, t) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    103112: function (e, n, t) {
      e.exports = { modal: "modal_fb5d87", footer: "footer_fb5d87" };
    },
    251300: function (e, n, t) {
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
    977885: function (e, n, t) {
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
//# sourceMappingURL=92465e35879b5df7980a.js.map
