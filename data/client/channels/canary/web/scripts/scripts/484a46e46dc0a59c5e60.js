"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61694"],
  {
    269128: function (e, i, n) {
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(772848),
        l = n(841261);
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
        s = n(188662);
      let d = {
          [c.Eu4.NONE]: s.iconBackgroundTierNone,
          [c.Eu4.TIER_1]: s.iconBackgroundTierOne,
          [c.Eu4.TIER_2]: s.iconBackgroundTierTwo,
          [c.Eu4.TIER_3]: s.iconBackgroundTierThree,
        },
        u = {
          [c.Eu4.NONE]: s.iconTierNone,
          [c.Eu4.TIER_1]: s.iconTierOne,
          [c.Eu4.TIER_2]: s.iconTierTwo,
          [c.Eu4.TIER_3]: s.iconTierThree,
        };
      function g(e) {
        let {
          premiumTier: i,
          iconBackgroundClassName: n,
          iconClassName: o,
          size: c,
        } = e;
        return (0, t.jsx)(a.Z, {
          className: r()(n, d[i]),
          size: c,
          children: (0, t.jsx)(l.Z, {
            tier: i,
            className: r()(o, s.boostedGuildIconGem, u[i]),
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
        c = n(26323),
        s = n(30513),
        d = n(981631),
        u = n(388032),
        g = n(472997);
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
          g = r ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
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
              image: (0, t.jsx)(h, { guild: o, banner: a }),
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: r ? (0, s.zC)() : (0, s.XO)(),
          });
      }
    },
    358555: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return x;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(442837),
        l = n(481060),
        c = n(666188),
        s = n(372769),
        d = n(523751),
        u = n(623624),
        g = n(290034),
        h = n(271383),
        b = n(594174),
        _ = n(267642),
        f = n(981631),
        T = n(388032),
        m = n(427542);
      function N(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
          r = (0, a.e7)([b.default, h.ZP], () => {
            let e = b.default.getCurrentUser();
            return h.ZP.isMember(i.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: c, premiumSubscriberCount: s } = i;
        if (0 === s && c === f.Eu4.NONE) return null;
        let d = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              r &&
                !o &&
                (0, u.f)({
                  guildId: i.id,
                  location: {
                    section: f.jXE.GUILD_HEADER,
                    object: f.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          N = c === f.Eu4.NONE ? T.intl.string(T.t.c2wsn5) : _.nW(c),
          p = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", { className: m.tierTooltipTitle, children: N }),
              (0, t.jsx)("div", {
                children: T.intl.format(T.t.If4iTU, { subscriberCount: s }),
              }),
            ],
          });
        return (0, t.jsx)("div", {
          className: m.guildIconContainer,
          children: (0, t.jsx)(l.Tooltip, {
            text: p,
            position: "bottom",
            "aria-label": null != N ? N : "",
            children: (e) =>
              (0, t.jsx)(l.Clickable, {
                ...e,
                className: m.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, t.jsx)(g.Z, {
                  premiumTier: c,
                  iconBackgroundClassName: n
                    ? m.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    n && c !== f.Eu4.TIER_3
                      ? m.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function p(e) {
        let { guild: i, disableColor: n, disableBoostClick: o } = e;
        return (0, c.Z)(i)
          ? (0, t.jsx)("div", {
              className: m.guildIconV2Container,
              children: (0, t.jsx)(d.Z, {
                guild: i,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(m.guildBadge, { [m.disableColor]: n }),
                disableBoostClick: o,
              }),
            })
          : (0, t.jsx)("div", {
              className: m.guildIconContainer,
              children: (0, t.jsx)(s.Z, {
                guild: i,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(m.guildBadge, { [m.disableColor]: n }),
              }),
            });
      }
      function x(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: o } = e;
        return (0, c.Z)(i)
          ? (0, t.jsx)(p, { guild: i, disableColor: !1, disableBoostClick: o })
          : i.hasFeature(f.oNc.VERIFIED) || i.hasFeature(f.oNc.PARTNERED)
            ? (0, t.jsx)(p, { guild: i, disableColor: !n })
            : (0, t.jsx)(N, {
                guild: i,
                isBannerVisible: n,
                disableBoostClick: o,
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
        s = n(430824),
        d = n(914010),
        u = n(709586),
        g = n(981631),
        h = n(30513),
        b = n(388032),
        _ = n(364042);
      function f(e) {
        let { analyticsSection: i, analyticsPage: n, isGIF: f, banner: T } = e,
          m = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
          N = (0, o.e7)([s.Z], () => s.Z.getGuild(m)),
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
                      : (0, c.Z)({
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
        c = n(906732),
        s = n(112831),
        d = n(411477),
        u = n(197115),
        g = n(594174),
        h = n(626135),
        b = n(74538),
        _ = n(981631),
        f = n(486324),
        T = n(474936),
        m = n(388032),
        N = n(634387);
      function p(e) {
        let { analyticsSection: i, type: n } = e,
          p = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
          x = b.ZP.canUseAnimatedAvatar(p),
          E = b.ZP.canUsePremiumProfileCustomization(p),
          B = (n === f.pC.BANNER && E) || (n === f.pC.AVATAR && x),
          { sourceAnalyticsLocations: I } = (0, c.ZP)(
            l.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !B &&
              h.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                type: i,
                location_stack: I,
              });
          }, [B, i, I]),
          B)
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
        return (0, t.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: N.nitroPreviewUpsell,
          text: m.intl.format(m.t.Og8039, {}),
          textSize: s.Z.Sizes.SIZE_14,
          textColor: s.Z.Colors.HEADER_PRIMARY,
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
          isGIF: c,
          banner: s,
        } = e;
        return [a.pC.BANNER, a.pC.AVATAR].includes(i) && c
          ? (0, t.jsx)(r.Z, { analyticsSection: l, type: i })
          : i === a.pC.GUILD_BANNER
            ? (0, t.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: c,
                banner: s,
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
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(481060),
        l = n(436774),
        c = n(112831),
        s = n(148393);
      function d(e) {
        let {
          text: i,
          textSize: n = c.Z.Sizes.SIZE_12,
          textColor: o = c.Z.Colors.STANDARD,
          className: d,
          button: u,
          reducedRightPadding: g = !1,
        } = e;
        return (0, t.jsxs)("div", {
          className: r()(
            g ? s.noticeWithoutRightPadding : s.noticeWithRightPadding,
            d,
          ),
          children: [
            (0, t.jsxs)("div", {
              className: s.noticeLeft,
              children: [
                (0, t.jsx)(a.NitroWheelIcon, {
                  size: "md",
                  className: s.icon,
                  color: l.JX.PREMIUM_TIER_2,
                }),
                (0, t.jsx)(c.Z, {
                  className: s.text,
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
          s = i.width * o,
          d = i.height * o,
          u = Math.min(s, t.width),
          g = Math.min(d, t.height);
        return {
          x: l,
          y: c,
          scaledCropWidth: s,
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
            scaledCropHeight: c,
            canvasWidth: s,
            canvasHeight: d,
          } = t(e, i, n, o),
          u = document.createElement("canvas");
        (u.width = s), (u.height = d);
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
//# sourceMappingURL=484a46e46dc0a59c5e60.js.map
