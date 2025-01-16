"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56357"],
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
    656649: function (e, s, n) {
      n.d(s, {
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
      var t = n(200651);
      n(192379);
      var o = n(120356),
        c = n.n(o),
        i = n(726542),
        l = n(981631),
        r = n(978994);
      function a(e) {
        return null != e && Object.values(l.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: s, platformType: n } = e,
          o = i.Z.get(n);
        return (0, t.jsx)("div", {
          className: r.verifyConnectedAccount,
          children: (0, t.jsxs)("div", {
            children: [(0, t.jsx)(d, { platform: o }), s],
          }),
        });
      }
      function d(e) {
        let { platform: s, className: n } = e;
        return (0, t.jsxs)("div", {
          className: c()(r.logos, n),
          children: [
            (0, t.jsx)("div", { className: c()(r.logo, r.logoDiscord) }),
            (0, t.jsx)("div", { className: r.logosDivider }),
            (0, t.jsx)("div", {
              className: r.logo,
              style: { backgroundImage: 'url("'.concat(s.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
    },
    301001: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return d;
          },
        });
      var t = n(200651),
        o = n(120356),
        c = n.n(o),
        i = n(512969),
        l = n(726542),
        r = n(656649),
        a = n(388032),
        u = n(743839);
      function d() {
        let { type: e } = (0, i.UO)(),
          s = (0, r.vJ)(e);
        if (null == s) return null;
        let n = l.Z.get(s);
        return (0, t.jsxs)(r.UV, {
          platformType: s,
          children: [
            (0, t.jsx)("div", {
              className: u.message,
              children: a.intl.format(a.t.RzEB5u, { name: n.name }),
            }),
            (0, t.jsx)("div", {
              className: c()(u.message, u.details),
              children: a.intl.string(a.t["Q+lNwc"]),
            }),
          ],
        });
      }
    },
    978994: function (e, s, n) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    743839: function (e, s, n) {
      e.exports = { message: "message_cac369", details: "details_cac369" };
    },
  },
]);
//# sourceMappingURL=eae51f2468960897b2bf.js.map
