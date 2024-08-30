"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72891"],
  {
    269128: function (e, i, n) {
      var o = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        a = n(772848),
        s = n(235532);
      let l = (0, a.Z)();
      i.Z = (e) => {
        let { open: i, className: n, withHighlight: t = !1 } = e;
        return (0, o.jsxs)("svg", {
          width: "18",
          height: "18",
          className: r()(s.button, n, { [s.open]: i, [s.withHighlight]: t }),
          children: [
            t &&
              (0, o.jsx)("defs", {
                children: (0, o.jsxs)("linearGradient", {
                  id: l,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, o.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, o.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, o.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, o.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, o.jsx)("path", {
                  stroke: t ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  stroke: t ? "url(#".concat(l, ")") : "currentColor",
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
          return _;
        },
      });
      var o = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        a = n(297700),
        s = n(471885),
        l = n(981631),
        c = n(890422);
      let d = {
          [l.Eu4.NONE]: c.iconBackgroundTierNone,
          [l.Eu4.TIER_1]: c.iconBackgroundTierOne,
          [l.Eu4.TIER_2]: c.iconBackgroundTierTwo,
          [l.Eu4.TIER_3]: c.iconBackgroundTierThree,
        },
        u = {
          [l.Eu4.NONE]: c.iconTierNone,
          [l.Eu4.TIER_1]: c.iconTierOne,
          [l.Eu4.TIER_2]: c.iconTierTwo,
          [l.Eu4.TIER_3]: c.iconTierThree,
        };
      function _(e) {
        let {
          premiumTier: i,
          iconBackgroundClassName: n,
          iconClassName: t,
          size: l,
        } = e;
        return (0, o.jsx)(a.Z, {
          className: r()(n, d[i]),
          size: l,
          children: (0, o.jsx)(s.Z, {
            tier: i,
            className: r()(t, c.boostedGuildIconGem, u[i]),
          }),
        });
      }
    },
    48217: function (e, i, n) {
      n.d(i, {
        c: function () {
          return E;
        },
      });
      var o = n(735250);
      n(470079);
      var t = n(481060),
        r = n(269128),
        a = n(358555),
        s = n(267642),
        l = n(26323),
        c = n(30513),
        d = n(981631),
        u = n(689938),
        _ = n(651610);
      function g(e) {
        let { guild: i, banner: n } = e;
        return (0, o.jsx)("div", {
          className: _.guildBanner,
          style: { backgroundImage: "url(".concat(n) },
          children: (0, o.jsxs)("div", {
            className: _.guildHeader,
            children: [
              (0, o.jsx)(a.Z, { guild: i, isBannerVisible: !0 }),
              (0, o.jsx)(t.Heading, {
                className: _.guildName,
                variant: "heading-md/semibold",
                children: i.toString(),
              }),
              (0, o.jsx)(r.Z, { className: _.dropdown, open: !1 }),
            ],
          }),
        });
      }
      function E(e) {
        let {
            analyticsLocations: i,
            analyticsLocation: n,
            guild: t,
            isGIF: r,
            banner: a,
          } = e,
          _ = r ? (0, s._p)(d.oNc.ANIMATED_BANNER) : (0, s._p)(d.oNc.BANNER);
        null != _ &&
          (0, l.Z)({
            analyticsLocations: i,
            analyticsSourceLocation: n,
            guild: t,
            headerProps: {
              title: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
              subtitle: (function (e, i) {
                let n = (0, s.nW)(e);
                return i
                  ? u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format(
                      { targetLevelOrPlan: n },
                    )
                  : u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format(
                      { targetLevelOrPlan: n },
                    );
              })(_, r),
              image: (0, o.jsx)(g, { guild: t, banner: a }),
            },
            perkIntro: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
            perks: r ? (0, c.zC)() : (0, c.XO)(),
          });
      }
    },
    358555: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return R;
        },
      });
      var o = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        a = n(442837),
        s = n(481060),
        l = n(666188),
        c = n(372769),
        d = n(523751),
        u = n(623624),
        _ = n(290034),
        g = n(271383),
        E = n(594174),
        f = n(267642),
        I = n(981631),
        N = n(689938),
        T = n(226052);
      function p(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: t } = e,
          r = (0, a.e7)([E.default, g.ZP], () => {
            let e = E.default.getCurrentUser();
            return g.ZP.isMember(i.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: l, premiumSubscriberCount: c } = i;
        if (0 === c && l === I.Eu4.NONE) return null;
        let d = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              r &&
                !t &&
                (0, u.f)({
                  guildId: i.id,
                  location: {
                    section: I.jXE.GUILD_HEADER,
                    object: I.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          p =
            l === I.Eu4.NONE
              ? N.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER
              : f.nW(l),
          h = (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", { className: T.tierTooltipTitle, children: p }),
              (0, o.jsx)("div", {
                children:
                  N.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format(
                    { subscriberCount: c },
                  ),
              }),
            ],
          });
        return (0, o.jsx)("div", {
          className: T.guildIconContainer,
          children: (0, o.jsx)(s.Tooltip, {
            text: h,
            position: "bottom",
            "aria-label": null != p ? p : "",
            children: (e) =>
              (0, o.jsx)(s.Clickable, {
                ...e,
                className: T.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, o.jsx)(_.Z, {
                  premiumTier: l,
                  iconBackgroundClassName: n
                    ? T.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    n && l !== I.Eu4.TIER_3
                      ? T.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function h(e) {
        let { guild: i, disableColor: n, disableBoostClick: t } = e;
        return (0, l.Z)(i)
          ? (0, o.jsx)("div", {
              className: T.guildIconV2Container,
              children: (0, o.jsx)(d.Z, {
                guild: i,
                tooltipPosition: "bottom",
                tooltipColor: s.Tooltip.Colors.PRIMARY,
                className: r()(T.guildBadge, { [T.disableColor]: n }),
                disableBoostClick: t,
              }),
            })
          : (0, o.jsx)("div", {
              className: T.guildIconContainer,
              children: (0, o.jsx)(c.Z, {
                guild: i,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: s.Tooltip.Colors.PRIMARY,
                className: r()(T.guildBadge, { [T.disableColor]: n }),
              }),
            });
      }
      function R(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: t } = e;
        return (0, l.Z)(i)
          ? (0, o.jsx)(h, { guild: i, disableColor: !1, disableBoostClick: t })
          : i.hasFeature(I.oNc.VERIFIED) || i.hasFeature(I.oNc.PARTNERED)
            ? (0, o.jsx)(h, { guild: i, disableColor: !n })
            : (0, o.jsx)(p, {
                guild: i,
                isBannerVisible: n,
                disableBoostClick: t,
              });
      }
    },
    195297: function (e, i, n) {
      n.r(i),
        n.d(i, {
          default: function () {
            return h;
          },
        }),
        n(47120);
      var o = n(735250),
        t = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(481060),
        l = n(100527),
        c = n(906732),
        d = n(313201),
        u = n(455708),
        _ = n(81245),
        g = n(53691),
        E = n(626135),
        f = n(488499),
        I = n(58384),
        N = n(981631),
        T = n(689938),
        p = n(321393);
      function h(e) {
        let {
            transitionState: i,
            onClose: r,
            onComplete: h,
            uploadType: R,
            showUpsellHeader: m,
            analyticsPage: x,
          } = e,
          [C, b] = t.useState(!1),
          B = (0, s.useModalContext)(),
          A = (0, d.Dt)(),
          { analyticsLocations: M } = (0, c.ZP)(l.Z.GIF_PICKER);
        async function P(e) {
          let { gifSrc: i } = e;
          if (null == i || C) return;
          b(!0);
          let t = (0, I.Q)(i),
            a = await fetch(t),
            l = await a.blob();
          r(),
            (0, s.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  n.e("48017"),
                  n.e("40629"),
                ]).then(n.bind(n, 850085));
                return (i) =>
                  (0, o.jsx)(e, {
                    imgURI: t,
                    file: new File([l], "tenor.gif", { type: "image/gif" }),
                    onCrop: h,
                    uploadType: R,
                    showUpsellHeader: m,
                    ...i,
                  });
              },
              { contextKey: B },
            );
        }
        t.useEffect(() => {
          E.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: x },
          });
        }, [x]);
        let L = (0, _.M)("GIFPickerCroppingModal");
        return (0, o.jsx)(c.Gt, {
          value: M,
          children: (0, o.jsxs)(s.ModalRoot, {
            "aria-labelledby": A,
            transitionState: i,
            size: s.ModalSize.SMALL,
            children: [
              m &&
                !L &&
                (0, o.jsx)(f.Z, {
                  type: R,
                  analyticsPage: x,
                  analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                  isGIF: !0,
                }),
              (0, o.jsxs)(s.ModalHeader, {
                className: p.modalHeader,
                separator: !1,
                children: [
                  (0, o.jsx)(s.FormTitle, {
                    className: p.titleCase,
                    tag: s.FormTitleTags.H1,
                    children: T.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
                  }),
                  (0, o.jsx)(s.ModalCloseButton, {
                    onClick: r,
                    className: p.modalCloseButton,
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)(u.Z, {
                    contentClassName: a()({ [p.gifPickerContent]: m && L }),
                    className: a()(p.gifPicker, { [p.loadingOverlay]: C }),
                    onSelectGIF: P,
                    hideFavorites: !0,
                  }),
                  C && (0, o.jsx)(s.Spinner, { className: p.spinner }),
                ],
              }),
              m &&
                L &&
                (0, o.jsx)(g.p, {
                  showUpsell: !0,
                  text: "Wear GIFs with Nitro",
                  button: T.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                  buttonAnalyticsObject: {
                    section: N.jXE.EMOJI_PICKER_FLOATING_UPSELL,
                  },
                  className: p.nitroUpsell,
                }),
            ],
          }),
        });
      }
    },
    180781: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return I;
        },
      });
      var o = n(735250);
      n(470079);
      var t = n(442837),
        r = n(481060),
        a = n(906732),
        s = n(48217),
        l = n(26323),
        c = n(430824),
        d = n(914010),
        u = n(709586),
        _ = n(981631),
        g = n(30513),
        E = n(689938),
        f = n(715183);
      function I(e) {
        let { analyticsSection: i, analyticsPage: n, isGIF: I, banner: N } = e,
          T = (0, t.e7)([d.Z], () => d.Z.getGuildId()),
          p = (0, t.e7)([c.Z], () => c.Z.getGuild(T)),
          { analyticsLocations: h } = (0, a.ZP)();
        return null == p ||
          p.hasFeature(_.oNc.ANIMATED_BANNER) ||
          (!I && p.hasFeature(_.oNc.BANNER))
          ? null
          : (0, o.jsxs)("div", {
              className: f.container,
              children: [
                (0, o.jsx)(u.Z, { className: f.guildBoostingIcon }),
                (0, o.jsx)(r.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: E.Z.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, o.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.LINK,
                  className: f.subscribeButton,
                  onClick: () => {
                    if (null == p) return;
                    let e = {
                      section: i,
                      page: n,
                      object: _.qAy.UPSELL_HEADER,
                    };
                    null != N
                      ? (0, s.c)({
                          analyticsLocations: h,
                          analyticsLocation: e,
                          guild: p,
                          isGIF: I,
                          banner: N,
                        })
                      : (0, l.Z)({
                          analyticsLocations: h,
                          analyticsSourceLocation: e,
                          guild: p,
                          perks: I ? (0, g.zC)() : (0, g.XO)(),
                        });
                  },
                  children: E.Z.Messages.PREMIUM_GUILD_BOOST_SERVER,
                }),
              ],
            });
      }
    },
    321867: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return h;
        },
      });
      var o = n(735250),
        t = n(470079),
        r = n(442837),
        a = n(481060),
        s = n(100527),
        l = n(906732),
        c = n(112831),
        d = n(411477),
        u = n(197115),
        _ = n(594174),
        g = n(626135),
        E = n(74538),
        f = n(981631),
        I = n(486324),
        N = n(474936),
        T = n(689938),
        p = n(742046);
      function h(e) {
        let { analyticsSection: i, type: n } = e,
          h = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
          R = E.ZP.canUseAnimatedAvatar(h),
          m = E.ZP.canUsePremiumProfileCustomization(h),
          x = (n === I.pC.BANNER && m) || (n === I.pC.AVATAR && R),
          { sourceAnalyticsLocations: C } = (0, l.ZP)(
            s.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (t.useEffect(() => {
            !x &&
              g.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                type: i,
                location_stack: C,
              });
          }, [x, i, C]),
          x)
        )
          return null;
        let b = (0, o.jsx)(u.Z, {
          className: p.__invalid_getNitroLink,
          size: a.Button.Sizes.SMALL,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.LINK,
          subscriptionTier: N.Si.TIER_2,
          buttonText: T.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: i,
            object: f.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, o.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: p.nitroPreviewUpsell,
          text: T.Z.Messages.PREMIUM_PREVIEW.format(),
          textSize: c.Z.Sizes.SIZE_14,
          textColor: c.Z.Colors.HEADER_PRIMARY,
          button: b,
        });
      }
    },
    488499: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return s;
        },
      });
      var o = n(735250);
      n(470079);
      var t = n(180781),
        r = n(321867),
        a = n(486324);
      function s(e) {
        let {
          type: i,
          analyticsPage: n,
          analyticsSection: s,
          isGIF: l,
          banner: c,
        } = e;
        return [a.pC.BANNER, a.pC.AVATAR].includes(i) && l
          ? (0, o.jsx)(r.Z, { analyticsSection: s, type: i })
          : i === a.pC.GUILD_BANNER
            ? (0, o.jsx)(t.Z, {
                analyticsSection: s,
                analyticsPage: n,
                isGIF: l,
                banner: c,
              })
            : null;
      }
    },
    58384: function (e, i, n) {
      n.d(i, {
        Q: function () {
          return r;
        },
      }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(411104);
      var o = n(981631);
      let t = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
      function r(e) {
        let i = new URL("".concat(window.location.protocol).concat(e)),
          { ASSET_ENDPOINT: n } = window.GLOBAL_ENV;
        if (null == i.pathname.match(t))
          throw Error("Unexpected Tenor GIF path.");
        let r = "".concat(o.ANM.TENOR_ASSET_PATH).concat(i.pathname);
        return "".concat(location.protocol).concat(n).concat(r);
      }
    },
    411477: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return d;
        },
      });
      var o = n(735250);
      n(470079);
      var t = n(120356),
        r = n.n(t),
        a = n(481060),
        s = n(436774),
        l = n(112831),
        c = n(590862);
      function d(e) {
        let {
          text: i,
          textSize: n = l.Z.Sizes.SIZE_12,
          textColor: t = l.Z.Colors.STANDARD,
          className: d,
          button: u,
          reducedRightPadding: _ = !1,
        } = e;
        return (0, o.jsxs)("div", {
          className: r()(
            _ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding,
            d,
          ),
          children: [
            (0, o.jsxs)("div", {
              className: c.noticeLeft,
              children: [
                (0, o.jsx)(a.NitroWheelIcon, {
                  size: "md",
                  className: c.icon,
                  color: s.JX.PREMIUM_TIER_2,
                }),
                (0, o.jsx)(l.Z, {
                  className: c.text,
                  size: n,
                  color: t,
                  children: i,
                }),
              ],
            }),
            u,
          ],
        });
      }
    },
    235532: function (e, i, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    890422: function (e, i, n) {
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
    651610: function (e, i, n) {
      e.exports = {
        guildBanner: "guildBanner_f9de8e",
        guildHeader: "guildHeader_f9de8e",
        guildName: "guildName_f9de8e",
        dropdown: "dropdown_f9de8e",
      };
    },
    226052: function (e, i, n) {
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
    321393: function (e, i, n) {
      e.exports = {
        gifPickerContent: "gifPickerContent_fede6c",
        gifPicker: "gifPicker_fede6c",
        modalHeader: "modalHeader_fede6c",
        titleCase: "titleCase_fede6c",
        loadingOverlay: "loadingOverlay_fede6c",
        spinner: "spinner_fede6c",
        modalCloseButton: "modalCloseButton_fede6c",
        nitroUpsell: "nitroUpsell_fede6c",
      };
    },
    715183: function (e, i, n) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    742046: function (e, i, n) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    590862: function (e, i, n) {
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
//# sourceMappingURL=46de908e521bded572d3.js.map
