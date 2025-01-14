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
    479495: function (e, t, n) {
      n(757143);
      var s,
        r = n(200651),
        i = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(593473),
        c = n(873546),
        u = n(442837),
        d = n(570140),
        h = n(893776),
        p = n(129293),
        m = n(388905),
        f = n(17894),
        g = n(124860),
        x = n(108427),
        C = n(314897),
        v = n(585483),
        N = n(981631),
        j = n(388032),
        y = n(232186);
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
      class k extends (s = i.PureComponent) {
        componentDidMount() {
          (0, x.e)("reset_password");
        }
        renderPasswordReset() {
          let { password: e, error: t, hasCancel: s } = this.state,
            i = this.isSubmitting(),
            o = null != t ? t : this.renderError("password");
          return (0, r.jsxs)(m.ZP, {
            onSubmit: this.handleSubmit,
            tag: "form",
            children: [
              (0, r.jsx)("img", {
                alt: "",
                src: null == o ? n(26230) : n(935227),
                className: y.marginBottom20,
              }),
              (0, r.jsx)(m.Dx, { children: j.intl.string(j.t["1LV6Ki"]) }),
              (0, r.jsxs)(m.gO, {
                className: y.marginTop20,
                children: [
                  (0, r.jsx)(m.II, {
                    label: j.intl.string(j.t["8dM4FB"]),
                    className: y.marginBottom20,
                    name: "password",
                    value: e,
                    onChange: (e) => this.setState({ password: e }),
                    error: o,
                    type: "password",
                  }),
                  (0, r.jsx)(m.zx, {
                    type: "submit",
                    submitting: i,
                    children: j.intl.string(j.t["FRep5+"]),
                  }),
                  s
                    ? (0, r.jsx)(m.zx, {
                        className: y.marginTop8,
                        onClick: this.handleGoToLogin,
                        submitting: i,
                        color: m.zx.Colors.PRIMARY,
                        children: j.intl.string(j.t["ETE/oK"]),
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
            children: (0, r.jsx)(g.Cd, {
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
                className: l()(y.marginBottom20, c.tq ? y.marginTop20 : ""),
              }),
              (0, r.jsx)(m.Dx, {
                className: y.marginBottom40,
                children: j.intl.string(j.t.WAUOoK),
              }),
              (0, r.jsx)(m.zx, {
                onClick: this.handleOpenApp,
                children: j.intl.string(j.t.uJWIj4),
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
                { password: i, error: o } = this.state;
              if ((null != e && e.preventDefault(), 0 === i.length)) {
                this.setState({ error: j.intl.string(j.t.R98xDw) }),
                  v.S.dispatch(N.CkL.WAVE_EMPHASIZE);
                return;
              }
              null != o && this.setState({ error: null });
              let l = r;
              if ((null != t && (l = (0, p.Z)(t)), null != l)) {
                this.setState({ working: !0 });
                try {
                  let {
                    result: e,
                    sms: t,
                    webauthn: r,
                    ticket: o,
                    token: a,
                    totp: c,
                    backup: u,
                  } = await h.Z.resetPassword(l, i, s);
                  e === h.c.MFA
                    ? d.Z.dispatch({
                        type: "LOGIN_MFA_STEP",
                        ticket: o,
                        sms: t,
                        webauthn: r,
                        totp: c,
                        backup: u,
                      })
                    : null != n
                      ? n(a)
                      : (d.Z.dispatch({ type: "LOGIN_SUCCESS", token: a }),
                        this.handlePasswordChangeSuccess());
                } catch (e) {}
                this.setState({ working: !1 });
              }
            }),
            E(this, "handleTokenSubmitMFAv2", (e, t) => {
              let {
                  location: n,
                  mfaTicket: s,
                  onLoginSuccess: r,
                  resetToken: i,
                  source: o,
                } = this.props,
                { password: l } = this.state;
              if (0 === l.length)
                return d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
              let a = i;
              return (null != n && (a = (0, p.Z)(n)), null == a)
                ? (d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject())
                : h.Z.resetPasswordMFAv2({
                    method: e,
                    code: t,
                    ticket: s,
                    password: l,
                    token: a,
                    source: o,
                  }).then((e) => {
                    null != r
                      ? r(e)
                      : (d.Z.dispatch({ type: "LOGIN_SUCCESS", token: e }),
                        this.handlePasswordChangeSuccess());
                  });
            }),
            E(this, "handlePasswordChangeSuccess", () => {
              let { replaceWith: e } = this.props;
              if (c.Em || c.tq) {
                this.setState({ success: !0 });
                return;
              }
              e(N.Z5c.APP);
            }),
            E(this, "handleGoToLogin", () => {
              let { transitionTo: e } = this.props;
              h.Z.loginReset(), e(N.Z5c.LOGIN);
            }),
            E(this, "isSubmitting", () => {
              let { loginStatus: e } = this.props,
                { working: t } = this.state;
              return t || e === N.u34.LOGGING_IN_MFA;
            }),
            E(this, "handleOpenApp", () => {
              (0, f.Z)("password_reset");
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
              ? (0, a.parse)(this.props.location.search)
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
      E(k, "defaultProps", {
        transitionTo: (e) => n.g.location.assign(e),
        replaceWith: (e) => n.g.location.replace(e),
      });
      t.Z = function (e) {
        let t = (0, u.cj)([C.default], () => ({
          loginStatus: C.default.getLoginStatus(),
          mfaTicket: C.default.getMFATicket(),
          errors: C.default.getErrors(),
          mfaMethods: C.default.getMFAMethods(),
        }));
        return (0, r.jsx)(k, { ...e, ...t });
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
        o = n(7557),
        l = n(388905),
        a = n(388032),
        c = n(988750),
        u = n(232186);
      function d(e) {
        let { title: t, subtitle: n, error: d, onSubmit: h, onCancel: p } = e;
        return (0, s.jsxs)(i.Z, {
          direction: i.Z.Direction.VERTICAL,
          children: [
            (0, s.jsx)(l.Dx, { className: u.marginBottom8, children: t }),
            (0, s.jsx)(l.DK, { className: c.subTitle, children: n }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)(o.Z, { inputClassName: c.codeInput, onSubmit: h }),
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
                children: a.intl.string(a.t["ETE/oK"]),
              }),
          ],
        });
      }
    },
    7557: function (e, t, n) {
      n(47120), n(653041);
      var s,
        r,
        i = n(200651),
        o = n(192379),
        l = n(120356),
        a = n.n(l),
        c = n(600164),
        u = n(145097);
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
      class h extends (s = o.PureComponent) {
        render() {
          let { className: e } = this.props;
          return (0, i.jsx)("input", {
            ref: this.setCodeBlockRef,
            className: a()(u.input, e),
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
      d(h, "defaultProps", { autoFocus: !1 });
      class p extends (r = o.PureComponent) {
        render() {
          let { className: e, inputClassName: t } = this.props,
            { codes: n } = this.state,
            s = [];
          for (let e = 0; e < n.length; e++)
            e === n.length / 2 &&
              s.push((0, i.jsx)("div", { className: u.spacer }, "spacer")),
              s.push(
                (0, i.jsx)(
                  h,
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
          return (0, i.jsx)(c.Z, {
            align: c.Z.Align.CENTER,
            justify: c.Z.Justify.CENTER,
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
    760213: function (e, t, n) {
      n.d(t, {
        W: function () {
          return s;
        },
        Z: function () {
          return S;
        },
      }),
        n(773603);
      var s,
        r,
        i = n(200651),
        o = n(192379),
        l = n(120356),
        a = n.n(l),
        c = n(442837),
        u = n(481060),
        d = n(893776),
        h = n(239091),
        p = n(598077),
        m = n(314897),
        f = n(246946),
        g = n(594174),
        x = n(626135),
        C = n(51144),
        v = n(480387),
        N = n(726745),
        j = n(251423),
        y = n(981631),
        E = n(388032),
        k = n(536554);
      function w(e) {
        let { actionText: t, user: n, onAction: s } = e,
          {
            currentUser: r,
            hidePrivateData: o,
            isAuthenticated: l,
          } = (0, c.cj)([g.default, f.Z, m.default], () => ({
            currentUser: g.default.getCurrentUser(),
            hidePrivateData: f.Z.hidePersonalInformation,
            isAuthenticated: m.default.isAuthenticated(),
          })),
          j = new p.Z(n),
          w = l && (null == r ? void 0 : r.id) === j.id,
          S = n.tokenStatus === N.q.INVALID,
          A = o || j.isPomelo() ? null : "#".concat(j.discriminator),
          b = null;
        return (
          w
            ? (b = (0, i.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: k.hintText,
                color: "text-positive",
                children: E.intl.string(E.t.seV8ys),
              }))
            : S &&
              (b = (0, i.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: k.hintText,
                color: "text-danger",
                children: E.intl.string(E.t.tYX2pq),
              })),
          (0, i.jsx)("div", {
            className: k.accountCard,
            children: (0, i.jsxs)("div", {
              className: k.userDetails,
              children: [
                (0, i.jsx)(u.Avatar, {
                  src: j.getAvatarURL(void 0, 40),
                  size: u.AvatarSizes.SIZE_40,
                  "aria-label": n.username,
                }),
                (0, i.jsxs)("div", {
                  className: a()(k.usernameSection, {
                    [k.hasActionMaxWidth]: !w,
                  }),
                  children: [
                    (0, i.jsxs)("div", {
                      className: k.username,
                      children: [
                        (0, i.jsx)(u.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          className: k.textOverflow,
                          children: C.ZP.getUserTag(j, {
                            mode: "username",
                            identifiable: o ? "never" : "always",
                          }),
                        }),
                        (0, i.jsx)(u.Text, {
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: A,
                        }),
                      ],
                    }),
                    b,
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: k.userActions,
                  children: [
                    !w &&
                      (0, i.jsx)(u.Button, {
                        onClick: function () {
                          if (S) {
                            s(0, n.id);
                            return;
                          }
                          x.default.track(y.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                            location: { section: y.jXE.MANAGE_ACCOUNTS_MODAL },
                          }),
                            v.yD(n.id),
                            s(1, n.id);
                        },
                        color: u.Button.Colors.PRIMARY,
                        children: S ? E.intl.string(E.t["DSN+h4"]) : t,
                      }),
                    (0, i.jsx)(u.Button, {
                      className: k.userActionMenu,
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
                                    v.Zd(n.id);
                                  });
                                  let e = {};
                                  null != r
                                    ? (e.section = y.jXE.MANAGE_ACCOUNTS_MODAL)
                                    : (e.page = y.Usc.LOGIN),
                                    x.default.track(
                                      y.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE,
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
                        className: k.overflowMenuIcon,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function S(e) {
        let { actionText: t, onAction: n } = e,
          { isLoading: s, multiAccountUsers: r } = (0, j.L)();
        return (0, i.jsx)("div", {
          className: k.list,
          children: s
            ? (0, i.jsx)(u.Spinner, {})
            : r.map((e, s) =>
                (0, i.jsxs)(
                  o.Fragment,
                  {
                    children: [
                      (0, i.jsx)(
                        w,
                        { user: e, actionText: t, onAction: n },
                        e.id,
                      ),
                      r.length - 1 !== s &&
                        (0, i.jsx)("div", {
                          role: "separator",
                          className: k.separator,
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
          return l;
        },
      }),
        ((r = s || (s = {})).PHONE = "phone"),
        (r.EMAIL = "email");
      let i = /^[-() \d]+$/,
        o = (e) => e.startsWith("+");
      function l(e, t) {
        return "phone" === e
          ? !o(t)
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
        o = n.n(i),
        l = n(476183),
        a = n(481060),
        c = n(144114),
        u = n(317175),
        d = n(149938);
      function h(e) {
        let { show: t, alpha2: n, countryCode: i } = e,
          h = r.useRef(null),
          [p, m] = r.useState(0),
          [f, g] = r.useState(!1);
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
        let x = (0, a.useSpring)({
            width: "".concat(p, "px"),
            onStart: () => {
              g(!0);
            },
            onRest: () => {
              g(!1);
            },
          }),
          C = (e) => {
            c.Z.setCountryCode(e);
          };
        return (0, s.jsx)(a.Popout, {
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
              className: o()(d.outerContainer, { [d.hidden]: !(t || f) }),
              children: (0, s.jsx)(l.animated.div, {
                className: d.container,
                style: x,
                children: (0, s.jsxs)("div", {
                  className: d.innerContainer,
                  ref: h,
                  children: [
                    (0, s.jsxs)(a.Clickable, {
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
    317175: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      }),
        n(390547);
      var s = n(200651),
        r = n(192379),
        i = n(120356),
        o = n.n(i),
        l = n(658722),
        a = n.n(l),
        c = n(392711),
        u = n.n(c),
        d = n(217986),
        h = n(481060),
        p = n(600164),
        m = n(133080),
        f = n(388032),
        g = n(132646),
        x = n(616926);
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
      class v extends r.PureComponent {
        renderItems() {
          let { query: e } = this.state,
            t = d.Z.flatMap((e, t) => {
              let { alpha2: n, phoneCountryCodes: r, name: i } = e,
                o = (0, m.q9)(n);
              return r.map((e) => ({
                key: "".concat(t, "-").concat(e),
                name: i,
                translatedName: o,
                countryData: { name: i, alpha2: n, code: e },
                children: (0, s.jsxs)(p.Z, {
                  className: g.countryItem,
                  justify: p.Z.Justify.CENTER,
                  align: p.Z.Align.CENTER,
                  children: [
                    (0, s.jsx)(p.Z.Child, {
                      className: g.countryName,
                      children: o,
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
                  a()(e.toLowerCase(), t.name.toLowerCase()) ||
                  a()(e.toLowerCase(), t.translatedName.toLowerCase()),
              )
              .map((e) =>
                (0, r.createElement)(h.PopoutList.Item, {
                  ...e,
                  key: e.key,
                  onClick: () => this.onClick(e.countryData),
                }),
              )
              .value();
          return 0 === n.length
            ? (0, s.jsx)(h.PopoutList.Empty, {
                children: f.intl.string(f.t.PoWNfX),
              })
            : (0, s.jsx)(h.ScrollerAuto, {
                className: g.phoneFieldScroller,
                children: n,
              });
        }
        render() {
          let { className: e } = this.props;
          return (0, s.jsxs)(h.PopoutList, {
            className: o()(g.phoneFieldPopout, x.elevationBorderLow, e),
            children: [
              (0, s.jsx)(h.PopoutList.SearchBar, {
                query: this.state.query,
                placeholder: f.intl.string(f.t.hGOODg),
                onChange: this.onChangeQuery,
                onClear: this.onClearQuery,
                autoComplete: "off",
              }),
              (0, s.jsx)(h.PopoutList.Divider, {}),
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
        o = n.n(i),
        l = n(481060),
        a = n(313201),
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
            className: f,
            required: g,
            value: x,
            setRef: C,
            placeholder: v,
            autoFocus: N,
            maxLength: j,
            spellCheck: y,
            autoComplete: E,
            autoCapitalize: k,
            autoCorrect: w,
            onChange: S,
            inputClassName: A,
          } = e,
          b = (0, a.Dt)(),
          [T, I] = r.useState(!1),
          P = (0, c.o9)(i, x);
        return (0, s.jsx)(l.FormItem, {
          title: p,
          error: m,
          className: f,
          required: g,
          tag: "label",
          htmlFor: b,
          children: (0, s.jsxs)("div", {
            className: o()(h.input, d.input, A, {
              [h.error]: null != m,
              [h.focused]: T,
            }),
            children: [
              (0, s.jsx)(u.Z, { show: P, alpha2: t, countryCode: n }),
              (0, s.jsx)(l.TextInput, {
                id: b,
                name: "email",
                type: i === c.Nz.EMAIL ? "email" : "text",
                value: x,
                inputRef: C,
                placeholder: v,
                "aria-label": p,
                required: g,
                onChange: function (e) {
                  let t = (0, c.o9)(i, e) ? n : "";
                  S(e, t);
                },
                autoComplete: E,
                autoCapitalize: k,
                autoCorrect: w,
                autoFocus: N,
                maxLength: j,
                spellCheck: y,
                className: d.inputWrapper,
                inputClassName: d.inputField,
                onFocus: () => I(!0),
                onBlur: () => I(!1),
              }),
            ],
          }),
        });
      }
    },
    849055: function (e, t, n) {
      function s(e) {
        let t = "==".slice(0, (4 - (e.length % 4)) % 4),
          n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
          s = new ArrayBuffer(n.length),
          r = new Uint8Array(s);
        for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
        return s;
      }
      function r(e) {
        let t = new Uint8Array(e),
          n = "";
        for (let e of t) n += String.fromCharCode(e);
        return btoa(n)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
      }
      n.d(t, {
        U2: function () {
          return v;
        },
        Ue: function () {
          return C;
        },
      });
      var i = "copy",
        o = "convert";
      function l(e, t, n) {
        if (t === i) return n;
        if (t === o) return e(n);
        if (t instanceof Array) return n.map((n) => l(e, t[0], n));
        if (t instanceof Object) {
          let s = {};
          for (let [r, i] of Object.entries(t)) {
            if (i.derive) {
              let e = i.derive(n);
              void 0 !== e && (n[r] = e);
            }
            if (!(r in n)) {
              if (i.required) throw Error(`Missing key: ${r}`);
              continue;
            }
            if (null == n[r]) {
              s[r] = null;
              continue;
            }
            s[r] = l(e, i.schema, n[r]);
          }
          return s;
        }
      }
      function a(e, t) {
        return { required: !0, schema: e, derive: t };
      }
      function c(e) {
        return { required: !0, schema: e };
      }
      function u(e) {
        return { required: !1, schema: e };
      }
      var d = { type: c(i), id: c(o), transports: u(i) },
        h = { appid: u(i), appidExclude: u(i), credProps: u(i) },
        p = { appid: u(i), appidExclude: u(i), credProps: u(i) },
        m = {
          publicKey: c({
            rp: c(i),
            user: c({ id: c(o), name: c(i), displayName: c(i) }),
            challenge: c(o),
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
          rawId: c(o),
          authenticatorAttachment: u(i),
          response: c({
            clientDataJSON: c(o),
            attestationObject: c(o),
            transports: a(i, (e) => {
              var t;
              return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            }),
          }),
          clientExtensionResults: a(p, (e) => e.getClientExtensionResults()),
        },
        g = {
          mediation: u(i),
          publicKey: c({
            challenge: c(o),
            timeout: u(i),
            rpId: u(i),
            allowCredentials: u([d]),
            userVerification: u(i),
            extensions: u(h),
          }),
          signal: u(i),
        },
        x = {
          type: c(i),
          id: c(i),
          rawId: c(o),
          authenticatorAttachment: u(i),
          response: c({
            clientDataJSON: c(o),
            authenticatorData: c(o),
            signature: c(o),
            userHandle: c(o),
          }),
          clientExtensionResults: a(p, (e) => e.getClientExtensionResults()),
        };
      async function C(e) {
        let t = await navigator.credentials.create(l(s, m, e));
        return l(r, f, t);
      }
      async function v(e) {
        let t = await navigator.credentials.get(l(s, g, e));
        return l(r, x, t);
      }
    },
  },
]);
//# sourceMappingURL=7fcb15c07321b786aaea.js.map
