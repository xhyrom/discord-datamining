"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53122"],
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
    518062: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var l = t(200651);
      t(192379);
      var i = t(442837),
        o = t(481060),
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
          _ = (0, i.e7)([r.Z], () => r.Z.useReducedMotion);
        return (0, l.jsxs)(o.ModalHeader, {
          align: a.Z.Align.START,
          className: u.header,
          separator: !1,
          children: [
            (0, l.jsx)(c.fe, {
              className: u.animation,
              nextScene: p,
              onScenePlay: (e) => f(c.fe.getNextScene(e)),
              pauseWhileUnfocused: !1,
              pause: _,
            }),
            (0, l.jsx)("div", { className: u.headerTitle }),
            (0, l.jsx)(o.ModalCloseButton, {
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
            return ei;
          },
          default: function () {
            return eo;
          },
        }),
        t(47120);
      var l,
        i = t(200651),
        o = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(512722),
        c = t.n(s),
        u = t(772848),
        d = t(442837),
        p = t(780384),
        f = t(481060),
        _ = t(355467),
        S = t(179360),
        m = t(723484),
        E = t(211266),
        h = t(493773),
        I = t(330726),
        P = t(100527),
        g = t(906732),
        T = t(15640),
        x = t(89057),
        N = t(600164),
        C = t(232127),
        M = t(563132),
        y = t(409813),
        L = t(45572),
        k = t(98278),
        R = t(431369),
        A = t(176919),
        b = t(3409),
        v = t(185139),
        Z = t(210887),
        D = t(430824),
        j = t(314884),
        B = t(975060),
        O = t(853872),
        U = t(509545),
        w = t(78839),
        G = t(626135),
        W = t(267642),
        F = t(74538),
        Y = t(212895),
        H = t(296848),
        V = t(518062),
        X = t(4434),
        z = t(333451),
        q = t(981631),
        K = t(474936),
        J = t(231338),
        Q = t(388032),
        $ = t(122959);
      (l || (l = {})).PREMIUM = "discord://app/settings/nitro";
      let ee = K.Xh.NONE_MONTH,
        en = [y.h8.PLAN_SELECT, y.h8.REVIEW, y.h8.CONFIRM],
        et = [
          y.h8.PLAN_SELECT,
          y.h8.ADD_PAYMENT_STEPS,
          y.h8.REVIEW,
          y.h8.CONFIRM,
        ];
      async function el(e) {
        await (0, S.X8)();
        let n = (0, W.vx)(j.Z.boostSlots);
        return (0, S.W3)(
          e,
          n.map((e) => e.id),
        );
      }
      function ei(e) {
        let n,
          {
            transitionState: t,
            onClose: l,
            closeGuildPerksModal: r,
            analyticsLocations: s,
            analyticsLocation: S,
            analyticsSourceLocation: ei,
            guildId: eo,
            onSubscribeComplete: er,
            totalNumberOfSlotsToAssign: ea = 1,
            disablePremiumUpsell: es = !1,
            onSubscriptionConfirmation: ec,
            applicationId: eu,
          } = e,
          { activeSubscription: ed, blockedPayments: ep } = (0,
          M.usePaymentContext)(),
          ef = (0, d.e7)([w.ZP], () => w.ZP.hasFetchedSubscriptions()),
          e_ = null != ed ? ed.paymentSourceId : null,
          eS = (0, d.e7)([U.Z], () =>
            null != ed ? (0, H.oE)(ed.planId) : null,
          ),
          em = (0, d.e7)([U.Z], () => null == ed || null != U.Z.get(ed.planId)),
          eE = (0, d.e7)([U.Z], () => (null == eS ? U.Z.get(ee) : eS)),
          eh = (0, d.e7)([Z.Z], () => Z.Z.theme),
          eI = o.useRef((0, W.vx)(j.Z.boostSlots)).current,
          eP = (0, d.e7)([O.Z], () => O.Z.defaultPaymentSourceId),
          eg = (0, b.fL)(null != e_ ? e_ : ef ? eP : null),
          {
            paymentSources: eT,
            setPurchaseError: ex,
            paymentSourceId: eN,
            setIsSubmittingCurrentStep: eC,
            paymentAuthenticationState: eM,
            setPaymentSourceId: ey,
            isSubmittingCurrentStep: eL,
            paymentError: ek,
            purchaseError: eR,
            purchaseErrorBlockRef: eA,
          } = eg,
          eb = Object.keys(eT).length > 0,
          [ev, eZ] = o.useState(ea - eI.length),
          [eD, ej] = o.useState(!1),
          eB = (0, d.e7)([B.Z], () => B.Z.popupCallbackCalled),
          eO = (0, T.V)(),
          eU = o.useMemo(
            () =>
              null != ed && em && eO
                ? (0, R.g)(ed, ev)
                : [{ planId: K.Xh.PREMIUM_MONTH_GUILD, quantity: ev }],
            [ed, em, ev, eO],
          ),
          [ew, eG] = (0, E.Z)(() => [(0, u.Z)(), Date.now()]),
          { analyticsLocations: eW } = (0, g.ZP)(
            s,
            P.Z.GUILD_BOOST_PURCHASE_MODAL,
          ),
          eF = o.useMemo(() => {
            var e, n;
            return {
              load_id: ew,
              payment_type: J.Zu[J.GZ.SUBSCRIPTION],
              sku_id: K.Si.GUILD,
              subscription_type: q.NYc.PREMIUM,
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
              quantity: ev,
              location: S,
              source: ei,
              location_stack: eW,
            };
          }, [ew, S, eW, ei, eU, ev]);
        o.useEffect(() => {
          (0, Y.i1)(eN);
        }, [eN]);
        let [eY, eH] = o.useState(y.h8.PLAN_SELECT),
          eV = o.useMemo(() => Date.now(), [eY]),
          eX = o.useCallback(
            (e, n) => {
              eH(e), ex(null);
              let t = Date.now();
              G.default.track(q.rMx.PAYMENT_FLOW_STEP, {
                ...eF,
                from_step: null != n ? n : eY,
                to_step: e === y.h8.ADD_PAYMENT_STEPS ? y.h8.PAYMENT_TYPE : e,
                step_duration_ms: t - eV,
                flow_duration_ms: t - eG,
                guild_id: eo,
                application_id: eu,
              });
            },
            [ex, eF, eY, eV, eG, eo, eu],
          ),
          ez = {
            baseAnalyticsData: eF,
            flowStartTime: eG,
            guildId: eo,
            handleStepChange: eX,
            onSubscribeComplete: er,
            paymentSourceId: eN,
            setIsSubmittingCurrentStep: eC,
            setPurchaseError: ex,
          },
          eq = o.useRef(ez);
        o.useEffect(() => {
          eq.current = ez;
        }),
          o.useEffect(() => {
            let {
              baseAnalyticsData: e,
              flowStartTime: n,
              guildId: t,
              handleStepChange: l,
              onSubscribeComplete: i,
              paymentSourceId: o,
              setIsSubmittingCurrentStep: r,
              setPurchaseError: a,
            } = eq.current;
            (async () => {
              if (!0 === eB)
                try {
                  if (null == B.Z.redirectedPaymentId) return;
                  await (0, _.OP)(B.Z.redirectedPaymentId),
                    l(y.h8.CONFIRM),
                    e$(L.A.COMPLETED),
                    null != t && (await el(t)),
                    null != i && i();
                } catch (t) {
                  e$(L.A.FAIL),
                    a(t),
                    G.default.track(q.rMx.PAYMENT_FLOW_FAILED, {
                      ...e,
                      payment_error_code: null == t ? void 0 : t.code,
                      payment_gateway: q.gg$.STRIPE,
                      payment_source_id: o,
                      duration_ms: Date.now() - n,
                    });
                } finally {
                  r(!1), (0, _.K2)();
                }
            })();
          }, [eB]),
          (0, h.Z)(() => {
            !w.ZP.hasFetchedSubscriptions() && (0, _.jg)(),
              (0, C.U)({ ...eF, guild_id: eo, application_id: eu }),
              null != ed &&
                null != ed.renewalMutations &&
                G.default.track(q.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                  location: S,
                  guild_id: eo,
                });
          });
        let [eK, eJ] = o.useState(en),
          [eQ, e$] = o.useState(L.A.WAITING),
          [e0, e8] = o.useState(!0),
          e7 = () => {
            l(eQ === L.A.COMPLETED);
          },
          e2 = null != ed && ed.isPurchasedExternally;
        o.useEffect(() => {
          eM !== A.wr.PENDING &&
            eY !== y.h8.CONFIRM &&
            null != e_ &&
            (eK !== en && eJ(en),
            !en.includes(eY) && eY !== y.h8.PREMIUM_UPSELL && eX(y.h8.REVIEW)),
            eY === y.h8.ADD_PAYMENT_STEPS && eK !== et && eJ(et),
            e2 && eY !== y.h8.PLAN_SELECT && eH(y.h8.PLAN_SELECT);
        }, [eY, eX, e2, eM, ed, e_, eK]),
          (0, A.bp)(eY, eM, eX, e$),
          (0, y.dZ)(eY, eQ, e$);
        let e1 = o.useRef(null),
          [e3, e4] = (0, I.Z)(!1, 500),
          [e9, e5] = o.useState(null),
          [e6, ne] = o.useState([]),
          [nn, nt] = o.useState(!1),
          nl = o.useMemo(() => JSON.stringify(e6), [e6]);
        o.useEffect(() => {
          let e;
          if (!!eO)
            null != U.Z.get(K.Xh.PREMIUM_MONTH_GUILD) &&
              ne((e = (0, Y.DE)(K.Xh.PREMIUM_MONTH_GUILD, eN, !1))),
              null == eN && null != ed && null != ed.paymentSourceId
                ? e5(ed.currency)
                : null != e && e5(e[0]);
        }, [eN, ed, eO, nl]);
        let ni = (0, b.vP)({
          paymentModalArgs: eg,
          initialStep: y.h8.PAYMENT_TYPE,
          prependSteps: [y.h8.PLAN_SELECT],
          appendSteps: [y.h8.REVIEW, y.h8.CONFIRM],
          breadcrumpSteps: eK,
          currentBreadcrumpStep: eY,
          onReturn: () => {
            eX(
              Object.values(eT).length < 1 ? y.h8.PLAN_SELECT : y.h8.REVIEW,
              y.h8.PAYMENT_TYPE,
            );
          },
          onComplete: (e) => {
            eX(y.h8.REVIEW, e);
          },
          onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
              l = Date.now();
            G.default.track(q.rMx.PAYMENT_FLOW_STEP, {
              ...eF,
              from_step: n,
              to_step: t,
              step_duration_ms: l - eV,
              flow_duration_ms: l - eG,
              guild_id: eo,
            });
          },
        });
        if (ep) n = (0, i.jsx)(x.Vq, { onClose: e7 });
        else if (ef && em && eO && null != e9 && "" !== e9) {
          if (null == ed ? void 0 : ed.isPausedOrPausePending)
            n = (0, i.jsx)(f.ModalContent, {
              children: (0, i.jsx)("p", {
                className: $.copy,
                children: Q.intl.string(Q.t.mOWsFx),
              }),
            });
          else if (null != ed && null != ed.renewalMutations)
            n = (0, i.jsx)(f.ModalContent, {
              children: (0, i.jsx)("p", {
                className: $.copy,
                children: Q.intl.string(Q.t.npfhh4),
              }),
            });
          else if (eY === y.h8.PREMIUM_UPSELL) {
            c()(null != eE, "Missing nextPremiumSubscriptionPlan"),
              c()(e9, "Currency not defined");
            let e =
              null != eN
                ? { paymentSourceId: eN, currency: e9 }
                : { currency: e9 };
            n = (0, i.jsx)(z.Z, {
              premiumSubscriptionPlan: eE,
              analyticsLocation: S,
              analyticsSourceLocation: ei,
              onClose: e7,
              onBack: () => eX(y.h8.PLAN_SELECT),
              onSkip: () =>
                eX(null != e_ || eb ? y.h8.REVIEW : y.h8.ADD_PAYMENT_STEPS),
              onSubscriptionConfirmation: ec,
              priceOptions: e,
            });
          } else {
            let e, t, l, o;
            c()(e9, "Currency not defined");
            let a =
              null != eN
                ? { paymentSourceId: eN, currency: e9 }
                : { currency: e9 };
            switch (eY) {
              case y.h8.PLAN_SELECT:
                c()(null != eo, "Missing guildId"),
                  c()(null != eE, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, i.jsx)(X.CP, {
                    premiumSubscriptionPlan: eE,
                    numGuildBoosts: ev,
                    setNumGuildBoosts: eZ,
                    setForceDisableSubmitButton: e8,
                    premiumSubscription: ed,
                    existingAvailableSlots: eI,
                    onClickPremiumSubscriptionLink: () => {
                      if (__BILLING_STANDALONE__) {
                        window.location.href = "discord://app/settings/nitro";
                        return;
                      }
                      e7(), null != r && r(), (0, k.z)();
                    },
                    guildId: eo,
                    priceOptions: a,
                  })),
                  e2 &&
                    null != ed &&
                    null != ed.paymentGateway &&
                    (e = (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(f.FormErrorBlock, {
                          className: $.externalErrorBlock,
                          children: Q.intl.format(Q.t["/m3Y3t"], {
                            paymentGatewayName: J.Vz[ed.paymentGateway],
                          }),
                        }),
                        e,
                      ],
                    })),
                  (l = (0, i.jsx)(f.Button, {
                    look: f.Button.Looks.LINK,
                    color: (0, p.ap)(eh)
                      ? f.Button.Colors.PRIMARY
                      : f.Button.Colors.WHITE,
                    onClick: e7,
                    children: Q.intl.string(Q.t.oEAioK),
                  })),
                  (o = (0, i.jsx)(f.Button, {
                    type: "submit",
                    disabled: e0 || 0 === ev || e2,
                    onClick: () => {
                      if (
                        !es &&
                        (null == eS ||
                          eS.premiumSubscriptionType !== K.p9.TIER_2)
                      ) {
                        eX(y.h8.PREMIUM_UPSELL);
                        return;
                      }
                      eX(
                        null != e_ || eb ? y.h8.REVIEW : y.h8.ADD_PAYMENT_STEPS,
                      );
                    },
                    children: Q.intl.string(Q.t["3PatS0"]),
                  }));
                break;
              case y.h8.ADD_PAYMENT_STEPS:
                break;
              case y.h8.AWAITING_AUTHENTICATION:
                e = (0, i.jsx)(m.F, { className: $.__invalid_body });
                break;
              case y.h8.REVIEW:
                c()(null != eE, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, i.jsx)(X.Gq, {
                    paymentSources: eT,
                    priceOptions: a,
                    currentPremiumSubscription: ed,
                    premiumSubscriptionPaymentSourceId: e_,
                    premiumSubscriptionPlan: eE,
                    newAdditionalPlans: eU,
                    onPaymentSourceChange: (e) => ey(null != e ? e.id : null),
                    onPaymentSourceAdd: () => {
                      eX(y.h8.ADD_PAYMENT_STEPS), ey(null);
                    },
                    onPurchaseTermsChange: ej,
                    legalTermsNodeRef: e1,
                    hasLegalTermsFlash: e3,
                  })),
                  (t = y.h8.PLAN_SELECT),
                  (o = eD
                    ? (0, i.jsx)(f.Button, {
                        color: f.Button.Colors.GREEN,
                        type: "submit",
                        submitting: eL,
                        onClick: async () => {
                          c()(null != eU, "Missing newAdditionalPlans");
                          let e = null != eN ? eT[eN] : null;
                          ex(null);
                          try {
                            if (
                              (e$(L.A.PURCHASING),
                              eC(!0),
                              c()(null != eN, "Missing paymentSourceId"),
                              G.default.track(q.rMx.PAYMENT_FLOW_COMPLETED, {
                                ...eF,
                                duration_ms: Date.now() - eG,
                                guild_id: eo,
                                application_id: eu,
                              }),
                              nn)
                            )
                              return;
                            if (null == ed || null == eS) {
                              c()(null != e, "Missing paymentSource");
                              let n = await (0, _.XW)({
                                items: eU,
                                paymentSource: e,
                                currency: a.currency,
                              });
                              if (n.redirectConfirmation) {
                                nt(null != n.redirectURL);
                                return;
                              }
                            } else {
                              let n = { items: (0, F.MY)(ed, eU) };
                              (n.currency = ed.currency),
                                null == n.currency && (n.currency = a.currency),
                                (n.paymentSource =
                                  null != e_ ? eT[e_] : void 0),
                                null == n.paymentSource &&
                                  (c()(null != e, "Missing paymentSource"),
                                  (n.paymentSource = e),
                                  (n.currency = a.currency));
                              let t = await (0, _.Mg)(ed, n, eW);
                              if (t.redirectConfirmation) {
                                nt(null != t.redirectURL);
                                return;
                              }
                            }
                            eX(y.h8.CONFIRM),
                              e$(L.A.COMPLETED),
                              null != eo && (await el(eo)),
                              null != er && er();
                          } catch (n) {
                            e$(L.A.FAIL),
                              ex(n),
                              G.default.track(q.rMx.PAYMENT_FLOW_FAILED, {
                                ...eF,
                                payment_error_code: null == n ? void 0 : n.code,
                                payment_gateway:
                                  null != e
                                    ? e.type === q.HeQ.CARD
                                      ? q.gg$.STRIPE
                                      : q.gg$.BRAINTREE
                                    : null,
                                payment_source_id: eN,
                                duration_ms: Date.now() - eG,
                              });
                          } finally {
                            !nn && eC(!1);
                          }
                        },
                        children: Q.intl.string(Q.t.eUEeCg),
                      })
                    : (0, i.jsx)(f.Tooltip, {
                        text: Q.intl.string(Q.t.XdvBLS),
                        children: (e) =>
                          (0, i.jsx)(f.Button, {
                            ...e,
                            color: f.Button.Colors.GREEN,
                            onClick: () => {
                              null != e1.current &&
                                (e1.current.scrollIntoView({
                                  behavior: "smooth",
                                }),
                                e4(!0));
                            },
                            type: "submit",
                            children: Q.intl.string(Q.t.eUEeCg),
                          }),
                      }));
                break;
              case y.h8.CONFIRM:
                var no;
                let s = D.Z.getGuild(eo);
                e = (0, i.jsx)(X.R7, {
                  guild: s,
                  guildBoostQuantity: ev + eI.length,
                  onClose: e7,
                  withAnimation: !1,
                  paymentSourceType:
                    null === (no = eT[null != eN ? eN : ""]) || void 0 === no
                      ? void 0
                      : no.type,
                });
            }
            let u = null != ek && null == (0, y.ly)(ek) ? ek : eR;
            n =
              eY === y.h8.ADD_PAYMENT_STEPS
                ? ni
                : (0, i.jsx)(v.Z, {
                    hideBreadcrumbs: eY === y.h8.CONFIRM,
                    steps: eK,
                    currentStep: eY,
                    paymentError: u,
                    purchaseErrorBlockRef: eA,
                    hasCurrencies: e6.length > 1,
                    body: e,
                    footer:
                      eY !== y.h8.CONFIRM
                        ? (0, i.jsxs)(f.ModalFooter, {
                            direction: N.Z.Direction.HORIZONTAL,
                            align: N.Z.Align.CENTER,
                            justify: N.Z.Justify.END,
                            children: [
                              null != t
                                ? (0, i.jsx)("div", {
                                    className: $.backStep,
                                    children: (0, i.jsx)(f.Button, {
                                      color: (0, p.ap)(eh)
                                        ? f.Button.Colors.PRIMARY
                                        : f.Button.Colors.WHITE,
                                      look: f.Button.Looks.LINK,
                                      size: f.Button.Sizes.NONE,
                                      onClick: () => {
                                        null != t && eX(t);
                                      },
                                      children: Q.intl.string(Q.t["13/7kZ"]),
                                    }),
                                  })
                                : null,
                              (0, i.jsxs)("div", {
                                className: $.footerRight,
                                children: [l, o],
                              }),
                            ],
                          })
                        : null,
                  });
          }
        } else
          n = (0, i.jsx)("div", {
            className: $.loadingWrapper,
            children: (0, i.jsx)(f.Spinner, {}),
          });
        let nr = null;
        return (
          !ep &&
            eY !== y.h8.PREMIUM_UPSELL &&
            (nr = (0, i.jsx)(V.Z, {
              onClose: e7,
              currentStep: eY,
              purchaseState: eQ,
            })),
          (0, i.jsxs)(f.ModalRoot, {
            transitionState: t,
            className: a()({ [$.planSelectStep]: eY === y.h8.PLAN_SELECT }),
            children: [nr, n],
          })
        );
      }
      function eo(e) {
        let n = (0, d.e7)([w.ZP], () => w.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: t } = (0, g.ZP)(P.Z.GUILD_BOOST_PURCHASE_MODAL);
        return (0, i.jsx)(g.Gt, {
          value: t,
          children: (0, i.jsx)(M.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, i.jsx)(ei, { ...e }),
          }),
        });
      }
    },
    333451: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return L;
        },
      });
      var l = t(200651),
        i = t(192379),
        o = t(120356),
        r = t.n(o),
        a = t(442837),
        s = t(780384),
        c = t(481060),
        u = t(100527),
        d = t(906732),
        p = t(600164),
        f = t(963249),
        _ = t(639119),
        S = t(165583),
        m = t(263954),
        E = t(706454),
        h = t(709586),
        I = t(626135),
        P = t(930153),
        g = t(74538),
        T = t(937615),
        x = t(981631),
        N = t(474936),
        C = t(388032),
        M = t(427930);
      function y(e) {
        let { shouldUpsellFromNoneTier: n } = e,
          t = (0, a.e7)([E.default], () => E.default.locale);
        return (0, l.jsxs)("div", {
          className: M.perksList,
          children: [
            (0, l.jsx)(m.Z, {
              icon: h.Z,
              iconClassName: M.perkIconGuild,
              description: C.intl.formatToPlainString(C.t.sQBgs7, {
                numFreeGuildSubscriptions: N.cb,
              }),
            }),
            (0, l.jsx)(m.Z, {
              icon: h.Z,
              iconClassName: M.perkIconGuild,
              description: C.intl.formatToPlainString(C.t["1A6vXl"], {
                percent: (0, P.T3)(t, N.Rr / 100),
              }),
            }),
            n
              ? (0, l.jsx)(m.Z, {
                  icon: c.ReactionIcon,
                  iconClassName: M.perkIconChatPerks,
                  description: C.intl.string(C.t.Z9b2x8),
                })
              : null,
            (0, l.jsx)(m.Z, {
              icon: c.ScreenArrowIcon,
              iconClassName: M.perkIconStream,
              description: C.intl.string(C.t["8dqG5O"]),
            }),
            (0, l.jsx)(m.Z, {
              icon: c.UploadIcon,
              iconClassName: M.perkIconUpload,
              description: C.intl.string(C.t.cBorIy),
            }),
          ],
        });
      }
      function L(e) {
        var n;
        let {
            premiumSubscriptionPlan: t,
            onClose: o,
            onBack: a,
            onSkip: m,
            onSubscriptionConfirmation: E,
            analyticsLocation: h,
            analyticsSourceLocation: P,
            priceOptions: L,
          } = e,
          { analyticsLocations: k, sourceAnalyticsLocations: R } = (0, d.ZP)(
            u.Z.GUILD_BOOSTING_PREMIUM_UPSELL,
          ),
          { theme: A } = (0, c.useThemeContext)(),
          b = (0, s.ap)(A) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
          v = null == t || null == t.premiumSubscriptionType,
          Z = g.ZP.getPrice(N.Xh.PREMIUM_MONTH_TIER_2, !1, !1, L),
          D = (0, T.T4)(Z.amount, Z.currency),
          j = (0, _.N)(),
          B = null == j ? void 0 : j.trial_id,
          O =
            (null == j
              ? void 0
              : null === (n = j.subscription_trial) || void 0 === n
                ? void 0
                : n.sku_id) === N.Si.TIER_2;
        return (
          i.useEffect(() => {
            I.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
              type: N.cd.GUILD_PREMIUM_UPSELL_MODAL,
              location_stack: R,
            });
          }, [R]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(c.ModalContent, {
                className: M.content,
                children: [
                  (0, l.jsx)(c.ModalCloseButton, {
                    onClick: o,
                    className: M.closeButton,
                  }),
                  O && (0, l.jsx)(S.dz, { className: M.premiumTrialBadge }),
                  (0, l.jsx)("div", {
                    className: r()(M.upsellImage, {
                      [M.upsellImageWithTrialOffer]: O,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: M.bodyText,
                    children:
                      null != B
                        ? C.intl.string(C.t.AoSzEh)
                        : C.intl.format(C.t["7vePZW"], { monthlyPrice: D }),
                  }),
                  (0, l.jsx)(y, { shouldUpsellFromNoneTier: v }),
                ],
              }),
              (0, l.jsxs)(c.ModalFooter, {
                align: p.Z.Align.CENTER,
                justify: p.Z.Justify.END,
                children: [
                  (0, l.jsxs)("div", {
                    className: M.footerRight,
                    children: [
                      (0, l.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: b,
                        onClick: m,
                        children: C.intl.string(C.t["SI/adn"]),
                      }),
                      (0, l.jsx)(c.Button, {
                        color: c.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => {
                          o(),
                            (0, f.Z)({
                              initialPlanId: null,
                              subscriptionTier: N.Si.TIER_2,
                              analyticsLocations: k,
                              analyticsObject: {
                                ...h,
                                section: x.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
                              },
                              analyticsSourceLocation: P,
                              onSubscriptionConfirmation: E,
                              trialId: B,
                            });
                        },
                        children:
                          null != B
                            ? C.intl.string(C.t["Gd/XHB"])
                            : C.intl.string(C.t.p2moio),
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: M.backStep,
                    children: (0, l.jsx)(c.Button, {
                      color: b,
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
    431369: function (e, n, t) {
      t.d(n, {
        g: function () {
          return c;
        },
      }),
        t(411104),
        t(47120);
      var l = t(512722),
        i = t.n(l),
        o = t(509545),
        r = t(74538),
        a = t(474936),
        s = t(981631);
      function c(e, n) {
        let t = o.Z.get(e.planId);
        i()(null != t, "missing premium subscription plan");
        let l = o.Z.getForSkuAndInterval(
          (0, r.Wz)(a.Si.GUILD),
          t.interval,
          t.intervalCount,
        );
        i()(null != l, "missing premium guild plan");
        let c =
            null != e.renewalMutations
              ? e.renewalMutations.additionalPlans
              : e.additionalPlans,
          u = (e.status === s.O0b.CANCELED ? 0 : (0, r.uV)(c)) + n,
          d = c.filter((e) => e.planId !== l.id);
        if (u < 0) throw Error("Invalid adjustment");
        return 0 === u ? d : [...d, { planId: l.id, quantity: u }];
      }
    },
    263954: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(120356),
        o = t.n(i),
        r = t(775475);
      function a(e) {
        let { icon: n, iconClassName: t, description: i, color: a } = e;
        return (0, l.jsxs)("div", {
          className: r.perkRow,
          children: [
            (0, l.jsx)("div", {
              className: r.perkIconContainer,
              children: (0, l.jsx)(n, {
                color: null != a ? a : "currentColor",
                className: o()(r.perkIcon, t),
              }),
            }),
            (0, l.jsx)("div", { className: r.perkDescription, children: i }),
          ],
        });
      }
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
        planSelectStep: "planSelectStep_eeab8f",
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
//# sourceMappingURL=4ec2fc9cfe131307ad96.js.map
