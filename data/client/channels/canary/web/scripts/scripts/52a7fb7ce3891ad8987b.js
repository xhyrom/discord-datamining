"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12013"],
  {
    658317: function (e) {
      e.exports = "/assets/da6d27036e09e883dfe0.svg";
    },
    716269: function (e) {
      e.exports = "/assets/373eb7c5ed11eb7b9381.svg";
    },
    325202: function (e) {
      e.exports = "/assets/27cea2200bc1969b9519.svg";
    },
    933099: function (e) {
      e.exports = "/assets/2dd3d77ce9a54ada7bb4.svg";
    },
    525656: function (e) {
      e.exports = "/assets/2ed283a97de85a06483f.svg";
    },
    394865: function (e) {
      e.exports = "/assets/e6b9016e5997d883dc85.svg";
    },
    158841: function (e) {
      e.exports = "/assets/4894fa35b7f740c1e27a.svg";
    },
    105822: function (e) {
      e.exports = "/assets/6785c12f8a67f469b22f.svg";
    },
    706614: function (e) {
      e.exports = "/assets/4fd63c0cd57a43555d22.svg";
    },
    822158: function (e) {
      e.exports = "/assets/efef6ae086c915a6c6f0.svg";
    },
    813659: function (e) {
      e.exports = "/assets/51611f63ce590366d4f5.svg";
    },
    242917: function (e) {
      e.exports = "/assets/853bfad03384d556c9c4.svg";
    },
    97007: function (e) {
      e.exports = "/assets/9d929ec9b1e5a8bf3021.svg";
    },
    623533: function (e) {
      e.exports = "/assets/1c9d0b864f319e74c706.svg";
    },
    962505: function (e) {
      e.exports = "/assets/2db49e2100630d28aae1.svg";
    },
    459171: function (e) {
      e.exports = "/assets/faa36139293f87b16067.svg";
    },
    514164: function (e) {
      e.exports = "/assets/2a99298aa6df434262ff.svg";
    },
    897166: function (e) {
      e.exports = "/assets/a34a0075643c72af1839.svg";
    },
    834438: function (e) {
      e.exports = "/assets/e34196d25b7d530ed73a.svg";
    },
    786989: function (e) {
      e.exports = "/assets/8a47dfa0d90a572c70b5.svg";
    },
    264577: function (e) {
      e.exports = "/assets/1afb026a81c8e26b8c86.svg";
    },
    866110: function (e) {
      e.exports = "/assets/7954658c72cbf25f57ec.svg";
    },
    530287: function (e) {
      e.exports = "/assets/442465435e8131baf0e7.svg";
    },
    158934: function (e) {
      e.exports = "/assets/ddea01f7340d1926bb4b.svg";
    },
    707466: function (e) {
      e.exports = "/assets/a46f0b4caf82c9d862c2.svg";
    },
    134474: function (e) {
      e.exports = "/assets/9b4220da626cb51593a9.svg";
    },
    74316: function (e) {
      e.exports = "/assets/248040b40c437bc61301.svg";
    },
    224550: function (e, n, t) {
      t(411104);
      var a = t(200651);
      t(192379);
      var s = t(442837),
        r = t(858987),
        i = t(78839),
        l = t(122289),
        o = t(63063),
        c = t(74538),
        u = t(937615),
        d = t(296848),
        _ = t(981631),
        I = t(474936),
        E = t(689938),
        T = t(930543);
      n.Z = function (e) {
        let n, t, A, N;
        let {
            subscriptionPlan: P,
            isGift: M,
            isEmbeddedIAP: p,
            renewalInvoice: R,
            paymentSourceType: L,
            hide: f,
            purchaseType: S,
            productLine: C,
            basePrice: m,
            currentSubscription: b,
          } = e,
          v = (0, s.e7)([i.ZP], () => i.ZP.inReverseTrial());
        if (f) return null;
        let g = null == e.planGroup ? [] : e.planGroup;
        if (null != R) {
          let e = c.ZP.getIntervalForInvoice(R);
          (n = e.intervalType),
            (t = e.intervalCount),
            (A = (0, u.og)((0, u.T4)(R.total, R.currency), n, t)),
            (N = (0, u.og)((0, u.T4)(R.subtotal, R.currency), n, t));
        } else null != P && ((n = P.interval), (t = P.intervalCount));
        let O = (0, r.K)({
            purchaseType: S || _.GZQ.SUBSCRIPTION,
            plan: P,
            premiumSubscription: null == b ? null : b,
            isGift: !!M,
            planGroup: g,
            isPrepaidPaymentSource: !1,
          }),
          h = "",
          U = "";
        if (p) {
          if (
            null != A &&
            (null == R ? void 0 : R.subscriptionPeriodEnd) != null
          )
            h =
              E.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL_V2.format(
                { subtotalRate: N },
              );
          else
            switch (n) {
              case I.rV.MONTH:
                h =
                  1 === t
                    ? E.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY_V2.format(
                        {},
                      )
                    : E.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH_V2.format(
                        { intervalCount: t },
                      );
                break;
              case I.rV.YEAR:
                h =
                  E.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY_V2.format(
                    {},
                  );
                break;
              case void 0:
                (U =
                  E.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                    primaryText: O,
                    paidURL: _.EYA.PAID_TERMS,
                  })),
                  (h =
                    E.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format(
                      {},
                    ));
                break;
              default:
                throw Error("Unexpected interval: ".concat(n));
            }
        } else if (S === _.GZQ.ONE_TIME)
          (U = E.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V3.format({
            primaryText: O,
            paidURL: _.EYA.PAID_TERMS,
          })),
            (h =
              C === _.POd.COLLECTIBLES
                ? M
                  ? E.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT
                  : E.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT
                : E.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT);
        else if (null == P || M)
          switch (
            (M &&
              (U = E.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format(
                { primaryText: O, paidURL: _.EYA.PAID_TERMS },
              )),
            n)
          ) {
            case I.rV.MONTH:
              (h = M
                ? E.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY
                : E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY),
                (h = M
                  ? E.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY
                  : 1 === t
                    ? E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY
                    : E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format(
                        { intervalCount: t },
                      ));
              break;
            case I.rV.YEAR:
              h = M
                ? E.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY
                : E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
              break;
            case void 0:
              h = "";
              break;
            default:
              throw Error("Unexpected interval: ".concat(n));
          }
        else {
          let e;
          let a = (0, r.K)({
            purchaseType: _.GZQ.SUBSCRIPTION,
            plan: P,
            premiumSubscription: null == b ? null : b,
            isGift: !1,
            planGroup: g,
            isPrepaidPaymentSource: !1,
          });
          if (
            (null != m &&
              null != n &&
              null != t &&
              (e = (0, u.og)((0, u.T4)(m.amount, m.currency), n, t)),
            null == e)
          ) {
            let e = Error("Missing base rate for legal fine print");
            (0, l.q2)(e, { tags: { planId: P.id } });
          }
          h = (null == b ? void 0 : b.isPaused)
            ? E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_RESUME.format({
                primaryText: a,
                rate: e,
                paidURL: _.EYA.PAID_TERMS,
                contactLink: _.EYA.CONTACT,
                helpdeskArticle: o.Z.getArticleURL(_.BhN.BILLING),
              })
            : null != b && (0, d.GY)(b, P.id, g)
              ? E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format(
                  {
                    primaryText: a,
                    rate: e,
                    paidURL: _.EYA.PAID_TERMS,
                    contactLink: _.EYA.CONTACT,
                    helpdeskArticle: o.Z.getArticleURL(_.BhN.BILLING),
                  },
                )
              : v && C === _.POd.BOOST && null != m
                ? E.Z.Messages.BILLING_BOOST_PURCHASE_IN_REVERSE_TRIAL_LEGAL_COPY.format(
                    {
                      price: (0, u.T4)(m.amount, m.currency),
                      paidServiceTermsArticle: _.EYA.PAID_TERMS,
                      contactUsArticle: _.EYA.CONTACT,
                      subscriptionFAQArticle: o.Z.getArticleURL(_.BhN.BILLING),
                    },
                  )
                : E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
                    primaryText: a,
                    rate: e,
                    paidURL: _.EYA.PAID_TERMS,
                    contactLink: _.EYA.CONTACT,
                    helpdeskArticle: o.Z.getArticleURL(_.BhN.BILLING),
                  });
        }
        return (0, a.jsxs)(a.Fragment, {
          children: [
            "" !== U &&
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)("div", { children: U }),
                  (0, a.jsx)("div", { className: T.divider }),
                ],
              }),
            "" !== h && (0, a.jsx)("div", { children: h }),
            L === _.HeQ.PAYSAFE_CARD &&
              (0, a.jsx)("div", {
                className: T.paymentSourceNoticeCopy,
                children:
                  E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD,
              }),
            L === _.HeQ.SOFORT &&
              (0, a.jsxs)("div", {
                className: T.paymentSourceNoticeCopy,
                children: [E.Z.Messages.SOFORT_MANDATE_AGREEMENT, " "],
              }),
          ],
        });
      };
    },
    490504: function (e, n, t) {
      var a = t(200651);
      t(192379);
      var s = t(481060),
        r = t(424963);
      n.Z = function (e) {
        let { message: n } = e;
        return (0, a.jsxs)("div", {
          className: r.container,
          children: [
            (0, a.jsx)(s.CircleInformationIcon, {
              size: "custom",
              className: r.icon,
              width: 20,
              height: 20,
              color: s.tokens.colors.TEXT_WARNING,
            }),
            (0, a.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "header-muted",
              children: n,
            }),
          ],
        });
      };
    },
    275850: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      }),
        t(411104),
        t(47120);
      var a = t(200651),
        s = t(192379),
        r = t(120356),
        i = t.n(r),
        l = t(692547),
        o = t(481060),
        c = t(987032),
        u = t(219929),
        d = t(46141),
        _ = t(63063),
        I = t(981631),
        E = t(231338),
        T = t(689938),
        A = t(235183);
      let N = "***@***.***",
        P = new d.dm({
          id: "new_payment_source_id",
          brand: u.ZP.Types.UNKNOWN,
          type: I.HeQ.CARD,
        });
      function M(e) {
        var n, t;
        let r,
          {
            selectedPaymentSourceId: M,
            paymentSources: p,
            prependOption: R,
            hidePersonalInformation: L,
            onChange: f,
            onPaymentSourceAdd: S,
            isTrial: C = !1,
            disabled: m = !1,
            className: b,
            optionClassName: v,
            dropdownLoading: g,
          } = e,
          O = 0 === p.length,
          h = [...(null != R ? [R] : []), ...p, P].map((e, n) => {
            if (e instanceof d.ZP) {
              let { brand: n, label: t } = (function (e, n) {
                if (e instanceof d.dm)
                  return e.id === P.id
                    ? { brand: null, label: T.Z.Messages.PAYMENT_SOURCES_ADD }
                    : {
                        brand: n ? u.ZP.Types.UNKNOWN : e.brand,
                        label:
                          T.Z.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
                            last4: n ? "****" : e.last4,
                          }),
                      };
                if (e instanceof d.qo)
                  return { brand: u.ZP.Types.PAYPAL, label: n ? N : e.email };
                if (e instanceof d.Sf)
                  return { brand: u.ZP.Types.SOFORT, label: n ? N : e.email };
                else if (e instanceof d.fv)
                  return {
                    brand: u.ZP.Types.GIROPAY,
                    label: T.Z.Messages.PAYMENT_SOURCE_GIROPAY,
                  };
                else if (e instanceof d.Vg)
                  return {
                    brand: u.ZP.Types.PRZELEWY24,
                    label: n ? N : e.email,
                  };
                else if (e instanceof d.sn)
                  return {
                    brand: u.ZP.Types.PAYSAFECARD,
                    label: T.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT,
                  };
                else if (e instanceof d.o_)
                  return {
                    brand: u.ZP.Types.GCASH,
                    label: T.Z.Messages.PAYMENT_SOURCE_GCASH,
                  };
                else if (e instanceof d.kX)
                  return {
                    brand: u.ZP.Types.GRABPAY,
                    label: T.Z.Messages.PAYMENT_SOURCE_GRABPAY,
                  };
                else if (e instanceof d.z)
                  return {
                    brand: u.ZP.Types.MOMO_WALLET,
                    label: T.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                  };
                else if (e instanceof d.Xc)
                  return {
                    brand: u.ZP.Types.VENMO,
                    label: n ? "***" : "@" + e.username,
                  };
                else if (e instanceof d.Om)
                  return {
                    brand: u.ZP.Types.KAKAOPAY,
                    label: T.Z.Messages.PAYMENT_SOURCE_KAKAOPAY,
                  };
                else if (e instanceof d.JC)
                  return {
                    brand: u.ZP.Types.GOPAY_WALLET,
                    label: T.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                  };
                else if (e instanceof d.U4)
                  return {
                    brand: u.ZP.Types.BANCONTACT,
                    label: T.Z.Messages.PAYMENT_SOURCE_BANCONTACT,
                  };
                else if (e instanceof d.D0)
                  return {
                    brand: u.ZP.Types.EPS,
                    label: T.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
                      bank: (0, c.Ul)(e.bank),
                    }),
                  };
                else if (e instanceof d.jc)
                  return {
                    brand: u.ZP.Types.IDEAL,
                    label: T.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
                      bank: (0, c.YE)(e.bank),
                    }),
                  };
                else if (e instanceof d.u_)
                  return {
                    brand: u.ZP.Types.CASH_APP,
                    label: n ? "***" : e.username,
                  };
                throw Error("Invalid Payment Source");
              })(e, L);
              return {
                value: e.id,
                label: (0, a.jsxs)("div", {
                  className: A.paymentSourceSelectedOption,
                  children: [
                    null != n
                      ? (0, a.jsx)(u.ZP, { type: u.ZP.getType(n) })
                      : null,
                    (0, a.jsx)("div", {
                      className: i()(A.paymentSourceLabel, {
                        [A.error]: e.invalid,
                      }),
                      children: t,
                    }),
                  ],
                }),
              };
            }
            return {
              key: n,
              value: e.value,
              label: (0, a.jsx)("div", {
                className: A.paymentSourceLabel,
                children: e.label,
              }),
            };
          }),
          U = s.useMemo(() => p.find((e) => e.id === M), [p, M]);
        let y =
          ((n = C),
          (t = U),
          (r = null),
          n && null != t && !t.canRedeemTrial()
            ? (r = T.Z.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID)
            : n &&
              null != t &&
              t.hasFlag(E.Cw.NEW) &&
              (r = T.Z.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
                helpDeskArticle: _.Z.getArticleURL(
                  I.BhN.PAYMENT_AUTHORIZATION_CHARGE,
                ),
              })),
          r);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            O
              ? (0, a.jsx)(o.Button, {
                  color: o.ButtonColors.BRAND,
                  fullWidth: !0,
                  onClick: S,
                  children: T.Z.Messages.PAYMENT_SOURCES_ADD,
                })
              : (0, a.jsx)(o.SingleSelect, {
                  options: h,
                  value: M,
                  onChange: (e) => {
                    if (e === P.id) null != S && S();
                    else {
                      let n = p.find((n) => n.id === e);
                      null != f && f(n);
                    }
                  },
                  isDisabled: m,
                  className: i()({ [A.paymentSourceHasWarning]: null != y }, b),
                  optionClassName: v,
                  placeholder: T.Z.Messages.PAYMENT_SOURCE_TYPE_SELECT,
                  renderOptionValue: (e) => {
                    let [n] = e;
                    return g
                      ? (0, a.jsx)(o.Spinner, {
                          type: o.SpinnerTypes.SPINNING_CIRCLE,
                        })
                      : n.label;
                  },
                }),
            null != y
              ? (0, a.jsxs)("div", {
                  className: A.paymentSourceWarning,
                  children: [
                    (0, a.jsx)(o.CircleWarningIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: A.paymentSourceWarningIcon,
                      color: l.Z.unsafe_rawColors.YELLOW_300.css,
                    }),
                    (0, a.jsx)(o.Text, {
                      variant: "text-xs/normal",
                      children: y,
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    672971: function (e, n, t) {
      t(411104), t(47120);
      var a = t(200651),
        s = t(192379),
        r = t(120356),
        i = t.n(r),
        l = t(512722),
        o = t.n(l),
        c = t(442837),
        u = t(481060),
        d = t(850840),
        _ = t(63063),
        I = t(74538),
        E = t(981631),
        T = t(474936),
        A = t(689938),
        N = t(961667);
      function P(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class M extends s.Component {
        componentDidMount() {
          this.props.onChange(
            this.hasAcceptedNeccessaryTerms(this.props, this.state),
          );
        }
        componentDidUpdate(e, n) {
          let t = this.hasAcceptedNeccessaryTerms(e, n),
            a = this.hasAcceptedNeccessaryTerms(this.props, this.state);
          a !== t && this.props.onChange(a);
        }
        hasAcceptedNeccessaryTerms(e, n) {
          return (
            (null == e.eulaId || n.hasAcceptedEULA) &&
            (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver)
          );
        }
        formatInterval(e) {
          if (e === T.rV.YEAR)
            return A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
          if (e === T.rV.MONTH)
            return A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
          throw Error("Invalid interval type: ".concat(e));
        }
        render() {
          let {
              eulaId: e,
              applicationName: n,
              hasPreviouslyAcceptedEULA: s,
              forceShow: r,
              disabled: l,
              className: c,
              checkboxClassname: d,
              checkboxLabelClassname: T,
              finePrint: P,
              showPricingLink: M,
              showWithdrawalWaiver: p,
              isTrial: R,
              inReverseTrial: L,
              isDiscount: f,
              subscriptionPlan: S,
              finePrintClassname: C,
            } = this.props,
            { hasAcceptedEULA: m, hasAcceptedWithdrawalWaiver: b } = this.state;
          return (o()(
            !R || null != S,
            "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true",
          ),
          r || (null != e && !s) || p)
            ? (0, a.jsxs)("div", {
                className: c,
                children: [
                  p &&
                    (0, a.jsx)(u.FormTitle, {
                      className: N.formTitle,
                      children: A.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER,
                    }),
                  null != e && (r || !s)
                    ? (0, a.jsx)(u.Checkbox, {
                        type: u.Checkbox.Types.INVERTED,
                        value: m,
                        onChange: this.handleToggleEULAAcceptance,
                        disabled: l,
                        className: N.checkbox,
                        children: (0, a.jsx)("div", {
                          className: N.checkboxLabel,
                          children:
                            A.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                              applicationName: n,
                              onClick: (n) => {
                                (0, u.openModalLazy)(async () => {
                                  let { default: n } = await t
                                    .e("51868")
                                    .then(t.bind(t, 796504));
                                  return (t) =>
                                    (0, a.jsx)(n, { eulaId: e, ...t });
                                }),
                                  n.preventDefault();
                              },
                            }),
                        }),
                      })
                    : null,
                  null == P
                    ? null
                    : (0, a.jsx)("div", {
                        className: i()(N.finePrint, C),
                        children: P,
                      }),
                  p
                    ? (0, a.jsxs)("div", {
                        className: c,
                        children: [
                          (0, a.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: b,
                            onChange:
                              this.handleToggleEUWithdralWaiverAcceptance,
                            disabled: l,
                            className: i()(N.checkbox, d),
                            children: (0, a.jsx)("div", {
                              className: i()(N.checkboxLabel, T),
                              children:
                                A.Z.Messages
                                  .BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: N.finePrint,
                            children:
                              A.Z.Messages
                                .BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER,
                          }),
                        ],
                      })
                    : null,
                  M &&
                    (0, a.jsxs)("div", {
                      className: N.finePrint,
                      children: [
                        "*",
                        A.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
                          documentationLink: _.Z.getArticleURL(
                            E.BhN.LOCALIZED_PRICING,
                          ),
                        }),
                      ],
                    }),
                  R &&
                    null != S &&
                    (0, a.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: A.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format(
                        {
                          buttonText: (0, I.W_)(null, S),
                          interval: this.formatInterval(
                            null == S ? void 0 : S.interval,
                          ),
                          cancelSubscriptionArticle: _.Z.getArticleURL(
                            E.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                          ),
                          paidServiceTermsArticle: _.Z.getArticleURL(
                            E.BhN.PAID_TERMS,
                          ),
                        },
                      ),
                    }),
                  L &&
                    null != S &&
                    (0, a.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children:
                        A.Z.Messages.BILLING_REVERSE_TRIAL_LEGAL_COPY.format({
                          buttonText: (0, I.W_)(null, S),
                          interval: this.formatInterval(
                            null == S ? void 0 : S.interval,
                          ),
                          cancelSubscriptionArticle: _.Z.getArticleURL(
                            E.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                          ),
                          paidServiceTermsArticle: _.Z.getArticleURL(
                            E.BhN.PAID_TERMS,
                          ),
                        }),
                    }),
                  f &&
                    null != S &&
                    (0, a.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: A.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format(
                        {
                          buttonText: (0, I.W_)(null, S),
                          interval: this.formatInterval(
                            null == S ? void 0 : S.interval,
                          ),
                          cancelSubscriptionArticle: _.Z.getArticleURL(
                            E.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                          ),
                          paidServiceTermsArticle: _.Z.getArticleURL(
                            E.BhN.PAID_TERMS,
                          ),
                        },
                      ),
                    }),
                ],
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            P(this, "state", {
              hasAcceptedEULA:
                !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
              hasAcceptedWithdrawalWaiver: !1,
            }),
            P(this, "handleToggleEUWithdralWaiverAcceptance", (e, n) => {
              this.setState({ hasAcceptedWithdrawalWaiver: n });
            }),
            P(this, "handleToggleEULAAcceptance", (e, n) => {
              this.setState({ hasAcceptedEULA: n });
            });
        }
      }
      n.Z = c.ZP.connectStores([d.Z], (e) => {
        let { eulaId: n } = e;
        return {
          hasPreviouslyAcceptedEULA: null != n && d.Z.hasAcceptedEULA(n),
        };
      })(M);
    },
    987032: function (e, n, t) {
      t.d(n, {
        Ul: function () {
          return c;
        },
        YE: function () {
          return l;
        },
      }),
        t(47120);
      var a = t(818083),
        s = t(981631),
        r = t(689938);
      n.ZP = (0, a.B)({
        kind: "user",
        id: "2021-08_regional_payment_methods",
        label: "Regional Payment Methods",
        defaultConfig: {
          enabledPaymentTypes: [],
          forceCountryCode: null,
          validCountryCodes: [],
        },
        treatments: [
          {
            id: 1,
            label: "Regional Payment Method for Germany",
            config: {
              enabledPaymentTypes: [s.HeQ.SOFORT],
              forceCountryCode: "DE",
              validCountryCodes: ["DE"],
            },
          },
          {
            id: 2,
            label: "Regional Payment Method for US",
            config: {
              enabledPaymentTypes: [s.HeQ.VENMO, s.HeQ.CASH_APP],
              forceCountryCode: "US",
              validCountryCodes: ["US"],
            },
          },
          {
            id: 3,
            label: "Regional Payment Method for Brazil",
            config: {
              enabledPaymentTypes: [],
              forceCountryCode: "BR",
              validCountryCodes: ["BR"],
            },
          },
          {
            id: 4,
            label: "Regional Payment Method for Turkey",
            config: {
              enabledPaymentTypes: [],
              forceCountryCode: "TR",
              validCountryCodes: ["TR"],
            },
          },
          {
            id: 5,
            label: "Regional Payment Method for Poland",
            config: {
              enabledPaymentTypes: [s.HeQ.PRZELEWY24],
              forceCountryCode: "PL",
              validCountryCodes: ["PL"],
            },
          },
          {
            id: 6,
            label: "Enable paysafecard",
            config: {
              enabledPaymentTypes: [s.HeQ.PAYSAFE_CARD],
              forceCountryCode: "DE",
              validCountryCodes: ["BG", "CZ", "DK", "HU", "RO", "SE", "DE"],
            },
          },
          {
            id: 7,
            label: "Regional Payment Method for Philippines",
            config: {
              enabledPaymentTypes: [s.HeQ.GCASH],
              forceCountryCode: "PH",
              validCountryCodes: ["PH"],
            },
          },
          {
            id: 8,
            label: "Regional Payment Method for Malaysia",
            config: {
              enabledPaymentTypes: [s.HeQ.GRABPAY_MY],
              forceCountryCode: "MY",
              validCountryCodes: ["MY"],
            },
          },
          {
            id: 9,
            label: "Regional Payment Method for Vietnam",
            config: {
              enabledPaymentTypes: [s.HeQ.MOMO_WALLET],
              forceCountryCode: "VN",
              validCountryCodes: ["VN"],
            },
          },
          {
            id: 10,
            label: "Regional Payment Method for Indonesia",
            config: {
              enabledPaymentTypes: [s.HeQ.GOPAY_WALLET],
              forceCountryCode: "ID",
              validCountryCodes: ["ID"],
            },
          },
          {
            id: 11,
            label: "Regional Payment Method for South Korea",
            config: {
              enabledPaymentTypes: [s.HeQ.KAKAOPAY],
              forceCountryCode: "KR",
              validCountryCodes: ["KR"],
            },
          },
          {
            id: 12,
            label: "Regional Payment Method for Belgium",
            config: {
              enabledPaymentTypes: [
                s.HeQ.PAYSAFE_CARD,
                s.HeQ.SOFORT,
                s.HeQ.BANCONTACT,
              ],
              forceCountryCode: "BE",
              validCountryCodes: ["BE"],
            },
          },
          {
            id: 13,
            label: "Regional Payment Method for Austria",
            config: {
              enabledPaymentTypes: [
                s.HeQ.PAYSAFE_CARD,
                s.HeQ.EPS,
                s.HeQ.SOFORT,
              ],
              forceCountryCode: "AT",
              validCountryCodes: ["AT"],
            },
          },
          {
            id: 14,
            label: "Regional Payment Method for Netherlands",
            config: {
              enabledPaymentTypes: [
                s.HeQ.PAYSAFE_CARD,
                s.HeQ.IDEAL,
                s.HeQ.SOFORT,
              ],
              forceCountryCode: "NL",
              validCountryCodes: ["NL"],
            },
          },
          {
            id: 15,
            label: "Launch Paysafecard and Sofort",
            config: {
              enabledPaymentTypes: [s.HeQ.PAYSAFE_CARD, s.HeQ.SOFORT],
              forceCountryCode: "ES",
              validCountryCodes: ["ES", "IT"],
            },
          },
          {
            id: 16,
            label: "Launch Cash App",
            config: {
              enabledPaymentTypes: [s.HeQ.CASH_APP],
              forceCountryCode: "US",
              validCountryCodes: ["US"],
            },
          },
        ],
      });
      let i = new Map([
        ["abn_amro", "ABN AMRO"],
        ["asn_bank", "ASN Bank"],
        ["bunq", "Bunq"],
        ["handelsbanken", "Handelsbanken"],
        ["ing ", "ING"],
        ["knab", "Knab"],
        ["rabobank", "Rabobank"],
        ["revolut", "Revolut"],
        ["regiobank", "RegioBank"],
        ["sns_bank", "SNS Bank (De Volksbank)"],
        ["triodos_bank", "Triodos Bank"],
        ["van_lanschot", "Van Lanschot"],
      ]);
      function l(e) {
        return void 0 !== e && i.has(e)
          ? i.get(e)
          : r.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
      }
      let o = new Map([
        ["arzte_und_apotheker_bank", "\xc4rzte- und Apothekerbank"],
        ["austrian_anadi_bank_ag", "Austrian Anadi Bank AG"],
        ["bank_austria", "Bank Austria"],
        ["bankhaus_carl_spangler", "Bankhaus Carl Sp\xe4ngler & Co.AG"],
        [
          "bankhaus_schelhammer_und_schattera_ag",
          "Bankhaus Schelhammer & Schattera AG",
        ],
        ["bawag_psk_ag", "BAWAG P.S.K. AG"],
        ["bks_bank_ag", "BKS Bank AG"],
        ["brull_kallmus_bank_ag", "Br\xfcll Kallmus Bank AG"],
        ["btv_vier_lander_bank", "BTV VIER L\xc4NDER BANK"],
        ["capital_bank_grawe_gruppe_ag", "Capital Bank Grawe Gruppe AG"],
        ["dolomitenbank", "Dolomitenbank"],
        ["easybank_ag", "Easybank AG"],
        ["erste_bank_und_sparkassen", "Erste Bank und Sparkassen"],
        [
          "hypo_alpeadriabank_international_ag",
          "Hypo Alpe-Adria-Bank International AG",
        ],
        [
          "hypo_noe_lb_fur_niederosterreich_u_wien",
          "HYPO NOE LB f\xfcr Nieder\xf6sterreich u. Wien",
        ],
        [
          "hypo_oberosterreich_salzburg_steiermark",
          "HYPO Ober\xf6sterreich, Salzburg, Steiermark",
        ],
        ["hypo_tirol_bank_ag", "Hypo Tirol Bank AG"],
        ["hypo_vorarlberg_bank_ag", "Hypo Vorarlberg Bank AG"],
        [
          "hypo_bank_burgenland_aktiengesellschaft",
          "HYPO-BANK BURGENLAND Aktiengesellschaft",
        ],
        ["marchfelder_bank", "Marchfelder Bank"],
        ["oberbank_ag", "Oberbank AG"],
        [
          "raiffeisen_bankengruppe_osterreich",
          "Raiffeisen Bankengruppe \xd6sterreich",
        ],
        ["schoellerbank_ag", "Schoellerbank AG"],
        ["sparda_bank_wien", "Sparda-Bank Wien"],
        ["volksbank_gruppe", "Volksbank Gruppe"],
        ["volkskreditbank_ag", "Volkskreditbank AG"],
        ["vr_bank_braunau", "VR-Bank Braunau"],
      ]);
      function c(e) {
        return void 0 !== e && o.has(e)
          ? o.get(e)
          : r.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
      }
    },
    219929: function (e, n, t) {
      t.d(n, {
        Qy: function () {
          return a;
        },
        Uy: function () {
          return _;
        },
      }),
        t(757143);
      var a,
        s,
        r,
        i = t(200651),
        l = t(192379),
        o = t(120356),
        c = t.n(o),
        u = t(857323);
      function d(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      ((r = a || (a = {})).UNKNOWN = "unknown"),
        (r.VISA = "visa"),
        (r.DISCOVER = "discover"),
        (r.MASTERCARD = "mastercard"),
        (r.AMEX = "amex"),
        (r.PAYPAL = "paypal"),
        (r.PAYMENT_REQUEST = "paymentRequest"),
        (r.G_PAY = "gPay"),
        (r.DINERS = "diners"),
        (r.JCB = "jcb"),
        (r.UNIONPAY = "unionpay"),
        (r.SOFORT = "sofort"),
        (r.PRZELEWY24 = "przelewy24"),
        (r.GIROPAY = "giropay"),
        (r.PAYSAFECARD = "paysafecard"),
        (r.GCASH = "gcash"),
        (r.GRABPAY = "grabpay"),
        (r.MOMO_WALLET = "momo_wallet"),
        (r.VENMO = "venmo"),
        (r.KAKAOPAY = "kakaopay"),
        (r.GOPAY_WALLET = "gopay_wallet"),
        (r.BANCONTACT = "bancontact"),
        (r.EPS = "eps"),
        (r.IDEAL = "ideal"),
        (r.CASH_APP = "cash_app"),
        (r.APPLE = "apple");
      let _ = {
        SMALL: u.cardIconSmall,
        MEDIUM: u.cardIconMedium,
        LARGE: u.cardIconLarge,
        XLARGE: u.cardIconXLarge,
      };
      class I extends (s = l.PureComponent) {
        static getType(e) {
          return null == e
            ? "unknown"
            : a[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
        }
        render() {
          let { flipped: e, type: n, className: t, size: a } = this.props;
          return (0, i.jsx)("div", {
            className: c()(a, u[n], t, { [u.flipped]: e }),
            children: n,
          });
        }
      }
      d(I, "Types", a),
        d(I, "Sizes", _),
        d(I, "defaultProps", { size: _.SMALL, flipped: !1 }),
        (n.ZP = I);
    },
    53900: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = t(442837),
        s = t(853872),
        r = t(78839);
      function i() {
        let e = (0, a.e7)([r.ZP], () => r.ZP.getPremiumTypeSubscription());
        return (0, a.e7)([s.Z], () => {
          var n;
          return (null == e ? void 0 : e.paymentSourceId) != null
            ? null === (n = s.Z.getPaymentSource(e.paymentSourceId)) ||
              void 0 === n
              ? void 0
              : n.country
            : null;
        });
      }
    },
    653798: function (e, n, t) {
      t.d(n, {
        HE: function () {
          return N;
        },
        Ji: function () {
          return A;
        },
        KU: function () {
          return T;
        },
        PO: function () {
          return d;
        },
        R$: function () {
          return I;
        },
        i$: function () {
          return E;
        },
        q9: function () {
          return _;
        },
      });
      var a = t(200651);
      t(192379);
      var s = t(120356),
        r = t.n(s),
        i = t(481060),
        l = t(911969),
        o = t(937615),
        c = t(689938),
        u = t(490884);
      function d(e) {
        let { children: n, className: t } = e;
        return (0, a.jsx)("div", { className: r()(u.table, t), children: n });
      }
      function _(e) {
        let { children: n } = e;
        return (0, a.jsx)("div", { className: u.header, children: n });
      }
      function I(e) {
        let { label: n, value: t, className: s } = e;
        return (0, a.jsxs)("div", {
          className: r()(u.row, s),
          children: [
            (0, a.jsx)("div", { className: u.rowLabel, children: n }),
            (0, a.jsx)("div", { className: u.rowAmount, children: t }),
          ],
        });
      }
      function E(e) {
        let {
            label: n,
            value: t,
            discounts: s,
            originalAmount: r,
            interval: d,
            currency: _,
            className: E,
            intervalCount: T,
            inTrialPeriod: A,
          } = e,
          N = (e) => (null != s ? s.find((n) => n.type === e) : null),
          P = N(l.eW.SUBSCRIPTION_PLAN),
          M = N(l.eW.ENTITLEMENT),
          p = null != P ? Math.floor((P.amount / r) * 100) : null,
          R = (0, o.T4)(r, _);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(I, {
              label: n,
              value: (0, a.jsxs)(a.Fragment, {
                children: [
                  A
                    ? c.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                        price: (0, o.T4)(0, _),
                      })
                    : t,
                  null != p
                    ? (0, a.jsxs)("div", {
                        className: u.rowPercentDiscount,
                        children: ["-", p, "%"],
                      })
                    : null,
                ],
              }),
              className: E,
            }),
            A &&
              (0, a.jsx)(i.Text, {
                variant: "text-md/medium",
                className: u.trialEndPrice,
                children:
                  c.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                    price: R,
                  }),
              }),
            null != p
              ? (0, a.jsxs)("div", {
                  className: u.rowDiscountOriginalPrice,
                  children: [
                    "(",
                    null != d && null != T ? (0, o.og)(R, d, T) : R,
                    ")",
                  ],
                })
              : null,
            null != M
              ? (0, a.jsx)("div", {
                  className: u.entitlementDiscountRow,
                  children:
                    c.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED,
                })
              : null,
          ],
        });
      }
      function T(e) {
        let {
          extended: n = !1,
          negativeMarginTop: t = !1,
          negativeMarginBottom: s = !1,
        } = e;
        return (0, a.jsx)("div", {
          className: r()(u.divider, {
            [u.dividerExtended]: n,
            [u.negativeMarginTop]: t,
            [u.negativeMarginBottom]: s,
          }),
        });
      }
      function A(e) {
        let { label: n, value: t, className: s } = e;
        return (0, a.jsxs)("div", {
          className: r()(u.totalRow, s),
          children: [
            (0, a.jsx)("div", { className: u.totalLabel, children: n }),
            (0, a.jsx)("div", { className: u.totalAmount, children: t }),
          ],
        });
      }
      function N(e) {
        let { children: n, className: t } = e;
        return (0, a.jsx)("div", {
          className: r()(u.finePrint, t),
          children: n,
        });
      }
    },
    553797: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(200651);
      t(192379);
      var s = t(120356),
        r = t.n(s),
        i = t(937615),
        l = t(474936),
        o = t(689938),
        c = t(446236);
      function u(e) {
        let {
            price: n,
            currency: t,
            intervalType: s,
            className: u,
            intervalCount: d = 1,
            isPrepaidPaymentSource: _ = !1,
          } = e,
          I = (0, i.T4)(n, t),
          E = null;
        return (
          s === l.rV.YEAR
            ? (E = o.Z.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                price: I,
              }))
            : s === l.rV.MONTH && 1 === d
              ? (E = o.Z.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                  price: I,
                }))
              : s === l.rV.MONTH &&
                d > 1 &&
                (E = o.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                  price: I,
                  intervalCount: d,
                })),
          (0, a.jsx)("div", {
            className: r()(c.pricePerInterval, u),
            "data-testid": "PricePerInterval-".concat(t),
            children:
              null == s || _ ? (0, a.jsx)("strong", { children: I }) : E,
          })
        );
      }
    },
    585602: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = t(200651);
      t(192379);
      var s = t(937615),
        r = t(653798),
        i = t(689938);
      function l(e) {
        let { invoice: n } = e;
        return n.taxInclusive || n.tax <= 0
          ? null
          : (0, a.jsx)(r.R$, {
              label: i.Z.Messages.TAX_LABEL,
              value: (0, s.T4)(n.tax, n.currency),
            });
      }
    },
    314182: function (e, n, t) {
      var a = t(200651),
        s = t(192379),
        r = t(120356),
        i = t.n(r),
        l = t(865189);
      let o = s.forwardRef(function (e, n) {
        let { isActive: t, children: s } = e;
        return (0, a.jsx)("div", {
          className: i()(l.wrapper, { [l.wrapperActive]: t }),
          ref: n,
          children: s,
        });
      });
      n.Z = o;
    },
    42818: function (e, n, t) {
      t.d(n, {
        As: function () {
          return h;
        },
        By: function () {
          return U;
        },
        Lu: function () {
          return y;
        },
        e9: function () {
          return j;
        },
        hG: function () {
          return Z;
        },
        nd: function () {
          return Y;
        },
        yT: function () {
          return k;
        },
      }),
        t(411104),
        t(724458),
        t(47120);
      var a = t(200651),
        s = t(192379),
        r = t(120356),
        i = t.n(r),
        l = t(512722),
        o = t.n(l),
        c = t(442837),
        u = t(481060),
        d = t(911969),
        _ = t(100527),
        I = t(906732),
        E = t(509545),
        T = t(259580),
        A = t(63063),
        N = t(74538),
        P = t(937615),
        M = t(374649),
        p = t(591548),
        R = t(639119),
        L = t(653798),
        f = t(585602),
        S = t(474936),
        C = t(981631),
        m = t(689938),
        b = t(319012);
      let v = (e, n) => {
          var t;
          return !!(null === (t = e.discounts) || void 0 === t
            ? void 0
            : t.some((e) => e.type === n));
        },
        g = (e, n) => {
          var t, a, s;
          return (
            e.subscriptionPlanPrice -
            (null !==
              (s =
                null === (a = e.discounts) || void 0 === a
                  ? void 0
                  : null === (t = a.find((e) => e.type === n)) || void 0 === t
                    ? void 0
                    : t.amount) && void 0 !== s
              ? s
              : 0)
          );
        };
      function O(e) {
        var n;
        let {
            invoiceItem: t,
            overrideAmount: s,
            showGuildSubscriptionAdjustmentTooltip: r,
            currency: i,
            className: l,
            isPrepaidPaymentSource: _,
            referralTrialOfferId: I,
            inTrialPeriod: T,
          } = e,
          A = (0, c.e7)([E.Z], () => E.Z.get(t.subscriptionPlanId)),
          M =
            null === (n = (0, R.N)(I)) || void 0 === n
              ? void 0
              : n.subscription_trial;
        o()(null != A, "Missing subscriptionPlan");
        let p = (function (e, n, t, a) {
          let s = v(e, d.eW.PREMIUM_TRIAL);
          switch (e.subscriptionPlanId) {
            case S.Xh.PREMIUM_MONTH_LEGACY:
            case S.Xh.PREMIUM_YEAR_LEGACY:
            case S.Xh.PREMIUM_MONTH_TIER_0:
            case S.Xh.PREMIUM_YEAR_TIER_0:
            case S.Xh.PREMIUM_MONTH_TIER_1:
            case S.Xh.PREMIUM_YEAR_TIER_1:
            case S.Xh.PREMIUM_MONTH_TIER_2:
            case S.Xh.PREMIUM_YEAR_TIER_2:
            case S.Xh.PREMIUM_3_MONTH_TIER_2:
            case S.Xh.PREMIUM_6_MONTH_TIER_2:
              return (0, N.Gf)(e.subscriptionPlanId, s, t, a);
            case S.Xh.PREMIUM_3_MONTH_GUILD:
            case S.Xh.PREMIUM_6_MONTH_GUILD:
              return m.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format(
                { num: e.quantity, intervalCount: n.intervalCount },
              );
            case S.Xh.PREMIUM_MONTH_GUILD:
              return m.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format(
                { num: e.quantity },
              );
            case S.Xh.PREMIUM_YEAR_GUILD:
              return m.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format(
                { num: e.quantity },
              );
          }
          switch (n.interval) {
            case S.rV.MONTH:
              if (1 === n.intervalCount)
                return m.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                  planName: n.name,
                });
              return m.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                planName: n.name,
                intervalCount: n.intervalCount,
              });
            case S.rV.YEAR:
              return m.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                planName: n.name,
              });
          }
          throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId));
        })(
          t,
          A,
          _,
          (0, N.if)({
            intervalType: null == M ? void 0 : M.interval,
            intervalCount: null == M ? void 0 : M.interval_count,
          }),
        );
        !0 === r &&
          (p = (0, a.jsxs)("div", {
            className: b.invoiceItemLabelWithIcon,
            children: [
              (0, a.jsxs)("div", { children: [p, " "] }),
              (0, a.jsx)(u.Tooltip, {
                text: m.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                "aria-label":
                  m.Z.Messages
                    .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                tooltipClassName: b.invoiceItemTooltip,
                children: (e) =>
                  (0, a.jsx)(u.CircleQuestionIcon, {
                    size: "md",
                    color: "currentColor",
                    ...e,
                    className: b.invoiceItemLabelIcon,
                  }),
              }),
            ],
          }));
        let f = (0, P.T4)(null != s ? s : t.amount, i),
          C = _ ? f : (0, P.og)(f, A.interval, A.intervalCount);
        return (0, a.jsx)(L.i$, {
          label: p,
          value: C,
          originalAmount: t.subscriptionPlanPrice * t.quantity,
          discounts: t.discounts,
          interval: A.interval,
          intervalCount: A.intervalCount,
          currency: i,
          className: l,
          inTrialPeriod: T,
        });
      }
      function h(e) {
        let { label: n, tooltipText: t, tooltipAriaLabel: s } = e;
        return (0, a.jsxs)("div", {
          className: b.invoiceItemLabelWithIcon,
          children: [
            n,
            (0, a.jsx)(u.Tooltip, {
              clickableOnMobile: !0,
              text: t,
              "aria-label": s,
              tooltipClassName: b.invoiceItemTooltip,
              children: (e) =>
                (0, a.jsx)(u.CircleQuestionIcon, {
                  size: "md",
                  color: "currentColor",
                  ...e,
                  className: b.invoiceItemLabelIcon,
                }),
            }),
          ],
        });
      }
      function U(e) {
        let { invoice: n, isPrepaidPaymentSource: t } = e,
          s = (0, p.j)(n.invoiceItems),
          r = s.find((e) => !(0, N.Z8)(e.subscriptionPlanId) && e.amount >= 0),
          i = s.find((e) => (0, N.Z8)(e.subscriptionPlanId) && e.amount >= 0),
          l = (0, c.e7)([E.Z], () =>
            null != i ? E.Z.get(i.subscriptionPlanId) : null,
          ),
          o = null != i ? i.amount : 0,
          u = (0, P.T4)(o, n.currency),
          d = null != l ? (0, P.og)(u, l.interval, l.intervalCount) : 0;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            null != r
              ? (0, a.jsx)(O, {
                  invoiceItem: r,
                  currency: n.currency,
                  isPrepaidPaymentSource: t,
                })
              : null,
            0 !== o && null != i && null != l
              ? (0, a.jsx)(L.R$, {
                  label:
                    m.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format(
                      {
                        numGuildSubscriptions: i.quantity,
                        planName: (0, N.Gf)(l.id, !1, t),
                      },
                    ),
                  value: t ? u : d,
                })
              : null,
            (0, a.jsx)(f.Z, { invoice: n }),
            (0, a.jsx)(L.KU, {}),
            (0, a.jsx)(L.Ji, {
              label: (n.taxInclusive
                ? t
                  ? m.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE
                  : m.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE
                : m.Z.Messages.BILLING_INVOICE_TODAY_TOTAL
              ).format(),
              value:
                n.currency === C.pKx.USD
                  ? (0, P.T4)(n.total, n.currency)
                  : "".concat((0, P.T4)(n.total, n.currency), "*"),
            }),
          ],
        });
      }
      function y(e) {
        let {
            invoice: n,
            newPlan: t,
            isPrepaidPaymentSource: s,
            referralTrialOfferId: r,
          } = e,
          i = (0, p.j)(n.invoiceItems),
          l = i.find((e) => e.subscriptionPlanId === t.id);
        o()(null != l, "Expected newPlanInvoiceItem");
        let c = i.find((e) => !(0, N.Z8)(e.subscriptionPlanId) && e.amount < 0),
          u = i.find(
            (e) =>
              null == e.subscriptionPlanId &&
              null != e.discounts &&
              e.discounts.find(
                (e) => e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION,
              ),
          ),
          _ = v(l, d.eW.PREMIUM_TRIAL),
          I = g(l, d.eW.SUBSCRIPTION_PLAN),
          E = l.quantity * I,
          T =
            l.amount +
            (null != c ? c.amount : 0) -
            E +
            (null != u ? u.amount : 0),
          A = i
            .filter(
              (e) =>
                e.subscriptionPlanId === S.Xh.PREMIUM_MONTH_GUILD ||
                e.subscriptionPlanId === S.Xh.PREMIUM_YEAR_GUILD,
            )
            .reduce((e, n) => e + n.amount, 0);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(O, {
              invoiceItem: l,
              currency: n.currency,
              overrideAmount: E,
              isPrepaidPaymentSource: s,
              referralTrialOfferId: r,
            }),
            0 === T || _
              ? null
              : (0, a.jsx)(L.R$, {
                  label: (0, a.jsx)(h, {
                    label:
                      m.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                        planName: (0, N.PV)(t.id) ? (0, N.aq)(t.id) : t.name,
                      }),
                    tooltipText:
                      m.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP,
                  }),
                  value: (0, P.T4)(T, n.currency),
                }),
            0 !== A
              ? (0, a.jsx)(L.R$, {
                  label: (0, a.jsx)(h, {
                    label:
                      m.Z.Messages
                        .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                    tooltipText:
                      m.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                    tooltipAriaLabel:
                      m.Z.Messages
                        .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                  }),
                  value: (0, P.T4)(A, n.currency),
                })
              : null,
            (0, a.jsx)(f.Z, { invoice: n }),
            (0, a.jsx)(L.KU, {}),
            (0, a.jsx)(L.Ji, {
              label: (n.taxInclusive
                ? s
                  ? m.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE
                  : m.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE
                : m.Z.Messages.BILLING_INVOICE_TODAY_TOTAL
              ).format(),
              value:
                n.currency === C.pKx.USD
                  ? (0, P.T4)(n.total, n.currency)
                  : "".concat((0, P.T4)(n.total, n.currency), "*"),
            }),
          ],
        });
      }
      function B(e) {
        let n = e.slice();
        return (
          n.sort((e, n) => {
            let t = (0, N.uZ)(e.subscriptionPlanId),
              a = (0, N.uZ)(n.subscriptionPlanId);
            return t && !a ? -1 : !t && a ? 1 : 0;
          }),
          n
        );
      }
      function x(e) {
        return e.filter((e) => {
          let { subscriptionPlanId: n } = e;
          return n !== S.Xh.NONE_MONTH && n !== S.Xh.NONE_YEAR;
        });
      }
      function Z(e) {
        let { proratedInvoice: n, renewalInvoice: t } = e,
          { intervalType: s, intervalCount: r } = (0, N.dn)(n),
          { intervalType: i, intervalCount: l } = (0, N.dn)(t);
        return s !== i ||
          r !== l ||
          n.subscriptionPeriodEnd.getTime() ===
            t.subscriptionPeriodStart.getTime()
          ? null
          : (0, a.jsx)("div", {
              className: b.subscriptionPeriodResetNotice,
              children:
                m.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                  renewalDate: n.subscriptionPeriodEnd,
                }),
            });
      }
      function G(e) {
        let {
            isUpdate: n,
            currentInvoice: t,
            newInvoice: s,
            inTrialPeriod: r,
          } = e,
          l = null != t ? (0, p.j)(t.invoiceItems) : null,
          o = null != t ? (0, N.dn)(t) : null,
          { intervalType: c, intervalCount: u } = (0, N.dn)(s),
          d = null != o && (o.intervalType !== c || o.intervalCount !== u);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(L.KU, { extended: !0 }),
            null != t
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(L.q9, {
                      children: m.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL,
                    }),
                    x(B((0, p.j)(t.invoiceItems))).map((e) =>
                      (0, a.jsx)(
                        O,
                        {
                          invoiceItem: e,
                          currency: t.currency,
                          inTrialPeriod: r,
                        },
                        e.id,
                      ),
                    ),
                    (0, a.jsx)(L.KU, { extended: !0 }),
                  ],
                })
              : null,
            (0, a.jsx)(L.q9, {
              children: m.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL,
            }),
            x(B((0, p.j)(s.invoiceItems))).map((e) => {
              let t =
                null != l &&
                !l.some(
                  (n) =>
                    n.subscriptionPlanId === e.subscriptionPlanId &&
                    n.quantity === e.quantity,
                );
              return (0, a.jsx)(
                O,
                {
                  invoiceItem: e,
                  currency: s.currency,
                  showGuildSubscriptionAdjustmentTooltip:
                    d &&
                    (e.subscriptionPlanId === S.Xh.PREMIUM_MONTH_GUILD ||
                      e.subscriptionPlanId === S.Xh.PREMIUM_YEAR_GUILD ||
                      e.subscriptionPlanId === S.Xh.PREMIUM_3_MONTH_GUILD ||
                      e.subscriptionPlanId === S.Xh.PREMIUM_6_MONTH_GUILD),
                  className: i()({ [b.subscriptionAddedInvoiceItem]: !n || t }),
                },
                e.id,
              );
            }),
            (0, a.jsx)(f.Z, { invoice: s }),
            (0, a.jsx)(L.KU, {}),
            (0, a.jsx)(L.R$, {
              label: m.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
              value: (0, P.og)((0, P.T4)(s.total, s.currency), c, u),
              className: b.subscriptionCostRow,
            }),
          ],
        });
      }
      function D(e) {
        var n;
        let {
            proratedInvoice: t,
            renewalInvoice: s,
            isTrial: r,
            isUpdate: i,
            overrideRenewalDate: l,
            trialFooterMessageOverride: o,
          } = e,
          c =
            null === (n = (0, R.N)()) || void 0 === n
              ? void 0
              : n.subscription_trial,
          { intervalType: u, intervalCount: d } = (0, N.dn)(s);
        if (null == t) return null;
        if (r) {
          let e = (0, N.if)({
              intervalType: null == c ? void 0 : c.interval,
              intervalCount: null == c ? void 0 : c.interval_count,
            }),
            n =
              (null == c ? void 0 : c.interval) === S.rV.DAY &&
              (null == c ? void 0 : c.interval_count) < 28
                ? 2
                : 7;
          return (0, a.jsx)(a.Fragment, {
            children:
              null != o
                ? o
                : m.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format(
                    {
                      duration: e,
                      days: n,
                      contactLink: C.EYA.CONTACT,
                      helpdeskArticle: A.Z.getArticleURL(C.BhN.PREMIUM_TRIAL),
                    },
                  ),
          });
        }
        let _ = s.taxInclusive
          ? m.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER
          : m.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
        return (0, a.jsx)(a.Fragment, {
          children: _.format({
            rate: (0, P.og)((0, P.T4)(s.subtotal, s.currency), u, d),
            renewalDate:
              null != l
                ? l
                : i
                  ? null != t
                    ? t.subscriptionPeriodEnd
                    : s.subscriptionPeriodStart
                  : s.subscriptionPeriodEnd,
            contactLink: C.EYA.CONTACT,
            helpdeskArticle: A.Z.getArticleURL(C.BhN.BILLING),
          }),
        });
      }
      function Y(e) {
        let {
            premiumSubscription: n,
            proratedInvoice: t,
            renewalInvoice: r,
            overrideRenewalDate: i,
            isUpdate: l = !1,
            isTrial: o = !1,
            priceOptions: c,
            isPrepaidPaymentSource: d = !1,
            trialFooterMessageOverride: E,
            hideSubscriptionDetails: A = !1,
          } = e,
          { analyticsLocations: N } = (0, I.ZP)(),
          P = {
            subscriptionId: null == n ? void 0 : n.id,
            renewal: !0,
            preventFetch: !l,
            analyticsLocatinons: N,
            analyticsLocation: _.Z.SUBSCRIPTION_INVOICE_FOOTER,
            ...c,
          },
          [p] = (0, M.ED)(P),
          [R, f] = s.useState(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            d
              ? null
              : (0, a.jsx)(L.HE, {
                  children: (0, a.jsx)(D, {
                    proratedInvoice: t,
                    renewalInvoice: r,
                    isTrial: o,
                    isUpdate: l,
                    overrideRenewalDate: i,
                    trialFooterMessageOverride: E,
                  }),
                }),
            !A &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(u.Clickable, {
                    onClick: () => f((e) => !e),
                    className: b.subscriptionDetailsToggle,
                    children: [
                      R
                        ? m.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS
                        : m.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS,
                      (0, a.jsx)(T.Z, {
                        direction: R ? T.Z.Directions.UP : T.Z.Directions.DOWN,
                        className: b.subscriptionDetailsToggleCaret,
                      }),
                    ],
                  }),
                  R
                    ? (0, a.jsx)(G, {
                        isUpdate: l,
                        currentInvoice: p,
                        newInvoice: r,
                        inTrialPeriod: o,
                      })
                    : null,
                ],
              }),
          ],
        });
      }
      function j(e) {
        let n,
          {
            plan: t,
            className: s,
            isPrepaidPaymentSource: r = !1,
            isCustomGift: i = !1,
            invoicePreview: l,
          } = e,
          { tax: o, taxInclusive: c, currency: d } = l,
          _ = l.total,
          I = _ - o,
          E = (0, P.T4)(I, d),
          T = (0, P.T4)(_, d);
        return (
          (n = i
            ? (0, N.L7)(t.interval, !0, void 0, void 0, !0, (0, N.Rd)(t.id))
            : m.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                planName: (0, N.Gf)(t.id, !1, r),
              })),
          (0, a.jsxs)("div", {
            className: s,
            children: [
              (0, a.jsx)(u.FormTitle, {
                children: m.Z.Messages.PREMIUM_GIFTING_BUTTON,
              }),
              o >= 0 && !1 === c
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(u.Text, {
                        variant: "text-md/bold",
                        className: b.purchaseDetailsHeaderText,
                        children: n,
                      }),
                      (0, a.jsxs)(L.PO, {
                        className: s,
                        children: [
                          (0, a.jsx)(L.q9, {
                            children:
                              m.Z.Messages
                                .ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL,
                          }),
                          (0, a.jsx)(L.R$, { label: n, value: E }),
                          (0, a.jsx)(f.Z, { invoice: l }),
                          (0, a.jsx)(L.KU, {}),
                          (0, a.jsx)(L.R$, {
                            label: m.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                            value: T,
                            className: b.subscriptionCostRow,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, a.jsx)(u.Heading, {
                    variant: "text-md/normal",
                    children: "".concat(n, " - ").concat(T),
                  }),
            ],
          })
        );
      }
      function k(e) {
        let n,
          { invoice: t, plan: s } = e,
          r = (0, p.j)(t.invoiceItems).find(
            (e) => e.subscriptionPlanId === s.id,
          );
        return (
          o()(null != r, "newPlanInvoiceItem can not be null"),
          s.interval === S.rV.MONTH
            ? (n = t.taxInclusive
                ? m.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL
                : m.Z.Messages
                    .BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE)
            : s.interval === S.rV.YEAR
              ? (n = t.taxInclusive
                  ? m.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL
                  : m.Z.Messages
                      .BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE)
              : o()(!1, "Invalid interval type"),
          (0, a.jsx)(u.Text, {
            variant: "text-md/normal",
            children: n.format({
              price: (0, P.T4)(r.subscriptionPlanPrice, t.currency),
            }),
          })
        );
      }
    },
    244923: function (e, n, t) {
      var a = t(200651);
      t(192379);
      var s = t(481060),
        r = t(366939),
        i = t(853872),
        l = t(212895),
        o = t(296848);
      n.Z = function (e) {
        let {
            activeSubscription: n,
            onNext: t,
            isSubmitting: c,
            paymentSourceId: u,
            buttonLabel: d,
            analyticsLocations: _,
          } = e,
          I = async () => {
            let e = i.Z.getPaymentSource(u);
            null != e &&
              (await (0, l.i1)(u, (0, o.yb)(n)),
              await r.tq(n, e, n.currency, _),
              t());
          };
        return (0, a.jsx)(s.Button, {
          "data-testid": "purchase",
          onClick: I,
          color: s.Button.Colors.GREEN,
          submitting: c,
          children: d,
        });
      };
    },
    858987: function (e, n, t) {
      t.d(n, {
        K: function () {
          return M;
        },
        Z: function () {
          return R;
        },
      }),
        t(789020);
      var a = t(200651);
      t(192379);
      var s = t(512722),
        r = t.n(s),
        i = t(481060),
        l = t(115130),
        o = t(906732),
        c = t(598),
        u = t(630388),
        d = t(74538),
        _ = t(296848),
        I = t(244923),
        E = t(981631),
        T = t(231338),
        A = t(689938),
        N = t(423654),
        P = t(74316);
      function M(e) {
        let {
          purchaseType: n,
          plan: t,
          premiumSubscription: a,
          isGift: s,
          planGroup: i,
          isPrepaidPaymentSource: l,
          inReverseTrial: o,
        } = e;
        if (n === T.GZ.ONE_TIME)
          return s
            ? A.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT
            : A.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
        if (
          (r()(
            null != t,
            "Subscription plan must be selected to render SubscriptionReviewButton",
          ),
          s)
        )
          return A.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
        if (o) return A.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
        if ((0, d.PV)(t.id)) {
          if (l) return A.Z.Messages.BILLING_SELECT_PLAN;
          if (null != a)
            return a.isPaused
              ? A.Z.Messages.RESUME
              : (0, _.R4)(a, t.id, i)
                ? A.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE
                : A.Z.Messages.BILLING_SWITCH_PLAN_CHANGE;
          return (0, d.W_)(null, t);
        }
        return A.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN;
      }
      function p(e, n) {
        null != e.current &&
          (e.current.scrollIntoView({ behavior: "smooth" }), n());
      }
      function R(e) {
        var n;
        let {
            legalTermsNodeRef: t,
            invoiceError: s,
            planError: r,
            disablePurchase: d,
            flashLegalTerms: _,
            isSubmitting: T,
            premiumSubscription: R,
            isGift: L,
            planGroup: f,
            isPrepaid: S,
            isTrial: C,
            makePurchase: m,
            needsPaymentSource: b,
            inReverseTrial: v,
            onNext: g,
          } = e,
          {
            application: O,
            selectedPlan: h,
            hasAcceptedTerms: U,
            purchaseType: y,
            paymentSourceId: B,
            activeSubscription: x,
            devShelfFetchState: Z,
          } = (0, c.usePaymentContext)(),
          G = M({
            purchaseType: y,
            plan: h,
            premiumSubscription: R,
            isGift: L,
            planGroup: f,
            isPrepaidPaymentSource: S,
            inReverseTrial: v,
          }),
          { analyticsLocations: D } = (0, o.ZP)();
        if (null != s || null != r || d)
          return (0, a.jsx)(i.Button, {
            color: i.Button.Colors.GREEN,
            disabled: !0,
            children: G,
          });
        if (b)
          return (0, a.jsx)(i.Tooltip, {
            text: A.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
            children: (e) =>
              (0, a.jsx)(i.Button, {
                ...e,
                color: i.Button.Colors.GREEN,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
                children: G,
              }),
          });
        if (
          (0, u.yE)(
            null !== (n = null == O ? void 0 : O.flags) && void 0 !== n ? n : 0,
            E.udG.EMBEDDED,
          ) &&
          Z === l.O.LOADING
        )
          return (0, a.jsx)(i.Tooltip, {
            text: A.Z.Messages.BILLING_LOADING_DEVELOPER_ACTIVITY_SHELF,
            children: (e) =>
              (0, a.jsx)(i.Button, {
                ...e,
                color: i.Button.Colors.GREEN,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
                children: G,
              }),
          });
        else if (C)
          return (0, a.jsxs)(i.ShinyButton, {
            innerClassName: N.innerButton,
            "data-testid": U ? "purchase" : "submitButton",
            onClick: U ? m : () => p(t, _),
            color: i.Button.Colors.GREEN,
            submitting: T,
            children: [
              (0, a.jsx)("img", { alt: "", className: N.nitroIcon, src: P }),
              G,
            ],
          });
        else if (!U)
          return (0, a.jsx)(i.Tooltip, {
            text: A.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: (e) =>
              (0, a.jsx)(i.Button, {
                ...e,
                color: i.Button.Colors.GREEN,
                type: "submit",
                onClick: () => p(t, _),
                "data-testid": "submitButton",
                children: G,
              }),
          });
        else if (v && null != x && null != B)
          return (0, a.jsx)(I.Z, {
            activeSubscription: x,
            onNext: g,
            isSubmitting: T,
            paymentSourceId: B,
            buttonLabel: G,
            analyticsLocations: D,
          });
        else
          return (0, a.jsx)(i.Button, {
            "data-testid": "purchase",
            onClick: m,
            color: i.Button.Colors.GREEN,
            submitting: T,
            children: G,
          });
      }
    },
    850840: function (e, n, t) {
      let a;
      t(653041);
      var s,
        r = t(442837),
        i = t(570140);
      function l(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let o = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class c extends (s = r.ZP.PersistedStore) {
        initialize(e) {
          a = null != e ? e : o;
        }
        getState() {
          return a;
        }
        get hasAcceptedStoreTerms() {
          return a.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return a.hasAcceptedEulaIds.includes(e);
        }
      }
      l(c, "displayName", "ApplicationStoreUserSettingsStore"),
        l(c, "persistKey", "ApplicationStoreUserSettingsStore"),
        l(c, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (n.Z = new c(i.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            a.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: n } = e;
            if (a.hasAcceptedEulaIds.includes(n)) return !1;
            a.hasAcceptedEulaIds.push(n);
          },
        }));
    },
    296848: function (e, n, t) {
      t.d(n, {
        AT: function () {
          return N;
        },
        GY: function () {
          return T;
        },
        R4: function () {
          return E;
        },
        oE: function () {
          return A;
        },
        yb: function () {
          return I;
        },
      }),
        t(47120),
        t(653041),
        t(192379);
      var a = t(512722),
        s = t.n(a),
        r = t(913527),
        i = t.n(r),
        l = t(99945);
      t(442837);
      var o = t(821849),
        c = t(509545),
        u = t(74538),
        d = t(981631),
        _ = t(474936);
      function I(e) {
        return e.items
          .map((e) => {
            let n = c.Z.get(e.planId);
            return s()(null != n, "Unable to fetch plan"), n;
          })
          .map((e) => e.skuId);
      }
      function E(e, n, t) {
        let a = e.getCurrentSubscriptionPlanIdForGroup(t);
        return (
          (e.type === d.NYc.PREMIUM && null == a) ||
          (s()(null != a, "Current subscription has no plan in group"),
          s()(
            !(
              a === _.Xh.PREMIUM_YEAR_TIER_1 && n === _.Xh.PREMIUM_MONTH_TIER_2
            ),
            "Unexpected plan switch",
          ),
          t.indexOf(a) < t.indexOf(n))
        );
      }
      function T(e, n, t) {
        return !E(e, n, t);
      }
      function A(e, n) {
        let t = c.Z.get(e);
        if (null == t) {
          let t = _.GP[e];
          s()(null != t, "Missing hardcoded subscriptionPlan: ".concat(e));
          let a = (0, u.Wz)(t.skuId);
          !c.Z.isFetchingForSKU(a) && (0, o.GZ)(a, n);
        }
        return t;
      }
      function N(e) {
        let n = Object.keys(l.T).filter((e) => isNaN(Number(e)));
        if (e.status !== d.O0b.PAUSED)
          return { durations: n, currentDaysPaused: 0 };
        if (null == e.pauseEndsAt)
          return { durations: [], currentDaysPaused: 0 };
        {
          let t = i()(e.currentPeriodStart),
            a = Math.round(i()(e.pauseEndsAt).diff(t, "days", !0)),
            s = [];
          for (let e of n) l.T[e] > a && s.push(e);
          return { durations: s, currentDaysPaused: a };
        }
      }
    },
    99945: function (e, n, t) {
      var a, s;
      t.d(n, {
        T: function () {
          return a;
        },
      }),
        ((s = a || (a = {}))[(s.ONE_MONTH = 30)] = "ONE_MONTH"),
        (s[(s.TWO_MONTHS = 60)] = "TWO_MONTHS"),
        (s[(s.THREE_MONTHS = 90)] = "THREE_MONTHS");
    },
  },
]);
//# sourceMappingURL=52a7fb7ce3891ad8987b.js.map
