"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96473"],
  {
    976853: function (n, t, l) {
      l.d(t, {
        Z: function () {
          return r;
        },
      });
      var e = l(399606),
        i = l(592125),
        u = l(176505);
      function r(n) {
        let t = (0, e.e7)([i.Z], () => {
          let t = i.Z.getChannel(n);
          return (null == t ? void 0 : t.parent_id) != null && t.isForumPost()
            ? i.Z.getChannel(null == t ? void 0 : t.parent_id)
            : null;
        });
        return (
          (null == t ? void 0 : t.hasFlag(u.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    36998: function (n, t, l) {
      l.d(t, {
        v: function () {
          return u;
        },
      });
      var e = l(944486),
        i = l(176505);
      function u() {
        var n;
        let t =
          null !== (n = e.Z.getCurrentlySelectedChannelId()) && void 0 !== n
            ? n
            : void 0;
        return null != t && (0, i.AB)(t)
          ? { channel_static_route: t }
          : { channel_id: t };
      }
    },
    805362: function (n, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return d;
          },
        });
      var e = l(200651);
      l(192379);
      var i = l(481060),
        u = l(239091),
        r = l(358085),
        a = l(905041),
        o = l(388032);
      function d(n) {
        let { href: t, textContent: l, onSelect: d } = n,
          c = (0, a.Z)(t, l);
        return r.isPlatformEmbedded && null != c
          ? (0, e.jsx)(i.Menu, {
              navId: "image-context",
              onClose: u.Zy,
              "aria-label": o.intl.string(o.t.Zow2V1),
              onSelect: d,
              children: (0, e.jsx)(i.MenuGroup, { children: c }),
            })
          : null;
      }
    },
    905041: function (n, t, l) {
      l.d(t, {
        Z: function () {
          return _;
        },
      });
      var e = l(200651);
      l(192379);
      var i = l(481060),
        u = l(829883),
        r = l(976853),
        a = l(378233),
        o = l(902676),
        d = l(626135),
        c = l(49012),
        s = l(358085),
        v = l(998502),
        f = l(36998),
        h = l(981631),
        p = l(388032);
      function _(n, t, l, _) {
        let Z = (0, r.Z)(null == l ? void 0 : l.getChannelId());
        if (
          !s.isPlatformEmbedded ||
          null == n ||
          "" === n ||
          Z ||
          (null == _ ? void 0 : _.shouldHideMediaOptions) === !0 ||
          (null != n && null != (0, a.B0)(n)) ||
          (null != n && (0, u.zt)(n))
        )
          return null;
        let C = (0, o.F)(n),
          E = (l) => {
            d.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: C,
              ...(0, f.v)(),
            }),
              (0, c.q)(
                { href: n, trusted: (0, c.r)(n, t), shouldConfirm: !0 },
                l,
              );
          };
        return [
          (0, e.jsx)(
            i.MenuItem,
            {
              id: "copy-native-link",
              label: p.intl.string(p.t.WqhZsr),
              action: () => {
                d.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: C,
                  ...(0, f.v)(),
                }),
                  v.ZP.copy(n);
              },
            },
            "copy-native-link",
          ),
          (0, e.jsx)(
            i.MenuItem,
            {
              id: "open-native-link",
              label: p.intl.string(p.t.wuRE8P),
              action: (n) => E(n),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=52138291b9b5b0c67f01.js.map
