"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5945"],
  {
    915509: function (e, l, a) {
      a.d(l, {
        Z: function () {
          return c;
        },
      }),
        a(47120);
      var n = a(735250),
        t = a(470079),
        s = a(120356),
        r = a.n(s),
        o = a(481060),
        i = a(313201),
        u = a(689938),
        d = a(352784);
      function c(e) {
        let {
            errorText: l,
            title: a,
            description: s,
            transitionState: c,
            onCancel: E,
            onConfirm: f,
            children: _,
          } = e,
          m = (0, i.Dt)(),
          [R, I] = t.useState(!1),
          C = t.useCallback(async () => {
            I(!0);
            try {
              await f();
            } catch (e) {
              throw e;
            } finally {
              I(!1);
            }
          }, [f]);
        return (0, n.jsxs)(o.ModalRoot, {
          className: d.modal,
          transitionState: c,
          "aria-labelledby": m,
          size: o.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(o.ModalContent, {
              className: d.modalContent,
              children: [
                (0, n.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  id: m,
                  children: a,
                }),
                null != s && "" !== s
                  ? (0, n.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: d.description,
                      children: s,
                    })
                  : null,
                (0, n.jsx)("div", { className: d.body, children: _ }),
                null != l && "" !== l
                  ? (0, n.jsx)(o.Text, {
                      className: d.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: l,
                    })
                  : null,
              ],
            }),
            (0, n.jsxs)(o.ModalFooter, {
              children: [
                (0, n.jsx)(o.Button, {
                  submitting: R,
                  className: d.button,
                  size: o.Button.Sizes.SMALL,
                  color: o.Button.Colors.BRAND,
                  onClick: C,
                  children: u.Z.Messages.SAVE,
                }),
                (0, n.jsx)(o.Button, {
                  className: r()(d.cancelButton, d.button),
                  size: o.Button.Sizes.SMALL,
                  color: o.Button.Colors.PRIMARY,
                  onClick: E,
                  children: u.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    92451: function (e, l, a) {
      a.r(l), a(47120);
      var n = a(735250),
        t = a(470079),
        s = a(120356),
        r = a.n(s),
        o = a(97613),
        i = a.n(o),
        u = a(225857),
        d = a(290843),
        c = a(442837),
        E = a(780384),
        f = a(481060),
        _ = a(410575),
        m = a(881052),
        R = a(410030),
        I = a(541716),
        C = a(752305),
        x = a(893718),
        h = a(44315),
        M = a(592125),
        g = a(984933),
        p = a(246364),
        N = a(915509),
        L = a(592286),
        v = a(981631),
        B = a(689938),
        j = a(352784);
      let T = "RULE";
      function A(e) {
        let {
            rule: l,
            rulesChannel: a,
            index: s,
            onChange: o,
            onKeyDown: i,
            onClear: c,
            onRuleReorder: E,
            isDropHovered: _,
            focused: m,
            onFocus: R,
            previewEnabled: h,
          } = e,
          M = t.useRef(null),
          g = t.useRef(null),
          [{ textValue: p, richValue: N }, v] = t.useState((0, C.eK)(l.value)),
          [, A, b] = (0, u.c)({
            type: T,
            item: { rule: l, index: s },
            end: (e, l) => {
              null != e && !l.didDrop() && E(e.rule, null, !0);
            },
          }),
          [, S] = (0, d.L)({
            accept: T,
            hover: (e, l) => {
              var a;
              let { index: n } = e,
                t =
                  null === (a = M.current) || void 0 === a
                    ? void 0
                    : a.getBoundingClientRect(),
                r = l.getClientOffset();
              if (null == t || null == r) return;
              let o = (t.bottom - t.top) / 2,
                i = r.y - t.top;
              (!(n < s) || !(i < o)) &&
                (!(n > s) || !(i > o)) &&
                E(e.rule, s, !1);
            },
            drop: (e) => {
              E(e.rule, s, !0);
            },
          });
        t.useLayoutEffect(
          () => (
            A(g),
            b(S(M)),
            () => {
              A(null), S(null);
            }
          ),
          [A, S, b],
        );
        if (
          (t.useEffect(() => {
            "" !== l.value && "" === p && v((0, C.eK)(l.value));
          }, [l.value, p]),
          null == a)
        )
          return null;
        let F = "" !== l.value ? l.value : l.id;
        return (0, n.jsxs)("div", {
          ref: M,
          className: r()(j.draggableInputContainer, { [j.dragging]: _ }),
          "data-dnd-name": F,
          children: [
            (0, n.jsxs)("div", {
              className: j.inputWrapper,
              children: [
                (0, n.jsx)(f.Clickable, {
                  onMouseDown: () => R(s),
                  children: (0, n.jsx)(x.Z, {
                    innerClassName: j.rulesTextAreaInput,
                    type: I.I.RULES_INPUT,
                    textValue: p,
                    richValue: N,
                    channel: a,
                    placeholder:
                      B.Z.Messages.MEMBER_VERIFICATION_RULE_PLACEHOLDER,
                    focused: m,
                    onChange: (e, l, a) => {
                      let n = l;
                      n.length > L.fn && (n = n.slice(0, L.fn)),
                        l !== n && ((l = n), (a = (0, C.JM)(n))),
                        o(l),
                        v({ textValue: l, richValue: a });
                    },
                    onKeyDown: i,
                    canMentionChannels: h,
                    canMentionRoles: h,
                    maxCharacterCount: L.fn,
                    characterCountClassName: j.characterCount,
                    onSubmit: () =>
                      Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }),
                  }),
                }),
                (0, n.jsx)(f.Button, {
                  className: j.clearButton,
                  onClick: c,
                  look: f.Button.Looks.BLANK,
                  size: f.Button.Sizes.NONE,
                  children: (0, n.jsx)(f.CircleXIcon, {
                    size: "md",
                    color: "currentColor",
                    className: j.clearIcon,
                  }),
                }),
                (0, n.jsx)(f.Text, {
                  className: j.rulesInputNumber,
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: "".concat(s + 1, "."),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              ref: g,
              className: j.dragContainer,
              "data-dnd-name": F,
              children: (0, n.jsx)(f.DragIcon, {
                size: "xs",
                color: "currentColor",
                className: j.dragIcon,
              }),
            }),
          ],
        });
      }
      function b(e) {
        let { shortRule: l, fullRule: a, disabled: t, onClick: s } = e;
        return t
          ? (0, n.jsx)(f.Tooltip, {
              text: B.Z.Messages.MEMBER_VERIFICATION_RULE_LIMIT.format({
                number: L.X2,
              }),
              children: (e) =>
                (0, n.jsx)("div", {
                  ...e,
                  className: r()(j.exampleRule, { [j.disabled]: t }),
                  children: (0, n.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: l,
                  }),
                }),
            })
          : (0, n.jsx)(f.Clickable, {
              className: r()(j.exampleRule, { [j.disabled]: t }),
              onClick: () => s(a),
              children: (0, n.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: l,
              }),
            });
      }
      l.default = function (e) {
        let { field: l, onSave: a, onClose: s, guild: r } = e,
          o = (0, R.ZP)(),
          u = r.rulesChannelId,
          d = r.hasFeature(v.oNc.PREVIEW_ENABLED),
          I = (0, c.e7)([M.Z], () => (null != u ? M.Z.getChannel(u) : null)),
          C = (0, c.e7)([g.ZP], () => g.ZP.getDefaultChannel(r.id)),
          [x, T] = t.useState(
            (null == l ? void 0 : l.values) != null
              ? null == l
                ? void 0
                : l.values.map((e) => ({ id: i()(), value: e }))
              : [{ id: i()(), value: "" }],
          ),
          [S, F] = t.useState(null),
          [U, O] = t.useState(null),
          [Z, k] = t.useState(0),
          y = (e) => {
            if (x.length !== L.X2) {
              if (null != e && "" === x[x.length - 1].value) {
                let l = [...x];
                (l[x.length - 1].value = e), T(l), k(l.length - 1);
              } else
                T([...x, { id: i()(), value: null != e ? e : "" }]),
                  k(x.length);
            }
          },
          V = (e, l) => {
            let a = [...x];
            (a[l].value = e), T(a);
          },
          P = (e) => {
            let l = [...x.slice(0, e), ...x.slice(e + 1)];
            T(0 === l.length ? [{ id: i()(), value: "" }] : l);
          },
          D = t.useCallback(
            (e, l, a) => {
              if (null == x) return;
              let n = x.indexOf(e);
              if (null != l && l !== n) {
                let a = [...x];
                a.splice(n, 1), a.splice(l, 0, e), T(a);
              }
              a ? null !== U && O(null) : l !== U && O(l);
            },
            [U, x],
          ),
          w = async () => {
            null != S && F(null);
            let e = x.map((e) => e.value.trim()).filter((e) => "" !== e);
            if (0 === e.length) {
              F(B.Z.Messages.MEMBER_VERIFICATION_RULES_REQUIRED_ERROR);
              return;
            }
            let l = {
              field_type: p.QJ.TERMS,
              label: B.Z.Messages.MEMBER_VERIFICATION_FORM_RULES_LABEL,
              values: e,
              required: !0,
            };
            try {
              await a(l), s();
            } catch (e) {
              F(new m.Hx(e).getAnyErrorMessage());
            }
          },
          z = x.length === L.X2;
        return (0, n.jsx)(_.Z, {
          page: v.ZY5.GUILD_RULES_CREATE_MODAL,
          children: (0, n.jsxs)(N.Z, {
            ...e,
            errorText: S,
            title: B.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_RULES,
            onCancel: s,
            onConfirm: w,
            children: [
              x.map((e, l) =>
                (0, n.jsx)(
                  A,
                  {
                    rulesChannel: null != I ? I : C,
                    rule: e,
                    index: l,
                    onChange: (e) => V(e, l),
                    onClear: () => P(l),
                    onRuleReorder: D,
                    isDropHovered: l === U,
                    focused: l === Z,
                    onFocus: k,
                    previewEnabled: null == d || d,
                  },
                  e.id,
                ),
              ),
              !z &&
                (0, n.jsxs)("div", {
                  className: j.addItemContainer,
                  children: [
                    (0, n.jsx)(f.CirclePlusIcon, {
                      size: "custom",
                      height: 17,
                      width: 17,
                      color: (0, h.Lq)(
                        (0, E.wj)(o) ? v.Ilk.BLUE_345 : v.Ilk.BLUE_430,
                      ),
                    }),
                    (0, n.jsx)(f.Clickable, {
                      className: j.addItemButton,
                      onClick: () => y(),
                      children: (0, n.jsx)(f.Text, {
                        color: "text-link",
                        variant: "text-md/normal",
                        children: B.Z.Messages.MEMBER_VERIFICATION_ADD_RULE,
                      }),
                    }),
                  ],
                }),
              (0, n.jsx)("div", { className: j.divider }),
              (0, n.jsx)(f.FormTitle, {
                children:
                  B.Z.Messages.MEMBER_VERIFICATION_EXAMPLE_RULES_SUBTITLE,
              }),
              (0, n.jsxs)("div", {
                className: j.termsExampleRulesContainer,
                children: [
                  (0, n.jsxs)("div", {
                    className: j.termsExampleRulePairContainer,
                    children: [
                      (0, n.jsx)(b, {
                        shortRule:
                          B.Z.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL,
                        fullRule:
                          B.Z.Messages
                            .MEMBER_VERIFICATION_RULE_BE_RESPECTFUL_FULL,
                        disabled: z,
                        onClick: y,
                      }),
                      (0, n.jsx)(b, {
                        shortRule:
                          B.Z.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM,
                        fullRule:
                          B.Z.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM_FULL,
                        disabled: z,
                        onClick: y,
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: j.termsExampleRulePairContainer,
                    children: [
                      (0, n.jsx)(b, {
                        shortRule:
                          B.Z.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW,
                        fullRule:
                          B.Z.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW_FULL,
                        disabled: z,
                        onClick: y,
                      }),
                      (0, n.jsx)(b, {
                        shortRule: B.Z.Messages.MEMBER_VERIFICATION_RULE_SAFE,
                        fullRule:
                          B.Z.Messages.MEMBER_VERIFICATION_RULE_SAFE_FULL,
                        disabled: z,
                        onClick: y,
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
    352784: function (e, l, a) {
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
//# sourceMappingURL=310011e8225b2ff2dafa.js.map
