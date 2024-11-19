"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13242"],
  {
    269128: function (e, n, i) {
      var t = i(200651);
      i(192379);
      var o = i(120356),
        r = i.n(o),
        a = i(772848),
        l = i(718922);
      let c = (0, a.Z)();
      n.Z = (e) => {
        let { open: n, className: i, withHighlight: o = !1 } = e;
        return (0, t.jsxs)("svg", {
          width: "18",
          height: "18",
          className: r()(l.button, i, { [l.open]: n, [l.withHighlight]: o }),
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
    290034: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return g;
        },
      });
      var t = i(200651);
      i(192379);
      var o = i(120356),
        r = i.n(o),
        a = i(297700),
        l = i(471885),
        c = i(981631),
        s = i(407015);
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
          premiumTier: n,
          iconBackgroundClassName: i,
          iconClassName: o,
          size: c,
        } = e;
        return (0, t.jsx)(a.Z, {
          className: r()(i, d[n]),
          size: c,
          children: (0, t.jsx)(l.Z, {
            tier: n,
            className: r()(o, s.boostedGuildIconGem, u[n]),
          }),
        });
      }
    },
    48217: function (e, n, i) {
      i.d(n, {
        c: function () {
          return h;
        },
      });
      var t = i(200651);
      i(192379);
      var o = i(481060),
        r = i(269128),
        a = i(358555),
        l = i(267642),
        c = i(26323),
        s = i(30513),
        d = i(981631),
        u = i(388032),
        g = i(607618);
      function b(e) {
        let { guild: n, banner: i } = e;
        return (0, t.jsx)("div", {
          className: g.guildBanner,
          style: { backgroundImage: "url(".concat(i) },
          children: (0, t.jsxs)("div", {
            className: g.guildHeader,
            children: [
              (0, t.jsx)(a.Z, { guild: n, isBannerVisible: !0 }),
              (0, t.jsx)(o.Heading, {
                className: g.guildName,
                variant: "heading-md/semibold",
                children: n.toString(),
              }),
              (0, t.jsx)(r.Z, { className: g.dropdown, open: !1 }),
            ],
          }),
        });
      }
      function h(e) {
        let {
            analyticsLocations: n,
            analyticsLocation: i,
            guild: o,
            isGIF: r,
            banner: a,
          } = e,
          g = r ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
        null != g &&
          (0, c.Z)({
            analyticsLocations: n,
            analyticsSourceLocation: i,
            guild: o,
            headerProps: {
              title: u.intl.string(u.t["rv2H+/"]),
              subtitle: (function (e, n) {
                let i = (0, l.nW)(e);
                return n
                  ? u.intl.formatToPlainString(u.t["TR/Uys"], {
                      targetLevelOrPlan: i,
                    })
                  : u.intl.formatToPlainString(u.t.B253V1, {
                      targetLevelOrPlan: i,
                    });
              })(g, r),
              image: (0, t.jsx)(b, { guild: o, banner: a }),
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: r ? (0, s.zC)() : (0, s.XO)(),
          });
      }
    },
    358555: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return x;
        },
      });
      var t = i(200651);
      i(192379);
      var o = i(120356),
        r = i.n(o),
        a = i(442837),
        l = i(481060),
        c = i(666188),
        s = i(372769),
        d = i(523751),
        u = i(623624),
        g = i(290034),
        b = i(271383),
        h = i(594174),
        _ = i(267642),
        f = i(981631),
        m = i(388032),
        p = i(725741);
      function T(e) {
        let { guild: n, isBannerVisible: i, disableBoostClick: o } = e,
          r = (0, a.e7)([h.default, b.ZP], () => {
            let e = h.default.getCurrentUser();
            return b.ZP.isMember(n.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: c, premiumSubscriberCount: s } = n;
        if (0 === s && c === f.Eu4.NONE) return null;
        let d = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              r &&
                !o &&
                (0, u.f)({
                  guildId: n.id,
                  location: {
                    section: f.jXE.GUILD_HEADER,
                    object: f.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          T = c === f.Eu4.NONE ? m.intl.string(m.t.c2wsn5) : _.nW(c),
          N = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", { className: p.tierTooltipTitle, children: T }),
              (0, t.jsx)("div", {
                children: m.intl.format(m.t.If4iTU, { subscriberCount: s }),
              }),
            ],
          });
        return (0, t.jsx)("div", {
          className: p.guildIconContainer,
          children: (0, t.jsx)(l.Tooltip, {
            text: N,
            position: "bottom",
            "aria-label": null != T ? T : "",
            children: (e) =>
              (0, t.jsx)(l.Clickable, {
                ...e,
                className: p.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, t.jsx)(g.Z, {
                  premiumTier: c,
                  iconBackgroundClassName: i
                    ? p.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    i && c !== f.Eu4.TIER_3
                      ? p.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function N(e) {
        let { guild: n, disableColor: i, disableBoostClick: o } = e;
        return (0, c.Z)(n)
          ? (0, t.jsx)("div", {
              className: p.guildIconV2Container,
              children: (0, t.jsx)(d.Z, {
                guild: n,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(p.guildBadge, { [p.disableColor]: i }),
                disableBoostClick: o,
              }),
            })
          : (0, t.jsx)("div", {
              className: p.guildIconContainer,
              children: (0, t.jsx)(s.Z, {
                guild: n,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(p.guildBadge, { [p.disableColor]: i }),
              }),
            });
      }
      function x(e) {
        let { guild: n, isBannerVisible: i, disableBoostClick: o } = e;
        return (0, c.Z)(n)
          ? (0, t.jsx)(N, { guild: n, disableColor: !1, disableBoostClick: o })
          : n.hasFeature(f.oNc.VERIFIED) || n.hasFeature(f.oNc.PARTNERED)
            ? (0, t.jsx)(N, { guild: n, disableColor: !i })
            : (0, t.jsx)(T, {
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
      var t = i(200651);
      i(192379);
      var o = i(442837),
        r = i(481060),
        a = i(906732),
        l = i(48217),
        c = i(26323),
        s = i(430824),
        d = i(914010),
        u = i(709586),
        g = i(981631),
        b = i(30513),
        h = i(388032),
        _ = i(933461);
      function f(e) {
        let { analyticsSection: n, analyticsPage: i, isGIF: f, banner: m } = e,
          p = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
          T = (0, o.e7)([s.Z], () => s.Z.getGuild(p)),
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
                      section: n,
                      page: i,
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
    321867: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return N;
        },
      });
      var t = i(200651),
        o = i(192379),
        r = i(442837),
        a = i(481060),
        l = i(100527),
        c = i(906732),
        s = i(118012),
        d = i(411477),
        u = i(197115),
        g = i(594174),
        b = i(626135),
        h = i(74538),
        _ = i(981631),
        f = i(486324),
        m = i(474936),
        p = i(388032),
        T = i(180038);
      function N(e) {
        let { analyticsSection: n, type: i } = e,
          N = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
          x = h.ZP.canUseAnimatedAvatar(N),
          C = h.ZP.canUsePremiumProfileCustomization(N),
          E = (i === f.pC.BANNER && C) || (i === f.pC.AVATAR && x),
          { sourceAnalyticsLocations: I } = (0, c.ZP)(
            l.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !E &&
              b.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                type: n,
                location_stack: I,
              });
          }, [E, n, I]),
          E)
        )
          return null;
        let B = (0, t.jsx)(u.Z, {
          className: T.__invalid_getNitroLink,
          size: a.Button.Sizes.SMALL,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.LINK,
          subscriptionTier: m.Si.TIER_2,
          buttonText: p.intl.format(p.t["944tDg"], {}),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: n,
            object: _.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, t.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: T.nitroPreviewUpsell,
          text: p.intl.format(p.t.Og8039, {}),
          textSize: s.Z.Sizes.SIZE_14,
          textColor: s.Z.Colors.HEADER_PRIMARY,
          button: B,
        });
      }
    },
    488499: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return l;
        },
      });
      var t = i(200651);
      i(192379);
      var o = i(180781),
        r = i(321867),
        a = i(486324);
      function l(e) {
        let {
          type: n,
          analyticsPage: i,
          analyticsSection: l,
          isGIF: c,
          banner: s,
        } = e;
        return [a.pC.BANNER, a.pC.AVATAR].includes(n) && c
          ? (0, t.jsx)(r.Z, { analyticsSection: l, type: n })
          : n === a.pC.GUILD_BANNER
            ? (0, t.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: i,
                isGIF: c,
                banner: s,
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
      var t = i(200651);
      i(192379);
      var o = i(120356),
        r = i.n(o),
        a = i(481060),
        l = i(436774),
        c = i(118012),
        s = i(11623);
      function d(e) {
        let {
          text: n,
          textSize: i = c.Z.Sizes.SIZE_12,
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
          r = n.width / 2,
          a = n.height / 2,
          l = (e.width / 2 - r - i.x) * o,
          c = (e.height / 2 - a - i.y) * o,
          s = n.width * o,
          d = n.height * o,
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
      function o(e, n, i, o) {
        let {
            x: r,
            y: a,
            scaledCropWidth: l,
            scaledCropHeight: c,
            canvasWidth: s,
            canvasHeight: d,
          } = t(e, n, i, o),
          u = document.createElement("canvas");
        (u.width = s), (u.height = d);
        let g = u.getContext("2d");
        return (
          null != g && g.drawImage(e, r, a, l, c, 0, 0, u.width, u.height),
          u.toDataURL("image/png")
        );
      }
      function r(e, n, i) {
        let t = e.naturalWidth / e.naturalHeight,
          r = n,
          a = i;
        e.naturalWidth > e.naturalHeight ? (r /= t) : (a *= t);
        let l = { height: r, width: a };
        return o(e, { width: e.width, height: e.height }, { x: 0, y: 0 }, l);
      }
      i.d(n, {
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
    718922: function (e, n, i) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    407015: function (e, n, i) {
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
    607618: function (e, n, i) {
      e.exports = {
        guildBanner: "guildBanner_f9de8e",
        guildHeader: "guildHeader_f9de8e",
        guildName: "guildName_f9de8e",
        dropdown: "dropdown_f9de8e",
      };
    },
    725741: function (e, n, i) {
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
    695384: function (e, n, i) {
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
    933461: function (e, n, i) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    180038: function (e, n, i) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    678321: function (e, n, i) {
      e.exports = { container: "container_e62679" };
    },
    11623: function (e, n, i) {
      e.exports = {
        noticeWithoutRightPadding:
          "noticeWithoutRightPadding_f97380 notice_f97380",
        noticeWithRightPadding: "noticeWithRightPadding_f97380 notice_f97380",
        noticeLeft: "noticeLeft_f97380",
        icon: "icon_f97380",
        text: "text_f97380",
      };
    },
    302322: function (e, n, i) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    507472: function (e, n, i) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    563431: function (e, n, i) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    90592: function (e, n, i) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=d6a06ba374e93d4fb9fa.js.map
