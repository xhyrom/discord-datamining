"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5945"],
  {
    296991: function (e, n, t) {
      t.d(n, {
        k: function () {
          return T;
        },
      }),
        t(47120);
      var l = t(200651),
        a = t(192379),
        i = t(120356),
        r = t.n(i),
        o = t(97613),
        s = t.n(o),
        u = t(999153),
        d = t(584922),
        c = t(442837),
        f = t(481060),
        g = t(541716),
        p = t(752305),
        x = t(893718),
        m = t(592125),
        C = t(984933),
        h = t(540457),
        b = t(681460),
        v = t(592286),
        _ = t(981631),
        I = t(388032),
        j = t(190038);
      let k = "RULE";
      function N(e) {
        let {
            rule: n,
            rulesChannel: t,
            index: i,
            onChange: o,
            onKeyDown: s,
            onClear: c,
            onRuleReorder: m,
            isDropHovered: C,
            focused: h,
            onFocus: b,
            previewEnabled: _,
            isDragEnabled: N,
          } = e,
          T = a.useRef(null),
          B = a.useRef(null),
          [{ textValue: R, richValue: S }, E] = a.useState((0, p.eK)(n.value)),
          [, y, D] = (0, u.c)({
            type: k,
            item: { rule: n, index: i },
            end: (e, n) => {
              null != e && !n.didDrop() && m(e.rule, null, !0);
            },
          }),
          [, L] = (0, d.L)({
            accept: k,
            hover: (e, n) => {
              var t;
              let { index: l } = e,
                a =
                  null === (t = T.current) || void 0 === t
                    ? void 0
                    : t.getBoundingClientRect(),
                r = n.getClientOffset();
              if (null == a || null == r) return;
              let o = (a.bottom - a.top) / 2,
                s = r.y - a.top;
              (!(l < i) || !(s < o)) &&
                (!(l > i) || !(s > o)) &&
                m(e.rule, i, !1);
            },
            drop: (e) => {
              m(e.rule, i, !0);
            },
          });
        a.useLayoutEffect(
          () => (
            y(B),
            D(L(T)),
            () => {
              y(null), L(null);
            }
          ),
          [y, L, D],
        );
        if (
          (a.useEffect(() => {
            "" !== n.value && "" === R && E((0, p.eK)(n.value));
          }, [n.value, R]),
          null == t)
        )
          return null;
        let A = "" !== n.value ? n.value : n.id;
        return (0, l.jsx)("div", {
          ref: T,
          className: r()(j.draggableInputContainer, { [j.dragging]: C }),
          "data-dnd-name": A,
          children: (0, l.jsxs)("div", {
            className: j.inputWrapper,
            children: [
              (0, l.jsx)(f.Clickable, {
                onMouseDown: () => b(i),
                children: (0, l.jsx)(x.Z, {
                  innerClassName: j.rulesTextAreaInput,
                  type: g.Ie.RULES_INPUT,
                  textValue: R,
                  richValue: S,
                  channel: t,
                  placeholder: I.intl.string(I.t["BRkD4+"]),
                  focused: h,
                  onChange: (e, n, t) => {
                    let l = n;
                    l.length > v.fn && (l = l.slice(0, v.fn)),
                      n !== l && ((n = l), (t = (0, p.JM)(l))),
                      o(n),
                      E({ textValue: n, richValue: t });
                  },
                  onKeyDown: s,
                  canMentionChannels: _,
                  canMentionRoles: _,
                  maxCharacterCount: v.fn,
                  onSubmit: () =>
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }),
                }),
              }),
              (0, l.jsx)(f.Button, {
                className: j.clearButton,
                onClick: c,
                look: f.Button.Looks.BLANK,
                size: f.Button.Sizes.NONE,
                children: (0, l.jsx)(f.CircleXIcon, {
                  size: "md",
                  color: "currentColor",
                  className: j.clearIcon,
                }),
              }),
              (0, l.jsx)("div", {
                ref: B,
                className: j.dragContainer,
                "data-dnd-name": A,
                children:
                  N &&
                  (0, l.jsx)(f.DragIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: j.dragIcon,
                  }),
              }),
            ],
          }),
        });
      }
      function T(e) {
        let { rules: n, setRules: t, guild: i } = e,
          r = i.rulesChannelId,
          o = i.hasFeature(_.oNc.PREVIEW_ENABLED),
          u = (0, c.e7)([m.Z], () => (null != r ? m.Z.getChannel(r) : null)),
          d = (0, c.e7)([C.ZP], () => C.ZP.getDefaultChannel(i.id)),
          [g, p] = a.useState(null),
          [x, k] = a.useState(null),
          T = a.useCallback(
            (e) => {
              if (n.length !== v.X2) {
                if (null != e && "" === n[n.length - 1].value) {
                  let l = [...n];
                  (l[n.length - 1] = { ...l[n.length - 1], value: e }),
                    t(l),
                    k(l.length - 1);
                } else
                  t([...n, { id: s()(), value: null != e ? e : "" }]),
                    k(n.length);
              }
            },
            [n, t],
          ),
          B = a.useCallback(() => {
            T(void 0);
          }, [T]),
          R = (e, l) => {
            let a = [...n];
            (a[l] = { ...a[l], value: e }), t(a);
          },
          S = (e) => {
            let l = [...n.slice(0, e), ...n.slice(e + 1)];
            t(0 === l.length ? [{ id: s()(), value: "" }] : l);
          },
          E = a.useCallback(
            (e, l, a) => {
              if (null == n) return;
              let i = n.indexOf(e);
              if (null != l && l !== i) {
                let a = [...n];
                a.splice(i, 1), a.splice(l, 0, e), t(a);
              }
              a ? null !== g && p(null) : l !== g && p(l);
            },
            [g, n, t],
          ),
          y = n.length === v.X2,
          D = a.useMemo(() => {
            let e = y
              ? I.intl.formatToPlainString(I.t.tU718P, { number: v.X2 })
              : void 0;
            return [
              {
                text: I.intl.string(I.t.DXq2oa),
                onClick: () => T(I.intl.string(I.t.XudkSk)),
                disabled: y,
                tooltipText: e,
              },
              {
                text: I.intl.string(I.t.nSqTjI),
                onClick: () => T(I.intl.string(I.t.np91jI)),
                disabled: y,
                tooltipText: e,
              },
              {
                text: I.intl.string(I.t.AtRxsL),
                onClick: () => T(I.intl.string(I.t.PNIDDA)),
                disabled: y,
                tooltipText: e,
              },
              {
                text: I.intl.string(I.t["0K5NJi"]),
                onClick: () => T(I.intl.string(I.t.HolIDw)),
                disabled: y,
                tooltipText: e,
              },
            ];
          }, [T, y]);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: j.rulesContainer,
              children: n.map((e, t) =>
                (0, l.jsx)(
                  N,
                  {
                    rulesChannel: null != u ? u : d,
                    rule: e,
                    index: t,
                    onChange: (e) => R(e, t),
                    onClear: () => S(t),
                    onRuleReorder: E,
                    isDropHovered: t === g,
                    focused: t === x,
                    onFocus: k,
                    previewEnabled: null == o || o,
                    isDragEnabled: n.length > 1,
                  },
                  e.id,
                ),
              ),
            }),
            !y &&
              (0, l.jsx)(h.A, { text: I.intl.string(I.t.Cq5Jub), onClick: B }),
            (0, l.jsx)(f.Heading, {
              variant: "text-xs/bold",
              color: "text-muted",
              className: j.exampleRulesTitle,
              children: I.intl.string(I.t.XHWj8f),
            }),
            (0, l.jsx)(b.j, { pills: D, pillClassName: j.pill }),
          ],
        });
      }
    },
    681460: function (e, n, t) {
      t.d(n, {
        j: function () {
          return s;
        },
      });
      var l = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        r = t(481060),
        o = t(410568);
      function s(e) {
        let { pills: n, pillClassName: t } = e;
        return (0, l.jsx)("div", {
          className: o.container,
          children: n.map((e) =>
            (0, l.jsx)(
              r.Tooltip,
              {
                text: e.tooltipText,
                shouldShow: null != e.tooltipText,
                children: (n) =>
                  (0, l.jsx)(r.Clickable, {
                    ...n,
                    className: i()(o.pill, { [o.disabled]: e.disabled }, t),
                    onClick: e.onClick,
                    children: (0, l.jsx)(r.Text, {
                      tag: "span",
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      children: e.text,
                    }),
                  }),
              },
              e.text,
            ),
          ),
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
        i = t(120356),
        r = t.n(i),
        o = t(481060),
        s = t(313201),
        u = t(388032),
        d = t(237384);
      function c(e) {
        let {
            errorText: n,
            title: t,
            description: i,
            transitionState: c,
            onCancel: f,
            onConfirm: g,
            children: p,
          } = e,
          x = (0, s.Dt)(),
          [m, C] = a.useState(!1),
          h = a.useCallback(async () => {
            C(!0);
            try {
              await g();
            } catch (e) {
              throw e;
            } finally {
              C(!1);
            }
          }, [g]);
        return (0, l.jsxs)(o.ModalRoot, {
          className: d.modal,
          transitionState: c,
          "aria-labelledby": x,
          size: o.ModalSize.SMALL,
          children: [
            (0, l.jsxs)(o.ModalContent, {
              className: d.modalContent,
              children: [
                (0, l.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  id: x,
                  children: t,
                }),
                null != i && "" !== i
                  ? (0, l.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: d.description,
                      children: i,
                    })
                  : null,
                (0, l.jsx)("div", { className: d.body, children: p }),
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
                  submitting: m,
                  className: d.button,
                  size: o.Button.Sizes.SMALL,
                  color: o.Button.Colors.BRAND,
                  onClick: h,
                  children: u.intl.string(u.t.R3BPHx),
                }),
                (0, l.jsx)(o.Button, {
                  className: r()(d.cancelButton, d.button),
                  size: o.Button.Sizes.SMALL,
                  color: o.Button.Colors.PRIMARY,
                  onClick: f,
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
        i = t(97613),
        r = t.n(i),
        o = t(410575),
        s = t(881052),
        u = t(246364),
        d = t(296991),
        c = t(915509),
        f = t(981631),
        g = t(388032);
      n.default = function (e) {
        let { field: n, onSave: t, onClose: i, guild: p } = e,
          [x, m] = a.useState(
            (null == n ? void 0 : n.values) != null
              ? null == n
                ? void 0
                : n.values.map((e) => ({ id: r()(), value: e }))
              : [{ id: r()(), value: "" }],
          ),
          [C, h] = a.useState(null),
          b = async () => {
            null != C && h(null);
            let e = x.map((e) => e.value.trim()).filter((e) => "" !== e);
            if (0 === e.length) {
              h(g.intl.string(g.t.TCHkcX));
              return;
            }
            let n = {
              field_type: u.QJ.TERMS,
              label: g.intl.string(g.t["9suSIC"]),
              values: e,
              required: !0,
            };
            try {
              await t(n), i();
            } catch (e) {
              h(new s.Hx(e).getAnyErrorMessage());
            }
          };
        return (0, l.jsx)(o.Z, {
          page: f.ZY5.GUILD_RULES_CREATE_MODAL,
          children: (0, l.jsx)(c.Z, {
            ...e,
            errorText: C,
            title: g.intl.string(g.t["3pz9t7"]),
            onCancel: i,
            onConfirm: b,
            children: (0, l.jsx)(d.k, { guild: p, rules: x, setRules: m }),
          }),
        });
      };
    },
    190038: function (e, n, t) {
      e.exports = {
        dragging: "dragging_b4e3a7",
        draggableInputContainer: "draggableInputContainer_b4e3a7",
        inputWrapper: "inputWrapper_b4e3a7",
        dragContainer: "dragContainer_b4e3a7",
        clearButton: "clearButton_b4e3a7",
        rulesContainer: "rulesContainer_b4e3a7",
        rulesTextAreaInput: "rulesTextAreaInput_b4e3a7",
        clearIcon: "clearIcon_b4e3a7",
        dragIcon: "dragIcon_b4e3a7",
        exampleRulesTitle: "exampleRulesTitle_b4e3a7",
        pill: "pill_b4e3a7",
      };
    },
    410568: function (e, n, t) {
      e.exports = {
        container: "container_d4eda4",
        pill: "pill_d4eda4",
        disabled: "disabled_d4eda4",
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
//# sourceMappingURL=c706a092ba1434c97593.js.map
