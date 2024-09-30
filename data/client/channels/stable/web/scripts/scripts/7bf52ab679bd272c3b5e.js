"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50872"],
  {
    442673: function (e, s, a) {
      a.r(s), a(47120);
      var o = a(735250),
        t = a(470079),
        r = a(481060),
        n = a(985002),
        c = a(880257),
        l = a(198952),
        i = a(329242),
        _ = a(689938),
        N = a(868747);
      s.default = (e) => {
        let {
            currentUser: s,
            otherUser: a,
            transitionState: d,
            onClose: C,
          } = e,
          E = t.useCallback(() => {
            C();
          }, [C]),
          I = (0, c.Z)(),
          [h, x] = t.useState(!1),
          [T, L] = t.useState(!1),
          u = t.useCallback(() => {
            L(!0), x(!1);
          }, []),
          { disconnectLinkRequest: M, isDisconnectLoading: b } = (0, n.G)({
            onSuccess: E,
            onError: u,
          });
        return (0, o.jsx)(r.ModalRoot, {
          transitionState: d,
          children: (0, o.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(), M(a);
            },
            children: [
              T
                ? (0, o.jsx)(r.FormErrorBlock, {
                    className: N.error,
                    children:
                      _.Z.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_ERROR,
                  })
                : null,
              (0, o.jsxs)(r.ModalContent, {
                children: [
                  (0, o.jsxs)("div", {
                    className: N.header,
                    children: [
                      (0, o.jsx)(l.Z, {
                        currentUser: s,
                        otherUser: a,
                        children: (0, o.jsx)(r.XSmallIcon, {
                          size: "md",
                          color: "currentColor",
                          className: N.closeIcon,
                        }),
                      }),
                      (0, o.jsx)(r.Heading, {
                        className: N.headerText,
                        variant: "text-lg/bold",
                        children:
                          _.Z.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_TITLE.format(
                            { isAdult: String(I) },
                          ),
                      }),
                      (0, o.jsx)(i.Z, { user: a, fill: !0 }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: N.content,
                    children: [
                      (0, o.jsx)(r.Text, {
                        className: N.noticeHeader,
                        variant: "eyebrow",
                        color: "header-primary",
                        children:
                          _.Z.Messages
                            .FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_HEADER,
                      }),
                      (0, o.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: I
                          ? _.Z.Messages
                              .FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_DESCRIPTION_PARENT
                          : _.Z.Messages
                              .FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_DESCRIPTION_TEEN,
                      }),
                    ],
                  }),
                  (0, o.jsx)(r.Checkbox, {
                    className: N.acknowledgementCheckbox,
                    type: r.Checkbox.Types.INVERTED,
                    value: h,
                    onChange: (e, s) => {
                      x(s), L(!1);
                    },
                    children: (0, o.jsx)("div", {
                      className: N.checkboxLabel,
                      children: (0, o.jsx)(r.Text, {
                        variant: "text-xs/semibold",
                        children: I
                          ? _.Z.Messages
                              .FAMILY_CENTER_DISCONNECT_LINK_MODAL_DISCLAIMER_PARENT
                          : _.Z.Messages
                              .FAMILY_CENTER_DISCONNECT_LINK_MODAL_DISCLAIMER_TEEN,
                      }),
                    }),
                  }),
                ],
              }),
              (0, o.jsx)(r.ModalFooter, {
                children: (0, o.jsxs)("div", {
                  className: N.footer,
                  children: [
                    (0, o.jsx)(r.Button, {
                      className: N.button,
                      type: "button",
                      look: r.Button.Looks.LINK,
                      color: r.Button.Colors.PRIMARY,
                      onClick: C,
                      size: r.Button.Sizes.SMALL,
                      disabled: b,
                      children: _.Z.Messages.CANCEL,
                    }),
                    (0, o.jsx)(r.Button, {
                      className: N.button,
                      type: "submit",
                      disabled: !h || b,
                      submitting: b,
                      color: r.ButtonColors.RED,
                      size: r.Button.Sizes.SMALL,
                      children: _.Z.Messages.FAMILY_CENTER_DISCONNECT_BUTTON,
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    868747: function (e, s, a) {
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
//# sourceMappingURL=7bf52ab679bd272c3b5e.js.map
