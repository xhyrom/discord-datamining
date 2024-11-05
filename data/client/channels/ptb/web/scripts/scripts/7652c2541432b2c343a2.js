"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12241"],
  {
    378409: function (t, n, e) {
      e.d(n, {
        Jj: function () {
          return c;
        },
        Lz: function () {
          return h;
        },
        gS: function () {
          return f;
        },
        s$: function () {
          return v;
        },
      }),
        e(47120);
      var l = e(829883),
        i = e(378233),
        r = e(591759);
      let a = /^.*\.discordapp\.net$/,
        u = "cdn.discordapp.com",
        o = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        d = new Set(["jpg", "jpeg", "png"]),
        s = (t) => {
          var n, e, l, i;
          return null === (i = r.Z.toURLSafe(t)) || void 0 === i
            ? void 0
            : null === (l = i.pathname) || void 0 === l
              ? void 0
              : null === (e = l.split(".")) || void 0 === e
                ? void 0
                : null === (n = e.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function c(t) {
        return !((0, i.B0)(t) || (0, l.zt)(t)) && !0;
      }
      function f(t) {
        let n = r.Z.toURLSafe(t);
        if (null == n) return !1;
        let e = s(t);
        return (
          (a.test(n.hostname) || n.host === u) && c(t) && null != e && o.has(e)
        );
      }
      function h(t) {
        let n = r.Z.toURLSafe(t);
        if (null == n) return !1;
        let e = s(t);
        return (
          (a.test(n.hostname) || n.host === u) && c(t) && null != e && d.has(e)
        );
      }
      function v(t) {
        let n = r.Z.toURLSafe(t);
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
              n.toString());
      }
    },
    976853: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = e(399606),
        i = e(592125),
        r = e(176505);
      function a(t) {
        let n = (0, l.e7)([i.Z], () => {
          let n = i.Z.getChannel(t);
          return (null == n ? void 0 : n.parent_id) != null && n.isForumPost()
            ? i.Z.getChannel(null == n ? void 0 : n.parent_id)
            : null;
        });
        return (
          (null == n ? void 0 : n.hasFlag(r.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    36998: function (t, n, e) {
      e.d(n, {
        v: function () {
          return r;
        },
      });
      var l = e(944486),
        i = e(176505);
      function r() {
        var t;
        let n =
          null !== (t = l.Z.getCurrentlySelectedChannelId()) && void 0 !== t
            ? t
            : void 0;
        return null != n && (0, i.AB)(n)
          ? { channel_static_route: n }
          : { channel_id: n };
      }
    },
    115512: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return s;
          },
        });
      var l = e(200651);
      e(192379);
      var i = e(481060),
        r = e(239091),
        a = e(358085),
        u = e(29264),
        o = e(905041),
        d = e(388032);
      function s(t) {
        let { src: n, onSelect: e } = t,
          s = (0, u.Z)(n),
          c = (0, o.Z)(n, null);
        return a.isPlatformEmbedded
          ? (0, l.jsxs)(i.Menu, {
              navId: "image-context",
              onClose: r.Zy,
              "aria-label": d.intl.string(d.t.Zow2V1),
              onSelect: e,
              children: [
                (0, l.jsx)(i.MenuGroup, { children: s }),
                (0, l.jsx)(i.MenuGroup, { children: c }),
              ],
            })
          : null;
      }
    },
    29264: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return g;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(481060),
        r = e(668781),
        a = e(378409),
        u = e(976853),
        o = e(626135),
        d = e(358085),
        s = e(960048),
        c = e(998502),
        f = e(36998),
        h = e(981631),
        v = e(388032);
      function p(t, n) {
        r.Z.show({ title: v.intl.string(v.t.j2d6Ki), body: t }),
          s.Z.captureException(n);
      }
      function g(t, n, e) {
        if (
          (0, u.Z)(null == n ? void 0 : n.getChannelId()) ||
          (null == e ? void 0 : e.shouldHideMediaOptions) === !0 ||
          !d.isPlatformEmbedded ||
          null == t ||
          !(0, a.gS)(t)
        )
          return null;
        let r = (0, a.s$)(t),
          s = async () => {
            try {
              await c.ZP.saveImage(r),
                o.default.track(h.rMx.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, f.v)(),
                });
            } catch (t) {
              o.default.track(h.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, f.v)(),
              }),
                p(v.intl.string(v.t["8Ve/S0"]), t);
            }
          },
          g = async () => {
            try {
              await c.ZP.copyImage(r),
                o.default.track(h.rMx.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, f.v)(),
                });
            } catch (t) {
              p(v.intl.string(v.t.PTPbj4), t),
                o.default.track(h.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                  ...(0, f.v)(),
                });
            }
          };
        return [
          c.ZP.canCopyImage() && (0, a.Lz)(t)
            ? (0, l.jsx)(
                i.MenuItem,
                {
                  id: "copy-image",
                  label: v.intl.string(v.t.tvUqWl),
                  action: g,
                },
                "copy-image",
              )
            : null,
          (0, l.jsx)(
            i.MenuItem,
            { id: "save-image", label: v.intl.string(v.t.PeXhgI), action: s },
            "save-image",
          ),
        ];
      }
    },
    905041: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return p;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(481060),
        r = e(378409),
        a = e(976853),
        u = e(902676),
        o = e(626135),
        d = e(49012),
        s = e(358085),
        c = e(998502),
        f = e(36998),
        h = e(981631),
        v = e(388032);
      function p(t, n, e, p) {
        let g = (0, a.Z)(null == e ? void 0 : e.getChannelId());
        if (
          !s.isPlatformEmbedded ||
          null == t ||
          "" === t ||
          g ||
          (null == p ? void 0 : p.shouldHideMediaOptions) === !0 ||
          !(0, r.Jj)(t)
        )
          return null;
        let m = (0, u.F)(t),
          E = (e) => {
            o.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: m,
              ...(0, f.v)(),
            }),
              (0, d.q)(
                { href: t, trusted: (0, d.r)(t, n), shouldConfirm: !0 },
                e,
              );
          };
        return [
          (0, l.jsx)(
            i.MenuItem,
            {
              id: "copy-native-link",
              label: v.intl.string(v.t.WqhZsr),
              action: () => {
                o.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: m,
                  ...(0, f.v)(),
                }),
                  c.ZP.copy(t);
              },
            },
            "copy-native-link",
          ),
          (0, l.jsx)(
            i.MenuItem,
            {
              id: "open-native-link",
              label: v.intl.string(v.t.wuRE8P),
              action: (t) => E(t),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=7652c2541432b2c343a2.js.map
