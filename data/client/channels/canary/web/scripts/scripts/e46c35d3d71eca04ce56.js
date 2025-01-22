"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8721"],
  {
    180781: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return p;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(442837),
        o = i(481060),
        r = i(906732),
        l = i(48217),
        s = i(26323),
        c = i(430824),
        u = i(914010),
        d = i(709586),
        f = i(981631),
        v = i(30513),
        m = i(388032),
        b = i(808583);
      function p(e) {
        let { analyticsSection: n, analyticsPage: i, isGIF: p, banner: g } = e,
          h = (0, a.e7)([u.Z], () => u.Z.getGuildId()),
          _ = (0, a.e7)([c.Z], () => c.Z.getGuild(h)),
          { analyticsLocations: x } = (0, r.ZP)();
        return null == _ ||
          _.hasFeature(f.oNc.ANIMATED_BANNER) ||
          (!p && _.hasFeature(f.oNc.BANNER))
          ? null
          : (0, t.jsxs)("div", {
              className: b.container,
              children: [
                (0, t.jsx)(d.Z, { className: b.guildBoostingIcon }),
                (0, t.jsx)(o.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: m.intl.string(m.t["56M7xc"]),
                }),
                (0, t.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.LINK,
                  className: b.subscribeButton,
                  onClick: () => {
                    if (null == _) return;
                    let e = {
                      section: n,
                      page: i,
                      object: f.qAy.UPSELL_HEADER,
                    };
                    null != g
                      ? (0, l.c)({
                          analyticsLocations: x,
                          analyticsLocation: e,
                          guild: _,
                          isGIF: p,
                          banner: g,
                        })
                      : (0, s.Z)({
                          analyticsLocations: x,
                          analyticsSourceLocation: e,
                          guild: _,
                          perks: p ? (0, v.zC)() : (0, v.XO)(),
                        });
                  },
                  children: m.intl.string(m.t.WUHdZW),
                }),
              ],
            });
      }
    },
    321867: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return x;
        },
      });
      var t = i(200651),
        a = i(192379),
        o = i(442837),
        r = i(481060),
        l = i(100527),
        s = i(906732),
        c = i(118012),
        u = i(411477),
        d = i(197115),
        f = i(594174),
        v = i(626135),
        m = i(74538),
        b = i(981631),
        p = i(486324),
        g = i(474936),
        h = i(388032),
        _ = i(639907);
      function x(e) {
        let { analyticsSection: n, type: i } = e,
          x = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
          Z = m.ZP.canUseAnimatedAvatar(x),
          I = m.ZP.canUsePremiumProfileCustomization(x),
          P = (i === p.pC.BANNER && I) || (i === p.pC.AVATAR && Z),
          { sourceAnalyticsLocations: C } = (0, s.ZP)(
            l.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (a.useEffect(() => {
            !P &&
              v.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                type: n,
                location_stack: C,
              });
          }, [P, n, C]),
          P)
        )
          return null;
        let N = (0, t.jsx)(d.Z, {
          className: _.__invalid_getNitroLink,
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.LINK,
          subscriptionTier: g.Si.TIER_2,
          buttonText: h.intl.format(h.t["944tDg"], {}),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: n,
            object: b.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, t.jsx)(u.Z, {
          reducedRightPadding: !0,
          className: _.nitroPreviewUpsell,
          text: h.intl.format(h.t.Og8039, {}),
          textSize: c.Z.Sizes.SIZE_14,
          textColor: c.Z.Colors.HEADER_PRIMARY,
          button: N,
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
      var a = i(180781),
        o = i(321867),
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
          ? (0, t.jsx)(o.Z, { analyticsSection: l, type: n })
          : n === r.pC.GUILD_BANNER
            ? (0, t.jsx)(a.Z, {
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
          return u;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(120356),
        o = i.n(a),
        r = i(481060),
        l = i(436774),
        s = i(118012),
        c = i(392842);
      function u(e) {
        let {
          text: n,
          textSize: i = s.Z.Sizes.SIZE_12,
          textColor: a = s.Z.Colors.STANDARD,
          className: u,
          button: d,
          reducedRightPadding: f = !1,
        } = e;
        return (0, t.jsxs)("div", {
          className: o()(
            f ? c.noticeWithoutRightPadding : c.noticeWithRightPadding,
            u,
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
                  color: a,
                  children: n,
                }),
              ],
            }),
            d,
          ],
        });
      }
    },
    445924: function (e, n, i) {
      var t = i(200651);
      i(192379);
      var a = i(481060),
        o = i(388032);
      n.Z = (e) => {
        let {
          onChangeAvatar: n,
          onChangeAvatarDecoration: i,
          onClose: r,
          className: l,
        } = e;
        return (0, t.jsxs)(a.Menu, {
          className: l,
          onClose: r,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": o.intl.string(o.t.ldIeAQ),
          children: [
            (0, t.jsx)(a.MenuItem, {
              id: "change-avatar",
              action: n,
              label: o.intl.string(o.t["4OynCA"]),
            }),
            (0, t.jsx)(a.MenuItem, {
              id: "change-avatar-decoration",
              action: i,
              label: o.intl.string(o.t["Tna/TU"]),
            }),
          ],
        });
      };
    },
    921813: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return Z;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(120356),
        o = i.n(a),
        r = i(481060),
        l = i(680295),
        s = i(687158),
        c = i(576635),
        u = i(518950),
        d = i(502762),
        f = i(4517),
        v = i(150039),
        m = i(450734),
        b = i(225089),
        p = i(853726),
        g = i(165747),
        h = i(981631),
        _ = i(228168),
        x = i(154960);
      function Z(e) {
        let {
            user: n,
            guild: i,
            canUsePremiumCustomization: a,
            onUpsellClick: Z,
            pendingBanner: I,
            pendingBio: P,
            pendingPronouns: C,
            pendingAvatar: N,
            pendingAvatarDecoration: y,
            pendingNickname: A,
            pendingGlobalName: j,
            pendingThemeColors: E,
            pendingProfileEffectId: B,
            avatarClassName: T,
            containerClassName: k,
            isTryItOutFlow: R = !1,
            disabledInputs: w = !1,
            hideCustomStatus: S = !1,
            hideBioSection: U = !1,
            hideMessageInput: L = !0,
            hideExampleButton: z = !1,
          } = e,
          D = (0, s.ZP)(n.id, null == i ? void 0 : i.id),
          { avatarSrc: M, avatarDecorationSrc: W } = (0, u.Z)({
            user: n,
            guildId: null == i ? void 0 : i.id,
            avatarDecorationOverride: y,
            avatarOverride: N,
            size: r.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          O = (0, v.ZT)({ pendingProfileEffectId: B, displayProfile: D }),
          { theme: F, primaryColor: G } = (0, c.Z)({
            user: n,
            displayProfile: D,
            pendingThemeColors: E,
            isPreview: a,
          });
        return (0, t.jsxs)(d.Z, {
          user: n,
          displayProfile: D,
          profileType: _.y0.BITE_SIZE,
          pendingThemeColors: E,
          className: o()(x.container, k),
          forceShowPremium: a,
          children: [
            (0, t.jsxs)("header", {
              className: x.header,
              children: [
                (0, t.jsx)(b.Z, {
                  user: n,
                  displayProfile: D,
                  guildId: null == i ? void 0 : i.id,
                  canUsePremiumCustomization: a,
                  pendingBanner: I,
                  isTryItOutFlow: R,
                  disabledInputs: w,
                  onUpsellClick: () =>
                    null == Z
                      ? void 0
                      : Z({ object: h.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, t.jsx)(m.Z, {
                  user: n,
                  guild: i,
                  displayProfile: D,
                  canUsePremiumCustomization: a,
                  previewAvatar: M,
                  previewAvatarDecoration: W,
                  previewTheme: F,
                  previewPrimaryColor: G,
                  className: T,
                  disabledInputs: w,
                  isTryItOutFlow: R,
                  onUpsellClick: () =>
                    null == Z ? void 0 : Z({ object: h.qAy.AVATAR }),
                }),
                !S &&
                  (0, t.jsx)(f.Z, {
                    location: "ProfileCustomizationPreview",
                    user: n,
                    profileType: _.y0.BITE_SIZE,
                  }),
              ],
            }),
            (0, t.jsx)(p.Z, {
              user: n,
              displayProfile: D,
              guild: i,
              pendingAvatar: N,
              pendingNickname: A,
              pendingGlobalName: j,
              pendingBio: P,
              pendingPronouns: C,
              isTryItOutFlow: R,
              hideBioSection: U,
            }),
            (0, t.jsx)(g.Z, {
              user: n,
              hideMessageInput: L,
              hideExampleButton: z,
            }),
            null != O && (0, t.jsx)(l.Z, { profileEffectId: O }),
          ],
        });
      }
    },
    450734: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return g;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(120356),
        o = i.n(a),
        r = i(442837),
        l = i(481060),
        s = i(906732),
        c = i(1585),
        u = i(158776),
        d = i(998502),
        f = i(445924),
        v = i(654904),
        m = i(486324),
        b = i(776458);
      let p = d.ZP.getEnableHardwareAcceleration()
        ? l.AnimatedAvatar
        : l.Avatar;
      function g(e) {
        let {
            user: n,
            guild: i,
            displayProfile: a,
            canUsePremiumCustomization: d,
            previewAvatar: g,
            previewAvatarDecoration: h,
            previewTheme: _,
            previewPrimaryColor: x,
            className: Z,
            disabledInputs: I,
            isTryItOutFlow: P,
            onUpsellClick: C,
          } = e,
          { analyticsLocations: N } = (0, s.ZP)(),
          y = (0, r.e7)([u.Z], () => u.Z.getStatus(n.id)),
          A =
            null == i ||
            (null == a ? void 0 : a.canUsePremiumProfileCustomization) ||
            d,
          j = (0, t.jsx)(p, {
            src: g,
            avatarDecoration: h,
            imageClassName: o()(Z, { [b.overlay]: !I }),
            size: l.AvatarSizes.SIZE_80,
            "aria-label": n.username,
            status: y,
            statusTooltip: !1,
            statusBackdropColor:
              null != x ? (0, l.getStatusBackdropColor)(_) : void 0,
          });
        return I
          ? (0, t.jsx)("div", { className: b.avatar, children: j })
          : A
            ? (0, t.jsx)(l.Popout, {
                renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, t.jsx)(f.Z, {
                    className: b.menu,
                    onClose: n,
                    onChangeAvatar: () =>
                      (0, v.$r)(m.pC.AVATAR, null == i ? void 0 : i.id, P),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == i ? void 0 : i,
                        analyticsLocations: N,
                        isTryItOutFlow: P,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, t.jsxs)(l.Clickable, {
                    ...e,
                    className: o()(b.avatar, b.clickable),
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
                className: o()(b.avatar, b.clickable),
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
    225089: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return f;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(481060),
        o = i(222062),
        r = i(867176),
        l = i(654904),
        s = i(486324),
        c = i(228168),
        u = i(388032),
        d = i(93428);
      function f(e) {
        let {
            user: n,
            displayProfile: i,
            guildId: f,
            canUsePremiumCustomization: v,
            pendingBanner: m,
            isTryItOutFlow: b,
            disabledInputs: p,
            onUpsellClick: g,
          } = e,
          h =
            v ||
            (null == i ? void 0 : i.canUsePremiumProfileCustomization) ||
            !1,
          _ = h ? a.PencilIcon : a.NitroWheelIcon,
          x = (0, o.M)(h);
        return (0, t.jsx)(r.Z, {
          user: n,
          displayProfile: i,
          guildId: f,
          profileType: c.y0.BITE_SIZE,
          pendingBanner: m,
          canUsePremiumProfileCustomization: v,
          children:
            !p &&
            (0, t.jsxs)(a.Clickable, {
              onClick: () => {
                if (!h && !x) {
                  null == g || g();
                  return;
                }
                (0, l.$r)(s.pC.BANNER, f, b);
              },
              className: d.clickable,
              children: [
                (0, t.jsx)(_, { size: "xs", color: "white" }),
                (0, t.jsx)(a.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    h || x
                      ? u.intl.string(u.t.N0bC3N)
                      : u.intl.string(u.t.O1sT5u),
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return m;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(442837),
        o = i(648052),
        r = i(530),
        l = i(420654),
        s = i(116854),
        c = i(271383),
        u = i(246946),
        d = i(654904),
        f = i(228168),
        v = i(591156);
      function m(e) {
        var n;
        let {
            user: i,
            displayProfile: m,
            guild: b,
            pendingAvatar: p,
            pendingNickname: g,
            pendingGlobalName: h,
            pendingBio: _,
            pendingPronouns: x,
            isTryItOutFlow: Z,
            hideBioSection: I,
          } = e,
          P = (0, a.e7)([c.ZP], () =>
            null == b ? null : c.ZP.getMember(b.id, i.id),
          ),
          C = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation),
          N =
            null == m
              ? void 0
              : null === (n = m.getPreviewBio(_)) || void 0 === n
                ? void 0
                : n.value,
          y = null != x ? x : null == m ? void 0 : m.pronouns,
          A = (0, d.Ly)({
            pendingNickname: g,
            pendingGlobalName: h,
            user: i,
            guildMember: P,
          });
        return (0, t.jsxs)("div", {
          inert: "",
          className: v.body,
          children: [
            (0, t.jsx)(r.Z, {
              user: i,
              profileType: f.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != P)) return;
                if (null !== p && !!(null != P.avatar || null != p))
                  return (0, t.jsx)(s.Z, { user: i, nickname: A });
              })(),
              nickname: A,
              pronouns: y,
              isTryItOut: Z,
              tags: (0, t.jsx)(o.Z, {
                displayProfile: m,
                profileType: f.y0.BITE_SIZE,
              }),
            }),
            !I &&
              null != N &&
              "" !== N &&
              (0, t.jsx)(l.Z, {
                user: i,
                bio: N,
                hidePersonalInformation: C,
                viewFullBioDisabled: !0,
              }),
          ],
        });
      }
    },
    165747: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(475413),
        o = i(955418),
        r = i(388032),
        l = i(591156);
      function s(e) {
        let { user: n, hideMessageInput: i, hideExampleButton: s } = e;
        return i
          ? (0, t.jsx)("footer", {
              className: l.footer,
              children:
                !s &&
                (0, t.jsx)(a.tG, {
                  text: r.intl.string(r.t.hZkfwc),
                  fullWidth: !0,
                }),
            })
          : (0, t.jsx)("footer", {
              inert: "",
              className: l.footer,
              children: (0, t.jsx)(o.Z, { user: n }),
            });
      }
    },
    63059: function (e, n, i) {
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
    808583: function (e, n, i) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    639907: function (e, n, i) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    173318: function (e, n, i) {
      e.exports = { container: "container_e62679" };
    },
    392842: function (e, n, i) {
      e.exports = {
        noticeWithoutRightPadding:
          "noticeWithoutRightPadding_f97380 notice_f97380",
        noticeWithRightPadding: "noticeWithRightPadding_f97380 notice_f97380",
        noticeLeft: "noticeLeft_f97380",
        icon: "icon_f97380",
        text: "text_f97380",
      };
    },
    761346: function (e, n, i) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    154960: function (e, n, i) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    776458: function (e, n, i) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    93428: function (e, n, i) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=e46c35d3d71eca04ce56.js.map
