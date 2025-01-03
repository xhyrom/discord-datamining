"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96473"],
  {
    378409: function (t, n, e) {
      e.d(n, {
        Jj: function () {
          return h;
        },
        Lz: function () {
          return v;
        },
        gS: function () {
          return p;
        },
        rV: function () {
          return f;
        },
        s$: function () {
          return m;
        },
      }),
        e(47120);
      var r = e(829883),
        l = e(378233),
        i = e(591759);
      let a = /^.*\.discordapp\.net$/,
        u = "cdn.discordapp.com",
        o = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        s = new Set(["jpg", "jpeg", "png"]),
        d = (t) => {
          var n, e, r, l;
          return null === (l = i.Z.toURLSafe(t)) || void 0 === l
            ? void 0
            : null === (r = l.pathname) || void 0 === r
              ? void 0
              : null === (e = r.split(".")) || void 0 === e
                ? void 0
                : null === (n = e.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function c(t) {
        return t.host === u || a.test(t.hostname);
      }
      function f(t) {
        let n = i.Z.toURLSafe(t);
        return null != n && c(n);
      }
      function h(t) {
        return !((0, l.B0)(t) || (0, r.zt)(t)) && !0;
      }
      function p(t) {
        let n = i.Z.toURLSafe(t);
        if (null == n) return !1;
        let e = d(t);
        return null != e && o.has(e) && c(n) && h(t);
      }
      function v(t) {
        let n = i.Z.toURLSafe(t);
        if (null == n) return !1;
        let e = d(t);
        return null != e && s.has(e) && c(n) && h(t);
      }
      function m(t) {
        let n = i.Z.toURLSafe(t);
        return null == n || n.host === u
          ? t
          : "https://media.discordapp.net" === n.origin
            ? ((n.host = u),
              n.searchParams.delete("size"),
              n.searchParams.delete("width"),
              n.searchParams.delete("height"),
              n.searchParams.delete("quality"),
              n.searchParams.delete("format"),
              n.toString())
            : (n.searchParams.delete("width"),
              n.searchParams.delete("height"),
              n.searchParams.set("quality", "lossless"),
              n.searchParams.delete("format"),
              n.toString());
      }
    },
    976853: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = e(399606),
        l = e(592125),
        i = e(176505);
      function a(t) {
        let n = (0, r.e7)([l.Z], () => {
          let n = l.Z.getChannel(t);
          return (null == n ? void 0 : n.parent_id) != null && n.isForumPost()
            ? l.Z.getChannel(null == n ? void 0 : n.parent_id)
            : null;
        });
        return (
          (null == n ? void 0 : n.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    36998: function (t, n, e) {
      e.d(n, {
        v: function () {
          return i;
        },
      });
      var r = e(944486),
        l = e(176505);
      function i() {
        var t;
        let n =
          null !== (t = r.Z.getCurrentlySelectedChannelId()) && void 0 !== t
            ? t
            : void 0;
        return null != n && (0, l.AB)(n)
          ? { channel_static_route: n }
          : { channel_id: n };
      }
    },
    805362: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return s;
          },
        });
      var r = e(200651);
      e(192379);
      var l = e(481060),
        i = e(239091),
        a = e(358085),
        u = e(905041),
        o = e(388032);
      function s(t) {
        let { href: n, textContent: e, onSelect: s } = t,
          d = (0, u.Z)(n, e);
        return a.isPlatformEmbedded && null != d
          ? (0, r.jsx)(l.Menu, {
              navId: "image-context",
              onClose: i.Zy,
              "aria-label": o.intl.string(o.t.Zow2V1),
              onSelect: s,
              children: (0, r.jsx)(l.MenuGroup, { children: d }),
            })
          : null;
      }
    },
    905041: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return v;
        },
      });
      var r = e(200651);
      e(192379);
      var l = e(481060),
        i = e(378409),
        a = e(976853),
        u = e(902676),
        o = e(626135),
        s = e(49012),
        d = e(358085),
        c = e(998502),
        f = e(36998),
        h = e(981631),
        p = e(388032);
      function v(t, n, e, v) {
        let m = (0, a.Z)(null == e ? void 0 : e.getChannelId());
        if (
          !d.isPlatformEmbedded ||
          null == t ||
          "" === t ||
          m ||
          (null == v ? void 0 : v.shouldHideMediaOptions) === !0 ||
          !(0, i.Jj)(t)
        )
          return null;
        let g = (0, u.F)(t),
          Z = (e) => {
            o.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: g,
              ...(0, f.v)(),
            }),
              (0, s.q)(
                { href: t, trusted: (0, s.r)(t, n), shouldConfirm: !0 },
                e,
              );
          };
        return [
          (0, r.jsx)(
            l.MenuItem,
            {
              id: "copy-native-link",
              label: p.intl.string(p.t.WqhZsr),
              action: () => {
                o.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: g,
                  ...(0, f.v)(),
                }),
                  c.ZP.copy(t),
                  (0, l.showToast)(
                    (0, l.createToast)(
                      p.intl.string(p.t["L/PwZW"]),
                      l.ToastType.SUCCESS,
                    ),
                  );
              },
            },
            "copy-native-link",
          ),
          (0, r.jsx)(
            l.MenuItem,
            {
              id: "open-native-link",
              label: p.intl.string(p.t.wuRE8P),
              action: (t) => Z(t),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=b23c340a71c9a4441a1e.js.map
