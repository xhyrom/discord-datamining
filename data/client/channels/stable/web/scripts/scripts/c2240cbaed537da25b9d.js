"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77370"],
  {
    749423: function (a) {
      a.exports = "/assets/f2d8e2dafd93d8887626.png";
    },
    83950: function (a, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return h;
          },
        });
      var s = e(735250),
        r = e(470079),
        o = e(990547),
        n = e(481060),
        c = e(37234),
        i = e(809206),
        d = e(100527),
        l = e(906732),
        _ = e(213609),
        E = e(1585),
        L = e(313201),
        u = e(300284),
        A = e(626135),
        v = e(768581),
        C = e(335131),
        f = e(981631),
        S = e(689938),
        B = e(965302),
        D = e(749423);
      function I() {
        let a = (0, v.NZ)({
            avatarDecoration: { asset: "a_49c479e15533fb4c02eb320c9c137433" },
            canAnimate: !1,
            size: (0, E.y9)(n.AvatarSizes.SIZE_120),
          }),
          t = (0, v.NZ)({
            avatarDecoration: { asset: "a_c3cffc19e9784f7d0b005eecdf1b566e" },
            canAnimate: !1,
            size: (0, E.y9)(n.AvatarSizes.SIZE_120),
          }),
          e = (0, v.NZ)({
            avatarDecoration: { asset: "a_d72066b8cecbadd9fc951913ebcc384f" },
            canAnimate: !1,
            size: (0, E.y9)(n.AvatarSizes.SIZE_120),
          });
        return (0, s.jsxs)("div", {
          className: B.avatarBackground,
          children: [
            (0, s.jsx)(n.Avatar, {
              size: n.AvatarSizes.SIZE_120,
              src: D,
              avatarDecoration: a,
              className: B.leftAvatar,
              "aria-hidden": !0,
            }),
            (0, s.jsx)(n.Avatar, {
              size: n.AvatarSizes.SIZE_120,
              src: D,
              avatarDecoration: t,
              className: B.centerAvatar,
              "aria-hidden": !0,
            }),
            (0, s.jsx)(n.Avatar, {
              size: n.AvatarSizes.SIZE_120,
              src: D,
              avatarDecoration: e,
              className: B.rightAvatar,
              "aria-hidden": !0,
            }),
          ],
        });
      }
      function h(a) {
        let { transitionState: t, onClose: e } = a,
          v = (0, L.Dt)(),
          { analyticsLocations: D } = (0, l.ZP)(d.Z.COLLECTIBLES_EXPIRY_MODAL),
          h = (0, u.Z)({ analyticsLocations: D }),
          m = r.useRef(null);
        return (
          r.useEffect(
            () => (
              (0, i.Mn)({ avatarDecoration: null }),
              () => {
                A.default.track(f.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
                  reason: m.current,
                });
              }
            ),
            [],
          ),
          (0, _.Z)({
            type: o.ImpressionTypes.MODAL,
            name: o.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
            properties: { location_stack: D },
          }),
          (0, s.jsxs)(n.ModalRoot, {
            transitionState: t,
            "aria-labelledby": v,
            className: B.container,
            children: [
              (0, s.jsx)(I, {}),
              (0, s.jsx)(n.ModalCloseButton, {
                onClick: () => {
                  (m.current = "tap_close_button"), e();
                },
                className: B.closeButton,
              }),
              (0, s.jsxs)(n.ModalContent, {
                className: B.content,
                children: [
                  (0, s.jsx)(n.Heading, {
                    variant: "heading-xl/bold",
                    className: B.title,
                    children:
                      S.Z.Messages.COLLECTIBLES_EPHEMERAL_DECO_UPSELL_HEADER_2,
                  }),
                  (0, s.jsx)(n.Text, {
                    variant: "text-sm/medium",
                    className: B.body,
                    children:
                      S.Z.Messages.COLLECTIBLES_EPHEMERAL_DECO_UPSELL_BODY,
                  }),
                ],
              }),
              (0, s.jsxs)(n.ModalFooter, {
                className: B.footer,
                children: [
                  (0, s.jsx)(n.Button, {
                    look: n.Button.Looks.LINK,
                    color: n.Button.Colors.BRAND,
                    onClick: () => {
                      (m.current = "change_avatar_decoration"),
                        e(),
                        (0, c.xf)(),
                        h(),
                        (0, E.ps)({ analyticsLocations: D });
                    },
                    children:
                      S.Z.Messages.COLLECTIBLES_EPHEMERAL_DECO_UPSELL_CTA_2,
                  }),
                  (0, s.jsx)(n.Button, {
                    look: n.Button.Looks.FILLED,
                    color: n.Button.Colors.BRAND,
                    onClick: () => {
                      (m.current = "go_to_shop"),
                        e(),
                        (0, C.mK)({
                          analyticsLocations: D,
                          analyticsSource: d.Z.COLLECTIBLES_EXPIRY_MODAL,
                          openInLayer: !1,
                        });
                    },
                    children:
                      S.Z.Messages.COLLECTIBLES_EPHEMERAL_DECO_UPSELL_CTA_1,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    965302: function (a, t, e) {
      a.exports = {
        container: "container_da2506",
        content: "content_da2506",
        closeButton: "closeButton_da2506",
        avatarBackground: "avatarBackground_da2506",
        leftAvatar: "leftAvatar_da2506",
        centerAvatar: "centerAvatar_da2506",
        rightAvatar: "rightAvatar_da2506",
        title: "title_da2506",
        body: "body_da2506",
        footer: "footer_da2506",
      };
    },
  },
]);
//# sourceMappingURL=c2240cbaed537da25b9d.js.map
