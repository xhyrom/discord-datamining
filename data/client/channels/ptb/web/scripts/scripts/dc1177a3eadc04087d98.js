"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85325"],
  {
    26230: function (e) {
      e.exports = "/assets/afd44ae05126b5fab40d.svg";
    },
    935227: function (e) {
      e.exports = "/assets/50b96601171fd361101c.svg";
    },
    479495: function (e, t, n) {
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
      function E(e, t, n) {
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
      u.ZP.initialize();
      class T extends (s = i.PureComponent) {
        componentDidMount() {
          (0, g.e)("reset_password");
        }
        renderPasswordReset() {
          let { password: e, error: t, hasCancel: s, working: i } = this.state,
            l = null != t ? t : this.renderError("password");
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
                    value: e,
                    onChange: (e) => this.setState({ password: e }),
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
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, r.jsx)(m.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(f.Cd, {
              mfaFinish: (e) => {
                let { mfaType: t, data: n } = e;
                return this.handleTokenSubmitMFAv2(t, n);
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
        constructor(e) {
          var t;
          super(e),
            E(this, "handleSubmit", async (e) => {
              let {
                  location: t,
                  onLoginSuccess: n,
                  source: s,
                  resetToken: r,
                } = this.props,
                { password: i, error: l } = this.state;
              if ((e.preventDefault(), 0 === i.length)) {
                this.setState({ error: N.intl.string(N.t.R98xDw) }),
                  j.S.dispatch(v.CkL.WAVE_EMPHASIZE);
                return;
              }
              null != l && this.setState({ error: null });
              let a = r;
              if ((null != t && (a = (0, p.Z)(t)), null != a)) {
                this.setState({ working: !0 });
                try {
                  let {
                    result: e,
                    sms: t,
                    webauthn: r,
                    ticket: l,
                    token: o,
                    totp: c,
                    backup: u,
                  } = await h.Z.resetPassword(a, i, s);
                  e === h.c.MFA
                    ? d.Z.dispatch({
                        type: "LOGIN_MFA_STEP",
                        ticket: l,
                        sms: t,
                        webauthn: r,
                        totp: c,
                        backup: u,
                      })
                    : null != n
                      ? n(o)
                      : (d.Z.dispatch({ type: "LOGIN_SUCCESS", token: o }),
                        this.handlePasswordChangeSuccess());
                } catch (e) {}
                this.setState({ working: !1 });
              }
            }),
            E(this, "handleTokenSubmitMFAv2", async (e, t) => {
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
              if ((null != n && (o = (0, p.Z)(n)), null == o))
                return d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
              this.setState({ working: !0 });
              try {
                let n = await h.Z.resetPasswordMFAv2({
                  method: e,
                  code: t,
                  ticket: s,
                  password: a,
                  token: o,
                  source: l,
                });
                if (null != r) {
                  r(n);
                  return;
                }
                d.Z.dispatch({ type: "LOGIN_SUCCESS", token: n }),
                  this.handlePasswordChangeSuccess();
              } finally {
                this.setState({ working: !1 });
              }
            }),
            E(this, "handlePasswordChangeSuccess", () => {
              let { replaceWith: e } = this.props;
              if (c.Em || c.tq) {
                this.setState({ success: !0 });
                return;
              }
              e(v.Z5c.APP);
            }),
            E(this, "handleGoToLogin", () => {
              let { transitionTo: e } = this.props;
              h.Z.loginReset(), e(v.Z5c.LOGIN);
            }),
            E(this, "handleOpenApp", () => {
              (0, x.Z)("password_reset");
            }),
            E(
              this,
              "hasError",
              (e) => null != this.props.errors[e] || null != this.state.error,
            ),
            E(this, "renderError", (e) => {
              let { errors: t } = this.props;
              if (this.hasError(e)) {
                let n = t[e];
                return Array.isArray(n) ? n[0] : n;
              }
              return null;
            });
          let n =
            (null === (t = this.props.location) || void 0 === t
              ? void 0
              : t.search) != null && "" !== this.props.location.search
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
      E(T, "defaultProps", {
        transitionTo: (e) => n.g.location.assign(e),
        replaceWith: (e) => n.g.location.replace(e),
      });
      t.Z = function (e) {
        let t = (0, u.cj)([C.default], () => ({
          mfaTicket: C.default.getMFATicket(),
          errors: C.default.getErrors(),
          mfaMethods: C.default.getMFAMethods(),
        }));
        return (0, r.jsx)(T, { ...e, ...t });
      };
    },
    129293: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(593473);
      function r(e) {
        let t = null != e.hash && "" !== e.hash ? (0, s.parse)(e.hash) : null;
        if ((null == t ? void 0 : t.token) != null) return t.token;
        let n =
          null != e.search && "" !== e.search ? (0, s.parse)(e.search) : null;
        return (null == n ? void 0 : n.token) != null ? n.token : null;
      }
    },
    379760: function (e, t, n) {
      n.d(t, {
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
      function d(e) {
        let { title: t, subtitle: n, error: d, onSubmit: h, onCancel: p } = e;
        return (0, s.jsxs)(i.Z, {
          direction: i.Z.Direction.VERTICAL,
          children: [
            (0, s.jsx)(a.Dx, { className: u.marginBottom8, children: t }),
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
    760213: function (e, t, n) {
      n.d(t, {
        W: function () {
          return s;
        },
        Z: function () {
          return k;
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
        T = n(536554);
      function A(e) {
        let { actionText: t, user: n, onAction: s } = e,
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
          A = a && (null == r ? void 0 : r.id) === N.id,
          k = n.tokenStatus === v.q.INVALID,
          I = l || N.isPomelo() ? null : "#".concat(N.discriminator),
          M = null;
        return (
          A
            ? (M = (0, i.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: T.hintText,
                color: "text-positive",
                children: E.intl.string(E.t.seV8ys),
              }))
            : k &&
              (M = (0, i.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: T.hintText,
                color: "text-danger",
                children: E.intl.string(E.t.tYX2pq),
              })),
          (0, i.jsx)("div", {
            className: T.accountCard,
            children: (0, i.jsxs)("div", {
              className: T.userDetails,
              children: [
                (0, i.jsx)(u.Avatar, {
                  src: N.getAvatarURL(void 0, 40),
                  size: u.AvatarSizes.SIZE_40,
                  "aria-label": n.username,
                }),
                (0, i.jsxs)("div", {
                  className: o()(T.usernameSection, {
                    [T.hasActionMaxWidth]: !A,
                  }),
                  children: [
                    (0, i.jsxs)("div", {
                      className: T.username,
                      children: [
                        (0, i.jsx)(u.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          className: T.textOverflow,
                          children: C.ZP.getUserTag(N, {
                            mode: "username",
                            identifiable: l ? "never" : "always",
                          }),
                        }),
                        (0, i.jsx)(u.Text, {
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: I,
                        }),
                      ],
                    }),
                    M,
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: T.userActions,
                  children: [
                    !A &&
                      (0, i.jsx)(u.Button, {
                        onClick: function () {
                          if (k) {
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
                        children: k ? E.intl.string(E.t["DSN+h4"]) : t,
                      }),
                    (0, i.jsx)(u.Button, {
                      className: T.userActionMenu,
                      onClick: function (e) {
                        (0, h.vq)(e, (e) => {
                          let { onSelect: t } = e;
                          return (0, i.jsx)(u.Menu, {
                            "aria-label": E.intl.string(E.t["41qiDQ"]),
                            navId: "manage-multi-account",
                            onClose: h.Zy,
                            onSelect: t,
                            children: (0, i.jsx)(u.MenuItem, {
                              id: "remove-account",
                              label: E.intl.string(E.t.lSLMaW),
                              action: () => {
                                !(function () {
                                  d.Z.logout(null, n.id).finally(() => {
                                    j.Zd(n.id);
                                  });
                                  let e = {};
                                  null != r
                                    ? (e.section = S.jXE.MANAGE_ACCOUNTS_MODAL)
                                    : (e.page = S.Usc.LOGIN),
                                    g.default.track(
                                      S.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE,
                                      { location: e },
                                    ),
                                    s(2, n.id);
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
                      "aria-label": E.intl.string(E.t.PdRCRk),
                      children: (0, i.jsx)(u.MoreHorizontalIcon, {
                        size: "md",
                        color: "currentColor",
                        className: T.overflowMenuIcon,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function k(e) {
        let { actionText: t, onAction: n } = e,
          { isLoading: s, multiAccountUsers: r } = (0, N.L)();
        return (0, i.jsx)("div", {
          className: T.list,
          children: s
            ? (0, i.jsx)(u.Spinner, {})
            : r.map((e, s) =>
                (0, i.jsxs)(
                  l.Fragment,
                  {
                    children: [
                      (0, i.jsx)(
                        A,
                        { user: e, actionText: t, onAction: n },
                        e.id,
                      ),
                      r.length - 1 !== s &&
                        (0, i.jsx)("div", {
                          role: "separator",
                          className: T.separator,
                        }),
                    ],
                  },
                  e.id,
                ),
              ),
        });
      }
      ((r = s || (s = {}))[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED");
    },
    742458: function (e, t, n) {
      var s, r;
      n.d(t, {
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
        l = (e) => e.startsWith("+");
      function a(e, t) {
        return "phone" === e
          ? !l(t)
          : "email" !== e && !(t.length < 3) && i.test(t);
      }
    },
    766650: function (e, t, n) {
      n.d(t, {
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
      function h(e) {
        let { show: t, alpha2: n, countryCode: i } = e,
          h = r.useRef(null),
          [p, m] = r.useState(0),
          [x, f] = r.useState(!1);
        r.useEffect(() => {
          function e() {
            var e, n;
            m(
              t &&
                null !==
                  (n =
                    null === (e = h.current) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect().width) &&
                void 0 !== n
                ? n
                : 0,
            );
          }
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, [t, n, i]);
        let g = (0, o.useSpring)({
            width: "".concat(p, "px"),
            onStart: () => {
              f(!0);
            },
            onRest: () => {
              f(!1);
            },
          }),
          C = (e) => {
            c.Z.setCountryCode(e);
          };
        return (0, s.jsx)(o.Popout, {
          position: "top",
          renderPopout: (e) =>
            (0, s.jsx)(u.Z, {
              className: d.popout,
              onClick: (t) => {
                C(t), e.closePopout();
              },
            }),
          children: (e) =>
            (0, s.jsx)("div", {
              className: l()(d.outerContainer, { [d.hidden]: !(t || x) }),
              children: (0, s.jsx)(a.animated.div, {
                className: d.container,
                style: g,
                children: (0, s.jsxs)("div", {
                  className: d.innerContainer,
                  ref: h,
                  children: [
                    (0, s.jsxs)(o.Clickable, {
                      ...e,
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
    952802: function (e, t, n) {
      n.d(t, {
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
      function p(e) {
        let {
            alpha2: t,
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
            autoCapitalize: T,
            autoCorrect: A,
            onChange: k,
            inputClassName: I,
          } = e,
          M = (0, o.Dt)(),
          [Z, w] = r.useState(!1),
          P = (0, c.o9)(i, g);
        return (0, s.jsx)(a.FormItem, {
          title: p,
          error: m,
          className: x,
          required: f,
          tag: "label",
          htmlFor: M,
          children: (0, s.jsxs)("div", {
            className: l()(h.input, d.input, I, {
              [h.error]: null != m,
              [h.focused]: Z,
            }),
            children: [
              (0, s.jsx)(u.Z, { show: P, alpha2: t, countryCode: n }),
              (0, s.jsx)(a.TextInput, {
                id: M,
                name: "email",
                type: i === c.Nz.EMAIL ? "email" : "text",
                value: g,
                inputRef: C,
                placeholder: j,
                "aria-label": p,
                required: f,
                onChange: function (e) {
                  let t = (0, c.o9)(i, e) ? n : "";
                  k(e, t);
                },
                autoComplete: E,
                autoCapitalize: T,
                autoCorrect: A,
                autoFocus: v,
                maxLength: N,
                spellCheck: S,
                className: d.inputWrapper,
                inputClassName: d.inputField,
                onFocus: () => w(!0),
                onBlur: () => w(!1),
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=dc1177a3eadc04087d98.js.map
