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
    832149: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(481060);
      t.Z = (e) => {
        let { product: t, analyticsLocations: s } = e;
        (0, l.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            n.e("87624"),
            n.e("81520"),
          ]).then(n.bind(n, 331042));
          return (n) =>
            (0, i.jsx)(e, { product: t, analyticsLocations: s, ...n });
        });
      };
    },
    592627: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        s = n(906732),
        r = n(832149),
        C = n(600164),
        a = n(857039),
        o = n(515593),
        d = n(563132),
        u = n(614277),
        c = n(474936),
        p = n(388032),
        x = n(111225);
      function h(e) {
        let { onClose: t, halloweenDecoPurchase: n } = e,
          { selectedPlan: h } = (0, d.usePaymentContext)(),
          { analyticsLocations: _ } = (0, s.ZP)();
        return (0, a.Z)({ location: "Gift purchase confirmation" }) &&
          (null == h ? void 0 : h.skuId) === c.Si.TIER_2 &&
          null != n
          ? (0, i.jsx)(u.O3, {
              children: (0, i.jsx)(l.ModalFooter, {
                align: C.Z.Align.CENTER,
                children: (0, i.jsxs)("div", {
                  className: x.halloweenFooter,
                  children: [
                    (0, i.jsx)(o.Z, { size: l.AvatarSizes.SIZE_32 }),
                    (0, i.jsx)(l.Button, {
                      onClick: () => {
                        t(), (0, r.Z)({ product: n, analyticsLocations: _ });
                      },
                      children: p.intl.string(p.t.kMYVws),
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
    },
    293858: function (e, t, n) {
      n.d(t, {
        b: function () {
          return f;
        },
      });
      var i = n(200651),
        l = n(192379),
        s = n(512722),
        r = n.n(s),
        C = n(881602),
        a = n(155491),
        o = n(317269),
        d = n(669079),
        u = n(296848),
        c = n(987209),
        p = n(563132),
        x = n(592627),
        h = n(614277),
        _ = n(698708);
      function f(e) {
        var t, n;
        let s,
          {
            handleClose: f,
            planGroup: j,
            onSubscriptionConfirmation: L,
            renderPurchaseConfirmation: m,
            postSuccessGuild: g,
            followupSKUInfo: E,
            continueSession: S,
          } = e,
          {
            activeSubscription: y,
            paymentSources: M,
            paymentSourceId: Z,
            selectedPlan: P,
            selectedSkuId: T,
            step: I,
            updatedSubscription: U,
            startingPremiumSubscriptionPlanIdRef: v,
          } = (0, p.usePaymentContext)(),
          {
            isGift: A,
            giftRecipient: N,
            giftCode: k,
            hasSentMessage: b,
            isSendingMessage: w,
            sendGiftMessage: H,
          } = (0, c.wD)(),
          O = (0, a.Z2)();
        r()(null != P, "Expected plan to selected"),
          r()(null != T, "Expected selectedSkuId"),
          r()(null != I, "Step should be set");
        let R = l.useCallback(() => {
          f(), null == L || L();
        }, [f, L]);
        return (
          l.useEffect(() => {
            if (!(!A || null == N || null == k || b || w || (0, d.pO)(N)))
              C.F.getCurrentConfig({ location: "36b986_1" }).enabled &&
                H({ onSubscriptionConfirmation: L });
          }, [H, A, N, k, b, w, L]),
          (s =
            null != m
              ? m(P, R, U)
              : S
                ? (0, i.jsx)(o.VY, {})
                : A
                  ? (0, i.jsx)(o.TB, {
                      planId: P.id,
                      onClose: R,
                      halloweenDecoPurchase: O,
                    })
                  : v.current === P.id
                    ? (0, i.jsx)(o.ZP, {
                        planId: P.id,
                        postSuccessGuild: g,
                        onClose: R,
                        paymentSourceType:
                          null === (t = M[null != Z ? Z : ""]) || void 0 === t
                            ? void 0
                            : t.type,
                      })
                    : (0, i.jsx)(o.ZP, {
                        followupSKUInfo: E,
                        startingPremiumSubscriptionPlanId: v.current,
                        planId: P.id,
                        onClose: R,
                        isDowngrade: null != y && (0, u.GY)(y, P.id, j),
                        paymentSourceType:
                          null === (n = M[null != Z ? Z : ""]) || void 0 === n
                            ? void 0
                            : n.type,
                      })),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(h.C3, { children: [(0, i.jsx)(_.Z, {}), s] }),
              A
                ? (0, i.jsx)(x.Z, { onClose: R, halloweenDecoPurchase: O })
                : null,
            ],
          })
        );
      }
    },
    7305: function (e, t, n) {
      n.r(t),
        n.d(t, {
          PremiumPaymentModal: function () {
            return v;
          },
          STEPS: function () {
            return k;
          },
          default: function () {
            return b;
          },
        }),
        n(411104),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(442837),
        r = n(570140),
        C = n(821849),
        a = n(100527),
        o = n(906732),
        d = n(509545),
        u = n(78839),
        c = n(669079),
        p = n(987209),
        x = n(563132),
        h = n(409813),
        _ = n(791785),
        f = n(276442),
        j = n(793541),
        L = n(380898),
        m = n(710094),
        g = n(293858),
        E = n(614223),
        S = n(174827),
        y = n(846464),
        M = n(184160),
        Z = n(48175),
        P = n(981631),
        T = n(474936),
        I = n(388032);
      let U = [
        h.h8.PLAN_SELECT,
        h.h8.ADD_PAYMENT_STEPS,
        h.h8.REVIEW,
        h.h8.CONFIRM,
      ];
      function v(e) {
        let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            onComplete: a,
            transitionState: u,
            initialPlanId: f,
            subscriptionTier: j,
            onClose: L,
            trialId: m,
            trialFooterMessageOverride: g,
            reviewWarningMessage: E,
            openInvoiceId: S,
            onSubscriptionConfirmation: y,
            renderPurchaseConfirmation: M,
            postSuccessGuild: Z,
            followupSKUInfo: I,
            renderHeader: U,
            applicationId: v,
            guildId: A,
            referralTrialOfferId: N,
            skuId: k,
            returnRef: b,
            skipConfirm: w = !1,
            continueSession: H = !1,
          } = e,
          { analyticsLocations: O } = (0, o.ZP)();
        l.useEffect(() => {
          !d.Z.isLoadedForPremiumSKUs() && r.Z.wait(() => (0, C.Y2)());
        }, []);
        let { step: R } = (0, x.usePaymentContext)(),
          { isGift: B, giftMessage: F, giftRecipient: G } = (0, p.wD)(),
          W = B && (0, c.pO)(G) && R === h.h8.PLAN_SELECT;
        return (0, i.jsx)(_.PaymentModal, {
          analyticsLocations: O,
          analyticsLocation: t,
          analyticsObject: n,
          analyticsSourceLocation: s,
          analyticsSubscriptionType: P.NYc.PREMIUM,
          onComplete: a,
          transitionState: u,
          initialPlanId: f,
          giftMessage: F,
          subscriptionTier: j,
          onClose: L,
          trialId: m,
          isGift: B,
          trialFooterMessageOverride: g,
          reviewWarningMessage: E,
          planGroup: T.Y1,
          openInvoiceId: S,
          onSubscriptionConfirmation: y,
          renderPurchaseConfirmation: M,
          postSuccessGuild: Z,
          followupSKUInfo: I,
          renderHeader: U,
          applicationId: v,
          guildId: A,
          referralTrialOfferId: N,
          skuId: k,
          shakeWhilePurchasing: !0,
          isLargeModal: W,
          returnRef: b,
          skipConfirm: w,
          continueSession: H,
        });
      }
      function A(e) {
        let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } =
            (0, x.usePaymentContext)(),
          { isGift: i } = (0, p.wD)();
        return (0, E.Kp)({
          isTrial: null != e && e,
          isGift: i,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: t.current,
        });
      }
      function N(e) {
        let {
            initialPlanId: t,
            handleStepChange: n,
            referralTrialOfferId: l,
          } = e,
          { paymentSources: s, selectedSkuId: r } = (0, x.usePaymentContext)(),
          { isGift: C } = (0, p.wD)(),
          a = A((0, Z.Z)({ isGift: C, skuId: r, referralTrialOfferId: l }));
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(f.J, {
            ...e,
            breadcrumbSteps: U,
            onReturn: () => {
              let e =
                Object.values(s).length < 1 && null == t
                  ? h.h8.PLAN_SELECT
                  : h.h8.REVIEW;
              a && (e = h.h8.REVIEW),
                n(e, { trackedFromStep: h.h8.PAYMENT_TYPE });
            },
          }),
        });
      }
      let k = [
        {
          key: null,
          renderStep: (e) => (0, i.jsx)(_.PaymentPredicateStep, { ...e }),
        },
        {
          key: h.h8.SKU_SELECT,
          renderStep: (e) => (0, i.jsx)(y.q, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: h.h8.WHAT_YOU_LOSE,
          renderStep: (e) => (0, i.jsx)(M.x, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: h.h8.PLAN_SELECT,
          renderStep: (e) => (0, i.jsx)(S.x, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              A(e) ? null : I.intl.string(I.t["r+SebW"]),
          },
        },
        {
          key: h.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(N, { ...e }) }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              A(e) ? null : I.intl.string(I.t.Sb6wIy),
          },
        },
        {
          key: h.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(L.Z, {}),
        },
        {
          key: h.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(j.Z, {}),
        },
        {
          key: h.h8.REVIEW,
          renderStep: (e) => (0, i.jsx)(m.l, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              A(e) ? I.intl.string(I.t.UKbp1N) : I.intl.string(I.t.QBnNHh),
          },
        },
        { key: h.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(g.b, { ...e }) },
      ];
      function b(e) {
        let t = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: n } = (0, o.ZP)(
            e.analyticsLocations,
            a.Z.PREMIUM_PAYMENT_MODAL,
          ),
          {
            subscriptionTier: l,
            isGift: r,
            giftRecipient: C,
            giftMessage: d,
            giftStyle: c,
            giftingOrigin: h,
            loadId: _,
            defaultPlanId: f,
            referralCode: j,
            repeatPurchase: L,
          } = e;
        if (null != l && !Object.values(T.Si).includes(l))
          throw Error("subscriptionTier must be a premium subscription");
        return (0, i.jsx)(o.Gt, {
          value: n,
          children: (0, i.jsx)(x.PaymentContextProvider, {
            loadId: _,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: k,
            skuIDs: [...T.YQ],
            isGift: r,
            defaultPlanId: f,
            referralCode: j,
            repeatPurchase: L,
            children: (0, i.jsx)(p.KB, {
              isGift: r,
              giftRecipient: null == C ? void 0 : C,
              giftMessage: d,
              giftStyle: c,
              giftingOrigin: h,
              children: (0, i.jsx)(v, { ...e }),
            }),
          }),
        });
      }
    },
    174827: function (e, t, n) {
      n.d(t, {
        x: function () {
          return R;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(512722),
        r = n.n(s),
        C = n(399606),
        a = n(481060),
        o = n(975608),
        d = n(600164),
        u = n(711459),
        c = n(374649),
        p = n(650032),
        x = n(439017),
        h = n(857039),
        _ = n(515593),
        f = n(104494),
        j = n(639119),
        L = n(642530),
        m = n(381507),
        g = n(314404),
        E = n(594174),
        S = n(509545),
        y = n(669079),
        M = n(63063),
        Z = n(74538),
        P = n(987209),
        T = n(563132),
        I = n(409813),
        U = n(51499),
        v = n(456251),
        A = n(614277),
        N = n(809144),
        k = n(698708),
        b = n(981631),
        w = n(474936),
        H = n(388032),
        O = n(427830);
      function R(e) {
        var t, n, s;
        let {
            handleStepChange: R,
            initialPlanId: B,
            subscriptionTier: F,
            trialId: G,
            referralTrialOfferId: W,
            handleClose: Y,
          } = e,
          {
            activeSubscription: D,
            hasFetchedSubscriptions: X,
            paymentSourceId: V,
            paymentSources: K,
            selectedSkuId: Q,
            selectedPlan: q,
            step: z,
            defaultPlanId: J,
            priceOptions: $,
            isPremium: ee,
          } = (0, T.usePaymentContext)(),
          { isGift: et, giftRecipient: en, giftMessage: ei } = (0, P.wD)(),
          el = null != V ? K[V] : null,
          { newPlans: es } = u.ZP.useExperiment(
            { location: "d17fd6_3" },
            { autoTrackExposure: !1 },
          ),
          er = (0, C.e7)([E.default], () => E.default.getCurrentUser()),
          eC =
            !et &&
            null != Q &&
            Q === w.Si.TIER_2 &&
            null != er &&
            er.hasHadPremium() &&
            X &&
            null == D &&
            (0, u.aQ)(el),
          ea = (0, j.N)(W),
          eo =
            !et &&
            null != ea &&
            null != Q &&
            w.nG[ea.trial_id].skus.includes(Q),
          ed = (0, f.Ng)(),
          eu =
            null == ed
              ? void 0
              : null === (t = ed.discount) || void 0 === t
                ? void 0
                : t.plan_ids.some((e) => w.GP[e].skuId === Q),
          ec = !et && null != ed && null != Q && eu,
          ep = null !== (n = eo || ec) && void 0 !== n && n,
          { defaultToMonthlyPlan: ex } = x.k.useExperiment(
            { location: "d17fd6_4" },
            { autoTrackExposure: !1 },
          ),
          eh = l.useMemo(
            () =>
              (0, Z.V7)({
                skuId: Q,
                isPremium: ee,
                multiMonthPlans: eC ? es : [],
                currentSubscription: D,
                isGift: et,
                isEligibleForTrial: eo,
                defaultPlanId: J,
                defaultToMonthlyPlan: ex,
              }),
            [Q, ee, es, D, eC, et, eo, J, ex],
          ),
          e_ =
            ec && eh.includes(w.Xh.PREMIUM_MONTH_TIER_2)
              ? w.Xh.PREMIUM_MONTH_TIER_2
              : eh[0],
          ef = (0, C.e7)([S.Z], () => S.Z.get(e_)),
          ej = [{ planId: null == ef ? void 0 : ef.id, quantity: 1 }],
          [eL, em] = l.useState(ep),
          [eg, eE] = (0, c.ED)({
            items: ej,
            renewal: !1,
            preventFetch: !ep,
            applyEntitlements: !0,
            trialId: G,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency,
          }),
          eS =
            (0, h.Z)({ location: "PremiumGiftPlanSelect" }) &&
            (null == ef ? void 0 : ef.skuId) === w.Si.TIER_2;
        l.useEffect(() => {
          ep && em((null == eg ? void 0 : eg.subscriptionPeriodEnd) == null);
        }, [eg, ep]),
          (0, o.Z)(
            "Payment Modal Plan Select Step",
            eL,
            5,
            {
              proratedInvoicePreview: eg,
              proratedInvoiceError: eE,
              isEligibleForOffer: ep,
            },
            { tags: { app_context: "billing" } },
          );
        let ey =
            null !== (s = null == eE ? void 0 : eE.message) && void 0 !== s
              ? s
              : H.intl.string(H.t.R0RpRU),
          eM = ep && null == eE,
          eZ = ep && null != eE,
          eP =
            eM &&
            null == D &&
            !!ep &&
            (null == eg ? void 0 : eg.subscriptionPeriodEnd) == null,
          { enabled: eT } = p._.useExperiment(
            { location: "PremiumPaymentPlanSelectStep" },
            { autoTrackExposure: !1 },
          ),
          eI =
            !et &&
            (null == ef ? void 0 : ef.skuId) === w.Si.TIER_2 &&
            (null == ea ? void 0 : ea.referrer_id) != null &&
            eT,
          eU = null;
        return ((eU = eI ? (0, i.jsx)(m.Z, {}) : (0, i.jsx)(L.Z, {})), eP)
          ? (0, i.jsx)(v.Z, {})
          : (r()(null != z, "Step should be set"),
            r()(eh.length > 0, "Premium plan options should be set"),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(N.P, { giftMessage: ei }),
                !(et && (0, y.pO)(en)) &&
                  (0, i.jsx)(U.Z, { isEligibleForTrial: eo }),
                (0, i.jsxs)(A.C3, {
                  children: [
                    eM &&
                      (0, i.jsx)("hr", {
                        className: O.planSelectSeparatorUpper,
                      }),
                    eU,
                    (0, i.jsx)(k.Z, {}),
                    eZ
                      ? (0, i.jsx)(a.FormErrorBlock, { children: ey })
                      : (0, i.jsx)(g.O, {
                          planOptions: eh,
                          eligibleForMultiMonthPlans: eC,
                          referralTrialOfferId: W,
                          selectedPlanId: null == q ? void 0 : q.id,
                          subscriptionPeriodEnd:
                            null == eg ? void 0 : eg.subscriptionPeriodEnd,
                          discountInvoiceItems: ec
                            ? null == eg
                              ? void 0
                              : eg.invoiceItems
                            : void 0,
                          handleClose: Y,
                        }),
                    eM &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("hr", {
                            className: O.planSelectSeparatorLower,
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            children: H.intl.format(H.t.BHtnqK, {
                              link: M.Z.getArticleURL(
                                b.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                              ),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, i.jsxs)(A.O3, {
                  children: [
                    eS
                      ? (0, i.jsxs)("div", {
                          className: O.nitroweenFooterBanner,
                          children: [
                            (0, i.jsx)(_.Z, { size: a.AvatarSizes.SIZE_40 }),
                            (0, i.jsx)(a.Text, {
                              variant: "text-md/normal",
                              color: "always-white",
                              children: H.intl.string(H.t["5vzYv7"]),
                            }),
                          ],
                        })
                      : null,
                    (0, i.jsx)(a.ModalFooter, {
                      justify: d.Z.Justify.BETWEEN,
                      align: d.Z.Align.CENTER,
                      children: (0, i.jsx)(g.M, {
                        onStepChange: R,
                        onBackClick: () => R(I.h8.SKU_SELECT),
                        showBackButton: null == B && null == F,
                        planOptions: eh,
                        shouldRenderUpdatedPaymentModal: eM,
                        isTrial: eo,
                      }),
                    }),
                  ],
                }),
              ],
            }));
      }
    },
    846464: function (e, t, n) {
      n.d(t, {
        q: function () {
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        s = n.n(l),
        r = n(481060),
        C = n(140465),
        a = n(857039),
        o = n(639119),
        d = n(55610),
        u = n(973007),
        c = n(74538),
        p = n(987209),
        x = n(563132),
        h = n(409813),
        _ = n(614223),
        f = n(48175),
        j = n(474936),
        L = n(388032),
        m = n(490134);
      function g(e) {
        let {
            handleStepChange: t,
            handleClose: n,
            referralTrialOfferId: l,
          } = e,
          {
            setSelectedSkuId: s,
            activeSubscription: r,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: u,
            priceOptions: L,
          } = (0, x.usePaymentContext)(),
          { isGift: m } = (0, p.wD)(),
          g = (0, a.Z)({ location: "Payment SKU Selection" }),
          S = (0, o.N)(l),
          y = (0, C.Nx)();
        return (0, i.jsx)(E, {
          selectSku: (e) =>
            (function (e) {
              let {
                activeSubscription: t,
                newSkuId: n,
                setSelectedSkuId: i,
                handleStepChange: l,
                isGift: s,
                userTrialOffer: r,
                setSelectedPlanId: C,
                startedPaymentFlowWithPaymentSources: a,
              } = e;
              i(n);
              let o = h.h8.PLAN_SELECT,
                d = (0, c.k5)(t);
              (d === j.Si.TIER_1 || d === j.Si.TIER_2) &&
                n === j.Si.TIER_0 &&
                !s &&
                (o = h.h8.WHAT_YOU_LOSE);
              let u = (0, f.T)({ userTrialOffer: r, isGift: s, skuId: n }),
                p = (0, _.Kp)({
                  isTrial: u,
                  isGift: s,
                  selectedSkuId: n,
                  startedPaymentFlowWithPaymentSources: a,
                });
              o !== h.h8.WHAT_YOU_LOSE &&
                p &&
                ((o = h.h8.REVIEW), C((0, _.nA)(n, t))),
                l(o, { analyticsDataOverride: { sku_id: n } });
            })({
              activeSubscription: r,
              newSkuId: e,
              setSelectedSkuId: s,
              handleStepChange: t,
              isGift: m,
              userTrialOffer: S,
              startedPaymentFlowWithPaymentSources: d.current,
              setSelectedPlanId: u,
            }),
          onClose: n,
          isGift: m,
          inOfferExperience: y,
          priceOptions: L,
          shouldShowHalloweenTier2Card: g,
        });
      }
      function E(e) {
        let {
          selectSku: t,
          onClose: n,
          isGift: l,
          inOfferExperience: C,
          priceOptions: a,
          shouldShowHalloweenTier2Card: o,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(r.ModalHeader, {
              className: m.skuSelectModalHeader,
              separator: !1,
              children: [
                (0, i.jsx)(r.FormTitle, {
                  tag: r.FormTitleTags.H4,
                  children: L.intl.string(L.t["r+SebW"]),
                }),
                (0, i.jsx)(r.ModalCloseButton, { onClick: n }),
              ],
            }),
            (0, i.jsxs)(r.ModalContent, {
              className: s()(m.skuSelectModalContent, { [m.modalPadding]: C }),
              children: [
                (0, i.jsx)(d.Z, {
                  fromBoostCancelModal: !1,
                  className: m.legacyPricingNotice,
                }),
                (0, i.jsx)(u.Z, {
                  onSelectSku: (e) => t((0, c.Wz)(e)),
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
    184160: function (e, t, n) {
      n.d(t, {
        x: function () {
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(512722),
        s = n.n(l),
        r = n(780384),
        C = n(481060),
        a = n(410030),
        o = n(807163),
        d = n(74538),
        u = n(987209),
        c = n(563132),
        p = n(409813),
        x = n(614223),
        h = n(388032),
        _ = n(194778);
      function f(e) {
        let { handleStepChange: t, handleClose: n } = e,
          l = (0, a.ZP)(),
          {
            activeSubscription: f,
            selectedSkuId: j,
            setSelectedPlanId: L,
            startedPaymentFlowWithPaymentSourcesRef: m,
          } = (0, c.usePaymentContext)(),
          { isGift: g } = (0, u.wD)(),
          E = null != f ? (0, d.Af)(f) : null,
          S = null != E ? (0, d.gq)(E.planId) : null,
          y = null != E ? (0, d.Rd)(E.planId) : null,
          M = (0, x.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: m.current,
          });
        return (
          s()(null != y, "Expected premium type"),
          (0, i.jsx)(o.Z, {
            premiumType: y,
            titleText: h.intl.string(h.t["7VcWW1"]),
            subtitleText: h.intl.format(h.t.Qk34Ii, { subscriptionName: S }),
            footer: (0, i.jsxs)("div", {
              className: _.whatYouLoseButtonContainer,
              children: [
                (0, i.jsx)(C.Button, {
                  onClick: () => {
                    M
                      ? (L((0, x.nA)(j, f)), t(p.h8.REVIEW))
                      : t(p.h8.PLAN_SELECT);
                  },
                  children: h.intl.string(h.t["3PatS0"]),
                }),
                (0, i.jsx)(C.Button, {
                  look: C.Button.Looks.LINK,
                  color: (0, r.wj)(l)
                    ? C.Button.Colors.WHITE
                    : C.Button.Colors.PRIMARY,
                  onClick: n,
                  children: h.intl.string(h.t.h9tkAA),
                }),
              ],
            }),
            onClose: n,
            isDowngrade: !0,
          })
        );
      }
    },
    881602: function (e, t, n) {
      n.d(t, {
        F: function () {
          return i;
        },
      });
      let i = (0, n(818083).B)({
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
    105759: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(192379),
        l = n(442837),
        s = n(598077),
        r = n(699516),
        C = n(431),
        a = n(786397),
        o = n(474936);
      function d() {
        let e = (0, a.w)(o.a7),
          t = (0, l.e7)([C.Z], () =>
            C.Z.getReferrer(null == e ? void 0 : e.trial_id),
          ),
          n = (0, l.e7)([r.Z], () => null == t || r.Z.isBlocked(t.id));
        return i.useMemo(() => (n || null == t ? null : new s.Z(t)), [t, n]);
      }
    },
    381507: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(780384),
        s = n(481060),
        r = n(410030),
        C = n(518950),
        a = n(51144),
        o = n(105759),
        d = n(898969),
        u = n(703614),
        c = n(182294),
        p = n(388032),
        x = n(377040);
      t.Z = () => {
        let e = (0, o.Z)(),
          { avatarSrc: t, eventHandlers: n } = (0, C.Z)({
            user: e,
            size: c.EF.SIZE_32,
            animateOnHover: !0,
          }),
          h = (0, r.Fg)(),
          _ = (0, l.ap)(h),
          f = a.ZP.getName(e),
          j = _ ? d.Z : u.Z;
        return null == e
          ? null
          : (0, i.jsxs)("div", {
              className: x.attributionBannerContainer,
              children: [
                (0, i.jsx)("div", {
                  className: x.avatarContainer,
                  children: (0, i.jsx)(s.Avatar, {
                    src: t,
                    "aria-label": e.username,
                    size: c.EF.SIZE_32,
                    ...n,
                  }),
                }),
                (0, i.jsx)(s.Text, {
                  variant: "text-xs/bold",
                  className: x.bannerHeader,
                  children: p.intl.format(p.t.oxhCOj, { userName: f }),
                }),
                (0, i.jsx)(j, { className: x.bannerIcon }),
              ],
            });
      };
    },
    898969: function (e, t, n) {
      var i = n(200651);
      n(192379);
      t.Z = (e) => {
        let { className: t, width: n = 83, height: l = 45 } = e;
        return (0, i.jsxs)("svg", {
          width: n,
          height: l,
          viewBox: "0 0 83 45",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          children: [
            (0, i.jsxs)("g", {
              opacity: "0.6",
              children: [
                (0, i.jsx)("path", {
                  opacity: "0.3",
                  d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                  fill: "url(#paint0_linear_1558_55666)",
                }),
                (0, i.jsx)("path", {
                  d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                  fill: "url(#paint1_linear_1558_55666)",
                }),
                (0, i.jsxs)("g", {
                  clipPath: "url(#clip0_1558_55666)",
                  children: [
                    (0, i.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "url(#paint2_linear_1558_55666)",
                    }),
                    (0, i.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "white",
                    }),
                    (0, i.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "url(#paint3_linear_1558_55666)",
                    }),
                    (0, i.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "white",
                    }),
                    (0, i.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "url(#paint4_linear_1558_55666)",
                    }),
                    (0, i.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, i.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "url(#paint5_linear_1558_55666)",
                }),
                (0, i.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "white",
                }),
                (0, i.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "url(#paint6_linear_1558_55666)",
                }),
                (0, i.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "white",
                }),
                (0, i.jsx)("path", {
                  d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                  fill: "url(#paint7_linear_1558_55666)",
                }),
                (0, i.jsx)("path", {
                  d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                  fill: "url(#paint8_linear_1558_55666)",
                  fillOpacity: "0.9",
                }),
                (0, i.jsx)("path", {
                  d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                  fill: "url(#paint9_linear_1558_55666)",
                }),
                (0, i.jsx)("path", {
                  d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                  fill: "url(#paint10_linear_1558_55666)",
                }),
                (0, i.jsx)("path", {
                  d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                  fill: "url(#paint11_linear_1558_55666)",
                }),
                (0, i.jsx)("path", {
                  d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                  fill: "url(#paint12_linear_1558_55666)",
                }),
              ],
            }),
            (0, i.jsxs)("defs", {
              children: [
                (0, i.jsxs)("linearGradient", {
                  id: "paint0_linear_1558_55666",
                  x1: "0",
                  y1: "23.8981",
                  x2: "92.5783",
                  y2: "23.8981",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint1_linear_1558_55666",
                  x1: "19.5205",
                  y1: "23.9092",
                  x2: "77.3871",
                  y2: "23.9092",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint2_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint3_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint4_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint5_linear_1558_55666",
                  x1: "22.6953",
                  y1: "23.8106",
                  x2: "74.5438",
                  y2: "23.8106",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint6_linear_1558_55666",
                  x1: "33.8516",
                  y1: "23.5132",
                  x2: "64.6392",
                  y2: "23.5132",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint7_linear_1558_55666",
                  x1: "73.1357",
                  y1: "5.12062",
                  x2: "80.0428",
                  y2: "5.12062",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint8_linear_1558_55666",
                  x1: "72.3398",
                  y1: "1.21667",
                  x2: "74.7929",
                  y2: "1.21667",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint9_linear_1558_55666",
                  x1: "13.3486",
                  y1: "34.3352",
                  x2: "17.4625",
                  y2: "34.3352",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint10_linear_1558_55666",
                  x1: "74.4932",
                  y1: "40.3635",
                  x2: "78.607",
                  y2: "40.3635",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint11_linear_1558_55666",
                  x1: "17.4795",
                  y1: "35.8773",
                  x2: "19.9325",
                  y2: "35.8773",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint12_linear_1558_55666",
                  x1: "78.625",
                  y1: "41.9056",
                  x2: "81.078",
                  y2: "41.9056",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsx)("clipPath", {
                  id: "clip0_1558_55666",
                  children: (0, i.jsx)("rect", {
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
    703614: function (e, t, n) {
      var i = n(200651);
      n(192379);
      t.Z = (e) => {
        let { className: t, width: n = 83, height: l = 45 } = e;
        return (0, i.jsxs)("svg", {
          width: n,
          height: l,
          viewBox: "0 0 83 45",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          children: [
            (0, i.jsxs)("g", {
              opacity: "0.4",
              children: [
                (0, i.jsx)("path", {
                  opacity: "0.3",
                  d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                  fill: "url(#paint0_linear_1521_51082)",
                }),
                (0, i.jsx)("path", {
                  d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                  fill: "url(#paint1_linear_1521_51082)",
                }),
                (0, i.jsxs)("g", {
                  clipPath: "url(#clip0_1521_51082)",
                  children: [
                    (0, i.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "url(#paint2_linear_1521_51082)",
                    }),
                    (0, i.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "white",
                    }),
                    (0, i.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "url(#paint3_linear_1521_51082)",
                    }),
                    (0, i.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "white",
                    }),
                    (0, i.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "url(#paint4_linear_1521_51082)",
                    }),
                    (0, i.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, i.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "url(#paint5_linear_1521_51082)",
                }),
                (0, i.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "white",
                }),
                (0, i.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "url(#paint6_linear_1521_51082)",
                }),
                (0, i.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "white",
                }),
                (0, i.jsx)("path", {
                  d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                  fill: "url(#paint7_linear_1521_51082)",
                }),
                (0, i.jsx)("path", {
                  d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                  fill: "url(#paint8_linear_1521_51082)",
                  fillOpacity: "0.9",
                }),
                (0, i.jsx)("path", {
                  d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                  fill: "url(#paint9_linear_1521_51082)",
                }),
                (0, i.jsx)("path", {
                  d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                  fill: "url(#paint10_linear_1521_51082)",
                }),
                (0, i.jsx)("path", {
                  d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                  fill: "url(#paint11_linear_1521_51082)",
                }),
                (0, i.jsx)("path", {
                  d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                  fill: "url(#paint12_linear_1521_51082)",
                }),
              ],
            }),
            (0, i.jsxs)("defs", {
              children: [
                (0, i.jsxs)("linearGradient", {
                  id: "paint0_linear_1521_51082",
                  x1: "0",
                  y1: "23.8981",
                  x2: "92.5783",
                  y2: "23.8981",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint1_linear_1521_51082",
                  x1: "19.5205",
                  y1: "23.9092",
                  x2: "77.3871",
                  y2: "23.9092",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint2_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint3_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint4_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint5_linear_1521_51082",
                  x1: "22.6953",
                  y1: "23.8106",
                  x2: "74.5438",
                  y2: "23.8106",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint6_linear_1521_51082",
                  x1: "33.8516",
                  y1: "23.5132",
                  x2: "64.6392",
                  y2: "23.5132",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint7_linear_1521_51082",
                  x1: "73.1357",
                  y1: "5.12062",
                  x2: "80.0428",
                  y2: "5.12062",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint8_linear_1521_51082",
                  x1: "72.3398",
                  y1: "1.21667",
                  x2: "74.7929",
                  y2: "1.21667",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint9_linear_1521_51082",
                  x1: "13.3486",
                  y1: "34.3352",
                  x2: "17.4625",
                  y2: "34.3352",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint10_linear_1521_51082",
                  x1: "74.4932",
                  y1: "40.3635",
                  x2: "78.607",
                  y2: "40.3635",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint11_linear_1521_51082",
                  x1: "17.4795",
                  y1: "35.8773",
                  x2: "19.9325",
                  y2: "35.8773",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsxs)("linearGradient", {
                  id: "paint12_linear_1521_51082",
                  x1: "78.625",
                  y1: "41.9056",
                  x2: "81.078",
                  y2: "41.9056",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, i.jsx)("clipPath", {
                  id: "clip0_1521_51082",
                  children: (0, i.jsx)("rect", {
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
    973007: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(481060),
        s = n(184508),
        r = n(823188),
        C = n(474936),
        a = n(385190);
      function o(e) {
        let {
          onClick: t,
          isGift: n,
          priceOptions: s,
          showHalloweenGift: C,
          shouldUseTaglineXPCopy: o,
        } = e;
        return (0, i.jsx)(l.Clickable, {
          onClick: t,
          style: { cursor: "pointer" },
          children: (0, i.jsx)(r.wp, {
            className: a.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !C && !o,
            showHalloweenGift: C,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: s,
            shouldUseTaglineXPCopy: o,
          }),
        });
      }
      function d(e) {
        let {
          onClick: t,
          isGift: n,
          priceOptions: s,
          shouldUseTaglineXPCopy: C,
        } = e;
        return (0, i.jsx)(l.Clickable, {
          onClick: t,
          style: { cursor: "pointer" },
          children: (0, i.jsx)(r.Gq, {
            className: a.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !C,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: s,
            shouldUseTaglineXPCopy: C,
          }),
        });
      }
      t.Z = function (e) {
        let {
            onSelectSku: t,
            isGift: n,
            priceOptions: l,
            shouldShowHalloweenTier2Card: r,
          } = e,
          a = (0, s.tY)("PremiumMarketingHome");
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(o, {
              onClick: () => t(C.Si.TIER_2),
              isGift: n,
              priceOptions: l,
              showHalloweenGift: r,
              shouldUseTaglineXPCopy: a,
            }),
            (0, i.jsx)(d, {
              onClick: () => t(C.Si.TIER_0),
              isGift: n,
              priceOptions: l,
              shouldUseTaglineXPCopy: a,
            }),
          ],
        });
      };
    },
    317269: function (e, t, n) {
      n.d(t, {
        TB: function () {
          return S;
        },
        VY: function () {
          return y;
        },
        ZP: function () {
          return E;
        },
      }),
        n(47120),
        n(411104);
      var i = n(200651),
        l = n(192379),
        s = n(512722),
        r = n.n(s),
        C = n(442837),
        a = n(481060),
        o = n(16084),
        d = n(987209),
        u = n(179118),
        c = n(912788),
        p = n(509545),
        x = n(55563),
        h = n(74538),
        _ = n(741245),
        f = n(474936),
        j = n(981631),
        L = n(388032),
        m = n(359459);
      function g(e) {
        var t, n;
        let l,
          {
            planId: s,
            startingPremiumSubscriptionPlanId: a,
            paymentSourceType: o,
          } = e,
          [d, u] = (0, C.Wu)([p.Z], () => [p.Z.get(a), p.Z.get(s)]);
        if (
          (r()(null != d && null != u, "Missing startingPlan or newPlan"),
          (t = a),
          (n = s),
          f.Y1.indexOf(t) < f.Y1.indexOf(n))
        )
          switch (s) {
            case f.Xh.PREMIUM_MONTH_TIER_1:
              (l = L.intl.string(L.t.knvOV1)),
                j.X7u.has(null != o ? o : j.HeQ.UNKNOWN) &&
                  (l = L.intl.format(L.t.o6hBiY, {}));
              break;
            case f.Xh.PREMIUM_MONTH_TIER_2:
              (l = L.intl.string(L.t.f8Dqur)),
                j.X7u.has(null != o ? o : j.HeQ.UNKNOWN) &&
                  (l = L.intl.format(L.t.A4THYm, {}));
              break;
            case f.Xh.PREMIUM_YEAR_TIER_1:
              (l = L.intl.string(L.t.YZd5r6)),
                j.X7u.has(null != o ? o : j.HeQ.UNKNOWN) &&
                  (l = L.intl.format(L.t.MHAxpK, {}));
              break;
            case f.Xh.PREMIUM_YEAR_TIER_2:
              (l = L.intl.formatToPlainString(L.t["M/Lknp"], {
                numFreeGuildSubscriptions: f.cb,
              })),
                j.X7u.has(null != o ? o : j.HeQ.UNKNOWN) &&
                  (l = L.intl.format(L.t.mULxLS, {
                    numFreeGuildSubscriptions: f.cb,
                  }));
              break;
            case f.Xh.PREMIUM_3_MONTH_TIER_2:
            case f.Xh.PREMIUM_6_MONTH_TIER_2:
              l = L.intl.string(L.t.aaCoW1);
              break;
            case f.Xh.PREMIUM_MONTH_TIER_0:
            case f.Xh.PREMIUM_YEAR_TIER_0:
              l = L.intl.string(L.t["XEoQ7+"]);
              break;
            default:
              throw Error("Unexpected planId: ".concat(s));
          }
        else if (d.skuId === f.Si.TIER_2 && u.skuId === f.Si.TIER_1)
          l = L.intl.string(L.t.PNX4ND);
        else
          switch (u.skuId) {
            case f.Si.TIER_0:
              l = L.intl.string(L.t["XEoQ7+"]);
              break;
            case f.Si.TIER_1:
              l = L.intl.string(L.t.nLI1Ki);
              break;
            case f.Si.TIER_2:
              l =
                1 !== d.intervalCount
                  ? L.intl.string(L.t.qSZZVF)
                  : L.intl.string(L.t.RNjcNj);
              break;
            default:
              throw Error("Unexpected skuId: ".concat(u.skuId));
          }
        return (0, i.jsx)("div", { className: m.text, children: l });
      }
      function E(e) {
        let t,
          n,
          {
            planId: s,
            enableNoPaymentTrial: d,
            startingPremiumSubscriptionPlanId: u,
            onClose: c,
            followupSKUInfo: E,
            isDowngrade: S,
            hideClose: y,
            postSuccessGuild: M,
            paymentSourceType: Z,
          } = e,
          { theme: P } = (0, a.useThemeContext)(),
          T = (0, C.e7)([x.Z], () => (null != E ? x.Z.get(E.id) : null));
        l.useEffect(() => {
          if (null == E || null != T) return;
          let { applicationId: e, id: t } = E;
          (0, o.$N)(e, t).catch(j.VqG);
        }, [E, T]);
        let I = (e) => {
          if (e.skuId === f.Si.TIER_0)
            return j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN)
              ? L.intl.format(L.t.o6hBiY, {})
              : L.intl.string(L.t["AGf/yc"]);
          if (e.skuId === f.Si.TIER_1)
            return j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN)
              ? L.intl.format(L.t.o6hBiY, {})
              : L.intl.string(L.t.knvOV1);
          return j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN)
            ? L.intl.format(L.t.A4THYm, {})
            : d
              ? L.intl.string(L.t["g52y/v"])
              : L.intl.string(L.t.aTUr3d);
        };
        if (null != T)
          t = (0, i.jsx)("div", {
            className: m.text,
            children: L.intl.format(L.t.tsQOs7, { skuName: T.name }),
          });
        else if (null != u)
          t = (0, i.jsx)(g, {
            planId: s,
            startingPremiumSubscriptionPlanId: u,
          });
        else if (null != M) {
          let e = p.Z.get(s);
          r()(null != e, "Missing plan"),
            (t = (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", { className: m.text, children: I(e) }),
                (0, i.jsx)("div", {
                  className: m.text,
                  children: L.intl.format(L.t["6aZ0NT"], { guildName: M.name }),
                }),
              ],
            }));
        } else {
          let e = p.Z.get(s);
          r()(null != e, "Missing plan"),
            (t = (0, i.jsx)("div", { className: m.text, children: I(e) }));
        }
        let U = h.ZP.getPremiumType(s);
        return (
          r()(
            null != U,
            "premium type should not be null in purchase confirmation",
          ),
          (n =
            null != T
              ? L.intl.formatToPlainString(L.t["1qGgm5"], { skuName: T.name })
              : S
                ? L.intl.string(L.t.QJ9EyM)
                : null != M
                  ? L.intl.string(L.t.ta3cXV)
                  : L.intl.string(L.t.TkTvBw)),
          (0, i.jsxs)("div", {
            className: m.confirmation,
            children: [
              (0, i.jsx)(_.C, {
                className: m.banner,
                theme: P,
                premiumType: U,
                type: j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN)
                  ? _.C.Types.PREMIUM_PAYMENT_STARTED
                  : null != u
                    ? _.C.Types.PREMIUM_UPDATED
                    : _.C.Types.PREMIUM_ACTIVATED,
              }),
              t,
              y ? null : (0, i.jsx)(a.Button, { onClick: c, children: n }),
            ],
          })
        );
      }
      function S(e) {
        let { planId: t, onClose: n, halloweenDecoPurchase: l } = e,
          {
            giftRecipient: s,
            selectedGiftStyle: a,
            hasSentMessage: o,
            giftMessageError: x,
            isSendingMessage: h,
          } = (0, d.wD)(),
          _ = (0, C.e7)([p.Z], () => p.Z.get(t));
        r()(null != _, "Missing plan");
        let f = (0, C.e7)([c.Z], () => c.Z.getGiftCode(_.skuId));
        return (0, i.jsx)(u.Z, {
          giftCode: f,
          subscriptionPlan: _,
          onClose: n,
          selectedGiftStyle: a,
          hasSentMessage: o,
          giftRecipient: s,
          giftMessageError: x,
          isSendingMessage: h,
          halloweenDecoPurchase: l,
        });
      }
      function y() {
        return (0, i.jsxs)("div", {
          className: m.redirectConfirmation,
          children: [
            (0, i.jsx)(a.Heading, {
              variant: "heading-xl/bold",
              children: L.intl.string(L.t.Xtf9wM),
            }),
            (0, i.jsxs)("div", {
              className: m.redirectBody,
              children: [
                (0, i.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: L.intl.string(L.t.bIVRSU),
                }),
                (0, i.jsx)("br", {}),
                (0, i.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: L.intl.string(L.t["0UJqOz"]),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=e625bacaa79038a54b81.js.map
