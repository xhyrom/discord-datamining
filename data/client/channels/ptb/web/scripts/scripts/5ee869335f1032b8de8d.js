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
          className: l,
        } = e;
        return (0, a.jsxs)(o.Menu, {
          className: l,
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
          return _;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(481060),
        r = n(680295),
        s = n(318661),
        l = n(721987),
        t = n(438163),
        c = n(502762),
        u = n(204197),
        d = n(654904),
        f = n(450734),
        m = n(225089),
        v = n(853726),
        p = n(165747),
        I = n(981631),
        E = n(228168),
        A = n(60638);
      function _(e) {
        let {
            user: i,
            guild: n,
            canUsePremiumCustomization: _,
            onUpsellClick: h,
            pendingBanner: T,
            pendingBio: Z,
            pendingPronouns: P,
            pendingAvatar: x,
            pendingAvatarDecoration: N,
            pendingNickname: S,
            pendingGlobalName: g,
            pendingThemeColors: j,
            pendingProfileEffectId: b,
            avatarClassName: C,
            isTryItOutFlow: R = !1,
            disabledInputs: y = !1,
            hideCustomStatus: M = !1,
            hideBioSection: B = !1,
            hideMessageInput: k = !0,
            hideExampleButton: w = !1,
          } = e,
          U = (0, s.ZP)(i.id, null == n ? void 0 : n.id),
          { avatarSrc: L, avatarDecorationSrc: O } = (0, u.Z)({
            user: i,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: N,
            avatarOverride: x,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          z = (0, d.ZT)({ pendingProfileEffectId: b, displayProfile: U }),
          { theme: V, primaryColor: D } = (0, l.Z)({
            user: i,
            displayProfile: U,
            pendingThemeColors: j,
            isPreview: _,
          });
        return (0, a.jsxs)(c.Z, {
          user: i,
          displayProfile: U,
          profileType: E.y0.BITE_SIZE,
          pendingThemeColors: j,
          pendingProfileEffectId: z,
          className: A.container,
          forceShowPremium: _,
          children: [
            (0, a.jsxs)("header", {
              className: A.header,
              children: [
                (0, a.jsx)(m.Z, {
                  user: i,
                  displayProfile: U,
                  guildId: null == n ? void 0 : n.id,
                  canUsePremiumCustomization: _,
                  pendingBanner: T,
                  hasProfileEffect: null != z,
                  isTryItOutFlow: R,
                  disabledInputs: y,
                  onUpsellClick: () =>
                    null == h
                      ? void 0
                      : h({ object: I.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, a.jsx)(f.Z, {
                  user: i,
                  guild: n,
                  displayProfile: U,
                  canUsePremiumCustomization: _,
                  previewAvatar: L,
                  previewAvatarDecoration: O,
                  previewTheme: V,
                  previewPrimaryColor: D,
                  className: C,
                  disabledInputs: y,
                  isTryItOutFlow: R,
                  onUpsellClick: () =>
                    null == h ? void 0 : h({ object: I.qAy.AVATAR }),
                }),
                !M && (0, a.jsx)(t.Z, { user: i, profileType: E.y0.BITE_SIZE }),
              ],
            }),
            (0, a.jsx)(v.Z, {
              user: i,
              displayProfile: U,
              guild: n,
              pendingAvatar: x,
              pendingNickname: S,
              pendingGlobalName: g,
              pendingBio: Z,
              pendingPronouns: P,
              isTryItOutFlow: R,
              hideBioSection: B,
            }),
            (0, a.jsx)(p.Z, {
              user: i,
              hideMessageInput: k,
              hideExampleButton: w,
            }),
            null != z && (0, a.jsx)(r.Z, { profileEffectId: z }),
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
        l = n(481060),
        t = n(906732),
        c = n(1585),
        u = n(158776),
        d = n(998502),
        f = n(445924),
        m = n(654904),
        v = n(486324),
        p = n(651058);
      let I = d.ZP.getEnableHardwareAcceleration()
        ? l.AnimatedAvatar
        : l.Avatar;
      function E(e) {
        let {
            user: i,
            guild: n,
            displayProfile: o,
            canUsePremiumCustomization: d,
            previewAvatar: E,
            previewAvatarDecoration: A,
            previewTheme: _,
            previewPrimaryColor: h,
            className: T,
            disabledInputs: Z,
            isTryItOutFlow: P,
            onUpsellClick: x,
          } = e,
          { analyticsLocations: N } = (0, t.ZP)(),
          S = (0, s.e7)([u.Z], () => u.Z.getStatus(i.id)),
          g =
            null == n ||
            (null == o ? void 0 : o.canUsePremiumProfileCustomization) ||
            d,
          j = (0, a.jsx)(I, {
            src: E,
            avatarDecoration: A,
            imageClassName: r()(T, { [p.overlay]: !Z }),
            size: l.AvatarSizes.SIZE_80,
            "aria-label": i.username,
            status: S,
            statusTooltip: !1,
            statusBackdropColor:
              null != h ? (0, l.getStatusBackdropColor)(_) : void 0,
          });
        return Z
          ? (0, a.jsx)("div", { className: p.avatar, children: j })
          : g
            ? (0, a.jsx)(l.Popout, {
                renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, a.jsx)(f.Z, {
                    className: p.menu,
                    onClose: i,
                    onChangeAvatar: () =>
                      (0, m.$r)(v.pC.AVATAR, null == n ? void 0 : n.id, P),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == n ? void 0 : n,
                        analyticsLocations: N,
                        isTryItOutFlow: P,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, a.jsxs)(l.Clickable, {
                    ...e,
                    className: r()(p.avatar, p.clickable),
                    children: [
                      j,
                      (0, a.jsx)(l.PencilIcon, {
                        size: "custom",
                        className: p.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, a.jsxs)(l.Clickable, {
                onClick: x,
                className: r()(p.avatar, p.clickable),
                children: [
                  j,
                  (0, a.jsx)(l.NitroWheelIcon, {
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
        l = n(486324),
        t = n(228168),
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
          profileType: t.y0.BITE_SIZE,
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
                (0, s.$r)(l.pC.BANNER, d, p);
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
        l = n(741308),
        t = n(530),
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
            pendingGlobalName: h,
            pendingBio: T,
            pendingPronouns: Z,
            isTryItOutFlow: P,
            hideBioSection: x,
          } = e,
          N = (0, o.e7)([d.ZP], () =>
            null == E ? null : d.ZP.getMember(E.id, n.id),
          ),
          S = (0, o.e7)([f.Z], () => f.Z.hidePersonalInformation),
          g = (0, r.Z)("ProfileCustomizationPreviewBody"),
          j =
            null == I
              ? void 0
              : null === (i = I.getPreviewBio(T)) || void 0 === i
                ? void 0
                : i.value,
          b = null != Z ? Z : null == I ? void 0 : I.pronouns,
          C = (0, m.Ly)({
            pendingNickname: _,
            pendingGlobalName: h,
            user: n,
            guildMember: N,
          });
        return (0, a.jsxs)("div", {
          inert: "",
          className: p.body,
          children: [
            (0, a.jsx)(t.Z, {
              user: n,
              profileType: v.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != N)) return;
                if (null !== A && !!(null != N.avatar || null != A))
                  return (0, a.jsx)(c.Z, { user: n, nickname: C });
              })(),
              nickname: C,
              pronouns: b,
              isTryItOut: P,
              tags: (0, a.jsx)(l.Z, {
                displayProfile: I,
                profileType: v.y0.BITE_SIZE,
              }),
            }),
            g && (0, a.jsx)(s.ZP, { userId: n.id, inline: !1 }),
            !x &&
              null != j &&
              "" !== j &&
              (0, a.jsx)(u.Z, { user: n, bio: j, hidePersonalInformation: S }),
          ],
        });
      }
    },
    165747: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return t;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(475413),
        r = n(901952),
        s = n(689938),
        l = n(122269);
      function t(e) {
        let { user: i, hideMessageInput: n, hideExampleButton: t } = e;
        return n
          ? (0, a.jsx)("footer", {
              className: l.footer,
              children:
                !t &&
                (0, a.jsx)(o.tG, {
                  text: s.Z.Messages
                    .USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                  fullWidth: !0,
                }),
            })
          : (0, a.jsx)("footer", {
              inert: "",
              className: l.footer,
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
        l = n(197115),
        t = n(921813),
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
            onSubscribe: h,
            onClose: T,
          } = e,
          Z = (0, s.Dt)(),
          P = (0, c.ZP)(i.id, n),
          { primaryColor: x, secondaryColor: N } = (0, u.Z)({
            user: i,
            displayProfile: P,
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
            "aria-labelledby": Z,
            hideShadow: !0,
            children: [
              (0, a.jsx)(t.Z, {
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
                  (0, a.jsx)(l.Z, {
                    buttonText: p.Z.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
                    subscriptionTier: v.Si.TIER_2,
                    className: I.premiumSubscribeButton,
                    size: r.Button.Sizes.SMALL,
                    premiumModalAnalyticsLocation: {
                      section: f.jXE.SETTINGS_EDIT_PROFILE,
                      object: f.qAy.BUTTON_CTA,
                    },
                    onSubscribeModalClose: (e) => {
                      e && (null == h || h(), T());
                    },
                  }),
                  (0, a.jsx)(r.Button, {
                    onClick: T,
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
//# sourceMappingURL=5ee869335f1032b8de8d.js.map
