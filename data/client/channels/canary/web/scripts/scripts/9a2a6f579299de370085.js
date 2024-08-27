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
        s = t.n(r),
        l = t(726542),
        i = t(981631),
        c = t(145301);
      function a(e) {
        return null != e && Object.values(i.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: t } = e,
          r = l.Z.get(t);
        return (0, o.jsx)("div", {
          className: c.verifyConnectedAccount,
          children: (0, o.jsxs)("div", {
            children: [(0, o.jsx)(d, { platform: r }), n],
          }),
        });
      }
      function d(e) {
        let { platform: n, className: t } = e;
        return (0, o.jsxs)("div", {
          className: s()(c.logos, t),
          children: [
            (0, o.jsx)("div", { className: s()(c.logo, c.logoDiscord) }),
            (0, o.jsx)("div", { className: c.logosDivider }),
            (0, o.jsx)("div", {
              className: c.logo,
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
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120),
        t(757143),
        t(773603);
      var o = t(735250),
        r = t(470079),
        s = t(266067),
        l = t(481060),
        i = t(457330),
        c = t(726542),
        a = t(536285),
        u = t(656649),
        d = t(981631),
        f = t(689938),
        p = t(934484);
      let g = null != window.opener,
        v = (e) => new URLSearchParams(e.search);
      function m() {
        var e;
        let n = (0, s.k6)(),
          t = v((0, s.TH)()),
          l = t.get("code"),
          f = t.get("oauth_verifier"),
          p = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          m = t.get("loading"),
          { type: b } = (0, s.UO)(),
          N = (0, u.vJ)(b),
          _ = null == f ? (null != l ? l : "") : f;
        return (r.useEffect(() => {
          let e;
          if (null != m) return;
          for (let n of t.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = t.get(n));
          }
          let o = (e) => {
              let { status: o, body: r } = e;
              if (null != l) {
                if (null == r ? void 0 : r.redirect) {
                  n.replace(d.Z5c.CONNECTIONS_SUCCESS(l)),
                    (window.location = r.redirect);
                  return;
                }
                if ([200, 204].includes(o)) {
                  n.replace(d.Z5c.CONNECTIONS_SUCCESS(l)), g && window.close();
                  return;
                }
                n.replace(
                  ""
                    .concat(d.Z5c.CONNECTIONS_ERROR(l), "?")
                    .concat(t.toString()),
                );
              }
            },
            r = { code: _, openid_params: e, state: p },
            s = (e) => {
              null != l &&
                c.Z.isSupported(l) &&
                i.Z.callback(l, r, e).then(o, o);
            };
          if (g) {
            s(!1);
            return;
          }
          let l = (0, u.vJ)(b);
          a.default
            .request(d.Etm.CONNECTIONS_CALLBACK, { ...r, providerType: l })
            .then(o, (e) => {
              (null == e ? void 0 : e.errorCode) !==
                d.lTL.BAD_REQUEST_FOR_PROVIDER && s("RPCError" !== e.name);
            })
            .finally(() => a.default.disconnect());
        }, [_, n, m, b, t, p]),
        null != N && c.Z.isSupported(N))
          ? (0, o.jsx)(C, { platformType: N })
          : null;
      }
      function C(e) {
        let { platformType: n } = e;
        return (0, o.jsxs)(u.UV, {
          platformType: n,
          children: [
            (0, o.jsx)("div", {
              className: p.message,
              children: f.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                name: platform.name,
              }),
            }),
            (0, o.jsx)(l.Button, {
              className: p.btn,
              disabled: !0,
              children: (0, o.jsx)(l.Spinner, { itemClassName: p.spinnerItem }),
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
//# sourceMappingURL=9a2a6f579299de370085.js.map
