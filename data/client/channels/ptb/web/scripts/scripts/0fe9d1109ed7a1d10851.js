"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96473"],
  {
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
            return o;
          },
        });
      var t = l(735250);
      l(470079);
      var u = l(481060),
        i = l(239091),
        r = l(358085),
        a = l(905041),
        d = l(689938);
      function o(n) {
        let { href: e, textContent: l, onSelect: o } = n,
          c = (0, a.Z)(e, l);
        return r.isPlatformEmbedded && null != c
          ? (0, t.jsx)(u.Menu, {
              navId: "image-context",
              onClose: i.Zy,
              "aria-label": d.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
              onSelect: o,
              children: (0, t.jsx)(u.MenuGroup, { children: c }),
            })
          : null;
      }
    },
    905041: function (n, e, l) {
      l.d(e, {
        Z: function () {
          return M;
        },
      });
      var t = l(735250);
      l(470079);
      var u = l(481060),
        i = l(829883),
        r = l(976853),
        a = l(378233),
        d = l(902676),
        o = l(626135),
        c = l(49012),
        s = l(358085),
        v = l(998502),
        f = l(36998),
        _ = l(981631),
        p = l(689938);
      function M(n, e, l, M) {
        let h = (0, r.Z)(null == l ? void 0 : l.getChannelId());
        if (
          !s.isPlatformEmbedded ||
          null == n ||
          "" === n ||
          h ||
          (null == M ? void 0 : M.shouldHideMediaOptions) === !0 ||
          (null != n && null != (0, a.B0)(n)) ||
          (null != n && (0, i.zt)(n))
        )
          return null;
        let E = (0, d.F)(n),
          C = (l) => {
            o.default.track(_.rMx.CONTEXT_MENU_LINK_OPENED, {
              hostname: E,
              ...(0, f.v)(),
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
              label: p.Z.Messages.COPY_LINK,
              action: () => {
                o.default.track(_.rMx.CONTEXT_MENU_LINK_COPIED, {
                  hostname: E,
                  ...(0, f.v)(),
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
              label: p.Z.Messages.OPEN_LINK,
              action: (n) => C(n),
            },
            "open-native-link",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=0fe9d1109ed7a1d10851.js.map
