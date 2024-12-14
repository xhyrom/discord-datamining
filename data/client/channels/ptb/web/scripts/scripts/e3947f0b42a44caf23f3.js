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
          return d;
        },
      });
      var o = t(737143),
        l = t(926841),
        i = t(626135),
        r = t(91641),
        a = t(959784),
        s = t(987338),
        c = t(981631);
      let u = new r.E(
        [a.NR, a.ZI, a.Ob, a.uc, a.m1, l.b, o.L4],
        s.$P.PAYMENT_FLOW_STARTED,
        { location: "payment flow started" },
      );
      function d(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        i.default.track(c.rMx.PAYMENT_FLOW_STARTED, e, n), u.trigger();
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
        s = t(75124),
        c = t(252759),
        u = t(772848),
        d = t(442837),
        p = t(780384),
        f = t(481060),
        m = t(355467),
        _ = t(179360),
        S = t(723484),
        g = t(330726),
        h = t(100527),
        E = t(906732),
        P = t(15640),
        I = t(89057),
        T = t(600164),
        x = t(232127),
        y = t(563132),
        C = t(409813),
        b = t(45572),
        N = t(98278),
        k = t(431369),
        A = t(176919),
        M = t(3409),
        v = t(185139),
        L = t(210887),
        R = t(430824),
        j = t(314884),
        B = t(975060),
        Z = t(853872),
        D = t(509545),
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
        K = t(231338),
        $ = t(388032),
        q = t(122959);
      (o || (o = {})).PREMIUM = "discord://app/settings/nitro";
      let J = X.Xh.NONE_MONTH,
        Q = [C.h8.PLAN_SELECT, C.h8.REVIEW, C.h8.CONFIRM],
        ee = [
          C.h8.PLAN_SELECT,
          C.h8.ADD_PAYMENT_STEPS,
          C.h8.REVIEW,
          C.h8.CONFIRM,
        ];
      async function en(e) {
        await (0, _.X8)();
        let n = (0, w.vx)(j.Z.boostSlots);
        return (0, _.W3)(
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
            analyticsLocations: _,
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
          y.usePaymentContext)(),
          ep = (0, d.e7)([O.ZP], () => O.ZP.hasFetchedSubscriptions()),
          ef = null != eu ? eu.paymentSourceId : null,
          em = (0, d.e7)([D.Z], () =>
            null != eu ? (0, G.oE)(eu.planId) : null,
          ),
          e_ = (0, d.e7)([D.Z], () => null == eu || null != D.Z.get(eu.planId)),
          eS = (0, d.e7)([D.Z], () => (null == em ? D.Z.get(J) : em)),
          eg = (0, d.e7)([L.Z], () => L.Z.theme),
          eh = i.useRef((0, w.vx)(j.Z.boostSlots)).current,
          eE = (0, d.e7)([Z.Z], () => Z.Z.defaultPaymentSourceId),
          eP = (0, M.fL)(null != ef ? ef : ep ? eE : null),
          {
            paymentSources: eI,
            setPurchaseError: eT,
            paymentSourceId: ex,
            setIsSubmittingCurrentStep: ey,
            paymentAuthenticationState: eC,
            setPaymentSourceId: eb,
            isSubmittingCurrentStep: eN,
            paymentError: ek,
            purchaseError: eA,
            purchaseErrorBlockRef: eM,
          } = eP,
          ev = Object.keys(eI).length > 0,
          [eL, eR] = i.useState(er - eh.length),
          [ej, eB] = i.useState(!1),
          eZ = (0, d.e7)([B.Z], () => B.Z.popupCallbackCalled),
          eD = (0, P.V)(),
          eO = i.useMemo(
            () =>
              null != eu && e_ && eD
                ? (0, k.g)(eu, eL)
                : [{ planId: X.Xh.PREMIUM_MONTH_GUILD, quantity: eL }],
            [eu, e_, eL, eD],
          ),
          [eU, ew] = (0, s.Z)(() => [(0, u.Z)(), Date.now()]),
          { analyticsLocations: eF } = (0, E.ZP)(
            _,
            h.Z.GUILD_BOOST_PURCHASE_MODAL,
          ),
          eW = i.useMemo(() => {
            var e, n;
            return {
              load_id: eU,
              payment_type: K.Zu[K.GZ.SUBSCRIPTION],
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
              quantity: eL,
              location: et,
              source: eo,
              location_stack: eF,
            };
          }, [eU, et, eF, eo, eO, eL]);
        i.useEffect(() => {
          (0, W.i1)(ex);
        }, [ex]),
          i.useEffect(() => {
            (async () => {
              if (!0 === eZ)
                try {
                  if (null == B.Z.redirectedPaymentId) return;
                  await (0, m.OP)(B.Z.redirectedPaymentId),
                    eJ(C.h8.CONFIRM),
                    eX(b.A.COMPLETED),
                    null != el && (await en(el)),
                    null != ei && ei();
                } catch (e) {
                  eX(b.A.FAIL),
                    eT(e),
                    U.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
                      ...eW,
                      payment_error_code: null == e ? void 0 : e.code,
                      payment_gateway: z.gg$.STRIPE,
                      payment_source_id: ex,
                      duration_ms: Date.now() - ew,
                    });
                } finally {
                  ey(!1), (0, m.K2)();
                }
            })();
          }, [eZ]),
          i.useEffect(() => {
            !O.ZP.hasFetchedSubscriptions() && (0, m.jg)(),
              (0, x.U)({ ...eW, guild_id: el, application_id: ec }),
              null != eu &&
                null != eu.renewalMutations &&
                U.default.track(z.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                  location: et,
                  guild_id: el,
                });
          }, []);
        let [eG, eY] = i.useState(Q),
          [eH, eV] = i.useState(C.h8.PLAN_SELECT),
          [ez, eX] = i.useState(b.A.WAITING),
          [eK, e$] = i.useState(!0),
          eq = (0, c.Z)(() => Date.now(), [eH]),
          eJ = i.useCallback(
            (e, n) => {
              eV(e), eT(null);
              let t = Date.now();
              U.default.track(z.rMx.PAYMENT_FLOW_STEP, {
                ...eW,
                from_step: null != n ? n : eH,
                to_step: e === C.h8.ADD_PAYMENT_STEPS ? C.h8.PAYMENT_TYPE : e,
                step_duration_ms: t - eq,
                flow_duration_ms: t - ew,
                guild_id: el,
                application_id: ec,
              });
            },
            [eT, eW, eH, eq, ew, el, ec],
          ),
          eQ = () => {
            o(ez === b.A.COMPLETED);
          },
          e0 = null != eu && eu.isPurchasedExternally;
        i.useEffect(() => {
          eC !== A.wr.PENDING &&
            eH !== C.h8.CONFIRM &&
            null != ef &&
            (eG !== Q && eY(Q),
            !Q.includes(eH) && eH !== C.h8.PREMIUM_UPSELL && eJ(C.h8.REVIEW)),
            eH === C.h8.ADD_PAYMENT_STEPS && eG !== ee && eY(ee),
            e0 && eH !== C.h8.PLAN_SELECT && eV(C.h8.PLAN_SELECT);
        }, [eH, eJ, e0, eC, eu, ef, eG]),
          (0, A.bp)(eH, eC, eJ, eX),
          (0, C.dZ)(eH, ez, eX);
        let e8 = i.useRef(null),
          [e2, e1] = (0, g.Z)(!1, 500),
          [e7, e9] = i.useState(null),
          [e3, e5] = i.useState([]),
          [e4, e6] = i.useState(!1);
        i.useEffect(() => {
          let e;
          if (!!eD)
            null != D.Z.get(X.Xh.PREMIUM_MONTH_GUILD) &&
              e5((e = (0, W.DE)(X.Xh.PREMIUM_MONTH_GUILD, ex, !1))),
              null == ex && null != eu && null != eu.paymentSourceId
                ? e9(eu.currency)
                : null != e && e9(e[0]);
        }, [ex, eu, eD, JSON.stringify(e3)]);
        let ne = (0, M.vP)({
          paymentModalArgs: eP,
          initialStep: C.h8.PAYMENT_TYPE,
          prependSteps: [C.h8.PLAN_SELECT],
          appendSteps: [C.h8.REVIEW, C.h8.CONFIRM],
          breadcrumpSteps: eG,
          currentBreadcrumpStep: eH,
          onReturn: () => {
            eJ(
              Object.values(eI).length < 1 ? C.h8.PLAN_SELECT : C.h8.REVIEW,
              C.h8.PAYMENT_TYPE,
            );
          },
          onComplete: (e) => {
            eJ(C.h8.REVIEW, e);
          },
          onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
              o = Date.now();
            U.default.track(z.rMx.PAYMENT_FLOW_STEP, {
              ...eW,
              from_step: n,
              to_step: t,
              step_duration_ms: o - eq,
              flow_duration_ms: o - ew,
              guild_id: el,
            });
          },
        });
        if (ed) n = (0, l.jsx)(I.Vq, { onClose: eQ });
        else if (ep && e_ && eD && null != e7 && "" !== e7) {
          if (null == eu ? void 0 : eu.isPausedOrPausePending)
            n = (0, l.jsx)(f.ModalContent, {
              children: (0, l.jsx)("p", {
                className: q.copy,
                children: $.intl.string($.t.mOWsFx),
              }),
            });
          else if (null != eu && null != eu.renewalMutations)
            n = (0, l.jsx)(f.ModalContent, {
              children: (0, l.jsx)("p", {
                className: q.copy,
                children: $.intl.string($.t.npfhh4),
              }),
            });
          else if (eH === C.h8.PREMIUM_UPSELL) {
            a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
              a()(e7, "Currency not defined");
            let e =
              null != ex
                ? { paymentSourceId: ex, currency: e7 }
                : { currency: e7 };
            n = (0, l.jsx)(V.Z, {
              premiumSubscriptionPlan: eS,
              analyticsLocation: et,
              analyticsSourceLocation: eo,
              onClose: eQ,
              onBack: () => eJ(C.h8.PLAN_SELECT),
              onSkip: () =>
                eJ(null != ef || ev ? C.h8.REVIEW : C.h8.ADD_PAYMENT_STEPS),
              onSubscriptionConfirmation: es,
              priceOptions: e,
            });
          } else {
            let e, t, o, i;
            a()(e7, "Currency not defined");
            let s =
              null != ex
                ? { paymentSourceId: ex, currency: e7 }
                : { currency: e7 };
            switch (eH) {
              case C.h8.PLAN_SELECT:
                a()(null != el, "Missing guildId"),
                  a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, l.jsx)(H.CP, {
                    premiumSubscriptionPlan: eS,
                    numGuildBoosts: eL,
                    setNumGuildBoosts: eR,
                    setForceDisableSubmitButton: e$,
                    premiumSubscription: eu,
                    existingAvailableSlots: eh,
                    onClickPremiumSubscriptionLink: () => {
                      if (__BILLING_STANDALONE__) {
                        window.location.href = "discord://app/settings/nitro";
                        return;
                      }
                      eQ(), null != r && r(), (0, N.z)();
                    },
                    guildId: el,
                    priceOptions: s,
                  })),
                  e0 &&
                    null != eu &&
                    null != eu.paymentGateway &&
                    (e = (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(f.FormErrorBlock, {
                          className: q.externalErrorBlock,
                          children: $.intl.format($.t["/m3Y3t"], {
                            paymentGatewayName: K.Vz[eu.paymentGateway],
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
                    onClick: eQ,
                    children: $.intl.string($.t.oEAioK),
                  })),
                  (i = (0, l.jsx)(f.Button, {
                    type: "submit",
                    disabled: eK || 0 === eL || e0,
                    onClick: () => {
                      if (
                        !ea &&
                        (null == em ||
                          em.premiumSubscriptionType !== X.p9.TIER_2)
                      ) {
                        eJ(C.h8.PREMIUM_UPSELL);
                        return;
                      }
                      eJ(
                        null != ef || ev ? C.h8.REVIEW : C.h8.ADD_PAYMENT_STEPS,
                      );
                    },
                    children: $.intl.string($.t["3PatS0"]),
                  }));
                break;
              case C.h8.ADD_PAYMENT_STEPS:
                break;
              case C.h8.AWAITING_AUTHENTICATION:
                e = (0, l.jsx)(S.F, { className: q.__invalid_body });
                break;
              case C.h8.REVIEW:
                a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, l.jsx)(H.Gq, {
                    paymentSources: eI,
                    priceOptions: s,
                    currentPremiumSubscription: eu,
                    premiumSubscriptionPaymentSourceId: ef,
                    premiumSubscriptionPlan: eS,
                    newAdditionalPlans: eO,
                    onPaymentSourceChange: (e) => eb(null != e ? e.id : null),
                    onPaymentSourceAdd: () => {
                      eJ(C.h8.ADD_PAYMENT_STEPS), eb(null);
                    },
                    onPurchaseTermsChange: eB,
                    legalTermsNodeRef: e8,
                    hasLegalTermsFlash: e2,
                  })),
                  (t = C.h8.PLAN_SELECT),
                  (i = ej
                    ? (0, l.jsx)(f.Button, {
                        color: f.Button.Colors.GREEN,
                        type: "submit",
                        submitting: eN,
                        onClick: async () => {
                          a()(null != eO, "Missing newAdditionalPlans");
                          let e = null != ex ? eI[ex] : null;
                          eT(null);
                          try {
                            if (
                              (eX(b.A.PURCHASING),
                              ey(!0),
                              a()(null != ex, "Missing paymentSourceId"),
                              U.default.track(z.rMx.PAYMENT_FLOW_COMPLETED, {
                                ...eW,
                                duration_ms: Date.now() - ew,
                                guild_id: el,
                                application_id: ec,
                              }),
                              e4)
                            )
                              return;
                            if (null == eu || null == em) {
                              a()(null != e, "Missing paymentSource");
                              let n = await (0, m.XW)({
                                items: eO,
                                paymentSource: e,
                                currency: s.currency,
                              });
                              if (n.redirectConfirmation) {
                                e6(null != n.redirectURL);
                                return;
                              }
                            } else {
                              let n = { items: (0, F.MY)(eu, eO) };
                              (n.currency = eu.currency),
                                null == n.currency && (n.currency = s.currency),
                                (n.paymentSource =
                                  null != ef ? eI[ef] : void 0),
                                null == n.paymentSource &&
                                  (a()(null != e, "Missing paymentSource"),
                                  (n.paymentSource = e),
                                  (n.currency = s.currency));
                              let t = await (0, m.Mg)(eu, n, eF);
                              if (t.redirectConfirmation) {
                                e6(null != t.redirectURL);
                                return;
                              }
                            }
                            eJ(C.h8.CONFIRM),
                              eX(b.A.COMPLETED),
                              null != el && (await en(el)),
                              null != ei && ei();
                          } catch (n) {
                            eX(b.A.FAIL),
                              eT(n),
                              U.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
                                ...eW,
                                payment_error_code: null == n ? void 0 : n.code,
                                payment_gateway:
                                  null != e
                                    ? e.type === z.HeQ.CARD
                                      ? z.gg$.STRIPE
                                      : z.gg$.BRAINTREE
                                    : null,
                                payment_source_id: ex,
                                duration_ms: Date.now() - ew,
                              });
                          } finally {
                            !e4 && ey(!1);
                          }
                        },
                        children: $.intl.string($.t.eUEeCg),
                      })
                    : (0, l.jsx)(f.Tooltip, {
                        text: $.intl.string($.t.XdvBLS),
                        children: (e) =>
                          (0, l.jsx)(f.Button, {
                            ...e,
                            color: f.Button.Colors.GREEN,
                            onClick: () => {
                              null != e8.current &&
                                (e8.current.scrollIntoView({
                                  behavior: "smooth",
                                }),
                                e1(!0));
                            },
                            type: "submit",
                            children: $.intl.string($.t.eUEeCg),
                          }),
                      }));
                break;
              case C.h8.CONFIRM:
                var nn;
                let c = R.Z.getGuild(el);
                e = (0, l.jsx)(H.R7, {
                  guild: c,
                  guildBoostQuantity: eL + eh.length,
                  onClose: eQ,
                  withAnimation: !1,
                  paymentSourceType:
                    null === (nn = eI[null != ex ? ex : ""]) || void 0 === nn
                      ? void 0
                      : nn.type,
                });
            }
            let u = null != ek && null == (0, C.ly)(ek) ? ek : eA;
            n =
              eH === C.h8.ADD_PAYMENT_STEPS
                ? ne
                : (0, l.jsx)(v.Z, {
                    hideBreadcrumbs: eH === C.h8.CONFIRM,
                    steps: eG,
                    currentStep: eH,
                    paymentError: u,
                    purchaseErrorBlockRef: eM,
                    hasCurrencies: e3.length > 1,
                    body: e,
                    footer:
                      eH !== C.h8.CONFIRM
                        ? (0, l.jsxs)(f.ModalFooter, {
                            direction: T.Z.Direction.HORIZONTAL,
                            align: T.Z.Align.CENTER,
                            justify: T.Z.Justify.END,
                            children: [
                              null != t
                                ? (0, l.jsx)("div", {
                                    className: q.backStep,
                                    children: (0, l.jsx)(f.Button, {
                                      color: (0, p.ap)(eg)
                                        ? f.Button.Colors.PRIMARY
                                        : f.Button.Colors.WHITE,
                                      look: f.Button.Looks.LINK,
                                      size: f.Button.Sizes.NONE,
                                      onClick: () => {
                                        null != t && eJ(t);
                                      },
                                      children: $.intl.string($.t["13/7kZ"]),
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
            children: (0, l.jsx)(f.Spinner, {}),
          });
        let nt = null;
        return (
          !ed &&
            eH !== C.h8.PREMIUM_UPSELL &&
            (nt = (0, l.jsx)(Y.Z, {
              onClose: eQ,
              currentStep: eH,
              purchaseState: ez,
            })),
          (0, l.jsxs)(f.ModalRoot, { transitionState: t, children: [nt, n] })
        );
      }
      function eo(e) {
        let n = (0, d.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: t } = (0, E.ZP)(h.Z.GUILD_BOOST_PURCHASE_MODAL);
        return (0, l.jsx)(E.Gt, {
          value: t,
          children: (0, l.jsx)(y.PaymentContextProvider, {
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
          return k;
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
        h = t(709586),
        E = t(626135),
        P = t(930153),
        I = t(74538),
        T = t(937615),
        x = t(981631),
        y = t(474936),
        C = t(388032),
        b = t(427930);
      function N(e) {
        let { shouldUpsellFromNoneTier: n } = e,
          t = (0, a.e7)([g.default], () => g.default.locale);
        return (0, o.jsxs)("div", {
          className: b.perksList,
          children: [
            (0, o.jsx)(S.Z, {
              icon: h.Z,
              iconClassName: b.perkIconGuild,
              description: C.intl.formatToPlainString(C.t.sQBgs7, {
                numFreeGuildSubscriptions: y.cb,
              }),
            }),
            (0, o.jsx)(S.Z, {
              icon: h.Z,
              iconClassName: b.perkIconGuild,
              description: C.intl.formatToPlainString(C.t["1A6vXl"], {
                percent: (0, P.T3)(t, y.Rr / 100),
              }),
            }),
            n
              ? (0, o.jsx)(S.Z, {
                  icon: c.ReactionIcon,
                  iconClassName: b.perkIconChatPerks,
                  description: C.intl.string(C.t.Z9b2x8),
                })
              : null,
            (0, o.jsx)(S.Z, {
              icon: c.ScreenArrowIcon,
              iconClassName: b.perkIconStream,
              description: C.intl.string(C.t["8dqG5O"]),
            }),
            (0, o.jsx)(S.Z, {
              icon: c.UploadIcon,
              iconClassName: b.perkIconUpload,
              description: C.intl.string(C.t.cBorIy),
            }),
          ],
        });
      }
      function k(e) {
        var n;
        let {
            premiumSubscriptionPlan: t,
            onClose: i,
            onBack: a,
            onSkip: S,
            onSubscriptionConfirmation: g,
            analyticsLocation: h,
            analyticsSourceLocation: P,
            priceOptions: k,
          } = e,
          { analyticsLocations: A, sourceAnalyticsLocations: M } = (0, d.ZP)(
            u.Z.GUILD_BOOSTING_PREMIUM_UPSELL,
          ),
          { theme: v } = (0, c.useThemeContext)(),
          L = (0, s.ap)(v) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
          R = null == t || null == t.premiumSubscriptionType,
          j = I.ZP.getPrice(y.Xh.PREMIUM_MONTH_TIER_2, !1, !1, k),
          B = (0, T.T4)(j.amount, j.currency),
          Z = (0, m.N)(),
          D = null == Z ? void 0 : Z.trial_id,
          O =
            (null == Z
              ? void 0
              : null === (n = Z.subscription_trial) || void 0 === n
                ? void 0
                : n.sku_id) === y.Si.TIER_2;
        return (
          l.useEffect(() => {
            E.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
              type: y.cd.GUILD_PREMIUM_UPSELL_MODAL,
              location_stack: M,
            });
          }, [M]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(c.ModalContent, {
                className: b.content,
                children: [
                  (0, o.jsx)(c.ModalCloseButton, {
                    onClick: i,
                    className: b.closeButton,
                  }),
                  O && (0, o.jsx)(_.dz, { className: b.premiumTrialBadge }),
                  (0, o.jsx)("div", {
                    className: r()(b.upsellImage, {
                      [b.upsellImageWithTrialOffer]: O,
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: b.bodyText,
                    children:
                      null != D
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
                    className: b.footerRight,
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
                              subscriptionTier: y.Si.TIER_2,
                              analyticsLocations: A,
                              analyticsObject: {
                                ...h,
                                section: x.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
                              },
                              analyticsSourceLocation: P,
                              onSubscriptionConfirmation: g,
                              trialId: D,
                            });
                        },
                        children:
                          null != D
                            ? C.intl.string(C.t["Gd/XHB"])
                            : C.intl.string(C.t.p2moio),
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: b.backStep,
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
          onSecondary: h,
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
                  onClick: h,
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
          return m;
        },
        O3: function () {
          return _;
        },
        ZP: function () {
          return f;
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
        p = t(135970);
      function f(e) {
        var n, t, i, a, c, f;
        let {
            header: m,
            isLargeModal: _,
            isDynamicModal: S,
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
            stepConfigs: E,
            setBodyNode: P,
            setFooterNode: I,
            setModalOverlayNode: T,
            setReadySlideId: x,
          } = (0, d.usePaymentContext)(),
          y = E.find((e) => e.key === h);
        l.useEffect(() => {
          T(null);
        }, [h, T]),
          s()(null != y, "Unknown step for current payment flow.");
        let C =
            null !==
              (c =
                null == y
                  ? void 0
                  : null === (n = y.options) || void 0 === n
                    ? void 0
                    : n.hideSlider) &&
            void 0 !== c &&
            c,
          b =
            null == y
              ? void 0
              : null === (t = y.options) || void 0 === t
                ? void 0
                : t.bodyClassName,
          N =
            null == y
              ? void 0
              : null === (i = y.options) || void 0 === i
                ? void 0
                : i.sliderBodyClassName;
        return (
          void 0 !== _ && _
            ? (N = p.sliderBodyLarge)
            : S && (N = p.sliderBodyDynamic),
          (0, o.jsxs)(o.Fragment, {
            children: [
              null ===
                (f =
                  null == y
                    ? void 0
                    : null === (a = y.options) || void 0 === a
                      ? void 0
                      : a.renderHeader) ||
              void 0 === f ||
              f
                ? m
                : null,
              y.renderStep(g),
              null == h || C
                ? null
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(u.ModalContent, {
                        className: r()(p.body, b),
                        children: (0, o.jsx)(u.Slides, {
                          activeSlide: h,
                          centered: !1,
                          onSlideReady: (e) => x(e),
                          children: E.filter((e) => null != e.key).map((e) =>
                            (0, o.jsx)(
                              u.Slide,
                              {
                                id: e.key,
                                children: (0, o.jsx)("form", {
                                  className: r()(p.sliderBody, N),
                                  ref: (e) => P(e),
                                  onSubmit: (e) => e.preventDefault(),
                                }),
                              },
                              e.key,
                            ),
                          ),
                        }),
                      }),
                      (0, o.jsx)("div", { ref: (e) => I(e) }),
                      (0, o.jsx)("div", { ref: (e) => T(e) }),
                    ],
                  }),
            ],
          })
        );
      }
      function m(e) {
        let { children: n } = e,
          { bodyNode: t } = (0, d.usePaymentContext)();
        return null == t ? null : c.createPortal(n, t);
      }
      function _(e) {
        let { children: n } = e,
          { footerNode: t } = (0, d.usePaymentContext)();
        return null == t ? null : c.createPortal(n, t);
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
        sliderBody: "sliderBody_bf926b",
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
//# sourceMappingURL=e3947f0b42a44caf23f3.js.map
