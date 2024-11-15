"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27933"],
  {
    915509: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return u;
        },
      }),
        a(47120);
      var n = a(200651),
        r = a(192379),
        o = a(120356),
        i = a.n(o),
        l = a(481060),
        s = a(313201),
        d = a(388032),
        c = a(516497);
      function u(t) {
        let {
            errorText: e,
            title: a,
            description: o,
            transitionState: u,
            onCancel: f,
            onConfirm: m,
            children: p,
          } = t,
          x = (0, s.Dt)(),
          [C, _] = r.useState(!1),
          h = r.useCallback(async () => {
            _(!0);
            try {
              await m();
            } catch (t) {
              throw t;
            } finally {
              _(!1);
            }
          }, [m]);
        return (0, n.jsxs)(l.ModalRoot, {
          className: c.modal,
          transitionState: u,
          "aria-labelledby": x,
          size: l.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(l.ModalContent, {
              className: c.modalContent,
              children: [
                (0, n.jsx)(l.Heading, {
                  variant: "heading-md/semibold",
                  id: x,
                  children: a,
                }),
                null != o && "" !== o
                  ? (0, n.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: c.description,
                      children: o,
                    })
                  : null,
                (0, n.jsx)("div", { className: c.body, children: p }),
                null != e && "" !== e
                  ? (0, n.jsx)(l.Text, {
                      className: c.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: e,
                    })
                  : null,
              ],
            }),
            (0, n.jsxs)(l.ModalFooter, {
              children: [
                (0, n.jsx)(l.Button, {
                  submitting: C,
                  className: c.button,
                  size: l.Button.Sizes.SMALL,
                  color: l.Button.Colors.BRAND,
                  onClick: h,
                  children: d.intl.string(d.t.R3BPHx),
                }),
                (0, n.jsx)(l.Button, {
                  className: i()(c.cancelButton, c.button),
                  size: l.Button.Sizes.SMALL,
                  color: l.Button.Colors.PRIMARY,
                  onClick: f,
                  children: d.intl.string(d.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    694278: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return m;
          },
        }),
        a(47120);
      var n = a(200651),
        r = a(192379),
        o = a(481060),
        i = a(881052),
        l = a(434404),
        s = a(78451),
        d = a(915509),
        c = a(981631),
        u = a(388032),
        f = a(971436);
      function m(t) {
        let { guild: e, onClose: a, hideColors: m } = t,
          [p, x] = r.useState(e.verificationLevel),
          [C, _] = r.useState(null),
          h = e.hasFeature(c.oNc.COMMUNITY),
          g = (0, s.IF)(h, m).filter((t) => !t.disabled),
          I = r.useCallback(async () => {
            null != C && _(null);
            try {
              await l.Z.saveGuild(e.id, { verificationLevel: p }),
                l.Z.updateGuild({ verificationLevel: p }),
                a();
            } catch (t) {
              _(new i.Hx(t).getAnyErrorMessage());
            }
          }, [C, e.id, p, a]);
        return (0, n.jsx)(d.Z, {
          ...t,
          title: u.intl.string(u.t.DpRdYG),
          errorText: C,
          onConfirm: I,
          onCancel: a,
          children: (0, n.jsxs)(o.FormSection, {
            children: [
              (0, n.jsx)(o.FormText, {
                type: o.FormText.Types.DESCRIPTION,
                className: f.marginBottom20,
                children: u.intl.format(u.t.iuRk2t, {}),
              }),
              (0, n.jsx)(o.RadioGroup, {
                value: p,
                options: g,
                onChange: (t) => x(t.value),
              }),
            ],
          }),
        });
      }
    },
    516497: function (t, e, a) {
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
//# sourceMappingURL=312b0fee5dc02f06c24f.js.map
