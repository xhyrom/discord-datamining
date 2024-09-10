"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61694"],
  {
    269128: function (e, i, n) {
      var t = n(735250);
      n(470079);
      var o = n(120356),
        r = n.n(o),
        a = n(772848),
        l = n(841261);
      let s = (0, a.Z)();
      i.Z = (e) => {
        let { open: i, className: n, withHighlight: o = !1 } = e;
        return (0, t.jsxs)("svg", {
          width: "18",
          height: "18",
          className: r()(l.button, n, { [l.open]: i, [l.withHighlight]: o }),
          children: [
            o &&
              (0, t.jsx)("defs", {
                children: (0, t.jsxs)("linearGradient", {
                  id: s,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, t.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, t.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, t.jsx)("path", {
                  stroke: o ? "url(#".concat(s, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, t.jsx)("path", {
                  stroke: o ? "url(#".concat(s, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    290034: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return g;
        },
      });
      var t = n(735250);
      n(470079);
      var o = n(120356),
        r = n.n(o),
        a = n(297700),
        l = n(471885),
        s = n(981631),
        c = n(188662);
      let d = {
          [s.Eu4.NONE]: c.iconBackgroundTierNone,
          [s.Eu4.TIER_1]: c.iconBackgroundTierOne,
          [s.Eu4.TIER_2]: c.iconBackgroundTierTwo,
          [s.Eu4.TIER_3]: c.iconBackgroundTierThree,
        },
        u = {
          [s.Eu4.NONE]: c.iconTierNone,
          [s.Eu4.TIER_1]: c.iconTierOne,
          [s.Eu4.TIER_2]: c.iconTierTwo,
          [s.Eu4.TIER_3]: c.iconTierThree,
        };
      function g(e) {
        let {
          premiumTier: i,
          iconBackgroundClassName: n,
          iconClassName: o,
          size: s,
        } = e;
        return (0, t.jsx)(a.Z, {
          className: r()(n, d[i]),
          size: s,
          children: (0, t.jsx)(l.Z, {
            tier: i,
            className: r()(o, c.boostedGuildIconGem, u[i]),
          }),
        });
      }
    },
    48217: function (e, i, n) {
      n.d(i, {
        c: function () {
          return h;
        },
      });
      var t = n(735250);
      n(470079);
      var o = n(481060),
        r = n(269128),
        a = n(358555),
        l = n(267642),
        s = n(26323),
        c = n(30513),
        d = n(981631),
        u = n(689938),
        g = n(472997);
      function _(e) {
        let { guild: i, banner: n } = e;
        return (0, t.jsx)("div", {
          className: g.guildBanner,
          style: { backgroundImage: "url(".concat(n) },
          children: (0, t.jsxs)("div", {
            className: g.guildHeader,
            children: [
              (0, t.jsx)(a.Z, { guild: i, isBannerVisible: !0 }),
              (0, t.jsx)(o.Heading, {
                className: g.guildName,
                variant: "heading-md/semibold",
                children: i.toString(),
              }),
              (0, t.jsx)(r.Z, { className: g.dropdown, open: !1 }),
            ],
          }),
        });
      }
      function h(e) {
        let {
            analyticsLocations: i,
            analyticsLocation: n,
            guild: o,
            isGIF: r,
            banner: a,
          } = e,
          g = r ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
        null != g &&
          (0, s.Z)({
            analyticsLocations: i,
            analyticsSourceLocation: n,
            guild: o,
            headerProps: {
              title: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
              subtitle: (function (e, i) {
                let n = (0, l.nW)(e);
                return i
                  ? u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format(
                      { targetLevelOrPlan: n },
                    )
                  : u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format(
                      { targetLevelOrPlan: n },
                    );
              })(g, r),
              image: (0, t.jsx)(_, { guild: o, banner: a }),
            },
            perkIntro: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
            perks: r ? (0, c.zC)() : (0, c.XO)(),
          });
      }
    },
    358555: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return m;
        },
      });
      var t = n(735250);
      n(470079);
      var o = n(120356),
        r = n.n(o),
        a = n(442837),
        l = n(481060),
        s = n(666188),
        c = n(372769),
        d = n(523751),
        u = n(623624),
        g = n(290034),
        _ = n(271383),
        h = n(594174),
        b = n(267642),
        E = n(981631),
        T = n(689938),
        N = n(427542);
      function I(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
          r = (0, a.e7)([h.default, _.ZP], () => {
            let e = h.default.getCurrentUser();
            return _.ZP.isMember(i.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: s, premiumSubscriberCount: c } = i;
        if (0 === c && s === E.Eu4.NONE) return null;
        let d = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              r &&
                !o &&
                (0, u.f)({
                  guildId: i.id,
                  location: {
                    section: E.jXE.GUILD_HEADER,
                    object: E.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          I =
            s === E.Eu4.NONE
              ? T.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER
              : b.nW(s),
          f = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", { className: N.tierTooltipTitle, children: I }),
              (0, t.jsx)("div", {
                children:
                  T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format(
                    { subscriberCount: c },
                  ),
              }),
            ],
          });
        return (0, t.jsx)("div", {
          className: N.guildIconContainer,
          children: (0, t.jsx)(l.Tooltip, {
            text: f,
            position: "bottom",
            "aria-label": null != I ? I : "",
            children: (e) =>
              (0, t.jsx)(l.Clickable, {
                ...e,
                className: N.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, t.jsx)(g.Z, {
                  premiumTier: s,
                  iconBackgroundClassName: n
                    ? N.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    n && s !== E.Eu4.TIER_3
                      ? N.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function f(e) {
        let { guild: i, disableColor: n, disableBoostClick: o } = e;
        return (0, s.Z)(i)
          ? (0, t.jsx)("div", {
              className: N.guildIconV2Container,
              children: (0, t.jsx)(d.Z, {
                guild: i,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(N.guildBadge, { [N.disableColor]: n }),
                disableBoostClick: o,
              }),
            })
          : (0, t.jsx)("div", {
              className: N.guildIconContainer,
              children: (0, t.jsx)(c.Z, {
                guild: i,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(N.guildBadge, { [N.disableColor]: n }),
              }),
            });
      }
      function m(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: o } = e;
        return (0, s.Z)(i)
          ? (0, t.jsx)(f, { guild: i, disableColor: !1, disableBoostClick: o })
          : i.hasFeature(E.oNc.VERIFIED) || i.hasFeature(E.oNc.PARTNERED)
            ? (0, t.jsx)(f, { guild: i, disableColor: !n })
            : (0, t.jsx)(I, {
                guild: i,
                isBannerVisible: n,
                disableBoostClick: o,
              });
      }
    },
    180781: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return E;
        },
      });
      var t = n(735250);
      n(470079);
      var o = n(442837),
        r = n(481060),
        a = n(906732),
        l = n(48217),
        s = n(26323),
        c = n(430824),
        d = n(914010),
        u = n(709586),
        g = n(981631),
        _ = n(30513),
        h = n(689938),
        b = n(364042);
      function E(e) {
        let { analyticsSection: i, analyticsPage: n, isGIF: E, banner: T } = e,
          N = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
          I = (0, o.e7)([c.Z], () => c.Z.getGuild(N)),
          { analyticsLocations: f } = (0, a.ZP)();
        return null == I ||
          I.hasFeature(g.oNc.ANIMATED_BANNER) ||
          (!E && I.hasFeature(g.oNc.BANNER))
          ? null
          : (0, t.jsxs)("div", {
              className: b.container,
              children: [
                (0, t.jsx)(u.Z, { className: b.guildBoostingIcon }),
                (0, t.jsx)(r.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: h.Z.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, t.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.LINK,
                  className: b.subscribeButton,
                  onClick: () => {
                    if (null == I) return;
                    let e = {
                      section: i,
                      page: n,
                      object: g.qAy.UPSELL_HEADER,
                    };
                    null != T
                      ? (0, l.c)({
                          analyticsLocations: f,
                          analyticsLocation: e,
                          guild: I,
                          isGIF: E,
                          banner: T,
                        })
                      : (0, s.Z)({
                          analyticsLocations: f,
                          analyticsSourceLocation: e,
                          guild: I,
                          perks: E ? (0, _.zC)() : (0, _.XO)(),
                        });
                  },
                  children: h.Z.Messages.PREMIUM_GUILD_BOOST_SERVER,
                }),
              ],
            });
      }
    },
    321867: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return f;
        },
      });
      var t = n(735250),
        o = n(470079),
        r = n(442837),
        a = n(481060),
        l = n(100527),
        s = n(906732),
        c = n(112831),
        d = n(411477),
        u = n(197115),
        g = n(594174),
        _ = n(626135),
        h = n(74538),
        b = n(981631),
        E = n(486324),
        T = n(474936),
        N = n(689938),
        I = n(634387);
      function f(e) {
        let { analyticsSection: i, type: n } = e,
          f = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
          m = h.ZP.canUseAnimatedAvatar(f),
          p = h.ZP.canUsePremiumProfileCustomization(f),
          B = (n === E.pC.BANNER && p) || (n === E.pC.AVATAR && m),
          { sourceAnalyticsLocations: R } = (0, s.ZP)(
            l.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !B &&
              _.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                type: i,
                location_stack: R,
              });
          }, [B, i, R]),
          B)
        )
          return null;
        let x = (0, t.jsx)(u.Z, {
          className: I.__invalid_getNitroLink,
          size: a.Button.Sizes.SMALL,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.LINK,
          subscriptionTier: T.Si.TIER_2,
          buttonText: N.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: i,
            object: b.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, t.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: I.nitroPreviewUpsell,
          text: N.Z.Messages.PREMIUM_PREVIEW.format(),
          textSize: c.Z.Sizes.SIZE_14,
          textColor: c.Z.Colors.HEADER_PRIMARY,
          button: x,
        });
      }
    },
    488499: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return l;
        },
      });
      var t = n(735250);
      n(470079);
      var o = n(180781),
        r = n(321867),
        a = n(486324);
      function l(e) {
        let {
          type: i,
          analyticsPage: n,
          analyticsSection: l,
          isGIF: s,
          banner: c,
        } = e;
        return [a.pC.BANNER, a.pC.AVATAR].includes(i) && s
          ? (0, t.jsx)(r.Z, { analyticsSection: l, type: i })
          : i === a.pC.GUILD_BANNER
            ? (0, t.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: s,
                banner: c,
              })
            : null;
      }
    },
    411477: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return d;
        },
      });
      var t = n(735250);
      n(470079);
      var o = n(120356),
        r = n.n(o),
        a = n(481060),
        l = n(436774),
        s = n(112831),
        c = n(148393);
      function d(e) {
        let {
          text: i,
          textSize: n = s.Z.Sizes.SIZE_12,
          textColor: o = s.Z.Colors.STANDARD,
          className: d,
          button: u,
          reducedRightPadding: g = !1,
        } = e;
        return (0, t.jsxs)("div", {
          className: r()(
            g ? c.noticeWithoutRightPadding : c.noticeWithRightPadding,
            d,
          ),
          children: [
            (0, t.jsxs)("div", {
              className: c.noticeLeft,
              children: [
                (0, t.jsx)(a.NitroWheelIcon, {
                  size: "md",
                  className: c.icon,
                  color: l.JX.PREMIUM_TIER_2,
                }),
                (0, t.jsx)(s.Z, {
                  className: c.text,
                  size: n,
                  color: o,
                  children: i,
                }),
              ],
            }),
            u,
          ],
        });
      }
    },
    36793: function (e, i, n) {
      function t(e, i, n, t) {
        let o = e.naturalWidth / e.width,
          r = i.width / 2,
          a = i.height / 2,
          l = (e.width / 2 - r - n.x) * o,
          s = (e.height / 2 - a - n.y) * o,
          c = i.width * o,
          d = i.height * o,
          u = Math.min(c, t.width),
          g = Math.min(d, t.height);
        return {
          x: l,
          y: s,
          scaledCropWidth: c,
          scaledCropHeight: d,
          canvasWidth: u,
          canvasHeight: g,
        };
      }
      function o(e, i, n, o) {
        let {
            x: r,
            y: a,
            scaledCropWidth: l,
            scaledCropHeight: s,
            canvasWidth: c,
            canvasHeight: d,
          } = t(e, i, n, o),
          u = document.createElement("canvas");
        (u.width = c), (u.height = d);
        let g = u.getContext("2d");
        return (
          null != g && g.drawImage(e, r, a, l, s, 0, 0, u.width, u.height),
          u.toDataURL("image/png")
        );
      }
      function r(e, i, n) {
        let t = e.naturalWidth / e.naturalHeight,
          r = i,
          a = n;
        e.naturalWidth > e.naturalHeight ? (r /= t) : (a *= t);
        let l = { height: r, width: a };
        return o(e, { width: e.width, height: e.height }, { x: 0, y: 0 }, l);
      }
      n.d(i, {
        Ae: function () {
          return r;
        },
        PT: function () {
          return o;
        },
        eu: function () {
          return t;
        },
      });
    },
    841261: function (e, i, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    188662: function (e, i, n) {
      e.exports = {
        boostedGuildIconGem: "boostedGuildIconGem_d4a69b",
        iconBackgroundTierNone: "iconBackgroundTierNone_d4a69b",
        iconBackgroundTierOne: "iconBackgroundTierOne_d4a69b",
        iconBackgroundTierTwo: "iconBackgroundTierTwo_d4a69b",
        iconBackgroundTierThree: "iconBackgroundTierThree_d4a69b",
        iconTierNone: "iconTierNone_d4a69b",
        iconTierOne: "iconTierOne_d4a69b",
        iconTierTwo: "iconTierTwo_d4a69b",
        iconTierThree: "iconTierThree_d4a69b",
      };
    },
    472997: function (e, i, n) {
      e.exports = {
        guildBanner: "guildBanner_f9de8e",
        guildHeader: "guildHeader_f9de8e",
        guildName: "guildName_f9de8e",
        dropdown: "dropdown_f9de8e",
      };
    },
    427542: function (e, i, n) {
      e.exports = {
        guildIconContainer: "guildIconContainer_ed9816",
        guildIconV2Container: "guildIconV2Container_ed9816",
        guildBadge: "guildBadge_ed9816",
        disableColor: "disableColor_ed9816",
        tierTooltipTitle: "tierTooltipTitle_ed9816",
        boostedGuildTierMutedIconWithVisibleBanner:
          "boostedGuildTierMutedIconWithVisibleBanner_ed9816",
        boostedGuildTierIconBackgroundWithVisibleBanner:
          "boostedGuildTierIconBackgroundWithVisibleBanner_ed9816",
      };
    },
    57739: function (e, i, n) {
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
    364042: function (e, i, n) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    634387: function (e, i, n) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    148393: function (e, i, n) {
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
//# sourceMappingURL=a187b4fec326c0ae24f7.js.map
