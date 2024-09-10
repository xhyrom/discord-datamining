"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94064"],
  {
    915509: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return u;
        },
      }),
        a(47120);
      var t = a(735250),
        l = a(470079),
        r = a(120356),
        o = a.n(r),
        s = a(481060),
        i = a(313201),
        c = a(689938),
        d = a(352784);
      function u(e) {
        let {
            errorText: n,
            title: a,
            description: r,
            transitionState: u,
            onCancel: f,
            onConfirm: m,
            children: I,
          } = e,
          C = (0, i.Dt)(),
          [p, _] = l.useState(!1),
          E = l.useCallback(async () => {
            _(!0);
            try {
              await m();
            } catch (e) {
              throw e;
            } finally {
              _(!1);
            }
          }, [m]);
        return (0, t.jsxs)(s.ModalRoot, {
          className: d.modal,
          transitionState: u,
          "aria-labelledby": C,
          size: s.ModalSize.SMALL,
          children: [
            (0, t.jsxs)(s.ModalContent, {
              className: d.modalContent,
              children: [
                (0, t.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  id: C,
                  children: a,
                }),
                null != r && "" !== r
                  ? (0, t.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: d.description,
                      children: r,
                    })
                  : null,
                (0, t.jsx)("div", { className: d.body, children: I }),
                null != n && "" !== n
                  ? (0, t.jsx)(s.Text, {
                      className: d.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: n,
                    })
                  : null,
              ],
            }),
            (0, t.jsxs)(s.ModalFooter, {
              children: [
                (0, t.jsx)(s.Button, {
                  submitting: p,
                  className: d.button,
                  size: s.Button.Sizes.SMALL,
                  color: s.Button.Colors.BRAND,
                  onClick: E,
                  children: c.Z.Messages.SAVE,
                }),
                (0, t.jsx)(s.Button, {
                  className: o()(d.cancelButton, d.button),
                  size: s.Button.Sizes.SMALL,
                  color: s.Button.Colors.PRIMARY,
                  onClick: f,
                  children: c.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    607569: function (e, n, a) {
      a.r(n), a(47120), a(757143);
      var t = a(735250),
        l = a(470079),
        r = a(120356),
        o = a.n(r),
        s = a(225857),
        i = a(290843),
        c = a(692547),
        d = a(481060),
        u = a(881052),
        f = a(186523),
        m = a(246364),
        I = a(915509),
        C = a(592286),
        p = a(689938),
        _ = a(352784);
      let E = "MULTIPLE_CHOICE",
        x = (e) => {
          let {
              choice: n,
              index: a,
              onChange: r,
              onClear: c,
              onReorder: u,
              isDropHovered: m,
            } = e,
            I = l.useRef(null),
            C = l.useRef(null),
            [, x, h] = (0, s.c)({
              type: E,
              item: { choice: n, index: a },
              end: (e, n) => {
                null != e && !n.didDrop() && u(e.choice, null, !0);
              },
            }),
            [, g] = (0, i.L)({
              accept: E,
              hover: (e, n) => {
                var t;
                let { index: l } = e,
                  r =
                    null === (t = I.current) || void 0 === t
                      ? void 0
                      : t.getBoundingClientRect(),
                  o = n.getClientOffset();
                if (null == r || null == o) return;
                let s = (r.bottom - r.top) / 2,
                  i = o.y - r.top;
                (!(l < a) || !(i < s)) &&
                  (!(l > a) || !(i > s)) &&
                  u(e.choice, a, !1);
              },
              drop: (e) => {
                u(e.choice, a, !0);
              },
            });
          return (
            l.useLayoutEffect(
              () => (
                x(C),
                h(g(I)),
                () => {
                  x(null), g(null);
                }
              ),
              [x, g, h],
            ),
            (0, t.jsxs)("div", {
              ref: I,
              className: o()(_.draggableInputContainer, { [_.dragging]: m }),
              "data-dnd-name": n,
              children: [
                (0, t.jsx)("div", {
                  className: _.radioIconEmptyContainer,
                  children: (0, t.jsx)(f.Z, {
                    height: 20,
                    width: 20,
                    className: _.radioIconEmpty,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: _.inputWrapper,
                  children: [
                    (0, t.jsx)(d.TextInput, {
                      autoFocus: !0,
                      onChange: (e) => r(e),
                      placeholder:
                        p.Z.Messages.MEMBER_VERIFICATION_MULTIPLE_CHOICE_PLACEHOLDER.format(
                          { index: a + 1 },
                        ),
                      value: n,
                    }),
                    (0, t.jsx)(d.Button, {
                      className: _.clearButton,
                      onClick: c,
                      look: d.Button.Looks.BLANK,
                      size: d.Button.Sizes.NONE,
                      children: (0, t.jsx)(d.CircleXIcon, {
                        size: "md",
                        color: "currentColor",
                        className: _.clearIcon,
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  ref: C,
                  className: _.dragContainer,
                  "data-dnd-name": n,
                  children: (0, t.jsx)(d.DragIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: _.dragIcon,
                  }),
                }),
              ],
            })
          );
        };
      n.default = function (e) {
        var n, a;
        let { field: r, onSave: o, onClose: s } = e,
          [i, f] = l.useState(
            null !== (n = null == r ? void 0 : r.label) && void 0 !== n
              ? n
              : "",
          ),
          [E, h] = l.useState(
            null !== (a = null == r ? void 0 : r.choices) && void 0 !== a
              ? a
              : [""],
          ),
          [g, R] = l.useState(null),
          [M, N] = l.useState(null),
          v = (e, n) => {
            null != g && R(null);
            let a = e.replace(/(\r\n|\n|\r)/g, " ");
            a.length > C.au && (a = a.slice(0, C.au));
            let t = [...E];
            (t[n] = a), h(t);
          },
          B = (e, n, a) => {
            if (null == E) return;
            null != g && R(null);
            let t = E.indexOf(e),
              l = [...E];
            null != n && n !== t && (l.splice(t, 1), l.splice(n, 0, e), h(l)),
              a ? null !== n && N(null) : n !== M && N(n);
          },
          b = (e) => {
            null != g && R(null);
            let n = [...E.slice(0, e), ...E.slice(e + 1)];
            h(0 === n.length ? [""] : n);
          },
          j = async () => {
            null != g && R(null);
            let e = i.trim();
            if ("" === e) {
              R(p.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR);
              return;
            }
            if (0 === E.map((e) => e.trim()).filter((e) => "" !== e).length) {
              R(p.Z.Messages.MEMBER_VERIFICATION_CHOICES_REQUIRED_ERROR);
              return;
            }
            let n = {
              field_type: m.QJ.MULTIPLE_CHOICE,
              label: e,
              choices: E,
              required: !0,
            };
            try {
              await o(n), s();
            } catch (e) {
              R(new u.Hx(e).getAnyErrorMessage());
            }
          };
        return (0, t.jsxs)(I.Z, {
          ...e,
          errorText: g,
          title: p.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onConfirm: j,
          onCancel: s,
          children: [
            (0, t.jsx)(d.TextInput, {
              autoFocus: !0,
              className: _.spacedItem,
              onChange: (e) => {
                null != g && R(null);
                let n = e.replace(/(\r\n|\n|\r)/g, " ");
                n.length > C.XN && (n = e.slice(0, C.XN)), f(n);
              },
              placeholder: p.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,
              value: i,
            }),
            (0, t.jsx)("div", { className: _.divider }),
            E.map((e, n) =>
              (0, t.jsx)(
                x,
                {
                  choice: e,
                  index: n,
                  onChange: (e) => v(e, n),
                  onClear: () => b(n),
                  onReorder: B,
                  isDropHovered: n === M,
                },
                "choice-".concat(n),
              ),
            ),
            E.length !== C.mb &&
              (0, t.jsxs)("div", {
                className: _.addItemContainer,
                children: [
                  (0, t.jsx)(d.CirclePlusIcon, {
                    size: "custom",
                    height: 17,
                    width: 17,
                    color: c.Z.unsafe_rawColors.BLUE_345.css,
                  }),
                  (0, t.jsx)(d.Clickable, {
                    className: _.addItemButton,
                    onClick: () => {
                      null != g && R(null), E.length !== C.mb && h([...E, ""]);
                    },
                    children: (0, t.jsx)(d.Text, {
                      color: "text-link",
                      variant: "text-md/normal",
                      children:
                        p.Z.Messages.MEMBER_VERIFICATION_MULTIPLE_CHOICE_ADD,
                    }),
                  }),
                ],
              }),
          ],
        });
      };
    },
    352784: function (e, n, a) {
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
//# sourceMappingURL=2d7091422ece8017254e.js.map
