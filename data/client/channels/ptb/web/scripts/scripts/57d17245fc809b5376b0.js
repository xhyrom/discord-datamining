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
    857458: function (e, o, n) {
      n.d(o, {
        M: function () {
          return l;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(266067),
        s = n(860911),
        a = n(981631),
        i = n(188785);
      function l() {
        let e = location.pathname + location.search;
        return i.a ? a.Z5c.REGISTER : (0, s.U)(e, !1);
      }
      o.Z = function () {
        return (0, t.jsx)(r.l_, { to: l() });
      };
    },
    77987: function (e, o, n) {
      n.d(o, {
        e: function () {
          return l;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(314897),
        s = n(449934),
        a = n(857458),
        i = n(981631);
      function l(e, o) {
        var n, l;
        let c =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function u(n) {
          if (
            !(0, s.$8)() &&
            r.default.getLoginStatus() !== i.u34.LOGGING_IN &&
            r.default.allowLogoutRedirect()
          )
            return null != o
              ? (0, t.jsx)(o, { renderRedirect: (0, t.jsx)(a.Z, {}) })
              : (0, t.jsx)(a.Z, {});
          return (0, t.jsx)(e, { ...(c.passProps ? n : null) });
        }
        return (
          (u.displayName = "Authenticated(".concat(
            null !==
              (l = null !== (n = e.displayName) && void 0 !== n ? n : e.name) &&
              void 0 !== l
              ? l
              : "<Unknown>",
            ")",
          )),
          u
        );
      }
    },
    531338: function (e, o, n) {
      n.r(o), n(610138), n(216116), n(78328), n(815648), n(47120);
      var t = n(735250);
      n(470079);
      var r = n(481060),
        s = n(457330),
        a = n(726542),
        i = n(77987),
        l = n(787025),
        c = n(656649),
        u = n(689938),
        d = n(335975);
      o.default = (0, i.e)(function (e) {
        let { match: o } = e,
          n = o.params.type,
          i = a.Z.get(n);
        if (null == i)
          return (0, t.jsx)(l.G, {
            children: (0, t.jsx)(r.Text, {
              className: d.error,
              variant: "text-md/normal",
              color: "text-warning",
              children:
                u.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_PLATFORM_UNKNOWN,
            }),
          });
        async function f() {
          var e, o, t;
          let r = new URLSearchParams(window.location.search),
            { body: a } = await s.Z.authorize(n, {
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
                null !== (o = r.get("two_way_user_code")) && void 0 !== o
                  ? o
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
              (0, t.jsx)(c.KJ, { className: d.logos, platform: i }),
              (0, t.jsx)(r.Heading, {
                variant: "text-lg/bold",
                className: d.header,
                children:
                  u.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_HEADER.format(
                    { provider: i.name },
                  ),
              }),
              (0, t.jsx)(r.Text, {
                variant: "text-md/normal",
                className: d.body,
                children:
                  u.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_DESCRIPTION.format(
                    { provider: i.name },
                  ),
              }),
              (0, t.jsx)(r.Button, {
                size: r.Button.Sizes.LARGE,
                color: r.Button.Colors.BRAND,
                onClick: f,
                children:
                  u.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_BUTTON,
              }),
            ],
          }),
        });
      });
    },
    656649: function (e, o, n) {
      n.d(o, {
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
      var t = n(735250);
      n(470079);
      var r = n(120356),
        s = n.n(r),
        a = n(726542),
        i = n(981631),
        l = n(642827);
      function c(e) {
        return null != e && Object.values(i.ABu).includes(e) ? e : null;
      }
      function u(e) {
        let { children: o, platformType: n } = e,
          r = a.Z.get(n);
        return (0, t.jsx)("div", {
          className: l.verifyConnectedAccount,
          children: (0, t.jsxs)("div", {
            children: [(0, t.jsx)(d, { platform: r }), o],
          }),
        });
      }
      function d(e) {
        let { platform: o, className: n } = e;
        return (0, t.jsxs)("div", {
          className: s()(l.logos, n),
          children: [
            (0, t.jsx)("div", { className: s()(l.logo, l.logoDiscord) }),
            (0, t.jsx)("div", { className: l.logosDivider }),
            (0, t.jsx)("div", {
              className: l.logo,
              style: { backgroundImage: 'url("'.concat(o.icon.whiteSVG, '")') },
            }),
          ],
        });
      }
    },
    335975: function (e, o, n) {
      e.exports = {
        root: "root_b5f312",
        wrapper: "wrapper_b5f312",
        header: "header_b5f312",
        body: "body_b5f312",
        logos: "logos_b5f312",
        error: "error_b5f312",
      };
    },
    642827: function (e, o, n) {
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
//# sourceMappingURL=57d17245fc809b5376b0.js.map
