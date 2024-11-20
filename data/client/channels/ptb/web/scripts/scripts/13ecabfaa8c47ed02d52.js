"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50872"],
  {
    442673: function (e, t, o) {
      o.r(t), o(47120);
      var n = o(200651),
        a = o(192379),
        r = o(481060),
        s = o(985002),
        l = o(880257),
        c = o(198952),
        i = o(329242),
        d = o(388032),
        h = o(868747);
      t.default = (e) => {
        let {
            currentUser: t,
            otherUser: o,
            transitionState: x,
            onClose: u,
          } = e,
          b = a.useCallback(() => {
            u();
          }, [u]),
          m = (0, l.Z)(),
          [k, f] = a.useState(!1),
          [j, g] = a.useState(!1),
          C = a.useCallback(() => {
            g(!0), f(!1);
          }, []),
          { disconnectLinkRequest: N, isDisconnectLoading: p } = (0, s.G)({
            onSuccess: b,
            onError: C,
          });
        return (0, n.jsx)(r.ModalRoot, {
          transitionState: x,
          children: (0, n.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(), N(o);
            },
            children: [
              j
                ? (0, n.jsx)(r.FormErrorBlock, {
                    className: h.error,
                    children: d.intl.string(d.t.krIDd3),
                  })
                : null,
              (0, n.jsxs)(r.ModalContent, {
                children: [
                  (0, n.jsxs)("div", {
                    className: h.header,
                    children: [
                      (0, n.jsx)(c.Z, {
                        currentUser: t,
                        otherUser: o,
                        children: (0, n.jsx)(r.XSmallIcon, {
                          size: "md",
                          color: "currentColor",
                          className: h.closeIcon,
                        }),
                      }),
                      (0, n.jsx)(r.Heading, {
                        className: h.headerText,
                        variant: "text-lg/bold",
                        children: d.intl.format(d.t.NMSTb2, {
                          isAdult: String(m),
                        }),
                      }),
                      (0, n.jsx)(i.Z, { user: o, fill: !0 }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: h.content,
                    children: [
                      (0, n.jsx)(r.Text, {
                        className: h.noticeHeader,
                        variant: "eyebrow",
                        color: "header-primary",
                        children: d.intl.string(d.t.VKblNj),
                      }),
                      (0, n.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: m
                          ? d.intl.string(d.t.EvMGLS)
                          : d.intl.string(d.t.f1SUeX),
                      }),
                    ],
                  }),
                  (0, n.jsx)(r.Checkbox, {
                    className: h.acknowledgementCheckbox,
                    type: r.Checkbox.Types.INVERTED,
                    value: k,
                    onChange: (e, t) => {
                      f(t), g(!1);
                    },
                    children: (0, n.jsx)("div", {
                      className: h.checkboxLabel,
                      children: (0, n.jsx)(r.Text, {
                        variant: "text-xs/semibold",
                        children: m
                          ? d.intl.string(d.t["/MYCeX"])
                          : d.intl.string(d.t.VJaHUV),
                      }),
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(r.ModalFooter, {
                children: (0, n.jsxs)("div", {
                  className: h.footer,
                  children: [
                    (0, n.jsx)(r.Button, {
                      className: h.button,
                      type: "button",
                      look: r.Button.Looks.LINK,
                      color: r.Button.Colors.PRIMARY,
                      onClick: u,
                      size: r.Button.Sizes.SMALL,
                      disabled: p,
                      children: d.intl.string(d.t["ETE/oK"]),
                    }),
                    (0, n.jsx)(r.Button, {
                      className: h.button,
                      type: "submit",
                      disabled: !k || p,
                      submitting: p,
                      color: r.ButtonColors.RED,
                      size: r.Button.Sizes.SMALL,
                      children: d.intl.string(d.t["c5L+sr"]),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    868747: function (e, t, o) {
      e.exports = {
        header: "header_a8af02",
        headerText: "headerText_a8af02",
        content: "content_a8af02",
        footer: "footer_a8af02",
        acknowledgementCheckbox: "acknowledgementCheckbox_a8af02",
        checkboxLabel: "checkboxLabel_a8af02",
        button: "button_a8af02",
        noticeHeader: "noticeHeader_a8af02",
        closeIcon: "closeIcon_a8af02",
        error: "error_a8af02",
      };
    },
  },
]);
//# sourceMappingURL=13ecabfaa8c47ed02d52.js.map
