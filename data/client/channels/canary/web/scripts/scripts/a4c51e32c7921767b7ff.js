(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27580"],
  {
    817080: function (e) {
      var t =
        t ||
        (function (e) {
          "use strict";
          if (
            !(
              "undefined" != typeof navigator &&
              /MSIE [1-9]\./.test(navigator.userAgent)
            )
          ) {
            var t = e.document,
              n = function () {
                return e.URL || e.webkitURL || e;
              },
              o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              r = "download" in o,
              s = function (e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t);
              },
              a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
              i = e.webkitRequestFileSystem,
              l = e.requestFileSystem || i || e.mozRequestFileSystem,
              d = function (t) {
                (e.setImmediate || e.setTimeout)(function () {
                  throw t;
                }, 0);
              },
              c = "application/octet-stream",
              E = 0,
              u = function (e) {
                setTimeout(function () {
                  "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
                }, 4e4);
              },
              _ = function (e, t, n) {
                for (var o = (t = [].concat(t)).length; o--; ) {
                  var r = e["on" + t[o]];
                  if ("function" == typeof r)
                    try {
                      r.call(e, n || e);
                    } catch (e) {
                      d(e);
                    }
                }
              },
              h = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  e.type,
                )
                  ? new Blob(["\xef\xbb\xbf", e], { type: e.type })
                  : e;
              },
              p = function (t, d, p) {
                !p && (t = h(t));
                var f,
                  R,
                  I = this,
                  M = t.type,
                  N = !1,
                  A = function () {
                    _(I, "writestart progress write writeend".split(" "));
                  },
                  S = function () {
                    if (R && a && "undefined" != typeof FileReader) {
                      var o = new FileReader();
                      (o.onloadend = function () {
                        var e = o.result;
                        (R.location.href =
                          "data:attachment/file" + e.slice(e.search(/[,;]/))),
                          (I.readyState = I.DONE),
                          A();
                      }),
                        o.readAsDataURL(t),
                        (I.readyState = I.INIT);
                      return;
                    }
                    (N || !f) && (f = n().createObjectURL(t)),
                      R
                        ? (R.location.href = f)
                        : void 0 === e.open(f, "_blank") &&
                          a &&
                          (e.location.href = f),
                      (I.readyState = I.DONE),
                      A(),
                      u(f);
                  },
                  O = function (e) {
                    return function () {
                      if (I.readyState !== I.DONE)
                        return e.apply(this, arguments);
                    };
                  },
                  C = { create: !0, exclusive: !1 };
                if (((I.readyState = I.INIT), !d && (d = "download"), r)) {
                  (f = n().createObjectURL(t)),
                    setTimeout(function () {
                      (o.href = f),
                        (o.download = d),
                        s(o),
                        A(),
                        u(f),
                        (I.readyState = I.DONE);
                    });
                  return;
                }
                if (
                  (e.chrome &&
                    M &&
                    M !== c &&
                    ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, c)),
                    (N = !0)),
                  i && "download" !== d && (d += ".download"),
                  (M === c || i) && (R = e),
                  !l)
                ) {
                  S();
                  return;
                }
                (E += t.size),
                  l(
                    e.TEMPORARY,
                    E,
                    O(function (e) {
                      e.root.getDirectory(
                        "saved",
                        C,
                        O(function (e) {
                          var n = function () {
                            e.getFile(
                              d,
                              C,
                              O(function (e) {
                                e.createWriter(
                                  O(function (n) {
                                    (n.onwriteend = function (t) {
                                      (R.location.href = e.toURL()),
                                        (I.readyState = I.DONE),
                                        _(I, "writeend", t),
                                        u(e);
                                    }),
                                      (n.onerror = function () {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && S();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (e) {
                                          n["on" + e] = I["on" + e];
                                        }),
                                      n.write(t),
                                      (I.abort = function () {
                                        n.abort(), (I.readyState = I.DONE);
                                      }),
                                      (I.readyState = I.WRITING);
                                  }),
                                  S,
                                );
                              }),
                              S,
                            );
                          };
                          e.getFile(
                            d,
                            { create: !1 },
                            O(function (e) {
                              e.remove(), n();
                            }),
                            O(function (e) {
                              e.code === e.NOT_FOUND_ERR ? n() : S();
                            }),
                          );
                        }),
                        S,
                      );
                    }),
                    S,
                  );
              },
              f = p.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, n) {
                  return (
                    !n && (e = h(e)),
                    navigator.msSaveOrOpenBlob(e, t || "download")
                  );
                }
              : ((f.abort = function () {
                  (this.readyState = this.DONE), _(this, "abort");
                }),
                (f.readyState = f.INIT = 0),
                (f.WRITING = 1),
                (f.DONE = 2),
                (f.error =
                  f.onwritestart =
                  f.onprogress =
                  f.onwrite =
                  f.onabort =
                  f.onerror =
                  f.onwriteend =
                    null),
                function (e, t, n) {
                  return new p(e, t, n);
                });
          }
        })(
          ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window) ||
            this.content,
        );
      e.exports
        ? (e.exports.saveAs = t)
        : "undefined" != typeof define &&
          null !== define &&
          null !== define.amd &&
          define([], function () {
            return t;
          });
    },
    23645: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var o = n(470079),
        r = n(817080),
        s = n(579806),
        a = n(358085);
      class i extends o.Component {
        getFileContents() {
          let { fileContents: e } = this.props;
          return "function" == typeof e && (e = e()), e;
        }
        downloadNative(e, t) {
          s.Z.fileManager.saveWithDialog(e, t);
        }
        downloadHtml5(e, t) {
          let n = new Blob([e], { type: this.props.contentType });
          (0, r.saveAs)(n, t);
        }
        render() {
          let { children: e } = this.props,
            t = o.Children.only(e);
          return o.cloneElement(t, { onClick: this.handleFileDownload });
        }
        constructor(...e) {
          var t, n, o;
          super(...e),
            (t = this),
            (n = "handleFileDownload"),
            (o = (e) => {
              e.preventDefault();
              let t = this.getFileContents(),
                { fileName: n, onDownload: o } = this.props;
              a.isPlatformEmbedded
                ? this.downloadNative(t, n)
                : this.downloadHtml5(t, n),
                null == o || o();
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = o);
        }
      }
    },
    628908: function (e, t, n) {
      "use strict";
      n.r(t), n(47120);
      var o = n(735250),
        r = n(470079),
        s = n(512722),
        a = n.n(s),
        i = n(442837),
        l = n(481060),
        d = n(570140),
        c = n(816814),
        E = n(23645),
        u = n(600164),
        _ = n(454585),
        h = n(144114),
        p = n(607018),
        f = n(325067),
        R = n(594174),
        I = n(279837),
        M = n(981631),
        N = n(815660),
        A = n(689938),
        S = n(691844);
      function O(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let C = (e) => {
        let { label: t, text: n, children: r, ...s } = e;
        return (0, o.jsxs)(u.Z, {
          direction: u.Z.Direction.VERTICAL,
          ...s,
          children: [
            (0, o.jsx)(l.FormTitle, { tag: "h2", children: t }),
            null != n
              ? (0, o.jsx)(l.Text, {
                  variant: "text-md/normal",
                  className: S.sectionBody,
                  children: n,
                })
              : null,
            (0, o.jsx)(u.Z.Child, { wrap: !0, children: r }),
          ],
        });
      };
      class F extends r.PureComponent {
        renderSMSSection() {
          let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(M.xW$.MFA_SMS),
            r = e.hasFlag(M.xW$.PARTNER) || e.hasFlag(M.xW$.STAFF);
          return t
            ? (0, o.jsxs)(C, {
                label: A.Z.Messages.MFA_SMS_ENABLE,
                text: A.Z.Messages.MFA_SMS_AUTH_SALES_PITCH,
                children: [
                  (0, o.jsxs)(l.Text, {
                    variant: "text-md/normal",
                    className: S.sectionBody,
                    children: [
                      (0, o.jsx)("strong", {
                        className: S.phoneNumber,
                        children:
                          A.Z.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
                            phoneNumber: e.phone,
                          }),
                      }),
                      (0, o.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        size: l.Button.Sizes.MIN,
                        className: S.linkButton,
                        onClick: this.handleChangePhoneNumber,
                        children: A.Z.Messages.CHANGE_PHONE_NUMBER,
                      }),
                    ],
                  }),
                  (0, o.jsx)(l.Button, {
                    onClick: this.handleEnableSMS,
                    disabled: n || r,
                    color: l.Button.Colors.GREEN,
                    size: l.Button.Sizes.SMALL,
                    children: r
                      ? A.Z.Messages.MFA_SMS_DISABLED_PARTNER
                      : n
                        ? A.Z.Messages.MFA_SMS_ALREADY_ENABLED
                        : A.Z.Messages.MFA_SMS_ENABLE,
                  }),
                ],
              })
            : (0, o.jsx)(C, {
                label: A.Z.Messages.MFA_SMS_ENABLE,
                text: A.Z.Messages.MFA_SMS_AUTH_SALES_PITCH,
                children: (0, o.jsx)(l.Button, {
                  onClick: this.handleEnableSMS,
                  color: l.Button.Colors.GREEN,
                  size: l.Button.Sizes.SMALL,
                  disabled: r,
                  children: r
                    ? A.Z.Messages.MFA_SMS_DISABLED_PARTNER
                    : A.Z.Messages.MFA_SMS_ADD_PHONE,
                }),
              });
        }
        renderBackupCodesSection() {
          return (0, o.jsx)(C, {
            label: A.Z.Messages.TWO_FA_DOWNLOAD_CODES,
            text: A.Z.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
            children: (0, o.jsx)(E.Z, {
              fileContents: this.getDownloadFileContents,
              contentType: "text/plain",
              fileName: "discord_backup_codes.txt",
              onDownload: () =>
                d.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
              children: (0, o.jsx)(l.Button, {
                color: l.Button.Colors.GREEN,
                size: l.Button.Sizes.SMALL,
                children: A.Z.Messages.TWO_FA_DOWNLOAD_CODES,
              }),
            }),
          });
        }
        renderHeader(e) {
          return (0, o.jsxs)(l.ModalHeader, {
            separator: !1,
            children: [
              (0, o.jsxs)(u.Z.Child, {
                grow: 1,
                shrink: 1,
                children: [
                  (0, o.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    className: S.header,
                    children: _.Z.parse(A.Z.Messages.TWO_FA_SUCCESS_HEADER),
                  }),
                  (0, o.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: S.subHeader,
                    children: e,
                  }),
                ],
              }),
              (0, o.jsx)(u.Z.Child, {
                grow: 0,
                children: (0, o.jsx)(l.ModalCloseButton, {
                  onClick: this.handleCloseModal,
                }),
              }),
            ],
          });
        }
        renderConfirmModal(e) {
          let { onClose: t } = this.props;
          return (0, o.jsx)(l.DeclarativeConfirmModal, {
            dismissable: !0,
            header: A.Z.Messages.TWO_FA_CONFIRM_TITLE,
            confirmText: A.Z.Messages.TWO_FA_CONFIRM_CONFIRM,
            cancelText: A.Z.Messages.CANCEL,
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
              d.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), t();
            },
            children: (0, o.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "text-normal",
              children: e,
            }),
          });
        }
        render() {
          let { isTotp: e } = this.props;
          return e ? this.renderTotp() : this.renderWebAuthn();
        }
        renderTotp() {
          let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
          return (0, o.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: S.modal,
            children: [
              this.renderHeader(A.Z.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()),
              (0, o.jsxs)(l.ModalContent, {
                className: S.modalInner,
                children: [
                  this.renderSMSSection(),
                  (0, o.jsx)(l.FormDivider, { className: S.divider }),
                  this.renderBackupCodesSection(),
                ],
              }),
              t && this.renderConfirmModal(A.Z.Messages.TWO_FA_CONFIRM_BODY),
            ],
          });
        }
        renderWebAuthn() {
          let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
          return (0, o.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: S.modal,
            children: [
              this.renderHeader(
                A.Z.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format(),
              ),
              (0, o.jsx)(l.ModalContent, {
                className: S.modalInner,
                children: this.renderBackupCodesSection(),
              }),
              t &&
                this.renderConfirmModal(
                  A.Z.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY,
                ),
            ],
          });
        }
        openPhoneVerificationModal() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, l.openModal)(
            (t) =>
              (0, o.jsx)(p.default, {
                reason: h.L.MFA_PHONE_UPDATE,
                ...t,
                ...e,
              }),
            { modalKey: N.M },
          );
        }
        constructor(...e) {
          super(...e),
            O(this, "state", { showConfirmModal: !1 }),
            O(this, "handleCloseModal", () => {
              let { onClose: e, hasSeenBackupPrompt: t } = this.props;
              t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            O(this, "getDownloadFileContents", () => {
              let e = this.props.backupCodes
                  .map((e) => {
                    let { consumed: t, code: n } = e;
                    return "* "
                      .concat(n.substr(0, 4), "-")
                      .concat(n.substr(4), " ")
                      .concat(
                        t
                          ? "(".concat(
                              A.Z.Messages.TWO_FA_BACKUP_CODE_USED,
                              ")",
                            )
                          : "",
                      );
                  })
                  .join("\r\n"),
                t = A.Z.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
                  email: this.props.currentUser.email,
                });
              return "".concat(t, "\r\n\r\n").concat(e);
            }),
            O(this, "handleChangePhoneNumber", () => {
              this.openPhoneVerificationModal();
            }),
            O(this, "handleEnableSMS", () => {
              let { currentUser: e } = this.props,
                t = () => {
                  (0, l.openModal)((e) =>
                    (0, o.jsx)(I.default, {
                      ...e,
                      handleSubmit: (e) => c.Z.enableSMS(e),
                      title: A.Z.Messages.MFA_SMS_ENABLE,
                    }),
                  );
                };
              null == e.phone
                ? this.openPhoneVerificationModal({ onAddedPhone: t })
                : t();
            });
        }
      }
      t.default = i.ZP.connectStores([R.default, f.Z], () => {
        let e = R.default.getCurrentUser();
        return (
          a()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"),
          {
            currentUser: e,
            backupCodes: f.Z.getBackupCodes(),
            hasSeenBackupPrompt: f.Z.hasSeenBackupPrompt,
          }
        );
      })(F);
    },
    144114: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var o,
        r,
        s = n(990547),
        a = n(544891),
        i = n(570140),
        l = n(314897),
        d = n(573261),
        c = n(815660),
        E = n(981631);
      ((o = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (o.USER_SETTINGS_UPDATE = "user_settings_update"),
        (o.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (o.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (o.CONTACT_SYNC = "contact_sync"),
        (t.Z = {
          setCountryCode(e) {
            i.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, t) =>
            a.tn.del({
              url: E.ANM.PHONE,
              body: { password: e, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          resendCode(e) {
            let t = {},
              n = l.default.getFingerprint();
            return (
              null != n && "" !== n && (t["X-Fingerprint"] = n),
              a.tn.post({
                url: E.ANM.RESEND_PHONE,
                headers: t,
                body: { phone: e },
              })
            );
          },
          beginAddPhone: (e, t) =>
            a.tn.post({
              url: E.ANM.PHONE,
              body: { phone: e, change_phone_reason: t },
            }),
          addPhone: (e, t, n) =>
            a.tn.post({
              url: E.ANM.PHONE,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (e) =>
            a.tn.post({
              url: E.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
            }),
          beginReverifyPhone: (e, t) =>
            a.tn.post({
              url: E.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: t },
            }),
          reverifyPhone: (e, t, n) =>
            a.tn.post({
              url: E.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (e) =>
            a.tn.post({
              url: E.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
            }),
          async verifyPhone(e, t) {
            let n =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              o =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = {},
              a = l.default.getFingerprint();
            null != a && "" !== a && (r["X-Fingerprint"] = a),
              o && (r.authorization = "");
            let u = await d.Z.post({
              url: E.ANM.VERIFY_PHONE,
              headers: r,
              body: { phone: e, code: t },
              oldFormErrors: !0,
              trackedActionData: {
                event: s.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return n && i.Z.dispatch({ type: "MODAL_POP", key: c.M }), u.body;
          },
        });
    },
    815660: function (e, t, n) {
      "use strict";
      n.d(t, {
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
    1964: function (e, t, n) {
      "use strict";
      var o = n(392711),
        r = n.n(o),
        s = n(981631),
        a = n(689938);
      let {
          CAPTCHA: i,
          EMAIL: l,
          PHONE: d,
          REVERIFY_EMAIL: c,
          REVERIFY_PHONE: E,
        } = s.PUi,
        u = {
          [s.c2C.REQUIRE_VERIFIED_EMAIL]: [l],
          [s.c2C.REQUIRE_VERIFIED_PHONE]: [d],
          [s.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
          [s.c2C.REQUIRE_REVERIFIED_PHONE]: [E],
          [s.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, d],
          [s.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [d, c],
          [s.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, E],
          [s.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, E],
          [s.c2C.REQUIRE_CAPTCHA]: [i],
          [s.c2C.AGREEMENTS]: [],
        };
      t.Z = {
        isPhoneReverification: (e, t) =>
          void 0 !== e &&
          e.isPhoneVerified() &&
          (t === s.c2C.REQUIRE_REVERIFIED_PHONE ||
            t === s.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            t === s.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) =>
          e === s.c2C.REQUIRE_REVERIFIED_EMAIL ||
          e === s.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
          e === s.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) =>
          null == e || "symbol" == typeof e ? [] : u[e],
        getButtonTitle(e) {
          switch (e) {
            case s.PUi.EMAIL:
              return a.Z.Messages.VERIFY_BY_EMAIL;
            case s.PUi.PHONE:
              return a.Z.Messages.START_PHONE_VERIFICATION_BUTTON;
            case s.PUi.REVERIFY_EMAIL:
              return a.Z.Messages.START_EMAIL_REVERIFICATION_BUTTON;
            case s.PUi.REVERIFY_PHONE:
              return a.Z.Messages.START_PHONE_REVERIFICATION_BUTTON;
            default:
              return a.Z.Messages.START_VERIFICATION_BUTTON;
          }
        },
        areVerificationTypesEqual: (e, t) => r().isEqual(e, t),
      };
    },
    691844: function (e, t, n) {
      "use strict";
      e.exports = {
        modal: "modal_f2caa8",
        modalInner: "modalInner_f2caa8",
        header: "header_f2caa8",
        divider: "divider_f2caa8",
        sectionBody: "sectionBody_f2caa8",
        phoneNumber: "phoneNumber_f2caa8",
        linkButton: "linkButton_f2caa8",
        subHeader: "subHeader_f2caa8",
      };
    },
    600899: function (e, t, n) {
      "use strict";
      e.exports = {
        spacing: "spacing_a2ce87",
        card: "card_a2ce87",
        error: "error_a2ce87",
        warning: "warning_a2ce87",
      };
    },
    680924: function (e, t, n) {
      "use strict";
      e.exports = { spacer: "spacer_b0944f", input: "input_b0944f" };
    },
    553258: function (e, t, n) {
      "use strict";
      e.exports = {
        phoneFieldPopout: "phoneFieldPopout_ff761b",
        phoneFieldScroller: "phoneFieldScroller_ff761b",
        countryItem: "countryItem_ff761b",
        countryName: "countryName_ff761b",
        countryCode: "countryCode_ff761b",
      };
    },
    951046: function (e, t, n) {
      "use strict";
      e.exports = {
        phoneField: "phoneField_f26de7",
        countryButton: "countryButton_f26de7",
        countryButtonInner: "countryButtonInner_f26de7",
        countryCodeContainer: "countryCodeContainer_f26de7",
        plusSign: "plusSign_f26de7",
        countryCode: "countryCode_f26de7",
        phoneFieldExpand: "phoneFieldExpand_f26de7",
        inputField: "inputField_f26de7",
        sendButton: "sendButton_f26de7",
      };
    },
    656215: function (e, t, n) {
      "use strict";
      e.exports = {
        phoneVerificationModal: "phoneVerificationModal_fb9bea",
        animationContainer: "animationContainer_fb9bea",
        title: "title_fb9bea",
        description: "description_fb9bea",
        error: "error_fb9bea",
        field: "field_fb9bea",
      };
    },
  },
]);
//# sourceMappingURL=a4c51e32c7921767b7ff.js.map
