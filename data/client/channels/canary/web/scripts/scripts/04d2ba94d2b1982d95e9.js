"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16547"],
  {
    294596: function (e) {
      e.exports = "/assets/6b9b97fb5b639395eb06.svg";
    },
    188003: function (e) {
      e.exports = "/assets/39aef6391ee790fa531b.png";
    },
    579055: function (e) {
      e.exports = "/assets/12fdcec7c0ab0b8cea62.svg";
    },
    417663: function (e, s, t) {
      t.r(s),
        t.d(s, {
          AccountConnectionResult: function () {
            return h;
          },
          LinkPlatformLogo: function () {
            return p;
          },
        }),
        t(47120);
      var n = t(735250),
        r = t(470079),
        a = t(120356),
        o = t.n(a),
        i = t(593473),
        l = t(481060),
        c = t(457330),
        d = t(726542),
        u = t(536285),
        N = t(981631),
        m = t(689938),
        C = t(957636);
      function _(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      let f = null != window.opener,
        g = "https://dis.gd/Amazon-Music-Connection";
      function p(e) {
        let { platform: s, className: t } = e;
        return (0, n.jsxs)("div", {
          className: o()(C.logos, t),
          children: [
            (0, n.jsx)("div", { className: o()(C.logo, C.logoDiscord) }),
            (0, n.jsx)("div", { className: C.logosDivider }),
            (0, n.jsx)("div", {
              className: C.logo,
              style: { backgroundImage: 'url("'.concat(s.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
      function h(e) {
        let s,
          t,
          { verifying: a, verified: i, platformType: c } = e,
          u = d.Z.get(c),
          _ = r.useCallback(() => {
            window.close();
          }, []);
        return (
          (s = a
            ? (0, n.jsx)("div", {
                className: C.message,
                children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                  name: u.name,
                }),
              })
            : i
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: C.message,
                      children:
                        m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({
                          name: u.name,
                        }),
                    }),
                    (0, n.jsx)("div", {
                      className: o()(C.message, C.details),
                      children:
                        m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS,
                    }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: o()(C.message, C.error),
                      children:
                        m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                          name: u.name,
                        }),
                    }),
                    (0, n.jsx)("div", {
                      className: o()(C.message, C.details),
                      children:
                        m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
                    }),
                    c !== N.ABu.AMAZON_MUSIC
                      ? null
                      : (0, n.jsx)("div", {
                          className: o()(C.message, C.details),
                          children:
                            m.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format(
                              {
                                link: () =>
                                  (0, n.jsx)(l.Anchor, {
                                    href: g,
                                    children: g,
                                  }),
                              },
                            ),
                        }),
                  ],
                })),
          (f || a) &&
            (t = (0, n.jsx)(l.Button, {
              className: C.btn,
              disabled: a,
              onClick: _,
              children: a
                ? (0, n.jsx)(l.Spinner, { itemClassName: C.spinnerItem })
                : m.Z.Messages.DONE,
            })),
          (0, n.jsx)("div", {
            className: C.verifyConnectedAccount,
            children: (0, n.jsxs)("div", {
              children: [(0, n.jsx)(p, { platform: u }), s, t],
            }),
          })
        );
      }
      class v extends r.Component {
        componentDidMount() {
          let e;
          let s = (0, i.parse)(this.props.location.search),
            { code: t, state: n, oauth_verifier: r, loading: a } = s;
          if (null != a) return;
          null != r && (t = r),
            Object.keys(s).forEach((t) => {
              if (!!t.startsWith("openid."))
                null == e && (e = {}), (e[t] = s[t]);
            });
          let o = (e) => {
              let { status: s, body: t } = e;
              this.setState(
                { verifying: !1, verified: 204 === s || 200 === s },
                () => {
                  this.state.verified && f && window.close();
                },
              ),
                (null == t ? void 0 : t.redirect) != null &&
                  (window.location = t.redirect);
            },
            l = { code: t, openid_params: e, state: n },
            d = (e) => c.Z.callback(this.getType(), l, e).then(o, o);
          if (f) {
            d(!1);
            return;
          }
          u.default
            .request(N.Etm.CONNECTIONS_CALLBACK, {
              ...l,
              providerType: this.getType(),
            })
            .then(o, (e) => d("RPCError" !== e.name))
            .then(() => u.default.disconnect());
        }
        render() {
          let { verifying: e, verified: s } = this.state,
            t = this.getType();
          return d.Z.isSupported(t)
            ? (0, n.jsx)(h, {
                platformType: this.getType(),
                verifying: e,
                verified: s,
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            _(this, "state", { verifying: !0, verified: !1 }),
            _(this, "getType", () => this.props.match.params.type);
        }
      }
      s.default = v;
    },
    857458: function (e, s, t) {
      t.d(s, {
        M: function () {
          return l;
        },
      });
      var n = t(735250);
      t(470079);
      var r = t(266067),
        a = t(860911),
        o = t(981631),
        i = t(188785);
      function l() {
        let e = location.pathname + location.search;
        return i.a ? o.Z5c.REGISTER : (0, a.U)(e, !1);
      }
      s.Z = function () {
        return (0, n.jsx)(r.l_, { to: l() });
      };
    },
    77987: function (e, s, t) {
      t.d(s, {
        e: function () {
          return l;
        },
      });
      var n = t(735250);
      t(470079);
      var r = t(314897),
        a = t(449934),
        o = t(857458),
        i = t(981631);
      function l(e, s) {
        var t, l;
        let c =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function d(t) {
          if (
            !(0, a.$8)() &&
            r.default.getLoginStatus() !== i.u34.LOGGING_IN &&
            r.default.allowLogoutRedirect()
          )
            return null != s
              ? (0, n.jsx)(s, { renderRedirect: (0, n.jsx)(o.Z, {}) })
              : (0, n.jsx)(o.Z, {});
          return (0, n.jsx)(e, { ...(c.passProps ? t : null) });
        }
        return (
          (d.displayName = "Authenticated(".concat(
            null !==
              (l = null !== (t = e.displayName) && void 0 !== t ? t : e.name) &&
              void 0 !== l
              ? l
              : "<Unknown>",
            ")",
          )),
          d
        );
      }
    },
    531338: function (e, s, t) {
      t.r(s), t(610138), t(216116), t(78328), t(815648), t(47120);
      var n = t(735250);
      t(470079);
      var r = t(481060),
        a = t(457330),
        o = t(417663),
        i = t(726542),
        l = t(77987),
        c = t(787025),
        d = t(689938),
        u = t(460114);
      s.default = (0, l.e)(function (e) {
        let { match: s } = e,
          t = s.params.type,
          l = i.Z.get(t);
        if (null == l)
          return (0, n.jsx)(c.G, {
            children: (0, n.jsx)(r.Text, {
              className: u.error,
              variant: "text-md/normal",
              color: "text-warning",
              children:
                d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_PLATFORM_UNKNOWN,
            }),
          });
        async function N() {
          var e, s, n;
          let r = new URLSearchParams(window.location.search),
            { body: o } = await a.Z.authorize(t, {
              location: "Connection Intermediate",
              twoWayLink:
                null != r.get("two_way_link")
                  ? "true" === r.get("two_way_link")
                  : void 0,
              twoWayLinkType:
                null !== (e = r.get("two_way_link_type")) && void 0 !== e
                  ? e
                  : void 0,
              userCode:
                null !== (s = r.get("two_way_user_code")) && void 0 !== s
                  ? s
                  : void 0,
              successRedirect:
                null !== (n = r.get("success_redirect")) && void 0 !== n
                  ? n
                  : void 0,
            });
          window.location = o.url;
        }
        return (0, n.jsx)(c.G, {
          wrapperClassName: u.wrapper,
          children: (0, n.jsxs)("div", {
            className: u.root,
            children: [
              (0, n.jsx)(o.LinkPlatformLogo, {
                className: u.logos,
                platform: l,
              }),
              (0, n.jsx)(r.Heading, {
                variant: "text-lg/bold",
                className: u.header,
                children:
                  d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_HEADER.format(
                    { provider: l.name },
                  ),
              }),
              (0, n.jsx)(r.Text, {
                variant: "text-md/normal",
                className: u.body,
                children:
                  d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_DESCRIPTION.format(
                    { provider: l.name },
                  ),
              }),
              (0, n.jsx)(r.Button, {
                size: r.Button.Sizes.LARGE,
                color: r.Button.Colors.BRAND,
                onClick: N,
                children:
                  d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_BUTTON,
              }),
            ],
          }),
        });
      });
    },
    957636: function (e, s, t) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_eab003",
        message: "message_eab003",
        error: "error_eab003",
        details: "details_eab003",
        btn: "btn_eab003",
        spinnerItem: "spinnerItem_eab003",
        logos: "logos_eab003",
        logosDivider: "logosDivider_eab003",
        logo: "logo_eab003",
        logoDiscord: "logoDiscord_eab003",
      };
    },
    460114: function (e, s, t) {
      e.exports = {
        root: "root_b5f312",
        wrapper: "wrapper_b5f312",
        header: "header_b5f312",
        body: "body_b5f312",
        logos: "logos_b5f312",
        error: "error_b5f312",
      };
    },
  },
]);
//# sourceMappingURL=04d2ba94d2b1982d95e9.js.map
