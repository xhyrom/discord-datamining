"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54433"],
  {
    679488: function (e) {
      e.exports = "/assets/5645bc51c0919b711a46.svg";
    },
    992339: function (e) {
      e.exports = "/assets/8cbb4f53d4dbb5bb9128.svg";
    },
    908570: function (e) {
      e.exports = "/assets/1f95de2ae0b33287acc5.svg";
    },
    832149: function (e, s, n) {
      var t = n(735250);
      n(470079);
      var l = n(481060);
      s.Z = (e) => {
        let { product: s, analyticsLocations: i } = e;
        (0, l.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            n.e("87624"),
            n.e("74665"),
          ]).then(n.bind(n, 331042));
          return (n) =>
            (0, t.jsx)(e, { product: s, analyticsLocations: i, ...n });
        });
      };
    },
    592627: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return x;
        },
      });
      var t = n(735250);
      n(470079);
      var l = n(481060),
        i = n(906732),
        C = n(832149),
        r = n(600164),
        a = n(857039),
        o = n(515593),
        _ = n(598),
        d = n(614277),
        u = n(474936),
        c = n(689938),
        p = n(744078);
      function x(e) {
        let { onClose: s, halloweenDecoPurchase: n } = e,
          { selectedPlan: x } = (0, _.usePaymentContext)(),
          { analyticsLocations: L } = (0, i.ZP)();
        return (0, a.Z)({ location: "Gift purchase confirmation" }) &&
          (null == x ? void 0 : x.skuId) === u.Si.TIER_2 &&
          null != n
          ? (0, t.jsx)(d.O3, {
              children: (0, t.jsx)(l.ModalFooter, {
                align: r.Z.Align.CENTER,
                children: (0, t.jsxs)("div", {
                  className: p.halloweenFooter,
                  children: [
                    (0, t.jsx)(o.Z, { size: l.AvatarSizes.SIZE_32 }),
                    (0, t.jsx)(l.Button, {
                      onClick: () => {
                        s(), (0, C.Z)({ product: n, analyticsLocations: L });
                      },
                      children: c.Z.Messages.NITROWEEN_GIFT_CONFIRMATION_CTA,
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
    },
    293858: function (e, s, n) {
      n.d(s, {
        b: function () {
          return I;
        },
      });
      var t = n(735250),
        l = n(470079),
        i = n(512722),
        C = n.n(i),
        r = n(881602),
        a = n(155491),
        o = n(317269),
        _ = n(669079),
        d = n(296848),
        u = n(987209),
        c = n(598),
        p = n(592627),
        x = n(614277),
        L = n(698708);
      function I(e) {
        var s, n;
        let i,
          {
            handleClose: I,
            planGroup: E,
            onSubscriptionConfirmation: h,
            renderPurchaseConfirmation: f,
            postSuccessGuild: M,
            followupSKUInfo: T,
            continueSession: N,
          } = e,
          {
            activeSubscription: j,
            paymentSources: A,
            paymentSourceId: S,
            selectedPlan: g,
            selectedSkuId: P,
            step: R,
            updatedSubscription: m,
            startingPremiumSubscriptionPlanIdRef: O,
          } = (0, c.usePaymentContext)(),
          {
            isGift: Z,
            giftRecipient: y,
            giftCode: U,
            hasSentMessage: H,
            isSendingMessage: G,
            sendGiftMessage: B,
          } = (0, u.wD)(),
          v = (0, a.Z2)();
        C()(null != g, "Expected plan to selected"),
          C()(null != P, "Expected selectedSkuId"),
          C()(null != R, "Step should be set");
        let F = l.useCallback(() => {
          I(), null == h || h();
        }, [I, h]);
        return (
          l.useEffect(() => {
            if (!(!Z || null == y || null == U || H || G || (0, _.pO)(y)))
              r.F.getCurrentConfig({ location: "36b986_1" }).enabled &&
                B({ onSubscriptionConfirmation: h });
          }, [B, Z, y, U, H, G, h]),
          (i =
            null != f
              ? f(g, F, m)
              : N
                ? (0, t.jsx)(o.VY, {})
                : Z
                  ? (0, t.jsx)(o.TB, {
                      planId: g.id,
                      onClose: F,
                      halloweenDecoPurchase: v,
                    })
                  : O.current === g.id
                    ? (0, t.jsx)(o.ZP, {
                        planId: g.id,
                        postSuccessGuild: M,
                        onClose: F,
                        paymentSourceType:
                          null === (s = A[null != S ? S : ""]) || void 0 === s
                            ? void 0
                            : s.type,
                      })
                    : (0, t.jsx)(o.ZP, {
                        followupSKUInfo: T,
                        startingPremiumSubscriptionPlanId: O.current,
                        planId: g.id,
                        onClose: F,
                        isDowngrade: null != j && (0, d.GY)(j, g.id, E),
                        paymentSourceType:
                          null === (n = A[null != S ? S : ""]) || void 0 === n
                            ? void 0
                            : n.type,
                      })),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(x.C3, { children: [(0, t.jsx)(L.Z, {}), i] }),
              Z
                ? (0, t.jsx)(p.Z, { onClose: F, halloweenDecoPurchase: v })
                : null,
            ],
          })
        );
      }
    },
    7305: function (e, s, n) {
      n.r(s),
        n.d(s, {
          PremiumPaymentModal: function () {
            return O;
          },
          STEPS: function () {
            return U;
          },
          default: function () {
            return H;
          },
        }),
        n(411104),
        n(47120);
      var t = n(735250),
        l = n(470079),
        i = n(442837),
        C = n(570140),
        r = n(821849),
        a = n(100527),
        o = n(906732),
        _ = n(509545),
        d = n(78839),
        u = n(669079),
        c = n(987209),
        p = n(598),
        x = n(409813),
        L = n(791785),
        I = n(276442),
        E = n(793541),
        h = n(380898),
        f = n(710094),
        M = n(293858),
        T = n(614223),
        N = n(174827),
        j = n(846464),
        A = n(184160),
        S = n(48175),
        g = n(981631),
        P = n(474936),
        R = n(689938);
      let m = [
        x.h8.PLAN_SELECT,
        x.h8.ADD_PAYMENT_STEPS,
        x.h8.REVIEW,
        x.h8.CONFIRM,
      ];
      function O(e) {
        let {
            analyticsLocation: s,
            analyticsObject: n,
            analyticsSourceLocation: i,
            onComplete: a,
            transitionState: d,
            initialPlanId: I,
            subscriptionTier: E,
            onClose: h,
            trialId: f,
            trialFooterMessageOverride: M,
            reviewWarningMessage: T,
            openInvoiceId: N,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: A,
            postSuccessGuild: S,
            followupSKUInfo: R,
            renderHeader: m,
            applicationId: O,
            guildId: Z,
            referralTrialOfferId: y,
            skuId: U,
            returnRef: H,
            skipConfirm: G = !1,
            continueSession: B = !1,
          } = e,
          { analyticsLocations: v } = (0, o.ZP)();
        l.useEffect(() => {
          !_.Z.isLoadedForPremiumSKUs() && C.Z.wait(() => (0, r.Y2)());
        }, []);
        let { step: F } = (0, p.usePaymentContext)(),
          { isGift: b, giftMessage: k, giftRecipient: w } = (0, c.wD)(),
          W = b && (0, u.pO)(w) && F === x.h8.PLAN_SELECT;
        return (0, t.jsx)(L.PaymentModal, {
          analyticsLocations: v,
          analyticsLocation: s,
          analyticsObject: n,
          analyticsSourceLocation: i,
          analyticsSubscriptionType: g.NYc.PREMIUM,
          onComplete: a,
          transitionState: d,
          initialPlanId: I,
          giftMessage: k,
          subscriptionTier: E,
          onClose: h,
          trialId: f,
          isGift: b,
          trialFooterMessageOverride: M,
          reviewWarningMessage: T,
          planGroup: P.Y1,
          openInvoiceId: N,
          onSubscriptionConfirmation: j,
          renderPurchaseConfirmation: A,
          postSuccessGuild: S,
          followupSKUInfo: R,
          renderHeader: m,
          applicationId: O,
          guildId: Z,
          referralTrialOfferId: y,
          skuId: U,
          shakeWhilePurchasing: !0,
          isLargeModal: W,
          returnRef: H,
          skipConfirm: G,
          continueSession: B,
        });
      }
      function Z(e) {
        let { startedPaymentFlowWithPaymentSourcesRef: s, selectedSkuId: n } =
            (0, p.usePaymentContext)(),
          { isGift: t } = (0, c.wD)();
        return (0, T.Kp)({
          isTrial: null != e && e,
          isGift: t,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: s.current,
        });
      }
      function y(e) {
        let {
            initialPlanId: s,
            handleStepChange: n,
            referralTrialOfferId: l,
          } = e,
          { paymentSources: i, selectedSkuId: C } = (0, p.usePaymentContext)(),
          { isGift: r } = (0, c.wD)(),
          a = Z((0, S.Z)({ isGift: r, skuId: C, referralTrialOfferId: l }));
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(I.J, {
            ...e,
            breadcrumbSteps: m,
            onReturn: () => {
              let e =
                Object.values(i).length < 1 && null == s
                  ? x.h8.PLAN_SELECT
                  : x.h8.REVIEW;
              a && (e = x.h8.REVIEW),
                n(e, { trackedFromStep: x.h8.PAYMENT_TYPE });
            },
          }),
        });
      }
      let U = [
        {
          key: null,
          renderStep: (e) => (0, t.jsx)(L.PaymentPredicateStep, { ...e }),
        },
        {
          key: x.h8.SKU_SELECT,
          renderStep: (e) => (0, t.jsx)(j.q, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: x.h8.WHAT_YOU_LOSE,
          renderStep: (e) => (0, t.jsx)(A.x, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: x.h8.PLAN_SELECT,
          renderStep: (e) => (0, t.jsx)(N.x, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              Z(e) ? null : R.Z.Messages.BILLING_STEP_SELECT_PLAN,
          },
        },
        {
          key: x.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(y, { ...e }) }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              Z(e) ? null : R.Z.Messages.BILLING_STEP_PAYMENT,
          },
        },
        {
          key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, t.jsx)(h.Z, {}),
        },
        {
          key: x.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, t.jsx)(E.Z, {}),
        },
        {
          key: x.h8.REVIEW,
          renderStep: (e) => (0, t.jsx)(f.l, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              Z(e)
                ? R.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                : R.Z.Messages.BILLING_STEP_REVIEW,
          },
        },
        { key: x.h8.CONFIRM, renderStep: (e) => (0, t.jsx)(M.b, { ...e }) },
      ];
      function H(e) {
        let s = (0, i.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: n } = (0, o.ZP)(
            e.analyticsLocations,
            a.Z.PREMIUM_PAYMENT_MODAL,
          ),
          {
            subscriptionTier: l,
            isGift: C,
            giftRecipient: r,
            giftMessage: _,
            giftStyle: u,
            loadId: x,
            defaultPlanId: L,
            referralCode: I,
            repeatPurchase: E,
          } = e;
        if (null != l && !Object.values(P.Si).includes(l))
          throw Error("subscriptionTier must be a premium subscription");
        return (0, t.jsx)(o.Gt, {
          value: n,
          children: (0, t.jsx)(p.PaymentContextProvider, {
            loadId: x,
            activeSubscription: null != e.subscription ? e.subscription : s,
            stepConfigs: U,
            skuIDs: [...P.YQ],
            isGift: C,
            defaultPlanId: L,
            referralCode: I,
            repeatPurchase: E,
            children: (0, t.jsx)(c.KB, {
              isGift: C,
              giftRecipient: null == r ? void 0 : r,
              giftMessage: _,
              giftStyle: u,
              children: (0, t.jsx)(O, { ...e }),
            }),
          }),
        });
      }
    },
    174827: function (e, s, n) {
      n.d(s, {
        x: function () {
          return F;
        },
      }),
        n(47120);
      var t = n(735250),
        l = n(470079),
        i = n(512722),
        C = n.n(i),
        r = n(399606),
        a = n(481060),
        o = n(975608),
        _ = n(600164),
        d = n(711459),
        u = n(374649),
        c = n(650032),
        p = n(439017),
        x = n(857039),
        L = n(515593),
        I = n(104494),
        E = n(639119),
        h = n(642530),
        f = n(381507),
        M = n(314404),
        T = n(594174),
        N = n(509545),
        j = n(669079),
        A = n(63063),
        S = n(74538),
        g = n(987209),
        P = n(598),
        R = n(409813),
        m = n(51499),
        O = n(456251),
        Z = n(614277),
        y = n(809144),
        U = n(698708),
        H = n(981631),
        G = n(474936),
        B = n(689938),
        v = n(577581);
      function F(e) {
        var s, n, i;
        let {
            handleStepChange: F,
            initialPlanId: b,
            subscriptionTier: k,
            trialId: w,
            referralTrialOfferId: W,
            handleClose: D,
          } = e,
          {
            activeSubscription: Y,
            hasFetchedSubscriptions: K,
            paymentSourceId: X,
            paymentSources: V,
            selectedSkuId: Q,
            selectedPlan: z,
            step: q,
            defaultPlanId: J,
            priceOptions: $,
            isPremium: ee,
          } = (0, P.usePaymentContext)(),
          { isGift: es, giftRecipient: en, giftMessage: et } = (0, g.wD)(),
          el = null != X ? V[X] : null,
          { newPlans: ei } = d.ZP.useExperiment(
            { location: "d17fd6_3" },
            { autoTrackExposure: !1 },
          ),
          eC = (0, r.e7)([T.default], () => T.default.getCurrentUser()),
          er =
            !es &&
            null != Q &&
            Q === G.Si.TIER_2 &&
            null != eC &&
            eC.hasHadPremium() &&
            K &&
            null == Y &&
            (0, d.aQ)(el),
          ea = (0, E.N)(W),
          eo =
            !es &&
            null != ea &&
            null != Q &&
            G.nG[ea.trial_id].skus.includes(Q),
          e_ = (0, I.Ng)(),
          ed =
            null == e_
              ? void 0
              : null === (s = e_.discount) || void 0 === s
                ? void 0
                : s.plan_ids.some((e) => G.GP[e].skuId === Q),
          eu = !es && null != e_ && null != Q && ed,
          ec = null !== (n = eo || eu) && void 0 !== n && n,
          { defaultToMonthlyPlan: ep } = p.k.useExperiment(
            { location: "d17fd6_4" },
            { autoTrackExposure: !1 },
          ),
          ex = l.useMemo(
            () =>
              (0, S.V7)({
                skuId: Q,
                isPremium: ee,
                multiMonthPlans: er ? ei : [],
                currentSubscription: Y,
                isGift: es,
                isEligibleForTrial: eo,
                defaultPlanId: J,
                defaultToMonthlyPlan: ep,
              }),
            [Q, ee, ei, Y, er, es, eo, J, ep],
          ),
          eL =
            eu && ex.includes(G.Xh.PREMIUM_MONTH_TIER_2)
              ? G.Xh.PREMIUM_MONTH_TIER_2
              : ex[0],
          eI = (0, r.e7)([N.Z], () => N.Z.get(eL)),
          eE = [{ planId: null == eI ? void 0 : eI.id, quantity: 1 }],
          [eh, ef] = l.useState(ec),
          [eM, eT] = (0, u.ED)({
            items: eE,
            renewal: !1,
            preventFetch: !ec,
            applyEntitlements: !0,
            trialId: w,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency,
          }),
          eN =
            (0, x.Z)({ location: "PremiumGiftPlanSelect" }) &&
            (null == eI ? void 0 : eI.skuId) === G.Si.TIER_2;
        l.useEffect(() => {
          ec && ef((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
        }, [eM, ec]),
          (0, o.Z)(
            "Payment Modal Plan Select Step",
            eh,
            5,
            {
              proratedInvoicePreview: eM,
              proratedInvoiceError: eT,
              isEligibleForOffer: ec,
            },
            { tags: { app_context: "billing" } },
          );
        let ej =
            null !== (i = null == eT ? void 0 : eT.message) && void 0 !== i
              ? i
              : B.Z.Messages.ERROR_GENERIC_TITLE,
          eA = ec && null == eT,
          eS = ec && null != eT,
          eg =
            eA &&
            null == Y &&
            !!ec &&
            (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
          { enabled: eP } = c._.useExperiment(
            { location: "PremiumPaymentPlanSelectStep" },
            { autoTrackExposure: !1 },
          ),
          eR =
            !es &&
            (null == eI ? void 0 : eI.skuId) === G.Si.TIER_2 &&
            (null == ea ? void 0 : ea.referrer_id) != null &&
            eP,
          em = null;
        return ((em = eR ? (0, t.jsx)(f.Z, {}) : (0, t.jsx)(h.Z, {})), eg)
          ? (0, t.jsx)(O.Z, {})
          : (C()(null != q, "Step should be set"),
            C()(ex.length > 0, "Premium plan options should be set"),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(y.P, { giftMessage: et }),
                !(es && (0, j.pO)(en)) &&
                  (0, t.jsx)(m.Z, { isEligibleForTrial: eo }),
                (0, t.jsxs)(Z.C3, {
                  children: [
                    eA &&
                      (0, t.jsx)("hr", {
                        className: v.planSelectSeparatorUpper,
                      }),
                    em,
                    (0, t.jsx)(U.Z, {}),
                    eS
                      ? (0, t.jsx)(a.FormErrorBlock, { children: ej })
                      : (0, t.jsx)(M.O, {
                          planOptions: ex,
                          eligibleForMultiMonthPlans: er,
                          referralTrialOfferId: W,
                          selectedPlanId: null == z ? void 0 : z.id,
                          subscriptionPeriodEnd:
                            null == eM ? void 0 : eM.subscriptionPeriodEnd,
                          discountInvoiceItems: eu
                            ? null == eM
                              ? void 0
                              : eM.invoiceItems
                            : void 0,
                          handleClose: D,
                        }),
                    eA &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("hr", {
                            className: v.planSelectSeparatorLower,
                          }),
                          (0, t.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            children:
                              B.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format(
                                {
                                  link: A.Z.getArticleURL(
                                    H.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                                  ),
                                },
                              ),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, t.jsxs)(Z.O3, {
                  children: [
                    eN
                      ? (0, t.jsxs)("div", {
                          className: v.nitroweenFooterBanner,
                          children: [
                            (0, t.jsx)(L.Z, { size: a.AvatarSizes.SIZE_40 }),
                            (0, t.jsx)(a.Text, {
                              variant: "text-md/normal",
                              color: "always-white",
                              children:
                                B.Z.Messages
                                  .NITROWEEN_DESKTOP_GIFT_PURCHASE_DESCRIPTION,
                            }),
                          ],
                        })
                      : null,
                    (0, t.jsx)(a.ModalFooter, {
                      justify: _.Z.Justify.BETWEEN,
                      align: _.Z.Align.CENTER,
                      children: (0, t.jsx)(M.M, {
                        onStepChange: F,
                        onBackClick: () => F(R.h8.SKU_SELECT),
                        showBackButton: null == b && null == k,
                        planOptions: ex,
                        shouldRenderUpdatedPaymentModal: eA,
                        isTrial: eo,
                      }),
                    }),
                  ],
                }),
              ],
            }));
      }
    },
    846464: function (e, s, n) {
      n.d(s, {
        q: function () {
          return M;
        },
      });
      var t = n(735250);
      n(470079);
      var l = n(120356),
        i = n.n(l),
        C = n(481060),
        r = n(140465),
        a = n(857039),
        o = n(639119),
        _ = n(55610),
        d = n(973007),
        u = n(74538),
        c = n(987209),
        p = n(598),
        x = n(409813),
        L = n(614223),
        I = n(48175),
        E = n(474936),
        h = n(689938),
        f = n(885032);
      function M(e) {
        let {
            handleStepChange: s,
            handleClose: n,
            referralTrialOfferId: l,
          } = e,
          {
            setSelectedSkuId: i,
            activeSubscription: C,
            startedPaymentFlowWithPaymentSourcesRef: _,
            setSelectedPlanId: d,
            priceOptions: h,
          } = (0, p.usePaymentContext)(),
          { isGift: f } = (0, c.wD)(),
          M = (0, a.Z)({ location: "Payment SKU Selection" }),
          N = (0, o.N)(l),
          j = (0, r.Nx)();
        return (0, t.jsx)(T, {
          selectSku: (e) =>
            (function (e) {
              let {
                activeSubscription: s,
                newSkuId: n,
                setSelectedSkuId: t,
                handleStepChange: l,
                isGift: i,
                userTrialOffer: C,
                setSelectedPlanId: r,
                startedPaymentFlowWithPaymentSources: a,
              } = e;
              t(n);
              let o = x.h8.PLAN_SELECT,
                _ = (0, u.k5)(s);
              (_ === E.Si.TIER_1 || _ === E.Si.TIER_2) &&
                n === E.Si.TIER_0 &&
                !i &&
                (o = x.h8.WHAT_YOU_LOSE);
              let d = (0, I.T)({ userTrialOffer: C, isGift: i, skuId: n }),
                c = (0, L.Kp)({
                  isTrial: d,
                  isGift: i,
                  selectedSkuId: n,
                  startedPaymentFlowWithPaymentSources: a,
                });
              o !== x.h8.WHAT_YOU_LOSE &&
                c &&
                ((o = x.h8.REVIEW), r((0, L.nA)(n, s))),
                l(o, { analyticsDataOverride: { sku_id: n } });
            })({
              activeSubscription: C,
              newSkuId: e,
              setSelectedSkuId: i,
              handleStepChange: s,
              isGift: f,
              userTrialOffer: N,
              startedPaymentFlowWithPaymentSources: _.current,
              setSelectedPlanId: d,
            }),
          onClose: n,
          isGift: f,
          inOfferExperience: j,
          priceOptions: h,
          shouldShowHalloweenTier2Card: M,
        });
      }
      function T(e) {
        let {
          selectSku: s,
          onClose: n,
          isGift: l,
          inOfferExperience: r,
          priceOptions: a,
          shouldShowHalloweenTier2Card: o,
        } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(C.ModalHeader, {
              className: f.skuSelectModalHeader,
              separator: !1,
              children: [
                (0, t.jsx)(C.FormTitle, {
                  tag: C.FormTitleTags.H4,
                  children: h.Z.Messages.BILLING_STEP_SELECT_PLAN,
                }),
                (0, t.jsx)(C.ModalCloseButton, { onClick: n }),
              ],
            }),
            (0, t.jsxs)(C.ModalContent, {
              className: i()(f.skuSelectModalContent, { [f.modalPadding]: r }),
              children: [
                (0, t.jsx)(_.Z, {
                  fromBoostCancelModal: !1,
                  className: f.legacyPricingNotice,
                }),
                (0, t.jsx)(d.Z, {
                  onSelectSku: (e) => s((0, u.Wz)(e)),
                  isGift: l,
                  priceOptions: a,
                  shouldShowHalloweenTier2Card: o,
                }),
              ],
            }),
          ],
        });
      }
    },
    184160: function (e, s, n) {
      n.d(s, {
        x: function () {
          return I;
        },
      });
      var t = n(735250);
      n(470079);
      var l = n(512722),
        i = n.n(l),
        C = n(780384),
        r = n(481060),
        a = n(410030),
        o = n(973159),
        _ = n(74538),
        d = n(987209),
        u = n(598),
        c = n(409813),
        p = n(614223),
        x = n(689938),
        L = n(117787);
      function I(e) {
        let { handleStepChange: s, handleClose: n } = e,
          l = (0, a.ZP)(),
          {
            activeSubscription: I,
            selectedSkuId: E,
            setSelectedPlanId: h,
            startedPaymentFlowWithPaymentSourcesRef: f,
          } = (0, u.usePaymentContext)(),
          { isGift: M } = (0, d.wD)(),
          T = null != I ? (0, _.Af)(I) : null,
          N = null != T ? (0, _.gq)(T.planId) : null,
          j = null != T ? (0, _.Rd)(T.planId) : null,
          A = (0, p.Kp)({
            isTrial: !1,
            isGift: M,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: f.current,
          });
        return (
          i()(null != j, "Expected premium type"),
          (0, t.jsx)(o.Z, {
            premiumType: j,
            titleText: x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
            subtitleText:
              x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                subscriptionName: N,
              }),
            footer: (0, t.jsxs)("div", {
              className: L.whatYouLoseButtonContainer,
              children: [
                (0, t.jsx)(r.Button, {
                  onClick: () => {
                    A
                      ? (h((0, p.nA)(E, I)), s(c.h8.REVIEW))
                      : s(c.h8.PLAN_SELECT);
                  },
                  children: x.Z.Messages.CONTINUE,
                }),
                (0, t.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  color: (0, C.wj)(l)
                    ? r.Button.Colors.WHITE
                    : r.Button.Colors.PRIMARY,
                  onClick: n,
                  children: x.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK,
                }),
              ],
            }),
            onClose: n,
            isDowngrade: !0,
          })
        );
      }
    },
    881602: function (e, s, n) {
      n.d(s, {
        F: function () {
          return t;
        },
      });
      let t = (0, n(818083).B)({
        kind: "user",
        id: "2023-07_automated_gift_code_message",
        label:
          "Automatically send gift code message in direct message to gift recipient",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Show the automated gift code message",
            config: { enabled: !0 },
          },
        ],
      });
    },
    105759: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return _;
        },
      });
      var t = n(470079),
        l = n(442837),
        i = n(598077),
        C = n(699516),
        r = n(295226),
        a = n(786397),
        o = n(474936);
      function _() {
        let e = (0, a.w)(o.a7),
          s = (0, l.e7)([r.Z], () =>
            r.Z.getReferrer(null == e ? void 0 : e.trial_id),
          ),
          n = (0, l.e7)([C.Z], () => null == s || C.Z.isBlocked(s.id));
        return t.useMemo(() => (n || null == s ? null : new i.Z(s)), [s, n]);
      }
    },
    381507: function (e, s, n) {
      var t = n(735250);
      n(470079);
      var l = n(780384),
        i = n(481060),
        C = n(410030),
        r = n(518950),
        a = n(51144),
        o = n(105759),
        _ = n(898969),
        d = n(703614),
        u = n(182294),
        c = n(689938),
        p = n(279521);
      s.Z = () => {
        let e = (0, o.Z)(),
          { avatarSrc: s, eventHandlers: n } = (0, r.Z)({
            user: e,
            size: u.EF.SIZE_32,
            animateOnHover: !0,
          }),
          x = (0, C.Fg)(),
          L = (0, l.ap)(x),
          I = a.ZP.getName(e),
          E = L ? _.Z : d.Z;
        return null == e
          ? null
          : (0, t.jsxs)("div", {
              className: p.attributionBannerContainer,
              children: [
                (0, t.jsx)("div", {
                  className: p.avatarContainer,
                  children: (0, t.jsx)(i.Avatar, {
                    src: s,
                    "aria-label": e.username,
                    size: u.EF.SIZE_32,
                    ...n,
                  }),
                }),
                (0, t.jsx)(i.Text, {
                  variant: "text-xs/bold",
                  className: p.bannerHeader,
                  children:
                    c.Z.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({
                      userName: I,
                    }),
                }),
                (0, t.jsx)(E, { className: p.bannerIcon }),
              ],
            });
      };
    },
    898969: function (e, s, n) {
      var t = n(735250);
      n(470079);
      s.Z = (e) => {
        let { className: s, width: n = 83, height: l = 45 } = e;
        return (0, t.jsxs)("svg", {
          width: n,
          height: l,
          viewBox: "0 0 83 45",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: s,
          children: [
            (0, t.jsxs)("g", {
              opacity: "0.6",
              children: [
                (0, t.jsx)("path", {
                  opacity: "0.3",
                  d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                  fill: "url(#paint0_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                  fill: "url(#paint1_linear_1558_55666)",
                }),
                (0, t.jsxs)("g", {
                  clipPath: "url(#clip0_1558_55666)",
                  children: [
                    (0, t.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "url(#paint2_linear_1558_55666)",
                    }),
                    (0, t.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "white",
                    }),
                    (0, t.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "url(#paint3_linear_1558_55666)",
                    }),
                    (0, t.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "white",
                    }),
                    (0, t.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "url(#paint4_linear_1558_55666)",
                    }),
                    (0, t.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, t.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "url(#paint5_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "url(#paint6_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                  fill: "url(#paint7_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                  fill: "url(#paint8_linear_1558_55666)",
                  fillOpacity: "0.9",
                }),
                (0, t.jsx)("path", {
                  d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                  fill: "url(#paint9_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                  fill: "url(#paint10_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                  fill: "url(#paint11_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                  fill: "url(#paint12_linear_1558_55666)",
                }),
              ],
            }),
            (0, t.jsxs)("defs", {
              children: [
                (0, t.jsxs)("linearGradient", {
                  id: "paint0_linear_1558_55666",
                  x1: "0",
                  y1: "23.8981",
                  x2: "92.5783",
                  y2: "23.8981",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint1_linear_1558_55666",
                  x1: "19.5205",
                  y1: "23.9092",
                  x2: "77.3871",
                  y2: "23.9092",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint2_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint3_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint4_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint5_linear_1558_55666",
                  x1: "22.6953",
                  y1: "23.8106",
                  x2: "74.5438",
                  y2: "23.8106",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint6_linear_1558_55666",
                  x1: "33.8516",
                  y1: "23.5132",
                  x2: "64.6392",
                  y2: "23.5132",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint7_linear_1558_55666",
                  x1: "73.1357",
                  y1: "5.12062",
                  x2: "80.0428",
                  y2: "5.12062",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint8_linear_1558_55666",
                  x1: "72.3398",
                  y1: "1.21667",
                  x2: "74.7929",
                  y2: "1.21667",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint9_linear_1558_55666",
                  x1: "13.3486",
                  y1: "34.3352",
                  x2: "17.4625",
                  y2: "34.3352",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint10_linear_1558_55666",
                  x1: "74.4932",
                  y1: "40.3635",
                  x2: "78.607",
                  y2: "40.3635",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint11_linear_1558_55666",
                  x1: "17.4795",
                  y1: "35.8773",
                  x2: "19.9325",
                  y2: "35.8773",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint12_linear_1558_55666",
                  x1: "78.625",
                  y1: "41.9056",
                  x2: "81.078",
                  y2: "41.9056",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsx)("clipPath", {
                  id: "clip0_1558_55666",
                  children: (0, t.jsx)("rect", {
                    width: "16.3534",
                    height: "16.3534",
                    fill: "white",
                    transform: "translate(39.6143 14.9869)",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    703614: function (e, s, n) {
      var t = n(735250);
      n(470079);
      s.Z = (e) => {
        let { className: s, width: n = 83, height: l = 45 } = e;
        return (0, t.jsxs)("svg", {
          width: n,
          height: l,
          viewBox: "0 0 83 45",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: s,
          children: [
            (0, t.jsxs)("g", {
              opacity: "0.4",
              children: [
                (0, t.jsx)("path", {
                  opacity: "0.3",
                  d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                  fill: "url(#paint0_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                  fill: "url(#paint1_linear_1521_51082)",
                }),
                (0, t.jsxs)("g", {
                  clipPath: "url(#clip0_1521_51082)",
                  children: [
                    (0, t.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "url(#paint2_linear_1521_51082)",
                    }),
                    (0, t.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "white",
                    }),
                    (0, t.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "url(#paint3_linear_1521_51082)",
                    }),
                    (0, t.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "white",
                    }),
                    (0, t.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "url(#paint4_linear_1521_51082)",
                    }),
                    (0, t.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, t.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "url(#paint5_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "url(#paint6_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                  fill: "url(#paint7_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                  fill: "url(#paint8_linear_1521_51082)",
                  fillOpacity: "0.9",
                }),
                (0, t.jsx)("path", {
                  d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                  fill: "url(#paint9_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                  fill: "url(#paint10_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                  fill: "url(#paint11_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                  fill: "url(#paint12_linear_1521_51082)",
                }),
              ],
            }),
            (0, t.jsxs)("defs", {
              children: [
                (0, t.jsxs)("linearGradient", {
                  id: "paint0_linear_1521_51082",
                  x1: "0",
                  y1: "23.8981",
                  x2: "92.5783",
                  y2: "23.8981",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint1_linear_1521_51082",
                  x1: "19.5205",
                  y1: "23.9092",
                  x2: "77.3871",
                  y2: "23.9092",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint2_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint3_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint4_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint5_linear_1521_51082",
                  x1: "22.6953",
                  y1: "23.8106",
                  x2: "74.5438",
                  y2: "23.8106",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint6_linear_1521_51082",
                  x1: "33.8516",
                  y1: "23.5132",
                  x2: "64.6392",
                  y2: "23.5132",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint7_linear_1521_51082",
                  x1: "73.1357",
                  y1: "5.12062",
                  x2: "80.0428",
                  y2: "5.12062",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint8_linear_1521_51082",
                  x1: "72.3398",
                  y1: "1.21667",
                  x2: "74.7929",
                  y2: "1.21667",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint9_linear_1521_51082",
                  x1: "13.3486",
                  y1: "34.3352",
                  x2: "17.4625",
                  y2: "34.3352",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint10_linear_1521_51082",
                  x1: "74.4932",
                  y1: "40.3635",
                  x2: "78.607",
                  y2: "40.3635",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint11_linear_1521_51082",
                  x1: "17.4795",
                  y1: "35.8773",
                  x2: "19.9325",
                  y2: "35.8773",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint12_linear_1521_51082",
                  x1: "78.625",
                  y1: "41.9056",
                  x2: "81.078",
                  y2: "41.9056",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsx)("clipPath", {
                  id: "clip0_1521_51082",
                  children: (0, t.jsx)("rect", {
                    width: "16.3534",
                    height: "16.3534",
                    fill: "white",
                    transform: "translate(39.6143 14.9869)",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    973007: function (e, s, n) {
      var t = n(735250);
      n(470079);
      var l = n(481060),
        i = n(184508),
        C = n(823188),
        r = n(474936),
        a = n(377628);
      function o(e) {
        let {
          onClick: s,
          isGift: n,
          priceOptions: i,
          showHalloweenGift: r,
          shouldUseTaglineXPCopy: o,
        } = e;
        return (0, t.jsx)(l.Clickable, {
          onClick: s,
          style: { cursor: "pointer" },
          children: (0, t.jsx)(C.wp, {
            className: a.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !r && !o,
            showHalloweenGift: r,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: i,
            shouldUseTaglineXPCopy: o,
          }),
        });
      }
      function _(e) {
        let {
          onClick: s,
          isGift: n,
          priceOptions: i,
          shouldUseTaglineXPCopy: r,
        } = e;
        return (0, t.jsx)(l.Clickable, {
          onClick: s,
          style: { cursor: "pointer" },
          children: (0, t.jsx)(C.Gq, {
            className: a.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !r,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: i,
            shouldUseTaglineXPCopy: r,
          }),
        });
      }
      s.Z = function (e) {
        let {
            onSelectSku: s,
            isGift: n,
            priceOptions: l,
            shouldShowHalloweenTier2Card: C,
          } = e,
          a = (0, i.tY)("PremiumMarketingHome");
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(o, {
              onClick: () => s(r.Si.TIER_2),
              isGift: n,
              priceOptions: l,
              showHalloweenGift: C,
              shouldUseTaglineXPCopy: a,
            }),
            (0, t.jsx)(_, {
              onClick: () => s(r.Si.TIER_0),
              isGift: n,
              priceOptions: l,
              shouldUseTaglineXPCopy: a,
            }),
          ],
        });
      };
    },
    317269: function (e, s, n) {
      n.d(s, {
        TB: function () {
          return N;
        },
        VY: function () {
          return j;
        },
        ZP: function () {
          return T;
        },
      }),
        n(47120),
        n(411104);
      var t = n(735250),
        l = n(470079),
        i = n(512722),
        C = n.n(i),
        r = n(442837),
        a = n(481060),
        o = n(16084),
        _ = n(987209),
        d = n(179118),
        u = n(912788),
        c = n(509545),
        p = n(55563),
        x = n(74538),
        L = n(741245),
        I = n(474936),
        E = n(981631),
        h = n(689938),
        f = n(977885);
      function M(e) {
        var s, n;
        let l,
          {
            planId: i,
            startingPremiumSubscriptionPlanId: a,
            paymentSourceType: o,
          } = e,
          [_, d] = (0, r.Wu)([c.Z], () => [c.Z.get(a), c.Z.get(i)]);
        if (
          (C()(null != _ && null != d, "Missing startingPlan or newPlan"),
          (s = a),
          (n = i),
          I.Y1.indexOf(s) < I.Y1.indexOf(n))
        )
          switch (i) {
            case I.Xh.PREMIUM_MONTH_TIER_1:
              (l = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1),
                E.X7u.has(null != o ? o : E.HeQ.UNKNOWN) &&
                  (l =
                    h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
              break;
            case I.Xh.PREMIUM_MONTH_TIER_2:
              (l =
                h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH),
                E.X7u.has(null != o ? o : E.HeQ.UNKNOWN) &&
                  (l =
                    h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
              break;
            case I.Xh.PREMIUM_YEAR_TIER_1:
              (l =
                h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR),
                E.X7u.has(null != o ? o : E.HeQ.UNKNOWN) &&
                  (l =
                    h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
              break;
            case I.Xh.PREMIUM_YEAR_TIER_2:
              (l =
                h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format(
                  { numFreeGuildSubscriptions: I.cb },
                )),
                E.X7u.has(null != o ? o : E.HeQ.UNKNOWN) &&
                  (l =
                    h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format(
                      { numFreeGuildSubscriptions: I.cb },
                    ));
              break;
            case I.Xh.PREMIUM_3_MONTH_TIER_2:
            case I.Xh.PREMIUM_6_MONTH_TIER_2:
              l =
                h.Z.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
              break;
            case I.Xh.PREMIUM_MONTH_TIER_0:
            case I.Xh.PREMIUM_YEAR_TIER_0:
              l = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            default:
              throw Error("Unexpected planId: ".concat(i));
          }
        else if (_.skuId === I.Si.TIER_2 && d.skuId === I.Si.TIER_1)
          l = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
        else
          switch (d.skuId) {
            case I.Si.TIER_0:
              l = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            case I.Si.TIER_1:
              l = h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
              break;
            case I.Si.TIER_2:
              l =
                1 !== _.intervalCount
                  ? h.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH
                  : h.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
              break;
            default:
              throw Error("Unexpected skuId: ".concat(d.skuId));
          }
        return (0, t.jsx)("div", { className: f.text, children: l });
      }
      function T(e) {
        let s,
          n,
          {
            planId: i,
            enableNoPaymentTrial: _,
            startingPremiumSubscriptionPlanId: d,
            onClose: u,
            followupSKUInfo: T,
            isDowngrade: N,
            hideClose: j,
            postSuccessGuild: A,
            paymentSourceType: S,
          } = e,
          { theme: g } = (0, a.useThemeContext)(),
          P = (0, r.e7)([p.Z], () => (null != T ? p.Z.get(T.id) : null));
        l.useEffect(() => {
          if (null == T || null != P) return;
          let { applicationId: e, id: s } = T;
          (0, o.$N)(e, s).catch(E.VqG);
        }, [T, P]);
        let R = (e) => {
          if (e.skuId === I.Si.TIER_0)
            return E.X7u.has(null != S ? S : E.HeQ.UNKNOWN)
              ? h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
          if (e.skuId === I.Si.TIER_1)
            return E.X7u.has(null != S ? S : E.HeQ.UNKNOWN)
              ? h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
          return E.X7u.has(null != S ? S : E.HeQ.UNKNOWN)
            ? h.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format()
            : _
              ? h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL
              : h.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
        };
        if (null != P)
          s = (0, t.jsx)("div", {
            className: f.text,
            children:
              h.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                skuName: P.name,
              }),
          });
        else if (null != d)
          s = (0, t.jsx)(M, {
            planId: i,
            startingPremiumSubscriptionPlanId: d,
          });
        else if (null != A) {
          let e = c.Z.get(i);
          C()(null != e, "Missing plan"),
            (s = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", { className: f.text, children: R(e) }),
                (0, t.jsx)("div", {
                  className: f.text,
                  children:
                    h.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format(
                      { guildName: A.name },
                    ),
                }),
              ],
            }));
        } else {
          let e = c.Z.get(i);
          C()(null != e, "Missing plan"),
            (s = (0, t.jsx)("div", { className: f.text, children: R(e) }));
        }
        let m = x.ZP.getPremiumType(i);
        return (
          C()(
            null != m,
            "premium type should not be null in purchase confirmation",
          ),
          (n =
            null != P
              ? h.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                  skuName: P.name,
                })
              : N
                ? h.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON
                : null != A
                  ? h.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA
                  : h.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
          (0, t.jsxs)("div", {
            className: f.confirmation,
            children: [
              (0, t.jsx)(L.C, {
                className: f.banner,
                theme: g,
                premiumType: m,
                type: E.X7u.has(null != S ? S : E.HeQ.UNKNOWN)
                  ? L.C.Types.PREMIUM_PAYMENT_STARTED
                  : null != d
                    ? L.C.Types.PREMIUM_UPDATED
                    : L.C.Types.PREMIUM_ACTIVATED,
              }),
              s,
              j ? null : (0, t.jsx)(a.Button, { onClick: u, children: n }),
            ],
          })
        );
      }
      function N(e) {
        let { planId: s, onClose: n, halloweenDecoPurchase: l } = e,
          {
            giftRecipient: i,
            selectedGiftStyle: a,
            hasSentMessage: o,
            giftMessageError: p,
            isSendingMessage: x,
          } = (0, _.wD)(),
          L = (0, r.e7)([c.Z], () => c.Z.get(s));
        C()(null != L, "Missing plan");
        let I = (0, r.e7)([u.Z], () => u.Z.getGiftCode(L.skuId));
        return (0, t.jsx)(d.Z, {
          giftCode: I,
          subscriptionPlan: L,
          onClose: n,
          selectedGiftStyle: a,
          hasSentMessage: o,
          giftRecipient: i,
          giftMessageError: p,
          isSendingMessage: x,
          halloweenDecoPurchase: l,
        });
      }
      function j() {
        return (0, t.jsxs)("div", {
          className: f.redirectConfirmation,
          children: [
            (0, t.jsx)(a.Heading, {
              variant: "heading-xl/bold",
              children:
                h.Z.Messages
                  .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER,
            }),
            (0, t.jsxs)("div", {
              className: f.redirectBody,
              children: [
                (0, t.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children:
                    h.Z.Messages
                      .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY,
                }),
                (0, t.jsx)("br", {}),
                (0, t.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children:
                    h.Z.Messages
                      .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=0d39f73f898514b09305.js.map
