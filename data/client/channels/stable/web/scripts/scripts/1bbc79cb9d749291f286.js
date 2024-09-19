"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32776"],
  {
    975608: function (e, t, n) {
      n(411104);
      var l = n(470079),
        i = n(960048);
      t.Z = (e, t, n, u, o) => {
        let a = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          if (t && !a.current) {
            a.current = !0;
            let t = setTimeout(() => {
              let t = Error("".concat(e, " is taking too long to load."));
              i.Z.setExtra({ loadingState: u, loadingTimeSeconds: n }),
                i.Z.captureException(t, {
                  ...o,
                  tags: { ...(null == o ? void 0 : o.tags) },
                });
            }, 1e3 * n);
            return () => {
              clearTimeout(t);
            };
          }
        }, [t, n]);
      };
    },
    232127: function (e, t, n) {
      n.d(t, {
        U: function () {
          return s;
        },
      });
      var l = n(626135),
        i = n(91641),
        u = n(959784),
        o = n(987338),
        a = n(981631);
      let r = new i.E(
        [u.NR, u.ZI, u.Ob, u.uc, u.m1],
        o.$P.PAYMENT_FLOW_STARTED,
        { location: "payment flow started" },
      );
      function s(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        l.default.track(a.rMx.PAYMENT_FLOW_STARTED, e, t), r.trigger();
      }
    },
    959784: function (e, t, n) {
      n.d(t, {
        NR: function () {
          return u;
        },
        Ob: function () {
          return r;
        },
        ZI: function () {
          return o;
        },
        m1: function () {
          return s;
        },
        uc: function () {
          return a;
        },
      });
      var l = n(987170),
        i = n(987338);
      let u = (0, l.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_vanilla",
          label: "CTP payment flow started - A/A test - Vanilla",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: i.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        o = (0, l.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_filters_",
          label: "CTP payment flow started - A/A test - Filters",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: i.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        a = (0, l.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_multiple_buckets",
          label: "CTP payment flow started - A/A test - Multiple buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: i.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment 1", config: { doSomething: !0 } },
            { id: 2, label: "Treatment 2", config: { doSomething: !0 } },
          ],
        }),
        r = (0, l.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_everyone",
          label: "CTP payment flow started - A/A test - Everyone",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: i.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        s = (0, l.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_uneven_buckets_",
          label: "CTP payment flow started - A/A test - Uneven buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: i.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        });
    },
    382577: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = n(470079),
        i = n(570140);
      function u(e) {
        let t = (0, l.useRef)(e);
        (0, l.useEffect)(() => {
          t.current = e;
        }, [e]),
          (0, l.useEffect)(() => {
            if (__OVERLAY__) {
              function e(e) {
                e.locked && t.current();
              }
              return (
                i.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", e),
                () => {
                  i.Z.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e);
                }
              );
            }
          }, []);
      }
    },
    791785: function (e, t, n) {
      n.r(t),
        n.d(t, {
          PaymentModal: function () {
            return W;
          },
          PaymentPredicateStep: function () {
            return F;
          },
        }),
        n(47120);
      var l = n(735250),
        i = n(470079),
        u = n(120356),
        o = n.n(u),
        a = n(792986),
        r = n(399606),
        s = n(481060),
        d = n(496929),
        c = n(975608),
        _ = n(89057),
        f = n(232127),
        E = n(382577),
        m = n(522489),
        T = n(439017),
        p = n(857039),
        g = n(104494),
        A = n(176919),
        P = n(711007),
        S = n(459965),
        M = n(509545),
        h = n(580130),
        v = n(626135),
        I = n(669079),
        y = n(74538),
        N = n(987209),
        R = n(598),
        C = n(409813),
        L = n(45572),
        k = n(784707),
        Z = n(614223),
        O = n(48175),
        b = n(928886),
        w = n(456251),
        D = n(614277),
        x = n(981631),
        U = n(474936),
        G = n(689938),
        Y = n(677825);
      function W(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: n,
            analyticsObject: u,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: d = x.NYc.PREMIUM,
            onComplete: c,
            transitionState: _,
            initialPlanId: m,
            subscriptionTier: T,
            onClose: h,
            trialId: Z,
            trialFooterMessageOverride: O,
            reviewWarningMessage: w,
            planGroup: W = U.Y1,
            openInvoiceId: F,
            onSubscriptionConfirmation: H,
            renderPurchaseConfirmation: j,
            postSuccessGuild: K,
            followupSKUInfo: B,
            renderHeader: V,
            applicationId: X,
            guildId: $,
            referralTrialOfferId: z,
            skuId: q,
            onStepChange: J,
            shakeWhilePurchasing: Q = !1,
            isLargeModal: ee = !1,
            hideShadow: et = !1,
            returnRef: en,
            skipConfirm: el = !1,
            continueSession: ei = !1,
          } = e,
          {
            activitySessionId: eu,
            purchaseState: eo,
            setPurchaseState: ea,
            selectedSkuId: er,
            setSelectedSkuId: es,
            selectedPlan: ed,
            setSelectedPlanId: ec,
            setStep: e_,
            setPurchaseError: ef,
            paymentAuthenticationState: eE,
            step: em,
            contextMetadata: eT,
            purchaseTokenAuthState: ep,
            activeSubscription: eg,
            priceOptions: eA,
            hasPaymentSources: eP,
            paymentSourceId: eS,
            paymentSources: eM,
            purchaseType: eh,
            defaultPlanId: ev,
          } = (0, R.usePaymentContext)(),
          eI = (0, k.Z)(),
          ey =
            ee || (null == eI ? void 0 : eI.isLargeModal)
              ? s.ModalSize.LARGE
              : s.ModalSize.SMALL,
          {
            isGift: eN,
            giftRecipient: eR,
            customGiftMessage: eC,
            emojiConfetti: eL,
            soundEffect: ek,
          } = (0, N.wD)(),
          eZ = (0, p.Z)({ location: "Payment Modal" }),
          eO = (0, g.Ng)(),
          eb = null != T && !eN && (0, g.Wp)(eO, T),
          [ew, eD] = i.useState({
            load_id: eT.loadId,
            payment_type: x.Zuq[eh],
            location: null != n ? n : u,
            source: r,
            subscription_type: d,
            subscription_plan_id: null == ed ? void 0 : ed.id,
            is_gift: eN,
            eligible_for_trial: null != Z,
            location_stack: t,
            sku_id: q,
            application_id: X,
            guild_id: $,
            payment_modal_version: "v1",
            activity_session_id: eu,
            eligible_for_discount: eb,
          }),
          ex = null != eS ? eM[eS] : null;
        i.useEffect(() => {
          eD((e) => {
            let t = null != ed ? (0, y.aS)(ed.id, !1, eN, eA) : void 0;
            return {
              ...e,
              subscription_plan_id: null == ed ? void 0 : ed.id,
              price: null == t ? void 0 : t.amount,
              regular_price: null == ed ? void 0 : ed.price,
              currency: eA.currency,
              sku_id: er,
            };
          });
        }, [ed, er, eN, eA]),
          i.useEffect(() => {
            (0, f.U)({ ...ew, has_saved_payment_source: eP });
          }, []),
          i.useEffect(() => {
            if ((null != ev && ei ? ec(ev) : ec(m), null != q)) es(q);
            else if (null != m) {
              var e;
              es(null === (e = M.Z.get(m)) || void 0 === e ? void 0 : e.skuId);
            }
          }, [ec, es, m, q, ev, ei]);
        let eU = i.useCallback(() => {
            let e = (0, I.MY)(eR) === I.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
              t = Date.now();
            v.default.track(x.rMx.PAYMENT_FLOW_SUCCEEDED, {
              ...ew,
              is_custom_message_edited:
                eN && e && null != eC
                  ? eC !== G.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE
                  : void 0,
              is_custom_emoji_sound_available: eN && e,
              emoji_name:
                eN && e && (null == eL ? void 0 : eL.id) == null
                  ? null == eL
                    ? void 0
                    : eL.surrogates
                  : void 0,
              sound_id: eN && e ? (null == ek ? void 0 : ek.soundId) : void 0,
              duration_ms: t - eT.startTime,
              payment_source_type: null == ex ? void 0 : ex.type,
            });
          }, [ew, eL, eC, eR, eN, ek, eT.startTime, ex]),
          eG = i.useMemo(
            () => () => (null == h ? void 0 : h(eo === L.A.COMPLETED, er)),
            [h, eo, er],
          ),
          eY = (0, a.Z)(() => Date.now(), [em]),
          eW = i.useCallback(
            function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                {
                  trackedFromStep: n,
                  analyticsDataOverride: l,
                  fulfillment: i,
                } = t,
                u = Date.now();
              if (e === C.h8.CONFIRM && (eU(), null == c || c(i), el)) {
                eG();
                return;
              }
              e_(e), null == J || J(e), ef(null);
              let o = null != n ? n : em;
              if (null === o) {
                v.default.track(x.rMx.PAYMENT_FLOW_LOADED, {
                  ...ew,
                  initial_step: e,
                  has_saved_payment_source: eP,
                });
                return;
              }
              v.default.track(x.rMx.PAYMENT_FLOW_STEP, {
                ...ew,
                ...l,
                from_step: o,
                to_step: e === C.h8.ADD_PAYMENT_STEPS ? C.h8.PAYMENT_TYPE : e,
                step_duration_ms: u - eY,
                flow_duration_ms: u - eT.startTime,
              });
            },
            [e_, J, ef, em, ew, eY, eT.startTime, eU, c, el, eG, eP],
          );
        (0, A.bp)(em, eE, eW, ea),
          (0, C.dZ)(em, eo, ea),
          (0, P.p)(em, ep, eW),
          (0, E.Z)(eG),
          (0, S.w)(eg, () => h(!1), eN),
          (0, A.D6)(eE);
        let eF = (0, b.U)({
          renderHeader: V,
          referralTrialOfferId: z,
          handleClose: eG,
        });
        return (0, l.jsx)(s.Shaker, {
          className: o()(Y.shaker, { [Y.halloweenModalHeight]: eZ }),
          isShaking: Q && eo === L.A.PURCHASING,
          intensity: 2,
          children: (0, l.jsx)(s.ModalRoot, {
            className: o()(Y.root, {
              [Y.withHeader]: null != eF,
              [Y.halloweenModalHeight]: eZ,
            }),
            transitionState: _,
            hideShadow: et,
            returnRef: en,
            size: ey,
            children: (0, l.jsx)(D.ZP, {
              header: eF,
              isLargeModal: ee || (null == eI ? void 0 : eI.isLargeModal),
              initialPlanId: m,
              subscriptionTier: T,
              handleStepChange: eW,
              handleClose: eG,
              analyticsData: ew,
              setAnalyticsData: eD,
              trialId: Z,
              trialFooterMessageOverride: O,
              reviewWarningMessage: w,
              planGroup: W,
              openInvoiceId: F,
              analyticsLocation: n,
              onSubscriptionConfirmation: H,
              renderPurchaseConfirmation: j,
              postSuccessGuild: K,
              followupSKUInfo: B,
              referralTrialOfferId: z,
              skipConfirm: el,
              continueSession: ei,
            }),
          }),
        });
      }
      function F(e) {
        let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: u,
            referralTrialOfferId: o,
            handleClose: a,
            continueSession: s,
          } = e,
          {
            activeSubscription: f,
            blockedPayments: E,
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: A,
            selectedSkuId: P,
            setSelectedPlanId: S,
            defaultPlanId: M,
            startedPaymentFlowWithPaymentSourcesRef: v,
            repeatPurchase: I,
          } = (0, R.usePaymentContext)(),
          { isGift: y } = (0, N.wD)(),
          L = v.current,
          k = (0, O.Z)({ isGift: y, skuId: P, referralTrialOfferId: o }),
          { defaultToMonthlyPlan: b } = T.k.getCurrentConfig(
            { location: "055ec5_1" },
            { autoTrackExposure: !1 },
          ),
          { redirectToPlanSelectStep: D } = m.m.useExperiment(
            { location: "PaymentPredicateStep" },
            { autoTrackExposure: !1 },
          ),
          [x, G] = i.useState(!0),
          Y = (0, r.e7)([h.Z], () => h.Z.applicationIdsFetched.has(U.CL));
        return (i.useEffect(() => {
          G(!p || !g || A);
        }, [A, g, p]),
        (0, c.Z)(
          "Payment Modal",
          x,
          5,
          {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: A,
          },
          { tags: { app_context: "billing" } },
        ),
        i.useEffect(() => {
          if ((!Y && (0, d.yD)(U.CL), x || E)) return;
          let e = (0, Z.Kp)({
            isTrial: k,
            isGift: y,
            selectedSkuId: P,
            startedPaymentFlowWithPaymentSources: L,
          });
          s
            ? u(C.h8.ADD_PAYMENT_STEPS)
            : null != n
              ? u(I && D ? C.h8.PLAN_SELECT : C.h8.REVIEW)
              : e
                ? (S((0, Z.nA)(P, f, M)), u(C.h8.REVIEW))
                : null != t
                  ? u(C.h8.PLAN_SELECT)
                  : u(C.h8.SKU_SELECT);
        }, [f, E, Y, n, x, u, t, P, S, b, k, M, y, L, s, I, D]),
        x)
          ? (0, l.jsx)(w.Z, {})
          : E
            ? (0, l.jsx)(_.Vq, { onClose: a })
            : null;
      }
    },
    928886: function (e, t, n) {
      n.d(t, {
        U: function () {
          return h;
        },
      });
      var l = n(735250),
        i = n(470079),
        u = n(512722),
        o = n.n(u),
        a = n(481060),
        r = n(479446),
        s = n(646476),
        d = n(104494),
        c = n(639119),
        _ = n(981632),
        f = n(798769),
        E = n(689011),
        m = n(669079),
        T = n(987209),
        p = n(598),
        g = n(409813),
        A = n(981631),
        P = n(474936),
        S = n(231338),
        M = n(920667);
      function h(e) {
        var t;
        let { renderHeader: n, referralTrialOfferId: u, handleClose: h } = e,
          {
            selectedSkuId: v,
            step: I,
            selectedPlan: y,
            purchaseState: N,
            purchaseType: R,
            selectedSku: C,
          } = (0, p.usePaymentContext)(),
          { isGift: L, selectedGiftStyle: k, giftRecipient: Z } = (0, T.wD)(),
          O =
            L &&
            (0, m.pO)(Z) &&
            I === g.h8.CONFIRM &&
            null != k &&
            (null == C ? void 0 : C.productLine) !== A.POd.COLLECTIBLES,
          b = null != n && null != I,
          w = I !== g.h8.SKU_SELECT && null != v,
          D = (0, c.N)(u),
          x = !L && null != D && null != v && P.nG[D.trial_id].skus.includes(v),
          U = (0, d.Ng)(),
          G =
            null == U
              ? void 0
              : null === (t = U.discount) || void 0 === t
                ? void 0
                : t.plan_ids.some((e) => P.GP[e].skuId === v),
          Y = !L && null != U && null != v && G,
          { enabled: W } = s.ZP.useExperiment(
            { location: "PaymentModalHeader" },
            { autoTrackExposure: !1 },
          ),
          F = (0, s.rK)(),
          H = W && F;
        return i.useMemo(() => {
          if (null == I) return;
          let e = null;
          if (O)
            e = (0, l.jsxs)("div", {
              className: M.container,
              children: [
                (0, l.jsx)(_.Z, {
                  defaultAnimationState: r.SR.LOOP,
                  giftStyle: k,
                  className: M.seasonalGiftBoxHeaderIcon,
                }),
                (0, l.jsx)(a.ModalCloseButton, {
                  onClick: h,
                  className: M.closeButton,
                }),
              ],
            });
          else if (b) e = n(null != y ? y : null, h, I);
          else if (R === S.GZ.ONE_TIME)
            e = (0, l.jsx)(E.t, { step: I, onClose: h });
          else if (w)
            o()(v in P.y7, "invalid sku id: ".concat(v)),
              (e = (0, l.jsx)(f.Z, {
                currentStep: null != I ? I : void 0,
                purchaseState: N,
                premiumType: P.y7[v],
                onClose: h,
                showTrialBadge: x,
                showDiscountBadge: Y,
                isGift: L,
                giftRecipient: Z,
                useWinterTheme: H,
              }));
          return e;
        }, [k, h, N, n, y, v, I, x, Y, O, w, b, R, L, Z, H]);
      }
    },
    456251: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = n(735250);
      n(470079);
      var i = n(481060),
        u = n(244203);
      function o() {
        return (0, l.jsx)(i.Spinner, { className: u.spinner });
      }
    },
    784707: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var l = n(598);
      function i() {
        let { step: e, stepConfigs: t } = (0, l.usePaymentContext)(),
          n = t.find((t) => t.key === e);
        return null == n ? void 0 : n.options;
      }
    },
    614223: function (e, t, n) {
      n.d(t, {
        $g: function () {
          return o;
        },
        Kp: function () {
          return u;
        },
        nA: function () {
          return a;
        },
      });
      var l = n(74538),
        i = n(474936);
      function u(e) {
        let {
          isTrial: t,
          isGift: n,
          selectedSkuId: l,
          startedPaymentFlowWithPaymentSources: u,
          inReverseTrial: o,
        } = e;
        return !t && !n && !o && null != l && i.YQ.includes(l) && u;
      }
      function o(e, t, n) {
        let l = !1;
        return (
          e &&
            null != t &&
            null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) &&
            (l = !0),
          l
        );
      }
      function a(e, t, n) {
        let u = null != t ? (0, l.Af)(t) : null,
          o = i.mn[e],
          a = null != n ? n : o;
        return (
          null != u
            ? a === u.planId && a === i.IW[e]
              ? (a = i.mn[e])
              : a === u.planId && a === i.mn[e]
                ? (a = i.IW[e])
                : (u.planId === i.Xh.PREMIUM_YEAR_TIER_0 ||
                    u.planId === i.Xh.PREMIUM_YEAR_TIER_1) &&
                  a === i.Xh.PREMIUM_MONTH_TIER_2 &&
                  (a = i.Xh.PREMIUM_YEAR_TIER_2)
            : a === i.Xh.PREMIUM_YEAR_TIER_1 && (a = i.Xh.PREMIUM_MONTH_TIER_1),
          a
        );
      }
    },
    48175: function (e, t, n) {
      n.d(t, {
        T: function () {
          return u;
        },
        Z: function () {
          return o;
        },
      });
      var l = n(639119),
        i = n(474936);
      function u(e) {
        let { userTrialOffer: t, isGift: n, skuId: l } = e;
        return (
          !n && null != t && null != l && i.nG[t.trial_id].skus.includes(l)
        );
      }
      function o(e) {
        let { isGift: t, skuId: n, referralTrialOfferId: u } = e,
          o = (0, l.N)(u);
        return (
          !t && null != o && null != n && i.nG[o.trial_id].skus.includes(n)
        );
      }
    },
    711007: function (e, t, n) {
      n.d(t, {
        p: function () {
          return o;
        },
      });
      var l = n(470079),
        i = n(409813),
        u = n(882712);
      function o(e, t, n) {
        l.useEffect(() => {
          null != e &&
          e !== i.h8.AWAITING_PURCHASE_TOKEN_AUTH &&
          t === u.I.PENDING
            ? n(i.h8.AWAITING_PURCHASE_TOKEN_AUTH)
            : e === i.h8.AWAITING_PURCHASE_TOKEN_AUTH &&
              t === u.I.SUCCESS &&
              n(i.h8.REVIEW);
        }, [e, t, n]);
      }
    },
    459965: function (e, t, n) {
      n.d(t, {
        H: function () {
          return f;
        },
        w: function () {
          return c;
        },
      });
      var l = n(470079),
        i = n(442837),
        u = n(668781),
        o = n(509545),
        a = n(580130),
        r = n(74538),
        s = n(231338),
        d = n(689938);
      function c(e, t, n) {
        l.useEffect(() => {
          null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !n &&
            (u.Z.show({
              title: d.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                paymentGatewayName: s.Vz[e.paymentGateway],
              }),
              body: d.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                paymentGatewayName: s.Vz[e.paymentGateway],
                subscriptionManagementLink: (0, r.JE)(
                  e.paymentGateway,
                  "SUBSCRIPTION_MANAGEMENT",
                ),
              }),
              confirmText: d.Z.Messages.OKAY,
            }),
            t());
        }, [e]);
      }
      let _ = [];
      function f(e, t) {
        let n = (0, i.e7)([o.Z], () => (null != e ? o.Z.get(e) : null)),
          u = (0, i.e7)([a.Z], () => {
            var e;
            return null != n &&
              null !== (e = a.Z.getForSku(n.skuId)) &&
              void 0 !== e
              ? e
              : _;
          }),
          s = l.useMemo(
            () =>
              Array.from(u).filter((e) => {
                let { parentId: t, consumed: n } = e;
                return null != t && !n;
              }),
            [u],
          );
        return {
          hasEntitlements:
            !t &&
            null != n &&
            null != s &&
            s.length >= r.ZP.getIntervalMonths(n.interval, n.intervalCount),
          entitlements: s,
        };
      }
    },
  },
]);
//# sourceMappingURL=1bbc79cb9d749291f286.js.map
