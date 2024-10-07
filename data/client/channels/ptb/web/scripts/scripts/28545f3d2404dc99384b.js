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
            return j;
          },
          PaymentPredicateStep: function () {
            return K;
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
        m = t(522558),
        T = t(522489),
        p = t(439017),
        g = t(795448),
        A = t(317271),
        P = t(857039),
        S = t(104494),
        M = t(176919),
        h = t(711007),
        v = t(459965),
        y = t(509545),
        I = t(580130),
        N = t(626135),
        C = t(669079),
        R = t(74538),
        L = t(987209),
        k = t(598),
        Z = t(409813),
        O = t(45572),
        b = t(784707),
        w = t(614223),
        x = t(48175),
        D = t(928886),
        U = t(456251),
        G = t(614277),
        Y = t(981631),
        W = t(474936),
        F = t(689938),
        H = t(677825);
      function j(e) {
        let {
            analyticsLocations: n,
            analyticsLocation: t,
            analyticsObject: u,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: d = Y.NYc.PREMIUM,
            onComplete: c,
            transitionState: _,
            initialPlanId: T,
            subscriptionTier: p,
            onClose: I,
            trialId: w,
            trialFooterMessageOverride: x,
            reviewWarningMessage: U,
            planGroup: j = W.Y1,
            openInvoiceId: K,
            onSubscriptionConfirmation: B,
            renderPurchaseConfirmation: V,
            postSuccessGuild: X,
            followupSKUInfo: $,
            renderHeader: z,
            applicationId: q,
            guildId: J,
            referralTrialOfferId: Q,
            skuId: ee,
            onStepChange: en,
            shakeWhilePurchasing: et = !1,
            isLargeModal: el = !1,
            hideShadow: ei = !1,
            returnRef: eu,
            skipConfirm: eo = !1,
            continueSession: ea = !1,
          } = e,
          {
            activitySessionId: er,
            purchaseState: es,
            setPurchaseState: ed,
            selectedSkuId: ec,
            setSelectedSkuId: e_,
            selectedPlan: ef,
            setSelectedPlanId: eE,
            setStep: em,
            setPurchaseError: eT,
            paymentAuthenticationState: ep,
            step: eg,
            contextMetadata: eA,
            purchaseTokenAuthState: eP,
            activeSubscription: eS,
            priceOptions: eM,
            hasPaymentSources: eh,
            paymentSourceId: ev,
            paymentSources: ey,
            purchaseType: eI,
            defaultPlanId: eN,
          } = (0, k.usePaymentContext)(),
          eC = (0, b.Z)(),
          eR =
            el || (null == eC ? void 0 : eC.isLargeModal)
              ? s.ModalSize.LARGE
              : s.ModalSize.SMALL,
          {
            isGift: eL,
            giftRecipient: ek,
            customGiftMessage: eZ,
            emojiConfetti: eO,
            soundEffect: eb,
          } = (0, L.wD)(),
          ew = (0, P.Z)({ location: "Payment Modal" }),
          ex = (0, S.Ng)(),
          eD = null != p && !eL && (0, S.Wp)(ex, p),
          [eU, eG] = i.useState({
            load_id: eA.loadId,
            payment_type: Y.Zuq[eI],
            location: null != t ? t : u,
            source: r,
            subscription_type: d,
            subscription_plan_id: null == ef ? void 0 : ef.id,
            is_gift: eL,
            eligible_for_trial: null != w,
            location_stack: n,
            sku_id: ee,
            application_id: q,
            guild_id: J,
            payment_modal_version: "v1",
            activity_session_id: er,
            eligible_for_discount: eD,
          }),
          eY = null != ev ? ey[ev] : null;
        i.useEffect(() => {
          eG((e) => {
            let n = null != ef ? (0, R.aS)(ef.id, !1, eL, eM) : void 0;
            return {
              ...e,
              subscription_plan_id: null == ef ? void 0 : ef.id,
              price: null == n ? void 0 : n.amount,
              regular_price: null == ef ? void 0 : ef.price,
              currency: eM.currency,
              sku_id: ec,
            };
          });
        }, [ef, ec, eL, eM]),
          i.useEffect(() => {
            (0, f.U)({ ...eU, has_saved_payment_source: eh });
          }, []),
          i.useEffect(() => {
            if ((null != eN && ea ? eE(eN) : eE(T), null != ee)) e_(ee);
            else if (null != T) {
              var e;
              e_(null === (e = y.Z.get(T)) || void 0 === e ? void 0 : e.skuId);
            }
          }, [eE, e_, T, ee, eN, ea]);
        let eW = i.useCallback(() => {
            let e = (0, C.MY)(ek) === C.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
              n = Date.now();
            N.default.track(Y.rMx.PAYMENT_FLOW_SUCCEEDED, {
              ...eU,
              is_custom_message_edited:
                eL && e && null != eZ
                  ? eZ !== F.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE
                  : void 0,
              is_custom_emoji_sound_available: eL && e,
              emoji_name:
                eL && e && (null == eO ? void 0 : eO.id) == null
                  ? null == eO
                    ? void 0
                    : eO.surrogates
                  : void 0,
              sound_id: eL && e ? (null == eb ? void 0 : eb.soundId) : void 0,
              duration_ms: n - eA.startTime,
              payment_source_type: null == eY ? void 0 : eY.type,
            });
            let { enabled: l } = m.w.getCurrentConfig(
              { location: "PaymentModal emitPaymentFlowSuccess" },
              { autoTrackExposure: !1 },
            );
            eL &&
              null != ek &&
              null != t &&
              l &&
              (0, A.n)(t) &&
              (0, g.Ni)(ek.id);
          }, [eU, eO, eZ, ek, eL, eb, eA.startTime, eY, t]),
          eF = i.useMemo(
            () => () => (null == I ? void 0 : I(es === O.A.COMPLETED, ec)),
            [I, es, ec],
          ),
          eH = (0, a.Z)(() => Date.now(), [eg]),
          ej = i.useCallback(
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
              if (e === Z.h8.CONFIRM && (eW(), null == c || c(i), eo)) {
                eF();
                return;
              }
              em(e), null == en || en(e), eT(null);
              let o = null != t ? t : eg;
              if (null === o) {
                N.default.track(Y.rMx.PAYMENT_FLOW_LOADED, {
                  ...eU,
                  initial_step: e,
                  has_saved_payment_source: eh,
                });
                return;
              }
              N.default.track(Y.rMx.PAYMENT_FLOW_STEP, {
                ...eU,
                ...l,
                from_step: o,
                to_step: e === Z.h8.ADD_PAYMENT_STEPS ? Z.h8.PAYMENT_TYPE : e,
                step_duration_ms: u - eH,
                flow_duration_ms: u - eA.startTime,
              });
            },
            [em, en, eT, eg, eU, eH, eA.startTime, eW, c, eo, eF, eh],
          );
        (0, M.bp)(eg, ep, ej, ed),
          (0, Z.dZ)(eg, es, ed),
          (0, h.p)(eg, eP, ej),
          (0, E.Z)(eF),
          (0, v.w)(eS, () => I(!1), eL),
          (0, M.D6)(ep);
        let eK = (0, D.U)({
          renderHeader: z,
          referralTrialOfferId: Q,
          handleClose: eF,
        });
        return (0, l.jsx)(s.Shaker, {
          className: o()(H.shaker, { [H.halloweenModalHeight]: ew }),
          isShaking: et && es === O.A.PURCHASING,
          intensity: 2,
          children: (0, l.jsx)(s.ModalRoot, {
            className: o()(H.root, {
              [H.withHeader]: null != eK,
              [H.halloweenModalHeight]: ew,
            }),
            transitionState: _,
            hideShadow: ei,
            returnRef: eu,
            size: eR,
            children: (0, l.jsx)(G.ZP, {
              header: eK,
              isLargeModal: el || (null == eC ? void 0 : eC.isLargeModal),
              initialPlanId: T,
              subscriptionTier: p,
              handleStepChange: ej,
              handleClose: eF,
              analyticsData: eU,
              setAnalyticsData: eG,
              trialId: w,
              trialFooterMessageOverride: x,
              reviewWarningMessage: U,
              planGroup: j,
              openInvoiceId: K,
              analyticsLocation: t,
              onSubscriptionConfirmation: B,
              renderPurchaseConfirmation: V,
              postSuccessGuild: X,
              followupSKUInfo: $,
              referralTrialOfferId: Q,
              skipConfirm: eo,
              continueSession: ea,
            }),
          }),
        });
      }
      function K(e) {
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
            hasFetchedSubscriptions: m,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: A,
            selectedSkuId: P,
            setSelectedPlanId: S,
            defaultPlanId: M,
            startedPaymentFlowWithPaymentSourcesRef: h,
            repeatPurchase: v,
          } = (0, k.usePaymentContext)(),
          { isGift: y } = (0, L.wD)(),
          N = h.current,
          C = (0, x.Z)({ isGift: y, skuId: P, referralTrialOfferId: o }),
          { defaultToMonthlyPlan: R } = p.k.getCurrentConfig(
            { location: "055ec5_1" },
            { autoTrackExposure: !1 },
          ),
          { redirectToPlanSelectStep: O } = T.m.useExperiment(
            { location: "PaymentPredicateStep" },
            { autoTrackExposure: !1 },
          ),
          [b, D] = i.useState(!0),
          G = (0, r.e7)([I.Z], () => I.Z.applicationIdsFetched.has(W.CL));
        return (i.useEffect(() => {
          D(!m || !g || A);
        }, [A, g, m]),
        (0, c.Z)(
          "Payment Modal",
          b,
          5,
          {
            hasFetchedSubscriptions: m,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: A,
          },
          { tags: { app_context: "billing" } },
        ),
        i.useEffect(() => {
          if ((!G && (0, d.yD)(W.CL), b || E)) return;
          let e = (0, w.Kp)({
            isTrial: C,
            isGift: y,
            selectedSkuId: P,
            startedPaymentFlowWithPaymentSources: N,
          });
          s
            ? u(Z.h8.ADD_PAYMENT_STEPS)
            : null != t
              ? u(v && O ? Z.h8.PLAN_SELECT : Z.h8.REVIEW)
              : e
                ? (S((0, w.nA)(P, f, M)), u(Z.h8.REVIEW))
                : null != n
                  ? u(Z.h8.PLAN_SELECT)
                  : u(Z.h8.SKU_SELECT);
        }, [f, E, G, t, b, u, n, P, S, R, C, M, y, N, s, v, O]),
        b)
          ? (0, l.jsx)(U.Z, {})
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
            step: y,
            selectedPlan: I,
            purchaseState: N,
            purchaseType: C,
            selectedSku: R,
          } = (0, p.usePaymentContext)(),
          { isGift: L, selectedGiftStyle: k, giftRecipient: Z } = (0, T.wD)(),
          O =
            L &&
            (0, m.pO)(Z) &&
            y === g.h8.CONFIRM &&
            null != k &&
            (null == R ? void 0 : R.productLine) !== A.POd.COLLECTIBLES,
          b = null != t && null != y,
          w = y !== g.h8.SKU_SELECT && null != v,
          x = (0, c.N)(u),
          D = !L && null != x && null != v && P.nG[x.trial_id].skus.includes(v),
          U = (0, d.Ng)(),
          G =
            null == U
              ? void 0
              : null === (n = U.discount) || void 0 === n
                ? void 0
                : n.plan_ids.some((e) => P.GP[e].skuId === v),
          Y = !L && null != U && null != v && G,
          { enabled: W } = s.ZP.useExperiment(
            { location: "PaymentModalHeader" },
            { autoTrackExposure: !1 },
          ),
          F = (0, s.rK)(),
          H = W && F;
        return i.useMemo(() => {
          if (null == y) return;
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
          else if (b) e = t(null != I ? I : null, h, y);
          else if (C === S.GZ.ONE_TIME)
            e = (0, l.jsx)(E.t, { step: y, onClose: h });
          else if (w)
            o()(v in P.y7, "invalid sku id: ".concat(v)),
              (e = (0, l.jsx)(f.Z, {
                currentStep: null != y ? y : void 0,
                purchaseState: N,
                premiumType: P.y7[v],
                onClose: h,
                showTrialBadge: D,
                showDiscountBadge: Y,
                isGift: L,
                giftRecipient: Z,
                useWinterTheme: H,
              }));
          return e;
        }, [k, h, N, t, I, v, y, D, Y, O, w, b, C, L, Z, H]);
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
//# sourceMappingURL=28545f3d2404dc99384b.js.map
