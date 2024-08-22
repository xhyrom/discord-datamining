"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13862"],
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
    656649: function (e, s, n) {
      n.d(s, {
        KJ: function () {
          return d;
        },
        UV: function () {
          return u;
        },
        vJ: function () {
          return c;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(120356),
        l = n.n(r),
        o = n(726542),
        i = n(981631),
        a = n(145301);
      function c(e) {
        return null != e && Object.values(i.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: s, platformType: n } = e,
          r = o.Z.get(n);
        return (0, t.jsx)("div", {
          className: a.verifyConnectedAccount,
          children: (0, t.jsxs)("div", {
            children: [(0, t.jsx)(d, { platform: r }), s],
          }),
        });
      }
      function d(e) {
        let { platform: s, className: n } = e;
        return (0, t.jsxs)("div", {
          className: l()(a.logos, n),
          children: [
            (0, t.jsx)("div", { className: l()(a.logo, a.logoDiscord) }),
            (0, t.jsx)("div", { className: a.logosDivider }),
            (0, t.jsx)("div", {
              className: a.logo,
              style: { backgroundImage: 'url("'.concat(s.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
    },
    675207: function (e, s, n) {
      n.r(s),
        n.d(s, {
          AccountConnectionResult: function () {
            return h;
          },
          default: function () {
            return v;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(757143);
      var t = n(735250),
        r = n(470079),
        l = n(120356),
        o = n.n(l),
        i = n(266067),
        a = n(873546),
        c = n(481060),
        u = n(457330),
        d = n(726542),
        f = n(536285),
        C = n(656649),
        g = n(981631),
        m = n(689938),
        N = n(934484);
      let p = null != window.opener,
        _ = "https://dis.gd/Amazon-Music-Connection",
        E = (e) => new URLSearchParams(e.search);
      function v() {
        var e;
        let s = (0, i.k6)(),
          n = E((0, i.TH)()),
          l = n.get("code"),
          o = n.get("oauth_verifier"),
          a = null !== (e = n.get("state")) && void 0 !== e ? e : "",
          c = n.get("loading"),
          { type: m } = (0, i.UO)(),
          N = (0, C.vJ)(m),
          _ = null == o ? (null != l ? l : "") : o,
          [v, b] = r.useState(!0);
        return (r.useEffect(() => {
          let e;
          if (null != c) return;
          for (let s of n.keys()) {
            if (!!s.startsWith("openid."))
              null == e && (e = {}), (e[s] = n.get(s));
          }
          let t = (e) => {
              let { status: n, body: t } = e;
              if (null != o) {
                if (null == t ? void 0 : t.redirect)
                  return s.replace(t.redirect);
                [200, 204].includes(n) &&
                  (s.replace(g.Z5c.CONNECTIONS_SUCCESS(o)),
                  p && window.close()),
                  b(!1);
              }
            },
            r = { code: _, openid_params: e, state: a },
            l = (e) => {
              null != o &&
                d.Z.isSupported(o) &&
                u.Z.callback(o, r, e).then(t, t);
            };
          if (p) {
            l(!1);
            return;
          }
          let o = (0, C.vJ)(m);
          f.default
            .request(g.Etm.CONNECTIONS_CALLBACK, { ...r, providerType: o })
            .then(t, (e) => l("RPCError" !== e.name))
            .then(() => f.default.disconnect());
        }, [_, s, c, m, n, a]),
        null != N && d.Z.isSupported(N))
          ? (0, t.jsx)(h, { platformType: N, verifying: v })
          : null;
      }
      function h(e) {
        let s,
          n,
          { verifying: l, platformType: i } = e,
          u = d.Z.get(i),
          f = r.useCallback(() => {
            window.close();
          }, []);
        return (
          (s = l
            ? (0, t.jsx)("div", {
                className: N.message,
                children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                  name: u.name,
                }),
              })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: o()(N.message, N.error),
                    children:
                      m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                        name: u.name,
                      }),
                  }),
                  (0, t.jsx)("div", {
                    className: o()(N.message, N.details),
                    children:
                      m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
                  }),
                  i !== g.ABu.AMAZON_MUSIC
                    ? null
                    : (0, t.jsx)("div", {
                        className: o()(N.message, N.details),
                        children: a.tq
                          ? m.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format(
                              {
                                link: () =>
                                  (0, t.jsx)(c.Anchor, {
                                    href: _,
                                    children: _,
                                  }),
                              },
                            )
                          : m.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format(
                              {
                                link: () =>
                                  (0, t.jsx)(c.Anchor, {
                                    href: _,
                                    children: _,
                                  }),
                              },
                            ),
                      }),
                ],
              })),
          (p || l) &&
            (n = (0, t.jsx)(c.Button, {
              className: N.btn,
              disabled: l,
              onClick: f,
              children: l
                ? (0, t.jsx)(c.Spinner, { itemClassName: N.spinnerItem })
                : m.Z.Messages.DONE,
            })),
          (0, t.jsxs)(C.UV, { platformType: i, children: [s, n] })
        );
      }
    },
    145301: function (e, s, n) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    934484: function (e, s, n) {
      e.exports = {
        message: "message_b159b8",
        error: "error_b159b8",
        details: "details_b159b8",
        btn: "btn_b159b8",
        spinnerItem: "spinnerItem_b159b8",
      };
    },
  },
]);
//# sourceMappingURL=d9a32d03d47213281efb.js.map
