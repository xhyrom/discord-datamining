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
        i = t(726542),
        l = t(981631),
        c = t(145301);
      function a(e) {
        return null != e && Object.values(l.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: t } = e,
          r = i.Z.get(t);
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
            return v;
          },
        }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120),
        t(757143);
      var o = t(735250),
        r = t(470079),
        s = t(266067),
        i = t(481060),
        l = t(457330),
        c = t(726542),
        a = t(536285),
        u = t(656649),
        d = t(981631),
        f = t(689938),
        p = t(934484);
      let g = null != window.opener,
        m = (e) => new URLSearchParams(e.search);
      function v() {
        var e;
        let n = (0, s.k6)(),
          t = m((0, s.TH)()),
          i = t.get("code"),
          f = t.get("oauth_verifier"),
          p = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          v = t.get("loading"),
          { type: b } = (0, s.UO)(),
          N = (0, u.vJ)(b),
          h = null == f ? (null != i ? i : "") : f;
        return (r.useEffect(() => {
          let e;
          if (null != v) return;
          for (let n of t.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = t.get(n));
          }
          let o = (e) => {
              let { status: o, body: r } = e;
              if (null != i) {
                if (null == r ? void 0 : r.redirect) {
                  n.replace(d.Z5c.CONNECTIONS_SUCCESS(i)),
                    (window.location = r.redirect);
                  return;
                }
                if ([200, 204].includes(o)) {
                  n.replace(d.Z5c.CONNECTIONS_SUCCESS(i)), g && window.close();
                  return;
                }
                n.replace(
                  ""
                    .concat(d.Z5c.CONNECTIONS_ERROR(i), "?")
                    .concat(t.toString()),
                );
              }
            },
            r = { code: h, openid_params: e, state: p },
            s = (e) => {
              null != i &&
                c.Z.isSupported(i) &&
                l.Z.callback(i, r, e).then(o, o);
            };
          if (g) {
            s(!1);
            return;
          }
          let i = (0, u.vJ)(b);
          a.default
            .request(d.Etm.CONNECTIONS_CALLBACK, { ...r, providerType: i })
            .then(o, (e) => s("RPCError" !== e.name))
            .then(() => a.default.disconnect());
        }, [h, n, v, b, t, p]),
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
            (0, o.jsx)(i.Button, {
              className: p.btn,
              disabled: !0,
              children: (0, o.jsx)(i.Spinner, { itemClassName: p.spinnerItem }),
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
//# sourceMappingURL=0fbc60bac7238383b097.js.map
