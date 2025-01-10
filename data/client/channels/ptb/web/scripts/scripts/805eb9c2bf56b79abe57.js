"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70269"],
  {
    562497: function (e) {
      e.exports = "/assets/ca0f72ee85ec39688aee.svg";
    },
    317768: function (e) {
      e.exports = "/assets/bce13e0bd03fca4e6a64.svg";
    },
    882980: function (e) {
      e.exports = "/assets/6b2bd1c8a0ff293a0e9c.svg";
    },
    269128: function (e, n, t) {
      var o = t(200651);
      t(192379);
      var l = t(120356),
        i = t.n(l),
        r = t(772848),
        a = t(363969);
      let s = (0, r.Z)();
      n.Z = (e) => {
        let { open: n, className: t, withHighlight: l = !1 } = e;
        return (0, o.jsxs)("svg", {
          width: "18",
          height: "18",
          className: i()(a.button, t, { [a.open]: n, [a.withHighlight]: l }),
          children: [
            l &&
              (0, o.jsx)("defs", {
                children: (0, o.jsxs)("linearGradient", {
                  id: s,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, o.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, o.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, o.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, o.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, o.jsx)("path", {
                  stroke: l ? "url(#".concat(s, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  stroke: l ? "url(#".concat(s, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    232127: function (e, n, t) {
      t.d(n, {
        U: function () {
          return p;
        },
      });
      var o = t(737143),
        l = t(926841),
        i = t(213264),
        r = t(626135),
        a = t(91641),
        s = t(959784),
        c = t(987338),
        u = t(981631);
      let d = new a.E(
        [s.NR, s.ZI, s.Ob, s.uc, s.m1, l.b, o.L4, i.u],
        c.$P.PAYMENT_FLOW_STARTED,
        { location: "payment flow started" },
      );
      function p(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        r.default.track(u.rMx.PAYMENT_FLOW_STARTED, e, n), d.trigger();
      }
    },
    959784: function (e, n, t) {
      t.d(n, {
        NR: function () {
          return i;
        },
        Ob: function () {
          return s;
        },
        ZI: function () {
          return r;
        },
        m1: function () {
          return c;
        },
        uc: function () {
          return a;
        },
      });
      var o = t(987170),
        l = t(987338);
      let i = (0, o.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_vanilla",
          label: "CTP payment flow started - A/A test - Vanilla",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        r = (0, o.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_filters_",
          label: "CTP payment flow started - A/A test - Filters",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        a = (0, o.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_multiple_buckets",
          label: "CTP payment flow started - A/A test - Multiple buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment 1", config: { doSomething: !0 } },
            { id: 2, label: "Treatment 2", config: { doSomething: !0 } },
          ],
        }),
        s = (0, o.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_everyone",
          label: "CTP payment flow started - A/A test - Everyone",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        c = (0, o.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_uneven_buckets_",
          label: "CTP payment flow started - A/A test - Uneven buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        });
    },
    518062: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var o = t(200651);
      t(192379);
      var l = t(442837),
        i = t(481060),
        r = t(607070),
        a = t(600164),
        s = t(122890),
        c = t(110818),
        u = t(346007);
      function d(e) {
        let { purchaseState: n, currentStep: t, onClose: d } = e,
          [p, f] = (0, s.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: c.fe.Scenes.ENTRY,
            purchaseScene: c.fe.Scenes.STARS,
            errorScene: c.fe.Scenes.ERROR,
            successScene: c.fe.Scenes.SUCCESS,
          }),
          m = (0, l.e7)([r.Z], () => r.Z.useReducedMotion);
        return (0, o.jsxs)(i.ModalHeader, {
          align: a.Z.Align.START,
          className: u.header,
          separator: !1,
          children: [
            (0, o.jsx)(c.fe, {
              className: u.animation,
              nextScene: p,
              onScenePlay: (e) => f(c.fe.getNextScene(e)),
              pauseWhileUnfocused: !1,
              pause: m,
            }),
            (0, o.jsx)("div", { className: u.headerTitle }),
            (0, o.jsx)(i.ModalCloseButton, {
              onClick: d,
              className: u.closeButton,
            }),
          ],
        });
      }
    },
    343649: function (e, n, t) {
      t.r(n),
        t.d(n, {
          GuildBoostPurchaseModal: function () {
            return et;
          },
          default: function () {
            return eo;
          },
        }),
        t(47120);
      var o,
        l = t(200651),
        i = t(192379),
        r = t(512722),
        a = t.n(r),
        s = t(772848),
        c = t(442837),
        u = t(780384),
        d = t(481060),
        p = t(355467),
        f = t(179360),
        m = t(723484),
        _ = t(211266),
        S = t(493773),
        g = t(330726),
        E = t(100527),
        h = t(906732),
        P = t(15640),
        T = t(89057),
        I = t(600164),
        b = t(232127),
        x = t(563132),
        y = t(409813),
        C = t(45572),
        N = t(98278),
        A = t(431369),
        M = t(176919),
        k = t(3409),
        v = t(185139),
        R = t(210887),
        L = t(430824),
        j = t(314884),
        B = t(975060),
        D = t(853872),
        Z = t(509545),
        O = t(78839),
        U = t(626135),
        w = t(267642),
        F = t(74538),
        W = t(212895),
        G = t(296848),
        Y = t(518062),
        H = t(4434),
        V = t(333451),
        z = t(981631),
        X = t(474936),
        $ = t(231338),
        K = t(388032),
        q = t(122959);
      (o || (o = {})).PREMIUM = "discord://app/settings/nitro";
      let J = X.Xh.NONE_MONTH,
        Q = [y.h8.PLAN_SELECT, y.h8.REVIEW, y.h8.CONFIRM],
        ee = [
          y.h8.PLAN_SELECT,
          y.h8.ADD_PAYMENT_STEPS,
          y.h8.REVIEW,
          y.h8.CONFIRM,
        ];
      async function en(e) {
        await (0, f.X8)();
        let n = (0, w.vx)(j.Z.boostSlots);
        return (0, f.W3)(
          e,
          n.map((e) => e.id),
        );
      }
      function et(e) {
        let n,
          {
            transitionState: t,
            onClose: o,
            closeGuildPerksModal: r,
            analyticsLocations: f,
            analyticsLocation: et,
            analyticsSourceLocation: eo,
            guildId: el,
            onSubscribeComplete: ei,
            totalNumberOfSlotsToAssign: er = 1,
            disablePremiumUpsell: ea = !1,
            onSubscriptionConfirmation: es,
            applicationId: ec,
          } = e,
          { activeSubscription: eu, blockedPayments: ed } = (0,
          x.usePaymentContext)(),
          ep = (0, c.e7)([O.ZP], () => O.ZP.hasFetchedSubscriptions()),
          ef = null != eu ? eu.paymentSourceId : null,
          em = (0, c.e7)([Z.Z], () =>
            null != eu ? (0, G.oE)(eu.planId) : null,
          ),
          e_ = (0, c.e7)([Z.Z], () => null == eu || null != Z.Z.get(eu.planId)),
          eS = (0, c.e7)([Z.Z], () => (null == em ? Z.Z.get(J) : em)),
          eg = (0, c.e7)([R.Z], () => R.Z.theme),
          eE = i.useRef((0, w.vx)(j.Z.boostSlots)).current,
          eh = (0, c.e7)([D.Z], () => D.Z.defaultPaymentSourceId),
          eP = (0, k.fL)(null != ef ? ef : ep ? eh : null),
          {
            paymentSources: eT,
            setPurchaseError: eI,
            paymentSourceId: eb,
            setIsSubmittingCurrentStep: ex,
            paymentAuthenticationState: ey,
            setPaymentSourceId: eC,
            isSubmittingCurrentStep: eN,
            paymentError: eA,
            purchaseError: eM,
            purchaseErrorBlockRef: ek,
          } = eP,
          ev = Object.keys(eT).length > 0,
          [eR, eL] = i.useState(er - eE.length),
          [ej, eB] = i.useState(!1),
          eD = (0, c.e7)([B.Z], () => B.Z.popupCallbackCalled),
          eZ = (0, P.V)(),
          eO = i.useMemo(
            () =>
              null != eu && e_ && eZ
                ? (0, A.g)(eu, eR)
                : [{ planId: X.Xh.PREMIUM_MONTH_GUILD, quantity: eR }],
            [eu, e_, eR, eZ],
          ),
          [eU, ew] = (0, _.Z)(() => [(0, s.Z)(), Date.now()]),
          { analyticsLocations: eF } = (0, h.ZP)(
            f,
            E.Z.GUILD_BOOST_PURCHASE_MODAL,
          ),
          eW = i.useMemo(() => {
            var e, n;
            return {
              load_id: eU,
              payment_type: $.Zu[$.GZ.SUBSCRIPTION],
              sku_id: X.Si.GUILD,
              subscription_type: z.NYc.PREMIUM,
              subscription_plan_id:
                null !==
                  (n =
                    null ===
                      (e = eO.find((e) => {
                        let { planId: n } = e;
                        return X.Z1.has(n);
                      })) || void 0 === e
                      ? void 0
                      : e.planId) && void 0 !== n
                  ? n
                  : X.Xh.PREMIUM_MONTH_GUILD,
              quantity: eR,
              location: et,
              source: eo,
              location_stack: eF,
            };
          }, [eU, et, eF, eo, eO, eR]);
        i.useEffect(() => {
          (0, W.i1)(eb);
        }, [eb]);
        let [eG, eY] = i.useState(y.h8.PLAN_SELECT),
          eH = i.useMemo(() => Date.now(), [eG]),
          eV = i.useCallback(
            (e, n) => {
              eY(e), eI(null);
              let t = Date.now();
              U.default.track(z.rMx.PAYMENT_FLOW_STEP, {
                ...eW,
                from_step: null != n ? n : eG,
                to_step: e === y.h8.ADD_PAYMENT_STEPS ? y.h8.PAYMENT_TYPE : e,
                step_duration_ms: t - eH,
                flow_duration_ms: t - ew,
                guild_id: el,
                application_id: ec,
              });
            },
            [eI, eW, eG, eH, ew, el, ec],
          ),
          ez = {
            baseAnalyticsData: eW,
            flowStartTime: ew,
            guildId: el,
            handleStepChange: eV,
            onSubscribeComplete: ei,
            paymentSourceId: eb,
            setIsSubmittingCurrentStep: ex,
            setPurchaseError: eI,
          },
          eX = i.useRef(ez);
        i.useEffect(() => {
          eX.current = ez;
        }),
          i.useEffect(() => {
            let {
              baseAnalyticsData: e,
              flowStartTime: n,
              guildId: t,
              handleStepChange: o,
              onSubscribeComplete: l,
              paymentSourceId: i,
              setIsSubmittingCurrentStep: r,
              setPurchaseError: a,
            } = eX.current;
            (async () => {
              if (!0 === eD)
                try {
                  if (null == B.Z.redirectedPaymentId) return;
                  await (0, p.OP)(B.Z.redirectedPaymentId),
                    o(y.h8.CONFIRM),
                    eJ(C.A.COMPLETED),
                    null != t && (await en(t)),
                    null != l && l();
                } catch (t) {
                  eJ(C.A.FAIL),
                    a(t),
                    U.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
                      ...e,
                      payment_error_code: null == t ? void 0 : t.code,
                      payment_gateway: z.gg$.STRIPE,
                      payment_source_id: i,
                      duration_ms: Date.now() - n,
                    });
                } finally {
                  r(!1), (0, p.K2)();
                }
            })();
          }, [eD]),
          (0, S.Z)(() => {
            !O.ZP.hasFetchedSubscriptions() && (0, p.jg)(),
              (0, b.U)({ ...eW, guild_id: el, application_id: ec }),
              null != eu &&
                null != eu.renewalMutations &&
                U.default.track(z.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                  location: et,
                  guild_id: el,
                });
          });
        let [e$, eK] = i.useState(Q),
          [eq, eJ] = i.useState(C.A.WAITING),
          [eQ, e0] = i.useState(!0),
          e8 = () => {
            o(eq === C.A.COMPLETED);
          },
          e2 = null != eu && eu.isPurchasedExternally;
        i.useEffect(() => {
          ey !== M.wr.PENDING &&
            eG !== y.h8.CONFIRM &&
            null != ef &&
            (e$ !== Q && eK(Q),
            !Q.includes(eG) && eG !== y.h8.PREMIUM_UPSELL && eV(y.h8.REVIEW)),
            eG === y.h8.ADD_PAYMENT_STEPS && e$ !== ee && eK(ee),
            e2 && eG !== y.h8.PLAN_SELECT && eY(y.h8.PLAN_SELECT);
        }, [eG, eV, e2, ey, eu, ef, e$]),
          (0, M.bp)(eG, ey, eV, eJ),
          (0, y.dZ)(eG, eq, eJ);
        let e1 = i.useRef(null),
          [e7, e9] = (0, g.Z)(!1, 500),
          [e3, e5] = i.useState(null),
          [e4, e6] = i.useState([]),
          [ne, nn] = i.useState(!1),
          nt = i.useMemo(() => JSON.stringify(e4), [e4]);
        i.useEffect(() => {
          let e;
          if (!!eZ)
            null != Z.Z.get(X.Xh.PREMIUM_MONTH_GUILD) &&
              e6((e = (0, W.DE)(X.Xh.PREMIUM_MONTH_GUILD, eb, !1))),
              null == eb && null != eu && null != eu.paymentSourceId
                ? e5(eu.currency)
                : null != e && e5(e[0]);
        }, [eb, eu, eZ, nt]);
        let no = (0, k.vP)({
          paymentModalArgs: eP,
          initialStep: y.h8.PAYMENT_TYPE,
          prependSteps: [y.h8.PLAN_SELECT],
          appendSteps: [y.h8.REVIEW, y.h8.CONFIRM],
          breadcrumpSteps: e$,
          currentBreadcrumpStep: eG,
          onReturn: () => {
            eV(
              Object.values(eT).length < 1 ? y.h8.PLAN_SELECT : y.h8.REVIEW,
              y.h8.PAYMENT_TYPE,
            );
          },
          onComplete: (e) => {
            eV(y.h8.REVIEW, e);
          },
          onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
              o = Date.now();
            U.default.track(z.rMx.PAYMENT_FLOW_STEP, {
              ...eW,
              from_step: n,
              to_step: t,
              step_duration_ms: o - eH,
              flow_duration_ms: o - ew,
              guild_id: el,
            });
          },
        });
        if (ed) n = (0, l.jsx)(T.Vq, { onClose: e8 });
        else if (ep && e_ && eZ && null != e3 && "" !== e3) {
          if (null == eu ? void 0 : eu.isPausedOrPausePending)
            n = (0, l.jsx)(d.ModalContent, {
              children: (0, l.jsx)("p", {
                className: q.copy,
                children: K.intl.string(K.t.mOWsFx),
              }),
            });
          else if (null != eu && null != eu.renewalMutations)
            n = (0, l.jsx)(d.ModalContent, {
              children: (0, l.jsx)("p", {
                className: q.copy,
                children: K.intl.string(K.t.npfhh4),
              }),
            });
          else if (eG === y.h8.PREMIUM_UPSELL) {
            a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
              a()(e3, "Currency not defined");
            let e =
              null != eb
                ? { paymentSourceId: eb, currency: e3 }
                : { currency: e3 };
            n = (0, l.jsx)(V.Z, {
              premiumSubscriptionPlan: eS,
              analyticsLocation: et,
              analyticsSourceLocation: eo,
              onClose: e8,
              onBack: () => eV(y.h8.PLAN_SELECT),
              onSkip: () =>
                eV(null != ef || ev ? y.h8.REVIEW : y.h8.ADD_PAYMENT_STEPS),
              onSubscriptionConfirmation: es,
              priceOptions: e,
            });
          } else {
            let e, t, o, i;
            a()(e3, "Currency not defined");
            let s =
              null != eb
                ? { paymentSourceId: eb, currency: e3 }
                : { currency: e3 };
            switch (eG) {
              case y.h8.PLAN_SELECT:
                a()(null != el, "Missing guildId"),
                  a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, l.jsx)(H.CP, {
                    premiumSubscriptionPlan: eS,
                    numGuildBoosts: eR,
                    setNumGuildBoosts: eL,
                    setForceDisableSubmitButton: e0,
                    premiumSubscription: eu,
                    existingAvailableSlots: eE,
                    onClickPremiumSubscriptionLink: () => {
                      if (__BILLING_STANDALONE__) {
                        window.location.href = "discord://app/settings/nitro";
                        return;
                      }
                      e8(), null != r && r(), (0, N.z)();
                    },
                    guildId: el,
                    priceOptions: s,
                  })),
                  e2 &&
                    null != eu &&
                    null != eu.paymentGateway &&
                    (e = (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(d.FormErrorBlock, {
                          className: q.externalErrorBlock,
                          children: K.intl.format(K.t["/m3Y3t"], {
                            paymentGatewayName: $.Vz[eu.paymentGateway],
                          }),
                        }),
                        e,
                      ],
                    })),
                  (o = (0, l.jsx)(d.Button, {
                    look: d.Button.Looks.LINK,
                    color: (0, u.ap)(eg)
                      ? d.Button.Colors.PRIMARY
                      : d.Button.Colors.WHITE,
                    onClick: e8,
                    children: K.intl.string(K.t.oEAioK),
                  })),
                  (i = (0, l.jsx)(d.Button, {
                    type: "submit",
                    disabled: eQ || 0 === eR || e2,
                    onClick: () => {
                      if (
                        !ea &&
                        (null == em ||
                          em.premiumSubscriptionType !== X.p9.TIER_2)
                      ) {
                        eV(y.h8.PREMIUM_UPSELL);
                        return;
                      }
                      eV(
                        null != ef || ev ? y.h8.REVIEW : y.h8.ADD_PAYMENT_STEPS,
                      );
                    },
                    children: K.intl.string(K.t["3PatS0"]),
                  }));
                break;
              case y.h8.ADD_PAYMENT_STEPS:
                break;
              case y.h8.AWAITING_AUTHENTICATION:
                e = (0, l.jsx)(m.F, { className: q.__invalid_body });
                break;
              case y.h8.REVIEW:
                a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, l.jsx)(H.Gq, {
                    paymentSources: eT,
                    priceOptions: s,
                    currentPremiumSubscription: eu,
                    premiumSubscriptionPaymentSourceId: ef,
                    premiumSubscriptionPlan: eS,
                    newAdditionalPlans: eO,
                    onPaymentSourceChange: (e) => eC(null != e ? e.id : null),
                    onPaymentSourceAdd: () => {
                      eV(y.h8.ADD_PAYMENT_STEPS), eC(null);
                    },
                    onPurchaseTermsChange: eB,
                    legalTermsNodeRef: e1,
                    hasLegalTermsFlash: e7,
                  })),
                  (t = y.h8.PLAN_SELECT),
                  (i = ej
                    ? (0, l.jsx)(d.Button, {
                        color: d.Button.Colors.GREEN,
                        type: "submit",
                        submitting: eN,
                        onClick: async () => {
                          a()(null != eO, "Missing newAdditionalPlans");
                          let e = null != eb ? eT[eb] : null;
                          eI(null);
                          try {
                            if (
                              (eJ(C.A.PURCHASING),
                              ex(!0),
                              a()(null != eb, "Missing paymentSourceId"),
                              U.default.track(z.rMx.PAYMENT_FLOW_COMPLETED, {
                                ...eW,
                                duration_ms: Date.now() - ew,
                                guild_id: el,
                                application_id: ec,
                              }),
                              ne)
                            )
                              return;
                            if (null == eu || null == em) {
                              a()(null != e, "Missing paymentSource");
                              let n = await (0, p.XW)({
                                items: eO,
                                paymentSource: e,
                                currency: s.currency,
                              });
                              if (n.redirectConfirmation) {
                                nn(null != n.redirectURL);
                                return;
                              }
                            } else {
                              let n = { items: (0, F.MY)(eu, eO) };
                              (n.currency = eu.currency),
                                null == n.currency && (n.currency = s.currency),
                                (n.paymentSource =
                                  null != ef ? eT[ef] : void 0),
                                null == n.paymentSource &&
                                  (a()(null != e, "Missing paymentSource"),
                                  (n.paymentSource = e),
                                  (n.currency = s.currency));
                              let t = await (0, p.Mg)(eu, n, eF);
                              if (t.redirectConfirmation) {
                                nn(null != t.redirectURL);
                                return;
                              }
                            }
                            eV(y.h8.CONFIRM),
                              eJ(C.A.COMPLETED),
                              null != el && (await en(el)),
                              null != ei && ei();
                          } catch (n) {
                            eJ(C.A.FAIL),
                              eI(n),
                              U.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
                                ...eW,
                                payment_error_code: null == n ? void 0 : n.code,
                                payment_gateway:
                                  null != e
                                    ? e.type === z.HeQ.CARD
                                      ? z.gg$.STRIPE
                                      : z.gg$.BRAINTREE
                                    : null,
                                payment_source_id: eb,
                                duration_ms: Date.now() - ew,
                              });
                          } finally {
                            !ne && ex(!1);
                          }
                        },
                        children: K.intl.string(K.t.eUEeCg),
                      })
                    : (0, l.jsx)(d.Tooltip, {
                        text: K.intl.string(K.t.XdvBLS),
                        children: (e) =>
                          (0, l.jsx)(d.Button, {
                            ...e,
                            color: d.Button.Colors.GREEN,
                            onClick: () => {
                              null != e1.current &&
                                (e1.current.scrollIntoView({
                                  behavior: "smooth",
                                }),
                                e9(!0));
                            },
                            type: "submit",
                            children: K.intl.string(K.t.eUEeCg),
                          }),
                      }));
                break;
              case y.h8.CONFIRM:
                var nl;
                let c = L.Z.getGuild(el);
                e = (0, l.jsx)(H.R7, {
                  guild: c,
                  guildBoostQuantity: eR + eE.length,
                  onClose: e8,
                  withAnimation: !1,
                  paymentSourceType:
                    null === (nl = eT[null != eb ? eb : ""]) || void 0 === nl
                      ? void 0
                      : nl.type,
                });
            }
            let f = null != eA && null == (0, y.ly)(eA) ? eA : eM;
            n =
              eG === y.h8.ADD_PAYMENT_STEPS
                ? no
                : (0, l.jsx)(v.Z, {
                    hideBreadcrumbs: eG === y.h8.CONFIRM,
                    steps: e$,
                    currentStep: eG,
                    paymentError: f,
                    purchaseErrorBlockRef: ek,
                    hasCurrencies: e4.length > 1,
                    body: e,
                    footer:
                      eG !== y.h8.CONFIRM
                        ? (0, l.jsxs)(d.ModalFooter, {
                            direction: I.Z.Direction.HORIZONTAL,
                            align: I.Z.Align.CENTER,
                            justify: I.Z.Justify.END,
                            children: [
                              null != t
                                ? (0, l.jsx)("div", {
                                    className: q.backStep,
                                    children: (0, l.jsx)(d.Button, {
                                      color: (0, u.ap)(eg)
                                        ? d.Button.Colors.PRIMARY
                                        : d.Button.Colors.WHITE,
                                      look: d.Button.Looks.LINK,
                                      size: d.Button.Sizes.NONE,
                                      onClick: () => {
                                        null != t && eV(t);
                                      },
                                      children: K.intl.string(K.t["13/7kZ"]),
                                    }),
                                  })
                                : null,
                              (0, l.jsxs)("div", {
                                className: q.footerRight,
                                children: [o, i],
                              }),
                            ],
                          })
                        : null,
                  });
          }
        } else
          n = (0, l.jsx)("div", {
            className: q.loadingWrapper,
            children: (0, l.jsx)(d.Spinner, {}),
          });
        let ni = null;
        return (
          !ed &&
            eG !== y.h8.PREMIUM_UPSELL &&
            (ni = (0, l.jsx)(Y.Z, {
              onClose: e8,
              currentStep: eG,
              purchaseState: eq,
            })),
          (0, l.jsxs)(d.ModalRoot, { transitionState: t, children: [ni, n] })
        );
      }
      function eo(e) {
        let n = (0, c.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: t } = (0, h.ZP)(E.Z.GUILD_BOOST_PURCHASE_MODAL);
        return (0, l.jsx)(h.Gt, {
          value: t,
          children: (0, l.jsx)(x.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(et, { ...e }),
          }),
        });
      }
    },
    333451: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      });
      var o = t(200651),
        l = t(192379),
        i = t(120356),
        r = t.n(i),
        a = t(442837),
        s = t(780384),
        c = t(481060),
        u = t(100527),
        d = t(906732),
        p = t(600164),
        f = t(963249),
        m = t(639119),
        _ = t(165583),
        S = t(263954),
        g = t(706454),
        E = t(709586),
        h = t(626135),
        P = t(930153),
        T = t(74538),
        I = t(937615),
        b = t(981631),
        x = t(474936),
        y = t(388032),
        C = t(427930);
      function N(e) {
        let { shouldUpsellFromNoneTier: n } = e,
          t = (0, a.e7)([g.default], () => g.default.locale);
        return (0, o.jsxs)("div", {
          className: C.perksList,
          children: [
            (0, o.jsx)(S.Z, {
              icon: E.Z,
              iconClassName: C.perkIconGuild,
              description: y.intl.formatToPlainString(y.t.sQBgs7, {
                numFreeGuildSubscriptions: x.cb,
              }),
            }),
            (0, o.jsx)(S.Z, {
              icon: E.Z,
              iconClassName: C.perkIconGuild,
              description: y.intl.formatToPlainString(y.t["1A6vXl"], {
                percent: (0, P.T3)(t, x.Rr / 100),
              }),
            }),
            n
              ? (0, o.jsx)(S.Z, {
                  icon: c.ReactionIcon,
                  iconClassName: C.perkIconChatPerks,
                  description: y.intl.string(y.t.Z9b2x8),
                })
              : null,
            (0, o.jsx)(S.Z, {
              icon: c.ScreenArrowIcon,
              iconClassName: C.perkIconStream,
              description: y.intl.string(y.t["8dqG5O"]),
            }),
            (0, o.jsx)(S.Z, {
              icon: c.UploadIcon,
              iconClassName: C.perkIconUpload,
              description: y.intl.string(y.t.cBorIy),
            }),
          ],
        });
      }
      function A(e) {
        var n;
        let {
            premiumSubscriptionPlan: t,
            onClose: i,
            onBack: a,
            onSkip: S,
            onSubscriptionConfirmation: g,
            analyticsLocation: E,
            analyticsSourceLocation: P,
            priceOptions: A,
          } = e,
          { analyticsLocations: M, sourceAnalyticsLocations: k } = (0, d.ZP)(
            u.Z.GUILD_BOOSTING_PREMIUM_UPSELL,
          ),
          { theme: v } = (0, c.useThemeContext)(),
          R = (0, s.ap)(v) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
          L = null == t || null == t.premiumSubscriptionType,
          j = T.ZP.getPrice(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, A),
          B = (0, I.T4)(j.amount, j.currency),
          D = (0, m.N)(),
          Z = null == D ? void 0 : D.trial_id,
          O =
            (null == D
              ? void 0
              : null === (n = D.subscription_trial) || void 0 === n
                ? void 0
                : n.sku_id) === x.Si.TIER_2;
        return (
          l.useEffect(() => {
            h.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
              type: x.cd.GUILD_PREMIUM_UPSELL_MODAL,
              location_stack: k,
            });
          }, [k]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(c.ModalContent, {
                className: C.content,
                children: [
                  (0, o.jsx)(c.ModalCloseButton, {
                    onClick: i,
                    className: C.closeButton,
                  }),
                  O && (0, o.jsx)(_.dz, { className: C.premiumTrialBadge }),
                  (0, o.jsx)("div", {
                    className: r()(C.upsellImage, {
                      [C.upsellImageWithTrialOffer]: O,
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: C.bodyText,
                    children:
                      null != Z
                        ? y.intl.string(y.t.AoSzEh)
                        : y.intl.format(y.t["7vePZW"], { monthlyPrice: B }),
                  }),
                  (0, o.jsx)(N, { shouldUpsellFromNoneTier: L }),
                ],
              }),
              (0, o.jsxs)(c.ModalFooter, {
                align: p.Z.Align.CENTER,
                justify: p.Z.Justify.END,
                children: [
                  (0, o.jsxs)("div", {
                    className: C.footerRight,
                    children: [
                      (0, o.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: R,
                        onClick: S,
                        children: y.intl.string(y.t["SI/adn"]),
                      }),
                      (0, o.jsx)(c.Button, {
                        color: c.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => {
                          i(),
                            (0, f.Z)({
                              initialPlanId: null,
                              subscriptionTier: x.Si.TIER_2,
                              analyticsLocations: M,
                              analyticsObject: {
                                ...E,
                                section: b.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
                              },
                              analyticsSourceLocation: P,
                              onSubscriptionConfirmation: g,
                              trialId: Z,
                            });
                        },
                        children:
                          null != Z
                            ? y.intl.string(y.t["Gd/XHB"])
                            : y.intl.string(y.t.p2moio),
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: C.backStep,
                    children: (0, o.jsx)(c.Button, {
                      color: R,
                      look: c.Button.Looks.LINK,
                      size: c.Button.Sizes.NONE,
                      onClick: () => a(),
                      children: y.intl.string(y.t["13/7kZ"]),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    586585: function (e, n, t) {
      t.d(n, {
        g: function () {
          return l;
        },
      });
      var o,
        l,
        i = t(200651);
      t(192379);
      var r = t(481060),
        a = t(600164),
        s = t(612853),
        c = t(388032),
        u = t(659915);
      ((o = l || (l = {}))[(o.CONTINUE = 0)] = "CONTINUE"),
        (o[(o.UPGRADE = 1)] = "UPGRADE"),
        (o[(o.PURCHASE = 2)] = "PURCHASE");
      let d = (e) => {
        let {
          onBack: n,
          backText: t,
          primaryIcon: o,
          primaryCTA: l,
          primaryType: d,
          primaryText: p,
          primaryTooltip: f,
          primaryDisabled: m,
          primarySubmitting: _,
          onPrimary: S,
          secondaryText: g,
          onSecondary: E,
        } = e;
        return (0, i.jsxs)(r.ModalFooter, {
          justify: a.Z.Justify.BETWEEN,
          align: a.Z.Align.CENTER,
          children: [
            (() => {
              if (null == l || null == p) return null;
              let e = 2 === l ? r.ShinyButton : r.Button,
                n = {
                  innerClassName: u.button,
                  type: d,
                  disabled: m,
                  submitting: _,
                  color:
                    0 === l ? r.Button.Colors.BRAND : r.Button.Colors.GREEN,
                  onClick: S,
                };
              return null != f
                ? (0, i.jsx)(r.Tooltip, {
                    text: f,
                    children: (t) =>
                      (0, i.jsxs)(e, {
                        ...t,
                        ...n,
                        children: [
                          null == o
                            ? null
                            : (0, i.jsx)(o, {
                                color: "currentColor",
                                className: u.primaryIcon,
                              }),
                          p,
                        ],
                      }),
                  })
                : (0, i.jsxs)(e, {
                    ...n,
                    children: [
                      null == o
                        ? null
                        : (0, i.jsx)(o, {
                            color: "currentColor",
                            className: u.primaryIcon,
                          }),
                      p,
                    ],
                  });
            })(),
            null == g
              ? null
              : (0, i.jsx)(r.Button, {
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  onClick: E,
                  children: g,
                }),
            (0, i.jsx)(s.Z, {}),
            null == n
              ? null
              : (0, i.jsx)(r.Button, {
                  className: u.back,
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  onClick: n,
                  children: null != t ? t : c.intl.string(c.t["13/7kZ"]),
                }),
          ],
        });
      };
      (d.CTAType = l), (n.Z = d);
    },
    612853: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var o = t(200651);
      t(192379);
      var l = t(120356),
        i = t.n(l),
        r = t(481060),
        a = t(388032),
        s = t(221309),
        c = t(652849);
      function u() {
        return (0, o.jsxs)("div", {
          className: i()(s.paymentModalLockIcon, c.flex, c.alignCenter),
          children: [
            (0, o.jsx)(r.LockIcon, {
              size: "sm",
              color: "currentColor",
              className: s.lockIcon,
            }),
            (0, o.jsx)(r.Text, {
              variant: "text-sm/medium",
              children: a.intl.string(a.t.Kv6Z4O),
            }),
          ],
        });
      }
    },
    614277: function (e, n, t) {
      t.d(n, {
        C3: function () {
          return S;
        },
        O3: function () {
          return g;
        },
        ZP: function () {
          return _;
        },
      });
      var o = t(200651),
        l = t(192379),
        i = t(120356),
        r = t.n(i),
        a = t(512722),
        s = t.n(a),
        c = t(995295),
        u = t(481060),
        d = t(540059),
        p = t(563132),
        f = t(409813),
        m = t(135970);
      function _(e) {
        var n, t, i, a, c, _;
        let {
            header: S,
            isLargeModal: g,
            isDynamicModal: E,
            stepProps: h,
          } = (function (e) {
            let { header: n, isLargeModal: t, isDynamicModal: o, ...l } = e;
            return {
              header: n,
              isLargeModal: t,
              isDynamicModal: o,
              stepProps: l,
            };
          })(e),
          {
            step: P,
            stepConfigs: T,
            setBodyNode: I,
            setFooterNode: b,
            setModalOverlayNode: x,
            setReadySlideId: y,
          } = (0, p.usePaymentContext)(),
          C = T.find((e) => e.key === P);
        l.useEffect(() => {
          x(null);
        }, [P, x]),
          s()(null != C, "Unknown step for current payment flow.");
        let N =
            null !==
              (c =
                null == C
                  ? void 0
                  : null === (n = C.options) || void 0 === n
                    ? void 0
                    : n.hideSlider) &&
            void 0 !== c &&
            c,
          A =
            null == C
              ? void 0
              : null === (t = C.options) || void 0 === t
                ? void 0
                : t.bodyClassName,
          M =
            null == C
              ? void 0
              : null === (i = C.options) || void 0 === i
                ? void 0
                : i.sliderBodyClassName;
        void 0 !== g && g
          ? (M = m.sliderBodyLarge)
          : E && (M = m.sliderBodyDynamic);
        let k = (0, d.Q3)("PaymentModalStep");
        return (0, o.jsxs)(o.Fragment, {
          children: [
            null ===
              (_ =
                null == C
                  ? void 0
                  : null === (a = C.options) || void 0 === a
                    ? void 0
                    : a.renderHeader) ||
            void 0 === _ ||
            _
              ? S
              : null,
            C.renderStep(h),
            null == P || N
              ? null
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(u.ModalContent, {
                      className: r()(A, m.body, {
                        [m.reviewStep]: P === f.h8.REVIEW,
                        [m.addPaymentSteps]: P === f.h8.ADD_PAYMENT_STEPS,
                      }),
                      children: (0, o.jsx)(u.Slides, {
                        activeSlide: P,
                        centered: !1,
                        onSlideReady: (e) => y(e),
                        width:
                          k && P === f.h8.ADD_PAYMENT_STEPS ? "100%" : void 0,
                        children: T.filter((e) => null != e.key).map((e) =>
                          (0, o.jsx)(
                            u.Slide,
                            {
                              id: e.key,
                              children: (0, o.jsx)("form", {
                                className: r()(m.sliderBody, M),
                                ref: (e) => I(e),
                                onSubmit: (e) => e.preventDefault(),
                              }),
                            },
                            e.key,
                          ),
                        ),
                      }),
                    }),
                    (0, o.jsx)("div", { ref: (e) => b(e) }),
                    (0, o.jsx)("div", { ref: (e) => x(e) }),
                  ],
                }),
          ],
        });
      }
      function S(e) {
        let { children: n } = e,
          { bodyNode: t } = (0, p.usePaymentContext)();
        return null == t ? null : c.createPortal(n, t);
      }
      function g(e) {
        let { children: n } = e,
          { footerNode: t } = (0, p.usePaymentContext)();
        return null == t ? null : c.createPortal(n, t);
      }
    },
    213264: function (e, n, t) {
      t.d(n, {
        s: function () {
          return r;
        },
        u: function () {
          return i;
        },
      });
      var o = t(818083),
        l = t(987338);
      let i = (0, o.B)({
        id: "2024-11_nitro_basic_upsell",
        label: "Nitro Basic Upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: l.$P.PAYMENT_FLOW_STARTED,
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        return i.getCurrentConfig({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    431369: function (e, n, t) {
      t.d(n, {
        g: function () {
          return c;
        },
      }),
        t(411104),
        t(47120);
      var o = t(512722),
        l = t.n(o),
        i = t(509545),
        r = t(74538),
        a = t(474936),
        s = t(981631);
      function c(e, n) {
        let t = i.Z.get(e.planId);
        l()(null != t, "missing premium subscription plan");
        let o = i.Z.getForSkuAndInterval(
          (0, r.Wz)(a.Si.GUILD),
          t.interval,
          t.intervalCount,
        );
        l()(null != o, "missing premium guild plan");
        let c =
            null != e.renewalMutations
              ? e.renewalMutations.additionalPlans
              : e.additionalPlans,
          u = (e.status === s.O0b.CANCELED ? 0 : (0, r.uV)(c)) + n,
          d = c.filter((e) => e.planId !== o.id);
        if (u < 0) throw Error("Invalid adjustment");
        return 0 === u ? d : [...d, { planId: o.id, quantity: u }];
      }
    },
    122890: function (e, n, t) {
      t.d(n, {
        z: function () {
          return r;
        },
      }),
        t(47120);
      var o = t(192379),
        l = t(409813),
        i = t(45572);
      function r(e) {
        let {
            purchaseState: n,
            currentStep: t,
            initialScene: r,
            purchaseScene: a,
            errorScene: s,
            successScene: c,
          } = e,
          [u, d] = (0, o.useState)(r);
        return (
          (0, o.useEffect)(() => {
            n === i.A.PURCHASING ? d(a) : n === i.A.FAIL && d(s);
          }, [n, a, s]),
          (0, o.useEffect)(() => {
            t === l.h8.CONFIRM && d(c);
          }, [t, c]),
          [u, d]
        );
      }
    },
    263954: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var o = t(200651);
      t(192379);
      var l = t(120356),
        i = t.n(l),
        r = t(775475);
      function a(e) {
        let { icon: n, iconClassName: t, description: l, color: a } = e;
        return (0, o.jsxs)("div", {
          className: r.perkRow,
          children: [
            (0, o.jsx)("div", {
              className: r.perkIconContainer,
              children: (0, o.jsx)(n, {
                color: null != a ? a : "currentColor",
                className: i()(r.perkIcon, t),
              }),
            }),
            (0, o.jsx)("div", { className: r.perkDescription, children: l }),
          ],
        });
      }
    },
    363969: function (e, n, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    346007: function (e, n, t) {
      e.exports = {
        header: "header_f56ad2",
        animation: "animation_f56ad2",
        headerTitle: "headerTitle_f56ad2",
        closeButton: "closeButton_f56ad2",
      };
    },
    122959: function (e, n, t) {
      e.exports = {
        externalErrorBlock: "externalErrorBlock_eeab8f",
        footerRight: "footerRight_eeab8f",
        backStep: "backStep_eeab8f",
        copy: "copy_eeab8f",
        loadingWrapper: "loadingWrapper_eeab8f",
      };
    },
    833887: function (e, n, t) {
      e.exports = {
        bodyText: "bodyText_f875f7",
        planSelectText: "planSelectText_f875f7",
        planSelectRow: "planSelectRow_f875f7",
        planSelectorWrapper: "planSelectorWrapper_f875f7",
        planSelectorLabel: "planSelectorLabel_f875f7",
        planSelectorPreviewPrice: "planSelectorPreviewPrice_f875f7",
        planSelectDivider: "planSelectDivider_f875f7",
        planSelectorSubtotal: "planSelectorSubtotal_f875f7",
        paymentSourceWrapper: "paymentSourceWrapper_f875f7",
        confirmationContainer: "confirmationContainer_f875f7",
        confirmationAnimation: "confirmationAnimation_f875f7",
        confirmationUpgradedBanner: "confirmationUpgradedBanner_f875f7",
        confirmationText: "confirmationText_f875f7",
        existingSlotNotice: "existingSlotNotice_f875f7",
        existingSlotIcon: "existingSlotIcon_f875f7",
        existingSlotTooltipWarningIcon: "existingSlotTooltipWarningIcon_f875f7",
        loadingSpinner: "loadingSpinner_f875f7",
        reverseTrialContextInfoDivider: "reverseTrialContextInfoDivider_f875f7",
        reverseTrialContextText: "reverseTrialContextText_f875f7",
        reverseTrialContextMarginBottom:
          "reverseTrialContextMarginBottom_f875f7",
      };
    },
    427930: function (e, n, t) {
      e.exports = {
        content: "content_cf948e",
        closeButton: "closeButton_cf948e",
        upsellImage: "upsellImage_cf948e",
        upsellImageWithTrialOffer: "upsellImageWithTrialOffer_cf948e",
        premiumTrialBadge: "premiumTrialBadge_cf948e",
        bodyText: "bodyText_cf948e",
        perksList: "perksList_cf948e",
        perkIconGuild: "perkIconGuild_cf948e",
        perkIconUpload: "perkIconUpload_cf948e",
        perkIconStream: "perkIconStream_cf948e",
        perkIconChatPerks: "perkIconChatPerks_cf948e",
        backStep: "backStep_cf948e",
        footerRight: "footerRight_cf948e",
      };
    },
    659915: function (e, n, t) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    221309: function (e, n, t) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    135970: function (e, n, t) {
      e.exports = {
        body: "body_bf926b",
        reviewStep: "reviewStep_bf926b",
        sliderBody: "sliderBody_bf926b",
        addPaymentSteps: "addPaymentSteps_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
        sliderBodyDynamic: "sliderBodyDynamic_bf926b",
      };
    },
    280099: function (e, n, t) {
      e.exports = {
        tier2Animation: "tier2Animation_bfbba7",
        panningAnimation: "panningAnimation_bfbba7",
        tier2Background: "tier2Background_bfbba7 panningAnimationInner_bfbba7",
        tier2Foreground: "tier2Foreground_bfbba7 panningAnimationInner_bfbba7",
        guildWrapper: "guildWrapper_bfbba7",
        guildBackground: "guildBackground_bfbba7",
        guildStar: "guildStar_bfbba7",
        sequencedAnimation: "sequencedAnimation_bfbba7",
      };
    },
    99182: function (e, n, t) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    66294: function (e, n, t) {
      e.exports = {
        upsellFooter: "upsellFooter_a26a1a",
        upsellFooterIcon: "upsellFooterIcon_a26a1a",
        reverseTrialUpsellContainer: "reverseTrialUpsellContainer_a26a1a",
        unlockIcon: "unlockIcon_a26a1a",
        upsellText: "upsellText_a26a1a",
      };
    },
    775475: function (e, n, t) {
      e.exports = {
        perkRow: "perkRow_a899f7",
        perkIconContainer: "perkIconContainer_a899f7",
        perkIcon: "perkIcon_a899f7",
        perkDescription: "perkDescription_a899f7",
      };
    },
  },
]);
//# sourceMappingURL=805eb9c2bf56b79abe57.js.map
