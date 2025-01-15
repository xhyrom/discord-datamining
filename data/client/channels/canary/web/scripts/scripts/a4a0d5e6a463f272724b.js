"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16547"],
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
    857458: function (e, n, o) {
      o.d(n, {
        M: function () {
          return l;
        },
      });
      var t = o(200651);
      o(192379);
      var r = o(512969),
        i = o(860911),
        a = o(981631),
        s = o(188785);
      function l() {
        let e = location.pathname + location.search;
        return s.a ? a.Z5c.REGISTER : (0, i.Ui)(e, !1);
      }
      n.Z = function () {
        return (0, t.jsx)(r.l_, { to: l() });
      };
    },
    77987: function (e, n, o) {
      o.d(n, {
        e: function () {
          return l;
        },
      });
      var t = o(200651);
      o(192379);
      var r = o(314897),
        i = o(449934),
        a = o(857458),
        s = o(981631);
      function l(e, n) {
        var o, l;
        let c =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function u(o) {
          if (
            !(0, i.$8)() &&
            r.default.getLoginStatus() !== s.u34.LOGGING_IN &&
            r.default.allowLogoutRedirect()
          )
            return null != n
              ? (0, t.jsx)(n, { renderRedirect: (0, t.jsx)(a.Z, {}) })
              : (0, t.jsx)(a.Z, {});
          return (0, t.jsx)(e, { ...(c.passProps ? o : null) });
        }
        return (
          (u.displayName = "Authenticated(".concat(
            null !==
              (l = null !== (o = e.displayName) && void 0 !== o ? o : e.name) &&
              void 0 !== l
              ? l
              : "<Unknown>",
            ")",
          )),
          u
        );
      }
    },
    531338: function (e, n, o) {
      o.r(n), o(610138), o(216116), o(78328), o(815648), o(47120);
      var t = o(200651);
      o(192379);
      var r = o(481060),
        i = o(457330),
        a = o(726542),
        s = o(77987),
        l = o(787025),
        c = o(656649),
        u = o(388032),
        d = o(887082);
      n.default = (0, s.e)(function (e) {
        let { match: n } = e,
          o = n.params.type,
          s = a.Z.get(o);
        if (null == s)
          return (0, t.jsx)(l.G, {
            children: (0, t.jsx)(r.Text, {
              className: d.error,
              variant: "text-md/normal",
              color: "text-warning",
              children: u.intl.string(u.t.WLDKSU),
            }),
          });
        async function f() {
          var e, n, t;
          let r = new URLSearchParams(window.location.search),
            { body: a } = await i.Z.authorize(o, {
              location: "Connection Intermediate",
              twoWayLink:
                null != r.get("two_way_link")
                  ? "true" === r.get("two_way_link")
                  : void 0,
              twoWayLinkType:
                null !== (e = r.get("two_way_link_type")) && void 0 !== e
                  ? e
                  : void 0,
              userCode:
                null !== (n = r.get("two_way_user_code")) && void 0 !== n
                  ? n
                  : void 0,
              successRedirect:
                null !== (t = r.get("success_redirect")) && void 0 !== t
                  ? t
                  : void 0,
            });
          window.location = a.url;
        }
        return (0, t.jsx)(l.G, {
          wrapperClassName: d.wrapper,
          children: (0, t.jsxs)("div", {
            className: d.root,
            children: [
              (0, t.jsx)(c.KJ, { className: d.logos, platform: s }),
              (0, t.jsx)(r.Heading, {
                variant: "text-lg/bold",
                className: d.header,
                children: u.intl.format(u.t.Pw4veX, { provider: s.name }),
              }),
              (0, t.jsx)(r.Text, {
                variant: "text-md/normal",
                className: d.body,
                children: u.intl.format(u.t.rHlSVF, { provider: s.name }),
              }),
              (0, t.jsx)(r.Button, {
                size: r.Button.Sizes.LARGE,
                color: r.Button.Colors.BRAND,
                onClick: f,
                children: u.intl.string(u.t["+NJGEh"]),
              }),
            ],
          }),
        });
      });
    },
    656649: function (e, n, o) {
      o.d(n, {
        KJ: function () {
          return d;
        },
        UV: function () {
          return u;
        },
        vJ: function () {
          return c;
        },
      });
      var t = o(200651);
      o(192379);
      var r = o(120356),
        i = o.n(r),
        a = o(726542),
        s = o(981631),
        l = o(343085);
      function c(e) {
        return null != e && Object.values(s.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: n, platformType: o } = e,
          r = a.Z.get(o);
        return (0, t.jsx)("div", {
          className: l.verifyConnectedAccount,
          children: (0, t.jsxs)("div", {
            children: [(0, t.jsx)(d, { platform: r }), n],
          }),
        });
      }
      function d(e) {
        let { platform: n, className: o } = e;
        return (0, t.jsxs)("div", {
          className: i()(l.logos, o),
          children: [
            (0, t.jsx)("div", { className: i()(l.logo, l.logoDiscord) }),
            (0, t.jsx)("div", { className: l.logosDivider }),
            (0, t.jsx)("div", {
              className: l.logo,
              style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
    },
    887082: function (e, n, o) {
      e.exports = {
        root: "root_b5f312",
        wrapper: "wrapper_b5f312",
        header: "header_b5f312",
        body: "body_b5f312",
        logos: "logos_b5f312",
        error: "error_b5f312",
      };
    },
    343085: function (e, n, o) {
      e.exports = {
        verifyConnectedAccount: "verifyConnectedAccount_f74474",
        logos: "logos_f74474",
        logosDivider: "logosDivider_f74474",
        logo: "logo_f74474",
        logoDiscord: "logoDiscord_f74474",
      };
    },
  },
]);
//# sourceMappingURL=a4a0d5e6a463f272724b.js.map
