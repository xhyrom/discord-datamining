"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18327"],
  {
    731433: function (e, t, a) {
      a.r(t),
        a.d(t, {
          DECO_SKU_ID: function () {
            return h;
          },
          default: function () {
            return D;
          },
        });
      var o = a(200651);
      a(192379);
      var r = a(990547),
        n = a(442837),
        s = a(481060),
        i = a(37234),
        d = a(100527),
        c = a(906732),
        l = a(213609),
        u = a(204418),
        m = a(1585),
        v = a(223143),
        _ = a(313201),
        x = a(300284),
        p = a(158776),
        f = a(594174),
        I = a(741245),
        T = a(474936),
        C = a(388032),
        M = a(751664);
      let h = "1225876188074082374";
      function j(e) {
        let { user: t, deco: a } = e,
          r = (0, n.e7)([p.Z], () => p.Z.getStatus(t.id));
        return (0, o.jsxs)("div", {
          className: M.avatarBackground,
          children: [
            (0, o.jsx)(u.Z, {
              user: t,
              guildId: void 0,
              avatarDecorationOverride: a,
              status: r,
              className: M.avatar,
            }),
            (0, o.jsx)("div", { className: M.rect }),
            (0, o.jsx)("div", { className: M.rect }),
            (0, o.jsx)("div", { className: M.bottomOverlay }),
          ],
        });
      }
      function D(e) {
        var t;
        let { transitionState: a, onClose: u } = e,
          p = (0, _.Dt)(),
          { theme: D } = (0, s.useThemeContext)(),
          N = (0, n.e7)([f.default], () => f.default.getCurrentUser()),
          { purchases: y } = (0, v.c7)(),
          A = null === (t = y.get(h)) || void 0 === t ? void 0 : t.items,
          k = void 0 !== A ? A[0] : void 0,
          { analyticsLocations: E } = (0, c.ZP)(
            d.Z.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL,
          ),
          b = (0, x.Z)({ analyticsLocations: E });
        return (
          (0, l.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.APRIL_PREMIUM_MARKETING_DECO_CLAIMED_MODAL,
            properties: { location_stack: E },
          }),
          (0, o.jsxs)(s.ModalRoot, {
            transitionState: a,
            "aria-labelledby": p,
            className: M.container,
            children: [
              void 0 !== N && (0, o.jsx)(j, { user: N, deco: k }),
              (0, o.jsxs)(s.ModalContent, {
                className: M.content,
                children: [
                  (0, o.jsx)(I.C, {
                    theme: D,
                    premiumType: T.p9.TIER_2,
                    type: I.C.Types.PREMIUM_ACTIVATED,
                  }),
                  (0, o.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "text-normal",
                    className: M.bodyText,
                    children: C.intl.format(C.t["9juoTE"], {}),
                  }),
                ],
              }),
              (0, o.jsx)(s.ModalFooter, {
                children: (0, o.jsx)(s.Button, {
                  look: s.Button.Looks.FILLED,
                  color: s.Button.Colors.BRAND,
                  onClick: () => {
                    u(),
                      (0, i.xf)(),
                      b(),
                      (0, m.ps)({
                        initialSelectedDecoration: k,
                        analyticsLocations: E,
                      });
                  },
                  children: C.intl.string(C.t["Tna/TU"]),
                }),
              }),
            ],
          })
        );
      }
    },
    751664: function (e, t, a) {
      e.exports = {
        container: "container_fd8e3e",
        content: "content_fd8e3e",
        avatarBackground: "avatarBackground_fd8e3e",
        avatar: "avatar_fd8e3e",
        rect: "rect_fd8e3e",
        bottomOverlay: "bottomOverlay_fd8e3e",
        bodyText: "bodyText_fd8e3e",
      };
    },
  },
]);
//# sourceMappingURL=c407a705cb3ce0bf7300.js.map
