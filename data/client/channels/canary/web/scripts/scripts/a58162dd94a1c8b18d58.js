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
      var r = t(266067);
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
          return u;
        },
        vJ: function () {
          return a;
        },
      });
      var r = t(735250);
      t(470079);
      var o = t(120356),
        c = t.n(o),
        l = t(726542),
        s = t(981631),
        i = t(642827);
      function a(e) {
        return null != e && Object.values(s.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: t } = e,
          o = l.Z.get(t);
        return (0, r.jsx)("div", {
          className: i.verifyConnectedAccount,
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(f, { platform: o }), n],
          }),
        });
      }
      function f(e) {
        let { platform: n, className: t } = e;
        return (0, r.jsxs)("div", {
          className: c()(i.logos, t),
          children: [
            (0, r.jsx)("div", { className: c()(i.logo, i.logoDiscord) }),
            (0, r.jsx)("div", { className: i.logosDivider }),
            (0, r.jsx)("div", {
              className: i.logo,
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
            return v;
          },
          default: function () {
            return _;
          },
        }),
        t(47120),
        t(757143);
      var r = t(735250),
        o = t(470079),
        c = t(266067),
        l = t(604039),
        s = t(481060),
        i = t(457330),
        a = t(733427),
        u = t(169382),
        f = t(726542),
        d = t(536285),
        p = t(591759),
        N = t(656649),
        C = t(981631),
        g = t(689938),
        S = t(289720);
      let O = null != window.opener;
      function _() {
        var e;
        let n = (0, c.k6)(),
          t = (0, u.l)(),
          s = t.get("code"),
          g = t.get("oauth_verifier"),
          S = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          _ = t.get("loading"),
          { type: m } = (0, c.UO)(),
          E = (0, N.vJ)(m),
          [b, R] = o.useState(!1),
          h = (0, a.Z)(),
          A = null == g ? (null != s ? s : "") : g;
        return (o.useEffect(() => {
          let e;
          if (null != _) return;
          for (let n of t.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = t.get(n));
          }
          let r = (0, N.vJ)(m);
          null != r &&
            i.Z.sessionHandoff(r, S, A, e)
              .then(() => {
                R(!0);
              })
              .catch(async () => {
                let r = (e) => {
                    let { status: r, body: o } = e;
                    if (null != l) {
                      if (null == o ? void 0 : o.redirect) {
                        n.replace(C.Z5c.CONNECTIONS_SUCCESS(l)),
                          (window.location = o.redirect);
                        return;
                      }
                      if ([200, 204].includes(r)) {
                        n.replace(C.Z5c.CONNECTIONS_SUCCESS(l)),
                          O && window.close();
                        return;
                      }
                      null != o.code && t.append("error-code", o.code),
                        n.replace(
                          ""
                            .concat(C.Z5c.CONNECTIONS_ERROR(l), "?")
                            .concat(t.toString()),
                        );
                    }
                  },
                  o = { code: A, openid_params: e, state: S };
                async function c(e) {
                  if (null != l && f.Z.isSupported(l))
                    try {
                      let n = await i.Z.callback(l, o, e);
                      r(n);
                    } catch (e) {
                      r(e);
                    }
                }
                if (O) {
                  await c(!1);
                  return;
                }
                let l = (0, N.vJ)(m);
                try {
                  let e = await d.default.request(C.Etm.CONNECTIONS_CALLBACK, {
                    ...o,
                    providerType: l,
                  });
                  r(e);
                } catch (e) {
                  (null == e ? void 0 : e.code) !==
                    C.lTL.BAD_REQUEST_FOR_PROVIDER &&
                    (await c("RPCError" !== e.name));
                }
                d.default.disconnect();
              });
        }, [A, n, _, m, t, S]),
        o.useEffect(() => {
          let e;
          if (!b) return;
          let t = 0;
          async function r() {
            if (null == E) return;
            let { handoff_status: o, success_redirect: c } = (
              await i.Z.getHandoffStatus(E, S)
            ).body;
            if (o === l.g.HANDOFF_SUCCESS)
              return null != p.Z.toURLSafe(c)
                ? n.replace(c)
                : n.replace(C.Z5c.CONNECTIONS_SUCCESS(E));
            if (o === l.g.HANDOFF_ERROR || t >= 10)
              return n.replace(C.Z5c.CONNECTIONS_ERROR(E));
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
        }, [h, n, E, b, S]),
        null != E && f.Z.isSupported(E))
          ? (0, r.jsx)(v, { platformType: E })
          : null;
      }
      function v(e) {
        let { platformType: n } = e;
        return (0, r.jsxs)(N.UV, {
          platformType: n,
          children: [
            (0, r.jsx)("div", {
              className: S.message,
              children: g.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                name: platform.name,
              }),
            }),
            (0, r.jsx)(s.Button, {
              className: S.btn,
              disabled: !0,
              children: (0, r.jsx)(s.Spinner, { itemClassName: S.spinnerItem }),
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
//# sourceMappingURL=a58162dd94a1c8b18d58.js.map
