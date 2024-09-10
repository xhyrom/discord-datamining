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
    832462: function (e, n, t) {
      t.r(n), t(757143);
      var o = t(735250),
        r = t(470079),
        c = t(593473),
        l = t(266067),
        i = t(478677),
        a = t(457330),
        s = t(675207),
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
            a.Z.linkDispatchAuthCallback(n, { code: e, state: o }).then(
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
          (0, o.jsx)(s.VerifyAccountLoading, { platformType: n })
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
        ].includes(t) && r === i.g.DESKTOP
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
          return s;
        },
      });
      var o = t(735250);
      t(470079);
      var r = t(120356),
        c = t.n(r),
        l = t(726542),
        i = t(981631),
        a = t(642827);
      function s(e) {
        return null != e && Object.values(i.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: t } = e,
          r = l.Z.get(t);
        return (0, o.jsx)("div", {
          className: a.verifyConnectedAccount,
          children: (0, o.jsxs)("div", {
            children: [(0, o.jsx)(d, { platform: r }), n],
          }),
        });
      }
      function d(e) {
        let { platform: n, className: t } = e;
        return (0, o.jsxs)("div", {
          className: c()(a.logos, t),
          children: [
            (0, o.jsx)("div", { className: c()(a.logo, a.logoDiscord) }),
            (0, o.jsx)("div", { className: a.logosDivider }),
            (0, o.jsx)("div", {
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
            return v;
          },
          default: function () {
            return N;
          },
        }),
        t(47120),
        t(757143);
      var o = t(735250),
        r = t(470079),
        c = t(266067),
        l = t(481060),
        i = t(457330),
        a = t(169382),
        s = t(726542),
        u = t(536285),
        d = t(656649),
        f = t(981631),
        p = t(689938),
        C = t(289720);
      let g = null != window.opener;
      function N() {
        var e;
        let n = (0, c.k6)(),
          t = (0, a.l)(),
          l = t.get("code"),
          p = t.get("oauth_verifier"),
          C = null !== (e = t.get("state")) && void 0 !== e ? e : "",
          N = t.get("loading"),
          { type: m } = (0, c.UO)(),
          _ = (0, d.vJ)(m),
          E = null == p ? (null != l ? l : "") : p;
        return (r.useEffect(() => {
          (async function e() {
            let e;
            if (null != N) return;
            for (let n of t.keys()) {
              if (!!n.startsWith("openid."))
                null == e && (e = {}), (e[n] = t.get(n));
            }
            let o = (e) => {
                let { status: o, body: r } = e;
                if (null != l) {
                  if (null == r ? void 0 : r.redirect) {
                    n.replace(f.Z5c.CONNECTIONS_SUCCESS(l)),
                      (window.location = r.redirect);
                    return;
                  }
                  if ([200, 204].includes(o)) {
                    n.replace(f.Z5c.CONNECTIONS_SUCCESS(l)),
                      g && window.close();
                    return;
                  }
                  null != r.code && t.append("error-code", r.code),
                    n.replace(
                      ""
                        .concat(f.Z5c.CONNECTIONS_ERROR(l), "?")
                        .concat(t.toString()),
                    );
                }
              },
              r = { code: E, openid_params: e, state: C };
            async function c(e) {
              if (null != l && s.Z.isSupported(l))
                try {
                  let n = await i.Z.callback(l, r, e);
                  o(n);
                } catch (e) {
                  o(e);
                }
            }
            if (g) {
              await c(!1);
              return;
            }
            let l = (0, d.vJ)(m);
            try {
              let e = await u.default.request(f.Etm.CONNECTIONS_CALLBACK, {
                ...r,
                providerType: l,
              });
              o(e);
            } catch (e) {
              (null == e ? void 0 : e.code) !==
                f.lTL.BAD_REQUEST_FOR_PROVIDER &&
                (await c("RPCError" !== e.name));
            }
            u.default.disconnect();
          })();
        }, [E, n, N, m, t, C]),
        null != _ && s.Z.isSupported(_))
          ? (0, o.jsx)(v, { platformType: _ })
          : null;
      }
      function v(e) {
        let { platformType: n } = e;
        return (0, o.jsxs)(d.UV, {
          platformType: n,
          children: [
            (0, o.jsx)("div", {
              className: C.message,
              children: p.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
                name: platform.name,
              }),
            }),
            (0, o.jsx)(l.Button, {
              className: C.btn,
              disabled: !0,
              children: (0, o.jsx)(l.Spinner, { itemClassName: C.spinnerItem }),
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
//# sourceMappingURL=4bf306adee35c39eb587.js.map
