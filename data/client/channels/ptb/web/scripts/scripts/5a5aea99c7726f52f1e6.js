"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36869"],
  {
    645264: function (o, n, e) {
      e.r(n);
      var t = e(200651),
        r = e(192379),
        a = e(442837),
        i = e(215569),
        s = e(481060),
        l = e(852860),
        c = e(313201),
        d = e(944163),
        _ = e(266395),
        u = e(200305),
        f = e(592286),
        b = e(388032),
        p = e(832311);
      let E = () =>
        (0, t.jsx)(l.Z, {
          submitting: !1,
          message: b.intl.string(b.t["8g514e"]),
          onReset: () => {
            (0, _.PE)(!1);
          },
          onResetText: b.intl.string(b.t["ETE/oK"]),
          onSave: () => {
            (0, _.PE)(!1), (0, s.closeModal)(f.Pn);
          },
          onSaveText: b.intl.string(b.t["Xt+UaW"]),
          onSaveButtonColor: s.ButtonColors.RED,
        });
      n.default = (o) => {
        let {
            guildId: n,
            transitionState: e,
            onClose: l,
            onComplete: f,
            isPreview: b = !1,
          } = o,
          m = (0, _.rb)((o) => o.shouldShowWarning),
          h = (0, a.e7)([d.Z], () => d.Z.get(n)),
          N = (0, c.Dt)();
        return (r.useEffect(() => {
          h === d.t && l();
        }, [l, h]),
        h === d.t)
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(s.ModalRoot, {
                  size: s.ModalSize.MEDIUM,
                  className: p.container,
                  transitionState: e,
                  "aria-labelledby": N,
                  children: [
                    (0, t.jsx)(s.ModalCloseButton, {
                      onClick: () => l(!1),
                      className: p.closeButton,
                    }),
                    (0, t.jsx)(u.Z, {
                      headerId: N,
                      guildId: n,
                      onClose: l,
                      onComplete: f,
                      isPreview: b,
                    }),
                  ],
                }),
                (0, t.jsx)(i.W, {
                  children:
                    !0 === m &&
                    (0, t.jsx)(s.SlideIn, {
                      className: p.notice,
                      children: (0, t.jsx)(E, {}),
                    }),
                }),
              ],
            });
      };
    },
    144114: function (o, n, e) {
      e.d(n, {
        L: function () {
          return r;
        },
      });
      var t,
        r,
        a = e(990547),
        i = e(544891),
        s = e(570140),
        l = e(314897),
        c = e(573261),
        d = e(815660),
        _ = e(981631);
      ((t = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (t.USER_SETTINGS_UPDATE = "user_settings_update"),
        (t.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (t.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (t.CONTACT_SYNC = "contact_sync"),
        (n.Z = {
          setCountryCode(o) {
            s.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: o });
          },
          removePhone: (o, n) =>
            i.tn.del({
              url: _.ANM.PHONE,
              body: { password: o, change_phone_reason: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          resendCode(o) {
            let n = {},
              e = l.default.getFingerprint();
            return (
              null != e && "" !== e && (n["X-Fingerprint"] = e),
              i.tn.post({
                url: _.ANM.RESEND_PHONE,
                headers: n,
                body: { phone: o },
                rejectWithError: !1,
              })
            );
          },
          beginAddPhone: (o, n) =>
            i.tn.post({
              url: _.ANM.PHONE,
              body: { phone: o, change_phone_reason: n },
              rejectWithError: !1,
            }),
          addPhone: (o, n, e) =>
            i.tn.post({
              url: _.ANM.PHONE,
              body: { phone_token: o, password: n, change_phone_reason: e },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          addPhoneWithoutPassword: (o) =>
            i.tn.post({
              url: _.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: o },
              rejectWithError: !1,
            }),
          beginReverifyPhone: (o, n) =>
            i.tn.post({
              url: _.ANM.PHONE_REVERIFY,
              body: { phone: o, change_phone_reason: n },
              rejectWithError: !1,
            }),
          reverifyPhone: (o, n, e) =>
            i.tn.post({
              url: _.ANM.PHONE_REVERIFY,
              body: { phone_token: o, password: n, change_phone_reason: e },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          validatePhoneForSupport: (o) =>
            i.tn.post({
              url: _.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: o },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          async verifyPhone(o, n) {
            let e =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              t =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = {},
              i = l.default.getFingerprint();
            null != i && "" !== i && (r["X-Fingerprint"] = i),
              t && (r.authorization = "");
            let u = await c.Z.post({
              url: _.ANM.VERIFY_PHONE,
              headers: r,
              body: { phone: o, code: n },
              oldFormErrors: !0,
              trackedActionData: {
                event: a.NetworkActionNames.USER_VERIFY_PHONE,
              },
              rejectWithError: !1,
            });
            return e && s.Z.dispatch({ type: "MODAL_POP", key: d.M }), u.body;
          },
        });
    },
    815660: function (o, n, e) {
      e.d(n, {
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
    832311: function (o, n, e) {
      o.exports = {
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
//# sourceMappingURL=5a5aea99c7726f52f1e6.js.map
