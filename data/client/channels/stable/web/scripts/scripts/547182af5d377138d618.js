"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32453"],
  {
    518756: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(442837),
        a = n(357156),
        o = n(984933),
        i = n(430824),
        d = n(496675),
        l = n(981631);
      function c(e, t) {
        return (0, r.e7)(
          [i.Z, o.ZP, d.Z],
          () => {
            let n = i.Z.getGuild(e);
            if (
              d.Z.can(l.Plq.ADMINISTRATOR, n) ||
              d.Z.can(l.Plq.CREATE_EVENTS, n)
            )
              return !0;
            for (let { channel: n } of o.ZP.getChannels(e)[o.Zb])
              if (null == t || n.type === t) {
                let [e] = (0, a.Ob)(n);
                if (d.Z.can(e, n)) return !0;
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
          return o;
        },
      });
      var r = n(15729),
        a = n(731965);
      let o = (0, r.U)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, a.j)(() => e({ canCloseModal: t }));
        },
      }));
    },
    576749: function (e, t, n) {
      var r = n(481060),
        a = n(40851),
        o = n(334877),
        i = n(981631);
      let d = "guild-event-modal";
      t.Z = () => {
        let e =
          (0, a.bp)() === i.IlC.POPOUT
            ? r.POPOUT_MODAL_CONTEXT
            : r.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: d,
          contextKey: e,
          onCloseRequest: () => {
            o.l.getState().canCloseModal && (0, r.closeModal)(d, e);
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
      var r = n(200651);
      n(192379);
      var a = n(120356),
        o = n.n(a),
        i = n(481060),
        d = n(457900);
      function l(e) {
        let { className: t, color: n, ...a } = e;
        return (0, r.jsx)(i.Text, {
          className: o()({ [d.text]: null == n }, t),
          color: n,
          ...a,
        });
      }
    },
    95648: function (e, t, n) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    410642: function (e, t, n) {
      e.exports = {
        row: "row_a6e298",
        clickable: "clickable_a6e298",
        headerCell: "headerCell_a6e298",
        headerCellContent: "headerCellContent_a6e298",
        stickyHeader: "stickyHeader_a6e298",
        sortIcon: "sortIcon_a6e298",
      };
    },
    385982: function (e, t, n) {
      e.exports = {};
    },
    497523: function (e, t, n) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    933078: function (e, t, n) {
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
    119866: function (e, t, n) {
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
    150626: function (e, t, n) {
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
    457900: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
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
    684309: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=547182af5d377138d618.js.map
