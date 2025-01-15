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
        r = i(325067),
        l = i(981631);
      function a(e, t) {
        return (
          o.Z.dispatch({ type: "MFA_SMS_TOGGLE" }),
          n.tn
            .post({
              url: e,
              body: { password: t },
              oldFormErrors: !0,
              rejectWithError: !1,
            })
            .then(
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
              rejectWithError: !1,
            })
          ).body,
        verifyEmailCode: async (e) =>
          (
            await n.tn.post({
              url: l.ANM.MFA_TOTP_ENABLE_VERIFY,
              body: { code: e },
              rejectWithError: !1,
            })
          ).body,
        resendEmailCode: (e) =>
          n.tn.post({
            url: l.ANM.MFA_TOTP_ENABLE_RESEND,
            body: { password: e },
            rejectWithError: !1,
          }),
        setEmailToken(e) {
          o.Z.dispatch({ type: "MFA_ENABLE_EMAIL_TOKEN", token: e });
        },
        enable(e) {
          let { password: t, code: i, secret: r, emailToken: a } = e;
          return n.tn
            .post({
              url: l.ANM.MFA_TOTP_ENABLE,
              body: { code: i, secret: r, password: t, email_token: a },
              oldFormErrors: !0,
              rejectWithError: !1,
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
            .post({
              url: l.ANM.MFA_TOTP_DISABLE,
              oldFormErrors: !0,
              rejectWithError: !1,
            })
            .then((e) => {
              let {
                body: { token: t },
              } = e;
              return o.Z.dispatch({ type: "MFA_DISABLE_SUCCESS", token: t });
            });
        },
        enableSMS: (e) => a(l.ANM.MFA_SMS_ENABLE, e),
        disableSMS: (e) => a(l.ANM.MFA_SMS_DISABLE, e),
        sendMFABackupCodesVerificationKeyEmail: (e) =>
          n.tn
            .post({
              url: l.ANM.MFA_SEND_VERIFICATION_KEY,
              body: { password: e },
              oldFormErrors: !0,
              rejectWithError: !1,
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
          let { viewNonce: i, regenerateNonce: a } = r.Z.getNonces();
          return n.tn
            .post({
              url: l.ANM.MFA_CODES_VERIFICATION,
              body: { key: e, nonce: t ? a : i, regenerate: t },
              oldFormErrors: !0,
              rejectWithError: !1,
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
        r = i.n(o),
        l = i(692547),
        a = i(481060);
      i(651711);
      var s = i(551556);
      i(388032);
      var c = i(681867);
      i(347157), i(177266);
      let d = (e) => {
        let {
            name: t,
            description: i,
            checked: o,
            actionLabel: d,
            actionHandler: u,
          } = e,
          E = null;
        return (
          (E = o
            ? (0, n.jsx)(s.Z, { width: 20, height: 20 })
            : (0, n.jsx)(a.CircleXIcon, {
                size: "custom",
                color: l.Z.unsafe_rawColors.RED_400.css,
                width: 20,
                height: 20,
              })),
          (0, n.jsxs)("div", {
            className: c.checklistItem,
            children: [
              (0, n.jsx)("div", { className: c.checklistIcon, children: E }),
              (0, n.jsxs)("div", {
                className: r()(c.__invalid_checklistText, o && c.ineligibleRow),
                children: [
                  (0, n.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    className: c.checklistItemName,
                    children: t,
                  }),
                  (0, n.jsx)(a.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: i,
                  }),
                ],
              }),
              null != d &&
                (0, n.jsx)("div", {
                  className: c.eligibilityActionContainer,
                  children: (0, n.jsx)(a.Button, {
                    className: c.eligibilityActionButton,
                    look: a.ButtonLooks.OUTLINED,
                    color: a.ButtonColors.PRIMARY,
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
        r = i(481060),
        l = i(651711),
        a = i(434404),
        s = i(202858),
        c = i(587431),
        d = i(400842),
        u = i(271267),
        E = i(981631),
        _ = i(388032),
        h = i(141841),
        M = i(653904);
      function b() {
        return (0, n.jsxs)("div", {
          className: h.eligibilityHeader,
          children: [
            (0, n.jsx)(r.Heading, {
              className: h.eligibilityHeaderText,
              variant: "heading-lg/extrabold",
              color: "header-primary",
              children: _.intl.string(_.t["3s47iI"]),
            }),
            (0, n.jsx)("img", {
              className: h.eligibilityHeaderImage,
              src: M,
              alt: "",
            }),
            (0, n.jsx)(r.ModalCloseButton, {
              className: h.eligibilityHeaderCloseButton,
              onClick: () => {
                (0, r.closeModal)(u.Q);
              },
            }),
          ],
        });
      }
      function A(e) {
        let {
            eligibility: t,
            eligibilityLoading: i,
            eligibilityError: _,
            guildId: M,
            onEligibilityBecameStale: b,
          } = e,
          A = o.useMemo(
            () => ({
              onEligibilityBecameStale: b,
              sortedByIneligible: !0,
              actions: {
                onEnableMFAClick: s.ZP.enableMFA,
                onRequireModeratorMFAClick: () => {
                  (0, r.closeModal)(u.Q),
                    a.Z.open(M, E.pNK.SAFETY, void 0, E.KsC.SAFETY_PERMISSIONS);
                },
              },
            }),
            [M, b],
          ),
          g = (0, l.Z)(t, A);
        return null != _
          ? (0, n.jsx)("div", {
              className: h.paddedContainer,
              children: (0, n.jsx)(c.Z, { children: _.message }),
            })
          : null == g || i
            ? (0, n.jsx)("div", {
                className: h.paddedContainer,
                children: (0, n.jsx)(r.Spinner, {}),
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
                        t < g.length - 1 ? (0, n.jsx)(r.FormDivider, {}) : null,
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
          refreshEligibility: l,
          guildId: a,
          transitionState: s,
        } = e;
        return (0, n.jsxs)(r.ModalRoot, {
          className: h.eligibilityModal,
          size: r.ModalSize.MEDIUM,
          transitionState: s,
          children: [
            (0, n.jsx)(b, {}),
            (0, n.jsx)(r.ModalContent, {
              children: (0, n.jsx)(A, {
                eligibility: t,
                eligibilityLoading: i,
                eligibilityError: o,
                guildId: a,
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
      var n = i(200651);
      i(192379);
      var o = i(692547),
        r = i(331595);
      function l(e) {
        let {
          width: t = 24,
          height: i = 24,
          color: l = o.Z.unsafe_rawColors.WHITE_500.css,
          backgroundColor: a = o.Z.unsafe_rawColors.BRAND_500.css,
          ...s
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, r.Z)(s),
          width: t,
          height: i,
          viewBox: "0 0 14 14",
          children: [
            (0, n.jsx)("path", {
              fill: a,
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
          return _;
        },
      }),
        i(411104),
        i(47120);
      var n = i(200651),
        o = i(192379),
        r = i(283693),
        l = i(481060),
        a = i(816814),
        s = i(200483),
        c = i(981631),
        d = i(388032);
      function u(e) {
        let { onError: t, onSuccess: i, PasswordConfirm: l, ...s } = e,
          [u, E] = o.useState("");
        return (0, n.jsx)(l, {
          ...s,
          handleSubmit: (e) => a.Z.enableMFAStart(e),
          onError: (e) => {
            var n;
            if (
              ("object" == typeof (n = e) &&
              null != n &&
              (0, r.nr)(n, "code") &&
              "number" == typeof n.code
                ? n.code
                : 0) === c.evJ.MFA_INVALID_SECRET
            )
              i(u), s.onClose();
            else t(e);
          },
          onPasswordChange: E,
          title: d.intl.string(d.t.cDgKtb),
          actionText: d.intl.string(d.t["3PatS0"]),
          skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET,
        });
      }
      function E(e, t) {
        return new Promise((o) => {
          (0, l.openModalLazy)(async () => {
            let { default: r } = await Promise.all([
              i.e("57830"),
              i.e("23746"),
            ]).then(i.bind(i, 837651));
            return (i) =>
              (0, n.jsx)(r, {
                ...i,
                password: e,
                emailToken: t,
                handleEnableMFASuccess: o,
              });
          });
        });
      }
      function _() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return new Promise((t) => {
          (0, l.openModalLazy)(
            async () => {
              let { default: t } = await Promise.all([
                i.e("76540"),
                i.e("61663"),
              ]).then(i.bind(i, 628908));
              return (i) => (0, n.jsx)(t, { ...i, isTotp: e });
            },
            { onCloseCallback: t, onCloseRequest: c.VqG },
          );
        });
      }
      async function h() {
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
                  onFormSubmit: async (e) => await a.Z.verifyEmailCode(e),
                  onResend: async () => {
                    await a.Z.resendEmailCode(t);
                  },
                  onSuccess: e,
                  headerText: d.intl.string(d.t.jMGc4O),
                  confirmButtonText: d.intl.string(d.t.PDTjLC),
                });
            });
          }));
          await E(e, null == o ? void 0 : o.token);
        } else await E(e);
        await _();
      }
      t.ZP = { enableMFA: h };
    },
    325067: function (e, t, i) {
      var n,
        o,
        r,
        l,
        a = i(392711),
        s = i.n(a),
        c = i(213919),
        d = i(442837),
        u = i(570140);
      let E = !1,
        _ = [],
        h = "",
        M = "",
        b = !1,
        A = { viewNonce: "", regenerateNonce: "" };
      class g extends (l = d.ZP.Store) {
        getVerificationKey() {
          return h;
        }
        getBackupCodes() {
          return _;
        }
        get togglingSMS() {
          return E;
        }
        getNonces() {
          return A;
        }
        get emailToken() {
          return M;
        }
        get hasSeenBackupPrompt() {
          return b;
        }
      }
      (r = "MFAStore"),
        (o = "displayName") in (n = g)
          ? Object.defineProperty(n, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[o] = r),
        (t.Z = new g(u.Z, {
          MFA_ENABLE_SUCCESS: function (e) {
            let { token: t, codes: i } = e;
            void 0 !== t && c.setToken(t), (_ = i);
          },
          MFA_ENABLE_EMAIL_TOKEN: function (e) {
            let { token: t } = e;
            M = t;
          },
          MFA_DISABLE_SUCCESS: function (e) {
            let { token: t } = e;
            c.setToken(t);
          },
          MFA_SMS_TOGGLE: function () {
            E = !0;
          },
          MFA_SMS_TOGGLE_COMPLETE: function () {
            E = !1;
          },
          MFA_CLEAR_BACKUP_CODES: function () {
            _ = [];
          },
          MFA_VIEW_BACKUP_CODES: function (e) {
            let { codes: t, key: i } = e;
            (_ = s().sortBy(t, "code")), (h = i);
          },
          MFA_SEND_VERIFICATION_KEY: function (e) {
            let { nonces: t } = e;
            A = t;
          },
          MFA_SEEN_BACKUP_CODE_PROMPT: function () {
            b = !0;
          },
        }));
    },
    681867: function (e, t, i) {
      e.exports = {
        checklistItem: "checklistItem_d2fe06",
        checklistIcon: "checklistIcon_d2fe06",
        checklistItemName: "checklistItemName_d2fe06",
        ineligibleRow: "ineligibleRow_d2fe06",
        eligibilityActionContainer: "eligibilityActionContainer_d2fe06",
        eligibilityActionButton: "eligibilityActionButton_d2fe06",
      };
    },
    141841: function (e, t, i) {
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
//# sourceMappingURL=84889db254c87d9d5335.js.map
