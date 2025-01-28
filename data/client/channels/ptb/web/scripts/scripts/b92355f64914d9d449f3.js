"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29260"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    852860: function (e, n, t) {
      t(47120);
      var o = t(200651),
        r = t(192379),
        i = t(481060),
        a = t(585483),
        s = t(981631),
        c = t(388032),
        l = t(840814);
      n.Z = function (e) {
        var n;
        let {
            message: t,
            errorMessage: u,
            submitting: d,
            onReset: b,
            onSave: _,
            onSaveText: f,
            onResetText: m,
            onSaveButtonColor: p,
            disabled: h,
            saveButtonTooltip: C,
          } = e,
          E = r.useRef(null),
          [g, I] = r.useState(!1);
        return (
          r.useEffect(() => {
            function e() {
              I(!0), setTimeout(() => I(!1), 1e3);
            }
            return (
              a.S.subscribe(s.CkL.EMPHASIZE_NOTICE, e),
              () => {
                a.S.unsubscribe(s.CkL.EMPHASIZE_NOTICE, e);
              }
            );
          }, []),
          (0, o.jsx)("div", {
            className: l.container,
            "data-emphasized": g,
            children: (0, o.jsx)("div", {
              className: l.flexContainer,
              ref: E,
              children: (0, o.jsxs)(i.FocusRingScope, {
                containerRef: E,
                children: [
                  (0, o.jsx)("div", {
                    className: l.shrinkingContainer,
                    children: (0, o.jsx)("div", {
                      className: l.message,
                      children:
                        null !== (n = null != u ? u : t) && void 0 !== n
                          ? n
                          : c.intl.string(c.t.GP7JLC),
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className: l.actions,
                    children: [
                      null != b &&
                        (0, o.jsx)(i.Button, {
                          className: l.resetButton,
                          size: i.Button.Sizes.SMALL,
                          color: i.Button.Colors.PRIMARY,
                          look: i.Button.Looks.LINK,
                          onClick: b,
                          children: (0, o.jsx)("span", {
                            children: null != m ? m : c.intl.string(c.t.yBZMsb),
                          }),
                        }),
                      null != _
                        ? (0, o.jsx)(i.Tooltip, {
                            text: C,
                            children: (e) =>
                              (0, o.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                color: null != p ? p : i.Button.Colors.GREEN,
                                submitting: d,
                                disabled: h,
                                onClick: _,
                                ...e,
                                children:
                                  null != f ? f : c.intl.string(c.t.K344S0),
                              }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    645264: function (e, n, t) {
      t.r(n);
      var o = t(200651),
        r = t(192379),
        i = t(442837),
        a = t(215569),
        s = t(481060),
        c = t(852860),
        l = t(313201),
        u = t(944163),
        d = t(266395),
        b = t(200305),
        _ = t(592286),
        f = t(388032),
        m = t(832311);
      let p = () =>
        (0, o.jsx)(c.Z, {
          submitting: !1,
          message: f.intl.string(f.t["8g514e"]),
          onReset: () => {
            (0, d.PE)(!1);
          },
          onResetText: f.intl.string(f.t["ETE/oK"]),
          onSave: () => {
            (0, d.PE)(!1), (0, s.closeModal)(_.Pn);
          },
          onSaveText: f.intl.string(f.t["Xt+UaW"]),
          onSaveButtonColor: s.ButtonColors.RED,
        });
      n.default = (e) => {
        let {
            guildId: n,
            transitionState: t,
            onClose: c,
            onComplete: _,
            isPreview: f = !1,
          } = e,
          h = (0, d.rb)((e) => e.shouldShowWarning),
          C = (0, i.e7)([u.Z], () => u.Z.get(n)),
          E = (0, l.Dt)();
        return (r.useEffect(() => {
          C === u.t && c();
        }, [c, C]),
        C === u.t)
          ? null
          : (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsxs)(s.ModalRoot, {
                  size: s.ModalSize.MEDIUM,
                  className: m.container,
                  transitionState: t,
                  "aria-labelledby": E,
                  children: [
                    (0, o.jsx)(s.ModalCloseButton, {
                      onClick: () => c(!1),
                      className: m.closeButton,
                    }),
                    (0, o.jsx)(b.Z, {
                      headerId: E,
                      guildId: n,
                      onClose: c,
                      onComplete: _,
                      isPreview: f,
                    }),
                  ],
                }),
                (0, o.jsx)(a.W, {
                  children:
                    !0 === h &&
                    (0, o.jsx)(s.SlideIn, {
                      className: m.notice,
                      children: (0, o.jsx)(p, {}),
                    }),
                }),
              ],
            });
      };
    },
    144114: function (e, n, t) {
      t.d(n, {
        L: function () {
          return r;
        },
      });
      var o,
        r,
        i = t(990547),
        a = t(544891),
        s = t(570140),
        c = t(314897),
        l = t(573261),
        u = t(815660),
        d = t(981631);
      ((o = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (o.USER_SETTINGS_UPDATE = "user_settings_update"),
        (o.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (o.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (o.CONTACT_SYNC = "contact_sync"),
        (n.Z = {
          setCountryCode(e) {
            s.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, n) =>
            a.tn.del({
              url: d.ANM.PHONE,
              body: { password: e, change_phone_reason: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          resendCode(e) {
            let n = {},
              t = c.default.getFingerprint();
            return (
              null != t && "" !== t && (n["X-Fingerprint"] = t),
              a.tn.post({
                url: d.ANM.RESEND_PHONE,
                headers: n,
                body: { phone: e },
                rejectWithError: !1,
              })
            );
          },
          beginAddPhone: (e, n) =>
            a.tn.post({
              url: d.ANM.PHONE,
              body: { phone: e, change_phone_reason: n },
              rejectWithError: !1,
            }),
          addPhone: (e, n, t) =>
            a.tn.post({
              url: d.ANM.PHONE,
              body: { phone_token: e, password: n, change_phone_reason: t },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          addPhoneWithoutPassword: (e) =>
            a.tn.post({
              url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
              rejectWithError: !1,
            }),
          beginReverifyPhone: (e, n) =>
            a.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: n },
              rejectWithError: !1,
            }),
          reverifyPhone: (e, n, t) =>
            a.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: n, change_phone_reason: t },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          validatePhoneForSupport: (e) =>
            a.tn.post({
              url: d.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          async verifyPhone(e, n) {
            let t =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              o =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = {},
              a = c.default.getFingerprint();
            null != a && "" !== a && (r["X-Fingerprint"] = a),
              o && (r.authorization = "");
            let b = await l.Z.post({
              url: d.ANM.VERIFY_PHONE,
              headers: r,
              body: { phone: e, code: n },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE,
              },
              rejectWithError: !1,
            });
            return t && s.Z.dispatch({ type: "MODAL_POP", key: u.M }), b.body;
          },
        });
    },
    815660: function (e, n, t) {
      t.d(n, {
        M: function () {
          return o;
        },
        z: function () {
          return r;
        },
      });
      let o = "PHONE_VERIFICATION_MODAL_KEY",
        r = 6;
    },
    840814: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    832311: function (e, n, t) {
      e.exports = {
        container: "container_a74b6f",
        guildSidebar: "guildSidebar_a74b6f",
        guildDescription: "guildDescription_a74b6f",
        guildIcon: "guildIcon_a74b6f",
        guildIconNoIcon: "guildIconNoIcon_a74b6f",
        guildName: "guildName_a74b6f",
        emojisContainer: "emojisContainer_a74b6f",
        emoji: "emoji_a74b6f",
        onlineCount: "onlineCount_a74b6f",
        dotOnline: "dotOnline_a74b6f dot_a74b6f",
        dotMembers: "dotMembers_a74b6f dot_a74b6f",
        divider: "divider_a74b6f",
        modal: "modal_a74b6f",
        sequencer: "sequencer_a74b6f",
        modalContent: "modalContent_a74b6f",
        content: "content_a74b6f",
        centerContent: "centerContent_a74b6f",
        closeButton: "closeButton_a74b6f",
        applicationIconContainer: "applicationIconContainer_a74b6f",
        applicationIcon: "applicationIcon_a74b6f",
        animationAndSparklesContainer: "animationAndSparklesContainer_a74b6f",
        sparkleIcon: "sparkleIcon_a74b6f",
        sparkleTop: "sparkleTop_a74b6f",
        sparkleBottom: "sparkleBottom_a74b6f",
        animation: "animation_a74b6f",
        header: "header_a74b6f",
        subheader: "subheader_a74b6f",
        footer: "footer_a74b6f",
        submitButton: "submitButton_a74b6f",
        formItem: "formItem_a74b6f",
        resendButton: "resendButton_a74b6f",
        confirmation: "confirmation_a74b6f",
        confirmationContent: "confirmationContent_a74b6f",
        confirmationButtonRow: "confirmationButtonRow_a74b6f",
        confirmationButton: "confirmationButton_a74b6f",
        confirmationTooltipContents: "confirmationTooltipContents_a74b6f",
        confirmationButtonColumn: "confirmationButtonColumn_a74b6f",
        notice: "notice_a74b6f",
        rejectionReasonLabel: "rejectionReasonLabel_a74b6f",
        rejectionReason: "rejectionReason_a74b6f",
        disclaimerFooter: "disclaimerFooter_a74b6f",
      };
    },
    933078: function (e, n, t) {
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
    119866: function (e, n, t) {
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
    130948: function (e, n, t) {
      e.exports = {
        questionContainer: "questionContainer_cc56a8",
        disabledQuestionContainer: "disabledQuestionContainer_cc56a8",
        questionTitle: "questionTitle_cc56a8",
        requirementContainer: "requirementContainer_cc56a8",
        requirementIcon: "requirementIcon_cc56a8",
        requirementText: "requirementText_cc56a8",
        requirementSuccess: "requirementSuccess_cc56a8",
        requirementFailure: "requirementFailure_cc56a8",
        footnote: "footnote_cc56a8",
      };
    },
    484979: function (e, n, t) {
      e.exports = {
        termsRow: "termsRow_fb1388",
        termsRowContent: "termsRowContent_fb1388",
        checkbox: "checkbox_fb1388",
        verifyConfirmText: "verifyConfirmText_fb1388",
        disabledFieldBackground: "disabledFieldBackground_fb1388",
        termsFieldBody: "termsFieldBody_fb1388",
        paragraphFieldBody: "paragraphFieldBody_fb1388",
        multipleChoiceIcon: "multipleChoiceIcon_fb1388",
        editableRequirementContainer: "editableRequirementContainer_fb1388",
      };
    },
  },
]);
//# sourceMappingURL=b92355f64914d9d449f3.js.map
