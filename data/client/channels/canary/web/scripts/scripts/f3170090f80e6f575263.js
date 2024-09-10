"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20102"],
  {
    477335: function (e) {
      e.exports = "/assets/44cbffbbc0ff1ec96c60.svg";
    },
    297640: function (e) {
      e.exports = "/assets/6970a5ece8e41f339d43.svg";
    },
    444688: function (e, t, s) {
      s.r(t);
      var n = s(735250);
      s(470079);
      var i = s(442837),
        o = s(481060),
        a = s(600164),
        r = s(418632),
        l = s(594174),
        c = s(689938),
        d = s(936404);
      function u(e) {
        let { onClose: t } = e,
          a = (0, i.e7)([l.default], () => l.default.getCurrentUser());
        function d() {
          null == t || t();
        }
        function u() {
          d(),
            (0, o.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                s.e("9343"),
                s.e("64031"),
              ]).then(s.bind(s, 642298));
              return (t) => (0, n.jsx)(e, { ...t });
            });
        }
        return (null == a ? void 0 : a.email) == null
          ? (0, n.jsx)(o.Button, {
              onClick: u,
              color: o.Button.Colors.BRAND,
              look: o.Button.Looks.FILLED,
              children: c.Z.Messages.ADD_EMAIL_SHORT,
            })
          : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(o.Button, {
                  onClick: u,
                  color: o.Button.Colors.PRIMARY,
                  look: o.Button.Looks.LINK,
                  children: c.Z.Messages.CHANGE_EMAIL_SHORT,
                }),
                (0, n.jsx)(r.Z, { color: o.Button.Colors.BRAND, onClick: d }),
              ],
            });
      }
      t.default = function (e) {
        let { onClose: t, transitionState: s } = e;
        return (0, n.jsxs)(o.ModalRoot, {
          transitionState: s,
          children: [
            (0, n.jsx)(o.ModalHeader, {
              children: (0, n.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H4,
                children: c.Z.Messages.PREMIUM_NOT_VERIFIED,
              }),
            }),
            (0, n.jsxs)(o.ModalContent, {
              children: [
                (0, n.jsx)("div", { className: d.imageUnverified }),
                (0, n.jsx)(o.Text, {
                  variant: "text-md/normal",
                  className: d.message,
                  children: c.Z.Messages.PREMIUM_NOT_VERIFIED_BODY,
                }),
              ],
            }),
            (0, n.jsx)(o.ModalFooter, {
              children: (0, n.jsx)(a.Z, {
                justify: a.Z.Justify.END,
                children: (0, n.jsx)(u, { onClose: t }),
              }),
            }),
          ],
        });
      };
    },
    418632: function (e, t, s) {
      s(47120);
      var n,
        i = s(735250),
        o = s(470079),
        a = s(512722),
        r = s.n(a),
        l = s(442837),
        c = s(481060),
        d = s(893776),
        u = s(468026),
        f = s(594174),
        I = s(689938);
      function h(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      class E extends (n = o.Component) {
        render() {
          let { color: e, look: t, size: s } = this.props;
          return (0, i.jsx)(c.Button, {
            look: t,
            size: s,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: I.Z.Messages.RESEND_VERIFICATION_EMAIL,
          });
        }
        constructor(...e) {
          super(...e),
            h(this, "state", { isSendingVerificationEmail: !1 }),
            h(this, "handleResendVerification", () => {
              let { currentUser: e, onClick: t } = this.props;
              null == t || t(),
                this.setState({ isSendingVerificationEmail: !0 }, () => {
                  d.Z.verifyResend()
                    .then(() =>
                      (0, c.openModal)((t) =>
                        (0, i.jsx)(c.ConfirmModal, {
                          header: I.Z.Messages.VERIFICATION_EMAIL_TITLE,
                          confirmText: I.Z.Messages.OKAY,
                          confirmButtonColor: c.Button.Colors.BRAND,
                          ...t,
                          children: (0, i.jsx)(c.Text, {
                            variant: "text-md/normal",
                            children:
                              I.Z.Messages.VERIFICATION_EMAIL_BODY.format({
                                email: e.email,
                              }),
                          }),
                        }),
                      ),
                    )
                    .catch((e) => {
                      let { body: t } = e,
                        s = I.Z.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                      null != t && t.email && (s = t.email),
                        (0, c.openModal)((e) =>
                          (0, i.jsx)(u.default, {
                            title: I.Z.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                            body: s,
                            ...e,
                          }),
                        );
                    })
                    .then(() =>
                      this.setState({ isSendingVerificationEmail: !1 }),
                    );
                });
            });
        }
      }
      h(E, "defaultProps", {
        size: c.Button.Sizes.MEDIUM,
        color: c.Button.Colors.BRAND,
      }),
        (t.Z = l.ZP.connectStores([f.default], () => {
          let e = f.default.getCurrentUser();
          return (
            r()(
              null != e,
              "ResendEmailVerificationButton: currentUser cannot be undefined",
            ),
            { currentUser: e }
          );
        })(E));
    },
    936404: function (e, t, s) {
      e.exports = {
        message: "message_f19fa9",
        imageUnverified: "imageUnverified_f19fa9",
      };
    },
  },
]);
//# sourceMappingURL=f3170090f80e6f575263.js.map
