"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68122"],
  {
    863942: function (e, t, n) {
      var i = n(22092);
      (0, n(192291).exportTypedArrayStaticMethod)("from", n(12367), i);
    },
    70519: function (e) {
      e.exports = "/assets/76a4af59aa173c519461.svg";
    },
    806848: function (e) {
      e.exports = "/assets/6183fdc13d8046fd5bda.svg";
    },
    231443: function (e) {
      e.exports = "/assets/e04bcb7316f7205e85fb.svg";
    },
    512266: function (e) {
      e.exports = "/assets/a2d51a24d014f52f83a6.png";
    },
    105020: function (e) {
      e.exports = "/assets/89ea0e62d0f8ffa67a17.svg";
    },
    262467: function (e) {
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
      var i = n(200651),
        r = n(192379),
        s = n(593473),
        a = n(990547),
        l = n(873546),
        o = n(442837),
        c = n(570140),
        u = n(893776),
        d = n(533307),
        h = n(447543),
        g = n(126399),
        m = n(521379),
        p = n(765717),
        f = n(267394),
        _ = n(761305),
        x = n(698177),
        E = n(353926),
        v = n(409059),
        I = n(962220),
        b = n(637776),
        N = n(264229),
        C = n(677760),
        S = n(893607),
        T = n(314897),
        A = n(82142),
        Z = n(701190),
        j = n(626135),
        R = n(81063),
        O = n(449934),
        L = n(768581),
        P = n(625054),
        y = n(645499),
        D = n(320830),
        k = n(721751),
        M = n(718182),
        w = n(223543),
        B = n(73906),
        G = n(299852),
        U = n(39514),
        F = n(236446),
        z = n(9325),
        V = n(344295),
        K = n(781428),
        H = n(209411),
        W = n(649156),
        q = n(423527),
        Y = n(424044),
        J = n(479495),
        X = n(881317),
        Q = n(886806),
        $ = n(981631),
        ee = n(188785),
        et = n(245335);
      n(179645);
      o.ZP.initialize();
      let en = (0, D.Z)(K.Z),
        ei = (0, D.Z)(H.Z),
        er = (0, D.Z)(V.Z),
        es = (0, D.Z)(F.Z),
        ea = (0, D.Z)(U.Z),
        el = (0, D.Z)(C.Z),
        eo = (0, D.Z)(q.Z),
        ec = (0, D.Z)(M.Z),
        eu = (0, D.Z)(w.Z),
        ed = (0, D.Z)(Q.Z),
        eh = (0, D.Z)(x.Z),
        eg = (0, D.Z)(J.Z),
        em = (0, D.Z)(G.Z),
        ep = (0, D.Z)(_.Z),
        ef = (0, D.Z)(b.Z),
        e_ = (0, D.Z)(B.Z),
        ex = (0, D.Z)(W.Z),
        eE = (0, D.Z)(X.Z),
        ev = (0, D.Z)(Y.Z),
        eI = (0, D.Z)(m.Z);
      class eb extends r.PureComponent {
        static getDerivedStateFromProps(e, t) {
          var n;
          let { invite: i, location: r } = e,
            { backgroundId: a } = t,
            l =
              null !== (n = (0, s.parse)(r.search).redirect_to) && void 0 !== n
                ? n
                : null;
          (null == l || "" === l || !(0, y.B)(l) || l.startsWith($.Z5c.ME)) &&
            (l = null);
          let o = null;
          if (null == i) o = (0, O.gK)(l);
          else if ((null == i ? void 0 : i.state) === $.r2o.RESOLVED) {
            let { guild: e, target_application: t } = i;
            null != t
              ? null != a && (o = (0, R.getAssetImage)(t.id, a, 1024))
              : null != e &&
                "string" == typeof e.splash &&
                (o = L.ZP.getGuildSplashURL({ id: e.id, splash: e.splash }));
          }
          return { redirectTo: l, splash: o };
        }
        componentDidMount() {
          let {
            inviteKey: e,
            hasLoadedExperiments: t,
            isAuthenticated: n,
          } = this.props;
          null != e &&
            (!t && n && u.Z.getExperiments(!0),
            j.default.track(
              $.rMx.INVITE_OPENED,
              {
                invite_code: (0, N.jX)(e),
                load_time: P.Z.getTimeSinceNavigationStart(),
              },
              { flush: !0 },
            )),
            (t || ee.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            g.Z.initialize();
        }
        componentDidUpdate(e) {
          var t, n;
          !e.hasLoadedExperiments &&
            this.props.hasLoadedExperiments &&
            !ee.a &&
            this.resolveInvite(),
            (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !==
              (null === (n = this.props.invite) || void 0 === n
                ? void 0
                : n.state) && this.maybeFetchApplicationSplash();
        }
        componentWillUnmount() {
          g.Z.terminate();
        }
        maybeFetchApplicationSplash() {
          let { invite: e } = this.props;
          if ((null == e ? void 0 : e.state) === $.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
              (0, R.fetchAssetIds)(t.id, ["embedded_splash"]).then((e) => {
                let [t] = e;
                return this.setState({ backgroundId: t });
              });
          }
        }
        async resolveInvite() {
          let { inviteKey: e } = this.props;
          if (null == e) return;
          let { invite: t } = await h.Z.resolveInvite(e, $.Usc.INVITE);
          null != t &&
            ((0, f.A)(t),
            null != t.type && et.xf.has(t.type) && h.Z.openNativeAppModal(e));
        }
        resolveGuildTemplate() {
          let { guildTemplateCode: e } = this.props;
          if (null != e)
            j.default.track(
              $.rMx.GUILD_TEMPLATE_OPENED,
              {
                guild_template_code: e,
                load_time: P.Z.getTimeSinceNavigationStart(),
              },
              { flush: !0 },
            ),
              I.Z.resolveGuildTemplate(e),
              I.Z.openNativeAppModal(e);
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
          return (0, i.jsxs)(k.Z, {
            splash: e,
            children: [
              (0, i.jsx)(p.Z, {
                path: $.Z5c.LOGIN_HANDOFF,
                render: (e) => (0, i.jsx)(ei, { ...e, redirectTo: t }),
              }),
              (0, i.jsx)(p.Z, {
                impressionName: a.ImpressionNames.USER_LOGIN,
                path: $.Z5c.LOGIN,
                render: (e) => (0, i.jsx)(en, { ...e, redirectTo: t }),
              }),
              (0, i.jsx)(p.Z, {
                impressionName: a.ImpressionNames.USER_REGISTRATION,
                path: $.Z5c.REGISTER,
                render: (e) =>
                  ee.a
                    ? (0, i.jsx)(er, { ...e, redirectTo: t, inviteKey: n })
                    : (0, i.jsx)(eo, { ...e, redirectTo: t }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                render: (e) => (0, i.jsx)(ea, { login: !0, ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.GIFT_CODE(":giftCode"),
                render: (e) => (0, i.jsx)(ea, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: [
                  $.Z5c.INVITE_LOGIN(":inviteCode"),
                  $.Z5c.INVITE(":inviteCode"),
                ],
                render: (e) => {
                  let {
                      match: {
                        params: { inviteCode: t },
                        path: n,
                      },
                      location: r,
                      transitionTo: s,
                    } = e,
                    a = (0, N.mb)(t, r.search);
                  return l.tq || l.Em
                    ? (0, i.jsx)(el, { inviteKey: a, transitionTo: s }, a)
                    : (0, i.jsx)(er, {
                        inviteKey: a,
                        location: r,
                        transitionTo: s,
                        login: n === $.Z5c.INVITE_LOGIN(":inviteCode"),
                      });
                },
              }),
              (0, i.jsx)(p.Z, {
                path: [
                  $.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                  $.Z5c.GUILD_TEMPLATE(":guildTemplateCode"),
                ],
                render: (e) => {
                  let {
                    match: {
                      params: { guildTemplateCode: t },
                      path: n,
                    },
                    location: r,
                    transitionTo: s,
                  } = e;
                  return l.tq || l.Em
                    ? (0, i.jsx)(z.Z, { code: t }, t)
                    : (0, i.jsx)(es, {
                        code: t,
                        location: r,
                        transitionTo: s,
                        login:
                          n ===
                          $.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                      });
                },
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.VERIFY,
                render: (e) => (0, i.jsx)(ed, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.VERIFY_HUB_EMAIL,
                render: (e) => (0, i.jsx)(ef, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.VERIFY_REQUEST,
                render: (e) => (0, i.jsx)(eh, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                render: (e) => (0, i.jsx)(em, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                render: (e) => (0, i.jsx)(ep, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.AUTHORIZE_IP,
                render: (e) => (0, i.jsx)(ec, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.REJECT_IP,
                render: (e) =>
                  (0, i.jsx)(eg, { source: $.Z5c.REJECT_IP, ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.REJECT_MFA,
                render: (e) =>
                  (0, i.jsx)(eg, { source: $.Z5c.REJECT_MFA, ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.AUTHORIZE_PAYMENT,
                render: (e) => (0, i.jsx)(eu, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.RESET,
                render: (e) => (0, i.jsx)(eg, { source: $.Z5c.RESET, ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                render: (e) => (0, i.jsx)(ex, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.CHANNEL(
                  S.Hw.guildId(),
                  S.Hw.channelId({ optional: !0 }),
                  ":messageId?",
                ),
                render: (e) => (0, i.jsx)(e_, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.REPORT,
                render: (e) => (0, i.jsx)(eE, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.REPORT_SECOND_LOOK,
                render: (e) => (0, i.jsx)(ev, { ...e }),
              }),
              (0, i.jsx)(p.Z, {
                path: $.Z5c.ACCOUNT_REVERT(":token"),
                render: (e) => (0, i.jsx)(eI, { ...e }),
              }),
            ],
          });
        }
        constructor(...e) {
          var t, n, i;
          super(...e),
            (t = this),
            (i = { splash: null, redirectTo: null, backgroundId: null }),
            (n = "state") in t
              ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = i);
        }
      }
      t.default = o.ZP.connectStores([T.default, Z.Z, A.Z, E.Z, v.Z], (e) => {
        var t, n, i;
        let { match: r, location: s } = e,
          a =
            null == r
              ? void 0
              : null === (t = r.params) || void 0 === t
                ? void 0
                : t.inviteCode,
          l = ee.a ? ee.Y : void 0,
          o = null != a ? (0, N.mb)(a, s.search) : l,
          c =
            null == r
              ? void 0
              : null === (n = r.params) || void 0 === n
                ? void 0
                : n.giftCode,
          u =
            null == r
              ? void 0
              : null === (i = r.params) || void 0 === i
                ? void 0
                : i.guildTemplateCode;
        return {
          inviteKey: o,
          isAuthenticated: T.default.isAuthenticated(),
          giftCode: c,
          guildTemplateCode: u,
          gift: null != c ? A.Z.get(c) : null,
          invite: null != o ? Z.Z.getInvite(o) : null,
          guildTemplate: null != u ? v.Z.getGuildTemplate(u) : null,
          hasLoadedExperiments: E.Z.hasLoadedExperiments,
        };
      })(eb);
    },
    320830: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(954955),
        a = n.n(s),
        l = n(748780),
        o = n(873546),
        c = n(477690),
        u = n(481060),
        d = n(624138),
        h = n(319523);
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
      let m = (0, d.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        p = { START: 0, END: 1 },
        f = { friction: 10, tension: 130 };
      t.Z = function (e) {
        return class extends r.Component {
          componentDidMount() {
            !o.tq &&
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
            l.Z.spring(this.anim, { toValue: e, ...f }).start(t);
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
            return (0, i.jsx)("div", {
              className: h.wrapper,
              children: (0, i.jsx)(u.AccessibilityPreferencesContext.Consumer, {
                children: (t) => {
                  let { reducedMotion: n } = t;
                  return (0, i.jsx)(l.Z.div, {
                    style: this.getAnimatedStyle(n.enabled),
                    children: (0, i.jsx)(e, { ...this.props }),
                  });
                },
              }),
            });
          }
          constructor(...e) {
            super(...e),
              g(this, "timeout", void 0),
              g(this, "anim", new l.Z.Value(p.START)),
              g(this, "state", { shouldAnimate: !o.tq }),
              g(this, "handleResize", () => {
                let e = window.innerWidth > m;
                !this.state.shouldAnimate && e && this.anim.setValue(p.END),
                  this.setState({ shouldAnimate: e });
              }),
              g(this, "handleResizeDebounced", a()(this.handleResize, 60));
          }
        };
      };
    },
    721751: function (e, t, n) {
      let i;
      n(47120);
      var r = n(200651),
        s = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(873546),
        c = n(442837),
        u = n(481060),
        d = n(980591),
        h = n(605782),
        g = n(133853),
        m = n(568154),
        p = n(353926),
        f = n(703656),
        _ = n(981631),
        x = n(929319);
      let E = n(575703),
        v = n(2984),
        I = [
          _.Z5c.LOGIN,
          _.Z5c.LOGIN_HANDOFF,
          _.Z5c.REGISTER,
          _.Z5c.INVITE(""),
          _.Z5c.GIFT_CODE(""),
          _.Z5c.GUILD_TEMPLATE_LOGIN(""),
          _.Z5c.GUILD_TEMPLATE(""),
          _.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
          _.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
          _.Z5c.BILLING_PREMIUM_SUBSCRIBE,
          _.Z5c.BILLING_PAYMENT_SOURCES_CREATE,
          _.Z5c.BILLING_PAYMENTS,
          _.Z5c.BILLING_PREMIUM_SWITCH_PLAN,
          _.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
          _.Z5c.VERIFY,
          _.Z5c.VERIFY_HUB_EMAIL,
          _.Z5c.REJECT_IP,
          _.Z5c.REJECT_MFA,
          _.Z5c.AUTHORIZE_IP,
          _.Z5c.AUTHORIZE_PAYMENT,
          _.Z5c.RESET,
          _.Z5c.HANDOFF,
          _.Z5c.REPORT,
          _.Z5c.REPORT_SECOND_LOOK,
          _.Z5c.ACCOUNT_REVERT(""),
        ];
      function b(e) {
        return I.some((t) => e.startsWith(t));
      }
      let N = (e) => ((i = e), e);
      function C(e) {
        let { children: t } = e;
        switch (
          (function () {
            let [e, t] = s.useState(!1),
              [n, r] = s.useState(true),
              a = (function () {
                return null;
              })(),
              l = (0, c.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, d.Z)(() => {}, 300), void 0 !== i)
              ? i
              : !n && l
                ? (!e && t(!0),
                  N(
                    (function (e) {
                      return "default";
                    })(a),
                  ))
                : n
                  ? N("default")
                  : "loading";
          })()
        ) {
          case "default":
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("img", { className: x.artwork, src: E, alt: "" }),
                (0, r.jsx)("img", {
                  className: x.logoWithText,
                  src: v,
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
      class S extends s.Component {
        componentDidMount() {
          window.addEventListener("resize", this.handleResize);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        mobileTransitionTo(e, t) {
          if (b(e)) (0, f.uL)(e, t);
          else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
          }
        }
        mobileReplaceWith(e) {
          b(e) ? (0, f.dL)(e) : (window.location = e);
        }
        renderDefault() {
          let { splash: e } = this.props,
            t = (0, r.jsx)(h.Z, {
              component: s.Fragment,
              children: s.Children.map(this.props.children, (e) =>
                s.cloneElement(e, { transitionTo: f.uL, replaceWith: f.dL }),
              ),
            });
          return (0, r.jsx)("div", {
            className: x.characterBackground,
            children: (0, r.jsx)(u.HeadingLevel, {
              forceLevel: 1,
              children:
                null != e
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(g.Z, { show: !0, className: l()(x.logo) }),
                        (0, r.jsx)(m.h, { splash: e, children: t }),
                      ],
                    })
                  : (0, r.jsx)(C, { children: t }),
            }),
          });
        }
        renderMobile() {
          return (0, r.jsx)(h.Z, {
            component: s.Fragment,
            children: s.Children.map(this.props.children, (e) =>
              s.cloneElement(e, {
                transitionTo: this.mobileTransitionTo,
                replaceWith: this.mobileReplaceWith,
              }),
            ),
          });
        }
        render() {
          let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes("GameLauncher");
          return e || o.tq || o.Em || t
            ? this.renderMobile()
            : this.renderDefault();
        }
        constructor(e) {
          var t, n, i;
          super(e),
            (t = this),
            (n = "handleResize"),
            (i = () => {
              this.setState({ isMobileWidth: window.innerWidth <= 485 });
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = i),
            (this.state = { isMobileWidth: window.innerWidth <= 485 });
        }
      }
      t.Z = S;
    },
    718182: function (e, t, n) {
      var i,
        r,
        s,
        a,
        l = n(200651),
        o = n(192379),
        c = n(525654),
        u = n.n(c),
        d = n(442837),
        h = n(893776),
        g = n(129293),
        m = n(388905),
        p = n(108427),
        f = n(314897),
        _ = n(981631),
        x = n(388032),
        E = n(971436);
      d.ZP.initialize();
      class v extends (a = o.PureComponent) {
        componentDidMount() {
          let e = (0, g.Z)(this.props.location);
          null != e && h.Z.authorizeIPAddress(e), (0, p.e)("authorize_ip");
        }
        renderLoginButton() {
          if ("Android" === u().os.family || "iOS" === u().os.family)
            return null;
          let { transitionTo: e } = this.props;
          return (0, l.jsx)(m.zx, {
            onClick: () => e(_.Z5c.LOGIN),
            children: x.intl.string(x.t.dKhVQE),
          });
        }
        renderFailed() {
          return (0, l.jsxs)(m.ZP, {
            children: [
              (0, l.jsx)("img", {
                alt: "",
                src: n(262467),
                className: E.marginBottom20,
              }),
              (0, l.jsx)(m.Dx, {
                className: E.marginBottom8,
                children: x.intl.string(x.t["f/54a2"]),
              }),
              (0, l.jsx)(m.DK, {
                className: E.marginBottom40,
                children: x.intl.string(x.t.i3ehMj),
              }),
              this.renderLoginButton(),
            ],
          });
        }
        renderSucceeded() {
          return (0, l.jsxs)(m.ZP, {
            children: [
              (0, l.jsx)("img", {
                alt: "",
                src: n(640356),
                className: E.marginBottom20,
              }),
              (0, l.jsx)(m.Dx, {
                className: E.marginBottom8,
                children: x.intl.string(x.t.iG0SlJ),
              }),
              (0, l.jsx)(m.DK, {
                className: E.marginBottom40,
                children: x.intl.string(x.t["Elv+qq"]),
              }),
              this.renderLoginButton(),
            ],
          });
        }
        renderDefault() {
          return (0, l.jsxs)(m.ZP, {
            children: [
              (0, l.jsx)(m.Hh, {}),
              (0, l.jsx)(m.Dx, { children: x.intl.string(x.t["9exy+f"]) }),
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
      (i = v),
        (r = "defaultProps"),
        (s = { transitionTo: (e) => n.g.location.assign(e) }),
        r in i
          ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = s),
        (t.Z = d.ZP.connectStores([f.default], () => ({
          verifyFailed: f.default.didVerifyFail(),
          verifySucceeded: f.default.didVerifySucceed(),
        }))(v));
    },
    223543: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        s = n(442837),
        a = n(893776),
        l = n(129293),
        o = n(388905),
        c = n(108427),
        u = n(314897),
        d = n(388032),
        h = n(971436);
      t.Z = (e) => {
        let { location: t } = e,
          { verifyFailed: g, verifySucceeded: m } = (0, s.cj)(
            [u.default],
            () => ({
              verifyFailed: u.default.didVerifyFail(),
              verifySucceeded: u.default.didVerifySucceed(),
            }),
          );
        return (r.useEffect(() => {
          let e = (0, l.Z)(t);
          null != e && a.Z.authorizePayment(e), (0, c.e)("authorize_payment");
        }, [t]),
        g)
          ? (0, i.jsxs)(o.ZP, {
              children: [
                (0, i.jsx)("img", {
                  alt: "",
                  src: n(375673),
                  className: h.marginBottom20,
                }),
                (0, i.jsx)(o.Dx, {
                  className: h.marginBottom8,
                  children: d.intl.string(d.t.GHRpub),
                }),
                (0, i.jsx)(o.DK, {
                  className: h.marginBottom40,
                  children: d.intl.string(d.t["1nO55u"]),
                }),
              ],
            })
          : m
            ? (0, i.jsxs)(o.ZP, {
                children: [
                  (0, i.jsx)("img", {
                    alt: "",
                    src: n(73962),
                    className: h.marginBottom20,
                  }),
                  (0, i.jsx)(o.Dx, {
                    className: h.marginBottom8,
                    children: d.intl.string(d.t["ihHX5+"]),
                  }),
                  (0, i.jsx)(o.DK, {
                    className: h.marginBottom40,
                    children: d.intl.string(d.t.pGPCv7),
                  }),
                ],
              })
            : (0, i.jsxs)(o.ZP, {
                children: [
                  (0, i.jsx)(o.Hh, {}),
                  (0, i.jsx)(o.Dx, { children: d.intl.string(d.t.T3vC7u) }),
                ],
              });
      };
    },
    73906: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(3570),
        s = n(685311),
        a = n(186901);
      t.Z = function (e) {
        let { match: t, location: n } = e,
          l = async (e, t) => {
            await (0, r.s)(a.jE.CHANNEL, {
              guildId: e.params.guildId,
              channelId: e.params.channelId,
              messageId: e.params.messageId,
              search: t.search,
            });
          };
        return (0, i.jsx)(s.Z, { match: t, location: n, attemptDeepLink: l });
      };
    },
    685311: function (e, t, n) {
      n(47120);
      var i,
        r,
        s = n(200651),
        a = n(192379),
        l = n(120356),
        o = n.n(l),
        c = n(536285),
        u = n(857458),
        d = n(388905),
        h = n(703656),
        g = n(388032),
        m = n(971436);
      ((r = i || (i = {}))[(r.INITIAL = 0)] = "INITIAL"),
        (r[(r.RPC_CONNECTED = 1)] = "RPC_CONNECTED"),
        (r[(r.APP_OPENING = 2)] = "APP_OPENING"),
        (r[(r.APP_OPENED = 3)] = "APP_OPENED");
      t.Z = function (e) {
        let { match: t, location: n, attemptDeepLink: i } = e,
          [r, l] = a.useState(0);
        a.useEffect(() => {
          c.default.once("connected", () => {
            l(1);
          }),
            c.default.once("disconnected", () => {
              (0, h.uL)((0, u.M)());
            }),
            c.default.connect();
        }, []),
          a.useEffect(() => {
            if (0 !== r) return;
            let e = setTimeout(() => (0, h.uL)((0, u.M)()), 3e3);
            return () => clearTimeout(e);
          }, [r]);
        let p = a.useCallback(
          async (e, t) => {
            try {
              l(2), await i(e, t), l(3);
            } catch (e) {
              console.error("Error opening deeplink", e);
            }
          },
          [i],
        );
        if ((0, h.DB)()) return null;
        switch (r) {
          case 1:
            return (0, s.jsxs)(d.ZP, {
              children: [
                (0, s.jsx)(d.Dx, {
                  className: m.marginBottom8,
                  children: g.intl.string(g.t.qllnGh),
                }),
                (0, s.jsx)(d.DK, { children: g.intl.string(g.t.SXCxyc) }),
                (0, s.jsx)(d.zx, {
                  className: m.marginTop40,
                  onClick: () => p(t, n),
                  children: g.intl.string(g.t.UQvCf3),
                }),
                (0, s.jsx)(d.zx, {
                  className: o()(m.marginTop8, m.marginCenterHorz),
                  color: d.zx.Colors.LINK,
                  look: d.zx.Looks.LINK,
                  onClick: () => (0, h.uL)((0, u.M)()),
                  children: g.intl.string(g.t["2ixEBg"]),
                }),
              ],
            });
          case 0:
          case 2:
            return (0, s.jsxs)(d.ZP, {
              children: [
                (0, s.jsx)(d.Dx, { children: g.intl.string(g.t["Z+hCVV"]) }),
                (0, s.jsx)(d.Hh, {}),
              ],
            });
          case 3:
            return (0, s.jsxs)(d.ZP, {
              children: [
                (0, s.jsx)(d.Dx, {
                  className: m.marginBottom8,
                  children: g.intl.string(g.t.csrAMD),
                }),
                (0, s.jsx)(d.DK, { children: g.intl.string(g.t.ghBJz8) }),
              ],
            });
        }
      };
    },
    299852: function (e, t, n) {
      n(47120);
      var i,
        r = n(200651),
        s = n(192379),
        a = n(593473),
        l = n(442837),
        o = n(544891),
        c = n(481060),
        u = n(129293),
        d = n(388905),
        h = n(108427),
        g = n(598077),
        m = n(896797),
        p = n(981631),
        f = n(930441),
        _ = n(388032),
        x = n(971436);
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
      l.ZP.initialize();
      class v extends (i = s.PureComponent) {
        componentDidMount() {
          let e = (0, u.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
          o.tn
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
                  i = new g.Z(n);
                this.setState({
                  success: !0,
                  busy: !1,
                  user: i,
                  category: t.category,
                });
              },
              () => this.setState({ success: !1, busy: !1 }),
            ),
            (0, h.e)("disable_email_notifications");
        }
        renderBusy() {
          return (0, r.jsx)(d.ZP, { children: (0, r.jsx)(d.Hh, {}) });
        }
        renderCategorySuccess(e, t) {
          let { defaultRoute: n, transitionTo: i } = this.props,
            s = _.intl.formatToPlainString(_.t.YDAohI, { category: t });
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.Dx, {
                className: x.marginBottom8,
                children: _.intl.string(_.t.f6rdLi),
              }),
              (0, r.jsx)(d.DK, { children: s }),
              (0, r.jsx)(d.zx, {
                className: x.marginTop20,
                onClick: () => i(n),
                children: _.intl.string(_.t.fIv16O),
              }),
              (0, r.jsx)(d.zx, {
                className: x.marginTop8,
                color: d.zx.Colors.LINK,
                look: d.zx.Looks.LINK,
                onClick: () => i(p.Z5c.SETTINGS("notifications", f.vG)),
                children: _.intl.string(_.t.YYTira),
              }),
            ],
          });
        }
        renderSuccess() {
          let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
          if (null != i) {
            let e = f.Od.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
          }
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.qE, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                size: c.AvatarSizes.DEPRECATED_SIZE_100,
                className: x.marginBottom20,
              }),
              (0, r.jsx)(d.Dx, {
                className: x.marginBottom8,
                children: _.intl.string(_.t["6U6OMT"]),
              }),
              (0, r.jsx)(d.DK, { children: _.intl.string(_.t["yaDJ4+"]) }),
              (0, r.jsx)(d.zx, {
                className: x.marginTop40,
                onClick: () => t(e),
                children: _.intl.string(_.t.fIv16O),
              }),
            ],
          });
        }
        renderError() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.Ee, { src: n(105020), className: x.marginBottom20 }),
              (0, r.jsx)(d.Dx, {
                className: x.marginBottom8,
                children: _.intl.string(_.t.ox9hIS),
              }),
              (0, r.jsx)(d.DK, { children: _.intl.string(_.t["/dcuR0"]) }),
              (0, r.jsx)(d.zx, {
                className: x.marginTop40,
                onClick: () => t(e),
                children: _.intl.string(_.t.fIv16O),
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
            E(this, "state", {
              busy: !0,
              success: !1,
              user: null,
              category: null,
            });
        }
      }
      E(v, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) }),
        (t.Z = l.ZP.connectStores([m.Z], () => ({
          defaultRoute: m.Z.defaultRoute,
        }))(v));
    },
    39514: function (e, t, n) {
      n(47120), n(411104);
      var i,
        r,
        s = n(200651),
        a = n(192379),
        l = n(120356),
        o = n.n(l),
        c = n(442837),
        u = n(570140),
        d = n(893776),
        h = n(533307),
        g = n(978085),
        m = n(232567),
        p = n(388905),
        f = n(362762),
        _ = n(108427),
        x = n(314897),
        E = n(896797),
        v = n(82142),
        I = n(283595),
        b = n(55563),
        N = n(669079),
        C = n(63063),
        S = n(51144),
        T = n(481153),
        A = n(781428),
        Z = n(423527),
        j = n(981631),
        R = n(388032),
        O = n(971436);
      function L(e, t, n) {
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
        ((r = i || (i = {})).REGISTER = "register"),
        (r.LOGIN = "login");
      class P extends a.PureComponent {
        componentDidMount() {
          let { authenticated: e, isResolved: t } = this.props;
          e && this.handleAuthenticated(),
            !t && this.resolveGiftCode(),
            (0, _.e)("gift_code");
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
          g.b8(), null == e && this.refreshUser();
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
            { error: i } = this.state,
            r = null != i ? i.code : null;
          return r === j.evJ.INVALID_GIFT_SELF_REDEMPTION
            ? R.intl.string(R.t.wa9h7O)
            : r === j.evJ.INVALID_GIFT_REDEMPTION_OWNED &&
                (null == n ? void 0 : n.productLine) === j.POd.COLLECTIBLES
              ? R.intl.string(R.t.mdLtb2)
              : null != t || r === j.evJ.INVALID_GIFT_REDEMPTION_OWNED
                ? R.intl.format(R.t.PIdmg4, {
                    libraryLink: j.Z5c.APPLICATION_LIBRARY,
                  })
                : e.isClaimed || r === j.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? R.intl.string(R.t.ilcBeX)
                  : r === j.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? R.intl.string(R.t.ypuSd3)
                    : void 0;
        }
        renderSpinner(e) {
          return (0, s.jsxs)(p.ZP, {
            children: [(0, s.jsx)(p.Dx, { children: e }), (0, s.jsx)(p.Hh, {})],
          });
        }
        renderExpiredInvite() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, s.jsxs)(p.ZP, {
            children: [
              (0, s.jsx)(p.Ee, { src: n(167969), className: O.marginBottom8 }),
              (0, s.jsx)(p.Dx, {
                className: o()(O.marginTop8, O.marginBottom8),
                children: R.intl.string(R.t.KPowgo),
              }),
              (0, s.jsx)(p.DK, { children: R.intl.string(R.t.j8734e) }),
              (0, s.jsx)(p.zx, {
                className: o()(O.marginTop40, O.marginBottom8),
                onClick: () => t(e),
                children: R.intl.string(R.t.fIv16O),
              }),
              (0, s.jsx)(p.zx, {
                onClick: () =>
                  window.open(C.Z.getArticleURL(j.BhN.GIFTING), "_blank"),
                look: p.zx.Looks.LINK,
                color: p.zx.Colors.LINK,
                children: R.intl.string(R.t["/CjuXF"]),
              }),
            ],
          });
        }
        renderAppOpened() {
          return (0, s.jsxs)(p.ZP, {
            children: [
              (0, s.jsx)(p.Dx, {
                className: O.marginBottom8,
                children: R.intl.string(R.t.csrAMD),
              }),
              (0, s.jsx)(p.DK, { children: R.intl.string(R.t["m1+IBg"]) }),
              (0, s.jsx)(p.zx, {
                className: O.marginTop40,
                onClick: () => this.setState({ continueOnWeb: !0 }),
                children: R.intl.string(R.t["qsI+EB"]),
              }),
            ],
          });
        }
        renderVerification(e) {
          let { sentVerification: t } = this.state;
          return (0, s.jsxs)(p.ZP, {
            children: [
              (0, s.jsx)(p.Ee, { src: n(892235), className: O.marginBottom8 }),
              (0, s.jsx)(p.Dx, {
                children: R.intl.format(R.t.ivLUf3, { username: e.username }),
              }),
              (0, s.jsx)(p.DK, {
                className: O.marginTop20,
                children: R.intl.string(R.t["8Su18/"]),
              }),
              (0, s.jsx)(p.zx, {
                disabled: t,
                className: O.marginTop40,
                onClick: this.handleResendVerification,
                children: t
                  ? R.intl.string(R.t.CMa9Rk)
                  : R.intl.string(R.t.lm1UKi),
              }),
              (0, s.jsx)(p.zx, {
                look: p.zx.Looks.LINK,
                color: p.zx.Colors.LINK,
                onClick: this.refreshUser,
                className: O.marginTop8,
                children: R.intl.string(R.t.Po9eBQ),
              }),
            ],
          });
        }
        renderAuthenticated(e, t) {
          let n = this.getErrorMessage(e);
          return (0, s.jsxs)(p.ZP, {
            children: [
              (0, s.jsx)(T.Z, { giftCode: e }),
              (0, s.jsx)(p.zx, {
                disabled: null != n,
                className: O.marginTop40,
                onClick: this.handleAccept,
                children: R.intl.string(R.t.n6I6k5),
              }),
              null != n
                ? (0, s.jsx)(p.DK, { className: O.marginTop20, children: n })
                : (0, s.jsx)(p.i_, {
                    className: O.marginTop20,
                    children: R.intl.format(R.t.NYM08v, {
                      userTag: S.ZP.getUserTag(t),
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
              giftCode: i,
              isResolved: r,
              isAccepting: a,
              transitionTo: l,
              location: o,
            } = this.props,
            { fetchingUser: c, continueOnWeb: u } = this.state;
          if (e === j.kEZ.OPEN && !u) return this.renderAppOpened();
          if (e === j.kEZ.OPENING)
            return this.renderSpinner(R.intl.string(R.t["Z+hCVV"]));
          if (a) return this.renderSpinner(R.intl.string(R.t.bhJseH));
          if (null == i)
            return r
              ? this.renderExpiredInvite()
              : this.renderSpinner(R.intl.string(R.t.b3lf1d));
          if (r) {
            if (n) {
              let e = this.state.currentUser;
              return c || null == e
                ? this.renderSpinner(R.intl.string(R.t.bYb2nZ))
                : this.requiresVerification && null != e
                  ? this.renderVerification(e)
                  : this.renderAuthenticated(i, e);
            }
            return "login" === this.getMode()
              ? (0, s.jsx)(A.Z, {
                  giftCodeSKU: t,
                  giftCode: i,
                  transitionTo: l,
                  location: o,
                })
              : (0, s.jsx)(Z.Z, {
                  giftCodeSKU: t,
                  giftCode: i,
                  transitionTo: l,
                  location: o,
                });
          }
          return null;
        }
        constructor(...e) {
          super(...e),
            L(this, "state", {
              error: null,
              continueOnWeb: !1,
              currentUser: null,
              sentVerification: !1,
              fetchingUser: !1,
            }),
            L(this, "refreshUser", () => {
              this.setState({ fetchingUser: !0 }),
                m
                  .k({ withAnalyticsToken: !0 })
                  .then((e) =>
                    this.setState({ currentUser: e, fetchingUser: !1 }),
                  )
                  .catch(() => this.setState({ fetchingUser: !1 }));
            }),
            L(this, "handleLogout", () => {
              let e = this.props.match.params.giftCode;
              d.Z.logout(j.Z5c.GIFT_CODE_LOGIN(e));
            }),
            L(this, "handleResendVerification", () => {
              d.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            L(this, "handleAccept", async () => {
              let { transitionTo: e, giftCode: t } = this.props;
              if (null == t)
                throw Error("Trying to accept gift before resolve");
              let n = this.getCode();
              try {
                this.setState({ error: null }),
                  await h.Z.redeemGiftCode({ code: n }),
                  e(j.Z5c.APP);
              } catch (e) {
                this.setState({ error: e });
              }
            }),
            L(this, "resolveGiftCode", () => {
              let { transitionTo: e } = this.props,
                t = this.getCode();
              h.Z.resolveGiftCode(t, !0, !0).then((n) => {
                null != n &&
                  null != n.giftCode.promotion &&
                  e(j.Z5c.BILLING_PROMOTION_REDEMPTION(t));
              });
            });
        }
      }
      t.Z = c.ZP.connectStores([v.Z, I.Z, x.default, b.Z, E.Z, f.Z], (e) => {
        let t = e.match.params.giftCode,
          n = v.Z.get(t),
          i = null != n ? b.Z.get(n.skuId) : null;
        return {
          giftCode: n,
          sku: i,
          libraryApplication:
            null != i && (null == n ? void 0 : n.entitlementBranches) != null
              ? N.z2(n.entitlementBranches, i, I.Z)
              : null,
          authenticated: x.default.isAuthenticated(),
          defaultRoute: E.Z.defaultRoute,
          isResolved: v.Z.getIsResolved(t),
          isAccepting: v.Z.getIsAccepting(t),
          libraryApplicationsFetched: I.Z.fetched,
          nativeAppState: f.Z.getState(t),
        };
      })(P);
    },
    481153: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        l = n(442837),
        o = n(481060),
        c = n(812206),
        u = n(388905),
        d = n(925329),
        h = n(479446),
        g = n(981632),
        m = n(594174),
        p = n(509545),
        f = n(55563),
        _ = n(296848),
        x = n(981631),
        E = n(474936),
        v = n(388032),
        I = n(98762),
        b = n(639944),
        N = n(971436);
      t.Z = l.ZP.connectStores([f.Z, c.Z, p.Z, m.default], (e) => {
        let { giftCode: t } = e,
          n = f.Z.get(t.skuId),
          { subscriptionPlanId: i } = t;
        return {
          sku: n,
          subscriptionPlan: null != i ? (0, _.oE)(i) : null,
          application: c.Z.getApplication(n.applicationId),
          gifter: m.default.getUser(t.userId),
        };
      })((e) => {
        let {
            error: t,
            giftCode: n,
            gifter: s,
            sku: l,
            application: c,
            subscriptionPlan: m,
          } = e,
          p =
            null == s
              ? v.intl.string(v.t.lTGZAg)
              : v.intl.formatToPlainString(v.t.TjWdPT, {
                  username: s.username,
                }),
          f = l.name;
        return (
          null != m &&
            (f = v.intl.formatToPlainString(
              m.interval === E.rV.MONTH ? v.t.CTpcCQ : v.t.rgPWGx,
              { skuName: l.name, intervalCount: m.intervalCount },
            )),
          (0, i.jsxs)(r.Fragment, {
            children: [
              null != n.giftStyle
                ? (0, i.jsx)(g.Z, {
                    defaultAnimationState: h.SR.LOOP,
                    giftStyle: n.giftStyle,
                    className: I.seasonalIcon,
                  })
                : (0, i.jsx)(u.qE, {
                    src: null != s ? s.getAvatarURL(void 0, 100) : null,
                    size: o.AvatarSizes.DEPRECATED_SIZE_100,
                    className: N.marginBottom20,
                  }),
              null != t
                ? (0, i.jsxs)(r.Fragment, {
                    children: [
                      (0, i.jsx)(u.DK, { children: v.intl.string(v.t.mDFGFh) }),
                      (0, i.jsx)(u.Dx, { children: t }),
                    ],
                  })
                : (0, i.jsxs)(r.Fragment, {
                    children: [
                      (0, i.jsx)(u.DK, { children: p }),
                      (0, i.jsxs)(u.Dx, {
                        className: a()(N.marginTop8, b.flexCenter),
                        children: [
                          l.productLine !== x.POd.COLLECTIBLES &&
                            (0, i.jsx)(d.Z, {
                              size: d.Z.Sizes.MEDIUM,
                              className: I.applicationIcon,
                              game: c,
                              skuId: l.id,
                            }),
                          f,
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
          return D;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        l = n(512722),
        o = n.n(l),
        c = n(442837),
        u = n(388905),
        d = n(362762),
        h = n(409059),
        g = n(659900),
        m = n(962220),
        p = n(473855),
        f = n(306453),
        _ = n(929809),
        x = n(108427),
        E = n(390885),
        v = n(314897),
        I = n(896797),
        b = n(954824),
        N = n(781428),
        C = n(163671),
        S = n(423527),
        T = n(981631),
        A = n(58346),
        Z = n(701476),
        j = n(630724),
        R = n(436620),
        O = n(388032),
        L = n(780811),
        P = n(971436);
      c.ZP.initialize();
      class y extends r.PureComponent {
        componentDidMount() {
          (0, x.e)("guildTemplate"),
            !R.KO &&
              b.Z.launch(
                "discord://" + T.Z5c.GUILD_TEMPLATE(this.props.code),
                () => void 0,
              );
        }
        componentDidUpdate(e) {
          this.props.code !== e.code &&
            m.Z.resolveGuildTemplate(this.props.code);
        }
        renderButton(e, t) {
          return R.KO
            ? (0, i.jsx)(u.zx, {
                className: P.marginTop40,
                onClick: t,
                children: e,
              })
            : (0, i.jsx)(u.v6, { className: P.marginTop40 });
        }
        renderSpinner(e) {
          return (0, i.jsxs)(u.ZP, {
            children: [(0, i.jsx)(u.Dx, { children: e }), (0, i.jsx)(u.Hh, {})],
          });
        }
        renderInvalidGuildTemplate() {
          return (0, i.jsxs)(u.ZP, {
            children: [
              (0, i.jsx)(u.Ee, { src: n(167969), className: P.marginBottom8 }),
              (0, i.jsx)(u.Dx, {
                className: a()(P.marginTop8, P.marginBottom8),
                children: O.intl.string(O.t.C7ZRNz),
              }),
              (0, i.jsx)(u.DK, { children: O.intl.string(O.t.A6MwXF) }),
              this.renderButton(O.intl.string(O.t.fIv16O), this.handleContinue),
            ],
          });
        }
        renderAppOpened() {
          return (0, i.jsxs)(u.ZP, {
            children: [
              (0, i.jsx)(u.Dx, {
                className: P.marginBottom8,
                children: O.intl.string(O.t.csrAMD),
              }),
              (0, i.jsx)(u.DK, { children: O.intl.string(O.t["m1+IBg"]) }),
              this.renderButton(O.intl.string(O.t.fIv16O), this.handleContinue),
            ],
          });
        }
        renderAuthenticatedOrDownload() {
          let { guildTemplate: e } = this.props;
          return (o()(null != e, "guild template must not be null"),
          e.state === A.Rj.RESOLVING)
            ? (0, i.jsx)(u.ZP, {
                className: L.authBox,
                children: (0, i.jsx)(f.Z, { guildTemplate: e }),
              })
            : (0, i.jsx)(k, { guildTemplate: e });
        }
        renderContinue() {
          return (0, i.jsxs)(u.ZP, {
            children: [
              (0, i.jsx)(u.Dx, { children: O.intl.string(O.t.fOc4go) }),
              this.renderButton(O.intl.string(O.t.fIv16O), this.handleContinue),
            ],
          });
        }
        render() {
          let {
            guildTemplate: e,
            nativeAppState: t,
            authenticated: n,
            transitionTo: r,
            location: s,
          } = this.props;
          if (null == e) return this.renderSpinner(O.intl.string(O.t.ZTNur6));
          if (t === T.kEZ.OPEN) return this.renderAppOpened();
          if (t === T.kEZ.OPENING)
            return this.renderSpinner(O.intl.string(O.t["Z+hCVV"]));
          switch (e.state) {
            case A.Rj.RESOLVING:
              return this.renderSpinner(O.intl.string(O.t["Z+hCVV"]));
            case A.Rj.RESOLVED:
              if (n || !R.KO) return this.renderAuthenticatedOrDownload();
              if (this.props.login)
                return (0, i.jsx)(N.Z, {
                  guildTemplate: e,
                  transitionTo: r,
                  location: s,
                });
              else
                return (0, i.jsx)(S.Z, {
                  guildTemplate: e,
                  transitionTo: r,
                  location: s,
                  onRegister: () => {
                    (0, _.c)(Z.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                      E.Z.flowStart(
                        j.MK.ORGANIC_GUILD_TEMPLATES,
                        j.EW.NUF_STARTED,
                      );
                  },
                });
            case A.Rj.EXPIRED:
              return this.renderInvalidGuildTemplate();
            default:
              return null;
          }
        }
        constructor(...e) {
          var t, n, i;
          super(...e),
            (t = this),
            (n = "handleContinue"),
            (i = () => {
              let { defaultRoute: e, transitionTo: t } = this.props;
              t(e);
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = i);
        }
      }
      function D(e) {
        let t = {
          guildTemplate: (0, c.e7)([h.Z], () => h.Z.getGuildTemplate(e.code)),
          nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
          authenticated: (0, c.e7)([v.default], () =>
            v.default.isAuthenticated(),
          ),
          defaultRoute: (0, c.e7)([I.Z], () => I.Z.defaultRoute),
        };
        return (0, i.jsx)(y, { ...e, ...t });
      }
      function k(e) {
        let { guildTemplate: t } = e,
          { form: n, handleSubmit: r } = (0, g.Z)(t, !1);
        E.Z.flowStep(j.MK.ORGANIC_GUILD_TEMPLATES, j.X2.GUILD_CREATE);
        let s = (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(u.Dx, {
              className: L.header,
              children: O.intl.string(O.t.UNFvtL),
            }),
            n,
            (0, i.jsx)(u.zx, {
              className: L.createButton,
              onClick: r,
              children: O.intl.string(O.t.xr59t7),
            }),
          ],
        });
        return (0, i.jsx)(C.Z, {
          className: L.authBox,
          children: () => [
            (0, i.jsx)(p.Z, { guildTemplate: t }, "template"),
            (0, i.jsx)(
              "div",
              { className: L.formContainer, children: s },
              "contents",
            ),
          ],
        });
      }
    },
    9325: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = n(200651),
        r = n(192379),
        s = n(442837),
        a = n(481060),
        l = n(388905),
        o = n(409059),
        c = n(962220),
        u = n(306453),
        d = n(108427),
        h = n(314897),
        g = n(626135),
        m = n(587444),
        p = n(981631),
        f = n(58346),
        _ = n(388032),
        x = n(971436);
      function E(e, t, n) {
        e.preventDefault(),
          g.default.track(p.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
          });
        let i = h.default.getFingerprint(),
          r = null != i ? i : h.default.getId();
        c.Z.openMobileApp(n.state === f.Rj.RESOLVED ? t : void 0, r);
      }
      function v(e) {
        let { code: t } = e,
          n = (0, s.e7)([o.Z], () => o.Z.getGuildTemplate(t));
        return (r.useEffect(() => {
          (0, d.e)("guild_template_mobile");
        }, []),
        null == n || n.state === f.Rj.RESOLVING)
          ? (0, i.jsx)(l.ZP, { children: (0, i.jsx)(a.Spinner, {}) })
          : n.state === f.Rj.RESOLVED
            ? (0, i.jsxs)(l.ZP, {
                children: [
                  (0, i.jsx)(u.Z, { guildTemplate: n, tall: !0 }),
                  (0, i.jsx)(l.zx, {
                    onClick: (e) => E(e, t, n),
                    className: x.marginTop20,
                    children: _.intl.string(_.t["a3Gl+f"]),
                  }),
                ],
              })
            : (0, i.jsx)(m.Z, {
                text: _.intl.string(_.t["e/rZ2t"]),
                buttonCta: _.intl.string(_.t.HAvYn5),
                onClick: (e) => E(e, t, n),
              });
      }
      s.ZP.initialize();
    },
    587444: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
        u: function () {
          return p;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        a = n(692547),
        l = n(481060),
        o = n(388905),
        c = n(600164),
        u = n(981631),
        d = n(388032),
        h = n(995252),
        g = n(639944),
        m = n(971436);
      function p(e) {
        let { text: t, buttonCta: r, onClick: u } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(o.Ee, { src: n(689411) }),
            (0, i.jsx)(o.Dx, {
              className: s()(m.marginTop20, m.marginBottom8, g.flexCenter),
              children: d.intl.string(d.t.eL5z0t),
            }),
            (0, i.jsx)(o.DK, {
              className: m.marginBottom40,
              children: d.intl.string(d.t["poAv6+"]),
            }),
            (0, i.jsxs)(l.Card, {
              className: h.card,
              type: l.Card.Types.CUSTOM,
              children: [
                (0, i.jsx)("img", {
                  alt: "",
                  className: h.cardAccentLeft,
                  src: n(70519),
                }),
                (0, i.jsx)("img", {
                  alt: "",
                  className: h.cardAccentRight,
                  src: n(806848),
                }),
                (0, i.jsxs)(c.Z, {
                  className: h.cardContents,
                  direction: c.Z.Direction.VERTICAL,
                  align: c.Z.Align.STRETCH,
                  grow: 0,
                  children: [
                    (0, i.jsx)(l.Text, {
                      tag: "strong",
                      className: h.buttonTitle,
                      variant: "text-md/normal",
                      style: { color: a.Z.unsafe_rawColors.PRIMARY_300.css },
                      children: t,
                    }),
                    (0, i.jsx)(o.zx, {
                      className: h.button,
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
      function f(e) {
        let { text: t, buttonCta: n, theme: r = u.BRd.DARK, onClick: s } = e;
        return (0, i.jsx)(o.ZP, {
          theme: r,
          children: (0, i.jsx)(p, { text: t, buttonCta: n, onClick: s }),
        });
      }
    },
    344295: function (e, t, n) {
      n(789020), n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        l = n(533800),
        o = n(756647),
        c = n(442837),
        u = n(298444),
        d = n(447543),
        h = n(881052),
        g = n(899370),
        m = n(267394),
        p = n(388905),
        f = n(639946),
        _ = n(792766),
        x = n(362762),
        E = n(978684),
        v = n(264229),
        I = n(929809),
        b = n(703656),
        N = n(108427),
        C = n(314897),
        S = n(896797),
        T = n(701190),
        A = n(626135),
        Z = n(630388),
        j = n(63063),
        R = n(782605),
        O = n(954824),
        L = n(588705),
        P = n(781428),
        y = n(423527),
        D = n(981631),
        k = n(188785),
        M = n(701476),
        w = n(436620),
        B = n(388032),
        G = n(971436);
      function U(e, t, n) {
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
      let F = "Accept Invite Page",
        z = { REGISTER: "register", LOGIN: "login" };
      async function V(e) {
        let { invite: t } = await d.Z.resolveInvite(e, F);
        if (null != t) (0, m.A)(t);
      }
      class K extends r.PureComponent {
        componentDidMount() {
          let { isUnderage: e, login: t, inviteKey: n } = this.props;
          if (
            (A.default.track(
              D.rMx.INVITE_VIEWED,
              { invite_code: n },
              { flush: !0 },
            ),
            (0, N.e)("invite"),
            !w.KO)
          ) {
            let e = this.getInviteKey();
            O.Z.launch("discord://" + D.Z5c.INVITE(e), () => void 0);
          }
          if (!t && e) {
            let e = this.getInviteKey(),
              { baseCode: t } = (0, v.fU)(e);
            (0, b.dL)(D.Z5c.INVITE_LOGIN(t));
          }
        }
        componentDidUpdate(e) {
          let {
              invite: t,
              nativeAppState: n,
              authenticated: i,
              transitionTo: r,
            } = this.props,
            s = this.getInviteKey();
          if (s !== this.getInviteKey(e)) V(s);
          else if (t.state === D.r2o.APP_NOT_OPENED) this.handleContinue();
          else if (this.getMode() === z.LOGIN && i !== e.authenticated && i) {
            let e = C.default.getFingerprint();
            if (null != e) {
              let t = (0, o.s)(e);
              this.track(D.rMx.INVITE_LOGIN_SUCCESSFUL, !0, {
                prev_user_id: t,
              });
            }
            d.Z.acceptInvite({
              inviteKey: s,
              context: this.getAcceptInviteContext(F),
              skipOnboarding: !0,
              callback: this.handleContinue,
            });
          }
          if (
            (n !== e.nativeAppState &&
              n === D.kEZ.OPEN &&
              this.track(D.rMx.INVITE_APP_INVOKED, !1),
            this.getMode() === z.REGISTER && i && !e.authenticated)
          ) {
            let { channel: e } = t;
            null != e &&
              ((0, I.c)(M.M5.INVITE_UNCLAIMED),
              null != t.guild
                ? r(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
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
          return k.a ? z.REGISTER : e.login ? z.LOGIN : z.REGISTER;
        }
        track(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            { invite: i } = this.props,
            r = this.getInviteKey(),
            s = (0, v.jX)(r),
            a = t
              ? {
                  guild_id: null != i.guild ? i.guild.id : null,
                  channel_id: null != i.channel ? i.channel.id : null,
                  inviter_id: null != i.inviter ? i.inviter.id : null,
                  invite_code: s,
                }
              : { invite_code: s };
          A.default.track(e, { ...a, ...n });
        }
        renderSpinner(e) {
          return (0, i.jsxs)(p.ZP, {
            children: [(0, i.jsx)(p.Dx, { children: e }), (0, i.jsx)(p.Hh, {})],
          });
        }
        renderInvalidInvite() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (0, i.jsxs)(p.ZP, {
            children: [
              (0, i.jsx)(p.Ee, { src: n(167969), className: G.marginBottom8 }),
              (0, i.jsx)(p.Dx, {
                className: a()(G.marginTop8, G.marginBottom8),
                children: B.intl.string(B.t.kux01N),
              }),
              (0, i.jsx)(p.DK, {
                children: e
                  ? B.intl.string(B.t["5AkWAQ"])
                  : B.intl.string(B.t["+qUJAg"]),
              }),
              this.renderButton(B.intl.string(B.t.fIv16O)),
              (0, i.jsx)(p.zx, {
                onClick: () =>
                  window.open(
                    j.Z.getArticleURL(D.BhN.INVALID_INVITES),
                    "_blank",
                  ),
                look: p.zx.Looks.LINK,
                color: p.zx.Colors.LINK,
                className: G.marginTop8,
                children: B.intl.string(B.t.urIwn5),
              }),
            ],
          });
        }
        renderErrorInvite() {
          var e, t;
          return (0, i.jsxs)(p.ZP, {
            children: [
              (0, i.jsx)(L.Z, {
                invite: this.props.invite,
                error:
                  null === (e = this.state.error) || void 0 === e
                    ? void 0
                    : e.message,
              }),
              (null === (t = this.state.error) || void 0 === t
                ? void 0
                : t.code) === D.evJ.INVALID_CANNOT_FRIEND_SELF
                ? this.renderButton(B.intl.string(B.t.fIv16O))
                : this.renderButton(
                    B.intl.string(B.t.ohMvm5),
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
          return (0, i.jsxs)(p.ZP, {
            children: [
              (0, i.jsx)(p.Dx, {
                className: G.marginBottom8,
                children: B.intl.string(B.t.csrAMD),
              }),
              (0, i.jsx)(p.DK, { children: B.intl.string(B.t["m1+IBg"]) }),
              this.renderButton(B.intl.string(B.t.fIv16O), () => t()),
            ],
          });
        }
        renderAuthenticatedHeader() {
          let { invite: e } = this.props;
          return null != e.stage_instance && null != e.guild
            ? (0, i.jsx)(_.Z, {
                stageInstance: e.stage_instance,
                guild: e.guild,
              })
            : null != e.guild_scheduled_event
              ? (0, i.jsx)(f.r, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
                })
              : (0, i.jsx)(L.Z, { invite: e });
        }
        renderAuthenicatedFooter() {
          let { invite: e } = this.props;
          return (null != e.stage_instance ||
            null != e.guild_scheduled_event) &&
            null != e.guild
            ? (0, i.jsx)(p.ZP, {
                className: G.marginTop20,
                children: (0, i.jsx)(_.y, {
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
                ? B.intl.string(B.t["5UKyUl"])
                : B.intl.string(B.t.ohMvm5);
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsxs)(p.ZP, {
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
          return (0, i.jsxs)(p.ZP, {
            children: [
              (0, i.jsx)(p.Dx, { children: B.intl.string(B.t.fOc4go) }),
              this.renderButton(B.intl.string(B.t.fIv16O)),
            ],
          });
        }
        render() {
          let {
            invite: e,
            nativeAppState: t,
            authenticated: n,
            transitionTo: r,
            location: s,
          } = this.props;
          if (t === D.kEZ.OPEN) return this.renderAppOpened();
          switch (e.state) {
            case D.r2o.APP_OPENED:
              return this.renderAppOpened();
            case D.r2o.APP_NOT_OPENED:
              return this.renderContinue();
            case D.r2o.RESOLVING:
              return k.a
                ? this.renderSpinner(B.intl.string(B.t.MKDeyM))
                : this.renderSpinner(B.intl.string(B.t["Z+hCVV"]));
            case D.r2o.APP_OPENING:
              return this.renderSpinner(B.intl.string(B.t["Z+hCVV"]));
            case D.r2o.RESOLVED:
              var a;
              if (
                n &&
                (0, Z.yE)(
                  null !== (a = e.flags) && void 0 !== a ? a : 0,
                  l.$.IS_GUEST_INVITE,
                )
              )
                return (
                  d.Z.openApp(e.code),
                  u.x.set(E.J, e.code),
                  this.renderAppOpened(() => r(D.Z5c.APP))
                );
              if (n || !w.KO) return this.renderAuthenticatedOrDownload();
              else if (this.getMode() === z.LOGIN)
                return (0, i.jsx)(P.Z, {
                  invite: e,
                  transitionTo: r,
                  location: s,
                });
              else
                return (0, i.jsx)(y.Z, {
                  invite: e,
                  onLoginStart: () => this.track(D.rMx.INVITE_LOGIN, !0),
                  location: s,
                  transitionTo: r,
                });
            case D.r2o.ACCEPTING:
              return this.renderSpinner(B.intl.string(B.t["6wsY19"]));
            case D.r2o.EXPIRED:
              return this.renderExpiredInvite();
            case D.r2o.BANNED:
              return this.renderBannedInvite();
            case D.r2o.ERROR:
              return this.renderErrorInvite();
            case D.r2o.ACCEPTED:
            default:
              return null;
          }
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            U(this, "state", { error: null }),
            U(this, "getAcceptInviteContext", (e) =>
              d.Z.getInviteContext(e, this.props.invite),
            ),
            U(this, "handleContinue", (e) => {
              let { invite: t, transitionTo: n } = this.props;
              if (
                null != t.channel ||
                (null == e ? void 0 : e.channel) != null
              ) {
                var i;
                (null === (i = t.guild) || void 0 === i ? void 0 : i.id) != null
                  ? n(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                  : d.Z.transitionToInvite(null != e ? e : t, n);
              }
            }),
            U(this, "handleAccept", () => {
              this.setState({ error: null });
              let e = this.getInviteKey();
              d.Z.acceptInvite({
                inviteKey: e,
                context: this.getAcceptInviteContext(F),
                skipOnboarding: !0,
                callback: (t) => {
                  (0, m.A)(t),
                    null != t.channel && d.Z.openApp(e, t.channel.id);
                },
              }).catch((e) => {
                if (e instanceof h.yZ || e instanceof h.Hx) {
                  let t = (0, R.O)(e.code);
                  this.setState({ error: { code: e.code, message: t } });
                } else
                  this.setState({
                    error: { code: e.code, message: B.intl.string(B.t.dDZRd3) },
                  });
              });
            }),
            U(this, "handleDefaultTransition", () => {
              let { defaultRoute: e, transitionTo: t } = this.props;
              t(e);
            }),
            U(this, "renderButton", function (e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t.handleDefaultTransition,
                { invite: r } = t.props,
                s = null != r.stage_instance || null != r.guild_scheduled_event;
              return w.KO
                ? (0, i.jsx)(p.zx, {
                    className: s ? G.marginTop20 : G.marginTop40,
                    onClick: n,
                    color: s ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                    children: e,
                  })
                : (0, i.jsx)(p.v6, { className: G.marginTop40 });
            });
        }
      }
      t.Z = c.ZP.connectStores([T.Z, S.Z, C.default, x.Z, g.Z], (e) => {
        var t;
        let { inviteKey: n } = e;
        return {
          invite: null !== (t = T.Z.getInvite(n)) && void 0 !== t ? t : {},
          nativeAppState: x.Z.getState(n),
          authenticated: C.default.isAuthenticated(),
          defaultRoute: S.Z.defaultRoute,
          isUnderage: g.Z.isUnderageAnonymous(),
        };
      })(K);
    },
    781428: function (e, t, n) {
      n.d(t, {
        q: function () {
          return q;
        },
      });
      var i,
        r = n(200651),
        s = n(192379),
        a = n(533126),
        l = n(120356),
        o = n.n(l),
        c = n(593473),
        u = n(873546),
        d = n(442837),
        h = n(481060),
        g = n(570140),
        m = n(893776),
        p = n(899742),
        f = n(579806),
        _ = n(743142),
        x = n(388905),
        E = n(379760),
        v = n(600164),
        I = n(100159),
        b = n(473855),
        N = n(124860),
        C = n(86779),
        S = n(726745),
        T = n(913583),
        A = n(144114),
        Z = n(541692),
        j = n(952802),
        R = n(108427),
        O = n(365007),
        L = n(314897),
        P = n(117240),
        y = n(896797),
        D = n(626135),
        k = n(585483),
        M = n(358085),
        w = n(481153),
        B = n(588705),
        G = n(494526),
        U = n(163671),
        F = n(981631),
        z = n(58346),
        V = n(388032),
        K = n(449206),
        H = n(971436);
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
      function q() {
        return (0, r.jsx)(x.ZP, { children: (0, r.jsx)(h.Spinner, {}) });
      }
      class Y extends (i = s.PureComponent) {
        static getDerivedStateFromProps(e) {
          let { handoffAvailable: t, authenticated: n } = e;
          return t || n ? null : { checkingHandoff: !1 };
        }
        componentDidMount() {
          let {
            handoffAvailable: e,
            authenticated: t,
            giftCodeSKU: n,
            invite: i,
            location: r,
          } = this.props;
          e && !t ? (0, p.is)() : t && this.loginOrSSO(t, r, !0),
            D.default.track(
              F.rMx.LOGIN_VIEWED,
              {
                location:
                  null != i ? "Invite Login Page" : "Non-Invite Login Page",
                login_source: this.loginSource,
                authenticated: t,
                ...(null != n ? (0, I.Z)(n, !1, !1) : {}),
              },
              { flush: !0 },
            ),
            null == f.Z &&
              null != window.PublicKeyCredential &&
              null != PublicKeyCredential.isConditionalMediationAvailable &&
              PublicKeyCredential.isConditionalMediationAvailable().then(
                (e) => {
                  e &&
                    (0, O.us)()
                      .then((e) => {
                        let { challenge: t, ticket: n } = e,
                          i = (0, a.wz)(JSON.parse(t));
                        return (
                          (i.signal =
                            this.state.conditionalMediationAbortController.signal),
                          (0, a.U2)(i)
                            .then(
                              (e) => (
                                g.Z.dispatch({ type: "PASSWORDLESS_START" }),
                                m.Z.loginWebAuthn({
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
            m.Z.getLocationMetadata(),
            (0, R.e)("login");
        }
        componentDidUpdate(e) {
          let { authenticated: t, location: n } = this.props,
            { checkingHandoff: i } = this.state;
          if (
            (t &&
              !e.authenticated &&
              !i &&
              (this.state.conditionalMediationAbortController.abort(),
              this.loginOrSSO(t, n)),
            e.errors !== this.props.errors)
          ) {
            var r, s, a;
            this.hasError("password")
              ? null === (r = this.passwordRef) || void 0 === r || r.focus()
              : this.hasError("email") || this.hasError("login")
                ? null === (s = this.loginRef) || void 0 === s || s.focus()
                : this.hasError("code") &&
                  (null === (a = this.codeRef) || void 0 === a || a.focus());
          }
        }
        get loginSource() {
          let {
            giftCode: e,
            guildTemplate: t,
            invite: n,
            loginSource: i,
            redirectTo: r,
          } = this.props;
          if (null != i) return i;
          if (null != e) return "gift";
          if (null != t) return "guild_template";
          else if (null != n) {
            if (null != n.guild) return "guild_invite";
            if (null != n.channel) return "dm_invite";
            else if (null != n.inviter) return "friend_invite";
          }
          return null != r ? (0, _.L)(r) : null;
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
                ? m.Z.verifySSOToken().then(() => this.transitionSSO(t))
                : this.transitionSSO(t);
        }
        transitionSSO(e) {
          let { transitionTo: t, redirectTo: n, replaceWith: i } = this.props,
            r = null != e ? (0, c.parse)(e.search) : {};
          if ((delete r.redirect_to, null != n)) null != i ? i(n) : t(n);
          else if (null == r.service) t(F.Z5c.APP);
          else {
            let e =
                window.location.protocol +
                window.GLOBAL_ENV.API_ENDPOINT +
                F.ANM.SSO,
              t = { ...r, token: L.default.getToken() };
            window.location = "".concat(e, "?").concat((0, c.stringify)(t));
          }
        }
        hasError(e) {
          return null != this.props.errors[e];
        }
        renderHandOffAvailable() {
          let { authBoxClassName: e } = this.props;
          return (0, r.jsxs)(x.ZP, {
            className: e,
            children: [
              (0, r.jsx)(x.Hh, {}),
              (0, r.jsx)(x.Dx, {
                className: H.marginBottom8,
                children: V.intl.string(V.t.S6RMND),
              }),
              (0, r.jsx)(x.DK, { children: V.intl.string(V.t.YZiJbm) }),
            ],
          });
        }
        renderHandOffContinue() {
          let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
          return null == e
            ? null
            : (0, r.jsxs)(x.ZP, {
                className: n,
                children: [
                  (0, r.jsx)(x.qE, {
                    src: e.getAvatarURL(void 0, 100),
                    size: h.AvatarSizes.DEPRECATED_SIZE_100,
                    className: H.marginBottom20,
                  }),
                  (0, r.jsx)(x.Dx, {
                    className: H.marginBottom8,
                    children: V.intl.format(V.t.ot19ho, { name: e.toString() }),
                  }),
                  (0, r.jsx)(x.DK, {
                    className: H.marginBottom40,
                    children: V.intl.string(V.t["2xkqzc"]),
                  }),
                  (0, r.jsxs)(x.gO, {
                    children: [
                      (0, r.jsx)(x.zx, {
                        onClick: () => t(F.Z5c.APP),
                        className: H.marginBottom8,
                        children: V.intl.format(V.t.fohtv7, {
                          name: e.toString(),
                        }),
                      }),
                      (0, r.jsx)(x.zx, {
                        look: x.zx.Looks.LINK,
                        color: x.zx.Colors.LINK,
                        onClick: this.handleReset,
                        children: V.intl.string(V.t.nO564e),
                      }),
                    ],
                  }),
                ],
              });
        }
        renderDisabledAccount() {
          let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === F.u34.ACCOUNT_DISABLED,
            n = t ? V.intl.string(V.t["j3rC+f"]) : V.intl.string(V.t.ZFWofn),
            i = t ? V.intl.string(V.t["6eNTWV"]) : V.intl.string(V.t.pCBti4);
          return (0, r.jsx)(x.ZP, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, r.jsxs)(h.HeadingLevel, {
              component: (0, r.jsx)(x.Dx, {
                className: H.marginBottom8,
                children: n,
              }),
              children: [
                (0, r.jsx)(x.DK, { className: H.marginBottom20, children: i }),
                (0, r.jsxs)(x.gO, {
                  children: [
                    (0, r.jsx)(x.zx, {
                      color: x.zx.Colors.BRAND,
                      type: "submit",
                      children: V.intl.string(V.t.JhDw5u),
                    }),
                    (0, r.jsx)("div", {
                      className: o()(H.marginTop8, K.needAccount),
                      children: V.intl.format(V.t.js2rr6, {
                        onClick: this.handleCancelAccountDeletion,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        renderResolving() {
          let { authBoxClassName: e, country: t } = this.props;
          return (0, r.jsxs)(x.ZP, {
            className: e,
            children: [
              (0, r.jsx)(B.R, {}),
              (0, r.jsxs)(x.gO, {
                className: H.marginTop20,
                children: [
                  (0, r.jsx)(j.Z, {
                    className: H.marginBottom20,
                    alpha2: t.alpha2,
                    countryCode: t.code.split(" ")[0],
                    label: V.intl.string(V.t.tUjnxs),
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
                  (0, r.jsx)(x.II, {
                    className: H.marginBottom20,
                    label: V.intl.string(V.t["CIGa+/"]),
                    onChange: (e) => this.setState({ password: e }),
                    type: "password",
                    setRef: this.setPasswordRef,
                    autoComplete: "off",
                    spellCheck: "false",
                    value: this.state.password,
                    required: !0,
                  }),
                  (0, r.jsx)(x.zx, {
                    className: H.marginBottom8,
                    type: "submit",
                    disabled: !0,
                    children: V.intl.string(V.t.dKhVQE),
                  }),
                  (0, r.jsx)(x.zx, {
                    disabled: !0,
                    look: x.zx.Looks.LINK,
                    color: x.zx.Colors.LINK,
                    children: V.intl.string(V.t.wWIufn),
                  }),
                  (0, r.jsx)(x.zx, {
                    disabled: !0,
                    className: H.marginTop4,
                    look: x.zx.Looks.LINK,
                    color: x.zx.Colors.LINK,
                    children: V.intl.string(V.t.tmE73t),
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
              invite: i,
              giftCode: s,
              loginStatus: a,
              country: l,
              showMobileWebHandoff: c,
              disableAutofocusOnDefaultForm: u,
            } = this.props,
            d = !this.hasError("email") && this.hasError("password"),
            g = (null == i ? void 0 : i.stage_instance) != null;
          return (
            (n =
              null == i || g
                ? null != s
                  ? (0, r.jsx)(w.Z, { giftCode: s })
                  : (0, r.jsxs)("div", {
                      className: K.header,
                      children: [
                        (0, r.jsx)(
                          x.Dx,
                          {
                            className: H.marginBottom8,
                            children: V.intl.string(V.t["7fNJgI"]),
                          },
                          "title",
                        ),
                        !1 === (0, M.isAndroidWeb)()
                          ? (0, r.jsx)(
                              x.DK,
                              { children: V.intl.string(V.t.euS7r6) },
                              "subtitle",
                            )
                          : null,
                      ],
                    })
                : (0, r.jsx)(B.Z, { invite: i })),
            (0, r.jsxs)(
              v.Z,
              {
                direction: v.Z.Direction.HORIZONTAL,
                align: v.Z.Align.CENTER,
                children: [
                  (0, r.jsxs)("div", {
                    className: K.mainLoginContainer,
                    children: [
                      this.canShowChooseAccount &&
                        this.state.dismissedChooseAccount &&
                        (0, r.jsx)(x.zx, {
                          onClick: () => {
                            this.setState((e) => ({
                              ...e,
                              dismissedChooseAccount: !1,
                            }));
                          },
                          look: x.zx.Looks.LINK,
                          color: x.zx.Colors.PRIMARY,
                          className: K.goBackButton,
                          children: (0, r.jsxs)("div", {
                            className: K.content,
                            children: [
                              (0, r.jsx)(h.ChevronSmallLeftIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: K.caret,
                              }),
                              (0, r.jsx)(h.Text, {
                                variant: "text-md/normal",
                                children: V.intl.string(V.t["1MrpWF"]),
                              }),
                            ],
                          }),
                        }),
                      n,
                      (0, r.jsx)(h.HeadingLevel, {
                        children: (0, r.jsxs)(x.gO, {
                          className: H.marginTop20,
                          children: [
                            (0, r.jsx)(j.Z, {
                              alpha2: l.alpha2,
                              countryCode: l.code.split(" ")[0],
                              className: H.marginBottom20,
                              label: V.intl.string(V.t.tUjnxs),
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
                            (0, r.jsx)(x.II, {
                              label: V.intl.string(V.t["CIGa+/"]),
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
                            (0, r.jsx)(x.zx, {
                              onClick: this.handleForgotPassword,
                              look: x.zx.Looks.LINK,
                              color: x.zx.Colors.LINK,
                              className: o()(H.marginBottom20, H.marginTop4),
                              children: V.intl.string(V.t.wWIufn),
                            }),
                            (0, r.jsx)(x.zx, {
                              type: "submit",
                              submitting: a === F.u34.LOGGING_IN,
                              color: g ? x.zx.Colors.GREEN : x.zx.Colors.BRAND,
                              className: H.marginBottom8,
                              children: g
                                ? V.intl.string(V.t.wvVThI)
                                : V.intl.string(V.t.dKhVQE),
                            }),
                            (0, r.jsxs)("div", {
                              className: H.marginTop4,
                              children: [
                                (0, r.jsx)("span", {
                                  className: K.needAccount,
                                  children: V.intl.string(V.t.tmE73t),
                                }),
                                (0, r.jsx)(x.zx, {
                                  onClick: this.handleGotoRegister,
                                  look: x.zx.Looks.LINK,
                                  color: x.zx.Colors.LINK,
                                  className: K.smallRegisterLink,
                                  children: V.intl.string(V.t.pV8xeX),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(h.HeadingLevel, {
                    children: e
                      ? (0, r.jsx)(G.Z, {
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
            className: K.__invalid_pageContainer,
            children: [
              (0, r.jsx)(x.ZP, {
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
          return (0, r.jsx)(U.Z, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: o()(this.props.authBoxClassName, K.horizontalAuthBox),
            children: () => [
              (0, r.jsx)(b.Z, { guildTemplate: e }, "template"),
              this.renderDefaultForm(!1),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, r.jsx)(x.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(N.Cd, {
              mfaFinish: this.handleTokenSubmitMFA,
              mfaChallenge: e,
              onEarlyClose: () => {
                g.Z.dispatch({ type: "LOGIN_RESET" });
              },
              width: 480,
            }),
          });
        }
        renderIPAuthorization() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, r.jsx)(x.ZP, {
            tag: "form",
            className: e,
            children: (0, r.jsx)(E.Z, {
              title: V.intl.string(V.t.w55Ocn),
              subtitle: V.intl.format(V.t.CfRZBg, {
                onResendClick: this.handleResendCode,
              }),
              error: t,
              onSubmit: this.handleIPAuthorize,
              onCancel: m.Z.loginReset,
            }),
          });
        }
        renderPasswordRecovery() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, r.jsx)(x.ZP, {
            tag: "form",
            className: e,
            children: (0, r.jsx)(E.Z, {
              title: V.intl.string(V.t["+xqy3d"]),
              subtitle: V.intl.format(V.t.ef4uZ2, {
                onResendClick: this.handleResendCode,
              }),
              error: t,
              onSubmit: this.handlePasswordReset,
              onCancel: m.Z.loginReset,
            }),
          });
        }
        renderChooseAccount() {
          return (0, r.jsx)(T.Z, {
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
              loginStatus: i,
              handoffAvailable: s,
            } = this.props,
            { checkingHandoff: a, redirecting: l } = this.state;
          if (l || a) return (0, r.jsx)(q, {});
          if (s) return this.renderHandOffAvailable();
          if (e && a) return this.renderHandOffContinue();
          switch (i) {
            case F.u34.LOGGING_IN_MFA_SMS:
            case F.u34.MFA_SMS_STEP:
            case F.u34.LOGGING_IN_MFA:
            case F.u34.MFA_STEP:
              return this.renderMFA();
            case F.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case F.u34.ACCOUNT_DISABLED:
              return this.renderDisabledAccount();
            case F.u34.PHONE_IP_AUTHORIZATION:
              return this.renderIPAuthorization();
            case F.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
              return this.renderPasswordRecovery();
            case F.u34.LOGGING_IN:
            case F.u34.NONE:
            default:
              if (null != t && t.state === F.r2o.RESOLVING)
                return this.renderResolving();
              if (null != n) {
                if (n.state === z.Rj.RESOLVING) return this.renderResolving();
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
              await m.Z.loginToken(e, !1),
                D.default.track(F.rMx.LOGIN_SUCCESSFUL, {
                  source: F.uRl.QR_CODE,
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
                m.Z.login({
                  login: this.getFullLogin(),
                  password: t,
                  undelete: n,
                  source: this.loginSource,
                  giftCodeSKUId: this.giftCodeSKUId,
                  invite: this.props.invite,
                }),
                k.S.dispatch(F.CkL.WAVE_EMPHASIZE);
            }),
            W(this, "handleIPAuthorize", async (e) => {
              let { password: t, undelete: n } = this.state,
                i = this.getFullLogin();
              try {
                let { token: r } = await A.Z.verifyPhone(i, e, !1);
                await m.Z.authorizeIPAddress(r),
                  m.Z.login({
                    login: i,
                    password: t,
                    undelete: n,
                    source: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                  }),
                  k.S.dispatch(F.CkL.WAVE_EMPHASIZE);
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
                let { token: n } = await A.Z.verifyPhone(
                  this.getFullLogin(),
                  e,
                  !1,
                );
                t(F.Z5c.RESET, {
                  search: (0, c.stringify)({ token: n, from_login: "true" }),
                });
              } catch (e) {
                null != e.body &&
                  null != e.body.message &&
                  this.setState({ phoneVerifyError: e.body.message });
              }
            }),
            W(this, "handleTokenSubmitMFA", (e) => {
              let { mfaType: t, data: n, ticket: i } = e;
              return (
                k.S.dispatch(F.CkL.WAVE_EMPHASIZE),
                m.Z.loginMFAv2({
                  code: n,
                  ticket: i,
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
                k.S.dispatch(F.CkL.WAVE_EMPHASIZE),
                  await m.Z.forgotPassword(t),
                  (0, h.openModal)((e) =>
                    (0, r.jsx)(h.ConfirmModal, {
                      header: V.intl.string(V.t.f5Pi7O),
                      confirmText: V.intl.string(V.t.BddRzc),
                      confirmButtonColor: x.zx.Colors.BRAND,
                      className: u.tq ? K.mobile : "",
                      ...e,
                      children: (0, r.jsx)(h.Text, {
                        variant: "text-md/normal",
                        children: V.intl.format(V.t["6u5hQ0"], { email: t }),
                      }),
                    }),
                  );
              } catch {}
            }),
            W(this, "handleResendCode", () => {
              A.Z.resendCode(this.getFullLogin());
            }),
            W(this, "handleReset", (e) => {
              null != e && e.preventDefault(),
                m.Z.loginReset(),
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
                  giftCode: i,
                  guildTemplate: r,
                  location: s,
                  transitionTo: a,
                  redirectTo: l,
                } = this.props,
                o = null != s ? (0, c.parse)(s.search) : {};
              "" !== t && (o.email = t),
                null != n
                  ? ((o.mode = "register"), (e = F.Z5c.INVITE(n.code)))
                  : null != i
                    ? ((o.mode = "register"), (e = F.Z5c.GIFT_CODE(i.code)))
                    : null != r
                      ? (e = F.Z5c.GUILD_TEMPLATE(r.code))
                      : null != l
                        ? ((e = F.Z5c.REGISTER), (o.redirect_to = l))
                        : (e = F.Z5c.REGISTER),
                m.Z.loginReset(),
                a(e, { search: (0, c.stringify)(o) }),
                k.S.dispatch(F.CkL.WAVE_EMPHASIZE);
            });
          let i = null != e.location ? (0, c.parse)(e.location.search) : {};
          this.state = {
            redirecting: e.authenticated,
            checkingHandoff: e.handoffAvailable,
            loginPrefix: "",
            login:
              null !==
                (n = null !== (t = i.email) && void 0 !== t ? t : i.login) &&
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
      W(Y, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
      t.Z = function (e) {
        let t = (0, d.cj)([P.Z, y.Z, L.default, S.Z, Z.Z], () => ({
          authenticated: L.default.isAuthenticated(),
          handoffAvailable: P.Z.isHandoffAvailable(),
          user: P.Z.user,
          loginStatus: L.default.getLoginStatus(),
          mfaTicket: L.default.getMFATicket(),
          mfaSMS: L.default.getMFASMS(),
          mfaMethods: L.default.getMFAMethods(),
          maskedPhone: L.default.getMaskedPhone(),
          errors: L.default.getErrors(),
          defaultRoute: y.Z.defaultRoute,
          country: Z.Z.getCountryCode(),
          hasLoggedInAccounts: S.Z.getHasLoggedInAccounts(),
        }));
        return (0, r.jsx)(Y, { ...e, ...t });
      };
    },
    209411: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120),
        n(773603);
      var i = n(200651),
        r = n(192379),
        s = n(593473),
        a = n(512969),
        l = n(442837),
        o = n(893776),
        c = n(899742),
        u = n(743142),
        d = n(893607),
        h = n(703656),
        g = n(314897),
        m = n(781428),
        p = n(981631),
        f = n(176505);
      function _(e) {
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
                        : t.channelId) === f.oC.ROLE_SUBSCRIPTIONS || !1
                  );
                })(t)
              )
                h.dL(t);
              else {
                var n;
                (null !== (n = e.transitionTo) && void 0 !== n ? n : h.uL)(t);
              }
            },
            [e.transitionTo],
          ),
          { isAuthenticated: n, loginStatus: _ } = (0, l.cj)(
            [g.default],
            () => ({
              isAuthenticated: g.default.isAuthenticated(),
              loginStatus: g.default.getLoginStatus(),
            }),
          ),
          { location: x, redirectTo: E } = e,
          [v, I] = r.useState(n);
        function b(e) {
          let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
          (0, c.Yz)({ handoffKey: t, handoffToken: n, handoffSource: i }),
            I(!1);
        }
        return (r.useEffect(() => {
          if (null != x) {
            let { handoff_key: e, handoff_token: t } = (0, s.parse)(x.search);
            if (null != e && null != t) {
              let n = null != E ? (0, u.L)(E) : void 0;
              v
                ? o.Z.logout(null).finally(() => {
                    b({ handoffKey: e, handoffToken: t, handoffSource: n });
                  })
                : b({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
          }
        }, []),
        v || _ === p.u34.LOGGING_IN)
          ? (0, i.jsx)(m.q, {})
          : (0, i.jsx)(m.Z, { ...e, transitionTo: t });
      }
    },
    494526: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      }),
        n(411104),
        n(47120);
      var i,
        r,
        s,
        a,
        l = n(200651),
        o = n(192379),
        c = n(533126),
        u = n(261470),
        d = n(399606),
        h = n(544891),
        g = n(481060),
        m = n(893776),
        p = n(99690),
        f = n(937154),
        _ = n(388905),
        x = n(198993),
        E = n(710845),
        v = n(314897),
        I = n(585483),
        b = n(358085),
        N = n(172517),
        C = n(51144),
        S = n(998502),
        T = n(981631),
        A = n(231338),
        Z = n(388032),
        j = n(506966),
        R = n(971436);
      ((s = i || (i = {}))[(s.INITIALIZING = 0)] = "INITIALIZING"),
        (s[(s.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (s[(s.PENDING_FINISH = 2)] = "PENDING_FINISH"),
        (s[(s.PENDING_TICKET = 3)] = "PENDING_TICKET"),
        (s[(s.PENDING_LOGIN = 4)] = "PENDING_LOGIN"),
        (s[(s.FINISH = 5)] = "FINISH"),
        ((a = r || (r = {}))[(a.QR_CODE = 0)] = "QR_CODE"),
        (a[(a.CONFIRM = 1)] = "CONFIRM");
      let O = n(515695),
        L = new E.Z("LoginQRSocket");
      function P(e) {
        let { text: t = "" } = e,
          [n, i] = o.useState(!1);
        return (
          o.useEffect(() => {
            let e = new Image();
            (e.src = O), (e.onload = () => i(!0)), (e.onerror = () => i(!0));
          }, [O]),
          o.useEffect(() => {
            n && g.AccessibilityAnnouncer.announce(Z.intl.string(Z.t.j2p129));
          }, [n]),
          (0, l.jsx)("div", {
            className: j.qrCodeContainer,
            children:
              "" !== t && n
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(x.ZP, {
                        className: j.qrCode,
                        size: 160,
                        text: t,
                      }),
                      (0, l.jsx)("div", {
                        className: j.qrCodeOverlay,
                        children: (0, l.jsx)("img", { src: O, alt: "" }),
                      }),
                    ],
                  })
                : (0, l.jsx)("div", {
                    className: j.qrCodeOverlay,
                    "aria-label": Z.intl.string(Z.t.BUGkVF),
                    "aria-busy": !0,
                    children: (0, l.jsx)(g.Spinner, {
                      className: j.qrCode,
                      type: g.Spinner.Type.WANDERING_CUBES,
                      "aria-hidden": !0,
                    }),
                  }),
          })
        );
      }
      let y = (e) => {
        let { className: t, children: n } = e;
        return (0, l.jsx)(g.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          className: t,
          children: n,
        });
      };
      function D(e) {
        let {
          state: t,
          cancel: n,
          errorMessage: i,
          conditionalMediationAbortController: r,
          isPasswordlessActive: s,
        } = e;
        switch (t.step) {
          case 0:
          case 1:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(P, {
                  text:
                    1 === t.step
                      ? "https://discord.com/ra/".concat(t.fingerprint)
                      : "",
                }),
                (0, l.jsx)(_.Dx, {
                  className: R.marginBottom8,
                  children: Z.intl.string(Z.t.UPiHaG),
                }),
                null != i
                  ? (0, l.jsx)(y, { children: i })
                  : (0, l.jsx)(_.DK, {
                      children: Z.intl.format(Z.t["Qq+A6u"], {}),
                    }),
                (0, l.jsx)(g.Button, {
                  size: g.ButtonSizes.LARGE,
                  look: g.ButtonLooks.LINK,
                  color: g.ButtonColors.LINK,
                  disabled: s,
                  onClick: () =>
                    (function (e) {
                      let t =
                        b.isPlatformEmbedded &&
                        S.ZP.supportsFeature(T.eRX.WEBAUTHN)
                          ? S.ZP.webAuthnAuthenticate
                          : (e) => {
                              let t = (0, c.wz)(JSON.parse(e));
                              return (0, c.U2)(t).then((e) =>
                                JSON.stringify(e),
                              );
                            };
                      m.Z.authenticatePasswordless({
                        authenticateFunc: t,
                        conditionalMediationAbortController: e,
                      }).catch(() => {});
                    })(r),
                  children: Z.intl.string(Z.t["/kpMDg"]),
                }),
              ],
            });
          case 3:
          case 2: {
            let { user: e } = t;
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(p.Z, {
                  className: j.qrAvatar,
                  user: e,
                  size: g.AvatarSizes.SIZE_120,
                  isMobile: !0,
                  status: A.Sk.ONLINE,
                }),
                (0, l.jsx)(_.Dx, {
                  className: R.marginBottom8,
                  children: Z.intl.string(Z.t.apGCUV),
                }),
                (0, l.jsx)(_.DK, {
                  children: Z.intl.format(Z.t.Cbl5JC, {
                    username: "".concat(C.ZP.getUserTag(e)),
                  }),
                }),
                (0, l.jsx)(g.Button, {
                  look: g.Button.Looks.BLANK,
                  color: g.Button.Colors.LINK,
                  size: g.Button.Sizes.MIN,
                  onClick: n,
                  className: j.startOverButton,
                  children: Z.intl.string(Z.t.nOOhws),
                }),
              ],
            });
          }
          case 4:
          case 5:
            return (0, l.jsx)(g.Spinner, {
              type: g.Spinner.Type.WANDERING_CUBES,
            });
        }
      }
      function k(e) {
        let { authTokenCallback: t, conditionalMediationAbortController: n } =
            e,
          i = (0, d.e7)([v.default], () => v.default.getIsPasswordlessActive()),
          {
            state: r,
            rsaKeyPair: s,
            cancel: a,
            handleFailure: c,
          } = (function (e) {
            let [t, n] = o.useState(0),
              [i, r] = o.useState(!1),
              [s, a] = o.useState({ step: 0 }),
              [l, c] = o.useState(null),
              d = (0, f.Z)(),
              h = o.useMemo(() => new u.Z(1500, 3e4), []),
              g = o.useRef();
            g.current = o.useCallback(() => {
              a({ step: 0 }),
                d
                  ? n((e) => e + 1)
                  : (L.info(
                      "document is not visible, will defer reconnection when document becomes visible.",
                    ),
                    r(!0));
            }, [d]);
            let m = o.useCallback(() => {
                (function (e) {
                  let { current: t } = e;
                  if (void 0 === t)
                    throw Error("tried to unwrap an undefined value.");
                  return t;
                })(g)();
              }, [g]),
              p = o.useCallback(() => {
                L.error(
                  "Could not complete QR code login, trying to restart with a new QR code.",
                ),
                  a({ step: 0 }),
                  !h.pending && h.fail(m);
              }, [m, h]);
            return (
              o.useEffect(() => {
                d &&
                  i &&
                  0 === s.step &&
                  (L.info("reconnecting, now that document is visible"),
                  r(!1),
                  n((e) => e + 1));
              }, [s, d, i, r]),
              o.useEffect(() => {
                let t = Date.now(),
                  n = () => "".concat(Date.now() - t, "ms"),
                  i = "wss:".concat(
                    window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT,
                    "/?v=2",
                  ),
                  r = new WebSocket(i);
                L.info("[0ms] connecting to ".concat(i));
                let s = (e) => L.info("[".concat(n(), "] ").concat(e)),
                  l = null,
                  o = null,
                  u = null,
                  d = null,
                  g = !0;
                function f() {
                  if (null != l) return l;
                  throw Error("No key pair set");
                }
                let _ = () => {
                  g
                    ? ((g = !1), r.send(JSON.stringify({ op: "heartbeat" })))
                    : (s("heartbeat timeout, reconnecting."), r.close(), p());
                };
                return (
                  (r.onmessage = async (t) => {
                    let { data: n } = t,
                      i = JSON.parse(n);
                    switch (i.op) {
                      case "nonce_proof": {
                        let e = i.encrypted_nonce,
                          t = await (0, N.qd)(f(), e);
                        s("computed nonce proof"),
                          r.send(
                            JSON.stringify({ op: "nonce_proof", nonce: t }),
                          );
                        return;
                      }
                      case "pending_remote_init": {
                        h.succeed(), I.S.dispatch(T.CkL.WAVE_EMPHASIZE);
                        let e = await (0, N.Pk)(f());
                        if (e !== i.fingerprint)
                          throw Error(
                            "bad fingerprint "
                              .concat(e, " !== ")
                              .concat(i.fingerprint),
                          );
                        s("handshake complete awaiting remote auth."),
                          a({ step: 1, fingerprint: e });
                        return;
                      }
                      case "pending_login": {
                        let e = i.ticket;
                        null == e && p(), a({ step: 4, ticket: e });
                        return;
                      }
                      case "pending_ticket": {
                        I.S.dispatch(T.CkL.WAVE_EMPHASIZE),
                          s(
                            "remote auth handshake started, awaiting ticket/cancel.",
                          );
                        let e = i.encrypted_user_payload;
                        a({ step: 3, user: await (0, N.Rq)(f(), e) });
                        return;
                      }
                      case "pending_finish": {
                        I.S.dispatch(T.CkL.WAVE_EMPHASIZE),
                          s(
                            "remote auth handshake started, awaiting finish/cancel.",
                          );
                        let e = i.encrypted_user_payload;
                        a({ step: 2, user: await (0, N.Rq)(f(), e) });
                        return;
                      }
                      case "finish": {
                        I.S.dispatch(T.CkL.WAVE_EMPHASIZE),
                          s("remote auth handshake finished.");
                        let t = i.encrypted_token;
                        a({ step: 5 }), e(await (0, N.FW)(f(), t));
                        return;
                      }
                      case "cancel":
                        s("remote auth handshake cancelled."), m();
                        return;
                      case "hello": {
                        s(
                          "got hello, auth timeout=".concat(i.timeout_ms, "ms"),
                        );
                        let e = i.heartbeat_interval;
                        d = setTimeout(
                          () => {
                            (d = null), _(), (u = setInterval(_, e));
                          },
                          Math.floor(e * Math.random()),
                        );
                        return;
                      }
                      case "heartbeat_ack":
                        g = !0;
                    }
                  }),
                  (r.onopen = async () => {
                    (l = await (0, N.W_)()), (o = await (0, N.dK)(l));
                    let e = await (0, N.Pk)(l);
                    s("connected, handshaking with fingerprint: ".concat(e)),
                      r.send(
                        JSON.stringify({ op: "init", encoded_public_key: o }),
                      ),
                      c(l);
                  }),
                  (r.onclose = (e) => {
                    s(
                      "disconnected, code: "
                        .concat(e.code, " ")
                        .concat(e.reason),
                    ),
                      p();
                  }),
                  (r.onerror = (e) => {
                    s("disconnected, error: ".concat(JSON.stringify(e))), p();
                  }),
                  () => {
                    s("cleaning up"),
                      (r.onopen = () => null),
                      (r.onmessage = () => null),
                      (r.onclose = () => null),
                      (r.onerror = () => null),
                      r.close(1e3),
                      h.cancel(),
                      null != d && clearTimeout(d),
                      null != u && clearInterval(u);
                  }
                );
              }, [m, e, t, h, p]),
              { state: s, rsaKeyPair: l, cancel: m, handleFailure: p }
            );
          })(t),
          m = (function (e) {
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
          o.useEffect(() => {
            4 === r.step &&
              null != r.ticket &&
              h.tn
                .post({
                  url: T.ANM.REMOTE_AUTH_LOGIN,
                  body: { ticket: r.ticket },
                  oldFormErrors: !0,
                })
                .then(async (e) => {
                  if (null != s)
                    try {
                      let n = await (0, N.FW)(s, e.body.encrypted_token);
                      t(n);
                    } catch (e) {
                      c();
                    }
                  else c();
                })
                .catch(() => {
                  c();
                });
          }, [r, t, s, c]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("div", { className: j.verticalSeparator }),
              (0, l.jsx)(g.Sequencer, {
                fillParent: !0,
                className: j.qrLogin,
                step: m,
                steps: [0, 1],
                children: (0, l.jsx)("div", {
                  className: j.qrLoginInner,
                  children: (0, l.jsx)(D, {
                    state: r,
                    cancel: a,
                    conditionalMediationAbortController: n,
                    isPasswordlessActive: i,
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
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        a = n(388905),
        l = n(463143);
      function o(e) {
        let { children: t, className: n, ...r } = e,
          o = t();
        return (0, i.jsx)(a.ZP, {
          ...r,
          className: s()(n, l.container),
          contentClassName: l.content,
          children: o.map((e, t) =>
            (0, i.jsx)(
              "div",
              {
                className: l.column,
                style: { flexBasis: "".concat(100 / o.length, "%") },
                children: e,
              },
              t,
            ),
          ),
        });
      }
    },
    649156: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(3570),
        s = n(685311),
        a = n(186901);
      t.Z = function (e) {
        let { match: t, location: n } = e,
          l = async (e, t) => {
            await (0, r.s)(a.jE.PICK_GUILD_SETTINGS, {
              section: e.params.section,
              subsection: e.params.subsection,
              search: t.search,
            });
          };
        return (0, i.jsx)(s.Z, { match: t, location: n, attemptDeepLink: l });
      };
    },
    423527: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return eo;
        },
      }),
        n(757143),
        n(47120),
        n(627341);
      var i,
        r = n(200651),
        s = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(593473),
        c = n(278074),
        u = n(990547),
        d = n(442837),
        h = n(846519),
        g = n(481060),
        m = n(893776),
        p = n(899370),
        f = n(224841),
        _ = n(13430),
        x = n(213609),
        E = n(882037),
        v = n(201207),
        I = n(481230),
        b = n(388905),
        N = n(853268),
        C = n(639946),
        S = n(616952),
        T = n(792766),
        A = n(692483),
        Z = n(100159),
        j = n(473855),
        R = n(726745),
        O = n(929809),
        L = n(541692),
        P = n(986197),
        y = n(135200),
        D = n(219496),
        k = n(794099),
        M = n(807369),
        w = n(180529),
        B = n(108427),
        G = n(314897),
        U = n(480294),
        F = n(896797),
        z = n(626135),
        V = n(585483),
        K = n(70956),
        H = n(624138),
        W = n(481153),
        q = n(588705),
        Y = n(163671),
        J = n(981631),
        X = n(355142),
        Q = n(188785),
        $ = n(701476),
        ee = n(801461),
        et = n(388032),
        en = n(730181),
        ei = n(971436);
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
      let es = /\.$/,
        ea = (e) =>
          Array.isArray(e)
            ? e
                .map((e) => e.replace(es, ""))
                .join(". ")
                .trim()
            : e;
      class el extends (i = s.PureComponent) {
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
            v.Z.trackExposure({ location: "0ba758_1" });
          let { giftCodeSKU: e, invite: t } = this.props;
          z.default.track(
            J.rMx.REGISTER_VIEWED,
            {
              location:
                null != t ? "Invite Register Page" : "Non-Invite Register Page",
              registration_source: this.registrationSource,
              ...(null != e ? (0, Z.Z)(e, !1, !1) : {}),
            },
            { flush: !0 },
          ),
            null == this.props.consentRequired && m.Z.getLocationMetadata(),
            (0, B.e)("register");
        }
        componentWillUnmount() {
          this._retryTimer.stop();
        }
        static getDerivedStateFromProps(e, t) {
          let { consentRequired: n } = e,
            { consentRequiredProp: i } = t;
          return null == i && null != n
            ? { consent: !n, consentRequiredProp: n }
            : { consentRequiredProp: n };
        }
        componentDidUpdate(e, t) {
          let {
              apiErrors: n,
              authenticated: i,
              isUnderage: r,
              invite: s,
              onChangeStep: a,
            } = this.props,
            { parsedDateOfBirth: l } = this.state;
          (e.apiErrors !== n || t.parsedDateOfBirth !== l) &&
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
                          this.props.apiErrors.retry_after * K.Z.Millis.SECOND,
                          () => {
                            this.setState({ isRateLimited: !1 });
                          },
                        ))),
            i &&
              !e.authenticated &&
              ((0, O.c)($.M5.ORGANIC_REGISTERED),
              this.redirectIfAuthenticated());
          let o = X.EW.FULL;
          r || this.hasError("date_of_birth")
            ? (o = X.EW.AGE_GATE)
            : null != s &&
              (null != s.guild || null != s.channel) &&
              (o = X.EW.INVITE),
            a(o);
        }
        redirectIfAuthenticated() {
          let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
          if (!!e) t(null != n ? n : F.Z.defaultRoute);
        }
        async handleRegister() {
          let {
              email: e,
              username: t,
              globalName: n,
              password: i,
              consent: r,
              parsedDateOfBirth: s,
            } = this.state,
            {
              invite: a,
              guildTemplate: l,
              giftCode: o,
              onRegister: c,
              usernameSuggestion: u,
              isMobileWebInviteRegistration: d,
            } = this.props,
            h = null != a ? a.code : null,
            g = null != o ? o.skuId : null,
            m = E.MD.getState(),
            p = (0, H.Ew)(u) ? null : t === u,
            f = Q.a ? await (0, A.K)(t) : t,
            _ = Q.a ? await (0, A.K)(n) : n;
          V.S.dispatch(J.CkL.WAVE_EMPHASIZE);
          try {
            d || null == a
              ? await (0, I.R$)({
                  email: e,
                  username: f,
                  globalName: _,
                  consent: r,
                  password: i,
                  invite: h,
                  usedUsernameSuggestion: p,
                  guildTemplateCode: null == l ? void 0 : l.code,
                  giftCodeSKUId: g,
                  birthday: s,
                  promoEmailConsent: m.required ? m : null,
                })
              : await (0, I.ZP)({
                  consent: r,
                  invite: h,
                  giftCodeSKUId: g,
                  usedUsernameSuggestion: p,
                  globalName: _,
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
                hasProminentCopy: i,
              },
            } = this.props,
            s = null,
            a = null;
          return (
            t
              ? (a = (0, r.jsx)(N.Z, {
                  value: e,
                  onChange: (e) => this.setState({ consent: e }),
                  subText: et.intl.format(et.t.qMDAPz, {
                    termsURL: J.EYA.TERMS,
                    privacyURL: J.EYA.PRIVACY,
                  }),
                }))
              : (s = (0, r.jsx)(b.i_, {
                  isProminent: !!i,
                  className: ei.marginTop8,
                  children: n
                    ? et.intl.format(et.t.oRFxPj, {
                        buttonText: et.intl.string(et.t["3PatS0"]),
                        termsURL: J.EYA.TERMS,
                        privacyURL: J.EYA.PRIVACY,
                      })
                    : et.intl.format(et.t["F+0zT0"], {
                        termsURL: J.EYA.TERMS,
                        privacyURL: J.EYA.PRIVACY,
                      }),
                })),
            { subText: s, consentText: a }
          );
        }
        renderInviteResolving() {
          let { authBoxClassName: e } = this.props,
            t = (e) => {
              this.setState({ globalName: e });
            },
            n = this.state.globalName;
          return (0, r.jsxs)(b.ZP, {
            className: e,
            children: [
              (0, r.jsx)(q.R, {}),
              (0, r.jsxs)(b.gO, {
                className: ei.marginTop40,
                children: [
                  (0, r.jsx)(g.FormTitle, {
                    children: et.intl.string(et.t.TWzdWl),
                  }),
                  (0, r.jsx)(g.Tooltip, {
                    text: et.intl.string(et.t["hBB85+"]),
                    position: "right",
                    color: g.Tooltip.Colors.BRAND,
                    children: (e) => {
                      let { onMouseEnter: i, onMouseLeave: s } = e;
                      return (0, r.jsx)(b.II, {
                        autoFocus: !0,
                        className: ei.marginBottom8,
                        name: "username",
                        value: n,
                        placeholder: et.intl.string(et.t["09Q8ys"]),
                        onChange: t,
                        onMouseEnter: i,
                        onMouseLeave: s,
                      });
                    },
                  }),
                  (0, r.jsx)(b.zx, {
                    className: ei.marginTop20,
                    disabled: !0,
                    children: et.intl.string(et.t["3PatS0"]),
                  }),
                  (0, r.jsx)(b.i_, {
                    disabled: !0,
                    className: ei.marginTop8,
                    children: et.intl.format(et.t["F+0zT0"], {
                      termsURL: J.EYA.TERMS,
                      privacyURL: J.EYA.PRIVACY,
                    }),
                  }),
                  Q.a
                    ? null
                    : (0, r.jsx)(b.zx, {
                        look: b.zx.Looks.LINK,
                        color: b.zx.Colors.LINK,
                        disabled: !0,
                        className: ei.marginTop20,
                        children: et.intl.string(et.t["r/jzu7"]),
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
            ? (0, r.jsx)(T.Z, {
                stageInstance: e.stage_instance,
                guild: e.guild,
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, r.jsx)(C.r, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
                })
              : (0, r.jsx)(q.Z, { invite: e });
        }
        renderInviteButton() {
          let { invite: e, registering: t, consentRequired: n } = this.props,
            { consent: i } = this.state,
            s = b.zx.Colors.BRAND,
            a = et.intl.string(et.t["3PatS0"]);
          return (
            (null == e ? void 0 : e.stage_instance) != null &&
              ((s = b.zx.Colors.GREEN), (a = et.intl.string(et.t["5UKyUl"]))),
            (0, r.jsx)(g.Tooltip, {
              text: !i && n ? et.intl.string(et.t.AY4IVF) : null,
              children: (e) =>
                (0, r.jsx)("div", {
                  className: ei.marginTop20,
                  ...e,
                  children: (0, r.jsx)(b.zx, {
                    type: "submit",
                    submitting: t,
                    disabled: !this.hasConsent(),
                    color: s,
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
              apiErrors: { username: n, global_name: i },
            } = this.props,
            { subText: s, consentText: a } = this.renderConsentComponents(),
            l =
              (null == e ? void 0 : e.stage_instance) != null ||
              (null == e ? void 0 : e.guild_scheduled_event) != null,
            o = (e) => {
              this.setState({ globalName: e });
            },
            c = this.state.globalName;
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsxs)(b.ZP, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: t,
                children: [
                  this.renderInviteHeader(),
                  l ? (0, r.jsx)("div", { className: en.divider }) : null,
                  (0, r.jsxs)(b.gO, {
                    className: l ? void 0 : ei.marginTop40,
                    children: [
                      (0, r.jsx)(g.FormTitle, {
                        error: ea(null != i ? i : n),
                        children: et.intl.string(et.t["9AjdkJ"]),
                      }),
                      (0, r.jsx)(g.Tooltip, {
                        text: et.intl.string(et.t["hBB85+"]),
                        position: "right",
                        color: g.Tooltip.Colors.BRAND,
                        children: (e) => {
                          let { onMouseEnter: t, onMouseLeave: s } = e;
                          return (0, r.jsx)(b.II, {
                            autoFocus: !0,
                            className: ei.marginBottom8,
                            name: "global_name",
                            value: c,
                            placeholder: et.intl.string(et.t["09Q8ys"]),
                            onChange: o,
                            error: null != n || null != i ? "" : null,
                            onMouseEnter: t,
                            onMouseLeave: s,
                          });
                        },
                      }),
                      (0, r.jsx)(g.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: et.intl.string(et.t["330TCQ"]),
                      }),
                      this.renderInviteButton(),
                      s,
                      a,
                      Q.a
                        ? null
                        : (0, r.jsx)(b.zx, {
                            look: b.zx.Looks.LINK,
                            color: b.zx.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: ei.marginTop20,
                            children: et.intl.string(et.t["r/jzu7"]),
                          }),
                    ],
                  }),
                ],
              }),
              null != e && l
                ? (0, r.jsx)(b.ZP, {
                    className: ei.marginTop20,
                    children: (0, r.jsx)(T.y, {
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
            : (0, r.jsx)(b.i_, {
                className: l()(ei.marginTop20, en.errorMessage),
                children: e,
              });
        }
        renderFull(e, t) {
          let {
              email: n,
              username: i,
              globalName: a,
              password: o,
              consent: c,
              parsedDateOfBirth: u,
              globalNameFocused: d,
              emailClientError: h,
              usernameClientError: m,
              passwordClientError: p,
              dateOfBirthClientError: f,
            } = this.state,
            {
              registering: x,
              consentRequired: E,
              isMobileWebInviteRegistration: v,
              uniqueUsernameRegistrationConfig: { suggestions: I },
              authBoxClassName: N,
              apiErrors: {
                email: C,
                username: T,
                global_name: A,
                password: Z,
                date_of_birth: j,
              } = {},
              hasLoggedInAccounts: R,
              registrationCopyExperimentConfig: { hasCopyAboveButton: O },
            } = this.props,
            { subText: L, consentText: D } = this.renderConsentComponents(),
            k = this.renderErrorMessage(),
            M = (0, r.jsx)(g.Tooltip, {
              text: !c && E ? et.intl.string(et.t.AY4IVF) : null,
              children: (e) =>
                (0, r.jsx)("div", {
                  className: ei.marginTop20,
                  ...e,
                  children: (0, r.jsx)(b.zx, {
                    type: "submit",
                    submitting: x,
                    disabled: !this.hasConsent() || this.state.isRateLimited,
                    children: et.intl.string(et.t["3PatS0"]),
                  }),
                }),
            }),
            B = async () => {
              this.setState({ usernameFocused: !0 }),
                I &&
                  a.length > 0 &&
                  !y.Z.wasRegistrationSuggestionFetched(a) &&
                  (await P.Z.fetchSuggestionsRegistration(a));
            },
            G =
              null != e
                ? (0, r.jsx)(s.Fragment, { children: e() }, "custom-header")
                : (0, r.jsx)(
                    b.Dx,
                    { children: et.intl.string(et.t.wC4TlZ) },
                    "title",
                  ),
            U = (0, r.jsxs)(b.gO, {
              className: ei.marginTop20,
              children: [
                (0, r.jsx)(b.II, {
                  autoFocus: !0,
                  className: ei.marginBottom20,
                  label: et.intl.string(et.t.dI4d4e),
                  name: "email",
                  value: n,
                  onChange: (e) =>
                    this.setState({
                      email: e,
                      emailClientError:
                        0 === e.length ? et.intl.string(et.t.EkokLy) : null,
                    }),
                  error: null != h ? h : ea(C),
                  type: "email",
                  setRef: (e) => {
                    this.emailRef = e;
                  },
                  required: !0,
                }),
                (0, r.jsx)(b.II, {
                  label: et.intl.string(et.t["9AjdkJ"]),
                  className: ei.marginBottom20,
                  name: "global_name",
                  value: a,
                  onChange: (e) => this.setState({ globalName: e }),
                  error: ea(A),
                  maxLength: ee.hy,
                  setRef: (e) => {
                    this.globalNameRef = e;
                  },
                  onFocus: () => this.setState({ globalNameFocused: !0 }),
                  onBlur: () => this.setState({ globalNameFocused: !1 }),
                }),
                (0, r.jsx)(w.Z, {
                  show: d,
                  top: -12,
                  bottom: 20,
                  children: (0, r.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: et.intl.string(et.t["330TCQ"]),
                  }),
                }),
                (0, r.jsxs)("div", {
                  onBlur: () => this.setState({ usernameFocused: !1 }),
                  onFocus: B,
                  tabIndex: -1,
                  children: [
                    (0, r.jsx)(b.II, {
                      label: et.intl.string(et.t.TWzdWl),
                      className: ei.marginBottom20,
                      name: "username",
                      value: i,
                      onChange: (e) => {
                        this.setState({
                          username: e.toLocaleLowerCase(),
                          usernameClientError:
                            0 === e.length ? et.intl.string(et.t.EkokLy) : null,
                        });
                      },
                      error: null != m ? m : ea(T),
                      setRef: (e) => {
                        this.usernameRef = e;
                      },
                      required: !0,
                    }),
                    this.renderUsernameValidation(),
                  ],
                }),
                (0, r.jsx)(b.II, {
                  label: et.intl.string(et.t["CIGa+/"]),
                  name: "password",
                  value: o,
                  onChange: (e) =>
                    this.setState({
                      password: e,
                      passwordClientError:
                        0 === e.length ? et.intl.string(et.t.EkokLy) : null,
                    }),
                  error: null != p ? p : ea(Z),
                  type: "password",
                  setRef: (e) => {
                    this.passwordRef = e;
                  },
                  required: !0,
                }),
                (0, r.jsx)(_.Z, {
                  label: et.intl.string(et.t.rhBeKS),
                  wrapperClassName: ei.marginTop20,
                  name: "date_of_birth",
                  onChange: this.handleBirthdayChange,
                  ref: this.dateOfBirthRef,
                  error: null != f ? f : ea(j),
                  value: u,
                  required: !0,
                }),
                O && L,
                (0, r.jsx)(S.Z, {}),
                M,
                k,
                D,
                !O && L,
                Q.a
                  ? null
                  : (0, r.jsx)(b.zx, {
                      look: v ? b.zx.Looks.FILLED : b.zx.Looks.LINK,
                      color: v ? b.zx.Colors.PRIMARY : b.zx.Colors.LINK,
                      onClick: this.handleGotoLogin,
                      className: ei.marginTop20,
                      children: et.intl.string(et.t["r/jzu7"]),
                    }),
              ],
            });
          return t
            ? (0, r.jsx)(Y.Z, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: l()(N, en.horizontalAuthBox),
                children: () => [
                  G,
                  (0, r.jsxs)(
                    "div",
                    {
                      className: en.flex,
                      children: [
                        (0, r.jsx)(b.Dx, {
                          className: en.createAccountTemplateHeader,
                          children: et.intl.string(et.t.wC4TlZ),
                        }),
                        U,
                      ],
                    },
                    "register-title",
                  ),
                ],
              })
            : (0, r.jsxs)(b.ZP, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: N,
                children: [
                  R && !v
                    ? (0, r.jsx)(b.zx, {
                        onClick: this.handleGotoLogin,
                        look: b.zx.Looks.LINK,
                        color: b.zx.Colors.PRIMARY,
                        className: en.goBackButton,
                        children: (0, r.jsxs)("div", {
                          className: en.content,
                          children: [
                            (0, r.jsx)(g.ChevronSmallLeftIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: en.caret,
                            }),
                            (0, r.jsx)(g.Text, {
                              variant: "text-md/normal",
                              children: et.intl.string(et.t["1MrpWF"]),
                            }),
                          ],
                        }),
                      })
                    : null,
                  G,
                  U,
                ],
              });
        }
        render() {
          let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
          if (e || this.hasError("date_of_birth")) return (0, r.jsx)(f.Z, {});
          let { invite: n, giftCode: i, guildTemplate: s } = this.props,
            a =
              null != n &&
              null == n.guild &&
              null == n.channel &&
              null != n.inviter;
          return null == n || a || t
            ? null != s
              ? this.renderFull(() => (0, r.jsx)(j.Z, { guildTemplate: s }), !0)
              : null != i
                ? this.renderFull(() => (0, r.jsx)(W.Z, { giftCode: i }))
                : null != n && a && n.state === J.r2o.RESOLVED && !t
                  ? this.renderFull(() =>
                      (0, r.jsx)(q.Z, { invite: n, isRegister: !0 }),
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
            er(this, "dateOfBirthRef", s.createRef()),
            er(this, "_retryTimer", new h.V7()),
            er(this, "handleGotoLogin", (e) => {
              let t;
              let { email: n } = this.state,
                {
                  giftCode: i,
                  guildTemplate: r,
                  invite: s,
                  location: a,
                  onLoginStart: l,
                  redirectTo: c,
                  transitionTo: u,
                  isMobileWebInviteRegistration: d,
                } = this.props;
              if (d) {
                null == l || l(e);
                return;
              }
              let h = null != a ? (0, o.parse)(a.search) : {};
              null != s
                ? (t = J.Z5c.INVITE_LOGIN(s.code))
                : null != i
                  ? (t = J.Z5c.GIFT_CODE_LOGIN(i.code))
                  : null != r
                    ? (t = J.Z5c.GUILD_TEMPLATE_LOGIN(r.code))
                    : null != c
                      ? ((t = J.Z5c.LOGIN), (h.redirect_to = c))
                      : ((t = J.Z5c.LOGIN), "" !== n && (h = { email: n })),
                m.Z.loginReset(),
                u(t, { search: (0, o.stringify)(h) }),
                null == l || l(e),
                V.S.dispatch(J.CkL.WAVE_EMPHASIZE);
            }),
            er(this, "handleSubmit", (e) => {
              null == e || e.preventDefault();
              let {
                  email: t,
                  username: n,
                  password: i,
                  parsedDateOfBirth: r,
                } = this.state,
                { invite: s, consentRequired: a } = this.props;
              if (null !== a) {
                if (null == s) {
                  let e = !1;
                  if (
                    (0 === t.length &&
                      (this.setState({
                        emailClientError: et.intl.string(et.t.EkokLy),
                      }),
                      (e = !0)),
                    0 === n.length &&
                      (this.setState({
                        usernameClientError: et.intl.string(et.t.EkokLy),
                      }),
                      (e = !0)),
                    0 === i.length &&
                      (this.setState({
                        passwordClientError: et.intl.string(et.t.EkokLy),
                      }),
                      (e = !0)),
                    null == r &&
                      (this.setState({
                        dateOfBirthClientError: et.intl.string(et.t.EkokLy),
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
                  usernameSuggestion: i,
                  uniqueUsernameRegistrationConfig: { livecheckEnabled: s },
                } = this.props;
              return (0, r.jsx)(ec, {
                username: e,
                suggestion: i,
                livecheckEnabled: s,
                globalName: t,
                isUsernameFocused: n,
                onClickSuggestion: () => {
                  null != this.usernameRef && this.usernameRef.focus(),
                    null != i && i.length > 0 && this.setState({ username: i });
                },
              });
            });
          let n = null != e.location ? (0, o.parse)(e.location.search) : {};
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
      function eo(e) {
        let t = (0, d.cj)([U.Z, G.default, p.Z, L.Z, R.Z], () => ({
            consentRequired: U.Z.getAuthenticationConsentRequired(),
            registering: G.default.getRegisterStatus() === J.$ib.REGISTERING,
            apiErrors: G.default.getErrors(),
            authenticated: G.default.isAuthenticated(),
            isUnderage: p.Z.isUnderageAnonymous(),
            country: L.Z.getCountryCode(),
            hasLoggedInAccounts: R.Z.getHasLoggedInAccounts(),
          })),
          n = (0, k.F4)(),
          i = (0, d.e7)([y.Z], () => y.Z.registrationUsernameSuggestion()),
          [a, l] = s.useState(X.EW.FULL);
        return (
          (0, x.Z)(
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
          (0, r.jsx)(el, {
            onChangeStep: (e) => l(e),
            registrationCopyExperimentConfig: v.Z.getCurrentConfig(
              { location: "0ba758_2" },
              { autoTrackExposure: !1 },
            ),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: i,
            ...e,
            ...t,
          })
        );
      }
      function ec(e) {
        let t,
          {
            username: n,
            suggestion: i,
            globalName: s,
            livecheckEnabled: a,
            isUsernameFocused: l,
            onClickSuggestion: o,
          } = e,
          u = (0, M.a)(n, a, !0),
          d = a && n.length > 0;
        return (
          (t = d
            ? (0, c.EQ)(u)
                .with({ type: D.K.ERROR, message: c.P.select() }, (e) =>
                  (0, r.jsx)(g.Text, {
                    className: en.messageNegative,
                    variant: "text-sm/normal",
                    children: e,
                  }),
                )
                .with({ type: D.K.AVAILABLE, message: c.P.select() }, (e) =>
                  (0, r.jsx)(g.Text, {
                    className: en.messagePositive,
                    variant: "text-sm/normal",
                    children: e,
                  }),
                )
                .otherwise(() =>
                  (0, r.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: et.intl.string(et.t.z7c4bG),
                  }),
                )
            : null != i && i.length > 0 && s.length > 0
              ? (0, r.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: et.intl.format(et.t.nDGqqq, {
                    suggestion: i,
                    nameOnClick: o,
                  }),
                })
              : (0, r.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: et.intl.string(et.t.z7c4bG),
                })),
          (0, r.jsx)(w.Z, {
            show: (d && (null == u ? void 0 : u.type) === D.K.ERROR) || l,
            top: -12,
            bottom: 20,
            children: t,
          })
        );
      }
      er(el, "defaultProps", {
        giftCodeResolved: !1,
        transitionTo: (e) => n.g.location.assign(e),
      });
    },
    424044: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(442837),
        a = n(481060),
        l = n(893776),
        o = n(232567),
        c = n(129293),
        u = n(388905),
        d = n(353926),
        h = n(185625),
        g = n(551549),
        m = n(108427),
        p = n(314897),
        f = n(981631),
        _ = n(388032),
        x = n(971436);
      s.ZP.initialize();
      t.Z = (e) => {
        let { location: t } = e,
          n = (0, s.e7)([p.default], () => p.default.isAuthenticated()),
          E = (0, s.e7)([d.Z], () => d.Z.hasLoadedExperiments),
          v = (0, g.oK)("RSL - Landing Page"),
          [I, b] = r.useState(!1),
          [N, C] = r.useState(_.intl.string(_.t["9exy+f"])),
          [S, T] = r.useState(!0),
          A = (e) => {
            switch (e) {
              case f.evJ.INVALID_FORM_BODY:
              case f.evJ.DSA_RSL_REPORT_NOT_FOUND:
                C(_.intl.string(_.t.bzXDfX));
                break;
              case f.evJ.DSA_RSL_ALREADY_REQUESTED:
                C(_.intl.string(_.t.rV00ws));
                break;
              case f.evJ.DSA_RSL_LIMITED_TIME:
                C(_.intl.string(_.t["0dI29v"]));
                break;
              case f.evJ.DSA_RSL_REPORT_INELIGIBLE:
                C(_.intl.string(_.t["RGa/GR"]));
                break;
              default:
                C(_.intl.string(_.t["0QLzfn"]));
            }
          };
        return (
          r.useEffect(() => {
            n
              ? (T(!0),
                o
                  .k({ withAnalyticsToken: !0 })
                  .then(() => T(!1))
                  .catch(() => T(!1)))
              : T(!1);
          }, [n]),
          r.useEffect(() => {
            !E && !v && l.Z.getExperiments();
          }, [E, v]),
          r.useEffect(() => {
            let e = async (e) => {
              var t, n;
              try {
                let n = null != e ? await (0, h.hs)(e) : void 0;
                null != n
                  ? C(_.intl.string(_.t.e6mZMj))
                  : A(null === (t = n.body) || void 0 === t ? void 0 : t.code);
              } catch (e) {
                A(null === (n = e.body) || void 0 === n ? void 0 : n.code);
              } finally {
                b(!1);
              }
            };
            b(!0), e((0, c.Z)(t)), (0, m.e)("report_second_look");
          }, [t]),
          v &&
            !S &&
            (0, i.jsxs)(u.ZP, {
              children: [
                (0, i.jsx)(u.Dx, { className: x.marginBottom8, children: N }),
                I && (0, i.jsx)(a.Spinner, {}),
              ],
            })
        );
      };
    },
    881317: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(990547),
        a = n(442837),
        l = n(481060),
        o = n(893776),
        c = n(232567),
        u = n(388905),
        d = n(353926),
        h = n(82554),
        g = n(726521),
        m = n(185625),
        p = n(314897),
        f = n(63063),
        _ = n(981631),
        x = n(388032),
        E = n(558493),
        v = n(971436);
      a.ZP.initialize();
      let I = (e) => {
        let { title: t, menuType: r } = e,
          a = () => {
            (0, l.openModalLazy)(async () => {
              let { default: e } = await n.e("93288").then(n.bind(n, 396410));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  onSuccess: o,
                  headerText: x.intl.string(x.t.ZLRYGR),
                  confirmButtonText: x.intl.string(x.t.PDTjLC),
                  confirmButtonColor: l.Button.Colors.BRAND,
                  impressionName: s.ImpressionNames.URF_ENTER_EMAIL,
                });
            });
          },
          o = (e) => {
            let t = async () => {
                await (0, m.yL)(r, e);
              },
              a = async (t) => await (0, m.RV)(r, e, t),
              o = (e) => {
                let t = null == e ? void 0 : e.token;
                r === h.BM.MESSAGE
                  ? (0, g.eE)(t)
                  : r === h.BM.USER && (0, g.JM)(t);
              };
            t(),
              (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e("94566").then(n.bind(n, 965072));
                return (n) =>
                  (0, i.jsx)(e, {
                    ...n,
                    onFormSubmit: a,
                    onResend: t,
                    onSuccess: o,
                    headerText: x.intl.string(x.t.H3Q7U1),
                    confirmButtonText: x.intl.string(x.t["13ofGh"]),
                    confirmButtonColor: l.Button.Colors.BRAND,
                    impressionName: s.ImpressionNames.URF_CONFIRM_EMAIL_CODE,
                  });
              });
          };
        return (0, i.jsx)("div", {
          className: E.buttonColumn,
          children: (0, i.jsx)(l.Button, {
            className: v.__invalid_reportButton,
            fullWidth: !0,
            color: l.Button.Colors.BRAND,
            onClick: () => a(),
            children: t,
          }),
        });
      };
      t.Z = () => {
        let [e, t] = r.useState(!0),
          [n, s] = r.useState(!1),
          g = (0, a.e7)([p.default], () => p.default.isAuthenticated()),
          b = (0, a.e7)([d.Z], () => d.Z.hasLoadedExperiments),
          N = () => {
            (0, m.qJ)()
              .then(() => {
                t(!1), s(!0);
              })
              .catch(() => {
                t(!1), s(!1);
              });
          };
        return (
          r.useEffect(() => {
            g
              ? (t(!0),
                c
                  .k({ withAnalyticsToken: !0 })
                  .then(() => N())
                  .catch(() => t(!1)))
              : N();
          }, [g]),
          r.useEffect(() => {
            (async () => {
              !b && (await o.Z.getLocationMetadata(), o.Z.getExperiments());
            })();
          }, [b]),
          e || !b
            ? (0, i.jsx)(u.ZP, { children: (0, i.jsx)(l.Spinner, {}) })
            : n &&
              (0, i.jsxs)(u.ZP, {
                children: [
                  (0, i.jsx)(u.Dx, {
                    className: v.marginBottom8,
                    children: x.intl.string(x.t.Z11w19),
                  }),
                  (0, i.jsx)(u.DK, {
                    className: v.marginBottom8,
                    children: x.intl.format(x.t["532l+v"], {
                      supportURL: f.Z.getArticleURL(
                        _.BhN.COPYRIGHT_AND_IP_POLICY,
                      ),
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: E.container,
                    children: [
                      (0, i.jsx)(I, {
                        title: x.intl.string(x.t.fuqnBA),
                        menuType: h.BM.MESSAGE,
                      }),
                      (0, i.jsx)(I, {
                        title: x.intl.string(x.t.F4jrRU),
                        menuType: h.BM.USER,
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
      var i,
        r = n(200651),
        s = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(442837),
        c = n(893776),
        u = n(129293),
        d = n(388905),
        h = n(17894),
        g = n(108427),
        m = n(314897),
        p = n(626135),
        f = n(981631),
        _ = n(388032),
        x = n(960136),
        E = n(971436);
      function v(e, t, n) {
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
      class I extends (i = s.PureComponent) {
        componentDidMount() {
          this.handleVerify(), (0, g.e)("verify_email");
        }
        renderVerifyFailed() {
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.Ee, {
                src: n(375673),
                className: l()(x.image, E.marginBottom20),
              }),
              (0, r.jsx)(d.Dx, {
                className: E.marginBottom8,
                children: _.intl.string(_.t.PCgG39),
              }),
              (0, r.jsx)(d.DK, {
                className: E.marginBottom40,
                children: _.intl.string(_.t.tQpeAw),
              }),
              (0, r.jsx)(d.zx, {
                onClick: this.handleLogin,
                children: _.intl.string(_.t.dKhVQE),
              }),
            ],
          });
        }
        renderVerifySucceeded() {
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.Ee, {
                src: n(73962),
                className: l()(x.image, E.marginBottom20),
              }),
              (0, r.jsx)(d.Dx, {
                className: E.marginBottom40,
                children: _.intl.string(_.t.dAfGb2),
              }),
              (0, r.jsx)(d.zx, {
                onClick: this.handleOpenApp,
                children: _.intl.string(_.t.uJWIj4),
              }),
            ],
          });
        }
        renderVerifying() {
          return (0, r.jsxs)(d.ZP, {
            children: [
              (0, r.jsx)(d.Ee, {
                src: n(892235),
                className: l()(x.image, E.marginBottom20),
              }),
              (0, r.jsx)(d.Dx, {
                className: E.marginBottom8,
                children: _.intl.string(_.t["0c8+5u"]),
              }),
              (0, r.jsx)(d.DK, {
                className: E.marginBottom40,
                children: _.intl.string(_.t.ULTCBA),
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
            v(this, "handleVerify", () => {
              let e = (0, u.Z)(this.props.location);
              null != e && c.Z.verify(e);
            }),
            v(this, "handleLogin", () => {
              let { transitionTo: e } = this.props;
              e(f.Z5c.LOGIN);
            }),
            v(this, "handleOpenApp", () => {
              let { verifyingUserId: e } = this.props;
              p.default.track(f.rMx.VERIFY_ACCOUNT_APP_OPENED, {
                verifying_user_id: e,
              }),
                (0, h.Z)("verify_email");
            });
        }
      }
      v(I, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) }),
        (t.Z = o.ZP.connectStores([m.default], () => ({
          verifyFailed: m.default.didVerifyFail(),
          verifyErrors: m.default.getVerifyErrors(),
          verifySucceeded: m.default.didVerifySucceed(),
          fingerprint: m.default.getFingerprint(),
          verifyingUserId: m.default.getVerifyingUserId(),
        }))(I));
    },
    937154: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var i = n(192379);
      function r() {
        return (
          "undefined" == typeof document ||
          "visible" === document.visibilityState
        );
      }
      function s() {
        let [e, t] = (0, i.useState)(r());
        return (
          (0, i.useEffect)(() => {
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
      var i = n(544891),
        r = n(570140),
        s = n(893776),
        a = n(899742),
        l = n(743142),
        o = n(117240),
        c = n(626135),
        u = n(317770),
        d = n(981631);
      function h(e, t) {
        c.default.track(d.rMx.BROWSER_HANDOFF_SUCCEEDED, {
          authenticated: e,
          handoff_source: t,
        });
      }
      class g extends u.Z {
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
            handoffSource: o,
          } = e;
          null != n
            ? i.tn
                .post({
                  url: d.ANM.HANDOFF_EXCHANGE,
                  body: { key: t, handoff_token: n },
                })
                .then(
                  (e) => {
                    let { body: t } = e;
                    (0, a.Vb)(t.user), s.Z.loginToken(t.token, !1), h(!0, o);
                  },
                  (e) => {
                    if (
                      (null != r && h(!1, o),
                      s.Z.setFingerprint(r),
                      (0, a.lx)(),
                      o === l.F.ROLE_SUBSCRIPTION)
                    ) {
                      var t;
                      c.default.track(d.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason:
                          null !== (t = e.message) && void 0 !== t ? t : e.text,
                        handoff_source: o,
                      });
                    }
                  },
                )
            : null != r
              ? (s.Z.setFingerprint(r), h(!1, o), (0, a.lx)())
              : (s.Z.setFingerprint(r), (0, a.by)());
        }
        constructor(...e) {
          var t, n, i;
          super(...e),
            (t = this),
            (n = "handleEnd"),
            (i = (e) => {
              let { handoffToken: t, fingerprint: n } = e,
                i = o.Z.key;
              null != i && o.Z.isHandoffAvailable()
                ? this.handleHandoff({
                    handoffKey: i,
                    handoffToken: t,
                    fingerprint: n,
                    handoffSource: void 0,
                  })
                : (s.Z.setFingerprint(null), (0, a.by)());
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = i);
        }
      }
      t.Z = new g();
    },
    605782: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        s = n(512969),
        a = n(215569);
      class l extends r.Component {
        render() {
          let {
              children: e,
              location: t,
              history: n,
              staticContext: l,
              match: o,
              ...c
            } = this.props,
            u = null,
            d = null;
          return (
            r.Children.forEach(e, (e) => {
              if (null == u && r.isValidElement(e)) {
                let { component: i, render: a, ...o } = e.props,
                  c = o.path || o.from;
                if (
                  null !=
                  (u =
                    null != c ? (0, s.LX)(t.pathname, { ...o, path: c }) : null)
                )
                  (o = {
                    ...o,
                    key: c,
                    location: t,
                    match: u,
                    history: n,
                    staticContext: l,
                  }),
                    null != i
                      ? (d = r.createElement(i, o))
                      : null != a && (d = a(o));
              }
            }),
            (0, i.jsx)(a.W, { ...c, children: d })
          );
        }
      }
      t.Z = (0, s.EN)(l);
    },
    521379: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(757143);
      var i,
        r,
        s,
        a,
        l = n(200651),
        o = n(192379),
        c = n(442837),
        u = n(388905),
        d = n(108427),
        h = n(559786);
      c.ZP.initialize();
      class g extends (i = o.PureComponent) {
        componentDidMount() {
          (0, d.e)("account_revert");
        }
        render() {
          let { token: e } = this.props.match.params;
          return (0, l.jsx)(u.ZP, {
            style: { padding: 0 },
            children: (0, l.jsx)(h.Z, { width: 464, token: e, ...this.props }),
          });
        }
      }
      (r = g),
        (s = "defaultProps"),
        (a = {
          transitionTo: (e) => n.g.location.assign(e),
          replaceWith: (e) => n.g.location.replace(e),
        }),
        s in r
          ? Object.defineProperty(r, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[s] = a);
    },
    559786: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(990547),
        a = n(481060),
        l = n(301938),
        o = n(806701),
        c = n(808993),
        u = n(720196);
      function d(e) {
        let { transitionTo: t, token: n, width: d } = e,
          [h, g] = r.useState(u.n.START),
          [m, p] = r.useState(null),
          [f, _] = r.useState(""),
          x = { impression_group: s.ImpressionGroups.ACCOUNT_REVERT_FLOW };
        return (0, i.jsx)("div", {
          style: { margin: "8px" },
          children: (0, i.jsxs)(a.Slides, {
            activeSlide: h,
            width: d,
            onSlideReady: p,
            children: [
              (0, i.jsx)(a.Slide, {
                id: u.n.START,
                impressionProperties: x,
                impressionName: s.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                children: (0, i.jsx)(o.Z, { setSlide: g, transitionTo: t }),
              }),
              (0, i.jsx)(a.Slide, {
                id: u.n.PASSWORD,
                impressionProperties: x,
                impressionName:
                  s.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                children: (0, i.jsx)(l.Z, {
                  setOriginalEmail: _,
                  setSlide: g,
                  transitionTo: t,
                  ready: m === u.n.PASSWORD,
                  token: n,
                }),
              }),
              (0, i.jsx)(a.Slide, {
                id: u.n.SUCCESS,
                impressionProperties: x,
                impressionName: s.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                children: (0, i.jsx)(c.Z, { email: f }),
              }),
            ],
          }),
        });
      }
    },
    301938: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120),
        n(411104),
        n(773603);
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        l = n(990547),
        o = n(481060),
        c = n(479531),
        u = n(388905),
        d = n(585483),
        h = n(573261),
        g = n(720196),
        m = n(981631),
        p = n(388032),
        f = n(318906),
        _ = n(971436);
      function x(e) {
        let { setOriginalEmail: t, setSlide: s, ready: x, token: E } = e,
          [v, I] = r.useState(!1),
          [b, N] = r.useState(null),
          [C, S] = r.useState(null),
          [T, A] = r.useState(""),
          Z = r.useRef(null);
        return (
          r.useEffect(() => {
            if (x) {
              var e;
              null === (e = Z.current) || void 0 === e || e.focus();
            }
          }, [x]),
          (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(u.Ee, {
                src: null == C ? n(26230) : n(935227),
                className: a()(_.marginBottom20, _.marginTop8),
              }),
              (0, i.jsx)(u.Dx, { children: p.intl.string(p.t["IfBQ5+"]) }),
              null != C && "" !== C
                ? (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: C,
                  })
                : null,
              (0, i.jsxs)(u.gO, {
                className: a()(_.marginBottom20, _.marginTop20),
                children: [
                  (0, i.jsx)(u.II, {
                    name: "password",
                    type: "password",
                    label: p.intl.string(p.t["8dM4FB"]),
                    setRef: Z,
                    className: _.marginBottom20,
                    value: T,
                    onChange: A,
                    error: b,
                    autoComplete: "new-password",
                    maxLength: 72,
                    placeholder: p.intl.string(p.t["yY/PXV"]),
                  }),
                  (0, i.jsx)(u.zx, {
                    className: _.marginTop8,
                    onClick: () => {
                      if (!v) {
                        if (0 === T.length) {
                          N(p.intl.string(p.t.R98xDw)),
                            d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                          return;
                        }
                        return (
                          null != C && S(null),
                          null != b && N(null),
                          t(""),
                          I(!0),
                          h.Z.post({
                            url: m.ANM.ACCOUNT_REVERT,
                            body: { token: E, password: T },
                            trackedActionData: {
                              event: l.NetworkActionNames.ACCOUNT_REVERT,
                            },
                          })
                            .then((e) => {
                              let {
                                body: { email: n },
                              } = e;
                              A(""), t(n), s(g.n.SUCCESS);
                            })
                            .catch((e) => {
                              if (e instanceof Error)
                                S(
                                  p.intl.formatToPlainString(p.t.aTVNen, {
                                    statusPageURL: m.yXt.STATUS,
                                  }),
                                );
                              else {
                                let t = new c.Z(e);
                                t.hasFieldErrors()
                                  ? N(t.getAnyErrorMessage())
                                  : S(
                                      (function (e) {
                                        switch (e) {
                                          case m.evJ
                                            .ACCOUNT_REVERT_INVALID_TOKEN:
                                            return p.intl.string(p.t["11zzGR"]);
                                          case m.evJ
                                            .ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                            return p.intl.string(p.t["6qmgaG"]);
                                          case m.evJ
                                            .ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                            return p.intl.string(p.t.bChnKi);
                                          default:
                                            return p.intl.format(p.t.aTVNen, {
                                              statusPageURL: m.yXt.STATUS,
                                            });
                                        }
                                      })(t.code).toString(),
                                    );
                              }
                              d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                            })
                            .finally(() => {
                              I(!1);
                            })
                        );
                      }
                    },
                    submitting: v,
                    disabled: v,
                    children: p.intl.string(p.t.ezv91d),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: f.buttonContainer,
                children: (0, i.jsx)(u.zx, {
                  color: u.zx.Colors.PRIMARY,
                  onClick: () => {
                    A(""), s(g.n.START);
                  },
                  children: p.intl.string(p.t.rzxnQ0),
                }),
              }),
            ],
          })
        );
      }
    },
    806701: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        a = n(481060),
        l = n(388905),
        o = n(661824),
        c = n(720196),
        u = n(981631),
        d = n(388032),
        h = n(318906),
        g = n(971436);
      function m(e) {
        let { children: t } = e;
        return (0, i.jsx)("li", {
          className: h.listItem,
          children: (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: t,
          }),
        });
      }
      function p(e) {
        let { setSlide: t, transitionTo: r } = e;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(l.Ee, {
              src: n(26230),
              className: s()(g.marginBottom20, g.marginTop8),
            }),
            (0, i.jsx)(l.Dx, {
              className: g.marginBottom8,
              children: d.intl.string(d.t["8UcxIy"]),
            }),
            (0, i.jsx)(a.Text, {
              variant: "text-md/normal",
              children: d.intl.string(d.t.O37hMj),
            }),
            (0, i.jsxs)(l.gO, {
              className: s()(g.marginBottom20, g.marginTop20),
              children: [
                (0, i.jsx)(a.Text, { variant: "text-sm/normal" }),
                (0, i.jsxs)("ul", {
                  className: h.listContainer,
                  children: [
                    (0, i.jsx)(m, { children: d.intl.string(d.t.Gj1Zr6) }),
                    (0, i.jsx)(o.Z, {}),
                    (0, i.jsx)(m, { children: d.intl.string(d.t["8C6t3N"]) }),
                    (0, i.jsx)(o.Z, {}),
                    (0, i.jsx)(m, { children: d.intl.string(d.t.mToZMD) }),
                    (0, i.jsx)(o.Z, {}),
                    (0, i.jsx)(m, { children: d.intl.string(d.t.TPEvkZ) }),
                    (0, i.jsx)(o.Z, {}),
                    (0, i.jsx)(m, { children: d.intl.string(d.t.H8Y1Li) }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: h.buttonContainer,
              children: [
                (0, i.jsx)(l.zx, {
                  onClick: () => t(c.n.PASSWORD),
                  children: d.intl.string(d.t.GgCRqa),
                }),
                (0, i.jsx)(l.zx, {
                  color: l.zx.Colors.PRIMARY,
                  onClick: () => r(u.Z5c.LOGIN),
                  children: d.intl.string(d.t["B/yHcX"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    808993: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        a = n(481060),
        l = n(388905),
        o = n(388032),
        c = n(971436);
      function u(e) {
        let { email: t } = e;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(l.Ee, {
              src: n(26230),
              className: s()(c.marginBottom20, c.marginTop8),
            }),
            (0, i.jsx)(l.Dx, { children: o.intl.string(o.t.ailkVF) }),
            (0, i.jsx)(l.DK, {
              children: o.intl.format(o.t["4ZMVCA"], { email: t }),
            }),
            (0, i.jsx)(a.Text, {
              className: s()(c.marginBottom8, c.marginTop20),
              variant: "text-md/normal",
              children: o.intl.string(o.t["dpAn+/"]),
            }),
          ],
        });
      }
    },
    720196: function (e, t, n) {
      var i, r;
      n.d(t, {
        n: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).START = "start"),
        (r.PASSWORD = "password"),
        (r.SUCCESS = "success"),
        (r.FAILED = "failed");
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
      var i = n(544891),
        r = n(570140),
        s = n(959776),
        a = n(626135),
        l = n(723359),
        o = n(981631);
      function c(e, t) {
        return (
          (0, s.Z)(e, t),
          a.default.track(o.rMx.AGE_GATE_ACTION, {
            source: t,
            action: l.Al.AGE_GATE_SUBMITTED,
          }),
          i.tn
            .patch({
              url: o.ANM.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
            })
            .then((e) => {
              let n = e.body;
              r.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
                a.default.track(o.rMx.AGE_GATE_ACTION, {
                  source: t,
                  action: l.Al.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function u(e) {
        r.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          a.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: l.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function d(e) {
        r.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          a.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: l.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    899370: function (e, t, n) {
      var i,
        r,
        s,
        a,
        l = n(973361),
        o = n(442837),
        c = n(570140),
        u = n(358085),
        d = n(723359);
      let h = null,
        g = "underage";
      class m extends (a = o.ZP.Store) {
        isUnderageAnonymous() {
          if (u.isPlatformEmbedded) {
            if (null != h && h + d.k0 > Date.now()) return !0;
          } else return null != l.parse(document.cookie)[g];
          return !1;
        }
      }
      (s = "AgeGateStore"),
        (r = "displayName") in (i = m)
          ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = s),
        (t.Z = new m(c.Z, {
          AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
            h = Date.now();
            document.cookie = "".concat(g, "=1;path=/");
          },
          LOGIN_SUCCESS: function () {
            h = null;
            document.cookie = "".concat(g, "=1;path=/;max-age=0");
          },
        }));
    },
    224841: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(481060),
        s = n(388905),
        a = n(703656),
        l = n(63063),
        o = n(981631),
        c = n(388032),
        u = n(857018);
      let d = () => (0, a.uL)(o.Z5c.LOGIN);
      t.Z = (e) => {
        let { authBoxClassName: t, underageMessage: a } = e;
        return (0, i.jsxs)(s.ZP, {
          className: t,
          children: [
            (0, i.jsx)("img", { alt: "", src: n(231443), className: u.img }),
            (0, i.jsx)(s.Dx, {
              className: u.title,
              children: c.intl.string(c.t.nCB6GR),
            }),
            (0, i.jsx)(s.DK, {
              className: u.subtitle,
              children: c.intl.format(c.t.b0QzXV, {
                underageMessage: null != a ? a : c.intl.string(c.t.WqEH4O),
                helpURL: l.Z.getArticleURL(o.BhN.AGE_GATE),
              }),
            }),
            (0, i.jsx)(r.Button, {
              fullWidth: !0,
              onClick: d,
              children: c.intl.string(c.t.szzQ6O),
            }),
          ],
        });
      };
    },
    13430: function (e, t, n) {
      n(47120), n(653041);
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        l = n(913527),
        o = n.n(l),
        c = n(481060),
        u = n(285888),
        d = n(388032),
        h = n(49872);
      let g = o()().localeData().months(),
        m = Array.from(Array(31).keys()).map((e) => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        p = Array.from(Array(12).keys()).map((e) => ({
          value: e + 1,
          label: g[e],
        })),
        f = /[a-zA-Z0-9]/;
      function _(e) {
        let { options: t, selectOption: n, children: s } = e,
          [a, l] = r.useState("");
        r.useEffect(() => {
          if ("" !== a) {
            let e = setTimeout(() => l(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [a, l]);
        let o = r.useCallback(
          (e) => {
            if (f.test(e.key)) {
              let i = "".concat(a).concat(e.key.toLowerCase()),
                r = t.find((e) => e.label.toLowerCase().startsWith(i));
              null != r && n(r.value), l(i);
            }
          },
          [n, l, a, t],
        );
        return (0, i.jsx)("div", { onKeyDown: o, children: s });
      }
      function x() {
        let e = o()().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          n = e.indexOf("M"),
          i = e.indexOf("Y");
        return (
          (-1 === t || -1 === n || -1 === i) && ((t = 0), (n = 1), (i = 2)),
          [
            { index: t, type: "day" },
            { index: n, type: "month" },
            { index: i, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let E = r.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: s,
            onChange: l,
            onPopulated: g,
            error: f,
            autoFocus: E,
            required: v,
          } = e,
          {
            day: I,
            setDay: b,
            month: N,
            setMonth: C,
            year: S,
            setYear: T,
          } = (function (e) {
            let t = null,
              n = null,
              i = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (i = e.year()));
            let [s, a] = r.useState(t),
              [l, o] = r.useState(n),
              [c, u] = r.useState(i);
            return {
              day: s,
              setDay: a,
              month: l,
              setMonth: o,
              year: c,
              setYear: u,
            };
          })(n),
          A = r.useMemo(
            () =>
              null != I && null != N && null != S
                ? o()("".concat(I, "/").concat(N, "/").concat(S), "DD/MM/YYYY")
                : null,
            [I, N, S],
          );
        r.useEffect(() => {
          l((null == A ? void 0 : A.isValid()) ? A : null);
        }, [A, l]);
        let Z = f;
        null != A && !A.isValid() && (Z = d.intl.string(d.t.udnqh4));
        let j = (function () {
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
          [R, O] = r.useState(E ? 0 : -1),
          L = r.useRef(null),
          P = r.useRef(null),
          y = r.useRef(null),
          D = r.useMemo(x, []),
          k = r.useCallback(() => {
            var e, t, n, i;
            switch (null === (e = D[R]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = L.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = P.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (i = y.current) || void 0 === i || i.focus();
            }
          }, [R, L, P, y, D]);
        r.useEffect(() => {
          setTimeout(k, 500);
        }, []),
          r.useEffect(() => {
            if (R >= D.length) {
              null == g || g();
              return;
            }
            k();
          }, [R, k]);
        let M = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = D[e];
          switch (t) {
            case "day":
              M.push({
                key: "day",
                input: (0, i.jsx)(_, {
                  options: m,
                  selectOption: b,
                  children: (0, i.jsx)(u.Z, {
                    ref: L,
                    className: h.__invalid_inputDay,
                    "aria-label": d.intl.string(d.t.Voklra),
                    menuPlacement: u.Z.MenuPlacements.TOP,
                    placeholder: (0, i.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.intl.string(d.t.Voklra),
                    }),
                    options: m,
                    value: I,
                    onChange: (t) => {
                      let { value: n } = t;
                      b(n), O(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              M.push({
                key: "month",
                input: (0, i.jsx)(_, {
                  options: p,
                  selectOption: C,
                  children: (0, i.jsx)(u.Z, {
                    ref: P,
                    className: h.__invalid_inputMonth,
                    "aria-label": d.intl.string(d.t.UDlN8f),
                    menuPlacement: u.Z.MenuPlacements.TOP,
                    placeholder: (0, i.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.intl.string(d.t.UDlN8f),
                    }),
                    options: p,
                    value: N,
                    onChange: (t) => {
                      let { value: n } = t;
                      C(n), O(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              M.push({
                key: "year",
                input: (0, i.jsx)(_, {
                  options: j,
                  selectOption: T,
                  children: (0, i.jsx)(u.Z, {
                    ref: y,
                    className: h.__invalid_inputYear,
                    "aria-label": d.intl.string(d.t.ZWr5WF),
                    menuPlacement: u.Z.MenuPlacements.TOP,
                    placeholder: (0, i.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.intl.string(d.t.ZWr5WF),
                    }),
                    options: j,
                    value: S,
                    onChange: (t) => {
                      let { value: n } = t;
                      T(n), O(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, i.jsxs)("fieldset", {
          className: a()(h.container, s),
          children: [
            (0, i.jsx)(c.FormTitle, {
              tag: "legend",
              required: v,
              error: Z,
              children: d.intl.string(d.t.xNpFJy),
            }),
            (0, i.jsx)("div", {
              className: h.inputs,
              children: M.map((e, t) => {
                let { key: n, input: r } = e;
                return (0, i.jsx)(
                  "div",
                  { tabIndex: t + 1, className: h[n], children: r },
                  n,
                );
              }),
            }),
          ],
        });
      });
      t.Z = E;
    },
    267394: function (e, t, n) {
      n.d(t, {
        A: function () {
          return r;
        },
      });
      var i = n(570140);
      function r(e) {
        i.Z.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
      }
    },
    743142: function (e, t, n) {
      n.d(t, {
        F: function () {
          return r;
        },
        L: function () {
          return o;
        },
      });
      var i,
        r,
        s = n(754688),
        a = n(981631),
        l = n(176505);
      function o(e) {
        let t = decodeURIComponent(e),
          n = (0, s.Qj)(t);
        return null != n && n.channelId === l.oC.ROLE_SUBSCRIPTIONS
          ? "role_subscription"
          : t === a.Z5c.SETTINGS(a.oAB.SUBSCRIPTIONS, "role-subscriptions")
            ? "role_subscription_setting"
            : void 0;
      }
      ((i = r || (r = {})).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting");
    },
    355142: function (e, t, n) {
      var i, r, s, a, l, o;
      n.d(t, {
        EW: function () {
          return r;
        },
      }),
        ((a = i || (i = {})).VIEWED = "viewed"),
        (a.SUBMITTED = "submitted"),
        (a.RESEND_CODE = "resend_code"),
        (a.INPUT_ERROR = "input_error"),
        (a.RESPONSE_ERROR = "response_error"),
        (a.SUCCESS = "success"),
        ((l = r || (r = {})).IDENTITY = "identity"),
        (l.DISPLAY_NAME = "display_name"),
        (l.ACCOUNT_INFORMATION = "account_information"),
        (l.FULL = "full"),
        (l.AGE_GATE = "age_gate"),
        (l.INVITE = "invite"),
        (l.SMS_VERIFY = "sms_verify"),
        ((o = s || (s = {})).ACCOUNT_IDENTITY = "Account Identity"),
        (o.ACCOUNT_DISPLAY_NAME = "Account Display Name"),
        (o.ACCOUNT_INFORMATION = "Account Information"),
        (o.AGE_GATE = "Age Gate"),
        (o.AGE_GATE_UNDERAGE = "Age Gate Underage"),
        (o.PHONE_VERIFICATION = "Phone Verification"),
        (o.REGISTER = "Register"),
        (o.CAPTCHA = "Captcha");
    },
    201207: function (e, t, n) {
      var i = n(818083);
      t.Z = (0, i.B)({
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
          return l;
        },
      });
      var i = n(913527),
        r = n.n(i),
        s = n(626135),
        a = n(981631);
      function l(e, t) {
        s.default.track(a.rMx.AGE_GATE_SUBMITTED, {
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
          return f;
        },
        ZP: function () {
          return p;
        },
      });
      var i = n(913527),
        r = n.n(i),
        s = n(990547),
        a = n(570140),
        l = n(479531),
        o = n(771308),
        c = n(314897),
        u = n(626135),
        d = n(573261),
        h = n(959776),
        g = n(981631),
        m = n(723359);
      function p(e) {
        let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
        return f({ ...i, invite: t, giftCodeSKUId: n });
      }
      function f(e) {
        let {
          email: t,
          phoneToken: n,
          username: i,
          globalName: p,
          consent: f,
          password: _,
          guildTemplateCode: x,
          birthday: E,
          invite: v = null,
          giftCodeSKUId: I = null,
          multiStep: b = !1,
          promoEmailConsent: N = null,
          usedUsernameSuggestion: C = null,
        } = e;
        return (
          a.Z.dispatch({ type: "REGISTER", birthday: b ? E : null }),
          null != E &&
            ((0, h.Z)(E, g.jXE.REGISTER),
            u.default.track(g.rMx.AGE_GATE_ACTION, {
              source: m.L0.REGISTER,
              action: m.Al.AGE_GATE_SUBMITTED,
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
                u.default.track(g.rMx.USER_AGE_SUBMITTED, { age_bucket: t }));
            })(E)),
          d.Z.post({
            url: g.ANM.REGISTER,
            body: {
              fingerprint: c.default.getFingerprint(),
              email: t,
              username: i,
              global_name: p,
              password: _,
              invite: v,
              consent: f,
              phone_token: n,
              date_of_birth: null == E ? void 0 : E.format("YYYY-MM-DD"),
              gift_code_sku_id: I,
              guild_template_code: x,
              promotional_email_opt_in: null == N ? void 0 : N.checked,
            },
            trackedActionData: {
              event: s.NetworkActionNames.USER_REGISTER,
              properties: {
                invite_code: v,
                used_username_suggestion: C,
                promotional_email_opt_in: null == N ? void 0 : N.checked,
                promotional_email_pre_checked:
                  null == N ? void 0 : N.preChecked,
                was_unique_username: !0,
              },
            },
          }).then(
            (e) => {
              a.Z.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                u.default.track(g.rMx.AGE_GATE_ACTION, {
                  source: m.L0.REGISTER,
                  action: m.Al.AGE_GATE_SUCCESS,
                });
            },
            (e) => {
              let t = new l.Z(e);
              throw (
                (a.Z.dispatch({ type: "REGISTER_FAILURE", error: t }),
                null != t.getFieldErrors("date_of_birth") &&
                  o.wE(m.L0.REGISTER),
                u.default.track(g.rMx.REGISTER_SUBMIT_ERRORED, {
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
      var i = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        a = n(481060),
        l = n(600164),
        o = n(388905),
        c = n(797786),
        u = n(971436);
      function d(e) {
        let {
          value: t,
          onChange: n,
          subText: r,
          muted: d,
          marginTopStyle: h,
        } = e;
        return (0, i.jsx)(l.Z, {
          className: null != h ? h : u.marginTop20,
          align: l.Z.Align.CENTER,
          children: (0, i.jsx)(a.Checkbox, {
            value: t,
            type: a.Checkbox.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, i.jsx)(o.i_, {
              className: s()({ [c.subText]: !d }),
              children: r,
            }),
          }),
        });
      }
    },
    761305: function (e, t, n) {
      n(47120);
      var i,
        r = n(200651),
        s = n(192379),
        a = n(593473),
        l = n(442837),
        o = n(544891),
        c = n(108427),
        u = n(601964),
        d = n(896797),
        h = n(129293),
        g = n(388905),
        m = n(981631),
        p = n(388032),
        f = n(971436);
      function _(e, t, n) {
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
      class x extends (i = s.PureComponent) {
        componentDidMount() {
          let e = (0, h.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
          o.tn
            .post({
              url: m.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
          return (0, r.jsx)(g.ZP, { children: (0, r.jsx)(g.Hh, {}) });
        }
        renderSuccess() {
          let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
          return (0, r.jsxs)(g.ZP, {
            children: [
              (0, r.jsx)(g.Dx, {
                className: f.marginBottom8,
                children: p.intl.string(p.t.Z33eiI),
              }),
              (0, r.jsx)(g.DK, {
                children: p.intl.format(p.t.NRWtfH, { guildName: n.name }),
              }),
              (0, r.jsx)(g.zx, {
                className: f.marginTop40,
                onClick: () => t(e),
                children: p.intl.string(p.t.fIv16O),
              }),
              (0, r.jsx)(g.zx, {
                className: f.marginTop8,
                color: g.zx.Colors.LINK,
                look: g.zx.Looks.LINK,
                onClick: () => {
                  t(m.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                },
                children: p.intl.string(p.t["cGmT/P"]),
              }),
            ],
          });
        }
        renderError() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, r.jsxs)(g.ZP, {
            children: [
              (0, r.jsx)(g.Ee, { src: n(105020), className: f.marginBottom20 }),
              (0, r.jsx)(g.Dx, {
                className: f.marginBottom8,
                children: p.intl.string(p.t.ox9hIS),
              }),
              (0, r.jsx)(g.DK, { children: p.intl.string(p.t["/dcuR0"]) }),
              (0, r.jsx)(g.zx, {
                className: f.marginTop40,
                onClick: () => t(e),
                children: p.intl.string(p.t.fIv16O),
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
          super(...e), _(this, "state", { busy: !0, success: !1, guild: null });
        }
      }
      _(x, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) }),
        (t.Z = l.ZP.connectStores([d.Z], () => ({
          defaultRoute: d.Z.defaultRoute,
        }))(x));
    },
    639946: function (e, t, n) {
      n.d(t, {
        r: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        s = n(471445),
        a = n(742593),
        l = n(257481);
      function o(e) {
        let { channel: t } = e,
          n = (0, s.Th)(t.type);
        return (0, i.jsxs)("div", {
          className: l.channelInfoContainer,
          children: [
            null != n
              ? (0, i.jsx)(n, {
                  color: "currentColor",
                  size: "custom",
                  width: 20,
                  height: 20,
                })
              : null,
            (0, i.jsx)(r.Text, {
              className: l.channelInfoText,
              color: "none",
              variant: "text-sm/semibold",
              children: t.name,
            }),
          ],
        });
      }
      function c(e) {
        let { channel: t, guildScheduledEvent: n } = e;
        return (0, i.jsxs)("div", {
          className: l.container,
          children: [
            (0, i.jsx)(a.HZ, {
              className: l.statusContainer,
              guildId: n.guild_id,
              guildEvent: n,
              eventPreview: n,
            }),
            (0, i.jsx)(a.Rf, {
              name: n.name,
              description: n.description,
              guildId: n.guild_id,
            }),
            null != t && n.channel_id === t.id
              ? (0, i.jsx)(o, { channel: t })
              : null,
          ],
        });
      }
    },
    698177: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        l = n(442837),
        o = n(481060),
        c = n(144114),
        u = n(742458),
        d = n(541692),
        h = n(952802),
        g = n(388905),
        m = n(815660),
        p = n(388032),
        f = n(639944),
        _ = n(971436);
      t.Z = () => {
        let [e, t] = r.useState(""),
          [s, x] = r.useState(""),
          [E, v] = r.useState(!1),
          [I, b] = r.useState(!1),
          [N, C] = r.useState(null),
          [S, T] = r.useState(null),
          A = (0, l.e7)([d.Z], () => d.Z.getCountryCode()),
          Z = A.code.split(" ")[0],
          j = async () => {
            try {
              await c.Z.resendCode(e);
            } catch (e) {
              T(e.body.message);
            }
          },
          R = async () => {
            v(!0);
            try {
              let { token: t } = await c.Z.verifyPhone(Z + e, s);
              C(null), T(null), b(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
              e.body.message
                ? (C(null), T(e.body.message))
                : (C(e.body.phone), T(e.body.code));
            } finally {
              v(!1);
            }
          },
          O = (0, i.jsxs)(g.ZP, {
            children: [
              (0, i.jsx)(g.Ee, { src: n(292824) }),
              (0, i.jsxs)(g.Dx, {
                className: a()(
                  _.marginTop20,
                  f.flex,
                  f.justifyCenter,
                  f.alignCenter,
                ),
                children: [
                  p.intl.string(p.t.WWzQtb),
                  (0, i.jsx)(o.CircleCheckIcon, {
                    size: "md",
                    color: "currentColor",
                    className: _.marginLeft8,
                  }),
                ],
              }),
            ],
          });
        return I
          ? O
          : (0, i.jsxs)(g.ZP, {
              children: [
                (0, i.jsx)(g.Dx, { children: p.intl.string(p.t.o4JNrK) }),
                (0, i.jsx)(g.DK, {
                  className: _.marginTop8,
                  children: p.intl.string(p.t.y0tVbm),
                }),
                (0, i.jsxs)(g.gO, {
                  className: _.marginTop20,
                  children: [
                    (0, i.jsx)(h.Z, {
                      label: p.intl.string(p.t.eJnn09),
                      alpha2: A.alpha2,
                      countryCode: Z,
                      value: e,
                      autoComplete: "off",
                      spellCheck: "false",
                      onChange: t,
                      forceMode: u.Nz.PHONE,
                      error: N,
                    }),
                    (0, i.jsx)(g.II, {
                      className: _.marginTop20,
                      label: p.intl.string(p.t.OdzNbm),
                      value: s,
                      onChange: x,
                      maxLength: m.z,
                      error: S,
                    }),
                    (0, i.jsx)(g.zx, {
                      size: g.zx.Sizes.SMALL,
                      look: g.zx.Looks.LINK,
                      onClick: j,
                      children: p.intl.string(p.t["5b60go"]),
                    }),
                    (0, i.jsx)(g.zx, {
                      className: _.marginTop20,
                      onClick: R,
                      submitting: E,
                      children: p.intl.string(p.t.i4jeWV),
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
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(882037),
        s = n(853268),
        a = n(388032),
        l = n(971436);
      function o() {
        let { required: e, checked: t } = (0, r.MD)();
        return e
          ? (0, i.jsx)(s.Z, {
              value: t,
              subText: a.intl.string(a.t["0p3R09"]),
              onChange: r.ZJ,
              marginTopStyle: l.marginTop8,
              muted: !0,
            })
          : null;
      }
    },
    362762: function (e, t, n) {
      var i,
        r,
        s,
        a,
        l = n(442837),
        o = n(570140),
        c = n(981631);
      let u = {};
      class d extends (a = l.ZP.Store) {
        getState(e) {
          return u[e];
        }
      }
      (s = "CodedLinkNativeAppStateStore"),
        (r = "displayName") in (i = d)
          ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = s),
        (t.Z = new d(o.Z, {
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
      var i = n(998502);
      async function r(e) {
        try {
          return (await i.ZP.getSetting("USERNAME_PREFIX", "")) + e;
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
      var i,
        r,
        s,
        a,
        l = n(200651),
        o = n(192379),
        c = n(228618),
        u = n(146456);
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
      ((i = r || (r = {})).SIZE_40 = "SIZE_40"), (i.SIZE_60 = "SIZE_60");
      let h = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        g = n(515695);
      class m extends (s = o.PureComponent) {
        render() {
          let { className: e, text: t, ...n } = this.props;
          return (0, l.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: n.size,
              height: n.size,
              backgroundColor: n.bgColor,
            },
            className: e,
            children: (0, l.jsx)(c.default, { value: t, level: "M", ...n }),
          });
        }
      }
      d(m, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class p extends (a = o.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            t = h[null != e ? e : "SIZE_40"];
          return (0, l.jsxs)("div", {
            className: u.qrCodeContainer,
            children: [
              (0, l.jsx)(m, { ...this.props }),
              (0, l.jsx)("div", {
                className: u.qrCodeOverlay,
                children: (0, l.jsx)("img", {
                  className: u[t],
                  src: g,
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
        (t.ZP = m);
    },
    285888: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
        v: function () {
          return f;
        },
      }),
        n(47120);
      var i,
        r,
        s,
        a = n(200651),
        l = n(192379),
        o = n(120356),
        c = n.n(o),
        u = n(569619),
        d = n(481060),
        h = n(981631),
        g = n(388032),
        m = n(7804);
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
      ((s = i || (i = {})).TOP = "top"), (s.BOTTOM = "bottom");
      let f = {
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
          let { isDisabled: n, menuIsOpen: i } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: i ? "4px 4px 0 0" : "4px",
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
          let { isSelected: n, isFocused: i } = t;
          return {
            ...e,
            ...(n
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : i
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
      class _ extends (r = l.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: n,
              error: i,
              valueRenderer: r,
              optionRenderer: s,
              multiValueRenderer: l,
              options: o,
              value: h,
              autofocus: p,
              disabled: _,
              clearable: x,
              searchable: E,
              styleOverrides: v,
              isMulti: I,
              placeholder: b,
              filterOption: N,
              closeMenuOnSelect: C = !0,
              ...S
            } = this.props,
            T = { ...S };
          null != p && (T.autoFocus = p),
            null != _ && (T.isDisabled = _),
            null != x && (T.isClearable = x),
            null != E && (T.isSearchable = E);
          let A = { IndicatorSeparator: () => null };
          null != s &&
            (A.Option = (e) =>
              (0, a.jsx)(u.wx.Option, { ...e, children: s(e.data) })),
            null != r &&
              (A.SingleValue = (e) =>
                (0, a.jsx)(u.wx.SingleValue, { ...e, children: r(e.data) })),
            null != l && (A.MultiValue = (e) => l(e.data));
          if (I && Array.isArray(h)) {
            let t = {};
            o.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = h.map((e) => t[String(e)]));
          } else e = null != h ? o.find((e) => e.value === h) : null;
          return (0, a.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: c()(m.select, t, { [m.error]: null != i }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(u.ZP, {
                  ...T,
                  className: n,
                  ref: this._selectRef,
                  isMulti: I,
                  components: A,
                  options: o,
                  styles: null != v ? v : f,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: C,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != b ? b : g.intl.string(g.t.XqMe3N),
                  noOptionsMessage: () => g.intl.string(g.t["Xe+fJC"]),
                  filterOption: N,
                }),
                null != i
                  ? (0, a.jsx)("div", {
                      className: m.errorMessage,
                      children: i,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            p(this, "_selectRef", l.createRef()),
            p(this, "_containerRef", l.createRef()),
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
              e.which === h.yXg.ESCAPE &&
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
      p(_, "MenuPlacements", i);
    },
    390072: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651),
        r = n(192379),
        s = n(481060),
        a = n(725436),
        l = n(11868),
        o = n(217804),
        c = n(765305),
        u = n(634900);
      function d(e) {
        let { guildScheduledEvent: t, channel: n, onClose: d } = e,
          h = t.entity_type === c.WX.EXTERNAL,
          g = r.useCallback((e) => (0, l.Qt)(t, d)(e), [t, d]),
          m = (0, o.u)(t, n);
        if (null == m) return null;
        let { IconComponent: p, locationName: f } = m,
          _ = (0, i.jsxs)(i.Fragment, {
            children: [
              null != p &&
                (0, i.jsx)(p, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  className: u.channelIcon,
                }),
              (0, i.jsx)(s.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: u.locationText,
                children: (0, a.m)(f, !0),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: u.row,
          children:
            null != g
              ? (0, i.jsx)(s.Clickable, {
                  className: h ? u.externalLocation : u.channelLocation,
                  onClick: g,
                  children: _,
                })
              : _,
        });
      }
    },
    844800: function (e, t, n) {
      var i,
        r,
        s,
        a,
        l = n(442837),
        o = n(570140);
      let c = !1,
        u = null,
        d = null;
      class h extends (a = l.ZP.Store) {
        getState() {
          return { verifySuccess: c, verifyErrors: u, redirectGuildId: d };
        }
      }
      (s = "HubEmailVerificationStore"),
        (r = "displayName") in (i = h)
          ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = s),
        (t.Z = new h(o.Z, {
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
          return f;
        },
      });
      var i = n(512722),
        r = n.n(i),
        s = n(525654),
        a = n.n(s),
        l = n(39612),
        o = n(271579),
        c = n(756647),
        u = n(703656),
        d = n(314897),
        h = n(896797),
        g = n(626135),
        m = n(954824),
        p = n(981631);
      function f(e) {
        let t = (function (e) {
            var t;
            let n = null === (t = a().os) || void 0 === t ? void 0 : t.family;
            if ("Android" === n || "iOS" === n) {
              let t = d.default.getFingerprint(),
                n = (0, o.WS)();
              return (
                r()(null != e, "generateAppPath: guildId cannot be null"),
                (0, o.ZP)((0, l.z0)(e), {
                  utmSource: "verify_hub_email",
                  fingerprint: t,
                  attemptId: n,
                })
              );
            }
            return "discord://";
          })(e),
          n = (0, o.zS)(t);
        null != n &&
          g.default.track(p.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, c.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          m.Z.launch(t, (e) => {
            !e && (0, u.dL)(h.Z.fallbackRoute);
          });
      }
    },
    637776: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(442837),
        a = n(231239),
        l = n(129293),
        o = n(388905),
        c = n(703656),
        u = n(108427),
        d = n(844800),
        h = n(580497),
        g = n(981631),
        m = n(388032),
        p = n(711433);
      function f(e) {
        let { location: t } = e,
          [f, _] = r.useState(!1),
          {
            verifySuccess: x,
            verifyErrors: E,
            redirectGuildId: v,
          } = (0, s.e7)([d.Z], () => d.Z.getState());
        r.useEffect(() => {
          let e = (0, l.Z)(t);
          a.Z.verify(e), (0, u.e)("verify_hub_email");
        }, [t]);
        let I = () => {
          (0, h.Z)(v), _(!0);
        };
        return f
          ? (0, i.jsxs)(o.ZP, {
              children: [
                (0, i.jsx)(o.Dx, {
                  className: p.title,
                  children: m.intl.string(m.t.csrAMD),
                }),
                (0, i.jsx)(o.DK, {
                  className: p.subtitle,
                  children: m.intl.string(m.t["m1+IBg"]),
                }),
                (0, i.jsx)(o.zx, {
                  className: p.spacedButton,
                  onClick: () => (0, c.uL)(g.Z5c.CHANNEL(v)),
                  children: m.intl.string(m.t.fIv16O),
                }),
              ],
            })
          : x
            ? (0, i.jsxs)(o.ZP, {
                children: [
                  (0, i.jsx)(o.Ee, { className: p.image, src: n(73962) }),
                  (0, i.jsx)(o.Dx, {
                    className: p.title,
                    children: m.intl.string(m.t.dAfGb2),
                  }),
                  (0, i.jsx)(o.zx, {
                    onClick: I,
                    children: m.intl.string(m.t.uJWIj4),
                  }),
                ],
              })
            : null != E
              ? (0, i.jsxs)(o.ZP, {
                  children: [
                    (0, i.jsx)(o.Ee, { className: p.image, src: n(375673) }),
                    (0, i.jsx)(o.Dx, {
                      className: p.title,
                      children: m.intl.string(m.t.PCgG39),
                    }),
                    (0, i.jsx)(o.DK, {
                      className: p.subtitle,
                      children: m.intl.string(m.t.tQpeAw),
                    }),
                    (0, i.jsx)(o.zx, {
                      onClick: I,
                      children: m.intl.string(m.t.uJWIj4),
                    }),
                  ],
                })
              : (0, i.jsxs)(o.ZP, {
                  children: [
                    (0, i.jsx)(o.Ee, { className: p.image, src: n(892235) }),
                    (0, i.jsx)(o.Dx, {
                      className: p.title,
                      children: m.intl.string(m.t["0c8+5u"]),
                    }),
                    (0, i.jsx)(o.DK, {
                      className: p.subtitle,
                      children: m.intl.string(m.t.ULTCBA),
                    }),
                    (0, i.jsx)(o.zx, {
                      submitting: !0,
                      color: o.zx.Colors.PRIMARY,
                    }),
                  ],
                });
      }
      s.ZP.initialize();
    },
    551549: function (e, t, n) {
      n.d(t, {
        oK: function () {
          return r;
        },
      });
      let i = (0, n(818083).B)({
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
        return i.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    230224: function (e, t, n) {
      n.d(t, {
        GB: function () {
          return Z;
        },
        JI: function () {
          return T;
        },
        UM: function () {
          return O;
        },
        V6: function () {
          return j;
        },
        WT: function () {
          return b;
        },
        X7: function () {
          return N;
        },
        jq: function () {
          return R;
        },
        mx: function () {
          return E;
        },
      }),
        n(411104);
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        l = n(481060),
        o = n(388905),
        c = n(118012),
        u = n(925329),
        d = n(372769),
        h = n(768581),
        g = n(51144),
        m = n(245335),
        p = n(981631),
        f = n(888592),
        _ = n(388032),
        x = n(599139);
      let E = 100,
        v = (e) => {
          var t, n;
          let i = {
            onlineCount:
              null !== (t = e.approximate_presence_count) && void 0 !== t
                ? t
                : 0,
            memberCount:
              null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0,
          };
          return 0 === i.memberCount && 0 === i.memberCount ? null : i;
        },
        I = (e) => e.target_type === m.Iq.STREAM && null != e.target_user,
        b = (e) => {
          var t;
          return (
            (null === (t = e.channel) || void 0 === t ? void 0 : t.type) ===
            p.d4z.GROUP_DM
          );
        },
        N = (e) => null == e.channel && null == e.guild && null != e.inviter,
        C = (e) => {
          var t;
          let n = v(e);
          return (
            (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t
              ? t
              : 0) > E
          );
        },
        S = (e) => e.state === p.r2o.ACCEPTED,
        T = (e) => {
          let { guild_scheduled_event: t } = e;
          return null != t || !1;
        },
        A = (e) => !T(e) && (!!N(e) || (null != e.inviter && !S(e) && !C(e))),
        Z = (e) => {
          let { guild: t, user: n, application: r } = e;
          if (null != r)
            return (0, i.jsx)(u.Z, {
              className: x.appIcon,
              game: r,
              size: x.appIconSize,
            });
          if (null != n)
            return (0, i.jsx)(o.qE, {
              src: n.getAvatarURL(void 0, 100),
              size: l.AvatarSizes.DEPRECATED_SIZE_100,
              className: x.avatar,
            });
          if (null != t)
            return (0, i.jsx)(o.Vj, {
              guild: t,
              size: o.Vj.Sizes.LARGER,
              className: x.guildIcon,
              animate: !0,
            });
          else return null;
        };
      function j(e) {
        var t;
        let { invite: n, textClassName: r, className: s } = e,
          l = v(n);
        return null == l ||
          A(n) ||
          (null == n
            ? void 0
            : null === (t = n.guild) || void 0 === t
              ? void 0
              : t.id) === f.fQ
          ? null
          : (0, i.jsx)(o.EJ, {
              className: a()(x.activityCount, s),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: r,
              flat: !0,
            });
      }
      function R(e) {
        let { invite: t, showBigUserIcon: n } = e,
          s = r.useMemo(
            () =>
              n
                ? null
                : I(t) && null != t.target_user
                  ? h.ZP.getUserAvatarURL(t.target_user)
                  : A(t) && null != t.inviter
                    ? h.ZP.getUserAvatarURL(t.inviter)
                    : null,
            [t, n],
          ),
          a = _.intl.string(_.t["3rE1Pz"]);
        if (b(t)) {
          var c, u;
          a =
            (null === (c = t.channel) || void 0 === c ? void 0 : c.name) !=
              null &&
            (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) !=
              null
              ? _.intl.format(_.t.Lu4h19, { username: t.inviter.username })
              : _.intl.string(_.t.OsdY8P);
        } else
          I(t) && null != t.target_user
            ? (a = _.intl.formatToPlainString(_.t.x2L32d, {
                username: t.target_user.username,
              }))
            : S(t)
              ? (a = _.intl.string(_.t["FDsl+P"]))
              : A(t) &&
                null != t.inviter &&
                (a = _.intl.format(_.t.spU2mJ, {
                  username: g.ZP.getFormattedName(t.inviter),
                }));
        return (0, i.jsxs)("div", {
          className: x.inviteJoinContainer,
          children: [
            null != s &&
              (0, i.jsx)("div", {
                className: x.inviterIconWrapper,
                children: (0, i.jsx)(o.qE, {
                  src: s,
                  size: l.AvatarSizes.SIZE_24,
                }),
              }),
            (0, i.jsx)(o.DK, {
              className: x.__invalid_inviteJoinSubTitle,
              children: a,
            }),
          ],
        });
      }
      function O(e) {
        let t,
          n,
          r,
          {
            user: s,
            guild: a,
            channel: u,
            application: h,
            showBigUserIcon: m,
          } = e;
        if (null != a)
          m &&
            null == h &&
            (t = (0, i.jsx)(o.Vj, { guild: a, size: o.Vj.Sizes.SMALL })),
            (n = a.name),
            null != h &&
              ((n = h.name),
              (r = (0, i.jsxs)("div", {
                className: x.inviteJoinContainer,
                children: [
                  (0, i.jsx)(o.DK, {
                    className: x.appIn,
                    children: _.intl.string(_.t["3gg9fH"]),
                  }),
                  (0, i.jsxs)("div", {
                    className: x.guildContainer,
                    children: [
                      (0, i.jsx)(o.Vj, { guild: a, size: o.Vj.Sizes.SMALL }),
                      (0, i.jsx)(c.Z, {
                        className: x.appGuildName,
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
          if (null == s) throw Error("no inviter in group DM invite");
          let e = g.ZP.getFormattedName(s);
          null != u.name && "" !== u.name
            ? ((n = u.name),
              null != u.icon &&
                (t = (0, i.jsx)(o.MC, {
                  channel: u,
                  size: l.AvatarSizes.SIZE_32,
                })))
            : (n = e);
        } else if (null != s) {
          let e = g.ZP.getFormattedName(s);
          (n = _.intl.formatToPlainString(_.t["4aF92d"], { username: e })),
            (r = (0, i.jsx)(o.DK, {
              className: x.directInviteSubTitle,
              children: _.intl.format(_.t.Quj7HR, { username: e }),
            }));
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(o.Dx, {
              className: x.title,
              children: [
                null != a
                  ? (0, i.jsx)(d.Z, {
                      guild: a,
                      className: x.guildBadge,
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
      var i = n(200651);
      n(192379);
      var r = n(481060),
        s = n(973616),
        a = n(131704),
        l = n(601964),
        o = n(598077),
        c = n(230224),
        u = n(258356),
        d = n(981631),
        h = n(388032),
        g = n(649617);
      let m = (e) => {
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
        let f = null != t.guild ? new l.ZP(t.guild) : null,
          _ = null != t.channel ? (0, a.jD)(t.channel) : null,
          x =
            null != t.target_application ? new s.Z(t.target_application) : null,
          E = p || null == t.inviter ? null : new o.Z(t.inviter),
          v =
            !(
              (null != t.approximate_member_count &&
                t.approximate_member_count > c.mx) ||
              (null != f && f.hasFeature(d.oNc.COMMUNITY))
            ) &&
            null != E &&
            (0, c.WT)(t),
          I = m(t),
          b = { invite: t, user: E, guild: f, channel: _, application: x };
        return (0, c.JI)(t)
          ? (0, i.jsx)(u.Z, {
              invite: t,
              channel: _,
              isSubmitting: I,
              onAcceptInvite: n,
            })
          : (0, i.jsxs)("div", {
              className: g.container,
              children: [
                (0, i.jsx)(c.GB, {
                  application: x,
                  guild: f,
                  user: v || (0, c.X7)(t) ? E : null,
                }),
                (0, c.X7)(t)
                  ? null
                  : (0, i.jsx)(c.jq, { ...b, showBigUserIcon: v }),
                (0, i.jsx)(c.UM, { ...b, showBigUserIcon: v }),
                (0, i.jsx)(c.V6, { ...b }),
                (0, i.jsx)(r.Button, {
                  onClick: n,
                  submitting: I,
                  className: g.acceptButton,
                  children: h.intl.string(h.t.ohMvm5),
                }),
              ],
            });
      }
    },
    677760: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      }),
        n(47120);
      var i,
        r,
        s = n(200651),
        a = n(192379),
        l = n(100621),
        o = n(442837),
        c = n(481060),
        u = n(447543),
        d = n(587444),
        h = n(393238),
        g = n(388905),
        m = n(108427),
        p = n(314897),
        f = n(701190),
        _ = n(626135),
        x = n(768581),
        E = n(823379),
        v = n(264229),
        I = n(230224),
        b = n(617730),
        N = n(258356),
        C = n(981631),
        S = n(388032),
        T = n(865363);
      function A() {
        return (0, s.jsx)("div", {
          className: T.centerFlex,
          children: (0, s.jsx)(c.Spinner, {}),
        });
      }
      ((r = i || (i = {}))[(r.LOADING = 0)] = "LOADING"),
        (r[(r.DETAILS = 1)] = "DETAILS"),
        (r[(r.ERROR = 2)] = "ERROR");
      let Z = (e) => {
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
            (0, E.vE)(n);
        }
      };
      function j(e) {
        let { invite: t, onAcceptInvite: n } = e;
        if ((null == t ? void 0 : t.state) === C.r2o.BANNED)
          return (0, s.jsx)(d.u, {
            text: S.intl.string(S.t["5AkWAQ"]),
            buttonCta: S.intl.string(S.t["8osdkp"]),
            onClick: n,
          });
        return (0, s.jsx)(d.u, {
          text: S.intl.string(S.t["usP+MT"]),
          buttonCta: S.intl.string(S.t["8osdkp"]),
          onClick: n,
        });
      }
      function R(e) {
        let {
            children: t,
            cardChildren: n,
            startAnimHeightPx: i,
            innerStyle: r,
            ...o
          } = e,
          { invite: u } = o,
          [d, g] = a.useState(Z(u)),
          { ref: m, height: p } = (0, h.Z)(),
          f = (0, c.useSpring)({
            height:
              null != p && 0 !== p ? "".concat(p, "px") : "".concat(i, "px"),
            config: l.config.stiff,
          });
        return (
          a.useEffect(() => {
            let e = Z(u);
            e !== d && g(e);
          }, [u, d]),
          (0, s.jsxs)(l.animated.div, {
            className: T.inviteCard,
            style: f,
            children: [
              (0, s.jsx)(l.animated.div, {
                className: T.inviteChildContainer,
                style: f,
                children: (0, s.jsx)("section", {
                  ref: m,
                  className: null == r ? void 0 : r(d),
                  children: t(d),
                }),
              }),
              n,
            ],
          })
        );
      }
      function O(e) {
        let { invite: t } = e;
        if (null == t || !(0, I.JI)(t)) return null;
        let n = (e) => {
          if (null == t) return null;
          if (1 === e) return (0, s.jsx)(N.X, { invite: t });
          return null;
        };
        return (0, s.jsx)(R, {
          startAnimHeightPx: 0,
          innerStyle: () => T.guildInfoInner,
          ...e,
          children: (e) => n(e),
        });
      }
      function L(e) {
        let { invite: t } = e,
          n = (n) => {
            if (null == t) return (0, s.jsx)(A, {});
            switch (n) {
              case 1:
                return (0, s.jsx)(b.Z, { ...e, invite: t });
              case 2:
                return (0, s.jsx)(j, { ...e, invite: t });
              default:
                return (0, s.jsx)(A, {});
            }
          },
          i = {
            1: T.inviteCardInner,
            2: T.inviteCardInnerError,
            0: T.inviteCardInnerLoading,
          };
        return (0, s.jsx)(R, {
          startAnimHeightPx: 200,
          innerStyle: (e) => i[e],
          ...e,
          children: (e) => n(e),
        });
      }
      function P(e) {
        let { invite: t, onAcceptInvite: n } = e,
          { guild: i } = null != t ? t : {},
          r = {};
        if ((null == i ? void 0 : i.splash) != null) {
          let e = x.ZP.getGuildSplashURL({ id: i.id, splash: i.splash });
          null != e &&
            ((r.backgroundImage = "url(".concat(e, ")")),
            (r.backgroundSize = "cover"));
        }
        return (0, s.jsxs)(g.ZP, {
          theme: C.BRd.DARK,
          className: T.splashBackground,
          style: r,
          contentClassName: T.centerAuthBoxContent,
          children: [
            (0, s.jsx)(L, { ...e, onAcceptInvite: n }),
            (0, s.jsx)(O, { ...e }),
          ],
        });
      }
      function y(e) {
        let { inviteKey: t, transitionTo: n } = e,
          i = (0, o.e7)([f.Z], () => f.Z.getInvite(t));
        return (
          a.useEffect(() => {
            (0, m.e)("invite_mobile");
          }, []),
          a.useEffect(() => {
            null != i &&
              i.state === C.r2o.RESOLVED &&
              _.default.track(
                C.rMx.INVITE_VIEWED,
                {
                  invite_code: t,
                  friends_count: null == i ? void 0 : i.friends_count,
                },
                { flush: !0 },
              );
          }, [i, t]),
          (0, s.jsx)(P, {
            invite: i,
            onAcceptInvite: (e) => {
              !(function (e, t, n) {
                var i, r, s;
                null == e || e.preventDefault(),
                  _.default.track(C.rMx.INVITE_APP_OPENED, {
                    invite_code: (0, v.jX)(t),
                    guild_id:
                      null == n
                        ? void 0
                        : null === (i = n.guild) || void 0 === i
                          ? void 0
                          : i.id,
                    channel_id:
                      null == n
                        ? void 0
                        : null === (r = n.channel) || void 0 === r
                          ? void 0
                          : r.id,
                    inviter_id:
                      null == n
                        ? void 0
                        : null === (s = n.inviter) || void 0 === s
                          ? void 0
                          : s.id,
                  });
                let a =
                    null != n &&
                    n.state !== C.r2o.EXPIRED &&
                    n.state !== C.r2o.BANNED
                      ? t
                      : void 0,
                  l = p.default.getFingerprint(),
                  o = null != l ? l : p.default.getId(),
                  c =
                    null != n && (null == n ? void 0 : n.type) != null
                      ? Number(null == n ? void 0 : n.type)
                      : void 0;
                u.Z.openApp(a, void 0, o, void 0, c);
              })(e, t, i);
            },
            transitionTo: n,
          })
        );
      }
    },
    258356: function (e, t, n) {
      n.d(t, {
        X: function () {
          return m;
        },
        Z: function () {
          return p;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        s = n(565138),
        a = n(372769),
        l = n(742593),
        o = n(390072),
        c = n(601964),
        u = n(230224),
        d = n(388032),
        h = n(734626);
      function g(e) {
        var t;
        let {
          guildScheduledEvent: n,
          channel: s,
          onAcceptInvite: a,
          isSubmitting: c,
        } = e;
        return (0, i.jsxs)("div", {
          className: h.guildEventCard,
          children: [
            (0, i.jsx)(l.ZP, {
              name: n.name,
              description:
                null !== (t = n.description) && void 0 !== t ? t : void 0,
              headerVariant: "heading-md/medium",
              descriptionClassName: h.__invalid_channelDescription,
              guildId: n.guild_id,
              guildEvent: n,
              eventPreview: n,
            }),
            null != s &&
              (0, i.jsx)("div", {
                className: h.channelInfo,
                children: (0, i.jsx)(o.Z, {
                  guildScheduledEvent: n,
                  channel: s,
                }),
              }),
            (0, i.jsx)(r.Button, {
              className: h.acceptButton,
              color: r.Button.Colors.GREEN,
              onClick: a,
              submitting: c,
              children: d.intl.string(d.t.riu2R0),
            }),
          ],
        });
      }
      function m(e) {
        var t;
        let { invite: n } = e,
          l = null != n.guild ? new c.ZP(n.guild) : null;
        if (null == l) return null;
        let o = null !== (t = l.description) && void 0 !== t ? t : "";
        return (0, i.jsxs)("div", {
          className: h.guildInfoCard,
          children: [
            (0, i.jsx)(r.Heading, {
              className: h.presentedBy,
              variant: "text-sm/medium",
              children: d.intl.string(d.t.Eabu19),
            }),
            (0, i.jsxs)("div", {
              className: h.guildContainer,
              children: [
                (0, i.jsx)(s.Z, {
                  guild: l,
                  active: !0,
                  size: s.Z.Sizes.MEDIUM,
                }),
                (0, i.jsxs)("div", {
                  className: h.guildDetailsContanier,
                  children: [
                    (0, i.jsxs)(r.Text, {
                      className: h.guildName,
                      color: "header-primary",
                      variant: "text-sm/medium",
                      tag: "span",
                      children: [
                        l.name,
                        (0, i.jsx)(a.Z, {
                          guild: l,
                          className: h.guildBadge,
                          tooltipPosition: "left",
                        }),
                      ],
                    }),
                    (0, i.jsx)(u.V6, {
                      invite: n,
                      textClassName: h.guildInfoMemberCountText,
                      className: h.guildInfoMemberCount,
                    }),
                  ],
                }),
              ],
            }),
            o.length > 0 &&
              (0, i.jsx)("details", {
                className: h.guildDescriptionContainer,
                children: (0, i.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: o,
                }),
              }),
          ],
        });
      }
      function p(e) {
        let { invite: t, channel: n, isSubmitting: r, onAcceptInvite: s } = e,
          { guild_scheduled_event: a } = t;
        return null != a
          ? (0, i.jsx)(g, {
              guildScheduledEvent: a,
              channel: n,
              isSubmitting: r,
              onAcceptInvite: s,
            })
          : null;
      }
    },
    970648: function (e, t, n) {
      n(411104);
      var i = n(772848),
        r = n(544891),
        s = n(981631);
      async function a(e) {
        let {
          body: { handoff_token: t },
        } = await r.tn.post({
          url: s.ANM.HANDOFF,
          body: { key: e },
          oldFormErrors: !0,
          retries: 1,
        });
        if (null != t) return t;
        throw Error("Missing handoff token!");
      }
      t.Z = {
        generateNonce: function () {
          return (0, i.Z)();
        },
        createHandoffToken: a,
      };
    },
    86779: function (e, t, n) {
      n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(773603);
      var i,
        r,
        s = n(200651),
        a = n(192379),
        l = n(593473),
        o = n(756647),
        c = n(442837),
        u = n(544891),
        d = n(433517),
        h = n(481060),
        g = n(570140),
        m = n(893776),
        p = n(314897),
        f = n(626135),
        _ = n(70956),
        x = n(970648),
        E = n(981631),
        v = n(388032),
        I = n(179302);
      let b = "mweb_handoff_nonce",
        N = "mweb_handoff_nonce_expiration",
        C = 1 * _.Z.Millis.MINUTE;
      ((r = i || (i = {})).NONCE_MISSING = "nonce_missing"),
        (r.NONCE_EXPIRED = "nonce_expired"),
        (r.NULL_HANDOFF_TOKEN = "deep_link_failed"),
        (r.HANDOFF_EXCHANGE = "handoff_exchange");
      let S = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        T = new Set(["deep_link_failed"]),
        A = () => {
          d.K.remove(b), d.K.remove(N);
        };
      t.Z = () => {
        let e = (0, c.e7)([p.default], () => p.default.getFingerprint()),
          { fingerprint: t, handoff_token: n } = (0, l.parse)(
            window.location.search,
          ),
          i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
          r = null != i ? i : null !== e ? e : void 0;
        a.useEffect(() => {
          null !== i &&
            e !== i &&
            g.Z.dispatch({ type: "FINGERPRINT", fingerprint: i });
        }, [i, e]);
        let [_, Z] = a.useState(null),
          j = a.useCallback(
            (e) => {
              Z(e),
                f.default.track(
                  E.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                  { reason: e, fingerprint: (0, o.K)(r) },
                  { fingerprint: r },
                );
            },
            [Z, r],
          ),
          R = d.K.get(b);
        if (
          ("null" === n && null === _ && j("deep_link_failed"),
          null != n &&
            "null" !== n &&
            null == R &&
            null === _ &&
            j("nonce_missing"),
          a.useEffect(() => {
            if (null != R) {
              let e = d.K.get(N);
              (null == e || Date.now() >= e) && (j("nonce_expired"), A());
            }
          }, [R, j]),
          a.useEffect(() => {
            null != n &&
              "null" !== n &&
              null != R &&
              null == _ &&
              u.tn
                .post({
                  url: E.ANM.HANDOFF_EXCHANGE,
                  body: { key: R, handoff_token: n },
                })
                .then((e) => m.Z.loginToken(e.body.token, !1))
                .then(() => {
                  f.default.track(E.rMx.LOGIN_SUCCESSFUL, {
                    source: E.uRl.MOBILE_WEB_HANDOFF,
                    is_new_user: !1,
                    fingerprint: (0, o.K)(r),
                  });
                  let e = new URL(window.location.href),
                    t = new URLSearchParams(e.search);
                  t.delete("handoff_token"),
                    t.delete("fingerprint"),
                    (e.search = t.toString()),
                    window.history.pushState(null, "", e);
                })
                .catch(() => {
                  j("handoff_exchange");
                })
                .finally(() => {
                  A();
                });
          }, [n, R, _, r, j]),
          null == r)
        )
          return null;
        let O = (() => {
          if (null == _)
            return (0, s.jsxs)(s.Fragment, {
              children: [
                v.intl.string(v.t.uJ1Jsb),
                (0, s.jsx)("br", {}),
                v.intl.string(v.t.GHVWAg),
              ],
            });
          if (T.has(_)) return v.intl.string(v.t.EPt55u);
          if (S.has(_)) return v.intl.string(v.t.g87kTk);
        })();
        return null != _ && T.has(_)
          ? (0, s.jsx)("div", {
              className: I.errorContainer,
              children: (0, s.jsx)(h.Text, {
                color: "interactive-normal",
                variant: "text-sm/semibold",
                children: O,
              }),
            })
          : (0, s.jsxs)("div", {
              className: I.container,
              children: [
                (0, s.jsx)(h.Text, {
                  variant: "text-sm/semibold",
                  children: O,
                }),
                (0, s.jsx)(h.Button, {
                  color: h.Button.Colors.BRAND_INVERTED,
                  onClick: () => {
                    let e = x.Z.generateNonce();
                    d.K.set(b, e), d.K.set(N, Date.now() + C);
                    let t = new URL(E.x0X),
                      n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let i = new URLSearchParams();
                    i.set(
                      "redirect",
                      encodeURIComponent(
                        window.location.pathname + n.toString(),
                      ),
                    ),
                      i.set("key", e),
                      i.set("fingerprint", r),
                      (t.search = i.toString()),
                      f.default.track(
                        E.rMx.DEEP_LINK_CLICKED,
                        {
                          fingerprint: (0, o.K)(r),
                          source: "mobile_web_handoff",
                          destination: E.x0X,
                        },
                        { fingerprint: r, flush: !0 },
                      ),
                      (window.location.href = t.toString());
                  },
                  children: (0, s.jsx)(h.Text, {
                    className: I.buttonText,
                    variant: "text-sm/semibold",
                    children: v.intl.string(v.t["NcC75+"]),
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
      var i = n(200651);
      n(192379);
      var r = n(990547),
        s = n(481060),
        a = n(213609),
        l = n(388905),
        o = n(760213),
        c = n(388032),
        u = n(675792);
      function d(e) {
        let { onDismiss: t } = e;
        return (
          (0, a.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
          }),
          (0, i.jsxs)(l.ZP, {
            className: u.chooseAccountAuthBox,
            children: [
              (0, i.jsx)(l.Dx, { children: c.intl.string(c.t["bVbB6+"]) }),
              (0, i.jsx)(s.Text, {
                className: u.chooseAccountHelpText,
                variant: "text-md/normal",
                color: "header-secondary",
                children: c.intl.string(c.t["0M5fNz"]),
              }),
              (0, i.jsx)(o.Z, {
                actionText: c.intl.string(c.t["DSN+h4"]),
                onAction: (e) => {
                  e === o.W.LOGIN_REQUIRED && t();
                },
              }),
              (0, i.jsx)("div", {
                className: u.actions,
                children: (0, i.jsx)(s.Button, {
                  className: u.__invalid_chooseAccountButton,
                  look: s.Button.Looks.LINK,
                  color: s.Button.Colors.PRIMARY,
                  onClick: t,
                  size: s.Button.Sizes.MEDIUM,
                  children: (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: c.intl.string(c.t["9g2mqa"]),
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    986197: function (e, t, n) {
      var i = n(990547),
        r = n(544891),
        s = n(570140),
        a = n(881052),
        l = n(626135),
        o = n(573261),
        c = n(545851),
        u = n(109488),
        d = n(794099),
        h = n(981631);
      n(135200);
      var g = n(388032);
      t.Z = {
        resetSuggestions: () =>
          s.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" }),
        async fetchSuggestionsRegistration(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1500;
          if (!!(0, d.vc)()) {
            s.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" });
            try {
              var n;
              let i = await r.tn.get({
                url: h.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
              });
              if (
                i.ok &&
                (null === (n = i.body) || void 0 === n ? void 0 : n.username) !=
                  null
              )
                return s.Z.dispatch({
                  type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                  suggestion: i.body,
                  source: e,
                });
            } catch (e) {
              return;
            }
          }
        },
        async fetchSuggestions(e) {
          if (!!(0, u.P)())
            try {
              var t;
              s.Z.dispatch({
                type: "POMELO_SUGGESTIONS_FETCH",
                usernameSuggestionLoading: !0,
              });
              let n = await r.tn.get({
                url: h.ANM.POMELO_SUGGESTIONS,
                timeout: e,
              });
              if (
                n.ok &&
                (null === (t = n.body) || void 0 === t ? void 0 : t.username) !=
                  null
              )
                return s.Z.dispatch({
                  type: "POMELO_SUGGESTIONS_SUCCESS",
                  suggestion: n.body,
                });
            } catch (e) {
              return;
            }
        },
        async attemptPomelo(e) {
          var t, n;
          let r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "modal",
            u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let m =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
              ? g.intl.string(g.t.z7c4bG)
              : t.includes("..")
                ? g.intl.string(g.t["C7G+go"])
                : t.length < 2 || t.length > 32
                  ? g.intl.formatToPlainString(g.t.IpijXF, {
                      maxNum: 32,
                      minNum: 2,
                    })
                  : void 0);
          if (null != m)
            return (
              l.default.track(h.rMx.POMELO_ERRORS, {
                reason: m,
                username_error: !0,
                location: r,
                one_click_flow: d,
              }),
              s.Z.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: m,
              })
            );
          if (!!(0, c.E)())
            try {
              let t = await o.Z.post({
                url: u ? h.ANM.POMELO_ATTEMPT_UNAUTHED : h.ANM.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                  event: i.NetworkActionNames.POMELO_ATTEMPT,
                  properties: { requested_username: e },
                },
              });
              t.body.taken &&
                l.default.track(h.rMx.POMELO_ERRORS, {
                  reason: "already_taken",
                  username_error: !0,
                  location: r,
                  one_click_flow: d,
                }),
                s.Z.dispatch({
                  type: "POMELO_ATTEMPT_SUCCESS",
                  username: e,
                  taken: t.body.taken,
                });
            } catch (o) {
              let t = new a.Hx(o),
                i =
                  null !== (n = t.getAnyErrorMessage()) && void 0 !== n
                    ? n
                    : void 0;
              l.default.track(h.rMx.POMELO_ERRORS, {
                reason: i,
                username_error: !0,
                location: r,
                one_click_flow: d,
              }),
                s.Z.dispatch({
                  username: e,
                  type: "POMELO_ATTEMPT_FAILURE",
                  error:
                    null != t.status && t.status < 500 && 401 !== t.status
                      ? i
                      : void 0,
                  statusCode: t.status,
                  retryAfter: t.retryAfter,
                });
            }
        },
        async createPomelo(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await o.Z.post({
              body: e,
              url: h.ANM.POMELO_CREATE,
              trackedActionData: {
                event: i.NetworkActionNames.POMELO_CREATE,
                properties: { one_click_flow: t },
              },
            });
          return (
            s.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n.body }), n.body
          );
        },
      };
    },
    545851: function (e, t, n) {
      n.d(t, {
        E: function () {
          return r;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Attempt",
          id: "2023-04_pomelo_attempt",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        r = () =>
          i.getCurrentConfig(
            { location: "c22166_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    654344: function (e, t, n) {
      n.d(t, {
        c: function () {
          return r;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Debounce Delay",
          id: "2023-03_pomelo_debounce_delay",
          defaultConfig: { delay: 600 },
          treatments: [
            { id: 1, label: "600ms", config: { delay: 600 } },
            { id: 2, label: "700ms", config: { delay: 700 } },
            { id: 3, label: "800ms", config: { delay: 800 } },
            { id: 4, label: "900ms", config: { delay: 900 } },
            { id: 5, label: "1000ms", config: { delay: 1e3 } },
          ],
        }),
        r = () =>
          i.useExperiment({ location: "52560d_1" }, { autoTrackExposure: !1 })
            .delay;
    },
    135200: function (e, t, n) {
      var i,
        r,
        s,
        a,
        l = n(31775),
        o = n.n(l),
        c = n(442837),
        u = n(570140),
        d = n(70956);
      let h = { taken: null, error: void 0, rateLimited: !0 },
        g = {
          validations: new (o())({ max: 100, maxAge: 6e4 }),
          currentUsernameInvalid: !1,
          retryAfterTime: null,
          suggestions: {
            migration: {
              suggestion: { username: void 0 },
              fetched: !1,
              usernameSuggestionLoading: !1,
            },
            registration: {
              suggestion: { username: void 0 },
              source: void 0,
              fetched: !1,
            },
          },
        };
      class m extends (a = c.ZP.Store) {
        isRateLimited() {
          return null != g.retryAfterTime && Date.now() < g.retryAfterTime;
        }
        validate(e) {
          let t = g.validations.get(e);
          if (this.isRateLimited() && (null == t || t.rateLimited)) return h;
          if (!!this.isRateLimited() || null == t || !t.rateLimited) return t;
        }
        registrationUsernameSuggestion() {
          return g.suggestions.registration.suggestion.username;
        }
        usernameSuggestion() {
          return g.suggestions.migration.suggestion.username;
        }
        usernameSuggestionLoading() {
          return g.suggestions.migration.usernameSuggestionLoading;
        }
        isCurrentUsernameInvalid() {
          return g.currentUsernameInvalid;
        }
        wasRegistrationSuggestionFetched(e) {
          return (
            g.suggestions.registration.source === e &&
            g.suggestions.registration.fetched
          );
        }
        wasSuggestionsFetched() {
          return g.suggestions.migration.fetched;
        }
      }
      (s = "PomeloStore"),
        (r = "displayName") in (i = m)
          ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = s),
        (t.Z = new m(u.Z, {
          POMELO_ATTEMPT_SUCCESS: function (e) {
            let { username: t, taken: n } = e;
            g.validations.set(t, { taken: n });
          },
          POMELO_ATTEMPT_FAILURE: function (e) {
            let { username: t, error: n, statusCode: i, retryAfter: r } = e;
            429 === i
              ? g.validations.set(
                  t,
                  { taken: null, error: n, rateLimited: !0 },
                  (null != r ? r : 7) * d.Z.Millis.SECOND,
                )
              : g.validations.set(t, { taken: null, error: n }),
              null != r &&
                (g.retryAfterTime = Date.now() + r * d.Z.Millis.SECOND);
          },
          POMELO_SUGGESTIONS_RESET: function () {
            (g.suggestions.migration = {
              suggestion: { username: void 0 },
              fetched: !1,
              usernameSuggestionLoading: !1,
            }),
              (g.suggestions.registration = {
                suggestion: { username: void 0 },
                source: void 0,
                fetched: !1,
              });
          },
          POMELO_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t } = e;
            (g.suggestions.migration = {
              suggestion: t,
              fetched: !0,
              usernameSuggestionLoading: !1,
            }),
              (null == t ? void 0 : t.invalid_current_username) === !0 &&
                (g.currentUsernameInvalid = !0);
          },
          POMELO_SUGGESTIONS_FETCH: function (e) {
            let { usernameSuggestionLoading: t } = e;
            g.suggestions.migration.usernameSuggestionLoading = t;
          },
          POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t, source: n } = e;
            (g.suggestions.registration = {
              suggestion: t,
              source: n,
              fetched: !0,
            }),
              (null == t ? void 0 : t.username) != null &&
                g.validations.set(t.username, { taken: !1 });
          },
        }));
    },
    109488: function (e, t, n) {
      n.d(t, {
        P: function () {
          return r;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Suggestions",
          id: "2023-04_pomelo_suggestions",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        r = () =>
          i.getCurrentConfig(
            { location: "1907ae_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    794099: function (e, t, n) {
      n.d(t, {
        F4: function () {
          return r;
        },
        vc: function () {
          return s;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          id: "2023-06_unique_username_registration",
          label: "Unique Username Registration",
          defaultConfig: { livecheckEnabled: !0, suggestions: !0 },
          treatments: [
            {
              id: 1,
              label:
                "Unique Username Registration enabled -livecheck -suggestions",
              config: { livecheckEnabled: !1, suggestions: !1 },
            },
            {
              id: 2,
              label:
                "Unique Username Registration enabled -livecheck +suggestions",
              config: { livecheckEnabled: !1, suggestions: !0 },
            },
            {
              id: 3,
              label:
                "Unique Username Registration enabled +livecheck -suggestions",
              config: { livecheckEnabled: !0, suggestions: !1 },
            },
            {
              id: 4,
              label:
                "Unique Username Registration enabled +livecheck +suggestions",
              config: { livecheckEnabled: !0, suggestions: !0 },
            },
          ],
        }),
        r = () =>
          i.useExperiment({ location: "83ca1a_3" }, { autoTrackExposure: !1 }),
        s = () =>
          i.getCurrentConfig(
            { location: "83ca1a_4" },
            { autoTrackExposure: !1 },
          ).suggestions;
    },
    363577: function (e, t, n) {
      n.d(t, {
        M: function () {
          return u;
        },
      });
      var i = n(192379),
        r = n(392711),
        s = n(399606),
        a = n(986197),
        l = n(654344),
        o = n(135200),
        c = n(346585);
      let u = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          d = (0, s.e7)([o.Z], () => o.Z.validate(e), [e]),
          h = (0, s.e7)([o.Z], () => o.Z.isRateLimited()),
          g = (0, l.c)(),
          m = i.useMemo(
            () =>
              (0, r.debounce)(
                (e) => a.Z.attemptPomelo(e, n ? "registration" : "modal", n, u),
                g,
              ),
            [g, n, u],
          );
        return (
          i.useEffect(() => {
            t && !h && null == d && "" !== e && m(e);
          }, [t, h, d, e, m]),
          i.useMemo(() => (null != d ? (0, c.ti)(d) : void 0), [d])
        );
      };
    },
    807369: function (e, t, n) {
      n.d(t, {
        a: function () {
          return s;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(363577);
      let s = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : void 0,
          a = (0, r.M)(e, t, n),
          [l, o] = i.useState(void 0);
        return (
          i.useEffect(() => {
            "" === e || e === s ? o(void 0) : null != a && o(a);
          }, [a, e, s]),
          l
        );
      };
    },
    180529: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(100621),
        a = n(849146),
        l = n(481060);
      let o = () => {
        let e = r.useRef(null),
          [t, n] = r.useState(0),
          i = r.useMemo(
            () =>
              new a.Z((e) => {
                let [t] = e;
                return n(t.contentRect.height);
              }),
            [],
          );
        return (
          r.useLayoutEffect(
            () => (
              null != e.current && i.observe(e.current), () => i.disconnect()
            ),
            [i],
          ),
          { ref: e, height: t }
        );
      };
      function c(e) {
        let { show: t, children: n, top: r = 0, bottom: a = 0 } = e,
          { ref: c, height: u } = o(),
          d = (0, l.useSpring)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: {
              height: t ? u : 0,
              paddingBottom: t ? "".concat(a, "px") : "0px",
              marginTop: t ? "".concat(r, "px") : "0px",
            },
            config: { tension: 170, friction: 26 },
          }),
          h = (0, l.useSpring)({
            from: { opacity: 0 },
            to: { opacity: t ? 1 : 0 },
            config: {
              duration: 200,
              easing: t ? (e) => e ** 4 : (e) => e * (2 - e),
            },
          });
        return (0, i.jsx)(s.animated.div, {
          style: {
            overflow: "hidden",
            height: d.height,
            paddingBottom: d.paddingBottom,
            marginTop: d.marginTop,
          },
          children: (0, i.jsx)(s.animated.div, {
            style: { opacity: h.opacity },
            ref: c,
            children: n,
          }),
        });
      }
    },
    479446: function (e, t, n) {
      n.d(t, {
        Ou: function () {
          return g;
        },
        SR: function () {
          return i;
        },
        YD: function () {
          return h;
        },
      }),
        n(411104);
      var i,
        r,
        s = n(512722),
        a = n.n(s),
        l = n(493683),
        o = n(904245),
        c = n(957730),
        u = n(592125),
        d = n(669079);
      ((r = i || (i = {})).ACTION = "action"),
        (r.LOOP = "loop"),
        (r.IDLE = "idle");
      let h = async (e, t) => {
          if (null == t) throw Error("giftCode must be defined");
          if (null == e) throw Error("Recipient must be defined");
          let n = await l.Z.openPrivateChannel(e.id).then((e) => {
              let t = u.Z.getChannel(e);
              if ((a()(null != t, "PrivateChannel is null"), null == t))
                throw Error("Channel must be defined");
              return t;
            }),
            i = (0, d.Nz)(t);
          return o.Z.sendMessage(n.id, c.ZP.parse(n, i), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
          });
        },
        g = (e) => {};
    },
    981632: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120),
        n(411104);
      var i = n(200651),
        r = n(192379),
        s = n(442837),
        a = n(481060),
        l = n(607070),
        o = n(409302),
        c = n(474936);
      function u(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: u = !0,
            defaultAnimationState: d,
            idleAnimationState: h,
          } = e,
          g = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
          [m, p] = r.useState(d),
          f = r.useRef((0, o._)(t, m)),
          [_, x] = r.useState(null == h),
          [E, v] = r.useState(!1),
          [I, b] = r.useState(-1),
          N = () => {
            (f.current = (0, o._)(t, m)), b((e) => e + 1);
          },
          C = () => {
            x(!1), v(!0), b(-1), p(d);
          };
        r.useEffect(() => {
          null == h && p(d);
        }, [h, d]),
          r.useEffect(() => {
            if (null != h && I >= 0) {
              C();
              return;
            }
            N();
          }, [t, h]),
          r.useEffect(() => {
            (!E || null == h) && N();
          }, [m]),
          r.useEffect(() => {
            E && (x(null == h), v(!1), N());
          }, [E]);
        if (!c.Cj.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, i.jsx)(a.LottieAnimation, {
          importData: f.current,
          shouldAnimate: !g && u,
          className: n,
          versionKey: I,
          onComplete:
            null != h
              ? () => {
                  null != h && (p(h), x(!0));
                }
              : void 0,
          loop: _,
        });
      }
    },
    409302: function (e, t, n) {
      n.d(t, {
        _: function () {
          return s;
        },
      });
      var i = n(479446),
        r = n(474936);
      let s = (e, t) => {
        let s;
        switch (e) {
          case r.Cj.SNOWGLOBE:
            s = () =>
              n
                .e("20268")
                .then(n.t.bind(n, 22952, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.Cj.BOX:
            s = () =>
              n
                .e("37372")
                .then(n.t.bind(n, 459274, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.Cj.CUP:
            s = () =>
              n
                .e("37066")
                .then(n.t.bind(n, 990632, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.Cj.STANDARD_BOX:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("60592")
                    .then(n.t.bind(n, 433166, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("81358")
                    .then(n.t.bind(n, 145894, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("46468")
                    .then(n.t.bind(n, 70303, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.CAKE:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("5996")
                    .then(n.t.bind(n, 889601, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("71378")
                    .then(n.t.bind(n, 445637, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("69806")
                    .then(n.t.bind(n, 549883, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.CHEST:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("38506")
                    .then(n.t.bind(n, 449445, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("31085")
                    .then(n.t.bind(n, 837312, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("40331")
                    .then(n.t.bind(n, 669711, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.COFFEE:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("23847")
                    .then(n.t.bind(n, 482293, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("93554")
                    .then(n.t.bind(n, 732573, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("71244")
                    .then(n.t.bind(n, 398161, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_STANDARD_BOX:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("20196")
                    .then(n.t.bind(n, 862977, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("58903")
                    .then(n.t.bind(n, 883984, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("62065")
                    .then(n.t.bind(n, 402483, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_CAKE:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("22101")
                    .then(n.t.bind(n, 953256, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("63007")
                    .then(n.t.bind(n, 320152, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("68822")
                    .then(n.t.bind(n, 721670, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_CHEST:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("97674")
                    .then(n.t.bind(n, 191445, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("37357")
                    .then(n.t.bind(n, 967705, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("72637")
                    .then(n.t.bind(n, 209128, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_COFFEE:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("83646")
                    .then(n.t.bind(n, 804732, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("92695")
                    .then(n.t.bind(n, 702411, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("12112")
                    .then(n.t.bind(n, 335878, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.NITROWEEN_STANDARD:
            switch (t) {
              case i.SR.IDLE:
                s = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                s = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                s = () =>
                  n
                    .e("61365")
                    .then(n.t.bind(n, 279858, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          default:
            s = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return s;
      };
    },
    930441: function (e, t, n) {
      n.d(t, {
        $Z: function () {
          return r;
        },
        M0: function () {
          return l;
        },
        Od: function () {
          return o;
        },
        vG: function () {
          return a;
        },
      });
      var i,
        r,
        s = n(388032);
      let a = "emails";
      ((i = r || (r = {})).COMMUNICATION = "communication"),
        (i.SOCIAL = "social"),
        (i.TIPS = "tips"),
        (i.RECOMMENDATIONS_AND_EVENTS = "recommendations_and_events"),
        (i.UPDATES_AND_ANNOUNCEMENTS = "updates_and_announcements"),
        (i.FAMILY_CENTER_DIGEST = "family_center_digest");
      let l = [
          "tips",
          "recommendations_and_events",
          "updates_and_announcements",
        ],
        o = [
          {
            category: "communication",
            label: () => s.intl.string(s.t["B75+xc"]),
            subLabel: () => s.intl.string(s.t.ZHg9TU),
          },
          {
            category: "social",
            label: () => s.intl.string(s.t.sxn7lZ),
            subLabel: () => s.intl.string(s.t.l7sdzM),
          },
          {
            category: "updates_and_announcements",
            label: () => s.intl.string(s.t.EkxXhY),
            subLabel: () => s.intl.string(s.t["8ba9Q0"]),
          },
          {
            category: "tips",
            label: () => s.intl.string(s.t.jNrkrK),
            subLabel: () => s.intl.string(s.t["FF6/+P"]),
          },
          {
            category: "recommendations_and_events",
            label: () => s.intl.string(s.t.E8g1l5),
            subLabel: () => s.intl.string(s.t.X4JMt7),
          },
        ];
    },
    590783: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(789020);
      var i = n(913527),
        r = n.n(i),
        s = n(81825),
        a = n(630388),
        l = n(301766),
        o = n(474936);
      function c(e, t, n) {
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
      let u = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class d extends s.Z {
        static createFromServer(e) {
          return new d({
            userId: null != e.user ? e.user.id : null,
            code: e.code,
            skuId: e.sku_id,
            applicationId: e.application_id,
            uses: e.uses,
            maxUses: e.max_uses,
            storeListingId: null != e.store_listing ? e.store_listing.id : null,
            expiresAt: null != e.expires_at ? r()(e.expires_at) : null,
            redeemed: e.redeemed,
            subscriptionPlanId:
              null != e.subscription_plan
                ? e.subscription_plan.id
                : e.subscription_plan_id,
            subscriptionPlan:
              null != e.subscription_plan
                ? l.ZP.createFromServer(e.subscription_plan)
                : null,
            revoked: !1,
            entitlementBranches:
              null != e.entitlement_branches ? e.entitlement_branches : null,
            flags: null != e.flags ? e.flags : 0,
            giftStyle: e.gift_style,
            subscriptionTrial:
              null != e.subscription_trial
                ? {
                    id: e.subscription_trial.id,
                    interval: e.subscription_trial.interval,
                    intervalCount: e.subscription_trial.interval_count,
                    skuId: e.subscription_trial.sku_id,
                  }
                : null,
            promotion:
              null != e.promotion
                ? {
                    id: e.promotion.id,
                    startDate: e.promotion.start_date,
                    endDate: e.promotion.end_date,
                    inboundHeaderText: e.promotion.inbound_header_text,
                    inboundBodyText: e.promotion.inbound_body_text,
                    inboundHelpCenterLink: e.promotion.inbound_help_center_link,
                  }
                : null,
          });
        }
        isExpired() {
          let e = this.expiresAt;
          return null != e && r()().isAfter(e);
        }
        get hasMultipleCopies() {
          return this.maxUses > 1;
        }
        get isClaimed() {
          return this.uses >= this.maxUses;
        }
        get remainingUses() {
          return this.maxUses - this.uses;
        }
        get isSubscription() {
          return null != this.subscriptionPlanId;
        }
        get premiumSubscriptionType() {
          return (this.isSubscription && o.y7[this.skuId]) || null;
        }
        get isSelfRedeemable() {
          return !(0, a.yE)(this.flags, u.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, a.yE)(
            this.flags,
            u.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED,
          );
        }
        get analyticsData() {
          return { gift_code: this.code, gift_code_max_uses: this.maxUses };
        }
        toString() {
          return this.code;
        }
        constructor(e) {
          super(),
            c(this, "userId", void 0),
            c(this, "code", void 0),
            c(this, "skuId", void 0),
            c(this, "applicationId", void 0),
            c(this, "uses", void 0),
            c(this, "maxUses", void 0),
            c(this, "expiresAt", void 0),
            c(this, "redeemed", void 0),
            c(this, "storeListingId", void 0),
            c(this, "subscriptionPlanId", void 0),
            c(this, "subscriptionPlan", void 0),
            c(this, "revoked", void 0),
            c(this, "entitlementBranches", void 0),
            c(this, "flags", void 0),
            c(this, "subscriptionTrial", void 0),
            c(this, "promotion", void 0),
            c(this, "giftStyle", void 0),
            (this.userId = e.userId),
            (this.code = e.code),
            (this.skuId = e.skuId),
            (this.applicationId = e.applicationId),
            (this.uses = e.uses),
            (this.maxUses = e.maxUses),
            (this.expiresAt = e.expiresAt),
            (this.redeemed = e.redeemed),
            (this.storeListingId = e.storeListingId),
            (this.subscriptionPlanId = e.subscriptionPlanId),
            (this.subscriptionPlan = e.subscriptionPlan),
            (this.revoked = e.revoked),
            (this.entitlementBranches = e.entitlementBranches),
            (this.flags = e.flags),
            (this.subscriptionTrial = e.subscriptionTrial),
            (this.promotion = e.promotion),
            (this.giftStyle = e.giftStyle);
        }
      }
    },
    625054: function (e, t, n) {
      var i = n(525654),
        r = n.n(i),
        s = n(643191);
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
        getTimeSinceNavigationStart: () => Date.now() - s.mb,
      };
    },
    782605: function (e, t, n) {
      n.d(t, {
        O: function () {
          return c;
        },
        l: function () {
          return o;
        },
      });
      var i = n(594174),
        r = n(63063),
        s = n(74538),
        a = n(981631),
        l = n(388032);
      function o(e) {
        switch (e) {
          case a.evJ.TOO_MANY_USER_GUILDS:
            let t = i.default.getCurrentUser(),
              n =
                s.ZP.canUseIncreasedGuildCap(t) ||
                (null == t ? void 0 : t.isStaff())
                  ? a.tHP
                  : a.DZw;
            return {
              title: l.intl.formatToPlainString(l.t["ttJ/ho"], { quantity: n }),
              description: l.intl.string(l.t.iLyuDA),
            };
          case a.evJ.GUILD_AT_CAPACITY:
            return {
              title: l.intl.string(l.t.ZZlox8),
              description: l.intl.string(l.t.ZUEGFh),
            };
          case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
              title: l.intl.string(l.t.kJwpBQ),
              description: l.intl.string(l.t.ZUEGFh),
            };
          default:
            return null;
        }
      }
      function c(e) {
        switch (e) {
          case a.evJ.TOO_MANY_USER_GUILDS:
            return l.intl.string(l.t.iLyuDA);
          case a.evJ.GUILD_AT_CAPACITY:
            return l.intl.string(l.t.M6unND);
          case a.evJ.INVALID_COUNTRY_CODE:
            return l.intl.string(l.t.sRJGR0);
          case a.evJ.INVALID_CANNOT_FRIEND_SELF:
            return l.intl.string(l.t["mY2R+P"]);
          case a.evJ.INVITES_DISABLED:
            return l.intl.format(l.t.RXSeLi, {
              articleLink: r.Z.getArticleURL(a.BhN.INVITE_DISABLED),
            });
          default:
            return l.intl.string(l.t.dDZRd3);
        }
      }
    },
    172517: function (e, t, n) {
      n.d(t, {
        FW: function () {
          return g;
        },
        Pk: function () {
          return o;
        },
        Rq: function () {
          return p;
        },
        W_: function () {
          return a;
        },
        dK: function () {
          return l;
        },
        qd: function () {
          return m;
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
      var i = n(512722),
        r = n.n(i),
        s = n(598077);
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
      async function l(e) {
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
      async function o(e) {
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
      function h(e, t) {
        return (
          r()(null != e.privateKey, "private key cannot be null"),
          window.crypto.subtle.decrypt(
            { name: "RSA-OAEP", hash: "SHA-256" },
            e.privateKey,
            t,
          )
        );
      }
      async function g(e, t) {
        let n = new TextDecoder(),
          i = await h(e, u(t));
        return n.decode(i);
      }
      async function m(e, t) {
        return c(await h(e, u(t)));
      }
      async function p(e, t) {
        t = await g(e, t);
        let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
        if (null == n) throw Error("Invalid encoded user record.");
        let [, i, r, a, l] = n;
        return new s.Z({
          id: i,
          discriminator: r,
          avatar: "0" === a ? null : a,
          username: l,
        });
      }
    },
    296848: function (e, t, n) {
      n.d(t, {
        AT: function () {
          return _;
        },
        GY: function () {
          return p;
        },
        R4: function () {
          return m;
        },
        oE: function () {
          return f;
        },
        yb: function () {
          return g;
        },
      }),
        n(47120),
        n(653041),
        n(192379);
      var i = n(512722),
        r = n.n(i),
        s = n(913527),
        a = n.n(s),
        l = n(99945);
      n(442837);
      var o = n(821849),
        c = n(509545),
        u = n(74538),
        d = n(981631),
        h = n(474936);
      function g(e) {
        return e.items
          .map((e) => {
            let t = c.Z.get(e.planId);
            return r()(null != t, "Unable to fetch plan"), t;
          })
          .map((e) => e.skuId);
      }
      function m(e, t, n) {
        let i = e.getCurrentSubscriptionPlanIdForGroup(n);
        return (
          (e.type === d.NYc.PREMIUM && null == i) ||
          (r()(null != i, "Current subscription has no plan in group"),
          r()(
            !(
              i === h.Xh.PREMIUM_YEAR_TIER_1 && t === h.Xh.PREMIUM_MONTH_TIER_2
            ),
            "Unexpected plan switch",
          ),
          n.indexOf(i) < n.indexOf(t))
        );
      }
      function p(e, t, n) {
        return !m(e, t, n);
      }
      function f(e, t) {
        let n = c.Z.get(e);
        if (null == n) {
          let n = h.GP[e];
          r()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
          let i = (0, u.Wz)(n.skuId);
          !c.Z.isFetchingForSKU(i) && (0, o.GZ)(i, t);
        }
        return n;
      }
      function _(e) {
        let t = Object.keys(l.T).filter((e) => isNaN(Number(e)));
        if (e.status !== d.O0b.PAUSED)
          return { durations: t, currentDaysPaused: 0 };
        if (null == e.pauseEndsAt)
          return { durations: [], currentDaysPaused: 0 };
        {
          let n = a()(e.currentPeriodStart),
            i = Math.round(a()(e.pauseEndsAt).diff(n, "days", !0)),
            r = [];
          for (let e of t) l.T[e] > i && r.push(e);
          return { durations: r, currentDaysPaused: i };
        }
      }
    },
    99945: function (e, t, n) {
      var i, r;
      n.d(t, {
        T: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.ONE_MONTH = 30)] = "ONE_MONTH"),
        (r[(r.TWO_MONTHS = 60)] = "TWO_MONTHS"),
        (r[(r.THREE_MONTHS = 90)] = "THREE_MONTHS");
    },
    319523: function (e, t, n) {
      e.exports = { wrapper: "wrapper_ed5275" };
    },
    929319: function (e, t, n) {
      e.exports = {
        characterBackground: "characterBackground_bdd070",
        artwork: "artwork_bdd070",
        logoWithText: "logoWithText_bdd070",
        logo: "logo_bdd070",
      };
    },
    98762: function (e, t, n) {
      e.exports = {
        applicationIcon: "applicationIcon_db6d88",
        seasonalIcon: "seasonalIcon_db6d88",
      };
    },
    780811: function (e, t, n) {
      e.exports = {
        authBox: "authBox_c394c0",
        createButton: "createButton_c394c0",
        header: "header_c394c0",
        formContainer: "formContainer_c394c0",
      };
    },
    995252: function (e, t, n) {
      e.exports = {
        button: "button_c85cdc elevated_c85cdc",
        buttonTitle: "buttonTitle_c85cdc",
        card: "card_c85cdc elevated_c85cdc",
        cardContents: "cardContents_c85cdc",
        cardAccentLeft: "cardAccentLeft_c85cdc",
        cardAccentRight: "cardAccentRight_c85cdc",
      };
    },
    823433: function (e, t, n) {
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
    449206: function (e, t, n) {
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
    506966: function (e, t, n) {
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
    463143: function (e, t, n) {
      e.exports = {
        column: "column_ef5bab",
        container: "container_ef5bab",
        content: "content_ef5bab",
      };
    },
    730181: function (e, t, n) {
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
    558493: function (e, t, n) {
      e.exports = {
        container: "container_aaa004",
        buttonColumn: "buttonColumn_aaa004",
      };
    },
    960136: function (e, t, n) {
      e.exports = { image: "image_bcfea3" };
    },
    996280: function (e, t, n) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    318906: function (e, t, n) {
      e.exports = {
        buttonContainer: "buttonContainer_dda65b",
        listContainer: "listContainer_dda65b",
        listItem: "listItem_dda65b",
      };
    },
    857018: function (e, t, n) {
      e.exports = {
        title: "title_da258e",
        subtitle: "subtitle_da258e",
        img: "img_da258e",
      };
    },
    49872: function (e, t, n) {
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
    715902: function (e, t, n) {
      e.exports = { image: "image_d42055", loaded: "loaded_d42055" };
    },
    822764: function (e, t, n) {
      e.exports = { logo: "logo_c59dbe" };
    },
    797786: function (e, t, n) {
      e.exports = { checkbox: "checkbox_bc87ef", subText: "subText_bc87ef" };
    },
    257481: function (e, t, n) {
      e.exports = {
        container: "container_d69c1e",
        statusContainer: "statusContainer_d69c1e",
        channelInfoContainer: "channelInfoContainer_d69c1e",
        channelInfoText: "channelInfoText_d69c1e",
      };
    },
    415570: function (e, t, n) {
      e.exports = {
        error: "error_c39a71",
        subTitle: "subTitle_c39a71",
        button: "button_c39a71",
        codeInput: "codeInput_c39a71",
      };
    },
    500878: function (e, t, n) {
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
    350745: function (e, t, n) {
      e.exports = {
        canvas: "canvas_f26d08",
        fallbackImage: "fallbackImage_f26d08",
        visible: "visible_f26d08",
        embedded: "embedded_f26d08",
      };
    },
    253478: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_bb3b80 " + n("110933").scrollbarGhost,
        rightSplit: "rightSplit_bb3b80",
        embedded: "embedded_bb3b80",
        leftSplit: "leftSplit_bb3b80",
        nonEmbeddedLeftSplit: "nonEmbeddedLeftSplit_bb3b80",
        mobileWave: "mobileWave_bb3b80",
        logo: "logo_bb3b80",
      };
    },
    146456: function (e, t, n) {
      n.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    42207: function (e, t, n) {
      e.exports = { spacer: "spacer_b0944f", input: "input_b0944f" };
    },
    7804: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    920076: function (e, t, n) {
      e.exports = {
        descriptionText: "descriptionText_f4ba67",
        truncate: "truncate_f4ba67",
      };
    },
    886550: function (e, t, n) {
      e.exports = { container: "container_f87f77" };
    },
    660091: function (e, t, n) {
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
    839523: function (e, t, n) {
      e.exports = {
        eventStatusContainer: "eventStatusContainer_d6a475",
        isRecurring: "isRecurring_d6a475",
        eventStatusLabel: "eventStatusLabel_d6a475",
        liveEventEndTime: "liveEventEndTime_d6a475",
        newBadge: "newBadge_d6a475",
        newBadgeText: "newBadgeText_d6a475",
      };
    },
    535367: function (e, t, n) {
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
    634900: function (e, t, n) {
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
    489103: function (e, t, n) {
      e.exports = { responseOptions: "responseOptions_ff8b0a" };
    },
    79342: function (e, t, n) {
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
    376873: function (e, t, n) {
      e.exports = {
        image: "image_be5c11",
        header: "header_be5c11",
        usagePill: "usagePill_be5c11",
      };
    },
    252758: function (e, t, n) {
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
    711433: function (e, t, n) {
      e.exports = {
        image: "image_a4d9bd",
        title: "title_a4d9bd",
        subtitle: "subtitle_a4d9bd",
        spacedButton: "spacedButton_a4d9bd",
      };
    },
    599139: function (e, t, n) {
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
    649617: function (e, t, n) {
      e.exports = {
        container: "container_e05cb6",
        acceptButton: "acceptButton_e05cb6",
      };
    },
    865363: function (e, t, n) {
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
    734626: function (e, t, n) {
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
    780696: function (e, t, n) {
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
    712694: function (e, t, n) {
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
    179302: function (e, t, n) {
      e.exports = {
        container: "container_b252f6",
        errorContainer: "errorContainer_b252f6 container_b252f6",
        buttonText: "buttonText_b252f6",
      };
    },
    675792: function (e, t, n) {
      e.exports = {
        chooseAccountAuthBox: "chooseAccountAuthBox_b4df52",
        chooseAccountHelpText: "chooseAccountHelpText_b4df52",
        actions: "actions_b4df52",
      };
    },
    940149: function (e, t, n) {
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
    369365: function (e, t, n) {
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
    594567: function (e, t, n) {
      e.exports = {
        phoneFieldPopout: "phoneFieldPopout_ff761b",
        phoneFieldScroller: "phoneFieldScroller_ff761b",
        countryItem: "countryItem_ff761b",
        countryName: "countryName_ff761b",
        countryCode: "countryCode_ff761b",
      };
    },
    343471: function (e, t, n) {
      e.exports = {
        input: "input_cc6ddd",
        inputWrapper: "inputWrapper_cc6ddd",
        inputField: "inputField_cc6ddd",
      };
    },
    533126: function (e, t, n) {
      function i(e) {
        let t = "==".slice(0, (4 - (e.length % 4)) % 4),
          n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
          i = new ArrayBuffer(n.length),
          r = new Uint8Array(i);
        for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
        return i;
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
          return _;
        },
        wz: function () {
          return f;
        },
      });
      var s = "copy",
        a = "convert";
      function l(e, t, n) {
        if (t === s) return n;
        if (t === a) return e(n);
        if (t instanceof Array) return n.map((n) => l(e, t[0], n));
        if (t instanceof Object) {
          let i = {};
          for (let [r, s] of Object.entries(t)) {
            if (s.derive) {
              let e = s.derive(n);
              void 0 !== e && (n[r] = e);
            }
            if (!(r in n)) {
              if (s.required) throw Error(`Missing key: ${r}`);
              continue;
            }
            if (null == n[r]) {
              i[r] = null;
              continue;
            }
            i[r] = l(e, s.schema, n[r]);
          }
          return i;
        }
      }
      function o(e, t) {
        return { required: !0, schema: e, derive: t };
      }
      function c(e) {
        return { required: !0, schema: e };
      }
      function u(e) {
        return { required: !1, schema: e };
      }
      var d = { type: c(s), id: c(a), transports: u(s) },
        h = { appid: u(s), appidExclude: u(s), credProps: u(s) },
        g = { appid: u(s), appidExclude: u(s), credProps: u(s) };
      c({
        rp: c(s),
        user: c({ id: c(a), name: c(s), displayName: c(s) }),
        challenge: c(a),
        pubKeyCredParams: c(s),
        timeout: u(s),
        excludeCredentials: u([d]),
        authenticatorSelection: u(s),
        attestation: u(s),
        extensions: u(h),
      }),
        u(s),
        c(s),
        c(s),
        c(a),
        u(s),
        c({
          clientDataJSON: c(a),
          attestationObject: c(a),
          transports: o(s, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
          }),
        }),
        o(g, (e) => e.getClientExtensionResults());
      var m = {
          mediation: u(s),
          publicKey: c({
            challenge: c(a),
            timeout: u(s),
            rpId: u(s),
            allowCredentials: u([d]),
            userVerification: u(s),
            extensions: u(h),
          }),
          signal: u(s),
        },
        p = {
          type: c(s),
          id: c(s),
          rawId: c(a),
          authenticatorAttachment: u(s),
          response: c({
            clientDataJSON: c(a),
            authenticatorData: c(a),
            signature: c(a),
            userHandle: c(a),
          }),
          clientExtensionResults: o(g, (e) => e.getClientExtensionResults()),
        };
      function f(e) {
        return l(i, m, e);
      }
      async function _(e) {
        let t = await navigator.credentials.get(e);
        return (t.toJSON = () => l(r, p, t)), t;
      }
    },
  },
]);
//# sourceMappingURL=45002e4e59020d93c13b.js.map
