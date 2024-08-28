"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18209"],
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
    190947: function (e, n, t) {
      t.d(n, {
        b: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(991862);
      function s(e) {
        let { currencies: n, className: t, children: a } = e;
        return n.length < 2
          ? null
          : (0, i.jsx)("div", { className: t, children: a });
      }
      n.Z = function (e) {
        let {
          currencies: n,
          onChange: t,
          selectedCurrency: s,
          className: l,
          disabled: o = !1,
        } = e;
        if (n.length < 2) return null;
        let c = n.map((e, n) => ({
          key: n,
          value: e,
          label: "".concat(e.toUpperCase(), " - ").concat((0, r.T)(e)),
        }));
        return (0, i.jsx)(a.SingleSelect, {
          value: s,
          options: c,
          onChange: (e) => {
            null != e && t(e);
          },
          className: l,
          isDisabled: o,
        });
      };
    },
    86040: function (e, n, t) {
      t.d(n, {
        C: function () {
          return o;
        },
        N: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(600164),
        s = t(689938),
        l = t(192055);
      let o = (e) => {
          let { className: n, isEmailResent: t, resendEmail: r } = e;
          return (0, i.jsx)("div", {
            className: n,
            children: (0, i.jsxs)("div", {
              className: l.awaitingWrapper,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-xl/bold",
                  children:
                    s.Z.Messages
                      .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER,
                }),
                (0, i.jsxs)("p", {
                  children: [
                    (0, i.jsx)(a.Text, {
                      variant: "text-md/normal",
                      children:
                        s.Z.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL,
                    }),
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)(a.Text, {
                      variant: "text-md/normal",
                      children:
                        s.Z.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS,
                    }),
                    (0, i.jsx)("br", {}),
                    (0, i.jsxs)(a.Text, {
                      variant: "text-md/normal",
                      children: [
                        s.Z.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT,
                        "\xa0",
                        t
                          ? s.Z.Messages
                              .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT
                          : (0, i.jsx)(a.Anchor, {
                              onClick: r,
                              children:
                                s.Z.Messages
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
        c = () =>
          (0, i.jsx)("div", {
            children: (0, i.jsx)(a.ModalFooter, {
              justify: r.Z.Justify.BETWEEN,
              align: r.Z.Align.CENTER,
              children: (0, i.jsx)(a.Button, {
                "data-testid": "continue",
                color: a.Button.Colors.BRAND,
                disabled: !0,
                children:
                  s.Z.Messages
                    .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON,
              }),
            }),
          });
    },
    620037: function (e, n, t) {
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2023-12_collectibles_gifting_dm_entrypoint",
        label: "Collectibles Gifting From DM's",
        defaultConfig: { confirmUpsellEnabled: !1 },
        treatments: [
          {
            id: 2,
            label:
              "Collectibles Gifting from DM's Enabled With Confirm Step Upsell",
            config: { confirmUpsellEnabled: !0 },
          },
        ],
      });
      n.Z = (e) => {
        let {
          location: n,
          autoTrackExposure: t = !0,
          trackExposureOptions: a = {},
        } = e;
        return i.useExperiment(
          { location: n },
          { autoTrackExposure: t, trackExposureOptions: a },
        );
      };
    },
    940824: function (e, n, t) {
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(37234),
        s = t(100527),
        l = t(906732),
        o = t(703656),
        c = t(335131),
        u = t(981631),
        d = t(689938),
        _ = t(715125);
      n.Z = (e) => {
        let { onClose: n } = e,
          { analyticsLocations: t } = (0, l.ZP)(),
          p = () => {
            n(),
              (0, o.uL)(u.Z5c.COLLECTIBLES_SHOP),
              (0, c.mK)({
                openInLayer: !1,
                analyticsSource: s.Z.PREMIUM_PAYMENT_MODAL,
                analyticsLocations: t,
              }),
              (0, r.xf)();
          };
        return (0, i.jsxs)("div", {
          className: _.container,
          children: [
            (0, i.jsx)("div", {
              className: _.iconBackground,
              children: (0, i.jsx)(a.ShopIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: a.tokens.colors.WHITE,
              }),
            }),
            (0, i.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              children: d.Z.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format(
                {
                  checkItOut: (e) =>
                    (0, i.jsx)(a.Clickable, {
                      className: _.link,
                      onClick: p,
                      children: e,
                    }),
                },
              ),
            }),
          ],
        });
      };
    },
    632580: function (e, n, t) {
      t.d(n, {
        H: function () {
          return f;
        },
      }),
        t(47120);
      var i = t(512722),
        a = t.n(i),
        r = t(570140),
        s = t(355467),
        l = t(976255),
        o = t(366939),
        c = t(16084),
        u = t(255078),
        d = t(626135),
        _ = t(74538),
        p = t(45572),
        m = t(981631),
        I = t(474936);
      async function f(e) {
        let {
          setPurchaseState: n,
          setHasAcceptedTerms: t,
          setIsSubmitting: i,
          setPurchaseError: f,
          hasRedirectURL: E,
          setHasRedirectURL: x,
          isGift: N,
          baseAnalyticsData: S,
          analyticsLocation: T,
          analyticsLocations: h,
          flowStartTime: b,
          subscriptionPlan: g,
          planGroup: P,
          trialId: v,
          priceOptions: A,
          paymentSource: M,
          isPrepaidPaymentPastDue: y,
          openInvoiceId: C,
          premiumSubscription: O,
          onNext: R,
          metadata: L,
          sku: j,
          skuPricePreview: Z,
          purchaseType: D,
          referralCode: w,
          loadId: G,
          giftInfoOptions: B,
          invoicePreview: U,
        } = e;
        n(p.A.PURCHASING), t(!0), i(!0), r.Z.wait(l.fw), f(null);
        try {
          let e, t, i;
          if (
            (d.default.track(m.rMx.PAYMENT_FLOW_COMPLETED, {
              ...S,
              subtotal: null == U ? void 0 : U.subtotal,
              tax: null == U ? void 0 : U.tax,
              expected_amount: null == U ? void 0 : U.total,
              expected_currency: null == U ? void 0 : U.currency,
              duration_ms: Date.now() - b,
            }),
            E)
          )
            return;
          if (D === m.GZQ.ONE_TIME)
            a()(null != j, "SKU must exist and be fetched."),
              a()(null != Z, "SKUPricePreview must exist."),
              (e = await (0, c.ZZ)(j.applicationId, j.id, {
                expectedAmount: Z.amount,
                expectedCurrency: Z.currency,
                isGift: N,
                paymentSource: M,
                loadId: G,
                giftInfoOptions: B,
              }));
          else if ((a()(null != g, "Missing subscriptionPlan"), N)) {
            a()(null != U, "Missing invoicePreview");
            let n = U.total,
              t = U.currency;
            e = await (0, c.ZZ)(I.RQ, g.skuId, {
              expectedAmount: n,
              expectedCurrency: t,
              paymentSource: M,
              subscriptionPlanId: g.id,
              isGift: !0,
              loadId: G,
              giftInfoOptions: B,
            });
          } else if (y && null != C && null != M && null != O)
            e = m.Uk1.has(M.type)
              ? await (0, s.G)(O, C, M, A.currency)
              : await (0, s.Mg)(
                  O,
                  { paymentSource: M, currency: A.currency },
                  h,
                  T,
                  G,
                );
          else if (null != O) {
            let n = (0, _.al)(O, g.id, 1, new Set(P)),
              t = { paymentSource: M, currency: A.currency };
            O.status === m.O0b.PAUSED
              ? (t.status = m.O0b.ACTIVE)
              : (t.items = n),
              (e = await (0, s.Mg)(O, t, h, T, G));
          } else
            e = await (0, o.Ld)({
              planId: g.id,
              currency: A.currency,
              paymentSource: M,
              trialId: v,
              metadata: L,
              referralCode: w,
              loadId: G,
            });
          if (e.redirectConfirmation) {
            x(null != e.redirectURL);
            return;
          }
          n(p.A.COMPLETED),
            "subscription" in e
              ? (t =
                  null != e.subscription
                    ? u.Z.createFromServer(e.subscription)
                    : null)
              : "entitlements" in e &&
                (i = null != e.entitlements ? e.entitlements : void 0),
            R(t, i);
        } catch (e) {
          n(p.A.FAIL),
            f(e),
            d.default.track(m.rMx.PAYMENT_FLOW_FAILED, {
              ...S,
              payment_error_code: null == e ? void 0 : e.code,
              payment_source_id: null == M ? void 0 : M.id,
              payment_source_type: null == M ? void 0 : M.type,
              duration_ms: Date.now() - b,
            });
        } finally {
          !E && i(!1);
        }
      }
    },
    276442: function (e, n, t) {
      t.d(n, {
        J: function () {
          return f;
        },
      });
      var i = t(512722),
        a = t.n(i),
        r = t(792986),
        s = t(639119),
        l = t(3409),
        o = t(626135),
        c = t(987209),
        u = t(598),
        d = t(409813),
        _ = t(45572),
        p = t(737143),
        m = t(981631),
        I = t(474936);
      function f(e) {
        let {
            analyticsData: n,
            initialPlanId: t,
            breadcrumbSteps: i,
            handleStepChange: f,
            referralTrialOfferId: E,
            onReturn: x,
            continueSession: N = !1,
          } = e,
          {
            contextMetadata: S,
            step: T,
            paymentSources: h,
            paymentSourceId: b,
            setPaymentSourceId: g,
            purchaseError: P,
            setPurchaseError: v,
            purchaseErrorBlockRef: A,
            paymentAuthenticationState: M,
            selectedSkuId: y,
            activeSubscription: C,
            previousStepRef: O,
            setPurchaseState: R,
          } = (0, u.usePaymentContext)(),
          { isGift: L } = (0, c.wD)(),
          j = {
            ...(0, l.fL)(),
            paymentSources: h,
            paymentSourceId: b,
            setPaymentSourceId: g,
            purchaseError: P,
            setPurchaseError: v,
            purchaseErrorBlockRef: A,
            paymentAuthenticationState: M,
            selectedSkuId: y,
            isGift: L,
          },
          Z = (0, s.N)(E),
          D = !L && null != Z && null != y && I.nG[Z.trial_id].skus.includes(y),
          w =
            null != x
              ? x
              : () => {
                  f(
                    Object.values(h).length < 1 && null == t
                      ? d.h8.PLAN_SELECT
                      : d.h8.REVIEW,
                    { trackedFromStep: d.h8.PAYMENT_TYPE },
                  );
                };
        a()(T, "Step should be set here");
        let G = (0, r.Z)(() => Date.now(), [T]);
        return (0, l.vP)({
          paymentModalArgs: j,
          initialStep:
            N && null == O.current
              ? d.h8.CREDIT_CARD_INFORMATION
              : d.h8.PAYMENT_TYPE,
          prependSteps: [d.h8.PROMOTION_INFO],
          appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
          breadcrumpSteps: i,
          currentBreadcrumpStep: T,
          usePaymentModalStep: !0,
          onReturn: w,
          onComplete: (e) => {
            e === d.h8.AWAITING_BROWSER_CHECKOUT
              ? (R(_.A.COMPLETED), f(d.h8.CONFIRM, { trackedFromStep: e }))
              : f(d.h8.REVIEW, { trackedFromStep: e });
          },
          onStepChange: (e) => {
            let { currentStep: t, toStep: i } = e,
              a = Date.now();
            o.default.track(m.rMx.PAYMENT_FLOW_STEP, {
              ...n,
              from_step: t,
              to_step: i,
              step_duration_ms: a - G,
              flow_duration_ms: a - S.startTime,
            });
          },
          isEligibleForTrial: D,
          allowDesktopRedirectPurchase: (0, p.tr)(y, L, C),
        });
      }
    },
    793541: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(723484),
        r = t(51499),
        s = t(614277),
        l = t(599181);
      function o() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.Z, {}),
            (0, i.jsx)(s.C3, {
              children: (0, i.jsx)(a.F, {
                className: l.awaitingAuthenticationStep,
              }),
            }),
          ],
        });
      }
    },
    380898: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        r = t(16084),
        s = t(86040),
        l = t(51499),
        o = t(614277),
        c = t(746326);
      function u() {
        let [e, n] = a.useState(!1),
          t = async () => {
            n(!0), await (0, r.xA)();
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(l.Z, {}),
            (0, i.jsx)(o.C3, {
              children: (0, i.jsx)(s.C, {
                className: c.body,
                isEmailResent: e,
                resendEmail: t,
              }),
            }),
            (0, i.jsx)(o.O3, { children: (0, i.jsx)(s.N, {}) }),
          ],
        });
      }
    },
    710094: function (e, n, t) {
      t.d(n, {
        l: function () {
          return M;
        },
      }),
        t(47120),
        t(411104);
      var i = t(735250),
        a = t(470079),
        r = t(512722),
        s = t.n(r),
        l = t(330726),
        o = t(711459),
        c = t(104494),
        u = t(639119),
        d = t(716534),
        _ = t(664891),
        p = t(911367),
        m = t(669079),
        I = t(987209),
        f = t(598),
        E = t(409813),
        x = t(809144),
        N = t(698708),
        S = t(614223),
        T = t(481595),
        h = t(51499),
        b = t(678334),
        g = t(614277),
        P = t(474936),
        v = t(231338),
        A = t(689938);
      function M(e) {
        var n, t;
        let r,
          {
            handleStepChange: M,
            trialId: y,
            trialFooterMessageOverride: C,
            reviewWarningMessage: O,
            planGroup: R,
            openInvoiceId: L,
            analyticsData: j,
            analyticsLocation: Z,
            referralTrialOfferId: D,
            initialPlanId: w,
            subscriptionTier: G,
            handleClose: B,
          } = e,
          {
            activeSubscription: U,
            setUpdatedSubscription: k,
            contextMetadata: F,
            currencies: W,
            paymentSourceId: H,
            paymentSources: Y,
            priceOptions: V,
            purchaseError: K,
            purchaseTokenAuthState: z,
            selectedPlan: X,
            selectedSkuId: q,
            setCurrency: J,
            setPaymentSourceId: Q,
            setPurchaseState: $,
            setPurchaseError: ee,
            step: en,
            purchaseState: et,
            isPremium: ei,
            setHasAcceptedTerms: ea,
            purchaseType: er,
            setEntitlementsGranted: es,
            startedPaymentFlowWithPaymentSourcesRef: el,
            invoicePreview: eo,
            inReverseTrial: ec,
          } = (0, f.usePaymentContext)(),
          { isGift: eu, giftMessage: ed, giftRecipient: e_ } = (0, I.wD)();
        s()(null != en, "Step should be set");
        let ep = a.useRef(null),
          [em, eI] = (0, l.Z)(!1, 500);
        (0, p.t)();
        let ef = null !== (t = null != y ? y : D) && void 0 !== t ? t : null,
          eE = null != ef && (!ei || P.nG[ef].skus.includes(q)) ? ef : null,
          ex = (0, u.N)(D),
          eN = (0, c.Ng)(),
          eS = { user_trial_offer_id: null == ex ? void 0 : ex.id };
        a.useEffect(() => {
          null != K &&
            null != ep.current &&
            ep.current.scrollIntoView({ behavior: "smooth" });
        }, [K]);
        let eT = a.useCallback(
            (e, n) => {
              k(e),
                null != n && es(n),
                M(E.h8.CONFIRM, {
                  fulfillment: { subscription: e, entitlements: n },
                });
            },
            [M, k, es],
          ),
          eh = null != H ? Y[H] : null,
          eb =
            null != X && P.o4.has(X.id) && null != eh && !(0, o.aQ)(eh)
              ? Error(
                  A.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE,
                )
              : null,
          eg = a.useRef(null),
          [eP, ev] = a.useState(null),
          eA =
            !eu &&
            null != ex &&
            null != q &&
            P.nG[ex.trial_id].skus.includes(q),
          eM =
            null == eN
              ? void 0
              : null === (n = eN.discount) || void 0 === n
                ? void 0
                : n.plan_ids,
          ey =
            !eu && null != eN && null != eM && null != X && eM.includes(X.id),
          eC = eu && (0, m.pO)(e_),
          eO = null == w && null == G && er === v.GZ.SUBSCRIPTION,
          eR = (0, S.Kp)({
            isTrial: eA,
            isGift: eu,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: el.current,
          }),
          eL = eu && er === v.GZ.ONE_TIME,
          ej = eL || (eR ? eO && ei : ei),
          eZ = a.useCallback(() => {
            if (eR) {
              M(E.h8.SKU_SELECT);
              return;
            }
            return eL ? M(E.h8.GIFT_CUSTOMIZATION) : M(E.h8.PLAN_SELECT);
          }, [M, eR, eL]),
          eD = !1;
        return (
          er === v.GZ.ONE_TIME
            ? (r = (0, i.jsx)(T.Z, {
                hasLegalTermsFlash: em,
                legalTermsNodeRef: eg,
                onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS),
              }))
            : ((eD = eu
                ? null == eo
                : null != eh &&
                  er === v.GZ.SUBSCRIPTION &&
                  eA &&
                  !eh.canRedeemTrial()),
              null == U || ec || eu
                ? (s()(null != X, "Expected plan to be selected"),
                  (r = (0, i.jsx)(d.Z, {
                    selectedPlanId: X.id,
                    paymentSources: Y,
                    onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                    priceOptions: V,
                    currencies: W,
                    onCurrencyChange: (e) => J(e),
                    handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: ea,
                    legalTermsNodeRef: eg,
                    hasLegalTermsFlash: em,
                    trialId: eE,
                    trialFooterMessageOverride: C,
                    reviewWarningMessage: O,
                    purchaseState: et,
                    referralTrialOfferId: D,
                    isTrial: eA || (null != y && null != C),
                    isDiscount: ey,
                    handleClose: B,
                  })))
                : (s()(null != X, "Expected plan to be selected"),
                  (r = (0, i.jsx)(_.Z, {
                    premiumSubscription: U,
                    paymentSources: Y,
                    priceOptions: V,
                    onPaymentSourceChange: (e) => {
                      Q(null != e ? e.id : null);
                    },
                    onPaymentSourceAdd: () => {
                      M(E.h8.ADD_PAYMENT_STEPS);
                    },
                    planId: X.id,
                    setHasAcceptedTerms: ea,
                    legalTermsNodeRef: eg,
                    hasLegalTermsFlash: em,
                    onInvoiceError: (e) => ev(e),
                    planGroup: R,
                    currencies: W,
                    onCurrencyChange: (e) => J(e),
                    hasOpenInvoice: null != L,
                    purchaseState: et,
                    handleClose: B,
                  })))),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(x.P, { giftMessage: ed }),
              !eC && (0, i.jsx)(h.Z, { isEligibleForTrial: eA }),
              (0, i.jsxs)(g.C3, { children: [(0, i.jsx)(N.Z, {}), r] }),
              (0, i.jsx)(g.O3, {
                children: (0, i.jsx)(b.Z, {
                  premiumSubscription: null != U ? U : null,
                  setPurchaseState: $,
                  onBack: eZ,
                  onNext: eT,
                  onPurchaseError: (e) => ee(e),
                  legalTermsNodeRef: eg,
                  flashLegalTerms: () => eI(!0),
                  invoiceError: eP,
                  planError: eb,
                  analyticsLocation: Z,
                  baseAnalyticsData: j,
                  flowStartTime: F.startTime,
                  trialId: eE,
                  planGroup: R,
                  purchaseTokenAuthState: z,
                  openInvoiceId: L,
                  backButtonEligible: ej,
                  metadata: eS,
                  isTrial: eA,
                  disablePurchase: eD,
                }),
              }),
            ],
          })
        );
      }
    },
    678334: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        r = t(512722),
        s = t.n(r),
        l = t(442837),
        o = t(481060),
        c = t(355467),
        u = t(906732),
        d = t(600164),
        _ = t(160913),
        p = t(311821),
        m = t(459965),
        I = t(858987),
        f = t(975060),
        E = t(882712),
        x = t(855775),
        N = t(626135),
        S = t(669079),
        T = t(74538),
        h = t(987209),
        b = t(598),
        g = t(632580),
        P = t(45572),
        v = t(919778),
        A = t(612853),
        M = t(981631),
        y = t(181729);
      function C(e) {
        let {
            premiumSubscription: n,
            setPurchaseState: t,
            onBack: r,
            onNext: C,
            legalTermsNodeRef: O,
            flashLegalTerms: R,
            invoiceError: L,
            planError: j,
            onPurchaseError: Z,
            baseAnalyticsData: D,
            flowStartTime: w,
            trialId: G,
            planGroup: B,
            analyticsLocation: U,
            purchaseTokenAuthState: k,
            openInvoiceId: F,
            metadata: W,
            backButtonEligible: H,
            disablePurchase: Y,
            isTrial: V = !1,
          } = e,
          {
            selectedPlan: K,
            priceOptions: z,
            setHasAcceptedTerms: X,
            setPurchaseError: q,
            purchaseType: J,
            paymentSourceId: Q,
            paymentSources: $,
            selectedSkuId: ee,
            skusById: en,
            skuPricePreviewsById: et,
            referralCode: ei,
            contextMetadata: ea,
            invoicePreview: er,
            inReverseTrial: es,
          } = (0, b.usePaymentContext)(),
          {
            isGift: el,
            selectedGiftStyle: eo,
            customGiftMessage: ec,
            emojiConfetti: eu,
            soundEffect: ed,
            giftRecipient: e_,
          } = (0, h.wD)(),
          ep = (0, S.MY)(e_),
          em = {};
        (em.gift_style = eo),
          ep === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (s()(
              null != e_,
              "Gift recipient must be set at purchase review step for these gift options.",
            ),
            (em.recipient_id = e_.id),
            (em.custom_message = ec),
            (em.emoji_id = null == eu ? void 0 : eu.id),
            (em.emoji_name =
              (null == eu ? void 0 : eu.id) == null
                ? null == eu
                  ? void 0
                  : eu.surrogates
                : void 0),
            (em.sound_id = null == ed ? void 0 : ed.soundId));
        let eI = null == K ? void 0 : K.id,
          ef = (0, v.sE)(G, z.paymentSourceId, eI),
          eE = (0, l.e7)([f.Z], () => f.Z.popupCallbackCalled),
          { analyticsLocations: ex } = (0, u.ZP)(),
          eN = null != Q ? $[Q] : null,
          [eS, eT] = a.useState(ef),
          [eh, eb] = a.useState(!1),
          { hasEntitlements: eg } = (0, m.H)(eI, el),
          eP = (0, T.Ap)(z.paymentSourceId),
          ev = eg || ef,
          eA = (0, _.U)(),
          eM = null,
          ey = null;
        if (J === M.GZQ.ONE_TIME) {
          var eC;
          s()(null != ee, "SKU must be selected for one-time purchases"),
            (eM = null !== (eC = en[ee]) && void 0 !== eC ? eC : null),
            s()(null != eM, "SKU must exist and be fetched.");
          let e = et[ee],
            n = null != Q ? Q : x.c;
          ey = null != e ? e[n] : null;
        }
        let eO = async () => {
          await (0, g.H)({
            setPurchaseState: t,
            setHasAcceptedTerms: X,
            setIsSubmitting: eT,
            setPurchaseError: q,
            hasRedirectURL: eh,
            setHasRedirectURL: eb,
            isGift: el,
            baseAnalyticsData: D,
            analyticsLocation: U,
            analyticsLocations: ex,
            flowStartTime: w,
            subscriptionPlan: K,
            planGroup: B,
            trialId: G,
            priceOptions: z,
            paymentSource: eN,
            isPrepaidPaymentPastDue: eA,
            openInvoiceId: F,
            premiumSubscription: n,
            onNext: C,
            metadata: W,
            sku: eM,
            skuPricePreview: ey,
            purchaseType: J,
            referralCode: ei,
            loadId: ea.loadId,
            giftInfoOptions: em,
            invoicePreview: er,
          });
        };
        a.useEffect(() => {
          (async () => {
            if (!0 === eE)
              try {
                if (null == f.Z.redirectedPaymentId) return;
                await (0, c.OP)(f.Z.redirectedPaymentId), t(P.A.COMPLETED), C();
              } catch (e) {
                t(P.A.FAIL),
                  Z(e),
                  N.default.track(M.rMx.PAYMENT_FLOW_FAILED, {
                    ...D,
                    payment_error_code: null == e ? void 0 : e.code,
                    payment_source_id: Q,
                    payment_source_type: null == eN ? void 0 : eN.type,
                    duration_ms: Date.now() - w,
                  });
              } finally {
                eT(!1), (0, c.K2)();
              }
            else k === E.I.SUCCESS && (await eO());
          })();
        }, [eE]),
          a.useEffect(() => {
            ef && !el && null == n && eO();
          }, [ef, el, n]);
        let eR = null != F || (J === M.GZQ.ONE_TIME && !el);
        return ef
          ? null
          : (0, i.jsxs)(o.ModalFooter, {
              align: d.Z.Align.CENTER,
              children: [
                (0, i.jsx)(I.Z, {
                  legalTermsNodeRef: O,
                  invoiceError: L,
                  planError: j,
                  disablePurchase: Y,
                  flashLegalTerms: R,
                  isSubmitting: eS,
                  premiumSubscription: n,
                  isGift: el,
                  planGroup: B,
                  isPrepaid: eP,
                  isTrial: V,
                  makePurchase: eO,
                  needsPaymentSource: null == eN && !ev,
                  onNext: C,
                  inReverseTrial: es,
                }),
                (0, i.jsx)(A.Z, {}),
                H && !eR
                  ? (0, i.jsx)("div", {
                      className: y.back,
                      children: (0, i.jsx)(p.Z, { onClick: r }),
                    })
                  : null,
              ],
            });
      }
    },
    919778: function (e, n, t) {
      t.d(n, {
        sE: function () {
          return l;
        },
      });
      var i = t(818083),
        a = t(74538);
      let r = (0, i.B)({
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
        s = (e, n, t) => {
          let i = null == t || (0, a.uZ)(t);
          return null != e && null == n && i;
        },
        l = (e, n, t) => {
          let { bypassCheckout: i } = r.useExperiment(
              { location: "aeb070_1" },
              { autoTrackExposure: !1 },
            ),
            a = s(e, n, t);
          return i && a;
        };
    },
    809144: function (e, n, t) {
      t.d(n, {
        P: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(609194),
        s = t(669079),
        l = t(987209),
        o = t(689938),
        c = t(957304);
      function u(e) {
        let { giftMessage: n = o.Z.Messages.PREMIUM_PAYMENT_IS_GIFT } = e,
          { isGift: t, giftRecipient: u } = (0, l.wD)();
        return !t || (0, s.pO)(u)
          ? null
          : (0, i.jsx)(r.Z, {
              className: c.paymentNote,
              iconSize: r.Z.Sizes.SMALL,
              icon: a.GiftIcon,
              color: null == n ? r.Z.Colors.PRIMARY : r.Z.Colors.SECONDARY,
              children: n,
            });
      }
    },
    481595: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return w;
        },
      });
      var i = t(735250),
        a = t(470079),
        r = t(512722),
        s = t.n(r),
        l = t(742280),
        o = t(399606),
        c = t(481060),
        u = t(16084),
        d = t(224550),
        _ = t(609194),
        p = t(275850),
        m = t(672971),
        I = t(115130),
        f = t(925329),
        E = t(653798),
        x = t(314182),
        N = t(251660),
        S = t(246946),
        T = t(351402),
        h = t(853872),
        b = t(855775),
        g = t(695103),
        P = t(4912),
        v = t(669079),
        A = t(937615),
        M = t(987209),
        y = t(598),
        C = t(45572),
        O = t(119226),
        R = t(981631),
        L = t(689938),
        j = t(488579);
      function Z(e) {
        let { sku: n, skuPricePreview: t } = e;
        s()(null != t.amount, "SKU must have a price set.");
        let a = t.amount - t.tax;
        return !t.tax_inclusive && t.tax > 0
          ? (0, i.jsxs)(E.PO, {
              className: j.invoice,
              children: [
                (0, i.jsx)(E.R$, {
                  label: n.name,
                  value: (0, A.T4)(a, t.currency),
                  className: j.subscriptionCostRow,
                }),
                (0, i.jsx)(E.R$, {
                  label: L.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                  value: (0, A.T4)(t.tax, t.currency),
                  className: j.subscriptionCostRow,
                }),
                (0, i.jsx)(E.KU, {}),
                (0, i.jsx)(E.Ji, {
                  label: L.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                  value: (0, A.T4)(t.amount, t.currency),
                  className: j.subscriptionCostRow,
                }),
              ],
            })
          : (0, i.jsx)(E.PO, {
              className: j.invoice,
              children: (0, i.jsx)(E.R$, {
                label: n.name,
                value: (0, A.T4)(t.amount, t.currency),
                className: j.subscriptionCostRow,
              }),
            });
      }
      function D(e) {
        let { application: n, sku: t, isEmbeddedIAP: a } = e;
        return !0 !== a
          ? null
          : (0, i.jsxs)("div", {
              className: j.skuHeading,
              children: [
                (0, i.jsx)(f.Z, { game: n }),
                (0, i.jsx)(c.Heading, {
                  variant: "heading-lg/bold",
                  className: j.skuHeadingText,
                  children: t.name,
                }),
              ],
            });
      }
      function w(e) {
        let {
            hasLegalTermsFlash: n,
            legalTermsNodeRef: t,
            onPaymentSourceChange: r,
            handlePaymentSourceAdd: f,
          } = e,
          {
            application: A,
            purchaseState: w,
            paymentSources: G,
            paymentSourceId: B,
            setHasAcceptedTerms: U,
            skusById: k,
            skuPricePreviewsById: F,
            selectedSkuId: W,
            isEmbeddedIAP: H,
            purchaseType: Y,
            purchasePreviewError: V,
          } = (0, y.usePaymentContext)(),
          { isGift: K, giftRecipient: z } = (0, M.wD)(),
          X = K && (0, v.pO)(z),
          { defaultPaymentSourceId: q, hasFetchedPaymentSources: J } = (0,
          o.cj)([h.Z], () => ({
            defaultPaymentSourceId: h.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: h.Z.hasFetchedPaymentSources,
          }));
        s()(null != W, "Expected selectedSkuId");
        let Q = k[W],
          $ = F[W],
          ee = null != B ? B : b.c,
          en = null != $ ? $[ee] : null;
        s()(null != Q, "SKU must exist and be fetched."),
          s()(null != A, "Application must exist.");
        let et = (0, o.e7)(
            [I.Z, g.Z],
            () =>
              g.Z.inTestModeForApplication(A.id) ||
              I.Z.inDevModeForApplication(A.id),
            [A.id],
          ),
          ei = (0, o.e7)([S.Z], () => S.Z.enabled),
          ea = l.M.EEA_COUNTRIES.has(T.Z.ipCountryCodeWithFallback),
          er = w === C.A.PURCHASING || w === C.A.COMPLETED,
          es = null != B ? G[B].type : null;
        return (
          a.useEffect(() => {
            J &&
              B === q &&
              q !== b.c &&
              null == en &&
              (0, u.x2)(Q.applicationId, Q.id, q, { isGift: K });
          }, [q, J, B, Q.applicationId, Q.id, en, K]),
          (0, i.jsxs)("div", {
            className: j.stepBody,
            children: [
              et &&
                (0, i.jsx)(
                  _.Z,
                  {
                    icon: (0, c.makeIconCompat)(P.Z),
                    iconSize: _.Z.Sizes.SMALL,
                    color: _.Z.Colors.WARNING,
                    className: j.errorBlock,
                    children: L.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE,
                  },
                  "TEST_MODE",
                ),
              (0, i.jsx)(D, { application: A, sku: Q, isEmbeddedIAP: H }),
              X && (0, i.jsx)(O.Z, { sku: Q }),
              null != z ? (0, i.jsx)(N.s, { giftRecipient: z }) : null,
              (0, i.jsx)(c.FormTitle, {
                tag: c.FormTitleTags.H5,
                children: K
                  ? L.Z.Messages.PREMIUM_GIFTING_BUTTON
                  : L.Z.Messages
                      .ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL,
              }),
              null != en
                ? (0, i.jsx)(Z, { sku: Q, skuPricePreview: en })
                : null == V
                  ? (0, i.jsx)(c.Spinner, {
                      type: c.Spinner.Type.WANDERING_CUBES,
                      className: j.invoiceSpinner,
                    })
                  : (0, i.jsx)(E.PO, {
                      className: j.invoice,
                      children: (0, i.jsx)(E.R$, {
                        label: Q.name,
                        value: null,
                        className: j.subscriptionCostRow,
                      }),
                    }),
              (0, i.jsxs)("div", {
                className: j.paymentSourceWrapper,
                children: [
                  (0, i.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H5,
                    children:
                      L.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                  }),
                  (0, i.jsx)(p.Z, {
                    paymentSources: Object.values(G),
                    selectedPaymentSourceId: B,
                    onChange: r,
                    onPaymentSourceAdd: f,
                    hidePersonalInformation: ei,
                  }),
                ],
              }),
              (0, i.jsx)(x.Z, {
                isActive: n,
                ref: t,
                children: (0, i.jsx)(m.Z, {
                  onChange: U,
                  forceShow: !0,
                  showWithdrawalWaiver: ea,
                  disabled: er,
                  subscriptionPlan: null,
                  finePrintClassname: j.fineprint,
                  purchaseType: Y,
                  isGift: K,
                  checkboxLabel:
                    Q.productLine === R.POd.COLLECTIBLES
                      ? L.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format(
                          { paidURL: R.EYA.PAID_TERMS },
                        )
                      : void 0,
                  finePrint: (0, i.jsx)(d.Z, {
                    paymentSourceType: es,
                    isEmbeddedIAP: H,
                    purchaseType: Y,
                    productLine: Q.productLine,
                    isGift: K,
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    119226: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(627341);
      var i = t(735250);
      t(470079);
      var a = t(278074),
        r = t(979554),
        s = t(481060),
        l = t(1585),
        o = t(125988),
        c = t(583434),
        u = t(479446),
        d = t(981632),
        _ = t(731896),
        p = t(680295),
        m = t(998502),
        I = t(987209),
        f = t(689938),
        E = t(326397),
        x = t(241822);
      let N = m.ZP.getEnableHardwareAcceleration()
        ? s.AnimatedAvatar
        : s.Avatar;
      function S(e) {
        let { avatarDecoration: n } = e,
          {
            avatarDecorationSrc: t,
            eventHandlers: a,
            avatarPlaceholderSrc: r,
          } = (0, o.Z)({
            avatarDecorationOverride: n,
            size: (0, l.y9)(s.AvatarSizes.SIZE_152),
          });
        return (0, i.jsx)("div", {
          className: E.giftMainAnimationWrapper,
          children: (0, i.jsx)(N, {
            ...a,
            avatarDecoration: t,
            src: r,
            className: E.avatar,
            size: s.AvatarSizes.SIZE_152,
            "aria-label": f.Z.Messages.USER_SETTINGS_AVATAR,
          }),
        });
      }
      function T(e) {
        var n;
        let { id: t } = e,
          a = null === (n = (0, _.V)(t)) || void 0 === n ? void 0 : n.config;
        return (0, i.jsxs)("div", {
          className: E.profileEffectContainer,
          children: [
            (0, i.jsx)("img", {
              src: x,
              alt: null == a ? void 0 : a.accessibilityLabel,
              className: E.profileEffectBackground,
            }),
            (0, i.jsx)(p.Z, { profileEffectId: t }),
          ],
        });
      }
      function h(e) {
        let { sku: n } = e,
          { selectedGiftStyle: t } = (0, I.wD)(),
          { product: s } = (0, c.T)(null == n ? void 0 : n.id),
          l = null == s ? void 0 : s.items[0],
          o = (0, a.EQ)(l)
            .with({ type: r.Z.AVATAR_DECORATION }, (e) =>
              (0, i.jsx)(S, { avatarDecoration: e }),
            )
            .with({ type: r.Z.PROFILE_EFFECT }, (e) =>
              (0, i.jsx)(T, { id: e.id }),
            )
            .otherwise(() => null);
        return null != t && null == o
          ? (0, i.jsx)("div", {
              className: E.giftMainAnimationWrapper,
              children: (0, i.jsx)(d.Z, {
                defaultAnimationState: u.S.LOOP,
                giftStyle: t,
                shouldAnimate: !0,
                className: E.__invalid_giftMainAnimation,
              }),
            })
          : o;
      }
    },
    631818: function (e, n, t) {
      var i = t(818083);
      n.Z = (0, i.B)({
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
      var i = t(818083);
      n.Z = (0, i.B)({
        kind: "user",
        id: "2023-05_localized_pricing_turkey_notice",
        label: "Localized Pricing Turkey Notice",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable Turkey Notice", config: { enabled: !0 } },
        ],
      });
    },
    711459: function (e, n, t) {
      t.d(n, {
        aQ: function () {
          return l;
        },
      }),
        t(47120);
      var i = t(742280),
        a = t(818083),
        r = t(474936);
      n.ZP = (0, a.B)({
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
                r.Xh.PREMIUM_6_MONTH_TIER_2,
                r.Xh.PREMIUM_3_MONTH_TIER_2,
              ],
            },
          },
          {
            id: 2,
            label: "3 Month Plan Only",
            config: { newPlans: [r.Xh.PREMIUM_3_MONTH_TIER_2] },
          },
        ],
      });
      let s = new Set([i.S.US, i.S.CA]);
      function l(e) {
        return null == e || s.has(e.country);
      }
    },
    160913: function (e, n, t) {
      t.d(n, {
        U: function () {
          return _;
        },
      });
      var i = t(913527),
        a = t.n(i),
        r = t(442837),
        s = t(853872),
        l = t(509545),
        o = t(78839),
        c = t(74538),
        u = t(981631),
        d = t(231338);
      function _() {
        let e = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
          n = (0, r.e7)([l.Z], () =>
            null != e && null != e.planIdFromItems
              ? l.Z.get(null == e ? void 0 : e.planIdFromItems)
              : null,
          ),
          t = (0, r.e7)(
            [s.Z],
            () =>
              null != e && null != e.paymentSourceId
                ? s.Z.getPaymentSource(e.paymentSourceId)
                : null,
            [e],
          ),
          i = null != t && d.Uk.has(t.type),
          _ =
            (null == e ? void 0 : e.status) === u.O0b.PAST_DUE
              ? a()().diff(a()(e.currentPeriodStart), "days")
              : 0;
        return (
          !!(null != e && null != n && (0, c.uZ)(n.id)) &&
          i &&
          _ >= 0 &&
          _ <= (0, c.lY)(e).days &&
          e.status === u.O0b.PAST_DUE &&
          !e.isPurchasedExternally
        );
      }
    },
    642530: function (e, n, t) {
      var i = t(735250);
      t(470079);
      var a = t(987209),
        r = t(598),
        s = t(248042),
        l = t(196567),
        o = t(474936),
        c = t(689938),
        u = t(430597);
      n.Z = () => {
        let e = (0, s.Vi)(),
          { selectedSkuId: n } = (0, r.usePaymentContext)(),
          { isGift: t } = (0, a.wD)();
        return t || n !== o.Si.TIER_2 || !e
          ? null
          : (0, i.jsx)(l.Z, {
              copy: c.Z.Messages.BOGO_PAYMENT_MODAL_BANNER_2024,
              bannerImage: u,
              hideGiftIcon: !0,
            });
      };
    },
    55610: function (e, n, t) {
      t.d(n, {
        U: function () {
          return f;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        s = t(512722),
        l = t.n(s),
        o = t(481060),
        c = t(63063),
        u = t(631818),
        d = t(987033),
        _ = t(53900),
        p = t(981631),
        m = t(689938),
        I = t(773360);
      function f() {
        let e = (0, _.Z)(),
          { enabled: n } = u.Z.useExperiment(
            { location: "5ebfcf_1" },
            { autoTrackExposure: !1 },
          ),
          { enabled: t } = d.Z.useExperiment(
            { location: "5ebfcf_2" },
            { autoTrackExposure: !1 },
          );
        return null != e && ("PL" === e ? n : "TR" === e && t);
      }
      n.Z = (e) => {
        var n, t;
        let { fromBoostCancelModal: a, className: s } = e,
          u = (0, _.Z)();
        if (!f()) return null;
        return (
          l()(null != u, "Subscription billing country should not be null"),
          (0, i.jsxs)("div", {
            className: r()(I.noticeRoot, s),
            children: [
              (0, i.jsx)("div", {
                className: I.iconContainer,
                children: (0, i.jsx)(o.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "currentColor",
                  className: I.infoIcon,
                }),
              }),
              (0, i.jsx)("div", {
                className: I.text,
                children: ((n = u),
                (t = a),
                "PL" === n
                  ? t
                    ? m.Z.Messages
                        .LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING
                    : m.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING
                  : "TR" === n
                    ? t
                      ? m.Z.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING
                      : m.Z.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING
                    : t
                      ? m.Z.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING
                      : m.Z.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                  helpCenterLink: c.Z.getArticleURL(p.BhN.LOCALIZED_PRICING),
                }),
              }),
            ],
          })
        );
      };
    },
    927699: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        r = t(120356),
        s = t.n(r),
        l = t(481060),
        o = t(541716),
        c = t(752305),
        u = t(893718),
        d = t(993413),
        _ = t(131704),
        p = t(474936),
        m = t(981631),
        I = t(689938),
        f = t(651949);
      let E = (0, _.kt)({ id: "1", type: m.d4z.DM });
      function x(e) {
        let {
            sectionTitle: n,
            errors: t,
            onTextChange: r,
            pendingText: _,
            placeholder: m,
            currentText: x,
            className: N,
            innerClassName: S,
            disabled: T = !1,
            disableThemedBackground: h = !1,
          } = e,
          [b, g] = a.useState(null != _ ? _ : x),
          [P, v] = a.useState((0, c.JM)(b)),
          A = a.useRef(!1);
        return (
          a.useEffect(() => {
            A.current = !0;
          }, []),
          a.useEffect(() => {
            if (void 0 === _) {
              let e = (0, c.JM)(x);
              g(x), v(e);
            }
          }, [_, x]),
          (0, i.jsx)("div", {
            className: s()(f.body, N),
            children: (0, i.jsxs)(d.Z, {
              title: n,
              errors: t,
              disabled: T,
              children: [
                (0, i.jsx)(u.Z, {
                  innerClassName: s()(f.textArea, S),
                  editorClassName: f.editorTextArea,
                  maxCharacterCount: p.$n,
                  onChange: function (e, n, t) {
                    n !== b && (g(n), v(t), r(n));
                  },
                  placeholder: m,
                  channel: E,
                  textValue: b,
                  richValue: P,
                  type: o.I.CUSTOM_GIFT,
                  onBlur: () => {
                    A.current = !1;
                  },
                  onFocus: () => {
                    A.current = !0;
                  },
                  focused: A.current,
                  onSubmit: function () {
                    return new Promise((e) => {
                      e({ shouldClear: !1, shouldRefocus: !0 });
                    });
                  },
                  disableThemedBackground: h,
                }),
                (0, i.jsx)(l.HiddenVisually, {
                  children: I.Z.Messages.MAXIMUM_LENGTH.format({
                    maxLength: p.$n,
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    987716: function (e, n, t) {
      t.d(n, {
        q: function () {
          return E;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        r = t(481060),
        s = t(987209),
        l = t(321051),
        o = t(669079),
        c = t(479446),
        u = t(646476),
        d = t(981632),
        _ = t(96848),
        p = t(703926),
        m = t(474936),
        I = t(689938),
        f = t(62612);
      let E = (e) => {
        let { isShopGift: n } = e,
          {
            giftRecipient: t,
            selectedGiftStyle: E,
            setSelectedGiftStyle: x,
            emojiConfetti: N,
            soundEffect: S,
            setEmojiConfetti: T,
            setSoundEffect: h,
          } = (0, s.wD)(),
          [b, g] = a.useState(!1),
          P = a.useRef(null),
          v = (0, r.useRadioGroup)({ orientation: "horizontal" }),
          A = (0, o.MY)(t, n),
          M = A === o.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
          y = A !== o.xr.DEFAULT,
          C = (0, u.rK)(),
          { enabled: O } = u.ZP.useExperiment(
            { location: "premiumGiftSelect_GiftAnimationOptions" },
            { autoTrackExposure: C },
          ),
          R = null;
        return (
          y && (R = C && O ? m.V4 : m.QI),
          (0, i.jsxs)("div", {
            children: [
              y &&
                (0, i.jsxs)("div", {
                  className: f.giftMainAnimation,
                  children: [
                    null != E
                      ? (0, i.jsx)(d.Z, {
                          giftStyle: E,
                          defaultAnimationState: c.S.ACTION,
                          idleAnimationState: c.S.LOOP,
                          shouldAnimate: !0,
                          className: f.animation,
                        })
                      : (0, i.jsx)(r.Spinner, { className: f.spinner }),
                    M &&
                      (0, i.jsxs)("div", {
                        className: f.soundEmojiContainer,
                        children: [
                          (0, i.jsx)("div", {
                            className: f.sound,
                            children: (0, i.jsx)(l.Z, {
                              sound: S,
                              onSelect: (e) => {
                                null != h && h(null == e ? void 0 : e);
                              },
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: f.emoji,
                            children: (0, i.jsx)(_.Z, {
                              setEmojiConfetti: T,
                              emojiConfetti: null == N ? void 0 : N,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              (0, i.jsx)("div", {
                tabIndex: null != E || b ? void 0 : 0,
                onFocus: (e) => {
                  var n;
                  e.target === e.currentTarget &&
                    (null === (n = P.current) || void 0 === n || n.focus());
                },
                className: f.giftBoxOptionContainer,
                "aria-label":
                  I.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                ...v,
                children:
                  null != R &&
                  R.map((e, n) =>
                    (0, i.jsx)(
                      p.m,
                      {
                        isSelected: E === e,
                        giftStyle: e,
                        setSelectedGiftStyle: x,
                        ref: 0 === n ? P : null,
                        onFocus: () => g(!0),
                        onBlur: () => g(!1),
                      },
                      e,
                    ),
                  ),
              }),
              (0, i.jsx)("div", { className: f.__invalid_selectPlanDivider }),
            ],
          })
        );
      };
    },
    96848: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(47120),
        t(757143);
      var i = t(735250),
        a = t(470079),
        r = t(481060),
        s = t(907040),
        l = t(981631),
        o = t(185923),
        c = t(689938),
        u = t(464971);
      let d = {
          section: l.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
          openPopoutType: "gift_effect_emoji_picker",
        },
        _ = o.Hz.GIFT;
      function p(e) {
        let { setEmojiConfetti: n, emojiConfetti: t } = e,
          [l, o] = a.useState(!1),
          p = (e) =>
            (0, i.jsxs)("div", {
              className: u.customGiftContent,
              children: [
                (0, i.jsxs)("div", {
                  className: u.customGiftHeader,
                  children: [
                    (0, i.jsx)(r.Text, {
                      variant: "text-md/bold",
                      children: c.Z.Messages.GIFT_SELECT_EMOJI,
                    }),
                    (0, i.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      children:
                        c.Z.Messages
                          .GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION,
                    }),
                  ],
                }),
                e,
              ],
            }),
          m = (e) => {
            null != n && (n(e), o(!1));
          };
        return (0, i.jsx)(r.Popout, {
          shouldShow: l,
          position: "bottom",
          align: "left",
          autoInvert: !1,
          onRequestClose: () => o(!1),
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(r.Dialog, {
              children: (0, i.jsx)(s.Z, {
                analyticsOverride: d,
                closePopout: n,
                onSelectEmoji: m,
                wrapper: "div",
                pickerIntention: _,
                renderHeader: p,
                headerClassName: u.emojiHeader,
                className: u.emojiList,
                listHeaderClassName: u.emojiList,
                searchProps: { accessory: (0, i.jsx)(i.Fragment, {}) },
              }),
            });
          },
          children: () =>
            (0, i.jsx)("div", {
              className: u.container,
              children: (0, i.jsx)(r.Clickable, {
                className: u.emoji,
                onClick: () => o(!0),
                children:
                  (null == t ? void 0 : t.name) == null
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(r.ReactionIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: u.emojiIcon,
                            width: 14,
                            height: 14,
                          }),
                          (0, i.jsx)(r.Text, {
                            className: u.text,
                            variant: "text-sm/semibold",
                            children: c.Z.Messages.GIFT_SELECT_EMOJI,
                          }),
                        ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(r.Text, {
                            className: u.textSelected,
                            variant: "text-sm/semibold",
                            children:
                              null == t.guildId
                                ? t.optionallyDiverseSequence
                                : null,
                          }),
                          (0, i.jsx)(r.Text, {
                            className: u.text,
                            variant: "text-sm/semibold",
                            children: t.name.replace(/_/g, " "),
                          }),
                        ],
                      }),
              }),
            }),
        });
      }
    },
    703926: function (e, n, t) {
      t.d(n, {
        m: function () {
          return E;
        },
      });
      var i = t(735250),
        a = t(470079),
        r = t(481060),
        s = t(474936),
        l = t(154250),
        o = t(426831),
        c = t(257510),
        u = t(74838),
        d = t(720834),
        _ = t(385925),
        p = t(588921),
        m = t(718720),
        I = t(721513);
      let f = {
          [s.Cj.STANDARD_BOX]: _,
          [s.Cj.CAKE]: p,
          [s.Cj.CHEST]: m,
          [s.Cj.COFFEE]: I,
          [s.Cj.SNOWGLOBE]: "",
          [s.Cj.BOX]: "",
          [s.Cj.CUP]: "",
          [s.Cj.SEASONAL_CAKE]: c,
          [s.Cj.SEASONAL_CHEST]: u,
          [s.Cj.SEASONAL_COFFEE]: d,
          [s.Cj.SEASONAL_STANDARD_BOX]: o,
        },
        E = a.forwardRef(function (e, n) {
          let {
            isSelected: t,
            giftStyle: a,
            setSelectedGiftStyle: s,
            onFocus: o,
            onBlur: c,
          } = e;
          return (0, i.jsx)(r.Clickable, {
            innerRef: n,
            onClick: () => s(a),
            onFocus: o,
            onBlur: c,
            children: (0, i.jsx)("img", {
              style: { width: "100%", height: "100%" },
              alt: "",
              src: f[a],
              className: t ? l.customGiftBoxHighlighted : l.customGiftBox,
            }),
          });
        });
    },
    314404: function (e, n, t) {
      t.d(n, {
        M: function () {
          return k;
        },
        O: function () {
          return U;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        r = t(512722),
        s = t.n(r),
        l = t(442837),
        o = t(481060),
        c = t(490504),
        u = t(911969),
        d = t(620037),
        _ = t(940824),
        p = t(987209),
        m = t(598),
        I = t(409813),
        f = t(509545),
        E = t(78839),
        x = t(669079),
        N = t(63063),
        S = t(74538),
        T = t(937615),
        h = t(711459),
        b = t(847903),
        g = t(104494),
        P = t(639119),
        v = t(55610),
        A = t(653798),
        M = t(553797),
        y = t(927699),
        C = t(987716),
        O = t(311821),
        R = t(459965),
        L = t(811616),
        j = t(251660),
        Z = t(474936),
        D = t(981631),
        w = t(231338),
        G = t(689938),
        B = t(835657);
      function U(e) {
        var n, t, r, I;
        let {
            premiumSubscription: E,
            skuId: O,
            selectedPlanId: R,
            setSelectedPlanId: U,
            priceOptions: k,
            planOptions: F,
            eligibleForMultiMonthPlans: W,
            referralTrialOfferId: H,
            subscriptionPeriodEnd: Y,
            showTotal: V = !0,
            discountInvoiceItems: K,
            handleClose: z,
          } = e,
          {
            activeSubscription: X,
            setSelectedPlanId: q,
            selectedSkuId: J,
            selectedPlan: Q,
            priceOptions: $,
          } = (0, m.usePaymentContext)(),
          {
            isGift: ee,
            giftRecipient: en,
            selectedGiftStyle: et,
            customGiftMessage: ei,
            setCustomGiftMessage: ea,
          } = (0, p.wD)(),
          er = (0, x.MY)(en),
          es = ee && (0, x.pO)(en),
          { confirmUpsellEnabled: el } = (0, d.Z)({
            location: "PremiumSwitchPlanSelectBody",
          });
        (O = null != O ? O : J),
          (E = null != E ? E : X),
          s()(void 0 !== E, "should not be undefined");
        let [eo, ec] = (0, l.Wu)([f.Z], () => [
            null != E ? f.Z.get(E.planId) : null,
            null != R ? f.Z.get(R) : null,
          ]),
          eu = (0, P.N)(H),
          ed = null == eu ? void 0 : eu.subscription_trial,
          e_ = (0, g.Ng)(),
          ep =
            null == e_
              ? void 0
              : null === (n = e_.discount) || void 0 === n
                ? void 0
                : n.plan_ids,
          em = null != ec ? ec : Q,
          eI = a.useCallback(
            (e) => {
              null != U ? U(e) : q(e);
            },
            [U, q],
          ),
          ef = null != k ? k : $;
        s()(null != ef, "Price option has to be set");
        let eE = null != eu && Z.nG[eu.trial_id].skus.includes(O),
          ex =
            null != e_ &&
            F.some((e) => (null == ep ? void 0 : ep.includes(e))) &&
            null != e_.discount,
          eN = (0, S.aS)(Z.Xh.PREMIUM_MONTH_TIER_2, !1, ee, ef);
        a.useEffect(() => {
          W && h.ZP.trackExposure({ location: "5f89bb_1" });
        }, [W]);
        let eS = (null == em ? void 0 : em.id) != null && F.includes(em.id);
        a.useEffect(() => {
          if (!eS) {
            if (null == eo || ee) eI(F[0]);
            else if (null != eo) {
              let e = F.find((e) => e !== eo.id);
              null != e && eI(e);
            }
          }
        }, [eS, ee, F, eo, eI]);
        let eT = !es && (ee || (!eE && !ex)) && eS && V,
          eh = (0, o.useRadioGroup)(),
          eb =
            (null == em ? void 0 : em.id) != null
              ? (0, S.aS)(em.id, !1, ee, ef)
              : void 0,
          { ipCountryCode: eg } = (0, b.Z)(),
          eP = "HR" === eg && null != eb && eb.currency === w.pK.EUR,
          ev = (0, S.Ap)(ef.paymentSourceId),
          eA = a.useMemo(() => {
            if ((null == ed ? void 0 : ed.interval) === Z.rV.DAY)
              return (null == ed ? void 0 : ed.interval_count) > 7
                ? G.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD
                : G.Z.Messages.BILLING_TRIAL_1_WEEK_PERIOD;
            return G.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD;
          }, [ed]),
          eM = !ee && (ex || (null != ed && eE && null != Y)),
          ey =
            null == K
              ? void 0
              : null ===
                    (I = K.find(
                      (e) => e.subscriptionPlanId === Z.Xh.PREMIUM_MONTH_TIER_2,
                    )) || void 0 === I
                ? void 0
                : null === (r = I.discounts) || void 0 === r
                  ? void 0
                  : null ===
                        (t = r.find(
                          (e) => e.type === u.eW.SUBSCRIPTION_PLAN,
                        )) || void 0 === t
                    ? void 0
                    : t.amount;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: es ? B.stepBodyCustomGift : B.stepBody,
            children: [
              (0, i.jsxs)("div", {
                className: es ? B.bodyColumnMiddle : void 0,
                children: [
                  (0, i.jsx)(v.Z, {
                    fromBoostCancelModal: !1,
                    className: B.legacyPricingNotice,
                  }),
                  es && null != et && (0, i.jsx)(C.q, {}),
                ],
              }),
              (0, i.jsxs)("div", {
                className: es ? B.bodyColumnRight : void 0,
                children: [
                  (0, i.jsx)(j.s, { giftRecipient: en }),
                  (() => {
                    if (
                      er === x.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
                      null != ea
                    )
                      return (0, i.jsx)(y.Z, {
                        sectionTitle: G.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                        onTextChange: (e) => ea(e),
                        pendingText: ei,
                        currentText: ei,
                      });
                  })(),
                  null != eo &&
                    !ee &&
                    (0, i.jsx)("div", {
                      className: B.bodyText,
                      children: (function (e, n) {
                        let t =
                            G.Z.Messages
                              .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                          i =
                            G.Z.Messages
                              .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                          a = (() => {
                            switch (e.interval) {
                              case Z.rV.YEAR:
                                return t;
                              case Z.rV.MONTH:
                              default:
                                return i;
                            }
                          })(),
                          r = e.skuId;
                        switch (n) {
                          case Z.Si.TIER_0:
                            switch (r) {
                              case Z.Si.TIER_1:
                                return G.Z.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                              case Z.Si.TIER_2:
                                return G.Z.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                              default:
                                return a;
                            }
                          case Z.Si.TIER_1:
                            switch (r) {
                              case Z.Si.TIER_0:
                                return G.Z.Messages
                                  .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                              case Z.Si.TIER_2:
                                return G.Z.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                              default:
                                return a;
                            }
                          case Z.Si.TIER_2:
                            switch (r) {
                              case Z.Si.TIER_0:
                              case Z.Si.TIER_1:
                                return G.Z.Messages
                                  .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                              case Z.Si.TIER_2:
                                return e.interval === Z.rV.MONTH
                                  ? G.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format(
                                      { numFreeGuildSubscriptions: Z.cb },
                                    )
                                  : a;
                              default:
                                return a;
                            }
                          default:
                            return a;
                        }
                      })(eo, O),
                    }),
                  ((e, n, t) => {
                    if (es)
                      return (0, i.jsx)(o.FormTitle, {
                        children: G.Z.Messages.GIFT_SUBSCRIPTION_SELECTION,
                      });
                    if (!eM)
                      return (0, i.jsx)("div", {
                        className: B.selectPlanChooseTitle,
                        children: G.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE,
                      });
                    if (n) {
                      let n = (null == e ? void 0 : e.trial_id) === Z.a7;
                      return (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            className: B.trialPlanSelectHeader,
                            children: n
                              ? G.Z.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format(
                                  { endDate: Y },
                                )
                              : G.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format(
                                  { trialEnd: Y, trialPeriod: eA },
                                ),
                          }),
                          (0, i.jsx)("hr", {
                            className: B.planSelectSeparator,
                          }),
                        ],
                      });
                    }
                    if (
                      t &&
                      null != ey &&
                      null != eN &&
                      R === Z.Xh.PREMIUM_MONTH_TIER_2
                    )
                      return (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            className: B.trialPlanSelectHeader,
                            children:
                              G.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format(
                                {
                                  numMonths:
                                    null == e_
                                      ? void 0
                                      : e_.discount.user_usage_limit,
                                  discountedPrice: (0, T.T4)(
                                    eN.amount - ey,
                                    eN.currency,
                                  ),
                                  regularPrice: (0, T.T4)(
                                    eN.amount,
                                    eN.currency,
                                  ),
                                },
                              ),
                          }),
                          (0, i.jsx)("hr", {
                            className: B.planSelectSeparator,
                          }),
                        ],
                      });
                  })(eu, eE, ex),
                  (0, i.jsx)("div", {
                    ...eh,
                    children: F.map((e) =>
                      (0, i.jsx)(
                        L.Z,
                        {
                          planId: e,
                          premiumSubscription: ee ? null : null != E ? E : null,
                          selectPlan: eI,
                          selected: (null == em ? void 0 : em.id) === e,
                          priceOptions: ef,
                          shouldShowUpdatedPaymentModal: eM,
                          isEligibleForDiscount: ex,
                          discountAmountOff: ey,
                          isEligibleForTrial: eE,
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, i.jsx)("div", {
                    children:
                      eT && null != em && null != eb
                        ? (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("div", {
                                className: B.selectPlanDivider,
                              }),
                              (0, i.jsx)(A.Ji, {
                                label:
                                  G.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                value: (0, i.jsx)(M.Z, {
                                  price: eb.amount,
                                  currency: eb.currency,
                                  intervalType: ee ? null : em.interval,
                                  intervalCount: em.intervalCount,
                                  isPrepaidPaymentSource: ev,
                                }),
                                className: B.selectPlanTotalRow,
                              }),
                            ],
                          })
                        : null,
                  }),
                  eP &&
                    (0, i.jsx)(c.Z, {
                      message:
                        G.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                          kunaPriceWithCurrency: (0, T.T4)(
                            7.5345 * eb.amount,
                            w.pK.HRK,
                          ),
                        }),
                    }),
                  !ee &&
                    !eM &&
                    V &&
                    (0, i.jsx)(c.Z, {
                      message:
                        G.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                          documentationLink: N.Z.getArticleURL(
                            D.BhN.LOCALIZED_PRICING,
                          ),
                        }),
                    }),
                  el && ee && (0, i.jsx)(_.Z, { onClose: z }),
                ],
              }),
            ],
          }),
        });
      }
      function k(e) {
        let {
            onStepChange: n,
            selectedPlanId: t,
            paymentSources: a,
            onBackClick: r,
            showBackButton: s,
            planOptions: l,
            shouldRenderUpdatedPaymentModal: c = !1,
            isTrial: u,
          } = e,
          { paymentSources: d, selectedPlan: _ } = (0, m.usePaymentContext)(),
          { isGift: I } = (0, p.wD)();
        return (
          (a = null != a ? a : d),
          (t = null != t ? t : null == _ ? void 0 : _.id),
          (0, i.jsxs)(i.Fragment, {
            children: [
              null != t && l.includes(t)
                ? (0, i.jsx)(F, {
                    paymentSources: a,
                    onStepChange: n,
                    selectedPlanId: t,
                    isGift: I,
                    shouldRenderUpdatedPaymentModal: c,
                    isTrial: u,
                  })
                : (0, i.jsx)(o.Button, {
                    disabled: !0,
                    children: G.Z.Messages.SELECT,
                  }),
              s ? (0, i.jsx)(O.Z, { onClick: r }) : null,
            ],
          })
        );
      }
      function F(e) {
        let {
            onStepChange: n,
            selectedPlanId: t,
            isGift: a,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: s,
            isTrial: c,
          } = e,
          u = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
          { hasEntitlements: d } = (0, R.H)(t, a),
          _ =
            (null != u && null != u.paymentSourceId) ||
            Object.keys(r).length > 0 ||
            (d && !c);
        var p = s ? G.Z.Messages.NEXT : G.Z.Messages.SELECT,
          m = I.h8.ADD_PAYMENT_STEPS;
        return (
          _ && (m = I.h8.REVIEW),
          (0, i.jsx)(o.Button, { onClick: () => n(m), children: p })
        );
      }
    },
    811616: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        s = t(512722),
        l = t.n(s),
        o = t(442837),
        c = t(692547),
        u = t(481060),
        d = t(987209),
        _ = t(706454),
        p = t(509545),
        m = t(669079),
        I = t(930153),
        f = t(74538),
        E = t(937615),
        x = t(104494),
        N = t(474936),
        S = t(689938),
        T = t(379573);
      function h(e) {
        let {
            premiumSubscription: n,
            planId: t,
            selectPlan: a,
            selected: s,
            priceOptions: h,
            shouldShowUpdatedPaymentModal: b,
            isEligibleForDiscount: g,
            discountAmountOff: P,
            isEligibleForTrial: v,
          } = e,
          A = (0, o.e7)([_.default], () => _.default.locale),
          M = (0, o.e7)([p.Z], () => p.Z.get(t)),
          { isGift: y, giftRecipient: C } = (0, d.wD)(),
          O = y && (0, m.pO)(C);
        l()(null != M, "Missing subscriptionPlan");
        let R = null != n && n.planId === t,
          L =
            R ||
            (t === N.Xh.PREMIUM_MONTH_TIER_2 &&
              null != n &&
              [N.Xh.PREMIUM_YEAR_TIER_0, N.Xh.PREMIUM_YEAR_TIER_1].includes(
                n.planId,
              )),
          j = N.nH[t],
          Z = (0, f.aS)(t, !1, y, h),
          D = (0, f.Ap)(h.paymentSourceId),
          w = null != j && !b,
          G = (0, x.Ng)(),
          B =
            M.interval === N.rV.YEAR
              ? S.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL
              : S.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
          U = () =>
            null != j &&
            (0, i.jsx)(u.Text, {
              tag: "span",
              variant: "eyebrow",
              color: "always-white",
              className: T.planOptionDiscount,
              children: S.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                discount: (0, I.T3)(A, j / 100),
              }),
            }),
          k = () =>
            (M.interval === N.rV.YEAR && null != n) || (w && !R)
              ? M.interval === N.rV.YEAR && null != n
                ? (0, i.jsxs)("span", {
                    className: T.planOptionMonthsFree,
                    children: [
                      "(",
                      S.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS,
                      ")",
                    ],
                  })
                : w && !R
                  ? U()
                  : void 0
              : null;
        return (0, i.jsxs)(u.Clickable, {
          role: O ? "menuitem" : "radio",
          "aria-checked": s,
          tabIndex: s ? 0 : -1,
          focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
          onClick: L ? void 0 : () => a(t),
          className: r()(T.planOptionClickableContainer, {
            [T.selectedPlan]: O && s,
            [T.selectionBox]: O,
          }),
          children: [
            (0, i.jsxs)("div", {
              className: r()(T.planOption, { [T.planOptionDisabled]: L }),
              children: [
                (0, i.jsxs)("div", {
                  className: T.planOptionClickable,
                  children: [
                    !O &&
                      (0, i.jsx)(u.Checkbox, {
                        readOnly: !0,
                        displayOnly: !0,
                        value: s,
                        shape: u.Checkbox.Shapes.ROUND,
                        color: c.Z.unsafe_rawColors.BRAND_500.css,
                        type: u.Checkbox.Types.INVERTED,
                        className: T.planOptionCheckbox,
                      }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)("div", {
                          className: r()(T.planOptionInterval, {
                            [T.optionSelected]: s || O,
                            [T.updatedOptionSelected]: b && (s || O),
                          }),
                          children: [
                            (0, f.L7)(
                              M.interval,
                              y,
                              D,
                              M.intervalCount,
                              O,
                              (0, f.Rd)(M.id),
                            ),
                            O && k(),
                          ],
                        }),
                        O &&
                          (0, i.jsx)("div", {
                            className: T.planOneTimeCost,
                            children: S.Z.Messages.ONE_TIME_CHARGE.format({
                              currencyAmount: (0, E.T4)(Z.amount, Z.currency),
                            }),
                          }),
                      ],
                    }),
                    R &&
                      (0, i.jsxs)("span", {
                        className: T.planOptionCurrentPlan,
                        children: [
                          "(",
                          S.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN,
                          ")",
                        ],
                      }),
                    !O && k(),
                  ],
                }),
                b
                  ? (0, i.jsx)("div", {
                      className: r()({ [T.optionPriceSelected]: s }),
                      children: S.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                        price:
                          g && null != P && M.interval === N.rV.MONTH
                            ? (0, E.T4)(Z.amount - P, Z.currency)
                            : v
                              ? (0, E.T4)(0, Z.currency, {
                                  maximumFractionDigits: 0,
                                })
                              : (0, E.T4)(Z.amount, Z.currency),
                      }),
                    })
                  : (0, i.jsx)("div", {
                      className: r()({ [T.optionSelected]: s || O }),
                      children: (0, E.T4)(Z.amount, Z.currency),
                    }),
              ],
            }),
            b &&
              (0, i.jsx)("div", {
                className: T.planOptionSubtextContainer,
                children: (0, i.jsx)(u.Text, {
                  variant: "text-md/normal",
                  color: s ? "text-normal" : "interactive-normal",
                  className: r()(T.planOptionSubtext, {
                    [T.discountPlanOptionSubtext]: g,
                  }),
                  children: (() => {
                    if (g && null != P && M.interval === N.rV.MONTH) {
                      var e;
                      return S.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format(
                        {
                          numMonths:
                            null !==
                              (e =
                                null == G
                                  ? void 0
                                  : G.discount.user_usage_limit) && void 0 !== e
                              ? e
                              : N.rt,
                          discountedPrice: (0, E.T4)(Z.amount - P, Z.currency),
                          regularPrice: (0, E.T4)(Z.amount, Z.currency),
                        },
                      );
                    }
                    return v
                      ? B.format({ price: (0, E.T4)(Z.amount, Z.currency) })
                      : (M.interval === N.rV.YEAR &&
                          S.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                            percent: j,
                          }),
                        null);
                  })(),
                }),
              }),
          ],
        });
      }
    },
    251660: function (e, n, t) {
      t.d(n, {
        s: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        r = t(700582),
        s = t(51144),
        l = t(689938),
        o = t(221422);
      let c = (e) => {
        let { giftRecipient: n } = e;
        return null == n
          ? null
          : (0, i.jsxs)("div", {
              className: o.content,
              children: [
                (0, i.jsx)(a.FormTitle, {
                  children: l.Z.Messages.FORM_LABEL_SEND_TO,
                }),
                (0, i.jsxs)("div", {
                  className: o.giftRecipientInfo,
                  children: [
                    (0, i.jsx)(r.Z, {
                      user: n,
                      className: o.__invalid_giftRecipient,
                      size: a.AvatarSizes.SIZE_20,
                    }),
                    (0, i.jsx)(a.Heading, {
                      className: o.giftRecipientName,
                      variant: "text-md/normal",
                      children: s.ZP.getName(n),
                    }),
                    (0, i.jsx)(a.Heading, {
                      className: o.giftRecipientTag,
                      variant: "text-md/normal",
                      children: s.ZP.getUserTag(n),
                    }),
                  ],
                }),
              ],
            });
      };
    },
    716534: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return H;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        r = t(512722),
        s = t.n(r),
        l = t(742280),
        o = t(442837),
        c = t(692547),
        u = t(481060),
        d = t(190947),
        _ = t(224550),
        p = t(275850),
        m = t(672971),
        I = t(128069),
        f = t(987209),
        E = t(598),
        x = t(45572),
        N = t(919778),
        S = t(614223),
        T = t(246946),
        h = t(351402),
        b = t(509545),
        g = t(669079),
        P = t(63063),
        v = t(74538),
        A = t(937615),
        M = t(479446),
        y = t(374649),
        C = t(104494),
        O = t(642530),
        R = t(653798),
        L = t(314182),
        j = t(981632),
        Z = t(314404),
        D = t(42818),
        w = t(459965),
        G = t(251660),
        B = t(474936),
        U = t(981631),
        k = t(231338),
        F = t(689938),
        W = t(56035);
      function H(e) {
        var n, t, r, H, Y;
        let V,
          K,
          z,
          {
            selectedPlanId: X,
            paymentSources: q,
            priceOptions: J,
            currencies: Q,
            onCurrencyChange: $,
            onPaymentSourceChange: ee,
            handlePaymentSourceAdd: en,
            setHasAcceptedTerms: et,
            legalTermsNodeRef: ei,
            hasLegalTermsFlash: ea,
            trialId: er,
            trialFooterMessageOverride: es,
            reviewWarningMessage: el,
            metadata: eo,
            purchaseState: ec,
            hideSubscriptionDetails: eu,
            referralTrialOfferId: ed,
            isTrial: e_ = !1,
            isDiscount: ep = !1,
            handleClose: em,
          } = e,
          {
            isEmbeddedIAP: eI,
            activeSubscription: ef,
            selectedSkuId: eE,
            defaultPlanId: ex,
            isPremium: eN,
            startedPaymentFlowWithPaymentSourcesRef: eS,
            setInvoicePreview: eT,
            contextMetadata: eh,
            inReverseTrial: eb,
          } = (0, E.usePaymentContext)(),
          {
            isGift: eg,
            giftRecipient: eP,
            selectedGiftStyle: ev,
          } = (0, f.wD)(),
          eA = (0, C.Ng)(),
          eM =
            null == eA
              ? void 0
              : null === (n = eA.discount) || void 0 === n
                ? void 0
                : n.plan_ids.some((e) => B.GP[e].skuId === eE),
          ey = !eg && null != eA && null != eE && eM,
          eC = (0, o.e7)([b.Z], () => b.Z.get(X));
        s()(null != eC, "Missing plan");
        let eO = [{ planId: eC.id, quantity: 1 }],
          eR = ec === x.A.PURCHASING || ec === x.A.COMPLETED,
          [eL, ej] = (0, y.ED)({
            items: eO,
            renewal: !1,
            preventFetch: eb || eg || eR,
            applyEntitlements: !0,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            trialId: er,
            metadata: eo,
          }),
          [eZ, eD] = (0, y.ED)({
            subscriptionId: null == ef ? void 0 : ef.id,
            items: eO,
            renewal: !0,
            preventFetch: eg || eR,
            trialId: er,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            metadata: eo,
          }),
          [ew, eG] = (0, y.ED)({
            items: [{ planId: B.Xh.PREMIUM_MONTH_TIER_2, quantity: 1 }],
            renewal: !0,
            preventFetch: !ey,
            trialId: er,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            metadata: eo,
          }),
          [eB, eU] = (0, y.o5)({
            paymentSourceId: J.paymentSourceId,
            skuId: eE,
            subscriptionPlanId: X,
            currency: J.currency,
            preventFetch: !eg || eR,
            loadId: eh.loadId,
          });
        a.useEffect(() => {
          eT(eB);
        }, [eT, eB]);
        let ek = eg && (0, g.pO)(eP),
          eF =
            null !==
              (H =
                null !== (r = null != ej ? ej : eD) && void 0 !== r ? r : eG) &&
            void 0 !== H
              ? H
              : eU,
          eW = (0, o.e7)([T.Z], () => T.Z.enabled),
          eH = J.paymentSourceId,
          { hasEntitlements: eY, entitlements: eV } = (0, w.H)(eC.id, eg),
          eK = (0, v.Ap)(J.paymentSourceId),
          ez = (0, N.sE)(er, eH, X),
          eX = (0, S.Kp)({
            isTrial: e_,
            isGift: eg,
            selectedSkuId: eE,
            startedPaymentFlowWithPaymentSources: eS.current,
            inReverseTrial: eb,
          }),
          [eq, eJ] = a.useState(null == eL ? void 0 : eL.subscriptionPeriodEnd);
        a.useEffect(() => {
          null == eq && eJ(null == eL ? void 0 : eL.subscriptionPeriodEnd);
        }, [null == eL ? void 0 : eL.subscriptionPeriodEnd, eq]);
        let eQ = a.useMemo(
            () =>
              (0, v.V7)({
                skuId: eE,
                isPremium: eN,
                multiMonthPlans: [],
                currentSubscription: ef,
                isGift: eg,
                isEligibleForTrial: e_,
                defaultPlanId: ex,
                defaultToMonthlyPlan: !1,
              }),
            [eE, ef, eg, ex, eN, e_],
          ),
          e$ = (0, S.$g)(eX, eL, eC),
          e0 = a.useMemo(
            () => (e_ && null != eL ? eL : eb && null != eZ ? eZ : void 0),
            [eb, e_, eL, eZ],
          );
        if (null != eF) {
          let [e, n] = (function (e) {
            if (e.code === I.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE)
              return [F.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY, null];
            if (e.code !== I.SM.INVALID_BILLING_ADDRESS)
              return [e.message, null];
            {
              let e = F.Z.Messages.LEARN_MORE_LINK.format({
                helpdeskArticle: P.Z.getArticleURL(U.BhN.BILLING).concat(
                  U.Bjg.INVALID_BILLING_ADDRESS,
                ),
              });
              return [F.Z.Messages.BILLING_ERROR_INVALID_BILLING_ADDRESS, e];
            }
          })(eF);
          K = (0, i.jsxs)(u.FormErrorBlock, { children: [e, " ", n] });
        } else if (eg && null != eB)
          z = (0, i.jsx)(D.e9, {
            plan: eC,
            className: W.invoice,
            isPrepaidPaymentSource: eK,
            isCustomGift: ek,
            invoicePreview: eB,
          });
        else if (null != e0)
          z = (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(R.KU, { negativeMarginTop: !eb }),
              (0, i.jsxs)(R.PO, {
                className: W.invoice,
                children: [
                  (0, i.jsxs)("div", {
                    className: W.trialPriceLine,
                    children: [
                      (0, i.jsx)(u.Text, {
                        variant: "text-md/bold",
                        children: F.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                      }),
                      (0, i.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: F.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                          price: (0, A.T4)(0, e0.currency, {
                            maximumFractionDigits: 0,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: W.afterTrialPriceLine,
                    children: (0, i.jsx)(D.yT, { invoice: e0, plan: eC }),
                  }),
                ],
              }),
            ],
          });
        else {
          if (null == eL || null == eZ || e$)
            return (0, i.jsx)("div", {
              className: W.spinnerWrapper,
              children: (0, i.jsx)(u.Spinner, {}),
            });
          e_ &&
            eL.subscriptionPeriodEnd !== eZ.subscriptionPeriodEnd &&
            (V = eL.subscriptionPeriodEnd),
            (z = (0, i.jsxs)(R.PO, {
              className: W.invoice,
              children: [
                (0, i.jsx)(R.q9, {
                  children: F.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS,
                }),
                (0, i.jsx)(D.Lu, {
                  invoice: eL,
                  newPlan: eC,
                  isPrepaidPaymentSource: eK,
                  referralTrialOfferId: ed,
                }),
                eK
                  ? null
                  : (0, i.jsx)(D.nd, {
                      renewalInvoice: eZ,
                      isTrial: e_,
                      priceOptions: J,
                      overrideRenewalDate: V,
                      trialFooterMessageOverride: es,
                      hideSubscriptionDetails: eu,
                    }),
              ],
            }));
        }
        let e1 = l.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback),
          {
            checkboxLabel: e7,
            checkboxClassname: e4,
            checkboxLabelClassname: e2,
          } = (function (e, n, t) {
            let i = null,
              a = null,
              r = null;
            if (e && null != n) {
              let { intervalType: e, intervalCount: s } =
                  v.ZP.getIntervalForInvoice(n),
                l = (0, A.og)((0, A.T4)(n.total, n.currency), e, s),
                o = null != t ? t : n.subscriptionPeriodEnd;
              (i =
                F.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format(
                  {
                    termsURL: U.EYA.TERMS,
                    paidURL: U.EYA.PAID_TERMS,
                    rate: l,
                    renewalDate: o,
                  },
                )),
                (a = W.trialCheckbox),
                (r = W.trialCheckboxLabel);
            }
            return {
              checkboxLabel: i,
              checkboxClassname: a,
              checkboxLabelClassname: r,
            };
          })(null != e_ && e_, eZ, V),
          e3 = F.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
            planName: eC.name,
          });
        return (
          eg && !ek
            ? (e3 = F.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT)
            : eg && ek
              ? (e3 = "")
              : (0, v.PV)(eC.id) &&
                (e3 = v.ZP.getBillingReviewSubheader(null, eC)),
          ez
            ? null
            : (0, i.jsxs)("div", {
                className: W.stepBody,
                children: [
                  null != el &&
                    (0, i.jsxs)("div", {
                      className: W.reviewWarningMessageContainer,
                      children: [
                        (0, i.jsx)(u.CircleInformationIcon, {
                          size: "custom",
                          color: c.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 20,
                          height: 20,
                        }),
                        (0, i.jsx)(u.Text, {
                          className: W.reviewWarningMessage,
                          variant: "text-sm/normal",
                          children: el,
                        }),
                      ],
                    }),
                  K,
                  eX &&
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(R.KU, {
                          negativeMarginTop: !0,
                          negativeMarginBottom: !0,
                        }),
                        (0, i.jsx)(O.Z, {}),
                        (0, i.jsx)(Z.O, {
                          planOptions: eQ,
                          eligibleForMultiMonthPlans: !1,
                          referralTrialOfferId: void 0,
                          selectedPlanId: X,
                          subscriptionPeriodEnd: eq,
                          showTotal: !1,
                          discountInvoiceItems: ey
                            ? null == ew
                              ? void 0
                              : ew.invoiceItems
                            : void 0,
                          handleClose: em,
                        }),
                        (0, i.jsx)(R.KU, {}),
                      ],
                    }),
                  eb &&
                    (0, i.jsx)(u.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: W.trialHeader,
                      children:
                        F.Z.Messages.REVERSE_TRIAL_PAYMENT_MODAL_INFO.format({
                          trialEnd: null == ef ? void 0 : ef.currentPeriodEnd,
                        }),
                    }),
                  !e_ &&
                    (0, i.jsx)(u.FormTitle, {
                      tag: u.FormTitleTags.H5,
                      children: e3,
                    }),
                  ek &&
                    null != ev &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(j.Z, {
                          defaultAnimationState: M.S.LOOP,
                          giftStyle: ev,
                          shouldAnimate: !0,
                          className: W.__invalid_giftMainAnimation,
                        }),
                        (0, i.jsx)(G.s, { giftRecipient: eP }),
                      ],
                    }),
                  z,
                  (0, i.jsxs)("div", {
                    className: W.paymentSourceWrapper,
                    children: [
                      e_
                        ? (0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            className: W.formTitle,
                            children: F.Z.Messages.BILLING_STEP_PAYMENT_METHOD,
                          })
                        : (0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children:
                              F.Z.Messages
                                .PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                          }),
                      (0, i.jsx)(p.Z, {
                        paymentSources: Object.values(q),
                        selectedPaymentSourceId: eH,
                        prependOption:
                          eY && !e_
                            ? {
                                label:
                                  F.Z.Messages
                                    .ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null,
                              }
                            : null,
                        onChange: ee,
                        onPaymentSourceAdd: en,
                        hidePersonalInformation: eW,
                        isTrial: e_,
                      }),
                      eY && null == eH
                        ? (0, i.jsx)("div", {
                            className: W.paymentSourceOptionalWarning,
                            children:
                              F.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format(
                                { months: eV.length },
                              ),
                          })
                        : null,
                      ep
                        ? null
                        : (0, i.jsxs)(d.b, {
                            currencies: Q,
                            className: W.currencyWrapper,
                            children: [
                              (0, i.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: F.Z.Messages.PAYMENT_CURRENCY,
                              }),
                              (0, i.jsx)(d.Z, {
                                selectedCurrency: J.currency,
                                currencies: Q,
                                onChange: $,
                              }),
                            ],
                          }),
                    ],
                  }),
                  (0, i.jsx)(L.Z, {
                    isActive: ea,
                    ref: ei,
                    children: (0, i.jsx)(m.Z, {
                      onChange: et,
                      forceShow: !0,
                      checkboxLabel: e7,
                      checkboxClassname: e4,
                      checkboxLabelClassname: e2,
                      finePrint:
                        null !== (Y = !eb && es) && void 0 !== Y
                          ? Y
                          : (0, i.jsx)(_.Z, {
                              hide: e_ || ep,
                              subscriptionPlan: eC,
                              renewalInvoice: eZ,
                              isGift: eg,
                              paymentSourceType:
                                null === (t = q[null != eH ? eH : ""]) ||
                                void 0 === t
                                  ? void 0
                                  : t.type,
                              isEmbeddedIAP: eI,
                              basePrice: (0, v.aS)(eC.id, !1, eg, J),
                            }),
                      showPricingLink: eC.currency !== k.pK.USD,
                      showWithdrawalWaiver: e1,
                      disabled: eR,
                      isTrial: e_ && null == es,
                      inReverseTrial: eb,
                      isDiscount: ep,
                      subscriptionPlan: eC,
                      isGift: eg,
                    }),
                  }),
                ],
              })
        );
      }
    },
    664891: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return D;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        r = t(512722),
        s = t.n(r),
        l = t(742280),
        o = t(442837),
        c = t(481060),
        u = t(190947),
        d = t(224550),
        _ = t(275850),
        p = t(672971),
        m = t(100527),
        I = t(906732),
        f = t(987209),
        E = t(598),
        x = t(45572),
        N = t(614223),
        S = t(246946),
        T = t(351402),
        h = t(509545),
        b = t(74538),
        g = t(296848),
        P = t(374649),
        v = t(642530),
        A = t(653798),
        M = t(585602),
        y = t(314182),
        C = t(314404),
        O = t(42818),
        R = t(981631),
        L = t(689938),
        j = t(121622),
        Z = t(56035);
      function D(e) {
        var n;
        let t,
          {
            premiumSubscription: r,
            paymentSources: m,
            priceOptions: I,
            onPaymentSourceChange: P,
            onPaymentSourceAdd: M,
            planId: O,
            setHasAcceptedTerms: j,
            legalTermsNodeRef: D,
            hasLegalTermsFlash: F,
            onInvoiceError: W,
            planGroup: H,
            currencies: Y,
            onCurrencyChange: V,
            hasOpenInvoice: K,
            purchaseState: z,
            handleClose: X,
          } = e,
          {
            selectedSkuId: q,
            defaultPlanId: J,
            isPremium: Q,
            startedPaymentFlowWithPaymentSourcesRef: $,
          } = (0, E.usePaymentContext)(),
          { isGift: ee } = (0, f.wD)(),
          en = I.paymentSourceId,
          et = (0, o.e7)([h.Z], () => h.Z.get(O));
        s()(null != et, "Missing newPlan");
        let ei = (0, o.e7)([S.Z], () => S.Z.hidePersonalInformation),
          ea = l.M.EEA_COUNTRIES.has(T.Z.ipCountryCodeWithFallback),
          er = z === x.A.PURCHASING || z === x.A.COMPLETED,
          es = (0, N.Kp)({
            isTrial: !1,
            isGift: ee,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: $.current,
          }),
          el = (null == r ? void 0 : r.status) === R.O0b.PAUSED,
          eo = a.useMemo(
            () =>
              (0, b.V7)({
                skuId: q,
                isPremium: Q,
                multiMonthPlans: [],
                currentSubscription: r,
                isGift: ee,
                isEligibleForTrial: !1,
                defaultPlanId: J,
                defaultToMonthlyPlan: !1,
              }),
            [q, r, J, Q, ee],
          );
        t =
          K || el
            ? L.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER
            : (0, b.PV)(O)
              ? (0, b.W_)(r, et)
              : L.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                  planName: et.name,
                });
        let ec = null;
        return (
          null != r &&
            (ec = K
              ? (0, i.jsx)(w, {
                  premiumSubscription: r,
                  onInvoiceError: W,
                  priceOptions: I,
                  preventFetch: !1,
                })
              : el
                ? (0, i.jsx)(U, {
                    premiumSubscription: r,
                    onInvoiceError: W,
                    priceOptions: I,
                    preventFetch: er,
                  })
                : (0, g.R4)(r, O, H)
                  ? (0, i.jsx)(G, {
                      premiumSubscription: r,
                      newPlan: et,
                      onInvoiceError: W,
                      planGroup: H,
                      priceOptions: I,
                      preventFetch: er,
                    })
                  : (0, i.jsx)(k, {
                      premiumSubscription: r,
                      newPlan: et,
                      planGroup: H,
                      priceOptions: I,
                      preventFetch: er,
                    })),
          (0, i.jsxs)("div", {
            className: Z.stepBody,
            children: [
              !el &&
                es &&
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(A.KU, {
                      negativeMarginBottom: !0,
                      negativeMarginTop: !0,
                    }),
                    (0, i.jsx)(v.Z, {}),
                    (0, i.jsx)(C.O, {
                      planOptions: eo,
                      eligibleForMultiMonthPlans: !1,
                      selectedPlanId: O,
                      showTotal: !1,
                      handleClose: X,
                    }),
                    (0, i.jsx)(A.KU, {}),
                  ],
                }),
              (0, i.jsx)(c.FormTitle, { tag: c.FormTitleTags.H5, children: t }),
              ec,
              (0, i.jsxs)("div", {
                className: Z.paymentSourceWrapper,
                children: [
                  (0, i.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H5,
                    children:
                      L.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                  }),
                  (0, i.jsx)(_.Z, {
                    paymentSources: Object.values(m),
                    selectedPaymentSourceId: en,
                    onChange: P,
                    onPaymentSourceAdd: M,
                    hidePersonalInformation: ei,
                    disabled: er,
                  }),
                ],
              }),
              (0, i.jsxs)(u.b, {
                currencies: Y,
                className: Z.currencyWrapper,
                children: [
                  (0, i.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H5,
                    children: L.Z.Messages.PAYMENT_CURRENCY,
                  }),
                  (0, i.jsx)(u.Z, {
                    selectedCurrency: I.currency,
                    currencies: Y,
                    onChange: V,
                    disabled: er,
                  }),
                ],
              }),
              (0, i.jsx)(y.Z, {
                isActive: F,
                ref: D,
                children:
                  null != r && (0, g.R4)(r, O, H)
                    ? (0, i.jsx)(B, {
                        premiumSubscription: r,
                        newPlan: et,
                        onInvoiceError: W,
                        planGroup: H,
                        priceOptions: I,
                        preventFetch: er,
                        disabled: er,
                        isEEA: ea,
                        paymentSources: m,
                        setHasAcceptedTerms: j,
                      })
                    : (0, i.jsx)(p.Z, {
                        onChange: j,
                        finePrint: (0, i.jsx)(d.Z, {
                          subscriptionPlan: et,
                          paymentSourceType:
                            null === (n = m[null != en ? en : ""]) ||
                            void 0 === n
                              ? void 0
                              : n.type,
                          basePrice: (0, b.aS)(et.id, !1, ee, I),
                          currentSubscription: r,
                          planGroup: H,
                        }),
                        forceShow: !0,
                        showPricingLink: et.currency !== R.pKx.USD,
                        showWithdrawalWaiver: ea,
                        disabled: er,
                        subscriptionPlan: et,
                        currentSubscription: r,
                        planGroup: H,
                      }),
              }),
            ],
          })
        );
      }
      function w(e) {
        let {
            premiumSubscription: n,
            onInvoiceError: t,
            priceOptions: r,
            preventFetch: s,
          } = e,
          [l, o] = (0, P.Ox)({ subscriptionId: n.id, preventFetch: s });
        a.useEffect(() => {
          t(o);
        }, [t, o]);
        let u = (0, b.Ap)(r.paymentSourceId);
        return null != l
          ? (0, i.jsxs)(A.PO, {
              className: j.__invalid_invoice,
              children: [
                (0, i.jsx)(O.By, { invoice: l, isPrepaidPaymentSource: u }),
                (0, i.jsx)(O.nd, {
                  premiumSubscription: n,
                  renewalInvoice: l,
                  isUpdate: !0,
                  isPrepaidPaymentSource: u,
                }),
              ],
            })
          : (0, i.jsx)(c.Spinner, {});
      }
      function G(e) {
        let {
            premiumSubscription: n,
            newPlan: t,
            onInvoiceError: r,
            planGroup: s,
            priceOptions: l,
            preventFetch: o,
          } = e,
          { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0,
          E.usePaymentContext)(),
          { isGift: _ } = (0, f.wD)(),
          { analyticsLocations: p } = (0, I.ZP)(),
          x = (0, b.al)(n, t.id, 1, new Set(s)),
          [S, T] = (0, P.ED)({
            subscriptionId: n.id,
            items: x,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: o,
            analyticsLocations: p,
            analyticsLocation:
              m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
          }),
          [h, g] = (0, P.ED)({
            subscriptionId: n.id,
            items: x,
            renewal: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: o,
            analyticsLocations: p,
            analyticsLocation:
              m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          }),
          v = null != T ? T : g;
        if (
          (a.useEffect(() => {
            r(v);
          }, [r, v]),
          null != v)
        )
          return (0, i.jsx)(c.FormErrorBlock, { children: v.message });
        let M = (0, N.Kp)({
            isTrial: !1,
            isGift: _,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current,
          }),
          y = (0, N.$g)(M, S, t);
        if (null == S || null == h || y)
          return (0, i.jsx)(c.Spinner, { className: Z.__invalid_spinner });
        let C = (0, b.Ap)(l.paymentSourceId);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(O.hG, { proratedInvoice: S, renewalInvoice: h }),
            (0, i.jsxs)(A.PO, {
              className: Z.invoice,
              children: [
                (0, i.jsx)(A.q9, {
                  children: L.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS,
                }),
                (0, i.jsx)(O.Lu, {
                  invoice: S,
                  newPlan: t,
                  isPrepaidPaymentSource: C,
                }),
                (0, i.jsx)(O.nd, {
                  premiumSubscription: n,
                  proratedInvoice: S,
                  renewalInvoice: h,
                  isUpdate: !0,
                  isPrepaidPaymentSource: C,
                }),
              ],
            }),
          ],
        });
      }
      function B(e) {
        var n, t;
        let r,
          {
            premiumSubscription: s,
            newPlan: l,
            onInvoiceError: o,
            planGroup: u,
            priceOptions: _,
            preventFetch: f,
            disabled: E,
            isEEA: x,
            paymentSources: N,
            setHasAcceptedTerms: S,
          } = e,
          { analyticsLocations: T } = (0, I.ZP)(),
          h = (0, b.al)(s, l.id, 1, new Set(u)),
          [g, v] = (0, P.ED)({
            subscriptionId: s.id,
            items: h,
            renewal: !0,
            paymentSourceId: _.paymentSourceId,
            currency: _.currency,
            preventFetch: f,
            analyticsLocations: T,
            analyticsLocation:
              m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          });
        return (a.useEffect(() => {
          o(v);
        }, [o, v]),
        null != v)
          ? (0, i.jsx)(c.FormErrorBlock, { children: v.message })
          : (null != g &&
                (r = {
                  amount: g.total,
                  currency: g.currency,
                  tax: g.tax,
                  taxInclusive: g.taxInclusive,
                }),
              null == r)
            ? null
            : (0, i.jsx)(p.Z, {
                onChange: S,
                finePrint: (0, i.jsx)(d.Z, {
                  subscriptionPlan: l,
                  paymentSourceType:
                    null ===
                      (n =
                        N[
                          null !== (t = _.paymentSourceId) && void 0 !== t
                            ? t
                            : ""
                        ]) || void 0 === n
                      ? void 0
                      : n.type,
                  basePrice: r,
                  currentSubscription: s,
                  planGroup: u,
                }),
                forceShow: !0,
                showPricingLink: l.currency !== R.pKx.USD,
                showWithdrawalWaiver: x,
                disabled: E,
                subscriptionPlan: l,
                currentSubscription: s,
                planGroup: u,
              });
      }
      function U(e) {
        let {
            premiumSubscription: n,
            priceOptions: t,
            preventFetch: r,
            onInvoiceError: s,
          } = e,
          { analyticsLocations: l } = (0, I.ZP)(),
          [o, u] = (0, P.ED)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
            preventFetch: r,
            analyticsLocations: l,
            analyticsLocation:
              m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
          }),
          [d, _] = (0, P.ED)({
            subscriptionId: n.id,
            renewal: !0,
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
            preventFetch: r,
            analyticsLocations: l,
            analyticsLocation:
              m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
          }),
          p = null != u ? u : _;
        if (
          (a.useEffect(() => {
            s(p);
          }, [s, p]),
          null != p)
        )
          return (0, i.jsx)(c.FormErrorBlock, { children: p.message });
        if (null == o || null == d)
          return (0, i.jsx)(c.Spinner, { className: Z.__invalid_spinner });
        let f = (0, b.Ap)(t.paymentSourceId);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: j.renewalInvoiceDate,
              children:
                L.Z.Messages.BILLING_RESUME_PAUSED_SUBSCRIPTION_IMMEDIATELY,
            }),
            (0, i.jsxs)(A.PO, {
              className: Z.invoice,
              children: [
                (0, i.jsx)(A.q9, {
                  children: L.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS,
                }),
                (0, i.jsx)(O.By, { invoice: o, isPrepaidPaymentSource: f }),
                (0, i.jsx)(O.nd, {
                  premiumSubscription: n,
                  renewalInvoice: d,
                  isUpdate: !0,
                  isPrepaidPaymentSource: f,
                }),
              ],
            }),
          ],
        });
      }
      function k(e) {
        let n,
          {
            premiumSubscription: t,
            newPlan: a,
            planGroup: r,
            priceOptions: s,
            preventFetch: l,
          } = e,
          { analyticsLocations: o } = (0, I.ZP)(),
          [u, d] = (0, P.ED)({
            subscriptionId: t.id,
            items: (0, b.al)(t, a.id, 1, new Set(r)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: o,
            analyticsLocation:
              "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
          });
        if (null != d)
          return (0, i.jsx)(c.FormErrorBlock, { children: d.message });
        if (null == u)
          return (0, i.jsx)("div", { children: (0, i.jsx)(c.Spinner, {}) });
        n = t.type === R.NYc.PREMIUM ? (0, b.Gf)(a.id) : a.name;
        let _ = (0, b.Ap)(s.paymentSourceId);
        return (0, i.jsxs)("div", {
          className: Z.bodyText,
          children: [
            (0, i.jsx)("div", {
              className: j.renewalInvoiceDate,
              children: L.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                renewalDate: u.subscriptionPeriodStart,
              }),
            }),
            (0, i.jsxs)(A.PO, {
              className: Z.invoice,
              children: [
                (0, i.jsx)(A.q9, {
                  children: L.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES,
                }),
                (0, i.jsx)(A.R$, { label: n, value: (0, b.PK)(a, s, !0) }),
                (0, i.jsx)(M.Z, { invoice: u }),
                (0, i.jsx)(A.KU, {}),
                (0, i.jsx)(O.nd, {
                  premiumSubscription: t,
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
    196567: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        s = t(481060),
        l = t(96247);
      function o(e) {
        let {
          className: n,
          copy: t,
          bannerImage: a,
          textColor: o = "always-white",
          hideGiftIcon: c = !1,
        } = e;
        return (0, i.jsxs)("div", {
          className: r()(l.bannerContainer, n),
          children: [
            null == a
              ? null
              : (0, i.jsx)("img", { alt: "", className: l.banner, src: a }),
            (0, i.jsxs)("div", {
              className: l.textContainer,
              children: [
                !1 === c &&
                  (0, i.jsx)(s.GiftIcon, {
                    size: "md",
                    color: "currentColor",
                    className: l.giftIcon,
                  }),
                (0, i.jsx)(s.Heading, {
                  className: r()(l.textHeader, {
                    [l.textHeaderWithGiftIcon]: !c,
                  }),
                  color: o,
                  variant: "eyebrow",
                  children: t,
                }),
              ],
            }),
          ],
        });
      }
    },
    993413: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(757143);
      var i = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        s = t(481060),
        l = t(403182),
        o = t(587446),
        c = t(504983),
        u = t(837547);
      function d(e) {
        let { errors: n } = e;
        return (0, i.jsx)(i.Fragment, {
          children: n.map((e, n) =>
            (0, i.jsx)(
              s.Text,
              {
                variant: "text-xs/normal",
                color: "text-danger",
                className: u.errorMessage,
                children: e.replace(/[0-9.,]+ ?kb/g, (e) => {
                  let n = 1024 * parseInt(e, 10);
                  return isNaN(n) ? e : (0, l.Ng)(n);
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
          titleIcon: t,
          titleId: a,
          description: l,
          children: _,
          className: p,
          errors: m,
          disabled: I = !1,
          hideDivider: f = !1,
          showBorder: E = !1,
          borderType: x,
          hasBackground: N = !1,
          forcedDivider: S = !1,
          showPremiumIcon: T = !1,
        } = e;
        return (0, i.jsx)("div", {
          className: r()(u.customizationSection, p, {
            [u.disabled]: I,
            [u.hideDivider]: f,
            [u.showBorder]: E,
            [u.withDivider]: S,
          }),
          children: (0, i.jsxs)(c.Z, {
            className: u.customizationSectionBorder,
            backgroundClassName: u.customizationSectionBackground,
            isShown: E,
            type: x,
            hasBackground: N,
            children: [
              (0, i.jsxs)(s.FormTitle, {
                className: u.title,
                id: a,
                children: [n, T && (0, i.jsx)(o.Z, {}), t],
              }),
              null != l
                ? (0, i.jsx)(s.FormText, {
                    type: s.FormText.Types.DESCRIPTION,
                    className: u.sectionDescription,
                    children: l,
                  })
                : null,
              _,
              null != m && (0, i.jsx)(d, { errors: m }),
            ],
          }),
        });
      }
    },
    321051: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        r = t(692547),
        s = t(481060),
        l = t(697426),
        o = t(603074),
        c = t(689938),
        u = t(84340);
      let d = [54, 8, 8, 8];
      function _(e) {
        let { onSelect: n, sound: t } = e,
          [_, p] = a.useState(!1);
        function m(e) {
          p(!1), null == n || n(e);
        }
        let I = (e) =>
          (0, i.jsxs)("div", {
            className: u.customGiftHeader,
            children: [
              (0, i.jsxs)("div", {
                className: u.__invalid_customGiftHeaderText,
                children: [
                  (0, i.jsx)(s.Text, {
                    variant: "text-md/bold",
                    children: c.Z.Messages.GIFT_SELECT_SOUND,
                  }),
                  (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children:
                      c.Z.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION,
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: u.searchAndSound, children: e }),
            ],
          });
        return (0, i.jsx)(s.Popout, {
          shouldShow: _,
          position: "bottom",
          align: "left",
          onRequestClose: () => p(!1),
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(s.Dialog, {
              children: (0, i.jsx)(o.Z, {
                suppressPlaySound: !0,
                shouldShowUpsell: !1,
                guildId: null,
                channel: null,
                onClose: n,
                onSelect: m,
                analyticsSource: "gift soundboard",
                soundButtonOverlay: l.Pb.ADD,
                listPadding: d,
                renderHeader: I,
                defaultSoundsOnly: !0,
              }),
            });
          },
          children: () =>
            (0, i.jsx)(s.Clickable, {
              className: u.sound,
              onClick: () => p(!0),
              children:
                null == t
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(s.SoundboardIcon, {
                          size: "custom",
                          color: r.Z.colors.WHITE,
                          className: u.soundIcon,
                          width: 14,
                          height: 14,
                        }),
                        (0, i.jsx)(s.Text, {
                          className: u.text,
                          variant: "text-sm/semibold",
                          children: c.Z.Messages.GIFT_SELECT_SOUND,
                        }),
                      ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(s.Text, {
                          className: u.textSelected,
                          variant: "text-sm/semibold",
                          children: t.emojiName,
                        }),
                        (0, i.jsx)(s.Text, {
                          className: u.text,
                          variant: "text-sm/semibold",
                          children: t.name,
                        }),
                      ],
                    }),
            }),
        });
      }
      function p(e) {
        let { sound: n, onSelect: t } = e;
        return (0, i.jsx)("div", {
          className: u.container,
          children: (0, i.jsx)(_, { onSelect: t, sound: n }),
        });
      }
    },
    991862: function (e, n, t) {
      t.d(n, {
        T: function () {
          return a;
        },
      });
      var i = t(689938);
      function a(e) {
        switch (e) {
          case "brl":
            return i.Z.Messages.BRL_NAME;
          case "pln":
            return i.Z.Messages.PLN_NAME;
          case "try":
            return i.Z.Messages.TRY_NAME;
          case "usd":
            return i.Z.Messages.USD_NAME;
          case "aud":
            return i.Z.Messages.AUD_NAME;
          case "pen":
            return i.Z.Messages.PEN_NAME;
          case "php":
            return i.Z.Messages.PHP_NAME;
          case "ars":
            return i.Z.Messages.ARS_NAME;
          case "cop":
            return i.Z.Messages.COP_NAME;
          case "clr":
            return i.Z.Messages.CLR_NAME;
          case "jpy":
            return i.Z.Messages.JPY_NAME;
          case "idr":
            return i.Z.Messages.IDR_NAME;
          case "vnd":
            return i.Z.Messages.VND_NAME;
          case "thb":
            return i.Z.Messages.THB_NAME;
          case "myr":
            return i.Z.Messages.MYR_NAME;
          case "krw":
            return i.Z.Messages.KRW_NAME;
          case "mxn":
            return i.Z.Messages.MXN_NAME;
          case "bgn":
            return i.Z.Messages.BGN_NAME;
          case "czk":
            return i.Z.Messages.CZK_NAME;
          case "dkk":
            return i.Z.Messages.DKK_NAME;
          case "huf":
            return i.Z.Messages.HUF_NAME;
          case "ron":
            return i.Z.Messages.RON_NAME;
          case "sek":
            return i.Z.Messages.SEK_NAME;
          case "eur":
            return i.Z.Messages.EUR_NAME;
          default:
            return "";
        }
      }
    },
    977018: function (e, n, t) {
      e.exports = {
        cardBrands: "cardBrands_c7dd62",
        cardFormHeader: "cardFormHeader_c7dd62",
        jcb: "jcb_c7dd62",
        jcb_monochrome: "jcb_monochrome_c7dd62",
        amex: "amex_c7dd62",
        amex_monochrome: "amex_monochrome_c7dd62",
        mastercard: "mastercard_c7dd62",
        mastercard_monochrome: "mastercard_monochrome_c7dd62",
        visa: "visa_c7dd62",
        visa_monochrome: "visa_monochrome_c7dd62",
        discover: "discover_c7dd62",
        discover_monochrome: "discover_monochrome_c7dd62",
        dinersclub: "dinersclub_c7dd62",
        dinersclub_monochrome: "dinersclub_monochrome_c7dd62",
        unionpay: "unionpay_c7dd62",
        unionpay_monochrome: "unionpay_monochrome_c7dd62",
      };
    },
    181158: function (e, n, t) {
      e.exports = {
        buttonIcon: "buttonIcon_b78763",
        button: "button_b78763",
        allPaymentsToggleButton: "allPaymentsToggleButton_b78763",
        allPaymentsSection: "allPaymentsSection_b78763",
        hidden: "hidden_b78763",
        newPaymentBadge: "newPaymentBadge_b78763",
        SeparatorUpper: "SeparatorUpper_b78763",
        SeparatorLower: "SeparatorLower_b78763",
      };
    },
    702512: function (e, n, t) {
      e.exports = {
        row: "row_af1276",
        width100: "width100_af1276 section_af1276",
        width75: "width75_af1276 section_af1276",
        width60: "width60_af1276 section_af1276",
        width40: "width40_af1276 section_af1276",
        width30: "width30_af1276 section_af1276",
        width50: "width50_af1276 section_af1276",
        width25: "width25_af1276 section_af1276",
      };
    },
    191334: function (e, n, t) {
      e.exports = {
        paymentSourceNoticeCopy: "paymentSourceNoticeCopy_c8729e",
        divider: "divider_c8729e",
      };
    },
    299173: function (e, n, t) {
      e.exports = { container: "container_e32115", icon: "icon_e32115" };
    },
    411212: function (e, n, t) {
      e.exports = { errorBlock: "errorBlock_a2a4ff" };
    },
    447216: function (e, n, t) {
      e.exports = {
        note: "note_e0037c",
        icon: "icon_e0037c",
        large: "large_e0037c",
        small: "small_e0037c",
        colorWarning: "colorWarning_e0037c",
        colorError: "colorError_e0037c",
        colorPrimary: "colorPrimary_e0037c",
        colorSecondary: "colorSecondary_e0037c",
      };
    },
    783820: function (e, n, t) {
      e.exports = {
        paymentSourceLabel: "paymentSourceLabel_aa60eb",
        paymentSourceSelectedOption: "paymentSourceSelectedOption_aa60eb",
        paymentSourceHasWarning: "paymentSourceHasWarning_aa60eb",
        paymentSourceWarning: "paymentSourceWarning_aa60eb",
        paymentSourceWarningIcon: "paymentSourceWarningIcon_aa60eb",
        error: "error_aa60eb",
      };
    },
    223811: function (e, n, t) {
      e.exports = {
        inputWrapper: "inputWrapper_c40e61",
        paypalIcon: "paypalIcon_c40e61",
        paypalInput: "paypalInput_c40e61",
      };
    },
    726994: function (e, n, t) {
      e.exports = {
        formTitle: "formTitle_e5aa30",
        checkbox: "checkbox_e5aa30",
        checkboxLabel: "checkboxLabel_e5aa30",
        finePrint: "finePrint_e5aa30",
      };
    },
    647140: function (e, n, t) {
      e.exports = {
        cardNumberWrapper: "cardNumberWrapper_c04e45",
        cardIcon: "cardIcon_c04e45",
        cardInput: "cardInput_c04e45",
        hiddenDiv: "hiddenDiv_c04e45",
        cardNumberInput: "cardNumberInput_c04e45",
        cardInputFocused: "cardInputFocused_c04e45",
        cardInputError: "cardInputError_c04e45",
      };
    },
    473276: function (e, n, t) {
      e.exports = { p24Form: "p24Form_a31387" };
    },
    520503: function (e, n, t) {
      e.exports = {
        venmoIcon: "venmoIcon_b0022c",
        connectionInstructions: "connectionInstructions_b0022c",
      };
    },
    192055: function (e, n, t) {
      e.exports = { awaitingWrapper: "awaitingWrapper_a4ec0f" };
    },
    701681: function (e, n, t) {
      e.exports = {
        cardNumberWrapper: "cardNumberWrapper_d96ca5",
        cardIcon: "cardIcon_d96ca5",
        submitting: "submitting_d96ca5",
        cardNumberInput: "cardNumberInput_d96ca5",
      };
    },
    885660: function (e, n, t) {
      e.exports = {
        body: "body_edd4d7",
        nonTopInputWrapper: "nonTopInputWrapper_edd4d7",
        bankSelectionStub: "bankSelectionStub_edd4d7",
      };
    },
    715125: function (e, n, t) {
      e.exports = {
        container: "container_e4d3f1",
        iconBackground: "iconBackground_e4d3f1",
        link: "link_e4d3f1",
      };
    },
    210702: function (e, n, t) {
      t.r(
        (e.exports = {
          cardIcon: "cardIcon_c4e271",
          visa: "visa_c4e271",
          amex: "amex_c4e271",
          "american-express": "american-express_c4e271",
          discover: "discover_c4e271",
          mastercard: "mastercard_c4e271",
          "master-card": "master-card_c4e271",
          paypal: "paypal_c4e271",
          paymentRequest: "paymentRequest_c4e271",
          gPay: "gPay_c4e271",
          sofort: "sofort_c4e271",
          przelewy24: "przelewy24_c4e271",
          giropay: "giropay_c4e271",
          paysafecard: "paysafecard_c4e271",
          gcash: "gcash_c4e271",
          grabpay: "grabpay_c4e271",
          momo_wallet: "momo_wallet_c4e271",
          venmo: "venmo_c4e271",
          kakaopay: "kakaopay_c4e271",
          gopay_wallet: "gopay_wallet_c4e271",
          bancontact: "bancontact_c4e271",
          eps: "eps_c4e271",
          ideal: "ideal_c4e271",
          cash_app: "cash_app_c4e271",
          apple: "apple_c4e271",
          cardIconSmall: "cardIconSmall_c4e271 cardIcon_c4e271",
          cardIconMedium: "cardIconMedium_c4e271 cardIcon_c4e271",
          cardIconLarge: "cardIconLarge_c4e271 cardIcon_c4e271",
          cardIconXLarge: "cardIconXLarge_c4e271 cardIcon_c4e271",
          flipped: "flipped_c4e271",
        }),
      );
    },
    599181: function (e, n, t) {
      e.exports = {
        awaitingAuthenticationStep: "awaitingAuthenticationStep_f10fc5",
      };
    },
    746326: function (e, n, t) {
      e.exports = { body: "body_e16e99" };
    },
    448109: function (e, n, t) {
      e.exports = { wrapper: "wrapper_bfc2c6" };
    },
    181729: function (e, n, t) {
      e.exports = { back: "back_fd80e5" };
    },
    529449: function (e, n, t) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    545533: function (e, n, t) {
      e.exports = { body: "body_a349ec", description: "description_a349ec" };
    },
    957304: function (e, n, t) {
      e.exports = { paymentNote: "paymentNote_d791fd" };
    },
    56035: function (e, n, t) {
      e.exports = {
        root: "root_df35cb",
        shaker: "shaker_df35cb",
        stepBody: "stepBody_df35cb",
        bodyText: "bodyText_df35cb",
        invoice: "invoice_df35cb",
        paymentSourceWrapper: "paymentSourceWrapper_df35cb",
        paymentSourceOptionalWarning: "paymentSourceOptionalWarning_df35cb",
        currencyWrapper: "currencyWrapper_df35cb",
        trialCheckbox: "trialCheckbox_df35cb",
        trialCheckboxLabel: "trialCheckboxLabel_df35cb",
        loader: "loader_df35cb",
        contentWrapper: "contentWrapper_df35cb",
        reviewWarningMessageContainer: "reviewWarningMessageContainer_df35cb",
        reviewWarningMessage: "reviewWarningMessage_df35cb",
        trialPriceLine: "trialPriceLine_df35cb",
        afterTrialPriceLine: "afterTrialPriceLine_df35cb",
        formTitle: "formTitle_df35cb",
        spinnerWrapper: "spinnerWrapper_df35cb",
        trialHeader: "trialHeader_df35cb",
      };
    },
    488579: function (e, n, t) {
      e.exports = {
        stepBody: "stepBody_ad3708",
        invoice: "invoice_ad3708",
        paymentSourceWrapper: "paymentSourceWrapper_ad3708",
        subscriptionCostRow: "subscriptionCostRow_ad3708",
        invoiceSpinner: "invoiceSpinner_ad3708",
        errorBlock: "errorBlock_ad3708",
        fineprint: "fineprint_ad3708",
        skuHeading: "skuHeading_ad3708",
        skuHeadingText: "skuHeadingText_ad3708",
      };
    },
    326397: function (e, n, t) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_faa800",
        profileEffectBackground: "profileEffectBackground_faa800",
        giftMainAnimationWrapper: "giftMainAnimationWrapper_faa800",
        avatar: "avatar_faa800",
      };
    },
    773360: function (e, n, t) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    246502: function (e, n, t) {
      e.exports = {
        table: "table_df16c1",
        header: "header_df16c1",
        row: "row_df16c1 rowBase_df16c1",
        rowAmount: "rowAmount_df16c1",
        rowLabel: "rowLabel_df16c1",
        rowPercentDiscount: "rowPercentDiscount_df16c1",
        rowDiscountOriginalPrice: "rowDiscountOriginalPrice_df16c1",
        entitlementDiscountRow: "entitlementDiscountRow_df16c1 rowBase_df16c1",
        divider: "divider_df16c1",
        negativeMarginTop: "negativeMarginTop_df16c1",
        negativeMarginBottom: "negativeMarginBottom_df16c1",
        dividerExtended: "dividerExtended_df16c1",
        totalRow: "totalRow_df16c1",
        totalLabel: "totalLabel_df16c1",
        totalAmount: "totalAmount_df16c1",
        finePrint: "finePrint_df16c1",
        trialEndPrice: "trialEndPrice_df16c1",
      };
    },
    25817: function (e, n, t) {
      e.exports = { pricePerInterval: "pricePerInterval_d06503" };
    },
    260173: function (e, n, t) {
      e.exports = {
        body: "body_bb2fc6",
        paymentModalBreadcrumbs: "paymentModalBreadcrumbs_bb2fc6",
        paymentModalError: "paymentModalError_bb2fc6",
      };
    },
    651949: function (e, n, t) {
      e.exports = {
        body: "body_e76e48",
        textArea: "textArea_e76e48",
        editorTextArea: "editorTextArea_e76e48",
      };
    },
    432734: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_b0b022",
        wrapperActive: "wrapperActive_b0b022",
      };
    },
    62612: function (e, n, t) {
      e.exports = {
        giftMainAnimation: "giftMainAnimation_d90c00",
        soundEmojiContainer: "soundEmojiContainer_d90c00",
        sound: "sound_d90c00",
        emoji: "emoji_d90c00",
        animation: "animation_d90c00",
        spinner: "spinner_d90c00",
        giftBoxOptionContainer: "giftBoxOptionContainer_d90c00",
      };
    },
    464971: function (e, n, t) {
      e.exports = {
        container: "container_b96147",
        emojiList: "emojiList_b96147",
        emoji: "emoji_b96147",
        textSelected: "textSelected_b96147",
        text: "text_b96147",
        emojiIcon: "emojiIcon_b96147",
        customGiftContent: "customGiftContent_b96147",
        emojiHeader: "emojiHeader_b96147",
        customGiftHeader: "customGiftHeader_b96147",
      };
    },
    154250: function (e, n, t) {
      e.exports = {
        customGiftBox: "customGiftBox_c4afc7",
        customGiftBoxHighlighted: "customGiftBoxHighlighted_c4afc7",
      };
    },
    650460: function (e, n, t) {
      e.exports = { link: "link_b84b34" };
    },
    83644: function (e, n, t) {
      e.exports = {
        content: "content_cc6017",
        breadcrumbsWrapper: "breadcrumbsWrapper_cc6017",
        bodyWrapper: "bodyWrapper_cc6017",
        scroller: "scroller_cc6017",
        errorBlockWrapper: "errorBlockWrapper_cc6017",
        paymentNote: "paymentNote_cc6017",
        loadingBlock: "loadingBlock_cc6017",
        sequencer: "sequencer_cc6017",
        sequencerStatic: "sequencerStatic_cc6017",
        sequencerAnimatedNode: "sequencerAnimatedNode_cc6017",
      };
    },
    835657: function (e, n, t) {
      e.exports = {
        stepBody: "stepBody_d439ef",
        stepBodyCustomGift: "stepBodyCustomGift_d439ef",
        bodyColumnMiddle: "bodyColumnMiddle_d439ef",
        bodyColumnRight: "bodyColumnRight_d439ef",
        bodyText: "bodyText_d439ef",
        selectPlanDivider: "selectPlanDivider_d439ef",
        selectPlanChooseTitle: "selectPlanChooseTitle_d439ef",
        selectPlanTotalRow: "selectPlanTotalRow_d439ef",
        planSelectSeparator: "planSelectSeparator_d439ef",
        trialPlanSelectHeader: "trialPlanSelectHeader_d439ef",
        legacyPricingNotice: "legacyPricingNotice_d439ef",
      };
    },
    104125: function (e, n, t) {
      e.exports = {
        subscriptionCostRow: "subscriptionCostRow_cefa38",
        invoiceItemLabelWithIcon: "invoiceItemLabelWithIcon_cefa38",
        invoiceItemLabelIcon: "invoiceItemLabelIcon_cefa38",
        invoiceItemTooltip: "invoiceItemTooltip_cefa38",
        subscriptionDetailsToggle: "subscriptionDetailsToggle_cefa38",
        subscriptionDetailsToggleCaret: "subscriptionDetailsToggleCaret_cefa38",
        subscriptionPeriodResetNotice: "subscriptionPeriodResetNotice_cefa38",
        subscriptionAddedInvoiceItem: "subscriptionAddedInvoiceItem_cefa38",
        purchaseDetailsHeaderText: "purchaseDetailsHeaderText_cefa38",
      };
    },
    379573: function (e, n, t) {
      e.exports = {
        planOption: "planOption_bd3462",
        planOneTimeCost: "planOneTimeCost_bd3462",
        selectionBox: "selectionBox_bd3462",
        selectedPlan: "selectedPlan_bd3462",
        planOptionDisabled: "planOptionDisabled_bd3462",
        planOptionClickable: "planOptionClickable_bd3462",
        planOptionCheckbox: "planOptionCheckbox_bd3462",
        planOptionInterval: "planOptionInterval_bd3462",
        optionSelected: "optionSelected_bd3462",
        planOptionCurrentPlan: "planOptionCurrentPlan_bd3462",
        planOptionMonthsFree: "planOptionMonthsFree_bd3462",
        planOptionDiscount: "planOptionDiscount_bd3462",
        planOptionSubtextContainer: "planOptionSubtextContainer_bd3462",
        planOptionSubtext: "planOptionSubtext_bd3462",
        discountPlanOptionSubtext: "discountPlanOptionSubtext_bd3462",
        planOptionClickableContainer: "planOptionClickableContainer_bd3462",
        updatedOptionSelected: "updatedOptionSelected_bd3462",
        optionPriceSelected: "optionPriceSelected_bd3462",
      };
    },
    221422: function (e, n, t) {
      e.exports = {
        giftRecipientInfo: "giftRecipientInfo_cc6d95",
        content: "content_cc6d95",
        giftRecipientName: "giftRecipientName_cc6d95",
        giftRecipientTag: "giftRecipientTag_cc6d95",
      };
    },
    152029: function (e, n, t) {
      e.exports = {
        icon: "icon_ab4bd1",
        connectionInstructions: "connectionInstructions_ab4bd1",
      };
    },
    121622: function (e, n, t) {
      e.exports = { renewalInvoiceDate: "renewalInvoiceDate_ff918e" };
    },
    357831: function (e, n, t) {
      e.exports = {
        nitroIcon: "nitroIcon_fb0d51",
        innerButton: "innerButton_fb0d51",
      };
    },
    96247: function (e, n, t) {
      e.exports = {
        bannerContainer: "bannerContainer_dffbd4",
        giftIcon: "giftIcon_dffbd4",
        textContainer: "textContainer_dffbd4",
        textHeader: "textHeader_dffbd4",
        textHeaderWithGiftIcon: "textHeaderWithGiftIcon_dffbd4",
        banner: "banner_dffbd4",
      };
    },
    837547: function (e, n, t) {
      e.exports = {
        title: "title_b3a5c2",
        disabled: "disabled_b3a5c2",
        customizationSection: "customizationSection_b3a5c2",
        hideDivider: "hideDivider_b3a5c2",
        withDivider: "withDivider_b3a5c2",
        showBorder: "showBorder_b3a5c2",
        customizationSectionBackground: "customizationSectionBackground_b3a5c2",
        sectionDescription: "sectionDescription_b3a5c2",
        errorMessage: "errorMessage_b3a5c2",
        customizationSectionBorder: "customizationSectionBorder_b3a5c2",
      };
    },
    84340: function (e, n, t) {
      e.exports = {
        container: "container_bb37e1",
        soundIcon: "soundIcon_bb37e1",
        textSelected: "textSelected_bb37e1",
        sound: "sound_bb37e1",
        text: "text_bb37e1",
        customGiftHeader: "customGiftHeader_bb37e1",
        searchAndSound: "searchAndSound_bb37e1",
      };
    },
  },
]);
//# sourceMappingURL=5d3fe85093df564bf61b.js.map
