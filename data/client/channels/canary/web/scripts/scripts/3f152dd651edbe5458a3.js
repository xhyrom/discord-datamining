"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18259"],
  {
    1493: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return i;
          },
        }),
        n(47120);
      var r = n(200651),
        o = n(192379),
        a = n(481060),
        l = n(388032),
        s = n(485553);
      function i(t) {
        let {
            onConfirm: e,
            onClose: n,
            validationText: i,
            errorText: c,
            header: u,
            className: d,
            cancelText: x,
            confirmText: h,
            instructionText: p,
            transitionState: m,
            children: g,
          } = t,
          [j, C] = o.useState(""),
          [f, N] = o.useState(null),
          k =
            o.Children.count(g) > 0
              ? (0, r.jsx)(a.Card, {
                  type: a.Card.Types.WARNING,
                  className: s.card,
                  children: (0, r.jsx)(a.Text, {
                    className: s.warning,
                    variant: "text-md/normal",
                    children: g,
                  }),
                })
              : null;
        return (0, r.jsx)(a.ModalRoot, {
          transitionState: m,
          className: d,
          children: (0, r.jsxs)("form", {
            onSubmit: function (t) {
              if ((t.preventDefault(), j.toLowerCase() !== i.toLowerCase())) {
                N(c);
                return;
              }
              null == e || e(), n();
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
                  k,
                  (0, r.jsxs)(a.FormItem, {
                    title: p,
                    className: s.spacing,
                    children: [
                      (0, r.jsx)(a.TextInput, {
                        id: "text-entry-confirm",
                        type: "text",
                        value: j,
                        autoComplete: "off",
                        onChange: C,
                        autoFocus: !0,
                      }),
                      null != f && "" !== f
                        ? (0, r.jsx)(a.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: s.error,
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
                    children: null != h ? h : l.intl.string(l.t["cY+Ooa"]),
                  }),
                  (0, r.jsx)(a.Button, {
                    onClick: n,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    children: null != x ? x : l.intl.string(l.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    485553: function (t, e, n) {
      t.exports = {
        spacing: "spacing_ce1366",
        card: "card_ce1366 spacing_ce1366",
        error: "error_ce1366",
        warning: "warning_ce1366",
      };
    },
  },
]);
//# sourceMappingURL=3f152dd651edbe5458a3.js.map
