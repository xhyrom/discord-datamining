"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["958"],
  {
    4526: function (e, t, n) {
      n.r(t), n(47120);
      var r = n(200651),
        o = n(192379),
        s = n(512722),
        l = n.n(s),
        c = n(481060),
        i = n(985002),
        a = n(880257),
        d = n(198952),
        u = n(329242),
        f = n(388032),
        h = n(253163);
      t.default = (e) => {
        let {
            currentUser: t,
            otherUser: n,
            transitionState: s,
            onClose: x,
          } = e,
          [m, b] = o.useState(!1),
          j = o.useCallback(() => {
            b(!0);
          }, []),
          k = o.useCallback(() => {
            b(!1);
          }, []),
          p = o.useCallback(() => {
            x();
          }, [x]),
          C = (0, a.Z)(),
          { declineLinkRequest: _, isDeclineLoading: g } = (0, i.G)({
            onError: j,
            onSuccess: p,
          });
        return (
          l()(
            !C,
            "FamilyCenterDeclineLinkModal should only be rendered for teens.",
          ),
          (0, r.jsx)(c.ModalRoot, {
            transitionState: s,
            children: (0, r.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), _(n);
              },
              children: [
                m
                  ? (0, r.jsx)(c.FormErrorBlock, {
                      className: h.error,
                      onDismiss: k,
                      children: f.intl.string(f.t.tJAUys),
                    })
                  : null,
                (0, r.jsx)(c.ModalContent, {
                  children: (0, r.jsxs)("div", {
                    className: h.header,
                    children: [
                      (0, r.jsx)(d.Z, {
                        currentUser: t,
                        otherUser: n,
                        children: (0, r.jsx)(c.XSmallIcon, {
                          size: "md",
                          color: "currentColor",
                          className: h.closeIcon,
                        }),
                      }),
                      (0, r.jsx)(c.Heading, {
                        className: h.headerText,
                        variant: "text-lg/bold",
                        children: f.intl.string(f.t.teIRCQ),
                      }),
                      (0, r.jsx)(u.Z, { user: n }),
                      (0, r.jsxs)("div", {
                        className: h.content,
                        children: [
                          (0, r.jsx)(c.Text, {
                            className: h.__invalid_noticeHeader,
                            variant: "eyebrow",
                            color: "header-primary",
                            children: f.intl.string(f.t.cXgKMD),
                          }),
                          (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: f.intl.string(f.t.LcM8BQ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(c.ModalFooter, {
                  children: (0, r.jsxs)("div", {
                    className: h.footer,
                    children: [
                      (0, r.jsx)(c.Button, {
                        className: h.button,
                        type: "button",
                        disabled: g,
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.PRIMARY,
                        onClick: x,
                        size: c.Button.Sizes.SMALL,
                        children: f.intl.string(f.t["ETE/oK"]),
                      }),
                      (0, r.jsx)(c.Button, {
                        className: h.button,
                        type: "submit",
                        disabled: g,
                        submitting: g,
                        color: c.ButtonColors.RED,
                        size: c.Button.Sizes.SMALL,
                        children: f.intl.string(f.t.dKxFcn),
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
    253163: function (e, t, n) {
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
//# sourceMappingURL=47987a4c2987a93bda13.js.map
