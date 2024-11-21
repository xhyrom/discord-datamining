"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76540"],
  {
    279837: function (e, t, n) {
      n.r(t), n(47120), n(773603);
      var s,
        i = n(200651),
        o = n(192379),
        l = n(481060),
        a = n(388032),
        r = n(600899);
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class u extends (s = o.PureComponent) {
        render() {
          let {
              title: e,
              actionText: t,
              children: n,
              transitionState: s,
            } = this.props,
            { error: h, isLoading: u, value: d } = this.state,
            c =
              o.Children.count(n) > 0
                ? (0, i.jsx)(l.Card, {
                    type: l.Card.Types.WARNING,
                    className: r.card,
                    children: (0, i.jsx)(l.Text, {
                      className: r.warning,
                      variant: "text-md/normal",
                      children: n,
                    }),
                  })
                : null;
          return (0, i.jsx)(l.ModalRoot, {
            transitionState: s,
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
                      title: a.intl.string(a.t["CIGa+/"]),
                      className: r.spacing,
                      children: [
                        (0, i.jsx)(l.TextInput, {
                          type: "password",
                          autoComplete: "off",
                          autoFocus: !0,
                          value: d,
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
                      disabled: u || 0 === d.length,
                      children: null != t ? t : a.intl.string(a.t["cY+Ooa"]),
                    }),
                    (0, i.jsx)(l.Button, {
                      onClick: this.handleCancel,
                      look: l.Button.Looks.LINK,
                      color: l.Button.Colors.PRIMARY,
                      children: a.intl.string(a.t["ETE/oK"]),
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
                { handleSubmit: n, onClose: s, onError: i } = this.props;
              this.setState({ isLoading: !0 }),
                n(t)
                  .then(
                    (e) => s(null != e ? e : void 0),
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
      h(u, "key", () => "password-confirm-modal"), (t.default = u);
    },
    7557: function (e, t, n) {
      n(47120), n(653041);
      var s,
        i,
        o = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        h = n(600164),
        u = n(680924);
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class c extends (s = l.PureComponent) {
        render() {
          let { className: e } = this.props;
          return (0, o.jsx)("input", {
            ref: this.setCodeBlockRef,
            className: r()(u.input, e),
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
            d(this, "_codeBlockRef", void 0),
            d(this, "setCodeBlockRef", (e) => {
              this._codeBlockRef = e;
            }),
            d(this, "handleKeyDown", (e) => {
              let t = 8 === e.which || 37 === e.which || 39 === e.which,
                n =
                  (e.which >= 48 && e.which <= 57) ||
                  (e.keyCode >= 96 && e.keyCode <= 105);
              !t && !n && e.preventDefault();
              let { onKeyDown: s } = this.props;
              null == s || s(e);
            }),
            d(this, "handleChange", (e) => {
              let { onChange: t } = this.props;
              null == t || t(e.currentTarget.value);
            });
        }
      }
      d(c, "defaultProps", { autoFocus: !1 });
      class p extends (i = l.PureComponent) {
        render() {
          let { className: e, inputClassName: t } = this.props,
            { codes: n } = this.state,
            s = [];
          for (let e = 0; e < n.length; e++)
            e === n.length / 2 &&
              s.push((0, o.jsx)("div", { className: u.spacer }, "spacer")),
              s.push(
                (0, o.jsx)(
                  c,
                  {
                    ref: (t) => this.setCodeBlockRef(e, t),
                    code: n[e],
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
            children: s,
          });
        }
        setCodeBlockRef(e, t) {
          this._codeBlockRefs[e] = t;
        }
        handleChange(e, t) {
          this.state.codes[e] = t;
          let n = this.getCodeOrFirstEmptyIndex();
          if ("string" == typeof n) this.submit(n);
          else {
            let e = this._codeBlockRefs[n];
            null == e || e.focus();
          }
        }
        handleKeyDown(e, t) {
          let { codes: n } = this.state;
          if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
            let t = e - 1;
            n[t] = "";
            let s = this._codeBlockRefs[t];
            null == s || s.focus();
          }
        }
        getCodeOrFirstEmptyIndex() {
          let { codes: e } = this.state,
            t = "";
          for (let n = 0; n < e.length; n++) {
            if (isNaN(parseInt(e[n]))) return n;
            t += e[n];
          }
          return t;
        }
        submit(e) {
          let { onSubmit: t } = this.props;
          null == t || t(e);
        }
        constructor(e) {
          super(e),
            d(this, "_codeBlockRefs", Array(this.props.count)),
            (this.state = { codes: Array(e.count) });
        }
      }
      d(p, "defaultProps", { count: 6 }), (t.Z = p);
    },
    317175: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(390547);
      var s = n(200651),
        i = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(658722),
        r = n.n(a),
        h = n(392711),
        u = n.n(h),
        d = n(217986),
        c = n(481060),
        p = n(600164),
        m = n(133080),
        f = n(388032),
        g = n(553258),
        C = n(852401);
      function y(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class x extends i.PureComponent {
        renderItems() {
          let { query: e } = this.state,
            t = d.Z.flatMap((e, t) => {
              let { alpha2: n, phoneCountryCodes: i, name: o } = e,
                l = (0, m.q9)(n);
              return i.map((e) => ({
                key: "".concat(t, "-").concat(e),
                name: o,
                translatedName: l,
                countryData: { name: o, alpha2: n, code: e },
                children: (0, s.jsxs)(p.Z, {
                  className: g.countryItem,
                  justify: p.Z.Justify.CENTER,
                  align: p.Z.Align.CENTER,
                  children: [
                    (0, s.jsx)(p.Z.Child, {
                      className: g.countryName,
                      children: l,
                    }),
                    (0, s.jsx)(p.Z.Child, {
                      className: g.countryCode,
                      grow: 0,
                      shrink: 0,
                      children: e,
                    }),
                  ],
                }),
              }));
            }),
            n = u()(t)
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
          return 0 === n.length
            ? (0, s.jsx)(c.PopoutList.Empty, {
                children: f.intl.string(f.t.PoWNfX),
              })
            : (0, s.jsx)(c.ScrollerAuto, {
                className: g.phoneFieldScroller,
                children: n,
              });
        }
        render() {
          let { className: e } = this.props;
          return (0, s.jsxs)(c.PopoutList, {
            className: l()(g.phoneFieldPopout, C.elevationBorderLow, e),
            children: [
              (0, s.jsx)(c.PopoutList.SearchBar, {
                query: this.state.query,
                placeholder: f.intl.string(f.t.hGOODg),
                onChange: this.onChangeQuery,
                onClear: this.onClearQuery,
                autoComplete: "off",
              }),
              (0, s.jsx)(c.PopoutList.Divider, {}),
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
              var t, n;
              null === (t = (n = this.props).onClick) ||
                void 0 === t ||
                t.call(n, e);
            }),
            (this.state = { query: "" });
        }
      }
    },
    200357: function (e, t, n) {
      n(47120);
      var s = n(200651),
        i = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(217986),
        r = n(481060),
        h = n(600164),
        u = n(259580),
        d = n(317175),
        c = n(388032),
        p = n(951046),
        m = n(852401),
        f = n(113207);
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class C extends i.PureComponent {
        render() {
          let { countryCode: e, phone: t, open: n } = this.state,
            { className: i, submitting: o } = this.props,
            [, a] = e.split("+");
          return (0, s.jsxs)(h.Z, {
            className: l()(p.phoneField, m.elevationLow, i),
            align: h.Z.Align.CENTER,
            grow: 0,
            children: [
              (0, s.jsxs)(r.Button, {
                size: r.ButtonSizes.SMALL,
                className: p.countryButton,
                color: r.ButtonColors.PRIMARY,
                innerClassName: p.countryButtonInner,
                onClick: this.handleTogglePopout,
                children: [
                  (0, s.jsxs)(h.Z, {
                    className: l()(p.countryCodeContainer, f.marginReset),
                    justify: h.Z.Justify.CENTER,
                    children: [
                      (0, s.jsx)("div", {
                        className: p.plusSign,
                        children: "+",
                      }),
                      (0, s.jsx)("div", {
                        className: p.countryCode,
                        children: a,
                      }),
                    ],
                  }),
                  (0, s.jsx)(u.Z, {
                    foreground: p.phoneFieldExpand,
                    expanded: n,
                    width: 16,
                    height: 16,
                  }),
                ],
              }),
              (0, s.jsx)("input", {
                "aria-label": c.intl.string(c.t["64bX0N"]),
                className: p.inputField,
                value: t,
                onChange: this.handleChange,
                onKeyPress: this.handleKeyPress,
                autoFocus: !0,
              }),
              (0, s.jsx)(r.Button, {
                className: p.sendButton,
                size: r.ButtonSizes.SMALL,
                submitting: o,
                onClick: this.handleSubmit,
                children: c.intl.string(c.t.TXNS7e),
              }),
              n ? (0, s.jsx)(d.Z, { onClick: this.handleClick }) : null,
            ],
          });
        }
        closePopout() {
          this.state.open && this.setState({ open: !1 });
        }
        constructor(e) {
          super(e),
            g(this, "handleChange", (e) => {
              this.closePopout(),
                this.setState({ phone: e.currentTarget.value });
            }),
            g(this, "handleKeyPress", (e) => {
              this.closePopout(),
                13 === e.which && (e.preventDefault(), this.handleSubmit());
            }),
            g(this, "handleSubmit", () => {
              let { onSubmit: e, submitting: t } = this.props,
                { countryCode: n, phone: s } = this.state;
              !t && (null == e || e("".concat(n).concat(s)));
            }),
            g(this, "handleTogglePopout", () => {
              this.setState({ open: !this.state.open });
            }),
            g(this, "handleClick", (e) => {
              let [t, n] = e.code.split(" ");
              this.setState({
                open: !1,
                countryCode: t,
                phone: null != n ? n : "",
              });
            });
          let [t, n] = a.Z.find(
            (e) => "United States" === e.name,
          ).phoneCountryCode.split(" ");
          this.state = { countryCode: t, phone: null != n ? n : "", open: !1 };
        }
      }
      t.Z = C;
    },
    145454: function (e, t, n) {
      n(47120);
      var s = n(200651),
        i = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(772848),
        r = n(990547),
        h = n(481060),
        u = n(600164),
        d = n(7557),
        c = n(200357),
        p = n(388032),
        m = n(656215),
        f = n(739017),
        g = n(113207);
      function C(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class y extends i.PureComponent {
        async componentDidMount() {
          let [e, { default: t }] = await Promise.all([
            n.e("93198").then(n.t.bind(n, 140523, 19)),
            n.e("23755").then(n.t.bind(n, 500923, 23)),
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
          let e, t, n;
          let {
            error: i,
            working: o,
            transitionState: a,
            validPhone: C,
          } = this.props;
          return (
            (e =
              null != i && "" !== i
                ? (0, s.jsx)("div", {
                    className: l()(m.description, m.error, g.marginBottom20),
                    children: i,
                  })
                : C
                  ? (0, s.jsx)("div", {
                      className: l()(m.description, g.marginBottom20),
                      children: p.intl.string(p.t["4qMI6O"]),
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", {
                          className: l()(m.description, g.marginBottom20),
                          children: p.intl.string(p.t.Vp9je3),
                        }),
                        (0, s.jsx)("div", {
                          className: l()(m.description, g.marginBottom20),
                          children: p.intl.format(p.t["3BTmqa"], {}),
                        }),
                      ],
                    })),
            (t = C
              ? (0, s.jsxs)(u.Z, {
                  className: m.field,
                  direction: u.Z.Direction.VERTICAL,
                  align: u.Z.Align.CENTER,
                  children: [
                    (0, s.jsx)(d.Z, { onSubmit: this.handleVerifyPhone }),
                    (0, s.jsx)(h.Button, {
                      className: g.marginTop8,
                      size: h.ButtonSizes.SMALL,
                      look: h.ButtonLooks.LINK,
                      color: h.ButtonColors.PRIMARY,
                      onClick: this.handleResendCode,
                      children: p.intl.string(p.t["5b60go"]),
                    }),
                  ],
                })
              : (0, s.jsx)(c.Z, {
                  className: m.field,
                  onSubmit: this.handleAddPhone,
                  submitting: o,
                })),
            (n = C ? p.intl.string(p.t.Xclkxs) : p.intl.string(p.t.uR76s7)),
            (0, s.jsxs)(h.ModalRoot, {
              impression: {
                impressionName: r.ImpressionNames.USER_VERIFY_PHONE,
              },
              transitionState: a,
              className: l()(
                m.phoneVerificationModal,
                f.vertical,
                f.alignCenter,
                f.justifyCenter,
                g.marginTop60,
              ),
              "aria-labelledby": this.headerId,
              children: [
                (0, s.jsx)("div", {
                  className: m.animationContainer,
                  ref: this.setLottieRef,
                }),
                (0, s.jsx)("div", {
                  className: l()(m.title, g.marginBottom8),
                  id: this.headerId,
                  children: n,
                }),
                e,
                t,
              ],
            })
          );
        }
        constructor(e) {
          super(e),
            C(this, "_animItem", null),
            C(this, "_lottieRef", void 0),
            C(this, "headerId", (0, a.Z)()),
            C(this, "setLottieRef", (e) => {
              this._lottieRef = e;
            }),
            C(this, "handleAddPhone", (e) => {
              this.state.animated || null == this._animItem
                ? this.setState({ phone: e })
                : (this._animItem.play(),
                  this.setState({ animated: !0, phone: e }));
              let { onAddPhone: t } = this.props;
              null == t || t(e);
            }),
            C(this, "handleVerifyPhone", (e) => {
              let { onVerifyPhone: t } = this.props;
              null == t || t(e);
            }),
            C(this, "handleResendCode", () => {
              let { onAddPhone: e } = this.props;
              null == e || e(this.state.phone);
            }),
            (this.state = { animated: !1, phone: "" });
        }
      }
      t.Z = y;
    },
    607018: function (e, t, n) {
      n.r(t), n(47120);
      var s = n(200651),
        i = n(192379),
        o = n(442837),
        l = n(279837),
        a = n(479531),
        r = n(144114),
        h = n(145454),
        u = n(23434),
        d = n(594174),
        c = n(1964),
        p = n(388032);
      t.default = i.forwardRef(function (e, t) {
        let { onAddedPhone: n, onClose: m, transitionState: f, reason: g } = e,
          C = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
          y = (0, o.e7)([u.Z], () => u.Z.getAction()),
          [x, b] = i.useState(null),
          [j, v] = i.useState(null),
          [N, P] = i.useState(null),
          [R, w] = i.useState(!1),
          k = i.useCallback(
            async (e) => {
              w(!0);
              try {
                c.Z.isPhoneReverification(C, y)
                  ? await r.Z.beginReverifyPhone(e, g)
                  : await r.Z.beginAddPhone(e, g),
                  P(null),
                  b(e);
              } catch (e) {
                P(new a.Z(e));
              }
              w(!1);
            },
            [C, g, y],
          ),
          S = i.useCallback(
            async (e) => {
              if (null != x && null != C) {
                w(!0);
                try {
                  let { token: t } = await r.Z.verifyPhone(x, e);
                  P(null), v(t);
                } catch (e) {
                  P(new a.Z(e));
                }
                w(!1);
              }
            },
            [C, x],
          ),
          Z = i.useCallback(
            async (e) => {
              if (null != j)
                c.Z.isPhoneReverification(C, y)
                  ? await r.Z.reverifyPhone(j, e, g)
                  : await r.Z.addPhone(j, e, g),
                  null == n || n(),
                  m();
            },
            [n, m, j, g, C, y],
          );
        return null != j
          ? (0, s.jsx)(l.default, {
              onClose: m,
              transitionState: f,
              title: p.intl.string(p.t.ZtCDc3),
              handleSubmit: Z,
            })
          : (0, s.jsx)(h.Z, {
              onClose: m,
              transitionState: f,
              error: null == N ? void 0 : N.getAnyErrorMessage(),
              working: R,
              validPhone: null != x,
              onAddPhone: k,
              onVerifyPhone: S,
            });
      });
    },
  },
]);
//# sourceMappingURL=fb7d725c35e0a8ef77c8.js.map
