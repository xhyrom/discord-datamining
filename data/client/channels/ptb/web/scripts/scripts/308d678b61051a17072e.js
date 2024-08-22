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
    656649: function (e, n, s) {
      s.d(n, {
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
      var t = s(735250);
      s(470079);
      var r = s(120356),
        o = s.n(r),
        i = s(726542),
        l = s(981631),
        a = s(145301);
      function c(e) {
        return null != e && Object.values(l.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: s } = e,
          r = i.Z.get(s);
        return (0, t.jsx)("div", {
          className: a.verifyConnectedAccount,
          children: (0, t.jsxs)("div", {
            children: [(0, t.jsx)(d, { platform: r }), n],
          }),
        });
      }
      function d(e) {
        let { platform: n, className: s } = e;
        return (0, t.jsxs)("div", {
          className: o()(a.logos, s),
          children: [
            (0, t.jsx)("div", { className: o()(a.logo, a.logoDiscord) }),
            (0, t.jsx)("div", { className: a.logosDivider }),
            (0, t.jsx)("div", {
              className: a.logo,
              style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
    },
    675207: function (e, n, s) {
      s.r(n),
        s.d(n, {
          AccountConnectionResult: function () {
            return A;
          },
          default: function () {
            return b;
          },
        }),
        s(610138),
        s(216116),
        s(78328),
        s(815648),
        s(47120),
        s(757143);
      var t = s(735250),
        r = s(470079),
        o = s(120356),
        i = s.n(o),
        l = s(266067),
        a = s(873546),
        c = s(442837),
        u = s(481060),
        d = s(457330),
        f = s(726542),
        C = s(536285),
        g = s(553795),
        m = s(656649),
        N = s(981631),
        p = s(689938),
        _ = s(934484);
      let h = null != window.opener,
        E = "https://dis.gd/Amazon-Music-Connection",
        v = (e) => new URLSearchParams(e.search);
      function b() {
        var e;
        let n = (0, l.k6)(),
          s = v((0, l.TH)()),
          o = s.get("code"),
          i = s.get("oauth_verifier"),
          a = null !== (e = s.get("state")) && void 0 !== e ? e : "",
          u = s.get("loading"),
          { type: p } = (0, l.UO)(),
          _ = (0, m.vJ)(p),
          E = null == i ? (null != o ? o : "") : i,
          b = (0, c.e7)([g.Z], () => g.Z.hasPendingAuthorizedState(a), [a]),
          [x, T] = r.useState(!0);
        return (r.useEffect(() => {
          let e;
          if (null != u || !b) return;
          for (let n of s.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = s.get(n));
          }
          let t = (e) => {
              let { status: s, body: t } = e;
              if (null != i) {
                if (null == t ? void 0 : t.redirect)
                  return n.replace(t.redirect);
                [200, 204].includes(s) &&
                  (n.replace(N.Z5c.CONNECTIONS_SUCCESS(i)),
                  h && window.close()),
                  T(!1);
              }
            },
            r = { code: E, openid_params: e, state: a },
            o = (e) => {
              null != i &&
                f.Z.isSupported(i) &&
                d.Z.callback(i, r, e).then(t, t);
            };
          if (h) {
            o(!1);
            return;
          }
          let i = (0, m.vJ)(p);
          C.default
            .request(N.Etm.CONNECTIONS_CALLBACK, { ...r, providerType: i })
            .then(t, (e) => o("RPCError" !== e.name))
            .then(() => C.default.disconnect());
        }, [E, b, n, u, p, s, a]),
        null != _ && f.Z.isSupported(_))
          ? (0, t.jsx)(A, { platformType: _, verifying: x })
          : null;
      }
      function A(e) {
        let n,
          s,
          { verifying: o, platformType: l } = e,
          c = f.Z.get(l),
          d = r.useCallback(() => {
            window.close();
          }, []);
        return (
          (n = o
            ? (0, t.jsx)("div", {
                className: _.message,
                children: p.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                  name: c.name,
                }),
              })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: i()(_.message, _.error),
                    children:
                      p.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                        name: c.name,
                      }),
                  }),
                  (0, t.jsx)("div", {
                    className: i()(_.message, _.details),
                    children:
                      p.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
                  }),
                  l !== N.ABu.AMAZON_MUSIC
                    ? null
                    : (0, t.jsx)("div", {
                        className: i()(_.message, _.details),
                        children: a.tq
                          ? p.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format(
                              {
                                link: () =>
                                  (0, t.jsx)(u.Anchor, {
                                    href: E,
                                    children: E,
                                  }),
                              },
                            )
                          : p.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format(
                              {
                                link: () =>
                                  (0, t.jsx)(u.Anchor, {
                                    href: E,
                                    children: E,
                                  }),
                              },
                            ),
                      }),
                ],
              })),
          (h || o) &&
            (s = (0, t.jsx)(u.Button, {
              className: _.btn,
              disabled: o,
              onClick: d,
              children: o
                ? (0, t.jsx)(u.Spinner, { itemClassName: _.spinnerItem })
                : p.Z.Messages.DONE,
            })),
          (0, t.jsxs)(m.UV, { platformType: l, children: [n, s] })
        );
      }
    },
    145301: function (e, n, s) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    934484: function (e, n, s) {
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
//# sourceMappingURL=308d678b61051a17072e.js.map
