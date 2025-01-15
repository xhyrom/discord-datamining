"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6595"],
  {
    915509: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      }),
        e(47120);
      var a = e(200651),
        r = e(192379),
        o = e(120356),
        i = e.n(o),
        l = e(481060),
        d = e(313201),
        c = e(388032),
        s = e(237384);
      function u(t) {
        let {
            errorText: n,
            title: e,
            description: o,
            transitionState: u,
            onCancel: f,
            onConfirm: p,
            children: m,
          } = t,
          g = (0, d.Dt)(),
          [x, h] = r.useState(!1),
          _ = r.useCallback(async () => {
            h(!0);
            try {
              await p();
            } catch (t) {
              throw t;
            } finally {
              h(!1);
            }
          }, [p]);
        return (0, a.jsxs)(l.ModalRoot, {
          className: s.modal,
          transitionState: u,
          "aria-labelledby": g,
          size: l.ModalSize.SMALL,
          children: [
            (0, a.jsxs)(l.ModalContent, {
              className: s.modalContent,
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "heading-md/semibold",
                  id: g,
                  children: e,
                }),
                null != o && "" !== o
                  ? (0, a.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: s.description,
                      children: o,
                    })
                  : null,
                (0, a.jsx)("div", { className: s.body, children: m }),
                null != n && "" !== n
                  ? (0, a.jsx)(l.Text, {
                      className: s.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: n,
                    })
                  : null,
              ],
            }),
            (0, a.jsxs)(l.ModalFooter, {
              children: [
                (0, a.jsx)(l.Button, {
                  submitting: x,
                  className: s.button,
                  size: l.Button.Sizes.SMALL,
                  color: l.Button.Colors.BRAND,
                  onClick: _,
                  children: c.intl.string(c.t.R3BPHx),
                }),
                (0, a.jsx)(l.Button, {
                  className: i()(s.cancelButton, s.button),
                  size: l.Button.Sizes.SMALL,
                  color: l.Button.Colors.PRIMARY,
                  onClick: f,
                  children: c.intl.string(c.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    457042: function (t, n, e) {
      e.r(n),
        e.d(n, {
          ParagraphFormFieldModal: function () {
            return p;
          },
          TextInputFormFieldModal: function () {
            return f;
          },
        }),
        e(47120),
        e(757143);
      var a = e(200651),
        r = e(192379),
        o = e(481060),
        i = e(881052),
        l = e(246364),
        d = e(915509),
        c = e(592286),
        s = e(388032);
      function u(t) {
        var n;
        let {
            type: e,
            title: l,
            description: u,
            field: f,
            onSave: p,
            onClose: m,
          } = t,
          [g, x] = r.useState(
            null !== (n = null == f ? void 0 : f.label) && void 0 !== n
              ? n
              : "",
          ),
          [h, _] = r.useState(null),
          C = async () => {
            null != h && _(null);
            let t = g.trim();
            if ("" === t) {
              _(s.intl.string(s.t["G+TI4+"]));
              return;
            }
            try {
              await p({ field_type: e, label: t, required: !0 }), m();
            } catch (t) {
              _(new i.Hx(t).getAnyErrorMessage());
            }
          };
        return (0, a.jsx)(d.Z, {
          ...t,
          errorText: h,
          title: l,
          description: u,
          onConfirm: C,
          onCancel: m,
          children: (0, a.jsx)(o.TextInput, {
            onChange: (t) => {
              null != h && _(null);
              let n = t.replace(/(\r\n|\n|\r)/g, " ");
              n.length > c.XN && (n = n.slice(0, c.XN)), x(n);
            },
            placeholder: s.intl.string(s.t.fqVmbG),
            value: g,
            onKeyDown: (t) => "Enter" === t.key && C(),
          }),
        });
      }
      function f(t) {
        return (0, a.jsx)(u, {
          title: s.intl.string(s.t.w6Q9w8),
          description: s.intl.string(s.t["A6M+qq"]),
          type: l.QJ.TEXT_INPUT,
          ...t,
        });
      }
      function p(t) {
        return (0, a.jsx)(u, {
          title: s.intl.string(s.t.gG0JBA),
          description: s.intl.string(s.t.SMX0iY),
          type: l.QJ.PARAGRAPH,
          ...t,
        });
      }
    },
    237384: function (t, n, e) {
      t.exports = {
        modal: "modal_f152fa",
        description: "description_f152fa",
        body: "body_f152fa",
        modalContent: "modalContent_f152fa",
        addItemContainer: "addItemContainer_f152fa",
        addItemButton: "addItemButton_f152fa",
        dragging: "dragging_f152fa",
        draggableInputContainer: "draggableInputContainer_f152fa",
        inputWrapper: "inputWrapper_f152fa",
        clearButton: "clearButton_f152fa",
        clearIcon: "clearIcon_f152fa",
        dragContainer: "dragContainer_f152fa",
        dragIcon: "dragIcon_f152fa",
        divider: "divider_f152fa",
        errorText: "errorText_f152fa",
        spacedItem: "spacedItem_f152fa",
        button: "button_f152fa",
        cancelButton: "cancelButton_f152fa",
        radioIconEmptyContainer: "radioIconEmptyContainer_f152fa",
        radioIconEmpty: "radioIconEmpty_f152fa",
      };
    },
  },
]);
//# sourceMappingURL=a40d3efd27a28e968846.js.map
