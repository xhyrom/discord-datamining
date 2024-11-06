"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96473"],
  {
    378409: function (t, e, n) {
      n.d(e, {
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
        n(47120);
      var r = n(829883),
        l = n(378233),
        i = n(591759);
      let a = /^.*\.discordapp\.net$/,
        u = "cdn.discordapp.com",
        o = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        d = new Set(["jpg", "jpeg", "png"]),
        s = (t) => {
          var e, n, r, l;
          return null === (l = i.Z.toURLSafe(t)) || void 0 === l
            ? void 0
            : null === (r = l.pathname) || void 0 === r
              ? void 0
              : null === (n = r.split(".")) || void 0 === n
                ? void 0
                : null === (e = n.pop()) || void 0 === e
                  ? void 0
                  : e.toLowerCase();
        };
      function c(t) {
        return !((0, l.B0)(t) || (0, r.zt)(t)) && !0;
      }
      function h(t) {
        let e = i.Z.toURLSafe(t);
        if (null == e) return !1;
        let n = s(t);
        return (
          (a.test(e.hostname) || e.host === u) && c(t) && null != n && o.has(n)
        );
      }
      function f(t) {
        let e = i.Z.toURLSafe(t);
        if (null == e) return !1;
        let n = s(t);
        return (
          (a.test(e.hostname) || e.host === u) && c(t) && null != n && d.has(n)
        );
      }
      function p(t) {
        let e = i.Z.toURLSafe(t);
        return null == e || e.host === u
          ? t
          : "https://media.discordapp.net" === e.origin
            ? ((e.host = u),
              e.searchParams.delete("size"),
              e.searchParams.delete("width"),
              e.searchParams.delete("height"),
              e.searchParams.delete("quality"),
              e.searchParams.delete("format"),
              e.toString())
            : (e.searchParams.delete("width"),
              e.searchParams.delete("height"),
              e.searchParams.set("quality", "lossless"),
              e.searchParams.delete("format"),
              e.toString());
      }
    },
    976853: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = n(399606),
        l = n(592125),
        i = n(176505);
      function a(t) {
        let e = (0, r.e7)([l.Z], () => {
          let e = l.Z.getChannel(t);
          return (null == e ? void 0 : e.parent_id) != null && e.isForumPost()
            ? l.Z.getChannel(null == e ? void 0 : e.parent_id)
            : null;
        });
        return (
          (null == e ? void 0 : e.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    36998: function (t, e, n) {
      n.d(e, {
        v: function () {
          return i;
        },
      });
      var r = n(944486),
        l = n(176505);
      function i() {
        var t;
        let e =
          null !== (t = r.Z.getCurrentlySelectedChannelId()) && void 0 !== t
            ? t
            : void 0;
        return null != e && (0, l.AB)(e)
          ? { channel_static_route: e }
          : { channel_id: e };
      }
    },
    805362: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        });
      var r = n(200651);
      n(192379);
      var l = n(481060),
        i = n(239091),
        a = n(358085),
        u = n(905041),
        o = n(388032);
      function d(t) {
        let { href: e, textContent: n, onSelect: d } = t,
          s = (0, u.Z)(e, n);
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
    905041: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return v;
        },
      });
      var r = n(200651);
      n(192379);
      var l = n(481060),
        i = n(378409),
        a = n(976853),
        u = n(902676),
        o = n(626135),
        d = n(49012),
        s = n(358085),
        c = n(998502),
        h = n(36998),
        f = n(981631),
        p = n(388032);
      function v(t, e, n, v) {
        let m = (0, a.Z)(null == n ? void 0 : n.getChannelId());
        if (
          !s.isPlatformEmbedded ||
          null == t ||
          "" === t ||
          m ||
          (null == v ? void 0 : v.shouldHideMediaOptions) === !0 ||
          !(0, i.Jj)(t)
        )
          return null;
        let g = (0, u.F)(t),
          P = (n) => {
            o.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: g,
              ...(0, h.v)(),
            }),
              (0, d.q)(
                { href: t, trusted: (0, d.r)(t, e), shouldConfirm: !0 },
                n,
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
                  c.ZP.copy(t);
              },
            },
            "copy-native-link",
          ),
          (0, r.jsx)(
            l.MenuItem,
            {
              id: "open-native-link",
              label: p.intl.string(p.t.wuRE8P),
              action: (t) => P(t),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=c9fa0dfdd8ae091ffb83.js.map
