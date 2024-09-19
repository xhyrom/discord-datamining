"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36869"],
  {
    852860: function (n, e, o) {
      o(47120);
      var t = o(735250),
        a = o(470079),
        i = o(526629),
        r = o(692547),
        s = o(481060),
        l = o(585483),
        c = o(981631),
        u = o(689938),
        d = o(147768);
      e.Z = function (n) {
        var e;
        let {
            message: o,
            errorMessage: _,
            submitting: f,
            onReset: b,
            onSave: E,
            onSaveText: p,
            onResetText: m,
            onSaveButtonColor: h,
            disabled: N,
            saveButtonTooltip: C,
          } = n,
          g = a.useRef(null),
          [{ spring: I }, R] = (0, s.useSpring)(() => ({ spring: 0 }));
        a.useEffect(() => {
          function n() {
            R({ spring: 1, config: i.config.gentle }),
              R({ spring: 0, config: i.config.gentle, delay: 1e3 });
          }
          return (
            l.S.subscribe(c.CkL.EMPHASIZE_NOTICE, n),
            () => {
              l.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, n);
            }
          );
        }, [R]);
        let S = I.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(r.Z.colors.TEXT_NORMAL).hex(),
              (0, s.useToken)(r.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          T = I.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(r.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, s.useToken)(r.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          A = I.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(r.Z.colors.TEXT_DANGER).hex(),
              (0, s.useToken)(r.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, t.jsx)(i.animated.div, {
          className: d.container,
          style: { backgroundColor: T },
          children: (0, t.jsx)("div", {
            className: d.flexContainer,
            ref: g,
            children: (0, t.jsxs)(s.FocusRingScope, {
              containerRef: g,
              children: [
                (0, t.jsx)("div", {
                  className: d.shrinkingContainer,
                  children: (0, t.jsx)(i.animated.div, {
                    className: d.message,
                    style: { color: null != _ ? A : S },
                    children:
                      null !== (e = null != _ ? _ : o) && void 0 !== e
                        ? e
                        : u.Z.Messages.SETTINGS_NOTICE_MESSAGE,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: d.actions,
                  children: [
                    null != b &&
                      (0, t.jsx)(s.Button, {
                        className: d.resetButton,
                        size: s.Button.Sizes.SMALL,
                        color: s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        onClick: b,
                        children: (0, t.jsx)(i.animated.span, {
                          style: { color: S },
                          children: null != m ? m : u.Z.Messages.RESET,
                        }),
                      }),
                    null != E
                      ? (0, t.jsx)(s.Tooltip, {
                          text: C,
                          children: (n) =>
                            (0, t.jsx)(s.Button, {
                              size: s.Button.Sizes.SMALL,
                              color: null != h ? h : s.Button.Colors.GREEN,
                              submitting: f,
                              disabled: N,
                              onClick: E,
                              ...n,
                              children:
                                null != p ? p : u.Z.Messages.SAVE_CHANGES,
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
    645264: function (n, e, o) {
      o.r(e);
      var t = o(735250),
        a = o(470079),
        i = o(442837),
        r = o(215569),
        s = o(481060),
        l = o(852860),
        c = o(313201),
        u = o(944163),
        d = o(266395),
        _ = o(200305),
        f = o(592286),
        b = o(689938),
        E = o(27471);
      let p = () =>
        (0, t.jsx)(l.Z, {
          submitting: !1,
          message: b.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
          onReset: () => {
            (0, d.PE)(!1);
          },
          onResetText: b.Z.Messages.CANCEL,
          onSave: () => {
            (0, d.PE)(!1), (0, s.closeModal)(f.Pn);
          },
          onSaveText: b.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
          onSaveButtonColor: s.ButtonColors.RED,
        });
      e.default = (n) => {
        let {
            guildId: e,
            transitionState: o,
            onClose: l,
            onComplete: f,
            isPreview: b = !1,
          } = n,
          m = (0, d.rb)((n) => n.shouldShowWarning),
          h = (0, i.e7)([u.Z], () => u.Z.get(e)),
          N = (0, c.Dt)();
        return (a.useEffect(() => {
          h === u.t && l();
        }, [l, h]),
        h === u.t)
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(s.ModalRoot, {
                  size: s.ModalSize.MEDIUM,
                  className: E.container,
                  transitionState: o,
                  "aria-labelledby": N,
                  children: [
                    (0, t.jsx)(s.ModalCloseButton, {
                      onClick: () => l(!1),
                      className: E.closeButton,
                    }),
                    (0, t.jsx)(_.Z, {
                      headerId: N,
                      guildId: e,
                      onClose: l,
                      onComplete: f,
                      isPreview: b,
                    }),
                  ],
                }),
                (0, t.jsx)(r.W, {
                  children:
                    !0 === m &&
                    (0, t.jsx)(s.SlideIn, {
                      className: E.notice,
                      children: (0, t.jsx)(p, {}),
                    }),
                }),
              ],
            });
      };
    },
    144114: function (n, e, o) {
      o.d(e, {
        L: function () {
          return a;
        },
      });
      var t,
        a,
        i = o(990547),
        r = o(544891),
        s = o(570140),
        l = o(314897),
        c = o(573261),
        u = o(815660),
        d = o(981631);
      ((t = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (t.USER_SETTINGS_UPDATE = "user_settings_update"),
        (t.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (t.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (t.CONTACT_SYNC = "contact_sync"),
        (e.Z = {
          setCountryCode(n) {
            s.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: n });
          },
          removePhone: (n, e) =>
            r.tn.del({
              url: d.ANM.PHONE,
              body: { password: n, change_phone_reason: e },
              oldFormErrors: !0,
            }),
          resendCode(n) {
            let e = {},
              o = l.default.getFingerprint();
            return (
              null != o && "" !== o && (e["X-Fingerprint"] = o),
              r.tn.post({
                url: d.ANM.RESEND_PHONE,
                headers: e,
                body: { phone: n },
              })
            );
          },
          beginAddPhone: (n, e) =>
            r.tn.post({
              url: d.ANM.PHONE,
              body: { phone: n, change_phone_reason: e },
            }),
          addPhone: (n, e, o) =>
            r.tn.post({
              url: d.ANM.PHONE,
              body: { phone_token: n, password: e, change_phone_reason: o },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (n) =>
            r.tn.post({
              url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: n },
            }),
          beginReverifyPhone: (n, e) =>
            r.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone: n, change_phone_reason: e },
            }),
          reverifyPhone: (n, e, o) =>
            r.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone_token: n, password: e, change_phone_reason: o },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (n) =>
            r.tn.post({
              url: d.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: n },
              oldFormErrors: !0,
            }),
          async verifyPhone(n, e) {
            let o =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              t =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              a = {},
              r = l.default.getFingerprint();
            null != r && "" !== r && (a["X-Fingerprint"] = r),
              t && (a.authorization = "");
            let _ = await c.Z.post({
              url: d.ANM.VERIFY_PHONE,
              headers: a,
              body: { phone: n, code: e },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return o && s.Z.dispatch({ type: "MODAL_POP", key: u.M }), _.body;
          },
        });
    },
    815660: function (n, e, o) {
      o.d(e, {
        M: function () {
          return t;
        },
        z: function () {
          return a;
        },
      });
      let t = "PHONE_VERIFICATION_MODAL_KEY",
        a = 6;
    },
    147768: function (n, e, o) {
      n.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    27471: function (n, e, o) {
      n.exports = {
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
  },
]);
//# sourceMappingURL=b4d82e6f71229a298445.js.map
