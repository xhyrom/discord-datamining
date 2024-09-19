"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11260"],
  {
    26230: function (e) {
      e.exports = "/assets/afd44ae05126b5fab40d.svg";
    },
    935227: function (e) {
      e.exports = "/assets/50b96601171fd361101c.svg";
    },
    479495: function (e, t, s) {
      s(757143);
      var n,
        r = s(735250),
        i = s(470079),
        a = s(120356),
        o = s.n(a),
        l = s(593473),
        c = s(873546),
        u = s(442837),
        d = s(570140),
        h = s(893776),
        p = s(129293),
        m = s(388905),
        f = s(17894),
        C = s(124860),
        g = s(108427),
        x = s(314897),
        N = s(585483),
        v = s(981631),
        E = s(689938),
        S = s(113207);
      function A(e, t, s) {
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
      u.ZP.initialize();
      class j extends (n = i.PureComponent) {
        componentDidMount() {
          (0, g.e)("reset_password");
        }
        renderPasswordReset() {
          let { password: e, error: t, hasCancel: n } = this.state,
            i = this.isSubmitting(),
            a = null != t ? t : this.renderError("password");
          return (0, r.jsxs)(m.ZP, {
            onSubmit: this.handleSubmit,
            tag: "form",
            children: [
              (0, r.jsx)("img", {
                alt: "",
                src: null == a ? s(26230) : s(935227),
                className: S.marginBottom20,
              }),
              (0, r.jsx)(m.Dx, { children: E.Z.Messages.RESET_PASSWORD_TITLE }),
              (0, r.jsxs)(m.gO, {
                className: S.marginTop20,
                children: [
                  (0, r.jsx)(m.II, {
                    label: E.Z.Messages.FORM_LABEL_NEW_PASSWORD,
                    className: S.marginBottom20,
                    name: "password",
                    value: e,
                    onChange: (e) => this.setState({ password: e }),
                    error: a,
                    type: "password",
                  }),
                  (0, r.jsx)(m.zx, {
                    type: "submit",
                    submitting: i,
                    children: E.Z.Messages.CHANGE_PASSWORD,
                  }),
                  n
                    ? (0, r.jsx)(m.zx, {
                        className: S.marginTop8,
                        onClick: this.handleGoToLogin,
                        submitting: i,
                        color: m.zx.Colors.PRIMARY,
                        children: E.Z.Messages.CANCEL,
                      })
                    : null,
                ],
              }),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, r.jsx)(m.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(C.Cd, {
              mfaFinish: (e) => {
                let { mfaType: t, data: s } = e;
                return this.handleTokenSubmitMFAv2(t, s);
              },
              mfaChallenge: e,
              onEarlyClose: () => {
                d.Z.dispatch({ type: "LOGIN_RESET" });
              },
              width: 480,
            }),
          });
        }
        renderSucceeded() {
          return (0, r.jsxs)(m.ZP, {
            children: [
              (0, r.jsx)("img", {
                alt: "",
                src: s(26230),
                className: o()(S.marginBottom20, c.tq ? S.marginTop20 : ""),
              }),
              (0, r.jsx)(m.Dx, {
                className: S.marginBottom40,
                children: E.Z.Messages.RESET_PASSWORD_SUCCESS_TITLE,
              }),
              (0, r.jsx)(m.zx, {
                onClick: this.handleOpenApp,
                children: E.Z.Messages.VERIFICATION_OPEN_DISCORD,
              }),
            ],
          });
        }
        render() {
          return this.state.success
            ? this.renderSucceeded()
            : null != this.props.mfaTicket && "" !== this.props.mfaTicket
              ? this.renderMFA()
              : this.renderPasswordReset();
        }
        constructor(e) {
          var t;
          super(e),
            A(this, "handleSubmit", async (e) => {
              let {
                  location: t,
                  onLoginSuccess: s,
                  source: n,
                  resetToken: r,
                } = this.props,
                { password: i, error: a } = this.state;
              if ((null != e && e.preventDefault(), 0 === i.length)) {
                this.setState({ error: E.Z.Messages.PASSWORD_REQUIRED }),
                  N.S.dispatch(v.CkL.WAVE_EMPHASIZE);
                return;
              }
              null != a && this.setState({ error: null });
              let o = r;
              if ((null != t && (o = (0, p.Z)(t)), null != o)) {
                this.setState({ working: !0 });
                try {
                  let {
                    result: e,
                    sms: t,
                    webauthn: r,
                    ticket: a,
                    token: l,
                    totp: c,
                    backup: u,
                  } = await h.Z.resetPassword(o, i, n);
                  e === h.c.MFA
                    ? d.Z.dispatch({
                        type: "LOGIN_MFA_STEP",
                        ticket: a,
                        sms: t,
                        webauthn: r,
                        totp: c,
                        backup: u,
                      })
                    : null != s
                      ? s(l)
                      : (d.Z.dispatch({ type: "LOGIN_SUCCESS", token: l }),
                        this.handlePasswordChangeSuccess());
                } catch (e) {}
                this.setState({ working: !1 });
              }
            }),
            A(this, "handleTokenSubmitMFAv2", (e, t) => {
              let {
                  location: s,
                  mfaTicket: n,
                  onLoginSuccess: r,
                  resetToken: i,
                  source: a,
                } = this.props,
                { password: o } = this.state;
              if (0 === o.length)
                return d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
              let l = i;
              return (null != s && (l = (0, p.Z)(s)), null == l)
                ? (d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject())
                : h.Z.resetPasswordMFAv2({
                    method: e,
                    code: t,
                    ticket: n,
                    password: o,
                    token: l,
                    source: a,
                  }).then((e) => {
                    null != r
                      ? r(e)
                      : (d.Z.dispatch({ type: "LOGIN_SUCCESS", token: e }),
                        this.handlePasswordChangeSuccess());
                  });
            }),
            A(this, "handlePasswordChangeSuccess", () => {
              let { replaceWith: e } = this.props;
              if (c.Em || c.tq) {
                this.setState({ success: !0 });
                return;
              }
              e(v.Z5c.APP);
            }),
            A(this, "handleGoToLogin", () => {
              let { transitionTo: e } = this.props;
              h.Z.loginReset(), e(v.Z5c.LOGIN);
            }),
            A(this, "isSubmitting", () => {
              let { loginStatus: e } = this.props,
                { working: t } = this.state;
              return t || e === v.u34.LOGGING_IN_MFA;
            }),
            A(this, "handleOpenApp", () => {
              (0, f.Z)("password_reset");
            }),
            A(
              this,
              "hasError",
              (e) => null != this.props.errors[e] || null != this.state.error,
            ),
            A(this, "renderError", (e) => {
              let { errors: t } = this.props;
              if (this.hasError(e)) {
                let s = t[e];
                return Array.isArray(s) ? s[0] : s;
              }
              return null;
            });
          let s =
            (null === (t = this.props.location) || void 0 === t
              ? void 0
              : t.search) != null && "" !== this.props.location.search
              ? (0, l.parse)(this.props.location.search)
              : null;
          this.state = {
            method: "",
            password: "",
            code: "",
            error: null,
            hasCancel: null != s && null != s.from_login,
            working: !1,
            success: !1,
          };
        }
      }
      A(j, "defaultProps", {
        transitionTo: (e) => s.g.location.assign(e),
        replaceWith: (e) => s.g.location.replace(e),
      });
      t.Z = function (e) {
        let t = (0, u.cj)([x.default], () => ({
          loginStatus: x.default.getLoginStatus(),
          mfaTicket: x.default.getMFATicket(),
          errors: x.default.getErrors(),
          mfaMethods: x.default.getMFAMethods(),
        }));
        return (0, r.jsx)(j, { ...e, ...t });
      };
    },
    129293: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = s(593473);
      function r(e) {
        let t = null != e.hash && "" !== e.hash ? (0, n.parse)(e.hash) : null;
        if ((null == t ? void 0 : t.token) != null) return t.token;
        let s =
          null != e.search && "" !== e.search ? (0, n.parse)(e.search) : null;
        return (null == s ? void 0 : s.token) != null ? s.token : null;
      }
    },
    379760: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(735250);
      s(470079);
      var r = s(481060),
        i = s(600164),
        a = s(7557),
        o = s(388905),
        l = s(689938),
        c = s(985772),
        u = s(113207);
      function d(e) {
        let { title: t, subtitle: s, error: d, onSubmit: h, onCancel: p } = e;
        return (0, n.jsxs)(i.Z, {
          direction: i.Z.Direction.VERTICAL,
          children: [
            (0, n.jsx)(o.Dx, { className: u.marginBottom8, children: t }),
            (0, n.jsx)(o.DK, { className: c.subTitle, children: s }),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)(a.Z, { inputClassName: c.codeInput, onSubmit: h }),
                null != d
                  ? (0, n.jsx)(r.Text, {
                      className: c.error,
                      variant: "text-sm/normal",
                      children: d,
                    })
                  : null,
              ],
            }),
            null != p &&
              (0, n.jsx)(r.Button, {
                className: c.button,
                onClick: p,
                color: r.Button.Colors.PRIMARY,
                children: l.Z.Messages.CANCEL,
              }),
          ],
        });
      }
    },
    7557: function (e, t, s) {
      s(47120), s(653041);
      var n,
        r,
        i = s(735250),
        a = s(470079),
        o = s(120356),
        l = s.n(o),
        c = s(600164),
        u = s(680924);
      function d(e, t, s) {
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
      class h extends (n = a.PureComponent) {
        render() {
          let { className: e } = this.props;
          return (0, i.jsx)("input", {
            ref: this.setCodeBlockRef,
            className: l()(u.input, e),
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
                s =
                  (e.which >= 48 && e.which <= 57) ||
                  (e.keyCode >= 96 && e.keyCode <= 105);
              !t && !s && e.preventDefault();
              let { onKeyDown: n } = this.props;
              null == n || n(e);
            }),
            d(this, "handleChange", (e) => {
              let { onChange: t } = this.props;
              null == t || t(e.currentTarget.value);
            });
        }
      }
      d(h, "defaultProps", { autoFocus: !1 });
      class p extends (r = a.PureComponent) {
        render() {
          let { className: e, inputClassName: t } = this.props,
            { codes: s } = this.state,
            n = [];
          for (let e = 0; e < s.length; e++)
            e === s.length / 2 &&
              n.push((0, i.jsx)("div", { className: u.spacer }, "spacer")),
              n.push(
                (0, i.jsx)(
                  h,
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
          return (0, i.jsx)(c.Z, {
            align: c.Z.Align.CENTER,
            justify: c.Z.Justify.CENTER,
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
            d(this, "_codeBlockRefs", Array(this.props.count)),
            (this.state = { codes: Array(e.count) });
        }
      }
      d(p, "defaultProps", { count: 6 }), (t.Z = p);
    },
    760213: function (e, t, s) {
      s.d(t, {
        W: function () {
          return n;
        },
        Z: function () {
          return T;
        },
      }),
        s(773603);
      var n,
        r,
        i = s(735250),
        a = s(470079),
        o = s(120356),
        l = s.n(o),
        c = s(442837),
        u = s(481060),
        d = s(893776),
        h = s(239091),
        p = s(598077),
        m = s(314897),
        f = s(246946),
        C = s(594174),
        g = s(626135),
        x = s(51144),
        N = s(480387),
        v = s(726745),
        E = s(251423),
        S = s(981631),
        A = s(689938),
        j = s(516603);
      function y(e) {
        let { actionText: t, user: s, onAction: n } = e,
          {
            currentUser: r,
            hidePrivateData: a,
            isAuthenticated: o,
          } = (0, c.cj)([C.default, f.Z, m.default], () => ({
            currentUser: C.default.getCurrentUser(),
            hidePrivateData: f.Z.hidePersonalInformation,
            isAuthenticated: m.default.isAuthenticated(),
          })),
          E = new p.Z(s),
          y = o && (null == r ? void 0 : r.id) === E.id,
          T = s.tokenStatus === v.q.INVALID,
          I = a || E.isPomelo() ? null : "#".concat(E.discriminator),
          _ = null;
        return (
          y
            ? (_ = (0, i.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: j.hintText,
                color: "text-positive",
                children: A.Z.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT,
              }))
            : T &&
              (_ = (0, i.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: j.hintText,
                color: "text-danger",
                children: A.Z.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN,
              })),
          (0, i.jsx)("div", {
            className: j.accountCard,
            children: (0, i.jsxs)("div", {
              className: j.userDetails,
              children: [
                (0, i.jsx)(u.Avatar, {
                  src: E.getAvatarURL(void 0, 40),
                  size: u.AvatarSizes.SIZE_40,
                  "aria-label": s.username,
                }),
                (0, i.jsxs)("div", {
                  className: l()(j.usernameSection, {
                    [j.hasActionMaxWidth]: !y,
                  }),
                  children: [
                    (0, i.jsxs)("div", {
                      className: j.username,
                      children: [
                        (0, i.jsx)(u.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          className: j.textOverflow,
                          children: x.ZP.getUserTag(E, {
                            mode: "username",
                            identifiable: a ? "never" : "always",
                          }),
                        }),
                        (0, i.jsx)(u.Text, {
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: I,
                        }),
                      ],
                    }),
                    _,
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: j.userActions,
                  children: [
                    !y &&
                      (0, i.jsx)(u.Button, {
                        onClick: function () {
                          if (T) {
                            n(0, s.id);
                            return;
                          }
                          g.default.track(S.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                            location: { section: S.jXE.MANAGE_ACCOUNTS_MODAL },
                          }),
                            N.yD(s.id),
                            n(1, s.id);
                        },
                        color: u.Button.Colors.PRIMARY,
                        children: T
                          ? A.Z.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN
                          : t,
                      }),
                    (0, i.jsx)(u.Button, {
                      className: j.userActionMenu,
                      onClick: function (e) {
                        (0, h.vq)(e, (e) => {
                          let { onSelect: t } = e;
                          return (0, i.jsx)(u.Menu, {
                            "aria-label":
                              A.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                            navId: "manage-multi-account",
                            onClose: h.Zy,
                            onSelect: t,
                            children: (0, i.jsx)(u.MenuItem, {
                              id: "remove-account",
                              label:
                                A.Z.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                              action: () => {
                                !(function () {
                                  d.Z.logout(null, s.id).finally(() => {
                                    N.Zd(s.id);
                                  });
                                  let e = {};
                                  null != r
                                    ? (e.section = S.jXE.MANAGE_ACCOUNTS_MODAL)
                                    : (e.page = S.Usc.LOGIN),
                                    g.default.track(
                                      S.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE,
                                      { location: e },
                                    ),
                                    n(2, s.id);
                                })(),
                                  null != t && t();
                              },
                              color: "danger",
                            }),
                          });
                        });
                      },
                      size: u.Button.Sizes.ICON,
                      look: u.Button.Looks.BLANK,
                      color: u.Button.Colors.WHITE,
                      "aria-label": A.Z.Messages.MORE_OPTIONS,
                      children: (0, i.jsx)(u.MoreHorizontalIcon, {
                        size: "md",
                        color: "currentColor",
                        className: j.overflowMenuIcon,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function T(e) {
        let { actionText: t, onAction: s } = e,
          { isLoading: n, multiAccountUsers: r } = (0, E.L)();
        return (0, i.jsx)("div", {
          className: j.list,
          children: n
            ? (0, i.jsx)(u.Spinner, {})
            : r.map((e, n) =>
                (0, i.jsxs)(
                  a.Fragment,
                  {
                    children: [
                      (0, i.jsx)(
                        y,
                        { user: e, actionText: t, onAction: s },
                        e.id,
                      ),
                      r.length - 1 !== n &&
                        (0, i.jsx)("div", {
                          role: "separator",
                          className: j.separator,
                        }),
                    ],
                  },
                  e.id,
                ),
              ),
        });
      }
      ((r = n || (n = {}))[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED");
    },
    742458: function (e, t, s) {
      var n, r;
      s.d(t, {
        Nz: function () {
          return n;
        },
        o9: function () {
          return o;
        },
      }),
        ((r = n || (n = {})).PHONE = "phone"),
        (r.EMAIL = "email");
      let i = /^[-() \d]+$/,
        a = (e) => e.startsWith("+");
      function o(e, t) {
        return "phone" === e
          ? !a(t)
          : "email" !== e && !(t.length < 3) && i.test(t);
      }
    },
    766650: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return h;
        },
      }),
        s(47120);
      var n = s(735250),
        r = s(470079),
        i = s(120356),
        a = s.n(i),
        o = s(526629),
        l = s(481060),
        c = s(144114),
        u = s(317175),
        d = s(760617);
      function h(e) {
        let { show: t, alpha2: s, countryCode: i } = e,
          h = r.useRef(null),
          [p, m] = r.useState(0),
          [f, C] = r.useState(!1);
        r.useEffect(() => {
          function e() {
            var e, s;
            m(
              t &&
                null !==
                  (s =
                    null === (e = h.current) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect().width) &&
                void 0 !== s
                ? s
                : 0,
            );
          }
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, [t, s, i]);
        let g = (0, l.useSpring)({
            width: "".concat(p, "px"),
            onStart: () => {
              C(!0);
            },
            onRest: () => {
              C(!1);
            },
          }),
          x = (e) => {
            c.Z.setCountryCode(e);
          };
        return (0, n.jsx)(l.Popout, {
          position: "top",
          renderPopout: (e) =>
            (0, n.jsx)(u.Z, {
              className: d.popout,
              onClick: (t) => {
                x(t), e.closePopout();
              },
            }),
          children: (e) =>
            (0, n.jsx)("div", {
              className: a()(d.outerContainer, { [d.hidden]: !(t || f) }),
              children: (0, n.jsx)(o.animated.div, {
                className: d.container,
                style: g,
                children: (0, n.jsxs)("div", {
                  className: d.innerContainer,
                  ref: h,
                  children: [
                    (0, n.jsxs)(l.Clickable, {
                      ...e,
                      className: d.countryCode,
                      children: [s, " ", i],
                    }),
                    (0, n.jsx)("div", { className: d.separator }),
                  ],
                }),
              }),
            }),
        });
      }
    },
    317175: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return N;
        },
      }),
        s(390547);
      var n = s(735250),
        r = s(470079),
        i = s(120356),
        a = s.n(i),
        o = s(658722),
        l = s.n(o),
        c = s(392711),
        u = s.n(c),
        d = s(217986),
        h = s(481060),
        p = s(600164),
        m = s(133080),
        f = s(689938),
        C = s(553258),
        g = s(852401);
      function x(e, t, s) {
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
      class N extends r.PureComponent {
        renderItems() {
          let { query: e } = this.state,
            t = d.Z.flatMap((e, t) => {
              let { alpha2: s, phoneCountryCodes: r, name: i } = e,
                a = (0, m.q9)(s);
              return r.map((e) => ({
                key: "".concat(t, "-").concat(e),
                name: i,
                translatedName: a,
                countryData: { name: i, alpha2: s, code: e },
                children: (0, n.jsxs)(p.Z, {
                  className: C.countryItem,
                  justify: p.Z.Justify.CENTER,
                  align: p.Z.Align.CENTER,
                  children: [
                    (0, n.jsx)(p.Z.Child, {
                      className: C.countryName,
                      children: a,
                    }),
                    (0, n.jsx)(p.Z.Child, {
                      className: C.countryCode,
                      grow: 0,
                      shrink: 0,
                      children: e,
                    }),
                  ],
                }),
              }));
            }),
            s = u()(t)
              .filter(
                (t) =>
                  0 === e.length ||
                  l()(e.toLowerCase(), t.name.toLowerCase()) ||
                  l()(e.toLowerCase(), t.translatedName.toLowerCase()),
              )
              .map((e) =>
                (0, r.createElement)(h.PopoutList.Item, {
                  ...e,
                  key: e.key,
                  onClick: () => this.onClick(e.countryData),
                }),
              )
              .value();
          return 0 === s.length
            ? (0, n.jsx)(h.PopoutList.Empty, { children: f.Z.Messages.NONE })
            : (0, n.jsx)(h.ScrollerAuto, {
                className: C.phoneFieldScroller,
                children: s,
              });
        }
        render() {
          let { className: e } = this.props;
          return (0, n.jsxs)(h.PopoutList, {
            className: a()(C.phoneFieldPopout, g.elevationBorderLow, e),
            children: [
              (0, n.jsx)(h.PopoutList.SearchBar, {
                query: this.state.query,
                placeholder: f.Z.Messages.SEARCH_COUNTRY,
                onChange: this.onChangeQuery,
                onClear: this.onClearQuery,
                autoComplete: "off",
              }),
              (0, n.jsx)(h.PopoutList.Divider, {}),
              this.renderItems(),
            ],
          });
        }
        constructor(e) {
          super(e),
            x(this, "onChangeQuery", (e) => {
              this.setState({ query: e });
            }),
            x(this, "onClearQuery", () => {
              this.setState({ query: "" });
            }),
            x(this, "onClick", (e) => {
              var t, s;
              null === (t = (s = this.props).onClick) ||
                void 0 === t ||
                t.call(s, e);
            }),
            (this.state = { query: "" });
        }
      }
    },
    952802: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return p;
        },
      }),
        s(47120);
      var n = s(735250),
        r = s(470079),
        i = s(120356),
        a = s.n(i),
        o = s(481060),
        l = s(313201),
        c = s(742458),
        u = s(766650),
        d = s(279006),
        h = s(803636);
      function p(e) {
        let {
            alpha2: t,
            countryCode: s,
            forceMode: i,
            label: p,
            error: m,
            className: f,
            required: C,
            value: g,
            setRef: x,
            placeholder: N,
            autoFocus: v,
            maxLength: E,
            spellCheck: S,
            autoComplete: A,
            autoCapitalize: j,
            autoCorrect: y,
            onChange: T,
            inputClassName: I,
          } = e,
          _ = (0, l.Dt)(),
          [Z, O] = r.useState(!1),
          k = (0, c.o9)(i, g);
        return (0, n.jsx)(o.FormItem, {
          title: p,
          error: m,
          className: f,
          required: C,
          tag: "label",
          htmlFor: _,
          children: (0, n.jsxs)("div", {
            className: a()(h.input, d.input, I, {
              [h.error]: null != m,
              [h.focused]: Z,
            }),
            children: [
              (0, n.jsx)(u.Z, { show: k, alpha2: t, countryCode: s }),
              (0, n.jsx)(o.TextInput, {
                id: _,
                name: "email",
                type: i === c.Nz.EMAIL ? "email" : "text",
                value: g,
                inputRef: x,
                placeholder: N,
                "aria-label": p,
                required: C,
                onChange: function (e) {
                  let t = (0, c.o9)(i, e) ? s : "";
                  T(e, t);
                },
                autoComplete: A,
                autoCapitalize: j,
                autoCorrect: y,
                autoFocus: v,
                maxLength: E,
                spellCheck: S,
                className: d.inputWrapper,
                inputClassName: d.inputField,
                onFocus: () => O(!0),
                onBlur: () => O(!1),
              }),
            ],
          }),
        });
      }
    },
    849055: function (e, t, s) {
      function n(e) {
        let t = "==".slice(0, (4 - (e.length % 4)) % 4),
          s = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
          n = new ArrayBuffer(s.length),
          r = new Uint8Array(n);
        for (let e = 0; e < s.length; e++) r[e] = s.charCodeAt(e);
        return n;
      }
      function r(e) {
        let t = new Uint8Array(e),
          s = "";
        for (let e of t) s += String.fromCharCode(e);
        return btoa(s)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
      }
      s.d(t, {
        U2: function () {
          return N;
        },
        Ue: function () {
          return x;
        },
      });
      var i = "copy",
        a = "convert";
      function o(e, t, s) {
        if (t === i) return s;
        if (t === a) return e(s);
        if (t instanceof Array) return s.map((s) => o(e, t[0], s));
        if (t instanceof Object) {
          let n = {};
          for (let [r, i] of Object.entries(t)) {
            if (i.derive) {
              let e = i.derive(s);
              void 0 !== e && (s[r] = e);
            }
            if (!(r in s)) {
              if (i.required) throw Error(`Missing key: ${r}`);
              continue;
            }
            if (null == s[r]) {
              n[r] = null;
              continue;
            }
            n[r] = o(e, i.schema, s[r]);
          }
          return n;
        }
      }
      function l(e, t) {
        return { required: !0, schema: e, derive: t };
      }
      function c(e) {
        return { required: !0, schema: e };
      }
      function u(e) {
        return { required: !1, schema: e };
      }
      var d = { type: c(i), id: c(a), transports: u(i) },
        h = { appid: u(i), appidExclude: u(i), credProps: u(i) },
        p = { appid: u(i), appidExclude: u(i), credProps: u(i) },
        m = {
          publicKey: c({
            rp: c(i),
            user: c({ id: c(a), name: c(i), displayName: c(i) }),
            challenge: c(a),
            pubKeyCredParams: c(i),
            timeout: u(i),
            excludeCredentials: u([d]),
            authenticatorSelection: u(i),
            attestation: u(i),
            extensions: u(h),
          }),
          signal: u(i),
        },
        f = {
          type: c(i),
          id: c(i),
          rawId: c(a),
          authenticatorAttachment: u(i),
          response: c({
            clientDataJSON: c(a),
            attestationObject: c(a),
            transports: l(i, (e) => {
              var t;
              return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            }),
          }),
          clientExtensionResults: l(p, (e) => e.getClientExtensionResults()),
        },
        C = {
          mediation: u(i),
          publicKey: c({
            challenge: c(a),
            timeout: u(i),
            rpId: u(i),
            allowCredentials: u([d]),
            userVerification: u(i),
            extensions: u(h),
          }),
          signal: u(i),
        },
        g = {
          type: c(i),
          id: c(i),
          rawId: c(a),
          authenticatorAttachment: u(i),
          response: c({
            clientDataJSON: c(a),
            authenticatorData: c(a),
            signature: c(a),
            userHandle: c(a),
          }),
          clientExtensionResults: l(p, (e) => e.getClientExtensionResults()),
        };
      async function x(e) {
        let t = await navigator.credentials.create(o(n, m, e));
        return o(r, f, t);
      }
      async function N(e) {
        let t = await navigator.credentials.get(o(n, C, e));
        return o(r, g, t);
      }
    },
  },
]);
//# sourceMappingURL=bfcdec9c24c821355547.js.map
