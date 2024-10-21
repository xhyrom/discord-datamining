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
        s = t(726542),
        i = t(981631),
        l = t(642827);
      function u(e) {
        return null != e && Object.values(i.ABu).includes(e) ? e : null;
      }
      function a(e) {
        let { children: n, platformType: t } = e,
          o = s.Z.get(t);
        return (0, r.jsx)("div", {
          className: l.verifyConnectedAccount,
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(f, { platform: o }), n],
          }),
        });
      }
      function f(e) {
        let { platform: n, className: t } = e;
        return (0, r.jsxs)("div", {
          className: c()(l.logos, t),
          children: [
            (0, r.jsx)("div", { className: c()(l.logo, l.logoDiscord) }),
            (0, r.jsx)("div", { className: l.logosDivider }),
            (0, r.jsx)("div", {
              className: l.logo,
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
            return S;
          },
          default: function () {
            return O;
          },
        }),
        t(47120),
        t(757143);
      var r = t(200651),
        o = t(192379),
        c = t(512969),
        s = t(604039),
        i = t(481060),
        l = t(457330),
        u = t(733427),
        a = t(169382),
        f = t(726542),
        d = t(536285),
        p = t(591759),
        g = t(656649),
        N = t(981631),
        C = t(689938),
        v = t(289720);
      let _ = null != window.opener;
      function O() {
        var e;
        let n = (0, c.k6)(),
          t = (0, a.l)(),
          i = t.get("code"),
          C = t.get("oauth_verifier"),
          v = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          O = t.get("loading"),
          { type: m } = (0, c.UO)(),
          E = (0, g.vJ)(m),
          [b, R] = o.useState(!1),
          h = (0, u.Z)(),
          A = null == C ? (null != i ? i : "") : C;
        return (o.useEffect(() => {
          let e;
          if (null != O) return;
          for (let n of t.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = t.get(n));
          }
          let r = (0, g.vJ)(m);
          null != r &&
            l.Z.sessionHandoff(r, v, A, e)
              .then(() => {
                R(!0);
              })
              .catch(async () => {
                let r = (e) => {
                    let { status: r, body: o } = e;
                    if (null != s) {
                      if (null == o ? void 0 : o.redirect) {
                        window.location = o.redirect;
                        return;
                      }
                      if ([200, 204].includes(r)) {
                        n.replace(N.Z5c.CONNECTIONS_SUCCESS(s)),
                          _ && window.close();
                        return;
                      }
                      null != o.code && t.append("error-code", o.code),
                        n.replace(
                          ""
                            .concat(N.Z5c.CONNECTIONS_ERROR(s), "?")
                            .concat(t.toString()),
                        );
                    }
                  },
                  o = { code: A, openid_params: e, state: v };
                async function c(e) {
                  if (null != s && f.Z.isSupported(s))
                    try {
                      let n = await l.Z.callback(s, o, e);
                      r(n);
                    } catch (e) {
                      r(e);
                    }
                }
                if (_) {
                  await c(!1);
                  return;
                }
                let s = (0, g.vJ)(m);
                try {
                  let e = await d.default.request(N.Etm.CONNECTIONS_CALLBACK, {
                    ...o,
                    providerType: s,
                  });
                  r(e);
                } catch (e) {
                  (null == e ? void 0 : e.code) !==
                    N.lTL.BAD_REQUEST_FOR_PROVIDER &&
                    (await c("RPCError" !== e.name));
                }
                d.default.disconnect();
              });
        }, [A, n, O, m, t, v]),
        o.useEffect(() => {
          let e;
          if (!b) return;
          let t = 0;
          async function r() {
            if (null == E) return;
            let { handoff_status: o, success_redirect: c } = (
              await l.Z.getHandoffStatus(E, v)
            ).body;
            if (o === s.g.HANDOFF_SUCCESS) {
              if (null == p.Z.toURLSafe(c))
                return n.replace(N.Z5c.CONNECTIONS_SUCCESS(E));
              window.location = c;
              return;
            }
            if (o === s.g.HANDOFF_ERROR || t >= 10)
              return n.replace(N.Z5c.CONNECTIONS_ERROR(E));
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
        }, [h, n, E, b, v]),
        null != E && f.Z.isSupported(E))
          ? (0, r.jsx)(S, { platformType: E })
          : null;
      }
      function S(e) {
        let { platformType: n } = e,
          t = f.Z.get(n);
        return (0, r.jsxs)(g.UV, {
          platformType: n,
          children: [
            (0, r.jsx)("div", {
              className: v.message,
              children: C.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                name: t.name,
              }),
            }),
            (0, r.jsx)(i.Button, {
              className: v.btn,
              disabled: !0,
              children: (0, r.jsx)(i.Spinner, { itemClassName: v.spinnerItem }),
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
    642827: function (e, n, t) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    289720: function (e, n, t) {
      e.exports = {
        message: "message_b159b8",
        btn: "btn_b159b8",
        spinnerItem: "spinnerItem_b159b8",
      };
    },
  },
]);
//# sourceMappingURL=100b024db8bf9b594660.js.map
