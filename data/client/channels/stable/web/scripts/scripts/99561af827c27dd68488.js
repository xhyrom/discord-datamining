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
        l = n(841261);
      let s = (0, a.Z)();
      i.Z = (e) => {
        let { open: i, className: n, withHighlight: t = !1 } = e;
        return (0, o.jsxs)("svg", {
          width: "18",
          height: "18",
          className: r()(l.button, n, { [l.open]: i, [l.withHighlight]: t }),
          children: [
            t &&
              (0, o.jsx)("defs", {
                children: (0, o.jsxs)("linearGradient", {
                  id: s,
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
                  stroke: t ? "url(#".concat(s, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  stroke: t ? "url(#".concat(s, ")") : "currentColor",
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
      function _(e) {
        let {
          premiumTier: i,
          iconBackgroundClassName: n,
          iconClassName: t,
          size: s,
        } = e;
        return (0, o.jsx)(a.Z, {
          className: r()(n, d[i]),
          size: s,
          children: (0, o.jsx)(l.Z, {
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
        l = n(267642),
        s = n(26323),
        c = n(30513),
        d = n(981631),
        u = n(689938),
        _ = n(472997);
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
          _ = r ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
        null != _ &&
          (0, s.Z)({
            analyticsLocations: i,
            analyticsSourceLocation: n,
            guild: t,
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
        l = n(481060),
        s = n(666188),
        c = n(372769),
        d = n(523751),
        u = n(623624),
        _ = n(290034),
        g = n(271383),
        E = n(594174),
        f = n(267642),
        N = n(981631),
        T = n(689938),
        I = n(427542);
      function p(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: t } = e,
          r = (0, a.e7)([E.default, g.ZP], () => {
            let e = E.default.getCurrentUser();
            return g.ZP.isMember(i.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: s, premiumSubscriberCount: c } = i;
        if (0 === c && s === N.Eu4.NONE) return null;
        let d = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              r &&
                !t &&
                (0, u.f)({
                  guildId: i.id,
                  location: {
                    section: N.jXE.GUILD_HEADER,
                    object: N.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          p =
            s === N.Eu4.NONE
              ? T.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER
              : f.nW(s),
          h = (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", { className: I.tierTooltipTitle, children: p }),
              (0, o.jsx)("div", {
                children:
                  T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format(
                    { subscriberCount: c },
                  ),
              }),
            ],
          });
        return (0, o.jsx)("div", {
          className: I.guildIconContainer,
          children: (0, o.jsx)(l.Tooltip, {
            text: h,
            position: "bottom",
            "aria-label": null != p ? p : "",
            children: (e) =>
              (0, o.jsx)(l.Clickable, {
                ...e,
                className: I.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, o.jsx)(_.Z, {
                  premiumTier: s,
                  iconBackgroundClassName: n
                    ? I.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    n && s !== N.Eu4.TIER_3
                      ? I.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function h(e) {
        let { guild: i, disableColor: n, disableBoostClick: t } = e;
        return (0, s.Z)(i)
          ? (0, o.jsx)("div", {
              className: I.guildIconV2Container,
              children: (0, o.jsx)(d.Z, {
                guild: i,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(I.guildBadge, { [I.disableColor]: n }),
                disableBoostClick: t,
              }),
            })
          : (0, o.jsx)("div", {
              className: I.guildIconContainer,
              children: (0, o.jsx)(c.Z, {
                guild: i,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(I.guildBadge, { [I.disableColor]: n }),
              }),
            });
      }
      function R(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: t } = e;
        return (0, s.Z)(i)
          ? (0, o.jsx)(h, { guild: i, disableColor: !1, disableBoostClick: t })
          : i.hasFeature(N.oNc.VERIFIED) || i.hasFeature(N.oNc.PARTNERED)
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
            return R;
          },
        }),
        n(47120);
      var o = n(735250),
        t = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(481060),
        s = n(100527),
        c = n(906732),
        d = n(313201),
        u = n(455708),
        _ = n(81245),
        g = n(530329),
        E = n(626135),
        f = n(488499),
        N = n(58384),
        T = n(981631),
        I = n(486324),
        p = n(689938),
        h = n(76899);
      function R(e) {
        let {
            transitionState: i,
            onClose: r,
            onComplete: R,
            uploadType: m,
            showUpsellHeader: x,
            analyticsPage: B,
          } = e,
          [C, A] = t.useState(!1),
          b = (0, l.useModalContext)(),
          M = (0, d.Dt)(),
          { analyticsLocations: P } = (0, c.ZP)(s.Z.GIF_PICKER);
        async function j(e) {
          let { gifSrc: i } = e;
          if (null == i || C) return;
          A(!0);
          let t = (0, N.Q)(i),
            a = await fetch(t),
            s = await a.blob();
          r(),
            (0, l.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  n.e("48017"),
                  n.e("53243"),
                ]).then(n.bind(n, 850085));
                return (i) =>
                  (0, o.jsx)(e, {
                    imgURI: t,
                    file: new File([s], "tenor.gif", { type: "image/gif" }),
                    onCrop: R,
                    uploadType: m,
                    showUpsellHeader: x,
                    ...i,
                  });
              },
              { contextKey: b },
            );
        }
        t.useEffect(() => {
          E.default.track(T.rMx.OPEN_MODAL, {
            type: T.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: B },
          });
        }, [B]);
        let L = m === I.pC.AVATAR || m === I.pC.BANNER,
          Z = (0, _.Mu)("GIFPickerCroppingModal", !L);
        return (0, o.jsx)(c.Gt, {
          value: P,
          children: (0, o.jsxs)(l.ModalRoot, {
            "aria-labelledby": M,
            transitionState: i,
            size: l.ModalSize.SMALL,
            children: [
              x &&
                !Z &&
                (0, o.jsx)(f.Z, {
                  type: m,
                  analyticsPage: B,
                  analyticsSection: T.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                  isGIF: !0,
                }),
              (0, o.jsxs)(l.ModalHeader, {
                className: h.modalHeader,
                separator: !1,
                children: [
                  (0, o.jsx)(l.FormTitle, {
                    className: h.titleCase,
                    tag: l.FormTitleTags.H1,
                    children: p.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
                  }),
                  (0, o.jsx)(l.ModalCloseButton, {
                    onClick: r,
                    className: h.modalCloseButton,
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)(u.Z, {
                    contentClassName: a()({ [h.gifPickerContent]: x && Z }),
                    className: a()(h.gifPicker, { [h.loadingOverlay]: C }),
                    onSelectGIF: j,
                    hideFavorites: !0,
                  }),
                  C && (0, o.jsx)(l.Spinner, { className: h.spinner }),
                ],
              }),
              x &&
                Z &&
                (0, o.jsx)(g.Z, {
                  uploadType: m,
                  showUpsell: !0,
                  className: h.nitroUpsell,
                }),
            ],
          }),
        });
      }
    },
    180781: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return N;
        },
      });
      var o = n(735250);
      n(470079);
      var t = n(442837),
        r = n(481060),
        a = n(906732),
        l = n(48217),
        s = n(26323),
        c = n(430824),
        d = n(914010),
        u = n(709586),
        _ = n(981631),
        g = n(30513),
        E = n(689938),
        f = n(364042);
      function N(e) {
        let { analyticsSection: i, analyticsPage: n, isGIF: N, banner: T } = e,
          I = (0, t.e7)([d.Z], () => d.Z.getGuildId()),
          p = (0, t.e7)([c.Z], () => c.Z.getGuild(I)),
          { analyticsLocations: h } = (0, a.ZP)();
        return null == p ||
          p.hasFeature(_.oNc.ANIMATED_BANNER) ||
          (!N && p.hasFeature(_.oNc.BANNER))
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
                    null != T
                      ? (0, l.c)({
                          analyticsLocations: h,
                          analyticsLocation: e,
                          guild: p,
                          isGIF: N,
                          banner: T,
                        })
                      : (0, s.Z)({
                          analyticsLocations: h,
                          analyticsSourceLocation: e,
                          guild: p,
                          perks: N ? (0, g.zC)() : (0, g.XO)(),
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
        l = n(100527),
        s = n(906732),
        c = n(112831),
        d = n(411477),
        u = n(197115),
        _ = n(594174),
        g = n(626135),
        E = n(74538),
        f = n(981631),
        N = n(486324),
        T = n(474936),
        I = n(689938),
        p = n(634387);
      function h(e) {
        let { analyticsSection: i, type: n } = e,
          h = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
          R = E.ZP.canUseAnimatedAvatar(h),
          m = E.ZP.canUsePremiumProfileCustomization(h),
          x = (n === N.pC.BANNER && m) || (n === N.pC.AVATAR && R),
          { sourceAnalyticsLocations: B } = (0, s.ZP)(
            l.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (t.useEffect(() => {
            !x &&
              g.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                type: i,
                location_stack: B,
              });
          }, [x, i, B]),
          x)
        )
          return null;
        let C = (0, o.jsx)(u.Z, {
          className: p.__invalid_getNitroLink,
          size: a.Button.Sizes.SMALL,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.LINK,
          subscriptionTier: T.Si.TIER_2,
          buttonText: I.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
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
          text: I.Z.Messages.PREMIUM_PREVIEW.format(),
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
      var o = n(735250);
      n(470079);
      var t = n(180781),
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
          ? (0, o.jsx)(r.Z, { analyticsSection: l, type: i })
          : i === a.pC.GUILD_BANNER
            ? (0, o.jsx)(t.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: s,
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
        l = n(436774),
        s = n(112831),
        c = n(148393);
      function d(e) {
        let {
          text: i,
          textSize: n = s.Z.Sizes.SIZE_12,
          textColor: t = s.Z.Colors.STANDARD,
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
                  color: l.JX.PREMIUM_TIER_2,
                }),
                (0, o.jsx)(s.Z, {
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
    76899: function (e, i, n) {
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
//# sourceMappingURL=99561af827c27dd68488.js.map
