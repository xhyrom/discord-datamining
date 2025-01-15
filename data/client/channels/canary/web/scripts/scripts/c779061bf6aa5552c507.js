"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37291"],
  {
    269128: function (e, i, n) {
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(772848),
        l = n(716886);
      let c = (0, a.Z)();
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
                  id: c,
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
                  stroke: o ? "url(#".concat(c, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, t.jsx)("path", {
                  stroke: o ? "url(#".concat(c, ")") : "currentColor",
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
        c = n(981631),
        d = n(958469);
      let s = {
          [c.Eu4.NONE]: d.iconBackgroundTierNone,
          [c.Eu4.TIER_1]: d.iconBackgroundTierOne,
          [c.Eu4.TIER_2]: d.iconBackgroundTierTwo,
          [c.Eu4.TIER_3]: d.iconBackgroundTierThree,
        },
        u = {
          [c.Eu4.NONE]: d.iconTierNone,
          [c.Eu4.TIER_1]: d.iconTierOne,
          [c.Eu4.TIER_2]: d.iconTierTwo,
          [c.Eu4.TIER_3]: d.iconTierThree,
        };
      function g(e) {
        let {
          premiumTier: i,
          iconBackgroundClassName: n,
          iconClassName: o,
          size: c,
        } = e;
        return (0, t.jsx)(a.Z, {
          className: r()(n, s[i]),
          size: c,
          children: (0, t.jsx)(l.Z, {
            tier: i,
            className: r()(o, d.boostedGuildIconGem, u[i]),
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
      var t = n(200651);
      n(192379);
      var o = n(481060),
        r = n(269128),
        a = n(358555),
        l = n(267642),
        c = n(26323),
        d = n(30513),
        s = n(981631),
        u = n(388032),
        g = n(643212);
      function b(e) {
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
          g = r ? (0, l._p)(s.oNc.ANIMATED_BANNER) : (0, l._p)(s.oNc.BANNER);
        null != g &&
          (0, c.Z)({
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
              image: (0, t.jsx)(b, { guild: o, banner: a }),
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: r ? (0, d.zC)() : (0, d.XO)(),
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
        c = n(540059),
        d = n(666188),
        s = n(372769),
        u = n(523751),
        g = n(623624),
        b = n(290034),
        h = n(271383),
        _ = n(594174),
        f = n(267642),
        m = n(981631),
        p = n(388032),
        T = n(13029);
      function N(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
          r = (0, a.e7)([_.default, h.ZP], () => {
            let e = _.default.getCurrentUser();
            return h.ZP.isMember(i.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: c, premiumSubscriberCount: d } = i;
        if (0 === d && c === m.Eu4.NONE) return null;
        let s = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              r &&
                !o &&
                (0, g.f)({
                  guildId: i.id,
                  location: {
                    section: m.jXE.GUILD_HEADER,
                    object: m.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          u = c === m.Eu4.NONE ? p.intl.string(p.t.c2wsn5) : f.nW(c),
          N = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", { className: T.tierTooltipTitle, children: u }),
              (0, t.jsx)("div", {
                children: p.intl.format(p.t.If4iTU, { subscriberCount: d }),
              }),
            ],
          });
        return (0, t.jsx)("div", {
          className: T.guildIconContainer,
          children: (0, t.jsx)(l.Tooltip, {
            text: N,
            position: "bottom",
            "aria-label": null != u ? u : "",
            children: (e) =>
              (0, t.jsx)(l.Clickable, {
                ...e,
                className: T.__invalid_premiumGuildIcon,
                onClick: s,
                children: (0, t.jsx)(b.Z, {
                  premiumTier: c,
                  iconBackgroundClassName: n
                    ? T.boostedGuildTierIconBackgroundWithVisibleBanner
                    : T.guildBadgeIcon,
                  iconClassName:
                    n && c !== m.Eu4.TIER_3
                      ? T.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function x(e) {
        let { guild: i, disableColor: n, disableBoostClick: o } = e;
        return (0, d.Z)(i)
          ? (0, t.jsx)("div", {
              className: T.guildIconV2Container,
              children: (0, t.jsx)(u.Z, {
                guild: i,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(T.guildBadge, { [T.disableColor]: n }),
                disableBoostClick: o,
              }),
            })
          : (0, t.jsx)("div", {
              className: T.guildIconContainer,
              children: (0, t.jsx)(s.Z, {
                guild: i,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(T.guildBadge, { [T.disableColor]: n }),
              }),
            });
      }
      function B(e) {
        let { guild: i, disableBoostClick: n, ...o } = e,
          r = !(0, c.Q3)("GuildHeaderGuildBadge") && o.isBannerVisible;
        return (0, d.Z)(i)
          ? (0, t.jsx)(x, { guild: i, disableColor: !1, disableBoostClick: n })
          : i.hasFeature(m.oNc.VERIFIED) || i.hasFeature(m.oNc.PARTNERED)
            ? (0, t.jsx)(x, { guild: i, disableColor: !r })
            : (0, t.jsx)(N, {
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
        c = n(26323),
        d = n(430824),
        s = n(914010),
        u = n(709586),
        g = n(981631),
        b = n(30513),
        h = n(388032),
        _ = n(814365);
      function f(e) {
        let { analyticsSection: i, analyticsPage: n, isGIF: f, banner: m } = e,
          p = (0, o.e7)([s.Z], () => s.Z.getGuildId()),
          T = (0, o.e7)([d.Z], () => d.Z.getGuild(p)),
          { analyticsLocations: N } = (0, a.ZP)();
        return null == T ||
          T.hasFeature(g.oNc.ANIMATED_BANNER) ||
          (!f && T.hasFeature(g.oNc.BANNER))
          ? null
          : (0, t.jsxs)("div", {
              className: _.container,
              children: [
                (0, t.jsx)(u.Z, { className: _.guildBoostingIcon }),
                (0, t.jsx)(r.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: h.intl.string(h.t["56M7xc"]),
                }),
                (0, t.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.LINK,
                  className: _.subscribeButton,
                  onClick: () => {
                    if (null == T) return;
                    let e = {
                      section: i,
                      page: n,
                      object: g.qAy.UPSELL_HEADER,
                    };
                    null != m
                      ? (0, l.c)({
                          analyticsLocations: N,
                          analyticsLocation: e,
                          guild: T,
                          isGIF: f,
                          banner: m,
                        })
                      : (0, c.Z)({
                          analyticsLocations: N,
                          analyticsSourceLocation: e,
                          guild: T,
                          perks: f ? (0, b.zC)() : (0, b.XO)(),
                        });
                  },
                  children: h.intl.string(h.t.WUHdZW),
                }),
              ],
            });
      }
    },
    321867: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return N;
        },
      });
      var t = n(200651),
        o = n(192379),
        r = n(442837),
        a = n(481060),
        l = n(100527),
        c = n(906732),
        d = n(118012),
        s = n(411477),
        u = n(197115),
        g = n(594174),
        b = n(626135),
        h = n(74538),
        _ = n(981631),
        f = n(486324),
        m = n(474936),
        p = n(388032),
        T = n(367422);
      function N(e) {
        let { analyticsSection: i, type: n } = e,
          N = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
          x = h.ZP.canUseAnimatedAvatar(N),
          B = h.ZP.canUsePremiumProfileCustomization(N),
          I = (n === f.pC.BANNER && B) || (n === f.pC.AVATAR && x),
          { sourceAnalyticsLocations: C } = (0, c.ZP)(
            l.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !I &&
              b.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                type: i,
                location_stack: C,
              });
          }, [I, i, C]),
          I)
        )
          return null;
        let E = (0, t.jsx)(u.Z, {
          className: T.__invalid_getNitroLink,
          size: a.Button.Sizes.SMALL,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.LINK,
          subscriptionTier: m.Si.TIER_2,
          buttonText: p.intl.format(p.t["944tDg"], {}),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: i,
            object: _.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, t.jsx)(s.Z, {
          reducedRightPadding: !0,
          className: T.nitroPreviewUpsell,
          text: p.intl.format(p.t.Og8039, {}),
          textSize: d.Z.Sizes.SIZE_14,
          textColor: d.Z.Colors.HEADER_PRIMARY,
          button: E,
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
          isGIF: c,
          banner: d,
        } = e;
        return [a.pC.BANNER, a.pC.AVATAR].includes(i) && c
          ? (0, t.jsx)(r.Z, { analyticsSection: l, type: i })
          : i === a.pC.GUILD_BANNER
            ? (0, t.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: c,
                banner: d,
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
        c = n(118012),
        d = n(319957);
      function s(e) {
        let {
          text: i,
          textSize: n = c.Z.Sizes.SIZE_12,
          textColor: o = c.Z.Colors.STANDARD,
          className: s,
          button: u,
          reducedRightPadding: g = !1,
        } = e;
        return (0, t.jsxs)("div", {
          className: r()(
            g ? d.noticeWithoutRightPadding : d.noticeWithRightPadding,
            s,
          ),
          children: [
            (0, t.jsxs)("div", {
              className: d.noticeLeft,
              children: [
                (0, t.jsx)(a.NitroWheelIcon, {
                  size: "md",
                  className: d.icon,
                  color: l.JX.PREMIUM_TIER_2,
                }),
                (0, t.jsx)(c.Z, {
                  className: d.text,
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
          c = (e.height / 2 - a - n.y) * o,
          d = i.width * o,
          s = i.height * o,
          u = Math.min(d, t.width),
          g = Math.min(s, t.height);
        return {
          x: l,
          y: c,
          scaledCropWidth: d,
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
            scaledCropHeight: c,
            canvasWidth: d,
            canvasHeight: s,
          } = t(e, i, n, o),
          u = document.createElement("canvas");
        (u.width = d), (u.height = s);
        let g = u.getContext("2d");
        return (
          null != g && g.drawImage(e, r, a, l, c, 0, 0, u.width, u.height),
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
    716886: function (e, i, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    958469: function (e, i, n) {
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
    643212: function (e, i, n) {
      e.exports = {
        guildBanner: "guildBanner_f9de8e",
        guildHeader: "guildHeader_f9de8e",
        guildName: "guildName_f9de8e",
        dropdown: "dropdown_f9de8e",
      };
    },
    13029: function (e, i, n) {
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
    769334: function (e, i, n) {
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
    814365: function (e, i, n) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    367422: function (e, i, n) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    616591: function (e, i, n) {
      e.exports = { container: "container_e62679" };
    },
    319957: function (e, i, n) {
      e.exports = {
        noticeWithoutRightPadding:
          "noticeWithoutRightPadding_f97380 notice_f97380",
        noticeWithRightPadding: "noticeWithRightPadding_f97380 notice_f97380",
        noticeLeft: "noticeLeft_f97380",
        icon: "icon_f97380",
        text: "text_f97380",
      };
    },
    374695: function (e, i, n) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    624566: function (e, i, n) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    745490: function (e, i, n) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    757340: function (e, i, n) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=c779061bf6aa5552c507.js.map
