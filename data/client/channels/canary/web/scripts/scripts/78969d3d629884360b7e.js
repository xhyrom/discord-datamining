"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96473"],
  {
    976853: function (n, e, l) {
      l.d(e, {
        Z: function () {
          return r;
        },
      });
      var t = l(399606),
        u = l(592125),
        i = l(176505);
      function r(n) {
        let e = (0, t.e7)([u.Z], () => {
          let e = u.Z.getChannel(n);
          return (null == e ? void 0 : e.parent_id) != null && e.isForumPost()
            ? u.Z.getChannel(null == e ? void 0 : e.parent_id)
            : null;
        });
        return (
          (null == e ? void 0 : e.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) ===
          !0
        );
      }
    },
    36998: function (n, e, l) {
      l.d(e, {
        v: function () {
          return i;
        },
      });
      var t = l(944486),
        u = l(176505);
      function i() {
        var n;
        let e =
          null !== (n = t.Z.getCurrentlySelectedChannelId()) && void 0 !== n
            ? n
            : void 0;
        return null != e && (0, u.AB)(e)
          ? { channel_static_route: e }
          : { channel_id: e };
      }
    },
    805362: function (n, e, l) {
      l.r(e),
        l.d(e, {
          default: function () {
            return d;
          },
        });
      var t = l(735250);
      l(470079);
      var u = l(481060),
        i = l(239091),
        r = l(358085),
        a = l(905041),
        o = l(689938);
      function d(n) {
        let { href: e, textContent: l, onSelect: d } = n,
          c = (0, a.Z)(e, l);
        return r.isPlatformEmbedded && null != c
          ? (0, t.jsx)(u.Menu, {
              navId: "image-context",
              onClose: i.Zy,
              "aria-label": o.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
              onSelect: d,
              children: (0, t.jsx)(u.MenuGroup, { children: c }),
            })
          : null;
      }
    },
    905041: function (n, e, l) {
      l.d(e, {
        Z: function () {
          return p;
        },
      });
      var t = l(735250);
      l(470079);
      var u = l(481060),
        i = l(829883),
        r = l(976853),
        a = l(378233),
        o = l(902676),
        d = l(626135),
        c = l(49012),
        s = l(358085),
        v = l(998502),
        _ = l(36998),
        f = l(981631),
        h = l(689938);
      function p(n, e, l, p) {
        let E = (0, r.Z)(null == l ? void 0 : l.getChannelId());
        if (
          !s.isPlatformEmbedded ||
          null == n ||
          "" === n ||
          E ||
          (null == p ? void 0 : p.shouldHideMediaOptions) === !0 ||
          (null != n && null != (0, a.B0)(n)) ||
          (null != n && (0, i.zt)(n))
        )
          return null;
        let I = (0, o.F)(n),
          M = (l) => {
            d.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: I,
              ...(0, _.v)(),
            }),
              (0, c.q)(
                { href: n, trusted: (0, c.r)(n, e), shouldConfirm: !0 },
                l,
              );
          };
        return [
          (0, t.jsx)(
            u.MenuItem,
            {
              id: "copy-native-link",
              label: h.Z.Messages.COPY_LINK,
              action: () => {
                d.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: I,
                  ...(0, _.v)(),
                }),
                  v.ZP.copy(n);
              },
            },
            "copy-native-link",
          ),
          (0, t.jsx)(
            u.MenuItem,
            {
              id: "open-native-link",
              label: h.Z.Messages.OPEN_LINK,
              action: (n) => M(n),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=78969d3d629884360b7e.js.map
