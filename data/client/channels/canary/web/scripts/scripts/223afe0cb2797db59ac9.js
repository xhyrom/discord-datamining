"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90405"],
  {
    269128: function (e, i, n) {
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(772848),
        l = n(363969);
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
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(297700),
        l = n(471885),
        s = n(981631),
        c = n(201950);
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
          return f;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(481060),
        r = n(269128),
        a = n(358555),
        l = n(267642),
        s = n(26323),
        c = n(30513),
        d = n(981631),
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
      function f(e) {
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
          return T;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(442837),
        l = n(481060),
        s = n(540059),
        c = n(666188),
        d = n(372769),
        u = n(523751),
        g = n(623624),
        h = n(290034),
        f = n(271383),
        b = n(594174),
        m = n(267642),
        p = n(981631),
        v = n(388032),
        _ = n(70172);
      function x(e) {
        let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
          r = (0, a.e7)([b.default, f.ZP], () => {
            let e = b.default.getCurrentUser();
            return f.ZP.isMember(i.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: s, premiumSubscriberCount: c } = i;
        if (0 === c && s === p.Eu4.NONE) return null;
        let d = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              r &&
                !o &&
                (0, g.f)({
                  guildId: i.id,
                  location: {
                    section: p.jXE.GUILD_HEADER,
                    object: p.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          u = s === p.Eu4.NONE ? v.intl.string(v.t.c2wsn5) : m.nW(s),
          x = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", { className: _.tierTooltipTitle, children: u }),
              (0, t.jsx)("div", {
                children: v.intl.format(v.t.If4iTU, { subscriberCount: c }),
              }),
            ],
          });
        return (0, t.jsx)("div", {
          className: _.guildIconContainer,
          children: (0, t.jsx)(l.Tooltip, {
            text: x,
            position: "bottom",
            "aria-label": null != u ? u : "",
            children: (e) =>
              (0, t.jsx)(l.Clickable, {
                ...e,
                className: _.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, t.jsx)(h.Z, {
                  premiumTier: s,
                  iconBackgroundClassName: n
                    ? _.boostedGuildTierIconBackgroundWithVisibleBanner
                    : _.guildBadgeIcon,
                  iconClassName:
                    n && s !== p.Eu4.TIER_3
                      ? _.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function I(e) {
        let { guild: i, disableColor: n, disableBoostClick: o } = e;
        return (0, c.Z)(i)
          ? (0, t.jsx)("div", {
              className: _.guildIconV2Container,
              children: (0, t.jsx)(u.Z, {
                guild: i,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(_.guildBadge, { [_.disableColor]: n }),
                disableBoostClick: o,
              }),
            })
          : (0, t.jsx)("div", {
              className: _.guildIconContainer,
              children: (0, t.jsx)(d.Z, {
                guild: i,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: r()(_.guildBadge, { [_.disableColor]: n }),
              }),
            });
      }
      function T(e) {
        let { guild: i, disableBoostClick: n, ...o } = e,
          r = !(0, s.Q3)("GuildHeaderGuildBadge") && o.isBannerVisible;
        return (0, c.Z)(i)
          ? (0, t.jsx)(I, { guild: i, disableColor: !1, disableBoostClick: n })
          : i.hasFeature(p.oNc.VERIFIED) || i.hasFeature(p.oNc.PARTNERED)
            ? (0, t.jsx)(I, { guild: i, disableColor: !r })
            : (0, t.jsx)(x, {
                guild: i,
                isBannerVisible: r,
                disableBoostClick: n,
              });
      }
    },
    180781: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return m;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(442837),
        r = n(481060),
        a = n(906732),
        l = n(48217),
        s = n(26323),
        c = n(430824),
        d = n(914010),
        u = n(709586),
        g = n(981631),
        h = n(30513),
        f = n(388032),
        b = n(808583);
      function m(e) {
        let { analyticsSection: i, analyticsPage: n, isGIF: m, banner: p } = e,
          v = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
          _ = (0, o.e7)([c.Z], () => c.Z.getGuild(v)),
          { analyticsLocations: x } = (0, a.ZP)();
        return null == _ ||
          _.hasFeature(g.oNc.ANIMATED_BANNER) ||
          (!m && _.hasFeature(g.oNc.BANNER))
          ? null
          : (0, t.jsxs)("div", {
              className: b.container,
              children: [
                (0, t.jsx)(u.Z, { className: b.guildBoostingIcon }),
                (0, t.jsx)(r.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: f.intl.string(f.t["56M7xc"]),
                }),
                (0, t.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.LINK,
                  className: b.subscribeButton,
                  onClick: () => {
                    if (null == _) return;
                    let e = {
                      section: i,
                      page: n,
                      object: g.qAy.UPSELL_HEADER,
                    };
                    null != p
                      ? (0, l.c)({
                          analyticsLocations: x,
                          analyticsLocation: e,
                          guild: _,
                          isGIF: m,
                          banner: p,
                        })
                      : (0, s.Z)({
                          analyticsLocations: x,
                          analyticsSourceLocation: e,
                          guild: _,
                          perks: m ? (0, h.zC)() : (0, h.XO)(),
                        });
                  },
                  children: f.intl.string(f.t.WUHdZW),
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
        a = n(481060),
        l = n(100527),
        s = n(906732),
        c = n(118012),
        d = n(411477),
        u = n(197115),
        g = n(594174),
        h = n(626135),
        f = n(74538),
        b = n(981631),
        m = n(486324),
        p = n(474936),
        v = n(388032),
        _ = n(639907);
      function x(e) {
        let { analyticsSection: i, type: n } = e,
          x = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
          I = f.ZP.canUseAnimatedAvatar(x),
          T = f.ZP.canUsePremiumProfileCustomization(x),
          N = (n === m.pC.BANNER && T) || (n === m.pC.AVATAR && I),
          { sourceAnalyticsLocations: C } = (0, s.ZP)(
            l.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !N &&
              h.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                type: i,
                location_stack: C,
              });
          }, [N, i, C]),
          N)
        )
          return null;
        let Z = (0, t.jsx)(u.Z, {
          className: _.__invalid_getNitroLink,
          size: a.Button.Sizes.SMALL,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.LINK,
          subscriptionTier: p.Si.TIER_2,
          buttonText: v.intl.format(v.t["944tDg"], {}),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: i,
            object: b.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, t.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: _.nitroPreviewUpsell,
          text: v.intl.format(v.t.Og8039, {}),
          textSize: c.Z.Sizes.SIZE_14,
          textColor: c.Z.Colors.HEADER_PRIMARY,
          button: Z,
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
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(481060),
        l = n(436774),
        s = n(118012),
        c = n(392842);
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
    445924: function (e, i, n) {
      var t = n(200651);
      n(192379);
      var o = n(481060),
        r = n(388032);
      i.Z = (e) => {
        let {
          onChangeAvatar: i,
          onChangeAvatarDecoration: n,
          onClose: a,
          className: l,
        } = e;
        return (0, t.jsxs)(o.Menu, {
          className: l,
          onClose: a,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": r.intl.string(r.t.ldIeAQ),
          children: [
            (0, t.jsx)(o.MenuItem, {
              id: "change-avatar",
              action: i,
              label: r.intl.string(r.t["4OynCA"]),
            }),
            (0, t.jsx)(o.MenuItem, {
              id: "change-avatar-decoration",
              action: n,
              label: r.intl.string(r.t["Tna/TU"]),
            }),
          ],
        });
      };
    },
    921813: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return I;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(481060),
        l = n(680295),
        s = n(687158),
        c = n(576635),
        d = n(518950),
        u = n(502762),
        g = n(4517),
        h = n(150039),
        f = n(450734),
        b = n(225089),
        m = n(853726),
        p = n(165747),
        v = n(981631),
        _ = n(228168),
        x = n(154960);
      function I(e) {
        let {
            user: i,
            guild: n,
            canUsePremiumCustomization: o,
            onUpsellClick: I,
            pendingBanner: T,
            pendingBio: N,
            pendingPronouns: C,
            pendingAvatar: Z,
            pendingAvatarDecoration: E,
            pendingNickname: B,
            pendingGlobalName: j,
            pendingThemeColors: P,
            pendingProfileEffectId: A,
            avatarClassName: k,
            containerClassName: y,
            isTryItOutFlow: w = !1,
            disabledInputs: R = !1,
            hideCustomStatus: S = !1,
            hideBioSection: U = !1,
            hideMessageInput: M = !0,
            hideExampleButton: L = !1,
          } = e,
          O = (0, s.ZP)(i.id, null == n ? void 0 : n.id),
          { avatarSrc: z, avatarDecorationSrc: D } = (0, d.Z)({
            user: i,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: E,
            avatarOverride: Z,
            size: a.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          W = (0, h.ZT)({ pendingProfileEffectId: A, displayProfile: O }),
          { theme: G, primaryColor: H } = (0, c.Z)({
            user: i,
            displayProfile: O,
            pendingThemeColors: P,
            isPreview: o,
          });
        return (0, t.jsxs)(u.Z, {
          user: i,
          displayProfile: O,
          profileType: _.y0.BITE_SIZE,
          pendingThemeColors: P,
          className: r()(x.container, y),
          forceShowPremium: o,
          children: [
            (0, t.jsxs)("header", {
              className: x.header,
              children: [
                (0, t.jsx)(b.Z, {
                  user: i,
                  displayProfile: O,
                  guildId: null == n ? void 0 : n.id,
                  canUsePremiumCustomization: o,
                  pendingBanner: T,
                  isTryItOutFlow: w,
                  disabledInputs: R,
                  onUpsellClick: () =>
                    null == I
                      ? void 0
                      : I({ object: v.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, t.jsx)(f.Z, {
                  user: i,
                  guild: n,
                  displayProfile: O,
                  canUsePremiumCustomization: o,
                  previewAvatar: z,
                  previewAvatarDecoration: D,
                  previewTheme: G,
                  previewPrimaryColor: H,
                  className: k,
                  disabledInputs: R,
                  isTryItOutFlow: w,
                  onUpsellClick: () =>
                    null == I ? void 0 : I({ object: v.qAy.AVATAR }),
                }),
                !S &&
                  (0, t.jsx)(g.Z, {
                    location: "ProfileCustomizationPreview",
                    user: i,
                    profileType: _.y0.BITE_SIZE,
                  }),
              ],
            }),
            (0, t.jsx)(m.Z, {
              user: i,
              displayProfile: O,
              guild: n,
              pendingAvatar: Z,
              pendingNickname: B,
              pendingGlobalName: j,
              pendingBio: N,
              pendingPronouns: C,
              isTryItOutFlow: w,
              hideBioSection: U,
            }),
            (0, t.jsx)(p.Z, {
              user: i,
              hideMessageInput: M,
              hideExampleButton: L,
            }),
            null != W && (0, t.jsx)(l.Z, { profileEffectId: W }),
          ],
        });
      }
    },
    450734: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return p;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(442837),
        l = n(481060),
        s = n(906732),
        c = n(1585),
        d = n(158776),
        u = n(998502),
        g = n(445924),
        h = n(654904),
        f = n(486324),
        b = n(776458);
      let m = u.ZP.getEnableHardwareAcceleration()
        ? l.AnimatedAvatar
        : l.Avatar;
      function p(e) {
        let {
            user: i,
            guild: n,
            displayProfile: o,
            canUsePremiumCustomization: u,
            previewAvatar: p,
            previewAvatarDecoration: v,
            previewTheme: _,
            previewPrimaryColor: x,
            className: I,
            disabledInputs: T,
            isTryItOutFlow: N,
            onUpsellClick: C,
          } = e,
          { analyticsLocations: Z } = (0, s.ZP)(),
          E = (0, a.e7)([d.Z], () => d.Z.getStatus(i.id)),
          B =
            null == n ||
            (null == o ? void 0 : o.canUsePremiumProfileCustomization) ||
            u,
          j = (0, t.jsx)(m, {
            src: p,
            avatarDecoration: v,
            imageClassName: r()(I, { [b.overlay]: !T }),
            size: l.AvatarSizes.SIZE_80,
            "aria-label": i.username,
            status: E,
            statusTooltip: !1,
            statusBackdropColor:
              null != x ? (0, l.getStatusBackdropColor)(_) : void 0,
          });
        return T
          ? (0, t.jsx)("div", { className: b.avatar, children: j })
          : B
            ? (0, t.jsx)(l.Popout, {
                renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, t.jsx)(g.Z, {
                    className: b.menu,
                    onClose: i,
                    onChangeAvatar: () =>
                      (0, h.$r)(f.pC.AVATAR, null == n ? void 0 : n.id, N),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == n ? void 0 : n,
                        analyticsLocations: Z,
                        isTryItOutFlow: N,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, t.jsxs)(l.Clickable, {
                    ...e,
                    className: r()(b.avatar, b.clickable),
                    children: [
                      j,
                      (0, t.jsx)(l.PencilIcon, {
                        size: "custom",
                        className: b.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, t.jsxs)(l.Clickable, {
                onClick: C,
                className: r()(b.avatar, b.clickable),
                children: [
                  j,
                  (0, t.jsx)(l.NitroWheelIcon, {
                    size: "custom",
                    className: b.overlayIcon,
                    width: 20,
                    height: 20,
                    color: "white",
                  }),
                ],
              });
      }
    },
    225089: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return g;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(481060),
        r = n(222062),
        a = n(867176),
        l = n(654904),
        s = n(486324),
        c = n(228168),
        d = n(388032),
        u = n(93428);
      function g(e) {
        let {
            user: i,
            displayProfile: n,
            guildId: g,
            canUsePremiumCustomization: h,
            pendingBanner: f,
            isTryItOutFlow: b,
            disabledInputs: m,
            onUpsellClick: p,
          } = e,
          v =
            h ||
            (null == n ? void 0 : n.canUsePremiumProfileCustomization) ||
            !1,
          _ = v ? o.PencilIcon : o.NitroWheelIcon,
          x = (0, r.M)(v);
        return (0, t.jsx)(a.Z, {
          user: i,
          displayProfile: n,
          guildId: g,
          profileType: c.y0.BITE_SIZE,
          pendingBanner: f,
          canUsePremiumProfileCustomization: h,
          children:
            !m &&
            (0, t.jsxs)(o.Clickable, {
              onClick: () => {
                if (!v && !x) {
                  null == p || p();
                  return;
                }
                (0, l.$r)(s.pC.BANNER, g, b);
              },
              className: u.clickable,
              children: [
                (0, t.jsx)(_, { size: "xs", color: "white" }),
                (0, t.jsx)(o.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    v || x
                      ? d.intl.string(d.t.N0bC3N)
                      : d.intl.string(d.t.O1sT5u),
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return f;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(442837),
        r = n(648052),
        a = n(530),
        l = n(420654),
        s = n(116854),
        c = n(271383),
        d = n(246946),
        u = n(654904),
        g = n(228168),
        h = n(591156);
      function f(e) {
        var i;
        let {
            user: n,
            displayProfile: f,
            guild: b,
            pendingAvatar: m,
            pendingNickname: p,
            pendingGlobalName: v,
            pendingBio: _,
            pendingPronouns: x,
            isTryItOutFlow: I,
            hideBioSection: T,
          } = e,
          N = (0, o.e7)([c.ZP], () =>
            null == b ? null : c.ZP.getMember(b.id, n.id),
          ),
          C = (0, o.e7)([d.Z], () => d.Z.hidePersonalInformation),
          Z =
            null == f
              ? void 0
              : null === (i = f.getPreviewBio(_)) || void 0 === i
                ? void 0
                : i.value,
          E = null != x ? x : null == f ? void 0 : f.pronouns,
          B = (0, u.Ly)({
            pendingNickname: p,
            pendingGlobalName: v,
            user: n,
            guildMember: N,
          });
        return (0, t.jsxs)("div", {
          inert: "",
          className: h.body,
          children: [
            (0, t.jsx)(a.Z, {
              user: n,
              profileType: g.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != N)) return;
                if (null !== m && !!(null != N.avatar || null != m))
                  return (0, t.jsx)(s.Z, { user: n, nickname: B });
              })(),
              nickname: B,
              pronouns: E,
              isTryItOut: I,
              tags: (0, t.jsx)(r.Z, {
                displayProfile: f,
                profileType: g.y0.BITE_SIZE,
              }),
            }),
            !T &&
              null != Z &&
              "" !== Z &&
              (0, t.jsx)(l.Z, {
                user: n,
                bio: Z,
                hidePersonalInformation: C,
                viewFullBioDisabled: !0,
              }),
          ],
        });
      }
    },
    165747: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return s;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(475413),
        r = n(955418),
        a = n(388032),
        l = n(591156);
      function s(e) {
        let { user: i, hideMessageInput: n, hideExampleButton: s } = e;
        return n
          ? (0, t.jsx)("footer", {
              className: l.footer,
              children:
                !s &&
                (0, t.jsx)(o.tG, {
                  text: a.intl.string(a.t.hZkfwc),
                  fullWidth: !0,
                }),
            })
          : (0, t.jsx)("footer", {
              inert: "",
              className: l.footer,
              children: (0, t.jsx)(r.Z, { user: i }),
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
    173318: function (e, i, n) {
      e.exports = { container: "container_e62679" };
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
    761346: function (e, i, n) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    154960: function (e, i, n) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    776458: function (e, i, n) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    93428: function (e, i, n) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=223afe0cb2797db59ac9.js.map
