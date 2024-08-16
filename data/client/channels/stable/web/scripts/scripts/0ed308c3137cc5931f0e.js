"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30364"],
  {
    299840: function (e) {
      e.exports = "/assets/c947acfa055b186cfe58.png";
    },
    968031: function (e, l, s) {
      s.r(l),
        s.d(l, {
          default: function () {
            return L;
          },
        });
      var o = s(735250),
        a = s(470079),
        t = s(442837),
        i = s(481060),
        _ = s(100527),
        r = s(906732),
        T = s(197115),
        E = s(594174),
        n = s(626135),
        p = s(74538),
        M = s(300284),
        f = s(981631),
        d = s(474936),
        c = s(526761),
        S = s(689938),
        U = s(43233);
      function L(e) {
        let {
            analyticsLocations: l,
            transitionState: L,
            onClose: m,
            title: h,
            description: u,
          } = e,
          I = (0, t.e7)([E.default], () => E.default.getCurrentUser()),
          { analyticsLocations: R } = (0, r.ZP)(
            l,
            _.Z.PROFILE_THEME_UPSELL_MODAL,
          );
        a.useEffect(() => {
          n.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
            type: d.cd.PROFILE_THEME_UPSELL_MODAL,
            location_stack: l,
          });
        }, [l]);
        let P = (0, M.Z)({
          scrollPosition: c.Y_.TRY_IT_OUT,
          analyticsLocations: R,
        });
        return (0, o.jsx)(r.Gt, {
          value: R,
          children: (0, o.jsxs)(i.ModalRoot, {
            className: U.profileThemesUpsellModal,
            "aria-label":
              null != h
                ? h
                : S.Z.Messages
                    .USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
            transitionState: L,
            children: [
              (0, o.jsxs)(i.ModalHeader, {
                className: U.profileThemesUpsellModalHeader,
                separator: !1,
                children: [
                  (0, o.jsx)(i.Heading, {
                    variant: "heading-xl/extrabold",
                    className: U.profileThemesUpsellModalTitle,
                    children:
                      null != h
                        ? h
                        : S.Z.Messages
                            .USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
                  }),
                  (0, o.jsx)(i.ModalCloseButton, {
                    className: U.profileThemesUpsellModalCloseButton,
                    onClick: m,
                  }),
                ],
              }),
              (0, o.jsxs)(i.ModalContent, {
                className: U.profileThemesUpsellModalContent,
                children: [
                  (0, o.jsx)(i.Text, {
                    className: U.profileThemesUpsellModalDescription,
                    variant: "text-md/normal",
                    children:
                      null != u
                        ? u
                        : S.Z.Messages
                            .USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_DESCRIPTION,
                  }),
                  (0, o.jsx)("img", {
                    className: U.profileThemesUpsellModalExampleImage,
                    src: s(299840),
                    alt: S.Z.Messages
                      .USER_SETTINGS_PROFILE_THEMES_UPSELL_MODAL_IMAGE_ALT,
                  }),
                ],
              }),
              (0, o.jsxs)(i.ModalFooter, {
                className: U.__invalid_profileThemesUpsellModalFooter,
                children: [
                  (0, o.jsx)(T.Z, {
                    subscriptionTier: d.Si.TIER_2,
                    size: i.Button.Sizes.SMALL,
                    buttonText: p.ZP.isPremium(I)
                      ? S.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE
                      : S.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                  }),
                  (0, o.jsx)(i.Button, {
                    onClick: () => {
                      m(), P();
                    },
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.LINK,
                    size: i.Button.Sizes.SMALL,
                    children:
                      S.Z.Messages
                        .USER_SETTINGS_PROFILE_THEMES_UPSELL_TRY_IT_OUT,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    43233: function (e, l, s) {
      e.exports = {
        profileThemesUpsellModal: "profileThemesUpsellModal_c2ff5f",
        profileThemesUpsellModalHeader: "profileThemesUpsellModalHeader_c2ff5f",
        profileThemesUpsellModalTitle: "profileThemesUpsellModalTitle_c2ff5f",
        profileThemesUpsellModalCloseButton:
          "profileThemesUpsellModalCloseButton_c2ff5f",
        profileThemesUpsellModalContent:
          "profileThemesUpsellModalContent_c2ff5f",
        profileThemesUpsellModalDescription:
          "profileThemesUpsellModalDescription_c2ff5f",
        profileThemesUpsellModalExampleImage:
          "profileThemesUpsellModalExampleImage_c2ff5f",
      };
    },
  },
]);
//# sourceMappingURL=0ed308c3137cc5931f0e.js.map
