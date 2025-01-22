"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85325"],
  {
    26230: function (t) {
      t.exports = "/assets/afd44ae05126b5fab40d.svg";
    },
    935227: function (t) {
      t.exports = "/assets/50b96601171fd361101c.svg";
    },
    479495: function (t, e, n) {
      n(757143);
      var s,
        r = n(200651),
        i = n(192379),
        l = n(120356),
        a = n.n(l),
        o = n(593473),
        c = n(873546),
        u = n(442837),
        d = n(570140),
        h = n(893776),
        p = n(129293),
        m = n(388905),
        x = n(17894),
        f = n(124860),
        g = n(108427),
        C = n(314897),
        j = n(585483),
        v = n(981631),
        N = n(388032),
        S = n(232186);
      function E(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      u.ZP.initialize();
      class A extends (s = i.PureComponent) {
        componentDidMount() {
          (0, g.e)("reset_password");
        }
        renderPasswordReset() {
          let { password: t, error: e, hasCancel: s } = this.state,
            i = this.isSubmitting(),
            l = null != e ? e : this.renderError("password");
          return (0, r.jsxs)(m.ZP, {
            onSubmit: this.handleSubmit,
            tag: "form",
            children: [
              (0, r.jsx)("img", {
                alt: "",
                src: null == l ? n(26230) : n(935227),
                className: S.marginBottom20,
              }),
              (0, r.jsx)(m.Dx, { children: N.intl.string(N.t["1LV6Ki"]) }),
              (0, r.jsxs)(m.gO, {
                className: S.marginTop20,
                children: [
                  (0, r.jsx)(m.II, {
                    label: N.intl.string(N.t["8dM4FB"]),
                    className: S.marginBottom20,
                    name: "password",
                    value: t,
                    onChange: (t) => this.setState({ password: t }),
                    error: l,
                    type: "password",
                  }),
                  (0, r.jsx)(m.zx, {
                    type: "submit",
                    submitting: i,
                    children: N.intl.string(N.t["FRep5+"]),
                  }),
                  s
                    ? (0, r.jsx)(m.zx, {
                        className: S.marginTop8,
                        onClick: this.handleGoToLogin,
                        submitting: i,
                        color: m.zx.Colors.PRIMARY,
                        children: N.intl.string(N.t["ETE/oK"]),
                      })
                    : null,
                ],
              }),
            ],
          });
        }
        renderMFA() {
          let t = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, r.jsx)(m.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(f.Cd, {
              mfaFinish: (t) => {
                let { mfaType: e, data: n } = t;
                return this.handleTokenSubmitMFAv2(e, n);
              },
              mfaChallenge: t,
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
                src: n(26230),
                className: a()(S.marginBottom20, c.tq ? S.marginTop20 : ""),
              }),
              (0, r.jsx)(m.Dx, {
                className: S.marginBottom40,
                children: N.intl.string(N.t.WAUOoK),
              }),
              (0, r.jsx)(m.zx, {
                onClick: this.handleOpenApp,
                children: N.intl.string(N.t.uJWIj4),
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
        constructor(t) {
          var e;
          super(t),
            E(this, "handleSubmit", async (t) => {
              let {
                  location: e,
                  onLoginSuccess: n,
                  source: s,
                  resetToken: r,
                } = this.props,
                { password: i, error: l } = this.state;
              if ((null != t && t.preventDefault(), 0 === i.length)) {
                this.setState({ error: N.intl.string(N.t.R98xDw) }),
                  j.S.dispatch(v.CkL.WAVE_EMPHASIZE);
                return;
              }
              null != l && this.setState({ error: null });
              let a = r;
              if ((null != e && (a = (0, p.Z)(e)), null != a)) {
                this.setState({ working: !0 });
                try {
                  let {
                    result: t,
                    sms: e,
                    webauthn: r,
                    ticket: l,
                    token: o,
                    totp: c,
                    backup: u,
                  } = await h.Z.resetPassword(a, i, s);
                  t === h.c.MFA
                    ? d.Z.dispatch({
                        type: "LOGIN_MFA_STEP",
                        ticket: l,
                        sms: e,
                        webauthn: r,
                        totp: c,
                        backup: u,
                      })
                    : null != n
                      ? n(o)
                      : (d.Z.dispatch({ type: "LOGIN_SUCCESS", token: o }),
                        this.handlePasswordChangeSuccess());
                } catch (t) {}
                this.setState({ working: !1 });
              }
            }),
            E(this, "handleTokenSubmitMFAv2", (t, e) => {
              let {
                  location: n,
                  mfaTicket: s,
                  onLoginSuccess: r,
                  resetToken: i,
                  source: l,
                } = this.props,
                { password: a } = this.state;
              if (0 === a.length)
                return d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
              let o = i;
              return (null != n && (o = (0, p.Z)(n)), null == o)
                ? (d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject())
                : h.Z.resetPasswordMFAv2({
                    method: t,
                    code: e,
                    ticket: s,
                    password: a,
                    token: o,
                    source: l,
                  }).then((t) => {
                    null != r
                      ? r(t)
                      : (d.Z.dispatch({ type: "LOGIN_SUCCESS", token: t }),
                        this.handlePasswordChangeSuccess());
                  });
            }),
            E(this, "handlePasswordChangeSuccess", () => {
              let { replaceWith: t } = this.props;
              if (c.Em || c.tq) {
                this.setState({ success: !0 });
                return;
              }
              t(v.Z5c.APP);
            }),
            E(this, "handleGoToLogin", () => {
              let { transitionTo: t } = this.props;
              h.Z.loginReset(), t(v.Z5c.LOGIN);
            }),
            E(this, "isSubmitting", () => {
              let { loginStatus: t } = this.props,
                { working: e } = this.state;
              return e || t === v.u34.LOGGING_IN_MFA;
            }),
            E(this, "handleOpenApp", () => {
              (0, x.Z)("password_reset");
            }),
            E(
              this,
              "hasError",
              (t) => null != this.props.errors[t] || null != this.state.error,
            ),
            E(this, "renderError", (t) => {
              let { errors: e } = this.props;
              if (this.hasError(t)) {
                let n = e[t];
                return Array.isArray(n) ? n[0] : n;
              }
              return null;
            });
          let n =
            (null === (e = this.props.location) || void 0 === e
              ? void 0
              : e.search) != null && "" !== this.props.location.search
              ? (0, o.parse)(this.props.location.search)
              : null;
          this.state = {
            method: "",
            password: "",
            code: "",
            error: null,
            hasCancel: null != n && null != n.from_login,
            working: !1,
            success: !1,
          };
        }
      }
      E(A, "defaultProps", {
        transitionTo: (t) => n.g.location.assign(t),
        replaceWith: (t) => n.g.location.replace(t),
      });
      e.Z = function (t) {
        let e = (0, u.cj)([C.default], () => ({
          loginStatus: C.default.getLoginStatus(),
          mfaTicket: C.default.getMFATicket(),
          errors: C.default.getErrors(),
          mfaMethods: C.default.getMFAMethods(),
        }));
        return (0, r.jsx)(A, { ...t, ...e });
      };
    },
    129293: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var s = n(593473);
      function r(t) {
        let e = null != t.hash && "" !== t.hash ? (0, s.parse)(t.hash) : null;
        if ((null == e ? void 0 : e.token) != null) return e.token;
        let n =
          null != t.search && "" !== t.search ? (0, s.parse)(t.search) : null;
        return (null == n ? void 0 : n.token) != null ? n.token : null;
      }
    },
    379760: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return d;
        },
      });
      var s = n(200651);
      n(192379);
      var r = n(481060),
        i = n(600164),
        l = n(7557),
        a = n(388905),
        o = n(388032),
        c = n(988750),
        u = n(232186);
      function d(t) {
        let { title: e, subtitle: n, error: d, onSubmit: h, onCancel: p } = t;
        return (0, s.jsxs)(i.Z, {
          direction: i.Z.Direction.VERTICAL,
          children: [
            (0, s.jsx)(a.Dx, { className: u.marginBottom8, children: e }),
            (0, s.jsx)(a.DK, { className: c.subTitle, children: n }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)(l.Z, { inputClassName: c.codeInput, onSubmit: h }),
                null != d
                  ? (0, s.jsx)(r.Text, {
                      className: c.error,
                      variant: "text-sm/normal",
                      children: d,
                    })
                  : null,
              ],
            }),
            null != p &&
              (0, s.jsx)(r.Button, {
                className: c.button,
                onClick: p,
                color: r.Button.Colors.PRIMARY,
                children: o.intl.string(o.t["ETE/oK"]),
              }),
          ],
        });
      }
    },
    760213: function (t, e, n) {
      n.d(e, {
        W: function () {
          return s;
        },
        Z: function () {
          return I;
        },
      }),
        n(773603);
      var s,
        r,
        i = n(200651),
        l = n(192379),
        a = n(120356),
        o = n.n(a),
        c = n(442837),
        u = n(481060),
        d = n(893776),
        h = n(239091),
        p = n(598077),
        m = n(314897),
        x = n(246946),
        f = n(594174),
        g = n(626135),
        C = n(51144),
        j = n(480387),
        v = n(726745),
        N = n(251423),
        S = n(981631),
        E = n(388032),
        A = n(536554);
      function T(t) {
        let { actionText: e, user: n, onAction: s } = t,
          {
            currentUser: r,
            hidePrivateData: l,
            isAuthenticated: a,
          } = (0, c.cj)([f.default, x.Z, m.default], () => ({
            currentUser: f.default.getCurrentUser(),
            hidePrivateData: x.Z.hidePersonalInformation,
            isAuthenticated: m.default.isAuthenticated(),
          })),
          N = new p.Z(n),
          T = a && (null == r ? void 0 : r.id) === N.id,
          I = n.tokenStatus === v.q.INVALID,
          M = l || N.isPomelo() ? null : "#".concat(N.discriminator),
          k = null;
        return (
          T
            ? (k = (0, i.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: A.hintText,
                color: "text-positive",
                children: E.intl.string(E.t.seV8ys),
              }))
            : I &&
              (k = (0, i.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: A.hintText,
                color: "text-danger",
                children: E.intl.string(E.t.tYX2pq),
              })),
          (0, i.jsx)("div", {
            className: A.accountCard,
            children: (0, i.jsxs)("div", {
              className: A.userDetails,
              children: [
                (0, i.jsx)(u.Avatar, {
                  src: N.getAvatarURL(void 0, 40),
                  size: u.AvatarSizes.SIZE_40,
                  "aria-label": n.username,
                }),
                (0, i.jsxs)("div", {
                  className: o()(A.usernameSection, {
                    [A.hasActionMaxWidth]: !T,
                  }),
                  children: [
                    (0, i.jsxs)("div", {
                      className: A.username,
                      children: [
                        (0, i.jsx)(u.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          className: A.textOverflow,
                          children: C.ZP.getUserTag(N, {
                            mode: "username",
                            identifiable: l ? "never" : "always",
                          }),
                        }),
                        (0, i.jsx)(u.Text, {
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: M,
                        }),
                      ],
                    }),
                    k,
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: A.userActions,
                  children: [
                    !T &&
                      (0, i.jsx)(u.Button, {
                        onClick: function () {
                          if (I) {
                            s(0, n.id);
                            return;
                          }
                          g.default.track(S.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                            location: { section: S.jXE.MANAGE_ACCOUNTS_MODAL },
                          }),
                            j.yD(n.id),
                            s(1, n.id);
                        },
                        color: u.Button.Colors.PRIMARY,
                        children: I ? E.intl.string(E.t["DSN+h4"]) : e,
                      }),
                    (0, i.jsx)(u.Button, {
                      className: A.userActionMenu,
                      onClick: function (t) {
                        (0, h.vq)(t, (t) => {
                          let { onSelect: e } = t;
                          return (0, i.jsx)(u.Menu, {
                            "aria-label": E.intl.string(E.t["41qiDQ"]),
                            navId: "manage-multi-account",
                            onClose: h.Zy,
                            onSelect: e,
                            children: (0, i.jsx)(u.MenuItem, {
                              id: "remove-account",
                              label: E.intl.string(E.t.lSLMaW),
                              action: () => {
                                !(function () {
                                  d.Z.logout(null, n.id).finally(() => {
                                    j.Zd(n.id);
                                  });
                                  let t = {};
                                  null != r
                                    ? (t.section = S.jXE.MANAGE_ACCOUNTS_MODAL)
                                    : (t.page = S.Usc.LOGIN),
                                    g.default.track(
                                      S.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE,
                                      { location: t },
                                    ),
                                    s(2, n.id);
                                })(),
                                  null != e && e();
                              },
                              color: "danger",
                            }),
                          });
                        });
                      },
                      size: u.Button.Sizes.ICON,
                      look: u.Button.Looks.BLANK,
                      color: u.Button.Colors.WHITE,
                      "aria-label": E.intl.string(E.t.PdRCRk),
                      children: (0, i.jsx)(u.MoreHorizontalIcon, {
                        size: "md",
                        color: "currentColor",
                        className: A.overflowMenuIcon,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function I(t) {
        let { actionText: e, onAction: n } = t,
          { isLoading: s, multiAccountUsers: r } = (0, N.L)();
        return (0, i.jsx)("div", {
          className: A.list,
          children: s
            ? (0, i.jsx)(u.Spinner, {})
            : r.map((t, s) =>
                (0, i.jsxs)(
                  l.Fragment,
                  {
                    children: [
                      (0, i.jsx)(
                        T,
                        { user: t, actionText: e, onAction: n },
                        t.id,
                      ),
                      r.length - 1 !== s &&
                        (0, i.jsx)("div", {
                          role: "separator",
                          className: A.separator,
                        }),
                    ],
                  },
                  t.id,
                ),
              ),
        });
      }
      ((r = s || (s = {}))[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED");
    },
    742458: function (t, e, n) {
      var s, r;
      n.d(e, {
        Nz: function () {
          return s;
        },
        o9: function () {
          return a;
        },
      }),
        ((r = s || (s = {})).PHONE = "phone"),
        (r.EMAIL = "email");
      let i = /^[-() \d]+$/,
        l = (t) => t.startsWith("+");
      function a(t, e) {
        return "phone" === t
          ? !l(e)
          : "email" !== t && !(e.length < 3) && i.test(e);
      }
    },
    766650: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var s = n(200651),
        r = n(192379),
        i = n(120356),
        l = n.n(i),
        a = n(642128),
        o = n(481060),
        c = n(144114),
        u = n(317175),
        d = n(149938);
      function h(t) {
        let { show: e, alpha2: n, countryCode: i } = t,
          h = r.useRef(null),
          [p, m] = r.useState(0),
          [x, f] = r.useState(!1);
        r.useEffect(() => {
          function t() {
            var t, n;
            m(
              e &&
                null !==
                  (n =
                    null === (t = h.current) || void 0 === t
                      ? void 0
                      : t.getBoundingClientRect().width) &&
                void 0 !== n
                ? n
                : 0,
            );
          }
          return (
            t(),
            window.addEventListener("resize", t),
            () => window.removeEventListener("resize", t)
          );
        }, [e, n, i]);
        let g = (0, o.useSpring)({
            width: "".concat(p, "px"),
            onStart: () => {
              f(!0);
            },
            onRest: () => {
              f(!1);
            },
          }),
          C = (t) => {
            c.Z.setCountryCode(t);
          };
        return (0, s.jsx)(o.Popout, {
          position: "top",
          renderPopout: (t) =>
            (0, s.jsx)(u.Z, {
              className: d.popout,
              onClick: (e) => {
                C(e), t.closePopout();
              },
            }),
          children: (t) =>
            (0, s.jsx)("div", {
              className: l()(d.outerContainer, { [d.hidden]: !(e || x) }),
              children: (0, s.jsx)(a.animated.div, {
                className: d.container,
                style: g,
                children: (0, s.jsxs)("div", {
                  className: d.innerContainer,
                  ref: h,
                  children: [
                    (0, s.jsxs)(o.Clickable, {
                      ...t,
                      className: d.countryCode,
                      children: [n, " ", i],
                    }),
                    (0, s.jsx)("div", { className: d.separator }),
                  ],
                }),
              }),
            }),
        });
      }
    },
    952802: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var s = n(200651),
        r = n(192379),
        i = n(120356),
        l = n.n(i),
        a = n(481060),
        o = n(313201),
        c = n(742458),
        u = n(766650),
        d = n(208689),
        h = n(716722);
      function p(t) {
        let {
            alpha2: e,
            countryCode: n,
            forceMode: i,
            label: p,
            error: m,
            className: x,
            required: f,
            value: g,
            setRef: C,
            placeholder: j,
            autoFocus: v,
            maxLength: N,
            spellCheck: S,
            autoComplete: E,
            autoCapitalize: A,
            autoCorrect: T,
            onChange: I,
            inputClassName: M,
          } = t,
          k = (0, o.Dt)(),
          [Z, b] = r.useState(!1),
          w = (0, c.o9)(i, g);
        return (0, s.jsx)(a.FormItem, {
          title: p,
          error: m,
          className: x,
          required: f,
          tag: "label",
          htmlFor: k,
          children: (0, s.jsxs)("div", {
            className: l()(h.input, d.input, M, {
              [h.error]: null != m,
              [h.focused]: Z,
            }),
            children: [
              (0, s.jsx)(u.Z, { show: w, alpha2: e, countryCode: n }),
              (0, s.jsx)(a.TextInput, {
                id: k,
                name: "email",
                type: i === c.Nz.EMAIL ? "email" : "text",
                value: g,
                inputRef: C,
                placeholder: j,
                "aria-label": p,
                required: f,
                onChange: function (t) {
                  let e = (0, c.o9)(i, t) ? n : "";
                  I(t, e);
                },
                autoComplete: E,
                autoCapitalize: A,
                autoCorrect: T,
                autoFocus: v,
                maxLength: N,
                spellCheck: S,
                className: d.inputWrapper,
                inputClassName: d.inputField,
                onFocus: () => b(!0),
                onBlur: () => b(!1),
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=d3829b64265724f1602d.js.map
