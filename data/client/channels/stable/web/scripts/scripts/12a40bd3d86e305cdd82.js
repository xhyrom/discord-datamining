"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7302"],
  {
    756779: function (e, s, r) {
      r.r(s),
        r.d(s, {
          default: function () {
            return C;
          },
        });
      var o = r(735250);
      r(470079);
      var a = r(512722),
        n = r.n(a),
        t = r(990547),
        i = r(442837),
        d = r(481060),
        l = r(782568),
        c = r(213609),
        p = r(357352),
        u = r(313201),
        m = r(70097),
        f = r(434404),
        _ = r(690221),
        h = r(695346),
        g = r(430824),
        S = r(63063),
        N = r(981631),
        x = r(921944),
        R = r(20281),
        v = r(394453);
      let j = [
        N.oNc.CREATOR_MONETIZABLE,
        N.oNc.CREATOR_MONETIZABLE_PROVISIONAL,
      ];
      function C(e) {
        let {
            transitionState: s,
            onClose: r,
            guildId: a,
            markAsDismissed: C,
          } = e,
          I = (0, u.Dt)(),
          L = (0, i.e7)([g.Z], () => g.Z.getGuild(a));
        n()(null != L, "Guild must be defined"),
          (0, c.Z)({
            type: R.n.MODAL,
            name: t.ImpressionNames.GUILD_SHOP_UPSELL,
            properties: { passed_in_guild_id: a },
          });
        let O = h.QK.useSetting();
        return (0, o.jsxs)(d.ModalRoot, {
          size: d.ModalSize.LARGE,
          className: v.__invalid_root,
          transitionState: s,
          "aria-labelledby": I,
          children: [
            (0, o.jsxs)(d.ModalHeader, {
              separator: !1,
              className: v.header,
              children: [
                (0, o.jsx)(d.ModalCloseButton, {
                  className: v.closeButton,
                  onClick: r,
                }),
                (0, o.jsx)(d.Heading, {
                  variant: "heading-xl/medium",
                  color: "header-primary",
                  id: I,
                  children: "Server Shop is now open for business!",
                }),
                (0, o.jsx)(d.Spacer, { size: 6 }),
                (0, o.jsx)(d.Text, {
                  variant: "text-md/normal",
                  className: v.description,
                  color: "header-secondary",
                  children:
                    "Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community—and earn from your expertise.",
                }),
                (0, o.jsx)(d.Spacer, { size: 8 }),
                (0, o.jsx)(_.Z, {
                  onClick: () => {
                    C(x.L.SECONDARY);
                    let e = "".concat(
                      S.Z.getCreatorSupportArticleURL(
                        N.BhN.SERVER_SUBSCRIPTION_AND_PRODUCTS,
                      ),
                      "#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1",
                    );
                    (0, l.Z)(e, !0);
                  },
                  children: "Learn more",
                }),
              ],
            }),
            (0, o.jsx)("div", { className: v.divider }),
            (0, o.jsxs)(d.ModalContent, {
              className: v.content,
              children: [
                O
                  ? (0, o.jsx)("img", {
                      src: (0, p.b)("server_products/upsell/demo2.png"),
                      alt: "",
                      className: v.demo,
                    })
                  : (0, o.jsx)(m.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: v.demo,
                      width: 400,
                      poster: (0, p.b)("server_products/upsell/demo2.png"),
                      src: (0, p.b)("server_products/upsell/demo.mp4"),
                    }),
                (0, o.jsx)("img", {
                  src: (0, p.b)("server_products/upsell/new_sales.png"),
                  alt: "",
                  className: v.earningsImage,
                }),
              ],
            }),
            (0, o.jsxs)(d.ModalFooter, {
              children: [
                (0, o.jsx)(d.Button, {
                  onClick: () => {
                    j.some((e) => L.hasFeature(e))
                      ? f.Z.open(a, N.pNK.GUILD_PRODUCTS)
                      : f.Z.open(a, N.pNK.ROLE_SUBSCRIPTIONS),
                      C(x.L.PRIMARY),
                      r();
                  },
                  children: "Check it out",
                }),
                (0, o.jsx)(d.Spacer, { size: 12, horizontal: !0 }),
              ],
            }),
          ],
        });
      }
    },
    394453: function (e, s, r) {
      e.exports = {
        header: "header_fcff3d",
        divider: "divider_fcff3d",
        content: "content_fcff3d",
        closeButton: "closeButton_fcff3d",
        earningsImage: "earningsImage_fcff3d",
        demo: "demo_fcff3d",
        description: "description_fcff3d",
      };
    },
  },
]);
//# sourceMappingURL=12a40bd3d86e305cdd82.js.map
