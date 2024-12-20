"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31369"],
  {
    822070: function (e, n, i) {
      i.d(n, {
        $: function () {
          return t;
        },
      });
      let t = (0, i(818083).B)({
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
    520540: function (e, n, i) {
      i.d(n, {
        g: function () {
          return o;
        },
        p: function () {
          return r;
        },
      });
      var t,
        r,
        a = i(818083);
      ((t = r || (r = {}))[(t.VARIANT_1 = 0)] = "VARIANT_1"),
        (t[(t.VARIANT_2 = 1)] = "VARIANT_2");
      let o = (0, a.B)({
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
    671533: function (e, n, i) {
      i(411104);
      var t,
        r,
        a = i(200651);
      i(192379);
      var o = i(120356),
        c = i.n(o),
        l = i(325767),
        d = i(485270);
      ((r = t || (t = {})).LEFT = "LEFT"),
        (r.RIGHT = "RIGHT"),
        (r.UP = "UP"),
        (r.DOWN = "DOWN"),
        (r.UP_LEFT = "UP_LEFT"),
        (r.DOWN_RIGHT = "DOWN_RIGHT");
      let b = (e) => {
        let {
          width: n = 24,
          height: i = 24,
          color: t = "currentColor",
          direction: r,
          foreground: o,
          className: b,
          title: s,
          ...u
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.Z)(u),
          width: n,
          height: i,
          className: c()(
            b,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return d.left;
                case "RIGHT":
                  return d.right;
                case "UP":
                  return null;
                case "DOWN":
                  return d.down;
                case "UP_LEFT":
                  return d.upLeft;
                case "DOWN_RIGHT":
                  return d.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(r),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != s ? (0, a.jsx)("title", { children: s }) : null,
            (0, a.jsx)("polygon", {
              className: o,
              fill: t,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (b.Directions = t), (n.Z = b);
    },
    95648: function (e, n, i) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    410642: function (e, n, i) {
      e.exports = {
        row: "row_a6e298",
        clickable: "clickable_a6e298",
        headerCell: "headerCell_a6e298",
        headerCellContent: "headerCellContent_a6e298",
        stickyHeader: "stickyHeader_a6e298",
        sortIcon: "sortIcon_a6e298",
      };
    },
    933078: function (e, n, i) {
      e.exports = {
        questionContainer: "questionContainer_b007eb",
        questionTitle: "questionTitle_b007eb",
        requirementContainer: "requirementContainer_b007eb",
        requirementIcon: "requirementIcon_b007eb",
        requirementText: "requirementText_b007eb",
        requirementSuccess: "requirementSuccess_b007eb",
        requirementFailure: "requirementFailure_b007eb",
        footnote: "footnote_b007eb",
      };
    },
    119866: function (e, n, i) {
      e.exports = {
        termsRow: "termsRow_bd5b94",
        termsRowContent: "termsRowContent_bd5b94",
        checkbox: "checkbox_bd5b94",
        verifyConfirmText: "verifyConfirmText_bd5b94",
        fieldBackground: "fieldBackground_bd5b94",
        termsFieldBody: "termsFieldBody_bd5b94",
        textInputFieldBodyInput: "textInputFieldBodyInput_bd5b94",
        paragraphFieldBody: "paragraphFieldBody_bd5b94",
        multipleChoiceIcon: "multipleChoiceIcon_bd5b94",
      };
    },
    767493: function (e, n, i) {
      i.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    229830: function (e, n, i) {
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
    762042: function (e, n, i) {
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
    830164: function (e, n, i) {
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
    697303: function (e, n, i) {
      e.exports = {
        circleContainer: "circleContainer_d37103",
        childrenContainer: "childrenContainer_d37103",
        baseProgressCircle: "baseProgressCircle_d37103",
        circleSVG: "circleSVG_d37103",
      };
    },
    844812: function (e, n, i) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    684309: function (e, n, i) {
      i.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    485270: function (e, n, i) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=4799ba7f40a38fc4fc49.js.map
