"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["804"],
  {
    89616: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        }),
        s(47120);
      var n = s(735250),
        o = s(470079),
        a = s(481060),
        l = s(365007),
        c = s(689938),
        r = s(846177);
      function d(e) {
        let { transitionState: t, onClose: s, credential: d } = e,
          [i, u] = o.useState(!1),
          [h, _] = o.useState(""),
          [E, M] = o.useState(void 0),
          m = o.useRef(null);
        async function N(e) {
          e.preventDefault(), u(!0);
          try {
            await (0, l.WQ)(d.id, h), s();
          } catch (e) {
            M(e.message);
          } finally {
            u(!1);
          }
        }
        return (
          o.useEffect(() => {
            if (t === a.ModalTransitionState.ENTERED) {
              var e;
              null === (e = m.current) || void 0 === e || e.focus();
            }
          }, [t]),
          (0, n.jsxs)(a.ModalRoot, {
            transitionState: t,
            children: [
              (0, n.jsxs)(a.ModalHeader, {
                separator: !1,
                className: r.header,
                children: [
                  (0, n.jsx)(a.Text, {
                    color: "header-secondary",
                    variant: "text-lg/bold",
                    className: r.subtitle,
                    children: c.Z.Messages.TWO_FA_WEBAUTHN_RENAME,
                  }),
                  (0, n.jsx)(a.ModalCloseButton, {
                    onClick: s,
                    className: r.modalCloseButton,
                  }),
                ],
              }),
              (0, n.jsxs)("form", {
                onSubmit: N,
                children: [
                  (0, n.jsx)(a.ModalContent, {
                    className: r.content,
                    children: (0, n.jsx)(a.FormItem, {
                      title: c.Z.Messages.TWO_FA_WEBAUTHN_RENAME_FORM_NEW_KEY,
                      error: E,
                      required: !0,
                      children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(a.TextInput, {
                          inputRef: m,
                          "aria-label":
                            c.Z.Messages.TWO_FA_WEBAUTHN_RENAME_FORM_NEW_KEY,
                          placeholder: d.name,
                          value: h,
                          minLength: 1,
                          maxLength: 32,
                          onChange: _,
                          autoFocus: !0,
                          required: !0,
                        }),
                      }),
                    }),
                  }),
                  (0, n.jsxs)(a.ModalFooter, {
                    children: [
                      (0, n.jsx)(a.Button, {
                        type: "submit",
                        color: a.Button.Colors.BRAND,
                        size: a.Button.Sizes.MEDIUM,
                        submitting: i,
                        disabled: 0 === h.length || h.length > 32,
                        children: c.Z.Messages.DONE,
                      }),
                      (0, n.jsx)(a.Button, {
                        className: r.cancel,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        onClick: s,
                        children: c.Z.Messages.CANCEL,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    846177: function (e, t, s) {
      e.exports = {
        content: "content_d3d2c6",
        header: "header_d3d2c6",
        subtitle: "subtitle_d3d2c6",
        modalCloseButton: "modalCloseButton_d3d2c6",
        cancel: "cancel_d3d2c6",
      };
    },
  },
]);
//# sourceMappingURL=bcefe4ad5e2702d9071a.js.map
