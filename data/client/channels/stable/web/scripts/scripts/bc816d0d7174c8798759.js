"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12241"],
  {
    36998: function (e, t, n) {
      n.d(t, {
        v: function () {
          return i;
        },
      });
      var a = n(944486),
        l = n(176505);
      function i() {
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
        i = n(239091),
        r = n(358085),
        s = n(29264),
        o = n(905041),
        u = n(689938);
      function d(e) {
        let { src: t, onSelect: n } = e,
          d = (0, s.Z)(t),
          c = (0, o.Z)(t, null);
        return r.isPlatformEmbedded
          ? (0, a.jsxs)(l.Menu, {
              navId: "image-context",
              onClose: i.Zy,
              "aria-label": u.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
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
        i = n(668781),
        r = n(829883),
        s = n(976853),
        o = n(626135),
        u = n(358085),
        d = n(960048),
        c = n(591759),
        E = n(998502),
        M = n(36998),
        h = n(981631),
        p = n(689938);
      let _ = "https://media.discordapp.net",
        v = /^.*\.discordapp\.net$/,
        f = "cdn.discordapp.com",
        m = "".concat(_, "/stickers"),
        I = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        g = new Set(["jpg", "jpeg", "png"]),
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
        i.Z.show({ title: p.Z.Messages.ERROR, body: e }),
          d.Z.captureException(t);
      }
      function C(e, t, n) {
        if (
          (0, s.Z)(null == t ? void 0 : t.getChannelId()) ||
          (null == n ? void 0 : n.shouldHideMediaOptions) === !0 ||
          !u.isPlatformEmbedded ||
          null == e ||
          !(function (e) {
            let t = c.Z.toURLSafe(e);
            if (null == t) return !1;
            let n = Z(e);
            return (
              (v.test(t.hostname) || t.host === f) &&
              !e.startsWith(m) &&
              !(0, r.zt)(e) &&
              null != n &&
              I.has(n)
            );
          })(e)
        )
          return null;
        let i = (function (e) {
            let t = c.Z.toURLSafe(e);
            return null == t || t.host === f
              ? e
              : t.origin === _
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
              await E.ZP.saveImage(i),
                o.default.track(h.rMx.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, M.v)(),
                });
            } catch (e) {
              o.default.track(h.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, M.v)(),
              }),
                N(p.Z.Messages.ERROR_SAVING_IMAGE, e);
            }
          },
          C = async () => {
            try {
              await E.ZP.copyImage(i),
                o.default.track(h.rMx.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, M.v)(),
                });
            } catch (e) {
              N(p.Z.Messages.ERROR_COPYING_IMAGE, e),
                o.default.track(h.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                  ...(0, M.v)(),
                });
            }
          };
        return [
          E.ZP.canCopyImage() &&
          (function (e) {
            let t = Z(e);
            return null != t && g.has(t);
          })(e)
            ? (0, a.jsx)(
                l.MenuItem,
                {
                  id: "copy-image",
                  label: p.Z.Messages.COPY_IMAGE_MENU_ITEM,
                  action: C,
                },
                "copy-image",
              )
            : null,
          (0, a.jsx)(
            l.MenuItem,
            {
              id: "save-image",
              label: p.Z.Messages.SAVE_IMAGE_MENU_ITEM,
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
          return _;
        },
      });
      var a = n(735250);
      n(470079);
      var l = n(481060),
        i = n(829883),
        r = n(976853),
        s = n(378233),
        o = n(902676),
        u = n(626135),
        d = n(49012),
        c = n(358085),
        E = n(998502),
        M = n(36998),
        h = n(981631),
        p = n(689938);
      function _(e, t, n, _) {
        let v = (0, r.Z)(null == n ? void 0 : n.getChannelId());
        if (
          !c.isPlatformEmbedded ||
          null == e ||
          "" === e ||
          v ||
          (null == _ ? void 0 : _.shouldHideMediaOptions) === !0 ||
          (null != e && null != (0, s.B0)(e)) ||
          (null != e && (0, i.zt)(e))
        )
          return null;
        let f = (0, o.F)(e),
          m = (n) => {
            u.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: f,
              ...(0, M.v)(),
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
              label: p.Z.Messages.COPY_LINK,
              action: () => {
                u.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: f,
                  ...(0, M.v)(),
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
              label: p.Z.Messages.OPEN_LINK,
              action: (e) => m(e),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=bc816d0d7174c8798759.js.map
