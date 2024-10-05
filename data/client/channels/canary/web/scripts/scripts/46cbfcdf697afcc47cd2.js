"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41315"],
  {
    863942: function (e, t, n) {
      var s = n(22092);
      (0, n(192291).exportTypedArrayStaticMethod)("from", n(12367), s);
    },
    70519: function (e) {
      e.exports = "/assets/76a4af59aa173c519461.svg";
    },
    806848: function (e) {
      e.exports = "/assets/6183fdc13d8046fd5bda.svg";
    },
    512266: function (e) {
      e.exports = "/assets/a2d51a24d014f52f83a6.png";
    },
    105020: function (e) {
      e.exports = "/assets/89ea0e62d0f8ffa67a17.svg";
    },
    211095: function (e) {
      e.exports = "/assets/86755fd1deda5cb45518.svg";
    },
    640356: function (e) {
      e.exports = "/assets/3880dc73d6be9d91ef36.svg";
    },
    515695: function (e) {
      e.exports = "/assets/450a761db3bfe89ca9b9.png";
    },
    892235: function (e) {
      e.exports = "/assets/48f03d965f1e82275006.svg";
    },
    375673: function (e) {
      e.exports = "/assets/3cf7f333e815240d3294.svg";
    },
    73962: function (e) {
      e.exports = "/assets/ed7318a94c14ce41d11d.svg";
    },
    689411: function (e) {
      e.exports = "/assets/831c999494cb5e095eae.svg";
    },
    2984: function (e) {
      e.exports = "/assets/0e5029fd9cd4812b6712.svg";
    },
    575703: function (e) {
      e.exports = "/assets/b9995525a52dc58aecf5.svg";
    },
    822699: function (e, t, n) {
      n.r(t), n(47120);
      var s = n(735250),
        r = n(470079),
        i = n(593473),
        a = n(990547),
        o = n(873546),
        l = n(442837),
        c = n(570140),
        u = n(893776),
        d = n(533307),
        _ = n(447543),
        h = n(126399),
        E = n(765717),
        p = n(267394),
        g = n(761305),
        f = n(698177),
        m = n(353926),
        I = n(409059),
        N = n(962220),
        T = n(637776),
        A = n(264229),
        x = n(677760),
        C = n(893607),
        v = n(314897),
        Z = n(82142),
        S = n(701190),
        R = n(626135),
        O = n(81063),
        b = n(449934),
        D = n(768581),
        M = n(625054),
        L = n(645499),
        P = n(320830),
        j = n(721751),
        y = n(718182),
        G = n(223543),
        B = n(73906),
        U = n(299852),
        F = n(39514),
        k = n(236446),
        w = n(9325),
        H = n(344295),
        V = n(781428),
        z = n(209411),
        K = n(649156),
        W = n(423527),
        Y = n(424044),
        q = n(479495),
        J = n(881317),
        X = n(886806),
        Q = n(981631),
        $ = n(188785),
        ee = n(245335);
      n(179645);
      l.ZP.initialize();
      let et = (0, P.Z)(V.Z),
        en = (0, P.Z)(z.Z),
        es = (0, P.Z)(H.Z),
        er = (0, P.Z)(k.Z),
        ei = (0, P.Z)(F.Z),
        ea = (0, P.Z)(x.Z),
        eo = (0, P.Z)(W.Z),
        el = (0, P.Z)(y.Z),
        ec = (0, P.Z)(G.Z),
        eu = (0, P.Z)(X.Z),
        ed = (0, P.Z)(f.Z),
        e_ = (0, P.Z)(q.Z),
        eh = (0, P.Z)(U.Z),
        eE = (0, P.Z)(g.Z),
        ep = (0, P.Z)(T.Z),
        eg = (0, P.Z)(B.Z),
        ef = (0, P.Z)(K.Z),
        em = (0, P.Z)(J.Z),
        eI = (0, P.Z)(Y.Z);
      class eN extends r.PureComponent {
        static getDerivedStateFromProps(e, t) {
          var n;
          let { invite: s, location: r } = e,
            { backgroundId: a } = t,
            o =
              null !== (n = (0, i.parse)(r.search).redirect_to) && void 0 !== n
                ? n
                : null;
          (null == o || "" === o || !(0, L.B)(o) || o.startsWith(Q.Z5c.ME)) &&
            (o = null);
          let l = null;
          if (null == s) l = (0, b.gK)(o);
          else if ((null == s ? void 0 : s.state) === Q.r2o.RESOLVED) {
            let { guild: e, target_application: t } = s;
            null != t
              ? null != a && (l = (0, O.getAssetImage)(t.id, a, 1024))
              : null != e &&
                "string" == typeof e.splash &&
                (l = D.ZP.getGuildSplashURL({ id: e.id, splash: e.splash }));
          }
          return { redirectTo: o, splash: l };
        }
        componentDidMount() {
          let {
            inviteKey: e,
            hasLoadedExperiments: t,
            isAuthenticated: n,
          } = this.props;
          null != e &&
            (!t && n && u.Z.getExperiments(!0),
            R.default.track(
              Q.rMx.INVITE_OPENED,
              {
                invite_code: (0, A.jX)(e),
                load_time: M.Z.getTimeSinceNavigationStart(),
              },
              { flush: !0 },
            )),
            (t || $.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            h.Z.initialize();
        }
        componentDidUpdate(e) {
          var t, n;
          !e.hasLoadedExperiments &&
            this.props.hasLoadedExperiments &&
            !$.a &&
            this.resolveInvite(),
            (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !==
              (null === (n = this.props.invite) || void 0 === n
                ? void 0
                : n.state) && this.maybeFetchApplicationSplash();
        }
        componentWillUnmount() {
          h.Z.terminate();
        }
        maybeFetchApplicationSplash() {
          let { invite: e } = this.props;
          if ((null == e ? void 0 : e.state) === Q.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
              (0, O.fetchAssetIds)(t.id, ["embedded_splash"]).then((e) => {
                let [t] = e;
                return this.setState({ backgroundId: t });
              });
          }
        }
        async resolveInvite() {
          let { inviteKey: e } = this.props;
          if (null == e) return;
          let { invite: t } = await _.Z.resolveInvite(e, Q.Usc.INVITE);
          null != t &&
            ((0, p.A)(t),
            null != t.type && ee.xf.has(t.type) && _.Z.openNativeAppModal(e));
        }
        resolveGuildTemplate() {
          let { guildTemplateCode: e } = this.props;
          if (null != e)
            R.default.track(
              Q.rMx.GUILD_TEMPLATE_OPENED,
              {
                guild_template_code: e,
                load_time: M.Z.getTimeSinceNavigationStart(),
              },
              { flush: !0 },
            ),
              N.Z.resolveGuildTemplate(e),
              N.Z.openNativeAppModal(e);
        }
        resolveGiftCode() {
          let { giftCode: e } = this.props;
          if (null != e)
            d.Z.resolveGiftCode(e, !0, !0).then((t) => {
              null != t &&
                null == t.giftCode.promotion &&
                c.Z.wait(() => d.Z.openNativeGiftCodeModal(e));
            });
        }
        render() {
          let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
          return (0, s.jsxs)(j.Z, {
            splash: e,
            children: [
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.LOGIN_HANDOFF,
                render: (e) => (0, s.jsx)(en, { ...e, redirectTo: t }),
              }),
              (0, s.jsx)(E.Z, {
                impressionName: a.ImpressionNames.USER_LOGIN,
                path: Q.Z5c.LOGIN,
                render: (e) => (0, s.jsx)(et, { ...e, redirectTo: t }),
              }),
              (0, s.jsx)(E.Z, {
                impressionName: a.ImpressionNames.USER_REGISTRATION,
                path: Q.Z5c.REGISTER,
                render: (e) =>
                  $.a
                    ? (0, s.jsx)(es, { ...e, redirectTo: t, inviteKey: n })
                    : (0, s.jsx)(eo, { ...e, redirectTo: t }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                render: (e) => (0, s.jsx)(ei, { login: !0, ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.GIFT_CODE(":giftCode"),
                render: (e) => (0, s.jsx)(ei, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: [
                  Q.Z5c.INVITE_LOGIN(":inviteCode"),
                  Q.Z5c.INVITE(":inviteCode"),
                ],
                render: (e) => {
                  let {
                      match: {
                        params: { inviteCode: t },
                        path: n,
                      },
                      location: r,
                      transitionTo: i,
                    } = e,
                    a = (0, A.mb)(t, r.search);
                  return o.tq || o.Em
                    ? (0, s.jsx)(ea, { inviteKey: a, transitionTo: i }, a)
                    : (0, s.jsx)(es, {
                        inviteKey: a,
                        location: r,
                        transitionTo: i,
                        login: n === Q.Z5c.INVITE_LOGIN(":inviteCode"),
                      });
                },
              }),
              (0, s.jsx)(E.Z, {
                path: [
                  Q.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                  Q.Z5c.GUILD_TEMPLATE(":guildTemplateCode"),
                ],
                render: (e) => {
                  let {
                    match: {
                      params: { guildTemplateCode: t },
                      path: n,
                    },
                    location: r,
                    transitionTo: i,
                  } = e;
                  return o.tq || o.Em
                    ? (0, s.jsx)(w.Z, { code: t }, t)
                    : (0, s.jsx)(er, {
                        code: t,
                        location: r,
                        transitionTo: i,
                        login:
                          n ===
                          Q.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                      });
                },
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.VERIFY,
                render: (e) => (0, s.jsx)(eu, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.VERIFY_HUB_EMAIL,
                render: (e) => (0, s.jsx)(ep, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.VERIFY_REQUEST,
                render: (e) => (0, s.jsx)(ed, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                render: (e) => (0, s.jsx)(eh, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                render: (e) => (0, s.jsx)(eE, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.AUTHORIZE_IP,
                render: (e) => (0, s.jsx)(el, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.REJECT_IP,
                render: (e) =>
                  (0, s.jsx)(e_, { source: Q.Z5c.REJECT_IP, ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.REJECT_MFA,
                render: (e) =>
                  (0, s.jsx)(e_, { source: Q.Z5c.REJECT_MFA, ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.AUTHORIZE_PAYMENT,
                render: (e) => (0, s.jsx)(ec, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.RESET,
                render: (e) => (0, s.jsx)(e_, { source: Q.Z5c.RESET, ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                render: (e) => (0, s.jsx)(ef, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.CHANNEL(
                  C.Hw.guildId(),
                  C.Hw.channelId({ optional: !0 }),
                  ":messageId?",
                ),
                render: (e) => (0, s.jsx)(eg, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.REPORT,
                render: (e) => (0, s.jsx)(em, { ...e }),
              }),
              (0, s.jsx)(E.Z, {
                path: Q.Z5c.REPORT_SECOND_LOOK,
                render: (e) => (0, s.jsx)(eI, { ...e }),
              }),
            ],
          });
        }
        constructor(...e) {
          var t, n, s;
          super(...e),
            (t = this),
            (s = { splash: null, redirectTo: null, backgroundId: null }),
            (n = "state") in t
              ? Object.defineProperty(t, n, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = s);
        }
      }
      t.default = l.ZP.connectStores([v.default, S.Z, Z.Z, m.Z, I.Z], (e) => {
        var t, n, s;
        let { match: r, location: i } = e,
          a =
            null == r
              ? void 0
              : null === (t = r.params) || void 0 === t
                ? void 0
                : t.inviteCode,
          o = $.a ? $.Y : void 0,
          l = null != a ? (0, A.mb)(a, i.search) : o,
          c =
            null == r
              ? void 0
              : null === (n = r.params) || void 0 === n
                ? void 0
                : n.giftCode,
          u =
            null == r
              ? void 0
              : null === (s = r.params) || void 0 === s
                ? void 0
                : s.guildTemplateCode;
        return {
          inviteKey: l,
          isAuthenticated: v.default.isAuthenticated(),
          giftCode: c,
          guildTemplateCode: u,
          gift: null != c ? Z.Z.get(c) : null,
          invite: null != l ? S.Z.getInvite(l) : null,
          guildTemplate: null != u ? I.Z.getGuildTemplate(u) : null,
          hasLoadedExperiments: m.Z.hasLoadedExperiments,
        };
      })(eN);
    },
    320830: function (e, t, n) {
      n(47120);
      var s = n(735250),
        r = n(470079),
        i = n(954955),
        a = n.n(i),
        o = n(748780),
        l = n(873546),
        c = n(477690),
        u = n(481060),
        d = n(624138),
        _ = n(954757);
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
      let E = (0, d.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        p = { START: 0, END: 1 },
        g = { friction: 10, tension: 130 };
      t.Z = function (e) {
        return class extends r.Component {
          componentDidMount() {
            !l.tq &&
              (window.addEventListener("resize", this.handleResizeDebounced),
              this.handleResize());
          }
          componentWillUnmount() {
            clearTimeout(this.timeout),
              window.removeEventListener("resize", this.handleResizeDebounced);
          }
          componentWillAppear(e) {
            this.state.shouldAnimate ? this.animateTo(p.END, e) : e();
          }
          componentWillEnter(e) {
            this.state.shouldAnimate
              ? (clearTimeout(this.timeout),
                (this.timeout = setTimeout(() => this.animateTo(p.END, e), 40)))
              : e();
          }
          componentWillLeave(e) {
            this.state.shouldAnimate ? this.animateTo(p.START, e) : e();
          }
          animateTo(e, t) {
            o.Z.spring(this.anim, { toValue: e, ...g }).start(t);
          }
          getAnimatedStyle(e) {
            return this.state.shouldAnimate
              ? {
                  opacity: this.anim,
                  transform: e
                    ? void 0
                    : [
                        {
                          scale: this.anim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1.05, 1],
                          }),
                        },
                        {
                          translateY: this.anim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["-70px", "0px"],
                          }),
                        },
                        { translateZ: 0 },
                      ],
                }
              : null;
          }
          render() {
            return (0, s.jsx)("div", {
              className: _.wrapper,
              children: (0, s.jsx)(u.AccessibilityPreferencesContext.Consumer, {
                children: (t) => {
                  let { reducedMotion: n } = t;
                  return (0, s.jsx)(o.Z.div, {
                    style: this.getAnimatedStyle(n.enabled),
                    children: (0, s.jsx)(e, { ...this.props }),
                  });
                },
              }),
            });
          }
          constructor(...e) {
            super(...e),
              h(this, "timeout", void 0),
              h(this, "anim", new o.Z.Value(p.START)),
              h(this, "state", { shouldAnimate: !l.tq }),
              h(this, "handleResize", () => {
                let e = window.innerWidth > E;
                !this.state.shouldAnimate && e && this.anim.setValue(p.END),
                  this.setState({ shouldAnimate: e });
              }),
              h(this, "handleResizeDebounced", a()(this.handleResize, 60));
          }
        };
      };
    },
    721751: function (e, t, n) {
      let s;
      n(47120);
      var r = n(735250),
        i = n(470079),
        a = n(120356),
        o = n.n(a),
        l = n(873546),
        c = n(442837),
        u = n(481060),
        d = n(980591),
        _ = n(605782),
        h = n(133853),
        E = n(568154),
        p = n(353926),
        g = n(703656),
        f = n(981631),
        m = n(504877);
      let I = n(575703),
        N = n(2984),
        T = [
          f.Z5c.LOGIN,
          f.Z5c.LOGIN_HANDOFF,
          f.Z5c.REGISTER,
          f.Z5c.INVITE(""),
          f.Z5c.GIFT_CODE(""),
          f.Z5c.GUILD_TEMPLATE_LOGIN(""),
          f.Z5c.GUILD_TEMPLATE(""),
          f.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
          f.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
          f.Z5c.BILLING_PREMIUM_SUBSCRIBE,
          f.Z5c.BILLING_PAYMENT_SOURCES_CREATE,
          f.Z5c.BILLING_PAYMENTS,
          f.Z5c.BILLING_PREMIUM_SWITCH_PLAN,
          f.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
          f.Z5c.VERIFY,
          f.Z5c.VERIFY_HUB_EMAIL,
          f.Z5c.REJECT_IP,
          f.Z5c.REJECT_MFA,
          f.Z5c.AUTHORIZE_IP,
          f.Z5c.AUTHORIZE_PAYMENT,
          f.Z5c.RESET,
          f.Z5c.HANDOFF,
          f.Z5c.REPORT,
          f.Z5c.REPORT_SECOND_LOOK,
        ];
      function A(e) {
        return T.some((t) => e.startsWith(t));
      }
      let x = (e) => ((s = e), e);
      function C(e) {
        let { children: t } = e;
        switch (
          (function () {
            let [e, t] = i.useState(!1),
              [n, r] = i.useState(true),
              a = (function () {
                return null;
              })(),
              o = (0, c.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, d.Z)(() => {}, 300), void 0 !== s)
              ? s
              : !n && o
                ? (!e && t(!0),
                  x(
                    (function (e) {
                      return "default";
                    })(a),
                  ))
                : n
                  ? x("default")
                  : "loading";
          })()
        ) {
          case "default":
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("img", { className: m.artwork, src: I, alt: "" }),
                (0, r.jsx)("img", {
                  className: m.logoWithText,
                  src: N,
                  alt: "",
                }),
                t,
              ],
            });
          case "experimental":
          case "loading":
            return null;
        }
      }
      class v extends i.Component {
        componentDidMount() {
          window.addEventListener("resize", this.handleResize);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        mobileTransitionTo(e, t) {
          if (A(e)) (0, g.uL)(e, t);
          else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
          }
        }
        mobileReplaceWith(e) {
          A(e) ? (0, g.dL)(e) : (window.location = e);
        }
        renderDefault() {
          let { splash: e } = this.props,
            t = (0, r.jsx)(_.Z, {
              component: i.Fragment,
              children: i.Children.map(this.props.children, (e) =>
                i.cloneElement(e, { transitionTo: g.uL, replaceWith: g.dL }),
              ),
            });
          return (0, r.jsx)("div", {
            className: m.characterBackground,
            children: (0, r.jsx)(u.HeadingLevel, {
              forceLevel: 1,
              children:
                null != e
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(h.Z, { show: !0, className: o()(m.logo) }),
                        (0, r.jsx)(E.h, { splash: e, children: t }),
                      ],
                    })
                  : (0, r.jsx)(C, { children: t }),
            }),
          });
        }
        renderMobile() {
          return (0, r.jsx)(_.Z, {
            component: i.Fragment,
            children: i.Children.map(this.props.children, (e) =>
              i.cloneElement(e, {
                transitionTo: this.mobileTransitionTo,
                replaceWith: this.mobileReplaceWith,
              }),
            ),
          });
        }
        render() {
          let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes("GameLauncher");
          return e || l.tq || l.Em || t
            ? this.renderMobile()
            : this.renderDefault();
        }
        constructor(e) {
          var t, n, s;
          super(e),
            (t = this),
            (n = "handleResize"),
            (s = () => {
              this.setState({ isMobileWidth: window.innerWidth <= 485 });
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = s),
            (this.state = { isMobileWidth: window.innerWidth <= 485 });
        }
      }
      t.Z = v;
    },
    718182: function (e, t, n) {
      var s,
        r,
        i,
        a,
        o = n(735250),
        l = n(470079),
        c = n(525654),
        u = n.n(c),
        d = n(442837),
        _ = n(893776),
        h = n(129293),
        E = n(388905),
        p = n(108427),
        g = n(314897),
        f = n(981631),
        m = n(689938),
        I = n(113207);
      d.ZP.initialize();
      class N extends (a = l.PureComponent) {
        componentDidMount() {
          let e = (0, h.Z)(this.props.location);
          null != e && _.Z.authorizeIPAddress(e), (0, p.e)("authorize_ip");
        }
        renderLoginButton() {
          if ("Android" === u().os.family || "iOS" === u().os.family)
            return null;
          let { transitionTo: e } = this.props;
          return (0, o.jsx)(E.zx, {
            onClick: () => e(f.Z5c.LOGIN),
            children: m.Z.Messages._LOGIN,
          });
        }
        renderFailed() {
          return (0, o.jsxs)(E.ZP, {
            children: [
              (0, o.jsx)("img", {
                alt: "",
                src: n(211095),
                className: I.marginBottom20,
              }),
              (0, o.jsx)(E.Dx, {
                className: I.marginBottom8,
                children: m.Z.Messages.AUTHORIZATION_EXPIRED,
              }),
              (0, o.jsx)(E.DK, {
                className: I.marginBottom40,
                children: m.Z.Messages._AUTH_EXPIRED_SUGGESTION,
              }),
              this.renderLoginButton(),
            ],
          });
        }
        renderSucceeded() {
          return (0, o.jsxs)(E.ZP, {
            children: [
              (0, o.jsx)("img", {
                alt: "",
                src: n(640356),
                className: I.marginBottom20,
              }),
              (0, o.jsx)(E.Dx, {
                className: I.marginBottom8,
                children: m.Z.Messages.IP_AUTHORIZATION_SUCCEEDED,
              }),
              (0, o.jsx)(E.DK, {
                className: I.marginBottom40,
                children: m.Z.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION,
              }),
              this.renderLoginButton(),
            ],
          });
        }
        renderDefault() {
          return (0, o.jsxs)(E.ZP, {
            children: [
              (0, o.jsx)(E.Hh, {}),
              (0, o.jsx)(E.Dx, { children: m.Z.Messages.AUTHORIZING }),
            ],
          });
        }
        render() {
          let { verifyFailed: e, verifySucceeded: t } = this.props;
          return e
            ? this.renderFailed()
            : t
              ? this.renderSucceeded()
              : this.renderDefault();
        }
      }
      (s = N),
        (r = "defaultProps"),
        (i = { transitionTo: (e) => n.g.location.assign(e) }),
        r in s
          ? Object.defineProperty(s, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[r] = i),
        (t.Z = d.ZP.connectStores([g.default], () => ({
          verifyFailed: g.default.didVerifyFail(),
          verifySucceeded: g.default.didVerifySucceed(),
        }))(N));
    },
    223543: function (e, t, n) {
      var s = n(735250),
        r = n(470079),
        i = n(442837),
        a = n(893776),
        o = n(129293),
        l = n(388905),
        c = n(108427),
        u = n(314897),
        d = n(689938),
        _ = n(113207);
      t.Z = (e) => {
        let { location: t } = e,
          { verifyFailed: h, verifySucceeded: E } = (0, i.cj)(
            [u.default],
            () => ({
              verifyFailed: u.default.didVerifyFail(),
              verifySucceeded: u.default.didVerifySucceed(),
            }),
          );
        return (r.useEffect(() => {
          let e = (0, o.Z)(t);
          null != e && a.Z.authorizePayment(e), (0, c.e)("authorize_payment");
        }, [t]),
        h)
          ? (0, s.jsxs)(l.ZP, {
              children: [
                (0, s.jsx)("img", {
                  alt: "",
                  src: n(375673),
                  className: _.marginBottom20,
                }),
                (0, s.jsx)(l.Dx, {
                  className: _.marginBottom8,
                  children: d.Z.Messages.PAYMENT_AUTHORIZATION_EXPIRED,
                }),
                (0, s.jsx)(l.DK, {
                  className: _.marginBottom40,
                  children: d.Z.Messages.PAYMENT_AUTH_EXPIRED_SUGGESTION,
                }),
              ],
            })
          : E
            ? (0, s.jsxs)(l.ZP, {
                children: [
                  (0, s.jsx)("img", {
                    alt: "",
                    src: n(73962),
                    className: _.marginBottom20,
                  }),
                  (0, s.jsx)(l.Dx, {
                    className: _.marginBottom8,
                    children: d.Z.Messages.PAYMENT_AUTHORIZATION_SUCCEEDED,
                  }),
                  (0, s.jsx)(l.DK, {
                    className: _.marginBottom40,
                    children:
                      d.Z.Messages.PAYMENT_AUTHORIZED_SUCCEEDED_SUGGESTION,
                  }),
                ],
              })
            : (0, s.jsxs)(l.ZP, {
                children: [
                  (0, s.jsx)(l.Hh, {}),
                  (0, s.jsx)(l.Dx, {
                    children: d.Z.Messages.PAYMENT_AUTHORIZING,
                  }),
                ],
              });
      };
    },
    73906: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var r = n(3570),
        i = n(685311),
        a = n(186901);
      t.Z = function (e) {
        let { match: t, location: n } = e,
          o = async (e, t) => {
            await (0, r.s)(a.jE.CHANNEL, {
              guildId: e.params.guildId,
              channelId: e.params.channelId,
              messageId: e.params.messageId,
              search: t.search,
            });
          };
        return (0, s.jsx)(i.Z, { match: t, location: n, attemptDeepLink: o });
      };
    },
    685311: function (e, t, n) {
      n(47120);
      var s,
        r,
        i = n(735250),
        a = n(470079),
        o = n(120356),
        l = n.n(o),
        c = n(536285),
        u = n(857458),
        d = n(388905),
        _ = n(703656),
        h = n(689938),
        E = n(113207);
      ((r = s || (s = {}))[(r.INITIAL = 0)] = "INITIAL"),
        (r[(r.RPC_CONNECTED = 1)] = "RPC_CONNECTED"),
        (r[(r.APP_OPENING = 2)] = "APP_OPENING"),
        (r[(r.APP_OPENED = 3)] = "APP_OPENED");
      t.Z = function (e) {
        let { match: t, location: n, attemptDeepLink: s } = e,
          [r, o] = a.useState(0);
        a.useEffect(() => {
          c.default.once("connected", () => {
            o(1);
          }),
            c.default.once("disconnected", () => {
              (0, _.uL)((0, u.M)());
            }),
            c.default.connect();
        }, []),
          a.useEffect(() => {
            if (0 !== r) return;
            let e = setTimeout(() => (0, _.uL)((0, u.M)()), 3e3);
            return () => clearTimeout(e);
          }, [r]);
        let p = a.useCallback(
          async (e, t) => {
            try {
              o(2), await s(e, t), o(3);
            } catch (e) {
              console.error("Error opening deeplink", e);
            }
          },
          [s],
        );
        if ((0, _.DB)()) return null;
        switch (r) {
          case 1:
            return (0, i.jsxs)(d.ZP, {
              children: [
                (0, i.jsx)(d.Dx, {
                  className: E.marginBottom8,
                  children: h.Z.Messages.DEEPLINK_BROWSER_TITLE,
                }),
                (0, i.jsx)(d.DK, {
                  children: h.Z.Messages.DEEPLINK_BROWSER_PROMPT,
                }),
                (0, i.jsx)(d.zx, {
                  className: E.marginTop40,
                  onClick: () => p(t, n),
                  children: h.Z.Messages.OPEN_IN_APP,
                }),
                (0, i.jsx)(d.zx, {
                  className: l()(E.marginTop8, E.marginCenterHorz),
                  color: d.zx.Colors.LINK,
                  look: d.zx.Looks.LINK,
                  onClick: () => (0, _.uL)((0, u.M)()),
                  children: h.Z.Messages.CONTINUE_IN_BROWSER,
                }),
              ],
            });
          case 0:
          case 2:
            return (0, i.jsxs)(d.ZP, {
              children: [
                (0, i.jsx)(d.Dx, { children: h.Z.Messages.APP_OPENING }),
                (0, i.jsx)(d.Hh, {}),
              ],
            });
          case 3:
            return (0, i.jsxs)(d.ZP, {
              children: [
                (0, i.jsx)(d.Dx, {
                  className: E.marginBottom8,
                  children: h.Z.Messages.APP_OPENED_TITLE,
                }),
                (0, i.jsx)(d.DK, {
                  children: h.Z.Messages.DEEPLINK_BROWSER_APP_OPENED,
                }),
              ],
            });
        }
      };
    },
    299852: function (e, t, n) {
      n(47120);
      var s,
        r = n(735250),
        i = n(470079),
        a = n(593473),
        o = n(442837),
        l = n(544891),
        c = n(481060),
        u = n(129293),
        d = n(388905),
        _ = n(108427),
        h = n(598077),
        E = n(896797),
        p = n(981631),
        g = n(930441),
        f = n(689938),
        m = n(113207);
      function I(e, t, n) {
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
      o.ZP.initialize();
      class N extends (s = i.PureComponent) {
        componentDidMount() {
          let e = (0, u.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
          l.tn
            .post({
              url: p.ANM.DISABLE_EMAIL_NOTIFICATIONS,
              body: {
                token: e,
                pixel_uuid: t.hash,
                category: t.category,
                email_type: t.email_type,
              },
              oldFormErrors: !0,
            })
            .then(
              (e) => {
                let {
                    body: { user: n },
                  } = e,
                  s = new h.Z(n);
                this.setState({
                  success: !0,
                  busy: !1,
                  user: s,
                  category: t.category,
                });
              },
              () => this.setState({ success: !1, busy: !1 }),
            ),
            (0, _.e)("disable_email_notifications");
        }
        renderBusy() {
          return (0, r.jsx)(d.ZP, { children: (0, r.jsx)(d.Hh, {}) });
        }
        renderCategorySuccess(e, t) {
          let { defaultRoute: n, transitionTo: s } = this.props,
            i = f.Z.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_EMAIL_BODY.format({
              category: t,
            });
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.Dx, {
                className: m.marginBottom8,
                children: f.Z.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_HEADER,
              }),
              (0, r.jsx)(d.DK, { children: i }),
              (0, r.jsx)(d.zx, {
                className: m.marginTop20,
                onClick: () => s(n),
                children: f.Z.Messages.CONTINUE_TO_WEBAPP,
              }),
              (0, r.jsx)(d.zx, {
                className: m.marginTop8,
                color: d.zx.Colors.LINK,
                look: d.zx.Looks.LINK,
                onClick: () => s(p.Z5c.SETTINGS("notifications", g.vG)),
                children: f.Z.Messages.EMAIL_CATEGORY_MANAGE_SETTING_LABEL,
              }),
            ],
          });
        }
        renderSuccess() {
          let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: s } = this.state;
          if (null != s) {
            let e = g.Od.find((e) => e.category === s);
            if (null != e) return this.renderCategorySuccess(s, e.label());
          }
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.qE, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                size: c.AvatarSizes.DEPRECATED_SIZE_100,
                className: m.marginBottom20,
              }),
              (0, r.jsx)(d.Dx, {
                className: m.marginBottom8,
                children:
                  f.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER,
              }),
              (0, r.jsx)(d.DK, {
                children:
                  f.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY,
              }),
              (0, r.jsx)(d.zx, {
                className: m.marginTop40,
                onClick: () => t(e),
                children: f.Z.Messages.CONTINUE_TO_WEBAPP,
              }),
            ],
          });
        }
        renderError() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.Ee, { src: n(105020), className: m.marginBottom20 }),
              (0, r.jsx)(d.Dx, {
                className: m.marginBottom8,
                children:
                  f.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER,
              }),
              (0, r.jsx)(d.DK, {
                children:
                  f.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY,
              }),
              (0, r.jsx)(d.zx, {
                className: m.marginTop40,
                onClick: () => t(e),
                children: f.Z.Messages.CONTINUE_TO_WEBAPP,
              }),
            ],
          });
        }
        render() {
          let { busy: e, success: t } = this.state;
          return e
            ? this.renderBusy()
            : t
              ? this.renderSuccess()
              : this.renderError();
        }
        constructor(...e) {
          super(...e),
            I(this, "state", {
              busy: !0,
              success: !1,
              user: null,
              category: null,
            });
        }
      }
      I(N, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) }),
        (t.Z = o.ZP.connectStores([E.Z], () => ({
          defaultRoute: E.Z.defaultRoute,
        }))(N));
    },
    39514: function (e, t, n) {
      n(47120), n(411104);
      var s,
        r,
        i = n(735250),
        a = n(470079),
        o = n(120356),
        l = n.n(o),
        c = n(442837),
        u = n(570140),
        d = n(893776),
        _ = n(533307),
        h = n(978085),
        E = n(232567),
        p = n(388905),
        g = n(362762),
        f = n(108427),
        m = n(314897),
        I = n(896797),
        N = n(82142),
        T = n(283595),
        A = n(55563),
        x = n(669079),
        C = n(63063),
        v = n(51144),
        Z = n(481153),
        S = n(781428),
        R = n(423527),
        O = n(981631),
        b = n(689938),
        D = n(113207);
      function M(e, t, n) {
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
      c.ZP.initialize(),
        ((r = s || (s = {})).REGISTER = "register"),
        (r.LOGIN = "login");
      class L extends a.PureComponent {
        componentDidMount() {
          let { authenticated: e, isResolved: t } = this.props;
          e && this.handleAuthenticated(),
            !t && this.resolveGiftCode(),
            (0, f.e)("gift_code");
        }
        componentDidUpdate(e) {
          let { authenticated: t, isResolved: n } = this.props;
          !n &&
            u.Z.wait(() => {
              this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null });
        }
        handleAuthenticated() {
          let { currentUser: e } = this.state;
          h.b8(), null == e && this.refreshUser();
        }
        get requiresVerification() {
          let { currentUser: e } = this.state;
          return null != e && !e.verified;
        }
        getCode() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return e.match.params.giftCode;
        }
        getMode() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return e.login ? "login" : "register";
        }
        getErrorMessage(e) {
          let { libraryApplication: t, sku: n } = this.props,
            { error: s } = this.state,
            r = null != s ? s.code : null;
          return r === O.evJ.INVALID_GIFT_SELF_REDEMPTION
            ? b.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT
            : r === O.evJ.INVALID_GIFT_REDEMPTION_OWNED &&
                (null == n ? void 0 : n.productLine) === O.POd.COLLECTIBLES
              ? b.Z.Messages.GIFT_ERROR_OWNED
              : null != t || r === O.evJ.INVALID_GIFT_REDEMPTION_OWNED
                ? b.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({
                    libraryLink: O.Z5c.APPLICATION_LIBRARY,
                  })
                : e.isClaimed || r === O.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? b.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED
                  : r === O.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? b.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT
                    : void 0;
        }
        renderSpinner(e) {
          return (0, i.jsxs)(p.ZP, {
            children: [(0, i.jsx)(p.Dx, { children: e }), (0, i.jsx)(p.Hh, {})],
          });
        }
        renderExpiredInvite() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, i.jsxs)(p.ZP, {
            children: [
              (0, i.jsx)(p.Ee, { src: n(167969), className: D.marginBottom8 }),
              (0, i.jsx)(p.Dx, {
                className: l()(D.marginTop8, D.marginBottom8),
                children: b.Z.Messages.GIFT_CODE_AUTH_INVALID_TITLE,
              }),
              (0, i.jsx)(p.DK, {
                children: b.Z.Messages.GIFT_CODE_AUTH_INVALID_BODY,
              }),
              (0, i.jsx)(p.zx, {
                className: l()(D.marginTop40, D.marginBottom8),
                onClick: () => t(e),
                children: b.Z.Messages.CONTINUE_TO_WEBAPP,
              }),
              (0, i.jsx)(p.zx, {
                onClick: () =>
                  window.open(C.Z.getArticleURL(O.BhN.GIFTING), "_blank"),
                look: p.zx.Looks.LINK,
                color: p.zx.Colors.LINK,
                children: b.Z.Messages.GIFT_CODE_AUTH_INVALID_TIP,
              }),
            ],
          });
        }
        renderAppOpened() {
          return (0, i.jsxs)(p.ZP, {
            children: [
              (0, i.jsx)(p.Dx, {
                className: D.marginBottom8,
                children: b.Z.Messages.APP_OPENED_TITLE,
              }),
              (0, i.jsx)(p.DK, { children: b.Z.Messages.APP_OPENED_BODY }),
              (0, i.jsx)(p.zx, {
                className: D.marginTop40,
                onClick: () => this.setState({ continueOnWeb: !0 }),
                children: b.Z.Messages.GIFT_CODE_AUTH_CONTINUE_IN_BROWSER,
              }),
            ],
          });
        }
        renderVerification(e) {
          let { sentVerification: t } = this.state;
          return (0, i.jsxs)(p.ZP, {
            children: [
              (0, i.jsx)(p.Ee, { src: n(892235), className: D.marginBottom8 }),
              (0, i.jsx)(p.Dx, {
                children: b.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format(
                  { username: e.username },
                ),
              }),
              (0, i.jsx)(p.DK, {
                className: D.marginTop20,
                children:
                  b.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED,
              }),
              (0, i.jsx)(p.zx, {
                disabled: t,
                className: D.marginTop40,
                onClick: this.handleResendVerification,
                children: t
                  ? b.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT
                  : b.Z.Messages.RESEND_VERIFICATION_EMAIL,
              }),
              (0, i.jsx)(p.zx, {
                look: p.zx.Looks.LINK,
                color: p.zx.Colors.LINK,
                onClick: this.refreshUser,
                className: D.marginTop8,
                children: b.Z.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN,
              }),
            ],
          });
        }
        renderAuthenticated(e, t) {
          let n = this.getErrorMessage(e);
          return (0, i.jsxs)(p.ZP, {
            children: [
              (0, i.jsx)(Z.Z, { giftCode: e }),
              (0, i.jsx)(p.zx, {
                disabled: null != n,
                className: D.marginTop40,
                onClick: this.handleAccept,
                children: b.Z.Messages.GIFT_CODE_AUTH_ACCEPT,
              }),
              null != n
                ? (0, i.jsx)(p.DK, { className: D.marginTop20, children: n })
                : (0, i.jsx)(p.i_, {
                    className: D.marginTop20,
                    children: b.Z.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
                      userTag: v.ZP.getUserTag(t),
                      onLogoutClick: this.handleLogout,
                    }),
                  }),
            ],
          });
        }
        render() {
          let {
              nativeAppState: e,
              sku: t,
              authenticated: n,
              giftCode: s,
              isResolved: r,
              isAccepting: a,
              transitionTo: o,
              location: l,
            } = this.props,
            { fetchingUser: c, continueOnWeb: u } = this.state;
          if (e === O.kEZ.OPEN && !u) return this.renderAppOpened();
          if (e === O.kEZ.OPENING)
            return this.renderSpinner(b.Z.Messages.APP_OPENING);
          if (a)
            return this.renderSpinner(b.Z.Messages.GIFT_CODE_AUTH_ACCEPTING);
          if (null == s)
            return r
              ? this.renderExpiredInvite()
              : this.renderSpinner(b.Z.Messages.GIFT_CODE_AUTH_RESOLVING);
          if (r) {
            if (n) {
              let e = this.state.currentUser;
              return c || null == e
                ? this.renderSpinner(b.Z.Messages.GIFT_CODE_AUTH_FETCHING_USER)
                : this.requiresVerification && null != e
                  ? this.renderVerification(e)
                  : this.renderAuthenticated(s, e);
            }
            return "login" === this.getMode()
              ? (0, i.jsx)(S.Z, {
                  giftCodeSKU: t,
                  giftCode: s,
                  transitionTo: o,
                  location: l,
                })
              : (0, i.jsx)(R.Z, {
                  giftCodeSKU: t,
                  giftCode: s,
                  transitionTo: o,
                  location: l,
                });
          }
          return null;
        }
        constructor(...e) {
          super(...e),
            M(this, "state", {
              error: null,
              continueOnWeb: !1,
              currentUser: null,
              sentVerification: !1,
              fetchingUser: !1,
            }),
            M(this, "refreshUser", () => {
              this.setState({ fetchingUser: !0 }),
                E.k({ withAnalyticsToken: !0 })
                  .then((e) =>
                    this.setState({ currentUser: e, fetchingUser: !1 }),
                  )
                  .catch(() => this.setState({ fetchingUser: !1 }));
            }),
            M(this, "handleLogout", () => {
              let e = this.props.match.params.giftCode;
              d.Z.logout(O.Z5c.GIFT_CODE_LOGIN(e));
            }),
            M(this, "handleResendVerification", () => {
              d.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            M(this, "handleAccept", async () => {
              let { transitionTo: e, giftCode: t } = this.props;
              if (null == t)
                throw Error("Trying to accept gift before resolve");
              let n = this.getCode();
              try {
                this.setState({ error: null }),
                  await _.Z.redeemGiftCode({ code: n }),
                  e(O.Z5c.APP);
              } catch (e) {
                this.setState({ error: e });
              }
            }),
            M(this, "resolveGiftCode", () => {
              let { transitionTo: e } = this.props,
                t = this.getCode();
              _.Z.resolveGiftCode(t, !0, !0).then((n) => {
                null != n &&
                  null != n.giftCode.promotion &&
                  e(O.Z5c.BILLING_PROMOTION_REDEMPTION(t));
              });
            });
        }
      }
      t.Z = c.ZP.connectStores([N.Z, T.Z, m.default, A.Z, I.Z, g.Z], (e) => {
        let t = e.match.params.giftCode,
          n = N.Z.get(t),
          s = null != n ? A.Z.get(n.skuId) : null;
        return {
          giftCode: n,
          sku: s,
          libraryApplication:
            null != s && (null == n ? void 0 : n.entitlementBranches) != null
              ? x.z2(n.entitlementBranches, s, T.Z)
              : null,
          authenticated: m.default.isAuthenticated(),
          defaultRoute: I.Z.defaultRoute,
          isResolved: N.Z.getIsResolved(t),
          isAccepting: N.Z.getIsAccepting(t),
          libraryApplicationsFetched: T.Z.fetched,
          nativeAppState: g.Z.getState(t),
        };
      })(L);
    },
    481153: function (e, t, n) {
      var s = n(735250),
        r = n(470079),
        i = n(120356),
        a = n.n(i),
        o = n(442837),
        l = n(481060),
        c = n(812206),
        u = n(388905),
        d = n(925329),
        _ = n(479446),
        h = n(981632),
        E = n(594174),
        p = n(509545),
        g = n(55563),
        f = n(296848),
        m = n(981631),
        I = n(474936),
        N = n(689938),
        T = n(295242),
        A = n(739017),
        x = n(113207);
      t.Z = o.ZP.connectStores([g.Z, c.Z, p.Z, E.default], (e) => {
        let { giftCode: t } = e,
          n = g.Z.get(t.skuId),
          { subscriptionPlanId: s } = t;
        return {
          sku: n,
          subscriptionPlan: null != s ? (0, f.oE)(s) : null,
          application: c.Z.getApplication(n.applicationId),
          gifter: E.default.getUser(t.userId),
        };
      })((e) => {
        let {
            error: t,
            giftCode: n,
            gifter: i,
            sku: o,
            application: c,
            subscriptionPlan: E,
          } = e,
          p =
            null == i
              ? N.Z.Messages.GIFT_CODE_AUTH_GIFTED
              : N.Z.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                  username: i.username,
                }),
          g = o.name;
        return (
          null != E &&
            (g = (
              E.interval === I.rV.MONTH
                ? N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY
                : N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY
            ).format({ skuName: o.name, intervalCount: E.intervalCount })),
          (0, s.jsxs)(r.Fragment, {
            children: [
              null != n.giftStyle
                ? (0, s.jsx)(h.Z, {
                    defaultAnimationState: _.SR.LOOP,
                    giftStyle: n.giftStyle,
                    className: T.seasonalIcon,
                  })
                : (0, s.jsx)(u.qE, {
                    src: null != i ? i.getAvatarURL(void 0, 100) : null,
                    size: l.AvatarSizes.DEPRECATED_SIZE_100,
                    className: x.marginBottom20,
                  }),
              null != t
                ? (0, s.jsxs)(r.Fragment, {
                    children: [
                      (0, s.jsx)(u.DK, {
                        children: N.Z.Messages.INVITE_MODAL_ERROR_TITLE,
                      }),
                      (0, s.jsx)(u.Dx, { children: t }),
                    ],
                  })
                : (0, s.jsxs)(r.Fragment, {
                    children: [
                      (0, s.jsx)(u.DK, { children: p }),
                      (0, s.jsxs)(u.Dx, {
                        className: a()(x.marginTop8, A.flexCenter),
                        children: [
                          o.productLine !== m.POd.COLLECTIBLES &&
                            (0, s.jsx)(d.Z, {
                              size: d.Z.Sizes.MEDIUM,
                              className: T.applicationIcon,
                              game: c,
                              skuId: o.id,
                            }),
                          g,
                        ],
                      }),
                    ],
                  }),
            ],
          })
        );
      });
    },
    236446: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      }),
        n(47120);
      var s = n(735250),
        r = n(470079),
        i = n(120356),
        a = n.n(i),
        o = n(512722),
        l = n.n(o),
        c = n(442837),
        u = n(388905),
        d = n(362762),
        _ = n(409059),
        h = n(659900),
        E = n(962220),
        p = n(473855),
        g = n(306453),
        f = n(929809),
        m = n(108427),
        I = n(390885),
        N = n(314897),
        T = n(896797),
        A = n(954824),
        x = n(781428),
        C = n(163671),
        v = n(423527),
        Z = n(981631),
        S = n(58346),
        R = n(701476),
        O = n(630724),
        b = n(436620),
        D = n(689938),
        M = n(60561),
        L = n(113207);
      c.ZP.initialize();
      class P extends r.PureComponent {
        componentDidMount() {
          (0, m.e)("guildTemplate"),
            !b.KO &&
              A.Z.launch(
                "discord://" + Z.Z5c.GUILD_TEMPLATE(this.props.code),
                () => void 0,
              );
        }
        componentDidUpdate(e) {
          this.props.code !== e.code &&
            E.Z.resolveGuildTemplate(this.props.code);
        }
        renderButton(e, t) {
          return b.KO
            ? (0, s.jsx)(u.zx, {
                className: L.marginTop40,
                onClick: t,
                children: e,
              })
            : (0, s.jsx)(u.v6, { className: L.marginTop40 });
        }
        renderSpinner(e) {
          return (0, s.jsxs)(u.ZP, {
            children: [(0, s.jsx)(u.Dx, { children: e }), (0, s.jsx)(u.Hh, {})],
          });
        }
        renderInvalidGuildTemplate() {
          return (0, s.jsxs)(u.ZP, {
            children: [
              (0, s.jsx)(u.Ee, { src: n(167969), className: L.marginBottom8 }),
              (0, s.jsx)(u.Dx, {
                className: a()(L.marginTop8, L.marginBottom8),
                children: D.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE,
              }),
              (0, s.jsx)(u.DK, {
                children: D.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE,
              }),
              this.renderButton(
                D.Z.Messages.CONTINUE_TO_WEBAPP,
                this.handleContinue,
              ),
            ],
          });
        }
        renderAppOpened() {
          return (0, s.jsxs)(u.ZP, {
            children: [
              (0, s.jsx)(u.Dx, {
                className: L.marginBottom8,
                children: D.Z.Messages.APP_OPENED_TITLE,
              }),
              (0, s.jsx)(u.DK, { children: D.Z.Messages.APP_OPENED_BODY }),
              this.renderButton(
                D.Z.Messages.CONTINUE_TO_WEBAPP,
                this.handleContinue,
              ),
            ],
          });
        }
        renderAuthenticatedOrDownload() {
          let { guildTemplate: e } = this.props;
          return (l()(null != e, "guild template must not be null"),
          e.state === S.Rj.RESOLVING)
            ? (0, s.jsx)(u.ZP, {
                className: M.authBox,
                children: (0, s.jsx)(g.Z, { guildTemplate: e }),
              })
            : (0, s.jsx)(y, { guildTemplate: e });
        }
        renderContinue() {
          return (0, s.jsxs)(u.ZP, {
            children: [
              (0, s.jsx)(u.Dx, { children: D.Z.Messages.APP_NOT_OPENED }),
              this.renderButton(
                D.Z.Messages.CONTINUE_TO_WEBAPP,
                this.handleContinue,
              ),
            ],
          });
        }
        render() {
          let {
            guildTemplate: e,
            nativeAppState: t,
            authenticated: n,
            transitionTo: r,
            location: i,
          } = this.props;
          if (null == e) return this.renderSpinner(D.Z.Messages.LOADING);
          if (t === Z.kEZ.OPEN) return this.renderAppOpened();
          if (t === Z.kEZ.OPENING)
            return this.renderSpinner(D.Z.Messages.APP_OPENING);
          switch (e.state) {
            case S.Rj.RESOLVING:
              return this.renderSpinner(D.Z.Messages.APP_OPENING);
            case S.Rj.RESOLVED:
              if (n || !b.KO) return this.renderAuthenticatedOrDownload();
              if (this.props.login)
                return (0, s.jsx)(x.Z, {
                  guildTemplate: e,
                  transitionTo: r,
                  location: i,
                });
              else
                return (0, s.jsx)(v.Z, {
                  guildTemplate: e,
                  transitionTo: r,
                  location: i,
                  onRegister: () => {
                    (0, f.c)(R.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                      I.Z.flowStart(
                        O.MK.ORGANIC_GUILD_TEMPLATES,
                        O.EW.NUF_STARTED,
                      );
                  },
                });
            case S.Rj.EXPIRED:
              return this.renderInvalidGuildTemplate();
            default:
              return null;
          }
        }
        constructor(...e) {
          var t, n, s;
          super(...e),
            (t = this),
            (n = "handleContinue"),
            (s = () => {
              let { defaultRoute: e, transitionTo: t } = this.props;
              t(e);
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = s);
        }
      }
      function j(e) {
        let t = {
          guildTemplate: (0, c.e7)([_.Z], () => _.Z.getGuildTemplate(e.code)),
          nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
          authenticated: (0, c.e7)([N.default], () =>
            N.default.isAuthenticated(),
          ),
          defaultRoute: (0, c.e7)([T.Z], () => T.Z.defaultRoute),
        };
        return (0, s.jsx)(P, { ...e, ...t });
      }
      function y(e) {
        let { guildTemplate: t } = e,
          { form: n, handleSubmit: r } = (0, h.Z)(t, !1);
        I.Z.flowStep(O.MK.ORGANIC_GUILD_TEMPLATES, O.X2.GUILD_CREATE);
        let i = (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(u.Dx, {
              className: M.header,
              children: D.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD,
            }),
            n,
            (0, s.jsx)(u.zx, {
              className: M.createButton,
              onClick: r,
              children: D.Z.Messages.GUILD_TEMPLATE_CREATE_DISCORD,
            }),
          ],
        });
        return (0, s.jsx)(C.Z, {
          className: M.authBox,
          children: () => [
            (0, s.jsx)(p.Z, { guildTemplate: t }, "template"),
            (0, s.jsx)(
              "div",
              { className: M.formContainer, children: i },
              "contents",
            ),
          ],
        });
      }
    },
    9325: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      });
      var s = n(735250),
        r = n(470079),
        i = n(442837),
        a = n(481060),
        o = n(388905),
        l = n(409059),
        c = n(962220),
        u = n(306453),
        d = n(108427),
        _ = n(314897),
        h = n(626135),
        E = n(587444),
        p = n(981631),
        g = n(58346),
        f = n(689938),
        m = n(113207);
      function I(e, t, n) {
        e.preventDefault(),
          h.default.track(p.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
          });
        let s = _.default.getFingerprint(),
          r = null != s ? s : _.default.getId();
        c.Z.openMobileApp(n.state === g.Rj.RESOLVED ? t : void 0, r);
      }
      function N(e) {
        let { code: t } = e,
          n = (0, i.e7)([l.Z], () => l.Z.getGuildTemplate(t));
        return (r.useEffect(() => {
          (0, d.e)("guild_template_mobile");
        }, []),
        null == n || n.state === g.Rj.RESOLVING)
          ? (0, s.jsx)(o.ZP, { children: (0, s.jsx)(a.Spinner, {}) })
          : n.state === g.Rj.RESOLVED
            ? (0, s.jsxs)(o.ZP, {
                children: [
                  (0, s.jsx)(u.Z, { guildTemplate: n, tall: !0 }),
                  (0, s.jsx)(o.zx, {
                    onClick: (e) => I(e, t, n),
                    className: m.marginTop20,
                    children: f.Z.Messages.GUILD_TEMPLATE_OPEN,
                  }),
                ],
              })
            : (0, s.jsx)(E.Z, {
                text: f.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
                buttonCta: f.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
                onClick: (e) => I(e, t, n),
              });
      }
      i.ZP.initialize();
    },
    587444: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
        u: function () {
          return p;
        },
      });
      var s = n(735250);
      n(470079);
      var r = n(120356),
        i = n.n(r),
        a = n(692547),
        o = n(481060),
        l = n(388905),
        c = n(600164),
        u = n(981631),
        d = n(689938),
        _ = n(684190),
        h = n(739017),
        E = n(113207);
      function p(e) {
        let { text: t, buttonCta: r, onClick: u } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.Ee, { src: n(689411) }),
            (0, s.jsx)(l.Dx, {
              className: i()(E.marginTop20, E.marginBottom8, h.flexCenter),
              children: d.Z.Messages.DISCORD_DESC_SHORT,
            }),
            (0, s.jsx)(l.DK, {
              className: E.marginBottom40,
              children: d.Z.Messages.DISCORD_DESC_LONG,
            }),
            (0, s.jsxs)(o.Card, {
              className: _.card,
              type: o.Card.Types.CUSTOM,
              children: [
                (0, s.jsx)("img", {
                  alt: "",
                  className: _.cardAccentLeft,
                  src: n(70519),
                }),
                (0, s.jsx)("img", {
                  alt: "",
                  className: _.cardAccentRight,
                  src: n(806848),
                }),
                (0, s.jsxs)(c.Z, {
                  className: _.cardContents,
                  direction: c.Z.Direction.VERTICAL,
                  align: c.Z.Align.STRETCH,
                  grow: 0,
                  children: [
                    (0, s.jsx)(o.Text, {
                      tag: "strong",
                      className: _.buttonTitle,
                      variant: "text-md/normal",
                      style: { color: a.Z.unsafe_rawColors.PRIMARY_300.css },
                      children: t,
                    }),
                    (0, s.jsx)(l.zx, {
                      className: _.button,
                      onClick: u,
                      children: r,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function g(e) {
        let { text: t, buttonCta: n, theme: r = u.BRd.DARK, onClick: i } = e;
        return (0, s.jsx)(l.ZP, {
          theme: r,
          children: (0, s.jsx)(p, { text: t, buttonCta: n, onClick: i }),
        });
      }
    },
    344295: function (e, t, n) {
      n(789020), n(47120);
      var s = n(735250),
        r = n(470079),
        i = n(120356),
        a = n.n(i),
        o = n(533800),
        l = n(756647),
        c = n(442837),
        u = n(298444),
        d = n(447543),
        _ = n(881052),
        h = n(899370),
        E = n(267394),
        p = n(388905),
        g = n(639946),
        f = n(792766),
        m = n(362762),
        I = n(978684),
        N = n(264229),
        T = n(929809),
        A = n(703656),
        x = n(108427),
        C = n(314897),
        v = n(896797),
        Z = n(701190),
        S = n(626135),
        R = n(630388),
        O = n(63063),
        b = n(782605),
        D = n(954824),
        M = n(588705),
        L = n(781428),
        P = n(423527),
        j = n(981631),
        y = n(188785),
        G = n(701476),
        B = n(436620),
        U = n(689938),
        F = n(113207);
      function k(e, t, n) {
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
      c.ZP.initialize();
      let w = "Accept Invite Page",
        H = { REGISTER: "register", LOGIN: "login" };
      async function V(e) {
        let { invite: t } = await d.Z.resolveInvite(e, w);
        if (null != t) (0, E.A)(t);
      }
      class z extends r.PureComponent {
        componentDidMount() {
          let { isUnderage: e, login: t, inviteKey: n } = this.props;
          if (
            (S.default.track(
              j.rMx.INVITE_VIEWED,
              { invite_code: n },
              { flush: !0 },
            ),
            (0, x.e)("invite"),
            !B.KO)
          ) {
            let e = this.getInviteKey();
            D.Z.launch("discord://" + j.Z5c.INVITE(e), () => void 0);
          }
          if (!t && e) {
            let e = this.getInviteKey(),
              { baseCode: t } = (0, N.fU)(e);
            (0, A.dL)(j.Z5c.INVITE_LOGIN(t));
          }
        }
        componentDidUpdate(e) {
          let {
              invite: t,
              nativeAppState: n,
              authenticated: s,
              transitionTo: r,
            } = this.props,
            i = this.getInviteKey();
          if (i !== this.getInviteKey(e)) V(i);
          else if (t.state === j.r2o.APP_NOT_OPENED) this.handleContinue();
          else if (this.getMode() === H.LOGIN && s !== e.authenticated && s) {
            let e = C.default.getFingerprint();
            if (null != e) {
              let t = (0, l.s)(e);
              this.track(j.rMx.INVITE_LOGIN_SUCCESSFUL, !0, {
                prev_user_id: t,
              });
            }
            d.Z.acceptInvite({
              inviteKey: i,
              context: this.getAcceptInviteContext(w),
              skipOnboarding: !0,
              callback: this.handleContinue,
            });
          }
          if (
            (n !== e.nativeAppState &&
              n === j.kEZ.OPEN &&
              this.track(j.rMx.INVITE_APP_INVOKED, !1),
            this.getMode() === H.REGISTER && s && !e.authenticated)
          ) {
            let { channel: e } = t;
            null != e &&
              ((0, T.c)(G.M5.INVITE_UNCLAIMED),
              null != t.guild
                ? r(j.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                : d.Z.transitionToInvite(t, r));
          }
        }
        getInviteKey() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return e.inviteKey;
        }
        getMode() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return y.a ? H.REGISTER : e.login ? H.LOGIN : H.REGISTER;
        }
        track(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            { invite: s } = this.props,
            r = this.getInviteKey(),
            i = (0, N.jX)(r),
            a = t
              ? {
                  guild_id: null != s.guild ? s.guild.id : null,
                  channel_id: null != s.channel ? s.channel.id : null,
                  inviter_id: null != s.inviter ? s.inviter.id : null,
                  invite_code: i,
                }
              : { invite_code: i };
          S.default.track(e, { ...a, ...n });
        }
        renderSpinner(e) {
          return (0, s.jsxs)(p.ZP, {
            children: [(0, s.jsx)(p.Dx, { children: e }), (0, s.jsx)(p.Hh, {})],
          });
        }
        renderInvalidInvite() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (0, s.jsxs)(p.ZP, {
            children: [
              (0, s.jsx)(p.Ee, { src: n(167969), className: F.marginBottom8 }),
              (0, s.jsx)(p.Dx, {
                className: a()(F.marginTop8, F.marginBottom8),
                children: U.Z.Messages.AUTH_INVALID_INVITE_TITLE,
              }),
              (0, s.jsx)(p.DK, {
                children: e
                  ? U.Z.Messages.AUTH_BANNED_INVITE_BODY
                  : U.Z.Messages.AUTH_INVALID_INVITE_BODY,
              }),
              this.renderButton(U.Z.Messages.CONTINUE_TO_WEBAPP),
              (0, s.jsx)(p.zx, {
                onClick: () =>
                  window.open(
                    O.Z.getArticleURL(j.BhN.INVALID_INVITES),
                    "_blank",
                  ),
                look: p.zx.Looks.LINK,
                color: p.zx.Colors.LINK,
                className: F.marginTop8,
                children: U.Z.Messages.AUTH_INVALID_INVITE_TIP,
              }),
            ],
          });
        }
        renderErrorInvite() {
          var e, t;
          return (0, s.jsxs)(p.ZP, {
            children: [
              (0, s.jsx)(M.Z, {
                invite: this.props.invite,
                error:
                  null === (e = this.state.error) || void 0 === e
                    ? void 0
                    : e.message,
              }),
              (null === (t = this.state.error) || void 0 === t
                ? void 0
                : t.code) === j.evJ.INVALID_CANNOT_FRIEND_SELF
                ? this.renderButton(U.Z.Messages.CONTINUE_TO_WEBAPP)
                : this.renderButton(
                    U.Z.Messages.INSTANT_INVITE_ACCEPT,
                    this.handleAccept,
                  ),
            ],
          });
        }
        renderExpiredInvite() {
          return this.renderInvalidInvite(!1);
        }
        renderBannedInvite() {
          return this.renderInvalidInvite(!0);
        }
        renderAppOpened(e) {
          let t = null != e ? e : this.handleContinue;
          return (0, s.jsxs)(p.ZP, {
            children: [
              (0, s.jsx)(p.Dx, {
                className: F.marginBottom8,
                children: U.Z.Messages.APP_OPENED_TITLE,
              }),
              (0, s.jsx)(p.DK, { children: U.Z.Messages.APP_OPENED_BODY }),
              this.renderButton(U.Z.Messages.CONTINUE_TO_WEBAPP, () => t()),
            ],
          });
        }
        renderAuthenticatedHeader() {
          let { invite: e } = this.props;
          return null != e.stage_instance && null != e.guild
            ? (0, s.jsx)(f.Z, {
                stageInstance: e.stage_instance,
                guild: e.guild,
              })
            : null != e.guild_scheduled_event
              ? (0, s.jsx)(g.r, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
                })
              : (0, s.jsx)(M.Z, { invite: e });
        }
        renderAuthenicatedFooter() {
          let { invite: e } = this.props;
          return (null != e.stage_instance ||
            null != e.guild_scheduled_event) &&
            null != e.guild
            ? (0, s.jsx)(p.ZP, {
                className: F.marginTop20,
                children: (0, s.jsx)(f.y, {
                  guild: e.guild,
                  onlineCount: e.approximate_presence_count,
                }),
              })
            : null;
        }
        renderAuthenticatedOrDownload() {
          let { invite: e } = this.props,
            t =
              null != e.stage_instance
                ? U.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE
                : U.Z.Messages.INSTANT_INVITE_ACCEPT;
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)(p.ZP, {
                children: [
                  this.renderAuthenticatedHeader(),
                  this.renderButton(t, this.handleAccept),
                ],
              }),
              this.renderAuthenicatedFooter(),
            ],
          });
        }
        renderContinue() {
          return (0, s.jsxs)(p.ZP, {
            children: [
              (0, s.jsx)(p.Dx, { children: U.Z.Messages.APP_NOT_OPENED }),
              this.renderButton(U.Z.Messages.CONTINUE_TO_WEBAPP),
            ],
          });
        }
        render() {
          let {
            invite: e,
            nativeAppState: t,
            authenticated: n,
            transitionTo: r,
            location: i,
          } = this.props;
          if (t === j.kEZ.OPEN) return this.renderAppOpened();
          switch (e.state) {
            case j.r2o.APP_OPENED:
              return this.renderAppOpened();
            case j.r2o.APP_NOT_OPENED:
              return this.renderContinue();
            case j.r2o.RESOLVING:
              return y.a
                ? this.renderSpinner(U.Z.Messages.DEFAULT_INPUT_PLACEHOLDER)
                : this.renderSpinner(U.Z.Messages.APP_OPENING);
            case j.r2o.APP_OPENING:
              return this.renderSpinner(U.Z.Messages.APP_OPENING);
            case j.r2o.RESOLVED:
              var a;
              if (
                n &&
                (0, R.yE)(
                  null !== (a = e.flags) && void 0 !== a ? a : 0,
                  o.$.IS_GUEST_INVITE,
                )
              )
                return (
                  d.Z.openApp(e.code),
                  u.x.set(I.J, e.code),
                  this.renderAppOpened(() => r(j.Z5c.APP))
                );
              if (n || !B.KO) return this.renderAuthenticatedOrDownload();
              else if (this.getMode() === H.LOGIN)
                return (0, s.jsx)(L.Z, {
                  invite: e,
                  transitionTo: r,
                  location: i,
                });
              else
                return (0, s.jsx)(P.Z, {
                  invite: e,
                  onLoginStart: () => this.track(j.rMx.INVITE_LOGIN, !0),
                  location: i,
                  transitionTo: r,
                });
            case j.r2o.ACCEPTING:
              return this.renderSpinner(U.Z.Messages.INSTANT_INVITE_ACCEPTING);
            case j.r2o.EXPIRED:
              return this.renderExpiredInvite();
            case j.r2o.BANNED:
              return this.renderBannedInvite();
            case j.r2o.ERROR:
              return this.renderErrorInvite();
            case j.r2o.ACCEPTED:
            default:
              return null;
          }
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            k(this, "state", { error: null }),
            k(this, "getAcceptInviteContext", (e) =>
              d.Z.getInviteContext(e, this.props.invite),
            ),
            k(this, "handleContinue", (e) => {
              let { invite: t, transitionTo: n } = this.props;
              if (
                null != t.channel ||
                (null == e ? void 0 : e.channel) != null
              ) {
                var s;
                (null === (s = t.guild) || void 0 === s ? void 0 : s.id) != null
                  ? n(j.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                  : d.Z.transitionToInvite(null != e ? e : t, n);
              }
            }),
            k(this, "handleAccept", () => {
              this.setState({ error: null });
              let e = this.getInviteKey();
              d.Z.acceptInvite({
                inviteKey: e,
                context: this.getAcceptInviteContext(w),
                skipOnboarding: !0,
                callback: (t) => {
                  (0, E.A)(t),
                    null != t.channel && d.Z.openApp(e, t.channel.id);
                },
              }).catch((e) => {
                if (e instanceof _.yZ || e instanceof _.Hx) {
                  let t = (0, b.O)(e.code);
                  this.setState({ error: { code: e.code, message: t } });
                } else
                  this.setState({
                    error: {
                      code: e.code,
                      message: U.Z.Messages.INVITE_MODAL_ERROR_DEFAULT,
                    },
                  });
              });
            }),
            k(this, "handleDefaultTransition", () => {
              let { defaultRoute: e, transitionTo: t } = this.props;
              t(e);
            }),
            k(this, "renderButton", function (e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t.handleDefaultTransition,
                { invite: r } = t.props,
                i = null != r.stage_instance || null != r.guild_scheduled_event;
              return B.KO
                ? (0, s.jsx)(p.zx, {
                    className: i ? F.marginTop20 : F.marginTop40,
                    onClick: n,
                    color: i ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                    children: e,
                  })
                : (0, s.jsx)(p.v6, { className: F.marginTop40 });
            });
        }
      }
      t.Z = c.ZP.connectStores([Z.Z, v.Z, C.default, m.Z, h.Z], (e) => {
        var t;
        let { inviteKey: n } = e;
        return {
          invite: null !== (t = Z.Z.getInvite(n)) && void 0 !== t ? t : {},
          nativeAppState: m.Z.getState(n),
          authenticated: C.default.isAuthenticated(),
          defaultRoute: v.Z.defaultRoute,
          isUnderage: h.Z.isUnderageAnonymous(),
        };
      })(z);
    },
    781428: function (e, t, n) {
      n.d(t, {
        q: function () {
          return Y;
        },
      });
      var s,
        r = n(735250),
        i = n(470079),
        a = n(615231),
        o = n(120356),
        l = n.n(o),
        c = n(593473),
        u = n(873546),
        d = n(442837),
        _ = n(481060),
        h = n(570140),
        E = n(893776),
        p = n(899742),
        g = n(579806),
        f = n(743142),
        m = n(388905),
        I = n(379760),
        N = n(600164),
        T = n(100159),
        A = n(473855),
        x = n(124860),
        C = n(86779),
        v = n(726745),
        Z = n(913583),
        S = n(144114),
        R = n(541692),
        O = n(952802),
        b = n(108427),
        D = n(365007),
        M = n(314897),
        L = n(117240),
        P = n(896797),
        j = n(626135),
        y = n(585483),
        G = n(358085),
        B = n(481153),
        U = n(588705),
        F = n(494526),
        k = n(163671),
        w = n(981631),
        H = n(58346),
        V = n(689938),
        z = n(970314),
        K = n(113207);
      function W(e, t, n) {
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
      function Y() {
        return (0, r.jsx)(m.ZP, { children: (0, r.jsx)(_.Spinner, {}) });
      }
      class q extends (s = i.PureComponent) {
        static getDerivedStateFromProps(e) {
          let { handoffAvailable: t, authenticated: n } = e;
          return t || n ? null : { checkingHandoff: !1 };
        }
        componentDidMount() {
          let {
            handoffAvailable: e,
            authenticated: t,
            giftCodeSKU: n,
            invite: s,
            location: r,
          } = this.props;
          e && !t ? (0, p.is)() : t && this.loginOrSSO(t, r, !0),
            j.default.track(
              w.rMx.LOGIN_VIEWED,
              {
                location:
                  null != s ? "Invite Login Page" : "Non-Invite Login Page",
                login_source: this.loginSource,
                authenticated: t,
                ...(null != n ? (0, T.Z)(n, !1, !1) : {}),
              },
              { flush: !0 },
            ),
            null == g.Z &&
              null != window.PublicKeyCredential &&
              null != PublicKeyCredential.isConditionalMediationAvailable &&
              PublicKeyCredential.isConditionalMediationAvailable().then(
                (e) => {
                  e &&
                    (0, D.us)()
                      .then((e) => {
                        let { challenge: t, ticket: n } = e,
                          s = (0, a.wz)(JSON.parse(t));
                        return (
                          (s.signal =
                            this.state.conditionalMediationAbortController.signal),
                          (0, a.U2)(s)
                            .then(
                              (e) => (
                                h.Z.dispatch({ type: "PASSWORDLESS_START" }),
                                E.Z.loginWebAuthn({
                                  ticket: n,
                                  credential: JSON.stringify(e),
                                  source: this.loginSource,
                                  giftCodeSKUId: this.giftCodeSKUId,
                                })
                              ),
                            )
                            .catch((e) => {
                              if ("AbortError" !== e.name) throw e;
                            })
                        );
                      })
                      .catch(() => {});
                },
              ),
            E.Z.getLocationMetadata(),
            (0, b.e)("login");
        }
        componentDidUpdate(e) {
          let { authenticated: t, location: n } = this.props,
            { checkingHandoff: s } = this.state;
          if (
            (t &&
              !e.authenticated &&
              !s &&
              (this.state.conditionalMediationAbortController.abort(),
              this.loginOrSSO(t, n)),
            e.errors !== this.props.errors)
          ) {
            var r, i, a;
            this.hasError("password")
              ? null === (r = this.passwordRef) || void 0 === r || r.focus()
              : this.hasError("email") || this.hasError("login")
                ? null === (i = this.loginRef) || void 0 === i || i.focus()
                : this.hasError("code") &&
                  (null === (a = this.codeRef) || void 0 === a || a.focus());
          }
        }
        get loginSource() {
          let {
            giftCode: e,
            guildTemplate: t,
            invite: n,
            loginSource: s,
            redirectTo: r,
          } = this.props;
          if (null != s) return s;
          if (null != e) return "gift";
          if (null != t) return "guild_template";
          else if (null != n) {
            if (null != n.guild) return "guild_invite";
            if (null != n.channel) return "dm_invite";
            else if (null != n.inviter) return "friend_invite";
          }
          return null != r ? (0, f.L)(r) : null;
        }
        get giftCodeSKUId() {
          let { giftCode: e } = this.props;
          return null != e ? e.skuId : null;
        }
        get canShowChooseAccount() {
          return this.props.hasLoggedInAccounts;
        }
        loginOrSSO(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!!e && null != t)
            this.setState({ redirecting: !0 }),
              n
                ? E.Z.verifySSOToken().then(() => this.transitionSSO(t))
                : this.transitionSSO(t);
        }
        transitionSSO(e) {
          let { transitionTo: t, redirectTo: n, replaceWith: s } = this.props,
            r = null != e ? (0, c.parse)(e.search) : {};
          if ((delete r.redirect_to, null != n)) null != s ? s(n) : t(n);
          else if (null == r.service) t(w.Z5c.APP);
          else {
            let e =
                window.location.protocol +
                window.GLOBAL_ENV.API_ENDPOINT +
                w.ANM.SSO,
              t = { ...r, token: M.default.getToken() };
            window.location = "".concat(e, "?").concat((0, c.stringify)(t));
          }
        }
        hasError(e) {
          return null != this.props.errors[e];
        }
        renderHandOffAvailable() {
          let { authBoxClassName: e } = this.props;
          return (0, r.jsxs)(m.ZP, {
            className: e,
            children: [
              (0, r.jsx)(m.Hh, {}),
              (0, r.jsx)(m.Dx, {
                className: K.marginBottom8,
                children: V.Z.Messages.BROWSER_HANDOFF_DETECTING_TITLE,
              }),
              (0, r.jsx)(m.DK, {
                children:
                  V.Z.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION,
              }),
            ],
          });
        }
        renderHandOffContinue() {
          let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
          return null == e
            ? null
            : (0, r.jsxs)(m.ZP, {
                className: n,
                children: [
                  (0, r.jsx)(m.qE, {
                    src: e.getAvatarURL(void 0, 100),
                    size: _.AvatarSizes.DEPRECATED_SIZE_100,
                    className: K.marginBottom20,
                  }),
                  (0, r.jsx)(m.Dx, {
                    className: K.marginBottom8,
                    children: V.Z.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format(
                      { name: e.toString() },
                    ),
                  }),
                  (0, r.jsx)(m.DK, {
                    className: K.marginBottom40,
                    children: V.Z.Messages._BROWSER_HANDOFF_SUCCESS_BODY,
                  }),
                  (0, r.jsxs)(m.gO, {
                    children: [
                      (0, r.jsx)(m.zx, {
                        onClick: () => t(w.Z5c.APP),
                        className: K.marginBottom8,
                        children:
                          V.Z.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
                            name: e.toString(),
                          }),
                      }),
                      (0, r.jsx)(m.zx, {
                        look: m.zx.Looks.LINK,
                        color: m.zx.Colors.LINK,
                        onClick: this.handleReset,
                        children: V.Z.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL,
                      }),
                    ],
                  }),
                ],
              });
        }
        renderDisabledAccount() {
          let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === w.u34.ACCOUNT_DISABLED,
            n = t
              ? V.Z.Messages.ACCOUNT_DISABLED_TITLE
              : V.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE,
            s = t
              ? V.Z.Messages.ACCOUNT_DISABLED_DESCRIPTION
              : V.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
          return (0, r.jsx)(m.ZP, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, r.jsxs)(_.HeadingLevel, {
              component: (0, r.jsx)(m.Dx, {
                className: K.marginBottom8,
                children: n,
              }),
              children: [
                (0, r.jsx)(m.DK, { className: K.marginBottom20, children: s }),
                (0, r.jsxs)(m.gO, {
                  children: [
                    (0, r.jsx)(m.zx, {
                      color: m.zx.Colors.BRAND,
                      type: "submit",
                      children: V.Z.Messages._RETURN_TO_LOGIN,
                    }),
                    (0, r.jsx)("div", {
                      className: l()(K.marginTop8, z.needAccount),
                      children:
                        V.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format(
                          { onClick: this.handleCancelAccountDeletion },
                        ),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        renderResolving() {
          let { authBoxClassName: e, country: t } = this.props;
          return (0, r.jsxs)(m.ZP, {
            className: e,
            children: [
              (0, r.jsx)(U.R, {}),
              (0, r.jsxs)(m.gO, {
                className: K.marginTop20,
                children: [
                  (0, r.jsx)(O.Z, {
                    className: K.marginBottom20,
                    alpha2: t.alpha2,
                    countryCode: t.code.split(" ")[0],
                    label: V.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                    onChange: (e, t) =>
                      this.setState({ login: e, loginPrefix: t }),
                    setRef: this.setLoginRef,
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: "off",
                    spellCheck: "false",
                    value: this.state.login,
                    autoFocus: !0,
                    required: !0,
                  }),
                  (0, r.jsx)(m.II, {
                    className: K.marginBottom20,
                    label: V.Z.Messages.FORM_LABEL_PASSWORD,
                    onChange: (e) => this.setState({ password: e }),
                    type: "password",
                    setRef: this.setPasswordRef,
                    autoComplete: "off",
                    spellCheck: "false",
                    value: this.state.password,
                    required: !0,
                  }),
                  (0, r.jsx)(m.zx, {
                    className: K.marginBottom8,
                    type: "submit",
                    disabled: !0,
                    children: V.Z.Messages._LOGIN,
                  }),
                  (0, r.jsx)(m.zx, {
                    disabled: !0,
                    look: m.zx.Looks.LINK,
                    color: m.zx.Colors.LINK,
                    children: V.Z.Messages.FORGOT_PASSWORD,
                  }),
                  (0, r.jsx)(m.zx, {
                    disabled: !0,
                    className: K.marginTop4,
                    look: m.zx.Looks.LINK,
                    color: m.zx.Colors.LINK,
                    children: V.Z.Messages.NEED_ACCOUNT,
                  }),
                ],
              }),
            ],
          });
        }
        renderDefaultForm(e) {
          var t;
          let n;
          let {
              invite: s,
              giftCode: i,
              loginStatus: a,
              country: o,
              showMobileWebHandoff: c,
              disableAutofocusOnDefaultForm: u,
            } = this.props,
            d = !this.hasError("email") && this.hasError("password"),
            h = (null == s ? void 0 : s.stage_instance) != null;
          return (
            (n =
              null == s || h
                ? null != i
                  ? (0, r.jsx)(B.Z, { giftCode: i })
                  : (0, r.jsxs)("div", {
                      className: z.header,
                      children: [
                        (0, r.jsx)(
                          m.Dx,
                          {
                            className: K.marginBottom8,
                            children: V.Z.Messages.LOGIN_TITLE,
                          },
                          "title",
                        ),
                        !1 === (0, G.isAndroidWeb)()
                          ? (0, r.jsx)(
                              m.DK,
                              { children: V.Z.Messages.AUTH_LOGIN_BODY },
                              "subtitle",
                            )
                          : null,
                      ],
                    })
                : (0, r.jsx)(U.Z, { invite: s })),
            (0, r.jsxs)(
              N.Z,
              {
                direction: N.Z.Direction.HORIZONTAL,
                align: N.Z.Align.CENTER,
                children: [
                  (0, r.jsxs)("div", {
                    className: z.mainLoginContainer,
                    children: [
                      this.canShowChooseAccount &&
                        this.state.dismissedChooseAccount &&
                        (0, r.jsx)(m.zx, {
                          onClick: () => {
                            this.setState((e) => ({
                              ...e,
                              dismissedChooseAccount: !1,
                            }));
                          },
                          look: m.zx.Looks.LINK,
                          color: m.zx.Colors.PRIMARY,
                          className: z.goBackButton,
                          children: (0, r.jsxs)("div", {
                            className: z.content,
                            children: [
                              (0, r.jsx)(_.ChevronSmallLeftIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: z.caret,
                              }),
                              (0, r.jsx)(_.Text, {
                                variant: "text-md/normal",
                                children: V.Z.Messages.AGE_GATE_GO_BACK,
                              }),
                            ],
                          }),
                        }),
                      n,
                      (0, r.jsx)(_.HeadingLevel, {
                        children: (0, r.jsxs)(m.gO, {
                          className: K.marginTop20,
                          children: [
                            (0, r.jsx)(O.Z, {
                              alpha2: o.alpha2,
                              countryCode: o.code.split(" ")[0],
                              className: K.marginBottom20,
                              label:
                                V.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                              error:
                                null !== (t = this.renderError("login")) &&
                                void 0 !== t
                                  ? t
                                  : this.renderError("email"),
                              onChange: (e, t) =>
                                this.setState({ login: e, loginPrefix: t }),
                              setRef: this.setLoginRef,
                              autoCapitalize: "none",
                              autoComplete: "webauthn",
                              autoCorrect: "off",
                              spellCheck: "false",
                              value: this.state.login,
                              autoFocus: !d && !c && !u,
                              required: !0,
                            }),
                            (0, r.jsx)(m.II, {
                              label: V.Z.Messages.FORM_LABEL_PASSWORD,
                              error: this.renderError("password"),
                              onChange: (e) => this.setState({ password: e }),
                              name: "password",
                              type: "password",
                              setRef: this.setPasswordRef,
                              autoComplete: "off",
                              spellCheck: "false",
                              autoFocus: d && !c && !u,
                              value: this.state.password,
                              required: !0,
                            }),
                            (0, r.jsx)(m.zx, {
                              onClick: this.handleForgotPassword,
                              look: m.zx.Looks.LINK,
                              color: m.zx.Colors.LINK,
                              className: l()(K.marginBottom20, K.marginTop4),
                              children: V.Z.Messages.FORGOT_PASSWORD,
                            }),
                            (0, r.jsx)(m.zx, {
                              type: "submit",
                              submitting: a === w.u34.LOGGING_IN,
                              color: h ? m.zx.Colors.GREEN : m.zx.Colors.BRAND,
                              className: K.marginBottom8,
                              children: h
                                ? V.Z.Messages._LOGIN_STAGE
                                : V.Z.Messages._LOGIN,
                            }),
                            (0, r.jsxs)("div", {
                              className: K.marginTop4,
                              children: [
                                (0, r.jsx)("span", {
                                  className: z.needAccount,
                                  children: V.Z.Messages.NEED_ACCOUNT,
                                }),
                                (0, r.jsx)(m.zx, {
                                  onClick: this.handleGotoRegister,
                                  look: m.zx.Looks.LINK,
                                  color: m.zx.Colors.LINK,
                                  className: z.smallRegisterLink,
                                  children: V.Z.Messages.REGISTER,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(_.HeadingLevel, {
                    children: e
                      ? (0, r.jsx)(F.Z, {
                          authTokenCallback: this.handleAuthToken,
                          conditionalMediationAbortController:
                            this.state.conditionalMediationAbortController,
                        })
                      : null,
                  }),
                ],
              },
              "form-wrapper",
            )
          );
        }
        renderDefault() {
          let { authBoxClassName: e, showMobileWebHandoff: t } = this.props;
          return (0, r.jsxs)("div", {
            className: z.__invalid_pageContainer,
            children: [
              (0, r.jsx)(m.ZP, {
                onSubmit: this.handleLogin,
                tag: "form",
                className: e,
                expanded: !0,
                children: this.renderDefaultForm(!0),
              }),
              t && (0, r.jsx)(C.Z, {}),
            ],
          });
        }
        renderGuildTemplate(e) {
          return (0, r.jsx)(k.Z, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: l()(this.props.authBoxClassName, z.horizontalAuthBox),
            children: () => [
              (0, r.jsx)(A.Z, { guildTemplate: e }, "template"),
              this.renderDefaultForm(!1),
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
            children: (0, r.jsx)(x.Cd, {
              mfaFinish: this.handleTokenSubmitMFA,
              mfaChallenge: e,
              onEarlyClose: () => {
                h.Z.dispatch({ type: "LOGIN_RESET" });
              },
              width: 480,
            }),
          });
        }
        renderIPAuthorization() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, r.jsx)(m.ZP, {
            tag: "form",
            className: e,
            children: (0, r.jsx)(I.Z, {
              title: V.Z.Messages.PHONE_IP_AUTHORIZATION_TITLE,
              subtitle:
                V.Z.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
                  onResendClick: this.handleResendCode,
                }),
              error: t,
              onSubmit: this.handleIPAuthorize,
              onCancel: E.Z.loginReset,
            }),
          });
        }
        renderPasswordRecovery() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, r.jsx)(m.ZP, {
            tag: "form",
            className: e,
            children: (0, r.jsx)(I.Z, {
              title: V.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
              subtitle:
                V.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format(
                  { onResendClick: this.handleResendCode },
                ),
              error: t,
              onSubmit: this.handlePasswordReset,
              onCancel: E.Z.loginReset,
            }),
          });
        }
        renderChooseAccount() {
          return (0, r.jsx)(Z.Z, {
            onDismiss: () => {
              this.setState((e) => ({ ...e, dismissedChooseAccount: !0 }));
            },
          });
        }
        render() {
          let {
              authenticated: e,
              invite: t,
              guildTemplate: n,
              loginStatus: s,
              handoffAvailable: i,
            } = this.props,
            { checkingHandoff: a, redirecting: o } = this.state;
          if (o || a) return (0, r.jsx)(Y, {});
          if (i) return this.renderHandOffAvailable();
          if (e && a) return this.renderHandOffContinue();
          switch (s) {
            case w.u34.LOGGING_IN_MFA_SMS:
            case w.u34.MFA_SMS_STEP:
            case w.u34.LOGGING_IN_MFA:
            case w.u34.MFA_STEP:
              return this.renderMFA();
            case w.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case w.u34.ACCOUNT_DISABLED:
              return this.renderDisabledAccount();
            case w.u34.PHONE_IP_AUTHORIZATION:
              return this.renderIPAuthorization();
            case w.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
              return this.renderPasswordRecovery();
            case w.u34.LOGGING_IN:
            case w.u34.NONE:
            default:
              if (null != t && t.state === w.r2o.RESOLVING)
                return this.renderResolving();
              if (null != n) {
                if (n.state === H.Rj.RESOLVING) return this.renderResolving();
                return this.renderGuildTemplate(n);
              }
              if (
                this.canShowChooseAccount &&
                !this.state.dismissedChooseAccount
              )
                return this.renderChooseAccount();
              return this.renderDefault();
          }
        }
        constructor(e) {
          var t, n;
          super(e),
            W(this, "loginRef", void 0),
            W(this, "passwordRef", void 0),
            W(this, "codeRef", void 0),
            W(this, "handleAuthToken", async (e) => {
              await E.Z.loginToken(e, !1),
                j.default.track(w.rMx.LOGIN_SUCCESSFUL, {
                  source: w.uRl.QR_CODE,
                  login_source: this.loginSource,
                  gift_code_sku_id: this.giftCodeSKUId,
                  is_new_user: !1,
                });
            }),
            W(this, "setLoginRef", (e) => {
              this.loginRef = e;
            }),
            W(this, "setPasswordRef", (e) => {
              this.passwordRef = e;
            }),
            W(this, "setCodeRef", (e) => {
              this.codeRef = e;
            }),
            W(this, "getFullLogin", () => {
              let { loginPrefix: e, login: t } = this.state;
              return e + t;
            }),
            W(this, "renderError", (e) => {
              let { errors: t } = this.props;
              if (this.hasError(e)) {
                let n = t[e];
                return Array.isArray(n) ? n[0] : n;
              }
              return null;
            }),
            W(this, "handleLogin", (e) => {
              let { password: t, undelete: n } = this.state;
              null != e && e.preventDefault(),
                E.Z.login({
                  login: this.getFullLogin(),
                  password: t,
                  undelete: n,
                  source: this.loginSource,
                  giftCodeSKUId: this.giftCodeSKUId,
                  invite: this.props.invite,
                }),
                y.S.dispatch(w.CkL.WAVE_EMPHASIZE);
            }),
            W(this, "handleIPAuthorize", async (e) => {
              let { password: t, undelete: n } = this.state,
                s = this.getFullLogin();
              try {
                let { token: r } = await S.Z.verifyPhone(s, e, !1);
                await E.Z.authorizeIPAddress(r),
                  E.Z.login({
                    login: s,
                    password: t,
                    undelete: n,
                    source: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                  }),
                  y.S.dispatch(w.CkL.WAVE_EMPHASIZE);
              } catch (e) {
                null != e.body &&
                  null != e.body.message &&
                  this.setState({ phoneVerifyError: e.body.message });
              }
            }),
            W(this, "handlePasswordReset", async (e) => {
              let { transitionTo: t } = this.props;
              this.setState({ phoneVerifyError: null });
              try {
                let { token: n } = await S.Z.verifyPhone(
                  this.getFullLogin(),
                  e,
                  !1,
                );
                t(w.Z5c.RESET, {
                  search: (0, c.stringify)({ token: n, from_login: "true" }),
                });
              } catch (e) {
                null != e.body &&
                  null != e.body.message &&
                  this.setState({ phoneVerifyError: e.body.message });
              }
            }),
            W(this, "handleTokenSubmitMFA", (e) => {
              let { mfaType: t, data: n, ticket: s } = e;
              return (
                y.S.dispatch(w.CkL.WAVE_EMPHASIZE),
                E.Z.loginMFAv2({
                  code: n,
                  ticket: s,
                  mfaType: t,
                  source: this.loginSource,
                  giftCodeSKUId: this.giftCodeSKUId,
                })
              );
            }),
            W(this, "handleForgotPassword", async (e) => {
              null != e && e.preventDefault(),
                null != this.loginRef && this.loginRef.focus();
              let t = this.getFullLogin();
              try {
                y.S.dispatch(w.CkL.WAVE_EMPHASIZE),
                  await E.Z.forgotPassword(t),
                  (0, _.openModal)((e) =>
                    (0, r.jsx)(_.ConfirmModal, {
                      header:
                        V.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                      confirmText: V.Z.Messages.OKAY,
                      confirmButtonColor: m.zx.Colors.BRAND,
                      className: u.tq ? z.mobile : "",
                      ...e,
                      children: (0, r.jsx)(_.Text, {
                        variant: "text-md/normal",
                        children:
                          V.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format(
                            { email: t },
                          ),
                      }),
                    }),
                  );
              } catch {}
            }),
            W(this, "handleResendCode", () => {
              S.Z.resendCode(this.getFullLogin());
            }),
            W(this, "handleReset", (e) => {
              null != e && e.preventDefault(),
                E.Z.loginReset(),
                this.setState({
                  password: "",
                  loginPrefix: "",
                  login: "",
                  code: "",
                  smsCode: "",
                  undelete: !1,
                  checkingHandoff: !1,
                  redirecting: !1,
                });
            }),
            W(this, "handleCancelAccountDeletion", () => {
              this.setState({ undelete: !0 }, this.handleLogin);
            }),
            W(this, "handleGotoRegister", () => {
              let e;
              let { login: t } = this.state,
                {
                  invite: n,
                  giftCode: s,
                  guildTemplate: r,
                  location: i,
                  transitionTo: a,
                  redirectTo: o,
                } = this.props,
                l = null != i ? (0, c.parse)(i.search) : {};
              "" !== t && (l.email = t),
                null != n
                  ? ((l.mode = "register"), (e = w.Z5c.INVITE(n.code)))
                  : null != s
                    ? ((l.mode = "register"), (e = w.Z5c.GIFT_CODE(s.code)))
                    : null != r
                      ? (e = w.Z5c.GUILD_TEMPLATE(r.code))
                      : null != o
                        ? ((e = w.Z5c.REGISTER), (l.redirect_to = o))
                        : (e = w.Z5c.REGISTER),
                E.Z.loginReset(),
                a(e, { search: (0, c.stringify)(l) }),
                y.S.dispatch(w.CkL.WAVE_EMPHASIZE);
            });
          let s = null != e.location ? (0, c.parse)(e.location.search) : {};
          this.state = {
            redirecting: e.authenticated,
            checkingHandoff: e.handoffAvailable,
            loginPrefix: "",
            login:
              null !==
                (n = null !== (t = s.email) && void 0 !== t ? t : s.login) &&
              void 0 !== n
                ? n
                : "",
            password: "",
            code: "",
            smsCode: "",
            undelete: !1,
            phoneVerifyError: null,
            dismissedChooseAccount: !1,
            conditionalMediationAbortController: new AbortController(),
          };
        }
      }
      W(q, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
      t.Z = function (e) {
        let t = (0, d.cj)([L.Z, P.Z, M.default, v.Z, R.Z], () => ({
          authenticated: M.default.isAuthenticated(),
          handoffAvailable: L.Z.isHandoffAvailable(),
          user: L.Z.user,
          loginStatus: M.default.getLoginStatus(),
          mfaTicket: M.default.getMFATicket(),
          mfaSMS: M.default.getMFASMS(),
          mfaMethods: M.default.getMFAMethods(),
          maskedPhone: M.default.getMaskedPhone(),
          errors: M.default.getErrors(),
          defaultRoute: P.Z.defaultRoute,
          country: R.Z.getCountryCode(),
          hasLoggedInAccounts: v.Z.getHasLoggedInAccounts(),
        }));
        return (0, r.jsx)(q, { ...e, ...t });
      };
    },
    209411: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120),
        n(773603);
      var s = n(735250),
        r = n(470079),
        i = n(593473),
        a = n(266067),
        o = n(442837),
        l = n(893776),
        c = n(899742),
        u = n(743142),
        d = n(893607),
        _ = n(703656),
        h = n(314897),
        E = n(781428),
        p = n(981631),
        g = n(176505);
      function f(e) {
        let t = r.useCallback(
            (t) => {
              if (
                (function (e) {
                  var t;
                  let n = (0, a.LX)(e, {
                    path: p.Z5c.CHANNEL(d.Hw.guildId(), d.Hw.channelId()),
                  });
                  return (
                    (null == n
                      ? void 0
                      : null === (t = n.params) || void 0 === t
                        ? void 0
                        : t.channelId) === g.oC.ROLE_SUBSCRIPTIONS || !1
                  );
                })(t)
              )
                _.dL(t);
              else {
                var n;
                (null !== (n = e.transitionTo) && void 0 !== n ? n : _.uL)(t);
              }
            },
            [e.transitionTo],
          ),
          { isAuthenticated: n, loginStatus: f } = (0, o.cj)(
            [h.default],
            () => ({
              isAuthenticated: h.default.isAuthenticated(),
              loginStatus: h.default.getLoginStatus(),
            }),
          ),
          { location: m, redirectTo: I } = e,
          [N, T] = r.useState(n);
        function A(e) {
          let { handoffKey: t, handoffToken: n, handoffSource: s } = e;
          (0, c.Yz)({ handoffKey: t, handoffToken: n, handoffSource: s }),
            T(!1);
        }
        return (r.useEffect(() => {
          if (null != m) {
            let { handoff_key: e, handoff_token: t } = (0, i.parse)(m.search);
            if (null != e && null != t) {
              let n = null != I ? (0, u.L)(I) : void 0;
              N
                ? l.Z.logout(null).finally(() => {
                    A({ handoffKey: e, handoffToken: t, handoffSource: n });
                  })
                : A({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
          }
        }, []),
        N || f === p.u34.LOGGING_IN)
          ? (0, s.jsx)(E.q, {})
          : (0, s.jsx)(E.Z, { ...e, transitionTo: t });
      }
    },
    494526: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      }),
        n(411104),
        n(47120);
      var s,
        r,
        i,
        a,
        o = n(735250),
        l = n(470079),
        c = n(615231),
        u = n(261470),
        d = n(399606),
        _ = n(544891),
        h = n(481060),
        E = n(893776),
        p = n(99690),
        g = n(937154),
        f = n(388905),
        m = n(198993),
        I = n(710845),
        N = n(314897),
        T = n(585483),
        A = n(358085),
        x = n(172517),
        C = n(51144),
        v = n(998502),
        Z = n(981631),
        S = n(231338),
        R = n(689938),
        O = n(506303),
        b = n(113207);
      ((i = s || (s = {}))[(i.INITIALIZING = 0)] = "INITIALIZING"),
        (i[(i.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (i[(i.PENDING_FINISH = 2)] = "PENDING_FINISH"),
        (i[(i.PENDING_TICKET = 3)] = "PENDING_TICKET"),
        (i[(i.PENDING_LOGIN = 4)] = "PENDING_LOGIN"),
        (i[(i.FINISH = 5)] = "FINISH"),
        ((a = r || (r = {}))[(a.QR_CODE = 0)] = "QR_CODE"),
        (a[(a.CONFIRM = 1)] = "CONFIRM");
      let D = n(515695),
        M = new I.Z("LoginQRSocket");
      function L(e) {
        let { text: t = "" } = e,
          [n, s] = l.useState(!1);
        return (
          l.useEffect(() => {
            let e = new Image();
            (e.src = D), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
          }, [D]),
          l.useEffect(() => {
            n &&
              h.AccessibilityAnnouncer.announce(
                R.Z.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL,
              );
          }, [n]),
          (0, o.jsx)("div", {
            className: O.qrCodeContainer,
            children:
              "" !== t && n
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(m.ZP, {
                        className: O.qrCode,
                        size: 160,
                        text: t,
                      }),
                      (0, o.jsx)("div", {
                        className: O.qrCodeOverlay,
                        children: (0, o.jsx)("img", { src: D, alt: "" }),
                      }),
                    ],
                  })
                : (0, o.jsx)("div", {
                    className: O.qrCodeOverlay,
                    "aria-label": R.Z.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                    "aria-busy": !0,
                    children: (0, o.jsx)(h.Spinner, {
                      className: O.qrCode,
                      type: h.Spinner.Type.WANDERING_CUBES,
                      "aria-hidden": !0,
                    }),
                  }),
          })
        );
      }
      let P = (e) => {
        let { className: t, children: n } = e;
        return (0, o.jsx)(h.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          className: t,
          children: n,
        });
      };
      function j(e) {
        let {
          state: t,
          cancel: n,
          errorMessage: s,
          conditionalMediationAbortController: r,
          isPasswordlessActive: i,
        } = e;
        switch (t.step) {
          case 0:
          case 1:
            return (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(L, {
                  text:
                    1 === t.step
                      ? "https://discord.com/ra/".concat(t.fingerprint)
                      : "",
                }),
                (0, o.jsx)(f.Dx, {
                  className: b.marginBottom8,
                  children: R.Z.Messages.LOGIN_WITH_QR,
                }),
                null != s
                  ? (0, o.jsx)(P, { children: s })
                  : (0, o.jsx)(f.DK, {
                      children: R.Z.Messages.LOGIN_WITH_QR_DESCRIPTION.format(),
                    }),
                (0, o.jsx)(h.Button, {
                  size: h.ButtonSizes.LARGE,
                  look: h.ButtonLooks.LINK,
                  color: h.ButtonColors.LINK,
                  disabled: i,
                  onClick: () =>
                    (function (e) {
                      let t =
                        A.isPlatformEmbedded &&
                        v.ZP.supportsFeature(Z.eRX.WEBAUTHN)
                          ? v.ZP.webAuthnAuthenticate
                          : (e) => {
                              let t = (0, c.wz)(JSON.parse(e));
                              return (0, c.U2)(t).then((e) =>
                                JSON.stringify(e),
                              );
                            };
                      E.Z.authenticatePasswordless({
                        authenticateFunc: t,
                        conditionalMediationAbortController: e,
                      }).catch(() => {});
                    })(r),
                  children: R.Z.Messages.SIGN_IN_WITH_PASSKEY,
                }),
              ],
            });
          case 3:
          case 2: {
            let { user: e } = t;
            return (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(p.Z, {
                  className: O.qrAvatar,
                  user: e,
                  size: h.AvatarSizes.SIZE_120,
                  isMobile: !0,
                  status: S.Sk.ONLINE,
                }),
                (0, o.jsx)(f.Dx, {
                  className: b.marginBottom8,
                  children: R.Z.Messages.CONFIRM_QR_CHECK_YOUR_PHONE,
                }),
                (0, o.jsx)(f.DK, {
                  children: R.Z.Messages.LOGIN_AS.format({
                    username: "".concat(C.ZP.getUserTag(e)),
                  }),
                }),
                (0, o.jsx)(h.Button, {
                  look: h.Button.Looks.BLANK,
                  color: h.Button.Colors.LINK,
                  size: h.Button.Sizes.MIN,
                  onClick: n,
                  className: O.startOverButton,
                  children: R.Z.Messages.QR_CODE_LOGIN_START_OVER,
                }),
              ],
            });
          }
          case 4:
          case 5:
            return (0, o.jsx)(h.Spinner, {
              type: h.Spinner.Type.WANDERING_CUBES,
            });
        }
      }
      function y(e) {
        let { authTokenCallback: t, conditionalMediationAbortController: n } =
            e,
          s = (0, d.e7)([N.default], () => N.default.getIsPasswordlessActive()),
          {
            state: r,
            rsaKeyPair: i,
            cancel: a,
            handleFailure: c,
          } = (function (e) {
            let [t, n] = l.useState(0),
              [s, r] = l.useState(!1),
              [i, a] = l.useState({ step: 0 }),
              [o, c] = l.useState(null),
              d = (0, g.Z)(),
              _ = l.useMemo(() => new u.Z(1500, 3e4), []),
              h = l.useRef();
            h.current = l.useCallback(() => {
              a({ step: 0 }),
                d
                  ? n((e) => e + 1)
                  : (M.info(
                      "document is not visible, will defer reconnection when document becomes visible.",
                    ),
                    r(!0));
            }, [d]);
            let E = l.useCallback(() => {
                (function (e) {
                  let { current: t } = e;
                  if (void 0 === t)
                    throw Error("tried to unwrap an undefined value.");
                  return t;
                })(h)();
              }, [h]),
              p = l.useCallback(() => {
                M.error(
                  "Could not complete QR code login, trying to restart with a new QR code.",
                ),
                  a({ step: 0 }),
                  !_.pending && _.fail(E);
              }, [E, _]);
            return (
              l.useEffect(() => {
                d &&
                  s &&
                  0 === i.step &&
                  (M.info("reconnecting, now that document is visible"),
                  r(!1),
                  n((e) => e + 1));
              }, [i, d, s, r]),
              l.useEffect(() => {
                let t = Date.now(),
                  n = () => "".concat(Date.now() - t, "ms"),
                  s = "wss:".concat(
                    window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT,
                    "/?v=2",
                  ),
                  r = new WebSocket(s);
                M.info("[0ms] connecting to ".concat(s));
                let i = (e) => M.info("[".concat(n(), "] ").concat(e)),
                  o = null,
                  l = null,
                  u = null,
                  d = null,
                  h = !0;
                function g() {
                  if (null != o) return o;
                  throw Error("No key pair set");
                }
                let f = () => {
                  h
                    ? ((h = !1), r.send(JSON.stringify({ op: "heartbeat" })))
                    : (i("heartbeat timeout, reconnecting."), r.close(), p());
                };
                return (
                  (r.onmessage = async (t) => {
                    let { data: n } = t,
                      s = JSON.parse(n);
                    switch (s.op) {
                      case "nonce_proof": {
                        let e = s.encrypted_nonce,
                          t = await (0, x.qd)(g(), e);
                        i("computed nonce proof"),
                          r.send(
                            JSON.stringify({ op: "nonce_proof", nonce: t }),
                          );
                        return;
                      }
                      case "pending_remote_init": {
                        _.succeed(), T.S.dispatch(Z.CkL.WAVE_EMPHASIZE);
                        let e = await (0, x.Pk)(g());
                        if (e !== s.fingerprint)
                          throw Error(
                            "bad fingerprint "
                              .concat(e, " !== ")
                              .concat(s.fingerprint),
                          );
                        i("handshake complete awaiting remote auth."),
                          a({ step: 1, fingerprint: e });
                        return;
                      }
                      case "pending_login": {
                        let e = s.ticket;
                        null == e && p(), a({ step: 4, ticket: e });
                        return;
                      }
                      case "pending_ticket": {
                        T.S.dispatch(Z.CkL.WAVE_EMPHASIZE),
                          i(
                            "remote auth handshake started, awaiting ticket/cancel.",
                          );
                        let e = s.encrypted_user_payload;
                        a({ step: 3, user: await (0, x.Rq)(g(), e) });
                        return;
                      }
                      case "pending_finish": {
                        T.S.dispatch(Z.CkL.WAVE_EMPHASIZE),
                          i(
                            "remote auth handshake started, awaiting finish/cancel.",
                          );
                        let e = s.encrypted_user_payload;
                        a({ step: 2, user: await (0, x.Rq)(g(), e) });
                        return;
                      }
                      case "finish": {
                        T.S.dispatch(Z.CkL.WAVE_EMPHASIZE),
                          i("remote auth handshake finished.");
                        let t = s.encrypted_token;
                        a({ step: 5 }), e(await (0, x.FW)(g(), t));
                        return;
                      }
                      case "cancel":
                        i("remote auth handshake cancelled."), E();
                        return;
                      case "hello": {
                        i(
                          "got hello, auth timeout=".concat(s.timeout_ms, "ms"),
                        );
                        let e = s.heartbeat_interval;
                        d = setTimeout(
                          () => {
                            (d = null), f(), (u = setInterval(f, e));
                          },
                          Math.floor(e * Math.random()),
                        );
                        return;
                      }
                      case "heartbeat_ack":
                        h = !0;
                    }
                  }),
                  (r.onopen = async () => {
                    (o = await (0, x.W_)()), (l = await (0, x.dK)(o));
                    let e = await (0, x.Pk)(o);
                    i("connected, handshaking with fingerprint: ".concat(e)),
                      r.send(
                        JSON.stringify({ op: "init", encoded_public_key: l }),
                      ),
                      c(o);
                  }),
                  (r.onclose = (e) => {
                    i(
                      "disconnected, code: "
                        .concat(e.code, " ")
                        .concat(e.reason),
                    ),
                      p();
                  }),
                  (r.onerror = (e) => {
                    i("disconnected, error: ".concat(JSON.stringify(e))), p();
                  }),
                  () => {
                    i("cleaning up"),
                      (r.onopen = () => null),
                      (r.onmessage = () => null),
                      (r.onclose = () => null),
                      (r.onerror = () => null),
                      r.close(1e3),
                      _.cancel(),
                      null != d && clearTimeout(d),
                      null != u && clearInterval(u);
                  }
                );
              }, [E, e, t, _, p]),
              { state: i, rsaKeyPair: o, cancel: E, handleFailure: p }
            );
          })(t),
          E = (function (e) {
            switch (e) {
              case 0:
              case 1:
                return 0;
              case 3:
              case 2:
              case 4:
              case 5:
                return 1;
            }
          })(r.step);
        return (
          l.useEffect(() => {
            4 === r.step &&
              null != r.ticket &&
              _.tn
                .post({
                  url: Z.ANM.REMOTE_AUTH_LOGIN,
                  body: { ticket: r.ticket },
                  oldFormErrors: !0,
                })
                .then(async (e) => {
                  if (null != i)
                    try {
                      let n = await (0, x.FW)(i, e.body.encrypted_token);
                      t(n);
                    } catch (e) {
                      c();
                    }
                  else c();
                })
                .catch(() => {
                  c();
                });
          }, [r, t, i, c]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", { className: O.verticalSeparator }),
              (0, o.jsx)(h.Sequencer, {
                fillParent: !0,
                className: O.qrLogin,
                step: E,
                steps: [0, 1],
                children: (0, o.jsx)("div", {
                  className: O.qrLoginInner,
                  children: (0, o.jsx)(j, {
                    state: r,
                    cancel: a,
                    conditionalMediationAbortController: n,
                    isPasswordlessActive: s,
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    163671: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(735250);
      n(470079);
      var r = n(120356),
        i = n.n(r),
        a = n(388905),
        o = n(929650);
      function l(e) {
        let { children: t, className: n, ...r } = e,
          l = t();
        return (0, s.jsx)(a.ZP, {
          ...r,
          className: i()(n, o.container),
          contentClassName: o.content,
          children: l.map((e, t) =>
            (0, s.jsx)(
              "div",
              {
                className: o.column,
                style: { flexBasis: "".concat(100 / l.length, "%") },
                children: e,
              },
              t,
            ),
          ),
        });
      }
    },
    649156: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var r = n(3570),
        i = n(685311),
        a = n(186901);
      t.Z = function (e) {
        let { match: t, location: n } = e,
          o = async (e, t) => {
            await (0, r.s)(a.jE.PICK_GUILD_SETTINGS, {
              section: e.params.section,
              subsection: e.params.subsection,
              search: t.search,
            });
          };
        return (0, s.jsx)(i.Z, { match: t, location: n, attemptDeepLink: o });
      };
    },
    423527: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return el;
        },
      }),
        n(757143),
        n(47120),
        n(627341);
      var s,
        r = n(735250),
        i = n(470079),
        a = n(120356),
        o = n.n(a),
        l = n(593473),
        c = n(278074),
        u = n(990547),
        d = n(442837),
        _ = n(846519),
        h = n(481060),
        E = n(893776),
        p = n(899370),
        g = n(224841),
        f = n(13430),
        m = n(213609),
        I = n(882037),
        N = n(201207),
        T = n(481230),
        A = n(388905),
        x = n(853268),
        C = n(639946),
        v = n(616952),
        Z = n(792766),
        S = n(692483),
        R = n(100159),
        O = n(473855),
        b = n(726745),
        D = n(929809),
        M = n(541692),
        L = n(986197),
        P = n(135200),
        j = n(219496),
        y = n(794099),
        G = n(807369),
        B = n(180529),
        U = n(108427),
        F = n(314897),
        k = n(480294),
        w = n(896797),
        H = n(626135),
        V = n(585483),
        z = n(70956),
        K = n(624138),
        W = n(481153),
        Y = n(588705),
        q = n(163671),
        J = n(981631),
        X = n(355142),
        Q = n(188785),
        $ = n(701476),
        ee = n(801461),
        et = n(689938),
        en = n(100906),
        es = n(113207);
      function er(e, t, n) {
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
      d.ZP.initialize();
      let ei = /\.$/,
        ea = (e) =>
          Array.isArray(e)
            ? e
                .map((e) => e.replace(ei, ""))
                .join(". ")
                .trim()
            : e;
      class eo extends (s = i.PureComponent) {
        get registrationSource() {
          let { giftCode: e, guildTemplate: t, invite: n } = this.props;
          if (null != e) return "gift";
          if (null != t) return "guild_template";
          if (null != n) {
            if (null != n.guild) return "guild_invite";
            if (null != n.channel) return "dm_invite";
            else if (null != n.inviter) return "friend_invite";
          }
          return null;
        }
        hasConsent() {
          let { consentRequired: e } = this.props,
            { consent: t } = this.state;
          return null != e && t;
        }
        componentDidMount() {
          this.redirectIfAuthenticated(),
            N.Z.trackExposure({ location: "0ba758_1" });
          let { giftCodeSKU: e, invite: t } = this.props;
          H.default.track(
            J.rMx.REGISTER_VIEWED,
            {
              location:
                null != t ? "Invite Register Page" : "Non-Invite Register Page",
              registration_source: this.registrationSource,
              ...(null != e ? (0, R.Z)(e, !1, !1) : {}),
            },
            { flush: !0 },
          ),
            null == this.props.consentRequired && E.Z.getLocationMetadata(),
            (0, U.e)("register");
        }
        componentWillUnmount() {
          this._retryTimer.stop();
        }
        static getDerivedStateFromProps(e, t) {
          let { consentRequired: n } = e,
            { consentRequiredProp: s } = t;
          return null == s && null != n
            ? { consent: !n, consentRequiredProp: n }
            : { consentRequiredProp: n };
        }
        componentDidUpdate(e, t) {
          let {
              apiErrors: n,
              authenticated: s,
              isUnderage: r,
              invite: i,
              onChangeStep: a,
            } = this.props,
            { parsedDateOfBirth: o } = this.state;
          (e.apiErrors !== n || t.parsedDateOfBirth !== o) &&
            (this.hasError("email") || this.hasError("phone")
              ? null != this.emailRef && this.emailRef.focus()
              : this.hasError("username")
                ? null != this.usernameRef && this.usernameRef.focus()
                : this.hasError("global_name")
                  ? null != this.globalNameRef && this.globalNameRef.focus()
                  : this.hasError("password")
                    ? null != this.passwordRef && this.passwordRef.focus()
                    : null == this.state.parsedDateOfBirth
                      ? null != this.dateOfBirthRef.current &&
                        this.dateOfBirthRef.current.focus()
                      : this.hasError("retry_after") &&
                        "number" == typeof this.props.apiErrors.retry_after &&
                        (this.setState({ isRateLimited: !0 }),
                        this._retryTimer.start(
                          this.props.apiErrors.retry_after * z.Z.Millis.SECOND,
                          () => {
                            this.setState({ isRateLimited: !1 });
                          },
                        ))),
            s &&
              !e.authenticated &&
              ((0, D.c)($.M5.ORGANIC_REGISTERED),
              this.redirectIfAuthenticated());
          let l = X.E.FULL;
          r || this.hasError("date_of_birth")
            ? (l = X.E.AGE_GATE)
            : null != i &&
              (null != i.guild || null != i.channel) &&
              (l = X.E.INVITE),
            a(l);
        }
        redirectIfAuthenticated() {
          let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
          if (!!e) t(null != n ? n : w.Z.defaultRoute);
        }
        async handleRegister() {
          let {
              email: e,
              username: t,
              globalName: n,
              password: s,
              consent: r,
              parsedDateOfBirth: i,
            } = this.state,
            {
              invite: a,
              guildTemplate: o,
              giftCode: l,
              onRegister: c,
              usernameSuggestion: u,
              isMobileWebInviteRegistration: d,
            } = this.props,
            _ = null != a ? a.code : null,
            h = null != l ? l.skuId : null,
            E = I.MD.getState(),
            p = (0, K.Ew)(u) ? null : t === u,
            g = Q.a ? await (0, S.K)(t) : t,
            f = Q.a ? await (0, S.K)(n) : n;
          V.S.dispatch(J.CkL.WAVE_EMPHASIZE);
          try {
            d || null == a
              ? await (0, T.R$)({
                  email: e,
                  username: g,
                  globalName: f,
                  consent: r,
                  password: s,
                  invite: _,
                  usedUsernameSuggestion: p,
                  guildTemplateCode: null == o ? void 0 : o.code,
                  giftCodeSKUId: h,
                  birthday: i,
                  promoEmailConsent: E.required ? E : null,
                })
              : await (0, T.ZP)({
                  consent: r,
                  invite: _,
                  giftCodeSKUId: h,
                  usedUsernameSuggestion: p,
                  globalName: f,
                }),
              null == c || c();
          } catch (e) {}
        }
        hasError(e) {
          return null != this.props.apiErrors[e];
        }
        renderConsentComponents() {
          let { consent: e } = this.state,
            {
              consentRequired: t,
              registrationCopyExperimentConfig: {
                enableNewCopy: n,
                hasProminentCopy: s,
              },
            } = this.props,
            i = null,
            a = null;
          return (
            t
              ? (a = (0, r.jsx)(x.Z, {
                  value: e,
                  onChange: (e) => this.setState({ consent: e }),
                  subText: et.Z.Messages.TERMS_PRIVACY_OPT_IN.format({
                    termsURL: J.EYA.TERMS,
                    privacyURL: J.EYA.PRIVACY,
                  }),
                }))
              : (i = (0, r.jsx)(A.i_, {
                  isProminent: !!s,
                  className: es.marginTop8,
                  children: n
                    ? et.Z.Messages.TERMS_PRIVACY_ON_REGISTER.format({
                        buttonText: et.Z.Messages.CONTINUE,
                        termsURL: J.EYA.TERMS,
                        privacyURL: J.EYA.PRIVACY,
                      })
                    : et.Z.Messages.TERMS_PRIVACY.format({
                        termsURL: J.EYA.TERMS,
                        privacyURL: J.EYA.PRIVACY,
                      }),
                })),
            { subText: i, consentText: a }
          );
        }
        renderInviteResolving() {
          let { authBoxClassName: e } = this.props,
            t = (e) => {
              this.setState({ globalName: e });
            },
            n = this.state.globalName;
          return (0, r.jsxs)(A.ZP, {
            className: e,
            children: [
              (0, r.jsx)(Y.R, {}),
              (0, r.jsxs)(A.gO, {
                className: es.marginTop40,
                children: [
                  (0, r.jsx)(h.FormTitle, {
                    children: et.Z.Messages.FORM_LABEL_USERNAME,
                  }),
                  (0, r.jsx)(h.Tooltip, {
                    text: et.Z.Messages.AUTH_USERNAME_TOOLTIP,
                    position: "right",
                    color: h.Tooltip.Colors.BRAND,
                    children: (e) => {
                      let { onMouseEnter: s, onMouseLeave: i } = e;
                      return (0, r.jsx)(A.II, {
                        autoFocus: !0,
                        className: es.marginBottom8,
                        name: "username",
                        value: n,
                        placeholder: et.Z.Messages.FORM_PLACEHOLDER_USERNAME,
                        onChange: t,
                        onMouseEnter: s,
                        onMouseLeave: i,
                      });
                    },
                  }),
                  (0, r.jsx)(A.zx, {
                    className: es.marginTop20,
                    disabled: !0,
                    children: et.Z.Messages.CONTINUE,
                  }),
                  (0, r.jsx)(A.i_, {
                    disabled: !0,
                    className: es.marginTop8,
                    children: et.Z.Messages.TERMS_PRIVACY.format({
                      termsURL: J.EYA.TERMS,
                      privacyURL: J.EYA.PRIVACY,
                    }),
                  }),
                  Q.a
                    ? null
                    : (0, r.jsx)(A.zx, {
                        look: A.zx.Looks.LINK,
                        color: A.zx.Colors.LINK,
                        disabled: !0,
                        className: es.marginTop20,
                        children: et.Z.Messages.ALREADY_HAVE_ACCOUNT,
                      }),
                ],
              }),
            ],
          });
        }
        renderInviteHeader() {
          let { invite: e } = this.props;
          return (null == e ? void 0 : e.stage_instance) != null &&
            null != e.guild
            ? (0, r.jsx)(Z.Z, {
                stageInstance: e.stage_instance,
                guild: e.guild,
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, r.jsx)(C.r, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
                })
              : (0, r.jsx)(Y.Z, { invite: e });
        }
        renderInviteButton() {
          let { invite: e, registering: t, consentRequired: n } = this.props,
            { consent: s } = this.state,
            i = A.zx.Colors.BRAND,
            a = et.Z.Messages.CONTINUE;
          return (
            (null == e ? void 0 : e.stage_instance) != null &&
              ((i = A.zx.Colors.GREEN),
              (a = et.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE)),
            (0, r.jsx)(h.Tooltip, {
              text: !s && n ? et.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
              children: (e) =>
                (0, r.jsx)("div", {
                  className: es.marginTop20,
                  ...e,
                  children: (0, r.jsx)(A.zx, {
                    type: "submit",
                    submitting: t,
                    disabled: !this.hasConsent(),
                    color: i,
                    children: a,
                  }),
                }),
            })
          );
        }
        renderInvite() {
          let {
              invite: e,
              authBoxClassName: t,
              apiErrors: { username: n, global_name: s },
            } = this.props,
            { subText: i, consentText: a } = this.renderConsentComponents(),
            o =
              (null == e ? void 0 : e.stage_instance) != null ||
              (null == e ? void 0 : e.guild_scheduled_event) != null,
            l = (e) => {
              this.setState({ globalName: e });
            },
            c = this.state.globalName;
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsxs)(A.ZP, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: t,
                children: [
                  this.renderInviteHeader(),
                  o ? (0, r.jsx)("div", { className: en.divider }) : null,
                  (0, r.jsxs)(A.gO, {
                    className: o ? void 0 : es.marginTop40,
                    children: [
                      (0, r.jsx)(h.FormTitle, {
                        error: ea(null != s ? s : n),
                        children: et.Z.Messages.DISPLAY_NAME,
                      }),
                      (0, r.jsx)(h.Tooltip, {
                        text: et.Z.Messages.AUTH_USERNAME_TOOLTIP,
                        position: "right",
                        color: h.Tooltip.Colors.BRAND,
                        children: (e) => {
                          let { onMouseEnter: t, onMouseLeave: i } = e;
                          return (0, r.jsx)(A.II, {
                            autoFocus: !0,
                            className: es.marginBottom8,
                            name: "global_name",
                            value: c,
                            placeholder:
                              et.Z.Messages.FORM_PLACEHOLDER_USERNAME,
                            onChange: l,
                            error: null != n || null != s ? "" : null,
                            onMouseEnter: t,
                            onMouseLeave: i,
                          });
                        },
                      }),
                      (0, r.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: et.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2,
                      }),
                      this.renderInviteButton(),
                      i,
                      a,
                      Q.a
                        ? null
                        : (0, r.jsx)(A.zx, {
                            look: A.zx.Looks.LINK,
                            color: A.zx.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: es.marginTop20,
                            children: et.Z.Messages.ALREADY_HAVE_ACCOUNT,
                          }),
                    ],
                  }),
                ],
              }),
              null != e && o
                ? (0, r.jsx)(A.ZP, {
                    className: es.marginTop20,
                    children: (0, r.jsx)(Z.y, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count,
                    }),
                  })
                : null,
            ],
          });
        }
        renderErrorMessage() {
          let {
            apiErrors: { message: e },
          } = this.props;
          return "string" != typeof e
            ? null
            : (0, r.jsx)(A.i_, {
                className: o()(es.marginTop20, en.errorMessage),
                children: e,
              });
        }
        renderFull(e, t) {
          let {
              email: n,
              username: s,
              globalName: a,
              password: l,
              consent: c,
              parsedDateOfBirth: u,
              globalNameFocused: d,
              emailClientError: _,
              usernameClientError: E,
              passwordClientError: p,
              dateOfBirthClientError: g,
            } = this.state,
            {
              registering: m,
              consentRequired: I,
              isMobileWebInviteRegistration: N,
              uniqueUsernameRegistrationConfig: { suggestions: T },
              authBoxClassName: x,
              apiErrors: {
                email: C,
                username: Z,
                global_name: S,
                password: R,
                date_of_birth: O,
              } = {},
              hasLoggedInAccounts: b,
              registrationCopyExperimentConfig: { hasCopyAboveButton: D },
            } = this.props,
            { subText: M, consentText: j } = this.renderConsentComponents(),
            y = this.renderErrorMessage(),
            G = (0, r.jsx)(h.Tooltip, {
              text: !c && I ? et.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
              children: (e) =>
                (0, r.jsx)("div", {
                  className: es.marginTop20,
                  ...e,
                  children: (0, r.jsx)(A.zx, {
                    type: "submit",
                    submitting: m,
                    disabled: !this.hasConsent() || this.state.isRateLimited,
                    children: et.Z.Messages.CONTINUE,
                  }),
                }),
            }),
            U = async () => {
              this.setState({ usernameFocused: !0 }),
                T &&
                  a.length > 0 &&
                  !P.Z.wasRegistrationSuggestionFetched(a) &&
                  (await L.Z.fetchSuggestionsRegistration(a));
            },
            F =
              null != e
                ? (0, r.jsx)(i.Fragment, { children: e() }, "custom-header")
                : (0, r.jsx)(
                    A.Dx,
                    { children: et.Z.Messages.REGISTER_TITLE },
                    "title",
                  ),
            k = (0, r.jsxs)(A.gO, {
              className: es.marginTop20,
              children: [
                (0, r.jsx)(A.II, {
                  autoFocus: !0,
                  className: es.marginBottom20,
                  label: et.Z.Messages.FORM_LABEL_EMAIL,
                  name: "email",
                  value: n,
                  onChange: (e) =>
                    this.setState({
                      email: e,
                      emailClientError:
                        0 === e.length ? et.Z.Messages.REQUIRED : null,
                    }),
                  error: null != _ ? _ : ea(C),
                  type: "email",
                  setRef: (e) => {
                    this.emailRef = e;
                  },
                  required: !0,
                }),
                (0, r.jsx)(A.II, {
                  label: et.Z.Messages.DISPLAY_NAME,
                  className: es.marginBottom20,
                  name: "global_name",
                  value: a,
                  onChange: (e) => this.setState({ globalName: e }),
                  error: ea(S),
                  maxLength: ee.hy,
                  setRef: (e) => {
                    this.globalNameRef = e;
                  },
                  onFocus: () => this.setState({ globalNameFocused: !0 }),
                  onBlur: () => this.setState({ globalNameFocused: !1 }),
                }),
                (0, r.jsx)(B.Z, {
                  show: d,
                  top: -12,
                  bottom: 20,
                  children: (0, r.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: et.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2,
                  }),
                }),
                (0, r.jsxs)("div", {
                  onBlur: () => this.setState({ usernameFocused: !1 }),
                  onFocus: U,
                  tabIndex: -1,
                  children: [
                    (0, r.jsx)(A.II, {
                      label: et.Z.Messages.FORM_LABEL_USERNAME,
                      className: es.marginBottom20,
                      name: "username",
                      value: s,
                      onChange: (e) => {
                        this.setState({
                          username: e.toLocaleLowerCase(),
                          usernameClientError:
                            0 === e.length ? et.Z.Messages.REQUIRED : null,
                        });
                      },
                      error: null != E ? E : ea(Z),
                      setRef: (e) => {
                        this.usernameRef = e;
                      },
                      required: !0,
                    }),
                    this.renderUsernameValidation(),
                  ],
                }),
                (0, r.jsx)(A.II, {
                  label: et.Z.Messages.FORM_LABEL_PASSWORD,
                  name: "password",
                  value: l,
                  onChange: (e) =>
                    this.setState({
                      password: e,
                      passwordClientError:
                        0 === e.length ? et.Z.Messages.REQUIRED : null,
                    }),
                  error: null != p ? p : ea(R),
                  type: "password",
                  setRef: (e) => {
                    this.passwordRef = e;
                  },
                  required: !0,
                }),
                (0, r.jsx)(f.Z, {
                  label: et.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                  wrapperClassName: es.marginTop20,
                  name: "date_of_birth",
                  onChange: this.handleBirthdayChange,
                  ref: this.dateOfBirthRef,
                  error: null != g ? g : ea(O),
                  value: u,
                  required: !0,
                }),
                D && M,
                (0, r.jsx)(v.Z, {}),
                G,
                y,
                j,
                !D && M,
                Q.a
                  ? null
                  : (0, r.jsx)(A.zx, {
                      look: N ? A.zx.Looks.FILLED : A.zx.Looks.LINK,
                      color: N ? A.zx.Colors.PRIMARY : A.zx.Colors.LINK,
                      onClick: this.handleGotoLogin,
                      className: es.marginTop20,
                      children: et.Z.Messages.ALREADY_HAVE_ACCOUNT,
                    }),
              ],
            });
          return t
            ? (0, r.jsx)(q.Z, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: o()(x, en.horizontalAuthBox),
                children: () => [
                  F,
                  (0, r.jsxs)(
                    "div",
                    {
                      className: en.flex,
                      children: [
                        (0, r.jsx)(A.Dx, {
                          className: en.createAccountTemplateHeader,
                          children: et.Z.Messages.REGISTER_TITLE,
                        }),
                        k,
                      ],
                    },
                    "register-title",
                  ),
                ],
              })
            : (0, r.jsxs)(A.ZP, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: x,
                children: [
                  b && !N
                    ? (0, r.jsx)(A.zx, {
                        onClick: this.handleGotoLogin,
                        look: A.zx.Looks.LINK,
                        color: A.zx.Colors.PRIMARY,
                        className: en.goBackButton,
                        children: (0, r.jsxs)("div", {
                          className: en.content,
                          children: [
                            (0, r.jsx)(h.ChevronSmallLeftIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: en.caret,
                            }),
                            (0, r.jsx)(h.Text, {
                              variant: "text-md/normal",
                              children: et.Z.Messages.AGE_GATE_GO_BACK,
                            }),
                          ],
                        }),
                      })
                    : null,
                  F,
                  k,
                ],
              });
        }
        render() {
          let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
          if (e || this.hasError("date_of_birth")) return (0, r.jsx)(g.Z, {});
          let { invite: n, giftCode: s, guildTemplate: i } = this.props,
            a =
              null != n &&
              null == n.guild &&
              null == n.channel &&
              null != n.inviter;
          return null == n || a || t
            ? null != i
              ? this.renderFull(() => (0, r.jsx)(O.Z, { guildTemplate: i }), !0)
              : null != s
                ? this.renderFull(() => (0, r.jsx)(W.Z, { giftCode: s }))
                : null != n && a && n.state === J.r2o.RESOLVED && !t
                  ? this.renderFull(() =>
                      (0, r.jsx)(Y.Z, { invite: n, isRegister: !0 }),
                    )
                  : this.renderFull()
            : n.state === J.r2o.RESOLVING
              ? this.renderInviteResolving()
              : this.renderInvite();
        }
        constructor(e) {
          var t;
          super(e),
            er(this, "emailRef", void 0),
            er(this, "usernameRef", void 0),
            er(this, "globalNameRef", void 0),
            er(this, "passwordRef", void 0),
            er(this, "dateOfBirthRef", i.createRef()),
            er(this, "_retryTimer", new _.V7()),
            er(this, "handleGotoLogin", (e) => {
              let t;
              let { email: n } = this.state,
                {
                  giftCode: s,
                  guildTemplate: r,
                  invite: i,
                  location: a,
                  onLoginStart: o,
                  redirectTo: c,
                  transitionTo: u,
                  isMobileWebInviteRegistration: d,
                } = this.props;
              if (d) {
                null == o || o(e);
                return;
              }
              let _ = null != a ? (0, l.parse)(a.search) : {};
              null != i
                ? (t = J.Z5c.INVITE_LOGIN(i.code))
                : null != s
                  ? (t = J.Z5c.GIFT_CODE_LOGIN(s.code))
                  : null != r
                    ? (t = J.Z5c.GUILD_TEMPLATE_LOGIN(r.code))
                    : null != c
                      ? ((t = J.Z5c.LOGIN), (_.redirect_to = c))
                      : ((t = J.Z5c.LOGIN), "" !== n && (_ = { email: n })),
                E.Z.loginReset(),
                u(t, { search: (0, l.stringify)(_) }),
                null == o || o(e),
                V.S.dispatch(J.CkL.WAVE_EMPHASIZE);
            }),
            er(this, "handleSubmit", (e) => {
              null == e || e.preventDefault();
              let {
                  email: t,
                  username: n,
                  password: s,
                  parsedDateOfBirth: r,
                } = this.state,
                { invite: i, consentRequired: a } = this.props;
              if (null !== a) {
                if (null == i) {
                  let e = !1;
                  if (
                    (0 === t.length &&
                      (this.setState({
                        emailClientError: et.Z.Messages.REQUIRED,
                      }),
                      (e = !0)),
                    0 === n.length &&
                      (this.setState({
                        usernameClientError: et.Z.Messages.REQUIRED,
                      }),
                      (e = !0)),
                    0 === s.length &&
                      (this.setState({
                        passwordClientError: et.Z.Messages.REQUIRED,
                      }),
                      (e = !0)),
                    null == r &&
                      (this.setState({
                        dateOfBirthClientError: et.Z.Messages.REQUIRED,
                      }),
                      (e = !0)),
                    e)
                  )
                    return;
                }
                this.handleRegister();
              }
            }),
            er(this, "handleBirthdayChange", (e) => {
              this.setState({ parsedDateOfBirth: e }),
                null != e && this.setState({ dateOfBirthClientError: null });
            }),
            er(this, "renderUsernameValidation", () => {
              let {
                  username: e,
                  globalName: t,
                  usernameFocused: n,
                } = this.state,
                {
                  usernameSuggestion: s,
                  uniqueUsernameRegistrationConfig: { livecheckEnabled: i },
                } = this.props;
              return (0, r.jsx)(ec, {
                username: e,
                suggestion: s,
                livecheckEnabled: i,
                globalName: t,
                isUsernameFocused: n,
                onClickSuggestion: () => {
                  null != this.usernameRef && this.usernameRef.focus(),
                    null != s && s.length > 0 && this.setState({ username: s });
                },
              });
            });
          let n = null != e.location ? (0, l.parse)(e.location.search) : {};
          this.state = {
            email: null !== (t = n.email) && void 0 !== t ? t : "",
            username: "",
            globalName: "",
            password: "",
            parsedDateOfBirth: null,
            emailClientError: null,
            usernameClientError: null,
            passwordClientError: null,
            dateOfBirthClientError: null,
            consent: !e.consentRequired,
            consentRequiredProp: e.consentRequired,
            isRateLimited: !1,
            globalNameFocused: !1,
            usernameFocused: !1,
          };
        }
      }
      function el(e) {
        let t = (0, d.cj)([k.Z, F.default, p.Z, M.Z, b.Z], () => ({
            consentRequired: k.Z.getAuthenticationConsentRequired(),
            registering: F.default.getRegisterStatus() === J.$ib.REGISTERING,
            apiErrors: F.default.getErrors(),
            authenticated: F.default.isAuthenticated(),
            isUnderage: p.Z.isUnderageAnonymous(),
            country: M.Z.getCountryCode(),
            hasLoggedInAccounts: b.Z.getHasLoggedInAccounts(),
          })),
          n = (0, y.F4)(),
          s = (0, d.e7)([P.Z], () => P.Z.registrationUsernameSuggestion()),
          [a, o] = i.useState(X.E.FULL);
        return (
          (0, m.Z)(
            {
              type: u.ImpressionTypes.VIEW,
              name: u.ImpressionNames.USER_REGISTRATION,
              properties: {
                impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                step: a,
              },
            },
            {},
            [a],
          ),
          (0, r.jsx)(eo, {
            onChangeStep: (e) => o(e),
            registrationCopyExperimentConfig: N.Z.getCurrentConfig(
              { location: "0ba758_2" },
              { autoTrackExposure: !1 },
            ),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: s,
            ...e,
            ...t,
          })
        );
      }
      function ec(e) {
        let t,
          {
            username: n,
            suggestion: s,
            globalName: i,
            livecheckEnabled: a,
            isUsernameFocused: o,
            onClickSuggestion: l,
          } = e,
          u = (0, G.a)(n, a, !0),
          d = a && n.length > 0;
        return (
          (t = d
            ? (0, c.EQ)(u)
                .with({ type: j.K.ERROR, message: c.P.select() }, (e) =>
                  (0, r.jsx)(h.Text, {
                    className: en.messageNegative,
                    variant: "text-sm/normal",
                    children: e,
                  }),
                )
                .with({ type: j.K.AVAILABLE, message: c.P.select() }, (e) =>
                  (0, r.jsx)(h.Text, {
                    className: en.messagePositive,
                    variant: "text-sm/normal",
                    children: e,
                  }),
                )
                .otherwise(() =>
                  (0, r.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: et.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID,
                  }),
                )
            : null != s && s.length > 0 && i.length > 0
              ? (0, r.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: et.Z.Messages.UU_REGISTER_SUGGESTION.format({
                    suggestion: s,
                    nameOnClick: l,
                  }),
                })
              : (0, r.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: et.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID,
                })),
          (0, r.jsx)(B.Z, {
            show: (d && (null == u ? void 0 : u.type) === j.K.ERROR) || o,
            top: -12,
            bottom: 20,
            children: t,
          })
        );
      }
      er(eo, "defaultProps", {
        giftCodeResolved: !1,
        transitionTo: (e) => n.g.location.assign(e),
      });
    },
    424044: function (e, t, n) {
      n(47120);
      var s = n(735250),
        r = n(470079),
        i = n(442837),
        a = n(481060),
        o = n(893776),
        l = n(232567),
        c = n(129293),
        u = n(388905),
        d = n(353926),
        _ = n(185625),
        h = n(551549),
        E = n(108427),
        p = n(314897),
        g = n(981631),
        f = n(689938),
        m = n(113207);
      i.ZP.initialize();
      t.Z = (e) => {
        let { location: t } = e,
          n = (0, i.e7)([p.default], () => p.default.isAuthenticated()),
          I = (0, i.e7)([d.Z], () => d.Z.hasLoadedExperiments),
          N = (0, h.oK)("RSL - Landing Page"),
          [T, A] = r.useState(!1),
          [x, C] = r.useState(f.Z.Messages.AUTHORIZING),
          [v, Z] = r.useState(!0),
          S = (e) => {
            switch (e) {
              case g.evJ.INVALID_FORM_BODY:
              case g.evJ.DSA_RSL_REPORT_NOT_FOUND:
                C(f.Z.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
                break;
              case g.evJ.DSA_RSL_ALREADY_REQUESTED:
                C(f.Z.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
                break;
              case g.evJ.DSA_RSL_LIMITED_TIME:
                C(f.Z.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
                break;
              case g.evJ.DSA_RSL_REPORT_INELIGIBLE:
                C(f.Z.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
                break;
              default:
                C(f.Z.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR);
            }
          };
        return (
          r.useEffect(() => {
            n
              ? (Z(!0),
                l
                  .k({ withAnalyticsToken: !0 })
                  .then(() => Z(!1))
                  .catch(() => Z(!1)))
              : Z(!1);
          }, [n]),
          r.useEffect(() => {
            !I && !N && o.Z.getExperiments();
          }, [I, N]),
          r.useEffect(() => {
            let e = async (e) => {
              var t, n;
              try {
                let n = null != e ? await (0, _.hs)(e) : void 0;
                null != n
                  ? C(f.Z.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE)
                  : S(null === (t = n.body) || void 0 === t ? void 0 : t.code);
              } catch (e) {
                S(null === (n = e.body) || void 0 === n ? void 0 : n.code);
              } finally {
                A(!1);
              }
            };
            A(!0), e((0, c.Z)(t)), (0, E.e)("report_second_look");
          }, [t]),
          N &&
            !v &&
            (0, s.jsxs)(u.ZP, {
              children: [
                (0, s.jsx)(u.Dx, { className: m.marginBottom8, children: x }),
                T && (0, s.jsx)(a.Spinner, {}),
              ],
            })
        );
      };
    },
    881317: function (e, t, n) {
      n(47120);
      var s = n(735250),
        r = n(470079),
        i = n(990547),
        a = n(442837),
        o = n(481060),
        l = n(893776),
        c = n(232567),
        u = n(388905),
        d = n(353926),
        _ = n(82554),
        h = n(726521),
        E = n(185625),
        p = n(314897),
        g = n(63063),
        f = n(981631),
        m = n(689938),
        I = n(987742),
        N = n(113207);
      a.ZP.initialize();
      let T = (e) => {
        let { title: t, menuType: r } = e,
          a = () => {
            (0, o.openModalLazy)(async () => {
              let { default: e } = await n.e("93288").then(n.bind(n, 396410));
              return (t) =>
                (0, s.jsx)(e, {
                  ...t,
                  onSuccess: l,
                  headerText: m.Z.Messages.ENTER_EMAIL,
                  confirmButtonText: m.Z.Messages.NEXT,
                  confirmButtonColor: o.Button.Colors.BRAND,
                  impressionName: i.ImpressionNames.URF_ENTER_EMAIL,
                });
            });
          },
          l = (e) => {
            let t = async () => {
                await (0, E.yL)(r, e);
              },
              a = async (t) => await (0, E.RV)(r, e, t),
              l = (e) => {
                let t = null == e ? void 0 : e.token;
                r === _.BM.MESSAGE
                  ? (0, h.eE)(t)
                  : r === _.BM.USER && (0, h.JM)(t);
              };
            t(),
              (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e("94566").then(n.bind(n, 965072));
                return (n) =>
                  (0, s.jsx)(e, {
                    ...n,
                    onFormSubmit: a,
                    onResend: t,
                    onSuccess: l,
                    headerText:
                      m.Z.Messages
                        .MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
                    confirmButtonText: m.Z.Messages.VERIFY,
                    confirmButtonColor: o.Button.Colors.BRAND,
                    impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE,
                  });
              });
          };
        return (0, s.jsx)("div", {
          className: I.buttonColumn,
          children: (0, s.jsx)(o.Button, {
            className: N.__invalid_reportButton,
            fullWidth: !0,
            color: o.Button.Colors.BRAND,
            onClick: () => a(),
            children: t,
          }),
        });
      };
      t.Z = () => {
        let [e, t] = r.useState(!0),
          [n, i] = r.useState(!1),
          h = (0, a.e7)([p.default], () => p.default.isAuthenticated()),
          A = (0, a.e7)([d.Z], () => d.Z.hasLoadedExperiments),
          x = () => {
            (0, E.qJ)()
              .then(() => {
                t(!1), i(!0);
              })
              .catch(() => {
                t(!1), i(!1);
              });
          };
        return (
          r.useEffect(() => {
            h
              ? (t(!0),
                c
                  .k({ withAnalyticsToken: !0 })
                  .then(() => x())
                  .catch(() => t(!1)))
              : x();
          }, [h]),
          r.useEffect(() => {
            (async () => {
              !A && (await l.Z.getLocationMetadata(), l.Z.getExperiments());
            })();
          }, [A]),
          e || !A
            ? (0, s.jsx)(u.ZP, { children: (0, s.jsx)(o.Spinner, {}) })
            : n &&
              (0, s.jsxs)(u.ZP, {
                children: [
                  (0, s.jsx)(u.Dx, {
                    className: N.marginBottom8,
                    children: m.Z.Messages.URF_LANDING_PAGE_TITLE,
                  }),
                  (0, s.jsx)(u.DK, {
                    className: N.marginBottom8,
                    children: m.Z.Messages.URF_LANDING_PAGE_SUBTITLE.format({
                      supportURL: g.Z.getArticleURL(
                        f.BhN.COPYRIGHT_AND_IP_POLICY,
                      ),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: I.container,
                    children: [
                      (0, s.jsx)(T, {
                        title:
                          m.Z.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
                        menuType: _.BM.MESSAGE,
                      }),
                      (0, s.jsx)(T, {
                        title:
                          m.Z.Messages
                            .URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
                        menuType: _.BM.USER,
                      }),
                    ],
                  }),
                ],
              })
        );
      };
    },
    886806: function (e, t, n) {
      n(47120);
      var s,
        r = n(735250),
        i = n(470079),
        a = n(120356),
        o = n.n(a),
        l = n(442837),
        c = n(893776),
        u = n(129293),
        d = n(388905),
        _ = n(17894),
        h = n(108427),
        E = n(314897),
        p = n(626135),
        g = n(981631),
        f = n(689938),
        m = n(237810),
        I = n(113207);
      function N(e, t, n) {
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
      l.ZP.initialize();
      class T extends (s = i.PureComponent) {
        componentDidMount() {
          this.handleVerify(), (0, h.e)("verify_email");
        }
        renderVerifyFailed() {
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.Ee, {
                src: n(375673),
                className: o()(m.image, I.marginBottom20),
              }),
              (0, r.jsx)(d.Dx, {
                className: I.marginBottom8,
                children: f.Z.Messages.VERFICATION_EXPIRED,
              }),
              (0, r.jsx)(d.DK, {
                className: I.marginBottom40,
                children: f.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION,
              }),
              (0, r.jsx)(d.zx, {
                onClick: this.handleLogin,
                children: f.Z.Messages._LOGIN,
              }),
            ],
          });
        }
        renderVerifySucceeded() {
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.Ee, {
                src: n(73962),
                className: o()(m.image, I.marginBottom20),
              }),
              (0, r.jsx)(d.Dx, {
                className: I.marginBottom40,
                children: f.Z.Messages.VERIFICATION_VERIFIED,
              }),
              (0, r.jsx)(d.zx, {
                onClick: this.handleOpenApp,
                children: f.Z.Messages.VERIFICATION_OPEN_DISCORD,
              }),
            ],
          });
        }
        renderVerifying() {
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.Ee, {
                src: n(892235),
                className: o()(m.image, I.marginBottom20),
              }),
              (0, r.jsx)(d.Dx, {
                className: I.marginBottom8,
                children: f.Z.Messages.VERIFICATION_VERIFYING,
              }),
              (0, r.jsx)(d.DK, {
                className: I.marginBottom40,
                children: f.Z.Messages.ACTION_MAY_TAKE_A_MOMENT,
              }),
              (0, r.jsx)(d.zx, { submitting: !0, color: d.zx.Colors.PRIMARY }),
            ],
          });
        }
        render() {
          let { verifyFailed: e, verifySucceeded: t } = this.props;
          return e
            ? this.renderVerifyFailed()
            : t
              ? this.renderVerifySucceeded()
              : this.renderVerifying();
        }
        constructor(...e) {
          super(...e),
            N(this, "handleVerify", () => {
              let e = (0, u.Z)(this.props.location);
              null != e && c.Z.verify(e);
            }),
            N(this, "handleLogin", () => {
              let { transitionTo: e } = this.props;
              e(g.Z5c.LOGIN);
            }),
            N(this, "handleOpenApp", () => {
              let { verifyingUserId: e } = this.props;
              p.default.track(g.rMx.VERIFY_ACCOUNT_APP_OPENED, {
                verifying_user_id: e,
              }),
                (0, _.Z)("verify_email");
            });
        }
      }
      N(T, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) }),
        (t.Z = l.ZP.connectStores([E.default], () => ({
          verifyFailed: E.default.didVerifyFail(),
          verifyErrors: E.default.getVerifyErrors(),
          verifySucceeded: E.default.didVerifySucceed(),
          fingerprint: E.default.getFingerprint(),
          verifyingUserId: E.default.getVerifyingUserId(),
        }))(T));
    },
    937154: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var s = n(470079);
      function r() {
        return (
          "undefined" == typeof document ||
          "visible" === document.visibilityState
        );
      }
      function i() {
        let [e, t] = (0, s.useState)(r());
        return (
          (0, s.useEffect)(() => {
            function e() {
              t(r());
            }
            return (
              window.addEventListener("visibilitychange", e),
              () => {
                window.removeEventListener("visibilitychange", e);
              }
            );
          }, [t]),
          e
        );
      }
    },
    126399: function (e, t, n) {
      n(47120);
      var s = n(544891),
        r = n(570140),
        i = n(893776),
        a = n(899742),
        o = n(743142),
        l = n(117240),
        c = n(626135),
        u = n(317770),
        d = n(981631);
      function _(e, t) {
        c.default.track(d.rMx.BROWSER_HANDOFF_SUCCEEDED, {
          authenticated: e,
          handoff_source: t,
        });
      }
      class h extends u.Z {
        _initialize() {
          r.Z.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            r.Z.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
        }
        _terminate() {
          r.Z.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            r.Z.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
        }
        handleHandoff(e) {
          let {
            handoffKey: t,
            handoffToken: n,
            fingerprint: r,
            handoffSource: l,
          } = e;
          null != n
            ? s.tn
                .post({
                  url: d.ANM.HANDOFF_EXCHANGE,
                  body: { key: t, handoff_token: n },
                })
                .then(
                  (e) => {
                    let { body: t } = e;
                    (0, a.Vb)(t.user), i.Z.loginToken(t.token, !1), _(!0, l);
                  },
                  (e) => {
                    if (
                      (null != r && _(!1, l),
                      i.Z.setFingerprint(r),
                      (0, a.lx)(),
                      l === o.F.ROLE_SUBSCRIPTION)
                    ) {
                      var t;
                      c.default.track(d.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason:
                          null !== (t = e.message) && void 0 !== t ? t : e.text,
                        handoff_source: l,
                      });
                    }
                  },
                )
            : null != r
              ? (i.Z.setFingerprint(r), _(!1, l), (0, a.lx)())
              : (i.Z.setFingerprint(r), (0, a.by)());
        }
        constructor(...e) {
          var t, n, s;
          super(...e),
            (t = this),
            (n = "handleEnd"),
            (s = (e) => {
              let { handoffToken: t, fingerprint: n } = e,
                s = l.Z.key;
              null != s && l.Z.isHandoffAvailable()
                ? this.handleHandoff({
                    handoffKey: s,
                    handoffToken: t,
                    fingerprint: n,
                    handoffSource: void 0,
                  })
                : (i.Z.setFingerprint(null), (0, a.by)());
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = s);
        }
      }
      t.Z = new h();
    },
    605782: function (e, t, n) {
      var s = n(735250),
        r = n(470079),
        i = n(266067),
        a = n(215569);
      class o extends r.Component {
        render() {
          let {
              children: e,
              location: t,
              history: n,
              staticContext: o,
              match: l,
              ...c
            } = this.props,
            u = null,
            d = null;
          return (
            r.Children.forEach(e, (e) => {
              if (null == u && r.isValidElement(e)) {
                let { component: s, render: a, ...l } = e.props,
                  c = l.path || l.from;
                if (
                  null !=
                  (u =
                    null != c ? (0, i.LX)(t.pathname, { ...l, path: c }) : null)
                )
                  (l = {
                    ...l,
                    key: c,
                    location: t,
                    match: u,
                    history: n,
                    staticContext: o,
                  }),
                    null != s
                      ? (d = r.createElement(s, l))
                      : null != a && (d = a(l));
              }
            }),
            (0, s.jsx)(a.W, { ...c, children: d })
          );
        }
      }
      t.Z = (0, i.EN)(o);
    },
    771308: function (e, t, n) {
      n.d(t, {
        Av: function () {
          return c;
        },
        hp: function () {
          return d;
        },
        wE: function () {
          return u;
        },
      });
      var s = n(544891),
        r = n(570140),
        i = n(959776),
        a = n(626135),
        o = n(723359),
        l = n(981631);
      function c(e, t) {
        return (
          (0, i.Z)(e, t),
          a.default.track(l.rMx.AGE_GATE_ACTION, {
            source: t,
            action: o.Al.AGE_GATE_SUBMITTED,
          }),
          s.tn
            .patch({
              url: l.ANM.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
            })
            .then((e) => {
              let n = e.body;
              r.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
                a.default.track(l.rMx.AGE_GATE_ACTION, {
                  source: t,
                  action: o.Al.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function u(e) {
        r.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          a.default.track(l.rMx.AGE_GATE_ACTION, {
            source: e,
            action: o.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function d(e) {
        r.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          a.default.track(l.rMx.AGE_GATE_ACTION, {
            source: e,
            action: o.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    899370: function (e, t, n) {
      var s,
        r,
        i,
        a,
        o = n(973361),
        l = n(442837),
        c = n(570140),
        u = n(358085),
        d = n(723359);
      let _ = null,
        h = "underage";
      class E extends (a = l.ZP.Store) {
        isUnderageAnonymous() {
          if (u.isPlatformEmbedded) {
            if (null != _ && _ + d.k0 > Date.now()) return !0;
          } else return null != o.parse(document.cookie)[h];
          return !1;
        }
      }
      (i = "AgeGateStore"),
        (r = "displayName") in (s = E)
          ? Object.defineProperty(s, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[r] = i),
        (t.Z = new E(c.Z, {
          AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
            _ = Date.now();
            document.cookie = "".concat(h, "=1;path=/");
          },
          LOGIN_SUCCESS: function () {
            _ = null;
            document.cookie = "".concat(h, "=1;path=/;max-age=0");
          },
        }));
    },
    224841: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var r = n(481060),
        i = n(388905),
        a = n(703656),
        o = n(63063),
        l = n(981631),
        c = n(689938),
        u = n(634645);
      let d = () => (0, a.uL)(l.Z5c.LOGIN);
      t.Z = (e) => {
        let { authBoxClassName: t, underageMessage: a } = e;
        return (0, s.jsxs)(i.ZP, {
          className: t,
          children: [
            (0, s.jsx)("img", { alt: "", src: n(231443), className: u.img }),
            (0, s.jsx)(i.Dx, {
              className: u.title,
              children: c.Z.Messages.AGE_GATE_UNDERAGE_HEADER,
            }),
            (0, s.jsx)(i.DK, {
              className: u.subtitle,
              children: c.Z.Messages.AGE_GATE_UNDERAGE_BODY.format({
                underageMessage:
                  null != a
                    ? a
                    : c.Z.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                helpURL: o.Z.getArticleURL(l.BhN.AGE_GATE),
              }),
            }),
            (0, s.jsx)(r.Button, {
              fullWidth: !0,
              onClick: d,
              children: c.Z.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN,
            }),
          ],
        });
      };
    },
    13430: function (e, t, n) {
      n(47120), n(653041);
      var s = n(735250),
        r = n(470079),
        i = n(120356),
        a = n.n(i),
        o = n(913527),
        l = n.n(o),
        c = n(481060),
        u = n(285888),
        d = n(689938),
        _ = n(535701);
      let h = l()().localeData().months(),
        E = Array.from(Array(31).keys()).map((e) => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        p = Array.from(Array(12).keys()).map((e) => ({
          value: e + 1,
          label: h[e],
        })),
        g = /[a-zA-Z0-9]/;
      function f(e) {
        let { options: t, selectOption: n, children: i } = e,
          [a, o] = r.useState("");
        r.useEffect(() => {
          if ("" !== a) {
            let e = setTimeout(() => o(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [a, o]);
        let l = r.useCallback(
          (e) => {
            if (g.test(e.key)) {
              let s = "".concat(a).concat(e.key.toLowerCase()),
                r = t.find((e) => e.label.toLowerCase().startsWith(s));
              null != r && n(r.value), o(s);
            }
          },
          [n, o, a, t],
        );
        return (0, s.jsx)("div", { onKeyDown: l, children: i });
      }
      function m() {
        let e = l()().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          n = e.indexOf("M"),
          s = e.indexOf("Y");
        return (
          (-1 === t || -1 === n || -1 === s) && ((t = 0), (n = 1), (s = 2)),
          [
            { index: t, type: "day" },
            { index: n, type: "month" },
            { index: s, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let I = r.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: i,
            onChange: o,
            onPopulated: h,
            error: g,
            autoFocus: I,
            required: N,
          } = e,
          {
            day: T,
            setDay: A,
            month: x,
            setMonth: C,
            year: v,
            setYear: Z,
          } = (function (e) {
            let t = null,
              n = null,
              s = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (s = e.year()));
            let [i, a] = r.useState(t),
              [o, l] = r.useState(n),
              [c, u] = r.useState(s);
            return {
              day: i,
              setDay: a,
              month: o,
              setMonth: l,
              year: c,
              setYear: u,
            };
          })(n),
          S = r.useMemo(
            () =>
              null != T && null != x && null != v
                ? l()("".concat(T, "/").concat(x, "/").concat(v), "DD/MM/YYYY")
                : null,
            [T, x, v],
          );
        r.useEffect(() => {
          o((null == S ? void 0 : S.isValid()) ? S : null);
        }, [S, o]);
        let R = g;
        null != S &&
          !S.isValid() &&
          (R = d.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let O = (function () {
            let e = new Date().getFullYear(),
              t = r.useRef(
                Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                })),
              );
            return (
              r.useEffect(() => {
                t.current = Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }));
              }, [e]),
              t.current
            );
          })(),
          [b, D] = r.useState(I ? 0 : -1),
          M = r.useRef(null),
          L = r.useRef(null),
          P = r.useRef(null),
          j = r.useMemo(m, []),
          y = r.useCallback(() => {
            var e, t, n, s;
            switch (null === (e = j[b]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = M.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = L.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (s = P.current) || void 0 === s || s.focus();
            }
          }, [b, M, L, P, j]);
        r.useEffect(() => {
          setTimeout(y, 500);
        }, []),
          r.useEffect(() => {
            if (b >= j.length) {
              null == h || h();
              return;
            }
            y();
          }, [b, y]);
        let G = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = j[e];
          switch (t) {
            case "day":
              G.push({
                key: "day",
                input: (0, s.jsx)(f, {
                  options: E,
                  selectOption: A,
                  children: (0, s.jsx)(u.Z, {
                    ref: M,
                    className: _.__invalid_inputDay,
                    "aria-label": d.Z.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: u.Z.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.Z.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: E,
                    value: T,
                    onChange: (t) => {
                      let { value: n } = t;
                      A(n), D(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              G.push({
                key: "month",
                input: (0, s.jsx)(f, {
                  options: p,
                  selectOption: C,
                  children: (0, s.jsx)(u.Z, {
                    ref: L,
                    className: _.__invalid_inputMonth,
                    "aria-label": d.Z.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: u.Z.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.Z.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: p,
                    value: x,
                    onChange: (t) => {
                      let { value: n } = t;
                      C(n), D(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              G.push({
                key: "year",
                input: (0, s.jsx)(f, {
                  options: O,
                  selectOption: Z,
                  children: (0, s.jsx)(u.Z, {
                    ref: P,
                    className: _.__invalid_inputYear,
                    "aria-label": d.Z.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: u.Z.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.Z.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: O,
                    value: v,
                    onChange: (t) => {
                      let { value: n } = t;
                      Z(n), D(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, s.jsxs)("fieldset", {
          className: a()(_.container, i),
          children: [
            (0, s.jsx)(c.FormTitle, {
              tag: "legend",
              required: N,
              error: R,
              children: d.Z.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, s.jsx)("div", {
              className: _.inputs,
              children: G.map((e, t) => {
                let { key: n, input: r } = e;
                return (0, s.jsx)(
                  "div",
                  { tabIndex: t + 1, className: _[n], children: r },
                  n,
                );
              }),
            }),
          ],
        });
      });
      t.Z = I;
    },
    267394: function (e, t, n) {
      n.d(t, {
        A: function () {
          return r;
        },
      });
      var s = n(570140);
      function r(e) {
        s.Z.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
      }
    },
    743142: function (e, t, n) {
      n.d(t, {
        F: function () {
          return r;
        },
        L: function () {
          return l;
        },
      });
      var s,
        r,
        i = n(754688),
        a = n(981631),
        o = n(176505);
      function l(e) {
        let t = decodeURIComponent(e),
          n = (0, i.Qj)(t);
        return null != n && n.channelId === o.oC.ROLE_SUBSCRIPTIONS
          ? "role_subscription"
          : t === a.Z5c.SETTINGS(a.oAB.SUBSCRIPTIONS, "role-subscriptions")
            ? "role_subscription_setting"
            : void 0;
      }
      ((s = r || (r = {})).ROLE_SUBSCRIPTION = "role_subscription"),
        (s.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting");
    },
    355142: function (e, t, n) {
      var s, r, i, a;
      n.d(t, {
        E: function () {
          return r;
        },
      }),
        ((i = s || (s = {})).VIEWED = "viewed"),
        (i.SUBMITTED = "submitted"),
        (i.RESEND_CODE = "resend_code"),
        (i.INPUT_ERROR = "input_error"),
        (i.RESPONSE_ERROR = "response_error"),
        (i.SUCCESS = "success"),
        ((a = r || (r = {})).IDENTITY = "identity"),
        (a.DISPLAY_NAME = "display_name"),
        (a.ACCOUNT_INFORMATION = "account_information"),
        (a.FULL = "full"),
        (a.AGE_GATE = "age_gate"),
        (a.INVITE = "invite"),
        (a.SMS_VERIFY = "sms_verify");
    },
    201207: function (e, t, n) {
      var s = n(818083);
      t.Z = (0, s.B)({
        kind: "user",
        id: "2022-04_registration_copy_updates",
        label: "Registration Copy Updates",
        defaultConfig: {
          enableNewCopy: !1,
          hasCopyAboveButton: !1,
          hasProminentCopy: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Continue / Copy Above Button / High Prominence Copy",
            config: {
              enableNewCopy: !0,
              hasCopyAboveButton: !0,
              hasProminentCopy: !0,
            },
          },
          {
            id: 2,
            label: "Continue / Copy Below Button / High Prominence Copy",
            config: {
              enableNewCopy: !0,
              hasCopyAboveButton: !1,
              hasProminentCopy: !0,
            },
          },
          {
            id: 3,
            label: "Continue / Copy Above Button / Normal Prominence Copy",
            config: {
              enableNewCopy: !0,
              hasCopyAboveButton: !0,
              hasProminentCopy: !1,
            },
          },
        ],
      });
    },
    959776: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(913527),
        r = n.n(s),
        i = n(626135),
        a = n(981631);
      function o(e, t) {
        i.default.track(a.rMx.AGE_GATE_SUBMITTED, {
          dob: 18 > r()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    481230: function (e, t, n) {
      n.d(t, {
        R$: function () {
          return g;
        },
        ZP: function () {
          return p;
        },
      });
      var s = n(913527),
        r = n.n(s),
        i = n(990547),
        a = n(570140),
        o = n(479531),
        l = n(771308),
        c = n(314897),
        u = n(626135),
        d = n(573261),
        _ = n(959776),
        h = n(981631),
        E = n(723359);
      function p(e) {
        let { invite: t = null, giftCodeSKUId: n = null, ...s } = e;
        return g({ ...s, invite: t, giftCodeSKUId: n });
      }
      function g(e) {
        let {
          email: t,
          phoneToken: n,
          username: s,
          globalName: p,
          consent: g,
          password: f,
          guildTemplateCode: m,
          birthday: I,
          invite: N = null,
          giftCodeSKUId: T = null,
          multiStep: A = !1,
          promoEmailConsent: x = null,
          usedUsernameSuggestion: C = null,
        } = e;
        return (
          a.Z.dispatch({ type: "REGISTER", birthday: A ? I : null }),
          null != I &&
            ((0, _.Z)(I, h.jXE.REGISTER),
            u.default.track(h.rMx.AGE_GATE_ACTION, {
              source: E.L0.REGISTER,
              action: E.Al.AGE_GATE_SUBMITTED,
            }),
            !(function (e) {
              let t;
              let n = r()().diff(e, "years");
              !(n < 13) &&
                ((t =
                  n >= 13 && n <= 17
                    ? "13-17"
                    : n >= 18 && n <= 22
                      ? "18-22"
                      : "23+"),
                u.default.track(h.rMx.USER_AGE_SUBMITTED, { age_bucket: t }));
            })(I)),
          d.Z.post({
            url: h.ANM.REGISTER,
            body: {
              fingerprint: c.default.getFingerprint(),
              email: t,
              username: s,
              global_name: p,
              password: f,
              invite: N,
              consent: g,
              phone_token: n,
              date_of_birth: null == I ? void 0 : I.format("YYYY-MM-DD"),
              gift_code_sku_id: T,
              guild_template_code: m,
              promotional_email_opt_in: null == x ? void 0 : x.checked,
            },
            trackedActionData: {
              event: i.NetworkActionNames.USER_REGISTER,
              properties: {
                invite_code: N,
                used_username_suggestion: C,
                promotional_email_opt_in: null == x ? void 0 : x.checked,
                promotional_email_pre_checked:
                  null == x ? void 0 : x.preChecked,
                was_unique_username: !0,
              },
            },
          }).then(
            (e) => {
              a.Z.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                u.default.track(h.rMx.AGE_GATE_ACTION, {
                  source: E.L0.REGISTER,
                  action: E.Al.AGE_GATE_SUCCESS,
                });
            },
            (e) => {
              let t = new o.Z(e);
              throw (
                (a.Z.dispatch({ type: "REGISTER_FAILURE", error: t }),
                null != t.getFieldErrors("date_of_birth") &&
                  l.wE(E.L0.REGISTER),
                u.default.track(h.rMx.REGISTER_SUBMIT_ERRORED, {
                  is_unique_username_registration: !0,
                  email_error_reason: t.getFirstFieldErrorMessage("email"),
                  phone_error_reason: t.getFirstFieldErrorMessage("phone"),
                  password_error_reason:
                    t.getFirstFieldErrorMessage("password"),
                  username_error_reason:
                    t.getFirstFieldErrorMessage("username"),
                  global_name_error_reason:
                    t.getFirstFieldErrorMessage("global_name"),
                  date_of_birth_error_reason:
                    t.getFirstFieldErrorMessage("date_of_birth"),
                }),
                e)
              );
            },
          )
        );
      }
    },
    853268: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = n(735250);
      n(470079);
      var r = n(120356),
        i = n.n(r),
        a = n(481060),
        o = n(600164),
        l = n(388905),
        c = n(691134),
        u = n(113207);
      function d(e) {
        let {
          value: t,
          onChange: n,
          subText: r,
          muted: d,
          marginTopStyle: _,
        } = e;
        return (0, s.jsx)(o.Z, {
          className: null != _ ? _ : u.marginTop20,
          align: o.Z.Align.CENTER,
          children: (0, s.jsx)(a.Checkbox, {
            value: t,
            type: a.Checkbox.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, s.jsx)(l.i_, {
              className: i()({ [c.subText]: !d }),
              children: r,
            }),
          }),
        });
      }
    },
    761305: function (e, t, n) {
      n(47120);
      var s,
        r = n(735250),
        i = n(470079),
        a = n(593473),
        o = n(442837),
        l = n(544891),
        c = n(108427),
        u = n(601964),
        d = n(896797),
        _ = n(129293),
        h = n(388905),
        E = n(981631),
        p = n(689938),
        g = n(113207);
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
      o.ZP.initialize();
      class m extends (s = i.PureComponent) {
        componentDidMount() {
          let e = (0, _.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
          l.tn
            .post({
              url: E.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
              body: { token: e, pixel_uuid: t.hash, guild_id: t.guild_id },
              oldFormErrors: !0,
            })
            .then(
              (e) => {
                let {
                    body: { guild: t },
                  } = e,
                  n = new u.ZP(t);
                this.setState({ success: !0, busy: !1, guild: n });
              },
              () => this.setState({ success: !1, busy: !1 }),
            ),
            (0, c.e)("disable_server_highlight_notifications");
        }
        renderBusy() {
          return (0, r.jsx)(h.ZP, { children: (0, r.jsx)(h.Hh, {}) });
        }
        renderSuccess() {
          let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
          return (0, r.jsxs)(h.ZP, {
            children: [
              (0, r.jsx)(h.Dx, {
                className: g.marginBottom8,
                children: p.Z.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_HEADER,
              }),
              (0, r.jsx)(h.DK, {
                children: p.Z.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_BODY.format(
                  { guildName: n.name },
                ),
              }),
              (0, r.jsx)(h.zx, {
                className: g.marginTop40,
                onClick: () => t(e),
                children: p.Z.Messages.CONTINUE_TO_WEBAPP,
              }),
              (0, r.jsx)(h.zx, {
                className: g.marginTop8,
                color: h.zx.Colors.LINK,
                look: h.zx.Looks.LINK,
                onClick: () => {
                  t(E.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                },
                children: p.Z.Messages.SERVER_HIGHLIGHT_MANAGE_SETTINGS,
              }),
            ],
          });
        }
        renderError() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, r.jsxs)(h.ZP, {
            children: [
              (0, r.jsx)(h.Ee, { src: n(105020), className: g.marginBottom20 }),
              (0, r.jsx)(h.Dx, {
                className: g.marginBottom8,
                children:
                  p.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER,
              }),
              (0, r.jsx)(h.DK, {
                children:
                  p.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY,
              }),
              (0, r.jsx)(h.zx, {
                className: g.marginTop40,
                onClick: () => t(e),
                children: p.Z.Messages.CONTINUE_TO_WEBAPP,
              }),
            ],
          });
        }
        render() {
          let { busy: e, success: t } = this.state;
          return e
            ? this.renderBusy()
            : t
              ? this.renderSuccess()
              : this.renderError();
        }
        constructor(...e) {
          super(...e), f(this, "state", { busy: !0, success: !1, guild: null });
        }
      }
      f(m, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) }),
        (t.Z = o.ZP.connectStores([d.Z], () => ({
          defaultRoute: d.Z.defaultRoute,
        }))(m));
    },
    639946: function (e, t, n) {
      n.d(t, {
        r: function () {
          return c;
        },
      });
      var s = n(735250);
      n(470079);
      var r = n(481060),
        i = n(471445),
        a = n(742593),
        o = n(577491);
      function l(e) {
        let { channel: t } = e,
          n = (0, i.Th)(t.type);
        return (0, s.jsxs)("div", {
          className: o.channelInfoContainer,
          children: [
            null != n
              ? (0, s.jsx)(n, {
                  color: "currentColor",
                  size: "custom",
                  width: 20,
                  height: 20,
                })
              : null,
            (0, s.jsx)(r.Text, {
              className: o.channelInfoText,
              color: "none",
              variant: "text-sm/semibold",
              children: t.name,
            }),
          ],
        });
      }
      function c(e) {
        let { channel: t, guildScheduledEvent: n } = e;
        return (0, s.jsxs)("div", {
          className: o.container,
          children: [
            (0, s.jsx)(a.HZ, {
              className: o.statusContainer,
              guildId: n.guild_id,
              guildEvent: n,
              eventPreview: n,
            }),
            (0, s.jsx)(a.Rf, {
              name: n.name,
              description: n.description,
              guildId: n.guild_id,
            }),
            null != t && n.channel_id === t.id
              ? (0, s.jsx)(l, { channel: t })
              : null,
          ],
        });
      }
    },
    698177: function (e, t, n) {
      n(47120);
      var s = n(735250),
        r = n(470079),
        i = n(120356),
        a = n.n(i),
        o = n(442837),
        l = n(481060),
        c = n(144114),
        u = n(742458),
        d = n(541692),
        _ = n(952802),
        h = n(388905),
        E = n(815660),
        p = n(689938),
        g = n(739017),
        f = n(113207);
      t.Z = () => {
        let [e, t] = r.useState(""),
          [i, m] = r.useState(""),
          [I, N] = r.useState(!1),
          [T, A] = r.useState(!1),
          [x, C] = r.useState(null),
          [v, Z] = r.useState(null),
          S = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
          R = S.code.split(" ")[0],
          O = async () => {
            try {
              await c.Z.resendCode(e);
            } catch (e) {
              Z(e.body.message);
            }
          },
          b = async () => {
            N(!0);
            try {
              let { token: t } = await c.Z.verifyPhone(R + e, i);
              C(null), Z(null), A(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
              e.body.message
                ? (C(null), Z(e.body.message))
                : (C(e.body.phone), Z(e.body.code));
            } finally {
              N(!1);
            }
          },
          D = (0, s.jsxs)(h.ZP, {
            children: [
              (0, s.jsx)(h.Ee, { src: n(292824) }),
              (0, s.jsxs)(h.Dx, {
                className: a()(
                  f.marginTop20,
                  g.flex,
                  g.justifyCenter,
                  g.alignCenter,
                ),
                children: [
                  p.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED,
                  (0, s.jsx)(l.CircleCheckIcon, {
                    size: "md",
                    color: "currentColor",
                    className: f.marginLeft8,
                  }),
                ],
              }),
            ],
          });
        return T
          ? D
          : (0, s.jsxs)(h.ZP, {
              children: [
                (0, s.jsx)(h.Dx, { children: p.Z.Messages.ENTER_CODE }),
                (0, s.jsx)(h.DK, {
                  className: f.marginTop8,
                  children: p.Z.Messages.VERIFY_PHONE_FOR_SUPPORT,
                }),
                (0, s.jsxs)(h.gO, {
                  className: f.marginTop20,
                  children: [
                    (0, s.jsx)(_.Z, {
                      label: p.Z.Messages.FORM_LABEL_PHONE_NUMBER,
                      alpha2: S.alpha2,
                      countryCode: R,
                      value: e,
                      autoComplete: "off",
                      spellCheck: "false",
                      onChange: t,
                      forceMode: u.Nz.PHONE,
                      error: x,
                    }),
                    (0, s.jsx)(h.II, {
                      className: f.marginTop20,
                      label: p.Z.Messages.CONFIRMATION_CODE,
                      value: i,
                      onChange: m,
                      maxLength: E.z,
                      error: v,
                    }),
                    (0, s.jsx)(h.zx, {
                      size: h.zx.Sizes.SMALL,
                      look: h.zx.Looks.LINK,
                      onClick: O,
                      children: p.Z.Messages.RESEND_CODE,
                    }),
                    (0, s.jsx)(h.zx, {
                      className: f.marginTop20,
                      onClick: b,
                      submitting: I,
                      children: p.Z.Messages.DONE,
                    }),
                  ],
                }),
              ],
            });
      };
    },
    616952: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(735250);
      n(470079);
      var r = n(882037),
        i = n(853268),
        a = n(689938),
        o = n(113207);
      function l() {
        let { required: e, checked: t } = (0, r.MD)();
        return e
          ? (0, s.jsx)(i.Z, {
              value: t,
              subText: a.Z.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
              onChange: r.ZJ,
              marginTopStyle: o.marginTop8,
              muted: !0,
            })
          : null;
      }
    },
    17894: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var s = n(525654),
        r = n.n(s),
        i = n(39612),
        a = n(271579),
        o = n(756647),
        l = n(232567),
        c = n(703656),
        u = n(314897),
        d = n(896797),
        _ = n(626135),
        h = n(954824),
        E = n(981631);
      async function p(e) {
        var t, n;
        let s = null === (t = r().os) || void 0 === t ? void 0 : t.family;
        if ("Android" === s || "iOS" === s) {
          let t =
              null !== (n = u.default.getFingerprint()) && void 0 !== n
                ? n
                : u.default.getId(),
            s = (0, a.WS)();
          if (null == t && u.default.isAuthenticated())
            try {
              await (0, l.k)(), (t = u.default.getId());
            } catch {}
          return (0, a.ZP)((0, i.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: s,
          });
        }
        return "discord://";
      }
      async function g(e) {
        let t = await p(e),
          n = (0, a.zS)(t);
        null != n &&
          _.default.track(E.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          h.Z.launch(t, (e) => {
            !e && (0, c.dL)(d.Z.fallbackRoute);
          });
      }
    },
    362762: function (e, t, n) {
      var s,
        r,
        i,
        a,
        o = n(442837),
        l = n(570140),
        c = n(981631);
      let u = {};
      class d extends (a = o.ZP.Store) {
        getState(e) {
          return u[e];
        }
      }
      (i = "CodedLinkNativeAppStateStore"),
        (r = "displayName") in (s = d)
          ? Object.defineProperty(s, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[r] = i),
        (t.Z = new d(l.Z, {
          NATIVE_APP_MODAL_OPENING: function (e) {
            let { code: t } = e;
            u[t] = c.kEZ.OPENING;
          },
          NATIVE_APP_MODAL_OPENED: function (e) {
            let { code: t } = e;
            u[t] = c.kEZ.OPEN;
          },
          NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
            let { code: t } = e;
            u[t] = c.kEZ.OPEN_FAIL;
          },
        }));
    },
    692483: function (e, t, n) {
      n.d(t, {
        K: function () {
          return r;
        },
      });
      var s = n(998502);
      async function r(e) {
        try {
          return (await s.ZP.getSetting("USERNAME_PREFIX", "")) + e;
        } catch (e) {}
        return e;
      }
    },
    198993: function (e, t, n) {
      n.d(t, {
        c2: function () {
          return p;
        },
        cK: function () {
          return r;
        },
      });
      var s,
        r,
        i,
        a,
        o = n(735250),
        l = n(470079),
        c = n(789877),
        u = n(458221);
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
      ((s = r || (r = {})).SIZE_40 = "SIZE_40"), (s.SIZE_60 = "SIZE_60");
      let _ = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        h = n(515695);
      class E extends (i = l.PureComponent) {
        render() {
          let { className: e, text: t, ...n } = this.props;
          return (0, o.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: n.size,
              height: n.size,
              backgroundColor: n.bgColor,
            },
            className: e,
            children: (0, o.jsx)(c.default, { value: t, level: "M", ...n }),
          });
        }
      }
      d(E, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class p extends (a = l.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            t = _[null != e ? e : "SIZE_40"];
          return (0, o.jsxs)("div", {
            className: u.qrCodeContainer,
            children: [
              (0, o.jsx)(E, { ...this.props }),
              (0, o.jsx)("div", {
                className: u.qrCodeOverlay,
                children: (0, o.jsx)("img", {
                  className: u[t],
                  src: h,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      d(p, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (t.ZP = E);
    },
    285888: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
        v: function () {
          return g;
        },
      }),
        n(47120);
      var s,
        r,
        i,
        a = n(735250),
        o = n(470079),
        l = n(120356),
        c = n.n(l),
        u = n(536640),
        d = n(481060),
        _ = n(981631),
        h = n(689938),
        E = n(404934);
      function p(e, t, n) {
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
      ((i = s || (s = {})).TOP = "top"), (i.BOTTOM = "bottom");
      let g = {
        container: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: n, menuIsOpen: s } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: s ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: n ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: n ? 0.5 : 1,
          };
        },
        input: (e) => ({ ...e, color: "var(--interactive-normal)" }),
        menu: (e) => ({
          ...e,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: n ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: n ? void 0 : "pointer",
            opacity: n ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: n ? 0.3 : 1,
            },
          };
        },
        menuList: (e) => ({
          ...e,
          padding: 0,
          "&::-webkit-scrollbar": { width: 8, padding: "0px 2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--scrollbar-thin-thumb)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        }),
        option: (e, t) => {
          let { isSelected: n, isFocused: s } = t;
          return {
            ...e,
            ...(n
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : s
                ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)",
                  }),
            cursor: "pointer",
            display: "flex",
            padding: 12,
            alignItems: "center",
            minHeight: 40,
            "&:active": {
              backgroundColor: "var(--background-modifier-selected)",
              color: "var(--interactive-active)",
            },
          };
        },
        placeholder: (e) => ({ ...e, color: "var(--text-muted)" }),
      };
      class f extends (r = o.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: n,
              error: s,
              valueRenderer: r,
              optionRenderer: i,
              multiValueRenderer: o,
              options: l,
              value: _,
              autofocus: p,
              disabled: f,
              clearable: m,
              searchable: I,
              styleOverrides: N,
              isMulti: T,
              placeholder: A,
              filterOption: x,
              closeMenuOnSelect: C = !0,
              ...v
            } = this.props,
            Z = { ...v };
          null != p && (Z.autoFocus = p),
            null != f && (Z.isDisabled = f),
            null != m && (Z.isClearable = m),
            null != I && (Z.isSearchable = I);
          let S = { IndicatorSeparator: () => null };
          null != i &&
            (S.Option = (e) =>
              (0, a.jsx)(u.wx.Option, { ...e, children: i(e.data) })),
            null != r &&
              (S.SingleValue = (e) =>
                (0, a.jsx)(u.wx.SingleValue, { ...e, children: r(e.data) })),
            null != o && (S.MultiValue = (e) => o(e.data));
          if (T && Array.isArray(_)) {
            let t = {};
            l.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = _.map((e) => t[String(e)]));
          } else e = null != _ ? l.find((e) => e.value === _) : null;
          return (0, a.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: c()(E.select, t, { [E.error]: null != s }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(u.ZP, {
                  ...Z,
                  className: n,
                  ref: this._selectRef,
                  isMulti: T,
                  components: S,
                  options: l,
                  styles: null != N ? N : g,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: C,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != A ? A : h.Z.Messages.SELECT,
                  noOptionsMessage: () => h.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: x,
                }),
                null != s
                  ? (0, a.jsx)("div", {
                      className: E.errorMessage,
                      children: s,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            p(this, "_selectRef", o.createRef()),
            p(this, "_containerRef", o.createRef()),
            p(this, "state", { isFocused: !1, isOpen: !1 }),
            p(this, "handleFocus", (e) => {
              var t, n;
              this.setState({ isFocused: !0 }),
                null === (t = (n = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            p(this, "handleBlur", (e) => {
              var t, n;
              this.setState({ isFocused: !1 }),
                null === (t = (n = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            p(this, "handleKeyDown", (e) => {
              e.which === _.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            p(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            p(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      p(f, "MenuPlacements", s);
    },
    390072: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = n(735250),
        r = n(470079),
        i = n(481060),
        a = n(725436),
        o = n(11868),
        l = n(217804),
        c = n(765305),
        u = n(448144);
      function d(e) {
        let { guildScheduledEvent: t, channel: n, onClose: d } = e,
          _ = t.entity_type === c.WX.EXTERNAL,
          h = r.useCallback((e) => (0, o.Qt)(t, d)(e), [t, d]),
          E = (0, l.u)(t, n);
        if (null == E) return null;
        let { IconComponent: p, locationName: g } = E,
          f = (0, s.jsxs)(s.Fragment, {
            children: [
              null != p &&
                (0, s.jsx)(p, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  className: u.channelIcon,
                }),
              (0, s.jsx)(i.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: u.locationText,
                children: (0, a.m)(g, !0),
              }),
            ],
          });
        return (0, s.jsx)("div", {
          className: u.row,
          children:
            null != h
              ? (0, s.jsx)(i.Clickable, {
                  className: _ ? u.externalLocation : u.channelLocation,
                  onClick: h,
                  children: f,
                })
              : f,
        });
      }
    },
    844800: function (e, t, n) {
      var s,
        r,
        i,
        a,
        o = n(442837),
        l = n(570140);
      let c = !1,
        u = null,
        d = null;
      class _ extends (a = o.ZP.Store) {
        getState() {
          return { verifySuccess: c, verifyErrors: u, redirectGuildId: d };
        }
      }
      (i = "HubEmailVerificationStore"),
        (r = "displayName") in (s = _)
          ? Object.defineProperty(s, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[r] = i),
        (t.Z = new _(l.Z, {
          HUB_VERIFY_EMAIL_SUCCESS: function (e) {
            let { guildId: t } = e;
            (c = !0), (u = null), (d = t);
          },
          HUB_VERIFY_EMAIL_FAILURE: function (e) {
            let { errors: t } = e;
            (c = !1), (u = t);
          },
        }));
    },
    580497: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var s = n(512722),
        r = n.n(s),
        i = n(525654),
        a = n.n(i),
        o = n(39612),
        l = n(271579),
        c = n(756647),
        u = n(703656),
        d = n(314897),
        _ = n(896797),
        h = n(626135),
        E = n(954824),
        p = n(981631);
      function g(e) {
        let t = (function (e) {
            var t;
            let n = null === (t = a().os) || void 0 === t ? void 0 : t.family;
            if ("Android" === n || "iOS" === n) {
              let t = d.default.getFingerprint(),
                n = (0, l.WS)();
              return (
                r()(null != e, "generateAppPath: guildId cannot be null"),
                (0, l.ZP)((0, o.z0)(e), {
                  utmSource: "verify_hub_email",
                  fingerprint: t,
                  attemptId: n,
                })
              );
            }
            return "discord://";
          })(e),
          n = (0, l.zS)(t);
        null != n &&
          h.default.track(p.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, c.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          E.Z.launch(t, (e) => {
            !e && (0, u.dL)(_.Z.fallbackRoute);
          });
      }
    },
    637776: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(47120);
      var s = n(735250),
        r = n(470079),
        i = n(442837),
        a = n(231239),
        o = n(129293),
        l = n(388905),
        c = n(703656),
        u = n(108427),
        d = n(844800),
        _ = n(580497),
        h = n(981631),
        E = n(689938),
        p = n(71188);
      function g(e) {
        let { location: t } = e,
          [g, f] = r.useState(!1),
          {
            verifySuccess: m,
            verifyErrors: I,
            redirectGuildId: N,
          } = (0, i.e7)([d.Z], () => d.Z.getState());
        r.useEffect(() => {
          let e = (0, o.Z)(t);
          a.Z.verify(e), (0, u.e)("verify_hub_email");
        }, [t]);
        let T = () => {
          (0, _.Z)(N), f(!0);
        };
        return g
          ? (0, s.jsxs)(l.ZP, {
              children: [
                (0, s.jsx)(l.Dx, {
                  className: p.title,
                  children: E.Z.Messages.APP_OPENED_TITLE,
                }),
                (0, s.jsx)(l.DK, {
                  className: p.subtitle,
                  children: E.Z.Messages.APP_OPENED_BODY,
                }),
                (0, s.jsx)(l.zx, {
                  className: p.spacedButton,
                  onClick: () => (0, c.uL)(h.Z5c.CHANNEL(N)),
                  children: E.Z.Messages.CONTINUE_TO_WEBAPP,
                }),
              ],
            })
          : m
            ? (0, s.jsxs)(l.ZP, {
                children: [
                  (0, s.jsx)(l.Ee, { className: p.image, src: n(73962) }),
                  (0, s.jsx)(l.Dx, {
                    className: p.title,
                    children: E.Z.Messages.VERIFICATION_VERIFIED,
                  }),
                  (0, s.jsx)(l.zx, {
                    onClick: T,
                    children: E.Z.Messages.VERIFICATION_OPEN_DISCORD,
                  }),
                ],
              })
            : null != I
              ? (0, s.jsxs)(l.ZP, {
                  children: [
                    (0, s.jsx)(l.Ee, { className: p.image, src: n(375673) }),
                    (0, s.jsx)(l.Dx, {
                      className: p.title,
                      children: E.Z.Messages.VERFICATION_EXPIRED,
                    }),
                    (0, s.jsx)(l.DK, {
                      className: p.subtitle,
                      children:
                        E.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION,
                    }),
                    (0, s.jsx)(l.zx, {
                      onClick: T,
                      children: E.Z.Messages.VERIFICATION_OPEN_DISCORD,
                    }),
                  ],
                })
              : (0, s.jsxs)(l.ZP, {
                  children: [
                    (0, s.jsx)(l.Ee, { className: p.image, src: n(892235) }),
                    (0, s.jsx)(l.Dx, {
                      className: p.title,
                      children: E.Z.Messages.VERIFICATION_VERIFYING,
                    }),
                    (0, s.jsx)(l.DK, {
                      className: p.subtitle,
                      children: E.Z.Messages.ACTION_MAY_TAKE_A_MOMENT,
                    }),
                    (0, s.jsx)(l.zx, {
                      submitting: !0,
                      color: l.zx.Colors.PRIMARY,
                    }),
                  ],
                });
      }
      i.ZP.initialize();
    },
    551549: function (e, t, n) {
      n.d(t, {
        oK: function () {
          return r;
        },
      });
      let s = (0, n(818083).B)({
        kind: "user",
        id: "2023-09_iar_dsa_webform",
        label: "Safety Experience Unauthenticated Report Form",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "EU user", config: { enabled: !0 } },
          { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
        ],
      });
      function r(e) {
        return s.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    230224: function (e, t, n) {
      n.d(t, {
        GB: function () {
          return R;
        },
        JI: function () {
          return Z;
        },
        UM: function () {
          return D;
        },
        V6: function () {
          return O;
        },
        WT: function () {
          return A;
        },
        X7: function () {
          return x;
        },
        jq: function () {
          return b;
        },
        mx: function () {
          return I;
        },
      }),
        n(411104);
      var s = n(735250),
        r = n(470079),
        i = n(120356),
        a = n.n(i),
        o = n(481060),
        l = n(388905),
        c = n(112831),
        u = n(925329),
        d = n(372769),
        _ = n(768581),
        h = n(51144),
        E = n(245335),
        p = n(981631),
        g = n(888592),
        f = n(689938),
        m = n(788170);
      let I = 100,
        N = (e) => {
          var t, n;
          let s = {
            onlineCount:
              null !== (t = e.approximate_presence_count) && void 0 !== t
                ? t
                : 0,
            memberCount:
              null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0,
          };
          return 0 === s.memberCount && 0 === s.memberCount ? null : s;
        },
        T = (e) => e.target_type === E.Iq.STREAM && null != e.target_user,
        A = (e) => {
          var t;
          return (
            (null === (t = e.channel) || void 0 === t ? void 0 : t.type) ===
            p.d4z.GROUP_DM
          );
        },
        x = (e) => null == e.channel && null == e.guild && null != e.inviter,
        C = (e) => {
          var t;
          let n = N(e);
          return (
            (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t
              ? t
              : 0) > I
          );
        },
        v = (e) => e.state === p.r2o.ACCEPTED,
        Z = (e) => {
          let { guild_scheduled_event: t } = e;
          return null != t || !1;
        },
        S = (e) => !Z(e) && (!!x(e) || (null != e.inviter && !v(e) && !C(e))),
        R = (e) => {
          let { guild: t, user: n, application: r } = e;
          if (null != r)
            return (0, s.jsx)(u.Z, {
              className: m.appIcon,
              game: r,
              size: m.appIconSize,
            });
          if (null != n)
            return (0, s.jsx)(l.qE, {
              src: n.getAvatarURL(void 0, 100),
              size: o.AvatarSizes.DEPRECATED_SIZE_100,
              className: m.avatar,
            });
          if (null != t)
            return (0, s.jsx)(l.Vj, {
              guild: t,
              size: l.Vj.Sizes.LARGER,
              className: m.guildIcon,
              animate: !0,
            });
          else return null;
        };
      function O(e) {
        var t;
        let { invite: n, textClassName: r, className: i } = e,
          o = N(n);
        return null == o ||
          S(n) ||
          (null == n
            ? void 0
            : null === (t = n.guild) || void 0 === t
              ? void 0
              : t.id) === g.fQ
          ? null
          : (0, s.jsx)(l.EJ, {
              className: a()(m.activityCount, i),
              online: o.onlineCount,
              total: o.memberCount,
              textClassName: r,
              flat: !0,
            });
      }
      function b(e) {
        let { invite: t, showBigUserIcon: n } = e,
          i = r.useMemo(
            () =>
              n
                ? null
                : T(t) && null != t.target_user
                  ? _.ZP.getUserAvatarURL(t.target_user)
                  : S(t) && null != t.inviter
                    ? _.ZP.getUserAvatarURL(t.inviter)
                    : null,
            [t, n],
          ),
          a = f.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
        if (A(t)) {
          var c, u;
          a =
            (null === (c = t.channel) || void 0 === c ? void 0 : c.name) !=
              null &&
            (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) !=
              null
              ? f.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format(
                  { username: t.inviter.username },
                )
              : f.Z.Messages
                  .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM;
        } else
          T(t) && null != t.target_user
            ? (a = f.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                username: t.target_user.username,
              }))
            : v(t)
              ? (a = f.Z.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF)
              : S(t) &&
                null != t.inviter &&
                (a =
                  f.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format(
                    { username: h.ZP.getFormattedName(t.inviter) },
                  ));
        return (0, s.jsxs)("div", {
          className: m.inviteJoinContainer,
          children: [
            null != i &&
              (0, s.jsx)("div", {
                className: m.inviterIconWrapper,
                children: (0, s.jsx)(l.qE, {
                  src: i,
                  size: o.AvatarSizes.SIZE_24,
                }),
              }),
            (0, s.jsx)(l.DK, {
              className: m.__invalid_inviteJoinSubTitle,
              children: a,
            }),
          ],
        });
      }
      function D(e) {
        let t,
          n,
          r,
          {
            user: i,
            guild: a,
            channel: u,
            application: _,
            showBigUserIcon: E,
          } = e;
        if (null != a)
          E &&
            null == _ &&
            (t = (0, s.jsx)(l.Vj, { guild: a, size: l.Vj.Sizes.SMALL })),
            (n = a.name),
            null != _ &&
              ((n = _.name),
              (r = (0, s.jsxs)("div", {
                className: m.inviteJoinContainer,
                children: [
                  (0, s.jsx)(l.DK, {
                    className: m.appIn,
                    children: f.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN,
                  }),
                  (0, s.jsxs)("div", {
                    className: m.guildContainer,
                    children: [
                      (0, s.jsx)(l.Vj, { guild: a, size: l.Vj.Sizes.SMALL }),
                      (0, s.jsx)(c.Z, {
                        className: m.appGuildName,
                        color: c.Z.Colors.CUSTOM,
                        tag: "span",
                        size: c.Z.Sizes.SIZE_24,
                        children: a.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != u) {
          if (null == i) throw Error("no inviter in group DM invite");
          let e = h.ZP.getFormattedName(i);
          null != u.name && "" !== u.name
            ? ((n = u.name),
              null != u.icon &&
                (t = (0, s.jsx)(l.MC, {
                  channel: u,
                  size: o.AvatarSizes.SIZE_32,
                })))
            : (n = e);
        } else if (null != i) {
          let e = h.ZP.getFormattedName(i);
          (n = f.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format(
            { username: e },
          )),
            (r = (0, s.jsx)(l.DK, {
              className: m.directInviteSubTitle,
              children:
                f.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                  username: e,
                }),
            }));
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(l.Dx, {
              className: m.title,
              children: [
                null != a
                  ? (0, s.jsx)(d.Z, {
                      guild: a,
                      className: m.guildBadge,
                      tooltipPosition: "left",
                    })
                  : null,
                t,
                n,
              ],
            }),
            r,
          ],
        });
      }
    },
    617730: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var s = n(735250);
      n(470079);
      var r = n(481060),
        i = n(973616),
        a = n(131704),
        o = n(601964),
        l = n(598077),
        c = n(230224),
        u = n(258356),
        d = n(981631),
        _ = n(689938),
        h = n(39578);
      let E = (e) => {
        let { state: t } = e;
        switch (t) {
          case d.r2o.ACCEPTING:
          case d.r2o.APP_OPENING:
            return !0;
          default:
            return !1;
        }
      };
      function p(e) {
        let { invite: t, onAcceptInvite: n, disableUser: p = !1 } = e;
        if (null == t) return null;
        let g = null != t.guild ? new o.ZP(t.guild) : null,
          f = null != t.channel ? (0, a.jD)(t.channel) : null,
          m =
            null != t.target_application ? new i.Z(t.target_application) : null,
          I = p || null == t.inviter ? null : new l.Z(t.inviter),
          N =
            !(
              (null != t.approximate_member_count &&
                t.approximate_member_count > c.mx) ||
              (null != g && g.hasFeature(d.oNc.COMMUNITY))
            ) &&
            null != I &&
            (0, c.WT)(t),
          T = E(t),
          A = { invite: t, user: I, guild: g, channel: f, application: m };
        return (0, c.JI)(t)
          ? (0, s.jsx)(u.Z, {
              invite: t,
              channel: f,
              isSubmitting: T,
              onAcceptInvite: n,
            })
          : (0, s.jsxs)("div", {
              className: h.container,
              children: [
                (0, s.jsx)(c.GB, {
                  application: m,
                  guild: g,
                  user: N || (0, c.X7)(t) ? I : null,
                }),
                (0, c.X7)(t)
                  ? null
                  : (0, s.jsx)(c.jq, { ...A, showBigUserIcon: N }),
                (0, s.jsx)(c.UM, { ...A, showBigUserIcon: N }),
                (0, s.jsx)(c.V6, { ...A }),
                (0, s.jsx)(r.Button, {
                  onClick: n,
                  submitting: T,
                  className: h.acceptButton,
                  children: _.Z.Messages.INSTANT_INVITE_ACCEPT,
                }),
              ],
            });
      }
    },
    677760: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return P;
        },
      }),
        n(47120);
      var s,
        r,
        i = n(735250),
        a = n(470079),
        o = n(212433),
        l = n(442837),
        c = n(481060),
        u = n(447543),
        d = n(587444),
        _ = n(393238),
        h = n(388905),
        E = n(108427),
        p = n(314897),
        g = n(701190),
        f = n(626135),
        m = n(768581),
        I = n(823379),
        N = n(264229),
        T = n(230224),
        A = n(617730),
        x = n(258356),
        C = n(981631),
        v = n(689938),
        Z = n(712833);
      function S() {
        return (0, i.jsx)("div", {
          className: Z.centerFlex,
          children: (0, i.jsx)(c.Spinner, {}),
        });
      }
      ((r = s || (s = {}))[(r.LOADING = 0)] = "LOADING"),
        (r[(r.DETAILS = 1)] = "DETAILS"),
        (r[(r.ERROR = 2)] = "ERROR");
      let R = (e) => {
        let t =
          (null == e ? void 0 : e.state) == null &&
          (null == e ? void 0 : e.channel) == null;
        if (null == e || null == e.state || t) return 0;
        let n = e.state;
        switch (n) {
          case C.r2o.RESOLVED:
          case C.r2o.ACCEPTED:
          case C.r2o.APP_NOT_OPENED:
          case C.r2o.APP_OPENED:
          case C.r2o.ACCEPTING:
          case C.r2o.APP_OPENING:
            return 1;
          case C.r2o.EXPIRED:
          case C.r2o.BANNED:
          case C.r2o.ERROR:
            return 2;
          case C.r2o.RESOLVING:
            return 0;
          default:
            (0, I.vE)(n);
        }
      };
      function O(e) {
        let { invite: t, onAcceptInvite: n } = e;
        if ((null == t ? void 0 : t.state) === C.r2o.BANNED)
          return (0, i.jsx)(d.u, {
            text: v.Z.Messages.AUTH_BANNED_INVITE_BODY,
            buttonCta: v.Z.Messages.INVITE_INVALID_CTA,
            onClick: n,
          });
        return (0, i.jsx)(d.u, {
          text: v.Z.Messages.INVITE_INVALID_ERROR,
          buttonCta: v.Z.Messages.INVITE_INVALID_CTA,
          onClick: n,
        });
      }
      function b(e) {
        let {
            children: t,
            cardChildren: n,
            startAnimHeightPx: s,
            innerStyle: r,
            ...l
          } = e,
          { invite: u } = l,
          [d, h] = a.useState(R(u)),
          { ref: E, height: p } = (0, _.Z)(),
          g = (0, c.useSpring)({
            height:
              null != p && 0 !== p ? "".concat(p, "px") : "".concat(s, "px"),
            config: o.config.stiff,
          });
        return (
          a.useEffect(() => {
            let e = R(u);
            e !== d && h(e);
          }, [u, d]),
          (0, i.jsxs)(o.animated.div, {
            className: Z.inviteCard,
            style: g,
            children: [
              (0, i.jsx)(o.animated.div, {
                className: Z.inviteChildContainer,
                style: g,
                children: (0, i.jsx)("section", {
                  ref: E,
                  className: null == r ? void 0 : r(d),
                  children: t(d),
                }),
              }),
              n,
            ],
          })
        );
      }
      function D(e) {
        let { invite: t } = e;
        if (null == t || !(0, T.JI)(t)) return null;
        let n = (e) => {
          if (null == t) return null;
          if (1 === e) return (0, i.jsx)(x.X, { invite: t });
          return null;
        };
        return (0, i.jsx)(b, {
          startAnimHeightPx: 0,
          innerStyle: () => Z.guildInfoInner,
          ...e,
          children: (e) => n(e),
        });
      }
      function M(e) {
        let { invite: t } = e,
          n = (n) => {
            if (null == t) return (0, i.jsx)(S, {});
            switch (n) {
              case 1:
                return (0, i.jsx)(A.Z, { ...e, invite: t });
              case 2:
                return (0, i.jsx)(O, { ...e, invite: t });
              default:
                return (0, i.jsx)(S, {});
            }
          },
          s = {
            1: Z.inviteCardInner,
            2: Z.inviteCardInnerError,
            0: Z.inviteCardInnerLoading,
          };
        return (0, i.jsx)(b, {
          startAnimHeightPx: 200,
          innerStyle: (e) => s[e],
          ...e,
          children: (e) => n(e),
        });
      }
      function L(e) {
        let { invite: t, onAcceptInvite: n } = e,
          { guild: s } = null != t ? t : {},
          r = {};
        if ((null == s ? void 0 : s.splash) != null) {
          let e = m.ZP.getGuildSplashURL({ id: s.id, splash: s.splash });
          null != e &&
            ((r.backgroundImage = "url(".concat(e, ")")),
            (r.backgroundSize = "cover"));
        }
        return (0, i.jsxs)(h.ZP, {
          theme: C.BRd.DARK,
          className: Z.splashBackground,
          style: r,
          contentClassName: Z.centerAuthBoxContent,
          children: [
            (0, i.jsx)(M, { ...e, onAcceptInvite: n }),
            (0, i.jsx)(D, { ...e }),
          ],
        });
      }
      function P(e) {
        let { inviteKey: t, transitionTo: n } = e,
          s = (0, l.e7)([g.Z], () => g.Z.getInvite(t));
        return (
          a.useEffect(() => {
            (0, E.e)("invite_mobile");
          }, []),
          a.useEffect(() => {
            null != s &&
              s.state === C.r2o.RESOLVED &&
              f.default.track(
                C.rMx.INVITE_VIEWED,
                {
                  invite_code: t,
                  friends_count: null == s ? void 0 : s.friends_count,
                },
                { flush: !0 },
              );
          }, [s, t]),
          (0, i.jsx)(L, {
            invite: s,
            onAcceptInvite: (e) => {
              !(function (e, t, n) {
                var s, r, i;
                null == e || e.preventDefault(),
                  f.default.track(C.rMx.INVITE_APP_OPENED, {
                    invite_code: (0, N.jX)(t),
                    guild_id:
                      null == n
                        ? void 0
                        : null === (s = n.guild) || void 0 === s
                          ? void 0
                          : s.id,
                    channel_id:
                      null == n
                        ? void 0
                        : null === (r = n.channel) || void 0 === r
                          ? void 0
                          : r.id,
                    inviter_id:
                      null == n
                        ? void 0
                        : null === (i = n.inviter) || void 0 === i
                          ? void 0
                          : i.id,
                  });
                let a =
                    null != n &&
                    n.state !== C.r2o.EXPIRED &&
                    n.state !== C.r2o.BANNED
                      ? t
                      : void 0,
                  o = p.default.getFingerprint(),
                  l = null != o ? o : p.default.getId(),
                  c =
                    null != n && (null == n ? void 0 : n.type) != null
                      ? Number(null == n ? void 0 : n.type)
                      : void 0;
                u.Z.openApp(a, void 0, l, void 0, c);
              })(e, t, s);
            },
            transitionTo: n,
          })
        );
      }
    },
    258356: function (e, t, n) {
      n.d(t, {
        X: function () {
          return E;
        },
        Z: function () {
          return p;
        },
      });
      var s = n(735250);
      n(470079);
      var r = n(481060),
        i = n(565138),
        a = n(372769),
        o = n(742593),
        l = n(390072),
        c = n(601964),
        u = n(230224),
        d = n(689938),
        _ = n(262854);
      function h(e) {
        var t;
        let {
          guildScheduledEvent: n,
          channel: i,
          onAcceptInvite: a,
          isSubmitting: c,
        } = e;
        return (0, s.jsxs)("div", {
          className: _.guildEventCard,
          children: [
            (0, s.jsx)(o.ZP, {
              name: n.name,
              description:
                null !== (t = n.description) && void 0 !== t ? t : void 0,
              headerVariant: "heading-md/medium",
              descriptionClassName: _.__invalid_channelDescription,
              guildId: n.guild_id,
              guildEvent: n,
              eventPreview: n,
            }),
            null != i &&
              (0, s.jsx)("div", {
                className: _.channelInfo,
                children: (0, s.jsx)(l.Z, {
                  guildScheduledEvent: n,
                  channel: i,
                }),
              }),
            (0, s.jsx)(r.Button, {
              className: _.acceptButton,
              color: r.Button.Colors.GREEN,
              onClick: a,
              submitting: c,
              children: d.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
            }),
          ],
        });
      }
      function E(e) {
        var t;
        let { invite: n } = e,
          o = null != n.guild ? new c.ZP(n.guild) : null;
        if (null == o) return null;
        let l = null !== (t = o.description) && void 0 !== t ? t : "";
        return (0, s.jsxs)("div", {
          className: _.guildInfoCard,
          children: [
            (0, s.jsx)(r.Heading, {
              className: _.presentedBy,
              variant: "text-sm/medium",
              children: d.Z.Messages.STAGE_INVITE_GUILD_HEADER,
            }),
            (0, s.jsxs)("div", {
              className: _.guildContainer,
              children: [
                (0, s.jsx)(i.Z, {
                  guild: o,
                  active: !0,
                  size: i.Z.Sizes.MEDIUM,
                }),
                (0, s.jsxs)("div", {
                  className: _.guildDetailsContanier,
                  children: [
                    (0, s.jsxs)(r.Text, {
                      className: _.guildName,
                      color: "header-primary",
                      variant: "text-sm/medium",
                      tag: "span",
                      children: [
                        o.name,
                        (0, s.jsx)(a.Z, {
                          guild: o,
                          className: _.guildBadge,
                          tooltipPosition: "left",
                        }),
                      ],
                    }),
                    (0, s.jsx)(u.V6, {
                      invite: n,
                      textClassName: _.guildInfoMemberCountText,
                      className: _.guildInfoMemberCount,
                    }),
                  ],
                }),
              ],
            }),
            l.length > 0 &&
              (0, s.jsx)("details", {
                className: _.guildDescriptionContainer,
                children: (0, s.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: l,
                }),
              }),
          ],
        });
      }
      function p(e) {
        let { invite: t, channel: n, isSubmitting: r, onAcceptInvite: i } = e,
          { guild_scheduled_event: a } = t;
        return null != a
          ? (0, s.jsx)(h, {
              guildScheduledEvent: a,
              channel: n,
              isSubmitting: r,
              onAcceptInvite: i,
            })
          : null;
      }
    },
    970648: function (e, t, n) {
      n(411104);
      var s = n(772848),
        r = n(544891),
        i = n(981631);
      async function a(e) {
        let {
          body: { handoff_token: t },
        } = await r.tn.post({
          url: i.ANM.HANDOFF,
          body: { key: e },
          oldFormErrors: !0,
          retries: 1,
        });
        if (null != t) return t;
        throw Error("Missing handoff token!");
      }
      t.Z = {
        generateNonce: function () {
          return (0, s.Z)();
        },
        createHandoffToken: a,
      };
    },
    86779: function (e, t, n) {
      n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(773603);
      var s,
        r,
        i = n(735250),
        a = n(470079),
        o = n(593473),
        l = n(756647),
        c = n(442837),
        u = n(544891),
        d = n(433517),
        _ = n(481060),
        h = n(570140),
        E = n(893776),
        p = n(314897),
        g = n(626135),
        f = n(70956),
        m = n(970648),
        I = n(981631),
        N = n(689938),
        T = n(715859);
      let A = "mweb_handoff_nonce",
        x = "mweb_handoff_nonce_expiration",
        C = 1 * f.Z.Millis.MINUTE;
      ((r = s || (s = {})).NONCE_MISSING = "nonce_missing"),
        (r.NONCE_EXPIRED = "nonce_expired"),
        (r.NULL_HANDOFF_TOKEN = "deep_link_failed"),
        (r.HANDOFF_EXCHANGE = "handoff_exchange");
      let v = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        Z = new Set(["deep_link_failed"]),
        S = () => {
          d.K.remove(A), d.K.remove(x);
        };
      t.Z = () => {
        let e = (0, c.e7)([p.default], () => p.default.getFingerprint()),
          { fingerprint: t, handoff_token: n } = (0, o.parse)(
            window.location.search,
          ),
          s = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
          r = null != s ? s : null !== e ? e : void 0;
        a.useEffect(() => {
          null !== s &&
            e !== s &&
            h.Z.dispatch({ type: "FINGERPRINT", fingerprint: s });
        }, [s, e]);
        let [f, R] = a.useState(null),
          O = a.useCallback(
            (e) => {
              R(e),
                g.default.track(
                  I.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                  { reason: e, fingerprint: (0, l.K)(r) },
                  { fingerprint: r },
                );
            },
            [R, r],
          ),
          b = d.K.get(A);
        if (
          ("null" === n && null === f && O("deep_link_failed"),
          null != n &&
            "null" !== n &&
            null == b &&
            null === f &&
            O("nonce_missing"),
          a.useEffect(() => {
            if (null != b) {
              let e = d.K.get(x);
              (null == e || Date.now() >= e) && (O("nonce_expired"), S());
            }
          }, [b, O]),
          a.useEffect(() => {
            null != n &&
              "null" !== n &&
              null != b &&
              null == f &&
              u.tn
                .post({
                  url: I.ANM.HANDOFF_EXCHANGE,
                  body: { key: b, handoff_token: n },
                })
                .then((e) => E.Z.loginToken(e.body.token, !1))
                .then(() => {
                  g.default.track(I.rMx.LOGIN_SUCCESSFUL, {
                    source: I.uRl.MOBILE_WEB_HANDOFF,
                    is_new_user: !1,
                    fingerprint: (0, l.K)(r),
                  });
                  let e = new URL(window.location.href),
                    t = new URLSearchParams(e.search);
                  t.delete("handoff_token"),
                    t.delete("fingerprint"),
                    (e.search = t.toString()),
                    window.history.pushState(null, "", e);
                })
                .catch(() => {
                  O("handoff_exchange");
                })
                .finally(() => {
                  S();
                });
          }, [n, b, f, r, O]),
          null == r)
        )
          return null;
        let D = (() => {
          if (null == f)
            return (0, i.jsxs)(i.Fragment, {
              children: [
                N.Z.Messages.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1,
                (0, i.jsx)("br", {}),
                N.Z.Messages.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2,
              ],
            });
          if (Z.has(f))
            return N.Z.Messages.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
          if (v.has(f)) return N.Z.Messages.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN;
        })();
        return null != f && Z.has(f)
          ? (0, i.jsx)("div", {
              className: T.errorContainer,
              children: (0, i.jsx)(_.Text, {
                color: "interactive-normal",
                variant: "text-sm/semibold",
                children: D,
              }),
            })
          : (0, i.jsxs)("div", {
              className: T.container,
              children: [
                (0, i.jsx)(_.Text, {
                  variant: "text-sm/semibold",
                  children: D,
                }),
                (0, i.jsx)(_.Button, {
                  color: _.Button.Colors.BRAND_INVERTED,
                  onClick: () => {
                    let e = m.Z.generateNonce();
                    d.K.set(A, e), d.K.set(x, Date.now() + C);
                    let t = new URL(I.x0X),
                      n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let s = new URLSearchParams();
                    s.set(
                      "redirect",
                      encodeURIComponent(
                        window.location.pathname + n.toString(),
                      ),
                    ),
                      s.set("key", e),
                      s.set("fingerprint", r),
                      (t.search = s.toString()),
                      g.default.track(
                        I.rMx.DEEP_LINK_CLICKED,
                        {
                          fingerprint: (0, l.K)(r),
                          source: "mobile_web_handoff",
                          destination: I.x0X,
                        },
                        { fingerprint: r, flush: !0 },
                      ),
                      (window.location.href = t.toString());
                  },
                  children: (0, i.jsx)(_.Text, {
                    className: T.buttonText,
                    variant: "text-sm/semibold",
                    children: N.Z.Messages.MOBILE_WEB_HANDOFF_BUTTON_TEXT,
                  }),
                }),
              ],
            });
      };
    },
    913583: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = n(735250);
      n(470079);
      var r = n(990547),
        i = n(481060),
        a = n(213609),
        o = n(388905),
        l = n(760213),
        c = n(689938),
        u = n(117286);
      function d(e) {
        let { onDismiss: t } = e;
        return (
          (0, a.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
          }),
          (0, s.jsxs)(o.ZP, {
            className: u.chooseAccountAuthBox,
            children: [
              (0, s.jsx)(o.Dx, {
                children: c.Z.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT,
              }),
              (0, s.jsx)(i.Text, {
                className: u.chooseAccountHelpText,
                variant: "text-md/normal",
                color: "header-secondary",
                children: c.Z.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT_HELPER,
              }),
              (0, s.jsx)(l.Z, {
                actionText: c.Z.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN,
                onAction: (e) => {
                  e === l.W.LOGIN_REQUIRED && t();
                },
              }),
              (0, s.jsx)("div", {
                className: u.actions,
                children: (0, s.jsx)(i.Button, {
                  className: u.__invalid_chooseAccountButton,
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.PRIMARY,
                  onClick: t,
                  size: i.Button.Sizes.MEDIUM,
                  children: (0, s.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children:
                      c.Z.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON,
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    144114: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var s,
        r,
        i = n(990547),
        a = n(544891),
        o = n(570140),
        l = n(314897),
        c = n(573261),
        u = n(815660),
        d = n(981631);
      ((s = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (s.USER_SETTINGS_UPDATE = "user_settings_update"),
        (s.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (s.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (s.CONTACT_SYNC = "contact_sync"),
        (t.Z = {
          setCountryCode(e) {
            o.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, t) =>
            a.tn.del({
              url: d.ANM.PHONE,
              body: { password: e, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          resendCode(e) {
            let t = {},
              n = l.default.getFingerprint();
            return (
              null != n && "" !== n && (t["X-Fingerprint"] = n),
              a.tn.post({
                url: d.ANM.RESEND_PHONE,
                headers: t,
                body: { phone: e },
              })
            );
          },
          beginAddPhone: (e, t) =>
            a.tn.post({
              url: d.ANM.PHONE,
              body: { phone: e, change_phone_reason: t },
            }),
          addPhone: (e, t, n) =>
            a.tn.post({
              url: d.ANM.PHONE,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (e) =>
            a.tn.post({
              url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
            }),
          beginReverifyPhone: (e, t) =>
            a.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: t },
            }),
          reverifyPhone: (e, t, n) =>
            a.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (e) =>
            a.tn.post({
              url: d.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
            }),
          async verifyPhone(e, t) {
            let n =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              s =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = {},
              a = l.default.getFingerprint();
            null != a && "" !== a && (r["X-Fingerprint"] = a),
              s && (r.authorization = "");
            let _ = await c.Z.post({
              url: d.ANM.VERIFY_PHONE,
              headers: r,
              body: { phone: e, code: t },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return n && o.Z.dispatch({ type: "MODAL_POP", key: u.M }), _.body;
          },
        });
    },
    815660: function (e, t, n) {
      n.d(t, {
        M: function () {
          return s;
        },
        z: function () {
          return r;
        },
      });
      let s = "PHONE_VERIFICATION_MODAL_KEY",
        r = 6;
    },
    479446: function (e, t, n) {
      n.d(t, {
        Ou: function () {
          return h;
        },
        SR: function () {
          return s;
        },
        YD: function () {
          return _;
        },
      }),
        n(411104);
      var s,
        r,
        i = n(512722),
        a = n.n(i),
        o = n(493683),
        l = n(904245),
        c = n(957730),
        u = n(592125),
        d = n(669079);
      ((r = s || (s = {})).ACTION = "action"),
        (r.LOOP = "loop"),
        (r.IDLE = "idle");
      let _ = async (e, t) => {
          if (null == t) throw Error("giftCode must be defined");
          if (null == e) throw Error("Recipient must be defined");
          let n = await o.Z.openPrivateChannel(e.id).then((e) => {
              let t = u.Z.getChannel(e);
              if ((a()(null != t, "PrivateChannel is null"), null == t))
                throw Error("Channel must be defined");
              return t;
            }),
            s = (0, d.Nz)(t);
          return l.Z.sendMessage(n.id, c.ZP.parse(n, s), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
          });
        },
        h = (e) => {};
    },
    108427: function (e, t, n) {
      n.d(t, {
        e: function () {
          return c;
        },
      }),
        n(47120);
      var s = n(772848),
        r = n(579806),
        i = n(626135),
        a = n(981631);
      function o(e, t, n) {
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
      let l = new (class e {
        trackEvent(e, t) {
          let n = Date.now();
          requestIdleCallback(() => {
            i.default.track(e, {
              ...(function () {
                var e, t, n;
                let s = "--campaign-id=";
                for (let i of null !==
                  (n =
                    null === r.Z || void 0 === r.Z
                      ? void 0
                      : null === (t = r.Z.processUtils) || void 0 === t
                        ? void 0
                        : null === (e = t.getMainArgvSync) || void 0 === e
                          ? void 0
                          : e.call(t)) && void 0 !== n
                  ? n
                  : [])
                  if (i.startsWith(s)) return { referrer: i.substr(s.length) };
                return {};
              })(),
              ...(function () {
                let e = !1,
                  t = {
                    total_compressed_byte_size: 0,
                    total_uncompressed_byte_size: 0,
                    total_transfer_byte_size: 0,
                    js_compressed_byte_size: 0,
                    js_uncompressed_byte_size: 0,
                    js_transfer_byte_size: 0,
                    css_compressed_byte_size: 0,
                    css_uncompressed_byte_size: 0,
                    css_transfer_byte_size: 0,
                  };
                return (
                  null != window.performance &&
                    null != window.performance.getEntries &&
                    window.performance.getEntries().forEach((n) => {
                      let s =
                          null != n.encodedBodySize
                            ? n.encodedBodySize
                            : n.decodedBodySize,
                        r =
                          null != n.decodedBodySize
                            ? n.decodedBodySize
                            : n.encodedBodySize,
                        i = n.transferSize;
                      null != r &&
                        null != s &&
                        ((e = !0),
                        (t.total_compressed_byte_size += s),
                        (t.total_uncompressed_byte_size += r),
                        null != i && (t.total_uncompressed_byte_size += i),
                        "resource" === n.entryType &&
                          ("script" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += s),
                            (t.js_uncompressed_byte_size += r),
                            null != i && (t.js_uncompressed_byte_size += i)),
                          "link" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += s),
                            (t.css_uncompressed_byte_size += r),
                            null != i && (t.css_uncompressed_byte_size += i))));
                    }),
                  e ? t : {}
                );
              })(),
              load_id: this.loadId,
              screen_name: t,
              duration_ms_since_app_opened:
                n - window.GLOBAL_ENV.HTML_TIMESTAMP,
            });
          });
        }
        trackAppUIViewed(e) {
          if (!this.appUIViewed)
            this.trackEvent(a.rMx.APP_UI_VIEWED, e), (this.appUIViewed = !0);
        }
        constructor() {
          o(this, "loadId", (0, s.Z)()), o(this, "appUIViewed", !1);
        }
      })();
      function c(e) {
        l.trackAppUIViewed(e);
      }
    },
    896797: function (e, t, n) {
      var s,
        r = n(442837),
        i = n(433517),
        a = n(570140),
        o = n(981631);
      function l(e, t, n) {
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
      let c = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = c,
        d = "LAST_VIEWED_PATH";
      class _ extends (s = r.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
          u = null != e ? e : c;
        }
        get defaultRoute() {
          return o.Z5c.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : o.Z5c.ME;
        }
        get fallbackRoute() {
          return o.Z5c.ME;
        }
        getState() {
          return u;
        }
      }
      l(_, "displayName", "DefaultRouteStore"),
        l(_, "persistKey", "DefaultRouteStore"),
        l(_, "migrations", [
          () => {
            let e = i.K.get(d, null);
            return i.K.remove(d), { lastViewedPath: e };
          },
        ]),
        (t.Z = new _(a.Z, {
          SAVE_LAST_ROUTE: function (e) {
            let { path: t } = e;
            return (u.lastViewedPath = t), !0;
          },
          SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: t } = e;
            return (u.lastViewedNonVoicePath = t), !0;
          },
        }));
    },
    625054: function (e, t, n) {
      var s = n(525654),
        r = n.n(s),
        i = n(643191);
      t.Z = {
        dump(e) {
          let t;
          null != performance.memory &&
            (t = {
              jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
              totalJSHeapSize: performance.memory.totalJSHeapSize,
              usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
              browser: { name: r().name, version: r().version },
              os: { name: r().os.family, version: r().os.version },
              memory: t,
            });
        },
        getTimeSinceNavigationStart: () => Date.now() - i.mb,
      };
    },
    782605: function (e, t, n) {
      n.d(t, {
        O: function () {
          return c;
        },
        l: function () {
          return l;
        },
      });
      var s = n(594174),
        r = n(63063),
        i = n(74538),
        a = n(981631),
        o = n(689938);
      function l(e) {
        switch (e) {
          case a.evJ.TOO_MANY_USER_GUILDS:
            let t = s.default.getCurrentUser(),
              n =
                i.ZP.canUseIncreasedGuildCap(t) ||
                (null == t ? void 0 : t.isStaff())
                  ? a.tHP
                  : a.DZw;
            return {
              title: o.Z.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                quantity: n,
              }),
              description: o.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION,
            };
          case a.evJ.GUILD_AT_CAPACITY:
            return {
              title: o.Z.Messages.SERVER_IS_CURRENTLY_FULL,
              description: o.Z.Messages.PLEASE_TRY_AGAIN_LATER,
            };
          case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
              title: o.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
              description: o.Z.Messages.PLEASE_TRY_AGAIN_LATER,
            };
          default:
            return null;
        }
      }
      function c(e) {
        switch (e) {
          case a.evJ.TOO_MANY_USER_GUILDS:
            return o.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
          case a.evJ.GUILD_AT_CAPACITY:
            return o.Z.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
          case a.evJ.INVALID_COUNTRY_CODE:
            return o.Z.Messages.INVALID_COUNTRY_CODE;
          case a.evJ.INVALID_CANNOT_FRIEND_SELF:
            return o.Z.Messages.INVALID_CANNOT_FRIEND_SELF;
          case a.evJ.INVITES_DISABLED:
            return o.Z.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
              articleLink: r.Z.getArticleURL(a.BhN.INVITE_DISABLED),
            });
          default:
            return o.Z.Messages.INVITE_MODAL_ERROR_DEFAULT;
        }
      }
    },
    172517: function (e, t, n) {
      n.d(t, {
        FW: function () {
          return h;
        },
        Pk: function () {
          return l;
        },
        Rq: function () {
          return p;
        },
        W_: function () {
          return a;
        },
        dK: function () {
          return o;
        },
        qd: function () {
          return E;
        },
      }),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(642549),
        n(47120),
        n(757143),
        n(863942),
        n(411104);
      var s = n(512722),
        r = n.n(s),
        i = n(598077);
      function a() {
        return window.crypto.subtle.generateKey(
          {
            name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256",
          },
          !0,
          ["decrypt"],
        );
      }
      async function o(e) {
        return (
          r()(null != e.publicKey, "public key cannot be null"),
          btoa(
            String.fromCharCode(
              ...new Uint8Array(
                await window.crypto.subtle.exportKey("spki", e.publicKey),
              ),
            ),
          )
        );
      }
      async function l(e) {
        return (
          r()(null != e.publicKey, "public key cannot be null"),
          d(await window.crypto.subtle.exportKey("spki", e.publicKey))
        );
      }
      function c(e) {
        return btoa(String.fromCharCode(...new Uint8Array(e)))
          .replace(/\//g, "_")
          .replace(/\+/g, "-")
          .replace(/={1,2}$/, "");
      }
      function u(e) {
        return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
      }
      async function d(e) {
        return c(await window.crypto.subtle.digest({ name: "SHA-256" }, e));
      }
      function _(e, t) {
        return (
          r()(null != e.privateKey, "private key cannot be null"),
          window.crypto.subtle.decrypt(
            { name: "RSA-OAEP", hash: "SHA-256" },
            e.privateKey,
            t,
          )
        );
      }
      async function h(e, t) {
        let n = new TextDecoder(),
          s = await _(e, u(t));
        return n.decode(s);
      }
      async function E(e, t) {
        return c(await _(e, u(t)));
      }
      async function p(e, t) {
        t = await h(e, t);
        let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
        if (null == n) throw Error("Invalid encoded user record.");
        let [, s, r, a, o] = n;
        return new i.Z({
          id: s,
          discriminator: r,
          avatar: "0" === a ? null : a,
          username: o,
        });
      }
    },
    296848: function (e, t, n) {
      n.d(t, {
        AT: function () {
          return f;
        },
        GY: function () {
          return p;
        },
        R4: function () {
          return E;
        },
        oE: function () {
          return g;
        },
        yb: function () {
          return h;
        },
      }),
        n(47120),
        n(653041),
        n(470079);
      var s = n(512722),
        r = n.n(s),
        i = n(913527),
        a = n.n(i),
        o = n(99945);
      n(442837);
      var l = n(821849),
        c = n(509545),
        u = n(74538),
        d = n(981631),
        _ = n(474936);
      function h(e) {
        return e.items
          .map((e) => {
            let t = c.Z.get(e.planId);
            return r()(null != t, "Unable to fetch plan"), t;
          })
          .map((e) => e.skuId);
      }
      function E(e, t, n) {
        let s = e.getCurrentSubscriptionPlanIdForGroup(n);
        return (
          (e.type === d.NYc.PREMIUM && null == s) ||
          (r()(null != s, "Current subscription has no plan in group"),
          r()(
            !(
              s === _.Xh.PREMIUM_YEAR_TIER_1 && t === _.Xh.PREMIUM_MONTH_TIER_2
            ),
            "Unexpected plan switch",
          ),
          n.indexOf(s) < n.indexOf(t))
        );
      }
      function p(e, t, n) {
        return !E(e, t, n);
      }
      function g(e, t) {
        let n = c.Z.get(e);
        if (null == n) {
          let n = _.GP[e];
          r()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
          let s = (0, u.Wz)(n.skuId);
          !c.Z.isFetchingForSKU(s) && (0, l.GZ)(s, t);
        }
        return n;
      }
      function f(e) {
        let t = Object.keys(o.T).filter((e) => isNaN(Number(e)));
        if (e.status !== d.O0b.PAUSED)
          return { durations: t, currentDaysPaused: 0 };
        if (null == e.pauseEndsAt)
          return { durations: [], currentDaysPaused: 0 };
        {
          let n = a()(e.currentPeriodStart),
            s = Math.round(a()(e.pauseEndsAt).diff(n, "days", !0)),
            r = [];
          for (let e of t) o.T[e] > s && r.push(e);
          return { durations: r, currentDaysPaused: s };
        }
      }
    },
    99945: function (e, t, n) {
      var s, r;
      n.d(t, {
        T: function () {
          return s;
        },
      }),
        ((r = s || (s = {}))[(r.ONE_MONTH = 30)] = "ONE_MONTH"),
        (r[(r.TWO_MONTHS = 60)] = "TWO_MONTHS"),
        (r[(r.THREE_MONTHS = 90)] = "THREE_MONTHS");
    },
    954757: function (e, t, n) {
      e.exports = { wrapper: "wrapper_ed5275" };
    },
    504877: function (e, t, n) {
      e.exports = {
        characterBackground: "characterBackground_bdd070",
        artwork: "artwork_bdd070",
        logoWithText: "logoWithText_bdd070",
        logo: "logo_bdd070",
      };
    },
    295242: function (e, t, n) {
      e.exports = {
        applicationIcon: "applicationIcon_db6d88",
        seasonalIcon: "seasonalIcon_db6d88",
      };
    },
    60561: function (e, t, n) {
      e.exports = {
        authBox: "authBox_c394c0",
        createButton: "createButton_c394c0",
        header: "header_c394c0",
        formContainer: "formContainer_c394c0",
      };
    },
    684190: function (e, t, n) {
      e.exports = {
        button: "button_c85cdc elevated_c85cdc",
        buttonTitle: "buttonTitle_c85cdc",
        card: "card_c85cdc elevated_c85cdc",
        cardContents: "cardContents_c85cdc",
        cardAccentLeft: "cardAccentLeft_c85cdc",
        cardAccentRight: "cardAccentRight_c85cdc",
      };
    },
    658797: function (e, t, n) {
      e.exports = {
        container: "container_f9c402",
        guildBadge: "guildBadge_f9c402",
        appIcon: "appIcon_f9c402",
        appIconSize: "appIconSize_f9c402",
        avatar: "avatar_f9c402",
        guildIcon: "guildIcon_f9c402",
        compactAvatar: "compactAvatar_f9c402",
        inviteResolvingGuildName: "inviteResolvingGuildName_f9c402",
        title: "title_f9c402",
        directInviteSubTitle: "directInviteSubTitle_f9c402",
        activityCount: "activityCount_f9c402",
        guildContainer: "guildContainer_f9c402",
        appIn: "appIn_f9c402",
        appGuildName: "appGuildName_f9c402",
        icon: "icon_f9c402",
      };
    },
    970314: function (e, t, n) {
      e.exports = {
        header: "header_d58f04",
        horizontalAuthBox: "horizontalAuthBox_d58f04",
        needAccount: "needAccount_d58f04",
        smallRegisterLink: "smallRegisterLink_d58f04",
        mainLoginContainer: "mainLoginContainer_d58f04",
        mobile: "mobile_d58f04",
        goBackButton: "goBackButton_d58f04",
        content: "content_d58f04",
        caret: "caret_d58f04",
      };
    },
    506303: function (e, t, n) {
      e.exports = {
        qrLogin: "qrLogin_c6cd4b",
        qrLoginInner: "qrLoginInner_c6cd4b",
        qrCode: "qrCode_c6cd4b",
        qrCodeContainer: "qrCodeContainer_c6cd4b",
        qrCodeOverlay: "qrCodeOverlay_c6cd4b",
        qrAvatar: "qrAvatar_c6cd4b",
        startOverButton: "startOverButton_c6cd4b",
        verticalSeparator: "verticalSeparator_c6cd4b",
      };
    },
    929650: function (e, t, n) {
      e.exports = {
        column: "column_ef5bab",
        container: "container_ef5bab",
        content: "content_ef5bab",
      };
    },
    100906: function (e, t, n) {
      e.exports = {
        errorMessage: "errorMessage_ee1c42",
        createAccountTemplateHeader: "createAccountTemplateHeader_ee1c42",
        horizontalAuthBox: "horizontalAuthBox_ee1c42",
        flex: "flex_ee1c42",
        divider: "divider_ee1c42",
        goBackButton: "goBackButton_ee1c42",
        content: "content_ee1c42",
        caret: "caret_ee1c42",
        messageNegative: "messageNegative_ee1c42",
        messagePositive: "messagePositive_ee1c42",
      };
    },
    987742: function (e, t, n) {
      e.exports = {
        container: "container_aaa004",
        buttonColumn: "buttonColumn_aaa004",
      };
    },
    237810: function (e, t, n) {
      e.exports = { image: "image_bcfea3" };
    },
    510186: function (e, t, n) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    634645: function (e, t, n) {
      e.exports = {
        title: "title_da258e",
        subtitle: "subtitle_da258e",
        img: "img_da258e",
      };
    },
    535701: function (e, t, n) {
      n.r(
        (e.exports = {
          container: "container_a57e6a",
          title: "title_a57e6a",
          inputs: "inputs_a57e6a",
          day: "day_a57e6a",
          month: "month_a57e6a",
          year: "year_a57e6a",
          errors: "errors_a57e6a",
        }),
      );
    },
    111543: function (e, t, n) {
      e.exports = { image: "image_d42055", loaded: "loaded_d42055" };
    },
    878145: function (e, t, n) {
      e.exports = {
        discordLogo: "discordLogo_b83a05",
        authBox: "authBox_b83a05",
        authBoxExpanded: "authBoxExpanded_b83a05 authBox_b83a05",
        centeringWrapper: "centeringWrapper_b83a05",
        title: "title_b83a05",
        subText: "subText_b83a05",
        pill: "pill_b83a05",
        pillOnline: "pillOnline_b83a05",
        pillMessage: "pillMessage_b83a05",
        pillIconTotal: "pillIconTotal_b83a05 pillIcon_b83a05",
        pillIconOnline: "pillIconOnline_b83a05 pillIcon_b83a05",
        pillFlat: "pillFlat_b83a05",
        joiningAs: "joiningAs_b83a05",
        joiningAsAvatar: "joiningAsAvatar_b83a05",
        joiningAsUsername: "joiningAsUsername_b83a05",
        spinnerVideo: "spinnerVideo_b83a05",
        image: "image_b83a05",
        block: "block_b83a05",
        button: "button_b83a05",
        linkButton: "linkButton_b83a05",
        inviteIcon: "inviteIcon_b83a05",
        inviteLargeIcon: "inviteLargeIcon_b83a05 inviteIcon_b83a05",
        downloadButtonSubtext: "downloadButtonSubtext_b83a05",
        inputError: "inputError_b83a05",
        description: "description_b83a05",
      };
    },
    559737: function (e, t, n) {
      e.exports = { logo: "logo_c59dbe" };
    },
    691134: function (e, t, n) {
      e.exports = { checkbox: "checkbox_bc87ef", subText: "subText_bc87ef" };
    },
    577491: function (e, t, n) {
      e.exports = {
        container: "container_d69c1e",
        statusContainer: "statusContainer_d69c1e",
        channelInfoContainer: "channelInfoContainer_d69c1e",
        channelInfoText: "channelInfoText_d69c1e",
      };
    },
    985772: function (e, t, n) {
      e.exports = {
        error: "error_c39a71",
        subTitle: "subTitle_c39a71",
        button: "button_c39a71",
        codeInput: "codeInput_c39a71",
      };
    },
    325929: function (e, t, n) {
      e.exports = {
        flex: "flex_e690b8",
        header: "header_e690b8",
        embed: "embed_e690b8",
        listeners: "listeners_e690b8",
        live: "live_e690b8",
        speakers: "speakers_e690b8",
        members: "members_e690b8",
        speaker: "speaker_e690b8",
        joinButton: "joinButton_e690b8",
        background: "background_e690b8",
        icon: "icon_e690b8",
        guild: "guild_e690b8",
        guildInfo: "guildInfo_e690b8",
        dot: "dot_e690b8",
        alignStart: "alignStart_e690b8",
        avatar: "avatar_e690b8",
        username: "username_e690b8",
      };
    },
    710317: function (e, t, n) {
      e.exports = {
        canvas: "canvas_f26d08",
        fallbackImage: "fallbackImage_f26d08",
        visible: "visible_f26d08",
        embedded: "embedded_f26d08",
      };
    },
    201680: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_bb3b80 " + n("112864").scrollbarGhost,
        rightSplit: "rightSplit_bb3b80",
        embedded: "embedded_bb3b80",
        leftSplit: "leftSplit_bb3b80",
        nonEmbeddedLeftSplit: "nonEmbeddedLeftSplit_bb3b80",
        mobileWave: "mobileWave_bb3b80",
        logo: "logo_bb3b80",
      };
    },
    458221: function (e, t, n) {
      n.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    680924: function (e, t, n) {
      e.exports = { spacer: "spacer_b0944f", input: "input_b0944f" };
    },
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    737602: function (e, t, n) {
      e.exports = {
        descriptionText: "descriptionText_f4ba67",
        truncate: "truncate_f4ba67",
      };
    },
    731006: function (e, t, n) {
      e.exports = { container: "container_f87f77" };
    },
    247912: function (e, t, n) {
      e.exports = {
        container: "container_a4ec62",
        eventName: "eventName_a4ec62",
        description: "description_a4ec62",
        descriptionWithThumbnail: "descriptionWithThumbnail_a4ec62",
        spacer: "spacer_a4ec62",
        rsvpCount: "rsvpCount_a4ec62",
        rsvpIcon: "rsvpIcon_a4ec62",
        creator: "creator_a4ec62",
        eventInfoStatusContainer: "eventInfoStatusContainer_a4ec62",
        statusContainer: "statusContainer_a4ec62",
        withThumbnail: "withThumbnail_a4ec62",
        thumbnailContainer: "thumbnailContainer_a4ec62",
        thumbnail: "thumbnail_a4ec62",
      };
    },
    205569: function (e, t, n) {
      e.exports = {
        eventStatusContainer: "eventStatusContainer_d6a475",
        isRecurring: "isRecurring_d6a475",
        eventStatusLabel: "eventStatusLabel_d6a475",
        liveEventEndTime: "liveEventEndTime_d6a475",
        newBadge: "newBadge_d6a475",
        newBadgeText: "newBadgeText_d6a475",
      };
    },
    639955: function (e, t, n) {
      e.exports = {
        inviteDetailsContainer: "inviteDetailsContainer_a75489",
        clickable: "clickable_a75489",
        guildChannelInfoContainer: "guildChannelInfoContainer_a75489",
        verticalContainer: "verticalContainer_a75489",
        footerContainer: "footerContainer_a75489",
        button: "button_a75489",
        innerButton: "innerButton_a75489",
        buttonIcon: "buttonIcon_a75489",
        eventDescription: "eventDescription_a75489",
        channelDescription: "channelDescription_a75489",
        guildBadge: "guildBadge_a75489",
        guildName: "guildName_a75489",
        guildNameClickable: "guildNameClickable_a75489",
        guildNameLinkable: "guildNameLinkable_a75489 guildName_a75489",
        channelIcon: "channelIcon_a75489",
        channelInfoContainer: "channelInfoContainer_a75489",
        channelLocationLink: "channelLocationLink_a75489",
        banner: "banner_a75489",
      };
    },
    448144: function (e, t, n) {
      e.exports = {
        header: "header_ecbdaf",
        title: "title_ecbdaf",
        description: "description_ecbdaf",
        guildBadge: "guildBadge_ecbdaf",
        row: "row_ecbdaf",
        guildIcon: "guildIcon_ecbdaf",
        body: "body_ecbdaf",
        icon: "icon_ecbdaf",
        channelIcon: "channelIcon_ecbdaf",
        clickable: "clickable_ecbdaf",
        linkText: "linkText_ecbdaf",
        channelLocation: "channelLocation_ecbdaf",
        locationText: "locationText_ecbdaf",
        externalLocation: "externalLocation_ecbdaf",
        interestedCount: "interestedCount_ecbdaf",
        creator: "creator_ecbdaf",
        divider: "divider_ecbdaf",
      };
    },
    196238: function (e, t, n) {
      e.exports = { responseOptions: "responseOptions_ff8b0a" };
    },
    34964: function (e, t, n) {
      e.exports = {
        icon: "icon_b52547",
        guidelines: "guidelines_b52547",
        divider: "divider_b52547",
        previewSection: "previewSection_b52547",
        channelsWrapper: "channelsWrapper_b52547",
        rolesWrapper: "rolesWrapper_b52547",
        protip: "protip_b52547",
        protipText: "protipText_b52547",
        channel: "channel_b52547",
        category: "category_b52547",
        channelIcon: "channelIcon_b52547",
        channelText: "channelText_b52547",
        role: "role_b52547",
        roleCircle: "roleCircle_b52547",
        roleName: "roleName_b52547",
      };
    },
    251320: function (e, t, n) {
      e.exports = {
        image: "image_be5c11",
        header: "header_be5c11",
        usagePill: "usagePill_be5c11",
      };
    },
    712457: function (e, t, n) {
      e.exports = {
        container: "container_de67e1",
        title: "title_de67e1",
        subtitle: "subtitle_de67e1",
        userText: "userText_de67e1",
        usagePill: "usagePill_de67e1",
        verifiedNameContainer: "verifiedNameContainer_de67e1",
        verifiedIcon: "verifiedIcon_de67e1",
        verifiedCheckContainer: "verifiedCheckContainer_de67e1",
        verifiedCheck: "verifiedCheck_de67e1",
      };
    },
    71188: function (e, t, n) {
      e.exports = {
        image: "image_a4d9bd",
        title: "title_a4d9bd",
        subtitle: "subtitle_a4d9bd",
        spacedButton: "spacedButton_a4d9bd",
      };
    },
    788170: function (e, t, n) {
      e.exports = {
        guildBadge: "guildBadge_e73528",
        appIcon: "appIcon_e73528",
        appIconSize: "appIconSize_e73528",
        avatar: "avatar_e73528",
        guildIcon: "guildIcon_e73528",
        title: "title_e73528",
        activityCount: "activityCount_e73528",
        directInviteSubTitle: "directInviteSubTitle_e73528",
        guildContainer: "guildContainer_e73528",
        appIn: "appIn_e73528",
        appGuildName: "appGuildName_e73528",
        inviteJoinContainer: "inviteJoinContainer_e73528",
        inviterIconWrapper: "inviterIconWrapper_e73528",
      };
    },
    39578: function (e, t, n) {
      e.exports = {
        container: "container_e05cb6",
        acceptButton: "acceptButton_e05cb6",
      };
    },
    712833: function (e, t, n) {
      e.exports = {
        splashBackground: "splashBackground_f421fb",
        centerFlex: "centerFlex_f421fb",
        centerAuthBoxContent: "centerAuthBoxContent_f421fb centerFlex_f421fb",
        inviteCard: "inviteCard_f421fb",
        inviteChildContainer: "inviteChildContainer_f421fb",
        inviteCardInner: "inviteCardInner_f421fb",
        guildInfoInner: "guildInfoInner_f421fb",
        inviteCardInnerError: "inviteCardInnerError_f421fb",
        inviteCardInnerLoading: "inviteCardInnerLoading_f421fb",
      };
    },
    262854: function (e, t, n) {
      e.exports = {
        guildInfoCard: "guildInfoCard_b6dbd3",
        presentedBy: "presentedBy_b6dbd3",
        guildContainer: "guildContainer_b6dbd3",
        guildDetailsContanier: "guildDetailsContanier_b6dbd3",
        guildName: "guildName_b6dbd3",
        guildBadge: "guildBadge_b6dbd3",
        guildInfoMemberCount: "guildInfoMemberCount_b6dbd3",
        guildInfoMemberCountText: "guildInfoMemberCountText_b6dbd3",
        guildDescriptionContainer: "guildDescriptionContainer_b6dbd3",
        guildEventCard: "guildEventCard_b6dbd3",
        channelInfo: "channelInfo_b6dbd3",
        acceptButton: "acceptButton_b6dbd3",
      };
    },
    850393: function (e, t, n) {
      n.r(
        (e.exports = {
          wrapper: "wrapper_a71a1c",
          header: "header_a71a1c",
          content: "content_a71a1c",
          guildIcon: "guildIcon_a71a1c",
          applicationIcon: "applicationIcon_a71a1c",
          guildIconJoined: "guildIconJoined_a71a1c guildIcon_a71a1c",
          guildIconImage: "guildIconImage_a71a1c guildIcon_a71a1c",
          guildIconImageJoined:
            "guildIconImageJoined_a71a1c guildIconImage_a71a1c guildIcon_a71a1c",
          inviteDestination: "inviteDestination_a71a1c",
          inviteDestinationJoined:
            "inviteDestinationJoined_a71a1c inviteDestination_a71a1c",
          channel: "channel_a71a1c",
          channelName: "channelName_a71a1c",
          channelIcon: "channelIcon_a71a1c",
          status: "status_a71a1c",
          statusWrapper: "statusWrapper_a71a1c",
          statusOnline: "statusOnline_a71a1c status_a71a1c",
          statusOffline: "statusOffline_a71a1c status_a71a1c",
          count: "count_a71a1c",
          guildNameWrapper: "guildNameWrapper_a71a1c",
          guildName: "guildName_a71a1c",
          guildBadge: "guildBadge_a71a1c",
          guildInfo: "guildInfo_a71a1c",
          guildDetail: "guildDetail_a71a1c",
          statusCounts: "statusCounts_a71a1c",
          inviteSplash: "inviteSplash_a71a1c",
          inviteSplashImage: "inviteSplashImage_a71a1c",
          inviteSplashBadge: "inviteSplashBadge_a71a1c",
          inviteSplashImageLoaded: "inviteSplashImageLoaded_a71a1c",
          button: "button_a71a1c",
          buttonSize: "buttonSize_a71a1c",
          guildIconExpired: "guildIconExpired_a71a1c guildIcon_a71a1c",
          inviteDestinationExpired: "inviteDestinationExpired_a71a1c",
          buttonForNonMember: "buttonForNonMember_a71a1c",
          "invite-button-resolving": "invite-button-resolving_a71a1c",
          resolvingWrapper: "resolvingWrapper_a71a1c",
          resolving: "resolving_a71a1c",
          resolvingBackground: "resolvingBackground_a71a1c",
          resolvingFakeButton: "resolvingFakeButton_a71a1c",
        }),
      );
    },
    58259: function (e, t, n) {
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
    715859: function (e, t, n) {
      e.exports = {
        container: "container_b252f6",
        errorContainer: "errorContainer_b252f6 container_b252f6",
        buttonText: "buttonText_b252f6",
      };
    },
    117286: function (e, t, n) {
      e.exports = {
        chooseAccountAuthBox: "chooseAccountAuthBox_b4df52",
        chooseAccountHelpText: "chooseAccountHelpText_b4df52",
        actions: "actions_b4df52",
      };
    },
    516603: function (e, t, n) {
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
    760617: function (e, t, n) {
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
    553258: function (e, t, n) {
      e.exports = {
        phoneFieldPopout: "phoneFieldPopout_ff761b",
        phoneFieldScroller: "phoneFieldScroller_ff761b",
        countryItem: "countryItem_ff761b",
        countryName: "countryName_ff761b",
        countryCode: "countryCode_ff761b",
      };
    },
    279006: function (e, t, n) {
      e.exports = {
        input: "input_cc6ddd",
        inputWrapper: "inputWrapper_cc6ddd",
        inputField: "inputField_cc6ddd",
      };
    },
    615231: function (e, t, n) {
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
          return f;
        },
        wz: function () {
          return g;
        },
      });
      var i = "copy",
        a = "convert";
      function o(e, t, n) {
        if (t === i) return n;
        if (t === a) return e(n);
        if (t instanceof Array) return n.map((n) => o(e, t[0], n));
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
            s[r] = o(e, i.schema, n[r]);
          }
          return s;
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
        _ = { appid: u(i), appidExclude: u(i), credProps: u(i) },
        h = { appid: u(i), appidExclude: u(i), credProps: u(i) };
      c({
        rp: c(i),
        user: c({ id: c(a), name: c(i), displayName: c(i) }),
        challenge: c(a),
        pubKeyCredParams: c(i),
        timeout: u(i),
        excludeCredentials: u([d]),
        authenticatorSelection: u(i),
        attestation: u(i),
        extensions: u(_),
      }),
        u(i),
        c(i),
        c(i),
        c(a),
        u(i),
        c({
          clientDataJSON: c(a),
          attestationObject: c(a),
          transports: l(i, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
          }),
        }),
        l(h, (e) => e.getClientExtensionResults());
      var E = {
          mediation: u(i),
          publicKey: c({
            challenge: c(a),
            timeout: u(i),
            rpId: u(i),
            allowCredentials: u([d]),
            userVerification: u(i),
            extensions: u(_),
          }),
          signal: u(i),
        },
        p = {
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
          clientExtensionResults: l(h, (e) => e.getClientExtensionResults()),
        };
      function g(e) {
        return o(s, E, e);
      }
      async function f(e) {
        let t = await navigator.credentials.get(e);
        return (t.toJSON = () => o(r, p, t)), t;
      }
    },
  },
]);
//# sourceMappingURL=46cbfcdf697afcc47cd2.js.map
