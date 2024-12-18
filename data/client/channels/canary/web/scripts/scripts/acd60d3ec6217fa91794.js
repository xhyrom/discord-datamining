"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29263"],
  {
    822070: function (e, t, n) {
      n.d(t, {
        $: function () {
          return i;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-07_referral_program_sender_incentive",
        label: "Referral Program Sender Incentive",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 0, label: "Disabled", config: { enabled: !1 } },
          { id: 1, label: "Enabled", config: { enabled: !0 } },
        ],
      });
    },
    520540: function (e, t, n) {
      n.d(t, {
        g: function () {
          return r;
        },
        p: function () {
          return a;
        },
      });
      var i,
        a,
        o = n(818083);
      ((i = a || (a = {}))[(i.VARIANT_1 = 0)] = "VARIANT_1"),
        (i[(i.VARIANT_2 = 1)] = "VARIANT_2");
      let r = (0, o.B)({
        kind: "user",
        id: "2024-03_referral_program_sender",
        label: "Referral Program Sender Experience",
        defaultConfig: {
          enabled: !1,
          subscriberHomeVariant: null,
          eligibleToFetch: !1,
        },
        treatments: [
          {
            id: 0,
            label: "Disabled",
            config: {
              enabled: !1,
              subscriberHomeVariant: null,
              eligibleToFetch: !0,
            },
          },
          {
            id: 1,
            label: "Enabled",
            config: {
              enabled: !0,
              subscriberHomeVariant: 0,
              eligibleToFetch: !0,
            },
          },
          {
            id: 2,
            label: "Enabled",
            config: {
              enabled: !0,
              subscriberHomeVariant: 1,
              eligibleToFetch: !0,
            },
          },
        ],
      });
    },
    304445: function (e, t, n) {
      n(47120), n(411104);
      var i = n(572299),
        a = n(38618),
        o = n(905423),
        r = n(622143),
        c = n(703656),
        l = n(981631);
      function s(e, t, n) {
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
      t.Z = new (class e {
        initialize() {
          this.cleanup(),
            (this.unlistenHistory = (0, c.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, c.s1)().location;
          o.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = o.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            a.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let a = (0, c.s1)().location.pathname,
                o = n(e, t);
              if (null != o)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: o.path, previousPath: a },
                  }),
                  (0, c.dL)(o.path, o.state),
                  !0
                );
            }
          else
            throw Error(
              "RouteManager: Something has gone horribly wrong with rewrites",
            );
          return !1;
        }
        cleanup() {
          var e, t;
          null === (e = this.unlistenHistory) || void 0 === e || e.call(this),
            (this.unlistenHistory = void 0),
            null === (t = this.unlistenKeyboardChange) ||
              void 0 === t ||
              t.call(this),
            (this.unlistenKeyboardChange = void 0),
            a.Z.removeChangeListener(this.handleConnectionChange);
        }
        addRouteChangeListener(e) {
          return (
            null != this.unlistenHistory && e((0, c.s1)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
          );
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let t = e((0, c.s1)().location, (0, c.s1)().action);
            null != t && (0, c.dL)(t.path, t.state);
          }
          return this.rewrites.add(e), () => this.removeRouteRewriter(e);
        }
        removeRouteChangeListener(e) {
          this.listeners.delete(e);
        }
        removeRouteRewriter(e) {
          this.rewrites.delete(e);
        }
        getHistory() {
          return (0, c.s1)();
        }
        constructor() {
          s(this, "unlistenHistory", void 0),
            s(this, "unlistenKeyboardChange", void 0),
            s(this, "rewrites", new Set()),
            s(this, "listeners", new Set()),
            s(this, "routeChangeCount", 0),
            s(this, "timer", -1),
            s(this, "connected", !1),
            s(this, "handleConnectionChange", () => {
              let e = a.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, c.s1)().location, "REPLACE"));
            }),
            s(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              if (!(0, r.r)(e)) {
                (0, c.dL)(l.Z5c.ME);
                return;
              }
              let n = o.Z.getState();
              for (let i of (n.basePath !== e.pathname &&
                n.resetPath(e.pathname),
              this.listeners))
                try {
                  i(e, t);
                } catch (e) {
                  console.warn(
                    "RouteManager.listen: A route listener has caused an error",
                    e.message,
                  );
                }
              this.routeChangeCount = 0;
            }),
            s(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            s(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = o.Z.getState();
              null != e.path && (0, c.uL)(e.path);
            });
        }
      })();
    },
    622143: function (e, t, n) {
      n.d(t, {
        r: function () {
          return i;
        },
      });
      function i(e) {
        return !0;
      }
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return _;
        },
        YK: function () {
          return u;
        },
        _o: function () {
          return b;
        },
        ac: function () {
          return C;
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
          return h;
        },
        xH: function () {
          return f;
        },
      }),
        n(47120);
      var i,
        a,
        o = n(695346),
        r = n(486472),
        c = n(430824);
      n(626135);
      var l = n(981631),
        s = n(388032);
      let d = 864e5 * l.eBq;
      function u() {
        let e = o.h2.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != c.Z.getGuild(e))),
          new Set(e)
        );
      }
      function g() {
        let e = o.zA.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != c.Z.getGuild(e))),
          new Set(e)
        );
      }
      function b() {
        let e = o.SE.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != c.Z.getGuild(e))),
          new Set(e)
        );
      }
      function h() {
        let e = o.iH.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != c.Z.getGuild(e))),
          new Set(e)
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
      function _(e, t) {
        return (
          !t.verified ||
          (null != e && d > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((a = i || (i = {}))[(a.UNDECIDED = 0)] = "UNDECIDED"),
        (a[(a.OPTIN = 1)] = "OPTIN"),
        (a[(a.OPTOUT = 2)] = "OPTOUT");
      let C = { 0: void 0, 1: !0, 2: !1 };
      function f() {
        return [
          {
            name: s.intl.string(s.t["/yLMRU"]),
            desc: s.intl.string(s.t["3fzkPj"]),
            value: 1,
          },
          {
            name: s.intl.string(s.t["21fP2d"]),
            desc: s.intl.string(s.t.ggJ9jY),
            value: 2,
          },
          {
            name: s.intl.string(s.t["OWIo8/"]),
            desc: s.intl.string(s.t.HqYXp6),
            value: 0,
          },
        ];
      }
    },
    744149: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    840814: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    583535: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    670189: function (e, t, n) {
      n.r(
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
    139266: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    759821: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    776394: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    529819: function (e, t, n) {
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
    767493: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    229830: function (e, t, n) {
      e.exports = {
        premiumTrialBadge: "premiumTrialBadge_b089d3",
        premiumTrialBadgeV2: "premiumTrialBadgeV2_b089d3",
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
    762042: function (e, t, n) {
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
        t4aCoachtipContent: "t4aCoachtipContent_b5369a",
      };
    },
    830164: function (e, t, n) {
      e.exports = {
        nitroGemAnimation: "nitroGemAnimation_ba5739",
        gemBackgroundFill: "gemBackgroundFill_ba5739",
        progressCircle: "progressCircle_ba5739",
        activeProgressCircle: "activeProgressCircle_ba5739",
        activeProgressCircleAnimation: "activeProgressCircleAnimation_ba5739",
        avatarDecoContainer: "avatarDecoContainer_ba5739",
        avatarDeco: "avatarDeco_ba5739",
        avatarDecoImage: "avatarDecoImage_ba5739",
      };
    },
    697303: function (e, t, n) {
      e.exports = {
        circleContainer: "circleContainer_d37103",
        childrenContainer: "childrenContainer_d37103",
        baseProgressCircle: "baseProgressCircle_d37103",
        circleSVG: "circleSVG_d37103",
      };
    },
    844812: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    913074: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    684309: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=acd60d3ec6217fa91794.js.map
