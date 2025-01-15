"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36343"],
  {
    180781: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(442837),
        a = n(481060),
        r = n(906732),
        c = n(48217),
        l = n(26323),
        s = n(430824),
        u = n(914010),
        d = n(709586),
        b = n(981631),
        _ = n(30513),
        f = n(388032),
        g = n(814365);
      function m(e) {
        let { analyticsSection: t, analyticsPage: n, isGIF: m, banner: p } = e,
          h = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
          v = (0, o.e7)([s.Z], () => s.Z.getGuild(h)),
          { analyticsLocations: x } = (0, r.ZP)();
        return null == v ||
          v.hasFeature(b.oNc.ANIMATED_BANNER) ||
          (!m && v.hasFeature(b.oNc.BANNER))
          ? null
          : (0, i.jsxs)("div", {
              className: g.container,
              children: [
                (0, i.jsx)(d.Z, { className: g.guildBoostingIcon }),
                (0, i.jsx)(a.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: f.intl.string(f.t["56M7xc"]),
                }),
                (0, i.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.LINK,
                  className: g.subscribeButton,
                  onClick: () => {
                    if (null == v) return;
                    let e = {
                      section: t,
                      page: n,
                      object: b.qAy.UPSELL_HEADER,
                    };
                    null != p
                      ? (0, c.c)({
                          analyticsLocations: x,
                          analyticsLocation: e,
                          guild: v,
                          isGIF: m,
                          banner: p,
                        })
                      : (0, l.Z)({
                          analyticsLocations: x,
                          analyticsSourceLocation: e,
                          guild: v,
                          perks: m ? (0, _.zC)() : (0, _.XO)(),
                        });
                  },
                  children: f.intl.string(f.t.WUHdZW),
                }),
              ],
            });
      }
    },
    321867: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var i = n(200651),
        o = n(192379),
        a = n(442837),
        r = n(481060),
        c = n(100527),
        l = n(906732),
        s = n(118012),
        u = n(411477),
        d = n(197115),
        b = n(594174),
        _ = n(626135),
        f = n(74538),
        g = n(981631),
        m = n(486324),
        p = n(474936),
        h = n(388032),
        v = n(367422);
      function x(e) {
        let { analyticsSection: t, type: n } = e,
          x = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
          C = f.ZP.canUseAnimatedAvatar(x),
          N = f.ZP.canUsePremiumProfileCustomization(x),
          E = (n === m.pC.BANNER && N) || (n === m.pC.AVATAR && C),
          { sourceAnalyticsLocations: A } = (0, l.ZP)(
            c.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !E &&
              _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: A,
              });
          }, [E, t, A]),
          E)
        )
          return null;
        let R = (0, i.jsx)(d.Z, {
          className: v.__invalid_getNitroLink,
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.LINK,
          subscriptionTier: p.Si.TIER_2,
          buttonText: h.intl.format(h.t["944tDg"], {}),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: t,
            object: g.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, i.jsx)(u.Z, {
          reducedRightPadding: !0,
          className: v.nitroPreviewUpsell,
          text: h.intl.format(h.t.Og8039, {}),
          textSize: s.Z.Sizes.SIZE_14,
          textColor: s.Z.Colors.HEADER_PRIMARY,
          button: R,
        });
      }
    },
    488499: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(180781),
        a = n(321867),
        r = n(486324);
      function c(e) {
        let {
          type: t,
          analyticsPage: n,
          analyticsSection: c,
          isGIF: l,
          banner: s,
        } = e;
        return [r.pC.BANNER, r.pC.AVATAR].includes(t) && l
          ? (0, i.jsx)(a.Z, { analyticsSection: c, type: t })
          : t === r.pC.GUILD_BANNER
            ? (0, i.jsx)(o.Z, {
                analyticsSection: c,
                analyticsPage: n,
                isGIF: l,
                banner: s,
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
      var i = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        r = n(481060),
        c = n(436774),
        l = n(118012),
        s = n(319957);
      function u(e) {
        let {
          text: t,
          textSize: n = l.Z.Sizes.SIZE_12,
          textColor: o = l.Z.Colors.STANDARD,
          className: u,
          button: d,
          reducedRightPadding: b = !1,
        } = e;
        return (0, i.jsxs)("div", {
          className: a()(
            b ? s.noticeWithoutRightPadding : s.noticeWithRightPadding,
            u,
          ),
          children: [
            (0, i.jsxs)("div", {
              className: s.noticeLeft,
              children: [
                (0, i.jsx)(r.NitroWheelIcon, {
                  size: "md",
                  className: s.icon,
                  color: c.JX.PREMIUM_TIER_2,
                }),
                (0, i.jsx)(l.Z, {
                  className: s.text,
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
    769334: function (e, t, n) {
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
    814365: function (e, t, n) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    367422: function (e, t, n) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    616591: function (e, t, n) {
      e.exports = { container: "container_e62679" };
    },
    319957: function (e, t, n) {
      e.exports = {
        noticeWithoutRightPadding:
          "noticeWithoutRightPadding_f97380 notice_f97380",
        noticeWithRightPadding: "noticeWithRightPadding_f97380 notice_f97380",
        noticeLeft: "noticeLeft_f97380",
        icon: "icon_f97380",
        text: "text_f97380",
      };
    },
    374695: function (e, t, n) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    624566: function (e, t, n) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    745490: function (e, t, n) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    757340: function (e, t, n) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=e8c0974d2f17a293ebd6.js.map
