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
      var s = t(512969);
      function r() {
        return new URLSearchParams((0, s.TH)().search);
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
      var s = t(200651);
      t(192379);
      var r = t(120356),
        o = t.n(r),
        i = t(726542),
        l = t(981631),
        c = t(642827);
      function a(e) {
        return null != e && Object.values(l.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: t } = e,
          r = i.Z.get(t);
        return (0, s.jsx)("div", {
          className: c.verifyConnectedAccount,
          children: (0, s.jsxs)("div", {
            children: [(0, s.jsx)(d, { platform: r }), n],
          }),
        });
      }
      function d(e) {
        let { platform: n, className: t } = e;
        return (0, s.jsxs)("div", {
          className: o()(c.logos, t),
          children: [
            (0, s.jsx)("div", { className: o()(c.logo, c.logoDiscord) }),
            (0, s.jsx)("div", { className: c.logosDivider }),
            (0, s.jsx)("div", {
              className: c.logo,
              style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
    },
    926665: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return x;
          },
        });
      var s = t(200651),
        r = t(192379),
        o = t(120356),
        i = t.n(o),
        l = t(512969),
        c = t(873546),
        a = t(481060),
        u = t(169382),
        d = t(726542),
        f = t(656649),
        g = t(981631),
        m = t(388032),
        h = t(280532);
      let v = "https://dis.gd/Amazon-Music-Connection",
        p = null != window.opener;
      function x() {
        let { type: e } = (0, l.UO)(),
          n = (0, f.vJ)(e),
          t = (0, u.l)().get("error-code"),
          o = r.useCallback(() => {
            window.close();
          }, []),
          x = r.useMemo(() => {
            switch (n) {
              case g.ABu.AMAZON_MUSIC:
                return (0, s.jsx)("div", {
                  className: i()(h.message, h.details),
                  children: c.tq
                    ? m.intl.format(m.t["0EikXl"], {
                        link: () =>
                          (0, s.jsx)(a.Anchor, { href: v, children: v }),
                      })
                    : m.intl.format(m.t.hKHZhI, {
                        link: () =>
                          (0, s.jsx)(a.Anchor, { href: v, children: v }),
                      }),
                });
              case g.ABu.YOUTUBE:
                if (t === g.evJ.UNKNOWN_ACCOUNT.toString())
                  return (0, s.jsx)("div", {
                    className: i()(h.message, h.details),
                    children: m.intl.format(m.t.nQPJdH, {
                      link: "https://support.google.com/youtube/answer/1646861",
                    }),
                  });
                return null;
              default:
                return null;
            }
          }, [t, n]);
        if (null == n) return null;
        let b = d.Z.get(n);
        return (0, s.jsxs)(f.UV, {
          platformType: n,
          children: [
            (0, s.jsx)("div", {
              className: i()(h.message, h.error),
              children: m.intl.format(m.t.E62dXl, { name: b.name }),
            }),
            (0, s.jsx)("div", {
              className: i()(h.message, h.details),
              children: m.intl.string(m.t.Ra6lcn),
            }),
            x,
            p
              ? (0, s.jsx)(a.Button, {
                  className: h.btn,
                  onClick: o,
                  children: m.intl.string(m.t.i4jeWV),
                })
              : null,
          ],
        });
      }
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
    280532: function (e, n, t) {
      e.exports = {
        message: "message_a40083",
        error: "error_a40083",
        details: "details_a40083",
        btn: "btn_a40083",
      };
    },
  },
]);
//# sourceMappingURL=f8031aca0ce1a6f4e494.js.map
