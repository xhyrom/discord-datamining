"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36869"],
  {
    852860: function (n, o, e) {
      e(47120);
      var t = e(200651),
        i = e(192379),
        a = e(100621),
        r = e(692547),
        s = e(481060),
        l = e(585483),
        c = e(981631),
        u = e(388032),
        d = e(147768);
      o.Z = function (n) {
        var o;
        let {
            message: e,
            errorMessage: _,
            submitting: f,
            onReset: b,
            onSave: p,
            onSaveText: m,
            onResetText: E,
            onSaveButtonColor: h,
            disabled: g,
            saveButtonTooltip: C,
          } = n,
          N = i.useRef(null),
          [{ spring: I }, R] = (0, s.useSpring)(() => ({ spring: 0 }));
        i.useEffect(() => {
          function n() {
            R({ spring: 1, config: a.config.gentle }),
              R({ spring: 0, config: a.config.gentle, delay: 1e3 });
          }
          return (
            l.S.subscribe(c.CkL.EMPHASIZE_NOTICE, n),
            () => {
              l.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, n);
            }
          );
        }, [R]);
        let T = I.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(r.Z.colors.TEXT_NORMAL).hex(),
              (0, s.useToken)(r.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          P = I.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(r.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, s.useToken)(r.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          S = I.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(r.Z.colors.TEXT_DANGER).hex(),
              (0, s.useToken)(r.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, t.jsx)(a.animated.div, {
          className: d.container,
          style: { backgroundColor: P },
          children: (0, t.jsx)("div", {
            className: d.flexContainer,
            ref: N,
            children: (0, t.jsxs)(s.FocusRingScope, {
              containerRef: N,
              children: [
                (0, t.jsx)("div", {
                  className: d.shrinkingContainer,
                  children: (0, t.jsx)(a.animated.div, {
                    className: d.message,
                    style: { color: null != _ ? S : T },
                    children:
                      null !== (o = null != _ ? _ : e) && void 0 !== o
                        ? o
                        : u.intl.string(u.t.GP7JLC),
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
                        children: (0, t.jsx)(a.animated.span, {
                          style: { color: T },
                          children: null != E ? E : u.intl.string(u.t.yBZMsb),
                        }),
                      }),
                    null != p
                      ? (0, t.jsx)(s.Tooltip, {
                          text: C,
                          children: (n) =>
                            (0, t.jsx)(s.Button, {
                              size: s.Button.Sizes.SMALL,
                              color: null != h ? h : s.Button.Colors.GREEN,
                              submitting: f,
                              disabled: g,
                              onClick: p,
                              ...n,
                              children:
                                null != m ? m : u.intl.string(u.t.K344S0),
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
    645264: function (n, o, e) {
      e.r(o);
      var t = e(200651),
        i = e(192379),
        a = e(442837),
        r = e(215569),
        s = e(481060),
        l = e(852860),
        c = e(313201),
        u = e(944163),
        d = e(266395),
        _ = e(200305),
        f = e(592286),
        b = e(388032),
        p = e(27471);
      let m = () =>
        (0, t.jsx)(l.Z, {
          submitting: !1,
          message: b.intl.string(b.t["8g514e"]),
          onReset: () => {
            (0, d.PE)(!1);
          },
          onResetText: b.intl.string(b.t["ETE/oK"]),
          onSave: () => {
            (0, d.PE)(!1), (0, s.closeModal)(f.Pn);
          },
          onSaveText: b.intl.string(b.t["Xt+UaW"]),
          onSaveButtonColor: s.ButtonColors.RED,
        });
      o.default = (n) => {
        let {
            guildId: o,
            transitionState: e,
            onClose: l,
            onComplete: f,
            isPreview: b = !1,
          } = n,
          E = (0, d.rb)((n) => n.shouldShowWarning),
          h = (0, a.e7)([u.Z], () => u.Z.get(o)),
          g = (0, c.Dt)();
        return (i.useEffect(() => {
          h === u.t && l();
        }, [l, h]),
        h === u.t)
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(s.ModalRoot, {
                  size: s.ModalSize.MEDIUM,
                  className: p.container,
                  transitionState: e,
                  "aria-labelledby": g,
                  children: [
                    (0, t.jsx)(s.ModalCloseButton, {
                      onClick: () => l(!1),
                      className: p.closeButton,
                    }),
                    (0, t.jsx)(_.Z, {
                      headerId: g,
                      guildId: o,
                      onClose: l,
                      onComplete: f,
                      isPreview: b,
                    }),
                  ],
                }),
                (0, t.jsx)(r.W, {
                  children:
                    !0 === E &&
                    (0, t.jsx)(s.SlideIn, {
                      className: p.notice,
                      children: (0, t.jsx)(m, {}),
                    }),
                }),
              ],
            });
      };
    },
    144114: function (n, o, e) {
      e.d(o, {
        L: function () {
          return i;
        },
      });
      var t,
        i,
        a = e(990547),
        r = e(544891),
        s = e(570140),
        l = e(314897),
        c = e(573261),
        u = e(815660),
        d = e(981631);
      ((t = i || (i = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (t.USER_SETTINGS_UPDATE = "user_settings_update"),
        (t.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (t.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (t.CONTACT_SYNC = "contact_sync"),
        (o.Z = {
          setCountryCode(n) {
            s.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: n });
          },
          removePhone: (n, o) =>
            r.tn.del({
              url: d.ANM.PHONE,
              body: { password: n, change_phone_reason: o },
              oldFormErrors: !0,
            }),
          resendCode(n) {
            let o = {},
              e = l.default.getFingerprint();
            return (
              null != e && "" !== e && (o["X-Fingerprint"] = e),
              r.tn.post({
                url: d.ANM.RESEND_PHONE,
                headers: o,
                body: { phone: n },
              })
            );
          },
          beginAddPhone: (n, o) =>
            r.tn.post({
              url: d.ANM.PHONE,
              body: { phone: n, change_phone_reason: o },
            }),
          addPhone: (n, o, e) =>
            r.tn.post({
              url: d.ANM.PHONE,
              body: { phone_token: n, password: o, change_phone_reason: e },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (n) =>
            r.tn.post({
              url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: n },
            }),
          beginReverifyPhone: (n, o) =>
            r.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone: n, change_phone_reason: o },
            }),
          reverifyPhone: (n, o, e) =>
            r.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone_token: n, password: o, change_phone_reason: e },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (n) =>
            r.tn.post({
              url: d.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: n },
              oldFormErrors: !0,
            }),
          async verifyPhone(n, o) {
            let e =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              t =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              i = {},
              r = l.default.getFingerprint();
            null != r && "" !== r && (i["X-Fingerprint"] = r),
              t && (i.authorization = "");
            let _ = await c.Z.post({
              url: d.ANM.VERIFY_PHONE,
              headers: i,
              body: { phone: n, code: o },
              oldFormErrors: !0,
              trackedActionData: {
                event: a.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return e && s.Z.dispatch({ type: "MODAL_POP", key: u.M }), _.body;
          },
        });
    },
    815660: function (n, o, e) {
      e.d(o, {
        M: function () {
          return t;
        },
        z: function () {
          return i;
        },
      });
      let t = "PHONE_VERIFICATION_MODAL_KEY",
        i = 6;
    },
    147768: function (n, o, e) {
      n.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    27471: function (n, o, e) {
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
//# sourceMappingURL=a14c2435f2fc89d4334b.js.map
