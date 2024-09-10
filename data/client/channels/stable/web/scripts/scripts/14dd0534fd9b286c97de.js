"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52619"],
  {
    623573: function (e, t, s) {
      s.r(t),
        s.d(t, {
          AddPaymentModalOld: function () {
            return q;
          },
          default: function () {
            return V;
          },
        }),
        s(411104),
        s(47120);
      var n,
        a,
        r = s(735250),
        i = s(470079),
        l = s(160612),
        o = s(120356),
        d = s.n(o),
        h = s(512722),
        p = s.n(h),
        u = s(442837),
        c = s(481060),
        y = s(570140),
        m = s(355467),
        S = s(873115),
        C = s(976255),
        g = s(600164),
        _ = s(598),
        A = s(409813),
        f = s(3409),
        P = s(351402),
        E = s(975060),
        N = s(505649),
        B = s(358085),
        M = s(622999),
        T = s(462566),
        x = s(801937),
        b = s(282164),
        R = s(738342),
        Z = s(228666),
        k = s(581813),
        O = s(981631),
        I = s(689938),
        j = s(924983),
        v = s(739017);
      function D(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      ((a = n || (n = {})).PAYMENT_TYPE = "payment_type"),
        (a.CARD_INFO = "card_info"),
        (a.SOFORT_INFO = "sofort_info"),
        (a.ADDRESS = "billing_address"),
        (a.PAYMENT_REQUEST_INFO = "payment_request_info"),
        (a.PAYPAL = "paypal"),
        (a.PRZELEWY24_INFO = "przelewy24_info");
      let Y = ["payment_type", "card_info", "billing_address"],
        w = ["payment_type", "sofort_info", "billing_address"],
        L = ["payment_type", "paypal", "billing_address"],
        F = ["payment_type", "payment_request_info"],
        H = ["payment_type", "billing_address"],
        Q = ["payment_type", "przelewy24_info", "billing_address"],
        G = ["payment_type", "billing_address"];
      function U(e) {
        return e.hasCardError()
          ? "card_info"
          : e.hasAddressError()
            ? "billing_address"
            : null;
      }
      class z extends i.PureComponent {
        static getDerivedStateFromProps(e, t) {
          let { error: s } = e,
            { errorStep: n } = t;
          if (null == s) return null == n ? null : { errorStep: null };
          let a = U(s);
          return null != a && a !== t.errorStep
            ? { step: a, errorStep: a }
            : null;
        }
        async componentDidMount() {
          S.eI();
          let e = await (0, M.d2)();
          this.setState({ stripe: e });
        }
        componentWillUnmount() {
          y.Z.wait(() => S.gy()), (0, C.tt)();
        }
        get stepData() {
          let { step: e } = this.state,
            t = this.STEPS_DATA[e];
          if (null == t) throw Error("Invalid step ".concat(e));
          return t;
        }
        getSteps(e) {
          switch (null != e ? e : this.state.type) {
            case O.HeQ.PAYMENT_REQUEST:
              return F;
            case O.HeQ.PAYPAL:
              return L;
            case O.HeQ.SOFORT:
              return w;
            case O.HeQ.GIROPAY:
              return H;
            case O.HeQ.PRZELEWY24:
              return Q;
            case O.HeQ.PAYSAFE_CARD:
            case O.HeQ.GCASH:
            case O.HeQ.GRABPAY_MY:
            case O.HeQ.MOMO_WALLET:
            case O.HeQ.KAKAOPAY:
            case O.HeQ.GOPAY_WALLET:
              return G;
            default:
              return Y;
          }
        }
        getNextStep() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.state.steps,
            { step: t } = this.state,
            s = e.indexOf(t);
          return e[s + 1];
        }
        getPreviousStep() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.state.steps,
            { step: t } = this.state,
            s = e.indexOf(t);
          return e[s - 1];
        }
        preventDefault(e) {
          e.preventDefault();
        }
        handleReopenPaypal() {
          S.i0();
        }
        renderGenericError() {
          let { error: e } = this.props;
          return null == e || null != U(e)
            ? null
            : (0, r.jsx)(c.FormErrorBlock, {
                className: j.errorBlock,
                children: e.message,
              });
        }
        renderFooter() {
          let e = this.stepData;
          return null == e.renderNextButton
            ? null
            : (0, r.jsx)(c.ModalFooter, {
                children: (0, r.jsxs)(g.Z, {
                  justify: g.Z.Justify.BETWEEN,
                  children: [
                    (0, r.jsx)(c.Button, {
                      onClick: this.handleBackClick,
                      color: c.Button.Colors.PRIMARY,
                      look: c.Button.Looks.LINK,
                      size: c.Button.Sizes.MIN,
                      children: I.Z.Messages.BACK,
                    }),
                    e.renderNextButton(),
                  ],
                }),
              });
        }
        render() {
          let { step: e, steps: t } = this.state,
            { transitionState: s } = this.props,
            n = t.map((e) => ({
              id: e,
              label: (function (e) {
                switch (e) {
                  case "payment_type":
                    return I.Z.Messages.PAYMENT_SOURCE_TYPE;
                  case "payment_request_info":
                    return I.Z.Messages.BILLING_STEP_PAYMENT_INFO;
                  case "card_info":
                    return I.Z.Messages.PAYMENT_SOURCE_INFORMATION;
                  case "billing_address":
                    return I.Z.Messages.BILLING_ADDRESS;
                  case "paypal":
                    return I.Z.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
                  case "sofort_info":
                    return I.Z.Messages.PAYMENT_SOURCE_SOFORT_INFO;
                  case "przelewy24_info":
                    return I.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
                }
              })(e),
            }));
          return (0, r.jsx)(l.Elements, {
            options: O.OBo,
            stripe: this.state.stripe,
            children: (0, r.jsx)(c.ModalRoot, {
              transitionState: s,
              size: c.ModalSize.SMALL,
              className: j.modal,
              "aria-label": I.Z.Messages.PAYMENT_SOURCES_ADD,
              children: (0, r.jsxs)("form", {
                className: j.form,
                onSubmit: this.preventDefault,
                children: [
                  (0, r.jsxs)(c.ModalHeader, {
                    direction: g.Z.Direction.VERTICAL,
                    align: g.Z.Align.STRETCH,
                    separator: !1,
                    children: [
                      (0, r.jsxs)(g.Z, {
                        className: j.modalTitle,
                        justify: g.Z.Justify.BETWEEN,
                        align: g.Z.Align.CENTER,
                        children: [
                          (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H4,
                            children: I.Z.Messages.PAYMENT_SOURCES_ADD,
                          }),
                          (0, r.jsx)(c.ModalCloseButton, {
                            onClick: this.handleClose,
                          }),
                        ],
                      }),
                      this.renderGenericError(),
                      (0, r.jsx)(c.Breadcrumbs, {
                        breadcrumbs: n,
                        activeId: e,
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", { className: j.divider }),
                  (0, r.jsx)(c.Sequencer, {
                    fillParent: !0,
                    className: j.sequencer,
                    step: e,
                    steps: t,
                    children: (0, r.jsx)(c.ModalContent, {
                      className: j.content,
                      children: this.stepData.renderBody(),
                    }),
                  }),
                  this.renderFooter(),
                ],
              }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            D(this, "state", {
              type: O.HeQ.CARD,
              step: "payment_type",
              steps: Y,
              errorStep: null,
              stripeToken: null,
              stripe: null,
              tokenSubmitting: !1,
              paymentDetails: { p24Bank: "" },
            }),
            D(this, "STEPS_DATA", {
              przelewy24_info: {
                renderBody: () => {
                  let { error: e, billingAddressInfo: t } = this.props;
                  return (0, r.jsx)(R.w, {
                    billingAddressInfo: t,
                    onDetailsChange: this.handlePaymentDetailsChange,
                    onP24BankChange: this.handleP24BankChange,
                    p24BankValue: this.state.paymentDetails.p24Bank,
                    error: e,
                  });
                },
                renderNextButton: () => {
                  var e;
                  let { billingAddressInfo: t } = this.props,
                    s =
                      null === (e = this.state.paymentDetails) || void 0 === e
                        ? void 0
                        : e.p24Bank;
                  return (0, r.jsx)(c.Button, {
                    type: "submit",
                    disabled: "" === t.name || "" === t.email || "" === s,
                    onClick: this.handleNextClick,
                    children: I.Z.Messages.NEXT,
                  });
                },
              },
              sofort_info: {
                renderBody: () => {
                  let { error: e, billingAddressInfo: t } = this.props;
                  return (0, r.jsx)(R.Z, {
                    billingAddressInfo: t,
                    onChange: this.handlePaymentDetailsChange,
                    error: e,
                  });
                },
                renderNextButton: () => {
                  let { billingAddressInfo: e } = this.props;
                  return (0, r.jsx)(c.Button, {
                    type: "submit",
                    disabled: "" === e.name || "" === e.email,
                    onClick: this.handleNextClick,
                    children: I.Z.Messages.NEXT,
                  });
                },
              },
              payment_type: {
                renderBody: () =>
                  (0, r.jsx)(x.Z, {
                    allowStripeRequestPayments: !B.isPlatformEmbedded,
                    onChooseType: this.handleChooseType,
                    onStripePaymentMethodReceived:
                      this.handleStripePaymentMethod,
                  }),
              },
              payment_request_info: {
                renderBody: () => {
                  let { stripePaymentMethod: e, submitting: t } = this.props;
                  return (0, r.jsx)(k.k, {
                    stripePaymentMethod: e,
                    submitting: t,
                  });
                },
                renderNextButton: () => {
                  let { submitting: e } = this.props;
                  return (0, r.jsx)(c.Button, {
                    submitting: e,
                    look: c.Button.Looks.OUTLINED,
                    disabled: !0,
                  });
                },
              },
              card_info: {
                renderBody: () => {
                  let { error: e } = this.props,
                    t = null != e && (null == e.code || "card_info" === U(e));
                  return (0, r.jsxs)(r.Fragment, {
                    children: [
                      t
                        ? (0, r.jsx)(c.FormErrorBlock, {
                            className: j.errorBlock,
                            children: I.Z.Messages.BILLING_ERROR_SECTION_CARD,
                          })
                        : null,
                      (0, r.jsx)(T.Z, {
                        onCardInfoChange: this.handleCardInfoChange,
                        error: t ? e : null,
                      }),
                    ],
                  });
                },
                renderNextButton: () => {
                  let { isCreditCardInfoValid: e } = this.props,
                    { tokenSubmitting: t } = this.state;
                  return (0, r.jsx)(l.ElementsConsumer, {
                    children: (s) => {
                      let { elements: n } = s;
                      return (0, r.jsx)(c.Button, {
                        disabled: !e,
                        onClick: () => {
                          this.createToken(n);
                        },
                        type: "submit",
                        submitting: t,
                        children: I.Z.Messages.NEXT,
                      });
                    },
                  });
                },
              },
              billing_address: {
                renderBody: () => {
                  let { billingAddressInfo: e, error: t } = this.props,
                    { type: s } = this.state;
                  return (0, r.jsx)(Z.P, {
                    billingAddressInfo: e,
                    billingError: t,
                    onBillingAddressChange: this.handleBillingAddressChange,
                    paymentSourceType: s,
                  });
                },
                renderNextButton: () => {
                  let {
                    submitting: e,
                    isBillingAddressInfoValid: t,
                    isAuthenticating: s,
                  } = this.props;
                  return (0, r.jsx)(c.Button, {
                    type: "submit",
                    submitting: e,
                    disabled: !t || s,
                    onClick: this.handleSave,
                    children: I.Z.Messages.SAVE,
                  });
                },
              },
              paypal: {
                renderBody: () => (0, r.jsx)(b.Z, {}),
                renderNextButton: () => {
                  let {
                      submitting: e,
                      braintreeNonce: t,
                      braintreeEmail: s,
                    } = this.props,
                    n = null != s && null != t;
                  return (0, r.jsx)(c.Button, {
                    submitting: e,
                    color: n ? c.Button.Colors.BRAND : c.Button.Colors.PRIMARY,
                    onClick: n ? this.handleNextClick : this.handleReopenPaypal,
                    children: n
                      ? I.Z.Messages.NEXT
                      : I.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
                  });
                },
              },
            }),
            D(this, "handleChooseType", (e) => {
              let t = this.getSteps(e),
                s = this.getNextStep(t);
              null != s && this.setState({ type: e, steps: t, step: s });
            }),
            D(this, "handleCardInfoChange", (e, t) => {
              y.Z.wait(() => (0, C.sn)(e, t));
            }),
            D(this, "handlePaymentDetailsChange", (e) => {
              let { billingAddressInfo: t } = this.props;
              (t.name = e.name), y.Z.wait(() => (0, C.Ow)({ ...t, ...e }, !1));
            }),
            D(this, "handleP24BankChange", (e) => {
              this.setState({ paymentDetails: { p24Bank: e } });
            }),
            D(this, "handleBillingAddressChange", (e, t) => {
              let { billingAddressInfo: s } = this.props;
              y.Z.wait(() => (0, C.Ow)({ ...s, ...e }, t));
            }),
            D(this, "handleBackClick", () => {
              let e = this.getPreviousStep();
              if (null != e) {
                "payment_type" === e && (0, C.fw)();
                this.setState({ step: e });
              }
            }),
            D(this, "handleNextClick", () => {
              let e = this.getNextStep();
              null != e && this.setState({ step: e });
            }),
            D(this, "handleClose", () => {
              (0, C.fw)(), this.props.onClose();
            }),
            D(this, "handleStripePaymentMethod", (e) => {
              if (((0, C.Xt)(e), null == e)) {
                this.handleBackClick();
                return;
              }
              this.handleStripePaymentRequestSave(e);
            }),
            D(this, "handleStripePaymentRequestSave", async (e) => {
              try {
                let t = await m.i6(e, void 0, this.props.analyticsLocation),
                  { onAddPaymentSource: s } = this.props;
                null == s || s(t), this.handleClose();
              } catch (e) {}
            }),
            D(this, "createToken", async (e) => {
              let { stripe: t } = this.state;
              this.setState({ tokenSubmitting: !0 });
              try {
                let s = await m.qv(t, e);
                this.setState({ stripeToken: s }), this.handleNextClick();
              } catch (e) {
              } finally {
                this.setState({ tokenSubmitting: !1 });
              }
            }),
            D(this, "handleSave", () => {
              let { type: e } = this.state;
              switch (e) {
                case O.HeQ.PAYPAL:
                  return this.handlePaypalSave();
                case O.HeQ.CARD:
                  return this.handleCardSave();
                case O.HeQ.SOFORT:
                  return this.handleSofortSave();
                case O.HeQ.GIROPAY:
                  return this.handleGiropaySave();
                case O.HeQ.PRZELEWY24:
                  return this.handlePrzelewy24Save();
                case O.HeQ.PAYSAFE_CARD:
                case O.HeQ.GRABPAY_MY:
                  return this.handleAdyenPrepaidPaymentMethodSave(e);
                default:
                  m.SQ("user used a unsupported payment type: ".concat(e));
              }
            }),
            D(this, "handlePrzelewy24Save", async () => {
              let {
                  billingAddressInfo: e,
                  isBillingAddressInfoValid: t,
                  onAddPaymentSource: s,
                  analyticsLocation: n,
                } = this.props,
                { stripe: a, paymentDetails: r } = this.state;
              if (!!t)
                try {
                  let t = await m.pF(a, r, e, n);
                  null == s || s(t), this.handleClose();
                } catch (e) {}
            }),
            D(this, "handleSofortSave", async () => {
              let {
                  billingAddressInfo: e,
                  isBillingAddressInfoValid: t,
                  onAddPaymentSource: s,
                  analyticsLocation: n,
                } = this.props,
                { stripe: a } = this.state;
              if (!!t)
                try {
                  let t = await m.av(a, e, n);
                  null == s || s(t), this.handleClose();
                } catch (e) {}
            }),
            D(this, "handleCardSave", async () => {
              let {
                  billingAddressInfo: e,
                  isCreditCardInfoValid: t,
                  isBillingAddressInfoValid: s,
                  onAddPaymentSource: n,
                  analyticsLocation: a,
                } = this.props,
                { stripe: r, stripeToken: i } = this.state;
              if (!!t && !!s)
                try {
                  let t = await m.f0(r, i, e, a);
                  null == n || n(t), this.handleClose();
                } catch (e) {}
            }),
            D(this, "handlePaypalSave", async () => {
              let {
                braintreeEmail: e,
                braintreeNonce: t,
                billingAddressInfo: s,
                onAddPaymentSource: n,
                analyticsLocation: a,
              } = this.props;
              if (null != e && null != t)
                try {
                  let e = await m.lP(t, s, a);
                  null == n || n(e), this.handleClose();
                } catch (e) {}
            }),
            D(this, "handleAdyenPrepaidPaymentMethodSave", async (e) => {
              let {
                billingAddressInfo: t,
                isBillingAddressInfoValid: s,
                onAddPaymentSource: n,
                analyticsLocation: a,
              } = this.props;
              if (!!s)
                try {
                  let s = await m.sF(t, e, a);
                  null == n || n(s), this.handleClose();
                } catch (e) {}
            }),
            D(this, "handleGiropaySave", async () => {
              let {
                  billingAddressInfo: e,
                  isBillingAddressInfoValid: t,
                  onAddPaymentSource: s,
                  analyticsLocation: n,
                } = this.props,
                { stripe: a } = this.state;
              if (!!t)
                try {
                  let t = await m.GV(a, e, O.HeQ.GIROPAY, n);
                  null == s || s(t), this.handleClose();
                } catch (e) {}
            });
        }
      }
      let q = u.ZP.connectStores([E.Z, P.Z, N.Z], () => ({
        braintreeEmail: E.Z.braintreeEmail,
        braintreeNonce: E.Z.braintreeNonce,
        stripePaymentMethod: E.Z.stripePaymentMethod,
        creditCardInfo: E.Z.getCreditCardInfo(),
        isCreditCardInfoValid: E.Z.isCardInfoValid,
        billingAddressInfo: E.Z.getBillingAddressInfo(),
        isBillingAddressInfoValid: E.Z.isBillingAddressInfoValid,
        error: E.Z.error,
        popupCallbackCalled: E.Z.popupCallbackCalled,
        submitting: P.Z.isBusy,
        isAuthenticating: N.Z.isAwaitingAuthentication,
      }))(z);
      function W(e) {
        let {
            transitionState: t,
            analyticsLocation: s,
            onClose: n,
            onAddPaymentSource: a,
            toastContent: i,
            initialStep: l = A.h8.PAYMENT_TYPE,
            overwriteSubscriptionPaymentSource: o = !1,
          } = e,
          h = (0, f.fL)(),
          u = (0, f.vP)({
            paymentModalArgs: h,
            initialStep: l,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
              n();
            },
            onComplete: (e, t) => {
              p()(null != t, "paymentSource missing"), null == a || a(t), n();
            },
            onStepChange: () => {},
            header: (0, r.jsxs)("div", {
              className: d()(
                j.modalTitle,
                v.flex,
                v.justifyBetween,
                v.alignCenter,
              ),
              children: [
                (0, r.jsx)(c.FormTitle, {
                  tag: c.FormTitleTags.H4,
                  children: I.Z.Messages.PAYMENT_SOURCES_ADD,
                }),
                (0, r.jsx)(c.ModalCloseButton, { onClick: n }),
              ],
            }),
            analyticsLocation: s,
            hideBreadcrumbs: !0,
            toastContent: i,
            overwriteSubscriptionPaymentSource: o,
          });
        return (0, r.jsx)(c.ModalRoot, {
          transitionState: t,
          size: c.ModalSize.SMALL,
          className: j.modal,
          "aria-label": I.Z.Messages.PAYMENT_SOURCES_ADD,
          children: (0, r.jsx)("form", {
            className: j.form,
            onSubmit: function (e) {
              e.preventDefault();
            },
            children: u,
          }),
        });
      }
      function V(e) {
        return (0, r.jsx)(_.PaymentContextProvider, {
          activeSubscription: null,
          stepConfigs: [],
          skuIDs: [],
          children: (0, r.jsx)(W, { ...e }),
        });
      }
    },
  },
]);
//# sourceMappingURL=14dd0534fd9b286c97de.js.map
