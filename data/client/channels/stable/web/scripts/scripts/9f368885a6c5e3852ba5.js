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
            return B;
          },
        });
      var r = e(200651),
        n = e(192379),
        o = e(990547),
        s = e(481060),
        c = e(37234),
        i = e(809206),
        l = e(100527),
        d = e(906732),
        u = e(213609),
        _ = e(1585),
        v = e(313201),
        f = e(300284),
        A = e(626135),
        L = e(768581),
        h = e(335131),
        m = e(981631),
        x = e(388032),
        E = e(84363),
        p = e(749423);
      function k() {
        let a = (0, L.NZ)({
            avatarDecoration: { asset: "a_49c479e15533fb4c02eb320c9c137433" },
            canAnimate: !1,
            size: (0, _.y9)(s.AvatarSizes.SIZE_120),
          }),
          t = (0, L.NZ)({
            avatarDecoration: { asset: "a_c3cffc19e9784f7d0b005eecdf1b566e" },
            canAnimate: !1,
            size: (0, _.y9)(s.AvatarSizes.SIZE_120),
          }),
          e = (0, L.NZ)({
            avatarDecoration: { asset: "a_d72066b8cecbadd9fc951913ebcc384f" },
            canAnimate: !1,
            size: (0, _.y9)(s.AvatarSizes.SIZE_120),
          });
        return (0, r.jsxs)("div", {
          className: E.avatarBackground,
          children: [
            (0, r.jsx)(s.Avatar, {
              size: s.AvatarSizes.SIZE_120,
              src: p,
              avatarDecoration: a,
              className: E.leftAvatar,
              "aria-hidden": !0,
            }),
            (0, r.jsx)(s.Avatar, {
              size: s.AvatarSizes.SIZE_120,
              src: p,
              avatarDecoration: t,
              className: E.centerAvatar,
              "aria-hidden": !0,
            }),
            (0, r.jsx)(s.Avatar, {
              size: s.AvatarSizes.SIZE_120,
              src: p,
              avatarDecoration: e,
              className: E.rightAvatar,
              "aria-hidden": !0,
            }),
          ],
        });
      }
      function B(a) {
        let { transitionState: t, onClose: e, skuId: L } = a,
          p = (0, v.Dt)(),
          { analyticsLocations: B } = (0, d.ZP)(l.Z.COLLECTIBLES_EXPIRY_MODAL),
          I = (0, f.Z)({ analyticsLocations: B }),
          S = n.useRef(null);
        return (
          n.useEffect(
            () => (
              (0, i.Mn)({ avatarDecoration: null }),
              () => {
                A.default.track(m.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
                  reason: S.current,
                  sku_id: L,
                });
              }
            ),
            [L],
          ),
          (0, u.Z)({
            type: o.ImpressionTypes.MODAL,
            name: o.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
            properties: { location_stack: B, sku_id: L },
          }),
          (0, r.jsxs)(s.ModalRoot, {
            transitionState: t,
            "aria-labelledby": p,
            className: E.container,
            children: [
              (0, r.jsx)(k, {}),
              (0, r.jsx)(s.ModalCloseButton, {
                onClick: () => {
                  (S.current = "tap_close_button"), e();
                },
                className: E.closeButton,
              }),
              (0, r.jsxs)(s.ModalContent, {
                className: E.content,
                children: [
                  (0, r.jsx)(s.Heading, {
                    variant: "heading-xl/bold",
                    className: E.title,
                    children: x.intl.string(x.t.xz81o6),
                  }),
                  (0, r.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    className: E.body,
                    children: x.intl.string(x.t.Vrbnnp),
                  }),
                ],
              }),
              (0, r.jsxs)(s.ModalFooter, {
                className: E.footer,
                children: [
                  (0, r.jsx)(s.Button, {
                    look: s.Button.Looks.LINK,
                    color: s.Button.Colors.BRAND,
                    onClick: () => {
                      (S.current = "change_avatar_decoration"),
                        e(),
                        (0, c.xf)(),
                        I(),
                        (0, _.ps)({ analyticsLocations: B });
                    },
                    children: x.intl.string(x.t["x8T+k5"]),
                  }),
                  (0, r.jsx)(s.Button, {
                    look: s.Button.Looks.FILLED,
                    color: s.Button.Colors.BRAND,
                    onClick: () => {
                      (S.current = "go_to_shop"),
                        e(),
                        (0, h.mK)({
                          analyticsLocations: B,
                          analyticsSource: l.Z.COLLECTIBLES_EXPIRY_MODAL,
                          openInLayer: !1,
                        });
                    },
                    children: x.intl.string(x.t.fmqMER),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    84363: function (a, t, e) {
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
//# sourceMappingURL=9f368885a6c5e3852ba5.js.map
