"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94680"],
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
        a = t(716886);
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
        u = t(71464);
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
            return el;
          },
          default: function () {
            return ei;
          },
        }),
        t(47120);
      var o,
        l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(512722),
        c = t.n(s),
        u = t(772848),
        d = t(442837),
        p = t(780384),
        f = t(481060),
        m = t(355467),
        _ = t(179360),
        S = t(723484),
        E = t(211266),
        g = t(493773),
        h = t(330726),
        P = t(100527),
        T = t(906732),
        I = t(15640),
        b = t(89057),
        x = t(600164),
        C = t(232127),
        y = t(563132),
        N = t(409813),
        A = t(45572),
        M = t(98278),
        k = t(431369),
        v = t(176919),
        L = t(3409),
        R = t(185139),
        j = t(210887),
        B = t(430824),
        D = t(314884),
        Z = t(975060),
        O = t(853872),
        U = t(509545),
        w = t(78839),
        F = t(626135),
        W = t(267642),
        G = t(74538),
        Y = t(212895),
        H = t(296848),
        V = t(518062),
        z = t(4434),
        X = t(333451),
        $ = t(981631),
        K = t(474936),
        q = t(231338),
        J = t(388032),
        Q = t(240630);
      (o || (o = {})).PREMIUM = "discord://app/settings/nitro";
      let ee = K.Xh.NONE_MONTH,
        en = [N.h8.PLAN_SELECT, N.h8.REVIEW, N.h8.CONFIRM],
        et = [
          N.h8.PLAN_SELECT,
          N.h8.ADD_PAYMENT_STEPS,
          N.h8.REVIEW,
          N.h8.CONFIRM,
        ];
      async function eo(e) {
        await (0, _.X8)();
        let n = (0, W.vx)(D.Z.boostSlots);
        return (0, _.W3)(
          e,
          n.map((e) => e.id),
        );
      }
      function el(e) {
        let n,
          {
            transitionState: t,
            onClose: o,
            closeGuildPerksModal: r,
            analyticsLocations: s,
            analyticsLocation: _,
            analyticsSourceLocation: el,
            guildId: ei,
            onSubscribeComplete: er,
            totalNumberOfSlotsToAssign: ea = 1,
            disablePremiumUpsell: es = !1,
            onSubscriptionConfirmation: ec,
            applicationId: eu,
          } = e,
          { activeSubscription: ed, blockedPayments: ep } = (0,
          y.usePaymentContext)(),
          ef = (0, d.e7)([w.ZP], () => w.ZP.hasFetchedSubscriptions()),
          em = null != ed ? ed.paymentSourceId : null,
          e_ = (0, d.e7)([U.Z], () =>
            null != ed ? (0, H.oE)(ed.planId) : null,
          ),
          eS = (0, d.e7)([U.Z], () => null == ed || null != U.Z.get(ed.planId)),
          eE = (0, d.e7)([U.Z], () => (null == e_ ? U.Z.get(ee) : e_)),
          eg = (0, d.e7)([j.Z], () => j.Z.theme),
          eh = i.useRef((0, W.vx)(D.Z.boostSlots)).current,
          eP = (0, d.e7)([O.Z], () => O.Z.defaultPaymentSourceId),
          eT = (0, L.fL)(null != em ? em : ef ? eP : null),
          {
            paymentSources: eI,
            setPurchaseError: eb,
            paymentSourceId: ex,
            setIsSubmittingCurrentStep: eC,
            paymentAuthenticationState: ey,
            setPaymentSourceId: eN,
            isSubmittingCurrentStep: eA,
            paymentError: eM,
            purchaseError: ek,
            purchaseErrorBlockRef: ev,
          } = eT,
          eL = Object.keys(eI).length > 0,
          [eR, ej] = i.useState(ea - eh.length),
          [eB, eD] = i.useState(!1),
          eZ = (0, d.e7)([Z.Z], () => Z.Z.popupCallbackCalled),
          eO = (0, I.V)(),
          eU = i.useMemo(
            () =>
              null != ed && eS && eO
                ? (0, k.g)(ed, eR)
                : [{ planId: K.Xh.PREMIUM_MONTH_GUILD, quantity: eR }],
            [ed, eS, eR, eO],
          ),
          [ew, eF] = (0, E.Z)(() => [(0, u.Z)(), Date.now()]),
          { analyticsLocations: eW } = (0, T.ZP)(
            s,
            P.Z.GUILD_BOOST_PURCHASE_MODAL,
          ),
          eG = i.useMemo(() => {
            var e, n;
            return {
              load_id: ew,
              payment_type: q.Zu[q.GZ.SUBSCRIPTION],
              sku_id: K.Si.GUILD,
              subscription_type: $.NYc.PREMIUM,
              subscription_plan_id:
                null !==
                  (n =
                    null ===
                      (e = eU.find((e) => {
                        let { planId: n } = e;
                        return K.Z1.has(n);
                      })) || void 0 === e
                      ? void 0
                      : e.planId) && void 0 !== n
                  ? n
                  : K.Xh.PREMIUM_MONTH_GUILD,
              quantity: eR,
              location: _,
              source: el,
              location_stack: eW,
            };
          }, [ew, _, eW, el, eU, eR]);
        i.useEffect(() => {
          (0, Y.i1)(ex);
        }, [ex]);
        let [eY, eH] = i.useState(N.h8.PLAN_SELECT),
          eV = i.useMemo(() => Date.now(), [eY]),
          ez = i.useCallback(
            (e, n) => {
              eH(e), eb(null);
              let t = Date.now();
              F.default.track($.rMx.PAYMENT_FLOW_STEP, {
                ...eG,
                from_step: null != n ? n : eY,
                to_step: e === N.h8.ADD_PAYMENT_STEPS ? N.h8.PAYMENT_TYPE : e,
                step_duration_ms: t - eV,
                flow_duration_ms: t - eF,
                guild_id: ei,
                application_id: eu,
              });
            },
            [eb, eG, eY, eV, eF, ei, eu],
          ),
          eX = {
            baseAnalyticsData: eG,
            flowStartTime: eF,
            guildId: ei,
            handleStepChange: ez,
            onSubscribeComplete: er,
            paymentSourceId: ex,
            setIsSubmittingCurrentStep: eC,
            setPurchaseError: eb,
          },
          e$ = i.useRef(eX);
        i.useEffect(() => {
          e$.current = eX;
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
            } = e$.current;
            (async () => {
              if (!0 === eZ)
                try {
                  if (null == Z.Z.redirectedPaymentId) return;
                  await (0, m.OP)(Z.Z.redirectedPaymentId),
                    o(N.h8.CONFIRM),
                    eQ(A.A.COMPLETED),
                    null != t && (await eo(t)),
                    null != l && l();
                } catch (t) {
                  eQ(A.A.FAIL),
                    a(t),
                    F.default.track($.rMx.PAYMENT_FLOW_FAILED, {
                      ...e,
                      payment_error_code: null == t ? void 0 : t.code,
                      payment_gateway: $.gg$.STRIPE,
                      payment_source_id: i,
                      duration_ms: Date.now() - n,
                    });
                } finally {
                  r(!1), (0, m.K2)();
                }
            })();
          }, [eZ]),
          (0, g.Z)(() => {
            !w.ZP.hasFetchedSubscriptions() && (0, m.jg)(),
              (0, C.U)({ ...eG, guild_id: ei, application_id: eu }),
              null != ed &&
                null != ed.renewalMutations &&
                F.default.track($.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                  location: _,
                  guild_id: ei,
                });
          });
        let [eK, eq] = i.useState(en),
          [eJ, eQ] = i.useState(A.A.WAITING),
          [e0, e8] = i.useState(!0),
          e1 = () => {
            o(eJ === A.A.COMPLETED);
          },
          e2 = null != ed && ed.isPurchasedExternally;
        i.useEffect(() => {
          ey !== v.wr.PENDING &&
            eY !== N.h8.CONFIRM &&
            null != em &&
            (eK !== en && eq(en),
            !en.includes(eY) && eY !== N.h8.PREMIUM_UPSELL && ez(N.h8.REVIEW)),
            eY === N.h8.ADD_PAYMENT_STEPS && eK !== et && eq(et),
            e2 && eY !== N.h8.PLAN_SELECT && eH(N.h8.PLAN_SELECT);
        }, [eY, ez, e2, ey, ed, em, eK]),
          (0, v.bp)(eY, ey, ez, eQ),
          (0, N.dZ)(eY, eJ, eQ);
        let e7 = i.useRef(null),
          [e3, e4] = (0, h.Z)(!1, 500),
          [e6, e9] = i.useState(null),
          [e5, ne] = i.useState([]),
          [nn, nt] = i.useState(!1),
          no = i.useMemo(() => JSON.stringify(e5), [e5]);
        i.useEffect(() => {
          let e;
          if (!!eO)
            null != U.Z.get(K.Xh.PREMIUM_MONTH_GUILD) &&
              ne((e = (0, Y.DE)(K.Xh.PREMIUM_MONTH_GUILD, ex, !1))),
              null == ex && null != ed && null != ed.paymentSourceId
                ? e9(ed.currency)
                : null != e && e9(e[0]);
        }, [ex, ed, eO, no]);
        let nl = (0, L.vP)({
          paymentModalArgs: eT,
          initialStep: N.h8.PAYMENT_TYPE,
          prependSteps: [N.h8.PLAN_SELECT],
          appendSteps: [N.h8.REVIEW, N.h8.CONFIRM],
          breadcrumpSteps: eK,
          currentBreadcrumpStep: eY,
          onReturn: () => {
            ez(
              Object.values(eI).length < 1 ? N.h8.PLAN_SELECT : N.h8.REVIEW,
              N.h8.PAYMENT_TYPE,
            );
          },
          onComplete: (e) => {
            ez(N.h8.REVIEW, e);
          },
          onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
              o = Date.now();
            F.default.track($.rMx.PAYMENT_FLOW_STEP, {
              ...eG,
              from_step: n,
              to_step: t,
              step_duration_ms: o - eV,
              flow_duration_ms: o - eF,
              guild_id: ei,
            });
          },
        });
        if (ep) n = (0, l.jsx)(b.Vq, { onClose: e1 });
        else if (ef && eS && eO && null != e6 && "" !== e6) {
          if (null == ed ? void 0 : ed.isPausedOrPausePending)
            n = (0, l.jsx)(f.ModalContent, {
              children: (0, l.jsx)("p", {
                className: Q.copy,
                children: J.intl.string(J.t.mOWsFx),
              }),
            });
          else if (null != ed && null != ed.renewalMutations)
            n = (0, l.jsx)(f.ModalContent, {
              children: (0, l.jsx)("p", {
                className: Q.copy,
                children: J.intl.string(J.t.npfhh4),
              }),
            });
          else if (eY === N.h8.PREMIUM_UPSELL) {
            c()(null != eE, "Missing nextPremiumSubscriptionPlan"),
              c()(e6, "Currency not defined");
            let e =
              null != ex
                ? { paymentSourceId: ex, currency: e6 }
                : { currency: e6 };
            n = (0, l.jsx)(X.Z, {
              premiumSubscriptionPlan: eE,
              analyticsLocation: _,
              analyticsSourceLocation: el,
              onClose: e1,
              onBack: () => ez(N.h8.PLAN_SELECT),
              onSkip: () =>
                ez(null != em || eL ? N.h8.REVIEW : N.h8.ADD_PAYMENT_STEPS),
              onSubscriptionConfirmation: ec,
              priceOptions: e,
            });
          } else {
            let e, t, o, i;
            c()(e6, "Currency not defined");
            let a =
              null != ex
                ? { paymentSourceId: ex, currency: e6 }
                : { currency: e6 };
            switch (eY) {
              case N.h8.PLAN_SELECT:
                c()(null != ei, "Missing guildId"),
                  c()(null != eE, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, l.jsx)(z.CP, {
                    premiumSubscriptionPlan: eE,
                    numGuildBoosts: eR,
                    setNumGuildBoosts: ej,
                    setForceDisableSubmitButton: e8,
                    premiumSubscription: ed,
                    existingAvailableSlots: eh,
                    onClickPremiumSubscriptionLink: () => {
                      if (__BILLING_STANDALONE__) {
                        window.location.href = "discord://app/settings/nitro";
                        return;
                      }
                      e1(), null != r && r(), (0, M.z)();
                    },
                    guildId: ei,
                    priceOptions: a,
                  })),
                  e2 &&
                    null != ed &&
                    null != ed.paymentGateway &&
                    (e = (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(f.FormErrorBlock, {
                          className: Q.externalErrorBlock,
                          children: J.intl.format(J.t["/m3Y3t"], {
                            paymentGatewayName: q.Vz[ed.paymentGateway],
                          }),
                        }),
                        e,
                      ],
                    })),
                  (o = (0, l.jsx)(f.Button, {
                    look: f.Button.Looks.LINK,
                    color: (0, p.ap)(eg)
                      ? f.Button.Colors.PRIMARY
                      : f.Button.Colors.WHITE,
                    onClick: e1,
                    children: J.intl.string(J.t.oEAioK),
                  })),
                  (i = (0, l.jsx)(f.Button, {
                    type: "submit",
                    disabled: e0 || 0 === eR || e2,
                    onClick: () => {
                      if (
                        !es &&
                        (null == e_ ||
                          e_.premiumSubscriptionType !== K.p9.TIER_2)
                      ) {
                        ez(N.h8.PREMIUM_UPSELL);
                        return;
                      }
                      ez(
                        null != em || eL ? N.h8.REVIEW : N.h8.ADD_PAYMENT_STEPS,
                      );
                    },
                    children: J.intl.string(J.t["3PatS0"]),
                  }));
                break;
              case N.h8.ADD_PAYMENT_STEPS:
                break;
              case N.h8.AWAITING_AUTHENTICATION:
                e = (0, l.jsx)(S.F, { className: Q.__invalid_body });
                break;
              case N.h8.REVIEW:
                c()(null != eE, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, l.jsx)(z.Gq, {
                    paymentSources: eI,
                    priceOptions: a,
                    currentPremiumSubscription: ed,
                    premiumSubscriptionPaymentSourceId: em,
                    premiumSubscriptionPlan: eE,
                    newAdditionalPlans: eU,
                    onPaymentSourceChange: (e) => eN(null != e ? e.id : null),
                    onPaymentSourceAdd: () => {
                      ez(N.h8.ADD_PAYMENT_STEPS), eN(null);
                    },
                    onPurchaseTermsChange: eD,
                    legalTermsNodeRef: e7,
                    hasLegalTermsFlash: e3,
                  })),
                  (t = N.h8.PLAN_SELECT),
                  (i = eB
                    ? (0, l.jsx)(f.Button, {
                        color: f.Button.Colors.GREEN,
                        type: "submit",
                        submitting: eA,
                        onClick: async () => {
                          c()(null != eU, "Missing newAdditionalPlans");
                          let e = null != ex ? eI[ex] : null;
                          eb(null);
                          try {
                            if (
                              (eQ(A.A.PURCHASING),
                              eC(!0),
                              c()(null != ex, "Missing paymentSourceId"),
                              F.default.track($.rMx.PAYMENT_FLOW_COMPLETED, {
                                ...eG,
                                duration_ms: Date.now() - eF,
                                guild_id: ei,
                                application_id: eu,
                              }),
                              nn)
                            )
                              return;
                            if (null == ed || null == e_) {
                              c()(null != e, "Missing paymentSource");
                              let n = await (0, m.XW)({
                                items: eU,
                                paymentSource: e,
                                currency: a.currency,
                              });
                              if (n.redirectConfirmation) {
                                nt(null != n.redirectURL);
                                return;
                              }
                            } else {
                              let n = { items: (0, G.MY)(ed, eU) };
                              (n.currency = ed.currency),
                                null == n.currency && (n.currency = a.currency),
                                (n.paymentSource =
                                  null != em ? eI[em] : void 0),
                                null == n.paymentSource &&
                                  (c()(null != e, "Missing paymentSource"),
                                  (n.paymentSource = e),
                                  (n.currency = a.currency));
                              let t = await (0, m.Mg)(ed, n, eW);
                              if (t.redirectConfirmation) {
                                nt(null != t.redirectURL);
                                return;
                              }
                            }
                            ez(N.h8.CONFIRM),
                              eQ(A.A.COMPLETED),
                              null != ei && (await eo(ei)),
                              null != er && er();
                          } catch (n) {
                            eQ(A.A.FAIL),
                              eb(n),
                              F.default.track($.rMx.PAYMENT_FLOW_FAILED, {
                                ...eG,
                                payment_error_code: null == n ? void 0 : n.code,
                                payment_gateway:
                                  null != e
                                    ? e.type === $.HeQ.CARD
                                      ? $.gg$.STRIPE
                                      : $.gg$.BRAINTREE
                                    : null,
                                payment_source_id: ex,
                                duration_ms: Date.now() - eF,
                              });
                          } finally {
                            !nn && eC(!1);
                          }
                        },
                        children: J.intl.string(J.t.eUEeCg),
                      })
                    : (0, l.jsx)(f.Tooltip, {
                        text: J.intl.string(J.t.XdvBLS),
                        children: (e) =>
                          (0, l.jsx)(f.Button, {
                            ...e,
                            color: f.Button.Colors.GREEN,
                            onClick: () => {
                              null != e7.current &&
                                (e7.current.scrollIntoView({
                                  behavior: "smooth",
                                }),
                                e4(!0));
                            },
                            type: "submit",
                            children: J.intl.string(J.t.eUEeCg),
                          }),
                      }));
                break;
              case N.h8.CONFIRM:
                var ni;
                let s = B.Z.getGuild(ei);
                e = (0, l.jsx)(z.R7, {
                  guild: s,
                  guildBoostQuantity: eR + eh.length,
                  onClose: e1,
                  withAnimation: !1,
                  paymentSourceType:
                    null === (ni = eI[null != ex ? ex : ""]) || void 0 === ni
                      ? void 0
                      : ni.type,
                });
            }
            let u = null != eM && null == (0, N.ly)(eM) ? eM : ek;
            n =
              eY === N.h8.ADD_PAYMENT_STEPS
                ? nl
                : (0, l.jsx)(R.Z, {
                    hideBreadcrumbs: eY === N.h8.CONFIRM,
                    steps: eK,
                    currentStep: eY,
                    paymentError: u,
                    purchaseErrorBlockRef: ev,
                    hasCurrencies: e5.length > 1,
                    body: e,
                    footer:
                      eY !== N.h8.CONFIRM
                        ? (0, l.jsxs)(f.ModalFooter, {
                            direction: x.Z.Direction.HORIZONTAL,
                            align: x.Z.Align.CENTER,
                            justify: x.Z.Justify.END,
                            children: [
                              null != t
                                ? (0, l.jsx)("div", {
                                    className: Q.backStep,
                                    children: (0, l.jsx)(f.Button, {
                                      color: (0, p.ap)(eg)
                                        ? f.Button.Colors.PRIMARY
                                        : f.Button.Colors.WHITE,
                                      look: f.Button.Looks.LINK,
                                      size: f.Button.Sizes.NONE,
                                      onClick: () => {
                                        null != t && ez(t);
                                      },
                                      children: J.intl.string(J.t["13/7kZ"]),
                                    }),
                                  })
                                : null,
                              (0, l.jsxs)("div", {
                                className: Q.footerRight,
                                children: [o, i],
                              }),
                            ],
                          })
                        : null,
                  });
          }
        } else
          n = (0, l.jsx)("div", {
            className: Q.loadingWrapper,
            children: (0, l.jsx)(f.Spinner, {}),
          });
        let nr = null;
        return (
          !ep &&
            eY !== N.h8.PREMIUM_UPSELL &&
            (nr = (0, l.jsx)(V.Z, {
              onClose: e1,
              currentStep: eY,
              purchaseState: eJ,
            })),
          (0, l.jsxs)(f.ModalRoot, {
            transitionState: t,
            className: a()({ [Q.planSelectStep]: eY === N.h8.PLAN_SELECT }),
            children: [nr, n],
          })
        );
      }
      function ei(e) {
        let n = (0, d.e7)([w.ZP], () => w.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: t } = (0, T.ZP)(P.Z.GUILD_BOOST_PURCHASE_MODAL);
        return (0, l.jsx)(T.Gt, {
          value: t,
          children: (0, l.jsx)(y.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(el, { ...e }),
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
        E = t(706454),
        g = t(709586),
        h = t(626135),
        P = t(930153),
        T = t(74538),
        I = t(937615),
        b = t(981631),
        x = t(474936),
        C = t(388032),
        y = t(653317);
      function N(e) {
        let { shouldUpsellFromNoneTier: n } = e,
          t = (0, a.e7)([E.default], () => E.default.locale);
        return (0, o.jsxs)("div", {
          className: y.perksList,
          children: [
            (0, o.jsx)(S.Z, {
              icon: g.Z,
              iconClassName: y.perkIconGuild,
              description: C.intl.formatToPlainString(C.t.sQBgs7, {
                numFreeGuildSubscriptions: x.cb,
              }),
            }),
            (0, o.jsx)(S.Z, {
              icon: g.Z,
              iconClassName: y.perkIconGuild,
              description: C.intl.formatToPlainString(C.t["1A6vXl"], {
                percent: (0, P.T3)(t, x.Rr / 100),
              }),
            }),
            n
              ? (0, o.jsx)(S.Z, {
                  icon: c.ReactionIcon,
                  iconClassName: y.perkIconChatPerks,
                  description: C.intl.string(C.t.Z9b2x8),
                })
              : null,
            (0, o.jsx)(S.Z, {
              icon: c.ScreenArrowIcon,
              iconClassName: y.perkIconStream,
              description: C.intl.string(C.t["8dqG5O"]),
            }),
            (0, o.jsx)(S.Z, {
              icon: c.UploadIcon,
              iconClassName: y.perkIconUpload,
              description: C.intl.string(C.t.cBorIy),
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
            onSubscriptionConfirmation: E,
            analyticsLocation: g,
            analyticsSourceLocation: P,
            priceOptions: A,
          } = e,
          { analyticsLocations: M, sourceAnalyticsLocations: k } = (0, d.ZP)(
            u.Z.GUILD_BOOSTING_PREMIUM_UPSELL,
          ),
          { theme: v } = (0, c.useThemeContext)(),
          L = (0, s.ap)(v) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
          R = null == t || null == t.premiumSubscriptionType,
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
                className: y.content,
                children: [
                  (0, o.jsx)(c.ModalCloseButton, {
                    onClick: i,
                    className: y.closeButton,
                  }),
                  O && (0, o.jsx)(_.dz, { className: y.premiumTrialBadge }),
                  (0, o.jsx)("div", {
                    className: r()(y.upsellImage, {
                      [y.upsellImageWithTrialOffer]: O,
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: y.bodyText,
                    children:
                      null != Z
                        ? C.intl.string(C.t.AoSzEh)
                        : C.intl.format(C.t["7vePZW"], { monthlyPrice: B }),
                  }),
                  (0, o.jsx)(N, { shouldUpsellFromNoneTier: R }),
                ],
              }),
              (0, o.jsxs)(c.ModalFooter, {
                align: p.Z.Align.CENTER,
                justify: p.Z.Justify.END,
                children: [
                  (0, o.jsxs)("div", {
                    className: y.footerRight,
                    children: [
                      (0, o.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: L,
                        onClick: S,
                        children: C.intl.string(C.t["SI/adn"]),
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
                                ...g,
                                section: b.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
                              },
                              analyticsSourceLocation: P,
                              onSubscriptionConfirmation: E,
                              trialId: Z,
                            });
                        },
                        children:
                          null != Z
                            ? C.intl.string(C.t["Gd/XHB"])
                            : C.intl.string(C.t.p2moio),
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: y.backStep,
                    children: (0, o.jsx)(c.Button, {
                      color: L,
                      look: c.Button.Looks.LINK,
                      size: c.Button.Sizes.NONE,
                      onClick: () => a(),
                      children: C.intl.string(C.t["13/7kZ"]),
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
        u = t(404246);
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
          secondaryText: E,
          onSecondary: g,
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
            null == E
              ? null
              : (0, i.jsx)(r.Button, {
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  onClick: g,
                  children: E,
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
        s = t(414033),
        c = t(847854);
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
          return _;
        },
        O3: function () {
          return S;
        },
        ZP: function () {
          return m;
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
        d = t(563132),
        p = t(409813),
        f = t(631232);
      function m(e) {
        var n, t, i, a, c, m;
        let {
            header: _,
            isLargeModal: S,
            isDynamicModal: E,
            stepProps: g,
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
            step: h,
            stepConfigs: P,
            setBodyNode: T,
            setFooterNode: I,
            setModalOverlayNode: b,
            setReadySlideId: x,
          } = (0, d.usePaymentContext)(),
          C = P.find((e) => e.key === h);
        l.useEffect(() => {
          b(null);
        }, [h, b]),
          s()(null != C, "Unknown step for current payment flow.");
        let y =
            null !==
              (c =
                null == C
                  ? void 0
                  : null === (n = C.options) || void 0 === n
                    ? void 0
                    : n.hideSlider) &&
            void 0 !== c &&
            c,
          N =
            null == C
              ? void 0
              : null === (t = C.options) || void 0 === t
                ? void 0
                : t.bodyClassName,
          A =
            null == C
              ? void 0
              : null === (i = C.options) || void 0 === i
                ? void 0
                : i.sliderBodyClassName;
        return (
          void 0 !== S && S
            ? (A = f.sliderBodyLarge)
            : E && (A = f.sliderBodyDynamic),
          (0, o.jsxs)(o.Fragment, {
            children: [
              null ===
                (m =
                  null == C
                    ? void 0
                    : null === (a = C.options) || void 0 === a
                      ? void 0
                      : a.renderHeader) ||
              void 0 === m ||
              m
                ? _
                : null,
              C.renderStep(g),
              null == h || y
                ? null
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(u.ModalContent, {
                        className: r()(N, f.body, {
                          [f.reviewStep]: h === p.h8.REVIEW,
                          [f.addPaymentSteps]: h === p.h8.ADD_PAYMENT_STEPS,
                        }),
                        children: (0, o.jsx)(u.Slides, {
                          activeSlide: h,
                          centered: !1,
                          onSlideReady: (e) => x(e),
                          width: h === p.h8.ADD_PAYMENT_STEPS ? "100%" : void 0,
                          children: P.filter((e) => null != e.key).map((e) =>
                            (0, o.jsx)(
                              u.Slide,
                              {
                                id: e.key,
                                children: (0, o.jsx)("form", {
                                  className: r()(f.sliderBody, A),
                                  ref: (e) => T(e),
                                  onSubmit: (e) => e.preventDefault(),
                                }),
                              },
                              e.key,
                            ),
                          ),
                        }),
                      }),
                      (0, o.jsx)("div", { ref: (e) => I(e) }),
                      (0, o.jsx)("div", { ref: (e) => b(e) }),
                    ],
                  }),
            ],
          })
        );
      }
      function _(e) {
        let { children: n } = e,
          { bodyNode: t } = (0, d.usePaymentContext)();
        return null == t ? null : c.createPortal(n, t);
      }
      function S(e) {
        let { children: n } = e,
          { footerNode: t } = (0, d.usePaymentContext)();
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
        r = t(145577);
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
    716886: function (e, n, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    71464: function (e, n, t) {
      e.exports = {
        header: "header_f56ad2",
        animation: "animation_f56ad2",
        headerTitle: "headerTitle_f56ad2",
        closeButton: "closeButton_f56ad2",
      };
    },
    240630: function (e, n, t) {
      e.exports = {
        planSelectStep: "planSelectStep_eeab8f",
        externalErrorBlock: "externalErrorBlock_eeab8f",
        footerRight: "footerRight_eeab8f",
        backStep: "backStep_eeab8f",
        copy: "copy_eeab8f",
        loadingWrapper: "loadingWrapper_eeab8f",
      };
    },
    18692: function (e, n, t) {
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
    653317: function (e, n, t) {
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
    404246: function (e, n, t) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    414033: function (e, n, t) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    631232: function (e, n, t) {
      e.exports = {
        body: "body_bf926b",
        reviewStep: "reviewStep_bf926b",
        sliderBody: "sliderBody_bf926b",
        addPaymentSteps: "addPaymentSteps_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
        sliderBodyDynamic: "sliderBodyDynamic_bf926b",
      };
    },
    490451: function (e, n, t) {
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
    665167: function (e, n, t) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    402635: function (e, n, t) {
      e.exports = {
        upsellFooter: "upsellFooter_a26a1a",
        upsellFooterIcon: "upsellFooterIcon_a26a1a",
        reverseTrialUpsellContainer: "reverseTrialUpsellContainer_a26a1a",
        unlockIcon: "unlockIcon_a26a1a",
        upsellText: "upsellText_a26a1a",
      };
    },
    145577: function (e, n, t) {
      e.exports = {
        perkRow: "perkRow_a899f7",
        perkIconContainer: "perkIconContainer_a899f7",
        perkIcon: "perkIcon_a899f7",
        perkDescription: "perkDescription_a899f7",
      };
    },
  },
]);
//# sourceMappingURL=a92beddf25183ba56921.js.map
