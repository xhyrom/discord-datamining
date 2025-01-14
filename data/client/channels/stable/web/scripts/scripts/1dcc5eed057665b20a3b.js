"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70687"],
  {
    792254: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var a = t(442837),
        i = t(410030),
        c = t(607070),
        o = t(474936),
        s = t(231338),
        r = t(955092),
        d = t(250225),
        l = t(778441),
        u = t(238988),
        f = t(298233),
        p = t(304354),
        A = t(265704),
        b = t(85010),
        m = t(954620),
        v = t(28747),
        Z = t(962658),
        h = t(29971),
        g = t(730837),
        C = t(95897),
        E = t(171362),
        P = t(945720);
      function N(e) {
        let n = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
          t = (0, i.ZP)();
        return n
          ? (function (e, n) {
              switch (e) {
                case o.cd.ANIMATED_AVATAR_MODAL_UPSELL:
                  return n === s.BR.DARK ? m.Z : g.Z;
                case o.cd.ANIMATED_BANNER_MODAL_UPSELL:
                  return n === s.BR.DARK ? v.Z : C.Z;
                case o.cd.PROFILE_EFFECT_MODAL_UPSELL:
                  return n === s.BR.DARK ? h.Z : P.Z;
                case o.cd.AVATAR_DECORATION_MODAL_UPSELL:
                  return n === s.BR.DARK ? Z.Z : E.Z;
              }
            })(e, t)
          : (function (e, n) {
              switch (e) {
                case o.cd.ANIMATED_AVATAR_MODAL_UPSELL:
                  return n === s.BR.DARK ? r.Z : f.Z;
                case o.cd.ANIMATED_BANNER_MODAL_UPSELL:
                  return n === s.BR.DARK ? d.Z : p.Z;
                case o.cd.PROFILE_EFFECT_MODAL_UPSELL:
                  return n === s.BR.DARK ? u.Z : b.Z;
                case o.cd.AVATAR_DECORATION_MODAL_UPSELL:
                  return n === s.BR.DARK ? l.Z : A.Z;
              }
            })(e, t);
      }
    },
    530329: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var a = t(200651),
        i = t(192379),
        c = t(120356),
        o = t.n(c),
        s = t(53691),
        r = t(378879),
        d = t(981631),
        l = t(486324),
        u = t(388032),
        f = t(173318);
      function p(e) {
        let { uploadType: n, className: t, ...c } = e,
          p = i.useCallback(() => {
            (0, r.openProfileUpsellModal)(n, void 0);
          }, [n]),
          A = i.useMemo(() => {
            switch (n) {
              case l.pC.AVATAR:
                return u.intl.format(u.t["pvw/HB"], { onClick: p });
              case l.pC.BANNER:
                return u.intl.format(u.t.aCrz1d, { onClick: p });
              default:
                return "";
            }
          }, [n, p]);
        return n === l.pC.AVATAR || n === l.pC.BANNER
          ? (0, a.jsx)(s.p, {
              text: A,
              button: u.intl.string(u.t.BmJkbW),
              buttonAnalyticsObject: { section: d.jXE.USER_PROFILE },
              className: o()(f.container, t),
              ...c,
            })
          : null;
      }
    },
    378879: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return Z;
          },
          openProfileUpsellModal: function () {
            return v;
          },
        });
      var a = t(200651);
      t(192379);
      var i = t(481060),
        c = t(921813),
        o = t(687158),
        s = t(576635),
        r = t(594174),
        d = t(98278),
        l = t(792254),
        u = t(790527),
        f = t(474936),
        p = t(981631),
        A = t(486324),
        b = t(388032),
        m = t(761346);
      function v(e, n) {
        let c = r.default.getCurrentUser();
        return (
          null != c &&
          ((0, i.openModalLazy)(async () => {
            let { default: o } = await Promise.resolve().then(
              t.bind(t, 378879),
            );
            return (t) =>
              (0, a.jsx)(o, {
                user: c,
                imageSrc: n,
                uploadType: e,
                analyticsSource: p.Sbl.PROFILE_PANEL,
                analyticsLocation: {
                  section: p.jXE.USER_PROFILE,
                  object: p.qAy.BUTTON_CTA,
                },
                onSecondaryClick: i.closeAllModals,
                ...t,
              });
          }),
          !0)
        );
      }
      function Z(e) {
        let {
            user: n,
            uploadType: t,
            imageSrc: i,
            onClose: r,
            analyticsSource: p,
            analyticsLocation: v,
            onSecondaryClick: Z,
            ...h
          } = e,
          g = (0, o.ZP)(n.id),
          { primaryColor: C, secondaryColor: E } = (0, s.Z)({
            user: n,
            displayProfile: g,
            pendingAvatar: t === A.pC.AVATAR ? i : void 0,
            isPreview: !0,
          }),
          P = t === A.pC.AVATAR || t === A.pC.BANNER,
          N = null != i,
          T = (0, l.Z)(
            t === A.pC.AVATAR
              ? f.cd.ANIMATED_AVATAR_MODAL_UPSELL
              : f.cd.ANIMATED_BANNER_MODAL_UPSELL,
          );
        return P
          ? (0, a.jsx)(u.Z, {
              artURL: N ? void 0 : T,
              modalClassName: N ? m.modal : void 0,
              modalContentClassName: N ? m.modalContent : void 0,
              type:
                t === A.pC.AVATAR
                  ? f.cd.ANIMATED_AVATAR_MODAL_UPSELL
                  : f.cd.ANIMATED_BANNER_MODAL_UPSELL,
              title:
                t === A.pC.AVATAR
                  ? b.intl.string(b.t["X7tO6+"])
                  : b.intl.string(b.t.zXPa2N),
              body:
                t === A.pC.AVATAR
                  ? b.intl.string(b.t.ifCRdH)
                  : b.intl.string(b.t.yQAnf3),
              glowUp:
                t === A.pC.AVATAR
                  ? b.intl.string(b.t.ifCRdH)
                  : b.intl.string(b.t.yQAnf3),
              onSecondaryClick: () => {
                null == Z || Z(), (0, d.$)(r);
              },
              secondaryCTA: b.intl.string(b.t.PcTCBw),
              onClose: r,
              enableArtBoxShadow: !1,
              analyticsSource: p,
              analyticsLocation: v,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: N
                ? (0, a.jsx)("div", {
                    className: m.previewContainerParent,
                    children: (0, a.jsx)(c.Z, {
                      containerClassName: m.previewContainer,
                      user: n,
                      canUsePremiumCustomization: !0,
                      disabledInputs: !0,
                      pendingAvatar: t === A.pC.AVATAR ? i : void 0,
                      pendingBanner: t === A.pC.BANNER ? i : void 0,
                      pendingThemeColors: [C, E],
                      hideExampleButton: !0,
                    }),
                  })
                : void 0,
              ...h,
            })
          : null;
      }
    },
    445924: function (e, n, t) {
      var a = t(200651);
      t(192379);
      var i = t(481060),
        c = t(388032);
      n.Z = (e) => {
        let {
          onChangeAvatar: n,
          onChangeAvatarDecoration: t,
          onClose: o,
          className: s,
        } = e;
        return (0, a.jsxs)(i.Menu, {
          className: s,
          onClose: o,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": c.intl.string(c.t.ldIeAQ),
          children: [
            (0, a.jsx)(i.MenuItem, {
              id: "change-avatar",
              action: n,
              label: c.intl.string(c.t["4OynCA"]),
            }),
            (0, a.jsx)(i.MenuItem, {
              id: "change-avatar-decoration",
              action: t,
              label: c.intl.string(c.t["Tna/TU"]),
            }),
          ],
        });
      };
    },
    921813: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(120356),
        c = t.n(i),
        o = t(481060),
        s = t(680295),
        r = t(687158),
        d = t(576635),
        l = t(518950),
        u = t(502762),
        f = t(4517),
        p = t(150039),
        A = t(450734),
        b = t(225089),
        m = t(853726),
        v = t(165747),
        Z = t(981631),
        h = t(228168),
        g = t(154960);
      function C(e) {
        let {
            user: n,
            guild: t,
            canUsePremiumCustomization: i,
            onUpsellClick: C,
            pendingBanner: E,
            pendingBio: P,
            pendingPronouns: N,
            pendingAvatar: T,
            pendingAvatarDecoration: R,
            pendingNickname: I,
            pendingGlobalName: _,
            pendingThemeColors: L,
            pendingProfileEffectId: y,
            avatarClassName: x,
            containerClassName: j,
            isTryItOutFlow: B = !1,
            disabledInputs: D = !1,
            hideCustomStatus: S = !1,
            hideBioSection: w = !1,
            hideMessageInput: O = !0,
            hideExampleButton: M = !1,
          } = e,
          U = (0, r.ZP)(n.id, null == t ? void 0 : t.id),
          { avatarSrc: k, avatarDecorationSrc: V } = (0, l.Z)({
            user: n,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: R,
            avatarOverride: T,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          z = (0, p.ZT)({ pendingProfileEffectId: y, displayProfile: U }),
          { theme: F, primaryColor: K } = (0, d.Z)({
            user: n,
            displayProfile: U,
            pendingThemeColors: L,
            isPreview: i,
          });
        return (0, a.jsxs)(u.Z, {
          user: n,
          displayProfile: U,
          profileType: h.y0.BITE_SIZE,
          pendingThemeColors: L,
          className: c()(g.container, j),
          forceShowPremium: i,
          children: [
            (0, a.jsxs)("header", {
              className: g.header,
              children: [
                (0, a.jsx)(b.Z, {
                  user: n,
                  displayProfile: U,
                  guildId: null == t ? void 0 : t.id,
                  canUsePremiumCustomization: i,
                  pendingBanner: E,
                  isTryItOutFlow: B,
                  disabledInputs: D,
                  onUpsellClick: () =>
                    null == C
                      ? void 0
                      : C({ object: Z.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, a.jsx)(A.Z, {
                  user: n,
                  guild: t,
                  displayProfile: U,
                  canUsePremiumCustomization: i,
                  previewAvatar: k,
                  previewAvatarDecoration: V,
                  previewTheme: F,
                  previewPrimaryColor: K,
                  className: x,
                  disabledInputs: D,
                  isTryItOutFlow: B,
                  onUpsellClick: () =>
                    null == C ? void 0 : C({ object: Z.qAy.AVATAR }),
                }),
                !S &&
                  (0, a.jsx)(f.Z, {
                    location: "ProfileCustomizationPreview",
                    user: n,
                    profileType: h.y0.BITE_SIZE,
                  }),
              ],
            }),
            (0, a.jsx)(m.Z, {
              user: n,
              displayProfile: U,
              guild: t,
              pendingAvatar: T,
              pendingNickname: I,
              pendingGlobalName: _,
              pendingBio: P,
              pendingPronouns: N,
              isTryItOutFlow: B,
              hideBioSection: w,
            }),
            (0, a.jsx)(v.Z, {
              user: n,
              hideMessageInput: O,
              hideExampleButton: M,
            }),
            null != z && (0, a.jsx)(s.Z, { profileEffectId: z }),
          ],
        });
      }
    },
    450734: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(120356),
        c = t.n(i),
        o = t(442837),
        s = t(481060),
        r = t(906732),
        d = t(1585),
        l = t(158776),
        u = t(998502),
        f = t(445924),
        p = t(654904),
        A = t(486324),
        b = t(776458);
      let m = u.ZP.getEnableHardwareAcceleration()
        ? s.AnimatedAvatar
        : s.Avatar;
      function v(e) {
        let {
            user: n,
            guild: t,
            displayProfile: i,
            canUsePremiumCustomization: u,
            previewAvatar: v,
            previewAvatarDecoration: Z,
            previewTheme: h,
            previewPrimaryColor: g,
            className: C,
            disabledInputs: E,
            isTryItOutFlow: P,
            onUpsellClick: N,
          } = e,
          { analyticsLocations: T } = (0, r.ZP)(),
          R = (0, o.e7)([l.Z], () => l.Z.getStatus(n.id)),
          I =
            null == t ||
            (null == i ? void 0 : i.canUsePremiumProfileCustomization) ||
            u,
          _ = (0, a.jsx)(m, {
            src: v,
            avatarDecoration: Z,
            imageClassName: c()(C, { [b.overlay]: !E }),
            size: s.AvatarSizes.SIZE_80,
            "aria-label": n.username,
            status: R,
            statusTooltip: !1,
            statusBackdropColor:
              null != g ? (0, s.getStatusBackdropColor)(h) : void 0,
          });
        return E
          ? (0, a.jsx)("div", { className: b.avatar, children: _ })
          : I
            ? (0, a.jsx)(s.Popout, {
                renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, a.jsx)(f.Z, {
                    className: b.menu,
                    onClose: n,
                    onChangeAvatar: () =>
                      (0, p.$r)(A.pC.AVATAR, null == t ? void 0 : t.id, P),
                    onChangeAvatarDecoration: () => {
                      (0, d.ps)({
                        guild: null == t ? void 0 : t,
                        analyticsLocations: T,
                        isTryItOutFlow: P,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, a.jsxs)(s.Clickable, {
                    ...e,
                    className: c()(b.avatar, b.clickable),
                    children: [
                      _,
                      (0, a.jsx)(s.PencilIcon, {
                        size: "custom",
                        className: b.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, a.jsxs)(s.Clickable, {
                onClick: N,
                className: c()(b.avatar, b.clickable),
                children: [
                  _,
                  (0, a.jsx)(s.NitroWheelIcon, {
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
    225089: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(481060),
        c = t(222062),
        o = t(867176),
        s = t(654904),
        r = t(486324),
        d = t(228168),
        l = t(388032),
        u = t(93428);
      function f(e) {
        let {
            user: n,
            displayProfile: t,
            guildId: f,
            canUsePremiumCustomization: p,
            pendingBanner: A,
            isTryItOutFlow: b,
            disabledInputs: m,
            onUpsellClick: v,
          } = e,
          Z =
            p ||
            (null == t ? void 0 : t.canUsePremiumProfileCustomization) ||
            !1,
          h = Z ? i.PencilIcon : i.NitroWheelIcon,
          g = (0, c.M)(Z);
        return (0, a.jsx)(o.Z, {
          user: n,
          displayProfile: t,
          guildId: f,
          profileType: d.y0.BITE_SIZE,
          pendingBanner: A,
          canUsePremiumProfileCustomization: p,
          children:
            !m &&
            (0, a.jsxs)(i.Clickable, {
              onClick: () => {
                if (!Z && !g) {
                  null == v || v();
                  return;
                }
                (0, s.$r)(r.pC.BANNER, f, b);
              },
              className: u.clickable,
              children: [
                (0, a.jsx)(h, { size: "xs", color: "white" }),
                (0, a.jsx)(i.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    Z || g
                      ? l.intl.string(l.t.N0bC3N)
                      : l.intl.string(l.t.O1sT5u),
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(442837),
        c = t(648052),
        o = t(530),
        s = t(420654),
        r = t(116854),
        d = t(271383),
        l = t(246946),
        u = t(654904),
        f = t(228168),
        p = t(591156);
      function A(e) {
        var n;
        let {
            user: t,
            displayProfile: A,
            guild: b,
            pendingAvatar: m,
            pendingNickname: v,
            pendingGlobalName: Z,
            pendingBio: h,
            pendingPronouns: g,
            isTryItOutFlow: C,
            hideBioSection: E,
          } = e,
          P = (0, i.e7)([d.ZP], () =>
            null == b ? null : d.ZP.getMember(b.id, t.id),
          ),
          N = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation),
          T =
            null == A
              ? void 0
              : null === (n = A.getPreviewBio(h)) || void 0 === n
                ? void 0
                : n.value,
          R = null != g ? g : null == A ? void 0 : A.pronouns,
          I = (0, u.Ly)({
            pendingNickname: v,
            pendingGlobalName: Z,
            user: t,
            guildMember: P,
          });
        return (0, a.jsxs)("div", {
          inert: "",
          className: p.body,
          children: [
            (0, a.jsx)(o.Z, {
              user: t,
              profileType: f.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != P)) return;
                if (null !== m && !!(null != P.avatar || null != m))
                  return (0, a.jsx)(r.Z, { user: t, nickname: I });
              })(),
              nickname: I,
              pronouns: R,
              isTryItOut: C,
              tags: (0, a.jsx)(c.Z, {
                displayProfile: A,
                profileType: f.y0.BITE_SIZE,
              }),
            }),
            !E &&
              null != T &&
              "" !== T &&
              (0, a.jsx)(s.Z, {
                user: t,
                bio: T,
                hidePersonalInformation: N,
                viewFullBioDisabled: !0,
              }),
          ],
        });
      }
    },
    165747: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(475413),
        c = t(955418),
        o = t(388032),
        s = t(591156);
      function r(e) {
        let { user: n, hideMessageInput: t, hideExampleButton: r } = e;
        return t
          ? (0, a.jsx)("footer", {
              className: s.footer,
              children:
                !r &&
                (0, a.jsx)(i.tG, {
                  text: o.intl.string(o.t.hZkfwc),
                  fullWidth: !0,
                }),
            })
          : (0, a.jsx)("footer", {
              inert: "",
              className: s.footer,
              children: (0, a.jsx)(c.Z, { user: n }),
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
//# sourceMappingURL=1dcc5eed057665b20a3b.js.map
