"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5945"],
  {
    296991: function (e, n, t) {
      t.d(n, {
        k: function () {
          return k;
        },
      }),
        t(47120);
      var l = t(200651),
        a = t(192379),
        r = t(120356),
        i = t.n(r),
        o = t(97613),
        s = t.n(o),
        u = t(999153),
        d = t(584922),
        c = t(442837),
        m = t(780384),
        f = t(481060),
        x = t(410030),
        g = t(541716),
        h = t(752305),
        p = t(893718),
        C = t(44315),
        b = t(592125),
        I = t(984933),
        v = t(592286),
        _ = t(981631),
        j = t(388032),
        R = t(163537);
      let N = "RULE";
      function B(e) {
        let {
            rule: n,
            rulesChannel: t,
            index: r,
            onChange: o,
            onKeyDown: s,
            onClear: c,
            onRuleReorder: m,
            isDropHovered: x,
            focused: C,
            onFocus: b,
            previewEnabled: I,
          } = e,
          _ = a.useRef(null),
          B = a.useRef(null),
          [{ textValue: E, richValue: k }, y] = a.useState((0, h.eK)(n.value)),
          [, S, T] = (0, u.c)({
            type: N,
            item: { rule: n, index: r },
            end: (e, n) => {
              null != e && !n.didDrop() && m(e.rule, null, !0);
            },
          }),
          [, L] = (0, d.L)({
            accept: N,
            hover: (e, n) => {
              var t;
              let { index: l } = e,
                a =
                  null === (t = _.current) || void 0 === t
                    ? void 0
                    : t.getBoundingClientRect(),
                i = n.getClientOffset();
              if (null == a || null == i) return;
              let o = (a.bottom - a.top) / 2,
                s = i.y - a.top;
              (!(l < r) || !(s < o)) &&
                (!(l > r) || !(s > o)) &&
                m(e.rule, r, !1);
            },
            drop: (e) => {
              m(e.rule, r, !0);
            },
          });
        a.useLayoutEffect(
          () => (
            S(B),
            T(L(_)),
            () => {
              S(null), L(null);
            }
          ),
          [S, L, T],
        );
        if (
          (a.useEffect(() => {
            "" !== n.value && "" === E && y((0, h.eK)(n.value));
          }, [n.value, E]),
          null == t)
        )
          return null;
        let D = "" !== n.value ? n.value : n.id;
        return (0, l.jsxs)("div", {
          ref: _,
          className: i()(R.draggableInputContainer, { [R.dragging]: x }),
          "data-dnd-name": D,
          children: [
            (0, l.jsxs)("div", {
              className: R.inputWrapper,
              children: [
                (0, l.jsx)(f.Clickable, {
                  onMouseDown: () => b(r),
                  children: (0, l.jsx)(p.Z, {
                    innerClassName: R.rulesTextAreaInput,
                    type: g.Ie.RULES_INPUT,
                    textValue: E,
                    richValue: k,
                    channel: t,
                    placeholder: j.intl.string(j.t["BRkD4+"]),
                    focused: C,
                    onChange: (e, n, t) => {
                      let l = n;
                      l.length > v.fn && (l = l.slice(0, v.fn)),
                        n !== l && ((n = l), (t = (0, h.JM)(l))),
                        o(n),
                        y({ textValue: n, richValue: t });
                    },
                    onKeyDown: s,
                    canMentionChannels: I,
                    canMentionRoles: I,
                    maxCharacterCount: v.fn,
                    characterCountClassName: R.characterCount,
                    onSubmit: () =>
                      Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }),
                  }),
                }),
                (0, l.jsx)(f.Button, {
                  className: R.clearButton,
                  onClick: c,
                  look: f.Button.Looks.BLANK,
                  size: f.Button.Sizes.NONE,
                  children: (0, l.jsx)(f.CircleXIcon, {
                    size: "md",
                    color: "currentColor",
                    className: R.clearIcon,
                  }),
                }),
                (0, l.jsx)(f.Text, {
                  className: R.rulesInputNumber,
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: "".concat(r + 1, "."),
                }),
              ],
            }),
            (0, l.jsx)("div", {
              ref: B,
              className: R.dragContainer,
              "data-dnd-name": D,
              children: (0, l.jsx)(f.DragIcon, {
                size: "xs",
                color: "currentColor",
                className: R.dragIcon,
              }),
            }),
          ],
        });
      }
      function E(e) {
        let { shortRule: n, fullRule: t, disabled: a, onClick: r } = e;
        return a
          ? (0, l.jsx)(f.Tooltip, {
              text: j.intl.formatToPlainString(j.t.tU718P, { number: v.X2 }),
              children: (e) =>
                (0, l.jsx)("div", {
                  ...e,
                  className: i()(R.exampleRule, { [R.disabled]: a }),
                  children: (0, l.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: n,
                  }),
                }),
            })
          : (0, l.jsx)(f.Clickable, {
              className: i()(R.exampleRule, { [R.disabled]: a }),
              onClick: () => r(t),
              children: (0, l.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: n,
              }),
            });
      }
      function k(e) {
        let { rules: n, setRules: t, guild: r } = e,
          i = (0, x.ZP)(),
          o = r.rulesChannelId,
          u = r.hasFeature(_.oNc.PREVIEW_ENABLED),
          d = (0, c.e7)([b.Z], () => (null != o ? b.Z.getChannel(o) : null)),
          g = (0, c.e7)([I.ZP], () => I.ZP.getDefaultChannel(r.id)),
          [h, p] = a.useState(null),
          [N, k] = a.useState(0),
          y = (e) => {
            if (n.length !== v.X2) {
              if (null != e && "" === n[n.length - 1].value) {
                let l = [...n];
                (l[n.length - 1].value = e), t(l), k(l.length - 1);
              } else
                t([...n, { id: s()(), value: null != e ? e : "" }]),
                  k(n.length);
            }
          },
          S = (e, l) => {
            let a = [...n];
            (a[l].value = e), t(a);
          },
          T = (e) => {
            let l = [...n.slice(0, e), ...n.slice(e + 1)];
            t(0 === l.length ? [{ id: s()(), value: "" }] : l);
          },
          L = a.useCallback(
            (e, l, a) => {
              if (null == n) return;
              let r = n.indexOf(e);
              if (null != l && l !== r) {
                let a = [...n];
                a.splice(r, 1), a.splice(l, 0, e), t(a);
              }
              a ? null !== h && p(null) : l !== h && p(l);
            },
            [h, n, t],
          ),
          D = n.length === v.X2;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            n.map((e, n) =>
              (0, l.jsx)(
                B,
                {
                  rulesChannel: null != d ? d : g,
                  rule: e,
                  index: n,
                  onChange: (e) => S(e, n),
                  onClear: () => T(n),
                  onRuleReorder: L,
                  isDropHovered: n === h,
                  focused: n === N,
                  onFocus: k,
                  previewEnabled: null == u || u,
                },
                e.id,
              ),
            ),
            !D &&
              (0, l.jsxs)("div", {
                className: R.addItemContainer,
                children: [
                  (0, l.jsx)(f.CirclePlusIcon, {
                    size: "custom",
                    height: 17,
                    width: 17,
                    color: (0, C.Lq)(
                      (0, m.wj)(i) ? _.Ilk.BLUE_345 : _.Ilk.BLUE_430,
                    ),
                  }),
                  (0, l.jsx)(f.Clickable, {
                    className: R.addItemButton,
                    onClick: () => y(),
                    children: (0, l.jsx)(f.Text, {
                      color: "text-link",
                      variant: "text-md/normal",
                      children: j.intl.string(j.t.Cq5Jub),
                    }),
                  }),
                ],
              }),
            (0, l.jsx)("div", { className: R.divider }),
            (0, l.jsx)(f.FormTitle, { children: j.intl.string(j.t.XHWj8f) }),
            (0, l.jsxs)("div", {
              className: R.termsExampleRulesContainer,
              children: [
                (0, l.jsxs)("div", {
                  className: R.termsExampleRulePairContainer,
                  children: [
                    (0, l.jsx)(E, {
                      shortRule: j.intl.string(j.t.DXq2oa),
                      fullRule: j.intl.string(j.t.XudkSk),
                      disabled: D,
                      onClick: y,
                    }),
                    (0, l.jsx)(E, {
                      shortRule: j.intl.string(j.t.nSqTjI),
                      fullRule: j.intl.string(j.t.np91jI),
                      disabled: D,
                      onClick: y,
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: R.termsExampleRulePairContainer,
                  children: [
                    (0, l.jsx)(E, {
                      shortRule: j.intl.string(j.t.AtRxsL),
                      fullRule: j.intl.string(j.t.PNIDDA),
                      disabled: D,
                      onClick: y,
                    }),
                    (0, l.jsx)(E, {
                      shortRule: j.intl.string(j.t["0K5NJi"]),
                      fullRule: j.intl.string(j.t.HolIDw),
                      disabled: D,
                      onClick: y,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    915509: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var l = t(200651),
        a = t(192379),
        r = t(120356),
        i = t.n(r),
        o = t(481060),
        s = t(313201),
        u = t(388032),
        d = t(945330);
      function c(e) {
        let {
            errorText: n,
            title: t,
            description: r,
            transitionState: c,
            onCancel: m,
            onConfirm: f,
            children: x,
          } = e,
          g = (0, s.Dt)(),
          [h, p] = a.useState(!1),
          C = a.useCallback(async () => {
            p(!0);
            try {
              await f();
            } catch (e) {
              throw e;
            } finally {
              p(!1);
            }
          }, [f]);
        return (0, l.jsxs)(o.ModalRoot, {
          className: d.modal,
          transitionState: c,
          "aria-labelledby": g,
          size: o.ModalSize.SMALL,
          children: [
            (0, l.jsxs)(o.ModalContent, {
              className: d.modalContent,
              children: [
                (0, l.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  id: g,
                  children: t,
                }),
                null != r && "" !== r
                  ? (0, l.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: d.description,
                      children: r,
                    })
                  : null,
                (0, l.jsx)("div", { className: d.body, children: x }),
                null != n && "" !== n
                  ? (0, l.jsx)(o.Text, {
                      className: d.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: n,
                    })
                  : null,
              ],
            }),
            (0, l.jsxs)(o.ModalFooter, {
              children: [
                (0, l.jsx)(o.Button, {
                  submitting: h,
                  className: d.button,
                  size: o.Button.Sizes.SMALL,
                  color: o.Button.Colors.BRAND,
                  onClick: C,
                  children: u.intl.string(u.t.R3BPHx),
                }),
                (0, l.jsx)(o.Button, {
                  className: i()(d.cancelButton, d.button),
                  size: o.Button.Sizes.SMALL,
                  color: o.Button.Colors.PRIMARY,
                  onClick: m,
                  children: u.intl.string(u.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    92451: function (e, n, t) {
      t.r(n), t(47120);
      var l = t(200651),
        a = t(192379),
        r = t(97613),
        i = t.n(r),
        o = t(410575),
        s = t(881052),
        u = t(246364),
        d = t(296991),
        c = t(915509),
        m = t(981631),
        f = t(388032);
      n.default = function (e) {
        let { field: n, onSave: t, onClose: r, guild: x } = e,
          [g, h] = a.useState(
            (null == n ? void 0 : n.values) != null
              ? null == n
                ? void 0
                : n.values.map((e) => ({ id: i()(), value: e }))
              : [{ id: i()(), value: "" }],
          ),
          [p, C] = a.useState(null),
          b = async () => {
            null != p && C(null);
            let e = g.map((e) => e.value.trim()).filter((e) => "" !== e);
            if (0 === e.length) {
              C(f.intl.string(f.t.TCHkcX));
              return;
            }
            let n = {
              field_type: u.QJ.TERMS,
              label: f.intl.string(f.t["9suSIC"]),
              values: e,
              required: !0,
            };
            try {
              await t(n), r();
            } catch (e) {
              C(new s.Hx(e).getAnyErrorMessage());
            }
          };
        return (0, l.jsx)(o.Z, {
          page: m.ZY5.GUILD_RULES_CREATE_MODAL,
          children: (0, l.jsx)(c.Z, {
            ...e,
            errorText: p,
            title: f.intl.string(f.t["3pz9t7"]),
            onCancel: r,
            onConfirm: b,
            children: (0, l.jsx)(d.k, { guild: x, rules: g, setRules: h }),
          }),
        });
      };
    },
    163537: function (e, n, t) {
      e.exports = {
        addItemContainer: "addItemContainer_b4e3a7",
        addItemButton: "addItemButton_b4e3a7",
        dragging: "dragging_b4e3a7",
        draggableInputContainer: "draggableInputContainer_b4e3a7",
        inputWrapper: "inputWrapper_b4e3a7",
        clearButton: "clearButton_b4e3a7",
        rulesInputNumber: "rulesInputNumber_b4e3a7",
        rulesTextAreaInput: "rulesTextAreaInput_b4e3a7",
        clearIcon: "clearIcon_b4e3a7",
        dragContainer: "dragContainer_b4e3a7",
        dragIcon: "dragIcon_b4e3a7",
        divider: "divider_b4e3a7",
        termsExampleRulesContainer: "termsExampleRulesContainer_b4e3a7",
        termsExampleRulePairContainer: "termsExampleRulePairContainer_b4e3a7",
        exampleRule: "exampleRule_b4e3a7",
        disabled: "disabled_b4e3a7",
        characterCount: "characterCount_b4e3a7",
      };
    },
    945330: function (e, n, t) {
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
//# sourceMappingURL=2f55fc1ce56aedc3988e.js.map
