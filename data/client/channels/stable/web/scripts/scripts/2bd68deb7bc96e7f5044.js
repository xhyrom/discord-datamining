"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70687"],
  {
    792254: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return m;
        },
      });
      var t = a(442837),
        s = a(410030),
        c = a(607070),
        o = a(474936),
        i = a(231338),
        r = a(955092),
        d = a(250225),
        l = a(778441),
        u = a(238988),
        A = a(298233),
        f = a(304354),
        p = a(265704),
        E = a(85010),
        _ = a(954620),
        L = a(28747),
        I = a(962658),
        P = a(29971),
        R = a(730837),
        b = a(95897),
        Z = a(171362),
        N = a(945720);
      function m(e) {
        let n = (0, t.e7)([c.Z], () => c.Z.useReducedMotion),
          a = (0, s.ZP)();
        return n
          ? (function (e, n) {
              switch (e) {
                case o.cd.ANIMATED_AVATAR_MODAL_UPSELL:
                  return n === i.BR.DARK ? _.Z : R.Z;
                case o.cd.ANIMATED_BANNER_MODAL_UPSELL:
                  return n === i.BR.DARK ? L.Z : b.Z;
                case o.cd.PROFILE_EFFECT_MODAL_UPSELL:
                  return n === i.BR.DARK ? P.Z : N.Z;
                case o.cd.AVATAR_DECORATION_MODAL_UPSELL:
                  return n === i.BR.DARK ? I.Z : Z.Z;
              }
            })(e, a)
          : (function (e, n) {
              switch (e) {
                case o.cd.ANIMATED_AVATAR_MODAL_UPSELL:
                  return n === i.BR.DARK ? r.Z : A.Z;
                case o.cd.ANIMATED_BANNER_MODAL_UPSELL:
                  return n === i.BR.DARK ? d.Z : f.Z;
                case o.cd.PROFILE_EFFECT_MODAL_UPSELL:
                  return n === i.BR.DARK ? u.Z : E.Z;
                case o.cd.AVATAR_DECORATION_MODAL_UPSELL:
                  return n === i.BR.DARK ? l.Z : p.Z;
              }
            })(e, a);
      }
    },
    530329: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return f;
        },
      });
      var t = a(200651),
        s = a(192379),
        c = a(120356),
        o = a.n(c),
        i = a(53691),
        r = a(378879),
        d = a(981631),
        l = a(486324),
        u = a(689938),
        A = a(734471);
      function f(e) {
        let { uploadType: n, className: a, ...c } = e,
          f = s.useCallback(() => {
            (0, r.openProfileUpsellModal)(n, void 0);
          }, [n]),
          p = s.useMemo(() => {
            switch (n) {
              case l.pC.AVATAR:
                return u.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_INLINE_UPSELL.format(
                  { onClick: f },
                );
              case l.pC.BANNER:
                return u.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_INLINE_UPSELL.format(
                  { onClick: f },
                );
              default:
                return "";
            }
          }, [n, f]);
        return n === l.pC.AVATAR || n === l.pC.BANNER
          ? (0, t.jsx)(i.p, {
              text: p,
              button: u.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
              buttonAnalyticsObject: { section: d.jXE.USER_PROFILE },
              className: o()(A.container, a),
              ...c,
            })
          : null;
      }
    },
    378879: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return I;
          },
          openProfileUpsellModal: function () {
            return L;
          },
        });
      var t = a(200651);
      a(192379);
      var s = a(481060),
        c = a(921813),
        o = a(687158),
        i = a(576635),
        r = a(594174),
        d = a(98278),
        l = a(792254),
        u = a(790527),
        A = a(474936),
        f = a(981631),
        p = a(486324),
        E = a(689938),
        _ = a(821774);
      function L(e, n) {
        let c = r.default.getCurrentUser();
        return (
          null != c &&
          ((0, s.openModalLazy)(async () => {
            let { default: o } = await Promise.resolve().then(
              a.bind(a, 378879),
            );
            return (a) =>
              (0, t.jsx)(o, {
                user: c,
                imageSrc: n,
                uploadType: e,
                analyticsSource: f.Sbl.PROFILE_PANEL,
                analyticsLocation: {
                  section: f.jXE.USER_PROFILE,
                  object: f.qAy.BUTTON_CTA,
                },
                onSecondaryClick: s.closeAllModals,
                ...a,
              });
          }),
          !0)
        );
      }
      function I(e) {
        let {
            user: n,
            uploadType: a,
            imageSrc: s,
            onClose: r,
            analyticsSource: f,
            analyticsLocation: L,
            onSecondaryClick: I,
            ...P
          } = e,
          R = (0, o.ZP)(n.id),
          { primaryColor: b, secondaryColor: Z } = (0, i.Z)({
            user: n,
            displayProfile: R,
            pendingAvatar: a === p.pC.AVATAR ? s : void 0,
            isPreview: !0,
          }),
          N = a === p.pC.AVATAR || a === p.pC.BANNER,
          m = null != s,
          T = (0, l.Z)(
            a === p.pC.AVATAR
              ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL
              : A.cd.ANIMATED_BANNER_MODAL_UPSELL,
          );
        return N
          ? (0, t.jsx)(u.Z, {
              artURL: m ? void 0 : T,
              modalClassName: m ? _.modal : void 0,
              modalContentClassName: m ? _.modalContent : void 0,
              type:
                a === p.pC.AVATAR
                  ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL
                  : A.cd.ANIMATED_BANNER_MODAL_UPSELL,
              title:
                a === p.pC.AVATAR
                  ? E.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_TITLE
                  : E.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_TITLE,
              body:
                a === p.pC.AVATAR
                  ? E.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION
                  : E.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              glowUp:
                a === p.pC.AVATAR
                  ? E.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION
                  : E.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                null == I || I(), (0, d.$)(r);
              },
              secondaryCTA: E.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: r,
              enableArtBoxShadow: !1,
              analyticsSource: f,
              analyticsLocation: L,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: m
                ? (0, t.jsx)("div", {
                    className: _.previewContainerParent,
                    children: (0, t.jsx)(c.Z, {
                      containerClassName: _.previewContainer,
                      user: n,
                      canUsePremiumCustomization: !0,
                      disabledInputs: !0,
                      pendingAvatar: a === p.pC.AVATAR ? s : void 0,
                      pendingBanner: a === p.pC.BANNER ? s : void 0,
                      pendingThemeColors: [b, Z],
                      hideExampleButton: !0,
                    }),
                  })
                : void 0,
              ...P,
            })
          : null;
      }
    },
    445924: function (e, n, a) {
      var t = a(200651);
      a(192379);
      var s = a(481060),
        c = a(689938);
      n.Z = (e) => {
        let {
          onChangeAvatar: n,
          onChangeAvatarDecoration: a,
          onClose: o,
          className: i,
        } = e;
        return (0, t.jsxs)(s.Menu, {
          className: i,
          onClose: o,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": c.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
          children: [
            (0, t.jsx)(s.MenuItem, {
              id: "change-avatar",
              action: n,
              label: c.Z.Messages.USER_SETTINGS_CHANGE_AVATAR,
            }),
            (0, t.jsx)(s.MenuItem, {
              id: "change-avatar-decoration",
              action: a,
              label: c.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION,
            }),
          ],
        });
      };
    },
    921813: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return b;
        },
      });
      var t = a(200651);
      a(192379);
      var s = a(120356),
        c = a.n(s),
        o = a(481060),
        i = a(680295),
        r = a(687158),
        d = a(576635),
        l = a(518950),
        u = a(438163),
        A = a(502762),
        f = a(150039),
        p = a(450734),
        E = a(225089),
        _ = a(853726),
        L = a(165747),
        I = a(981631),
        P = a(228168),
        R = a(706995);
      function b(e) {
        let {
            user: n,
            guild: a,
            canUsePremiumCustomization: s,
            onUpsellClick: b,
            pendingBanner: Z,
            pendingBio: N,
            pendingPronouns: m,
            pendingAvatar: T,
            pendingAvatarDecoration: v,
            pendingNickname: M,
            pendingGlobalName: C,
            pendingThemeColors: h,
            pendingProfileEffectId: S,
            avatarClassName: g,
            containerClassName: U,
            isTryItOutFlow: O = !1,
            disabledInputs: D = !1,
            hideCustomStatus: B = !1,
            hideBioSection: x = !1,
            hideMessageInput: y = !0,
            hideExampleButton: j = !1,
          } = e,
          w = (0, r.ZP)(n.id, null == a ? void 0 : a.id),
          { avatarSrc: k, avatarDecorationSrc: V } = (0, l.Z)({
            user: n,
            guildId: null == a ? void 0 : a.id,
            avatarDecorationOverride: v,
            avatarOverride: T,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          F = (0, f.ZT)({ pendingProfileEffectId: S, displayProfile: w }),
          { theme: z, primaryColor: K } = (0, d.Z)({
            user: n,
            displayProfile: w,
            pendingThemeColors: h,
            isPreview: s,
          });
        return (0, t.jsxs)(A.Z, {
          user: n,
          displayProfile: w,
          profileType: P.y0.BITE_SIZE,
          pendingThemeColors: h,
          pendingProfileEffectId: F,
          className: c()(R.container, U),
          forceShowPremium: s,
          children: [
            (0, t.jsxs)("header", {
              className: R.header,
              children: [
                (0, t.jsx)(E.Z, {
                  user: n,
                  displayProfile: w,
                  guildId: null == a ? void 0 : a.id,
                  canUsePremiumCustomization: s,
                  pendingBanner: Z,
                  isTryItOutFlow: O,
                  disabledInputs: D,
                  onUpsellClick: () =>
                    null == b
                      ? void 0
                      : b({ object: I.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, t.jsx)(p.Z, {
                  user: n,
                  guild: a,
                  displayProfile: w,
                  canUsePremiumCustomization: s,
                  previewAvatar: k,
                  previewAvatarDecoration: V,
                  previewTheme: z,
                  previewPrimaryColor: K,
                  className: g,
                  disabledInputs: D,
                  isTryItOutFlow: O,
                  onUpsellClick: () =>
                    null == b ? void 0 : b({ object: I.qAy.AVATAR }),
                }),
                !B && (0, t.jsx)(u.Z, { user: n, profileType: P.y0.BITE_SIZE }),
              ],
            }),
            (0, t.jsx)(_.Z, {
              user: n,
              displayProfile: w,
              guild: a,
              pendingAvatar: T,
              pendingNickname: M,
              pendingGlobalName: C,
              pendingBio: N,
              pendingPronouns: m,
              isTryItOutFlow: O,
              hideBioSection: x,
            }),
            (0, t.jsx)(L.Z, {
              user: n,
              hideMessageInput: y,
              hideExampleButton: j,
            }),
            null != F && (0, t.jsx)(i.Z, { profileEffectId: F }),
          ],
        });
      }
    },
    450734: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return L;
        },
      });
      var t = a(200651);
      a(192379);
      var s = a(120356),
        c = a.n(s),
        o = a(442837),
        i = a(481060),
        r = a(906732),
        d = a(1585),
        l = a(158776),
        u = a(998502),
        A = a(445924),
        f = a(654904),
        p = a(486324),
        E = a(529934);
      let _ = u.ZP.getEnableHardwareAcceleration()
        ? i.AnimatedAvatar
        : i.Avatar;
      function L(e) {
        let {
            user: n,
            guild: a,
            displayProfile: s,
            canUsePremiumCustomization: u,
            previewAvatar: L,
            previewAvatarDecoration: I,
            previewTheme: P,
            previewPrimaryColor: R,
            className: b,
            disabledInputs: Z,
            isTryItOutFlow: N,
            onUpsellClick: m,
          } = e,
          { analyticsLocations: T } = (0, r.ZP)(),
          v = (0, o.e7)([l.Z], () => l.Z.getStatus(n.id)),
          M =
            null == a ||
            (null == s ? void 0 : s.canUsePremiumProfileCustomization) ||
            u,
          C = (0, t.jsx)(_, {
            src: L,
            avatarDecoration: I,
            imageClassName: c()(b, { [E.overlay]: !Z }),
            size: i.AvatarSizes.SIZE_80,
            "aria-label": n.username,
            status: v,
            statusTooltip: !1,
            statusBackdropColor:
              null != R ? (0, i.getStatusBackdropColor)(P) : void 0,
          });
        return Z
          ? (0, t.jsx)("div", { className: E.avatar, children: C })
          : M
            ? (0, t.jsx)(i.Popout, {
                renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, t.jsx)(A.Z, {
                    className: E.menu,
                    onClose: n,
                    onChangeAvatar: () =>
                      (0, f.$r)(p.pC.AVATAR, null == a ? void 0 : a.id, N),
                    onChangeAvatarDecoration: () => {
                      (0, d.ps)({
                        guild: null == a ? void 0 : a,
                        analyticsLocations: T,
                        isTryItOutFlow: N,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, t.jsxs)(i.Clickable, {
                    ...e,
                    className: c()(E.avatar, E.clickable),
                    children: [
                      C,
                      (0, t.jsx)(i.PencilIcon, {
                        size: "custom",
                        className: E.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, t.jsxs)(i.Clickable, {
                onClick: m,
                className: c()(E.avatar, E.clickable),
                children: [
                  C,
                  (0, t.jsx)(i.NitroWheelIcon, {
                    size: "custom",
                    className: E.overlayIcon,
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
      var t = a(200651);
      a(192379);
      var s = a(481060),
        c = a(81245),
        o = a(867176),
        i = a(654904),
        r = a(486324),
        d = a(228168),
        l = a(689938),
        u = a(892532);
      function A(e) {
        let {
            user: n,
            displayProfile: a,
            guildId: A,
            canUsePremiumCustomization: f,
            pendingBanner: p,
            isTryItOutFlow: E,
            disabledInputs: _,
            onUpsellClick: L,
          } = e,
          I =
            f ||
            (null == a ? void 0 : a.canUsePremiumProfileCustomization) ||
            !1,
          P = I ? s.PencilIcon : s.NitroWheelIcon,
          R = (0, c.Mu)("ProfileCustomizationPreviewBanner", I);
        return (0, t.jsx)(o.Z, {
          user: n,
          displayProfile: a,
          guildId: A,
          profileType: d.y0.BITE_SIZE,
          pendingBanner: p,
          canUsePremiumProfileCustomization: f,
          children:
            !_ &&
            (0, t.jsxs)(s.Clickable, {
              onClick: () => {
                if (!I && !R) {
                  null == L || L();
                  return;
                }
                (0, i.$r)(r.pC.BANNER, A, E);
              },
              className: u.clickable,
              children: [
                (0, t.jsx)(P, { size: "xs", color: "white" }),
                (0, t.jsx)(s.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    I || R
                      ? l.Z.Messages.CHANGE_BANNER
                      : l.Z.Messages.USER_SETTINGS_UNLOCK_BANNER,
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return p;
        },
      });
      var t = a(200651);
      a(192379);
      var s = a(442837),
        c = a(648052),
        o = a(530),
        i = a(420654),
        r = a(116854),
        d = a(271383),
        l = a(246946),
        u = a(654904),
        A = a(228168),
        f = a(451563);
      function p(e) {
        var n;
        let {
            user: a,
            displayProfile: p,
            guild: E,
            pendingAvatar: _,
            pendingNickname: L,
            pendingGlobalName: I,
            pendingBio: P,
            pendingPronouns: R,
            isTryItOutFlow: b,
            hideBioSection: Z,
          } = e,
          N = (0, s.e7)([d.ZP], () =>
            null == E ? null : d.ZP.getMember(E.id, a.id),
          ),
          m = (0, s.e7)([l.Z], () => l.Z.hidePersonalInformation),
          T =
            null == p
              ? void 0
              : null === (n = p.getPreviewBio(P)) || void 0 === n
                ? void 0
                : n.value,
          v = null != R ? R : null == p ? void 0 : p.pronouns,
          M = (0, u.Ly)({
            pendingNickname: L,
            pendingGlobalName: I,
            user: a,
            guildMember: N,
          });
        return (0, t.jsxs)("div", {
          inert: "",
          className: f.body,
          children: [
            (0, t.jsx)(o.Z, {
              user: a,
              profileType: A.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != N)) return;
                if (null !== _ && !!(null != N.avatar || null != _))
                  return (0, t.jsx)(r.Z, { user: a, nickname: M });
              })(),
              nickname: M,
              pronouns: v,
              isTryItOut: b,
              tags: (0, t.jsx)(c.Z, {
                displayProfile: p,
                profileType: A.y0.BITE_SIZE,
              }),
            }),
            !Z &&
              null != T &&
              "" !== T &&
              (0, t.jsx)(i.Z, {
                user: a,
                bio: T,
                hidePersonalInformation: m,
                viewFullBioDisabled: !0,
              }),
          ],
        });
      }
    },
    165747: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = a(200651);
      a(192379);
      var s = a(475413),
        c = a(955418),
        o = a(689938),
        i = a(451563);
      function r(e) {
        let { user: n, hideMessageInput: a, hideExampleButton: r } = e;
        return a
          ? (0, t.jsx)("footer", {
              className: i.footer,
              children:
                !r &&
                (0, t.jsx)(s.tG, {
                  text: o.Z.Messages
                    .USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                  fullWidth: !0,
                }),
            })
          : (0, t.jsx)("footer", {
              inert: "",
              className: i.footer,
              children: (0, t.jsx)(c.Z, { user: n }),
            });
      }
    },
    955092: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/5b4dc771eb1d2e239bcba774f3589b977845bf70d179315dc2f9a531b253c6d8.png";
    },
    250225: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/577d28b05d22c43a8b3dfe5ebfc6fa278c58f03907e888db884c331d13c3ad23.png";
    },
    778441: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/7fa341ec7211b62a71a0bd433d2bafe570ada865b0fd72d695b90de4a581022a.png";
    },
    238988: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/f3e3de08090be16d5041988655da92f175ba9967e7854f170caa18550159ae10.png";
    },
    298233: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/f56fdb607f14f6ebe5a37eac65f5b8c975ea446224c06dd8aef4dd0187c81874.png";
    },
    304354: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/d1dcb0c115a836edc8cbf021a15888bdf416fd352187518f227b8e905a20227f.png";
    },
    265704: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/b344b1fe2b3d2cc66466f09c46b4e2dcce56a16f1ff047aed69155fa4cff39a8.png";
    },
    85010: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/f3e3de08090be16d5041988655da92f175ba9967e7854f170caa18550159ae10.png";
    },
    954620: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/87534097f7ff0b0a3c6164bbcaad8968b2e7f8dbbdc59776c782cf14dba4c53c.png";
    },
    28747: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/5e27b7f8865a87dd6eec34188b96bb51924a55252b16f9ebfb8aa72973304bbd.png";
    },
    962658: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/15940a9acc0fab74b37e730350d6cef34289948e14b6d73e90432c19b4a51beb.png";
    },
    29971: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/6c6eeb5576f47ad8c19a40e67a6404ffaae3b939f07183afc984d669f17137de.png";
    },
    730837: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/fab9a25304af3a77b100b6beabd1d46013120289193faa37e9fa82977f133322.png";
    },
    95897: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/ef7a0b437305ab3a5ccda00a5ecd4eddd69544a90eac121e5c984ca63dd93b9e.png";
    },
    171362: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/71744284320fdf451ac09af729ea60d3fde7ef492f7c7e8c5657387c20c2b9c6.png";
    },
    945720: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/6c6eeb5576f47ad8c19a40e67a6404ffaae3b939f07183afc984d669f17137de.png";
    },
  },
]);
//# sourceMappingURL=2bd68deb7bc96e7f5044.js.map
