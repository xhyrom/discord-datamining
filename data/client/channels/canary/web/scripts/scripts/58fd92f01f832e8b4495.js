"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76540"],
  {
    279837: function (e, t, s) {
      s.r(t), s(47120), s(773603);
      var n,
        i = s(735250),
        o = s(470079),
        l = s(481060),
        a = s(689938),
        r = s(600899);
      function h(e, t, s) {
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
      class d extends (n = o.PureComponent) {
        render() {
          let {
              title: e,
              actionText: t,
              children: s,
              transitionState: n,
            } = this.props,
            { error: h, isLoading: d, value: u } = this.state,
            c =
              o.Children.count(s) > 0
                ? (0, i.jsx)(l.Card, {
                    type: l.Card.Types.WARNING,
                    className: r.card,
                    children: (0, i.jsx)(l.Text, {
                      className: r.warning,
                      variant: "text-md/normal",
                      children: s,
                    }),
                  })
                : null;
          return (0, i.jsx)(l.ModalRoot, {
            transitionState: n,
            children: (0, i.jsxs)("form", {
              onSubmit: this.handleSubmit,
              children: [
                (0, i.jsx)(l.ModalHeader, {
                  separator: !1,
                  children: (0, i.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    children: e,
                  }),
                }),
                (0, i.jsxs)(l.ModalContent, {
                  children: [
                    c,
                    (0, i.jsxs)(l.FormItem, {
                      title: a.Z.Messages.FORM_LABEL_PASSWORD,
                      className: r.spacing,
                      children: [
                        (0, i.jsx)(l.TextInput, {
                          type: "password",
                          autoComplete: "off",
                          autoFocus: !0,
                          value: u,
                          onChange: this.handlePasswordChange,
                        }),
                        null != h && "" !== h
                          ? (0, i.jsxs)(l.Text, {
                              variant: "text-xs/normal",
                              color: "text-danger",
                              className: r.error,
                              children: [" ", h, " "],
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(l.ModalFooter, {
                  children: [
                    (0, i.jsx)(l.Button, {
                      type: "submit",
                      disabled: d || 0 === u.length,
                      children: null != t ? t : a.Z.Messages.CONFIRM,
                    }),
                    (0, i.jsx)(l.Button, {
                      onClick: this.handleCancel,
                      look: l.Button.Looks.LINK,
                      color: l.Button.Colors.PRIMARY,
                      children: a.Z.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            h(this, "state", { value: "", error: null, isLoading: !1 }),
            h(this, "handleSubmit", (e) => {
              e.preventDefault();
              let { value: t } = this.state,
                { handleSubmit: s, onClose: n, onError: i } = this.props;
              this.setState({ isLoading: !0 }),
                s(t)
                  .then(
                    (e) => n(null != e ? e : void 0),
                    (e) => {
                      if (null == e.body) return;
                      if (
                        (null == i || i(e.body),
                        !this.shouldSkipErrorMsgRender(e.body))
                      )
                        e.body.password
                          ? this.setState({
                              error: e.body.password,
                              isLoading: !1,
                            })
                          : e.body.message &&
                            this.setState({
                              error: e.body.message,
                              isLoading: !1,
                            });
                    },
                  )
                  .finally(() => this.setState({ isLoading: !1 }));
            }),
            h(this, "shouldSkipErrorMsgRender", (e) => {
              let { skipErrorMsgAbortCode: t } = this.props;
              return null != t && (null == e ? void 0 : e.code) === t;
            }),
            h(this, "handleCancel", () => {
              let { onClose: e } = this.props;
              e();
            }),
            h(this, "handlePasswordChange", (e) => {
              let { onPasswordChange: t } = this.props;
              null == t || t(e), this.setState({ value: e });
            });
        }
      }
      h(d, "key", () => "password-confirm-modal"), (t.default = d);
    },
    7557: function (e, t, s) {
      s(47120), s(653041);
      var n,
        i,
        o = s(735250),
        l = s(470079),
        a = s(120356),
        r = s.n(a),
        h = s(600164),
        d = s(680924);
      function u(e, t, s) {
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
      class c extends (n = l.PureComponent) {
        render() {
          let { className: e } = this.props;
          return (0, o.jsx)("input", {
            ref: this.setCodeBlockRef,
            className: r()(d.input, e),
            maxLength: 1,
            value: null != this.props.code ? this.props.code : void 0,
            autoFocus: this.props.autoFocus,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleChange,
          });
        }
        focus() {
          var e;
          null === (e = this._codeBlockRef) || void 0 === e || e.focus();
        }
        blur() {
          var e;
          null === (e = this._codeBlockRef) || void 0 === e || e.blur();
        }
        constructor(...e) {
          super(...e),
            u(this, "_codeBlockRef", void 0),
            u(this, "setCodeBlockRef", (e) => {
              this._codeBlockRef = e;
            }),
            u(this, "handleKeyDown", (e) => {
              let t = 8 === e.which || 37 === e.which || 39 === e.which,
                s =
                  (e.which >= 48 && e.which <= 57) ||
                  (e.keyCode >= 96 && e.keyCode <= 105);
              !t && !s && e.preventDefault();
              let { onKeyDown: n } = this.props;
              null == n || n(e);
            }),
            u(this, "handleChange", (e) => {
              let { onChange: t } = this.props;
              null == t || t(e.currentTarget.value);
            });
        }
      }
      u(c, "defaultProps", { autoFocus: !1 });
      class p extends (i = l.PureComponent) {
        render() {
          let { className: e, inputClassName: t } = this.props,
            { codes: s } = this.state,
            n = [];
          for (let e = 0; e < s.length; e++)
            e === s.length / 2 &&
              n.push((0, o.jsx)("div", { className: d.spacer }, "spacer")),
              n.push(
                (0, o.jsx)(
                  c,
                  {
                    ref: (t) => this.setCodeBlockRef(e, t),
                    code: s[e],
                    autoFocus: 0 === e,
                    onChange: (t) => this.handleChange(e, t),
                    onKeyDown: (t) => this.handleKeyDown(e, t),
                    className: t,
                  },
                  e,
                ),
              );
          return (0, o.jsx)(h.Z, {
            align: h.Z.Align.CENTER,
            justify: h.Z.Justify.CENTER,
            className: e,
            children: n,
          });
        }
        setCodeBlockRef(e, t) {
          this._codeBlockRefs[e] = t;
        }
        handleChange(e, t) {
          this.state.codes[e] = t;
          let s = this.getCodeOrFirstEmptyIndex();
          if ("string" == typeof s) this.submit(s);
          else {
            let e = this._codeBlockRefs[s];
            null == e || e.focus();
          }
        }
        handleKeyDown(e, t) {
          let { codes: s } = this.state;
          if (8 === t.which && e > 0 && (null == s[e] || 0 === s[e].length)) {
            let t = e - 1;
            s[t] = "";
            let n = this._codeBlockRefs[t];
            null == n || n.focus();
          }
        }
        getCodeOrFirstEmptyIndex() {
          let { codes: e } = this.state,
            t = "";
          for (let s = 0; s < e.length; s++) {
            if (isNaN(parseInt(e[s]))) return s;
            t += e[s];
          }
          return t;
        }
        submit(e) {
          let { onSubmit: t } = this.props;
          null == t || t(e);
        }
        constructor(e) {
          super(e),
            u(this, "_codeBlockRefs", Array(this.props.count)),
            (this.state = { codes: Array(e.count) });
        }
      }
      u(p, "defaultProps", { count: 6 }), (t.Z = p);
    },
    317175: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return N;
        },
      }),
        s(390547);
      var n = s(735250),
        i = s(470079),
        o = s(120356),
        l = s.n(o),
        a = s(658722),
        r = s.n(a),
        h = s(392711),
        d = s.n(h),
        u = s(217986),
        c = s(481060),
        p = s(600164),
        m = s(133080),
        C = s(689938),
        f = s(553258),
        g = s(852401);
      function y(e, t, s) {
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
      class N extends i.PureComponent {
        renderItems() {
          let { query: e } = this.state,
            t = u.Z.flatMap((e, t) => {
              let { alpha2: s, phoneCountryCodes: i, name: o } = e,
                l = (0, m.q9)(s);
              return i.map((e) => ({
                key: "".concat(t, "-").concat(e),
                name: o,
                translatedName: l,
                countryData: { name: o, alpha2: s, code: e },
                children: (0, n.jsxs)(p.Z, {
                  className: f.countryItem,
                  justify: p.Z.Justify.CENTER,
                  align: p.Z.Align.CENTER,
                  children: [
                    (0, n.jsx)(p.Z.Child, {
                      className: f.countryName,
                      children: l,
                    }),
                    (0, n.jsx)(p.Z.Child, {
                      className: f.countryCode,
                      grow: 0,
                      shrink: 0,
                      children: e,
                    }),
                  ],
                }),
              }));
            }),
            s = d()(t)
              .filter(
                (t) =>
                  0 === e.length ||
                  r()(e.toLowerCase(), t.name.toLowerCase()) ||
                  r()(e.toLowerCase(), t.translatedName.toLowerCase()),
              )
              .map((e) =>
                (0, i.createElement)(c.PopoutList.Item, {
                  ...e,
                  key: e.key,
                  onClick: () => this.onClick(e.countryData),
                }),
              )
              .value();
          return 0 === s.length
            ? (0, n.jsx)(c.PopoutList.Empty, { children: C.Z.Messages.NONE })
            : (0, n.jsx)(c.ScrollerAuto, {
                className: f.phoneFieldScroller,
                children: s,
              });
        }
        render() {
          let { className: e } = this.props;
          return (0, n.jsxs)(c.PopoutList, {
            className: l()(f.phoneFieldPopout, g.elevationBorderLow, e),
            children: [
              (0, n.jsx)(c.PopoutList.SearchBar, {
                query: this.state.query,
                placeholder: C.Z.Messages.SEARCH_COUNTRY,
                onChange: this.onChangeQuery,
                onClear: this.onClearQuery,
                autoComplete: "off",
              }),
              (0, n.jsx)(c.PopoutList.Divider, {}),
              this.renderItems(),
            ],
          });
        }
        constructor(e) {
          super(e),
            y(this, "onChangeQuery", (e) => {
              this.setState({ query: e });
            }),
            y(this, "onClearQuery", () => {
              this.setState({ query: "" });
            }),
            y(this, "onClick", (e) => {
              var t, s;
              null === (t = (s = this.props).onClick) ||
                void 0 === t ||
                t.call(s, e);
            }),
            (this.state = { query: "" });
        }
      }
    },
    200357: function (e, t, s) {
      s(47120);
      var n = s(735250),
        i = s(470079),
        o = s(120356),
        l = s.n(o),
        a = s(217986),
        r = s(481060),
        h = s(600164),
        d = s(259580),
        u = s(317175),
        c = s(689938),
        p = s(951046),
        m = s(852401),
        C = s(113207);
      function f(e, t, s) {
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
      class g extends i.PureComponent {
        render() {
          let { countryCode: e, phone: t, open: s } = this.state,
            { className: i, submitting: o } = this.props,
            [, a] = e.split("+");
          return (0, n.jsxs)(h.Z, {
            className: l()(p.phoneField, m.elevationLow, i),
            align: h.Z.Align.CENTER,
            grow: 0,
            children: [
              (0, n.jsxs)(r.Button, {
                size: r.ButtonSizes.SMALL,
                className: p.countryButton,
                color: r.ButtonColors.PRIMARY,
                innerClassName: p.countryButtonInner,
                onClick: this.handleTogglePopout,
                children: [
                  (0, n.jsxs)(h.Z, {
                    className: l()(p.countryCodeContainer, C.marginReset),
                    justify: h.Z.Justify.CENTER,
                    children: [
                      (0, n.jsx)("div", {
                        className: p.plusSign,
                        children: "+",
                      }),
                      (0, n.jsx)("div", {
                        className: p.countryCode,
                        children: a,
                      }),
                    ],
                  }),
                  (0, n.jsx)(d.Z, {
                    foreground: p.phoneFieldExpand,
                    expanded: s,
                    width: 16,
                    height: 16,
                  }),
                ],
              }),
              (0, n.jsx)("input", {
                "aria-label": c.Z.Messages.PHONE_VERIFICATION_PHONE_LABEL,
                className: p.inputField,
                value: t,
                onChange: this.handleChange,
                onKeyPress: this.handleKeyPress,
                autoFocus: !0,
              }),
              (0, n.jsx)(r.Button, {
                className: p.sendButton,
                size: r.ButtonSizes.SMALL,
                submitting: o,
                onClick: this.handleSubmit,
                children: c.Z.Messages.SEND,
              }),
              s ? (0, n.jsx)(u.Z, { onClick: this.handleClick }) : null,
            ],
          });
        }
        closePopout() {
          this.state.open && this.setState({ open: !1 });
        }
        constructor(e) {
          super(e),
            f(this, "handleChange", (e) => {
              this.closePopout(),
                this.setState({ phone: e.currentTarget.value });
            }),
            f(this, "handleKeyPress", (e) => {
              this.closePopout(),
                13 === e.which && (e.preventDefault(), this.handleSubmit());
            }),
            f(this, "handleSubmit", () => {
              let { onSubmit: e, submitting: t } = this.props,
                { countryCode: s, phone: n } = this.state;
              !t && (null == e || e("".concat(s).concat(n)));
            }),
            f(this, "handleTogglePopout", () => {
              this.setState({ open: !this.state.open });
            }),
            f(this, "handleClick", (e) => {
              let [t, s] = e.code.split(" ");
              this.setState({
                open: !1,
                countryCode: t,
                phone: null != s ? s : "",
              });
            });
          let [t, s] = a.Z.find(
            (e) => "United States" === e.name,
          ).phoneCountryCode.split(" ");
          this.state = { countryCode: t, phone: null != s ? s : "", open: !1 };
        }
      }
      t.Z = g;
    },
    145454: function (e, t, s) {
      s(47120);
      var n = s(735250),
        i = s(470079),
        o = s(120356),
        l = s.n(o),
        a = s(772848),
        r = s(990547),
        h = s(481060),
        d = s(600164),
        u = s(7557),
        c = s(200357),
        p = s(689938),
        m = s(656215),
        C = s(739017),
        f = s(113207);
      function g(e, t, s) {
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
      class y extends i.PureComponent {
        async componentDidMount() {
          let [e, { default: t }] = await Promise.all([
            s.e("93198").then(s.t.bind(s, 140523, 19)),
            Promise.resolve().then(s.t.bind(s, 500923, 23)),
          ]);
          null != this._lottieRef &&
            (this._animItem = t.loadAnimation({
              container: this._lottieRef,
              renderer: "svg",
              loop: !0,
              autoplay: !1,
              animationData: e,
            }));
        }
        componentWillUnmount() {
          null != this._animItem &&
            (this._animItem.destroy(), (this._animItem = void 0));
        }
        render() {
          let e, t, s;
          let {
            error: i,
            working: o,
            transitionState: a,
            validPhone: g,
          } = this.props;
          return (
            (e =
              null != i && "" !== i
                ? (0, n.jsx)("div", {
                    className: l()(m.description, m.error, f.marginBottom20),
                    children: i,
                  })
                : g
                  ? (0, n.jsx)("div", {
                      className: l()(m.description, f.marginBottom20),
                      children: p.Z.Messages.VERIFICATION_PHONE_DESCRIPTION,
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className: l()(m.description, f.marginBottom20),
                          children: p.Z.Messages.ENTER_PHONE_DESCRIPTION,
                        }),
                        (0, n.jsx)("div", {
                          className: l()(m.description, f.marginBottom20),
                          children:
                            p.Z.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format(),
                        }),
                      ],
                    })),
            (t = g
              ? (0, n.jsxs)(d.Z, {
                  className: m.field,
                  direction: d.Z.Direction.VERTICAL,
                  align: d.Z.Align.CENTER,
                  children: [
                    (0, n.jsx)(u.Z, { onSubmit: this.handleVerifyPhone }),
                    (0, n.jsx)(h.Button, {
                      className: f.marginTop8,
                      size: h.ButtonSizes.SMALL,
                      look: h.ButtonLooks.LINK,
                      color: h.ButtonColors.PRIMARY,
                      onClick: this.handleResendCode,
                      children: p.Z.Messages.RESEND_CODE,
                    }),
                  ],
                })
              : (0, n.jsx)(c.Z, {
                  className: m.field,
                  onSubmit: this.handleAddPhone,
                  submitting: o,
                })),
            (s = g
              ? p.Z.Messages.VERIFICATION_PHONE_TITLE
              : p.Z.Messages.ENTER_PHONE_TITLE),
            (0, n.jsxs)(h.ModalRoot, {
              impression: {
                impressionName: r.ImpressionNames.USER_VERIFY_PHONE,
              },
              transitionState: a,
              className: l()(
                m.phoneVerificationModal,
                C.vertical,
                C.alignCenter,
                C.justifyCenter,
                f.marginTop60,
              ),
              "aria-labelledby": this.headerId,
              children: [
                (0, n.jsx)("div", {
                  className: m.animationContainer,
                  ref: this.setLottieRef,
                }),
                (0, n.jsx)("div", {
                  className: l()(m.title, f.marginBottom8),
                  id: this.headerId,
                  children: s,
                }),
                e,
                t,
              ],
            })
          );
        }
        constructor(e) {
          super(e),
            g(this, "_animItem", null),
            g(this, "_lottieRef", void 0),
            g(this, "headerId", (0, a.Z)()),
            g(this, "setLottieRef", (e) => {
              this._lottieRef = e;
            }),
            g(this, "handleAddPhone", (e) => {
              this.state.animated || null == this._animItem
                ? this.setState({ phone: e })
                : (this._animItem.play(),
                  this.setState({ animated: !0, phone: e }));
              let { onAddPhone: t } = this.props;
              null == t || t(e);
            }),
            g(this, "handleVerifyPhone", (e) => {
              let { onVerifyPhone: t } = this.props;
              null == t || t(e);
            }),
            g(this, "handleResendCode", () => {
              let { onAddPhone: e } = this.props;
              null == e || e(this.state.phone);
            }),
            (this.state = { animated: !1, phone: "" });
        }
      }
      t.Z = y;
    },
    607018: function (e, t, s) {
      s.r(t), s(47120);
      var n = s(735250),
        i = s(470079),
        o = s(442837),
        l = s(279837),
        a = s(479531),
        r = s(144114),
        h = s(145454),
        d = s(23434),
        u = s(594174),
        c = s(1964),
        p = s(689938);
      t.default = i.forwardRef(function (e, t) {
        let { onAddedPhone: s, onClose: m, transitionState: C, reason: f } = e,
          g = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
          y = (0, o.e7)([d.Z], () => d.Z.getAction()),
          [N, x] = i.useState(null),
          [R, E] = i.useState(null),
          [P, v] = i.useState(null),
          [b, j] = i.useState(!1),
          S = i.useCallback(
            async (e) => {
              j(!0);
              try {
                c.Z.isPhoneReverification(g, y)
                  ? await r.Z.beginReverifyPhone(e, f)
                  : await r.Z.beginAddPhone(e, f),
                  v(null),
                  x(e);
              } catch (e) {
                v(new a.Z(e));
              }
              j(!1);
            },
            [g, f, y],
          ),
          Z = i.useCallback(
            async (e) => {
              if (null != N && null != g) {
                j(!0);
                try {
                  let { token: t } = await r.Z.verifyPhone(N, e);
                  v(null), E(t);
                } catch (e) {
                  v(new a.Z(e));
                }
                j(!1);
              }
            },
            [g, N],
          ),
          I = i.useCallback(
            async (e) => {
              if (null != R)
                c.Z.isPhoneReverification(g, y)
                  ? await r.Z.reverifyPhone(R, e, f)
                  : await r.Z.addPhone(R, e, f),
                  null == s || s(),
                  m();
            },
            [s, m, R, f, g, y],
          );
        return null != R
          ? (0, n.jsx)(l.default, {
              onClose: m,
              transitionState: C,
              title: p.Z.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,
              handleSubmit: I,
            })
          : (0, n.jsx)(h.Z, {
              onClose: m,
              transitionState: C,
              error: null == P ? void 0 : P.getAnyErrorMessage(),
              working: b,
              validPhone: null != N,
              onAddPhone: S,
              onVerifyPhone: Z,
            });
      });
    },
  },
]);
//# sourceMappingURL=58fd92f01f832e8b4495.js.map
