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
        r = n(388032),
        a = n(943873);
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
      class c extends (s = o.PureComponent) {
        render() {
          let {
              title: e,
              actionText: t,
              children: n,
              transitionState: s,
            } = this.props,
            { error: h, isLoading: c, value: u } = this.state,
            d =
              o.Children.count(n) > 0
                ? (0, i.jsx)(l.Card, {
                    type: l.Card.Types.WARNING,
                    className: a.card,
                    children: (0, i.jsx)(l.Text, {
                      className: a.warning,
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
                    d,
                    (0, i.jsxs)(l.FormItem, {
                      title: r.intl.string(r.t["CIGa+/"]),
                      className: a.spacing,
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
                              className: a.error,
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
                      disabled: c || 0 === u.length,
                      children: null != t ? t : r.intl.string(r.t["cY+Ooa"]),
                    }),
                    (0, i.jsx)(l.Button, {
                      onClick: this.handleCancel,
                      look: l.Button.Looks.LINK,
                      color: l.Button.Colors.PRIMARY,
                      children: r.intl.string(r.t["ETE/oK"]),
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
      h(c, "key", () => "password-confirm-modal"), (t.default = c);
    },
    7557: function (e, t, n) {
      n(47120), n(653041);
      var s,
        i,
        o = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        h = n(600164),
        c = n(577491);
      function u(e, t, n) {
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
      class d extends (s = l.PureComponent) {
        render() {
          let { className: e } = this.props;
          return (0, o.jsx)("input", {
            ref: this.setCodeBlockRef,
            className: a()(c.input, e),
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
                n =
                  (e.which >= 48 && e.which <= 57) ||
                  (e.keyCode >= 96 && e.keyCode <= 105);
              !t && !n && e.preventDefault();
              let { onKeyDown: s } = this.props;
              null == s || s(e);
            }),
            u(this, "handleChange", (e) => {
              let { onChange: t } = this.props;
              null == t || t(e.currentTarget.value);
            });
        }
      }
      u(d, "defaultProps", { autoFocus: !1 });
      class p extends (i = l.PureComponent) {
        render() {
          let { className: e, inputClassName: t } = this.props,
            { codes: n } = this.state,
            s = [];
          for (let e = 0; e < n.length; e++)
            e === n.length / 2 &&
              s.push((0, o.jsx)("div", { className: c.spacer }, "spacer")),
              s.push(
                (0, o.jsx)(
                  d,
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
            u(this, "_codeBlockRefs", Array(this.props.count)),
            (this.state = { codes: Array(e.count) });
        }
      }
      u(p, "defaultProps", { count: 6 }), (t.Z = p);
    },
    317175: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(390547);
      var s = n(200651),
        i = n(192379),
        o = n(120356),
        l = n.n(o),
        r = n(658722),
        a = n.n(r),
        h = n(392711),
        c = n.n(h),
        u = n(217986),
        d = n(481060),
        p = n(600164),
        E = n(133080),
        m = n(388032),
        R = n(279793),
        f = n(517877);
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
      class g extends i.PureComponent {
        renderItems() {
          let { query: e } = this.state,
            t = u.Z.flatMap((e, t) => {
              let { alpha2: n, phoneCountryCodes: i, name: o } = e,
                l = (0, E.q9)(n);
              return i.map((e) => ({
                key: "".concat(t, "-").concat(e),
                name: o,
                translatedName: l,
                countryData: { name: o, alpha2: n, code: e },
                children: (0, s.jsxs)(p.Z, {
                  className: R.countryItem,
                  justify: p.Z.Justify.CENTER,
                  align: p.Z.Align.CENTER,
                  children: [
                    (0, s.jsx)(p.Z.Child, {
                      className: R.countryName,
                      children: l,
                    }),
                    (0, s.jsx)(p.Z.Child, {
                      className: R.countryCode,
                      grow: 0,
                      shrink: 0,
                      children: e,
                    }),
                  ],
                }),
              }));
            }),
            n = c()(t)
              .filter(
                (t) =>
                  0 === e.length ||
                  a()(e.toLowerCase(), t.name.toLowerCase()) ||
                  a()(e.toLowerCase(), t.translatedName.toLowerCase()),
              )
              .map((e) =>
                (0, i.createElement)(d.PopoutList.Item, {
                  ...e,
                  key: e.key,
                  onClick: () => this.onClick(e.countryData),
                }),
              )
              .value();
          return 0 === n.length
            ? (0, s.jsx)(d.PopoutList.Empty, {
                children: m.intl.string(m.t.PoWNfX),
              })
            : (0, s.jsx)(d.ScrollerAuto, {
                className: R.phoneFieldScroller,
                children: n,
              });
        }
        render() {
          let { className: e } = this.props;
          return (0, s.jsxs)(d.PopoutList, {
            className: l()(R.phoneFieldPopout, f.elevationBorderLow, e),
            children: [
              (0, s.jsx)(d.PopoutList.SearchBar, {
                query: this.state.query,
                placeholder: m.intl.string(m.t.hGOODg),
                onChange: this.onChangeQuery,
                onClear: this.onClearQuery,
                autoComplete: "off",
              }),
              (0, s.jsx)(d.PopoutList.Divider, {}),
              this.renderItems(),
            ],
          });
        }
        constructor(e) {
          super(e),
            C(this, "onChangeQuery", (e) => {
              this.setState({ query: e });
            }),
            C(this, "onClearQuery", () => {
              this.setState({ query: "" });
            }),
            C(this, "onClick", (e) => {
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
        r = n(217986),
        a = n(481060),
        h = n(600164),
        c = n(259580),
        u = n(317175),
        d = n(388032),
        p = n(198317),
        E = n(517877),
        m = n(275477);
      function R(e, t, n) {
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
      class f extends i.PureComponent {
        render() {
          let { countryCode: e, phone: t, open: n } = this.state,
            { className: i, submitting: o } = this.props,
            [, r] = e.split("+");
          return (0, s.jsxs)(h.Z, {
            className: l()(p.phoneField, E.elevationLow, i),
            align: h.Z.Align.CENTER,
            grow: 0,
            children: [
              (0, s.jsxs)(a.Button, {
                size: a.ButtonSizes.SMALL,
                className: p.countryButton,
                color: a.ButtonColors.PRIMARY,
                innerClassName: p.countryButtonInner,
                onClick: this.handleTogglePopout,
                children: [
                  (0, s.jsxs)(h.Z, {
                    className: l()(p.countryCodeContainer, m.marginReset),
                    justify: h.Z.Justify.CENTER,
                    children: [
                      (0, s.jsx)("div", {
                        className: p.plusSign,
                        children: "+",
                      }),
                      (0, s.jsx)("div", {
                        className: p.countryCode,
                        children: r,
                      }),
                    ],
                  }),
                  (0, s.jsx)(c.Z, {
                    foreground: p.phoneFieldExpand,
                    expanded: n,
                    width: 16,
                    height: 16,
                  }),
                ],
              }),
              (0, s.jsx)("input", {
                "aria-label": d.intl.string(d.t["64bX0N"]),
                className: p.inputField,
                value: t,
                onChange: this.handleChange,
                onKeyPress: this.handleKeyPress,
                autoFocus: !0,
              }),
              (0, s.jsx)(a.Button, {
                className: p.sendButton,
                size: a.ButtonSizes.SMALL,
                submitting: o,
                onClick: this.handleSubmit,
                children: d.intl.string(d.t.TXNS7e),
              }),
              n ? (0, s.jsx)(u.Z, { onClick: this.handleClick }) : null,
            ],
          });
        }
        closePopout() {
          this.state.open && this.setState({ open: !1 });
        }
        constructor(e) {
          super(e),
            R(this, "handleChange", (e) => {
              this.closePopout(),
                this.setState({ phone: e.currentTarget.value });
            }),
            R(this, "handleKeyPress", (e) => {
              this.closePopout(),
                13 === e.which && (e.preventDefault(), this.handleSubmit());
            }),
            R(this, "handleSubmit", () => {
              let { onSubmit: e, submitting: t } = this.props,
                { countryCode: n, phone: s } = this.state;
              !t && (null == e || e("".concat(n).concat(s)));
            }),
            R(this, "handleTogglePopout", () => {
              this.setState({ open: !this.state.open });
            }),
            R(this, "handleClick", (e) => {
              let [t, n] = e.code.split(" ");
              this.setState({
                open: !1,
                countryCode: t,
                phone: null != n ? n : "",
              });
            });
          let [t, n] = r.Z.find(
            (e) => "United States" === e.name,
          ).phoneCountryCode.split(" ");
          this.state = { countryCode: t, phone: null != n ? n : "", open: !1 };
        }
      }
      t.Z = f;
    },
    145454: function (e, t, n) {
      n(47120);
      var s = n(200651),
        i = n(192379),
        o = n(120356),
        l = n.n(o),
        r = n(772848),
        a = n(990547),
        h = n(481060),
        c = n(600164),
        u = n(7557),
        d = n(200357),
        p = n(388032),
        E = n(498604),
        m = n(847854),
        R = n(275477);
      function f(e, t, n) {
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
        async componentDidMount() {
          let [e, { default: t }] = await Promise.all([
            n.e("93198").then(n.t.bind(n, 140523, 19)),
            Promise.resolve().then(n.t.bind(n, 500923, 23)),
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
            transitionState: r,
            validPhone: f,
          } = this.props;
          return (
            (e =
              null != i && "" !== i
                ? (0, s.jsx)("div", {
                    className: l()(E.description, E.error, R.marginBottom20),
                    children: i,
                  })
                : f
                  ? (0, s.jsx)("div", {
                      className: l()(E.description, R.marginBottom20),
                      children: p.intl.string(p.t["4qMI6O"]),
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", {
                          className: l()(E.description, R.marginBottom20),
                          children: p.intl.string(p.t.Vp9je3),
                        }),
                        (0, s.jsx)("div", {
                          className: l()(E.description, R.marginBottom20),
                          children: p.intl.format(p.t["3BTmqa"], {}),
                        }),
                      ],
                    })),
            (t = f
              ? (0, s.jsxs)(c.Z, {
                  className: E.field,
                  direction: c.Z.Direction.VERTICAL,
                  align: c.Z.Align.CENTER,
                  children: [
                    (0, s.jsx)(u.Z, { onSubmit: this.handleVerifyPhone }),
                    (0, s.jsx)(h.Button, {
                      className: R.marginTop8,
                      size: h.ButtonSizes.SMALL,
                      look: h.ButtonLooks.LINK,
                      color: h.ButtonColors.PRIMARY,
                      onClick: this.handleResendCode,
                      children: p.intl.string(p.t["5b60go"]),
                    }),
                  ],
                })
              : (0, s.jsx)(d.Z, {
                  className: E.field,
                  onSubmit: this.handleAddPhone,
                  submitting: o,
                })),
            (n = f ? p.intl.string(p.t.Xclkxs) : p.intl.string(p.t.uR76s7)),
            (0, s.jsxs)(h.ModalRoot, {
              impression: {
                impressionName: a.ImpressionNames.USER_VERIFY_PHONE,
              },
              transitionState: r,
              className: l()(
                E.phoneVerificationModal,
                m.vertical,
                m.alignCenter,
                m.justifyCenter,
                R.marginTop60,
              ),
              "aria-labelledby": this.headerId,
              children: [
                (0, s.jsx)("div", {
                  className: E.animationContainer,
                  ref: this.setLottieRef,
                }),
                (0, s.jsx)("div", {
                  className: l()(E.title, R.marginBottom8),
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
            f(this, "_animItem", null),
            f(this, "_lottieRef", void 0),
            f(this, "headerId", (0, r.Z)()),
            f(this, "setLottieRef", (e) => {
              this._lottieRef = e;
            }),
            f(this, "handleAddPhone", (e) => {
              this.state.animated || null == this._animItem
                ? this.setState({ phone: e })
                : (this._animItem.play(),
                  this.setState({ animated: !0, phone: e }));
              let { onAddPhone: t } = this.props;
              null == t || t(e);
            }),
            f(this, "handleVerifyPhone", (e) => {
              let { onVerifyPhone: t } = this.props;
              null == t || t(e);
            }),
            f(this, "handleResendCode", () => {
              let { onAddPhone: e } = this.props;
              null == e || e(this.state.phone);
            }),
            (this.state = { animated: !1, phone: "" });
        }
      }
      t.Z = C;
    },
    1964: function (e, t, n) {
      var s = n(392711),
        i = n.n(s),
        o = n(981631),
        l = n(388032);
      let {
          CAPTCHA: r,
          EMAIL: a,
          PHONE: h,
          REVERIFY_EMAIL: c,
          REVERIFY_PHONE: u,
        } = o.PUi,
        d = {
          [o.c2C.REQUIRE_VERIFIED_EMAIL]: [a],
          [o.c2C.REQUIRE_VERIFIED_PHONE]: [h],
          [o.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
          [o.c2C.REQUIRE_REVERIFIED_PHONE]: [u],
          [o.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [a, h],
          [o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [h, c],
          [o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [a, u],
          [o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, u],
          [o.c2C.REQUIRE_CAPTCHA]: [r],
          [o.c2C.AGREEMENTS]: [],
        };
      t.Z = {
        isPhoneReverification: (e, t) =>
          void 0 !== e &&
          e.isPhoneVerified() &&
          (t === o.c2C.REQUIRE_REVERIFIED_PHONE ||
            t === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            t === o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) =>
          e === o.c2C.REQUIRE_REVERIFIED_EMAIL ||
          e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
          e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) =>
          null == e || "symbol" == typeof e ? [] : d[e],
        getButtonTitle(e) {
          switch (e) {
            case o.PUi.EMAIL:
              return l.intl.string(l.t["1MPz29"]);
            case o.PUi.PHONE:
              return l.intl.string(l.t.mjJecn);
            case o.PUi.REVERIFY_EMAIL:
              return l.intl.string(l.t.nmdPFR);
            case o.PUi.REVERIFY_PHONE:
              return l.intl.string(l.t.of2129);
            default:
              return l.intl.string(l.t["oF6+W1"]);
          }
        },
        areVerificationTypesEqual: (e, t) => i().isEqual(e, t),
      };
    },
    607018: function (e, t, n) {
      n.r(t), n(47120);
      var s = n(200651),
        i = n(192379),
        o = n(442837),
        l = n(279837),
        r = n(479531),
        a = n(144114),
        h = n(145454),
        c = n(23434),
        u = n(594174),
        d = n(1964),
        p = n(388032);
      t.default = i.forwardRef(function (e, t) {
        let { onAddedPhone: n, onClose: E, transitionState: m, reason: R } = e,
          f = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
          C = (0, o.e7)([c.Z], () => c.Z.getAction()),
          [g, I] = i.useState(null),
          [y, _] = i.useState(null),
          [P, x] = i.useState(null),
          [N, v] = i.useState(!1),
          b = i.useCallback(
            async (e) => {
              v(!0);
              try {
                d.Z.isPhoneReverification(f, C)
                  ? await a.Z.beginReverifyPhone(e, R)
                  : await a.Z.beginAddPhone(e, R),
                  x(null),
                  I(e);
              } catch (e) {
                x(new r.Z(e));
              }
              v(!1);
            },
            [f, R, C],
          ),
          j = i.useCallback(
            async (e) => {
              if (null != g && null != f) {
                v(!0);
                try {
                  let { token: t } = await a.Z.verifyPhone(g, e);
                  x(null), _(t);
                } catch (e) {
                  x(new r.Z(e));
                }
                v(!1);
              }
            },
            [f, g],
          ),
          w = i.useCallback(
            async (e) => {
              if (null != y)
                d.Z.isPhoneReverification(f, C)
                  ? await a.Z.reverifyPhone(y, e, R)
                  : await a.Z.addPhone(y, e, R),
                  null == n || n(),
                  E();
            },
            [n, E, y, R, f, C],
          );
        return null != y
          ? (0, s.jsx)(l.default, {
              onClose: E,
              transitionState: m,
              title: p.intl.string(p.t.ZtCDc3),
              handleSubmit: w,
            })
          : (0, s.jsx)(h.Z, {
              onClose: E,
              transitionState: m,
              error: null == P ? void 0 : P.getAnyErrorMessage(),
              working: N,
              validPhone: null != g,
              onAddPhone: b,
              onVerifyPhone: j,
            });
      });
    },
  },
]);
//# sourceMappingURL=d580855bb977a76e996a.js.map
