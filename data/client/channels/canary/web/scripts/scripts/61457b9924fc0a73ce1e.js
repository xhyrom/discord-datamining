"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70669"],
  {
    852860: function (e, n, t) {
      t(47120);
      var o = t(735250),
        r = t(470079),
        i = t(526629),
        a = t(692547),
        s = t(481060),
        l = t(585483),
        c = t(981631),
        u = t(689938),
        d = t(147768);
      n.Z = function (e) {
        var n;
        let {
            message: t,
            errorMessage: f,
            submitting: m,
            onReset: _,
            onSave: b,
            onSaveText: h,
            onResetText: p,
            onSaveButtonColor: C,
            disabled: E,
            saveButtonTooltip: x,
          } = e,
          I = r.useRef(null),
          [{ spring: N }, g] = (0, s.useSpring)(() => ({ spring: 0 }));
        r.useEffect(() => {
          function e() {
            g({ spring: 1, config: i.config.gentle }),
              g({ spring: 0, config: i.config.gentle, delay: 1e3 });
          }
          return (
            l.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e),
            () => {
              l.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [g]);
        let T = N.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.TEXT_NORMAL).hex(),
              (0, s.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          R = N.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, s.useToken)(a.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          j = N.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.TEXT_DANGER).hex(),
              (0, s.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, o.jsx)(i.animated.div, {
          className: d.container,
          style: { backgroundColor: R },
          children: (0, o.jsx)("div", {
            className: d.flexContainer,
            ref: I,
            children: (0, o.jsxs)(s.FocusRingScope, {
              containerRef: I,
              children: [
                (0, o.jsx)("div", {
                  className: d.shrinkingContainer,
                  children: (0, o.jsx)(i.animated.div, {
                    className: d.message,
                    style: { color: null != f ? j : T },
                    children:
                      null !== (n = null != f ? f : t) && void 0 !== n
                        ? n
                        : u.Z.Messages.SETTINGS_NOTICE_MESSAGE,
                  }),
                }),
                (0, o.jsxs)("div", {
                  className: d.actions,
                  children: [
                    null != _ &&
                      (0, o.jsx)(s.Button, {
                        className: d.resetButton,
                        size: s.Button.Sizes.SMALL,
                        color: s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        onClick: _,
                        children: (0, o.jsx)(i.animated.span, {
                          style: { color: T },
                          children: null != p ? p : u.Z.Messages.RESET,
                        }),
                      }),
                    null != b
                      ? (0, o.jsx)(s.Tooltip, {
                          text: x,
                          children: (e) =>
                            (0, o.jsx)(s.Button, {
                              size: s.Button.Sizes.SMALL,
                              color: null != C ? C : s.Button.Colors.GREEN,
                              submitting: m,
                              disabled: E,
                              onClick: b,
                              ...e,
                              children:
                                null != h ? h : u.Z.Messages.SAVE_CHANGES,
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
    983736: function (e, n, t) {
      t.d(n, {
        OA: function () {
          return a;
        },
        _C: function () {
          return l;
        },
        kT: function () {
          return s;
        },
      });
      var o = t(823379),
        r = t(246364),
        i = t(592286);
      let a = (e) => {
        let { required: n, response: t, field_type: i } = e;
        if (!n) return !0;
        if (null == t) return !1;
        switch (i) {
          case r.QJ.TERMS:
          case r.QJ.VERIFICATION:
            return !!t;
          case r.QJ.TEXT_INPUT:
          case r.QJ.PARAGRAPH:
            return "string" == typeof t && "" !== t.trim();
          case r.QJ.MULTIPLE_CHOICE:
            return "number" == typeof t;
          default:
            return (0, o.vE)(i);
        }
      };
      function s(e) {
        return i.lI.has(null == e ? void 0 : e.field_type);
      }
      function l(e) {
        return i.hZ.has(null == e ? void 0 : e.field_type);
      }
    },
    645264: function (e, n, t) {
      t.r(n);
      var o = t(735250),
        r = t(470079),
        i = t(442837),
        a = t(215569),
        s = t(481060),
        l = t(852860),
        c = t(313201),
        u = t(944163),
        d = t(266395),
        f = t(200305),
        m = t(592286),
        _ = t(689938),
        b = t(27471);
      let h = () =>
        (0, o.jsx)(l.Z, {
          submitting: !1,
          message: _.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
          onReset: () => {
            (0, d.PE)(!1);
          },
          onResetText: _.Z.Messages.CANCEL,
          onSave: () => {
            (0, d.PE)(!1), (0, s.closeModal)(m.Pn);
          },
          onSaveText: _.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
          onSaveButtonColor: s.ButtonColors.RED,
        });
      n.default = (e) => {
        let {
            guildId: n,
            transitionState: t,
            onClose: l,
            onComplete: m,
            isPreview: _ = !1,
          } = e,
          p = (0, d.rb)((e) => e.shouldShowWarning),
          C = (0, i.e7)([u.Z], () => u.Z.get(n)),
          E = (0, c.Dt)();
        return (r.useEffect(() => {
          C === u.t && l();
        }, [l, C]),
        C === u.t)
          ? null
          : (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsxs)(s.ModalRoot, {
                  size: s.ModalSize.MEDIUM,
                  className: b.container,
                  transitionState: t,
                  "aria-labelledby": E,
                  children: [
                    (0, o.jsx)(s.ModalCloseButton, {
                      onClick: () => l(!1),
                      className: b.closeButton,
                    }),
                    (0, o.jsx)(f.Z, {
                      headerId: E,
                      guildId: n,
                      onClose: l,
                      onComplete: m,
                      isPreview: _,
                    }),
                  ],
                }),
                (0, o.jsx)(a.W, {
                  children:
                    !0 === p &&
                    (0, o.jsx)(s.SlideIn, {
                      className: b.notice,
                      children: (0, o.jsx)(h, {}),
                    }),
                }),
              ],
            });
      };
    },
    489813: function (e, n, t) {
      t.d(n, {
        Ih: function () {
          return l;
        },
        PU: function () {
          return c;
        },
        hK: function () {
          return s;
        },
      });
      var o = t(735250);
      t(470079);
      var r = t(692547),
        i = t(481060),
        a = t(626166);
      function s(e) {
        let { title: n, children: t } = e;
        return (0, o.jsxs)("div", {
          className: a.questionContainer,
          children: [
            (0, o.jsx)(i.Text, {
              className: a.questionTitle,
              variant: "text-md/semibold",
              color: "header-primary",
              children: n,
            }),
            t,
          ],
        });
      }
      function l(e) {
        let { icon: n, text: t, meetsRequirement: s } = e;
        return (0, o.jsxs)("div", {
          className: a.requirementContainer,
          children: [
            (0, o.jsx)(n, {
              className: a.requirementIcon,
              height: 20,
              width: 20,
              size: "custom",
              color: "currentColor",
            }),
            (0, o.jsx)(i.Text, {
              className: a.requirementText,
              variant: "text-md/normal",
              children: t,
            }),
            s
              ? (0, o.jsx)(i.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  className: a.requirementSuccess,
                  secondaryColor: r.Z.colors.WHITE.css,
                })
              : (0, o.jsx)(i.CircleXIcon, {
                  size: "md",
                  color: "currentColor",
                  className: a.requirementFailure,
                  secondaryColor: r.Z.colors.WHITE.css,
                }),
          ],
        });
      }
      function c(e) {
        let {
          icon: n,
          text: t,
          footnote: s,
          meetsRequirement: l,
          children: c,
        } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              className: a.requirementContainer,
              children: [
                (0, o.jsx)(n, {
                  className: a.requirementIcon,
                  height: 20,
                  width: 20,
                  size: "custom",
                  color: "currentColor",
                }),
                (0, o.jsx)(i.Text, {
                  className: a.requirementText,
                  variant: "text-md/normal",
                  children: t,
                }),
                l
                  ? (0, o.jsx)(i.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: a.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css,
                    })
                  : c,
              ],
            }),
            null != s &&
              (0, o.jsx)(i.Text, {
                color: "header-secondary",
                className: a.footnote,
                variant: "text-xs/normal",
                children: s,
              }),
          ],
        });
      }
    },
    186078: function (e, n, t) {
      t.d(n, {
        BO: function () {
          return d;
        },
        QH: function () {
          return f;
        },
        sp: function () {
          return m;
        },
      });
      var o = t(735250),
        r = t(470079),
        i = t(120356),
        a = t.n(i),
        s = t(481060),
        l = t(489813),
        c = t(707592),
        u = t(738912);
      function d(e) {
        let {
            disabled: n,
            field: t,
            value: i,
            radioItemClassName: l,
            radioItemIconClassName: c,
            onChange: d,
          } = e,
          { choices: f } = t,
          m = r.useMemo(
            () =>
              f.map((e, n) => ({
                name: e,
                value: n,
                radioItemIconClassName: a()(u.multipleChoiceIcon, c),
              })),
            [f, c],
          );
        return (0, o.jsx)(s.RadioGroup, {
          disabled: n,
          options: m,
          value: i,
          onChange: d,
          radioItemClassName: l,
          withTransparentBackground: !0,
        });
      }
      function f(e) {
        let { formField: n } = e,
          t = null != n.response ? n.choices[n.response] : "";
        return (0, o.jsx)(l.hK, {
          title: n.label,
          children: (0, o.jsx)(c.Gi, {
            className: u.fieldBackground,
            value: t,
            disabled: !0,
          }),
        });
      }
      function m(e) {
        let { formField: n, onChange: t } = e;
        return (0, o.jsx)(l.hK, {
          title: n.label,
          children: (0, o.jsx)(d, {
            radioItemClassName: u.fieldBackground,
            field: n,
            value: n.response,
            onChange: t,
          }),
        });
      }
    },
    73880: function (e, n, t) {
      t.d(n, {
        Q8: function () {
          return u;
        },
        jn: function () {
          return d;
        },
        lX: function () {
          return f;
        },
      });
      var o = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        a = t(481060),
        s = t(489813),
        l = t(592286),
        c = t(738912);
      function u(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: s,
          className: u,
          autofocus: d,
        } = e;
        return (0, o.jsx)(a.TextArea, {
          className: i()(c.paragraphFieldBody, u),
          maxLength: l.RS,
          value: null != n ? n : "",
          placeholder: null != t ? t : "",
          onChange: r,
          disabled: s,
          autoFocus: d,
          autosize: !0,
        });
      }
      function d(e) {
        let { formField: n } = e;
        return (0, o.jsx)(s.hK, {
          title: n.label,
          children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            value: n.response,
            disabled: !0,
          }),
        });
      }
      function f(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, o.jsx)(s.hK, {
          title: n.label,
          children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            value: n.response,
            onChange: r,
            autofocus: t,
          }),
        });
      }
    },
    196345: function (e, n, t) {
      t.d(n, {
        EK: function () {
          return d;
        },
        G0: function () {
          return f;
        },
        QC: function () {
          return m;
        },
        dd: function () {
          return _;
        },
      }),
        t(47120);
      var o = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        a = t(481060),
        s = t(454585),
        l = t(489813),
        c = t(689938),
        u = t(738912);
      function d(e) {
        let { terms: n, channelId: t, className: r } = e;
        return (0, o.jsx)("div", {
          className: i()(u.termsFieldBody, r),
          children: n.map((e, n) =>
            (0, o.jsxs)(
              "div",
              {
                className: u.termsRow,
                children: [
                  (0, o.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(n + 1, "."),
                  }),
                  (0, o.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: u.termsRowContent,
                    children: s.Z.parseGuildVerificationFormRule(e, !0, {
                      channelId: t,
                    }),
                  }),
                ],
              },
              "term-".concat(n),
            ),
          ),
        });
      }
      function f(e) {
        let { onChange: n, checked: t, disabled: r } = e;
        return (0, o.jsx)(a.Checkbox, {
          size: 20,
          type: a.Checkbox.Types.INVERTED,
          value: t,
          onChange: n,
          disabled: r,
          style: { borderWidth: 2 },
          className: u.checkbox,
          children: (0, o.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: c.Z.Messages.MEMBER_VERIFICATION_READ_RULES,
          }),
        });
      }
      function m(e) {
        let { formField: n } = e;
        return (0, o.jsx)(l.Ih, {
          icon: a.BookCheckIcon,
          text: c.Z.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
          meetsRequirement: !!n.response,
        });
      }
      let _ = (e) => {
        let { channelId: n, formField: t, onChange: r } = e;
        return (0, o.jsxs)(l.hK, {
          title: c.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
          children: [
            (0, o.jsx)(d, {
              className: u.fieldBackground,
              terms: t.values,
              channelId: n,
            }),
            (0, o.jsx)(f, { onChange: r, checked: t.response }),
          ],
        });
      };
    },
    707592: function (e, n, t) {
      t.d(n, {
        Gi: function () {
          return u;
        },
        YJ: function () {
          return d;
        },
        zY: function () {
          return f;
        },
      });
      var o = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        a = t(481060),
        s = t(489813),
        l = t(592286),
        c = t(738912);
      function u(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: s,
          autofocus: u,
          className: d,
        } = e;
        return (0, o.jsx)(a.TextInput, {
          inputClassName: i()(c.textInputFieldBodyInput, d),
          maxLength: l.tL,
          value: null != n ? n : "",
          placeholder: t,
          onChange: r,
          disabled: s,
          autoFocus: u,
        });
      }
      function d(e) {
        let { formField: n } = e;
        return (0, o.jsx)(s.hK, {
          title: n.label,
          children: (0, o.jsx)(a.TextArea, {
            className: i()(c.textInputFieldBodyInput, c.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
          }),
        });
      }
      function f(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, o.jsx)(s.hK, {
          title: n.label,
          children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            onChange: r,
            value: n.response,
            autofocus: t,
          }),
        });
      }
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
        l = t(314897),
        c = t(573261),
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
            }),
          resendCode(e) {
            let n = {},
              t = l.default.getFingerprint();
            return (
              null != t && "" !== t && (n["X-Fingerprint"] = t),
              a.tn.post({
                url: d.ANM.RESEND_PHONE,
                headers: n,
                body: { phone: e },
              })
            );
          },
          beginAddPhone: (e, n) =>
            a.tn.post({
              url: d.ANM.PHONE,
              body: { phone: e, change_phone_reason: n },
            }),
          addPhone: (e, n, t) =>
            a.tn.post({
              url: d.ANM.PHONE,
              body: { phone_token: e, password: n, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (e) =>
            a.tn.post({
              url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
            }),
          beginReverifyPhone: (e, n) =>
            a.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: n },
            }),
          reverifyPhone: (e, n, t) =>
            a.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: n, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (e) =>
            a.tn.post({
              url: d.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
            }),
          async verifyPhone(e, n) {
            let t =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              o =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = {},
              a = l.default.getFingerprint();
            null != a && "" !== a && (r["X-Fingerprint"] = a),
              o && (r.authorization = "");
            let f = await c.Z.post({
              url: d.ANM.VERIFY_PHONE,
              headers: r,
              body: { phone: e, code: n },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return t && s.Z.dispatch({ type: "MODAL_POP", key: u.M }), f.body;
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
    147768: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    27471: function (e, n, t) {
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
    626166: function (e, n, t) {
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
    738912: function (e, n, t) {
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
  },
]);
//# sourceMappingURL=61457b9924fc0a73ce1e.js.map
