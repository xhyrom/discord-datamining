"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48707"],
  {
    194530: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return E;
          },
        }),
        t(47120);
      var o = t(735250),
        n = t(470079),
        l = t(442837),
        a = t(481060),
        r = t(809206),
        i = t(112831),
        u = t(25990),
        d = t(155433),
        c = t(981631),
        _ = t(689938),
        S = t(787895);
      function E(e) {
        var s, t, E, R;
        let {
            transitionState: M,
            onSuccess: T,
            onClose: A,
            requirementsUpdated: h,
            noSkip: m = !1,
          } = e,
          [v, C] = n.useState(""),
          [N, p] = n.useState(""),
          [P, x] = n.useState(""),
          [I, Z] = n.useState(null),
          [f, D] = n.useState(null),
          O = (0, l.e7)([u.Z], () => u.Z.getErrors()),
          w = (0, l.e7)([u.Z], () => u.Z.getFormState()),
          b = n.useRef(null);
        async function g(e) {
          e.preventDefault(), (0, r.b9)();
          let s = !1;
          if (
            ("" === N
              ? (Z(_.Z.Messages.PASSWORD_REQUIREMENTS_EMPTY), (s = !0))
              : Z(null),
            N !== P
              ? (D(_.Z.Messages.FORM_LABEL_NEW_PASSWORD_MISMATCH), (s = !0))
              : D(null),
            s)
          )
            return;
          let t = await (0, r.Mn)({ password: v, newPassword: N });
          if (null == t ? void 0 : t.ok) T();
          else {
            var o;
            (null == t
              ? void 0
              : null === (o = t.body) || void 0 === o
                ? void 0
                : o.username) != null && (0, d.P)();
          }
        }
        return (
          n.useEffect(() => {
            if (M === a.ModalTransitionState.ENTERED) {
              var e;
              null === (e = b.current) || void 0 === e || e.focus();
            }
          }, [M]),
          (0, o.jsxs)(a.ModalRoot, {
            transitionState: M,
            children: [
              (0, o.jsxs)(a.ModalHeader, {
                separator: !1,
                className: S.header,
                children: [
                  (0, o.jsx)(i.Z, {
                    color: i.Z.Colors.HEADER_PRIMARY,
                    size: i.Z.Sizes.SIZE_24,
                    className: S.title,
                    children: _.Z.Messages.UPDATE_PASSWORD,
                  }),
                  (0, o.jsx)(a.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: S.subtitle,
                    children: h
                      ? _.Z.Messages.FORCE_PASSWORD_UPDATE_DESCRIPTION
                      : _.Z.Messages
                          .USER_SETTINGS_ACCOUNT_CHANGE_PASSWORD_PROMPT_DESKTOP,
                  }),
                  !0 !== m &&
                    (0, o.jsx)(a.ModalCloseButton, {
                      onClick: A,
                      className: S.modalCloseButton,
                    }),
                ],
              }),
              (0, o.jsxs)("form", {
                onSubmit: g,
                children: [
                  (0, o.jsxs)(a.ModalContent, {
                    className: S.content,
                    children: [
                      (0, o.jsx)(a.FormItem, {
                        title: _.Z.Messages.FORM_LABEL_CURRENT_PASSWORD,
                        error:
                          null == O
                            ? void 0
                            : null === (s = O.password) || void 0 === s
                              ? void 0
                              : s[0],
                        children: (0, o.jsx)(a.TextInput, {
                          type: "password",
                          value: v,
                          onChange: C,
                          inputRef: b,
                        }),
                      }),
                      (0, o.jsx)(a.FormItem, {
                        className: S.newPassword,
                        title: _.Z.Messages.FORM_LABEL_NEW_PASSWORD,
                        error:
                          null !==
                            (R =
                              null !==
                                (E =
                                  null == O
                                    ? void 0
                                    : null === (t = O.new_password) ||
                                        void 0 === t
                                      ? void 0
                                      : t[0]) && void 0 !== E
                                ? E
                                : I) && void 0 !== R
                            ? R
                            : void 0,
                        children: (0, o.jsx)(a.TextInput, {
                          type: "password",
                          value: N,
                          onChange: p,
                        }),
                      }),
                      (0, o.jsx)(a.FormItem, {
                        className: S.newPassword,
                        title: _.Z.Messages.FORM_LABEL_CONFIRM_NEW_PASSWORD,
                        error: null != f ? f : void 0,
                        children: (0, o.jsx)(a.TextInput, {
                          type: "password",
                          value: P,
                          onChange: x,
                        }),
                      }),
                    ],
                  }),
                  (0, o.jsxs)(a.ModalFooter, {
                    children: [
                      (0, o.jsx)(a.Button, {
                        type: "submit",
                        color: a.Button.Colors.BRAND,
                        size: a.Button.Sizes.MEDIUM,
                        submitting: w === c.QZA.SUBMITTING,
                        children: _.Z.Messages.DONE,
                      }),
                      !0 !== m &&
                        (0, o.jsx)(a.Button, {
                          className: S.cancel,
                          look: a.Button.Looks.LINK,
                          color: a.Button.Colors.PRIMARY,
                          onClick: A,
                          children: _.Z.Messages.CANCEL,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    155433: function (e, s, t) {
      t.d(s, {
        P: function () {
          return l;
        },
      });
      var o = t(481060),
        n = t(689938);
      function l() {
        (0, o.showToast)(
          (0, o.createToast)(
            n.Z.Messages.USER_SETTINGS_UPDATE_FAILURE,
            o.ToastType.FAILURE,
          ),
        );
      }
    },
    787895: function (e, s, t) {
      e.exports = {
        header: "header_e7b58e",
        title: "title_e7b58e",
        subtitle: "subtitle_e7b58e",
        modalCloseButton: "modalCloseButton_e7b58e",
        content: "content_e7b58e",
        newPassword: "newPassword_e7b58e",
        cancel: "cancel_e7b58e",
      };
    },
  },
]);
//# sourceMappingURL=27c040352842ec2b05d9.js.map
