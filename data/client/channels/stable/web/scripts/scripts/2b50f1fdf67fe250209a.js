"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27933"],
  {
    915509: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var n = t(735250),
        r = t(470079),
        o = t(120356),
        l = t.n(o),
        i = t(481060),
        s = t(313201),
        d = t(689938),
        c = t(352784);
      function u(e) {
        let {
            errorText: a,
            title: t,
            description: o,
            transitionState: u,
            onCancel: f,
            onConfirm: m,
            children: p,
          } = e,
          x = (0, s.Dt)(),
          [C, _] = r.useState(!1),
          I = r.useCallback(async () => {
            _(!0);
            try {
              await m();
            } catch (e) {
              throw e;
            } finally {
              _(!1);
            }
          }, [m]);
        return (0, n.jsxs)(i.ModalRoot, {
          className: c.modal,
          transitionState: u,
          "aria-labelledby": x,
          size: i.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(i.ModalContent, {
              className: c.modalContent,
              children: [
                (0, n.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  id: x,
                  children: t,
                }),
                null != o && "" !== o
                  ? (0, n.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: c.description,
                      children: o,
                    })
                  : null,
                (0, n.jsx)("div", { className: c.body, children: p }),
                null != a && "" !== a
                  ? (0, n.jsx)(i.Text, {
                      className: c.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: a,
                    })
                  : null,
              ],
            }),
            (0, n.jsxs)(i.ModalFooter, {
              children: [
                (0, n.jsx)(i.Button, {
                  submitting: C,
                  className: c.button,
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.BRAND,
                  onClick: I,
                  children: d.Z.Messages.SAVE,
                }),
                (0, n.jsx)(i.Button, {
                  className: l()(c.cancelButton, c.button),
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.PRIMARY,
                  onClick: f,
                  children: d.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    694278: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return m;
          },
        }),
        t(47120);
      var n = t(735250),
        r = t(470079),
        o = t(481060),
        l = t(881052),
        i = t(434404),
        s = t(78451),
        d = t(915509),
        c = t(981631),
        u = t(689938),
        f = t(113207);
      function m(e) {
        let { guild: a, onClose: t, hideColors: m } = e,
          [p, x] = r.useState(a.verificationLevel),
          [C, _] = r.useState(null),
          I = a.hasFeature(c.oNc.COMMUNITY),
          g = (0, s.IF)(I, m).filter((e) => !e.disabled),
          h = r.useCallback(async () => {
            null != C && _(null);
            try {
              await i.Z.saveGuild(a.id, { verificationLevel: p }),
                i.Z.updateGuild({ verificationLevel: p }),
                t();
            } catch (e) {
              _(new l.Hx(e).getAnyErrorMessage());
            }
          }, [C, a.id, p, t]);
        return (0, n.jsx)(d.Z, {
          ...e,
          title: u.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL,
          errorText: C,
          onConfirm: h,
          onCancel: t,
          children: (0, n.jsxs)(o.FormSection, {
            children: [
              (0, n.jsx)(o.FormText, {
                type: o.FormText.Types.DESCRIPTION,
                className: f.marginBottom20,
                children: u.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format(),
              }),
              (0, n.jsx)(o.RadioGroup, {
                value: p,
                options: g,
                onChange: (e) => x(e.value),
              }),
            ],
          }),
        });
      }
    },
    352784: function (e, a, t) {
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
//# sourceMappingURL=2b50f1fdf67fe250209a.js.map
