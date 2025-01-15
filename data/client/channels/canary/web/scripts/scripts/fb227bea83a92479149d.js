"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90082"],
  {
    680674: function (e) {
      e.exports = "/assets/909be7d32b69d07611e7.svg";
    },
    269128: function (e, t, o) {
      var r = o(200651);
      o(192379);
      var n = o(120356),
        i = o.n(n),
        a = o(772848),
        s = o(716886);
      let l = (0, a.Z)();
      t.Z = (e) => {
        let { open: t, className: o, withHighlight: n = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: i()(s.button, o, { [s.open]: t, [s.withHighlight]: n }),
          children: [
            n &&
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: l,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, r.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, r.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, r.jsx)("path", {
                  stroke: n ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  stroke: n ? "url(#".concat(l, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    700582: function (e, t, o) {
      var r = o(200651),
        n = o(192379),
        i = o(481060),
        a = o(372900);
      t.Z = n.memo(function (e) {
        var t, o, s, l;
        let {
            user: d,
            size: c = i.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": f = !1,
            ..._
          } = e,
          p = n.useContext(a.Z);
        return (0, r.jsx)(i.Avatar, {
          src:
            ((t = d),
            (o = (0, i.getAvatarSize)(c)),
            (s = u),
            (l = p),
            t.getAvatarURL(l, o, s)),
          size: c,
          "aria-label": f ? void 0 : d.username,
          "aria-hidden": f,
          ..._,
        });
      });
    },
    93127: function (e, t, o) {
      o.d(t, {
        W: function () {
          return d;
        },
        _: function () {
          return c;
        },
      });
      var r = o(544891),
        n = o(570140),
        i = o(480294),
        a = o(814443),
        s = o(428598),
        l = o(981631);
      function d() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.needsRefresh()
          ? (n.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            r.tn
              .get({
                url: l.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  n.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  n.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return s.Z.shouldFetch() && i.Z.hasConsented(l.pjP.PERSONALIZATION)
          ? (n.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            r.tn
              .get({
                url: l.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  n.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, o, r, n, i, a, s, l;
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
                          null !== (o = e.dm_rank) && void 0 !== o ? o : 0,
                        vcProbability:
                          null !== (r = e.vc_probability) && void 0 !== r
                            ? r
                            : 0,
                        vcRank:
                          null !== (n = e.vc_rank) && void 0 !== n ? n : 0,
                        serverMessageProbability:
                          null !== (i = e.server_message_probability) &&
                          void 0 !== i
                            ? i
                            : 0,
                        serverMessageRank:
                          null !== (a = e.server_message_rank) && void 0 !== a
                            ? a
                            : 0,
                        communicationProbability:
                          null !== (s = e.communication_probability) &&
                          void 0 !== s
                            ? s
                            : 0,
                        communicationRank:
                          null !== (l = e.communication_rank) && void 0 !== l
                            ? l
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  n.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, t, o) {
      o.d(t, {
        K: function () {
          return r;
        },
      });
      let r = o(70956).Z.Millis.DAY;
    },
    428598: function (e, t, o) {
      o(47120);
      var r,
        n = o(442837),
        i = o(570140),
        a = o(699516),
        s = o(496232);
      function l(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      let d = new Map(),
        c = !1,
        u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...u };
      function _() {
        d = new Map(
          f.userAffinities
            .filter((e) => !a.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class p extends (r = n.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(a.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
              _()),
            this.syncWith([a.Z], _);
        }
        shouldFetch() {
          if (!c) return Date.now() - f.lastFetched > s.K;
        }
        isFetching() {
          return c;
        }
        getUserAffinities() {
          return f.userAffinities;
        }
        getUserAffinitiesMap() {
          return d;
        }
        compare(e, t) {
          var o, r, n, i;
          return (
            (null !==
              (n =
                null === (o = d.get(t)) || void 0 === o
                  ? void 0
                  : o.communicationProbability) && void 0 !== n
              ? n
              : 0) -
            (null !==
              (i =
                null === (r = d.get(e)) || void 0 === r
                  ? void 0
                  : r.communicationProbability) && void 0 !== i
              ? i
              : 0)
          );
        }
        getUserAffinity(e) {
          return d.get(e);
        }
        getState() {
          return f;
        }
      }
      l(p, "displayName", "UserAffinitiesStoreV2"),
        l(p, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new p(i.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (f.lastFetched = Date.now()), (c = !1), (f.userAffinities = t), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (f = { ...u }), (d = new Map()), (c = !1);
          },
        }));
    },
    4912: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = o(200651);
      o(192379);
      var n = o(331595);
      function i(e) {
        let {
          width: t = 14,
          height: o = 14,
          color: i = "currentColor",
          foreground: a,
          ...s
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, n.Z)(s),
          width: t,
          height: o,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
            className: a,
            fill: i,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    716886: function (e, t, o) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    660841: function (e, t, o) {
      e.exports = { promotionalFooter: "promotionalFooter_aedfbb" };
    },
    205167: function (e, t, o) {
      e.exports = {
        upsellContainer: "upsellContainer_e9d8d5",
        interactable: "interactable_e9d8d5",
        tooltip: "tooltip_e9d8d5",
        tooltipTail: "tooltipTail_e9d8d5",
        tier0Card: "tier0Card_e9d8d5",
      };
    },
    135802: function (e, t, o) {
      e.exports = {
        bodyColumnLeft: "bodyColumnLeft_b4a676",
        bodyColumnRight: "bodyColumnRight_b4a676",
        stepBodySkuSelect: "stepBodySkuSelect_b4a676",
        header: "header_b4a676",
        giftSelectItem: "giftSelectItem_b4a676",
        modalFooter: "modalFooter_b4a676",
        closeButton: "closeButton_b4a676",
        container: "container_b4a676",
      };
    },
    471370: function (e, t, o) {
      e.exports = {
        planSelectSeparatorUpper: "planSelectSeparatorUpper_d9d258",
        planSelectSeparatorLower: "planSelectSeparatorLower_d9d258",
      };
    },
    304375: function (e, t, o) {
      e.exports = {
        legacyPricingNotice: "legacyPricingNotice_f92df2",
        skuSelectModalHeader: "skuSelectModalHeader_f92df2",
        skuSelectModalContent: "skuSelectModalContent_f92df2",
        modalPadding: "modalPadding_f92df2",
      };
    },
    121322: function (e, t, o) {
      e.exports = {
        whatYouLoseButtonContainer: "whatYouLoseButtonContainer_a3f464",
      };
    },
    314245: function (e, t, o) {
      e.exports = {
        promotionalFooterBanner: "promotionalFooterBanner_fd840c",
        promotionalAvatars: "promotionalAvatars_fd840c",
        bannerText: "bannerText_fd840c",
      };
    },
    20640: function (e, t, o) {
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
    801617: function (e, t, o) {
      e.exports = {
        wrapper: "wrapper_e45025",
        content: "content_e45025",
        initialGlowUp: "initialGlowUp_e45025",
        initialGlowDown: "initialGlowDown_e45025",
        contentGlow: "contentGlow_e45025",
        innerContent: "innerContent_e45025",
        image: "image_e45025",
        imageWrapper: "imageWrapper_e45025",
        imageHover: "imageHover_e45025",
        heading: "heading_e45025",
        buttonWrapper: "buttonWrapper_e45025",
        button: "button_e45025",
        buttonInner: "buttonInner_e45025",
        buttonNitroIcon: "buttonNitroIcon_e45025",
        closeButtonWrapper: "closeButtonWrapper_e45025",
        closeButton: "closeButton_e45025",
        nitroBasic: "nitroBasic_e45025",
      };
    },
    723813: function (e, t, o) {
      e.exports = {
        noticeBar: "noticeBar_ed4be0",
        slideIn: "slideIn_ed4be0",
        slideOut: "slideOut_ed4be0",
      };
    },
    667486: function (e, t, o) {
      e.exports = {
        body: "body_f4a859",
        title: "title_f4a859",
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
    665167: function (e, t, o) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    862013: function (e, t, o) {
      e.exports = {
        attributionBannerContainer: "attributionBannerContainer_d06fdd",
        avatarContainer: "avatarContainer_d06fdd",
        bannerHeader: "bannerHeader_d06fdd",
        bannerIcon: "bannerIcon_d06fdd",
      };
    },
    270098: function (e, t, o) {
      e.exports = {
        tier2MarketingCard: "tier2MarketingCard_eabbe0",
        tier0MarketingCard: "tier0MarketingCard_eabbe0",
      };
    },
    11843: function (e, t, o) {
      e.exports = {
        confirmation: "confirmation_be28dd",
        banner: "banner_be28dd",
        text: "text_be28dd",
        redirectConfirmation: "redirectConfirmation_be28dd",
        redirectBody: "redirectBody_be28dd",
      };
    },
  },
]);
//# sourceMappingURL=fb227bea83a92479149d.js.map
