"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5945"],
  {
    915509: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var t = n(200651),
        a = n(192379),
        r = n(120356),
        i = n.n(r),
        s = n(481060),
        o = n(313201),
        u = n(388032),
        d = n(352784);
      function c(e) {
        let {
            errorText: l,
            title: n,
            description: r,
            transitionState: c,
            onCancel: f,
            onConfirm: m,
            children: x,
          } = e,
          h = (0, o.Dt)(),
          [C, p] = a.useState(!1),
          g = a.useCallback(async () => {
            p(!0);
            try {
              await m();
            } catch (e) {
              throw e;
            } finally {
              p(!1);
            }
          }, [m]);
        return (0, t.jsxs)(s.ModalRoot, {
          className: d.modal,
          transitionState: c,
          "aria-labelledby": h,
          size: s.ModalSize.SMALL,
          children: [
            (0, t.jsxs)(s.ModalContent, {
              className: d.modalContent,
              children: [
                (0, t.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  id: h,
                  children: n,
                }),
                null != r && "" !== r
                  ? (0, t.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: d.description,
                      children: r,
                    })
                  : null,
                (0, t.jsx)("div", { className: d.body, children: x }),
                null != l && "" !== l
                  ? (0, t.jsx)(s.Text, {
                      className: d.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: l,
                    })
                  : null,
              ],
            }),
            (0, t.jsxs)(s.ModalFooter, {
              children: [
                (0, t.jsx)(s.Button, {
                  submitting: C,
                  className: d.button,
                  size: s.Button.Sizes.SMALL,
                  color: s.Button.Colors.BRAND,
                  onClick: g,
                  children: u.intl.string(u.t.R3BPHx),
                }),
                (0, t.jsx)(s.Button, {
                  className: i()(d.cancelButton, d.button),
                  size: s.Button.Sizes.SMALL,
                  color: s.Button.Colors.PRIMARY,
                  onClick: f,
                  children: u.intl.string(u.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    92451: function (e, l, n) {
      n.r(l), n(47120);
      var t = n(200651),
        a = n(192379),
        r = n(120356),
        i = n.n(r),
        s = n(97613),
        o = n.n(s),
        u = n(999153),
        d = n(584922),
        c = n(442837),
        f = n(780384),
        m = n(481060),
        x = n(410575),
        h = n(881052),
        C = n(410030),
        p = n(541716),
        g = n(752305),
        v = n(893718),
        j = n(44315),
        I = n(592125),
        R = n(984933),
        b = n(246364),
        _ = n(915509),
        N = n(592286),
        E = n(981631),
        k = n(388032),
        B = n(352784);
      let y = "RULE";
      function S(e) {
        let {
            rule: l,
            rulesChannel: n,
            index: r,
            onChange: s,
            onKeyDown: o,
            onClear: c,
            onRuleReorder: f,
            isDropHovered: x,
            focused: h,
            onFocus: C,
            previewEnabled: j,
          } = e,
          I = a.useRef(null),
          R = a.useRef(null),
          [{ textValue: b, richValue: _ }, E] = a.useState((0, g.eK)(l.value)),
          [, S, T] = (0, u.c)({
            type: y,
            item: { rule: l, index: r },
            end: (e, l) => {
              null != e && !l.didDrop() && f(e.rule, null, !0);
            },
          }),
          [, L] = (0, d.L)({
            accept: y,
            hover: (e, l) => {
              var n;
              let { index: t } = e,
                a =
                  null === (n = I.current) || void 0 === n
                    ? void 0
                    : n.getBoundingClientRect(),
                i = l.getClientOffset();
              if (null == a || null == i) return;
              let s = (a.bottom - a.top) / 2,
                o = i.y - a.top;
              (!(t < r) || !(o < s)) &&
                (!(t > r) || !(o > s)) &&
                f(e.rule, r, !1);
            },
            drop: (e) => {
              f(e.rule, r, !0);
            },
          });
        a.useLayoutEffect(
          () => (
            S(R),
            T(L(I)),
            () => {
              S(null), L(null);
            }
          ),
          [S, L, T],
        );
        if (
          (a.useEffect(() => {
            "" !== l.value && "" === b && E((0, g.eK)(l.value));
          }, [l.value, b]),
          null == n)
        )
          return null;
        let D = "" !== l.value ? l.value : l.id;
        return (0, t.jsxs)("div", {
          ref: I,
          className: i()(B.draggableInputContainer, { [B.dragging]: x }),
          "data-dnd-name": D,
          children: [
            (0, t.jsxs)("div", {
              className: B.inputWrapper,
              children: [
                (0, t.jsx)(m.Clickable, {
                  onMouseDown: () => C(r),
                  children: (0, t.jsx)(v.Z, {
                    innerClassName: B.rulesTextAreaInput,
                    type: p.I.RULES_INPUT,
                    textValue: b,
                    richValue: _,
                    channel: n,
                    placeholder: k.intl.string(k.t["BRkD4+"]),
                    focused: h,
                    onChange: (e, l, n) => {
                      let t = l;
                      t.length > N.fn && (t = t.slice(0, N.fn)),
                        l !== t && ((l = t), (n = (0, g.JM)(t))),
                        s(l),
                        E({ textValue: l, richValue: n });
                    },
                    onKeyDown: o,
                    canMentionChannels: j,
                    canMentionRoles: j,
                    maxCharacterCount: N.fn,
                    characterCountClassName: B.characterCount,
                    onSubmit: () =>
                      Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }),
                  }),
                }),
                (0, t.jsx)(m.Button, {
                  className: B.clearButton,
                  onClick: c,
                  look: m.Button.Looks.BLANK,
                  size: m.Button.Sizes.NONE,
                  children: (0, t.jsx)(m.CircleXIcon, {
                    size: "md",
                    color: "currentColor",
                    className: B.clearIcon,
                  }),
                }),
                (0, t.jsx)(m.Text, {
                  className: B.rulesInputNumber,
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: "".concat(r + 1, "."),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              ref: R,
              className: B.dragContainer,
              "data-dnd-name": D,
              children: (0, t.jsx)(m.DragIcon, {
                size: "xs",
                color: "currentColor",
                className: B.dragIcon,
              }),
            }),
          ],
        });
      }
      function T(e) {
        let { shortRule: l, fullRule: n, disabled: a, onClick: r } = e;
        return a
          ? (0, t.jsx)(m.Tooltip, {
              text: k.intl.formatToPlainString(k.t.tU718P, { number: N.X2 }),
              children: (e) =>
                (0, t.jsx)("div", {
                  ...e,
                  className: i()(B.exampleRule, { [B.disabled]: a }),
                  children: (0, t.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: l,
                  }),
                }),
            })
          : (0, t.jsx)(m.Clickable, {
              className: i()(B.exampleRule, { [B.disabled]: a }),
              onClick: () => r(n),
              children: (0, t.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: l,
              }),
            });
      }
      l.default = function (e) {
        let { field: l, onSave: n, onClose: r, guild: i } = e,
          s = (0, C.ZP)(),
          u = i.rulesChannelId,
          d = i.hasFeature(E.oNc.PREVIEW_ENABLED),
          p = (0, c.e7)([I.Z], () => (null != u ? I.Z.getChannel(u) : null)),
          g = (0, c.e7)([R.ZP], () => R.ZP.getDefaultChannel(i.id)),
          [v, y] = a.useState(
            (null == l ? void 0 : l.values) != null
              ? null == l
                ? void 0
                : l.values.map((e) => ({ id: o()(), value: e }))
              : [{ id: o()(), value: "" }],
          ),
          [L, D] = a.useState(null),
          [P, A] = a.useState(null),
          [M, w] = a.useState(0),
          z = (e) => {
            if (v.length !== N.X2) {
              if (null != e && "" === v[v.length - 1].value) {
                let l = [...v];
                (l[v.length - 1].value = e), y(l), w(l.length - 1);
              } else
                y([...v, { id: o()(), value: null != e ? e : "" }]),
                  w(v.length);
            }
          },
          Z = (e, l) => {
            let n = [...v];
            (n[l].value = e), y(n);
          },
          U = (e) => {
            let l = [...v.slice(0, e), ...v.slice(e + 1)];
            y(0 === l.length ? [{ id: o()(), value: "" }] : l);
          },
          X = a.useCallback(
            (e, l, n) => {
              if (null == v) return;
              let t = v.indexOf(e);
              if (null != l && l !== t) {
                let n = [...v];
                n.splice(t, 1), n.splice(l, 0, e), y(n);
              }
              n ? null !== P && A(null) : l !== P && A(l);
            },
            [P, v],
          ),
          H = async () => {
            null != L && D(null);
            let e = v.map((e) => e.value.trim()).filter((e) => "" !== e);
            if (0 === e.length) {
              D(k.intl.string(k.t.TCHkcX));
              return;
            }
            let l = {
              field_type: b.QJ.TERMS,
              label: k.intl.string(k.t["9suSIC"]),
              values: e,
              required: !0,
            };
            try {
              await n(l), r();
            } catch (e) {
              D(new h.Hx(e).getAnyErrorMessage());
            }
          },
          K = v.length === N.X2;
        return (0, t.jsx)(x.Z, {
          page: E.ZY5.GUILD_RULES_CREATE_MODAL,
          children: (0, t.jsxs)(_.Z, {
            ...e,
            errorText: L,
            title: k.intl.string(k.t["3pz9t7"]),
            onCancel: r,
            onConfirm: H,
            children: [
              v.map((e, l) =>
                (0, t.jsx)(
                  S,
                  {
                    rulesChannel: null != p ? p : g,
                    rule: e,
                    index: l,
                    onChange: (e) => Z(e, l),
                    onClear: () => U(l),
                    onRuleReorder: X,
                    isDropHovered: l === P,
                    focused: l === M,
                    onFocus: w,
                    previewEnabled: null == d || d,
                  },
                  e.id,
                ),
              ),
              !K &&
                (0, t.jsxs)("div", {
                  className: B.addItemContainer,
                  children: [
                    (0, t.jsx)(m.CirclePlusIcon, {
                      size: "custom",
                      height: 17,
                      width: 17,
                      color: (0, j.Lq)(
                        (0, f.wj)(s) ? E.Ilk.BLUE_345 : E.Ilk.BLUE_430,
                      ),
                    }),
                    (0, t.jsx)(m.Clickable, {
                      className: B.addItemButton,
                      onClick: () => z(),
                      children: (0, t.jsx)(m.Text, {
                        color: "text-link",
                        variant: "text-md/normal",
                        children: k.intl.string(k.t.Cq5Jub),
                      }),
                    }),
                  ],
                }),
              (0, t.jsx)("div", { className: B.divider }),
              (0, t.jsx)(m.FormTitle, { children: k.intl.string(k.t.XHWj8f) }),
              (0, t.jsxs)("div", {
                className: B.termsExampleRulesContainer,
                children: [
                  (0, t.jsxs)("div", {
                    className: B.termsExampleRulePairContainer,
                    children: [
                      (0, t.jsx)(T, {
                        shortRule: k.intl.string(k.t.DXq2oa),
                        fullRule: k.intl.string(k.t.XudkSk),
                        disabled: K,
                        onClick: z,
                      }),
                      (0, t.jsx)(T, {
                        shortRule: k.intl.string(k.t.nSqTjI),
                        fullRule: k.intl.string(k.t.np91jI),
                        disabled: K,
                        onClick: z,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: B.termsExampleRulePairContainer,
                    children: [
                      (0, t.jsx)(T, {
                        shortRule: k.intl.string(k.t.AtRxsL),
                        fullRule: k.intl.string(k.t.PNIDDA),
                        disabled: K,
                        onClick: z,
                      }),
                      (0, t.jsx)(T, {
                        shortRule: k.intl.string(k.t["0K5NJi"]),
                        fullRule: k.intl.string(k.t.HolIDw),
                        disabled: K,
                        onClick: z,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    352784: function (e, l, n) {
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
//# sourceMappingURL=e1c9961d77aec21da10b.js.map
