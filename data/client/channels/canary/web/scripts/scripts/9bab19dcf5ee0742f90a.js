"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72458"],
  {
    915509: function (t, a, n) {
      n.d(a, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var e = n(200651),
        o = n(192379),
        r = n(120356),
        i = n.n(r),
        l = n(481060),
        d = n(313201),
        s = n(388032),
        c = n(237384);
      function u(t) {
        let {
            errorText: a,
            title: n,
            description: r,
            transitionState: u,
            onCancel: f,
            onConfirm: m,
            children: p,
          } = t,
          x = (0, d.Dt)(),
          [g, C] = o.useState(!1),
          h = o.useCallback(async () => {
            C(!0);
            try {
              await m();
            } catch (t) {
              throw t;
            } finally {
              C(!1);
            }
          }, [m]);
        return (0, e.jsxs)(l.ModalRoot, {
          className: c.modal,
          transitionState: u,
          "aria-labelledby": x,
          size: l.ModalSize.SMALL,
          children: [
            (0, e.jsxs)(l.ModalContent, {
              className: c.modalContent,
              children: [
                (0, e.jsx)(l.Heading, {
                  variant: "heading-md/semibold",
                  id: x,
                  children: n,
                }),
                null != r && "" !== r
                  ? (0, e.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: c.description,
                      children: r,
                    })
                  : null,
                (0, e.jsx)("div", { className: c.body, children: p }),
                null != a && "" !== a
                  ? (0, e.jsx)(l.Text, {
                      className: c.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: a,
                    })
                  : null,
              ],
            }),
            (0, e.jsxs)(l.ModalFooter, {
              children: [
                (0, e.jsx)(l.Button, {
                  submitting: g,
                  className: c.button,
                  size: l.Button.Sizes.SMALL,
                  color: l.Button.Colors.BRAND,
                  onClick: h,
                  children: s.intl.string(s.t.R3BPHx),
                }),
                (0, e.jsx)(l.Button, {
                  className: i()(c.cancelButton, c.button),
                  size: l.Button.Sizes.SMALL,
                  color: l.Button.Colors.PRIMARY,
                  onClick: f,
                  children: s.intl.string(s.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    694278: function (t, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return m;
          },
        }),
        n(47120);
      var e = n(200651),
        o = n(192379),
        r = n(481060),
        i = n(881052),
        l = n(434404),
        d = n(78451),
        s = n(915509),
        c = n(981631),
        u = n(388032),
        f = n(275477);
      function m(t) {
        let { guild: a, onClose: n, hideColors: m } = t,
          [p, x] = o.useState(a.verificationLevel),
          [g, C] = o.useState(null),
          h = a.hasFeature(c.oNc.COMMUNITY),
          _ = (0, d.IF)(h, m).filter((t) => !t.disabled),
          I = o.useCallback(async () => {
            null != g && C(null);
            try {
              await l.Z.saveGuild(a.id, { verificationLevel: p }),
                l.Z.updateGuild({ verificationLevel: p }),
                n();
            } catch (t) {
              C(new i.Hx(t).getAnyErrorMessage());
            }
          }, [g, a.id, p, n]);
        return (0, e.jsx)(s.Z, {
          ...t,
          title: u.intl.string(u.t.DpRdYG),
          errorText: g,
          onConfirm: I,
          onCancel: n,
          children: (0, e.jsxs)(r.FormSection, {
            children: [
              (0, e.jsx)(r.FormText, {
                type: r.FormText.Types.DESCRIPTION,
                className: f.marginBottom20,
                children: u.intl.format(u.t.iuRk2t, {}),
              }),
              (0, e.jsx)(r.RadioGroup, {
                value: p,
                options: _,
                onChange: (t) => x(t.value),
              }),
            ],
          }),
        });
      }
    },
    237384: function (t, a, n) {
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
//# sourceMappingURL=9bab19dcf5ee0742f90a.js.map
