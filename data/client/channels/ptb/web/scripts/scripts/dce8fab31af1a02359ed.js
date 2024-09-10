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
          return r;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var o = t(266067);
      function r() {
        return new URLSearchParams((0, o.TH)().search);
      }
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
          return a;
        },
      });
      var o = t(735250);
      t(470079);
      var r = t(120356),
        c = t.n(r),
        i = t(726542),
        s = t(981631),
        l = t(145301);
      function a(e) {
        return null != e && Object.values(s.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: t } = e,
          r = i.Z.get(t);
        return (0, o.jsx)("div", {
          className: l.verifyConnectedAccount,
          children: (0, o.jsxs)("div", {
            children: [(0, o.jsx)(d, { platform: r }), n],
          }),
        });
      }
      function d(e) {
        let { platform: n, className: t } = e;
        return (0, o.jsxs)("div", {
          className: c()(l.logos, t),
          children: [
            (0, o.jsx)("div", { className: c()(l.logo, l.logoDiscord) }),
            (0, o.jsx)("div", { className: l.logosDivider }),
            (0, o.jsx)("div", {
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
            return C;
          },
          default: function () {
            return m;
          },
        }),
        t(47120),
        t(757143);
      var o = t(735250),
        r = t(470079),
        c = t(266067),
        i = t(481060),
        s = t(457330),
        l = t(169382),
        a = t(726542),
        u = t(536285),
        d = t(656649),
        f = t(981631),
        p = t(689938),
        g = t(934484);
      let v = null != window.opener;
      function m() {
        var e;
        let n = (0, c.k6)(),
          t = (0, l.l)(),
          i = t.get("code"),
          p = t.get("oauth_verifier"),
          g = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          m = t.get("loading"),
          { type: b } = (0, c.UO)(),
          N = (0, d.vJ)(b),
          _ = null == p ? (null != i ? i : "") : p;
        return (r.useEffect(() => {
          (async function e() {
            let e;
            if (null != m) return;
            for (let n of t.keys()) {
              if (!!n.startsWith("openid."))
                null == e && (e = {}), (e[n] = t.get(n));
            }
            let o = (e) => {
                let { status: o, body: r } = e;
                if (null != i) {
                  if (null == r ? void 0 : r.redirect) {
                    n.replace(f.Z5c.CONNECTIONS_SUCCESS(i)),
                      (window.location = r.redirect);
                    return;
                  }
                  if ([200, 204].includes(o)) {
                    n.replace(f.Z5c.CONNECTIONS_SUCCESS(i)),
                      v && window.close();
                    return;
                  }
                  null != r.code && t.append("error-code", r.code),
                    n.replace(
                      ""
                        .concat(f.Z5c.CONNECTIONS_ERROR(i), "?")
                        .concat(t.toString()),
                    );
                }
              },
              r = { code: _, openid_params: e, state: g };
            async function c(e) {
              if (null != i && a.Z.isSupported(i))
                try {
                  let n = await s.Z.callback(i, r, e);
                  o(n);
                } catch (e) {
                  o(e);
                }
            }
            if (v) {
              await c(!1);
              return;
            }
            let i = (0, d.vJ)(b);
            try {
              let e = await u.default.request(f.Etm.CONNECTIONS_CALLBACK, {
                ...r,
                providerType: i,
              });
              o(e);
            } catch (e) {
              (null == e ? void 0 : e.code) !==
                f.lTL.BAD_REQUEST_FOR_PROVIDER &&
                (await c("RPCError" !== e.name));
            }
            u.default.disconnect();
          })();
        }, [_, n, m, b, t, g]),
        null != N && a.Z.isSupported(N))
          ? (0, o.jsx)(C, { platformType: N })
          : null;
      }
      function C(e) {
        let { platformType: n } = e;
        return (0, o.jsxs)(d.UV, {
          platformType: n,
          children: [
            (0, o.jsx)("div", {
              className: g.message,
              children: p.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                name: platform.name,
              }),
            }),
            (0, o.jsx)(i.Button, {
              className: g.btn,
              disabled: !0,
              children: (0, o.jsx)(i.Spinner, { itemClassName: g.spinnerItem }),
            }),
          ],
        });
      }
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
        btn: "btn_b159b8",
        spinnerItem: "spinnerItem_b159b8",
      };
    },
  },
]);
//# sourceMappingURL=dce8fab31af1a02359ed.js.map
