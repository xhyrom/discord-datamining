"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33869"],
  {
    123353: function (e) {
      e.exports = "/assets/f149df20b772b40f618a.svg";
    },
    108989: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        o = n(887024);
      let i = [n(123353)],
        c = ["#FFFFFF"],
        d = 1e3 / 60,
        f = {
          velocity: {
            type: "static-random",
            minValue: { x: 0, y: 1 },
            maxValue: { x: 3, y: 3 },
          },
          rotation: {
            type: "linear-random",
            minValue: { x: 0, y: 0, z: 0 },
            maxValue: { x: 0, y: 0, z: 360 },
            minAddValue: { x: 0, y: 0, z: -5 },
            maxAddValue: { x: 0, y: 0, z: 5 },
          },
          size: { type: "static-random", minValue: 2, maxValue: 6 },
          dragCoefficient: { type: "static", value: { x: 0.05, y: 0.05 } },
          opacity: { type: "static", value: 0.3 },
        };
      function s(e) {
        let {
            className: t,
            firing: n = !0,
            wind: s = 2,
            sprites: u = i,
            spriteColors: l = c,
            confettiConfig: _,
          } = e,
          [p, b] = a.useState(null),
          [m, h] = a.useState(null),
          g = (0, o.uR)(m, p),
          C = a.useMemo(() => new o.qA({ wind: s }), [s]),
          I = a.useCallback(() => {
            let e = null == m ? void 0 : m.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            g.createConfetti({
              ...f,
              ..._,
              position: {
                type: "static-random",
                minValue: { x: -t.width / 2, y: -6 },
                maxValue: { x: t.width, y: -6 },
              },
            });
          }, [g, m, _]);
        return (
          a.useEffect(() => {
            let e = n ? setInterval(I, d) : null;
            return () => clearInterval(e);
          }, [n, I]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(o.O_, { ref: h, className: t, environment: C }),
              (0, r.jsx)(o.Ji, {
                ref: b,
                colors: l,
                sprites: u,
                spriteWidth: 6,
                spriteHeight: 6,
              }),
            ],
          })
        );
      }
    },
    504983: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return a;
        },
      });
      var r,
        a,
        o = n(735250),
        i = n(470079),
        c = n(120356),
        d = n.n(c),
        f = n(261842);
      ((r = a || (a = {})).PREMIUM = "premium"), (r.LIMITED = "limited");
      let s = {
        premium: {
          border: f.premiumFeatureBorder,
          background: f.premiumBackground,
        },
        limited: {
          border: f.limitedFeatureBorder,
          background: f.limitedBackground,
        },
      };
      t.Z = i.forwardRef(function (e, t) {
        let {
          children: n,
          type: r = "premium",
          isShown: a,
          hasBackground: i = !1,
          className: c,
          backgroundClassName: u,
        } = e;
        if (!a) return (0, o.jsx)(o.Fragment, { children: n });
        let { border: l, background: _ } = s[r];
        return (0, o.jsx)("div", {
          ref: t,
          className: d()(l, c),
          children: (0, o.jsx)("div", {
            className: d()(i ? _ : f.background, u),
            children: n,
          }),
        });
      });
    },
    911367: function (e, t, n) {
      n.d(t, {
        t: function () {
          return o;
        },
      });
      var r = n(470079),
        a = n(365943);
      function o() {
        r.useEffect(() => {
          (0, a.z)();
        }, []);
      }
    },
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return f;
        },
        _: function () {
          return s;
        },
      });
      var r = n(544891),
        a = n(570140),
        o = n(480294),
        i = n(814443),
        c = n(428598),
        d = n(981631);
      function f() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return i.Z.needsRefresh()
          ? (a.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            r.tn
              .get({
                url: d.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  a.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  a.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function s() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return c.Z.shouldFetch() && o.Z.hasConsented(d.pjP.PERSONALIZATION)
          ? (a.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            r.tn
              .get({
                url: d.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  a.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, r, a, o, i, c, d;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (t = e.dm_probability) && void 0 !== t
                            ? t
                            : 0,
                        dmRank:
                          null !== (n = e.dm_rank) && void 0 !== n ? n : 0,
                        vcProbability:
                          null !== (r = e.vc_probability) && void 0 !== r
                            ? r
                            : 0,
                        vcRank:
                          null !== (a = e.vc_rank) && void 0 !== a ? a : 0,
                        serverMessageProbability:
                          null !== (o = e.server_message_probability) &&
                          void 0 !== o
                            ? o
                            : 0,
                        serverMessageRank:
                          null !== (i = e.server_message_rank) && void 0 !== i
                            ? i
                            : 0,
                        communicationProbability:
                          null !== (c = e.communication_probability) &&
                          void 0 !== c
                            ? c
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
                  a.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, t, n) {
      n.d(t, {
        K: function () {
          return r;
        },
      });
      let r = n(70956).Z.Millis.DAY;
    },
    428598: function (e, t, n) {
      let r;
      n(47120);
      var a,
        o = n(442837),
        i = n(570140),
        c = n(699516),
        d = n(496232);
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let s = !1,
        u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        l = { ...u };
      function _() {
        r = new Map(
          l.userAffinities
            .filter((e) => !c.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class p extends (a = o.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(c.Z),
            null != e &&
              ((l.userAffinities = e.userAffinities),
              (l.lastFetched = e.lastFetched),
              _()),
            this.syncWith([c.Z], _);
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
          return r.get(e);
        }
        getState() {
          return l;
        }
      }
      f(p, "displayName", "UserAffinitiesStoreV2"),
        f(p, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new p(i.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            s = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (l.lastFetched = Date.now()), (s = !1), (l.userAffinities = t), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            s = !1;
          },
          LOGOUT: function () {
            (l = { ...u }), (r = new Map()), (s = !1);
          },
        }));
    },
    850840: function (e, t, n) {
      let r;
      n(653041);
      var a,
        o = n(442837),
        i = n(570140);
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let d = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class f extends (a = o.ZP.PersistedStore) {
        initialize(e) {
          r = null != e ? e : d;
        }
        getState() {
          return r;
        }
        get hasAcceptedStoreTerms() {
          return r.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return r.hasAcceptedEulaIds.includes(e);
        }
      }
      c(f, "displayName", "ApplicationStoreUserSettingsStore"),
        c(f, "persistKey", "ApplicationStoreUserSettingsStore"),
        c(f, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (t.Z = new f(i.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            r.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (r.hasAcceptedEulaIds.includes(t)) return !1;
            r.hasAcceptedEulaIds.push(t);
          },
        }));
    },
    841261: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    943981: function (e, t, n) {
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
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    524254: function (e, t, n) {
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
    744078: function (e, t, n) {
      e.exports = { halloweenFooter: "halloweenFooter_c1dc14" };
    },
    677825: function (e, t, n) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    297908: function (e, t, n) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    920667: function (e, t, n) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    638635: function (e, t, n) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    130298: function (e, t, n) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    577581: function (e, t, n) {
      e.exports = {
        planSelectSeparatorUpper: "planSelectSeparatorUpper_d9d258",
        planSelectSeparatorLower: "planSelectSeparatorLower_d9d258",
        nitroweenFooterBanner: "nitroweenFooterBanner_d9d258",
      };
    },
    885032: function (e, t, n) {
      e.exports = {
        legacyPricingNotice: "legacyPricingNotice_f92df2",
        skuSelectModalHeader: "skuSelectModalHeader_f92df2",
        skuSelectModalContent: "skuSelectModalContent_f92df2",
        modalPadding: "modalPadding_f92df2",
      };
    },
    117787: function (e, t, n) {
      e.exports = {
        whatYouLoseButtonContainer: "whatYouLoseButtonContainer_a3f464",
      };
    },
    92783: function (e, t, n) {
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
    83615: function (e, t, n) {
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
    324415: function (e, t, n) {
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
    896243: function (e, t, n) {
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
    103581: function (e, t, n) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    279521: function (e, t, n) {
      e.exports = {
        attributionBannerContainer: "attributionBannerContainer_d06fdd",
        avatarContainer: "avatarContainer_d06fdd",
        bannerHeader: "bannerHeader_d06fdd",
        bannerIcon: "bannerIcon_d06fdd",
      };
    },
    377628: function (e, t, n) {
      e.exports = {
        tier2MarketingCard: "tier2MarketingCard_eabbe0",
        tier0MarketingCard: "tier0MarketingCard_eabbe0",
      };
    },
    251300: function (e, t, n) {
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
    977885: function (e, t, n) {
      e.exports = {
        confirmation: "confirmation_be28dd",
        banner: "banner_be28dd",
        text: "text_be28dd",
        redirectConfirmation: "redirectConfirmation_be28dd",
        redirectBody: "redirectBody_be28dd",
      };
    },
    893896: function (e, t, n) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    622085: function (e, t, n) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    555730: function (e, t, n) {
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
    600699: function (e, t, n) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
    261842: function (e, t, n) {
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
//# sourceMappingURL=9e9fcb108b7441aabc76.js.map
