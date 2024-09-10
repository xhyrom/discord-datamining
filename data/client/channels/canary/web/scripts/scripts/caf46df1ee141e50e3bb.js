"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18259"],
  {
    1493: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n(47120);
      var r = n(735250),
        o = n(470079),
        a = n(481060),
        s = n(689938),
        l = n(365728);
      function c(e) {
        let {
            onConfirm: t,
            onClose: n,
            validationText: c,
            errorText: i,
            header: u,
            className: d,
            cancelText: x,
            confirmText: h,
            instructionText: p,
            transitionState: m,
            children: C,
          } = e,
          [g, j] = o.useState(""),
          [f, N] = o.useState(null),
          M =
            o.Children.count(C) > 0
              ? (0, r.jsx)(a.Card, {
                  type: a.Card.Types.WARNING,
                  className: l.card,
                  children: (0, r.jsx)(a.Text, {
                    className: l.warning,
                    variant: "text-md/normal",
                    children: C,
                  }),
                })
              : null;
        return (0, r.jsx)(a.ModalRoot, {
          transitionState: m,
          className: d,
          children: (0, r.jsxs)("form", {
            onSubmit: function (e) {
              if ((e.preventDefault(), g.toLowerCase() !== c.toLowerCase())) {
                N(i);
                return;
              }
              null == t || t(), n();
            },
            children: [
              (0, r.jsx)(a.ModalHeader, {
                separator: !1,
                children: (0, r.jsx)(a.Heading, {
                  variant: "heading-lg/semibold",
                  children: u,
                }),
              }),
              (0, r.jsxs)(a.ModalContent, {
                children: [
                  M,
                  (0, r.jsxs)(a.FormItem, {
                    title: p,
                    className: l.spacing,
                    children: [
                      (0, r.jsx)(a.TextInput, {
                        id: "text-entry-confirm",
                        type: "text",
                        value: g,
                        autoComplete: "off",
                        onChange: j,
                        autoFocus: !0,
                      }),
                      null != f && "" !== f
                        ? (0, r.jsx)(a.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: l.error,
                            children: f,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(a.ModalFooter, {
                children: [
                  (0, r.jsx)(a.Button, {
                    type: "submit",
                    color: a.Button.Colors.RED,
                    children: null != h ? h : s.Z.Messages.CONFIRM,
                  }),
                  (0, r.jsx)(a.Button, {
                    onClick: n,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    children: null != x ? x : s.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    365728: function (e, t, n) {
      e.exports = {
        spacing: "spacing_ce1366",
        card: "card_ce1366 spacing_ce1366",
        error: "error_ce1366",
        warning: "warning_ce1366",
      };
    },
  },
]);
//# sourceMappingURL=caf46df1ee141e50e3bb.js.map
