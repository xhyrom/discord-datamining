"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70687"],
  {
    842786: function (e) {
      e.exports = "/assets/e2b82d24832fec3fb1c6.gif";
    },
    530329: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return E;
        },
      });
      var i = a(735250),
        s = a(470079),
        r = a(120356),
        o = a.n(r),
        l = a(53691),
        t = a(378879),
        c = a(981631),
        u = a(486324),
        d = a(689938),
        A = a(734471);
      function E(e) {
        let { uploadType: n, className: a, ...r } = e,
          E = s.useCallback(() => {
            (0, t.openProfileUpsellModal)(n, void 0);
          }, [n]),
          _ = s.useMemo(() => {
            switch (n) {
              case u.pC.AVATAR:
                return d.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_INLINE_UPSELL.format(
                  { onClick: E },
                );
              case u.pC.BANNER:
                return d.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_INLINE_UPSELL.format(
                  { onClick: E },
                );
              default:
                return "";
            }
          }, [n, E]);
        return n === u.pC.AVATAR || n === u.pC.BANNER
          ? (0, i.jsx)(l.p, {
              text: _,
              button: d.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
              buttonAnalyticsObject: { section: c.jXE.USER_PROFILE },
              className: o()(A.container, a),
              ...r,
            })
          : null;
      }
    },
    378879: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return m;
          },
          openProfileUpsellModal: function () {
            return v;
          },
        });
      var i = a(735250);
      a(470079);
      var s = a(481060),
        r = a(921813),
        o = a(687158),
        l = a(576635),
        t = a(594174),
        c = a(98278),
        u = a(790527),
        d = a(474936),
        A = a(981631),
        E = a(486324),
        _ = a(689938),
        I = a(821774),
        P = a(842786),
        p = a(89671);
      function v(e, n) {
        let r = t.default.getCurrentUser();
        return (
          null != r &&
          ((0, s.openModalLazy)(async () => {
            let { default: o } = await Promise.resolve().then(
              a.bind(a, 378879),
            );
            return (a) =>
              (0, i.jsx)(o, {
                user: r,
                imageSrc: n,
                uploadType: e,
                analyticsSource: A.Sbl.PROFILE_PANEL,
                analyticsLocation: {
                  section: A.jXE.USER_PROFILE,
                  object: A.qAy.BUTTON_CTA,
                },
                onSecondaryClick: s.closeAllModals,
                ...a,
              });
          }),
          !0)
        );
      }
      function m(e) {
        let {
            user: n,
            uploadType: a,
            imageSrc: s,
            onClose: t,
            analyticsSource: A,
            analyticsLocation: v,
            onSecondaryClick: m,
            ...N
          } = e,
          C = (0, o.ZP)(n.id),
          { primaryColor: f, secondaryColor: T } = (0, l.Z)({
            user: n,
            displayProfile: C,
            pendingAvatar: a === E.pC.AVATAR ? s : void 0,
            isPreview: !0,
          }),
          L = a === E.pC.AVATAR || a === E.pC.BANNER,
          R = null != s;
        return L
          ? (0, i.jsx)(u.Z, {
              artURL: R || a === E.pC.AVATAR ? void 0 : p.Z,
              artElement:
                R || a !== E.pC.AVATAR
                  ? void 0
                  : (0, i.jsx)("img", {
                      className: I.avatarImage,
                      alt: "",
                      src: P,
                    }),
              modalClassName: R ? I.modal : void 0,
              modalContentClassName: R ? I.modalContent : void 0,
              type: d.cd.CUSTOM_PROFILE_UPSELL,
              title:
                a === E.pC.AVATAR
                  ? _.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_TITLE
                  : _.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_TITLE,
              body:
                a === E.pC.AVATAR
                  ? _.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION
                  : _.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              glowUp:
                a === E.pC.AVATAR
                  ? _.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION
                  : _.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                null == m || m(), (0, c.$)(t);
              },
              secondaryCTA: _.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: t,
              enableArtBoxShadow: !1,
              analyticsSource: A,
              analyticsLocation: v,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: R
                ? (0, i.jsx)("div", {
                    className: I.previewContainerParent,
                    children: (0, i.jsx)(r.Z, {
                      containerClassName: I.previewContainer,
                      user: n,
                      canUsePremiumCustomization: !0,
                      disabledInputs: !0,
                      pendingAvatar: a === E.pC.AVATAR ? s : void 0,
                      pendingBanner: a === E.pC.BANNER ? s : void 0,
                      pendingThemeColors: [f, T],
                      hideExampleButton: !0,
                    }),
                  })
                : void 0,
              ...N,
            })
          : null;
      }
    },
    445924: function (e, n, a) {
      var i = a(735250);
      a(470079);
      var s = a(481060),
        r = a(689938);
      n.Z = (e) => {
        let {
          onChangeAvatar: n,
          onChangeAvatarDecoration: a,
          onClose: o,
          className: l,
        } = e;
        return (0, i.jsxs)(s.Menu, {
          className: l,
          onClose: o,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": r.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
          children: [
            (0, i.jsx)(s.MenuItem, {
              id: "change-avatar",
              action: n,
              label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR,
            }),
            (0, i.jsx)(s.MenuItem, {
              id: "change-avatar-decoration",
              action: a,
              label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION,
            }),
          ],
        });
      };
    },
    921813: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return C;
        },
      });
      var i = a(735250);
      a(470079);
      var s = a(120356),
        r = a.n(s),
        o = a(481060),
        l = a(680295),
        t = a(687158),
        c = a(576635),
        u = a(518950),
        d = a(438163),
        A = a(502762),
        E = a(150039),
        _ = a(450734),
        I = a(225089),
        P = a(853726),
        p = a(165747),
        v = a(981631),
        m = a(228168),
        N = a(706995);
      function C(e) {
        let {
            user: n,
            guild: a,
            canUsePremiumCustomization: s,
            onUpsellClick: C,
            pendingBanner: f,
            pendingBio: T,
            pendingPronouns: L,
            pendingAvatar: R,
            pendingAvatarDecoration: M,
            pendingNickname: Z,
            pendingGlobalName: S,
            pendingThemeColors: g,
            pendingProfileEffectId: h,
            avatarClassName: U,
            containerClassName: x,
            isTryItOutFlow: j = !1,
            disabledInputs: y = !1,
            hideCustomStatus: O = !1,
            hideBioSection: B = !1,
            hideMessageInput: b = !0,
            hideExampleButton: w = !1,
          } = e,
          D = (0, t.ZP)(n.id, null == a ? void 0 : a.id),
          { avatarSrc: k, avatarDecorationSrc: V } = (0, u.Z)({
            user: n,
            guildId: null == a ? void 0 : a.id,
            avatarDecorationOverride: M,
            avatarOverride: R,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          F = (0, E.ZT)({ pendingProfileEffectId: h, displayProfile: D }),
          { theme: z, primaryColor: G } = (0, c.Z)({
            user: n,
            displayProfile: D,
            pendingThemeColors: g,
            isPreview: s,
          });
        return (0, i.jsxs)(A.Z, {
          user: n,
          displayProfile: D,
          profileType: m.y0.BITE_SIZE,
          pendingThemeColors: g,
          pendingProfileEffectId: F,
          className: r()(N.container, x),
          forceShowPremium: s,
          children: [
            (0, i.jsxs)("header", {
              className: N.header,
              children: [
                (0, i.jsx)(I.Z, {
                  user: n,
                  displayProfile: D,
                  guildId: null == a ? void 0 : a.id,
                  canUsePremiumCustomization: s,
                  pendingBanner: f,
                  isTryItOutFlow: j,
                  disabledInputs: y,
                  onUpsellClick: () =>
                    null == C
                      ? void 0
                      : C({ object: v.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, i.jsx)(_.Z, {
                  user: n,
                  guild: a,
                  displayProfile: D,
                  canUsePremiumCustomization: s,
                  previewAvatar: k,
                  previewAvatarDecoration: V,
                  previewTheme: z,
                  previewPrimaryColor: G,
                  className: U,
                  disabledInputs: y,
                  isTryItOutFlow: j,
                  onUpsellClick: () =>
                    null == C ? void 0 : C({ object: v.qAy.AVATAR }),
                }),
                !O && (0, i.jsx)(d.Z, { user: n, profileType: m.y0.BITE_SIZE }),
              ],
            }),
            (0, i.jsx)(P.Z, {
              user: n,
              displayProfile: D,
              guild: a,
              pendingAvatar: R,
              pendingNickname: Z,
              pendingGlobalName: S,
              pendingBio: T,
              pendingPronouns: L,
              isTryItOutFlow: j,
              hideBioSection: B,
            }),
            (0, i.jsx)(p.Z, {
              user: n,
              hideMessageInput: b,
              hideExampleButton: w,
            }),
            null != F && (0, i.jsx)(l.Z, { profileEffectId: F }),
          ],
        });
      }
    },
    450734: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return p;
        },
      });
      var i = a(735250);
      a(470079);
      var s = a(120356),
        r = a.n(s),
        o = a(442837),
        l = a(481060),
        t = a(906732),
        c = a(1585),
        u = a(158776),
        d = a(998502),
        A = a(445924),
        E = a(654904),
        _ = a(486324),
        I = a(529934);
      let P = d.ZP.getEnableHardwareAcceleration()
        ? l.AnimatedAvatar
        : l.Avatar;
      function p(e) {
        let {
            user: n,
            guild: a,
            displayProfile: s,
            canUsePremiumCustomization: d,
            previewAvatar: p,
            previewAvatarDecoration: v,
            previewTheme: m,
            previewPrimaryColor: N,
            className: C,
            disabledInputs: f,
            isTryItOutFlow: T,
            onUpsellClick: L,
          } = e,
          { analyticsLocations: R } = (0, t.ZP)(),
          M = (0, o.e7)([u.Z], () => u.Z.getStatus(n.id)),
          Z =
            null == a ||
            (null == s ? void 0 : s.canUsePremiumProfileCustomization) ||
            d,
          S = (0, i.jsx)(P, {
            src: p,
            avatarDecoration: v,
            imageClassName: r()(C, { [I.overlay]: !f }),
            size: l.AvatarSizes.SIZE_80,
            "aria-label": n.username,
            status: M,
            statusTooltip: !1,
            statusBackdropColor:
              null != N ? (0, l.getStatusBackdropColor)(m) : void 0,
          });
        return f
          ? (0, i.jsx)("div", { className: I.avatar, children: S })
          : Z
            ? (0, i.jsx)(l.Popout, {
                renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(A.Z, {
                    className: I.menu,
                    onClose: n,
                    onChangeAvatar: () =>
                      (0, E.$r)(_.pC.AVATAR, null == a ? void 0 : a.id, T),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == a ? void 0 : a,
                        analyticsLocations: R,
                        isTryItOutFlow: T,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, i.jsxs)(l.Clickable, {
                    ...e,
                    className: r()(I.avatar, I.clickable),
                    children: [
                      S,
                      (0, i.jsx)(l.PencilIcon, {
                        size: "custom",
                        className: I.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, i.jsxs)(l.Clickable, {
                onClick: L,
                className: r()(I.avatar, I.clickable),
                children: [
                  S,
                  (0, i.jsx)(l.NitroWheelIcon, {
                    size: "custom",
                    className: I.overlayIcon,
                    width: 20,
                    height: 20,
                    color: "white",
                  }),
                ],
              });
      }
    },
    225089: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return A;
        },
      });
      var i = a(735250);
      a(470079);
      var s = a(481060),
        r = a(81245),
        o = a(867176),
        l = a(654904),
        t = a(486324),
        c = a(228168),
        u = a(689938),
        d = a(892532);
      function A(e) {
        let {
            user: n,
            displayProfile: a,
            guildId: A,
            canUsePremiumCustomization: E,
            pendingBanner: _,
            isTryItOutFlow: I,
            disabledInputs: P,
            onUpsellClick: p,
          } = e,
          v =
            E ||
            (null == a ? void 0 : a.canUsePremiumProfileCustomization) ||
            !1,
          m = v ? s.PencilIcon : s.NitroWheelIcon,
          N = (0, r.Mu)("ProfileCustomizationPreviewBanner", v);
        return (0, i.jsx)(o.Z, {
          user: n,
          displayProfile: a,
          guildId: A,
          profileType: c.y0.BITE_SIZE,
          pendingBanner: _,
          canUsePremiumProfileCustomization: E,
          children:
            !P &&
            (0, i.jsxs)(s.Clickable, {
              onClick: () => {
                if (!v && !N) {
                  null == p || p();
                  return;
                }
                (0, l.$r)(t.pC.BANNER, A, I);
              },
              className: d.clickable,
              children: [
                (0, i.jsx)(m, { size: "xs", color: "white" }),
                (0, i.jsx)(s.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    v || N
                      ? u.Z.Messages.CHANGE_BANNER
                      : u.Z.Messages.USER_SETTINGS_UNLOCK_BANNER,
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return P;
        },
      });
      var i = a(735250);
      a(470079);
      var s = a(442837),
        r = a(954138),
        o = a(979264),
        l = a(648052),
        t = a(530),
        c = a(420654),
        u = a(116854),
        d = a(271383),
        A = a(246946),
        E = a(654904),
        _ = a(228168),
        I = a(451563);
      function P(e) {
        var n;
        let {
            user: a,
            displayProfile: P,
            guild: p,
            pendingAvatar: v,
            pendingNickname: m,
            pendingGlobalName: N,
            pendingBio: C,
            pendingPronouns: f,
            isTryItOutFlow: T,
            hideBioSection: L,
          } = e,
          R = (0, s.e7)([d.ZP], () =>
            null == p ? null : d.ZP.getMember(p.id, a.id),
          ),
          M = (0, s.e7)([A.Z], () => A.Z.hidePersonalInformation),
          Z = (0, r.Z)("ProfileCustomizationPreviewBody"),
          S =
            null == P
              ? void 0
              : null === (n = P.getPreviewBio(C)) || void 0 === n
                ? void 0
                : n.value,
          g = null != f ? f : null == P ? void 0 : P.pronouns,
          h = (0, E.Ly)({
            pendingNickname: m,
            pendingGlobalName: N,
            user: a,
            guildMember: R,
          });
        return (0, i.jsxs)("div", {
          inert: "",
          className: I.body,
          children: [
            (0, i.jsx)(t.Z, {
              user: a,
              profileType: _.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != R)) return;
                if (null !== v && !!(null != R.avatar || null != v))
                  return (0, i.jsx)(u.Z, { user: a, nickname: h });
              })(),
              nickname: h,
              pronouns: g,
              isTryItOut: T,
              tags: (0, i.jsx)(l.Z, {
                displayProfile: P,
                profileType: _.y0.BITE_SIZE,
              }),
            }),
            Z && (0, i.jsx)(o.ZP, { userId: a.id, inline: !1 }),
            !L &&
              null != S &&
              "" !== S &&
              (0, i.jsx)(c.Z, {
                user: a,
                bio: S,
                hidePersonalInformation: M,
                viewFullBioDisabled: !0,
              }),
          ],
        });
      }
    },
    165747: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return t;
        },
      });
      var i = a(735250);
      a(470079);
      var s = a(475413),
        r = a(955418),
        o = a(689938),
        l = a(451563);
      function t(e) {
        let { user: n, hideMessageInput: a, hideExampleButton: t } = e;
        return a
          ? (0, i.jsx)("footer", {
              className: l.footer,
              children:
                !t &&
                (0, i.jsx)(s.tG, {
                  text: o.Z.Messages
                    .USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                  fullWidth: !0,
                }),
            })
          : (0, i.jsx)("footer", {
              inert: "",
              className: l.footer,
              children: (0, i.jsx)(r.Z, { user: n }),
            });
      }
    },
    89671: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/910920da94849fc94f7ef295805ae6daacc664c3b5e62f5000239ff2053d73a7.png";
    },
  },
]);
//# sourceMappingURL=339389102f79e8c679a1.js.map
