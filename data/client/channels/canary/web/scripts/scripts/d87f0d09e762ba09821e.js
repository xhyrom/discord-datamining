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
      e.exports = "/assets/6c155dfd710f95a7eade.svg";
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
      var i = t(200651);
      t(192379);
      var r = t(442837),
        a = t(858987),
        l = t(78839),
        s = t(122289),
        o = t(63063),
        c = t(74538),
        u = t(937615),
        d = t(296848),
        p = t(981631),
        f = t(474936),
        m = t(388032),
        b = t(417887);
      n.Z = function (e) {
        let n, t, v, h;
        let {
            subscriptionPlan: P,
            isGift: A,
            isTrial: T,
            isEmbeddedIAP: g,
            renewalInvoice: y,
            paymentSourceType: E,
            hide: I,
            purchaseType: x,
            productLine: _,
            basePrice: N,
            currentSubscription: C,
          } = e,
          R = (0, r.e7)([l.ZP], () => l.ZP.inReverseTrial());
        if (I) return null;
        let S = null == e.planGroup ? [] : e.planGroup;
        if (null != y) {
          let e = c.ZP.getIntervalForInvoice(y);
          (n = e.intervalType),
            (t = e.intervalCount),
            (v = (0, u.og)((0, u.T4)(y.total, y.currency), n, t)),
            (h = (0, u.og)((0, u.T4)(y.subtotal, y.currency), n, t));
        } else null != P && ((n = P.interval), (t = P.intervalCount));
        let M = (0, a.K)({
            purchaseType: x || p.GZQ.SUBSCRIPTION,
            plan: P,
            premiumSubscription: null == C ? null : C,
            isGift: !!A,
            planGroup: S,
            isPrepaidPaymentSource: !1,
          }),
          L = m.intl.format(m.t.Y2Rkqa, {
            primaryText: M,
            paidURL: p.EYA.PAID_TERMS,
          }),
          j = m.intl.format(m.t.H2uH5e, {
            primaryText: M,
            paidURL: p.EYA.PAID_TERMS,
          }),
          k = "",
          U = "";
        if (g) {
          if (
            null != v &&
            (null == y ? void 0 : y.subscriptionPeriodEnd) != null
          )
            k = m.intl.format(m.t["2VPTa2"], { subtotalRate: h });
          else
            switch (n) {
              case f.rV.MONTH:
                k =
                  1 === t
                    ? m.intl.format(m.t["+ywPmZ"], {})
                    : m.intl.format(m.t.oBwZfn, { intervalCount: t });
                break;
              case f.rV.YEAR:
                k = m.intl.format(m.t.y9gsX1, {});
                break;
              case void 0:
                (U = L), (k = m.intl.format(m.t.UxGFHx, {}));
                break;
              default:
                throw Error("Unexpected interval: ".concat(n));
            }
        } else if (x === p.GZQ.ONE_TIME)
          switch (_) {
            case p.POd.COLLECTIBLES:
              (U = L),
                (k = A
                  ? m.intl.format(m.t.ofqyUl, { paidURL: p.EYA.PAID_TERMS })
                  : m.intl.format(m.t.G3l0s7, { paidURL: p.EYA.PAID_TERMS }));
              break;
            case p.POd.GUILD_PRODUCT:
              (U = L),
                (k = m.intl.format(m.t["GEAQ+v"], {
                  paidURL: p.EYA.PAID_TERMS,
                }));
              break;
            default:
              (U = j), (k = m.intl.string(m.t["9/siSU"]));
          }
        else if (null == P || A)
          switch ((A && (U = L), n)) {
            case f.rV.MONTH:
              (k = A
                ? m.intl.string(m.t.IjNapq)
                : m.intl.string(m.t["/sGXPj"])),
                (k = A
                  ? m.intl.string(m.t.IjNapq)
                  : 1 === t
                    ? m.intl.string(m.t["/sGXPj"])
                    : m.intl.formatToPlainString(m.t.Fqjiho, {
                        intervalCount: t,
                      }));
              break;
            case f.rV.YEAR:
              k = A ? m.intl.string(m.t.vAfbGx) : m.intl.string(m.t.IGzFc3);
              break;
            case void 0:
              k = "";
              break;
            default:
              throw Error("Unexpected interval: ".concat(n));
          }
        else {
          let e;
          let i = (0, a.K)({
            purchaseType: p.GZQ.SUBSCRIPTION,
            plan: P,
            premiumSubscription: null == C ? null : C,
            isGift: !1,
            planGroup: S,
            isPrepaidPaymentSource: !1,
          });
          if (
            (null != N &&
              null != n &&
              null != t &&
              (e = (0, u.og)((0, u.T4)(N.amount, N.currency), n, t)),
            null == e)
          ) {
            let e = Error("Missing base rate for legal fine print");
            (0, s.q2)(e, { tags: { planId: P.id } });
          }
          k = (null == C ? void 0 : C.isPaused)
            ? m.intl.format(m.t.B6oNwM, {
                primaryText: i,
                rate: e,
                paidURL: p.EYA.PAID_TERMS,
                contactLink: p.EYA.CONTACT,
                helpdeskArticle: o.Z.getArticleURL(p.BhN.BILLING),
              })
            : null != C && (0, d.GY)(C, P.id, S)
              ? m.intl.format(m.t.LyBQUV, {
                  primaryText: i,
                  rate: e,
                  paidURL: p.EYA.PAID_TERMS,
                  contactLink: p.EYA.CONTACT,
                  helpdeskArticle: o.Z.getArticleURL(p.BhN.BILLING),
                })
              : R && _ === p.POd.BOOST && null != N
                ? m.intl.format(m.t["2nKy//"], {
                    price: (0, u.T4)(N.amount, N.currency),
                    paidServiceTermsArticle: p.EYA.PAID_TERMS,
                    contactUsArticle: p.EYA.CONTACT,
                    subscriptionFAQArticle: o.Z.getArticleURL(p.BhN.BILLING),
                  })
                : T
                  ? m.intl.format(m.t["Hvo/Z2"], {
                      buttonText: i,
                      interval: c.ZP.formatInterval(
                        null == P ? void 0 : P.interval,
                      ),
                      cancelSubscriptionArticle: o.Z.getArticleURL(
                        p.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                      ),
                      paidServiceTermsArticle: o.Z.getArticleURL(
                        p.BhN.PAID_TERMS,
                      ),
                    })
                  : m.intl.format(m.t.anJ7OT, {
                      primaryText: i,
                      rate: e,
                      paidURL: p.EYA.PAID_TERMS,
                      contactLink: p.EYA.CONTACT,
                      helpdeskArticle: o.Z.getArticleURL(p.BhN.BILLING),
                    });
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            "" !== U &&
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)("div", { children: U }),
                  (0, i.jsx)("div", { className: b.divider }),
                ],
              }),
            "" !== k && (0, i.jsx)("div", { children: k }),
            E === p.HeQ.PAYSAFE_CARD &&
              (0, i.jsx)("div", {
                className: b.paymentSourceNoticeCopy,
                children: m.intl.string(m.t.kj9VLC),
              }),
            E === p.HeQ.SOFORT &&
              (0, i.jsxs)("div", {
                className: b.paymentSourceNoticeCopy,
                children: [m.intl.string(m.t["UYy1/v"]), " "],
              }),
          ],
        });
      };
    },
    490504: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var r = t(481060),
        a = t(304075);
      n.Z = function (e) {
        let { message: n } = e;
        return (0, i.jsxs)("div", {
          className: a.container,
          children: [
            (0, i.jsx)(r.CircleInformationIcon, {
              size: "custom",
              className: a.icon,
              width: 20,
              height: 20,
              color: r.tokens.colors.TEXT_WARNING,
            }),
            (0, i.jsx)(r.Text, {
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
          return A;
        },
      }),
        t(411104),
        t(47120);
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        s = t(692547),
        o = t(481060),
        c = t(987032),
        u = t(219929),
        d = t(46141),
        p = t(63063),
        f = t(981631),
        m = t(231338),
        b = t(388032),
        v = t(622847);
      let h = "***@***.***",
        P = new d.dm({
          id: "new_payment_source_id",
          brand: u.ZP.Types.UNKNOWN,
          type: f.HeQ.CARD,
        });
      function A(e) {
        var n, t;
        let a,
          {
            selectedPaymentSourceId: A,
            paymentSources: T,
            prependOption: g,
            hidePersonalInformation: y,
            onChange: E,
            onPaymentSourceAdd: I,
            isTrial: x = !1,
            disabled: _ = !1,
            className: N,
            optionClassName: C,
            dropdownLoading: R,
          } = e,
          S = 0 === T.length,
          M = [...(null != g ? [g] : []), ...T, P].map((e, n) => {
            if (e instanceof d.ZP) {
              let { brand: n, label: t } = (function (e, n) {
                if (e instanceof d.dm)
                  return e.id === P.id
                    ? { brand: null, label: b.intl.string(b.t.eQ2bLi) }
                    : {
                        brand: n ? u.ZP.Types.UNKNOWN : e.brand,
                        label: b.intl.formatToPlainString(b.t.QvBAQk, {
                          last4: n ? "****" : e.last4,
                        }),
                      };
                if (e instanceof d.qo)
                  return { brand: u.ZP.Types.PAYPAL, label: n ? h : e.email };
                if (e instanceof d.Sf)
                  return { brand: u.ZP.Types.SOFORT, label: n ? h : e.email };
                else if (e instanceof d.fv)
                  return {
                    brand: u.ZP.Types.GIROPAY,
                    label: b.intl.string(b.t["y+0MQU"]),
                  };
                else if (e instanceof d.Vg)
                  return {
                    brand: u.ZP.Types.PRZELEWY24,
                    label: n ? h : e.email,
                  };
                else if (e instanceof d.sn)
                  return {
                    brand: u.ZP.Types.PAYSAFECARD,
                    label: b.intl.string(b.t.e3APTU),
                  };
                else if (e instanceof d.o_)
                  return {
                    brand: u.ZP.Types.GCASH,
                    label: b.intl.string(b.t.PjehcH),
                  };
                else if (e instanceof d.kX)
                  return {
                    brand: u.ZP.Types.GRABPAY,
                    label: b.intl.string(b.t.T5davL),
                  };
                else if (e instanceof d.z)
                  return {
                    brand: u.ZP.Types.MOMO_WALLET,
                    label: b.intl.string(b.t.J0A1Vl),
                  };
                else if (e instanceof d.Xc)
                  return {
                    brand: u.ZP.Types.VENMO,
                    label: n ? "***" : "@" + e.username,
                  };
                else if (e instanceof d.Om)
                  return {
                    brand: u.ZP.Types.KAKAOPAY,
                    label: b.intl.string(b.t.CSVexs),
                  };
                else if (e instanceof d.JC)
                  return {
                    brand: u.ZP.Types.GOPAY_WALLET,
                    label: b.intl.string(b.t["43J8JC"]),
                  };
                else if (e instanceof d.U4)
                  return {
                    brand: u.ZP.Types.BANCONTACT,
                    label: b.intl.string(b.t["1ITkfn"]),
                  };
                else if (e instanceof d.D0)
                  return {
                    brand: u.ZP.Types.EPS,
                    label: b.intl.format(b.t.hSPoZ2, {
                      bank: (0, c.Ul)(e.bank),
                    }),
                  };
                else if (e instanceof d.jc)
                  return {
                    brand: u.ZP.Types.IDEAL,
                    label: b.intl.format(b.t["9kUlRU"], {
                      bank: (0, c.YE)(e.bank),
                    }),
                  };
                else if (e instanceof d.u_)
                  return {
                    brand: u.ZP.Types.CASH_APP,
                    label: n ? "***" : e.username,
                  };
                throw Error("Invalid Payment Source");
              })(e, y);
              return {
                value: e.id,
                label: (0, i.jsxs)("div", {
                  className: v.paymentSourceSelectedOption,
                  children: [
                    null != n
                      ? (0, i.jsx)(u.ZP, { type: u.ZP.getType(n) })
                      : null,
                    (0, i.jsx)("div", {
                      className: l()(v.paymentSourceLabel, {
                        [v.error]: e.invalid,
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
              label: (0, i.jsx)("div", {
                className: v.paymentSourceLabel,
                children: e.label,
              }),
            };
          }),
          L = r.useMemo(() => T.find((e) => e.id === A), [T, A]);
        let j =
          ((n = x),
          (t = L),
          (a = null),
          n && null != t && !t.canRedeemTrial()
            ? (a = b.intl.string(b.t.SvheW1))
            : n &&
              null != t &&
              t.hasFlag(m.Cw.NEW) &&
              (a = b.intl.format(b.t.d7ZLKC, {
                helpDeskArticle: p.Z.getArticleURL(
                  f.BhN.PAYMENT_AUTHORIZATION_CHARGE,
                ),
              })),
          a);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            S
              ? (0, i.jsx)(o.Button, {
                  color: o.ButtonColors.BRAND,
                  fullWidth: !0,
                  onClick: I,
                  children: b.intl.string(b.t.eQ2bLi),
                })
              : (0, i.jsx)(o.SingleSelect, {
                  options: M,
                  value: A,
                  onChange: (e) => {
                    if (e === P.id) null != I && I();
                    else {
                      let n = T.find((n) => n.id === e);
                      null != E && E(n);
                    }
                  },
                  isDisabled: _,
                  className: l()({ [v.paymentSourceHasWarning]: null != j }, N),
                  optionClassName: C,
                  placeholder: b.intl.string(b.t["8lqkf3"]),
                  renderOptionValue: (e) => {
                    let [n] = e;
                    return R
                      ? (0, i.jsx)(o.Spinner, {
                          type: o.SpinnerTypes.SPINNING_CIRCLE,
                        })
                      : n.label;
                  },
                }),
            null != j
              ? (0, i.jsxs)("div", {
                  className: v.paymentSourceWarning,
                  children: [
                    (0, i.jsx)(o.CircleWarningIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: v.paymentSourceWarningIcon,
                      color: s.Z.unsafe_rawColors.YELLOW_300.css,
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-xs/normal",
                      children: j,
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    672971: function (e, n, t) {
      t(47120);
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        s = t(512722),
        o = t.n(s),
        c = t(442837),
        u = t(481060),
        d = t(850840),
        p = t(63063),
        f = t(74538),
        m = t(981631),
        b = t(388032),
        v = t(248400);
      function h(e, n, t) {
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
      class P extends r.Component {
        componentDidMount() {
          this.props.onChange(
            this.hasAcceptedNeccessaryTerms(this.props, this.state),
          );
        }
        componentDidUpdate(e, n) {
          let t = this.hasAcceptedNeccessaryTerms(e, n),
            i = this.hasAcceptedNeccessaryTerms(this.props, this.state);
          i !== t && this.props.onChange(i);
        }
        hasAcceptedNeccessaryTerms(e, n) {
          return (
            (null == e.eulaId || n.hasAcceptedEULA) &&
            (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver)
          );
        }
        render() {
          let {
              eulaId: e,
              applicationName: n,
              hasPreviouslyAcceptedEULA: r,
              forceShow: a,
              disabled: s,
              className: c,
              checkboxClassname: d,
              checkboxLabelClassname: h,
              finePrint: P,
              showPricingLink: A,
              showWithdrawalWaiver: T,
              isTrial: g,
              inReverseTrial: y,
              isDiscount: E,
              subscriptionPlan: I,
              finePrintClassname: x,
            } = this.props,
            { hasAcceptedEULA: _, hasAcceptedWithdrawalWaiver: N } = this.state;
          return (o()(
            !g || null != I,
            "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true",
          ),
          a || (null != e && !r) || T)
            ? (0, i.jsxs)("div", {
                className: c,
                children: [
                  T &&
                    (0, i.jsx)(u.FormTitle, {
                      className: v.formTitle,
                      children: b.intl.string(b.t.Ogvn5u),
                    }),
                  null != e && (a || !r)
                    ? (0, i.jsx)(u.Checkbox, {
                        type: u.Checkbox.Types.INVERTED,
                        value: _,
                        onChange: this.handleToggleEULAAcceptance,
                        disabled: s,
                        className: v.checkbox,
                        children: (0, i.jsx)("div", {
                          className: v.checkboxLabel,
                          children: b.intl.format(b.t.IodJKS, {
                            applicationName: n,
                            onClick: (n) => {
                              (0, u.openModalLazy)(async () => {
                                let { default: n } = await t
                                  .e("51868")
                                  .then(t.bind(t, 796504));
                                return (t) =>
                                  (0, i.jsx)(n, { eulaId: e, ...t });
                              }),
                                n.preventDefault();
                            },
                          }),
                        }),
                      })
                    : null,
                  null == P
                    ? null
                    : (0, i.jsx)("div", {
                        className: l()(v.finePrint, x),
                        children: P,
                      }),
                  T
                    ? (0, i.jsxs)("div", {
                        className: c,
                        children: [
                          (0, i.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: N,
                            onChange:
                              this.handleToggleEUWithdralWaiverAcceptance,
                            disabled: s,
                            className: l()(v.checkbox, d),
                            children: (0, i.jsx)("div", {
                              className: l()(v.checkboxLabel, h),
                              children: b.intl.string(b.t.DFCVNz),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: v.finePrint,
                            children: b.intl.string(b.t.jhu6zs),
                          }),
                        ],
                      })
                    : null,
                  A &&
                    (0, i.jsxs)("div", {
                      className: v.finePrint,
                      children: [
                        "*",
                        b.intl.format(b.t["5zmY3N"], {
                          documentationLink: p.Z.getArticleURL(
                            m.BhN.LOCALIZED_PRICING,
                          ),
                        }),
                      ],
                    }),
                  g &&
                    null != I &&
                    (0, i.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: b.intl.format(b.t["Hvo/Z2"], {
                        buttonText: (0, f.W_)(null, I),
                        interval: f.ZP.formatInterval(
                          null == I ? void 0 : I.interval,
                        ),
                        cancelSubscriptionArticle: p.Z.getArticleURL(
                          m.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                        ),
                        paidServiceTermsArticle: p.Z.getArticleURL(
                          m.BhN.PAID_TERMS,
                        ),
                      }),
                    }),
                  y &&
                    null != I &&
                    (0, i.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: b.intl.format(b.t.Oo2FeX, {
                        buttonText: (0, f.W_)(null, I),
                        interval: f.ZP.formatInterval(
                          null == I ? void 0 : I.interval,
                        ),
                        cancelSubscriptionArticle: p.Z.getArticleURL(
                          m.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                        ),
                        paidServiceTermsArticle: p.Z.getArticleURL(
                          m.BhN.PAID_TERMS,
                        ),
                      }),
                    }),
                  E &&
                    null != I &&
                    (0, i.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children: b.intl.format(b.t["Z2c+aW"], {
                        buttonText: (0, f.W_)(null, I),
                        interval: f.ZP.formatInterval(
                          null == I ? void 0 : I.interval,
                        ),
                        cancelSubscriptionArticle: p.Z.getArticleURL(
                          m.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                        ),
                        paidServiceTermsArticle: p.Z.getArticleURL(
                          m.BhN.PAID_TERMS,
                        ),
                      }),
                    }),
                ],
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            h(this, "state", {
              hasAcceptedEULA:
                !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
              hasAcceptedWithdrawalWaiver: !1,
            }),
            h(this, "handleToggleEUWithdralWaiverAcceptance", (e, n) => {
              this.setState({ hasAcceptedWithdrawalWaiver: n });
            }),
            h(this, "handleToggleEULAAcceptance", (e, n) => {
              this.setState({ hasAcceptedEULA: n });
            });
        }
      }
      n.Z = c.ZP.connectStores([d.Z], (e) => {
        let { eulaId: n } = e;
        return {
          hasPreviouslyAcceptedEULA: null != n && d.Z.hasAcceptedEULA(n),
        };
      })(P);
    },
    987032: function (e, n, t) {
      t.d(n, {
        Ul: function () {
          return c;
        },
        YE: function () {
          return s;
        },
      }),
        t(47120);
      var i = t(818083),
        r = t(981631),
        a = t(388032);
      n.ZP = (0, i.B)({
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
              enabledPaymentTypes: [],
              forceCountryCode: "DE",
              validCountryCodes: ["DE"],
            },
          },
          {
            id: 2,
            label: "Regional Payment Method for US",
            config: {
              enabledPaymentTypes: [r.HeQ.VENMO, r.HeQ.CASH_APP],
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
              enabledPaymentTypes: [r.HeQ.PRZELEWY24],
              forceCountryCode: "PL",
              validCountryCodes: ["PL"],
            },
          },
          {
            id: 6,
            label: "Enable paysafecard",
            config: {
              enabledPaymentTypes: [r.HeQ.PAYSAFE_CARD],
              forceCountryCode: "DE",
              validCountryCodes: ["BG", "CZ", "DK", "HU", "RO", "SE", "DE"],
            },
          },
          {
            id: 7,
            label: "Regional Payment Method for Philippines",
            config: {
              enabledPaymentTypes: [r.HeQ.GCASH],
              forceCountryCode: "PH",
              validCountryCodes: ["PH"],
            },
          },
          {
            id: 8,
            label: "Regional Payment Method for Malaysia",
            config: {
              enabledPaymentTypes: [r.HeQ.GRABPAY_MY],
              forceCountryCode: "MY",
              validCountryCodes: ["MY"],
            },
          },
          {
            id: 9,
            label: "Regional Payment Method for Vietnam",
            config: {
              enabledPaymentTypes: [r.HeQ.MOMO_WALLET],
              forceCountryCode: "VN",
              validCountryCodes: ["VN"],
            },
          },
          {
            id: 10,
            label: "Regional Payment Method for Indonesia",
            config: {
              enabledPaymentTypes: [r.HeQ.GOPAY_WALLET],
              forceCountryCode: "ID",
              validCountryCodes: ["ID"],
            },
          },
          {
            id: 11,
            label: "Regional Payment Method for South Korea",
            config: {
              enabledPaymentTypes: [r.HeQ.KAKAOPAY],
              forceCountryCode: "KR",
              validCountryCodes: ["KR"],
            },
          },
          {
            id: 12,
            label: "Regional Payment Method for Belgium",
            config: {
              enabledPaymentTypes: [r.HeQ.PAYSAFE_CARD, r.HeQ.BANCONTACT],
              forceCountryCode: "BE",
              validCountryCodes: ["BE"],
            },
          },
          {
            id: 13,
            label: "Regional Payment Method for Austria",
            config: {
              enabledPaymentTypes: [r.HeQ.PAYSAFE_CARD, r.HeQ.EPS],
              forceCountryCode: "AT",
              validCountryCodes: ["AT"],
            },
          },
          {
            id: 14,
            label: "Regional Payment Method for Netherlands",
            config: {
              enabledPaymentTypes: [r.HeQ.PAYSAFE_CARD, r.HeQ.IDEAL],
              forceCountryCode: "NL",
              validCountryCodes: ["NL"],
            },
          },
          {
            id: 15,
            label: "Launch Paysafecard",
            config: {
              enabledPaymentTypes: [r.HeQ.PAYSAFE_CARD],
              forceCountryCode: "ES",
              validCountryCodes: ["ES", "IT"],
            },
          },
          {
            id: 16,
            label: "Launch Cash App",
            config: {
              enabledPaymentTypes: [r.HeQ.CASH_APP],
              forceCountryCode: "US",
              validCountryCodes: ["US"],
            },
          },
        ],
      });
      let l = new Map([
        ["abn_amro", "ABN AMRO"],
        ["asn_bank", "ASN Bank"],
        ["bunq", "Bunq"],
        ["ing ", "ING"],
        ["knab", "Knab"],
        ["n26", "N26"],
        ["nn", "Nationale-Nederlanden"],
        ["rabobank", "Rabobank"],
        ["revolut", "Revolut"],
        ["regiobank", "RegioBank"],
        ["sns_bank", "SNS Bank (De Volksbank)"],
        ["triodos_bank", "Triodos Bank"],
        ["van_lanschot", "Van Lanschot"],
        ["yoursafe", "Yoursafe"],
        ["handelsbanken", "Handelsbanken"],
      ]);
      function s(e) {
        return void 0 !== e && l.has(e) ? l.get(e) : a.intl.string(a.t.jdPblp);
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
        return void 0 !== e && o.has(e) ? o.get(e) : a.intl.string(a.t.jdPblp);
      }
    },
    219929: function (e, n, t) {
      t.d(n, {
        Qy: function () {
          return i;
        },
        Uy: function () {
          return p;
        },
      }),
        t(757143);
      var i,
        r,
        a,
        l = t(200651),
        s = t(192379),
        o = t(120356),
        c = t.n(o),
        u = t(199509);
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
      ((a = i || (i = {})).UNKNOWN = "unknown"),
        (a.VISA = "visa"),
        (a.DISCOVER = "discover"),
        (a.MASTERCARD = "mastercard"),
        (a.AMEX = "amex"),
        (a.PAYPAL = "paypal"),
        (a.PAYMENT_REQUEST = "paymentRequest"),
        (a.G_PAY = "gPay"),
        (a.DINERS = "diners"),
        (a.JCB = "jcb"),
        (a.UNIONPAY = "unionpay"),
        (a.SOFORT = "sofort"),
        (a.PRZELEWY24 = "przelewy24"),
        (a.GIROPAY = "giropay"),
        (a.PAYSAFECARD = "paysafecard"),
        (a.GCASH = "gcash"),
        (a.GRABPAY = "grabpay"),
        (a.MOMO_WALLET = "momo_wallet"),
        (a.VENMO = "venmo"),
        (a.KAKAOPAY = "kakaopay"),
        (a.GOPAY_WALLET = "gopay_wallet"),
        (a.BANCONTACT = "bancontact"),
        (a.EPS = "eps"),
        (a.IDEAL = "ideal"),
        (a.CASH_APP = "cash_app"),
        (a.APPLE = "apple"),
        (a.APPLE_LIGHT = "apple_light");
      let p = {
        SMALL: u.cardIconSmall,
        MEDIUM: u.cardIconMedium,
        LARGE: u.cardIconLarge,
        XLARGE: u.cardIconXLarge,
      };
      class f extends (r = s.PureComponent) {
        static getType(e) {
          return null == e
            ? "unknown"
            : i[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown";
        }
        render() {
          let { flipped: e, type: n, className: t, size: i } = this.props;
          return (0, l.jsx)("div", {
            className: c()(i, u[n], t, { [u.flipped]: e }),
            children: n,
          });
        }
      }
      d(f, "Types", i),
        d(f, "Sizes", p),
        d(f, "defaultProps", { size: p.SMALL, flipped: !1 }),
        (n.ZP = f);
    },
    53900: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(442837),
        r = t(853872),
        a = t(78839);
      function l() {
        let e = (0, i.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription());
        return (0, i.e7)([r.Z], () => {
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
          return h;
        },
        Ji: function () {
          return v;
        },
        KU: function () {
          return b;
        },
        PO: function () {
          return d;
        },
        R$: function () {
          return f;
        },
        i$: function () {
          return m;
        },
        q9: function () {
          return p;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        a = t.n(r),
        l = t(481060),
        s = t(911969),
        o = t(937615),
        c = t(388032),
        u = t(504822);
      function d(e) {
        let { children: n, className: t } = e;
        return (0, i.jsx)("div", { className: a()(u.table, t), children: n });
      }
      function p(e) {
        let { children: n } = e;
        return (0, i.jsx)("div", { className: u.header, children: n });
      }
      function f(e) {
        let { label: n, value: t, className: r } = e;
        return (0, i.jsxs)("div", {
          className: a()(u.row, r),
          children: [
            (0, i.jsx)("div", { className: u.rowLabel, children: n }),
            (0, i.jsx)("div", { className: u.rowAmount, children: t }),
          ],
        });
      }
      function m(e) {
        let {
            label: n,
            value: t,
            discounts: r,
            originalAmount: a,
            interval: d,
            currency: p,
            className: m,
            intervalCount: b,
            inTrialPeriod: v,
          } = e,
          h = (e) => (null != r ? r.find((n) => n.type === e) : null),
          P = h(s.eW.SUBSCRIPTION_PLAN),
          A = h(s.eW.ENTITLEMENT),
          T = null != P ? Math.floor((P.amount / a) * 100) : null,
          g = (0, o.T4)(a, p);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(f, {
              label: n,
              value: (0, i.jsxs)(i.Fragment, {
                children: [
                  v
                    ? c.intl.formatToPlainString(c.t.hXcaLS, {
                        price: (0, o.T4)(0, p),
                      })
                    : t,
                  null != T
                    ? (0, i.jsxs)("div", {
                        className: u.rowPercentDiscount,
                        children: ["-", T, "%"],
                      })
                    : null,
                ],
              }),
              className: m,
            }),
            v &&
              (0, i.jsx)(l.Text, {
                variant: "text-md/medium",
                className: u.trialEndPrice,
                children: c.intl.format(c.t.v9QeOD, { price: g }),
              }),
            null != T
              ? (0, i.jsxs)("div", {
                  className: u.rowDiscountOriginalPrice,
                  children: [
                    "(",
                    null != d && null != b ? (0, o.og)(g, d, b) : g,
                    ")",
                  ],
                })
              : null,
            null != A
              ? (0, i.jsx)("div", {
                  className: u.entitlementDiscountRow,
                  children: c.intl.string(c.t.A7Hpfn),
                })
              : null,
          ],
        });
      }
      function b(e) {
        let {
          extended: n = !1,
          negativeMarginTop: t = !1,
          negativeMarginBottom: r = !1,
        } = e;
        return (0, i.jsx)("div", {
          className: a()(u.divider, {
            [u.dividerExtended]: n,
            [u.negativeMarginTop]: t,
            [u.negativeMarginBottom]: r,
          }),
        });
      }
      function v(e) {
        let { label: n, value: t, className: r } = e;
        return (0, i.jsxs)("div", {
          className: a()(u.totalRow, r),
          children: [
            (0, i.jsx)("div", { className: u.totalLabel, children: n }),
            (0, i.jsx)("div", { className: u.totalAmount, children: t }),
          ],
        });
      }
      function h(e) {
        let { children: n, className: t } = e;
        return (0, i.jsx)("div", {
          className: a()(u.finePrint, t),
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
      var i = t(200651);
      t(192379);
      var r = t(120356),
        a = t.n(r),
        l = t(937615),
        s = t(474936),
        o = t(388032),
        c = t(253259);
      function u(e) {
        let {
            price: n,
            currency: t,
            intervalType: r,
            className: u,
            intervalCount: d = 1,
            isPrepaidPaymentSource: p = !1,
          } = e,
          f = (0, l.T4)(n, t),
          m = null;
        return (
          r === s.rV.YEAR
            ? (m = o.intl.format(o.t["3U719v"], { price: f }))
            : r === s.rV.MONTH && 1 === d
              ? (m = o.intl.format(o.t.NkR7BQ, { price: f }))
              : r === s.rV.MONTH &&
                d > 1 &&
                (m = o.intl.format(o.t.CNAGg4, { price: f, intervalCount: d })),
          (0, i.jsx)("div", {
            className: a()(c.pricePerInterval, u),
            "data-testid": "PricePerInterval-".concat(t),
            children:
              null == r || p ? (0, i.jsx)("strong", { children: f }) : m,
          })
        );
      }
    },
    585602: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(937615),
        a = t(653798),
        l = t(388032);
      function s(e) {
        let { invoice: n } = e;
        return n.taxInclusive || n.tax <= 0
          ? null
          : (0, i.jsx)(a.R$, {
              label: l.intl.string(l.t.jiRvCw),
              value: (0, r.T4)(n.tax, n.currency),
            });
      }
    },
    314182: function (e, n, t) {
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        s = t(146313);
      let o = r.forwardRef(function (e, n) {
        let { isActive: t, children: r } = e;
        return (0, i.jsx)("div", {
          className: l()(s.wrapper, { [s.wrapperActive]: t }),
          ref: n,
          children: r,
        });
      });
      n.Z = o;
    },
    42818: function (e, n, t) {
      t.d(n, {
        As: function () {
          return M;
        },
        By: function () {
          return L;
        },
        Lu: function () {
          return j;
        },
        e9: function () {
          return D;
        },
        hG: function () {
          return O;
        },
        nd: function () {
          return G;
        },
        yT: function () {
          return H;
        },
      }),
        t(411104),
        t(724458),
        t(47120);
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        s = t(512722),
        o = t.n(s),
        c = t(442837),
        u = t(481060),
        d = t(911969),
        p = t(100527),
        f = t(906732),
        m = t(509545),
        b = t(259580),
        v = t(63063),
        h = t(74538),
        P = t(937615),
        A = t(374649),
        T = t(591548),
        g = t(639119),
        y = t(653798),
        E = t(585602),
        I = t(474936),
        x = t(981631),
        _ = t(388032),
        N = t(953156);
      let C = (e, n) => {
          var t;
          return !!(null === (t = e.discounts) || void 0 === t
            ? void 0
            : t.some((e) => e.type === n));
        },
        R = (e, n) => {
          var t, i, r;
          return (
            e.subscriptionPlanPrice -
            (null !==
              (r =
                null === (i = e.discounts) || void 0 === i
                  ? void 0
                  : null === (t = i.find((e) => e.type === n)) || void 0 === t
                    ? void 0
                    : t.amount) && void 0 !== r
              ? r
              : 0)
          );
        };
      function S(e) {
        var n;
        let {
            invoiceItem: t,
            overrideAmount: r,
            showGuildSubscriptionAdjustmentTooltip: a,
            currency: l,
            className: s,
            isPrepaidPaymentSource: p,
            referralTrialOfferId: f,
            inTrialPeriod: b,
          } = e,
          v = (0, c.e7)([m.Z], () => m.Z.get(t.subscriptionPlanId)),
          A =
            null === (n = (0, g.N)(f)) || void 0 === n
              ? void 0
              : n.subscription_trial;
        o()(null != v, "Missing subscriptionPlan");
        let T = (function (e, n, t, i) {
          let r = C(e, d.eW.PREMIUM_TRIAL);
          switch (e.subscriptionPlanId) {
            case I.Xh.PREMIUM_MONTH_LEGACY:
            case I.Xh.PREMIUM_YEAR_LEGACY:
            case I.Xh.PREMIUM_MONTH_TIER_0:
            case I.Xh.PREMIUM_YEAR_TIER_0:
            case I.Xh.PREMIUM_MONTH_TIER_1:
            case I.Xh.PREMIUM_YEAR_TIER_1:
            case I.Xh.PREMIUM_MONTH_TIER_2:
            case I.Xh.PREMIUM_YEAR_TIER_2:
            case I.Xh.PREMIUM_3_MONTH_TIER_2:
            case I.Xh.PREMIUM_6_MONTH_TIER_2:
              return (0, h.Gf)(e.subscriptionPlanId, r, t, i);
            case I.Xh.PREMIUM_3_MONTH_GUILD:
            case I.Xh.PREMIUM_6_MONTH_GUILD:
              return _.intl.format(_.t.YAIIWl, {
                num: e.quantity,
                intervalCount: n.intervalCount,
              });
            case I.Xh.PREMIUM_MONTH_GUILD:
              return _.intl.format(_.t["3BYyio"], { num: e.quantity });
            case I.Xh.PREMIUM_YEAR_GUILD:
              return _.intl.format(_.t.JVW4UF, { num: e.quantity });
          }
          switch (n.interval) {
            case I.rV.MONTH:
              if (1 === n.intervalCount)
                return _.intl.formatToPlainString(_.t["6oq129"], {
                  planName: n.name,
                });
              return _.intl.formatToPlainString(_.t["9ydggY"], {
                planName: n.name,
                intervalCount: n.intervalCount,
              });
            case I.rV.YEAR:
              return _.intl.formatToPlainString(_.t.V6UFQE, {
                planName: n.name,
              });
          }
          throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId));
        })(
          t,
          v,
          p,
          (0, h.if)({
            intervalType: null == A ? void 0 : A.interval,
            intervalCount: null == A ? void 0 : A.interval_count,
          }),
        );
        !0 === a &&
          (T = (0, i.jsxs)("div", {
            className: N.invoiceItemLabelWithIcon,
            children: [
              (0, i.jsxs)("div", { children: [T, " "] }),
              (0, i.jsx)(u.Tooltip, {
                text: _.intl.format(_.t.UDop9f, {}),
                "aria-label": _.intl.string(_.t.P68ePD),
                tooltipClassName: N.invoiceItemTooltip,
                children: (e) =>
                  (0, i.jsx)(u.CircleQuestionIcon, {
                    size: "md",
                    color: "currentColor",
                    ...e,
                    className: N.invoiceItemLabelIcon,
                  }),
              }),
            ],
          }));
        let E = (0, P.T4)(null != r ? r : t.amount, l),
          x = p ? E : (0, P.og)(E, v.interval, v.intervalCount);
        return (0, i.jsx)(y.i$, {
          label: T,
          value: x,
          originalAmount: t.subscriptionPlanPrice * t.quantity,
          discounts: t.discounts,
          interval: v.interval,
          intervalCount: v.intervalCount,
          currency: l,
          className: s,
          inTrialPeriod: b,
        });
      }
      function M(e) {
        let { label: n, tooltipText: t, tooltipAriaLabel: r } = e;
        return (0, i.jsxs)("div", {
          className: N.invoiceItemLabelWithIcon,
          children: [
            n,
            (0, i.jsx)(u.Tooltip, {
              clickableOnMobile: !0,
              text: t,
              "aria-label": r,
              tooltipClassName: N.invoiceItemTooltip,
              children: (e) =>
                (0, i.jsx)(u.CircleQuestionIcon, {
                  size: "md",
                  color: "currentColor",
                  ...e,
                  className: N.invoiceItemLabelIcon,
                }),
            }),
          ],
        });
      }
      function L(e) {
        let { invoice: n, isPrepaidPaymentSource: t } = e,
          r = (0, T.j)(n.invoiceItems),
          a = r.find((e) => !(0, h.Z8)(e.subscriptionPlanId) && e.amount >= 0),
          l = r.find((e) => (0, h.Z8)(e.subscriptionPlanId) && e.amount >= 0),
          s = (0, c.e7)([m.Z], () =>
            null != l ? m.Z.get(l.subscriptionPlanId) : null,
          ),
          o = null != l ? l.amount : 0,
          u = (0, P.T4)(o, n.currency),
          d = null != s ? (0, P.og)(u, s.interval, s.intervalCount) : 0;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            null != a
              ? (0, i.jsx)(S, {
                  invoiceItem: a,
                  currency: n.currency,
                  isPrepaidPaymentSource: t,
                })
              : null,
            0 !== o && null != l && null != s
              ? (0, i.jsx)(y.R$, {
                  label: _.intl.formatToPlainString(_.t.a3cAOj, {
                    numGuildSubscriptions: l.quantity,
                    planName: (0, h.Gf)(s.id, !1, t),
                  }),
                  value: t ? u : d,
                })
              : null,
            (0, i.jsx)(E.Z, { invoice: n }),
            (0, i.jsx)(y.KU, {}),
            (0, i.jsx)(y.Ji, {
              label: _.intl.format(
                n.taxInclusive ? (t ? _.t.BqdxQk : _.t.XH4raG) : _.t.RUI48P,
                {},
              ),
              value:
                n.currency === x.pKx.USD
                  ? (0, P.T4)(n.total, n.currency)
                  : "".concat((0, P.T4)(n.total, n.currency), "*"),
            }),
          ],
        });
      }
      function j(e) {
        let {
            invoice: n,
            newPlan: t,
            isPrepaidPaymentSource: r,
            referralTrialOfferId: a,
          } = e,
          l = (0, T.j)(n.invoiceItems),
          s = l.find((e) => e.subscriptionPlanId === t.id);
        o()(null != s, "Expected newPlanInvoiceItem");
        let c = l.find((e) => !(0, h.Z8)(e.subscriptionPlanId) && e.amount < 0),
          u = l.find(
            (e) =>
              null == e.subscriptionPlanId &&
              null != e.discounts &&
              e.discounts.find(
                (e) => e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION,
              ),
          ),
          p = C(s, d.eW.PREMIUM_TRIAL),
          f = R(s, d.eW.SUBSCRIPTION_PLAN),
          m = s.quantity * f,
          b =
            s.amount +
            (null != c ? c.amount : 0) -
            m +
            (null != u ? u.amount : 0),
          v = l
            .filter(
              (e) =>
                e.subscriptionPlanId === I.Xh.PREMIUM_MONTH_GUILD ||
                e.subscriptionPlanId === I.Xh.PREMIUM_YEAR_GUILD,
            )
            .reduce((e, n) => e + n.amount, 0);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(S, {
              invoiceItem: s,
              currency: n.currency,
              overrideAmount: m,
              isPrepaidPaymentSource: r,
              referralTrialOfferId: a,
            }),
            0 === b || p
              ? null
              : (0, i.jsx)(y.R$, {
                  label: (0, i.jsx)(M, {
                    label: _.intl.formatToPlainString(_.t.ZSVgeX, {
                      planName: (0, h.PV)(t.id) ? (0, h.aq)(t.id) : t.name,
                    }),
                    tooltipText: _.intl.string(_.t.JmwQJC),
                  }),
                  value: (0, P.T4)(b, n.currency),
                }),
            0 !== v
              ? (0, i.jsx)(y.R$, {
                  label: (0, i.jsx)(M, {
                    label: _.intl.string(_.t["+as5ZW"]),
                    tooltipText: _.intl.format(_.t.UDop9f, {}),
                    tooltipAriaLabel: _.intl.string(_.t.P68ePD),
                  }),
                  value: (0, P.T4)(v, n.currency),
                })
              : null,
            (0, i.jsx)(E.Z, { invoice: n }),
            (0, i.jsx)(y.KU, {}),
            (0, i.jsx)(y.Ji, {
              label: _.intl.format(
                n.taxInclusive ? (r ? _.t.BqdxQk : _.t.XH4raG) : _.t.RUI48P,
                {},
              ),
              value:
                n.currency === x.pKx.USD
                  ? (0, P.T4)(n.total, n.currency)
                  : "".concat((0, P.T4)(n.total, n.currency), "*"),
            }),
          ],
        });
      }
      function k(e) {
        let n = e.slice();
        return (
          n.sort((e, n) => {
            let t = (0, h.uZ)(e.subscriptionPlanId),
              i = (0, h.uZ)(n.subscriptionPlanId);
            return t && !i ? -1 : !t && i ? 1 : 0;
          }),
          n
        );
      }
      function U(e) {
        return e.filter((e) => {
          let { subscriptionPlanId: n } = e;
          return n !== I.Xh.NONE_MONTH && n !== I.Xh.NONE_YEAR;
        });
      }
      function O(e) {
        let { proratedInvoice: n, renewalInvoice: t } = e,
          { intervalType: r, intervalCount: a } = (0, h.dn)(n),
          { intervalType: l, intervalCount: s } = (0, h.dn)(t);
        return r !== l ||
          a !== s ||
          n.subscriptionPeriodEnd.getTime() ===
            t.subscriptionPeriodStart.getTime()
          ? null
          : (0, i.jsx)("div", {
              className: N.subscriptionPeriodResetNotice,
              children: _.intl.format(_.t.JWWD4O, {
                renewalDate: n.subscriptionPeriodEnd,
              }),
            });
      }
      function B(e) {
        let {
            isUpdate: n,
            currentInvoice: t,
            newInvoice: r,
            inTrialPeriod: a,
          } = e,
          s = null != t ? (0, T.j)(t.invoiceItems) : null,
          o = null != t ? (0, h.dn)(t) : null,
          { intervalType: c, intervalCount: u } = (0, h.dn)(r),
          d = null != o && (o.intervalType !== c || o.intervalCount !== u);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(y.KU, { extended: !0 }),
            null != t
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(y.q9, { children: _.intl.string(_.t.tuqjWV) }),
                    U(k((0, T.j)(t.invoiceItems))).map((e) =>
                      (0, i.jsx)(
                        S,
                        {
                          invoiceItem: e,
                          currency: t.currency,
                          inTrialPeriod: a,
                        },
                        e.id,
                      ),
                    ),
                    (0, i.jsx)(y.KU, { extended: !0 }),
                  ],
                })
              : null,
            (0, i.jsx)(y.q9, { children: _.intl.string(_.t.qxVrh4) }),
            U(k((0, T.j)(r.invoiceItems))).map((e) => {
              let t =
                null != s &&
                !s.some(
                  (n) =>
                    n.subscriptionPlanId === e.subscriptionPlanId &&
                    n.quantity === e.quantity,
                );
              return (0, i.jsx)(
                S,
                {
                  invoiceItem: e,
                  currency: r.currency,
                  showGuildSubscriptionAdjustmentTooltip:
                    d &&
                    (e.subscriptionPlanId === I.Xh.PREMIUM_MONTH_GUILD ||
                      e.subscriptionPlanId === I.Xh.PREMIUM_YEAR_GUILD ||
                      e.subscriptionPlanId === I.Xh.PREMIUM_3_MONTH_GUILD ||
                      e.subscriptionPlanId === I.Xh.PREMIUM_6_MONTH_GUILD),
                  className: l()({ [N.subscriptionAddedInvoiceItem]: !n || t }),
                },
                e.id,
              );
            }),
            (0, i.jsx)(E.Z, { invoice: r }),
            (0, i.jsx)(y.KU, {}),
            (0, i.jsx)(y.R$, {
              label: _.intl.string(_.t.AChTLS),
              value: (0, P.og)((0, P.T4)(r.total, r.currency), c, u),
              className: N.subscriptionCostRow,
            }),
          ],
        });
      }
      function Z(e) {
        var n;
        let {
            proratedInvoice: t,
            renewalInvoice: r,
            isTrial: a,
            isUpdate: l,
            overrideRenewalDate: s,
            trialFooterMessageOverride: o,
          } = e,
          c =
            null === (n = (0, g.N)()) || void 0 === n
              ? void 0
              : n.subscription_trial,
          { intervalType: u, intervalCount: d } = (0, h.dn)(r);
        if (null == t) return null;
        if (a) {
          let e = (0, h.if)({
              intervalType: null == c ? void 0 : c.interval,
              intervalCount: null == c ? void 0 : c.interval_count,
            }),
            n =
              (null == c ? void 0 : c.interval) === I.rV.DAY &&
              (null == c ? void 0 : c.interval_count) < 28
                ? 2
                : 7;
          return (0, i.jsx)(i.Fragment, {
            children:
              null != o
                ? o
                : _.intl.format(_.t["2FvcjI"], {
                    duration: e,
                    days: n,
                    contactLink: x.EYA.CONTACT,
                    helpdeskArticle: v.Z.getArticleURL(x.BhN.PREMIUM_TRIAL),
                  }),
          });
        }
        let p = r.taxInclusive ? _.t["hay+go"] : _.t.da0lkp;
        return (0, i.jsx)(i.Fragment, {
          children: _.intl.format(p, {
            rate: (0, P.og)((0, P.T4)(r.subtotal, r.currency), u, d),
            renewalDate:
              null != s
                ? s
                : l
                  ? null != t
                    ? t.subscriptionPeriodEnd
                    : r.subscriptionPeriodStart
                  : r.subscriptionPeriodEnd,
            contactLink: x.EYA.CONTACT,
            helpdeskArticle: v.Z.getArticleURL(x.BhN.BILLING),
          }),
        });
      }
      function G(e) {
        let {
            premiumSubscription: n,
            proratedInvoice: t,
            renewalInvoice: a,
            overrideRenewalDate: l,
            isUpdate: s = !1,
            isTrial: o = !1,
            priceOptions: c,
            isPrepaidPaymentSource: d = !1,
            trialFooterMessageOverride: m,
            hideSubscriptionDetails: v = !1,
          } = e,
          { analyticsLocations: h } = (0, f.ZP)(),
          P = {
            subscriptionId: null == n ? void 0 : n.id,
            renewal: !0,
            preventFetch: !s,
            analyticsLocatinons: h,
            analyticsLocation: p.Z.SUBSCRIPTION_INVOICE_FOOTER,
            ...c,
          },
          [T] = (0, A.ED)(P),
          [g, E] = r.useState(!1);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            d
              ? null
              : (0, i.jsx)(y.HE, {
                  children: (0, i.jsx)(Z, {
                    proratedInvoice: t,
                    renewalInvoice: a,
                    isTrial: o,
                    isUpdate: s,
                    overrideRenewalDate: l,
                    trialFooterMessageOverride: m,
                  }),
                }),
            !v &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)(u.Clickable, {
                    onClick: () => E((e) => !e),
                    className: N.subscriptionDetailsToggle,
                    children: [
                      g ? _.intl.string(_.t.aBcRbG) : _.intl.string(_.t.X6duqq),
                      (0, i.jsx)(b.Z, {
                        direction: g ? b.Z.Directions.UP : b.Z.Directions.DOWN,
                        className: N.subscriptionDetailsToggleCaret,
                      }),
                    ],
                  }),
                  g
                    ? (0, i.jsx)(B, {
                        isUpdate: s,
                        currentInvoice: T,
                        newInvoice: a,
                        inTrialPeriod: o,
                      })
                    : null,
                ],
              }),
          ],
        });
      }
      function D(e) {
        let n,
          {
            plan: t,
            className: r,
            isPrepaidPaymentSource: a = !1,
            isCustomGift: l = !1,
            invoicePreview: s,
          } = e,
          { tax: o, taxInclusive: c, currency: d } = s,
          p = s.total,
          f = p - o,
          m = (0, P.T4)(f, d),
          b = (0, P.T4)(p, d);
        return (
          (n = l
            ? (0, h.L7)(t.interval, !0, void 0, void 0, !0, (0, h.Rd)(t.id))
            : _.intl.formatToPlainString(_.t.LQLxkZ, {
                planName: (0, h.Gf)(t.id, !1, a),
              })),
          (0, i.jsxs)("div", {
            className: r,
            children: [
              (0, i.jsx)(u.FormTitle, { children: _.intl.string(_.t.PEjaCw) }),
              o >= 0 && !1 === c
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(u.Text, {
                        variant: "text-md/bold",
                        className: N.purchaseDetailsHeaderText,
                        children: n,
                      }),
                      (0, i.jsxs)(y.PO, {
                        className: r,
                        children: [
                          (0, i.jsx)(y.q9, {
                            children: _.intl.string(_.t.sail9P),
                          }),
                          (0, i.jsx)(y.R$, { label: n, value: m }),
                          (0, i.jsx)(E.Z, { invoice: s }),
                          (0, i.jsx)(y.KU, {}),
                          (0, i.jsx)(y.R$, {
                            label: _.intl.string(_.t.txajQE),
                            value: b,
                            className: N.subscriptionCostRow,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, i.jsx)(u.Heading, {
                    variant: "text-md/normal",
                    children: "".concat(n, " - ").concat(b),
                  }),
            ],
          })
        );
      }
      function H(e) {
        let n,
          { invoice: t, plan: r } = e,
          a = (0, T.j)(t.invoiceItems).find(
            (e) => e.subscriptionPlanId === r.id,
          );
        return (
          o()(null != a, "newPlanInvoiceItem can not be null"),
          r.interval === I.rV.MONTH
            ? (n = t.taxInclusive ? _.t.v9QeOD : _.t.FALkOz)
            : r.interval === I.rV.YEAR
              ? (n = t.taxInclusive ? _.t.ECT4Aw : _.t["0HQxKS"])
              : o()(!1, "Invalid interval type"),
          (0, i.jsx)(u.Text, {
            variant: "text-md/normal",
            children: _.intl.format(n, {
              price: (0, P.T4)(a.subscriptionPlanPrice, t.currency),
            }),
          })
        );
      }
    },
    244923: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var r = t(481060),
        a = t(366939),
        l = t(853872),
        s = t(212895),
        o = t(296848);
      n.Z = function (e) {
        let {
            activeSubscription: n,
            onNext: t,
            isSubmitting: c,
            paymentSourceId: u,
            buttonLabel: d,
            analyticsLocations: p,
          } = e,
          f = async () => {
            let e = l.Z.getPaymentSource(u);
            null != e &&
              (await (0, s.i1)(u, (0, o.yb)(n)),
              await a.tq(n, e, n.currency, p),
              t());
          };
        return (0, i.jsx)(r.Button, {
          "data-testid": "purchase",
          onClick: f,
          color: r.Button.Colors.GREEN,
          submitting: c,
          children: d,
        });
      };
    },
    858987: function (e, n, t) {
      t.d(n, {
        K: function () {
          return A;
        },
        Z: function () {
          return g;
        },
      }),
        t(789020);
      var i = t(200651);
      t(192379);
      var r = t(512722),
        a = t.n(r),
        l = t(481060),
        s = t(115130),
        o = t(906732),
        c = t(563132),
        u = t(630388),
        d = t(74538),
        p = t(296848),
        f = t(244923),
        m = t(981631),
        b = t(231338),
        v = t(388032),
        h = t(33112),
        P = t(74316);
      function A(e) {
        let {
          purchaseType: n,
          plan: t,
          premiumSubscription: i,
          isGift: r,
          planGroup: l,
          isPrepaidPaymentSource: s,
          inReverseTrial: o,
        } = e;
        if (n === b.GZ.ONE_TIME)
          return r ? v.intl.string(v.t.ouo4FB) : v.intl.string(v.t.ExD0Nj);
        if (
          (a()(
            null != t,
            "Subscription plan must be selected to render SubscriptionReviewButton",
          ),
          r)
        )
          return v.intl.string(v.t.ouo4FB);
        if (o) return v.intl.string(v.t.LQVQIi);
        if ((0, d.PV)(t.id)) {
          if (s) return v.intl.string(v.t.cRCCJy);
          if (null != i)
            return i.isPaused
              ? v.intl.string(v.t.zpi5pq)
              : (0, p.R4)(i, t.id, l)
                ? v.intl.string(v.t.IJI7ys)
                : v.intl.string(v.t.VPuTc3);
          return (0, d.W_)(null, t);
        }
        return v.intl.string(v.t.YScQSE);
      }
      function T(e, n) {
        null != e.current &&
          (e.current.scrollIntoView({ behavior: "smooth" }), n());
      }
      function g(e) {
        var n;
        let {
            legalTermsNodeRef: t,
            invoiceError: r,
            planError: a,
            disablePurchase: d,
            flashLegalTerms: p,
            isSubmitting: b,
            premiumSubscription: g,
            isGift: y,
            planGroup: E,
            isPrepaid: I,
            isTrial: x,
            makePurchase: _,
            needsPaymentSource: N,
            inReverseTrial: C,
            onNext: R,
          } = e,
          {
            application: S,
            selectedPlan: M,
            hasAcceptedTerms: L,
            purchaseType: j,
            paymentSourceId: k,
            activeSubscription: U,
            devShelfFetchState: O,
          } = (0, c.usePaymentContext)(),
          B = A({
            purchaseType: j,
            plan: M,
            premiumSubscription: g,
            isGift: y,
            planGroup: E,
            isPrepaidPaymentSource: I,
            inReverseTrial: C,
          }),
          { analyticsLocations: Z } = (0, o.ZP)();
        if (null != r || null != a || d)
          return (0, i.jsx)(l.Button, {
            color: l.Button.Colors.GREEN,
            disabled: !0,
            children: B,
          });
        if (N)
          return (0, i.jsx)(l.Tooltip, {
            text: v.intl.string(v.t.L7jbQU),
            children: (e) =>
              (0, i.jsx)(l.Button, {
                ...e,
                color: l.Button.Colors.GREEN,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
                children: B,
              }),
          });
        if (
          (0, u.yE)(
            null !== (n = null == S ? void 0 : S.flags) && void 0 !== n ? n : 0,
            m.udG.EMBEDDED,
          ) &&
          O === s.O.LOADING
        )
          return (0, i.jsx)(l.Tooltip, {
            text: v.intl.string(v.t.cjA5tr),
            children: (e) =>
              (0, i.jsx)(l.Button, {
                ...e,
                color: l.Button.Colors.GREEN,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
                children: B,
              }),
          });
        else if (x)
          return (0, i.jsxs)(l.ShinyButton, {
            innerClassName: h.innerButton,
            "data-testid": L ? "purchase" : "submitButton",
            onClick: L ? _ : () => T(t, p),
            color: l.Button.Colors.GREEN,
            submitting: b,
            children: [
              (0, i.jsx)("img", { alt: "", className: h.nitroIcon, src: P }),
              B,
            ],
          });
        else if (!L)
          return (0, i.jsx)(l.Tooltip, {
            text: v.intl.string(v.t.XdvBLS),
            children: (e) =>
              (0, i.jsx)(l.Button, {
                ...e,
                color: l.Button.Colors.GREEN,
                type: "submit",
                onClick: () => T(t, p),
                "data-testid": "submitButton",
                children: B,
              }),
          });
        else if (C && null != U && null != k)
          return (0, i.jsx)(f.Z, {
            activeSubscription: U,
            onNext: R,
            isSubmitting: b,
            paymentSourceId: k,
            buttonLabel: B,
            analyticsLocations: Z,
          });
        else
          return (0, i.jsx)(l.Button, {
            "data-testid": "purchase",
            onClick: _,
            color: l.Button.Colors.GREEN,
            submitting: b,
            children: B,
          });
      }
    },
    850840: function (e, n, t) {
      let i;
      t(653041);
      var r,
        a = t(442837),
        l = t(570140);
      function s(e, n, t) {
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
      class c extends (r = a.ZP.PersistedStore) {
        initialize(e) {
          i = null != e ? e : o;
        }
        getState() {
          return i;
        }
        get hasAcceptedStoreTerms() {
          return i.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return i.hasAcceptedEulaIds.includes(e);
        }
      }
      s(c, "displayName", "ApplicationStoreUserSettingsStore"),
        s(c, "persistKey", "ApplicationStoreUserSettingsStore"),
        s(c, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (n.Z = new c(l.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            i.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: n } = e;
            if (i.hasAcceptedEulaIds.includes(n)) return !1;
            i.hasAcceptedEulaIds.push(n);
          },
        }));
    },
    296848: function (e, n, t) {
      t.d(n, {
        AT: function () {
          return h;
        },
        GY: function () {
          return b;
        },
        R4: function () {
          return m;
        },
        oE: function () {
          return v;
        },
        yb: function () {
          return f;
        },
      }),
        t(47120),
        t(653041),
        t(192379);
      var i = t(512722),
        r = t.n(i),
        a = t(913527),
        l = t.n(a),
        s = t(99945);
      t(442837);
      var o = t(821849),
        c = t(509545),
        u = t(74538),
        d = t(981631),
        p = t(474936);
      function f(e) {
        return e.items
          .map((e) => {
            let n = c.Z.get(e.planId);
            return r()(null != n, "Unable to fetch plan"), n;
          })
          .map((e) => e.skuId);
      }
      function m(e, n, t) {
        let i = e.getCurrentSubscriptionPlanIdForGroup(t);
        return (
          (e.type === d.NYc.PREMIUM && null == i) ||
          (r()(null != i, "Current subscription has no plan in group"),
          r()(
            !(
              i === p.Xh.PREMIUM_YEAR_TIER_1 && n === p.Xh.PREMIUM_MONTH_TIER_2
            ),
            "Unexpected plan switch",
          ),
          t.indexOf(i) < t.indexOf(n))
        );
      }
      function b(e, n, t) {
        return !m(e, n, t);
      }
      function v(e, n) {
        let t = c.Z.get(e);
        if (null == t) {
          let t = p.GP[e];
          r()(null != t, "Missing hardcoded subscriptionPlan: ".concat(e));
          let i = (0, u.Wz)(t.skuId);
          !c.Z.isFetchingForSKU(i) && (0, o.GZ)(i, n);
        }
        return t;
      }
      function h(e) {
        let n = Object.keys(s.T).filter((e) => isNaN(Number(e)));
        if (e.status !== d.O0b.PAUSED)
          return { durations: n, currentDaysPaused: 0 };
        if (null == e.pauseEndsAt)
          return { durations: [], currentDaysPaused: 0 };
        {
          let t = l()(e.currentPeriodStart),
            i = Math.round(l()(e.pauseEndsAt).diff(t, "days", !0)),
            r = [];
          for (let e of n) s.T[e] > i && r.push(e);
          return { durations: r, currentDaysPaused: i };
        }
      }
    },
    99945: function (e, n, t) {
      var i, r;
      t.d(n, {
        T: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.ONE_MONTH = 30)] = "ONE_MONTH"),
        (r[(r.TWO_MONTHS = 60)] = "TWO_MONTHS"),
        (r[(r.THREE_MONTHS = 90)] = "THREE_MONTHS");
    },
  },
]);
//# sourceMappingURL=d87f0d09e762ba09821e.js.map
