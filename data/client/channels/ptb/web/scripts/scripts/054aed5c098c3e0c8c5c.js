"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42793"],
  {
    518756: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var a = n(442837),
        r = n(357156),
        i = n(984933),
        o = n(430824),
        c = n(496675),
        l = n(981631);
      function d(e, t) {
        return (0, a.e7)(
          [o.Z, i.ZP, c.Z],
          () => {
            let n = o.Z.getGuild(e);
            if (
              c.Z.can(l.Plq.ADMINISTRATOR, n) ||
              c.Z.can(l.Plq.CREATE_EVENTS, n)
            )
              return !0;
            for (let { channel: n } of i.ZP.getChannels(e)[i.Zb])
              if (null == t || n.type === t) {
                let [e] = (0, r.Ob)(n);
                if (c.Z.can(e, n)) return !0;
              }
            return !1;
          },
          [e, t],
        );
      }
    },
    334877: function (e, t, n) {
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var a = n(905837),
        r = n(731965);
      let i = (0, a.Ue)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, r.j)(() => e({ canCloseModal: t }));
        },
      }));
    },
    576749: function (e, t, n) {
      var a = n(481060),
        r = n(40851),
        i = n(334877),
        o = n(981631);
      let c = "guild-event-modal";
      t.Z = () => {
        let e =
          (0, r.bp)() === o.IlC.POPOUT
            ? a.POPOUT_MODAL_CONTEXT
            : a.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: c,
          contextKey: e,
          onCloseRequest: () => {
            i.l.getState().canCloseModal && (0, a.closeModal)(c, e);
          },
        };
      };
    },
    759198: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(120356),
        i = n.n(r),
        o = n(481060),
        c = n(507815);
      function l(e) {
        let { className: t, color: n, ...r } = e;
        return (0, a.jsx)(o.Text, {
          className: i()({ [c.text]: null == n }, t),
          color: n,
          ...r,
        });
      }
    },
    594045: function (e, t, n) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    729071: function (e, t, n) {
      e.exports = {
        row: "row_a6e298",
        clickable: "clickable_a6e298",
        headerCell: "headerCell_a6e298",
        headerCellContent: "headerCellContent_a6e298",
        stickyHeader: "stickyHeader_a6e298",
        sortIcon: "sortIcon_a6e298",
      };
    },
    214201: function (e, t, n) {
      e.exports = {};
    },
    745974: function (e, t, n) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    626166: function (e, t, n) {
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
    738912: function (e, t, n) {
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
    860553: function (e, t, n) {
      e.exports = {
        countDown: "countDown_d0e7ba",
        sparkleStar1: "sparkleStar1_d0e7ba",
        sparkleStar2: "sparkleStar2_d0e7ba",
      };
    },
    100210: function (e, t, n) {
      e.exports = {
        rootContainer: "rootContainer_e45ea8",
        headerContainer: "headerContainer_e45ea8",
        text: "text_e45ea8",
        newBadge: "newBadge_e45ea8",
        nitroWheel: "nitroWheel_e45ea8",
        labelContainer: "labelContainer_e45ea8",
        playButton: "playButton_e45ea8",
        mutedLabel: "mutedLabel_e45ea8",
      };
    },
    526207: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    742774: function (e, t, n) {
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
    938923: function (e, t, n) {
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
    507815: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
    },
    226705: function (e, t, n) {
      e.exports = {
        nitroGemAnimation: "nitroGemAnimation_ba5739",
        gemBackgroundFill: "gemBackgroundFill_ba5739",
        progressCircle: "progressCircle_ba5739",
        progressCricleBottomMargin: "progressCricleBottomMargin_ba5739",
        activeProgressCircle: "activeProgressCircle_ba5739",
        activeProgressCircleAnimation: "activeProgressCircleAnimation_ba5739",
      };
    },
    315566: function (e, t, n) {
      e.exports = {
        circleContainer: "circleContainer_d37103",
        childrenContainer: "childrenContainer_d37103",
        baseProgressCircle: "baseProgressCircle_d37103",
        circleSVG: "circleSVG_d37103",
      };
    },
    704448: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    869042: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=054aed5c098c3e0c8c5c.js.map
