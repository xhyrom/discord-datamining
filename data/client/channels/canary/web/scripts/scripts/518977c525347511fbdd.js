"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18327"],
  {
    731433: function (e, t, a) {
      a.r(t),
        a.d(t, {
          DECO_SKU_ID: function () {
            return T;
          },
          default: function () {
            return E;
          },
        });
      var o = a(735250);
      a(470079);
      var s = a(990547),
        r = a(442837),
        n = a(481060),
        i = a(37234),
        d = a(100527),
        c = a(906732),
        l = a(213609),
        _ = a(204418),
        u = a(1585),
        m = a(223143),
        v = a(313201),
        I = a(300284),
        x = a(158776),
        M = a(594174),
        p = a(741245),
        A = a(474936),
        C = a(689938),
        f = a(553510);
      let T = "1225876188074082374";
      function D(e) {
        let { user: t, deco: a } = e,
          s = (0, r.e7)([x.Z], () => x.Z.getStatus(t.id));
        return (0, o.jsxs)("div", {
          className: f.avatarBackground,
          children: [
            (0, o.jsx)(_.Z, {
              user: t,
              guildId: void 0,
              avatarDecorationOverride: a,
              status: s,
              className: f.avatar,
            }),
            (0, o.jsx)("div", { className: f.rect }),
            (0, o.jsx)("div", { className: f.rect }),
            (0, o.jsx)("div", { className: f.bottomOverlay }),
          ],
        });
      }
      function E(e) {
        var t;
        let { transitionState: a, onClose: _ } = e,
          x = (0, v.Dt)(),
          { theme: E } = (0, n.useThemeContext)(),
          N = (0, r.e7)([M.default], () => M.default.getCurrentUser()),
          { purchases: O } = (0, m.c)(),
          R = null === (t = O.get(T)) || void 0 === t ? void 0 : t.items,
          h = void 0 !== R ? R[0] : void 0,
          { analyticsLocations: j } = (0, c.ZP)(
            d.Z.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL,
          ),
          y = (0, I.Z)({ analyticsLocations: j });
        return (
          (0, l.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.APRIL_PREMIUM_MARKETING_DECO_CLAIMED_MODAL,
            properties: { location_stack: j },
          }),
          (0, o.jsxs)(n.ModalRoot, {
            transitionState: a,
            "aria-labelledby": x,
            className: f.container,
            children: [
              void 0 !== N && (0, o.jsx)(D, { user: N, deco: h }),
              (0, o.jsxs)(n.ModalContent, {
                className: f.content,
                children: [
                  (0, o.jsx)(p.C, {
                    theme: E,
                    premiumType: A.p9.TIER_2,
                    type: p.C.Types.PREMIUM_ACTIVATED,
                  }),
                  (0, o.jsx)(n.Text, {
                    variant: "text-md/medium",
                    color: "text-normal",
                    className: f.bodyText,
                    children:
                      C.Z.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_CLAIM_DECO_MODAL_BODY.format(),
                  }),
                ],
              }),
              (0, o.jsx)(n.ModalFooter, {
                children: (0, o.jsx)(n.Button, {
                  look: n.Button.Looks.FILLED,
                  color: n.Button.Colors.BRAND,
                  onClick: () => {
                    _(),
                      (0, i.xf)(),
                      y(),
                      (0, u.ps)({
                        initialSelectedDecoration: h,
                        analyticsLocations: j,
                      });
                  },
                  children: C.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION,
                }),
              }),
            ],
          })
        );
      }
    },
    553510: function (e, t, a) {
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
//# sourceMappingURL=518977c525347511fbdd.js.map
