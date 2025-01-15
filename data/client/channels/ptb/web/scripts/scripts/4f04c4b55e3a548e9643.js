(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30463"],
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
              r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              o = "download" in r,
              i = function (e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t);
              },
              a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
              s = e.webkitRequestFileSystem,
              l = e.requestFileSystem || s || e.mozRequestFileSystem,
              d = function (t) {
                (e.setImmediate || e.setTimeout)(function () {
                  throw t;
                }, 0);
              },
              c = "application/octet-stream",
              u = 0,
              h = function (e) {
                setTimeout(function () {
                  "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
                }, 4e4);
              },
              p = function (e, t, n) {
                for (var r = (t = [].concat(t)).length; r--; ) {
                  var o = e["on" + t[r]];
                  if ("function" == typeof o)
                    try {
                      o.call(e, n || e);
                    } catch (e) {
                      d(e);
                    }
                }
              },
              f = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  e.type,
                )
                  ? new Blob(["\xef\xbb\xbf", e], { type: e.type })
                  : e;
              },
              m = function (t, d, m) {
                !m && (t = f(t));
                var _,
                  E,
                  b = this,
                  N = t.type,
                  g = !1,
                  S = function () {
                    p(b, "writestart progress write writeend".split(" "));
                  },
                  y = function () {
                    if (E && a && "undefined" != typeof FileReader) {
                      var r = new FileReader();
                      (r.onloadend = function () {
                        var e = r.result;
                        (E.location.href =
                          "data:attachment/file" + e.slice(e.search(/[,;]/))),
                          (b.readyState = b.DONE),
                          S();
                      }),
                        r.readAsDataURL(t),
                        (b.readyState = b.INIT);
                      return;
                    }
                    (g || !_) && (_ = n().createObjectURL(t)),
                      E
                        ? (E.location.href = _)
                        : void 0 === e.open(_, "_blank") &&
                          a &&
                          (e.location.href = _),
                      (b.readyState = b.DONE),
                      S(),
                      h(_);
                  },
                  C = function (e) {
                    return function () {
                      if (b.readyState !== b.DONE)
                        return e.apply(this, arguments);
                    };
                  },
                  x = { create: !0, exclusive: !1 };
                if (((b.readyState = b.INIT), !d && (d = "download"), o)) {
                  (_ = n().createObjectURL(t)),
                    setTimeout(function () {
                      (r.href = _),
                        (r.download = d),
                        i(r),
                        S(),
                        h(_),
                        (b.readyState = b.DONE);
                    });
                  return;
                }
                if (
                  (e.chrome &&
                    N &&
                    N !== c &&
                    ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, c)),
                    (g = !0)),
                  s && "download" !== d && (d += ".download"),
                  (N === c || s) && (E = e),
                  !l)
                ) {
                  y();
                  return;
                }
                (u += t.size),
                  l(
                    e.TEMPORARY,
                    u,
                    C(function (e) {
                      e.root.getDirectory(
                        "saved",
                        x,
                        C(function (e) {
                          var n = function () {
                            e.getFile(
                              d,
                              x,
                              C(function (e) {
                                e.createWriter(
                                  C(function (n) {
                                    (n.onwriteend = function (t) {
                                      (E.location.href = e.toURL()),
                                        (b.readyState = b.DONE),
                                        p(b, "writeend", t),
                                        h(e);
                                    }),
                                      (n.onerror = function () {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && y();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (e) {
                                          n["on" + e] = b["on" + e];
                                        }),
                                      n.write(t),
                                      (b.abort = function () {
                                        n.abort(), (b.readyState = b.DONE);
                                      }),
                                      (b.readyState = b.WRITING);
                                  }),
                                  y,
                                );
                              }),
                              y,
                            );
                          };
                          e.getFile(
                            d,
                            { create: !1 },
                            C(function (e) {
                              e.remove(), n();
                            }),
                            C(function (e) {
                              e.code === e.NOT_FOUND_ERR ? n() : y();
                            }),
                          );
                        }),
                        y,
                      );
                    }),
                    y,
                  );
              },
              _ = m.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, n) {
                  return (
                    !n && (e = f(e)),
                    navigator.msSaveOrOpenBlob(e, t || "download")
                  );
                }
              : ((_.abort = function () {
                  (this.readyState = this.DONE), p(this, "abort");
                }),
                (_.readyState = _.INIT = 0),
                (_.WRITING = 1),
                (_.DONE = 2),
                (_.error =
                  _.onwritestart =
                  _.onprogress =
                  _.onwrite =
                  _.onabort =
                  _.onerror =
                  _.onwriteend =
                    null),
                function (e, t, n) {
                  return new m(e, t, n);
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
          return s;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(817080),
        i = n(579806),
        a = n(358085);
      class s extends r.Component {
        getFileContents() {
          let { fileContents: e } = this.props;
          return "function" == typeof e && (e = e()), e;
        }
        downloadNative(e, t) {
          i.Z.fileManager.saveWithDialog(e, t);
        }
        downloadHtml5(e, t) {
          let n = new Blob([e], { type: this.props.contentType });
          (0, o.saveAs)(n, t);
        }
        render() {
          let { children: e } = this.props,
            t = r.Children.only(e);
          return r.cloneElement(t, { onClick: this.handleFileDownload });
        }
        constructor(...e) {
          var t, n, r;
          super(...e),
            (t = this),
            (n = "handleFileDownload"),
            (r = (e) => {
              e.preventDefault();
              let t = this.getFileContents(),
                { fileName: n, onDownload: r } = this.props;
              a.isPlatformEmbedded
                ? this.downloadNative(t, n)
                : this.downloadHtml5(t, n),
                null == r || r();
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = r);
        }
      }
    },
    628908: function (e, t, n) {
      "use strict";
      n.r(t), n(47120);
      var r = n(200651),
        o = n(192379),
        i = n(512722),
        a = n.n(i),
        s = n(442837),
        l = n(481060),
        d = n(570140),
        c = n(816814),
        u = n(23645),
        h = n(600164),
        p = n(454585),
        f = n(144114),
        m = n(607018),
        _ = n(325067),
        E = n(594174),
        b = n(279837),
        N = n(981631),
        g = n(815660),
        S = n(388032),
        y = n(269157);
      function C(e, t, n) {
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
      let x = (e) => {
        let { label: t, text: n, children: o, ...i } = e;
        return (0, r.jsxs)(h.Z, {
          direction: h.Z.Direction.VERTICAL,
          ...i,
          children: [
            (0, r.jsx)(l.FormTitle, { tag: "h2", children: t }),
            null != n
              ? (0, r.jsx)(l.Text, {
                  variant: "text-md/normal",
                  className: y.sectionBody,
                  children: n,
                })
              : null,
            (0, r.jsx)(h.Z.Child, { wrap: !0, children: o }),
          ],
        });
      };
      class M extends o.PureComponent {
        renderSMSSection() {
          let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(N.xW$.MFA_SMS),
            o = e.hasFlag(N.xW$.PARTNER) || e.hasFlag(N.xW$.STAFF);
          return t
            ? (0, r.jsxs)(x, {
                label: S.intl.string(S.t.DZQe29),
                text: S.intl.string(S.t.fspJ4O),
                children: [
                  (0, r.jsxs)(l.Text, {
                    variant: "text-md/normal",
                    className: y.sectionBody,
                    children: [
                      (0, r.jsx)("strong", {
                        className: y.phoneNumber,
                        children: S.intl.format(S.t.PXVoEB, {
                          phoneNumber: e.phone,
                        }),
                      }),
                      (0, r.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        size: l.Button.Sizes.MIN,
                        className: y.linkButton,
                        onClick: this.handleChangePhoneNumber,
                        children: S.intl.string(S.t.Ulqq6O),
                      }),
                    ],
                  }),
                  (0, r.jsx)(l.Button, {
                    onClick: this.handleEnableSMS,
                    disabled: n || o,
                    color: l.Button.Colors.GREEN,
                    size: l.Button.Sizes.SMALL,
                    children: o
                      ? S.intl.string(S.t.Sq6Q1t)
                      : n
                        ? S.intl.string(S.t.kSbHTE)
                        : S.intl.string(S.t.DZQe29),
                  }),
                ],
              })
            : (0, r.jsx)(x, {
                label: S.intl.string(S.t.DZQe29),
                text: S.intl.string(S.t.fspJ4O),
                children: (0, r.jsx)(l.Button, {
                  onClick: this.handleEnableSMS,
                  color: l.Button.Colors.GREEN,
                  size: l.Button.Sizes.SMALL,
                  disabled: o,
                  children: o
                    ? S.intl.string(S.t.Sq6Q1t)
                    : S.intl.string(S.t["O5qS/v"]),
                }),
              });
        }
        renderBackupCodesSection() {
          return (0, r.jsx)(x, {
            label: S.intl.string(S.t.qZZUy8),
            text: S.intl.format(S.t.M0Dogo, {}),
            children: (0, r.jsx)(u.Z, {
              fileContents: this.getDownloadFileContents,
              contentType: "text/plain",
              fileName: "discord_backup_codes.txt",
              onDownload: () =>
                d.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
              children: (0, r.jsx)(l.Button, {
                color: l.Button.Colors.GREEN,
                size: l.Button.Sizes.SMALL,
                children: S.intl.string(S.t.qZZUy8),
              }),
            }),
          });
        }
        renderHeader(e) {
          return (0, r.jsxs)(l.ModalHeader, {
            separator: !1,
            children: [
              (0, r.jsxs)(h.Z.Child, {
                grow: 1,
                shrink: 1,
                children: [
                  (0, r.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    className: y.header,
                    children: p.Z.parse(S.intl.string(S.t["681MPT"])),
                  }),
                  (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: y.subHeader,
                    children: e,
                  }),
                ],
              }),
              (0, r.jsx)(h.Z.Child, {
                grow: 0,
                children: (0, r.jsx)(l.ModalCloseButton, {
                  onClick: this.handleCloseModal,
                }),
              }),
            ],
          });
        }
        renderConfirmModal(e) {
          let { onClose: t } = this.props;
          return (0, r.jsx)(l.DeclarativeConfirmModal, {
            dismissable: !0,
            header: S.intl.string(S.t.mwVXnJ),
            confirmText: S.intl.string(S.t.MwSEo6),
            cancelText: S.intl.string(S.t["ETE/oK"]),
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
              d.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), t();
            },
            children: (0, r.jsx)(l.Text, {
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
          return (0, r.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: y.modal,
            children: [
              this.renderHeader(S.intl.format(S.t.pQioMz, {})),
              (0, r.jsxs)(l.ModalContent, {
                className: y.modalInner,
                children: [
                  this.renderSMSSection(),
                  (0, r.jsx)(l.FormDivider, { className: y.divider }),
                  this.renderBackupCodesSection(),
                ],
              }),
              t && this.renderConfirmModal(S.intl.string(S.t.WJFPHB)),
            ],
          });
        }
        renderWebAuthn() {
          let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
          return (0, r.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: y.modal,
            children: [
              this.renderHeader(S.intl.format(S.t.Xb5JGh, {})),
              (0, r.jsx)(l.ModalContent, {
                className: y.modalInner,
                children: this.renderBackupCodesSection(),
              }),
              t && this.renderConfirmModal(S.intl.string(S.t.aoNIXF)),
            ],
          });
        }
        openPhoneVerificationModal() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, l.openModal)(
            (t) =>
              (0, r.jsx)(m.default, {
                reason: f.L.MFA_PHONE_UPDATE,
                ...t,
                ...e,
              }),
            { modalKey: g.M },
          );
        }
        constructor(...e) {
          super(...e),
            C(this, "state", { showConfirmModal: !1 }),
            C(this, "handleCloseModal", () => {
              let { onClose: e, hasSeenBackupPrompt: t } = this.props;
              t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            C(this, "getDownloadFileContents", () => {
              let e = this.props.backupCodes
                  .map((e) => {
                    let { consumed: t, code: n } = e;
                    return "* "
                      .concat(n.substr(0, 4), "-")
                      .concat(n.substr(4), " ")
                      .concat(
                        t ? "(".concat(S.intl.string(S.t["ycME+/"]), ")") : "",
                      );
                  })
                  .join("\r\n"),
                t = S.intl.formatToPlainString(S.t.uYWwh4, {
                  email: this.props.currentUser.email,
                });
              return "".concat(t, "\r\n\r\n").concat(e);
            }),
            C(this, "handleChangePhoneNumber", () => {
              this.openPhoneVerificationModal();
            }),
            C(this, "handleEnableSMS", () => {
              let { currentUser: e } = this.props,
                t = () => {
                  (0, l.openModal)((e) =>
                    (0, r.jsx)(b.default, {
                      ...e,
                      handleSubmit: (e) => c.Z.enableSMS(e),
                      title: S.intl.string(S.t.DZQe29),
                    }),
                  );
                };
              null == e.phone
                ? this.openPhoneVerificationModal({ onAddedPhone: t })
                : t();
            });
        }
      }
      t.default = s.ZP.connectStores([E.default, _.Z], () => {
        let e = E.default.getCurrentUser();
        return (
          a()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"),
          {
            currentUser: e,
            backupCodes: _.Z.getBackupCodes(),
            hasSeenBackupPrompt: _.Z.hasSeenBackupPrompt,
          }
        );
      })(M);
    },
    144114: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return o;
        },
      });
      var r,
        o,
        i = n(990547),
        a = n(544891),
        s = n(570140),
        l = n(314897),
        d = n(573261),
        c = n(815660),
        u = n(981631);
      ((r = o || (o = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (r.USER_SETTINGS_UPDATE = "user_settings_update"),
        (r.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (r.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (r.CONTACT_SYNC = "contact_sync"),
        (t.Z = {
          setCountryCode(e) {
            s.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, t) =>
            a.tn.del({
              url: u.ANM.PHONE,
              body: { password: e, change_phone_reason: t },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          resendCode(e) {
            let t = {},
              n = l.default.getFingerprint();
            return (
              null != n && "" !== n && (t["X-Fingerprint"] = n),
              a.tn.post({
                url: u.ANM.RESEND_PHONE,
                headers: t,
                body: { phone: e },
                rejectWithError: !1,
              })
            );
          },
          beginAddPhone: (e, t) =>
            a.tn.post({
              url: u.ANM.PHONE,
              body: { phone: e, change_phone_reason: t },
              rejectWithError: !1,
            }),
          addPhone: (e, t, n) =>
            a.tn.post({
              url: u.ANM.PHONE,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          addPhoneWithoutPassword: (e) =>
            a.tn.post({
              url: u.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
              rejectWithError: !1,
            }),
          beginReverifyPhone: (e, t) =>
            a.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: t },
              rejectWithError: !1,
            }),
          reverifyPhone: (e, t, n) =>
            a.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: t, change_phone_reason: n },
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
          async verifyPhone(e, t) {
            let n =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              o = {},
              a = l.default.getFingerprint();
            null != a && "" !== a && (o["X-Fingerprint"] = a),
              r && (o.authorization = "");
            let h = await d.Z.post({
              url: u.ANM.VERIFY_PHONE,
              headers: o,
              body: { phone: e, code: t },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE,
              },
              rejectWithError: !1,
            });
            return n && s.Z.dispatch({ type: "MODAL_POP", key: c.M }), h.body;
          },
        });
    },
    815660: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return r;
        },
        z: function () {
          return o;
        },
      });
      let r = "PHONE_VERIFICATION_MODAL_KEY",
        o = 6;
    },
    23434: function (e, t, n) {
      "use strict";
      var r,
        o,
        i,
        a,
        s = n(442837),
        l = n(570140);
      let d = null;
      class c extends (a = s.ZP.Store) {
        hasAction() {
          return null != d;
        }
        getAction() {
          return d;
        }
      }
      function u(e) {
        d = e.requiredAction;
      }
      (i = "UserRequiredActionStore"),
        (o = "displayName") in (r = c)
          ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = i),
        (t.Z = new c(l.Z, {
          CONNECTION_OPEN: u,
          USER_REQUIRED_ACTION_UPDATE: u,
        }));
    },
    269157: function (e, t, n) {
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
    189620: function (e, t, n) {
      "use strict";
      e.exports = {
        spacing: "spacing_a2ce87",
        card: "card_a2ce87",
        error: "error_a2ce87",
        warning: "warning_a2ce87",
      };
    },
    145097: function (e, t, n) {
      "use strict";
      e.exports = { spacer: "spacer_b0944f", input: "input_b0944f" };
    },
    132646: function (e, t, n) {
      "use strict";
      e.exports = {
        phoneFieldPopout: "phoneFieldPopout_ff761b",
        phoneFieldScroller: "phoneFieldScroller_ff761b",
        countryItem: "countryItem_ff761b",
        countryName: "countryName_ff761b",
        countryCode: "countryCode_ff761b",
      };
    },
    25001: function (e, t, n) {
      "use strict";
      e.exports = {
        phoneField: "phoneField_f26de7",
        countryButton: "countryButton_f26de7",
        countryButtonInner: "countryButtonInner_f26de7",
        countryCodeContainer: "countryCodeContainer_f26de7",
        plusSign: "plusSign_f26de7",
        countryCode: "countryCode_f26de7",
        inputField: "inputField_f26de7",
        sendButton: "sendButton_f26de7",
        phoneFieldExpand: "phoneFieldExpand_f26de7",
      };
    },
    853206: function (e, t, n) {
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
//# sourceMappingURL=4f04c4b55e3a548e9643.js.map
