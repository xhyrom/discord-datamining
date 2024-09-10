"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6294"],
  {
    88658: function (e, n, t) {
      t.d(n, {
        $6: function () {
          return T;
        },
        YK: function () {
          return u;
        },
        _o: function () {
          return b;
        },
        ac: function () {
          return S;
        },
        bL: function () {
          return m;
        },
        g0: function () {
          return a;
        },
        gl: function () {
          return _;
        },
        rr: function () {
          return g;
        },
        xH: function () {
          return f;
        },
      });
      var o,
        a,
        c = t(695346),
        r = t(486472),
        i = t(430824);
      t(626135);
      var l = t(981631),
        d = t(689938);
      let s = 864e5 * l.eBq;
      function u() {
        let e = c.h2.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != i.Z.getGuild(e))),
          e
        );
      }
      function _() {
        let e = c.zA.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != i.Z.getGuild(e))),
          e
        );
      }
      function b() {
        let e = c.SE.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != i.Z.getGuild(e))),
          e
        );
      }
      function g() {
        let e = c.iH.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != i.Z.getGuild(e))),
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
      function T(e, n) {
        return (
          !n.verified ||
          (null != e && s > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((o = a || (a = {}))[(o.UNDECIDED = 0)] = "UNDECIDED"),
        (o[(o.OPTIN = 1)] = "OPTIN"),
        (o[(o.OPTOUT = 2)] = "OPTOUT");
      let S = { 0: void 0, 1: !0, 2: !1 };
      function f() {
        return [
          {
            name: d.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: d.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1,
          },
          {
            name: d.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: d.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2,
          },
          {
            name: d.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: d.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0,
          },
        ];
      }
    },
    60179: function (e, n, t) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    243014: function (e, n, t) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    681130: function (e, n, t) {
      e.exports = { button: "button_f23d00" };
    },
    841261: function (e, n, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    147768: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    11377: function (e, n, t) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    156725: function (e, n, t) {
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
    404934: function (e, n, t) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    169528: function (e, n, t) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    915938: function (e, n, t) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    848435: function (e, n, t) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    861277: function (e, n, t) {
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
    526207: function (e, n, t) {
      t.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    742774: function (e, n, t) {
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
    704448: function (e, n, t) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    655580: function (e, n, t) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    869042: function (e, n, t) {
      t.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=aa0c36e2535cafe3bad8.js.map
