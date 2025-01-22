"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24539"],
  {
    899667: function (e, t, n) {
      n(47120);
      var o,
        a,
        l,
        r,
        i = n(442837),
        c = n(570140);
      let d = {},
        s = null,
        f = [],
        _ = !1,
        u = !1,
        p = null,
        S = null;
      function C() {
        u = !0;
      }
      class m extends (o = i.ZP.Store) {
        getAppliedGuildBoostsForGuild(e) {
          return null != d[e] ? d[e].subscriptions : null;
        }
        getLastFetchedAtForGuild(e) {
          return null != d[e] ? d[e].lastFetchedAt : null;
        }
        getCurrentUserAppliedBoosts() {
          return f;
        }
        getAppliedGuildBoost(e) {
          return f.find((t) => t.id === e);
        }
        get isModifyingAppliedBoost() {
          return u;
        }
        get applyBoostError() {
          return p;
        }
        get unapplyBoostError() {
          return S;
        }
        get cooldownEndsAt() {
          return s;
        }
        get isFetchingCurrentUserAppliedBoosts() {
          return _;
        }
      }
      (r = "AppliedGuildBoostStore"),
        (l = "displayName") in (a = m)
          ? Object.defineProperty(a, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[l] = r),
        (t.Z = new m(c.Z, {
          GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, appliedBoosts: n } = e;
            d[t] = { subscriptions: n, lastFetchedAt: Date.now() };
          },
          USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: t } = e;
            (_ = !1), (f = t);
          },
          APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: t } = e;
            s = t;
          },
          GUILD_UNAPPLY_BOOST_START: C,
          GUILD_APPLY_BOOST_START: C,
          GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: t } = e,
              n = new Set(t.map((e) => e.id));
            (f = [...t, ...f.filter((e) => !n.has(e.id))]),
              (p = null),
              (u = !1);
          },
          GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (u = !1), (p = t);
          },
          GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: t } = e;
            (f = f.filter((e) => e.id !== t)), (u = !1);
          },
          GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (u = !1), (S = t);
          },
          USER_APPLIED_BOOSTS_FETCH_START: function () {
            _ = !0;
          },
        }));
    },
    688131: function (e, t, n) {
      e.exports = {
        content: "content_c25a31",
        guildCard: "guildCard_c25a31",
        image: "image_c25a31",
        transferGuildCardHeader: "transferGuildCardHeader_c25a31",
        activeTransferGuildCardBorder: "activeTransferGuildCardBorder_c25a31",
        transferFromGuildCard: "transferFromGuildCard_c25a31",
        transferToGuildCard: "transferToGuildCard_c25a31",
        error: "error_c25a31",
        pendingCancellation: "pendingCancellation_c25a31",
        pendingCancellationIcon: "pendingCancellationIcon_c25a31",
        pendingCancellationMessage: "pendingCancellationMessage_c25a31",
      };
    },
    398087: function (e, t, n) {
      e.exports = {
        modal: "modal_a9236d",
        selectContent: "selectContent_a9236d",
        confirmImage: "confirmImage_a9236d",
        transferConfirmImage: "transferConfirmImage_a9236d",
        quantitySelectorBody: "quantitySelectorBody_a9236d",
        quantitySelectorHeader: "quantitySelectorHeader_a9236d",
        quantitySelectorDescription: "quantitySelectorDescription_a9236d",
        quantitySelectorWrapper: "quantitySelectorWrapper_a9236d",
        quantitySelectorLabel: "quantitySelectorLabel_a9236d",
        modalCloseButton: "modalCloseButton_a9236d",
      };
    },
    362333: function (e, t, n) {
      e.exports = {
        modal: "modal_ac4952",
        modalCloseButton: "modalCloseButton_ac4952",
        modalContent: "modalContent_ac4952",
        selectHeaderContainer: "selectHeaderContainer_ac4952",
        selectHeader: "selectHeader_ac4952",
        selectSearch: "selectSearch_ac4952",
        selectGuild: "selectGuild_ac4952",
        selectGuildIcon: "selectGuildIcon_ac4952",
        selectGuildName: "selectGuildName_ac4952",
        selectGuildLevel: "selectGuildLevel_ac4952",
        selectGuildCopy: "selectGuildCopy_ac4952",
        selectGuildPseudoCta: "selectGuildPseudoCta_ac4952",
        emptyStateWrapper: "emptyStateWrapper_ac4952",
      };
    },
    833887: function (e, t, n) {
      e.exports = {
        bodyText: "bodyText_f875f7",
        planSelectText: "planSelectText_f875f7",
        planSelectRow: "planSelectRow_f875f7",
        planSelectorWrapper: "planSelectorWrapper_f875f7",
        planSelectorLabel: "planSelectorLabel_f875f7",
        planSelectorPreviewPrice: "planSelectorPreviewPrice_f875f7",
        planSelectDivider: "planSelectDivider_f875f7",
        planSelectorSubtotal: "planSelectorSubtotal_f875f7",
        paymentSourceWrapper: "paymentSourceWrapper_f875f7",
        confirmationContainer: "confirmationContainer_f875f7",
        confirmationAnimation: "confirmationAnimation_f875f7",
        confirmationUpgradedBanner: "confirmationUpgradedBanner_f875f7",
        confirmationText: "confirmationText_f875f7",
        existingSlotNotice: "existingSlotNotice_f875f7",
        existingSlotIcon: "existingSlotIcon_f875f7",
        existingSlotTooltipWarningIcon: "existingSlotTooltipWarningIcon_f875f7",
        loadingSpinner: "loadingSpinner_f875f7",
        reverseTrialContextInfoDivider: "reverseTrialContextInfoDivider_f875f7",
        reverseTrialContextText: "reverseTrialContextText_f875f7",
        reverseTrialContextMarginBottom:
          "reverseTrialContextMarginBottom_f875f7",
      };
    },
    701519: function (e, t, n) {
      e.exports = {
        subscription: "subscription_cf84f3",
        subscriptionInfo: "subscriptionInfo_cf84f3",
        tierInfo: "tierInfo_cf84f3",
        tierPill: "tierPill_cf84f3",
        tierPillStar: "tierPillStar_cf84f3",
        guildName: "guildName_cf84f3",
        levelDownIcon: "levelDownIcon_cf84f3 levelIcon_cf84f3",
        levelUpIcon: "levelUpIcon_cf84f3 levelIcon_cf84f3",
        tierPillGem: "tierPillGem_cf84f3",
      };
    },
    99182: function (e, t, n) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    66294: function (e, t, n) {
      e.exports = {
        upsellFooter: "upsellFooter_a26a1a",
        upsellFooterIcon: "upsellFooterIcon_a26a1a",
        reverseTrialUpsellContainer: "reverseTrialUpsellContainer_a26a1a",
        unlockIcon: "unlockIcon_a26a1a",
        upsellText: "upsellText_a26a1a",
      };
    },
  },
]);
//# sourceMappingURL=f0e7539cf4c03023977c.js.map
