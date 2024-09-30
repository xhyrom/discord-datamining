"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55183"],
  {
    223223: function (e) {
      e.exports = "/assets/1a88b4ae0f6cc7cdbd66.png";
    },
    566111: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var r = n(470079),
        s = n(442837),
        i = n(365943),
        l = n(25251),
        o = n(223143);
      function a() {
        let {
            isFetching: e,
            error: t,
            categories: n,
            purchases: a,
          } = (0, o.Z)(),
          [c, d, u] = (0, s.Wu)([l.Z], () => [
            l.Z.isFetching,
            l.Z.fetchError,
            l.Z.profileEffects,
          ]);
        return (
          r.useEffect(() => {
            (0, i.z)(!0);
          }, []),
          {
            isFetching: e || c,
            error: null != t ? t : d,
            profileEffects: u,
            categories: n,
            purchases: a,
          }
        );
      }
    },
    445924: function (e, t, n) {
      var r = n(735250);
      n(470079);
      var s = n(481060),
        i = n(689938);
      t.Z = (e) => {
        let {
          onChangeAvatar: t,
          onChangeAvatarDecoration: n,
          onClose: l,
          className: o,
        } = e;
        return (0, r.jsxs)(s.Menu, {
          className: o,
          onClose: l,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": i.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
          children: [
            (0, r.jsx)(s.MenuItem, {
              id: "change-avatar",
              action: t,
              label: i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR,
            }),
            (0, r.jsx)(s.MenuItem, {
              id: "change-avatar-decoration",
              action: n,
              label: i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION,
            }),
          ],
        });
      };
    },
    921813: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var r = n(735250);
      n(470079);
      var s = n(120356),
        i = n.n(s),
        l = n(481060),
        o = n(680295),
        a = n(687158),
        c = n(576635),
        d = n(518950),
        u = n(438163),
        f = n(502762),
        m = n(150039),
        E = n(450734),
        p = n(225089),
        _ = n(853726),
        h = n(165747),
        I = n(981631),
        g = n(228168),
        v = n(706995);
      function C(e) {
        let {
            user: t,
            guild: n,
            canUsePremiumCustomization: s,
            onUpsellClick: C,
            pendingBanner: x,
            pendingBio: P,
            pendingPronouns: Z,
            pendingAvatar: A,
            pendingAvatarDecoration: T,
            pendingNickname: N,
            pendingGlobalName: S,
            pendingThemeColors: j,
            pendingProfileEffectId: R,
            avatarClassName: M,
            containerClassName: L,
            isTryItOutFlow: O = !1,
            disabledInputs: y = !1,
            hideCustomStatus: b = !1,
            hideBioSection: B = !1,
            hideMessageInput: D = !0,
            hideExampleButton: U = !1,
          } = e,
          k = (0, a.ZP)(t.id, null == n ? void 0 : n.id),
          { avatarSrc: w, avatarDecorationSrc: F } = (0, d.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: T,
            avatarOverride: A,
            size: l.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          G = (0, m.ZT)({ pendingProfileEffectId: R, displayProfile: k }),
          { theme: H, primaryColor: z } = (0, c.Z)({
            user: t,
            displayProfile: k,
            pendingThemeColors: j,
            isPreview: s,
          });
        return (0, r.jsxs)(f.Z, {
          user: t,
          displayProfile: k,
          profileType: g.y0.BITE_SIZE,
          pendingThemeColors: j,
          pendingProfileEffectId: G,
          className: i()(v.container, L),
          forceShowPremium: s,
          children: [
            (0, r.jsxs)("header", {
              className: v.header,
              children: [
                (0, r.jsx)(p.Z, {
                  user: t,
                  displayProfile: k,
                  guildId: null == n ? void 0 : n.id,
                  canUsePremiumCustomization: s,
                  pendingBanner: x,
                  isTryItOutFlow: O,
                  disabledInputs: y,
                  onUpsellClick: () =>
                    null == C
                      ? void 0
                      : C({ object: I.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, r.jsx)(E.Z, {
                  user: t,
                  guild: n,
                  displayProfile: k,
                  canUsePremiumCustomization: s,
                  previewAvatar: w,
                  previewAvatarDecoration: F,
                  previewTheme: H,
                  previewPrimaryColor: z,
                  className: M,
                  disabledInputs: y,
                  isTryItOutFlow: O,
                  onUpsellClick: () =>
                    null == C ? void 0 : C({ object: I.qAy.AVATAR }),
                }),
                !b && (0, r.jsx)(u.Z, { user: t, profileType: g.y0.BITE_SIZE }),
              ],
            }),
            (0, r.jsx)(_.Z, {
              user: t,
              displayProfile: k,
              guild: n,
              pendingAvatar: A,
              pendingNickname: N,
              pendingGlobalName: S,
              pendingBio: P,
              pendingPronouns: Z,
              isTryItOutFlow: O,
              hideBioSection: B,
            }),
            (0, r.jsx)(h.Z, {
              user: t,
              hideMessageInput: D,
              hideExampleButton: U,
            }),
            null != G && (0, r.jsx)(o.Z, { profileEffectId: G }),
          ],
        });
      }
    },
    450734: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(735250);
      n(470079);
      var s = n(120356),
        i = n.n(s),
        l = n(442837),
        o = n(481060),
        a = n(906732),
        c = n(1585),
        d = n(158776),
        u = n(998502),
        f = n(445924),
        m = n(654904),
        E = n(486324),
        p = n(529934);
      let _ = u.ZP.getEnableHardwareAcceleration()
        ? o.AnimatedAvatar
        : o.Avatar;
      function h(e) {
        let {
            user: t,
            guild: n,
            displayProfile: s,
            canUsePremiumCustomization: u,
            previewAvatar: h,
            previewAvatarDecoration: I,
            previewTheme: g,
            previewPrimaryColor: v,
            className: C,
            disabledInputs: x,
            isTryItOutFlow: P,
            onUpsellClick: Z,
          } = e,
          { analyticsLocations: A } = (0, a.ZP)(),
          T = (0, l.e7)([d.Z], () => d.Z.getStatus(t.id)),
          N =
            null == n ||
            (null == s ? void 0 : s.canUsePremiumProfileCustomization) ||
            u,
          S = (0, r.jsx)(_, {
            src: h,
            avatarDecoration: I,
            imageClassName: i()(C, { [p.overlay]: !x }),
            size: o.AvatarSizes.SIZE_80,
            "aria-label": t.username,
            status: T,
            statusTooltip: !1,
            statusBackdropColor:
              null != v ? (0, o.getStatusBackdropColor)(g) : void 0,
          });
        return x
          ? (0, r.jsx)("div", { className: p.avatar, children: S })
          : N
            ? (0, r.jsx)(o.Popout, {
                renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(f.Z, {
                    className: p.menu,
                    onClose: t,
                    onChangeAvatar: () =>
                      (0, m.$r)(E.pC.AVATAR, null == n ? void 0 : n.id, P),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == n ? void 0 : n,
                        analyticsLocations: A,
                        isTryItOutFlow: P,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, r.jsxs)(o.Clickable, {
                    ...e,
                    className: i()(p.avatar, p.clickable),
                    children: [
                      S,
                      (0, r.jsx)(o.PencilIcon, {
                        size: "custom",
                        className: p.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, r.jsxs)(o.Clickable, {
                onClick: Z,
                className: i()(p.avatar, p.clickable),
                children: [
                  S,
                  (0, r.jsx)(o.NitroWheelIcon, {
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
    225089: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(735250);
      n(470079);
      var s = n(481060),
        i = n(81245),
        l = n(867176),
        o = n(654904),
        a = n(486324),
        c = n(228168),
        d = n(689938),
        u = n(892532);
      function f(e) {
        let {
            user: t,
            displayProfile: n,
            guildId: f,
            canUsePremiumCustomization: m,
            pendingBanner: E,
            isTryItOutFlow: p,
            disabledInputs: _,
            onUpsellClick: h,
          } = e,
          I =
            m ||
            (null == n ? void 0 : n.canUsePremiumProfileCustomization) ||
            !1,
          g = I ? s.PencilIcon : s.NitroWheelIcon,
          v = (0, i.Mu)("ProfileCustomizationPreviewBanner", I);
        return (0, r.jsx)(l.Z, {
          user: t,
          displayProfile: n,
          guildId: f,
          profileType: c.y0.BITE_SIZE,
          pendingBanner: E,
          canUsePremiumProfileCustomization: m,
          children:
            !_ &&
            (0, r.jsxs)(s.Clickable, {
              onClick: () => {
                if (!I && !v) {
                  null == h || h();
                  return;
                }
                (0, o.$r)(a.pC.BANNER, f, p);
              },
              className: u.clickable,
              children: [
                (0, r.jsx)(g, { size: "xs", color: "white" }),
                (0, r.jsx)(s.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    I || v
                      ? d.Z.Messages.CHANGE_BANNER
                      : d.Z.Messages.USER_SETTINGS_UNLOCK_BANNER,
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var r = n(735250);
      n(470079);
      var s = n(442837),
        i = n(954138),
        l = n(979264),
        o = n(648052),
        a = n(530),
        c = n(420654),
        d = n(116854),
        u = n(271383),
        f = n(246946),
        m = n(654904),
        E = n(228168),
        p = n(451563);
      function _(e) {
        var t;
        let {
            user: n,
            displayProfile: _,
            guild: h,
            pendingAvatar: I,
            pendingNickname: g,
            pendingGlobalName: v,
            pendingBio: C,
            pendingPronouns: x,
            isTryItOutFlow: P,
            hideBioSection: Z,
          } = e,
          A = (0, s.e7)([u.ZP], () =>
            null == h ? null : u.ZP.getMember(h.id, n.id),
          ),
          T = (0, s.e7)([f.Z], () => f.Z.hidePersonalInformation),
          N = (0, i.Z)("ProfileCustomizationPreviewBody"),
          S =
            null == _
              ? void 0
              : null === (t = _.getPreviewBio(C)) || void 0 === t
                ? void 0
                : t.value,
          j = null != x ? x : null == _ ? void 0 : _.pronouns,
          R = (0, m.Ly)({
            pendingNickname: g,
            pendingGlobalName: v,
            user: n,
            guildMember: A,
          });
        return (0, r.jsxs)("div", {
          inert: "",
          className: p.body,
          children: [
            (0, r.jsx)(a.Z, {
              user: n,
              profileType: E.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != A)) return;
                if (null !== I && !!(null != A.avatar || null != I))
                  return (0, r.jsx)(d.Z, { user: n, nickname: R });
              })(),
              nickname: R,
              pronouns: j,
              isTryItOut: P,
              tags: (0, r.jsx)(o.Z, {
                displayProfile: _,
                profileType: E.y0.BITE_SIZE,
              }),
            }),
            N && (0, r.jsx)(l.ZP, { userId: n.id, inline: !1 }),
            !Z &&
              null != S &&
              "" !== S &&
              (0, r.jsx)(c.Z, {
                user: n,
                bio: S,
                hidePersonalInformation: T,
                viewFullBioDisabled: !0,
              }),
          ],
        });
      }
    },
    165747: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(735250);
      n(470079);
      var s = n(475413),
        i = n(955418),
        l = n(689938),
        o = n(451563);
      function a(e) {
        let { user: t, hideMessageInput: n, hideExampleButton: a } = e;
        return n
          ? (0, r.jsx)("footer", {
              className: o.footer,
              children:
                !a &&
                (0, r.jsx)(s.tG, {
                  text: l.Z.Messages
                    .USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                  fullWidth: !0,
                }),
            })
          : (0, r.jsx)("footer", {
              inert: "",
              className: o.footer,
              children: (0, r.jsx)(i.Z, { user: t }),
            });
      }
    },
    528439: function (e, t, n) {
      n.d(t, {
        $0: function () {
          return r;
        },
        Tm: function () {
          return E;
        },
        oT: function () {
          return p;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var r,
        s,
        i = n(470079),
        l = n(392711),
        o = n(399606),
        a = n(597688),
        c = n(1870),
        d = n(884697),
        u = n(594174),
        f = n(74538),
        m = n(689938);
      ((s = r || (r = {})).PURCHASE = "purchase"),
        (s.PREMIUM_PURCHASE = "premium_purchase"),
        (s.PREVIEW = "preview");
      let E = { id: "None" },
        p = { id: "Shop" };
      t.ZP = () => {
        let e = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
          t = f.ZP.canUseCollectibles(e),
          n = (0, o.e7)([c.Z], () => c.Z.purchases),
          [r, s] = (0, o.Wu)([a.Z], () => [a.Z.categories, a.Z.products]);
        return (0, i.useMemo)(() => {
          let e = (0, l.uniqBy)(
            [...(0, d.aj)(n), ...(0, d.XS)(r)],
            "id",
          ).reduce(
            (e, r) => {
              let i = n.get(r.skuId);
              return (0, d.qS)(i)
                ? (e.premium_purchase.push(r), e)
                : null != i
                  ? (e.purchase.push(r), e)
                  : !t && (0, d.G1)(s.get(r.skuId))
                    ? (e.premium_purchase.push(r), e)
                    : (e.preview.push(r), e);
            },
            { purchase: [], premium_purchase: [], preview: [] },
          );
          return [
            {
              section: "purchase",
              items: [E, p, ...e.purchase],
              height: 12,
              header: m.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER,
            },
            {
              section: "premium_purchase",
              items: e.premium_purchase,
              height: 12,
              header:
                m.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER,
            },
            {
              section: "preview",
              items: e.preview,
              height: 12,
              header: m.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER,
            },
          ].filter((e) => {
            let { items: t } = e;
            return t.length > 0;
          });
        }, [r, s, n, t]);
      };
    },
    191564: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        }),
        n(47120);
      var r = n(735250),
        s = n(470079),
        i = n(979554),
        l = n(442837),
        o = n(481060),
        a = n(100527),
        c = n(906732),
        d = n(335131),
        u = n(884697),
        f = n(449217),
        m = n(566111),
        E = n(81245),
        p = n(269982),
        _ = n(197115),
        h = n(150039),
        I = n(594174),
        g = n(626135),
        v = n(74538),
        C = n(934261),
        x = n(52268),
        P = n(981631),
        Z = n(474936),
        A = n(689938),
        T = n(485002);
      function N(e) {
        let {
            user: t,
            product: n,
            purchase: i,
            onApply: l,
            onClose: c,
            disableApplyButton: f,
            canUseCollectibles: m,
            selectedProfileEffectId: h,
            selectedProfileEffectItem: I,
            analyticsLocations: g,
          } = e,
          C = s.useCallback(() => {
            c(),
              (0, d.mK)({
                analyticsLocations: g,
                analyticsSource: a.Z.EDIT_PROFILE_EFFECT_MODAL,
                initialProductSkuId: null != I ? I.skuId : void 0,
              });
          }, [c, g, I]),
          x = (0, E.Mu)("ProfileEffectModalFooter");
        return (0, r.jsxs)(o.ModalFooter, {
          className: T.modalFooter,
          children: [
            (0, r.jsxs)("div", {
              className: T.buttonsRight,
              children: [
                (0, r.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.PRIMARY,
                  onClick: c,
                  children: A.Z.Messages.CANCEL,
                }),
                (null != i && (!(0, u.qS)(i) || m)) || null === h
                  ? (0, r.jsx)(o.Button, {
                      onClick: l,
                      disabled: f,
                      children: A.Z.Messages.AVATAR_DECORATION_MODAL_APPLY,
                    })
                  : m || !(0, u.G1)(n)
                    ? (0, r.jsx)(o.Button, {
                        onClick: C,
                        children: A.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                      })
                    : (0, r.jsx)(_.Z, {
                        subscriptionTier: Z.Si.TIER_2,
                        showGradient: x,
                        buttonText: v.ZP.isPremium(t)
                          ? A.Z.Messages
                              .USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL
                          : x
                            ? A.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                            : A.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                      }),
              ],
            }),
            (0, u.G1)(n) &&
              (0, r.jsx)(p.Z, { product: n, onSecondaryClick: c }),
          ],
        });
      }
      function S(e) {
        let {
            user: t,
            guild: n,
            categories: i,
            purchases: l,
            onClose: a,
            initialSelectedProfileEffectId: c,
            currentSavedEffectId: d,
            analyticsLocations: m,
          } = e,
          { pendingProfileEffectId: E } = (0, h.bd)(n),
          [p, _] = s.useMemo(() => {
            let e = (0, u.bl)(i, l);
            return [e.purchased, e.shopPreviews];
          }, [i, l]),
          [I, g] = s.useState(() =>
            null != c
              ? c
              : void 0 !== E
                ? E
                : null == d
                  ? null
                  : null != d
                    ? d
                    : null,
          ),
          [P, Z] = s.useMemo(() => {
            var e;
            let t = p.find((e) => (null == e ? void 0 : e.id) === I),
              n = null != t || null === I;
            return [
              null !==
                (e =
                  null != t
                    ? t
                    : _.find((e) => (null == e ? void 0 : e.id) === I)) &&
              void 0 !== e
                ? e
                : null,
              n,
            ];
          }, [I, p, _]),
          { product: S, purchase: j } = (0, f.Z)(null == P ? void 0 : P.skuId),
          R = s.useRef(null),
          M = v.ZP.canUseCollectibles(t),
          L = I === (void 0 === E ? (null != d ? d : null) : E),
          O = s.useCallback(
            (e) => {
              g(e);
            },
            [g],
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(o.ModalHeader, {
              separator: !1,
              className: T.modalHeader,
              children: [
                (0, r.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: A.Z.Messages.PROFILE_EFFECT_MODAL_HEADER,
                }),
                (0, r.jsx)(o.ModalCloseButton, {
                  className: T.modalCloseButton,
                  onClick: a,
                }),
              ],
            }),
            (0, r.jsxs)(o.ModalContent, {
              className: T.modalContent,
              children: [
                (0, r.jsx)(x.Z, {
                  user: t,
                  guild: n,
                  pendingProfileEffect: I,
                  selectedProfileEffectRef: R,
                  onSelect: O,
                  onClose: a,
                }),
                (0, r.jsx)(C.Z, {
                  user: t,
                  canApplySelectedChange: Z,
                  pendingProfileEffectRecord: P,
                  product: S,
                  purchase: j,
                  guild: n,
                }),
              ],
            }),
            (0, r.jsx)(N, {
              user: t,
              onApply: () => {
                (0, h.s6)(I, d, null == n ? void 0 : n.id), a();
              },
              onClose: a,
              product: S,
              purchase: j,
              canUseCollectibles: M,
              selectedProfileEffectId: I,
              selectedProfileEffectItem: P,
              disableApplyButton: L,
              analyticsLocations: m,
            }),
          ],
        });
      }
      function j(e) {
        let {
            transitionState: t,
            analyticsLocations: n,
            initialSelectedEffectId: u,
            guild: f,
            onClose: E,
          } = e,
          { isFetching: p, categories: _, purchases: v } = (0, m.Z)(),
          C = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
          { analyticsLocations: x } = (0, c.ZP)(
            n,
            a.Z.EDIT_PROFILE_EFFECT_MODAL,
          ),
          Z = (0, h.Kg)(C, f);
        return (
          s.useEffect(() => {
            g.default.track(P.rMx.OPEN_MODAL, {
              type: P.jXE.PROFILE_EFFECT_CUSTOMIZATION,
              location_stack: x,
            });
          }, [x]),
          s.useEffect(
            () => () => {
              (0, d.K$)({
                categories: [..._.values()],
                itemTypes: [i.Z.PROFILE_EFFECT],
              });
            },
            [_],
          ),
          (0, r.jsx)(c.Gt, {
            value: x,
            children: (0, r.jsx)(o.ModalRoot, {
              transitionState: t,
              className: T.modal,
              size: p ? o.ModalSize.DYNAMIC : o.ModalSize.MEDIUM,
              children: p
                ? (0, r.jsx)(o.Spinner, {
                    className: T.spinner,
                    type: o.Spinner.Type.SPINNING_CIRCLE,
                  })
                : (0, r.jsx)(S, {
                    user: C,
                    guild: f,
                    categories: _,
                    purchases: v,
                    initialSelectedProfileEffectId: u,
                    currentSavedEffectId: Z,
                    onClose: E,
                    analyticsLocations: x,
                  }),
            }),
          })
        );
      }
    },
    934261: function (e, t, n) {
      var r = n(735250);
      n(470079);
      var s = n(442837),
        i = n(481060),
        l = n(809206),
        o = n(597688),
        a = n(884697),
        c = n(18438),
        d = n(778825),
        u = n(957730),
        f = n(81245),
        m = n(921813),
        E = n(350327),
        p = n(687158),
        _ = n(706454),
        h = n(695346),
        I = n(265159),
        g = n(25990),
        v = n(594174),
        C = n(55935),
        x = n(74538),
        P = n(689938),
        Z = n(173936);
      let A = (e) => {
          var t;
          let {
              effectIsOwned: n,
              pendingProfileEffectRecord: l,
              product: c,
              purchase: d,
            } = e,
            u = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            m = (0, s.e7)([o.Z], () =>
              o.Z.getProduct(null == l ? void 0 : l.skuId),
            ),
            E = (0, s.e7)([_.default], () => _.default.locale),
            p = x.ZP.canUseCollectibles(u),
            h = (0, a.qS)(d),
            I = (0, a.G1)(c),
            g = !p && h,
            A =
              (null == d ? void 0 : d.expiresAt) != null
                ? (0, C.TD)(Date.now(), d.expiresAt)
                : null,
            N = (0, f.Mu)("ProfileEffectDescription", !I || p),
            S = T(g, I, p, N);
          return null != l
            ? (0, r.jsx)("div", {
                className: n
                  ? Z.effectDescriptionNoGradient
                  : Z.effectDescriptionBorderWithGradient,
                children: (0, r.jsxs)("div", {
                  className: Z.effectDescriptionContainer,
                  children: [
                    (0, r.jsx)(i.Text, {
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      className: Z.effectName,
                      children:
                        null !== (t = null == d ? void 0 : d.name) &&
                        void 0 !== t
                          ? t
                          : null == m
                            ? void 0
                            : m.name,
                    }),
                    (0, r.jsx)(i.Text, {
                      color: "text-normal",
                      variant: "text-sm/normal",
                      className: Z.effectDescription,
                      children: null != d ? d.summary : S,
                    }),
                    null != A &&
                      (0, r.jsx)(i.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: Z.effectPurchasedAt,
                        children: P.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({
                          days: A.days.toString(),
                        }),
                      }),
                    null != d &&
                      (0, r.jsxs)(i.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: Z.effectPurchasedAt,
                        children: [
                          P.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                            date: d.purchasedAt.toLocaleDateString(E, {
                              month: "long",
                              year: "numeric",
                            }),
                          }),
                          null != d.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("br", {}),
                                P.Z.Messages.COLLECTIBLES_EXPIRE_DATE.format({
                                  date: d.expiresAt.toLocaleDateString(E, {
                                    minute: "numeric",
                                    hour: "numeric",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    h &&
                      (0, r.jsx)(i.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: Z.effectPurchasedAt,
                        children:
                          P.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC,
                      }),
                  ],
                }),
              })
            : null;
        },
        T = (e, t, n, r) => {
          if (e) return P.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED;
          if (t && n)
            return P.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM;
          if (t && !n)
            return r
              ? P.Z.Messages
                  .PREMIUM_UPSELL_PROFILE_EFFECT_INLINE_UPSELL_DESCRIPTION
              : P.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER;
          return P.Z.Messages
            .CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
        };
      t.Z = (e) => {
        var t;
        let {
            user: n,
            pendingProfileEffectRecord: i,
            canApplySelectedChange: o,
            product: a,
            purchase: f,
            guild: _,
          } = e,
          {
            pendingGlobalName: v,
            pendingNickname: C,
            pendingPronouns: P,
            pendingBio: T,
            pendingBanner: N,
            pendingAvatar: S,
            pendingAvatarDecoration: j,
            pendingThemeColors: R,
            pendingAccentColor: M,
          } = (0, s.cj)([d.Z, g.Z], () => ({
            pendingNickname: void 0,
            pendingGlobalName: void 0,
            pendingAccentColor: void 0,
            ...(null != _ ? d.Z.getAllPending() : g.Z.getAllPending()),
          })),
          L = x.ZP.isPremium(n),
          O = x.ZP.canUsePremiumProfileCustomization(n),
          y = (0, p.ZP)(n.id),
          b = !!(null == y ? void 0 : y.getPreviewBio(T).value),
          B = {
            user: n,
            guild: _,
            pendingGlobalName: v,
            pendingNickname: C,
            pendingPronouns: P,
            pendingBio:
              h.dN.useSetting() && null != T
                ? u.ZP.parse(void 0, T).content
                : T,
            pendingBanner: N,
            useLargeBanner: !0,
            pendingAvatar: S,
            pendingAvatarDecoration: j,
            pendingThemeColors: R,
            pendingAccentColor: M,
            pendingProfileEffectId:
              null !== (t = null == i ? void 0 : i.id) && void 0 !== t
                ? t
                : null,
            hideFakeActivity: b,
            canUsePremiumCustomization: O,
            onUpsellClick: I.Z,
            onAvatarChange: null != _ ? c.I5 : l.I5,
            onBannerChange: E.g_,
          };
        return (0, r.jsxs)("div", {
          className: Z.previewContainer,
          children: [
            (0, r.jsx)(m.Z, { ...B, disabledInputs: !0, hideCustomStatus: !0 }),
            !1,
            (0, r.jsx)(A, {
              effectIsOwned: o,
              pendingProfileEffectRecord: i,
              product: a,
              purchase: f,
              userIsPremium: L,
            }),
          ],
        });
      };
    },
    52268: function (e, t, n) {
      n(627341);
      var r = n(735250),
        s = n(470079),
        i = n(120356),
        l = n.n(i),
        o = n(278074),
        a = n(831209),
        c = n(399606),
        d = n(481060),
        u = n(37234),
        f = n(597688),
        m = n(884697),
        E = n(81245),
        p = n(74538),
        _ = n(731896),
        h = n(528439),
        I = n(981631),
        g = n(689938),
        v = n(876573),
        C = n(223223);
      let x = () => 80,
        P = (e) => {
          let { children: t, className: n, isSelected: s = !1, ...i } = e;
          return (0, r.jsx)(d.Clickable, {
            className: l()(v.effectGridItem, n, { [v.selected]: s }),
            ...i,
            onClick: i.onSelect,
            children: t,
          });
        },
        Z = (e) => {
          var t;
          let {
              user: n,
              profileEffect: i,
              innerRef: l,
              section: o,
              isSelected: u,
              ...I
            } = e,
            x = (0, _.V)(i.id),
            Z = (0, c.e7)([f.Z], () => {
              let e = f.Z.getProduct(i.skuId);
              return (0, m.G1)(e);
            }),
            A = (0, m.Yq)(i.skuId),
            T = s.useRef(null),
            {
              accessibilityLabel: N,
              thumbnailPreviewSrc: S,
              title: j,
            } = null !== (t = null == x ? void 0 : x.config) && void 0 !== t
              ? t
              : {},
            R = p.ZP.canUseCollectibles(n),
            M = o === h.$0.PREMIUM_PURCHASE && !R,
            L = (0, E.Mu)("ProfileEffectPresetItem");
          return (0, r.jsxs)(P, {
            className: !M || u || L ? void 0 : v.decorationGridItemChurned,
            innerRef: null != l ? l : T,
            isSelected: u,
            ...I,
            children: [
              (0, r.jsx)("img", {
                src: C,
                alt: N,
                className: v.presetEffectBackground,
              }),
              (0, r.jsx)("img", {
                className: v.presetEffectImg,
                src: S,
                alt: j,
              }),
              o === h.$0.PURCHASE || (o === h.$0.PREMIUM_PURCHASE && R)
                ? null
                : A
                  ? (0, r.jsx)(d.PremiumBadge, {
                      className: v.newBadge,
                      text: (0, r.jsxs)("div", {
                        className: v.newBadgeText,
                        children: [
                          (0, r.jsx)(d.LockIcon, {
                            size: "xxs",
                            color: "currentColor",
                          }),
                          g.Z.Messages.NEW,
                        ],
                      }),
                    })
                  : (0, r.jsx)(d.IconBadge, {
                      icon: Z
                        ? () =>
                            (0, r.jsx)(d.NitroWheelIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                            })
                        : () =>
                            (0, r.jsx)(d.LockIcon, {
                              size: "xxs",
                              color: "currentColor",
                            }),
                      color: a.Z.BACKGROUND_ACCENT,
                      className: v.lockBadge,
                    }),
            ],
          });
        };
      t.Z = (e) => {
        let {
            user: t,
            guild: n,
            pendingProfileEffect: s,
            selectedProfileEffectRef: i,
            onSelect: l,
            onClose: a,
          } = e,
          c = () => {
            a(), (0, u.jN)(I.S9g.COLLECTIBLES_SHOP);
          },
          f = (0, h.ZP)(),
          m = null != s;
        return (0, r.jsx)("section", {
          className: v.section,
          children: (0, r.jsx)(d.MasonryList, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: v.list,
            columns: 3,
            sections: f.map((e) => {
              let { items: t } = e;
              return t.length;
            }),
            renderItem: (e, a, u, E) => {
              let { section: p, items: _ } = f[e];
              return (0, o.EQ)(_[a])
                .with(h.Tm, () =>
                  (0, r.jsxs)(
                    P,
                    {
                      style: { ...u },
                      isSelected: !m,
                      onSelect: () => l(null),
                      children: [
                        (0, r.jsx)(d.DenyIcon, {
                          size: "md",
                          color: "currentColor",
                          className: v.notAllowedIcon,
                        }),
                        (0, r.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children:
                            null != n
                              ? g.Z.Messages
                                  .USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT
                              : g.Z.Messages.NONE,
                        }),
                      ],
                    },
                    E,
                  ),
                )
                .with(h.oT, () =>
                  (0, r.jsxs)(
                    P,
                    {
                      style: u,
                      onSelect: c,
                      children: [
                        (0, r.jsx)(d.ShopIcon, {
                          size: "custom",
                          width: 23,
                          height: 23,
                          color: "currentColor",
                          className: v.shopIcon,
                        }),
                        (0, r.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children: g.Z.Messages.COLLECTIBLES_SHOP,
                        }),
                      ],
                    },
                    E,
                  ),
                )
                .otherwise((e) => {
                  let n = s === e.id;
                  return (0, r.jsx)(
                    Z,
                    {
                      user: t,
                      style: { ...u },
                      section: p,
                      profileEffect: e,
                      innerRef: n ? i : void 0,
                      isSelected: n,
                      onSelect: () => l(e.id),
                    },
                    E,
                  );
                });
            },
            renderSection: (e, t) => {
              let { header: n } = f[e];
              return (0, r.jsx)("div", {
                style: {
                  ...t,
                  height: "".concat(16, "px"),
                  position: "absolute",
                },
                children: (0, r.jsx)(d.FormTitle, { children: n }),
              });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => {
              var n, r;
              return null !==
                (r =
                  null === (n = f[e].items[t]) || void 0 === n
                    ? void 0
                    : n.id) && void 0 !== r
                ? r
                : null;
            },
            getItemHeight: x,
            removeEdgeItemGutters: !0,
          }),
        });
      };
    },
    265159: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(735250);
      n(470079);
      var s = n(481060),
        i = n(981631);
      function l() {
        (0, s.openModalLazy)(async () => {
          let { default: e } = await n.e("38047").then(n.bind(n, 975863));
          return (t) =>
            (0, r.jsx)(e, {
              ...t,
              source: {
                page: i.ZY5.USER_SETTINGS,
                section: i.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                object: i.qAy.BUTTON_CTA,
                type: i.Qqv.BUY,
              },
            });
        });
      }
    },
    706995: function (e, t, n) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    529934: function (e, t, n) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    892532: function (e, t, n) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
    485002: function (e, t, n) {
      e.exports = {
        modal: "modal_fbd6d1",
        modalFooter: "modalFooter_fbd6d1",
        buttonsRight: "buttonsRight_fbd6d1",
        modalHeader: "modalHeader_fbd6d1",
        modalCloseButton: "modalCloseButton_fbd6d1",
        modalContent: "modalContent_fbd6d1",
        spinner: "spinner_fbd6d1",
      };
    },
    173936: function (e, t, n) {
      e.exports = {
        previewContainer: "previewContainer_a9d381",
        effectDescriptionBorderWithGradient:
          "effectDescriptionBorderWithGradient_a9d381 effectDescriptionBorder_a9d381",
        effectDescriptionNoGradient:
          "effectDescriptionNoGradient_a9d381 effectDescriptionBorder_a9d381",
        effectDescriptionContainer: "effectDescriptionContainer_a9d381",
        effectDescription: "effectDescription_a9d381",
        effectName: "effectName_a9d381",
        effectPurchasedAt: "effectPurchasedAt_a9d381",
      };
    },
    876573: function (e, t, n) {
      e.exports = {
        notAllowedIcon: "notAllowedIcon_c80296 icon_c80296",
        effectGridItem: "effectGridItem_c80296",
        selected: "selected_c80296",
        section: "section_c80296",
        list: "list_c80296",
        shopIcon: "shopIcon_c80296 icon_c80296",
        decorationGridItemChurned: "decorationGridItemChurned_c80296",
        lockBadge: "lockBadge_c80296",
        newBadge: "newBadge_c80296",
        newBadgeText: "newBadgeText_c80296",
        presetEffectImg: "presetEffectImg_c80296",
        presetEffectBackground: "presetEffectBackground_c80296",
      };
    },
  },
]);
//# sourceMappingURL=f8b44bfac3c3a1523b60.js.map
