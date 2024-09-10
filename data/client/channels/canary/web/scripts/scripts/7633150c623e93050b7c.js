"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93288"],
  {
    396410: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        }),
        s(47120);
      var n = s(735250),
        l = s(470079),
        o = s(990547),
        a = s(481060),
        r = s(479531),
        i = s(213609),
        u = s(689938),
        d = s(404927);
      let c = RegExp(
        "(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^\"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*\")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$",
        "i",
      );
      function h(e) {
        let {
            transitionState: t,
            onFormSubmit: s,
            onSuccess: h,
            onClose: p,
            headerText: M,
            confirmButtonText: m,
            confirmButtonColor: f,
            impressionName: x,
          } = e,
          [A, C] = l.useState(!1),
          [R, _] = l.useState(""),
          [g, j] = l.useState(null),
          B = l.useRef(null);
        (0, i.Z)({ type: o.ImpressionTypes.MODAL, name: x });
        let Z = async (e) => {
          if ((e.preventDefault(), j(null), C(!0), !1 === c.test(R))) {
            j(u.Z.Messages.EMAIL_ENTER_MODAL_INPUT_ERROR), C(!1);
            return;
          }
          try {
            let e = null != s ? await s(R) : void 0;
            null != h && (null != e ? h({ response: e, email: R }) : h(R)), p();
          } catch (e) {
            j(new r.Z(e).getAnyErrorMessage());
          } finally {
            C(!1);
          }
        };
        return (0, n.jsx)(a.ModalRoot, {
          transitionState: t,
          children: (0, n.jsxs)("form", {
            onSubmit: Z,
            children: [
              (0, n.jsxs)(a.ModalHeader, {
                separator: !1,
                className: d.header,
                children: [
                  (0, n.jsx)(a.Heading, {
                    variant: "heading-lg/semibold",
                    className: d.title,
                    children: M,
                  }),
                  (0, n.jsx)(a.ModalCloseButton, {
                    onClick: p,
                    className: d.modalCloseButton,
                  }),
                ],
              }),
              (0, n.jsx)(a.ModalContent, {
                children: (0, n.jsx)(a.FormItem, {
                  title: u.Z.Messages.YOUR_EMAIL,
                  error: g,
                  children: (0, n.jsx)(a.TextInput, {
                    value: R,
                    onChange: _,
                    inputRef: B,
                  }),
                }),
              }),
              (0, n.jsxs)(a.ModalFooter, {
                children: [
                  (0, n.jsx)(a.Button, {
                    type: "submit",
                    color: null != f ? f : a.Button.Colors.BRAND,
                    size: a.Button.Sizes.MEDIUM,
                    submitting: A,
                    children: m,
                  }),
                  (0, n.jsx)(a.Button, {
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    onClick: p,
                    children: u.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    404927: function (e, t, s) {
      e.exports = {
        header: "header_f40604",
        title: "title_f40604",
        modalCloseButton: "modalCloseButton_f40604",
      };
    },
  },
]);
//# sourceMappingURL=7633150c623e93050b7c.js.map
