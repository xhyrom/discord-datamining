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
        o = t(120356),
        r = t.n(o),
        i = t(481060),
        s = t(313201),
        c = t(388032),
        d = t(237384);
      function u(e) {
        let {
            errorText: n,
            title: t,
            description: o,
            transitionState: u,
            onCancel: f,
            onConfirm: m,
            children: g,
          } = e,
          h = (0, s.Dt)(),
          [p, x] = a.useState(!1),
          C = a.useCallback(async () => {
            x(!0);
            try {
              await m();
            } catch (e) {
              throw e;
            } finally {
              x(!1);
            }
          }, [m]);
        return (0, l.jsxs)(i.ModalRoot, {
          className: d.modal,
          transitionState: u,
          "aria-labelledby": h,
          size: i.ModalSize.SMALL,
          children: [
            (0, l.jsxs)(i.ModalContent, {
              className: d.modalContent,
              children: [
                (0, l.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  id: h,
                  children: t,
                }),
                null != o && "" !== o
                  ? (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: d.description,
                      children: o,
                    })
                  : null,
                (0, l.jsx)("div", { className: d.body, children: g }),
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
                  submitting: p,
                  className: d.button,
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.BRAND,
                  onClick: C,
                  children: c.intl.string(c.t.R3BPHx),
                }),
                (0, l.jsx)(i.Button, {
                  className: r()(d.cancelButton, d.button),
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
        o = t(120356),
        r = t.n(o),
        i = t(999153),
        s = t(584922),
        c = t(692547),
        d = t(481060),
        u = t(881052),
        f = t(186523),
        m = t(246364),
        g = t(915509),
        h = t(592286),
        p = t(388032),
        x = t(237384);
      let C = "MULTIPLE_CHOICE",
        I = (e) => {
          let {
              choice: n,
              index: t,
              onChange: o,
              onClear: c,
              onReorder: u,
              isDropHovered: m,
            } = e,
            g = a.useRef(null),
            h = a.useRef(null),
            [, I, v] = (0, i.c)({
              type: C,
              item: { choice: n, index: t },
              end: (e, n) => {
                null != e && !n.didDrop() && u(e.choice, null, !0);
              },
            }),
            [, j] = (0, s.L)({
              accept: C,
              hover: (e, n) => {
                var l;
                let { index: a } = e,
                  o =
                    null === (l = g.current) || void 0 === l
                      ? void 0
                      : l.getBoundingClientRect(),
                  r = n.getClientOffset();
                if (null == o || null == r) return;
                let i = (o.bottom - o.top) / 2,
                  s = r.y - o.top;
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
                I(h),
                v(j(g)),
                () => {
                  I(null), j(null);
                }
              ),
              [I, j, v],
            ),
            (0, l.jsxs)("div", {
              ref: g,
              className: r()(x.draggableInputContainer, { [x.dragging]: m }),
              "data-dnd-name": n,
              children: [
                (0, l.jsx)("div", {
                  className: x.radioIconEmptyContainer,
                  children: (0, l.jsx)(f.Z, {
                    height: 20,
                    width: 20,
                    className: x.radioIconEmpty,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: x.inputWrapper,
                  children: [
                    (0, l.jsx)(d.TextInput, {
                      autoFocus: !0,
                      onChange: (e) => o(e),
                      placeholder: p.intl.formatToPlainString(p.t["Ep/pbG"], {
                        index: t + 1,
                      }),
                      value: n,
                    }),
                    (0, l.jsx)(d.Button, {
                      className: x.clearButton,
                      onClick: c,
                      look: d.Button.Looks.BLANK,
                      size: d.Button.Sizes.NONE,
                      children: (0, l.jsx)(d.CircleXIcon, {
                        size: "md",
                        color: "currentColor",
                        className: x.clearIcon,
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  ref: h,
                  className: x.dragContainer,
                  "data-dnd-name": n,
                  children: (0, l.jsx)(d.DragIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: x.dragIcon,
                  }),
                }),
              ],
            })
          );
        };
      n.default = function (e) {
        var n, t;
        let { field: o, onSave: r, onClose: i } = e,
          [s, f] = a.useState(
            null !== (n = null == o ? void 0 : o.label) && void 0 !== n
              ? n
              : "",
          ),
          [C, v] = a.useState(
            null !== (t = null == o ? void 0 : o.choices) && void 0 !== t
              ? t
              : [""],
          ),
          [j, _] = a.useState(null),
          [b, N] = a.useState(null),
          B = (e, n) => {
            null != j && _(null);
            let t = e.replace(/(\r\n|\n|\r)/g, " ");
            t.length > h.au && (t = t.slice(0, h.au));
            let l = [...C];
            (l[n] = t), v(l);
          },
          y = (e, n, t) => {
            if (null == C) return;
            null != j && _(null);
            let l = C.indexOf(e),
              a = [...C];
            null != n && n !== l && (a.splice(l, 1), a.splice(n, 0, e), v(a)),
              t ? null !== n && N(null) : n !== b && N(n);
          },
          E = (e) => {
            null != j && _(null);
            let n = [...C.slice(0, e), ...C.slice(e + 1)];
            v(0 === n.length ? [""] : n);
          },
          L = async () => {
            null != j && _(null);
            let e = s.trim();
            if ("" === e) {
              _(p.intl.string(p.t["G+TI4+"]));
              return;
            }
            if (0 === C.map((e) => e.trim()).filter((e) => "" !== e).length) {
              _(p.intl.string(p.t.jZoHgI));
              return;
            }
            let n = {
              field_type: m.QJ.MULTIPLE_CHOICE,
              label: e,
              choices: C,
              required: !0,
            };
            try {
              await r(n), i();
            } catch (e) {
              _(new u.Hx(e).getAnyErrorMessage());
            }
          };
        return (0, l.jsxs)(g.Z, {
          ...e,
          errorText: j,
          title: p.intl.string(p.t.ooKh3t),
          onConfirm: L,
          onCancel: i,
          children: [
            (0, l.jsx)(d.TextInput, {
              autoFocus: !0,
              className: x.spacedItem,
              onChange: (e) => {
                null != j && _(null);
                let n = e.replace(/(\r\n|\n|\r)/g, " ");
                n.length > h.XN && (n = e.slice(0, h.XN)), f(n);
              },
              placeholder: p.intl.string(p.t.fqVmbG),
              value: s,
            }),
            (0, l.jsx)("div", { className: x.divider }),
            C.map((e, n) =>
              (0, l.jsx)(
                I,
                {
                  choice: e,
                  index: n,
                  onChange: (e) => B(e, n),
                  onClear: () => E(n),
                  onReorder: y,
                  isDropHovered: n === b,
                },
                "choice-".concat(n),
              ),
            ),
            C.length !== h.mb &&
              (0, l.jsx)("div", {
                className: x.addItemContainer,
                children: (0, l.jsxs)(d.Clickable, {
                  className: x.addItemButton,
                  onClick: () => {
                    null != j && _(null), C.length !== h.mb && v([...C, ""]);
                  },
                  children: [
                    (0, l.jsx)(d.CirclePlusIcon, {
                      size: "custom",
                      height: 17,
                      width: 17,
                      color: c.Z.unsafe_rawColors.BLUE_345.css,
                    }),
                    (0, l.jsx)(d.Text, {
                      color: "text-link",
                      variant: "text-md/normal",
                      children: p.intl.string(p.t.sVfx9v),
                    }),
                  ],
                }),
              }),
          ],
        });
      };
    },
    237384: function (e, n, t) {
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
//# sourceMappingURL=19467b1c36c9791d7fcb.js.map
