"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33356"],
  {
    477782: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return d;
          },
        }),
        e(47120);
      var o = e(200651),
        s = e(192379),
        i = e(481060),
        l = e(313201),
        a = e(117984),
        r = e(388032),
        c = e(116576);
      function d(t) {
        let { onClose: n, transitionState: e } = t,
          d = (0, l.Dt)(),
          [u, h] = s.useState("");
        return (0, o.jsx)("form", {
          onSubmit: function (t) {
            t.preventDefault(), (0, a.CM)(u), n();
          },
          children: (0, o.jsxs)(i.ModalRoot, {
            transitionState: e,
            "aria-labelledby": d,
            children: [
              (0, o.jsxs)(i.ModalContent, {
                children: [
                  (0, o.jsx)(i.Heading, {
                    id: d,
                    className: c.header,
                    variant: "heading-xl/semibold",
                    children: r.intl.string(r.t["ISN+ND"]),
                  }),
                  (0, o.jsx)(i.ModalCloseButton, {
                    onClick: n,
                    className: c.closeButton,
                  }),
                  (0, o.jsx)(i.FormItem, {
                    title: r.intl.string(r.t.OCAkGB),
                    className: c.name,
                    children: (0, o.jsx)(i.TextInput, {
                      value: u,
                      onChange: h,
                      maxLength: 100,
                      placeholder: r.intl.string(r.t.eTVbt7),
                      className: c.__invalid_inputWrapper,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)(i.ModalFooter, {
                children: [
                  (0, o.jsx)(i.Button, {
                    type: "submit",
                    disabled: "" === u,
                    children: r.intl.string(r.t["ISN+ND"]),
                  }),
                  (0, o.jsx)(i.Button, {
                    onClick: n,
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    children: r.intl.string(r.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    116576: function (t, n, e) {
      t.exports = {
        closeButton: "closeButton_dcf388",
        header: "header_dcf388",
        name: "name_dcf388",
      };
    },
  },
]);
//# sourceMappingURL=c145a7513a519a8b9ac7.js.map
