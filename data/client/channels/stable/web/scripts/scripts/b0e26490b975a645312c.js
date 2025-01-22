"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72891"],
  {
    290034: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return g;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        l = n.n(o),
        r = n(297700),
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
        return (0, t.jsx)(r.Z, {
          className: l()(n, d[i]),
          size: c,
          children: (0, t.jsx)(a.Z, {
            tier: i,
            className: l()(o, s.boostedGuildIconGem, u[i]),
          }),
        });
      }
    },
    48217: function (e, i, n) {
      n.d(i, {
        c: function () {
          return _;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(481060),
        l = n(269128),
        r = n(358555),
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
              (0, t.jsx)(r.Z, { guild: i, isBannerVisible: !0 }),
              (0, t.jsx)(o.Heading, {
                className: g.guildName,
                variant: "heading-md/semibold",
                children: i.toString(),
              }),
              (0, t.jsx)(l.Z, { className: g.dropdown, open: !1 }),
            ],
          }),
        });
      }
      function _(e) {
        let {
            analyticsLocations: i,
            analyticsLocation: n,
            guild: o,
            isGIF: l,
            banner: r,
          } = e,
          g = l ? (0, a._p)(d.oNc.ANIMATED_BANNER) : (0, a._p)(d.oNc.BANNER);
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
              })(g, l),
              image: (0, t.jsx)(f, { guild: o, banner: r }),
            },
            perkIntro: u.intl.string(u.t.ZuItcH),
            perks: l ? (0, s.zC)() : (0, s.XO)(),
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
        l = n.n(o),
        r = n(442837),
        a = n(481060),
        c = n(540059),
        s = n(666188),
        d = n(372769),
        u = n(523751),
        g = n(623624),
        f = n(290034),
        _ = n(271383),
        N = n(594174),
        T = n(267642),
        p = n(981631),
        m = n(388032),
        E = n(70172);
      function h(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
          l = (0, r.e7)([N.default, _.ZP], () => {
            let e = N.default.getCurrentUser();
            return _.ZP.isMember(i.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: c, premiumSubscriberCount: s } = i;
        if (0 === s && c === p.Eu4.NONE) return null;
        let d = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              l &&
                !o &&
                (0, g.f)({
                  guildId: i.id,
                  location: {
                    section: p.jXE.GUILD_HEADER,
                    object: p.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          u = c === p.Eu4.NONE ? m.intl.string(m.t.c2wsn5) : T.nW(c),
          h = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", { className: E.tierTooltipTitle, children: u }),
              (0, t.jsx)("div", {
                children: m.intl.format(m.t.If4iTU, { subscriberCount: s }),
              }),
            ],
          });
        return (0, t.jsx)("div", {
          className: E.guildIconContainer,
          children: (0, t.jsx)(a.Tooltip, {
            text: h,
            position: "bottom",
            "aria-label": null != u ? u : "",
            children: (e) =>
              (0, t.jsx)(a.Clickable, {
                ...e,
                className: E.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, t.jsx)(f.Z, {
                  premiumTier: c,
                  iconBackgroundClassName: n
                    ? E.boostedGuildTierIconBackgroundWithVisibleBanner
                    : E.guildBadgeIcon,
                  iconClassName:
                    n && c !== p.Eu4.TIER_3
                      ? E.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function I(e) {
        let { guild: i, disableColor: n, disableBoostClick: o } = e;
        return (0, s.Z)(i)
          ? (0, t.jsx)("div", {
              className: E.guildIconV2Container,
              children: (0, t.jsx)(u.Z, {
                guild: i,
                tooltipPosition: "bottom",
                tooltipColor: a.Tooltip.Colors.PRIMARY,
                className: l()(E.guildBadge, { [E.disableColor]: n }),
                disableBoostClick: o,
              }),
            })
          : (0, t.jsx)("div", {
              className: E.guildIconContainer,
              children: (0, t.jsx)(d.Z, {
                guild: i,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: a.Tooltip.Colors.PRIMARY,
                className: l()(E.guildBadge, { [E.disableColor]: n }),
              }),
            });
      }
      function b(e) {
        let { guild: i, disableBoostClick: n, ...o } = e,
          l = !(0, c.Q3)("GuildHeaderGuildBadge") && o.isBannerVisible;
        return (0, s.Z)(i)
          ? (0, t.jsx)(I, { guild: i, disableColor: !1, disableBoostClick: n })
          : i.hasFeature(p.oNc.VERIFIED) || i.hasFeature(p.oNc.PARTNERED)
            ? (0, t.jsx)(I, { guild: i, disableColor: !l })
            : (0, t.jsx)(h, {
                guild: i,
                isBannerVisible: l,
                disableBoostClick: n,
              });
      }
    },
    195297: function (e, i, n) {
      n.r(i),
        n.d(i, {
          default: function () {
            return I;
          },
        }),
        n(47120);
      var t = n(200651),
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        a = n(481060),
        c = n(100527),
        s = n(906732),
        d = n(313201),
        u = n(455708),
        g = n(222062),
        f = n(530329),
        _ = n(626135),
        N = n(488499),
        T = n(58384),
        p = n(981631),
        m = n(486324),
        E = n(388032),
        h = n(415617);
      function I(e) {
        let {
            transitionState: i,
            onClose: l,
            onComplete: I,
            uploadType: b,
            showUpsellHeader: B,
            analyticsPage: x,
          } = e,
          [C, R] = o.useState(!1),
          A = (0, a.useModalContext)(),
          j = (0, d.Dt)(),
          { analyticsLocations: P } = (0, s.ZP)(c.Z.GIF_PICKER);
        async function Z(e) {
          let { gifSrc: i } = e;
          if (null == i || C) return;
          R(!0);
          let o = (0, T.Q)(i),
            r = await fetch(o),
            c = await r.blob();
          l(),
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
                    onCrop: I,
                    uploadType: b,
                    showUpsellHeader: B,
                    ...i,
                  });
              },
              { contextKey: A },
            );
        }
        o.useEffect(() => {
          _.default.track(p.rMx.OPEN_MODAL, {
            type: p.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: x },
          });
        }, [x]);
        let k = b === m.pC.AVATAR || b === m.pC.BANNER,
          v = (0, g.M)(!k);
        return (0, t.jsx)(s.Gt, {
          value: P,
          children: (0, t.jsxs)(a.ModalRoot, {
            "aria-labelledby": j,
            transitionState: i,
            size: a.ModalSize.SMALL,
            children: [
              B &&
                !v &&
                (0, t.jsx)(N.Z, {
                  type: b,
                  analyticsPage: x,
                  analyticsSection: p.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                  isGIF: !0,
                }),
              (0, t.jsxs)(a.ModalHeader, {
                className: h.modalHeader,
                separator: !1,
                children: [
                  (0, t.jsx)(a.FormTitle, {
                    className: h.titleCase,
                    tag: a.FormTitleTags.H1,
                    children: E.intl.string(E.t["xsC+//"]),
                  }),
                  (0, t.jsx)(a.ModalCloseButton, {
                    onClick: l,
                    className: h.modalCloseButton,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(u.Z, {
                    contentClassName: r()({ [h.gifPickerContent]: B && v }),
                    className: r()(h.gifPicker, { [h.loadingOverlay]: C }),
                    onSelectGIF: Z,
                    hideFavorites: !0,
                  }),
                  C && (0, t.jsx)(a.Spinner, { className: h.spinner }),
                ],
              }),
              B &&
                v &&
                (0, t.jsx)(f.Z, {
                  uploadType: b,
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
          return T;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(442837),
        l = n(481060),
        r = n(906732),
        a = n(48217),
        c = n(26323),
        s = n(430824),
        d = n(914010),
        u = n(709586),
        g = n(981631),
        f = n(30513),
        _ = n(388032),
        N = n(808583);
      function T(e) {
        let { analyticsSection: i, analyticsPage: n, isGIF: T, banner: p } = e,
          m = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
          E = (0, o.e7)([s.Z], () => s.Z.getGuild(m)),
          { analyticsLocations: h } = (0, r.ZP)();
        return null == E ||
          E.hasFeature(g.oNc.ANIMATED_BANNER) ||
          (!T && E.hasFeature(g.oNc.BANNER))
          ? null
          : (0, t.jsxs)("div", {
              className: N.container,
              children: [
                (0, t.jsx)(u.Z, { className: N.guildBoostingIcon }),
                (0, t.jsx)(l.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: _.intl.string(_.t["56M7xc"]),
                }),
                (0, t.jsx)(l.Button, {
                  look: l.Button.Looks.LINK,
                  color: l.Button.Colors.LINK,
                  className: N.subscribeButton,
                  onClick: () => {
                    if (null == E) return;
                    let e = {
                      section: i,
                      page: n,
                      object: g.qAy.UPSELL_HEADER,
                    };
                    null != p
                      ? (0, a.c)({
                          analyticsLocations: h,
                          analyticsLocation: e,
                          guild: E,
                          isGIF: T,
                          banner: p,
                        })
                      : (0, c.Z)({
                          analyticsLocations: h,
                          analyticsSourceLocation: e,
                          guild: E,
                          perks: T ? (0, f.zC)() : (0, f.XO)(),
                        });
                  },
                  children: _.intl.string(_.t.WUHdZW),
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
      var t = n(200651),
        o = n(192379),
        l = n(442837),
        r = n(481060),
        a = n(100527),
        c = n(906732),
        s = n(118012),
        d = n(411477),
        u = n(197115),
        g = n(594174),
        f = n(626135),
        _ = n(74538),
        N = n(981631),
        T = n(486324),
        p = n(474936),
        m = n(388032),
        E = n(639907);
      function h(e) {
        let { analyticsSection: i, type: n } = e,
          h = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
          I = _.ZP.canUseAnimatedAvatar(h),
          b = _.ZP.canUsePremiumProfileCustomization(h),
          B = (n === T.pC.BANNER && b) || (n === T.pC.AVATAR && I),
          { sourceAnalyticsLocations: x } = (0, c.ZP)(
            a.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !B &&
              f.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                type: i,
                location_stack: x,
              });
          }, [B, i, x]),
          B)
        )
          return null;
        let C = (0, t.jsx)(u.Z, {
          className: E.__invalid_getNitroLink,
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.LINK,
          subscriptionTier: p.Si.TIER_2,
          buttonText: m.intl.format(m.t["944tDg"], {}),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: i,
            object: N.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, t.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: E.nitroPreviewUpsell,
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
          return a;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(180781),
        l = n(321867),
        r = n(486324);
      function a(e) {
        let {
          type: i,
          analyticsPage: n,
          analyticsSection: a,
          isGIF: c,
          banner: s,
        } = e;
        return [r.pC.BANNER, r.pC.AVATAR].includes(i) && c
          ? (0, t.jsx)(l.Z, { analyticsSection: a, type: i })
          : i === r.pC.GUILD_BANNER
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
          return l;
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
      function l(e) {
        let i = new URL("".concat(window.location.protocol).concat(e)),
          { ASSET_ENDPOINT: n } = window.GLOBAL_ENV;
        if (null == i.pathname.match(o))
          throw Error("Unexpected Tenor GIF path.");
        let l = "".concat(t.ANM.TENOR_ASSET_PATH).concat(i.pathname);
        return "".concat(location.protocol).concat(n).concat(l);
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
        l = n.n(o),
        r = n(481060),
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
          className: l()(
            g ? s.noticeWithoutRightPadding : s.noticeWithRightPadding,
            d,
          ),
          children: [
            (0, t.jsxs)("div", {
              className: s.noticeLeft,
              children: [
                (0, t.jsx)(r.NitroWheelIcon, {
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
//# sourceMappingURL=b0e26490b975a645312c.js.map
