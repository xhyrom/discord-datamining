"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74421"],
  {
    628952: function (e, i, t) {
      t(47120);
      var n = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        o = t(979554),
        s = t(442837),
        l = t(481060),
        c = t(987209),
        d = t(921813),
        u = t(484459),
        f = t(594174),
        p = t(583434),
        _ = t(905357),
        b = t(473608),
        m = t(388032),
        g = t(505069);
      i.Z = (e) => {
        let {
            skuId: i,
            isSelected: t,
            price: a,
            onSelect: x,
            shouldDisplayHeader: h = !1,
            className: v,
          } = e,
          { product: C } = (0, p.T)(i),
          { giftRecipient: I, giftRecipientError: S } = (0, c.wD)(),
          k = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
          y = (0, _.k)(C);
        if (null == C) return null;
        let [T] = C.items,
          B = null != I && I.id !== (null == k ? void 0 : k.id);
        return (0, n.jsxs)("div", {
          className: v,
          children: [
            h &&
              (0, n.jsxs)("div", {
                className: g.previewTitleContainer,
                children: [
                  (0, n.jsx)(l.FormTitle, {
                    className: g.previewTitle,
                    children: m.intl.string(m.t.PpoJzs),
                  }),
                  B &&
                    (0, n.jsx)(
                      l.Popout,
                      {
                        preload: () => (0, u.Z)(I.id, I.getAvatarURL(null, 80)),
                        renderPopout: (e) =>
                          (0, n.jsx)(d.Z, {
                            ...e,
                            user: I,
                            pendingAvatar: I.getAvatarURL(
                              null,
                              (0, l.getAvatarSize)(l.AvatarSizes.SIZE_80),
                            ),
                            pendingAvatarDecoration:
                              T.type === o.Z.AVATAR_DECORATION ? T : null,
                            pendingProfileEffectId:
                              T.type === o.Z.PROFILE_EFFECT ? T.id : null,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                          }),
                        align: "center",
                        position: "right",
                        children: (e) =>
                          (0, n.jsx)(l.Clickable, {
                            ...e,
                            className: g.previewLink,
                            children: (0, n.jsx)(l.Text, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              children: m.intl.string(m.t["2GnJQE"]),
                            }),
                          }),
                      },
                      I.id,
                    ),
                ],
              }),
            (0, n.jsxs)(l.Clickable, {
              tag: "div",
              onClick: () => {
                null != i && null != x && x(i);
              },
              className: r()(g.previewContainer, {
                [g.previewContainerSelected]: t && null == S,
                [g.previewContainerError]: t && null != S,
              }),
              children: [
                (0, n.jsxs)("div", {
                  className: g.giftInfoContainer,
                  children: [
                    (0, n.jsx)(b.O, { product: C, fallbackLabel: null }),
                    (0, n.jsxs)("div", {
                      className: g.previewTextContainer,
                      children: [
                        (0, n.jsx)(l.Text, {
                          variant: "text-md/semibold",
                          children: y,
                        }),
                        (0, n.jsx)(l.Heading, {
                          variant: "heading-sm/medium",
                          color: "header-secondary",
                          children:
                            T.type === o.Z.AVATAR_DECORATION
                              ? m.intl.string(m.t["7v0T9P"])
                              : T.type === o.Z.PROFILE_EFFECT
                                ? m.intl.string(m.t.wR5wOj)
                                : null,
                        }),
                      ],
                    }),
                    (0, n.jsx)(l.Text, {
                      variant: "text-md/semibold",
                      children: a,
                    }),
                  ],
                }),
                t &&
                  null != S &&
                  (0, n.jsx)("div", {
                    className: g.recipientError,
                    children: (0, n.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "status-danger-background",
                      children: S,
                    }),
                  }),
              ],
            }),
          ],
        });
      };
    },
    179118: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return O;
        },
      }),
        t(47120);
      var n = t(200651),
        a = t(192379),
        r = t(120356),
        o = t.n(r),
        s = t(392711),
        l = t.n(s),
        c = t(442837),
        d = t(481060),
        u = t(37234),
        f = t(194359),
        p = t(700582),
        _ = t(925329),
        b = t(479446),
        m = t(522489),
        g = t(717401),
        x = t(286961),
        h = t(93127),
        v = t(814443),
        C = t(590783),
        I = t(699516),
        S = t(246946),
        k = t(594174),
        y = t(572004),
        T = t(669079),
        B = t(74538),
        j = t(51144),
        P = t(987209),
        E = t(981631),
        w = t(474936),
        N = t(388032),
        A = t(431852);
      function O(e) {
        let {
            giftCode: i,
            application: t,
            sku: r,
            subscriptionPlan: s,
            selectedGiftStyle: l,
            onClose: u,
            hasSentMessage: f,
            giftRecipient: b,
            giftMessageError: h,
            isSendingMessage: v,
          } = e,
          [I, k] = a.useState(d.CopyInput.Modes.DEFAULT),
          O = (0, c.e7)([S.Z], () => S.Z.enabled),
          R = f || (null != l && null != b),
          L = (null == r ? void 0 : r.productLine) === E.POd.COLLECTIBLES,
          M = (0, x.Z)(),
          { selectedGiftingPromotionReward: G } = (0, P.wD)(),
          D = null == M ? void 0 : M.giftPurchaseConfirmation,
          U = (0, g.tK)(null == G ? void 0 : G.skuId),
          H = (0, g.a5)(s) && null != U && null != D,
          W = () => (null != s ? s.skuId : null != r ? r.id : null),
          F = () => {
            let e;
            return null != h
              ? N.intl.string(N.t.qB8ayc)
              : null == s
                ? null
                : ((e =
                    s.interval === w.rV.MONTH
                      ? R
                        ? H
                          ? D.monthGiftText
                          : N.t["4ZJ+7e"]
                        : N.t["P+z55e"]
                      : R
                        ? H
                          ? D.yearGiftText
                          : N.t.p0pZXF
                        : N.t.bXqk3t),
                  N.intl.format(e, {
                    skuName: (0, B.aq)(s.id),
                    intervalCount: s.intervalCount,
                  }));
          },
          z = (e, i) => {
            null != r && (0, T.dM)(new C.Z({ code: i, maxUses: 1 }), r);
            try {
              (0, y.JG)(e), k(d.CopyInput.Modes.SUCCESS);
            } catch (e) {
              k(d.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
              k(d.CopyInput.Modes.DEFAULT);
            }, 1500);
          },
          q = () => {
            let e;
            if (null == i) return null;
            switch (I) {
              case d.CopyInput.Modes.SUCCESS:
                e = N.intl.string(N.t.XVvPjY);
                break;
              case d.CopyInput.Modes.ERROR:
                e = N.intl.string(N.t.i4GM3N);
                break;
              default:
                e = N.intl.string(N.t.OpuAlJ);
            }
            return (0, n.jsxs)("div", {
              className: A.giftCodeSection,
              children: [
                (0, n.jsx)(d.FormTitle, {
                  children: N.intl.string(N.t["/dG4ND"]),
                }),
                null != i &&
                  (0, n.jsx)(d.CopyInput, {
                    hideMessage: O ? N.intl.string(N.t["0RLn4+"]) : null,
                    value: (0, T.Nz)(i),
                    mode: I,
                    text: e,
                    onCopy: (e) => z(e, i),
                    supportsCopy: y.wS,
                    className: A.__invalid_copyInput,
                    buttonColor: d.ButtonColors.LINK,
                    buttonLook: d.ButtonLooks.LINK,
                  }),
                (0, n.jsx)("div", {
                  className: A.subtext,
                  children: N.intl.string(N.t.QWKUpq),
                }),
              ],
            });
          };
        return v
          ? (0, n.jsxs)("div", {
              className: A.confirmation,
              children: [
                null != t
                  ? (0, n.jsx)(_.Z, {
                      game: t,
                      className: A.__invalid_icon,
                      size: _.Z.Sizes.LARGE,
                      skuId: W(),
                    })
                  : null,
                (0, n.jsx)(d.Spinner, {
                  type: d.SpinnerTypes.PULSING_ELLIPSIS,
                }),
              ],
            })
          : (0, n.jsxs)("div", {
              className: o()(A.confirmation, {
                [A.seasonalConfirmationPadding]: H,
              }),
              children: [
                null != t
                  ? (0, n.jsx)(_.Z, {
                      game: t,
                      className: A.__invalid_icon,
                      size: _.Z.Sizes.LARGE,
                      skuId: W(),
                    })
                  : null,
                (0, n.jsx)(d.Heading, {
                  variant: "heading-lg/semibold",
                  className: o()({
                    [A.header]: null == l && !L,
                    [A.headerCustomGifting]: null != l && !L,
                  }),
                  children:
                    null != b || (f && null == h)
                      ? N.intl.string(N.t.zOmK9P)
                      : null != h
                        ? N.intl.string(N.t.d1lrmZ)
                        : N.intl.string(N.t["/s1xR0"]),
                }),
                (f && null != b && null == h) || R
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(p.Z, {
                          user: b,
                          className: A.giftRecipient,
                          size: d.AvatarSizes.SIZE_80,
                        }),
                        (0, n.jsx)(d.Heading, {
                          className: A.giftRecipientName,
                          variant: "heading-md/semibold",
                          children: j.ZP.getName(b),
                        }),
                        (0, n.jsxs)("div", {
                          className: A.giftRecipientTag,
                          children: [" ", j.ZP.getUserTag(b)],
                        }),
                        (0, n.jsx)("div", {
                          className: A.giftSentMessage,
                          children: F(),
                        }),
                      ],
                    })
                  : (() => {
                      let e = (0, T.MY)(b, L),
                        { removeGiftRecipientUI: t } = m.m.getCurrentConfig(
                          { location: "GiftPurchaseConfirmation" },
                          {
                            autoTrackExposure: !1,
                            disable:
                              __BILLING_STANDALONE__ || e !== T.xr.CUSTOM_STYLE,
                          },
                        );
                      return (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: A.blurb,
                            children: F(),
                          }),
                          !t &&
                            null == h &&
                            (0, n.jsx)(Z, { giftCode: i, onClose: u }),
                          (0, n.jsx)("div", { className: A.divider }),
                          q(),
                        ],
                      });
                    })(),
              ],
            });
      }
      let Z = (e) => {
        let { giftCode: i, onClose: t } = e;
        a.useEffect(() => {
          f.Z.fetchRelationships(), (0, h.W)();
        }, []);
        let [r, o] = a.useState(),
          [s, _] = a.useState(!1),
          [m, g] = a.useState(!1),
          { userAffinities: x, isLoading: C } = (0, c.cj)([v.Z], () => ({
            userAffinities: v.Z.getUserAffinitiesUserIds(),
            isLoading: v.Z.getFetching(),
          })),
          S = Array.from(x.values()),
          y = (0, c.e7)([I.Z], () => I.Z.getFriendIDs()),
          T = l().difference(y, S),
          B = [...S, ...T],
          P = (0, c.e7)(
            [k.default],
            () => k.default.filter((e) => B.includes(e.id) && !e.bot),
            [B],
          );
        if (null == P || 0 === P.length) return null;
        let E = l().sortBy(P, (e) => B.indexOf(e.id));
        return (0, n.jsxs)("div", {
          className: A.giftRecipientSection,
          children: [
            (0, n.jsx)(d.FormTitle, { children: N.intl.string(N.t.MJw05e) }),
            (0, n.jsxs)("div", {
              className: A.giftRecipient,
              children: [
                (0, n.jsx)(d.SearchableSelect, {
                  placeholder: N.intl.string(N.t.J019jY),
                  wrapperClassName: A.giftRecipientInputWrapper,
                  className: s ? A.giftRecipientInputError : void 0,
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, n.jsx)(p.Z, {
                          user: e.value,
                          size: d.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    C
                      ? (0, n.jsx)(d.Spinner, {
                          type: d.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: r,
                  onChange: (e) => {
                    o(e), _(!1);
                  },
                  options: E.map((e) => ({
                    value: e,
                    label: "".concat(j.ZP.getUserTag(e)),
                  })),
                }),
                (0, n.jsx)(d.Button, {
                  disabled: null == r,
                  submitting: m,
                  className: A.sendToRecipientButton,
                  onClick: () => {
                    g(!0),
                      (0, b.YD)(r, i)
                        .then(() => {
                          t(), (0, u.Ou)();
                        })
                        .catch(() => {
                          _(!0), g(!1);
                        });
                  },
                  children: N.intl.string(N.t["+EgwQk"]),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: s ? A.subtextError : A.subtext,
              children: s
                ? N.intl.string(N.t.jo5Vbm)
                : N.intl.string(N.t["8/N3v7"]),
            }),
          ],
        });
      };
    },
    445924: function (e, i, t) {
      var n = t(200651);
      t(192379);
      var a = t(481060),
        r = t(388032);
      i.Z = (e) => {
        let {
          onChangeAvatar: i,
          onChangeAvatarDecoration: t,
          onClose: o,
          className: s,
        } = e;
        return (0, n.jsxs)(a.Menu, {
          className: s,
          onClose: o,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": r.intl.string(r.t.ldIeAQ),
          children: [
            (0, n.jsx)(a.MenuItem, {
              id: "change-avatar",
              action: i,
              label: r.intl.string(r.t["4OynCA"]),
            }),
            (0, n.jsx)(a.MenuItem, {
              id: "change-avatar-decoration",
              action: t,
              label: r.intl.string(r.t["Tna/TU"]),
            }),
          ],
        });
      };
    },
    921813: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return C;
        },
      });
      var n = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        o = t(481060),
        s = t(680295),
        l = t(687158),
        c = t(576635),
        d = t(518950),
        u = t(502762),
        f = t(495804),
        p = t(150039),
        _ = t(450734),
        b = t(225089),
        m = t(853726),
        g = t(165747),
        x = t(981631),
        h = t(228168),
        v = t(154960);
      function C(e) {
        let {
            user: i,
            guild: t,
            canUsePremiumCustomization: a,
            onUpsellClick: C,
            pendingBanner: I,
            pendingBio: S,
            pendingPronouns: k,
            pendingAvatar: y,
            pendingAvatarDecoration: T,
            pendingNickname: B,
            pendingGlobalName: j,
            pendingThemeColors: P,
            pendingProfileEffectId: E,
            avatarClassName: w,
            containerClassName: N,
            isTryItOutFlow: A = !1,
            disabledInputs: O = !1,
            hideCustomStatus: Z = !1,
            hideBioSection: R = !1,
            hideMessageInput: L = !0,
            hideExampleButton: M = !1,
          } = e,
          G = (0, l.ZP)(i.id, null == t ? void 0 : t.id),
          { avatarSrc: D, avatarDecorationSrc: U } = (0, d.Z)({
            user: i,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: T,
            avatarOverride: y,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          H = (0, p.ZT)({ pendingProfileEffectId: E, displayProfile: G }),
          { theme: W, primaryColor: F } = (0, c.Z)({
            user: i,
            displayProfile: G,
            pendingThemeColors: P,
            isPreview: a,
          });
        return (0, n.jsxs)(u.Z, {
          user: i,
          displayProfile: G,
          profileType: h.y0.BITE_SIZE,
          pendingThemeColors: P,
          className: r()(v.container, N),
          forceShowPremium: a,
          children: [
            (0, n.jsxs)("header", {
              className: v.header,
              children: [
                (0, n.jsx)(b.Z, {
                  user: i,
                  displayProfile: G,
                  guildId: null == t ? void 0 : t.id,
                  canUsePremiumCustomization: a,
                  pendingBanner: I,
                  isTryItOutFlow: A,
                  disabledInputs: O,
                  onUpsellClick: () =>
                    null == C
                      ? void 0
                      : C({ object: x.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, n.jsx)(_.Z, {
                  user: i,
                  guild: t,
                  displayProfile: G,
                  canUsePremiumCustomization: a,
                  previewAvatar: D,
                  previewAvatarDecoration: U,
                  previewTheme: W,
                  previewPrimaryColor: F,
                  className: w,
                  disabledInputs: O,
                  isTryItOutFlow: A,
                  onUpsellClick: () =>
                    null == C ? void 0 : C({ object: x.qAy.AVATAR }),
                }),
                !Z &&
                  (0, n.jsx)(f.Z, {
                    location: "ProfileCustomizationPreview",
                    user: i,
                    profileType: h.y0.BITE_SIZE,
                  }),
              ],
            }),
            (0, n.jsx)(m.Z, {
              user: i,
              displayProfile: G,
              guild: t,
              pendingAvatar: y,
              pendingNickname: B,
              pendingGlobalName: j,
              pendingBio: S,
              pendingPronouns: k,
              isTryItOutFlow: A,
              hideBioSection: R,
            }),
            (0, n.jsx)(g.Z, {
              user: i,
              hideMessageInput: L,
              hideExampleButton: M,
            }),
            null != H && (0, n.jsx)(s.Z, { profileEffectId: H }),
          ],
        });
      }
    },
    450734: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return g;
        },
      });
      var n = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        o = t(442837),
        s = t(481060),
        l = t(906732),
        c = t(1585),
        d = t(158776),
        u = t(998502),
        f = t(445924),
        p = t(654904),
        _ = t(486324),
        b = t(776458);
      let m = u.ZP.getEnableHardwareAcceleration()
        ? s.AnimatedAvatar
        : s.Avatar;
      function g(e) {
        let {
            user: i,
            guild: t,
            displayProfile: a,
            canUsePremiumCustomization: u,
            previewAvatar: g,
            previewAvatarDecoration: x,
            previewTheme: h,
            previewPrimaryColor: v,
            className: C,
            disabledInputs: I,
            isTryItOutFlow: S,
            onUpsellClick: k,
          } = e,
          { analyticsLocations: y } = (0, l.ZP)(),
          T = (0, o.e7)([d.Z], () => d.Z.getStatus(i.id)),
          B =
            null == t ||
            (null == a ? void 0 : a.canUsePremiumProfileCustomization) ||
            u,
          j = (0, n.jsx)(m, {
            src: g,
            avatarDecoration: x,
            imageClassName: r()(C, { [b.overlay]: !I }),
            size: s.AvatarSizes.SIZE_80,
            "aria-label": i.username,
            status: T,
            statusTooltip: !1,
            statusBackdropColor:
              null != v ? (0, s.getStatusBackdropColor)(h) : void 0,
          });
        return I
          ? (0, n.jsx)("div", { className: b.avatar, children: j })
          : B
            ? (0, n.jsx)(s.Popout, {
                renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, n.jsx)(f.Z, {
                    className: b.menu,
                    onClose: i,
                    onChangeAvatar: () =>
                      (0, p.$r)(_.pC.AVATAR, null == t ? void 0 : t.id, S),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == t ? void 0 : t,
                        analyticsLocations: y,
                        isTryItOutFlow: S,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, n.jsxs)(s.Clickable, {
                    ...e,
                    className: r()(b.avatar, b.clickable),
                    children: [
                      j,
                      (0, n.jsx)(s.PencilIcon, {
                        size: "custom",
                        className: b.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, n.jsxs)(s.Clickable, {
                onClick: k,
                className: r()(b.avatar, b.clickable),
                children: [
                  j,
                  (0, n.jsx)(s.NitroWheelIcon, {
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
    225089: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return f;
        },
      });
      var n = t(200651);
      t(192379);
      var a = t(481060),
        r = t(222062),
        o = t(867176),
        s = t(654904),
        l = t(486324),
        c = t(228168),
        d = t(388032),
        u = t(93428);
      function f(e) {
        let {
            user: i,
            displayProfile: t,
            guildId: f,
            canUsePremiumCustomization: p,
            pendingBanner: _,
            isTryItOutFlow: b,
            disabledInputs: m,
            onUpsellClick: g,
          } = e,
          x =
            p ||
            (null == t ? void 0 : t.canUsePremiumProfileCustomization) ||
            !1,
          h = x ? a.PencilIcon : a.NitroWheelIcon,
          v = (0, r.M)(x);
        return (0, n.jsx)(o.Z, {
          user: i,
          displayProfile: t,
          guildId: f,
          profileType: c.y0.BITE_SIZE,
          pendingBanner: _,
          canUsePremiumProfileCustomization: p,
          children:
            !m &&
            (0, n.jsxs)(a.Clickable, {
              onClick: () => {
                if (!x && !v) {
                  null == g || g();
                  return;
                }
                (0, s.$r)(l.pC.BANNER, f, b);
              },
              className: u.clickable,
              children: [
                (0, n.jsx)(h, { size: "xs", color: "white" }),
                (0, n.jsx)(a.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    x || v
                      ? d.intl.string(d.t.N0bC3N)
                      : d.intl.string(d.t.O1sT5u),
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return _;
        },
      });
      var n = t(200651);
      t(192379);
      var a = t(442837),
        r = t(648052),
        o = t(530),
        s = t(420654),
        l = t(116854),
        c = t(271383),
        d = t(246946),
        u = t(654904),
        f = t(228168),
        p = t(591156);
      function _(e) {
        var i;
        let {
            user: t,
            displayProfile: _,
            guild: b,
            pendingAvatar: m,
            pendingNickname: g,
            pendingGlobalName: x,
            pendingBio: h,
            pendingPronouns: v,
            isTryItOutFlow: C,
            hideBioSection: I,
          } = e,
          S = (0, a.e7)([c.ZP], () =>
            null == b ? null : c.ZP.getMember(b.id, t.id),
          ),
          k = (0, a.e7)([d.Z], () => d.Z.hidePersonalInformation),
          y =
            null == _
              ? void 0
              : null === (i = _.getPreviewBio(h)) || void 0 === i
                ? void 0
                : i.value,
          T = null != v ? v : null == _ ? void 0 : _.pronouns,
          B = (0, u.Ly)({
            pendingNickname: g,
            pendingGlobalName: x,
            user: t,
            guildMember: S,
          });
        return (0, n.jsxs)("div", {
          inert: "",
          className: p.body,
          children: [
            (0, n.jsx)(o.Z, {
              user: t,
              profileType: f.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != S)) return;
                if (null !== m && !!(null != S.avatar || null != m))
                  return (0, n.jsx)(l.Z, { user: t, nickname: B });
              })(),
              nickname: B,
              pronouns: T,
              isTryItOut: C,
              tags: (0, n.jsx)(r.Z, {
                displayProfile: _,
                profileType: f.y0.BITE_SIZE,
              }),
            }),
            !I &&
              null != y &&
              "" !== y &&
              (0, n.jsx)(s.Z, {
                user: t,
                bio: y,
                hidePersonalInformation: k,
                viewFullBioDisabled: !0,
              }),
          ],
        });
      }
    },
    165747: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return l;
        },
      });
      var n = t(200651);
      t(192379);
      var a = t(475413),
        r = t(955418),
        o = t(388032),
        s = t(591156);
      function l(e) {
        let { user: i, hideMessageInput: t, hideExampleButton: l } = e;
        return t
          ? (0, n.jsx)("footer", {
              className: s.footer,
              children:
                !l &&
                (0, n.jsx)(a.tG, {
                  text: o.intl.string(o.t.hZkfwc),
                  fullWidth: !0,
                }),
            })
          : (0, n.jsx)("footer", {
              inert: "",
              className: s.footer,
              children: (0, n.jsx)(r.Z, { user: i }),
            });
      }
    },
    590783: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return u;
        },
      }),
        t(789020);
      var n = t(913527),
        a = t.n(n),
        r = t(81825),
        o = t(630388),
        s = t(301766),
        l = t(474936);
      function c(e, i, t) {
        return (
          i in e
            ? Object.defineProperty(e, i, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[i] = t),
          e
        );
      }
      let d = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class u extends r.Z {
        static createFromServer(e) {
          return new u({
            userId: null != e.user ? e.user.id : null,
            code: e.code,
            skuId: e.sku_id,
            applicationId: e.application_id,
            uses: e.uses,
            maxUses: e.max_uses,
            storeListingId: null != e.store_listing ? e.store_listing.id : null,
            expiresAt: null != e.expires_at ? a()(e.expires_at) : null,
            redeemed: e.redeemed,
            subscriptionPlanId:
              null != e.subscription_plan
                ? e.subscription_plan.id
                : e.subscription_plan_id,
            subscriptionPlan:
              null != e.subscription_plan
                ? s.ZP.createFromServer(e.subscription_plan)
                : null,
            revoked: !1,
            entitlementBranches:
              null != e.entitlement_branches ? e.entitlement_branches : null,
            flags: null != e.flags ? e.flags : 0,
            giftStyle: e.gift_style,
            subscriptionTrial:
              null != e.subscription_trial
                ? {
                    id: e.subscription_trial.id,
                    interval: e.subscription_trial.interval,
                    intervalCount: e.subscription_trial.interval_count,
                    skuId: e.subscription_trial.sku_id,
                  }
                : null,
            promotion:
              null != e.promotion
                ? {
                    id: e.promotion.id,
                    startDate: e.promotion.start_date,
                    endDate: e.promotion.end_date,
                    inboundHeaderText: e.promotion.inbound_header_text,
                    inboundBodyText: e.promotion.inbound_body_text,
                    inboundHelpCenterLink: e.promotion.inbound_help_center_link,
                  }
                : null,
          });
        }
        isExpired() {
          let e = this.expiresAt;
          return null != e && a()().isAfter(e);
        }
        get hasMultipleCopies() {
          return this.maxUses > 1;
        }
        get isClaimed() {
          return this.uses >= this.maxUses;
        }
        get remainingUses() {
          return this.maxUses - this.uses;
        }
        get isSubscription() {
          return null != this.subscriptionPlanId;
        }
        get premiumSubscriptionType() {
          return (this.isSubscription && l.y7[this.skuId]) || null;
        }
        get isSelfRedeemable() {
          return !(0, o.yE)(this.flags, d.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, o.yE)(
            this.flags,
            d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED,
          );
        }
        get analyticsData() {
          return { gift_code: this.code, gift_code_max_uses: this.maxUses };
        }
        toString() {
          return this.code;
        }
        constructor(e) {
          super(),
            c(this, "userId", void 0),
            c(this, "code", void 0),
            c(this, "skuId", void 0),
            c(this, "applicationId", void 0),
            c(this, "uses", void 0),
            c(this, "maxUses", void 0),
            c(this, "expiresAt", void 0),
            c(this, "redeemed", void 0),
            c(this, "storeListingId", void 0),
            c(this, "subscriptionPlanId", void 0),
            c(this, "subscriptionPlan", void 0),
            c(this, "revoked", void 0),
            c(this, "entitlementBranches", void 0),
            c(this, "flags", void 0),
            c(this, "subscriptionTrial", void 0),
            c(this, "promotion", void 0),
            c(this, "giftStyle", void 0),
            (this.userId = e.userId),
            (this.code = e.code),
            (this.skuId = e.skuId),
            (this.applicationId = e.applicationId),
            (this.uses = e.uses),
            (this.maxUses = e.maxUses),
            (this.expiresAt = e.expiresAt),
            (this.redeemed = e.redeemed),
            (this.storeListingId = e.storeListingId),
            (this.subscriptionPlanId = e.subscriptionPlanId),
            (this.subscriptionPlan = e.subscriptionPlan),
            (this.revoked = e.revoked),
            (this.entitlementBranches = e.entitlementBranches),
            (this.flags = e.flags),
            (this.subscriptionTrial = e.subscriptionTrial),
            (this.promotion = e.promotion),
            (this.giftStyle = e.giftStyle);
        }
      }
    },
    773232: function (e, i, t) {
      e.exports = { awaitingWrapper: "awaitingWrapper_a4ec0f" };
    },
    47648: function (e, i, t) {
      e.exports = {
        container: "container_e4d3f1",
        iconBackground: "iconBackground_e4d3f1",
        link: "link_e4d3f1",
      };
    },
    505069: function (e, i, t) {
      e.exports = {
        previewContainer: "previewContainer_b74403",
        giftInfoContainer: "giftInfoContainer_b74403",
        previewContainerSelected: "previewContainerSelected_b74403",
        previewContainerError: "previewContainerError_b74403",
        previewTextContainer: "previewTextContainer_b74403",
        previewTitleContainer: "previewTitleContainer_b74403",
        previewTitle: "previewTitle_b74403",
        recipientError: "recipientError_b74403",
        previewLink: "previewLink_b74403",
      };
    },
    452049: function (e, i, t) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_d0300f",
        profileEffectBackground: "profileEffectBackground_d0300f",
        profileEffect: "profileEffect_d0300f",
        avatarDecoration: "avatarDecoration_d0300f",
      };
    },
    431852: function (e, i, t) {
      e.exports = {
        blurb: "blurb_c9a9bf",
        giftSentMessage: "giftSentMessage_c9a9bf",
        giftRecipient: "giftRecipient_c9a9bf",
        giftRecipientName: "giftRecipientName_c9a9bf",
        giftRecipientTag: "giftRecipientTag_c9a9bf",
        divider: "divider_c9a9bf",
        subtext: "subtext_c9a9bf",
        subtextError: "subtextError_c9a9bf subtext_c9a9bf",
        header: "header_c9a9bf",
        headerCustomGifting: "headerCustomGifting_c9a9bf",
        giftRecipientSection: "giftRecipientSection_c9a9bf",
        giftRecipientInputWrapper: "giftRecipientInputWrapper_c9a9bf",
        giftRecipientInputError: "giftRecipientInputError_c9a9bf",
        sendToRecipientButton: "sendToRecipientButton_c9a9bf",
        confirmation: "confirmation_c9a9bf",
        seasonalConfirmationPadding: "seasonalConfirmationPadding_c9a9bf",
        giftCodeSection: "giftCodeSection_c9a9bf",
      };
    },
    293803: function (e, i, t) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    608490: function (e, i, t) {
      e.exports = {
        awaitingAuthenticationStep: "awaitingAuthenticationStep_f10fc5",
      };
    },
    282544: function (e, i, t) {
      e.exports = { body: "body_e16e99" };
    },
    659915: function (e, i, t) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    467474: function (e, i, t) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    221309: function (e, i, t) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    374172: function (e, i, t) {
      e.exports = { back: "back_fd80e5" };
    },
    950304: function (e, i, t) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    135970: function (e, i, t) {
      e.exports = {
        body: "body_bf926b",
        reviewStep: "reviewStep_bf926b",
        sliderBody: "sliderBody_bf926b",
        addPaymentSteps: "addPaymentSteps_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
        sliderBodyDynamic: "sliderBodyDynamic_bf926b",
      };
    },
    926617: function (e, i, t) {
      e.exports = { paymentNote: "paymentNote_d791fd" };
    },
    809186: function (e, i, t) {
      e.exports = {
        root: "root_df35cb",
        shaker: "shaker_df35cb",
        stepBody: "stepBody_df35cb",
        bodyText: "bodyText_df35cb",
        invoice: "invoice_df35cb",
        paymentSourceWrapper: "paymentSourceWrapper_df35cb",
        paymentSourceOptionalWarning: "paymentSourceOptionalWarning_df35cb",
        currencyWrapper: "currencyWrapper_df35cb",
        trialCheckbox: "trialCheckbox_df35cb",
        trialCheckboxLabel: "trialCheckboxLabel_df35cb",
        loader: "loader_df35cb",
        contentWrapper: "contentWrapper_df35cb",
        reviewWarningMessageContainer: "reviewWarningMessageContainer_df35cb",
        reviewWarningMessage: "reviewWarningMessage_df35cb",
        trialPriceLine: "trialPriceLine_df35cb",
        afterTrialPriceLine: "afterTrialPriceLine_df35cb",
        formTitle: "formTitle_df35cb",
        spinnerWrapper: "spinnerWrapper_df35cb",
        trialHeader: "trialHeader_df35cb",
        giftMainAnimation: "giftMainAnimation_df35cb",
        selectFreeSku: "selectFreeSku_df35cb",
      };
    },
    738068: function (e, i, t) {
      e.exports = {
        notification: "notification_b45ae8",
        icon: "icon_b45ae8",
        text: "text_b45ae8",
      };
    },
    215409: function (e, i, t) {
      e.exports = {
        stepBody: "stepBody_ad3708",
        invoice: "invoice_ad3708",
        paymentSourceWrapper: "paymentSourceWrapper_ad3708",
        subscriptionCostRow: "subscriptionCostRow_ad3708",
        invoiceSpinner: "invoiceSpinner_ad3708",
        errorBlock: "errorBlock_ad3708",
        fineprint: "fineprint_ad3708",
        skuHeading: "skuHeading_ad3708",
        skuHeadingText: "skuHeadingText_ad3708",
      };
    },
    975765: function (e, i, t) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_faa800",
        profileEffectBackground: "profileEffectBackground_faa800",
        giftMainAnimationWrapper: "giftMainAnimationWrapper_faa800",
        avatar: "avatar_faa800",
      };
    },
    698700: function (e, i, t) {
      e.exports = { collectiblePreview: "collectiblePreview_b5260a" };
    },
    894879: function (e, i, t) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    280099: function (e, i, t) {
      e.exports = {
        tier2Animation: "tier2Animation_bfbba7",
        panningAnimation: "panningAnimation_bfbba7",
        tier2Background: "tier2Background_bfbba7 panningAnimationInner_bfbba7",
        tier2Foreground: "tier2Foreground_bfbba7 panningAnimationInner_bfbba7",
        guildWrapper: "guildWrapper_bfbba7",
        guildBackground: "guildBackground_bfbba7",
        guildStar: "guildStar_bfbba7",
        sequencedAnimation: "sequencedAnimation_bfbba7",
      };
    },
    779655: function (e, i, t) {
      e.exports = {
        headerBackground: "headerBackground_af10a6",
        tier2HeaderBackground:
          "tier2HeaderBackground_af10a6 headerBackground_af10a6",
        snow: "snow_af10a6",
        headerTop: "headerTop_af10a6",
        headerIcon: "headerIcon_af10a6",
        nonTier2: "nonTier2_af10a6",
        price: "price_af10a6",
        closeButton: "closeButton_af10a6",
        trialBadgeContainer: "trialBadgeContainer_af10a6",
        trialOfferText: "trialOfferText_af10a6",
        tier0TrialOffer: "tier0TrialOffer_af10a6",
        trialBadgeSparkles: "trialBadgeSparkles_af10a6",
      };
    },
    635182: function (e, i, t) {
      e.exports = {
        body: "body_e76e48",
        textArea: "textArea_e76e48",
        editorTextArea: "editorTextArea_e76e48",
      };
    },
    461405: function (e, i, t) {
      e.exports = {
        giftMainAnimation: "giftMainAnimation_d90c00",
        adjustedGiftMainAnimation: "adjustedGiftMainAnimation_d90c00",
        soundEmojiContainer: "soundEmojiContainer_d90c00",
        sound: "sound_d90c00",
        emoji: "emoji_d90c00",
        animation: "animation_d90c00",
        spinner: "spinner_d90c00",
        giftBoxOptionContainer: "giftBoxOptionContainer_d90c00",
        adjustedGiftBoxOptionContainer: "adjustedGiftBoxOptionContainer_d90c00",
      };
    },
    301023: function (e, i, t) {
      e.exports = {
        container: "container_b96147",
        emojiList: "emojiList_b96147",
        emoji: "emoji_b96147",
        textSelected: "textSelected_b96147",
        text: "text_b96147",
        emojiIcon: "emojiIcon_b96147",
        customGiftContent: "customGiftContent_b96147",
        emojiHeader: "emojiHeader_b96147",
        customGiftHeader: "customGiftHeader_b96147",
      };
    },
    803731: function (e, i, t) {
      e.exports = {
        customGiftBox: "customGiftBox_c4afc7",
        customGiftBoxHighlighted: "customGiftBoxHighlighted_c4afc7",
        button: "button_c4afc7",
      };
    },
    615945: function (e, i, t) {
      e.exports = {
        stepBody: "stepBody_d439ef",
        stepBodyCustomGift: "stepBodyCustomGift_d439ef",
        paddingForHalloweenBanner: "paddingForHalloweenBanner_d439ef",
        bodyColumnMiddle: "bodyColumnMiddle_d439ef",
        bodyColumnLeft: "bodyColumnLeft_d439ef",
        bodyColumnRight: "bodyColumnRight_d439ef",
        bodyText: "bodyText_d439ef",
        selectPlanDivider: "selectPlanDivider_d439ef",
        selectPlanChooseTitle: "selectPlanChooseTitle_d439ef",
        selectPlanTotalRow: "selectPlanTotalRow_d439ef",
        planSelectSeparator: "planSelectSeparator_d439ef",
        trialPlanSelectHeader: "trialPlanSelectHeader_d439ef",
        legacyPricingNotice: "legacyPricingNotice_d439ef",
        customGiftMessageWrapper: "customGiftMessageWrapper_d439ef",
        customGiftMessage: "customGiftMessage_d439ef",
        selectGiftTitle: "selectGiftTitle_d439ef",
        equalDistantBackButton: "equalDistantBackButton_d439ef",
        compactSendGiftToUser: "compactSendGiftToUser_d439ef",
        compactCustomGiftMessageWrapper:
          "compactCustomGiftMessageWrapper_d439ef",
        compactSelectGiftTitle: "compactSelectGiftTitle_d439ef",
      };
    },
    622694: function (e, i, t) {
      e.exports = {
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
    589242: function (e, i, t) {
      e.exports = {
        planOption: "planOption_bd3462",
        planOneTimeCost: "planOneTimeCost_bd3462",
        selectionBox: "selectionBox_bd3462",
        selectedPlan: "selectedPlan_bd3462",
        planOptionDisabled: "planOptionDisabled_bd3462",
        planOptionClickable: "planOptionClickable_bd3462",
        planOptionCheckbox: "planOptionCheckbox_bd3462",
        planOptionInterval: "planOptionInterval_bd3462",
        optionSelected: "optionSelected_bd3462",
        planOptionCurrentPlan: "planOptionCurrentPlan_bd3462",
        planOptionMonthsFree: "planOptionMonthsFree_bd3462",
        planOptionDiscount: "planOptionDiscount_bd3462",
        planOptionSubtextContainer: "planOptionSubtextContainer_bd3462",
        planOptionSubtext: "planOptionSubtext_bd3462",
        discountPlanOptionSubtext: "discountPlanOptionSubtext_bd3462",
        planOptionClickableContainer: "planOptionClickableContainer_bd3462",
        updatedOptionSelected: "updatedOptionSelected_bd3462",
        optionPriceSelected: "optionPriceSelected_bd3462",
      };
    },
    453476: function (e, i, t) {
      e.exports = {
        giftRecipientInfo: "giftRecipientInfo_cc6d95",
        content: "content_cc6d95",
        giftRecipientName: "giftRecipientName_cc6d95",
        giftRecipientTag: "giftRecipientTag_cc6d95",
      };
    },
    311583: function (e, i, t) {
      e.exports = { renewalInvoiceDate: "renewalInvoiceDate_ff918e" };
    },
    747642: function (e, i, t) {
      e.exports = {
        bannerContainer: "bannerContainer_dffbd4",
        giftIcon: "giftIcon_dffbd4",
        textContainer: "textContainer_dffbd4",
        textHeader: "textHeader_dffbd4",
        textHeaderWithGiftIcon: "textHeaderWithGiftIcon_dffbd4",
        banner: "banner_dffbd4",
      };
    },
    76962: function (e, i, t) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    134384: function (e, i, t) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    641479: function (e, i, t) {
      e.exports = {
        headerContainer: "headerContainer_fe5d81",
        closeContainer: "closeContainer_fe5d81",
        closeIcon: "closeIcon_fe5d81",
        headerImageContainer: "headerImageContainer_fe5d81",
        headerImage: "headerImage_fe5d81",
        confirmationContainer: "confirmationContainer_fe5d81",
        purchaseConfirmation:
          "purchaseConfirmation_fe5d81 confirmationContainer_fe5d81",
        confirmationTitle: "confirmationTitle_fe5d81",
        confirmationSubtitle: "confirmationSubtitle_fe5d81",
      };
    },
    630480: function (e, i, t) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
    154960: function (e, i, t) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    776458: function (e, i, t) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    93428: function (e, i, t) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
    43371: function (e, i, t) {
      e.exports = {
        title: "title_b3a5c2",
        disabled: "disabled_b3a5c2",
        customizationSection: "customizationSection_b3a5c2",
        hideDivider: "hideDivider_b3a5c2",
        withDivider: "withDivider_b3a5c2",
        showBorder: "showBorder_b3a5c2",
        customizationSectionBackground: "customizationSectionBackground_b3a5c2",
        sectionDescription: "sectionDescription_b3a5c2",
        errorMessage: "errorMessage_b3a5c2",
        customizationSectionBorder: "customizationSectionBorder_b3a5c2",
      };
    },
    882880: function (e, i, t) {
      e.exports = {
        premiumFeatureBorder:
          "premiumFeatureBorder_c6d722 featureBorder_c6d722",
        limitedFeatureBorder:
          "limitedFeatureBorder_c6d722 featureBorder_c6d722",
        background: "background_c6d722",
        premiumBackground: "premiumBackground_c6d722 background_c6d722",
        limitedBackground: "limitedBackground_c6d722 background_c6d722",
      };
    },
    677635: function (e, i, t) {
      e.exports = {
        container: "container_bb37e1",
        soundIcon: "soundIcon_bb37e1",
        textSelected: "textSelected_bb37e1",
        sound: "sound_bb37e1",
        text: "text_bb37e1",
        customGiftHeader: "customGiftHeader_bb37e1",
        searchAndSound: "searchAndSound_bb37e1",
      };
    },
  },
]);
//# sourceMappingURL=57cd8693cae8b655b630.js.map
