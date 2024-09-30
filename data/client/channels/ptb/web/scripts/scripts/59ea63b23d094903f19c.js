"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46882"],
  {
    857458: function (r, t, e) {
      e.d(t, {
        M: function () {
          return u;
        },
      });
      var n = e(735250);
      e(470079);
      var o = e(266067),
        a = e(860911),
        l = e(981631),
        i = e(188785);
      function u() {
        let r = location.pathname + location.search;
        return i.a ? l.Z5c.REGISTER : (0, a.Ui)(r, !1);
      }
      t.Z = function () {
        return (0, n.jsx)(o.l_, { to: u() });
      };
    },
    77987: function (r, t, e) {
      e.d(t, {
        e: function () {
          return u;
        },
      });
      var n = e(735250);
      e(470079);
      var o = e(314897),
        a = e(449934),
        l = e(857458),
        i = e(981631);
      function u(r, t) {
        var e, u;
        let c =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function d(e) {
          if (
            !(0, a.$8)() &&
            o.default.getLoginStatus() !== i.u34.LOGGING_IN &&
            o.default.allowLogoutRedirect()
          )
            return null != t
              ? (0, n.jsx)(t, { renderRedirect: (0, n.jsx)(l.Z, {}) })
              : (0, n.jsx)(l.Z, {});
          return (0, n.jsx)(r, { ...(c.passProps ? e : null) });
        }
        return (
          (d.displayName = "Authenticated(".concat(
            null !==
              (u = null !== (e = r.displayName) && void 0 !== e ? e : r.name) &&
              void 0 !== u
              ? u
              : "<Unknown>",
            ")",
          )),
          d
        );
      }
    },
    924339: function (r, t, e) {
      e.r(t), e(411104);
      var n = e(735250);
      e(470079);
      var o = e(512722),
        a = e.n(o),
        l = e(593473),
        i = e(186231),
        u = e(159277),
        c = e(478677),
        d = e(457330),
        s = e(702493),
        A = e(77987),
        h = e(275759),
        I = e(710845),
        p = e(807675),
        T = e(69580),
        v = e(787025),
        _ = e(591759),
        w = e(981631),
        f = e(602091);
      let L = new I.Z("LinkAuthorize");
      async function P(r, t, e, n) {
        var o, l, i, u, s;
        let A = null;
        try {
          let { body: r } = await d.Z.authorize(n, { twoWayLinkType: c.g.WEB });
          A = r.url;
        } catch (r) {
          throw Error(
            "error at authorize with code ".concat(
              null !==
                (l =
                  null == r
                    ? void 0
                    : null === (o = r.body) || void 0 === o
                      ? void 0
                      : o.code) && void 0 !== l
                ? l
                : 0,
            ),
          );
        }
        let I = null;
        try {
          a()(null != A, "No URL in authorize response");
          let { state: r } = (0, h.xp)(A);
          a()(null != r, "Authorize URL state query parameter must be present"),
            (I = r);
        } catch (r) {
          throw Error("error at authorize parsing callback params");
        }
        try {
          let o = await d.Z.completeTwoWayLink(n, r, t, I, e);
          return null == o
            ? void 0
            : null === (i = o.body) || void 0 === i
              ? void 0
              : i.redirect;
        } catch (r) {
          throw Error(
            "error at callback with code ".concat(
              null !==
                (s =
                  null == r
                    ? void 0
                    : null === (u = r.body) || void 0 === u
                      ? void 0
                      : u.code) && void 0 !== s
                ? s
                : 0,
            ),
          );
        }
      }
      function N(r) {
        let { platformType: t } = r;
        (0, s.Z)();
        let e = (0, p.y)(window.location.search),
          { code: o, token_redirect_uri: a } = l.parse(window.location.search),
          u = async (r) => {
            let { location: e } = r;
            if (null == e) return;
            let { error: n } = l.parse(e),
              u = null;
            if (null == n && null != o)
              try {
                u = await P(e, o, a, t);
              } catch (t) {
                var c;
                L.error(
                  "Error Creating Discord link",
                  null == t ? void 0 : t.message,
                );
                let r = _.Z.toURLSafe(e);
                if (null == r) return;
                r.searchParams.delete("code"),
                  r.searchParams.set("error", "two_way_link_error"),
                  r.searchParams.set(
                    "error_description",
                    null !== (c = null == t ? void 0 : t.message) &&
                      void 0 !== c
                      ? c
                      : "unknown_error",
                  ),
                  (e = r.toString());
              }
            window.location = null == u || u === i.b.OAUTH_REDIRECT ? e : u;
          };
        return (0, n.jsx)(v.G, {
          removeChildWrapper: !0,
          children: (0, n.jsx)(T.OAuth2AuthorizeModal, {
            transitionState: f.Dv.ENTERED,
            ...e,
            showLogout: !0,
            callback: u,
          }),
        });
      }
      t.default = (0, A.e)(function (r) {
        let { match: t } = r,
          e = t.params.type,
          { client_id: o = "" } = l.parse(window.location.search),
          a = e === w.ABu.PLAYSTATION && o === u.t.PLAYSTATION_APPLICATION_ID,
          i =
            e === w.ABu.PLAYSTATION_STAGING &&
            o === u.t.PLAYSTATION_STAGING_APPLICATION_ID;
        return a || i ? (0, n.jsx)(N, { platformType: e }) : null;
      });
    },
    186231: function (r, t, e) {
      var n;
      e.d(t, {
        b: function () {
          return n;
        },
      }),
        ((n || (n = {})).OAUTH_REDIRECT = "oauth_redirect");
    },
    159277: function (r, t, e) {
      var n, o;
      e.d(t, {
        M: function () {
          return a;
        },
        t: function () {
          return n;
        },
      }),
        e(47120),
        ((o = n || (n = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (o.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (o.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let a = {
        PLAYSTATION_APPLICATION_IDS: new Set([
          "984193235868065795",
          "1008890872156405890",
        ]),
        ALL: new Set([
          "622174530214821906",
          "984193235868065795",
          "1008890872156405890",
        ]),
      };
    },
    478677: function (r, t, e) {
      var n, o;
      e.d(t, {
        g: function () {
          return n;
        },
      }),
        e(47120),
        ((o = n || (n = {})).MOBILE = "mobile"),
        (o.DESKTOP = "desktop"),
        (o.WEB = "web"),
        (o.DEVICE_CODE = "device_code");
    },
  },
]);
//# sourceMappingURL=59ea63b23d094903f19c.js.map
