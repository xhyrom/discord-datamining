"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94064"],
  {
    915509: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var l = t(200651),
        a = t(192379),
        r = t(120356),
        o = t.n(r),
        i = t(481060),
        s = t(313201),
        c = t(388032),
        d = t(516497);
      function u(e) {
        let {
            errorText: n,
            title: t,
            description: r,
            transitionState: u,
            onCancel: f,
            onConfirm: m,
            children: p,
          } = e,
          x = (0, s.Dt)(),
          [h, g] = a.useState(!1),
          C = a.useCallback(async () => {
            g(!0);
            try {
              await m();
            } catch (e) {
              throw e;
            } finally {
              g(!1);
            }
          }, [m]);
        return (0, l.jsxs)(i.ModalRoot, {
          className: d.modal,
          transitionState: u,
          "aria-labelledby": x,
          size: i.ModalSize.SMALL,
          children: [
            (0, l.jsxs)(i.ModalContent, {
              className: d.modalContent,
              children: [
                (0, l.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  id: x,
                  children: t,
                }),
                null != r && "" !== r
                  ? (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: d.description,
                      children: r,
                    })
                  : null,
                (0, l.jsx)("div", { className: d.body, children: p }),
                null != n && "" !== n
                  ? (0, l.jsx)(i.Text, {
                      className: d.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: n,
                    })
                  : null,
              ],
            }),
            (0, l.jsxs)(i.ModalFooter, {
              children: [
                (0, l.jsx)(i.Button, {
                  submitting: h,
                  className: d.button,
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.BRAND,
                  onClick: C,
                  children: c.intl.string(c.t.R3BPHx),
                }),
                (0, l.jsx)(i.Button, {
                  className: o()(d.cancelButton, d.button),
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.PRIMARY,
                  onClick: f,
                  children: c.intl.string(c.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    607569: function (e, n, t) {
      t.r(n), t(47120), t(757143);
      var l = t(200651),
        a = t(192379),
        r = t(120356),
        o = t.n(r),
        i = t(999153),
        s = t(584922),
        c = t(692547),
        d = t(481060),
        u = t(881052),
        f = t(186523),
        m = t(246364),
        p = t(915509),
        x = t(592286),
        h = t(388032),
        g = t(516497);
      let C = "MULTIPLE_CHOICE",
        I = (e) => {
          let {
              choice: n,
              index: t,
              onChange: r,
              onClear: c,
              onReorder: u,
              isDropHovered: m,
            } = e,
            p = a.useRef(null),
            x = a.useRef(null),
            [, I, _] = (0, i.c)({
              type: C,
              item: { choice: n, index: t },
              end: (e, n) => {
                null != e && !n.didDrop() && u(e.choice, null, !0);
              },
            }),
            [, b] = (0, s.L)({
              accept: C,
              hover: (e, n) => {
                var l;
                let { index: a } = e,
                  r =
                    null === (l = p.current) || void 0 === l
                      ? void 0
                      : l.getBoundingClientRect(),
                  o = n.getClientOffset();
                if (null == r || null == o) return;
                let i = (r.bottom - r.top) / 2,
                  s = o.y - r.top;
                (!(a < t) || !(s < i)) &&
                  (!(a > t) || !(s > i)) &&
                  u(e.choice, t, !1);
              },
              drop: (e) => {
                u(e.choice, t, !0);
              },
            });
          return (
            a.useLayoutEffect(
              () => (
                I(x),
                _(b(p)),
                () => {
                  I(null), b(null);
                }
              ),
              [I, b, _],
            ),
            (0, l.jsxs)("div", {
              ref: p,
              className: o()(g.draggableInputContainer, { [g.dragging]: m }),
              "data-dnd-name": n,
              children: [
                (0, l.jsx)("div", {
                  className: g.radioIconEmptyContainer,
                  children: (0, l.jsx)(f.Z, {
                    height: 20,
                    width: 20,
                    className: g.radioIconEmpty,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: g.inputWrapper,
                  children: [
                    (0, l.jsx)(d.TextInput, {
                      autoFocus: !0,
                      onChange: (e) => r(e),
                      placeholder: h.intl.formatToPlainString(h.t["Ep/pbG"], {
                        index: t + 1,
                      }),
                      value: n,
                    }),
                    (0, l.jsx)(d.Button, {
                      className: g.clearButton,
                      onClick: c,
                      look: d.Button.Looks.BLANK,
                      size: d.Button.Sizes.NONE,
                      children: (0, l.jsx)(d.CircleXIcon, {
                        size: "md",
                        color: "currentColor",
                        className: g.clearIcon,
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  ref: x,
                  className: g.dragContainer,
                  "data-dnd-name": n,
                  children: (0, l.jsx)(d.DragIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: g.dragIcon,
                  }),
                }),
              ],
            })
          );
        };
      n.default = function (e) {
        var n, t;
        let { field: r, onSave: o, onClose: i } = e,
          [s, f] = a.useState(
            null !== (n = null == r ? void 0 : r.label) && void 0 !== n
              ? n
              : "",
          ),
          [C, _] = a.useState(
            null !== (t = null == r ? void 0 : r.choices) && void 0 !== t
              ? t
              : [""],
          ),
          [b, v] = a.useState(null),
          [j, N] = a.useState(null),
          B = (e, n) => {
            null != b && v(null);
            let t = e.replace(/(\r\n|\n|\r)/g, " ");
            t.length > x.au && (t = t.slice(0, x.au));
            let l = [...C];
            (l[n] = t), _(l);
          },
          y = (e, n, t) => {
            if (null == C) return;
            null != b && v(null);
            let l = C.indexOf(e),
              a = [...C];
            null != n && n !== l && (a.splice(l, 1), a.splice(n, 0, e), _(a)),
              t ? null !== n && N(null) : n !== j && N(n);
          },
          E = (e) => {
            null != b && v(null);
            let n = [...C.slice(0, e), ...C.slice(e + 1)];
            _(0 === n.length ? [""] : n);
          },
          T = async () => {
            null != b && v(null);
            let e = s.trim();
            if ("" === e) {
              v(h.intl.string(h.t["G+TI4+"]));
              return;
            }
            if (0 === C.map((e) => e.trim()).filter((e) => "" !== e).length) {
              v(h.intl.string(h.t.jZoHgI));
              return;
            }
            let n = {
              field_type: m.QJ.MULTIPLE_CHOICE,
              label: e,
              choices: C,
              required: !0,
            };
            try {
              await o(n), i();
            } catch (e) {
              v(new u.Hx(e).getAnyErrorMessage());
            }
          };
        return (0, l.jsxs)(p.Z, {
          ...e,
          errorText: b,
          title: h.intl.string(h.t.ooKh3t),
          onConfirm: T,
          onCancel: i,
          children: [
            (0, l.jsx)(d.TextInput, {
              autoFocus: !0,
              className: g.spacedItem,
              onChange: (e) => {
                null != b && v(null);
                let n = e.replace(/(\r\n|\n|\r)/g, " ");
                n.length > x.XN && (n = e.slice(0, x.XN)), f(n);
              },
              placeholder: h.intl.string(h.t.fqVmbG),
              value: s,
            }),
            (0, l.jsx)("div", { className: g.divider }),
            C.map((e, n) =>
              (0, l.jsx)(
                I,
                {
                  choice: e,
                  index: n,
                  onChange: (e) => B(e, n),
                  onClear: () => E(n),
                  onReorder: y,
                  isDropHovered: n === j,
                },
                "choice-".concat(n),
              ),
            ),
            C.length !== x.mb &&
              (0, l.jsxs)("div", {
                className: g.addItemContainer,
                children: [
                  (0, l.jsx)(d.CirclePlusIcon, {
                    size: "custom",
                    height: 17,
                    width: 17,
                    color: c.Z.unsafe_rawColors.BLUE_345.css,
                  }),
                  (0, l.jsx)(d.Clickable, {
                    className: g.addItemButton,
                    onClick: () => {
                      null != b && v(null), C.length !== x.mb && _([...C, ""]);
                    },
                    children: (0, l.jsx)(d.Text, {
                      color: "text-link",
                      variant: "text-md/normal",
                      children: h.intl.string(h.t.sVfx9v),
                    }),
                  }),
                ],
              }),
          ],
        });
      };
    },
    516497: function (e, n, t) {
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
//# sourceMappingURL=e0e40097914e0836c9c2.js.map
