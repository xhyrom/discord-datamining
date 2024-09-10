"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32870"],
  {
    153069: function (e, t, s) {
      s(757143);
      var o,
        n = s(735250),
        r = s(470079),
        a = s(120356),
        i = s.n(a),
        l = s(442837),
        d = s(481060),
        c = s(893776),
        u = s(479495),
        h = s(388905),
        f = s(379760),
        _ = s(124860),
        p = s(144114),
        m = s(541692),
        C = s(952802),
        g = s(210887),
        T = s(314897),
        N = s(896797),
        A = s(585483),
        E = s(981631),
        I = s(689938),
        M = s(979995),
        R = s(113207);
      function O(e, t, s) {
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
      class S extends (o = r.PureComponent) {
        componentDidMount() {
          window.addEventListener("keydown", this.handleTabOrEnter);
        }
        componentDidUpdate(e) {
          let { authenticated: t, transitionTo: s } = this.props;
          if (
            (t && !e.authenticated && s(E.Z5c.APP),
            e.errors !== this.props.errors)
          ) {
            var o, n, r;
            this.hasError("password")
              ? null === (o = this.passwordRef) || void 0 === o || o.focus()
              : this.hasError("email") || this.hasError("login")
                ? null === (n = this.loginRef) || void 0 === n || n.focus()
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
            o = (0, n.jsxs)(r.Fragment, {
              children: [
                (0, n.jsx)(
                  h.Dx,
                  {
                    className: i()(R.marginBottom8, M.title),
                    children: I.Z.Messages.MULTI_ACCOUNT_LOGIN_TITLE,
                  },
                  "title",
                ),
                (0, n.jsx)(d.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: M.subtitle,
                  children: I.Z.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE,
                }),
              ],
            });
          return (0, n.jsxs)("div", {
            className: M.mainLoginContainer,
            children: [
              o,
              (0, n.jsxs)(h.gO, {
                className: M.loginForm,
                children: [
                  (0, n.jsx)(C.Z, {
                    alpha2: t.alpha2,
                    countryCode: t.code.split(" ")[0],
                    className: R.marginBottom20,
                    label: I.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                  (0, n.jsx)(h.II, {
                    label: I.Z.Messages.FORM_LABEL_PASSWORD,
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
                  (0, n.jsx)(h.zx, {
                    onClick: this.handleForgotPassword,
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.LINK,
                    className: i()(R.marginTop4),
                    children: I.Z.Messages.FORGOT_PASSWORD,
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
            theme: o,
          } = this.props;
          return (0, n.jsxs)("div", {
            className: M.__invalid_pageContainer,
            children: [
              (0, n.jsx)(h.ZP, {
                tag: "form",
                className: e,
                expanded: !0,
                theme: o,
                children: this.renderDefaultForm(),
              }),
              (0, n.jsx)(d.ThemeProvider, {
                theme: o,
                children: (e) =>
                  (0, n.jsxs)("div", {
                    "data-theme": o,
                    "data-disable-adaptive-theme": !0,
                    className: i()(e, M.navRow),
                    children: [
                      (0, n.jsx)(d.Button, {
                        type: "button",
                        look: d.Button.Looks.LINK,
                        "aria-label": "back",
                        onClick: s,
                        size: d.Button.Sizes.SMALL,
                        className: i()(e, M.backButton),
                        children: I.Z.Messages.BACK,
                      }),
                      (0, n.jsx)(d.Button, {
                        "aria-label": "continue",
                        submitting: t === E.u34.LOGGING_IN,
                        color: d.Button.Colors.BRAND,
                        onClick: this.handleLogin,
                        className: M.continueButton,
                        children: I.Z.Messages.CONTINUE,
                      }),
                    ],
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
          return (0, n.jsx)(h.ZP, {
            style: { padding: 0 },
            theme: this.props.theme,
            children: (0, n.jsx)(_.Cd, {
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
            s = this.props.loginStatus === E.u34.ACCOUNT_DISABLED,
            o = s
              ? I.Z.Messages.ACCOUNT_DISABLED_TITLE
              : I.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE,
            r = s
              ? I.Z.Messages.ACCOUNT_DISABLED_DESCRIPTION
              : I.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
          return (0, n.jsxs)(h.ZP, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
              (0, n.jsx)(h.Dx, { className: R.marginBottom8, children: o }),
              (0, n.jsx)(h.DK, { className: R.marginBottom20, children: r }),
              (0, n.jsxs)(h.gO, {
                children: [
                  (0, n.jsx)(d.Button, {
                    color: d.Button.Colors.BRAND,
                    type: "submit",
                    fullWidth: !0,
                    children: I.Z.Messages._RETURN_TO_LOGIN,
                  }),
                  (0, n.jsx)("div", {
                    className: i()(R.marginTop8, M.needAccount),
                    children:
                      I.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format(
                        { onClick: this.handleCancelAccountDeletion },
                      ),
                  }),
                ],
              }),
            ],
          });
        }
        renderResetPhonePassword() {
          let { resetPasswordPhoneToken: e } = this.state;
          return (0, n.jsx)(u.Z, {
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
          return (0, n.jsx)(h.ZP, {
            tag: "form",
            className: e,
            children: (0, n.jsx)("div", {
              className: R.marginTop20,
              children: (0, n.jsx)(f.Z, {
                title: I.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                subtitle:
                  I.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format(
                    { onResendClick: this.handleResendCode },
                  ),
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
            case E.u34.LOGGING_IN_MFA_SMS:
            case E.u34.MFA_SMS_STEP:
            case E.u34.LOGGING_IN_MFA:
            case E.u34.MFA_STEP:
              return this.renderMFA();
            case E.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case E.u34.ACCOUNT_DISABLED:
              return this.renderDisabledAccount();
            case E.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
              return this.renderPhonePasswordRecovery();
            case E.u34.LOGGING_IN:
            case E.u34.NONE:
            default:
              return this.renderDefault();
          }
        }
        constructor(e) {
          super(e),
            O(this, "loginRef", void 0),
            O(this, "passwordRef", void 0),
            O(this, "codeRef", void 0),
            O(this, "handleAuthToken", async (e) => {
              await c.Z.loginToken(e, !1);
            }),
            O(this, "handleTabOrEnter", (e) => {
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
            O(this, "setLoginRef", (e) => {
              this.loginRef = e;
            }),
            O(this, "setPasswordRef", (e) => {
              this.passwordRef = e;
            }),
            O(this, "setCodeRef", (e) => {
              this.codeRef = e;
            }),
            O(this, "getFullLogin", () => {
              let { loginPrefix: e, login: t } = this.state;
              return e + t;
            }),
            O(this, "renderError", (e) => {
              let { errors: t } = this.props;
              if (this.hasError(e)) {
                let s = t[e];
                return Array.isArray(s) ? s[0] : s;
              }
              return null;
            }),
            O(this, "handleForgotPassword", async (e) => {
              var t;
              null == e || e.preventDefault(),
                null === (t = this.loginRef) || void 0 === t || t.focus();
              let s = this.getFullLogin();
              try {
                A.S.dispatch(E.CkL.WAVE_EMPHASIZE),
                  await c.Z.forgotPassword(s),
                  (0, d.openModal)((e) =>
                    (0, n.jsx)(d.ConfirmModal, {
                      header:
                        I.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                      confirmText: I.Z.Messages.OKAY,
                      confirmButtonColor: d.Button.Colors.BRAND,
                      ...e,
                      children: (0, n.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children:
                          I.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format(
                            { email: s },
                          ),
                      }),
                    }),
                  );
              } catch {}
            }),
            O(this, "handleLogin", (e) => {
              let { password: t, undelete: s } = this.state;
              null != e && e.preventDefault(),
                c.Z.login({
                  login: this.getFullLogin(),
                  password: t,
                  undelete: s,
                  isMultiAccount: !0,
                });
            }),
            O(this, "handlePasswordReset", async (e) => {
              this.setState({ phoneVerifyError: null });
              try {
                let { token: t } = await p.Z.verifyPhone(
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
            O(this, "handleTokenSubmitMFA", (e) => {
              let { mfaType: t, data: s, ticket: o } = e;
              return c.Z.loginMFAv2({
                code: s,
                ticket: o,
                mfaType: t,
                isMultiAccount: !0,
              });
            }),
            O(this, "handleResendCode", () => {
              p.Z.resendCode(this.getFullLogin());
            }),
            O(this, "handleReset", (e) => {
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
            O(this, "handleCancelAccountDeletion", () => {
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
      O(S, "defaultProps", {
        transitionTo: (e) => s.g.location.assign(e),
        replaceWith: (e) => s.g.location.replace(e),
      });
      t.Z = function (e) {
        let t = (0, l.cj)([N.Z, T.default, m.Z, g.Z], () => ({
          authenticated: T.default.isAuthenticated(),
          loginStatus: T.default.getLoginStatus(),
          mfaTicket: T.default.getMFATicket(),
          mfaSMS: T.default.getMFASMS(),
          maskedPhone: T.default.getMaskedPhone(),
          mfaMethods: T.default.getMFAMethods(),
          errors: T.default.getErrors(),
          defaultRoute: N.Z.defaultRoute,
          country: m.Z.getCountryCode(),
          theme: g.Z.theme,
        }));
        return (0, n.jsx)(S, { ...e, ...t });
      };
    },
    475062: function (e, t, s) {
      var o = s(735250);
      s(470079);
      var n = s(703656),
        r = s(153069),
        a = s(687976);
      t.Z = (e) => {
        let { onClose: t } = e;
        return (0, o.jsx)(r.Z, {
          transitionTo: (e) => {
            (0, n.uL)(e);
          },
          replaceWith: (e) => {
            (0, n.dL)(e);
          },
          authBoxClassName: a.card,
          closeLogin: t,
        });
      };
    },
    266653: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return A;
          },
        }),
        s(47120);
      var o,
        n,
        r = s(735250),
        a = s(470079),
        i = s(990547),
        l = s(442837),
        d = s(481060),
        c = s(570140),
        u = s(213609),
        h = s(594174),
        f = s(726745),
        _ = s(475062),
        p = s(760213),
        m = s(71509),
        C = s(981631),
        g = s(689938),
        T = s(67451);
      ((n = o || (o = {}))[(n.MANAGE_ACCOUNTS = 0)] = "MANAGE_ACCOUNTS"),
        (n[(n.LOGIN = 1)] = "LOGIN");
      let N = { 0: d.ModalSize.SMALL, 1: d.ModalSize.DYNAMIC };
      function A(e) {
        let { transitionState: t, onClose: s } = e,
          [o, n] = a.useState(0),
          { currentUser: A, multiAccountUsers: E } = (0, l.cj)(
            [h.default, f.Z],
            () => ({
              currentUser: h.default.getCurrentUser(),
              multiAccountUsers: f.Z.getUsers(),
            }),
          ),
          [I, M] = a.useState(!1),
          [R, O] = a.useState(C.lds),
          [S, x] = a.useState(null);
        a.useEffect(() => {
          if (I)
            x(
              (0, r.jsx)(d.HelpMessage, {
                messageType: d.HelpMessageTypes.ERROR,
                className: T.infoMessage,
                children: g.Z.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
                  maxNumAccounts: m.$H,
                }),
              }),
            ),
              O(C.lds);
          else if (null != R) {
            let e = h.default.getUser(R);
            null != e &&
              x(
                (0, r.jsx)(d.HelpMessage, {
                  messageType: d.HelpMessageTypes.POSITIVE,
                  className: T.infoMessage,
                  children: g.Z.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
                    username: e.username,
                  }),
                }),
              ),
              M(!1);
          }
        }, [R, I]),
          a.useEffect(() => {
            E.length < m.$H && M(!1);
          }, [E]),
          (0, u.Z)({
            type: i.ImpressionTypes.MODAL,
            name:
              0 === o
                ? i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
                : i.ImpressionNames.USER_LOGIN,
          });
        let L = null;
        return (
          0 === o
            ? (L = (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(d.ModalHeader, {
                    separator: !1,
                    children: (0, r.jsxs)("div", {
                      className: T.header,
                      children: [
                        (0, r.jsx)(d.Heading, {
                          variant: "heading-xl/semibold",
                          color: "header-primary",
                          children:
                            g.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
                        }),
                        (0, r.jsx)(d.Text, {
                          className: T.subheaderText,
                          color: "header-secondary",
                          variant: "text-md/normal",
                          children:
                            g.Z.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER,
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(d.ModalContent, {
                    children: [
                      S,
                      (0, r.jsx)(p.Z, {
                        actionText: g.Z.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
                        onAction: (e, t) => {
                          switch (e) {
                            case p.W.LOGIN_REQUIRED:
                              n(1);
                              break;
                            case p.W.SWITCHED:
                              s();
                              break;
                            case p.W.REMOVED:
                              t === (null == A ? void 0 : A.id) && s(), O(t);
                          }
                        },
                      }),
                      (0, r.jsx)("div", {
                        className: T.actions,
                        children: (0, r.jsx)(d.Button, {
                          look: d.Button.Looks.LINK,
                          color: d.Button.Colors.PRIMARY,
                          onClick: () => {
                            if (E.length >= m.$H) {
                              M(!0);
                              return;
                            }
                            n(1);
                          },
                          size: d.Button.Sizes.MEDIUM,
                          children: (0, r.jsx)(d.Text, {
                            variant: "text-sm/semibold",
                            children:
                              g.Z.Messages
                                .SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }))
            : 1 === o &&
              (L = (0, r.jsx)(_.Z, {
                onClose: () => {
                  c.Z.dispatch({ type: "CLEAR_AUTHENTICATION_ERRORS" }), n(0);
                },
              })),
          (0, r.jsx)(d.ModalRoot, {
            className: T.modal,
            transitionState: t,
            size: N[o],
            "aria-label": g.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
            children: (0, r.jsx)(d.Sequencer, {
              step: o,
              steps: [0, 1],
              children: L,
            }),
          })
        );
      }
    },
    985772: function (e, t, s) {
      e.exports = {
        error: "error_c39a71",
        subTitle: "subTitle_c39a71",
        button: "button_c39a71",
        codeInput: "codeInput_c39a71",
      };
    },
    680924: function (e, t, s) {
      e.exports = { spacer: "spacer_b0944f", input: "input_b0944f" };
    },
    58259: function (e, t, s) {
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
    979995: function (e, t, s) {
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
    687976: function (e, t, s) {
      e.exports = { card: "card_fe1b7e" };
    },
    516603: function (e, t, s) {
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
    67451: function (e, t, s) {
      e.exports = {
        modal: "modal_f31a4d",
        header: "header_f31a4d",
        subheaderText: "subheaderText_f31a4d",
        actions: "actions_f31a4d",
        infoMessage: "infoMessage_f31a4d",
      };
    },
    760617: function (e, t, s) {
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
    553258: function (e, t, s) {
      e.exports = {
        phoneFieldPopout: "phoneFieldPopout_ff761b",
        phoneFieldScroller: "phoneFieldScroller_ff761b",
        countryItem: "countryItem_ff761b",
        countryName: "countryName_ff761b",
        countryCode: "countryCode_ff761b",
      };
    },
    279006: function (e, t, s) {
      e.exports = {
        input: "input_cc6ddd",
        inputWrapper: "inputWrapper_cc6ddd",
        inputField: "inputField_cc6ddd",
      };
    },
  },
]);
//# sourceMappingURL=09d15e7162b53155eb0c.js.map
