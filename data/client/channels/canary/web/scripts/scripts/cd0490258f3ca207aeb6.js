"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69015"],
  {
    247265: function (e, t, o) {
      o.r(t), o(47120);
      var s = o(200651),
        r = o(192379),
        n = o(512722),
        l = o.n(n),
        i = o(481060),
        a = o(985002),
        c = o(880257),
        d = o(198952),
        u = o(329242),
        h = o(388032),
        b = o(658363);
      t.default = (e) => {
        let {
            currentUser: t,
            otherUser: o,
            transitionState: n,
            onClose: m,
          } = e,
          [x, f] = r.useState(!1),
          j = r.useCallback(() => {
            f(!0);
          }, []),
          k = r.useCallback(() => {
            f(!1);
          }, []),
          p = r.useCallback(() => {
            m();
          }, [m]),
          C = (0, c.Z)(),
          { cancelLinkRequest: g, isCancelLoading: S } = (0, a.G)({
            onError: j,
            onSuccess: p,
          });
        return (
          l()(
            C,
            "FamilyCenterDeclineLinkModal should only be rendered for parents.",
          ),
          (0, s.jsx)(i.ModalRoot, {
            transitionState: n,
            children: (0, s.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), g(o);
              },
              children: [
                x
                  ? (0, s.jsx)(i.FormErrorBlock, {
                      className: b.error,
                      onDismiss: k,
                      children: h.intl.string(h.t["6gyAQU"]),
                    })
                  : null,
                (0, s.jsx)(i.ModalContent, {
                  children: (0, s.jsxs)("div", {
                    className: b.header,
                    children: [
                      (0, s.jsx)(d.Z, {
                        currentUser: t,
                        otherUser: o,
                        children: (0, s.jsx)(i.XSmallIcon, {
                          size: "md",
                          color: "currentColor",
                          className: b.closeIcon,
                        }),
                      }),
                      (0, s.jsx)(i.Heading, {
                        className: b.headerText,
                        variant: "text-lg/bold",
                        children: h.intl.string(h.t.HynllZ),
                      }),
                      (0, s.jsx)(u.Z, { user: o, fill: !0 }),
                    ],
                  }),
                }),
                (0, s.jsx)(i.ModalFooter, {
                  children: (0, s.jsxs)("div", {
                    className: b.footer,
                    children: [
                      (0, s.jsx)(i.Button, {
                        className: b.button,
                        type: "button",
                        disabled: S,
                        look: i.Button.Looks.LINK,
                        color: i.Button.Colors.PRIMARY,
                        onClick: m,
                        size: i.Button.Sizes.SMALL,
                        children: h.intl.string(h.t.czincX),
                      }),
                      (0, s.jsx)(i.Button, {
                        className: b.button,
                        type: "submit",
                        disabled: S || x,
                        submitting: S,
                        color: i.ButtonColors.RED,
                        size: i.Button.Sizes.SMALL,
                        children: h.intl.string(h.t.mK40bm),
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
    658363: function (e, t, o) {
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
//# sourceMappingURL=cd0490258f3ca207aeb6.js.map
