"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["804"],
  {
    89616: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        }),
        n(47120);
      var o = n(200651),
        s = n(192379),
        l = n(481060),
        a = n(365007),
        i = n(388032),
        r = n(651744);
      function c(t) {
        let { transitionState: e, onClose: n, credential: c } = t,
          [d, u] = s.useState(!1),
          [h, m] = s.useState(""),
          [x, f] = s.useState(void 0),
          g = s.useRef(null);
        async function j(t) {
          t.preventDefault(), u(!0);
          try {
            await (0, a.WQ)(c.id, h), n();
          } catch (t) {
            f(t.message);
          } finally {
            u(!1);
          }
        }
        return (
          s.useEffect(() => {
            if (e === l.ModalTransitionState.ENTERED) {
              var t;
              null === (t = g.current) || void 0 === t || t.focus();
            }
          }, [e]),
          (0, o.jsxs)(l.ModalRoot, {
            transitionState: e,
            children: [
              (0, o.jsxs)(l.ModalHeader, {
                separator: !1,
                className: r.header,
                children: [
                  (0, o.jsx)(l.Text, {
                    color: "header-secondary",
                    variant: "text-lg/bold",
                    className: r.subtitle,
                    children: i.intl.string(i.t.YjuMsb),
                  }),
                  (0, o.jsx)(l.ModalCloseButton, {
                    onClick: n,
                    className: r.modalCloseButton,
                  }),
                ],
              }),
              (0, o.jsxs)("form", {
                onSubmit: j,
                children: [
                  (0, o.jsx)(l.ModalContent, {
                    className: r.content,
                    children: (0, o.jsx)(l.FormItem, {
                      title: i.intl.string(i.t["7yEgJS"]),
                      error: x,
                      required: !0,
                      children: (0, o.jsx)("div", {
                        children: (0, o.jsx)(l.TextInput, {
                          inputRef: g,
                          "aria-label": i.intl.string(i.t["7yEgJS"]),
                          placeholder: c.name,
                          value: h,
                          minLength: 1,
                          maxLength: 32,
                          onChange: m,
                          autoFocus: !0,
                          required: !0,
                        }),
                      }),
                    }),
                  }),
                  (0, o.jsxs)(l.ModalFooter, {
                    children: [
                      (0, o.jsx)(l.Button, {
                        type: "submit",
                        color: l.Button.Colors.BRAND,
                        size: l.Button.Sizes.MEDIUM,
                        submitting: d,
                        disabled: 0 === h.length || h.length > 32,
                        children: i.intl.string(i.t.i4jeWV),
                      }),
                      (0, o.jsx)(l.Button, {
                        className: r.cancel,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: n,
                        children: i.intl.string(i.t["ETE/oK"]),
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
    651744: function (t, e, n) {
      t.exports = {
        content: "content_d3d2c6",
        header: "header_d3d2c6",
        subtitle: "subtitle_d3d2c6",
        modalCloseButton: "modalCloseButton_d3d2c6",
        cancel: "cancel_d3d2c6",
      };
    },
  },
]);
//# sourceMappingURL=c721ad306e23f5920f29.js.map
