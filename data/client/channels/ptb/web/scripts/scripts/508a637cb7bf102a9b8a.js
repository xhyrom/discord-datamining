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
    417663: function (e, t, s) {
      s.r(t),
        s.d(t, {
          AccountConnectionResult: function () {
            return C;
          },
          LinkPlatformLogo: function () {
            return g;
          },
        }),
        s(47120);
      var n = s(735250),
        r = s(470079),
        a = s(120356),
        o = s.n(a),
        i = s(593473),
        l = s(481060),
        c = s(457330),
        d = s(726542),
        u = s(536285),
        N = s(981631),
        m = s(689938),
        f = s(957636);
      function p(e, t, s) {
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
      let _ = null != window.opener;
      function g(e) {
        let { platform: t, className: s } = e;
        return (0, n.jsxs)("div", {
          className: o()(f.logos, s),
          children: [
            (0, n.jsx)("div", { className: o()(f.logo, f.logoDiscord) }),
            (0, n.jsx)("div", { className: f.logosDivider }),
            (0, n.jsx)("div", {
              className: f.logo,
              style: { backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
      function C(e) {
        let t,
          s,
          { verifying: a, verified: i, platformType: c } = e,
          u = d.Z.get(c),
          N = r.useCallback(() => {
            window.close();
          }, []);
        return (
          (t = a
            ? (0, n.jsx)("div", {
                className: f.message,
                children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                  name: u.name,
                }),
              })
            : i
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: f.message,
                      children:
                        m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({
                          name: u.name,
                        }),
                    }),
                    (0, n.jsx)("div", {
                      className: o()(f.message, f.details),
                      children:
                        m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS,
                    }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: o()(f.message, f.error),
                      children:
                        m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                          name: u.name,
                        }),
                    }),
                    (0, n.jsx)("div", {
                      className: o()(f.message, f.details),
                      children:
                        m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
                    }),
                  ],
                })),
          (_ || a) &&
            (s = (0, n.jsx)(l.Button, {
              className: f.btn,
              disabled: a,
              onClick: N,
              children: a
                ? (0, n.jsx)(l.Spinner, { itemClassName: f.spinnerItem })
                : m.Z.Messages.DONE,
            })),
          (0, n.jsx)("div", {
            className: f.verifyConnectedAccount,
            children: (0, n.jsxs)("div", {
              children: [(0, n.jsx)(g, { platform: u }), t, s],
            }),
          })
        );
      }
      class v extends r.Component {
        componentDidMount() {
          let e;
          let t = (0, i.parse)(this.props.location.search),
            { code: s, state: n, oauth_verifier: r, loading: a } = t;
          if (null != a) return;
          null != r && (s = r),
            Object.keys(t).forEach((s) => {
              if (!!s.startsWith("openid."))
                null == e && (e = {}), (e[s] = t[s]);
            });
          let o = (e) => {
              let { status: t, body: s } = e;
              this.setState(
                { verifying: !1, verified: 204 === t || 200 === t },
                () => {
                  this.state.verified && _ && window.close();
                },
              ),
                (null == s ? void 0 : s.redirect) != null &&
                  (window.location = s.redirect);
            },
            l = { code: s, openid_params: e, state: n },
            d = (e) => c.Z.callback(this.getType(), l, e).then(o, o);
          if (_) {
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
          let { verifying: e, verified: t } = this.state,
            s = this.getType();
          return d.Z.isSupported(s)
            ? (0, n.jsx)(C, {
                platformType: this.getType(),
                verifying: e,
                verified: t,
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            p(this, "state", { verifying: !0, verified: !1 }),
            p(this, "getType", () => this.props.match.params.type);
        }
      }
      t.default = v;
    },
    857458: function (e, t, s) {
      s.d(t, {
        M: function () {
          return l;
        },
      });
      var n = s(735250);
      s(470079);
      var r = s(266067),
        a = s(860911),
        o = s(981631),
        i = s(188785);
      function l() {
        let e = location.pathname + location.search;
        return i.a ? o.Z5c.REGISTER : (0, a.U)(e, !1);
      }
      t.Z = function () {
        return (0, n.jsx)(r.l_, { to: l() });
      };
    },
    77987: function (e, t, s) {
      s.d(t, {
        e: function () {
          return l;
        },
      });
      var n = s(735250);
      s(470079);
      var r = s(314897),
        a = s(449934),
        o = s(857458),
        i = s(981631);
      function l(e, t) {
        var s, l;
        let c =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function d(s) {
          if (
            !(0, a.$8)() &&
            r.default.getLoginStatus() !== i.u34.LOGGING_IN &&
            r.default.allowLogoutRedirect()
          )
            return null != t
              ? (0, n.jsx)(t, { renderRedirect: (0, n.jsx)(o.Z, {}) })
              : (0, n.jsx)(o.Z, {});
          return (0, n.jsx)(e, { ...(c.passProps ? s : null) });
        }
        return (
          (d.displayName = "Authenticated(".concat(
            null !==
              (l = null !== (s = e.displayName) && void 0 !== s ? s : e.name) &&
              void 0 !== l
              ? l
              : "<Unknown>",
            ")",
          )),
          d
        );
      }
    },
    531338: function (e, t, s) {
      s.r(t), s(610138), s(216116), s(78328), s(815648), s(47120);
      var n = s(735250);
      s(470079);
      var r = s(481060),
        a = s(457330),
        o = s(417663),
        i = s(726542),
        l = s(77987),
        c = s(787025),
        d = s(689938),
        u = s(460114);
      t.default = (0, l.e)(function (e) {
        let { match: t } = e,
          s = t.params.type,
          l = i.Z.get(s);
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
          var e, t, n;
          let r = new URLSearchParams(window.location.search),
            { body: o } = await a.Z.authorize(s, {
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
                null !== (t = r.get("two_way_user_code")) && void 0 !== t
                  ? t
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
    957636: function (e, t, s) {
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
    460114: function (e, t, s) {
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
//# sourceMappingURL=508a637cb7bf102a9b8a.js.map
