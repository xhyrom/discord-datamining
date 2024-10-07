"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47140"],
  {
    269128: function (e, n, i) {
      var t = i(735250);
      i(470079);
      var o = i(120356),
        a = i.n(o),
        r = i(772848),
        l = i(841261);
      let s = (0, r.Z)();
      n.Z = (e) => {
        let { open: n, className: i, withHighlight: o = !1 } = e;
        return (0, t.jsxs)("svg", {
          width: "18",
          height: "18",
          className: a()(l.button, i, { [l.open]: n, [l.withHighlight]: o }),
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
    290034: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return _;
        },
      });
      var t = i(735250);
      i(470079);
      var o = i(120356),
        a = i.n(o),
        r = i(297700),
        l = i(471885),
        s = i(981631),
        c = i(188662);
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
      function _(e) {
        let {
          premiumTier: n,
          iconBackgroundClassName: i,
          iconClassName: o,
          size: s,
        } = e;
        return (0, t.jsx)(r.Z, {
          className: a()(i, d[n]),
          size: s,
          children: (0, t.jsx)(l.Z, {
            tier: n,
            className: a()(o, c.boostedGuildIconGem, u[n]),
          }),
        });
      }
    },
    48217: function (e, n, i) {
      i.d(n, {
        c: function () {
          return b;
        },
      });
      var t = i(735250);
      i(470079);
      var o = i(481060),
        a = i(269128),
        r = i(358555),
        l = i(267642),
        s = i(26323),
        c = i(30513),
        d = i(981631),
        u = i(689938),
        _ = i(472997);
      function g(e) {
        let { guild: n, banner: i } = e;
        return (0, t.jsx)("div", {
          className: _.guildBanner,
          style: { backgroundImage: "url(".concat(i) },
          children: (0, t.jsxs)("div", {
            className: _.guildHeader,
            children: [
              (0, t.jsx)(r.Z, { guild: n, isBannerVisible: !0 }),
              (0, t.jsx)(o.Heading, {
                className: _.guildName,
                variant: "heading-md/semibold",
                children: n.toString(),
              }),
              (0, t.jsx)(a.Z, { className: _.dropdown, open: !1 }),
            ],
          }),
        });
      }
      function b(e) {
        let {
            analyticsLocations: n,
            analyticsLocation: i,
            guild: o,
            isGIF: a,
            banner: r,
          } = e,
          _ = a ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
        null != _ &&
          (0, s.Z)({
            analyticsLocations: n,
            analyticsSourceLocation: i,
            guild: o,
            headerProps: {
              title: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
              subtitle: (function (e, n) {
                let i = (0, l.nW)(e);
                return n
                  ? u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format(
                      { targetLevelOrPlan: i },
                    )
                  : u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format(
                      { targetLevelOrPlan: i },
                    );
              })(_, a),
              image: (0, t.jsx)(g, { guild: o, banner: r }),
            },
            perkIntro: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
            perks: a ? (0, c.zC)() : (0, c.XO)(),
          });
      }
    },
    358555: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return m;
        },
      });
      var t = i(735250);
      i(470079);
      var o = i(120356),
        a = i.n(o),
        r = i(442837),
        l = i(481060),
        s = i(666188),
        c = i(372769),
        d = i(523751),
        u = i(623624),
        _ = i(290034),
        g = i(271383),
        b = i(594174),
        h = i(267642),
        f = i(981631),
        E = i(689938),
        T = i(427542);
      function I(e) {
        let { guild: n, isBannerVisible: i, disableBoostClick: o } = e,
          a = (0, r.e7)([b.default, g.ZP], () => {
            let e = b.default.getCurrentUser();
            return g.ZP.isMember(n.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: s, premiumSubscriberCount: c } = n;
        if (0 === c && s === f.Eu4.NONE) return null;
        let d = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              a &&
                !o &&
                (0, u.f)({
                  guildId: n.id,
                  location: {
                    section: f.jXE.GUILD_HEADER,
                    object: f.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          I =
            s === f.Eu4.NONE
              ? E.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER
              : h.nW(s),
          N = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", { className: T.tierTooltipTitle, children: I }),
              (0, t.jsx)("div", {
                children:
                  E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format(
                    { subscriberCount: c },
                  ),
              }),
            ],
          });
        return (0, t.jsx)("div", {
          className: T.guildIconContainer,
          children: (0, t.jsx)(l.Tooltip, {
            text: N,
            position: "bottom",
            "aria-label": null != I ? I : "",
            children: (e) =>
              (0, t.jsx)(l.Clickable, {
                ...e,
                className: T.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, t.jsx)(_.Z, {
                  premiumTier: s,
                  iconBackgroundClassName: i
                    ? T.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    i && s !== f.Eu4.TIER_3
                      ? T.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function N(e) {
        let { guild: n, disableColor: i, disableBoostClick: o } = e;
        return (0, s.Z)(n)
          ? (0, t.jsx)("div", {
              className: T.guildIconV2Container,
              children: (0, t.jsx)(d.Z, {
                guild: n,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: a()(T.guildBadge, { [T.disableColor]: i }),
                disableBoostClick: o,
              }),
            })
          : (0, t.jsx)("div", {
              className: T.guildIconContainer,
              children: (0, t.jsx)(c.Z, {
                guild: n,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: a()(T.guildBadge, { [T.disableColor]: i }),
              }),
            });
      }
      function m(e) {
        let { guild: n, isBannerVisible: i, disableBoostClick: o } = e;
        return (0, s.Z)(n)
          ? (0, t.jsx)(N, { guild: n, disableColor: !1, disableBoostClick: o })
          : n.hasFeature(f.oNc.VERIFIED) || n.hasFeature(f.oNc.PARTNERED)
            ? (0, t.jsx)(N, { guild: n, disableColor: !i })
            : (0, t.jsx)(I, {
                guild: n,
                isBannerVisible: i,
                disableBoostClick: o,
              });
      }
    },
    180781: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return f;
        },
      });
      var t = i(735250);
      i(470079);
      var o = i(442837),
        a = i(481060),
        r = i(906732),
        l = i(48217),
        s = i(26323),
        c = i(430824),
        d = i(914010),
        u = i(709586),
        _ = i(981631),
        g = i(30513),
        b = i(689938),
        h = i(364042);
      function f(e) {
        let { analyticsSection: n, analyticsPage: i, isGIF: f, banner: E } = e,
          T = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
          I = (0, o.e7)([c.Z], () => c.Z.getGuild(T)),
          { analyticsLocations: N } = (0, r.ZP)();
        return null == I ||
          I.hasFeature(_.oNc.ANIMATED_BANNER) ||
          (!f && I.hasFeature(_.oNc.BANNER))
          ? null
          : (0, t.jsxs)("div", {
              className: h.container,
              children: [
                (0, t.jsx)(u.Z, { className: h.guildBoostingIcon }),
                (0, t.jsx)(a.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: b.Z.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, t.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.LINK,
                  className: h.subscribeButton,
                  onClick: () => {
                    if (null == I) return;
                    let e = {
                      section: n,
                      page: i,
                      object: _.qAy.UPSELL_HEADER,
                    };
                    null != E
                      ? (0, l.c)({
                          analyticsLocations: N,
                          analyticsLocation: e,
                          guild: I,
                          isGIF: f,
                          banner: E,
                        })
                      : (0, s.Z)({
                          analyticsLocations: N,
                          analyticsSourceLocation: e,
                          guild: I,
                          perks: f ? (0, g.zC)() : (0, g.XO)(),
                        });
                  },
                  children: b.Z.Messages.PREMIUM_GUILD_BOOST_SERVER,
                }),
              ],
            });
      }
    },
    321867: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return N;
        },
      });
      var t = i(735250),
        o = i(470079),
        a = i(442837),
        r = i(481060),
        l = i(100527),
        s = i(906732),
        c = i(112831),
        d = i(411477),
        u = i(197115),
        _ = i(594174),
        g = i(626135),
        b = i(74538),
        h = i(981631),
        f = i(486324),
        E = i(474936),
        T = i(689938),
        I = i(634387);
      function N(e) {
        let { analyticsSection: n, type: i } = e,
          N = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
          m = b.ZP.canUseAnimatedAvatar(N),
          p = b.ZP.canUsePremiumProfileCustomization(N),
          x = (i === f.pC.BANNER && p) || (i === f.pC.AVATAR && m),
          { sourceAnalyticsLocations: B } = (0, s.ZP)(
            l.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !x &&
              g.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                type: n,
                location_stack: B,
              });
          }, [x, n, B]),
          x)
        )
          return null;
        let R = (0, t.jsx)(u.Z, {
          className: I.__invalid_getNitroLink,
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.LINK,
          subscriptionTier: E.Si.TIER_2,
          buttonText: T.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: n,
            object: h.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, t.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: I.nitroPreviewUpsell,
          text: T.Z.Messages.PREMIUM_PREVIEW.format(),
          textSize: c.Z.Sizes.SIZE_14,
          textColor: c.Z.Colors.HEADER_PRIMARY,
          button: R,
        });
      }
    },
    488499: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return l;
        },
      });
      var t = i(735250);
      i(470079);
      var o = i(180781),
        a = i(321867),
        r = i(486324);
      function l(e) {
        let {
          type: n,
          analyticsPage: i,
          analyticsSection: l,
          isGIF: s,
          banner: c,
        } = e;
        return [r.pC.BANNER, r.pC.AVATAR].includes(n) && s
          ? (0, t.jsx)(a.Z, { analyticsSection: l, type: n })
          : n === r.pC.GUILD_BANNER
            ? (0, t.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: i,
                isGIF: s,
                banner: c,
              })
            : null;
      }
    },
    411477: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = i(735250);
      i(470079);
      var o = i(120356),
        a = i.n(o),
        r = i(481060),
        l = i(436774),
        s = i(112831),
        c = i(148393);
      function d(e) {
        let {
          text: n,
          textSize: i = s.Z.Sizes.SIZE_12,
          textColor: o = s.Z.Colors.STANDARD,
          className: d,
          button: u,
          reducedRightPadding: _ = !1,
        } = e;
        return (0, t.jsxs)("div", {
          className: a()(
            _ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding,
            d,
          ),
          children: [
            (0, t.jsxs)("div", {
              className: c.noticeLeft,
              children: [
                (0, t.jsx)(r.NitroWheelIcon, {
                  size: "md",
                  className: c.icon,
                  color: l.JX.PREMIUM_TIER_2,
                }),
                (0, t.jsx)(s.Z, {
                  className: c.text,
                  size: i,
                  color: o,
                  children: n,
                }),
              ],
            }),
            u,
          ],
        });
      }
    },
    36793: function (e, n, i) {
      function t(e, n, i, t) {
        let o = e.naturalWidth / e.width,
          a = n.width / 2,
          r = n.height / 2,
          l = (e.width / 2 - a - i.x) * o,
          s = (e.height / 2 - r - i.y) * o,
          c = n.width * o,
          d = n.height * o,
          u = Math.min(c, t.width),
          _ = Math.min(d, t.height);
        return {
          x: l,
          y: s,
          scaledCropWidth: c,
          scaledCropHeight: d,
          canvasWidth: u,
          canvasHeight: _,
        };
      }
      function o(e, n, i, o) {
        let {
            x: a,
            y: r,
            scaledCropWidth: l,
            scaledCropHeight: s,
            canvasWidth: c,
            canvasHeight: d,
          } = t(e, n, i, o),
          u = document.createElement("canvas");
        (u.width = c), (u.height = d);
        let _ = u.getContext("2d");
        return (
          null != _ && _.drawImage(e, a, r, l, s, 0, 0, u.width, u.height),
          u.toDataURL("image/png")
        );
      }
      function a(e, n, i) {
        let t = e.naturalWidth / e.naturalHeight,
          a = n,
          r = i;
        e.naturalWidth > e.naturalHeight ? (a /= t) : (r *= t);
        let l = { height: a, width: r };
        return o(e, { width: e.width, height: e.height }, { x: 0, y: 0 }, l);
      }
      i.d(n, {
        Ae: function () {
          return a;
        },
        PT: function () {
          return o;
        },
        eu: function () {
          return t;
        },
      });
    },
    841261: function (e, n, i) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    188662: function (e, n, i) {
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
    472997: function (e, n, i) {
      e.exports = {
        guildBanner: "guildBanner_f9de8e",
        guildHeader: "guildHeader_f9de8e",
        guildName: "guildName_f9de8e",
        dropdown: "dropdown_f9de8e",
      };
    },
    427542: function (e, n, i) {
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
    57739: function (e, n, i) {
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
    364042: function (e, n, i) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    634387: function (e, n, i) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    734471: function (e, n, i) {
      e.exports = { container: "container_e62679" };
    },
    148393: function (e, n, i) {
      e.exports = {
        noticeWithoutRightPadding:
          "noticeWithoutRightPadding_f97380 notice_f97380",
        noticeWithRightPadding: "noticeWithRightPadding_f97380 notice_f97380",
        noticeLeft: "noticeLeft_f97380",
        icon: "icon_f97380",
        text: "text_f97380",
      };
    },
    821774: function (e, n, i) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
        avatarImage: "avatarImage_b2a2a3",
      };
    },
    706995: function (e, n, i) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    529934: function (e, n, i) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    892532: function (e, n, i) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=3a67f699ba59a81e0603.js.map
