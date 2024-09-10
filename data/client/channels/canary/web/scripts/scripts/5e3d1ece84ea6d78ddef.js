"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94566"],
  {
    965072: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return C;
          },
        }),
        s(47120);
      var a = s(735250),
        l = s(470079),
        o = s(990547),
        n = s(481060),
        r = s(479531),
        i = s(213609),
        d = s(689938),
        u = s(884527),
        c = s(800010);
      function C(e) {
        let {
            transitionState: t,
            onFormSubmit: s,
            onResend: C,
            onSuccess: _,
            onClose: h,
            headerText: T,
            confirmButtonText: m,
            confirmButtonColor: E,
            impressionName: N,
          } = e,
          [M, S] = l.useState(!1),
          [I, p] = l.useState(""),
          [x, f] = l.useState(!1),
          [A, g] = l.useState(null),
          R = l.useRef(null);
        (0, i.Z)({ type: o.ImpressionTypes.MODAL, name: N });
        let b = async (e) => {
            e.preventDefault(), g(null), S(!0);
            try {
              let e = await s(I);
              null != _ && _(e), h();
            } catch (e) {
              g(new r.Z(e).getAnyErrorMessage());
            } finally {
              S(!1);
            }
          },
          j = async () => {
            if (!x) {
              f(!0);
              try {
                await C(),
                  (0, n.showToast)(
                    (0, n.createToast)(
                      d.Z.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT,
                      n.ToastType.SUCCESS,
                    ),
                  );
              } catch (t) {
                let e = new r.Z(t).getAnyErrorMessage();
                null != e &&
                  (0, n.showToast)((0, n.createToast)(e, n.ToastType.FAILURE));
              } finally {
                f(!1);
              }
            }
          };
        return (0, a.jsx)(n.ModalRoot, {
          transitionState: t,
          children: (0, a.jsxs)("form", {
            onSubmit: b,
            children: [
              (0, a.jsx)("img", { alt: "", className: u.headerImage, src: c }),
              (0, a.jsxs)(n.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                  (0, a.jsx)(n.Heading, {
                    variant: "heading-lg/semibold",
                    className: u.title,
                    children: T,
                  }),
                  (0, a.jsx)(n.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: u.subtitle,
                    children:
                      d.Z.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE,
                  }),
                  (0, a.jsx)(n.ModalCloseButton, {
                    onClick: h,
                    className: u.modalCloseButton,
                  }),
                ],
              }),
              (0, a.jsxs)(n.ModalContent, {
                children: [
                  (0, a.jsx)(n.FormItem, {
                    title:
                      d.Z.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
                    error: A,
                    children: (0, a.jsx)(n.TextInput, {
                      value: I,
                      onChange: p,
                      inputRef: R,
                    }),
                  }),
                  (0, a.jsx)(n.Text, {
                    className: u.help,
                    variant: "text-sm/normal",
                    children:
                      d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format(
                        { onResend: j },
                      ),
                  }),
                ],
              }),
              (0, a.jsxs)(n.ModalFooter, {
                children: [
                  (0, a.jsx)(n.Button, {
                    type: "submit",
                    color: null != E ? E : n.Button.Colors.BRAND,
                    size: n.Button.Sizes.MEDIUM,
                    submitting: M,
                    children: m,
                  }),
                  (0, a.jsx)(n.Button, {
                    look: n.Button.Looks.LINK,
                    color: n.Button.Colors.PRIMARY,
                    onClick: h,
                    children: d.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    884527: function (e, t, s) {
      e.exports = {
        header: "header_bf03d5",
        headerImage: "headerImage_bf03d5",
        title: "title_bf03d5",
        subtitle: "subtitle_bf03d5",
        modalCloseButton: "modalCloseButton_bf03d5",
        help: "help_bf03d5",
      };
    },
  },
]);
//# sourceMappingURL=5e3d1ece84ea6d78ddef.js.map
