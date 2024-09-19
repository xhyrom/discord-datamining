"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68136"],
  {
    982404: function (e) {
      e.exports = "/assets/2d6df633d001c44a0921.svg";
    },
    299156: function (e) {
      e.exports = "/assets/3caa869cc5bb0e41eb0e.svg";
    },
    834982: function (e) {
      e.exports = "/assets/4ab3d68b399998f5753d.svg";
    },
    912450: function (e) {
      e.exports = "/assets/75782493c80b4fbbe697.svg";
    },
    703548: function (e) {
      e.exports = "/assets/85fc5205a3e76b57c9f5.svg";
    },
    869333: function (e) {
      e.exports = "/assets/23bd3bbc834357cfe49d.svg";
    },
    652528: function (e) {
      e.exports = "/assets/0e0529073f14259eb74d.svg";
    },
    874692: function (e) {
      e.exports = "/assets/c936123ee17f6757bc49.svg";
    },
    391458: function (e) {
      e.exports = "/assets/0883b60fb8cdf602cfd5.svg";
    },
    70967: function (e) {
      e.exports = "/assets/9717bb76aa244fe26541.svg";
    },
    674264: function (e) {
      e.exports = "/assets/1bc0538a22eabf2f7b6f.svg";
    },
    360088: function (e) {
      e.exports = "/assets/f10cb6b85283a9c3c420.svg";
    },
    304880: function (e) {
      e.exports = "/assets/1ba25bb80d8ee4c89105.svg";
    },
    179118: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return U;
        },
      }),
        t(47120);
      var a = t(735250),
        n = t(470079),
        i = t(120356),
        r = t.n(i),
        l = t(392711),
        o = t.n(l),
        c = t(442837),
        u = t(481060),
        _ = t(37234),
        I = t(194359),
        d = t(700582),
        m = t(925329),
        C = t(479446),
        E = t(522489),
        N = t(857039),
        T = t(93127),
        S = t(814443),
        A = t(590783),
        p = t(699516),
        L = t(246946),
        x = t(594174),
        R = t(572004),
        f = t(669079),
        M = t(74538),
        O = t(51144),
        g = t(598),
        h = t(981631),
        P = t(474936),
        j = t(689938),
        Z = t(524254);
      function U(e) {
        let {
            giftCode: s,
            application: t,
            sku: i,
            subscriptionPlan: l,
            selectedGiftStyle: o,
            onClose: _,
            hasSentMessage: I,
            giftRecipient: C,
            giftMessageError: T,
            isSendingMessage: S,
            halloweenDecoPurchase: p,
          } = e,
          [x, U] = n.useState(u.CopyInput.Modes.DEFAULT),
          b = (0, c.e7)([L.Z], () => L.Z.enabled),
          F = I || (null != o && null != C),
          G = (null == i ? void 0 : i.productLine) === h.POd.COLLECTIBLES,
          { selectedPlan: y } = (0, g.usePaymentContext)(),
          B =
            (0, N.Z)({ location: "Gift purchase confirm" }) &&
            (null == y ? void 0 : y.skuId) === P.Si.TIER_2 &&
            null != p,
          D = () => (null != l ? l.skuId : null != i ? i.id : null),
          H = () => {
            let e;
            let s = null != o && P.V4.includes(o);
            if (null != T)
              return j.Z.Messages
                .APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
            if (null == l) return null;
            if (l.interval === P.rV.MONTH) {
              if (B)
                return j.Z.Messages
                  .NITROWEEN_DESKTOP_GIFT_CONFIRMATION_TITLE_MONTH;
              e = F
                ? s
                  ? j.Z.Messages
                      .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                  : j.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                : j.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY;
            } else {
              if (B)
                return j.Z.Messages
                  .NITROWEEN_DESKTOP_GIFT_CONFIRMATION_TITLE_YEAR;
              e = F
                ? s
                  ? j.Z.Messages
                      .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                  : j.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                : j.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY;
            }
            return e.format({
              skuName: (0, M.aq)(l.id),
              intervalCount: l.intervalCount,
            });
          },
          k = (e, s) => {
            null != i && (0, f.dM)(new A.Z({ code: s, maxUses: 1 }), i);
            try {
              (0, R.JG)(e), U(u.CopyInput.Modes.SUCCESS);
            } catch (e) {
              U(u.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
              U(u.CopyInput.Modes.DEFAULT);
            }, 1500);
          },
          z = () => {
            let e;
            if (null == s) return null;
            switch (x) {
              case u.CopyInput.Modes.SUCCESS:
                e = j.Z.Messages.BILLING_GIFT_COPIED;
                break;
              case u.CopyInput.Modes.ERROR:
                e = j.Z.Messages.FAILED;
                break;
              default:
                e = j.Z.Messages.COPY;
            }
            return (0, a.jsxs)("div", {
              className: Z.giftCodeSection,
              children: [
                (0, a.jsx)(u.FormTitle, {
                  children:
                    j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK,
                }),
                null != s &&
                  (0, a.jsx)(u.CopyInput, {
                    hideMessage: b ? j.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                    value: (0, f.Nz)(s),
                    mode: x,
                    text: e,
                    onCopy: (e) => k(e, s),
                    supportsCopy: R.wS,
                    className: Z.__invalid_copyInput,
                    buttonColor: u.ButtonColors.LINK,
                    buttonLook: u.ButtonLooks.LINK,
                  }),
                (0, a.jsx)("div", {
                  className: Z.subtext,
                  children:
                    j.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT,
                }),
              ],
            });
          };
        return S
          ? (0, a.jsxs)("div", {
              className: Z.confirmation,
              children: [
                null != t
                  ? (0, a.jsx)(m.Z, {
                      game: t,
                      className: Z.__invalid_icon,
                      size: m.Z.Sizes.LARGE,
                      skuId: D(),
                    })
                  : null,
                (0, a.jsx)(u.Spinner, {
                  type: u.SpinnerTypes.PULSING_ELLIPSIS,
                }),
              ],
            })
          : (0, a.jsxs)("div", {
              className: Z.confirmation,
              children: [
                null != t
                  ? (0, a.jsx)(m.Z, {
                      game: t,
                      className: Z.__invalid_icon,
                      size: m.Z.Sizes.LARGE,
                      skuId: D(),
                    })
                  : null,
                (0, a.jsx)(u.Heading, {
                  variant: "heading-lg/semibold",
                  className: r()({
                    [Z.header]: null == o && !G,
                    [Z.headerCustomGifting]: null != o && !G,
                  }),
                  children:
                    null != C || (I && null == T)
                      ? j.Z.Messages
                          .APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE
                      : null != T
                        ? j.Z.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED
                        : j.Z.Messages
                            .APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE,
                }),
                (I && null != C && null == T) || F
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(d.Z, {
                          user: C,
                          className: Z.giftRecipient,
                          size: u.AvatarSizes.SIZE_80,
                        }),
                        (0, a.jsx)(u.Heading, {
                          className: Z.giftRecipientName,
                          variant: "heading-md/semibold",
                          children: O.ZP.getName(C),
                        }),
                        (0, a.jsxs)("div", {
                          className: Z.giftRecipientTag,
                          children: [" ", O.ZP.getUserTag(C)],
                        }),
                        (0, a.jsx)("div", {
                          className: Z.giftSentMessage,
                          children: H(),
                        }),
                      ],
                    })
                  : (() => {
                      let e = (0, f.MY)(C, G),
                        { removeGiftRecipientUI: t } = E.m.getCurrentConfig(
                          { location: "GiftPurchaseConfirmation" },
                          {
                            autoTrackExposure: !1,
                            disable:
                              __BILLING_STANDALONE__ || e !== f.xr.CUSTOM_STYLE,
                          },
                        );
                      return (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("div", {
                            className: Z.blurb,
                            children: H(),
                          }),
                          !t &&
                            null == T &&
                            (0, a.jsx)(v, { giftCode: s, onClose: _ }),
                          (0, a.jsx)("div", { className: Z.divider }),
                          z(),
                        ],
                      });
                    })(),
              ],
            });
      }
      let v = (e) => {
        let { giftCode: s, onClose: t } = e;
        n.useEffect(() => {
          I.Z.fetchRelationships(), (0, T.W)();
        }, []);
        let [i, r] = n.useState(),
          [l, m] = n.useState(!1),
          [E, N] = n.useState(!1),
          { userAffinities: A, isLoading: L } = (0, c.cj)([S.Z], () => ({
            userAffinities: S.Z.getUserAffinitiesUserIds(),
            isLoading: S.Z.getFetching(),
          })),
          R = Array.from(A.values()),
          f = (0, c.e7)([p.Z], () => p.Z.getFriendIDs()),
          M = o().difference(f, R),
          g = [...R, ...M],
          h = (0, c.e7)(
            [x.default],
            () => x.default.filter((e) => g.includes(e.id) && !e.bot),
            [g],
          );
        if (null == h || 0 === h.length) return null;
        let P = o().sortBy(h, (e) => g.indexOf(e.id));
        return (0, a.jsxs)("div", {
          className: Z.giftRecipientSection,
          children: [
            (0, a.jsx)(u.FormTitle, {
              children:
                j.Z.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL,
            }),
            (0, a.jsxs)("div", {
              className: Z.giftRecipient,
              children: [
                (0, a.jsx)(u.SearchableSelect, {
                  placeholder:
                    j.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                  wrapperClassName: Z.giftRecipientInputWrapper,
                  className: l ? Z.giftRecipientInputError : void 0,
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, a.jsx)(d.Z, {
                          user: e.value,
                          size: u.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    L
                      ? (0, a.jsx)(u.Spinner, {
                          type: u.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: i,
                  onChange: (e) => {
                    r(e), m(!1);
                  },
                  options: P.map((e) => ({
                    value: e,
                    label: "".concat(O.ZP.getUserTag(e)),
                  })),
                }),
                (0, a.jsx)(u.Button, {
                  disabled: null == i,
                  submitting: E,
                  className: Z.sendToRecipientButton,
                  onClick: () => {
                    N(!0),
                      (0, C.YD)(i, s)
                        .then(() => {
                          t(), (0, _.Ou)();
                        })
                        .catch(() => {
                          m(!0), N(!1);
                        });
                  },
                  children:
                    j.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON,
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: l ? Z.subtextError : Z.subtext,
              children: l
                ? j.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK
                : j.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT,
            }),
          ],
        });
      };
    },
    789155: function (e, s, t) {
      var a = t(735250);
      t(470079);
      var n = t(780384),
        i = t(481060),
        r = t(410030),
        l = t(689938),
        o = t(92783),
        c = t(982404),
        u = t(299156);
      s.Z = function (e) {
        let {
            churnUserDiscountOffer: s,
            onDiscountClaim: t,
            onContinue: _,
          } = e,
          I = (0, r.ZP)(),
          d = (0, n.wj)(I) ? c : u;
        return null == s
          ? null
          : (0, a.jsxs)("div", {
              className: o.churnFooterContainer,
              children: [
                (0, a.jsx)("div", { className: o.churnFooterGlow }),
                (0, a.jsx)("div", { className: o.churnFooterTopBorder }),
                (0, a.jsx)("div", {
                  className: o.churnFooterContent,
                  children: (0, a.jsxs)("div", {
                    className: o.churnFooterContentBody,
                    children: [
                      (0, a.jsx)("img", {
                        alt: "",
                        src: d,
                        className: o.churnFooterIcon,
                      }),
                      (0, a.jsxs)("div", {
                        className: o.churnFooterContentBodyInner,
                        children: [
                          (0, a.jsx)(i.Text, {
                            variant: "text-md/medium",
                            className: o.churnFooterCopy,
                            children:
                              l.Z.Messages.CHURN_DISCOUNT_DESCRIPTION.format({
                                percent: s.discount.amount,
                                numMonths: s.discount.user_usage_limit,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                            className: o.churnFooterCTAs,
                            children: [
                              (0, a.jsxs)(i.ShinyButton, {
                                className: o.churnFooterClaimCTA,
                                innerClassName: o.churnFooterClaimCTAInner,
                                look: i.ButtonLooks.OUTLINED,
                                color: i.ButtonColors.CUSTOM,
                                onClick: () => (null == t ? void 0 : t()),
                                children: [
                                  (0, a.jsx)(i.NitroWheelIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: o.churnFooterClaimIcon,
                                  }),
                                  (0, a.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    className: o.churnFooterClaimCopy,
                                    children: l.Z.Messages.CHURN_DISCOUNT_CLAIM,
                                  }),
                                ],
                              }),
                              (0, a.jsx)(i.Button, {
                                onClick: () => (null == _ ? void 0 : _()),
                                children: l.Z.Messages.CONTINUE,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
      };
    },
    973159: function (e, s, t) {
      t(627341), t(47120), t(724458), t(653041);
      var a = t(735250),
        n = t(470079),
        i = t(120356),
        r = t.n(i),
        l = t(512722),
        o = t.n(l),
        c = t(392711),
        u = t.n(c),
        _ = t(278074),
        I = t(442837),
        d = t(780384),
        m = t(481060),
        C = t(570140),
        E = t(179360),
        N = t(230711),
        T = t(410030),
        S = t(607070),
        A = t(44315),
        p = t(112831),
        L = t(543241),
        x = t(906411),
        R = t(565138),
        f = t(822179),
        M = t(419922),
        O = t(687158),
        g = t(484459),
        h = t(813549),
        P = t(867176),
        j = t(502762),
        Z = t(652853),
        U = t(430824),
        v = t(594174),
        b = t(314884),
        F = t(709586),
        G = t(626135),
        y = t(768581),
        B = t(63063),
        D = t(998502),
        H = t(53900),
        k = t(789155),
        z = t(55610),
        Y = t(798769),
        w = t(474936),
        W = t(981631),
        V = t(689938),
        K = t(896243),
        X = t(834982),
        J = t(912450),
        q = t(703548),
        Q = t(869333),
        $ = t(652528),
        ee = t(874692),
        es = t(391458),
        et = t(70967),
        ea = t(674264),
        en = t(360088),
        ei = t(304880);
      let er = D.ZP.getEnableHardwareAcceleration()
          ? m.AnimatedAvatar
          : m.Avatar,
        el = {
          boostItemVisual: $,
          emojiStickersVisual: ee,
          screenShareItemVisual: en,
          uploadsMessagesItemVisual: es,
          uploadsMessagesItemVisualV2: et,
          PL: ea,
          TR: ei,
        },
        eo = {
          boostItemVisual: X,
          emojiStickersVisual: J,
          screenShareItemVisual: en,
          uploadsMessagesItemVisual: q,
          uploadsMessagesItemVisualV2: Q,
          PL: ea,
          TR: ei,
        };
      function ec() {
        let e = (0, T.ZP)();
        return (0, d.wj)(e) ? eo : el;
      }
      function eu(e) {
        let { description: s, onLearnMore: t, renderVisual: n } = e;
        return (0, a.jsxs)("div", {
          className: K.whatYouLoseItem,
          children: [
            (0, a.jsxs)("div", {
              className: K.whatYouLoseItemLeftColumn,
              children: [
                (0, a.jsx)(m.Text, { variant: "text-md/normal", children: s }),
                (0, a.jsx)(m.Button, {
                  look: m.Button.Looks.LINK,
                  color: m.Button.Colors.LINK,
                  size: m.Button.Sizes.NONE,
                  className: K.whatYouLoseItemLearnMore,
                  onClick: t,
                  children: V.Z.Messages.LEARN_MORE,
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: K.whatYouLoseItemRightColumn,
              children: n(),
            }),
          ],
        });
      }
      function e_(e) {
        let { ...s } = e,
          { theme: t } = (0, Z.z)(),
          n = (0, A.O0)(W.tPk.INTERACTIVE_ACTIVE, t);
        return (0, a.jsx)(m.NitroWheelIcon, { size: "md", ...s, color: n.hex });
      }
      function eI(e) {
        let { currentUser: s, premiumType: t, onClose: n } = e,
          i = (0, O.ZP)(s.id),
          r = (0, I.e7)([S.Z], () => S.Z.useReducedMotion),
          l = t === w.p9.TIER_1,
          o = (0, _.EQ)(null == i ? void 0 : i.premiumType)
            .with(w.p9.TIER_2, () =>
              (0, a.jsxs)(j.Z, {
                user: s,
                displayProfile: i,
                forceShowPremium: !0,
                profileType: null,
                className: K.profileCard,
                children: [
                  (0, a.jsx)(P.b, {
                    user: s,
                    displayProfile: i,
                    avatarSize: m.AvatarSizes.SIZE_56,
                    avatarOffsetX: 8,
                    avatarOffsetY: 2,
                    bannerWidth: 172,
                    bannerHeight: 60,
                    themePadding: 4,
                  }),
                  (0, a.jsx)(er, {
                    className: K.profileAvatar,
                    src: s.getAvatarURL(
                      void 0,
                      (0, m.getAvatarSize)(m.AvatarSizes.SIZE_56),
                      !r,
                    ),
                    size: m.AvatarSizes.SIZE_56,
                    "aria-label": s.username,
                  }),
                  (0, a.jsx)(j.Z.Overlay, {
                    className: K.profileInner,
                    children: (0, a.jsxs)("div", {
                      className: K.profileUserInfo,
                      children: [
                        (0, a.jsx)(h.Z, {
                          className: K.profileNameTag,
                          usernameClass: K.profileNameTagUsername,
                          name: s.toString(),
                        }),
                        (0, a.jsx)(e_, { className: K.profilePremiumIcon }),
                      ],
                    }),
                  }),
                ],
              }),
            )
            .otherwise(() =>
              (0, a.jsxs)("div", {
                className: K.profileCardTier1,
                children: [
                  (0, a.jsx)(er, {
                    className: K.profileAvatarTier1,
                    src: s.getAvatarURL(
                      void 0,
                      (0, m.getAvatarSize)(m.AvatarSizes.SIZE_56),
                      !r,
                    ),
                    size: m.AvatarSizes.SIZE_56,
                    "aria-label": s.username,
                  }),
                  (0, a.jsxs)("div", {
                    className: K.profileUserInfoTier1,
                    children: [
                      (0, a.jsx)(h.Z, {
                        className: K.profileNameTag,
                        usernameClass: K.profileNameTagUsername,
                        name: s.toString(),
                      }),
                      (0, a.jsx)(m.NitroWheelIcon, {
                        size: "md",
                        color: "currentColor",
                        className: K.profilePremiumIcon,
                      }),
                    ],
                  }),
                ],
              }),
            );
        return (0, a.jsx)(
          eu,
          {
            description: l
              ? V.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format()
              : V.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
            onLearnMore: () => {
              n(),
                N.Z.open(W.oAB.PROFILE_CUSTOMIZATION),
                G.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "user_profile_customization",
                });
            },
            renderVisual: () => o,
          },
          "profile-item",
        );
      }
      function ed(e) {
        let { premiumType: s } = e,
          t = (0, I.e7)([S.Z], () => S.Z.useReducedMotion),
          n = (0, L.wC)(null)
            .filter(
              (e) => e.type === x.B.GUILD && (e.animated || null != e.guildId),
            )
            .slice(0, 3),
          i = (0, I.Wu)([f.Z], () =>
            f.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(
              0,
              3 - n.length,
            ),
          ),
          r = ec().emojiStickersVisual,
          l = s === w.p9.TIER_1;
        return (0, a.jsx)(
          eu,
          {
            description: l
              ? V.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format()
              : V.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
            onLearnMore: () => {
              window.open(B.Z.getArticleURL(W.BhN.PREMIUM_DETAILS)),
                G.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "emojis_stickers",
                });
            },
            renderVisual: () =>
              (null != n && n.length > 0) || (!l && null != i && i.length > 0)
                ? (0, a.jsxs)("div", {
                    className: K.emojiStickersPersonalizedContainer,
                    children: [
                      n
                        .map((e) =>
                          null == e.id
                            ? e.url
                            : y.ZP.getEmojiURL({
                                id: e.id,
                                animated: !t && e.animated,
                                size: 58,
                              }),
                        )
                        .map((e) =>
                          null != e
                            ? (0, a.jsx)("img", {
                                className: K.personalizedEmoji,
                                alt: "",
                                src: e,
                              })
                            : null,
                        ),
                      l
                        ? null
                        : i.map((e) =>
                            (0, a.jsx)(
                              M.ZP,
                              {
                                disableAnimation: t,
                                sticker: e,
                                size: 58,
                                withLoadingIndicator: !1,
                              },
                              e.id,
                            ),
                          ),
                    ],
                  })
                : (0, a.jsx)("img", {
                    className: K.nonPersonalizedGraphic,
                    alt: "",
                    src: r,
                  }),
          },
          "emoji-stickers-item",
        );
      }
      function em(e) {
        let { premiumType: s, onClose: t } = e;
        n.useEffect(() => C.Z.wait(() => (0, E.X8)()), []);
        let i = (0, I.e7)([S.Z], () => S.Z.useReducedMotion),
          [l, o] = (0, I.Wu)([b.Z, U.Z], () => {
            let e = b.Z.boostSlots,
              s = new Map();
            u()(e)
              .map("premiumGuildSubscription")
              .map("guildId")
              .forEach((e) => {
                if (null != U.Z.getGuild(e)) {
                  var t;
                  let a = null !== (t = s.get(e)) && void 0 !== t ? t : 0;
                  s.set(e, a + 1);
                }
              });
            let t = null,
              a = 0;
            return (
              s.size > 0 &&
                ([t, a] = Array.from(s.entries()).reduce((e, s) =>
                  s[1] > e[1] ? s : e,
                )),
              [U.Z.getGuild(t), a]
            );
          }),
          c = null != l && o > 0,
          _ = ec().boostItemVisual;
        return (0, a.jsx)(
          eu,
          {
            description:
              s === w.p9.TIER_1
                ? V.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format()
                : V.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
            onLearnMore: () => {
              t(),
                N.Z.open(W.oAB.GUILD_BOOSTING),
                G.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "boosts",
                });
            },
            renderVisual: () =>
              c
                ? (0, a.jsx)("div", {
                    className: K.boostCardContainer,
                    children: (0, a.jsxs)("div", {
                      className: K.boostCard,
                      children: [
                        (0, a.jsx)(R.Z, {
                          guild: l,
                          size: R.Z.Sizes.MEDIUM,
                          animate: !i,
                          className: K.boostCardIcon,
                        }),
                        (0, a.jsxs)("div", {
                          className: K.boostCardInfo,
                          children: [
                            (0, a.jsx)(m.Text, {
                              variant: "text-md/normal",
                              className: r()(
                                K.textSingleLineEllipsis,
                                K.boostCardTitle,
                              ),
                              children: l.name,
                            }),
                            (0, a.jsxs)("div", {
                              className: K.boostCardSubtitle,
                              children: [
                                (0, a.jsx)(F.Z, { className: K.boostCardGem }),
                                (0, a.jsx)(m.Text, {
                                  variant: "text-xs/normal",
                                  className: r()(
                                    K.textSingleLineEllipsis,
                                    K.boostCardCount,
                                  ),
                                  children:
                                    V.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format(
                                      { boostCount: o },
                                    ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, a.jsx)("img", { alt: "", src: _ }),
          },
          "boost-item",
        );
      }
      let eC = () => {
        let e = ec().screenShareItemVisual;
        return (0, a.jsx)(
          eu,
          {
            description:
              V.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
            onLearnMore: () => {
              window.open(B.Z.getArticleURL(W.BhN.STREAM_QUALITY_SETTINGS)),
                G.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "screen_share",
                });
            },
            renderVisual: () => (0, a.jsx)("img", { alt: "", src: e }),
          },
          "screen-share-item",
        );
      };
      function eE(e) {
        let { premiumType: s } = e,
          t = ec().uploadsMessagesItemVisual;
        return (0, a.jsx)(
          eu,
          {
            description:
              s === w.p9.TIER_2
                ? V.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format()
                : V.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
            onLearnMore: () => {
              window.open(B.Z.getArticleURL(W.BhN.PREMIUM_DETAILS)),
                G.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "msgs_uploads",
                });
            },
            renderVisual: () => (0, a.jsx)("img", { alt: "", src: t }),
          },
          "uploads-item",
        );
      }
      let eN = (e) => {
        let { country: s } = e,
          t = ec(),
          n = "PL" === s ? t.PL : t.TR;
        return (0, a.jsx)(
          eu,
          {
            description: ("PL" === s
              ? V.Z.Messages
                  .LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK
              : V.Z.Messages
                  .LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK
            ).format(),
            onLearnMore: () => {
              window.open(B.Z.getArticleURL(W.BhN.LOCALIZED_PRICING)),
                G.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "grandfathered_prices",
                });
            },
            renderVisual: () => (0, a.jsx)("img", { alt: "", src: n }),
          },
          "grandfathered-prices-item",
        );
      };
      function eT(e) {
        let {
            currentUser: s,
            premiumType: t,
            onClose: i,
            isDowngrade: r = !1,
          } = e,
          l = (0, H.Z)(),
          c = (0, z.U)(),
          u = n.useMemo(() => {
            let e = [];
            switch (
              (c &&
                (o()(
                  null != l,
                  "Subscription billing country should not be null",
                ),
                e.push((0, a.jsx)(eN, { country: l }))),
              t)
            ) {
              case w.p9.TIER_0:
                e.push(
                  (0, a.jsx)(ed, { premiumType: t }),
                  (0, a.jsx)(eE, { premiumType: t }),
                );
                break;
              case w.p9.TIER_1:
                r
                  ? e.push(
                      (0, a.jsx)(eI, {
                        currentUser: s,
                        premiumType: t,
                        onClose: i,
                      }),
                      (0, a.jsx)(eC, {}),
                      (0, a.jsx)(em, { premiumType: t, onClose: i }),
                    )
                  : e.push(
                      (0, a.jsx)(eI, {
                        currentUser: s,
                        premiumType: t,
                        onClose: i,
                      }),
                      (0, a.jsx)(ed, { premiumType: t }),
                      (0, a.jsx)(eC, {}),
                      (0, a.jsx)(eE, { premiumType: t }),
                      (0, a.jsx)(em, { premiumType: t, onClose: i }),
                    );
                break;
              case w.p9.TIER_2:
                r
                  ? e.push(
                      (0, a.jsx)(eI, {
                        currentUser: s,
                        premiumType: t,
                        onClose: i,
                      }),
                      (0, a.jsx)(em, { premiumType: t, onClose: i }),
                      (0, a.jsx)(eC, {}),
                    )
                  : e.push(
                      (0, a.jsx)(eI, {
                        currentUser: s,
                        premiumType: t,
                        onClose: i,
                      }),
                      (0, a.jsx)(ed, { premiumType: t }),
                      (0, a.jsx)(em, { premiumType: t, onClose: i }),
                      (0, a.jsx)(eC, {}),
                      (0, a.jsx)(eE, { premiumType: t }),
                    );
            }
            return e;
          }, [t, s, i, r, c, l]);
        return (0, a.jsx)("div", {
          className: K.whatYouLoseItemContainer,
          children: u,
        });
      }
      s.Z = function (e) {
        let {
            premiumType: s,
            titleText: t,
            subtitleText: i,
            footer: r,
            onClose: l,
            onDiscountClaim: c,
            onContinue: u,
            analyticsLocations: _,
            isLoading: d = !1,
            churnUserDiscountOffer: C = null,
            isDowngrade: E = !1,
            subtitleIcon: N,
            subtitleClassName: T,
          } = e,
          S = (0, I.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return (
              o()(null != e, "ProfileItem: currentUser cannot be undefined"), e
            );
          });
        n.useEffect(() => {
          (0, g.Z)(S.id, S.getAvatarURL(null, 80));
        }, [S]);
        let A = null != C && !d;
        return (n.useEffect(() => {
          A &&
            G.default.track(
              W.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED,
              {
                location_stack: _,
                discount_id: null == C ? void 0 : C.discount_id,
              },
            );
        }, [A, _, C]),
        d)
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(Y.Z, { premiumType: s, onClose: l }),
                (0, a.jsx)(m.ModalContent, {
                  className: K.body,
                  children: (0, a.jsx)(m.Spinner, { className: K.spinner }),
                }),
              ],
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(Y.Z, { premiumType: s, onClose: l }),
                (0, a.jsxs)(m.ModalContent, {
                  className: K.body,
                  children: [
                    (0, a.jsx)(p.Z, {
                      size: p.Z.Sizes.SIZE_24,
                      className: K.title,
                      children: t,
                    }),
                    (0, a.jsxs)("div", {
                      className: T,
                      children: [
                        N,
                        (0, a.jsx)(m.Text, {
                          variant: "text-md/normal",
                          className: K.subtitle,
                          children: i,
                        }),
                      ],
                    }),
                    (0, a.jsx)(eT, {
                      currentUser: S,
                      premiumType: s,
                      onClose: l,
                      isDowngrade: E,
                    }),
                  ],
                }),
                !A && (0, a.jsx)(m.ModalFooter, { children: r }),
                A &&
                  (0, a.jsx)(k.Z, {
                    churnUserDiscountOffer: C,
                    onDiscountClaim: c,
                    onContinue: u,
                  }),
              ],
            });
      };
    },
  },
]);
//# sourceMappingURL=6dff388dee851c575ea5.js.map
