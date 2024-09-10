"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["958"],
  {
    4526: function (e, s, o) {
      o.r(s), o(47120);
      var r = o(735250),
        t = o(470079),
        n = o(512722),
        a = o.n(n),
        c = o(481060),
        l = o(985002),
        d = o(880257),
        i = o(198952),
        _ = o(329242),
        u = o(689938),
        E = o(253163);
      s.default = (e) => {
        let {
            currentUser: s,
            otherUser: o,
            transitionState: n,
            onClose: f,
          } = e,
          [L, h] = t.useState(!1),
          N = t.useCallback(() => {
            h(!0);
          }, []),
          C = t.useCallback(() => {
            h(!1);
          }, []),
          x = t.useCallback(() => {
            f();
          }, [f]),
          I = (0, d.Z)(),
          { declineLinkRequest: M, isDeclineLoading: m } = (0, l.G)({
            onError: N,
            onSuccess: x,
          });
        return (
          a()(
            !I,
            "FamilyCenterDeclineLinkModal should only be rendered for teens.",
          ),
          (0, r.jsx)(c.ModalRoot, {
            transitionState: n,
            children: (0, r.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), M(o);
              },
              children: [
                L
                  ? (0, r.jsx)(c.FormErrorBlock, {
                      className: E.error,
                      onDismiss: C,
                      children:
                        u.Z.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_ERROR,
                    })
                  : null,
                (0, r.jsx)(c.ModalContent, {
                  children: (0, r.jsxs)("div", {
                    className: E.header,
                    children: [
                      (0, r.jsx)(i.Z, {
                        currentUser: s,
                        otherUser: o,
                        children: (0, r.jsx)(c.XSmallIcon, {
                          size: "md",
                          color: "currentColor",
                          className: E.closeIcon,
                        }),
                      }),
                      (0, r.jsx)(c.Heading, {
                        className: E.headerText,
                        variant: "text-lg/bold",
                        children:
                          u.Z.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_TITLE,
                      }),
                      (0, r.jsx)(_.Z, { user: o }),
                      (0, r.jsxs)("div", {
                        className: E.content,
                        children: [
                          (0, r.jsx)(c.Text, {
                            className: E.__invalid_noticeHeader,
                            variant: "eyebrow",
                            color: "header-primary",
                            children:
                              u.Z.Messages
                                .FAMILY_CENTER_DECLINE_LINK_MODAL_NOTICE_HEADER,
                          }),
                          (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children:
                              u.Z.Messages
                                .FAMILY_CENTER_DECLINE_LINK_MODAL_DISCLAIMER_TEEN,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(c.ModalFooter, {
                  children: (0, r.jsxs)("div", {
                    className: E.footer,
                    children: [
                      (0, r.jsx)(c.Button, {
                        className: E.button,
                        type: "button",
                        disabled: m,
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.PRIMARY,
                        onClick: f,
                        size: c.Button.Sizes.SMALL,
                        children: u.Z.Messages.CANCEL,
                      }),
                      (0, r.jsx)(c.Button, {
                        className: E.button,
                        type: "submit",
                        disabled: m,
                        submitting: m,
                        color: c.ButtonColors.RED,
                        size: c.Button.Sizes.SMALL,
                        children: u.Z.Messages.FAMILY_CENTER_DECLINE_REQUEST,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    253163: function (e, s, o) {
      e.exports = {
        header: "header_fefdcf",
        headerText: "headerText_fefdcf",
        content: "content_fefdcf",
        footer: "footer_fefdcf",
        closeIcon: "closeIcon_fefdcf",
        button: "button_fefdcf",
        error: "error_fefdcf",
      };
    },
  },
]);
//# sourceMappingURL=aaf66cd94fc9355307d5.js.map
