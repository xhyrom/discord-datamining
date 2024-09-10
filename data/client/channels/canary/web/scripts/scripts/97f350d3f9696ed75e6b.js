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
          return l;
        },
      });
      var o = n(735250);
      n(470079);
      var t = n(120356),
        c = n.n(t),
        i = n(726542),
        r = n(981631),
        a = n(642827);
      function l(e) {
        return null != e && Object.values(r.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: s, platformType: n } = e,
          t = i.Z.get(n);
        return (0, o.jsx)("div", {
          className: a.verifyConnectedAccount,
          children: (0, o.jsxs)("div", {
            children: [(0, o.jsx)(d, { platform: t }), s],
          }),
        });
      }
      function d(e) {
        let { platform: s, className: n } = e;
        return (0, o.jsxs)("div", {
          className: c()(a.logos, n),
          children: [
            (0, o.jsx)("div", { className: c()(a.logo, a.logoDiscord) }),
            (0, o.jsx)("div", { className: a.logosDivider }),
            (0, o.jsx)("div", {
              className: a.logo,
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
      var o = n(735250),
        t = n(120356),
        c = n.n(t),
        i = n(266067),
        r = n(726542),
        a = n(656649),
        l = n(689938),
        u = n(113669);
      function d() {
        let { type: e } = (0, i.UO)(),
          s = (0, a.vJ)(e);
        if (null == s) return null;
        let n = r.Z.get(s);
        return (0, o.jsxs)(a.UV, {
          platformType: s,
          children: [
            (0, o.jsx)("div", {
              className: u.message,
              children: l.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({
                name: n.name,
              }),
            }),
            (0, o.jsx)("div", {
              className: c()(u.message, u.details),
              children: l.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS,
            }),
          ],
        });
      }
    },
    642827: function (e, s, n) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    113669: function (e, s, n) {
      e.exports = { message: "message_cac369", details: "details_cac369" };
    },
  },
]);
//# sourceMappingURL=97f350d3f9696ed75e6b.js.map
