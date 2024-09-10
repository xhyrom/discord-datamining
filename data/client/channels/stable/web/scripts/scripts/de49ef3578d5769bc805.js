"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6595"],
  {
    915509: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return c;
        },
      }),
        a(47120);
      var n = a(735250),
        r = a(470079),
        o = a(120356),
        l = a.n(o),
        s = a(481060),
        i = a(313201),
        d = a(689938),
        u = a(352784);
      function c(e) {
        let {
            errorText: t,
            title: a,
            description: o,
            transitionState: c,
            onCancel: f,
            onConfirm: I,
            children: _,
          } = e,
          p = (0, i.Dt)(),
          [E, m] = r.useState(!1),
          C = r.useCallback(async () => {
            m(!0);
            try {
              await I();
            } catch (e) {
              throw e;
            } finally {
              m(!1);
            }
          }, [I]);
        return (0, n.jsxs)(s.ModalRoot, {
          className: u.modal,
          transitionState: c,
          "aria-labelledby": p,
          size: s.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(s.ModalContent, {
              className: u.modalContent,
              children: [
                (0, n.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  id: p,
                  children: a,
                }),
                null != o && "" !== o
                  ? (0, n.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: u.description,
                      children: o,
                    })
                  : null,
                (0, n.jsx)("div", { className: u.body, children: _ }),
                null != t && "" !== t
                  ? (0, n.jsx)(s.Text, {
                      className: u.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: t,
                    })
                  : null,
              ],
            }),
            (0, n.jsxs)(s.ModalFooter, {
              children: [
                (0, n.jsx)(s.Button, {
                  submitting: E,
                  className: u.button,
                  size: s.Button.Sizes.SMALL,
                  color: s.Button.Colors.BRAND,
                  onClick: C,
                  children: d.Z.Messages.SAVE,
                }),
                (0, n.jsx)(s.Button, {
                  className: l()(u.cancelButton, u.button),
                  size: s.Button.Sizes.SMALL,
                  color: s.Button.Colors.PRIMARY,
                  onClick: f,
                  children: d.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    457042: function (e, t, a) {
      a.r(t),
        a.d(t, {
          ParagraphFormFieldModal: function () {
            return I;
          },
          TextInputFormFieldModal: function () {
            return f;
          },
        }),
        a(47120),
        a(757143);
      var n = a(735250),
        r = a(470079),
        o = a(481060),
        l = a(881052),
        s = a(246364),
        i = a(915509),
        d = a(592286),
        u = a(689938);
      function c(e) {
        var t;
        let {
            type: a,
            title: s,
            description: c,
            field: f,
            onSave: I,
            onClose: _,
          } = e,
          [p, E] = r.useState(
            null !== (t = null == f ? void 0 : f.label) && void 0 !== t
              ? t
              : "",
          ),
          [m, C] = r.useState(null),
          R = async () => {
            null != m && C(null);
            let e = p.trim();
            if ("" === e) {
              C(u.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR);
              return;
            }
            try {
              await I({ field_type: a, label: e, required: !0 }), _();
            } catch (e) {
              C(new l.Hx(e).getAnyErrorMessage());
            }
          };
        return (0, n.jsx)(i.Z, {
          ...e,
          errorText: m,
          title: s,
          description: c,
          onConfirm: R,
          onCancel: _,
          children: (0, n.jsx)(o.TextInput, {
            onChange: (e) => {
              null != m && C(null);
              let t = e.replace(/(\r\n|\n|\r)/g, " ");
              t.length > d.XN && (t = t.slice(0, d.XN)), E(t);
            },
            placeholder: u.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,
            value: p,
            onKeyDown: (e) => "Enter" === e.key && R(),
          }),
        });
      }
      function f(e) {
        return (0, n.jsx)(c, {
          title: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          description:
            u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_TEXT_DESCRIPTION,
          type: s.QJ.TEXT_INPUT,
          ...e,
        });
      }
      function I(e) {
        return (0, n.jsx)(c, {
          title: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          description:
            u.Z.Messages
              .GUILD_SETTINGS_MEMBER_VERIFICATION_PARAGRAPH_DESCRIPTION,
          type: s.QJ.PARAGRAPH,
          ...e,
        });
      }
    },
    352784: function (e, t, a) {
      e.exports = {
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
//# sourceMappingURL=de49ef3578d5769bc805.js.map
