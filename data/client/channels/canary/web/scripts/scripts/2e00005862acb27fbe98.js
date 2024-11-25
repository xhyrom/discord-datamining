"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68326"],
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
    169382: function (e, n, s) {
      s.d(n, {
        l: function () {
          return o;
        },
      }),
        s(610138),
        s(216116),
        s(78328),
        s(815648),
        s(47120);
      var t = s(192379),
        r = s(512969);
      function o() {
        let e = (0, r.TH)();
        return t.useMemo(() => new URLSearchParams(e.search), [e.search]);
      }
    },
    656649: function (e, n, s) {
      s.d(n, {
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
      var t = s(200651);
      s(192379);
      var r = s(120356),
        o = s.n(r),
        l = s(726542),
        i = s(981631),
        c = s(978994);
      function a(e) {
        return null != e && Object.values(i.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: s } = e,
          r = l.Z.get(s);
        return (0, t.jsx)("div", {
          className: c.verifyConnectedAccount,
          children: (0, t.jsxs)("div", {
            children: [(0, t.jsx)(d, { platform: r }), n],
          }),
        });
      }
      function d(e) {
        let { platform: n, className: s } = e;
        return (0, t.jsxs)("div", {
          className: o()(c.logos, s),
          children: [
            (0, t.jsx)("div", { className: o()(c.logo, c.logoDiscord) }),
            (0, t.jsx)("div", { className: c.logosDivider }),
            (0, t.jsx)("div", {
              className: c.logo,
              style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
    },
    926665: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return x;
          },
        });
      var t = s(200651),
        r = s(192379),
        o = s(120356),
        l = s.n(o),
        i = s(512969),
        c = s(873546),
        a = s(481060),
        u = s(169382),
        d = s(726542),
        f = s(656649),
        g = s(981631),
        m = s(388032),
        h = s(72153);
      let v = "https://dis.gd/Amazon-Music-Connection",
        p = null != window.opener;
      function x() {
        let { type: e } = (0, i.UO)(),
          n = (0, f.vJ)(e),
          s = (0, u.l)().get("error-code"),
          o = r.useCallback(() => {
            window.close();
          }, []),
          x = r.useMemo(() => {
            switch (n) {
              case g.ABu.AMAZON_MUSIC:
                return (0, t.jsx)("div", {
                  className: l()(h.message, h.details),
                  children: c.tq
                    ? m.intl.format(m.t["0EikXl"], {
                        link: () =>
                          (0, t.jsx)(a.Anchor, { href: v, children: v }),
                      })
                    : m.intl.format(m.t.hKHZhI, {
                        link: () =>
                          (0, t.jsx)(a.Anchor, { href: v, children: v }),
                      }),
                });
              case g.ABu.YOUTUBE:
                if (s === g.evJ.UNKNOWN_ACCOUNT.toString())
                  return (0, t.jsx)("div", {
                    className: l()(h.message, h.details),
                    children: m.intl.format(m.t.nQPJdH, {
                      link: "https://support.google.com/youtube/answer/1646861",
                    }),
                  });
                return null;
              default:
                return null;
            }
          }, [s, n]);
        if (null == n) return null;
        let b = d.Z.get(n);
        return (0, t.jsxs)(f.UV, {
          platformType: n,
          children: [
            (0, t.jsx)("div", {
              className: l()(h.message, h.error),
              children: m.intl.format(m.t.E62dXl, { name: b.name }),
            }),
            (0, t.jsx)("div", {
              className: l()(h.message, h.details),
              children: m.intl.string(m.t.Ra6lcn),
            }),
            x,
            p
              ? (0, t.jsx)(a.Button, {
                  className: h.btn,
                  onClick: o,
                  children: m.intl.string(m.t.i4jeWV),
                })
              : null,
          ],
        });
      }
    },
    978994: function (e, n, s) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    72153: function (e, n, s) {
      e.exports = {
        message: "message_a40083",
        error: "error_a40083",
        details: "details_a40083",
        btn: "btn_a40083",
      };
    },
  },
]);
//# sourceMappingURL=2e00005862acb27fbe98.js.map
