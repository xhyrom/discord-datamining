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
      var i = n(192379),
        r = n(442837),
        l = n(365943),
        o = n(25251),
        s = n(223143);
      function a() {
        var e;
        let {
            isFetching: t,
            fetchCategoriesError: n,
            fetchPurchasesError: a,
            categories: c,
            purchases: d,
          } = (0, s.Z)(),
          [u, f, m] = (0, r.Wu)([o.Z], () => [
            o.Z.isFetching,
            o.Z.fetchError,
            o.Z.profileEffects,
          ]);
        return (
          i.useEffect(() => {
            (0, l.z)(!0);
          }, []),
          {
            isFetching: t || u,
            combinedError:
              null !== (e = null != n ? n : a) && void 0 !== e ? e : f,
            profileEffects: m,
            categories: c,
            purchases: d,
          }
        );
      }
    },
    445924: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(388032);
      t.Z = (e) => {
        let {
          onChangeAvatar: t,
          onChangeAvatarDecoration: n,
          onClose: o,
          className: s,
        } = e;
        return (0, i.jsxs)(r.Menu, {
          className: s,
          onClose: o,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": l.intl.string(l.t.ldIeAQ),
          children: [
            (0, i.jsx)(r.MenuItem, {
              id: "change-avatar",
              action: t,
              label: l.intl.string(l.t["4OynCA"]),
            }),
            (0, i.jsx)(r.MenuItem, {
              id: "change-avatar-decoration",
              action: n,
              label: l.intl.string(l.t["Tna/TU"]),
            }),
          ],
        });
      };
    },
    921813: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(481060),
        s = n(680295),
        a = n(687158),
        c = n(576635),
        d = n(518950),
        u = n(438163),
        f = n(502762),
        m = n(150039),
        p = n(450734),
        h = n(225089),
        g = n(853726),
        v = n(165747),
        x = n(981631),
        I = n(228168),
        C = n(507472);
      function j(e) {
        let {
            user: t,
            guild: n,
            canUsePremiumCustomization: r,
            onUpsellClick: j,
            pendingBanner: P,
            pendingBio: Z,
            pendingPronouns: E,
            pendingAvatar: _,
            pendingAvatarDecoration: N,
            pendingNickname: y,
            pendingGlobalName: b,
            pendingThemeColors: S,
            pendingProfileEffectId: T,
            avatarClassName: A,
            containerClassName: k,
            isTryItOutFlow: B = !1,
            disabledInputs: w = !1,
            hideCustomStatus: M = !1,
            hideBioSection: R = !1,
            hideMessageInput: D = !0,
            hideExampleButton: G = !1,
          } = e,
          U = (0, a.ZP)(t.id, null == n ? void 0 : n.id),
          { avatarSrc: z, avatarDecorationSrc: F } = (0, d.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: N,
            avatarOverride: _,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          L = (0, m.ZT)({ pendingProfileEffectId: T, displayProfile: U }),
          { theme: O, primaryColor: H } = (0, c.Z)({
            user: t,
            displayProfile: U,
            pendingThemeColors: S,
            isPreview: r,
          });
        return (0, i.jsxs)(f.Z, {
          user: t,
          displayProfile: U,
          profileType: I.y0.BITE_SIZE,
          pendingThemeColors: S,
          className: l()(C.container, k),
          forceShowPremium: r,
          children: [
            (0, i.jsxs)("header", {
              className: C.header,
              children: [
                (0, i.jsx)(h.Z, {
                  user: t,
                  displayProfile: U,
                  guildId: null == n ? void 0 : n.id,
                  canUsePremiumCustomization: r,
                  pendingBanner: P,
                  isTryItOutFlow: B,
                  disabledInputs: w,
                  onUpsellClick: () =>
                    null == j
                      ? void 0
                      : j({ object: x.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, i.jsx)(p.Z, {
                  user: t,
                  guild: n,
                  displayProfile: U,
                  canUsePremiumCustomization: r,
                  previewAvatar: z,
                  previewAvatarDecoration: F,
                  previewTheme: O,
                  previewPrimaryColor: H,
                  className: A,
                  disabledInputs: w,
                  isTryItOutFlow: B,
                  onUpsellClick: () =>
                    null == j ? void 0 : j({ object: x.qAy.AVATAR }),
                }),
                !M && (0, i.jsx)(u.Z, { user: t, profileType: I.y0.BITE_SIZE }),
              ],
            }),
            (0, i.jsx)(g.Z, {
              user: t,
              displayProfile: U,
              guild: n,
              pendingAvatar: _,
              pendingNickname: y,
              pendingGlobalName: b,
              pendingBio: Z,
              pendingPronouns: E,
              isTryItOutFlow: B,
              hideBioSection: R,
            }),
            (0, i.jsx)(v.Z, {
              user: t,
              hideMessageInput: D,
              hideExampleButton: G,
            }),
            null != L && (0, i.jsx)(s.Z, { profileEffectId: L }),
          ],
        });
      }
    },
    450734: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(442837),
        s = n(481060),
        a = n(906732),
        c = n(1585),
        d = n(158776),
        u = n(998502),
        f = n(445924),
        m = n(654904),
        p = n(486324),
        h = n(563431);
      let g = u.ZP.getEnableHardwareAcceleration()
        ? s.AnimatedAvatar
        : s.Avatar;
      function v(e) {
        let {
            user: t,
            guild: n,
            displayProfile: r,
            canUsePremiumCustomization: u,
            previewAvatar: v,
            previewAvatarDecoration: x,
            previewTheme: I,
            previewPrimaryColor: C,
            className: j,
            disabledInputs: P,
            isTryItOutFlow: Z,
            onUpsellClick: E,
          } = e,
          { analyticsLocations: _ } = (0, a.ZP)(),
          N = (0, o.e7)([d.Z], () => d.Z.getStatus(t.id)),
          y =
            null == n ||
            (null == r ? void 0 : r.canUsePremiumProfileCustomization) ||
            u,
          b = (0, i.jsx)(g, {
            src: v,
            avatarDecoration: x,
            imageClassName: l()(j, { [h.overlay]: !P }),
            size: s.AvatarSizes.SIZE_80,
            "aria-label": t.username,
            status: N,
            statusTooltip: !1,
            statusBackdropColor:
              null != C ? (0, s.getStatusBackdropColor)(I) : void 0,
          });
        return P
          ? (0, i.jsx)("div", { className: h.avatar, children: b })
          : y
            ? (0, i.jsx)(s.Popout, {
                renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(f.Z, {
                    className: h.menu,
                    onClose: t,
                    onChangeAvatar: () =>
                      (0, m.$r)(p.pC.AVATAR, null == n ? void 0 : n.id, Z),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == n ? void 0 : n,
                        analyticsLocations: _,
                        isTryItOutFlow: Z,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, i.jsxs)(s.Clickable, {
                    ...e,
                    className: l()(h.avatar, h.clickable),
                    children: [
                      b,
                      (0, i.jsx)(s.PencilIcon, {
                        size: "custom",
                        className: h.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, i.jsxs)(s.Clickable, {
                onClick: E,
                className: l()(h.avatar, h.clickable),
                children: [
                  b,
                  (0, i.jsx)(s.NitroWheelIcon, {
                    size: "custom",
                    className: h.overlayIcon,
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
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(222062),
        o = n(867176),
        s = n(654904),
        a = n(486324),
        c = n(228168),
        d = n(388032),
        u = n(90592);
      function f(e) {
        let {
            user: t,
            displayProfile: n,
            guildId: f,
            canUsePremiumCustomization: m,
            pendingBanner: p,
            isTryItOutFlow: h,
            disabledInputs: g,
            onUpsellClick: v,
          } = e,
          x =
            m ||
            (null == n ? void 0 : n.canUsePremiumProfileCustomization) ||
            !1,
          I = x ? r.PencilIcon : r.NitroWheelIcon,
          C = (0, l.M)(x);
        return (0, i.jsx)(o.Z, {
          user: t,
          displayProfile: n,
          guildId: f,
          profileType: c.y0.BITE_SIZE,
          pendingBanner: p,
          canUsePremiumProfileCustomization: m,
          children:
            !g &&
            (0, i.jsxs)(r.Clickable, {
              onClick: () => {
                if (!x && !C) {
                  null == v || v();
                  return;
                }
                (0, s.$r)(a.pC.BANNER, f, h);
              },
              className: u.clickable,
              children: [
                (0, i.jsx)(I, { size: "xs", color: "white" }),
                (0, i.jsx)(r.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    x || C
                      ? d.intl.string(d.t.N0bC3N)
                      : d.intl.string(d.t.O1sT5u),
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(442837),
        l = n(648052),
        o = n(530),
        s = n(420654),
        a = n(116854),
        c = n(271383),
        d = n(246946),
        u = n(654904),
        f = n(228168),
        m = n(653134);
      function p(e) {
        var t;
        let {
            user: n,
            displayProfile: p,
            guild: h,
            pendingAvatar: g,
            pendingNickname: v,
            pendingGlobalName: x,
            pendingBio: I,
            pendingPronouns: C,
            isTryItOutFlow: j,
            hideBioSection: P,
          } = e,
          Z = (0, r.e7)([c.ZP], () =>
            null == h ? null : c.ZP.getMember(h.id, n.id),
          ),
          E = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
          _ =
            null == p
              ? void 0
              : null === (t = p.getPreviewBio(I)) || void 0 === t
                ? void 0
                : t.value,
          N = null != C ? C : null == p ? void 0 : p.pronouns,
          y = (0, u.Ly)({
            pendingNickname: v,
            pendingGlobalName: x,
            user: n,
            guildMember: Z,
          });
        return (0, i.jsxs)("div", {
          inert: "",
          className: m.body,
          children: [
            (0, i.jsx)(o.Z, {
              user: n,
              profileType: f.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != Z)) return;
                if (null !== g && !!(null != Z.avatar || null != g))
                  return (0, i.jsx)(a.Z, { user: n, nickname: y });
              })(),
              nickname: y,
              pronouns: N,
              isTryItOut: j,
              tags: (0, i.jsx)(l.Z, {
                displayProfile: p,
                profileType: f.y0.BITE_SIZE,
              }),
            }),
            !P &&
              null != _ &&
              "" !== _ &&
              (0, i.jsx)(s.Z, {
                user: n,
                bio: _,
                hidePersonalInformation: E,
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
      var i = n(200651);
      n(192379);
      var r = n(475413),
        l = n(955418),
        o = n(388032),
        s = n(653134);
      function a(e) {
        let { user: t, hideMessageInput: n, hideExampleButton: a } = e;
        return n
          ? (0, i.jsx)("footer", {
              className: s.footer,
              children:
                !a &&
                (0, i.jsx)(r.tG, {
                  text: o.intl.string(o.t.hZkfwc),
                  fullWidth: !0,
                }),
            })
          : (0, i.jsx)("footer", {
              inert: "",
              className: s.footer,
              children: (0, i.jsx)(l.Z, { user: t }),
            });
      }
    },
    528439: function (e, t, n) {
      n.d(t, {
        $0: function () {
          return i;
        },
        Tm: function () {
          return p;
        },
        oT: function () {
          return h;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var i,
        r,
        l = n(192379),
        o = n(392711),
        s = n(399606),
        a = n(597688),
        c = n(1870),
        d = n(884697),
        u = n(594174),
        f = n(74538),
        m = n(388032);
      ((r = i || (i = {})).PURCHASE = "purchase"),
        (r.PREMIUM_PURCHASE = "premium_purchase"),
        (r.PREVIEW = "preview");
      let p = { id: "None" },
        h = { id: "Shop" };
      t.ZP = () => {
        let e = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
          t = f.ZP.canUseCollectibles(e),
          n = (0, s.e7)([c.Z], () => c.Z.purchases),
          [i, r] = (0, s.Wu)([a.Z], () => [a.Z.categories, a.Z.products]);
        return (0, l.useMemo)(() => {
          let e = (0, o.uniqBy)(
            [...(0, d.aj)(n), ...(0, d.XS)(i)],
            "id",
          ).reduce(
            (e, i) => {
              let l = n.get(i.skuId);
              return (0, d.qS)(l)
                ? (e.premium_purchase.push(i), e)
                : null != l
                  ? (e.purchase.push(i), e)
                  : !t && (0, d.G1)(r.get(i.skuId))
                    ? (e.premium_purchase.push(i), e)
                    : (e.preview.push(i), e);
            },
            { purchase: [], premium_purchase: [], preview: [] },
          );
          return [
            {
              section: "purchase",
              items: [p, h, ...e.purchase],
              height: 12,
              header: m.intl.string(m.t.JEimX1),
            },
            {
              section: "premium_purchase",
              items: e.premium_purchase,
              height: 12,
              header: m.intl.string(m.t.DIJLzM),
            },
            {
              section: "preview",
              items: e.preview,
              height: 12,
              header: m.intl.string(m.t.fmIfaG),
            },
          ].filter((e) => {
            let { items: t } = e;
            return t.length > 0;
          });
        }, [i, r, n, t]);
      };
    },
    191564: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(979554),
        o = n(442837),
        s = n(481060),
        a = n(100527),
        c = n(906732),
        d = n(335131),
        u = n(884697),
        f = n(449217),
        m = n(566111),
        p = n(222062),
        h = n(269982),
        g = n(197115),
        v = n(150039),
        x = n(594174),
        I = n(626135),
        C = n(74538),
        j = n(934261),
        P = n(52268),
        Z = n(981631),
        E = n(474936),
        _ = n(388032),
        N = n(584990);
      function y(e) {
        let {
            user: t,
            product: n,
            purchase: l,
            onApply: o,
            onClose: c,
            disableApplyButton: f,
            canUseCollectibles: m,
            selectedProfileEffectId: v,
            selectedProfileEffectItem: x,
            analyticsLocations: I,
          } = e,
          j = r.useCallback(() => {
            c(),
              (0, d.mK)({
                analyticsLocations: I,
                analyticsSource: a.Z.EDIT_PROFILE_EFFECT_MODAL,
                initialProductSkuId: null != x ? x.skuId : void 0,
              });
          }, [c, I, x]),
          P = (0, p.M)();
        return (0, i.jsxs)(s.ModalFooter, {
          className: N.modalFooter,
          children: [
            (0, i.jsxs)("div", {
              className: N.buttonsRight,
              children: [
                !P &&
                  (0, i.jsx)(s.Button, {
                    look: s.Button.Looks.LINK,
                    color: s.Button.Colors.PRIMARY,
                    onClick: c,
                    children: _.intl.string(_.t["ETE/oK"]),
                  }),
                (null != l && (!(0, u.qS)(l) || m)) || null === v
                  ? (0, i.jsx)(s.Button, {
                      onClick: o,
                      disabled: f,
                      children: _.intl.string(_.t.d6sv6u),
                    })
                  : m || !(0, u.G1)(n)
                    ? (0, i.jsx)(s.Button, {
                        onClick: j,
                        children: _.intl.string(_.t.fYfGgI),
                      })
                    : (0, i.jsx)(g.Z, {
                        subscriptionTier: E.Si.TIER_2,
                        showGradient: P,
                        buttonText: C.ZP.isPremium(t)
                          ? _.intl.string(_.t.KXLX7u)
                          : P
                            ? _.intl.string(_.t.pj0XBA)
                            : _.intl.string(_.t.mr4K7O),
                      }),
              ],
            }),
            P &&
              (0, u.G1)(n) &&
              (0, i.jsx)(h.Z, { product: n, onSecondaryClick: c }),
          ],
        });
      }
      function b(e) {
        let {
            user: t,
            guild: n,
            categories: l,
            purchases: o,
            onClose: a,
            initialSelectedProfileEffectId: c,
            currentSavedEffectId: d,
            analyticsLocations: m,
          } = e,
          { pendingProfileEffectId: p } = (0, v.bd)(n),
          [h, g] = r.useMemo(() => {
            let e = (0, u.bl)(l, o);
            return [e.purchased, e.shopPreviews];
          }, [l, o]),
          [x, I] = r.useState(() =>
            null != c
              ? c
              : void 0 !== p
                ? p
                : null == d
                  ? null
                  : null != d
                    ? d
                    : null,
          ),
          [Z, E] = r.useMemo(() => {
            var e;
            let t = h.find((e) => (null == e ? void 0 : e.id) === x),
              n = null != t || null === x;
            return [
              null !==
                (e =
                  null != t
                    ? t
                    : g.find((e) => (null == e ? void 0 : e.id) === x)) &&
              void 0 !== e
                ? e
                : null,
              n,
            ];
          }, [x, h, g]),
          { product: b, purchase: S } = (0, f.Z)(null == Z ? void 0 : Z.skuId),
          T = r.useRef(null),
          A = C.ZP.canUseCollectibles(t),
          k = x === (void 0 === p ? (null != d ? d : null) : p),
          B = r.useCallback(
            (e) => {
              I(e);
            },
            [I],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(s.ModalHeader, {
              separator: !1,
              className: N.modalHeader,
              children: [
                (0, i.jsx)(s.Heading, {
                  variant: "heading-lg/semibold",
                  children: _.intl.string(_.t.t5SVGR),
                }),
                (0, i.jsx)(s.ModalCloseButton, {
                  className: N.modalCloseButton,
                  onClick: a,
                }),
              ],
            }),
            (0, i.jsxs)(s.ModalContent, {
              className: N.modalContent,
              children: [
                (0, i.jsx)(P.Z, {
                  user: t,
                  guild: n,
                  pendingProfileEffect: x,
                  selectedProfileEffectRef: T,
                  onSelect: B,
                  onClose: a,
                }),
                (0, i.jsx)(j.Z, {
                  user: t,
                  canApplySelectedChange: E,
                  pendingProfileEffectRecord: Z,
                  product: b,
                  purchase: S,
                  guild: n,
                }),
              ],
            }),
            (0, i.jsx)(y, {
              user: t,
              onApply: () => {
                (0, v.s6)(x, d, null == n ? void 0 : n.id), a();
              },
              onClose: a,
              product: b,
              purchase: S,
              canUseCollectibles: A,
              selectedProfileEffectId: x,
              selectedProfileEffectItem: Z,
              disableApplyButton: k,
              analyticsLocations: m,
            }),
          ],
        });
      }
      function S(e) {
        let {
            transitionState: t,
            analyticsLocations: n,
            initialSelectedEffectId: u,
            guild: f,
            onClose: p,
          } = e,
          { isFetching: h, categories: g, purchases: C } = (0, m.Z)(),
          j = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
          { analyticsLocations: P } = (0, c.ZP)(
            n,
            a.Z.EDIT_PROFILE_EFFECT_MODAL,
          ),
          E = (0, v.Kg)(j, f);
        return (
          r.useEffect(() => {
            I.default.track(Z.rMx.OPEN_MODAL, {
              type: Z.jXE.PROFILE_EFFECT_CUSTOMIZATION,
              location_stack: P,
            });
          }, [P]),
          r.useEffect(
            () => () => {
              (0, d.K$)({
                categories: [...g.values()],
                itemTypes: [l.Z.PROFILE_EFFECT],
              });
            },
            [g],
          ),
          (0, i.jsx)(c.Gt, {
            value: P,
            children: (0, i.jsx)(s.ModalRoot, {
              transitionState: t,
              className: N.modal,
              size: h ? s.ModalSize.DYNAMIC : s.ModalSize.MEDIUM,
              children: h
                ? (0, i.jsx)(s.Spinner, {
                    className: N.spinner,
                    type: s.Spinner.Type.SPINNING_CIRCLE,
                  })
                : (0, i.jsx)(b, {
                    user: j,
                    guild: f,
                    categories: g,
                    purchases: C,
                    initialSelectedProfileEffectId: u,
                    currentSavedEffectId: E,
                    onClose: p,
                    analyticsLocations: P,
                  }),
            }),
          })
        );
      }
    },
    934261: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(442837),
        l = n(481060),
        o = n(809206),
        s = n(597688),
        a = n(884697),
        c = n(905357),
        d = n(95422),
        u = n(18438),
        f = n(778825),
        m = n(957730),
        p = n(222062),
        h = n(921813),
        g = n(350327),
        v = n(687158),
        x = n(706454),
        I = n(695346),
        C = n(265159),
        j = n(25990),
        P = n(594174),
        Z = n(55935),
        E = n(74538),
        _ = n(388032),
        N = n(546616);
      let y = (e) => {
          let {
              effectIsOwned: t,
              pendingProfileEffectRecord: n,
              product: o,
              purchase: u,
            } = e,
            f = (0, r.e7)([P.default], () => P.default.getCurrentUser()),
            m = (0, r.e7)([s.Z], () =>
              s.Z.getProduct(null == n ? void 0 : n.skuId),
            ),
            h = (0, r.e7)([x.default], () => x.default.locale),
            g = E.ZP.canUseCollectibles(f),
            v = (0, a.qS)(u),
            I = (0, a.G1)(o),
            C = !g && v,
            j =
              (null == u ? void 0 : u.expiresAt) != null
                ? (0, Z.TD)(Date.now(), u.expiresAt)
                : null,
            y = (0, d.a)(u),
            S = (0, c.k)(m),
            T = (0, p.M)(!I || g),
            A = b(C, I, g, T);
          return null != n
            ? (0, i.jsx)("div", {
                className: t
                  ? N.effectDescriptionNoGradient
                  : N.effectDescriptionBorderWithGradient,
                children: (0, i.jsxs)("div", {
                  className: N.effectDescriptionContainer,
                  children: [
                    (0, i.jsx)(l.Text, {
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      className: N.effectName,
                      children: null != y ? y : S,
                    }),
                    (0, i.jsx)(l.Text, {
                      color: "text-normal",
                      variant: "text-sm/normal",
                      className: N.effectDescription,
                      children: null != u ? u.summary : A,
                    }),
                    null != j &&
                      (0, i.jsx)(l.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: N.effectPurchasedAt,
                        children: _.intl.format(_.t.Io7ozs, {
                          days: j.days.toString(),
                        }),
                      }),
                    null != u &&
                      (0, i.jsxs)(l.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: N.effectPurchasedAt,
                        children: [
                          _.intl.format(_.t.gW9R4O, {
                            date: u.purchasedAt.toLocaleDateString(h, {
                              month: "long",
                              year: "numeric",
                            }),
                          }),
                          null != u.expiresAt &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("br", {}),
                                _.intl.format(_.t.eZSTa2, {
                                  date: u.expiresAt.toLocaleDateString(h, {
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
                    v &&
                      (0, i.jsx)(l.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: N.effectPurchasedAt,
                        children: _.intl.string(_.t.UewH9P),
                      }),
                  ],
                }),
              })
            : null;
        },
        b = (e, t, n, i) => {
          if (e) return _.intl.string(_.t.ZVTtBg);
          if (t && n) return _.intl.string(_.t.L5hyz8);
          if (t && !n)
            return i ? _.intl.string(_.t.meldu7) : _.intl.string(_.t.bGl9t7);
          return _.intl.string(_.t.PXzyvr);
        };
      t.Z = (e) => {
        var t;
        let {
            user: n,
            pendingProfileEffectRecord: l,
            canApplySelectedChange: s,
            product: a,
            purchase: c,
            guild: d,
          } = e,
          {
            pendingGlobalName: p,
            pendingNickname: x,
            pendingPronouns: P,
            pendingBio: Z,
            pendingBanner: _,
            pendingAvatar: b,
            pendingAvatarDecoration: S,
            pendingThemeColors: T,
            pendingAccentColor: A,
          } = (0, r.cj)([f.Z, j.Z], () => ({
            pendingNickname: void 0,
            pendingGlobalName: void 0,
            pendingAccentColor: void 0,
            ...(null != d ? f.Z.getAllPending() : j.Z.getAllPending()),
          })),
          k = E.ZP.isPremium(n),
          B = E.ZP.canUsePremiumProfileCustomization(n),
          w = (0, v.ZP)(n.id),
          M = !!(null == w ? void 0 : w.getPreviewBio(Z).value),
          R = {
            user: n,
            guild: d,
            pendingGlobalName: p,
            pendingNickname: x,
            pendingPronouns: P,
            pendingBio:
              I.dN.useSetting() && null != Z
                ? m.ZP.parse(void 0, Z).content
                : Z,
            pendingBanner: _,
            useLargeBanner: !0,
            pendingAvatar: b,
            pendingAvatarDecoration: S,
            pendingThemeColors: T,
            pendingAccentColor: A,
            pendingProfileEffectId:
              null !== (t = null == l ? void 0 : l.id) && void 0 !== t
                ? t
                : null,
            hideFakeActivity: M,
            canUsePremiumCustomization: B,
            onUpsellClick: C.Z,
            onAvatarChange: null != d ? u.I5 : o.I5,
            onBannerChange: g.g_,
          };
        return (0, i.jsxs)("div", {
          className: N.previewContainer,
          children: [
            (0, i.jsx)(h.Z, { ...R, disabledInputs: !0, hideCustomStatus: !0 }),
            !1,
            (0, i.jsx)(y, {
              effectIsOwned: s,
              pendingProfileEffectRecord: l,
              product: a,
              purchase: c,
              userIsPremium: k,
            }),
          ],
        });
      };
    },
    52268: function (e, t, n) {
      n(627341);
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(278074),
        a = n(831209),
        c = n(399606),
        d = n(481060),
        u = n(37234),
        f = n(597688),
        m = n(884697),
        p = n(222062),
        h = n(74538),
        g = n(731896),
        v = n(528439),
        x = n(981631),
        I = n(388032),
        C = n(657992),
        j = n(223223);
      let P = () => 80,
        Z = (e) => {
          let { children: t, className: n, isSelected: r = !1, ...l } = e;
          return (0, i.jsx)(d.Clickable, {
            className: o()(C.effectGridItem, n, { [C.selected]: r }),
            ...l,
            onClick: l.onSelect,
            children: t,
          });
        },
        E = (e) => {
          var t;
          let {
              user: n,
              profileEffect: l,
              innerRef: o,
              section: s,
              isSelected: u,
              ...x
            } = e,
            P = (0, g.V)(l.id),
            E = (0, c.e7)([f.Z], () => {
              let e = f.Z.getProduct(l.skuId);
              return (0, m.G1)(e);
            }),
            _ = (0, m.Yq)(l.skuId),
            N = r.useRef(null),
            {
              accessibilityLabel: y,
              thumbnailPreviewSrc: b,
              title: S,
            } = null !== (t = null == P ? void 0 : P.config) && void 0 !== t
              ? t
              : {},
            T = h.ZP.canUseCollectibles(n),
            A = s === v.$0.PREMIUM_PURCHASE && !T,
            k = (0, p.M)();
          return (0, i.jsxs)(Z, {
            className: !A || u || k ? void 0 : C.decorationGridItemChurned,
            innerRef: null != o ? o : N,
            isSelected: u,
            ...x,
            children: [
              (0, i.jsx)("img", {
                src: j,
                alt: y,
                className: C.presetEffectBackground,
              }),
              (0, i.jsx)("img", {
                className: C.presetEffectImg,
                src: b,
                alt: S,
              }),
              s === v.$0.PURCHASE || (s === v.$0.PREMIUM_PURCHASE && T)
                ? null
                : _
                  ? (0, i.jsx)(d.PremiumBadge, {
                      className: C.newBadge,
                      text: (0, i.jsxs)("div", {
                        className: C.newBadgeText,
                        children: [
                          (0, i.jsx)(d.LockIcon, {
                            size: "xxs",
                            color: "currentColor",
                          }),
                          I.intl.string(I.t.y2b7CA),
                        ],
                      }),
                    })
                  : (0, i.jsx)(d.IconBadge, {
                      icon: E
                        ? () =>
                            (0, i.jsx)(d.NitroWheelIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 14,
                              height: 14,
                            })
                        : () =>
                            (0, i.jsx)(d.LockIcon, {
                              size: "xxs",
                              color: "currentColor",
                            }),
                      color: a.Z.BACKGROUND_ACCENT,
                      className: C.lockBadge,
                    }),
            ],
          });
        };
      t.Z = (e) => {
        let {
            user: t,
            guild: n,
            pendingProfileEffect: r,
            selectedProfileEffectRef: l,
            onSelect: o,
            onClose: a,
          } = e,
          c = () => {
            a(), (0, u.jN)(x.S9g.COLLECTIBLES_SHOP);
          },
          f = (0, v.ZP)(),
          m = null != r;
        return (0, i.jsx)("section", {
          className: C.section,
          children: (0, i.jsx)(d.MasonryList, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: C.list,
            columns: 3,
            sections: f.map((e) => {
              let { items: t } = e;
              return t.length;
            }),
            renderItem: (e, a, u, p) => {
              let { section: h, items: g } = f[e];
              return (0, s.EQ)(g[a])
                .with(v.Tm, () =>
                  (0, i.jsxs)(
                    Z,
                    {
                      style: { ...u },
                      isSelected: !m,
                      onSelect: () => o(null),
                      children: [
                        (0, i.jsx)(d.DenyIcon, {
                          size: "md",
                          color: "currentColor",
                          className: C.notAllowedIcon,
                        }),
                        (0, i.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children:
                            null != n
                              ? I.intl.string(I.t.GJ3Fcn)
                              : I.intl.string(I.t.PoWNfX),
                        }),
                      ],
                    },
                    p,
                  ),
                )
                .with(v.oT, () =>
                  (0, i.jsxs)(
                    Z,
                    {
                      style: u,
                      onSelect: c,
                      children: [
                        (0, i.jsx)(d.ShopIcon, {
                          size: "custom",
                          width: 23,
                          height: 23,
                          color: "currentColor",
                          className: C.shopIcon,
                        }),
                        (0, i.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children: I.intl.string(I.t.pWG4zc),
                        }),
                      ],
                    },
                    p,
                  ),
                )
                .otherwise((e) => {
                  let n = r === e.id;
                  return (0, i.jsx)(
                    E,
                    {
                      user: t,
                      style: { ...u },
                      section: h,
                      profileEffect: e,
                      innerRef: n ? l : void 0,
                      isSelected: n,
                      onSelect: () => o(e.id),
                    },
                    p,
                  );
                });
            },
            renderSection: (e, t) => {
              let { header: n } = f[e];
              return (0, i.jsx)("div", {
                style: {
                  ...t,
                  height: "".concat(16, "px"),
                  position: "absolute",
                },
                children: (0, i.jsx)(d.FormTitle, { children: n }),
              });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => {
              var n, i;
              return null !==
                (i =
                  null === (n = f[e].items[t]) || void 0 === n
                    ? void 0
                    : n.id) && void 0 !== i
                ? i
                : null;
            },
            getItemHeight: P,
            removeEdgeItemGutters: !0,
          }),
        });
      };
    },
    265159: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(981631);
      function o() {
        (0, r.openModalLazy)(async () => {
          let { default: e } = await n.e("38047").then(n.bind(n, 975863));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              source: {
                page: l.ZY5.USER_SETTINGS,
                section: l.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                object: l.qAy.BUTTON_CTA,
                type: l.Qqv.BUY,
              },
            });
        });
      }
    },
    507472: function (e, t, n) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    563431: function (e, t, n) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    90592: function (e, t, n) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
    584990: function (e, t, n) {
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
    546616: function (e, t, n) {
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
    657992: function (e, t, n) {
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
//# sourceMappingURL=e5decf8c7ede9aba3b9f.js.map
