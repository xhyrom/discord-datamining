"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15685"],
  {
    224550: function (e, n, t) {
      t(411104);
      var s = t(735250);
      t(470079);
      var r = t(442837),
        i = t(858987),
        l = t(78839),
        a = t(122289),
        c = t(63063),
        o = t(74538),
        u = t(937615),
        I = t(296848),
        _ = t(981631),
        E = t(474936),
        T = t(689938),
        d = t(930543);
      n.Z = function (e) {
        let n, t, N, M;
        let {
            subscriptionPlan: A,
            isGift: L,
            isEmbeddedIAP: P,
            renewalInvoice: R,
            paymentSourceType: m,
            hide: S,
            purchaseType: U,
            productLine: p,
            basePrice: O,
            currentSubscription: v,
          } = e,
          C = (0, r.e7)([l.ZP], () => l.ZP.inReverseTrial());
        if (S) return null;
        let h = null == e.planGroup ? [] : e.planGroup;
        if (null != R) {
          let e = o.ZP.getIntervalForInvoice(R);
          (n = e.intervalType),
            (t = e.intervalCount),
            (N = (0, u.og)((0, u.T4)(R.total, R.currency), n, t)),
            (M = (0, u.og)((0, u.T4)(R.subtotal, R.currency), n, t));
        } else null != A && ((n = A.interval), (t = A.intervalCount));
        let f = (0, i.K)({
            purchaseType: U || _.GZQ.SUBSCRIPTION,
            plan: A,
            premiumSubscription: null == v ? null : v,
            isGift: !!L,
            planGroup: h,
            isPrepaidPaymentSource: !1,
          }),
          g = "",
          x = "";
        if (P) {
          if (
            null != N &&
            (null == R ? void 0 : R.subscriptionPeriodEnd) != null
          )
            g =
              T.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL_V2.format(
                { subtotalRate: M },
              );
          else
            switch (n) {
              case E.rV.MONTH:
                g =
                  1 === t
                    ? T.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY_V2.format(
                        {},
                      )
                    : T.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH_V2.format(
                        { intervalCount: t },
                      );
                break;
              case E.rV.YEAR:
                g =
                  T.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY_V2.format(
                    {},
                  );
                break;
              case void 0:
                (x =
                  T.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                    primaryText: f,
                    paidURL: _.EYA.PAID_TERMS,
                  })),
                  (g =
                    T.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format(
                      {},
                    ));
                break;
              default:
                throw Error("Unexpected interval: ".concat(n));
            }
        } else if (U === _.GZQ.ONE_TIME)
          (x = T.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V3.format({
            primaryText: f,
            paidURL: _.EYA.PAID_TERMS,
          })),
            (g =
              p === _.POd.COLLECTIBLES
                ? L
                  ? T.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT
                  : T.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT
                : T.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT);
        else if (null == A || L)
          switch (
            (L &&
              (x = T.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format(
                { primaryText: f, paidURL: _.EYA.PAID_TERMS },
              )),
            n)
          ) {
            case E.rV.MONTH:
              (g = L
                ? T.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY
                : T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY),
                (g = L
                  ? T.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY
                  : 1 === t
                    ? T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY
                    : T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format(
                        { intervalCount: t },
                      ));
              break;
            case E.rV.YEAR:
              g = L
                ? T.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY
                : T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
              break;
            case void 0:
              g = "";
              break;
            default:
              throw Error("Unexpected interval: ".concat(n));
          }
        else {
          let e;
          let s = (0, i.K)({
            purchaseType: _.GZQ.SUBSCRIPTION,
            plan: A,
            premiumSubscription: null == v ? null : v,
            isGift: !1,
            planGroup: h,
            isPrepaidPaymentSource: !1,
          });
          if (
            (null != O &&
              null != n &&
              null != t &&
              (e = (0, u.og)((0, u.T4)(O.amount, O.currency), n, t)),
            null == e)
          ) {
            let e = Error("Missing base rate for legal fine print");
            (0, a.q2)(e, { tags: { planId: A.id } });
          }
          g = (null == v ? void 0 : v.isPaused)
            ? T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_RESUME.format({
                primaryText: s,
                rate: e,
                paidURL: _.EYA.PAID_TERMS,
                contactLink: _.EYA.CONTACT,
                helpdeskArticle: c.Z.getArticleURL(_.BhN.BILLING),
              })
            : null != v && (0, I.GY)(v, A.id, h)
              ? T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format(
                  {
                    primaryText: s,
                    rate: e,
                    paidURL: _.EYA.PAID_TERMS,
                    contactLink: _.EYA.CONTACT,
                    helpdeskArticle: c.Z.getArticleURL(_.BhN.BILLING),
                  },
                )
              : C && p === _.POd.BOOST && null != O
                ? T.Z.Messages.BILLING_BOOST_PURCHASE_IN_REVERSE_TRIAL_LEGAL_COPY.format(
                    {
                      price: (0, u.T4)(O.amount, O.currency),
                      paidServiceTermsArticle: _.EYA.PAID_TERMS,
                      contactUsArticle: _.EYA.CONTACT,
                      subscriptionFAQArticle: c.Z.getArticleURL(_.BhN.BILLING),
                    },
                  )
                : T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
                    primaryText: s,
                    rate: e,
                    paidURL: _.EYA.PAID_TERMS,
                    contactLink: _.EYA.CONTACT,
                    helpdeskArticle: c.Z.getArticleURL(_.BhN.BILLING),
                  });
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            "" !== x &&
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("div", { children: x }),
                  (0, s.jsx)("div", { className: d.divider }),
                ],
              }),
            "" !== g && (0, s.jsx)("div", { children: g }),
            m === _.HeQ.PAYSAFE_CARD &&
              (0, s.jsx)("div", {
                className: d.paymentSourceNoticeCopy,
                children:
                  T.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD,
              }),
            m === _.HeQ.SOFORT &&
              (0, s.jsxs)("div", {
                className: d.paymentSourceNoticeCopy,
                children: [T.Z.Messages.SOFORT_MANDATE_AGREEMENT, " "],
              }),
          ],
        });
      };
    },
    490504: function (e, n, t) {
      var s = t(735250);
      t(470079);
      var r = t(481060),
        i = t(424963);
      n.Z = function (e) {
        let { message: n } = e;
        return (0, s.jsxs)("div", {
          className: i.container,
          children: [
            (0, s.jsx)(r.CircleInformationIcon, {
              size: "custom",
              className: i.icon,
              width: 20,
              height: 20,
              color: r.tokens.colors.TEXT_WARNING,
            }),
            (0, s.jsx)(r.Text, {
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
          return L;
        },
      }),
        t(411104),
        t(47120);
      var s = t(735250),
        r = t(470079),
        i = t(120356),
        l = t.n(i),
        a = t(692547),
        c = t(481060),
        o = t(987032),
        u = t(219929),
        I = t(46141),
        _ = t(63063),
        E = t(981631),
        T = t(231338),
        d = t(689938),
        N = t(235183);
      let M = "***@***.***",
        A = new I.dm({
          id: "new_payment_source_id",
          brand: u.ZP.Types.UNKNOWN,
          type: E.HeQ.CARD,
        });
      function L(e) {
        var n, t;
        let i,
          {
            selectedPaymentSourceId: L,
            paymentSources: P,
            prependOption: R,
            hidePersonalInformation: m,
            onChange: S,
            onPaymentSourceAdd: U,
            isTrial: p = !1,
            disabled: O = !1,
            className: v,
            optionClassName: C,
            dropdownLoading: h,
          } = e,
          f = 0 === P.length,
          g = [...(null != R ? [R] : []), ...P, A].map((e, n) => {
            if (e instanceof I.ZP) {
              let { brand: n, label: t } = (function (e, n) {
                if (e instanceof I.dm)
                  return e.id === A.id
                    ? { brand: null, label: d.Z.Messages.PAYMENT_SOURCES_ADD }
                    : {
                        brand: n ? u.ZP.Types.UNKNOWN : e.brand,
                        label:
                          d.Z.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
                            last4: n ? "****" : e.last4,
                          }),
                      };
                if (e instanceof I.qo)
                  return { brand: u.ZP.Types.PAYPAL, label: n ? M : e.email };
                if (e instanceof I.Sf)
                  return { brand: u.ZP.Types.SOFORT, label: n ? M : e.email };
                else if (e instanceof I.fv)
                  return {
                    brand: u.ZP.Types.GIROPAY,
                    label: d.Z.Messages.PAYMENT_SOURCE_GIROPAY,
                  };
                else if (e instanceof I.Vg)
                  return {
                    brand: u.ZP.Types.PRZELEWY24,
                    label: n ? M : e.email,
                  };
                else if (e instanceof I.sn)
                  return {
                    brand: u.ZP.Types.PAYSAFECARD,
                    label: d.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT,
                  };
                else if (e instanceof I.o_)
                  return {
                    brand: u.ZP.Types.GCASH,
                    label: d.Z.Messages.PAYMENT_SOURCE_GCASH,
                  };
                else if (e instanceof I.kX)
                  return {
                    brand: u.ZP.Types.GRABPAY,
                    label: d.Z.Messages.PAYMENT_SOURCE_GRABPAY,
                  };
                else if (e instanceof I.z)
                  return {
                    brand: u.ZP.Types.MOMO_WALLET,
                    label: d.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                  };
                else if (e instanceof I.Xc)
                  return {
                    brand: u.ZP.Types.VENMO,
                    label: n ? "***" : "@" + e.username,
                  };
                else if (e instanceof I.Om)
                  return {
                    brand: u.ZP.Types.KAKAOPAY,
                    label: d.Z.Messages.PAYMENT_SOURCE_KAKAOPAY,
                  };
                else if (e instanceof I.JC)
                  return {
                    brand: u.ZP.Types.GOPAY_WALLET,
                    label: d.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                  };
                else if (e instanceof I.U4)
                  return {
                    brand: u.ZP.Types.BANCONTACT,
                    label: d.Z.Messages.PAYMENT_SOURCE_BANCONTACT,
                  };
                else if (e instanceof I.D0)
                  return {
                    brand: u.ZP.Types.EPS,
                    label: d.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
                      bank: (0, o.Ul)(e.bank),
                    }),
                  };
                else if (e instanceof I.jc)
                  return {
                    brand: u.ZP.Types.IDEAL,
                    label: d.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
                      bank: (0, o.YE)(e.bank),
                    }),
                  };
                else if (e instanceof I.u_)
                  return {
                    brand: u.ZP.Types.CASH_APP,
                    label: n ? "***" : e.username,
                  };
                throw Error("Invalid Payment Source");
              })(e, m);
              return {
                value: e.id,
                label: (0, s.jsxs)("div", {
                  className: N.paymentSourceSelectedOption,
                  children: [
                    null != n
                      ? (0, s.jsx)(u.ZP, { type: u.ZP.getType(n) })
                      : null,
                    (0, s.jsx)("div", {
                      className: l()(N.paymentSourceLabel, {
                        [N.error]: e.invalid,
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
              label: (0, s.jsx)("div", {
                className: N.paymentSourceLabel,
                children: e.label,
              }),
            };
          }),
          x = r.useMemo(() => P.find((e) => e.id === L), [P, L]);
        let Z =
          ((n = p),
          (t = x),
          (i = null),
          n && null != t && !t.canRedeemTrial()
            ? (i = d.Z.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID)
            : n &&
              null != t &&
              t.hasFlag(T.Cw.NEW) &&
              (i = d.Z.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
                helpDeskArticle: _.Z.getArticleURL(
                  E.BhN.PAYMENT_AUTHORIZATION_CHARGE,
                ),
              })),
          i);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            f
              ? (0, s.jsx)(c.Button, {
                  color: c.ButtonColors.BRAND,
                  fullWidth: !0,
                  onClick: U,
                  children: d.Z.Messages.PAYMENT_SOURCES_ADD,
                })
              : (0, s.jsx)(c.SingleSelect, {
                  options: g,
                  value: L,
                  onChange: (e) => {
                    if (e === A.id) null != U && U();
                    else {
                      let n = P.find((n) => n.id === e);
                      null != S && S(n);
                    }
                  },
                  isDisabled: O,
                  className: l()({ [N.paymentSourceHasWarning]: null != Z }, v),
                  optionClassName: C,
                  placeholder: d.Z.Messages.PAYMENT_SOURCE_TYPE_SELECT,
                  renderOptionValue: (e) => {
                    let [n] = e;
                    return h
                      ? (0, s.jsx)(c.Spinner, {
                          type: c.SpinnerTypes.SPINNING_CIRCLE,
                        })
                      : n.label;
                  },
                }),
            null != Z
              ? (0, s.jsxs)("div", {
                  className: N.paymentSourceWarning,
                  children: [
                    (0, s.jsx)(c.CircleWarningIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: N.paymentSourceWarningIcon,
                      color: a.Z.unsafe_rawColors.YELLOW_300.css,
                    }),
                    (0, s.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      children: Z,
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
      var s = t(735250),
        r = t(470079),
        i = t(120356),
        l = t.n(i),
        a = t(512722),
        c = t.n(a),
        o = t(442837),
        u = t(481060),
        I = t(850840),
        _ = t(63063),
        E = t(74538),
        T = t(981631),
        d = t(474936),
        N = t(689938),
        M = t(961667);
      function A(e, n, t) {
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
      class L extends r.Component {
        componentDidMount() {
          this.props.onChange(
            this.hasAcceptedNeccessaryTerms(this.props, this.state),
          );
        }
        componentDidUpdate(e, n) {
          let t = this.hasAcceptedNeccessaryTerms(e, n),
            s = this.hasAcceptedNeccessaryTerms(this.props, this.state);
          s !== t && this.props.onChange(s);
        }
        hasAcceptedNeccessaryTerms(e, n) {
          return (
            (null == e.eulaId || n.hasAcceptedEULA) &&
            (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver)
          );
        }
        formatInterval(e) {
          if (e === d.rV.YEAR)
            return N.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
          if (e === d.rV.MONTH)
            return N.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
          throw Error("Invalid interval type: ".concat(e));
        }
        render() {
          let {
              eulaId: e,
              applicationName: n,
              hasPreviouslyAcceptedEULA: r,
              forceShow: i,
              disabled: a,
              className: o,
              checkboxClassname: I,
              checkboxLabelClassname: d,
              finePrint: A,
              showPricingLink: L,
              showWithdrawalWaiver: P,
              isTrial: R,
              inReverseTrial: m,
              isDiscount: S,
              subscriptionPlan: U,
              finePrintClassname: p,
            } = this.props,
            { hasAcceptedEULA: O, hasAcceptedWithdrawalWaiver: v } = this.state;
          return (c()(
            !R || null != U,
            "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true",
          ),
          i || (null != e && !r) || P)
            ? (0, s.jsxs)("div", {
                className: o,
                children: [
                  P &&
                    (0, s.jsx)(u.FormTitle, {
                      className: M.formTitle,
                      children: N.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER,
                    }),
                  null != e && (i || !r)
                    ? (0, s.jsx)(u.Checkbox, {
                        type: u.Checkbox.Types.INVERTED,
                        value: O,
                        onChange: this.handleToggleEULAAcceptance,
                        disabled: a,
                        className: M.checkbox,
                        children: (0, s.jsx)("div", {
                          className: M.checkboxLabel,
                          children:
                            N.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                              applicationName: n,
                              onClick: (n) => {
                                (0, u.openModalLazy)(async () => {
                                  let { default: n } = await t
                                    .e("51868")
                                    .then(t.bind(t, 796504));
                                  return (t) =>
                                    (0, s.jsx)(n, { eulaId: e, ...t });
                                }),
                                  n.preventDefault();
                              },
                            }),
                        }),
                      })
                    : null,
                  null == A
                    ? null
                    : (0, s.jsx)("div", {
                        className: l()(M.finePrint, p),
                        children: A,
                      }),
                  P
                    ? (0, s.jsxs)("div", {
                        className: o,
                        children: [
                          (0, s.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: v,
                            onChange:
                              this.handleToggleEUWithdralWaiverAcceptance,
                            disabled: a,
                            className: l()(M.checkbox, I),
                            children: (0, s.jsx)("div", {
                              className: l()(M.checkboxLabel, d),
                              children:
                                N.Z.Messages
                                  .BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX,
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: M.finePrint,
                            children:
                              N.Z.Messages
                                .BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER,
                          }),
                        ],
                      })
                    : null,
                  L &&
                    (0, s.jsxs)("div", {
                      className: M.finePrint,
                      children: [
                        "*",
                        N.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
                          documentationLink: _.Z.getArticleURL(
                            T.BhN.LOCALIZED_PRICING,
                          ),
                        }),
                      ],
                    }),
                  R &&
                    null != U &&
                    (0, s.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: N.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format(
                        {
                          buttonText: (0, E.W_)(null, U),
                          interval: this.formatInterval(
                            null == U ? void 0 : U.interval,
                          ),
                          cancelSubscriptionArticle: _.Z.getArticleURL(
                            T.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                          ),
                          paidServiceTermsArticle: _.Z.getArticleURL(
                            T.BhN.PAID_TERMS,
                          ),
                        },
                      ),
                    }),
                  m &&
                    null != U &&
                    (0, s.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children:
                        N.Z.Messages.BILLING_REVERSE_TRIAL_LEGAL_COPY.format({
                          buttonText: (0, E.W_)(null, U),
                          interval: this.formatInterval(
                            null == U ? void 0 : U.interval,
                          ),
                          cancelSubscriptionArticle: _.Z.getArticleURL(
                            T.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                          ),
                          paidServiceTermsArticle: _.Z.getArticleURL(
                            T.BhN.PAID_TERMS,
                          ),
                        }),
                    }),
                  S &&
                    null != U &&
                    (0, s.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: N.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format(
                        {
                          buttonText: (0, E.W_)(null, U),
                          interval: this.formatInterval(
                            null == U ? void 0 : U.interval,
                          ),
                          cancelSubscriptionArticle: _.Z.getArticleURL(
                            T.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                          ),
                          paidServiceTermsArticle: _.Z.getArticleURL(
                            T.BhN.PAID_TERMS,
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
            A(this, "state", {
              hasAcceptedEULA:
                !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
              hasAcceptedWithdrawalWaiver: !1,
            }),
            A(this, "handleToggleEUWithdralWaiverAcceptance", (e, n) => {
              this.setState({ hasAcceptedWithdrawalWaiver: n });
            }),
            A(this, "handleToggleEULAAcceptance", (e, n) => {
              this.setState({ hasAcceptedEULA: n });
            });
        }
      }
      n.Z = o.ZP.connectStores([I.Z], (e) => {
        let { eulaId: n } = e;
        return {
          hasPreviouslyAcceptedEULA: null != n && I.Z.hasAcceptedEULA(n),
        };
      })(L);
    },
    53900: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var s = t(442837),
        r = t(853872),
        i = t(78839);
      function l() {
        let e = (0, s.e7)([i.ZP], () => i.ZP.getPremiumTypeSubscription());
        return (0, s.e7)([r.Z], () => {
          var n;
          return (null == e ? void 0 : e.paymentSourceId) != null
            ? null === (n = r.Z.getPaymentSource(e.paymentSourceId)) ||
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
          return M;
        },
        Ji: function () {
          return N;
        },
        KU: function () {
          return d;
        },
        PO: function () {
          return I;
        },
        R$: function () {
          return E;
        },
        i$: function () {
          return T;
        },
        q9: function () {
          return _;
        },
      });
      var s = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        l = t(481060),
        a = t(911969),
        c = t(937615),
        o = t(689938),
        u = t(490884);
      function I(e) {
        let { children: n, className: t } = e;
        return (0, s.jsx)("div", { className: i()(u.table, t), children: n });
      }
      function _(e) {
        let { children: n } = e;
        return (0, s.jsx)("div", { className: u.header, children: n });
      }
      function E(e) {
        let { label: n, value: t, className: r } = e;
        return (0, s.jsxs)("div", {
          className: i()(u.row, r),
          children: [
            (0, s.jsx)("div", { className: u.rowLabel, children: n }),
            (0, s.jsx)("div", { className: u.rowAmount, children: t }),
          ],
        });
      }
      function T(e) {
        let {
            label: n,
            value: t,
            discounts: r,
            originalAmount: i,
            interval: I,
            currency: _,
            className: T,
            intervalCount: d,
            inTrialPeriod: N,
          } = e,
          M = (e) => (null != r ? r.find((n) => n.type === e) : null),
          A = M(a.eW.SUBSCRIPTION_PLAN),
          L = M(a.eW.ENTITLEMENT),
          P = null != A ? Math.floor((A.amount / i) * 100) : null,
          R = (0, c.T4)(i, _);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(E, {
              label: n,
              value: (0, s.jsxs)(s.Fragment, {
                children: [
                  N
                    ? o.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                        price: (0, c.T4)(0, _),
                      })
                    : t,
                  null != P
                    ? (0, s.jsxs)("div", {
                        className: u.rowPercentDiscount,
                        children: ["-", P, "%"],
                      })
                    : null,
                ],
              }),
              className: T,
            }),
            N &&
              (0, s.jsx)(l.Text, {
                variant: "text-md/medium",
                className: u.trialEndPrice,
                children:
                  o.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                    price: R,
                  }),
              }),
            null != P
              ? (0, s.jsxs)("div", {
                  className: u.rowDiscountOriginalPrice,
                  children: [
                    "(",
                    null != I && null != d ? (0, c.og)(R, I, d) : R,
                    ")",
                  ],
                })
              : null,
            null != L
              ? (0, s.jsx)("div", {
                  className: u.entitlementDiscountRow,
                  children:
                    o.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED,
                })
              : null,
          ],
        });
      }
      function d(e) {
        let {
          extended: n = !1,
          negativeMarginTop: t = !1,
          negativeMarginBottom: r = !1,
        } = e;
        return (0, s.jsx)("div", {
          className: i()(u.divider, {
            [u.dividerExtended]: n,
            [u.negativeMarginTop]: t,
            [u.negativeMarginBottom]: r,
          }),
        });
      }
      function N(e) {
        let { label: n, value: t, className: r } = e;
        return (0, s.jsxs)("div", {
          className: i()(u.totalRow, r),
          children: [
            (0, s.jsx)("div", { className: u.totalLabel, children: n }),
            (0, s.jsx)("div", { className: u.totalAmount, children: t }),
          ],
        });
      }
      function M(e) {
        let { children: n, className: t } = e;
        return (0, s.jsx)("div", {
          className: i()(u.finePrint, t),
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
      var s = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        l = t(937615),
        a = t(474936),
        c = t(689938),
        o = t(446236);
      function u(e) {
        let {
            price: n,
            currency: t,
            intervalType: r,
            className: u,
            intervalCount: I = 1,
            isPrepaidPaymentSource: _ = !1,
          } = e,
          E = (0, l.T4)(n, t),
          T = null;
        return (
          r === a.rV.YEAR
            ? (T = c.Z.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                price: E,
              }))
            : r === a.rV.MONTH && 1 === I
              ? (T = c.Z.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                  price: E,
                }))
              : r === a.rV.MONTH &&
                I > 1 &&
                (T = c.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                  price: E,
                  intervalCount: I,
                })),
          (0, s.jsx)("div", {
            className: i()(o.pricePerInterval, u),
            "data-testid": "PricePerInterval-".concat(t),
            children:
              null == r || _ ? (0, s.jsx)("strong", { children: E }) : T,
          })
        );
      }
    },
    585602: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var s = t(735250);
      t(470079);
      var r = t(937615),
        i = t(653798),
        l = t(689938);
      function a(e) {
        let { invoice: n } = e;
        return n.taxInclusive || n.tax <= 0
          ? null
          : (0, s.jsx)(i.R$, {
              label: l.Z.Messages.TAX_LABEL,
              value: (0, r.T4)(n.tax, n.currency),
            });
      }
    },
    314182: function (e, n, t) {
      var s = t(735250),
        r = t(470079),
        i = t(120356),
        l = t.n(i),
        a = t(865189);
      let c = r.forwardRef(function (e, n) {
        let { isActive: t, children: r } = e;
        return (0, s.jsx)("div", {
          className: l()(a.wrapper, { [a.wrapperActive]: t }),
          ref: n,
          children: r,
        });
      });
      n.Z = c;
    },
    42818: function (e, n, t) {
      t.d(n, {
        As: function () {
          return g;
        },
        By: function () {
          return x;
        },
        Lu: function () {
          return Z;
        },
        e9: function () {
          return Y;
        },
        hG: function () {
          return D;
        },
        nd: function () {
          return y;
        },
        yT: function () {
          return H;
        },
      }),
        t(411104),
        t(724458),
        t(47120);
      var s = t(735250),
        r = t(470079),
        i = t(120356),
        l = t.n(i),
        a = t(512722),
        c = t.n(a),
        o = t(442837),
        u = t(481060),
        I = t(911969),
        _ = t(100527),
        E = t(906732),
        T = t(509545),
        d = t(259580),
        N = t(63063),
        M = t(74538),
        A = t(937615),
        L = t(374649),
        P = t(591548),
        R = t(639119),
        m = t(653798),
        S = t(585602),
        U = t(474936),
        p = t(981631),
        O = t(689938),
        v = t(319012);
      let C = (e, n) => {
          var t;
          return !!(null === (t = e.discounts) || void 0 === t
            ? void 0
            : t.some((e) => e.type === n));
        },
        h = (e, n) => {
          var t, s, r;
          return (
            e.subscriptionPlanPrice -
            (null !==
              (r =
                null === (s = e.discounts) || void 0 === s
                  ? void 0
                  : null === (t = s.find((e) => e.type === n)) || void 0 === t
                    ? void 0
                    : t.amount) && void 0 !== r
              ? r
              : 0)
          );
        };
      function f(e) {
        var n;
        let {
            invoiceItem: t,
            overrideAmount: r,
            showGuildSubscriptionAdjustmentTooltip: i,
            currency: l,
            className: a,
            isPrepaidPaymentSource: _,
            referralTrialOfferId: E,
            inTrialPeriod: d,
          } = e,
          N = (0, o.e7)([T.Z], () => T.Z.get(t.subscriptionPlanId)),
          L =
            null === (n = (0, R.N)(E)) || void 0 === n
              ? void 0
              : n.subscription_trial;
        c()(null != N, "Missing subscriptionPlan");
        let P = (function (e, n, t, s) {
          let r = C(e, I.eW.PREMIUM_TRIAL);
          switch (e.subscriptionPlanId) {
            case U.Xh.PREMIUM_MONTH_LEGACY:
            case U.Xh.PREMIUM_YEAR_LEGACY:
            case U.Xh.PREMIUM_MONTH_TIER_0:
            case U.Xh.PREMIUM_YEAR_TIER_0:
            case U.Xh.PREMIUM_MONTH_TIER_1:
            case U.Xh.PREMIUM_YEAR_TIER_1:
            case U.Xh.PREMIUM_MONTH_TIER_2:
            case U.Xh.PREMIUM_YEAR_TIER_2:
            case U.Xh.PREMIUM_3_MONTH_TIER_2:
            case U.Xh.PREMIUM_6_MONTH_TIER_2:
              return (0, M.Gf)(e.subscriptionPlanId, r, t, s);
            case U.Xh.PREMIUM_3_MONTH_GUILD:
            case U.Xh.PREMIUM_6_MONTH_GUILD:
              return O.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format(
                { num: e.quantity, intervalCount: n.intervalCount },
              );
            case U.Xh.PREMIUM_MONTH_GUILD:
              return O.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format(
                { num: e.quantity },
              );
            case U.Xh.PREMIUM_YEAR_GUILD:
              return O.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format(
                { num: e.quantity },
              );
          }
          switch (n.interval) {
            case U.rV.MONTH:
              if (1 === n.intervalCount)
                return O.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                  planName: n.name,
                });
              return O.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                planName: n.name,
                intervalCount: n.intervalCount,
              });
            case U.rV.YEAR:
              return O.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                planName: n.name,
              });
          }
          throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId));
        })(
          t,
          N,
          _,
          (0, M.if)({
            intervalType: null == L ? void 0 : L.interval,
            intervalCount: null == L ? void 0 : L.interval_count,
          }),
        );
        !0 === i &&
          (P = (0, s.jsxs)("div", {
            className: v.invoiceItemLabelWithIcon,
            children: [
              (0, s.jsxs)("div", { children: [P, " "] }),
              (0, s.jsx)(u.Tooltip, {
                text: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                "aria-label":
                  O.Z.Messages
                    .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                tooltipClassName: v.invoiceItemTooltip,
                children: (e) =>
                  (0, s.jsx)(u.CircleQuestionIcon, {
                    size: "md",
                    color: "currentColor",
                    ...e,
                    className: v.invoiceItemLabelIcon,
                  }),
              }),
            ],
          }));
        let S = (0, A.T4)(null != r ? r : t.amount, l),
          p = _ ? S : (0, A.og)(S, N.interval, N.intervalCount);
        return (0, s.jsx)(m.i$, {
          label: P,
          value: p,
          originalAmount: t.subscriptionPlanPrice * t.quantity,
          discounts: t.discounts,
          interval: N.interval,
          intervalCount: N.intervalCount,
          currency: l,
          className: a,
          inTrialPeriod: d,
        });
      }
      function g(e) {
        let { label: n, tooltipText: t, tooltipAriaLabel: r } = e;
        return (0, s.jsxs)("div", {
          className: v.invoiceItemLabelWithIcon,
          children: [
            n,
            (0, s.jsx)(u.Tooltip, {
              clickableOnMobile: !0,
              text: t,
              "aria-label": r,
              tooltipClassName: v.invoiceItemTooltip,
              children: (e) =>
                (0, s.jsx)(u.CircleQuestionIcon, {
                  size: "md",
                  color: "currentColor",
                  ...e,
                  className: v.invoiceItemLabelIcon,
                }),
            }),
          ],
        });
      }
      function x(e) {
        let { invoice: n, isPrepaidPaymentSource: t } = e,
          r = (0, P.j)(n.invoiceItems),
          i = r.find((e) => !(0, M.Z8)(e.subscriptionPlanId) && e.amount >= 0),
          l = r.find((e) => (0, M.Z8)(e.subscriptionPlanId) && e.amount >= 0),
          a = (0, o.e7)([T.Z], () =>
            null != l ? T.Z.get(l.subscriptionPlanId) : null,
          ),
          c = null != l ? l.amount : 0,
          u = (0, A.T4)(c, n.currency),
          I = null != a ? (0, A.og)(u, a.interval, a.intervalCount) : 0;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            null != i
              ? (0, s.jsx)(f, {
                  invoiceItem: i,
                  currency: n.currency,
                  isPrepaidPaymentSource: t,
                })
              : null,
            0 !== c && null != l && null != a
              ? (0, s.jsx)(m.R$, {
                  label:
                    O.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format(
                      {
                        numGuildSubscriptions: l.quantity,
                        planName: (0, M.Gf)(a.id, !1, t),
                      },
                    ),
                  value: t ? u : I,
                })
              : null,
            (0, s.jsx)(S.Z, { invoice: n }),
            (0, s.jsx)(m.KU, {}),
            (0, s.jsx)(m.Ji, {
              label: (n.taxInclusive
                ? t
                  ? O.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE
                  : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE
                : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL
              ).format(),
              value:
                n.currency === p.pKx.USD
                  ? (0, A.T4)(n.total, n.currency)
                  : "".concat((0, A.T4)(n.total, n.currency), "*"),
            }),
          ],
        });
      }
      function Z(e) {
        let {
            invoice: n,
            newPlan: t,
            isPrepaidPaymentSource: r,
            referralTrialOfferId: i,
          } = e,
          l = (0, P.j)(n.invoiceItems),
          a = l.find((e) => e.subscriptionPlanId === t.id);
        c()(null != a, "Expected newPlanInvoiceItem");
        let o = l.find((e) => !(0, M.Z8)(e.subscriptionPlanId) && e.amount < 0),
          u = l.find(
            (e) =>
              null == e.subscriptionPlanId &&
              null != e.discounts &&
              e.discounts.find(
                (e) => e.type === I.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION,
              ),
          ),
          _ = C(a, I.eW.PREMIUM_TRIAL),
          E = h(a, I.eW.SUBSCRIPTION_PLAN),
          T = a.quantity * E,
          d =
            a.amount +
            (null != o ? o.amount : 0) -
            T +
            (null != u ? u.amount : 0),
          N = l
            .filter(
              (e) =>
                e.subscriptionPlanId === U.Xh.PREMIUM_MONTH_GUILD ||
                e.subscriptionPlanId === U.Xh.PREMIUM_YEAR_GUILD,
            )
            .reduce((e, n) => e + n.amount, 0);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(f, {
              invoiceItem: a,
              currency: n.currency,
              overrideAmount: T,
              isPrepaidPaymentSource: r,
              referralTrialOfferId: i,
            }),
            0 === d || _
              ? null
              : (0, s.jsx)(m.R$, {
                  label: (0, s.jsx)(g, {
                    label:
                      O.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                        planName: (0, M.PV)(t.id) ? (0, M.aq)(t.id) : t.name,
                      }),
                    tooltipText:
                      O.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP,
                  }),
                  value: (0, A.T4)(d, n.currency),
                }),
            0 !== N
              ? (0, s.jsx)(m.R$, {
                  label: (0, s.jsx)(g, {
                    label:
                      O.Z.Messages
                        .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                    tooltipText:
                      O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                    tooltipAriaLabel:
                      O.Z.Messages
                        .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                  }),
                  value: (0, A.T4)(N, n.currency),
                })
              : null,
            (0, s.jsx)(S.Z, { invoice: n }),
            (0, s.jsx)(m.KU, {}),
            (0, s.jsx)(m.Ji, {
              label: (n.taxInclusive
                ? r
                  ? O.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE
                  : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE
                : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL
              ).format(),
              value:
                n.currency === p.pKx.USD
                  ? (0, A.T4)(n.total, n.currency)
                  : "".concat((0, A.T4)(n.total, n.currency), "*"),
            }),
          ],
        });
      }
      function B(e) {
        let n = e.slice();
        return (
          n.sort((e, n) => {
            let t = (0, M.uZ)(e.subscriptionPlanId),
              s = (0, M.uZ)(n.subscriptionPlanId);
            return t && !s ? -1 : !t && s ? 1 : 0;
          }),
          n
        );
      }
      function b(e) {
        return e.filter((e) => {
          let { subscriptionPlanId: n } = e;
          return n !== U.Xh.NONE_MONTH && n !== U.Xh.NONE_YEAR;
        });
      }
      function D(e) {
        let { proratedInvoice: n, renewalInvoice: t } = e,
          { intervalType: r, intervalCount: i } = (0, M.dn)(n),
          { intervalType: l, intervalCount: a } = (0, M.dn)(t);
        return r !== l ||
          i !== a ||
          n.subscriptionPeriodEnd.getTime() ===
            t.subscriptionPeriodStart.getTime()
          ? null
          : (0, s.jsx)("div", {
              className: v.subscriptionPeriodResetNotice,
              children:
                O.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                  renewalDate: n.subscriptionPeriodEnd,
                }),
            });
      }
      function G(e) {
        let {
            isUpdate: n,
            currentInvoice: t,
            newInvoice: r,
            inTrialPeriod: i,
          } = e,
          a = null != t ? (0, P.j)(t.invoiceItems) : null,
          c = null != t ? (0, M.dn)(t) : null,
          { intervalType: o, intervalCount: u } = (0, M.dn)(r),
          I = null != c && (c.intervalType !== o || c.intervalCount !== u);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(m.KU, { extended: !0 }),
            null != t
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(m.q9, {
                      children: O.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL,
                    }),
                    b(B((0, P.j)(t.invoiceItems))).map((e) =>
                      (0, s.jsx)(
                        f,
                        {
                          invoiceItem: e,
                          currency: t.currency,
                          inTrialPeriod: i,
                        },
                        e.id,
                      ),
                    ),
                    (0, s.jsx)(m.KU, { extended: !0 }),
                  ],
                })
              : null,
            (0, s.jsx)(m.q9, {
              children: O.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL,
            }),
            b(B((0, P.j)(r.invoiceItems))).map((e) => {
              let t =
                null != a &&
                !a.some(
                  (n) =>
                    n.subscriptionPlanId === e.subscriptionPlanId &&
                    n.quantity === e.quantity,
                );
              return (0, s.jsx)(
                f,
                {
                  invoiceItem: e,
                  currency: r.currency,
                  showGuildSubscriptionAdjustmentTooltip:
                    I &&
                    (e.subscriptionPlanId === U.Xh.PREMIUM_MONTH_GUILD ||
                      e.subscriptionPlanId === U.Xh.PREMIUM_YEAR_GUILD ||
                      e.subscriptionPlanId === U.Xh.PREMIUM_3_MONTH_GUILD ||
                      e.subscriptionPlanId === U.Xh.PREMIUM_6_MONTH_GUILD),
                  className: l()({ [v.subscriptionAddedInvoiceItem]: !n || t }),
                },
                e.id,
              );
            }),
            (0, s.jsx)(S.Z, { invoice: r }),
            (0, s.jsx)(m.KU, {}),
            (0, s.jsx)(m.R$, {
              label: O.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
              value: (0, A.og)((0, A.T4)(r.total, r.currency), o, u),
              className: v.subscriptionCostRow,
            }),
          ],
        });
      }
      function j(e) {
        var n;
        let {
            proratedInvoice: t,
            renewalInvoice: r,
            isTrial: i,
            isUpdate: l,
            overrideRenewalDate: a,
            trialFooterMessageOverride: c,
          } = e,
          o =
            null === (n = (0, R.N)()) || void 0 === n
              ? void 0
              : n.subscription_trial,
          { intervalType: u, intervalCount: I } = (0, M.dn)(r);
        if (null == t) return null;
        if (i) {
          let e = (0, M.if)({
              intervalType: null == o ? void 0 : o.interval,
              intervalCount: null == o ? void 0 : o.interval_count,
            }),
            n =
              (null == o ? void 0 : o.interval) === U.rV.DAY &&
              (null == o ? void 0 : o.interval_count) < 28
                ? 2
                : 7;
          return (0, s.jsx)(s.Fragment, {
            children:
              null != c
                ? c
                : O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format(
                    {
                      duration: e,
                      days: n,
                      contactLink: p.EYA.CONTACT,
                      helpdeskArticle: N.Z.getArticleURL(p.BhN.PREMIUM_TRIAL),
                    },
                  ),
          });
        }
        let _ = r.taxInclusive
          ? O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER
          : O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
        return (0, s.jsx)(s.Fragment, {
          children: _.format({
            rate: (0, A.og)((0, A.T4)(r.subtotal, r.currency), u, I),
            renewalDate:
              null != a
                ? a
                : l
                  ? null != t
                    ? t.subscriptionPeriodEnd
                    : r.subscriptionPeriodStart
                  : r.subscriptionPeriodEnd,
            contactLink: p.EYA.CONTACT,
            helpdeskArticle: N.Z.getArticleURL(p.BhN.BILLING),
          }),
        });
      }
      function y(e) {
        let {
            premiumSubscription: n,
            proratedInvoice: t,
            renewalInvoice: i,
            overrideRenewalDate: l,
            isUpdate: a = !1,
            isTrial: c = !1,
            priceOptions: o,
            isPrepaidPaymentSource: I = !1,
            trialFooterMessageOverride: T,
            hideSubscriptionDetails: N = !1,
          } = e,
          { analyticsLocations: M } = (0, E.ZP)(),
          A = {
            subscriptionId: null == n ? void 0 : n.id,
            renewal: !0,
            preventFetch: !a,
            analyticsLocatinons: M,
            analyticsLocation: _.Z.SUBSCRIPTION_INVOICE_FOOTER,
            ...o,
          },
          [P] = (0, L.ED)(A),
          [R, S] = r.useState(!1);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            I
              ? null
              : (0, s.jsx)(m.HE, {
                  children: (0, s.jsx)(j, {
                    proratedInvoice: t,
                    renewalInvoice: i,
                    isTrial: c,
                    isUpdate: a,
                    overrideRenewalDate: l,
                    trialFooterMessageOverride: T,
                  }),
                }),
            !N &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)(u.Clickable, {
                    onClick: () => S((e) => !e),
                    className: v.subscriptionDetailsToggle,
                    children: [
                      R
                        ? O.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS
                        : O.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS,
                      (0, s.jsx)(d.Z, {
                        direction: R ? d.Z.Directions.UP : d.Z.Directions.DOWN,
                        className: v.subscriptionDetailsToggleCaret,
                      }),
                    ],
                  }),
                  R
                    ? (0, s.jsx)(G, {
                        isUpdate: a,
                        currentInvoice: P,
                        newInvoice: i,
                        inTrialPeriod: c,
                      })
                    : null,
                ],
              }),
          ],
        });
      }
      function Y(e) {
        let n,
          {
            plan: t,
            className: r,
            isPrepaidPaymentSource: i = !1,
            isCustomGift: l = !1,
            invoicePreview: a,
          } = e,
          { tax: c, taxInclusive: o, currency: I } = a,
          _ = a.total,
          E = _ - c,
          T = (0, A.T4)(E, I),
          d = (0, A.T4)(_, I);
        return (
          (n = l
            ? (0, M.L7)(t.interval, !0, void 0, void 0, !0, (0, M.Rd)(t.id))
            : O.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                planName: (0, M.Gf)(t.id, !1, i),
              })),
          (0, s.jsxs)("div", {
            className: r,
            children: [
              (0, s.jsx)(u.FormTitle, {
                children: O.Z.Messages.PREMIUM_GIFTING_BUTTON,
              }),
              c >= 0 && !1 === o
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(u.Text, {
                        variant: "text-md/bold",
                        className: v.purchaseDetailsHeaderText,
                        children: n,
                      }),
                      (0, s.jsxs)(m.PO, {
                        className: r,
                        children: [
                          (0, s.jsx)(m.q9, {
                            children:
                              O.Z.Messages
                                .ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL,
                          }),
                          (0, s.jsx)(m.R$, { label: n, value: T }),
                          (0, s.jsx)(S.Z, { invoice: a }),
                          (0, s.jsx)(m.KU, {}),
                          (0, s.jsx)(m.R$, {
                            label: O.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                            value: d,
                            className: v.subscriptionCostRow,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, s.jsx)(u.Heading, {
                    variant: "text-md/normal",
                    children: "".concat(n, " - ").concat(d),
                  }),
            ],
          })
        );
      }
      function H(e) {
        let n,
          { invoice: t, plan: r } = e,
          i = (0, P.j)(t.invoiceItems).find(
            (e) => e.subscriptionPlanId === r.id,
          );
        return (
          c()(null != i, "newPlanInvoiceItem can not be null"),
          r.interval === U.rV.MONTH
            ? (n = t.taxInclusive
                ? O.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL
                : O.Z.Messages
                    .BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE)
            : r.interval === U.rV.YEAR
              ? (n = t.taxInclusive
                  ? O.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL
                  : O.Z.Messages
                      .BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE)
              : c()(!1, "Invalid interval type"),
          (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: n.format({
              price: (0, A.T4)(i.subscriptionPlanPrice, t.currency),
            }),
          })
        );
      }
    },
    244923: function (e, n, t) {
      var s = t(735250);
      t(470079);
      var r = t(481060),
        i = t(366939),
        l = t(853872),
        a = t(212895),
        c = t(296848);
      n.Z = function (e) {
        let {
            activeSubscription: n,
            onNext: t,
            isSubmitting: o,
            paymentSourceId: u,
            buttonLabel: I,
            analyticsLocations: _,
          } = e,
          E = async () => {
            let e = l.Z.getPaymentSource(u);
            null != e &&
              (await (0, a.i1)(u, (0, c.yb)(n)),
              await i.tq(n, e, n.currency, _),
              t());
          };
        return (0, s.jsx)(r.Button, {
          "data-testid": "purchase",
          onClick: E,
          color: r.Button.Colors.GREEN,
          submitting: o,
          children: I,
        });
      };
    },
    858987: function (e, n, t) {
      t.d(n, {
        K: function () {
          return L;
        },
        Z: function () {
          return R;
        },
      }),
        t(789020);
      var s = t(735250);
      t(470079);
      var r = t(512722),
        i = t.n(r),
        l = t(481060),
        a = t(115130),
        c = t(906732),
        o = t(598),
        u = t(630388),
        I = t(74538),
        _ = t(296848),
        E = t(244923),
        T = t(981631),
        d = t(231338),
        N = t(689938),
        M = t(423654),
        A = t(74316);
      function L(e) {
        let {
          purchaseType: n,
          plan: t,
          premiumSubscription: s,
          isGift: r,
          planGroup: l,
          isPrepaidPaymentSource: a,
          inReverseTrial: c,
        } = e;
        if (n === d.GZ.ONE_TIME)
          return r
            ? N.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT
            : N.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
        if (
          (i()(
            null != t,
            "Subscription plan must be selected to render SubscriptionReviewButton",
          ),
          r)
        )
          return N.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
        if (c) return N.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
        if ((0, I.PV)(t.id)) {
          if (a) return N.Z.Messages.BILLING_SELECT_PLAN;
          if (null != s)
            return s.isPaused
              ? N.Z.Messages.RESUME
              : (0, _.R4)(s, t.id, l)
                ? N.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE
                : N.Z.Messages.BILLING_SWITCH_PLAN_CHANGE;
          return (0, I.W_)(null, t);
        }
        return N.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN;
      }
      function P(e, n) {
        null != e.current &&
          (e.current.scrollIntoView({ behavior: "smooth" }), n());
      }
      function R(e) {
        var n;
        let {
            legalTermsNodeRef: t,
            invoiceError: r,
            planError: i,
            disablePurchase: I,
            flashLegalTerms: _,
            isSubmitting: d,
            premiumSubscription: R,
            isGift: m,
            planGroup: S,
            isPrepaid: U,
            isTrial: p,
            makePurchase: O,
            needsPaymentSource: v,
            inReverseTrial: C,
            onNext: h,
          } = e,
          {
            application: f,
            selectedPlan: g,
            hasAcceptedTerms: x,
            purchaseType: Z,
            paymentSourceId: B,
            activeSubscription: b,
            devShelfFetchState: D,
          } = (0, o.usePaymentContext)(),
          G = L({
            purchaseType: Z,
            plan: g,
            premiumSubscription: R,
            isGift: m,
            planGroup: S,
            isPrepaidPaymentSource: U,
            inReverseTrial: C,
          }),
          { analyticsLocations: j } = (0, c.ZP)();
        if (null != r || null != i || I)
          return (0, s.jsx)(l.Button, {
            color: l.Button.Colors.GREEN,
            disabled: !0,
            children: G,
          });
        if (v)
          return (0, s.jsx)(l.Tooltip, {
            text: N.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
            children: (e) =>
              (0, s.jsx)(l.Button, {
                ...e,
                color: l.Button.Colors.GREEN,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
                children: G,
              }),
          });
        if (
          (0, u.yE)(
            null !== (n = null == f ? void 0 : f.flags) && void 0 !== n ? n : 0,
            T.udG.EMBEDDED,
          ) &&
          D === a.O.LOADING
        )
          return (0, s.jsx)(l.Tooltip, {
            text: N.Z.Messages.BILLING_LOADING_DEVELOPER_ACTIVITY_SHELF,
            children: (e) =>
              (0, s.jsx)(l.Button, {
                ...e,
                color: l.Button.Colors.GREEN,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
                children: G,
              }),
          });
        else if (p)
          return (0, s.jsxs)(l.ShinyButton, {
            innerClassName: M.innerButton,
            "data-testid": x ? "purchase" : "submitButton",
            onClick: x ? O : () => P(t, _),
            color: l.Button.Colors.GREEN,
            submitting: d,
            children: [
              (0, s.jsx)("img", { alt: "", className: M.nitroIcon, src: A }),
              G,
            ],
          });
        else if (!x)
          return (0, s.jsx)(l.Tooltip, {
            text: N.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: (e) =>
              (0, s.jsx)(l.Button, {
                ...e,
                color: l.Button.Colors.GREEN,
                type: "submit",
                onClick: () => P(t, _),
                "data-testid": "submitButton",
                children: G,
              }),
          });
        else if (C && null != b && null != B)
          return (0, s.jsx)(E.Z, {
            activeSubscription: b,
            onNext: h,
            isSubmitting: d,
            paymentSourceId: B,
            buttonLabel: G,
            analyticsLocations: j,
          });
        else
          return (0, s.jsx)(l.Button, {
            "data-testid": "purchase",
            onClick: O,
            color: l.Button.Colors.GREEN,
            submitting: d,
            children: G,
          });
      }
    },
  },
]);
//# sourceMappingURL=2852a60a38818f3821be.js.map
