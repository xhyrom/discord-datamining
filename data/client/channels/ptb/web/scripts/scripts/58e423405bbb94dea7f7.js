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
          return o;
        },
      }),
        n(47120);
      var r = n(470079),
        s = n(442837),
        i = n(365943),
        l = n(25251),
        a = n(223143);
      function o() {
        let {
            isFetching: e,
            error: t,
            categories: n,
            purchases: o,
          } = (0, a.Z)(),
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
            purchases: o,
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
          className: a,
        } = e;
        return (0, r.jsxs)(s.Menu, {
          className: a,
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
          return I;
        },
      });
      var r = n(735250);
      n(470079);
      var s = n(481060),
        i = n(680295),
        l = n(318661),
        a = n(721987),
        o = n(438163),
        c = n(502762),
        d = n(204197),
        u = n(654904),
        f = n(450734),
        m = n(225089),
        E = n(853726),
        p = n(165747),
        _ = n(981631),
        h = n(228168),
        g = n(60638);
      function I(e) {
        let {
            user: t,
            guild: n,
            canUsePremiumCustomization: I,
            onUpsellClick: v,
            pendingBanner: C,
            pendingBio: x,
            pendingPronouns: A,
            pendingAvatar: P,
            pendingAvatarDecoration: Z,
            pendingNickname: T,
            pendingGlobalName: N,
            pendingThemeColors: S,
            pendingProfileEffectId: j,
            avatarClassName: R,
            isTryItOutFlow: M = !1,
            disabledInputs: O = !1,
            hideCustomStatus: L = !1,
            hideBioSection: y = !1,
            hideMessageInput: b = !0,
            hideExampleButton: B = !1,
          } = e,
          D = (0, l.ZP)(t.id, null == n ? void 0 : n.id),
          { avatarSrc: U, avatarDecorationSrc: k } = (0, d.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: Z,
            avatarOverride: P,
            size: s.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          w = (0, u.ZT)({ pendingProfileEffectId: j, displayProfile: D }),
          { theme: G, primaryColor: F } = (0, a.Z)({
            user: t,
            displayProfile: D,
            pendingThemeColors: S,
            isPreview: I,
          });
        return (0, r.jsxs)(c.Z, {
          user: t,
          displayProfile: D,
          profileType: h.y0.BITE_SIZE,
          pendingThemeColors: S,
          pendingProfileEffectId: w,
          className: g.container,
          forceShowPremium: I,
          children: [
            (0, r.jsxs)("header", {
              className: g.header,
              children: [
                (0, r.jsx)(m.Z, {
                  user: t,
                  displayProfile: D,
                  guildId: null == n ? void 0 : n.id,
                  canUsePremiumCustomization: I,
                  pendingBanner: C,
                  isTryItOutFlow: M,
                  disabledInputs: O,
                  onUpsellClick: () =>
                    null == v
                      ? void 0
                      : v({ object: _.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, r.jsx)(f.Z, {
                  user: t,
                  guild: n,
                  displayProfile: D,
                  canUsePremiumCustomization: I,
                  previewAvatar: U,
                  previewAvatarDecoration: k,
                  previewTheme: G,
                  previewPrimaryColor: F,
                  className: R,
                  disabledInputs: O,
                  isTryItOutFlow: M,
                  onUpsellClick: () =>
                    null == v ? void 0 : v({ object: _.qAy.AVATAR }),
                }),
                !L && (0, r.jsx)(o.Z, { user: t, profileType: h.y0.BITE_SIZE }),
              ],
            }),
            (0, r.jsx)(E.Z, {
              user: t,
              displayProfile: D,
              guild: n,
              pendingAvatar: P,
              pendingNickname: T,
              pendingGlobalName: N,
              pendingBio: x,
              pendingPronouns: A,
              isTryItOutFlow: M,
              hideBioSection: y,
            }),
            (0, r.jsx)(p.Z, {
              user: t,
              hideMessageInput: b,
              hideExampleButton: B,
            }),
            null != w && (0, r.jsx)(i.Z, { profileEffectId: w }),
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
        a = n(481060),
        o = n(906732),
        c = n(1585),
        d = n(158776),
        u = n(998502),
        f = n(445924),
        m = n(654904),
        E = n(486324),
        p = n(651058);
      let _ = u.ZP.getEnableHardwareAcceleration()
        ? a.AnimatedAvatar
        : a.Avatar;
      function h(e) {
        let {
            user: t,
            guild: n,
            displayProfile: s,
            canUsePremiumCustomization: u,
            previewAvatar: h,
            previewAvatarDecoration: g,
            previewTheme: I,
            previewPrimaryColor: v,
            className: C,
            disabledInputs: x,
            isTryItOutFlow: A,
            onUpsellClick: P,
          } = e,
          { analyticsLocations: Z } = (0, o.ZP)(),
          T = (0, l.e7)([d.Z], () => d.Z.getStatus(t.id)),
          N =
            null == n ||
            (null == s ? void 0 : s.canUsePremiumProfileCustomization) ||
            u,
          S = (0, r.jsx)(_, {
            src: h,
            avatarDecoration: g,
            imageClassName: i()(C, { [p.overlay]: !x }),
            size: a.AvatarSizes.SIZE_80,
            "aria-label": t.username,
            status: T,
            statusTooltip: !1,
            statusBackdropColor:
              null != v ? (0, a.getStatusBackdropColor)(I) : void 0,
          });
        return x
          ? (0, r.jsx)("div", { className: p.avatar, children: S })
          : N
            ? (0, r.jsx)(a.Popout, {
                renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(f.Z, {
                    className: p.menu,
                    onClose: t,
                    onChangeAvatar: () =>
                      (0, m.$r)(E.pC.AVATAR, null == n ? void 0 : n.id, A),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == n ? void 0 : n,
                        analyticsLocations: Z,
                        isTryItOutFlow: A,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, r.jsxs)(a.Clickable, {
                    ...e,
                    className: i()(p.avatar, p.clickable),
                    children: [
                      S,
                      (0, r.jsx)(a.PencilIcon, {
                        size: "custom",
                        className: p.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, r.jsxs)(a.Clickable, {
                onClick: P,
                className: i()(p.avatar, p.clickable),
                children: [
                  S,
                  (0, r.jsx)(a.NitroWheelIcon, {
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
          return u;
        },
      });
      var r = n(735250);
      n(470079);
      var s = n(481060),
        i = n(78675),
        l = n(654904),
        a = n(486324),
        o = n(228168),
        c = n(689938),
        d = n(360247);
      function u(e) {
        let {
            user: t,
            displayProfile: n,
            guildId: u,
            canUsePremiumCustomization: f,
            pendingBanner: m,
            isTryItOutFlow: E,
            disabledInputs: p,
            onUpsellClick: _,
          } = e,
          h =
            f ||
            (null == n ? void 0 : n.canUsePremiumProfileCustomization) ||
            !1,
          g = h ? s.PencilIcon : s.NitroWheelIcon;
        return (0, r.jsx)(i.Z, {
          user: t,
          displayProfile: n,
          guildId: u,
          profileType: o.y0.BITE_SIZE,
          pendingBanner: m,
          canUsePremiumProfileCustomization: f,
          children:
            !p &&
            (0, r.jsxs)(s.Clickable, {
              onClick: () => {
                if (!h) {
                  null == _ || _();
                  return;
                }
                (0, l.$r)(a.pC.BANNER, u, E);
              },
              className: d.clickable,
              children: [
                (0, r.jsx)(g, { size: "xs", color: "white" }),
                (0, r.jsx)(s.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children: h
                    ? c.Z.Messages.CHANGE_BANNER
                    : c.Z.Messages.USER_SETTINGS_UNLOCK_BANNER,
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
        a = n(741308),
        o = n(530),
        c = n(790711),
        d = n(67152),
        u = n(271383),
        f = n(246946),
        m = n(654904),
        E = n(228168),
        p = n(122269);
      function _(e) {
        var t;
        let {
            user: n,
            displayProfile: _,
            guild: h,
            pendingAvatar: g,
            pendingNickname: I,
            pendingGlobalName: v,
            pendingBio: C,
            pendingPronouns: x,
            isTryItOutFlow: A,
            hideBioSection: P,
          } = e,
          Z = (0, s.e7)([u.ZP], () =>
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
            pendingNickname: I,
            pendingGlobalName: v,
            user: n,
            guildMember: Z,
          });
        return (0, r.jsxs)("div", {
          inert: "",
          className: p.body,
          children: [
            (0, r.jsx)(o.Z, {
              user: n,
              profileType: E.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != Z)) return;
                if (null !== g && !!(null != Z.avatar || null != g))
                  return (0, r.jsx)(c.Z, { user: n, nickname: R });
              })(),
              nickname: R,
              pronouns: j,
              isTryItOut: A,
              tags: (0, r.jsx)(a.Z, {
                displayProfile: _,
                profileType: E.y0.BITE_SIZE,
              }),
            }),
            N && (0, r.jsx)(l.ZP, { userId: n.id, inline: !1 }),
            !P &&
              null != S &&
              "" !== S &&
              (0, r.jsx)(d.Z, { user: n, bio: S, hidePersonalInformation: T }),
          ],
        });
      }
    },
    165747: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(735250);
      n(470079);
      var s = n(475413),
        i = n(901952),
        l = n(689938),
        a = n(122269);
      function o(e) {
        let { user: t, hideMessageInput: n, hideExampleButton: o } = e;
        return n
          ? (0, r.jsx)("footer", {
              className: a.footer,
              children:
                !o &&
                (0, r.jsx)(s.tG, {
                  text: l.Z.Messages
                    .USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                  fullWidth: !0,
                }),
            })
          : (0, r.jsx)("footer", {
              inert: "",
              className: a.footer,
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
        a = n(399606),
        o = n(597688),
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
        let e = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
          t = f.ZP.canUseCollectibles(e),
          n = (0, a.e7)([c.Z], () => c.Z.purchases),
          [r, s] = (0, a.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
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
            return N;
          },
        }),
        n(47120);
      var r = n(735250),
        s = n(470079),
        i = n(979554),
        l = n(442837),
        a = n(481060),
        o = n(100527),
        c = n(906732),
        d = n(335131),
        u = n(884697),
        f = n(449217),
        m = n(566111),
        E = n(197115),
        p = n(150039),
        _ = n(594174),
        h = n(626135),
        g = n(74538),
        I = n(934261),
        v = n(52268),
        C = n(981631),
        x = n(474936),
        A = n(689938),
        P = n(118610);
      function Z(e) {
        let {
            user: t,
            product: n,
            purchase: i,
            onApply: l,
            onClose: c,
            disableApplyButton: f,
            canUseCollectibles: m,
            selectedProfileEffectId: p,
            selectedProfileEffectItem: _,
            analyticsLocations: h,
          } = e,
          I = s.useCallback(() => {
            c(),
              (0, d.mK)({
                analyticsLocations: h,
                analyticsSource: o.Z.EDIT_PROFILE_EFFECT_MODAL,
                initialProductSkuId: null != _ ? _.skuId : void 0,
              });
          }, [c, h, _]);
        return (0, r.jsx)(a.ModalFooter, {
          className: P.modalFooter,
          children: (0, r.jsxs)("div", {
            className: P.buttonsRight,
            children: [
              (0, r.jsx)(a.Button, {
                look: a.Button.Looks.LINK,
                color: a.Button.Colors.PRIMARY,
                onClick: c,
                children: A.Z.Messages.CANCEL,
              }),
              (null != i && (!(0, u.qS)(i) || m)) || null === p
                ? (0, r.jsx)(a.Button, {
                    onClick: l,
                    disabled: f,
                    children: A.Z.Messages.AVATAR_DECORATION_MODAL_APPLY,
                  })
                : m || !(0, u.G1)(n)
                  ? (0, r.jsx)(a.Button, {
                      className: P.__invalid_modalFooterShopButton,
                      onClick: I,
                      children: A.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                    })
                  : (0, r.jsx)(E.Z, {
                      subscriptionTier: x.Si.TIER_2,
                      buttonText: g.ZP.isPremium(t)
                        ? A.Z.Messages
                            .USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL
                        : A.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                    }),
            ],
          }),
        });
      }
      function T(e) {
        let {
            user: t,
            guild: n,
            categories: i,
            purchases: l,
            onClose: o,
            initialSelectedProfileEffectId: c,
            currentSavedEffectId: d,
            analyticsLocations: m,
          } = e,
          { pendingProfileEffectId: E } = (0, p.bd)(n),
          [_, h] = s.useMemo(() => {
            let e = (0, u.bl)(i, l);
            return [e.purchased, e.shopPreviews];
          }, [i, l]),
          [C, x] = s.useState(() =>
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
          [T, N] = s.useMemo(() => {
            var e;
            let t = _.find((e) => (null == e ? void 0 : e.id) === C),
              n = null != t || null === C;
            return [
              null !==
                (e =
                  null != t
                    ? t
                    : h.find((e) => (null == e ? void 0 : e.id) === C)) &&
              void 0 !== e
                ? e
                : null,
              n,
            ];
          }, [C, _, h]),
          { product: S, purchase: j } = (0, f.Z)(null == T ? void 0 : T.skuId),
          R = s.useRef(null),
          M = g.ZP.canUseCollectibles(t),
          O = C === (void 0 === E ? (null != d ? d : null) : E),
          L = s.useCallback(
            (e) => {
              x(e);
            },
            [x],
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(a.ModalHeader, {
              separator: !1,
              className: P.modalHeader,
              children: [
                (0, r.jsx)(a.Heading, {
                  variant: "heading-lg/semibold",
                  children: A.Z.Messages.PROFILE_EFFECT_MODAL_HEADER,
                }),
                (0, r.jsx)(a.ModalCloseButton, {
                  className: P.modalCloseButton,
                  onClick: o,
                }),
              ],
            }),
            (0, r.jsxs)(a.ModalContent, {
              className: P.modalContent,
              children: [
                (0, r.jsx)(v.Z, {
                  user: t,
                  guild: n,
                  pendingProfileEffect: C,
                  selectedProfileEffectRef: R,
                  onSelect: L,
                  onClose: o,
                }),
                (0, r.jsx)(I.Z, {
                  user: t,
                  canApplySelectedChange: N,
                  pendingProfileEffectRecord: T,
                  product: S,
                  purchase: j,
                  guild: n,
                }),
              ],
            }),
            (0, r.jsx)(Z, {
              user: t,
              onApply: () => {
                (0, p.s6)(C, d, n), o();
              },
              onClose: o,
              product: S,
              purchase: j,
              canUseCollectibles: M,
              selectedProfileEffectId: C,
              selectedProfileEffectItem: T,
              disableApplyButton: O,
              analyticsLocations: m,
            }),
          ],
        });
      }
      function N(e) {
        let {
            transitionState: t,
            analyticsLocations: n,
            initialSelectedEffectId: u,
            guild: f,
            onClose: E,
          } = e,
          { isFetching: g, categories: I, purchases: v } = (0, m.Z)(),
          x = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
          { analyticsLocations: A } = (0, c.ZP)(
            n,
            o.Z.EDIT_PROFILE_EFFECT_MODAL,
          ),
          Z = (0, p.Kg)(x, f);
        return (
          s.useEffect(() => {
            h.default.track(C.rMx.OPEN_MODAL, {
              type: C.jXE.PROFILE_EFFECT_CUSTOMIZATION,
              location_stack: A,
            });
          }, [A]),
          s.useEffect(
            () => () => {
              (0, d.K$)({
                categories: [...I.values()],
                itemTypes: [i.Z.PROFILE_EFFECT],
              });
            },
            [I],
          ),
          (0, r.jsx)(c.Gt, {
            value: A,
            children: (0, r.jsx)(a.ModalRoot, {
              transitionState: t,
              className: P.modal,
              size: g ? a.ModalSize.DYNAMIC : a.ModalSize.MEDIUM,
              children: g
                ? (0, r.jsx)(a.Spinner, {
                    className: P.spinner,
                    type: a.Spinner.Type.SPINNING_CIRCLE,
                  })
                : (0, r.jsx)(T, {
                    user: x,
                    guild: f,
                    categories: I,
                    purchases: v,
                    initialSelectedProfileEffectId: u,
                    currentSavedEffectId: Z,
                    onClose: E,
                    analyticsLocations: A,
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
        a = n(597688),
        o = n(884697),
        c = n(18438),
        d = n(778825),
        u = n(957730),
        f = n(921813),
        m = n(350327),
        E = n(318661),
        p = n(706454),
        _ = n(695346),
        h = n(265159),
        g = n(25990),
        I = n(594174),
        v = n(55935),
        C = n(74538),
        x = n(689938),
        A = n(149441);
      let P = (e) => {
          var t;
          let {
              effectIsOwned: n,
              pendingProfileEffectRecord: l,
              product: c,
              purchase: d,
            } = e,
            u = (0, s.e7)([I.default], () => I.default.getCurrentUser()),
            f = (0, s.e7)([a.Z], () =>
              a.Z.getProduct(null == l ? void 0 : l.skuId),
            ),
            m = (0, s.e7)([p.default], () => p.default.locale),
            E = C.ZP.canUseCollectibles(u),
            _ = (0, o.qS)(d),
            h = (0, o.G1)(c),
            g =
              (null == d ? void 0 : d.expiresAt) != null
                ? (0, v.TD)(Date.now(), d.expiresAt)
                : null,
            P = Z(!E && _, h, E);
          return null != l
            ? (0, r.jsx)("div", {
                className: n
                  ? A.effectDescriptionNoGradient
                  : A.effectDescriptionBorderWithGradient,
                children: (0, r.jsxs)("div", {
                  className: A.effectDescriptionContainer,
                  children: [
                    (0, r.jsx)(i.Text, {
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      className: A.effectName,
                      children:
                        null !== (t = null == d ? void 0 : d.name) &&
                        void 0 !== t
                          ? t
                          : null == f
                            ? void 0
                            : f.name,
                    }),
                    (0, r.jsx)(i.Text, {
                      color: "text-normal",
                      variant: "text-sm/normal",
                      className: A.effectDescription,
                      children: null != d ? d.summary : P,
                    }),
                    null != g &&
                      (0, r.jsx)(i.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: A.effectPurchasedAt,
                        children: x.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({
                          days: g.days.toString(),
                        }),
                      }),
                    null != d &&
                      (0, r.jsxs)(i.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: A.effectPurchasedAt,
                        children: [
                          x.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                            date: d.purchasedAt.toLocaleDateString(m, {
                              month: "long",
                              year: "numeric",
                            }),
                          }),
                          null != d.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("br", {}),
                                x.Z.Messages.COLLECTIBLES_EXPIRE_DATE.format({
                                  date: d.expiresAt.toLocaleDateString(m, {
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
                    _ &&
                      (0, r.jsx)(i.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: A.effectPurchasedAt,
                        children:
                          x.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC,
                      }),
                  ],
                }),
              })
            : null;
        },
        Z = (e, t, n) =>
          e
            ? x.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED
            : t && n
              ? x.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM
              : t && !n
                ? x.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER
                : x.Z.Messages
                    .CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
      t.Z = (e) => {
        var t;
        let {
            user: n,
            pendingProfileEffectRecord: i,
            canApplySelectedChange: a,
            product: o,
            purchase: p,
            guild: I,
          } = e,
          {
            pendingGlobalName: v,
            pendingNickname: x,
            pendingPronouns: Z,
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
            ...(null != I ? d.Z.getAllPending() : g.Z.getAllPending()),
          })),
          O = C.ZP.isPremium(n),
          L = C.ZP.canUsePremiumProfileCustomization(n),
          y = (0, E.ZP)(n.id),
          b = !!(null == y ? void 0 : y.getPreviewBio(T).value),
          B = {
            user: n,
            guild: I,
            pendingGlobalName: v,
            pendingNickname: x,
            pendingPronouns: Z,
            pendingBio:
              _.dN.useSetting() && null != T
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
            canUsePremiumCustomization: L,
            onUpsellClick: h.Z,
            onAvatarChange: null != I ? c.I5 : l.I5,
            onBannerChange: m.g_,
          };
        return (0, r.jsxs)("div", {
          className: A.previewContainer,
          children: [
            (0, r.jsx)(f.Z, { ...B, disabledInputs: !0, hideCustomStatus: !0 }),
            !1,
            (0, r.jsx)(P, {
              effectIsOwned: a,
              pendingProfileEffectRecord: i,
              product: o,
              purchase: p,
              userIsPremium: O,
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
        a = n(278074),
        o = n(831209),
        c = n(399606),
        d = n(481060),
        u = n(37234),
        f = n(597688),
        m = n(884697),
        E = n(74538),
        p = n(731896),
        _ = n(528439),
        h = n(981631),
        g = n(689938),
        I = n(126025),
        v = n(223223);
      let C = () => 80,
        x = (e) => {
          let { children: t, className: n, isSelected: s = !1, ...i } = e;
          return (0, r.jsx)(d.Clickable, {
            className: l()(I.effectGridItem, n, { [I.selected]: s }),
            ...i,
            onClick: i.onSelect,
            children: t,
          });
        },
        A = (e) => {
          var t;
          let {
              user: n,
              profileEffect: i,
              innerRef: l,
              section: a,
              isSelected: u,
              ...h
            } = e,
            C = (0, p.V)(i.id),
            A = (0, c.e7)([f.Z], () => {
              let e = f.Z.getProduct(i.skuId);
              return (0, m.G1)(e);
            }),
            P = (0, m.Yq)(i.skuId),
            Z = s.useRef(null),
            {
              accessibilityLabel: T,
              thumbnailPreviewSrc: N,
              title: S,
            } = null !== (t = null == C ? void 0 : C.config) && void 0 !== t
              ? t
              : {},
            j = E.ZP.canUseCollectibles(n),
            R = a === _.$0.PREMIUM_PURCHASE && !j;
          return (0, r.jsxs)(x, {
            className: R && !u ? I.decorationGridItemChurned : void 0,
            innerRef: null != l ? l : Z,
            isSelected: u,
            ...h,
            children: [
              (0, r.jsx)("img", {
                src: v,
                alt: T,
                className: I.presetEffectBackground,
              }),
              (0, r.jsx)("img", {
                className: I.presetEffectImg,
                src: N,
                alt: S,
              }),
              a === _.$0.PURCHASE || (a === _.$0.PREMIUM_PURCHASE && j)
                ? null
                : P
                  ? (0, r.jsx)(d.PremiumBadge, {
                      className: I.newBadge,
                      text: (0, r.jsxs)("div", {
                        className: I.newBadgeText,
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
                      icon: A
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
                      color: o.Z.BACKGROUND_ACCENT,
                      className: I.lockBadge,
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
            onClose: o,
          } = e,
          c = () => {
            o(), (0, u.jN)(h.S9g.COLLECTIBLES_SHOP);
          },
          f = (0, _.ZP)(),
          m = null != s;
        return (0, r.jsx)("section", {
          className: I.section,
          children: (0, r.jsx)(d.MasonryList, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: I.list,
            columns: 3,
            sections: f.map((e) => {
              let { items: t } = e;
              return t.length;
            }),
            renderItem: (e, o, u, E) => {
              let { section: p, items: h } = f[e];
              return (0, a.EQ)(h[o])
                .with(_.Tm, () =>
                  (0, r.jsxs)(
                    x,
                    {
                      style: { ...u },
                      isSelected: !m,
                      onSelect: () => l(null),
                      children: [
                        (0, r.jsx)(d.DenyIcon, {
                          size: "md",
                          color: "currentColor",
                          className: I.notAllowedIcon,
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
                .with(_.oT, () =>
                  (0, r.jsxs)(
                    x,
                    {
                      style: u,
                      onSelect: c,
                      children: [
                        (0, r.jsx)(d.ShopIcon, {
                          size: "custom",
                          width: 23,
                          height: 23,
                          color: "currentColor",
                          className: I.shopIcon,
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
                    A,
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
            getItemHeight: C,
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
    60638: function (e, t, n) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    651058: function (e, t, n) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    360247: function (e, t, n) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
    118610: function (e, t, n) {
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
    149441: function (e, t, n) {
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
    126025: function (e, t, n) {
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
//# sourceMappingURL=58e423405bbb94dea7f7.js.map
