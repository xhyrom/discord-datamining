"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68661"],
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
    832462: function (e, n, t) {
      t.r(n), t(47120), t(757143);
      var s = t(735250),
        r = t(470079),
        i = t(593473),
        o = t(266067),
        l = t(478677),
        a = t(457330),
        c = t(675207),
        u = t(981631);
      function d(e) {
        let { platformType: n } = e,
          [t, l] = r.useState("verifying"),
          d = (0, o.k6)();
        return (
          r.useEffect(() => {
            let { code: e, state: t } = i.parse(window.location.search);
            if (null == e || null == t) {
              l("error");
              return;
            }
            a.Z.linkDispatchAuthCallback(n, { code: e, state: t }).then(
              (e) => {
                let { status: t } = e;
                if (204 === t) return d.replace(u.Z5c.CONNECTIONS_SUCCESS(n));
                l("error");
              },
              () => {
                l("error");
              },
            );
          }, [d, n]),
          (0, s.jsx)(c.AccountConnectionResult, {
            platformType: n,
            verifying: "verifying" === t,
          })
        );
      }
      n.default = function (e) {
        let { match: n } = e,
          t = n.params.type,
          { two_way_link_type: r } = i.parse(window.location.search);
        return [
          u.ABu.XBOX,
          u.ABu.PLAYSTATION_STAGING,
          u.ABu.PLAYSTATION,
          u.ABu.CRUNCHYROLL,
        ].includes(t) && r === l.g.DESKTOP
          ? (0, s.jsx)(d, { platformType: t })
          : null;
      };
    },
    656649: function (e, n, t) {
      t.d(n, {
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
      var s = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        o = t(726542),
        l = t(981631),
        a = t(145301);
      function c(e) {
        return null != e && Object.values(l.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: t } = e,
          r = o.Z.get(t);
        return (0, s.jsx)("div", {
          className: a.verifyConnectedAccount,
          children: (0, s.jsxs)("div", {
            children: [(0, s.jsx)(d, { platform: r }), n],
          }),
        });
      }
      function d(e) {
        let { platform: n, className: t } = e;
        return (0, s.jsxs)("div", {
          className: i()(a.logos, t),
          children: [
            (0, s.jsx)("div", { className: i()(a.logo, a.logoDiscord) }),
            (0, s.jsx)("div", { className: a.logosDivider }),
            (0, s.jsx)("div", {
              className: a.logo,
              style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
    },
    675207: function (e, n, t) {
      t.r(n),
        t.d(n, {
          AccountConnectionResult: function () {
            return b;
          },
          default: function () {
            return A;
          },
        }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120),
        t(757143);
      var s = t(735250),
        r = t(470079),
        i = t(120356),
        o = t.n(i),
        l = t(266067),
        a = t(873546),
        c = t(442837),
        u = t(481060),
        d = t(457330),
        f = t(726542),
        C = t(536285),
        p = t(553795),
        g = t(656649),
        N = t(981631),
        m = t(689938),
        E = t(934484);
      let _ = null != window.opener,
        h = "https://dis.gd/Amazon-Music-Connection",
        v = (e) => new URLSearchParams(e.search);
      function A() {
        var e;
        let n = (0, l.k6)(),
          t = v((0, l.TH)()),
          i = t.get("code"),
          o = t.get("oauth_verifier"),
          a = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          u = t.get("loading"),
          { type: m } = (0, l.UO)(),
          E = (0, g.vJ)(m),
          h = null == o ? (null != i ? i : "") : o,
          A = (0, c.e7)([p.Z], () => p.Z.hasPendingAuthorizedState(a), [a]),
          [T, O] = r.useState(!0);
        return (r.useEffect(() => {
          let e;
          if (null != u || !A) return;
          for (let n of t.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = t.get(n));
          }
          let s = (e) => {
              let { status: t, body: s } = e;
              if (null != o) {
                if (null == s ? void 0 : s.redirect)
                  return n.replace(s.redirect);
                [200, 204].includes(t) &&
                  (n.replace(N.Z5c.CONNECTIONS_SUCCESS(o)),
                  _ && window.close()),
                  O(!1);
              }
            },
            r = { code: h, openid_params: e, state: a },
            i = (e) => {
              null != o &&
                f.Z.isSupported(o) &&
                d.Z.callback(o, r, e).then(s, s);
            };
          if (_) {
            i(!1);
            return;
          }
          let o = (0, g.vJ)(m);
          C.default
            .request(N.Etm.CONNECTIONS_CALLBACK, { ...r, providerType: o })
            .then(s, (e) => i("RPCError" !== e.name))
            .then(() => C.default.disconnect());
        }, [h, A, n, u, m, t, a]),
        null != E && f.Z.isSupported(E))
          ? (0, s.jsx)(b, { platformType: E, verifying: T })
          : null;
      }
      function b(e) {
        let n,
          t,
          { verifying: i, platformType: l } = e,
          c = f.Z.get(l),
          d = r.useCallback(() => {
            window.close();
          }, []);
        return (
          (n = i
            ? (0, s.jsx)("div", {
                className: E.message,
                children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                  name: c.name,
                }),
              })
            : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("div", {
                    className: o()(E.message, E.error),
                    children:
                      m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                        name: c.name,
                      }),
                  }),
                  (0, s.jsx)("div", {
                    className: o()(E.message, E.details),
                    children:
                      m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
                  }),
                  l !== N.ABu.AMAZON_MUSIC
                    ? null
                    : (0, s.jsx)("div", {
                        className: o()(E.message, E.details),
                        children: a.tq
                          ? m.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format(
                              {
                                link: () =>
                                  (0, s.jsx)(u.Anchor, {
                                    href: h,
                                    children: h,
                                  }),
                              },
                            )
                          : m.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format(
                              {
                                link: () =>
                                  (0, s.jsx)(u.Anchor, {
                                    href: h,
                                    children: h,
                                  }),
                              },
                            ),
                      }),
                ],
              })),
          (_ || i) &&
            (t = (0, s.jsx)(u.Button, {
              className: E.btn,
              disabled: i,
              onClick: d,
              children: i
                ? (0, s.jsx)(u.Spinner, { itemClassName: E.spinnerItem })
                : m.Z.Messages.DONE,
            })),
          (0, s.jsxs)(g.UV, { platformType: l, children: [n, t] })
        );
      }
    },
    478677: function (e, n, t) {
      var s, r;
      t.d(n, {
        g: function () {
          return s;
        },
      }),
        t(47120),
        ((r = s || (s = {})).MOBILE = "mobile"),
        (r.DESKTOP = "desktop"),
        (r.WEB = "web"),
        (r.DEVICE_CODE = "device_code");
    },
    145301: function (e, n, t) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    934484: function (e, n, t) {
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
//# sourceMappingURL=8483d179a4c934054366.js.map
