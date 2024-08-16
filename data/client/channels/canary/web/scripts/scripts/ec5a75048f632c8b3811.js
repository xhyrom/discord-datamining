"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32776"],
  {
    975608: function (e, t, n) {
      n(411104);
      var l = n(470079),
        i = n(960048);
      t.Z = (e, t, n, u, o) => {
        let r = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          if (t && !r.current) {
            r.current = !0;
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
        r = n(981631);
      let a = new i.E(
        [u.NR, u.ZI, u.Ob, u.uc, u.m1],
        o.$P.PAYMENT_FLOW_STARTED,
        { location: "payment flow started" },
      );
      function s(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        l.default.track(r.rMx.PAYMENT_FLOW_STARTED, e, t), a.trigger();
      }
    },
    959784: function (e, t, n) {
      n.d(t, {
        NR: function () {
          return u;
        },
        Ob: function () {
          return a;
        },
        ZI: function () {
          return o;
        },
        m1: function () {
          return s;
        },
        uc: function () {
          return r;
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
        r = (0, l.Z)({
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
        a = (0, l.Z)({
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
            return Y;
          },
          PaymentPredicateStep: function () {
            return W;
          },
        }),
        n(47120);
      var l = n(735250),
        i = n(470079),
        u = n(120356),
        o = n.n(u),
        r = n(792986),
        a = n(399606),
        s = n(481060),
        d = n(496929),
        c = n(975608),
        _ = n(89057),
        f = n(232127),
        E = n(382577),
        m = n(522489),
        T = n(439017),
        p = n(104494),
        A = n(176919),
        g = n(711007),
        S = n(459965),
        P = n(509545),
        M = n(580130),
        h = n(626135),
        v = n(669079),
        I = n(74538),
        y = n(987209),
        N = n(598),
        R = n(409813),
        C = n(45572),
        k = n(784707),
        L = n(614223),
        Z = n(48175),
        O = n(928886),
        b = n(456251),
        w = n(614277),
        D = n(981631),
        x = n(474936),
        U = n(689938),
        G = n(166352);
      function Y(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: n,
            analyticsObject: u,
            analyticsSourceLocation: a,
            analyticsSubscriptionType: d = D.NYc.PREMIUM,
            onComplete: c,
            transitionState: _,
            initialPlanId: m,
            subscriptionTier: T,
            onClose: M,
            trialId: L,
            trialFooterMessageOverride: Z,
            reviewWarningMessage: b,
            planGroup: Y = x.Y1,
            openInvoiceId: W,
            onSubscriptionConfirmation: F,
            renderPurchaseConfirmation: H,
            postSuccessGuild: j,
            followupSKUInfo: K,
            renderHeader: B,
            applicationId: V,
            guildId: X,
            referralTrialOfferId: $,
            skuId: z,
            onStepChange: Q,
            shakeWhilePurchasing: q = !1,
            isLargeModal: J = !1,
            hideShadow: ee = !1,
            returnRef: et,
            skipConfirm: en = !1,
            continueSession: el = !1,
          } = e,
          {
            activitySessionId: ei,
            purchaseState: eu,
            setPurchaseState: eo,
            selectedSkuId: er,
            setSelectedSkuId: ea,
            selectedPlan: es,
            setSelectedPlanId: ed,
            setStep: ec,
            setPurchaseError: e_,
            paymentAuthenticationState: ef,
            step: eE,
            contextMetadata: em,
            purchaseTokenAuthState: eT,
            activeSubscription: ep,
            priceOptions: eA,
            hasPaymentSources: eg,
            paymentSourceId: eS,
            paymentSources: eP,
            purchaseType: eM,
            defaultPlanId: eh,
          } = (0, N.usePaymentContext)(),
          ev = (0, k.Z)(),
          eI =
            J || (null == ev ? void 0 : ev.isLargeModal)
              ? s.ModalSize.LARGE
              : s.ModalSize.SMALL,
          {
            isGift: ey,
            giftRecipient: eN,
            customGiftMessage: eR,
            emojiConfetti: eC,
            soundEffect: ek,
          } = (0, y.wD)(),
          eL = (0, p.Ng)(),
          eZ = null != T && !ey && (0, p.Wp)(eL, T),
          [eO, eb] = i.useState({
            load_id: em.loadId,
            payment_type: D.Zuq[eM],
            location: null != n ? n : u,
            source: a,
            subscription_type: d,
            subscription_plan_id: null == es ? void 0 : es.id,
            is_gift: ey,
            eligible_for_trial: null != L,
            location_stack: t,
            sku_id: z,
            application_id: V,
            guild_id: X,
            payment_modal_version: "v1",
            activity_session_id: ei,
            eligible_for_discount: eZ,
          }),
          ew = null != eS ? eP[eS] : null;
        i.useEffect(() => {
          eb((e) => {
            let t = null != es ? (0, I.aS)(es.id, !1, ey, eA) : void 0;
            return {
              ...e,
              subscription_plan_id: null == es ? void 0 : es.id,
              price: null == t ? void 0 : t.amount,
              regular_price: null == es ? void 0 : es.price,
              currency: eA.currency,
              sku_id: er,
            };
          });
        }, [es, er, ey, eA]),
          i.useEffect(() => {
            (0, f.U)({ ...eO, has_saved_payment_source: eg });
          }, []),
          i.useEffect(() => {
            if ((null != eh && el ? ed(eh) : ed(m), null != z)) ea(z);
            else if (null != m) {
              var e;
              ea(null === (e = P.Z.get(m)) || void 0 === e ? void 0 : e.skuId);
            }
          }, [ed, ea, m, z, eh, el]);
        let eD = i.useCallback(() => {
            let e = (0, v.MY)(eN) === v.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
              t = Date.now();
            h.default.track(D.rMx.PAYMENT_FLOW_SUCCEEDED, {
              ...eO,
              is_custom_message_edited:
                ey && e && null != eR
                  ? eR !== U.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE
                  : void 0,
              is_custom_emoji_sound_available: ey && e,
              emoji_name:
                ey && e && (null == eC ? void 0 : eC.id) == null
                  ? null == eC
                    ? void 0
                    : eC.surrogates
                  : void 0,
              sound_id: ey && e ? (null == ek ? void 0 : ek.soundId) : void 0,
              duration_ms: t - em.startTime,
              payment_source_type: null == ew ? void 0 : ew.type,
            });
          }, [eO, eC, eR, eN, ey, ek, em.startTime, ew]),
          ex = i.useMemo(
            () => () => (null == M ? void 0 : M(eu === C.A.COMPLETED, er)),
            [M, eu, er],
          ),
          eU = (0, r.Z)(() => Date.now(), [eE]),
          eG = i.useCallback(
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
              if (e === R.h8.CONFIRM && (eD(), null == c || c(i), en)) {
                ex();
                return;
              }
              ec(e), null == Q || Q(e), e_(null);
              let o = null != n ? n : eE;
              if (null === o) {
                h.default.track(D.rMx.PAYMENT_FLOW_LOADED, {
                  ...eO,
                  initial_step: e,
                  has_saved_payment_source: eg,
                });
                return;
              }
              h.default.track(D.rMx.PAYMENT_FLOW_STEP, {
                ...eO,
                ...l,
                from_step: o,
                to_step: e === R.h8.ADD_PAYMENT_STEPS ? R.h8.PAYMENT_TYPE : e,
                step_duration_ms: u - eU,
                flow_duration_ms: u - em.startTime,
              });
            },
            [ec, Q, e_, eE, eO, eU, em.startTime, eD, c, en, ex, eg],
          );
        (0, A.bp)(eE, ef, eG, eo),
          (0, R.dZ)(eE, eu, eo),
          (0, g.p)(eE, eT, eG),
          (0, E.Z)(ex),
          (0, S.w)(ep, () => M(!1), ey),
          (0, A.D6)(ef);
        let eY = (0, O.U)({
          renderHeader: B,
          referralTrialOfferId: $,
          handleClose: ex,
        });
        return (0, l.jsx)(s.Shaker, {
          className: G.shaker,
          isShaking: q && eu === C.A.PURCHASING,
          intensity: 2,
          children: (0, l.jsx)(s.ModalRoot, {
            className: o()(G.root, { [G.withHeader]: null != eY }),
            transitionState: _,
            hideShadow: ee,
            returnRef: et,
            size: eI,
            children: (0, l.jsx)(w.ZP, {
              header: eY,
              isLargeModal: J || (null == ev ? void 0 : ev.isLargeModal),
              initialPlanId: m,
              subscriptionTier: T,
              handleStepChange: eG,
              handleClose: ex,
              analyticsData: eO,
              setAnalyticsData: eb,
              trialId: L,
              trialFooterMessageOverride: Z,
              reviewWarningMessage: b,
              planGroup: Y,
              openInvoiceId: W,
              analyticsLocation: n,
              onSubscriptionConfirmation: F,
              renderPurchaseConfirmation: H,
              postSuccessGuild: j,
              followupSKUInfo: K,
              referralTrialOfferId: $,
              skipConfirm: en,
              continueSession: el,
            }),
          }),
        });
      }
      function W(e) {
        let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: u,
            referralTrialOfferId: o,
            handleClose: r,
            continueSession: s,
          } = e,
          {
            activeSubscription: f,
            blockedPayments: E,
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: A,
            currencyLoading: g,
            selectedSkuId: S,
            setSelectedPlanId: P,
            defaultPlanId: h,
            startedPaymentFlowWithPaymentSourcesRef: v,
            repeatPurchase: I,
          } = (0, N.usePaymentContext)(),
          { isGift: C } = (0, y.wD)(),
          k = v.current,
          O = (0, Z.Z)({ isGift: C, skuId: S, referralTrialOfferId: o }),
          { defaultToMonthlyPlan: w } = T.k.getCurrentConfig(
            { location: "055ec5_1" },
            { autoTrackExposure: !1 },
          ),
          { redirectToPlanSelectStep: D } = m.m.useExperiment(
            { location: "PaymentPredicateStep" },
            { autoTrackExposure: !1 },
          ),
          [U, G] = i.useState(!0),
          Y = (0, a.e7)([M.Z], () => M.Z.applicationIdsFetched.has(x.RQ));
        return (i.useEffect(() => {
          G(!p || !A || g);
        }, [g, A, p]),
        (0, c.Z)(
          "Payment Modal",
          U,
          5,
          {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: A,
            currencyLoading: g,
          },
          { tags: { app_context: "billing" } },
        ),
        i.useEffect(() => {
          if ((!Y && (0, d.yD)(x.RQ), U || E)) return;
          let e = (0, L.Kp)({
            isTrial: O,
            isGift: C,
            selectedSkuId: S,
            startedPaymentFlowWithPaymentSources: k,
          });
          s
            ? u(R.h8.ADD_PAYMENT_STEPS)
            : null != n
              ? u(I && D ? R.h8.PLAN_SELECT : R.h8.REVIEW)
              : e
                ? (P((0, L.nA)(S, f, h)), u(R.h8.REVIEW))
                : null != t
                  ? u(R.h8.PLAN_SELECT)
                  : u(R.h8.SKU_SELECT);
        }, [f, E, Y, n, U, u, t, S, P, w, O, h, C, k, s, I, D]),
        U)
          ? (0, l.jsx)(b.Z, {})
          : E
            ? (0, l.jsx)(_.Vq, { onClose: r })
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
        r = n(481060),
        a = n(479446),
        s = n(646476),
        d = n(104494),
        c = n(639119),
        _ = n(981632),
        f = n(798769),
        E = n(689011),
        m = n(669079),
        T = n(987209),
        p = n(598),
        A = n(409813),
        g = n(981631),
        S = n(474936),
        P = n(231338),
        M = n(900550);
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
          { isGift: k, selectedGiftStyle: L, giftRecipient: Z } = (0, T.wD)(),
          O =
            k &&
            (0, m.pO)(Z) &&
            I === A.h8.CONFIRM &&
            null != L &&
            (null == C ? void 0 : C.productLine) !== g.POd.COLLECTIBLES,
          b = null != n && null != I,
          w = I !== A.h8.SKU_SELECT && null != v,
          D = (0, c.N)(u),
          x = !k && null != D && null != v && S.nG[D.trial_id].skus.includes(v),
          U = (0, d.Ng)(),
          G =
            null == U
              ? void 0
              : null === (t = U.discount) || void 0 === t
                ? void 0
                : t.plan_ids.some((e) => S.GP[e].skuId === v),
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
                  defaultAnimationState: a.S.LOOP,
                  giftStyle: L,
                  className: M.seasonalGiftBoxHeaderIcon,
                }),
                (0, l.jsx)(r.ModalCloseButton, {
                  onClick: h,
                  className: M.closeButton,
                }),
              ],
            });
          else if (b) e = n(null != y ? y : null, h, I);
          else if (R === P.GZ.ONE_TIME)
            e = (0, l.jsx)(E.t, { step: I, onClose: h });
          else if (w)
            o()(v in S.y7, "invalid sku id: ".concat(v)),
              (e = (0, l.jsx)(f.Z, {
                currentStep: null != I ? I : void 0,
                purchaseState: N,
                premiumType: S.y7[v],
                onClose: h,
                showTrialBadge: x,
                showDiscountBadge: Y,
                isGift: k,
                giftRecipient: Z,
                useWinterTheme: H,
              }));
          return e;
        }, [L, h, N, n, y, v, I, x, Y, O, w, b, R, k, Z, H]);
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
        u = n(529449);
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
          return r;
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
      function r(e, t, n) {
        let u = null != t ? (0, l.Af)(t) : null,
          o = i.mn[e],
          r = null != n ? n : o;
        return (
          null != u
            ? r === u.planId && r === i.IW[e]
              ? (r = i.mn[e])
              : r === u.planId && r === i.mn[e]
                ? (r = i.IW[e])
                : (u.planId === i.Xh.PREMIUM_YEAR_TIER_0 ||
                    u.planId === i.Xh.PREMIUM_YEAR_TIER_1) &&
                  r === i.Xh.PREMIUM_MONTH_TIER_2 &&
                  (r = i.Xh.PREMIUM_YEAR_TIER_2)
            : r === i.Xh.PREMIUM_YEAR_TIER_1 && (r = i.Xh.PREMIUM_MONTH_TIER_1),
          r
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
        r = n(580130),
        a = n(74538),
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
                subscriptionManagementLink: (0, a.JE)(
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
          u = (0, i.e7)([r.Z], () => {
            var e;
            return null != n &&
              null !== (e = r.Z.getForSku(n.skuId)) &&
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
            s.length >= a.ZP.getIntervalMonths(n.interval, n.intervalCount),
          entitlements: s,
        };
      }
    },
  },
]);
//# sourceMappingURL=ec5a75048f632c8b3811.js.map
