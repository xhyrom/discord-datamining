"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96473"],
  {
    378409: function (n, t, e) {
      e.d(t, {
        Jj: function () {
          return c;
        },
        Lz: function () {
          return f;
        },
        gS: function () {
          return h;
        },
        s$: function () {
          return p;
        },
      }),
        e(47120);
      var r = e(829883),
        l = e(378233),
        i = e(591759);
      let a = /^.*\.discordapp\.net$/,
        u = "cdn.discordapp.com",
        o = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        d = new Set(["jpg", "jpeg", "png"]),
        s = (n) => {
          var t, e, r, l;
          return null === (l = i.Z.toURLSafe(n)) || void 0 === l
            ? void 0
            : null === (r = l.pathname) || void 0 === r
              ? void 0
              : null === (e = r.split(".")) || void 0 === e
                ? void 0
                : null === (t = e.pop()) || void 0 === t
                  ? void 0
                  : t.toLowerCase();
        };
      function c(n) {
        return !((0, l.B0)(n) || (0, r.zt)(n)) && !0;
      }
      function h(n) {
        let t = i.Z.toURLSafe(n);
        if (null == t) return !1;
        let e = s(n);
        return (
          (a.test(t.hostname) || t.host === u) && c(n) && null != e && o.has(e)
        );
      }
      function f(n) {
        let t = i.Z.toURLSafe(n);
        if (null == t) return !1;
        let e = s(n);
        return (
          (a.test(t.hostname) || t.host === u) && c(n) && null != e && d.has(e)
        );
      }
      function p(n) {
        let t = i.Z.toURLSafe(n);
        return null == t || t.host === u
          ? n
          : "https://media.discordapp.net" === t.origin
            ? ((t.host = u),
              t.searchParams.delete("size"),
              t.searchParams.delete("width"),
              t.searchParams.delete("height"),
              t.searchParams.delete("quality"),
              t.searchParams.delete("format"),
              t.toString())
            : (t.searchParams.delete("width"),
              t.searchParams.delete("height"),
              t.searchParams.set("quality", "lossless"),
              t.toString());
      }
    },
    976853: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = e(399606),
        l = e(592125),
        i = e(176505);
      function a(n) {
        let t = (0, r.e7)([l.Z], () => {
          let t = l.Z.getChannel(n);
          return (null == t ? void 0 : t.parent_id) != null && t.isForumPost()
            ? l.Z.getChannel(null == t ? void 0 : t.parent_id)
            : null;
        });
        return (
          (null == t ? void 0 : t.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    36998: function (n, t, e) {
      e.d(t, {
        v: function () {
          return i;
        },
      });
      var r = e(944486),
        l = e(176505);
      function i() {
        var n;
        let t =
          null !== (n = r.Z.getCurrentlySelectedChannelId()) && void 0 !== n
            ? n
            : void 0;
        return null != t && (0, l.AB)(t)
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
      var r = e(200651);
      e(192379);
      var l = e(481060),
        i = e(239091),
        a = e(358085),
        u = e(905041),
        o = e(388032);
      function d(n) {
        let { href: t, textContent: e, onSelect: d } = n,
          s = (0, u.Z)(t, e);
        return a.isPlatformEmbedded && null != s
          ? (0, r.jsx)(l.Menu, {
              navId: "image-context",
              onClose: i.Zy,
              "aria-label": o.intl.string(o.t.Zow2V1),
              onSelect: d,
              children: (0, r.jsx)(l.MenuGroup, { children: s }),
            })
          : null;
      }
    },
    905041: function (n, t, e) {
      e.d(t, {
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
        d = e(49012),
        s = e(358085),
        c = e(998502),
        h = e(36998),
        f = e(981631),
        p = e(388032);
      function v(n, t, e, v) {
        let m = (0, a.Z)(null == e ? void 0 : e.getChannelId());
        if (
          !s.isPlatformEmbedded ||
          null == n ||
          "" === n ||
          m ||
          (null == v ? void 0 : v.shouldHideMediaOptions) === !0 ||
          !(0, i.Jj)(n)
        )
          return null;
        let g = (0, u.F)(n),
          Z = (e) => {
            o.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: g,
              ...(0, h.v)(),
            }),
              (0, d.q)(
                { href: n, trusted: (0, d.r)(n, t), shouldConfirm: !0 },
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
                o.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: g,
                  ...(0, h.v)(),
                }),
                  c.ZP.copy(n);
              },
            },
            "copy-native-link",
          ),
          (0, r.jsx)(
            l.MenuItem,
            {
              id: "open-native-link",
              label: p.intl.string(p.t.wuRE8P),
              action: (n) => Z(n),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=c1ffd84703a18b0ff94a.js.map
