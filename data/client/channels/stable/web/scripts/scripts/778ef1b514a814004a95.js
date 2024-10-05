"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21863"],
  {
    653904: function (e) {
      e.exports = "/assets/c3b863513170c96d1c0d.svg";
    },
    347157: function (e) {
      e.exports = "/assets/c75b814a4f1375382a35.svg";
    },
    816814: function (e, t, i) {
      var n = i(544891),
        o = i(570140),
        a = i(325067),
        l = i(981631);
      function r(e, t) {
        return (
          o.Z.dispatch({ type: "MFA_SMS_TOGGLE" }),
          n.tn.post({ url: e, body: { password: t }, oldFormErrors: !0 }).then(
            (e) => (o.Z.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e),
            (e) => {
              throw (o.Z.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e);
            },
          )
        );
      }
      t.Z = {
        enableMFAStart: async (e) =>
          (
            await n.tn.post({
              url: l.ANM.MFA_TOTP_ENABLE,
              body: { password: e },
              oldFormErrors: !0,
            })
          ).body,
        verifyEmailCode: async (e) =>
          (
            await n.tn.post({
              url: l.ANM.MFA_TOTP_ENABLE_VERIFY,
              body: { code: e },
            })
          ).body,
        resendEmailCode: (e) =>
          n.tn.post({
            url: l.ANM.MFA_TOTP_ENABLE_RESEND,
            body: { password: e },
          }),
        setEmailToken(e) {
          o.Z.dispatch({ type: "MFA_ENABLE_EMAIL_TOKEN", token: e });
        },
        enable(e) {
          let { password: t, code: i, secret: a, emailToken: r } = e;
          return n.tn
            .post({
              url: l.ANM.MFA_TOTP_ENABLE,
              body: { code: i, secret: a, password: t, email_token: r },
              oldFormErrors: !0,
            })
            .then((e) =>
              o.Z.dispatch({
                type: "MFA_ENABLE_SUCCESS",
                token: e.body.token,
                codes: e.body.backup_codes,
              }),
            );
        },
        disable() {
          n.tn
            .post({ url: l.ANM.MFA_TOTP_DISABLE, oldFormErrors: !0 })
            .then((e) => {
              let {
                body: { token: t },
              } = e;
              return o.Z.dispatch({ type: "MFA_DISABLE_SUCCESS", token: t });
            });
        },
        enableSMS: (e) => r(l.ANM.MFA_SMS_ENABLE, e),
        disableSMS: (e) => r(l.ANM.MFA_SMS_DISABLE, e),
        sendMFABackupCodesVerificationKeyEmail: (e) =>
          n.tn
            .post({
              url: l.ANM.MFA_SEND_VERIFICATION_KEY,
              body: { password: e },
              oldFormErrors: !0,
            })
            .then(
              (e) =>
                o.Z.dispatch({
                  type: "MFA_SEND_VERIFICATION_KEY",
                  nonces: {
                    viewNonce: e.body.nonce,
                    regenerateNonce: e.body.regenerate_nonce,
                  },
                }),
              (e) => {
                throw e;
              },
            ),
        confirmViewBackupCodes(e, t) {
          let { viewNonce: i, regenerateNonce: r } = a.Z.getNonces();
          return n.tn
            .post({
              url: l.ANM.MFA_CODES_VERIFICATION,
              body: { key: e, nonce: t ? r : i, regenerate: t },
              oldFormErrors: !0,
            })
            .then(
              (t) =>
                o.Z.dispatch({
                  type: "MFA_VIEW_BACKUP_CODES",
                  codes: t.body.backup_codes,
                  key: e,
                }),
              (e) => {
                throw e;
              },
            );
        },
        clearBackupCodes() {
          o.Z.dispatch({ type: "MFA_CLEAR_BACKUP_CODES" });
        },
      };
    },
    400842: function (e, t, i) {
      i.d(t, {
        d: function () {
          return d;
        },
      });
      var n = i(735250);
      i(470079);
      var o = i(120356),
        a = i.n(o),
        l = i(692547),
        r = i(481060);
      i(651711);
      var s = i(551556);
      i(689938);
      var c = i(703098);
      i(347157), i(177266);
      let d = (e) => {
        let {
            name: t,
            description: i,
            checked: o,
            actionLabel: d,
            actionHandler: u,
          } = e,
          _ = null;
        return (
          (_ = o
            ? (0, n.jsx)(s.Z, { width: 20, height: 20 })
            : (0, n.jsx)(r.CircleXIcon, {
                size: "custom",
                color: l.Z.unsafe_rawColors.RED_400.css,
                width: 20,
                height: 20,
              })),
          (0, n.jsxs)("div", {
            className: c.checklistItem,
            children: [
              (0, n.jsx)("div", { className: c.checklistIcon, children: _ }),
              (0, n.jsxs)("div", {
                className: a()(c.__invalid_checklistText, o && c.ineligibleRow),
                children: [
                  (0, n.jsx)(r.Heading, {
                    variant: "heading-md/semibold",
                    className: c.checklistItemName,
                    children: t,
                  }),
                  (0, n.jsx)(r.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: i,
                  }),
                ],
              }),
              null != d &&
                (0, n.jsx)("div", {
                  className: c.eligibilityActionContainer,
                  children: (0, n.jsx)(r.Button, {
                    className: c.eligibilityActionButton,
                    look: r.ButtonLooks.OUTLINED,
                    color: r.ButtonColors.PRIMARY,
                    onClick: u,
                    grow: !0,
                    children: d,
                  }),
                }),
            ],
          })
        );
      };
    },
    466501: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return h;
          },
        });
      var n = i(735250),
        o = i(470079),
        a = i(481060),
        l = i(651711),
        r = i(434404),
        s = i(202858),
        c = i(587431),
        d = i(400842),
        u = i(271267),
        _ = i(981631),
        E = i(689938),
        M = i(451399),
        A = i(653904);
      function b() {
        return (0, n.jsxs)("div", {
          className: M.eligibilityHeader,
          children: [
            (0, n.jsx)(a.Heading, {
              className: M.eligibilityHeaderText,
              variant: "heading-lg/extrabold",
              color: "header-primary",
              children:
                E.Z.Messages
                  .GUILD_ROLE_SUBSCRIPTION_SETTINGS_NOT_ELIGIBLE_TITLE_V2,
            }),
            (0, n.jsx)("img", {
              className: M.eligibilityHeaderImage,
              src: A,
              alt: "",
            }),
            (0, n.jsx)(a.ModalCloseButton, {
              className: M.eligibilityHeaderCloseButton,
              onClick: () => {
                (0, a.closeModal)(u.Q);
              },
            }),
          ],
        });
      }
      function C(e) {
        let {
            eligibility: t,
            eligibilityLoading: i,
            eligibilityError: E,
            guildId: A,
            onEligibilityBecameStale: b,
          } = e,
          C = o.useMemo(
            () => ({
              onEligibilityBecameStale: b,
              sortedByIneligible: !0,
              actions: {
                onEnableMFAClick: s.ZP.enableMFA,
                onRequireModeratorMFAClick: () => {
                  (0, a.closeModal)(u.Q),
                    r.Z.open(A, _.pNK.SAFETY, void 0, _.KsC.SAFETY_PERMISSIONS);
                },
              },
            }),
            [A, b],
          ),
          h = (0, l.Z)(t, C);
        return null != E
          ? (0, n.jsx)("div", {
              className: M.paddedContainer,
              children: (0, n.jsx)(c.Z, { children: E.message }),
            })
          : null == h || i
            ? (0, n.jsx)("div", {
                className: M.paddedContainer,
                children: (0, n.jsx)(a.Spinner, {}),
              })
            : (0, n.jsx)("div", {
                children: h.map((e, t) =>
                  (0, n.jsxs)(
                    o.Fragment,
                    {
                      children: [
                        (0, n.jsx)(d.d, {
                          name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                          description: e.description,
                          checked: e.checked,
                          actionLabel: e.actionLabel,
                          actionHandler: e.actionHandler,
                        }),
                        t < h.length - 1 ? (0, n.jsx)(a.FormDivider, {}) : null,
                      ],
                    },
                    e.checkedLabel,
                  ),
                ),
              });
      }
      function h(e) {
        let {
          eligibility: t,
          eligibilityLoading: i,
          eligibilityError: o,
          refreshEligibility: l,
          guildId: r,
          transitionState: s,
        } = e;
        return (0, n.jsxs)(a.ModalRoot, {
          className: M.eligibilityModal,
          size: a.ModalSize.MEDIUM,
          transitionState: s,
          children: [
            (0, n.jsx)(b, {}),
            (0, n.jsx)(a.ModalContent, {
              children: (0, n.jsx)(C, {
                eligibility: t,
                eligibilityLoading: i,
                eligibilityError: o,
                guildId: r,
                onEligibilityBecameStale: l,
              }),
            }),
          ],
        });
      }
    },
    551556: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = i(735250);
      i(470079);
      var o = i(692547),
        a = i(325767);
      function l(e) {
        let {
          width: t = 24,
          height: i = 24,
          color: l = o.Z.unsafe_rawColors.WHITE_500.css,
          backgroundColor: r = o.Z.unsafe_rawColors.BRAND_500.css,
          ...s
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, a.Z)(s),
          width: t,
          height: i,
          viewBox: "0 0 14 14",
          children: [
            (0, n.jsx)("path", {
              fill: r,
              d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166",
            }),
            (0, n.jsx)("path", {
              d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",
              fill: l,
            }),
          ],
        });
      }
    },
    200483: function (e, t, i) {
      i.d(t, {
        j: function () {
          return o;
        },
      });
      let n = (0, i(818083).B)({
        kind: "user",
        id: "2023-07_mfa_email_verification",
        label: "Safety Experience Mfa Email Verification",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o() {
        let { enabled: e } = n.getCurrentConfig(
          { location: "41ef90_2" },
          { autoTrackExposure: !0 },
        );
        return e;
      }
    },
    202858: function (e, t, i) {
      i.d(t, {
        Yn: function () {
          return E;
        },
      }),
        i(411104),
        i(47120);
      var n = i(735250),
        o = i(470079),
        a = i(283693),
        l = i(481060),
        r = i(816814),
        s = i(200483),
        c = i(981631),
        d = i(689938);
      function u(e) {
        let { onError: t, onSuccess: i, PasswordConfirm: l, ...s } = e,
          [u, _] = o.useState("");
        return (0, n.jsx)(l, {
          ...s,
          handleSubmit: (e) => r.Z.enableMFAStart(e),
          onError: (e) => {
            var n;
            if (
              ("object" == typeof (n = e) &&
              null != n &&
              (0, a.nr)(n, "code") &&
              "number" == typeof n.code
                ? n.code
                : 0) === c.evJ.MFA_INVALID_SECRET
            )
              i(u), s.onClose();
            else t(e);
          },
          onPasswordChange: _,
          title: d.Z.Messages.TWO_FA_ENABLE,
          actionText: d.Z.Messages.CONTINUE,
          skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET,
        });
      }
      function _(e, t) {
        return new Promise((o) => {
          (0, l.openModalLazy)(async () => {
            let { default: a } = await Promise.all([
              i.e("17139"),
              i.e("23746"),
            ]).then(i.bind(i, 837651));
            return (i) =>
              (0, n.jsx)(a, {
                ...i,
                password: e,
                emailToken: t,
                handleEnableMFASuccess: o,
              });
          });
        });
      }
      function E() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return new Promise((t) => {
          (0, l.openModalLazy)(
            async () => {
              let { default: t } = await Promise.all([
                i.e("76540"),
                i.e("17663"),
              ]).then(i.bind(i, 628908));
              return (i) => (0, n.jsx)(t, { ...i, isTotp: e });
            },
            { onCloseCallback: t, onCloseRequest: c.VqG },
          );
        });
      }
      async function M() {
        let e = await new Promise((e, t) => {
          (0, l.openModalLazy)(async () => {
            let { default: o } = await i.e("24642").then(i.bind(i, 279837));
            return (i) =>
              (0, n.jsx)(u, {
                ...i,
                onSuccess: e,
                onError: t,
                PasswordConfirm: o,
              });
          });
        });
        if ((0, s.j)()) {
          var t;
          let o = await ((t = e),
          new Promise((e) => {
            (0, l.openModalLazy)(async () => {
              let { default: o } = await i.e("94566").then(i.bind(i, 965072));
              return (i) =>
                (0, n.jsx)(o, {
                  ...i,
                  onFormSubmit: async (e) => await r.Z.verifyEmailCode(e),
                  onResend: async () => {
                    await r.Z.resendEmailCode(t);
                  },
                  onSuccess: e,
                  headerText:
                    d.Z.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
                  confirmButtonText: d.Z.Messages.NEXT,
                });
            });
          }));
          await _(e, null == o ? void 0 : o.token);
        } else await _(e);
        await E();
      }
      t.ZP = { enableMFA: M };
    },
    325067: function (e, t, i) {
      var n,
        o,
        a,
        l,
        r = i(392711),
        s = i.n(r),
        c = i(213919),
        d = i(442837),
        u = i(570140);
      let _ = !1,
        E = [],
        M = "",
        A = "",
        b = !1,
        C = { viewNonce: "", regenerateNonce: "" };
      class h extends (l = d.ZP.Store) {
        getVerificationKey() {
          return M;
        }
        getBackupCodes() {
          return E;
        }
        get togglingSMS() {
          return _;
        }
        getNonces() {
          return C;
        }
        get emailToken() {
          return A;
        }
        get hasSeenBackupPrompt() {
          return b;
        }
      }
      (a = "MFAStore"),
        (o = "displayName") in (n = h)
          ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[o] = a),
        (t.Z = new h(u.Z, {
          MFA_ENABLE_SUCCESS: function (e) {
            let { token: t, codes: i } = e;
            void 0 !== t && c.setToken(t), (E = i);
          },
          MFA_ENABLE_EMAIL_TOKEN: function (e) {
            let { token: t } = e;
            A = t;
          },
          MFA_DISABLE_SUCCESS: function (e) {
            let { token: t } = e;
            c.setToken(t);
          },
          MFA_SMS_TOGGLE: function () {
            _ = !0;
          },
          MFA_SMS_TOGGLE_COMPLETE: function () {
            _ = !1;
          },
          MFA_CLEAR_BACKUP_CODES: function () {
            E = [];
          },
          MFA_VIEW_BACKUP_CODES: function (e) {
            let { codes: t, key: i } = e;
            (E = s().sortBy(t, "code")), (M = i);
          },
          MFA_SEND_VERIFICATION_KEY: function (e) {
            let { nonces: t } = e;
            C = t;
          },
          MFA_SEEN_BACKUP_CODE_PROMPT: function () {
            b = !0;
          },
        }));
    },
    703098: function (e, t, i) {
      e.exports = {
        checklistItem: "checklistItem_d2fe06",
        checklistIcon: "checklistIcon_d2fe06",
        checklistItemName: "checklistItemName_d2fe06",
        ineligibleRow: "ineligibleRow_d2fe06",
        eligibilityActionContainer: "eligibilityActionContainer_d2fe06",
        eligibilityActionButton: "eligibilityActionButton_d2fe06",
      };
    },
    451399: function (e, t, i) {
      e.exports = {
        eligibilityModal: "eligibilityModal_ea0125",
        eligibilityHeader: "eligibilityHeader_ea0125",
        eligibilityHeaderText: "eligibilityHeaderText_ea0125",
        eligibilityHeaderImage: "eligibilityHeaderImage_ea0125",
        eligibilityHeaderCloseButton: "eligibilityHeaderCloseButton_ea0125",
        paddedContainer: "paddedContainer_ea0125",
      };
    },
  },
]);
//# sourceMappingURL=778ef1b514a814004a95.js.map
