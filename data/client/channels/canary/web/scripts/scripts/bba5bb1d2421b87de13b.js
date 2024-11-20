"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42793"],
  {
    518756: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return d;
        },
      }),
        a(47120);
      var n = a(442837),
        r = a(357156),
        o = a(984933),
        i = a(430824),
        c = a(496675),
        l = a(981631);
      function d(e, t) {
        return (0, n.e7)(
          [i.Z, o.ZP, c.Z],
          () => {
            let a = i.Z.getGuild(e);
            if (
              c.Z.can(l.Plq.ADMINISTRATOR, a) ||
              c.Z.can(l.Plq.CREATE_EVENTS, a)
            )
              return !0;
            for (let { channel: a } of o.ZP.getChannels(e)[o.Zb])
              if (null == t || a.type === t) {
                let [e] = (0, r.Ob)(a);
                if (c.Z.can(e, a)) return !0;
              }
            return !1;
          },
          [e, t],
        );
      }
    },
    334877: function (e, t, a) {
      a.d(t, {
        l: function () {
          return o;
        },
      });
      var n = a(905837),
        r = a(731965);
      let o = (0, n.Ue)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, r.j)(() => e({ canCloseModal: t }));
        },
      }));
    },
    576749: function (e, t, a) {
      var n = a(481060),
        r = a(40851),
        o = a(334877),
        i = a(981631);
      let c = "guild-event-modal";
      t.Z = () => {
        let e =
          (0, r.bp)() === i.IlC.POPOUT
            ? n.POPOUT_MODAL_CONTEXT
            : n.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: c,
          contextKey: e,
          onCloseRequest: () => {
            o.l.getState().canCloseModal && (0, n.closeModal)(c, e);
          },
        };
      };
    },
    759198: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = a(200651);
      a(192379);
      var r = a(120356),
        o = a.n(r),
        i = a(481060),
        c = a(507815);
      function l(e) {
        let { className: t, color: a, ...r } = e;
        return (0, n.jsx)(i.Text, {
          className: o()({ [c.text]: null == a }, t),
          color: a,
          ...r,
        });
      }
    },
    594045: function (e, t, a) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    729071: function (e, t, a) {
      e.exports = {
        row: "row_a6e298",
        clickable: "clickable_a6e298",
        headerCell: "headerCell_a6e298",
        headerCellContent: "headerCellContent_a6e298",
        stickyHeader: "stickyHeader_a6e298",
        sortIcon: "sortIcon_a6e298",
      };
    },
    214201: function (e, t, a) {
      e.exports = {};
    },
    745974: function (e, t, a) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    626166: function (e, t, a) {
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
    738912: function (e, t, a) {
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
    860553: function (e, t, a) {
      e.exports = {
        countDown: "countDown_d0e7ba",
        sparkleStar1: "sparkleStar1_d0e7ba",
        sparkleStar2: "sparkleStar2_d0e7ba",
      };
    },
    100210: function (e, t, a) {
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
    526207: function (e, t, a) {
      a.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    742774: function (e, t, a) {
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
    938923: function (e, t, a) {
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
    507815: function (e, t, a) {
      e.exports = { text: "text_b953a6" };
    },
    226705: function (e, t, a) {
      e.exports = {
        nitroGemAnimation: "nitroGemAnimation_ba5739",
        gemBackgroundFill: "gemBackgroundFill_ba5739",
        progressCircle: "progressCircle_ba5739",
        progressCricleBottomMargin: "progressCricleBottomMargin_ba5739",
        activeProgressCircle: "activeProgressCircle_ba5739",
        activeProgressCircleAnimation: "activeProgressCircleAnimation_ba5739",
        avatarDecoContainer: "avatarDecoContainer_ba5739",
        avatarDeco: "avatarDeco_ba5739",
        avatarDecoImage: "avatarDecoImage_ba5739",
      };
    },
    315566: function (e, t, a) {
      e.exports = {
        circleContainer: "circleContainer_d37103",
        childrenContainer: "childrenContainer_d37103",
        baseProgressCircle: "baseProgressCircle_d37103",
        circleSVG: "circleSVG_d37103",
      };
    },
    704448: function (e, t, a) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    869042: function (e, t, a) {
      a.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=bba5bb1d2421b87de13b.js.map
