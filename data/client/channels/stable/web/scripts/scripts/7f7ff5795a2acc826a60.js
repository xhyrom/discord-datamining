"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59716"],
  {
    275370: function (e, t, o) {
      o.r(t), o(47120);
      var r = o(200651),
        n = o(192379),
        s = o(512722),
        l = o.n(s),
        a = o(481060),
        i = o(51144),
        c = o(985002),
        d = o(880257),
        u = o(198952),
        m = o(130310),
        h = o(329242),
        x = o(388032),
        b = o(571202);
      t.default = (e) => {
        let {
            currentUser: t,
            otherUser: o,
            transitionState: s,
            onClose: j,
          } = e,
          N = n.useCallback(() => {
            j();
          }, [j]),
          k = (0, d.Z)(),
          [p, _] = n.useState(!1),
          f = n.useCallback(() => {
            _(!0);
          }, []),
          { acceptLinkRequest: g, isAcceptLoading: C } = (0, c.G)({
            onError: f,
            onSuccess: N,
          });
        return (
          l()(
            !k,
            "FamilyCenterAcceptLinkModal should only be rendered for teens.",
          ),
          (0, r.jsxs)(a.ModalRoot, {
            transitionState: s,
            "aria-label": x.intl.string(x.t.rlNJwc),
            className: b.root,
            children: [
              p
                ? (0, r.jsx)(a.FormErrorBlock, {
                    className: b.error,
                    children: x.intl.string(x.t.pegSMz),
                  })
                : null,
              (0, r.jsxs)(a.ModalContent, {
                className: b.__invalid_modalContent,
                children: [
                  (0, r.jsxs)("div", {
                    className: b.header,
                    children: [
                      (0, r.jsx)(u.Z, {
                        currentUser: t,
                        otherUser: o,
                        children: (0, r.jsx)(a.LinkIcon, {
                          size: "md",
                          color: "currentColor",
                          className: b.linkIcon,
                        }),
                      }),
                      (0, r.jsx)(a.Heading, {
                        className: b.headerText,
                        variant: "text-lg/bold",
                        children: x.intl.string(x.t.rlNJwc),
                      }),
                      (0, r.jsx)(h.Z, { user: o, fill: !0 }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: b.content,
                    children: [
                      (0, r.jsx)(m.Z, { inModal: !0 }),
                      (0, r.jsx)(a.Text, {
                        className: b.disclaimer,
                        variant: "text-xs/normal",
                        color: "text-normal",
                        children: x.intl.format(x.t.snlFqa, {
                          username: i.ZP.getName(o),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(a.ModalFooter, {
                children: (0, r.jsx)("form", {
                  onSubmit: (e) => {
                    e.preventDefault(), g(o);
                  },
                  children: (0, r.jsxs)("div", {
                    className: b.footer,
                    children: [
                      (0, r.jsx)(a.Button, {
                        className: b.button,
                        type: "button",
                        disabled: C,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        onClick: j,
                        size: a.Button.Sizes.SMALL,
                        children: x.intl.string(x.t["ETE/oK"]),
                      }),
                      (0, r.jsx)(a.Button, {
                        className: b.button,
                        type: "submit",
                        disabled: C,
                        submitting: C,
                        color: a.ButtonColors.BRAND,
                        size: a.Button.Sizes.SMALL,
                        children: x.intl.string(x.t["wI/jo6"]),
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
    571202: function (e, t, o) {
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
//# sourceMappingURL=7f7ff5795a2acc826a60.js.map
