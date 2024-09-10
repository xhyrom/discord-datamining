"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["299"],
  {
    180781: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var o = n(735250);
      n(470079);
      var i = n(442837),
        a = n(481060),
        r = n(906732),
        c = n(48217),
        s = n(26323),
        l = n(430824),
        u = n(914010),
        d = n(709586),
        b = n(981631),
        _ = n(30513),
        f = n(689938),
        E = n(364042);
      function g(e) {
        let { analyticsSection: t, analyticsPage: n, isGIF: g, banner: R } = e,
          m = (0, i.e7)([u.Z], () => u.Z.getGuildId()),
          p = (0, i.e7)([l.Z], () => l.Z.getGuild(m)),
          { analyticsLocations: I } = (0, r.ZP)();
        return null == p ||
          p.hasFeature(b.oNc.ANIMATED_BANNER) ||
          (!g && p.hasFeature(b.oNc.BANNER))
          ? null
          : (0, o.jsxs)("div", {
              className: E.container,
              children: [
                (0, o.jsx)(d.Z, { className: E.guildBoostingIcon }),
                (0, o.jsx)(a.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: f.Z.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, o.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.LINK,
                  className: E.subscribeButton,
                  onClick: () => {
                    if (null == p) return;
                    let e = {
                      section: t,
                      page: n,
                      object: b.qAy.UPSELL_HEADER,
                    };
                    null != R
                      ? (0, c.c)({
                          analyticsLocations: I,
                          analyticsLocation: e,
                          guild: p,
                          isGIF: g,
                          banner: R,
                        })
                      : (0, s.Z)({
                          analyticsLocations: I,
                          analyticsSourceLocation: e,
                          guild: p,
                          perks: g ? (0, _.zC)() : (0, _.XO)(),
                        });
                  },
                  children: f.Z.Messages.PREMIUM_GUILD_BOOST_SERVER,
                }),
              ],
            });
      }
    },
    321867: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var o = n(735250),
        i = n(470079),
        a = n(442837),
        r = n(481060),
        c = n(100527),
        s = n(906732),
        l = n(112831),
        u = n(411477),
        d = n(197115),
        b = n(594174),
        _ = n(626135),
        f = n(74538),
        E = n(981631),
        g = n(486324),
        R = n(474936),
        m = n(689938),
        p = n(634387);
      function I(e) {
        let { analyticsSection: t, type: n } = e,
          I = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
          h = f.ZP.canUseAnimatedAvatar(I),
          v = f.ZP.canUsePremiumProfileCustomization(I),
          P = (n === g.pC.BANNER && v) || (n === g.pC.AVATAR && h),
          { sourceAnalyticsLocations: C } = (0, s.ZP)(
            c.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (i.useEffect(() => {
            !P &&
              _.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: C,
              });
          }, [P, t, C]),
          P)
        )
          return null;
        let N = (0, o.jsx)(d.Z, {
          className: p.__invalid_getNitroLink,
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.LINK,
          subscriptionTier: R.Si.TIER_2,
          buttonText: m.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: t,
            object: E.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, o.jsx)(u.Z, {
          reducedRightPadding: !0,
          className: p.nitroPreviewUpsell,
          text: m.Z.Messages.PREMIUM_PREVIEW.format(),
          textSize: l.Z.Sizes.SIZE_14,
          textColor: l.Z.Colors.HEADER_PRIMARY,
          button: N,
        });
      }
    },
    488499: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = n(735250);
      n(470079);
      var i = n(180781),
        a = n(321867),
        r = n(486324);
      function c(e) {
        let {
          type: t,
          analyticsPage: n,
          analyticsSection: c,
          isGIF: s,
          banner: l,
        } = e;
        return [r.pC.BANNER, r.pC.AVATAR].includes(t) && s
          ? (0, o.jsx)(a.Z, { analyticsSection: c, type: t })
          : t === r.pC.GUILD_BANNER
            ? (0, o.jsx)(i.Z, {
                analyticsSection: c,
                analyticsPage: n,
                isGIF: s,
                banner: l,
              })
            : null;
      }
    },
    411477: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = n(735250);
      n(470079);
      var i = n(120356),
        a = n.n(i),
        r = n(481060),
        c = n(436774),
        s = n(112831),
        l = n(148393);
      function u(e) {
        let {
          text: t,
          textSize: n = s.Z.Sizes.SIZE_12,
          textColor: i = s.Z.Colors.STANDARD,
          className: u,
          button: d,
          reducedRightPadding: b = !1,
        } = e;
        return (0, o.jsxs)("div", {
          className: a()(
            b ? l.noticeWithoutRightPadding : l.noticeWithRightPadding,
            u,
          ),
          children: [
            (0, o.jsxs)("div", {
              className: l.noticeLeft,
              children: [
                (0, o.jsx)(r.NitroWheelIcon, {
                  size: "md",
                  className: l.icon,
                  color: c.JX.PREMIUM_TIER_2,
                }),
                (0, o.jsx)(s.Z, {
                  className: l.text,
                  size: n,
                  color: i,
                  children: t,
                }),
              ],
            }),
            d,
          ],
        });
      }
    },
    57739: function (e, t, n) {
      e.exports = {
        modalContent: "modalContent_ba5b9e",
        editingContainer: "editingContainer_ba5b9e",
        imageEnabled: "imageEnabled_ba5b9e image_ba5b9e",
        imageDisabled: "imageDisabled_ba5b9e image_ba5b9e",
        icon: "icon_ba5b9e",
        overlayAvatar: "overlayAvatar_ba5b9e overlay_ba5b9e",
        overlayBanner: "overlayBanner_ba5b9e overlay_ba5b9e",
        sliderContainer: "sliderContainer_ba5b9e",
        nitroUpsell: "nitroUpsell_ba5b9e",
        cancelButton: "cancelButton_ba5b9e",
        modalFooter: "modalFooter_ba5b9e",
        buttonsRight: "buttonsRight_ba5b9e",
        titleCase: "titleCase_ba5b9e",
      };
    },
    364042: function (e, t, n) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    634387: function (e, t, n) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    148393: function (e, t, n) {
      e.exports = {
        noticeWithoutRightPadding:
          "noticeWithoutRightPadding_f97380 notice_f97380",
        noticeWithRightPadding: "noticeWithRightPadding_f97380 notice_f97380",
        noticeLeft: "noticeLeft_f97380",
        icon: "icon_f97380",
        text: "text_f97380",
      };
    },
    821774: function (e, t, n) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    706995: function (e, t, n) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    529934: function (e, t, n) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    892532: function (e, t, n) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=eba44b59cfd252ee6862.js.map
