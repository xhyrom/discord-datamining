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
    169382: function (e, s, n) {
      n.d(s, {
        l: function () {
          return t;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(266067);
      function t() {
        return new URLSearchParams((0, r.TH)().search);
      }
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
          return i;
        },
      });
      var r = n(735250);
      n(470079);
      var t = n(120356),
        o = n.n(t),
        a = n(726542),
        c = n(981631),
        l = n(642827);
      function i(e) {
        return null != e && Object.values(c.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: s, platformType: n } = e,
          t = a.Z.get(n);
        return (0, r.jsx)("div", {
          className: l.verifyConnectedAccount,
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(d, { platform: t }), s],
          }),
        });
      }
      function d(e) {
        let { platform: s, className: n } = e;
        return (0, r.jsxs)("div", {
          className: o()(l.logos, n),
          children: [
            (0, r.jsx)("div", { className: o()(l.logo, l.logoDiscord) }),
            (0, r.jsx)("div", { className: l.logosDivider }),
            (0, r.jsx)("div", {
              className: l.logo,
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
      var r = n(735250),
        t = n(470079),
        o = n(120356),
        a = n.n(o),
        c = n(266067),
        l = n(873546),
        i = n(481060),
        u = n(169382),
        d = n(726542),
        f = n(656649),
        g = n(981631),
        C = n(689938),
        _ = n(280532);
      let N = "https://dis.gd/Amazon-Music-Connection",
        E = null != window.opener;
      function m() {
        let { type: e } = (0, c.UO)(),
          s = (0, f.vJ)(e),
          n = (0, u.l)().get("error-code"),
          o = t.useCallback(() => {
            window.close();
          }, []),
          m = t.useMemo(() => {
            switch (s) {
              case g.ABu.AMAZON_MUSIC:
                return (0, r.jsx)("div", {
                  className: a()(_.message, _.details),
                  children: l.tq
                    ? C.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format(
                        {
                          link: () =>
                            (0, r.jsx)(i.Anchor, { href: N, children: N }),
                        },
                      )
                    : C.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format(
                        {
                          link: () =>
                            (0, r.jsx)(i.Anchor, { href: N, children: N }),
                        },
                      ),
                });
              case g.ABu.YOUTUBE:
                if (n === g.evJ.UNKNOWN_ACCOUNT.toString())
                  return (0, r.jsx)("div", {
                    className: a()(_.message, _.details),
                    children:
                      C.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_YOUTUBE_PROFILE.format(
                        {
                          link: "https://support.google.com/youtube/answer/1646861",
                        },
                      ),
                  });
                return null;
              default:
                return null;
            }
          }, [n, s]);
        if (null == s) return null;
        let h = d.Z.get(s);
        return (0, r.jsxs)(f.UV, {
          platformType: s,
          children: [
            (0, r.jsx)("div", {
              className: a()(_.message, _.error),
              children: C.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
                name: h.name,
              }),
            }),
            (0, r.jsx)("div", {
              className: a()(_.message, _.details),
              children: C.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
            }),
            m,
            E
              ? (0, r.jsx)(i.Button, {
                  className: _.btn,
                  onClick: o,
                  children: C.Z.Messages.DONE,
                })
              : null,
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
    280532: function (e, s, n) {
      e.exports = {
        message: "message_a40083",
        error: "error_a40083",
        details: "details_a40083",
        btn: "btn_a40083",
      };
    },
  },
]);
//# sourceMappingURL=833efc3af9a1fe18f39a.js.map
