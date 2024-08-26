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
    832462: function (e, n, t) {
      t.r(n), t(757143);
      var o = t(735250),
        r = t(470079),
        c = t(593473),
        l = t(266067),
        s = t(478677),
        i = t(457330),
        a = t(675207),
        u = t(981631);
      function d(e) {
        let { platformType: n } = e,
          t = (0, l.k6)();
        return (
          r.useEffect(() => {
            let { code: e, state: o } = c.parse(window.location.search),
              r = ""
                .concat(u.Z5c.CONNECTIONS_ERROR(n))
                .concat(window.location.search);
            if (null == e || null == o) {
              t.replace(r);
              return;
            }
            i.Z.linkDispatchAuthCallback(n, { code: e, state: o }).then(
              (e) => {
                let { status: o } = e;
                204 === o
                  ? t.replace(u.Z5c.CONNECTIONS_SUCCESS(n))
                  : t.replace(r);
              },
              () => {
                t.replace(r);
              },
            );
          }, [t, n]),
          (0, o.jsx)(a.VerifyAccountLoading, { platformType: n })
        );
      }
      n.default = function (e) {
        let { match: n } = e,
          t = n.params.type,
          { two_way_link_type: r } = c.parse(window.location.search);
        return [
          u.ABu.XBOX,
          u.ABu.PLAYSTATION_STAGING,
          u.ABu.PLAYSTATION,
          u.ABu.CRUNCHYROLL,
        ].includes(t) && r === s.g.DESKTOP
          ? (0, o.jsx)(d, { platformType: t })
          : null;
      };
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
        l = t(726542),
        s = t(981631),
        i = t(145301);
      function a(e) {
        return null != e && Object.values(s.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: t } = e,
          r = l.Z.get(t);
        return (0, o.jsx)("div", {
          className: i.verifyConnectedAccount,
          children: (0, o.jsxs)("div", {
            children: [(0, o.jsx)(d, { platform: r }), n],
          }),
        });
      }
      function d(e) {
        let { platform: n, className: t } = e;
        return (0, o.jsxs)("div", {
          className: c()(i.logos, t),
          children: [
            (0, o.jsx)("div", { className: c()(i.logo, i.logoDiscord) }),
            (0, o.jsx)("div", { className: i.logosDivider }),
            (0, o.jsx)("div", {
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
            return N;
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
        t(757143);
      var o = t(735250),
        r = t(470079),
        c = t(266067),
        l = t(481060),
        s = t(457330),
        i = t(726542),
        a = t(536285),
        u = t(656649),
        d = t(981631),
        f = t(689938),
        p = t(934484);
      let g = null != window.opener,
        C = (e) => new URLSearchParams(e.search);
      function m() {
        var e;
        let n = (0, c.k6)(),
          t = C((0, c.TH)()),
          l = t.get("code"),
          f = t.get("oauth_verifier"),
          p = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          m = t.get("loading"),
          { type: v } = (0, c.UO)(),
          b = (0, u.vJ)(v),
          h = null == f ? (null != l ? l : "") : f;
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
                if (null == r ? void 0 : r.redirect)
                  return n.replace(r.redirect);
                [200, 204].includes(o) &&
                  (n.replace(d.Z5c.CONNECTIONS_SUCCESS(l)),
                  g && window.close()),
                  n.replace(
                    ""
                      .concat(d.Z5c.CONNECTIONS_ERROR(l), "?")
                      .concat(t.toString()),
                  );
              }
            },
            r = { code: h, openid_params: e, state: p },
            c = (e) => {
              null != l &&
                i.Z.isSupported(l) &&
                s.Z.callback(l, r, e).then(o, o);
            };
          if (g) {
            c(!1);
            return;
          }
          let l = (0, u.vJ)(v);
          a.default
            .request(d.Etm.CONNECTIONS_CALLBACK, { ...r, providerType: l })
            .then(o, (e) => c("RPCError" !== e.name))
            .then(() => a.default.disconnect());
        }, [h, n, m, v, t, p]),
        null != b && i.Z.isSupported(b))
          ? (0, o.jsx)(N, { platformType: b })
          : null;
      }
      function N(e) {
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
    478677: function (e, n, t) {
      var o, r;
      t.d(n, {
        g: function () {
          return o;
        },
      }),
        t(47120),
        ((r = o || (o = {})).MOBILE = "mobile"),
        (r.DESKTOP = "desktop"),
        (r.WEB = "web"),
        (r.DEVICE_CODE = "device_code");
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
//# sourceMappingURL=a3d874c9c001d4abb0c4.js.map
