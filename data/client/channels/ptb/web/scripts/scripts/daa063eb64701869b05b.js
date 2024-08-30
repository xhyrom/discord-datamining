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
        o = e(470079),
        r = e(990547),
        n = e(481060),
        c = e(37234),
        i = e(809206),
        l = e(100527),
        d = e(906732),
        E = e(213609),
        _ = e(1585),
        L = e(313201),
        A = e(300284),
        v = e(768581),
        u = e(335131),
        C = e(689938),
        f = e(965302),
        S = e(749423);
      function B() {
        let a = (0, v.NZ)({
            avatarDecoration: { asset: "a_49c479e15533fb4c02eb320c9c137433" },
            canAnimate: !1,
            size: (0, _.y9)(n.AvatarSizes.SIZE_120),
          }),
          t = (0, v.NZ)({
            avatarDecoration: { asset: "a_c3cffc19e9784f7d0b005eecdf1b566e" },
            canAnimate: !1,
            size: (0, _.y9)(n.AvatarSizes.SIZE_120),
          }),
          e = (0, v.NZ)({
            avatarDecoration: { asset: "a_d72066b8cecbadd9fc951913ebcc384f" },
            canAnimate: !1,
            size: (0, _.y9)(n.AvatarSizes.SIZE_120),
          });
        return (0, s.jsxs)("div", {
          className: f.avatarBackground,
          children: [
            (0, s.jsx)(n.Avatar, {
              size: n.AvatarSizes.SIZE_120,
              src: S,
              avatarDecoration: a,
              className: f.leftAvatar,
              "aria-hidden": !0,
            }),
            (0, s.jsx)(n.Avatar, {
              size: n.AvatarSizes.SIZE_120,
              src: S,
              avatarDecoration: t,
              className: f.centerAvatar,
              "aria-hidden": !0,
            }),
            (0, s.jsx)(n.Avatar, {
              size: n.AvatarSizes.SIZE_120,
              src: S,
              avatarDecoration: e,
              className: f.rightAvatar,
              "aria-hidden": !0,
            }),
          ],
        });
      }
      function h(a) {
        let { transitionState: t, onClose: e } = a,
          v = (0, L.Dt)(),
          { analyticsLocations: S } = (0, d.ZP)(l.Z.COLLECTIBLES_EXPIRY_MODAL),
          h = (0, A.Z)({ analyticsLocations: S });
        return (
          o.useEffect(() => {
            (0, i.Mn)({ avatarDecoration: null });
          }, []),
          (0, E.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
            properties: { location_stack: S },
          }),
          (0, s.jsxs)(n.ModalRoot, {
            transitionState: t,
            "aria-labelledby": v,
            className: f.container,
            children: [
              (0, s.jsx)(B, {}),
              (0, s.jsx)(n.ModalCloseButton, {
                onClick: e,
                className: f.closeButton,
              }),
              (0, s.jsxs)(n.ModalContent, {
                className: f.content,
                children: [
                  (0, s.jsx)(n.Heading, {
                    variant: "heading-xl/bold",
                    color: "always-white",
                    className: f.title,
                    children:
                      C.Z.Messages.COLLECTIBLES_EPHEMERAL_DECO_UPSELL_HEADER_2,
                  }),
                  (0, s.jsx)(n.Text, {
                    variant: "text-sm/medium",
                    color: "always-white",
                    className: f.body,
                    children:
                      C.Z.Messages.COLLECTIBLES_EPHEMERAL_DECO_UPSELL_BODY,
                  }),
                ],
              }),
              (0, s.jsxs)(n.ModalFooter, {
                className: f.footer,
                children: [
                  (0, s.jsx)(n.Button, {
                    look: n.Button.Looks.LINK,
                    color: n.Button.Colors.BRAND,
                    onClick: () => {
                      e(),
                        (0, c.xf)(),
                        h(),
                        (0, _.ps)({ analyticsLocations: S });
                    },
                    children:
                      C.Z.Messages.COLLECTIBLES_EPHEMERAL_DECO_UPSELL_CTA_2,
                  }),
                  (0, s.jsx)(n.Button, {
                    look: n.Button.Looks.FILLED,
                    color: n.Button.Colors.BRAND,
                    onClick: () => {
                      e(),
                        (0, u.mK)({
                          analyticsLocations: S,
                          analyticsSource: l.Z.COLLECTIBLES_EXPIRY_MODAL,
                          openInLayer: !1,
                        });
                    },
                    children:
                      C.Z.Messages.COLLECTIBLES_EPHEMERAL_DECO_UPSELL_CTA_1,
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
//# sourceMappingURL=daa063eb64701869b05b.js.map
