"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59716"],
  {
    275370: function (e, s, o) {
      o.r(s), o(47120);
      var t = o(735250),
        r = o(470079),
        n = o(512722),
        a = o.n(n),
        l = o(481060),
        c = o(51144),
        i = o(985002),
        d = o(880257),
        _ = o(198952),
        u = o(130310),
        C = o(329242),
        m = o(689938),
        h = o(571202);
      s.default = (e) => {
        let {
            currentUser: s,
            otherUser: o,
            transitionState: n,
            onClose: x,
          } = e,
          L = r.useCallback(() => {
            x();
          }, [x]),
          E = (0, d.Z)(),
          [N, M] = r.useState(!1),
          A = r.useCallback(() => {
            M(!0);
          }, []),
          { acceptLinkRequest: I, isAcceptLoading: T } = (0, i.G)({
            onError: A,
            onSuccess: L,
          });
        return (
          a()(
            !E,
            "FamilyCenterAcceptLinkModal should only be rendered for teens.",
          ),
          (0, t.jsxs)(l.ModalRoot, {
            transitionState: n,
            "aria-label": m.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_TITLE,
            className: h.root,
            children: [
              N
                ? (0, t.jsx)(l.FormErrorBlock, {
                    className: h.error,
                    children:
                      m.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_ERROR,
                  })
                : null,
              (0, t.jsxs)(l.ModalContent, {
                className: h.__invalid_modalContent,
                children: [
                  (0, t.jsxs)("div", {
                    className: h.header,
                    children: [
                      (0, t.jsx)(_.Z, {
                        currentUser: s,
                        otherUser: o,
                        children: (0, t.jsx)(l.LinkIcon, {
                          size: "md",
                          color: "currentColor",
                          className: h.linkIcon,
                        }),
                      }),
                      (0, t.jsx)(l.Heading, {
                        className: h.headerText,
                        variant: "text-lg/bold",
                        children:
                          m.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_TITLE,
                      }),
                      (0, t.jsx)(C.Z, { user: o, fill: !0 }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: h.content,
                    children: [
                      (0, t.jsx)(u.Z, { inModal: !0 }),
                      (0, t.jsx)(l.Text, {
                        className: h.disclaimer,
                        variant: "text-xs/normal",
                        color: "text-normal",
                        children:
                          m.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_ACTIVITY_DISCLAIMER.format(
                            { username: c.ZP.getName(o) },
                          ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(l.ModalFooter, {
                children: (0, t.jsx)("form", {
                  onSubmit: (e) => {
                    e.preventDefault(), I(o);
                  },
                  children: (0, t.jsxs)("div", {
                    className: h.footer,
                    children: [
                      (0, t.jsx)(l.Button, {
                        className: h.button,
                        type: "button",
                        disabled: T,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: x,
                        size: l.Button.Sizes.SMALL,
                        children: m.Z.Messages.CANCEL,
                      }),
                      (0, t.jsx)(l.Button, {
                        className: h.button,
                        type: "submit",
                        disabled: T,
                        submitting: T,
                        color: l.ButtonColors.BRAND,
                        size: l.Button.Sizes.SMALL,
                        children: m.Z.Messages.FAMILY_CENTER_ACCEPT_REQUEST,
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    571202: function (e, s, o) {
      e.exports = {
        root: "root_c05d48",
        header: "header_c05d48",
        headerText: "headerText_c05d48",
        content: "content_c05d48",
        footer: "footer_c05d48",
        disclaimer: "disclaimer_c05d48",
        linkIcon: "linkIcon_c05d48",
        button: "button_c05d48",
        error: "error_c05d48",
      };
    },
  },
]);
//# sourceMappingURL=90e3b9cfdef973298490.js.map
