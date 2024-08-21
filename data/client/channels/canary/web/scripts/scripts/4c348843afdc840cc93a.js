"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3111"],
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
    984388: function (e, s, t) {
      t.r(s), t(47120);
      var n = t(735250),
        i = t(470079),
        r = t(593473),
        a = t(478677),
        o = t(457330),
        l = t(417663),
        c = t(981631);
      function d(e) {
        let { platformType: s } = e,
          [t, a] = i.useState("verifying");
        return (
          i.useEffect(() => {
            let { code: e, state: t } = r.parse(window.location.search);
            if (null == e || null == t) {
              a("error");
              return;
            }
            o.Z.linkDispatchAuthCallback(s, { code: e, state: t }).then(
              (e) => {
                let { status: s } = e;
                a(204 === s ? "verified" : "error");
              },
              () => {
                a("error");
              },
            );
          }, [s]),
          (0, n.jsx)(l.AccountConnectionResult, {
            platformType: s,
            verifying: "verifying" === t,
            verified: "verified" === t,
          })
        );
      }
      s.default = function (e) {
        let { match: s } = e,
          t = s.params.type,
          { two_way_link_type: i } = r.parse(window.location.search);
        return [
          c.ABu.XBOX,
          c.ABu.PLAYSTATION_STAGING,
          c.ABu.PLAYSTATION,
          c.ABu.CRUNCHYROLL,
        ].includes(t) && i === a.g.DESKTOP
          ? (0, n.jsx)(d, { platformType: t })
          : null;
      };
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
        r = t(120356),
        a = t.n(r),
        o = t(593473),
        l = t(481060),
        c = t(457330),
        d = t(726542),
        u = t(536285),
        f = t(981631),
        p = t(689938),
        m = t(957636);
      function C(e, s, t) {
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
      let g = null != window.opener,
        h = "https://dis.gd/Amazon-Music-Connection";
      function N(e) {
        let { platform: s, className: t } = e;
        return (0, n.jsxs)("div", {
          className: a()(m.logos, t),
          children: [
            (0, n.jsx)("div", { className: a()(m.logo, m.logoDiscord) }),
            (0, n.jsx)("div", { className: m.logosDivider }),
            (0, n.jsx)("div", {
              className: m.logo,
              style: { backgroundImage: 'url("'.concat(s.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
      function _(e) {
        let s,
          t,
          { verifying: r, verified: o, platformType: c } = e,
          u = d.Z.get(c),
          C = i.useCallback(() => {
            window.close();
          }, []);
        return (
          (s = r
            ? (0, n.jsx)("div", {
                className: m.message,
                children: p.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                  name: u.name,
                }),
              })
            : o
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: m.message,
                      children:
                        p.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({
                          name: u.name,
                        }),
                    }),
                    (0, n.jsx)("div", {
                      className: a()(m.message, m.details),
                      children:
                        p.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS,
                    }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: a()(m.message, m.error),
                      children:
                        p.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                          name: u.name,
                        }),
                    }),
                    (0, n.jsx)("div", {
                      className: a()(m.message, m.details),
                      children:
                        p.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
                    }),
                    c !== f.ABu.AMAZON_MUSIC
                      ? null
                      : (0, n.jsx)("div", {
                          className: a()(m.message, m.details),
                          children:
                            p.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format(
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
          (g || r) &&
            (t = (0, n.jsx)(l.Button, {
              className: m.btn,
              disabled: r,
              onClick: C,
              children: r
                ? (0, n.jsx)(l.Spinner, { itemClassName: m.spinnerItem })
                : p.Z.Messages.DONE,
            })),
          (0, n.jsx)("div", {
            className: m.verifyConnectedAccount,
            children: (0, n.jsxs)("div", {
              children: [(0, n.jsx)(N, { platform: u }), s, t],
            }),
          })
        );
      }
      class v extends i.Component {
        componentDidMount() {
          let e;
          let s = (0, o.parse)(this.props.location.search),
            { code: t, state: n, oauth_verifier: i, loading: r } = s;
          if (null != r) return;
          null != i && (t = i),
            Object.keys(s).forEach((t) => {
              if (!!t.startsWith("openid."))
                null == e && (e = {}), (e[t] = s[t]);
            });
          let a = (e) => {
              let { status: s, body: t } = e;
              this.setState(
                { verifying: !1, verified: 204 === s || 200 === s },
                () => {
                  this.state.verified && g && window.close();
                },
              ),
                (null == t ? void 0 : t.redirect) != null &&
                  (window.location = t.redirect);
            },
            l = { code: t, openid_params: e, state: n },
            d = (e) => c.Z.callback(this.getType(), l, e).then(a, a);
          if (g) {
            d(!1);
            return;
          }
          u.default
            .request(f.Etm.CONNECTIONS_CALLBACK, {
              ...l,
              providerType: this.getType(),
            })
            .then(a, (e) => d("RPCError" !== e.name))
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
            C(this, "state", { verifying: !0, verified: !1 }),
            C(this, "getType", () => this.props.match.params.type);
        }
      }
      s.default = v;
    },
    478677: function (e, s, t) {
      var n, i;
      t.d(s, {
        g: function () {
          return n;
        },
      }),
        t(47120),
        ((i = n || (n = {})).MOBILE = "mobile"),
        (i.DESKTOP = "desktop"),
        (i.WEB = "web"),
        (i.DEVICE_CODE = "device_code");
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
//# sourceMappingURL=4c348843afdc840cc93a.js.map
