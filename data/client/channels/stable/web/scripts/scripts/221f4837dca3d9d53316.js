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
          return o;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var r = t(192379),
        c = t(512969);
      function o() {
        let e = (0, c.TH)();
        return r.useMemo(() => new URLSearchParams(e.search), [e.search]);
      }
    },
    832462: function (e, n, t) {
      t.r(n), t(757143);
      var r = t(200651),
        c = t(192379),
        o = t(593473),
        i = t(512969),
        l = t(478677),
        a = t(457330),
        u = t(675207),
        s = t(981631);
      function f(e) {
        let { platformType: n } = e,
          t = (0, i.k6)();
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
        ].includes(t) && c === l.g.DESKTOP
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
        i = t(726542),
        l = t(981631),
        a = t(978994);
      function u(e) {
        return null != e && Object.values(l.ABu).includes(e) ? e : null;
      }
      function s(e) {
        let { children: n, platformType: t } = e,
          c = i.Z.get(t);
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
          VerifyAccountDeekLink: function () {
            return R;
          },
          VerifyAccountLoading: function () {
            return b;
          },
          default: function () {
            return m;
          },
        }),
        t(47120),
        t(757143),
        t(773603);
      var r,
        c,
        o = t(200651),
        i = t(192379),
        l = t(512969),
        a = t(873546),
        u = t(604039),
        s = t(481060),
        f = t(457330),
        d = t(733427),
        p = t(169382),
        C = t(726542),
        N = t(536285),
        O = t(591759),
        E = t(656649),
        S = t(981631),
        _ = t(388032),
        g = t(66825);
      let v = null != window.opener;
      function m() {
        var e, n;
        let t = (0, l.k6)(),
          r = (0, p.l)(),
          c = r.get("code"),
          s = r.get("oauth_verifier"),
          N = null !== (e = r.get("state")) && void 0 !== e ? e : "",
          _ = r.get("loading"),
          g = null !== (n = r.get("iss")) && void 0 !== n ? n : void 0,
          { type: m } = (0, l.UO)(),
          T = (0, E.vJ)(m),
          [y, I] = i.useState(!1),
          [w, x] = i.useState(!1),
          L = (0, d.Z)(),
          Z = null == s ? (null != c ? c : "") : s;
        i.useEffect(() => {
          let e;
          if (null != _) return;
          for (let n of r.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = r.get(n));
          }
          let n = (0, E.vJ)(m);
          (async function c() {
            if (null == n || !C.Z.isSupported(n)) return;
            function c(e) {
              let { status: c, body: o } = e;
              if (null != n) {
                if (null == o ? void 0 : o.redirect) {
                  window.location = o.redirect;
                  return;
                }
                if ([200, 204].includes(c)) {
                  t.replace(S.Z5c.CONNECTIONS_SUCCESS(n)), v && window.close();
                  return;
                }
                (null == o ? void 0 : o.code) != null &&
                  r.append("error-code", o.code),
                  t.replace(
                    ""
                      .concat(S.Z5c.CONNECTIONS_ERROR(n), "?")
                      .concat(r.toString()),
                  );
              }
            }
            if (
              await A({
                platformType: n,
                code: Z,
                state: N,
                openidParams: e,
                iss: g,
                handleCallbackResponse: c,
              })
            )
              return;
            let o = await h(n, N, Z, e, g);
            if (0 === o) {
              I(!0);
              return;
            }
            if (1 === o) {
              t.replace(
                "".concat(S.Z5c.CONNECTIONS_ERROR(n), "?").concat(r.toString()),
              );
              return;
            }
            if (3 === o) {
              if (a.tq) {
                x(!0);
                return;
              }
              t.replace(
                "".concat(S.Z5c.CONNECTIONS_ERROR(n), "?").concat(r.toString()),
              );
              return;
            }
            D({
              platformType: n,
              state: N,
              handleCallbackResponse: c,
              handleCallbackError: () => {
                t.replace(
                  ""
                    .concat(S.Z5c.CONNECTIONS_ERROR(n), "?")
                    .concat(r.toString()),
                );
              },
              openidParams: e,
              code: Z,
              iss: g,
            });
          })();
        }, [Z, t, _, m, r, N, g]),
          i.useEffect(() => {
            let e;
            if (!y) return;
            let n = 0;
            async function r() {
              if (null == T) return;
              let { handoff_status: c, success_redirect: o } = (
                await f.Z.getHandoffStatus(T, N)
              ).body;
              if (c === u.g.HANDOFF_SUCCESS) {
                if (null == O.Z.toURLSafe(o))
                  return t.replace(S.Z5c.CONNECTIONS_SUCCESS(T));
                window.location = o;
                return;
              }
              if (c === u.g.HANDOFF_ERROR || n >= 10)
                return t.replace(S.Z5c.CONNECTIONS_ERROR(T));
              e = setTimeout(() => {
                L() && ((n += 1), r());
              }, 1e3);
            }
            return (
              r(),
              () => {
                null != e && clearTimeout(e);
              }
            );
          }, [L, t, T, y, N]);
        let j = i.useMemo(() => {
          if (null != T)
            return "discord://"
              .concat(S.Z5c.CONNECTIONS(T), "/?")
              .concat(r.toString());
        }, [T, r]);
        return null != T && C.Z.isSupported(T)
          ? w
            ? (0, o.jsx)(R, {
                platformType: T,
                deeplink: j,
                onClick: () => {
                  x(!1), I(!0);
                },
              })
            : (0, o.jsx)(b, { platformType: T })
          : null;
      }
      function b(e) {
        let { platformType: n } = e,
          t = C.Z.get(n);
        return (0, o.jsxs)(E.UV, {
          platformType: n,
          children: [
            (0, o.jsx)("div", {
              className: g.message,
              children: _.intl.format(_.t.AOKOe3, { name: t.name }),
            }),
            (0, o.jsx)("div", {
              className: g.buttonContainer,
              children: (0, o.jsx)(s.Button, {
                className: g.btn,
                disabled: !0,
                children: (0, o.jsx)(s.Spinner, {
                  itemClassName: g.spinnerItem,
                }),
              }),
            }),
          ],
        });
      }
      function R(e) {
        let { deeplink: n, onClick: t, platformType: r } = e,
          c = C.Z.get(r);
        return (0, o.jsx)(E.UV, {
          platformType: r,
          children: (0, o.jsxs)("div", {
            className: g.buttonContainer,
            children: [
              (0, o.jsx)("div", {
                className: g.message,
                children: _.intl.format(_.t["6ig6i4"], {
                  connectionName: c.name,
                }),
              }),
              (0, o.jsx)(s.Clickable, {
                tag: "a",
                href: n,
                onClick: t,
                target: "_self",
                children: (0, o.jsx)(s.Button, {
                  className: g.btn,
                  children: _.intl.string(_.t.flvacH),
                }),
              }),
            ],
          }),
        });
      }
      async function A(e) {
        let {
          platformType: n,
          code: t,
          state: r,
          openidParams: c,
          iss: o,
          handleCallbackResponse: i,
        } = e;
        if (a.tq || v) return !1;
        try {
          let e = await N.default
            .request(S.Etm.CONNECTIONS_CALLBACK, {
              code: t,
              openid_params: c,
              iss: o,
              state: r,
              providerType: n,
            })
            .finally(() => {
              N.default.disconnect();
            });
          return i(e), !0;
        } catch (e) {
          return !1;
        }
      }
      async function h(e, n, t, r, c) {
        try {
          return await f.Z.sessionHandoff(e, n, t, r, c), 0;
        } catch (e) {
          var o, i;
          if (
            (null == e
              ? void 0
              : null === (o = e.body) || void 0 === o
                ? void 0
                : o.code) === 10020
          )
            return 2;
          if (
            (null == e
              ? void 0
              : null === (i = e.body) || void 0 === i
                ? void 0
                : i.code) === 40001
          )
            return 3;
          return 1;
        }
      }
      async function D(e) {
        let {
          platformType: n,
          state: t,
          handleCallbackResponse: r,
          handleCallbackError: c,
          openidParams: o,
          code: i,
          iss: l,
        } = e;
        try {
          let e = await f.Z.callback(
            n,
            { code: i, openid_params: o, state: t, iss: l },
            !v,
          );
          return r(e), !0;
        } catch (e) {
          return c(), !0;
        }
      }
      ((c = r || (r = {}))[(c.SUCCEEDED = 0)] = "SUCCEEDED"),
        (c[(c.FAILED = 1)] = "FAILED"),
        (c[(c.SHOULD_RETRY_WITH_CALLBACK = 2)] = "SHOULD_RETRY_WITH_CALLBACK"),
        (c[(c.SHOULD_DEEP_LINK = 3)] = "SHOULD_DEEP_LINK");
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
    978994: function (e, n, t) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    66825: function (e, n, t) {
      e.exports = {
        buttonContainer: "buttonContainer_b159b8",
        message: "message_b159b8",
        btn: "btn_b159b8",
        spinnerItem: "spinnerItem_b159b8",
      };
    },
  },
]);
//# sourceMappingURL=221f4837dca3d9d53316.js.map
