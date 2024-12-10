"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62224"],
  {
    269128: function (e, i, n) {
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(772848),
        l = n(363969);
      let d = (0, a.Z)();
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
                  id: d,
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
                  stroke: o ? "url(#".concat(d, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, t.jsx)("path", {
                  stroke: o ? "url(#".concat(d, ")") : "currentColor",
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
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(297700),
        l = n(471885),
        d = n(981631),
        c = n(201950);
      let s = {
          [d.Eu4.NONE]: c.iconBackgroundTierNone,
          [d.Eu4.TIER_1]: c.iconBackgroundTierOne,
          [d.Eu4.TIER_2]: c.iconBackgroundTierTwo,
          [d.Eu4.TIER_3]: c.iconBackgroundTierThree,
        },
        u = {
          [d.Eu4.NONE]: c.iconTierNone,
          [d.Eu4.TIER_1]: c.iconTierOne,
          [d.Eu4.TIER_2]: c.iconTierTwo,
          [d.Eu4.TIER_3]: c.iconTierThree,
        };
      function g(e) {
        let {
          premiumTier: i,
          iconBackgroundClassName: n,
          iconClassName: o,
          size: d,
        } = e;
        return (0, t.jsx)(a.Z, {
          className: r()(n, s[i]),
          size: d,
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
          return b;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(481060),
        r = n(269128),
        a = n(358555),
        l = n(267642),
        d = n(26323),
        c = n(30513),
        s = n(981631),
        u = n(388032),
        g = n(369576);
      function h(e) {
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
      function b(e) {
        let {
            analyticsLocations: i,
            analyticsLocation: n,
            guild: o,
            isGIF: r,
            banner: a,
          } = e,
          g = r ? (0, l._p)(s.oNc.ANIMATED_BANNER) : (0, l._p)(s.oNc.BANNER);
        null != g &&
          (0, d.Z)({
            analyticsLocations: i,
            analyticsSourceLocation: n,
            guild: o,
            headerProps: {
              title: u.intl.string(u.t["rv2H+/"]),
              subtitle: (function (e, i) {
                let n = (0, l.nW)(e);
                return i
                  ? u.intl.formatToPlainString(u.t["TR/Uys"], {
                      targetLevelOrPlan: n,
                    })
                  : u.intl.formatToPlainString(u.t.B253V1, {
                      targetLevelOrPlan: n,
                    });
              })(g, r),
              image: (0, t.jsx)(h, { guild: o, banner: a }),
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: r ? (0, c.zC)() : (0, c.XO)(),
          });
      }
    },
    358555: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return B;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(442837),
        l = n(481060),
        d = n(540059),
        c = n(666188),
        s = n(372769),
        u = n(523751),
        g = n(623624),
        h = n(290034),
        b = n(271383),
        _ = n(594174),
        f = n(267642),
        T = n(981631),
        m = n(388032),
        N = n(70172);
      function p(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
          r = (0, a.e7)([_.default, b.ZP], () => {
            let e = _.default.getCurrentUser();
            return b.ZP.isMember(i.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: d, premiumSubscriberCount: c } = i;
        if (0 === c && d === T.Eu4.NONE) return null;
        let s = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              r &&
                !o &&
                (0, g.f)({
                  guildId: i.id,
                  location: {
                    section: T.jXE.GUILD_HEADER,
                    object: T.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          u = d === T.Eu4.NONE ? m.intl.string(m.t.c2wsn5) : f.nW(d),
          p = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", { className: N.tierTooltipTitle, children: u }),
              (0, t.jsx)("div", {
                children: m.intl.format(m.t.If4iTU, { subscriberCount: c }),
              }),
            ],
          });
        return (0, t.jsx)("div", {
          className: N.guildIconContainer,
          children: (0, t.jsx)(l.Tooltip, {
            text: p,
            position: "bottom",
            "aria-label": null != u ? u : "",
            children: (e) =>
              (0, t.jsx)(l.Clickable, {
                ...e,
                className: N.__invalid_premiumGuildIcon,
                onClick: s,
                children: (0, t.jsx)(h.Z, {
                  premiumTier: d,
                  iconBackgroundClassName: n
                    ? N.boostedGuildTierIconBackgroundWithVisibleBanner
                    : N.guildBadgeIcon,
                  iconClassName:
                    n && d !== T.Eu4.TIER_3
                      ? N.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function x(e) {
        let { guild: i, disableColor: n, disableBoostClick: o } = e;
        return (0, c.Z)(i)
          ? (0, t.jsx)("div", {
              className: N.guildIconV2Container,
              children: (0, t.jsx)(u.Z, {
                guild: i,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(N.guildBadge, { [N.disableColor]: n }),
                disableBoostClick: o,
              }),
            })
          : (0, t.jsx)("div", {
              className: N.guildIconContainer,
              children: (0, t.jsx)(s.Z, {
                guild: i,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(N.guildBadge, { [N.disableColor]: n }),
              }),
            });
      }
      function B(e) {
        let { guild: i, disableBoostClick: n, ...o } = e,
          r = !(0, d.Q3)("GuildHeaderGuildBadge") && o.isBannerVisible;
        return (0, c.Z)(i)
          ? (0, t.jsx)(x, { guild: i, disableColor: !1, disableBoostClick: n })
          : i.hasFeature(T.oNc.VERIFIED) || i.hasFeature(T.oNc.PARTNERED)
            ? (0, t.jsx)(x, { guild: i, disableColor: !r })
            : (0, t.jsx)(p, {
                guild: i,
                isBannerVisible: r,
                disableBoostClick: n,
              });
      }
    },
    180781: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return f;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(442837),
        r = n(481060),
        a = n(906732),
        l = n(48217),
        d = n(26323),
        c = n(430824),
        s = n(914010),
        u = n(709586),
        g = n(981631),
        h = n(30513),
        b = n(388032),
        _ = n(808583);
      function f(e) {
        let { analyticsSection: i, analyticsPage: n, isGIF: f, banner: T } = e,
          m = (0, o.e7)([s.Z], () => s.Z.getGuildId()),
          N = (0, o.e7)([c.Z], () => c.Z.getGuild(m)),
          { analyticsLocations: p } = (0, a.ZP)();
        return null == N ||
          N.hasFeature(g.oNc.ANIMATED_BANNER) ||
          (!f && N.hasFeature(g.oNc.BANNER))
          ? null
          : (0, t.jsxs)("div", {
              className: _.container,
              children: [
                (0, t.jsx)(u.Z, { className: _.guildBoostingIcon }),
                (0, t.jsx)(r.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: b.intl.string(b.t["56M7xc"]),
                }),
                (0, t.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.LINK,
                  className: _.subscribeButton,
                  onClick: () => {
                    if (null == N) return;
                    let e = {
                      section: i,
                      page: n,
                      object: g.qAy.UPSELL_HEADER,
                    };
                    null != T
                      ? (0, l.c)({
                          analyticsLocations: p,
                          analyticsLocation: e,
                          guild: N,
                          isGIF: f,
                          banner: T,
                        })
                      : (0, d.Z)({
                          analyticsLocations: p,
                          analyticsSourceLocation: e,
                          guild: N,
                          perks: f ? (0, h.zC)() : (0, h.XO)(),
                        });
                  },
                  children: b.intl.string(b.t.WUHdZW),
                }),
              ],
            });
      }
    },
    321867: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return p;
        },
      });
      var t = n(200651),
        o = n(192379),
        r = n(442837),
        a = n(481060),
        l = n(100527),
        d = n(906732),
        c = n(118012),
        s = n(411477),
        u = n(197115),
        g = n(594174),
        h = n(626135),
        b = n(74538),
        _ = n(981631),
        f = n(486324),
        T = n(474936),
        m = n(388032),
        N = n(639907);
      function p(e) {
        let { analyticsSection: i, type: n } = e,
          p = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
          x = b.ZP.canUseAnimatedAvatar(p),
          B = b.ZP.canUsePremiumProfileCustomization(p),
          E = (n === f.pC.BANNER && B) || (n === f.pC.AVATAR && x),
          { sourceAnalyticsLocations: I } = (0, d.ZP)(
            l.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !E &&
              h.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                type: i,
                location_stack: I,
              });
          }, [E, i, I]),
          E)
        )
          return null;
        let C = (0, t.jsx)(u.Z, {
          className: N.__invalid_getNitroLink,
          size: a.Button.Sizes.SMALL,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.LINK,
          subscriptionTier: T.Si.TIER_2,
          buttonText: m.intl.format(m.t["944tDg"], {}),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: i,
            object: _.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, t.jsx)(s.Z, {
          reducedRightPadding: !0,
          className: N.nitroPreviewUpsell,
          text: m.intl.format(m.t.Og8039, {}),
          textSize: c.Z.Sizes.SIZE_14,
          textColor: c.Z.Colors.HEADER_PRIMARY,
          button: C,
        });
      }
    },
    488499: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return l;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(180781),
        r = n(321867),
        a = n(486324);
      function l(e) {
        let {
          type: i,
          analyticsPage: n,
          analyticsSection: l,
          isGIF: d,
          banner: c,
        } = e;
        return [a.pC.BANNER, a.pC.AVATAR].includes(i) && d
          ? (0, t.jsx)(r.Z, { analyticsSection: l, type: i })
          : i === a.pC.GUILD_BANNER
            ? (0, t.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: d,
                banner: c,
              })
            : null;
      }
    },
    411477: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return s;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(481060),
        l = n(436774),
        d = n(118012),
        c = n(392842);
      function s(e) {
        let {
          text: i,
          textSize: n = d.Z.Sizes.SIZE_12,
          textColor: o = d.Z.Colors.STANDARD,
          className: s,
          button: u,
          reducedRightPadding: g = !1,
        } = e;
        return (0, t.jsxs)("div", {
          className: r()(
            g ? c.noticeWithoutRightPadding : c.noticeWithRightPadding,
            s,
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
                (0, t.jsx)(d.Z, {
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
          d = (e.height / 2 - a - n.y) * o,
          c = i.width * o,
          s = i.height * o,
          u = Math.min(c, t.width),
          g = Math.min(s, t.height);
        return {
          x: l,
          y: d,
          scaledCropWidth: c,
          scaledCropHeight: s,
          canvasWidth: u,
          canvasHeight: g,
        };
      }
      function o(e, i, n, o) {
        let {
            x: r,
            y: a,
            scaledCropWidth: l,
            scaledCropHeight: d,
            canvasWidth: c,
            canvasHeight: s,
          } = t(e, i, n, o),
          u = document.createElement("canvas");
        (u.width = c), (u.height = s);
        let g = u.getContext("2d");
        return (
          null != g && g.drawImage(e, r, a, l, d, 0, 0, u.width, u.height),
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
    363969: function (e, i, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    201950: function (e, i, n) {
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
    369576: function (e, i, n) {
      e.exports = {
        guildBanner: "guildBanner_f9de8e",
        guildHeader: "guildHeader_f9de8e",
        guildName: "guildName_f9de8e",
        dropdown: "dropdown_f9de8e",
      };
    },
    70172: function (e, i, n) {
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
        guildBadgeIcon: "guildBadgeIcon_ed9816",
      };
    },
    63059: function (e, i, n) {
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
    808583: function (e, i, n) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    639907: function (e, i, n) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    392842: function (e, i, n) {
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
//# sourceMappingURL=914378dda224ddc62e09.js.map
