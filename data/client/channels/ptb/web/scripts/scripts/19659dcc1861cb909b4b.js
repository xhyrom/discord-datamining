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
      var r = t(735250);
      t(470079);
      var s = t(120356),
        o = t.n(s),
        l = t(726542),
        i = t(981631),
        c = t(145301);
      function a(e) {
        return null != e && Object.values(i.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: t } = e,
          s = l.Z.get(t);
        return (0, r.jsx)("div", {
          className: c.verifyConnectedAccount,
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(d, { platform: s }), n],
          }),
        });
      }
      function d(e) {
        let { platform: n, className: t } = e;
        return (0, r.jsxs)("div", {
          className: o()(c.logos, t),
          children: [
            (0, r.jsx)("div", { className: o()(c.logo, c.logoDiscord) }),
            (0, r.jsx)("div", { className: c.logosDivider }),
            (0, r.jsx)("div", {
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
            return b;
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
      var r = t(735250),
        s = t(470079),
        o = t(266067),
        l = t(481060),
        i = t(457330),
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
        let n = (0, o.k6)(),
          t = m((0, o.TH)()),
          l = t.get("code"),
          f = t.get("oauth_verifier"),
          p = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          v = t.get("loading"),
          { type: C } = (0, o.UO)(),
          N = (0, u.vJ)(C),
          h = null == f ? (null != l ? l : "") : f;
        return (s.useEffect(() => {
          let e;
          if (null != v) return;
          for (let n of t.keys()) {
            if (!!n.startsWith("openid."))
              null == e && (e = {}), (e[n] = t.get(n));
          }
          let r = (e) => {
              let { status: r, body: s } = e;
              if (null != l) {
                if (null == s ? void 0 : s.redirect)
                  return n.replace(s.redirect);
                if ([200, 204].includes(r)) {
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
            s = { code: h, openid_params: e, state: p },
            o = (e) => {
              null != l &&
                c.Z.isSupported(l) &&
                i.Z.callback(l, s, e).then(r, r);
            };
          if (g) {
            o(!1);
            return;
          }
          let l = (0, u.vJ)(C);
          a.default
            .request(d.Etm.CONNECTIONS_CALLBACK, { ...s, providerType: l })
            .then(r, (e) => o("RPCError" !== e.name))
            .then(() => a.default.disconnect());
        }, [h, n, v, C, t, p]),
        null != N && c.Z.isSupported(N))
          ? (0, r.jsx)(b, { platformType: N })
          : null;
      }
      function b(e) {
        let { platformType: n } = e;
        return (0, r.jsxs)(u.UV, {
          platformType: n,
          children: [
            (0, r.jsx)("div", {
              className: p.message,
              children: f.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                name: platform.name,
              }),
            }),
            (0, r.jsx)(l.Button, {
              className: p.btn,
              disabled: !0,
              children: (0, r.jsx)(l.Spinner, { itemClassName: p.spinnerItem }),
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
//# sourceMappingURL=19659dcc1861cb909b4b.js.map
