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
    733427: function (e, n, t) {
      var r = t(470079);
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
          return c;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var r = t(266067);
      function c() {
        return new URLSearchParams((0, r.TH)().search);
      }
    },
    832462: function (e, n, t) {
      t.r(n), t(757143);
      var r = t(735250),
        c = t(470079),
        o = t(593473),
        l = t(266067),
        a = t(478677),
        i = t(457330),
        s = t(675207),
        u = t(981631);
      function f(e) {
        let { platformType: n } = e,
          t = (0, l.k6)();
        return (
          c.useEffect(() => {
            let { code: e, state: r } = o.parse(window.location.search),
              c = ""
                .concat(u.Z5c.CONNECTIONS_ERROR(n))
                .concat(window.location.search);
            if (null == e || null == r) {
              t.replace(c);
              return;
            }
            i.Z.linkDispatchAuthCallback(n, { code: e, state: r }).then(
              (e) => {
                let { status: r } = e;
                204 === r
                  ? t.replace(u.Z5c.CONNECTIONS_SUCCESS(n))
                  : t.replace(c);
              },
              () => {
                t.replace(c);
              },
            );
          }, [t, n]),
          (0, r.jsx)(s.VerifyAccountLoading, { platformType: n })
        );
      }
      n.default = function (e) {
        let { match: n } = e,
          t = n.params.type,
          { two_way_link_type: c } = o.parse(window.location.search);
        return [
          u.ABu.XBOX,
          u.ABu.PLAYSTATION_STAGING,
          u.ABu.PLAYSTATION,
          u.ABu.CRUNCHYROLL,
        ].includes(t) && c === a.g.DESKTOP
          ? (0, r.jsx)(f, { platformType: t })
          : null;
      };
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
          return s;
        },
      });
      var r = t(735250);
      t(470079);
      var c = t(120356),
        o = t.n(c),
        l = t(726542),
        a = t(981631),
        i = t(642827);
      function s(e) {
        return null != e && Object.values(a.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: t } = e,
          c = l.Z.get(t);
        return (0, r.jsx)("div", {
          className: i.verifyConnectedAccount,
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(f, { platform: c }), n],
          }),
        });
      }
      function f(e) {
        let { platform: n, className: t } = e;
        return (0, r.jsxs)("div", {
          className: o()(i.logos, t),
          children: [
            (0, r.jsx)("div", { className: o()(i.logo, i.logoDiscord) }),
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
            return g;
          },
          default: function () {
            return _;
          },
        }),
        t(47120),
        t(757143);
      var r = t(735250),
        c = t(470079),
        o = t(266067),
        l = t(604039),
        a = t(481060),
        i = t(457330),
        s = t(733427),
        u = t(169382),
        f = t(726542),
        d = t(536285),
        p = t(591759),
        C = t(656649),
        N = t(981631),
        O = t(689938),
        S = t(289720);
      let E = null != window.opener;
      function _() {
        var e;
        let n = (0, o.k6)(),
          t = (0, u.l)(),
          a = t.get("code"),
          O = t.get("oauth_verifier"),
          S = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          _ = t.get("loading"),
          { type: v } = (0, o.UO)(),
          m = (0, C.vJ)(v),
          [R, A] = c.useState(!1),
          b = (0, s.Z)(),
          T = null == O ? (null != a ? a : "") : O;
        return (c.useEffect(() => {
          let e;
          if (null != _) return;
          for (let n of t.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = t.get(n));
          }
          let r = (0, C.vJ)(v);
          null != r &&
            i.Z.sessionHandoff(r, S, T, e)
              .then(() => {
                A(!0);
              })
              .catch(async () => {
                let r = (e) => {
                    let { status: r, body: c } = e;
                    if (null != l) {
                      if (null == c ? void 0 : c.redirect) {
                        n.replace(N.Z5c.CONNECTIONS_SUCCESS(l)),
                          (window.location = c.redirect);
                        return;
                      }
                      if ([200, 204].includes(r)) {
                        n.replace(N.Z5c.CONNECTIONS_SUCCESS(l)),
                          E && window.close();
                        return;
                      }
                      null != c.code && t.append("error-code", c.code),
                        n.replace(
                          ""
                            .concat(N.Z5c.CONNECTIONS_ERROR(l), "?")
                            .concat(t.toString()),
                        );
                    }
                  },
                  c = { code: T, openid_params: e, state: S };
                async function o(e) {
                  if (null != l && f.Z.isSupported(l))
                    try {
                      let n = await i.Z.callback(l, c, e);
                      r(n);
                    } catch (e) {
                      r(e);
                    }
                }
                if (E) {
                  await o(!1);
                  return;
                }
                let l = (0, C.vJ)(v);
                try {
                  let e = await d.default.request(N.Etm.CONNECTIONS_CALLBACK, {
                    ...c,
                    providerType: l,
                  });
                  r(e);
                } catch (e) {
                  (null == e ? void 0 : e.code) !==
                    N.lTL.BAD_REQUEST_FOR_PROVIDER &&
                    (await o("RPCError" !== e.name));
                }
                d.default.disconnect();
              });
        }, [T, n, _, v, t, S]),
        c.useEffect(() => {
          let e;
          if (!R) return;
          let t = 0;
          async function r() {
            if (null == m) return;
            let { handoff_status: c, success_redirect: o } = (
              await i.Z.getHandoffStatus(m, S)
            ).body;
            if (c === l.g.HANDOFF_SUCCESS)
              return null != p.Z.toURLSafe(o)
                ? n.replace(o)
                : n.replace(N.Z5c.CONNECTIONS_SUCCESS(m));
            if (c === l.g.HANDOFF_ERROR || t >= 10)
              return n.replace(N.Z5c.CONNECTIONS_ERROR(m));
            e = setTimeout(() => {
              b() && ((t += 1), r());
            }, 1e3);
          }
          return (
            r(),
            () => {
              null != e && clearTimeout(e);
            }
          );
        }, [b, n, m, R, S]),
        null != m && f.Z.isSupported(m))
          ? (0, r.jsx)(g, { platformType: m })
          : null;
      }
      function g(e) {
        let { platformType: n } = e,
          t = f.Z.get(n);
        return (0, r.jsxs)(C.UV, {
          platformType: n,
          children: [
            (0, r.jsx)("div", {
              className: S.message,
              children: O.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                name: t.name,
              }),
            }),
            (0, r.jsx)(a.Button, {
              className: S.btn,
              disabled: !0,
              children: (0, r.jsx)(a.Spinner, { itemClassName: S.spinnerItem }),
            }),
          ],
        });
      }
    },
    604039: function (e, n, t) {
      var r, c;
      t.d(n, {
        g: function () {
          return r;
        },
      }),
        ((c = r || (r = {}))[(c.HANDOFF_AUTHORIZED = 0)] =
          "HANDOFF_AUTHORIZED"),
        (c[(c.HANDOFF_ERROR = 1)] = "HANDOFF_ERROR"),
        (c[(c.HANDOFF_SUCCESS = 2)] = "HANDOFF_SUCCESS");
    },
    478677: function (e, n, t) {
      var r, c;
      t.d(n, {
        g: function () {
          return r;
        },
      }),
        t(47120),
        ((c = r || (r = {})).MOBILE = "mobile"),
        (c.DESKTOP = "desktop"),
        (c.WEB = "web"),
        (c.DEVICE_CODE = "device_code");
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
//# sourceMappingURL=c53c01ed287e5f185450.js.map
