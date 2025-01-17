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
    852860: function (e, n, o) {
      o(47120);
      var t = o(200651),
        r = o(192379),
        i = o(642128),
        a = o(692547),
        s = o(481060),
        c = o(585483),
        l = o(981631),
        u = o(388032),
        d = o(840814);
      n.Z = function (e) {
        var n;
        let {
            message: o,
            errorMessage: _,
            submitting: b,
            onReset: f,
            onSave: m,
            onSaveText: p,
            onResetText: h,
            onSaveButtonColor: C,
            disabled: E,
            saveButtonTooltip: g,
          } = e,
          N = r.useRef(null),
          [{ spring: I }, x] = (0, s.useSpring)(() => ({ spring: 0 }));
        r.useEffect(() => {
          function e() {
            x({ spring: 1, config: i.config.gentle }),
              x({ spring: 0, config: i.config.gentle, delay: 1e3 });
          }
          return (
            c.S.subscribe(l.CkL.EMPHASIZE_NOTICE, e),
            () => {
              c.S.unsubscribe(l.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [x]);
        let R = I.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.TEXT_NORMAL).hex(),
              (0, s.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          T = I.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, s.useToken)(a.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          B = I.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.TEXT_DANGER).hex(),
              (0, s.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, t.jsx)(i.animated.div, {
          className: d.container,
          style: { backgroundColor: T },
          children: (0, t.jsx)("div", {
            className: d.flexContainer,
            ref: N,
            children: (0, t.jsxs)(s.FocusRingScope, {
              containerRef: N,
              children: [
                (0, t.jsx)("div", {
                  className: d.shrinkingContainer,
                  children: (0, t.jsx)(i.animated.div, {
                    className: d.message,
                    style: { color: null != _ ? B : R },
                    children:
                      null !== (n = null != _ ? _ : o) && void 0 !== n
                        ? n
                        : u.intl.string(u.t.GP7JLC),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: d.actions,
                  children: [
                    null != f &&
                      (0, t.jsx)(s.Button, {
                        className: d.resetButton,
                        size: s.Button.Sizes.SMALL,
                        color: s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        onClick: f,
                        children: (0, t.jsx)(i.animated.span, {
                          style: { color: R },
                          children: null != h ? h : u.intl.string(u.t.yBZMsb),
                        }),
                      }),
                    null != m
                      ? (0, t.jsx)(s.Tooltip, {
                          text: g,
                          children: (e) =>
                            (0, t.jsx)(s.Button, {
                              size: s.Button.Sizes.SMALL,
                              color: null != C ? C : s.Button.Colors.GREEN,
                              submitting: b,
                              disabled: E,
                              onClick: m,
                              ...e,
                              children:
                                null != p ? p : u.intl.string(u.t.K344S0),
                            }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    645264: function (e, n, o) {
      o.r(n);
      var t = o(200651),
        r = o(192379),
        i = o(442837),
        a = o(215569),
        s = o(481060),
        c = o(852860),
        l = o(313201),
        u = o(944163),
        d = o(266395),
        _ = o(200305),
        b = o(592286),
        f = o(388032),
        m = o(832311);
      let p = () =>
        (0, t.jsx)(c.Z, {
          submitting: !1,
          message: f.intl.string(f.t["8g514e"]),
          onReset: () => {
            (0, d.PE)(!1);
          },
          onResetText: f.intl.string(f.t["ETE/oK"]),
          onSave: () => {
            (0, d.PE)(!1), (0, s.closeModal)(b.Pn);
          },
          onSaveText: f.intl.string(f.t["Xt+UaW"]),
          onSaveButtonColor: s.ButtonColors.RED,
        });
      n.default = (e) => {
        let {
            guildId: n,
            transitionState: o,
            onClose: c,
            onComplete: b,
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
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(s.ModalRoot, {
                  size: s.ModalSize.MEDIUM,
                  className: m.container,
                  transitionState: o,
                  "aria-labelledby": E,
                  children: [
                    (0, t.jsx)(s.ModalCloseButton, {
                      onClick: () => c(!1),
                      className: m.closeButton,
                    }),
                    (0, t.jsx)(_.Z, {
                      headerId: E,
                      guildId: n,
                      onClose: c,
                      onComplete: b,
                      isPreview: f,
                    }),
                  ],
                }),
                (0, t.jsx)(a.W, {
                  children:
                    !0 === h &&
                    (0, t.jsx)(s.SlideIn, {
                      className: m.notice,
                      children: (0, t.jsx)(p, {}),
                    }),
                }),
              ],
            });
      };
    },
    144114: function (e, n, o) {
      o.d(n, {
        L: function () {
          return r;
        },
      });
      var t,
        r,
        i = o(990547),
        a = o(544891),
        s = o(570140),
        c = o(314897),
        l = o(573261),
        u = o(815660),
        d = o(981631);
      ((t = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (t.USER_SETTINGS_UPDATE = "user_settings_update"),
        (t.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (t.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (t.CONTACT_SYNC = "contact_sync"),
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
              o = c.default.getFingerprint();
            return (
              null != o && "" !== o && (n["X-Fingerprint"] = o),
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
          addPhone: (e, n, o) =>
            a.tn.post({
              url: d.ANM.PHONE,
              body: { phone_token: e, password: n, change_phone_reason: o },
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
          reverifyPhone: (e, n, o) =>
            a.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: n, change_phone_reason: o },
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
            let o =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              t =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = {},
              a = c.default.getFingerprint();
            null != a && "" !== a && (r["X-Fingerprint"] = a),
              t && (r.authorization = "");
            let _ = await l.Z.post({
              url: d.ANM.VERIFY_PHONE,
              headers: r,
              body: { phone: e, code: n },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE,
              },
              rejectWithError: !1,
            });
            return o && s.Z.dispatch({ type: "MODAL_POP", key: u.M }), _.body;
          },
        });
    },
    815660: function (e, n, o) {
      o.d(n, {
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
    840814: function (e, n, o) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    832311: function (e, n, o) {
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
    933078: function (e, n, o) {
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
    119866: function (e, n, o) {
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
    130948: function (e, n, o) {
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
    484979: function (e, n, o) {
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
//# sourceMappingURL=63a143b2e149f6e5f839.js.map
