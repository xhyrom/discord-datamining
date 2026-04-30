"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24553"],
  {
    329072(e, n, t) {
      t.d(n, { A: () => f });
      var i = t(627968);
      t(64700);
      var r = t(284009),
        c = t.n(r),
        s = t(17928),
        d = t(550079),
        a = t(477782),
        o = t(820284),
        l = t(688810),
        u = t(270816),
        p = t(287809),
        A = t(855187),
        h = t(625903),
        v = t(474397),
        b = t(780964),
        g = t(858897),
        C = t(652215),
        T = t(985018),
        U = t(731854);
      function f(e) {
        let {
            onClose: n,
            onSelect: t,
            minimal: r = !1,
            appContext: f,
            onInteraction: x,
          } = e,
          { analyticsLocations: j } = (0, l.Ay)(),
          y = (0, s.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return (
              c()(
                null != e,
                "VideoDeviceMenu: currentUser cannot be undefined",
              ),
              e
            );
          }),
          E = (0, u.H)({
            deviceType: U.oh.VIDEO_INPUT,
            analyticsLocations: j,
            asSubmenu: r,
          }),
          O = (0, A.A)(y.id, f),
          S = (function (e) {
            let { analyticsLocations: n } = (0, l.Ay)();
            return (0, i.jsx)(a.Dr, {
              id: "video-settings",
              label: T.intl.string(T.t.LKzQSF),
              action: () => {
                (0, g.openUserSettings)(b.X.CAMERA_CATEGORY, {
                  analyticsLocations: n,
                }),
                  (0, v.A)(e, e === C.BRT.POPOUT);
              },
              icon: h.Z,
              leadingAccessory: { type: "icon", icon: h.Z },
            });
          })(f);
        return (0, i.jsx)(o.A, {
          object: C.ZSU.CONTEXT_MENU,
          children: (0, i.jsxs)(d.W, {
            "data-menu-migrated": !0,
            onClose: n,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": T.intl.string(T.t.F122Gz),
            onSelect: t,
            onInteraction: x,
            children: [E, (0, i.jsxs)(a.rX, { children: [O, r ? S : null] })],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=24553.7afd1307828e53fe.js.map
