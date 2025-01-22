"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86513"],
  {
    17894: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return g;
        },
      });
      var i = t(525654),
        l = t.n(i),
        r = t(39612),
        a = t(271579),
        o = t(756647),
        s = t(232567),
        u = t(703656),
        c = t(314897),
        d = t(896797),
        m = t(626135),
        f = t(954824),
        h = t(981631);
      async function p(n) {
        var e, t;
        let i = null === (e = l().os) || void 0 === e ? void 0 : e.family;
        if ("Android" === i || "iOS" === i) {
          let e =
              null !== (t = c.default.getFingerprint()) && void 0 !== t
                ? t
                : c.default.getId(),
            i = (0, a.WS)();
          if (null == e && c.default.isAuthenticated())
            try {
              await (0, s.k)(), (e = c.default.getId());
            } catch {}
          return (0, a.ZP)((0, r.Gk)(), {
            utmSource: n,
            fingerprint: e,
            attemptId: i,
          });
        }
        return "discord://";
      }
      async function g(n) {
        let e = await p(n),
          t = (0, a.zS)(e);
        null != t &&
          m.default.track(h.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(t.fingerprint),
            attempt_id: t.attemptId,
            source: t.utmSource,
          }),
          f.Z.launch(e, (n) => {
            !n && (0, u.dL)(d.Z.fallbackRoute);
          });
      }
    },
    721165: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return x;
        },
      }),
        t(789020);
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        a = t(131388),
        o = t(171246),
        s = t(689011),
        u = t(931905),
        c = t(430824),
        d = t(563132),
        m = t(409813),
        f = t(586585),
        h = t(614277),
        p = t(750143),
        g = t(388032);
      function x(n) {
        let { handleStepChange: e, handleClose: t } = n,
          {
            subscriptionMetadataRequest: x,
            selectedSku: v,
            selectedStoreListing: b,
            application: C,
          } = (0, d.usePaymentContext)(),
          j = (0, a.Z)(p.i),
          S = (0, r.e7)([c.Z], () =>
            c.Z.getGuild(null == x ? void 0 : x.guild_id),
          ),
          N = l.useCallback(() => e(m.h8.REVIEW), [e]);
        if (null == v) return null;
        let T = (0, o.KW)(v.flags);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(h.C3, {
              children: j
                ? (0, i.jsx)(u.h, {
                    confirmCta: g.intl.string(g.t.PBHFSk),
                    onConfirm: N,
                    onCancel: t,
                    title: g.intl.format(g.t["6n6oXF"], { tier: v.name }),
                    subtitle: T
                      ? g.intl.string(g.t.lzAoKC)
                      : g.intl.formatToPlainString(g.t["GqaY/v"], {
                          guildName: null == S ? void 0 : S.name,
                        }),
                    showOpenDiscord: !1,
                  })
                : (0, i.jsx)(s.Oc, {
                    icon: null == b ? void 0 : b.thumbnail,
                    storeListingBenefits: null == b ? void 0 : b.benefits,
                    application: null != C ? C : void 0,
                    title: g.intl.format(g.t.haiCxc, { tier: v.name }),
                    subtitle: T
                      ? g.intl.string(g.t.RvtbPz)
                      : g.intl.string(g.t.zY39Zm),
                    description: T
                      ? g.intl.formatToPlainString(g.t.QCe4ra, {
                          applicationName: null == C ? void 0 : C.name,
                        })
                      : g.intl.string(g.t.n1Pu8P),
                  }),
            }),
            !j &&
              (0, i.jsx)(h.O3, {
                children: (0, i.jsx)(f.Z, {
                  onBack: t,
                  backText: g.intl.string(g.t.TQBY1N),
                  onPrimary: N,
                  primaryCTA: f.g.CONTINUE,
                  primaryText: g.intl.string(g.t["gZhF+/"]),
                }),
              }),
          ],
        });
      }
    },
    519801: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return b;
        },
      }),
        t(789020);
      var i = t(200651),
        l = t(192379),
        r = t(131388),
        a = t(607070),
        o = t(745510),
        s = t(171246),
        u = t(689011),
        c = t(931905),
        d = t(563132),
        m = t(409813),
        f = t(586585),
        h = t(456251),
        p = t(614277),
        g = t(698708),
        x = t(750143),
        v = t(388032);
      function b(n) {
        var e, t;
        let b,
          C,
          {
            showBenefits: j,
            handleClose: S,
            onSubscriptionConfirmation: N,
          } = n,
          {
            updatedSubscription: T,
            readySlideId: P,
            selectedSku: _,
            selectedStoreListing: y,
            application: k,
          } = (0, d.usePaymentContext)(),
          E = (0, r.Z)(x.i),
          { createMultipleConfettiAt: Z } = l.useContext(o.h),
          I =
            null !== (e = null == _ ? void 0 : _.name) && void 0 !== e ? e : "",
          A = () => {
            S(), null == N || N();
          },
          B = P === m.h8.CONFIRM,
          F = (0, s.KW)(
            null !== (t = null == _ ? void 0 : _.flags) && void 0 !== t ? t : 0,
          ),
          R =
            null != y && y.benefits.length > 0
              ? v.intl.formatToPlainString(v.t["+IQQVF"], {
                  benefitCount: y.benefits.length,
                })
              : null;
        return (
          j
            ? E
              ? (b = (0, i.jsx)(c.h, {
                  title: v.intl.format(v.t.ea6tZm, { tierName: I }),
                  subtitle:
                    null != y && y.benefits.length > 0
                      ? v.intl.formatToPlainString(v.t.HNepfn, { benefits: R })
                      : null,
                  onConfirm: A,
                  confirmCta: v.intl.string(v.t.nlkyw8),
                }))
              : ((b =
                  null != y && null != k
                    ? (0, i.jsx)(u.Oc, {
                        icon: y.thumbnail,
                        storeListingBenefits: y.benefits,
                        application: k,
                        title: v.intl.format(v.t["Q+qktb"], { tier: I }),
                        subtitle: v.intl.string(v.t.ECKxXV),
                        description: F
                          ? v.intl.format(v.t.MAtQk5, {
                              applicationName: null == k ? void 0 : k.name,
                            })
                          : v.intl.format(v.t.vHkMFx, { tier: I }),
                      })
                    : (0, i.jsx)(h.Z, {})),
                (C = (0, i.jsx)(f.Z, {
                  onPrimary: A,
                  primaryCTA: f.g.CONTINUE,
                  primaryText: v.intl.string(v.t["JtWl+f"]),
                })))
            : (b = E
                ? (0, i.jsx)(c.m, {
                    tierName: I,
                    onConfirm: A,
                    subscription: T,
                  })
                : (0, i.jsx)(u.xe, {
                    tierName: I,
                    onConfirm: A,
                    subscription: T,
                  })),
          l.useEffect(() => {
            a.Z.useReducedMotion &&
              B &&
              Z(window.innerWidth / 2, window.innerHeight / 2);
          }, [Z, B]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(p.C3, { children: [(0, i.jsx)(g.Z, {}), b] }),
              null != C && (0, i.jsx)(p.O3, { children: C }),
            ],
          })
        );
      }
    },
    759386: function (n, e, t) {
      t.r(e),
        t.d(e, {
          getApplicationPaymentSteps: function () {
            return m;
          },
        }),
        t(47120);
      var i = t(200651);
      t(192379);
      var l = t(409813),
        r = t(276442),
        a = t(961830),
        o = t(721165),
        s = t(519801),
        u = t(589771),
        c = t(883419),
        d = t(388032);
      function m(n) {
        let { guildId: e, showBenefitsFirst: t } = n;
        return [
          {
            key: null,
            renderStep: (n) =>
              (0, i.jsx)(u.Z, {
                initialStep: t ? l.h8.BENEFITS : l.h8.REVIEW,
                guildId: e,
                ...n,
              }),
          },
          {
            key: l.h8.BENEFITS,
            renderStep: (n) => (0, i.jsx)(o.Z, { ...n }),
            options: { useBreadcrumbLabel: () => d.intl.string(d.t["5LD2+P"]) },
          },
          {
            key: l.h8.ADD_PAYMENT_STEPS,
            renderStep: (n) =>
              (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(r.J, {
                  ...n,
                  breadcrumbSteps: [
                    l.h8.ADD_PAYMENT_STEPS,
                    l.h8.REVIEW,
                    l.h8.CONFIRM,
                  ],
                }),
              }),
            options: { renderHeader: !0 },
          },
          ...a.yp,
          {
            key: l.h8.REVIEW,
            renderStep: (n) =>
              (0, i.jsx)(c.Z, {
                backButtonEligible: !!t || void 0,
                prevStep: t ? l.h8.BENEFITS : void 0,
                ...n,
              }),
            options: {
              renderHeader: !0,
              useBreadcrumbLabel: () => d.intl.string(d.t.QBnNHh),
            },
          },
          {
            key: l.h8.CONFIRM,
            renderStep: (n) => (0, i.jsx)(s.Z, { showBenefits: !t, ...n }),
          },
        ];
      }
    },
    589771: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(89057),
        a = t(509545),
        o = t(74538),
        s = t(987209),
        u = t(563132),
        c = t(456251);
      function d(n) {
        let {
            initialStep: e,
            initialPlanId: t,
            guildId: d,
            setAnalyticsData: m,
            handleClose: f,
          } = n,
          {
            blockedPayments: h,
            setStep: p,
            hasFetchedSubscriptions: g,
            hasFetchedSubscriptionPlans: x,
            currencyLoading: v,
            selectedSkuId: b,
            setSelectedSkuId: C,
            setSelectedPlanId: j,
            priceOptions: S,
            setSubscriptionMetadataRequest: N,
          } = (0, u.usePaymentContext)(),
          { isGift: T } = (0, s.wD)(),
          [P, _] = l.useState(!g || !x || v);
        return (l.useEffect(() => {
          _(!g || !x || v);
        }, [v, x, g]),
        l.useEffect(() => {
          null != d && N({ guild_id: d });
        }, [d, N]),
        l.useEffect(() => {
          j(t);
          let n = null != t ? a.Z.get(t) : null;
          if (!P && !h)
            m((e) => {
              let t = null != n ? (0, o.aS)(n.id, !1, T, S) : void 0;
              return {
                ...e,
                subscription_plan_id: null == n ? void 0 : n.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == n ? void 0 : n.price,
                currency: S.currency,
              };
            }),
              null != n && (C(null == n ? void 0 : n.skuId), p(e));
        }, [h, t, T, P, S, b, m, j, C, p, e]),
        P)
          ? (0, i.jsx)(c.Z, {})
          : h
            ? (0, i.jsx)(r.Vq, { onClose: f })
            : null;
      }
    },
    883419: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return T;
        },
      }),
        t(47120),
        t(789020);
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        a = t.n(r),
        o = t(442837),
        s = t(481060),
        u = t(330726),
        c = t(716534),
        d = t(664891),
        m = t(171246),
        f = t(430824),
        h = t(563132),
        p = t(409813),
        g = t(45572),
        x = t(51499),
        v = t(678334),
        b = t(456251),
        C = t(614277),
        j = t(698708),
        S = t(388032),
        N = t(596054);
      function T(n) {
        var e, t;
        let {
            backButtonEligible: r,
            prevStep: T,
            handleStepChange: P,
            trialFooterMessageOverride: _,
            reviewWarningMessage: y,
            planGroup: k,
            openInvoiceId: E,
            analyticsData: Z,
            analyticsLocation: I,
            handleClose: A,
          } = n,
          {
            activeSubscription: B,
            application: F,
            setUpdatedSubscription: R,
            contextMetadata: w,
            currencies: L,
            paymentSources: D,
            priceOptions: O,
            purchaseError: H,
            purchaseTokenAuthState: M,
            selectedPlan: W,
            selectedSku: K,
            setCurrency: G,
            setPaymentSourceId: Y,
            setPurchaseState: V,
            setPurchaseError: Q,
            purchaseState: q,
            subscriptionMetadataRequest: z,
            setHasAcceptedTerms: U,
          } = (0, h.usePaymentContext)();
        a()(null != W, "Expected plan to be selected");
        let J = l.useRef(null),
          [X, $] = (0, u.Z)(!1, 500),
          nn = null == z ? void 0 : z.guild_id,
          ne = (0, o.e7)([f.Z], () => f.Z.getGuild(nn), [nn]),
          [nt, ni] = l.useState(null),
          nl = (0, m.KW)(
            null !== (e = null == K ? void 0 : K.flags) && void 0 !== e ? e : 0,
          );
        l.useEffect(() => {
          null != H &&
            null != J.current &&
            J.current.scrollIntoView({ behavior: "smooth" });
        }, [H]);
        let nr = l.useCallback(
            (n) => {
              R(n), P(p.h8.CONFIRM);
            },
            [P, R],
          ),
          na = l.useRef(null);
        return q === g.A.PURCHASING
          ? (0, i.jsx)(b.Z, {})
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(x.Z, { className: N.breadcrumbs }),
                (0, i.jsxs)(C.C3, {
                  children: [
                    (0, i.jsx)(j.Z, {}),
                    nl &&
                      (0, i.jsxs)("div", {
                        className: N.userSubscriptionDetailsContainer,
                        children: [
                          (0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: S.intl.string(S.t.nf5LOT),
                          }),
                          (0, i.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: S.intl.format(S.t.y4n0GR, {
                              applicationName: null == F ? void 0 : F.name,
                            }),
                          }),
                        ],
                      }),
                    !nl &&
                      (0, i.jsxs)("div", {
                        className: N.guildPickerContainer,
                        children: [
                          (0, i.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H5,
                            children: S.intl.string(S.t["5qyruL"]),
                          }),
                          (0, i.jsxs)("div", {
                            className: N.guildNameContainer,
                            children: [
                              (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: S.intl.string(S.t.dBih7e),
                              }),
                              (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                lineClamp: 1,
                                children:
                                  null !==
                                    (t = null == ne ? void 0 : ne.name) &&
                                  void 0 !== t
                                    ? t
                                    : S.intl.string(S.t.dtwqPT),
                              }),
                            ],
                          }),
                        ],
                      }),
                    null == B
                      ? (0, i.jsx)(c.Z, {
                          selectedPlanId: W.id,
                          paymentSources: D,
                          onPaymentSourceChange: (n) =>
                            Y(null != n ? n.id : null),
                          priceOptions: O,
                          currencies: L,
                          onCurrencyChange: (n) => G(n),
                          handlePaymentSourceAdd: () =>
                            P(p.h8.ADD_PAYMENT_STEPS),
                          setHasAcceptedTerms: U,
                          legalTermsNodeRef: na,
                          hasLegalTermsFlash: X,
                          trialFooterMessageOverride: _,
                          reviewWarningMessage: y,
                          metadata: nl ? void 0 : z,
                          purchaseState: q,
                          hideSubscriptionDetails: !0,
                          handleClose: A,
                        })
                      : (0, i.jsx)(d.Z, {
                          premiumSubscription: B,
                          paymentSources: D,
                          priceOptions: O,
                          onPaymentSourceChange: (n) =>
                            Y(null != n ? n.id : null),
                          onPaymentSourceAdd: () => {
                            P(p.h8.ADD_PAYMENT_STEPS);
                          },
                          planId: W.id,
                          setHasAcceptedTerms: U,
                          legalTermsNodeRef: na,
                          hasLegalTermsFlash: X,
                          onInvoiceError: (n) => {
                            ni(n);
                          },
                          planGroup: k,
                          currencies: L,
                          onCurrencyChange: (n) => G(n),
                          hasOpenInvoice: null != E,
                          purchaseState: q,
                          handleClose: A,
                        }),
                  ],
                }),
                (0, i.jsx)(C.O3, {
                  children: (0, i.jsx)(v.Z, {
                    premiumSubscription: null != B ? B : null,
                    setPurchaseState: V,
                    onBack: () => null != T && P(T),
                    onNext: nr,
                    onPurchaseError: (n) => Q(n),
                    legalTermsNodeRef: na,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: I,
                    baseAnalyticsData: Z,
                    flowStartTime: w.startTime,
                    planGroup: k,
                    purchaseTokenAuthState: M,
                    openInvoiceId: E,
                    metadata: nl ? void 0 : z,
                    backButtonEligible: r,
                    invoiceError: nt,
                    disablePurchase:
                      (null == z ? void 0 : z.guild_id) == null && !nl,
                  }),
                }),
              ],
            });
      }
    },
    931905: function (n, e, t) {
      t.d(e, {
        h: function () {
          return s;
        },
        m: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(17894),
        a = t(388032),
        o = t(753031);
      let s = (n) => {
        let {
          onConfirm: e,
          onCancel: t,
          title: s,
          subtitle: u,
          confirmCta: c,
          showOpenDiscord: d = !0,
        } = n;
        return (0, i.jsxs)("div", {
          className: o.confirmationContainer,
          children: [
            (0, i.jsx)(l.Heading, {
              className: o.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: s,
            }),
            null != u
              ? (0, i.jsx)(l.Text, {
                  className: o.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: u,
                })
              : null,
            (0, i.jsxs)("div", {
              className: o.buttonContainer,
              children: [
                d &&
                  (0, i.jsx)(l.Button, {
                    fullWidth: !0,
                    onClick: () =>
                      (0, r.Z)("application_sub_mweb_success_modal"),
                    children: a.intl.string(a.t["8L5bZG"]),
                  }),
                (0, i.jsx)(l.Button, {
                  fullWidth: !0,
                  color: l.Button.Colors.PRIMARY,
                  onClick: e,
                  children: c,
                }),
                null != t &&
                  (0, i.jsx)(l.Button, {
                    fullWidth: !0,
                    color: l.Button.Colors.PRIMARY,
                    look: l.Button.Looks.LINK,
                    onClick: t,
                    children: a.intl.string(a.t.iAfxo6),
                  }),
              ],
            }),
          ],
        });
      };
      function u(n) {
        let { onConfirm: e, tierName: t, subscription: s } = n;
        return (0, i.jsxs)("div", {
          className: o.confirmationContainer,
          children: [
            (0, i.jsx)(l.Heading, {
              className: o.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: a.intl.format(a.t["wLFT6+"], { tier: t }),
            }),
            (0, i.jsx)(l.Text, {
              className: o.confirmationSubtitle,
              variant: "text-sm/normal",
              color: "header-secondary",
              children: a.intl.format(a.t.OsAK9v, {
                timestamp: null == s ? void 0 : s.currentPeriodEnd,
              }),
            }),
            (0, i.jsxs)("div", {
              className: o.buttonContainer,
              children: [
                (0, i.jsx)(l.Button, {
                  className: o.__invalid_openDiscordButton,
                  onClick: () => (0, r.Z)("application_sub_mweb_success_modal"),
                  children: a.intl.string(a.t["8L5bZG"]),
                }),
                (0, i.jsx)(l.Button, {
                  className: o.__invalid_doneButton,
                  look: l.Button.Looks.BLANK,
                  onClick: e,
                  children: a.intl.string(a.t.nlkyw8),
                }),
              ],
            }),
          ],
        });
      }
    },
    596054: function (n, e, t) {
      n.exports = {
        guildPickerContainer: "guildPickerContainer_e72e2e",
        breadcrumbs: "breadcrumbs_e72e2e",
        userSubscriptionDetailsContainer:
          "userSubscriptionDetailsContainer_e72e2e",
        guildNameContainer: "guildNameContainer_e72e2e",
      };
    },
    753031: function (n, e, t) {
      n.exports = {
        confirmationContainer: "confirmationContainer_e6ccba",
        confirmationHeader: "confirmationHeader_e6ccba",
        confirmationSubtitle: "confirmationSubtitle_e6ccba",
        buttonContainer: "buttonContainer_e6ccba",
      };
    },
  },
]);
//# sourceMappingURL=a5c2cda1a1511b481873.js.map
