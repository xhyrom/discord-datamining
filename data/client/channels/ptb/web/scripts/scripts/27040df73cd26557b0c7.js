"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94127"],
  {
    180781: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(442837),
        a = n(481060),
        r = n(906732),
        s = n(48217),
        l = n(26323),
        c = n(430824),
        u = n(914010),
        d = n(709586),
        b = n(981631),
        _ = n(30513),
        g = n(388032),
        f = n(808583);
      function m(t) {
        let { analyticsSection: e, analyticsPage: n, isGIF: m, banner: p } = t,
          h = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
          C = (0, o.e7)([c.Z], () => c.Z.getGuild(h)),
          { analyticsLocations: N } = (0, r.ZP)();
        return null == C ||
          C.hasFeature(b.oNc.ANIMATED_BANNER) ||
          (!m && C.hasFeature(b.oNc.BANNER))
          ? null
          : (0, i.jsxs)("div", {
              className: f.container,
              children: [
                (0, i.jsx)(d.Z, { className: f.guildBoostingIcon }),
                (0, i.jsx)(a.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: g.intl.string(g.t["56M7xc"]),
                }),
                (0, i.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.LINK,
                  className: f.subscribeButton,
                  onClick: () => {
                    if (null == C) return;
                    let t = {
                      section: e,
                      page: n,
                      object: b.qAy.UPSELL_HEADER,
                    };
                    null != p
                      ? (0, s.c)({
                          analyticsLocations: N,
                          analyticsLocation: t,
                          guild: C,
                          isGIF: m,
                          banner: p,
                        })
                      : (0, l.Z)({
                          analyticsLocations: N,
                          analyticsSourceLocation: t,
                          guild: C,
                          perks: m ? (0, _.zC)() : (0, _.XO)(),
                        });
                  },
                  children: g.intl.string(g.t.WUHdZW),
                }),
              ],
            });
      }
    },
    321867: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return N;
        },
      });
      var i = n(200651),
        o = n(192379),
        a = n(442837),
        r = n(481060),
        s = n(100527),
        l = n(906732),
        c = n(118012),
        u = n(411477),
        d = n(197115),
        b = n(594174),
        _ = n(626135),
        g = n(74538),
        f = n(981631),
        m = n(486324),
        p = n(474936),
        h = n(388032),
        C = n(639907);
      function N(t) {
        let { analyticsSection: e, type: n } = t,
          N = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
          x = g.ZP.canUseAnimatedAvatar(N),
          E = g.ZP.canUsePremiumProfileCustomization(N),
          v = (n === m.pC.BANNER && E) || (n === m.pC.AVATAR && x),
          { sourceAnalyticsLocations: A } = (0, l.ZP)(
            s.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !v &&
              _.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                type: e,
                location_stack: A,
              });
          }, [v, e, A]),
          v)
        )
          return null;
        let R = (0, i.jsx)(d.Z, {
          className: C.__invalid_getNitroLink,
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.LINK,
          subscriptionTier: p.Si.TIER_2,
          buttonText: h.intl.format(h.t["944tDg"], {}),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: e,
            object: f.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, i.jsx)(u.Z, {
          reducedRightPadding: !0,
          className: C.nitroPreviewUpsell,
          text: h.intl.format(h.t.Og8039, {}),
          textSize: c.Z.Sizes.SIZE_14,
          textColor: c.Z.Colors.HEADER_PRIMARY,
          button: R,
        });
      }
    },
    488499: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(180781),
        a = n(321867),
        r = n(486324);
      function s(t) {
        let {
          type: e,
          analyticsPage: n,
          analyticsSection: s,
          isGIF: l,
          banner: c,
        } = t;
        return [r.pC.BANNER, r.pC.AVATAR].includes(e) && l
          ? (0, i.jsx)(a.Z, { analyticsSection: s, type: e })
          : e === r.pC.GUILD_BANNER
            ? (0, i.jsx)(o.Z, {
                analyticsSection: s,
                analyticsPage: n,
                isGIF: l,
                banner: c,
              })
            : null;
      }
    },
    411477: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        r = n(481060),
        s = n(436774),
        l = n(118012),
        c = n(392842);
      function u(t) {
        let {
          text: e,
          textSize: n = l.Z.Sizes.SIZE_12,
          textColor: o = l.Z.Colors.STANDARD,
          className: u,
          button: d,
          reducedRightPadding: b = !1,
        } = t;
        return (0, i.jsxs)("div", {
          className: a()(
            b ? c.noticeWithoutRightPadding : c.noticeWithRightPadding,
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
                  children: e,
                }),
              ],
            }),
            d,
          ],
        });
      }
    },
    63059: function (t, e, n) {
      t.exports = {
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
    808583: function (t, e, n) {
      t.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    639907: function (t, e, n) {
      t.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    173318: function (t, e, n) {
      t.exports = { container: "container_e62679" };
    },
    392842: function (t, e, n) {
      t.exports = {
        noticeWithoutRightPadding:
          "noticeWithoutRightPadding_f97380 notice_f97380",
        noticeWithRightPadding: "noticeWithRightPadding_f97380 notice_f97380",
        noticeLeft: "noticeLeft_f97380",
        icon: "icon_f97380",
        text: "text_f97380",
      };
    },
    761346: function (t, e, n) {
      t.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
  },
]);
//# sourceMappingURL=27040df73cd26557b0c7.js.map
