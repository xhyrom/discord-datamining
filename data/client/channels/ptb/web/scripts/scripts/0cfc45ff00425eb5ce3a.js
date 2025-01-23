"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12241"],
  {
    976853: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = e(399606),
        l = e(592125),
        i = e(176505);
      function r(t) {
        let n = (0, a.e7)([l.Z], () => {
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
      var a = e(944486),
        l = e(176505);
      function i() {
        var t;
        let n =
          null !== (t = a.Z.getCurrentlySelectedChannelId()) && void 0 !== t
            ? t
            : void 0;
        return null != n && (0, l.AB)(n)
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
      var a = e(200651);
      e(192379);
      var l = e(481060),
        i = e(239091),
        r = e(358085),
        o = e(29264),
        u = e(905041),
        s = e(388032);
      function c(t) {
        let { src: n, onSelect: e } = t,
          c = (0, o.Z)(n),
          d = (0, u.Z)(n, null);
        return r.isPlatformEmbedded
          ? (0, a.jsxs)(l.Menu, {
              navId: "image-context",
              onClose: i.Zy,
              "aria-label": s.intl.string(s.t.Zow2V1),
              onSelect: e,
              children: [
                (0, a.jsx)(l.MenuGroup, { children: c }),
                (0, a.jsx)(l.MenuGroup, { children: d }),
              ],
            })
          : null;
      }
    },
    29264: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return T;
        },
      });
      var a = e(200651);
      e(192379);
      var l = e(481060),
        i = e(378409),
        r = e(976853),
        o = e(626135),
        u = e(358085),
        s = e(960048),
        c = e(998502),
        d = e(36998),
        v = e(981631),
        E = e(388032);
      function p(t, n) {
        (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE)),
          s.Z.captureException(n);
      }
      function T(t, n, e) {
        if (
          (0, r.Z)(null == n ? void 0 : n.getChannelId()) ||
          (null == e ? void 0 : e.shouldHideMediaOptions) === !0 ||
          !u.isPlatformEmbedded ||
          null == t ||
          !(0, i.gS)(t)
        )
          return null;
        let s = (0, i.s$)(t),
          T = async () => {
            try {
              await c.ZP.saveImage(s),
                o.default.track(v.rMx.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, d.v)(),
                }),
                (0, l.showToast)(
                  (0, l.createToast)(
                    E.intl.string(E.t.cqpdJS),
                    l.ToastType.SUCCESS,
                  ),
                );
            } catch (t) {
              o.default.track(v.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, d.v)(),
              }),
                p(E.intl.string(E.t["8Ve/S0"]), t);
            }
          },
          _ = async () => {
            try {
              await c.ZP.copyImage(s),
                o.default.track(v.rMx.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, d.v)(),
                }),
                (0, l.showToast)(
                  (0, l.createToast)(
                    E.intl.string(E.t.bhUpvL),
                    l.ToastType.SUCCESS,
                  ),
                );
            } catch (t) {
              p(E.intl.string(E.t.PTPbj4), t),
                o.default.track(v.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                  ...(0, d.v)(),
                });
            }
          };
        return [
          c.ZP.canCopyImage() && (0, i.Lz)(t)
            ? (0, a.jsx)(
                l.MenuItem,
                {
                  id: "copy-image",
                  label: E.intl.string(E.t.tvUqWl),
                  action: _,
                },
                "copy-image",
              )
            : null,
          (0, a.jsx)(
            l.MenuItem,
            { id: "save-image", label: E.intl.string(E.t.PeXhgI), action: T },
            "save-image",
          ),
        ];
      }
    },
    905041: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return T;
        },
      });
      var a = e(200651);
      e(192379);
      var l = e(481060),
        i = e(378409),
        r = e(976853),
        o = e(902676),
        u = e(626135),
        s = e(49012),
        c = e(358085),
        d = e(998502),
        v = e(36998),
        E = e(981631),
        p = e(388032);
      function T(t, n, e, T) {
        let _ = (0, r.Z)(null == e ? void 0 : e.getChannelId());
        if (
          !c.isPlatformEmbedded ||
          null == t ||
          "" === t ||
          _ ||
          (null == T ? void 0 : T.shouldHideMediaOptions) === !0 ||
          !(0, i.Jj)(t)
        )
          return null;
        let f = (0, o.F)(t),
          h = (e) => {
            u.default.track(E.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: f,
              ...(0, v.v)(),
            }),
              (0, s.q)(
                { href: t, trusted: (0, s.r)(t, n), shouldConfirm: !0 },
                e,
              );
          };
        return [
          (0, a.jsx)(
            l.MenuItem,
            {
              id: "copy-native-link",
              label: p.intl.string(p.t.WqhZsr),
              action: () => {
                u.default.track(E.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: f,
                  ...(0, v.v)(),
                }),
                  d.ZP.copy(t),
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
          (0, a.jsx)(
            l.MenuItem,
            {
              id: "open-native-link",
              label: p.intl.string(p.t.wuRE8P),
              action: (t) => h(t),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=0cfc45ff00425eb5ce3a.js.map
