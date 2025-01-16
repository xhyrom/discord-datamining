"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57538"],
  {
    153069: function (e, t, s) {
      s(757143);
      var n,
        o = s(200651),
        r = s(192379),
        i = s(120356),
        a = s.n(i),
        l = s(442837),
        d = s(481060),
        c = s(893776),
        u = s(479495),
        h = s(388905),
        f = s(379760),
        p = s(540059),
        m = s(124860),
        g = s(144114),
        x = s(541692),
        C = s(952802),
        _ = s(210887),
        A = s(314897),
        b = s(896797),
        N = s(585483),
        T = s(981631),
        R = s(388032),
        v = s(83281),
        E = s(232186);
      function I(e, t, s) {
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
      class M extends (n = r.PureComponent) {
        componentDidMount() {
          window.addEventListener("keydown", this.handleTabOrEnter);
        }
        componentDidUpdate(e) {
          let { authenticated: t, transitionTo: s } = this.props;
          if (
            (t && !e.authenticated && s(T.Z5c.APP),
            e.errors !== this.props.errors)
          ) {
            var n, o, r;
            this.hasError("password")
              ? null === (n = this.passwordRef) || void 0 === n || n.focus()
              : this.hasError("email") || this.hasError("login")
                ? null === (o = this.loginRef) || void 0 === o || o.focus()
                : this.hasError("code") &&
                  (null === (r = this.codeRef) || void 0 === r || r.focus());
          }
        }
        componentWillUnmount() {
          window.removeEventListener("keydown", this.handleTabOrEnter);
        }
        hasError(e) {
          return null != this.props.errors[e];
        }
        renderDefaultForm() {
          var e;
          let { country: t } = this.props,
            s = !this.hasError("email") && this.hasError("password"),
            n = (0, o.jsxs)(r.Fragment, {
              children: [
                (0, o.jsx)(
                  h.Dx,
                  {
                    className: a()(E.marginBottom8, v.title),
                    children: R.intl.string(R.t.bPP34e),
                  },
                  "title",
                ),
                (0, o.jsx)(d.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: v.subtitle,
                  children: R.intl.string(R.t.rvx0T0),
                }),
              ],
            });
          return (0, o.jsxs)("div", {
            className: v.mainLoginContainer,
            children: [
              n,
              (0, o.jsxs)(h.gO, {
                className: v.loginForm,
                children: [
                  (0, o.jsx)(C.Z, {
                    alpha2: t.alpha2,
                    countryCode: t.code.split(" ")[0],
                    className: E.marginBottom20,
                    label: R.intl.string(R.t.tUjnxs),
                    error:
                      null !== (e = this.renderError("login")) && void 0 !== e
                        ? e
                        : this.renderError("email"),
                    onChange: (e, t) =>
                      this.setState({ login: e, loginPrefix: t }),
                    setRef: this.setLoginRef,
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: "off",
                    spellCheck: "false",
                    value: this.state.login,
                    autoFocus: !s,
                    required: !0,
                  }),
                  (0, o.jsx)(h.II, {
                    label: R.intl.string(R.t["CIGa+/"]),
                    error: this.renderError("password"),
                    onChange: (e) => this.setState({ password: e }),
                    name: "password",
                    type: "password",
                    setRef: this.setPasswordRef,
                    autoComplete: "off",
                    spellCheck: "false",
                    autoFocus: s,
                    value: this.state.password,
                    required: !0,
                  }),
                  (0, o.jsx)(h.zx, {
                    onClick: this.handleForgotPassword,
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.LINK,
                    className: a()(E.marginTop4),
                    children: R.intl.string(R.t.wWIufn),
                  }),
                ],
              }),
            ],
          });
        }
        renderDefault() {
          let {
            authBoxClassName: e,
            loginStatus: t,
            closeLogin: s,
            theme: n,
          } = this.props;
          return (0, o.jsxs)("div", {
            className: v.__invalid_pageContainer,
            children: [
              (0, o.jsx)(h.ZP, {
                tag: "form",
                className: e,
                expanded: !0,
                theme: n,
                children: this.renderDefaultForm(),
              }),
              (0, o.jsx)(d.ThemeProvider, {
                theme: n,
                children: (e) =>
                  (0, o.jsx)("div", {
                    "data-theme": n,
                    "data-disable-adaptive-theme": !0,
                    className: a()(e, v.navRow),
                    children: (0, o.jsx)(w, {
                      loginStatus: t,
                      closeLogin: s,
                      themeClass: e,
                      handleLogin: this.handleLogin,
                    }),
                  }),
              }),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, o.jsx)(h.ZP, {
            style: { padding: 0 },
            theme: this.props.theme,
            children: (0, o.jsx)(m.Cd, {
              mfaFinish: this.handleTokenSubmitMFA,
              mfaChallenge: e,
              onEarlyClose: () => {
                this.handleReset();
              },
              width: 480,
            }),
          });
        }
        renderDisabledAccount() {
          let { authBoxClassName: e, theme: t } = this.props,
            s = this.props.loginStatus === T.u34.ACCOUNT_DISABLED,
            n = s ? R.intl.string(R.t["j3rC+f"]) : R.intl.string(R.t.ZFWofn),
            r = s ? R.intl.string(R.t["6eNTWV"]) : R.intl.string(R.t.pCBti4);
          return (0, o.jsxs)(h.ZP, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
              (0, o.jsx)(h.Dx, { className: E.marginBottom8, children: n }),
              (0, o.jsx)(h.DK, { className: E.marginBottom20, children: r }),
              (0, o.jsxs)(h.gO, {
                children: [
                  (0, o.jsx)(d.Button, {
                    color: d.Button.Colors.BRAND,
                    type: "submit",
                    fullWidth: !0,
                    children: R.intl.string(R.t.JhDw5u),
                  }),
                  (0, o.jsx)("div", {
                    className: a()(E.marginTop8, v.needAccount),
                    children: R.intl.format(R.t.js2rr6, {
                      onClick: this.handleCancelAccountDeletion,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        renderResetPhonePassword() {
          let { resetPasswordPhoneToken: e } = this.state;
          return (0, o.jsx)(u.Z, {
            resetToken: e,
            onLoginSuccess: (e) => {
              c.Z.switchAccountToken(e);
            },
            ...this.props,
          });
        }
        renderPhonePasswordRecovery() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, o.jsx)(h.ZP, {
            tag: "form",
            className: e,
            children: (0, o.jsx)("div", {
              className: E.marginTop20,
              children: (0, o.jsx)(f.Z, {
                title: R.intl.string(R.t["+xqy3d"]),
                subtitle: R.intl.format(R.t.ef4uZ2, {
                  onResendClick: this.handleResendCode,
                }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: void 0,
              }),
            }),
          });
        }
        render() {
          let { loginStatus: e } = this.props;
          if (null != this.state.resetPasswordPhoneToken)
            return this.renderResetPhonePassword();
          switch (e) {
            case T.u34.LOGGING_IN_MFA_SMS:
            case T.u34.MFA_SMS_STEP:
            case T.u34.LOGGING_IN_MFA:
            case T.u34.MFA_STEP:
              return this.renderMFA();
            case T.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case T.u34.ACCOUNT_DISABLED:
              return this.renderDisabledAccount();
            case T.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
              return this.renderPhonePasswordRecovery();
            case T.u34.LOGGING_IN:
            case T.u34.NONE:
            default:
              return this.renderDefault();
          }
        }
        constructor(e) {
          super(e),
            I(this, "loginRef", void 0),
            I(this, "passwordRef", void 0),
            I(this, "codeRef", void 0),
            I(this, "handleAuthToken", async (e) => {
              await c.Z.loginToken(e, !1);
            }),
            I(this, "handleTabOrEnter", (e) => {
              if (
                "Tab" === e.key &&
                !e.shiftKey &&
                e.target === this.loginRef
              ) {
                var t;
                null === (t = this.passwordRef) || void 0 === t || t.focus(),
                  e.stopPropagation(),
                  e.preventDefault();
              }
              "Enter" === e.key &&
                (e.target === this.loginRef || e.target === this.passwordRef) &&
                (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            I(this, "setLoginRef", (e) => {
              this.loginRef = e;
            }),
            I(this, "setPasswordRef", (e) => {
              this.passwordRef = e;
            }),
            I(this, "setCodeRef", (e) => {
              this.codeRef = e;
            }),
            I(this, "getFullLogin", () => {
              let { loginPrefix: e, login: t } = this.state;
              return e + t;
            }),
            I(this, "renderError", (e) => {
              let { errors: t } = this.props;
              if (this.hasError(e)) {
                let s = t[e];
                return Array.isArray(s) ? s[0] : s;
              }
              return null;
            }),
            I(this, "handleForgotPassword", async (e) => {
              var t;
              null == e || e.preventDefault(),
                null === (t = this.loginRef) || void 0 === t || t.focus();
              let s = this.getFullLogin();
              try {
                N.S.dispatch(T.CkL.WAVE_EMPHASIZE),
                  await c.Z.forgotPassword(s),
                  (0, d.openModal)((e) =>
                    (0, o.jsx)(d.ConfirmModal, {
                      header: R.intl.string(R.t.f5Pi7O),
                      confirmText: R.intl.string(R.t.BddRzc),
                      confirmButtonColor: d.Button.Colors.BRAND,
                      ...e,
                      children: (0, o.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: R.intl.format(R.t["6u5hQ0"], { email: s }),
                      }),
                    }),
                  );
              } catch {}
            }),
            I(this, "handleLogin", (e) => {
              let { password: t, undelete: s } = this.state;
              null != e && e.preventDefault(),
                c.Z.login({
                  login: this.getFullLogin(),
                  password: t,
                  undelete: s,
                  isMultiAccount: !0,
                });
            }),
            I(this, "handlePasswordReset", async (e) => {
              this.setState({ phoneVerifyError: null });
              try {
                let { token: t } = await g.Z.verifyPhone(
                  this.getFullLogin(),
                  e,
                  !1,
                  !0,
                );
                this.setState({ resetPasswordPhoneToken: t });
              } catch (e) {
                null != e.body &&
                  null != e.body.message &&
                  this.setState({ phoneVerifyError: e.body.message });
              }
            }),
            I(this, "handleTokenSubmitMFA", (e) => {
              let { mfaType: t, data: s, ticket: n } = e;
              return c.Z.loginMFAv2({
                code: s,
                ticket: n,
                mfaType: t,
                isMultiAccount: !0,
              });
            }),
            I(this, "handleResendCode", () => {
              g.Z.resendCode(this.getFullLogin());
            }),
            I(this, "handleReset", (e) => {
              null != e && e.preventDefault(),
                c.Z.loginReset(!0),
                this.setState({
                  password: "",
                  loginPrefix: "",
                  login: "",
                  code: "",
                  smsCode: "",
                  undelete: !1,
                  resetPasswordPhoneToken: null,
                });
            }),
            I(this, "handleCancelAccountDeletion", () => {
              this.setState({ undelete: !0 }, this.handleLogin);
            }),
            (this.state = {
              loginPrefix: "",
              login: "",
              password: "",
              code: "",
              smsCode: "",
              phoneVerifyError: null,
              resetPasswordPhoneToken: null,
              undelete: !1,
            });
        }
      }
      function w(e) {
        let {
            loginStatus: t,
            closeLogin: s,
            themeClass: n,
            handleLogin: r,
          } = e,
          i = (0, p.Q3)("MultiAccountLogin:ActionButtons");
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(d.Button, {
              type: "button",
              look: d.Button.Looks.LINK,
              "aria-label": "back",
              onClick: s,
              size: d.Button.Sizes.SMALL,
              color: i ? d.Button.Colors.WHITE : void 0,
              className: a()(n, v.backButton),
              children: R.intl.string(R.t["13/7kZ"]),
            }),
            (0, o.jsx)(d.Button, {
              "aria-label": "continue",
              submitting: t === T.u34.LOGGING_IN,
              color: d.Button.Colors.BRAND,
              onClick: r,
              className: v.continueButton,
              children: R.intl.string(R.t["3PatS0"]),
            }),
          ],
        });
      }
      I(M, "defaultProps", {
        transitionTo: (e) => s.g.location.assign(e),
        replaceWith: (e) => s.g.location.replace(e),
      });
      t.Z = function (e) {
        let t = (0, l.cj)([b.Z, A.default, x.Z, _.Z], () => ({
          authenticated: A.default.isAuthenticated(),
          loginStatus: A.default.getLoginStatus(),
          mfaTicket: A.default.getMFATicket(),
          mfaSMS: A.default.getMFASMS(),
          maskedPhone: A.default.getMaskedPhone(),
          mfaMethods: A.default.getMFAMethods(),
          errors: A.default.getErrors(),
          defaultRoute: b.Z.defaultRoute,
          country: x.Z.getCountryCode(),
          theme: _.Z.theme,
        }));
        return (0, o.jsx)(M, { ...e, ...t });
      };
    },
    475062: function (e, t, s) {
      var n = s(200651);
      s(192379);
      var o = s(703656),
        r = s(153069),
        i = s(224216);
      t.Z = (e) => {
        let { onClose: t } = e;
        return (0, n.jsx)(r.Z, {
          transitionTo: (e) => {
            (0, o.uL)(e);
          },
          replaceWith: (e) => {
            (0, o.dL)(e);
          },
          authBoxClassName: i.card,
          closeLogin: t,
        });
      };
    },
    266653: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return b;
          },
        }),
        s(47120);
      var n,
        o,
        r = s(200651),
        i = s(192379),
        a = s(990547),
        l = s(442837),
        d = s(481060),
        c = s(570140),
        u = s(213609),
        h = s(594174),
        f = s(726745),
        p = s(475062),
        m = s(760213),
        g = s(71509),
        x = s(981631),
        C = s(388032),
        _ = s(279647);
      ((o = n || (n = {}))[(o.MANAGE_ACCOUNTS = 0)] = "MANAGE_ACCOUNTS"),
        (o[(o.LOGIN = 1)] = "LOGIN");
      let A = { 0: d.ModalSize.SMALL, 1: d.ModalSize.DYNAMIC };
      function b(e) {
        let { transitionState: t, onClose: s } = e,
          [n, o] = i.useState(0),
          { currentUser: b, multiAccountUsers: N } = (0, l.cj)(
            [h.default, f.Z],
            () => ({
              currentUser: h.default.getCurrentUser(),
              multiAccountUsers: f.Z.getUsers(),
            }),
          ),
          [T, R] = i.useState(!1),
          [v, E] = i.useState(x.lds),
          [I, M] = i.useState(null);
        i.useEffect(() => {
          if (T)
            M(
              (0, r.jsx)(d.HelpMessage, {
                messageType: d.HelpMessageTypes.ERROR,
                className: _.infoMessage,
                children: C.intl.format(C.t.HAuRSE, { maxNumAccounts: g.$H }),
              }),
            ),
              E(x.lds);
          else if (null != v) {
            let e = h.default.getUser(v);
            null != e &&
              M(
                (0, r.jsx)(d.HelpMessage, {
                  messageType: d.HelpMessageTypes.POSITIVE,
                  className: _.infoMessage,
                  children: C.intl.format(C.t["09qidX"], {
                    username: e.username,
                  }),
                }),
              ),
              R(!1);
          }
        }, [v, T]),
          i.useEffect(() => {
            N.length < g.$H && R(!1);
          }, [N]),
          (0, u.Z)({
            type: a.ImpressionTypes.MODAL,
            name:
              0 === n
                ? a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
                : a.ImpressionNames.USER_LOGIN,
          });
        let w = null;
        return (
          0 === n
            ? (w = (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(d.ModalHeader, {
                    separator: !1,
                    children: (0, r.jsxs)("div", {
                      className: _.header,
                      children: [
                        (0, r.jsx)(d.Heading, {
                          variant: "heading-xl/semibold",
                          color: "header-primary",
                          children: C.intl.string(C.t.WbFpq6),
                        }),
                        (0, r.jsx)(d.Text, {
                          className: _.subheaderText,
                          color: "header-secondary",
                          variant: "text-md/normal",
                          children: C.intl.string(C.t["+1Uk3d"]),
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(d.ModalContent, {
                    children: [
                      I,
                      (0, r.jsx)(m.Z, {
                        actionText: C.intl.string(C.t.Wf421N),
                        onAction: (e, t) => {
                          switch (e) {
                            case m.W.LOGIN_REQUIRED:
                              o(1);
                              break;
                            case m.W.SWITCHED:
                              s();
                              break;
                            case m.W.REMOVED:
                              t === (null == b ? void 0 : b.id) && s(), E(t);
                          }
                        },
                      }),
                      (0, r.jsx)("div", {
                        className: _.actions,
                        children: (0, r.jsx)(d.Button, {
                          look: d.Button.Looks.LINK,
                          color: d.Button.Colors.PRIMARY,
                          onClick: () => {
                            if (N.length >= g.$H) {
                              R(!0);
                              return;
                            }
                            o(1);
                          },
                          size: d.Button.Sizes.MEDIUM,
                          children: (0, r.jsx)(d.Text, {
                            variant: "text-sm/semibold",
                            children: C.intl.string(C.t["9g2mqa"]),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }))
            : 1 === n &&
              (w = (0, r.jsx)(p.Z, {
                onClose: () => {
                  c.Z.dispatch({ type: "CLEAR_AUTHENTICATION_ERRORS" }), o(0);
                },
              })),
          (0, r.jsx)(d.ModalRoot, {
            className: _.modal,
            transitionState: t,
            size: A[n],
            "aria-label": C.intl.string(C.t.WbFpq6),
            children: (0, r.jsx)(d.Sequencer, {
              step: n,
              steps: [0, 1],
              children: w,
            }),
          })
        );
      }
    },
    988750: function (e, t, s) {
      e.exports = {
        error: "error_c39a71",
        subTitle: "subTitle_c39a71",
        button: "button_c39a71",
        codeInput: "codeInput_c39a71",
      };
    },
    452091: function (e, t, s) {
      e.exports = {
        header: "header_c03fd3",
        subtitle: "subtitle_c03fd3",
        closeButton: "closeButton_c03fd3",
        content: "content_c03fd3",
        smsInputContainer: "smsInputContainer_c03fd3",
        smsInput: "smsInput_c03fd3",
        error: "error_c03fd3",
        footer: "footer_c03fd3",
        listItemContainer: "listItemContainer_c03fd3",
        listItemText: "listItemText_c03fd3",
        listItemArrow: "listItemArrow_c03fd3",
      };
    },
    83281: function (e, t, s) {
      e.exports = {
        mainLoginContainer: "mainLoginContainer_be9398",
        title: "title_be9398",
        subtitle: "subtitle_be9398",
        loginForm: "loginForm_be9398",
        needAccount: "needAccount_be9398",
        navRow: "navRow_be9398",
        continueButton: "continueButton_be9398",
        backButton: "backButton_be9398",
      };
    },
    224216: function (e, t, s) {
      e.exports = { card: "card_fe1b7e" };
    },
    536554: function (e, t, s) {
      e.exports = {
        list: "list_f20a46",
        accountCard: "accountCard_f20a46",
        separator: "separator_f20a46",
        userDetails: "userDetails_f20a46",
        usernameSection: "usernameSection_f20a46",
        hasActionMaxWidth: "hasActionMaxWidth_f20a46",
        username: "username_f20a46",
        userActions: "userActions_f20a46",
        userActionMenu: "userActionMenu_f20a46",
        overflowMenuIcon: "overflowMenuIcon_f20a46",
        textOverflow: "textOverflow_f20a46",
        hintText: "hintText_f20a46",
      };
    },
    279647: function (e, t, s) {
      e.exports = {
        modal: "modal_f31a4d",
        header: "header_f31a4d",
        subheaderText: "subheaderText_f31a4d",
        actions: "actions_f31a4d",
        infoMessage: "infoMessage_f31a4d",
      };
    },
    149938: function (e, t, s) {
      e.exports = {
        outerContainer: "outerContainer_a0cb3d",
        container: "container_a0cb3d",
        innerContainer: "innerContainer_a0cb3d",
        countryCode: "countryCode_a0cb3d",
        separator: "separator_a0cb3d",
        popout: "popout_a0cb3d",
        hidden: "hidden_a0cb3d",
      };
    },
    208689: function (e, t, s) {
      e.exports = {
        input: "input_cc6ddd",
        inputField: "inputField_cc6ddd",
        inputWrapper: "inputWrapper_cc6ddd",
      };
    },
  },
]);
//# sourceMappingURL=098cdad257ef192f8360.js.map
