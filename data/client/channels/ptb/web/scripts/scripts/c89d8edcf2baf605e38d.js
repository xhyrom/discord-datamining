"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32776"],
  {
    975608: function (e, n, t) {
      t(411104);
      var l = t(470079),
        i = t(960048);
      n.Z = (e, n, t, u, o) => {
        let a = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          if (n && !a.current) {
            a.current = !0;
            let n = setTimeout(() => {
              let n = Error("".concat(e, " is taking too long to load."));
              i.Z.setExtra({ loadingState: u, loadingTimeSeconds: t }),
                i.Z.captureException(n, {
                  ...o,
                  tags: { ...(null == o ? void 0 : o.tags) },
                });
            }, 1e3 * t);
            return () => {
              clearTimeout(n);
            };
          }
        }, [n, t]);
      };
    },
    232127: function (e, n, t) {
      t.d(n, {
        U: function () {
          return s;
        },
      });
      var l = t(626135),
        i = t(91641),
        u = t(959784),
        o = t(987338),
        a = t(981631);
      let r = new i.E(
        [u.NR, u.ZI, u.Ob, u.uc, u.m1],
        o.$P.PAYMENT_FLOW_STARTED,
        { location: "payment flow started" },
      );
      function s(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        l.default.track(a.rMx.PAYMENT_FLOW_STARTED, e, n), r.trigger();
      }
    },
    959784: function (e, n, t) {
      t.d(n, {
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
      var l = t(987170),
        i = t(987338);
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
    382577: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(470079),
        i = t(570140);
      function u(e) {
        let n = (0, l.useRef)(e);
        (0, l.useEffect)(() => {
          n.current = e;
        }, [e]),
          (0, l.useEffect)(() => {
            if (__OVERLAY__) {
              function e(e) {
                e.locked && n.current();
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
    791785: function (e, n, t) {
      t.r(n),
        t.d(n, {
          PaymentModal: function () {
            return W;
          },
          PaymentPredicateStep: function () {
            return F;
          },
        }),
        t(47120);
      var l = t(735250),
        i = t(470079),
        u = t(120356),
        o = t.n(u),
        a = t(792986),
        r = t(399606),
        s = t(481060),
        d = t(496929),
        c = t(975608),
        _ = t(89057),
        f = t(232127),
        E = t(382577),
        m = t(522489),
        T = t(439017),
        p = t(857039),
        g = t(104494),
        A = t(176919),
        P = t(711007),
        S = t(459965),
        M = t(509545),
        h = t(580130),
        v = t(626135),
        I = t(669079),
        y = t(74538),
        N = t(987209),
        R = t(598),
        C = t(409813),
        k = t(45572),
        Z = t(784707),
        L = t(614223),
        O = t(48175),
        b = t(928886),
        w = t(456251),
        x = t(614277),
        D = t(981631),
        U = t(474936),
        G = t(689938),
        Y = t(677825);
      function W(e) {
        let {
            analyticsLocations: n,
            analyticsLocation: t,
            analyticsObject: u,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: d = D.NYc.PREMIUM,
            onComplete: c,
            transitionState: _,
            initialPlanId: m,
            subscriptionTier: T,
            onClose: h,
            trialId: L,
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
            skuId: Q,
            onStepChange: q,
            shakeWhilePurchasing: J = !1,
            isLargeModal: ee = !1,
            hideShadow: en = !1,
            returnRef: et,
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
          eI = (0, Z.Z)(),
          ey =
            ee || (null == eI ? void 0 : eI.isLargeModal)
              ? s.ModalSize.LARGE
              : s.ModalSize.SMALL,
          {
            isGift: eN,
            giftRecipient: eR,
            customGiftMessage: eC,
            emojiConfetti: ek,
            soundEffect: eZ,
          } = (0, N.wD)(),
          eL = (0, p.Z)({ location: "Payment Modal" }),
          eO = (0, g.Ng)(),
          eb = null != T && !eN && (0, g.Wp)(eO, T),
          [ew, ex] = i.useState({
            load_id: eT.loadId,
            payment_type: D.Zuq[eh],
            location: null != t ? t : u,
            source: r,
            subscription_type: d,
            subscription_plan_id: null == ed ? void 0 : ed.id,
            is_gift: eN,
            eligible_for_trial: null != L,
            location_stack: n,
            sku_id: Q,
            application_id: X,
            guild_id: $,
            payment_modal_version: "v1",
            activity_session_id: eu,
            eligible_for_discount: eb,
          }),
          eD = null != eS ? eM[eS] : null;
        i.useEffect(() => {
          ex((e) => {
            let n = null != ed ? (0, y.aS)(ed.id, !1, eN, eA) : void 0;
            return {
              ...e,
              subscription_plan_id: null == ed ? void 0 : ed.id,
              price: null == n ? void 0 : n.amount,
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
            if ((null != ev && ei ? ec(ev) : ec(m), null != Q)) es(Q);
            else if (null != m) {
              var e;
              es(null === (e = M.Z.get(m)) || void 0 === e ? void 0 : e.skuId);
            }
          }, [ec, es, m, Q, ev, ei]);
        let eU = i.useCallback(() => {
            let e = (0, I.MY)(eR) === I.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
              n = Date.now();
            v.default.track(D.rMx.PAYMENT_FLOW_SUCCEEDED, {
              ...ew,
              is_custom_message_edited:
                eN && e && null != eC
                  ? eC !== G.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE
                  : void 0,
              is_custom_emoji_sound_available: eN && e,
              emoji_name:
                eN && e && (null == ek ? void 0 : ek.id) == null
                  ? null == ek
                    ? void 0
                    : ek.surrogates
                  : void 0,
              sound_id: eN && e ? (null == eZ ? void 0 : eZ.soundId) : void 0,
              duration_ms: n - eT.startTime,
              payment_source_type: null == eD ? void 0 : eD.type,
            });
          }, [ew, ek, eC, eR, eN, eZ, eT.startTime, eD]),
          eG = i.useMemo(
            () => () => (null == h ? void 0 : h(eo === k.A.COMPLETED, er)),
            [h, eo, er],
          ),
          eY = (0, a.Z)(() => Date.now(), [em]),
          eW = i.useCallback(
            function (e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                {
                  trackedFromStep: t,
                  analyticsDataOverride: l,
                  fulfillment: i,
                } = n,
                u = Date.now();
              if (e === C.h8.CONFIRM && (eU(), null == c || c(i), el)) {
                eG();
                return;
              }
              e_(e), null == q || q(e), ef(null);
              let o = null != t ? t : em;
              if (null === o) {
                v.default.track(D.rMx.PAYMENT_FLOW_LOADED, {
                  ...ew,
                  initial_step: e,
                  has_saved_payment_source: eP,
                });
                return;
              }
              v.default.track(D.rMx.PAYMENT_FLOW_STEP, {
                ...ew,
                ...l,
                from_step: o,
                to_step: e === C.h8.ADD_PAYMENT_STEPS ? C.h8.PAYMENT_TYPE : e,
                step_duration_ms: u - eY,
                flow_duration_ms: u - eT.startTime,
              });
            },
            [e_, q, ef, em, ew, eY, eT.startTime, eU, c, el, eG, eP],
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
          className: o()(Y.shaker, { [Y.halloweenModalHeight]: eL }),
          isShaking: J && eo === k.A.PURCHASING,
          intensity: 2,
          children: (0, l.jsx)(s.ModalRoot, {
            className: o()(Y.root, {
              [Y.withHeader]: null != eF,
              [Y.halloweenModalHeight]: eL,
            }),
            transitionState: _,
            hideShadow: en,
            returnRef: et,
            size: ey,
            children: (0, l.jsx)(x.ZP, {
              header: eF,
              isLargeModal: ee || (null == eI ? void 0 : eI.isLargeModal),
              initialPlanId: m,
              subscriptionTier: T,
              handleStepChange: eW,
              handleClose: eG,
              analyticsData: ew,
              setAnalyticsData: ex,
              trialId: L,
              trialFooterMessageOverride: O,
              reviewWarningMessage: w,
              planGroup: W,
              openInvoiceId: F,
              analyticsLocation: t,
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
            subscriptionTier: n,
            initialPlanId: t,
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
          k = v.current,
          Z = (0, O.Z)({ isGift: y, skuId: P, referralTrialOfferId: o }),
          { defaultToMonthlyPlan: b } = T.k.getCurrentConfig(
            { location: "055ec5_1" },
            { autoTrackExposure: !1 },
          ),
          { redirectToPlanSelectStep: x } = m.m.useExperiment(
            { location: "PaymentPredicateStep" },
            { autoTrackExposure: !1 },
          ),
          [D, G] = i.useState(!0),
          Y = (0, r.e7)([h.Z], () => h.Z.applicationIdsFetched.has(U.RQ));
        return (i.useEffect(() => {
          G(!p || !g || A);
        }, [A, g, p]),
        (0, c.Z)(
          "Payment Modal",
          D,
          5,
          {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: A,
          },
          { tags: { app_context: "billing" } },
        ),
        i.useEffect(() => {
          if ((!Y && (0, d.yD)(U.RQ), D || E)) return;
          let e = (0, L.Kp)({
            isTrial: Z,
            isGift: y,
            selectedSkuId: P,
            startedPaymentFlowWithPaymentSources: k,
          });
          s
            ? u(C.h8.ADD_PAYMENT_STEPS)
            : null != t
              ? u(I && x ? C.h8.PLAN_SELECT : C.h8.REVIEW)
              : e
                ? (S((0, L.nA)(P, f, M)), u(C.h8.REVIEW))
                : null != n
                  ? u(C.h8.PLAN_SELECT)
                  : u(C.h8.SKU_SELECT);
        }, [f, E, Y, t, D, u, n, P, S, b, Z, M, y, k, s, I, x]),
        D)
          ? (0, l.jsx)(w.Z, {})
          : E
            ? (0, l.jsx)(_.Vq, { onClose: a })
            : null;
      }
    },
    928886: function (e, n, t) {
      t.d(n, {
        U: function () {
          return h;
        },
      });
      var l = t(735250),
        i = t(470079),
        u = t(512722),
        o = t.n(u),
        a = t(481060),
        r = t(479446),
        s = t(646476),
        d = t(104494),
        c = t(639119),
        _ = t(981632),
        f = t(798769),
        E = t(689011),
        m = t(669079),
        T = t(987209),
        p = t(598),
        g = t(409813),
        A = t(981631),
        P = t(474936),
        S = t(231338),
        M = t(920667);
      function h(e) {
        var n;
        let { renderHeader: t, referralTrialOfferId: u, handleClose: h } = e,
          {
            selectedSkuId: v,
            step: I,
            selectedPlan: y,
            purchaseState: N,
            purchaseType: R,
            selectedSku: C,
          } = (0, p.usePaymentContext)(),
          { isGift: k, selectedGiftStyle: Z, giftRecipient: L } = (0, T.wD)(),
          O =
            k &&
            (0, m.pO)(L) &&
            I === g.h8.CONFIRM &&
            null != Z &&
            (null == C ? void 0 : C.productLine) !== A.POd.COLLECTIBLES,
          b = null != t && null != I,
          w = I !== g.h8.SKU_SELECT && null != v,
          x = (0, c.N)(u),
          D = !k && null != x && null != v && P.nG[x.trial_id].skus.includes(v),
          U = (0, d.Ng)(),
          G =
            null == U
              ? void 0
              : null === (n = U.discount) || void 0 === n
                ? void 0
                : n.plan_ids.some((e) => P.GP[e].skuId === v),
          Y = !k && null != U && null != v && G,
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
                  giftStyle: Z,
                  className: M.seasonalGiftBoxHeaderIcon,
                }),
                (0, l.jsx)(a.ModalCloseButton, {
                  onClick: h,
                  className: M.closeButton,
                }),
              ],
            });
          else if (b) e = t(null != y ? y : null, h, I);
          else if (R === S.GZ.ONE_TIME)
            e = (0, l.jsx)(E.t, { step: I, onClose: h });
          else if (w)
            o()(v in P.y7, "invalid sku id: ".concat(v)),
              (e = (0, l.jsx)(f.Z, {
                currentStep: null != I ? I : void 0,
                purchaseState: N,
                premiumType: P.y7[v],
                onClose: h,
                showTrialBadge: D,
                showDiscountBadge: Y,
                isGift: k,
                giftRecipient: L,
                useWinterTheme: H,
              }));
          return e;
        }, [Z, h, N, t, y, v, I, D, Y, O, w, b, R, k, L, H]);
      }
    },
    456251: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(481060),
        u = t(244203);
      function o() {
        return (0, l.jsx)(i.Spinner, { className: u.spinner });
      }
    },
    784707: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var l = t(598);
      function i() {
        let { step: e, stepConfigs: n } = (0, l.usePaymentContext)(),
          t = n.find((n) => n.key === e);
        return null == t ? void 0 : t.options;
      }
    },
    614223: function (e, n, t) {
      t.d(n, {
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
      var l = t(74538),
        i = t(474936);
      function u(e) {
        let {
          isTrial: n,
          isGift: t,
          selectedSkuId: l,
          startedPaymentFlowWithPaymentSources: u,
          inReverseTrial: o,
        } = e;
        return !n && !t && !o && null != l && i.YQ.includes(l) && u;
      }
      function o(e, n, t) {
        let l = !1;
        return (
          e &&
            null != n &&
            null == n.invoiceItems.find((e) => e.subscriptionPlanId === t.id) &&
            (l = !0),
          l
        );
      }
      function a(e, n, t) {
        let u = null != n ? (0, l.Af)(n) : null,
          o = i.mn[e],
          a = null != t ? t : o;
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
    48175: function (e, n, t) {
      t.d(n, {
        T: function () {
          return u;
        },
        Z: function () {
          return o;
        },
      });
      var l = t(639119),
        i = t(474936);
      function u(e) {
        let { userTrialOffer: n, isGift: t, skuId: l } = e;
        return (
          !t && null != n && null != l && i.nG[n.trial_id].skus.includes(l)
        );
      }
      function o(e) {
        let { isGift: n, skuId: t, referralTrialOfferId: u } = e,
          o = (0, l.N)(u);
        return (
          !n && null != o && null != t && i.nG[o.trial_id].skus.includes(t)
        );
      }
    },
    857039: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(987209),
        i = t(599659);
      function u(e) {
        let { location: n } = e,
          { enabled: t } = i.O.useExperiment(
            { location: n },
            { autoTrackExposure: !1 },
          ),
          { alreadyHasHalloweenDeco: u, isGift: o } = (0, l.wD)();
        return t && o && !u;
      }
    },
    711007: function (e, n, t) {
      t.d(n, {
        p: function () {
          return o;
        },
      });
      var l = t(470079),
        i = t(409813),
        u = t(882712);
      function o(e, n, t) {
        l.useEffect(() => {
          null != e &&
          e !== i.h8.AWAITING_PURCHASE_TOKEN_AUTH &&
          n === u.I.PENDING
            ? t(i.h8.AWAITING_PURCHASE_TOKEN_AUTH)
            : e === i.h8.AWAITING_PURCHASE_TOKEN_AUTH &&
              n === u.I.SUCCESS &&
              t(i.h8.REVIEW);
        }, [e, n, t]);
      }
    },
    459965: function (e, n, t) {
      t.d(n, {
        H: function () {
          return f;
        },
        w: function () {
          return c;
        },
      });
      var l = t(470079),
        i = t(442837),
        u = t(668781),
        o = t(509545),
        a = t(580130),
        r = t(74538),
        s = t(231338),
        d = t(689938);
      function c(e, n, t) {
        l.useEffect(() => {
          null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !t &&
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
            n());
        }, [e]);
      }
      let _ = [];
      function f(e, n) {
        let t = (0, i.e7)([o.Z], () => (null != e ? o.Z.get(e) : null)),
          u = (0, i.e7)([a.Z], () => {
            var e;
            return null != t &&
              null !== (e = a.Z.getForSku(t.skuId)) &&
              void 0 !== e
              ? e
              : _;
          }),
          s = l.useMemo(
            () =>
              Array.from(u).filter((e) => {
                let { parentId: n, consumed: t } = e;
                return null != n && !t;
              }),
            [u],
          );
        return {
          hasEntitlements:
            !n &&
            null != t &&
            null != s &&
            s.length >= r.ZP.getIntervalMonths(t.interval, t.intervalCount),
          entitlements: s,
        };
      }
    },
  },
]);
//# sourceMappingURL=c89d8edcf2baf605e38d.js.map
