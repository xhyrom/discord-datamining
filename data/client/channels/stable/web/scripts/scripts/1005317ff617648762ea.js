"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6595"],
  {
    915509: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      }),
        e(47120);
      var a = e(200651),
        r = e(192379),
        l = e(120356),
        o = e.n(l),
        i = e(481060),
        s = e(313201),
        d = e(388032),
        u = e(516497);
      function c(t) {
        let {
            errorText: n,
            title: e,
            description: l,
            transitionState: c,
            onCancel: f,
            onConfirm: m,
            children: p,
          } = t,
          x = (0, s.Dt)(),
          [g, _] = r.useState(!1),
          C = r.useCallback(async () => {
            _(!0);
            try {
              await m();
            } catch (t) {
              throw t;
            } finally {
              _(!1);
            }
          }, [m]);
        return (0, a.jsxs)(i.ModalRoot, {
          className: u.modal,
          transitionState: c,
          "aria-labelledby": x,
          size: i.ModalSize.SMALL,
          children: [
            (0, a.jsxs)(i.ModalContent, {
              className: u.modalContent,
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  id: x,
                  children: e,
                }),
                null != l && "" !== l
                  ? (0, a.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: u.description,
                      children: l,
                    })
                  : null,
                (0, a.jsx)("div", { className: u.body, children: p }),
                null != n && "" !== n
                  ? (0, a.jsx)(i.Text, {
                      className: u.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: n,
                    })
                  : null,
              ],
            }),
            (0, a.jsxs)(i.ModalFooter, {
              children: [
                (0, a.jsx)(i.Button, {
                  submitting: g,
                  className: u.button,
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.BRAND,
                  onClick: C,
                  children: d.intl.string(d.t.R3BPHx),
                }),
                (0, a.jsx)(i.Button, {
                  className: o()(u.cancelButton, u.button),
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.PRIMARY,
                  onClick: f,
                  children: d.intl.string(d.t["ETE/oK"]),
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
            return m;
          },
          TextInputFormFieldModal: function () {
            return f;
          },
        }),
        e(47120),
        e(757143);
      var a = e(200651),
        r = e(192379),
        l = e(481060),
        o = e(881052),
        i = e(246364),
        s = e(915509),
        d = e(592286),
        u = e(388032);
      function c(t) {
        var n;
        let {
            type: e,
            title: i,
            description: c,
            field: f,
            onSave: m,
            onClose: p,
          } = t,
          [x, g] = r.useState(
            null !== (n = null == f ? void 0 : f.label) && void 0 !== n
              ? n
              : "",
          ),
          [_, C] = r.useState(null),
          h = async () => {
            null != _ && C(null);
            let t = x.trim();
            if ("" === t) {
              C(u.intl.string(u.t["G+TI4+"]));
              return;
            }
            try {
              await m({ field_type: e, label: t, required: !0 }), p();
            } catch (t) {
              C(new o.Hx(t).getAnyErrorMessage());
            }
          };
        return (0, a.jsx)(s.Z, {
          ...t,
          errorText: _,
          title: i,
          description: c,
          onConfirm: h,
          onCancel: p,
          children: (0, a.jsx)(l.TextInput, {
            onChange: (t) => {
              null != _ && C(null);
              let n = t.replace(/(\r\n|\n|\r)/g, " ");
              n.length > d.XN && (n = n.slice(0, d.XN)), g(n);
            },
            placeholder: u.intl.string(u.t.fqVmbG),
            value: x,
            onKeyDown: (t) => "Enter" === t.key && h(),
          }),
        });
      }
      function f(t) {
        return (0, a.jsx)(c, {
          title: u.intl.string(u.t.w6Q9w8),
          description: u.intl.string(u.t["A6M+qq"]),
          type: i.QJ.TEXT_INPUT,
          ...t,
        });
      }
      function m(t) {
        return (0, a.jsx)(c, {
          title: u.intl.string(u.t.gG0JBA),
          description: u.intl.string(u.t.SMX0iY),
          type: i.QJ.PARAGRAPH,
          ...t,
        });
      }
    },
    516497: function (t, n, e) {
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
        rulesInputNumber: "rulesInputNumber_f152fa",
        rulesTextAreaInput: "rulesTextAreaInput_f152fa",
        clearIcon: "clearIcon_f152fa",
        dragContainer: "dragContainer_f152fa",
        dragIcon: "dragIcon_f152fa",
        divider: "divider_f152fa",
        termsExampleRulesContainer: "termsExampleRulesContainer_f152fa",
        termsExampleRulePairContainer: "termsExampleRulePairContainer_f152fa",
        exampleRule: "exampleRule_f152fa",
        disabled: "disabled_f152fa",
        errorText: "errorText_f152fa",
        spacedItem: "spacedItem_f152fa",
        button: "button_f152fa",
        cancelButton: "cancelButton_f152fa",
        characterCount: "characterCount_f152fa",
        radioIconEmptyContainer: "radioIconEmptyContainer_f152fa",
        radioIconEmpty: "radioIconEmpty_f152fa",
      };
    },
  },
]);
//# sourceMappingURL=1005317ff617648762ea.js.map
