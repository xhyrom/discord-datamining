"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95900"],
  {
    426831: function (e) {
      e.exports = "/assets/f9e18e3049e471717cf2.svg";
    },
    257510: function (e) {
      e.exports = "/assets/0e72033c60770cfc4a78.svg";
    },
    74838: function (e) {
      e.exports = "/assets/fa9b1ae8d7c7ed9b1e89.svg";
    },
    720834: function (e) {
      e.exports = "/assets/e907b5a0f29a0608596d.svg";
    },
    385925: function (e) {
      e.exports = "/assets/13554545ee03bcb9526c.svg";
    },
    588921: function (e) {
      e.exports = "/assets/8fbb9cda2bcb0b0f364f.svg";
    },
    718720: function (e) {
      e.exports = "/assets/7cb4e15e625af682f6c9.svg";
    },
    721513: function (e) {
      e.exports = "/assets/e5f5fbb464426907c65f.svg";
    },
    430597: function (e) {
      e.exports = "/assets/05912cc8c1bdd6a70e40.svg";
    },
    241822: function (e) {
      e.exports = "/assets/a9a05015f7119a88c5bf.png";
    },
    190947: function (e, n, s) {
      s.d(n, {
        b: function () {
          return r;
        },
      });
      var t = s(200651);
      s(192379);
      var l = s(481060),
        i = s(991862);
      function r(e) {
        let { currencies: n, className: s, children: l } = e;
        return n.length < 2
          ? null
          : (0, t.jsx)("div", { className: s, children: l });
      }
      n.Z = function (e) {
        let {
          currencies: n,
          onChange: s,
          selectedCurrency: r,
          className: a,
          disabled: c = !1,
        } = e;
        if (n.length < 2) return null;
        let o = n.map((e, n) => ({
          key: n,
          value: e,
          label: "".concat(e.toUpperCase(), " - ").concat((0, i.T)(e)),
        }));
        return (0, t.jsx)(l.SingleSelect, {
          value: r,
          options: o,
          onChange: (e) => {
            null != e && s(e);
          },
          className: a,
          isDisabled: c,
        });
      };
    },
    86040: function (e, n, s) {
      s.d(n, {
        C: function () {
          return c;
        },
        N: function () {
          return o;
        },
      });
      var t = s(200651);
      s(192379);
      var l = s(481060),
        i = s(600164),
        r = s(689938),
        a = s(830151);
      let c = (e) => {
          let { className: n, isEmailResent: s, resendEmail: i } = e;
          return (0, t.jsx)("div", {
            className: n,
            children: (0, t.jsxs)("div", {
              className: a.awaitingWrapper,
              children: [
                (0, t.jsx)(l.Heading, {
                  variant: "heading-xl/bold",
                  children:
                    r.Z.Messages
                      .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER,
                }),
                (0, t.jsxs)("p", {
                  children: [
                    (0, t.jsx)(l.Text, {
                      variant: "text-md/normal",
                      children:
                        r.Z.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL,
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)(l.Text, {
                      variant: "text-md/normal",
                      children:
                        r.Z.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS,
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsxs)(l.Text, {
                      variant: "text-md/normal",
                      children: [
                        r.Z.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT,
                        "\xa0",
                        s
                          ? r.Z.Messages
                              .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT
                          : (0, t.jsx)(l.Anchor, {
                              onClick: i,
                              children:
                                r.Z.Messages
                                  .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION,
                            }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        o = () =>
          (0, t.jsx)("div", {
            children: (0, t.jsx)(l.ModalFooter, {
              justify: i.Z.Justify.BETWEEN,
              align: i.Z.Align.CENTER,
              children: (0, t.jsx)(l.Button, {
                "data-testid": "continue",
                color: l.Button.Colors.BRAND,
                disabled: !0,
                children:
                  r.Z.Messages
                    .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON,
              }),
            }),
          });
    },
    940824: function (e, n, s) {
      var t = s(200651);
      s(192379);
      var l = s(481060),
        i = s(37234),
        r = s(100527),
        a = s(906732),
        c = s(703656),
        o = s(335131),
        u = s(981631),
        d = s(689938),
        _ = s(788629);
      n.Z = (e) => {
        let { onClose: n } = e,
          { analyticsLocations: s } = (0, a.ZP)(),
          m = () => {
            n(),
              (0, c.uL)(u.Z5c.COLLECTIBLES_SHOP),
              (0, o.mK)({
                openInLayer: !1,
                analyticsSource: r.Z.PREMIUM_PAYMENT_MODAL,
                analyticsLocations: s,
              }),
              (0, i.xf)();
          };
        return (0, t.jsxs)("div", {
          className: _.container,
          children: [
            (0, t.jsx)("div", {
              className: _.iconBackground,
              children: (0, t.jsx)(l.ShopIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: l.tokens.colors.WHITE,
              }),
            }),
            (0, t.jsx)(l.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              children: d.Z.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format(
                {
                  checkItOut: (e) =>
                    (0, t.jsx)(l.Clickable, {
                      className: _.link,
                      onClick: m,
                      children: e,
                    }),
                },
              ),
            }),
          ],
        });
      };
    },
    632580: function (e, n, s) {
      s.d(n, {
        H: function () {
          return p;
        },
      }),
        s(47120);
      var t = s(512722),
        l = s.n(t),
        i = s(570140),
        r = s(355467),
        a = s(976255),
        c = s(366939),
        o = s(16084),
        u = s(255078),
        d = s(626135),
        _ = s(74538),
        m = s(45572),
        I = s(981631),
        E = s(474936);
      async function p(e) {
        let {
          setPurchaseState: n,
          setHasAcceptedTerms: s,
          setIsSubmitting: t,
          setPurchaseError: p,
          hasRedirectURL: N,
          setHasRedirectURL: T,
          isGift: S,
          baseAnalyticsData: x,
          analyticsLocation: h,
          analyticsLocations: P,
          flowStartTime: f,
          subscriptionPlan: A,
          planGroup: v,
          trialId: M,
          priceOptions: g,
          paymentSource: R,
          isPrepaidPaymentPastDue: L,
          openInvoiceId: O,
          premiumSubscription: C,
          onNext: j,
          metadata: Z,
          sku: y,
          skuPricePreview: b,
          purchaseType: D,
          referralCode: G,
          loadId: U,
          giftInfoOptions: F,
          invoicePreview: B,
        } = e;
        n(m.A.PURCHASING), s(!0), t(!0), i.Z.wait(a.fw), p(null);
        try {
          let e, s, t;
          if (
            (d.default.track(I.rMx.PAYMENT_FLOW_COMPLETED, {
              ...x,
              subtotal: null == B ? void 0 : B.subtotal,
              tax: null == B ? void 0 : B.tax,
              expected_amount: null == B ? void 0 : B.total,
              expected_currency: null == B ? void 0 : B.currency,
              duration_ms: Date.now() - f,
            }),
            N)
          )
            return;
          if (D === I.GZQ.ONE_TIME)
            l()(null != y, "SKU must exist and be fetched."),
              l()(null != b, "SKUPricePreview must exist."),
              (e = await (0, o.ZZ)(y.applicationId, y.id, {
                expectedAmount: b.amount,
                expectedCurrency: b.currency,
                isGift: S,
                paymentSource: R,
                loadId: U,
                giftInfoOptions: F,
              }));
          else if ((l()(null != A, "Missing subscriptionPlan"), S)) {
            l()(null != B, "Missing invoicePreview");
            let n = B.total,
              s = B.currency;
            e = await (0, o.ZZ)(E.CL, A.skuId, {
              expectedAmount: n,
              expectedCurrency: s,
              paymentSource: R,
              subscriptionPlanId: A.id,
              isGift: !0,
              loadId: U,
              giftInfoOptions: F,
            });
          } else if (L && null != O && null != R && null != C)
            e = I.Uk1.has(R.type)
              ? await (0, r.G)(C, O, R, g.currency)
              : await (0, r.Mg)(
                  C,
                  { paymentSource: R, currency: g.currency },
                  P,
                  h,
                  U,
                );
          else if (null != C) {
            let n = (0, _.al)(C, A.id, 1, new Set(v)),
              s = { paymentSource: R, currency: g.currency };
            C.status === I.O0b.PAUSED
              ? (s.status = I.O0b.ACTIVE)
              : (s.items = n),
              (e = await (0, r.Mg)(C, s, P, h, U));
          } else
            e = await (0, c.Ld)({
              planId: A.id,
              currency: g.currency,
              paymentSource: R,
              trialId: M,
              metadata: Z,
              referralCode: G,
              loadId: U,
            });
          if (e.redirectConfirmation) {
            T(null != e.redirectURL);
            return;
          }
          n(m.A.COMPLETED),
            "subscription" in e
              ? (s =
                  null != e.subscription
                    ? u.Z.createFromServer(e.subscription)
                    : null)
              : "entitlements" in e &&
                (t = null != e.entitlements ? e.entitlements : void 0),
            j(s, t);
        } catch (e) {
          n(m.A.FAIL),
            p(e),
            d.default.track(I.rMx.PAYMENT_FLOW_FAILED, {
              ...x,
              payment_error_code: null == e ? void 0 : e.code,
              payment_source_id: null == R ? void 0 : R.id,
              payment_source_type: null == R ? void 0 : R.type,
              duration_ms: Date.now() - f,
            });
        } finally {
          !N && t(!1);
        }
      }
    },
    276442: function (e, n, s) {
      s.d(n, {
        J: function () {
          return p;
        },
      });
      var t = s(512722),
        l = s.n(t),
        i = s(252759),
        r = s(639119),
        a = s(3409),
        c = s(626135),
        o = s(987209),
        u = s(598),
        d = s(409813),
        _ = s(45572),
        m = s(737143),
        I = s(981631),
        E = s(474936);
      function p(e) {
        let {
            analyticsData: n,
            initialPlanId: s,
            breadcrumbSteps: t,
            handleStepChange: p,
            referralTrialOfferId: N,
            onReturn: T,
            continueSession: S = !1,
          } = e,
          {
            contextMetadata: x,
            step: h,
            paymentSources: P,
            paymentSourceId: f,
            setPaymentSourceId: A,
            purchaseError: v,
            setPurchaseError: M,
            purchaseErrorBlockRef: g,
            paymentAuthenticationState: R,
            selectedSkuId: L,
            activeSubscription: O,
            previousStepRef: C,
            setPurchaseState: j,
          } = (0, u.usePaymentContext)(),
          { isGift: Z } = (0, o.wD)(),
          y = {
            ...(0, a.fL)(),
            paymentSources: P,
            paymentSourceId: f,
            setPaymentSourceId: A,
            purchaseError: v,
            setPurchaseError: M,
            purchaseErrorBlockRef: g,
            paymentAuthenticationState: R,
            selectedSkuId: L,
            isGift: Z,
          },
          b = (0, r.N)(N),
          D = !Z && null != b && null != L && E.nG[b.trial_id].skus.includes(L),
          G =
            null != T
              ? T
              : () => {
                  p(
                    Object.values(P).length < 1 && null == s
                      ? d.h8.PLAN_SELECT
                      : d.h8.REVIEW,
                    { trackedFromStep: d.h8.PAYMENT_TYPE },
                  );
                };
        l()(h, "Step should be set here");
        let U = (0, i.Z)(() => Date.now(), [h]);
        return (0, a.vP)({
          paymentModalArgs: y,
          initialStep:
            S && null == C.current
              ? d.h8.CREDIT_CARD_INFORMATION
              : d.h8.PAYMENT_TYPE,
          prependSteps: [d.h8.PROMOTION_INFO],
          appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
          breadcrumpSteps: t,
          currentBreadcrumpStep: h,
          usePaymentModalStep: !0,
          onReturn: G,
          onComplete: (e) => {
            e === d.h8.AWAITING_BROWSER_CHECKOUT
              ? (j(_.A.COMPLETED), p(d.h8.CONFIRM, { trackedFromStep: e }))
              : p(d.h8.REVIEW, { trackedFromStep: e });
          },
          onStepChange: (e) => {
            let { currentStep: s, toStep: t } = e,
              l = Date.now();
            c.default.track(I.rMx.PAYMENT_FLOW_STEP, {
              ...n,
              from_step: s,
              to_step: t,
              step_duration_ms: l - U,
              flow_duration_ms: l - x.startTime,
            });
          },
          isEligibleForTrial: D,
          allowDesktopRedirectPurchase: (0, m.tr)(L, Z, O),
        });
      }
    },
    793541: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = s(200651);
      s(192379);
      var l = s(723484),
        i = s(51499),
        r = s(614277),
        a = s(542781);
      function c() {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(i.Z, {}),
            (0, t.jsx)(r.C3, {
              children: (0, t.jsx)(l.F, {
                className: a.awaitingAuthenticationStep,
              }),
            }),
          ],
        });
      }
    },
    380898: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return u;
        },
      }),
        s(47120);
      var t = s(200651),
        l = s(192379),
        i = s(16084),
        r = s(86040),
        a = s(51499),
        c = s(614277),
        o = s(59023);
      function u() {
        let [e, n] = l.useState(!1),
          s = async () => {
            n(!0), await (0, i.xA)();
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(a.Z, {}),
            (0, t.jsx)(c.C3, {
              children: (0, t.jsx)(r.C, {
                className: o.body,
                isEmailResent: e,
                resendEmail: s,
              }),
            }),
            (0, t.jsx)(c.O3, { children: (0, t.jsx)(r.N, {}) }),
          ],
        });
      }
    },
    710094: function (e, n, s) {
      s.d(n, {
        l: function () {
          return R;
        },
      }),
        s(47120),
        s(411104);
      var t = s(200651),
        l = s(192379),
        i = s(512722),
        r = s.n(i),
        a = s(330726),
        c = s(711459),
        o = s(104494),
        u = s(639119),
        d = s(716534),
        _ = s(664891),
        m = s(911367),
        I = s(669079),
        E = s(987209),
        p = s(598),
        N = s(409813),
        T = s(809144),
        S = s(698708),
        x = s(614223),
        h = s(481595),
        P = s(51499),
        f = s(678334),
        A = s(614277),
        v = s(474936),
        M = s(231338),
        g = s(689938);
      function R(e) {
        var n, s;
        let i,
          {
            handleStepChange: R,
            trialId: L,
            trialFooterMessageOverride: O,
            reviewWarningMessage: C,
            planGroup: j,
            openInvoiceId: Z,
            analyticsData: y,
            analyticsLocation: b,
            referralTrialOfferId: D,
            initialPlanId: G,
            subscriptionTier: U,
            handleClose: F,
          } = e,
          {
            activeSubscription: B,
            setUpdatedSubscription: w,
            contextMetadata: H,
            currencies: k,
            paymentSourceId: W,
            paymentSources: Y,
            priceOptions: V,
            purchaseError: K,
            purchaseTokenAuthState: z,
            selectedPlan: X,
            selectedSkuId: J,
            setCurrency: q,
            setPaymentSourceId: Q,
            setPurchaseState: $,
            setPurchaseError: ee,
            step: en,
            purchaseState: es,
            isPremium: et,
            setHasAcceptedTerms: el,
            purchaseType: ei,
            setEntitlementsGranted: er,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            invoicePreview: ec,
            inReverseTrial: eo,
          } = (0, p.usePaymentContext)(),
          { isGift: eu, giftMessage: ed, giftRecipient: e_ } = (0, E.wD)();
        r()(null != en, "Step should be set");
        let em = l.useRef(null),
          [eI, eE] = (0, a.Z)(!1, 500);
        (0, m.t)();
        let ep = null !== (s = null != L ? L : D) && void 0 !== s ? s : null,
          eN = null != ep && (!et || v.nG[ep].skus.includes(J)) ? ep : null,
          eT = (0, u.N)(D),
          eS = (0, o.Ng)(),
          ex = { user_trial_offer_id: null == eT ? void 0 : eT.id };
        l.useEffect(() => {
          null != K &&
            null != em.current &&
            em.current.scrollIntoView({ behavior: "smooth" });
        }, [K]);
        let eh = l.useCallback(
            (e, n) => {
              w(e),
                null != n && er(n),
                R(N.h8.CONFIRM, {
                  fulfillment: { subscription: e, entitlements: n },
                });
            },
            [R, w, er],
          ),
          eP = null != W ? Y[W] : null,
          ef =
            null != X && v.o4.has(X.id) && null != eP && !(0, c.aQ)(eP)
              ? Error(
                  g.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE,
                )
              : null,
          eA = l.useRef(null),
          [ev, eM] = l.useState(null),
          eg =
            !eu &&
            null != eT &&
            null != J &&
            v.nG[eT.trial_id].skus.includes(J),
          eR =
            null == eS
              ? void 0
              : null === (n = eS.discount) || void 0 === n
                ? void 0
                : n.plan_ids,
          eL =
            !eu && null != eS && null != eR && null != X && eR.includes(X.id),
          eO = eu && (0, I.pO)(e_),
          eC = null == G && null == U && ei === M.GZ.SUBSCRIPTION,
          ej = (0, x.Kp)({
            isTrial: eg,
            isGift: eu,
            selectedSkuId: J,
            startedPaymentFlowWithPaymentSources: ea.current,
          }),
          eZ = eu && ei === M.GZ.ONE_TIME,
          ey = eZ || (ej ? eC && et : et),
          eb = l.useCallback(() => {
            if (ej) {
              R(N.h8.SKU_SELECT);
              return;
            }
            return eZ ? R(N.h8.GIFT_CUSTOMIZATION) : R(N.h8.PLAN_SELECT);
          }, [R, ej, eZ]),
          eD = !1;
        return (
          ei === M.GZ.ONE_TIME
            ? (i = (0, t.jsx)(h.Z, {
                hasLegalTermsFlash: eI,
                legalTermsNodeRef: eA,
                onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                handlePaymentSourceAdd: () => R(N.h8.ADD_PAYMENT_STEPS),
              }))
            : ((eD = eu
                ? null == ec
                : null != eP &&
                  ei === M.GZ.SUBSCRIPTION &&
                  eg &&
                  !eP.canRedeemTrial()),
              null == B || eo || eu
                ? (r()(null != X, "Expected plan to be selected"),
                  (i = (0, t.jsx)(d.Z, {
                    selectedPlanId: X.id,
                    paymentSources: Y,
                    onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                    priceOptions: V,
                    currencies: k,
                    onCurrencyChange: (e) => q(e),
                    handlePaymentSourceAdd: () => R(N.h8.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: el,
                    legalTermsNodeRef: eA,
                    hasLegalTermsFlash: eI,
                    trialId: eN,
                    trialFooterMessageOverride: O,
                    reviewWarningMessage: C,
                    purchaseState: es,
                    referralTrialOfferId: D,
                    isTrial: eg || (null != L && null != O),
                    isDiscount: eL,
                    handleClose: F,
                  })))
                : (r()(null != X, "Expected plan to be selected"),
                  (i = (0, t.jsx)(_.Z, {
                    premiumSubscription: B,
                    paymentSources: Y,
                    priceOptions: V,
                    onPaymentSourceChange: (e) => {
                      Q(null != e ? e.id : null);
                    },
                    onPaymentSourceAdd: () => {
                      R(N.h8.ADD_PAYMENT_STEPS);
                    },
                    planId: X.id,
                    setHasAcceptedTerms: el,
                    legalTermsNodeRef: eA,
                    hasLegalTermsFlash: eI,
                    onInvoiceError: (e) => eM(e),
                    planGroup: j,
                    currencies: k,
                    onCurrencyChange: (e) => q(e),
                    hasOpenInvoice: null != Z,
                    purchaseState: es,
                    handleClose: F,
                  })))),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(T.P, { giftMessage: ed }),
              !eO && (0, t.jsx)(P.Z, { isEligibleForTrial: eg }),
              (0, t.jsxs)(A.C3, { children: [(0, t.jsx)(S.Z, {}), i] }),
              (0, t.jsx)(A.O3, {
                children: (0, t.jsx)(f.Z, {
                  premiumSubscription: null != B ? B : null,
                  setPurchaseState: $,
                  onBack: eb,
                  onNext: eh,
                  onPurchaseError: (e) => ee(e),
                  legalTermsNodeRef: eA,
                  flashLegalTerms: () => eE(!0),
                  invoiceError: ev,
                  planError: ef,
                  analyticsLocation: b,
                  baseAnalyticsData: y,
                  flowStartTime: H.startTime,
                  trialId: eN,
                  planGroup: j,
                  purchaseTokenAuthState: z,
                  openInvoiceId: Z,
                  backButtonEligible: ey,
                  metadata: ex,
                  isTrial: eg,
                  disablePurchase: eD,
                }),
              }),
            ],
          })
        );
      }
    },
    678334: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return O;
        },
      }),
        s(47120);
      var t = s(200651),
        l = s(192379),
        i = s(512722),
        r = s.n(i),
        a = s(442837),
        c = s(481060),
        o = s(355467),
        u = s(906732),
        d = s(600164),
        _ = s(160913),
        m = s(311821),
        I = s(459965),
        E = s(858987),
        p = s(975060),
        N = s(882712),
        T = s(855775),
        S = s(626135),
        x = s(669079),
        h = s(74538),
        P = s(987209),
        f = s(598),
        A = s(632580),
        v = s(45572),
        M = s(919778),
        g = s(612853),
        R = s(981631),
        L = s(38569);
      function O(e) {
        let {
            premiumSubscription: n,
            setPurchaseState: s,
            onBack: i,
            onNext: O,
            legalTermsNodeRef: C,
            flashLegalTerms: j,
            invoiceError: Z,
            planError: y,
            onPurchaseError: b,
            baseAnalyticsData: D,
            flowStartTime: G,
            trialId: U,
            planGroup: F,
            analyticsLocation: B,
            purchaseTokenAuthState: w,
            openInvoiceId: H,
            metadata: k,
            backButtonEligible: W,
            disablePurchase: Y,
            isTrial: V = !1,
          } = e,
          {
            selectedPlan: K,
            priceOptions: z,
            setHasAcceptedTerms: X,
            setPurchaseError: J,
            purchaseType: q,
            paymentSourceId: Q,
            paymentSources: $,
            selectedSkuId: ee,
            skusById: en,
            skuPricePreviewsById: es,
            referralCode: et,
            contextMetadata: el,
            invoicePreview: ei,
            inReverseTrial: er,
          } = (0, f.usePaymentContext)(),
          {
            isGift: ea,
            selectedGiftStyle: ec,
            customGiftMessage: eo,
            emojiConfetti: eu,
            soundEffect: ed,
            giftRecipient: e_,
          } = (0, P.wD)(),
          em = (0, x.MY)(e_),
          eI = {};
        (eI.gift_style = ec),
          em === x.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (r()(
              null != e_,
              "Gift recipient must be set at purchase review step for these gift options.",
            ),
            (eI.recipient_id = e_.id),
            (eI.custom_message = eo),
            (eI.emoji_id = null == eu ? void 0 : eu.id),
            (eI.emoji_name =
              (null == eu ? void 0 : eu.id) == null
                ? null == eu
                  ? void 0
                  : eu.surrogates
                : void 0),
            (eI.sound_id = null == ed ? void 0 : ed.soundId));
        let eE = null == K ? void 0 : K.id,
          ep = (0, M.sE)(U, z.paymentSourceId, eE),
          eN = (0, a.e7)([p.Z], () => p.Z.popupCallbackCalled),
          { analyticsLocations: eT } = (0, u.ZP)(),
          eS = null != Q ? $[Q] : null,
          [ex, eh] = l.useState(ep),
          [eP, ef] = l.useState(!1),
          { hasEntitlements: eA } = (0, I.H)(eE, ea),
          ev = (0, h.Ap)(z.paymentSourceId),
          eM = eA || ep,
          eg = (0, _.U)(),
          eR = null,
          eL = null;
        if (q === R.GZQ.ONE_TIME) {
          var eO;
          r()(null != ee, "SKU must be selected for one-time purchases"),
            (eR = null !== (eO = en[ee]) && void 0 !== eO ? eO : null),
            r()(null != eR, "SKU must exist and be fetched.");
          let e = es[ee],
            n = null != Q ? Q : T.c;
          eL = null != e ? e[n] : null;
        }
        let eC = async () => {
          await (0, A.H)({
            setPurchaseState: s,
            setHasAcceptedTerms: X,
            setIsSubmitting: eh,
            setPurchaseError: J,
            hasRedirectURL: eP,
            setHasRedirectURL: ef,
            isGift: ea,
            baseAnalyticsData: D,
            analyticsLocation: B,
            analyticsLocations: eT,
            flowStartTime: G,
            subscriptionPlan: K,
            planGroup: F,
            trialId: U,
            priceOptions: z,
            paymentSource: eS,
            isPrepaidPaymentPastDue: eg,
            openInvoiceId: H,
            premiumSubscription: n,
            onNext: O,
            metadata: k,
            sku: eR,
            skuPricePreview: eL,
            purchaseType: q,
            referralCode: et,
            loadId: el.loadId,
            giftInfoOptions: eI,
            invoicePreview: ei,
          });
        };
        l.useEffect(() => {
          (async () => {
            if (!0 === eN)
              try {
                if (null == p.Z.redirectedPaymentId) return;
                await (0, o.OP)(p.Z.redirectedPaymentId), s(v.A.COMPLETED), O();
              } catch (e) {
                s(v.A.FAIL),
                  b(e),
                  S.default.track(R.rMx.PAYMENT_FLOW_FAILED, {
                    ...D,
                    payment_error_code: null == e ? void 0 : e.code,
                    payment_source_id: Q,
                    payment_source_type: null == eS ? void 0 : eS.type,
                    duration_ms: Date.now() - G,
                  });
              } finally {
                eh(!1), (0, o.K2)();
              }
            else w === N.I.SUCCESS && (await eC());
          })();
        }, [eN]),
          l.useEffect(() => {
            ep && !ea && null == n && eC();
          }, [ep, ea, n]);
        let ej = null != H || (q === R.GZQ.ONE_TIME && !ea);
        return ep
          ? null
          : (0, t.jsxs)(c.ModalFooter, {
              align: d.Z.Align.CENTER,
              children: [
                (0, t.jsx)(E.Z, {
                  legalTermsNodeRef: C,
                  invoiceError: Z,
                  planError: y,
                  disablePurchase: Y,
                  flashLegalTerms: j,
                  isSubmitting: ex,
                  premiumSubscription: n,
                  isGift: ea,
                  planGroup: F,
                  isPrepaid: ev,
                  isTrial: V,
                  makePurchase: eC,
                  needsPaymentSource: null == eS && !eM,
                  onNext: O,
                  inReverseTrial: er,
                }),
                (0, t.jsx)(g.Z, {}),
                W && !ej
                  ? (0, t.jsx)("div", {
                      className: L.back,
                      children: (0, t.jsx)(m.Z, { onClick: i }),
                    })
                  : null,
              ],
            });
      }
    },
    919778: function (e, n, s) {
      s.d(n, {
        sE: function () {
          return a;
        },
      });
      var t = s(818083),
        l = s(74538);
      let i = (0, t.B)({
          kind: "user",
          id: "2022-06_no_payment_info_trial",
          label: "No Payment Info Trial",
          defaultConfig: { bypassCheckout: !1 },
          treatments: [
            {
              id: 1,
              label: "Bypass collecting payment info",
              config: { bypassCheckout: !0 },
            },
          ],
        }),
        r = (e, n, s) => {
          let t = null == s || (0, l.uZ)(s);
          return null != e && null == n && t;
        },
        a = (e, n, s) => {
          let { bypassCheckout: t } = i.useExperiment(
              { location: "aeb070_1" },
              { autoTrackExposure: !1 },
            ),
            l = r(e, n, s);
          return t && l;
        };
    },
    809144: function (e, n, s) {
      s.d(n, {
        P: function () {
          return u;
        },
      });
      var t = s(200651);
      s(192379);
      var l = s(481060),
        i = s(609194),
        r = s(669079),
        a = s(987209),
        c = s(689938),
        o = s(473156);
      function u(e) {
        let { giftMessage: n = c.Z.Messages.PREMIUM_PAYMENT_IS_GIFT } = e,
          { isGift: s, giftRecipient: u } = (0, a.wD)();
        return !s || (0, r.pO)(u)
          ? null
          : (0, t.jsx)(i.Z, {
              className: o.paymentNote,
              iconSize: i.Z.Sizes.SMALL,
              icon: l.GiftIcon,
              color: null == n ? i.Z.Colors.PRIMARY : i.Z.Colors.SECONDARY,
              children: n,
            });
      }
    },
    481595: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return U;
        },
      }),
        s(789020);
      var t = s(200651),
        l = s(192379),
        i = s(512722),
        r = s.n(i),
        a = s(742280),
        c = s(399606),
        o = s(481060),
        u = s(16084),
        d = s(224550),
        _ = s(609194),
        m = s(275850),
        I = s(672971),
        E = s(115130),
        p = s(925329),
        N = s(653798),
        T = s(314182),
        S = s(251660),
        x = s(246946),
        h = s(351402),
        P = s(853872),
        f = s(855775),
        A = s(695103),
        v = s(4912),
        M = s(630388),
        g = s(669079),
        R = s(937615),
        L = s(987209),
        O = s(598),
        C = s(45572),
        j = s(119226),
        Z = s(981631),
        y = s(689938),
        b = s(679640);
      function D(e) {
        let { sku: n, skuPricePreview: s } = e;
        r()(null != s.amount, "SKU must have a price set.");
        let l = s.amount - s.tax;
        return !s.tax_inclusive && s.tax > 0
          ? (0, t.jsxs)(N.PO, {
              className: b.invoice,
              children: [
                (0, t.jsx)(N.R$, {
                  label: n.name,
                  value: (0, R.T4)(l, s.currency),
                  className: b.subscriptionCostRow,
                }),
                (0, t.jsx)(N.R$, {
                  label: y.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                  value: (0, R.T4)(s.tax, s.currency),
                  className: b.subscriptionCostRow,
                }),
                (0, t.jsx)(N.KU, {}),
                (0, t.jsx)(N.Ji, {
                  label: y.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                  value: (0, R.T4)(s.amount, s.currency),
                  className: b.subscriptionCostRow,
                }),
              ],
            })
          : (0, t.jsx)(N.PO, {
              className: b.invoice,
              children: (0, t.jsx)(N.R$, {
                label: n.name,
                value: (0, R.T4)(s.amount, s.currency),
                className: b.subscriptionCostRow,
              }),
            });
      }
      function G(e) {
        let { application: n, sku: s, isEmbeddedIAP: l } = e;
        return !0 !== l
          ? null
          : (0, t.jsxs)("div", {
              className: b.skuHeading,
              children: [
                (0, t.jsx)(p.Z, { game: n }),
                (0, t.jsx)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: b.skuHeadingText,
                  children: s.name,
                }),
              ],
            });
      }
      function U(e) {
        let {
            hasLegalTermsFlash: n,
            legalTermsNodeRef: s,
            onPaymentSourceChange: i,
            handlePaymentSourceAdd: p,
          } = e,
          {
            application: R,
            purchaseState: U,
            paymentSources: F,
            paymentSourceId: B,
            setHasAcceptedTerms: w,
            skusById: H,
            skuPricePreviewsById: k,
            selectedSkuId: W,
            isEmbeddedIAP: Y,
            purchaseType: V,
            purchasePreviewError: K,
            devShelfFetchState: z,
          } = (0, O.usePaymentContext)(),
          { isGift: X, giftRecipient: J } = (0, L.wD)(),
          q = X && (0, g.pO)(J),
          { defaultPaymentSourceId: Q, hasFetchedPaymentSources: $ } = (0,
          c.cj)([P.Z], () => ({
            defaultPaymentSourceId: P.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: P.Z.hasFetchedPaymentSources,
          }));
        r()(null != W, "Expected selectedSkuId");
        let ee = H[W],
          en = k[W],
          es = null != B ? B : f.c,
          et = null != en ? en[es] : null;
        r()(null != ee, "SKU must exist and be fetched."),
          r()(null != R, "Application must exist.");
        let el = (0, c.e7)(
            [E.Z, A.Z],
            () =>
              A.Z.inTestModeForApplication(R.id) ||
              E.Z.inDevModeForApplication(R.id),
            [R.id],
          ),
          ei = (0, c.e7)([x.Z], () => x.Z.enabled),
          er = a.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback),
          ea = U === C.A.PURCHASING || U === C.A.COMPLETED,
          ec = null != B ? F[B].type : null;
        return (
          l.useEffect(() => {
            $ &&
              B === Q &&
              Q !== f.c &&
              null == et &&
              (0, u.x2)(ee.applicationId, ee.id, Q, { isGift: X });
          }, [Q, $, B, ee.applicationId, ee.id, et, X]),
          (0, t.jsxs)("div", {
            className: b.stepBody,
            children: [
              el
                ? (0, t.jsx)(
                    _.Z,
                    {
                      icon: (0, o.makeIconCompat)(v.Z),
                      iconSize: _.Z.Sizes.SMALL,
                      color: _.Z.Colors.WARNING,
                      className: b.errorBlock,
                      children:
                        y.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE,
                    },
                    "TEST_MODE",
                  )
                : null,
              (0, M.yE)(R.flags, Z.udG.EMBEDDED) && z === E.O.ERROR
                ? (0, t.jsx)(
                    _.Z,
                    {
                      icon: (0, o.makeIconCompat)(v.Z),
                      iconSize: _.Z.Sizes.SMALL,
                      color: _.Z.Colors.ERROR,
                      className: b.errorBlock,
                      children:
                        y.Z.Messages
                          .APPLICATION_STORE_PURCHASE_DEV_SHELF_FETCH_FAILED,
                    },
                    "DEV_SHELF_ERROR",
                  )
                : null,
              (0, t.jsx)(G, { application: R, sku: ee, isEmbeddedIAP: Y }),
              q && (0, t.jsx)(j.Z, { sku: ee }),
              null != J ? (0, t.jsx)(S.s, { giftRecipient: J }) : null,
              (0, t.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H5,
                children: X
                  ? y.Z.Messages.PREMIUM_GIFTING_BUTTON
                  : y.Z.Messages
                      .ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL,
              }),
              null != et
                ? (0, t.jsx)(D, { sku: ee, skuPricePreview: et })
                : null == K
                  ? (0, t.jsx)(o.Spinner, {
                      type: o.Spinner.Type.WANDERING_CUBES,
                      className: b.invoiceSpinner,
                    })
                  : (0, t.jsx)(N.PO, {
                      className: b.invoice,
                      children: (0, t.jsx)(N.R$, {
                        label: ee.name,
                        value: null,
                        className: b.subscriptionCostRow,
                      }),
                    }),
              (0, t.jsxs)("div", {
                className: b.paymentSourceWrapper,
                children: [
                  (0, t.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children:
                      y.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                  }),
                  (0, t.jsx)(m.Z, {
                    paymentSources: Object.values(F),
                    selectedPaymentSourceId: B,
                    onChange: i,
                    onPaymentSourceAdd: p,
                    hidePersonalInformation: ei,
                  }),
                ],
              }),
              (0, t.jsx)(T.Z, {
                isActive: n,
                ref: s,
                children: (0, t.jsx)(I.Z, {
                  onChange: w,
                  forceShow: !0,
                  showWithdrawalWaiver: er,
                  disabled: ea,
                  subscriptionPlan: null,
                  finePrintClassname: b.fineprint,
                  purchaseType: V,
                  isGift: X,
                  checkboxLabel:
                    ee.productLine === Z.POd.COLLECTIBLES
                      ? y.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format(
                          { paidURL: Z.EYA.PAID_TERMS },
                        )
                      : void 0,
                  finePrint: (0, t.jsx)(d.Z, {
                    paymentSourceType: ec,
                    isEmbeddedIAP: Y,
                    purchaseType: V,
                    productLine: ee.productLine,
                    isGift: X,
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    119226: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return P;
        },
      }),
        s(627341);
      var t = s(200651);
      s(192379);
      var l = s(278074),
        i = s(979554),
        r = s(481060),
        a = s(1585),
        c = s(125988),
        o = s(583434),
        u = s(479446),
        d = s(981632),
        _ = s(731896),
        m = s(680295),
        I = s(998502),
        E = s(987209),
        p = s(689938),
        N = s(15841),
        T = s(241822);
      let S = I.ZP.getEnableHardwareAcceleration()
        ? r.AnimatedAvatar
        : r.Avatar;
      function x(e) {
        let { avatarDecoration: n } = e,
          {
            avatarDecorationSrc: s,
            eventHandlers: l,
            avatarPlaceholderSrc: i,
          } = (0, c.Z)({
            avatarDecorationOverride: n,
            size: (0, a.y9)(r.AvatarSizes.SIZE_152),
          });
        return (0, t.jsx)("div", {
          className: N.giftMainAnimationWrapper,
          children: (0, t.jsx)(S, {
            ...l,
            avatarDecoration: s,
            src: i,
            className: N.avatar,
            size: r.AvatarSizes.SIZE_152,
            "aria-label": p.Z.Messages.USER_SETTINGS_AVATAR,
          }),
        });
      }
      function h(e) {
        var n;
        let { id: s } = e,
          l = null === (n = (0, _.V)(s)) || void 0 === n ? void 0 : n.config;
        return (0, t.jsxs)("div", {
          className: N.profileEffectContainer,
          children: [
            (0, t.jsx)("img", {
              src: T,
              alt: null == l ? void 0 : l.accessibilityLabel,
              className: N.profileEffectBackground,
            }),
            (0, t.jsx)(m.Z, { profileEffectId: s }),
          ],
        });
      }
      function P(e) {
        let { sku: n } = e,
          { selectedGiftStyle: s } = (0, E.wD)(),
          { product: r } = (0, o.T)(null == n ? void 0 : n.id),
          a = null == r ? void 0 : r.items[0],
          c = (0, l.EQ)(a)
            .with({ type: i.Z.AVATAR_DECORATION }, (e) =>
              (0, t.jsx)(x, { avatarDecoration: e }),
            )
            .with({ type: i.Z.PROFILE_EFFECT }, (e) =>
              (0, t.jsx)(h, { id: e.id }),
            )
            .otherwise(() => null);
        return null != s && null == c
          ? (0, t.jsx)("div", {
              className: N.giftMainAnimationWrapper,
              children: (0, t.jsx)(d.Z, {
                defaultAnimationState: u.SR.LOOP,
                giftStyle: s,
                shouldAnimate: !0,
                className: N.__invalid_giftMainAnimation,
              }),
            })
          : c;
      }
    },
    631818: function (e, n, s) {
      var t = s(818083);
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
    987033: function (e, n, s) {
      var t = s(818083);
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
    711459: function (e, n, s) {
      s.d(n, {
        aQ: function () {
          return a;
        },
      }),
        s(47120);
      var t = s(742280),
        l = s(818083),
        i = s(474936);
      n.ZP = (0, l.B)({
        kind: "user",
        id: "2022-02_multi_month_plans",
        label: "Multi Month Plans",
        defaultConfig: { newPlans: [] },
        treatments: [
          {
            id: 1,
            label: "3 and 6 Month Plans",
            config: {
              newPlans: [
                i.Xh.PREMIUM_6_MONTH_TIER_2,
                i.Xh.PREMIUM_3_MONTH_TIER_2,
              ],
            },
          },
          {
            id: 2,
            label: "3 Month Plan Only",
            config: { newPlans: [i.Xh.PREMIUM_3_MONTH_TIER_2] },
          },
        ],
      });
      let r = new Set([t.S.US, t.S.CA]);
      function a(e) {
        return null == e || r.has(e.country);
      }
    },
    160913: function (e, n, s) {
      s.d(n, {
        U: function () {
          return _;
        },
      });
      var t = s(913527),
        l = s.n(t),
        i = s(442837),
        r = s(853872),
        a = s(509545),
        c = s(78839),
        o = s(74538),
        u = s(981631),
        d = s(231338);
      function _() {
        let e = (0, i.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
          n = (0, i.e7)([a.Z], () =>
            null != e && null != e.planIdFromItems
              ? a.Z.get(null == e ? void 0 : e.planIdFromItems)
              : null,
          ),
          s = (0, i.e7)(
            [r.Z],
            () =>
              null != e && null != e.paymentSourceId
                ? r.Z.getPaymentSource(e.paymentSourceId)
                : null,
            [e],
          ),
          t = null != s && d.Uk.has(s.type),
          _ =
            (null == e ? void 0 : e.status) === u.O0b.PAST_DUE
              ? l()().diff(l()(e.currentPeriodStart), "days")
              : 0;
        return (
          !!(null != e && null != n && (0, o.uZ)(n.id)) &&
          t &&
          _ >= 0 &&
          _ <= (0, o.lY)(e).days &&
          e.status === u.O0b.PAST_DUE &&
          !e.isPurchasedExternally
        );
      }
    },
    642530: function (e, n, s) {
      var t = s(200651);
      s(192379);
      var l = s(987209),
        i = s(598),
        r = s(248042),
        a = s(196567),
        c = s(474936),
        o = s(689938),
        u = s(430597);
      n.Z = () => {
        let e = (0, r.Vi)(),
          { selectedSkuId: n } = (0, i.usePaymentContext)(),
          { isGift: s } = (0, l.wD)();
        return s || n !== c.Si.TIER_2 || !e
          ? null
          : (0, t.jsx)(a.Z, {
              copy: o.Z.Messages.BOGO_PAYMENT_MODAL_BANNER_2024,
              bannerImage: u,
              hideGiftIcon: !0,
            });
      };
    },
    55610: function (e, n, s) {
      s.d(n, {
        U: function () {
          return p;
        },
      });
      var t = s(200651);
      s(192379);
      var l = s(120356),
        i = s.n(l),
        r = s(512722),
        a = s.n(r),
        c = s(481060),
        o = s(63063),
        u = s(631818),
        d = s(987033),
        _ = s(53900),
        m = s(981631),
        I = s(689938),
        E = s(3936);
      function p() {
        let e = (0, _.Z)(),
          { enabled: n } = u.Z.useExperiment(
            { location: "5ebfcf_1" },
            { autoTrackExposure: !1 },
          ),
          { enabled: s } = d.Z.useExperiment(
            { location: "5ebfcf_2" },
            { autoTrackExposure: !1 },
          );
        return null != e && ("PL" === e ? n : "TR" === e && s);
      }
      n.Z = (e) => {
        var n, s;
        let { fromBoostCancelModal: l, className: r } = e,
          u = (0, _.Z)();
        if (!p()) return null;
        return (
          a()(null != u, "Subscription billing country should not be null"),
          (0, t.jsxs)("div", {
            className: i()(E.noticeRoot, r),
            children: [
              (0, t.jsx)("div", {
                className: E.iconContainer,
                children: (0, t.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "currentColor",
                  className: E.infoIcon,
                }),
              }),
              (0, t.jsx)("div", {
                className: E.text,
                children: ((n = u),
                (s = l),
                "PL" === n
                  ? s
                    ? I.Z.Messages
                        .LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING
                    : I.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING
                  : "TR" === n
                    ? s
                      ? I.Z.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING
                      : I.Z.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING
                    : s
                      ? I.Z.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING
                      : I.Z.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                  helpCenterLink: o.Z.getArticleURL(m.BhN.LOCALIZED_PRICING),
                }),
              }),
            ],
          })
        );
      };
    },
    927699: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return T;
        },
      }),
        s(47120);
      var t = s(200651),
        l = s(192379),
        i = s(120356),
        r = s.n(i),
        a = s(481060),
        c = s(541716),
        o = s(752305),
        u = s(893718),
        d = s(993413),
        _ = s(131704),
        m = s(474936),
        I = s(981631),
        E = s(689938),
        p = s(45785);
      let N = (0, _.kt)({ id: "1", type: I.d4z.DM });
      function T(e) {
        let {
            sectionTitle: n,
            errors: s,
            onTextChange: i,
            pendingText: _,
            placeholder: I,
            currentText: T,
            className: S,
            innerClassName: x,
            disabled: h = !1,
            disableThemedBackground: P = !1,
          } = e,
          [f, A] = l.useState(null != _ ? _ : T),
          [v, M] = l.useState((0, o.JM)(f)),
          g = l.useRef(!1);
        return (
          l.useEffect(() => {
            g.current = !0;
          }, []),
          l.useEffect(() => {
            if (void 0 === _) {
              let e = (0, o.JM)(T);
              A(T), M(e);
            }
          }, [_, T]),
          (0, t.jsx)("div", {
            className: r()(p.body, S),
            children: (0, t.jsxs)(d.Z, {
              title: n,
              errors: s,
              disabled: h,
              children: [
                (0, t.jsx)(u.Z, {
                  innerClassName: r()(p.textArea, x),
                  editorClassName: p.editorTextArea,
                  maxCharacterCount: m.$n,
                  onChange: function (e, n, s) {
                    n !== f && (A(n), M(s), i(n));
                  },
                  placeholder: I,
                  channel: N,
                  textValue: f,
                  richValue: v,
                  type: c.I.CUSTOM_GIFT,
                  onBlur: () => {
                    g.current = !1;
                  },
                  onFocus: () => {
                    g.current = !0;
                  },
                  focused: g.current,
                  onSubmit: function () {
                    return new Promise((e) => {
                      e({ shouldClear: !1, shouldRefocus: !0 });
                    });
                  },
                  disableThemedBackground: P,
                }),
                (0, t.jsx)(a.HiddenVisually, {
                  children: E.Z.Messages.MAXIMUM_LENGTH.format({
                    maxLength: m.$n,
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    987716: function (e, n, s) {
      s.d(n, {
        q: function () {
          return T;
        },
      }),
        s(47120);
      var t = s(200651),
        l = s(192379),
        i = s(481060),
        r = s(987209),
        a = s(321051),
        c = s(669079),
        o = s(479446),
        u = s(646476),
        d = s(599659),
        _ = s(981632),
        m = s(96848),
        I = s(703926),
        E = s(474936),
        p = s(689938),
        N = s(522888);
      let T = (e) => {
        let { isShopGift: n } = e,
          {
            giftRecipient: s,
            selectedGiftStyle: T,
            setSelectedGiftStyle: S,
            emojiConfetti: x,
            soundEffect: h,
            setEmojiConfetti: P,
            setSoundEffect: f,
          } = (0, r.wD)(),
          [A, v] = l.useState(!1),
          M = l.useRef(null),
          g = (0, i.useRadioGroup)({ orientation: "horizontal" }),
          R = (0, c.MY)(s, n),
          L = R === c.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
          O = R !== c.xr.DEFAULT,
          C = (0, u.rK)(),
          { enabled: j } = u.ZP.useExperiment(
            { location: "premiumGiftSelect_GiftAnimationOptions" },
            { autoTrackExposure: C },
          ),
          { enabled: Z } = d.O.useExperiment({ location: "gift card" }),
          y = null;
        return (
          O && (y = C && j ? E.V4 : E.QI),
          Z && (y = E.RQ),
          (0, t.jsxs)("div", {
            children: [
              O &&
                (0, t.jsxs)("div", {
                  className: N.giftMainAnimation,
                  children: [
                    null != T
                      ? (0, t.jsx)(_.Z, {
                          giftStyle: T,
                          defaultAnimationState: o.SR.ACTION,
                          idleAnimationState: o.SR.LOOP,
                          shouldAnimate: !0,
                          className: N.animation,
                        })
                      : (0, t.jsx)(i.Spinner, { className: N.spinner }),
                    L &&
                      (0, t.jsxs)("div", {
                        className: N.soundEmojiContainer,
                        children: [
                          (0, t.jsx)("div", {
                            className: N.sound,
                            children: (0, t.jsx)(a.Z, {
                              sound: h,
                              onSelect: (e) => {
                                null != f && f(null == e ? void 0 : e);
                              },
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: N.emoji,
                            children: (0, t.jsx)(m.Z, {
                              setEmojiConfetti: P,
                              emojiConfetti: null == x ? void 0 : x,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              (0, t.jsx)("div", {
                tabIndex: null != T || A ? void 0 : 0,
                onFocus: (e) => {
                  var n;
                  e.target === e.currentTarget &&
                    (null === (n = M.current) || void 0 === n || n.focus());
                },
                className: N.giftBoxOptionContainer,
                "aria-label":
                  p.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                ...g,
                children:
                  null != y &&
                  y.map((e, n) =>
                    (0, t.jsx)(
                      I.m,
                      {
                        isSelected: T === e,
                        giftStyle: e,
                        setSelectedGiftStyle: S,
                        ref: 0 === n ? M : null,
                        onFocus: () => v(!0),
                        onBlur: () => v(!1),
                      },
                      e,
                    ),
                  ),
              }),
              (0, t.jsx)("div", { className: N.__invalid_selectPlanDivider }),
            ],
          })
        );
      };
    },
    96848: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return m;
        },
      }),
        s(47120),
        s(757143);
      var t = s(200651),
        l = s(192379),
        i = s(481060),
        r = s(907040),
        a = s(981631),
        c = s(185923),
        o = s(689938),
        u = s(898492);
      let d = {
          section: a.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
          openPopoutType: "gift_effect_emoji_picker",
        },
        _ = c.Hz.GIFT;
      function m(e) {
        let { setEmojiConfetti: n, emojiConfetti: s } = e,
          [a, c] = l.useState(!1),
          m = (e) =>
            (0, t.jsxs)("div", {
              className: u.customGiftContent,
              children: [
                (0, t.jsxs)("div", {
                  className: u.customGiftHeader,
                  children: [
                    (0, t.jsx)(i.Text, {
                      variant: "text-md/bold",
                      children: o.Z.Messages.GIFT_SELECT_EMOJI,
                    }),
                    (0, t.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      children:
                        o.Z.Messages
                          .GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION,
                    }),
                  ],
                }),
                e,
              ],
            }),
          I = (e) => {
            null != n && (n(e), c(!1));
          };
        return (0, t.jsx)(i.Popout, {
          shouldShow: a,
          position: "bottom",
          align: "left",
          autoInvert: !1,
          onRequestClose: () => c(!1),
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, t.jsx)(i.Dialog, {
              children: (0, t.jsx)(r.Z, {
                analyticsOverride: d,
                closePopout: n,
                onSelectEmoji: I,
                wrapper: "div",
                pickerIntention: _,
                renderHeader: m,
                headerClassName: u.emojiHeader,
                className: u.emojiList,
                listHeaderClassName: u.emojiList,
                searchProps: { accessory: (0, t.jsx)(t.Fragment, {}) },
              }),
            });
          },
          children: () =>
            (0, t.jsx)("div", {
              className: u.container,
              children: (0, t.jsx)(i.Clickable, {
                className: u.emoji,
                onClick: () => c(!0),
                children:
                  (null == s ? void 0 : s.name) == null
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(i.ReactionIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: u.emojiIcon,
                            width: 14,
                            height: 14,
                          }),
                          (0, t.jsx)(i.Text, {
                            className: u.text,
                            variant: "text-sm/semibold",
                            children: o.Z.Messages.GIFT_SELECT_EMOJI,
                          }),
                        ],
                      })
                    : (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(i.Text, {
                            className: u.textSelected,
                            variant: "text-sm/semibold",
                            children:
                              null == s.guildId
                                ? s.optionallyDiverseSequence
                                : null,
                          }),
                          (0, t.jsx)(i.Text, {
                            className: u.text,
                            variant: "text-sm/semibold",
                            children: s.name.replace(/_/g, " "),
                          }),
                        ],
                      }),
              }),
            }),
        });
      }
    },
    703926: function (e, n, s) {
      s.d(n, {
        m: function () {
          return T;
        },
      });
      var t = s(200651),
        l = s(192379),
        i = s(481060),
        r = s(474936),
        a = s(910485),
        c = s(426831),
        o = s(257510),
        u = s(74838),
        d = s(720834),
        _ = s(385925),
        m = s(588921),
        I = s(718720),
        E = s(721513),
        p = s(959191);
      let N = {
          [r.Cj.STANDARD_BOX]: _,
          [r.Cj.CAKE]: m,
          [r.Cj.CHEST]: I,
          [r.Cj.COFFEE]: E,
          [r.Cj.SNOWGLOBE]: "",
          [r.Cj.BOX]: "",
          [r.Cj.CUP]: "",
          [r.Cj.SEASONAL_CAKE]: o,
          [r.Cj.SEASONAL_CHEST]: u,
          [r.Cj.SEASONAL_COFFEE]: d,
          [r.Cj.SEASONAL_STANDARD_BOX]: c,
          [r.Cj.NITROWEEN_STANDARD]: p.Z,
        },
        T = l.forwardRef(function (e, n) {
          let {
            isSelected: s,
            giftStyle: l,
            setSelectedGiftStyle: r,
            onFocus: c,
            onBlur: o,
          } = e;
          return (0, t.jsx)(i.Clickable, {
            className: a.button,
            innerRef: n,
            onClick: () => r(l),
            onFocus: c,
            onBlur: o,
            children: (0, t.jsx)("img", {
              style: { width: "100%", height: "100%" },
              alt: "",
              src: N[l],
              className: s ? a.customGiftBoxHighlighted : a.customGiftBox,
            }),
          });
        });
    },
    314404: function (e, n, s) {
      s.d(n, {
        M: function () {
          return k;
        },
        O: function () {
          return H;
        },
      }),
        s(47120);
      var t = s(200651),
        l = s(192379),
        i = s(120356),
        r = s.n(i),
        a = s(512722),
        c = s.n(a),
        o = s(442837),
        u = s(481060),
        d = s(490504),
        _ = s(911969),
        m = s(940824),
        I = s(987209),
        E = s(598),
        p = s(409813),
        N = s(509545),
        T = s(78839),
        S = s(669079),
        x = s(63063),
        h = s(74538),
        P = s(937615),
        f = s(711459),
        A = s(857039),
        v = s(847903),
        M = s(104494),
        g = s(639119),
        R = s(55610),
        L = s(653798),
        O = s(553797),
        C = s(927699),
        j = s(987716),
        Z = s(311821),
        y = s(459965),
        b = s(811616),
        D = s(251660),
        G = s(474936),
        U = s(981631),
        F = s(231338),
        B = s(689938),
        w = s(133130);
      function H(e) {
        var n, s, i, a;
        let {
            premiumSubscription: p,
            skuId: T,
            selectedPlanId: Z,
            setSelectedPlanId: y,
            priceOptions: H,
            planOptions: k,
            eligibleForMultiMonthPlans: W,
            referralTrialOfferId: Y,
            subscriptionPeriodEnd: V,
            showTotal: K = !0,
            discountInvoiceItems: z,
            handleClose: X,
          } = e,
          {
            activeSubscription: J,
            setSelectedPlanId: q,
            selectedSkuId: Q,
            selectedPlan: $,
            priceOptions: ee,
          } = (0, E.usePaymentContext)(),
          {
            isGift: en,
            giftRecipient: es,
            selectedGiftStyle: et,
            customGiftMessage: el,
            setCustomGiftMessage: ei,
          } = (0, I.wD)(),
          er = (0, S.MY)(es),
          ea = en && (0, S.pO)(es),
          ec = (0, A.Z)({ location: "PremiumPlanSelectStep" });
        (T = null != T ? T : Q),
          (p = null != p ? p : J),
          c()(void 0 !== p, "should not be undefined");
        let [eo, eu] = (0, o.Wu)([N.Z], () => [
            null != p ? N.Z.get(p.planId) : null,
            null != Z ? N.Z.get(Z) : null,
          ]),
          ed = (0, g.N)(Y),
          e_ = null == ed ? void 0 : ed.subscription_trial,
          em = (0, M.Ng)(),
          eI =
            null == em
              ? void 0
              : null === (n = em.discount) || void 0 === n
                ? void 0
                : n.plan_ids,
          eE = null != eu ? eu : $,
          ep = l.useCallback(
            (e) => {
              null != y ? y(e) : q(e);
            },
            [y, q],
          ),
          eN = null != H ? H : ee;
        c()(null != eN, "Price option has to be set");
        let eT = null != ed && G.nG[ed.trial_id].skus.includes(T),
          eS =
            null != em &&
            k.some((e) => (null == eI ? void 0 : eI.includes(e))) &&
            null != em.discount,
          ex = (0, h.aS)(G.Xh.PREMIUM_MONTH_TIER_2, !1, en, eN);
        l.useEffect(() => {
          W && f.ZP.trackExposure({ location: "5f89bb_1" });
        }, [W]);
        let eh = (null == eE ? void 0 : eE.id) != null && k.includes(eE.id);
        l.useEffect(() => {
          if (!eh) {
            if (null == eo || en) ep(k[0]);
            else if (null != eo) {
              let e = k.find((e) => e !== eo.id);
              null != e && ep(e);
            }
          }
        }, [eh, en, k, eo, ep]);
        let eP = !ea && (en || (!eT && !eS)) && eh && K,
          ef = (0, u.useRadioGroup)(),
          eA =
            (null == eE ? void 0 : eE.id) != null
              ? (0, h.aS)(eE.id, !1, en, eN)
              : void 0,
          { ipCountryCode: ev } = (0, v.Z)(),
          eM = "HR" === ev && null != eA && eA.currency === F.pK.EUR,
          eg = (0, h.Ap)(eN.paymentSourceId),
          eR = l.useMemo(() => {
            if ((null == e_ ? void 0 : e_.interval) === G.rV.DAY)
              return (null == e_ ? void 0 : e_.interval_count) > 7
                ? B.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD
                : B.Z.Messages.BILLING_TRIAL_1_WEEK_PERIOD;
            return B.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD;
          }, [e_]),
          eL = !en && (eS || (null != e_ && eT && null != V)),
          eO =
            null == z
              ? void 0
              : null ===
                    (a = z.find(
                      (e) => e.subscriptionPlanId === G.Xh.PREMIUM_MONTH_TIER_2,
                    )) || void 0 === a
                ? void 0
                : null === (i = a.discounts) || void 0 === i
                  ? void 0
                  : null ===
                        (s = i.find(
                          (e) => e.type === _.eW.SUBSCRIPTION_PLAN,
                        )) || void 0 === s
                    ? void 0
                    : s.amount;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("div", {
            className: r()(ea ? w.stepBodyCustomGift : w.stepBody, {
              [w.paddingForHalloweenBanner]: ec,
            }),
            children: [
              (0, t.jsxs)("div", {
                className: ea ? w.bodyColumnMiddle : void 0,
                children: [
                  (0, t.jsx)(R.Z, {
                    fromBoostCancelModal: !1,
                    className: w.legacyPricingNotice,
                  }),
                  ea && null != et && (0, t.jsx)(j.q, {}),
                ],
              }),
              (0, t.jsxs)("div", {
                className: ea ? w.bodyColumnRight : void 0,
                children: [
                  (0, t.jsx)(D.s, { giftRecipient: es }),
                  (() => {
                    if (
                      er === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
                      null != ei
                    )
                      return (0, t.jsx)(C.Z, {
                        sectionTitle: B.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                        onTextChange: (e) => ei(e),
                        pendingText: el,
                        currentText: el,
                      });
                  })(),
                  null != eo &&
                    !en &&
                    (0, t.jsx)("div", {
                      className: w.bodyText,
                      children: (function (e, n) {
                        let s =
                            B.Z.Messages
                              .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                          t =
                            B.Z.Messages
                              .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                          l = (() => {
                            switch (e.interval) {
                              case G.rV.YEAR:
                                return s;
                              case G.rV.MONTH:
                              default:
                                return t;
                            }
                          })(),
                          i = e.skuId;
                        switch (n) {
                          case G.Si.TIER_0:
                            switch (i) {
                              case G.Si.TIER_1:
                                return B.Z.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                              case G.Si.TIER_2:
                                return B.Z.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                              default:
                                return l;
                            }
                          case G.Si.TIER_1:
                            switch (i) {
                              case G.Si.TIER_0:
                                return B.Z.Messages
                                  .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                              case G.Si.TIER_2:
                                return B.Z.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                              default:
                                return l;
                            }
                          case G.Si.TIER_2:
                            switch (i) {
                              case G.Si.TIER_0:
                              case G.Si.TIER_1:
                                return B.Z.Messages
                                  .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                              case G.Si.TIER_2:
                                return e.interval === G.rV.MONTH
                                  ? B.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format(
                                      { numFreeGuildSubscriptions: G.cb },
                                    )
                                  : l;
                              default:
                                return l;
                            }
                          default:
                            return l;
                        }
                      })(eo, T),
                    }),
                  ((e, n, s) => {
                    if (ea)
                      return (0, t.jsx)(u.FormTitle, {
                        children: B.Z.Messages.GIFT_SUBSCRIPTION_SELECTION,
                      });
                    if (!eL)
                      return (0, t.jsx)("div", {
                        className: w.selectPlanChooseTitle,
                        children: B.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE,
                      });
                    if (n) {
                      let n = (null == e ? void 0 : e.trial_id) === G.a7;
                      return (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: w.trialPlanSelectHeader,
                            children: n
                              ? B.Z.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format(
                                  { endDate: V },
                                )
                              : B.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format(
                                  { trialEnd: V, trialPeriod: eR },
                                ),
                          }),
                          (0, t.jsx)("hr", {
                            className: w.planSelectSeparator,
                          }),
                        ],
                      });
                    }
                    if (
                      s &&
                      null != eO &&
                      null != ex &&
                      Z === G.Xh.PREMIUM_MONTH_TIER_2
                    )
                      return (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: w.trialPlanSelectHeader,
                            children:
                              B.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format(
                                {
                                  numMonths:
                                    null == em
                                      ? void 0
                                      : em.discount.user_usage_limit,
                                  discountedPrice: (0, P.T4)(
                                    ex.amount - eO,
                                    ex.currency,
                                  ),
                                  regularPrice: (0, P.T4)(
                                    ex.amount,
                                    ex.currency,
                                  ),
                                },
                              ),
                          }),
                          (0, t.jsx)("hr", {
                            className: w.planSelectSeparator,
                          }),
                        ],
                      });
                  })(ed, eT, eS),
                  (0, t.jsx)("div", {
                    ...ef,
                    children: k.map((e) =>
                      (0, t.jsx)(
                        b.Z,
                        {
                          planId: e,
                          premiumSubscription: en ? null : null != p ? p : null,
                          selectPlan: ep,
                          selected: (null == eE ? void 0 : eE.id) === e,
                          priceOptions: eN,
                          shouldShowUpdatedPaymentModal: eL,
                          isEligibleForDiscount: eS,
                          discountAmountOff: eO,
                          isEligibleForTrial: eT,
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, t.jsx)("div", {
                    children:
                      eP && null != eE && null != eA
                        ? (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("div", {
                                className: w.selectPlanDivider,
                              }),
                              (0, t.jsx)(L.Ji, {
                                label:
                                  B.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                value: (0, t.jsx)(O.Z, {
                                  price: eA.amount,
                                  currency: eA.currency,
                                  intervalType: en ? null : eE.interval,
                                  intervalCount: eE.intervalCount,
                                  isPrepaidPaymentSource: eg,
                                }),
                                className: w.selectPlanTotalRow,
                              }),
                            ],
                          })
                        : null,
                  }),
                  eM &&
                    (0, t.jsx)(d.Z, {
                      message:
                        B.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                          kunaPriceWithCurrency: (0, P.T4)(
                            7.5345 * eA.amount,
                            F.pK.HRK,
                          ),
                        }),
                    }),
                  !en &&
                    !eL &&
                    K &&
                    (0, t.jsx)(d.Z, {
                      message:
                        B.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                          documentationLink: x.Z.getArticleURL(
                            U.BhN.LOCALIZED_PRICING,
                          ),
                        }),
                    }),
                  en && (0, t.jsx)(m.Z, { onClose: X }),
                ],
              }),
            ],
          }),
        });
      }
      function k(e) {
        let {
            onStepChange: n,
            selectedPlanId: s,
            paymentSources: l,
            onBackClick: i,
            showBackButton: r,
            planOptions: a,
            shouldRenderUpdatedPaymentModal: c = !1,
            isTrial: o,
          } = e,
          { paymentSources: d, selectedPlan: _ } = (0, E.usePaymentContext)(),
          { isGift: m } = (0, I.wD)();
        return (
          (l = null != l ? l : d),
          (s = null != s ? s : null == _ ? void 0 : _.id),
          (0, t.jsxs)(t.Fragment, {
            children: [
              null != s && a.includes(s)
                ? (0, t.jsx)(W, {
                    paymentSources: l,
                    onStepChange: n,
                    selectedPlanId: s,
                    isGift: m,
                    shouldRenderUpdatedPaymentModal: c,
                    isTrial: o,
                  })
                : (0, t.jsx)(u.Button, {
                    disabled: !0,
                    children: B.Z.Messages.SELECT,
                  }),
              r ? (0, t.jsx)(Z.Z, { onClick: i }) : null,
            ],
          })
        );
      }
      function W(e) {
        let {
            onStepChange: n,
            selectedPlanId: s,
            isGift: l,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: r,
            isTrial: a,
          } = e,
          c = (0, o.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
          { hasEntitlements: d } = (0, y.H)(s, l),
          _ =
            (null != c && null != c.paymentSourceId) ||
            Object.keys(i).length > 0 ||
            (d && !a);
        var m = r ? B.Z.Messages.NEXT : B.Z.Messages.SELECT,
          I = p.h8.ADD_PAYMENT_STEPS;
        return (
          _ && (I = p.h8.REVIEW),
          (0, t.jsx)(u.Button, { onClick: () => n(I), children: m })
        );
      }
    },
    811616: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return P;
        },
      });
      var t = s(200651);
      s(192379);
      var l = s(120356),
        i = s.n(l),
        r = s(512722),
        a = s.n(r),
        c = s(442837),
        o = s(692547),
        u = s(481060),
        d = s(987209),
        _ = s(706454),
        m = s(509545),
        I = s(669079),
        E = s(930153),
        p = s(74538),
        N = s(937615),
        T = s(104494),
        S = s(474936),
        x = s(689938),
        h = s(703236);
      function P(e) {
        let {
            premiumSubscription: n,
            planId: s,
            selectPlan: l,
            selected: r,
            priceOptions: P,
            shouldShowUpdatedPaymentModal: f,
            isEligibleForDiscount: A,
            discountAmountOff: v,
            isEligibleForTrial: M,
          } = e,
          g = (0, c.e7)([_.default], () => _.default.locale),
          R = (0, c.e7)([m.Z], () => m.Z.get(s)),
          { isGift: L, giftRecipient: O } = (0, d.wD)(),
          C = L && (0, I.pO)(O);
        a()(null != R, "Missing subscriptionPlan");
        let j = null != n && n.planId === s,
          Z =
            j ||
            (s === S.Xh.PREMIUM_MONTH_TIER_2 &&
              null != n &&
              [S.Xh.PREMIUM_YEAR_TIER_0, S.Xh.PREMIUM_YEAR_TIER_1].includes(
                n.planId,
              )),
          y = S.nH[s],
          b = (0, p.aS)(s, !1, L, P),
          D = (0, p.Ap)(P.paymentSourceId),
          G = null != y && !f,
          U = (0, T.Ng)(),
          F =
            R.interval === S.rV.YEAR
              ? x.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL
              : x.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
          B = () =>
            null != y &&
            (0, t.jsx)(u.Text, {
              tag: "span",
              variant: "eyebrow",
              color: "always-white",
              className: h.planOptionDiscount,
              children: x.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                discount: (0, E.T3)(g, y / 100),
              }),
            }),
          w = () =>
            (R.interval === S.rV.YEAR && null != n) || (G && !j)
              ? R.interval === S.rV.YEAR && null != n
                ? (0, t.jsxs)("span", {
                    className: h.planOptionMonthsFree,
                    children: [
                      "(",
                      x.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS,
                      ")",
                    ],
                  })
                : G && !j
                  ? B()
                  : void 0
              : null;
        return (0, t.jsxs)(u.Clickable, {
          role: C ? "menuitem" : "radio",
          "aria-checked": r,
          tabIndex: r ? 0 : -1,
          focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
          onClick: Z ? void 0 : () => l(s),
          className: i()(h.planOptionClickableContainer, {
            [h.selectedPlan]: C && r,
            [h.selectionBox]: C,
          }),
          children: [
            (0, t.jsxs)("div", {
              className: i()(h.planOption, { [h.planOptionDisabled]: Z }),
              children: [
                (0, t.jsxs)("div", {
                  className: h.planOptionClickable,
                  children: [
                    !C &&
                      (0, t.jsx)(u.Checkbox, {
                        readOnly: !0,
                        displayOnly: !0,
                        value: r,
                        shape: u.Checkbox.Shapes.ROUND,
                        color: o.Z.unsafe_rawColors.BRAND_500.css,
                        type: u.Checkbox.Types.INVERTED,
                        className: h.planOptionCheckbox,
                      }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsxs)("div", {
                          className: i()(h.planOptionInterval, {
                            [h.optionSelected]: r || C,
                            [h.updatedOptionSelected]: f && (r || C),
                          }),
                          children: [
                            (0, p.L7)(
                              R.interval,
                              L,
                              D,
                              R.intervalCount,
                              C,
                              (0, p.Rd)(R.id),
                            ),
                            C && w(),
                          ],
                        }),
                        C &&
                          (0, t.jsx)("div", {
                            className: h.planOneTimeCost,
                            children: x.Z.Messages.ONE_TIME_CHARGE.format({
                              currencyAmount: (0, N.T4)(b.amount, b.currency),
                            }),
                          }),
                      ],
                    }),
                    j &&
                      (0, t.jsxs)("span", {
                        className: h.planOptionCurrentPlan,
                        children: [
                          "(",
                          x.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN,
                          ")",
                        ],
                      }),
                    !C && w(),
                  ],
                }),
                f
                  ? (0, t.jsx)("div", {
                      className: i()({ [h.optionPriceSelected]: r }),
                      children: x.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                        price:
                          A && null != v && R.interval === S.rV.MONTH
                            ? (0, N.T4)(b.amount - v, b.currency)
                            : M
                              ? (0, N.T4)(0, b.currency, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                })
                              : (0, N.T4)(b.amount, b.currency),
                      }),
                    })
                  : (0, t.jsx)("div", {
                      className: i()({ [h.optionSelected]: r || C }),
                      children: (0, N.T4)(b.amount, b.currency),
                    }),
              ],
            }),
            f &&
              (0, t.jsx)("div", {
                className: h.planOptionSubtextContainer,
                children: (0, t.jsx)(u.Text, {
                  variant: "text-md/normal",
                  color: r ? "text-normal" : "interactive-normal",
                  className: i()(h.planOptionSubtext, {
                    [h.discountPlanOptionSubtext]: A,
                  }),
                  children: (() => {
                    if (A && null != v && R.interval === S.rV.MONTH) {
                      var e;
                      return x.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format(
                        {
                          numMonths:
                            null !==
                              (e =
                                null == U
                                  ? void 0
                                  : U.discount.user_usage_limit) && void 0 !== e
                              ? e
                              : S.rt,
                          discountedPrice: (0, N.T4)(b.amount - v, b.currency),
                          regularPrice: (0, N.T4)(b.amount, b.currency),
                        },
                      );
                    }
                    if (M)
                      return F.format({
                        price: (0, N.T4)(b.amount, b.currency),
                      });
                    if (R.interval === S.rV.YEAR)
                      return x.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                        percent: y,
                      });
                    return null;
                  })(),
                }),
              }),
          ],
        });
      }
    },
    251660: function (e, n, s) {
      s.d(n, {
        s: function () {
          return o;
        },
      });
      var t = s(200651);
      s(192379);
      var l = s(481060),
        i = s(700582),
        r = s(51144),
        a = s(689938),
        c = s(294188);
      let o = (e) => {
        let { giftRecipient: n } = e;
        return null == n
          ? null
          : (0, t.jsxs)("div", {
              className: c.content,
              children: [
                (0, t.jsx)(l.FormTitle, {
                  children: a.Z.Messages.FORM_LABEL_SEND_TO,
                }),
                (0, t.jsxs)("div", {
                  className: c.giftRecipientInfo,
                  children: [
                    (0, t.jsx)(i.Z, {
                      user: n,
                      className: c.__invalid_giftRecipient,
                      size: l.AvatarSizes.SIZE_20,
                    }),
                    (0, t.jsx)(l.Heading, {
                      className: c.giftRecipientName,
                      variant: "text-md/normal",
                      children: r.ZP.getName(n),
                    }),
                    (0, t.jsx)(l.Heading, {
                      className: c.giftRecipientTag,
                      variant: "text-md/normal",
                      children: r.ZP.getUserTag(n),
                    }),
                  ],
                }),
              ],
            });
      };
    },
    716534: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return W;
        },
      }),
        s(47120);
      var t = s(200651),
        l = s(192379),
        i = s(512722),
        r = s.n(i),
        a = s(742280),
        c = s(442837),
        o = s(692547),
        u = s(481060),
        d = s(190947),
        _ = s(224550),
        m = s(275850),
        I = s(672971),
        E = s(128069),
        p = s(987209),
        N = s(598),
        T = s(45572),
        S = s(919778),
        x = s(614223),
        h = s(246946),
        P = s(351402),
        f = s(509545),
        A = s(669079),
        v = s(63063),
        M = s(74538),
        g = s(937615),
        R = s(479446),
        L = s(374649),
        O = s(104494),
        C = s(642530),
        j = s(653798),
        Z = s(314182),
        y = s(981632),
        b = s(314404),
        D = s(42818),
        G = s(459965),
        U = s(251660),
        F = s(474936),
        B = s(981631),
        w = s(231338),
        H = s(689938),
        k = s(309951);
      function W(e) {
        var n, s, i, W, Y;
        let V,
          K,
          z,
          {
            selectedPlanId: X,
            paymentSources: J,
            priceOptions: q,
            currencies: Q,
            onCurrencyChange: $,
            onPaymentSourceChange: ee,
            handlePaymentSourceAdd: en,
            setHasAcceptedTerms: es,
            legalTermsNodeRef: et,
            hasLegalTermsFlash: el,
            trialId: ei,
            trialFooterMessageOverride: er,
            reviewWarningMessage: ea,
            metadata: ec,
            purchaseState: eo,
            hideSubscriptionDetails: eu,
            referralTrialOfferId: ed,
            isTrial: e_ = !1,
            isDiscount: em = !1,
            handleClose: eI,
          } = e,
          {
            isEmbeddedIAP: eE,
            activeSubscription: ep,
            selectedSkuId: eN,
            defaultPlanId: eT,
            isPremium: eS,
            startedPaymentFlowWithPaymentSourcesRef: ex,
            setInvoicePreview: eh,
            contextMetadata: eP,
            inReverseTrial: ef,
          } = (0, N.usePaymentContext)(),
          {
            isGift: eA,
            giftRecipient: ev,
            selectedGiftStyle: eM,
          } = (0, p.wD)(),
          eg = (0, O.Ng)(),
          eR =
            null == eg
              ? void 0
              : null === (n = eg.discount) || void 0 === n
                ? void 0
                : n.plan_ids.some((e) => F.GP[e].skuId === eN),
          eL = !eA && null != eg && null != eN && eR,
          eO = (0, c.e7)([f.Z], () => f.Z.get(X));
        r()(null != eO, "Missing plan");
        let eC = [{ planId: eO.id, quantity: 1 }],
          ej = eo === T.A.PURCHASING || eo === T.A.COMPLETED,
          [eZ, ey] = (0, L.ED)({
            items: eC,
            renewal: !1,
            preventFetch: ef || eA || ej,
            applyEntitlements: !0,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            trialId: ei,
            metadata: ec,
          }),
          [eb, eD] = (0, L.ED)({
            subscriptionId: null == ep ? void 0 : ep.id,
            items: eC,
            renewal: !0,
            preventFetch: eA || ej,
            trialId: ei,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            metadata: ec,
          }),
          [eG, eU] = (0, L.ED)({
            items: [{ planId: F.Xh.PREMIUM_MONTH_TIER_2, quantity: 1 }],
            renewal: !0,
            preventFetch: !eL,
            trialId: ei,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            metadata: ec,
          }),
          [eF, eB] = (0, L.o5)({
            paymentSourceId: q.paymentSourceId,
            skuId: eN,
            subscriptionPlanId: X,
            currency: q.currency,
            preventFetch: !eA || ej,
            loadId: eP.loadId,
          });
        l.useEffect(() => {
          eh(eF);
        }, [eh, eF]);
        let ew = eA && (0, A.pO)(ev),
          eH =
            null !==
              (W =
                null !== (i = null != ey ? ey : eD) && void 0 !== i ? i : eU) &&
            void 0 !== W
              ? W
              : eB,
          ek = (0, c.e7)([h.Z], () => h.Z.enabled),
          eW = q.paymentSourceId,
          { hasEntitlements: eY, entitlements: eV } = (0, G.H)(eO.id, eA),
          eK = (0, M.Ap)(q.paymentSourceId),
          ez = (0, S.sE)(ei, eW, X),
          eX = (0, x.Kp)({
            isTrial: e_,
            isGift: eA,
            selectedSkuId: eN,
            startedPaymentFlowWithPaymentSources: ex.current,
            inReverseTrial: ef,
          }),
          [eJ, eq] = l.useState(null == eZ ? void 0 : eZ.subscriptionPeriodEnd);
        l.useEffect(() => {
          null == eJ && eq(null == eZ ? void 0 : eZ.subscriptionPeriodEnd);
        }, [null == eZ ? void 0 : eZ.subscriptionPeriodEnd, eJ]);
        let eQ = l.useMemo(
            () =>
              (0, M.V7)({
                skuId: eN,
                isPremium: eS,
                multiMonthPlans: [],
                currentSubscription: ep,
                isGift: eA,
                isEligibleForTrial: e_,
                defaultPlanId: eT,
                defaultToMonthlyPlan: !1,
              }),
            [eN, ep, eA, eT, eS, e_],
          ),
          e$ = (0, x.$g)(eX, eZ, eO),
          e0 = l.useMemo(
            () => (e_ && null != eZ ? eZ : ef && null != eb ? eb : void 0),
            [ef, e_, eZ, eb],
          );
        if (null != eH) {
          let [e, n] = (function (e) {
            if (e.code === E.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE)
              return [H.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY, null];
            if (e.code !== E.SM.INVALID_BILLING_ADDRESS)
              return [e.message, null];
            {
              let e = H.Z.Messages.LEARN_MORE_LINK.format({
                helpdeskArticle: v.Z.getArticleURL(B.BhN.BILLING).concat(
                  B.Bjg.INVALID_BILLING_ADDRESS,
                ),
              });
              return [H.Z.Messages.BILLING_ERROR_INVALID_BILLING_ADDRESS, e];
            }
          })(eH);
          K = (0, t.jsxs)(u.FormErrorBlock, { children: [e, " ", n] });
        } else if (eA && null != eF)
          z = (0, t.jsx)(D.e9, {
            plan: eO,
            className: k.invoice,
            isPrepaidPaymentSource: eK,
            isCustomGift: ew,
            invoicePreview: eF,
          });
        else if (null != e0)
          z = (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(j.KU, { negativeMarginTop: !ef }),
              (0, t.jsxs)(j.PO, {
                className: k.invoice,
                children: [
                  (0, t.jsxs)("div", {
                    className: k.trialPriceLine,
                    children: [
                      (0, t.jsx)(u.Text, {
                        variant: "text-md/bold",
                        children: H.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                      }),
                      (0, t.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: H.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                          price: (0, g.T4)(0, e0.currency, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: k.afterTrialPriceLine,
                    children: (0, t.jsx)(D.yT, { invoice: e0, plan: eO }),
                  }),
                ],
              }),
            ],
          });
        else {
          if (null == eZ || null == eb || e$)
            return (0, t.jsx)("div", {
              className: k.spinnerWrapper,
              children: (0, t.jsx)(u.Spinner, {}),
            });
          e_ &&
            eZ.subscriptionPeriodEnd !== eb.subscriptionPeriodEnd &&
            (V = eZ.subscriptionPeriodEnd),
            (z = (0, t.jsxs)(j.PO, {
              className: k.invoice,
              children: [
                (0, t.jsx)(j.q9, {
                  children: H.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS,
                }),
                (0, t.jsx)(D.Lu, {
                  invoice: eZ,
                  newPlan: eO,
                  isPrepaidPaymentSource: eK,
                  referralTrialOfferId: ed,
                }),
                eK
                  ? null
                  : (0, t.jsx)(D.nd, {
                      renewalInvoice: eb,
                      isTrial: e_,
                      priceOptions: q,
                      overrideRenewalDate: V,
                      trialFooterMessageOverride: er,
                      hideSubscriptionDetails: eu,
                    }),
              ],
            }));
        }
        let e1 = a.M.EEA_COUNTRIES.has(P.Z.ipCountryCodeWithFallback),
          {
            checkboxLabel: e9,
            checkboxClassname: e2,
            checkboxLabelClassname: e4,
          } = (function (e, n, s) {
            let t = null,
              l = null,
              i = null;
            if (e && null != n) {
              let { intervalType: e, intervalCount: r } =
                  M.ZP.getIntervalForInvoice(n),
                a = (0, g.og)((0, g.T4)(n.total, n.currency), e, r),
                c = null != s ? s : n.subscriptionPeriodEnd;
              (t =
                H.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format(
                  {
                    termsURL: B.EYA.TERMS,
                    paidURL: B.EYA.PAID_TERMS,
                    rate: a,
                    renewalDate: c,
                  },
                )),
                (l = k.trialCheckbox),
                (i = k.trialCheckboxLabel);
            }
            return {
              checkboxLabel: t,
              checkboxClassname: l,
              checkboxLabelClassname: i,
            };
          })(null != e_ && e_, eb, V),
          e8 = H.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
            planName: eO.name,
          });
        return (
          eA && !ew
            ? (e8 = H.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT)
            : eA && ew
              ? (e8 = "")
              : (0, M.PV)(eO.id) &&
                (e8 = M.ZP.getBillingReviewSubheader(null, eO)),
          ez
            ? null
            : (0, t.jsxs)("div", {
                className: k.stepBody,
                children: [
                  null != ea &&
                    (0, t.jsxs)("div", {
                      className: k.reviewWarningMessageContainer,
                      children: [
                        (0, t.jsx)(u.CircleInformationIcon, {
                          size: "custom",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 20,
                          height: 20,
                        }),
                        (0, t.jsx)(u.Text, {
                          className: k.reviewWarningMessage,
                          variant: "text-sm/normal",
                          children: ea,
                        }),
                      ],
                    }),
                  K,
                  eX &&
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(j.KU, {
                          negativeMarginTop: !0,
                          negativeMarginBottom: !0,
                        }),
                        (0, t.jsx)(C.Z, {}),
                        (0, t.jsx)(b.O, {
                          planOptions: eQ,
                          eligibleForMultiMonthPlans: !1,
                          referralTrialOfferId: void 0,
                          selectedPlanId: X,
                          subscriptionPeriodEnd: eJ,
                          showTotal: !1,
                          discountInvoiceItems: eL
                            ? null == eG
                              ? void 0
                              : eG.invoiceItems
                            : void 0,
                          handleClose: eI,
                        }),
                        (0, t.jsx)(j.KU, {}),
                      ],
                    }),
                  ef &&
                    (0, t.jsx)(u.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: k.trialHeader,
                      children:
                        H.Z.Messages.REVERSE_TRIAL_PAYMENT_MODAL_INFO.format({
                          trialEnd: null == ep ? void 0 : ep.currentPeriodEnd,
                        }),
                    }),
                  !e_ &&
                    (0, t.jsx)(u.FormTitle, {
                      tag: u.FormTitleTags.H5,
                      children: e8,
                    }),
                  ew &&
                    null != eM &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(y.Z, {
                          defaultAnimationState: R.SR.LOOP,
                          giftStyle: eM,
                          shouldAnimate: !0,
                          className: k.giftMainAnimation,
                        }),
                        (0, t.jsx)(U.s, { giftRecipient: ev }),
                      ],
                    }),
                  z,
                  (0, t.jsxs)("div", {
                    className: k.paymentSourceWrapper,
                    children: [
                      e_
                        ? (0, t.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            className: k.formTitle,
                            children: H.Z.Messages.BILLING_STEP_PAYMENT_METHOD,
                          })
                        : (0, t.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children:
                              H.Z.Messages
                                .PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                          }),
                      (0, t.jsx)(m.Z, {
                        paymentSources: Object.values(J),
                        selectedPaymentSourceId: eW,
                        prependOption:
                          eY && !e_
                            ? {
                                label:
                                  H.Z.Messages
                                    .ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null,
                              }
                            : null,
                        onChange: ee,
                        onPaymentSourceAdd: en,
                        hidePersonalInformation: ek,
                        isTrial: e_,
                      }),
                      eY && null == eW
                        ? (0, t.jsx)("div", {
                            className: k.paymentSourceOptionalWarning,
                            children:
                              H.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format(
                                { months: eV.length },
                              ),
                          })
                        : null,
                      em
                        ? null
                        : (0, t.jsxs)(d.b, {
                            currencies: Q,
                            className: k.currencyWrapper,
                            children: [
                              (0, t.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: H.Z.Messages.PAYMENT_CURRENCY,
                              }),
                              (0, t.jsx)(d.Z, {
                                selectedCurrency: q.currency,
                                currencies: Q,
                                onChange: $,
                              }),
                            ],
                          }),
                    ],
                  }),
                  (0, t.jsx)(Z.Z, {
                    isActive: el,
                    ref: et,
                    children: (0, t.jsx)(I.Z, {
                      onChange: es,
                      forceShow: !0,
                      checkboxLabel: e9,
                      checkboxClassname: e2,
                      checkboxLabelClassname: e4,
                      finePrint:
                        null !== (Y = !ef && er) && void 0 !== Y
                          ? Y
                          : (0, t.jsx)(_.Z, {
                              hide: e_ || em,
                              subscriptionPlan: eO,
                              renewalInvoice: eb,
                              isGift: eA,
                              paymentSourceType:
                                null === (s = J[null != eW ? eW : ""]) ||
                                void 0 === s
                                  ? void 0
                                  : s.type,
                              isEmbeddedIAP: eE,
                              basePrice: (0, M.aS)(eO.id, !1, eA, q),
                            }),
                      showPricingLink: eO.currency !== w.pK.USD,
                      showWithdrawalWaiver: e1,
                      disabled: ej,
                      isTrial: e_ && null == er,
                      inReverseTrial: ef,
                      isDiscount: em,
                      subscriptionPlan: eO,
                      isGift: eA,
                    }),
                  }),
                ],
              })
        );
      }
    },
    664891: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return D;
        },
      }),
        s(47120);
      var t = s(200651),
        l = s(192379),
        i = s(512722),
        r = s.n(i),
        a = s(742280),
        c = s(442837),
        o = s(481060),
        u = s(190947),
        d = s(224550),
        _ = s(275850),
        m = s(672971),
        I = s(100527),
        E = s(906732),
        p = s(987209),
        N = s(598),
        T = s(45572),
        S = s(614223),
        x = s(246946),
        h = s(351402),
        P = s(509545),
        f = s(74538),
        A = s(296848),
        v = s(374649),
        M = s(642530),
        g = s(653798),
        R = s(585602),
        L = s(314182),
        O = s(314404),
        C = s(42818),
        j = s(981631),
        Z = s(689938),
        y = s(658160),
        b = s(309951);
      function D(e) {
        var n;
        let s,
          {
            premiumSubscription: i,
            paymentSources: I,
            priceOptions: E,
            onPaymentSourceChange: v,
            onPaymentSourceAdd: R,
            planId: C,
            setHasAcceptedTerms: y,
            legalTermsNodeRef: D,
            hasLegalTermsFlash: H,
            onInvoiceError: k,
            planGroup: W,
            currencies: Y,
            onCurrencyChange: V,
            hasOpenInvoice: K,
            purchaseState: z,
            handleClose: X,
          } = e,
          {
            selectedSkuId: J,
            defaultPlanId: q,
            isPremium: Q,
            startedPaymentFlowWithPaymentSourcesRef: $,
          } = (0, N.usePaymentContext)(),
          { isGift: ee } = (0, p.wD)(),
          en = E.paymentSourceId,
          es = (0, c.e7)([P.Z], () => P.Z.get(C));
        r()(null != es, "Missing newPlan");
        let et = (0, c.e7)([x.Z], () => x.Z.hidePersonalInformation),
          el = a.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback),
          ei = z === T.A.PURCHASING || z === T.A.COMPLETED,
          er = (0, S.Kp)({
            isTrial: !1,
            isGift: ee,
            selectedSkuId: J,
            startedPaymentFlowWithPaymentSources: $.current,
          }),
          ea = (null == i ? void 0 : i.status) === j.O0b.PAUSED,
          ec = l.useMemo(
            () =>
              (0, f.V7)({
                skuId: J,
                isPremium: Q,
                multiMonthPlans: [],
                currentSubscription: i,
                isGift: ee,
                isEligibleForTrial: !1,
                defaultPlanId: q,
                defaultToMonthlyPlan: !1,
              }),
            [J, i, q, Q, ee],
          );
        s =
          K || ea
            ? Z.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER
            : (0, f.PV)(C)
              ? (0, f.W_)(i, es)
              : Z.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                  planName: es.name,
                });
        let eo = null;
        return (
          null != i &&
            (eo = K
              ? (0, t.jsx)(G, {
                  premiumSubscription: i,
                  onInvoiceError: k,
                  priceOptions: E,
                  preventFetch: !1,
                })
              : ea
                ? (0, t.jsx)(B, {
                    premiumSubscription: i,
                    onInvoiceError: k,
                    priceOptions: E,
                    preventFetch: ei,
                  })
                : (0, A.R4)(i, C, W)
                  ? (0, t.jsx)(U, {
                      premiumSubscription: i,
                      newPlan: es,
                      onInvoiceError: k,
                      planGroup: W,
                      priceOptions: E,
                      preventFetch: ei,
                    })
                  : (0, t.jsx)(w, {
                      premiumSubscription: i,
                      newPlan: es,
                      planGroup: W,
                      priceOptions: E,
                      preventFetch: ei,
                    })),
          (0, t.jsxs)("div", {
            className: b.stepBody,
            children: [
              !ea &&
                er &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)(g.KU, {
                      negativeMarginBottom: !0,
                      negativeMarginTop: !0,
                    }),
                    (0, t.jsx)(M.Z, {}),
                    (0, t.jsx)(O.O, {
                      planOptions: ec,
                      eligibleForMultiMonthPlans: !1,
                      selectedPlanId: C,
                      showTotal: !1,
                      handleClose: X,
                    }),
                    (0, t.jsx)(g.KU, {}),
                  ],
                }),
              (0, t.jsx)(o.FormTitle, { tag: o.FormTitleTags.H5, children: s }),
              eo,
              (0, t.jsxs)("div", {
                className: b.paymentSourceWrapper,
                children: [
                  (0, t.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children:
                      Z.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                  }),
                  (0, t.jsx)(_.Z, {
                    paymentSources: Object.values(I),
                    selectedPaymentSourceId: en,
                    onChange: v,
                    onPaymentSourceAdd: R,
                    hidePersonalInformation: et,
                    disabled: ei,
                  }),
                ],
              }),
              (0, t.jsxs)(u.b, {
                currencies: Y,
                className: b.currencyWrapper,
                children: [
                  (0, t.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children: Z.Z.Messages.PAYMENT_CURRENCY,
                  }),
                  (0, t.jsx)(u.Z, {
                    selectedCurrency: E.currency,
                    currencies: Y,
                    onChange: V,
                    disabled: ei,
                  }),
                ],
              }),
              (0, t.jsx)(L.Z, {
                isActive: H,
                ref: D,
                children:
                  null != i && (0, A.R4)(i, C, W)
                    ? (0, t.jsx)(F, {
                        premiumSubscription: i,
                        newPlan: es,
                        onInvoiceError: k,
                        planGroup: W,
                        priceOptions: E,
                        preventFetch: ei,
                        disabled: ei,
                        isEEA: el,
                        paymentSources: I,
                        setHasAcceptedTerms: y,
                      })
                    : (0, t.jsx)(m.Z, {
                        onChange: y,
                        finePrint: (0, t.jsx)(d.Z, {
                          subscriptionPlan: es,
                          paymentSourceType:
                            null === (n = I[null != en ? en : ""]) ||
                            void 0 === n
                              ? void 0
                              : n.type,
                          basePrice: (0, f.aS)(es.id, !1, ee, E),
                          currentSubscription: i,
                          planGroup: W,
                        }),
                        forceShow: !0,
                        showPricingLink: es.currency !== j.pKx.USD,
                        showWithdrawalWaiver: el,
                        disabled: ei,
                        subscriptionPlan: es,
                        currentSubscription: i,
                        planGroup: W,
                      }),
              }),
            ],
          })
        );
      }
      function G(e) {
        let {
            premiumSubscription: n,
            onInvoiceError: s,
            priceOptions: i,
            preventFetch: r,
          } = e,
          [a, c] = (0, v.Ox)({ subscriptionId: n.id, preventFetch: r });
        l.useEffect(() => {
          s(c);
        }, [s, c]);
        let u = (0, f.Ap)(i.paymentSourceId);
        return null != a
          ? (0, t.jsxs)(g.PO, {
              className: y.__invalid_invoice,
              children: [
                (0, t.jsx)(C.By, { invoice: a, isPrepaidPaymentSource: u }),
                (0, t.jsx)(C.nd, {
                  premiumSubscription: n,
                  renewalInvoice: a,
                  isUpdate: !0,
                  isPrepaidPaymentSource: u,
                }),
              ],
            })
          : (0, t.jsx)(o.Spinner, {});
      }
      function U(e) {
        let {
            premiumSubscription: n,
            newPlan: s,
            onInvoiceError: i,
            planGroup: r,
            priceOptions: a,
            preventFetch: c,
          } = e,
          { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0,
          N.usePaymentContext)(),
          { isGift: _ } = (0, p.wD)(),
          { analyticsLocations: m } = (0, E.ZP)(),
          T = (0, f.al)(n, s.id, 1, new Set(r)),
          [x, h] = (0, v.ED)({
            subscriptionId: n.id,
            items: T,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: m,
            analyticsLocation:
              I.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
          }),
          [P, A] = (0, v.ED)({
            subscriptionId: n.id,
            items: T,
            renewal: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: m,
            analyticsLocation:
              I.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          }),
          M = null != h ? h : A;
        if (
          (l.useEffect(() => {
            i(M);
          }, [i, M]),
          null != M)
        )
          return (0, t.jsx)(o.FormErrorBlock, { children: M.message });
        let R = (0, S.Kp)({
            isTrial: !1,
            isGift: _,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current,
          }),
          L = (0, S.$g)(R, x, s);
        if (null == x || null == P || L)
          return (0, t.jsx)(o.Spinner, { className: b.__invalid_spinner });
        let O = (0, f.Ap)(a.paymentSourceId);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(C.hG, { proratedInvoice: x, renewalInvoice: P }),
            (0, t.jsxs)(g.PO, {
              className: b.invoice,
              children: [
                (0, t.jsx)(g.q9, {
                  children: Z.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS,
                }),
                (0, t.jsx)(C.Lu, {
                  invoice: x,
                  newPlan: s,
                  isPrepaidPaymentSource: O,
                }),
                (0, t.jsx)(C.nd, {
                  premiumSubscription: n,
                  proratedInvoice: x,
                  renewalInvoice: P,
                  isUpdate: !0,
                  isPrepaidPaymentSource: O,
                }),
              ],
            }),
          ],
        });
      }
      function F(e) {
        var n, s;
        let i,
          {
            premiumSubscription: r,
            newPlan: a,
            onInvoiceError: c,
            planGroup: u,
            priceOptions: _,
            preventFetch: p,
            disabled: N,
            isEEA: T,
            paymentSources: S,
            setHasAcceptedTerms: x,
          } = e,
          { analyticsLocations: h } = (0, E.ZP)(),
          P = (0, f.al)(r, a.id, 1, new Set(u)),
          [A, M] = (0, v.ED)({
            subscriptionId: r.id,
            items: P,
            renewal: !0,
            paymentSourceId: _.paymentSourceId,
            currency: _.currency,
            preventFetch: p,
            analyticsLocations: h,
            analyticsLocation:
              I.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          });
        return (l.useEffect(() => {
          c(M);
        }, [c, M]),
        null != M)
          ? (0, t.jsx)(o.FormErrorBlock, { children: M.message })
          : (null != A &&
                (i = {
                  amount: A.total,
                  currency: A.currency,
                  tax: A.tax,
                  taxInclusive: A.taxInclusive,
                }),
              null == i)
            ? null
            : (0, t.jsx)(m.Z, {
                onChange: x,
                finePrint: (0, t.jsx)(d.Z, {
                  subscriptionPlan: a,
                  paymentSourceType:
                    null ===
                      (n =
                        S[
                          null !== (s = _.paymentSourceId) && void 0 !== s
                            ? s
                            : ""
                        ]) || void 0 === n
                      ? void 0
                      : n.type,
                  basePrice: i,
                  currentSubscription: r,
                  planGroup: u,
                }),
                forceShow: !0,
                showPricingLink: a.currency !== j.pKx.USD,
                showWithdrawalWaiver: T,
                disabled: N,
                subscriptionPlan: a,
                currentSubscription: r,
                planGroup: u,
              });
      }
      function B(e) {
        let {
            premiumSubscription: n,
            priceOptions: s,
            preventFetch: i,
            onInvoiceError: r,
          } = e,
          { analyticsLocations: a } = (0, E.ZP)(),
          [c, u] = (0, v.ED)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation:
              I.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
          }),
          [d, _] = (0, v.ED)({
            subscriptionId: n.id,
            renewal: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation:
              I.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
          }),
          m = null != u ? u : _;
        if (
          (l.useEffect(() => {
            r(m);
          }, [r, m]),
          null != m)
        )
          return (0, t.jsx)(o.FormErrorBlock, { children: m.message });
        if (null == c || null == d)
          return (0, t.jsx)(o.Spinner, { className: b.__invalid_spinner });
        let p = (0, f.Ap)(s.paymentSourceId);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: y.renewalInvoiceDate,
              children:
                Z.Z.Messages.BILLING_RESUME_PAUSED_SUBSCRIPTION_IMMEDIATELY,
            }),
            (0, t.jsxs)(g.PO, {
              className: b.invoice,
              children: [
                (0, t.jsx)(g.q9, {
                  children: Z.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS,
                }),
                (0, t.jsx)(C.By, { invoice: c, isPrepaidPaymentSource: p }),
                (0, t.jsx)(C.nd, {
                  premiumSubscription: n,
                  renewalInvoice: d,
                  isUpdate: !0,
                  isPrepaidPaymentSource: p,
                }),
              ],
            }),
          ],
        });
      }
      function w(e) {
        let n,
          {
            premiumSubscription: s,
            newPlan: l,
            planGroup: i,
            priceOptions: r,
            preventFetch: a,
          } = e,
          { analyticsLocations: c } = (0, E.ZP)(),
          [u, d] = (0, v.ED)({
            subscriptionId: s.id,
            items: (0, f.al)(s, l.id, 1, new Set(i)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation:
              "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
          });
        if (null != d)
          return (0, t.jsx)(o.FormErrorBlock, { children: d.message });
        if (null == u)
          return (0, t.jsx)("div", { children: (0, t.jsx)(o.Spinner, {}) });
        n = s.type === j.NYc.PREMIUM ? (0, f.Gf)(l.id) : l.name;
        let _ = (0, f.Ap)(r.paymentSourceId);
        return (0, t.jsxs)("div", {
          className: b.bodyText,
          children: [
            (0, t.jsx)("div", {
              className: y.renewalInvoiceDate,
              children: Z.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                renewalDate: u.subscriptionPeriodStart,
              }),
            }),
            (0, t.jsxs)(g.PO, {
              className: b.invoice,
              children: [
                (0, t.jsx)(g.q9, {
                  children: Z.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES,
                }),
                (0, t.jsx)(g.R$, { label: n, value: (0, f.PK)(l, r, !0) }),
                (0, t.jsx)(R.Z, { invoice: u }),
                (0, t.jsx)(g.KU, {}),
                (0, t.jsx)(C.nd, {
                  premiumSubscription: s,
                  renewalInvoice: u,
                  isUpdate: !0,
                  isPrepaidPaymentSource: _,
                }),
              ],
            }),
          ],
        });
      }
    },
    196567: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = s(200651);
      s(192379);
      var l = s(120356),
        i = s.n(l),
        r = s(481060),
        a = s(203748);
      function c(e) {
        let {
          className: n,
          copy: s,
          bannerImage: l,
          textColor: c = "always-white",
          hideGiftIcon: o = !1,
        } = e;
        return (0, t.jsxs)("div", {
          className: i()(a.bannerContainer, n),
          children: [
            null == l
              ? null
              : (0, t.jsx)("img", { alt: "", className: a.banner, src: l }),
            (0, t.jsxs)("div", {
              className: a.textContainer,
              children: [
                !1 === o &&
                  (0, t.jsx)(r.GiftIcon, {
                    size: "md",
                    color: "currentColor",
                    className: a.giftIcon,
                  }),
                (0, t.jsx)(r.Heading, {
                  className: i()(a.textHeader, {
                    [a.textHeaderWithGiftIcon]: !o,
                  }),
                  color: c,
                  variant: "eyebrow",
                  children: s,
                }),
              ],
            }),
          ],
        });
      }
    },
    993413: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return _;
        },
      }),
        s(757143);
      var t = s(200651);
      s(192379);
      var l = s(120356),
        i = s.n(l),
        r = s(481060),
        a = s(403182),
        c = s(587446),
        o = s(504983),
        u = s(651523);
      function d(e) {
        let { errors: n } = e;
        return (0, t.jsx)(t.Fragment, {
          children: n.map((e, n) =>
            (0, t.jsx)(
              r.Text,
              {
                variant: "text-xs/normal",
                color: "text-danger",
                className: u.errorMessage,
                children: e.replace(/[0-9.,]+ ?kb/g, (e) => {
                  let n = 1024 * parseInt(e, 10);
                  return isNaN(n) ? e : (0, a.Ng)(n);
                }),
              },
              n,
            ),
          ),
        });
      }
      function _(e) {
        let {
          title: n,
          titleIcon: s,
          titleId: l,
          description: a,
          children: _,
          className: m,
          errors: I,
          disabled: E = !1,
          hideDivider: p = !1,
          showBorder: N = !1,
          borderType: T,
          hasBackground: S = !1,
          forcedDivider: x = !1,
          showPremiumIcon: h = !1,
        } = e;
        return (0, t.jsx)("div", {
          className: i()(u.customizationSection, m, {
            [u.disabled]: E,
            [u.hideDivider]: p,
            [u.showBorder]: N,
            [u.withDivider]: x,
          }),
          children: (0, t.jsxs)(o.Z, {
            className: u.customizationSectionBorder,
            backgroundClassName: u.customizationSectionBackground,
            isShown: N,
            type: T,
            hasBackground: S,
            children: [
              (0, t.jsxs)(r.FormTitle, {
                className: u.title,
                id: l,
                children: [n, h && (0, t.jsx)(c.Z, {}), s],
              }),
              null != a
                ? (0, t.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: u.sectionDescription,
                    children: a,
                  })
                : null,
              _,
              null != I && (0, t.jsx)(d, { errors: I }),
            ],
          }),
        });
      }
    },
    504983: function (e, n, s) {
      s.d(n, {
        Y: function () {
          return l;
        },
      });
      var t,
        l,
        i = s(200651),
        r = s(192379),
        a = s(120356),
        c = s.n(a),
        o = s(261842);
      ((t = l || (l = {})).PREMIUM = "premium"), (t.LIMITED = "limited");
      let u = {
        premium: {
          border: o.premiumFeatureBorder,
          background: o.premiumBackground,
        },
        limited: {
          border: o.limitedFeatureBorder,
          background: o.limitedBackground,
        },
      };
      n.Z = r.forwardRef(function (e, n) {
        let {
          children: s,
          type: t = "premium",
          isShown: l,
          hasBackground: r = !1,
          className: a,
          backgroundClassName: d,
        } = e;
        if (!l) return (0, i.jsx)(i.Fragment, { children: s });
        let { border: _, background: m } = u[t];
        return (0, i.jsx)("div", {
          ref: n,
          className: c()(_, a),
          children: (0, i.jsx)("div", {
            className: c()(r ? m : o.background, d),
            children: s,
          }),
        });
      });
    },
    911367: function (e, n, s) {
      s.d(n, {
        t: function () {
          return i;
        },
      });
      var t = s(192379),
        l = s(365943);
      function i() {
        t.useEffect(() => {
          (0, l.z)();
        }, []);
      }
    },
    321051: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return m;
        },
      }),
        s(47120);
      var t = s(200651),
        l = s(192379),
        i = s(692547),
        r = s(481060),
        a = s(697426),
        c = s(603074),
        o = s(689938),
        u = s(599215);
      let d = [54, 8, 8, 8];
      function _(e) {
        let { onSelect: n, sound: s } = e,
          [_, m] = l.useState(!1);
        function I(e) {
          m(!1), null == n || n(e);
        }
        let E = (e) =>
          (0, t.jsxs)("div", {
            className: u.customGiftHeader,
            children: [
              (0, t.jsxs)("div", {
                className: u.__invalid_customGiftHeaderText,
                children: [
                  (0, t.jsx)(r.Text, {
                    variant: "text-md/bold",
                    children: o.Z.Messages.GIFT_SELECT_SOUND,
                  }),
                  (0, t.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children:
                      o.Z.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION,
                  }),
                ],
              }),
              (0, t.jsx)("div", { className: u.searchAndSound, children: e }),
            ],
          });
        return (0, t.jsx)(r.Popout, {
          shouldShow: _,
          position: "bottom",
          align: "left",
          onRequestClose: () => m(!1),
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, t.jsx)(r.Dialog, {
              children: (0, t.jsx)(c.Z, {
                suppressPlaySound: !0,
                shouldShowUpsell: !1,
                guildId: null,
                channel: null,
                onClose: n,
                onSelect: I,
                analyticsSource: "gift soundboard",
                soundButtonOverlay: a.Pb.ADD,
                listPadding: d,
                renderHeader: E,
                defaultSoundsOnly: !0,
              }),
            });
          },
          children: () =>
            (0, t.jsx)(r.Clickable, {
              className: u.sound,
              onClick: () => m(!0),
              children:
                null == s
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(r.SoundboardIcon, {
                          size: "custom",
                          color: i.Z.colors.WHITE,
                          className: u.soundIcon,
                          width: 14,
                          height: 14,
                        }),
                        (0, t.jsx)(r.Text, {
                          className: u.text,
                          variant: "text-sm/semibold",
                          children: o.Z.Messages.GIFT_SELECT_SOUND,
                        }),
                      ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(r.Text, {
                          className: u.textSelected,
                          variant: "text-sm/semibold",
                          children: s.emojiName,
                        }),
                        (0, t.jsx)(r.Text, {
                          className: u.text,
                          variant: "text-sm/semibold",
                          children: s.name,
                        }),
                      ],
                    }),
            }),
        });
      }
      function m(e) {
        let { sound: n, onSelect: s } = e;
        return (0, t.jsx)("div", {
          className: u.container,
          children: (0, t.jsx)(_, { onSelect: s, sound: n }),
        });
      }
    },
    991862: function (e, n, s) {
      s.d(n, {
        T: function () {
          return l;
        },
      });
      var t = s(689938);
      function l(e) {
        switch (e) {
          case "brl":
            return t.Z.Messages.BRL_NAME;
          case "pln":
            return t.Z.Messages.PLN_NAME;
          case "try":
            return t.Z.Messages.TRY_NAME;
          case "usd":
            return t.Z.Messages.USD_NAME;
          case "aud":
            return t.Z.Messages.AUD_NAME;
          case "pen":
            return t.Z.Messages.PEN_NAME;
          case "php":
            return t.Z.Messages.PHP_NAME;
          case "ars":
            return t.Z.Messages.ARS_NAME;
          case "cop":
            return t.Z.Messages.COP_NAME;
          case "clr":
            return t.Z.Messages.CLR_NAME;
          case "jpy":
            return t.Z.Messages.JPY_NAME;
          case "idr":
            return t.Z.Messages.IDR_NAME;
          case "vnd":
            return t.Z.Messages.VND_NAME;
          case "thb":
            return t.Z.Messages.THB_NAME;
          case "myr":
            return t.Z.Messages.MYR_NAME;
          case "krw":
            return t.Z.Messages.KRW_NAME;
          case "mxn":
            return t.Z.Messages.MXN_NAME;
          case "bgn":
            return t.Z.Messages.BGN_NAME;
          case "czk":
            return t.Z.Messages.CZK_NAME;
          case "dkk":
            return t.Z.Messages.DKK_NAME;
          case "huf":
            return t.Z.Messages.HUF_NAME;
          case "ron":
            return t.Z.Messages.RON_NAME;
          case "sek":
            return t.Z.Messages.SEK_NAME;
          case "eur":
            return t.Z.Messages.EUR_NAME;
          default:
            return "";
        }
      }
    },
    959191: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/ccb58f853a6377b4d3c71973f1edb58f8b4258618d1f8ef635b44b0c7fadc0c4.png";
    },
  },
]);
//# sourceMappingURL=e095d95da20c5a57c4d9.js.map
