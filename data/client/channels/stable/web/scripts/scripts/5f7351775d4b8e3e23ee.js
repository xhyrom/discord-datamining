"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59207"],
  {
    435626: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return A;
          },
        });
      var i,
        n,
        o = a(200651);
      a(192379);
      var s = a(120356),
        c = a.n(s),
        r = a(481060),
        l = a(493773),
        d = a(100527),
        u = a(906732),
        T = a(1585),
        _ = a(821982),
        m = a(125988),
        C = a(228624),
        h = a(267097),
        x = a(109213),
        g = a(626135),
        I = a(333867),
        j = a(963249),
        p = a(981631),
        E = a(217702),
        b = a(474936),
        N = a(388032),
        O = a(521050),
        S = a(476945),
        y = a(945182);
      function A(t) {
        let {
          analyticsLocations: e,
          transitionState: a,
          onClose: i,
          giftRecipient: n,
          analyticsObject: s,
        } = t;
        return (
          (0, l.Z)(() => {
            g.default.track(p.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
              location: s,
              location_stack: e,
            });
          }),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(B, {}),
              (0, o.jsxs)(r.ModalRoot, {
                size: r.ModalSize.DYNAMIC,
                transitionState: a,
                className: O.modalRoot,
                children: [
                  (0, o.jsxs)(r.ModalHeader, {
                    className: O.header,
                    separator: !1,
                    children: [
                      (0, o.jsx)(r.FormTitle, {
                        tag: r.FormTitleTags.H4,
                        children: N.intl.string(N.t.YBGjsr),
                      }),
                      (0, o.jsx)(r.ModalCloseButton, {
                        onClick: () => {
                          g.default.track(p.rMx.MODAL_DISMISSED, {
                            type: p.jXE.GIFT_CATEGORY_SELECT_MODAL,
                            location_object: p.qAy.BUTTON_CTA,
                          }),
                            i();
                        },
                        className: O.cursorPointer,
                      }),
                    ],
                  }),
                  (0, o.jsx)(r.ModalContent, {
                    className: O.modalContent,
                    children: (0, o.jsx)(R, {
                      analyticsLocations: e,
                      giftRecipient: n,
                      analyticsObject: s,
                      onClose: i,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      ((i = n || (n = {}))[(i.NITRO = 0)] = "NITRO"),
        (i[(i.NITRO_BASIC = 1)] = "NITRO_BASIC"),
        (i[(i.SHOP = 2)] = "SHOP");
      let B = () => ((0, h.Z)(), null);
      function R(t) {
        let { giftRecipient: e, analyticsObject: a, onClose: i } = t,
          { showBothNitroSkusInCategorySelect: n } = x.G.useExperiment(
            { location: "gift-button" },
            { autoTrackExposure: !1 },
          ),
          s = (0, C.hv)("CategoryButtons"),
          { analyticsLocations: l } = (0, u.ZP)(d.Z.GIFT_CATEGORY_SELECT_MODAL),
          T = (t) => {
            t && i();
          },
          _ = (t) => {
            let i = p.Qqv.NITRO_SKU_SELECTION;
            t === b.Si.TIER_2
              ? (i = p.Qqv.NITRO_STANDARD)
              : t === b.Si.TIER_0 && (i = p.Qqv.NITRO_BASIC),
              (0, j.Z)({
                isGift: !0,
                giftRecipient: e,
                giftingOrigin: b.Wt.DM_CHANNEL,
                initialPlanId: null,
                analyticsLocations: l,
                subscriptionTier: t,
                analyticsObject: {
                  ...a,
                  section: p.jXE.GIFT_CATEGORY_SELECT_MODAL,
                  object: p.qAy.GIFT_CATEGORY_OPTION,
                  objectType: i,
                },
                onClose: T,
              });
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(r.Clickable, {
              onClick: () => _(n ? b.Si.TIER_2 : void 0),
              children: (0, o.jsxs)("div", {
                className: c()(O.categoryButton, O.nitroButton),
                children: [
                  (0, o.jsx)(r.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: O.buttonText,
                    children: N.intl.string(N.t["lG6a5+"]),
                  }),
                  (0, o.jsx)(f, { imageType: 0 }),
                ],
              }),
            }),
            n &&
              (0, o.jsx)(r.Clickable, {
                onClick: () => _(b.Si.TIER_0),
                children: (0, o.jsxs)("div", {
                  className: c()(O.nitroBasicButton, O.categoryButton),
                  children: [
                    (0, o.jsx)(r.Text, {
                      variant: "display-sm",
                      color: "always-white",
                      className: O.buttonText,
                      children: N.intl.string(N.t["t9uG/v"]),
                    }),
                    (0, o.jsx)(f, { imageType: 1 }),
                  ],
                }),
              }),
            (0, o.jsx)(r.Clickable, {
              onClick: () => {
                (0, I.Z)({
                  isGift: !0,
                  giftingOrigin: b.Wt.DM_CHANNEL,
                  analyticsLocations: l,
                  analyticsObject: a,
                  giftRecipient: e,
                  onClose: T,
                  variantsReturnStyle: s,
                });
              },
              children: (0, o.jsxs)("div", {
                className: c()(O.shopButton, O.categoryButton),
                children: [
                  (0, o.jsx)(r.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: O.buttonText,
                    children: N.intl.string(N.t.gFlB9f),
                  }),
                  (0, o.jsx)(f, { imageType: 2 }),
                ],
              }),
            }),
          ],
        });
      }
      function f(t) {
        let { imageType: e } = t,
          { avatarPlaceholderSrc: a } = (0, m.Z)({
            size: (0, T.y9)(r.AvatarSizes.SIZE_80),
          }),
          i = (0, _.Z)(
            "a_c3cffc19e9784f7d0b005eecdf1b566e",
            r.AvatarSizes.SIZE_80,
            !1,
          );
        return 0 === e || 1 === e
          ? (0, o.jsx)("div", {
              className: O.wumpusImageContainer,
              children: (0, o.jsx)(r.Image, {
                src: 1 === e ? S : y,
                mediaLayoutType: E.hV.RESPONSIVE,
                width: 122,
                height: 110,
                zoomable: !1,
              }),
            })
          : 2 === e
            ? (0, o.jsx)("div", {
                className: O.shopImageContainer,
                children: (0, o.jsx)(r.Avatar, {
                  src: a,
                  avatarDecoration: i,
                  size: r.AvatarSizes.SIZE_80,
                  "aria-hidden": !0,
                }),
              })
            : void 0;
      }
    },
    521050: function (t, e, a) {
      t.exports = {
        categoryButton: "categoryButton_ce8be8",
        modalRoot: "modalRoot_ce8be8",
        modalContent: "modalContent_ce8be8",
        header: "header_ce8be8",
        wumpusImageContainer: "wumpusImageContainer_ce8be8",
        shopImageContainer: "shopImageContainer_ce8be8",
        nitroButton: "nitroButton_ce8be8",
        nitroBasicButton: "nitroBasicButton_ce8be8",
        shopButton: "shopButton_ce8be8",
        cursorPointer: "cursorPointer_ce8be8",
        buttonText: "buttonText_ce8be8",
      };
    },
  },
]);
//# sourceMappingURL=5f7351775d4b8e3e23ee.js.map
