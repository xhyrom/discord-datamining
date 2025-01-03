"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12241"],
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
          return g;
        },
      }),
        e(47120);
      var r = e(829883),
        a = e(378233),
        l = e(591759);
      let i = /^.*\.discordapp\.net$/,
        o = "cdn.discordapp.com",
        u = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        s = new Set(["jpg", "jpeg", "png"]),
        c = (t) => {
          var n, e, r, a;
          return null === (a = l.Z.toURLSafe(t)) || void 0 === a
            ? void 0
            : null === (r = a.pathname) || void 0 === r
              ? void 0
              : null === (e = r.split(".")) || void 0 === e
                ? void 0
                : null === (n = e.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function d(t) {
        return t.host === o || i.test(t.hostname);
      }
      function f(t) {
        let n = l.Z.toURLSafe(t);
        return null != n && d(n);
      }
      function h(t) {
        return !((0, a.B0)(t) || (0, r.zt)(t)) && !0;
      }
      function p(t) {
        let n = l.Z.toURLSafe(t);
        if (null == n) return !1;
        let e = c(t);
        return null != e && u.has(e) && d(n) && h(t);
      }
      function v(t) {
        let n = l.Z.toURLSafe(t);
        if (null == n) return !1;
        let e = c(t);
        return null != e && s.has(e) && d(n) && h(t);
      }
      function g(t) {
        let n = l.Z.toURLSafe(t);
        return null == n || n.host === o
          ? t
          : "https://media.discordapp.net" === n.origin
            ? ((n.host = o),
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
          return i;
        },
      });
      var r = e(399606),
        a = e(592125),
        l = e(176505);
      function i(t) {
        let n = (0, r.e7)([a.Z], () => {
          let n = a.Z.getChannel(t);
          return (null == n ? void 0 : n.parent_id) != null && n.isForumPost()
            ? a.Z.getChannel(null == n ? void 0 : n.parent_id)
            : null;
        });
        return (
          (null == n ? void 0 : n.hasFlag(l.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    36998: function (t, n, e) {
      e.d(n, {
        v: function () {
          return l;
        },
      });
      var r = e(944486),
        a = e(176505);
      function l() {
        var t;
        let n =
          null !== (t = r.Z.getCurrentlySelectedChannelId()) && void 0 !== t
            ? t
            : void 0;
        return null != n && (0, a.AB)(n)
          ? { channel_static_route: n }
          : { channel_id: n };
      }
    },
    115512: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          },
        });
      var r = e(200651);
      e(192379);
      var a = e(481060),
        l = e(239091),
        i = e(358085),
        o = e(29264),
        u = e(905041),
        s = e(388032);
      function c(t) {
        let { src: n, onSelect: e } = t,
          c = (0, o.Z)(n),
          d = (0, u.Z)(n, null);
        return i.isPlatformEmbedded
          ? (0, r.jsxs)(a.Menu, {
              navId: "image-context",
              onClose: l.Zy,
              "aria-label": s.intl.string(s.t.Zow2V1),
              onSelect: e,
              children: [
                (0, r.jsx)(a.MenuGroup, { children: c }),
                (0, r.jsx)(a.MenuGroup, { children: d }),
              ],
            })
          : null;
      }
    },
    29264: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return v;
        },
      });
      var r = e(200651);
      e(192379);
      var a = e(481060),
        l = e(378409),
        i = e(976853),
        o = e(626135),
        u = e(358085),
        s = e(960048),
        c = e(998502),
        d = e(36998),
        f = e(981631),
        h = e(388032);
      function p(t, n) {
        (0, a.showToast)((0, a.createToast)(t, a.ToastType.FAILURE)),
          s.Z.captureException(n);
      }
      function v(t, n, e) {
        if (
          (0, i.Z)(null == n ? void 0 : n.getChannelId()) ||
          (null == e ? void 0 : e.shouldHideMediaOptions) === !0 ||
          !u.isPlatformEmbedded ||
          null == t ||
          !(0, l.gS)(t)
        )
          return null;
        let s = (0, l.s$)(t),
          v = async () => {
            try {
              await c.ZP.saveImage(s),
                o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, d.v)(),
                }),
                (0, a.showToast)(
                  (0, a.createToast)(
                    h.intl.string(h.t.cqpdJS),
                    a.ToastType.SUCCESS,
                  ),
                );
            } catch (t) {
              o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, d.v)(),
              }),
                p(h.intl.string(h.t["8Ve/S0"]), t);
            }
          },
          g = async () => {
            try {
              await c.ZP.copyImage(s),
                o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, d.v)(),
                }),
                (0, a.showToast)(
                  (0, a.createToast)(
                    h.intl.string(h.t.bhUpvL),
                    a.ToastType.SUCCESS,
                  ),
                );
            } catch (t) {
              p(h.intl.string(h.t.PTPbj4), t),
                o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                  ...(0, d.v)(),
                });
            }
          };
        return [
          c.ZP.canCopyImage() && (0, l.Lz)(t)
            ? (0, r.jsx)(
                a.MenuItem,
                {
                  id: "copy-image",
                  label: h.intl.string(h.t.tvUqWl),
                  action: g,
                },
                "copy-image",
              )
            : null,
          (0, r.jsx)(
            a.MenuItem,
            { id: "save-image", label: h.intl.string(h.t.PeXhgI), action: v },
            "save-image",
          ),
        ];
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
      var a = e(481060),
        l = e(378409),
        i = e(976853),
        o = e(902676),
        u = e(626135),
        s = e(49012),
        c = e(358085),
        d = e(998502),
        f = e(36998),
        h = e(981631),
        p = e(388032);
      function v(t, n, e, v) {
        let g = (0, i.Z)(null == e ? void 0 : e.getChannelId());
        if (
          !c.isPlatformEmbedded ||
          null == t ||
          "" === t ||
          g ||
          (null == v ? void 0 : v.shouldHideMediaOptions) === !0 ||
          !(0, l.Jj)(t)
        )
          return null;
        let m = (0, o.F)(t),
          E = (e) => {
            u.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: m,
              ...(0, f.v)(),
            }),
              (0, s.q)(
                { href: t, trusted: (0, s.r)(t, n), shouldConfirm: !0 },
                e,
              );
          };
        return [
          (0, r.jsx)(
            a.MenuItem,
            {
              id: "copy-native-link",
              label: p.intl.string(p.t.WqhZsr),
              action: () => {
                u.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: m,
                  ...(0, f.v)(),
                }),
                  d.ZP.copy(t),
                  (0, a.showToast)(
                    (0, a.createToast)(
                      p.intl.string(p.t["L/PwZW"]),
                      a.ToastType.SUCCESS,
                    ),
                  );
              },
            },
            "copy-native-link",
          ),
          (0, r.jsx)(
            a.MenuItem,
            {
              id: "open-native-link",
              label: p.intl.string(p.t.wuRE8P),
              action: (t) => E(t),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=34790ddb39f5d3efa597.js.map
