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
    704253: function (e) {
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
    223223: function (e) {
      e.exports = "/assets/1a88b4ae0f6cc7cdbd66.png";
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
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(991862);
      function s(e) {
        let { currencies: n, className: t, children: l } = e;
        return n.length < 2
          ? null
          : (0, i.jsx)("div", { className: t, children: l });
      }
      n.Z = function (e) {
        let {
          currencies: n,
          onChange: t,
          selectedCurrency: s,
          className: a,
          disabled: c = !1,
        } = e;
        if (n.length < 2) return null;
        let o = n.map((e, n) => ({
          key: n,
          value: e,
          label: "".concat(e.toUpperCase(), " - ").concat((0, r.T)(e)),
        }));
        return (0, i.jsx)(l.SingleSelect, {
          value: s,
          options: o,
          onChange: (e) => {
            null != e && t(e);
          },
          className: a,
          isDisabled: c,
        });
      };
    },
    86040: function (e, n, t) {
      t.d(n, {
        C: function () {
          return c;
        },
        N: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(600164),
        s = t(388032),
        a = t(773232);
      let c = (e) => {
          let { className: n, isEmailResent: t, resendEmail: r } = e;
          return (0, i.jsx)("div", {
            className: n,
            children: (0, i.jsxs)("div", {
              className: a.awaitingWrapper,
              children: [
                (0, i.jsx)(l.Heading, {
                  variant: "heading-xl/bold",
                  children: s.intl.string(s.t.Q03WWV),
                }),
                (0, i.jsxs)("p", {
                  children: [
                    (0, i.jsx)(l.Text, {
                      variant: "text-md/normal",
                      children: s.intl.string(s.t.BxPxhI),
                    }),
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)(l.Text, {
                      variant: "text-md/normal",
                      children: s.intl.string(s.t.Y3fdOj),
                    }),
                    (0, i.jsx)("br", {}),
                    (0, i.jsxs)(l.Text, {
                      variant: "text-md/normal",
                      children: [
                        s.intl.string(s.t.Paa4v7),
                        "\xa0",
                        t
                          ? s.intl.string(s.t.StGVvL)
                          : (0, i.jsx)(l.Anchor, {
                              onClick: r,
                              children: s.intl.string(s.t.Ex7sk5),
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
          (0, i.jsx)("div", {
            children: (0, i.jsx)(l.ModalFooter, {
              justify: r.Z.Justify.BETWEEN,
              align: r.Z.Align.CENTER,
              children: (0, i.jsx)(l.Button, {
                "data-testid": "continue",
                color: l.Button.Colors.BRAND,
                disabled: !0,
                children: s.intl.string(s.t.g8vPz8),
              }),
            }),
          });
    },
    940824: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(37234),
        s = t(100527),
        a = t(906732),
        c = t(703656),
        o = t(335131),
        u = t(981631),
        d = t(388032),
        m = t(47648);
      n.Z = (e) => {
        let { onClose: n } = e,
          { analyticsLocations: t } = (0, a.ZP)(),
          p = () => {
            n(),
              (0, c.uL)(u.Z5c.COLLECTIBLES_SHOP),
              (0, o.mK)({
                openInLayer: !1,
                analyticsSource: s.Z.PREMIUM_PAYMENT_MODAL,
                analyticsLocations: t,
              }),
              (0, r.xf)();
          };
        return (0, i.jsxs)("div", {
          className: m.container,
          children: [
            (0, i.jsx)("div", {
              className: m.iconBackground,
              children: (0, i.jsx)(l.ShopIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: l.tokens.colors.WHITE,
              }),
            }),
            (0, i.jsx)(l.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              children: d.intl.format(d.t.twSHtb, {
                checkItOut: (e) =>
                  (0, i.jsx)(l.Clickable, {
                    className: m.link,
                    onClick: p,
                    children: e,
                  }),
              }),
            }),
          ],
        });
      };
    },
    473608: function (e, n, t) {
      t.d(n, {
        O: function () {
          return S;
        },
      }),
        t(47120),
        t(627341);
      var i = t(200651),
        l = t(512722),
        r = t.n(l),
        s = t(278074),
        a = t(979554),
        c = t(442837),
        o = t(481060),
        u = t(1585),
        d = t(125988),
        m = t(731896),
        p = t(594174),
        x = t(597688),
        h = t(452049),
        f = t(223223);
      let v = (e) => {
          let { avatarDecoration: n, fallbackLabel: t } = e,
            l = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
            { avatarDecorationSrc: r, eventHandlers: s } = (0, d.Z)({
              user: l,
              onlyAnimateOnHover: !0,
              avatarDecorationOverride: n,
              size: (0, u.y9)(o.AvatarSizes.SIZE_40),
            });
          return null == n
            ? t
            : (0, i.jsx)("img", {
                src: r,
                alt: n.label,
                className: h.avatarDecoration,
                ...s,
              });
        },
        g = (e) => {
          var n;
          let { profileEffect: t, fallbackLabel: l } = e,
            r = (0, m.V)(null == t ? void 0 : t.id);
          if (null == r) return l;
          let {
            accessibilityLabel: s,
            thumbnailPreviewSrc: a,
            title: c,
          } = null !== (n = null == r ? void 0 : r.config) && void 0 !== n
            ? n
            : {};
          return (0, i.jsxs)("div", {
            className: h.profileEffectContainer,
            children: [
              (0, i.jsx)("img", {
                src: f,
                alt: s,
                className: h.profileEffectBackground,
              }),
              (0, i.jsx)("img", { className: h.profileEffect, src: a, alt: c }),
            ],
          });
        },
        S = (e) => {
          var n;
          let { product: t, sku: l, fallbackLabel: o } = e,
            u = (0, c.e7)([x.Z], () =>
              x.Z.getProduct(null == l ? void 0 : l.id),
            ),
            d = null != t ? t : u,
            [m] =
              null !== (n = null == d ? void 0 : d.items) && void 0 !== n
                ? n
                : [];
          return (0, s.EQ)(null == m ? void 0 : m.type)
            .with(
              a.Z.AVATAR_DECORATION,
              () => (
                r()(
                  m.type === a.Z.AVATAR_DECORATION,
                  "ts-match checked the type",
                ),
                (0, i.jsx)(v, { avatarDecoration: m, fallbackLabel: o })
              ),
            )
            .with(
              a.Z.PROFILE_EFFECT,
              () => (
                r()(m.type === a.Z.PROFILE_EFFECT, "ts-match checked the type"),
                (0, i.jsx)(g, { profileEffect: m, fallbackLabel: o })
              ),
            )
            .otherwise(() => o);
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
        l = t.n(i),
        r = t(570140),
        s = t(355467),
        a = t(159351),
        c = t(366939),
        o = t(16084),
        u = t(255078),
        d = t(626135),
        m = t(74538),
        p = t(45572),
        x = t(981631),
        h = t(474936);
      async function f(e) {
        let {
          setPurchaseState: n,
          setHasAcceptedTerms: t,
          setIsSubmitting: i,
          setPurchaseError: f,
          hasRedirectURL: v,
          setHasRedirectURL: g,
          isGift: S,
          baseAnalyticsData: j,
          analyticsLocation: E,
          analyticsLocations: y,
          flowStartTime: I,
          subscriptionPlan: P,
          planGroup: T,
          trialId: N,
          priceOptions: b,
          paymentSource: C,
          isPrepaidPaymentPastDue: _,
          openInvoiceId: O,
          premiumSubscription: A,
          onNext: Z,
          metadata: R,
          sku: M,
          skuPricePreview: w,
          purchaseType: L,
          referralCode: k,
          loadId: D,
          giftInfoOptions: F,
          invoicePreview: U,
        } = e;
        n(p.A.PURCHASING), t(!0), i(!0), r.Z.wait(a.fw), f(null);
        try {
          let e, t, i;
          if (
            (d.default.track(x.rMx.PAYMENT_FLOW_COMPLETED, {
              ...j,
              subtotal: null == U ? void 0 : U.subtotal,
              tax: null == U ? void 0 : U.tax,
              expected_amount: null == U ? void 0 : U.total,
              expected_currency: null == U ? void 0 : U.currency,
              duration_ms: Date.now() - I,
            }),
            v)
          )
            return;
          if (L === x.GZQ.ONE_TIME)
            l()(null != M, "SKU must exist and be fetched."),
              l()(null != w, "SKUPricePreview must exist."),
              (e = await (0, o.ZZ)(M.applicationId, M.id, {
                expectedAmount: w.amount,
                expectedCurrency: w.currency,
                isGift: S,
                paymentSource: C,
                loadId: D,
                giftInfoOptions: F,
              }));
          else if ((l()(null != P, "Missing subscriptionPlan"), S)) {
            l()(null != U, "Missing invoicePreview");
            let n = U.total,
              t = U.currency;
            e = await (0, o.ZZ)(h.CL, P.skuId, {
              expectedAmount: n,
              expectedCurrency: t,
              paymentSource: C,
              subscriptionPlanId: P.id,
              isGift: !0,
              loadId: D,
              giftInfoOptions: F,
            });
          } else if (_ && null != O && null != C && null != A)
            e = x.Uk1.has(C.type)
              ? await (0, s.G)(A, O, C, b.currency)
              : await (0, s.Mg)(
                  A,
                  { paymentSource: C, currency: b.currency },
                  y,
                  E,
                  D,
                );
          else if (null != A) {
            let n = (0, m.al)(A, P.id, 1, new Set(T)),
              t = { paymentSource: C, currency: b.currency };
            A.status === x.O0b.PAUSED
              ? (t.status = x.O0b.ACTIVE)
              : (t.items = n),
              (e = await (0, s.Mg)(A, t, y, E, D));
          } else
            e = await (0, c.Ld)({
              planId: P.id,
              currency: b.currency,
              paymentSource: C,
              trialId: N,
              metadata: R,
              referralCode: k,
              loadId: D,
            });
          if (e.redirectConfirmation) {
            g(null != e.redirectURL);
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
            Z(t, i);
        } catch (e) {
          n(p.A.FAIL),
            f(e),
            d.default.track(x.rMx.PAYMENT_FLOW_FAILED, {
              ...j,
              payment_error_code: null == e ? void 0 : e.code,
              payment_source_id: null == C ? void 0 : C.id,
              payment_source_type: null == C ? void 0 : C.type,
              duration_ms: Date.now() - I,
            });
        } finally {
          !v && i(!1);
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
        l = t.n(i),
        r = t(252759),
        s = t(639119),
        a = t(3409),
        c = t(626135),
        o = t(987209),
        u = t(563132),
        d = t(409813),
        m = t(45572),
        p = t(737143),
        x = t(981631),
        h = t(474936);
      function f(e) {
        let {
            analyticsData: n,
            initialPlanId: t,
            breadcrumbSteps: i,
            handleStepChange: f,
            referralTrialOfferId: v,
            onReturn: g,
            continueSession: S = !1,
            continueSessionInitialStep: j,
          } = e,
          {
            contextMetadata: E,
            step: y,
            paymentSources: I,
            paymentSourceId: P,
            setPaymentSourceId: T,
            purchaseError: N,
            setPurchaseError: b,
            purchaseErrorBlockRef: C,
            paymentAuthenticationState: _,
            selectedSkuId: O,
            activeSubscription: A,
            previousStepRef: Z,
            setPurchaseState: R,
          } = (0, u.usePaymentContext)(),
          { isGift: M } = (0, o.wD)(),
          w = {
            ...(0, a.fL)(),
            paymentSources: I,
            paymentSourceId: P,
            setPaymentSourceId: T,
            purchaseError: N,
            setPurchaseError: b,
            purchaseErrorBlockRef: C,
            paymentAuthenticationState: _,
            selectedSkuId: O,
            isGift: M,
          },
          L = (0, s.N)(v),
          k = !M && null != L && null != O && h.nG[L.trial_id].skus.includes(O),
          D =
            null != g
              ? g
              : () => {
                  f(
                    Object.values(I).length < 1 && null == t
                      ? d.h8.PLAN_SELECT
                      : d.h8.REVIEW,
                    { trackedFromStep: d.h8.PAYMENT_TYPE },
                  );
                };
        l()(y, "Step should be set here");
        let F = (0, r.Z)(() => Date.now(), [y]),
          U = null != j ? j : d.h8.CREDIT_CARD_INFORMATION,
          B = S && null == Z.current ? U : d.h8.PAYMENT_TYPE;
        return (0, a.vP)({
          paymentModalArgs: w,
          initialStep: B,
          prependSteps: [d.h8.PROMOTION_INFO],
          appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
          breadcrumpSteps: i,
          currentBreadcrumpStep: y,
          usePaymentModalStep: !0,
          onReturn: D,
          onComplete: (e) => {
            e === d.h8.AWAITING_BROWSER_CHECKOUT
              ? (R(m.A.COMPLETED), f(d.h8.CONFIRM, { trackedFromStep: e }))
              : f(d.h8.REVIEW, { trackedFromStep: e });
          },
          onStepChange: (e) => {
            let { currentStep: t, toStep: i } = e,
              l = Date.now();
            c.default.track(x.rMx.PAYMENT_FLOW_STEP, {
              ...n,
              from_step: t,
              to_step: i,
              step_duration_ms: l - F,
              flow_duration_ms: l - E.startTime,
            });
          },
          isEligibleForTrial: k,
          allowDesktopRedirectPurchase: (0, p.t)(O, M, A),
        });
      }
    },
    793541: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(723484),
        r = t(51499),
        s = t(614277),
        a = t(608490);
      function c() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.Z, {}),
            (0, i.jsx)(s.C3, {
              children: (0, i.jsx)(l.F, {
                className: a.awaitingAuthenticationStep,
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
      var i = t(200651),
        l = t(192379),
        r = t(16084),
        s = t(86040),
        a = t(51499),
        c = t(614277),
        o = t(282544);
      function u() {
        let [e, n] = l.useState(!1),
          t = async () => {
            n(!0), await (0, r.xA)();
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.Z, {}),
            (0, i.jsx)(c.C3, {
              children: (0, i.jsx)(s.C, {
                className: o.body,
                isEmailResent: e,
                resendEmail: t,
              }),
            }),
            (0, i.jsx)(c.O3, { children: (0, i.jsx)(s.N, {}) }),
          ],
        });
      }
    },
    710094: function (e, n, t) {
      t.d(n, {
        l: function () {
          return C;
        },
      }),
        t(47120),
        t(411104);
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        s = t.n(r),
        a = t(330726),
        c = t(711459),
        o = t(104494),
        u = t(639119),
        d = t(716534),
        m = t(664891),
        p = t(911367),
        x = t(669079),
        h = t(987209),
        f = t(563132),
        v = t(409813),
        g = t(809144),
        S = t(698708),
        j = t(614223),
        E = t(481595),
        y = t(51499),
        I = t(678334),
        P = t(614277),
        T = t(474936),
        N = t(231338),
        b = t(388032);
      function C(e) {
        var n, t;
        let r,
          {
            handleStepChange: C,
            trialId: _,
            trialFooterMessageOverride: O,
            reviewWarningMessage: A,
            planGroup: Z,
            openInvoiceId: R,
            analyticsData: M,
            analyticsLocation: w,
            referralTrialOfferId: L,
            initialPlanId: k,
            subscriptionTier: D,
            handleClose: F,
          } = e,
          {
            activeSubscription: U,
            setUpdatedSubscription: B,
            contextMetadata: G,
            currencies: H,
            paymentSourceId: W,
            paymentSources: V,
            priceOptions: z,
            purchaseError: Y,
            purchaseTokenAuthState: K,
            selectedPlan: X,
            selectedSkuId: q,
            setCurrency: J,
            setPaymentSourceId: Q,
            setPurchaseState: $,
            setPurchaseError: ee,
            step: en,
            purchaseState: et,
            isPremium: ei,
            setHasAcceptedTerms: el,
            purchaseType: er,
            setEntitlementsGranted: es,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            invoicePreview: ec,
            inReverseTrial: eo,
          } = (0, f.usePaymentContext)(),
          { isGift: eu, giftMessage: ed, giftRecipient: em } = (0, h.wD)();
        s()(null != en, "Step should be set");
        let ep = l.useRef(null),
          [ex, eh] = (0, a.Z)(!1, 500);
        (0, p.t)();
        let ef = null !== (t = null != _ ? _ : L) && void 0 !== t ? t : null,
          ev = null != ef && (!ei || T.nG[ef].skus.includes(q)) ? ef : null,
          eg = (0, u.N)(L),
          eS = (0, o.Ng)(),
          ej = { user_trial_offer_id: null == eg ? void 0 : eg.id };
        l.useEffect(() => {
          null != Y &&
            null != ep.current &&
            ep.current.scrollIntoView({ behavior: "smooth" });
        }, [Y]);
        let eE = l.useCallback(
            (e, n) => {
              B(e),
                null != n && es(n),
                C(v.h8.CONFIRM, {
                  fulfillment: { subscription: e, entitlements: n },
                });
            },
            [C, B, es],
          ),
          ey = null != W ? V[W] : null,
          eI =
            null != X && T.o4.has(X.id) && null != ey && !(0, c.aQ)(ey)
              ? Error(b.intl.string(b.t["2ik8io"]))
              : null,
          eP = l.useRef(null),
          [eT, eN] = l.useState(null),
          eb =
            !eu &&
            null != eg &&
            null != q &&
            T.nG[eg.trial_id].skus.includes(q),
          eC =
            null == eS
              ? void 0
              : null === (n = eS.discount) || void 0 === n
                ? void 0
                : n.plan_ids,
          e_ =
            !eu && null != eS && null != eC && null != X && eC.includes(X.id),
          eO = eu && (0, x.pO)(em),
          eA = null == k && null == D && er === N.GZ.SUBSCRIPTION,
          eZ = (0, j.Kp)({
            isTrial: eb,
            isGift: eu,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: ea.current,
          }),
          eR = eu && er === N.GZ.ONE_TIME,
          eM = eR || (eZ ? eA && ei : ei),
          ew = l.useCallback(() => {
            if (eZ) {
              C(v.h8.SKU_SELECT);
              return;
            }
            return eR ? C(v.h8.GIFT_CUSTOMIZATION) : C(v.h8.PLAN_SELECT);
          }, [C, eZ, eR]),
          eL = !1;
        return (
          er === N.GZ.ONE_TIME
            ? (r = (0, i.jsx)(E.Z, {
                hasLegalTermsFlash: ex,
                legalTermsNodeRef: eP,
                onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                handlePaymentSourceAdd: () => C(v.h8.ADD_PAYMENT_STEPS),
              }))
            : ((eL = eu
                ? null == ec
                : null != ey &&
                  er === N.GZ.SUBSCRIPTION &&
                  eb &&
                  !ey.canRedeemTrial()),
              null == U || eo || eu
                ? (s()(null != X, "Expected plan to be selected"),
                  (r = (0, i.jsx)(d.Z, {
                    selectedPlanId: X.id,
                    paymentSources: V,
                    onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                    priceOptions: z,
                    currencies: H,
                    onCurrencyChange: (e) => J(e),
                    handlePaymentSourceAdd: () => C(v.h8.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: el,
                    legalTermsNodeRef: eP,
                    hasLegalTermsFlash: ex,
                    trialId: ev,
                    trialFooterMessageOverride: O,
                    reviewWarningMessage: A,
                    purchaseState: et,
                    referralTrialOfferId: L,
                    isTrial: eb || (null != _ && null != O),
                    isDiscount: e_,
                    handleClose: F,
                  })))
                : (s()(null != X, "Expected plan to be selected"),
                  (r = (0, i.jsx)(m.Z, {
                    premiumSubscription: U,
                    paymentSources: V,
                    priceOptions: z,
                    onPaymentSourceChange: (e) => {
                      Q(null != e ? e.id : null);
                    },
                    onPaymentSourceAdd: () => {
                      C(v.h8.ADD_PAYMENT_STEPS);
                    },
                    planId: X.id,
                    setHasAcceptedTerms: el,
                    legalTermsNodeRef: eP,
                    hasLegalTermsFlash: ex,
                    onInvoiceError: (e) => eN(e),
                    planGroup: Z,
                    currencies: H,
                    onCurrencyChange: (e) => J(e),
                    hasOpenInvoice: null != R,
                    purchaseState: et,
                    handleClose: F,
                  })))),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(g.P, { giftMessage: ed }),
              !eO && (0, i.jsx)(y.Z, { isEligibleForTrial: eb }),
              (0, i.jsxs)(P.C3, { children: [(0, i.jsx)(S.Z, {}), r] }),
              (0, i.jsx)(P.O3, {
                children: (0, i.jsx)(I.Z, {
                  premiumSubscription: null != U ? U : null,
                  setPurchaseState: $,
                  onBack: ew,
                  onNext: eE,
                  onPurchaseError: (e) => ee(e),
                  legalTermsNodeRef: eP,
                  flashLegalTerms: () => eh(!0),
                  invoiceError: eT,
                  planError: eI,
                  analyticsLocation: w,
                  baseAnalyticsData: M,
                  flowStartTime: G.startTime,
                  trialId: ev,
                  planGroup: Z,
                  purchaseTokenAuthState: K,
                  openInvoiceId: R,
                  backButtonEligible: eM,
                  metadata: ej,
                  isTrial: eb,
                  disablePurchase: eL,
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
          return O;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        s = t.n(r),
        a = t(442837),
        c = t(481060),
        o = t(355467),
        u = t(906732),
        d = t(600164),
        m = t(160913),
        p = t(311821),
        x = t(459965),
        h = t(858987),
        f = t(975060),
        v = t(882712),
        g = t(855775),
        S = t(626135),
        j = t(669079),
        E = t(74538),
        y = t(987209),
        I = t(563132),
        P = t(632580),
        T = t(45572),
        N = t(919778),
        b = t(612853),
        C = t(981631),
        _ = t(374172);
      function O(e) {
        let {
            premiumSubscription: n,
            setPurchaseState: t,
            onBack: r,
            onNext: O,
            legalTermsNodeRef: A,
            flashLegalTerms: Z,
            invoiceError: R,
            planError: M,
            onPurchaseError: w,
            baseAnalyticsData: L,
            flowStartTime: k,
            trialId: D,
            planGroup: F,
            analyticsLocation: U,
            purchaseTokenAuthState: B,
            openInvoiceId: G,
            metadata: H,
            backButtonEligible: W,
            disablePurchase: V,
            isTrial: z = !1,
          } = e,
          {
            selectedPlan: Y,
            priceOptions: K,
            setHasAcceptedTerms: X,
            setPurchaseError: q,
            purchaseType: J,
            paymentSourceId: Q,
            paymentSources: $,
            selectedSkuId: ee,
            skusById: en,
            skuPricePreviewsById: et,
            referralCode: ei,
            contextMetadata: el,
            invoicePreview: er,
            inReverseTrial: es,
          } = (0, I.usePaymentContext)(),
          {
            isGift: ea,
            selectedGiftStyle: ec,
            customGiftMessage: eo,
            emojiConfetti: eu,
            soundEffect: ed,
            giftRecipient: em,
          } = (0, y.wD)(),
          ep = (0, j.MY)(em),
          ex = {};
        (ex.gift_style = ec),
          ep === j.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (s()(
              null != em,
              "Gift recipient must be set at purchase review step for these gift options.",
            ),
            (ex.recipient_id = em.id),
            (ex.custom_message = eo),
            (ex.emoji_id = null == eu ? void 0 : eu.id),
            (ex.emoji_name =
              (null == eu ? void 0 : eu.id) == null
                ? null == eu
                  ? void 0
                  : eu.surrogates
                : void 0),
            (ex.sound_id = null == ed ? void 0 : ed.soundId));
        let eh = null == Y ? void 0 : Y.id,
          ef = (0, N.sE)(D, K.paymentSourceId, eh),
          ev = (0, a.e7)([f.Z], () => f.Z.popupCallbackCalled),
          { analyticsLocations: eg } = (0, u.ZP)(),
          eS = null != Q ? $[Q] : null,
          [ej, eE] = l.useState(ef),
          [ey, eI] = l.useState(!1),
          { hasEntitlements: eP } = (0, x.H)(eh, ea),
          eT = (0, E.Ap)(K.paymentSourceId),
          eN = eP || ef,
          eb = (0, m.U)(),
          eC = null,
          e_ = null;
        if (J === C.GZQ.ONE_TIME) {
          var eO;
          s()(null != ee, "SKU must be selected for one-time purchases"),
            (eC = null !== (eO = en[ee]) && void 0 !== eO ? eO : null),
            s()(null != eC, "SKU must exist and be fetched.");
          let e = et[ee],
            n = null != Q ? Q : g.c;
          e_ = null != e ? e[n] : null;
        }
        let eA = async () => {
          await (0, P.H)({
            setPurchaseState: t,
            setHasAcceptedTerms: X,
            setIsSubmitting: eE,
            setPurchaseError: q,
            hasRedirectURL: ey,
            setHasRedirectURL: eI,
            isGift: ea,
            baseAnalyticsData: L,
            analyticsLocation: U,
            analyticsLocations: eg,
            flowStartTime: k,
            subscriptionPlan: Y,
            planGroup: F,
            trialId: D,
            priceOptions: K,
            paymentSource: eS,
            isPrepaidPaymentPastDue: eb,
            openInvoiceId: G,
            premiumSubscription: n,
            onNext: O,
            metadata: H,
            sku: eC,
            skuPricePreview: e_,
            purchaseType: J,
            referralCode: ei,
            loadId: el.loadId,
            giftInfoOptions: ex,
            invoicePreview: er,
          });
        };
        l.useEffect(() => {
          (async () => {
            if (!0 === ev)
              try {
                if (null == f.Z.redirectedPaymentId) return;
                await (0, o.OP)(f.Z.redirectedPaymentId), t(T.A.COMPLETED), O();
              } catch (e) {
                t(T.A.FAIL),
                  w(e),
                  S.default.track(C.rMx.PAYMENT_FLOW_FAILED, {
                    ...L,
                    payment_error_code: null == e ? void 0 : e.code,
                    payment_source_id: Q,
                    payment_source_type: null == eS ? void 0 : eS.type,
                    duration_ms: Date.now() - k,
                  });
              } finally {
                eE(!1), (0, o.K2)();
              }
            else B === v.I.SUCCESS && (await eA());
          })();
        }, [ev]),
          l.useEffect(() => {
            ef && !ea && null == n && eA();
          }, [ef, ea, n]);
        let eZ = null != G || (J === C.GZQ.ONE_TIME && !ea);
        return ef
          ? null
          : (0, i.jsxs)(c.ModalFooter, {
              align: d.Z.Align.CENTER,
              children: [
                (0, i.jsx)(h.Z, {
                  legalTermsNodeRef: A,
                  invoiceError: R,
                  planError: M,
                  disablePurchase: V,
                  flashLegalTerms: Z,
                  isSubmitting: ej,
                  premiumSubscription: n,
                  isGift: ea,
                  planGroup: F,
                  isPrepaid: eT,
                  isTrial: z,
                  makePurchase: eA,
                  needsPaymentSource: null == eS && !eN,
                  onNext: O,
                  inReverseTrial: es,
                }),
                (0, i.jsx)(b.Z, {}),
                W && !eZ
                  ? (0, i.jsx)("div", {
                      className: _.back,
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
          return a;
        },
      });
      var i = t(818083),
        l = t(74538);
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
          let i = null == t || (0, l.uZ)(t);
          return null != e && null == n && i;
        },
        a = (e, n, t) => {
          let { bypassCheckout: i } = r.useExperiment(
              { location: "aeb070_1" },
              { autoTrackExposure: !1 },
            ),
            l = s(e, n, t);
          return i && l;
        };
    },
    809144: function (e, n, t) {
      t.d(n, {
        P: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(609194),
        s = t(669079),
        a = t(987209),
        c = t(388032),
        o = t(926617);
      function u(e) {
        let { giftMessage: n = c.intl.string(c.t.DrgnS0) } = e,
          { isGift: t, giftRecipient: u } = (0, a.wD)();
        return !t || (0, s.pO)(u)
          ? null
          : (0, i.jsx)(r.Z, {
              className: o.paymentNote,
              iconSize: r.Z.Sizes.SMALL,
              icon: l.GiftIcon,
              color: null == n ? r.Z.Colors.PRIMARY : r.Z.Colors.SECONDARY,
              children: n,
            });
      }
    },
    481595: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return U;
        },
      }),
        t(789020);
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        s = t.n(r),
        a = t(742280),
        c = t(399606),
        o = t(481060),
        u = t(16084),
        d = t(224550),
        m = t(609194),
        p = t(275850),
        x = t(672971),
        h = t(115130),
        f = t(228624),
        v = t(925329),
        g = t(215148),
        S = t(653798),
        j = t(314182),
        E = t(251660),
        y = t(246946),
        I = t(351402),
        P = t(853872),
        T = t(855775),
        N = t(695103),
        b = t(4912),
        C = t(630388),
        _ = t(669079),
        O = t(937615),
        A = t(987209),
        Z = t(563132),
        R = t(45572),
        M = t(119226),
        w = t(981631),
        L = t(388032),
        k = t(215409);
      function D(e) {
        let { sku: n, skuPricePreview: t } = e;
        s()(null != t.amount, "SKU must have a price set.");
        let l = t.amount - t.tax,
          r = (0, f.ed)("SKUInvoice"),
          a = n.productLine === w.POd.COLLECTIBLES && r;
        return !t.tax_inclusive && t.tax > 0
          ? (0, i.jsxs)(S.PO, {
              className: k.invoice,
              children: [
                a
                  ? (0, i.jsx)(g.C, {
                      sku: n,
                      value: (0, O.T4)(l, t.currency),
                      className: k.subscriptionCostRow,
                    })
                  : (0, i.jsx)(S.R$, {
                      label: n.name,
                      value: (0, O.T4)(l, t.currency),
                      className: k.subscriptionCostRow,
                    }),
                (0, i.jsx)(S.R$, {
                  label: L.intl.string(L.t["/I8zmJ"]),
                  value: (0, O.T4)(t.tax, t.currency),
                  className: k.subscriptionCostRow,
                }),
                (0, i.jsx)(S.KU, {}),
                (0, i.jsx)(S.Ji, {
                  label: L.intl.format(L.t["+B5KfH"], {}),
                  value: (0, O.T4)(t.amount, t.currency),
                  className: k.subscriptionCostRow,
                }),
              ],
            })
          : (0, i.jsx)(S.PO, {
              className: k.invoice,
              children: a
                ? (0, i.jsx)(g.C, {
                    sku: n,
                    value: (0, O.T4)(t.amount, t.currency),
                    className: k.subscriptionCostRow,
                  })
                : (0, i.jsx)(S.R$, {
                    label: n.name,
                    value: (0, O.T4)(t.amount, t.currency),
                    className: k.subscriptionCostRow,
                  }),
            });
      }
      function F(e) {
        let { application: n, sku: t, isEmbeddedIAP: l } = e;
        return !0 !== l
          ? null
          : (0, i.jsxs)("div", {
              className: k.skuHeading,
              children: [
                (0, i.jsx)(v.Z, { game: n }),
                (0, i.jsx)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: k.skuHeadingText,
                  children: t.name,
                }),
              ],
            });
      }
      function U(e) {
        let {
            hasLegalTermsFlash: n,
            legalTermsNodeRef: t,
            onPaymentSourceChange: r,
            handlePaymentSourceAdd: v,
          } = e,
          {
            application: O,
            purchaseState: U,
            paymentSources: B,
            paymentSourceId: G,
            setHasAcceptedTerms: H,
            skusById: W,
            skuPricePreviewsById: V,
            selectedSkuId: z,
            isEmbeddedIAP: Y,
            purchaseType: K,
            purchasePreviewError: X,
            devShelfFetchState: q,
          } = (0, Z.usePaymentContext)(),
          { isGift: J, giftRecipient: Q } = (0, A.wD)(),
          $ = J && (0, _.pO)(Q),
          { defaultPaymentSourceId: ee, hasFetchedPaymentSources: en } = (0,
          c.cj)([P.Z], () => ({
            defaultPaymentSourceId: P.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: P.Z.hasFetchedPaymentSources,
          }));
        s()(null != z, "Expected selectedSkuId");
        let et = W[z],
          ei = V[z],
          el = null != G ? G : T.c,
          er = null != ei ? ei[el] : null;
        s()(null != et, "SKU must exist and be fetched."),
          s()(null != O, "Application must exist.");
        let es = (0, c.e7)(
            [h.Z, N.Z],
            () =>
              N.Z.inTestModeForApplication(O.id) ||
              h.Z.inDevModeForApplication(O.id),
            [O.id],
          ),
          ea = (0, c.e7)([y.Z], () => y.Z.enabled),
          ec = a.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
          eo = U === R.A.PURCHASING || U === R.A.COMPLETED,
          eu = null != G ? B[G].type : null,
          ed = (0, f.ed)("SKUInvoice"),
          em = et.productLine === w.POd.COLLECTIBLES && ed;
        return (
          l.useEffect(() => {
            en &&
              G === ee &&
              ee !== T.c &&
              null == er &&
              (0, u.x2)(et.applicationId, et.id, ee, { isGift: J });
          }, [ee, en, G, et.applicationId, et.id, er, J]),
          (0, i.jsxs)("div", {
            className: k.stepBody,
            children: [
              es
                ? (0, i.jsx)(
                    m.Z,
                    {
                      icon: (0, o.makeIconCompat)(b.Z),
                      iconSize: m.Z.Sizes.SMALL,
                      color: m.Z.Colors.WARNING,
                      className: k.errorBlock,
                      children: L.intl.string(L.t.OvMyMT),
                    },
                    "TEST_MODE",
                  )
                : null,
              (0, C.yE)(O.flags, w.udG.EMBEDDED) && q === h.O.ERROR
                ? (0, i.jsx)(
                    m.Z,
                    {
                      icon: (0, o.makeIconCompat)(b.Z),
                      iconSize: m.Z.Sizes.SMALL,
                      color: m.Z.Colors.ERROR,
                      className: k.errorBlock,
                      children: L.intl.string(L.t.tAmECg),
                    },
                    "DEV_SHELF_ERROR",
                  )
                : null,
              (0, i.jsx)(F, { application: O, sku: et, isEmbeddedIAP: Y }),
              $ && (0, i.jsx)(M.Z, { sku: et }),
              null != Q ? (0, i.jsx)(E.s, { giftRecipient: Q }) : null,
              (0, i.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H5,
                children: J
                  ? L.intl.string(L.t.PEjaCw)
                  : L.intl.string(L.t.sail9P),
              }),
              null != er
                ? (0, i.jsx)(D, { sku: et, skuPricePreview: er })
                : null == X
                  ? (0, i.jsx)(o.Spinner, {
                      type: o.Spinner.Type.WANDERING_CUBES,
                      className: k.invoiceSpinner,
                    })
                  : (0, i.jsx)(S.PO, {
                      className: k.invoice,
                      children: em
                        ? (0, i.jsx)(g.C, {
                            sku: et,
                            value: null,
                            className: k.subscriptionCostRow,
                          })
                        : (0, i.jsx)(S.R$, {
                            label: et.name,
                            value: null,
                            className: k.subscriptionCostRow,
                          }),
                    }),
              (0, i.jsxs)("div", {
                className: k.paymentSourceWrapper,
                children: [
                  (0, i.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children: L.intl.string(L.t.mmDvV1),
                  }),
                  (0, i.jsx)(p.Z, {
                    paymentSources: Object.values(B),
                    selectedPaymentSourceId: G,
                    onChange: r,
                    onPaymentSourceAdd: v,
                    hidePersonalInformation: ea,
                  }),
                ],
              }),
              (0, i.jsx)(j.Z, {
                isActive: n,
                ref: t,
                children: (0, i.jsx)(x.Z, {
                  onChange: H,
                  forceShow: !0,
                  showWithdrawalWaiver: ec,
                  disabled: eo,
                  subscriptionPlan: null,
                  finePrintClassname: k.fineprint,
                  purchaseType: K,
                  isGift: J,
                  checkboxLabel:
                    et.productLine === w.POd.COLLECTIBLES
                      ? L.intl.format(L.t["1EdAlZ"], {
                          paidURL: w.EYA.PAID_TERMS,
                        })
                      : void 0,
                  finePrint: (0, i.jsx)(d.Z, {
                    paymentSourceType: eu,
                    isEmbeddedIAP: Y,
                    purchaseType: K,
                    productLine: et.productLine,
                    isGift: J,
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
          return y;
        },
      }),
        t(627341);
      var i = t(200651);
      t(192379);
      var l = t(278074),
        r = t(979554),
        s = t(481060),
        a = t(1585),
        c = t(125988),
        o = t(583434),
        u = t(479446),
        d = t(981632),
        m = t(731896),
        p = t(680295),
        x = t(998502),
        h = t(987209),
        f = t(388032),
        v = t(975765),
        g = t(241822);
      let S = x.ZP.getEnableHardwareAcceleration()
        ? s.AnimatedAvatar
        : s.Avatar;
      function j(e) {
        let { avatarDecoration: n } = e,
          {
            avatarDecorationSrc: t,
            eventHandlers: l,
            avatarPlaceholderSrc: r,
          } = (0, c.Z)({
            avatarDecorationOverride: n,
            size: (0, a.y9)(s.AvatarSizes.SIZE_152),
          });
        return (0, i.jsx)("div", {
          className: v.giftMainAnimationWrapper,
          children: (0, i.jsx)(S, {
            ...l,
            avatarDecoration: t,
            src: r,
            className: v.avatar,
            size: s.AvatarSizes.SIZE_152,
            "aria-label": f.intl.string(f.t.lqaIxM),
          }),
        });
      }
      function E(e) {
        var n;
        let { id: t } = e,
          l = null === (n = (0, m.V)(t)) || void 0 === n ? void 0 : n.config;
        return (0, i.jsxs)("div", {
          className: v.profileEffectContainer,
          children: [
            (0, i.jsx)("img", {
              src: g,
              alt: null == l ? void 0 : l.accessibilityLabel,
              className: v.profileEffectBackground,
            }),
            (0, i.jsx)(p.Z, { profileEffectId: t }),
          ],
        });
      }
      function y(e) {
        let { sku: n } = e,
          { selectedGiftStyle: t } = (0, h.wD)(),
          { product: s } = (0, o.T)(null == n ? void 0 : n.id),
          a = null == s ? void 0 : s.items[0],
          c = (0, l.EQ)(a)
            .with({ type: r.Z.AVATAR_DECORATION }, (e) =>
              (0, i.jsx)(j, { avatarDecoration: e }),
            )
            .with({ type: r.Z.PROFILE_EFFECT }, (e) =>
              (0, i.jsx)(E, { id: e.id }),
            )
            .otherwise(() => null);
        return null != t && null == c
          ? (0, i.jsx)("div", {
              className: v.giftMainAnimationWrapper,
              children: (0, i.jsx)(d.Z, {
                defaultAnimationState: u.SR.LOOP,
                giftStyle: t,
                shouldAnimate: !0,
                className: v.__invalid_giftMainAnimation,
              }),
            })
          : c;
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
          return a;
        },
      }),
        t(47120);
      var i = t(742280),
        l = t(818083),
        r = t(474936);
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
      function a(e) {
        return null == e || s.has(e.country);
      }
    },
    160913: function (e, n, t) {
      t.d(n, {
        U: function () {
          return m;
        },
      });
      var i = t(913527),
        l = t.n(i),
        r = t(442837),
        s = t(853872),
        a = t(509545),
        c = t(78839),
        o = t(74538),
        u = t(981631),
        d = t(231338);
      function m() {
        let e = (0, r.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
          n = (0, r.e7)([a.Z], () =>
            null != e && null != e.planIdFromItems
              ? a.Z.get(null == e ? void 0 : e.planIdFromItems)
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
          m =
            (null == e ? void 0 : e.status) === u.O0b.PAST_DUE
              ? l()().diff(l()(e.currentPeriodStart), "days")
              : 0;
        return (
          !!(null != e && null != n && (0, o.uZ)(n.id)) &&
          i &&
          m >= 0 &&
          m <= (0, o.lY)(e).days &&
          e.status === u.O0b.PAST_DUE &&
          !e.isPurchasedExternally
        );
      }
    },
    642530: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(987209),
        r = t(563132),
        s = t(346497),
        a = t(196567),
        c = t(474936),
        o = t(388032),
        u = t(430597);
      n.Z = () => {
        let e = (0, s.Vi)(),
          { selectedSkuId: n } = (0, r.usePaymentContext)(),
          { isGift: t } = (0, l.wD)();
        return t || n !== c.Si.TIER_2 || !e
          ? null
          : (0, i.jsx)(a.Z, {
              copy: o.intl.string(o.t.xk8bIi),
              bannerImage: u,
              hideGiftIcon: !0,
            });
      };
    },
    215148: function (e, n, t) {
      t.d(n, {
        C: function () {
          return d;
        },
      });
      var i = t(200651),
        l = t(120356),
        r = t.n(l),
        s = t(481060),
        a = t(473608),
        c = t(698700),
        o = t(719953);
      let u = (e) => {
          let { sku: n } = e;
          return (0, i.jsxs)("div", {
            className: c.collectiblePreview,
            children: [
              (0, i.jsx)(a.O, { sku: n, fallbackLabel: null }),
              (0, i.jsx)(s.Text, {
                variant: "text-md/medium",
                children: n.name,
              }),
            ],
          });
        },
        d = (e) => {
          let { sku: n, value: t, className: l } = e;
          return (0, i.jsxs)("div", {
            className: r()(o.row, l),
            children: [
              (0, i.jsx)("div", {
                className: o.rowLabel,
                children: (0, i.jsx)(u, { sku: n }),
              }),
              (0, i.jsx)("div", { className: o.rowAmount, children: t }),
            ],
          });
        };
    },
    55610: function (e, n, t) {
      t.d(n, {
        U: function () {
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        s = t(512722),
        a = t.n(s),
        c = t(481060),
        o = t(63063),
        u = t(631818),
        d = t(987033),
        m = t(53900),
        p = t(981631),
        x = t(388032),
        h = t(894879);
      function f() {
        let e = (0, m.Z)(),
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
        let { fromBoostCancelModal: l, className: s } = e,
          u = (0, m.Z)();
        if (!f()) return null;
        return (
          a()(null != u, "Subscription billing country should not be null"),
          (0, i.jsxs)("div", {
            className: r()(h.noticeRoot, s),
            children: [
              (0, i.jsx)("div", {
                className: h.iconContainer,
                children: (0, i.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "currentColor",
                  className: h.infoIcon,
                }),
              }),
              (0, i.jsx)("div", {
                className: h.text,
                children: x.intl.format(
                  ((n = u),
                  (t = l),
                  "PL" === n
                    ? t
                      ? x.t.hCpziY
                      : x.t.mTFLPD
                    : "TR" === n
                      ? t
                        ? x.t["9rb4W1"]
                        : x.t.SQ4Lyc
                      : t
                        ? x.t.M4FYRE
                        : x.t.MIY5dn),
                  {
                    helpCenterLink: o.Z.getArticleURL(p.BhN.LOCALIZED_PRICING),
                  },
                ),
              }),
            ],
          })
        );
      };
    },
    927699: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        s = t.n(r),
        a = t(481060),
        c = t(541716),
        o = t(752305),
        u = t(893718),
        d = t(993413),
        m = t(131704),
        p = t(474936),
        x = t(981631),
        h = t(388032),
        f = t(635182);
      let v = (0, m.kt)({ id: "1", type: x.d4z.DM });
      function g(e) {
        let {
            sectionTitle: n,
            errors: t,
            onTextChange: r,
            pendingText: m,
            placeholder: x,
            currentText: g,
            className: S,
            innerClassName: j,
            disabled: E = !1,
            disableThemedBackground: y = !1,
          } = e,
          [I, P] = l.useState(null != m ? m : g),
          [T, N] = l.useState((0, o.JM)(I)),
          b = l.useRef(!1);
        return (
          l.useEffect(() => {
            b.current = !0;
          }, []),
          l.useEffect(() => {
            if (void 0 === m) {
              let e = (0, o.JM)(g);
              P(g), N(e);
            }
          }, [m, g]),
          (0, i.jsx)("div", {
            className: s()(f.body, S),
            children: (0, i.jsxs)(d.Z, {
              title: n,
              errors: t,
              disabled: E,
              children: [
                (0, i.jsx)(u.Z, {
                  innerClassName: s()(f.textArea, j),
                  editorClassName: f.editorTextArea,
                  maxCharacterCount: p.$n,
                  onChange: function (e, n, t) {
                    n !== I && (P(n), N(t), r(n));
                  },
                  placeholder: x,
                  channel: v,
                  textValue: I,
                  richValue: T,
                  type: c.I.CUSTOM_GIFT,
                  onBlur: () => {
                    b.current = !1;
                  },
                  onFocus: () => {
                    b.current = !0;
                  },
                  focused: b.current,
                  onSubmit: function () {
                    return new Promise((e) => {
                      e({ shouldClear: !1, shouldRefocus: !0 });
                    });
                  },
                  disableThemedBackground: y,
                }),
                (0, i.jsx)(a.HiddenVisually, {
                  children: h.intl.format(h.t["+DFxLS"], { maxLength: p.$n }),
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
          return j;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        s = t.n(r),
        a = t(481060),
        c = t(987209),
        o = t(321051),
        u = t(669079),
        d = t(479446),
        m = t(646476),
        p = t(599659),
        x = t(981632),
        h = t(96848),
        f = t(703926),
        v = t(474936),
        g = t(388032),
        S = t(461405);
      let j = (e) => {
        let { isShopGift: n, className: t, optionsContainerClassName: r } = e,
          {
            giftRecipient: j,
            selectedGiftStyle: E,
            setSelectedGiftStyle: y,
            emojiConfetti: I,
            soundEffect: P,
            setEmojiConfetti: T,
            setSoundEffect: N,
          } = (0, c.wD)(),
          [b, C] = l.useState(!1),
          _ = l.useRef(null),
          O = (0, a.useRadioGroup)({ orientation: "horizontal" }),
          A = (0, u.MY)(j, n),
          Z = A === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
          R = A !== u.xr.DEFAULT,
          M = (0, m.rK)(),
          { enabled: w } = m.ZP.useExperiment(
            { location: "premiumGiftSelect_GiftAnimationOptions" },
            { autoTrackExposure: M },
          ),
          { enabled: L } = p.O.useExperiment({ location: "gift card" }),
          k = null;
        return (
          R && (k = M && w ? v.kJ : v.QI),
          L && (k = v.RQ),
          (0, i.jsxs)("div", {
            children: [
              R &&
                (0, i.jsxs)("div", {
                  className: s()(S.giftMainAnimation, t),
                  children: [
                    null != E
                      ? (0, i.jsx)(x.Z, {
                          giftStyle: E,
                          defaultAnimationState: d.SR.ACTION,
                          idleAnimationState: d.SR.LOOP,
                          shouldAnimate: !0,
                          className: S.animation,
                        })
                      : (0, i.jsx)(a.Spinner, { className: S.spinner }),
                    Z &&
                      (0, i.jsxs)("div", {
                        className: S.soundEmojiContainer,
                        children: [
                          (0, i.jsx)("div", {
                            className: S.sound,
                            children: (0, i.jsx)(o.Z, {
                              sound: P,
                              onSelect: (e) => {
                                null != N && N(null == e ? void 0 : e);
                              },
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: S.emoji,
                            children: (0, i.jsx)(h.Z, {
                              setEmojiConfetti: T,
                              emojiConfetti: null == I ? void 0 : I,
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
                    (null === (n = _.current) || void 0 === n || n.focus());
                },
                className: s()(S.giftBoxOptionContainer, r),
                "aria-label": g.intl.string(g.t.v54NrK),
                ...O,
                children:
                  null != k &&
                  k.map((e, n) =>
                    (0, i.jsx)(
                      f.m,
                      {
                        isSelected: E === e,
                        giftStyle: e,
                        setSelectedGiftStyle: y,
                        ref: 0 === n ? _ : null,
                        onFocus: () => C(!0),
                        onBlur: () => C(!1),
                      },
                      e,
                    ),
                  ),
              }),
              (0, i.jsx)("div", { className: S.__invalid_selectPlanDivider }),
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
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        s = t(907040),
        a = t(981631),
        c = t(185923),
        o = t(388032),
        u = t(301023);
      let d = {
          section: a.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
          openPopoutType: "gift_effect_emoji_picker",
        },
        m = c.Hz.GIFT;
      function p(e) {
        let { setEmojiConfetti: n, emojiConfetti: t } = e,
          [a, c] = l.useState(!1),
          p = (e) =>
            (0, i.jsxs)("div", {
              className: u.customGiftContent,
              children: [
                (0, i.jsxs)("div", {
                  className: u.customGiftHeader,
                  children: [
                    (0, i.jsx)(r.Text, {
                      variant: "text-md/bold",
                      children: o.intl.string(o.t.Hl2IgY),
                    }),
                    (0, i.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      children: o.intl.string(o.t.stGFAw),
                    }),
                  ],
                }),
                e,
              ],
            }),
          x = (e) => {
            null != n && (n(e), c(!1));
          };
        return (0, i.jsx)(r.Popout, {
          shouldShow: a,
          position: "bottom",
          align: "left",
          autoInvert: !1,
          onRequestClose: () => c(!1),
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(r.Dialog, {
              children: (0, i.jsx)(s.Z, {
                analyticsOverride: d,
                closePopout: n,
                onSelectEmoji: x,
                wrapper: "div",
                pickerIntention: m,
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
                onClick: () => c(!0),
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
                            children: o.intl.string(o.t.Hl2IgY),
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
          return g;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        s = t(474936),
        a = t(803731),
        c = t(426831),
        o = t(257510),
        u = t(74838),
        d = t(720834),
        m = t(385925),
        p = t(704253),
        x = t(718720),
        h = t(721513),
        f = t(959191);
      let v = {
          [s.Cj.STANDARD_BOX]: m,
          [s.Cj.CAKE]: p,
          [s.Cj.CHEST]: x,
          [s.Cj.COFFEE]: h,
          [s.Cj.SNOWGLOBE]: "",
          [s.Cj.BOX]: "",
          [s.Cj.CUP]: "",
          [s.Cj.SEASONAL_CAKE]: o,
          [s.Cj.SEASONAL_CHEST]: u,
          [s.Cj.SEASONAL_COFFEE]: d,
          [s.Cj.SEASONAL_STANDARD_BOX]: c,
          [s.Cj.NITROWEEN_STANDARD]: f.Z,
        },
        g = l.forwardRef(function (e, n) {
          let {
            isSelected: t,
            giftStyle: l,
            setSelectedGiftStyle: s,
            onFocus: c,
            onBlur: o,
          } = e;
          return (0, i.jsx)(r.Clickable, {
            className: a.button,
            innerRef: n,
            onClick: () => s(l),
            onFocus: c,
            onBlur: o,
            children: (0, i.jsx)("img", {
              style: { width: "100%", height: "100%" },
              alt: "",
              src: v[l],
              className: t ? a.customGiftBoxHighlighted : a.customGiftBox,
            }),
          });
        });
    },
    314404: function (e, n, t) {
      t.d(n, {
        M: function () {
          return V;
        },
        O: function () {
          return W;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        s = t.n(r),
        a = t(512722),
        c = t.n(a),
        o = t(442837),
        u = t(481060),
        d = t(490504),
        m = t(911969),
        p = t(940824),
        x = t(987209),
        h = t(563132),
        f = t(409813),
        v = t(509545),
        g = t(78839),
        S = t(669079),
        j = t(63063),
        E = t(74538),
        y = t(937615),
        I = t(711459),
        P = t(109213),
        T = t(857039),
        N = t(847903),
        b = t(104494),
        C = t(639119),
        _ = t(55610),
        O = t(653798),
        A = t(553797),
        Z = t(927699),
        R = t(987716),
        M = t(311821),
        w = t(459965),
        L = t(811616),
        k = t(251660),
        D = t(474936),
        F = t(981631),
        U = t(231338),
        B = t(388032),
        G = t(461405),
        H = t(615945);
      function W(e) {
        var n, t, r, a;
        let {
            premiumSubscription: f,
            skuId: g,
            selectedPlanId: M,
            setSelectedPlanId: w,
            priceOptions: W,
            planOptions: V,
            eligibleForMultiMonthPlans: z,
            referralTrialOfferId: Y,
            subscriptionPeriodEnd: K,
            showTotal: X = !0,
            discountInvoiceItems: q,
            handleClose: J,
          } = e,
          {
            activeSubscription: Q,
            setSelectedPlanId: $,
            selectedSkuId: ee,
            selectedPlan: en,
            priceOptions: et,
          } = (0, h.usePaymentContext)(),
          {
            isGift: ei,
            giftRecipient: el,
            selectedGiftStyle: er,
            customGiftMessage: es,
            setCustomGiftMessage: ea,
            giftingOrigin: ec,
          } = (0, x.wD)(),
          eo = (0, S.MY)(el),
          eu = ei && (0, S.pO)(el),
          ed = (0, T.Z)({ location: "PremiumPlanSelectStep" });
        (g = null != g ? g : ee),
          (f = null != f ? f : Q),
          c()(void 0 !== f, "should not be undefined");
        let [em, ep] = (0, o.Wu)([v.Z], () => [
            null != f ? v.Z.get(f.planId) : null,
            null != M ? v.Z.get(M) : null,
          ]),
          ex = (0, C.N)(Y),
          eh = null == ex ? void 0 : ex.subscription_trial,
          ef = (0, b.Ng)(),
          ev =
            null == ef
              ? void 0
              : null === (n = ef.discount) || void 0 === n
                ? void 0
                : n.plan_ids,
          eg = null != ep ? ep : en,
          eS = l.useCallback(
            (e) => {
              null != w ? w(e) : $(e);
            },
            [w, $],
          ),
          ej = null != W ? W : et;
        c()(null != ej, "Price option has to be set");
        let eE = null != ex && D.nG[ex.trial_id].skus.includes(g),
          ey =
            null != ef &&
            V.some((e) => (null == ev ? void 0 : ev.includes(e))) &&
            null != ef.discount,
          eI = (0, E.aS)(D.Xh.PREMIUM_MONTH_TIER_2, !1, ei, ej);
        l.useEffect(() => {
          z && I.ZP.trackExposure({ location: "5f89bb_1" });
        }, [z]);
        let eP = (null == eg ? void 0 : eg.id) != null && V.includes(eg.id);
        l.useEffect(() => {
          if (!eP) {
            if (null == em || ei) eS(V[0]);
            else if (null != em) {
              let e = V.find((e) => e !== em.id);
              null != e && eS(e);
            }
          }
        }, [eP, ei, V, em, eS]);
        let eT = !eu && (ei || (!eE && !ey)) && eP && X,
          eN = (0, u.useRadioGroup)(),
          eb =
            (null == eg ? void 0 : eg.id) != null
              ? (0, E.aS)(eg.id, !1, ei, ej)
              : void 0,
          { ipCountryCode: eC } = (0, N.Z)(),
          e_ = "HR" === eC && null != eb && eb.currency === U.pK.EUR,
          eO = (0, E.Ap)(ej.paymentSourceId),
          eA = l.useMemo(() => {
            if ((null == eh ? void 0 : eh.interval) === D.rV.DAY)
              return (null == eh ? void 0 : eh.interval_count) > 7
                ? B.intl.string(B.t.Z1V2cn)
                : B.intl.string(B.t.MI1rHh);
            return B.intl.string(B.t["+S5lra"]);
          }, [eh]),
          eZ = !ei && (ey || (null != eh && eE && null != K)),
          eR =
            null == q
              ? void 0
              : null ===
                    (a = q.find(
                      (e) => e.subscriptionPlanId === D.Xh.PREMIUM_MONTH_TIER_2,
                    )) || void 0 === a
                ? void 0
                : null === (r = a.discounts) || void 0 === r
                  ? void 0
                  : null ===
                        (t = r.find(
                          (e) => e.type === m.eW.SUBSCRIPTION_PLAN,
                        )) || void 0 === t
                    ? void 0
                    : t.amount,
          eM = (e, n, t) => {
            if (eu)
              return (0, i.jsx)(u.FormTitle, {
                className: H.selectGiftTitle,
                children: B.intl.string(B.t["3E5hXl"]),
              });
            if (!eZ)
              return (0, i.jsx)("div", {
                className: H.selectPlanChooseTitle,
                children: B.intl.string(B.t.a19jpa),
              });
            if (n) {
              let n = (null == e ? void 0 : e.trial_id) === D.a7;
              return (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    className: H.trialPlanSelectHeader,
                    children: n
                      ? B.intl.format(B.t.nG95hI, { endDate: K })
                      : B.intl.format(B.t.s4E7kZ, {
                          trialEnd: K,
                          trialPeriod: eA,
                        }),
                  }),
                  (0, i.jsx)("hr", { className: H.planSelectSeparator }),
                ],
              });
            }
            if (
              t &&
              null != eR &&
              null != eI &&
              M === D.Xh.PREMIUM_MONTH_TIER_2
            )
              return (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    className: H.trialPlanSelectHeader,
                    children: B.intl.format(B.t["nG7g/P"], {
                      numMonths:
                        null == ef ? void 0 : ef.discount.user_usage_limit,
                      discountedPrice: (0, y.T4)(eI.amount - eR, eI.currency),
                      regularPrice: (0, y.T4)(eI.amount, eI.currency),
                    }),
                  }),
                  (0, i.jsx)("hr", { className: H.planSelectSeparator }),
                ],
              });
          },
          { enabled: ew } = P.G.useExperiment(
            { location: "PremiumPlanSelectStep" },
            { autoTrackExposure: !1 },
          ),
          eL = ec === D.Wt.DM_CHANNEL && ew,
          ek = eL ? H.bodyColumnLeft : H.bodyColumnMiddle,
          eD = () => {
            if (eu && null != er)
              return eL
                ? (0, i.jsx)(R.q, {
                    className: G.adjustedGiftMainAnimation,
                    optionsContainerClassName: G.adjustedGiftBoxOptionContainer,
                  })
                : (0, i.jsx)(R.q, {});
            return null;
          },
          eF = () =>
            (0, i.jsx)("div", {
              ...eN,
              children: V.map((e) =>
                (0, i.jsx)(
                  L.Z,
                  {
                    planId: e,
                    premiumSubscription: ei ? null : null != f ? f : null,
                    selectPlan: eS,
                    selected: (null == eg ? void 0 : eg.id) === e,
                    priceOptions: ej,
                    shouldShowUpdatedPaymentModal: eZ,
                    isEligibleForDiscount: ey,
                    discountAmountOff: eR,
                    isEligibleForTrial: eE,
                  },
                  e,
                ),
              ),
            }),
          eU = () => eM(ex, eE, ey),
          eB = () =>
            e_
              ? (0, i.jsx)(d.Z, {
                  message: B.intl.formatToPlainString(B.t["9hnZoK"], {
                    kunaPriceWithCurrency: (0, y.T4)(
                      7.5345 * eb.amount,
                      U.pK.HRK,
                    ),
                  }),
                })
              : null;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: s()(eu ? H.stepBodyCustomGift : H.stepBody, {
              [H.paddingForHalloweenBanner]: ed,
            }),
            children: [
              (0, i.jsxs)("div", {
                className: eu ? ek : void 0,
                children: [
                  (0, i.jsx)(_.Z, {
                    fromBoostCancelModal: !1,
                    className: H.legacyPricingNotice,
                  }),
                  eL && eU(),
                  eL ? eF() : eD(),
                  eL && eB(),
                ],
              }),
              (0, i.jsxs)("div", {
                className: eu ? H.bodyColumnRight : void 0,
                children: [
                  (0, i.jsx)(k.s, { giftRecipient: el }),
                  eL && eD(),
                  (() => {
                    if (
                      eo === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
                      null != ea
                    )
                      return (0, i.jsx)(Z.Z, {
                        sectionTitle: B.intl.string(B.t.B3miEx),
                        className: H.customGiftMessageWrapper,
                        innerClassName: H.customGiftMessage,
                        onTextChange: (e) => ea(e),
                        pendingText: es,
                        currentText: es,
                      });
                  })(),
                  null != em &&
                    !ei &&
                    (0, i.jsx)("div", {
                      className: H.bodyText,
                      children: (function (e, n) {
                        let t = B.intl.string(B.t.BYa62t),
                          i = B.intl.string(B.t.CDa6Dg),
                          l = (() => {
                            switch (e.interval) {
                              case D.rV.YEAR:
                                return t;
                              case D.rV.MONTH:
                              default:
                                return i;
                            }
                          })(),
                          r = e.skuId;
                        switch (n) {
                          case D.Si.TIER_0:
                            switch (r) {
                              case D.Si.TIER_1:
                                return B.intl.string(B.t.q6mxDQ);
                              case D.Si.TIER_2:
                                return B.intl.string(B.t.seZVS0);
                              default:
                                return l;
                            }
                          case D.Si.TIER_1:
                            switch (r) {
                              case D.Si.TIER_0:
                                return B.intl.string(B.t["7+u2zs"]);
                              case D.Si.TIER_2:
                                return B.intl.string(B.t.NG2qcX);
                              default:
                                return l;
                            }
                          case D.Si.TIER_2:
                            switch (r) {
                              case D.Si.TIER_0:
                              case D.Si.TIER_1:
                                return B.intl.string(B.t["eB0/w8"]);
                              case D.Si.TIER_2:
                                return e.interval === D.rV.MONTH
                                  ? B.intl.formatToPlainString(B.t["RqUv8/"], {
                                      numFreeGuildSubscriptions: D.cb,
                                    })
                                  : l;
                              default:
                                return l;
                            }
                          default:
                            return l;
                        }
                      })(em, g),
                    }),
                  !eL && eU(),
                  !eL && eF(),
                  (0, i.jsx)("div", {
                    children:
                      eT && null != eg && null != eb
                        ? (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("div", {
                                className: H.selectPlanDivider,
                              }),
                              (0, i.jsx)(O.Ji, {
                                label: B.intl.string(B.t.txajQE),
                                value: (0, i.jsx)(A.Z, {
                                  price: eb.amount,
                                  currency: eb.currency,
                                  intervalType: ei ? null : eg.interval,
                                  intervalCount: eg.intervalCount,
                                  isPrepaidPaymentSource: eO,
                                }),
                                className: H.selectPlanTotalRow,
                              }),
                            ],
                          })
                        : null,
                  }),
                  !eL && eB(),
                  !ei &&
                    !eZ &&
                    X &&
                    (0, i.jsx)(d.Z, {
                      message: B.intl.format(B.t.Om31w8, {
                        documentationLink: j.Z.getArticleURL(
                          F.BhN.LOCALIZED_PRICING,
                        ),
                      }),
                    }),
                  ei && !eL && (0, i.jsx)(p.Z, { onClose: J }),
                ],
              }),
            ],
          }),
        });
      }
      function V(e) {
        let {
            onStepChange: n,
            selectedPlanId: t,
            paymentSources: l,
            onBackClick: r,
            showBackButton: s,
            planOptions: a,
            shouldRenderUpdatedPaymentModal: c = !1,
            isTrial: o,
          } = e,
          { paymentSources: d, selectedPlan: m } = (0, h.usePaymentContext)(),
          { isGift: p } = (0, x.wD)();
        return (
          (l = null != l ? l : d),
          (t = null != t ? t : null == m ? void 0 : m.id),
          (0, i.jsxs)(i.Fragment, {
            children: [
              null != t && a.includes(t)
                ? (0, i.jsx)(z, {
                    paymentSources: l,
                    onStepChange: n,
                    selectedPlanId: t,
                    isGift: p,
                    shouldRenderUpdatedPaymentModal: c,
                    isTrial: o,
                  })
                : (0, i.jsx)(u.Button, {
                    disabled: !0,
                    children: B.intl.string(B.t.XqMe3N),
                  }),
              s ? (0, i.jsx)(M.Z, { onClick: r }) : null,
            ],
          })
        );
      }
      function z(e) {
        let {
            onStepChange: n,
            selectedPlanId: t,
            isGift: l,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: s,
            isTrial: a,
          } = e,
          c = (0, o.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
          { hasEntitlements: d } = (0, w.H)(t, l),
          m =
            (null != c && null != c.paymentSourceId) ||
            Object.keys(r).length > 0 ||
            (d && !a);
        var p = s ? B.intl.string(B.t.PDTjLC) : B.intl.string(B.t.XqMe3N),
          x = f.h8.ADD_PAYMENT_STEPS;
        return (
          m && (x = f.h8.REVIEW),
          (0, i.jsx)(u.Button, { onClick: () => n(x), children: p })
        );
      }
    },
    811616: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        s = t(512722),
        a = t.n(s),
        c = t(442837),
        o = t(692547),
        u = t(481060),
        d = t(987209),
        m = t(706454),
        p = t(509545),
        x = t(669079),
        h = t(930153),
        f = t(74538),
        v = t(937615),
        g = t(104494),
        S = t(474936),
        j = t(388032),
        E = t(589242);
      function y(e) {
        let {
            premiumSubscription: n,
            planId: t,
            selectPlan: l,
            selected: s,
            priceOptions: y,
            shouldShowUpdatedPaymentModal: I,
            isEligibleForDiscount: P,
            discountAmountOff: T,
            isEligibleForTrial: N,
          } = e,
          b = (0, c.e7)([m.default], () => m.default.locale),
          C = (0, c.e7)([p.Z], () => p.Z.get(t)),
          { isGift: _, giftRecipient: O } = (0, d.wD)(),
          A = _ && (0, x.pO)(O);
        a()(null != C, "Missing subscriptionPlan");
        let Z = null != n && n.planId === t,
          R =
            Z ||
            (t === S.Xh.PREMIUM_MONTH_TIER_2 &&
              null != n &&
              [S.Xh.PREMIUM_YEAR_TIER_0, S.Xh.PREMIUM_YEAR_TIER_1].includes(
                n.planId,
              )),
          M = S.nH[t],
          w = (0, f.aS)(t, !1, _, y),
          L = (0, f.Ap)(y.paymentSourceId),
          k = null != M && !I,
          D = (0, g.Ng)(),
          F = C.interval === S.rV.YEAR ? j.t.ECT4Aw : j.t.v9QeOD,
          U = () =>
            null != M &&
            (0, i.jsx)(u.Text, {
              tag: "span",
              variant: "eyebrow",
              color: "always-white",
              className: E.planOptionDiscount,
              children: j.intl.format(j.t.IAybsL, {
                discount: (0, h.T3)(b, M / 100),
              }),
            }),
          B = () =>
            (C.interval === S.rV.YEAR && null != n) || (k && !Z)
              ? C.interval === S.rV.YEAR && null != n
                ? (0, i.jsxs)("span", {
                    className: E.planOptionMonthsFree,
                    children: ["(", j.intl.string(j.t["122kWF"]), ")"],
                  })
                : k && !Z
                  ? U()
                  : void 0
              : null;
        return (0, i.jsxs)(u.Clickable, {
          role: A ? "menuitem" : "radio",
          "aria-checked": s,
          tabIndex: s ? 0 : -1,
          focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
          onClick: R ? void 0 : () => l(t),
          className: r()(E.planOptionClickableContainer, {
            [E.selectedPlan]: A && s,
            [E.selectionBox]: A,
          }),
          children: [
            (0, i.jsxs)("div", {
              className: r()(E.planOption, { [E.planOptionDisabled]: R }),
              children: [
                (0, i.jsxs)("div", {
                  className: E.planOptionClickable,
                  children: [
                    !A &&
                      (0, i.jsx)(u.Checkbox, {
                        readOnly: !0,
                        displayOnly: !0,
                        value: s,
                        shape: u.Checkbox.Shapes.ROUND,
                        color: o.Z.unsafe_rawColors.BRAND_500.css,
                        type: u.Checkbox.Types.INVERTED,
                        className: E.planOptionCheckbox,
                      }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)("div", {
                          className: r()(E.planOptionInterval, {
                            [E.optionSelected]: s || A,
                            [E.updatedOptionSelected]: I && (s || A),
                          }),
                          children: [
                            (0, f.L7)(
                              C.interval,
                              _,
                              L,
                              C.intervalCount,
                              A,
                              (0, f.Rd)(C.id),
                            ),
                            A && B(),
                          ],
                        }),
                        A &&
                          (0, i.jsx)("div", {
                            className: E.planOneTimeCost,
                            children: j.intl.format(j.t.ori2Ji, {
                              currencyAmount: (0, v.T4)(w.amount, w.currency),
                            }),
                          }),
                      ],
                    }),
                    Z &&
                      (0, i.jsxs)("span", {
                        className: E.planOptionCurrentPlan,
                        children: ["(", j.intl.string(j.t.ymSxh4), ")"],
                      }),
                    !A && B(),
                  ],
                }),
                I
                  ? (0, i.jsx)("div", {
                      className: r()({ [E.optionPriceSelected]: s }),
                      children: j.intl.format(j.t.hXcaLS, {
                        price:
                          P && null != T && C.interval === S.rV.MONTH
                            ? (0, v.T4)(w.amount - T, w.currency)
                            : N
                              ? (0, v.T4)(0, w.currency, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                })
                              : (0, v.T4)(w.amount, w.currency),
                      }),
                    })
                  : (0, i.jsx)("div", {
                      className: r()({ [E.optionSelected]: s || A }),
                      children: (0, v.T4)(w.amount, w.currency),
                    }),
              ],
            }),
            I &&
              (0, i.jsx)("div", {
                className: E.planOptionSubtextContainer,
                children: (0, i.jsx)(u.Text, {
                  variant: "text-md/normal",
                  color: s ? "text-normal" : "interactive-normal",
                  className: r()(E.planOptionSubtext, {
                    [E.discountPlanOptionSubtext]: P,
                  }),
                  children: (() => {
                    if (P && null != T && C.interval === S.rV.MONTH) {
                      var e;
                      return j.intl.format(j.t["VeE/4O"], {
                        numMonths:
                          null !==
                            (e =
                              null == D
                                ? void 0
                                : D.discount.user_usage_limit) && void 0 !== e
                            ? e
                            : S.rt,
                        discountedPrice: (0, v.T4)(w.amount - T, w.currency),
                        regularPrice: (0, v.T4)(w.amount, w.currency),
                      });
                    }
                    if (N)
                      return j.intl.format(F, {
                        price: (0, v.T4)(w.amount, w.currency),
                      });
                    if (C.interval === S.rV.YEAR)
                      return j.intl.formatToPlainString(j.t.rtLTJC, {
                        percent: M,
                      });
                    return null;
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
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(700582),
        s = t(51144),
        a = t(388032),
        c = t(453476);
      let o = (e) => {
        let { giftRecipient: n } = e;
        return null == n
          ? null
          : (0, i.jsxs)("div", {
              className: c.content,
              children: [
                (0, i.jsx)(l.FormTitle, {
                  children: a.intl.string(a.t.xFn72t),
                }),
                (0, i.jsxs)("div", {
                  className: c.giftRecipientInfo,
                  children: [
                    (0, i.jsx)(r.Z, {
                      user: n,
                      className: c.__invalid_giftRecipient,
                      size: l.AvatarSizes.SIZE_20,
                    }),
                    (0, i.jsx)(l.Heading, {
                      className: c.giftRecipientName,
                      variant: "text-md/normal",
                      children: s.ZP.getName(n),
                    }),
                    (0, i.jsx)(l.Heading, {
                      className: c.giftRecipientTag,
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
          return G;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        s = t.n(r),
        a = t(742280),
        c = t(442837),
        o = t(692547),
        u = t(481060),
        d = t(190947),
        m = t(224550),
        p = t(275850),
        x = t(672971),
        h = t(987209),
        f = t(563132),
        v = t(45572),
        g = t(919778),
        S = t(614223),
        j = t(246946),
        E = t(351402),
        y = t(509545),
        I = t(669079),
        P = t(74538),
        T = t(937615),
        N = t(479446),
        b = t(374649),
        C = t(104494),
        _ = t(642530),
        O = t(653798),
        A = t(314182),
        Z = t(981632),
        R = t(314404),
        M = t(42818),
        w = t(459965),
        L = t(251660),
        k = t(474936),
        D = t(981631),
        F = t(231338),
        U = t(388032),
        B = t(809186);
      function G(e) {
        var n, t, r, G, H;
        let W,
          V,
          {
            selectedPlanId: z,
            paymentSources: Y,
            priceOptions: K,
            currencies: X,
            onCurrencyChange: q,
            onPaymentSourceChange: J,
            handlePaymentSourceAdd: Q,
            setHasAcceptedTerms: $,
            legalTermsNodeRef: ee,
            hasLegalTermsFlash: en,
            trialId: et,
            trialFooterMessageOverride: ei,
            reviewWarningMessage: el,
            metadata: er,
            purchaseState: es,
            hideSubscriptionDetails: ea,
            referralTrialOfferId: ec,
            isTrial: eo = !1,
            isDiscount: eu = !1,
            handleClose: ed,
          } = e,
          {
            isEmbeddedIAP: em,
            activeSubscription: ep,
            selectedSkuId: ex,
            defaultPlanId: eh,
            isPremium: ef,
            startedPaymentFlowWithPaymentSourcesRef: ev,
            setInvoicePreview: eg,
            contextMetadata: eS,
            inReverseTrial: ej,
            setPurchaseError: eE,
          } = (0, f.usePaymentContext)(),
          {
            isGift: ey,
            giftRecipient: eI,
            selectedGiftStyle: eP,
          } = (0, h.wD)(),
          eT = (0, C.Ng)(),
          eN =
            null == eT
              ? void 0
              : null === (n = eT.discount) || void 0 === n
                ? void 0
                : n.plan_ids.some((e) => k.GP[e].skuId === ex),
          eb = !ey && null != eT && null != ex && eN,
          eC = (0, c.e7)([y.Z], () => y.Z.get(z));
        s()(null != eC, "Missing plan");
        let e_ = [{ planId: eC.id, quantity: 1 }],
          eO = es === v.A.PURCHASING || es === v.A.COMPLETED,
          [eA, eZ] = (0, b.ED)({
            items: e_,
            renewal: !1,
            preventFetch: ej || ey || eO,
            applyEntitlements: !0,
            paymentSourceId: K.paymentSourceId,
            currency: K.currency,
            trialId: et,
            metadata: er,
          }),
          [eR, eM] = (0, b.ED)({
            subscriptionId: null == ep ? void 0 : ep.id,
            items: e_,
            renewal: !0,
            preventFetch: ey || eO,
            trialId: et,
            paymentSourceId: K.paymentSourceId,
            currency: K.currency,
            metadata: er,
          }),
          [ew, eL] = (0, b.ED)({
            items: [{ planId: k.Xh.PREMIUM_MONTH_TIER_2, quantity: 1 }],
            renewal: !0,
            preventFetch: !eb,
            trialId: et,
            paymentSourceId: K.paymentSourceId,
            currency: K.currency,
            metadata: er,
          }),
          [ek, eD] = (0, b.o5)({
            paymentSourceId: K.paymentSourceId,
            skuId: ex,
            subscriptionPlanId: z,
            currency: K.currency,
            preventFetch: !ey || eO,
            loadId: eS.loadId,
          });
        l.useEffect(() => {
          eg(ek);
        }, [eg, ek]);
        let eF = ey && (0, I.pO)(eI),
          eU =
            null !==
              (G =
                null !== (r = null != eZ ? eZ : eM) && void 0 !== r ? r : eL) &&
            void 0 !== G
              ? G
              : eD;
        l.useEffect(() => {
          eE(eU);
        }, [eU, eE]);
        let eB = (0, c.e7)([j.Z], () => j.Z.enabled),
          eG = K.paymentSourceId,
          { hasEntitlements: eH, entitlements: eW } = (0, w.H)(eC.id, ey),
          eV = (0, P.Ap)(K.paymentSourceId),
          ez = (0, g.sE)(et, eG, z),
          eY = (0, S.Kp)({
            isTrial: eo,
            isGift: ey,
            selectedSkuId: ex,
            startedPaymentFlowWithPaymentSources: ev.current,
            inReverseTrial: ej,
          }),
          [eK, eX] = l.useState(null == eA ? void 0 : eA.subscriptionPeriodEnd);
        l.useEffect(() => {
          null == eK && eX(null == eA ? void 0 : eA.subscriptionPeriodEnd);
        }, [null == eA ? void 0 : eA.subscriptionPeriodEnd, eK]);
        let eq = l.useMemo(
            () =>
              (0, P.V7)({
                skuId: ex,
                isPremium: ef,
                multiMonthPlans: [],
                currentSubscription: ep,
                isGift: ey,
                isEligibleForTrial: eo,
                defaultPlanId: eh,
                defaultToMonthlyPlan: !1,
              }),
            [ex, ep, ey, eh, ef, eo],
          ),
          eJ = (0, S.$g)(eY, eA, eC),
          eQ = l.useMemo(
            () => (eo && null != eA ? eA : ej && null != eR ? eR : void 0),
            [ej, eo, eA, eR],
          );
        if (null != eU);
        else if (ey && null != ek)
          V = (0, i.jsx)(M.e9, {
            plan: eC,
            className: B.invoice,
            isPrepaidPaymentSource: eV,
            isCustomGift: eF,
            invoicePreview: ek,
          });
        else if (null != eQ)
          V = (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(O.KU, { negativeMarginTop: !ej }),
              (0, i.jsxs)(O.PO, {
                className: B.invoice,
                children: [
                  (0, i.jsxs)("div", {
                    className: B.trialPriceLine,
                    children: [
                      (0, i.jsx)(u.Text, {
                        variant: "text-md/bold",
                        children: U.intl.string(U.t.txajQE),
                      }),
                      (0, i.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: U.intl.format(U.t.hXcaLS, {
                          price: (0, T.T4)(0, eQ.currency, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: B.afterTrialPriceLine,
                    children: (0, i.jsx)(M.yT, { invoice: eQ, plan: eC }),
                  }),
                ],
              }),
            ],
          });
        else {
          if (null == eA || null == eR || eJ)
            return (0, i.jsx)("div", {
              className: B.spinnerWrapper,
              children: (0, i.jsx)(u.Spinner, {}),
            });
          eo &&
            eA.subscriptionPeriodEnd !== eR.subscriptionPeriodEnd &&
            (W = eA.subscriptionPeriodEnd),
            (V = (0, i.jsxs)(O.PO, {
              className: B.invoice,
              children: [
                (0, i.jsx)(O.q9, { children: U.intl.string(U.t["2eh+Cg"]) }),
                (0, i.jsx)(M.Lu, {
                  invoice: eA,
                  newPlan: eC,
                  isPrepaidPaymentSource: eV,
                  referralTrialOfferId: ec,
                }),
                eV
                  ? null
                  : (0, i.jsx)(M.nd, {
                      renewalInvoice: eR,
                      isTrial: eo,
                      priceOptions: K,
                      overrideRenewalDate: W,
                      trialFooterMessageOverride: ei,
                      hideSubscriptionDetails: ea,
                    }),
              ],
            }));
        }
        let e$ = a.M.EEA_COUNTRIES.has(E.Z.ipCountryCodeWithFallback),
          {
            checkboxLabel: e0,
            checkboxClassname: e1,
            checkboxLabelClassname: e2,
          } = (function (e, n, t) {
            let i = null,
              l = null,
              r = null;
            if (e && null != n) {
              let { intervalType: e, intervalCount: s } =
                  P.ZP.getIntervalForInvoice(n),
                a = (0, T.og)((0, T.T4)(n.total, n.currency), e, s),
                c = null != t ? t : n.subscriptionPeriodEnd;
              (i = U.intl.format(U.t.ZzmrTk, {
                termsURL: D.EYA.TERMS,
                paidURL: D.EYA.PAID_TERMS,
                rate: a,
                renewalDate: c,
              })),
                (l = B.trialCheckbox),
                (r = B.trialCheckboxLabel);
            }
            return {
              checkboxLabel: i,
              checkboxClassname: l,
              checkboxLabelClassname: r,
            };
          })(null != eo && eo, eR, W),
          e9 = U.intl.formatToPlainString(U.t["sBpy9/"], { planName: eC.name });
        return (
          ey && !eF
            ? (e9 = U.intl.string(U.t.J5a0eX))
            : ey && eF
              ? (e9 = "")
              : (0, P.PV)(eC.id) &&
                (e9 = P.ZP.getBillingReviewSubheader(null, eC)),
          ez
            ? null
            : (0, i.jsxs)("div", {
                className: B.stepBody,
                children: [
                  null != el &&
                    (0, i.jsxs)("div", {
                      className: B.reviewWarningMessageContainer,
                      children: [
                        (0, i.jsx)(u.CircleInformationIcon, {
                          size: "custom",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 20,
                          height: 20,
                        }),
                        (0, i.jsx)(u.Text, {
                          className: B.reviewWarningMessage,
                          variant: "text-sm/normal",
                          children: el,
                        }),
                      ],
                    }),
                  eY &&
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(O.KU, {
                          negativeMarginTop: !0,
                          negativeMarginBottom: !0,
                        }),
                        (0, i.jsx)(_.Z, {}),
                        (0, i.jsx)(R.O, {
                          planOptions: eq,
                          eligibleForMultiMonthPlans: !1,
                          referralTrialOfferId: void 0,
                          selectedPlanId: z,
                          subscriptionPeriodEnd: eK,
                          showTotal: !1,
                          discountInvoiceItems: eb
                            ? null == ew
                              ? void 0
                              : ew.invoiceItems
                            : void 0,
                          handleClose: ed,
                        }),
                        (0, i.jsx)(O.KU, {}),
                      ],
                    }),
                  ej &&
                    (0, i.jsx)(u.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: B.trialHeader,
                      children: U.intl.format(U.t["7ZS2m5"], {
                        trialEnd: null == ep ? void 0 : ep.currentPeriodEnd,
                      }),
                    }),
                  !eo &&
                    (0, i.jsx)(u.FormTitle, {
                      tag: u.FormTitleTags.H5,
                      children: e9,
                    }),
                  eF &&
                    null != eP &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(Z.Z, {
                          defaultAnimationState: N.SR.LOOP,
                          giftStyle: eP,
                          shouldAnimate: !0,
                          className: B.giftMainAnimation,
                        }),
                        (0, i.jsx)(L.s, { giftRecipient: eI }),
                      ],
                    }),
                  V,
                  (0, i.jsxs)("div", {
                    className: B.paymentSourceWrapper,
                    children: [
                      eo
                        ? (0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            className: B.formTitle,
                            children: U.intl.string(U.t["YH7B+P"]),
                          })
                        : (0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: U.intl.string(U.t.mmDvV1),
                          }),
                      (0, i.jsx)(p.Z, {
                        paymentSources: Object.values(Y),
                        selectedPaymentSourceId: eG,
                        prependOption:
                          eH && !eo
                            ? { label: U.intl.string(U.t.IGU7Eh), value: null }
                            : null,
                        onChange: J,
                        onPaymentSourceAdd: Q,
                        hidePersonalInformation: eB,
                        isTrial: eo,
                      }),
                      eH && null == eG
                        ? (0, i.jsx)("div", {
                            className: B.paymentSourceOptionalWarning,
                            children: U.intl.format(U.t["2wPRSE"], {
                              months: eW.length,
                            }),
                          })
                        : null,
                      eu
                        ? null
                        : (0, i.jsxs)(d.b, {
                            currencies: X,
                            className: B.currencyWrapper,
                            children: [
                              (0, i.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: U.intl.string(U.t["/AAR09"]),
                              }),
                              (0, i.jsx)(d.Z, {
                                selectedCurrency: K.currency,
                                currencies: X,
                                onChange: q,
                              }),
                            ],
                          }),
                    ],
                  }),
                  (0, i.jsx)(A.Z, {
                    isActive: en,
                    ref: ee,
                    children: (0, i.jsx)(x.Z, {
                      onChange: $,
                      forceShow: !0,
                      checkboxLabel: e0,
                      checkboxClassname: e1,
                      checkboxLabelClassname: e2,
                      finePrint:
                        null !== (H = !ej && ei) && void 0 !== H
                          ? H
                          : (0, i.jsx)(m.Z, {
                              hide: eo || eu,
                              subscriptionPlan: eC,
                              renewalInvoice: eR,
                              isGift: ey,
                              paymentSourceType:
                                null === (t = Y[null != eG ? eG : ""]) ||
                                void 0 === t
                                  ? void 0
                                  : t.type,
                              isEmbeddedIAP: em,
                              basePrice: (0, P.aS)(eC.id, !1, ey, K),
                            }),
                      showPricingLink: eC.currency !== F.pK.USD,
                      showWithdrawalWaiver: e$,
                      disabled: eO,
                      isTrial: eo && null == ei,
                      inReverseTrial: ej,
                      isDiscount: eu,
                      subscriptionPlan: eC,
                      isGift: ey,
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
          return L;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        s = t.n(r),
        a = t(742280),
        c = t(442837),
        o = t(481060),
        u = t(190947),
        d = t(224550),
        m = t(275850),
        p = t(672971),
        x = t(100527),
        h = t(906732),
        f = t(987209),
        v = t(563132),
        g = t(45572),
        S = t(614223),
        j = t(246946),
        E = t(351402),
        y = t(509545),
        I = t(74538),
        P = t(296848),
        T = t(374649),
        N = t(642530),
        b = t(653798),
        C = t(585602),
        _ = t(314182),
        O = t(314404),
        A = t(42818),
        Z = t(981631),
        R = t(388032),
        M = t(311583),
        w = t(809186);
      function L(e) {
        var n;
        let t,
          {
            premiumSubscription: r,
            paymentSources: x,
            priceOptions: h,
            onPaymentSourceChange: T,
            onPaymentSourceAdd: C,
            planId: A,
            setHasAcceptedTerms: M,
            legalTermsNodeRef: L,
            hasLegalTermsFlash: G,
            onInvoiceError: H,
            planGroup: W,
            currencies: V,
            onCurrencyChange: z,
            hasOpenInvoice: Y,
            purchaseState: K,
            handleClose: X,
          } = e,
          {
            selectedSkuId: q,
            defaultPlanId: J,
            isPremium: Q,
            startedPaymentFlowWithPaymentSourcesRef: $,
          } = (0, v.usePaymentContext)(),
          { isGift: ee } = (0, f.wD)(),
          en = h.paymentSourceId,
          et = (0, c.e7)([y.Z], () => y.Z.get(A));
        s()(null != et, "Missing newPlan");
        let ei = (0, c.e7)([j.Z], () => j.Z.hidePersonalInformation),
          el = a.M.EEA_COUNTRIES.has(E.Z.ipCountryCodeWithFallback),
          er = K === g.A.PURCHASING || K === g.A.COMPLETED,
          es = (0, S.Kp)({
            isTrial: !1,
            isGift: ee,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: $.current,
          }),
          ea = (null == r ? void 0 : r.status) === Z.O0b.PAUSED,
          ec = l.useMemo(
            () =>
              (0, I.V7)({
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
          Y || ea
            ? R.intl.string(R.t.nyzoFR)
            : (0, I.PV)(A)
              ? (0, I.W_)(r, et)
              : R.intl.formatToPlainString(R.t["sBpy9/"], {
                  planName: et.name,
                });
        let eo = null;
        return (
          null != r &&
            (eo = Y
              ? (0, i.jsx)(k, {
                  premiumSubscription: r,
                  onInvoiceError: H,
                  priceOptions: h,
                  preventFetch: !1,
                })
              : ea
                ? (0, i.jsx)(U, {
                    premiumSubscription: r,
                    onInvoiceError: H,
                    priceOptions: h,
                    preventFetch: er,
                  })
                : (0, P.R4)(r, A, W)
                  ? (0, i.jsx)(D, {
                      premiumSubscription: r,
                      newPlan: et,
                      onInvoiceError: H,
                      planGroup: W,
                      priceOptions: h,
                      preventFetch: er,
                    })
                  : (0, i.jsx)(B, {
                      premiumSubscription: r,
                      newPlan: et,
                      planGroup: W,
                      priceOptions: h,
                      preventFetch: er,
                    })),
          (0, i.jsxs)("div", {
            className: w.stepBody,
            children: [
              !ea &&
                es &&
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(b.KU, {
                      negativeMarginBottom: !0,
                      negativeMarginTop: !0,
                    }),
                    (0, i.jsx)(N.Z, {}),
                    (0, i.jsx)(O.O, {
                      planOptions: ec,
                      eligibleForMultiMonthPlans: !1,
                      selectedPlanId: A,
                      showTotal: !1,
                      handleClose: X,
                    }),
                    (0, i.jsx)(b.KU, {}),
                  ],
                }),
              (0, i.jsx)(o.FormTitle, { tag: o.FormTitleTags.H5, children: t }),
              eo,
              (0, i.jsxs)("div", {
                className: w.paymentSourceWrapper,
                children: [
                  (0, i.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children: R.intl.string(R.t.mmDvV1),
                  }),
                  (0, i.jsx)(m.Z, {
                    paymentSources: Object.values(x),
                    selectedPaymentSourceId: en,
                    onChange: T,
                    onPaymentSourceAdd: C,
                    hidePersonalInformation: ei,
                    disabled: er,
                  }),
                ],
              }),
              (0, i.jsxs)(u.b, {
                currencies: V,
                className: w.currencyWrapper,
                children: [
                  (0, i.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children: R.intl.string(R.t["/AAR09"]),
                  }),
                  (0, i.jsx)(u.Z, {
                    selectedCurrency: h.currency,
                    currencies: V,
                    onChange: z,
                    disabled: er,
                  }),
                ],
              }),
              (0, i.jsx)(_.Z, {
                isActive: G,
                ref: L,
                children:
                  null != r && (0, P.R4)(r, A, W)
                    ? (0, i.jsx)(F, {
                        premiumSubscription: r,
                        newPlan: et,
                        onInvoiceError: H,
                        planGroup: W,
                        priceOptions: h,
                        preventFetch: er,
                        disabled: er,
                        isEEA: el,
                        paymentSources: x,
                        setHasAcceptedTerms: M,
                      })
                    : (0, i.jsx)(p.Z, {
                        onChange: M,
                        finePrint: (0, i.jsx)(d.Z, {
                          subscriptionPlan: et,
                          paymentSourceType:
                            null === (n = x[null != en ? en : ""]) ||
                            void 0 === n
                              ? void 0
                              : n.type,
                          basePrice: (0, I.aS)(et.id, !1, ee, h),
                          currentSubscription: r,
                          planGroup: W,
                        }),
                        forceShow: !0,
                        showPricingLink: et.currency !== Z.pKx.USD,
                        showWithdrawalWaiver: el,
                        disabled: er,
                        subscriptionPlan: et,
                        currentSubscription: r,
                        planGroup: W,
                      }),
              }),
            ],
          })
        );
      }
      function k(e) {
        let {
            premiumSubscription: n,
            onInvoiceError: t,
            priceOptions: r,
            preventFetch: s,
          } = e,
          [a, c] = (0, T.Ox)({ subscriptionId: n.id, preventFetch: s });
        l.useEffect(() => {
          t(c);
        }, [t, c]);
        let u = (0, I.Ap)(r.paymentSourceId);
        return null != a
          ? (0, i.jsxs)(b.PO, {
              className: M.__invalid_invoice,
              children: [
                (0, i.jsx)(A.By, { invoice: a, isPrepaidPaymentSource: u }),
                (0, i.jsx)(A.nd, {
                  premiumSubscription: n,
                  renewalInvoice: a,
                  isUpdate: !0,
                  isPrepaidPaymentSource: u,
                }),
              ],
            })
          : (0, i.jsx)(o.Spinner, {});
      }
      function D(e) {
        let {
            premiumSubscription: n,
            newPlan: t,
            onInvoiceError: r,
            planGroup: s,
            priceOptions: a,
            preventFetch: c,
          } = e,
          { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0,
          v.usePaymentContext)(),
          { isGift: m } = (0, f.wD)(),
          { analyticsLocations: p } = (0, h.ZP)(),
          g = (0, I.al)(n, t.id, 1, new Set(s)),
          [j, E] = (0, T.ED)({
            subscriptionId: n.id,
            items: g,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: p,
            analyticsLocation:
              x.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
          }),
          [y, P] = (0, T.ED)({
            subscriptionId: n.id,
            items: g,
            renewal: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: p,
            analyticsLocation:
              x.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          }),
          N = null != E ? E : P;
        if (
          (l.useEffect(() => {
            r(N);
          }, [r, N]),
          null != N)
        )
          return (0, i.jsx)(o.FormErrorBlock, { children: N.message });
        let C = (0, S.Kp)({
            isTrial: !1,
            isGift: m,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current,
          }),
          _ = (0, S.$g)(C, j, t);
        if (null == j || null == y || _)
          return (0, i.jsx)(o.Spinner, { className: w.__invalid_spinner });
        let O = (0, I.Ap)(a.paymentSourceId);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(A.hG, { proratedInvoice: j, renewalInvoice: y }),
            (0, i.jsxs)(b.PO, {
              className: w.invoice,
              children: [
                (0, i.jsx)(b.q9, { children: R.intl.string(R.t["2eh+Cg"]) }),
                (0, i.jsx)(A.Lu, {
                  invoice: j,
                  newPlan: t,
                  isPrepaidPaymentSource: O,
                }),
                (0, i.jsx)(A.nd, {
                  premiumSubscription: n,
                  proratedInvoice: j,
                  renewalInvoice: y,
                  isUpdate: !0,
                  isPrepaidPaymentSource: O,
                }),
              ],
            }),
          ],
        });
      }
      function F(e) {
        var n, t;
        let r,
          {
            premiumSubscription: s,
            newPlan: a,
            onInvoiceError: c,
            planGroup: u,
            priceOptions: m,
            preventFetch: f,
            disabled: v,
            isEEA: g,
            paymentSources: S,
            setHasAcceptedTerms: j,
          } = e,
          { analyticsLocations: E } = (0, h.ZP)(),
          y = (0, I.al)(s, a.id, 1, new Set(u)),
          [P, N] = (0, T.ED)({
            subscriptionId: s.id,
            items: y,
            renewal: !0,
            paymentSourceId: m.paymentSourceId,
            currency: m.currency,
            preventFetch: f,
            analyticsLocations: E,
            analyticsLocation:
              x.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          });
        return (l.useEffect(() => {
          c(N);
        }, [c, N]),
        null != N)
          ? (0, i.jsx)(o.FormErrorBlock, { children: N.message })
          : (null != P &&
                (r = {
                  amount: P.total,
                  currency: P.currency,
                  tax: P.tax,
                  taxInclusive: P.taxInclusive,
                }),
              null == r)
            ? null
            : (0, i.jsx)(p.Z, {
                onChange: j,
                finePrint: (0, i.jsx)(d.Z, {
                  subscriptionPlan: a,
                  paymentSourceType:
                    null ===
                      (n =
                        S[
                          null !== (t = m.paymentSourceId) && void 0 !== t
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
                showPricingLink: a.currency !== Z.pKx.USD,
                showWithdrawalWaiver: g,
                disabled: v,
                subscriptionPlan: a,
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
          { analyticsLocations: a } = (0, h.ZP)(),
          [c, u] = (0, T.ED)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
            preventFetch: r,
            analyticsLocations: a,
            analyticsLocation:
              x.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
          }),
          [d, m] = (0, T.ED)({
            subscriptionId: n.id,
            renewal: !0,
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
            preventFetch: r,
            analyticsLocations: a,
            analyticsLocation:
              x.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
          }),
          p = null != u ? u : m;
        if (
          (l.useEffect(() => {
            s(p);
          }, [s, p]),
          null != p)
        )
          return (0, i.jsx)(o.FormErrorBlock, { children: p.message });
        if (null == c || null == d)
          return (0, i.jsx)(o.Spinner, { className: w.__invalid_spinner });
        let f = (0, I.Ap)(t.paymentSourceId);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: M.renewalInvoiceDate,
              children: R.intl.string(R.t.spIYoq),
            }),
            (0, i.jsxs)(b.PO, {
              className: w.invoice,
              children: [
                (0, i.jsx)(b.q9, { children: R.intl.string(R.t["2eh+Cg"]) }),
                (0, i.jsx)(A.By, { invoice: c, isPrepaidPaymentSource: f }),
                (0, i.jsx)(A.nd, {
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
      function B(e) {
        let n,
          {
            premiumSubscription: t,
            newPlan: l,
            planGroup: r,
            priceOptions: s,
            preventFetch: a,
          } = e,
          { analyticsLocations: c } = (0, h.ZP)(),
          [u, d] = (0, T.ED)({
            subscriptionId: t.id,
            items: (0, I.al)(t, l.id, 1, new Set(r)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation:
              "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
          });
        if (null != d)
          return (0, i.jsx)(o.FormErrorBlock, { children: d.message });
        if (null == u)
          return (0, i.jsx)("div", { children: (0, i.jsx)(o.Spinner, {}) });
        n = t.type === Z.NYc.PREMIUM ? (0, I.Gf)(l.id) : l.name;
        let m = (0, I.Ap)(s.paymentSourceId);
        return (0, i.jsxs)("div", {
          className: w.bodyText,
          children: [
            (0, i.jsx)("div", {
              className: M.renewalInvoiceDate,
              children: R.intl.format(R.t["+y0Tj4"], {
                renewalDate: u.subscriptionPeriodStart,
              }),
            }),
            (0, i.jsxs)(b.PO, {
              className: w.invoice,
              children: [
                (0, i.jsx)(b.q9, { children: R.intl.string(R.t.iqhIp6) }),
                (0, i.jsx)(b.R$, { label: n, value: (0, I.PK)(l, s, !0) }),
                (0, i.jsx)(C.Z, { invoice: u }),
                (0, i.jsx)(b.KU, {}),
                (0, i.jsx)(A.nd, {
                  premiumSubscription: t,
                  renewalInvoice: u,
                  isUpdate: !0,
                  isPrepaidPaymentSource: m,
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
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        s = t(481060),
        a = t(747642);
      function c(e) {
        let {
          className: n,
          copy: t,
          bannerImage: l,
          textColor: c = "always-white",
          hideGiftIcon: o = !1,
        } = e;
        return (0, i.jsxs)("div", {
          className: r()(a.bannerContainer, n),
          children: [
            null == l
              ? null
              : (0, i.jsx)("img", { alt: "", className: a.banner, src: l }),
            (0, i.jsxs)("div", {
              className: a.textContainer,
              children: [
                !1 === o &&
                  (0, i.jsx)(s.GiftIcon, {
                    size: "md",
                    color: "currentColor",
                    className: a.giftIcon,
                  }),
                (0, i.jsx)(s.Heading, {
                  className: r()(a.textHeader, {
                    [a.textHeaderWithGiftIcon]: !o,
                  }),
                  color: c,
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
          return m;
        },
      }),
        t(757143);
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        s = t(481060),
        a = t(403182),
        c = t(587446),
        o = t(504983),
        u = t(43371);
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
                  return isNaN(n) ? e : (0, a.Ng)(n);
                }),
              },
              n,
            ),
          ),
        });
      }
      function m(e) {
        let {
          title: n,
          titleIcon: t,
          titleId: l,
          description: a,
          children: m,
          className: p,
          errors: x,
          disabled: h = !1,
          hideDivider: f = !1,
          showBorder: v = !1,
          borderType: g,
          hasBackground: S = !1,
          forcedDivider: j = !1,
          showPremiumIcon: E = !1,
        } = e;
        return (0, i.jsx)("div", {
          className: r()(u.customizationSection, p, {
            [u.disabled]: h,
            [u.hideDivider]: f,
            [u.showBorder]: v,
            [u.withDivider]: j,
          }),
          children: (0, i.jsxs)(o.Z, {
            className: u.customizationSectionBorder,
            backgroundClassName: u.customizationSectionBackground,
            isShown: v,
            type: g,
            hasBackground: S,
            children: [
              (0, i.jsxs)(s.FormTitle, {
                className: u.title,
                id: l,
                children: [n, E && (0, i.jsx)(c.Z, {}), t],
              }),
              null != a
                ? (0, i.jsx)(s.FormText, {
                    type: s.FormText.Types.DESCRIPTION,
                    className: u.sectionDescription,
                    children: a,
                  })
                : null,
              m,
              null != x && (0, i.jsx)(d, { errors: x }),
            ],
          }),
        });
      }
    },
    504983: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return l;
        },
      });
      var i,
        l,
        r = t(200651),
        s = t(192379),
        a = t(120356),
        c = t.n(a),
        o = t(882880);
      ((i = l || (l = {})).PREMIUM = "premium"), (i.LIMITED = "limited");
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
      n.Z = s.forwardRef(function (e, n) {
        let {
          children: t,
          type: i = "premium",
          isShown: l,
          hasBackground: s = !1,
          className: a,
          backgroundClassName: d,
        } = e;
        if (!l) return (0, r.jsx)(r.Fragment, { children: t });
        let { border: m, background: p } = u[i];
        return (0, r.jsx)("div", {
          ref: n,
          className: c()(m, a),
          children: (0, r.jsx)("div", {
            className: c()(s ? p : o.background, d),
            children: t,
          }),
        });
      });
    },
    911367: function (e, n, t) {
      t.d(n, {
        t: function () {
          return r;
        },
      });
      var i = t(192379),
        l = t(365943);
      function r() {
        i.useEffect(() => {
          (0, l.z)();
        }, []);
      }
    },
    321051: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(692547),
        s = t(481060),
        a = t(697426),
        c = t(603074),
        o = t(388032),
        u = t(677635);
      let d = [54, 8, 8, 8];
      function m(e) {
        let { onSelect: n, sound: t } = e,
          [m, p] = l.useState(!1);
        function x(e) {
          p(!1), null == n || n(e);
        }
        let h = (e) =>
          (0, i.jsxs)("div", {
            className: u.customGiftHeader,
            children: [
              (0, i.jsxs)("div", {
                className: u.__invalid_customGiftHeaderText,
                children: [
                  (0, i.jsx)(s.Text, {
                    variant: "text-md/bold",
                    children: o.intl.string(o.t.aThJz8),
                  }),
                  (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: o.intl.string(o.t.stGFAw),
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: u.searchAndSound, children: e }),
            ],
          });
        return (0, i.jsx)(s.Popout, {
          shouldShow: m,
          position: "bottom",
          align: "left",
          onRequestClose: () => p(!1),
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(s.Dialog, {
              children: (0, i.jsx)(c.Z, {
                suppressPlaySound: !0,
                shouldShowUpsell: !1,
                guildId: null,
                channel: null,
                onClose: n,
                onSelect: x,
                analyticsSource: "gift soundboard",
                soundButtonOverlay: a.Pb.ADD,
                listPadding: d,
                renderHeader: h,
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
                          children: o.intl.string(o.t.aThJz8),
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
          children: (0, i.jsx)(m, { onSelect: t, sound: n }),
        });
      }
    },
    991862: function (e, n, t) {
      t.d(n, {
        T: function () {
          return l;
        },
      });
      var i = t(388032);
      function l(e) {
        switch (e) {
          case "brl":
            return i.intl.string(i.t.qEyr9v);
          case "pln":
            return i.intl.string(i.t.eAdNmZ);
          case "try":
            return i.intl.string(i.t.J05KNT);
          case "usd":
            return i.intl.string(i.t.kJGVtL);
          case "aud":
            return i.intl.string(i.t.ylmkMz);
          case "pen":
            return i.intl.string(i.t["sKR+OD"]);
          case "php":
            return i.intl.string(i.t["0p6FTk"]);
          case "ars":
            return i.intl.string(i.t.GTI3Bw);
          case "cop":
            return i.intl.string(i.t["/FnP7O"]);
          case "clr":
            return i.intl.string(i.t["BK/Vam"]);
          case "jpy":
            return i.intl.string(i.t.QKSoIi);
          case "idr":
            return i.intl.string(i.t.UBrRGh);
          case "vnd":
            return i.intl.string(i.t.mEwykp);
          case "thb":
            return i.intl.string(i.t["9W3Gub"]);
          case "myr":
            return i.intl.string(i.t.MOaho6);
          case "krw":
            return i.intl.string(i.t["20VnAw"]);
          case "mxn":
            return i.intl.string(i.t.t2RLnp);
          case "bgn":
            return i.intl.string(i.t.EhetGB);
          case "czk":
            return i.intl.string(i.t.dWTAXV);
          case "dkk":
            return i.intl.string(i.t.a9hHzs);
          case "huf":
            return i.intl.string(i.t.abWUUF);
          case "ron":
            return i.intl.string(i.t.C7WDXF);
          case "sek":
            return i.intl.string(i.t.Z0oztb);
          case "eur":
            return i.intl.string(i.t["uhxR+f"]);
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
//# sourceMappingURL=2ea98e2c3c27d0d89245.js.map
