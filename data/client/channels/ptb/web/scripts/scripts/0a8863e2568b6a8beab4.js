"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76501"],
  {
    180781: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(735250);
      n(470079);
      var o = n(442837),
        a = n(481060),
        r = n(906732),
        s = n(48217),
        l = n(26323),
        c = n(430824),
        u = n(914010),
        d = n(709586),
        _ = n(981631),
        b = n(30513),
        f = n(689938),
        E = n(715183);
      function g(e) {
        let { analyticsSection: t, analyticsPage: n, isGIF: g, banner: R } = e,
          m = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
          p = (0, o.e7)([c.Z], () => c.Z.getGuild(m)),
          { analyticsLocations: P } = (0, r.ZP)();
        return null == p ||
          p.hasFeature(_.oNc.ANIMATED_BANNER) ||
          (!g && p.hasFeature(_.oNc.BANNER))
          ? null
          : (0, i.jsxs)("div", {
              className: E.container,
              children: [
                (0, i.jsx)(d.Z, { className: E.guildBoostingIcon }),
                (0, i.jsx)(a.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: f.Z.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, i.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.LINK,
                  className: E.subscribeButton,
                  onClick: () => {
                    if (null == p) return;
                    let e = {
                      section: t,
                      page: n,
                      object: _.qAy.UPSELL_HEADER,
                    };
                    null != R
                      ? (0, s.c)({
                          analyticsLocations: P,
                          analyticsLocation: e,
                          guild: p,
                          isGIF: g,
                          banner: R,
                        })
                      : (0, l.Z)({
                          analyticsLocations: P,
                          analyticsSourceLocation: e,
                          guild: p,
                          perks: g ? (0, b.zC)() : (0, b.XO)(),
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
          return P;
        },
      });
      var i = n(735250),
        o = n(470079),
        a = n(442837),
        r = n(481060),
        s = n(100527),
        l = n(906732),
        c = n(112831),
        u = n(411477),
        d = n(197115),
        _ = n(594174),
        b = n(626135),
        f = n(74538),
        E = n(981631),
        g = n(486324),
        R = n(474936),
        m = n(689938),
        p = n(742046);
      function P(e) {
        let { analyticsSection: t, type: n } = e,
          P = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
          I = f.ZP.canUseAnimatedAvatar(P),
          h = f.ZP.canUsePremiumProfileCustomization(P),
          Z = (n === g.pC.BANNER && h) || (n === g.pC.AVATAR && I),
          { sourceAnalyticsLocations: N } = (0, l.ZP)(
            s.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !Z &&
              b.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: N,
              });
          }, [Z, t, N]),
          Z)
        )
          return null;
        let x = (0, i.jsx)(d.Z, {
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
        return (0, i.jsx)(u.Z, {
          reducedRightPadding: !0,
          className: p.nitroPreviewUpsell,
          text: m.Z.Messages.PREMIUM_PREVIEW.format(),
          textSize: c.Z.Sizes.SIZE_14,
          textColor: c.Z.Colors.HEADER_PRIMARY,
          button: x,
        });
      }
    },
    488499: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(735250);
      n(470079);
      var o = n(180781),
        a = n(321867),
        r = n(486324);
      function s(e) {
        let {
          type: t,
          analyticsPage: n,
          analyticsSection: s,
          isGIF: l,
          banner: c,
        } = e;
        return [r.pC.BANNER, r.pC.AVATAR].includes(t) && l
          ? (0, i.jsx)(a.Z, { analyticsSection: s, type: t })
          : t === r.pC.GUILD_BANNER
            ? (0, i.jsx)(o.Z, {
                analyticsSection: s,
                analyticsPage: n,
                isGIF: l,
                banner: c,
              })
            : null;
      }
    },
    81245: function (e, t, n) {
      n.d(t, {
        M: function () {
          return c;
        },
      });
      var i = n(442837),
        o = n(987170),
        a = n(594174),
        r = n(111361),
        s = n(474936);
      let l = (0, o.Z)({
        id: "2024-08_premium_user_profile_upsell_desktop",
        label: "User Profile Upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function c(e) {
        let t = (0, i.e7)([a.default], () =>
          r.ZP.isPremium(a.default.getCurrentUser(), s.p9.TIER_2),
        );
        return l.useExperiment(
          { location: e },
          { autoTrackExposure: !t, disable: t },
        ).enabled;
      }
    },
    411477: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        r = n(481060),
        s = n(436774),
        l = n(112831),
        c = n(590862);
      function u(e) {
        let {
          text: t,
          textSize: n = l.Z.Sizes.SIZE_12,
          textColor: o = l.Z.Colors.STANDARD,
          className: u,
          button: d,
          reducedRightPadding: _ = !1,
        } = e;
        return (0, i.jsxs)("div", {
          className: a()(
            _ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding,
            u,
          ),
          children: [
            (0, i.jsxs)("div", {
              className: c.noticeLeft,
              children: [
                (0, i.jsx)(r.NitroWheelIcon, {
                  size: "md",
                  className: c.icon,
                  color: s.JX.PREMIUM_TIER_2,
                }),
                (0, i.jsx)(l.Z, {
                  className: c.text,
                  size: n,
                  color: o,
                  children: t,
                }),
              ],
            }),
            d,
          ],
        });
      }
    },
    323125: function (e, t, n) {
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
    715183: function (e, t, n) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    742046: function (e, t, n) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    590862: function (e, t, n) {
      e.exports = {
        noticeWithoutRightPadding:
          "noticeWithoutRightPadding_f97380 notice_f97380",
        noticeWithRightPadding: "noticeWithRightPadding_f97380 notice_f97380",
        noticeLeft: "noticeLeft_f97380",
        icon: "icon_f97380",
        text: "text_f97380",
      };
    },
  },
]);
//# sourceMappingURL=0a8863e2568b6a8beab4.js.map
