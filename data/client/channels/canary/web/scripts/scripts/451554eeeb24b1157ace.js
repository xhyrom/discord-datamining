"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12241"],
  {
    976853: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var l = n(399606),
        i = n(592125),
        a = n(176505);
      function r(t) {
        let e = (0, l.e7)([i.Z], () => {
          let e = i.Z.getChannel(t);
          return (null == e ? void 0 : e.parent_id) != null && e.isForumPost()
            ? i.Z.getChannel(null == e ? void 0 : e.parent_id)
            : null;
        });
        return (
          (null == e ? void 0 : e.hasFlag(a.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    36998: function (t, e, n) {
      n.d(e, {
        v: function () {
          return a;
        },
      });
      var l = n(944486),
        i = n(176505);
      function a() {
        var t;
        let e =
          null !== (t = l.Z.getCurrentlySelectedChannelId()) && void 0 !== t
            ? t
            : void 0;
        return null != e && (0, i.AB)(e)
          ? { channel_static_route: e }
          : { channel_id: e };
      }
    },
    115512: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return s;
          },
        });
      var l = n(200651);
      n(192379);
      var i = n(481060),
        a = n(239091),
        r = n(358085),
        u = n(29264),
        o = n(905041),
        d = n(388032);
      function s(t) {
        let { src: e, onSelect: n } = t,
          s = (0, u.Z)(e),
          c = (0, o.Z)(e, null);
        return r.isPlatformEmbedded
          ? (0, l.jsxs)(i.Menu, {
              navId: "image-context",
              onClose: a.Zy,
              "aria-label": d.intl.string(d.t.Zow2V1),
              onSelect: n,
              children: [
                (0, l.jsx)(i.MenuGroup, { children: s }),
                (0, l.jsx)(i.MenuGroup, { children: c }),
              ],
            })
          : null;
      }
    },
    29264: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var l = n(200651);
      n(192379);
      var i = n(481060),
        a = n(668781),
        r = n(829883),
        u = n(976853),
        o = n(626135),
        d = n(358085),
        s = n(960048),
        c = n(591759),
        h = n(998502),
        p = n(36998),
        v = n(981631),
        f = n(388032);
      let g = "https://media.discordapp.net",
        m = /^.*\.discordapp\.net$/,
        E = "cdn.discordapp.com",
        _ = "".concat(g, "/stickers"),
        M = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        I = new Set(["jpg", "jpeg", "png"]),
        P = (t) => {
          var e, n, l, i;
          return null === (i = c.Z.toURLSafe(t)) || void 0 === i
            ? void 0
            : null === (l = i.pathname) || void 0 === l
              ? void 0
              : null === (n = l.split(".")) || void 0 === n
                ? void 0
                : null === (e = n.pop()) || void 0 === e
                  ? void 0
                  : e.toLowerCase();
        };
      function Z(t, e) {
        a.Z.show({ title: f.intl.string(f.t.j2d6Ki), body: t }),
          s.Z.captureException(e);
      }
      function C(t, e, n) {
        if (
          (0, u.Z)(null == e ? void 0 : e.getChannelId()) ||
          (null == n ? void 0 : n.shouldHideMediaOptions) === !0 ||
          !d.isPlatformEmbedded ||
          null == t ||
          !(function (t) {
            let e = c.Z.toURLSafe(t);
            if (null == e) return !1;
            let n = P(t);
            return (
              (m.test(e.hostname) || e.host === E) &&
              !t.startsWith(_) &&
              !(0, r.zt)(t) &&
              null != n &&
              M.has(n)
            );
          })(t)
        )
          return null;
        let a = (function (t) {
            let e = c.Z.toURLSafe(t);
            return null == e || e.host === E
              ? t
              : e.origin === g
                ? ((e.host = E),
                  e.searchParams.delete("size"),
                  e.searchParams.delete("width"),
                  e.searchParams.delete("height"),
                  e.searchParams.delete("quality"),
                  e.searchParams.delete("format"),
                  e.toString())
                : (e.searchParams.delete("width"),
                  e.searchParams.delete("height"),
                  e.searchParams.set("quality", "lossless"),
                  e.toString());
          })(t),
          s = async () => {
            try {
              await h.ZP.saveImage(a),
                o.default.track(v.rMx.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, p.v)(),
                });
            } catch (t) {
              o.default.track(v.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, p.v)(),
              }),
                Z(f.intl.string(f.t["8Ve/S0"]), t);
            }
          },
          C = async () => {
            try {
              await h.ZP.copyImage(a),
                o.default.track(v.rMx.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, p.v)(),
                });
            } catch (t) {
              Z(f.intl.string(f.t.PTPbj4), t),
                o.default.track(v.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                  ...(0, p.v)(),
                });
            }
          };
        return [
          h.ZP.canCopyImage() &&
          (function (t) {
            let e = P(t);
            return null != e && I.has(e);
          })(t)
            ? (0, l.jsx)(
                i.MenuItem,
                {
                  id: "copy-image",
                  label: f.intl.string(f.t.tvUqWl),
                  action: C,
                },
                "copy-image",
              )
            : null,
          (0, l.jsx)(
            i.MenuItem,
            { id: "save-image", label: f.intl.string(f.t.PeXhgI), action: s },
            "save-image",
          ),
        ];
      }
    },
    905041: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return g;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(481060),
        a = n(829883),
        r = n(976853),
        u = n(378233),
        o = n(902676),
        d = n(626135),
        s = n(49012),
        c = n(358085),
        h = n(998502),
        p = n(36998),
        v = n(981631),
        f = n(388032);
      function g(t, e, n, g) {
        let m = (0, r.Z)(null == n ? void 0 : n.getChannelId());
        if (
          !c.isPlatformEmbedded ||
          null == t ||
          "" === t ||
          m ||
          (null == g ? void 0 : g.shouldHideMediaOptions) === !0 ||
          (null != t && null != (0, u.B0)(t)) ||
          (null != t && (0, a.zt)(t))
        )
          return null;
        let E = (0, o.F)(t),
          _ = (n) => {
            d.default.track(v.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: E,
              ...(0, p.v)(),
            }),
              (0, s.q)(
                { href: t, trusted: (0, s.r)(t, e), shouldConfirm: !0 },
                n,
              );
          };
        return [
          (0, l.jsx)(
            i.MenuItem,
            {
              id: "copy-native-link",
              label: f.intl.string(f.t.WqhZsr),
              action: () => {
                d.default.track(v.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: E,
                  ...(0, p.v)(),
                }),
                  h.ZP.copy(t);
              },
            },
            "copy-native-link",
          ),
          (0, l.jsx)(
            i.MenuItem,
            {
              id: "open-native-link",
              label: f.intl.string(f.t.wuRE8P),
              action: (t) => _(t),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=451554eeeb24b1157ace.js.map
