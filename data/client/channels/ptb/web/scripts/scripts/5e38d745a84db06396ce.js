"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56007"],
  {
    518756: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return d;
        },
      }),
        a(47120);
      var t = a(442837),
        r = a(357156),
        i = a(984933),
        o = a(430824),
        c = a(496675),
        l = a(981631);
      function d(e, n) {
        return (0, t.e7)(
          [o.Z, i.ZP, c.Z],
          () => {
            let a = o.Z.getGuild(e);
            if (
              c.Z.can(l.Plq.ADMINISTRATOR, a) ||
              c.Z.can(l.Plq.CREATE_EVENTS, a)
            )
              return !0;
            for (let { channel: a } of i.ZP.getChannels(e)[i.Zb])
              if (null == n || a.type === n) {
                let [e] = (0, r.Ob)(a);
                if (c.Z.can(e, a)) return !0;
              }
            return !1;
          },
          [e, n],
        );
      }
    },
    334877: function (e, n, a) {
      a.d(n, {
        l: function () {
          return i;
        },
      });
      var t = a(15729),
        r = a(731965);
      let i = (0, t.U)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(n) {
          (0, r.j)(() => e({ canCloseModal: n }));
        },
      }));
    },
    576749: function (e, n, a) {
      var t = a(481060),
        r = a(40851),
        i = a(334877),
        o = a(981631);
      let c = "guild-event-modal";
      n.Z = () => {
        let e =
          (0, r.bp)() === o.IlC.POPOUT
            ? t.POPOUT_MODAL_CONTEXT
            : t.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: c,
          contextKey: e,
          onCloseRequest: () => {
            i.l.getState().canCloseModal && (0, t.closeModal)(c, e);
          },
        };
      };
    },
    822070: function (e, n, a) {
      a.d(n, {
        $: function () {
          return t;
        },
      });
      let t = (0, a(818083).B)({
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
    520540: function (e, n, a) {
      a.d(n, {
        g: function () {
          return o;
        },
        p: function () {
          return r;
        },
      });
      var t,
        r,
        i = a(818083);
      ((t = r || (r = {}))[(t.VARIANT_1 = 0)] = "VARIANT_1"),
        (t[(t.VARIANT_2 = 1)] = "VARIANT_2");
      let o = (0, i.B)({
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
    759198: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return l;
        },
      });
      var t = a(200651);
      a(192379);
      var r = a(120356),
        i = a.n(r),
        o = a(481060),
        c = a(457900);
      function l(e) {
        let { className: n, color: a, ...r } = e;
        return (0, t.jsx)(o.Text, {
          className: i()({ [c.text]: null == a }, n),
          color: a,
          ...r,
        });
      }
    },
    95648: function (e, n, a) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    410642: function (e, n, a) {
      e.exports = {
        row: "row_a6e298",
        clickable: "clickable_a6e298",
        headerCell: "headerCell_a6e298",
        headerCellContent: "headerCellContent_a6e298",
        stickyHeader: "stickyHeader_a6e298",
        sortIcon: "sortIcon_a6e298",
      };
    },
    385982: function (e, n, a) {
      e.exports = {};
    },
    497523: function (e, n, a) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    933078: function (e, n, a) {
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
    119866: function (e, n, a) {
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
    150626: function (e, n, a) {
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
    767493: function (e, n, a) {
      a.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    229830: function (e, n, a) {
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
    762042: function (e, n, a) {
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
    457900: function (e, n, a) {
      e.exports = { text: "text_b953a6" };
    },
    830164: function (e, n, a) {
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
    697303: function (e, n, a) {
      e.exports = {
        circleContainer: "circleContainer_d37103",
        childrenContainer: "childrenContainer_d37103",
        baseProgressCircle: "baseProgressCircle_d37103",
        circleSVG: "circleSVG_d37103",
      };
    },
    844812: function (e, n, a) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    684309: function (e, n, a) {
      a.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=5e38d745a84db06396ce.js.map
