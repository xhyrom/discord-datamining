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
        l = t(593473),
        o = t(266067),
        i = t(478677),
        a = t(457330),
        c = t(675207),
        u = t(981631);
      function d(e) {
        let { platformType: n } = e,
          [t, i] = r.useState("verifying"),
          d = (0, o.k6)();
        return (
          r.useEffect(() => {
            let { code: e, state: t } = l.parse(window.location.search);
            if (null == e || null == t) {
              i("error");
              return;
            }
            a.Z.linkDispatchAuthCallback(n, { code: e, state: t }).then(
              (e) => {
                let { status: t } = e;
                if (204 === t) return d.replace(u.Z5c.CONNECTIONS_SUCCESS(n));
                i("error");
              },
              () => {
                i("error");
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
          { two_way_link_type: r } = l.parse(window.location.search);
        return [
          u.ABu.XBOX,
          u.ABu.PLAYSTATION_STAGING,
          u.ABu.PLAYSTATION,
          u.ABu.CRUNCHYROLL,
        ].includes(t) && r === i.g.DESKTOP
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
        l = t.n(r),
        o = t(726542),
        i = t(981631),
        a = t(145301);
      function c(e) {
        return null != e && Object.values(i.ABu).includes(e) ? e : null;
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
          className: l()(a.logos, t),
          children: [
            (0, s.jsx)("div", { className: l()(a.logo, a.logoDiscord) }),
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
            return h;
          },
          default: function () {
            return v;
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
        l = t(120356),
        o = t.n(l),
        i = t(266067),
        a = t(873546),
        c = t(481060),
        u = t(457330),
        d = t(726542),
        f = t(536285),
        C = t(656649),
        p = t(981631),
        g = t(689938),
        N = t(934484);
      let m = null != window.opener,
        E = "https://dis.gd/Amazon-Music-Connection",
        _ = (e) => new URLSearchParams(e.search);
      function v() {
        var e;
        let n = (0, i.k6)(),
          t = _((0, i.TH)()),
          l = t.get("code"),
          o = t.get("oauth_verifier"),
          a = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          c = t.get("loading"),
          { type: g } = (0, i.UO)(),
          N = (0, C.vJ)(g),
          E = null == o ? (null != l ? l : "") : o,
          [v, A] = r.useState(!0);
        return (r.useEffect(() => {
          let e;
          if (null != c) return;
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
                  (n.replace(p.Z5c.CONNECTIONS_SUCCESS(o)),
                  m && window.close()),
                  A(!1);
              }
            },
            r = { code: E, openid_params: e, state: a },
            l = (e) => {
              null != o &&
                d.Z.isSupported(o) &&
                u.Z.callback(o, r, e).then(s, s);
            };
          if (m) {
            l(!1);
            return;
          }
          let o = (0, C.vJ)(g);
          f.default
            .request(p.Etm.CONNECTIONS_CALLBACK, { ...r, providerType: o })
            .then(s, (e) => l("RPCError" !== e.name))
            .then(() => f.default.disconnect());
        }, [E, n, c, g, t, a]),
        null != N && d.Z.isSupported(N))
          ? (0, s.jsx)(h, { platformType: N, verifying: v })
          : null;
      }
      function h(e) {
        let n,
          t,
          { verifying: l, platformType: i } = e,
          u = d.Z.get(i),
          f = r.useCallback(() => {
            window.close();
          }, []);
        return (
          (n = l
            ? (0, s.jsx)("div", {
                className: N.message,
                children: g.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                  name: u.name,
                }),
              })
            : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("div", {
                    className: o()(N.message, N.error),
                    children:
                      g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                        name: u.name,
                      }),
                  }),
                  (0, s.jsx)("div", {
                    className: o()(N.message, N.details),
                    children:
                      g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
                  }),
                  i !== p.ABu.AMAZON_MUSIC
                    ? null
                    : (0, s.jsx)("div", {
                        className: o()(N.message, N.details),
                        children: a.tq
                          ? g.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format(
                              {
                                link: () =>
                                  (0, s.jsx)(c.Anchor, {
                                    href: E,
                                    children: E,
                                  }),
                              },
                            )
                          : g.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format(
                              {
                                link: () =>
                                  (0, s.jsx)(c.Anchor, {
                                    href: E,
                                    children: E,
                                  }),
                              },
                            ),
                      }),
                ],
              })),
          (m || l) &&
            (t = (0, s.jsx)(c.Button, {
              className: N.btn,
              disabled: l,
              onClick: f,
              children: l
                ? (0, s.jsx)(c.Spinner, { itemClassName: N.spinnerItem })
                : g.Z.Messages.DONE,
            })),
          (0, s.jsxs)(C.UV, { platformType: i, children: [n, t] })
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
//# sourceMappingURL=fbafeaea2cf321f6de05.js.map
