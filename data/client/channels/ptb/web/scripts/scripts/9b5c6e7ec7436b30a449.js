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
          return c;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var r = t(512969);
      function c() {
        return new URLSearchParams((0, r.TH)().search);
      }
    },
    832462: function (e, n, t) {
      t.r(n), t(757143);
      var r = t(200651),
        c = t(192379),
        o = t(593473),
        l = t(512969),
        i = t(478677),
        a = t(457330),
        u = t(675207),
        s = t(981631);
      function f(e) {
        let { platformType: n } = e,
          t = (0, l.k6)();
        return (
          c.useEffect(() => {
            let { code: e, state: r } = o.parse(window.location.search),
              c = ""
                .concat(s.Z5c.CONNECTIONS_ERROR(n))
                .concat(window.location.search);
            if (null == e || null == r) {
              t.replace(c);
              return;
            }
            a.Z.linkDispatchAuthCallback(n, { code: e, state: r }).then(
              (e) => {
                let { status: r } = e;
                204 === r
                  ? t.replace(s.Z5c.CONNECTIONS_SUCCESS(n))
                  : t.replace(c);
              },
              () => {
                t.replace(c);
              },
            );
          }, [t, n]),
          (0, r.jsx)(u.VerifyAccountLoading, { platformType: n })
        );
      }
      n.default = function (e) {
        let { match: n } = e,
          t = n.params.type,
          { two_way_link_type: c } = o.parse(window.location.search);
        return [
          s.ABu.XBOX,
          s.ABu.PLAYSTATION_STAGING,
          s.ABu.PLAYSTATION,
          s.ABu.CRUNCHYROLL,
        ].includes(t) && c === i.g.DESKTOP
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
          return s;
        },
        vJ: function () {
          return u;
        },
      });
      var r = t(200651);
      t(192379);
      var c = t(120356),
        o = t.n(c),
        l = t(726542),
        i = t(981631),
        a = t(642827);
      function u(e) {
        return null != e && Object.values(i.ABu).includes(e) ? e : null;
      }
      function s(e) {
        let { children: n, platformType: t } = e,
          c = l.Z.get(t);
        return (0, r.jsx)("div", {
          className: a.verifyConnectedAccount,
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(f, { platform: c }), n],
          }),
        });
      }
      function f(e) {
        let { platform: n, className: t } = e;
        return (0, r.jsxs)("div", {
          className: o()(a.logos, t),
          children: [
            (0, r.jsx)("div", { className: o()(a.logo, a.logoDiscord) }),
            (0, r.jsx)("div", { className: a.logosDivider }),
            (0, r.jsx)("div", {
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
          VerifyAccountLoading: function () {
            return E;
          },
          default: function () {
            return _;
          },
        }),
        t(47120),
        t(757143);
      var r = t(200651),
        c = t(192379),
        o = t(512969),
        l = t(604039),
        i = t(481060),
        a = t(457330),
        u = t(733427),
        s = t(169382),
        f = t(726542),
        d = t(536285),
        p = t(591759),
        O = t(656649),
        C = t(981631),
        N = t(388032),
        S = t(289720);
      let g = null != window.opener;
      function _() {
        var e;
        let n = (0, o.k6)(),
          t = (0, s.l)(),
          i = t.get("code"),
          N = t.get("oauth_verifier"),
          S = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          _ = t.get("loading"),
          { type: v } = (0, o.UO)(),
          m = (0, O.vJ)(v),
          [A, R] = c.useState(!1),
          b = (0, u.Z)(),
          h = null == N ? (null != i ? i : "") : N;
        return (c.useEffect(() => {
          let e;
          if (null != _) return;
          for (let n of t.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = t.get(n));
          }
          let r = (0, O.vJ)(v);
          null != r &&
            a.Z.sessionHandoff(r, S, h, e)
              .then(() => {
                R(!0);
              })
              .catch(async () => {
                let r = (e) => {
                    let { status: r, body: c } = e;
                    if (null != l) {
                      if (null == c ? void 0 : c.redirect) {
                        window.location = c.redirect;
                        return;
                      }
                      if ([200, 204].includes(r)) {
                        n.replace(C.Z5c.CONNECTIONS_SUCCESS(l)),
                          g && window.close();
                        return;
                      }
                      null != c.code && t.append("error-code", c.code),
                        n.replace(
                          ""
                            .concat(C.Z5c.CONNECTIONS_ERROR(l), "?")
                            .concat(t.toString()),
                        );
                    }
                  },
                  c = { code: h, openid_params: e, state: S };
                async function o(e) {
                  if (null != l && f.Z.isSupported(l))
                    try {
                      let n = await a.Z.callback(l, c, e);
                      r(n);
                    } catch (e) {
                      r(e);
                    }
                }
                if (g) {
                  await o(!1);
                  return;
                }
                let l = (0, O.vJ)(v);
                try {
                  let e = await d.default.request(C.Etm.CONNECTIONS_CALLBACK, {
                    ...c,
                    providerType: l,
                  });
                  r(e);
                } catch (e) {
                  (null == e ? void 0 : e.code) !==
                    C.lTL.BAD_REQUEST_FOR_PROVIDER &&
                    (await o("RPCError" !== e.name));
                }
                d.default.disconnect();
              });
        }, [h, n, _, v, t, S]),
        c.useEffect(() => {
          let e;
          if (!A) return;
          let t = 0;
          async function r() {
            if (null == m) return;
            let { handoff_status: c, success_redirect: o } = (
              await a.Z.getHandoffStatus(m, S)
            ).body;
            if (c === l.g.HANDOFF_SUCCESS) {
              if (null == p.Z.toURLSafe(o))
                return n.replace(C.Z5c.CONNECTIONS_SUCCESS(m));
              window.location = o;
              return;
            }
            if (c === l.g.HANDOFF_ERROR || t >= 10)
              return n.replace(C.Z5c.CONNECTIONS_ERROR(m));
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
        }, [b, n, m, A, S]),
        null != m && f.Z.isSupported(m))
          ? (0, r.jsx)(E, { platformType: m })
          : null;
      }
      function E(e) {
        let { platformType: n } = e,
          t = f.Z.get(n);
        return (0, r.jsxs)(O.UV, {
          platformType: n,
          children: [
            (0, r.jsx)("div", {
              className: S.message,
              children: N.intl.format(N.t.AOKOe3, { name: t.name }),
            }),
            (0, r.jsx)(i.Button, {
              className: S.btn,
              disabled: !0,
              children: (0, r.jsx)(i.Spinner, { itemClassName: S.spinnerItem }),
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
//# sourceMappingURL=9b5c6e7ec7436b30a449.js.map
