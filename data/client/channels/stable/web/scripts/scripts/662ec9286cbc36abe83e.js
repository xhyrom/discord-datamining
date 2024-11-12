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
        l = i(325067),
        a = i(981631);
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
              url: a.ANM.MFA_TOTP_ENABLE,
              body: { password: e },
              oldFormErrors: !0,
            })
          ).body,
        verifyEmailCode: async (e) =>
          (
            await n.tn.post({
              url: a.ANM.MFA_TOTP_ENABLE_VERIFY,
              body: { code: e },
            })
          ).body,
        resendEmailCode: (e) =>
          n.tn.post({
            url: a.ANM.MFA_TOTP_ENABLE_RESEND,
            body: { password: e },
          }),
        setEmailToken(e) {
          o.Z.dispatch({ type: "MFA_ENABLE_EMAIL_TOKEN", token: e });
        },
        enable(e) {
          let { password: t, code: i, secret: l, emailToken: r } = e;
          return n.tn
            .post({
              url: a.ANM.MFA_TOTP_ENABLE,
              body: { code: i, secret: l, password: t, email_token: r },
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
            .post({ url: a.ANM.MFA_TOTP_DISABLE, oldFormErrors: !0 })
            .then((e) => {
              let {
                body: { token: t },
              } = e;
              return o.Z.dispatch({ type: "MFA_DISABLE_SUCCESS", token: t });
            });
        },
        enableSMS: (e) => r(a.ANM.MFA_SMS_ENABLE, e),
        disableSMS: (e) => r(a.ANM.MFA_SMS_DISABLE, e),
        sendMFABackupCodesVerificationKeyEmail: (e) =>
          n.tn
            .post({
              url: a.ANM.MFA_SEND_VERIFICATION_KEY,
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
          let { viewNonce: i, regenerateNonce: r } = l.Z.getNonces();
          return n.tn
            .post({
              url: a.ANM.MFA_CODES_VERIFICATION,
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
      var n = i(200651);
      i(192379);
      var o = i(120356),
        l = i.n(o),
        a = i(692547),
        r = i(481060);
      i(651711);
      var s = i(551556);
      i(388032);
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
                color: a.Z.unsafe_rawColors.RED_400.css,
                width: 20,
                height: 20,
              })),
          (0, n.jsxs)("div", {
            className: c.checklistItem,
            children: [
              (0, n.jsx)("div", { className: c.checklistIcon, children: _ }),
              (0, n.jsxs)("div", {
                className: l()(c.__invalid_checklistText, o && c.ineligibleRow),
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
            return g;
          },
        });
      var n = i(200651),
        o = i(192379),
        l = i(481060),
        a = i(651711),
        r = i(434404),
        s = i(202858),
        c = i(587431),
        d = i(400842),
        u = i(271267),
        _ = i(981631),
        E = i(388032),
        M = i(451399),
        b = i(653904);
      function A() {
        return (0, n.jsxs)("div", {
          className: M.eligibilityHeader,
          children: [
            (0, n.jsx)(l.Heading, {
              className: M.eligibilityHeaderText,
              variant: "heading-lg/extrabold",
              color: "header-primary",
              children: E.intl.string(E.t["3s47iI"]),
            }),
            (0, n.jsx)("img", {
              className: M.eligibilityHeaderImage,
              src: b,
              alt: "",
            }),
            (0, n.jsx)(l.ModalCloseButton, {
              className: M.eligibilityHeaderCloseButton,
              onClick: () => {
                (0, l.closeModal)(u.Q);
              },
            }),
          ],
        });
      }
      function h(e) {
        let {
            eligibility: t,
            eligibilityLoading: i,
            eligibilityError: E,
            guildId: b,
            onEligibilityBecameStale: A,
          } = e,
          h = o.useMemo(
            () => ({
              onEligibilityBecameStale: A,
              sortedByIneligible: !0,
              actions: {
                onEnableMFAClick: s.ZP.enableMFA,
                onRequireModeratorMFAClick: () => {
                  (0, l.closeModal)(u.Q),
                    r.Z.open(b, _.pNK.SAFETY, void 0, _.KsC.SAFETY_PERMISSIONS);
                },
              },
            }),
            [b, A],
          ),
          g = (0, a.Z)(t, h);
        return null != E
          ? (0, n.jsx)("div", {
              className: M.paddedContainer,
              children: (0, n.jsx)(c.Z, { children: E.message }),
            })
          : null == g || i
            ? (0, n.jsx)("div", {
                className: M.paddedContainer,
                children: (0, n.jsx)(l.Spinner, {}),
              })
            : (0, n.jsx)("div", {
                children: g.map((e, t) =>
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
                        t < g.length - 1 ? (0, n.jsx)(l.FormDivider, {}) : null,
                      ],
                    },
                    e.checkedLabel,
                  ),
                ),
              });
      }
      function g(e) {
        let {
          eligibility: t,
          eligibilityLoading: i,
          eligibilityError: o,
          refreshEligibility: a,
          guildId: r,
          transitionState: s,
        } = e;
        return (0, n.jsxs)(l.ModalRoot, {
          className: M.eligibilityModal,
          size: l.ModalSize.MEDIUM,
          transitionState: s,
          children: [
            (0, n.jsx)(A, {}),
            (0, n.jsx)(l.ModalContent, {
              children: (0, n.jsx)(h, {
                eligibility: t,
                eligibilityLoading: i,
                eligibilityError: o,
                guildId: r,
                onEligibilityBecameStale: a,
              }),
            }),
          ],
        });
      }
    },
    551556: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = i(200651);
      i(192379);
      var o = i(692547),
        l = i(325767);
      function a(e) {
        let {
          width: t = 24,
          height: i = 24,
          color: a = o.Z.unsafe_rawColors.WHITE_500.css,
          backgroundColor: r = o.Z.unsafe_rawColors.BRAND_500.css,
          ...s
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.Z)(s),
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
              fill: a,
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
      var n = i(200651),
        o = i(192379),
        l = i(283693),
        a = i(481060),
        r = i(816814),
        s = i(200483),
        c = i(981631),
        d = i(388032);
      function u(e) {
        let { onError: t, onSuccess: i, PasswordConfirm: a, ...s } = e,
          [u, _] = o.useState("");
        return (0, n.jsx)(a, {
          ...s,
          handleSubmit: (e) => r.Z.enableMFAStart(e),
          onError: (e) => {
            var n;
            if (
              ("object" == typeof (n = e) &&
              null != n &&
              (0, l.nr)(n, "code") &&
              "number" == typeof n.code
                ? n.code
                : 0) === c.evJ.MFA_INVALID_SECRET
            )
              i(u), s.onClose();
            else t(e);
          },
          onPasswordChange: _,
          title: d.intl.string(d.t.cDgKtb),
          actionText: d.intl.string(d.t["3PatS0"]),
          skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET,
        });
      }
      function _(e, t) {
        return new Promise((o) => {
          (0, a.openModalLazy)(async () => {
            let { default: l } = await Promise.all([
              i.e("15812"),
              i.e("23746"),
            ]).then(i.bind(i, 837651));
            return (i) =>
              (0, n.jsx)(l, {
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
          (0, a.openModalLazy)(
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
          (0, a.openModalLazy)(async () => {
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
            (0, a.openModalLazy)(async () => {
              let { default: o } = await i.e("94566").then(i.bind(i, 965072));
              return (i) =>
                (0, n.jsx)(o, {
                  ...i,
                  onFormSubmit: async (e) => await r.Z.verifyEmailCode(e),
                  onResend: async () => {
                    await r.Z.resendEmailCode(t);
                  },
                  onSuccess: e,
                  headerText: d.intl.string(d.t.jMGc4O),
                  confirmButtonText: d.intl.string(d.t.PDTjLC),
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
        l,
        a,
        r = i(392711),
        s = i.n(r),
        c = i(213919),
        d = i(442837),
        u = i(570140);
      let _ = !1,
        E = [],
        M = "",
        b = "",
        A = !1,
        h = { viewNonce: "", regenerateNonce: "" };
      class g extends (a = d.ZP.Store) {
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
          return h;
        }
        get emailToken() {
          return b;
        }
        get hasSeenBackupPrompt() {
          return A;
        }
      }
      (l = "MFAStore"),
        (o = "displayName") in (n = g)
          ? Object.defineProperty(n, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[o] = l),
        (t.Z = new g(u.Z, {
          MFA_ENABLE_SUCCESS: function (e) {
            let { token: t, codes: i } = e;
            void 0 !== t && c.setToken(t), (E = i);
          },
          MFA_ENABLE_EMAIL_TOKEN: function (e) {
            let { token: t } = e;
            b = t;
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
            h = t;
          },
          MFA_SEEN_BACKUP_CODE_PROMPT: function () {
            A = !0;
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
//# sourceMappingURL=662ec9286cbc36abe83e.js.map
