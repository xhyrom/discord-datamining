"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54433"],
  {
    196839: function (e) {
      e.exports = "/assets/9fb774a376c1968894b5.svg";
    },
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
        let {
          product: t,
          analyticsLocations: s,
          title: r,
          description: a,
          shouldShowPromotionalExperience: o,
        } = e;
        (0, l.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            n.e("87624"),
            n.e("56604"),
          ]).then(n.bind(n, 331042));
          return (n) =>
            (0, i.jsx)(e, {
              product: t,
              analyticsLocations: s,
              title: r,
              description: a,
              shouldShowPromotionalExperience: o,
              ...n,
            });
        });
      };
    },
    400981: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        s = n(481060),
        r = n(607070),
        a = n(906732),
        o = n(821982),
        C = n(832149),
        d = n(600164),
        u = n(286961),
        c = n(594174),
        p = n(614277),
        x = n(648102);
      function h(e) {
        let {
            onClose: t,
            selectedPromotionalDecoPurchaseRecord: n,
            selectedGiftingPromotionReward: h,
          } = e,
          f = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
          _ = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
          { analyticsLocations: j } = (0, a.ZP)(),
          m = s.AvatarSizes.SIZE_32,
          L = (0, o.Z)(null == h ? void 0 : h.assetId, m, !_),
          g = (0, u.Z)(),
          E = null == g ? void 0 : g.giftPurchaseConfirmation;
        return null == n || null == E
          ? null
          : (0, i.jsx)(p.O3, {
              children: (0, i.jsx)(s.ModalFooter, {
                align: d.Z.Align.CENTER,
                children: (0, i.jsxs)("div", {
                  className: x.promotionalFooter,
                  children: [
                    (0, i.jsx)(s.AnimatedAvatar, {
                      "aria-label": null == f ? void 0 : f.username,
                      size: m,
                      src:
                        null == f
                          ? void 0
                          : f.getAvatarURL(void 0, (0, s.getAvatarSize)(m), !_),
                      avatarDecoration: L,
                    }),
                    (0, i.jsx)(s.Button, {
                      onClick: () => {
                        t(),
                          (0, C.Z)({
                            product: n,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: j,
                          });
                      },
                      children: E.collectRewardButtonText(),
                    }),
                  ],
                }),
              }),
            });
      }
    },
    92594: function (e, t, n) {
      n.d(t, {
        t: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(570140),
        r = n(366939),
        a = n(16084),
        o = n(128069),
        C = n(643939),
        d = n(45595),
        u = n(823188),
        c = n(563132),
        p = n(474936),
        x = n(388032),
        h = n(988113);
      function f() {
        let {
            purchaseError: e,
            paymentError: t,
            setPurchaseError: n,
            selectedSkuId: f,
            selectedPlan: _,
            setSelectedSkuId: j,
            setSelectedPlanId: m,
            setSelectedPlanNotification: L,
          } = (0, c.usePaymentContext)(),
          [g, E] = l.useState(!1),
          [S, I] = l.useState(!1),
          [M, v] = l.useState(!1);
        return (
          l.useEffect(() => {
            let n = setTimeout(() => {
              if (f === p.Si.TIER_2)
                ((null == e ? void 0 : e.code) ===
                  o.SM.BILLING_INSUFFICIENT_FUNDS ||
                  (null == t ? void 0 : t.code) ===
                    o.SM.BILLING_INSUFFICIENT_FUNDS) &&
                  v(!0);
            }, 1500);
            return () => clearTimeout(n);
          }, [t, e, f, v]),
          (0, i.jsxs)("div", {
            className: h.upsellContainer,
            hidden: S,
            children: [
              (0, i.jsx)(d.H, {}),
              (0, i.jsx)(d.Z, {
                show: M,
                children: (0, i.jsx)(C.L, {
                  message: x.intl.format(x.t.dk8zl5, {
                    perkHover: (e, t) =>
                      (0, i.jsx)(
                        "span",
                        {
                          onMouseEnter: () => E(!0),
                          onMouseLeave: () => E(!1),
                          children: e,
                        },
                        "post-failure-nitro-basic-upsell-perk-hover",
                      ),
                  }),
                  handleClick: () => {
                    n(null),
                      s.Z.wait(a.pB),
                      s.Z.wait(r.fw),
                      L(x.intl.string(x.t["/5p4ws"])),
                      j(p.Si.TIER_0);
                    let e = p.Xh.PREMIUM_MONTH_TIER_0;
                    (null == _ ? void 0 : _.id) === p.Xh.PREMIUM_YEAR_TIER_2 &&
                      (e = p.Xh.PREMIUM_YEAR_TIER_0),
                      m(e),
                      I(!0);
                  },
                  handleClose: () => I(!0),
                  handleImageClick: () => {},
                  buttonText: x.intl.string(x.t["7aa9vr"]),
                  useInitialGlow: !0,
                  useGlowOnHover: !0,
                  upsellType: "post-failure-nitro-basic-upsell",
                  themeOverride: C.T.NITRO_BASIC,
                }),
              }),
              g &&
                (0, i.jsxs)("div", {
                  className: h.tooltip,
                  children: [
                    (0, i.jsx)(u.lq, {
                      className: h.tier0Card,
                      showWumpus: !0,
                      showYearlyPrice: !0,
                    }),
                    (0, i.jsx)("div", { className: h.tooltipTail }),
                  ],
                }),
            ],
          })
        );
      }
    },
    293858: function (e, t, n) {
      n.d(t, {
        b: function () {
          return L;
        },
      });
      var i = n(200651),
        l = n(192379),
        s = n(512722),
        r = n.n(s),
        a = n(605236),
        o = n(881602),
        C = n(717401),
        d = n(286961),
        u = n(317269),
        c = n(669079),
        p = n(296848),
        x = n(987209),
        h = n(563132),
        f = n(614277),
        _ = n(400981),
        j = n(698708),
        m = n(921944);
      function L(e) {
        var t, n;
        let s,
          {
            handleClose: L,
            planGroup: g,
            onSubscriptionConfirmation: E,
            renderPurchaseConfirmation: S,
            postSuccessGuild: I,
            followupSKUInfo: M,
            continueSessionToInitialStep: v,
          } = e,
          {
            activeSubscription: y,
            paymentSources: T,
            paymentSourceId: N,
            selectedPlan: P,
            selectedSkuId: Z,
            step: A,
            updatedSubscription: U,
            startingPremiumSubscriptionPlanIdRef: O,
          } = (0, h.usePaymentContext)(),
          {
            isGift: k,
            giftRecipient: R,
            giftCode: b,
            hasSentMessage: w,
            isSendingMessage: H,
            sendGiftMessage: B,
            claimableRewards: F,
            selectedGiftingPromotionReward: G,
          } = (0, x.wD)(),
          D = (0, C.id)(P, k, F),
          W = (0, d.Z)(),
          Y = (0, C.a5)(P),
          K = (0, C.tK)(null == G ? void 0 : G.skuId),
          V = k && null != G && Y;
        r()(null != P, "Expected plan to selected"),
          r()(null != Z, "Expected selectedSkuId"),
          r()(null != A, "Step should be set");
        let X = l.useCallback(() => {
          L(), null == E || E();
        }, [L, E]);
        return (
          l.useEffect(() => {
            if (!(!k || null == R || null == b || w || H || (0, c.pO)(R)))
              o.F.getCurrentConfig({ location: "36b986_1" }).enabled &&
                B({ onSubscriptionConfirmation: E });
          }, [B, k, R, b, w, H, E]),
          l.useEffect(() => {
            null != W &&
              null != W.reminderNotice &&
              D &&
              (0, a.wH)(
                W.reminderNotice.dismissibleContent,
                W.dismissibleContentVersion,
                { dismissAction: m.L.INDIRECT_ACTION },
              );
          }, [W, D]),
          (s =
            null != S
              ? S(P, X, U)
              : null != v
                ? (0, i.jsx)(u.VY, {})
                : k
                  ? (0, i.jsx)(u.TB, { planId: P.id, onClose: X })
                  : O.current === P.id
                    ? (0, i.jsx)(u.ZP, {
                        planId: P.id,
                        postSuccessGuild: I,
                        onClose: X,
                        paymentSourceType:
                          null === (t = T[null != N ? N : ""]) || void 0 === t
                            ? void 0
                            : t.type,
                      })
                    : (0, i.jsx)(u.ZP, {
                        followupSKUInfo: M,
                        startingPremiumSubscriptionPlanId: O.current,
                        planId: P.id,
                        onClose: X,
                        isDowngrade: null != y && (0, p.GY)(y, P.id, g),
                        paymentSourceType:
                          null === (n = T[null != N ? N : ""]) || void 0 === n
                            ? void 0
                            : n.type,
                      })),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(f.C3, { children: [(0, i.jsx)(j.Z, {}), s] }),
              V &&
                null != K &&
                (0, i.jsx)(_.Z, {
                  onClose: X,
                  selectedPromotionalDecoPurchaseRecord: K,
                  selectedGiftingPromotionReward: G,
                }),
            ],
          })
        );
      }
    },
    183813: function (e, t, n) {
      n.d(t, {
        S: function () {
          return g;
        },
      });
      var i = n(200651),
        l = n(192379),
        s = n(512722),
        r = n.n(s),
        a = n(442837),
        o = n(481060),
        C = n(204418),
        d = n(628952),
        u = n(314404),
        c = n(594174),
        p = n(626135),
        x = n(987209),
        h = n(563132),
        f = n(409813),
        _ = n(614277),
        j = n(981631),
        m = n(388032),
        L = n(732721);
      function g(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            selectedPlan: s,
            selectedSkuId: g,
            step: E,
          } = (0, h.usePaymentContext)(),
          {
            setSelectedGiftingPromotionReward: S,
            selectedGiftingPromotionReward: I,
            claimableRewards: M,
          } = (0, x.wD)(),
          v = (0, a.e7)([c.default], () => c.default.getCurrentUser());
        l.useEffect(() => {
          let e = null != M && M.length > 0;
          null == I && e && S(M[0]);
        }, [M, I, S]);
        let y = (e) => {
          let t = e.skuId;
          return (0, i.jsx)(
            d.Z,
            {
              skuId: t,
              price: m.intl.string(m.t.QQsaCQ),
              isSelected: t === (null == I ? void 0 : I.skuId),
              onSelect: () => S(e),
              className: L.giftSelectItem,
            },
            t,
          );
        };
        return (
          r()(null != s, "Expected plan to selected"),
          r()(null != g, "Expected selectedSkuId"),
          r()(null != E, "Step should be set"),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: L.stepBodySkuSelect,
                children: [
                  (0, i.jsxs)("div", {
                    className: L.bodyColumnLeft,
                    children: [
                      (0, i.jsx)("div", {
                        className: L.header,
                        children: (0, i.jsx)(o.Heading, {
                          variant: "heading-lg/bold",
                          color: "header-primary",
                          children: m.intl.string(m.t["Rp0+ZG"]),
                        }),
                      }),
                      null == M ? void 0 : M.map((e) => y(e)),
                    ],
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                    onClick: n,
                    className: L.closeButton,
                  }),
                  (0, i.jsx)("div", {
                    className: L.bodyColumnRight,
                    children:
                      null != I &&
                      null != v &&
                      (0, i.jsx)(C.Z, {
                        avatarDecorationOverride: { asset: I.assetId },
                        user: v,
                        guildId: null,
                        avatarSize: o.AvatarSizes.SIZE_152,
                      }),
                  }),
                ],
              }),
              (0, i.jsx)(_.O3, {
                children: (0, i.jsx)(o.ModalFooter, {
                  className: L.modalFooter,
                  children: (0, i.jsx)(u.y, {
                    onStepChange: (e) => {
                      null != v &&
                        null != I &&
                        p.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                          user_id: v.id,
                          reward_sku_id: I.skuId,
                        }),
                        t(e);
                    },
                    onBackClick: () => t(f.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [s.id],
                    selectedPlanId: s.id,
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    7305: function (e, t, n) {
      n.r(t),
        n.d(t, {
          PremiumPaymentModal: function () {
            return R;
          },
          STEPS: function () {
            return H;
          },
          default: function () {
            return B;
          },
        }),
        n(411104),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(442837),
        r = n(570140),
        a = n(821849),
        o = n(100527),
        C = n(906732),
        d = n(717401),
        u = n(509545),
        c = n(78839),
        p = n(669079),
        x = n(987209),
        h = n(563132),
        f = n(409813),
        _ = n(791785),
        j = n(276442),
        m = n(793541),
        L = n(380898),
        g = n(710094),
        E = n(213264),
        S = n(92594),
        I = n(293858),
        M = n(183813),
        v = n(614223),
        y = n(174827),
        T = n(846464),
        N = n(184160),
        P = n(48175),
        Z = n(981631),
        A = n(474936),
        U = n(388032),
        O = n(809186);
      let k = [
        f.h8.PLAN_SELECT,
        f.h8.ADD_PAYMENT_STEPS,
        f.h8.REVIEW,
        f.h8.CONFIRM,
      ];
      function R(e) {
        let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: j,
            onClose: m,
            trialId: L,
            trialFooterMessageOverride: g,
            reviewWarningMessage: E,
            openInvoiceId: S,
            onSubscriptionConfirmation: I,
            renderPurchaseConfirmation: M,
            postSuccessGuild: v,
            followupSKUInfo: y,
            renderHeader: T,
            applicationId: N,
            guildId: P,
            referralTrialOfferId: U,
            skuId: O,
            returnRef: k,
            skipConfirm: R = !1,
            continueSessionToInitialStep: b,
          } = e,
          { analyticsLocations: w } = (0, C.ZP)();
        l.useEffect(() => {
          !u.Z.isLoadedForPremiumSKUs() && r.Z.wait(() => (0, a.Y2)());
        }, []);
        let { step: H } = (0, h.usePaymentContext)(),
          { isGift: B, giftMessage: F, giftRecipient: G } = (0, x.wD)(),
          D = B && (0, p.pO)(G) && H === f.h8.PLAN_SELECT;
        return (0, i.jsx)(_.PaymentModal, {
          analyticsLocations: w,
          analyticsLocation: t,
          analyticsObject: n,
          analyticsSourceLocation: s,
          analyticsSubscriptionType: Z.NYc.PREMIUM,
          onComplete: o,
          transitionState: d,
          initialPlanId: c,
          giftMessage: F,
          subscriptionTier: j,
          onClose: m,
          trialId: L,
          isGift: B,
          trialFooterMessageOverride: g,
          reviewWarningMessage: E,
          planGroup: A.Y1,
          openInvoiceId: S,
          onSubscriptionConfirmation: I,
          renderPurchaseConfirmation: M,
          postSuccessGuild: v,
          followupSKUInfo: y,
          renderHeader: T,
          applicationId: N,
          guildId: P,
          referralTrialOfferId: U,
          skuId: O,
          shakeWhilePurchasing: !0,
          isLargeModal: D,
          returnRef: k,
          skipConfirm: R,
          continueSessionToInitialStep: b,
        });
      }
      function b(e) {
        let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } =
            (0, h.usePaymentContext)(),
          { isGift: i } = (0, x.wD)();
        return (0, v.Kp)({
          isTrial: null != e && e,
          isGift: i,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: t.current,
        });
      }
      function w(e) {
        let {
            initialPlanId: t,
            handleStepChange: n,
            referralTrialOfferId: l,
          } = e,
          {
            paymentSources: s,
            selectedSkuId: r,
            selectedPlan: a,
          } = (0, h.usePaymentContext)(),
          { isGift: o, claimableRewards: C } = (0, x.wD)(),
          u = b((0, P.Z)({ isGift: o, skuId: r, referralTrialOfferId: l })),
          c = (0, d.id)(a, o, C);
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(j.J, {
            ...e,
            breadcrumbSteps: k,
            onReturn: () => {
              let e = Object.values(s),
                i = e.length < 1 && null == t ? f.h8.PLAN_SELECT : f.h8.REVIEW;
              u && (i = f.h8.REVIEW),
                c && e.length < 1 && (i = f.h8.SELECT_FREE_SKU),
                n(i, { trackedFromStep: f.h8.PAYMENT_TYPE });
            },
          }),
        });
      }
      let H = [
        {
          key: null,
          renderStep: (e) => (0, i.jsx)(_.PaymentPredicateStep, { ...e }),
        },
        {
          key: f.h8.SKU_SELECT,
          renderStep: (e) => (0, i.jsx)(T.q, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: f.h8.WHAT_YOU_LOSE,
          renderStep: (e) => (0, i.jsx)(N.x, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: f.h8.PLAN_SELECT,
          renderStep: (e) => (0, i.jsx)(y.x, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              b(e) ? null : U.intl.string(U.t["r+SebW"]),
          },
        },
        {
          key: f.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(w, { ...e }) }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              b(e) ? null : U.intl.string(U.t.Sb6wIy),
          },
        },
        {
          key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(L.Z, {}),
        },
        {
          key: f.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(m.Z, {}),
        },
        {
          key: f.h8.REVIEW,
          renderStep: (e) => (0, i.jsx)(g.l, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              b(e) ? U.intl.string(U.t.UKbp1N) : U.intl.string(U.t.QBnNHh),
          },
        },
        { key: f.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(I.b, { ...e }) },
        {
          key: f.h8.SELECT_FREE_SKU,
          renderStep: (e) => (0, i.jsx)(M.S, { ...e }),
          options: { bodyClassName: O.selectFreeSku, isDynamicModal: !0 },
        },
      ];
      function B(e) {
        let t = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: n } = (0, C.ZP)(
            e.analyticsLocations,
            o.Z.PREMIUM_PAYMENT_MODAL,
          ),
          l = (0, E.s)("premiumPaymentModal"),
          {
            subscriptionTier: r,
            isGift: a,
            giftRecipient: d,
            giftMessage: u,
            giftStyle: p,
            giftingOrigin: f,
            loadId: _,
            defaultPlanId: j,
            referralCode: m,
            repeatPurchase: L,
          } = e;
        if (null != r && !Object.values(A.Si).includes(r))
          throw Error("subscriptionTier must be a premium subscription");
        return (0, i.jsx)(C.Gt, {
          value: n,
          children: (0, i.jsx)(h.PaymentContextProvider, {
            loadId: _,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H,
            skuIDs: [...A.YQ],
            isGift: a,
            defaultPlanId: j,
            referralCode: m,
            repeatPurchase: L,
            children: (0, i.jsxs)(x.KB, {
              isGift: a,
              giftRecipient: null == d ? void 0 : d,
              giftMessage: u,
              giftStyle: p,
              giftingOrigin: f,
              children: [(0, i.jsx)(R, { ...e }), l && (0, i.jsx)(S.t, {})],
            }),
          }),
        });
      }
    },
    174827: function (e, t, n) {
      n.d(t, {
        x: function () {
          return B;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(512722),
        r = n.n(s),
        a = n(399606),
        o = n(481060),
        C = n(975608),
        d = n(600164),
        u = n(711459),
        c = n(374649),
        p = n(650032),
        x = n(439017),
        h = n(717401),
        f = n(572517),
        _ = n(104494),
        j = n(639119),
        m = n(642530),
        L = n(381507),
        g = n(314404),
        E = n(594174),
        S = n(509545),
        I = n(669079),
        M = n(63063),
        v = n(74538),
        y = n(987209),
        T = n(563132),
        N = n(409813),
        P = n(51499),
        Z = n(456251),
        A = n(614277),
        U = n(809144),
        O = n(698708),
        k = n(844068),
        R = n(981631),
        b = n(474936),
        w = n(388032),
        H = n(242582);
      function B(e) {
        var t, n, s;
        let {
            handleStepChange: B,
            initialPlanId: F,
            subscriptionTier: G,
            trialId: D,
            referralTrialOfferId: W,
            handleClose: Y,
          } = e,
          {
            activeSubscription: K,
            hasFetchedSubscriptions: V,
            paymentSourceId: X,
            paymentSources: Q,
            selectedSkuId: z,
            selectedPlan: q,
            step: J,
            defaultPlanId: $,
            priceOptions: ee,
            isPremium: et,
          } = (0, T.usePaymentContext)(),
          {
            isGift: en,
            giftRecipient: ei,
            giftMessage: el,
            claimableRewards: es,
          } = (0, y.wD)(),
          er = (0, h.a5)(q),
          ea = en && er && null != es && es.length > 0,
          eo = null != X ? Q[X] : null,
          { newPlans: eC } = u.ZP.useExperiment(
            { location: "d17fd6_3" },
            { autoTrackExposure: !1 },
          ),
          ed = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
          eu =
            !en &&
            null != z &&
            z === b.Si.TIER_2 &&
            null != ed &&
            ed.hasHadPremium() &&
            V &&
            null == K &&
            (0, u.aQ)(eo),
          ec = (0, j.N)(W),
          ep =
            !en &&
            null != ec &&
            null != z &&
            b.nG[ec.trial_id].skus.includes(z),
          ex = (0, _.Ng)(),
          eh =
            null == ex
              ? void 0
              : null === (t = ex.discount) || void 0 === t
                ? void 0
                : t.plan_ids.some((e) => b.GP[e].skuId === z),
          ef = !en && null != ex && null != z && eh,
          e_ = null !== (n = ep || ef) && void 0 !== n && n,
          { defaultToMonthlyPlan: ej } = x.k.useExperiment(
            { location: "d17fd6_4" },
            { autoTrackExposure: !1 },
          ),
          em = l.useMemo(
            () =>
              (0, v.V7)({
                skuId: z,
                isPremium: et,
                multiMonthPlans: eu ? eC : [],
                currentSubscription: K,
                isGift: en,
                isEligibleForTrial: ep,
                defaultPlanId: $,
                defaultToMonthlyPlan: ej,
              }),
            [z, et, eC, K, eu, en, ep, $, ej],
          ),
          eL =
            ef && em.includes(b.Xh.PREMIUM_MONTH_TIER_2)
              ? b.Xh.PREMIUM_MONTH_TIER_2
              : em[0],
          eg = (0, a.e7)([S.Z], () => S.Z.get(eL)),
          eE = [{ planId: null == eg ? void 0 : eg.id, quantity: 1 }],
          [eS, eI] = l.useState(e_),
          [eM, ev] = (0, c.ED)({
            items: eE,
            renewal: !1,
            preventFetch: !e_,
            applyEntitlements: !0,
            trialId: D,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
          });
        l.useEffect(() => {
          e_ && eI((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
        }, [eM, e_]),
          (0, C.Z)(
            "Payment Modal Plan Select Step",
            eS,
            5,
            {
              proratedInvoicePreview: eM,
              proratedInvoiceError: ev,
              isEligibleForOffer: e_,
            },
            { tags: { app_context: "billing" } },
          );
        let ey =
            null !== (s = null == ev ? void 0 : ev.message) && void 0 !== s
              ? s
              : w.intl.string(w.t.R0RpRU),
          eT = e_ && null == ev,
          eN = e_ && null != ev,
          eP =
            eT &&
            null == K &&
            !!e_ &&
            (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
          { enabled: eZ } = p._.useExperiment(
            { location: "PremiumPaymentPlanSelectStep" },
            { autoTrackExposure: !1 },
          ),
          eA =
            !en &&
            (null == eg ? void 0 : eg.skuId) === b.Si.TIER_2 &&
            (null == ec ? void 0 : ec.referrer_id) != null &&
            eZ,
          eU = null;
        return ((eU = eA ? (0, i.jsx)(L.Z, {}) : (0, i.jsx)(m.Z, {})), eP)
          ? (0, i.jsx)(Z.Z, {})
          : (r()(null != J, "Step should be set"),
            r()(em.length > 0, "Premium plan options should be set"),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(U.P, { giftMessage: el }),
                !(en && (0, I.pO)(ei)) &&
                  (0, i.jsx)(P.Z, { isEligibleForTrial: ep }),
                (0, i.jsxs)(A.C3, {
                  children: [
                    eT &&
                      (0, i.jsx)("hr", {
                        className: H.planSelectSeparatorUpper,
                      }),
                    eU,
                    (0, i.jsx)(k.Z, {}),
                    (0, i.jsx)(O.Z, {}),
                    eN
                      ? (0, i.jsx)(o.FormErrorBlock, { children: ey })
                      : (0, i.jsx)(g.O, {
                          planOptions: em,
                          eligibleForMultiMonthPlans: eu,
                          referralTrialOfferId: W,
                          selectedPlanId: null == q ? void 0 : q.id,
                          subscriptionPeriodEnd:
                            null == eM ? void 0 : eM.subscriptionPeriodEnd,
                          discountInvoiceItems: ef
                            ? null == eM
                              ? void 0
                              : eM.invoiceItems
                            : void 0,
                          handleClose: Y,
                        }),
                    eT &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("hr", {
                            className: H.planSelectSeparatorLower,
                          }),
                          (0, i.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children: w.intl.format(w.t.BHtnqK, {
                              link: M.Z.getArticleURL(
                                R.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                              ),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, i.jsxs)(A.O3, {
                  children: [
                    ea && (0, i.jsx)(f.c, {}),
                    (0, i.jsx)(o.ModalFooter, {
                      justify: d.Z.Justify.BETWEEN,
                      align: d.Z.Align.CENTER,
                      children: (0, i.jsx)(g.y, {
                        onStepChange: B,
                        onBackClick: () => B(N.h8.SKU_SELECT),
                        showBackButton: null == F && null == G,
                        planOptions: em,
                        shouldRenderUpdatedPaymentModal: eT,
                        isTrial: ep,
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
          return L;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        s = n.n(l),
        r = n(481060),
        a = n(140465),
        o = n(639119),
        C = n(55610),
        d = n(973007),
        u = n(74538),
        c = n(987209),
        p = n(563132),
        x = n(409813),
        h = n(614223),
        f = n(48175),
        _ = n(474936),
        j = n(388032),
        m = n(82227);
      function L(e) {
        let {
            handleStepChange: t,
            handleClose: n,
            referralTrialOfferId: l,
          } = e,
          {
            setSelectedSkuId: s,
            activeSubscription: r,
            startedPaymentFlowWithPaymentSourcesRef: C,
            setSelectedPlanId: d,
            priceOptions: j,
          } = (0, p.usePaymentContext)(),
          { isGift: m, claimableRewards: L } = (0, c.wD)(),
          E = m && null != L && L.length > 0,
          S = (0, o.N)(l),
          I = (0, a.Nx)();
        return (0, i.jsx)(g, {
          selectSku: (e) =>
            (function (e) {
              let {
                activeSubscription: t,
                newSkuId: n,
                setSelectedSkuId: i,
                handleStepChange: l,
                isGift: s,
                userTrialOffer: r,
                setSelectedPlanId: a,
                startedPaymentFlowWithPaymentSources: o,
              } = e;
              i(n);
              let C = x.h8.PLAN_SELECT,
                d = (0, u.k5)(t);
              (d === _.Si.TIER_1 || d === _.Si.TIER_2) &&
                n === _.Si.TIER_0 &&
                !s &&
                (C = x.h8.WHAT_YOU_LOSE);
              let c = (0, f.T)({ userTrialOffer: r, isGift: s, skuId: n }),
                p = (0, h.Kp)({
                  isTrial: c,
                  isGift: s,
                  selectedSkuId: n,
                  startedPaymentFlowWithPaymentSources: o,
                });
              C !== x.h8.WHAT_YOU_LOSE &&
                p &&
                ((C = x.h8.REVIEW), a((0, h.nA)(n, t))),
                l(C, { analyticsDataOverride: { sku_id: n } });
            })({
              activeSubscription: r,
              newSkuId: e,
              setSelectedSkuId: s,
              handleStepChange: t,
              isGift: m,
              userTrialOffer: S,
              startedPaymentFlowWithPaymentSources: C.current,
              setSelectedPlanId: d,
            }),
          onClose: n,
          isGift: m,
          inOfferExperience: I,
          priceOptions: j,
          showPromotionalGiftBanner: E,
        });
      }
      function g(e) {
        let {
          selectSku: t,
          onClose: n,
          isGift: l,
          inOfferExperience: a,
          priceOptions: o,
          showPromotionalGiftBanner: c,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(r.ModalHeader, {
              className: m.skuSelectModalHeader,
              separator: !1,
              children: [
                (0, i.jsx)(r.FormTitle, {
                  tag: r.FormTitleTags.H4,
                  children: j.intl.string(j.t["r+SebW"]),
                }),
                (0, i.jsx)(r.ModalCloseButton, { onClick: n }),
              ],
            }),
            (0, i.jsxs)(r.ModalContent, {
              className: s()(m.skuSelectModalContent, { [m.modalPadding]: a }),
              children: [
                (0, i.jsx)(C.Z, {
                  fromBoostCancelModal: !1,
                  className: m.legacyPricingNotice,
                }),
                (0, i.jsx)(d.Z, {
                  onSelectSku: (e) => t((0, u.Wz)(e)),
                  isGift: l,
                  priceOptions: o,
                  showPromotionalGiftBanner: c,
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
          return _;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(512722),
        s = n.n(l),
        r = n(780384),
        a = n(481060),
        o = n(410030),
        C = n(807163),
        d = n(74538),
        u = n(987209),
        c = n(563132),
        p = n(409813),
        x = n(614223),
        h = n(388032),
        f = n(475536);
      function _(e) {
        let { handleStepChange: t, handleClose: n } = e,
          l = (0, o.ZP)(),
          {
            activeSubscription: _,
            selectedSkuId: j,
            setSelectedPlanId: m,
            startedPaymentFlowWithPaymentSourcesRef: L,
          } = (0, c.usePaymentContext)(),
          { isGift: g } = (0, u.wD)(),
          E = null != _ ? (0, d.Af)(_) : null,
          S = null != E ? (0, d.gq)(E.planId) : null,
          I = null != E ? (0, d.Rd)(E.planId) : null,
          M = (0, x.Kp)({
            isTrial: !1,
            isGift: g,
            selectedSkuId: j,
            startedPaymentFlowWithPaymentSources: L.current,
          });
        return (
          s()(null != I, "Expected premium type"),
          (0, i.jsx)(C.Z, {
            premiumType: I,
            titleText: h.intl.string(h.t["7VcWW1"]),
            subtitleText: h.intl.format(h.t.Qk34Ii, { subscriptionName: S }),
            footer: (0, i.jsxs)("div", {
              className: f.whatYouLoseButtonContainer,
              children: [
                (0, i.jsx)(a.Button, {
                  onClick: () => {
                    M
                      ? (m((0, x.nA)(j, _)), t(p.h8.REVIEW))
                      : t(p.h8.PLAN_SELECT);
                  },
                  children: h.intl.string(h.t["3PatS0"]),
                }),
                (0, i.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: (0, r.wj)(l)
                    ? a.Button.Colors.WHITE
                    : a.Button.Colors.PRIMARY,
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
    572517: function (e, t, n) {
      n.d(t, {
        c: function () {
          return p;
        },
      });
      var i = n(200651),
        l = n(442837),
        s = n(780384),
        r = n(481060),
        a = n(410030),
        o = n(607070),
        C = n(987209),
        d = n(286961),
        u = n(897942),
        c = n(235665);
      function p() {
        var e;
        let t = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
          n = (0, a.ZP)(),
          p = (0, s.wj)(n),
          x =
            null === (e = (0, d.Z)()) || void 0 === e
              ? void 0
              : e.planSelectionBanner,
          { claimableRewards: h } = (0, C.wD)();
        return null == x || null == h
          ? null
          : (0, i.jsxs)("div", {
              className: c.promotionalFooterBanner,
              children: [
                (0, i.jsx)("div", {
                  className: c.promotionalAvatars,
                  children: (0, i.jsx)(u.Z, {
                    claimableRewards: h,
                    maxRewardImageSrc: x.getImageUrl(p, t),
                    size: r.AvatarSizes.SIZE_32,
                  }),
                }),
                (0, i.jsx)(r.Text, {
                  variant: "text-md/normal",
                  className: c.bannerText,
                  children: x.body(h.length),
                }),
              ],
            });
      }
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
        a = n(431),
        o = n(786397),
        C = n(474936);
      function d() {
        let e = (0, o.w)(C.a7),
          t = (0, l.e7)([a.Z], () =>
            a.Z.getReferrer(null == e ? void 0 : e.trial_id),
          ),
          n = (0, l.e7)([r.Z], () => null == t || r.Z.isBlockedOrIgnored(t.id));
        return i.useMemo(() => (n || null == t ? null : new s.Z(t)), [t, n]);
      }
    },
    643939: function (e, t, n) {
      n.d(t, {
        L: function () {
          return f;
        },
        T: function () {
          return h;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(120356),
        r = n.n(s),
        a = n(481060),
        o = n(626135),
        C = n(981631),
        d = n(388032),
        u = n(304562),
        c = n(196839),
        p = n(680674),
        x = n(74316);
      let h = { NITRO_BASIC: u.nitroBasic },
        f = l.memo(function (e) {
          let {
              message: t,
              handleClick: n,
              handleClose: s,
              buttonText: f,
              useInitialGlow: _,
              useGlowOnHover: j,
              handleImageClick: m,
              className: L,
              analyticsLocations: g,
              upsellType: E,
              themeOverride: S = h.NITRO_BASIC,
            } = e,
            [I, M] = l.useState(_),
            [v, y] = l.useState(p);
          return (
            l.useEffect(() => {
              y(c);
            }, [S]),
            l.useEffect(() => {
              setTimeout(() => M(!1), 3e3);
            }, []),
            l.useEffect(() => {
              o.default.track(C.rMx.POST_ACTION_UPSELL_SHOWN, {
                type: E,
                location: g,
              });
            }, [E, g]),
            (0, i.jsx)("div", {
              className: r()(u.wrapper, S),
              children: (0, i.jsxs)("div", {
                className: r()(
                  u.content,
                  I ? u.initialGlowUp : u.initialGlowDown,
                  j ? u.contentGlow : null,
                  L,
                ),
                children: [
                  (0, i.jsxs)("div", {
                    className: u.innerContent,
                    children: [
                      (0, i.jsx)("div", {
                        className: r()(
                          u.imageWrapper,
                          void 0 !== m ? u.imageHover : null,
                        ),
                        ...(void 0 !== m
                          ? {
                              onClick: () => {
                                o.default.track(
                                  C.rMx
                                    .POST_ACTION_UPSELL_SECONDARY_ACTION_CLICKED,
                                  { type: E, location: g },
                                ),
                                  m();
                              },
                            }
                          : {}),
                        children: (0, i.jsx)("img", {
                          alt: "",
                          className: u.image,
                          src: v,
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: u.heading,
                        children: (0, i.jsx)(a.Heading, {
                          variant: "heading-sm/medium",
                          children: t,
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: u.buttonWrapper,
                    children: (0, i.jsxs)(a.ShinyButton, {
                      className: u.button,
                      innerClassName: u.buttonInner,
                      size: a.Button.Sizes.SMALL,
                      color: a.ButtonColors.CUSTOM,
                      onlyShineOnHover: !0,
                      onClick: () => {
                        o.default.track(
                          C.rMx.POST_ACTION_UPSELL_PRIMARY_ACTION_CLICKED,
                          { type: E, location: g },
                        ),
                          n();
                      },
                      children: [
                        (0, i.jsx)("img", {
                          alt: "",
                          className: u.buttonNitroIcon,
                          src: x,
                        }),
                        f,
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: u.closeButtonWrapper,
                    children: (0, i.jsx)(a.Clickable, {
                      onClick: () => {
                        o.default.track(C.rMx.POST_ACTION_UPSELL_DISMISSED, {
                          type: E,
                          location: g,
                        }),
                          s();
                      },
                      className: u.closeButton,
                      "aria-label": d.intl.string(d.t.cpT0Cg),
                      children: (0, i.jsx)(a.XSmallIcon, {
                        size: "md",
                        color: "currentColor",
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        });
    },
    45595: function (e, t, n) {
      n.d(t, {
        H: function () {
          return c;
        },
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(120356),
        r = n.n(s),
        a = n(995295),
        o = n(772848),
        C = n(110924),
        d = n(626325);
      let u = (0, o.Z)();
      function c() {
        return (0, i.jsx)("div", { id: u, className: d.noticeBar });
      }
      function p(e) {
        let { show: t, children: n } = e,
          [i, s] = l.useState(!1),
          [o, c] = l.useState(!1),
          p = (0, C.Z)(t);
        !t || !1 !== p || i || o
          ? !t && p && !o && !i && (c(!0), setTimeout(() => c(!1), 500))
          : (s(!0), setTimeout(() => s(!1), 500));
        let x = window.document.getElementById(u);
        return null != n && l.isValidElement(n) && null != x && (t || i || o)
          ? a.createPortal(
              l.cloneElement(n, {
                className: r()({ [d.slideIn]: i, [d.slideOut]: o }),
              }),
              x,
            )
          : null;
      }
    },
    381507: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(780384),
        s = n(481060),
        r = n(410030),
        a = n(518950),
        o = n(51144),
        C = n(105759),
        d = n(898969),
        u = n(703614),
        c = n(182294),
        p = n(388032),
        x = n(684315);
      t.Z = () => {
        let e = (0, C.Z)(),
          { avatarSrc: t, eventHandlers: n } = (0, a.Z)({
            user: e,
            size: c.EF.SIZE_32,
            animateOnHover: !0,
          }),
          h = (0, r.Fg)(),
          f = (0, l.ap)(h),
          _ = o.ZP.getName(e),
          j = f ? d.Z : u.Z;
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
                  children: p.intl.format(p.t.oxhCOj, { userName: _ }),
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
        s = n(823188),
        r = n(474936),
        a = n(101098);
      function o(e) {
        let {
          onClick: t,
          isGift: n,
          priceOptions: r,
          showPromotionalGiftBanner: o,
        } = e;
        return (0, i.jsx)(l.Clickable, {
          onClick: t,
          style: { cursor: "pointer" },
          children: (0, i.jsx)(s.wp, {
            className: a.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !o,
            showPromotionalGiftBanner: o,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: r,
          }),
        });
      }
      function C(e) {
        let { onClick: t, isGift: n, priceOptions: r } = e;
        return (0, i.jsx)(l.Clickable, {
          onClick: t,
          style: { cursor: "pointer" },
          children: (0, i.jsx)(s.Gq, {
            className: a.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !0,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: r,
          }),
        });
      }
      t.Z = function (e) {
        let {
          onSelectSku: t,
          isGift: n,
          priceOptions: l,
          showPromotionalGiftBanner: s,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(o, {
              onClick: () => t(r.Si.TIER_2),
              isGift: n,
              priceOptions: l,
              showPromotionalGiftBanner: s,
            }),
            (0, i.jsx)(C, {
              onClick: () => t(r.Si.TIER_0),
              isGift: n,
              priceOptions: l,
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
          return I;
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
        a = n(442837),
        o = n(481060),
        C = n(16084),
        d = n(987209),
        u = n(179118),
        c = n(912788),
        p = n(509545),
        x = n(55563),
        h = n(74538),
        f = n(741245),
        _ = n(474936),
        j = n(981631),
        m = n(388032),
        L = n(307862);
      function g(e) {
        var t, n;
        let l,
          {
            planId: s,
            startingPremiumSubscriptionPlanId: o,
            paymentSourceType: C,
          } = e,
          [d, u] = (0, a.Wu)([p.Z], () => [p.Z.get(o), p.Z.get(s)]);
        if (
          (r()(null != d && null != u, "Missing startingPlan or newPlan"),
          (t = o),
          (n = s),
          _.Y1.indexOf(t) < _.Y1.indexOf(n))
        )
          switch (s) {
            case _.Xh.PREMIUM_MONTH_TIER_1:
              (l = m.intl.string(m.t.knvOV1)),
                j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) &&
                  (l = m.intl.format(m.t.o6hBiY, {}));
              break;
            case _.Xh.PREMIUM_MONTH_TIER_2:
              (l = m.intl.string(m.t.f8Dqur)),
                j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) &&
                  (l = m.intl.format(m.t.A4THYm, {}));
              break;
            case _.Xh.PREMIUM_YEAR_TIER_1:
              (l = m.intl.string(m.t.YZd5r6)),
                j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) &&
                  (l = m.intl.format(m.t.MHAxpK, {}));
              break;
            case _.Xh.PREMIUM_YEAR_TIER_2:
              (l = m.intl.formatToPlainString(m.t["M/Lknp"], {
                numFreeGuildSubscriptions: _.cb,
              })),
                j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) &&
                  (l = m.intl.format(m.t.mULxLS, {
                    numFreeGuildSubscriptions: _.cb,
                  }));
              break;
            case _.Xh.PREMIUM_3_MONTH_TIER_2:
            case _.Xh.PREMIUM_6_MONTH_TIER_2:
              l = m.intl.string(m.t.aaCoW1);
              break;
            case _.Xh.PREMIUM_MONTH_TIER_0:
            case _.Xh.PREMIUM_YEAR_TIER_0:
              l = m.intl.string(m.t["XEoQ7+"]);
              break;
            default:
              throw Error("Unexpected planId: ".concat(s));
          }
        else if (d.skuId === _.Si.TIER_2 && u.skuId === _.Si.TIER_1)
          l = m.intl.string(m.t.PNX4ND);
        else
          switch (u.skuId) {
            case _.Si.TIER_0:
              l = m.intl.string(m.t["XEoQ7+"]);
              break;
            case _.Si.TIER_1:
              l = m.intl.string(m.t.nLI1Ki);
              break;
            case _.Si.TIER_2:
              l =
                1 !== d.intervalCount
                  ? m.intl.string(m.t.qSZZVF)
                  : m.intl.string(m.t.RNjcNj);
              break;
            default:
              throw Error("Unexpected skuId: ".concat(u.skuId));
          }
        return (0, i.jsx)("div", { className: L.text, children: l });
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
            hideClose: I,
            postSuccessGuild: M,
            paymentSourceType: v,
          } = e,
          { theme: y } = (0, o.useThemeContext)(),
          T = (0, a.e7)([x.Z], () => (null != E ? x.Z.get(E.id) : null));
        l.useEffect(() => {
          if (null == E || null != T) return;
          let { applicationId: e, id: t } = E;
          (0, C.$N)(e, t).catch(j.VqG);
        }, [E, T]);
        let N = (e) => {
          if (e.skuId === _.Si.TIER_0)
            return j.X7u.has(null != v ? v : j.HeQ.UNKNOWN)
              ? m.intl.format(m.t.o6hBiY, {})
              : m.intl.string(m.t["AGf/yc"]);
          if (e.skuId === _.Si.TIER_1)
            return j.X7u.has(null != v ? v : j.HeQ.UNKNOWN)
              ? m.intl.format(m.t.o6hBiY, {})
              : m.intl.string(m.t.knvOV1);
          return j.X7u.has(null != v ? v : j.HeQ.UNKNOWN)
            ? m.intl.format(m.t.A4THYm, {})
            : d
              ? m.intl.string(m.t["g52y/v"])
              : m.intl.string(m.t.aTUr3d);
        };
        if (null != T)
          t = (0, i.jsx)("div", {
            className: L.text,
            children: m.intl.format(m.t.tsQOs7, { skuName: T.name }),
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
                (0, i.jsx)("div", { className: L.text, children: N(e) }),
                (0, i.jsx)("div", {
                  className: L.text,
                  children: m.intl.format(m.t["6aZ0NT"], { guildName: M.name }),
                }),
              ],
            }));
        } else {
          let e = p.Z.get(s);
          r()(null != e, "Missing plan"),
            (t = (0, i.jsx)("div", { className: L.text, children: N(e) }));
        }
        let P = h.ZP.getPremiumType(s);
        return (
          r()(
            null != P,
            "premium type should not be null in purchase confirmation",
          ),
          (n =
            null != T
              ? m.intl.formatToPlainString(m.t["1qGgm5"], { skuName: T.name })
              : S
                ? m.intl.string(m.t.QJ9EyM)
                : null != M
                  ? m.intl.string(m.t.ta3cXV)
                  : m.intl.string(m.t.TkTvBw)),
          (0, i.jsxs)("div", {
            className: L.confirmation,
            children: [
              (0, i.jsx)(f.C, {
                className: L.banner,
                theme: y,
                premiumType: P,
                type: j.X7u.has(null != v ? v : j.HeQ.UNKNOWN)
                  ? f.C.Types.PREMIUM_PAYMENT_STARTED
                  : null != u
                    ? f.C.Types.PREMIUM_UPDATED
                    : f.C.Types.PREMIUM_ACTIVATED,
              }),
              t,
              I ? null : (0, i.jsx)(o.Button, { onClick: c, children: n }),
            ],
          })
        );
      }
      function S(e) {
        let { planId: t, onClose: n } = e,
          {
            giftRecipient: l,
            selectedGiftStyle: s,
            hasSentMessage: o,
            giftMessageError: C,
            isSendingMessage: x,
          } = (0, d.wD)(),
          h = (0, a.e7)([p.Z], () => p.Z.get(t));
        r()(null != h, "Missing plan");
        let f = (0, a.e7)([c.Z], () => c.Z.getGiftCode(h.skuId));
        return (0, i.jsx)(u.Z, {
          giftCode: f,
          subscriptionPlan: h,
          onClose: n,
          selectedGiftStyle: s,
          hasSentMessage: o,
          giftRecipient: l,
          giftMessageError: C,
          isSendingMessage: x,
        });
      }
      function I() {
        return (0, i.jsxs)("div", {
          className: L.redirectConfirmation,
          children: [
            (0, i.jsx)(o.Heading, {
              variant: "heading-xl/bold",
              children: m.intl.string(m.t.Xtf9wM),
            }),
            (0, i.jsxs)("div", {
              className: L.redirectBody,
              children: [
                (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: m.intl.string(m.t.bIVRSU),
                }),
                (0, i.jsx)("br", {}),
                (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: m.intl.string(m.t["0UJqOz"]),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=5a8a656a6d246fc0f660.js.map
