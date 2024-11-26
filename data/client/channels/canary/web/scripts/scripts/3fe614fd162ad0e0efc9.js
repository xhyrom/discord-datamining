"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92511"],
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
          return u;
        },
      });
      var o = t(626135),
        l = t(91641),
        i = t(959784),
        r = t(987338),
        a = t(981631);
      let s = new l.E(
        [i.NR, i.ZI, i.Ob, i.uc, i.m1],
        r.$P.PAYMENT_FLOW_STARTED,
        { location: "payment flow started" },
      );
      function u(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o.default.track(a.rMx.PAYMENT_FLOW_STARTED, e, n), s.trigger();
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
          return u;
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
        u = (0, o.Z)({
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
        u = t(110818),
        c = t(346007);
      function d(e) {
        let { purchaseState: n, currentStep: t, onClose: d } = e,
          [p, f] = (0, s.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: u.fe.Scenes.ENTRY,
            purchaseScene: u.fe.Scenes.STARS,
            errorScene: u.fe.Scenes.ERROR,
            successScene: u.fe.Scenes.SUCCESS,
          }),
          m = (0, l.e7)([r.Z], () => r.Z.useReducedMotion);
        return (0, o.jsxs)(i.ModalHeader, {
          align: a.Z.Align.START,
          className: c.header,
          separator: !1,
          children: [
            (0, o.jsx)(u.fe, {
              className: c.animation,
              nextScene: p,
              onScenePlay: (e) => f(u.fe.getNextScene(e)),
              pauseWhileUnfocused: !1,
              pause: m,
            }),
            (0, o.jsx)("div", { className: c.headerTitle }),
            (0, o.jsx)(i.ModalCloseButton, {
              onClick: d,
              className: c.closeButton,
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
        u = t(252759),
        c = t(772848),
        d = t(442837),
        p = t(780384),
        f = t(481060),
        m = t(355467),
        _ = t(179360),
        S = t(723484),
        E = t(330726),
        h = t(100527),
        g = t(906732),
        P = t(15640),
        T = t(89057),
        I = t(600164),
        x = t(232127),
        C = t(563132),
        b = t(409813),
        N = t(45572),
        y = t(98278),
        A = t(431369),
        k = t(176919),
        M = t(3409),
        v = t(185139),
        R = t(210887),
        L = t(430824),
        j = t(314884),
        B = t(975060),
        Z = t(853872),
        O = t(509545),
        D = t(78839),
        U = t(626135),
        w = t(267642),
        F = t(74538),
        W = t(212895),
        G = t(296848),
        Y = t(518062),
        H = t(4434),
        V = t(333451),
        X = t(981631),
        z = t(474936),
        K = t(231338),
        $ = t(388032),
        q = t(122959);
      (o || (o = {})).PREMIUM = "discord://app/settings/nitro";
      let J = z.Xh.NONE_MONTH,
        Q = [b.h8.PLAN_SELECT, b.h8.REVIEW, b.h8.CONFIRM],
        ee = [
          b.h8.PLAN_SELECT,
          b.h8.ADD_PAYMENT_STEPS,
          b.h8.REVIEW,
          b.h8.CONFIRM,
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
            applicationId: eu,
          } = e,
          { activeSubscription: ec, blockedPayments: ed } = (0,
          C.usePaymentContext)(),
          ep = (0, d.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
          ef = null != ec ? ec.paymentSourceId : null,
          em = (0, d.e7)([O.Z], () =>
            null != ec ? (0, G.oE)(ec.planId) : null,
          ),
          e_ = (0, d.e7)([O.Z], () => null == ec || null != O.Z.get(ec.planId)),
          eS = (0, d.e7)([O.Z], () => (null == em ? O.Z.get(J) : em)),
          eE = (0, d.e7)([R.Z], () => R.Z.theme),
          eh = i.useRef((0, w.vx)(j.Z.boostSlots)).current,
          eg = (0, d.e7)([Z.Z], () => Z.Z.defaultPaymentSourceId),
          eP = (0, M.fL)(null != ef ? ef : ep ? eg : null),
          {
            paymentSources: eT,
            setPurchaseError: eI,
            paymentSourceId: ex,
            setIsSubmittingCurrentStep: eC,
            paymentAuthenticationState: eb,
            setPaymentSourceId: eN,
            isSubmittingCurrentStep: ey,
            paymentError: eA,
            purchaseError: ek,
            purchaseErrorBlockRef: eM,
          } = eP,
          ev = Object.keys(eT).length > 0,
          [eR, eL] = i.useState(er - eh.length),
          [ej, eB] = i.useState(!1),
          eZ = (0, d.e7)([B.Z], () => B.Z.popupCallbackCalled),
          eO = (0, P.V)(),
          eD = i.useMemo(
            () =>
              null != ec && e_ && eO
                ? (0, A.g)(ec, eR)
                : [{ planId: z.Xh.PREMIUM_MONTH_GUILD, quantity: eR }],
            [ec, e_, eR, eO],
          ),
          [eU, ew] = (0, s.Z)(() => [(0, c.Z)(), Date.now()]),
          { analyticsLocations: eF } = (0, g.ZP)(
            _,
            h.Z.GUILD_BOOST_PURCHASE_MODAL,
          ),
          eW = i.useMemo(() => {
            var e, n;
            return {
              load_id: eU,
              payment_type: K.Zu[K.GZ.SUBSCRIPTION],
              sku_id: z.Si.GUILD,
              subscription_type: X.NYc.PREMIUM,
              subscription_plan_id:
                null !==
                  (n =
                    null ===
                      (e = eD.find((e) => {
                        let { planId: n } = e;
                        return z.Z1.has(n);
                      })) || void 0 === e
                      ? void 0
                      : e.planId) && void 0 !== n
                  ? n
                  : z.Xh.PREMIUM_MONTH_GUILD,
              quantity: eR,
              location: et,
              source: eo,
              location_stack: eF,
            };
          }, [eU, et, eF, eo, eD, eR]);
        i.useEffect(() => {
          (0, W.i1)(ex);
        }, [ex]),
          i.useEffect(() => {
            (async () => {
              if (!0 === eZ)
                try {
                  if (null == B.Z.redirectedPaymentId) return;
                  await (0, m.OP)(B.Z.redirectedPaymentId),
                    eJ(b.h8.CONFIRM),
                    ez(N.A.COMPLETED),
                    null != el && (await en(el)),
                    null != ei && ei();
                } catch (e) {
                  ez(N.A.FAIL),
                    eI(e),
                    U.default.track(X.rMx.PAYMENT_FLOW_FAILED, {
                      ...eW,
                      payment_error_code: null == e ? void 0 : e.code,
                      payment_gateway: X.gg$.STRIPE,
                      payment_source_id: ex,
                      duration_ms: Date.now() - ew,
                    });
                } finally {
                  eC(!1), (0, m.K2)();
                }
            })();
          }, [eZ]),
          i.useEffect(() => {
            !D.ZP.hasFetchedSubscriptions() && (0, m.jg)(),
              (0, x.U)({ ...eW, guild_id: el, application_id: eu }),
              null != ec &&
                null != ec.renewalMutations &&
                U.default.track(X.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                  location: et,
                  guild_id: el,
                });
          }, []);
        let [eG, eY] = i.useState(Q),
          [eH, eV] = i.useState(b.h8.PLAN_SELECT),
          [eX, ez] = i.useState(N.A.WAITING),
          [eK, e$] = i.useState(!0),
          eq = (0, u.Z)(() => Date.now(), [eH]),
          eJ = i.useCallback(
            (e, n) => {
              eV(e), eI(null);
              let t = Date.now();
              U.default.track(X.rMx.PAYMENT_FLOW_STEP, {
                ...eW,
                from_step: null != n ? n : eH,
                to_step: e === b.h8.ADD_PAYMENT_STEPS ? b.h8.PAYMENT_TYPE : e,
                step_duration_ms: t - eq,
                flow_duration_ms: t - ew,
                guild_id: el,
                application_id: eu,
              });
            },
            [eI, eW, eH, eq, ew, el, eu],
          ),
          eQ = () => {
            o(eX === N.A.COMPLETED);
          },
          e0 = null != ec && ec.isPurchasedExternally;
        i.useEffect(() => {
          eb !== k.wr.PENDING &&
            eH !== b.h8.CONFIRM &&
            null != ef &&
            (eG !== Q && eY(Q),
            !Q.includes(eH) && eH !== b.h8.PREMIUM_UPSELL && eJ(b.h8.REVIEW)),
            eH === b.h8.ADD_PAYMENT_STEPS && eG !== ee && eY(ee),
            e0 && eH !== b.h8.PLAN_SELECT && eV(b.h8.PLAN_SELECT);
        }, [eH, eJ, e0, eb, ec, ef, eG]),
          (0, k.bp)(eH, eb, eJ, ez),
          (0, b.dZ)(eH, eX, ez);
        let e8 = i.useRef(null),
          [e1, e2] = (0, E.Z)(!1, 500),
          [e7, e9] = i.useState(null),
          [e5, e3] = i.useState([]),
          [e4, e6] = i.useState(!1);
        i.useEffect(() => {
          let e;
          if (!!eO)
            null != O.Z.get(z.Xh.PREMIUM_MONTH_GUILD) &&
              e3((e = (0, W.DE)(z.Xh.PREMIUM_MONTH_GUILD, ex, !1))),
              null == ex && null != ec && null != ec.paymentSourceId
                ? e9(ec.currency)
                : null != e && e9(e[0]);
        }, [ex, ec, eO, JSON.stringify(e5)]);
        let ne = (0, M.vP)({
          paymentModalArgs: eP,
          initialStep: b.h8.PAYMENT_TYPE,
          prependSteps: [b.h8.PLAN_SELECT],
          appendSteps: [b.h8.REVIEW, b.h8.CONFIRM],
          breadcrumpSteps: eG,
          currentBreadcrumpStep: eH,
          onReturn: () => {
            eJ(
              Object.values(eT).length < 1 ? b.h8.PLAN_SELECT : b.h8.REVIEW,
              b.h8.PAYMENT_TYPE,
            );
          },
          onComplete: (e) => {
            eJ(b.h8.REVIEW, e);
          },
          onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
              o = Date.now();
            U.default.track(X.rMx.PAYMENT_FLOW_STEP, {
              ...eW,
              from_step: n,
              to_step: t,
              step_duration_ms: o - eq,
              flow_duration_ms: o - ew,
              guild_id: el,
            });
          },
        });
        if (ed) n = (0, l.jsx)(T.Vq, { onClose: eQ });
        else if (ep && e_ && eO && null != e7 && "" !== e7) {
          if (null == ec ? void 0 : ec.isPausedOrPausePending)
            n = (0, l.jsx)(f.ModalContent, {
              children: (0, l.jsx)("p", {
                className: q.copy,
                children: $.intl.string($.t.mOWsFx),
              }),
            });
          else if (null != ec && null != ec.renewalMutations)
            n = (0, l.jsx)(f.ModalContent, {
              children: (0, l.jsx)("p", {
                className: q.copy,
                children: $.intl.string($.t.npfhh4),
              }),
            });
          else if (eH === b.h8.PREMIUM_UPSELL) {
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
              onBack: () => eJ(b.h8.PLAN_SELECT),
              onSkip: () =>
                eJ(null != ef || ev ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS),
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
              case b.h8.PLAN_SELECT:
                a()(null != el, "Missing guildId"),
                  a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, l.jsx)(H.CP, {
                    premiumSubscriptionPlan: eS,
                    numGuildBoosts: eR,
                    setNumGuildBoosts: eL,
                    setForceDisableSubmitButton: e$,
                    premiumSubscription: ec,
                    existingAvailableSlots: eh,
                    onClickPremiumSubscriptionLink: () => {
                      if (__BILLING_STANDALONE__) {
                        window.location.href = "discord://app/settings/nitro";
                        return;
                      }
                      eQ(), null != r && r(), (0, y.z)();
                    },
                    guildId: el,
                    priceOptions: s,
                  })),
                  e0 &&
                    null != ec &&
                    null != ec.paymentGateway &&
                    (e = (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(f.FormErrorBlock, {
                          className: q.externalErrorBlock,
                          children: $.intl.format($.t["/m3Y3t"], {
                            paymentGatewayName: K.Vz[ec.paymentGateway],
                          }),
                        }),
                        e,
                      ],
                    })),
                  (o = (0, l.jsx)(f.Button, {
                    look: f.Button.Looks.LINK,
                    color: (0, p.ap)(eE)
                      ? f.Button.Colors.PRIMARY
                      : f.Button.Colors.WHITE,
                    onClick: eQ,
                    children: $.intl.string($.t.oEAioK),
                  })),
                  (i = (0, l.jsx)(f.Button, {
                    type: "submit",
                    disabled: eK || 0 === eR || e0,
                    onClick: () => {
                      if (
                        !ea &&
                        (null == em ||
                          em.premiumSubscriptionType !== z.p9.TIER_2)
                      ) {
                        eJ(b.h8.PREMIUM_UPSELL);
                        return;
                      }
                      eJ(
                        null != ef || ev ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS,
                      );
                    },
                    children: $.intl.string($.t["3PatS0"]),
                  }));
                break;
              case b.h8.ADD_PAYMENT_STEPS:
                break;
              case b.h8.AWAITING_AUTHENTICATION:
                e = (0, l.jsx)(S.F, { className: q.__invalid_body });
                break;
              case b.h8.REVIEW:
                a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, l.jsx)(H.Gq, {
                    paymentSources: eT,
                    priceOptions: s,
                    currentPremiumSubscription: ec,
                    premiumSubscriptionPaymentSourceId: ef,
                    premiumSubscriptionPlan: eS,
                    newAdditionalPlans: eD,
                    onPaymentSourceChange: (e) => eN(null != e ? e.id : null),
                    onPaymentSourceAdd: () => {
                      eJ(b.h8.ADD_PAYMENT_STEPS), eN(null);
                    },
                    onPurchaseTermsChange: eB,
                    legalTermsNodeRef: e8,
                    hasLegalTermsFlash: e1,
                  })),
                  (t = b.h8.PLAN_SELECT),
                  (i = ej
                    ? (0, l.jsx)(f.Button, {
                        color: f.Button.Colors.GREEN,
                        type: "submit",
                        submitting: ey,
                        onClick: async () => {
                          a()(null != eD, "Missing newAdditionalPlans");
                          let e = null != ex ? eT[ex] : null;
                          eI(null);
                          try {
                            if (
                              (ez(N.A.PURCHASING),
                              eC(!0),
                              a()(null != ex, "Missing paymentSourceId"),
                              U.default.track(X.rMx.PAYMENT_FLOW_COMPLETED, {
                                ...eW,
                                duration_ms: Date.now() - ew,
                                guild_id: el,
                                application_id: eu,
                              }),
                              e4)
                            )
                              return;
                            if (null == ec || null == em) {
                              a()(null != e, "Missing paymentSource");
                              let n = await (0, m.XW)({
                                items: eD,
                                paymentSource: e,
                                currency: s.currency,
                              });
                              if (n.redirectConfirmation) {
                                e6(null != n.redirectURL);
                                return;
                              }
                            } else {
                              let n = { items: (0, F.MY)(ec, eD) };
                              (n.currency = ec.currency),
                                null == n.currency && (n.currency = s.currency),
                                (n.paymentSource =
                                  null != ef ? eT[ef] : void 0),
                                null == n.paymentSource &&
                                  (a()(null != e, "Missing paymentSource"),
                                  (n.paymentSource = e),
                                  (n.currency = s.currency));
                              let t = await (0, m.Mg)(ec, n, eF);
                              if (t.redirectConfirmation) {
                                e6(null != t.redirectURL);
                                return;
                              }
                            }
                            eJ(b.h8.CONFIRM),
                              ez(N.A.COMPLETED),
                              null != el && (await en(el)),
                              null != ei && ei();
                          } catch (n) {
                            ez(N.A.FAIL),
                              eI(n),
                              U.default.track(X.rMx.PAYMENT_FLOW_FAILED, {
                                ...eW,
                                payment_error_code: null == n ? void 0 : n.code,
                                payment_gateway:
                                  null != e
                                    ? e.type === X.HeQ.CARD
                                      ? X.gg$.STRIPE
                                      : X.gg$.BRAINTREE
                                    : null,
                                payment_source_id: ex,
                                duration_ms: Date.now() - ew,
                              });
                          } finally {
                            !e4 && eC(!1);
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
                                e2(!0));
                            },
                            type: "submit",
                            children: $.intl.string($.t.eUEeCg),
                          }),
                      }));
                break;
              case b.h8.CONFIRM:
                var nn;
                let u = L.Z.getGuild(el);
                e = (0, l.jsx)(H.R7, {
                  guild: u,
                  guildBoostQuantity: eR + eh.length,
                  onClose: eQ,
                  withAnimation: !1,
                  paymentSourceType:
                    null === (nn = eT[null != ex ? ex : ""]) || void 0 === nn
                      ? void 0
                      : nn.type,
                });
            }
            let c = null != eA && null == (0, b.ly)(eA) ? eA : ek;
            n =
              eH === b.h8.ADD_PAYMENT_STEPS
                ? ne
                : (0, l.jsx)(v.Z, {
                    hideBreadcrumbs: eH === b.h8.CONFIRM,
                    steps: eG,
                    currentStep: eH,
                    paymentError: c,
                    purchaseErrorBlockRef: eM,
                    hasCurrencies: e5.length > 1,
                    body: e,
                    footer:
                      eH !== b.h8.CONFIRM
                        ? (0, l.jsxs)(f.ModalFooter, {
                            direction: I.Z.Direction.HORIZONTAL,
                            align: I.Z.Align.CENTER,
                            justify: I.Z.Justify.END,
                            children: [
                              null != t
                                ? (0, l.jsx)("div", {
                                    className: q.backStep,
                                    children: (0, l.jsx)(f.Button, {
                                      color: (0, p.ap)(eE)
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
            eH !== b.h8.PREMIUM_UPSELL &&
            (nt = (0, l.jsx)(Y.Z, {
              onClose: eQ,
              currentStep: eH,
              purchaseState: eX,
            })),
          (0, l.jsxs)(f.ModalRoot, { transitionState: t, children: [nt, n] })
        );
      }
      function eo(e) {
        let n = (0, d.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: t } = (0, g.ZP)(h.Z.GUILD_BOOST_PURCHASE_MODAL);
        return (0, l.jsx)(g.Gt, {
          value: t,
          children: (0, l.jsx)(C.PaymentContextProvider, {
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
        u = t(481060),
        c = t(100527),
        d = t(906732),
        p = t(600164),
        f = t(963249),
        m = t(639119),
        _ = t(165583),
        S = t(263954),
        E = t(706454),
        h = t(709586),
        g = t(626135),
        P = t(930153),
        T = t(74538),
        I = t(937615),
        x = t(981631),
        C = t(474936),
        b = t(388032),
        N = t(427930);
      function y(e) {
        let { shouldUpsellFromNoneTier: n } = e,
          t = (0, a.e7)([E.default], () => E.default.locale);
        return (0, o.jsxs)("div", {
          className: N.perksList,
          children: [
            (0, o.jsx)(S.Z, {
              icon: h.Z,
              iconClassName: N.perkIconGuild,
              description: b.intl.formatToPlainString(b.t.sQBgs7, {
                numFreeGuildSubscriptions: C.cb,
              }),
            }),
            (0, o.jsx)(S.Z, {
              icon: h.Z,
              iconClassName: N.perkIconGuild,
              description: b.intl.formatToPlainString(b.t["1A6vXl"], {
                percent: (0, P.T3)(t, C.Rr / 100),
              }),
            }),
            n
              ? (0, o.jsx)(S.Z, {
                  icon: u.ReactionIcon,
                  iconClassName: N.perkIconChatPerks,
                  description: b.intl.string(b.t.Z9b2x8),
                })
              : null,
            (0, o.jsx)(S.Z, {
              icon: u.ScreenArrowIcon,
              iconClassName: N.perkIconStream,
              description: b.intl.string(b.t["8dqG5O"]),
            }),
            (0, o.jsx)(S.Z, {
              icon: u.UploadIcon,
              iconClassName: N.perkIconUpload,
              description: b.intl.string(b.t.cBorIy),
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
            analyticsLocation: h,
            analyticsSourceLocation: P,
            priceOptions: A,
          } = e,
          { analyticsLocations: k, sourceAnalyticsLocations: M } = (0, d.ZP)(
            c.Z.GUILD_BOOSTING_PREMIUM_UPSELL,
          ),
          { theme: v } = (0, u.useThemeContext)(),
          R = (0, s.ap)(v) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
          L = null == t || null == t.premiumSubscriptionType,
          j = T.ZP.getPrice(C.Xh.PREMIUM_MONTH_TIER_2, !1, !1, A),
          B = (0, I.T4)(j.amount, j.currency),
          Z = (0, m.N)(),
          O = null == Z ? void 0 : Z.trial_id,
          D =
            (null == Z
              ? void 0
              : null === (n = Z.subscription_trial) || void 0 === n
                ? void 0
                : n.sku_id) === C.Si.TIER_2;
        return (
          l.useEffect(() => {
            g.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
              type: C.cd.GUILD_PREMIUM_UPSELL_MODAL,
              location_stack: M,
            });
          }, [M]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(u.ModalContent, {
                className: N.content,
                children: [
                  (0, o.jsx)(u.ModalCloseButton, {
                    onClick: i,
                    className: N.closeButton,
                  }),
                  D && (0, o.jsx)(_.dz, { className: N.premiumTrialBadge }),
                  (0, o.jsx)("div", {
                    className: r()(N.upsellImage, {
                      [N.upsellImageWithTrialOffer]: D,
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: N.bodyText,
                    children:
                      null != O
                        ? b.intl.string(b.t.AoSzEh)
                        : b.intl.format(b.t["7vePZW"], { monthlyPrice: B }),
                  }),
                  (0, o.jsx)(y, { shouldUpsellFromNoneTier: L }),
                ],
              }),
              (0, o.jsxs)(u.ModalFooter, {
                align: p.Z.Align.CENTER,
                justify: p.Z.Justify.END,
                children: [
                  (0, o.jsxs)("div", {
                    className: N.footerRight,
                    children: [
                      (0, o.jsx)(u.Button, {
                        look: u.Button.Looks.LINK,
                        color: R,
                        onClick: S,
                        children: b.intl.string(b.t["SI/adn"]),
                      }),
                      (0, o.jsx)(u.Button, {
                        color: u.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => {
                          i(),
                            (0, f.Z)({
                              initialPlanId: null,
                              subscriptionTier: C.Si.TIER_2,
                              analyticsLocations: k,
                              analyticsObject: {
                                ...h,
                                section: x.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
                              },
                              analyticsSourceLocation: P,
                              onSubscriptionConfirmation: E,
                              trialId: O,
                            });
                        },
                        children:
                          null != O
                            ? b.intl.string(b.t["Gd/XHB"])
                            : b.intl.string(b.t.p2moio),
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: N.backStep,
                    children: (0, o.jsx)(u.Button, {
                      color: R,
                      look: u.Button.Looks.LINK,
                      size: u.Button.Sizes.NONE,
                      onClick: () => a(),
                      children: b.intl.string(b.t["13/7kZ"]),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    987209: function (e, n, t) {
      t.d(n, {
        KB: function () {
          return T;
        },
        wD: function () {
          return g;
        },
      }),
        t(47120);
      var o = t(200651),
        l = t(192379),
        i = t(442837),
        r = t(597688),
        a = t(479446),
        s = t(646476),
        u = t(599659),
        c = t(155491),
        d = t(975104),
        p = t(669079),
        f = t(563132),
        m = t(474936),
        _ = t(388032);
      let S = m.Cj.STANDARD_BOX,
        E = void 0,
        [h, g, P] = (0, d.Z)();
      function T(e) {
        let {
            isGift: n = !1,
            giftRecipient: t,
            giftMessage: d,
            giftStyle: g,
            giftingOrigin: P,
            children: T,
          } = e,
          { selectedSkuId: I } = (0, f.usePaymentContext)(),
          [x, C] = l.useState(t),
          [b, N] = l.useState(),
          [y, A] = l.useState(!1),
          k = (0, p.pO)(x),
          M = (0, s.rK)(),
          { enabled: v } = s.ZP.useExperiment(
            { location: "PaymentContextProvider" },
            { autoTrackExposure: k && M },
          ),
          { enabled: R } = u.O.useExperiment({ location: "gift card" }),
          L = E;
        k &&
          ((L = v && M ? m.Cj.SEASONAL_STANDARD_BOX : null != g ? g : S),
          R && (L = m.Cj.NITROWEEN_STANDARD));
        let [j, B] = l.useState(L),
          [Z, O] = l.useState(
            n &&
              (0, p.MY)(x) === p.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
              null == d
              ? _.intl.string(_.t.ZkOo1d)
              : d,
          ),
          [D, U] = l.useState(void 0),
          [w, F] = l.useState(void 0),
          W = (0, p.E5)(I, n),
          [G, Y] = l.useState(!1),
          [H, V] = l.useState(!1),
          [X, z] = l.useState(),
          K = l.useCallback(
            (e) => {
              let { onSubscriptionConfirmation: n } = e;
              return (
                V(!0),
                (0, a.YD)(x, W)
                  .then(() => {
                    V(!1), null == n || n(), Y(!0);
                  })
                  .catch((e) => {
                    V(!1), z(e), Y(!0);
                  })
              );
            },
            [x, W, V, Y, z],
          ),
          $ = (0, c.x8)(),
          q = (0, i.Wu)([r.Z], () => r.Z.recommendedGiftSkuIds);
        return (0, o.jsx)(h.Provider, {
          value: {
            isGift: n,
            giftCode: W,
            giftMessage: d,
            giftRecipient: x,
            setGiftRecipient: C,
            giftRecipientError: b,
            setGiftRecipientError: N,
            validatingGiftRecipient: y,
            setValidatingGiftRecipient: A,
            soundEffect: D,
            setSoundEffect: U,
            emojiConfetti: w,
            setEmojiConfetti: F,
            customGiftMessage: Z,
            setCustomGiftMessage: O,
            selectedGiftStyle: j,
            setSelectedGiftStyle: B,
            sendGiftMessage: K,
            hasSentMessage: G,
            isSendingMessage: H,
            giftMessageError: X,
            alreadyHasHalloweenDeco: $,
            recommendedGiftSkuIds: q,
            giftingOrigin: P,
          },
          children: T,
        });
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
        u = t(388032),
        c = t(659915);
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
                  innerClassName: c.button,
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
                                className: c.primaryIcon,
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
                            className: c.primaryIcon,
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
                  onClick: h,
                  children: E,
                }),
            (0, i.jsx)(s.Z, {}),
            null == n
              ? null
              : (0, i.jsx)(r.Button, {
                  className: c.back,
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  onClick: n,
                  children: null != t ? t : u.intl.string(u.t["13/7kZ"]),
                }),
          ],
        });
      };
      (d.CTAType = l), (n.Z = d);
    },
    612853: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var o = t(200651);
      t(192379);
      var l = t(120356),
        i = t.n(l),
        r = t(481060),
        a = t(388032),
        s = t(221309),
        u = t(652849);
      function c() {
        return (0, o.jsxs)("div", {
          className: i()(s.paymentModalLockIcon, u.flex, u.alignCenter),
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
        u = t(995295),
        c = t(481060),
        d = t(563132),
        p = t(135970);
      function f(e) {
        var n, t, i, a, u, f;
        let {
            header: m,
            isLargeModal: _,
            stepProps: S,
          } = (function (e) {
            let { header: n, isLargeModal: t, ...o } = e;
            return { header: n, isLargeModal: t, stepProps: o };
          })(e),
          {
            step: E,
            stepConfigs: h,
            setBodyNode: g,
            setFooterNode: P,
            setModalOverlayNode: T,
            setReadySlideId: I,
          } = (0, d.usePaymentContext)(),
          x = h.find((e) => e.key === E);
        l.useEffect(() => {
          T(null);
        }, [E, T]),
          s()(null != x, "Unknown step for current payment flow.");
        let C =
            null !==
              (u =
                null == x
                  ? void 0
                  : null === (n = x.options) || void 0 === n
                    ? void 0
                    : n.hideSlider) &&
            void 0 !== u &&
            u,
          b =
            null == x
              ? void 0
              : null === (t = x.options) || void 0 === t
                ? void 0
                : t.bodyClassName,
          N =
            void 0 !== _ && _
              ? p.sliderBodyLarge
              : null == x
                ? void 0
                : null === (i = x.options) || void 0 === i
                  ? void 0
                  : i.sliderBodyClassName;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            null ===
              (f =
                null == x
                  ? void 0
                  : null === (a = x.options) || void 0 === a
                    ? void 0
                    : a.renderHeader) ||
            void 0 === f ||
            f
              ? m
              : null,
            x.renderStep(S),
            null == E || C
              ? null
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(c.ModalContent, {
                      className: r()(p.body, b),
                      children: (0, o.jsx)(c.Slides, {
                        activeSlide: E,
                        centered: !1,
                        onSlideReady: (e) => I(e),
                        children: h
                          .filter((e) => null != e.key)
                          .map((e) =>
                            (0, o.jsx)(
                              c.Slide,
                              {
                                id: e.key,
                                children: (0, o.jsx)("form", {
                                  className: r()(p.sliderBody, N),
                                  ref: (e) => g(e),
                                  onSubmit: (e) => e.preventDefault(),
                                }),
                              },
                              e.key,
                            ),
                          ),
                      }),
                    }),
                    (0, o.jsx)("div", { ref: (e) => P(e) }),
                    (0, o.jsx)("div", { ref: (e) => T(e) }),
                  ],
                }),
          ],
        });
      }
      function m(e) {
        let { children: n } = e,
          { bodyNode: t } = (0, d.usePaymentContext)();
        return null == t ? null : u.createPortal(n, t);
      }
      function _(e) {
        let { children: n } = e,
          { footerNode: t } = (0, d.usePaymentContext)();
        return null == t ? null : u.createPortal(n, t);
      }
    },
    479446: function (e, n, t) {
      t.d(n, {
        Ou: function () {
          return f;
        },
        SR: function () {
          return o;
        },
        YD: function () {
          return p;
        },
      }),
        t(411104);
      var o,
        l,
        i = t(512722),
        r = t.n(i),
        a = t(493683),
        s = t(904245),
        u = t(957730),
        c = t(592125),
        d = t(669079);
      ((l = o || (o = {})).ACTION = "action"),
        (l.LOOP = "loop"),
        (l.IDLE = "idle");
      let p = async (e, n) => {
          if (null == n) throw Error("giftCode must be defined");
          if (null == e) throw Error("Recipient must be defined");
          let t = await a.Z.openPrivateChannel(e.id).then((e) => {
              let n = c.Z.getChannel(e);
              if ((r()(null != n, "PrivateChannel is null"), null == n))
                throw Error("Channel must be defined");
              return n;
            }),
            o = (0, d.Nz)(n);
          return s.Z.sendMessage(t.id, u.ZP.parse(t, o), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
          });
        },
        f = (e) => {};
    },
    431369: function (e, n, t) {
      t.d(n, {
        g: function () {
          return u;
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
      function u(e, n) {
        let t = i.Z.get(e.planId);
        l()(null != t, "missing premium subscription plan");
        let o = i.Z.getForSkuAndInterval(
          (0, r.Wz)(a.Si.GUILD),
          t.interval,
          t.intervalCount,
        );
        l()(null != o, "missing premium guild plan");
        let u =
            null != e.renewalMutations
              ? e.renewalMutations.additionalPlans
              : e.additionalPlans,
          c = (e.status === s.O0b.CANCELED ? 0 : (0, r.uV)(u)) + n,
          d = u.filter((e) => e.planId !== o.id);
        if (c < 0) throw Error("Invalid adjustment");
        return 0 === c ? d : [...d, { planId: o.id, quantity: c }];
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
            successScene: u,
          } = e,
          [c, d] = (0, o.useState)(r);
        return (
          (0, o.useEffect)(() => {
            n === i.A.PURCHASING ? d(a) : n === i.A.FAIL && d(s);
          }, [n, a, s]),
          (0, o.useEffect)(() => {
            t === l.h8.CONFIRM && d(u);
          }, [t, u]),
          [c, d]
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
//# sourceMappingURL=3fe614fd162ad0e0efc9.js.map
