"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12736"],
  {
    844594: function (t, i, e) {
      e.r(i),
        e.d(i, {
          default: function () {
            return b;
          },
        });
      var n = e(200651),
        o = e(192379),
        s = e(481060),
        r = e(313201),
        a = e(197115),
        l = e(921813),
        u = e(687158),
        c = e(576635),
        d = e(626135),
        p = e(981631),
        A = e(486324),
        m = e(474936),
        S = e(388032),
        T = e(227319);
      function b(t) {
        let {
            user: i,
            guildId: e,
            transitionState: b,
            imageSrc: _,
            uploadType: x,
            onSubscribe: E,
            onClose: L,
          } = t,
          R = (0, r.Dt)(),
          M = (0, u.ZP)(i.id, e),
          { primaryColor: f, secondaryColor: I } = (0, c.Z)({
            user: i,
            displayProfile: M,
            pendingAvatar: x === A.pC.AVATAR ? _ : void 0,
            isPreview: !0,
          });
        return (
          o.useEffect(() => {
            d.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
              type: m.cd.ANIMATED_AVATAR_PREVIEW_GIF_MODAL,
            });
          }, []),
          (0, n.jsxs)(s.ModalRoot, {
            className: T.modalRoot,
            transitionState: b,
            size: s.ModalSize.SMALL,
            "aria-labelledby": R,
            hideShadow: !0,
            children: [
              (0, n.jsx)(l.Z, {
                user: i,
                canUsePremiumCustomization: !0,
                disabledInputs: !0,
                pendingAvatar: x === A.pC.AVATAR ? _ : void 0,
                pendingBanner: x === A.pC.BANNER ? _ : void 0,
                pendingThemeColors: [f, I],
              }),
              (0, n.jsxs)("div", {
                className: T.upsellSection,
                children: [
                  (0, n.jsx)(s.Text, {
                    className: T.joinText,
                    variant: "text-sm/normal",
                    children:
                      x === A.pC.AVATAR
                        ? S.intl.string(S.t.Mcp8fH)
                        : S.intl.string(S.t.Px9zLS),
                  }),
                  (0, n.jsx)(a.Z, {
                    buttonText: S.intl.string(S.t["6I0ceH"]),
                    subscriptionTier: m.Si.TIER_2,
                    className: T.premiumSubscribeButton,
                    size: s.Button.Sizes.SMALL,
                    premiumModalAnalyticsLocation: {
                      section: p.jXE.SETTINGS_EDIT_PROFILE,
                      object: p.qAy.BUTTON_CTA,
                    },
                    onSubscribeModalClose: (t) => {
                      t && (null == E || E(), L());
                    },
                  }),
                  (0, n.jsx)(s.Button, {
                    onClick: L,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.PRIMARY,
                    look: s.Button.Looks.FILLED,
                    children: S.intl.string(S.t.V3S9WV),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    227319: function (t, i, e) {
      t.exports = {
        modalRoot: "modalRoot_f6519d",
        upsellSection: "upsellSection_f6519d",
        joinText: "joinText_f6519d",
        premiumSubscribeButton: "premiumSubscribeButton_f6519d",
      };
    },
  },
]);
//# sourceMappingURL=83415c15c0ea810f7b82.js.map
