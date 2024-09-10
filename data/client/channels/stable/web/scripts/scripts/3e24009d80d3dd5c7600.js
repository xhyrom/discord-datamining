"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33356"],
  {
    477782: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return r;
          },
        }),
        t(47120);
      var n = t(735250),
        a = t(470079),
        o = t(481060),
        l = t(313201),
        i = t(117984),
        c = t(689938),
        d = t(775539);
      function r(e) {
        let { onClose: s, transitionState: t } = e,
          r = (0, l.Dt)(),
          [u, h] = a.useState("");
        return (0, n.jsx)("form", {
          onSubmit: function (e) {
            e.preventDefault(), (0, i.CM)(u), s();
          },
          children: (0, n.jsxs)(o.ModalRoot, {
            transitionState: t,
            "aria-labelledby": r,
            children: [
              (0, n.jsxs)(o.ModalContent, {
                children: [
                  (0, n.jsx)(o.Heading, {
                    id: r,
                    className: d.header,
                    variant: "heading-xl/semibold",
                    children: c.Z.Messages.CREATE_CATEGORY,
                  }),
                  (0, n.jsx)(o.ModalCloseButton, {
                    onClick: s,
                    className: d.closeButton,
                  }),
                  (0, n.jsx)(o.FormItem, {
                    title: c.Z.Messages.CATEGORY_NAME,
                    className: d.name,
                    children: (0, n.jsx)(o.TextInput, {
                      value: u,
                      onChange: h,
                      maxLength: 100,
                      placeholder: c.Z.Messages.CATEGORY_NAME_PLACEHOLDER,
                      className: d.__invalid_inputWrapper,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(o.ModalFooter, {
                children: [
                  (0, n.jsx)(o.Button, {
                    type: "submit",
                    disabled: "" === u,
                    children: c.Z.Messages.CREATE_CATEGORY,
                  }),
                  (0, n.jsx)(o.Button, {
                    onClick: s,
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    children: c.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    775539: function (e, s, t) {
      e.exports = {
        closeButton: "closeButton_dcf388",
        header: "header_dcf388",
        name: "name_dcf388",
      };
    },
  },
]);
//# sourceMappingURL=3e24009d80d3dd5c7600.js.map
