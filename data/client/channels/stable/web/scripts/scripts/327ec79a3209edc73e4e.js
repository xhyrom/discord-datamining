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
      var o = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        c = n(726542),
        l = n(981631),
        i = n(145301);
      function a(e) {
        return null != e && Object.values(l.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: s, platformType: n } = e,
          t = c.Z.get(n);
        return (0, o.jsx)("div", {
          className: i.verifyConnectedAccount,
          children: (0, o.jsxs)("div", {
            children: [(0, o.jsx)(d, { platform: t }), s],
          }),
        });
      }
      function d(e) {
        let { platform: s, className: n } = e;
        return (0, o.jsxs)("div", {
          className: r()(i.logos, n),
          children: [
            (0, o.jsx)("div", { className: r()(i.logo, i.logoDiscord) }),
            (0, o.jsx)("div", { className: i.logosDivider }),
            (0, o.jsx)("div", {
              className: i.logo,
              style: { backgroundImage: 'url("'.concat(s.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
    },
    926665: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return m;
          },
        });
      var o = n(735250),
        t = n(470079),
        r = n(120356),
        c = n.n(r),
        l = n(266067),
        i = n(873546),
        a = n(481060),
        u = n(726542),
        d = n(656649),
        f = n(981631),
        g = n(689938),
        C = n(376789);
      let _ = "https://dis.gd/Amazon-Music-Connection",
        N = null != window.opener;
      function m() {
        let { type: e } = (0, l.UO)(),
          s = (0, d.vJ)(e),
          n = t.useCallback(() => {
            window.close();
          }, []);
        if (null == s) return null;
        let r = u.Z.get(s);
        return (0, o.jsxs)(d.UV, {
          platformType: s,
          children: [
            (0, o.jsx)("div", {
              className: c()(C.message, C.error),
              children: g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                name: r.name,
              }),
            }),
            (0, o.jsx)("div", {
              className: c()(C.message, C.details),
              children: g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
            }),
            s !== f.ABu.AMAZON_MUSIC
              ? null
              : (0, o.jsx)("div", {
                  className: c()(C.message, C.details),
                  children: i.tq
                    ? g.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format(
                        {
                          link: () =>
                            (0, o.jsx)(a.Anchor, { href: _, children: _ }),
                        },
                      )
                    : g.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format(
                        {
                          link: () =>
                            (0, o.jsx)(a.Anchor, { href: _, children: _ }),
                        },
                      ),
                }),
            N
              ? (0, o.jsx)(a.Button, {
                  className: C.btn,
                  onClick: n,
                  children: g.Z.Messages.DONE,
                })
              : null,
          ],
        });
      }
    },
    145301: function (e, s, n) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
    376789: function (e, s, n) {
      e.exports = {
        message: "message_a40083",
        error: "error_a40083",
        details: "details_a40083",
        btn: "btn_a40083",
      };
    },
  },
]);
//# sourceMappingURL=327ec79a3209edc73e4e.js.map
