"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12241"],
  {
    976853: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(399606),
        l = n(592125),
        r = n(176505);
      function i(e) {
        let t = (0, a.e7)([l.Z], () => {
          let t = l.Z.getChannel(e);
          return (null == t ? void 0 : t.parent_id) != null && t.isForumPost()
            ? l.Z.getChannel(null == t ? void 0 : t.parent_id)
            : null;
        });
        return (
          (null == t ? void 0 : t.hasFlag(r.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    36998: function (e, t, n) {
      n.d(t, {
        v: function () {
          return r;
        },
      });
      var a = n(944486),
        l = n(176505);
      function r() {
        var e;
        let t =
          null !== (e = a.Z.getCurrentlySelectedChannelId()) && void 0 !== e
            ? e
            : void 0;
        return null != t && (0, l.AB)(t)
          ? { channel_static_route: t }
          : { channel_id: t };
      }
    },
    115512: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n(735250);
      n(470079);
      var l = n(481060),
        r = n(239091),
        i = n(358085),
        s = n(29264),
        u = n(905041),
        o = n(689938);
      function d(e) {
        let { src: t, onSelect: n } = e,
          d = (0, s.Z)(t),
          c = (0, u.Z)(t, null);
        return i.isPlatformEmbedded
          ? (0, a.jsxs)(l.Menu, {
              navId: "image-context",
              onClose: r.Zy,
              "aria-label": o.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
              onSelect: n,
              children: [
                (0, a.jsx)(l.MenuGroup, { children: d }),
                (0, a.jsx)(l.MenuGroup, { children: c }),
              ],
            })
          : null;
      }
    },
    29264: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var a = n(735250);
      n(470079);
      var l = n(481060),
        r = n(668781),
        i = n(829883),
        s = n(976853),
        u = n(626135),
        o = n(358085),
        d = n(960048),
        c = n(591759),
        E = n(998502),
        h = n(36998),
        _ = n(981631),
        M = n(689938);
      let p = "https://media.discordapp.net",
        v = /^.*\.discordapp\.net$/,
        f = "cdn.discordapp.com",
        I = "".concat(p, "/stickers"),
        g = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        m = new Set(["jpg", "jpeg", "png"]),
        Z = (e) => {
          var t, n, a, l;
          return null === (l = c.Z.toURLSafe(e)) || void 0 === l
            ? void 0
            : null === (a = l.pathname) || void 0 === a
              ? void 0
              : null === (n = a.split(".")) || void 0 === n
                ? void 0
                : null === (t = n.pop()) || void 0 === t
                  ? void 0
                  : t.toLowerCase();
        };
      function N(e, t) {
        r.Z.show({ title: M.Z.Messages.ERROR, body: e }),
          d.Z.captureException(t);
      }
      function C(e, t, n) {
        if (
          (0, s.Z)(null == t ? void 0 : t.getChannelId()) ||
          (null == n ? void 0 : n.shouldHideMediaOptions) === !0 ||
          !o.isPlatformEmbedded ||
          null == e ||
          !(function (e) {
            let t = c.Z.toURLSafe(e);
            if (null == t) return !1;
            let n = Z(e);
            return (
              (v.test(t.hostname) || t.host === f) &&
              !e.startsWith(I) &&
              !(0, i.zt)(e) &&
              null != n &&
              g.has(n)
            );
          })(e)
        )
          return null;
        let r = (function (e) {
            let t = c.Z.toURLSafe(e);
            return null == t || t.host === f
              ? e
              : t.origin === p
                ? ((t.host = f),
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
          })(e),
          d = async () => {
            try {
              await E.ZP.saveImage(r),
                u.default.track(_.rMx.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, h.v)(),
                });
            } catch (e) {
              u.default.track(_.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, h.v)(),
              }),
                N(M.Z.Messages.ERROR_SAVING_IMAGE, e);
            }
          },
          C = async () => {
            try {
              await E.ZP.copyImage(r),
                u.default.track(_.rMx.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, h.v)(),
                });
            } catch (e) {
              N(M.Z.Messages.ERROR_COPYING_IMAGE, e),
                u.default.track(_.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                  ...(0, h.v)(),
                });
            }
          };
        return [
          E.ZP.canCopyImage() &&
          (function (e) {
            let t = Z(e);
            return null != t && m.has(t);
          })(e)
            ? (0, a.jsx)(
                l.MenuItem,
                {
                  id: "copy-image",
                  label: M.Z.Messages.COPY_IMAGE_MENU_ITEM,
                  action: C,
                },
                "copy-image",
              )
            : null,
          (0, a.jsx)(
            l.MenuItem,
            {
              id: "save-image",
              label: M.Z.Messages.SAVE_IMAGE_MENU_ITEM,
              action: d,
            },
            "save-image",
          ),
        ];
      }
    },
    905041: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var a = n(735250);
      n(470079);
      var l = n(481060),
        r = n(829883),
        i = n(976853),
        s = n(378233),
        u = n(902676),
        o = n(626135),
        d = n(49012),
        c = n(358085),
        E = n(998502),
        h = n(36998),
        _ = n(981631),
        M = n(689938);
      function p(e, t, n, p) {
        let v = (0, i.Z)(null == n ? void 0 : n.getChannelId());
        if (
          !c.isPlatformEmbedded ||
          null == e ||
          "" === e ||
          v ||
          (null == p ? void 0 : p.shouldHideMediaOptions) === !0 ||
          (null != e && null != (0, s.B0)(e)) ||
          (null != e && (0, r.zt)(e))
        )
          return null;
        let f = (0, u.F)(e),
          I = (n) => {
            o.default.track(_.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: f,
              ...(0, h.v)(),
            }),
              (0, d.q)(
                { href: e, trusted: (0, d.r)(e, t), shouldConfirm: !0 },
                n,
              );
          };
        return [
          (0, a.jsx)(
            l.MenuItem,
            {
              id: "copy-native-link",
              label: M.Z.Messages.COPY_LINK,
              action: () => {
                o.default.track(_.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: f,
                  ...(0, h.v)(),
                }),
                  E.ZP.copy(e);
              },
            },
            "copy-native-link",
          ),
          (0, a.jsx)(
            l.MenuItem,
            {
              id: "open-native-link",
              label: M.Z.Messages.OPEN_LINK,
              action: (e) => I(e),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=25d4c38dc0731ec87257.js.map
