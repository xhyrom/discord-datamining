"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19780"],
  {
    504983: function (e, r, t) {
      t.d(r, {
        Y: function () {
          return o;
        },
      });
      var n,
        o,
        a = t(735250),
        i = t(470079),
        f = t(120356),
        d = t.n(f),
        c = t(261842);
      ((n = o || (o = {})).PREMIUM = "premium"), (n.LIMITED = "limited");
      let s = {
        premium: {
          border: c.premiumFeatureBorder,
          background: c.premiumBackground,
        },
        limited: {
          border: c.limitedFeatureBorder,
          background: c.limitedBackground,
        },
      };
      r.Z = i.forwardRef(function (e, r) {
        let {
          children: t,
          type: n = "premium",
          isShown: o,
          hasBackground: i = !1,
          className: f,
          backgroundClassName: u,
        } = e;
        if (!o) return (0, a.jsx)(a.Fragment, { children: t });
        let { border: l, background: _ } = s[n];
        return (0, a.jsx)("div", {
          ref: r,
          className: d()(l, f),
          children: (0, a.jsx)("div", {
            className: d()(i ? _ : c.background, u),
            children: t,
          }),
        });
      });
    },
    911367: function (e, r, t) {
      t.d(r, {
        t: function () {
          return a;
        },
      });
      var n = t(470079),
        o = t(365943);
      function a() {
        n.useEffect(() => {
          (0, o.z)();
        }, []);
      }
    },
    93127: function (e, r, t) {
      t.d(r, {
        W: function () {
          return c;
        },
        _: function () {
          return s;
        },
      });
      var n = t(544891),
        o = t(570140),
        a = t(480294),
        i = t(814443),
        f = t(428598),
        d = t(981631);
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return i.Z.needsRefresh()
          ? (o.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            n.tn
              .get({
                url: d.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: r } = e;
                  o.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: r,
                  });
                },
                () => {
                  o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function s() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return f.Z.shouldFetch() && a.Z.hasConsented(d.pjP.PERSONALIZATION)
          ? (o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            n.tn
              .get({
                url: d.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: r } = e;
                  o.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: r.user_affinities.map((e) => {
                      var r, t, n, o, a, i, f, d;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (r = e.dm_probability) && void 0 !== r
                            ? r
                            : 0,
                        dmRank:
                          null !== (t = e.dm_rank) && void 0 !== t ? t : 0,
                        vcProbability:
                          null !== (n = e.vc_probability) && void 0 !== n
                            ? n
                            : 0,
                        vcRank:
                          null !== (o = e.vc_rank) && void 0 !== o ? o : 0,
                        serverMessageProbability:
                          null !== (a = e.server_message_probability) &&
                          void 0 !== a
                            ? a
                            : 0,
                        serverMessageRank:
                          null !== (i = e.server_message_rank) && void 0 !== i
                            ? i
                            : 0,
                        communicationProbability:
                          null !== (f = e.communication_probability) &&
                          void 0 !== f
                            ? f
                            : 0,
                        communicationRank:
                          null !== (d = e.communication_rank) && void 0 !== d
                            ? d
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, r, t) {
      t.d(r, {
        K: function () {
          return n;
        },
      });
      let n = t(70956).Z.Millis.DAY;
    },
    428598: function (e, r, t) {
      let n;
      t(47120);
      var o,
        a = t(442837),
        i = t(570140),
        f = t(699516),
        d = t(496232);
      function c(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      let s = !1,
        u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        l = { ...u };
      function _() {
        n = new Map(
          l.userAffinities
            .filter((e) => !f.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class b extends (o = a.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(f.Z),
            null != e &&
              ((l.userAffinities = e.userAffinities),
              (l.lastFetched = e.lastFetched),
              _()),
            this.syncWith([f.Z], _);
        }
        shouldFetch() {
          if (!s) return Date.now() - l.lastFetched > d.K;
        }
        isFetching() {
          return s;
        }
        getUserAffinities() {
          return l.userAffinities;
        }
        getUserAffinity(e) {
          return n.get(e);
        }
        getState() {
          return l;
        }
      }
      c(b, "displayName", "UserAffinitiesStoreV2"),
        c(b, "persistKey", "UserAffinitiesStoreV2"),
        (r.Z = new b(i.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            s = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: r } = e;
            (l.lastFetched = Date.now()), (s = !1), (l.userAffinities = r), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            s = !1;
          },
          LOGOUT: function () {
            (l = { ...u }), (n = new Map()), (s = !1);
          },
        }));
    },
    841261: function (e, r, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    943981: function (e, r, t) {
      e.exports = {
        container: "container_f1f9c9",
        header: "header_f1f9c9",
        description: "description_f1f9c9",
        splashImage: "splashImage_f1f9c9",
        settings: "settings_f1f9c9",
        modal: "modal_f1f9c9",
        blockedPaymentsModalHeader: "blockedPaymentsModalHeader_f1f9c9",
        blockedPaymentsModalContent: "blockedPaymentsModalContent_f1f9c9",
        blockedPaymentsWarningIcon: "blockedPaymentsWarningIcon_f1f9c9",
        blockedPaymentsWarning: "blockedPaymentsWarning_f1f9c9",
      };
    },
    404934: function (e, r, t) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    524254: function (e, r, t) {
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
        giftCodeSection: "giftCodeSection_c9a9bf",
      };
    },
    744078: function (e, r, t) {
      e.exports = { halloweenFooter: "halloweenFooter_c1dc14" };
    },
    677825: function (e, r, t) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    920667: function (e, r, t) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    577581: function (e, r, t) {
      e.exports = {
        planSelectSeparatorUpper: "planSelectSeparatorUpper_d9d258",
        planSelectSeparatorLower: "planSelectSeparatorLower_d9d258",
        nitroweenFooterBanner: "nitroweenFooterBanner_d9d258",
      };
    },
    885032: function (e, r, t) {
      e.exports = {
        legacyPricingNotice: "legacyPricingNotice_f92df2",
        skuSelectModalHeader: "skuSelectModalHeader_f92df2",
        skuSelectModalContent: "skuSelectModalContent_f92df2",
        modalPadding: "modalPadding_f92df2",
      };
    },
    117787: function (e, r, t) {
      e.exports = {
        whatYouLoseButtonContainer: "whatYouLoseButtonContainer_a3f464",
      };
    },
    92783: function (e, r, t) {
      e.exports = {
        churnFooterContainer: "churnFooterContainer_a5ba39",
        churnFooterGlow: "churnFooterGlow_a5ba39",
        churnFooterTopBorder: "churnFooterTopBorder_a5ba39",
        churnFooterContent: "churnFooterContent_a5ba39",
        churnFooterContentBody: "churnFooterContentBody_a5ba39",
        churnFooterIcon: "churnFooterIcon_a5ba39",
        churnFooterContentBodyInner: "churnFooterContentBodyInner_a5ba39",
        churnFooterCopy: "churnFooterCopy_a5ba39",
        churnFooterCTAs: "churnFooterCTAs_a5ba39",
        churnFooterClaimCTA: "churnFooterClaimCTA_a5ba39",
        churnFooterClaimCTAInner: "churnFooterClaimCTAInner_a5ba39",
        churnFooterClaimIcon: "churnFooterClaimIcon_a5ba39",
        churnFooterClaimCopy: "churnFooterClaimCopy_a5ba39",
      };
    },
    83615: function (e, r, t) {
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
    324415: function (e, r, t) {
      e.exports = {
        headerBackground: "headerBackground_af10a6",
        tier2HeaderBackground:
          "tier2HeaderBackground_af10a6 headerBackground_af10a6",
        tier2HeaderBackgroundWinterTheme:
          "tier2HeaderBackgroundWinterTheme_af10a6 headerBackground_af10a6",
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
    896243: function (e, r, t) {
      e.exports = {
        body: "body_f4a859",
        title: "title_f4a859",
        subtitle: "subtitle_f4a859",
        whatYouLoseItemContainer: "whatYouLoseItemContainer_f4a859",
        whatYouLoseItem: "whatYouLoseItem_f4a859",
        whatYouLoseItemLeftColumn: "whatYouLoseItemLeftColumn_f4a859",
        whatYouLoseItemLearnMore: "whatYouLoseItemLearnMore_f4a859",
        whatYouLoseItemRightColumn: "whatYouLoseItemRightColumn_f4a859",
        textSingleLineEllipsis: "textSingleLineEllipsis_f4a859",
        profileCard: "profileCard_f4a859",
        profileCardTier1: "profileCardTier1_f4a859 profileCard_f4a859",
        profileAvatar: "profileAvatar_f4a859",
        profileAvatarTier1: "profileAvatarTier1_f4a859",
        profileInner: "profileInner_f4a859",
        profileUserInfo: "profileUserInfo_f4a859",
        profileUserInfoTier1: "profileUserInfoTier1_f4a859",
        profileNameTag: "profileNameTag_f4a859",
        profileNameTagUsername: "profileNameTagUsername_f4a859",
        profilePremiumIcon: "profilePremiumIcon_f4a859",
        emojiStickersPersonalizedContainer:
          "emojiStickersPersonalizedContainer_f4a859",
        personalizedEmoji: "personalizedEmoji_f4a859",
        boostCardContainer: "boostCardContainer_f4a859",
        boostCard: "boostCard_f4a859",
        boostCardIcon: "boostCardIcon_f4a859",
        boostCardInfo: "boostCardInfo_f4a859",
        boostCardTitle: "boostCardTitle_f4a859",
        boostCardSubtitle: "boostCardSubtitle_f4a859",
        boostCardGem: "boostCardGem_f4a859",
        boostCardCount: "boostCardCount_f4a859",
        nonPersonalizedGraphic: "nonPersonalizedGraphic_f4a859",
        spinner: "spinner_f4a859",
      };
    },
    103581: function (e, r, t) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    279521: function (e, r, t) {
      e.exports = {
        attributionBannerContainer: "attributionBannerContainer_d06fdd",
        avatarContainer: "avatarContainer_d06fdd",
        bannerHeader: "bannerHeader_d06fdd",
        bannerIcon: "bannerIcon_d06fdd",
      };
    },
    377628: function (e, r, t) {
      e.exports = {
        tier2MarketingCard: "tier2MarketingCard_eabbe0",
        tier0MarketingCard: "tier0MarketingCard_eabbe0",
      };
    },
    251300: function (e, r, t) {
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
    977885: function (e, r, t) {
      e.exports = {
        confirmation: "confirmation_be28dd",
        banner: "banner_be28dd",
        text: "text_be28dd",
        redirectConfirmation: "redirectConfirmation_be28dd",
        redirectBody: "redirectBody_be28dd",
      };
    },
    261842: function (e, r, t) {
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
  },
]);
//# sourceMappingURL=006b38f2a4e0080b7d47.js.map
