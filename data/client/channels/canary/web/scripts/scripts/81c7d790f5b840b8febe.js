"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72891"],
  {
    269128: function (e, i, n) {
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        l = n(772848),
        a = n(363969);
      let c = (0, l.Z)();
      i.Z = (e) => {
        let { open: i, className: n, withHighlight: o = !1 } = e;
        return (0, t.jsxs)("svg", {
          width: "18",
          height: "18",
          className: r()(a.button, n, { [a.open]: i, [a.withHighlight]: o }),
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
        l = n(297700),
        a = n(471885),
        c = n(981631),
        s = n(201950);
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
        return (0, t.jsx)(l.Z, {
          className: r()(n, d[i]),
          size: c,
          children: (0, t.jsx)(a.Z, {
            tier: i,
            className: r()(o, s.boostedGuildIconGem, u[i]),
          }),
        });
      }
    },
    48217: function (e, i, n) {
      n.d(i, {
        c: function () {
          return p;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(481060),
        r = n(269128),
        l = n(358555),
        a = n(267642),
        c = n(26323),
        s = n(30513),
        d = n(981631),
        u = n(388032),
        g = n(369576);
      function f(e) {
        let { guild: i, banner: n } = e;
        return (0, t.jsx)("div", {
          className: g.guildBanner,
          style: { backgroundImage: "url(".concat(n) },
          children: (0, t.jsxs)("div", {
            className: g.guildHeader,
            children: [
              (0, t.jsx)(l.Z, { guild: i, isBannerVisible: !0 }),
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
      function p(e) {
        let {
            analyticsLocations: i,
            analyticsLocation: n,
            guild: o,
            isGIF: r,
            banner: l,
          } = e,
          g = r ? (0, a._p)(d.oNc.ANIMATED_BANNER) : (0, a._p)(d.oNc.BANNER);
        null != g &&
          (0, c.Z)({
            analyticsLocations: i,
            analyticsSourceLocation: n,
            guild: o,
            headerProps: {
              title: u.intl.string(u.t["rv2H+/"]),
              subtitle: (function (e, i) {
                let n = (0, a.nW)(e);
                return i
                  ? u.intl.formatToPlainString(u.t["TR/Uys"], {
                      targetLevelOrPlan: n,
                    })
                  : u.intl.formatToPlainString(u.t.B253V1, {
                      targetLevelOrPlan: n,
                    });
              })(g, r),
              image: (0, t.jsx)(f, { guild: o, banner: l }),
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: r ? (0, s.zC)() : (0, s.XO)(),
          });
      }
    },
    358555: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return b;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        l = n(442837),
        a = n(481060),
        c = n(540059),
        s = n(666188),
        d = n(372769),
        u = n(523751),
        g = n(623624),
        f = n(290034),
        p = n(271383),
        _ = n(594174),
        h = n(267642),
        N = n(981631),
        T = n(388032),
        m = n(70172);
      function x(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
          r = (0, l.e7)([_.default, p.ZP], () => {
            let e = _.default.getCurrentUser();
            return p.ZP.isMember(i.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: c, premiumSubscriberCount: s } = i;
        if (0 === s && c === N.Eu4.NONE) return null;
        let d = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              r &&
                !o &&
                (0, g.f)({
                  guildId: i.id,
                  location: {
                    section: N.jXE.GUILD_HEADER,
                    object: N.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          u = c === N.Eu4.NONE ? T.intl.string(T.t.c2wsn5) : h.nW(c),
          x = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", { className: m.tierTooltipTitle, children: u }),
              (0, t.jsx)("div", {
                children: T.intl.format(T.t.If4iTU, { subscriberCount: s }),
              }),
            ],
          });
        return (0, t.jsx)("div", {
          className: m.guildIconContainer,
          children: (0, t.jsx)(a.Tooltip, {
            text: x,
            position: "bottom",
            "aria-label": null != u ? u : "",
            children: (e) =>
              (0, t.jsx)(a.Clickable, {
                ...e,
                className: m.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, t.jsx)(f.Z, {
                  premiumTier: c,
                  iconBackgroundClassName: n
                    ? m.boostedGuildTierIconBackgroundWithVisibleBanner
                    : m.guildBadgeIcon,
                  iconClassName:
                    n && c !== N.Eu4.TIER_3
                      ? m.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function E(e) {
        let { guild: i, disableColor: n, disableBoostClick: o } = e;
        return (0, s.Z)(i)
          ? (0, t.jsx)("div", {
              className: m.guildIconV2Container,
              children: (0, t.jsx)(u.Z, {
                guild: i,
                tooltipPosition: "bottom",
                tooltipColor: a.Tooltip.Colors.PRIMARY,
                className: r()(m.guildBadge, { [m.disableColor]: n }),
                disableBoostClick: o,
              }),
            })
          : (0, t.jsx)("div", {
              className: m.guildIconContainer,
              children: (0, t.jsx)(d.Z, {
                guild: i,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: a.Tooltip.Colors.PRIMARY,
                className: r()(m.guildBadge, { [m.disableColor]: n }),
              }),
            });
      }
      function b(e) {
        let { guild: i, disableBoostClick: n, ...o } = e,
          r = !(0, c.Q3)("GuildHeaderGuildBadge") && o.isBannerVisible;
        return (0, s.Z)(i)
          ? (0, t.jsx)(E, { guild: i, disableColor: !1, disableBoostClick: n })
          : i.hasFeature(N.oNc.VERIFIED) || i.hasFeature(N.oNc.PARTNERED)
            ? (0, t.jsx)(E, { guild: i, disableColor: !r })
            : (0, t.jsx)(x, {
                guild: i,
                isBannerVisible: r,
                disableBoostClick: n,
              });
      }
    },
    195297: function (e, i, n) {
      n.r(i),
        n.d(i, {
          default: function () {
            return E;
          },
        }),
        n(47120);
      var t = n(200651),
        o = n(192379),
        r = n(120356),
        l = n.n(r),
        a = n(481060),
        c = n(100527),
        s = n(906732),
        d = n(313201),
        u = n(455708),
        g = n(222062),
        f = n(530329),
        p = n(626135),
        _ = n(488499),
        h = n(58384),
        N = n(981631),
        T = n(486324),
        m = n(388032),
        x = n(415617);
      function E(e) {
        let {
            transitionState: i,
            onClose: r,
            onComplete: E,
            uploadType: b,
            showUpsellHeader: I,
            analyticsPage: B,
          } = e,
          [C, j] = o.useState(!1),
          R = (0, a.useModalContext)(),
          A = (0, d.Dt)(),
          { analyticsLocations: P } = (0, s.ZP)(c.Z.GIF_PICKER);
        async function Z(e) {
          let { gifSrc: i } = e;
          if (null == i || C) return;
          j(!0);
          let o = (0, h.Q)(i),
            l = await fetch(o),
            c = await l.blob();
          r(),
            (0, a.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  n.e("48017"),
                  n.e("27371"),
                ]).then(n.bind(n, 850085));
                return (i) =>
                  (0, t.jsx)(e, {
                    imgURI: o,
                    file: new File([c], "tenor.gif", { type: "image/gif" }),
                    onCrop: E,
                    uploadType: b,
                    showUpsellHeader: I,
                    ...i,
                  });
              },
              { contextKey: R },
            );
        }
        o.useEffect(() => {
          p.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: B },
          });
        }, [B]);
        let k = b === T.pC.AVATAR || b === T.pC.BANNER,
          v = (0, g.M)(!k);
        return (0, t.jsx)(s.Gt, {
          value: P,
          children: (0, t.jsxs)(a.ModalRoot, {
            "aria-labelledby": A,
            transitionState: i,
            size: a.ModalSize.SMALL,
            children: [
              I &&
                !v &&
                (0, t.jsx)(_.Z, {
                  type: b,
                  analyticsPage: B,
                  analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                  isGIF: !0,
                }),
              (0, t.jsxs)(a.ModalHeader, {
                className: x.modalHeader,
                separator: !1,
                children: [
                  (0, t.jsx)(a.FormTitle, {
                    className: x.titleCase,
                    tag: a.FormTitleTags.H1,
                    children: m.intl.string(m.t["xsC+//"]),
                  }),
                  (0, t.jsx)(a.ModalCloseButton, {
                    onClick: r,
                    className: x.modalCloseButton,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(u.Z, {
                    contentClassName: l()({ [x.gifPickerContent]: I && v }),
                    className: l()(x.gifPicker, { [x.loadingOverlay]: C }),
                    onSelectGIF: Z,
                    hideFavorites: !0,
                  }),
                  C && (0, t.jsx)(a.Spinner, { className: x.spinner }),
                ],
              }),
              I &&
                v &&
                (0, t.jsx)(f.Z, {
                  uploadType: b,
                  showUpsell: !0,
                  className: x.nitroUpsell,
                }),
            ],
          }),
        });
      }
    },
    180781: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return h;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(442837),
        r = n(481060),
        l = n(906732),
        a = n(48217),
        c = n(26323),
        s = n(430824),
        d = n(914010),
        u = n(709586),
        g = n(981631),
        f = n(30513),
        p = n(388032),
        _ = n(808583);
      function h(e) {
        let { analyticsSection: i, analyticsPage: n, isGIF: h, banner: N } = e,
          T = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
          m = (0, o.e7)([s.Z], () => s.Z.getGuild(T)),
          { analyticsLocations: x } = (0, l.ZP)();
        return null == m ||
          m.hasFeature(g.oNc.ANIMATED_BANNER) ||
          (!h && m.hasFeature(g.oNc.BANNER))
          ? null
          : (0, t.jsxs)("div", {
              className: _.container,
              children: [
                (0, t.jsx)(u.Z, { className: _.guildBoostingIcon }),
                (0, t.jsx)(r.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: p.intl.string(p.t["56M7xc"]),
                }),
                (0, t.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.LINK,
                  className: _.subscribeButton,
                  onClick: () => {
                    if (null == m) return;
                    let e = {
                      section: i,
                      page: n,
                      object: g.qAy.UPSELL_HEADER,
                    };
                    null != N
                      ? (0, a.c)({
                          analyticsLocations: x,
                          analyticsLocation: e,
                          guild: m,
                          isGIF: h,
                          banner: N,
                        })
                      : (0, c.Z)({
                          analyticsLocations: x,
                          analyticsSourceLocation: e,
                          guild: m,
                          perks: h ? (0, f.zC)() : (0, f.XO)(),
                        });
                  },
                  children: p.intl.string(p.t.WUHdZW),
                }),
              ],
            });
      }
    },
    321867: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return x;
        },
      });
      var t = n(200651),
        o = n(192379),
        r = n(442837),
        l = n(481060),
        a = n(100527),
        c = n(906732),
        s = n(118012),
        d = n(411477),
        u = n(197115),
        g = n(594174),
        f = n(626135),
        p = n(74538),
        _ = n(981631),
        h = n(486324),
        N = n(474936),
        T = n(388032),
        m = n(639907);
      function x(e) {
        let { analyticsSection: i, type: n } = e,
          x = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
          E = p.ZP.canUseAnimatedAvatar(x),
          b = p.ZP.canUsePremiumProfileCustomization(x),
          I = (n === h.pC.BANNER && b) || (n === h.pC.AVATAR && E),
          { sourceAnalyticsLocations: B } = (0, c.ZP)(
            a.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !I &&
              f.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                type: i,
                location_stack: B,
              });
          }, [I, i, B]),
          I)
        )
          return null;
        let C = (0, t.jsx)(u.Z, {
          className: m.__invalid_getNitroLink,
          size: l.Button.Sizes.SMALL,
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.LINK,
          subscriptionTier: N.Si.TIER_2,
          buttonText: T.intl.format(T.t["944tDg"], {}),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: i,
            object: _.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, t.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: m.nitroPreviewUpsell,
          text: T.intl.format(T.t.Og8039, {}),
          textSize: s.Z.Sizes.SIZE_14,
          textColor: s.Z.Colors.HEADER_PRIMARY,
          button: C,
        });
      }
    },
    488499: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return a;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(180781),
        r = n(321867),
        l = n(486324);
      function a(e) {
        let {
          type: i,
          analyticsPage: n,
          analyticsSection: a,
          isGIF: c,
          banner: s,
        } = e;
        return [l.pC.BANNER, l.pC.AVATAR].includes(i) && c
          ? (0, t.jsx)(r.Z, { analyticsSection: a, type: i })
          : i === l.pC.GUILD_BANNER
            ? (0, t.jsx)(o.Z, {
                analyticsSection: a,
                analyticsPage: n,
                isGIF: c,
                banner: s,
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
      var t = n(981631);
      let o = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
      function r(e) {
        let i = new URL("".concat(window.location.protocol).concat(e)),
          { ASSET_ENDPOINT: n } = window.GLOBAL_ENV;
        if (null == i.pathname.match(o))
          throw Error("Unexpected Tenor GIF path.");
        let r = "".concat(t.ANM.TENOR_ASSET_PATH).concat(i.pathname);
        return "".concat(location.protocol).concat(n).concat(r);
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
        l = n(481060),
        a = n(436774),
        c = n(118012),
        s = n(392842);
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
                (0, t.jsx)(l.NitroWheelIcon, {
                  size: "md",
                  className: s.icon,
                  color: a.JX.PREMIUM_TIER_2,
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
    415617: function (e, i, n) {
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
//# sourceMappingURL=81c7d790f5b840b8febe.js.map
