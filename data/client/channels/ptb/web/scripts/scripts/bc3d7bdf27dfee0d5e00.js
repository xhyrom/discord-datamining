"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3500"],
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
        l = n(990547),
        o = n(873546),
        a = n(442837),
        c = n(570140),
        d = n(893776),
        u = n(533307),
        h = n(447543),
        g = n(126399),
        f = n(521379),
        m = n(765717),
        p = n(267394),
        x = n(761305),
        _ = n(698177),
        E = n(353926),
        I = n(409059),
        N = n(962220),
        v = n(637776),
        C = n(264229),
        b = n(677760),
        T = n(893607),
        Z = n(314897),
        A = n(82142),
        S = n(701190),
        j = n(626135),
        R = n(81063),
        P = n(449934),
        L = n(768581),
        O = n(625054),
        y = n(645499),
        D = n(320830),
        k = n(721751),
        w = n(718182),
        B = n(223543),
        M = n(73906),
        G = n(299852),
        F = n(39514),
        U = n(236446),
        z = n(9325),
        V = n(344295),
        K = n(781428),
        H = n(209411),
        W = n(649156),
        q = n(423527),
        J = n(424044),
        Y = n(479495),
        X = n(881317),
        Q = n(886806),
        $ = n(981631),
        ee = n(188785),
        et = n(245335);
      n(179645);
      a.ZP.initialize();
      let en = (0, D.Z)(K.Z),
        ei = (0, D.Z)(H.Z),
        er = (0, D.Z)(V.Z),
        es = (0, D.Z)(U.Z),
        el = (0, D.Z)(F.Z),
        eo = (0, D.Z)(b.Z),
        ea = (0, D.Z)(q.Z),
        ec = (0, D.Z)(w.Z),
        ed = (0, D.Z)(B.Z),
        eu = (0, D.Z)(Q.Z),
        eh = (0, D.Z)(_.Z),
        eg = (0, D.Z)(Y.Z),
        ef = (0, D.Z)(G.Z),
        em = (0, D.Z)(x.Z),
        ep = (0, D.Z)(v.Z),
        ex = (0, D.Z)(M.Z),
        e_ = (0, D.Z)(W.Z),
        eE = (0, D.Z)(X.Z),
        eI = (0, D.Z)(J.Z),
        eN = (0, D.Z)(f.Z);
      class ev extends r.PureComponent {
        static getDerivedStateFromProps(e, t) {
          var n;
          let { invite: i, location: r } = e,
            { backgroundId: l } = t,
            o =
              null !== (n = (0, s.parse)(r.search).redirect_to) && void 0 !== n
                ? n
                : null;
          (null == o || "" === o || !(0, y.B)(o) || o.startsWith($.Z5c.ME)) &&
            (o = null);
          let a = null;
          if (null == i) a = (0, P.gK)(o);
          else if ((null == i ? void 0 : i.state) === $.r2o.RESOLVED) {
            let { guild: e, target_application: t } = i;
            null != t
              ? null != l && (a = (0, R.getAssetImage)(t.id, l, 1024))
              : null != e &&
                "string" == typeof e.splash &&
                (a = L.ZP.getGuildSplashURL({ id: e.id, splash: e.splash }));
          }
          return { redirectTo: o, splash: a };
        }
        componentDidMount() {
          let {
            inviteKey: e,
            hasLoadedExperiments: t,
            isAuthenticated: n,
          } = this.props;
          null != e &&
            (!t && n && d.Z.getExperiments(!0),
            j.default.track(
              $.rMx.INVITE_OPENED,
              {
                invite_code: (0, C.jX)(e),
                load_time: O.Z.getTimeSinceNavigationStart(),
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
            ((0, p.A)(t),
            null != t.type && et.xf.has(t.type) && h.Z.openNativeAppModal(e));
        }
        resolveGuildTemplate() {
          let { guildTemplateCode: e } = this.props;
          if (null != e)
            j.default.track(
              $.rMx.GUILD_TEMPLATE_OPENED,
              {
                guild_template_code: e,
                load_time: O.Z.getTimeSinceNavigationStart(),
              },
              { flush: !0 },
            ),
              N.Z.resolveGuildTemplate(e),
              N.Z.openNativeAppModal(e);
        }
        resolveGiftCode() {
          let { giftCode: e } = this.props;
          if (null != e)
            u.Z.resolveGiftCode(e, !0, !0).then((t) => {
              null != t &&
                null == t.giftCode.promotion &&
                c.Z.wait(() => u.Z.openNativeGiftCodeModal(e));
            });
        }
        render() {
          let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
          return (0, i.jsxs)(k.Z, {
            splash: e,
            children: [
              (0, i.jsx)(m.Z, {
                path: $.Z5c.LOGIN_HANDOFF,
                render: (e) => (0, i.jsx)(ei, { ...e, redirectTo: t }),
              }),
              (0, i.jsx)(m.Z, {
                impressionName: l.ImpressionNames.USER_LOGIN,
                path: $.Z5c.LOGIN,
                render: (e) => (0, i.jsx)(en, { ...e, redirectTo: t }),
              }),
              (0, i.jsx)(m.Z, {
                impressionName: l.ImpressionNames.USER_REGISTRATION,
                path: $.Z5c.REGISTER,
                render: (e) =>
                  ee.a
                    ? (0, i.jsx)(er, { ...e, redirectTo: t, inviteKey: n })
                    : (0, i.jsx)(ea, { ...e, redirectTo: t }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                render: (e) => (0, i.jsx)(el, { login: !0, ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.GIFT_CODE(":giftCode"),
                render: (e) => (0, i.jsx)(el, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
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
                    l = (0, C.mb)(t, r.search);
                  return o.tq || o.Em
                    ? (0, i.jsx)(eo, { inviteKey: l, transitionTo: s }, l)
                    : (0, i.jsx)(er, {
                        inviteKey: l,
                        location: r,
                        transitionTo: s,
                        login: n === $.Z5c.INVITE_LOGIN(":inviteCode"),
                      });
                },
              }),
              (0, i.jsx)(m.Z, {
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
                  return o.tq || o.Em
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
              (0, i.jsx)(m.Z, {
                path: $.Z5c.VERIFY,
                render: (e) => (0, i.jsx)(eu, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.VERIFY_HUB_EMAIL,
                render: (e) => (0, i.jsx)(ep, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.VERIFY_REQUEST,
                render: (e) => (0, i.jsx)(eh, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                render: (e) => (0, i.jsx)(ef, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                render: (e) => (0, i.jsx)(em, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.AUTHORIZE_IP,
                render: (e) => (0, i.jsx)(ec, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.REJECT_IP,
                render: (e) =>
                  (0, i.jsx)(eg, { source: $.Z5c.REJECT_IP, ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.REJECT_MFA,
                render: (e) =>
                  (0, i.jsx)(eg, { source: $.Z5c.REJECT_MFA, ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.AUTHORIZE_PAYMENT,
                render: (e) => (0, i.jsx)(ed, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.RESET,
                render: (e) => (0, i.jsx)(eg, { source: $.Z5c.RESET, ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                render: (e) => (0, i.jsx)(e_, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.CHANNEL(
                  T.Hw.guildId(),
                  T.Hw.channelId({ optional: !0 }),
                  ":messageId?",
                ),
                render: (e) => (0, i.jsx)(ex, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.REPORT,
                render: (e) => (0, i.jsx)(eE, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.REPORT_SECOND_LOOK,
                render: (e) => (0, i.jsx)(eI, { ...e }),
              }),
              (0, i.jsx)(m.Z, {
                path: $.Z5c.ACCOUNT_REVERT(":token"),
                render: (e) => (0, i.jsx)(eN, { ...e }),
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
      t.default = a.ZP.connectStores([Z.default, S.Z, A.Z, E.Z, I.Z], (e) => {
        var t, n, i;
        let { match: r, location: s } = e,
          l =
            null == r
              ? void 0
              : null === (t = r.params) || void 0 === t
                ? void 0
                : t.inviteCode,
          o = ee.a ? ee.Y : void 0,
          a = null != l ? (0, C.mb)(l, s.search) : o,
          c =
            null == r
              ? void 0
              : null === (n = r.params) || void 0 === n
                ? void 0
                : n.giftCode,
          d =
            null == r
              ? void 0
              : null === (i = r.params) || void 0 === i
                ? void 0
                : i.guildTemplateCode;
        return {
          inviteKey: a,
          isAuthenticated: Z.default.isAuthenticated(),
          giftCode: c,
          guildTemplateCode: d,
          gift: null != c ? A.Z.get(c) : null,
          invite: null != a ? S.Z.getInvite(a) : null,
          guildTemplate: null != d ? I.Z.getGuildTemplate(d) : null,
          hasLoadedExperiments: E.Z.hasLoadedExperiments,
        };
      })(ev);
    },
    320830: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(954955),
        l = n.n(s),
        o = n(748780),
        a = n(873546),
        c = n(477690),
        d = n(481060),
        u = n(624138),
        h = n(610385);
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
      let f = (0, u.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        m = { START: 0, END: 1 },
        p = { friction: 10, tension: 130 };
      t.Z = function (e) {
        return class extends r.Component {
          componentDidMount() {
            !a.tq &&
              (window.addEventListener("resize", this.handleResizeDebounced),
              this.handleResize());
          }
          componentWillUnmount() {
            clearTimeout(this.timeout),
              window.removeEventListener("resize", this.handleResizeDebounced);
          }
          componentWillAppear(e) {
            this.state.shouldAnimate ? this.animateTo(m.END, e) : e();
          }
          componentWillEnter(e) {
            this.state.shouldAnimate
              ? (clearTimeout(this.timeout),
                (this.timeout = setTimeout(() => this.animateTo(m.END, e), 40)))
              : e();
          }
          componentWillLeave(e) {
            this.state.shouldAnimate ? this.animateTo(m.START, e) : e();
          }
          animateTo(e, t) {
            o.Z.spring(this.anim, { toValue: e, ...p }).start(t);
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
              children: (0, i.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                children: (t) => {
                  let { reducedMotion: n } = t;
                  return (0, i.jsx)(o.Z.div, {
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
              g(this, "anim", new o.Z.Value(m.START)),
              g(this, "state", { shouldAnimate: !a.tq }),
              g(this, "handleResize", () => {
                let e = window.innerWidth > f;
                !this.state.shouldAnimate && e && this.anim.setValue(m.END),
                  this.setState({ shouldAnimate: e });
              }),
              g(this, "handleResizeDebounced", l()(this.handleResize, 60));
          }
        };
      };
    },
    721751: function (e, t, n) {
      let i;
      n(47120);
      var r = n(200651),
        s = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(873546),
        c = n(442837),
        d = n(481060),
        u = n(980591),
        h = n(605782),
        g = n(133853),
        f = n(568154),
        m = n(353926),
        p = n(703656),
        x = n(981631),
        _ = n(687e3);
      let E = n(575703),
        I = n(2984),
        N = [
          x.Z5c.LOGIN,
          x.Z5c.LOGIN_HANDOFF,
          x.Z5c.REGISTER,
          x.Z5c.INVITE(""),
          x.Z5c.GIFT_CODE(""),
          x.Z5c.GUILD_TEMPLATE_LOGIN(""),
          x.Z5c.GUILD_TEMPLATE(""),
          x.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
          x.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
          x.Z5c.BILLING_PREMIUM_SUBSCRIBE,
          x.Z5c.BILLING_PAYMENT_SOURCES_CREATE,
          x.Z5c.BILLING_PAYMENTS,
          x.Z5c.BILLING_PREMIUM_SWITCH_PLAN,
          x.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
          x.Z5c.VERIFY,
          x.Z5c.VERIFY_HUB_EMAIL,
          x.Z5c.REJECT_IP,
          x.Z5c.REJECT_MFA,
          x.Z5c.AUTHORIZE_IP,
          x.Z5c.AUTHORIZE_PAYMENT,
          x.Z5c.RESET,
          x.Z5c.HANDOFF,
          x.Z5c.REPORT,
          x.Z5c.REPORT_SECOND_LOOK,
          x.Z5c.ACCOUNT_REVERT(""),
        ];
      function v(e) {
        return N.some((t) => e.startsWith(t));
      }
      let C = (e) => ((i = e), e);
      function b(e) {
        let { children: t } = e;
        switch (
          (function () {
            let [e, t] = s.useState(!1),
              [n, r] = s.useState(true),
              l = (function () {
                return null;
              })(),
              o = (0, c.e7)([m.Z], () => m.Z.hasLoadedExperiments);
            return ((0, u.Z)(() => {}, 300), void 0 !== i)
              ? i
              : !n && o
                ? (!e && t(!0),
                  C(
                    (function (e) {
                      return "default";
                    })(l),
                  ))
                : n
                  ? C("default")
                  : "loading";
          })()
        ) {
          case "default":
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("img", { className: _.artwork, src: E, alt: "" }),
                (0, r.jsx)("img", {
                  className: _.logoWithText,
                  src: I,
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
      class T extends s.Component {
        componentDidMount() {
          window.addEventListener("resize", this.handleResize);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        mobileTransitionTo(e, t) {
          if (v(e)) (0, p.uL)(e, t);
          else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
          }
        }
        mobileReplaceWith(e) {
          v(e) ? (0, p.dL)(e) : (window.location = e);
        }
        renderDefault() {
          let { splash: e } = this.props,
            t = (0, r.jsx)(h.Z, {
              component: s.Fragment,
              children: s.Children.map(this.props.children, (e) =>
                s.cloneElement(e, { transitionTo: p.uL, replaceWith: p.dL }),
              ),
            });
          return (0, r.jsx)("div", {
            className: _.characterBackground,
            children: (0, r.jsx)(d.HeadingLevel, {
              forceLevel: 1,
              children:
                null != e
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(g.Z, { show: !0, className: o()(_.logo) }),
                        (0, r.jsx)(f.h, { splash: e, children: t }),
                      ],
                    })
                  : (0, r.jsx)(b, { children: t }),
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
          return e || a.tq || a.Em || t
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
      t.Z = T;
    },
    718182: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(525654),
        l = n.n(s),
        o = n(442837),
        a = n(893776),
        c = n(493773),
        d = n(129293),
        u = n(388905),
        h = n(108427),
        g = n(981631),
        f = n(388032),
        m = n(232186);
      function p(e) {
        return n.g.location.assign(e);
      }
      function x(e) {
        let { location: t, transitionTo: s = p } = e,
          [o, x] = r.useState("submitting");
        function _() {
          return "Android" === l().os.family || "iOS" === l().os.family
            ? null
            : (0, i.jsx)(u.zx, {
                onClick: () => s(g.Z5c.LOGIN),
                children: f.intl.string(f.t.dKhVQE),
              });
        }
        return ((0, c.Z)(() => {
          (0, h.e)("authorize_ip");
          let e = (0, d.Z)(t);
          if (null == e) {
            x("failed");
            return;
          }
          (async () => {
            try {
              await a.Z.authorizeIPAddress(e), x("succeeded");
            } catch (e) {
              x("failed");
            }
          })();
        }),
        "failed" === o)
          ? (0, i.jsxs)(u.ZP, {
              children: [
                (0, i.jsx)("img", {
                  alt: "",
                  src: n(262467),
                  className: m.marginBottom20,
                }),
                (0, i.jsx)(u.Dx, {
                  className: m.marginBottom8,
                  children: f.intl.string(f.t["f/54a2"]),
                }),
                (0, i.jsx)(u.DK, {
                  className: m.marginBottom40,
                  children: f.intl.string(f.t.i3ehMj),
                }),
                _(),
              ],
            })
          : "succeeded" === o
            ? (0, i.jsxs)(u.ZP, {
                children: [
                  (0, i.jsx)("img", {
                    alt: "",
                    src: n(640356),
                    className: m.marginBottom20,
                  }),
                  (0, i.jsx)(u.Dx, {
                    className: m.marginBottom8,
                    children: f.intl.string(f.t.iG0SlJ),
                  }),
                  (0, i.jsx)(u.DK, {
                    className: m.marginBottom40,
                    children: f.intl.string(f.t["Elv+qq"]),
                  }),
                  _(),
                ],
              })
            : (0, i.jsxs)(u.ZP, {
                children: [
                  (0, i.jsx)(u.Hh, {}),
                  (0, i.jsx)(u.Dx, { children: f.intl.string(f.t["9exy+f"]) }),
                ],
              });
      }
      o.ZP.initialize();
    },
    223543: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(893776),
        l = n(129293),
        o = n(388905),
        a = n(108427),
        c = n(388032),
        d = n(232186);
      function u(e) {
        let { location: t } = e,
          [u, h] = r.useState("submitting");
        return (r.useEffect(() => {
          (0, a.e)("authorize_payment");
          let e = (0, l.Z)(t);
          if (null == e) {
            h("failed");
            return;
          }
          (async () => {
            try {
              await s.Z.authorizePayment(e), h("succeeded");
            } catch (e) {
              h("failed");
            }
          })();
        }, [t]),
        "failed" === u)
          ? (0, i.jsxs)(o.ZP, {
              children: [
                (0, i.jsx)("img", {
                  alt: "",
                  src: n(375673),
                  className: d.marginBottom20,
                }),
                (0, i.jsx)(o.Dx, {
                  className: d.marginBottom8,
                  children: c.intl.string(c.t.GHRpub),
                }),
                (0, i.jsx)(o.DK, {
                  className: d.marginBottom40,
                  children: c.intl.string(c.t["1nO55u"]),
                }),
              ],
            })
          : "succeeded" === u
            ? (0, i.jsxs)(o.ZP, {
                children: [
                  (0, i.jsx)("img", {
                    alt: "",
                    src: n(73962),
                    className: d.marginBottom20,
                  }),
                  (0, i.jsx)(o.Dx, {
                    className: d.marginBottom8,
                    children: c.intl.string(c.t["ihHX5+"]),
                  }),
                  (0, i.jsx)(o.DK, {
                    className: d.marginBottom40,
                    children: c.intl.string(c.t.pGPCv7),
                  }),
                ],
              })
            : (0, i.jsxs)(o.ZP, {
                children: [
                  (0, i.jsx)(o.Hh, {}),
                  (0, i.jsx)(o.Dx, { children: c.intl.string(c.t.T3vC7u) }),
                ],
              });
      }
    },
    73906: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(3570),
        s = n(685311),
        l = n(186901);
      t.Z = function (e) {
        let { match: t, location: n } = e,
          o = async (e, t) => {
            await (0, r.s)(l.jE.CHANNEL, {
              guildId: e.params.guildId,
              channelId: e.params.channelId,
              messageId: e.params.messageId,
              search: t.search,
            });
          };
        return (0, i.jsx)(s.Z, { match: t, location: n, attemptDeepLink: o });
      };
    },
    685311: function (e, t, n) {
      n(47120);
      var i,
        r,
        s = n(200651),
        l = n(192379),
        o = n(120356),
        a = n.n(o),
        c = n(536285),
        d = n(857458),
        u = n(388905),
        h = n(703656),
        g = n(388032),
        f = n(232186);
      ((r = i || (i = {}))[(r.INITIAL = 0)] = "INITIAL"),
        (r[(r.RPC_CONNECTED = 1)] = "RPC_CONNECTED"),
        (r[(r.APP_OPENING = 2)] = "APP_OPENING"),
        (r[(r.APP_OPENED = 3)] = "APP_OPENED");
      t.Z = function (e) {
        let { match: t, location: n, attemptDeepLink: i } = e,
          [r, o] = l.useState(0);
        l.useEffect(() => {
          c.default.once("connected", () => {
            o(1);
          }),
            c.default.once("disconnected", () => {
              (0, h.uL)((0, d.M)());
            }),
            c.default.connect();
        }, []),
          l.useEffect(() => {
            if (0 !== r) return;
            let e = setTimeout(() => (0, h.uL)((0, d.M)()), 3e3);
            return () => clearTimeout(e);
          }, [r]);
        let m = l.useCallback(
          async (e, t) => {
            try {
              o(2), await i(e, t), o(3);
            } catch (e) {
              console.error("Error opening deeplink", e);
            }
          },
          [i],
        );
        if ((0, h.DB)()) return null;
        switch (r) {
          case 1:
            return (0, s.jsxs)(u.ZP, {
              children: [
                (0, s.jsx)(u.Dx, {
                  className: f.marginBottom8,
                  children: g.intl.string(g.t.qllnGh),
                }),
                (0, s.jsx)(u.DK, { children: g.intl.string(g.t.SXCxyc) }),
                (0, s.jsx)(u.zx, {
                  className: f.marginTop40,
                  onClick: () => m(t, n),
                  children: g.intl.string(g.t.UQvCf3),
                }),
                (0, s.jsx)(u.zx, {
                  className: a()(f.marginTop8, f.marginCenterHorz),
                  color: u.zx.Colors.LINK,
                  look: u.zx.Looks.LINK,
                  onClick: () => (0, h.uL)((0, d.M)()),
                  children: g.intl.string(g.t["2ixEBg"]),
                }),
              ],
            });
          case 0:
          case 2:
            return (0, s.jsxs)(u.ZP, {
              children: [
                (0, s.jsx)(u.Dx, { children: g.intl.string(g.t["Z+hCVV"]) }),
                (0, s.jsx)(u.Hh, {}),
              ],
            });
          case 3:
            return (0, s.jsxs)(u.ZP, {
              children: [
                (0, s.jsx)(u.Dx, {
                  className: f.marginBottom8,
                  children: g.intl.string(g.t.csrAMD),
                }),
                (0, s.jsx)(u.DK, { children: g.intl.string(g.t.ghBJz8) }),
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
        l = n(593473),
        o = n(442837),
        a = n(544891),
        c = n(481060),
        d = n(129293),
        u = n(388905),
        h = n(108427),
        g = n(598077),
        f = n(896797),
        m = n(981631),
        p = n(930441),
        x = n(388032),
        _ = n(232186);
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
      o.ZP.initialize();
      class I extends (i = s.PureComponent) {
        componentDidMount() {
          let e = (0, d.Z)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
          a.tn
            .post({
              url: m.ANM.DISABLE_EMAIL_NOTIFICATIONS,
              body: {
                token: e,
                pixel_uuid: t.hash,
                category: t.category,
                email_type: t.email_type,
              },
              oldFormErrors: !0,
              rejectWithError: !0,
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
          return (0, r.jsx)(u.ZP, { children: (0, r.jsx)(u.Hh, {}) });
        }
        renderCategorySuccess(e, t) {
          let { defaultRoute: n, transitionTo: i } = this.props,
            s = x.intl.formatToPlainString(x.t.YDAohI, { category: t });
          return (0, r.jsxs)(u.ZP, {
            children: [
              (0, r.jsx)(u.Dx, {
                className: _.marginBottom8,
                children: x.intl.string(x.t.f6rdLi),
              }),
              (0, r.jsx)(u.DK, { children: s }),
              (0, r.jsx)(u.zx, {
                className: _.marginTop20,
                onClick: () => i(n),
                children: x.intl.string(x.t.fIv16O),
              }),
              (0, r.jsx)(u.zx, {
                className: _.marginTop8,
                color: u.zx.Colors.LINK,
                look: u.zx.Looks.LINK,
                onClick: () => i(m.Z5c.SETTINGS("notifications", p.vG)),
                children: x.intl.string(x.t.YYTira),
              }),
            ],
          });
        }
        renderSuccess() {
          let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
          if (null != i) {
            let e = p.Od.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
          }
          return (0, r.jsxs)(u.ZP, {
            children: [
              (0, r.jsx)(u.qE, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                size: c.AvatarSizes.DEPRECATED_SIZE_100,
                className: _.marginBottom20,
              }),
              (0, r.jsx)(u.Dx, {
                className: _.marginBottom8,
                children: x.intl.string(x.t["6U6OMT"]),
              }),
              (0, r.jsx)(u.DK, { children: x.intl.string(x.t["yaDJ4+"]) }),
              (0, r.jsx)(u.zx, {
                className: _.marginTop40,
                onClick: () => t(e),
                children: x.intl.string(x.t.fIv16O),
              }),
            ],
          });
        }
        renderError() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, r.jsxs)(u.ZP, {
            children: [
              (0, r.jsx)(u.Ee, { src: n(105020), className: _.marginBottom20 }),
              (0, r.jsx)(u.Dx, {
                className: _.marginBottom8,
                children: x.intl.string(x.t.ox9hIS),
              }),
              (0, r.jsx)(u.DK, { children: x.intl.string(x.t["/dcuR0"]) }),
              (0, r.jsx)(u.zx, {
                className: _.marginTop40,
                onClick: () => t(e),
                children: x.intl.string(x.t.fIv16O),
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
      E(I, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) }),
        (t.Z = o.ZP.connectStores([f.Z], () => ({
          defaultRoute: f.Z.defaultRoute,
        }))(I));
    },
    39514: function (e, t, n) {
      n(47120), n(411104);
      var i,
        r,
        s = n(200651),
        l = n(192379),
        o = n(120356),
        a = n.n(o),
        c = n(442837),
        d = n(570140),
        u = n(893776),
        h = n(533307),
        g = n(978085),
        f = n(232567),
        m = n(388905),
        p = n(362762),
        x = n(108427),
        _ = n(314897),
        E = n(896797),
        I = n(82142),
        N = n(283595),
        v = n(55563),
        C = n(669079),
        b = n(63063),
        T = n(51144),
        Z = n(481153),
        A = n(781428),
        S = n(423527),
        j = n(981631),
        R = n(388032),
        P = n(232186);
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
      class O extends l.PureComponent {
        componentDidMount() {
          let { authenticated: e, isResolved: t } = this.props;
          e && this.handleAuthenticated(),
            !t && this.resolveGiftCode(),
            (0, x.e)("gift_code");
        }
        componentDidUpdate(e) {
          let { authenticated: t, isResolved: n } = this.props;
          !n &&
            d.Z.wait(() => {
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
          return (0, s.jsxs)(m.ZP, {
            children: [(0, s.jsx)(m.Dx, { children: e }), (0, s.jsx)(m.Hh, {})],
          });
        }
        renderExpiredInvite() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, s.jsxs)(m.ZP, {
            children: [
              (0, s.jsx)(m.Ee, { src: n(167969), className: P.marginBottom8 }),
              (0, s.jsx)(m.Dx, {
                className: a()(P.marginTop8, P.marginBottom8),
                children: R.intl.string(R.t.KPowgo),
              }),
              (0, s.jsx)(m.DK, { children: R.intl.string(R.t.j8734e) }),
              (0, s.jsx)(m.zx, {
                className: a()(P.marginTop40, P.marginBottom8),
                onClick: () => t(e),
                children: R.intl.string(R.t.fIv16O),
              }),
              (0, s.jsx)(m.zx, {
                onClick: () =>
                  window.open(b.Z.getArticleURL(j.BhN.GIFTING), "_blank"),
                look: m.zx.Looks.LINK,
                color: m.zx.Colors.LINK,
                children: R.intl.string(R.t["/CjuXF"]),
              }),
            ],
          });
        }
        renderAppOpened() {
          return (0, s.jsxs)(m.ZP, {
            children: [
              (0, s.jsx)(m.Dx, {
                className: P.marginBottom8,
                children: R.intl.string(R.t.csrAMD),
              }),
              (0, s.jsx)(m.DK, { children: R.intl.string(R.t["m1+IBg"]) }),
              (0, s.jsx)(m.zx, {
                className: P.marginTop40,
                onClick: () => this.setState({ continueOnWeb: !0 }),
                children: R.intl.string(R.t["qsI+EB"]),
              }),
            ],
          });
        }
        renderVerification(e) {
          let { sentVerification: t } = this.state;
          return (0, s.jsxs)(m.ZP, {
            children: [
              (0, s.jsx)(m.Ee, { src: n(892235), className: P.marginBottom8 }),
              (0, s.jsx)(m.Dx, {
                children: R.intl.format(R.t.ivLUf3, { username: e.username }),
              }),
              (0, s.jsx)(m.DK, {
                className: P.marginTop20,
                children: R.intl.string(R.t["8Su18/"]),
              }),
              (0, s.jsx)(m.zx, {
                disabled: t,
                className: P.marginTop40,
                onClick: this.handleResendVerification,
                children: t
                  ? R.intl.string(R.t.CMa9Rk)
                  : R.intl.string(R.t.lm1UKi),
              }),
              (0, s.jsx)(m.zx, {
                look: m.zx.Looks.LINK,
                color: m.zx.Colors.LINK,
                onClick: this.refreshUser,
                className: P.marginTop8,
                children: R.intl.string(R.t.Po9eBQ),
              }),
            ],
          });
        }
        renderAuthenticated(e, t) {
          let n = this.getErrorMessage(e);
          return (0, s.jsxs)(m.ZP, {
            children: [
              (0, s.jsx)(Z.Z, { giftCode: e }),
              (0, s.jsx)(m.zx, {
                disabled: null != n,
                className: P.marginTop40,
                onClick: this.handleAccept,
                children: R.intl.string(R.t.n6I6k5),
              }),
              null != n
                ? (0, s.jsx)(m.DK, { className: P.marginTop20, children: n })
                : (0, s.jsx)(m.i_, {
                    className: P.marginTop20,
                    children: R.intl.format(R.t.NYM08v, {
                      userTag: T.ZP.getUserTag(t),
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
              isAccepting: l,
              transitionTo: o,
              location: a,
            } = this.props,
            { fetchingUser: c, continueOnWeb: d } = this.state;
          if (e === j.kEZ.OPEN && !d) return this.renderAppOpened();
          if (e === j.kEZ.OPENING)
            return this.renderSpinner(R.intl.string(R.t["Z+hCVV"]));
          if (l) return this.renderSpinner(R.intl.string(R.t.bhJseH));
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
                  transitionTo: o,
                  location: a,
                })
              : (0, s.jsx)(S.Z, {
                  giftCodeSKU: t,
                  giftCode: i,
                  transitionTo: o,
                  location: a,
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
                f
                  .k({ withAnalyticsToken: !0 })
                  .then((e) =>
                    this.setState({ currentUser: e, fetchingUser: !1 }),
                  )
                  .catch(() => this.setState({ fetchingUser: !1 }));
            }),
            L(this, "handleLogout", () => {
              let e = this.props.match.params.giftCode;
              u.Z.logout(j.Z5c.GIFT_CODE_LOGIN(e));
            }),
            L(this, "handleResendVerification", () => {
              u.Z.verifyResend(), this.setState({ sentVerification: !0 });
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
      t.Z = c.ZP.connectStores([I.Z, N.Z, _.default, v.Z, E.Z, p.Z], (e) => {
        let t = e.match.params.giftCode,
          n = I.Z.get(t),
          i = null != n ? v.Z.get(n.skuId) : null;
        return {
          giftCode: n,
          sku: i,
          libraryApplication:
            null != i && (null == n ? void 0 : n.entitlementBranches) != null
              ? C.z2(n.entitlementBranches, i, N.Z)
              : null,
          authenticated: _.default.isAuthenticated(),
          defaultRoute: E.Z.defaultRoute,
          isResolved: I.Z.getIsResolved(t),
          isAccepting: I.Z.getIsAccepting(t),
          libraryApplicationsFetched: N.Z.fetched,
          nativeAppState: p.Z.getState(t),
        };
      })(O);
    },
    481153: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        l = n.n(s),
        o = n(442837),
        a = n(481060),
        c = n(812206),
        d = n(388905),
        u = n(925329),
        h = n(479446),
        g = n(981632),
        f = n(594174),
        m = n(509545),
        p = n(55563),
        x = n(296848),
        _ = n(981631),
        E = n(474936),
        I = n(388032),
        N = n(93008),
        v = n(652849),
        C = n(232186);
      t.Z = o.ZP.connectStores([p.Z, c.Z, m.Z, f.default], (e) => {
        let { giftCode: t } = e,
          n = p.Z.get(t.skuId),
          { subscriptionPlanId: i } = t;
        return {
          sku: n,
          subscriptionPlan: null != i ? (0, x.oE)(i) : null,
          application: c.Z.getApplication(n.applicationId),
          gifter: f.default.getUser(t.userId),
        };
      })((e) => {
        let {
            error: t,
            giftCode: n,
            gifter: s,
            sku: o,
            application: c,
            subscriptionPlan: f,
          } = e,
          m =
            null == s
              ? I.intl.string(I.t.lTGZAg)
              : I.intl.formatToPlainString(I.t.TjWdPT, {
                  username: s.username,
                }),
          p = o.name;
        return (
          null != f &&
            (p = I.intl.formatToPlainString(
              f.interval === E.rV.MONTH ? I.t.CTpcCQ : I.t.rgPWGx,
              { skuName: o.name, intervalCount: f.intervalCount },
            )),
          (0, i.jsxs)(r.Fragment, {
            children: [
              null != n.giftStyle
                ? (0, i.jsx)(g.Z, {
                    defaultAnimationState: h.SR.LOOP,
                    giftStyle: n.giftStyle,
                    className: N.seasonalIcon,
                  })
                : (0, i.jsx)(d.qE, {
                    src: null != s ? s.getAvatarURL(void 0, 100) : null,
                    size: a.AvatarSizes.DEPRECATED_SIZE_100,
                    className: C.marginBottom20,
                  }),
              null != t
                ? (0, i.jsxs)(r.Fragment, {
                    children: [
                      (0, i.jsx)(d.DK, { children: I.intl.string(I.t.mDFGFh) }),
                      (0, i.jsx)(d.Dx, { children: t }),
                    ],
                  })
                : (0, i.jsxs)(r.Fragment, {
                    children: [
                      (0, i.jsx)(d.DK, { children: m }),
                      (0, i.jsxs)(d.Dx, {
                        className: l()(C.marginTop8, v.flexCenter),
                        children: [
                          o.productLine !== _.POd.COLLECTIBLES &&
                            (0, i.jsx)(u.Z, {
                              size: u.Z.Sizes.MEDIUM,
                              className: N.applicationIcon,
                              game: c,
                              skuId: o.id,
                            }),
                          p,
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
        l = n.n(s),
        o = n(512722),
        a = n.n(o),
        c = n(442837),
        d = n(388905),
        u = n(362762),
        h = n(409059),
        g = n(659900),
        f = n(962220),
        m = n(473855),
        p = n(306453),
        x = n(929809),
        _ = n(108427),
        E = n(390885),
        I = n(314897),
        N = n(896797),
        v = n(954824),
        C = n(781428),
        b = n(163671),
        T = n(423527),
        Z = n(981631),
        A = n(58346),
        S = n(701476),
        j = n(630724),
        R = n(436620),
        P = n(388032),
        L = n(640936),
        O = n(232186);
      c.ZP.initialize();
      class y extends r.PureComponent {
        componentDidMount() {
          (0, _.e)("guildTemplate"),
            !R.KO &&
              v.Z.launch(
                "discord://" + Z.Z5c.GUILD_TEMPLATE(this.props.code),
                () => void 0,
              );
        }
        componentDidUpdate(e) {
          this.props.code !== e.code &&
            f.Z.resolveGuildTemplate(this.props.code);
        }
        renderButton(e, t) {
          return R.KO
            ? (0, i.jsx)(d.zx, {
                className: O.marginTop40,
                onClick: t,
                children: e,
              })
            : (0, i.jsx)(d.v6, { className: O.marginTop40 });
        }
        renderSpinner(e) {
          return (0, i.jsxs)(d.ZP, {
            children: [(0, i.jsx)(d.Dx, { children: e }), (0, i.jsx)(d.Hh, {})],
          });
        }
        renderInvalidGuildTemplate() {
          return (0, i.jsxs)(d.ZP, {
            children: [
              (0, i.jsx)(d.Ee, { src: n(167969), className: O.marginBottom8 }),
              (0, i.jsx)(d.Dx, {
                className: l()(O.marginTop8, O.marginBottom8),
                children: P.intl.string(P.t.C7ZRNz),
              }),
              (0, i.jsx)(d.DK, { children: P.intl.string(P.t.A6MwXF) }),
              this.renderButton(P.intl.string(P.t.fIv16O), this.handleContinue),
            ],
          });
        }
        renderAppOpened() {
          return (0, i.jsxs)(d.ZP, {
            children: [
              (0, i.jsx)(d.Dx, {
                className: O.marginBottom8,
                children: P.intl.string(P.t.csrAMD),
              }),
              (0, i.jsx)(d.DK, { children: P.intl.string(P.t["m1+IBg"]) }),
              this.renderButton(P.intl.string(P.t.fIv16O), this.handleContinue),
            ],
          });
        }
        renderAuthenticatedOrDownload() {
          let { guildTemplate: e } = this.props;
          return (a()(null != e, "guild template must not be null"),
          e.state === A.Rj.RESOLVING)
            ? (0, i.jsx)(d.ZP, {
                className: L.authBox,
                children: (0, i.jsx)(p.Z, { guildTemplate: e }),
              })
            : (0, i.jsx)(k, { guildTemplate: e });
        }
        renderContinue() {
          return (0, i.jsxs)(d.ZP, {
            children: [
              (0, i.jsx)(d.Dx, { children: P.intl.string(P.t.fOc4go) }),
              this.renderButton(P.intl.string(P.t.fIv16O), this.handleContinue),
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
          if (null == e) return this.renderSpinner(P.intl.string(P.t.ZTNur6));
          if (t === Z.kEZ.OPEN) return this.renderAppOpened();
          if (t === Z.kEZ.OPENING)
            return this.renderSpinner(P.intl.string(P.t["Z+hCVV"]));
          switch (e.state) {
            case A.Rj.RESOLVING:
              return this.renderSpinner(P.intl.string(P.t["Z+hCVV"]));
            case A.Rj.RESOLVED:
              if (n || !R.KO) return this.renderAuthenticatedOrDownload();
              if (this.props.login)
                return (0, i.jsx)(C.Z, {
                  guildTemplate: e,
                  transitionTo: r,
                  location: s,
                });
              else
                return (0, i.jsx)(T.Z, {
                  guildTemplate: e,
                  transitionTo: r,
                  location: s,
                  onRegister: () => {
                    (0, x.c)(S.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE),
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
          nativeAppState: (0, c.e7)([u.Z], () => u.Z.getState(e.code)),
          authenticated: (0, c.e7)([I.default], () =>
            I.default.isAuthenticated(),
          ),
          defaultRoute: (0, c.e7)([N.Z], () => N.Z.defaultRoute),
        };
        return (0, i.jsx)(y, { ...e, ...t });
      }
      function k(e) {
        let { guildTemplate: t } = e,
          { form: n, handleSubmit: r } = (0, g.Z)(t, !1);
        E.Z.flowStep(j.MK.ORGANIC_GUILD_TEMPLATES, j.X2.GUILD_CREATE);
        let s = (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.Dx, {
              className: L.header,
              children: P.intl.string(P.t.UNFvtL),
            }),
            n,
            (0, i.jsx)(d.zx, {
              className: L.createButton,
              onClick: r,
              children: P.intl.string(P.t.xr59t7),
            }),
          ],
        });
        return (0, i.jsx)(b.Z, {
          className: L.authBox,
          children: () => [
            (0, i.jsx)(m.Z, { guildTemplate: t }, "template"),
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
          return I;
        },
      });
      var i = n(200651),
        r = n(192379),
        s = n(442837),
        l = n(481060),
        o = n(388905),
        a = n(409059),
        c = n(962220),
        d = n(306453),
        u = n(108427),
        h = n(314897),
        g = n(626135),
        f = n(587444),
        m = n(981631),
        p = n(58346),
        x = n(388032),
        _ = n(232186);
      function E(e, t, n) {
        e.preventDefault(),
          g.default.track(m.rMx.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
          });
        let i = h.default.getFingerprint(),
          r = null != i ? i : h.default.getId();
        c.Z.openMobileApp(n.state === p.Rj.RESOLVED ? t : void 0, r);
      }
      function I(e) {
        let { code: t } = e,
          n = (0, s.e7)([a.Z], () => a.Z.getGuildTemplate(t));
        return (r.useEffect(() => {
          (0, u.e)("guild_template_mobile");
        }, []),
        null == n || n.state === p.Rj.RESOLVING)
          ? (0, i.jsx)(o.ZP, { children: (0, i.jsx)(l.Spinner, {}) })
          : n.state === p.Rj.RESOLVED
            ? (0, i.jsxs)(o.ZP, {
                children: [
                  (0, i.jsx)(d.Z, { guildTemplate: n, tall: !0 }),
                  (0, i.jsx)(o.zx, {
                    onClick: (e) => E(e, t, n),
                    className: _.marginTop20,
                    children: x.intl.string(x.t["a3Gl+f"]),
                  }),
                ],
              })
            : (0, i.jsx)(f.Z, {
                text: x.intl.string(x.t["e/rZ2t"]),
                buttonCta: x.intl.string(x.t.HAvYn5),
                onClick: (e) => E(e, t, n),
              });
      }
      s.ZP.initialize();
    },
    587444: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
        u: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        l = n(692547),
        o = n(481060),
        a = n(388905),
        c = n(600164),
        d = n(981631),
        u = n(388032),
        h = n(897927),
        g = n(652849),
        f = n(232186);
      function m(e) {
        let { text: t, buttonCta: r, onClick: d } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.Ee, { src: n(689411) }),
            (0, i.jsx)(a.Dx, {
              className: s()(f.marginTop20, f.marginBottom8, g.flexCenter),
              children: u.intl.string(u.t.eL5z0t),
            }),
            (0, i.jsx)(a.DK, {
              className: f.marginBottom40,
              children: u.intl.string(u.t["poAv6+"]),
            }),
            (0, i.jsxs)(o.Card, {
              className: h.card,
              type: o.Card.Types.CUSTOM,
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
                    (0, i.jsx)(o.Text, {
                      tag: "strong",
                      className: h.buttonTitle,
                      variant: "text-md/normal",
                      style: { color: l.Z.unsafe_rawColors.PRIMARY_300.css },
                      children: t,
                    }),
                    (0, i.jsx)(a.zx, {
                      className: h.button,
                      onClick: d,
                      children: r,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function p(e) {
        let { text: t, buttonCta: n, theme: r = d.BRd.DARK, onClick: s } = e;
        return (0, i.jsx)(a.ZP, {
          theme: r,
          children: (0, i.jsx)(m, { text: t, buttonCta: n, onClick: s }),
        });
      }
    },
    344295: function (e, t, n) {
      n(789020), n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        l = n.n(s),
        o = n(533800),
        a = n(756647),
        c = n(442837),
        d = n(298444),
        u = n(447543),
        h = n(881052),
        g = n(899370),
        f = n(267394),
        m = n(388905),
        p = n(639946),
        x = n(792766),
        _ = n(362762),
        E = n(978684),
        I = n(264229),
        N = n(929809),
        v = n(703656),
        C = n(108427),
        b = n(314897),
        T = n(896797),
        Z = n(701190),
        A = n(626135),
        S = n(630388),
        j = n(63063),
        R = n(782605),
        P = n(954824),
        L = n(588705),
        O = n(781428),
        y = n(423527),
        D = n(981631),
        k = n(188785),
        w = n(701476),
        B = n(436620),
        M = n(388032),
        G = n(232186);
      function F(e, t, n) {
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
      let U = "Accept Invite Page",
        z = { REGISTER: "register", LOGIN: "login" };
      async function V(e) {
        let { invite: t } = await u.Z.resolveInvite(e, U);
        if (null != t) (0, f.A)(t);
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
            (0, C.e)("invite"),
            !B.KO)
          ) {
            let e = this.getInviteKey();
            P.Z.launch("discord://" + D.Z5c.INVITE(e), () => void 0);
          }
          if (!t && e) {
            let e = this.getInviteKey(),
              { baseCode: t } = (0, I.fU)(e);
            (0, v.dL)(D.Z5c.INVITE_LOGIN(t));
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
            let e = b.default.getFingerprint();
            if (null != e) {
              let t = (0, a.s)(e);
              this.track(D.rMx.INVITE_LOGIN_SUCCESSFUL, !0, {
                prev_user_id: t,
              });
            }
            u.Z.acceptInvite({
              inviteKey: s,
              context: this.getAcceptInviteContext(U),
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
              ((0, N.c)(w.M5.INVITE_UNCLAIMED),
              null != t.guild
                ? r(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                : u.Z.transitionToInvite(t, r));
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
            s = (0, I.jX)(r),
            l = t
              ? {
                  guild_id: null != i.guild ? i.guild.id : null,
                  channel_id: null != i.channel ? i.channel.id : null,
                  inviter_id: null != i.inviter ? i.inviter.id : null,
                  invite_code: s,
                }
              : { invite_code: s };
          A.default.track(e, { ...l, ...n });
        }
        renderSpinner(e) {
          return (0, i.jsxs)(m.ZP, {
            children: [(0, i.jsx)(m.Dx, { children: e }), (0, i.jsx)(m.Hh, {})],
          });
        }
        renderInvalidInvite() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (0, i.jsxs)(m.ZP, {
            children: [
              (0, i.jsx)(m.Ee, { src: n(167969), className: G.marginBottom8 }),
              (0, i.jsx)(m.Dx, {
                className: l()(G.marginTop8, G.marginBottom8),
                children: M.intl.string(M.t.kux01N),
              }),
              (0, i.jsx)(m.DK, {
                children: e
                  ? M.intl.string(M.t["5AkWAQ"])
                  : M.intl.string(M.t["+qUJAg"]),
              }),
              this.renderButton(M.intl.string(M.t.fIv16O)),
              (0, i.jsx)(m.zx, {
                onClick: () =>
                  window.open(
                    j.Z.getArticleURL(D.BhN.INVALID_INVITES),
                    "_blank",
                  ),
                look: m.zx.Looks.LINK,
                color: m.zx.Colors.LINK,
                className: G.marginTop8,
                children: M.intl.string(M.t.urIwn5),
              }),
            ],
          });
        }
        renderErrorInvite() {
          var e, t;
          return (0, i.jsxs)(m.ZP, {
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
                ? this.renderButton(M.intl.string(M.t.fIv16O))
                : this.renderButton(
                    M.intl.string(M.t.ohMvm5),
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
          return (0, i.jsxs)(m.ZP, {
            children: [
              (0, i.jsx)(m.Dx, {
                className: G.marginBottom8,
                children: M.intl.string(M.t.csrAMD),
              }),
              (0, i.jsx)(m.DK, { children: M.intl.string(M.t["m1+IBg"]) }),
              this.renderButton(M.intl.string(M.t.fIv16O), () => t()),
            ],
          });
        }
        renderAuthenticatedHeader() {
          let { invite: e } = this.props;
          return null != e.stage_instance && null != e.guild
            ? (0, i.jsx)(x.Z, {
                stageInstance: e.stage_instance,
                guild: e.guild,
              })
            : null != e.guild_scheduled_event
              ? (0, i.jsx)(p.r, {
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
            ? (0, i.jsx)(m.ZP, {
                className: G.marginTop20,
                children: (0, i.jsx)(x.y, {
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
                ? M.intl.string(M.t["5UKyUl"])
                : M.intl.string(M.t.ohMvm5);
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsxs)(m.ZP, {
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
          return (0, i.jsxs)(m.ZP, {
            children: [
              (0, i.jsx)(m.Dx, { children: M.intl.string(M.t.fOc4go) }),
              this.renderButton(M.intl.string(M.t.fIv16O)),
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
                ? this.renderSpinner(M.intl.string(M.t.MKDeyM))
                : this.renderSpinner(M.intl.string(M.t["Z+hCVV"]));
            case D.r2o.APP_OPENING:
              return this.renderSpinner(M.intl.string(M.t["Z+hCVV"]));
            case D.r2o.RESOLVED:
              var l;
              if (
                n &&
                (0, S.yE)(
                  null !== (l = e.flags) && void 0 !== l ? l : 0,
                  o.$.IS_GUEST_INVITE,
                )
              )
                return (
                  u.Z.openApp(e.code),
                  d.x.set(E.J, e.code),
                  this.renderAppOpened(() => r(D.Z5c.APP))
                );
              if (n || !B.KO) return this.renderAuthenticatedOrDownload();
              else if (this.getMode() === z.LOGIN)
                return (0, i.jsx)(O.Z, {
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
              return this.renderSpinner(M.intl.string(M.t["6wsY19"]));
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
            F(this, "state", { error: null }),
            F(this, "getAcceptInviteContext", (e) =>
              u.Z.getInviteContext(e, this.props.invite),
            ),
            F(this, "handleContinue", (e) => {
              let { invite: t, transitionTo: n } = this.props;
              if (
                null != t.channel ||
                (null == e ? void 0 : e.channel) != null
              ) {
                var i;
                (null === (i = t.guild) || void 0 === i ? void 0 : i.id) != null
                  ? n(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                  : u.Z.transitionToInvite(null != e ? e : t, n);
              }
            }),
            F(this, "handleAccept", () => {
              this.setState({ error: null });
              let e = this.getInviteKey();
              u.Z.acceptInvite({
                inviteKey: e,
                context: this.getAcceptInviteContext(U),
                skipOnboarding: !0,
                callback: (t) => {
                  (0, f.A)(t),
                    null != t.channel && u.Z.openApp(e, t.channel.id);
                },
              }).catch((e) => {
                if (e instanceof h.yZ || e instanceof h.Hx) {
                  let t = (0, R.O)(e.code);
                  this.setState({ error: { code: e.code, message: t } });
                } else
                  this.setState({
                    error: { code: e.code, message: M.intl.string(M.t.dDZRd3) },
                  });
              });
            }),
            F(this, "handleDefaultTransition", () => {
              let { defaultRoute: e, transitionTo: t } = this.props;
              t(e);
            }),
            F(this, "renderButton", function (e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t.handleDefaultTransition,
                { invite: r } = t.props,
                s = null != r.stage_instance || null != r.guild_scheduled_event;
              return B.KO
                ? (0, i.jsx)(m.zx, {
                    className: s ? G.marginTop20 : G.marginTop40,
                    onClick: n,
                    color: s ? m.zx.Colors.GREEN : m.zx.Colors.BRAND,
                    children: e,
                  })
                : (0, i.jsx)(m.v6, { className: G.marginTop40 });
            });
        }
      }
      t.Z = c.ZP.connectStores([Z.Z, T.Z, b.default, _.Z, g.Z], (e) => {
        var t;
        let { inviteKey: n } = e;
        return {
          invite: null !== (t = Z.Z.getInvite(n)) && void 0 !== t ? t : {},
          nativeAppState: _.Z.getState(n),
          authenticated: b.default.isAuthenticated(),
          defaultRoute: T.Z.defaultRoute,
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
        l = n(533126),
        o = n(120356),
        a = n.n(o),
        c = n(593473),
        d = n(873546),
        u = n(442837),
        h = n(481060),
        g = n(570140),
        f = n(893776),
        m = n(899742),
        p = n(579806),
        x = n(743142),
        _ = n(388905),
        E = n(379760),
        I = n(600164),
        N = n(100159),
        v = n(473855),
        C = n(124860),
        b = n(86779),
        T = n(726745),
        Z = n(913583),
        A = n(144114),
        S = n(541692),
        j = n(952802),
        R = n(108427),
        P = n(365007),
        L = n(314897),
        O = n(117240),
        y = n(896797),
        D = n(626135),
        k = n(585483),
        w = n(358085),
        B = n(481153),
        M = n(588705),
        G = n(494526),
        F = n(163671),
        U = n(981631),
        z = n(58346),
        V = n(388032),
        K = n(32817),
        H = n(232186);
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
        return (0, r.jsx)(_.ZP, { children: (0, r.jsx)(h.Spinner, {}) });
      }
      class J extends (i = s.PureComponent) {
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
          e && !t ? (0, m.is)() : t && this.loginOrSSO(t, r, !0),
            D.default.track(
              U.rMx.LOGIN_VIEWED,
              {
                location:
                  null != i ? "Invite Login Page" : "Non-Invite Login Page",
                login_source: this.loginSource,
                authenticated: t,
                ...(null != n ? (0, N.Z)(n, !1, !1) : {}),
              },
              { flush: !0 },
            ),
            null == p.Z &&
              null != window.PublicKeyCredential &&
              null != PublicKeyCredential.isConditionalMediationAvailable &&
              PublicKeyCredential.isConditionalMediationAvailable().then(
                (e) => {
                  e &&
                    (0, P.us)()
                      .then((e) => {
                        let { challenge: t, ticket: n } = e,
                          i = (0, l.wz)(JSON.parse(t));
                        return (
                          (i.signal =
                            this.state.conditionalMediationAbortController.signal),
                          (0, l.U2)(i)
                            .then(
                              (e) => (
                                g.Z.dispatch({ type: "PASSWORDLESS_START" }),
                                f.Z.loginWebAuthn({
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
            f.Z.getLocationMetadata(),
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
            var r, s, l;
            this.hasError("password")
              ? null === (r = this.passwordRef) || void 0 === r || r.focus()
              : this.hasError("email") || this.hasError("login")
                ? null === (s = this.loginRef) || void 0 === s || s.focus()
                : this.hasError("code") &&
                  (null === (l = this.codeRef) || void 0 === l || l.focus());
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
          return null != r ? (0, x.L)(r) : null;
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
                ? f.Z.verifySSOToken().then(() => this.transitionSSO(t))
                : this.transitionSSO(t);
        }
        transitionSSO(e) {
          let { transitionTo: t, redirectTo: n, replaceWith: i } = this.props,
            r = null != e ? (0, c.parse)(e.search) : {};
          if ((delete r.redirect_to, null != n)) null != i ? i(n) : t(n);
          else if (null == r.service) t(U.Z5c.APP);
          else {
            let e =
                window.location.protocol +
                window.GLOBAL_ENV.API_ENDPOINT +
                U.ANM.SSO,
              t = { ...r, token: L.default.getToken() };
            window.location = "".concat(e, "?").concat((0, c.stringify)(t));
          }
        }
        hasError(e) {
          return null != this.props.errors[e];
        }
        renderHandOffAvailable() {
          let { authBoxClassName: e } = this.props;
          return (0, r.jsxs)(_.ZP, {
            className: e,
            children: [
              (0, r.jsx)(_.Hh, {}),
              (0, r.jsx)(_.Dx, {
                className: H.marginBottom8,
                children: V.intl.string(V.t.S6RMND),
              }),
              (0, r.jsx)(_.DK, { children: V.intl.string(V.t.YZiJbm) }),
            ],
          });
        }
        renderHandOffContinue() {
          let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
          return null == e
            ? null
            : (0, r.jsxs)(_.ZP, {
                className: n,
                children: [
                  (0, r.jsx)(_.qE, {
                    src: e.getAvatarURL(void 0, 100),
                    size: h.AvatarSizes.DEPRECATED_SIZE_100,
                    className: H.marginBottom20,
                  }),
                  (0, r.jsx)(_.Dx, {
                    className: H.marginBottom8,
                    children: V.intl.format(V.t.ot19ho, { name: e.toString() }),
                  }),
                  (0, r.jsx)(_.DK, {
                    className: H.marginBottom40,
                    children: V.intl.string(V.t["2xkqzc"]),
                  }),
                  (0, r.jsxs)(_.gO, {
                    children: [
                      (0, r.jsx)(_.zx, {
                        onClick: () => t(U.Z5c.APP),
                        className: H.marginBottom8,
                        children: V.intl.format(V.t.fohtv7, {
                          name: e.toString(),
                        }),
                      }),
                      (0, r.jsx)(_.zx, {
                        look: _.zx.Looks.LINK,
                        color: _.zx.Colors.LINK,
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
            t = this.props.loginStatus === U.u34.ACCOUNT_DISABLED,
            n = t ? V.intl.string(V.t["j3rC+f"]) : V.intl.string(V.t.ZFWofn),
            i = t ? V.intl.string(V.t["6eNTWV"]) : V.intl.string(V.t.pCBti4);
          return (0, r.jsx)(_.ZP, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, r.jsxs)(h.HeadingLevel, {
              component: (0, r.jsx)(_.Dx, {
                className: H.marginBottom8,
                children: n,
              }),
              children: [
                (0, r.jsx)(_.DK, { className: H.marginBottom20, children: i }),
                (0, r.jsxs)(_.gO, {
                  children: [
                    (0, r.jsx)(_.zx, {
                      color: _.zx.Colors.BRAND,
                      type: "submit",
                      children: V.intl.string(V.t.JhDw5u),
                    }),
                    (0, r.jsx)("div", {
                      className: a()(H.marginTop8, K.needAccount),
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
          return (0, r.jsxs)(_.ZP, {
            className: e,
            children: [
              (0, r.jsx)(M.R, {}),
              (0, r.jsxs)(_.gO, {
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
                  (0, r.jsx)(_.II, {
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
                  (0, r.jsx)(_.zx, {
                    className: H.marginBottom8,
                    type: "submit",
                    disabled: !0,
                    children: V.intl.string(V.t.dKhVQE),
                  }),
                  (0, r.jsx)(_.zx, {
                    disabled: !0,
                    look: _.zx.Looks.LINK,
                    color: _.zx.Colors.LINK,
                    children: V.intl.string(V.t.wWIufn),
                  }),
                  (0, r.jsx)(_.zx, {
                    disabled: !0,
                    className: H.marginTop4,
                    look: _.zx.Looks.LINK,
                    color: _.zx.Colors.LINK,
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
              loginStatus: l,
              country: o,
              showMobileWebHandoff: c,
              disableAutofocusOnDefaultForm: d,
            } = this.props,
            u = !this.hasError("email") && this.hasError("password"),
            g = (null == i ? void 0 : i.stage_instance) != null;
          return (
            (n =
              null == i || g
                ? null != s
                  ? (0, r.jsx)(B.Z, { giftCode: s })
                  : (0, r.jsxs)("div", {
                      className: K.header,
                      children: [
                        (0, r.jsx)(
                          _.Dx,
                          {
                            className: H.marginBottom8,
                            children: V.intl.string(V.t["7fNJgI"]),
                          },
                          "title",
                        ),
                        !1 === (0, w.isAndroidWeb)()
                          ? (0, r.jsx)(
                              _.DK,
                              { children: V.intl.string(V.t.euS7r6) },
                              "subtitle",
                            )
                          : null,
                      ],
                    })
                : (0, r.jsx)(M.Z, { invite: i })),
            (0, r.jsxs)(
              I.Z,
              {
                direction: I.Z.Direction.HORIZONTAL,
                align: I.Z.Align.CENTER,
                children: [
                  (0, r.jsxs)("div", {
                    className: K.mainLoginContainer,
                    children: [
                      this.canShowChooseAccount &&
                        this.state.dismissedChooseAccount &&
                        (0, r.jsx)(_.zx, {
                          onClick: () => {
                            this.setState((e) => ({
                              ...e,
                              dismissedChooseAccount: !1,
                            }));
                          },
                          look: _.zx.Looks.LINK,
                          color: _.zx.Colors.PRIMARY,
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
                        children: (0, r.jsxs)(_.gO, {
                          className: H.marginTop20,
                          children: [
                            (0, r.jsx)(j.Z, {
                              alpha2: o.alpha2,
                              countryCode: o.code.split(" ")[0],
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
                              autoFocus: !u && !c && !d,
                              required: !0,
                            }),
                            (0, r.jsx)(_.II, {
                              label: V.intl.string(V.t["CIGa+/"]),
                              error: this.renderError("password"),
                              onChange: (e) => this.setState({ password: e }),
                              name: "password",
                              type: "password",
                              setRef: this.setPasswordRef,
                              autoComplete: "off",
                              spellCheck: "false",
                              autoFocus: u && !c && !d,
                              value: this.state.password,
                              required: !0,
                            }),
                            (0, r.jsx)(_.zx, {
                              onClick: this.handleForgotPassword,
                              look: _.zx.Looks.LINK,
                              color: _.zx.Colors.LINK,
                              className: a()(H.marginBottom20, H.marginTop4),
                              children: V.intl.string(V.t.wWIufn),
                            }),
                            (0, r.jsx)(_.zx, {
                              type: "submit",
                              submitting: l === U.u34.LOGGING_IN,
                              color: g ? _.zx.Colors.GREEN : _.zx.Colors.BRAND,
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
                                (0, r.jsx)(_.zx, {
                                  onClick: this.handleGotoRegister,
                                  look: _.zx.Looks.LINK,
                                  color: _.zx.Colors.LINK,
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
              (0, r.jsx)(_.ZP, {
                onSubmit: this.handleLogin,
                tag: "form",
                className: e,
                expanded: !0,
                children: this.renderDefaultForm(!0),
              }),
              t && (0, r.jsx)(b.Z, {}),
            ],
          });
        }
        renderGuildTemplate(e) {
          return (0, r.jsx)(F.Z, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: a()(this.props.authBoxClassName, K.horizontalAuthBox),
            children: () => [
              (0, r.jsx)(v.Z, { guildTemplate: e }, "template"),
              this.renderDefaultForm(!1),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, r.jsx)(_.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(C.Cd, {
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
          return (0, r.jsx)(_.ZP, {
            tag: "form",
            className: e,
            children: (0, r.jsx)(E.Z, {
              title: V.intl.string(V.t.w55Ocn),
              subtitle: V.intl.format(V.t.CfRZBg, {
                onResendClick: this.handleResendCode,
              }),
              error: t,
              onSubmit: this.handleIPAuthorize,
              onCancel: f.Z.loginReset,
            }),
          });
        }
        renderPasswordRecovery() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, r.jsx)(_.ZP, {
            tag: "form",
            className: e,
            children: (0, r.jsx)(E.Z, {
              title: V.intl.string(V.t["+xqy3d"]),
              subtitle: V.intl.format(V.t.ef4uZ2, {
                onResendClick: this.handleResendCode,
              }),
              error: t,
              onSubmit: this.handlePasswordReset,
              onCancel: f.Z.loginReset,
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
              loginStatus: i,
              handoffAvailable: s,
            } = this.props,
            { checkingHandoff: l, redirecting: o } = this.state;
          if (o || l) return (0, r.jsx)(q, {});
          if (s) return this.renderHandOffAvailable();
          if (e && l) return this.renderHandOffContinue();
          switch (i) {
            case U.u34.LOGGING_IN_MFA_SMS:
            case U.u34.MFA_SMS_STEP:
            case U.u34.LOGGING_IN_MFA:
            case U.u34.MFA_STEP:
              return this.renderMFA();
            case U.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case U.u34.ACCOUNT_DISABLED:
              return this.renderDisabledAccount();
            case U.u34.PHONE_IP_AUTHORIZATION:
              return this.renderIPAuthorization();
            case U.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
              return this.renderPasswordRecovery();
            case U.u34.LOGGING_IN:
            case U.u34.NONE:
            default:
              if (null != t && t.state === U.r2o.RESOLVING)
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
              await f.Z.loginToken(e, !1),
                D.default.track(U.rMx.LOGIN_SUCCESSFUL, {
                  source: U.uRl.QR_CODE,
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
                f.Z.login({
                  login: this.getFullLogin(),
                  password: t,
                  undelete: n,
                  source: this.loginSource,
                  giftCodeSKUId: this.giftCodeSKUId,
                  invite: this.props.invite,
                }),
                k.S.dispatch(U.CkL.WAVE_EMPHASIZE);
            }),
            W(this, "handleIPAuthorize", async (e) => {
              let { password: t, undelete: n } = this.state,
                i = this.getFullLogin();
              try {
                let { token: r } = await A.Z.verifyPhone(i, e, !1);
                await f.Z.authorizeIPAddress(r),
                  f.Z.login({
                    login: i,
                    password: t,
                    undelete: n,
                    source: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                  }),
                  k.S.dispatch(U.CkL.WAVE_EMPHASIZE);
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
                t(U.Z5c.RESET, {
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
                k.S.dispatch(U.CkL.WAVE_EMPHASIZE),
                f.Z.loginMFAv2({
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
                k.S.dispatch(U.CkL.WAVE_EMPHASIZE),
                  await f.Z.forgotPassword(t),
                  (0, h.openModal)((e) =>
                    (0, r.jsx)(h.ConfirmModal, {
                      header: V.intl.string(V.t.f5Pi7O),
                      confirmText: V.intl.string(V.t.BddRzc),
                      confirmButtonColor: _.zx.Colors.BRAND,
                      className: d.tq ? K.mobile : "",
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
                f.Z.loginReset(),
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
                  transitionTo: l,
                  redirectTo: o,
                } = this.props,
                a = null != s ? (0, c.parse)(s.search) : {};
              "" !== t && (a.email = t),
                null != n
                  ? ((a.mode = "register"), (e = U.Z5c.INVITE(n.code)))
                  : null != i
                    ? ((a.mode = "register"), (e = U.Z5c.GIFT_CODE(i.code)))
                    : null != r
                      ? (e = U.Z5c.GUILD_TEMPLATE(r.code))
                      : null != o
                        ? ((e = U.Z5c.REGISTER), (a.redirect_to = o))
                        : (e = U.Z5c.REGISTER),
                f.Z.loginReset(),
                l(e, { search: (0, c.stringify)(a) }),
                k.S.dispatch(U.CkL.WAVE_EMPHASIZE);
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
      W(J, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
      t.Z = function (e) {
        let t = (0, u.cj)([O.Z, y.Z, L.default, T.Z, S.Z], () => ({
          authenticated: L.default.isAuthenticated(),
          handoffAvailable: O.Z.isHandoffAvailable(),
          user: O.Z.user,
          loginStatus: L.default.getLoginStatus(),
          mfaTicket: L.default.getMFATicket(),
          mfaMethods: L.default.getMFAMethods(),
          maskedPhone: L.default.getMaskedPhone(),
          errors: L.default.getErrors(),
          defaultRoute: y.Z.defaultRoute,
          country: S.Z.getCountryCode(),
          hasLoggedInAccounts: T.Z.getHasLoggedInAccounts(),
        }));
        return (0, r.jsx)(J, { ...e, ...t });
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
        l = n(512969),
        o = n(442837),
        a = n(893776),
        c = n(899742),
        d = n(493773),
        u = n(743142),
        h = n(893607),
        g = n(703656),
        f = n(314897),
        m = n(781428),
        p = n(981631),
        x = n(176505);
      function _(e) {
        let t = r.useCallback(
            (t) => {
              if (
                (function (e) {
                  var t;
                  let n = (0, l.LX)(e, {
                    path: p.Z5c.CHANNEL(h.Hw.guildId(), h.Hw.channelId()),
                  });
                  return (
                    (null == n
                      ? void 0
                      : null === (t = n.params) || void 0 === t
                        ? void 0
                        : t.channelId) === x.oC.ROLE_SUBSCRIPTIONS || !1
                  );
                })(t)
              )
                g.dL(t);
              else {
                var n;
                (null !== (n = e.transitionTo) && void 0 !== n ? n : g.uL)(t);
              }
            },
            [e.transitionTo],
          ),
          { isAuthenticated: n, loginStatus: _ } = (0, o.cj)(
            [f.default],
            () => ({
              isAuthenticated: f.default.isAuthenticated(),
              loginStatus: f.default.getLoginStatus(),
            }),
          ),
          { location: E, redirectTo: I } = e,
          [N, v] = r.useState(n);
        function C(e) {
          let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
          (0, c.Yz)({ handoffKey: t, handoffToken: n, handoffSource: i }),
            v(!1);
        }
        return ((0, d.Z)(() => {
          if (null != E) {
            let { handoff_key: e, handoff_token: t } = (0, s.parse)(E.search);
            if (null != e && null != t) {
              let n = null != I ? (0, u.L)(I) : void 0;
              N
                ? a.Z.logout(null).finally(() => {
                    C({ handoffKey: e, handoffToken: t, handoffSource: n });
                  })
                : C({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
          }
        }),
        N || _ === p.u34.LOGGING_IN)
          ? (0, i.jsx)(m.q, {})
          : (0, i.jsx)(m.Z, { ...e, transitionTo: t });
      }
    },
    494526: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(47120),
        n(411104);
      var i,
        r,
        s,
        l,
        o = n(200651),
        a = n(192379),
        c = n(533126),
        d = n(261470),
        u = n(399606),
        h = n(544891),
        g = n(481060),
        f = n(893776),
        m = n(99690),
        p = n(937154),
        x = n(448986),
        _ = n(388905),
        E = n(198993),
        I = n(710845),
        N = n(314897),
        v = n(585483),
        C = n(358085),
        b = n(172517),
        T = n(51144),
        Z = n(998502),
        A = n(981631),
        S = n(231338),
        j = n(388032),
        R = n(360860),
        P = n(232186);
      ((s = i || (i = {}))[(s.INITIALIZING = 0)] = "INITIALIZING"),
        (s[(s.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (s[(s.PENDING_FINISH = 2)] = "PENDING_FINISH"),
        (s[(s.PENDING_TICKET = 3)] = "PENDING_TICKET"),
        (s[(s.PENDING_LOGIN = 4)] = "PENDING_LOGIN"),
        (s[(s.FINISH = 5)] = "FINISH"),
        ((l = r || (r = {}))[(l.QR_CODE = 0)] = "QR_CODE"),
        (l[(l.CONFIRM = 1)] = "CONFIRM");
      let L = n(515695),
        O = new I.Z("LoginQRSocket");
      function y(e) {
        let { text: t = "" } = e,
          [n, i] = a.useState(!1);
        return (
          a.useEffect(() => {
            let e = new Image();
            (e.src = L), (e.onload = () => i(!0)), (e.onerror = () => i(!0));
          }, [L]),
          a.useEffect(() => {
            n && g.AccessibilityAnnouncer.announce(j.intl.string(j.t.j2p129));
          }, [n]),
          (0, o.jsx)("div", {
            className: R.qrCodeContainer,
            children:
              "" !== t && n
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(E.ZP, {
                        className: R.qrCode,
                        size: 160,
                        text: t,
                      }),
                      (0, o.jsx)("div", {
                        className: R.qrCodeOverlay,
                        children: (0, o.jsx)("img", { src: L, alt: "" }),
                      }),
                    ],
                  })
                : (0, o.jsx)("div", {
                    className: R.qrCodeOverlay,
                    "aria-label": j.intl.string(j.t.BUGkVF),
                    "aria-busy": !0,
                    children: (0, o.jsx)(g.Spinner, {
                      className: R.qrCode,
                      type: g.Spinner.Type.WANDERING_CUBES,
                      "aria-hidden": !0,
                    }),
                  }),
          })
        );
      }
      let D = (e) => {
        let { className: t, children: n } = e;
        return (0, o.jsx)(g.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          className: t,
          children: n,
        });
      };
      function k(e) {
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
            return (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(y, {
                  text:
                    1 === t.step
                      ? "https://discord.com/ra/".concat(t.fingerprint)
                      : "",
                }),
                (0, o.jsx)(_.Dx, {
                  className: P.marginBottom8,
                  children: j.intl.string(j.t.UPiHaG),
                }),
                null != i
                  ? (0, o.jsx)(D, { children: i })
                  : (0, o.jsx)(_.DK, {
                      children: j.intl.format(j.t["Qq+A6u"], {}),
                    }),
                (0, o.jsx)(g.Button, {
                  size: g.ButtonSizes.LARGE,
                  look: g.ButtonLooks.LINK,
                  color: g.ButtonColors.LINK,
                  disabled: s,
                  onClick: () =>
                    (function (e) {
                      let t =
                        C.isPlatformEmbedded &&
                        Z.ZP.supportsFeature(A.eRX.WEBAUTHN)
                          ? Z.ZP.webAuthnAuthenticate
                          : (e) => {
                              let t = (0, c.wz)(JSON.parse(e));
                              return (0, c.U2)(t).then((e) =>
                                JSON.stringify(e),
                              );
                            };
                      f.Z.authenticatePasswordless({
                        authenticateFunc: t,
                        conditionalMediationAbortController: e,
                      }).catch(() => {});
                    })(r),
                  children: j.intl.string(j.t["/kpMDg"]),
                }),
              ],
            });
          case 3:
          case 2: {
            let { user: e } = t;
            return (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(m.Z, {
                  className: R.qrAvatar,
                  user: e,
                  size: g.AvatarSizes.SIZE_120,
                  isMobile: !0,
                  status: S.Sk.ONLINE,
                }),
                (0, o.jsx)(_.Dx, {
                  className: P.marginBottom8,
                  children: j.intl.string(j.t.apGCUV),
                }),
                (0, o.jsx)(_.DK, {
                  children: j.intl.format(j.t.Cbl5JC, {
                    username: "".concat(T.ZP.getUserTag(e)),
                  }),
                }),
                (0, o.jsx)(g.Button, {
                  look: g.Button.Looks.BLANK,
                  color: g.Button.Colors.LINK,
                  size: g.Button.Sizes.MIN,
                  onClick: n,
                  className: R.startOverButton,
                  children: j.intl.string(j.t.nOOhws),
                }),
              ],
            });
          }
          case 4:
          case 5:
            return (0, o.jsx)(g.Spinner, {
              type: g.Spinner.Type.WANDERING_CUBES,
            });
        }
      }
      function w(e) {
        let { authTokenCallback: t, conditionalMediationAbortController: n } =
            e,
          i = (0, u.e7)([N.default], () => N.default.getIsPasswordlessActive()),
          {
            state: r,
            rsaKeyPair: s,
            cancel: l,
            handleFailure: c,
          } = (function (e) {
            let [t, n] = a.useState(0),
              [i, r] = a.useState(!1),
              [s, l] = a.useState({ step: 0 }),
              [o, c] = a.useState(null),
              u = (0, p.Z)(),
              h = a.useMemo(() => new d.Z(1500, 3e4), []),
              g = (0, x.Z)(() => {
                l({ step: 0 }),
                  u
                    ? n((e) => e + 1)
                    : (O.info(
                        "document is not visible, will defer reconnection when document becomes visible.",
                      ),
                      r(!0));
              }),
              f = a.useCallback(() => {
                O.error(
                  "Could not complete QR code login, trying to restart with a new QR code.",
                ),
                  l({ step: 0 }),
                  !h.pending && h.fail(g);
              }, [g, h]);
            return (
              a.useEffect(() => {
                u &&
                  i &&
                  0 === s.step &&
                  (O.info("reconnecting, now that document is visible"),
                  r(!1),
                  n((e) => e + 1));
              }, [s, u, i, r]),
              a.useEffect(() => {
                let t = Date.now(),
                  n = () => "".concat(Date.now() - t, "ms"),
                  i = "wss:".concat(
                    window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT,
                    "/?v=2",
                  ),
                  r = new WebSocket(i);
                O.info("[0ms] connecting to ".concat(i));
                let s = (e) => O.info("[".concat(n(), "] ").concat(e)),
                  o = null,
                  a = null,
                  d = null,
                  u = null,
                  m = !0;
                function p() {
                  if (null != o) return o;
                  throw Error("No key pair set");
                }
                let x = () => {
                  m
                    ? ((m = !1), r.send(JSON.stringify({ op: "heartbeat" })))
                    : (s("heartbeat timeout, reconnecting."), r.close(), f());
                };
                return (
                  (r.onmessage = async (t) => {
                    let { data: n } = t,
                      i = JSON.parse(n);
                    switch (i.op) {
                      case "nonce_proof": {
                        let e = i.encrypted_nonce,
                          t = await (0, b.qd)(p(), e);
                        s("computed nonce proof"),
                          r.send(
                            JSON.stringify({ op: "nonce_proof", nonce: t }),
                          );
                        return;
                      }
                      case "pending_remote_init": {
                        h.succeed(), v.S.dispatch(A.CkL.WAVE_EMPHASIZE);
                        let e = await (0, b.Pk)(p());
                        if (e !== i.fingerprint)
                          throw Error(
                            "bad fingerprint "
                              .concat(e, " !== ")
                              .concat(i.fingerprint),
                          );
                        s("handshake complete awaiting remote auth."),
                          l({ step: 1, fingerprint: e });
                        return;
                      }
                      case "pending_login": {
                        let e = i.ticket;
                        null == e && f(), l({ step: 4, ticket: e });
                        return;
                      }
                      case "pending_ticket": {
                        v.S.dispatch(A.CkL.WAVE_EMPHASIZE),
                          s(
                            "remote auth handshake started, awaiting ticket/cancel.",
                          );
                        let e = i.encrypted_user_payload;
                        l({ step: 3, user: await (0, b.Rq)(p(), e) });
                        return;
                      }
                      case "pending_finish": {
                        v.S.dispatch(A.CkL.WAVE_EMPHASIZE),
                          s(
                            "remote auth handshake started, awaiting finish/cancel.",
                          );
                        let e = i.encrypted_user_payload;
                        l({ step: 2, user: await (0, b.Rq)(p(), e) });
                        return;
                      }
                      case "finish": {
                        v.S.dispatch(A.CkL.WAVE_EMPHASIZE),
                          s("remote auth handshake finished.");
                        let t = i.encrypted_token;
                        l({ step: 5 }), e(await (0, b.FW)(p(), t));
                        return;
                      }
                      case "cancel":
                        s("remote auth handshake cancelled."), g();
                        return;
                      case "hello": {
                        s(
                          "got hello, auth timeout=".concat(i.timeout_ms, "ms"),
                        );
                        let e = i.heartbeat_interval;
                        u = setTimeout(
                          () => {
                            (u = null), x(), (d = setInterval(x, e));
                          },
                          Math.floor(e * Math.random()),
                        );
                        return;
                      }
                      case "heartbeat_ack":
                        m = !0;
                    }
                  }),
                  (r.onopen = async () => {
                    (o = await (0, b.W_)()), (a = await (0, b.dK)(o));
                    let e = await (0, b.Pk)(o);
                    s("connected, handshaking with fingerprint: ".concat(e)),
                      r.send(
                        JSON.stringify({ op: "init", encoded_public_key: a }),
                      ),
                      c(o);
                  }),
                  (r.onclose = (e) => {
                    s(
                      "disconnected, code: "
                        .concat(e.code, " ")
                        .concat(e.reason),
                    ),
                      f();
                  }),
                  (r.onerror = (e) => {
                    s("disconnected, error: ".concat(JSON.stringify(e))), f();
                  }),
                  () => {
                    s("cleaning up"),
                      (r.onopen = () => null),
                      (r.onmessage = () => null),
                      (r.onclose = () => null),
                      (r.onerror = () => null),
                      r.close(1e3),
                      h.cancel(),
                      null != u && clearTimeout(u),
                      null != d && clearInterval(d);
                  }
                );
              }, [g, e, t, h, f]),
              { state: s, rsaKeyPair: o, cancel: g, handleFailure: f }
            );
          })(t),
          f = (function (e) {
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
          a.useEffect(() => {
            4 === r.step &&
              null != r.ticket &&
              h.tn
                .post({
                  url: A.ANM.REMOTE_AUTH_LOGIN,
                  body: { ticket: r.ticket },
                  oldFormErrors: !0,
                  rejectWithError: !0,
                })
                .then(async (e) => {
                  if (null != s)
                    try {
                      let n = await (0, b.FW)(s, e.body.encrypted_token);
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
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", { className: R.verticalSeparator }),
              (0, o.jsx)(g.Sequencer, {
                fillParent: !0,
                className: R.qrLogin,
                step: f,
                steps: [0, 1],
                children: (0, o.jsx)("div", {
                  className: R.qrLoginInner,
                  children: (0, o.jsx)(k, {
                    state: r,
                    cancel: l,
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
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        l = n(388905),
        o = n(854674);
      function a(e) {
        let { children: t, className: n, ...r } = e,
          a = t();
        return (0, i.jsx)(l.ZP, {
          ...r,
          className: s()(n, o.container),
          contentClassName: o.content,
          children: a.map((e, t) =>
            (0, i.jsx)(
              "div",
              {
                className: o.column,
                style: { flexBasis: "".concat(100 / a.length, "%") },
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
        l = n(186901);
      t.Z = function (e) {
        let { match: t, location: n } = e,
          o = async (e, t) => {
            await (0, r.s)(l.jE.PICK_GUILD_SETTINGS, {
              section: e.params.section,
              subsection: e.params.subsection,
              search: t.search,
            });
          };
        return (0, i.jsx)(s.Z, { match: t, location: n, attemptDeepLink: o });
      };
    },
    423527: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ed;
        },
      }),
        n(757143),
        n(47120),
        n(627341);
      var i,
        r = n(200651),
        s = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(593473),
        c = n(278074),
        d = n(990547),
        u = n(442837),
        h = n(846519),
        g = n(481060),
        f = n(893776),
        m = n(881052),
        p = n(899370),
        x = n(224841),
        _ = n(13430),
        E = n(213609),
        I = n(882037),
        N = n(201207),
        v = n(254942),
        C = n(481230),
        b = n(388905),
        T = n(853268),
        Z = n(639946),
        A = n(616952),
        S = n(792766),
        j = n(692483),
        R = n(100159),
        P = n(473855),
        L = n(726745),
        O = n(929809),
        y = n(541692),
        D = n(986197),
        k = n(135200),
        w = n(219496),
        B = n(794099),
        M = n(807369),
        G = n(180529),
        F = n(108427),
        U = n(314897),
        z = n(480294),
        V = n(896797),
        K = n(626135),
        H = n(585483),
        W = n(70956),
        q = n(624138),
        J = n(481153),
        Y = n(588705),
        X = n(163671),
        Q = n(981631),
        $ = n(355142),
        ee = n(188785),
        et = n(701476),
        en = n(801461),
        ei = n(388032),
        er = n(240854),
        es = n(232186);
      function el(e, t, n) {
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
      let eo = /\.$/,
        ea = (e) =>
          Array.isArray(e)
            ? e
                .map((e) => e.replace(eo, ""))
                .join(". ")
                .trim()
            : e;
      class ec extends (i = s.PureComponent) {
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
          K.default.track(
            Q.rMx.REGISTER_VIEWED,
            {
              location:
                null != t ? "Invite Register Page" : "Non-Invite Register Page",
              registration_source: this.registrationSource,
              ...(null != e ? (0, R.Z)(e, !1, !1) : {}),
            },
            { flush: !0 },
          ),
            null == this.props.consentRequired && f.Z.getLocationMetadata(),
            (0, F.e)("register");
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
              authenticated: n,
              isUnderage: i,
              invite: r,
              onChangeStep: s,
            } = this.props,
            { apiErrors: l, parsedDateOfBirth: o } = this.state;
          (t.apiErrors !== l || t.parsedDateOfBirth !== o) &&
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
                        "number" == typeof l.retry_after &&
                        (this.setState({ isRateLimited: !0 }),
                        this._retryTimer.start(
                          l.retry_after * W.Z.Millis.SECOND,
                          () => {
                            this.setState({ isRateLimited: !1 });
                          },
                        ))),
            n &&
              !e.authenticated &&
              ((0, O.c)(et.M5.ORGANIC_REGISTERED),
              this.redirectIfAuthenticated());
          let a = $.EW.FULL;
          i || this.hasError("date_of_birth")
            ? (a = $.EW.AGE_GATE)
            : null != r &&
              (null != r.guild || null != r.channel) &&
              (a = $.EW.INVITE),
            s(a);
        }
        redirectIfAuthenticated() {
          let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
          if (!!e) t(null != n ? n : V.Z.defaultRoute);
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
              invite: l,
              guildTemplate: o,
              giftCode: a,
              onRegister: c,
              usernameSuggestion: d,
              isMobileWebInviteRegistration: u,
            } = this.props,
            h = null != l ? l.code : null,
            g = null != a ? a.skuId : null,
            f = I.MD.getState(),
            p = (0, q.Ew)(d) ? null : t === d,
            x = ee.a ? await (0, j.K)(t) : t,
            _ = ee.a ? await (0, j.K)(n) : n;
          H.S.dispatch(Q.CkL.WAVE_EMPHASIZE),
            this.setState({ registering: !0, apiErrors: {} });
          try {
            u || null == l
              ? await (0, C.R$)({
                  email: e,
                  username: x,
                  globalName: _,
                  consent: r,
                  password: i,
                  invite: h,
                  usedUsernameSuggestion: p,
                  guildTemplateCode: null == o ? void 0 : o.code,
                  giftCodeSKUId: g,
                  birthday: s,
                  promoEmailConsent: f.required ? f : null,
                })
              : await (0, C.ZP)({
                  consent: r,
                  invite: h,
                  giftCodeSKUId: g,
                  usedUsernameSuggestion: p,
                  globalName: _,
                }),
              null == c || c();
          } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof m.Hx)))
              return;
            let e = (0, v.F)(t);
            this.setState({ apiErrors: e });
          }
        }
        hasError(e) {
          return null != this.state.apiErrors[e];
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
            l = null;
          return (
            t
              ? (l = (0, r.jsx)(T.Z, {
                  value: e,
                  onChange: (e) => this.setState({ consent: e }),
                  subText: ei.intl.format(ei.t.qMDAPz, {
                    termsURL: Q.EYA.TERMS,
                    privacyURL: Q.EYA.PRIVACY,
                  }),
                }))
              : (s = (0, r.jsx)(b.i_, {
                  isProminent: !!i,
                  className: es.marginTop8,
                  children: n
                    ? ei.intl.format(ei.t.oRFxPj, {
                        buttonText: ei.intl.string(ei.t["3PatS0"]),
                        termsURL: Q.EYA.TERMS,
                        privacyURL: Q.EYA.PRIVACY,
                      })
                    : ei.intl.format(ei.t["F+0zT0"], {
                        termsURL: Q.EYA.TERMS,
                        privacyURL: Q.EYA.PRIVACY,
                      }),
                })),
            { subText: s, consentText: l }
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
              (0, r.jsx)(Y.R, {}),
              (0, r.jsxs)(b.gO, {
                className: es.marginTop40,
                children: [
                  (0, r.jsx)(g.FormTitle, {
                    children: ei.intl.string(ei.t.TWzdWl),
                  }),
                  (0, r.jsx)(g.Tooltip, {
                    text: ei.intl.string(ei.t["hBB85+"]),
                    position: "right",
                    color: g.Tooltip.Colors.BRAND,
                    children: (e) => {
                      let { onMouseEnter: i, onMouseLeave: s } = e;
                      return (0, r.jsx)(b.II, {
                        autoFocus: !0,
                        className: es.marginBottom8,
                        name: "username",
                        value: n,
                        placeholder: ei.intl.string(ei.t["09Q8ys"]),
                        onChange: t,
                        onMouseEnter: i,
                        onMouseLeave: s,
                      });
                    },
                  }),
                  (0, r.jsx)(b.zx, {
                    className: es.marginTop20,
                    disabled: !0,
                    children: ei.intl.string(ei.t["3PatS0"]),
                  }),
                  (0, r.jsx)(b.i_, {
                    disabled: !0,
                    className: es.marginTop8,
                    children: ei.intl.format(ei.t["F+0zT0"], {
                      termsURL: Q.EYA.TERMS,
                      privacyURL: Q.EYA.PRIVACY,
                    }),
                  }),
                  ee.a
                    ? null
                    : (0, r.jsx)(b.zx, {
                        look: b.zx.Looks.LINK,
                        color: b.zx.Colors.LINK,
                        disabled: !0,
                        className: es.marginTop20,
                        children: ei.intl.string(ei.t["r/jzu7"]),
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
            ? (0, r.jsx)(S.Z, {
                stageInstance: e.stage_instance,
                guild: e.guild,
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, r.jsx)(Z.r, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
                })
              : (0, r.jsx)(Y.Z, { invite: e });
        }
        renderInviteButton() {
          let { invite: e, consentRequired: t } = this.props,
            { consent: n, registering: i } = this.state,
            s = b.zx.Colors.BRAND,
            l = ei.intl.string(ei.t["3PatS0"]);
          return (
            (null == e ? void 0 : e.stage_instance) != null &&
              ((s = b.zx.Colors.GREEN), (l = ei.intl.string(ei.t["5UKyUl"]))),
            (0, r.jsx)(g.Tooltip, {
              text: !n && t ? ei.intl.string(ei.t.AY4IVF) : null,
              children: (e) =>
                (0, r.jsx)("div", {
                  className: es.marginTop20,
                  ...e,
                  children: (0, r.jsx)(b.zx, {
                    type: "submit",
                    submitting: i,
                    disabled: !this.hasConsent(),
                    color: s,
                    children: l,
                  }),
                }),
            })
          );
        }
        renderInvite() {
          let { invite: e, authBoxClassName: t } = this.props,
            {
              apiErrors: { username: n, global_name: i },
              globalName: s,
            } = this.state,
            { subText: l, consentText: o } = this.renderConsentComponents(),
            a =
              (null == e ? void 0 : e.stage_instance) != null ||
              (null == e ? void 0 : e.guild_scheduled_event) != null,
            c = (e) => {
              this.setState({ globalName: e });
            };
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsxs)(b.ZP, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: t,
                children: [
                  this.renderInviteHeader(),
                  a ? (0, r.jsx)("div", { className: er.divider }) : null,
                  (0, r.jsxs)(b.gO, {
                    className: a ? void 0 : es.marginTop40,
                    children: [
                      (0, r.jsx)(g.FormTitle, {
                        error: ea(null != i ? i : n),
                        children: ei.intl.string(ei.t["9AjdkJ"]),
                      }),
                      (0, r.jsx)(g.Tooltip, {
                        text: ei.intl.string(ei.t["hBB85+"]),
                        position: "right",
                        color: g.Tooltip.Colors.BRAND,
                        children: (e) => {
                          let { onMouseEnter: t, onMouseLeave: l } = e;
                          return (0, r.jsx)(b.II, {
                            autoFocus: !0,
                            className: es.marginBottom8,
                            name: "global_name",
                            value: s,
                            placeholder: ei.intl.string(ei.t["09Q8ys"]),
                            onChange: c,
                            error: null != n || null != i ? "" : null,
                            onMouseEnter: t,
                            onMouseLeave: l,
                          });
                        },
                      }),
                      (0, r.jsx)(g.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: ei.intl.string(ei.t["330TCQ"]),
                      }),
                      this.renderInviteButton(),
                      l,
                      o,
                      ee.a
                        ? null
                        : (0, r.jsx)(b.zx, {
                            look: b.zx.Looks.LINK,
                            color: b.zx.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: es.marginTop20,
                            children: ei.intl.string(ei.t["r/jzu7"]),
                          }),
                    ],
                  }),
                ],
              }),
              null != e && a
                ? (0, r.jsx)(b.ZP, {
                    className: es.marginTop20,
                    children: (0, r.jsx)(S.y, {
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
          } = this.state;
          return "string" != typeof e
            ? null
            : (0, r.jsx)(b.i_, {
                className: o()(es.marginTop20, er.errorMessage),
                children: e,
              });
        }
        renderFull(e, t) {
          let {
              email: n,
              username: i,
              globalName: l,
              password: a,
              consent: c,
              parsedDateOfBirth: d,
              globalNameFocused: u,
              emailClientError: h,
              usernameClientError: f,
              passwordClientError: m,
              dateOfBirthClientError: p,
              registering: x,
              apiErrors: {
                email: E,
                username: I,
                global_name: N,
                password: v,
                date_of_birth: C,
              } = {},
            } = this.state,
            {
              consentRequired: T,
              isMobileWebInviteRegistration: Z,
              uniqueUsernameRegistrationConfig: { suggestions: S },
              authBoxClassName: j,
              hasLoggedInAccounts: R,
              registrationCopyExperimentConfig: { hasCopyAboveButton: P },
            } = this.props,
            { subText: L, consentText: O } = this.renderConsentComponents(),
            y = this.renderErrorMessage(),
            w = (0, r.jsx)(g.Tooltip, {
              text: !c && T ? ei.intl.string(ei.t.AY4IVF) : null,
              children: (e) =>
                (0, r.jsx)("div", {
                  className: es.marginTop20,
                  ...e,
                  children: (0, r.jsx)(b.zx, {
                    type: "submit",
                    submitting: x,
                    disabled: !this.hasConsent() || this.state.isRateLimited,
                    children: ei.intl.string(ei.t["3PatS0"]),
                  }),
                }),
            }),
            B = async () => {
              this.setState({ usernameFocused: !0 }),
                S &&
                  l.length > 0 &&
                  !k.Z.wasRegistrationSuggestionFetched(l) &&
                  (await D.Z.fetchSuggestionsRegistration(l));
            },
            M =
              null != e
                ? (0, r.jsx)(s.Fragment, { children: e() }, "custom-header")
                : (0, r.jsx)(
                    b.Dx,
                    { children: ei.intl.string(ei.t.wC4TlZ) },
                    "title",
                  ),
            F = (0, r.jsxs)(b.gO, {
              className: es.marginTop20,
              children: [
                (0, r.jsx)(b.II, {
                  autoFocus: !0,
                  className: es.marginBottom20,
                  label: ei.intl.string(ei.t.dI4d4e),
                  name: "email",
                  value: n,
                  onChange: (e) =>
                    this.setState({
                      email: e,
                      emailClientError:
                        0 === e.length ? ei.intl.string(ei.t.EkokLy) : null,
                    }),
                  error: null != h ? h : ea(E),
                  type: "email",
                  setRef: (e) => {
                    this.emailRef = e;
                  },
                  required: !0,
                }),
                (0, r.jsx)(b.II, {
                  label: ei.intl.string(ei.t["9AjdkJ"]),
                  className: es.marginBottom20,
                  name: "global_name",
                  value: l,
                  onChange: (e) => this.setState({ globalName: e }),
                  error: ea(N),
                  maxLength: en.hy,
                  setRef: (e) => {
                    this.globalNameRef = e;
                  },
                  onFocus: () => this.setState({ globalNameFocused: !0 }),
                  onBlur: () => this.setState({ globalNameFocused: !1 }),
                }),
                (0, r.jsx)(G.Z, {
                  show: u,
                  top: -12,
                  bottom: 20,
                  children: (0, r.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ei.intl.string(ei.t["330TCQ"]),
                  }),
                }),
                (0, r.jsxs)("div", {
                  onBlur: () => this.setState({ usernameFocused: !1 }),
                  onFocus: B,
                  tabIndex: -1,
                  children: [
                    (0, r.jsx)(b.II, {
                      label: ei.intl.string(ei.t.TWzdWl),
                      className: es.marginBottom20,
                      name: "username",
                      value: i,
                      onChange: (e) => {
                        this.setState({
                          username: e.toLocaleLowerCase(),
                          usernameClientError:
                            0 === e.length ? ei.intl.string(ei.t.EkokLy) : null,
                        });
                      },
                      error: null != f ? f : ea(I),
                      setRef: (e) => {
                        this.usernameRef = e;
                      },
                      required: !0,
                    }),
                    this.renderUsernameValidation(),
                  ],
                }),
                (0, r.jsx)(b.II, {
                  label: ei.intl.string(ei.t["CIGa+/"]),
                  name: "password",
                  value: a,
                  onChange: (e) =>
                    this.setState({
                      password: e,
                      passwordClientError:
                        0 === e.length ? ei.intl.string(ei.t.EkokLy) : null,
                    }),
                  error: null != m ? m : ea(v),
                  type: "password",
                  setRef: (e) => {
                    this.passwordRef = e;
                  },
                  required: !0,
                }),
                (0, r.jsx)(_.Z, {
                  label: ei.intl.string(ei.t.rhBeKS),
                  wrapperClassName: es.marginTop20,
                  name: "date_of_birth",
                  onChange: this.handleBirthdayChange,
                  ref: this.dateOfBirthRef,
                  error: null != p ? p : ea(C),
                  value: d,
                  required: !0,
                }),
                P && L,
                (0, r.jsx)(A.Z, {}),
                w,
                y,
                O,
                !P && L,
                ee.a
                  ? null
                  : (0, r.jsx)(b.zx, {
                      look: Z ? b.zx.Looks.FILLED : b.zx.Looks.LINK,
                      color: Z ? b.zx.Colors.PRIMARY : b.zx.Colors.LINK,
                      onClick: this.handleGotoLogin,
                      className: es.marginTop20,
                      children: ei.intl.string(ei.t["r/jzu7"]),
                    }),
              ],
            });
          return t
            ? (0, r.jsx)(X.Z, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: o()(j, er.horizontalAuthBox),
                children: () => [
                  M,
                  (0, r.jsxs)(
                    "div",
                    {
                      className: er.flex,
                      children: [
                        (0, r.jsx)(b.Dx, {
                          className: er.createAccountTemplateHeader,
                          children: ei.intl.string(ei.t.wC4TlZ),
                        }),
                        F,
                      ],
                    },
                    "register-title",
                  ),
                ],
              })
            : (0, r.jsxs)(b.ZP, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: j,
                children: [
                  R && !Z
                    ? (0, r.jsx)(b.zx, {
                        onClick: this.handleGotoLogin,
                        look: b.zx.Looks.LINK,
                        color: b.zx.Colors.PRIMARY,
                        className: er.goBackButton,
                        children: (0, r.jsxs)("div", {
                          className: er.content,
                          children: [
                            (0, r.jsx)(g.ChevronSmallLeftIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: er.caret,
                            }),
                            (0, r.jsx)(g.Text, {
                              variant: "text-md/normal",
                              children: ei.intl.string(ei.t["1MrpWF"]),
                            }),
                          ],
                        }),
                      })
                    : null,
                  M,
                  F,
                ],
              });
        }
        render() {
          let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
          if (e || this.hasError("date_of_birth")) return (0, r.jsx)(x.Z, {});
          let { invite: n, giftCode: i, guildTemplate: s } = this.props,
            l =
              null != n &&
              null == n.guild &&
              null == n.channel &&
              null != n.inviter;
          return null == n || l || t
            ? null != s
              ? this.renderFull(() => (0, r.jsx)(P.Z, { guildTemplate: s }), !0)
              : null != i
                ? this.renderFull(() => (0, r.jsx)(J.Z, { giftCode: i }))
                : null != n && l && n.state === Q.r2o.RESOLVED && !t
                  ? this.renderFull(() =>
                      (0, r.jsx)(Y.Z, { invite: n, isRegister: !0 }),
                    )
                  : this.renderFull()
            : n.state === Q.r2o.RESOLVING
              ? this.renderInviteResolving()
              : this.renderInvite();
        }
        constructor(e) {
          var t;
          super(e),
            el(this, "emailRef", void 0),
            el(this, "usernameRef", void 0),
            el(this, "globalNameRef", void 0),
            el(this, "passwordRef", void 0),
            el(this, "dateOfBirthRef", s.createRef()),
            el(this, "_retryTimer", new h.V7()),
            el(this, "handleGotoLogin", (e) => {
              let t;
              let { email: n } = this.state,
                {
                  giftCode: i,
                  guildTemplate: r,
                  invite: s,
                  location: l,
                  onLoginStart: o,
                  redirectTo: c,
                  transitionTo: d,
                  isMobileWebInviteRegistration: u,
                } = this.props;
              if (u) {
                null == o || o(e);
                return;
              }
              let h = null != l ? (0, a.parse)(l.search) : {};
              null != s
                ? (t = Q.Z5c.INVITE_LOGIN(s.code))
                : null != i
                  ? (t = Q.Z5c.GIFT_CODE_LOGIN(i.code))
                  : null != r
                    ? (t = Q.Z5c.GUILD_TEMPLATE_LOGIN(r.code))
                    : null != c
                      ? ((t = Q.Z5c.LOGIN), (h.redirect_to = c))
                      : ((t = Q.Z5c.LOGIN), "" !== n && (h = { email: n })),
                f.Z.loginReset(),
                d(t, { search: (0, a.stringify)(h) }),
                null == o || o(e),
                H.S.dispatch(Q.CkL.WAVE_EMPHASIZE);
            }),
            el(this, "handleSubmit", (e) => {
              null == e || e.preventDefault();
              let {
                  email: t,
                  username: n,
                  password: i,
                  parsedDateOfBirth: r,
                } = this.state,
                { invite: s, consentRequired: l } = this.props;
              if (null !== l) {
                if (null == s) {
                  let e = !1;
                  if (
                    (0 === t.length &&
                      (this.setState({
                        emailClientError: ei.intl.string(ei.t.EkokLy),
                      }),
                      (e = !0)),
                    0 === n.length &&
                      (this.setState({
                        usernameClientError: ei.intl.string(ei.t.EkokLy),
                      }),
                      (e = !0)),
                    0 === i.length &&
                      (this.setState({
                        passwordClientError: ei.intl.string(ei.t.EkokLy),
                      }),
                      (e = !0)),
                    null == r &&
                      (this.setState({
                        dateOfBirthClientError: ei.intl.string(ei.t.EkokLy),
                      }),
                      (e = !0)),
                    e)
                  )
                    return;
                }
                this.handleRegister();
              }
            }),
            el(this, "handleBirthdayChange", (e) => {
              this.setState({ parsedDateOfBirth: e }),
                null != e && this.setState({ dateOfBirthClientError: null });
            }),
            el(this, "renderUsernameValidation", () => {
              let {
                  username: e,
                  globalName: t,
                  usernameFocused: n,
                } = this.state,
                {
                  usernameSuggestion: i,
                  uniqueUsernameRegistrationConfig: { livecheckEnabled: s },
                } = this.props;
              return (0, r.jsx)(eu, {
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
          let n = null != e.location ? (0, a.parse)(e.location.search) : {};
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
            registering: !1,
            apiErrors: {},
          };
        }
      }
      function ed(e) {
        let t = (0, u.cj)([z.Z, U.default, p.Z, y.Z, L.Z], () => ({
            consentRequired: z.Z.getAuthenticationConsentRequired(),
            authenticated: U.default.isAuthenticated(),
            isUnderage: p.Z.isUnderageAnonymous(),
            country: y.Z.getCountryCode(),
            hasLoggedInAccounts: L.Z.getHasLoggedInAccounts(),
          })),
          n = (0, B.F4)(),
          i = (0, u.e7)([k.Z], () => k.Z.registrationUsernameSuggestion()),
          [l, o] = s.useState($.EW.FULL);
        return (
          (0, E.Z)(
            {
              type: d.ImpressionTypes.VIEW,
              name: d.ImpressionNames.USER_REGISTRATION,
              properties: {
                impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW,
                step: l,
              },
            },
            {},
            [l],
          ),
          (0, r.jsx)(ec, {
            onChangeStep: (e) => o(e),
            registrationCopyExperimentConfig: N.Z.getCurrentConfig(
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
      function eu(e) {
        let t,
          {
            username: n,
            suggestion: i,
            globalName: s,
            livecheckEnabled: l,
            isUsernameFocused: o,
            onClickSuggestion: a,
          } = e,
          d = (0, M.a)(n, l, !0),
          u = l && n.length > 0;
        return (
          (t = u
            ? (0, c.EQ)(d)
                .with({ type: w.K.ERROR, message: c.P.select() }, (e) =>
                  (0, r.jsx)(g.Text, {
                    className: er.messageNegative,
                    variant: "text-sm/normal",
                    children: e,
                  }),
                )
                .with({ type: w.K.AVAILABLE, message: c.P.select() }, (e) =>
                  (0, r.jsx)(g.Text, {
                    className: er.messagePositive,
                    variant: "text-sm/normal",
                    children: e,
                  }),
                )
                .otherwise(() =>
                  (0, r.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ei.intl.string(ei.t.z7c4bG),
                  }),
                )
            : null != i && i.length > 0 && s.length > 0
              ? (0, r.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: ei.intl.format(ei.t.nDGqqq, {
                    suggestion: i,
                    nameOnClick: a,
                  }),
                })
              : (0, r.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: ei.intl.string(ei.t.z7c4bG),
                })),
          (0, r.jsx)(G.Z, {
            show: (u && (null == d ? void 0 : d.type) === w.K.ERROR) || o,
            top: -12,
            bottom: 20,
            children: t,
          })
        );
      }
      el(ec, "defaultProps", {
        giftCodeResolved: !1,
        transitionTo: (e) => n.g.location.assign(e),
      });
    },
    424044: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(442837),
        l = n(481060),
        o = n(893776),
        a = n(232567),
        c = n(129293),
        d = n(388905),
        u = n(353926),
        h = n(185625),
        g = n(551549),
        f = n(108427),
        m = n(314897),
        p = n(981631),
        x = n(388032),
        _ = n(232186);
      s.ZP.initialize();
      t.Z = (e) => {
        let { location: t } = e,
          n = (0, s.e7)([m.default], () => m.default.isAuthenticated()),
          E = (0, s.e7)([u.Z], () => u.Z.hasLoadedExperiments),
          I = (0, g.oK)("RSL - Landing Page"),
          [N, v] = r.useState(!1),
          [C, b] = r.useState(x.intl.string(x.t["9exy+f"])),
          [T, Z] = r.useState(!0),
          A = (e) => {
            switch (e) {
              case p.evJ.INVALID_FORM_BODY:
              case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
                b(x.intl.string(x.t.bzXDfX));
                break;
              case p.evJ.DSA_RSL_ALREADY_REQUESTED:
                b(x.intl.string(x.t.rV00ws));
                break;
              case p.evJ.DSA_RSL_LIMITED_TIME:
                b(x.intl.string(x.t["0dI29v"]));
                break;
              case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
                b(x.intl.string(x.t["RGa/GR"]));
                break;
              default:
                b(x.intl.string(x.t["0QLzfn"]));
            }
          };
        return (
          r.useEffect(() => {
            n
              ? (Z(!0),
                a
                  .k({ withAnalyticsToken: !0 })
                  .then(() => Z(!1))
                  .catch(() => Z(!1)))
              : Z(!1);
          }, [n]),
          r.useEffect(() => {
            !E && !I && o.Z.getExperiments();
          }, [E, I]),
          r.useEffect(() => {
            let e = async (e) => {
              var t, n;
              try {
                let n = null != e ? await (0, h.hs)(e) : void 0;
                null != n
                  ? b(x.intl.string(x.t.e6mZMj))
                  : A(null === (t = n.body) || void 0 === t ? void 0 : t.code);
              } catch (e) {
                A(null === (n = e.body) || void 0 === n ? void 0 : n.code);
              } finally {
                v(!1);
              }
            };
            v(!0), e((0, c.Z)(t)), (0, f.e)("report_second_look");
          }, [t]),
          I &&
            !T &&
            (0, i.jsxs)(d.ZP, {
              children: [
                (0, i.jsx)(d.Dx, { className: _.marginBottom8, children: C }),
                N && (0, i.jsx)(l.Spinner, {}),
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
        l = n(442837),
        o = n(481060),
        a = n(893776),
        c = n(232567),
        d = n(388905),
        u = n(353926),
        h = n(82554),
        g = n(726521),
        f = n(185625),
        m = n(314897),
        p = n(63063),
        x = n(981631),
        _ = n(388032),
        E = n(57717),
        I = n(232186);
      l.ZP.initialize();
      let N = (e) => {
        let { title: t, menuType: r } = e,
          l = () => {
            (0, o.openModalLazy)(async () => {
              let { default: e } = await n.e("93288").then(n.bind(n, 396410));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  onSuccess: a,
                  headerText: _.intl.string(_.t.ZLRYGR),
                  confirmButtonText: _.intl.string(_.t.PDTjLC),
                  confirmButtonColor: o.Button.Colors.BRAND,
                  impressionName: s.ImpressionNames.URF_ENTER_EMAIL,
                });
            });
          },
          a = (e) => {
            let t = async () => {
                await (0, f.yL)(r, e);
              },
              l = async (t) => await (0, f.RV)(r, e, t),
              a = (e) => {
                let t = null == e ? void 0 : e.token;
                r === h.BM.MESSAGE
                  ? (0, g.eE)(t)
                  : r === h.BM.USER && (0, g.JM)(t);
              };
            t(),
              (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e("94566").then(n.bind(n, 965072));
                return (n) =>
                  (0, i.jsx)(e, {
                    ...n,
                    onFormSubmit: l,
                    onResend: t,
                    onSuccess: a,
                    headerText: _.intl.string(_.t.H3Q7U1),
                    confirmButtonText: _.intl.string(_.t["13ofGh"]),
                    confirmButtonColor: o.Button.Colors.BRAND,
                    impressionName: s.ImpressionNames.URF_CONFIRM_EMAIL_CODE,
                  });
              });
          };
        return (0, i.jsx)("div", {
          className: E.buttonColumn,
          children: (0, i.jsx)(o.Button, {
            className: I.__invalid_reportButton,
            fullWidth: !0,
            color: o.Button.Colors.BRAND,
            onClick: () => l(),
            children: t,
          }),
        });
      };
      t.Z = () => {
        let [e, t] = r.useState(!0),
          [n, s] = r.useState(!1),
          g = (0, l.e7)([m.default], () => m.default.isAuthenticated()),
          v = (0, l.e7)([u.Z], () => u.Z.hasLoadedExperiments),
          C = () => {
            (0, f.qJ)()
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
                  .then(() => C())
                  .catch(() => t(!1)))
              : C();
          }, [g]),
          r.useEffect(() => {
            (async () => {
              !v && (await a.Z.getLocationMetadata(), a.Z.getExperiments());
            })();
          }, [v]),
          e || !v
            ? (0, i.jsx)(d.ZP, { children: (0, i.jsx)(o.Spinner, {}) })
            : n &&
              (0, i.jsxs)(d.ZP, {
                children: [
                  (0, i.jsx)(d.Dx, {
                    className: I.marginBottom8,
                    children: _.intl.string(_.t.Z11w19),
                  }),
                  (0, i.jsx)(d.DK, {
                    className: I.marginBottom8,
                    children: _.intl.format(_.t["532l+v"], {
                      supportURL: p.Z.getArticleURL(
                        x.BhN.COPYRIGHT_AND_IP_POLICY,
                      ),
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: E.container,
                    children: [
                      (0, i.jsx)(N, {
                        title: _.intl.string(_.t.fuqnBA),
                        menuType: h.BM.MESSAGE,
                      }),
                      (0, i.jsx)(N, {
                        title: _.intl.string(_.t.F4jrRU),
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
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        l = n.n(s),
        o = n(442837),
        a = n(893776),
        c = n(493773),
        d = n(129293),
        u = n(388905),
        h = n(17894),
        g = n(108427),
        f = n(626135),
        m = n(981631),
        p = n(388032),
        x = n(823793),
        _ = n(232186);
      function E(e) {
        n.g.location.assign(e);
      }
      function I(e) {
        let { location: t, transitionTo: s = E } = e,
          [o, I] = r.useState("submitting"),
          N = r.useRef(void 0);
        (0, c.Z)(() => {
          (0, g.e)("verify_email");
          let e = (0, d.Z)(t);
          if (null == e) {
            I("failed");
            return;
          }
          (async () => {
            try {
              let t = await a.Z.verify(e);
              I("succeeded"), (N.current = t);
            } catch (e) {
              I("failed");
            }
          })();
        });
        let v = r.useCallback(() => {
            s(m.Z5c.LOGIN);
          }, [s]),
          C = r.useCallback(() => {
            f.default.track(m.rMx.VERIFY_ACCOUNT_APP_OPENED, {
              verifying_user_id: N.current,
            }),
              (0, h.Z)("verify_email");
          }, []);
        return "failed" === o
          ? (0, i.jsxs)(u.ZP, {
              children: [
                (0, i.jsx)(u.Ee, {
                  src: n(375673),
                  className: l()(x.image, _.marginBottom20),
                }),
                (0, i.jsx)(u.Dx, {
                  className: _.marginBottom8,
                  children: p.intl.string(p.t.PCgG39),
                }),
                (0, i.jsx)(u.DK, {
                  className: _.marginBottom40,
                  children: p.intl.string(p.t.tQpeAw),
                }),
                (0, i.jsx)(u.zx, {
                  onClick: v,
                  children: p.intl.string(p.t.dKhVQE),
                }),
              ],
            })
          : "succeeded" === o
            ? (0, i.jsxs)(u.ZP, {
                children: [
                  (0, i.jsx)(u.Ee, {
                    src: n(73962),
                    className: l()(x.image, _.marginBottom20),
                  }),
                  (0, i.jsx)(u.Dx, {
                    className: _.marginBottom40,
                    children: p.intl.string(p.t.dAfGb2),
                  }),
                  (0, i.jsx)(u.zx, {
                    onClick: C,
                    children: p.intl.string(p.t.uJWIj4),
                  }),
                ],
              })
            : (0, i.jsxs)(u.ZP, {
                children: [
                  (0, i.jsx)(u.Ee, {
                    src: n(892235),
                    className: l()(x.image, _.marginBottom20),
                  }),
                  (0, i.jsx)(u.Dx, {
                    className: _.marginBottom8,
                    children: p.intl.string(p.t["0c8+5u"]),
                  }),
                  (0, i.jsx)(u.DK, {
                    className: _.marginBottom40,
                    children: p.intl.string(p.t.ULTCBA),
                  }),
                  (0, i.jsx)(u.zx, {
                    submitting: !0,
                    color: u.zx.Colors.PRIMARY,
                  }),
                ],
              });
      }
      o.ZP.initialize();
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
    448986: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var i = n(192379);
      function r(e) {
        let t = i.useRef(e);
        return (
          i.useInsertionEffect(() => {
            t.current = e;
          }),
          i.useCallback(function () {
            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
              n[i] = arguments[i];
            return t.current(...n);
          }, [])
        );
      }
    },
    126399: function (e, t, n) {
      n(47120);
      var i = n(544891),
        r = n(570140),
        s = n(893776),
        l = n(899742),
        o = n(743142),
        a = n(117240),
        c = n(626135),
        d = n(317770),
        u = n(981631);
      function h(e, t) {
        c.default.track(u.rMx.BROWSER_HANDOFF_SUCCEEDED, {
          authenticated: e,
          handoff_source: t,
        });
      }
      class g extends d.Z {
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
            handoffSource: a,
          } = e;
          null != n
            ? i.tn
                .post({
                  url: u.ANM.HANDOFF_EXCHANGE,
                  body: { key: t, handoff_token: n },
                  rejectWithError: !1,
                })
                .then(
                  (e) => {
                    let { body: t } = e;
                    (0, l.Vb)(t.user), s.Z.loginToken(t.token, !1), h(!0, a);
                  },
                  (e) => {
                    if (
                      (null != r && h(!1, a),
                      s.Z.setFingerprint(r),
                      (0, l.lx)(),
                      a === o.F.ROLE_SUBSCRIPTION)
                    ) {
                      var t;
                      c.default.track(u.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason:
                          null !== (t = e.message) && void 0 !== t ? t : e.text,
                        handoff_source: a,
                      });
                    }
                  },
                )
            : null != r
              ? (s.Z.setFingerprint(r), h(!1, a), (0, l.lx)())
              : (s.Z.setFingerprint(r), (0, l.by)());
        }
        constructor(...e) {
          var t, n, i;
          super(...e),
            (t = this),
            (n = "handleEnd"),
            (i = (e) => {
              let { handoffToken: t, fingerprint: n } = e,
                i = a.Z.key;
              null != i && a.Z.isHandoffAvailable()
                ? this.handleHandoff({
                    handoffKey: i,
                    handoffToken: t,
                    fingerprint: n,
                    handoffSource: void 0,
                  })
                : (s.Z.setFingerprint(null), (0, l.by)());
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
        l = n(215569);
      class o extends r.Component {
        render() {
          let {
              children: e,
              location: t,
              history: n,
              staticContext: o,
              match: a,
              ...c
            } = this.props,
            d = null,
            u = null;
          return (
            r.Children.forEach(e, (e) => {
              if (null == d && r.isValidElement(e)) {
                let { component: i, render: l, ...a } = e.props,
                  c = a.path || a.from;
                if (
                  null !=
                  (d =
                    null != c ? (0, s.LX)(t.pathname, { ...a, path: c }) : null)
                )
                  (a = {
                    ...a,
                    key: c,
                    location: t,
                    match: d,
                    history: n,
                    staticContext: o,
                  }),
                    null != i
                      ? (u = r.createElement(i, a))
                      : null != l && (u = l(a));
              }
            }),
            (0, i.jsx)(l.W, { ...c, children: u })
          );
        }
      }
      t.Z = (0, s.EN)(o);
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
        l,
        o = n(200651),
        a = n(192379),
        c = n(442837),
        d = n(388905),
        u = n(108427),
        h = n(559786);
      c.ZP.initialize();
      class g extends (i = a.PureComponent) {
        componentDidMount() {
          (0, u.e)("account_revert");
        }
        render() {
          let { token: e } = this.props.match.params;
          return (0, o.jsx)(d.ZP, {
            style: { padding: 0 },
            children: (0, o.jsx)(h.Z, { width: 464, token: e, ...this.props }),
          });
        }
      }
      (r = g),
        (s = "defaultProps"),
        (l = {
          transitionTo: (e) => n.g.location.assign(e),
          replaceWith: (e) => n.g.location.replace(e),
        }),
        s in r
          ? Object.defineProperty(r, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[s] = l);
    },
    559786: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(990547),
        l = n(481060),
        o = n(301938),
        a = n(806701),
        c = n(808993),
        d = n(720196);
      function u(e) {
        let { transitionTo: t, token: n, width: u } = e,
          [h, g] = r.useState(d.n.START),
          [f, m] = r.useState(null),
          [p, x] = r.useState(""),
          _ = { impression_group: s.ImpressionGroups.ACCOUNT_REVERT_FLOW };
        return (0, i.jsx)("div", {
          style: { margin: "8px" },
          children: (0, i.jsxs)(l.Slides, {
            activeSlide: h,
            width: u,
            onSlideReady: m,
            children: [
              (0, i.jsx)(l.Slide, {
                id: d.n.START,
                impressionProperties: _,
                impressionName: s.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                children: (0, i.jsx)(a.Z, { setSlide: g, transitionTo: t }),
              }),
              (0, i.jsx)(l.Slide, {
                id: d.n.PASSWORD,
                impressionProperties: _,
                impressionName:
                  s.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                children: (0, i.jsx)(o.Z, {
                  setOriginalEmail: x,
                  setSlide: g,
                  transitionTo: t,
                  ready: f === d.n.PASSWORD,
                  token: n,
                }),
              }),
              (0, i.jsx)(l.Slide, {
                id: d.n.SUCCESS,
                impressionProperties: _,
                impressionName: s.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                children: (0, i.jsx)(c.Z, { email: p }),
              }),
            ],
          }),
        });
      }
    },
    301938: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120),
        n(411104),
        n(773603);
      var i = n(200651),
        r = n(192379),
        s = n(120356),
        l = n.n(s),
        o = n(990547),
        a = n(481060),
        c = n(479531),
        d = n(388905),
        u = n(585483),
        h = n(573261),
        g = n(720196),
        f = n(981631),
        m = n(388032),
        p = n(114969),
        x = n(232186);
      function _(e) {
        let { setOriginalEmail: t, setSlide: s, ready: _, token: E } = e,
          [I, N] = r.useState(!1),
          [v, C] = r.useState(null),
          [b, T] = r.useState(null),
          [Z, A] = r.useState(""),
          S = r.useRef(null);
        return (
          r.useEffect(() => {
            if (_) {
              var e;
              null === (e = S.current) || void 0 === e || e.focus();
            }
          }, [_]),
          (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(d.Ee, {
                src: null == b ? n(26230) : n(935227),
                className: l()(x.marginBottom20, x.marginTop8),
              }),
              (0, i.jsx)(d.Dx, { children: m.intl.string(m.t["IfBQ5+"]) }),
              null != b && "" !== b
                ? (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: b,
                  })
                : null,
              (0, i.jsxs)(d.gO, {
                className: l()(x.marginBottom20, x.marginTop20),
                children: [
                  (0, i.jsx)(d.II, {
                    name: "password",
                    type: "password",
                    label: m.intl.string(m.t["8dM4FB"]),
                    setRef: S,
                    className: x.marginBottom20,
                    value: Z,
                    onChange: A,
                    error: v,
                    autoComplete: "new-password",
                    maxLength: 72,
                    placeholder: m.intl.string(m.t["yY/PXV"]),
                  }),
                  (0, i.jsx)(d.zx, {
                    className: x.marginTop8,
                    onClick: () => {
                      if (!I) {
                        if (0 === Z.length) {
                          C(m.intl.string(m.t.R98xDw)),
                            u.S.dispatch(f.CkL.WAVE_EMPHASIZE);
                          return;
                        }
                        return (
                          null != b && T(null),
                          null != v && C(null),
                          t(""),
                          N(!0),
                          h.Z.post({
                            url: f.ANM.ACCOUNT_REVERT,
                            body: { token: E, password: Z },
                            trackedActionData: {
                              event: o.NetworkActionNames.ACCOUNT_REVERT,
                            },
                            rejectWithError: !1,
                          })
                            .then((e) => {
                              let {
                                body: { email: n },
                              } = e;
                              A(""), t(n), s(g.n.SUCCESS);
                            })
                            .catch((e) => {
                              if (e instanceof Error)
                                T(
                                  m.intl.formatToPlainString(m.t.aTVNen, {
                                    statusPageURL: f.yXt.STATUS,
                                  }),
                                );
                              else {
                                let t = new c.Z(e);
                                t.hasFieldErrors()
                                  ? C(t.getAnyErrorMessage())
                                  : T(
                                      (function (e) {
                                        switch (e) {
                                          case f.evJ
                                            .ACCOUNT_REVERT_INVALID_TOKEN:
                                            return m.intl.string(m.t["11zzGR"]);
                                          case f.evJ
                                            .ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                            return m.intl.string(m.t["6qmgaG"]);
                                          case f.evJ
                                            .ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                            return m.intl.string(m.t.bChnKi);
                                          default:
                                            return m.intl.format(m.t.aTVNen, {
                                              statusPageURL: f.yXt.STATUS,
                                            });
                                        }
                                      })(t.code).toString(),
                                    );
                              }
                              u.S.dispatch(f.CkL.WAVE_EMPHASIZE);
                            })
                            .finally(() => {
                              N(!1);
                            })
                        );
                      }
                    },
                    submitting: I,
                    disabled: I,
                    children: m.intl.string(m.t.ezv91d),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: p.buttonContainer,
                children: (0, i.jsx)(d.zx, {
                  color: d.zx.Colors.PRIMARY,
                  onClick: () => {
                    A(""), s(g.n.START);
                  },
                  children: m.intl.string(m.t.rzxnQ0),
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
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        l = n(481060),
        o = n(388905),
        a = n(661824),
        c = n(720196),
        d = n(981631),
        u = n(388032),
        h = n(114969),
        g = n(232186);
      function f(e) {
        let { children: t } = e;
        return (0, i.jsx)("li", {
          className: h.listItem,
          children: (0, i.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: t,
          }),
        });
      }
      function m(e) {
        let { setSlide: t, transitionTo: r } = e;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(o.Ee, {
              src: n(26230),
              className: s()(g.marginBottom20, g.marginTop8),
            }),
            (0, i.jsx)(o.Dx, {
              className: g.marginBottom8,
              children: u.intl.string(u.t["8UcxIy"]),
            }),
            (0, i.jsx)(l.Text, {
              variant: "text-md/normal",
              children: u.intl.string(u.t.O37hMj),
            }),
            (0, i.jsxs)(o.gO, {
              className: s()(g.marginBottom20, g.marginTop20),
              children: [
                (0, i.jsx)(l.Text, { variant: "text-sm/normal" }),
                (0, i.jsxs)("ul", {
                  className: h.listContainer,
                  children: [
                    (0, i.jsx)(f, { children: u.intl.string(u.t.Gj1Zr6) }),
                    (0, i.jsx)(a.Z, {}),
                    (0, i.jsx)(f, { children: u.intl.string(u.t["8C6t3N"]) }),
                    (0, i.jsx)(a.Z, {}),
                    (0, i.jsx)(f, { children: u.intl.string(u.t.mToZMD) }),
                    (0, i.jsx)(a.Z, {}),
                    (0, i.jsx)(f, { children: u.intl.string(u.t.TPEvkZ) }),
                    (0, i.jsx)(a.Z, {}),
                    (0, i.jsx)(f, { children: u.intl.string(u.t.H8Y1Li) }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: h.buttonContainer,
              children: [
                (0, i.jsx)(o.zx, {
                  onClick: () => t(c.n.PASSWORD),
                  children: u.intl.string(u.t.GgCRqa),
                }),
                (0, i.jsx)(o.zx, {
                  color: o.zx.Colors.PRIMARY,
                  onClick: () => r(d.Z5c.LOGIN),
                  children: u.intl.string(u.t["B/yHcX"]),
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
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        l = n(481060),
        o = n(388905),
        a = n(388032),
        c = n(232186);
      function d(e) {
        let { email: t } = e;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(o.Ee, {
              src: n(26230),
              className: s()(c.marginBottom20, c.marginTop8),
            }),
            (0, i.jsx)(o.Dx, { children: a.intl.string(a.t.ailkVF) }),
            (0, i.jsx)(o.DK, {
              children: a.intl.format(a.t["4ZMVCA"], { email: t }),
            }),
            (0, i.jsx)(l.Text, {
              className: s()(c.marginBottom8, c.marginTop20),
              variant: "text-md/normal",
              children: a.intl.string(a.t["dpAn+/"]),
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
    899370: function (e, t, n) {
      var i,
        r,
        s,
        l,
        o = n(973361),
        a = n(442837),
        c = n(570140),
        d = n(358085),
        u = n(723359);
      let h = null,
        g = "underage";
      class f extends (l = a.ZP.Store) {
        isUnderageAnonymous() {
          if (d.isPlatformEmbedded) {
            if (null != h && h + u.k0 > Date.now()) return !0;
          } else return null != o.parse(document.cookie)[g];
          return !1;
        }
      }
      (s = "AgeGateStore"),
        (r = "displayName") in (i = f)
          ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = s),
        (t.Z = new f(c.Z, {
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
        l = n(703656),
        o = n(63063),
        a = n(981631),
        c = n(388032),
        d = n(514491);
      let u = () => (0, l.uL)(a.Z5c.LOGIN);
      t.Z = (e) => {
        let { authBoxClassName: t, underageMessage: l } = e;
        return (0, i.jsxs)(s.ZP, {
          className: t,
          children: [
            (0, i.jsx)("img", { alt: "", src: n(231443), className: d.img }),
            (0, i.jsx)(s.Dx, {
              className: d.title,
              children: c.intl.string(c.t.nCB6GR),
            }),
            (0, i.jsx)(s.DK, {
              className: d.subtitle,
              children: c.intl.format(c.t.b0QzXV, {
                underageMessage: null != l ? l : c.intl.string(c.t.WqEH4O),
                helpURL: o.Z.getArticleURL(a.BhN.AGE_GATE),
              }),
            }),
            (0, i.jsx)(r.Button, {
              fullWidth: !0,
              onClick: u,
              children: c.intl.string(c.t.szzQ6O),
            }),
          ],
        });
      };
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
          return a;
        },
      });
      var i,
        r,
        s = n(754688),
        l = n(981631),
        o = n(176505);
      function a(e) {
        let t = decodeURIComponent(e),
          n = (0, s.Qj)(t);
        return null != n && n.channelId === o.oC.ROLE_SUBSCRIPTIONS
          ? "role_subscription"
          : t === l.Z5c.SETTINGS(l.oAB.SUBSCRIPTIONS, "role-subscriptions")
            ? "role_subscription_setting"
            : void 0;
      }
      ((i = r || (r = {})).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting");
    },
    355142: function (e, t, n) {
      var i, r, s, l, o, a;
      n.d(t, {
        EW: function () {
          return r;
        },
      }),
        ((l = i || (i = {})).VIEWED = "viewed"),
        (l.SUBMITTED = "submitted"),
        (l.RESEND_CODE = "resend_code"),
        (l.INPUT_ERROR = "input_error"),
        (l.RESPONSE_ERROR = "response_error"),
        (l.SUCCESS = "success"),
        ((o = r || (r = {})).IDENTITY = "identity"),
        (o.DISPLAY_NAME = "display_name"),
        (o.ACCOUNT_INFORMATION = "account_information"),
        (o.FULL = "full"),
        (o.AGE_GATE = "age_gate"),
        (o.INVITE = "invite"),
        (o.SMS_VERIFY = "sms_verify"),
        ((a = s || (s = {})).ACCOUNT_IDENTITY = "Account Identity"),
        (a.ACCOUNT_DISPLAY_NAME = "Account Display Name"),
        (a.ACCOUNT_INFORMATION = "Account Information"),
        (a.AGE_GATE = "Age Gate"),
        (a.AGE_GATE_UNDERAGE = "Age Gate Underage"),
        (a.PHONE_VERIFICATION = "Phone Verification"),
        (a.REGISTER = "Register"),
        (a.CAPTCHA = "Captcha");
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
    481230: function (e, t, n) {
      n.d(t, {
        R$: function () {
          return p;
        },
        ZP: function () {
          return m;
        },
      });
      var i = n(913527),
        r = n.n(i),
        s = n(990547),
        l = n(570140),
        o = n(479531),
        a = n(771308),
        c = n(314897),
        d = n(626135),
        u = n(573261),
        h = n(959776),
        g = n(981631),
        f = n(723359);
      function m(e) {
        let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
        return p({ ...i, invite: t, giftCodeSKUId: n });
      }
      function p(e) {
        let {
          email: t,
          phoneToken: n,
          username: i,
          globalName: m,
          consent: p,
          password: x,
          guildTemplateCode: _,
          birthday: E,
          invite: I = null,
          giftCodeSKUId: N = null,
          promoEmailConsent: v = null,
          usedUsernameSuggestion: C = null,
        } = e;
        return (
          l.Z.dispatch({ type: "REGISTER" }),
          null != E &&
            ((0, h.Z)(E, g.jXE.REGISTER),
            d.default.track(g.rMx.AGE_GATE_ACTION, {
              source: f.L0.REGISTER,
              action: f.Al.AGE_GATE_SUBMITTED,
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
                d.default.track(g.rMx.USER_AGE_SUBMITTED, { age_bucket: t }));
            })(E)),
          u.Z.post({
            url: g.ANM.REGISTER,
            body: {
              fingerprint: c.default.getFingerprint(),
              email: t,
              username: i,
              global_name: m,
              password: x,
              invite: I,
              consent: p,
              phone_token: n,
              date_of_birth: null == E ? void 0 : E.format("YYYY-MM-DD"),
              gift_code_sku_id: N,
              guild_template_code: _,
              promotional_email_opt_in: null == v ? void 0 : v.checked,
            },
            trackedActionData: {
              event: s.NetworkActionNames.USER_REGISTER,
              properties: {
                invite_code: I,
                used_username_suggestion: C,
                promotional_email_opt_in: null == v ? void 0 : v.checked,
                promotional_email_pre_checked:
                  null == v ? void 0 : v.preChecked,
                was_unique_username: !0,
              },
            },
            rejectWithError: !1,
          }).then(
            (e) => {
              l.Z.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                d.default.track(g.rMx.AGE_GATE_ACTION, {
                  source: f.L0.REGISTER,
                  action: f.Al.AGE_GATE_SUCCESS,
                });
            },
            (e) => {
              let t = new o.Z(e);
              throw (
                (l.Z.dispatch({ type: "REGISTER_FAILURE", error: t }),
                null != t.getFieldErrors("date_of_birth") &&
                  a.wE(f.L0.REGISTER),
                d.default.track(g.rMx.REGISTER_SUBMIT_ERRORED, {
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
                t)
              );
            },
          )
        );
      }
    },
    853268: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        l = n(481060),
        o = n(600164),
        a = n(388905),
        c = n(262437),
        d = n(232186);
      function u(e) {
        let {
          value: t,
          onChange: n,
          subText: r,
          muted: u,
          marginTopStyle: h,
        } = e;
        return (0, i.jsx)(o.Z, {
          className: null != h ? h : d.marginTop20,
          align: o.Z.Align.CENTER,
          children: (0, i.jsx)(l.Checkbox, {
            value: t,
            type: l.Checkbox.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, i.jsx)(a.i_, {
              className: s()({ [c.subText]: !u }),
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
        l = n(593473),
        o = n(442837),
        a = n(544891),
        c = n(108427),
        d = n(601964),
        u = n(896797),
        h = n(129293),
        g = n(388905),
        f = n(981631),
        m = n(388032),
        p = n(232186);
      function x(e, t, n) {
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
      class _ extends (i = s.PureComponent) {
        componentDidMount() {
          let e = (0, h.Z)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
          a.tn
            .post({
              url: f.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
              body: { token: e, pixel_uuid: t.hash, guild_id: t.guild_id },
              oldFormErrors: !0,
              rejectWithError: !0,
            })
            .then(
              (e) => {
                let {
                    body: { guild: t },
                  } = e,
                  n = new d.ZP(t);
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
                className: p.marginBottom8,
                children: m.intl.string(m.t.Z33eiI),
              }),
              (0, r.jsx)(g.DK, {
                children: m.intl.format(m.t.NRWtfH, { guildName: n.name }),
              }),
              (0, r.jsx)(g.zx, {
                className: p.marginTop40,
                onClick: () => t(e),
                children: m.intl.string(m.t.fIv16O),
              }),
              (0, r.jsx)(g.zx, {
                className: p.marginTop8,
                color: g.zx.Colors.LINK,
                look: g.zx.Looks.LINK,
                onClick: () => {
                  t(f.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                },
                children: m.intl.string(m.t["cGmT/P"]),
              }),
            ],
          });
        }
        renderError() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, r.jsxs)(g.ZP, {
            children: [
              (0, r.jsx)(g.Ee, { src: n(105020), className: p.marginBottom20 }),
              (0, r.jsx)(g.Dx, {
                className: p.marginBottom8,
                children: m.intl.string(m.t.ox9hIS),
              }),
              (0, r.jsx)(g.DK, { children: m.intl.string(m.t["/dcuR0"]) }),
              (0, r.jsx)(g.zx, {
                className: p.marginTop40,
                onClick: () => t(e),
                children: m.intl.string(m.t.fIv16O),
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
          super(...e), x(this, "state", { busy: !0, success: !1, guild: null });
        }
      }
      x(_, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) }),
        (t.Z = o.ZP.connectStores([u.Z], () => ({
          defaultRoute: u.Z.defaultRoute,
        }))(_));
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
        l = n(742593),
        o = n(180483);
      function a(e) {
        let { channel: t } = e,
          n = (0, s.Th)(t.type);
        return (0, i.jsxs)("div", {
          className: o.channelInfoContainer,
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
        return (0, i.jsxs)("div", {
          className: o.container,
          children: [
            (0, i.jsx)(l.HZ, {
              className: o.statusContainer,
              guildId: n.guild_id,
              guildEvent: n,
              eventPreview: n,
            }),
            (0, i.jsx)(l.Rf, {
              name: n.name,
              description: n.description,
              guildId: n.guild_id,
            }),
            null != t && n.channel_id === t.id
              ? (0, i.jsx)(a, { channel: t })
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
        l = n.n(s),
        o = n(442837),
        a = n(481060),
        c = n(144114),
        d = n(742458),
        u = n(541692),
        h = n(952802),
        g = n(388905),
        f = n(815660),
        m = n(388032),
        p = n(652849),
        x = n(232186);
      t.Z = () => {
        let [e, t] = r.useState(""),
          [s, _] = r.useState(""),
          [E, I] = r.useState(!1),
          [N, v] = r.useState(!1),
          [C, b] = r.useState(null),
          [T, Z] = r.useState(null),
          A = (0, o.e7)([u.Z], () => u.Z.getCountryCode()),
          S = A.code.split(" ")[0],
          j = async () => {
            try {
              await c.Z.resendCode(e);
            } catch (e) {
              Z(e.body.message);
            }
          },
          R = async () => {
            I(!0);
            try {
              let { token: t } = await c.Z.verifyPhone(S + e, s);
              b(null), Z(null), v(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
              e.body.message
                ? (b(null), Z(e.body.message))
                : (b(e.body.phone), Z(e.body.code));
            } finally {
              I(!1);
            }
          },
          P = (0, i.jsxs)(g.ZP, {
            children: [
              (0, i.jsx)(g.Ee, { src: n(292824) }),
              (0, i.jsxs)(g.Dx, {
                className: l()(
                  x.marginTop20,
                  p.flex,
                  p.justifyCenter,
                  p.alignCenter,
                ),
                children: [
                  m.intl.string(m.t.WWzQtb),
                  (0, i.jsx)(a.CircleCheckIcon, {
                    size: "md",
                    color: "currentColor",
                    className: x.marginLeft8,
                  }),
                ],
              }),
            ],
          });
        return N
          ? P
          : (0, i.jsxs)(g.ZP, {
              children: [
                (0, i.jsx)(g.Dx, { children: m.intl.string(m.t.o4JNrK) }),
                (0, i.jsx)(g.DK, {
                  className: x.marginTop8,
                  children: m.intl.string(m.t.y0tVbm),
                }),
                (0, i.jsxs)(g.gO, {
                  className: x.marginTop20,
                  children: [
                    (0, i.jsx)(h.Z, {
                      label: m.intl.string(m.t.eJnn09),
                      alpha2: A.alpha2,
                      countryCode: S,
                      value: e,
                      autoComplete: "off",
                      spellCheck: "false",
                      onChange: t,
                      forceMode: d.Nz.PHONE,
                      error: C,
                    }),
                    (0, i.jsx)(g.II, {
                      className: x.marginTop20,
                      label: m.intl.string(m.t.OdzNbm),
                      value: s,
                      onChange: _,
                      maxLength: f.z,
                      error: T,
                    }),
                    (0, i.jsx)(g.zx, {
                      size: g.zx.Sizes.SMALL,
                      look: g.zx.Looks.LINK,
                      onClick: j,
                      children: m.intl.string(m.t["5b60go"]),
                    }),
                    (0, i.jsx)(g.zx, {
                      className: x.marginTop20,
                      onClick: R,
                      submitting: E,
                      children: m.intl.string(m.t.i4jeWV),
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
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(882037),
        s = n(853268),
        l = n(388032),
        o = n(232186);
      function a() {
        let { required: e, checked: t } = (0, r.MD)();
        return e
          ? (0, i.jsx)(s.Z, {
              value: t,
              subText: l.intl.string(l.t["0p3R09"]),
              onChange: r.ZJ,
              marginTopStyle: o.marginTop8,
              muted: !0,
            })
          : null;
      }
    },
    362762: function (e, t, n) {
      var i,
        r,
        s,
        l,
        o = n(442837),
        a = n(570140),
        c = n(981631);
      let d = {};
      class u extends (l = o.ZP.Store) {
        getState(e) {
          return d[e];
        }
      }
      (s = "CodedLinkNativeAppStateStore"),
        (r = "displayName") in (i = u)
          ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = s),
        (t.Z = new u(a.Z, {
          NATIVE_APP_MODAL_OPENING: function (e) {
            let { code: t } = e;
            d[t] = c.kEZ.OPENING;
          },
          NATIVE_APP_MODAL_OPENED: function (e) {
            let { code: t } = e;
            d[t] = c.kEZ.OPEN;
          },
          NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
            let { code: t } = e;
            d[t] = c.kEZ.OPEN_FAIL;
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
          return x;
        },
        cK: function () {
          return r;
        },
      });
      var i,
        r,
        s,
        l,
        o = n(200651),
        a = n(192379),
        c = n(120356),
        d = n.n(c),
        u = n(841226),
        h = n(982823);
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
      ((i = r || (r = {})).SIZE_40 = "SIZE_40"), (i.SIZE_60 = "SIZE_60");
      let f = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        m = n(515695);
      class p extends (s = a.PureComponent) {
        render() {
          let { className: e, text: t, ...n } = this.props;
          return (0, o.jsx)("div", {
            style: {
              width: n.size,
              height: n.size,
              backgroundColor: n.bgColor,
            },
            className: d()(h.qrCodeContainer, e),
            children: (0, o.jsx)(u.default, { value: t, level: "M", ...n }),
          });
        }
      }
      g(p, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class x extends (l = a.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            t = f[null != e ? e : "SIZE_40"];
          return (0, o.jsxs)("div", {
            className: h.qrCodeOverlayContainer,
            children: [
              (0, o.jsx)(p, { ...this.props }),
              (0, o.jsx)("div", {
                className: h.qrCodeOverlay,
                children: (0, o.jsx)("img", {
                  className: h[t],
                  src: m,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      g(x, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (t.ZP = p);
    },
    390072: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        r = n(192379),
        s = n(481060),
        l = n(725436),
        o = n(997321),
        a = n(217804),
        c = n(765305),
        d = n(295267);
      function u(e) {
        let { guildScheduledEvent: t, channel: n, onClose: u } = e,
          h = t.entity_type === c.WX.EXTERNAL,
          g = r.useCallback((e) => (0, o.Qt)(t, u)(e), [t, u]),
          f = (0, a.u)(t, n);
        if (null == f) return null;
        let { IconComponent: m, locationName: p } = f,
          x = (0, i.jsxs)(i.Fragment, {
            children: [
              null != m &&
                (0, i.jsx)(m, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  className: d.channelIcon,
                }),
              (0, i.jsx)(s.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: d.locationText,
                children: (0, l.m)(p, !0),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: d.row,
          children:
            null != g
              ? (0, i.jsx)(s.Clickable, {
                  className: h ? d.externalLocation : d.channelLocation,
                  onClick: g,
                  children: x,
                })
              : x,
        });
      }
    },
    844800: function (e, t, n) {
      var i,
        r,
        s,
        l,
        o = n(442837),
        a = n(570140);
      let c = !1,
        d = null,
        u = null;
      class h extends (l = o.ZP.Store) {
        getState() {
          return { verifySuccess: c, verifyErrors: d, redirectGuildId: u };
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
        (t.Z = new h(a.Z, {
          HUB_VERIFY_EMAIL_SUCCESS: function (e) {
            let { guildId: t } = e;
            (c = !0), (d = null), (u = t);
          },
          HUB_VERIFY_EMAIL_FAILURE: function (e) {
            let { errors: t } = e;
            (c = !1), (d = t);
          },
        }));
    },
    580497: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var i = n(512722),
        r = n.n(i),
        s = n(525654),
        l = n.n(s),
        o = n(39612),
        a = n(271579),
        c = n(756647),
        d = n(703656),
        u = n(314897),
        h = n(896797),
        g = n(626135),
        f = n(954824),
        m = n(981631);
      function p(e) {
        let t = (function (e) {
            var t;
            let n = null === (t = l().os) || void 0 === t ? void 0 : t.family;
            if ("Android" === n || "iOS" === n) {
              let t = u.default.getFingerprint(),
                n = (0, a.WS)();
              return (
                r()(null != e, "generateAppPath: guildId cannot be null"),
                (0, a.ZP)((0, o.z0)(e), {
                  utmSource: "verify_hub_email",
                  fingerprint: t,
                  attemptId: n,
                })
              );
            }
            return "discord://";
          })(e),
          n = (0, a.zS)(t);
        null != n &&
          g.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, c.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          f.Z.launch(t, (e) => {
            !e && (0, d.dL)(h.Z.fallbackRoute);
          });
      }
    },
    637776: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(442837),
        l = n(231239),
        o = n(129293),
        a = n(388905),
        c = n(703656),
        d = n(108427),
        u = n(844800),
        h = n(580497),
        g = n(981631),
        f = n(388032),
        m = n(841094);
      function p(e) {
        let { location: t } = e,
          [p, x] = r.useState(!1),
          {
            verifySuccess: _,
            verifyErrors: E,
            redirectGuildId: I,
          } = (0, s.e7)([u.Z], () => u.Z.getState());
        r.useEffect(() => {
          let e = (0, o.Z)(t);
          l.Z.verify(e), (0, d.e)("verify_hub_email");
        }, [t]);
        let N = () => {
          (0, h.Z)(I), x(!0);
        };
        return p
          ? (0, i.jsxs)(a.ZP, {
              children: [
                (0, i.jsx)(a.Dx, {
                  className: m.title,
                  children: f.intl.string(f.t.csrAMD),
                }),
                (0, i.jsx)(a.DK, {
                  className: m.subtitle,
                  children: f.intl.string(f.t["m1+IBg"]),
                }),
                (0, i.jsx)(a.zx, {
                  className: m.spacedButton,
                  onClick: () => (0, c.uL)(g.Z5c.CHANNEL(I)),
                  children: f.intl.string(f.t.fIv16O),
                }),
              ],
            })
          : _
            ? (0, i.jsxs)(a.ZP, {
                children: [
                  (0, i.jsx)(a.Ee, { className: m.image, src: n(73962) }),
                  (0, i.jsx)(a.Dx, {
                    className: m.title,
                    children: f.intl.string(f.t.dAfGb2),
                  }),
                  (0, i.jsx)(a.zx, {
                    onClick: N,
                    children: f.intl.string(f.t.uJWIj4),
                  }),
                ],
              })
            : null != E
              ? (0, i.jsxs)(a.ZP, {
                  children: [
                    (0, i.jsx)(a.Ee, { className: m.image, src: n(375673) }),
                    (0, i.jsx)(a.Dx, {
                      className: m.title,
                      children: f.intl.string(f.t.PCgG39),
                    }),
                    (0, i.jsx)(a.DK, {
                      className: m.subtitle,
                      children: f.intl.string(f.t.tQpeAw),
                    }),
                    (0, i.jsx)(a.zx, {
                      onClick: N,
                      children: f.intl.string(f.t.uJWIj4),
                    }),
                  ],
                })
              : (0, i.jsxs)(a.ZP, {
                  children: [
                    (0, i.jsx)(a.Ee, { className: m.image, src: n(892235) }),
                    (0, i.jsx)(a.Dx, {
                      className: m.title,
                      children: f.intl.string(f.t["0c8+5u"]),
                    }),
                    (0, i.jsx)(a.DK, {
                      className: m.subtitle,
                      children: f.intl.string(f.t.ULTCBA),
                    }),
                    (0, i.jsx)(a.zx, {
                      submitting: !0,
                      color: a.zx.Colors.PRIMARY,
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
          return S;
        },
        JI: function () {
          return Z;
        },
        UM: function () {
          return P;
        },
        V6: function () {
          return j;
        },
        WT: function () {
          return v;
        },
        X7: function () {
          return C;
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
        l = n.n(s),
        o = n(481060),
        a = n(388905),
        c = n(118012),
        d = n(925329),
        u = n(372769),
        h = n(768581),
        g = n(51144),
        f = n(245335),
        m = n(981631),
        p = n(888592),
        x = n(388032),
        _ = n(105401);
      let E = 100,
        I = (e) => {
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
        N = (e) => e.target_type === f.Iq.STREAM && null != e.target_user,
        v = (e) => {
          var t;
          return (
            (null === (t = e.channel) || void 0 === t ? void 0 : t.type) ===
            m.d4z.GROUP_DM
          );
        },
        C = (e) => null == e.channel && null == e.guild && null != e.inviter,
        b = (e) => {
          var t;
          let n = I(e);
          return (
            (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t
              ? t
              : 0) > E
          );
        },
        T = (e) => e.state === m.r2o.ACCEPTED,
        Z = (e) => {
          let { guild_scheduled_event: t } = e;
          return null != t || !1;
        },
        A = (e) => !Z(e) && (!!C(e) || (null != e.inviter && !T(e) && !b(e))),
        S = (e) => {
          let { guild: t, user: n, application: r } = e;
          if (null != r)
            return (0, i.jsx)(d.Z, {
              className: _.appIcon,
              game: r,
              size: _.appIconSize,
            });
          if (null != n)
            return (0, i.jsx)(a.qE, {
              src: n.getAvatarURL(void 0, 100),
              size: o.AvatarSizes.DEPRECATED_SIZE_100,
              className: _.avatar,
            });
          if (null != t)
            return (0, i.jsx)(a.Vj, {
              guild: t,
              size: a.Vj.Sizes.LARGER,
              className: _.guildIcon,
              animate: !0,
            });
          else return null;
        };
      function j(e) {
        var t;
        let { invite: n, textClassName: r, className: s } = e,
          o = I(n);
        return null == o ||
          A(n) ||
          (null == n
            ? void 0
            : null === (t = n.guild) || void 0 === t
              ? void 0
              : t.id) === p.fQ
          ? null
          : (0, i.jsx)(a.EJ, {
              className: l()(_.activityCount, s),
              online: o.onlineCount,
              total: o.memberCount,
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
                : N(t) && null != t.target_user
                  ? h.ZP.getUserAvatarURL(t.target_user)
                  : A(t) && null != t.inviter
                    ? h.ZP.getUserAvatarURL(t.inviter)
                    : null,
            [t, n],
          ),
          l = x.intl.string(x.t["3rE1Pz"]);
        if (v(t)) {
          var c, d;
          l =
            (null === (c = t.channel) || void 0 === c ? void 0 : c.name) !=
              null &&
            (null === (d = t.inviter) || void 0 === d ? void 0 : d.username) !=
              null
              ? x.intl.format(x.t.Lu4h19, { username: t.inviter.username })
              : x.intl.string(x.t.OsdY8P);
        } else
          N(t) && null != t.target_user
            ? (l = x.intl.formatToPlainString(x.t.x2L32d, {
                username: t.target_user.username,
              }))
            : T(t)
              ? (l = x.intl.string(x.t["FDsl+P"]))
              : A(t) &&
                null != t.inviter &&
                (l = x.intl.format(x.t.spU2mJ, {
                  username: g.ZP.getFormattedName(t.inviter),
                }));
        return (0, i.jsxs)("div", {
          className: _.inviteJoinContainer,
          children: [
            null != s &&
              (0, i.jsx)("div", {
                className: _.inviterIconWrapper,
                children: (0, i.jsx)(a.qE, {
                  src: s,
                  size: o.AvatarSizes.SIZE_24,
                }),
              }),
            (0, i.jsx)(a.DK, {
              className: _.__invalid_inviteJoinSubTitle,
              children: l,
            }),
          ],
        });
      }
      function P(e) {
        let t,
          n,
          r,
          {
            user: s,
            guild: l,
            channel: d,
            application: h,
            showBigUserIcon: f,
          } = e;
        if (null != l)
          f &&
            null == h &&
            (t = (0, i.jsx)(a.Vj, { guild: l, size: a.Vj.Sizes.SMALL })),
            (n = l.name),
            null != h &&
              ((n = h.name),
              (r = (0, i.jsxs)("div", {
                className: _.inviteJoinContainer,
                children: [
                  (0, i.jsx)(a.DK, {
                    className: _.appIn,
                    children: x.intl.string(x.t["3gg9fH"]),
                  }),
                  (0, i.jsxs)("div", {
                    className: _.guildContainer,
                    children: [
                      (0, i.jsx)(a.Vj, { guild: l, size: a.Vj.Sizes.SMALL }),
                      (0, i.jsx)(c.Z, {
                        className: _.appGuildName,
                        color: c.Z.Colors.CUSTOM,
                        tag: "span",
                        size: c.Z.Sizes.SIZE_24,
                        children: l.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != d) {
          if (null == s) throw Error("no inviter in group DM invite");
          let e = g.ZP.getFormattedName(s);
          null != d.name && "" !== d.name
            ? ((n = d.name),
              null != d.icon &&
                (t = (0, i.jsx)(a.MC, {
                  channel: d,
                  size: o.AvatarSizes.SIZE_32,
                })))
            : (n = e);
        } else if (null != s) {
          let e = g.ZP.getFormattedName(s);
          (n = x.intl.formatToPlainString(x.t["4aF92d"], { username: e })),
            (r = (0, i.jsx)(a.DK, {
              className: _.directInviteSubTitle,
              children: x.intl.format(x.t.Quj7HR, { username: e }),
            }));
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(a.Dx, {
              className: _.title,
              children: [
                null != l
                  ? (0, i.jsx)(u.Z, {
                      guild: l,
                      className: _.guildBadge,
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
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        s = n(973616),
        l = n(131704),
        o = n(601964),
        a = n(598077),
        c = n(230224),
        d = n(258356),
        u = n(981631),
        h = n(388032),
        g = n(461342);
      let f = (e) => {
        let { state: t } = e;
        switch (t) {
          case u.r2o.ACCEPTING:
          case u.r2o.APP_OPENING:
            return !0;
          default:
            return !1;
        }
      };
      function m(e) {
        let { invite: t, onAcceptInvite: n, disableUser: m = !1 } = e;
        if (null == t) return null;
        let p = null != t.guild ? new o.ZP(t.guild) : null,
          x = null != t.channel ? (0, l.jD)(t.channel) : null,
          _ =
            null != t.target_application
              ? new s.ZP(t.target_application)
              : null,
          E = m || null == t.inviter ? null : new a.Z(t.inviter),
          I =
            !(
              (null != t.approximate_member_count &&
                t.approximate_member_count > c.mx) ||
              (null != p && p.hasFeature(u.oNc.COMMUNITY))
            ) &&
            null != E &&
            (0, c.WT)(t),
          N = f(t),
          v = { invite: t, user: E, guild: p, channel: x, application: _ };
        return (0, c.JI)(t)
          ? (0, i.jsx)(d.Z, {
              invite: t,
              channel: x,
              isSubmitting: N,
              onAcceptInvite: n,
            })
          : (0, i.jsxs)("div", {
              className: g.container,
              children: [
                (0, i.jsx)(c.GB, {
                  application: _,
                  guild: p,
                  user: I || (0, c.X7)(t) ? E : null,
                }),
                (0, c.X7)(t)
                  ? null
                  : (0, i.jsx)(c.jq, { ...v, showBigUserIcon: I }),
                (0, i.jsx)(c.UM, { ...v, showBigUserIcon: I }),
                (0, i.jsx)(c.V6, { ...v }),
                (0, i.jsx)(r.Button, {
                  onClick: n,
                  submitting: N,
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
        l = n(192379),
        o = n(642128),
        a = n(442837),
        c = n(481060),
        d = n(447543),
        u = n(587444),
        h = n(393238),
        g = n(388905),
        f = n(108427),
        m = n(314897),
        p = n(701190),
        x = n(626135),
        _ = n(768581),
        E = n(823379),
        I = n(264229),
        N = n(230224),
        v = n(617730),
        C = n(258356),
        b = n(981631),
        T = n(388032),
        Z = n(357070);
      function A() {
        return (0, s.jsx)("div", {
          className: Z.centerFlex,
          children: (0, s.jsx)(c.Spinner, {}),
        });
      }
      ((r = i || (i = {}))[(r.LOADING = 0)] = "LOADING"),
        (r[(r.DETAILS = 1)] = "DETAILS"),
        (r[(r.ERROR = 2)] = "ERROR");
      let S = (e) => {
        let t =
          (null == e ? void 0 : e.state) == null &&
          (null == e ? void 0 : e.channel) == null;
        if (null == e || null == e.state || t) return 0;
        let n = e.state;
        switch (n) {
          case b.r2o.RESOLVED:
          case b.r2o.ACCEPTED:
          case b.r2o.APP_NOT_OPENED:
          case b.r2o.APP_OPENED:
          case b.r2o.ACCEPTING:
          case b.r2o.APP_OPENING:
            return 1;
          case b.r2o.EXPIRED:
          case b.r2o.BANNED:
          case b.r2o.ERROR:
            return 2;
          case b.r2o.RESOLVING:
            return 0;
          default:
            (0, E.vE)(n);
        }
      };
      function j(e) {
        let { invite: t, onAcceptInvite: n } = e;
        if ((null == t ? void 0 : t.state) === b.r2o.BANNED)
          return (0, s.jsx)(u.u, {
            text: T.intl.string(T.t["5AkWAQ"]),
            buttonCta: T.intl.string(T.t["8osdkp"]),
            onClick: n,
          });
        return (0, s.jsx)(u.u, {
          text: T.intl.string(T.t["usP+MT"]),
          buttonCta: T.intl.string(T.t["8osdkp"]),
          onClick: n,
        });
      }
      function R(e) {
        let {
            children: t,
            cardChildren: n,
            startAnimHeightPx: i,
            innerStyle: r,
            ...a
          } = e,
          { invite: d } = a,
          [u, g] = l.useState(S(d)),
          { ref: f, height: m } = (0, h.Z)(),
          p = (0, c.useSpring)({
            height:
              null != m && 0 !== m ? "".concat(m, "px") : "".concat(i, "px"),
            config: o.config.stiff,
          });
        return (
          l.useEffect(() => {
            let e = S(d);
            e !== u && g(e);
          }, [d, u]),
          (0, s.jsxs)(o.animated.div, {
            className: Z.inviteCard,
            style: p,
            children: [
              (0, s.jsx)(o.animated.div, {
                className: Z.inviteChildContainer,
                style: p,
                children: (0, s.jsx)("section", {
                  ref: f,
                  className: null == r ? void 0 : r(u),
                  children: t(u),
                }),
              }),
              n,
            ],
          })
        );
      }
      function P(e) {
        let { invite: t } = e;
        if (null == t || !(0, N.JI)(t)) return null;
        let n = (e) => {
          if (null == t) return null;
          if (1 === e) return (0, s.jsx)(C.X, { invite: t });
          return null;
        };
        return (0, s.jsx)(R, {
          startAnimHeightPx: 0,
          innerStyle: () => Z.guildInfoInner,
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
                return (0, s.jsx)(v.Z, { ...e, invite: t });
              case 2:
                return (0, s.jsx)(j, { ...e, invite: t });
              default:
                return (0, s.jsx)(A, {});
            }
          },
          i = {
            1: Z.inviteCardInner,
            2: Z.inviteCardInnerError,
            0: Z.inviteCardInnerLoading,
          };
        return (0, s.jsx)(R, {
          startAnimHeightPx: 200,
          innerStyle: (e) => i[e],
          ...e,
          children: (e) => n(e),
        });
      }
      function O(e) {
        let { invite: t, onAcceptInvite: n } = e,
          { guild: i } = null != t ? t : {},
          r = {};
        if ((null == i ? void 0 : i.splash) != null) {
          let e = _.ZP.getGuildSplashURL({ id: i.id, splash: i.splash });
          null != e &&
            ((r.backgroundImage = "url(".concat(e, ")")),
            (r.backgroundSize = "cover"));
        }
        return (0, s.jsxs)(g.ZP, {
          theme: b.BRd.DARK,
          className: Z.splashBackground,
          style: r,
          contentClassName: Z.centerAuthBoxContent,
          children: [
            (0, s.jsx)(L, { ...e, onAcceptInvite: n }),
            (0, s.jsx)(P, { ...e }),
          ],
        });
      }
      function y(e) {
        let { inviteKey: t, transitionTo: n } = e,
          i = (0, a.e7)([p.Z], () => p.Z.getInvite(t));
        return (
          l.useEffect(() => {
            (0, f.e)("invite_mobile");
          }, []),
          l.useEffect(() => {
            null != i &&
              i.state === b.r2o.RESOLVED &&
              x.default.track(
                b.rMx.INVITE_VIEWED,
                {
                  invite_code: t,
                  friends_count: null == i ? void 0 : i.friends_count,
                },
                { flush: !0 },
              );
          }, [i, t]),
          (0, s.jsx)(O, {
            invite: i,
            onAcceptInvite: (e) => {
              !(function (e, t, n) {
                var i, r, s;
                null == e || e.preventDefault(),
                  x.default.track(b.rMx.INVITE_APP_OPENED, {
                    invite_code: (0, I.jX)(t),
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
                let l =
                    null != n &&
                    n.state !== b.r2o.EXPIRED &&
                    n.state !== b.r2o.BANNED
                      ? t
                      : void 0,
                  o = m.default.getFingerprint(),
                  a = null != o ? o : m.default.getId(),
                  c =
                    null != n && (null == n ? void 0 : n.type) != null
                      ? Number(null == n ? void 0 : n.type)
                      : void 0;
                d.Z.openApp(l, void 0, a, void 0, c);
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
          return f;
        },
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        s = n(565138),
        l = n(372769),
        o = n(742593),
        a = n(390072),
        c = n(601964),
        d = n(230224),
        u = n(388032),
        h = n(161669);
      function g(e) {
        var t;
        let {
          guildScheduledEvent: n,
          channel: s,
          onAcceptInvite: l,
          isSubmitting: c,
        } = e;
        return (0, i.jsxs)("div", {
          className: h.guildEventCard,
          children: [
            (0, i.jsx)(o.ZP, {
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
                children: (0, i.jsx)(a.Z, {
                  guildScheduledEvent: n,
                  channel: s,
                }),
              }),
            (0, i.jsx)(r.Button, {
              className: h.acceptButton,
              color: r.Button.Colors.GREEN,
              onClick: l,
              submitting: c,
              children: u.intl.string(u.t.riu2R0),
            }),
          ],
        });
      }
      function f(e) {
        var t;
        let { invite: n } = e,
          o = null != n.guild ? new c.ZP(n.guild) : null;
        if (null == o) return null;
        let a = null !== (t = o.description) && void 0 !== t ? t : "";
        return (0, i.jsxs)("div", {
          className: h.guildInfoCard,
          children: [
            (0, i.jsx)(r.Heading, {
              className: h.presentedBy,
              variant: "text-sm/medium",
              children: u.intl.string(u.t.Eabu19),
            }),
            (0, i.jsxs)("div", {
              className: h.guildContainer,
              children: [
                (0, i.jsx)(s.Z, {
                  guild: o,
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
                        o.name,
                        (0, i.jsx)(l.Z, {
                          guild: o,
                          className: h.guildBadge,
                          tooltipPosition: "left",
                        }),
                      ],
                    }),
                    (0, i.jsx)(d.V6, {
                      invite: n,
                      textClassName: h.guildInfoMemberCountText,
                      className: h.guildInfoMemberCount,
                    }),
                  ],
                }),
              ],
            }),
            a.length > 0 &&
              (0, i.jsx)("details", {
                className: h.guildDescriptionContainer,
                children: (0, i.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: a,
                }),
              }),
          ],
        });
      }
      function m(e) {
        let { invite: t, channel: n, isSubmitting: r, onAcceptInvite: s } = e,
          { guild_scheduled_event: l } = t;
        return null != l
          ? (0, i.jsx)(g, {
              guildScheduledEvent: l,
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
      async function l(e) {
        let {
          body: { handoff_token: t },
        } = await r.tn.post({
          url: s.ANM.HANDOFF,
          body: { key: e },
          oldFormErrors: !0,
          retries: 1,
          rejectWithError: !1,
        });
        if (null != t) return t;
        throw Error("Missing handoff token!");
      }
      t.Z = {
        generateNonce: function () {
          return (0, i.Z)();
        },
        createHandoffToken: l,
      };
    },
    86779: function (e, t, n) {
      n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(773603);
      var i,
        r,
        s = n(200651),
        l = n(192379),
        o = n(593473),
        a = n(756647),
        c = n(442837),
        d = n(544891),
        u = n(433517),
        h = n(481060),
        g = n(570140),
        f = n(893776),
        m = n(314897),
        p = n(626135),
        x = n(70956),
        _ = n(970648),
        E = n(981631),
        I = n(388032),
        N = n(924469);
      let v = "mweb_handoff_nonce",
        C = "mweb_handoff_nonce_expiration",
        b = 1 * x.Z.Millis.MINUTE;
      ((r = i || (i = {})).NONCE_MISSING = "nonce_missing"),
        (r.NONCE_EXPIRED = "nonce_expired"),
        (r.NULL_HANDOFF_TOKEN = "deep_link_failed"),
        (r.HANDOFF_EXCHANGE = "handoff_exchange");
      let T = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        Z = new Set(["deep_link_failed"]),
        A = () => {
          u.K.remove(v), u.K.remove(C);
        };
      t.Z = () => {
        let e = (0, c.e7)([m.default], () => m.default.getFingerprint()),
          { fingerprint: t, handoff_token: n } = (0, o.parse)(
            window.location.search,
          ),
          i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
          r = null != i ? i : null !== e ? e : void 0;
        l.useEffect(() => {
          null !== i &&
            e !== i &&
            g.Z.dispatch({ type: "FINGERPRINT", fingerprint: i });
        }, [i, e]);
        let [x, S] = l.useState(null),
          j = l.useCallback(
            (e) => {
              S(e),
                p.default.track(
                  E.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                  { reason: e, fingerprint: (0, a.K)(r) },
                  { fingerprint: r },
                );
            },
            [S, r],
          ),
          R = u.K.get(v);
        if (
          ("null" === n && null === x && j("deep_link_failed"),
          null != n &&
            "null" !== n &&
            null == R &&
            null === x &&
            j("nonce_missing"),
          l.useEffect(() => {
            if (null != R) {
              let e = u.K.get(C);
              (null == e || Date.now() >= e) && (j("nonce_expired"), A());
            }
          }, [R, j]),
          l.useEffect(() => {
            null != n &&
              "null" !== n &&
              null != R &&
              null == x &&
              d.tn
                .post({
                  url: E.ANM.HANDOFF_EXCHANGE,
                  body: { key: R, handoff_token: n },
                  rejectWithError: !0,
                })
                .then((e) => f.Z.loginToken(e.body.token, !1))
                .then(() => {
                  p.default.track(E.rMx.LOGIN_SUCCESSFUL, {
                    source: E.uRl.MOBILE_WEB_HANDOFF,
                    is_new_user: !1,
                    fingerprint: (0, a.K)(r),
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
          }, [n, R, x, r, j]),
          null == r)
        )
          return null;
        let P = (() => {
          if (null == x)
            return (0, s.jsxs)(s.Fragment, {
              children: [
                I.intl.string(I.t.uJ1Jsb),
                (0, s.jsx)("br", {}),
                I.intl.string(I.t.GHVWAg),
              ],
            });
          if (Z.has(x)) return I.intl.string(I.t.EPt55u);
          if (T.has(x)) return I.intl.string(I.t.g87kTk);
        })();
        return null != x && Z.has(x)
          ? (0, s.jsx)("div", {
              className: N.errorContainer,
              children: (0, s.jsx)(h.Text, {
                color: "interactive-normal",
                variant: "text-sm/semibold",
                children: P,
              }),
            })
          : (0, s.jsxs)("div", {
              className: N.container,
              children: [
                (0, s.jsx)(h.Text, {
                  variant: "text-sm/semibold",
                  children: P,
                }),
                (0, s.jsx)(h.Button, {
                  color: h.Button.Colors.BRAND_INVERTED,
                  onClick: () => {
                    let e = _.Z.generateNonce();
                    u.K.set(v, e), u.K.set(C, Date.now() + b);
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
                      p.default.track(
                        E.rMx.DEEP_LINK_CLICKED,
                        {
                          fingerprint: (0, a.K)(r),
                          source: "mobile_web_handoff",
                          destination: E.x0X,
                        },
                        { fingerprint: r, flush: !0 },
                      ),
                      (window.location.href = t.toString());
                  },
                  children: (0, s.jsx)(h.Text, {
                    className: N.buttonText,
                    variant: "text-sm/semibold",
                    children: I.intl.string(I.t["NcC75+"]),
                  }),
                }),
              ],
            });
      };
    },
    913583: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(990547),
        s = n(481060),
        l = n(213609),
        o = n(388905),
        a = n(760213),
        c = n(388032),
        d = n(99375);
      function u(e) {
        let { onDismiss: t } = e;
        return (
          (0, l.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
          }),
          (0, i.jsxs)(o.ZP, {
            className: d.chooseAccountAuthBox,
            children: [
              (0, i.jsx)(o.Dx, { children: c.intl.string(c.t["bVbB6+"]) }),
              (0, i.jsx)(s.Text, {
                className: d.chooseAccountHelpText,
                variant: "text-md/normal",
                color: "header-secondary",
                children: c.intl.string(c.t["0M5fNz"]),
              }),
              (0, i.jsx)(a.Z, {
                actionText: c.intl.string(c.t["DSN+h4"]),
                onAction: (e) => {
                  e === a.W.LOGIN_REQUIRED && t();
                },
              }),
              (0, i.jsx)("div", {
                className: d.actions,
                children: (0, i.jsx)(s.Button, {
                  className: d.__invalid_chooseAccountButton,
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
    106371: function (e, t, n) {
      var i = n(818083);
      let r = (0, i.B)({
        kind: "user",
        id: "2024-08_reaction_push_notifications_user",
        label: "In App Notifications for Reactions",
        defaultConfig: {
          enableInAppNotifications: !1,
          enableNotificationsForAllReactions: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Enable In App Notifications for Reactions (First Reaction)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !1,
            },
          },
          {
            id: 2,
            label: "Enable In App Notifications for Reactions (All Reactions)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !0,
            },
          },
          {
            id: 3,
            label: "Enable In App Notifications for Reactions (All Reactions)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !0,
            },
          },
        ],
      });
      (0, i.B)({
        kind: "guild",
        id: "2024-08_reaction_push_notifications_guild",
        label: "In App Notifications for Reactions (Guild)",
        defaultConfig: { enableInAppNotifications: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable In App Notifications for Reactions",
            config: { enableInAppNotifications: !0 },
          },
        ],
      }),
        (t.Z = r);
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
    912101: function (e, t, n) {
      let i;
      n(654769);
      (i = n(654769).Z), (t.Z = i);
    },
    172517: function (e, t, n) {
      n.d(t, {
        FW: function () {
          return g;
        },
        Pk: function () {
          return a;
        },
        Rq: function () {
          return m;
        },
        W_: function () {
          return l;
        },
        dK: function () {
          return o;
        },
        qd: function () {
          return f;
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
      function l() {
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
      async function a(e) {
        return (
          r()(null != e.publicKey, "public key cannot be null"),
          u(await window.crypto.subtle.exportKey("spki", e.publicKey))
        );
      }
      function c(e) {
        return btoa(String.fromCharCode(...new Uint8Array(e)))
          .replace(/\//g, "_")
          .replace(/\+/g, "-")
          .replace(/={1,2}$/, "");
      }
      function d(e) {
        return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
      }
      async function u(e) {
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
          i = await h(e, d(t));
        return n.decode(i);
      }
      async function f(e, t) {
        return c(await h(e, d(t)));
      }
      async function m(e, t) {
        t = await g(e, t);
        let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
        if (null == n) throw Error("Invalid encoded user record.");
        let [, i, r, l, o] = n;
        return new s.Z({
          id: i,
          discriminator: r,
          avatar: "0" === l ? null : l,
          username: o,
        });
      }
    },
    654769: function (e, t, n) {
      let i;
      n(47120), n(177593), n(773603);
      var r,
        s = n(392711),
        l = n.n(s),
        o = n(525654),
        a = n.n(o),
        c = n(579806),
        d = n(933557),
        u = n(710845),
        h = n(474873),
        g = n(135906),
        f = n(592125),
        m = n(292959),
        p = n(699516),
        x = n(246946),
        _ = n(594174),
        E = n(626135),
        I = n(5192),
        N = n(358085),
        v = n(557177),
        C = n(998502),
        b = n(981631);
      function T(e, t, n) {
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
      let Z = N.isPlatformEmbedded && (0, N.isWindows)(),
        A = Z && 10 > parseFloat(c.Z.os.release),
        S = !0;
      if (Z && !A) {
        let [e, , t] = c.Z.os.release.split(".");
        S = parseInt(e) > 10 || parseInt(t) >= 15063;
      }
      let j = new u.Z("NotificationUtils"),
        R =
          (Z && S) ||
          ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
          ("Firefox" === a().name && 52 > parseFloat(a().version));
      async function P() {
        if (void 0 === i) {
          if (
            null === c.Z || void 0 === c.Z
              ? void 0
              : c.Z.features.supports("notifications")
          )
            try {
              i = await C.ZP.invoke("NOTIFICATIONS_GET_SETTINGS");
            } catch (e) {
              j.warn(
                "Fetching native notification settings failed with error: ",
                e,
              ),
                (i = null);
            }
          else i = null;
        }
        return i;
      }
      async function L() {
        let e = await P();
        return (
          (null == e ? void 0 : e.authorizationStatus) === "authorized" &&
          (null == e ? void 0 : e.sound) === !0
        );
      }
      function O(e, t) {
        var n;
        return null !== (n = (0, g.Z)(null != t ? t : h.Z.getSoundpack())[e]) &&
          void 0 !== n
          ? n
          : e;
      }
      async function y(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        if (await L())
          try {
            await C.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
              sound: O(e, n),
            });
            return;
          } catch (e) {
            j.warn("Native notification sound failed with error: ", e);
          }
        (0, v.GN)(e, t, void 0, n);
      }
      let D = l().throttle(y, 1e3, { leading: !0 });
      function k() {
        C.ZP.flashFrame(!1);
      }
      Z &&
        (window.addEventListener("focus", k), C.ZP.on("MAIN_WINDOW_FOCUS", k));
      let w = window.Notification;
      A &&
        (C.ZP.on("NOTIFICATION_CLICK", (e, t) => {
          let n = null[t];
          null != n && (n.onclick(), n.close());
        }),
        C.ZP.send("NOTIFICATIONS_CLEAR"),
        (r = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              C.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(e, { body: t, icon: n }) {
            T(this, "id", w._id++),
              T(this, "title", void 0),
              T(this, "body", void 0),
              T(this, "icon", void 0),
              T(this, "onshow", function () {}),
              T(this, "onclick", function () {}),
              T(this, "onclose", function () {}),
              (this.title = e),
              (this.body = t),
              (this.icon = n),
              setImmediate(() => this.onshow()),
              (null[this.id] = this),
              C.ZP.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
              });
          }
        }),
        T(r, "permission", "granted"),
        T(r, "_id", 0),
        (w = r));
      let B = {};
      if (
        null === c.Z || void 0 === c.Z
          ? void 0
          : c.Z.features.supports("notifications")
      )
        try {
          C.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n) => {
            if ("dismiss" === t) delete B[n];
            else {
              var i, r, s;
              let e = B[n];
              !(null == e
                ? void 0
                : null === (i = e.options) || void 0 === i
                  ? void 0
                  : i.omitClickTracking) &&
                E.default.track(
                  b.rMx.NOTIFICATION_CLICKED,
                  null == e ? void 0 : e.trackingProps,
                ),
                null == e ||
                  null === (s = e.options) ||
                  void 0 === s ||
                  null === (r = s.onClick) ||
                  void 0 === r ||
                  r.call(s);
            }
          }),
            C.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
        } catch (e) {
          j.warn("Native notification setup failed with error: ", e);
        }
      async function M() {
        if (
          null === c.Z || void 0 === c.Z
            ? void 0
            : c.Z.features.supports("notifications")
        ) {
          var e;
          return (
            (null === (e = await P()) || void 0 === e
              ? void 0
              : e.authorizationStatus) === "authorized"
          );
        }
        return null != w && "granted" === w.permission;
      }
      function G(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? D(e, t, n) : y(e, t, n);
      }
      async function F(e) {
        return (
          (x.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !(await M()) ||
          (N.isPlatformEmbedded && !C.ZP.shouldDisplayNotifications())
        );
      }
      async function U(e, t, n, i, r) {
        var s, l, o, a;
        let c;
        if (await F(r)) {
          null != r.sound &&
            !1 !== r.playSoundIfDisabled &&
            G(
              r.sound,
              null !== (s = r.volume) && void 0 !== s ? s : 1,
              r.soundpack,
            );
          return;
        }
        let u =
            null !== (l = null == r ? void 0 : r.tag) && void 0 !== l
              ? l
              : null,
          h = await P(),
          g = (null == h ? void 0 : h.authorizationStatus) === "authorized",
          x = g && (null == h ? void 0 : h.sound) === !0,
          v = (e) => {
            var t;
            null === (t = r.onShown) || void 0 === t || t.call(r),
              !r.omitViewTracking &&
                E.default.track(b.rMx.NOTIFICATION_VIEWED, i),
              R && setTimeout(() => e.close(), 5e3);
          };
        if (
          (null != r.sound &&
            !x &&
            G(
              r.sound,
              null !== (o = r.volume) && void 0 !== o ? o : 1,
              r.soundpack,
            ),
          g)
        ) {
          let s = { title: t, body: n };
          null != e && (s.icon = e),
            (null == r ? void 0 : r.sound) != null &&
              (s.sound = O(r.sound, r.soundpack)),
            (null == r ? void 0 : r.tag) != null && (s.identifier = r.tag);
          let l =
              "string" == typeof (null == i ? void 0 : i.guild_id)
                ? i.guild_id
                : null,
            o =
              "string" == typeof (null == i ? void 0 : i.channel_id)
                ? i.channel_id
                : null,
            a =
              "string" == typeof (null == i ? void 0 : i.notif_user_id)
                ? i.notif_user_id
                : null;
          if (null != o) {
            s.threadIdentifier = o;
            let e = f.Z.getChannel(o);
            null != e && (s.groupName = (0, d.F6)(e, _.default, p.Z));
          }
          null != a &&
            ((s.senderIdentifier = a),
            null != l &&
              (s.senderDisplayName = I.ZP.getName(l, o, _.default.getUser(a))));
          try {
            let e = await C.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", s);
            B[e] = { options: r, trackingProps: i };
            let t = {
              close() {
                try {
                  C.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
                } catch (e) {
                  j.warn("Native notification removal failed with error: ", e);
                }
              },
            };
            return v(t), t;
          } catch (e) {
            j.warn("Native notification failed with error: ", e);
          }
        }
        null != r.sound &&
          g &&
          G(
            r.sound,
            null !== (a = r.volume) && void 0 !== a ? a : 1,
            r.soundpack,
          );
        Z && m.Z.taskbarFlash && C.ZP.flashFrame(!0);
        try {
          c = new w(t, { icon: e, body: n, tag: u, silent: !0 });
        } catch (e) {
          return null;
        }
        return (v(c),
        (c.onclick = () => {
          var e;
          N.isPlatformEmbedded ? C.ZP.focus() : (window.focus(), c.close()),
            !r.omitClickTracking &&
              E.default.track(b.rMx.NOTIFICATION_CLICKED, i),
            null === (e = r.onClick) || void 0 === e || e.call(r);
        }),
        S)
          ? c
          : {
              close() {
                var e;
                null == c ||
                  null === (e = c.onclose) ||
                  void 0 === e ||
                  e.call(c);
              },
            };
      }
      t.Z = {
        hasPermission: M,
        requestPermission: function (e) {
          if (
            null === c.Z || void 0 === c.Z
              ? void 0
              : c.Z.features.supports("notifications")
          )
            try {
              C.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                .then((t) => {
                  e(t);
                })
                .catch(() => {
                  e(!1);
                })
                .finally(() => {
                  i = void 0;
                });
              return;
            } catch (e) {
              j.warn(
                "Native notification authorization failed with error: ",
                e,
              );
            }
          null != w &&
            w.requestPermission(async () => {
              null != e && e(await M());
            });
        },
        showNotification: U,
        disabled: F,
        playNotificationSound: y,
      };
    },
    261121: function (e, t, n) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    610385: function (e, t, n) {
      e.exports = { wrapper: "wrapper_ed5275" };
    },
    687e3: function (e, t, n) {
      e.exports = {
        characterBackground: "characterBackground_bdd070",
        artwork: "artwork_bdd070",
        logoWithText: "logoWithText_bdd070",
        logo: "logo_bdd070",
      };
    },
    93008: function (e, t, n) {
      e.exports = {
        applicationIcon: "applicationIcon_db6d88",
        seasonalIcon: "seasonalIcon_db6d88",
      };
    },
    640936: function (e, t, n) {
      e.exports = {
        authBox: "authBox_c394c0",
        createButton: "createButton_c394c0",
        header: "header_c394c0",
        formContainer: "formContainer_c394c0",
      };
    },
    897927: function (e, t, n) {
      e.exports = {
        button: "button_c85cdc elevated_c85cdc",
        buttonTitle: "buttonTitle_c85cdc",
        card: "card_c85cdc elevated_c85cdc",
        cardContents: "cardContents_c85cdc",
        cardAccentLeft: "cardAccentLeft_c85cdc",
        cardAccentRight: "cardAccentRight_c85cdc",
      };
    },
    32817: function (e, t, n) {
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
    360860: function (e, t, n) {
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
    854674: function (e, t, n) {
      e.exports = {
        column: "column_ef5bab",
        container: "container_ef5bab",
        content: "content_ef5bab",
      };
    },
    240854: function (e, t, n) {
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
    57717: function (e, t, n) {
      e.exports = {
        container: "container_aaa004",
        buttonColumn: "buttonColumn_aaa004",
      };
    },
    823793: function (e, t, n) {
      e.exports = { image: "image_bcfea3" };
    },
    272786: function (e, t, n) {
      e.exports = {
        container: "container_effbe2",
        inner: "inner_effbe2",
        disabled: "disabled_effbe2",
        input: "input_effbe2",
        tag: "tag_effbe2",
        small: "small_effbe2",
        medium: "medium_effbe2",
        large: "large_effbe2",
        richTag: "richTag_effbe2",
        richTagInput: "richTagInput_effbe2",
        tagLabel: "tagLabel_effbe2",
        tagRoleColor: "tagRoleColor_effbe2",
        close: "close_effbe2",
        iconLayout: "iconLayout_effbe2",
        iconContainer: "iconContainer_effbe2",
        icon: "icon_effbe2",
        visible: "visible_effbe2",
        clear: "clear_effbe2",
      };
    },
    693385: function (e, t, n) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    114969: function (e, t, n) {
      e.exports = {
        buttonContainer: "buttonContainer_dda65b",
        listContainer: "listContainer_dda65b",
        listItem: "listItem_dda65b",
      };
    },
    514491: function (e, t, n) {
      e.exports = {
        title: "title_da258e",
        subtitle: "subtitle_da258e",
        img: "img_da258e",
      };
    },
    234293: function (e, t, n) {
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
    749880: function (e, t, n) {
      e.exports = { image: "image_d42055", loaded: "loaded_d42055" };
    },
    817623: function (e, t, n) {
      e.exports = { logo: "logo_c59dbe" };
    },
    262437: function (e, t, n) {
      e.exports = { checkbox: "checkbox_bc87ef", subText: "subText_bc87ef" };
    },
    180483: function (e, t, n) {
      e.exports = {
        container: "container_d69c1e",
        statusContainer: "statusContainer_d69c1e",
        channelInfoContainer: "channelInfoContainer_d69c1e",
        channelInfoText: "channelInfoText_d69c1e",
      };
    },
    988750: function (e, t, n) {
      e.exports = {
        error: "error_c39a71",
        subTitle: "subTitle_c39a71",
        button: "button_c39a71",
        codeInput: "codeInput_c39a71",
      };
    },
    503645: function (e, t, n) {
      e.exports = {
        canvas: "canvas_f26d08",
        fallbackImage: "fallbackImage_f26d08",
        visible: "visible_f26d08",
        embedded: "embedded_f26d08",
      };
    },
    407530: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_bb3b80 " + n("763971").scrollbarGhost,
        rightSplit: "rightSplit_bb3b80",
        embedded: "embedded_bb3b80",
        leftSplit: "leftSplit_bb3b80",
        nonEmbeddedLeftSplit: "nonEmbeddedLeftSplit_bb3b80",
        mobileWave: "mobileWave_bb3b80",
        logo: "logo_bb3b80",
      };
    },
    982823: function (e, t, n) {
      n.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeOverlayContainer: "qrCodeOverlayContainer_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    542508: function (e, t, n) {
      e.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
      };
    },
    808786: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    680475: function (e, t, n) {
      e.exports = {
        pill: "pill_c993da",
        clickable: "clickable_c993da",
        disabled: "disabled_c993da",
        small: "small_c993da",
        selected: "selected_c993da",
        emoji: "emoji_c993da",
        closeCircle: "closeCircle_c993da emoji_c993da",
        close: "close_c993da",
        tooltipPill: "tooltipPill_c993da",
      };
    },
    201950: function (e, t, n) {
      e.exports = {
        boostedGuildIconGem: "boostedGuildIconGem_d4a69b",
        iconBackgroundTierNone: "iconBackgroundTierNone_d4a69b",
        iconBackgroundTierOne: "iconBackgroundTierOne_d4a69b",
        iconBackgroundTierTwo: "iconBackgroundTierTwo_d4a69b",
        iconBackgroundTierThree: "iconBackgroundTierThree_d4a69b",
        iconTierNone: "iconTierNone_d4a69b",
        iconTierOne: "iconTierOne_d4a69b",
        iconTierTwo: "iconTierTwo_d4a69b",
        iconTierThree: "iconTierThree_d4a69b",
      };
    },
    24753: function (e, t, n) {
      e.exports = {
        productCard: "productCard_f26f9b",
        productCardClickable: "productCardClickable_f26f9b",
        productThumbnail: "productThumbnail_f26f9b",
        productInfo: "productInfo_f26f9b",
        productInfoContent: "productInfoContent_f26f9b",
        productName: "productName_f26f9b",
        productDetails: "productDetails_f26f9b",
        dotSeparator: "dotSeparator_f26f9b",
        productActionMenuButton: "productActionMenuButton_f26f9b",
        productActionMenuIcon: "productActionMenuIcon_f26f9b",
        menuContainer: "menuContainer_f26f9b",
        disabled: "disabled_f26f9b",
      };
    },
    383011: function (e, t, n) {
      e.exports = { badge: "badge_a24a11", badgeIcon: "badgeIcon_a24a11" };
    },
    989384: function (e, t, n) {
      e.exports = { emojiIcon: "emojiIcon_e6e8e8" };
    },
    507641: function (e, t, n) {
      e.exports = { icon: "icon_acc5ff" };
    },
    674055: function (e, t, n) {
      e.exports = { container: "container_f8690a" };
    },
    295267: function (e, t, n) {
      e.exports = {
        header: "header_ecbdaf",
        title: "title_ecbdaf",
        description: "description_ecbdaf",
        guildBadge: "guildBadge_ecbdaf",
        row: "row_ecbdaf",
        guildIcon: "guildIcon_ecbdaf",
        body: "body_ecbdaf",
        divider: "divider_ecbdaf",
        icon: "icon_ecbdaf",
        channelIcon: "channelIcon_ecbdaf",
        clickable: "clickable_ecbdaf",
        linkText: "linkText_ecbdaf",
        channelLocation: "channelLocation_ecbdaf",
        locationText: "locationText_ecbdaf",
        externalLocation: "externalLocation_ecbdaf",
        interestedCount: "interestedCount_ecbdaf",
        creator: "creator_ecbdaf",
      };
    },
    70172: function (e, t, n) {
      e.exports = {
        guildIconContainer: "guildIconContainer_ed9816",
        guildIconV2Container: "guildIconV2Container_ed9816",
        guildBadge: "guildBadge_ed9816",
        disableColor: "disableColor_ed9816",
        tierTooltipTitle: "tierTooltipTitle_ed9816",
        boostedGuildTierMutedIconWithVisibleBanner:
          "boostedGuildTierMutedIconWithVisibleBanner_ed9816",
        boostedGuildTierIconBackgroundWithVisibleBanner:
          "boostedGuildTierIconBackgroundWithVisibleBanner_ed9816",
        guildBadgeIcon: "guildBadgeIcon_ed9816",
      };
    },
    809893: function (e, t, n) {
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
    860693: function (e, t, n) {
      e.exports = {
        image: "image_be5c11",
        header: "header_be5c11",
        usagePill: "usagePill_be5c11",
      };
    },
    262484: function (e, t, n) {
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
    841094: function (e, t, n) {
      e.exports = {
        image: "image_a4d9bd",
        title: "title_a4d9bd",
        subtitle: "subtitle_a4d9bd",
        spacedButton: "spacedButton_a4d9bd",
      };
    },
    105401: function (e, t, n) {
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
    461342: function (e, t, n) {
      e.exports = {
        container: "container_e05cb6",
        acceptButton: "acceptButton_e05cb6",
      };
    },
    357070: function (e, t, n) {
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
    161669: function (e, t, n) {
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
    452091: function (e, t, n) {
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
    924469: function (e, t, n) {
      e.exports = {
        container: "container_b252f6",
        errorContainer: "errorContainer_b252f6 container_b252f6",
        buttonText: "buttonText_b252f6",
      };
    },
    99375: function (e, t, n) {
      e.exports = {
        chooseAccountAuthBox: "chooseAccountAuthBox_b4df52",
        chooseAccountHelpText: "chooseAccountHelpText_b4df52",
        actions: "actions_b4df52",
      };
    },
    536554: function (e, t, n) {
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
    149938: function (e, t, n) {
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
    208689: function (e, t, n) {
      e.exports = {
        input: "input_cc6ddd",
        inputField: "inputField_cc6ddd",
        inputWrapper: "inputWrapper_cc6ddd",
      };
    },
    231220: function (e, t, n) {
      e.exports = {
        container: "container_a1db3b",
        iconContainer: "iconContainer_a1db3b",
        icon: "icon_a1db3b",
        foreground: "foreground_a1db3b",
        avatarSize: "avatarSize_a1db3b",
        emptyUser: "emptyUser_a1db3b",
        avatarMasked: "avatarMasked_a1db3b avatar_a1db3b",
        moreUsers: "moreUsers_a1db3b",
      };
    },
    107720: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
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
          return x;
        },
        wz: function () {
          return p;
        },
      });
      var s = "copy",
        l = "convert";
      function o(e, t, n) {
        if (t === s) return n;
        if (t === l) return e(n);
        if (t instanceof Array) return n.map((n) => o(e, t[0], n));
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
            i[r] = o(e, s.schema, n[r]);
          }
          return i;
        }
      }
      function a(e, t) {
        return { required: !0, schema: e, derive: t };
      }
      function c(e) {
        return { required: !0, schema: e };
      }
      function d(e) {
        return { required: !1, schema: e };
      }
      var u = { type: c(s), id: c(l), transports: d(s) },
        h = { appid: d(s), appidExclude: d(s), credProps: d(s) },
        g = { appid: d(s), appidExclude: d(s), credProps: d(s) };
      c({
        rp: c(s),
        user: c({ id: c(l), name: c(s), displayName: c(s) }),
        challenge: c(l),
        pubKeyCredParams: c(s),
        timeout: d(s),
        excludeCredentials: d([u]),
        authenticatorSelection: d(s),
        attestation: d(s),
        extensions: d(h),
      }),
        d(s),
        c(s),
        c(s),
        c(l),
        d(s),
        c({
          clientDataJSON: c(l),
          attestationObject: c(l),
          transports: a(s, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
          }),
        }),
        a(g, (e) => e.getClientExtensionResults());
      var f = {
          mediation: d(s),
          publicKey: c({
            challenge: c(l),
            timeout: d(s),
            rpId: d(s),
            allowCredentials: d([u]),
            userVerification: d(s),
            extensions: d(h),
          }),
          signal: d(s),
        },
        m = {
          type: c(s),
          id: c(s),
          rawId: c(l),
          authenticatorAttachment: d(s),
          response: c({
            clientDataJSON: c(l),
            authenticatorData: c(l),
            signature: c(l),
            userHandle: c(l),
          }),
          clientExtensionResults: a(g, (e) => e.getClientExtensionResults()),
        };
      function p(e) {
        return o(i, f, e);
      }
      async function x(e) {
        let t = await navigator.credentials.get(e);
        return (t.toJSON = () => o(r, m, t)), t;
      }
    },
  },
]);
//# sourceMappingURL=bc3d7bdf27dfee0d5e00.js.map
