(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17663"],
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
              E = function (e) {
                setTimeout(function () {
                  "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
                }, 4e4);
              },
              h = function (e, t, n) {
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
              p = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  e.type,
                )
                  ? new Blob(["\xef\xbb\xbf", e], { type: e.type })
                  : e;
              },
              f = function (t, d, f) {
                !f && (t = p(t));
                var _,
                  R,
                  I = this,
                  m = t.type,
                  N = !1,
                  b = function () {
                    h(I, "writestart progress write writeend".split(" "));
                  },
                  g = function () {
                    if (R && a && "undefined" != typeof FileReader) {
                      var r = new FileReader();
                      (r.onloadend = function () {
                        var e = r.result;
                        (R.location.href =
                          "data:attachment/file" + e.slice(e.search(/[,;]/))),
                          (I.readyState = I.DONE),
                          b();
                      }),
                        r.readAsDataURL(t),
                        (I.readyState = I.INIT);
                      return;
                    }
                    (N || !_) && (_ = n().createObjectURL(t)),
                      R
                        ? (R.location.href = _)
                        : void 0 === e.open(_, "_blank") &&
                          a &&
                          (e.location.href = _),
                      (I.readyState = I.DONE),
                      b(),
                      E(_);
                  },
                  C = function (e) {
                    return function () {
                      if (I.readyState !== I.DONE)
                        return e.apply(this, arguments);
                    };
                  },
                  y = { create: !0, exclusive: !1 };
                if (((I.readyState = I.INIT), !d && (d = "download"), o)) {
                  (_ = n().createObjectURL(t)),
                    setTimeout(function () {
                      (r.href = _),
                        (r.download = d),
                        i(r),
                        b(),
                        E(_),
                        (I.readyState = I.DONE);
                    });
                  return;
                }
                if (
                  (e.chrome &&
                    m &&
                    m !== c &&
                    ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, c)),
                    (N = !0)),
                  s && "download" !== d && (d += ".download"),
                  (m === c || s) && (R = e),
                  !l)
                ) {
                  g();
                  return;
                }
                (u += t.size),
                  l(
                    e.TEMPORARY,
                    u,
                    C(function (e) {
                      e.root.getDirectory(
                        "saved",
                        y,
                        C(function (e) {
                          var n = function () {
                            e.getFile(
                              d,
                              y,
                              C(function (e) {
                                e.createWriter(
                                  C(function (n) {
                                    (n.onwriteend = function (t) {
                                      (R.location.href = e.toURL()),
                                        (I.readyState = I.DONE),
                                        h(I, "writeend", t),
                                        E(e);
                                    }),
                                      (n.onerror = function () {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && g();
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
                                  g,
                                );
                              }),
                              g,
                            );
                          };
                          e.getFile(
                            d,
                            { create: !1 },
                            C(function (e) {
                              e.remove(), n();
                            }),
                            C(function (e) {
                              e.code === e.NOT_FOUND_ERR ? n() : g();
                            }),
                          );
                        }),
                        g,
                      );
                    }),
                    g,
                  );
              },
              _ = f.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, n) {
                  return (
                    !n && (e = p(e)),
                    navigator.msSaveOrOpenBlob(e, t || "download")
                  );
                }
              : ((_.abort = function () {
                  (this.readyState = this.DONE), h(this, "abort");
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
                  return new f(e, t, n);
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
        E = n(600164),
        h = n(454585),
        p = n(144114),
        f = n(607018),
        _ = n(325067),
        R = n(594174),
        I = n(279837),
        m = n(981631),
        N = n(815660),
        b = n(388032),
        g = n(691844);
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
      let y = (e) => {
        let { label: t, text: n, children: o, ...i } = e;
        return (0, r.jsxs)(E.Z, {
          direction: E.Z.Direction.VERTICAL,
          ...i,
          children: [
            (0, r.jsx)(l.FormTitle, { tag: "h2", children: t }),
            null != n
              ? (0, r.jsx)(l.Text, {
                  variant: "text-md/normal",
                  className: g.sectionBody,
                  children: n,
                })
              : null,
            (0, r.jsx)(E.Z.Child, { wrap: !0, children: o }),
          ],
        });
      };
      class S extends o.PureComponent {
        renderSMSSection() {
          let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(m.xW$.MFA_SMS),
            o = e.hasFlag(m.xW$.PARTNER) || e.hasFlag(m.xW$.STAFF);
          return t
            ? (0, r.jsxs)(y, {
                label: b.intl.string(b.t.DZQe29),
                text: b.intl.string(b.t.fspJ4O),
                children: [
                  (0, r.jsxs)(l.Text, {
                    variant: "text-md/normal",
                    className: g.sectionBody,
                    children: [
                      (0, r.jsx)("strong", {
                        className: g.phoneNumber,
                        children: b.intl.format(b.t.PXVoEB, {
                          phoneNumber: e.phone,
                        }),
                      }),
                      (0, r.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        size: l.Button.Sizes.MIN,
                        className: g.linkButton,
                        onClick: this.handleChangePhoneNumber,
                        children: b.intl.string(b.t.Ulqq6O),
                      }),
                    ],
                  }),
                  (0, r.jsx)(l.Button, {
                    onClick: this.handleEnableSMS,
                    disabled: n || o,
                    color: l.Button.Colors.GREEN,
                    size: l.Button.Sizes.SMALL,
                    children: o
                      ? b.intl.string(b.t.Sq6Q1t)
                      : n
                        ? b.intl.string(b.t.kSbHTE)
                        : b.intl.string(b.t.DZQe29),
                  }),
                ],
              })
            : (0, r.jsx)(y, {
                label: b.intl.string(b.t.DZQe29),
                text: b.intl.string(b.t.fspJ4O),
                children: (0, r.jsx)(l.Button, {
                  onClick: this.handleEnableSMS,
                  color: l.Button.Colors.GREEN,
                  size: l.Button.Sizes.SMALL,
                  disabled: o,
                  children: o
                    ? b.intl.string(b.t.Sq6Q1t)
                    : b.intl.string(b.t["O5qS/v"]),
                }),
              });
        }
        renderBackupCodesSection() {
          return (0, r.jsx)(y, {
            label: b.intl.string(b.t.qZZUy8),
            text: b.intl.format(b.t.M0Dogo, {}),
            children: (0, r.jsx)(u.Z, {
              fileContents: this.getDownloadFileContents,
              contentType: "text/plain",
              fileName: "discord_backup_codes.txt",
              onDownload: () =>
                d.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
              children: (0, r.jsx)(l.Button, {
                color: l.Button.Colors.GREEN,
                size: l.Button.Sizes.SMALL,
                children: b.intl.string(b.t.qZZUy8),
              }),
            }),
          });
        }
        renderHeader(e) {
          return (0, r.jsxs)(l.ModalHeader, {
            separator: !1,
            children: [
              (0, r.jsxs)(E.Z.Child, {
                grow: 1,
                shrink: 1,
                children: [
                  (0, r.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    className: g.header,
                    children: h.Z.parse(b.intl.string(b.t["681MPT"])),
                  }),
                  (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: g.subHeader,
                    children: e,
                  }),
                ],
              }),
              (0, r.jsx)(E.Z.Child, {
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
            header: b.intl.string(b.t.mwVXnJ),
            confirmText: b.intl.string(b.t.MwSEo6),
            cancelText: b.intl.string(b.t["ETE/oK"]),
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
            className: g.modal,
            children: [
              this.renderHeader(b.intl.format(b.t.pQioMz, {})),
              (0, r.jsxs)(l.ModalContent, {
                className: g.modalInner,
                children: [
                  this.renderSMSSection(),
                  (0, r.jsx)(l.FormDivider, { className: g.divider }),
                  this.renderBackupCodesSection(),
                ],
              }),
              t && this.renderConfirmModal(b.intl.string(b.t.WJFPHB)),
            ],
          });
        }
        renderWebAuthn() {
          let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
          return (0, r.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: g.modal,
            children: [
              this.renderHeader(b.intl.format(b.t.Xb5JGh, {})),
              (0, r.jsx)(l.ModalContent, {
                className: g.modalInner,
                children: this.renderBackupCodesSection(),
              }),
              t && this.renderConfirmModal(b.intl.string(b.t.aoNIXF)),
            ],
          });
        }
        openPhoneVerificationModal() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, l.openModal)(
            (t) =>
              (0, r.jsx)(f.default, {
                reason: p.L.MFA_PHONE_UPDATE,
                ...t,
                ...e,
              }),
            { modalKey: N.M },
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
                        t ? "(".concat(b.intl.string(b.t["ycME+/"]), ")") : "",
                      );
                  })
                  .join("\r\n"),
                t = b.intl.formatToPlainString(b.t.uYWwh4, {
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
                    (0, r.jsx)(I.default, {
                      ...e,
                      handleSubmit: (e) => c.Z.enableSMS(e),
                      title: b.intl.string(b.t.DZQe29),
                    }),
                  );
                };
              null == e.phone
                ? this.openPhoneVerificationModal({ onAddedPhone: t })
                : t();
            });
        }
      }
      t.default = s.ZP.connectStores([R.default, _.Z], () => {
        let e = R.default.getCurrentUser();
        return (
          a()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"),
          {
            currentUser: e,
            backupCodes: _.Z.getBackupCodes(),
            hasSeenBackupPrompt: _.Z.hasSeenBackupPrompt,
          }
        );
      })(S);
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
              })
            );
          },
          beginAddPhone: (e, t) =>
            a.tn.post({
              url: u.ANM.PHONE,
              body: { phone: e, change_phone_reason: t },
            }),
          addPhone: (e, t, n) =>
            a.tn.post({
              url: u.ANM.PHONE,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (e) =>
            a.tn.post({
              url: u.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
            }),
          beginReverifyPhone: (e, t) =>
            a.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: t },
            }),
          reverifyPhone: (e, t, n) =>
            a.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (e) =>
            a.tn.post({
              url: u.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
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
            let E = await d.Z.post({
              url: u.ANM.VERIFY_PHONE,
              headers: o,
              body: { phone: e, code: t },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return n && s.Z.dispatch({ type: "MODAL_POP", key: c.M }), E.body;
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
    1964: function (e, t, n) {
      "use strict";
      var r = n(392711),
        o = n.n(r),
        i = n(981631),
        a = n(388032);
      let {
          CAPTCHA: s,
          EMAIL: l,
          PHONE: d,
          REVERIFY_EMAIL: c,
          REVERIFY_PHONE: u,
        } = i.PUi,
        E = {
          [i.c2C.REQUIRE_VERIFIED_EMAIL]: [l],
          [i.c2C.REQUIRE_VERIFIED_PHONE]: [d],
          [i.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
          [i.c2C.REQUIRE_REVERIFIED_PHONE]: [u],
          [i.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, d],
          [i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [d, c],
          [i.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, u],
          [i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, u],
          [i.c2C.REQUIRE_CAPTCHA]: [s],
          [i.c2C.AGREEMENTS]: [],
        };
      t.Z = {
        isPhoneReverification: (e, t) =>
          void 0 !== e &&
          e.isPhoneVerified() &&
          (t === i.c2C.REQUIRE_REVERIFIED_PHONE ||
            t === i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            t === i.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) =>
          e === i.c2C.REQUIRE_REVERIFIED_EMAIL ||
          e === i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
          e === i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) =>
          null == e || "symbol" == typeof e ? [] : E[e],
        getButtonTitle(e) {
          switch (e) {
            case i.PUi.EMAIL:
              return a.intl.string(a.t["1MPz29"]);
            case i.PUi.PHONE:
              return a.intl.string(a.t.mjJecn);
            case i.PUi.REVERIFY_EMAIL:
              return a.intl.string(a.t.nmdPFR);
            case i.PUi.REVERIFY_PHONE:
              return a.intl.string(a.t.of2129);
            default:
              return a.intl.string(a.t["oF6+W1"]);
          }
        },
        areVerificationTypesEqual: (e, t) => o().isEqual(e, t),
      };
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
//# sourceMappingURL=c079c9ece97c14aec949.js.map
