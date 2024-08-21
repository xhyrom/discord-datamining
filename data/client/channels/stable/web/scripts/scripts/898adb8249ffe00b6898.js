"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3573"],
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
            return _;
          },
          LinkPlatformLogo: function () {
            return N;
          },
        }),
        t(47120);
      var n = t(735250),
        i = t(470079),
        a = t(120356),
        r = t.n(a),
        o = t(593473),
        l = t(481060),
        c = t(457330),
        d = t(726542),
        u = t(536285),
        m = t(981631),
        g = t(689938),
        C = t(957636);
      function p(e, s, t) {
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
        h = "https://dis.gd/Amazon-Music-Connection";
      function N(e) {
        let { platform: s, className: t } = e;
        return (0, n.jsxs)("div", {
          className: r()(C.logos, t),
          children: [
            (0, n.jsx)("div", { className: r()(C.logo, C.logoDiscord) }),
            (0, n.jsx)("div", { className: C.logosDivider }),
            (0, n.jsx)("div", {
              className: C.logo,
              style: { backgroundImage: 'url("'.concat(s.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
      function _(e) {
        let s,
          t,
          { verifying: a, verified: o, platformType: c } = e,
          u = d.Z.get(c),
          p = i.useCallback(() => {
            window.close();
          }, []);
        return (
          (s = a
            ? (0, n.jsx)("div", {
                className: C.message,
                children: g.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                  name: u.name,
                }),
              })
            : o
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: C.message,
                      children:
                        g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({
                          name: u.name,
                        }),
                    }),
                    (0, n.jsx)("div", {
                      className: r()(C.message, C.details),
                      children:
                        g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS,
                    }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: r()(C.message, C.error),
                      children:
                        g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                          name: u.name,
                        }),
                    }),
                    (0, n.jsx)("div", {
                      className: r()(C.message, C.details),
                      children:
                        g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
                    }),
                    c !== m.ABu.AMAZON_MUSIC
                      ? null
                      : (0, n.jsx)("div", {
                          className: r()(C.message, C.details),
                          children:
                            g.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format(
                              {
                                link: () =>
                                  (0, n.jsx)(l.Anchor, {
                                    href: h,
                                    children: h,
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
              onClick: p,
              children: a
                ? (0, n.jsx)(l.Spinner, { itemClassName: C.spinnerItem })
                : g.Z.Messages.DONE,
            })),
          (0, n.jsx)("div", {
            className: C.verifyConnectedAccount,
            children: (0, n.jsxs)("div", {
              children: [(0, n.jsx)(N, { platform: u }), s, t],
            }),
          })
        );
      }
      class b extends i.Component {
        componentDidMount() {
          let e;
          let s = (0, o.parse)(this.props.location.search),
            { code: t, state: n, oauth_verifier: i, loading: a } = s;
          if (null != a) return;
          null != i && (t = i),
            Object.keys(s).forEach((t) => {
              if (!!t.startsWith("openid."))
                null == e && (e = {}), (e[t] = s[t]);
            });
          let r = (e) => {
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
            d = (e) => c.Z.callback(this.getType(), l, e).then(r, r);
          if (f) {
            d(!1);
            return;
          }
          u.default
            .request(m.Etm.CONNECTIONS_CALLBACK, {
              ...l,
              providerType: this.getType(),
            })
            .then(r, (e) => d("RPCError" !== e.name))
            .then(() => u.default.disconnect());
        }
        render() {
          let { verifying: e, verified: s } = this.state,
            t = this.getType();
          return d.Z.isSupported(t)
            ? (0, n.jsx)(_, {
                platformType: this.getType(),
                verifying: e,
                verified: s,
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            p(this, "state", { verifying: !0, verified: !1 }),
            p(this, "getType", () => this.props.match.params.type);
        }
      }
      s.default = b;
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
  },
]);
//# sourceMappingURL=898adb8249ffe00b6898.js.map
