"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17938"],
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
    789155: function (e, s, r) {
      var t = r(200651);
      r(192379);
      var a = r(780384),
        n = r(481060),
        i = r(410030),
        o = r(689938),
        l = r(92783),
        c = r(982404),
        u = r(299156);
      s.Z = function (e) {
        let {
            churnUserDiscountOffer: s,
            onDiscountClaim: r,
            onContinue: m,
          } = e,
          d = (0, i.ZP)(),
          _ = (0, a.wj)(d) ? c : u;
        return null == s
          ? null
          : (0, t.jsxs)("div", {
              className: l.churnFooterContainer,
              children: [
                (0, t.jsx)("div", { className: l.churnFooterGlow }),
                (0, t.jsx)("div", { className: l.churnFooterTopBorder }),
                (0, t.jsx)("div", {
                  className: l.churnFooterContent,
                  children: (0, t.jsxs)("div", {
                    className: l.churnFooterContentBody,
                    children: [
                      (0, t.jsx)("img", {
                        alt: "",
                        src: _,
                        className: l.churnFooterIcon,
                      }),
                      (0, t.jsxs)("div", {
                        className: l.churnFooterContentBodyInner,
                        children: [
                          (0, t.jsx)(n.Text, {
                            variant: "text-md/medium",
                            className: l.churnFooterCopy,
                            children:
                              o.Z.Messages.CHURN_DISCOUNT_DESCRIPTION.format({
                                percent: s.discount.amount,
                                numMonths: s.discount.user_usage_limit,
                              }),
                          }),
                          (0, t.jsxs)("div", {
                            className: l.churnFooterCTAs,
                            children: [
                              (0, t.jsxs)(n.ShinyButton, {
                                className: l.churnFooterClaimCTA,
                                innerClassName: l.churnFooterClaimCTAInner,
                                look: n.ButtonLooks.OUTLINED,
                                color: n.ButtonColors.CUSTOM,
                                onClick: () => (null == r ? void 0 : r()),
                                children: [
                                  (0, t.jsx)(n.NitroWheelIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: l.churnFooterClaimIcon,
                                  }),
                                  (0, t.jsx)(n.Text, {
                                    variant: "text-sm/semibold",
                                    className: l.churnFooterClaimCopy,
                                    children: o.Z.Messages.CHURN_DISCOUNT_CLAIM,
                                  }),
                                ],
                              }),
                              (0, t.jsx)(n.Button, {
                                onClick: () => (null == m ? void 0 : m()),
                                children: o.Z.Messages.CONTINUE,
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
    973159: function (e, s, r) {
      r(627341), r(47120), r(724458), r(653041);
      var t = r(200651),
        a = r(192379),
        n = r(120356),
        i = r.n(n),
        o = r(512722),
        l = r.n(o),
        c = r(392711),
        u = r.n(c),
        m = r(278074),
        d = r(442837),
        _ = r(780384),
        C = r(481060),
        I = r(570140),
        p = r(179360),
        x = r(230711),
        E = r(410030),
        N = r(607070),
        f = r(44315),
        h = r(112831),
        T = r(543241),
        j = r(906411),
        L = r(565138),
        M = r(822179),
        A = r(419922),
        g = r(687158),
        S = r(484459),
        R = r(813549),
        U = r(867176),
        v = r(502762),
        Z = r(652853),
        b = r(430824),
        O = r(594174),
        P = r(314884),
        y = r(709586),
        k = r(626135),
        w = r(768581),
        B = r(63063),
        z = r(998502),
        W = r(53900),
        D = r(789155),
        V = r(55610),
        F = r(798769),
        G = r(474936),
        Y = r(981631),
        K = r(689938),
        H = r(896243),
        J = r(834982),
        Q = r(912450),
        X = r(703548),
        q = r(869333),
        $ = r(652528),
        ee = r(874692),
        es = r(391458),
        er = r(70967),
        et = r(674264),
        ea = r(360088),
        en = r(304880);
      let ei = z.ZP.getEnableHardwareAcceleration()
          ? C.AnimatedAvatar
          : C.Avatar,
        eo = {
          boostItemVisual: $,
          emojiStickersVisual: ee,
          screenShareItemVisual: ea,
          uploadsMessagesItemVisual: es,
          uploadsMessagesItemVisualV2: er,
          PL: et,
          TR: en,
        },
        el = {
          boostItemVisual: J,
          emojiStickersVisual: Q,
          screenShareItemVisual: ea,
          uploadsMessagesItemVisual: X,
          uploadsMessagesItemVisualV2: q,
          PL: et,
          TR: en,
        };
      function ec() {
        let e = (0, E.ZP)();
        return (0, _.wj)(e) ? el : eo;
      }
      function eu(e) {
        let { description: s, onLearnMore: r, renderVisual: a } = e;
        return (0, t.jsxs)("div", {
          className: H.whatYouLoseItem,
          children: [
            (0, t.jsxs)("div", {
              className: H.whatYouLoseItemLeftColumn,
              children: [
                (0, t.jsx)(C.Text, { variant: "text-md/normal", children: s }),
                (0, t.jsx)(C.Button, {
                  look: C.Button.Looks.LINK,
                  color: C.Button.Colors.LINK,
                  size: C.Button.Sizes.NONE,
                  className: H.whatYouLoseItemLearnMore,
                  onClick: r,
                  children: K.Z.Messages.LEARN_MORE,
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: H.whatYouLoseItemRightColumn,
              children: a(),
            }),
          ],
        });
      }
      function em(e) {
        let { ...s } = e,
          { theme: r } = (0, Z.z)(),
          a = (0, f.O0)(Y.tPk.INTERACTIVE_ACTIVE, r);
        return (0, t.jsx)(C.NitroWheelIcon, { size: "md", ...s, color: a.hex });
      }
      function ed(e) {
        let { currentUser: s, premiumType: r, onClose: a } = e,
          n = (0, g.ZP)(s.id),
          i = (0, d.e7)([N.Z], () => N.Z.useReducedMotion),
          o = r === G.p9.TIER_1,
          l = (0, m.EQ)(null == n ? void 0 : n.premiumType)
            .with(G.p9.TIER_2, () =>
              (0, t.jsxs)(v.Z, {
                user: s,
                displayProfile: n,
                forceShowPremium: !0,
                profileType: null,
                className: H.profileCard,
                children: [
                  (0, t.jsx)(U.b, {
                    user: s,
                    displayProfile: n,
                    avatarSize: C.AvatarSizes.SIZE_56,
                    avatarOffsetX: 8,
                    avatarOffsetY: 2,
                    bannerWidth: 172,
                    bannerHeight: 60,
                    themePadding: 4,
                  }),
                  (0, t.jsx)(ei, {
                    className: H.profileAvatar,
                    src: s.getAvatarURL(
                      void 0,
                      (0, C.getAvatarSize)(C.AvatarSizes.SIZE_56),
                      !i,
                    ),
                    size: C.AvatarSizes.SIZE_56,
                    "aria-label": s.username,
                  }),
                  (0, t.jsx)(v.Z.Overlay, {
                    className: H.profileInner,
                    children: (0, t.jsxs)("div", {
                      className: H.profileUserInfo,
                      children: [
                        (0, t.jsx)(R.Z, {
                          className: H.profileNameTag,
                          usernameClass: H.profileNameTagUsername,
                          name: s.toString(),
                        }),
                        (0, t.jsx)(em, { className: H.profilePremiumIcon }),
                      ],
                    }),
                  }),
                ],
              }),
            )
            .otherwise(() =>
              (0, t.jsxs)("div", {
                className: H.profileCardTier1,
                children: [
                  (0, t.jsx)(ei, {
                    className: H.profileAvatarTier1,
                    src: s.getAvatarURL(
                      void 0,
                      (0, C.getAvatarSize)(C.AvatarSizes.SIZE_56),
                      !i,
                    ),
                    size: C.AvatarSizes.SIZE_56,
                    "aria-label": s.username,
                  }),
                  (0, t.jsxs)("div", {
                    className: H.profileUserInfoTier1,
                    children: [
                      (0, t.jsx)(R.Z, {
                        className: H.profileNameTag,
                        usernameClass: H.profileNameTagUsername,
                        name: s.toString(),
                      }),
                      (0, t.jsx)(C.NitroWheelIcon, {
                        size: "md",
                        color: "currentColor",
                        className: H.profilePremiumIcon,
                      }),
                    ],
                  }),
                ],
              }),
            );
        return (0, t.jsx)(
          eu,
          {
            description: o
              ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format()
              : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
            onLearnMore: () => {
              a(),
                x.Z.open(Y.oAB.PROFILE_CUSTOMIZATION),
                k.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "user_profile_customization",
                });
            },
            renderVisual: () => l,
          },
          "profile-item",
        );
      }
      function e_(e) {
        let { premiumType: s } = e,
          r = (0, d.e7)([N.Z], () => N.Z.useReducedMotion),
          a = (0, T.wC)(null)
            .filter(
              (e) => e.type === j.B.GUILD && (e.animated || null != e.guildId),
            )
            .slice(0, 3),
          n = (0, d.Wu)([M.Z], () =>
            M.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(
              0,
              3 - a.length,
            ),
          ),
          i = ec().emojiStickersVisual,
          o = s === G.p9.TIER_1;
        return (0, t.jsx)(
          eu,
          {
            description: o
              ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format()
              : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
            onLearnMore: () => {
              window.open(B.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS)),
                k.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "emojis_stickers",
                });
            },
            renderVisual: () =>
              (null != a && a.length > 0) || (!o && null != n && n.length > 0)
                ? (0, t.jsxs)("div", {
                    className: H.emojiStickersPersonalizedContainer,
                    children: [
                      a
                        .map((e) =>
                          null == e.id
                            ? e.url
                            : w.ZP.getEmojiURL({
                                id: e.id,
                                animated: !r && e.animated,
                                size: 58,
                              }),
                        )
                        .map((e) =>
                          null != e
                            ? (0, t.jsx)("img", {
                                className: H.personalizedEmoji,
                                alt: "",
                                src: e,
                              })
                            : null,
                        ),
                      o
                        ? null
                        : n.map((e) =>
                            (0, t.jsx)(
                              A.ZP,
                              {
                                disableAnimation: r,
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
                    className: H.nonPersonalizedGraphic,
                    alt: "",
                    src: i,
                  }),
          },
          "emoji-stickers-item",
        );
      }
      function eC(e) {
        let { premiumType: s, onClose: r } = e;
        a.useEffect(() => I.Z.wait(() => (0, p.X8)()), []);
        let n = (0, d.e7)([N.Z], () => N.Z.useReducedMotion),
          [o, l] = (0, d.Wu)([P.Z, b.Z], () => {
            let e = P.Z.boostSlots,
              s = new Map();
            u()(e)
              .map("premiumGuildSubscription")
              .map("guildId")
              .forEach((e) => {
                if (null != b.Z.getGuild(e)) {
                  var r;
                  let t = null !== (r = s.get(e)) && void 0 !== r ? r : 0;
                  s.set(e, t + 1);
                }
              });
            let r = null,
              t = 0;
            return (
              s.size > 0 &&
                ([r, t] = Array.from(s.entries()).reduce((e, s) =>
                  s[1] > e[1] ? s : e,
                )),
              [b.Z.getGuild(r), t]
            );
          }),
          c = null != o && l > 0,
          m = ec().boostItemVisual;
        return (0, t.jsx)(
          eu,
          {
            description:
              s === G.p9.TIER_1
                ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format()
                : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
            onLearnMore: () => {
              r(),
                x.Z.open(Y.oAB.GUILD_BOOSTING),
                k.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "boosts",
                });
            },
            renderVisual: () =>
              c
                ? (0, t.jsx)("div", {
                    className: H.boostCardContainer,
                    children: (0, t.jsxs)("div", {
                      className: H.boostCard,
                      children: [
                        (0, t.jsx)(L.Z, {
                          guild: o,
                          size: L.Z.Sizes.MEDIUM,
                          animate: !n,
                          className: H.boostCardIcon,
                        }),
                        (0, t.jsxs)("div", {
                          className: H.boostCardInfo,
                          children: [
                            (0, t.jsx)(C.Text, {
                              variant: "text-md/normal",
                              className: i()(
                                H.textSingleLineEllipsis,
                                H.boostCardTitle,
                              ),
                              children: o.name,
                            }),
                            (0, t.jsxs)("div", {
                              className: H.boostCardSubtitle,
                              children: [
                                (0, t.jsx)(y.Z, { className: H.boostCardGem }),
                                (0, t.jsx)(C.Text, {
                                  variant: "text-xs/normal",
                                  className: i()(
                                    H.textSingleLineEllipsis,
                                    H.boostCardCount,
                                  ),
                                  children:
                                    K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format(
                                      { boostCount: l },
                                    ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, t.jsx)("img", { alt: "", src: m }),
          },
          "boost-item",
        );
      }
      let eI = () => {
        let e = ec().screenShareItemVisual;
        return (0, t.jsx)(
          eu,
          {
            description:
              K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
            onLearnMore: () => {
              window.open(B.Z.getArticleURL(Y.BhN.STREAM_QUALITY_SETTINGS)),
                k.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "screen_share",
                });
            },
            renderVisual: () => (0, t.jsx)("img", { alt: "", src: e }),
          },
          "screen-share-item",
        );
      };
      function ep(e) {
        let { premiumType: s } = e,
          r = ec().uploadsMessagesItemVisual;
        return (0, t.jsx)(
          eu,
          {
            description:
              s === G.p9.TIER_2
                ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format()
                : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
            onLearnMore: () => {
              window.open(B.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS)),
                k.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "msgs_uploads",
                });
            },
            renderVisual: () => (0, t.jsx)("img", { alt: "", src: r }),
          },
          "uploads-item",
        );
      }
      let ex = (e) => {
        let { country: s } = e,
          r = ec(),
          a = "PL" === s ? r.PL : r.TR;
        return (0, t.jsx)(
          eu,
          {
            description: ("PL" === s
              ? K.Z.Messages
                  .LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK
              : K.Z.Messages
                  .LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK
            ).format(),
            onLearnMore: () => {
              window.open(B.Z.getArticleURL(Y.BhN.LOCALIZED_PRICING)),
                k.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                  action: "grandfathered_prices",
                });
            },
            renderVisual: () => (0, t.jsx)("img", { alt: "", src: a }),
          },
          "grandfathered-prices-item",
        );
      };
      function eE(e) {
        let {
            currentUser: s,
            premiumType: r,
            onClose: n,
            isDowngrade: i = !1,
          } = e,
          o = (0, W.Z)(),
          c = (0, V.U)(),
          u = a.useMemo(() => {
            let e = [];
            switch (
              (c &&
                (l()(
                  null != o,
                  "Subscription billing country should not be null",
                ),
                e.push((0, t.jsx)(ex, { country: o }))),
              r)
            ) {
              case G.p9.TIER_0:
                e.push(
                  (0, t.jsx)(e_, { premiumType: r }),
                  (0, t.jsx)(ep, { premiumType: r }),
                );
                break;
              case G.p9.TIER_1:
                i
                  ? e.push(
                      (0, t.jsx)(ed, {
                        currentUser: s,
                        premiumType: r,
                        onClose: n,
                      }),
                      (0, t.jsx)(eI, {}),
                      (0, t.jsx)(eC, { premiumType: r, onClose: n }),
                    )
                  : e.push(
                      (0, t.jsx)(ed, {
                        currentUser: s,
                        premiumType: r,
                        onClose: n,
                      }),
                      (0, t.jsx)(e_, { premiumType: r }),
                      (0, t.jsx)(eI, {}),
                      (0, t.jsx)(ep, { premiumType: r }),
                      (0, t.jsx)(eC, { premiumType: r, onClose: n }),
                    );
                break;
              case G.p9.TIER_2:
                i
                  ? e.push(
                      (0, t.jsx)(ed, {
                        currentUser: s,
                        premiumType: r,
                        onClose: n,
                      }),
                      (0, t.jsx)(eC, { premiumType: r, onClose: n }),
                      (0, t.jsx)(eI, {}),
                    )
                  : e.push(
                      (0, t.jsx)(ed, {
                        currentUser: s,
                        premiumType: r,
                        onClose: n,
                      }),
                      (0, t.jsx)(e_, { premiumType: r }),
                      (0, t.jsx)(eC, { premiumType: r, onClose: n }),
                      (0, t.jsx)(eI, {}),
                      (0, t.jsx)(ep, { premiumType: r }),
                    );
            }
            return e;
          }, [r, s, n, i, c, o]);
        return (0, t.jsx)("div", {
          className: H.whatYouLoseItemContainer,
          children: u,
        });
      }
      s.Z = function (e) {
        let {
            premiumType: s,
            titleText: r,
            subtitleText: n,
            footer: i,
            onClose: o,
            onDiscountClaim: c,
            onContinue: u,
            analyticsLocations: m,
            isLoading: _ = !1,
            churnUserDiscountOffer: I = null,
            isDowngrade: p = !1,
            subtitleIcon: x,
            subtitleClassName: E,
          } = e,
          N = (0, d.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return (
              l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
            );
          });
        a.useEffect(() => {
          (0, S.Z)(N.id, N.getAvatarURL(null, 80));
        }, [N]);
        let f = null != I && !_;
        return (a.useEffect(() => {
          f &&
            k.default.track(
              Y.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED,
              {
                location_stack: m,
                discount_id: null == I ? void 0 : I.discount_id,
              },
            );
        }, [f, m, I]),
        _)
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(F.Z, { premiumType: s, onClose: o }),
                (0, t.jsx)(C.ModalContent, {
                  className: H.body,
                  children: (0, t.jsx)(C.Spinner, { className: H.spinner }),
                }),
              ],
            })
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(F.Z, { premiumType: s, onClose: o }),
                (0, t.jsxs)(C.ModalContent, {
                  className: H.body,
                  children: [
                    (0, t.jsx)(h.Z, {
                      size: h.Z.Sizes.SIZE_24,
                      className: H.title,
                      children: r,
                    }),
                    (0, t.jsxs)("div", {
                      className: E,
                      children: [
                        x,
                        (0, t.jsx)(C.Text, {
                          variant: "text-md/normal",
                          className: H.subtitle,
                          children: n,
                        }),
                      ],
                    }),
                    (0, t.jsx)(eE, {
                      currentUser: N,
                      premiumType: s,
                      onClose: o,
                      isDowngrade: p,
                    }),
                  ],
                }),
                !f && (0, t.jsx)(C.ModalFooter, { children: i }),
                f &&
                  (0, t.jsx)(D.Z, {
                    churnUserDiscountOffer: I,
                    onDiscountClaim: c,
                    onContinue: u,
                  }),
              ],
            });
      };
    },
  },
]);
//# sourceMappingURL=53ebea3dda657c9b7ac2.js.map
