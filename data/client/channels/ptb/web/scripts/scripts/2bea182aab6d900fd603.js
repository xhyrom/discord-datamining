"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16114"],
  {
    11265: function (e, n, t) {
      t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        s = t.n(a),
        r = t(666912),
        o = t(481060),
        c = t(393238),
        d = t(388032),
        u = t(872939);
      n.Z = l.memo(function (e) {
        let {
            renderHeader: n,
            children: t,
            isExpanded: a,
            isStuck: m,
            onExpand: x,
            disableAnimation: f,
            disableBackground: h,
          } = e,
          [g, v] = l.useState(!0),
          [C, j] = l.useState(!1),
          { ref: p, height: T = 0 } = (0, c.Z)(),
          { ref: N, height: I = 0 } = (0, c.Z)(),
          [y, R] = l.useState(a),
          F = (0, o.useSpring)(
            {
              height: y ? I + T : T,
              config: { ...r.config.stiff, clamp: !0 },
              onStart: () => {
                j(!1);
              },
              onRest: () => {
                j(!0);
              },
            },
            g || f ? "animate-never" : "respect-motion-settings",
          );
        return (
          l.useLayoutEffect(() => {
            j(!1), R(a);
          }, [a]),
          l.useLayoutEffect(() => {
            let e = setTimeout(() => {
              v(!1);
            }, 100);
            return () => clearTimeout(e);
          }, []),
          (0, i.jsx)(o.Clickable, {
            className: s()(u.editCard, { [u.toggled]: a, [u.noBackground]: h }),
            children: (0, i.jsxs)(r.animated.div, {
              className: s()(u.contentExpandContainer, {
                [u.showOverflow]: a && C,
              }),
              style: F,
              children: [
                (0, i.jsx)(o.Clickable, {
                  innerRef: p,
                  onClick: m ? void 0 : x,
                  className: s()(u.innerHeader, { [u.toggled]: a && m }),
                  "aria-label": d.intl.string(d.t.dcl9MT),
                  children: n,
                }),
                (0, i.jsx)("div", { ref: N, children: t }),
              ],
            }),
          })
        );
      });
    },
    5056: function (e, n, t) {
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        s = t.n(a),
        r = t(481060),
        o = t(838221),
        c = t(246364),
        d = t(700833),
        u = t(388032),
        m = t(31619);
      function x(e) {
        let { onClick: n, text: t, icon: l } = e;
        return (0, i.jsx)("div", {
          className: m.addFormFieldContainer,
          children: (0, i.jsxs)(r.Clickable, {
            className: m.addFormField,
            onClick: n,
            children: [
              (0, i.jsx)(l, {
                className: m.icon,
                size: "xs",
                color: "currentColor",
              }),
              (0, i.jsx)(r.FormText, {
                className: m.addFormFieldText,
                children: t,
              }),
            ],
          }),
        });
      }
      n.Z = function (e) {
        let {
            addFormField: n,
            showManualApprovalWarning: a,
            guild: f,
            showHeader: h,
          } = e,
          g = l.useCallback(
            (e) => {
              (0, d.Md)(e, n, f);
            },
            [n, f],
          ),
          v = l.useCallback(
            (e) => {
              a
                ? (0, r.openModalLazy)(async () => {
                    let { default: n } = await t
                      .e("54845")
                      .then(t.bind(t, 199836));
                    return (t) => (0, i.jsx)(n, { ...t, onSubmit: () => g(e) });
                  })
                : g(e);
            },
            [a, g],
          );
        return (0, i.jsxs)("div", {
          className: s()(m.spacingContainer, m.backgroundContainer),
          children: [
            h &&
              (0, i.jsx)("div", {
                className: m.containerTopHat,
                children: (0, i.jsx)(r.Text, {
                  className: m.containerTopHatText,
                  variant: "text-xs/bold",
                  color: "header-secondary",
                  children: u.intl.string(u.t.neG9U1),
                }),
              }),
            (0, i.jsxs)("div", {
              className: m.leftRailIconContainer,
              children: [
                (0, i.jsx)("div", {
                  className: m.iconContainer,
                  children: (0, i.jsx)(r.PlusSmallIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 18,
                    height: 20,
                    className: m.icon,
                  }),
                }),
                (0, i.jsxs)(r.FormSection, {
                  children: [
                    (0, i.jsx)(r.FormTitle, {
                      tag: "h3",
                      className: m.leftRailIconContainerTitle,
                      children: u.intl.string(u.t["7v2xvr"]),
                    }),
                    (0, i.jsx)(r.FormText, {
                      className: m.leftRailIconContainerDescription,
                      type: r.FormText.Types.DESCRIPTION,
                      children: u.intl.string(u.t.DyARHR),
                    }),
                    (0, i.jsx)(x, {
                      formFieldType: c.QJ.TEXT_INPUT,
                      addFormField: n,
                      icon: (0, r.makeIconCompat)(o.Z),
                      text: u.intl.string(u.t.w6Q9w8),
                      onClick: () => v(c.QJ.TEXT_INPUT),
                    }),
                    (0, i.jsx)(x, {
                      formFieldType: c.QJ.PARAGRAPH,
                      addFormField: n,
                      icon: r.ChannelListIcon,
                      text: u.intl.string(u.t.gG0JBA),
                      onClick: () => v(c.QJ.PARAGRAPH),
                    }),
                    (0, i.jsx)(x, {
                      formFieldType: c.QJ.MULTIPLE_CHOICE,
                      addFormField: n,
                      icon: r.ListBulletsIcon,
                      text: u.intl.string(u.t.ooKh3t),
                      onClick: () => v(c.QJ.MULTIPLE_CHOICE),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    565321: function (e, n, t) {
      t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(481060),
        s = t(881052),
        r = t(484455),
        o = t(592286),
        c = t(388032),
        d = t(31619);
      n.Z = function (e) {
        let { guildId: n, onSave: t, formDescription: u, disable: m } = e,
          [x, f] = l.useState(null),
          [h, g] = l.useState(u),
          v = l.useRef(!1),
          C = l.useRef(!1);
        l.useEffect(
          () => () => {
            C.current = !0;
          },
          [],
        );
        let j = l.useCallback(async () => {
          if (!v.current) {
            f(null);
            try {
              await t(n, h);
            } catch (e) {
              if (C.current) return;
              f(new s.Hx(e).getAnyErrorMessage());
            } finally {
              if (C.current) return;
              v.current = !1;
            }
          }
        }, [h, n, t]);
        return (0, i.jsxs)(r.Z, {
          title: c.intl.string(c.t.aDJAfn),
          children: [
            (0, i.jsx)(a.TextArea, {
              className: d.fieldBackground,
              maxLength: o.Us,
              value: null != h ? h : "",
              placeholder: c.intl.string(c.t.AJfv3d),
              onChange: (e) => {
                g(e);
              },
              onBlur: j,
              autosize: !0,
              disabled: m,
            }),
            null != x && "" !== x
              ? (0, i.jsx)(a.Text, {
                  className: d.errorText,
                  variant: "text-xs/normal",
                  color: "text-danger",
                  children: x,
                })
              : null,
          ],
        });
      };
    },
    297619: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        s = t(481060),
        r = t(246364),
        o = t(700833),
        c = t(388032),
        d = t(31619);
      n.Z = function (e) {
        let { addFormField: n, guild: t } = e;
        return (0, i.jsxs)("div", {
          className: a()(
            d.spacingContainer,
            d.leftRailIconContainer,
            d.backgroundContainer,
          ),
          children: [
            (0, i.jsx)("div", {
              className: d.iconContainer,
              children: (0, i.jsx)(s.BookCheckIcon, {
                size: "custom",
                color: "currentColor",
                width: 18,
                height: 20,
                className: d.icon,
              }),
            }),
            (0, i.jsxs)(s.FormSection, {
              children: [
                (0, i.jsx)(s.FormTitle, {
                  tag: "h3",
                  className: d.leftRailIconContainerTitle,
                  children: c.intl.string(c.t.qWqnws),
                }),
                (0, i.jsx)(s.FormText, {
                  className: d.leftRailIconContainerDescription,
                  type: s.FormText.Types.DESCRIPTION,
                  children: c.intl.string(c.t["3+rPkp"]),
                }),
                (0, i.jsx)(s.Button, {
                  onClick: () => (0, o.Md)(r.QJ.TERMS, n, t),
                  children: c.intl.string(c.t["5AelkZ"]),
                }),
              ],
            }),
          ],
        });
      };
    },
    405545: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        s = t(186078),
        r = t(137158),
        o = t(31619);
      n.Z = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: c,
            onDrop: d,
            onEdit: u,
            onRemove: m,
            canRemove: x,
            actionsLocation: f,
            fieldStyle: h,
          } = e,
          { label: g } = n;
        return (0, i.jsx)(r.Z, {
          field: n,
          index: t,
          isDragEnabled: l,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: g,
          canRemove: x,
          actionsLocation: f,
          fieldStyle: h,
          children: (0, i.jsx)(s.BO, {
            field: n,
            value: void 0,
            radioItemClassName: a()(
              o.fieldBackground,
              o.multipleChoiceFixedTextColor,
            ),
            disabled: !1,
          }),
        });
      };
    },
    137158: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        s = t.n(a),
        r = t(392711),
        o = t(999153),
        c = t(584922),
        d = t(793030),
        u = t(692547),
        m = t(481060),
        x = t(838221),
        f = t(246364),
        h = t(388032),
        g = t(31619);
      function v(e) {
        let { type: n } = e,
          t = l.useMemo(() => {
            switch (n) {
              case f.QJ.MULTIPLE_CHOICE:
                return {
                  icon: m.ListBulletsIcon,
                  text: h.intl.string(h.t.ooKh3t),
                };
              case f.QJ.PARAGRAPH:
                return {
                  icon: m.ChannelListIcon,
                  text: h.intl.string(h.t.gG0JBA),
                };
              case f.QJ.TEXT_INPUT:
                return {
                  icon: (0, m.makeIconCompat)(x.Z),
                  text: h.intl.string(h.t.w6Q9w8),
                };
              case f.QJ.TERMS:
                return {
                  icon: m.BookCheckIcon,
                  text: h.intl.string(h.t["3pz9t7"]),
                };
              default:
                return null;
            }
          }, [n]);
        return null == t
          ? null
          : (0, i.jsxs)("div", {
              className: g.typeTag,
              children: [
                (0, i.jsx)(t.icon, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(d.xv, {
                  variant: "text-sm/medium",
                  tag: "span",
                  children: t.text,
                }),
              ],
            });
      }
      function C(e) {
        let {
          title: n,
          children: t,
          onEdit: l,
          onRemove: a,
          canRemove: r,
          actionsLocation: o,
          fieldStyle: c,
          field: d,
        } = e;
        return (0, i.jsxs)("div", {
          className: g.backgroundContainer,
          children: [
            c === f.it.REGULAR
              ? (0, i.jsxs)("div", {
                  className: g.containerPadding,
                  children: [
                    (0, i.jsx)(m.FormTitle, {
                      tag: "h3",
                      className: g.containerTitle,
                      children: n,
                    }),
                    t,
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: g.compactContainer,
                  children: [
                    (0, i.jsx)(m.FormTitle, {
                      tag: "h3",
                      className: g.compactTitle,
                      children: n,
                    }),
                    (0, i.jsx)(v, { type: d.field_type }),
                  ],
                }),
            "footer" === o &&
              (0, i.jsxs)(m.FormSection, {
                className: g.containerFooter,
                children: [
                  (0, i.jsx)(m.Tooltip, {
                    text: h.intl.string(h.t.B3Jj1N),
                    shouldShow: !r,
                    children: (e) =>
                      (0, i.jsx)(m.Button, {
                        ...e,
                        className: s()(g.removeButton, g.button),
                        size: m.Button.Sizes.SMALL,
                        look: m.Button.Looks.BLANK,
                        onClick: a,
                        disabled: !r,
                        children: h.intl.string(h.t.N86XcH),
                      }),
                  }),
                  (0, i.jsx)(m.Button, {
                    className: g.button,
                    size: m.Button.Sizes.SMALL,
                    color: m.Button.Colors.PRIMARY,
                    onClick: l,
                    children: h.intl.string(h.t.bt75u7),
                  }),
                ],
              }),
          ],
        });
      }
      let j = "FORM_FIELD";
      function p(e) {
        let {
            index: n,
            field: t,
            isDropHovered: a,
            onDrop: d,
            fieldStyle: x,
          } = e,
          h = (0, r.debounce)(async (e, n, t) => {
            await d(e, n, t);
          }),
          v = l.useRef(null),
          [, p] = (0, o.c)({
            type: j,
            item: { index: n, field: t },
            end: (e, n) => {
              null != e && !n.didDrop() && h(e.field, null, !0);
            },
          }),
          [, T] = (0, c.L)({
            accept: j,
            hover: (e, t) => {
              var i;
              let { index: l } = e,
                a =
                  null === (i = v.current) || void 0 === i
                    ? void 0
                    : i.getBoundingClientRect(),
                s = t.getClientOffset();
              if (null == a || null == s) return;
              let r = (a.bottom - a.top) / 2,
                o = s.y - a.top;
              (!(l < n) || !(o < r)) &&
                (!(l > n) || !(o < r)) &&
                l !== n &&
                h(e.field, n, !1);
            },
            drop: (e) => {
              h(e.field, n, !0);
            },
          });
        return (
          l.useLayoutEffect(
            () => (
              p(T(v)),
              () => {
                T(null), p(null);
              }
            ),
            [p, T],
          ),
          (0, i.jsxs)("div", {
            ref: v,
            "data-dnd-name": "field-".concat(n),
            className: s()(g.dragContainer, { [g.dropHovered]: a }),
            children: [
              (0, i.jsx)("div", {
                className: s()(g.dragIconContainer, {
                  [g.compact]: x === f.it.COMPACT,
                }),
                children: (0, i.jsx)(m.DragIcon, {
                  size: "xs",
                  className: g.dragIcon,
                  color: u.Z.unsafe_rawColors.PRIMARY_400.css,
                }),
              }),
              (0, i.jsx)(C, { ...e }),
            ],
          })
        );
      }
      function T(e) {
        return (0, i.jsxs)("div", {
          className: s()(g.formFieldContainer, {
            [g.compact]: e.fieldStyle === f.it.COMPACT,
          }),
          children: [
            (0, i.jsx)("div", {
              className: g.spacingContainer,
              children: e.isDragEnabled
                ? (0, i.jsx)(p, { ...e })
                : (0, i.jsx)(C, { ...e }),
            }),
            "side" === e.actionsLocation &&
              (0, i.jsxs)("div", {
                className: s()(g.actionButtonsContainer, {
                  [g.compact]: e.fieldStyle === f.it.COMPACT,
                  [g.canRemove]: e.canRemove,
                }),
                children: [
                  (0, i.jsx)(m.Clickable, {
                    className: g.actionButton,
                    onClick: e.onEdit,
                    "aria-label": h.intl.string(h.t.bt75u7),
                    children: (0, i.jsx)(m.PencilIcon, { size: "xs" }),
                  }),
                  e.canRemove &&
                    (0, i.jsx)(m.Clickable, {
                      className: g.actionButton,
                      onClick: e.onRemove,
                      "aria-label": h.intl.string(h.t.N86XcH),
                      children: (0, i.jsx)(m.TrashIcon, { size: "xs" }),
                    }),
                ],
              }),
          ],
        });
      }
    },
    382574: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(73880),
        a = t(137158),
        s = t(388032),
        r = t(31619);
      n.Z = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: o,
            isDropHovered: c,
            onDrop: d,
            onEdit: u,
            onRemove: m,
            canRemove: x,
            actionsLocation: f,
            fieldStyle: h,
          } = e,
          { label: g, placeholder: v } = n;
        return (0, i.jsx)(a.Z, {
          field: n,
          index: t,
          isDragEnabled: o,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: g,
          canRemove: x,
          actionsLocation: f,
          fieldStyle: h,
          children: (0, i.jsx)(l.Q8, {
            className: r.fieldBackground,
            placeholder: null != v ? v : s.intl.string(s.t["Sqn+Wl"]),
            disabled: !0,
          }),
        });
      };
    },
    484455: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        s = t(481060),
        r = t(31619);
      function o(e) {
        let { title: n, children: t } = e;
        return (0, i.jsxs)(s.FormSection, {
          className: a()(
            r.backgroundContainer,
            r.spacingContainer,
            r.containerPadding,
          ),
          children: [
            (0, i.jsx)(s.FormTitle, {
              tag: "h3",
              className: r.containerTitle,
              children: n,
            }),
            t,
          ],
        });
      }
    },
    279988: function (e, n, t) {
      t(47120);
      var i = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        s = t(692547),
        r = t(481060),
        o = t(259580),
        c = t(196345),
        d = t(137158),
        u = t(388032),
        m = t(31619);
      n.Z = function (e) {
        let {
            channelId: n,
            formField: t,
            index: l,
            isDragEnabled: x,
            isDropHovered: f,
            onDrop: h,
            onEdit: g,
            onRemove: v,
            canRemove: C,
            title: j,
            actionsLocation: p,
            fieldStyle: T,
          } = e,
          N = t.values,
          I = N.slice(0, 1),
          y = N.length - I.length;
        return (0, i.jsxs)(d.Z, {
          field: t,
          index: l,
          isDragEnabled: x,
          isDropHovered: f,
          onDrop: h,
          onEdit: g,
          onRemove: v,
          title: j,
          canRemove: C,
          actionsLocation: p,
          fieldStyle: T,
          children: [
            (0, i.jsx)(c.EK, {
              className: a()(m.fieldBackground, { [m.withFooter]: 0 !== y }),
              terms: I,
              channelId: n,
            }),
            0 !== y &&
              (0, i.jsxs)(r.Clickable, {
                className: a()(m.fieldFooterContainer, m.clickable),
                onClick: g,
                children: [
                  (0, i.jsx)(r.FormText, {
                    className: m.clickable,
                    children: u.intl.format(u.t.jnhD0d, { count: y }),
                  }),
                  (0, i.jsx)(o.Z, {
                    className: m.termsFieldCaretIcon,
                    height: 14,
                    width: 14,
                    color: s.Z.unsafe_rawColors.WHITE_500.css,
                  }),
                ],
              }),
            (0, i.jsx)(c.G0, { disabled: !0, checked: !1 }),
          ],
        });
      };
    },
    786127: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(707592),
        a = t(137158),
        s = t(388032),
        r = t(31619);
      n.Z = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: o,
            isDropHovered: c,
            onDrop: d,
            onEdit: u,
            onRemove: m,
            canRemove: x,
            actionsLocation: f,
            fieldStyle: h,
          } = e,
          { label: g, placeholder: v } = n;
        return (0, i.jsx)(a.Z, {
          field: n,
          index: t,
          isDragEnabled: o,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: g,
          canRemove: x,
          actionsLocation: f,
          fieldStyle: h,
          children: (0, i.jsx)(l.Gi, {
            className: r.fieldBackground,
            placeholder: null != v ? v : s.intl.string(s.t["Sqn+Wl"]),
            disabled: !0,
          }),
        });
      };
    },
    456935: function (e, n, t) {
      t.d(n, {
        I9: function () {
          return m;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(692547),
        s = t(481060),
        r = t(496675),
        o = t(484455),
        c = t(981631),
        d = t(388032),
        u = t(31619);
      function m(e) {
        switch (e) {
          case c.sFg.LOW:
            return d.intl.string(d.t.SsCK8P);
          case c.sFg.MEDIUM:
            return d.intl.string(d.t.WwNoR0);
          case c.sFg.HIGH:
            return d.intl.string(d.t.I2jMUF);
          case c.sFg.VERY_HIGH:
            return d.intl.string(d.t.cJY8w8);
          default:
            return "";
        }
      }
      let x = {
        [c.sFg.NONE]: "",
        [c.sFg.LOW]: a.Z.unsafe_rawColors.GREEN_360.css,
        [c.sFg.MEDIUM]: a.Z.unsafe_rawColors.YELLOW_300.css,
        [c.sFg.HIGH]: a.Z.unsafe_rawColors.ORANGE_345.css,
        [c.sFg.VERY_HIGH]: a.Z.unsafe_rawColors.RED_400.css,
      };
      n.ZP = function (e) {
        let { guild: n } = e,
          a = r.Z.can(c.Plq.MANAGE_GUILD, n),
          f = n.verificationLevel,
          h = f === c.sFg.VERY_HIGH ? s.MobilePhoneIcon : s.EnvelopeIcon,
          g = l.useMemo(() => m(f), [f]),
          v = x[f],
          C = (0, i.jsx)("div", {
            className: u.verificationLevelTitle,
            children: d.intl.format(d.t.OpV87e, {
              verificationLevelHook: function () {
                return (0, i.jsx)(
                  s.Text,
                  {
                    className: u.verificationLevelHook,
                    style: { color: v },
                    variant: "text-sm/semibold",
                    children: g,
                  },
                  "hook",
                );
              },
            }),
          }),
          j =
            f === c.sFg.VERY_HIGH
              ? d.intl.string(d.t.IlXyd3)
              : d.intl.string(d.t.JlzMPj);
        return (0, i.jsx)(o.Z, {
          title: C,
          children: (0, i.jsxs)("div", {
            className: u.verificationContainer,
            children: [
              (0, i.jsx)(h, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: u.icon,
              }),
              (0, i.jsx)(s.Text, {
                className: u.guildVerificationText,
                variant: "text-sm/normal",
                children: j,
              }),
              a &&
                (0, i.jsx)(s.Clickable, {
                  className: u.iconInteractiveContainer,
                  onClick: () =>
                    (0, s.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("72458")
                        .then(t.bind(t, 694278));
                      return (t) => (0, i.jsx)(e, { ...t, guild: n });
                    }),
                  children: (0, i.jsx)(s.PencilIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                    className: u.iconInteractive,
                  }),
                }),
            ],
          }),
        });
      };
    },
    540457: function (e, n, t) {
      t.d(n, {
        A: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        a = t(826020);
      function s(e) {
        let { text: n, tooltipText: t, onClick: s } = e;
        return (0, i.jsx)(l.Tooltip, {
          text: t,
          shouldShow: null != t,
          children: (e) =>
            (0, i.jsxs)(l.Clickable, {
              ...e,
              className: a.container,
              onClick: s,
              children: [
                (0, i.jsx)(l.PlusSmallIcon, {
                  size: "md",
                  color: "currentColor",
                  className: a.icon,
                }),
                (0, i.jsx)(l.Text, {
                  color: "interactive-active",
                  variant: "text-md/semibold",
                  children: n,
                }),
              ],
            }),
        });
      }
    },
    446945: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(481060),
        a = t(239091),
        s = t(838221),
        r = t(246364),
        o = t(540457),
        c = t(700833),
        d = t(388032),
        u = t(117225);
      function m(e) {
        let { addFormField: n, onSelect: t, guild: o, allowTerms: m } = e;
        return (0, i.jsx)(l.Menu, {
          navId: "add-questions",
          className: u.menu,
          onClose: a.Zy,
          "aria-label": d.intl.string(d.t.liqwPD),
          onSelect: t,
          children: (0, i.jsxs)(l.MenuGroup, {
            children: [
              (0, i.jsx)(l.MenuItem, {
                id: "text-input",
                icon: (0, l.makeIconCompat)(s.Z),
                label: d.intl.string(d.t.w6Q9w8),
                action: () => (0, c.Md)(r.QJ.TEXT_INPUT, n, o),
              }),
              (0, i.jsx)(l.MenuItem, {
                id: "paragraph",
                icon: l.ChannelListIcon,
                label: d.intl.string(d.t.gG0JBA),
                action: () => (0, c.Md)(r.QJ.PARAGRAPH, n, o),
              }),
              (0, i.jsx)(l.MenuItem, {
                id: "multiple-choice",
                icon: l.ListBulletsIcon,
                label: d.intl.string(d.t.ooKh3t),
                action: () => (0, c.Md)(r.QJ.MULTIPLE_CHOICE, n, o),
              }),
              m &&
                (0, i.jsx)(l.MenuItem, {
                  id: "terms",
                  icon: l.BookCheckIcon,
                  label: d.intl.string(d.t["3pz9t7"]),
                  action: () => (0, c.Md)(r.QJ.TERMS, n, o),
                }),
            ],
          }),
        });
      }
      n.Z = function (e) {
        let { addFormField: n, guild: t, allowTerms: l } = e;
        return (0, i.jsx)(o.A, {
          text: d.intl.string(d.t.CoHdoK),
          tooltipText: d.intl.string(d.t.nsI4dX),
          onClick: (e) => {
            (0, a.vq)(
              e,
              (e) =>
                (0, i.jsx)(m, {
                  ...e,
                  addFormField: n,
                  guild: t,
                  allowTerms: l,
                }),
              { position: "top", align: "center" },
            );
          },
        });
      };
    },
    700833: function (e, n, t) {
      t.d(n, {
        Md: function () {
          return f;
        },
        a0: function () {
          return x;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(392711),
        a = t(481060),
        s = t(246364),
        r = t(405545),
        o = t(382574),
        c = t(279988),
        d = t(786127),
        u = t(981631),
        m = t(388032);
      function x(e) {
        let {
            dropHoveredIndex: n,
            formField: u,
            guild: x,
            index: f,
            isDragEnabled: g,
            submittedGuildJoinRequestsCount: v,
            removeFormField: C,
            updateFormField: j,
            updateFormFieldOrder: p,
            canRemove: T,
            actionsLocation: N,
            fieldStyle: I,
          } = e,
          y = async () => {
            await C(f);
          },
          R = async (e) => {
            await j(f, e);
          },
          F = async (e, n, t) => {
            await p(e, n, t);
          },
          E = (0, l.uniqueId)(),
          b = n === f,
          w = {
            key: E,
            index: f,
            isDragEnabled: g,
            isDropHovered: b,
            onEdit: () => {
              0 === v
                ? h(u, R, x)
                : (0, a.openModalLazy)(async () => {
                    let { default: e } = await t
                      .e("74673")
                      .then(t.bind(t, 394045));
                    return (n) =>
                      (0, i.jsx)(e, {
                        ...n,
                        guildId: x.id,
                        submittedGuildJoinRequestsCount: v,
                        onConfirm: () => h(u, R, x),
                      });
                  });
            },
            onRemove: y,
            onDrop: F,
            canRemove: T,
            actionsLocation: N,
            fieldStyle: I,
          };
        switch (u.field_type) {
          case s.QJ.TERMS:
            return (0, i.jsx)(c.Z, {
              channelId: x.rulesChannelId,
              title:
                I === s.it.COMPACT
                  ? m.intl.string(m.t["55+giY"])
                  : m.intl.string(m.t["53vNcH"]),
              formField: u,
              ...w,
            });
          case s.QJ.PARAGRAPH:
            return (0, i.jsx)(o.Z, { formField: u, ...w });
          case s.QJ.TEXT_INPUT:
            return (0, i.jsx)(d.Z, { formField: u, ...w });
          case s.QJ.MULTIPLE_CHOICE:
            return (0, i.jsx)(r.Z, { formField: u, ...w });
          default:
            return null;
        }
      }
      function f(e, n, l) {
        let r = { onCloseRequest: u.dG4 };
        switch (e) {
          case s.QJ.TERMS:
            return (0, a.openModalLazy)(async () => {
              let { default: e } = await t.e("5945").then(t.bind(t, 92451));
              return (t) =>
                (0, i.jsx)(e, { ...t, field: void 0, onSave: n, guild: l });
            }, r);
          case s.QJ.PARAGRAPH:
            return (0, a.openModalLazy)(async () => {
              let { ParagraphFormFieldModal: e } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            }, r);
          case s.QJ.TEXT_INPUT:
            return (0, a.openModalLazy)(async () => {
              let { TextInputFormFieldModal: e } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            }, r);
          case s.QJ.MULTIPLE_CHOICE:
            return (0, a.openModalLazy)(async () => {
              let { default: e } = await t.e("94064").then(t.bind(t, 607569));
              return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            }, r);
        }
      }
      function h(e, n, l) {
        let r = { onCloseRequest: u.dG4 };
        switch (e.field_type) {
          case s.QJ.TERMS:
            return (0, a.openModalLazy)(async () => {
              let { default: a } = await t.e("5945").then(t.bind(t, 92451));
              return (t) =>
                (0, i.jsx)(a, { ...t, field: e, onSave: n, guild: l });
            }, r);
          case s.QJ.PARAGRAPH:
            return (0, a.openModalLazy)(async () => {
              let { ParagraphFormFieldModal: l } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            }, r);
          case s.QJ.TEXT_INPUT:
            return (0, a.openModalLazy)(async () => {
              let { TextInputFormFieldModal: l } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            }, r);
          case s.QJ.MULTIPLE_CHOICE:
            return (0, a.openModalLazy)(async () => {
              let { default: l } = await t.e("94064").then(t.bind(t, 607569));
              return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            }, r);
        }
      }
    },
    755340: function (e, n, t) {
      t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        s = t(481060),
        r = t(496675),
        o = t(246364),
        c = t(983736),
        d = t(5056),
        u = t(565321),
        m = t(297619),
        x = t(456935),
        f = t(446945),
        h = t(700833),
        g = t(592286),
        v = t(981631),
        C = t(388032),
        j = t(491490);
      n.Z = function (e) {
        let {
            guild: n,
            submittedGuildJoinRequestsCount: t,
            onFormFieldUpdate: p,
            hideVerificationLevelField: T,
            isClanContext: N,
            formDescription: I,
            onFieldsSave: y,
            onDescriptionSave: R,
          } = e,
          F = l.useRef(!1),
          [E, b] = l.useState(null),
          [w, M] = l.useState(e.formFields);
        l.useEffect(() => M(e.formFields), [e.formFields]);
        let k = l.useRef(e.formFields),
          L = l.useMemo(() => w.filter(c.kT), [w]),
          P = l.useMemo(() => w.filter(c._C), [w]),
          S = P.length,
          A = l.useMemo(() => w.length === g.nx, [w]),
          Z = l.useMemo(() => w.some(o.J), [w]),
          _ = l.useMemo(() => w.some((e) => !(0, o.J)(e)), [w]),
          H = S > 0,
          J = n.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || N,
          D = l.useCallback(() => {
            (0, s.showToast)(
              (0, s.createToast)(
                C.intl.string(C.t.R0RpRU),
                s.ToastType.FAILURE,
              ),
            );
          }, []),
          B = (0, a.e7)([r.Z], () => r.Z.can(v.Plq.MANAGE_GUILD, n)),
          z = l.useCallback(
            async (e) => {
              if (!F.current) {
                (F.current = !0),
                  N && (e = e.filter((e) => e.field_type !== o.QJ.TERMS));
                try {
                  await y(n.id, e), p(), M(e), (k.current = e);
                } catch (e) {
                  throw (M(k.current), e);
                } finally {
                  null != E && b(null), (F.current = !1);
                }
              }
            },
            [E, n.id, p, y, N],
          ),
          Q = l.useCallback(
            async (e) => {
              let n = e.field_type === o.QJ.TERMS ? [e, ...w] : [...w, e];
              await z(n);
            },
            [w, z],
          ),
          G = l.useCallback(
            async (e, n) => {
              if (w[e] === n) return;
              let t = [...w];
              (t[e] = n), await z(t);
            },
            [w, z],
          ),
          U = l.useCallback(
            async (e, n, t) => {
              let i = w.indexOf(e),
                l = [...w];
              if (
                (null != n &&
                  n !== i &&
                  (l.splice(i, 1), l.splice(n, 0, e), M(l)),
                t)
              )
                try {
                  await z(l), null !== E && b(null);
                } catch (e) {
                  D();
                }
              else E !== n && b(n);
            },
            [E, w, z, D],
          ),
          O = l.useCallback(
            async (e) => {
              try {
                await z([...w.slice(0, e), ...w.slice(e + 1)]);
              } catch (e) {
                D();
              }
            },
            [w, z, D],
          ),
          q = B ? (N ? "side" : "footer") : "none",
          V = (0, i.jsxs)(i.Fragment, {
            children: [
              !T && (0, i.jsx)(x.ZP, { guild: n }),
              (0, i.jsx)(u.Z, {
                formDescription: I,
                guildId: n.id,
                onSave: R,
                disable: !B,
              }),
              B && !Z && !A && (0, i.jsx)(m.Z, { addFormField: Q, guild: n }),
              L.map((e) =>
                (0, h.a0)({
                  dropHoveredIndex: E,
                  formField: e,
                  guild: n,
                  index: w.indexOf(e),
                  isDragEnabled: !1,
                  submittedGuildJoinRequestsCount: t,
                  removeFormField: O,
                  updateFormField: G,
                  updateFormFieldOrder: U,
                  canRemove: !0,
                  actionsLocation: q,
                  fieldStyle: o.it.REGULAR,
                }),
              ),
            ],
          });
        return J
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                !N && V,
                !_ &&
                  (0, i.jsx)(d.Z, {
                    addFormField: Q,
                    showManualApprovalWarning: !N && !H,
                    guild: n,
                    showHeader: !N,
                  }),
                P.map((e) =>
                  (0, h.a0)({
                    dropHoveredIndex: E,
                    formField: e,
                    guild: n,
                    index: w.indexOf(e),
                    isDragEnabled: H && B,
                    submittedGuildJoinRequestsCount: t,
                    removeFormField: O,
                    updateFormField: G,
                    updateFormFieldOrder: U,
                    canRemove: !(N && P.length <= 1) && B,
                    actionsLocation: q,
                    fieldStyle: o.it.REGULAR,
                  }),
                ),
                _ &&
                  !A &&
                  B &&
                  (0, i.jsx)("div", {
                    className: j.addQuestionsContainer,
                    children: (0, i.jsx)(f.Z, { addFormField: Q, guild: n }),
                  }),
              ],
            })
          : V;
      };
    },
    449226: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        s = t(481060),
        r = t(232203);
      function o(e) {
        let {
            checked: n,
            onChange: t,
            disabled: l,
            className: o,
            tooltipProps: c,
          } = e,
          d = (e) => {
            e.stopPropagation(), e.preventDefault();
          };
        return (0, i.jsx)(s.Clickable, {
          onClick: d,
          onMouseDown: d,
          onMouseUp: d,
          className: a()(r.switch, o),
          ...c,
          children: (0, i.jsx)(s.Switch, {
            checked: n,
            onChange: t,
            disabled: l,
          }),
        });
      }
    },
    122051: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        s = t.n(a),
        r = t(442837),
        o = t(481060),
        c = t(11265),
        d = t(863249),
        u = t(944163),
        m = t(246364),
        x = t(983736),
        f = t(571728),
        h = t(755340),
        g = t(449226),
        v = t(388032),
        C = t(232203),
        j = t(713960);
      function p(e) {
        let {
            guild: n,
            isExpanded: a,
            emptyFormFields: s,
            hasTermsField: r,
          } = e,
          c = (0, x.Dc)(n),
          [u, m] = l.useState(c),
          f = (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          h = async (e) => {
            try {
              m(e), await d.ZP.enableVerificationForm(n.id, e);
            } catch {
              m(u);
            }
          },
          p = (e) => {
            e && s
              ? (0, o.openModalLazy)(async () => {
                  let { ConfirmModal: n } = await Promise.resolve().then(
                    t.bind(t, 481060),
                  );
                  return (t) =>
                    (0, i.jsx)(n, {
                      ...t,
                      header: v.intl.string(v.t.eSlxe3),
                      cancelText: v.intl.string(v.t.BvmRe3),
                      confirmText: v.intl.string(v.t.PYcfmp),
                      onConfirm: () => h(e),
                      children: (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: v.intl.string(v.t.uknrnp),
                      }),
                    });
                })
              : h(e);
          },
          T = () => {
            (0, o.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                t.e("99916"),
                t.e("80026"),
                t.e("14771"),
              ]).then(t.bind(t, 645264));
              return (t) =>
                (0, i.jsx)(e, { ...t, guildId: n.id, isPreview: !0 });
            });
          };
        return (0, i.jsxs)("div", {
          className: C.itemWrapper,
          children: [
            (0, i.jsxs)("div", {
              className: C.itemContent,
              children: [
                (0, i.jsx)(o.Heading, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: v.intl.string(v.t.NEXim5),
                }),
                (a || (s && !u)) &&
                  (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: v.intl.string(v.t["7W5uVl"]),
                  }),
                !a &&
                  (0, i.jsx)("div", {
                    className: j.pillRow,
                    children:
                      r &&
                      (0, i.jsxs)(o.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        className: C.valuePill,
                        children: [
                          (0, i.jsx)(o.BookCheckIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16,
                          }),
                          v.intl.string(v.t.A2v22t),
                        ],
                      }),
                  }),
              ],
            }),
            (0, i.jsx)("div", {
              className: j.previewAndEnable,
              children:
                a || u || !s
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.Clickable, {
                          onMouseDown: f,
                          onMouseUp: f,
                          onClick: (e) => {
                            f(e), T();
                          },
                          children: (0, i.jsx)(o.Tooltip, {
                            tooltipContentClassName: j.__invalid_tooltip,
                            text: v.intl.string(v.t.SKNnqq),
                            children: (e) =>
                              (0, i.jsx)(o.EyeIcon, {
                                size: "md",
                                color: "currentColor",
                                className: j.previewIcon,
                                ...e,
                              }),
                          }),
                        }),
                        (0, i.jsx)(g.Z, { checked: u, onChange: () => p(!u) }),
                      ],
                    })
                  : (0, i.jsx)(o.Button, {
                      size: o.Button.Sizes.SMALL,
                      children: v.intl.string(v.t.oRs6mJ),
                    }),
            }),
          ],
        });
      }
      async function T(e, n) {
        await d.ZP.updateVerificationForm(e, n);
      }
      async function N(e, n) {
        await d.ZP.updateVerificationFormDescription(e, n);
      }
      function I(e) {
        var n, t, a;
        let {
            guild: o,
            isClanContext: x = !1,
            onFieldsSave: g,
            onDescriptionSave: v,
            verificationForm: I,
          } = e,
          [y, R] = l.useState(x),
          F = l.useRef(!1),
          E = l.useCallback(() => {
            F.current = !0;
          }, []),
          b =
            null !== (n = (0, f.A)({ guildId: o.id })) && void 0 !== n ? n : 0,
          w = (0, r.e7)([u.Z], () => (null != I ? I : u.Z.get(o.id))),
          M =
            null !== (t = null == w ? void 0 : w.formFields) && void 0 !== t
              ? t
              : [];
        l.useEffect(() => {
          d.ZP.fetchVerificationForm(o.id);
        }, [o.id]);
        let k = null != w,
          L = !x;
        return (0, i.jsx)(c.Z, {
          renderHeader: L
            ? (0, i.jsx)(p, {
                guild: o,
                isExpanded: y,
                emptyFormFields:
                  (null == M ? void 0 : M.length) == null ||
                  (null == M ? void 0 : M.length) === 0,
                hasTermsField:
                  null == M
                    ? void 0
                    : M.some((e) => e.field_type === m.QJ.TERMS),
              })
            : null,
          isExpanded: y,
          onExpand: () => R(!y),
          disableAnimation: x,
          disableBackground: !L,
          children: (0, i.jsx)("div", {
            className: s()(C.itemBodyContainer, {
              [C.noPadding]: !L,
              [j.rulesScreeningItemsNoBorder]: !L,
            }),
            children:
              k &&
              (0, i.jsx)(h.Z, {
                guild: o,
                submittedGuildJoinRequestsCount: b,
                formFields: M,
                onFormFieldUpdate: E,
                hideVerificationLevelField: !0,
                isClanContext: x,
                onFieldsSave: null != g ? g : T,
                onDescriptionSave: null != v ? v : N,
                formDescription:
                  null !== (a = null == w ? void 0 : w.description) &&
                  void 0 !== a
                    ? a
                    : "",
              }),
          }),
        });
      }
    },
    838221: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(331595);
      function a(e) {
        let {
          width: n = 17,
          height: t = 16,
          color: a = "currentColor",
          foreground: s,
          ...r
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.Z)(r),
          width: n,
          height: t,
          viewBox: "0 0 17 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("rect", {
              className: s,
              y: "5",
              width: "16",
              height: "2",
              rx: "1",
              fill: a,
            }),
            (0, i.jsx)("rect", {
              className: s,
              y: "9",
              width: "8",
              height: "2",
              rx: "1",
              fill: a,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=2bea182aab6d900fd603.js.map
