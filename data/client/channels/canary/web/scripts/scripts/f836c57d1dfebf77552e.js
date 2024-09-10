"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69015"],
  {
    247265: function (e, s, o) {
      o.r(s), o(47120);
      var r = o(735250),
        t = o(470079),
        n = o(512722),
        l = o.n(n),
        a = o(481060),
        c = o(985002),
        d = o(880257),
        i = o(198952),
        u = o(329242),
        C = o(689938),
        _ = o(658363);
      s.default = (e) => {
        let {
            currentUser: s,
            otherUser: o,
            transitionState: n,
            onClose: h,
          } = e,
          [E, L] = t.useState(!1),
          x = t.useCallback(() => {
            L(!0);
          }, []),
          N = t.useCallback(() => {
            L(!1);
          }, []),
          b = t.useCallback(() => {
            h();
          }, [h]),
          M = (0, d.Z)(),
          { cancelLinkRequest: f, isCancelLoading: m } = (0, c.G)({
            onError: x,
            onSuccess: b,
          });
        return (
          l()(
            M,
            "FamilyCenterDeclineLinkModal should only be rendered for parents.",
          ),
          (0, r.jsx)(a.ModalRoot, {
            transitionState: n,
            children: (0, r.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), f(o);
              },
              children: [
                E
                  ? (0, r.jsx)(a.FormErrorBlock, {
                      className: _.error,
                      onDismiss: N,
                      children:
                        C.Z.Messages.FAMILY_CENTER_CANCEL_LINK_MODAL_ERROR,
                    })
                  : null,
                (0, r.jsx)(a.ModalContent, {
                  children: (0, r.jsxs)("div", {
                    className: _.header,
                    children: [
                      (0, r.jsx)(i.Z, {
                        currentUser: s,
                        otherUser: o,
                        children: (0, r.jsx)(a.XSmallIcon, {
                          size: "md",
                          color: "currentColor",
                          className: _.closeIcon,
                        }),
                      }),
                      (0, r.jsx)(a.Heading, {
                        className: _.headerText,
                        variant: "text-lg/bold",
                        children:
                          C.Z.Messages.FAMILY_CENTER_CANCEL_LINK_MODAL_TITLE,
                      }),
                      (0, r.jsx)(u.Z, { user: o, fill: !0 }),
                    ],
                  }),
                }),
                (0, r.jsx)(a.ModalFooter, {
                  children: (0, r.jsxs)("div", {
                    className: _.footer,
                    children: [
                      (0, r.jsx)(a.Button, {
                        className: _.button,
                        type: "button",
                        disabled: m,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        onClick: h,
                        size: a.Button.Sizes.SMALL,
                        children:
                          C.Z.Messages.FAMILY_CENTER_CANCEL_REQUEST_BACK,
                      }),
                      (0, r.jsx)(a.Button, {
                        className: _.button,
                        type: "submit",
                        disabled: m || E,
                        submitting: m,
                        color: a.ButtonColors.RED,
                        size: a.Button.Sizes.SMALL,
                        children: C.Z.Messages.FAMILY_CENTER_CANCEL_REQUEST,
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
    658363: function (e, s, o) {
      e.exports = {
        header: "header_ef46d5",
        headerText: "headerText_ef46d5",
        footer: "footer_ef46d5",
        closeIcon: "closeIcon_ef46d5",
        button: "button_ef46d5",
        error: "error_ef46d5",
      };
    },
  },
]);
//# sourceMappingURL=f836c57d1dfebf77552e.js.map
