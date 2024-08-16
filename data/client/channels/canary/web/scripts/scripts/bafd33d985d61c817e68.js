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
    179118: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return j;
        },
      }),
        n(47120);
      var t = n(735250),
        a = n(470079),
        i = n(120356),
        r = n.n(i),
        l = n(392711),
        o = n.n(l),
        c = n(442837),
        u = n(481060),
        _ = n(37234),
        d = n(194359),
        I = n(700582),
        E = n(925329),
        m = n(479446),
        C = n(522489),
        T = n(93127),
        N = n(814443),
        S = n(590783),
        p = n(699516),
        L = n(246946),
        A = n(594174),
        R = n(572004),
        O = n(669079),
        P = n(74538),
        x = n(51144),
        M = n(981631),
        f = n(474936),
        g = n(689938),
        h = n(851212);
      function j(e) {
        let {
            giftCode: s,
            application: n,
            sku: i,
            subscriptionPlan: l,
            selectedGiftStyle: o,
            onClose: _,
            hasSentMessage: d,
            giftRecipient: m,
            giftMessageError: T,
            isSendingMessage: N,
          } = e,
          [p, A] = a.useState(u.CopyInput.Modes.DEFAULT),
          j = (0, c.e7)([L.Z], () => L.Z.enabled),
          U = d || (null != o && null != m),
          v = (null == i ? void 0 : i.productLine) === M.POd.COLLECTIBLES,
          b = () => (null != l ? l.skuId : null != i ? i.id : null),
          F = () => {
            let e;
            let s = null != o && f.V4.includes(o);
            return null != T
              ? g.Z.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB
              : null == l
                ? null
                : (e =
                    l.interval === f.rV.MONTH
                      ? U
                        ? s
                          ? g.Z.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                          : g.Z.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                        : g.Z.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY
                      : U
                        ? s
                          ? g.Z.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                          : g.Z.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                        : g.Z.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format(
                    {
                      skuName: (0, P.aq)(l.id),
                      intervalCount: l.intervalCount,
                    },
                  );
          },
          y = (e, s) => {
            null != i && (0, O.dM)(new S.Z({ code: s, maxUses: 1 }), i);
            try {
              (0, R.JG)(e), A(u.CopyInput.Modes.SUCCESS);
            } catch (e) {
              A(u.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
              A(u.CopyInput.Modes.DEFAULT);
            }, 1500);
          },
          G = () => {
            let e;
            if (null == s) return null;
            switch (p) {
              case u.CopyInput.Modes.SUCCESS:
                e = g.Z.Messages.BILLING_GIFT_COPIED;
                break;
              case u.CopyInput.Modes.ERROR:
                e = g.Z.Messages.FAILED;
                break;
              default:
                e = g.Z.Messages.COPY;
            }
            return (0, t.jsxs)("div", {
              className: h.giftCodeSection,
              children: [
                (0, t.jsx)(u.FormTitle, {
                  children:
                    g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK,
                }),
                null != s &&
                  (0, t.jsx)(u.CopyInput, {
                    hideMessage: j ? g.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                    value: (0, O.Nz)(s),
                    mode: p,
                    text: e,
                    onCopy: (e) => y(e, s),
                    supportsCopy: R.wS,
                    className: h.__invalid_copyInput,
                    buttonColor: u.ButtonColors.LINK,
                    buttonLook: u.ButtonLooks.LINK,
                  }),
                (0, t.jsx)("div", {
                  className: h.subtext,
                  children:
                    g.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT,
                }),
              ],
            });
          };
        return N
          ? (0, t.jsxs)("div", {
              className: h.confirmation,
              children: [
                null != n
                  ? (0, t.jsx)(E.Z, {
                      game: n,
                      className: h.__invalid_icon,
                      size: E.Z.Sizes.LARGE,
                      skuId: b(),
                    })
                  : null,
                (0, t.jsx)(u.Spinner, {
                  type: u.SpinnerTypes.PULSING_ELLIPSIS,
                }),
              ],
            })
          : (0, t.jsxs)("div", {
              className: h.confirmation,
              children: [
                null != n
                  ? (0, t.jsx)(E.Z, {
                      game: n,
                      className: h.__invalid_icon,
                      size: E.Z.Sizes.LARGE,
                      skuId: b(),
                    })
                  : null,
                (0, t.jsx)(u.Heading, {
                  variant: "heading-lg/semibold",
                  className: r()({
                    [h.header]: null == o && !v,
                    [h.headerCustomGifting]: null != o && !v,
                  }),
                  children:
                    null != m || (d && null == T)
                      ? g.Z.Messages
                          .APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE
                      : null != T
                        ? g.Z.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED
                        : g.Z.Messages
                            .APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE,
                }),
                (d && null != m && null == T) || U
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(I.Z, {
                          user: m,
                          className: h.giftRecipient,
                          size: u.AvatarSizes.SIZE_80,
                        }),
                        (0, t.jsx)(u.Heading, {
                          className: h.giftRecipientName,
                          variant: "heading-md/semibold",
                          children: x.ZP.getName(m),
                        }),
                        (0, t.jsxs)("div", {
                          className: h.giftRecipientTag,
                          children: [" ", x.ZP.getUserTag(m)],
                        }),
                        (0, t.jsx)("div", {
                          className: h.giftSentMessage,
                          children: F(),
                        }),
                      ],
                    })
                  : (() => {
                      let e = (0, O.MY)(m, v),
                        { removeGiftRecipientUI: n } = C.m.getCurrentConfig(
                          { location: "GiftPurchaseConfirmation" },
                          {
                            autoTrackExposure: !1,
                            disable:
                              __BILLING_STANDALONE__ || e !== O.xr.CUSTOM_STYLE,
                          },
                        );
                      return (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("div", {
                            className: h.blurb,
                            children: F(),
                          }),
                          !n &&
                            null == T &&
                            (0, t.jsx)(Z, { giftCode: s, onClose: _ }),
                          (0, t.jsx)("div", { className: h.divider }),
                          G(),
                        ],
                      });
                    })(),
              ],
            });
      }
      let Z = (e) => {
        let { giftCode: s, onClose: n } = e;
        a.useEffect(() => {
          d.Z.fetchRelationships(), (0, T.W)();
        }, []);
        let [i, r] = a.useState(),
          [l, E] = a.useState(!1),
          [C, S] = a.useState(!1),
          { userAffinities: L, isLoading: R } = (0, c.cj)([N.Z], () => ({
            userAffinities: N.Z.getUserAffinitiesUserIds(),
            isLoading: N.Z.getFetching(),
          })),
          O = Array.from(L.values()),
          P = (0, c.e7)([p.Z], () => p.Z.getFriendIDs()),
          M = o().difference(P, O),
          f = [...O, ...M],
          j = (0, c.e7)(
            [A.default],
            () => A.default.filter((e) => f.includes(e.id) && !e.bot),
            [f],
          );
        if (null == j || 0 === j.length) return null;
        let Z = o().sortBy(j, (e) => f.indexOf(e.id));
        return (0, t.jsxs)("div", {
          className: h.giftRecipientSection,
          children: [
            (0, t.jsx)(u.FormTitle, {
              children:
                g.Z.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL,
            }),
            (0, t.jsxs)("div", {
              className: h.giftRecipient,
              children: [
                (0, t.jsx)(u.SearchableSelect, {
                  placeholder:
                    g.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                  wrapperClassName: h.giftRecipientInputWrapper,
                  className: l ? h.giftRecipientInputError : void 0,
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, t.jsx)(I.Z, {
                          user: e.value,
                          size: u.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    R
                      ? (0, t.jsx)(u.Spinner, {
                          type: u.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: i,
                  onChange: (e) => {
                    r(e), E(!1);
                  },
                  options: Z.map((e) => ({
                    value: e,
                    label: "".concat(x.ZP.getUserTag(e)),
                  })),
                }),
                (0, t.jsx)(u.Button, {
                  disabled: null == i,
                  submitting: C,
                  className: h.sendToRecipientButton,
                  onClick: () => {
                    S(!0),
                      (0, m.Y)(i, s)
                        .then(() => {
                          n(), (0, _.Ou)();
                        })
                        .catch(() => {
                          E(!0), S(!1);
                        });
                  },
                  children:
                    g.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON,
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: l ? h.subtextError : h.subtext,
              children: l
                ? g.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK
                : g.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT,
            }),
          ],
        });
      };
    },
    789155: function (e, s, n) {
      var t = n(735250);
      n(470079);
      var a = n(780384),
        i = n(481060),
        r = n(410030),
        l = n(689938),
        o = n(866152),
        c = n(982404),
        u = n(299156);
      s.Z = function (e) {
        let {
            churnUserDiscountOffer: s,
            onDiscountClaim: n,
            onContinue: _,
          } = e,
          d = (0, r.ZP)(),
          I = (0, a.wj)(d) ? c : u;
        return null == s
          ? null
          : (0, t.jsxs)("div", {
              className: o.churnFooterContainer,
              children: [
                (0, t.jsx)("div", { className: o.churnFooterGlow }),
                (0, t.jsx)("div", { className: o.churnFooterTopBorder }),
                (0, t.jsx)("div", {
                  className: o.churnFooterContent,
                  children: (0, t.jsxs)("div", {
                    className: o.churnFooterContentBody,
                    children: [
                      (0, t.jsx)("img", {
                        alt: "",
                        src: I,
                        className: o.churnFooterIcon,
                      }),
                      (0, t.jsxs)("div", {
                        className: o.churnFooterContentBodyInner,
                        children: [
                          (0, t.jsx)(i.Text, {
                            variant: "text-md/medium",
                            className: o.churnFooterCopy,
                            children:
                              l.Z.Messages.CHURN_DISCOUNT_DESCRIPTION.format({
                                percent: s.discount.amount,
                                numMonths: s.discount.user_usage_limit,
                              }),
                          }),
                          (0, t.jsxs)("div", {
                            className: o.churnFooterCTAs,
                            children: [
                              (0, t.jsxs)(i.ShinyButton, {
                                className: o.churnFooterClaimCTA,
                                innerClassName: o.churnFooterClaimCTAInner,
                                look: i.ButtonLooks.OUTLINED,
                                color: i.ButtonColors.CUSTOM,
                                onClick: () => (null == n ? void 0 : n()),
                                children: [
                                  (0, t.jsx)(i.NitroWheelIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: o.churnFooterClaimIcon,
                                  }),
                                  (0, t.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    className: o.churnFooterClaimCopy,
                                    children: l.Z.Messages.CHURN_DISCOUNT_CLAIM,
                                  }),
                                ],
                              }),
                              (0, t.jsx)(i.Button, {
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
    973159: function (e, s, n) {
      n(627341), n(47120), n(724458), n(653041);
      var t = n(735250),
        a = n(470079),
        i = n(120356),
        r = n.n(i),
        l = n(512722),
        o = n.n(l),
        c = n(392711),
        u = n.n(c),
        _ = n(278074),
        d = n(442837),
        I = n(780384),
        E = n(481060),
        m = n(570140),
        C = n(179360),
        T = n(230711),
        N = n(410030),
        S = n(607070),
        p = n(44315),
        L = n(112831),
        A = n(543241),
        R = n(906411),
        O = n(565138),
        P = n(822179),
        x = n(419922),
        M = n(484459),
        f = n(318661),
        g = n(813549),
        h = n(735336),
        j = n(502762),
        Z = n(652853),
        U = n(430824),
        v = n(594174),
        b = n(314884),
        F = n(709586),
        y = n(626135),
        G = n(768581),
        D = n(63063),
        B = n(998502),
        k = n(53900),
        H = n(789155),
        z = n(55610),
        Y = n(798769),
        w = n(474936),
        W = n(981631),
        V = n(228168),
        K = n(689938),
        X = n(123007),
        q = n(834982),
        J = n(912450),
        Q = n(703548),
        $ = n(869333),
        ee = n(652528),
        es = n(874692),
        en = n(391458),
        et = n(70967),
        ea = n(674264),
        ei = n(360088),
        er = n(304880);
      let el = B.ZP.getEnableHardwareAcceleration()
          ? E.AnimatedAvatar
          : E.Avatar,
        eo = {
          boostItemVisual: ee,
          emojiStickersVisual: es,
          screenShareItemVisual: ei,
          uploadsMessagesItemVisual: en,
          uploadsMessagesItemVisualV2: et,
          PL: ea,
          TR: er,
        },
        ec = {
          boostItemVisual: q,
          emojiStickersVisual: J,
          screenShareItemVisual: ei,
          uploadsMessagesItemVisual: Q,
          uploadsMessagesItemVisualV2: $,
          PL: ea,
          TR: er,
        };
      function eu() {
        let e = (0, N.ZP)();
        return (0, I.wj)(e) ? ec : eo;
      }
      function e_(e) {
        let { description: s, onLearnMore: n, renderVisual: a } = e;
        return (0, t.jsxs)("div", {
          className: X.whatYouLoseItem,
          children: [
            (0, t.jsxs)("div", {
              className: X.whatYouLoseItemLeftColumn,
              children: [
                (0, t.jsx)(E.Text, { variant: "text-md/normal", children: s }),
                (0, t.jsx)(E.Button, {
                  look: E.Button.Looks.LINK,
                  color: E.Button.Colors.LINK,
                  size: E.Button.Sizes.NONE,
                  className: X.whatYouLoseItemLearnMore,
                  onClick: n,
                  children: K.Z.Messages.LEARN_MORE,
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: X.whatYouLoseItemRightColumn,
              children: a(),
            }),
          ],
        });
      }
      function ed(e) {
        let { ...s } = e,
          { theme: n } = (0, Z.z)(),
          a = (0, p.O0)(W.tPk.INTERACTIVE_ACTIVE, n);
        return (0, t.jsx)(E.NitroWheelIcon, { size: "md", ...s, color: a.hex });
      }
      function eI(e) {
        let { currentUser: s, premiumType: n, onClose: a } = e,
          i = (0, f.ZP)(s.id),
          r = (0, d.e7)([S.Z], () => S.Z.useReducedMotion),
          l = n === w.p9.TIER_1,
          o = (0, _.EQ)(null == i ? void 0 : i.premiumType)
            .with(w.p9.TIER_2, () =>
              (0, t.jsxs)(j.Z, {
                user: s,
                displayProfile: i,
                forceShowPremium: !0,
                profileType: V.y0.CANCEL_MODAL,
                className: X.profileCard,
                children: [
                  (0, t.jsx)("div", {
                    className: X.profileBanner,
                    children: (0, t.jsx)(h.Z, {
                      displayProfile: i,
                      user: s,
                      allowEdit: !1,
                      profileType: V.y0.CANCEL_MODAL,
                    }),
                  }),
                  (0, t.jsx)(el, {
                    className: X.profileAvatar,
                    src: s.getAvatarURL(
                      void 0,
                      (0, E.getAvatarSize)(E.AvatarSizes.SIZE_56),
                      !r,
                    ),
                    size: E.AvatarSizes.SIZE_56,
                    "aria-label": s.username,
                  }),
                  (0, t.jsx)(j.Z.Overlay, {
                    className: X.profileInner,
                    children: (0, t.jsxs)("div", {
                      className: X.profileUserInfo,
                      children: [
                        (0, t.jsx)(g.Z, {
                          className: X.profileNameTag,
                          usernameClass: X.profileNameTagUsername,
                          name: s.toString(),
                        }),
                        (0, t.jsx)(ed, { className: X.profilePremiumIcon }),
                      ],
                    }),
                  }),
                ],
              }),
            )
            .otherwise(() =>
              (0, t.jsxs)("div", {
                className: X.profileCardTier1,
                children: [
                  (0, t.jsx)(el, {
                    className: X.profileAvatarTier1,
                    src: s.getAvatarURL(
                      void 0,
                      (0, E.getAvatarSize)(E.AvatarSizes.SIZE_56),
                      !r,
                    ),
                    size: E.AvatarSizes.SIZE_56,
                    "aria-label": s.username,
                  }),
                  (0, t.jsxs)("div", {
                    className: X.profileUserInfoTier1,
                    children: [
                      (0, t.jsx)(g.Z, {
                        className: X.profileNameTag,
                        usernameClass: X.profileNameTagUsername,
                        name: s.toString(),
                      }),
                      (0, t.jsx)(E.NitroWheelIcon, {
                        size: "md",
                        color: "currentColor",
                        className: X.profilePremiumIcon,
                      }),
                    ],
                  }),
                ],
              }),
            );
        return (0, t.jsx)(
          e_,
          {
            description: l
              ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format()
              : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
            onLearnMore: () => {
              a(),
                T.Z.open(W.oAB.PROFILE_CUSTOMIZATION),
                y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "user_profile_customization",
                });
            },
            renderVisual: () => o,
          },
          "profile-item",
        );
      }
      function eE(e) {
        let { premiumType: s } = e,
          n = (0, d.e7)([S.Z], () => S.Z.useReducedMotion),
          a = (0, A.wC)(null)
            .filter(
              (e) => e.type === R.B.GUILD && (e.animated || null != e.guildId),
            )
            .slice(0, 3),
          i = (0, d.Wu)([P.Z], () =>
            P.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(
              0,
              3 - a.length,
            ),
          ),
          r = eu().emojiStickersVisual,
          l = s === w.p9.TIER_1;
        return (0, t.jsx)(
          e_,
          {
            description: l
              ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format()
              : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
            onLearnMore: () => {
              window.open(D.Z.getArticleURL(W.BhN.PREMIUM_DETAILS)),
                y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "emojis_stickers",
                });
            },
            renderVisual: () =>
              (null != a && a.length > 0) || (!l && null != i && i.length > 0)
                ? (0, t.jsxs)("div", {
                    className: X.emojiStickersPersonalizedContainer,
                    children: [
                      a
                        .map((e) =>
                          null == e.id
                            ? e.url
                            : G.ZP.getEmojiURL({
                                id: e.id,
                                animated: !n && e.animated,
                                size: 58,
                              }),
                        )
                        .map((e) =>
                          null != e
                            ? (0, t.jsx)("img", {
                                className: X.personalizedEmoji,
                                alt: "",
                                src: e,
                              })
                            : null,
                        ),
                      l
                        ? null
                        : i.map((e) =>
                            (0, t.jsx)(
                              x.ZP,
                              {
                                disableAnimation: n,
                                sticker: e,
                                size: 58,
                                withLoadingIndicator: !1,
                              },
                              e.id,
                            ),
                          ),
                    ],
                  })
                : (0, t.jsx)("img", {
                    className: X.nonPersonalizedGraphic,
                    alt: "",
                    src: r,
                  }),
          },
          "emoji-stickers-item",
        );
      }
      function em(e) {
        let { premiumType: s, onClose: n } = e;
        a.useEffect(() => m.Z.wait(() => (0, C.X8)()), []);
        let i = (0, d.e7)([S.Z], () => S.Z.useReducedMotion),
          [l, o] = (0, d.Wu)([b.Z, U.Z], () => {
            let e = b.Z.boostSlots,
              s = new Map();
            u()(e)
              .map("premiumGuildSubscription")
              .map("guildId")
              .forEach((e) => {
                if (null != U.Z.getGuild(e)) {
                  var n;
                  let t = null !== (n = s.get(e)) && void 0 !== n ? n : 0;
                  s.set(e, t + 1);
                }
              });
            let n = null,
              t = 0;
            return (
              s.size > 0 &&
                ([n, t] = Array.from(s.entries()).reduce((e, s) =>
                  s[1] > e[1] ? s : e,
                )),
              [U.Z.getGuild(n), t]
            );
          }),
          c = null != l && o > 0,
          _ = eu().boostItemVisual;
        return (0, t.jsx)(
          e_,
          {
            description:
              s === w.p9.TIER_1
                ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format()
                : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
            onLearnMore: () => {
              n(),
                T.Z.open(W.oAB.GUILD_BOOSTING),
                y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "boosts",
                });
            },
            renderVisual: () =>
              c
                ? (0, t.jsx)("div", {
                    className: X.boostCardContainer,
                    children: (0, t.jsxs)("div", {
                      className: X.boostCard,
                      children: [
                        (0, t.jsx)(O.Z, {
                          guild: l,
                          size: O.Z.Sizes.MEDIUM,
                          animate: !i,
                          className: X.boostCardIcon,
                        }),
                        (0, t.jsxs)("div", {
                          className: X.boostCardInfo,
                          children: [
                            (0, t.jsx)(E.Text, {
                              variant: "text-md/normal",
                              className: r()(
                                X.textSingleLineEllipsis,
                                X.boostCardTitle,
                              ),
                              children: l.name,
                            }),
                            (0, t.jsxs)("div", {
                              className: X.boostCardSubtitle,
                              children: [
                                (0, t.jsx)(F.Z, { className: X.boostCardGem }),
                                (0, t.jsx)(E.Text, {
                                  variant: "text-xs/normal",
                                  className: r()(
                                    X.textSingleLineEllipsis,
                                    X.boostCardCount,
                                  ),
                                  children:
                                    K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format(
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
                : (0, t.jsx)("img", { alt: "", src: _ }),
          },
          "boost-item",
        );
      }
      let eC = () => {
        let e = eu().screenShareItemVisual;
        return (0, t.jsx)(
          e_,
          {
            description:
              K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
            onLearnMore: () => {
              window.open(D.Z.getArticleURL(W.BhN.STREAM_QUALITY_SETTINGS)),
                y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "screen_share",
                });
            },
            renderVisual: () => (0, t.jsx)("img", { alt: "", src: e }),
          },
          "screen-share-item",
        );
      };
      function eT(e) {
        let { premiumType: s } = e,
          n = eu().uploadsMessagesItemVisual;
        return (0, t.jsx)(
          e_,
          {
            description:
              s === w.p9.TIER_2
                ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format()
                : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
            onLearnMore: () => {
              window.open(D.Z.getArticleURL(W.BhN.PREMIUM_DETAILS)),
                y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "msgs_uploads",
                });
            },
            renderVisual: () => (0, t.jsx)("img", { alt: "", src: n }),
          },
          "uploads-item",
        );
      }
      let eN = (e) => {
        let { country: s } = e,
          n = eu(),
          a = "PL" === s ? n.PL : n.TR;
        return (0, t.jsx)(
          e_,
          {
            description: ("PL" === s
              ? K.Z.Messages
                  .LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK
              : K.Z.Messages
                  .LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK
            ).format(),
            onLearnMore: () => {
              window.open(D.Z.getArticleURL(W.BhN.LOCALIZED_PRICING)),
                y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "grandfathered_prices",
                });
            },
            renderVisual: () => (0, t.jsx)("img", { alt: "", src: a }),
          },
          "grandfathered-prices-item",
        );
      };
      function eS(e) {
        let {
            currentUser: s,
            premiumType: n,
            onClose: i,
            isDowngrade: r = !1,
          } = e,
          l = (0, k.Z)(),
          c = (0, z.U)(),
          u = a.useMemo(() => {
            let e = [];
            switch (
              (c &&
                (o()(
                  null != l,
                  "Subscription billing country should not be null",
                ),
                e.push((0, t.jsx)(eN, { country: l }))),
              n)
            ) {
              case w.p9.TIER_0:
                e.push(
                  (0, t.jsx)(eE, { premiumType: n }),
                  (0, t.jsx)(eT, { premiumType: n }),
                );
                break;
              case w.p9.TIER_1:
                r
                  ? e.push(
                      (0, t.jsx)(eI, {
                        currentUser: s,
                        premiumType: n,
                        onClose: i,
                      }),
                      (0, t.jsx)(eC, {}),
                      (0, t.jsx)(em, { premiumType: n, onClose: i }),
                    )
                  : e.push(
                      (0, t.jsx)(eI, {
                        currentUser: s,
                        premiumType: n,
                        onClose: i,
                      }),
                      (0, t.jsx)(eE, { premiumType: n }),
                      (0, t.jsx)(eC, {}),
                      (0, t.jsx)(eT, { premiumType: n }),
                      (0, t.jsx)(em, { premiumType: n, onClose: i }),
                    );
                break;
              case w.p9.TIER_2:
                r
                  ? e.push(
                      (0, t.jsx)(eI, {
                        currentUser: s,
                        premiumType: n,
                        onClose: i,
                      }),
                      (0, t.jsx)(em, { premiumType: n, onClose: i }),
                      (0, t.jsx)(eC, {}),
                    )
                  : e.push(
                      (0, t.jsx)(eI, {
                        currentUser: s,
                        premiumType: n,
                        onClose: i,
                      }),
                      (0, t.jsx)(eE, { premiumType: n }),
                      (0, t.jsx)(em, { premiumType: n, onClose: i }),
                      (0, t.jsx)(eC, {}),
                      (0, t.jsx)(eT, { premiumType: n }),
                    );
            }
            return e;
          }, [n, s, i, r, c, l]);
        return (0, t.jsx)("div", {
          className: X.whatYouLoseItemContainer,
          children: u,
        });
      }
      s.Z = function (e) {
        let {
            premiumType: s,
            titleText: n,
            subtitleText: i,
            footer: r,
            onClose: l,
            onDiscountClaim: c,
            onContinue: u,
            analyticsLocations: _,
            isLoading: I = !1,
            churnUserDiscountOffer: m = null,
            isDowngrade: C = !1,
            subtitleIcon: T,
            subtitleClassName: N,
          } = e,
          S = (0, d.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return (
              o()(null != e, "ProfileItem: currentUser cannot be undefined"), e
            );
          });
        a.useEffect(() => {
          (0, M.Z)(S.id, S.getAvatarURL(null, 80));
        }, [S]);
        let p = null != m && !I;
        return (a.useEffect(() => {
          p &&
            y.default.track(
              W.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED,
              {
                location_stack: _,
                discount_id: null == m ? void 0 : m.discount_id,
              },
            );
        }, [p, _, m]),
        I)
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Y.Z, { premiumType: s, onClose: l }),
                (0, t.jsx)(E.ModalContent, {
                  className: X.body,
                  children: (0, t.jsx)(E.Spinner, { className: X.spinner }),
                }),
              ],
            })
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Y.Z, { premiumType: s, onClose: l }),
                (0, t.jsxs)(E.ModalContent, {
                  className: X.body,
                  children: [
                    (0, t.jsx)(L.Z, {
                      size: L.Z.Sizes.SIZE_24,
                      className: X.title,
                      children: n,
                    }),
                    (0, t.jsxs)("div", {
                      className: N,
                      children: [
                        T,
                        (0, t.jsx)(E.Text, {
                          variant: "text-md/normal",
                          className: X.subtitle,
                          children: i,
                        }),
                      ],
                    }),
                    (0, t.jsx)(eS, {
                      currentUser: S,
                      premiumType: s,
                      onClose: l,
                      isDowngrade: C,
                    }),
                  ],
                }),
                !p && (0, t.jsx)(E.ModalFooter, { children: r }),
                p &&
                  (0, t.jsx)(H.Z, {
                    churnUserDiscountOffer: m,
                    onDiscountClaim: c,
                    onContinue: u,
                  }),
              ],
            });
      };
    },
    735336: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return B;
        },
      }),
        n(47120);
      var t = n(735250),
        a = n(470079),
        i = n(120356),
        r = n.n(i),
        l = n(866442),
        o = n(442837),
        c = n(692547),
        u = n(481060),
        _ = n(230711),
        d = n(100527),
        I = n(906732),
        E = n(220082),
        m = n(583405),
        C = n(279745),
        T = n(300284),
        N = n(695346),
        S = n(314897),
        p = n(430824),
        L = n(594174),
        A = n(451478),
        R = n(626135),
        O = n(768581),
        P = n(74538),
        x = n(785717),
        M = n(888778),
        f = n(943217),
        g = n(793397),
        h = n(841040),
        j = n(228168),
        Z = n(981631),
        U = n(474936),
        v = n(689938),
        b = n(439779);
      let F = {
          [j.y0.POPOUT]: 18,
          [j.y0.MODAL]: 24,
          [j.y0.SETTINGS]: 0,
          [j.y0.PANEL]: 18,
          [j.y0.CANCEL_MODAL]: 0,
        },
        y = {
          [j.y0.MODAL]: Z.ZY5.USER_PROFILE,
          [j.y0.POPOUT]: Z.ZY5.USER_POPOUT,
          [j.y0.SETTINGS]: Z.ZY5.USER_POPOUT,
          [j.y0.PANEL]: Z.ZY5.DM_CHANNEL,
          [j.y0.CANCEL_MODAL]: Z.ZY5.USER_POPOUT,
        };
      function G(e) {
        let { type: s, shown: i, onClick: l } = e,
          c = (0, o.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return P.ZP.canUsePremiumProfileCustomization(e);
          }),
          E = a.useRef(!1),
          { analyticsLocations: m } = (0, I.ZP)(d.Z.BADGE);
        return (
          a.useEffect(() => {
            i &&
              !E.current &&
              ((E.current = !0),
              R.default.track(Z.rMx.PREMIUM_UPSELL_VIEWED, {
                type: U.cd.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                location: {
                  page: y[s],
                  section: Z.jXE.NITRO_BANNER,
                  object: Z.qAy.NITRO_BADGE,
                },
                location_stack: m,
              }));
          }, [m, i, s]),
          (0, t.jsx)(u.Tooltip, {
            tooltipContentClassName: b.premiumIconTooltipContent,
            text: c
              ? v.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP
              : v.Z.Messages
                  .USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
            children: (e) =>
              (0, t.jsx)(u.Clickable, {
                ...e,
                onClick: c
                  ? void 0
                  : () => {
                      var e;
                      (e = m),
                        (0, u.openModalLazy)(async () => {
                          let { default: s } = await n
                            .e("30364")
                            .then(n.bind(n, 968031));
                          return (n) => {
                            let { onClose: a, ...i } = n;
                            return (0, t.jsx)(s, {
                              analyticsLocations: e,
                              title:
                                v.Z.Messages
                                  .USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                              description:
                                v.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format(
                                  {
                                    onAndMoreWithPremiumClick: () => {
                                      a(),
                                        _.Z.open(Z.oAB.PREMIUM, null, {
                                          analyticsLocations: e,
                                        });
                                    },
                                  },
                                ),
                              onClose: a,
                              ...i,
                            });
                          };
                        }),
                        null == l || l();
                    },
                className: r()(b.premiumIconWrapper, {
                  [b.visible]: i,
                  [b.clickable]: !c,
                }),
                children: (0, t.jsx)(u.TextBadge, {
                  color: "rgba(32, 34, 37, 0.8)",
                  text: (0, t.jsx)(u.NitroWheelIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: b.premiumIcon,
                  }),
                }),
              }),
          })
        );
      }
      function D(e) {
        let {
            darkenOnHover: s,
            profileType: n,
            profileLabel: a,
            icon: i,
            ...r
          } = e,
          l = F[n],
          o = "pencil" === i ? u.PencilIcon : u.SettingsIcon;
        return (0, t.jsx)(u.Clickable, {
          ...r,
          "aria-label": a,
          className: s ? b.pencilContainerDark : b.pencilContainer,
          children: (0, t.jsx)(u.Tooltip, {
            text: a,
            children: (e) =>
              (0, t.jsx)(o, {
                ...e,
                color: "currentColor",
                size: "custom",
                width: l,
                height: l,
                className: b.editIcon,
              }),
          }),
        });
      }
      function B(e) {
        var s, n;
        let {
            user: i,
            displayProfile: _,
            onClose: d,
            guildId: I,
            profileType: L,
            isHovering: R,
            animateOnHover: F,
            allowEdit: y = !0,
            showPremiumBadgeUpsell: B = !0,
            hasProfileEffect: k = !1,
          } = e,
          H = (0, o.e7)([p.Z], () => p.Z.getGuild(I)),
          z = (0, o.e7)([S.default], () => S.default.getId()) === i.id && y,
          Y = P.ZP.isPremiumAtLeast(
            null == _ ? void 0 : _.premiumType,
            U.p9.TIER_2,
          ),
          { trackUserProfileAction: w } = (0, x.KZ)(),
          [W, V] = a.useState(!1),
          K = (0, o.e7)([A.Z], () => A.Z.isFocused()),
          X = N.QK.getSetting(),
          { bannerSrc: q, status: J } = (0, M.Z)({
            displayProfile: _,
            size: (0, g.e7)(L),
            canAnimate: F || !X ? W : K,
          }),
          Q = (0, u.useToken)(c.Z.unsafe_rawColors.PRIMARY_800).hex(),
          $ = (0, u.getAvatarSize)(u.AvatarSizes.SIZE_80),
          ee = (0, l._i)((0, E.ZP)(i.getAvatarURL(I, $), Q, !1)),
          es = (0, m.Z)(
            null !== (s = null == _ ? void 0 : _.primaryColor) && void 0 !== s
              ? s
              : ee,
          ).hsl,
          en = (0, T.Z)({
            analyticsLocation: {
              page: Z.ZY5.USER_POPOUT,
              section: Z.jXE.PROFILE_POPOUT,
            },
          });
        return (0, t.jsx)(f.Z, {
          isPremium: Y,
          hasThemeColors:
            null !== (n = null == _ ? void 0 : _.canEditThemes) &&
            void 0 !== n &&
            n,
          profileType: L,
          hasBanner: null != q,
          hasProfileEffect: k,
          children: (0, t.jsxs)("div", {
            className: r()(
              b.banner,
              (0, g.Ae)({
                profileType: L,
                user: {
                  hasBanner: null != q,
                  isPremium: Y,
                  hasProfileEffect: k,
                },
              }),
              { [b.reducedMotion]: !X },
            ),
            onMouseMove: () => V(!0),
            onMouseLeave: () => V(!1),
            style: {
              backgroundImage: null != q ? "url(".concat(q, ")") : void 0,
              backgroundColor:
                J !== M.s.COMPLETE ? c.Z.unsafe_rawColors.PRIMARY_800.css : es,
            },
            children: [
              z
                ? null == H
                  ? (0, t.jsx)(D, {
                      darkenOnHover: k && R,
                      profileType: L,
                      profileLabel: v.Z.Messages.EDIT_PROFILE,
                      icon: "pencil",
                      onClick: () => {
                        w({ action: "EDIT_PROFILE" }), null == d || d(), en();
                      },
                    })
                  : (0, t.jsx)(u.Popout, {
                      spacing: 6,
                      position: "bottom",
                      renderPopout: (e) => {
                        let { closePopout: s } = e;
                        return (0, t.jsx)(h.Z, {
                          onClose: s,
                          onSelect: d,
                          guild: H,
                        });
                      },
                      children: (e) =>
                        (0, t.jsx)(D, {
                          darkenOnHover: k && R,
                          profileLabel: v.Z.Messages.EDIT_PROFILE,
                          icon: "pencil",
                          ...e,
                          profileType: L,
                        }),
                    })
                : B && null != q && L !== j.y0.SETTINGS
                  ? (0, t.jsx)(G, {
                      type: L,
                      shown: void 0 === R ? W : R,
                      onClick: () => {
                        w({ action: "PRESS_PREMIUM_UPSELL" }), null == d || d();
                      },
                    })
                  : null,
              !X && (0, O.F8)(q) && (0, t.jsx)(C.Z, { className: b.gifTag }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=bafd33d985d61c817e68.js.map
