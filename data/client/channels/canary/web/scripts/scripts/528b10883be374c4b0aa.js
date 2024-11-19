"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16114"],
  {
    11265: function (e, n, t) {
      t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        r = t.n(a),
        s = t(100621),
        o = t(481060),
        c = t(393238),
        d = t(388032),
        u = t(379e3);
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
          [j, C] = l.useState(!1),
          { ref: p, height: N = 0 } = (0, c.Z)(),
          { ref: I, height: T = 0 } = (0, c.Z)(),
          [F, b] = l.useState(a),
          y = (0, o.useSpring)(
            {
              height: F ? T + N : N,
              config: { ...s.config.stiff, clamp: !0 },
              onStart: () => {
                C(!1);
              },
              onRest: () => {
                C(!0);
              },
            },
            g || f ? "animate-never" : "respect-motion-settings",
          );
        return (
          l.useLayoutEffect(() => {
            C(!1), b(a);
          }, [a]),
          l.useLayoutEffect(() => {
            let e = setTimeout(() => {
              v(!1);
            }, 100);
            return () => clearTimeout(e);
          }, []),
          (0, i.jsx)(o.Clickable, {
            className: r()(u.editCard, { [u.toggled]: a, [u.noBackground]: h }),
            children: (0, i.jsxs)(s.animated.div, {
              className: r()(u.contentExpandContainer, {
                [u.showOverflow]: a && j,
              }),
              style: y,
              children: [
                (0, i.jsx)(o.Clickable, {
                  innerRef: p,
                  onClick: m ? void 0 : x,
                  className: r()(u.innerHeader, { [u.toggled]: a && m }),
                  "aria-label": d.intl.string(d.t.dcl9MT),
                  children: n,
                }),
                (0, i.jsx)("div", { ref: I, children: t }),
              ],
            }),
          })
        );
      });
    },
    571728: function (e, n, t) {
      t.d(n, {
        A: function () {
          return a;
        },
      });
      var i = t(442837),
        l = t(826581);
      function a(e) {
        let { guildId: n } = e;
        return (0, i.e7)(
          [l.Z],
          () => l.Z.getSubmittedGuildJoinRequestTotal(n),
          [n],
        );
      }
    },
    5056: function (e, n, t) {
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        r = t.n(a),
        s = t(481060),
        o = t(838221),
        c = t(246364),
        d = t(700833),
        u = t(388032),
        m = t(631403);
      function x(e) {
        let { onClick: n, text: t, icon: l } = e;
        return (0, i.jsx)("div", {
          className: m.addFormFieldContainer,
          children: (0, i.jsxs)(s.Clickable, {
            className: m.addFormField,
            onClick: n,
            children: [
              (0, i.jsx)(l, {
                className: m.icon,
                size: "xs",
                color: "currentColor",
              }),
              (0, i.jsx)(s.FormText, {
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
                ? (0, s.openModalLazy)(async () => {
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
          className: r()(m.spacingContainer, m.backgroundContainer),
          children: [
            h &&
              (0, i.jsx)("div", {
                className: m.containerTopHat,
                children: (0, i.jsx)(s.Text, {
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
                  children: (0, i.jsx)(s.PlusSmallIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 18,
                    height: 20,
                    className: m.icon,
                  }),
                }),
                (0, i.jsxs)(s.FormSection, {
                  children: [
                    (0, i.jsx)(s.FormTitle, {
                      tag: "h3",
                      className: m.leftRailIconContainerTitle,
                      children: u.intl.string(u.t["7v2xvr"]),
                    }),
                    (0, i.jsx)(s.FormText, {
                      className: m.leftRailIconContainerDescription,
                      type: s.FormText.Types.DESCRIPTION,
                      children: u.intl.string(u.t.DyARHR),
                    }),
                    (0, i.jsx)(x, {
                      formFieldType: c.QJ.TEXT_INPUT,
                      addFormField: n,
                      icon: (0, s.makeIconCompat)(o.Z),
                      text: u.intl.string(u.t.w6Q9w8),
                      onClick: () => v(c.QJ.TEXT_INPUT),
                    }),
                    (0, i.jsx)(x, {
                      formFieldType: c.QJ.PARAGRAPH,
                      addFormField: n,
                      icon: s.ChannelListIcon,
                      text: u.intl.string(u.t.gG0JBA),
                      onClick: () => v(c.QJ.PARAGRAPH),
                    }),
                    (0, i.jsx)(x, {
                      formFieldType: c.QJ.MULTIPLE_CHOICE,
                      addFormField: n,
                      icon: s.ListBulletsIcon,
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
        r = t(881052),
        s = t(484455),
        o = t(592286),
        c = t(388032),
        d = t(631403);
      n.Z = function (e) {
        let { guildId: n, onSave: t, formDescription: u, disable: m } = e,
          [x, f] = l.useState(null),
          [h, g] = l.useState(u),
          v = l.useRef(!1),
          j = l.useRef(!1);
        l.useEffect(
          () => () => {
            j.current = !0;
          },
          [],
        );
        let C = l.useCallback(async () => {
          if (!v.current) {
            f(null);
            try {
              await t(n, h);
            } catch (e) {
              if (j.current) return;
              f(new r.Hx(e).getAnyErrorMessage());
            } finally {
              if (j.current) return;
              v.current = !1;
            }
          }
        }, [h, n, t]);
        return (0, i.jsxs)(s.Z, {
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
              onBlur: C,
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
        r = t(481060),
        s = t(246364),
        o = t(700833),
        c = t(388032),
        d = t(631403);
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
              children: (0, i.jsx)(r.BookCheckIcon, {
                size: "custom",
                color: "currentColor",
                width: 18,
                height: 20,
                className: d.icon,
              }),
            }),
            (0, i.jsxs)(r.FormSection, {
              children: [
                (0, i.jsx)(r.FormTitle, {
                  tag: "h3",
                  className: d.leftRailIconContainerTitle,
                  children: c.intl.string(c.t.qWqnws),
                }),
                (0, i.jsx)(r.FormText, {
                  className: d.leftRailIconContainerDescription,
                  type: r.FormText.Types.DESCRIPTION,
                  children: c.intl.string(c.t["3+rPkp"]),
                }),
                (0, i.jsx)(r.Button, {
                  onClick: () => (0, o.Md)(s.QJ.TERMS, n, t),
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
        r = t(186078),
        s = t(137158),
        o = t(631403);
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
          } = e,
          { label: h } = n;
        return (0, i.jsx)(s.Z, {
          field: n,
          index: t,
          isDragEnabled: l,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: h,
          canRemove: x,
          actionsLocation: f,
          children: (0, i.jsx)(r.BO, {
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
          return v;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        r = t.n(a),
        s = t(392711),
        o = t(999153),
        c = t(584922),
        d = t(692547),
        u = t(481060),
        m = t(388032),
        x = t(631403);
      function f(e) {
        let {
          title: n,
          children: t,
          onEdit: l,
          onRemove: a,
          canRemove: s,
          actionsLocation: o,
        } = e;
        return (0, i.jsxs)("div", {
          className: x.backgroundContainer,
          children: [
            (0, i.jsxs)("div", {
              className: x.containerPadding,
              children: [
                (0, i.jsx)(u.FormTitle, {
                  tag: "h3",
                  className: x.containerTitle,
                  children: n,
                }),
                t,
              ],
            }),
            "footer" === o &&
              (0, i.jsxs)(u.FormSection, {
                className: x.containerFooter,
                children: [
                  (0, i.jsx)(u.Tooltip, {
                    text: m.intl.string(m.t.B3Jj1N),
                    shouldShow: !s,
                    children: (e) =>
                      (0, i.jsx)(u.Button, {
                        ...e,
                        className: r()(x.removeButton, x.button),
                        size: u.Button.Sizes.SMALL,
                        look: u.Button.Looks.BLANK,
                        onClick: a,
                        disabled: !s,
                        children: m.intl.string(m.t.N86XcH),
                      }),
                  }),
                  (0, i.jsx)(u.Button, {
                    className: x.button,
                    size: u.Button.Sizes.SMALL,
                    color: u.Button.Colors.PRIMARY,
                    onClick: l,
                    children: m.intl.string(m.t.bt75u7),
                  }),
                ],
              }),
          ],
        });
      }
      let h = "FORM_FIELD";
      function g(e) {
        let { index: n, field: t, isDropHovered: a, onDrop: m } = e,
          g = (0, s.debounce)(async (e, n, t) => {
            await m(e, n, t);
          }),
          v = l.useRef(null),
          [, j] = (0, o.c)({
            type: h,
            item: { index: n, field: t },
            end: (e, n) => {
              null != e && !n.didDrop() && g(e.field, null, !0);
            },
          }),
          [, C] = (0, c.L)({
            accept: h,
            hover: (e, t) => {
              var i;
              let { index: l } = e,
                a =
                  null === (i = v.current) || void 0 === i
                    ? void 0
                    : i.getBoundingClientRect(),
                r = t.getClientOffset();
              if (null == a || null == r) return;
              let s = (a.bottom - a.top) / 2,
                o = r.y - a.top;
              (!(l < n) || !(o < s)) &&
                (!(l > n) || !(o < s)) &&
                l !== n &&
                g(e.field, n, !1);
            },
            drop: (e) => {
              g(e.field, n, !0);
            },
          });
        return (
          l.useLayoutEffect(
            () => (
              j(C(v)),
              () => {
                C(null), j(null);
              }
            ),
            [j, C],
          ),
          (0, i.jsxs)("div", {
            ref: v,
            "data-dnd-name": "field-".concat(n),
            className: r()(x.dragContainer, { [x.dropHovered]: a }),
            children: [
              (0, i.jsx)("div", {
                className: x.dragIconContainer,
                children: (0, i.jsx)(u.DragIcon, {
                  size: "xs",
                  className: x.dragIcon,
                  color: d.Z.unsafe_rawColors.PRIMARY_400.css,
                }),
              }),
              (0, i.jsx)(f, { ...e }),
            ],
          })
        );
      }
      function v(e) {
        return (0, i.jsxs)("div", {
          className: x.formFieldContainer,
          children: [
            (0, i.jsx)("div", {
              className: x.spacingContainer,
              children: e.isDragEnabled
                ? (0, i.jsx)(g, { ...e })
                : (0, i.jsx)(f, { ...e }),
            }),
            "side" === e.actionsLocation &&
              (0, i.jsxs)("div", {
                className: x.actionButtonsContainer,
                children: [
                  (0, i.jsx)(u.Clickable, {
                    className: x.actionButton,
                    onClick: e.onEdit,
                    "aria-label": m.intl.string(m.t.bt75u7),
                    children: (0, i.jsx)(u.PencilIcon, { size: "xs" }),
                  }),
                  e.canRemove &&
                    (0, i.jsx)(u.Clickable, {
                      className: x.actionButton,
                      onClick: e.onRemove,
                      "aria-label": m.intl.string(m.t.N86XcH),
                      children: (0, i.jsx)(u.TrashIcon, { size: "xs" }),
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
        r = t(388032),
        s = t(631403);
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
          } = e,
          { label: h, placeholder: g } = n;
        return (0, i.jsx)(a.Z, {
          field: n,
          index: t,
          isDragEnabled: o,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: h,
          canRemove: x,
          actionsLocation: f,
          children: (0, i.jsx)(l.Q8, {
            className: s.fieldBackground,
            placeholder: null != g ? g : r.intl.string(r.t["Sqn+Wl"]),
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
        r = t(481060),
        s = t(631403);
      function o(e) {
        let { title: n, children: t } = e;
        return (0, i.jsxs)(r.FormSection, {
          className: a()(
            s.backgroundContainer,
            s.spacingContainer,
            s.containerPadding,
          ),
          children: [
            (0, i.jsx)(r.FormTitle, {
              tag: "h3",
              className: s.containerTitle,
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
        r = t(692547),
        s = t(481060),
        o = t(259580),
        c = t(196345),
        d = t(137158),
        u = t(388032),
        m = t(631403);
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
            canRemove: j,
            title: C,
            actionsLocation: p,
          } = e,
          N = t.values,
          I = N.slice(0, 1),
          T = N.length - I.length;
        return (0, i.jsxs)(d.Z, {
          field: t,
          index: l,
          isDragEnabled: x,
          isDropHovered: f,
          onDrop: h,
          onEdit: g,
          onRemove: v,
          title: C,
          canRemove: j,
          actionsLocation: p,
          children: [
            (0, i.jsx)(c.EK, {
              className: a()(m.fieldBackground, { [m.withFooter]: 0 !== T }),
              terms: I,
              channelId: n,
            }),
            0 !== T &&
              (0, i.jsxs)(s.Clickable, {
                className: a()(m.fieldFooterContainer, m.clickable),
                onClick: g,
                children: [
                  (0, i.jsx)(s.FormText, {
                    className: m.clickable,
                    children: u.intl.format(u.t.jnhD0d, { count: T }),
                  }),
                  (0, i.jsx)(o.Z, {
                    className: m.termsFieldCaretIcon,
                    height: 14,
                    width: 14,
                    color: r.Z.unsafe_rawColors.WHITE_500.css,
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
        r = t(388032),
        s = t(631403);
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
          } = e,
          { label: h, placeholder: g } = n;
        return (0, i.jsx)(a.Z, {
          field: n,
          index: t,
          isDragEnabled: o,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: h,
          canRemove: x,
          actionsLocation: f,
          children: (0, i.jsx)(l.Gi, {
            className: s.fieldBackground,
            placeholder: null != g ? g : r.intl.string(r.t["Sqn+Wl"]),
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
        r = t(481060),
        s = t(496675),
        o = t(484455),
        c = t(981631),
        d = t(388032),
        u = t(631403);
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
          a = s.Z.can(c.Plq.MANAGE_GUILD, n),
          f = n.verificationLevel,
          h = f === c.sFg.VERY_HIGH ? r.MobilePhoneIcon : r.EnvelopeIcon,
          g = l.useMemo(() => m(f), [f]),
          v = x[f],
          j = (0, i.jsx)("div", {
            className: u.verificationLevelTitle,
            children: d.intl.format(d.t.OpV87e, {
              verificationLevelHook: function () {
                return (0, i.jsx)(
                  r.Text,
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
          C =
            f === c.sFg.VERY_HIGH
              ? d.intl.string(d.t.IlXyd3)
              : d.intl.string(d.t.JlzMPj);
        return (0, i.jsx)(o.Z, {
          title: j,
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
              (0, i.jsx)(r.Text, {
                className: u.guildVerificationText,
                variant: "text-sm/normal",
                children: C,
              }),
              a &&
                (0, i.jsx)(r.Clickable, {
                  className: u.iconInteractiveContainer,
                  onClick: () =>
                    (0, r.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("72458")
                        .then(t.bind(t, 694278));
                      return (t) => (0, i.jsx)(e, { ...t, guild: n });
                    }),
                  children: (0, i.jsx)(r.PencilIcon, {
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
    446945: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(481060),
        a = t(239091),
        r = t(838221),
        s = t(246364),
        o = t(700833),
        c = t(388032),
        d = t(207029);
      function u(e) {
        let { addFormField: n, onSelect: t, guild: u } = e;
        return (0, i.jsx)(l.Menu, {
          navId: "add-questions",
          className: d.menu,
          onClose: a.Zy,
          "aria-label": c.intl.string(c.t.liqwPD),
          onSelect: t,
          children: (0, i.jsxs)(l.MenuGroup, {
            children: [
              (0, i.jsx)(l.MenuItem, {
                id: "text-input",
                icon: (0, l.makeIconCompat)(r.Z),
                label: c.intl.string(c.t.w6Q9w8),
                action: () => (0, o.Md)(s.QJ.TEXT_INPUT, n, u),
              }),
              (0, i.jsx)(l.MenuItem, {
                id: "paragraph",
                icon: l.ChannelListIcon,
                label: c.intl.string(c.t.gG0JBA),
                action: () => (0, o.Md)(s.QJ.PARAGRAPH, n, u),
              }),
              (0, i.jsx)(l.MenuItem, {
                id: "multiple-choice",
                icon: l.ListBulletsIcon,
                label: c.intl.string(c.t.ooKh3t),
                action: () => (0, o.Md)(s.QJ.MULTIPLE_CHOICE, n, u),
              }),
            ],
          }),
        });
      }
      n.Z = function (e) {
        let { addFormField: n, guild: t } = e,
          r = (e) => {
            (0, a.vq)(
              e,
              (e) => (0, i.jsx)(u, { ...e, addFormField: n, guild: t }),
              { position: "top", align: "center" },
            );
          };
        return (0, i.jsx)(l.Tooltip, {
          text: c.intl.string(c.t.nsI4dX),
          children: (e) =>
            (0, i.jsxs)(l.Clickable, {
              ...e,
              className: d.container,
              onClick: r,
              children: [
                (0, i.jsx)(l.PlusSmallIcon, {
                  size: "md",
                  color: "currentColor",
                  className: d.icon,
                }),
                (0, i.jsx)(l.Text, {
                  color: "interactive-active",
                  variant: "text-md/semibold",
                  children: c.intl.string(c.t.CoHdoK),
                }),
              ],
            }),
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
        r = t(246364),
        s = t(405545),
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
            removeFormField: j,
            updateFormField: C,
            updateFormFieldOrder: p,
            canRemove: N,
            actionsLocation: I,
          } = e,
          T = async () => {
            await j(f);
          },
          F = async (e) => {
            await C(f, e);
          },
          b = async (e, n, t) => {
            await p(e, n, t);
          },
          y = (0, l.uniqueId)(),
          R = n === f,
          w = {
            key: y,
            index: f,
            isDragEnabled: g,
            isDropHovered: R,
            onEdit: () => {
              0 === v
                ? h(u, F, x)
                : (0, a.openModalLazy)(async () => {
                    let { default: e } = await t
                      .e("74673")
                      .then(t.bind(t, 394045));
                    return (n) =>
                      (0, i.jsx)(e, {
                        ...n,
                        guildId: x.id,
                        submittedGuildJoinRequestsCount: v,
                        onConfirm: () => h(u, F, x),
                      });
                  });
            },
            onRemove: T,
            onDrop: b,
            canRemove: N,
            actionsLocation: I,
          };
        switch (u.field_type) {
          case r.QJ.TERMS:
            return (0, i.jsx)(c.Z, {
              channelId: x.rulesChannelId,
              title: m.intl.string(m.t["53vNcH"]),
              formField: u,
              ...w,
            });
          case r.QJ.PARAGRAPH:
            return (0, i.jsx)(o.Z, { formField: u, ...w });
          case r.QJ.TEXT_INPUT:
            return (0, i.jsx)(d.Z, { formField: u, ...w });
          case r.QJ.MULTIPLE_CHOICE:
            return (0, i.jsx)(s.Z, { formField: u, ...w });
          default:
            return null;
        }
      }
      function f(e, n, l) {
        let s = { onCloseRequest: u.dG4 };
        switch (e) {
          case r.QJ.TERMS:
            return (0, a.openModalLazy)(async () => {
              let { default: e } = await t.e("5945").then(t.bind(t, 92451));
              return (t) =>
                (0, i.jsx)(e, { ...t, field: void 0, onSave: n, guild: l });
            }, s);
          case r.QJ.PARAGRAPH:
            return (0, a.openModalLazy)(async () => {
              let { ParagraphFormFieldModal: e } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            }, s);
          case r.QJ.TEXT_INPUT:
            return (0, a.openModalLazy)(async () => {
              let { TextInputFormFieldModal: e } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            }, s);
          case r.QJ.MULTIPLE_CHOICE:
            return (0, a.openModalLazy)(async () => {
              let { default: e } = await t.e("94064").then(t.bind(t, 607569));
              return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            }, s);
        }
      }
      function h(e, n, l) {
        let s = { onCloseRequest: u.dG4 };
        switch (e.field_type) {
          case r.QJ.TERMS:
            return (0, a.openModalLazy)(async () => {
              let { default: a } = await t.e("5945").then(t.bind(t, 92451));
              return (t) =>
                (0, i.jsx)(a, { ...t, field: e, onSave: n, guild: l });
            }, s);
          case r.QJ.PARAGRAPH:
            return (0, a.openModalLazy)(async () => {
              let { ParagraphFormFieldModal: l } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            }, s);
          case r.QJ.TEXT_INPUT:
            return (0, a.openModalLazy)(async () => {
              let { TextInputFormFieldModal: l } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            }, s);
          case r.QJ.MULTIPLE_CHOICE:
            return (0, a.openModalLazy)(async () => {
              let { default: l } = await t.e("94064").then(t.bind(t, 607569));
              return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            }, s);
        }
      }
    },
    755340: function (e, n, t) {
      t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        r = t(481060),
        s = t(496675),
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
        j = t(388032);
      n.Z = function (e) {
        let {
            guild: n,
            submittedGuildJoinRequestsCount: t,
            onFormFieldUpdate: C,
            hideVerificationLevelField: p,
            isClanContext: N,
            formDescription: I,
            onFieldsSave: T,
            onDescriptionSave: F,
          } = e,
          b = l.useRef(!1),
          [y, R] = l.useState(null),
          [w, E] = l.useState(e.formFields);
        l.useEffect(() => E(e.formFields), [e.formFields]);
        let k = l.useRef(e.formFields),
          M = l.useMemo(() => w.filter(c.kT), [w]),
          L = l.useMemo(() => w.filter(c._C), [w]),
          Z = L.length,
          P = l.useMemo(() => w.length === g.nx, [w]),
          S = l.useMemo(() => w.some(o.J), [w]),
          A = l.useMemo(() => w.some((e) => !(0, o.J)(e)), [w]),
          _ = Z > 0,
          H = n.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || N,
          D = l.useCallback(() => {
            (0, r.showToast)(
              (0, r.createToast)(
                j.intl.string(j.t.R0RpRU),
                r.ToastType.FAILURE,
              ),
            );
          }, []),
          J = (0, a.e7)([s.Z], () => s.Z.can(v.Plq.MANAGE_GUILD, n)),
          B = l.useCallback(
            async (e) => {
              if (!b.current) {
                (b.current = !0),
                  N && (e = e.filter((e) => e.field_type !== o.QJ.TERMS));
                try {
                  await T(n.id, e), C(), E(e), (k.current = e);
                } catch (e) {
                  throw (E(k.current), e);
                } finally {
                  null != y && R(null), (b.current = !1);
                }
              }
            },
            [y, n.id, C, T, N],
          ),
          z = l.useCallback(
            async (e) => {
              let n = e.field_type === o.QJ.TERMS ? [e, ...w] : [...w, e];
              await B(n);
            },
            [w, B],
          ),
          G = l.useCallback(
            async (e, n) => {
              if (w[e] === n) return;
              let t = [...w];
              (t[e] = n), await B(t);
            },
            [w, B],
          ),
          Q = l.useCallback(
            async (e, n, t) => {
              let i = w.indexOf(e),
                l = [...w];
              if (
                (null != n &&
                  n !== i &&
                  (l.splice(i, 1), l.splice(n, 0, e), E(l)),
                t)
              )
                try {
                  await B(l), null !== y && R(null);
                } catch (e) {
                  D();
                }
              else y !== n && R(n);
            },
            [y, w, B, D],
          ),
          U = l.useCallback(
            async (e) => {
              try {
                await B([...w.slice(0, e), ...w.slice(e + 1)]);
              } catch (e) {
                D();
              }
            },
            [w, B, D],
          ),
          O = J ? (N ? "side" : "footer") : "none",
          q = (0, i.jsxs)(i.Fragment, {
            children: [
              !p && (0, i.jsx)(x.ZP, { guild: n }),
              (0, i.jsx)(u.Z, {
                formDescription: I,
                guildId: n.id,
                onSave: F,
                disable: !J,
              }),
              J && !S && !P && (0, i.jsx)(m.Z, { addFormField: z, guild: n }),
              M.map((e) =>
                (0, h.a0)({
                  dropHoveredIndex: y,
                  formField: e,
                  guild: n,
                  index: w.indexOf(e),
                  isDragEnabled: !1,
                  submittedGuildJoinRequestsCount: t,
                  removeFormField: U,
                  updateFormField: G,
                  updateFormFieldOrder: Q,
                  canRemove: !0,
                  actionsLocation: O,
                }),
              ),
            ],
          });
        return H
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                !N && q,
                !A &&
                  (0, i.jsx)(d.Z, {
                    addFormField: z,
                    showManualApprovalWarning: !N && !_,
                    guild: n,
                    showHeader: !N,
                  }),
                L.map((e) =>
                  (0, h.a0)({
                    dropHoveredIndex: y,
                    formField: e,
                    guild: n,
                    index: w.indexOf(e),
                    isDragEnabled: _ && J,
                    submittedGuildJoinRequestsCount: t,
                    removeFormField: U,
                    updateFormField: G,
                    updateFormFieldOrder: Q,
                    canRemove: !(N && L.length <= 1) && J,
                    actionsLocation: O,
                  }),
                ),
                A && !P && J && (0, i.jsx)(f.Z, { addFormField: z, guild: n }),
              ],
            })
          : q;
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
        r = t(481060),
        s = t(176981);
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
        return (0, i.jsx)(r.Clickable, {
          onClick: d,
          onMouseDown: d,
          onMouseUp: d,
          className: a()(s.switch, o),
          ...c,
          children: (0, i.jsx)(r.Switch, {
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
        r = t.n(a),
        s = t(442837),
        o = t(481060),
        c = t(11265),
        d = t(863249),
        u = t(944163),
        m = t(246364),
        x = t(571728),
        f = t(755340),
        h = t(449226),
        g = t(388032),
        v = t(176981),
        j = t(13441);
      function C(e) {
        let {
            guild: n,
            isExpanded: a,
            emptyFormFields: r,
            hasTermsField: s,
          } = e,
          c = n.hasVerificationGate(),
          [u, m] = l.useState(c),
          x = (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          f = async (e) => {
            try {
              m(e), await d.ZP.enableVerificationForm(n.id, e);
            } catch {
              m(u);
            }
          },
          C = (e) => {
            e && r
              ? (0, o.openModalLazy)(async () => {
                  let { ConfirmModal: n } = await Promise.resolve().then(
                    t.bind(t, 481060),
                  );
                  return (t) =>
                    (0, i.jsx)(n, {
                      ...t,
                      header: g.intl.string(g.t.eSlxe3),
                      cancelText: g.intl.string(g.t.BvmRe3),
                      confirmText: g.intl.string(g.t.PYcfmp),
                      onConfirm: () => f(e),
                      children: (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: g.intl.string(g.t.uknrnp),
                      }),
                    });
                })
              : f(e);
          },
          p = () => {
            (0, o.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                t.e("80026"),
                t.e("36869"),
              ]).then(t.bind(t, 645264));
              return (t) =>
                (0, i.jsx)(e, { ...t, guildId: n.id, isPreview: !0 });
            });
          };
        return (0, i.jsxs)("div", {
          className: v.itemWrapper,
          children: [
            (0, i.jsxs)("div", {
              className: v.itemContent,
              children: [
                (0, i.jsx)(o.Heading, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: g.intl.string(g.t.NEXim5),
                }),
                (a || (r && !u)) &&
                  (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: g.intl.string(g.t["7W5uVl"]),
                  }),
                !a &&
                  (0, i.jsx)("div", {
                    className: j.pillRow,
                    children:
                      s &&
                      (0, i.jsxs)(o.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        className: v.valuePill,
                        children: [
                          (0, i.jsx)(o.BookCheckIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16,
                          }),
                          g.intl.string(g.t.A2v22t),
                        ],
                      }),
                  }),
              ],
            }),
            (0, i.jsx)("div", {
              className: j.previewAndEnable,
              children:
                a || u || !r
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.Clickable, {
                          onMouseDown: x,
                          onMouseUp: x,
                          onClick: (e) => {
                            x(e), p();
                          },
                          children: (0, i.jsx)(o.Tooltip, {
                            tooltipContentClassName: j.__invalid_tooltip,
                            text: g.intl.string(g.t.SKNnqq),
                            children: (e) =>
                              (0, i.jsx)(o.EyeIcon, {
                                size: "md",
                                color: "currentColor",
                                className: j.previewIcon,
                                ...e,
                              }),
                          }),
                        }),
                        (0, i.jsx)(h.Z, { checked: u, onChange: () => C(!u) }),
                      ],
                    })
                  : (0, i.jsx)(o.Button, {
                      size: o.Button.Sizes.SMALL,
                      children: g.intl.string(g.t.oRs6mJ),
                    }),
            }),
          ],
        });
      }
      async function p(e, n) {
        await d.ZP.updateVerificationForm(e, n);
      }
      async function N(e, n) {
        await d.ZP.updateVerificationFormDescription(e, n);
      }
      function I(e) {
        var n, t, a;
        let {
            guild: o,
            isClanContext: h = !1,
            onFieldsSave: g,
            onDescriptionSave: I,
            verificationForm: T,
          } = e,
          [F, b] = l.useState(h),
          y = l.useRef(!1),
          R = l.useCallback(() => {
            y.current = !0;
          }, []),
          w =
            null !== (n = (0, x.A)({ guildId: o.id })) && void 0 !== n ? n : 0,
          E = (0, s.e7)([u.Z], () => (null != T ? T : u.Z.get(o.id))),
          k =
            null !== (t = null == E ? void 0 : E.formFields) && void 0 !== t
              ? t
              : [];
        l.useEffect(() => {
          d.ZP.fetchVerificationForm(o.id);
        }, [o.id]);
        let M = null != E,
          L = !h;
        return (0, i.jsx)(c.Z, {
          renderHeader: L
            ? (0, i.jsx)(C, {
                guild: o,
                isExpanded: F,
                emptyFormFields:
                  (null == k ? void 0 : k.length) == null ||
                  (null == k ? void 0 : k.length) === 0,
                hasTermsField:
                  null == k
                    ? void 0
                    : k.some((e) => e.field_type === m.QJ.TERMS),
              })
            : null,
          isExpanded: F,
          onExpand: () => b(!F),
          disableAnimation: h,
          disableBackground: !L,
          children: (0, i.jsx)("div", {
            className: r()(v.itemBodyContainer, {
              [v.noPadding]: !L,
              [j.rulesScreeningItemsNoBorder]: !L,
            }),
            children:
              M &&
              (0, i.jsx)(f.Z, {
                guild: o,
                submittedGuildJoinRequestsCount: w,
                formFields: k,
                onFormFieldUpdate: R,
                hideVerificationLevelField: !0,
                isClanContext: h,
                onFieldsSave: null != g ? g : p,
                onDescriptionSave: null != I ? I : N,
                formDescription:
                  null !== (a = null == E ? void 0 : E.description) &&
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
      var l = t(325767);
      function a(e) {
        let {
          width: n = 17,
          height: t = 16,
          color: a = "currentColor",
          foreground: r,
          ...s
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.Z)(s),
          width: n,
          height: t,
          viewBox: "0 0 17 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("rect", {
              className: r,
              y: "5",
              width: "16",
              height: "2",
              rx: "1",
              fill: a,
            }),
            (0, i.jsx)("rect", {
              className: r,
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
//# sourceMappingURL=528b10883be374c4b0aa.js.map
