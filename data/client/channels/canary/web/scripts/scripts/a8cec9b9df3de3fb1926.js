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
    733427: function (e, n, t) {
      var r = t(192379);
      n.Z = () => {
        let e = r.useRef(!0);
        return (
          r.useEffect(
            () => () => {
              e.current = !1;
            },
            [],
          ),
          r.useCallback(() => e.current, [])
        );
      };
    },
    169382: function (e, n, t) {
      t.d(n, {
        l: function () {
          return o;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var r = t(512969);
      function o() {
        return new URLSearchParams((0, r.TH)().search);
      }
    },
    656649: function (e, n, t) {
      t.d(n, {
        KJ: function () {
          return f;
        },
        UV: function () {
          return a;
        },
        vJ: function () {
          return u;
        },
      });
      var r = t(200651);
      t(192379);
      var o = t(120356),
        c = t.n(o),
        i = t(726542),
        l = t(981631),
        s = t(41991);
      function u(e) {
        return null != e && Object.values(l.ABu).includes(e) ? e : null;
      }
      function a(e) {
        let { children: n, platformType: t } = e,
          o = i.Z.get(t);
        return (0, r.jsx)("div", {
          className: s.verifyConnectedAccount,
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(f, { platform: o }), n],
          }),
        });
      }
      function f(e) {
        let { platform: n, className: t } = e;
        return (0, r.jsxs)("div", {
          className: c()(s.logos, t),
          children: [
            (0, r.jsx)("div", { className: c()(s.logo, s.logoDiscord) }),
            (0, r.jsx)("div", { className: s.logosDivider }),
            (0, r.jsx)("div", {
              className: s.logo,
              style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
    },
    675207: function (e, n, t) {
      t.r(n),
        t.d(n, {
          VerifyAccountLoading: function () {
            return _;
          },
          default: function () {
            return S;
          },
        }),
        t(47120),
        t(757143);
      var r = t(200651),
        o = t(192379),
        c = t(512969),
        i = t(604039),
        l = t(481060),
        s = t(457330),
        u = t(733427),
        a = t(169382),
        f = t(726542),
        d = t(536285),
        p = t(591759),
        g = t(656649),
        v = t(981631),
        N = t(388032),
        O = t(916453);
      let C = null != window.opener;
      function S() {
        var e;
        let n = (0, c.k6)(),
          t = (0, a.l)(),
          l = t.get("code"),
          N = t.get("oauth_verifier"),
          O = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          S = t.get("loading"),
          { type: m } = (0, c.UO)(),
          b = (0, g.vJ)(m),
          [E, R] = o.useState(!1),
          h = (0, u.Z)(),
          A = null == N ? (null != l ? l : "") : N;
        return (o.useEffect(() => {
          let e;
          if (null != S) return;
          for (let n of t.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = t.get(n));
          }
          let r = (0, g.vJ)(m);
          null != r &&
            s.Z.sessionHandoff(r, O, A, e)
              .then(() => {
                R(!0);
              })
              .catch(async () => {
                let r = (e) => {
                    let { status: r, body: o } = e;
                    if (null != i) {
                      if (null == o ? void 0 : o.redirect) {
                        window.location = o.redirect;
                        return;
                      }
                      if ([200, 204].includes(r)) {
                        n.replace(v.Z5c.CONNECTIONS_SUCCESS(i)),
                          C && window.close();
                        return;
                      }
                      null != o.code && t.append("error-code", o.code),
                        n.replace(
                          ""
                            .concat(v.Z5c.CONNECTIONS_ERROR(i), "?")
                            .concat(t.toString()),
                        );
                    }
                  },
                  o = { code: A, openid_params: e, state: O };
                async function c(e) {
                  if (null != i && f.Z.isSupported(i))
                    try {
                      let n = await s.Z.callback(i, o, e);
                      r(n);
                    } catch (e) {
                      r(e);
                    }
                }
                if (C) {
                  await c(!1);
                  return;
                }
                let i = (0, g.vJ)(m);
                try {
                  let e = await d.default.request(v.Etm.CONNECTIONS_CALLBACK, {
                    ...o,
                    providerType: i,
                  });
                  r(e);
                } catch (e) {
                  (null == e ? void 0 : e.code) !==
                    v.lTL.BAD_REQUEST_FOR_PROVIDER &&
                    (await c("RPCError" !== e.name));
                }
                d.default.disconnect();
              });
        }, [A, n, S, m, t, O]),
        o.useEffect(() => {
          let e;
          if (!E) return;
          let t = 0;
          async function r() {
            if (null == b) return;
            let { handoff_status: o, success_redirect: c } = (
              await s.Z.getHandoffStatus(b, O)
            ).body;
            if (o === i.g.HANDOFF_SUCCESS) {
              if (null == p.Z.toURLSafe(c))
                return n.replace(v.Z5c.CONNECTIONS_SUCCESS(b));
              window.location = c;
              return;
            }
            if (o === i.g.HANDOFF_ERROR || t >= 10)
              return n.replace(v.Z5c.CONNECTIONS_ERROR(b));
            e = setTimeout(() => {
              h() && ((t += 1), r());
            }, 1e3);
          }
          return (
            r(),
            () => {
              null != e && clearTimeout(e);
            }
          );
        }, [h, n, b, E, O]),
        null != b && f.Z.isSupported(b))
          ? (0, r.jsx)(_, { platformType: b })
          : null;
      }
      function _(e) {
        let { platformType: n } = e,
          t = f.Z.get(n);
        return (0, r.jsxs)(g.UV, {
          platformType: n,
          children: [
            (0, r.jsx)("div", {
              className: O.message,
              children: N.intl.format(N.t.AOKOe3, { name: t.name }),
            }),
            (0, r.jsx)(l.Button, {
              className: O.btn,
              disabled: !0,
              children: (0, r.jsx)(l.Spinner, { itemClassName: O.spinnerItem }),
            }),
          ],
        });
      }
    },
    604039: function (e, n, t) {
      var r, o;
      t.d(n, {
        g: function () {
          return r;
        },
      }),
        ((o = r || (r = {}))[(o.HANDOFF_AUTHORIZED = 0)] =
          "HANDOFF_AUTHORIZED"),
        (o[(o.HANDOFF_ERROR = 1)] = "HANDOFF_ERROR"),
        (o[(o.HANDOFF_SUCCESS = 2)] = "HANDOFF_SUCCESS");
    },
    41991: function (e, n, t) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    916453: function (e, n, t) {
      e.exports = {
        message: "message_b159b8",
        btn: "btn_b159b8",
        spinnerItem: "spinnerItem_b159b8",
      };
    },
  },
]);
//# sourceMappingURL=a8cec9b9df3de3fb1926.js.map
