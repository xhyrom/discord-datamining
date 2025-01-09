"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58364"],
  {
    518756: function (e, a, r) {
      r.d(a, {
        Z: function () {
          return c;
        },
      }),
        r(47120);
      var n = r(442837),
        t = r(357156),
        d = r(984933),
        o = r(430824),
        i = r(496675),
        l = r(981631);
      function c(e, a) {
        return (0, n.e7)(
          [o.Z, d.ZP, i.Z],
          () => {
            let r = o.Z.getGuild(e);
            if (
              i.Z.can(l.Plq.ADMINISTRATOR, r) ||
              i.Z.can(l.Plq.CREATE_EVENTS, r)
            )
              return !0;
            for (let { channel: r } of d.ZP.getChannels(e)[d.Zb])
              if (null == a || r.type === a) {
                let [e] = (0, t.Ob)(r);
                if (i.Z.can(e, r)) return !0;
              }
            return !1;
          },
          [e, a],
        );
      }
    },
    334877: function (e, a, r) {
      r.d(a, {
        l: function () {
          return d;
        },
      });
      var n = r(15729),
        t = r(731965);
      let d = (0, n.U)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(a) {
          (0, t.j)(() => e({ canCloseModal: a }));
        },
      }));
    },
    576749: function (e, a, r) {
      var n = r(481060),
        t = r(40851),
        d = r(334877),
        o = r(981631);
      let i = "guild-event-modal";
      a.Z = () => {
        let e =
          (0, t.bp)() === o.IlC.POPOUT
            ? n.POPOUT_MODAL_CONTEXT
            : n.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: i,
          contextKey: e,
          onCloseRequest: () => {
            d.l.getState().canCloseModal && (0, n.closeModal)(i, e);
          },
        };
      };
    },
    759198: function (e, a, r) {
      r.d(a, {
        Z: function () {
          return l;
        },
      });
      var n = r(200651);
      r(192379);
      var t = r(120356),
        d = r.n(t),
        o = r(481060),
        i = r(457900);
      function l(e) {
        let { className: a, color: r, ...t } = e;
        return (0, n.jsx)(o.Text, {
          className: d()({ [i.text]: null == r }, a),
          color: r,
          ...t,
        });
      }
    },
    95648: function (e, a, r) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    410642: function (e, a, r) {
      e.exports = {
        row: "row_a6e298",
        clickable: "clickable_a6e298",
        headerCell: "headerCell_a6e298",
        headerCellContent: "headerCellContent_a6e298",
        stickyHeader: "stickyHeader_a6e298",
        sortIcon: "sortIcon_a6e298",
      };
    },
    385982: function (e, a, r) {
      e.exports = {};
    },
    497523: function (e, a, r) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    933078: function (e, a, r) {
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
    119866: function (e, a, r) {
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
    965624: function (e, a, r) {
      e.exports = {
        card: "card_e73adb",
        iconMask: "iconMask_e73adb",
        cardPlaceholder: "cardPlaceholder_e73adb",
        cardHeader: "cardHeader_e73adb",
        splash: "splash_e73adb",
        splashImage: "splashImage_e73adb",
        splashLoaded: "splashLoaded_e73adb",
        guildIcon: "guildIcon_e73adb",
        defaultIcon: "defaultIcon_e73adb",
        acronym: "acronym_e73adb",
        avatar: "avatar_e73adb",
        guildInfo: "guildInfo_e73adb",
        title: "title_e73adb",
        verifiedIcon: "verifiedIcon_e73adb",
        guildName: "guildName_e73adb",
        description: "description_e73adb",
        memberInfo: "memberInfo_e73adb",
        memberCount: "memberCount_e73adb",
        dotOnline: "dotOnline_e73adb memberDot_e73adb",
        dotOffline: "dotOffline_e73adb memberDot_e73adb",
        cardDisabled: "cardDisabled_e73adb",
        cardSmall: "cardSmall_e73adb",
      };
    },
    150626: function (e, a, r) {
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
    767493: function (e, a, r) {
      r.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    229830: function (e, a, r) {
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
    457900: function (e, a, r) {
      e.exports = { text: "text_b953a6" };
    },
    844812: function (e, a, r) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    684309: function (e, a, r) {
      r.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=e20787b8b2e25a8c3da6.js.map
