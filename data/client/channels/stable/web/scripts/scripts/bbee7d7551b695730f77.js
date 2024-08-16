"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12736"],
  {
    445924: function (e, i, n) {
      var a = n(735250);
      n(470079);
      var o = n(481060),
        r = n(689938);
      i.Z = (e) => {
        let {
          onChangeAvatar: i,
          onChangeAvatarDecoration: n,
          onClose: s,
          className: t,
        } = e;
        return (0, a.jsxs)(o.Menu, {
          className: t,
          onClose: s,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": r.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
          children: [
            (0, a.jsx)(o.MenuItem, {
              id: "change-avatar",
              action: i,
              label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR,
            }),
            (0, a.jsx)(o.MenuItem, {
              id: "change-avatar-decoration",
              action: n,
              label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION,
            }),
          ],
        });
      };
    },
    921813: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return T;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(481060),
        r = n(680295),
        s = n(481046),
        t = n(318661),
        l = n(721987),
        c = n(438163),
        u = n(502762),
        d = n(204197),
        f = n(654904),
        m = n(450734),
        v = n(225089),
        p = n(853726),
        I = n(165747),
        E = n(981631),
        A = n(228168),
        _ = n(60638);
      function T(e) {
        let {
            user: i,
            guild: n,
            canUsePremiumCustomization: T,
            onUpsellClick: h,
            pendingBanner: P,
            pendingBio: Z,
            pendingPronouns: x,
            pendingAvatar: N,
            pendingAvatarDecoration: S,
            pendingNickname: g,
            pendingGlobalName: b,
            pendingThemeColors: j,
            pendingProfileEffectId: C,
            avatarClassName: R,
            isTryItOutFlow: y = !1,
            disabledInputs: M = !1,
            hideCustomStatus: B = !1,
            hideBioSection: k = !1,
            hideMessageInput: w = !0,
            hideExampleButton: U = !1,
          } = e,
          z = (0, t.ZP)(i.id, null == n ? void 0 : n.id),
          { avatarSrc: L, avatarDecorationSrc: O } = (0, d.Z)({
            user: i,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: S,
            avatarOverride: N,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          V = (0, f.ZT)({ pendingProfileEffectId: C, displayProfile: z }),
          { theme: D, primaryColor: G } = (0, l.Z)({
            user: i,
            displayProfile: z,
            pendingThemeColors: j,
            isPreview: T,
          }),
          { accountPopoutStatusEditEnabled: W, profileStatusEditEnabled: F } =
            (0, s.K)({
              location: "ProfileCustomizationPreview",
              autoTrackExposure: !B,
            });
        return (0, a.jsxs)(u.Z, {
          user: i,
          displayProfile: z,
          profileType: A.y0.BITE_SIZE,
          pendingThemeColors: j,
          pendingProfileEffectId: V,
          className: _.container,
          forceShowPremium: T,
          children: [
            (0, a.jsxs)("header", {
              className: _.header,
              children: [
                (0, a.jsx)(v.Z, {
                  user: i,
                  displayProfile: z,
                  guildId: null == n ? void 0 : n.id,
                  canUsePremiumCustomization: T,
                  pendingBanner: P,
                  hasProfileEffect: null != V,
                  isTryItOutFlow: y,
                  disabledInputs: M,
                  onUpsellClick: () =>
                    null == h
                      ? void 0
                      : h({ object: E.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, a.jsx)(m.Z, {
                  user: i,
                  guild: n,
                  displayProfile: z,
                  canUsePremiumCustomization: T,
                  previewAvatar: L,
                  previewAvatarDecoration: O,
                  previewTheme: D,
                  previewPrimaryColor: G,
                  className: R,
                  disabledInputs: M,
                  isTryItOutFlow: y,
                  onUpsellClick: () =>
                    null == h ? void 0 : h({ object: E.qAy.AVATAR }),
                }),
                !B &&
                  (0, a.jsx)(c.Z, {
                    user: i,
                    profileType: A.y0.BITE_SIZE,
                    editEnabled: W || F,
                  }),
              ],
            }),
            (0, a.jsx)(p.Z, {
              user: i,
              displayProfile: z,
              guild: n,
              pendingAvatar: N,
              pendingNickname: g,
              pendingGlobalName: b,
              pendingBio: Z,
              pendingPronouns: x,
              isTryItOutFlow: y,
              hideBioSection: k,
            }),
            (0, a.jsx)(I.Z, {
              user: i,
              hideMessageInput: w,
              hideExampleButton: U,
            }),
            null != V && (0, a.jsx)(r.Z, { profileEffectId: V }),
          ],
        });
      }
    },
    450734: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return E;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(120356),
        r = n.n(o),
        s = n(442837),
        t = n(481060),
        l = n(906732),
        c = n(1585),
        u = n(158776),
        d = n(998502),
        f = n(445924),
        m = n(654904),
        v = n(486324),
        p = n(651058);
      let I = d.ZP.getEnableHardwareAcceleration()
        ? t.AnimatedAvatar
        : t.Avatar;
      function E(e) {
        let {
            user: i,
            guild: n,
            displayProfile: o,
            canUsePremiumCustomization: d,
            previewAvatar: E,
            previewAvatarDecoration: A,
            previewTheme: _,
            previewPrimaryColor: T,
            className: h,
            disabledInputs: P,
            isTryItOutFlow: Z,
            onUpsellClick: x,
          } = e,
          { analyticsLocations: N } = (0, l.ZP)(),
          S = (0, s.e7)([u.Z], () => u.Z.getStatus(i.id)),
          g =
            null == n ||
            (null == o ? void 0 : o.canUsePremiumProfileCustomization) ||
            d,
          b = (0, a.jsx)(I, {
            src: E,
            avatarDecoration: A,
            imageClassName: r()(h, { [p.overlay]: !P }),
            size: t.AvatarSizes.SIZE_80,
            "aria-label": i.username,
            status: S,
            statusTooltip: !1,
            statusBackdropColor:
              null != T ? (0, t.getStatusBackdropColor)(_) : void 0,
          });
        return P
          ? (0, a.jsx)("div", { className: p.avatar, children: b })
          : g
            ? (0, a.jsx)(t.Popout, {
                renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, a.jsx)(f.Z, {
                    className: p.menu,
                    onClose: i,
                    onChangeAvatar: () =>
                      (0, m.$r)(v.pC.AVATAR, null == n ? void 0 : n.id, Z),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == n ? void 0 : n,
                        analyticsLocations: N,
                        isTryItOutFlow: Z,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, a.jsxs)(t.Clickable, {
                    ...e,
                    className: r()(p.avatar, p.clickable),
                    children: [
                      b,
                      (0, a.jsx)(t.PencilIcon, {
                        size: "custom",
                        className: p.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, a.jsxs)(t.Clickable, {
                onClick: x,
                className: r()(p.avatar, p.clickable),
                children: [
                  b,
                  (0, a.jsx)(t.NitroWheelIcon, {
                    size: "custom",
                    className: p.overlayIcon,
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
          return d;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(481060),
        r = n(78675),
        s = n(654904),
        t = n(486324),
        l = n(228168),
        c = n(689938),
        u = n(360247);
      function d(e) {
        let {
            user: i,
            displayProfile: n,
            guildId: d,
            canUsePremiumCustomization: f,
            pendingBanner: m,
            hasProfileEffect: v,
            isTryItOutFlow: p,
            disabledInputs: I,
            onUpsellClick: E,
          } = e,
          A =
            f ||
            (null == n ? void 0 : n.canUsePremiumProfileCustomization) ||
            !1,
          _ = A ? o.PencilIcon : o.NitroWheelIcon;
        return (0, a.jsx)(r.Z, {
          user: i,
          displayProfile: n,
          guildId: d,
          profileType: l.y0.BITE_SIZE,
          pendingBanner: m,
          hasProfileEffect: v,
          canUsePremiumCustomization: f,
          children:
            !I &&
            (0, a.jsxs)(o.Clickable, {
              onClick: () => {
                if (!A) {
                  null == E || E();
                  return;
                }
                (0, s.$r)(t.pC.BANNER, d, p);
              },
              className: u.clickable,
              children: [
                (0, a.jsx)(_, { size: "xs", color: "white" }),
                (0, a.jsx)(o.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children: A
                    ? c.Z.Messages.CHANGE_BANNER
                    : c.Z.Messages.USER_SETTINGS_UNLOCK_BANNER,
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return I;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(442837),
        r = n(954138),
        s = n(979264),
        t = n(741308),
        l = n(530),
        c = n(790711),
        u = n(67152),
        d = n(271383),
        f = n(246946),
        m = n(654904),
        v = n(228168),
        p = n(122269);
      function I(e) {
        var i;
        let {
            user: n,
            displayProfile: I,
            guild: E,
            pendingAvatar: A,
            pendingNickname: _,
            pendingGlobalName: T,
            pendingBio: h,
            pendingPronouns: P,
            isTryItOutFlow: Z,
            hideBioSection: x,
          } = e,
          N = (0, o.e7)([d.ZP], () =>
            null == E ? null : d.ZP.getMember(E.id, n.id),
          ),
          S = (0, o.e7)([f.Z], () => f.Z.hidePersonalInformation),
          g = (0, r.Z)("ProfileCustomizationPreviewBody"),
          b =
            null == I
              ? void 0
              : null === (i = I.getPreviewBio(h)) || void 0 === i
                ? void 0
                : i.value,
          j = null != P ? P : null == I ? void 0 : I.pronouns,
          C = (0, m.Ly)({
            pendingNickname: _,
            pendingGlobalName: T,
            user: n,
            guildMember: N,
          });
        return (0, a.jsxs)("div", {
          inert: "",
          className: p.body,
          children: [
            (0, a.jsx)(l.Z, {
              user: n,
              profileType: v.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != N)) return;
                if (null !== A && !!(null != N.avatar || null != A))
                  return (0, a.jsx)(c.Z, { user: n, nickname: C });
              })(),
              nickname: C,
              pronouns: j,
              isTryItOut: Z,
              tags: (0, a.jsx)(t.Z, {
                displayProfile: I,
                profileType: v.y0.BITE_SIZE,
              }),
            }),
            g && (0, a.jsx)(s.ZP, { userId: n.id, inline: !1 }),
            !x &&
              null != b &&
              "" !== b &&
              (0, a.jsx)(u.Z, { user: n, bio: b, hidePersonalInformation: S }),
          ],
        });
      }
    },
    165747: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return l;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(475413),
        r = n(901952),
        s = n(689938),
        t = n(122269);
      function l(e) {
        let { user: i, hideMessageInput: n, hideExampleButton: l } = e;
        return n
          ? (0, a.jsx)("footer", {
              className: t.footer,
              children:
                !l &&
                (0, a.jsx)(o.tG, {
                  text: s.Z.Messages
                    .USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                  fullWidth: !0,
                }),
            })
          : (0, a.jsx)("footer", {
              inert: "",
              className: t.footer,
              children: (0, a.jsx)(r.Z, { user: i }),
            });
      }
    },
    844594: function (e, i, n) {
      n.r(i),
        n.d(i, {
          default: function () {
            return E;
          },
        });
      var a = n(735250),
        o = n(470079),
        r = n(481060),
        s = n(313201),
        t = n(197115),
        l = n(921813),
        c = n(318661),
        u = n(721987),
        d = n(626135),
        f = n(981631),
        m = n(486324),
        v = n(474936),
        p = n(689938),
        I = n(745117);
      function E(e) {
        let {
            user: i,
            guildId: n,
            transitionState: E,
            imageSrc: A,
            uploadType: _,
            onSubscribe: T,
            onClose: h,
          } = e,
          P = (0, s.Dt)(),
          Z = (0, c.ZP)(i.id, n),
          { primaryColor: x, secondaryColor: N } = (0, u.Z)({
            user: i,
            displayProfile: Z,
            pendingAvatar: _ === m.pC.AVATAR ? A : void 0,
            isPreview: !0,
          });
        return (
          o.useEffect(() => {
            d.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
              type: v.cd.ANIMATED_AVATAR_PREVIEW_GIF_MODAL,
            });
          }, []),
          (0, a.jsxs)(r.ModalRoot, {
            className: I.modalRoot,
            transitionState: E,
            size: r.ModalSize.SMALL,
            "aria-labelledby": P,
            hideShadow: !0,
            children: [
              (0, a.jsx)(l.Z, {
                user: i,
                canUsePremiumCustomization: !0,
                disabledInputs: !0,
                pendingAvatar: _ === m.pC.AVATAR ? A : void 0,
                pendingBanner: _ === m.pC.BANNER ? A : void 0,
                pendingThemeColors: [x, N],
              }),
              (0, a.jsxs)("div", {
                className: I.upsellSection,
                children: [
                  (0, a.jsx)(r.Text, {
                    className: I.joinText,
                    variant: "text-sm/normal",
                    children:
                      _ === m.pC.AVATAR
                        ? p.Z.Messages.PREMIUM_PREVIEW_JOIN_AVATAR
                        : p.Z.Messages.PREMIUM_PREVIEW_JOIN_BANNER,
                  }),
                  (0, a.jsx)(t.Z, {
                    buttonText: p.Z.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
                    subscriptionTier: v.Si.TIER_2,
                    className: I.premiumSubscribeButton,
                    size: r.Button.Sizes.SMALL,
                    premiumModalAnalyticsLocation: {
                      section: f.jXE.SETTINGS_EDIT_PROFILE,
                      object: f.qAy.BUTTON_CTA,
                    },
                    onSubscribeModalClose: (e) => {
                      e && (null == T || T(), h());
                    },
                  }),
                  (0, a.jsx)(r.Button, {
                    onClick: h,
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    look: r.Button.Looks.FILLED,
                    children: p.Z.Messages.PREMIUM_PREVIEW_EXIT,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    60638: function (e, i, n) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    651058: function (e, i, n) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    360247: function (e, i, n) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
    745117: function (e, i, n) {
      e.exports = {
        modalRoot: "modalRoot_f6519d",
        upsellSection: "upsellSection_f6519d",
        joinText: "joinText_f6519d",
        premiumSubscribeButton: "premiumSubscribeButton_f6519d",
      };
    },
  },
]);
//# sourceMappingURL=bbee7d7551b695730f77.js.map
