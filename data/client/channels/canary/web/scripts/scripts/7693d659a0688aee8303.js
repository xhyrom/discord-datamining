"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1989"],
  {
    88658: function (e, n, t) {
      t.d(n, {
        $6: function () {
          return C;
        },
        YK: function () {
          return u;
        },
        _o: function () {
          return _;
        },
        ac: function () {
          return p;
        },
        bL: function () {
          return m;
        },
        g0: function () {
          return i;
        },
        gl: function () {
          return g;
        },
        rr: function () {
          return b;
        },
        xH: function () {
          return f;
        },
      });
      var o,
        i,
        a = t(695346),
        r = t(486472),
        c = t(430824);
      t(626135);
      var l = t(981631),
        d = t(388032);
      let s = 864e5 * l.eBq;
      function u() {
        let e = a.h2.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != c.Z.getGuild(e))),
          e
        );
      }
      function g() {
        let e = a.zA.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != c.Z.getGuild(e))),
          e
        );
      }
      function _() {
        let e = a.SE.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != c.Z.getGuild(e))),
          e
        );
      }
      function b() {
        let e = a.iH.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != c.Z.getGuild(e))),
          e
        );
      }
      function m(e) {
        return (e & l.HGf) === l.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & l.SOq.MUTUAL_FRIENDS) === l.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & l.SOq.MUTUAL_GUILDS) === l.SOq.MUTUAL_GUILDS,
            };
      }
      function C(e, n) {
        return (
          !n.verified ||
          (null != e && s > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((o = i || (i = {}))[(o.UNDECIDED = 0)] = "UNDECIDED"),
        (o[(o.OPTIN = 1)] = "OPTIN"),
        (o[(o.OPTOUT = 2)] = "OPTOUT");
      let p = { 0: void 0, 1: !0, 2: !1 };
      function f() {
        return [
          {
            name: d.intl.string(d.t["/yLMRU"]),
            desc: d.intl.string(d.t["3fzkPj"]),
            value: 1,
          },
          {
            name: d.intl.string(d.t["21fP2d"]),
            desc: d.intl.string(d.t.ggJ9jY),
            value: 2,
          },
          {
            name: d.intl.string(d.t["OWIo8/"]),
            desc: d.intl.string(d.t.HqYXp6),
            value: 0,
          },
        ];
      }
    },
    343968: function (e, n, t) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    137900: function (e, n, t) {
      e.exports = { button: "button_f23d00" };
    },
    544751: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    333265: function (e, n, t) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    765063: function (e, n, t) {
      t.r(
        (e.exports = {
          standardSidebarView: "standardSidebarView_c25c6d",
          withUpsell: "withUpsell_c25c6d",
          sidebarRegion: "sidebarRegion_c25c6d",
          sidebarRegionScroller: "sidebarRegionScroller_c25c6d",
          sidebar: "sidebar_c25c6d",
          mobileSidebar: "mobileSidebar_c25c6d",
          contentTransitionWrap: "contentTransitionWrap_c25c6d",
          contentRegionScroller: "contentRegionScroller_c25c6d",
          toolsContainer: "toolsContainer_c25c6d",
          tools: "tools_c25c6d",
          contentRegionHiddenSidebar: "contentRegionHiddenSidebar_c25c6d",
          contentRegionShownSidebar: "contentRegionShownSidebar_c25c6d",
          contentRegion: "contentRegion_c25c6d",
          customColumn: "customColumn_c25c6d",
          contentColumn: "contentColumn_c25c6d",
          contentColumnWide: "contentColumnWide_c25c6d",
          contentColumnDefault: "contentColumnDefault_c25c6d",
          contentColumnMinimal: "contentColumnMinimal_c25c6d",
          customHeader: "customHeader_c25c6d",
          customContainer: "customContainer_c25c6d",
          customScroller: "customScroller_c25c6d",
          noticeRegion: "noticeRegion_c25c6d",
          noticeRegionHiddenSidebar: "noticeRegionHiddenSidebar_c25c6d",
          mobileSidebarTools: "mobileSidebarTools_c25c6d",
          flexFullWidth: "flexFullWidth_c25c6d",
          hidden: "hidden_c25c6d",
          mobileContent: "mobileContent_c25c6d",
          mobileContentHeader: "mobileContentHeader_c25c6d",
          hideHamburger: "hideHamburger_c25c6d",
          mobileToolsContainer: "mobileToolsContainer_c25c6d",
          closeIconOnly: "closeIconOnly_c25c6d",
          isMobileAndroid: "isMobileAndroid_c25c6d",
          mobileToolsCloseIcon: "mobileToolsCloseIcon_c25c6d",
          mobileSidebarHeader: "mobileSidebarHeader_c25c6d",
        }),
      );
    },
    322683: function (e, n, t) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    58700: function (e, n, t) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    430457: function (e, n, t) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    53080: function (e, n, t) {
      e.exports = {
        statusWarningBlock: "statusWarningBlock_e45fae",
        statusWarningBlockWithCta: "statusWarningBlockWithCta_e45fae",
        horizontalStatusWarningBlock: "horizontalStatusWarningBlock_e45fae",
        verticalStatusWarningBlock: "verticalStatusWarningBlock_e45fae",
        ctaButtonContainer: "ctaButtonContainer_e45fae",
        ctaButton: "ctaButton_e45fae",
        ctaBlackButton: "ctaBlackButton_e45fae",
        ctaButtonText: "ctaButtonText_e45fae",
      };
    },
    278724: function (e, n, t) {
      e.exports = {
        countDown: "countDown_d0e7ba",
        sparkleStar1: "sparkleStar1_d0e7ba",
        sparkleStar2: "sparkleStar2_d0e7ba",
      };
    },
    882673: function (e, n, t) {
      t.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    700706: function (e, n, t) {
      e.exports = {
        premiumTrialBadge: "premiumTrialBadge_b089d3",
        premiumTrialBadgeIcon: "premiumTrialBadgeIcon_b089d3",
        premiumTrialTier0UnacknowledgedBadge:
          "premiumTrialTier0UnacknowledgedBadge_b089d3",
        premiumTrialTier2UnacknowledgedBadge:
          "premiumTrialTier2UnacknowledgedBadge_b089d3",
        premiumDiscountUnacknowledgedBadge:
          "premiumDiscountUnacknowledgedBadge_b089d3",
        premiumTrialAcknowledgedBadge: "premiumTrialAcknowledgedBadge_b089d3",
        premiumTrialBadgeSelected: "premiumTrialBadgeSelected_b089d3",
        premiumOfferBadgeCopy: "premiumOfferBadgeCopy_b089d3",
      };
    },
    783072: function (e, n, t) {
      e.exports = {
        customCircleAnimation: "customCircleAnimation_b5369a",
        coachTipContainer: "coachTipContainer_b5369a",
        coachmarkArt: "coachmarkArt_b5369a",
        exitIcon: "exitIcon_b5369a",
        iconContainer: "iconContainer_b5369a",
        coachtipContent: "coachtipContent_b5369a",
        incentiveCoachtipContent: "incentiveCoachtipContent_b5369a",
        marketingBadgeTooltip: "marketingBadgeTooltip_b5369a",
        tooltipContent: "tooltipContent_b5369a",
        incentiveTooltipPointer: "incentiveTooltipPointer_b5369a",
        incentiveCoachtipContainer: "incentiveCoachtipContainer_b5369a",
        icon: "icon_b5369a",
        incentiveIcon: "incentiveIcon_b5369a",
        trialBadgeBackground: "trialBadgeBackground_b5369a",
        trialAckedBadge: "trialAckedBadge_b5369a",
        t4ACoachTipContainer: "t4ACoachTipContainer_b5369a",
        t4ACoachtipArtOuterContainer: "t4ACoachtipArtOuterContainer_b5369a",
        t4AMarketingBadgeTooltip: "t4AMarketingBadgeTooltip_b5369a",
        t4ACoachtipArtInnerContainer: "t4ACoachtipArtInnerContainer_b5369a",
        t4ACoachtipArt: "t4ACoachtipArt_b5369a",
        t4aCoachtipContent: "t4aCoachtipContent_b5369a",
      };
    },
    595837: function (e, n, t) {
      e.exports = {
        nitroGemAnimation: "nitroGemAnimation_ba5739",
        gemBackgroundFill: "gemBackgroundFill_ba5739",
        progressCircle: "progressCircle_ba5739",
        progressCricleBottomMargin: "progressCricleBottomMargin_ba5739",
        activeProgressCircle: "activeProgressCircle_ba5739",
        activeProgressCircleAnimation: "activeProgressCircleAnimation_ba5739",
      };
    },
    77368: function (e, n, t) {
      e.exports = {
        circleContainer: "circleContainer_d37103",
        childrenContainer: "childrenContainer_d37103",
        baseProgressCircle: "baseProgressCircle_d37103",
        circleSVG: "circleSVG_d37103",
      };
    },
    9642: function (e, n, t) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    840468: function (e, n, t) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    455029: function (e, n, t) {
      t.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=7693d659a0688aee8303.js.map
