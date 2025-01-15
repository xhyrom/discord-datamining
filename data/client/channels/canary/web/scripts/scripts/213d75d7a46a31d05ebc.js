"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16739"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    645264: function (e, o, n) {
      n.r(o);
      var t = n(200651),
        r = n(192379),
        i = n(442837),
        a = n(215569),
        c = n(481060),
        s = n(852860),
        d = n(313201),
        l = n(944163),
        u = n(266395),
        _ = n(200305),
        f = n(592286),
        b = n(388032),
        m = n(537416);
      let p = () =>
        (0, t.jsx)(s.Z, {
          submitting: !1,
          message: b.intl.string(b.t["8g514e"]),
          onReset: () => {
            (0, u.PE)(!1);
          },
          onResetText: b.intl.string(b.t["ETE/oK"]),
          onSave: () => {
            (0, u.PE)(!1), (0, c.closeModal)(f.Pn);
          },
          onSaveText: b.intl.string(b.t["Xt+UaW"]),
          onSaveButtonColor: c.ButtonColors.RED,
        });
      o.default = (e) => {
        let {
            guildId: o,
            transitionState: n,
            onClose: s,
            onComplete: f,
            isPreview: b = !1,
          } = e,
          E = (0, u.rb)((e) => e.shouldShowWarning),
          h = (0, i.e7)([l.Z], () => l.Z.get(o)),
          C = (0, d.Dt)();
        return (r.useEffect(() => {
          h === l.t && s();
        }, [s, h]),
        h === l.t)
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(c.ModalRoot, {
                  size: c.ModalSize.MEDIUM,
                  className: m.container,
                  transitionState: n,
                  "aria-labelledby": C,
                  children: [
                    (0, t.jsx)(c.ModalCloseButton, {
                      onClick: () => s(!1),
                      className: m.closeButton,
                    }),
                    (0, t.jsx)(_.Z, {
                      headerId: C,
                      guildId: o,
                      onClose: s,
                      onComplete: f,
                      isPreview: b,
                    }),
                  ],
                }),
                (0, t.jsx)(a.W, {
                  children:
                    !0 === E &&
                    (0, t.jsx)(c.SlideIn, {
                      className: m.notice,
                      children: (0, t.jsx)(p, {}),
                    }),
                }),
              ],
            });
      };
    },
    144114: function (e, o, n) {
      n.d(o, {
        L: function () {
          return r;
        },
      });
      var t,
        r,
        i = n(990547),
        a = n(544891),
        c = n(570140),
        s = n(314897),
        d = n(573261),
        l = n(815660),
        u = n(981631);
      ((t = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (t.USER_SETTINGS_UPDATE = "user_settings_update"),
        (t.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (t.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (t.CONTACT_SYNC = "contact_sync"),
        (o.Z = {
          setCountryCode(e) {
            c.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, o) =>
            a.tn.del({
              url: u.ANM.PHONE,
              body: { password: e, change_phone_reason: o },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          resendCode(e) {
            let o = {},
              n = s.default.getFingerprint();
            return (
              null != n && "" !== n && (o["X-Fingerprint"] = n),
              a.tn.post({
                url: u.ANM.RESEND_PHONE,
                headers: o,
                body: { phone: e },
                rejectWithError: !1,
              })
            );
          },
          beginAddPhone: (e, o) =>
            a.tn.post({
              url: u.ANM.PHONE,
              body: { phone: e, change_phone_reason: o },
              rejectWithError: !1,
            }),
          addPhone: (e, o, n) =>
            a.tn.post({
              url: u.ANM.PHONE,
              body: { phone_token: e, password: o, change_phone_reason: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          addPhoneWithoutPassword: (e) =>
            a.tn.post({
              url: u.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
              rejectWithError: !1,
            }),
          beginReverifyPhone: (e, o) =>
            a.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: o },
              rejectWithError: !1,
            }),
          reverifyPhone: (e, o, n) =>
            a.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: o, change_phone_reason: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          validatePhoneForSupport: (e) =>
            a.tn.post({
              url: u.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          async verifyPhone(e, o) {
            let n =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              t =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = {},
              a = s.default.getFingerprint();
            null != a && "" !== a && (r["X-Fingerprint"] = a),
              t && (r.authorization = "");
            let _ = await d.Z.post({
              url: u.ANM.VERIFY_PHONE,
              headers: r,
              body: { phone: e, code: o },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE,
              },
              rejectWithError: !1,
            });
            return n && c.Z.dispatch({ type: "MODAL_POP", key: l.M }), _.body;
          },
        });
    },
    815660: function (e, o, n) {
      n.d(o, {
        M: function () {
          return t;
        },
        z: function () {
          return r;
        },
      });
      let t = "PHONE_VERIFICATION_MODAL_KEY",
        r = 6;
    },
    537416: function (e, o, n) {
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
    655640: function (e, o, n) {
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
    182227: function (e, o, n) {
      e.exports = {
        termsRow: "termsRow_fb1388",
        termsRowContent: "termsRowContent_fb1388",
        checkbox: "checkbox_fb1388",
        verifyConfirmText: "verifyConfirmText_fb1388",
        disabledFieldBackground: "disabledFieldBackground_fb1388",
        termsFieldBody: "termsFieldBody_fb1388",
        paragraphFieldBody: "paragraphFieldBody_fb1388",
        multipleChoiceIcon: "multipleChoiceIcon_fb1388",
      };
    },
  },
]);
//# sourceMappingURL=213d75d7a46a31d05ebc.js.map
