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
    927617: function (e) {
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
        a = t(946179);
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
        m = t(243937);
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
        h = t(28602),
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
          baseAnalyticsData: E,
          analyticsLocation: j,
          analyticsLocations: y,
          flowStartTime: P,
          subscriptionPlan: I,
          planGroup: T,
          trialId: N,
          priceOptions: b,
          paymentSource: C,
          isPrepaidPaymentPastDue: _,
          openInvoiceId: Z,
          premiumSubscription: O,
          onNext: A,
          metadata: R,
          sku: w,
          skuPricePreview: M,
          purchaseType: L,
          referralCode: k,
          loadId: F,
          giftInfoOptions: D,
          invoicePreview: U,
        } = e;
        n(p.A.PURCHASING), t(!0), i(!0), r.Z.wait(a.fw), f(null);
        try {
          let e, t, i;
          if (
            (d.default.track(x.rMx.PAYMENT_FLOW_COMPLETED, {
              ...E,
              subtotal: null == U ? void 0 : U.subtotal,
              tax: null == U ? void 0 : U.tax,
              expected_amount: null == U ? void 0 : U.total,
              expected_currency: null == U ? void 0 : U.currency,
              duration_ms: Date.now() - P,
            }),
            v)
          )
            return;
          if (L === x.GZQ.ONE_TIME)
            l()(null != w, "SKU must exist and be fetched."),
              l()(null != M, "SKUPricePreview must exist."),
              (e = await (0, o.ZZ)(w.applicationId, w.id, {
                expectedAmount: M.amount,
                expectedCurrency: M.currency,
                isGift: S,
                paymentSource: C,
                loadId: F,
                giftInfoOptions: D,
              }));
          else if ((l()(null != I, "Missing subscriptionPlan"), S)) {
            l()(null != U, "Missing invoicePreview");
            let n = U.total,
              t = U.currency;
            e = await (0, o.ZZ)(h.CL, I.skuId, {
              expectedAmount: n,
              expectedCurrency: t,
              paymentSource: C,
              subscriptionPlanId: I.id,
              isGift: !0,
              loadId: F,
              giftInfoOptions: D,
            });
          } else if (_ && null != Z && null != C && null != O)
            e = x.Uk1.has(C.type)
              ? await (0, s.G)(O, Z, C, b.currency)
              : await (0, s.Mg)(
                  O,
                  { paymentSource: C, currency: b.currency },
                  y,
                  j,
                  F,
                );
          else if (null != O) {
            let n = (0, m.al)(O, I.id, 1, new Set(T)),
              t = { paymentSource: C, currency: b.currency };
            O.status === x.O0b.PAUSED
              ? (t.status = x.O0b.ACTIVE)
              : (t.items = n),
              (e = await (0, s.Mg)(O, t, y, j, F));
          } else
            e = await (0, c.Ld)({
              planId: I.id,
              currency: b.currency,
              paymentSource: C,
              trialId: N,
              metadata: R,
              referralCode: k,
              loadId: F,
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
            A(t, i);
        } catch (e) {
          n(p.A.FAIL),
            f(e),
            d.default.track(x.rMx.PAYMENT_FLOW_FAILED, {
              ...E,
              payment_error_code: null == e ? void 0 : e.code,
              payment_source_id: null == C ? void 0 : C.id,
              payment_source_type: null == C ? void 0 : C.type,
              duration_ms: Date.now() - P,
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
            continueSessionToInitialStep: S,
          } = e,
          {
            contextMetadata: E,
            step: j,
            paymentSources: y,
            paymentSourceId: P,
            setPaymentSourceId: I,
            purchaseError: T,
            setPurchaseError: N,
            purchaseErrorBlockRef: b,
            paymentAuthenticationState: C,
            selectedSkuId: _,
            activeSubscription: Z,
            previousStepRef: O,
            setPurchaseState: A,
          } = (0, u.usePaymentContext)(),
          { isGift: R } = (0, o.wD)(),
          w = {
            ...(0, a.fL)(),
            paymentSources: y,
            paymentSourceId: P,
            setPaymentSourceId: I,
            purchaseError: T,
            setPurchaseError: N,
            purchaseErrorBlockRef: b,
            paymentAuthenticationState: C,
            selectedSkuId: _,
            isGift: R,
          },
          M = (0, s.N)(v),
          L = !R && null != M && null != _ && h.nG[M.trial_id].skus.includes(_),
          k =
            null != g
              ? g
              : () => {
                  f(
                    Object.values(y).length < 1 && null == t
                      ? d.h8.PLAN_SELECT
                      : d.h8.REVIEW,
                    { trackedFromStep: d.h8.PAYMENT_TYPE },
                  );
                };
        l()(j, "Step should be set here");
        let F = (0, r.Z)(() => Date.now(), [j]),
          D = null != S && null == O.current ? S : d.h8.PAYMENT_TYPE;
        return (0, a.vP)({
          paymentModalArgs: w,
          initialStep: D,
          prependSteps: [d.h8.PROMOTION_INFO],
          appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
          breadcrumpSteps: i,
          currentBreadcrumpStep: j,
          usePaymentModalStep: !0,
          onReturn: k,
          onComplete: (e) => {
            d.Nj.has(e)
              ? (A(m.A.COMPLETED), f(d.h8.CONFIRM, { trackedFromStep: e }))
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
          isEligibleForTrial: L,
          allowDesktopRedirectPurchase: (0, p.tr)(_, R, Z),
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
        a = t(559470);
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
        o = t(641894);
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
          return Z;
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
        o = t(717401),
        u = t(104494),
        d = t(639119),
        m = t(716534),
        p = t(664891),
        x = t(911367),
        h = t(669079),
        f = t(987209),
        v = t(563132),
        g = t(409813),
        S = t(809144),
        E = t(698708),
        j = t(844068),
        y = t(614223),
        P = t(481595),
        I = t(51499),
        T = t(678334),
        N = t(614277),
        b = t(474936),
        C = t(231338),
        _ = t(388032);
      function Z(e) {
        var n, t;
        let r,
          {
            handleStepChange: Z,
            trialId: O,
            trialFooterMessageOverride: A,
            reviewWarningMessage: R,
            planGroup: w,
            openInvoiceId: M,
            analyticsData: L,
            analyticsLocation: k,
            referralTrialOfferId: F,
            initialPlanId: D,
            subscriptionTier: U,
            handleClose: B,
          } = e,
          {
            activeSubscription: G,
            setUpdatedSubscription: H,
            contextMetadata: W,
            currencies: V,
            paymentSourceId: z,
            paymentSources: K,
            priceOptions: Y,
            purchaseError: X,
            purchaseTokenAuthState: q,
            selectedPlan: J,
            selectedSkuId: Q,
            setCurrency: $,
            setPaymentSourceId: ee,
            setPurchaseState: en,
            setPurchaseError: et,
            step: ei,
            purchaseState: el,
            isPremium: er,
            setHasAcceptedTerms: es,
            purchaseType: ea,
            setEntitlementsGranted: ec,
            startedPaymentFlowWithPaymentSourcesRef: eo,
            invoicePreview: eu,
            inReverseTrial: ed,
          } = (0, v.usePaymentContext)(),
          {
            isGift: em,
            giftMessage: ep,
            giftRecipient: ex,
            claimableRewards: eh,
          } = (0, f.wD)();
        s()(null != ei, "Step should be set");
        let ef = l.useRef(null),
          [ev, eg] = (0, a.Z)(!1, 500);
        (0, x.t)();
        let eS = null !== (t = null != O ? O : F) && void 0 !== t ? t : null,
          eE = null != eS && (!er || b.nG[eS].skus.includes(Q)) ? eS : null,
          ej = (0, d.N)(F),
          ey = (0, u.Ng)(),
          eP = { user_trial_offer_id: null == ej ? void 0 : ej.id };
        l.useEffect(() => {
          null != X &&
            null != ef.current &&
            ef.current.scrollIntoView({ behavior: "smooth" });
        }, [X]);
        let eI = l.useCallback(
            (e, n) => {
              H(e),
                null != n && ec(n),
                Z(g.h8.CONFIRM, {
                  fulfillment: { subscription: e, entitlements: n },
                });
            },
            [Z, H, ec],
          ),
          eT = null != z ? K[z] : null,
          eN =
            null != J && b.o4.has(J.id) && null != eT && !(0, c.aQ)(eT)
              ? Error(_.intl.string(_.t["2ik8io"]))
              : null,
          eb = l.useRef(null),
          [eC, e_] = l.useState(null),
          eZ =
            !em &&
            null != ej &&
            null != Q &&
            b.nG[ej.trial_id].skus.includes(Q),
          eO =
            null == ey
              ? void 0
              : null === (n = ey.discount) || void 0 === n
                ? void 0
                : n.plan_ids,
          eA =
            !em && null != ey && null != eO && null != J && eO.includes(J.id),
          eR = em && (0, h.pO)(ex),
          ew = null == D && null == U && ea === C.GZ.SUBSCRIPTION,
          eM = (0, y.Kp)({
            isTrial: eZ,
            isGift: em,
            selectedSkuId: Q,
            startedPaymentFlowWithPaymentSources: eo.current,
          }),
          eL = em && ea === C.GZ.ONE_TIME,
          ek = eL || (eM ? ew && er : er),
          eF = (0, o.id)(J, em, eh),
          eD = l.useCallback(() => {
            if (eM) {
              Z(g.h8.SKU_SELECT);
              return;
            }
            if (eF) {
              Z(g.h8.SELECT_FREE_SKU);
              return;
            }
            return eL ? Z(g.h8.GIFT_CUSTOMIZATION) : Z(g.h8.PLAN_SELECT);
          }, [Z, eM, eL, eF]),
          eU = !1;
        return (
          ea === C.GZ.ONE_TIME
            ? (r = (0, i.jsx)(P.Z, {
                hasLegalTermsFlash: ev,
                legalTermsNodeRef: eb,
                onPaymentSourceChange: (e) => ee(null != e ? e.id : null),
                handlePaymentSourceAdd: () => Z(g.h8.ADD_PAYMENT_STEPS),
              }))
            : ((eU = em
                ? null == eu
                : null != eT &&
                  ea === C.GZ.SUBSCRIPTION &&
                  eZ &&
                  !eT.canRedeemTrial()),
              null == G || ed || em
                ? (s()(null != J, "Expected plan to be selected"),
                  (r = (0, i.jsx)(m.Z, {
                    selectedPlanId: J.id,
                    paymentSources: K,
                    onPaymentSourceChange: (e) => ee(null != e ? e.id : null),
                    priceOptions: Y,
                    currencies: V,
                    onCurrencyChange: (e) => $(e),
                    handlePaymentSourceAdd: () => Z(g.h8.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: es,
                    legalTermsNodeRef: eb,
                    hasLegalTermsFlash: ev,
                    trialId: eE,
                    trialFooterMessageOverride: A,
                    reviewWarningMessage: R,
                    purchaseState: el,
                    referralTrialOfferId: F,
                    isTrial: eZ || (null != O && null != A),
                    isDiscount: eA,
                    handleClose: B,
                  })))
                : (s()(null != J, "Expected plan to be selected"),
                  (r = (0, i.jsx)(p.Z, {
                    premiumSubscription: G,
                    paymentSources: K,
                    priceOptions: Y,
                    onPaymentSourceChange: (e) => {
                      ee(null != e ? e.id : null);
                    },
                    onPaymentSourceAdd: () => {
                      Z(g.h8.ADD_PAYMENT_STEPS);
                    },
                    planId: J.id,
                    setHasAcceptedTerms: es,
                    legalTermsNodeRef: eb,
                    hasLegalTermsFlash: ev,
                    onInvoiceError: (e) => e_(e),
                    planGroup: w,
                    currencies: V,
                    onCurrencyChange: (e) => $(e),
                    hasOpenInvoice: null != M,
                    purchaseState: el,
                    handleClose: B,
                  })))),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(S.P, { giftMessage: ep }),
              !eR && (0, i.jsx)(I.Z, { isEligibleForTrial: eZ }),
              (0, i.jsxs)(N.C3, {
                children: [(0, i.jsx)(j.Z, {}), (0, i.jsx)(E.Z, {}), r],
              }),
              (0, i.jsx)(N.O3, {
                children: (0, i.jsx)(T.Z, {
                  premiumSubscription: null != G ? G : null,
                  setPurchaseState: en,
                  onBack: eD,
                  onNext: eI,
                  onPurchaseError: (e) => et(e),
                  legalTermsNodeRef: eb,
                  flashLegalTerms: () => eg(!0),
                  invoiceError: eC,
                  planError: eN,
                  analyticsLocation: k,
                  baseAnalyticsData: L,
                  flowStartTime: W.startTime,
                  trialId: eE,
                  planGroup: w,
                  purchaseTokenAuthState: q,
                  openInvoiceId: M,
                  backButtonEligible: ek,
                  metadata: eP,
                  isTrial: eZ,
                  disablePurchase: eU,
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
        m = t(717401),
        p = t(160913),
        x = t(311821),
        h = t(459965),
        f = t(858987),
        v = t(975060),
        g = t(882712),
        S = t(855775),
        E = t(626135),
        j = t(669079),
        y = t(74538),
        P = t(987209),
        I = t(563132),
        T = t(632580),
        N = t(45572),
        b = t(919778),
        C = t(612853),
        _ = t(981631),
        Z = t(590826);
      function O(e) {
        let {
            premiumSubscription: n,
            setPurchaseState: t,
            onBack: r,
            onNext: O,
            legalTermsNodeRef: A,
            flashLegalTerms: R,
            invoiceError: w,
            planError: M,
            onPurchaseError: L,
            baseAnalyticsData: k,
            flowStartTime: F,
            trialId: D,
            planGroup: U,
            analyticsLocation: B,
            purchaseTokenAuthState: G,
            openInvoiceId: H,
            metadata: W,
            backButtonEligible: V,
            disablePurchase: z,
            isTrial: K = !1,
          } = e,
          {
            selectedPlan: Y,
            priceOptions: X,
            setHasAcceptedTerms: q,
            setPurchaseError: J,
            purchaseType: Q,
            paymentSourceId: $,
            paymentSources: ee,
            selectedSkuId: en,
            skusById: et,
            skuPricePreviewsById: ei,
            referralCode: el,
            contextMetadata: er,
            invoicePreview: es,
            inReverseTrial: ea,
          } = (0, I.usePaymentContext)(),
          {
            isGift: ec,
            selectedGiftStyle: eo,
            customGiftMessage: eu,
            emojiConfetti: ed,
            soundEffect: em,
            giftRecipient: ep,
            selectedGiftingPromotionReward: ex,
          } = (0, P.wD)(),
          eh = (0, m.a5)(Y),
          ef = (0, j.MY)(ep),
          ev = {};
        (ev.gift_style = eo),
          (ev.reward_sku_ids =
            eh && (null == ex ? void 0 : ex.skuId) != null
              ? [null == ex ? void 0 : ex.skuId]
              : []),
          ef === j.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (s()(
              null != ep,
              "Gift recipient must be set at purchase review step for these gift options.",
            ),
            (ev.recipient_id = ep.id),
            (ev.custom_message = eu),
            (ev.emoji_id = null == ed ? void 0 : ed.id),
            (ev.emoji_name =
              (null == ed ? void 0 : ed.id) == null
                ? null == ed
                  ? void 0
                  : ed.surrogates
                : void 0),
            (ev.sound_id = null == em ? void 0 : em.soundId));
        let eg = null == Y ? void 0 : Y.id,
          eS = (0, b.sE)(D, X.paymentSourceId, eg),
          eE = (0, a.e7)([v.Z], () => v.Z.popupCallbackCalled),
          { analyticsLocations: ej } = (0, u.ZP)(),
          ey = null != $ ? ee[$] : null,
          [eP, eI] = l.useState(eS),
          [eT, eN] = l.useState(!1),
          { hasEntitlements: eb } = (0, h.H)(eg, ec),
          eC = (0, y.Ap)(X.paymentSourceId),
          e_ = eb || eS,
          eZ = (0, p.U)(),
          eO = null,
          eA = null;
        if (Q === _.GZQ.ONE_TIME) {
          var eR;
          s()(null != en, "SKU must be selected for one-time purchases"),
            (eO = null !== (eR = et[en]) && void 0 !== eR ? eR : null),
            s()(null != eO, "SKU must exist and be fetched.");
          let e = ei[en],
            n = null != $ ? $ : S.c;
          eA = null != e ? e[n] : null;
        }
        let ew = async () => {
            await (0, T.H)({
              setPurchaseState: t,
              setHasAcceptedTerms: q,
              setIsSubmitting: eI,
              setPurchaseError: J,
              hasRedirectURL: eT,
              setHasRedirectURL: eN,
              isGift: ec,
              baseAnalyticsData: k,
              analyticsLocation: B,
              analyticsLocations: ej,
              flowStartTime: F,
              subscriptionPlan: Y,
              planGroup: U,
              trialId: D,
              priceOptions: X,
              paymentSource: ey,
              isPrepaidPaymentPastDue: eZ,
              openInvoiceId: H,
              premiumSubscription: n,
              onNext: O,
              metadata: W,
              sku: eO,
              skuPricePreview: eA,
              purchaseType: Q,
              referralCode: el,
              loadId: er.loadId,
              giftInfoOptions: ev,
              invoicePreview: es,
            });
          },
          eM = {
            baseAnalyticsData: k,
            flowStartTime: F,
            makePurchase: ew,
            onNext: O,
            onPurchaseError: L,
            paymentSource: ey,
            paymentSourceId: $,
            purchaseTokenAuthState: G,
            setPurchaseState: t,
          },
          eL = l.useRef(eM);
        l.useEffect(() => {
          eL.current = eM;
        }),
          l.useEffect(() => {
            let {
              baseAnalyticsData: e,
              flowStartTime: n,
              makePurchase: t,
              onNext: i,
              onPurchaseError: l,
              paymentSource: r,
              paymentSourceId: s,
              purchaseTokenAuthState: a,
              setPurchaseState: c,
            } = eL.current;
            (async () => {
              if (!0 === eE)
                try {
                  if (null == v.Z.redirectedPaymentId) return;
                  await (0, o.OP)(v.Z.redirectedPaymentId),
                    c(N.A.COMPLETED),
                    i();
                } catch (t) {
                  c(N.A.FAIL),
                    l(t),
                    E.default.track(_.rMx.PAYMENT_FLOW_FAILED, {
                      ...e,
                      payment_error_code: null == t ? void 0 : t.code,
                      payment_source_id: s,
                      payment_source_type: null == r ? void 0 : r.type,
                      duration_ms: Date.now() - n,
                    });
                } finally {
                  eI(!1), (0, o.K2)();
                }
              else a === g.I.SUCCESS && (await t());
            })();
          }, [eE]),
          l.useEffect(() => {
            let { makePurchase: e } = eL.current;
            eS && !ec && null == n && e();
          }, [eS, ec, n]);
        let ek = null != H || (Q === _.GZQ.ONE_TIME && !ec);
        return eS
          ? null
          : (0, i.jsxs)(c.ModalFooter, {
              align: d.Z.Align.CENTER,
              children: [
                (0, i.jsx)(f.Z, {
                  legalTermsNodeRef: A,
                  invoiceError: w,
                  planError: M,
                  disablePurchase: z,
                  flashLegalTerms: R,
                  isSubmitting: eP,
                  premiumSubscription: n,
                  isGift: ec,
                  planGroup: U,
                  isPrepaid: eC,
                  isTrial: K,
                  makePurchase: ew,
                  needsPaymentSource: null == ey && !e_,
                  onNext: O,
                  inReverseTrial: ea,
                }),
                (0, i.jsx)(C.Z, {}),
                V && !ek
                  ? (0, i.jsx)("div", {
                      className: Z.back,
                      children: (0, i.jsx)(x.Z, { onClick: r }),
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
        o = t(710749);
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
    844068: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        s = t(481060),
        a = t(563132),
        c = t(312756);
      function o(e) {
        let { notificationBlockRef: n } = e,
          { selectedPlanNotification: t } = (0, a.usePaymentContext)();
        return null == t
          ? null
          : (0, i.jsxs)("div", {
              className: r()(c.notification),
              ref: n,
              children: [
                (0, i.jsx)(s.CircleCheckIcon, {
                  className: r()(c.icon),
                  color: "currentColor",
                }),
                (0, i.jsx)("div", { className: c.text, children: t }),
              ],
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
        E = t(314182),
        j = t(251660),
        y = t(246946),
        P = t(351402),
        I = t(853872),
        T = t(855775),
        N = t(695103),
        b = t(4912),
        C = t(630388),
        _ = t(669079),
        Z = t(937615),
        O = t(987209),
        A = t(563132),
        R = t(45572),
        w = t(119226),
        M = t(981631),
        L = t(388032),
        k = t(492558);
      function F(e) {
        let { sku: n, skuPricePreview: t } = e;
        s()(null != t.amount, "SKU must have a price set.");
        let l = t.amount - t.tax,
          r = (0, f.ed)("SKUInvoice"),
          a = n.productLine === M.POd.COLLECTIBLES && r;
        return !t.tax_inclusive && t.tax > 0
          ? (0, i.jsxs)(S.PO, {
              className: k.invoice,
              children: [
                a
                  ? (0, i.jsx)(g.C, {
                      sku: n,
                      value: (0, Z.T4)(l, t.currency),
                      className: k.subscriptionCostRow,
                    })
                  : (0, i.jsx)(S.R$, {
                      label: n.name,
                      value: (0, Z.T4)(l, t.currency),
                      className: k.subscriptionCostRow,
                    }),
                (0, i.jsx)(S.R$, {
                  label: L.intl.string(L.t["/I8zmJ"]),
                  value: (0, Z.T4)(t.tax, t.currency),
                  className: k.subscriptionCostRow,
                }),
                (0, i.jsx)(S.KU, {}),
                (0, i.jsx)(S.Ji, {
                  label: L.intl.format(L.t["+B5KfH"], {}),
                  value: (0, Z.T4)(t.amount, t.currency),
                  className: k.subscriptionCostRow,
                }),
              ],
            })
          : (0, i.jsx)(S.PO, {
              className: k.invoice,
              children: a
                ? (0, i.jsx)(g.C, {
                    sku: n,
                    value: (0, Z.T4)(t.amount, t.currency),
                    className: k.subscriptionCostRow,
                  })
                : (0, i.jsx)(S.R$, {
                    label: n.name,
                    value: (0, Z.T4)(t.amount, t.currency),
                    className: k.subscriptionCostRow,
                  }),
            });
      }
      function D(e) {
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
            application: Z,
            purchaseState: U,
            paymentSources: B,
            paymentSourceId: G,
            setHasAcceptedTerms: H,
            skusById: W,
            skuPricePreviewsById: V,
            selectedSkuId: z,
            isEmbeddedIAP: K,
            purchaseType: Y,
            purchasePreviewError: X,
            devShelfFetchState: q,
          } = (0, A.usePaymentContext)(),
          { isGift: J, giftRecipient: Q } = (0, O.wD)(),
          $ = J && (0, _.pO)(Q),
          { defaultPaymentSourceId: ee, hasFetchedPaymentSources: en } = (0,
          c.cj)([I.Z], () => ({
            defaultPaymentSourceId: I.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: I.Z.hasFetchedPaymentSources,
          }));
        s()(null != z, "Expected selectedSkuId");
        let et = W[z],
          ei = V[z],
          el = null != G ? G : T.c,
          er = null != ei ? ei[el] : null;
        s()(null != et, "SKU must exist and be fetched."),
          s()(null != Z, "Application must exist.");
        let es = (0, c.e7)(
            [h.Z, N.Z],
            () =>
              N.Z.inTestModeForApplication(Z.id) ||
              h.Z.inDevModeForApplication(Z.id),
            [Z.id],
          ),
          ea = (0, c.e7)([y.Z], () => y.Z.enabled),
          ec = a.M.EEA_COUNTRIES.has(P.Z.ipCountryCodeWithFallback),
          eo = U === R.A.PURCHASING || U === R.A.COMPLETED,
          eu = null != G ? B[G].type : null,
          ed = (0, f.ed)("SKUInvoice"),
          em = et.productLine === M.POd.COLLECTIBLES && ed;
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
              (0, C.yE)(Z.flags, M.udG.EMBEDDED) && q === h.O.ERROR
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
              (0, i.jsx)(D, { application: Z, sku: et, isEmbeddedIAP: K }),
              $ && (0, i.jsx)(w.Z, { sku: et }),
              null != Q ? (0, i.jsx)(j.s, { giftRecipient: Q }) : null,
              (0, i.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H5,
                children: J
                  ? L.intl.string(L.t.PEjaCw)
                  : L.intl.string(L.t.sail9P),
              }),
              null != er
                ? (0, i.jsx)(F, { sku: et, skuPricePreview: er })
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
              (0, i.jsx)(E.Z, {
                isActive: n,
                ref: t,
                children: (0, i.jsx)(x.Z, {
                  onChange: H,
                  forceShow: !0,
                  showWithdrawalWaiver: ec,
                  disabled: eo,
                  subscriptionPlan: null,
                  finePrintClassname: k.fineprint,
                  purchaseType: Y,
                  isGift: J,
                  checkboxLabel:
                    et.productLine === M.POd.COLLECTIBLES
                      ? L.intl.format(L.t["1EdAlZ"], {
                          paidURL: M.EYA.PAID_TERMS,
                        })
                      : void 0,
                  finePrint: (0, i.jsx)(d.Z, {
                    paymentSourceType: eu,
                    isEmbeddedIAP: K,
                    purchaseType: Y,
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
        v = t(840614),
        g = t(241822);
      let S = x.ZP.getEnableHardwareAcceleration()
        ? s.AnimatedAvatar
        : s.Avatar;
      function E(e) {
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
      function j(e) {
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
              (0, i.jsx)(E, { avatarDecoration: e }),
            )
            .with({ type: r.Z.PROFILE_EFFECT }, (e) =>
              (0, i.jsx)(j, { id: e.id }),
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
        u = t(927617);
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
          return x;
        },
      });
      var i = t(200651),
        l = t(120356),
        r = t.n(l),
        s = t(979554),
        a = t(442837),
        c = t(481060),
        o = t(597688),
        u = t(473608),
        d = t(697459),
        m = t(504822);
      let p = (e) => {
          let { sku: n } = e,
            t = (0, a.e7)([o.Z], () => o.Z.getProduct(n.id));
          return (0, i.jsxs)("div", {
            className: d.collectiblePreview,
            children: [
              null != t && t.type !== s.Z.BUNDLE
                ? (0, i.jsx)(u.O, { sku: n, fallbackLabel: null })
                : null,
              (0, i.jsx)(c.Text, {
                variant: "text-md/medium",
                children: n.name,
              }),
            ],
          });
        },
        x = (e) => {
          let { sku: n, value: t, className: l } = e;
          return (0, i.jsxs)("div", {
            className: r()(m.row, l),
            children: [
              (0, i.jsx)("div", {
                className: m.rowLabel,
                children: (0, i.jsx)(p, { sku: n }),
              }),
              (0, i.jsx)("div", { className: m.rowAmount, children: t }),
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
        h = t(215302);
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
        f = t(991509);
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
            innerClassName: E,
            disabled: j = !1,
            disableThemedBackground: y = !1,
          } = e,
          [P, I] = l.useState(null != m ? m : g),
          [T, N] = l.useState((0, o.JM)(P)),
          b = l.useRef(!1);
        return (
          l.useEffect(() => {
            b.current = !0;
          }, []),
          l.useEffect(() => {
            if (void 0 === m) {
              let e = (0, o.JM)(g);
              I(g), N(e);
            }
          }, [m, g]),
          (0, i.jsx)("div", {
            className: s()(f.body, S),
            children: (0, i.jsxs)(d.Z, {
              title: n,
              errors: t,
              disabled: j,
              children: [
                (0, i.jsx)(u.Z, {
                  innerClassName: s()(f.textArea, E),
                  editorClassName: f.editorTextArea,
                  maxCharacterCount: p.$n,
                  onChange: function (e, n, t) {
                    n !== P && (I(n), N(t), r(n));
                  },
                  placeholder: x,
                  channel: v,
                  textValue: P,
                  richValue: T,
                  type: c.Ie.CUSTOM_GIFT,
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
          return E;
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
        S = t(853745);
      let E = (e) => {
        let { isShopGift: n, className: t, optionsContainerClassName: r } = e,
          {
            giftRecipient: E,
            selectedGiftStyle: j,
            setSelectedGiftStyle: y,
            emojiConfetti: P,
            soundEffect: I,
            setEmojiConfetti: T,
            setSoundEffect: N,
          } = (0, c.wD)(),
          [b, C] = l.useState(!1),
          _ = l.useRef(null),
          Z = (0, a.useRadioGroup)({ orientation: "horizontal" }),
          O = (0, u.MY)(E, n),
          A = O === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
          R = O !== u.xr.DEFAULT,
          w = (0, m.rK)(),
          { enabled: M } = m.ZP.useExperiment(
            { location: "premiumGiftSelect_GiftAnimationOptions" },
            { autoTrackExposure: w },
          ),
          { enabled: L } = p.O.useExperiment({ location: "gift card" }),
          k = null;
        return (
          R && (k = w && M ? v.kJ : v.QI),
          L && (k = v.RQ),
          (0, i.jsxs)("div", {
            children: [
              R &&
                (0, i.jsxs)("div", {
                  className: s()(S.giftMainAnimation, t),
                  children: [
                    null != j
                      ? (0, i.jsx)(x.Z, {
                          giftStyle: j,
                          defaultAnimationState: d.SR.ACTION,
                          idleAnimationState: d.SR.LOOP,
                          shouldAnimate: !0,
                          className: S.animation,
                        })
                      : (0, i.jsx)(a.Spinner, { className: S.spinner }),
                    A &&
                      (0, i.jsxs)("div", {
                        className: S.soundEmojiContainer,
                        children: [
                          (0, i.jsx)("div", {
                            className: S.sound,
                            children: (0, i.jsx)(o.Z, {
                              sound: I,
                              onSelect: (e) => {
                                null != N && N(null == e ? void 0 : e);
                              },
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: S.emoji,
                            children: (0, i.jsx)(h.Z, {
                              setEmojiConfetti: T,
                              emojiConfetti: null == P ? void 0 : P,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              (0, i.jsx)("div", {
                tabIndex: null != j || b ? void 0 : 0,
                onFocus: (e) => {
                  var n;
                  e.target === e.currentTarget &&
                    (null === (n = _.current) || void 0 === n || n.focus());
                },
                className: s()(S.giftBoxOptionContainer, r),
                "aria-label": g.intl.string(g.t.v54NrK),
                ...Z,
                children:
                  null != k &&
                  k.map((e, n) =>
                    (0, i.jsx)(
                      f.m,
                      {
                        isSelected: j === e,
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
        u = t(396139);
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
          nudgeAlignIntoViewport: !0,
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
                categoryListClassName: u.categoryList,
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
        a = t(325379),
        c = t(426831),
        o = t(257510),
        u = t(74838),
        d = t(720834),
        m = t(385925),
        p = t(588921),
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
        O: function () {
          return V;
        },
        y: function () {
          return z;
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
        E = t(63063),
        j = t(74538),
        y = t(937615),
        P = t(711459),
        I = t(109213),
        T = t(717401),
        N = t(857039),
        b = t(847903),
        C = t(104494),
        _ = t(639119),
        Z = t(55610),
        O = t(653798),
        A = t(553797),
        R = t(927699),
        w = t(987716),
        M = t(311821),
        L = t(459965),
        k = t(811616),
        F = t(251660),
        D = t(474936),
        U = t(981631),
        B = t(231338),
        G = t(388032),
        H = t(853745),
        W = t(796166);
      function V(e) {
        var n, t, r, a;
        let {
            premiumSubscription: f,
            skuId: g,
            selectedPlanId: M,
            setSelectedPlanId: L,
            priceOptions: V,
            planOptions: z,
            eligibleForMultiMonthPlans: K,
            referralTrialOfferId: Y,
            subscriptionPeriodEnd: X,
            showTotal: q = !0,
            discountInvoiceItems: J,
            useCompactGiftComponents: Q,
            handleClose: $,
          } = e,
          {
            activeSubscription: ee,
            setSelectedPlanId: en,
            selectedSkuId: et,
            selectedPlan: ei,
            priceOptions: el,
          } = (0, h.usePaymentContext)(),
          {
            isGift: er,
            giftRecipient: es,
            selectedGiftStyle: ea,
            customGiftMessage: ec,
            setCustomGiftMessage: eo,
            giftingOrigin: eu,
            claimableRewards: ed,
            setSelectedGiftingPromotionReward: em,
          } = (0, x.wD)(),
          ep = (0, S.MY)(es),
          ex = er && (0, S.pO)(es),
          eh = (0, T.cF)(ei, ex, ed),
          ef = (0, N.Z)({ location: "PremiumPlanSelectStep" });
        (g = null != g ? g : et),
          (f = null != f ? f : ee),
          c()(void 0 !== f, "should not be undefined");
        let [ev, eg] = (0, o.Wu)([v.Z], () => [
            null != f ? v.Z.get(f.planId) : null,
            null != M ? v.Z.get(M) : null,
          ]),
          eS = (0, _.N)(Y),
          eE = null == eS ? void 0 : eS.subscription_trial,
          ej = (0, C.Ng)(),
          ey =
            null == ej
              ? void 0
              : null === (n = ej.discount) || void 0 === n
                ? void 0
                : n.plan_ids,
          eP = null != eg ? eg : ei,
          eI = l.useCallback(
            (e) => {
              null != L ? L(e) : en(e);
            },
            [L, en],
          ),
          eT = null != V ? V : el;
        c()(null != eT, "Price option has to be set");
        let eN = null != eS && D.nG[eS.trial_id].skus.includes(g),
          eb =
            null != ej &&
            z.some((e) => (null == ey ? void 0 : ey.includes(e))) &&
            null != ej.discount,
          eC = (0, j.aS)(D.Xh.PREMIUM_MONTH_TIER_2, !1, er, eT);
        l.useEffect(() => {
          K && P.ZP.trackExposure({ location: "5f89bb_1" });
        }, [K]);
        let e_ = (null == eP ? void 0 : eP.id) != null && z.includes(eP.id);
        l.useEffect(() => {
          if (!e_) {
            if (null == ev || er) eI(z[0]);
            else if (null != ev) {
              let e = z.find((e) => e !== ev.id);
              null != e && eI(e);
            }
          }
        }, [e_, er, z, ev, eI]),
          l.useEffect(() => {
            eh && null != ed && ed.length > 0 && em(ed[0]);
          }, [ed, em, eh]);
        let eZ = !ex && (er || (!eN && !eb)) && e_ && q,
          eO = (0, u.useRadioGroup)(),
          eA =
            (null == eP ? void 0 : eP.id) != null
              ? (0, j.aS)(eP.id, !1, er, eT)
              : void 0,
          { ipCountryCode: eR } = (0, b.Z)(),
          ew = "HR" === eR && null != eA && eA.currency === B.pK.EUR,
          eM = (0, j.Ap)(eT.paymentSourceId),
          eL = l.useMemo(() => {
            if ((null == eE ? void 0 : eE.interval) === D.rV.DAY)
              return (null == eE ? void 0 : eE.interval_count) > 7
                ? G.intl.string(G.t.Z1V2cn)
                : G.intl.string(G.t.MI1rHh);
            return G.intl.string(G.t["+S5lra"]);
          }, [eE]),
          ek = !er && (eb || (null != eE && eN && null != X)),
          eF =
            null == J
              ? void 0
              : null ===
                    (a = J.find(
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
          eD = (e, n, t) => {
            if (ex)
              return (0, i.jsx)(u.FormTitle, {
                className: s()(W.selectGiftTitle, {
                  [W.compactSelectGiftTitle]: Q,
                }),
                children: G.intl.string(G.t["3E5hXl"]),
              });
            if (!ek)
              return (0, i.jsx)("div", {
                className: W.selectPlanChooseTitle,
                children: G.intl.string(G.t.a19jpa),
              });
            if (n) {
              let n = (null == e ? void 0 : e.trial_id) === D.a7;
              return (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    className: W.trialPlanSelectHeader,
                    children: n
                      ? G.intl.format(G.t.nG95hI, { endDate: X })
                      : G.intl.format(G.t.s4E7kZ, {
                          trialEnd: X,
                          trialPeriod: eL,
                        }),
                  }),
                  (0, i.jsx)("hr", { className: W.planSelectSeparator }),
                ],
              });
            }
            if (
              t &&
              null != eF &&
              null != eC &&
              M === D.Xh.PREMIUM_MONTH_TIER_2
            )
              return (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    className: W.trialPlanSelectHeader,
                    children: G.intl.format(G.t["nG7g/P"], {
                      numMonths:
                        null == ej ? void 0 : ej.discount.user_usage_limit,
                      discountedPrice: (0, y.T4)(eC.amount - eF, eC.currency),
                      regularPrice: (0, y.T4)(eC.amount, eC.currency),
                    }),
                  }),
                  (0, i.jsx)("hr", { className: W.planSelectSeparator }),
                ],
              });
          },
          { enabled: eU } = I.G.useExperiment(
            { location: "PremiumPlanSelectStep" },
            { autoTrackExposure: !1 },
          ),
          eB = eu === D.Wt.DM_CHANNEL && eU,
          eG = eB ? W.bodyColumnLeft : W.bodyColumnMiddle,
          eH = () => {
            if (ex && null != ea)
              return eB
                ? (0, i.jsx)(w.q, {
                    className: H.adjustedGiftMainAnimation,
                    optionsContainerClassName: H.adjustedGiftBoxOptionContainer,
                  })
                : (0, i.jsx)(w.q, {});
            return null;
          },
          eW = () =>
            (0, i.jsx)("div", {
              ...eO,
              children: z.map((e) =>
                (0, i.jsx)(
                  k.Z,
                  {
                    planId: e,
                    premiumSubscription: er ? null : null != f ? f : null,
                    selectPlan: eI,
                    selected: (null == eP ? void 0 : eP.id) === e,
                    priceOptions: eT,
                    shouldShowUpdatedPaymentModal: ek,
                    isEligibleForDiscount: eb,
                    discountAmountOff: eF,
                    isEligibleForTrial: eN,
                  },
                  e,
                ),
              ),
            }),
          eV = () => eD(eS, eN, eb),
          ez = () =>
            ew
              ? (0, i.jsx)(d.Z, {
                  message: G.intl.formatToPlainString(G.t["9hnZoK"], {
                    kunaPriceWithCurrency: (0, y.T4)(
                      7.5345 * eA.amount,
                      B.pK.HRK,
                    ),
                  }),
                })
              : null;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: s()(ex ? W.stepBodyCustomGift : W.stepBody, {
              [W.paddingForHalloweenBanner]: ef,
            }),
            children: [
              (0, i.jsxs)("div", {
                className: ex ? eG : void 0,
                children: [
                  (0, i.jsx)(Z.Z, {
                    fromBoostCancelModal: !1,
                    className: W.legacyPricingNotice,
                  }),
                  eB && eV(),
                  eB ? eW() : eH(),
                  eB && ez(),
                ],
              }),
              (0, i.jsxs)("div", {
                className: ex ? W.bodyColumnRight : void 0,
                children: [
                  (0, i.jsx)(F.s, {
                    className: Q ? W.compactSendGiftToUser : void 0,
                    giftRecipient: es,
                  }),
                  eB && eH(),
                  (() => {
                    if (
                      ep === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
                      null != eo
                    )
                      return (0, i.jsx)(R.Z, {
                        sectionTitle: G.intl.string(G.t.B3miEx),
                        className: s()(W.customGiftMessageWrapper, {
                          [W.compactCustomGiftMessageWrapper]: Q,
                        }),
                        innerClassName: W.customGiftMessage,
                        onTextChange: (e) => eo(e),
                        pendingText: ec,
                        currentText: ec,
                      });
                  })(),
                  null != ev &&
                    !er &&
                    (0, i.jsx)("div", {
                      className: W.bodyText,
                      children: (function (e, n) {
                        let t = G.intl.string(G.t.BYa62t),
                          i = G.intl.string(G.t.CDa6Dg),
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
                                return G.intl.string(G.t.q6mxDQ);
                              case D.Si.TIER_2:
                                return G.intl.string(G.t.seZVS0);
                              default:
                                return l;
                            }
                          case D.Si.TIER_1:
                            switch (r) {
                              case D.Si.TIER_0:
                                return G.intl.string(G.t["7+u2zs"]);
                              case D.Si.TIER_2:
                                return G.intl.string(G.t.NG2qcX);
                              default:
                                return l;
                            }
                          case D.Si.TIER_2:
                            switch (r) {
                              case D.Si.TIER_0:
                              case D.Si.TIER_1:
                                return G.intl.string(G.t["eB0/w8"]);
                              case D.Si.TIER_2:
                                return e.interval === D.rV.MONTH
                                  ? G.intl.formatToPlainString(G.t["RqUv8/"], {
                                      numFreeGuildSubscriptions: D.cb,
                                    })
                                  : l;
                              default:
                                return l;
                            }
                          default:
                            return l;
                        }
                      })(ev, g),
                    }),
                  !eB && eV(),
                  !eB && eW(),
                  (0, i.jsx)("div", {
                    children:
                      eZ && null != eP && null != eA
                        ? (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("div", {
                                className: W.selectPlanDivider,
                              }),
                              (0, i.jsx)(O.Ji, {
                                label: G.intl.string(G.t.txajQE),
                                value: (0, i.jsx)(A.Z, {
                                  price: eA.amount,
                                  currency: eA.currency,
                                  intervalType: er ? null : eP.interval,
                                  intervalCount: eP.intervalCount,
                                  isPrepaidPaymentSource: eM,
                                }),
                                className: W.selectPlanTotalRow,
                              }),
                            ],
                          })
                        : null,
                  }),
                  !eB && ez(),
                  !er &&
                    !ek &&
                    q &&
                    (0, i.jsx)(d.Z, {
                      message: G.intl.format(G.t.Om31w8, {
                        documentationLink: E.Z.getArticleURL(
                          U.BhN.LOCALIZED_PRICING,
                        ),
                      }),
                    }),
                  er && !eB && (0, i.jsx)(p.Z, { onClose: $ }),
                ],
              }),
            ],
          }),
        });
      }
      function z(e) {
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
          { isGift: p, claimableRewards: f, giftRecipient: v } = (0, x.wD)(),
          g = (0, S.pO)(v);
        return (
          (l = null != l ? l : d),
          (t = null != t ? t : null == m ? void 0 : m.id),
          (0, i.jsxs)(i.Fragment, {
            children: [
              null != t && a.includes(t)
                ? (0, i.jsx)(K, {
                    paymentSources: l,
                    onStepChange: n,
                    selectedPlanId: t,
                    isGift: p,
                    claimableRewards: f,
                    shouldRenderUpdatedPaymentModal: c,
                    isTrial: o,
                  })
                : (0, i.jsx)(u.Button, {
                    disabled: !0,
                    children: G.intl.string(G.t.XqMe3N),
                  }),
              s
                ? (0, i.jsx)(M.Z, {
                    className: p && g ? W.equalDistantBackButton : void 0,
                    onClick: r,
                  })
                : null,
            ],
          })
        );
      }
      function K(e) {
        let {
            onStepChange: n,
            selectedPlanId: t,
            isGift: l,
            claimableRewards: r,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: c,
          } = e,
          d = (0, o.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
          { step: m, selectedPlan: p } = (0, h.usePaymentContext)(),
          { hasEntitlements: x } = (0, L.H)(t, l),
          v =
            (null != d && null != d.paymentSourceId) ||
            Object.keys(s).length > 0 ||
            (x && !c);
        var S = a ? G.intl.string(G.t.PDTjLC) : G.intl.string(G.t.XqMe3N),
          E = f.h8.ADD_PAYMENT_STEPS;
        return (
          v && (E = f.h8.REVIEW),
          (0, T.id)(p, l, r) &&
            m !== f.h8.SELECT_FREE_SKU &&
            (E = f.h8.SELECT_FREE_SKU),
          (0, i.jsx)(u.Button, { onClick: () => n(E), children: S })
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
        E = t(388032),
        j = t(559805);
      function y(e) {
        let {
            premiumSubscription: n,
            planId: t,
            selectPlan: l,
            selected: s,
            priceOptions: y,
            shouldShowUpdatedPaymentModal: P,
            isEligibleForDiscount: I,
            discountAmountOff: T,
            isEligibleForTrial: N,
          } = e,
          b = (0, c.e7)([m.default], () => m.default.locale),
          C = (0, c.e7)([p.Z], () => p.Z.get(t)),
          { isGift: _, giftRecipient: Z } = (0, d.wD)(),
          O = _ && (0, x.pO)(Z);
        a()(null != C, "Missing subscriptionPlan");
        let A = null != n && n.planId === t,
          R =
            A ||
            (t === S.Xh.PREMIUM_MONTH_TIER_2 &&
              null != n &&
              [S.Xh.PREMIUM_YEAR_TIER_0, S.Xh.PREMIUM_YEAR_TIER_1].includes(
                n.planId,
              )),
          w = S.nH[t],
          M = (0, f.aS)(t, !1, _, y),
          L = (0, f.Ap)(y.paymentSourceId),
          k = null != w && !P,
          F = (0, g.Ng)(),
          D = C.interval === S.rV.YEAR ? E.t.ECT4Aw : E.t.v9QeOD,
          U = () =>
            null != w &&
            (0, i.jsx)(u.Text, {
              tag: "span",
              variant: "eyebrow",
              color: "always-white",
              className: j.planOptionDiscount,
              children: E.intl.format(E.t.IAybsL, {
                discount: (0, h.T3)(b, w / 100),
              }),
            }),
          B = () =>
            (C.interval === S.rV.YEAR && null != n) || (k && !A)
              ? C.interval === S.rV.YEAR && null != n
                ? (0, i.jsxs)("span", {
                    className: j.planOptionMonthsFree,
                    children: ["(", E.intl.string(E.t["122kWF"]), ")"],
                  })
                : k && !A
                  ? U()
                  : void 0
              : null;
        return (0, i.jsxs)(u.Clickable, {
          role: O ? "menuitem" : "radio",
          "aria-checked": s,
          tabIndex: s ? 0 : -1,
          focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
          onClick: R ? void 0 : () => l(t),
          className: r()(j.planOptionClickableContainer, {
            [j.selectedPlan]: O && s,
            [j.selectionBox]: O,
          }),
          children: [
            (0, i.jsxs)("div", {
              className: r()(j.planOption, { [j.planOptionDisabled]: R }),
              children: [
                (0, i.jsxs)("div", {
                  className: j.planOptionClickable,
                  children: [
                    !O &&
                      (0, i.jsx)(u.Checkbox, {
                        readOnly: !0,
                        displayOnly: !0,
                        value: s,
                        shape: u.Checkbox.Shapes.ROUND,
                        color: o.Z.unsafe_rawColors.BRAND_500.css,
                        type: u.Checkbox.Types.INVERTED,
                        className: j.planOptionCheckbox,
                      }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)("div", {
                          className: r()(j.planOptionInterval, {
                            [j.optionSelected]: s || O,
                            [j.updatedOptionSelected]: P && (s || O),
                          }),
                          children: [
                            (0, f.L7)(
                              C.interval,
                              _,
                              L,
                              C.intervalCount,
                              O,
                              (0, f.Rd)(C.id),
                            ),
                            O && B(),
                          ],
                        }),
                        O &&
                          (0, i.jsx)("div", {
                            className: j.planOneTimeCost,
                            children: E.intl.format(E.t.ori2Ji, {
                              currencyAmount: (0, v.T4)(M.amount, M.currency),
                            }),
                          }),
                      ],
                    }),
                    A &&
                      (0, i.jsxs)("span", {
                        className: j.planOptionCurrentPlan,
                        children: ["(", E.intl.string(E.t.ymSxh4), ")"],
                      }),
                    !O && B(),
                  ],
                }),
                P
                  ? (0, i.jsx)("div", {
                      className: r()({ [j.optionPriceSelected]: s }),
                      children: E.intl.format(E.t.hXcaLS, {
                        price:
                          I && null != T && C.interval === S.rV.MONTH
                            ? (0, v.T4)(M.amount - T, M.currency)
                            : N
                              ? (0, v.T4)(0, M.currency, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                })
                              : (0, v.T4)(M.amount, M.currency),
                      }),
                    })
                  : (0, i.jsx)("div", {
                      className: r()({ [j.optionSelected]: s || O }),
                      children: (0, v.T4)(M.amount, M.currency),
                    }),
              ],
            }),
            P &&
              (0, i.jsx)("div", {
                className: j.planOptionSubtextContainer,
                children: (0, i.jsx)(u.Text, {
                  variant: "text-md/normal",
                  color: s ? "text-normal" : "interactive-normal",
                  className: r()(j.planOptionSubtext, {
                    [j.discountPlanOptionSubtext]: I,
                  }),
                  children: (() => {
                    if (I && null != T && C.interval === S.rV.MONTH) {
                      var e;
                      return E.intl.format(E.t["VeE/4O"], {
                        numMonths:
                          null !==
                            (e =
                              null == F
                                ? void 0
                                : F.discount.user_usage_limit) && void 0 !== e
                            ? e
                            : S.rt,
                        discountedPrice: (0, v.T4)(M.amount - T, M.currency),
                        regularPrice: (0, v.T4)(M.amount, M.currency),
                      });
                    }
                    if (N)
                      return E.intl.format(D, {
                        price: (0, v.T4)(M.amount, M.currency),
                      });
                    if (C.interval === S.rV.YEAR)
                      return E.intl.formatToPlainString(E.t.rtLTJC, {
                        percent: w,
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
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        s = t(481060),
        a = t(700582),
        c = t(51144),
        o = t(388032),
        u = t(106486);
      let d = (e) => {
        let { className: n, giftRecipient: t } = e;
        return null == t
          ? null
          : (0, i.jsxs)("div", {
              className: r()(u.content, n),
              children: [
                (0, i.jsx)(s.FormTitle, {
                  children: o.intl.string(o.t.xFn72t),
                }),
                (0, i.jsxs)("div", {
                  className: u.giftRecipientInfo,
                  children: [
                    (0, i.jsx)(a.Z, {
                      user: t,
                      className: u.__invalid_giftRecipient,
                      size: s.AvatarSizes.SIZE_20,
                    }),
                    (0, i.jsx)(s.Heading, {
                      className: u.giftRecipientName,
                      variant: "text-md/normal",
                      children: c.ZP.getName(t),
                    }),
                    (0, i.jsx)(s.Heading, {
                      className: u.giftRecipientTag,
                      variant: "text-md/normal",
                      children: c.ZP.getUserTag(t),
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
        E = t(246946),
        j = t(351402),
        y = t(509545),
        P = t(669079),
        I = t(74538),
        T = t(937615),
        N = t(479446),
        b = t(374649),
        C = t(104494),
        _ = t(642530),
        Z = t(653798),
        O = t(314182),
        A = t(981632),
        R = t(314404),
        w = t(42818),
        M = t(459965),
        L = t(251660),
        k = t(474936),
        F = t(981631),
        D = t(231338),
        U = t(388032),
        B = t(401615);
      function G(e) {
        var n, t, r, G, H;
        let W,
          V,
          {
            selectedPlanId: z,
            paymentSources: K,
            priceOptions: Y,
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
            inReverseTrial: eE,
            setPurchaseError: ej,
          } = (0, f.usePaymentContext)(),
          {
            isGift: ey,
            giftRecipient: eP,
            selectedGiftStyle: eI,
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
          eZ = es === v.A.PURCHASING || es === v.A.COMPLETED,
          [eO, eA] = (0, b.ED)({
            items: e_,
            renewal: !1,
            preventFetch: eE || ey || eZ,
            applyEntitlements: !0,
            paymentSourceId: Y.paymentSourceId,
            currency: Y.currency,
            trialId: et,
            metadata: er,
          }),
          [eR, ew] = (0, b.ED)({
            subscriptionId: null == ep ? void 0 : ep.id,
            items: e_,
            renewal: !0,
            preventFetch: ey || eZ,
            trialId: et,
            paymentSourceId: Y.paymentSourceId,
            currency: Y.currency,
            metadata: er,
          }),
          [eM, eL] = (0, b.ED)({
            items: [{ planId: k.Xh.PREMIUM_MONTH_TIER_2, quantity: 1 }],
            renewal: !0,
            preventFetch: !eb,
            trialId: et,
            paymentSourceId: Y.paymentSourceId,
            currency: Y.currency,
            metadata: er,
          }),
          [ek, eF] = (0, b.o5)({
            paymentSourceId: Y.paymentSourceId,
            skuId: ex,
            subscriptionPlanId: z,
            currency: Y.currency,
            preventFetch: !ey || eZ,
            loadId: eS.loadId,
          });
        l.useEffect(() => {
          eg(ek);
        }, [eg, ek]);
        let eD = ey && (0, P.pO)(eP),
          eU =
            null !==
              (G =
                null !== (r = null != eA ? eA : ew) && void 0 !== r ? r : eL) &&
            void 0 !== G
              ? G
              : eF;
        l.useEffect(() => {
          ej(eU);
        }, [eU, ej]);
        let eB = (0, c.e7)([E.Z], () => E.Z.enabled),
          eG = Y.paymentSourceId,
          { hasEntitlements: eH, entitlements: eW } = (0, M.H)(eC.id, ey),
          eV = (0, I.Ap)(Y.paymentSourceId),
          ez = (0, g.sE)(et, eG, z),
          eK = (0, S.Kp)({
            isTrial: eo,
            isGift: ey,
            selectedSkuId: ex,
            startedPaymentFlowWithPaymentSources: ev.current,
            inReverseTrial: eE,
          }),
          [eY, eX] = l.useState(null == eO ? void 0 : eO.subscriptionPeriodEnd);
        l.useEffect(() => {
          null == eY && eX(null == eO ? void 0 : eO.subscriptionPeriodEnd);
        }, [null == eO ? void 0 : eO.subscriptionPeriodEnd, eY]);
        let eq = l.useMemo(
            () =>
              (0, I.V7)({
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
          eJ = (0, S.$g)(eK, eO, eC),
          eQ = l.useMemo(
            () => (eo && null != eO ? eO : eE && null != eR ? eR : void 0),
            [eE, eo, eO, eR],
          );
        if (null != eU);
        else if (ey && null != ek)
          V = (0, i.jsx)(w.e9, {
            plan: eC,
            className: B.invoice,
            isPrepaidPaymentSource: eV,
            isCustomGift: eD,
            invoicePreview: ek,
          });
        else if (null != eQ)
          V = (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(Z.KU, { negativeMarginTop: !eE }),
              (0, i.jsxs)(Z.PO, {
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
                    children: (0, i.jsx)(w.yT, { invoice: eQ, plan: eC }),
                  }),
                ],
              }),
            ],
          });
        else {
          if (null == eO || null == eR || eJ)
            return (0, i.jsx)("div", {
              className: B.spinnerWrapper,
              children: (0, i.jsx)(u.Spinner, {}),
            });
          eo &&
            eO.subscriptionPeriodEnd !== eR.subscriptionPeriodEnd &&
            (W = eO.subscriptionPeriodEnd),
            (V = (0, i.jsxs)(Z.PO, {
              className: B.invoice,
              children: [
                (0, i.jsx)(Z.q9, { children: U.intl.string(U.t["2eh+Cg"]) }),
                (0, i.jsx)(w.Lu, {
                  invoice: eO,
                  newPlan: eC,
                  isPrepaidPaymentSource: eV,
                  referralTrialOfferId: ec,
                }),
                eV
                  ? null
                  : (0, i.jsx)(w.nd, {
                      renewalInvoice: eR,
                      isTrial: eo,
                      priceOptions: Y,
                      overrideRenewalDate: W,
                      trialFooterMessageOverride: ei,
                      hideSubscriptionDetails: ea,
                    }),
              ],
            }));
        }
        let e$ = a.M.EEA_COUNTRIES.has(j.Z.ipCountryCodeWithFallback),
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
                  I.ZP.getIntervalForInvoice(n),
                a = (0, T.og)((0, T.T4)(n.total, n.currency), e, s),
                c = null != t ? t : n.subscriptionPeriodEnd;
              (i = U.intl.format(U.t.ZzmrTk, {
                termsURL: F.EYA.TERMS,
                paidURL: F.EYA.PAID_TERMS,
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
          ey && !eD
            ? (e9 = U.intl.string(U.t.J5a0eX))
            : ey && eD
              ? (e9 = "")
              : (0, I.PV)(eC.id) &&
                (e9 = I.ZP.getBillingReviewSubheader(null, eC)),
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
                  eK &&
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(Z.KU, {
                          negativeMarginTop: !0,
                          negativeMarginBottom: !0,
                        }),
                        (0, i.jsx)(_.Z, {}),
                        (0, i.jsx)(R.O, {
                          planOptions: eq,
                          eligibleForMultiMonthPlans: !1,
                          referralTrialOfferId: void 0,
                          selectedPlanId: z,
                          subscriptionPeriodEnd: eY,
                          showTotal: !1,
                          discountInvoiceItems: eb
                            ? null == eM
                              ? void 0
                              : eM.invoiceItems
                            : void 0,
                          handleClose: ed,
                        }),
                        (0, i.jsx)(Z.KU, {}),
                      ],
                    }),
                  eE &&
                    (0, i.jsx)(u.Heading, {
                      variant: "heading-md/normal",
                      color: "always-white",
                      className: B.trialHeader,
                      children: U.intl.format(U.t["7ZS2m5"], {
                        trialEnd: null == ep ? void 0 : ep.currentPeriodEnd,
                      }),
                    }),
                  !eo &&
                    "" !== e9 &&
                    (0, i.jsx)(u.FormTitle, {
                      tag: u.FormTitleTags.H5,
                      children: e9,
                    }),
                  eD &&
                    null != eI &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(A.Z, {
                          defaultAnimationState: N.SR.LOOP,
                          giftStyle: eI,
                          shouldAnimate: !0,
                          className: B.giftMainAnimation,
                        }),
                        (0, i.jsx)(L.s, { giftRecipient: eP }),
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
                        paymentSources: Object.values(K),
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
                                selectedCurrency: Y.currency,
                                currencies: X,
                                onChange: q,
                              }),
                            ],
                          }),
                    ],
                  }),
                  (0, i.jsx)(O.Z, {
                    isActive: en,
                    ref: ee,
                    children: (0, i.jsx)(x.Z, {
                      onChange: $,
                      forceShow: !0,
                      checkboxLabel: e0,
                      checkboxClassname: e1,
                      checkboxLabelClassname: e2,
                      finePrint:
                        null !== (H = !eE && ei) && void 0 !== H
                          ? H
                          : (0, i.jsx)(m.Z, {
                              hide: eo || eu,
                              subscriptionPlan: eC,
                              renewalInvoice: eR,
                              isGift: ey,
                              paymentSourceType:
                                null === (t = K[null != eG ? eG : ""]) ||
                                void 0 === t
                                  ? void 0
                                  : t.type,
                              isEmbeddedIAP: em,
                              basePrice: (0, I.aS)(eC.id, !1, ey, Y),
                            }),
                      showPricingLink: eC.currency !== D.pK.USD,
                      showWithdrawalWaiver: e$,
                      disabled: eZ,
                      isTrial: eo && null == ei,
                      inReverseTrial: eE,
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
        E = t(246946),
        j = t(351402),
        y = t(509545),
        P = t(74538),
        I = t(296848),
        T = t(374649),
        N = t(642530),
        b = t(653798),
        C = t(585602),
        _ = t(314182),
        Z = t(314404),
        O = t(42818),
        A = t(981631),
        R = t(388032),
        w = t(585488),
        M = t(401615);
      function L(e) {
        var n;
        let t,
          {
            premiumSubscription: r,
            paymentSources: x,
            priceOptions: h,
            onPaymentSourceChange: T,
            onPaymentSourceAdd: C,
            planId: O,
            setHasAcceptedTerms: w,
            legalTermsNodeRef: L,
            hasLegalTermsFlash: G,
            onInvoiceError: H,
            planGroup: W,
            currencies: V,
            onCurrencyChange: z,
            hasOpenInvoice: K,
            purchaseState: Y,
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
          et = (0, c.e7)([y.Z], () => y.Z.get(O));
        s()(null != et, "Missing newPlan");
        let ei = (0, c.e7)([E.Z], () => E.Z.hidePersonalInformation),
          el = a.M.EEA_COUNTRIES.has(j.Z.ipCountryCodeWithFallback),
          er = Y === g.A.PURCHASING || Y === g.A.COMPLETED,
          es = (0, S.Kp)({
            isTrial: !1,
            isGift: ee,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: $.current,
          }),
          ea = (null == r ? void 0 : r.status) === A.O0b.PAUSED,
          ec = l.useMemo(
            () =>
              (0, P.V7)({
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
          K || ea
            ? R.intl.string(R.t.nyzoFR)
            : (0, P.PV)(O)
              ? (0, P.W_)(r, et)
              : R.intl.formatToPlainString(R.t["sBpy9/"], {
                  planName: et.name,
                });
        let eo = null;
        return (
          null != r &&
            (eo = K
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
                : (0, I.R4)(r, O, W)
                  ? (0, i.jsx)(F, {
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
            className: M.stepBody,
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
                    (0, i.jsx)(Z.O, {
                      planOptions: ec,
                      eligibleForMultiMonthPlans: !1,
                      selectedPlanId: O,
                      showTotal: !1,
                      handleClose: X,
                    }),
                    (0, i.jsx)(b.KU, {}),
                  ],
                }),
              (0, i.jsx)(o.FormTitle, { tag: o.FormTitleTags.H5, children: t }),
              eo,
              (0, i.jsxs)("div", {
                className: M.paymentSourceWrapper,
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
                className: M.currencyWrapper,
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
                  null != r && (0, I.R4)(r, O, W)
                    ? (0, i.jsx)(D, {
                        premiumSubscription: r,
                        newPlan: et,
                        onInvoiceError: H,
                        planGroup: W,
                        priceOptions: h,
                        preventFetch: er,
                        disabled: er,
                        isEEA: el,
                        paymentSources: x,
                        setHasAcceptedTerms: w,
                      })
                    : (0, i.jsx)(p.Z, {
                        onChange: w,
                        finePrint: (0, i.jsx)(d.Z, {
                          subscriptionPlan: et,
                          paymentSourceType:
                            null === (n = x[null != en ? en : ""]) ||
                            void 0 === n
                              ? void 0
                              : n.type,
                          basePrice: (0, P.aS)(et.id, !1, ee, h),
                          currentSubscription: r,
                          planGroup: W,
                        }),
                        forceShow: !0,
                        showPricingLink: et.currency !== A.pKx.USD,
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
        let u = (0, P.Ap)(r.paymentSourceId);
        return null != a
          ? (0, i.jsxs)(b.PO, {
              className: w.__invalid_invoice,
              children: [
                (0, i.jsx)(O.By, { invoice: a, isPrepaidPaymentSource: u }),
                (0, i.jsx)(O.nd, {
                  premiumSubscription: n,
                  renewalInvoice: a,
                  isUpdate: !0,
                  isPrepaidPaymentSource: u,
                }),
              ],
            })
          : (0, i.jsx)(o.Spinner, {});
      }
      function F(e) {
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
          g = (0, P.al)(n, t.id, 1, new Set(s)),
          [E, j] = (0, T.ED)({
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
          [y, I] = (0, T.ED)({
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
          N = null != j ? j : I;
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
          _ = (0, S.$g)(C, E, t);
        if (null == E || null == y || _)
          return (0, i.jsx)(o.Spinner, { className: M.__invalid_spinner });
        let Z = (0, P.Ap)(a.paymentSourceId);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(O.hG, { proratedInvoice: E, renewalInvoice: y }),
            (0, i.jsxs)(b.PO, {
              className: M.invoice,
              children: [
                (0, i.jsx)(b.q9, { children: R.intl.string(R.t["2eh+Cg"]) }),
                (0, i.jsx)(O.Lu, {
                  invoice: E,
                  newPlan: t,
                  isPrepaidPaymentSource: Z,
                }),
                (0, i.jsx)(O.nd, {
                  premiumSubscription: n,
                  proratedInvoice: E,
                  renewalInvoice: y,
                  isUpdate: !0,
                  isPrepaidPaymentSource: Z,
                }),
              ],
            }),
          ],
        });
      }
      function D(e) {
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
            setHasAcceptedTerms: E,
          } = e,
          { analyticsLocations: j } = (0, h.ZP)(),
          y = (0, P.al)(s, a.id, 1, new Set(u)),
          [I, N] = (0, T.ED)({
            subscriptionId: s.id,
            items: y,
            renewal: !0,
            paymentSourceId: m.paymentSourceId,
            currency: m.currency,
            preventFetch: f,
            analyticsLocations: j,
            analyticsLocation:
              x.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          });
        return (l.useEffect(() => {
          c(N);
        }, [c, N]),
        null != N)
          ? (0, i.jsx)(o.FormErrorBlock, { children: N.message })
          : (null != I &&
                (r = {
                  amount: I.total,
                  currency: I.currency,
                  tax: I.tax,
                  taxInclusive: I.taxInclusive,
                }),
              null == r)
            ? null
            : (0, i.jsx)(p.Z, {
                onChange: E,
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
                showPricingLink: a.currency !== A.pKx.USD,
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
          return (0, i.jsx)(o.Spinner, { className: M.__invalid_spinner });
        let f = (0, P.Ap)(t.paymentSourceId);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: w.renewalInvoiceDate,
              children: R.intl.string(R.t.spIYoq),
            }),
            (0, i.jsxs)(b.PO, {
              className: M.invoice,
              children: [
                (0, i.jsx)(b.q9, { children: R.intl.string(R.t["2eh+Cg"]) }),
                (0, i.jsx)(O.By, { invoice: c, isPrepaidPaymentSource: f }),
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
            items: (0, P.al)(t, l.id, 1, new Set(r)),
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
        n = t.type === A.NYc.PREMIUM ? (0, P.Gf)(l.id) : l.name;
        let m = (0, P.Ap)(s.paymentSourceId);
        return (0, i.jsxs)("div", {
          className: M.bodyText,
          children: [
            (0, i.jsx)("div", {
              className: w.renewalInvoiceDate,
              children: R.intl.format(R.t["+y0Tj4"], {
                renewalDate: u.subscriptionPeriodStart,
              }),
            }),
            (0, i.jsxs)(b.PO, {
              className: M.invoice,
              children: [
                (0, i.jsx)(b.q9, { children: R.intl.string(R.t.iqhIp6) }),
                (0, i.jsx)(b.R$, { label: n, value: (0, P.PK)(l, s, !0) }),
                (0, i.jsx)(C.Z, { invoice: u }),
                (0, i.jsx)(b.KU, {}),
                (0, i.jsx)(O.nd, {
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
        a = t(26687);
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
        u = t(789906);
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
          forcedDivider: E = !1,
          showPremiumIcon: j = !1,
        } = e;
        return (0, i.jsx)("div", {
          className: r()(u.customizationSection, p, {
            [u.disabled]: h,
            [u.hideDivider]: f,
            [u.showBorder]: v,
            [u.withDivider]: E,
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
                children: [n, j && (0, i.jsx)(c.Z, {}), t],
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
        o = t(59437);
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
        u = t(844782);
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
//# sourceMappingURL=072801d2f8efaf61d33a.js.map
