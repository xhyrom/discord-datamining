"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96473"],
  {
    976853: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = e(399606),
        i = e(592125),
        r = e(176505);
      function u(n) {
        let t = (0, l.e7)([i.Z], () => {
          let t = i.Z.getChannel(n);
          return (null == t ? void 0 : t.parent_id) != null && t.isForumPost()
            ? i.Z.getChannel(null == t ? void 0 : t.parent_id)
            : null;
        });
        return (
          (null == t ? void 0 : t.hasFlag(r.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    36998: function (n, t, e) {
      e.d(t, {
        v: function () {
          return r;
        },
      });
      var l = e(944486),
        i = e(176505);
      function r() {
        var n;
        let t =
          null !== (n = l.Z.getCurrentlySelectedChannelId()) && void 0 !== n
            ? n
            : void 0;
        return null != t && (0, i.AB)(t)
          ? { channel_static_route: t }
          : { channel_id: t };
      }
    },
    805362: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return d;
          },
        });
      var l = e(200651);
      e(192379);
      var i = e(481060),
        r = e(239091),
        u = e(358085),
        a = e(905041),
        o = e(388032);
      function d(n) {
        let { href: t, textContent: e, onSelect: d } = n,
          c = (0, a.Z)(t, e);
        return u.isPlatformEmbedded && null != c
          ? (0, l.jsx)(i.Menu, {
              navId: "image-context",
              onClose: r.Zy,
              "aria-label": o.intl.string(o.t.Zow2V1),
              onSelect: d,
              children: (0, l.jsx)(i.MenuGroup, { children: c }),
            })
          : null;
      }
    },
    905041: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return p;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(481060),
        r = e(378409),
        u = e(976853),
        a = e(902676),
        o = e(626135),
        d = e(49012),
        c = e(358085),
        s = e(998502),
        v = e(36998),
        f = e(981631),
        h = e(388032);
      function p(n, t, e, p) {
        let _ = (0, u.Z)(null == e ? void 0 : e.getChannelId());
        if (
          !c.isPlatformEmbedded ||
          null == n ||
          "" === n ||
          _ ||
          (null == p ? void 0 : p.shouldHideMediaOptions) === !0 ||
          !(0, r.Jj)(n)
        )
          return null;
        let C = (0, a.F)(n),
          Z = (e) => {
            o.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: C,
              ...(0, v.v)(),
            }),
              (0, d.q)(
                { href: n, trusted: (0, d.r)(n, t), shouldConfirm: !0 },
                e,
              );
          };
        return [
          (0, l.jsx)(
            i.MenuItem,
            {
              id: "copy-native-link",
              label: h.intl.string(h.t.WqhZsr),
              action: () => {
                o.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: C,
                  ...(0, v.v)(),
                }),
                  s.ZP.copy(n),
                  (0, i.showToast)(
                    (0, i.createToast)(
                      h.intl.string(h.t["L/PwZW"]),
                      i.ToastType.SUCCESS,
                    ),
                  );
              },
            },
            "copy-native-link",
          ),
          (0, l.jsx)(
            i.MenuItem,
            {
              id: "open-native-link",
              label: h.intl.string(h.t.wuRE8P),
              action: (n) => Z(n),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=dd1a23801d9995ff94a3.js.map
