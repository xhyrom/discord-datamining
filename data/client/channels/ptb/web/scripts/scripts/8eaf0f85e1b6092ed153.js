"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42759"],
  {
    269128: function (e, o, t) {
      var r = t(200651);
      t(192379);
      var n = t(120356),
        a = t.n(n),
        i = t(772848),
        s = t(363969);
      let l = (0, i.Z)();
      o.Z = (e) => {
        let { open: o, className: t, withHighlight: n = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: a()(s.button, t, { [s.open]: o, [s.withHighlight]: n }),
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
    700582: function (e, o, t) {
      var r = t(200651),
        n = t(192379),
        a = t(481060),
        i = t(372900);
      o.Z = n.memo(function (e) {
        var o, t, s, l;
        let {
            user: d,
            size: c = a.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": f = !1,
            ..._
          } = e,
          h = n.useContext(i.Z);
        return (0, r.jsx)(a.Avatar, {
          src:
            ((o = d),
            (t = (0, a.getAvatarSize)(c)),
            (s = u),
            (l = h),
            o.getAvatarURL(l, t, s)),
          size: c,
          "aria-label": f ? void 0 : d.username,
          "aria-hidden": f,
          ..._,
        });
      });
    },
    93127: function (e, o, t) {
      t.d(o, {
        W: function () {
          return d;
        },
        _: function () {
          return c;
        },
      });
      var r = t(544891),
        n = t(570140),
        a = t(480294),
        i = t(814443),
        s = t(428598),
        l = t(981631);
      function d() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return i.Z.needsRefresh()
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
                  let { body: o } = e;
                  n.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: o,
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
        return s.Z.shouldFetch() && a.Z.hasConsented(l.pjP.PERSONALIZATION)
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
                  let { body: o } = e;
                  n.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: o.user_affinities.map((e) => {
                      var o, t, r, n, a, i, s, l;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (o = e.dm_probability) && void 0 !== o
                            ? o
                            : 0,
                        dmRank:
                          null !== (t = e.dm_rank) && void 0 !== t ? t : 0,
                        vcProbability:
                          null !== (r = e.vc_probability) && void 0 !== r
                            ? r
                            : 0,
                        vcRank:
                          null !== (n = e.vc_rank) && void 0 !== n ? n : 0,
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
    496232: function (e, o, t) {
      t.d(o, {
        K: function () {
          return r;
        },
      });
      let r = t(70956).Z.Millis.DAY;
    },
    428598: function (e, o, t) {
      t(47120);
      var r,
        n = t(442837),
        a = t(570140),
        i = t(699516),
        s = t(496232);
      function l(e, o, t) {
        return (
          o in e
            ? Object.defineProperty(e, o, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[o] = t),
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
            .filter((e) => !i.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class h extends (r = n.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(i.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
              _()),
            this.syncWith([i.Z], _);
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
        compare(e, o) {
          var t, r, n, a;
          return (
            (null !==
              (n =
                null === (t = d.get(o)) || void 0 === t
                  ? void 0
                  : t.communicationProbability) && void 0 !== n
              ? n
              : 0) -
            (null !==
              (a =
                null === (r = d.get(e)) || void 0 === r
                  ? void 0
                  : r.communicationProbability) && void 0 !== a
              ? a
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
      l(h, "displayName", "UserAffinitiesStoreV2"),
        l(h, "persistKey", "UserAffinitiesStoreV2"),
        (o.Z = new h(a.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: o } = e;
            (f.lastFetched = Date.now()), (c = !1), (f.userAffinities = o), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (f = { ...u }), (d = new Map()), (c = !1);
          },
        }));
    },
    4912: function (e, o, t) {
      t.d(o, {
        Z: function () {
          return a;
        },
      });
      var r = t(200651);
      t(192379);
      var n = t(325767);
      function a(e) {
        let {
          width: o = 14,
          height: t = 14,
          color: a = "currentColor",
          foreground: i,
          ...s
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, n.Z)(s),
          width: o,
          height: t,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
            className: i,
            fill: a,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    363969: function (e, o, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    956247: function (e, o, t) {
      e.exports = { halloweenFooter: "halloweenFooter_c1dc14" };
    },
    732721: function (e, o, t) {
      e.exports = {
        bodyColumnLeft: "bodyColumnLeft_b4a676",
        bodyColumnRight: "bodyColumnRight_b4a676",
        stepBodySkuSelect: "stepBodySkuSelect_b4a676",
        header: "header_b4a676",
        giftSelectItem: "giftSelectItem_b4a676",
        modalFooter: "modalFooter_b4a676",
        closeButton: "closeButton_b4a676",
      };
    },
    242582: function (e, o, t) {
      e.exports = {
        planSelectSeparatorUpper: "planSelectSeparatorUpper_d9d258",
        planSelectSeparatorLower: "planSelectSeparatorLower_d9d258",
      };
    },
    82227: function (e, o, t) {
      e.exports = {
        legacyPricingNotice: "legacyPricingNotice_f92df2",
        skuSelectModalHeader: "skuSelectModalHeader_f92df2",
        skuSelectModalContent: "skuSelectModalContent_f92df2",
        modalPadding: "modalPadding_f92df2",
      };
    },
    475536: function (e, o, t) {
      e.exports = {
        whatYouLoseButtonContainer: "whatYouLoseButtonContainer_a3f464",
      };
    },
    235665: function (e, o, t) {
      e.exports = {
        promotionalFooterBanner: "promotionalFooterBanner_fd840c",
        promotionalAvatars: "promotionalAvatars_fd840c",
      };
    },
    534293: function (e, o, t) {
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
    402572: function (e, o, t) {
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
    99182: function (e, o, t) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    684315: function (e, o, t) {
      e.exports = {
        attributionBannerContainer: "attributionBannerContainer_d06fdd",
        avatarContainer: "avatarContainer_d06fdd",
        bannerHeader: "bannerHeader_d06fdd",
        bannerIcon: "bannerIcon_d06fdd",
      };
    },
    101098: function (e, o, t) {
      e.exports = {
        tier2MarketingCard: "tier2MarketingCard_eabbe0",
        tier0MarketingCard: "tier0MarketingCard_eabbe0",
      };
    },
    307862: function (e, o, t) {
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
//# sourceMappingURL=8eaf0f85e1b6092ed153.js.map
