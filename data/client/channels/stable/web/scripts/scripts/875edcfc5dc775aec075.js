"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12736"],
  {
    844594: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return I;
          },
        });
      var o = t(735250),
        i = t(470079),
        n = t(481060),
        a = t(313201),
        r = t(197115),
        u = t(921813),
        l = t(687158),
        d = t(576635),
        c = t(626135),
        A = t(981631),
        E = t(486324),
        _ = t(474936),
        p = t(689938),
        R = t(614883);
      function I(e) {
        let {
            user: s,
            guildId: t,
            transitionState: I,
            imageSrc: M,
            uploadType: T,
            onSubscribe: m,
            onClose: S,
          } = e,
          b = (0, a.Dt)(),
          P = (0, l.ZP)(s.id, t),
          { primaryColor: N, secondaryColor: x } = (0, d.Z)({
            user: s,
            displayProfile: P,
            pendingAvatar: T === E.pC.AVATAR ? M : void 0,
            isPreview: !0,
          });
        return (
          i.useEffect(() => {
            c.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
              type: _.cd.ANIMATED_AVATAR_PREVIEW_GIF_MODAL,
            });
          }, []),
          (0, o.jsxs)(n.ModalRoot, {
            className: R.modalRoot,
            transitionState: I,
            size: n.ModalSize.SMALL,
            "aria-labelledby": b,
            hideShadow: !0,
            children: [
              (0, o.jsx)(u.Z, {
                user: s,
                canUsePremiumCustomization: !0,
                disabledInputs: !0,
                pendingAvatar: T === E.pC.AVATAR ? M : void 0,
                pendingBanner: T === E.pC.BANNER ? M : void 0,
                pendingThemeColors: [N, x],
              }),
              (0, o.jsxs)("div", {
                className: R.upsellSection,
                children: [
                  (0, o.jsx)(n.Text, {
                    className: R.joinText,
                    variant: "text-sm/normal",
                    children:
                      T === E.pC.AVATAR
                        ? p.Z.Messages.PREMIUM_PREVIEW_JOIN_AVATAR
                        : p.Z.Messages.PREMIUM_PREVIEW_JOIN_BANNER,
                  }),
                  (0, o.jsx)(r.Z, {
                    buttonText: p.Z.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
                    subscriptionTier: _.Si.TIER_2,
                    className: R.premiumSubscribeButton,
                    size: n.Button.Sizes.SMALL,
                    premiumModalAnalyticsLocation: {
                      section: A.jXE.SETTINGS_EDIT_PROFILE,
                      object: A.qAy.BUTTON_CTA,
                    },
                    onSubscribeModalClose: (e) => {
                      e && (null == m || m(), S());
                    },
                  }),
                  (0, o.jsx)(n.Button, {
                    onClick: S,
                    size: n.Button.Sizes.SMALL,
                    color: n.Button.Colors.PRIMARY,
                    look: n.Button.Looks.FILLED,
                    children: p.Z.Messages.PREMIUM_PREVIEW_EXIT,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    614883: function (e, s, t) {
      e.exports = {
        modalRoot: "modalRoot_f6519d",
        upsellSection: "upsellSection_f6519d",
        joinText: "joinText_f6519d",
        premiumSubscribeButton: "premiumSubscribeButton_f6519d",
      };
    },
  },
]);
//# sourceMappingURL=875edcfc5dc775aec075.js.map
