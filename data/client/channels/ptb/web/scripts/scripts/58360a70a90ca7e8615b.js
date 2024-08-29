"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68759"],
  {
    180781: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return R;
        },
      });
      var i = n(735250);
      n(470079);
      var o = n(442837),
        a = n(481060),
        s = n(906732),
        r = n(48217),
        c = n(26323),
        l = n(430824),
        u = n(914010),
        d = n(709586),
        _ = n(981631),
        b = n(30513),
        E = n(689938),
        g = n(715183);
      function R(e) {
        let { analyticsSection: t, analyticsPage: n, isGIF: R, banner: f } = e,
          I = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
          h = (0, o.e7)([l.Z], () => l.Z.getGuild(I)),
          { analyticsLocations: P } = (0, s.ZP)();
        return null == h ||
          h.hasFeature(_.oNc.ANIMATED_BANNER) ||
          (!R && h.hasFeature(_.oNc.BANNER))
          ? null
          : (0, i.jsxs)("div", {
              className: g.container,
              children: [
                (0, i.jsx)(d.Z, { className: g.guildBoostingIcon }),
                (0, i.jsx)(a.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: E.Z.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, i.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.LINK,
                  className: g.subscribeButton,
                  onClick: () => {
                    if (null == h) return;
                    let e = {
                      section: t,
                      page: n,
                      object: _.qAy.UPSELL_HEADER,
                    };
                    null != f
                      ? (0, r.c)({
                          analyticsLocations: P,
                          analyticsLocation: e,
                          guild: h,
                          isGIF: R,
                          banner: f,
                        })
                      : (0, c.Z)({
                          analyticsLocations: P,
                          analyticsSourceLocation: e,
                          guild: h,
                          perks: R ? (0, b.zC)() : (0, b.XO)(),
                        });
                  },
                  children: E.Z.Messages.PREMIUM_GUILD_BOOST_SERVER,
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
        s = n(481060),
        r = n(100527),
        c = n(906732),
        l = n(112831),
        u = n(411477),
        d = n(197115),
        _ = n(594174),
        b = n(626135),
        E = n(74538),
        g = n(981631),
        R = n(486324),
        f = n(474936),
        I = n(689938),
        h = n(742046);
      function P(e) {
        let { analyticsSection: t, type: n } = e,
          P = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
          m = E.ZP.canUseAnimatedAvatar(P),
          N = E.ZP.canUsePremiumProfileCustomization(P),
          Z = (n === R.pC.BANNER && N) || (n === R.pC.AVATAR && m),
          { sourceAnalyticsLocations: p } = (0, c.ZP)(
            r.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !Z &&
              b.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: p,
              });
          }, [Z, t, p]),
          Z)
        )
          return null;
        let A = (0, i.jsx)(d.Z, {
          className: h.__invalid_getNitroLink,
          size: s.Button.Sizes.SMALL,
          look: s.Button.Looks.LINK,
          color: s.Button.Colors.LINK,
          subscriptionTier: f.Si.TIER_2,
          buttonText: I.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: t,
            object: g.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, i.jsx)(u.Z, {
          reducedRightPadding: !0,
          className: h.nitroPreviewUpsell,
          text: I.Z.Messages.PREMIUM_PREVIEW.format(),
          textSize: l.Z.Sizes.SIZE_14,
          textColor: l.Z.Colors.HEADER_PRIMARY,
          button: A,
        });
      }
    },
    488499: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(735250);
      n(470079);
      var o = n(180781),
        a = n(321867),
        s = n(486324);
      function r(e) {
        let {
          type: t,
          analyticsPage: n,
          analyticsSection: r,
          isGIF: c,
          banner: l,
        } = e;
        return [s.pC.BANNER, s.pC.AVATAR].includes(t) && c
          ? (0, i.jsx)(a.Z, { analyticsSection: r, type: t })
          : t === s.pC.GUILD_BANNER
            ? (0, i.jsx)(o.Z, {
                analyticsSection: r,
                analyticsPage: n,
                isGIF: c,
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
      var i = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        s = n(481060),
        r = n(436774),
        c = n(112831),
        l = n(590862);
      function u(e) {
        let {
          text: t,
          textSize: n = c.Z.Sizes.SIZE_12,
          textColor: o = c.Z.Colors.STANDARD,
          className: u,
          button: d,
          reducedRightPadding: _ = !1,
        } = e;
        return (0, i.jsxs)("div", {
          className: a()(
            _ ? l.noticeWithoutRightPadding : l.noticeWithRightPadding,
            u,
          ),
          children: [
            (0, i.jsxs)("div", {
              className: l.noticeLeft,
              children: [
                (0, i.jsx)(s.NitroWheelIcon, {
                  size: "md",
                  className: l.icon,
                  color: r.JX.PREMIUM_TIER_2,
                }),
                (0, i.jsx)(c.Z, {
                  className: l.text,
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
//# sourceMappingURL=58360a70a90ca7e8615b.js.map
