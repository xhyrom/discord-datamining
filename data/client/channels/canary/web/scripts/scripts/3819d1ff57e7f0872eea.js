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
          return c;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var r = t(192379),
        o = t(512969);
      function c() {
        let e = (0, o.TH)();
        return r.useMemo(() => new URLSearchParams(e.search), [e.search]);
      }
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
      var o = t(120356),
        c = t.n(o),
        i = t(726542),
        l = t(981631),
        a = t(343085);
      function u(e) {
        return null != e && Object.values(l.ABu).includes(e) ? e : null;
      }
      function s(e) {
        let { children: n, platformType: t } = e,
          o = i.Z.get(t);
        return (0, r.jsx)("div", {
          className: a.verifyConnectedAccount,
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(f, { platform: o }), n],
          }),
        });
      }
      function f(e) {
        let { platform: n, className: t } = e;
        return (0, r.jsxs)("div", {
          className: c()(a.logos, t),
          children: [
            (0, r.jsx)("div", { className: c()(a.logo, a.logoDiscord) }),
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
        o,
        c = t(200651),
        i = t(192379),
        l = t(512969),
        a = t(873546),
        u = t(604039),
        s = t(481060),
        f = t(457330),
        d = t(733427),
        C = t(169382),
        N = t(726542),
        p = t(536285),
        g = t(591759),
        v = t(656649),
        O = t(981631),
        S = t(388032),
        E = t(265055);
      let _ = null != window.opener;
      function m() {
        var e, n;
        let t = (0, l.k6)(),
          r = (0, C.l)(),
          o = r.get("code"),
          s = r.get("oauth_verifier"),
          p = null !== (e = r.get("state")) && void 0 !== e ? e : "",
          S = r.get("loading"),
          E = null !== (n = r.get("iss")) && void 0 !== n ? n : void 0,
          { type: m } = (0, l.UO)(),
          A = (0, v.vJ)(m),
          [x, T] = i.useState(!1),
          [I, Z] = i.useState(!1),
          j = (0, d.Z)(),
          H = null == s ? (null != o ? o : "") : s;
        i.useEffect(() => {
          let e;
          if (null != S) return;
          for (let n of r.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = r.get(n));
          }
          let n = (0, v.vJ)(m);
          (async function o() {
            if (null == n || !N.Z.isSupported(n)) return;
            function o(e) {
              let { status: o, body: c } = e;
              if (null != n) {
                if (null == c ? void 0 : c.redirect) {
                  window.location = c.redirect;
                  return;
                }
                if ([200, 204].includes(o)) {
                  t.replace(O.Z5c.CONNECTIONS_SUCCESS(n)), _ && window.close();
                  return;
                }
                (null == c ? void 0 : c.code) != null &&
                  r.append("error-code", c.code),
                  t.replace(
                    ""
                      .concat(O.Z5c.CONNECTIONS_ERROR(n), "?")
                      .concat(r.toString()),
                  );
              }
            }
            if (
              await h({
                platformType: n,
                code: H,
                state: p,
                openidParams: e,
                iss: E,
                handleCallbackResponse: o,
              })
            )
              return;
            let c = await D(n, p, H, e, E);
            if (0 === c) {
              T(!0);
              return;
            }
            if (1 === c) {
              t.replace(
                "".concat(O.Z5c.CONNECTIONS_ERROR(n), "?").concat(r.toString()),
              );
              return;
            }
            if (3 === c) {
              if (a.tq) {
                Z(!0);
                return;
              }
              t.replace(
                "".concat(O.Z5c.CONNECTIONS_ERROR(n), "?").concat(r.toString()),
              );
              return;
            }
            y({
              platformType: n,
              state: p,
              handleCallbackResponse: o,
              handleCallbackError: () => {
                t.replace(
                  ""
                    .concat(O.Z5c.CONNECTIONS_ERROR(n), "?")
                    .concat(r.toString()),
                );
              },
              openidParams: e,
              code: H,
              iss: E,
            });
          })();
        }, [H, t, S, m, r, p, E]),
          i.useEffect(() => {
            let e;
            if (!x) return;
            let n = 0;
            async function r() {
              if (null == A) return;
              let { handoff_status: o, success_redirect: c } = (
                await f.Z.getHandoffStatus(A, p)
              ).body;
              if (o === u.g.HANDOFF_SUCCESS) {
                if (null == g.Z.toURLSafe(c))
                  return t.replace(O.Z5c.CONNECTIONS_SUCCESS(A));
                window.location = c;
                return;
              }
              if (o === u.g.HANDOFF_ERROR || n >= 10)
                return t.replace(O.Z5c.CONNECTIONS_ERROR(A));
              e = setTimeout(() => {
                j() && ((n += 1), r());
              }, 1e3);
            }
            return (
              r(),
              () => {
                null != e && clearTimeout(e);
              }
            );
          }, [j, t, A, x, p]);
        let U = i.useMemo(() => {
          if (null != A)
            return "discord://"
              .concat(O.Z5c.CONNECTIONS(A), "/?")
              .concat(r.toString());
        }, [A, r]);
        return null != A && N.Z.isSupported(A)
          ? I
            ? (0, c.jsx)(R, {
                platformType: A,
                deeplink: U,
                onClick: () => {
                  Z(!1), T(!0);
                },
              })
            : (0, c.jsx)(b, { platformType: A })
          : null;
      }
      function b(e) {
        let { platformType: n } = e,
          t = N.Z.get(n);
        return (0, c.jsxs)(v.UV, {
          platformType: n,
          children: [
            (0, c.jsx)("div", {
              className: E.message,
              children: S.intl.format(S.t.AOKOe3, { name: t.name }),
            }),
            (0, c.jsx)("div", {
              className: E.buttonContainer,
              children: (0, c.jsx)(s.Button, {
                className: E.btn,
                disabled: !0,
                children: (0, c.jsx)(s.Spinner, {
                  itemClassName: E.spinnerItem,
                }),
              }),
            }),
          ],
        });
      }
      function R(e) {
        let { deeplink: n, onClick: t, platformType: r } = e,
          o = N.Z.get(r);
        return (0, c.jsx)(v.UV, {
          platformType: r,
          children: (0, c.jsxs)("div", {
            className: E.buttonContainer,
            children: [
              (0, c.jsx)("div", {
                className: E.message,
                children: S.intl.format(S.t["6ig6i4"], {
                  connectionName: o.name,
                }),
              }),
              (0, c.jsx)(s.Clickable, {
                tag: "a",
                href: n,
                onClick: t,
                target: "_self",
                children: (0, c.jsx)(s.Button, {
                  className: E.btn,
                  children: S.intl.string(S.t.flvacH),
                }),
              }),
            ],
          }),
        });
      }
      async function h(e) {
        let {
          platformType: n,
          code: t,
          state: r,
          openidParams: o,
          iss: c,
          handleCallbackResponse: i,
        } = e;
        if (a.tq || _) return !1;
        try {
          let e = await p.default
            .request(O.Etm.CONNECTIONS_CALLBACK, {
              code: t,
              openid_params: o,
              iss: c,
              state: r,
              providerType: n,
            })
            .finally(() => {
              p.default.disconnect();
            });
          return i(e), !0;
        } catch (e) {
          return !1;
        }
      }
      async function D(e, n, t, r, o) {
        try {
          return await f.Z.sessionHandoff(e, n, t, r, o), 0;
        } catch (e) {
          var c, i;
          if (
            (null == e
              ? void 0
              : null === (c = e.body) || void 0 === c
                ? void 0
                : c.code) === 10020
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
      async function y(e) {
        let {
          platformType: n,
          state: t,
          handleCallbackResponse: r,
          handleCallbackError: o,
          openidParams: c,
          code: i,
          iss: l,
        } = e;
        try {
          let e = await f.Z.callback(
            n,
            { code: i, openid_params: c, state: t, iss: l },
            !_,
          );
          return r(e), !0;
        } catch (e) {
          return o(), !0;
        }
      }
      ((o = r || (r = {}))[(o.SUCCEEDED = 0)] = "SUCCEEDED"),
        (o[(o.FAILED = 1)] = "FAILED"),
        (o[(o.SHOULD_RETRY_WITH_CALLBACK = 2)] = "SHOULD_RETRY_WITH_CALLBACK"),
        (o[(o.SHOULD_DEEP_LINK = 3)] = "SHOULD_DEEP_LINK");
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
    343085: function (e, n, t) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    265055: function (e, n, t) {
      e.exports = {
        buttonContainer: "buttonContainer_b159b8",
        message: "message_b159b8",
        btn: "btn_b159b8",
        spinnerItem: "spinnerItem_b159b8",
      };
    },
  },
]);
//# sourceMappingURL=3819d1ff57e7f0872eea.js.map
