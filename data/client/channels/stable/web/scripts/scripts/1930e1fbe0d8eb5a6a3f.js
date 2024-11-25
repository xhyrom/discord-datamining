"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["659"],
  {
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
      var i = n(200651);
      n(192379);
      var s = n(765717),
        r = n(384666),
        l = n(69580),
        o = n(397394),
        c = n(449934),
        a = n(721751),
        d = n(981631);
      function u() {
        return (0, i.jsxs)(a.Z, {
          splash: (0, c.gK)(),
          children: [
            (0, i.jsx)(s.Z, { path: d.Z5c.OAUTH2_AUTHORIZED, component: o.Xg }),
            (0, i.jsx)(s.Z, {
              path: d.Z5c.OAUTH2_AUTHORIZE,
              component: l.OAuth2AuthorizePage,
            }),
            (0, i.jsx)(s.Z, { path: d.Z5c.OAUTH2_ERROR, component: o.j3 }),
            (0, i.jsx)(s.Z, {
              path: [d.Z5c.OAUTH2_WHITELIST_ACCEPT, "/oauth2/whitelist/accept"],
              component: r.Z,
            }),
          ],
        });
      }
    },
    721751: function (e, t, n) {
      let i;
      n(47120);
      var s = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        c = n(873546),
        a = n(442837),
        d = n(481060),
        u = n(980591),
        h = n(605782),
        p = n(133853),
        E = n(568154),
        m = n(353926),
        _ = n(703656),
        b = n(981631),
        f = n(687e3);
      let I = n(575703),
        T = n(2984),
        Z = [
          b.Z5c.LOGIN,
          b.Z5c.LOGIN_HANDOFF,
          b.Z5c.REGISTER,
          b.Z5c.INVITE(""),
          b.Z5c.GIFT_CODE(""),
          b.Z5c.GUILD_TEMPLATE_LOGIN(""),
          b.Z5c.GUILD_TEMPLATE(""),
          b.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
          b.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
          b.Z5c.BILLING_PREMIUM_SUBSCRIBE,
          b.Z5c.BILLING_PAYMENT_SOURCES_CREATE,
          b.Z5c.BILLING_PAYMENTS,
          b.Z5c.BILLING_PREMIUM_SWITCH_PLAN,
          b.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
          b.Z5c.VERIFY,
          b.Z5c.VERIFY_HUB_EMAIL,
          b.Z5c.REJECT_IP,
          b.Z5c.REJECT_MFA,
          b.Z5c.AUTHORIZE_IP,
          b.Z5c.AUTHORIZE_PAYMENT,
          b.Z5c.RESET,
          b.Z5c.HANDOFF,
          b.Z5c.REPORT,
          b.Z5c.REPORT_SECOND_LOOK,
          b.Z5c.ACCOUNT_REVERT(""),
        ];
      function g(e) {
        return Z.some((t) => e.startsWith(t));
      }
      let L = (e) => ((i = e), e);
      function x(e) {
        let { children: t } = e;
        switch (
          (function () {
            let [e, t] = r.useState(!1),
              [n, s] = r.useState(true),
              l = (function () {
                return null;
              })(),
              o = (0, a.e7)([m.Z], () => m.Z.hasLoadedExperiments);
            return ((0, u.Z)(() => {}, 300), void 0 !== i)
              ? i
              : !n && o
                ? (!e && t(!0),
                  L(
                    (function (e) {
                      return "default";
                    })(l),
                  ))
                : n
                  ? L("default")
                  : "loading";
          })()
        ) {
          case "default":
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("img", { className: f.artwork, src: I, alt: "" }),
                (0, s.jsx)("img", {
                  className: f.logoWithText,
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
      class R extends r.Component {
        componentDidMount() {
          window.addEventListener("resize", this.handleResize);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        mobileTransitionTo(e, t) {
          if (g(e)) (0, _.uL)(e, t);
          else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
          }
        }
        mobileReplaceWith(e) {
          g(e) ? (0, _.dL)(e) : (window.location = e);
        }
        renderDefault() {
          let { splash: e } = this.props,
            t = (0, s.jsx)(h.Z, {
              component: r.Fragment,
              children: r.Children.map(this.props.children, (e) =>
                r.cloneElement(e, { transitionTo: _.uL, replaceWith: _.dL }),
              ),
            });
          return (0, s.jsx)("div", {
            className: f.characterBackground,
            children: (0, s.jsx)(d.HeadingLevel, {
              forceLevel: 1,
              children:
                null != e
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(p.Z, { show: !0, className: o()(f.logo) }),
                        (0, s.jsx)(E.h, { splash: e, children: t }),
                      ],
                    })
                  : (0, s.jsx)(x, { children: t }),
            }),
          });
        }
        renderMobile() {
          return (0, s.jsx)(h.Z, {
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
          return e || c.tq || c.Em || t
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
      t.Z = R;
    },
    605782: function (e, t, n) {
      var i = n(200651),
        s = n(192379),
        r = n(512969),
        l = n(215569);
      class o extends s.Component {
        render() {
          let {
              children: e,
              location: t,
              history: n,
              staticContext: o,
              match: c,
              ...a
            } = this.props,
            d = null,
            u = null;
          return (
            s.Children.forEach(e, (e) => {
              if (null == d && s.isValidElement(e)) {
                let { component: i, render: l, ...c } = e.props,
                  a = c.path || c.from;
                if (
                  null !=
                  (d =
                    null != a ? (0, r.LX)(t.pathname, { ...c, path: a }) : null)
                )
                  (c = {
                    ...c,
                    key: a,
                    location: t,
                    match: d,
                    history: n,
                    staticContext: o,
                  }),
                    null != i
                      ? (u = s.createElement(i, c))
                      : null != l && (u = l(c));
              }
            }),
            (0, i.jsx)(l.W, { ...a, children: u })
          );
        }
      }
      t.Z = (0, r.EN)(o);
    },
    384666: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(593473),
        l = n(512969),
        o = n(489863),
        c = n(787025),
        a = n(397394),
        d = n(388032);
      function u() {
        let e;
        let t = (0, l.TH)(),
          [n, u] = s.useState(!1),
          [h, p] = s.useState(!1);
        return (
          s.useEffect(() => {
            (async function e() {
              let e = (0, r.parse)(t.search);
              try {
                var n;
                await (0, o.g)(null !== (n = e.token) && void 0 !== n ? n : ""),
                  u(!0);
              } catch {
                p(!0);
              }
            })();
          }, [t.search]),
          (e = n
            ? (0, i.jsx)(a.c7, {
                message: d.intl.string(d.t.Tqu3OT),
                showsCloseWindowText: !0,
              })
            : h
              ? (0, i.jsx)(a.Lk, {
                  message: d.intl.string(d.t.J8LsCg),
                  showsCloseWindowText: !0,
                })
              : (0, i.jsx)(a.ZP, {
                  message: d.intl.string(d.t.BAcf6e),
                  spinner: !0,
                })),
          (0, i.jsx)(c.G, { children: e })
        );
      }
    },
    687e3: function (e, t, n) {
      e.exports = {
        characterBackground: "characterBackground_bdd070",
        artwork: "artwork_bdd070",
        logoWithText: "logoWithText_bdd070",
        logo: "logo_bdd070",
      };
    },
    749880: function (e, t, n) {
      e.exports = { image: "image_d42055", loaded: "loaded_d42055" };
    },
    817623: function (e, t, n) {
      e.exports = { logo: "logo_c59dbe" };
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
  },
]);
//# sourceMappingURL=1930e1fbe0d8eb5a6a3f.js.map
