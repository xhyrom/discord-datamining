"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85210"],
  {
    74830: function (e) {
      e.exports = "/assets/23a7a3fd6624342117bf.svg";
    },
    2984: function (e) {
      e.exports = "/assets/0e5029fd9cd4812b6712.svg";
    },
    575703: function (e) {
      e.exports = "/assets/b9995525a52dc58aecf5.svg";
    },
    285773: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n(735250);
      n(470079);
      var i = n(765717),
        r = n(384666),
        o = n(69580),
        l = n(397394),
        a = n(449934),
        c = n(721751),
        d = n(981631);
      function u() {
        return (0, s.jsxs)(c.Z, {
          splash: (0, a.gK)(),
          children: [
            (0, s.jsx)(i.Z, { path: d.Z5c.OAUTH2_AUTHORIZED, component: l.Xg }),
            (0, s.jsx)(i.Z, {
              path: d.Z5c.OAUTH2_AUTHORIZE,
              component: o.OAuth2AuthorizePage,
            }),
            (0, s.jsx)(i.Z, { path: d.Z5c.OAUTH2_ERROR, component: l.j3 }),
            (0, s.jsx)(i.Z, {
              path: [d.Z5c.OAUTH2_WHITELIST_ACCEPT, "/oauth2/whitelist/accept"],
              component: r.Z,
            }),
          ],
        });
      }
    },
    721751: function (e, t, n) {
      let s;
      n(47120);
      var i = n(735250),
        r = n(470079),
        o = n(120356),
        l = n.n(o),
        a = n(873546),
        c = n(442837),
        d = n(481060),
        u = n(980591),
        h = n(605782),
        p = n(133853),
        E = n(568154),
        I = n(353926),
        b = n(703656),
        m = n(981631),
        _ = n(504877);
      let f = n(575703),
        T = n(2984),
        Z = [
          m.Z5c.LOGIN,
          m.Z5c.LOGIN_HANDOFF,
          m.Z5c.REGISTER,
          m.Z5c.INVITE(""),
          m.Z5c.GIFT_CODE(""),
          m.Z5c.GUILD_TEMPLATE_LOGIN(""),
          m.Z5c.GUILD_TEMPLATE(""),
          m.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
          m.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
          m.Z5c.BILLING_PREMIUM_SUBSCRIBE,
          m.Z5c.BILLING_PAYMENT_SOURCES_CREATE,
          m.Z5c.BILLING_PAYMENTS,
          m.Z5c.BILLING_PREMIUM_SWITCH_PLAN,
          m.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
          m.Z5c.VERIFY,
          m.Z5c.VERIFY_HUB_EMAIL,
          m.Z5c.REJECT_IP,
          m.Z5c.REJECT_MFA,
          m.Z5c.AUTHORIZE_IP,
          m.Z5c.AUTHORIZE_PAYMENT,
          m.Z5c.RESET,
          m.Z5c.HANDOFF,
          m.Z5c.REPORT,
          m.Z5c.REPORT_SECOND_LOOK,
        ];
      function g(e) {
        return Z.some((t) => e.startsWith(t));
      }
      let L = (e) => ((s = e), e);
      function x(e) {
        let { children: t } = e;
        switch (
          (function () {
            let [e, t] = r.useState(!1),
              [n, i] = r.useState(true),
              o = (function () {
                return null;
              })(),
              l = (0, c.e7)([I.Z], () => I.Z.hasLoadedExperiments);
            return ((0, u.Z)(() => {}, 300), void 0 !== s)
              ? s
              : !n && l
                ? (!e && t(!0),
                  L(
                    (function (e) {
                      return "default";
                    })(o),
                  ))
                : n
                  ? L("default")
                  : "loading";
          })()
        ) {
          case "default":
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("img", { className: _.artwork, src: f, alt: "" }),
                (0, i.jsx)("img", {
                  className: _.logoWithText,
                  src: T,
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
      class S extends r.Component {
        componentDidMount() {
          window.addEventListener("resize", this.handleResize);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        mobileTransitionTo(e, t) {
          if (g(e)) (0, b.uL)(e, t);
          else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
          }
        }
        mobileReplaceWith(e) {
          g(e) ? (0, b.dL)(e) : (window.location = e);
        }
        renderDefault() {
          let { splash: e } = this.props,
            t = (0, i.jsx)(h.Z, {
              component: r.Fragment,
              children: r.Children.map(this.props.children, (e) =>
                r.cloneElement(e, { transitionTo: b.uL, replaceWith: b.dL }),
              ),
            });
          return (0, i.jsx)("div", {
            className: _.characterBackground,
            children: (0, i.jsx)(d.HeadingLevel, {
              forceLevel: 1,
              children:
                null != e
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(p.Z, { show: !0, className: l()(_.logo) }),
                        (0, i.jsx)(E.h, { splash: e, children: t }),
                      ],
                    })
                  : (0, i.jsx)(x, { children: t }),
            }),
          });
        }
        renderMobile() {
          return (0, i.jsx)(h.Z, {
            component: r.Fragment,
            children: r.Children.map(this.props.children, (e) =>
              r.cloneElement(e, {
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
      t.Z = S;
    },
    605782: function (e, t, n) {
      var s = n(735250),
        i = n(470079),
        r = n(266067),
        o = n(215569);
      class l extends i.Component {
        render() {
          let {
              children: e,
              location: t,
              history: n,
              staticContext: l,
              match: a,
              ...c
            } = this.props,
            d = null,
            u = null;
          return (
            i.Children.forEach(e, (e) => {
              if (null == d && i.isValidElement(e)) {
                let { component: s, render: o, ...a } = e.props,
                  c = a.path || a.from;
                if (
                  null !=
                  (d =
                    null != c ? (0, r.LX)(t.pathname, { ...a, path: c }) : null)
                )
                  (a = {
                    ...a,
                    key: c,
                    location: t,
                    match: d,
                    history: n,
                    staticContext: l,
                  }),
                    null != s
                      ? (u = i.createElement(s, a))
                      : null != o && (u = o(a));
              }
            }),
            (0, s.jsx)(o.W, { ...c, children: u })
          );
        }
      }
      t.Z = (0, r.EN)(l);
    },
    384666: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var s = n(735250),
        i = n(470079),
        r = n(593473),
        o = n(266067),
        l = n(489863),
        a = n(787025),
        c = n(397394),
        d = n(689938);
      function u() {
        let e;
        let t = (0, o.TH)(),
          [n, u] = i.useState(!1),
          [h, p] = i.useState(!1);
        return (
          i.useEffect(() => {
            (async function e() {
              let e = (0, r.parse)(t.search);
              try {
                var n;
                await (0, l.g)(null !== (n = e.token) && void 0 !== n ? n : ""),
                  u(!0);
              } catch {
                p(!0);
              }
            })();
          }, [t.search]),
          (e = n
            ? (0, s.jsx)(c.c7, {
                message: d.Z.Messages.WHITELISTED,
                showsCloseWindowText: !0,
              })
            : h
              ? (0, s.jsx)(c.Lk, {
                  message: d.Z.Messages.WHITELIST_FAILED,
                  showsCloseWindowText: !0,
                })
              : (0, s.jsx)(c.ZP, {
                  message: d.Z.Messages.WHITELISTING,
                  spinner: !0,
                })),
          (0, s.jsx)(a.G, { children: e })
        );
      }
    },
    504877: function (e, t, n) {
      e.exports = {
        characterBackground: "characterBackground_bdd070",
        artwork: "artwork_bdd070",
        logoWithText: "logoWithText_bdd070",
        logo: "logo_bdd070",
      };
    },
    111543: function (e, t, n) {
      e.exports = { image: "image_d42055", loaded: "loaded_d42055" };
    },
    559737: function (e, t, n) {
      e.exports = { logo: "logo_c59dbe" };
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
  },
]);
//# sourceMappingURL=4a169d311285e427a9ae.js.map
